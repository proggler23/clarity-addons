(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{m81k:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),a=function(){},t=u("zl1X"),i=u("+Xo0"),o=u("0G9f"),s=u("8KBR"),c=u("5lT0"),d=u("gIcY"),r=u("QkwE"),g=u("vAyd"),m=u("KZfJ"),b=u("mrSG"),p='\n<div class="col-xs-12 col-lg-6">\n    <clr-view-edit-section [clrTitle]="sectionTitle" (clrSectionSubmitted)="sectionSubmitted()" (clrSectionEditCancelled)="sectionCancelled()">\n        <div view-block>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="first">First name</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="form-control text-truncate">{{first || "&nbsp;"}}</span>\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="last">Last name</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="form-control text-truncate">{{last || "&nbsp;"}}</span>\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="email">E-mail</label>\n                </div>\n                <div class="col-lg-8">\n                    <span class="form-control text-truncate">{{email || "&nbsp;"}}</span>\n                </div>\n            </div>\n        </div>\n        <div edit-block>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="first">First name</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="first" class="form-control" type="text" [(ngModel)]="editFirst" name="first">\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="last">Last name</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="last" class="form-control" type="text" [(ngModel)]="editLast" name="last">\n                </div>\n            </div>\n            <div class="form-group row">\n                <div class="col-lg-4">\n                    <label for="email">E-mail</label>\n                </div>\n                <div class="col-lg-8">\n                    <input id="email" class="form-control" type="text" [(ngModel)]="editEmail" name="email">\n                </div>\n            </div>\n        </div>\n    </clr-view-edit-section>\n</div>\n',h='\n<div class="col-xs-12">\n    <clr-view-edit-section [clrTitle]="compSectionTitle" [clrEditIcon]="compEditIcon" (clrSectionSubmitted)="compSectionSubmitted()" (clrSectionEditCancelled)="compSectionCancelled()">\n        <div view-block>\n            ...\n        </div>\n        <div edit-block>\n            ...\n        </div>\n    </clr-view-edit-section>\n</div>\n',v='\ncompEditIcon: string = "cog";\n',f=function(l){function n(){var n=l.call(this,"view-edit-section")||this;return n.htmlExampleSideBySide=p,n.htmlExampleFullIcon=h,n.htmlExampleFullIconAngular=v,n.birthdate="06/14/2018",n.gender="male",n.status="Active",n.editBirthdate=n.birthdate,n.editGender=n.gender,n.editStatus=1,n.first="Max",n.last="Mustermann",n.email="m.mustermann@mail.com",n.editFirst=n.first,n.editLast=n.last,n.editEmail=n.email,n.compSectionTitle="Different components",n.sectionTitle="Personal Data",n.addSectionTitle="Additional Data",n.compEditIcon="cog",n}return Object(b.b)(n,l),n.prototype.compSectionSubmitted=function(){this.birthdate=this.editBirthdate,this.gender=this.editGender,this.status=1===this.editStatus?"Active":"Inactive",this.terms=this.editTerms},n.prototype.compSectionCancelled=function(){this.editBirthdate=this.birthdate,this.editGender=this.gender,this.editStatus="Active"===this.status?1:2,this.editTerms=this.terms},n.prototype.getTermsText=function(){return this.terms?"I agreed":"I disagreed"},n.prototype.sectionSubmitted=function(){this.first=this.editFirst,this.last=this.editLast,this.email=this.editEmail},n.prototype.sectionCancelled=function(){this.editFirst=this.first,this.editLast=this.last,this.editEmail=this.email},n.prototype.addSectionSubmitted=function(){this.hobby=this.editHobby,this.licence=this.editLicence},n.prototype.addSectionCancelled=function(){this.editHobby=this.hobby,this.editLicence=this.licence},n}(u("N+3j").a),M=e.Ka({encapsulation:2,styles:[],data:{}});function C(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,268,"clr-doc-wrapper",[],[[2,"dox-wrapper",null]],null,null,i.b,i.a)),e.La(1,49152,null,0,o.a,[],{title:[0,"title"],newLayout:[1,"newLayout"],ui:[2,"ui"],ng:[3,"ng"]},null),(l()(),e.Ma(2,0,null,0,266,"article",[],null,null,null,null,null)),(l()(),e.Ma(3,0,null,null,3,"h5",[["class","component-summary"],["id","view-edit-section-header"]],null,null,null,null,null)),(l()(),e.eb(-1,null,[" The View-Edit Section (VES) is a basic component used to display and edit data. "])),(l()(),e.Ma(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" View-Edit Sections should semantically group information that belongs together, providing a meaningful information structure to the user. "])),(l()(),e.Ma(7,0,null,null,14,"div",[["id","design-guidelines"]],null,null,null,null,null)),(l()(),e.Ma(8,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["View-mode"])),(l()(),e.Ma(10,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" In view-mode the section consists of label-value pairs to display data to user. The user can switch the mode of the section clicking the pencil-icon when editing data is required. "])),(l()(),e.Ma(12,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Edit-mode"])),(l()(),e.Ma(14,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" In edit-mode the label-value pairs transform to label-input fields, a form, and can be edited. The changes can be saved or cancelled, which will return the VES back to view-mode. "])),(l()(),e.Ma(16,0,null,null,1,"h3",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Multiple View-Edit Sections"])),(l()(),e.Ma(18,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["There can be multiple View-Edit sections placed in the content area, multiple sections can be edited at once, no automatic inactivation of other View-Edit Sections should occur. "])),(l()(),e.Ma(20,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" The user needs to actively end the edit-mode by saving or cancelling the changes."])),(l()(),e.Ma(22,0,null,null,246,"div",[["id","code-examples"]],null,null,null,null,null)),(l()(),e.Ma(23,0,null,null,1,"h3",[["id","examples"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Code & Examples"])),(l()(),e.Ma(25,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" To layout the view-mode of the component simply add an element with attribute "])),(l()(),e.Ma(27,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["view-block"])),(l()(),e.eb(-1,null,[" and for the edit-mode of the component add an element with attribute "])),(l()(),e.Ma(30,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["edit-block"])),(l()(),e.eb(-1,null,[". Those blocks will get rendered into the body of the view-edit section in their corresponding modes. "])),(l()(),e.Ma(33,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Following interactions are available: "])),(l()(),e.Ma(35,0,null,null,20,"ul",[],null,null,null,null,null)),(l()(),e.Ma(36,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" To define the title add a "])),(l()(),e.Ma(38,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["[clrTitle]"])),(l()(),e.eb(-1,null,[" input to the component. "])),(l()(),e.Ma(41,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" To define the edit icon add a "])),(l()(),e.Ma(43,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["[clrEditIcon]"])),(l()(),e.eb(-1,null,[" input to the component. Every shape from clr-icon can be used. "])),(l()(),e.Ma(46,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" To react to submit clicks, bind to the event "])),(l()(),e.Ma(48,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["(clrSectionSubmitted)"])),(l()(),e.eb(-1,null,[". "])),(l()(),e.Ma(51,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" To react to cancel clicks, bind to the event "])),(l()(),e.Ma(53,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["(clrSectionEditCancelled)"])),(l()(),e.eb(-1,null,[". "])),(l()(),e.Ma(56,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Side by side example"])),(l()(),e.Ma(58,0,null,null,100,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(59,0,null,null,58,"div",[["class","col-xs-12 col-lg-6"]],null,null,null,null,null)),(l()(),e.Ma(60,0,null,null,57,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var e=!0,a=l.component;return"clrSectionSubmitted"===n&&(e=!1!==a.sectionSubmitted()&&e),"clrSectionEditCancelled"===n&&(e=!1!==a.sectionCancelled()&&e),e},s.f,s.c)),e.La(61,49152,null,0,c.f,[],{_title:[0,"_title"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),e.Ma(62,0,null,0,21,"div",[["view-block",""]],null,null,null,null,null)),(l()(),e.Ma(63,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(64,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(65,0,null,null,1,"label",[["for","first"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["First name"])),(l()(),e.Ma(67,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(68,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),e.eb(69,null,["",""])),(l()(),e.Ma(70,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(71,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(72,0,null,null,1,"label",[["for","last"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Last name"])),(l()(),e.Ma(74,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(75,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),e.eb(76,null,["",""])),(l()(),e.Ma(77,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(78,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(79,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["E-mail"])),(l()(),e.Ma(81,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(82,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),e.eb(83,null,["",""])),(l()(),e.Ma(84,0,null,1,33,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),e.Ma(85,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(86,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(87,0,null,null,1,"label",[["for","first"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["First name"])),(l()(),e.Ma(89,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(90,0,null,null,5,"input",[["class","form-control"],["id","first"],["name","first"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,91)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,91).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,91)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,91)._compositionEnd(u.target.value)&&a),"ngModelChange"===n&&(a=!1!==(t.editFirst=u)&&a),a},null,null)),e.La(91,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.d]),e.La(93,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(95,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(96,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(97,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(98,0,null,null,1,"label",[["for","last"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Last name"])),(l()(),e.Ma(100,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(101,0,null,null,5,"input",[["class","form-control"],["id","last"],["name","last"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,102)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,102).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,102)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,102)._compositionEnd(u.target.value)&&a),"ngModelChange"===n&&(a=!1!==(t.editLast=u)&&a),a},null,null)),e.La(102,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.d]),e.La(104,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(106,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(107,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(108,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(109,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["E-mail"])),(l()(),e.Ma(111,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(112,0,null,null,5,"input",[["class","form-control"],["id","email"],["name","email"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,113)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,113).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,113)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,113)._compositionEnd(u.target.value)&&a),"ngModelChange"===n&&(a=!1!==(t.editEmail=u)&&a),a},null,null)),e.La(113,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.d]),e.La(115,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(117,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(118,0,null,null,40,"div",[["class","col-xs-12 col-lg-6"]],null,null,null,null,null)),(l()(),e.Ma(119,0,null,null,39,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var e=!0,a=l.component;return"clrSectionSubmitted"===n&&(e=!1!==a.addSectionSubmitted()&&e),"clrSectionEditCancelled"===n&&(e=!1!==a.addSectionCancelled()&&e),e},s.f,s.c)),e.La(120,49152,null,0,c.f,[],{_title:[0,"_title"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),e.Ma(121,0,null,0,14,"div",[["view-block",""]],null,null,null,null,null)),(l()(),e.Ma(122,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(123,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(124,0,null,null,1,"label",[["for","hobby"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Hobby"])),(l()(),e.Ma(126,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(127,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),e.eb(128,null,["",""])),(l()(),e.Ma(129,0,null,null,6,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(130,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(131,0,null,null,1,"label",[["for","licence"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Driving licence number"])),(l()(),e.Ma(133,0,null,null,2,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(134,0,null,null,1,"span",[["class","form-control text-truncate"]],null,null,null,null,null)),(l()(),e.eb(135,null,["",""])),(l()(),e.Ma(136,0,null,1,22,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),e.Ma(137,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(138,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(139,0,null,null,1,"label",[["for","hobby"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Hobby"])),(l()(),e.Ma(141,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(142,0,null,null,5,"input",[["class","form-control"],["id","hobby"],["name","hobby"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,143)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,143).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,143)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,143)._compositionEnd(u.target.value)&&a),"ngModelChange"===n&&(a=!1!==(t.editHobby=u)&&a),a},null,null)),e.La(143,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.d]),e.La(145,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(147,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(148,0,null,null,10,"div",[["class","form-group row"]],null,null,null,null,null)),(l()(),e.Ma(149,0,null,null,2,"div",[["class","col-lg-4"]],null,null,null,null,null)),(l()(),e.Ma(150,0,null,null,1,"label",[["for","licence"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Driving licence number"])),(l()(),e.Ma(152,0,null,null,6,"div",[["class","col-lg-8"]],null,null,null,null,null)),(l()(),e.Ma(153,0,null,null,5,"input",[["class","form-control"],["id","licence"],["name","licence"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,154)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,154).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,154)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,154)._compositionEnd(u.target.value)&&a),"ngModelChange"===n&&(a=!1!==(t.editLicence=u)&&a),a},null,null)),e.La(154,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.d]),e.La(156,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(158,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(159,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),e.La(160,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.Ma(161,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Custom icon"])),(l()(),e.Ma(163,0,null,null,88,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.Ma(164,0,null,null,87,"div",[["class","col-xs-12"]],null,null,null,null,null)),(l()(),e.Ma(165,0,null,null,86,"clr-view-edit-section",[],null,[[null,"clrSectionSubmitted"],[null,"clrSectionEditCancelled"]],function(l,n,u){var e=!0,a=l.component;return"clrSectionSubmitted"===n&&(e=!1!==a.compSectionSubmitted()&&e),"clrSectionEditCancelled"===n&&(e=!1!==a.compSectionCancelled()&&e),e},s.f,s.c)),e.La(166,49152,null,0,c.f,[],{_title:[0,"_title"],_editIcon:[1,"_editIcon"]},{_submitted:"clrSectionSubmitted",_cancelled:"clrSectionEditCancelled"}),(l()(),e.Ma(167,0,null,0,20,"div",[["view-block",""]],null,null,null,null,null)),(l()(),e.Ma(168,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(169,0,null,null,1,"label",[["for","birthdate"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Date of birth"])),(l()(),e.Ma(171,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),e.eb(172,null,["",""])),(l()(),e.Ma(173,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(174,0,null,null,1,"label",[["for","gender"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Gender"])),(l()(),e.Ma(176,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),e.eb(177,null,["",""])),(l()(),e.Ma(178,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(179,0,null,null,1,"label",[["for","status"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Status"])),(l()(),e.Ma(181,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),e.eb(182,null,["",""])),(l()(),e.Ma(183,0,null,null,4,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(184,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Terms & Conditions"])),(l()(),e.Ma(186,0,null,null,1,"span",[["class","text-truncate"]],null,null,null,null,null)),(l()(),e.eb(187,null,["",""])),(l()(),e.Ma(188,0,null,1,63,"div",[["edit-block",""]],null,null,null,null,null)),(l()(),e.Ma(189,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(190,0,null,null,1,"label",[["for","birthdate"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Date of birth"])),(l()(),e.Ma(192,16777216,null,null,6,"input",[["clrDate",""],["id","birthdate"],["name","birthdate"],["type","date"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null],[2,"date-input",null],[8,"id",0],[1,"placeholder",0],[1,"type",0]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,193)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,193).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,193)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,193)._compositionEnd(u.target.value)&&a),"change"===n&&(a=!1!==e.Wa(l,198).onValueChange(u.target)&&a),"ngModelChange"===n&&(a=!1!==(t.editBirthdate=u)&&a),a},null,null)),e.La(193,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.d]),e.La(195,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(197,16384,null,0,d.h,[[4,d.g]],null,null),e.La(198,4407296,null,0,m.H,[[2,m.G],e.O,e.k,e.D,[6,d.g],[2,m.Eb],[2,m.Yc],[2,m.Fb],[2,m.Zc],e.z],{id:[0,"id"],date:[1,"date"]},null),(l()(),e.Ma(199,0,null,null,17,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(200,0,null,null,1,"label",[["for","gender"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Gender"])),(l()(),e.Ma(202,0,null,null,14,"div",[["class","select"]],null,null,null,null,null)),(l()(),e.Ma(203,0,null,null,13,"select",[["id","gender"],["name","gender"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var a=!0,t=l.component;return"change"===n&&(a=!1!==e.Wa(l,204).onChange(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,204).onTouched()&&a),"ngModelChange"===n&&(a=!1!==(t.editGender=u)&&a),a},null,null)),e.La(204,16384,null,0,d.n,[e.D,e.k],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.n]),e.La(206,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(208,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(209,0,null,null,3,"option",[],null,null,null,null,null)),e.La(210,147456,null,0,d.l,[e.k,e.D,[2,d.n]],null,null),e.La(211,147456,null,0,d.s,[e.k,e.D,[8,null]],null,null),(l()(),e.eb(-1,null,["male"])),(l()(),e.Ma(213,0,null,null,3,"option",[],null,null,null,null,null)),e.La(214,147456,null,0,d.l,[e.k,e.D,[2,d.n]],null,null),e.La(215,147456,null,0,d.s,[e.k,e.D,[8,null]],null,null),(l()(),e.eb(-1,null,["female"])),(l()(),e.Ma(217,0,null,null,22,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(218,0,null,null,1,"label",[["for","status"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Status"])),(l()(),e.Ma(220,0,null,null,9,"div",[["class","radio"]],null,null,null,null,null)),(l()(),e.Ma(221,0,null,null,6,"input",[["id","status_1"],["name","status"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,222)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,222).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,222)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,222)._compositionEnd(u.target.value)&&a),"change"===n&&(a=!1!==e.Wa(l,223).onChange()&&a),"blur"===n&&(a=!1!==e.Wa(l,223).onTouched()&&a),"ngModelChange"===n&&(a=!1!==(t.editStatus=u)&&a),a},null,null)),e.La(222,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.La(223,212992,null,0,d.m,[e.D,e.k,d.r,e.p],{name:[0,"name"],value:[1,"value"]},null),e.bb(1024,null,d.f,function(l,n){return[l,n]},[d.d,d.m]),e.La(225,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(227,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(228,0,null,null,1,"label",[["for","status_1"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Active"])),(l()(),e.Ma(230,0,null,null,9,"div",[["class","radio"]],null,null,null,null,null)),(l()(),e.Ma(231,0,null,null,6,"input",[["id","status_2"],["name","status"],["type","radio"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"],[null,"change"]],function(l,n,u){var a=!0,t=l.component;return"input"===n&&(a=!1!==e.Wa(l,232)._handleInput(u.target.value)&&a),"blur"===n&&(a=!1!==e.Wa(l,232).onTouched()&&a),"compositionstart"===n&&(a=!1!==e.Wa(l,232)._compositionStart()&&a),"compositionend"===n&&(a=!1!==e.Wa(l,232)._compositionEnd(u.target.value)&&a),"change"===n&&(a=!1!==e.Wa(l,233).onChange()&&a),"blur"===n&&(a=!1!==e.Wa(l,233).onTouched()&&a),"ngModelChange"===n&&(a=!1!==(t.editStatus=u)&&a),a},null,null)),e.La(232,16384,null,0,d.d,[e.D,e.k,[2,d.a]],null,null),e.La(233,212992,null,0,d.m,[e.D,e.k,d.r,e.p],{name:[0,"name"],value:[1,"value"]},null),e.bb(1024,null,d.f,function(l,n){return[l,n]},[d.d,d.m]),e.La(235,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(237,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(238,0,null,null,1,"label",[["for","status_2"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Inactive"])),(l()(),e.Ma(240,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e.Ma(241,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["Terms & Conditions"])),(l()(),e.Ma(243,0,null,null,8,"div",[["class","checkbox"]],null,null,null,null,null)),(l()(),e.Ma(244,0,null,null,5,"input",[["id","terms"],["name","terms"],["type","checkbox"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"change"],[null,"blur"]],function(l,n,u){var a=!0,t=l.component;return"change"===n&&(a=!1!==e.Wa(l,245).onChange(u.target.checked)&&a),"blur"===n&&(a=!1!==e.Wa(l,245).onTouched()&&a),"ngModelChange"===n&&(a=!1!==(t.editTerms=u)&&a),a},null,null)),e.La(245,16384,null,0,d.b,[e.D,e.k],null,null),e.bb(1024,null,d.f,function(l){return[l]},[d.b]),e.La(247,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.bb(2048,null,d.g,null,[d.k]),e.La(249,16384,null,0,d.h,[[4,d.g]],null,null),(l()(),e.Ma(250,0,null,null,1,"label",[["for","terms"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["I agree to the terms and conditions"])),(l()(),e.Ma(252,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),e.La(253,4243456,null,0,g.a,[],{code:[0,"code"]},null),(l()(),e.Ma(254,0,null,null,1,"clr-code-snippet",[],null,null,null,r.b,r.a)),e.La(255,4243456,null,0,g.a,[],{code:[0,"code"],language:[1,"language"]},null),(l()(),e.Ma(256,0,null,null,1,"h4",[],null,null,null,null,null)),(l()(),e.eb(-1,null,["Tips"])),(l()(),e.Ma(258,0,null,null,10,"ul",[],null,null,null,null,null)),(l()(),e.Ma(259,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Use class "])),(l()(),e.Ma(261,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,["text-truncate"])),(l()(),e.eb(-1,null,[" in view-block to prevent long texts from destroying your layout. "])),(l()(),e.Ma(264,0,null,null,4,"li",[],null,null,null,null,null)),(l()(),e.eb(-1,null,[" Use pipe "])),(l()(),e.Ma(266,0,null,null,1,"code",[["class","clr-code"]],null,null,null,null,null)),(l()(),e.eb(-1,null,['|| "&nbsp;"'])),(l()(),e.eb(-1,null,[" in view-block so the span element always has a correct height. "]))],function(l,n){var u=n.component;l(n,1,0,u.title,u.newLayout,u.ui,u.ng),l(n,61,0,u.sectionTitle),l(n,93,0,"first",u.editFirst),l(n,104,0,"last",u.editLast),l(n,115,0,"email",u.editEmail),l(n,120,0,u.addSectionTitle),l(n,145,0,"hobby",u.editHobby),l(n,156,0,"licence",u.editLicence),l(n,160,0,u.htmlExampleSideBySide),l(n,166,0,u.compSectionTitle,u.compEditIcon),l(n,195,0,"birthdate",u.editBirthdate),l(n,198,0,"birthdate",""),l(n,206,0,"gender",u.editGender),l(n,223,0,"status",1),l(n,225,0,"status",u.editStatus),l(n,233,0,"status",2),l(n,235,0,"status",u.editStatus),l(n,247,0,"terms",u.editTerms),l(n,253,0,u.htmlExampleFullIcon),l(n,255,0,u.htmlExampleFullIconAngular,"typescript")},function(l,n){var u=n.component;l(n,0,0,!0),l(n,69,0,u.first||"\xa0"),l(n,76,0,u.last||"\xa0"),l(n,83,0,u.email||"\xa0"),l(n,90,0,e.Wa(n,95).ngClassUntouched,e.Wa(n,95).ngClassTouched,e.Wa(n,95).ngClassPristine,e.Wa(n,95).ngClassDirty,e.Wa(n,95).ngClassValid,e.Wa(n,95).ngClassInvalid,e.Wa(n,95).ngClassPending),l(n,101,0,e.Wa(n,106).ngClassUntouched,e.Wa(n,106).ngClassTouched,e.Wa(n,106).ngClassPristine,e.Wa(n,106).ngClassDirty,e.Wa(n,106).ngClassValid,e.Wa(n,106).ngClassInvalid,e.Wa(n,106).ngClassPending),l(n,112,0,e.Wa(n,117).ngClassUntouched,e.Wa(n,117).ngClassTouched,e.Wa(n,117).ngClassPristine,e.Wa(n,117).ngClassDirty,e.Wa(n,117).ngClassValid,e.Wa(n,117).ngClassInvalid,e.Wa(n,117).ngClassPending),l(n,128,0,u.hobby||"\xa0"),l(n,135,0,u.licence||"\xa0"),l(n,142,0,e.Wa(n,147).ngClassUntouched,e.Wa(n,147).ngClassTouched,e.Wa(n,147).ngClassPristine,e.Wa(n,147).ngClassDirty,e.Wa(n,147).ngClassValid,e.Wa(n,147).ngClassInvalid,e.Wa(n,147).ngClassPending),l(n,153,0,e.Wa(n,158).ngClassUntouched,e.Wa(n,158).ngClassTouched,e.Wa(n,158).ngClassPristine,e.Wa(n,158).ngClassDirty,e.Wa(n,158).ngClassValid,e.Wa(n,158).ngClassInvalid,e.Wa(n,158).ngClassPending),l(n,172,0,u.birthdate||"\xa0"),l(n,177,0,u.gender||"\xa0"),l(n,182,0,u.status||"\xa0"),l(n,187,0,u.getTermsText()),l(n,192,1,[e.Wa(n,197).ngClassUntouched,e.Wa(n,197).ngClassTouched,e.Wa(n,197).ngClassPristine,e.Wa(n,197).ngClassDirty,e.Wa(n,197).ngClassValid,e.Wa(n,197).ngClassInvalid,e.Wa(n,197).ngClassPending,!0,e.Wa(n,198).id,e.Wa(n,198).placeholderText,e.Wa(n,198).inputType]),l(n,203,0,e.Wa(n,208).ngClassUntouched,e.Wa(n,208).ngClassTouched,e.Wa(n,208).ngClassPristine,e.Wa(n,208).ngClassDirty,e.Wa(n,208).ngClassValid,e.Wa(n,208).ngClassInvalid,e.Wa(n,208).ngClassPending),l(n,221,0,e.Wa(n,227).ngClassUntouched,e.Wa(n,227).ngClassTouched,e.Wa(n,227).ngClassPristine,e.Wa(n,227).ngClassDirty,e.Wa(n,227).ngClassValid,e.Wa(n,227).ngClassInvalid,e.Wa(n,227).ngClassPending),l(n,231,0,e.Wa(n,237).ngClassUntouched,e.Wa(n,237).ngClassTouched,e.Wa(n,237).ngClassPristine,e.Wa(n,237).ngClassDirty,e.Wa(n,237).ngClassValid,e.Wa(n,237).ngClassInvalid,e.Wa(n,237).ngClassPending),l(n,244,0,e.Wa(n,249).ngClassUntouched,e.Wa(n,249).ngClassTouched,e.Wa(n,249).ngClassPristine,e.Wa(n,249).ngClassDirty,e.Wa(n,249).ngClassValid,e.Wa(n,249).ngClassInvalid,e.Wa(n,249).ngClassPending)})}var W=e.Ia("clr-view-edit-section-demo",f,function(l){return e.gb(0,[(l()(),e.Ma(0,0,null,null,1,"clr-view-edit-section-demo",[],[[2,"content-area",null],[2,"dox-content-panel",null]],null,null,C,M)),e.La(1,49152,null,0,f,[],null,null)],null,function(l,n){l(n,0,0,!0,!0)})},{},{},[]),S=u("Ip0R"),y=u("XPsC"),w=u("ZYCi"),U=u("JsA7");u.d(n,"ViewEditSectionDemoModuleNgFactory",function(){return k});var k=e.Ja(a,[],function(l){return e.Ta([e.Ua(512,e.j,e.Z,[[8,[t.k,t.a,t.j,W]],[3,e.j],e.v]),e.Ua(4608,S.q,S.p,[e.s,[2,S.F]]),e.Ua(4608,m.Ab,m.Ab,[]),e.Ua(4608,d.r,d.r,[]),e.Ua(5120,m.qc,m.rc,[[3,m.qc]]),e.Ua(1073742336,S.b,S.b,[]),e.Ua(1073742336,m.W,m.W,[]),e.Ua(1073742336,m.Bb,m.Bb,[]),e.Ua(1073742336,m.Nc,m.Nc,[]),e.Ua(1073742336,m.P,m.P,[]),e.Ua(1073742336,m.d,m.d,[]),e.Ua(1073742336,m.R,m.R,[]),e.Ua(1073742336,m.n,m.n,[]),e.Ua(1073742336,m.Uc,m.Uc,[]),e.Ua(1073742336,m.Wc,m.Wc,[]),e.Ua(1073742336,m.I,m.I,[]),e.Ua(1073742336,m.S,m.S,[]),e.Ua(1073742336,d.o,d.o,[]),e.Ua(1073742336,d.e,d.e,[]),e.Ua(1073742336,m.Da,m.Da,[]),e.Ua(1073742336,m.Ib,m.Ib,[]),e.Ua(1073742336,m.ic,m.ic,[]),e.Ua(1073742336,m.B,m.B,[]),e.Ua(1073742336,m.Xa,m.Xa,[]),e.Ua(1073742336,m.ib,m.ib,[]),e.Ua(1073742336,m.s,m.s,[]),e.Ua(1073742336,m.Ha,m.Ha,[]),e.Ua(1073742336,m.Ca,m.Ca,[]),e.Ua(1073742336,m.i,m.i,[]),e.Ua(1073742336,m.j,m.j,[]),e.Ua(1073742336,m.Ya,m.Ya,[]),e.Ua(1073742336,m.q,m.q,[]),e.Ua(1073742336,m.Fa,m.Fa,[]),e.Ua(1073742336,m.Ka,m.Ka,[]),e.Ua(1073742336,m.sc,m.sc,[]),e.Ua(1073742336,m.db,m.db,[]),e.Ua(1073742336,m.nb,m.nb,[]),e.Ua(1073742336,m.Aa,m.Aa,[]),e.Ua(1073742336,m.Qa,m.Qa,[]),e.Ua(1073742336,m.gb,m.gb,[]),e.Ua(1073742336,m.La,m.La,[]),e.Ua(1073742336,m.rb,m.rb,[]),e.Ua(1073742336,m.a,m.a,[]),e.Ua(1073742336,y.a,y.a,[]),e.Ua(1073742336,w.o,w.o,[[2,w.t],[2,w.l]]),e.Ua(1073742336,U.a,U.a,[]),e.Ua(1073742336,c.g,c.g,[]),e.Ua(1073742336,c.e,c.e,[]),e.Ua(1073742336,c.c,c.c,[]),e.Ua(1073742336,c.a,c.a,[]),e.Ua(1073742336,a,a,[]),e.Ua(1024,w.j,function(){return[[{path:"",component:f}]]},[])])})}}]);