"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[8977],{8977:function(S,s,m){m.r(s),m.d(s,{NzDemoInputNumberModule:function(){return P}});var h=m(2042),d=m(1783),p=m(4599),b=m(3238),f=m(4515),l=m(3216),_=m(4344),T=[l.Z,_.sL],c=m(1380),n=m(3497),N=function(){var o=function(){function r(){(0,p.Z)(this,r),this.expanded=!1}return(0,d.Z)(r,[{key:"goLink",value:function(e){window&&(window.location.hash=e)}},{key:"expandAllCode",value:function(){var e=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(i){i.nzExpanded=e.expanded,i.expandCode(e.expanded),i.check()})}}]),r}();return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-demo-input-number"]],viewQuery:function(t,e){var i;1&t&&n.Gf(c.G,5),2&t&&n.iGM(i=n.CRH())&&(e.codeBoxes=i)},decls:0,vars:0,template:function(t,e){},encapsulation:2}),o}(),A=m(3563),z=m(695),C=m(5760),M=m(8918),g=m(8741),Z=m(5535),a=m(2552),U=function(){var o=(0,d.Z)(function r(){(0,p.Z)(this,r),this.demoValue=3});return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-demo-input-number-basic"]],decls:2,vars:9,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","nzDisabled","ngModelChange"]],template:function(t,e){1&t&&(n.TgZ(0,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.demoValue=u}),n.qZA(),n.TgZ(1,"nz-input-number",1),n.NdJ("ngModelChange",function(u){return e.demoValue=u}),n.qZA()),2&t&&(n.Q6J("ngModel",e.demoValue)("nzMin",0)("nzMax",1e5)("nzStep",1),n.xp6(1),n.Q6J("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)("nzDisabled",!0))},directives:[l._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;width:200px}"]}),o}(),q=function(){var o=(0,d.Z)(function r(){(0,p.Z)(this,r),this.demoValue=9e4});return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-demo-input-number-size"]],decls:2,vars:9,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzSize","nzMin","nzMax","nzStep","ngModelChange"]],template:function(t,e){1&t&&(n.TgZ(0,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.demoValue=u}),n.qZA(),n.TgZ(1,"nz-input-number",1),n.NdJ("ngModelChange",function(u){return e.demoValue=u}),n.qZA()),2&t&&(n.Q6J("ngModel",e.demoValue)("nzMin",1)("nzMax",10)("nzStep",1),n.xp6(1),n.Q6J("ngModel",e.demoValue)("nzSize","small")("nzMin",1)("nzMax",10)("nzStep",1))},directives:[l._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;width:200px}"]}),o}(),D=function(){var o=(0,d.Z)(function r(){(0,p.Z)(this,r),this.demoValue=9e4,this.dollarValue=100,this.dollarNullValue=null,this.dollarDecimalValue=.2,this.percentageValue=100,this.percentageNullValue=null,this.percentageDecimalValue=.2,this.formatterPercent=function(t){return null==t?" %":"".concat(t," %")},this.parserPercent=function(t){return t.replace(" %","")},this.formatterDollar=function(t){return null==t?"$ ":"$ ".concat(t)},this.parserDollar=function(t){return t.replace("$ ","")}});return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-demo-input-number-formatter"]],decls:9,vars:38,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzFormatter","nzParser","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","nzPrecision","nzFormatter","nzParser","ngModelChange"]],template:function(t,e){1&t&&(n.TgZ(0,"div")(1,"div")(2,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.dollarValue=u}),n.qZA(),n.TgZ(3,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.dollarNullValue=u}),n.qZA(),n.TgZ(4,"nz-input-number",1),n.NdJ("ngModelChange",function(u){return e.dollarDecimalValue=u}),n.qZA()(),n.TgZ(5,"div")(6,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.percentageValue=u}),n.qZA(),n.TgZ(7,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.percentageNullValue=u}),n.qZA(),n.TgZ(8,"nz-input-number",1),n.NdJ("ngModelChange",function(u){return e.percentageDecimalValue=u}),n.qZA()()()),2&t&&(n.xp6(2),n.Q6J("ngModel",e.dollarValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterDollar)("nzParser",e.parserDollar),n.xp6(1),n.Q6J("ngModel",e.dollarNullValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterDollar)("nzParser",e.parserDollar),n.xp6(1),n.Q6J("ngModel",e.dollarDecimalValue)("nzMin",0)("nzMax",100)("nzStep",1)("nzPrecision",2)("nzFormatter",e.formatterDollar)("nzParser",e.parserDollar),n.xp6(2),n.Q6J("ngModel",e.percentageValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterPercent)("nzParser",e.parserPercent),n.xp6(1),n.Q6J("ngModel",e.percentageNullValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",e.formatterPercent)("nzParser",e.parserPercent),n.xp6(1),n.Q6J("ngModel",e.percentageDecimalValue)("nzMin",0)("nzMax",100)("nzStep",1)("nzPrecision",2)("nzFormatter",e.formatterPercent)("nzParser",e.parserDollar))},directives:[l._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o}(),I=function(){var o=(0,d.Z)(function r(){(0,p.Z)(this,r),this.demoValue=0});return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-demo-input-number-digit"]],decls:1,vars:5,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzPlaceHolder"]],template:function(t,e){1&t&&n._UZ(0,"nz-input-number",0),2&t&&n.Q6J("ngModel",1)("nzMin",1)("nzMax",10)("nzStep",.1)("nzPlaceHolder","Digital")},directives:[l._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o}(),v=function(){var o=function(){function r(){(0,p.Z)(this,r),this.precision=2,this.precisionDecimalValue=9.256,this.oneFixedPrecisionDecimalValue=9.2,this.twoFixedPrecisionDecimalValue=9.23,this.threeFixedPrecisionDecimalValue=9.236,this.threeCutOffPrecisionDecimalValue=9.235}return(0,d.Z)(r,[{key:"customPrecisionFn",value:function(e,i){return+Number(e).toFixed(i+1)}}]),r}();return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-demo-input-number-precision"]],decls:5,vars:11,consts:[["nzPlaceHolder","toFixed",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off","nzPrecisionMode","cut",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off",3,"ngModel","nzPrecision","nzPrecisionMode","ngModelChange"]],template:function(t,e){1&t&&(n.TgZ(0,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.oneFixedPrecisionDecimalValue=u}),n.qZA(),n.TgZ(1,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.twoFixedPrecisionDecimalValue=u}),n.qZA(),n.TgZ(2,"nz-input-number",0),n.NdJ("ngModelChange",function(u){return e.threeFixedPrecisionDecimalValue=u}),n.qZA(),n.TgZ(3,"nz-input-number",1),n.NdJ("ngModelChange",function(u){return e.threeCutOffPrecisionDecimalValue=u}),n.qZA(),n.TgZ(4,"nz-input-number",2),n.NdJ("ngModelChange",function(u){return e.precisionDecimalValue=u}),n.qZA()),2&t&&(n.Q6J("ngModel",e.oneFixedPrecisionDecimalValue)("nzPrecision",1),n.xp6(1),n.Q6J("ngModel",e.twoFixedPrecisionDecimalValue)("nzPrecision",2),n.xp6(1),n.Q6J("ngModel",e.threeFixedPrecisionDecimalValue)("nzPrecision",3),n.xp6(1),n.Q6J("ngModel",e.threeCutOffPrecisionDecimalValue)("nzPrecision",3),n.xp6(1),n.Q6J("ngModel",e.precisionDecimalValue)("nzPrecision",e.precision)("nzPrecisionMode",e.customPrecisionFn))},directives:[l._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o}(),x=function(){var o=function(){function r(){(0,p.Z)(this,r),this.expanded=!1}return(0,d.Z)(r,[{key:"goLink",value:function(e){window&&(window.location.hash=e)}},{key:"expandAllCode",value:function(){var e=this;this.expanded=!this.expanded,this.codeBoxes.forEach(function(i){i.nzExpanded=e.expanded,i.expandCode(e.expanded),i.check()})}}]),r}();return o.\u0275fac=function(t){return new(t||o)},o.\u0275cmp=n.Xpm({type:o,selectors:[["nz-demo-input-number"]],viewQuery:function(t,e){var i;1&t&&n.Gf(c.G,5),2&t&&n.iGM(i=n.CRH())&&(e.codeBoxes=i)},decls:320,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","Basic Usage"],["nzHref","#components-input-number-demo-size","nzTitle","Sizes"],["nzHref","#components-input-number-demo-formatter","nzTitle","Formatter"],["nzHref","#components-input-number-demo-digit","nzTitle","Decimal Step"],["nzHref","#components-input-number-demo-precision","nzTitle","Precision"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//input-number/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic Usage","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Sizes","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Formatter","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Decimal Step","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Precision","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","sc-input-number"],["onclick","window.location.hash = 'sc-input-number'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(t,e){1&t&&(n.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),n.NdJ("nzClick",function(u){return e.goLink(u)}),n._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),n.qZA()(),n.TgZ(9,"section",8)(10,"h1"),n._uU(11,"InputNumber"),n.TgZ(12,"span",9),n._uU(13,"(Reviewed)"),n.qZA(),n._UZ(14,"span",10),n.TgZ(15,"a",11),n._UZ(16,"i",12),n.qZA()(),n.TgZ(17,"section",8),n.IAx(),n.TgZ(18,"p"),n._uU(19,"Enter a number within certain range with the mouse or keyboard."),n.qZA(),n.TgZ(20,"h2",13)(21,"span"),n._uU(22,"When To Use"),n.qZA(),n.TgZ(23,"a",14),n._uU(24,"#"),n.qZA()(),n.TgZ(25,"p"),n._uU(26,"When a numeric value needs to be provided."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(27,"nz-tabset",15)(28,"nz-tab",16)(29,"div",17)(30,"div",18)(31,"nz-code-box",19),n._UZ(32,"nz-demo-input-number-basic",20),n.TgZ(33,"div",21),n.IAx(),n.TgZ(34,"p"),n._uU(35,"Basic usage example. This input only allows for numeric values."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(36,"nz-code-box",22),n._UZ(37,"nz-demo-input-number-size",20),n.TgZ(38,"div",21),n.IAx(),n.TgZ(39,"p"),n._uU(40,"There are two sizes of an Input box: "),n.TgZ(41,"code"),n._uU(42,"default"),n.qZA(),n._uU(43," (32px) and "),n.TgZ(44,"code"),n._uU(45,"small"),n.qZA(),n._uU(46," (24px)."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(47,"nz-code-box",23),n._UZ(48,"nz-demo-input-number-formatter",20),n.TgZ(49,"div",21),n.IAx(),n.TgZ(50,"p"),n._uU(51,"Display value within it's situation with "),n.TgZ(52,"code"),n._uU(53,"nzFormatter"),n.qZA(),n._uU(54,", and we usually use "),n.TgZ(55,"code"),n._uU(56,"nzParser"),n.qZA(),n._uU(57," at the same time."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(58,"nz-code-box",24),n._UZ(59,"nz-demo-input-number-digit",20),n.TgZ(60,"div",21),n.IAx(),n.TgZ(61,"p"),n._uU(62,"A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the "),n.TgZ(63,"code"),n._uU(64,"nzStep"),n.qZA(),n._uU(65," property."),n.qZA(),n.fQ9(),n.qZA()(),n.TgZ(66,"nz-code-box",25),n._UZ(67,"nz-demo-input-number-precision",20),n.TgZ(68,"div",21),n.IAx(),n.TgZ(69,"p"),n._uU(70,"Set the precision of the value. i.e. limit the number of decimal places shown."),n.qZA(),n.fQ9(),n.qZA()()()()(),n.TgZ(71,"nz-tab",26),n._uU(72," Content of Tab Pane 2 "),n.qZA(),n._UZ(73,"nz-tab",27),n.qZA(),n.TgZ(74,"section",28),n.IAx(),n.TgZ(75,"h2",29)(76,"span"),n._uU(77,"API"),n.qZA(),n.TgZ(78,"a",30),n._uU(79,"#"),n.qZA()(),n.TgZ(80,"h3",31)(81,"span"),n._uU(82,"sc-input-number"),n.qZA(),n.TgZ(83,"a",32),n._uU(84,"#"),n.qZA()(),n.TgZ(85,"table")(86,"thead")(87,"tr")(88,"th"),n._uU(89,"property"),n.qZA(),n.TgZ(90,"th"),n._uU(91,"description"),n.qZA(),n.TgZ(92,"th"),n._uU(93,"type"),n.qZA(),n.TgZ(94,"th"),n._uU(95,"default"),n.qZA()()(),n.TgZ(96,"tbody")(97,"tr")(98,"td")(99,"code"),n._uU(100,"[(scModel)]"),n.qZA()(),n.TgZ(101,"td"),n._uU(102,"Current value, two way data binding"),n.qZA(),n.TgZ(103,"td")(104,"code"),n._uU(105,"number | string"),n.qZA()(),n.TgZ(106,"td")(107,"code"),n._uU(108,"string"),n.qZA()()(),n.TgZ(109,"tr")(110,"td")(111,"code"),n._uU(112,"[scAutoFocus]"),n.qZA()(),n.TgZ(113,"td"),n._uU(114,"Gets focus when component mounted"),n.qZA(),n.TgZ(115,"td")(116,"code"),n._uU(117,"boolean"),n.qZA()(),n.TgZ(118,"td")(119,"code"),n._uU(120,"false"),n.qZA()()(),n.TgZ(121,"tr")(122,"td")(123,"code"),n._uU(124,"[scDisabled]"),n.qZA()(),n.TgZ(125,"td"),n._uU(126,"Disable the input"),n.qZA(),n.TgZ(127,"td")(128,"code"),n._uU(129,"boolean"),n.qZA()(),n.TgZ(130,"td")(131,"code"),n._uU(132,"false"),n.qZA()()(),n.TgZ(133,"tr")(134,"td")(135,"code"),n._uU(136,"[scMax]"),n.qZA()(),n.TgZ(137,"td"),n._uU(138,"Max value"),n.qZA(),n.TgZ(139,"td")(140,"code"),n._uU(141,"number"),n.qZA()(),n.TgZ(142,"td")(143,"code"),n._uU(144,"Infinity"),n.qZA()()(),n.TgZ(145,"tr")(146,"td")(147,"code"),n._uU(148,"[scMin]"),n.qZA()(),n.TgZ(149,"td"),n._uU(150,"Min value"),n.qZA(),n.TgZ(151,"td")(152,"code"),n._uU(153,"number"),n.qZA()(),n.TgZ(154,"td")(155,"code"),n._uU(156,"-Infinity"),n.qZA()()(),n.TgZ(157,"tr")(158,"td")(159,"code"),n._uU(160,"[scSymbol]"),n.qZA()(),n.TgZ(161,"td"),n._uU(162,"Represent what entity we are formatting"),n.qZA(),n.TgZ(163,"td")(164,"code"),n._uU(165,"'NONE' | '$' | '%'"),n.qZA()(),n.TgZ(166,"td"),n._uU(167,"'NONE'"),n.qZA()(),n.TgZ(168,"tr")(169,"td")(170,"code"),n._uU(171,"[scPosition]"),n.qZA()(),n.TgZ(172,"td"),n._uU(173,"Specifies the format of the value presented"),n.qZA(),n.TgZ(174,"td")(175,"code"),n._uU(176,"'NONE' | 'LEFT' | 'RIGHT'"),n.qZA()(),n.TgZ(177,"td"),n._uU(178,"'NONE'"),n.qZA()(),n.TgZ(179,"tr")(180,"td")(181,"code"),n._uU(182,"[scPrecision]"),n.qZA()(),n.TgZ(183,"td"),n._uU(184,"Decimal places after the dot"),n.qZA(),n.TgZ(185,"td")(186,"code"),n._uU(187,"number"),n.qZA()(),n.TgZ(188,"td"),n._uU(189,"0"),n.qZA()(),n.TgZ(190,"tr")(191,"td")(192,"code"),n._uU(193,"[scPrecisionMode]"),n.qZA()(),n.TgZ(194,"td"),n._uU(195,"The method for calculating the precision of input value"),n.qZA(),n.TgZ(196,"td")(197,"code"),n._uU(198,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),n.qZA()(),n.TgZ(199,"td")(200,"code"),n._uU(201,"'toFixed'"),n.qZA()()(),n.TgZ(202,"tr")(203,"td")(204,"code"),n._uU(205,"[scSize]"),n.qZA()(),n.TgZ(206,"td"),n._uU(207,"Width of input box"),n.qZA(),n.TgZ(208,"td")(209,"code"),n._uU(210,"'large' | 'small' | 'default'"),n.qZA()(),n.TgZ(211,"td")(212,"code"),n._uU(213,"'default'"),n.qZA()()(),n.TgZ(214,"tr")(215,"td")(216,"code"),n._uU(217,"[scStep]"),n.qZA()(),n.TgZ(218,"td"),n._uU(219,"The number to which the current value is increased or decreased. It can be an integer or decimal."),n.qZA(),n.TgZ(220,"td")(221,"code"),n._uU(222,"number | string"),n.qZA()(),n.TgZ(223,"td")(224,"code"),n._uU(225,"1"),n.qZA()()(),n.TgZ(226,"tr")(227,"td")(228,"code"),n._uU(229,"[scPlaceHolder]"),n.qZA()(),n.TgZ(230,"td"),n._uU(231,"Placeholder of select"),n.qZA(),n.TgZ(232,"td")(233,"code"),n._uU(234,"string"),n.qZA()(),n.TgZ(235,"td"),n._uU(236,"-"),n.qZA()(),n.TgZ(237,"tr")(238,"td")(239,"code"),n._uU(240,"[scId]"),n.qZA()(),n.TgZ(241,"td"),n._uU(242,"input id attribute inside the component"),n.qZA(),n.TgZ(243,"td")(244,"code"),n._uU(245,"string"),n.qZA()(),n.TgZ(246,"td"),n._uU(247,"-"),n.qZA()(),n.TgZ(248,"tr")(249,"td")(250,"code"),n._uU(251,"[scBankRounding]"),n.qZA()(),n.TgZ(252,"td"),n._uU(253,"If true Bank Rounding mode enforced, overrides scPrecisionMode"),n.qZA(),n.TgZ(254,"td")(255,"code"),n._uU(256,"boolean"),n.qZA()(),n.TgZ(257,"td")(258,"code"),n._uU(259,"false"),n.qZA()()(),n.TgZ(260,"tr")(261,"td")(262,"code"),n._uU(263,"(scOnChange)"),n.qZA()(),n.TgZ(264,"td"),n._uU(265,"Emitted when input value changes"),n.qZA(),n.TgZ(266,"td")(267,"code"),n._uU(268,"EventEmitter<number|string>"),n.qZA()(),n.TgZ(269,"td"),n._uU(270,"-"),n.qZA()(),n.TgZ(271,"tr")(272,"td")(273,"code"),n._uU(274,"(scOnFocus)"),n.qZA()(),n.TgZ(275,"td"),n._uU(276,"Emitted when input gets focus"),n.qZA(),n.TgZ(277,"td")(278,"code"),n._uU(279,"EventEmitter<number|string>"),n.qZA()(),n.TgZ(280,"td"),n._uU(281,"-"),n.qZA()(),n.TgZ(282,"tr")(283,"td")(284,"code"),n._uU(285,"(scOnBlur)"),n.qZA()(),n.TgZ(286,"td"),n._uU(287,"Emitted when input blurs"),n.qZA(),n.TgZ(288,"td")(289,"code"),n._uU(290,"EventEmitter<number|string>"),n.qZA()(),n.TgZ(291,"td"),n._uU(292,"-"),n.qZA()()()(),n.TgZ(293,"h4",33)(294,"span"),n._uU(295,"Methods"),n.qZA(),n.TgZ(296,"a",34),n._uU(297,"#"),n.qZA()(),n.TgZ(298,"p"),n._uU(299,"You can get instance by "),n.TgZ(300,"code"),n._uU(301,"ViewChild"),n.qZA()(),n.TgZ(302,"table")(303,"thead")(304,"tr")(305,"th"),n._uU(306,"Name"),n.qZA(),n.TgZ(307,"th"),n._uU(308,"Description"),n.qZA()()(),n.TgZ(309,"tbody")(310,"tr")(311,"td"),n._uU(312,"focus()"),n.qZA(),n.TgZ(313,"td"),n._uU(314,"get focus"),n.qZA()(),n.TgZ(315,"tr")(316,"td"),n._uU(317,"blur()"),n.qZA(),n.TgZ(318,"td"),n._uU(319,"remove focus"),n.qZA()()()(),n.fQ9(),n.qZA()()),2&t&&(n.xp6(1),n.Q6J("nzOffsetTop",16),n.xp6(1),n.Q6J("nzAffix",!1),n.xp6(27),n.Q6J("nzGutter",8),n.xp6(1),n.Q6J("nzSpan",24),n.xp6(1),n.Q6J("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),n.xp6(5),n.Q6J("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),n.xp6(11),n.Q6J("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),n.xp6(11),n.Q6J("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),n.xp6(8),n.Q6J("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[A.$,z.IT,z.Fp,C.Ls,M.w,g.xH,g.xw,Z.SK,Z.t3,c.G,U,q,D,I,v],encapsulation:2}),o}(),P=function(){var o=(0,d.Z)(function r(){(0,p.Z)(this,r)});return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[f.G].concat((0,h.Z)(T),[b.Bz.forChild([{path:"en",component:x},{path:"zh",component:N}])])]}),o}()}}]);