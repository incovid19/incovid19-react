/*! For license information please see 24.0def4236.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[24],{113:function(t,e,n){"use strict";var i=n(47),c=n(2),r={root:null,rootMargin:"0px 0px 0px 0px",threshold:0};e.a=function(t){var e=Object(c.useState)(!1),n=Object(i.a)(e,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){t.current&&new IntersectionObserver((function(e,n){e.forEach((function(e){e.isIntersecting&&(a(!0),n.unobserve(t.current))}))}),r).observe(t.current)}),[t]),s}},198:function(t,e,n){"use strict";var i=n(2),c=n(93);e.a=function(t,e,n){if(!c.a)return[e,function(){}];var r=Object(i.useState)((function(){try{var i=sessionStorage.getItem(t);return"string"!==typeof i?(sessionStorage.setItem(t,n?String(e):JSON.stringify(e)),e):n?i:JSON.parse(i||"null")}catch(r){return e}})),s=r[0],a=r[1];return Object(i.useEffect)((function(){try{var e=n?String(s):JSON.stringify(s);sessionStorage.setItem(t,e)}catch(r){}})),[s,a]}},199:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n(1),c=n(0);function r(t){var e,n;if(Object(c.a)(1,arguments),t&&"function"===typeof t.forEach)e=t;else{if("object"!==typeof t||null===t)return new Date(NaN);e=Array.prototype.slice.call(t)}return e.forEach((function(t){var e=Object(i.a)(t);(void 0===n||n<e||isNaN(Number(e)))&&(n=e)})),n||new Date(NaN)}},249:function(t,e,n){"use strict";n.r(e);var i=n(98),c=n(47),r=n(10),s=n(113),a=n(24),l=n(95),o=n(92),d=n.n(o),u=n(68),j=n(199),b=n(2),O=n(117),f=n(288),v=n(5),h=n(198),m=n(110),p=n(19),x=Object(b.lazy)((function(){return Object(a.l)((function(){return Promise.all([n.e(1),n.e(19)]).then(n.bind(null,211))}))})),g=Object(b.lazy)((function(){return Object(a.l)((function(){return n.e(6).then(n.bind(null,115))}))})),y=Object(b.lazy)((function(){return Object(a.l)((function(){return n.e(33).then(n.bind(null,159))}))})),N=Object(b.lazy)((function(){return Object(a.l)((function(){return n.e(38).then(n.bind(null,160))}))})),S=Object(b.lazy)((function(){return Object(a.l)((function(){return Promise.all([n.e(2),n.e(7),n.e(5)]).then(n.bind(null,228))}))})),C=Object(b.lazy)((function(){return Object(a.l)((function(){return n.e(34).then(n.bind(null,161))}))})),k=Object(b.lazy)((function(){return Object(a.l)((function(){return Promise.all([n.e(1),n.e(3),n.e(27)]).then(n.bind(null,162))}))})),w=Object(b.lazy)((function(){return Object(a.l)((function(){return n.e(8).then(n.bind(null,230))}))})),M=Object(b.lazy)((function(){return Object(a.l)((function(){return Promise.all([n.e(2),n.e(36)]).then(n.bind(null,229))}))})),D=Object(b.lazy)((function(){return Object(a.l)((function(){return n.e(25).then(n.bind(null,177))}))}));function z(){var t,e,n,o,z,I=Object(f.a)().t,H=Object(v.i)().stateCode.toUpperCase(),R=Object(h.a)("mapStatistic","active"),U=Object(c.a)(R,2),E=U[0],P=U[1],J=Object(b.useState)(!1),A=Object(c.a)(J,2),F=A[0],T=A[1],V=Object(b.useState)({stateCode:H,districtName:null}),W=Object(c.a)(V,2),B=W[0],L=W[1],q=Object(b.useState)(!1),G=Object(c.a)(q,2),K=G[0],Q=G[1];Object(b.useEffect)((function(){B.stateCode!==H&&(L({stateCode:H,districtName:null}),T(!1))}),[B.stateCode,H]);var X=Object(m.a)("".concat(r.e,"/timeseries-").concat(H,".min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}),Y=X.data,Z=X.error,$=Object(m.a)("".concat(r.e,"/data.min.json"),a.b,{revalidateOnMount:!0,refreshInterval:1e5}).data,_=null===$||void 0===$?void 0:$[H],tt=Object(b.useMemo)((function(){if(_){var t=window.innerWidth>=540?3:2,e=(null===_||void 0===_?void 0:_.districts)?Object.keys(_.districts).filter((function(t){return"Unknown"!==t})).length:0;return Math.ceil(e/t)}}),[_]),et=Object(b.useRef)(),nt=Object(s.a)(et),it=Object(b.useMemo)((function(){var t=[];return[0,0,0,0].map((function(e,n){return t.push({animationDelay:"".concat(250*n,"ms")}),null})),t}),[]),ct=F?window.innerWidth>=540?10:8:6,rt=Object(b.useMemo)((function(){var t,e,n,i,c,r=[null===_||void 0===_||null===(t=_.meta)||void 0===t?void 0:t.date,null===_||void 0===_||null===(e=_.meta)||void 0===e||null===(n=e.tested)||void 0===n?void 0:n.date,null===_||void 0===_||null===(i=_.meta)||void 0===i||null===(c=i.vaccinated)||void 0===c?void 0:c.date].filter((function(t){return t}));return r.length>0?Object(u.a)(Object(j.a)(r.map((function(t){return Object(a.k)(t)}))),{representation:"date"}):null}),[_]),st=r.p.includes(E)?E:"confirmed",at=Object(b.useMemo)((function(){var t;return!!((null===_||void 0===_?void 0:_.districts)&&(null===(t=_.districts)||void 0===t?void 0:t[r.H])&&r.u.every((function(t){return Object(a.i)(_,"total",t)===Object(a.i)(_.districts[r.H],"total",t)})))}),[_]),lt=r.z[st],ot=(null===B||void 0===B?void 0:B.districtName)&&B.districtName!==r.H&&at,dt=Object.keys((!at||!lt.hasPrimary)&&(null===_||void 0===_?void 0:_.districts)||{});return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)(O.a,{children:[Object(p.jsxs)("title",{children:["Coronavirus Outbreak in ",r.y[H]," - covid19india.org"]}),Object(p.jsx)("meta",{name:"title",content:"Coronavirus Outbreak in ".concat(r.y[H],": Latest Map and Case Count")})]}),Object(p.jsxs)("div",{className:"State",children:[Object(p.jsxs)("div",{className:"state-left",children:[Object(p.jsx)(w,{data:_,stateCode:H}),Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsx)(C,{mapStatistic:E,setMapStatistic:P}),Object(p.jsx)(y,{data:_}),Object(p.jsx)(k,{timeseries:null===Y||void 0===Y||null===(t=Y[H])||void 0===t?void 0:t.dates,stateCode:H,forceRender:!!Z})]}),(null===_||void 0===_||null===(e=_.total)||void 0===e?void 0:e.vaccinated1)&&Object(p.jsx)(N,{data:_}),$&&Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{style:{minHeight:"50rem"}}),children:Object(p.jsx)(S,{stateCode:H,data:$,regionHighlighted:B,setRegionHighlighted:L,mapStatistic:E,setMapStatistic:P,lastDataDate:rt,delta7Mode:K,setDelta7Mode:Q,noRegionHighlightedDistrictData:ot,noDistrictData:at})}),Object(p.jsx)("span",{ref:et}),nt&&$&&Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(M,{stateCode:H,data:$,timeseries:null===Y||void 0===Y||null===(n=Y[H])||void 0===n?void 0:n.dates})})]}),Object(p.jsx)("div",{className:"state-right",children:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"district-bar",children:[Object(p.jsxs)("div",{className:d()("district-bar-top",{expanded:F}),children:[Object(p.jsxs)("div",{className:"district-bar-left",children:[Object(p.jsx)("h2",{className:d()(st,"fadeInUp"),style:it[0],children:I("Top districts")}),Object(p.jsx)("div",{className:"districts fadeInUp ".concat(F?"is-grid":""),style:F?Object(i.a)({gridTemplateRows:"repeat(".concat(tt,", 2rem)")},it[1]):it[1],children:dt.filter((function(t){return"Unknown"!==t})).sort((function(t,e){return function(t,e){var n=_.districts[t],i=_.districts[e];return Object(a.i)(i,"total",E)-Object(a.i)(n,"total",E)}(t,e)})).slice(0,F?void 0:5).map((function(t){var e=Object(a.i)(_.districts[t],"total",st),n=Object(a.i)(_.districts[t],"delta",st);return Object(p.jsxs)("div",{className:"district",children:[Object(p.jsx)("h2",{children:Object(a.f)(e)}),Object(p.jsx)("h5",{children:I(t)}),"active"!==st&&Object(p.jsx)("div",{className:"delta",children:Object(p.jsx)("h6",{className:st,children:n>0?"\u2191"+Object(a.f)(n):""})})]},t)}))})]}),Object(p.jsxs)("div",{className:"district-bar-right fadeInUp",style:it[2],children:[Y&&("confirmed"===st||"deceased"===st)&&Object(p.jsx)("div",{className:"happy-sign",children:Object.keys((null===(o=Y[H])||void 0===o?void 0:o.dates)||{}).slice(-ct).every((function(t){return 0===Object(a.i)(Y[H].dates[t],"delta",st)}))&&Object(p.jsxs)("div",{className:"alert ".concat("confirmed"===st?"is-green":""),children:[Object(p.jsx)(l.x,{}),Object(p.jsxs)("div",{className:"alert-right",children:["No new ",st," cases in the past five days"]})]})}),Object(p.jsx)(x,{timeseries:null===Y||void 0===Y||null===(z=Y[H])||void 0===z?void 0:z.dates,statistic:st,stateCode:H,lookback:ct,forceRender:!!Z})]})]}),Object(p.jsx)("div",{className:"district-bar-bottom",children:dt.length>5?Object(p.jsx)("button",{className:"button fadeInUp",onClick:function(){T(!F)},style:it[3],children:Object(p.jsx)("span",{children:I(F?"View less":"View all")})}):Object(p.jsx)("div",{style:{height:"3.75rem",flexBasis:"15%"}})})]}),Object(p.jsx)(b.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(D,{stateCode:H,timeseries:Y,regionHighlighted:B,setRegionHighlighted:L,noRegionHighlightedDistrictData:ot,forceRender:!!Z})})]})})]}),Object(p.jsx)(g,{})]})}e.default=Object(b.memo)(z)},92:function(t,e,n){var i;!function(){"use strict";var n={}.hasOwnProperty;function c(){for(var t=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var r=typeof i;if("string"===r||"number"===r)t.push(i);else if(Array.isArray(i)){if(i.length){var s=c.apply(null,i);s&&t.push(s)}}else if("object"===r)if(i.toString===Object.prototype.toString)for(var a in i)n.call(i,a)&&i[a]&&t.push(a);else t.push(i.toString())}}return t.join(" ")}t.exports?(c.default=c,t.exports=c):void 0===(i=function(){return c}.apply(e,[]))||(t.exports=i)}()}}]);
//# sourceMappingURL=24.0def4236.chunk.js.map