"use strict";(self.webpackChunkscales_doc_site=self.webpackChunkscales_doc_site||[]).push([[8977],{8977:(x,p,m)=>{m.r(p),m.d(p,{NzDemoInputNumberModule:()=>D});var g=m(3238),Z=m(4515),d=m(3216),_=m(4344);const b=[d.Z,_.sL];var l=m(1380),e=m(9724);let h=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number"]],viewQuery:function(n,t){if(1&n&&e.Gf(l.G,5),2&n){let u;e.iGM(u=e.CRH())&&(t.codeBoxes=u)}},decls:0,vars:0,template:function(n,t){},encapsulation:2}),o})();var T=m(3563),s=m(695),f=m(5760),N=m(8918),c=m(8741),z=m(5535),a=m(2552);let A=(()=>{class o{constructor(){this.demoValue=3}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-basic"]],decls:2,vars:9,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","nzDisabled","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA(),e.TgZ(1,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA()),2&n&&(e.Q6J("ngModel",t.demoValue)("nzMin",0)("nzMax",1e5)("nzStep",1),e.xp6(1),e.Q6J("ngModel",t.demoValue)("nzMin",1)("nzMax",10)("nzStep",1)("nzDisabled",!0))},directives:[d._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;width:200px}"]}),o})(),C=(()=>{class o{constructor(){this.demoValue=9e4}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-size"]],decls:2,vars:9,consts:[[3,"ngModel","nzMin","nzMax","nzStep","ngModelChange"],[3,"ngModel","nzSize","nzMin","nzMax","nzStep","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA(),e.TgZ(1,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.demoValue=r}),e.qZA()),2&n&&(e.Q6J("ngModel",t.demoValue)("nzMin",1)("nzMax",10)("nzStep",1),e.xp6(1),e.Q6J("ngModel",t.demoValue)("nzSize","small")("nzMin",1)("nzMax",10)("nzStep",1))},directives:[d._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;width:200px}"]}),o})(),M=(()=>{class o{constructor(){this.demoValue=9e4,this.dollarValue=100,this.dollarNullValue=null,this.dollarDecimalValue=.2,this.percentageValue=100,this.percentageNullValue=null,this.percentageDecimalValue=.2,this.formatterPercent=n=>null==n?" %":`${n} %`,this.parserPercent=n=>n.replace(" %",""),this.formatterDollar=n=>null==n?"$ ":`$ ${n}`,this.parserDollar=n=>n.replace("$ ","")}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-formatter"]],decls:9,vars:38,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzFormatter","nzParser","ngModelChange"],[3,"ngModel","nzMin","nzMax","nzStep","nzPrecision","nzFormatter","nzParser","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"div")(1,"div")(2,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.dollarValue=r}),e.qZA(),e.TgZ(3,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.dollarNullValue=r}),e.qZA(),e.TgZ(4,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.dollarDecimalValue=r}),e.qZA()(),e.TgZ(5,"div")(6,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.percentageValue=r}),e.qZA(),e.TgZ(7,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.percentageNullValue=r}),e.qZA(),e.TgZ(8,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.percentageDecimalValue=r}),e.qZA()()()),2&n&&(e.xp6(2),e.Q6J("ngModel",t.dollarValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterDollar)("nzParser",t.parserDollar),e.xp6(1),e.Q6J("ngModel",t.dollarNullValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterDollar)("nzParser",t.parserDollar),e.xp6(1),e.Q6J("ngModel",t.dollarDecimalValue)("nzMin",0)("nzMax",100)("nzStep",1)("nzPrecision",2)("nzFormatter",t.formatterDollar)("nzParser",t.parserDollar),e.xp6(2),e.Q6J("ngModel",t.percentageValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterPercent)("nzParser",t.parserPercent),e.xp6(1),e.Q6J("ngModel",t.percentageNullValue)("nzMin",1)("nzMax",100)("nzStep",1)("nzFormatter",t.formatterPercent)("nzParser",t.parserPercent),e.xp6(1),e.Q6J("ngModel",t.percentageDecimalValue)("nzMin",0)("nzMax",100)("nzStep",1)("nzPrecision",2)("nzFormatter",t.formatterPercent)("nzParser",t.parserDollar))},directives:[d._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o})(),U=(()=>{class o{constructor(){this.demoValue=0}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-digit"]],decls:1,vars:5,consts:[[3,"ngModel","nzMin","nzMax","nzStep","nzPlaceHolder"]],template:function(n,t){1&n&&e._UZ(0,"nz-input-number",0),2&n&&e.Q6J("ngModel",1)("nzMin",1)("nzMax",10)("nzStep",.1)("nzPlaceHolder","Digital")},directives:[d._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o})(),q=(()=>{class o{constructor(){this.precision=2,this.precisionDecimalValue=9.256,this.oneFixedPrecisionDecimalValue=9.2,this.twoFixedPrecisionDecimalValue=9.23,this.threeFixedPrecisionDecimalValue=9.236,this.threeCutOffPrecisionDecimalValue=9.235}customPrecisionFn(n,t){return+Number(n).toFixed(t+1)}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number-precision"]],decls:5,vars:11,consts:[["nzPlaceHolder","toFixed",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off","nzPrecisionMode","cut",3,"ngModel","nzPrecision","ngModelChange"],["nzPlaceHolder","cut off",3,"ngModel","nzPrecision","nzPrecisionMode","ngModelChange"]],template:function(n,t){1&n&&(e.TgZ(0,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.oneFixedPrecisionDecimalValue=r}),e.qZA(),e.TgZ(1,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.twoFixedPrecisionDecimalValue=r}),e.qZA(),e.TgZ(2,"nz-input-number",0),e.NdJ("ngModelChange",function(r){return t.threeFixedPrecisionDecimalValue=r}),e.qZA(),e.TgZ(3,"nz-input-number",1),e.NdJ("ngModelChange",function(r){return t.threeCutOffPrecisionDecimalValue=r}),e.qZA(),e.TgZ(4,"nz-input-number",2),e.NdJ("ngModelChange",function(r){return t.precisionDecimalValue=r}),e.qZA()),2&n&&(e.Q6J("ngModel",t.oneFixedPrecisionDecimalValue)("nzPrecision",1),e.xp6(1),e.Q6J("ngModel",t.twoFixedPrecisionDecimalValue)("nzPrecision",2),e.xp6(1),e.Q6J("ngModel",t.threeFixedPrecisionDecimalValue)("nzPrecision",3),e.xp6(1),e.Q6J("ngModel",t.threeCutOffPrecisionDecimalValue)("nzPrecision",3),e.xp6(1),e.Q6J("ngModel",t.precisionDecimalValue)("nzPrecision",t.precision)("nzPrecisionMode",t.customPrecisionFn))},directives:[d._,a.JJ,a.On],styles:["nz-input-number[_ngcontent-%COMP%]{margin-right:8px;margin-bottom:2px;width:200px}"]}),o})(),I=(()=>{class o{constructor(){this.expanded=!1}goLink(n){window&&(window.location.hash=n)}expandAllCode(){this.expanded=!this.expanded,this.codeBoxes.forEach(n=>{n.nzExpanded=this.expanded,n.expandCode(this.expanded),n.check()})}}return o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["nz-demo-input-number"]],viewQuery:function(n,t){if(1&n&&e.Gf(l.G,5),2&n){let u;e.iGM(u=e.CRH())&&(t.codeBoxes=u)}},decls:320,vars:24,consts:[[1,"toc-affix",3,"nzOffsetTop"],["nzShowInkInFixed","",3,"nzAffix","nzClick"],["nzHref","#components-input-number-demo-basic","nzTitle","Basic Usage"],["nzHref","#components-input-number-demo-size","nzTitle","Sizes"],["nzHref","#components-input-number-demo-formatter","nzTitle","Formatter"],["nzHref","#components-input-number-demo-digit","nzTitle","Decimal Step"],["nzHref","#components-input-number-demo-precision","nzTitle","Precision"],["nzHref","#api","nzTitle","API"],[1,"markdown"],[1,"subtitle"],[1,"widget"],["aria-label","Edit this page on Github","href","https://github.com/JobAdder/scales-workspace/tree/dev/projects/scales-library/src/lib//input-number/doc/index.en-US.md","target","_blank","rel","noopener noreferrer",1,"edit-button"],["nz-icon","","nzType","edit"],["id","when-to-use"],["onclick","window.location.hash = 'when-to-use'",1,"anchor"],["id","component-tab"],["nzTitle","Examples"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["nzTitle","Basic Usage","nzSelector","nz-demo-input-number-basic","nzGenerateCommand","ng g ng-zorro-antd:input-number-basic <name>","nzComponentName","NzDemoInputNumberBasicComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["demo",""],["intro",""],["nzTitle","Sizes","nzSelector","nz-demo-input-number-size","nzGenerateCommand","ng g ng-zorro-antd:input-number-size <name>","nzComponentName","NzDemoInputNumberSizeComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Formatter","nzSelector","nz-demo-input-number-formatter","nzGenerateCommand","ng g ng-zorro-antd:input-number-formatter <name>","nzComponentName","NzDemoInputNumberFormatterComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Decimal Step","nzSelector","nz-demo-input-number-digit","nzGenerateCommand","ng g ng-zorro-antd:input-number-digit <name>","nzComponentName","NzDemoInputNumberDigitComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Precision","nzSelector","nz-demo-input-number-precision","nzGenerateCommand","ng g ng-zorro-antd:input-number-precision <name>","nzComponentName","NzDemoInputNumberPrecisionComponent","nzIframeSource","null",3,"nzId","nzLink","nzIframeHeight","nzHref"],["nzTitle","Usage"],["nzTitle","Installation"],[1,"markdown","api-container"],["id","api"],["onclick","window.location.hash = 'api'",1,"anchor"],["id","sc-input-number"],["onclick","window.location.hash = 'sc-input-number'",1,"anchor"],["id","methods"],["onclick","window.location.hash = 'methods'",1,"anchor"]],template:function(n,t){1&n&&(e.TgZ(0,"article")(1,"nz-affix",0)(2,"nz-anchor",1),e.NdJ("nzClick",function(r){return t.goLink(r)}),e._UZ(3,"nz-link",2)(4,"nz-link",3)(5,"nz-link",4)(6,"nz-link",5)(7,"nz-link",6)(8,"nz-link",7),e.qZA()(),e.TgZ(9,"section",8)(10,"h1"),e._uU(11,"InputNumber"),e.TgZ(12,"span",9),e._uU(13,"(Reviewed)"),e.qZA(),e._UZ(14,"span",10),e.TgZ(15,"a",11),e._UZ(16,"i",12),e.qZA()(),e.TgZ(17,"section",8),e.IAx(),e.TgZ(18,"p"),e._uU(19,"Enter a number within certain range with the mouse or keyboard."),e.qZA(),e.TgZ(20,"h2",13)(21,"span"),e._uU(22,"When To Use"),e.qZA(),e.TgZ(23,"a",14),e._uU(24,"#"),e.qZA()(),e.TgZ(25,"p"),e._uU(26,"When a numeric value needs to be provided."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(27,"nz-tabset",15)(28,"nz-tab",16)(29,"div",17)(30,"div",18)(31,"nz-code-box",19),e._UZ(32,"nz-demo-input-number-basic",20),e.TgZ(33,"div",21),e.IAx(),e.TgZ(34,"p"),e._uU(35,"Basic usage example. This input only allows for numeric values."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(36,"nz-code-box",22),e._UZ(37,"nz-demo-input-number-size",20),e.TgZ(38,"div",21),e.IAx(),e.TgZ(39,"p"),e._uU(40,"There are two sizes of an Input box: "),e.TgZ(41,"code"),e._uU(42,"default"),e.qZA(),e._uU(43," (32px) and "),e.TgZ(44,"code"),e._uU(45,"small"),e.qZA(),e._uU(46," (24px)."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(47,"nz-code-box",23),e._UZ(48,"nz-demo-input-number-formatter",20),e.TgZ(49,"div",21),e.IAx(),e.TgZ(50,"p"),e._uU(51,"Display value within it's situation with "),e.TgZ(52,"code"),e._uU(53,"nzFormatter"),e.qZA(),e._uU(54,", and we usually use "),e.TgZ(55,"code"),e._uU(56,"nzParser"),e.qZA(),e._uU(57," at the same time."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(58,"nz-code-box",24),e._UZ(59,"nz-demo-input-number-digit",20),e.TgZ(60,"div",21),e.IAx(),e.TgZ(61,"p"),e._uU(62,"A numeric-only input box whose values can be increased or decreased using a decimal step. The number of decimals (also known as precision) is determined by the "),e.TgZ(63,"code"),e._uU(64,"nzStep"),e.qZA(),e._uU(65," property."),e.qZA(),e.fQ9(),e.qZA()(),e.TgZ(66,"nz-code-box",25),e._UZ(67,"nz-demo-input-number-precision",20),e.TgZ(68,"div",21),e.IAx(),e.TgZ(69,"p"),e._uU(70,"Set the precision of the value. i.e. limit the number of decimal places shown."),e.qZA(),e.fQ9(),e.qZA()()()()(),e.TgZ(71,"nz-tab",26),e._uU(72," Content of Tab Pane 2 "),e.qZA(),e._UZ(73,"nz-tab",27),e.qZA(),e.TgZ(74,"section",28),e.IAx(),e.TgZ(75,"h2",29)(76,"span"),e._uU(77,"API"),e.qZA(),e.TgZ(78,"a",30),e._uU(79,"#"),e.qZA()(),e.TgZ(80,"h3",31)(81,"span"),e._uU(82,"sc-input-number"),e.qZA(),e.TgZ(83,"a",32),e._uU(84,"#"),e.qZA()(),e.TgZ(85,"table")(86,"thead")(87,"tr")(88,"th"),e._uU(89,"property"),e.qZA(),e.TgZ(90,"th"),e._uU(91,"description"),e.qZA(),e.TgZ(92,"th"),e._uU(93,"type"),e.qZA(),e.TgZ(94,"th"),e._uU(95,"default"),e.qZA()()(),e.TgZ(96,"tbody")(97,"tr")(98,"td")(99,"code"),e._uU(100,"[(scModel)]"),e.qZA()(),e.TgZ(101,"td"),e._uU(102,"Current value, two way data binding"),e.qZA(),e.TgZ(103,"td")(104,"code"),e._uU(105,"number | string"),e.qZA()(),e.TgZ(106,"td")(107,"code"),e._uU(108,"string"),e.qZA()()(),e.TgZ(109,"tr")(110,"td")(111,"code"),e._uU(112,"[scAutoFocus]"),e.qZA()(),e.TgZ(113,"td"),e._uU(114,"Gets focus when component mounted"),e.qZA(),e.TgZ(115,"td")(116,"code"),e._uU(117,"boolean"),e.qZA()(),e.TgZ(118,"td")(119,"code"),e._uU(120,"false"),e.qZA()()(),e.TgZ(121,"tr")(122,"td")(123,"code"),e._uU(124,"[scDisabled]"),e.qZA()(),e.TgZ(125,"td"),e._uU(126,"Disable the input"),e.qZA(),e.TgZ(127,"td")(128,"code"),e._uU(129,"boolean"),e.qZA()(),e.TgZ(130,"td")(131,"code"),e._uU(132,"false"),e.qZA()()(),e.TgZ(133,"tr")(134,"td")(135,"code"),e._uU(136,"[scMax]"),e.qZA()(),e.TgZ(137,"td"),e._uU(138,"Max value"),e.qZA(),e.TgZ(139,"td")(140,"code"),e._uU(141,"number"),e.qZA()(),e.TgZ(142,"td")(143,"code"),e._uU(144,"Infinity"),e.qZA()()(),e.TgZ(145,"tr")(146,"td")(147,"code"),e._uU(148,"[scMin]"),e.qZA()(),e.TgZ(149,"td"),e._uU(150,"Min value"),e.qZA(),e.TgZ(151,"td")(152,"code"),e._uU(153,"number"),e.qZA()(),e.TgZ(154,"td")(155,"code"),e._uU(156,"-Infinity"),e.qZA()()(),e.TgZ(157,"tr")(158,"td")(159,"code"),e._uU(160,"[scSymbol]"),e.qZA()(),e.TgZ(161,"td"),e._uU(162,"Represent what entity we are formatting"),e.qZA(),e.TgZ(163,"td")(164,"code"),e._uU(165,"'NONE' | '$' | '%'"),e.qZA()(),e.TgZ(166,"td"),e._uU(167,"'NONE'"),e.qZA()(),e.TgZ(168,"tr")(169,"td")(170,"code"),e._uU(171,"[scPosition]"),e.qZA()(),e.TgZ(172,"td"),e._uU(173,"Specifies the format of the value presented"),e.qZA(),e.TgZ(174,"td")(175,"code"),e._uU(176,"'NONE' | 'LEFT' | 'RIGHT'"),e.qZA()(),e.TgZ(177,"td"),e._uU(178,"'NONE'"),e.qZA()(),e.TgZ(179,"tr")(180,"td")(181,"code"),e._uU(182,"[scPrecision]"),e.qZA()(),e.TgZ(183,"td"),e._uU(184,"Decimal places after the dot"),e.qZA(),e.TgZ(185,"td")(186,"code"),e._uU(187,"number"),e.qZA()(),e.TgZ(188,"td"),e._uU(189,"0"),e.qZA()(),e.TgZ(190,"tr")(191,"td")(192,"code"),e._uU(193,"[scPrecisionMode]"),e.qZA()(),e.TgZ(194,"td"),e._uU(195,"The method for calculating the precision of input value"),e.qZA(),e.TgZ(196,"td")(197,"code"),e._uU(198,"'cut' | 'toFixed' | ((value: number | string, precision?: number) => number)"),e.qZA()(),e.TgZ(199,"td")(200,"code"),e._uU(201,"'toFixed'"),e.qZA()()(),e.TgZ(202,"tr")(203,"td")(204,"code"),e._uU(205,"[scSize]"),e.qZA()(),e.TgZ(206,"td"),e._uU(207,"Width of input box"),e.qZA(),e.TgZ(208,"td")(209,"code"),e._uU(210,"'large' | 'small' | 'default'"),e.qZA()(),e.TgZ(211,"td")(212,"code"),e._uU(213,"'default'"),e.qZA()()(),e.TgZ(214,"tr")(215,"td")(216,"code"),e._uU(217,"[scStep]"),e.qZA()(),e.TgZ(218,"td"),e._uU(219,"The number to which the current value is increased or decreased. It can be an integer or decimal."),e.qZA(),e.TgZ(220,"td")(221,"code"),e._uU(222,"number | string"),e.qZA()(),e.TgZ(223,"td")(224,"code"),e._uU(225,"1"),e.qZA()()(),e.TgZ(226,"tr")(227,"td")(228,"code"),e._uU(229,"[scPlaceHolder]"),e.qZA()(),e.TgZ(230,"td"),e._uU(231,"Placeholder of select"),e.qZA(),e.TgZ(232,"td")(233,"code"),e._uU(234,"string"),e.qZA()(),e.TgZ(235,"td"),e._uU(236,"-"),e.qZA()(),e.TgZ(237,"tr")(238,"td")(239,"code"),e._uU(240,"[scId]"),e.qZA()(),e.TgZ(241,"td"),e._uU(242,"input id attribute inside the component"),e.qZA(),e.TgZ(243,"td")(244,"code"),e._uU(245,"string"),e.qZA()(),e.TgZ(246,"td"),e._uU(247,"-"),e.qZA()(),e.TgZ(248,"tr")(249,"td")(250,"code"),e._uU(251,"[scBankRounding]"),e.qZA()(),e.TgZ(252,"td"),e._uU(253,"If true Bank Rounding mode enforced, overrides scPrecisionMode"),e.qZA(),e.TgZ(254,"td")(255,"code"),e._uU(256,"boolean"),e.qZA()(),e.TgZ(257,"td")(258,"code"),e._uU(259,"false"),e.qZA()()(),e.TgZ(260,"tr")(261,"td")(262,"code"),e._uU(263,"(scOnChange)"),e.qZA()(),e.TgZ(264,"td"),e._uU(265,"Emitted when input value changes"),e.qZA(),e.TgZ(266,"td")(267,"code"),e._uU(268,"EventEmitter<number|string>"),e.qZA()(),e.TgZ(269,"td"),e._uU(270,"-"),e.qZA()(),e.TgZ(271,"tr")(272,"td")(273,"code"),e._uU(274,"(scOnFocus)"),e.qZA()(),e.TgZ(275,"td"),e._uU(276,"Emitted when input gets focus"),e.qZA(),e.TgZ(277,"td")(278,"code"),e._uU(279,"EventEmitter<number|string>"),e.qZA()(),e.TgZ(280,"td"),e._uU(281,"-"),e.qZA()(),e.TgZ(282,"tr")(283,"td")(284,"code"),e._uU(285,"(scOnBlur)"),e.qZA()(),e.TgZ(286,"td"),e._uU(287,"Emitted when input blurs"),e.qZA(),e.TgZ(288,"td")(289,"code"),e._uU(290,"EventEmitter<number|string>"),e.qZA()(),e.TgZ(291,"td"),e._uU(292,"-"),e.qZA()()()(),e.TgZ(293,"h4",33)(294,"span"),e._uU(295,"Methods"),e.qZA(),e.TgZ(296,"a",34),e._uU(297,"#"),e.qZA()(),e.TgZ(298,"p"),e._uU(299,"You can get instance by "),e.TgZ(300,"code"),e._uU(301,"ViewChild"),e.qZA()(),e.TgZ(302,"table")(303,"thead")(304,"tr")(305,"th"),e._uU(306,"Name"),e.qZA(),e.TgZ(307,"th"),e._uU(308,"Description"),e.qZA()()(),e.TgZ(309,"tbody")(310,"tr")(311,"td"),e._uU(312,"focus()"),e.qZA(),e.TgZ(313,"td"),e._uU(314,"get focus"),e.qZA()(),e.TgZ(315,"tr")(316,"td"),e._uU(317,"blur()"),e.qZA(),e.TgZ(318,"td"),e._uU(319,"remove focus"),e.qZA()()()(),e.fQ9(),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("nzOffsetTop",16),e.xp6(1),e.Q6J("nzAffix",!1),e.xp6(27),e.Q6J("nzGutter",8),e.xp6(1),e.Q6J("nzSpan",24),e.xp6(1),e.Q6J("nzId","components-input-number-demo-basic")("nzLink","components-input-number-demo-basic")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/basic.md"),e.xp6(5),e.Q6J("nzId","components-input-number-demo-size")("nzLink","components-input-number-demo-size")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/size.md"),e.xp6(11),e.Q6J("nzId","components-input-number-demo-formatter")("nzLink","components-input-number-demo-formatter")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/formatter.md"),e.xp6(11),e.Q6J("nzId","components-input-number-demo-digit")("nzLink","components-input-number-demo-digit")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/digit.md"),e.xp6(8),e.Q6J("nzId","components-input-number-demo-precision")("nzLink","components-input-number-demo-precision")("nzIframeHeight",null)("nzHref","https://github.com/NG-ZORRO/ng-zorro-antd/edit/master/components/input-number/demo/precision.md"))},directives:[T.$,s.IT,s.Fp,f.Ls,N.w,c.xH,c.xw,z.SK,z.t3,l.G,A,C,M,U,q],encapsulation:2}),o})(),D=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[Z.G,...b,g.Bz.forChild([{path:"en",component:I},{path:"zh",component:h}])]]}),o})()}}]);