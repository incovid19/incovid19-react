(this.webpackJsonpincovid19=this.webpackJsonpincovid19||[]).push([[3],{121:function(e,t,n){},122:function(e,t,n){},131:function(e,t,n){"use strict";function r(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect();return{width:n.width/1,height:n.height/1,top:n.top/1,right:n.right/1,bottom:n.bottom/1,left:n.left/1,x:n.left/1,y:n.top/1}}function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function i(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function a(e){return e instanceof o(e).Element||e instanceof Element}function s(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function c(e){return"undefined"!==typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}function u(e){return e?(e.nodeName||"").toLowerCase():null}function p(e){return((a(e)?e.ownerDocument:e.document)||window.document).documentElement}function f(e){return r(p(e)).left+i(e).scrollLeft}function d(e){return o(e).getComputedStyle(e)}function l(e){var t=d(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function m(e,t,n){void 0===n&&(n=!1);var a=s(t),c=s(t)&&function(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}(t),d=p(t),m=r(e,c),v={scrollLeft:0,scrollTop:0},h={x:0,y:0};return(a||!a&&!n)&&(("body"!==u(t)||l(d))&&(v=function(e){return e!==o(e)&&s(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:i(e);var t}(t)),s(t)?((h=r(t,!0)).x+=t.clientLeft,h.y+=t.clientTop):d&&(h.x=f(d))),{x:m.left+v.scrollLeft-h.x,y:m.top+v.scrollTop-h.y,width:m.width,height:m.height}}function v(e){var t=r(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function h(e){return"html"===u(e)?e:e.assignedSlot||e.parentNode||(c(e)?e.host:null)||p(e)}function b(e){return["html","body","#document"].indexOf(u(e))>=0?e.ownerDocument.body:s(e)&&l(e)?e:b(h(e))}function g(e,t){var n;void 0===t&&(t=[]);var r=b(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),a=o(r),s=i?[a].concat(a.visualViewport||[],l(r)?r:[]):r,c=t.concat(s);return i?c:c.concat(g(h(s)))}function y(e){return["table","td","th"].indexOf(u(e))>=0}function w(e){return s(e)&&"fixed"!==d(e).position?e.offsetParent:null}function O(e){for(var t=o(e),n=w(e);n&&y(n)&&"static"===d(n).position;)n=w(n);return n&&("html"===u(n)||"body"===u(n)&&"static"===d(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&s(e)&&"fixed"===d(e).position)return null;for(var n=h(e);s(n)&&["html","body"].indexOf(u(n))<0;){var r=d(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}var x="top",E="bottom",j="right",A="left",T="auto",D=[x,E,j,A],L="start",k="end",C="viewport",P="popper",M=D.reduce((function(e,t){return e.concat([t+"-"+L,t+"-"+k])}),[]),H=[].concat(D,[T]).reduce((function(e,t){return e.concat([t,t+"-"+L,t+"-"+k])}),[]),S=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function R(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function V(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var W={placement:"bottom",modifiers:[],strategy:"absolute"};function B(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function N(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?W:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},W,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],c=!1,u={state:o,setOptions:function(n){var c="function"===typeof n?n(o.options):n;p(),o.options=Object.assign({},i,o.options,c),o.scrollParents={reference:a(e)?g(e):e.contextElement?g(e.contextElement):[],popper:g(t)};var f=function(e){var t=R(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var a=i({state:o,name:t,instance:u,options:r}),c=function(){};s.push(a||c)}})),u.update()},forceUpdate:function(){if(!c){var e=o.elements,t=e.reference,n=e.popper;if(B(t,n)){o.rects={reference:m(t,O(n),"fixed"===o.options.strategy),popper:v(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,s=i.options,p=void 0===s?{}:s,f=i.name;"function"===typeof a&&(o=a({state:o,options:p,name:f,instance:u})||o)}else o.reset=!1,r=-1}}},update:V((function(){return new Promise((function(e){u.forceUpdate(),e(o)}))})),destroy:function(){p(),c=!0}};if(!B(e,t))return u;function p(){s.forEach((function(e){return e()})),s=[]}return u.setOptions(n).then((function(e){!c&&n.onFirstUpdate&&n.onFirstUpdate(e)})),u}}var I={passive:!0};var _={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,a=void 0===i||i,s=r.resize,c=void 0===s||s,u=o(t.elements.popper),p=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&p.forEach((function(e){e.addEventListener("scroll",n.update,I)})),c&&u.addEventListener("resize",n.update,I),function(){a&&p.forEach((function(e){e.removeEventListener("scroll",n.update,I)})),c&&u.removeEventListener("resize",n.update,I)}},data:{}};function U(e){return e.split("-")[0]}function q(e){return e.split("-")[1]}function $(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function F(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?U(o):null,a=o?q(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case x:t={x:s,y:n.y-r.height};break;case E:t={x:s,y:n.y+n.height};break;case j:t={x:n.x+n.width,y:c};break;case A:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?$(i):null;if(null!=u){var p="y"===u?"height":"width";switch(a){case L:t[u]=t[u]-(n[p]/2-r[p]/2);break;case k:t[u]=t[u]+(n[p]/2-r[p]/2)}}return t}var z={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=F({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},J=Math.max,X=Math.min,Y=Math.round,G={top:"auto",right:"auto",bottom:"auto",left:"auto"};function K(e){var t,n=e.popper,r=e.popperRect,i=e.placement,a=e.variation,s=e.offsets,c=e.position,u=e.gpuAcceleration,f=e.adaptive,l=e.roundOffsets,m=!0===l?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:Y(Y(t*r)/r)||0,y:Y(Y(n*r)/r)||0}}(s):"function"===typeof l?l(s):s,v=m.x,h=void 0===v?0:v,b=m.y,g=void 0===b?0:b,y=s.hasOwnProperty("x"),w=s.hasOwnProperty("y"),T=A,D=x,L=window;if(f){var C=O(n),P="clientHeight",M="clientWidth";C===o(n)&&"static"!==d(C=p(n)).position&&"absolute"===c&&(P="scrollHeight",M="scrollWidth"),C=C,i!==x&&(i!==A&&i!==j||a!==k)||(D=E,g-=C[P]-r.height,g*=u?1:-1),i!==A&&(i!==x&&i!==E||a!==k)||(T=j,h-=C[M]-r.width,h*=u?1:-1)}var H,S=Object.assign({position:c},f&&G);return u?Object.assign({},S,((H={})[D]=w?"0":"",H[T]=y?"0":"",H.transform=(L.devicePixelRatio||1)<=1?"translate("+h+"px, "+g+"px)":"translate3d("+h+"px, "+g+"px, 0)",H)):Object.assign({},S,((t={})[D]=w?g+"px":"",t[T]=y?h+"px":"",t.transform="",t))}var Q={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},o=t.elements[e];s(o)&&u(o)&&(Object.assign(o.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],o=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});s(r)&&u(r)&&(Object.assign(r.style,i),Object.keys(o).forEach((function(e){r.removeAttribute(e)})))}))}},requires:["computeStyles"]};var Z={left:"right",right:"left",bottom:"top",top:"bottom"};function ee(e){return e.replace(/left|right|bottom|top/g,(function(e){return Z[e]}))}var te={start:"end",end:"start"};function ne(e){return e.replace(/start|end/g,(function(e){return te[e]}))}function re(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&c(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function oe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ie(e,t){return t===C?oe(function(e){var t=o(e),n=p(e),r=t.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,c=0;return r&&(i=r.width,a=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,c=r.offsetTop)),{width:i,height:a,x:s+f(e),y:c}}(e)):s(t)?function(e){var t=r(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):oe(function(e){var t,n=p(e),r=i(e),o=null==(t=e.ownerDocument)?void 0:t.body,a=J(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),s=J(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),c=-r.scrollLeft+f(e),u=-r.scrollTop;return"rtl"===d(o||n).direction&&(c+=J(n.clientWidth,o?o.clientWidth:0)-a),{width:a,height:s,x:c,y:u}}(p(e)))}function ae(e,t,n){var r="clippingParents"===t?function(e){var t=g(h(e)),n=["absolute","fixed"].indexOf(d(e).position)>=0&&s(e)?O(e):e;return a(n)?t.filter((function(e){return a(e)&&re(e,n)&&"body"!==u(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],c=o.reduce((function(t,n){var r=ie(e,n);return t.top=J(r.top,t.top),t.right=X(r.right,t.right),t.bottom=X(r.bottom,t.bottom),t.left=J(r.left,t.left),t}),ie(e,i));return c.width=c.right-c.left,c.height=c.bottom-c.top,c.x=c.left,c.y=c.top,c}function se(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ce(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function ue(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.boundary,c=void 0===s?"clippingParents":s,u=n.rootBoundary,f=void 0===u?C:u,d=n.elementContext,l=void 0===d?P:d,m=n.altBoundary,v=void 0!==m&&m,h=n.padding,b=void 0===h?0:h,g=se("number"!==typeof b?b:ce(b,D)),y=l===P?"reference":P,w=e.rects.popper,O=e.elements[v?y:l],A=ae(a(O)?O:O.contextElement||p(e.elements.popper),c,f),T=r(e.elements.reference),L=F({reference:T,element:w,strategy:"absolute",placement:i}),k=oe(Object.assign({},w,L)),M=l===P?k:T,H={top:A.top-M.top+g.top,bottom:M.bottom-A.bottom+g.bottom,left:A.left-M.left+g.left,right:M.right-A.right+g.right},S=e.modifiersData.offset;if(l===P&&S){var R=S[i];Object.keys(H).forEach((function(e){var t=[j,E].indexOf(e)>=0?1:-1,n=[x,E].indexOf(e)>=0?"y":"x";H[e]+=R[n]*t}))}return H}function pe(e,t,n){return J(e,X(t,n))}function fe(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function de(e){return[x,j,E,A].some((function(t){return e[t]>=0}))}var le=N({defaultModifiers:[_,z,{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:U(t.placement),variation:q(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,K(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,K(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},Q,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=H.reduce((function(e,n){return e[n]=function(e,t,n){var r=U(e),o=[A,x].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[A,j].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}},{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,p=n.boundary,f=n.rootBoundary,d=n.altBoundary,l=n.flipVariations,m=void 0===l||l,v=n.allowedAutoPlacements,h=t.options.placement,b=U(h),g=c||(b===h||!m?[ee(h)]:function(e){if(U(e)===T)return[];var t=ee(e);return[ne(e),t,ne(t)]}(h)),y=[h].concat(g).reduce((function(e,n){return e.concat(U(n)===T?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?H:c,p=q(r),f=p?s?M:M.filter((function(e){return q(e)===p})):D,d=f.filter((function(e){return u.indexOf(e)>=0}));0===d.length&&(d=f);var l=d.reduce((function(t,n){return t[n]=ue(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[U(n)],t}),{});return Object.keys(l).sort((function(e,t){return l[e]-l[t]}))}(t,{placement:n,boundary:p,rootBoundary:f,padding:u,flipVariations:m,allowedAutoPlacements:v}):n)}),[]),w=t.rects.reference,O=t.rects.popper,k=new Map,C=!0,P=y[0],S=0;S<y.length;S++){var R=y[S],V=U(R),W=q(R)===L,B=[x,E].indexOf(V)>=0,N=B?"width":"height",I=ue(t,{placement:R,boundary:p,rootBoundary:f,altBoundary:d,padding:u}),_=B?W?j:A:W?E:x;w[N]>O[N]&&(_=ee(_));var $=ee(_),F=[];if(i&&F.push(I[V]<=0),s&&F.push(I[_]<=0,I[$]<=0),F.every((function(e){return e}))){P=R,C=!1;break}k.set(R,F)}if(C)for(var z=function(e){var t=y.find((function(t){var n=k.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return P=t,"break"},J=m?3:1;J>0;J--){if("break"===z(J))break}t.placement!==P&&(t.modifiersData[r]._skip=!0,t.placement=P,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,p=n.altBoundary,f=n.padding,d=n.tether,l=void 0===d||d,m=n.tetherOffset,h=void 0===m?0:m,b=ue(t,{boundary:c,rootBoundary:u,padding:f,altBoundary:p}),g=U(t.placement),y=q(t.placement),w=!y,T=$(g),D="x"===T?"y":"x",k=t.modifiersData.popperOffsets,C=t.rects.reference,P=t.rects.popper,M="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,H={x:0,y:0};if(k){if(i||s){var S="y"===T?x:A,R="y"===T?E:j,V="y"===T?"height":"width",W=k[T],B=k[T]+b[S],N=k[T]-b[R],I=l?-P[V]/2:0,_=y===L?C[V]:P[V],F=y===L?-P[V]:-C[V],z=t.elements.arrow,Y=l&&z?v(z):{width:0,height:0},G=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},K=G[S],Q=G[R],Z=pe(0,C[V],Y[V]),ee=w?C[V]/2-I-Z-K-M:_-Z-K-M,te=w?-C[V]/2+I+Z+Q+M:F+Z+Q+M,ne=t.elements.arrow&&O(t.elements.arrow),re=ne?"y"===T?ne.clientTop||0:ne.clientLeft||0:0,oe=t.modifiersData.offset?t.modifiersData.offset[t.placement][T]:0,ie=k[T]+ee-oe-re,ae=k[T]+te-oe;if(i){var se=pe(l?X(B,ie):B,W,l?J(N,ae):N);k[T]=se,H[T]=se-W}if(s){var ce="x"===T?x:A,fe="x"===T?E:j,de=k[D],le=de+b[ce],me=de-b[fe],ve=pe(l?X(le,ie):le,de,l?J(me,ae):me);k[D]=ve,H[D]=ve-de}}t.modifiersData[r]=H}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=U(n.placement),c=$(s),u=[A,j].indexOf(s)>=0?"height":"width";if(i&&a){var p=function(e,t){return se("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ce(e,D))}(o.padding,n),f=v(i),d="y"===c?x:A,l="y"===c?E:j,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],b=O(i),g=b?"y"===c?b.clientHeight||0:b.clientWidth||0:0,y=m/2-h/2,w=p[d],T=g-f[u]-p[l],L=g/2-f[u]/2+y,k=pe(w,L,T),C=c;n.modifiersData[r]=((t={})[C]=k,t.centerOffset=k-L,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&re(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=ue(t,{elementContext:"reference"}),s=ue(t,{altBoundary:!0}),c=fe(a,r),u=fe(s,o,i),p=de(c),f=de(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:p,hasPopperEscaped:f},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":p,"data-popper-escaped":f})}}]}),me="tippy-content",ve="tippy-backdrop",he="tippy-arrow",be="tippy-svg-arrow",ge={passive:!0,capture:!0},ye=function(){return document.body};function we(e,t,n){if(Array.isArray(e)){var r=e[t];return null==r?Array.isArray(n)?n[t]:n:r}return e}function Oe(e,t){var n={}.toString.call(e);return 0===n.indexOf("[object")&&n.indexOf(t+"]")>-1}function xe(e,t){return"function"===typeof e?e.apply(void 0,t):e}function Ee(e,t){return 0===t?e:function(r){clearTimeout(n),n=setTimeout((function(){e(r)}),t)};var n}function je(e){return[].concat(e)}function Ae(e,t){-1===e.indexOf(t)&&e.push(t)}function Te(e){return e.split("-")[0]}function De(e){return[].slice.call(e)}function Le(){return document.createElement("div")}function ke(e){return["Element","Fragment"].some((function(t){return Oe(e,t)}))}function Ce(e){return Oe(e,"MouseEvent")}function Pe(e){return!(!e||!e._tippy||e._tippy.reference!==e)}function Me(e){return ke(e)?[e]:function(e){return Oe(e,"NodeList")}(e)?De(e):Array.isArray(e)?e:De(document.querySelectorAll(e))}function He(e,t){e.forEach((function(e){e&&(e.style.transitionDuration=t+"ms")}))}function Se(e,t){e.forEach((function(e){e&&e.setAttribute("data-state",t)}))}function Re(e){var t,n=je(e)[0];return(null==n||null==(t=n.ownerDocument)?void 0:t.body)?n.ownerDocument:document}function Ve(e,t,n){var r=t+"EventListener";["transitionend","webkitTransitionEnd"].forEach((function(t){e[r](t,n)}))}function We(e,t){for(var n=t;n;){var r;if(e.contains(n))return!0;n=null==(r=null==n.getRootNode?void 0:n.getRootNode())?void 0:r.host}return!1}var Be={isTouch:!1},Ne=0;function Ie(){Be.isTouch||(Be.isTouch=!0,window.performance&&document.addEventListener("mousemove",_e))}function _e(){var e=performance.now();e-Ne<20&&(Be.isTouch=!1,document.removeEventListener("mousemove",_e)),Ne=e}function Ue(){var e=document.activeElement;if(Pe(e)){var t=e._tippy;e.blur&&!t.state.isVisible&&e.blur()}}var qe=!!("undefined"!==typeof window&&"undefined"!==typeof document)&&!!window.msCrypto;var $e={animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1},Fe=Object.assign({appendTo:ye,aria:{content:"auto",expanded:"auto"},delay:0,duration:[300,250],getReferenceClientRect:null,hideOnClick:!0,ignoreAttributes:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,moveTransition:"",offset:[0,10],onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},onClickOutside:function(){},placement:"top",plugins:[],popperOptions:{},render:null,showOnCreate:!1,touch:!0,trigger:"mouseenter focus",triggerTarget:null},$e,{},{allowHTML:!1,animation:"fade",arrow:!0,content:"",inertia:!1,maxWidth:350,role:"tooltip",theme:"",zIndex:9999}),ze=Object.keys(Fe);function Je(e){var t=(e.plugins||[]).reduce((function(t,n){var r,o=n.name,i=n.defaultValue;o&&(t[o]=void 0!==e[o]?e[o]:null!=(r=Fe[o])?r:i);return t}),{});return Object.assign({},e,{},t)}function Xe(e,t){var n=Object.assign({},t,{content:xe(t.content,[e])},t.ignoreAttributes?{}:function(e,t){return(t?Object.keys(Je(Object.assign({},Fe,{plugins:t}))):ze).reduce((function(t,n){var r=(e.getAttribute("data-tippy-"+n)||"").trim();if(!r)return t;if("content"===n)t[n]=r;else try{t[n]=JSON.parse(r)}catch(o){t[n]=r}return t}),{})}(e,t.plugins));return n.aria=Object.assign({},Fe.aria,{},n.aria),n.aria={expanded:"auto"===n.aria.expanded?t.interactive:n.aria.expanded,content:"auto"===n.aria.content?t.interactive?null:"describedby":n.aria.content},n}function Ye(e,t){e.innerHTML=t}function Ge(e){var t=Le();return!0===e?t.className=he:(t.className=be,ke(e)?t.appendChild(e):Ye(t,e)),t}function Ke(e,t){ke(t.content)?(Ye(e,""),e.appendChild(t.content)):"function"!==typeof t.content&&(t.allowHTML?Ye(e,t.content):e.textContent=t.content)}function Qe(e){var t=e.firstElementChild,n=De(t.children);return{box:t,content:n.find((function(e){return e.classList.contains(me)})),arrow:n.find((function(e){return e.classList.contains(he)||e.classList.contains(be)})),backdrop:n.find((function(e){return e.classList.contains(ve)}))}}function Ze(e){var t=Le(),n=Le();n.className="tippy-box",n.setAttribute("data-state","hidden"),n.setAttribute("tabindex","-1");var r=Le();function o(n,r){var o=Qe(t),i=o.box,a=o.content,s=o.arrow;r.theme?i.setAttribute("data-theme",r.theme):i.removeAttribute("data-theme"),"string"===typeof r.animation?i.setAttribute("data-animation",r.animation):i.removeAttribute("data-animation"),r.inertia?i.setAttribute("data-inertia",""):i.removeAttribute("data-inertia"),i.style.maxWidth="number"===typeof r.maxWidth?r.maxWidth+"px":r.maxWidth,r.role?i.setAttribute("role",r.role):i.removeAttribute("role"),n.content===r.content&&n.allowHTML===r.allowHTML||Ke(a,e.props),r.arrow?s?n.arrow!==r.arrow&&(i.removeChild(s),i.appendChild(Ge(r.arrow))):i.appendChild(Ge(r.arrow)):s&&i.removeChild(s)}return r.className=me,r.setAttribute("data-state","hidden"),Ke(r,e.props),t.appendChild(n),n.appendChild(r),o(e.props,e.props),{popper:t,onUpdate:o}}Ze.$$tippy=!0;var et=1,tt=[],nt=[];function rt(e,t){var n,r,o,i,a,s,c,u,p,f=Xe(e,Object.assign({},Fe,{},Je((n=t,Object.keys(n).reduce((function(e,t){return void 0!==n[t]&&(e[t]=n[t]),e}),{}))))),d=!1,l=!1,m=!1,v=!1,h=[],b=Ee(X,f.interactiveDebounce),g=et++,y=(p=f.plugins).filter((function(e,t){return p.indexOf(e)===t})),w={id:g,reference:e,popper:Le(),popperInstance:null,props:f,state:{isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:y,clearDelayTimeouts:function(){clearTimeout(r),clearTimeout(o),cancelAnimationFrame(i)},setProps:function(t){0;if(w.state.isDestroyed)return;S("onBeforeUpdate",[w,t]),z();var n=w.props,r=Xe(e,Object.assign({},w.props,{},t,{ignoreAttributes:!0}));w.props=r,F(),n.interactiveDebounce!==r.interactiveDebounce&&(W(),b=Ee(X,r.interactiveDebounce));n.triggerTarget&&!r.triggerTarget?je(n.triggerTarget).forEach((function(e){e.removeAttribute("aria-expanded")})):r.triggerTarget&&e.removeAttribute("aria-expanded");V(),H(),E&&E(n,r);w.popperInstance&&(Q(),ee().forEach((function(e){requestAnimationFrame(e._tippy.popperInstance.forceUpdate)})));S("onAfterUpdate",[w,t])},setContent:function(e){w.setProps({content:e})},show:function(){0;var e=w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=Be.isTouch&&!w.props.touch,o=we(w.props.duration,0,Fe.duration);if(e||t||n||r)return;if(k().hasAttribute("disabled"))return;if(S("onShow",[w],!1),!1===w.props.onShow(w))return;w.state.isVisible=!0,L()&&(x.style.visibility="visible");H(),_(),w.state.isMounted||(x.style.transition="none");if(L()){var i=P(),a=i.box,s=i.content;He([a,s],0)}c=function(){var e;if(w.state.isVisible&&!v){if(v=!0,x.offsetHeight,x.style.transition=w.props.moveTransition,L()&&w.props.animation){var t=P(),n=t.box,r=t.content;He([n,r],o),Se([n,r],"visible")}R(),V(),Ae(nt,w),null==(e=w.popperInstance)||e.forceUpdate(),w.state.isMounted=!0,S("onMount",[w]),w.props.animation&&L()&&function(e,t){q(e,t)}(o,(function(){w.state.isShown=!0,S("onShown",[w])}))}},function(){var e,t=w.props.appendTo,n=k();e=w.props.interactive&&t===ye||"parent"===t?n.parentNode:xe(t,[n]);e.contains(x)||e.appendChild(x);Q(),!1}()},hide:function(){0;var e=!w.state.isVisible,t=w.state.isDestroyed,n=!w.state.isEnabled,r=we(w.props.duration,1,Fe.duration);if(e||t||n)return;if(S("onHide",[w],!1),!1===w.props.onHide(w))return;w.state.isVisible=!1,w.state.isShown=!1,v=!1,d=!1,L()&&(x.style.visibility="hidden");if(W(),U(),H(),L()){var o=P(),i=o.box,a=o.content;w.props.animation&&(He([i,a],r),Se([i,a],"hidden"))}R(),V(),w.props.animation?L()&&function(e,t){q(e,(function(){!w.state.isVisible&&x.parentNode&&x.parentNode.contains(x)&&t()}))}(r,w.unmount):w.unmount()},hideWithInteractivity:function(e){0;C().addEventListener("mousemove",b),Ae(tt,b),b(e)},enable:function(){w.state.isEnabled=!0},disable:function(){w.hide(),w.state.isEnabled=!1},unmount:function(){0;w.state.isVisible&&w.hide();if(!w.state.isMounted)return;Z(),ee().forEach((function(e){e._tippy.unmount()})),x.parentNode&&x.parentNode.removeChild(x);nt=nt.filter((function(e){return e!==w})),w.state.isMounted=!1,S("onHidden",[w])},destroy:function(){0;if(w.state.isDestroyed)return;w.clearDelayTimeouts(),w.unmount(),z(),delete e._tippy,w.state.isDestroyed=!0,S("onDestroy",[w])}};if(!f.render)return w;var O=f.render(w),x=O.popper,E=O.onUpdate;x.setAttribute("data-tippy-root",""),x.id="tippy-"+w.id,w.popper=x,e._tippy=w,x._tippy=w;var j=y.map((function(e){return e.fn(w)})),A=e.hasAttribute("aria-expanded");return F(),V(),H(),S("onCreate",[w]),f.showOnCreate&&te(),x.addEventListener("mouseenter",(function(){w.props.interactive&&w.state.isVisible&&w.clearDelayTimeouts()})),x.addEventListener("mouseleave",(function(e){w.props.interactive&&w.props.trigger.indexOf("mouseenter")>=0&&(C().addEventListener("mousemove",b),b(e))})),w;function T(){var e=w.props.touch;return Array.isArray(e)?e:[e,0]}function D(){return"hold"===T()[0]}function L(){var e;return!!(null==(e=w.props.render)?void 0:e.$$tippy)}function k(){return u||e}function C(){var e=k().parentNode;return e?Re(e):document}function P(){return Qe(x)}function M(e){return w.state.isMounted&&!w.state.isVisible||Be.isTouch||a&&"focus"===a.type?0:we(w.props.delay,e?0:1,Fe.delay)}function H(){x.style.pointerEvents=w.props.interactive&&w.state.isVisible?"":"none",x.style.zIndex=""+w.props.zIndex}function S(e,t,n){var r;(void 0===n&&(n=!0),j.forEach((function(n){n[e]&&n[e].apply(void 0,t)})),n)&&(r=w.props)[e].apply(r,t)}function R(){var t=w.props.aria;if(t.content){var n="aria-"+t.content,r=x.id;je(w.props.triggerTarget||e).forEach((function(e){var t=e.getAttribute(n);if(w.state.isVisible)e.setAttribute(n,t?t+" "+r:r);else{var o=t&&t.replace(r,"").trim();o?e.setAttribute(n,o):e.removeAttribute(n)}}))}}function V(){!A&&w.props.aria.expanded&&je(w.props.triggerTarget||e).forEach((function(e){w.props.interactive?e.setAttribute("aria-expanded",w.state.isVisible&&e===k()?"true":"false"):e.removeAttribute("aria-expanded")}))}function W(){C().removeEventListener("mousemove",b),tt=tt.filter((function(e){return e!==b}))}function B(e){if(!Be.isTouch||!m&&"mousedown"!==e.type){var t=e.composedPath&&e.composedPath()[0]||e.target;if(!w.props.interactive||!We(x,t)){if(We(k(),t)){if(Be.isTouch)return;if(w.state.isVisible&&w.props.trigger.indexOf("click")>=0)return}else S("onClickOutside",[w,e]);!0===w.props.hideOnClick&&(w.clearDelayTimeouts(),w.hide(),l=!0,setTimeout((function(){l=!1})),w.state.isMounted||U())}}}function N(){m=!0}function I(){m=!1}function _(){var e=C();e.addEventListener("mousedown",B,!0),e.addEventListener("touchend",B,ge),e.addEventListener("touchstart",I,ge),e.addEventListener("touchmove",N,ge)}function U(){var e=C();e.removeEventListener("mousedown",B,!0),e.removeEventListener("touchend",B,ge),e.removeEventListener("touchstart",I,ge),e.removeEventListener("touchmove",N,ge)}function q(e,t){var n=P().box;function r(e){e.target===n&&(Ve(n,"remove",r),t())}if(0===e)return t();Ve(n,"remove",s),Ve(n,"add",r),s=r}function $(t,n,r){void 0===r&&(r=!1),je(w.props.triggerTarget||e).forEach((function(e){e.addEventListener(t,n,r),h.push({node:e,eventType:t,handler:n,options:r})}))}function F(){var e;D()&&($("touchstart",J,{passive:!0}),$("touchend",Y,{passive:!0})),(e=w.props.trigger,e.split(/\s+/).filter(Boolean)).forEach((function(e){if("manual"!==e)switch($(e,J),e){case"mouseenter":$("mouseleave",Y);break;case"focus":$(qe?"focusout":"blur",G);break;case"focusin":$("focusout",G)}}))}function z(){h.forEach((function(e){var t=e.node,n=e.eventType,r=e.handler,o=e.options;t.removeEventListener(n,r,o)})),h=[]}function J(e){var t,n=!1;if(w.state.isEnabled&&!K(e)&&!l){var r="focus"===(null==(t=a)?void 0:t.type);a=e,u=e.currentTarget,V(),!w.state.isVisible&&Ce(e)&&tt.forEach((function(t){return t(e)})),"click"===e.type&&(w.props.trigger.indexOf("mouseenter")<0||d)&&!1!==w.props.hideOnClick&&w.state.isVisible?n=!0:te(e),"click"===e.type&&(d=!n),n&&!r&&ne(e)}}function X(e){var t=e.target,n=k().contains(t)||x.contains(t);if("mousemove"!==e.type||!n){var r=ee().concat(x).map((function(e){var t,n=null==(t=e._tippy.popperInstance)?void 0:t.state;return n?{popperRect:e.getBoundingClientRect(),popperState:n,props:f}:null})).filter(Boolean);(function(e,t){var n=t.clientX,r=t.clientY;return e.every((function(e){var t=e.popperRect,o=e.popperState,i=e.props.interactiveBorder,a=Te(o.placement),s=o.modifiersData.offset;if(!s)return!0;var c="bottom"===a?s.top.y:0,u="top"===a?s.bottom.y:0,p="right"===a?s.left.x:0,f="left"===a?s.right.x:0,d=t.top-r+c>i,l=r-t.bottom-u>i,m=t.left-n+p>i,v=n-t.right-f>i;return d||l||m||v}))})(r,e)&&(W(),ne(e))}}function Y(e){K(e)||w.props.trigger.indexOf("click")>=0&&d||(w.props.interactive?w.hideWithInteractivity(e):ne(e))}function G(e){w.props.trigger.indexOf("focusin")<0&&e.target!==k()||w.props.interactive&&e.relatedTarget&&x.contains(e.relatedTarget)||ne(e)}function K(e){return!!Be.isTouch&&D()!==e.type.indexOf("touch")>=0}function Q(){Z();var t=w.props,n=t.popperOptions,r=t.placement,o=t.offset,i=t.getReferenceClientRect,a=t.moveTransition,s=L()?Qe(x).arrow:null,u=i?{getBoundingClientRect:i,contextElement:i.contextElement||k()}:e,p={name:"$$tippy",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t=e.state;if(L()){var n=P().box;["placement","reference-hidden","escaped"].forEach((function(e){"placement"===e?n.setAttribute("data-placement",t.placement):t.attributes.popper["data-popper-"+e]?n.setAttribute("data-"+e,""):n.removeAttribute("data-"+e)})),t.attributes.popper={}}}},f=[{name:"offset",options:{offset:o}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5}},{name:"computeStyles",options:{adaptive:!a}},p];L()&&s&&f.push({name:"arrow",options:{element:s,padding:3}}),f.push.apply(f,(null==n?void 0:n.modifiers)||[]),w.popperInstance=le(u,x,Object.assign({},n,{placement:r,onFirstUpdate:c,modifiers:f}))}function Z(){w.popperInstance&&(w.popperInstance.destroy(),w.popperInstance=null)}function ee(){return De(x.querySelectorAll("[data-tippy-root]"))}function te(e){w.clearDelayTimeouts(),e&&S("onTrigger",[w,e]),_();var t=M(!0),n=T(),o=n[0],i=n[1];Be.isTouch&&"hold"===o&&i&&(t=i),t?r=setTimeout((function(){w.show()}),t):w.show()}function ne(e){if(w.clearDelayTimeouts(),S("onUntrigger",[w,e]),w.state.isVisible){if(!(w.props.trigger.indexOf("mouseenter")>=0&&w.props.trigger.indexOf("click")>=0&&["mouseleave","mousemove"].indexOf(e.type)>=0&&d)){var t=M(!1);t?o=setTimeout((function(){w.state.isVisible&&w.hide()}),t):i=requestAnimationFrame((function(){w.hide()}))}}else U()}}function ot(e,t){void 0===t&&(t={});var n=Fe.plugins.concat(t.plugins||[]);document.addEventListener("touchstart",Ie,ge),window.addEventListener("blur",Ue);var r=Object.assign({},t,{plugins:n}),o=Me(e).reduce((function(e,t){var n=t&&rt(t,r);return n&&e.push(n),e}),[]);return ke(e)?o[0]:o}ot.defaultProps=Fe,ot.setDefaultProps=function(e){Object.keys(e).forEach((function(t){Fe[t]=e[t]}))},ot.currentInput=Be;Object.assign({},Q,{effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow)}});ot.setDefaultProps({render:Ze});var it=ot,at=n(2),st=n.n(at),ct=n(54);function ut(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var pt="undefined"!==typeof window&&"undefined"!==typeof document;function ft(e,t){e&&("function"===typeof e&&e(t),{}.hasOwnProperty.call(e,"current")&&(e.current=t))}function dt(){return pt&&document.createElement("div")}function lt(e,t){if(e===t)return!0;if("object"===typeof e&&null!=e&&"object"===typeof t&&null!=t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(var n in e){if(!t.hasOwnProperty(n))return!1;if(!lt(e[n],t[n]))return!1}return!0}return!1}function mt(e){var t=[];return e.forEach((function(e){t.find((function(t){return lt(e,t)}))||t.push(e)})),t}function vt(e,t){var n,r;return Object.assign({},t,{popperOptions:Object.assign({},e.popperOptions,t.popperOptions,{modifiers:mt([].concat((null==(n=e.popperOptions)?void 0:n.modifiers)||[],(null==(r=t.popperOptions)?void 0:r.modifiers)||[]))})})}var ht=pt?at.useLayoutEffect:at.useEffect;function bt(e){var t=Object(at.useRef)();return t.current||(t.current="function"===typeof e?e():e),t.current}function gt(e,t,n){n.split(/\s+/).forEach((function(n){n&&e.classList[t](n)}))}var yt={name:"className",defaultValue:"",fn:function(e){var t=e.popper.firstElementChild,n=function(){var t;return!!(null==(t=e.props.render)?void 0:t.$$tippy)};function r(){e.props.className&&!n()||gt(t,"add",e.props.className)}return{onCreate:r,onBeforeUpdate:function(){n()&&gt(t,"remove",e.props.className)},onAfterUpdate:r}}};function wt(e){return function(t){var n=t.children,r=t.content,o=t.visible,i=t.singleton,a=t.render,s=t.reference,c=t.disabled,u=void 0!==c&&c,p=t.ignoreAttributes,f=void 0===p||p,d=(t.__source,t.__self,ut(t,["children","content","visible","singleton","render","reference","disabled","ignoreAttributes","__source","__self"])),l=void 0!==o,m=void 0!==i,v=Object(at.useState)(!1),h=v[0],b=v[1],g=Object(at.useState)({}),y=g[0],w=g[1],O=Object(at.useState)(),x=O[0],E=O[1],j=bt((function(){return{container:dt(),renders:1}})),A=Object.assign({ignoreAttributes:f},d,{content:j.container});l&&(A.trigger="manual",A.hideOnClick=!1),m&&(u=!0);var T=A,D=A.plugins||[];a&&(T=Object.assign({},A,{plugins:m?[].concat(D,[{fn:function(){return{onTrigger:function(e,t){var n=i.data.children.find((function(e){return e.instance.reference===t.currentTarget})).content;E(n)}}}}]):D,render:function(){return{popper:j.container}}}));var L=[s].concat(n?[n.type]:[]);return ht((function(){var t=s;s&&s.hasOwnProperty("current")&&(t=s.current);var n=e(t||j.ref||dt(),Object.assign({},T,{plugins:[yt].concat(A.plugins||[])}));return j.instance=n,u&&n.disable(),o&&n.show(),m&&i.hook({instance:n,content:r,props:T}),b(!0),function(){n.destroy(),null==i||i.cleanup(n)}}),L),ht((function(){var e;if(1!==j.renders){var t=j.instance;t.setProps(vt(t.props,T)),null==(e=t.popperInstance)||e.forceUpdate(),u?t.disable():t.enable(),l&&(o?t.show():t.hide()),m&&i.hook({instance:t,content:r,props:T})}else j.renders++})),ht((function(){var e;if(a){var t=j.instance;t.setProps({popperOptions:Object.assign({},t.props.popperOptions,{modifiers:[].concat(((null==(e=t.props.popperOptions)?void 0:e.modifiers)||[]).filter((function(e){return"$$tippyReact"!==e.name})),[{name:"$$tippyReact",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:function(e){var t,n=e.state,r=null==(t=n.modifiersData)?void 0:t.hide;y.placement===n.placement&&y.referenceHidden===(null==r?void 0:r.isReferenceHidden)&&y.escaped===(null==r?void 0:r.hasPopperEscaped)||w({placement:n.placement,referenceHidden:null==r?void 0:r.isReferenceHidden,escaped:null==r?void 0:r.hasPopperEscaped}),n.attributes.popper={}}}])})})}}),[y.placement,y.referenceHidden,y.escaped].concat(L)),st.a.createElement(st.a.Fragment,null,n?Object(at.cloneElement)(n,{ref:function(e){j.ref=e,ft(n.ref,e)}}):null,h&&Object(ct.createPortal)(a?a(function(e){var t={"data-placement":e.placement};return e.referenceHidden&&(t["data-reference-hidden"]=""),e.escaped&&(t["data-escaped"]=""),t}(y),x,j.instance):r,j.container))}}var Ot=function(e,t){return Object(at.forwardRef)((function(n,r){var o=n.children,i=ut(n,["children"]);return st.a.createElement(e,Object.assign({},t,i),o?Object(at.cloneElement)(o,{ref:function(e){ft(r,e),ft(o.ref,e)}}):null)}))},xt=Ot(wt(it));t.a=xt}}]);
//# sourceMappingURL=3.23ed40c7.chunk.js.map