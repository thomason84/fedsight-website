(function(t){function e(e){for(var i,l,o=e[0],r=e[1],c=e[2],d=0,f=[];d<o.length;d++)l=o[d],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,l=1;l<s.length;l++){var r=s[l];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},a={app:0},n=[];function l(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"7cb9c6a8"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var e=[],s=a[t];if(0!==s)if(s)e.push(s[2]);else{var i=new Promise(function(e,i){s=a[t]=[e,i]});e.push(s[2]=i);var n,r=document.createElement("script");r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.src=l(t);var c=new Error;n=function(e){r.onerror=r.onload=null,clearTimeout(d);var s=a[t];if(0!==s){if(s){var i=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+n+")",c.name="ChunkLoadError",c.type=i,c.request=n,s[1](c)}a[t]=void 0}};var d=setTimeout(function(){n({type:"timeout",target:r})},12e4);r.onerror=r.onload=n,document.head.appendChild(r)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var d=0;d<r.length;d++)e(r[d]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var i=s("64a9"),a=s.n(i);a.a},"0d9e":function(t,e,s){t.exports=s.p+"img/bigstock-Teamwork-Concept-Collaboratio-306924817.645e5c9c.jpg"},"104d":function(t,e,s){t.exports=s.p+"img/bigstock-Smiling-business-team-working--209395762.732e581d.jpg"},"1b16":function(t,e,s){},"2f55":function(t,e,s){"use strict";var i=s("3b92"),a=s.n(i);a.a},3697:function(t,e,s){t.exports=s.p+"img/hubzone5-3-1080x675.71b6949d.jpg"},"3b92":function(t,e,s){},"40e7":function(t,e,s){},5341:function(t,e,s){t.exports=s.p+"img/bigstock-Businessmen-and-businesswomen--267296758.94265d6a.jpg"},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var i=s("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("font-awesome-icon",{attrs:{icon:"user-secret"}}),i("div",{attrs:{id:"navbar"}},[i("b-navbar",{attrs:{toggleable:"lg"}},[i("b-navbar-brand",{attrs:{href:"#"}},[i("img",{staticClass:"logo",attrs:{alt:"Fedsight Logo",src:s("8428")}})]),i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",{staticClass:"ml-auto"},[i("div",{staticClass:"d-flex ml-auto nav-links"},[i("router-link",{staticClass:"col-xs-3",attrs:{to:"/"}},[t._v("Home")]),i("router-link",{staticClass:"col-xs-3",attrs:{to:"/whatWeDo"}},[t._v("Services")]),i("router-link",{staticClass:"col-xs-3",attrs:{to:"/whoWeAre"}},[t._v("Who We Are")]),i("router-link",{staticClass:"col-xs-3",attrs:{to:"/about"}},[t._v("About Us")]),i("router-link",{staticClass:"col-xs-3",attrs:{to:"/whoWeServe"}},[t._v("Who We Serve")])],1)])],1)],1)],1),i("router-view")],1)},n=[],l=(s("034f"),s("2877")),o={},r=Object(l["a"])(o,a,n,!1,null,null,null),c=r.exports,d=s("8c4f"),u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[t._m(0),t._m(1),s("Carousel",{attrs:{msg:"Welcome to Your Vue.js App"}}),t._m(2),s("section",{staticClass:"container-fluid d-flex flex-wrap",staticStyle:{padding:"0rem"}},[s("div",{staticClass:"col-12 d-flex flex-wrap flipSection"},[t._m(3),s("div",{staticClass:"col-md-4 d-inline-block cardContainer"},[s("div",{staticClass:"flip"},[s("div",{staticClass:"card"},[t._m(4),s("div",{staticClass:"face back"},[s("div",{staticClass:"inner text-center"},[s("h3",{staticClass:"cardheader fedsightBlue"},[t._v("Download a PDF copy of our capabilities summary")]),s("p",{staticClass:"cardText"},[t._v("Our management consulting and data analytics solutions simplify processes and drive organizational efficiency.")]),s("a",{staticClass:"btn btn-primary cardButtons",attrs:{href:"../assets/files/Fedsight_Capabilities_Statement.pdf",target:"_blank",download:"Fedsight_Capabilities_Statement.pdf"}},[s("font-awesome-icon",{attrs:{icon:["fas","download"]}}),t._v(" Download")],1)])])])])]),t._m(5)])]),s("Footer")],1)},f=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"heroSection d-flex align-items-center justify-content-center container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("h1",{staticClass:"slogan col-md-12"},[t._v("Identify What Matters")]),s("div",{staticClass:"mainCTA fedsightYellowBackground m-auto d-flex align-items-center justify-content-center"},[t._v("Let Us Show You\n          ")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"mainParagraph"},[s("div",{staticClass:"row",staticStyle:{height:"100%"}},[s("div",{staticClass:"container d-flex align-content-center justify-content-center flex-wrap"},[s("h2",{staticClass:"fedsightGreen"},[t._v("We Assess Problems and Tailor Solutions for Federal Agencies")]),s("p",{staticClass:"cardText"},[t._v("As an insight based consulting firm, we are acutely aware of the admission and programmatic nuances of government agencies.  We can aid you regardless of where your organization is in the development process.\n        ")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"container boxSection d-flex flex-wrap"},[i("div",{staticClass:"col-xs-12 col-md-6"},[i("img",{staticClass:"sectionImg boxSectionItem",attrs:{src:s("5341"),alt:"people in a meeting looking at printed documents"}})]),i("div",{staticClass:"col-xs-12 col-md-6"},[i("div",{staticClass:"fedsightBlueBackground d-flex align-items-center justify-content-center flex-column boxSectionItem",staticStyle:{height:"100%",width:"100%","min-height":"30rem"}},[i("h2",{staticClass:"fedsightYellow"},[t._v("Our Business Successes")]),i("p",{staticClass:"whiteText text-left",staticStyle:{padding:"1rem"}},[t._v("Fedsight has worked across the federal spectrum to solve problems at every organizational level. Please see our record of helping public sector organizations transform their operations.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4 d-inline-block cardContainer"},[s("div",{staticClass:"flip"},[s("div",{staticClass:"card"},[s("div",{staticClass:"face front"},[s("div",{staticClass:"inner card1Inner"},[s("div",{staticClass:"cardTextArea d-flex align-items-center justify-content-center"},[s("h3",{staticClass:"fedsightGreen"},[t._v("Contract Vehicle Overview")])])])]),s("div",{staticClass:"face back"},[s("div",{staticClass:"inner text-center"},[s("h3",{staticClass:"cardheader fedsightBlue"},[t._v("GSA INFORMATION TECHNOLOGY SCHEDULE 70")]),s("p",{staticClass:"cardText"},[t._v("Contract #: 47QTCA19D007S")]),s("p",{staticClass:"cardText"},[t._v("The IT Schedule 70 allows Fedsight to help clients maximize their operational potential by providing systems development, systems analysis, IT strategy and architecture, IT security, and other IT services.")]),s("button",{staticClass:"btn btn-primary cardButtons",attrs:{type:"button"}},[t._v("Learn More")])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"face front"},[s("div",{staticClass:"inner card2Inner"},[s("div",{staticClass:"cardTextArea d-flex align-items-center justify-content-center"},[s("h3",{staticClass:"fedsightGreen",staticStyle:{}},[t._v("Capabilities Overview")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-4 d-inline-block cardContainer"},[s("div",{staticClass:"flip"},[s("div",{staticClass:"card"},[s("div",{staticClass:"face front"},[s("div",{staticClass:"inner card3Inner"},[s("div",{staticClass:"cardTextArea d-flex align-items-center justify-content-center"},[s("h3",{staticClass:"fedsightGreen"},[t._v("Driving Excellent Performance")])])])]),s("div",{staticClass:"face back"},[s("div",{staticClass:"inner text-center"},[s("h3",{staticClass:"cardheader fedsightBlue"},[t._v("Improved efficiency through automation")]),s("p",{staticClass:"cardText"},[t._v("Tell me something about this")]),s("button",{staticClass:"btn btn-primary cardButtons",attrs:{type:"button"}},[t._v("Learn More")])])])])])])}],v=(s("7514"),s("1157")),m=s.n(v),g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-4 fedsightBlueBackground whiteText carouselHeader",on:{click:function(e){t.slide=0}}},[t._v("Strategize")]),i("div",{staticClass:"col-4 fedsightGreenBackground whiteText carouselHeader",on:{click:function(e){t.slide=1}}},[t._v("Develop")]),i("div",{staticClass:"col-4 fedsightYellowBackground carouselHeader",on:{click:function(e){t.slide=2}}},[t._v("Manage")])])]),i("div",{staticClass:"container-fluid relative"},[i("div",{staticClass:"row triangleSection"},[0==t.slide?i("div",{staticClass:"col-4 d-flex justify-content-center"},[i("div",{staticClass:"triangle-down-blue"})]):1==t.slide?i("div",{staticClass:"col-4 d-flex justify-content-center m-auto"},[i("div",{staticClass:"triangle-down-green"})]):2==t.slide?i("div",{staticClass:"col-4 d-flex justify-content-center ml-auto"},[i("div",{staticClass:"triangle-down-yellow"})]):t._e()])]),i("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:5e3,indicators:"",background:"#ababab","img-width":"1024","img-height":"350"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[i("b-carousel-slide",{attrs:{caption:"","text-tag":"div","text-html":"\n      <ul class='slideList' style='text-align: left; list-style-type: disc;font-size: 2rem'>\n        <li>strategic planning</li>\n        <li>forecasting</li>\n        <li>early-stage product development planning</li>\n      </ul>\n      <div class='flipCardButton fedsightYellowBackground'>Learn More</div>\n      ","img-src":s("0d9e")}}),i("b-carousel-slide",{attrs:{caption:"","text-tag":"div","text-html":"\n      <ul class='slideList' style='text-align: left; list-style-type: disc;font-size: 2rem'>\n        <li>Business Process Reengineering</li>\n        <li>Computer Systems Design</li>\n        <li>Business Process Automation</li>\n        <li>Work Force Development</li>\n        <li>SharePoint Development</li>\n      </ul>\n      <div class='flipCardButton fedsightYellowBackground'>Learn More</div>\n      ","img-src":s("a05c")}}),i("b-carousel-slide",{attrs:{caption:"","text-tag":"div","text-html":"\n      <ul class='slideList' style='text-align: left; list-style-type: disc;font-size: 2rem'>\n        <li>Digital Strategy</li>\n        <li>Performance Assessments</li>\n        <li>Cost Analyses/Optimization</li>\n        <li>Data Visualization</li>\n        <li>Project Management</li>\n        <li>Performance Assessments</li>\n        <li>Cost Analyses/Optimization</li>\n        <li>Data Visualization</li>\n      </ul>\n      <div class='flipCardButton fedsightYellowBackground'>Learn More</div>\n      ","img-src":s("104d")}})],1)],1)},p=[],h={name:"Carousel",data:function(){return{slide:0,show:!0,sliding:null}},methods:{onSlideStart:function(t){this.sliding=!0,console.log(t)},onSlideEnd:function(t){this.sliding=!1,console.log(t)}}},C=h,b=(s("d681"),Object(l["a"])(C,g,p,!1,null,"e7a24164",null)),_=b.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid ",attrs:{id:"footer"}},[s("div",{staticClass:"row",staticStyle:{padding:"2rem 1rem"}},[s("div",{staticClass:"col-md-9 d-flex align-items-start"},[t._m(0),s("div",{staticClass:"col-xs-6 col-md-3"},[s("ul",{staticClass:"footerList"},[s("h3",{staticClass:"fedsightGreen"},[t._v("Quick Links")]),s("li",[s("router-link",{staticClass:"col-xs-3",attrs:{to:"/"}},[t._v("Home")])],1),s("li",[s("router-link",{staticClass:"col-xs-3",attrs:{to:"/whatWeDo"}},[t._v("What We Do")])],1),s("li",[s("router-link",{staticClass:"col-xs-3",attrs:{to:"/whoWeAre"}},[t._v("Who We Are")])],1),s("li",[s("router-link",{staticClass:"col-xs-3",attrs:{to:"/about"}},[t._v("About Us")])],1),s("li",[s("router-link",{staticClass:"col-xs-3",attrs:{to:"/whoWeServe"}},[t._v("Who We Serve")])],1)])]),t._m(1)]),t._m(2)])])},y=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-md-3"},[s("ul",{staticClass:"footerList"},[s("h3",{staticClass:"fedsightGreen"},[t._v("Contact Us")]),s("li",[t._v("\n                      215 Depot Court SE "),s("br"),t._v("\n                      2nd Floor #249 "),s("br"),t._v("\n                      Leesburg, VA 20175\n                  ")]),s("li",[s("strong",[t._v("Phone:")])]),s("li",[s("strong",[t._v("Email:")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-xs-6 col-md-3"},[s("ul",{staticClass:"footerList"},[s("h3",{staticClass:"fedsightGreen"},[t._v("Something Else")]),s("li",[t._v("Interesting Stuff")]),s("li",[t._v("Cool Link")]),s("li",[t._v("Brag about something")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-xs-12 col-md-3"},[i("img",{staticClass:"certImg",attrs:{src:s("3697"),alt:"hubzone certification logo"}})])}],w={name:"Footer"},k=w,S=(s("2f55"),Object(l["a"])(k,x,y,!1,null,"06bb613e",null)),j=S.exports,T=m.a,E={name:"home",components:{Carousel:_,Footer:j},mounted:function(){T(".flip").hover(function(){T(this).find(".card").toggleClass("flipped")}),T(".flip").touch(function(){T(this).find(".card").toggleClass("flipped")})}},O=E,A=(s("eb91"),Object(l["a"])(O,u,f,!1,null,"748d18da",null)),B=A.exports;i["default"].use(d["a"]);var P=new d["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:B},{path:"/about",name:"about",component:function(){return s.e("about").then(s.bind(null,"f820"))}}]}),W=s("ecee"),L=s("c074"),D=s("ad3d"),I=s("5f5b");s("f9e3"),s("2dd8");W["c"].add(L["a"]),i["default"].component("font-awesome-icon",D["a"]),window.$=s("1157"),window.JQuery=s("1157"),i["default"].use(I["a"]),i["default"].config.productionTip=!1,new i["default"]({router:P,render:function(t){return t(c)}}).$mount("#app")},"64a9":function(t,e,s){},8428:function(t,e,s){t.exports=s.p+"img/fedsight_consult_logo-white.e6eec845.svg"},a05c:function(t,e,s){t.exports=s.p+"img/bigstock--202433170.3574a8b7.jpg"},d681:function(t,e,s){"use strict";var i=s("40e7"),a=s.n(i);a.a},eb91:function(t,e,s){"use strict";var i=s("1b16"),a=s.n(i);a.a}});
//# sourceMappingURL=app.816af8e9.js.map