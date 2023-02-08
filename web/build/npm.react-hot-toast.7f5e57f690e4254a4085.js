"use strict";(self.webpackChunktopology_app=self.webpackChunktopology_app||[]).push([[138],{9574:function(n,t,e){e.r(t),e.d(t,{CheckmarkIcon:function(){return C},ErrorIcon:function(){return P},LoaderIcon:function(){return k},ToastBar:function(){return tn},ToastIcon:function(){return K},Toaster:function(){return on},resolveValue:function(){return u},toast:function(){return b},useToaster:function(){return x},useToasterStore:function(){return h}});var r=e(7294),o=e(8137);function i(){return i=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r])}return n},i.apply(this,arguments)}function a(n,t){return t||(t=n.slice(0)),n.raw=t,n}var s,u=function(n,t){return function(n){return"function"==typeof n}(n)?n(t):n},c=function(){var n=0;return function(){return(++n).toString()}}(),f=function(){var n=void 0;return function(){if(void 0===n&&"undefined"!=typeof window){var t=matchMedia("(prefers-reduced-motion: reduce)");n=!t||t.matches}return n}}();!function(n){n[n.ADD_TOAST=0]="ADD_TOAST",n[n.UPDATE_TOAST=1]="UPDATE_TOAST",n[n.UPSERT_TOAST=2]="UPSERT_TOAST",n[n.DISMISS_TOAST=3]="DISMISS_TOAST",n[n.REMOVE_TOAST=4]="REMOVE_TOAST",n[n.START_PAUSE=5]="START_PAUSE",n[n.END_PAUSE=6]="END_PAUSE"}(s||(s={}));var d=new Map,l=function(n){if(!d.has(n)){var t=setTimeout((function(){d.delete(n),y({type:s.REMOVE_TOAST,toastId:n})}),1e3);d.set(n,t)}},p=function n(t,e){switch(e.type){case s.ADD_TOAST:return i({},t,{toasts:[e.toast].concat(t.toasts).slice(0,20)});case s.UPDATE_TOAST:return e.toast.id&&function(n){var t=d.get(n);t&&clearTimeout(t)}(e.toast.id),i({},t,{toasts:t.toasts.map((function(n){return n.id===e.toast.id?i({},n,e.toast):n}))});case s.UPSERT_TOAST:var r=e.toast;return t.toasts.find((function(n){return n.id===r.id}))?n(t,{type:s.UPDATE_TOAST,toast:r}):n(t,{type:s.ADD_TOAST,toast:r});case s.DISMISS_TOAST:var o=e.toastId;return o?l(o):t.toasts.forEach((function(n){l(n.id)})),i({},t,{toasts:t.toasts.map((function(n){return n.id===o||void 0===o?i({},n,{visible:!1}):n}))});case s.REMOVE_TOAST:return void 0===e.toastId?i({},t,{toasts:[]}):i({},t,{toasts:t.toasts.filter((function(n){return n.id!==e.toastId}))});case s.START_PAUSE:return i({},t,{pausedAt:e.time});case s.END_PAUSE:var a=e.time-(t.pausedAt||0);return i({},t,{pausedAt:void 0,toasts:t.toasts.map((function(n){return i({},n,{pauseDuration:n.pauseDuration+a})}))})}},m=[],v={toasts:[],pausedAt:void 0},y=function(n){v=p(v,n),m.forEach((function(n){n(v)}))},g={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},h=function(n){void 0===n&&(n={});var t=(0,r.useState)(v),e=t[0],o=t[1];(0,r.useEffect)((function(){return m.push(o),function(){var n=m.indexOf(o);n>-1&&m.splice(n,1)}}),[e]);var a=e.toasts.map((function(t){var e,r,o;return i({},n,n[t.type],t,{duration:t.duration||(null==(e=n[t.type])?void 0:e.duration)||(null==(r=n)?void 0:r.duration)||g[t.type],style:i({},n.style,null==(o=n[t.type])?void 0:o.style,t.style)})}));return i({},e,{toasts:a})},T=function(n){return function(t,e){var r=function(n,t,e){return void 0===t&&(t="blank"),i({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:n,pauseDuration:0},e,{id:(null==e?void 0:e.id)||c()})}(t,n,e);return y({type:s.UPSERT_TOAST,toast:r}),r.id}},b=function(n,t){return T("blank")(n,t)};b.error=T("error"),b.success=T("success"),b.loading=T("loading"),b.custom=T("custom"),b.dismiss=function(n){y({type:s.DISMISS_TOAST,toastId:n})},b.remove=function(n){return y({type:s.REMOVE_TOAST,toastId:n})},b.promise=function(n,t,e){var r=b.loading(t.loading,i({},e,null==e?void 0:e.loading));return n.then((function(n){return b.success(u(t.success,n),i({id:r},e,null==e?void 0:e.success)),n})).catch((function(n){b.error(u(t.error,n),i({id:r},e,null==e?void 0:e.error))})),n};var x=function(n){var t=h(n),e=t.toasts,o=t.pausedAt;(0,r.useEffect)((function(){if(!o){var n=Date.now(),t=e.map((function(t){if(t.duration!==1/0){var e=(t.duration||0)+t.pauseDuration-(n-t.createdAt);if(!(e<0))return setTimeout((function(){return b.dismiss(t.id)}),e);t.visible&&b.dismiss(t.id)}}));return function(){t.forEach((function(n){return n&&clearTimeout(n)}))}}}),[e,o]);var i=(0,r.useMemo)((function(){return{startPause:function(){y({type:s.START_PAUSE,time:Date.now()})},endPause:function(){o&&y({type:s.END_PAUSE,time:Date.now()})},updateHeight:function(n,t){return y({type:s.UPDATE_TOAST,toast:{id:n,height:t}})},calculateOffset:function(n,t){var r,o=t||{},i=o.reverseOrder,a=void 0!==i&&i,s=o.gutter,u=void 0===s?8:s,c=o.defaultPosition,f=e.filter((function(t){return(t.position||c)===(n.position||c)&&t.height})),d=f.findIndex((function(t){return t.id===n.id})),l=f.filter((function(n,t){return t<d&&n.visible})).length;return(r=f.filter((function(n){return n.visible}))).slice.apply(r,a?[l+1]:[0,l]).reduce((function(n,t){return n+(t.height||0)+u}),0)}}}),[e,o]);return{toasts:e,handlers:i}};function S(){var n=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n\n  &:after,\n  &:before {\n    content: '';\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 150ms;\n    position: absolute;\n    border-radius: 3px;\n    opacity: 0;\n    background: ",";\n    bottom: 9px;\n    left: 4px;\n    height: 2px;\n    width: 12px;\n  }\n\n  &:before {\n    animation: "," 0.15s ease-out forwards;\n    animation-delay: 180ms;\n    transform: rotate(90deg);\n  }\n"]);return S=function(){return n},n}function E(){var n=a(["\nfrom {\n  transform: scale(0) rotate(90deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(90deg);\n\topacity: 1;\n}"]);return E=function(){return n},n}function A(){var n=a(["\nfrom {\n  transform: scale(0);\n  opacity: 0;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return A=function(){return n},n}function O(){var n=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n transform: scale(1) rotate(45deg);\n  opacity: 1;\n}"]);return O=function(){return n},n}var w=(0,o.F4)(O()),_=(0,o.F4)(A()),D=(0,o.F4)(E()),P=(0,o.zo)("div")(S(),(function(n){return n.primary||"#ff4b4b"}),w,_,(function(n){return n.secondary||"#fff"}),D);function I(){var n=a(["\n  width: 12px;\n  height: 12px;\n  box-sizing: border-box;\n  border: 2px solid;\n  border-radius: 100%;\n  border-color: ",";\n  border-right-color: ",";\n  animation: "," 1s linear infinite;\n"]);return I=function(){return n},n}function z(){var n=a(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"]);return z=function(){return n},n}var U=(0,o.F4)(z()),k=(0,o.zo)("div")(I(),(function(n){return n.secondary||"#e0e0e0"}),(function(n){return n.primary||"#616161"}),U);function R(){var n=a(["\n  width: 20px;\n  opacity: 0;\n  height: 20px;\n  border-radius: 10px;\n  background: ",";\n  position: relative;\n  transform: rotate(45deg);\n\n  animation: "," 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n  animation-delay: 100ms;\n  &:after {\n    content: '';\n    box-sizing: border-box;\n    animation: "," 0.2s ease-out forwards;\n    opacity: 0;\n    animation-delay: 200ms;\n    position: absolute;\n    border-right: 2px solid;\n    border-bottom: 2px solid;\n    border-color: ",";\n    bottom: 6px;\n    left: 6px;\n    height: 10px;\n    width: 6px;\n  }\n"]);return R=function(){return n},n}function M(){var n=a(["\n0% {\n\theight: 0;\n\twidth: 0;\n\topacity: 0;\n}\n40% {\n  height: 0;\n\twidth: 6px;\n\topacity: 1;\n}\n100% {\n  opacity: 1;\n  height: 10px;\n}"]);return M=function(){return n},n}function j(){var n=a(["\nfrom {\n  transform: scale(0) rotate(45deg);\n\topacity: 0;\n}\nto {\n  transform: scale(1) rotate(45deg);\n\topacity: 1;\n}"]);return j=function(){return n},n}var F=(0,o.F4)(j()),N=(0,o.F4)(M()),C=(0,o.zo)("div")(R(),(function(n){return n.primary||"#61d345"}),F,N,(function(n){return n.secondary||"#fff"}));function V(){var n=a(["\n  position: relative;\n  transform: scale(0.6);\n  opacity: 0.4;\n  min-width: 20px;\n  animation: "," 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)\n    forwards;\n"]);return V=function(){return n},n}function B(){var n=a(["\nfrom {\n  transform: scale(0.6);\n  opacity: 0.4;\n}\nto {\n  transform: scale(1);\n  opacity: 1;\n}"]);return B=function(){return n},n}function H(){var n=a(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 20px;\n  min-height: 20px;\n"]);return H=function(){return n},n}function L(){var n=a(["\n  position: absolute;\n"]);return L=function(){return n},n}var Y=(0,o.zo)("div")(L()),q=(0,o.zo)("div")(H()),G=(0,o.F4)(B()),J=(0,o.zo)("div")(V(),G),K=function(n){var t=n.toast,e=t.icon,o=t.type,i=t.iconTheme;return void 0!==e?"string"==typeof e?(0,r.createElement)(J,null,e):e:"blank"===o?null:(0,r.createElement)(q,null,(0,r.createElement)(k,Object.assign({},i)),"loading"!==o&&(0,r.createElement)(Y,null,"error"===o?(0,r.createElement)(P,Object.assign({},i)):(0,r.createElement)(C,Object.assign({},i))))};function Q(){var n=a(["\n  display: flex;\n  justify-content: center;\n  margin: 4px 10px;\n  color: inherit;\n  flex: 1 1 auto;\n  white-space: pre-line;\n"]);return Q=function(){return n},n}function W(){var n=a(["\n  display: flex;\n  align-items: center;\n  background: #fff;\n  color: #363636;\n  line-height: 1.3;\n  will-change: transform;\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);\n  max-width: 350px;\n  pointer-events: auto;\n  padding: 8px 10px;\n  border-radius: 8px;\n"]);return W=function(){return n},n}var X=function(n){return"\n0% {transform: translate3d(0,"+-200*n+"%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n"},Z=function(n){return"\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,"+-150*n+"%,-1px) scale(.6); opacity:0;}\n"},$=(0,o.zo)("div",r.forwardRef)(W()),nn=(0,o.zo)("div")(Q()),tn=(0,r.memo)((function(n){var t=n.toast,e=n.position,a=n.style,s=n.children,c=null!=t&&t.height?function(n,t){var e=n.includes("top")?1:-1,r=f()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[X(e),Z(e)],i=r[0],a=r[1];return{animation:t?(0,o.F4)(i)+" 0.35s cubic-bezier(.21,1.02,.73,1) forwards":(0,o.F4)(a)+" 0.4s forwards cubic-bezier(.06,.71,.55,1)"}}(t.position||e||"top-center",t.visible):{opacity:0},d=(0,r.createElement)(K,{toast:t}),l=(0,r.createElement)(nn,Object.assign({},t.ariaProps),u(t.message,t));return(0,r.createElement)($,{className:t.className,style:i({},c,a,t.style)},"function"==typeof s?s({icon:d,message:l}):(0,r.createElement)(r.Fragment,null,d,l))}));function en(){var n=a(["\n  z-index: 9999;\n  > * {\n    pointer-events: auto;\n  }\n"]);return en=function(){return n},n}(0,o.cY)(r.createElement);var rn=(0,o.iv)(en()),on=function(n){var t=n.reverseOrder,e=n.position,o=void 0===e?"top-center":e,a=n.toastOptions,s=n.gutter,c=n.children,d=n.containerStyle,l=n.containerClassName,p=x(a),m=p.toasts,v=p.handlers;return(0,r.createElement)("div",{style:i({position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none"},d),className:l,onMouseEnter:v.startPause,onMouseLeave:v.endPause},m.map((function(n){var e,a=n.position||o,d=function(n,t){var e=n.includes("top"),r=e?{top:0}:{bottom:0},o=n.includes("center")?{justifyContent:"center"}:n.includes("right")?{justifyContent:"flex-end"}:{};return i({left:0,right:0,display:"flex",position:"absolute",transition:f()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:"translateY("+t*(e?1:-1)+"px)"},r,o)}(a,v.calculateOffset(n,{reverseOrder:t,gutter:s,defaultPosition:o})),l=n.height?void 0:(e=function(t){v.updateHeight(n.id,t.height)},function(n){n&&setTimeout((function(){var t=n.getBoundingClientRect();e(t)}))});return(0,r.createElement)("div",{ref:l,className:n.visible?rn:"",key:n.id,style:d},"custom"===n.type?u(n.message,n):c?c(n):(0,r.createElement)(tn,{toast:n,position:a}))})))};t.default=b}}]);