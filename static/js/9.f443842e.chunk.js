(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[9],{199:function(t,e,r){"use strict";r.r(e);var n=r(10),c=r(24),a=r(91),o=r.n(a),i=r(92),u=r.n(i),f=r(2),s=r(293),l=r(97),j=r(19);function O(t){var e=t.statistic,r=t.total,a=t.delta,o=Object(s.a)().t,i=Object(l.useSpring)({total:r,delta:a,config:n.v}),u=n.z[e];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("h5",{children:o(Object(c.a)(u.displayName))}),Object(j.jsx)(l.animated.h4,{children:a>0?i.delta.to((function(t){return"+ ".concat(Object(c.f)(t,"short"!==u.format?u.format:"long",e))})):i.delta.to((function(t){return"".concat(Object(c.f)(t,"short"!==u.format?u.format:"long",e))}))}),Object(j.jsx)(l.animated.h1,{children:i.total.to((function(t){return Object(c.f)(t,"short"!==u.format?u.format:"long",e)}))})]})}var b=Object(f.memo)(O);function d(t){var e=t.data,r=Object(f.useMemo)((function(){var t=[];return n.k.map((function(e,r){return t.push({animationDelay:"".concat(750+250*r,"ms"),width:"calc(".concat(100/n.k.length,"%)")}),null})),t}),[]);return Object(j.jsx)("div",{className:"Level",children:n.k.map((function(t,n){return Object(j.jsx)(l.animated.div,{className:o()("level-item","is-".concat(t),"fadeInUp"),style:r[n],children:Object(j.jsx)(b,{statistic:t,total:Object(c.i)(e,"total",t),delta:Object(c.i)(e,"delta",t)})},n)}))})}var h=function(t,e){return!!u()(t.data,e.data)};e.default=Object(f.memo)(d,h)},92:function(t,e,r){"use strict";t.exports=function t(e,r){if(e===r)return!0;if(e&&r&&"object"==typeof e&&"object"==typeof r){if(e.constructor!==r.constructor)return!1;var n,c,a;if(Array.isArray(e)){if((n=e.length)!=r.length)return!1;for(c=n;0!==c--;)if(!t(e[c],r[c]))return!1;return!0}if(e.constructor===RegExp)return e.source===r.source&&e.flags===r.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===r.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===r.toString();if((n=(a=Object.keys(e)).length)!==Object.keys(r).length)return!1;for(c=n;0!==c--;)if(!Object.prototype.hasOwnProperty.call(r,a[c]))return!1;for(c=n;0!==c--;){var o=a[c];if(!t(e[o],r[o]))return!1}return!0}return e!==e&&r!==r}}}]);
//# sourceMappingURL=9.f443842e.chunk.js.map