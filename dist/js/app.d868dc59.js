(function(e){function t(t){for(var n,a,i=t[0],u=t[1],c=t[2],d=0,f=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,i=1;i<r.length;i++){var u=r[i];0!==o[u]&&(n=!1)}n&&(s.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},o={app:0},s=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),o=r.n(n);o.a},1:function(e,t){},"18fa":function(e,t,r){},2:function(e,t){},"221a":function(e,t,r){},2326:function(e,t,r){var n={"./N3Lexer":"558c","./N3Lexer.js":"558c","./N3Parser":"2534","./N3Parser.js":"2534","./N3Store":"36dc","./N3Store.js":"36dc","./N3StreamParser":"f6db","./N3StreamParser.js":"f6db","./N3StreamWriter":"3324","./N3StreamWriter.js":"3324","./N3Util":"d2b2","./N3Util.js":"d2b2","./N3Writer":"e400","./N3Writer.js":"e400"};function o(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}o.keys=function(){return Object.keys(n)},o.resolve=s,e.exports=o,o.id="2326"},3:function(e,t){},5555:function(e,t,r){"use strict";var n=r("18fa"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("h1",[e._v("Welcome to "+e._s(e.appTitle))]),r("AppNav")],1)},s=[],a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"demo",attrs:{id:"app-nav"}},[e._l(e.tabs,(function(t){return r("button",{key:t,class:["tab-button",{active:e.currentTab===t}],on:{click:function(r){e.currentTab=t}}},[e._v(" "+e._s(t)+" ")])})),r(e.currentTabComponent,{tag:"component",staticClass:"tab"})],2)},i=[],u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Multipane",{staticClass:"vertical-panes",attrs:{layout:"vertical"}},[r("div",{staticClass:"pane"},[r("CodeEditor",{ref:"codeEditor",attrs:{language:e.language},on:{sendCode:function(t){e.code=t}}}),r("input",{attrs:{type:"file"},on:{change:e.loadTextFromFile}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.rdfstoreSize>0,expression:"rdfstoreSize > 0"}]},[e._v(" Loaded triples: "+e._s(e.rdfstoreSize)+" ")]),r("Buttons",{attrs:{language:e.language},on:{buttonClicked:e.buttonClicked}}),r("Output")],1),r("MultipaneResizer"),r("div",{staticClass:"pane"},[r("SPARQLEditor",{attrs:{rdfsparql:e.rdfsparql}})],1)],1),""!=this.$store.getters.storeQueryResult?r("grid",{attrs:{cols:e.getVariables(this.$store.getters.storeQueryResult),rows:e.getRows(this.$store.getters.storeQueryResult),"auto-width":e.autoWidth,language:{},pagination:e.pagination,search:e.search,sort:e.sort,width:e.width}}):e._e()],1)},c=[],l=(r("4fad"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",["sparql"==e.language?r("codemirror",{ref:"cmEditor",attrs:{value:this.$store.getters.SPARQLCode,options:e.cmOptions},on:{ready:e.onCmReady,focus:e.onCmFocus,input:e.onCmCodeChange}}):e._e(),"turtle"==e.language?r("codemirror",{ref:"cmEditor",attrs:{value:this.$store.getters.turtleCode,options:e.cmOptions},on:{ready:e.onCmReady,focus:e.onCmFocus,input:e.onCmCodeChange}}):e._e()],1)}),d=[],f=r("8f94"),p=(r("a7be"),r("fbe7"),r("3f73"),r("cc10"),r("2f62"));n["a"].use(p["a"]);var g=r("6e59"),h=new p["a"].Store({state:{currentLanguage:"",error:!1,errorMessage:"",turtleCode:"",prefixes:[],rdfstore:new g.Store((function(e,t){return console.log(e),t})),storeQueryResult:[],SPARQLCode:"",jsonResponse:"",selectedPrefixes:[]},mutations:{updateSPARQLCode:function(e,t){e.SPARQLCode=t},updateTurtleCode:function(e,t){e.turtleCode=t},updateJSONResponse:function(e,t){e.jsonResponse=t},changeError:function(e,t){e.error=t},updateErrorMessage:function(e,t){e.errorMessage=t},updateCurrentLanguage:function(e,t){e.currentLanguage=t},addPrefix:function(e,t){e.prefixes.push(t)},clearTurtleStore:function(e){e.prefixes=[],e.rdfstore=new g.Store((function(e,t){return console.log(e),t}))},loadRDF:function(e){e.rdfstore.load("text/turtle",e.turtleCode,(function(e){console.log(e)}))},updateSelectedPrefixes:function(e,t){e.selectedPrefixes=t},queryStore:function(e){e.rdfstore.execute(e.SPARQLCode,(function(t,r){t?console.log(t):(e.storeQueryResult=r,console.log(e.storeQueryResult))}))}},getters:{SPARQLCode:function(e){return e.SPARQLCode},jsonResponse:function(e){return e.jsonResponse},errorMessage:function(e){return e.errorMessage},error:function(e){return e.error},turtleCode:function(e){return e.turtleCode},currentLanguage:function(e){return e.currentLanguage},prefixes:function(e){return e.prefixes},rdfstore:function(e){return e.rdfstore},selectedPrefixes:function(e){return e.selectedPrefixes},fileText:function(e){return e.fileText},storeQueryResult:function(e){return e.storeQueryResult}}}),m=h,v={name:"CodeEditor",components:{codemirror:f["codemirror"]},props:["language"],store:m,data:function(){return{cmOptions:{tabSize:4,mode:this.language,theme:"base16-light",lineNumbers:!0,line:!0}}},methods:{onCmReady:function(e){console.log("the editor is readied!",e)},onCmFocus:function(e){console.log("the editor is focused!",e)},onCmCodeChange:function(e){switch(this.language){case"turtle":this.$store.commit("updateTurtleCode",e);break;case"sparql":this.$store.commit("updateSPARQLCode",e)}},clearEditor:function(){this.code=""}},computed:{codemirror:function(){return this.$refs.cmEditor.codemirror}},mounted:function(){switch(console.log("the current CodeMirror instance object:",this.codemirror),this.language){case"sparql":this.code=this.$store.getters.SPARQLCode;break;case"turtle":this.code=this.$store.getters.turtleCode}}},b=v,y=r("2877"),C=Object(y["a"])(b,l,d,!1,null,null,null),x=C.exports,P=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",e._l(e.buttonFunctions,(function(t){return r("button",{key:t,staticClass:"button",attrs:{value:t},on:{click:function(t){return e.onClick(t.target.value)}}},[e._v(" "+e._s(t)+" ")])})),0)},S=[],_={name:"Buttons",props:["language"],data:function(){return{buttonFunctions:[]}},methods:{onClick:function(e){this.$emit("buttonClicked",e)}},mounted:function(){switch(this.language){case"sparql":this.buttonFunctions=["Clear","Perform Query","Save Query"];break;case"turtle":this.buttonFunctions=["Clear","Load"];break;case"rdfsparql":this.buttonFunctions=["Clear","Query Store","Save Query"]}}},R=_,w=(r("725c"),Object(y["a"])(R,P,S,!1,null,null,null)),O=w.exports,$=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[0==this.$store.getters.error&&""!=this.$store.getters.jsonResponse&&"sparql"==this.$store.getters.currentLanguage?r("grid",{attrs:{cols:e.getVariables(this.$store.getters.jsonResponse),rows:e.deconstructJSON(this.$store.getters.jsonResponse),"auto-width":e.autoWidth,language:e.language,pagination:e.pagination,search:e.search,sort:e.sort,width:e.width}}):e._e(),1==this.$store.getters.error?r("div",[e._v(" "+e._s(this.$store.getters.errorMessage)+" ")]):e._e()],1)},E=[],j=r("69da"),k={name:"Output",components:{Grid:j["a"]},store:m,data:function(){return{autoWidth:!0,language:{},pagination:!0,search:!0,sort:!0,theme:"mermaid",width:"100%"}},methods:{deconstructJSON:function(e){for(var t=e.head.vars,r=e.results.bindings,n=new Array(r.length),o=0;o<r.length;o++){for(var s=Object.entries(r[o]),a=new Array(r.length),i=0;i<t.length;i++)a[i]=s[i][1].value;n[o]=a}return n},getVariables:function(e){return e.head.vars}}},Q=k,L=Object(y["a"])(Q,$,E,!1,null,null,null),N=L.exports,T=r("8828"),A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.rdfsparql,expression:"!rdfsparql"}]},[e._v(" Example datasheets: "),r("CodeEditor",{ref:"codeEditor",attrs:{language:e.language}}),r("label",{attrs:{for:"endpoint"}},[e._v("Query from: ")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.endpoint,expression:"endpoint"}],attrs:{type:"text",id:"endpoint",name:"endpoint"},domProps:{value:e.endpoint},on:{input:function(t){t.target.composing||(e.endpoint=t.target.value)}}}),r("input",{attrs:{type:"file"},on:{change:e.loadTextFromFile}}),r("Buttons",{attrs:{language:e.language},on:{buttonClicked:e.buttonClicked}}),r("select",{directives:[{name:"model",rawName:"v-model",value:e.resultTypes.selectedOption,expression:"resultTypes.selectedOption"}],on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.resultTypes,"selectedOption",t.target.multiple?r:r[0])}}},e._l(e.resultTypes.options,(function(t){return r("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),r("Output",{ref:"output"})],1),r("div",{directives:[{name:"show",rawName:"v-show",value:e.rdfsparql,expression:"rdfsparql"}]},[e._v(" Example datasheets: "),r("CodeEditor",{ref:"codeEditor",attrs:{language:e.language}}),r("input",{attrs:{type:"file"},on:{change:e.loadTextFromFile}}),r("Buttons",{attrs:{language:"rdfsparql"},on:{buttonClicked:e.buttonClicked}})],1)])},F=[];function q(e){var t=new XMLHttpRequest;return t.open("GET",e,!1),t.send(),t.response}function M(e,t,r){r||(r="application/json");var n={"default-graph":"","should-sponge":"soft",query:e,debug:"on",timeout:"",format:r,save:"display",fname:""},o="";for(var s in n)o+=s+"="+encodeURIComponent(n[s])+"&";var a=t+"?"+o;return a}var D=r("21a6"),J={name:"SPARQLEditor",components:{CodeEditor:x,Buttons:O,Output:N},props:["rdfsparql"],store:m,data:function(){return{language:"sparql",endpoint:"http://dbpedia.org/sparql",resultTypes:{options:["JSON"],selectedOption:"JSON"},file:null}},methods:{buttonClicked:function(e){switch(e){case"Clear":this.$store.commit("updateSPARQLCode","");break;case"Perform Query":var t=M(this.$store.getters.SPARQLCode,this.endpoint,this.resultTypes.selectedOption),r=q(t);try{this.$store.commit("updateJSONResponse",JSON.parse(r)),this.$store.commit("changeError",!1)}catch(o){this.$store.commit("changeError",!0),this.$store.commit("updateErrorMessage",r)}break;case"Save Query":var n=new Blob([this.$store.getters.SPARQLCode],{type:"text/plain;charset=utf-8"});Object(D["saveAs"])(n,"query.txt");break;case"Query Store":this.$store.commit("queryStore")}},loadTextFromFile:function(e){var t=this,r=e.target.files[0],n=new FileReader;n.onload=function(e){return t.$store.commit("updateSPARQLCode",e.target.result)},n.readAsText(r)}},mounted:function(){this.$store.commit("updateCurrentLanguage",this.language)}},W=J,z=(r("5555"),Object(y["a"])(W,A,F,!1,null,null,null)),B=z.exports,U={name:"RDFEditor",components:{Multipane:T["a"],MultipaneResizer:T["b"],CodeEditor:x,Buttons:O,Output:N,SPARQLEditor:B,Grid:j["a"]},store:m,data:function(){return{language:"turtle",parsedRDF:"",rdfsparql:!0,autoWidth:!0,pagination:!0,search:!0,sort:!0,theme:"mermaid",width:"100%"}},methods:{buttonClicked:function(e){switch(e){case"Clear":this.$refs.codeEditor.clearEditor();break;case"Load":try{this.$store.commit("clearTurtleStore"),this.$store.commit("loadRDF"),this.$store.commit("changeError",!1)}catch(t){console.log(t)}break}},loadTextFromFile:function(e){var t=this,r=e.target.files[0],n=new FileReader;n.onload=function(e){return t.$store.commit("updateTurtleCode",e.target.result)},n.readAsText(r)},getVariables:function(e){var t=[];try{var r=Object.entries(e[0]);console.log(r);for(var n=0;n<r.length;n++)t.push(r[n][0]);return t}catch(o){console.log(o)}},getRows:function(e){for(var t=[],r=0;r<e.length;r++){for(var n=Object.entries(e[r]),o=[],s=0;s<n.length;s++)o.push(n[s][1].value);t.push(o)}return t}},mounted:function(){this.$store.commit("updateCurrentLanguage",this.language)},computed:{rdfstoreSize:function(){return this.$store.getters.rdfstore.size}}},V=U,G=(r("8909"),Object(y["a"])(V,u,c,!1,null,null,null)),H=G.exports,I=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Prefixes")]),r("ul",{staticStyle:{"list-style-type":"none"}},e._l(this.$store.getters.prefixes,(function(t){return r("li",{key:t.id},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.selectedPrefixes,expression:"selectedPrefixes"}],attrs:{type:"checkbox",id:t[0]},domProps:{value:t,checked:Array.isArray(e.selectedPrefixes)?e._i(e.selectedPrefixes,t)>-1:e.selectedPrefixes},on:{change:function(r){var n=e.selectedPrefixes,o=r.target,s=!!o.checked;if(Array.isArray(n)){var a=t,i=e._i(n,a);o.checked?i<0&&(e.selectedPrefixes=n.concat([a])):i>-1&&(e.selectedPrefixes=n.slice(0,i).concat(n.slice(i+1)))}else e.selectedPrefixes=s}}}),r("label",{attrs:{for:t}},[e._v(" "+e._s(t[0])+": "+e._s(t[1])+" ")])])})),0)])},X=[],K={name:"PrefixEditor",store:m,data:function(){return{selectedPrefixes:[]}},watch:{selectedPrefixes:function(e){this.$store.commit("updateSelectedPrefixes",e)}}},Y=K,Z=Object(y["a"])(Y,I,X,!1,null,null,null),ee=Z.exports,te={name:"AppNav",components:{RDFEditor:H,SPARQLEditor:B,PrefixEditor:ee},data:function(){return{currentTab:"RDFEditor",tabs:["RDFEditor","SPARQLEditor","PrefixEditor"]}},computed:{currentTabComponent:function(){return this.currentTab}}},re=te,ne=(r("bfb5"),Object(y["a"])(re,a,i,!1,null,null,null)),oe=ne.exports,se={name:"App",components:{AppNav:oe},data:function(){return{appTitle:"Qonsole 2.0"}}},ae=se,ie=(r("034f"),Object(y["a"])(ae,o,s,!1,null,null,null)),ue=ie.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(ue)}}).$mount("#app")},"725c":function(e,t,r){"use strict";var n=r("ab9b"),o=r.n(n);o.a},"85ec":function(e,t,r){},8909:function(e,t,r){"use strict";var n=r("221a"),o=r.n(n);o.a},9875:function(e,t,r){},ab9b:function(e,t,r){},bfb5:function(e,t,r){"use strict";var n=r("9875"),o=r.n(n);o.a}});
//# sourceMappingURL=app.d868dc59.js.map