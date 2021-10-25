(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[9],{10:function(a,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"l",(function(){return l})),n.d(e,"z",(function(){return d})),n.d(e,"u",(function(){return u})),n.d(e,"k",(function(){return s})),n.d(e,"A",(function(){return f})),n.d(e,"B",(function(){return v})),n.d(e,"p",(function(){return p})),n.d(e,"F",(function(){return h})),n.d(e,"c",(function(){return m})),n.d(e,"I",(function(){return T})),n.d(e,"g",(function(){return g})),n.d(e,"d",(function(){return y})),n.d(e,"t",(function(){return j})),n.d(e,"C",(function(){return b})),n.d(e,"G",(function(){return A})),n.d(e,"H",(function(){return D})),n.d(e,"f",(function(){return S})),n.d(e,"h",(function(){return w})),n.d(e,"j",(function(){return E})),n.d(e,"i",(function(){return k})),n.d(e,"v",(function(){return N})),n.d(e,"D",(function(){return F})),n.d(e,"E",(function(){return P})),n.d(e,"s",(function(){return C})),n.d(e,"r",(function(){return O})),n.d(e,"q",(function(){return L})),n.d(e,"o",(function(){return R})),n.d(e,"m",(function(){return U})),n.d(e,"n",(function(){return B})),n.d(e,"y",(function(){return H})),n.d(e,"w",(function(){return G})),n.d(e,"x",(function(){return J}));var t=n(50),o=n(70),i="https://data.covid19india.org",r="".concat(i,"/v4/min"),c=1e5,l={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},d={confirmed:{displayName:"confirmed",color:"#ff073a",format:"long",showDelta:!0,hasPrimary:!0},active:{displayName:"active",color:"#007bff",format:"long",hasPrimary:!0},recovered:{displayName:"recovered",color:"#28a745",format:"long",showDelta:!0,hasPrimary:!0},deceased:{displayName:"deceased",color:"#6c757d",format:"long",showDelta:!0,hasPrimary:!0},other:{displayName:"other",format:"long",color:"#fd7e14",showDelta:!0,tableConfig:{notes:"Migrated cases or non-COVID deaths"},hasPrimary:!0},tested:{displayName:"tested",color:"#4b1eaa",format:"short",showDelta:!0,hideZero:!0,category:"tested"},vaccinated1:{displayName:"vaccinated (at least one dose)",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},vaccinated2:{displayName:"fully vaccinated",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},vaccinated:{displayName:"vaccine doses administered",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},tpr:{displayName:"test positivity ratio",format:"%",color:"#fd7e14",nonLinear:!0,onlyDelta7:!0,hideZero:!0,category:"tested",tableConfig:{notes:"Calculated over last 7 days"},hasPrimary:!0},cfr:{displayName:"case fatality ratio",format:"%",color:"#fd7e14",nonLinear:!0,hasPrimary:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0},hasPrimary:!0},activeRatio:{displayName:"active ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0},hasPrimary:!0},caseGrowth:{displayName:"Case Growth",format:"%",nonLinear:!0,canBeInfinite:!0,tableConfig:{notes:"Percentage growth of cases last week compared to the week a fortnight ago"},hasPrimary:!0,mapConfig:{transformFn:function(a){return a<=0?"\u2264 0%":a<=20?"0 - 20%":a<=50?"20 - 50%":a>50?"> 50%":void 0},colorScale:Object(o.a)(["\u2264 0%","0 - 20%","20 - 50%","> 50%"],["#1a9850","#fee08b","#fc8d59","#d73027"])}},population:{displayName:"population",format:"short",color:"#b6854d",hideZero:!0,mapConfig:{spike:!0}}},u=["confirmed","active","recovered","deceased"],s=[].concat(u),f=[].concat(u,["tested","vaccinated"]),v=Object.keys(d).filter((function(a){var e,n;return!(null===(e=d[a])||void 0===e||null===(n=e.tableConfig)||void 0===n?void 0:n.hide)})),p=[].concat(u),h=[].concat(u,["tested","vaccinated","tpr"]),m=["confirmed"],T=5,g=40,y=300,j=21,b=7,A="UN",D="Unknown",S="2020-04-26",w="2021-02-02",E=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,k="T00:00:00+05:30",N={clamp:!0,precision:1},F={total:"Cumulative",delta:"Daily"},P=[null,90,30],C={CHOROPLETH:0,BUBBLE:1,SPIKE:2},O={STATES:0,DISTRICTS:1},L={COUNTRY:0,STATE:1},M="/mini_maps",R={AP:{geoDataFile:"".concat(M,"/andhrapradesh.json"),mapType:L.STATE},AR:{geoDataFile:"".concat(M,"/arunachalpradesh.json"),mapType:L.STATE},AS:{geoDataFile:"".concat(M,"/assam.json"),mapType:L.STATE},BR:{geoDataFile:"".concat(M,"/bihar.json"),mapType:L.STATE},CT:{geoDataFile:"".concat(M,"/chhattisgarh.json"),mapType:L.STATE},GA:{geoDataFile:"".concat(M,"/goa.json"),mapType:L.STATE},GJ:{geoDataFile:"".concat(M,"/gujarat.json"),mapType:L.STATE},HR:{geoDataFile:"".concat(M,"/haryana.json"),mapType:L.STATE},HP:{geoDataFile:"".concat(M,"/himachalpradesh.json"),mapType:L.STATE},JK:{geoDataFile:"".concat(M,"/jammukashmir.json"),mapType:L.STATE},JH:{geoDataFile:"".concat(M,"/jharkhand.json"),mapType:L.STATE},KA:{geoDataFile:"".concat(M,"/karnataka.json"),mapType:L.STATE},KL:{geoDataFile:"".concat(M,"/kerala.json"),mapType:L.STATE},MP:{geoDataFile:"".concat(M,"/madhyapradesh.json"),mapType:L.STATE},MH:{geoDataFile:"".concat(M,"/maharashtra.json"),mapType:L.STATE},MN:{geoDataFile:"".concat(M,"/manipur.json"),mapType:L.STATE},ML:{geoDataFile:"".concat(M,"/meghalaya.json"),mapType:L.STATE},MZ:{geoDataFile:"".concat(M,"/mizoram.json"),mapType:L.STATE},NL:{geoDataFile:"".concat(M,"/nagaland.json"),mapType:L.STATE},OR:{geoDataFile:"".concat(M,"/odisha.json"),mapType:L.STATE},PB:{geoDataFile:"".concat(M,"/punjab.json"),mapType:L.STATE},RJ:{geoDataFile:"".concat(M,"/rajasthan.json"),mapType:L.STATE},SK:{geoDataFile:"".concat(M,"/sikkim.json"),mapType:L.STATE},TN:{geoDataFile:"".concat(M,"/tamilnadu.json"),mapType:L.STATE},TG:{geoDataFile:"".concat(M,"/telangana.json"),mapType:L.STATE},TR:{geoDataFile:"".concat(M,"/tripura.json"),mapType:L.STATE},UT:{geoDataFile:"".concat(M,"/uttarakhand.json"),mapType:L.STATE},UP:{geoDataFile:"".concat(M,"/uttarpradesh.json"),mapType:L.STATE},WB:{geoDataFile:"".concat(M,"/westbengal.json"),mapType:L.STATE},AN:{geoDataFile:"".concat(M,"/andamannicobarislands.json"),mapType:L.STATE},CH:{geoDataFile:"".concat(M,"/chandigarh.json"),mapType:L.STATE},DN:{geoDataFile:"".concat(M,"/dnh-and-dd.json"),mapType:L.STATE},DL:{geoDataFile:"".concat(M,"/delhi.json"),mapType:L.STATE},LA:{geoDataFile:"".concat(M,"/ladakh.json"),mapType:L.STATE},LD:{geoDataFile:"".concat(M,"/lakshadweep.json"),mapType:L.STATE},PY:{geoDataFile:"".concat(M,"/puducherry.json"),mapType:L.STATE},TT:{geoDataFile:"".concat(M,"/india.json"),mapType:L.COUNTRY}},U=[432,488],B=50,H=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},A,"Unassigned"),K=[],I={};Object.keys(H).map((function(a,e){return I[H[a]]=a,K.push({code:a,name:H[a]}),null}));var G=I,J=K},24:function(a,e,n){"use strict";n.d(e,"j",(function(){return v})),n.d(e,"g",(function(){return h})),n.d(e,"h",(function(){return m})),n.d(e,"e",(function(){return T})),n.d(e,"k",(function(){return g})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return j})),n.d(e,"f",(function(){return A})),n.d(e,"a",(function(){return D})),n.d(e,"n",(function(){return S})),n.d(e,"i",(function(){return w})),n.d(e,"b",(function(){return E})),n.d(e,"l",(function(){return k})),n.d(e,"m",(function(){return N}));var t=n(10),o=n(68),i=n(81),r=n(82),c=n(69),l=n(83),d=n(45),u=n(27),s=null,f=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),v=function(){return!1},p=function(){return Object(d.a)(new Date,"Asia/Kolkata")},h=function(){return Object(o.a)(p(),{representation:"date"})},m=function(){return Object(o.a)(Object(i.a)(p(),1),{representation:"date"})},T=function(a){return n.e(46).then(n.bind(null,89)).then((function(a){s=a[t.l[u.a.language||window.localStorage.i18nextLng]]})),Object(r.a)(new Date(a),new Date,{locale:s})},g=function(a){return a?("string"===typeof a&&a.match(t.j)&&(a+=t.i),Object(d.a)(new Date(a),"Asia/Kolkata")):p()},y=function(a,e){if(!a)return"";"string"===typeof a&&a.match(t.j)&&(a+=t.i);var n=Object(d.a)(new Date(a),"Asia/Kolkata");return Object(c.a)(n,e,{locale:s})},j=function(a){return Object(c.a)(a,"yyyy-MM-dd'T'HH:mm:ss+05:30",{locale:s})},b=function(a){var e=Math.round(Math.abs(a));return e<1e3?f.format(Math.floor(a)):e>=1e3&&e<1e5?f.format(a/1e3)+"K":e>=1e5&&e<1e7?f.format(a/1e5)+"L":e>=1e7&&e<1e10?f.format(a/1e7)+"Cr":e>=1e10&&e<1e14?f.format(a/1e10)+"K Cr":e>=1e14?f.format(a/1e14)+"L Cr":void 0},A=function(a){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0;return isNaN(a)||o&&(null===(e=t.z[o])||void 0===e?void 0:e.hideZero)&&0===a?"-":"long"===n?f.format(Math.abs(a)<1?a:Math.round(a)):"short"===n?b(a):"%"===n?"".concat(f.format(a),"%"):""===n?f.format(a):void 0},D=function(a){return"string"!==typeof a?"":a.charAt(0).toUpperCase()+a.slice(1)},S=function(a){return a.replace(/\w\S*/g,(function(a){return a.charAt(0).toUpperCase()+a.substr(1).toLowerCase()}))},w=function(a,e,n){var o,i,r,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=c.expiredDate,u=void 0===d?null:d,s=c.normalizedByPopulationPer,f=void 0===s?null:s,v=c.movingAverage,p=void 0!==v&&v,h=c.canBeNaN,m=void 0!==h&&h;if(null!==u&&("tested"===(null===(o=t.z[n])||void 0===o?void 0:o.category)&&(!(null===a||void 0===a||null===(i=a.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.date)||Object(l.a)(g(u),g(a.meta.tested.date))>t.C)))return 0;var T,y,j=1;if("delta"===e&&p&&(e="delta7",j*=1/7),"million"===f)j*=1e6/(null===a||void 0===a||null===(T=a.meta)||void 0===T?void 0:T.population);else if("lakh"===f){var b;j*=1e5/(null===a||void 0===a||null===(b=a.meta)||void 0===b?void 0:b.population)}else if("hundred"===f){var A;j*=100/(null===a||void 0===a||null===(A=a.meta)||void 0===A?void 0:A.population)}if("active"===n||"activeRatio"===n){var D,S,w,E,k=(null===a||void 0===a||null===(D=a[e])||void 0===D?void 0:D.confirmed)||0,N=(null===a||void 0===a||null===(S=a[e])||void 0===S?void 0:S.deceased)||0,F=(null===a||void 0===a||null===(w=a[e])||void 0===w?void 0:w.recovered)||0,P=(null===a||void 0===a||null===(E=a[e])||void 0===E?void 0:E.other)||0,C=k-N-F-P;"active"===n?y=C:"activeRatio"===n&&(y=C/k*100)}else if("vaccinated"===n){var O,L,M=(null===a||void 0===a||null===(O=a[e])||void 0===O?void 0:O.vaccinated1)||0,R=(null===a||void 0===a||null===(L=a[e])||void 0===L?void 0:L.vaccinated2)||0;y=M+R}else if("tpr"===n){var U,B,H=(null===a||void 0===a||null===(U=a[e])||void 0===U?void 0:U.confirmed)||0,K=(null===a||void 0===a||null===(B=a[e])||void 0===B?void 0:B.tested)||0;y=H/K*100}else if("cfr"===n){var I,G,J=(null===a||void 0===a||null===(I=a[e])||void 0===I?void 0:I.deceased)||0,W=(null===a||void 0===a||null===(G=a[e])||void 0===G?void 0:G.confirmed)||0;y=J/W*100}else if("recoveryRatio"===n){var x,Z,z=(null===a||void 0===a||null===(x=a[e])||void 0===x?void 0:x.recovered)||0,Y=(null===a||void 0===a||null===(Z=a[e])||void 0===Z?void 0:Z.confirmed)||0;y=z/Y*100}else if("caseGrowth"===n){var q,_,V=(null===a||void 0===a||null===(q=a.delta7)||void 0===q?void 0:q.confirmed)||0,$=(null===a||void 0===a||null===(_=a.delta21_14)||void 0===_?void 0:_.confirmed)||0;y="total"===e?(V-$)/$*100:0}else if("population"===n){var Q;y="total"===e?null===a||void 0===a||null===(Q=a.meta)||void 0===Q?void 0:Q.population:0}else{var X;y=null===a||void 0===a||null===(X=a[e])||void 0===X?void 0:X[n]}var aa=t.z[n],ea=(j=(null===aa||void 0===aa?void 0:aa.nonLinear)?1:j)*y;return m||(ea=!isNaN(ea)&&ea||0),(null===aa||void 0===aa?void 0:aa.canBeInfinite)||(ea=(isNaN(ea)||isFinite(ea))&&ea||0),ea},E=function(a){return fetch(a).then((function(a){return a.json()}))};function k(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(t,o){a().then(t).catch((function(i){setTimeout((function(){1!==e?k(a,e-1,n).then(t,o):o(i)}),n)}))}))}var N=function(a){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return"M".concat(-e/2,",0L0,").concat(-a,"L").concat(e/2,",0")}},80:function(a,e,n){"use strict";n.r(e);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(a,e){navigator.serviceWorker.register(a).then((function(a){a.onupdatefound=function(){var n=a.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(a)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(a)))})}})).catch((function(a){console.error("Error during service worker registration:",a)}))}var i=n(10),r=n(24),c=n(27),l=n(62),d=n(63),u=n(88);c.a.use(d.a).use(l.a).use(u.e).init({debug:Object(r.j)()&&false,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"".concat(i.a,"/locales/locale_{{lng}}.json"),addPath:"http://localhost:9999/"},saveMissing:Object(r.j)()&&false,interpolation:{escapeValue:!1}});c.a;var s=n(2),f=n(55),v=n(48),p=n(19),h=Object(s.lazy)((function(){return Object(r.l)((function(){return Promise.all([n.e(12),n.e(22)]).then(n.bind(null,284))}))})),m=document.getElementById("root"),T=function(){return Object(f.render)(Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(v.a,{children:Object(p.jsx)(s.StrictMode,{children:Object(p.jsx)(h,{})})})}),m)};window.requestIdleCallback&&window.IntersectionObserver?T():function(a,e){var n=document.createElement("script");n.src=a,n.onload=function(){e()},n.onerror=function(){e(new Error("Failed to load script "+a))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",T),function(a){if("serviceWorker"in navigator){if(new URL("/incovid19/incovid19-react",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var e="".concat("/incovid19/incovid19-react","/service-worker.js");t?(!function(a,e){fetch(a,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(a){a.unregister().then((function(){window.location.reload()}))})):o(a,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,a),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(e,a)}),3e3)}))}}()}},[[80,10,11]]]);
//# sourceMappingURL=main.914fe66f.chunk.js.map