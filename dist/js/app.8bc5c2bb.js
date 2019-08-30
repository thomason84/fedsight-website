(function(e){function t(t){for(var n,s,i=t[0],l=t[1],u=t[2],c=0,v=[];c<i.length;c++)s=i[c],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&v.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);f&&f(t);while(v.length)v.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"df19c7f2"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=n);var a,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=s(e);var u=new Error;a=function(t){l.onerror=l.onload=null,clearTimeout(c);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",u.name="ChunkLoadError",u.type=n,u.request=a,r[1](u)}o[e]=void 0}};var c=setTimeout(function(){a({type:"timeout",target:l})},12e4);l.onerror=l.onload=a,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var f=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),o=r.n(n);o.a},"32e0":function(e,t,r){"use strict";var n=r("9f0a"),o=r.n(n);o.a},"3dff":function(e,t,r){"use strict";var n=r("d132"),o=r.n(n);o.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"container-fluid fedsightBlueBackground",attrs:{id:"nav"}},[n("img",{staticClass:"logo",attrs:{alt:"Fedsight Logo",src:r("8428")}}),n("div",{staticStyle:{"margin-left":"auto"}},[n("router-link",{staticClass:"col-md-2 col-xs-3",attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n      "),n("router-link",{staticClass:"col-md-2 col-xs-3",attrs:{to:"/about"}},[e._v("About")])],1)]),n("router-view")],1)},a=[],s=(r("034f"),r("2877")),i={},l=Object(s["a"])(i,o,a,!1,null,null,null),u=l.exports,c=r("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[e._m(0),e._m(1),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},v=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"heroSection d-flex align-items-center justify-content-center container-fluid"},[r("div",{staticClass:"row"},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("h1",{staticClass:"slogan col-md-12"},[e._v("Identify What Matters")]),r("div",{staticClass:"mainCTA fedsightYellowBackground m-auto d-flex align-items-center justify-content-center"},[e._v("Let Us Show You\n          ")])])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticStyle:{height:"20vh"}},[r("div",{staticClass:"row"},[r("div",{staticClass:"container"},[r("h2",{staticClass:"fedsightGreen"},[e._v("We Assess Problems and Tailor Solutions for Federal Agencies")]),r("p",[e._v("As an insight based consulting firm, we are acutely aware of the admission and programmatic nuances of government agencies.  This is why our approach results in sophisticated outcomes.\n        ")])])])])}],p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),r("br"),e._v("\n    check out the\n    "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],d={name:"HelloWorld",props:{msg:String}},m=d,g=(r("32e0"),Object(s["a"])(m,p,h,!1,null,"0b11c2c6",null)),_=g.exports,b={name:"home",components:{HelloWorld:_}},w=b,j=(r("3dff"),Object(s["a"])(w,f,v,!1,null,"3e4725d8",null)),y=j.exports;n["default"].use(c["a"]);var k=new c["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:y},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]}),C=r("5f5b");r("f9e3"),r("2dd8");n["default"].use(C["a"]),n["default"].config.productionTip=!1,new n["default"]({router:k,render:function(e){return e(u)}}).$mount("#app")},"64a9":function(e,t,r){},8428:function(e,t,r){e.exports=r.p+"img/fedsight_consult_logo-white.cfe950fc.svg"},"9f0a":function(e,t,r){},d132:function(e,t,r){}});
//# sourceMappingURL=app.8bc5c2bb.js.map