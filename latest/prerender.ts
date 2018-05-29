// Load zone.js for the server.
import "zone.js/dist/zone-node";
import "reflect-metadata";
import { readFileSync, statSync, readdirSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { copySync } from "fs-extra";
import { join } from "path";
import * as converter from "xml-js";
import { parse } from "url";
import * as makeDir from "make-dir";
import * as Promise from "bluebird";
import * as ora from 'ora';
import * as del from "del";
import * as replaceInFile from "replace-in-file";
import * as minimist from "minimist";
import {environment} from "./src/environments/environment";

import { enableProdMode } from "@angular/core";
// Faster server renders w/ Prod mode (dev mode never needed)
enableProdMode();

// Express Engine
import { ngExpressEngine } from "@nguniversal/express-engine";
// Import module map for lazy loading
import { provideModuleMap } from "@nguniversal/module-map-ngfactory-loader";
import { renderModuleFactory } from "@angular/platform-server";

const argv = minimist(process.argv.slice(2), {
  default: {
    deploy: false,
    directory: '../../clarity',
    base: '/'
  }
});

// * NOTE :: leave this as require() since this file is built Dynamically from webpack
const {
  AppServerModuleNgFactory,
  LAZY_MODULE_MAP
} = require("./dist/server/main.bundle");

// Path is relative to dist/ directory where it runs
const BROWSER_FOLDER = join(process.cwd(), "browser");
const OUTPUT_FOLDER = join(process.cwd(), argv.directory);
const SRC_FOLDER = join(process.cwd(), '../', 'src');

// Load the index.html file containing referances to your application bundle.
const index = readFileSync(join("browser", "index.html"), "utf8");
// Load the sitemap to know the list of urls to render
const sitemapFile = readFileSync(join(process.cwd(), "server", "sitemap.xml"), {encoding: 'utf8'});
const sitemap = converter.xml2js(sitemapFile, {compact: true});

// Build an array of routes and paths, only render the current version docs
const urls = sitemap.urlset.url
  .filter(item => {
    // Filter out the docs from other versions
    if (item.loc._text.indexOf('/documentation/') > -1 && item.loc._text.indexOf('/documentation/' + environment.version) === -1) {
      return false;
    }
    return true;
  })
  .map(item => {
    const url = parse(item.loc._text);
    const route = url.pathname.replace("clarity/", "");
    const fullPath = join(BROWSER_FOLDER, route);

    // Make sure the directory structure is there
    if (!existsSync(fullPath)) {
      makeDir.sync(fullPath);
    }
    // Return object with route and file paths
    return { route, fullPath };
  });

const deploy = () => {
  // Delete the existing build
  const paths = [
    `${OUTPUT_FOLDER}/*`,
    `${OUTPUT_FOLDER}/documentation/${environment.version}`,
    `!${OUTPUT_FOLDER}/documentation/**`, 
    `!${OUTPUT_FOLDER}/.git`
  ];
  const removed = del.sync(paths, {force: true});
  console.log("Cleared old build!");
  console.log(removed);

  // Update the index.html base href
  replaceInFile.sync({
    files: [BROWSER_FOLDER + "/**"],
    from: /<base href="\/">/gm,
    to: `<base href="${argv.base}">`
  });
  console.log('Updated base href');

  // Apply 404 page
  notFound();
  console.log('Generated 404 file!');

  // Apply redirects
  redirects();
  console.log('Generated redirect files!');

  // Copy to output folder
  copySync(BROWSER_FOLDER, OUTPUT_FOLDER, {overwrite: true});
  console.log(`Output copied to ${OUTPUT_FOLDER}!`);
}

// Writes rendered HTML to index.html, replacing the file if it already exists.
const renderer = url => {
  const spinner = ora('Route: ' + url.route).start();
  return renderModuleFactory(AppServerModuleNgFactory, {
    document: index,
    url: url.route,
    extraProviders: [provideModuleMap(LAZY_MODULE_MAP)]
  }).then(html => {
    writeFileSync(join(url.fullPath, "index.html"), html);
    spinner.succeed();
    return url;
  }, error => {
    spinner.fail('Unable to render ' + url);
    console.log(error);
  });
};

const notFound = () => {
  // Copy index.html from not-found to 404.html
  copySync(join(BROWSER_FOLDER, 'not-found', 'index.html'), join(BROWSER_FOLDER, '404.html'));
  // Remove not-found from sitemap
  const sitemapFile = readFileSync(join(BROWSER_FOLDER, "sitemap.xml"), {encoding: 'utf8'});
  const sitemap = converter.xml2js(sitemapFile, {compact: true});
  sitemap.urlset.url = sitemap.urlset.url.filter(item => {
    if (item.loc._text.indexOf('/not-found') >= 0) {
      return false;
    }
    return true;
  });
  writeFileSync(join(BROWSER_FOLDER, "sitemap.xml"), converter.js2xml(sitemap, {compact: true, spaces: 4}), {encoding: 'utf8'});
  // Delete the not-found directory
  del.sync([`${BROWSER_FOLDER}/not-found/**`]);
};

// Create redirects using html redirects :(
const redirects = () => {
  [
  ].forEach(file => {
    const content = `<html><head><meta http-equiv="refresh" content="0; URL='${file.to}'" /></head><body></body></html>`;
    if (!existsSync(file.from)) {
      makeDir.sync(file.from);
    }
    writeFileSync(join(file.from, 'index.html'), content);
  });
};

// Run through each route individually and report on completion
Promise.map(urls, renderer, { concurrency: 1 }).then(result => {
  console.log("Pages rendered!");
  if (argv.deploy) {
    deploy();
  }
  console.log("Complete!");
}, error => {
  console.log("Error in promise", error);
});