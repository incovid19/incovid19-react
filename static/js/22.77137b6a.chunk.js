(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[22],{136:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return i})),n.d(t,"d",(function(){return c})),n.d(t,"f",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return s})),n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return b}));var a={position:"absolute",transform:"translate3d(-20rem, 0, 0)",height:"100vh",zIndex:-1},i={position:"absolute",transform:"translate3d(10rem, 0, 0)"},c={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},o={opacity:1,position:"absolute",height:"100vh",top:64,zIndex:999},r={opacity:1,marginTop:"7.5rem",marginBottom:"30rem"},s={opacity:0,height:"0rem",marginTop:"0rem",marginBottom:"0rem"},l={opacity:1,transform:"translate3d(0, 0px, 0)",height:228},b={opacity:0,transform:"translate3d(0, 2px, 0)",height:0}},151:function(e){e.exports=JSON.parse('{"english":"English","hindi":"\u0939\u093f\u0902\u0926\u0940","bengali":"\u09ac\u09be\u0982\u09b2\u09be","gujarati":"\u0a97\u0ac1\u0a9c\u0ab0\u0abe\u0aa4\u0ac0","kannada":"\u0c95\u0ca8\u0ccd\u0ca8\u0ca1","malayalam":"\u0d2e\u0d32\u0d2f\u0d3e\u0d33\u0d02","marathi":"\u092e\u0930\u093e\u0920\u0940","odiya":"\u0b13\u0b21\u0b3f\u0b06","punjabi":"\u0a2a\u0a70\u0a1c\u0a3e\u0a2c\u0a40","tamil":"\u0ba4\u0bae\u0bbf\u0bb4\u0bcd","telugu":"\u0c24\u0c46\u0c32\u0c41\u0c17\u0c41"}')},185:function(e,t,n){},295:function(e,t,n){"use strict";n.r(t);var a=n(46),i=(n(185),n(101)),c=n(136),o=n(151),r=n(2),s=n(244),l=n(245),b=n(246),j=n(247),u=n(248),d=n(249),h=n(250),O=n(296),f=n(47),p=n(99),m=n(242),v=n(290),x=n(243),g=n(187),w=n(19);function y(e){var t=this,n=e.pages,a=e.setExpand,c=e.darkMode,o=e.windowSize,s=Object(r.useRef)(null),l=Object(O.a)().t,b=Object(r.useCallback)((function(){o.width>=769&&a(!1)}),[a,o.width]);return Object(w.jsxs)("div",{className:"expand",ref:s,onMouseLeave:b,children:[n.map((function(e,n){return!0===e.showInNavbar?Object(w.jsx)(f.b,Object(i.a)(Object(i.a)({to:e.pageLink},o.width<769&&{onClick:a.bind(t,!1)}),{},{children:Object(w.jsx)("span",Object(i.a)(Object(i.a)({},N(e.pageLink,e.animationDelayForNavbar)),{},{children:l(e.displayName)}))}),n):null})),o.width<769&&Object(w.jsx)(L,{darkMode:c})]})}var k=function(e){var t,n=this,d=e.pages,h=e.showLanguageSwitcher,k=e.setShowLanguageSwitcher,N=Object(O.a)(),z=N.i18n,C=N.t,I=Object.keys(o).includes(null===z||void 0===z?void 0:z.language)?null===z||void 0===z?void 0:z.language:null===z||void 0===z||null===(t=z.options)||void 0===t?void 0:t.fallbackLng[0],M=Object(r.useState)(!1),E=Object(a.a)(M,2),P=E[0],T=E[1],F=Object(g.a)(!1);Object(m.a)(P);var q=Object(v.a)();Object(x.a)((function(){return T(!1)}));var A=Object(p.useTransition)(!0,{from:{opacity:0},enter:{opacity:1}}),J=Object(p.useTransition)(P,{from:q.width<769?c.d:c.c,enter:q.width<769?c.f:c.e,leave:q.width<769?c.d:c.c,config:{mass:1,tension:210,friction:26}}),B=Object(r.useCallback)((function(){q.width>=769&&T(!0)}),[q.width]),D=Object(r.useCallback)((function(){P&&T(!1),k(!h)}),[P,h,T,k]);return A((function(e,t){return Object(w.jsxs)(p.animated.div,{className:"Navbar",style:e,children:[Object(w.jsx)("div",{className:"navbar-left",onClick:D,children:o[I]}),Object(w.jsx)("div",{className:"navbar-middle",children:Object(w.jsxs)(f.b,{to:"/",onClick:T.bind(n,!1),children:["Continuing",Object(w.jsx)("div",{children:"Covid19"}),Object(w.jsx)("div",{children:"India"})]})}),Object(w.jsxs)("div",Object(i.a)(Object(i.a)({className:"navbar-right",onMouseEnter:B},q.width<769&&{onClick:T.bind(n,!P)}),{},{children:[q.width<769&&Object(w.jsx)("span",{children:C(P?"Close":"Menu")}),q.width>=769&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(f.b,{to:"/",children:Object(w.jsx)("span",{children:Object(w.jsx)(s.a,Object(i.a)({},S("/")))})}),Object(w.jsx)(f.b,{to:"/collaborators",children:Object(w.jsx)("span",{children:Object(w.jsx)(l.a,Object(i.a)({},S("/volunteers")))})}),Object(w.jsx)(f.b,{to:"/models",children:Object(w.jsx)("span",{children:Object(w.jsx)(b.a,Object(i.a)({},S("/models")))})}),Object(w.jsx)(f.b,{to:"/about",children:Object(w.jsx)("span",{children:Object(w.jsx)(j.a,Object(i.a)({},S("/about")))})}),Object(w.jsx)(f.b,{to:"/faq",children:Object(w.jsx)("span",{children:Object(w.jsx)(u.a,Object(i.a)({},S("/faq")))})}),Object(w.jsx)("span",{children:Object(w.jsx)(L,{darkMode:F})})]})]})),J((function(e,t){return t&&Object(w.jsx)(p.animated.div,{style:e,children:Object(w.jsx)(y,{pages:d,setExpand:T,darkMode:F,windowSize:q})})}))]})}))},N=function(e,t){return{className:"".concat(window.location.pathname===e?"focused":"")}},S=function(e){return{style:{stroke:window.location.pathname===e?"#4c75f2":""}}},L=function(e){var t=e.darkMode;return Object(w.jsx)("div",{className:"SunMoon",onClick:t.toggle,children:Object(w.jsx)("div",{children:t.value?Object(w.jsx)(d.a,{color:"#ffc107"}):Object(w.jsx)(h.a,{})})})},z=n(24),C=n(195),I=n.n(C),M=n(5),E=Object(r.lazy)((function(){return Object(z.l)((function(){return Promise.all([n.e(2),n.e(6),n.e(7),n.e(24)]).then(n.bind(null,287))}))})),P=Object(r.lazy)((function(){return Object(z.l)((function(){return Promise.all([n.e(2),n.e(20)]).then(n.bind(null,289))}))})),T=Object(r.lazy)((function(){return Object(z.l)((function(){return Promise.all([n.e(2),n.e(23)]).then(n.bind(null,253))}))})),F=Object(r.lazy)((function(){return Object(z.l)((function(){return Promise.all([n.e(2),n.e(28)]).then(n.bind(null,254))}))})),q=Object(r.lazy)((function(){return Object(z.l)((function(){return Promise.all([n.e(0),n.e(2),n.e(6),n.e(38)]).then(n.bind(null,255))}))})),A=Object(r.lazy)((function(){return Object(z.l)((function(){return Promise.all([n.e(2),n.e(30)]).then(n.bind(null,256))}))})),J=Object(r.lazy)((function(){return Object(z.l)((function(){return Promise.all([n.e(0),n.e(31)]).then(n.bind(null,257))}))})),B=Object(r.lazy)((function(){return Object(z.l)((function(){return n.e(42).then(n.bind(null,258))}))}));t.default=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],i=t[1],c=Object(M.h)(),o=[{pageLink:"/",view:E,displayName:"Home",showInNavbar:!0},{pageLink:"/collaborators",view:P,displayName:"Collaborators",showInNavbar:!0},{pageLink:"/models",view:T,displayName:"Models and Forecasts",showInNavbar:!0},{pageLink:"/about",view:F,displayName:"About",showInNavbar:!0},{pageLink:"/faq",view:A,displayName:"FAQ",showInNavbar:!0},{pageLink:"/state/:stateCode",view:q,displayName:"State",showInNavbar:!1}];return Object(r.useEffect)((function(){I.a.visits("incovid19").then((function(e){console.log(e.value)}))}),[]),Object(r.useEffect)((function(){n&&(document.documentElement.scrollTo({top:0,behavior:"smooth"}),document.body.scrollTo({top:0,behavior:"smooth"}))}),[n]),Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(r.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsx)(J,{showLanguageSwitcher:n,setShowLanguageSwitcher:i})}),Object(w.jsx)(k,{pages:o,showLanguageSwitcher:n,setShowLanguageSwitcher:i}),Object(w.jsx)(B,{}),Object(w.jsx)(r.Suspense,{fallback:Object(w.jsx)("div",{}),children:Object(w.jsxs)(M.d,{location:c,children:[o.map((function(e,t){return Object(w.jsx)(M.b,{exact:!0,path:e.pageLink,render:function(t){t.match;return Object(w.jsx)(e.view,{})}},t)})),Object(w.jsx)(M.a,{to:"/"})]})})]})}}}]);
//# sourceMappingURL=22.77137b6a.chunk.js.map