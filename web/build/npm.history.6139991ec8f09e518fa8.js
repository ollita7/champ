"use strict";(self.webpackChunktopology_app=self.webpackChunktopology_app||[]).push([[162],{5648:function(n,t,e){e.d(t,{aU:function(){return r},lX:function(){return c},q_:function(){return l},PP:function(){return f},Ep:function(){return d},cP:function(){return g}});var r,a=e(7462);!function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"}(r||(r={}));var u=function(n){return n};var o="beforeunload",i="popstate";function c(n){void 0===n&&(n={});var t=n.window,e=void 0===t?document.defaultView:t,c=e.history;function l(){var n=e.location,t=n.pathname,r=n.search,a=n.hash,o=c.state||{};return[o.idx,u({pathname:t,search:r,hash:a,state:o.usr||null,key:o.key||"default"})]}var f=null;e.addEventListener(i,(function(){if(f)b.call(f),f=null;else{var n=r.Pop,t=l(),e=t[0],a=t[1];if(b.length){if(null!=e){var u=k-e;u&&(f={action:n,location:a,retry:function(){Z(-1*u)}},Z(u))}}else L(n)}}));var s=r.Pop,y=l(),k=y[0],m=y[1],P=p(),b=p();function x(n){return"string"==typeof n?n:d(n)}function E(n,t){return void 0===t&&(t=null),u((0,a.Z)({pathname:m.pathname,hash:"",search:""},"string"==typeof n?g(n):n,{state:t,key:v()}))}function w(n,t){return[{usr:n.state,key:n.key,idx:t},x(n)]}function S(n,t,e){return!b.length||(b.call({action:n,location:t,retry:e}),!1)}function L(n){s=n;var t=l();k=t[0],m=t[1],P.call({action:s,location:m})}function Z(n){c.go(n)}null==k&&(k=0,c.replaceState((0,a.Z)({},c.state,{idx:k}),""));var R={get action(){return s},get location(){return m},createHref:x,push:function n(t,a){var u=r.Push,o=E(t,a);if(S(u,o,(function(){n(t,a)}))){var i=w(o,k+1),l=i[0],f=i[1];try{c.pushState(l,"",f)}catch(n){e.location.assign(f)}L(u)}},replace:function n(t,e){var a=r.Replace,u=E(t,e);if(S(a,u,(function(){n(t,e)}))){var o=w(u,k),i=o[0],l=o[1];c.replaceState(i,"",l),L(a)}},go:Z,back:function(){Z(-1)},forward:function(){Z(1)},listen:function(n){return P.push(n)},block:function(n){var t=b.push(n);return 1===b.length&&e.addEventListener(o,h),function(){t(),b.length||e.removeEventListener(o,h)}}};return R}function l(n){void 0===n&&(n={});var t=n.window,e=void 0===t?document.defaultView:t,c=e.history;function l(){var n=g(e.location.hash.substr(1)),t=n.pathname,r=void 0===t?"/":t,a=n.search,o=void 0===a?"":a,i=n.hash,l=void 0===i?"":i,f=c.state||{};return[f.idx,u({pathname:r,search:o,hash:l,state:f.usr||null,key:f.key||"default"})]}var f=null;function s(){if(f)x.call(f),f=null;else{var n=r.Pop,t=l(),e=t[0],a=t[1];if(x.length){if(null!=e){var u=m-e;u&&(f={action:n,location:a,retry:function(){R(-1*u)}},R(u))}}else Z(n)}}e.addEventListener(i,s),e.addEventListener("hashchange",(function(){d(l()[1])!==d(P)&&s()}));var y=r.Pop,k=l(),m=k[0],P=k[1],b=p(),x=p();function E(n){return function(){var n=document.querySelector("base"),t="";if(n&&n.getAttribute("href")){var r=e.location.href,a=r.indexOf("#");t=-1===a?r:r.slice(0,a)}return t}()+"#"+("string"==typeof n?n:d(n))}function w(n,t){return void 0===t&&(t=null),u((0,a.Z)({pathname:P.pathname,hash:"",search:""},"string"==typeof n?g(n):n,{state:t,key:v()}))}function S(n,t){return[{usr:n.state,key:n.key,idx:t},E(n)]}function L(n,t,e){return!x.length||(x.call({action:n,location:t,retry:e}),!1)}function Z(n){y=n;var t=l();m=t[0],P=t[1],b.call({action:y,location:P})}function R(n){c.go(n)}null==m&&(m=0,c.replaceState((0,a.Z)({},c.state,{idx:m}),""));var A={get action(){return y},get location(){return P},createHref:E,push:function n(t,a){var u=r.Push,o=w(t,a);if(L(u,o,(function(){n(t,a)}))){var i=S(o,m+1),l=i[0],f=i[1];try{c.pushState(l,"",f)}catch(n){e.location.assign(f)}Z(u)}},replace:function n(t,e){var a=r.Replace,u=w(t,e);if(L(a,u,(function(){n(t,e)}))){var o=S(u,m),i=o[0],l=o[1];c.replaceState(i,"",l),Z(a)}},go:R,back:function(){R(-1)},forward:function(){R(1)},listen:function(n){return b.push(n)},block:function(n){var t=x.push(n);return 1===x.length&&e.addEventListener(o,h),function(){t(),x.length||e.removeEventListener(o,h)}}};return A}function f(n){void 0===n&&(n={});var t=n,e=t.initialEntries,o=void 0===e?["/"]:e,i=t.initialIndex,c=o.map((function(n){return u((0,a.Z)({pathname:"/",search:"",hash:"",state:null,key:v()},"string"==typeof n?g(n):n))})),l=s(null==i?c.length-1:i,0,c.length-1),f=r.Pop,h=c[l],y=p(),k=p();function m(n,t){return void 0===t&&(t=null),u((0,a.Z)({pathname:h.pathname,search:"",hash:""},"string"==typeof n?g(n):n,{state:t,key:v()}))}function P(n,t,e){return!k.length||(k.call({action:n,location:t,retry:e}),!1)}function b(n,t){f=n,h=t,y.call({action:f,location:h})}function x(n){var t=s(l+n,0,c.length-1),e=r.Pop,a=c[t];P(e,a,(function(){x(n)}))&&(l=t,b(e,a))}var E={get index(){return l},get action(){return f},get location(){return h},createHref:function(n){return"string"==typeof n?n:d(n)},push:function n(t,e){var a=r.Push,u=m(t,e);P(a,u,(function(){n(t,e)}))&&(l+=1,c.splice(l,c.length,u),b(a,u))},replace:function n(t,e){var a=r.Replace,u=m(t,e);P(a,u,(function(){n(t,e)}))&&(c[l]=u,b(a,u))},go:x,back:function(){x(-1)},forward:function(){x(1)},listen:function(n){return y.push(n)},block:function(n){return k.push(n)}};return E}function s(n,t,e){return Math.min(Math.max(n,t),e)}function h(n){n.preventDefault(),n.returnValue=""}function p(){var n=[];return{get length(){return n.length},push:function(t){return n.push(t),function(){n=n.filter((function(n){return n!==t}))}},call:function(t){n.forEach((function(n){return n&&n(t)}))}}}function v(){return Math.random().toString(36).substr(2,8)}function d(n){var t=n.pathname,e=void 0===t?"/":t,r=n.search,a=void 0===r?"":r,u=n.hash,o=void 0===u?"":u;return a&&"?"!==a&&(e+="?"===a.charAt(0)?a:"?"+a),o&&"#"!==o&&(e+="#"===o.charAt(0)?o:"#"+o),e}function g(n){var t={};if(n){var e=n.indexOf("#");e>=0&&(t.hash=n.substr(e),n=n.substr(0,e));var r=n.indexOf("?");r>=0&&(t.search=n.substr(r),n=n.substr(0,r)),n&&(t.pathname=n)}return t}}}]);