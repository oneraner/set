(function(t){function e(e){for(var r,u,c=e[0],i=e[1],s=e[2],l=0,p=[];l<c.length;l++)u=c[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var i=n[u];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d21e30b":"56ab372e","chunk-59b9347e":"2acb0025","chunk-d663c030":"f8ea9e77"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=u(t);var s=new Error;a=function(e){i.onerror=i.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var f=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"container"},[n("ul",{staticClass:"row justify-content-around"},[n("li",{staticClass:"mt-3 mb-3"},[n("router-link",{staticClass:"darkbutton",attrs:{to:"/"}},[t._v("首頁 Index")])],1),n("li",{staticClass:"mt-3 mb-3"},[n("router-link",{staticClass:"darkbutton",attrs:{to:"/chart"}},[t._v("圖表 Chart")])],1),n("li",{staticClass:"mt-3 mb-3"},[n("router-link",{staticClass:"darkbutton",attrs:{to:"/drag"}},[t._v("區塊拖曳 Drag & Drop")])],1)])]),n("router-view")],1)},a=[],u=(n("5c0b"),n("2877")),c={},i=Object(u["a"])(c,o,a,!1,null,null,null),s=i.exports,l=(n("d3b7"),n("8c4f"));r["a"].use(l["a"]);var f=[{path:"/",name:"Index",component:function(){return n.e("chunk-2d21e30b").then(n.bind(null,"d504"))}},{path:"/chart",name:"Chart",component:function(){return n.e("chunk-59b9347e").then(n.bind(null,"e4a9"))}},{path:"/drag",name:"Drag",component:function(){return n.e("chunk-d663c030").then(n.bind(null,"9a4c"))}}],p=new l["a"]({routes:f}),d=p,h=n("2f62");r["a"].use(h["a"]);var b=new h["a"].Store({state:{},mutations:{},actions:{},modules:{}}),m=n("bc3a"),v=n.n(m),g=n("2106"),y=n.n(g);n("4989");r["a"].config.productionTip=!1,r["a"].use(y.a,v.a),new r["a"]({router:d,store:b,render:function(t){return t(s)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.6f54a5df.js.map