(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[46],{291:function(t,e,i){"use strict";i.r(e);var a=i(47),s=i(10),c=i(24),d=i(91),l=i.n(d),n=i(92),o=i.n(n),r=i(2),b=i(98),j=i(19),u=function(t){var e=t.statistic,i=t.data,a=t.getTableStatistic,d=t.noDistrictData,n=a(i,e,"total"),o=a(i,e,"delta"),r=Object(b.useSpring)({total:n,delta:o,config:s.v}),u=s.z[e];return Object(j.jsxs)("div",{className:"cell statistic",children:[(null===u||void 0===u?void 0:u.showDelta)&&Object(j.jsx)(b.animated.div,{className:l()("delta","is-".concat(e)),title:o,children:r.delta.to((function(t){return d&&u.hasPrimary?"":t>0?"\u2191"+Object(c.f)(t,u.format):t<0?"\u2193"+Object(c.f)(Math.abs(t),u.format):""}))}),Object(j.jsx)(b.animated.div,{className:"total",title:n,children:r.total.to((function(t){return d&&u.hasPrimary?"-":Object(c.f)(t,u.format,e)}))})]})},m=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.noDistrictData,null===(l=e.data)||void 0===l?void 0:l.noDistrictData)&&!!o()(t.getTableStatistic,e.getTableStatistic)))},h=Object(r.memo)(u,m),g=i(101),v=i(95),O=i(107),N=i(294);function x(t){var e,i=t.stateCode,a=t.districtName,s=t.data,c=t.tableStatistics,d=t.regionHighlighted,n=t.setRegionHighlighted,o=(t.expandTable,t.getTableStatistic),b=t.noDistrictData,u=Object(N.a)().t,m=Object(r.useCallback)((function(){d.districtName!==a&&n(Object(O.a)(d,(function(t){t.stateCode=i,t.districtName=a})))}),[d,a,n,i]);return Object(j.jsxs)("div",{className:l()("row","district",{"is-highlighted":(null===d||void 0===d?void 0:d.districtName)===a}),onMouseEnter:m,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name",children:u(a)}),(null===s||void 0===s||null===(e=s.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(g.a,{message:s.meta.notes,children:Object(j.jsx)(v.m,{size:16})})]}),c.map((function(t){return Object(j.jsx)(h,{statistic:t,data:s,getTableStatistic:o,noDistrictData:b},t)}))]})}var C=function(t,e){var i,a,s,c,d,l;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!!o()(null===(d=t.data)||void 0===d?void 0:d.last_updated,null===(l=e.data)||void 0===l?void 0:l.last_updated)&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&(o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName)))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.noDistrictData,e.noDistrictData)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics)))))))},f=Object(r.memo)(x,C),p=i(175),D=i(5),S=i(249);function H(t){var e,i,d=this,n=t.data,o=t.tableStatistics,b=t.stateCode,u=t.districtName,m=t.regionHighlighted,x=t.setRegionHighlighted,C=t.expandTable,H=t.getTableStatistic,T=t.tableWidth,k=t.noDistrictData,w=Object(r.useState)(!1),y=Object(a.a)(w,2),A=y[0],z=y[1],R=Object(S.a)("districtSortData",{sortColumn:"confirmed",isAscending:!1,delta:!1}),_=Object(a.a)(R,2),E=_[0],M=_[1],W=Object(D.g)(),F=Object(N.a)().t,I=Object(r.useRef)(),J=Object(r.useCallback)((function(t){E.sortColumn!==t?M(Object(O.a)(E,(function(e){"districtName"!==E.sortColumn&&"districtName"!==t||(e.isAscending=!E.isAscending),e.sortColumn=t}))):M(Object(O.a)(E,(function(t){t.isAscending=!E.isAscending})))}),[E,M]),P=Object(r.useCallback)((function(t,e){if("districtName"!==E.sortColumn){var i=s.z[E.sortColumn],a=E.delta&&(null===i||void 0===i?void 0:i.showDelta)?"delta":"total",c=H(n.districts[t],E.sortColumn,a),d=H(n.districts[e],E.sortColumn,a);return E.isAscending?c-d:d-c}return E.isAscending?t.localeCompare(e):e.localeCompare(t)}),[E,n,H]),U=Object(r.useCallback)((function(){b?m.stateCode!==b&&x(Object(O.a)(m,(function(t){t.stateCode=b,t.districtName=null}))):u&&(m.districtName===u&&m.stateCode===n.stateCode||x(Object(O.a)(m,(function(t){t.stateCode=n.stateCode,t.districtName=u}))))}),[n.stateCode,u,m,x,b]),V=Object(r.useCallback)((function(){n.districts&&z(!A)}),[A,n]),q=F(u);u===s.H&&(q="".concat(F(s.H)," [").concat(F(s.y[n.stateCode]),"]"));var B=Object(r.useCallback)((function(t){W.push("state/".concat(t))}),[W]),G=Object(r.useCallback)((function(){z(!1),I.current.scrollIntoView({block:"start"})}),[]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:l()("row",{"is-total":"TT"===b},{"is-highlighted":b&&(null===m||void 0===m?void 0:m.stateCode)===b||u&&(null===m||void 0===m?void 0:m.districtName)===u&&(null===m||void 0===m?void 0:m.stateCode)===n.stateCode}),onMouseEnter:U,onClick:V,ref:I,children:[Object(j.jsxs)("div",{className:"cell",children:[Object(j.jsx)("div",{className:"state-name fadeInUp",children:F(s.y[b])||q}),(null===n||void 0===n||null===(e=n.meta)||void 0===e?void 0:e.notes)&&Object(j.jsx)(g.a,{message:n.meta.notes,children:Object(j.jsx)(v.m,{size:16})})]}),o.map((function(t){return Object(j.jsx)(h,{noDistrictData:!b&&u!==s.H&&k,data:n,statistic:t,getTableStatistic:H},t)}))]}),A&&Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"state-meta",style:{width:T},children:[Object(j.jsxs)("div",{className:"state-meta-top",children:[Object(j.jsxs)("div",{className:"state-page",onClick:B.bind(this,b),children:[Object(j.jsx)(v.k,{}),Object(j.jsx)("span",{children:F("See more details")})]}),(null===n||void 0===n||null===(i=n.meta)||void 0===i?void 0:i.last_updated)&&Object(j.jsxs)("p",{className:"last-updated",children:[Object(j.jsx)(v.g,{}),Object(c.a)("".concat(Object(c.e)(n.meta.last_updated)," ").concat(F("ago")))]})]}),n.districts&&s.H in n.districts&&Object(j.jsx)("div",{className:"state-meta-bottom",children:Object(j.jsxs)("div",{className:l()("disclaimer"),children:[Object(j.jsx)(v.a,{}),Object(j.jsx)("span",{children:F("District-wise data not available in state bulletin")})]})})]}),Object(j.jsxs)("div",{className:l()("row","heading"),children:[Object(j.jsxs)("div",{className:"cell heading",onClick:J.bind(this,"districtName"),children:[Object(j.jsx)("div",{className:"district-name",children:F("District")}),"districtName"===E.sortColumn&&Object(j.jsx)("div",{className:"sort-icon",children:E.isAscending?Object(j.jsx)(v.v,{size:12}):Object(j.jsx)(v.w,{size:12})})]}),o.map((function(t){return Object(j.jsx)(p.a,{statistic:t,sortData:E,setSortData:M,handleSort:J.bind(d,t)},t)}))]})]}),A&&Object.keys(n.districts||{}).sort((function(t,e){return P(t,e)})).map((function(t){return Object(j.jsx)(f,{data:n.districts[t],noDistrictData:t!==s.H&&k,tableStatistics:o,districtName:t,regionHighlighted:m,setRegionHighlighted:x,stateCode:b,expandTable:C,getTableStatistic:H},t)})),A&&Object(j.jsx)("div",{className:"spacer-row",style:{width:T},children:Object(j.jsxs)("div",{className:"spacer",children:[Object(j.jsx)("p",{children:"End of ".concat(F(s.y[b]),"'s districts")}),Object(j.jsx)("div",{className:"fold",onClick:G,children:Object(j.jsx)(v.j,{})})]})})]})}var T=function(t,e){var i,a,s,c;return!!o()(null===(i=t.data)||void 0===i?void 0:i.total,null===(a=e.data)||void 0===a?void 0:a.total)&&(!!o()(null===(s=t.data)||void 0===s?void 0:s.delta,null===(c=e.data)||void 0===c?void 0:c.delta)&&(!(!o()(t.regionHighlighted.stateCode,e.regionHighlighted.stateCode)&&o()(t.regionHighlighted.stateCode,t.stateCode)||o()(e.regionHighlighted.stateCode,e.stateCode))&&(!(!o()(t.regionHighlighted.districtName,e.regionHighlighted.districtName)&&o()(t.regionHighlighted.districtName,t.districtName)||o()(e.regionHighlighted.districtName,e.districtName))&&(!!o()(t.expandTable,e.expandTable)&&(!!o()(t.noDistrictData,e.noDistrictData)&&(!!o()(t.tableWidth,e.tableWidth)&&(!!o()(t.getTableStatistic,e.getTableStatistic)&&!!o()(t.tableStatistics,e.tableStatistics))))))))};e.default=Object(r.memo)(H,T)}}]);
//# sourceMappingURL=46.bea76e2d.chunk.js.map