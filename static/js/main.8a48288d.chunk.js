(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[11],{10:function(e,a,n){"use strict";n.d(a,"a",(function(){return i})),n.d(a,"e",(function(){return r})),n.d(a,"b",(function(){return c})),n.d(a,"l",(function(){return l})),n.d(a,"z",(function(){return d})),n.d(a,"u",(function(){return u})),n.d(a,"k",(function(){return s})),n.d(a,"A",(function(){return f})),n.d(a,"B",(function(){return v})),n.d(a,"p",(function(){return p})),n.d(a,"F",(function(){return h})),n.d(a,"c",(function(){return m})),n.d(a,"I",(function(){return T})),n.d(a,"g",(function(){return g})),n.d(a,"d",(function(){return y})),n.d(a,"t",(function(){return j})),n.d(a,"C",(function(){return A})),n.d(a,"G",(function(){return b})),n.d(a,"H",(function(){return D})),n.d(a,"f",(function(){return S})),n.d(a,"h",(function(){return w})),n.d(a,"j",(function(){return E})),n.d(a,"i",(function(){return O})),n.d(a,"v",(function(){return k})),n.d(a,"D",(function(){return N})),n.d(a,"E",(function(){return P})),n.d(a,"s",(function(){return F})),n.d(a,"r",(function(){return C})),n.d(a,"q",(function(){return L})),n.d(a,"o",(function(){return M})),n.d(a,"m",(function(){return U})),n.d(a,"n",(function(){return H})),n.d(a,"y",(function(){return K})),n.d(a,"w",(function(){return I})),n.d(a,"x",(function(){return _}));var t=n(50),o=n(70),i="https://data.incovid19.org",r="".concat(Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_DATA_API_ROOT,"/v4/min"),c=1e5,l={english:"en-US",hindi:"hi",telugu:"te",kannada:"en-US",gujarati:"gu",marathi:"en-US",tamil:"ta",bengali:"bn",punjabi:"en-US",malayalam:"en-US",odiya:"en-US"},d={confirmed:{displayName:"confirmed",color:"#ff073a",format:"long",showDelta:!0,hasPrimary:!0},active:{displayName:"active",color:"#007bff",format:"long",hasPrimary:!0,showDelta:!0},recovered:{displayName:"recovered",color:"#28a745",format:"long",showDelta:!0,hasPrimary:!0},deceased:{displayName:"deceased",color:"#6c757d",format:"long",showDelta:!0,hasPrimary:!0},vaccinated:{displayName:"vaccine doses administered",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},vaccinated1:{displayName:"vaccinated (at least one dose)",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},vaccinated2:{displayName:"fully vaccinated",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},vaccinated3:{displayName:"precaution dose",color:"#fb5581",format:"short",showDelta:!0,hideZero:!0,category:"vaccinated"},other:{displayName:"other",format:"long",color:"#fd7e14",showDelta:!0,tableConfig:{notes:"Migrated cases or non-COVID deaths"},hasPrimary:!0},tested:{displayName:"tested",color:"#4b1eaa",format:"short",showDelta:!0,hideZero:!0,category:"tested"},tpr:{displayName:"test positivity ratio",format:"%",color:"#fd7e14",nonLinear:!0,onlyDelta7:!0,hideZero:!0,category:"tested",tableConfig:{notes:"Calculated over last 7 days"},hasPrimary:!0},cfr:{displayName:"case fatality ratio",format:"%",color:"#fd7e14",nonLinear:!0,hasPrimary:!0},recoveryRatio:{displayName:"recovery ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0},hasPrimary:!0},activeRatio:{displayName:"active ratio",format:"%",nonLinear:!0,tableConfig:{hide:!0},hasPrimary:!0},caseGrowth:{displayName:"Case Growth",format:"%",nonLinear:!0,canBeInfinite:!0,tableConfig:{notes:"Percentage growth of cases last week compared to the week a fortnight ago"},hasPrimary:!0,mapConfig:{transformFn:function(e){return e<=0?"\u2264 0%":e<=20?"0 - 20%":e<=50?"20 - 50%":e>50?"> 50%":void 0},colorScale:Object(o.a)(["\u2264 0%","0 - 20%","20 - 50%","> 50%"],["#1a9850","#fee08b","#fc8d59","#d73027"])}},population:{displayName:"population",format:"short",color:"#b6854d",hideZero:!0,mapConfig:{spike:!0}}},u=["confirmed","active","recovered","deceased"],s=[].concat(u),f=[].concat(u,["vaccinated","vaccinated1","vaccinated2"]),v=Object.keys(d).filter((function(e){var a,n;return!(null===(a=d[e])||void 0===a||null===(n=a.tableConfig)||void 0===n?void 0:n.hide)})),p=[].concat(u),h=[].concat(u,["vaccinated","tested","tpr"]),m=["confirmed"],T=5,g=40,y=300,j=21,A=7,b="UN",D="Unknown",S="2020-04-26",w="2021-02-02",E=/^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])$/g,O="T00:00:00+05:30",k={clamp:!0,precision:1},N={total:"Cumulative",delta:"Daily"},P=[null,90,30],F={CHOROPLETH:0,BUBBLE:1,SPIKE:2},C={STATES:0,DISTRICTS:1},L={COUNTRY:0,STATE:1},R="/mini_maps",M={AP:{geoDataFile:"".concat(R,"/andhrapradesh.json"),mapType:L.STATE},AR:{geoDataFile:"".concat(R,"/arunachalpradesh.json"),mapType:L.STATE},AS:{geoDataFile:"".concat(R,"/assam.json"),mapType:L.STATE},BR:{geoDataFile:"".concat(R,"/bihar.json"),mapType:L.STATE},CT:{geoDataFile:"".concat(R,"/chhattisgarh.json"),mapType:L.STATE},GA:{geoDataFile:"".concat(R,"/goa.json"),mapType:L.STATE},GJ:{geoDataFile:"".concat(R,"/gujarat.json"),mapType:L.STATE},HR:{geoDataFile:"".concat(R,"/haryana.json"),mapType:L.STATE},HP:{geoDataFile:"".concat(R,"/himachalpradesh.json"),mapType:L.STATE},JK:{geoDataFile:"".concat(R,"/jammukashmir.json"),mapType:L.STATE},JH:{geoDataFile:"".concat(R,"/jharkhand.json"),mapType:L.STATE},KA:{geoDataFile:"".concat(R,"/karnataka.json"),mapType:L.STATE},KL:{geoDataFile:"".concat(R,"/kerala.json"),mapType:L.STATE},MP:{geoDataFile:"".concat(R,"/madhyapradesh.json"),mapType:L.STATE},MH:{geoDataFile:"".concat(R,"/maharashtra.json"),mapType:L.STATE},MN:{geoDataFile:"".concat(R,"/manipur.json"),mapType:L.STATE},ML:{geoDataFile:"".concat(R,"/meghalaya.json"),mapType:L.STATE},MZ:{geoDataFile:"".concat(R,"/mizoram.json"),mapType:L.STATE},NL:{geoDataFile:"".concat(R,"/nagaland.json"),mapType:L.STATE},OR:{geoDataFile:"".concat(R,"/odisha.json"),mapType:L.STATE},PB:{geoDataFile:"".concat(R,"/punjab.json"),mapType:L.STATE},RJ:{geoDataFile:"".concat(R,"/rajasthan.json"),mapType:L.STATE},SK:{geoDataFile:"".concat(R,"/sikkim.json"),mapType:L.STATE},TN:{geoDataFile:"".concat(R,"/tamilnadu.json"),mapType:L.STATE},TG:{geoDataFile:"".concat(R,"/telangana.json"),mapType:L.STATE},TR:{geoDataFile:"".concat(R,"/tripura.json"),mapType:L.STATE},UT:{geoDataFile:"".concat(R,"/uttarakhand.json"),mapType:L.STATE},UP:{geoDataFile:"".concat(R,"/uttarpradesh.json"),mapType:L.STATE},WB:{geoDataFile:"".concat(R,"/westbengal.json"),mapType:L.STATE},AN:{geoDataFile:"".concat(R,"/andamannicobarislands.json"),mapType:L.STATE},CH:{geoDataFile:"".concat(R,"/chandigarh.json"),mapType:L.STATE},DN:{geoDataFile:"".concat(R,"/dnh-and-dd.json"),mapType:L.STATE},DL:{geoDataFile:"".concat(R,"/delhi.json"),mapType:L.STATE},LA:{geoDataFile:"".concat(R,"/ladakh.json"),mapType:L.STATE},LD:{geoDataFile:"".concat(R,"/lakshadweep.json"),mapType:L.STATE},PY:{geoDataFile:"".concat(R,"/puducherry.json"),mapType:L.STATE},TT:{geoDataFile:"".concat(R,"/india.json"),mapType:L.COUNTRY}},U=[432,488],H=50,K=Object(t.a)({AP:"Andhra Pradesh",AR:"Arunachal Pradesh",AS:"Assam",BR:"Bihar",CT:"Chhattisgarh",GA:"Goa",GJ:"Gujarat",HR:"Haryana",HP:"Himachal Pradesh",JH:"Jharkhand",KA:"Karnataka",KL:"Kerala",MP:"Madhya Pradesh",MH:"Maharashtra",MN:"Manipur",ML:"Meghalaya",MZ:"Mizoram",NL:"Nagaland",OR:"Odisha",PB:"Punjab",RJ:"Rajasthan",SK:"Sikkim",TN:"Tamil Nadu",TG:"Telangana",TR:"Tripura",UT:"Uttarakhand",UP:"Uttar Pradesh",WB:"West Bengal",AN:"Andaman and Nicobar Islands",CH:"Chandigarh",DN:"Dadra and Nagar Haveli and Daman and Diu",DL:"Delhi",JK:"Jammu and Kashmir",LA:"Ladakh",LD:"Lakshadweep",PY:"Puducherry",TT:"India"},b,"Unassigned"),x=[],B={};Object.keys(K).map((function(e,a){return B[K[e]]=e,x.push({code:e,name:K[e]}),null}));var I=B,_=x},24:function(e,a,n){"use strict";n.d(a,"j",(function(){return v})),n.d(a,"g",(function(){return h})),n.d(a,"h",(function(){return m})),n.d(a,"e",(function(){return T})),n.d(a,"k",(function(){return g})),n.d(a,"c",(function(){return y})),n.d(a,"d",(function(){return j})),n.d(a,"f",(function(){return b})),n.d(a,"a",(function(){return D})),n.d(a,"n",(function(){return S})),n.d(a,"i",(function(){return w})),n.d(a,"b",(function(){return E})),n.d(a,"l",(function(){return O})),n.d(a,"m",(function(){return k}));var t=n(10),o=n(68),i=n(81),r=n(82),c=n(69),l=n(83),d=n(45),u=n(27),s=null,f=new Intl.NumberFormat("en-IN",{maximumFractionDigits:1}),v=function(){return!1},p=function(){return Object(d.a)(new Date,"Asia/Kolkata")},h=function(){return Object(o.a)(p(),{representation:"date"})},m=function(){return Object(o.a)(Object(i.a)(p(),1),{representation:"date"})},T=function(e){return e&&"string"===typeof e&&-1!=(e=e.trim()).indexOf(" ")&&-1!=(e=e.replace(" ","T")).indexOf(".")&&(e=e.slice(0,e.indexOf(".")),e+="+05:30"),n.e(48).then(n.bind(null,89)).then((function(e){s=e[t.l[u.a.language||window.localStorage.i18nextLng]]})),Object(r.a)(new Date(e),new Date,{locale:s})},g=function(e){return e?("string"===typeof e&&-1!=(e=e.trim()).indexOf(" ")&&-1!=(e=e.replace(" ","T")).indexOf(".")&&(e=e.slice(0,e.indexOf(".")),e+="+05:30"),"string"===typeof e&&e.match(t.j)&&(e+=t.i),Object(d.a)(new Date(e),"Asia/Kolkata")):p()},y=function(e,a){if(!e)return"";"string"===typeof e&&-1!=(e=e.trim()).indexOf(" ")&&-1!=(e=e.replace(" ","T")).indexOf(".")&&(e=e.slice(0,e.indexOf(".")),e+="+05:30"),"string"===typeof e&&e.match(t.j)&&(e+=t.i);var n=Object(d.a)(new Date(e),"Asia/Kolkata");return Object(c.a)(n,a,{locale:s})},j=function(e){return Object(c.a)(e,"yyyy-MM-dd'T'HH:mm:ss+05:30",{locale:s})},A=function(e){var a=Math.round(Math.abs(e));return a<1e3?f.format(Math.floor(e)):a>=1e3&&a<1e5?f.format(e/1e3)+"K":a>=1e5&&a<1e7?f.format(e/1e5)+"L":a>=1e7&&a<1e10?f.format(e/1e7)+"Cr":a>=1e10&&a<1e14?f.format(e/1e10)+"K Cr":a>=1e14?f.format(e/1e14)+"L Cr":void 0},b=function(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2?arguments[2]:void 0;return isNaN(e)||o&&(null===(a=t.z[o])||void 0===a?void 0:a.hideZero)&&0===e?"-":"long"===n?f.format(Math.abs(e)<1?e:Math.round(e)):"short"===n?A(e):"%"===n?"".concat(f.format(e),"%"):""===n?f.format(e):void 0},D=function(e){return"string"!==typeof e?"":e.charAt(0).toUpperCase()+e.slice(1)},S=function(e){return e.replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))},w=function(e,a,n){var o,i,r,c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},d=c.expiredDate,u=void 0===d?null:d,s=c.normalizedByPopulationPer,f=void 0===s?null:s,v=c.movingAverage,p=void 0!==v&&v,h=c.canBeNaN,m=void 0!==h&&h;if(null!==u&&("tested"===(null===(o=t.z[n])||void 0===o?void 0:o.category)&&(!(null===e||void 0===e||null===(i=e.meta)||void 0===i||null===(r=i.tested)||void 0===r?void 0:r.date)||Object(l.a)(g(u),g(e.meta.tested.date))>t.C)))return 0;var T,y,j=1;if("delta"===a&&p&&(a="delta7",j*=1/7),"million"===f)j*=1e6/(null===e||void 0===e||null===(T=e.meta)||void 0===T?void 0:T.population);else if("lakh"===f){var A;j*=1e5/(null===e||void 0===e||null===(A=e.meta)||void 0===A?void 0:A.population)}else if("hundred"===f){var b;j*=100/(null===e||void 0===e||null===(b=e.meta)||void 0===b?void 0:b.population)}if("active"===n||"activeRatio"===n){var D,S,w,E,O=(null===e||void 0===e||null===(D=e[a])||void 0===D?void 0:D.confirmed)||0,k=(null===e||void 0===e||null===(S=e[a])||void 0===S?void 0:S.deceased)||0,N=(null===e||void 0===e||null===(w=e[a])||void 0===w?void 0:w.recovered)||0,P=(null===e||void 0===e||null===(E=e[a])||void 0===E?void 0:E.other)||0,F=O-k-N-P;0===N?y=0:"active"===n?y=F:"activeRatio"===n&&(y=F/O*100)}else if("vaccinated"===n){var C,L,R,M=(null===e||void 0===e||null===(C=e[a])||void 0===C?void 0:C.vaccinated1)||0,U=(null===e||void 0===e||null===(L=e[a])||void 0===L?void 0:L.vaccinated2)||0,H=(null===e||void 0===e||null===(R=e[a])||void 0===R?void 0:R.vaccinated3)||0;y=M+U+H}else if("tpr"===n){var K,x,B=(null===e||void 0===e||null===(K=e[a])||void 0===K?void 0:K.confirmed)||0,I=(null===e||void 0===e||null===(x=e[a])||void 0===x?void 0:x.tested)||0;y=B/I*100}else if("cfr"===n){var _,W,G=(null===e||void 0===e||null===(_=e[a])||void 0===_?void 0:_.deceased)||0,J=(null===e||void 0===e||null===(W=e[a])||void 0===W?void 0:W.confirmed)||0;y=G/J*100}else if("recoveryRatio"===n){var Z,z,Y=(null===e||void 0===e||null===(Z=e[a])||void 0===Z?void 0:Z.recovered)||0,q=(null===e||void 0===e||null===(z=e[a])||void 0===z?void 0:z.confirmed)||0;y=Y/q*100}else if("caseGrowth"===n){var V,$,Q=(null===e||void 0===e||null===(V=e.delta7)||void 0===V?void 0:V.confirmed)||0,X=(null===e||void 0===e||null===($=e.delta21_14)||void 0===$?void 0:$.confirmed)||0;y="total"===a?(Q-X)/X*100:0}else if("population"===n){var ee;y="total"===a?null===e||void 0===e||null===(ee=e.meta)||void 0===ee?void 0:ee.population:0}else{var ae;y=null===e||void 0===e||null===(ae=e[a])||void 0===ae?void 0:ae[n]}var ne=t.z[n],te=(j=(null===ne||void 0===ne?void 0:ne.nonLinear)?1:j)*y;return m||(te=!isNaN(te)&&te||0),(null===ne||void 0===ne?void 0:ne.canBeInfinite)||(te=(isNaN(te)||isFinite(te))&&te||0),te},E=function(e){return fetch(e).then((function(e){return e.json()}))};function O(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1e3;return new Promise((function(t,o){e().then(t).catch((function(i){setTimeout((function(){1!==a?O(e,a-1,n).then(t,o):o(i)}),n)}))}))}var k=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return"M".concat(-a/2,",0L0,").concat(-e,"L").concat(a/2,",0")}},80:function(e,a,n){"use strict";n.r(a);var t=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(e,a){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var i=n(10),r=n(24),c=n(27),l=n(62),d=n(63),u=n(88);c.a.use(d.a).use(l.a).use(u.e).init({debug:Object(r.j)()&&false,keySeparator:!1,returnEmptyString:!1,fallbackLng:"english",load:"languageOnly",backend:{loadPath:"".concat(i.a,"/locales/locale_{{lng}}.json"),addPath:"http://localhost:9999/"},saveMissing:Object(r.j)()&&false,interpolation:{escapeValue:!1}});c.a;var s=n(2),f=n(55),v=n(48),p=n(19),h=Object(s.lazy)((function(){return Object(r.l)((function(){return Promise.all([n.e(14),n.e(23)]).then(n.bind(null,292))}))})),m=document.getElementById("root"),T=function(){return Object(f.render)(Object(p.jsx)(s.Suspense,{fallback:Object(p.jsx)("div",{}),children:Object(p.jsx)(v.a,{children:Object(p.jsx)(s.StrictMode,{children:Object(p.jsx)(h,{})})})}),m)};window.requestIdleCallback&&window.IntersectionObserver?T():function(e,a){var n=document.createElement("script");n.src=e,n.onload=function(){a()},n.onerror=function(){a(new Error("Failed to load script "+e))},document.head.appendChild(n)}("https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=requestIdleCallback%2CIntersectionObserver",T),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){return setTimeout((function(){var a="".concat("","/service-worker.js");t?(!function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var t=n.headers.get("content-type");404===n.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):o(e,a)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(a,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):o(a,e)}),3e3)}))}}()}},[[80,12,13]]]);
//# sourceMappingURL=main.8a48288d.chunk.js.map