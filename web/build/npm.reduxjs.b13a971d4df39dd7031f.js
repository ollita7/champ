"use strict";(self.webpackChunktopology_app=self.webpackChunktopology_app||[]).push([[979],{9829:function(n,t,e){e.r(t),e.d(t,{__DO_NOT_USE__ActionTypes:function(){return o.Kf},applyMiddleware:function(){return o.md},bindActionCreators:function(){return o.DE},combineReducers:function(){return o.UY},compose:function(){return o.qC},createStore:function(){return o.MT},MiddlewareArray:function(){return E},configureStore:function(){return M},createAction:function(){return k},createAsyncThunk:function(){return J},createDraftSafeSelector:function(){return O},createEntityAdapter:function(){return U},createImmutableStateInvariantMiddleware:function(){return _},createNextState:function(){return i.ZP},createReducer:function(){return D},createSelector:function(){return u.P1},createSerializableStateInvariantMiddleware:function(){return I},createSlice:function(){return R},current:function(){return i.Vk},findNonSerializableValue:function(){return P},freeze:function(){return i.vV},getDefaultMiddleware:function(){return C},getType:function(){return x},isAllOf:function(){return $},isAnyOf:function(){return Q},isAsyncThunkAction:function(){return an},isDraft:function(){return i.mv},isFulfilled:function(){return un},isImmutableDefault:function(){return S},isPending:function(){return en},isPlain:function(){return A},isPlainObject:function(){return j},isRejected:function(){return rn},isRejectedWithValue:function(){return on},miniSerializeError:function(){return Y},nanoid:function(){return W},original:function(){return i.Js},unwrapResult:function(){return K}});var r,i=e(8172),o=e(4890),u=e(573),a=e(3894),c=(r=function(n,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])},r(n,t)},function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function e(){this.constructor=n}r(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),f=function(n,t){var e,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=u.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(n,u)}catch(n){o=[6,n],r=0}finally{e=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},l=function(n,t){for(var e=0,r=t.length,i=n.length;e<r;e++,i++)n[i]=t[e];return n},s=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=function(n,t,e){return t in n?s(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e},b=function(n,t){for(var e in t||(t={}))y.call(t,e)&&g(n,e,t[e]);if(v)for(var r=0,i=v(t);r<i.length;r++){e=i[r];h.call(t,e)&&g(n,e,t[e])}return n},m=function(n,t){return d(n,p(t))},O=function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=u.P1.apply(void 0,n),r=function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return e.apply(void 0,l([(0,i.mv)(n)?(0,i.Vk)(n):n],t))};return r},w="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!==arguments.length)return"object"==typeof arguments[0]?o.qC:o.qC.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;function j(n){if("object"!=typeof n||null===n)return!1;var t=Object.getPrototypeOf(n);if(null===t)return!0;for(var e=t;null!==Object.getPrototypeOf(e);)e=Object.getPrototypeOf(e);return t===e}var E=function(n){function t(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];var i=n.apply(this,e)||this;return Object.setPrototypeOf(i,t.prototype),i}return c(t,n),Object.defineProperty(t,Symbol.species,{get:function(){return t},enumerable:!1,configurable:!0}),t.prototype.concat=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return n.prototype.concat.apply(this,t)},t.prototype.prepend=function(){for(var n=[],e=0;e<arguments.length;e++)n[e]=arguments[e];return 1===n.length&&Array.isArray(n[0])?new(t.bind.apply(t,l([void 0],n[0].concat(this)))):new(t.bind.apply(t,l([void 0],n.concat(this))))},t}(Array);function S(n){return"object"!=typeof n||null==n||Object.isFrozen(n)}function _(n){return void 0===n&&(n={}),function(){return function(n){return function(t){return n(t)}}}}function A(n){var t=typeof n;return"undefined"===t||null===n||"string"===t||"boolean"===t||"number"===t||Array.isArray(n)||j(n)}function P(n,t,e,r,i){var o;if(void 0===t&&(t=""),void 0===e&&(e=A),void 0===i&&(i=[]),!e(n))return{keyPath:t||"<root>",value:n};if("object"!=typeof n||null===n)return!1;for(var u=null!=r?r(n):Object.entries(n),a=i.length>0,c=0,f=u;c<f.length;c++){var l=f[c],s=l[0],d=l[1],p=t?t+"."+s:s;if(!(a&&i.indexOf(p)>=0)){if(!e(d))return{keyPath:p,value:d};if("object"==typeof d&&(o=P(d,p,e,r,i)))return o}}return!1}function I(n){return void 0===n&&(n={}),function(){return function(n){return function(t){return n(t)}}}}function C(n){void 0===n&&(n={});var t=n.thunk,e=void 0===t||t,r=(n.immutableCheck,n.serializableCheck,new E);return e&&("boolean"==typeof e?r.push(a.Z):r.push(a.Z.withExtraArgument(e.extraArgument))),r}function M(n){var t,e=function(n){return C(n)},r=n||{},i=r.reducer,u=void 0===i?void 0:i,a=r.middleware,c=void 0===a?e():a,f=r.devTools,s=void 0===f||f,d=r.preloadedState,p=void 0===d?void 0:d,v=r.enhancers,y=void 0===v?void 0:v;if("function"==typeof u)t=u;else{if(!j(u))throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');t=(0,o.UY)(u)}var h=c;"function"==typeof h&&(h=h(e));var g=o.md.apply(void 0,h),m=o.qC;s&&(m=w(b({trace:!1},"object"==typeof s&&s)));var O=[g];Array.isArray(y)?O=l([g],y):"function"==typeof y&&(O=y(O));var E=m.apply(void 0,O);return(0,o.MT)(t,p,E)}function k(n,t){function e(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(t){var i=t.apply(void 0,e);if(!i)throw new Error("prepareAction did not return an object");return b(b({type:n,payload:i.payload},"meta"in i&&{meta:i.meta}),"error"in i&&{error:i.error})}return{type:n,payload:e[0]}}return e.toString=function(){return""+n},e.type=n,e.match=function(t){return t.type===n},e}function T(n){return["type","payload","error","meta"].indexOf(n)>-1}function x(n){return""+n}function q(n){var t,e={},r=[],i={addCase:function(n,t){var r="string"==typeof n?n:n.type;if(r in e)throw new Error("addCase cannot be called with two reducers for the same action type");return e[r]=t,i},addMatcher:function(n,t){return r.push({matcher:n,reducer:t}),i},addDefaultCase:function(n){return t=n,i}};return n(i),[e,r,t]}function D(n,t,e,r){void 0===e&&(e=[]);var o,u="function"==typeof t?q(t):[t,e,r],a=u[0],c=u[1],f=u[2];if("function"==typeof n)o=function(){return(0,i.ZP)(n(),(function(){}))};else{var s=(0,i.ZP)(n,(function(){}));o=function(){return s}}function d(n,t){void 0===n&&(n=o());var e=l([a[t.type]],c.filter((function(n){return(0,n.matcher)(t)})).map((function(n){return n.reducer})));return 0===e.filter((function(n){return!!n})).length&&(e=[f]),e.reduce((function(n,e){if(e){var r;if((0,i.mv)(n))return void 0===(r=e(n,t))?n:r;if((0,i.o$)(n))return(0,i.ZP)(n,(function(n){return e(n,t)}));if(void 0===(r=e(n,t))){if(null===n)return n;throw Error("A case reducer on a non-draftable value must not return undefined")}return r}return n}),n)}return d.getInitialState=o,d}function R(n){var t=n.name;if(!t)throw new Error("`name` is a required option for createSlice");var e,r="function"==typeof n.initialState?n.initialState:(0,i.ZP)(n.initialState,(function(){})),o=n.reducers||{},u=Object.keys(o),a={},c={},f={};function l(){var t="function"==typeof n.extraReducers?q(n.extraReducers):[n.extraReducers],e=t[0],i=void 0===e?{}:e,o=t[1],u=void 0===o?[]:o,a=t[2],f=void 0===a?void 0:a,l=b(b({},i),c);return D(r,l,u,f)}return u.forEach((function(n){var e,r,i=o[n],u=t+"/"+n;"reducer"in i?(e=i.reducer,r=i.prepare):e=i,a[n]=e,c[u]=e,f[n]=r?k(u,r):k(u)})),{name:t,reducer:function(n,t){return e||(e=l()),e(n,t)},actions:f,caseReducers:a,getInitialState:function(){return e||(e=l()),e.getInitialState()}}}function V(n){return function(t,e){function r(n){return j(t=n)&&"string"==typeof t.type&&Object.keys(t).every(T);var t}var o=function(t){r(e)?n(e.payload,t):n(e,t)};return(0,i.mv)(t)?(o(t),t):(0,i.ZP)(t,o)}}function N(n,t){return t(n)}function X(n){return Array.isArray(n)||(n=Object.values(n)),n}function Z(n,t,e){for(var r=[],i=[],o=0,u=n=X(n);o<u.length;o++){var a=u[o],c=N(a,t);c in e.entities?i.push({id:c,changes:a}):r.push(a)}return[r,i]}function z(n){function t(t,e){var r=N(t,n);r in e.entities||(e.ids.push(r),e.entities[r]=t)}function e(n,e){for(var r=0,i=n=X(n);r<i.length;r++){t(i[r],e)}}function r(t,e){var r=N(t,n);r in e.entities||e.ids.push(r),e.entities[r]=t}function i(n,t){var e=!1;n.forEach((function(n){n in t.entities&&(delete t.entities[n],e=!0)})),e&&(t.ids=t.ids.filter((function(n){return n in t.entities})))}function o(t,e){var r={},i={};if(t.forEach((function(n){n.id in e.entities&&(i[n.id]={id:n.id,changes:b(b({},i[n.id]?i[n.id].changes:null),n.changes)})})),(t=Object.values(i)).length>0){var o=t.filter((function(t){return function(t,e,r){var i=r.entities[e.id],o=Object.assign({},i,e.changes),u=N(o,n),a=u!==e.id;return a&&(t[e.id]=u,delete r.entities[e.id]),r.entities[u]=o,a}(r,t,e)})).length>0;o&&(e.ids=e.ids.map((function(n){return r[n]||n})))}}function u(t,r){var i=Z(t,n,r),u=i[0];o(i[1],r),e(u,r)}return{removeAll:(a=function(n){Object.assign(n,{ids:[],entities:{}})},c=V((function(n,t){return a(t)})),function(n){return c(n,void 0)}),addOne:V(t),addMany:V(e),setOne:V(r),setMany:V((function(n,t){for(var e=0,i=n=X(n);e<i.length;e++){r(i[e],t)}})),setAll:V((function(n,t){n=X(n),t.ids=[],t.entities={},e(n,t)})),updateOne:V((function(n,t){return o([n],t)})),updateMany:V(o),upsertOne:V((function(n,t){return u([n],t)})),upsertMany:V(u),removeOne:V((function(n,t){return i([n],t)})),removeMany:V(i)};var a,c}function L(n,t){var e=z(n);function r(t,e){var r=(t=X(t)).filter((function(t){return!(N(t,n)in e.entities)}));0!==r.length&&a(r,e)}function i(n,t){0!==(n=X(n)).length&&a(n,t)}function o(t,e){var r=[];t.forEach((function(t){return function(t,e,r){if(!(e.id in r.entities))return!1;var i=r.entities[e.id],o=Object.assign({},i,e.changes),u=N(o,n);return delete r.entities[e.id],t.push(o),u!==e.id}(r,t,e)})),0!==r.length&&a(r,e)}function u(t,e){var i=Z(t,n,e),u=i[0];o(i[1],e),r(u,e)}function a(e,r){e.forEach((function(t){r.entities[n(t)]=t}));var i=Object.values(r.entities);i.sort(t);var o=i.map(n);(function(n,t){if(n.length!==t.length)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(n[e]!==t[e])return!1;return!0})(r.ids,o)||(r.ids=o)}return{removeOne:e.removeOne,removeMany:e.removeMany,removeAll:e.removeAll,addOne:V((function(n,t){return r([n],t)})),updateOne:V((function(n,t){return o([n],t)})),upsertOne:V((function(n,t){return u([n],t)})),setOne:V((function(n,t){return i([n],t)})),setMany:V(i),setAll:V((function(n,t){n=X(n),t.entities={},t.ids=[],r(n,t)})),addMany:V(r),updateMany:V(o),upsertMany:V(u)}}function U(n){void 0===n&&(n={});var t=b({sortComparer:!1,selectId:function(n){return n.id}},n),e=t.selectId,r=t.sortComparer,i={getInitialState:function(n){return void 0===n&&(n={}),Object.assign({ids:[],entities:{}},n)}},o={getSelectors:function(n){var t=function(n){return n.ids},e=function(n){return n.entities},r=O(t,e,(function(n,t){return n.map((function(n){return t[n]}))})),i=function(n,t){return t},o=function(n,t){return n[t]},u=O(t,(function(n){return n.length}));if(!n)return{selectIds:t,selectEntities:e,selectAll:r,selectTotal:u,selectById:O(e,i,o)};var a=O(n,e);return{selectIds:O(n,t),selectEntities:a,selectAll:O(n,r),selectTotal:O(n,u),selectById:O(a,i,o)}}},u=r?L(e,r):z(e);return b(b(b({selectId:e,sortComparer:r},i),o),u)}var W=function(n){void 0===n&&(n=21);for(var t="",e=n;e--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},G=["name","message","stack","code"],B=function(n,t){this.payload=n,this.meta=t},F=function(n,t){this.payload=n,this.meta=t},Y=function(n){if("object"==typeof n&&null!==n){for(var t={},e=0,r=G;e<r.length;e++){var i=r[e];"string"==typeof n[i]&&(t[i]=n[i])}return t}return{message:String(n)}};function J(n,t,e){var r=k(n+"/fulfilled",(function(n,t,e,r){return{payload:n,meta:m(b({},r||{}),{arg:e,requestId:t,requestStatus:"fulfilled"})}})),i=k(n+"/pending",(function(n,t,e){return{payload:void 0,meta:m(b({},e||{}),{arg:t,requestId:n,requestStatus:"pending"})}})),o=k(n+"/rejected",(function(n,t,r,i,o){return{payload:i,error:(e&&e.serializeError||Y)(n||"Rejected"),meta:m(b({},o||{}),{arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:"rejected",aborted:"AbortError"===(null==n?void 0:n.name),condition:"ConditionError"===(null==n?void 0:n.name)})}})),u="undefined"!=typeof AbortController?AbortController:function(){function n(){this.signal={aborted:!1,addEventListener:function(){},dispatchEvent:function(){return!1},onabort:function(){},removeEventListener:function(){}}}return n.prototype.abort=function(){0},n}();return Object.assign((function(n){return function(a,c,l){var s,d=(null==e?void 0:e.idGenerator)?e.idGenerator(n):W(),p=new u,v=new Promise((function(n,t){return p.signal.addEventListener("abort",(function(){return t({name:"AbortError",message:s||"Aborted"})}))})),y=!1;var h=function(){return u=this,s=null,h=function(){var u,s,h,g,b;return f(this,(function(f){switch(f.label){case 0:return f.trys.push([0,4,,5]),g=null==(u=null==e?void 0:e.condition)?void 0:u.call(e,n,{getState:c,extra:l}),null===(m=g)||"object"!=typeof m||"function"!=typeof m.then?[3,2]:[4,g];case 1:g=f.sent(),f.label=2;case 2:if(!1===g)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};return y=!0,a(i(d,n,null==(s=null==e?void 0:e.getPendingMeta)?void 0:s.call(e,{requestId:d,arg:n},{getState:c,extra:l}))),[4,Promise.race([v,Promise.resolve(t(n,{dispatch:a,getState:c,extra:l,requestId:d,signal:p.signal,rejectWithValue:function(n,t){return new B(n,t)},fulfillWithValue:function(n,t){return new F(n,t)}})).then((function(t){if(t instanceof B)throw t;return t instanceof F?r(t.payload,d,n,t.meta):r(t,d,n)}))])];case 3:return h=f.sent(),[3,5];case 4:return b=f.sent(),h=b instanceof B?o(null,d,n,b.payload,b.meta):o(b,d,n),[3,5];case 5:return e&&!e.dispatchConditionRejection&&o.match(h)&&h.meta.condition||a(h),[2,h]}var m}))},new Promise((function(n,t){var e=function(n){try{i(h.next(n))}catch(n){t(n)}},r=function(n){try{i(h.throw(n))}catch(n){t(n)}},i=function(t){return t.done?n(t.value):Promise.resolve(t.value).then(e,r)};i((h=h.apply(u,s)).next())}));var u,s,h}();return Object.assign(h,{abort:function(n){y&&(s=n,p.abort())},requestId:d,arg:n,unwrap:function(){return h.then(K)}})}}),{pending:i,rejected:o,fulfilled:r,typePrefix:n})}function K(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}var H=function(n,t){return(e=n)&&"function"==typeof e.match?n.match(t):n(t);var e};function Q(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(t){return n.some((function(n){return H(n,t)}))}}function $(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return function(t){return n.every((function(n){return H(n,t)}))}}function nn(n,t){if(!n||!n.meta)return!1;var e="string"==typeof n.meta.requestId,r=t.indexOf(n.meta.requestStatus)>-1;return e&&r}function tn(n){return"function"==typeof n[0]&&"pending"in n[0]&&"fulfilled"in n[0]&&"rejected"in n[0]}function en(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return 0===n.length?function(n){return nn(n,["pending"])}:tn(n)?function(t){var e=n.map((function(n){return n.pending}));return Q.apply(void 0,e)(t)}:en()(n[0])}function rn(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return 0===n.length?function(n){return nn(n,["rejected"])}:tn(n)?function(t){var e=n.map((function(n){return n.rejected}));return Q.apply(void 0,e)(t)}:rn()(n[0])}function on(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];var e=function(n){return n&&n.meta&&n.meta.rejectedWithValue};return 0===n.length||tn(n)?function(t){return $(rn.apply(void 0,n),e)(t)}:on()(n[0])}function un(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return 0===n.length?function(n){return nn(n,["fulfilled"])}:tn(n)?function(t){var e=n.map((function(n){return n.fulfilled}));return Q.apply(void 0,e)(t)}:un()(n[0])}function an(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];return 0===n.length?function(n){return nn(n,["pending","fulfilled","rejected"])}:tn(n)?function(t){for(var e=[],r=0,i=n;r<i.length;r++){var o=i[r];e.push(o.pending,o.rejected,o.fulfilled)}return Q.apply(void 0,e)(t)}:an()(n[0])}(0,i.pV)()}}]);