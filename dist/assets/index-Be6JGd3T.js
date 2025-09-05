function FS(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const l=Object.getOwnPropertyDescriptor(r,s);l&&Object.defineProperty(e,s,l.get?l:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=n(s);fetch(s.href,l)}})();var yo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function rm(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function US(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var n=function r(){return this instanceof r?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};n.prototype=t.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(e).forEach(function(r){var s=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:function(){return e[r]}})}),n}var Cy={exports:{}},$c={},Py={exports:{}},_e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),HS=Symbol.for("react.portal"),qS=Symbol.for("react.fragment"),WS=Symbol.for("react.strict_mode"),ZS=Symbol.for("react.profiler"),VS=Symbol.for("react.provider"),GS=Symbol.for("react.context"),YS=Symbol.for("react.forward_ref"),KS=Symbol.for("react.suspense"),XS=Symbol.for("react.memo"),QS=Symbol.for("react.lazy"),Gg=Symbol.iterator;function JS(e){return e===null||typeof e!="object"?null:(e=Gg&&e[Gg]||e["@@iterator"],typeof e=="function"?e:null)}var Ey={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Ty=Object.assign,Ly={};function Os(e,t,n){this.props=e,this.context=t,this.refs=Ly,this.updater=n||Ey}Os.prototype.isReactComponent={};Os.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Os.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Oy(){}Oy.prototype=Os.prototype;function im(e,t,n){this.props=e,this.context=t,this.refs=Ly,this.updater=n||Ey}var sm=im.prototype=new Oy;sm.constructor=im;Ty(sm,Os.prototype);sm.isPureReactComponent=!0;var Yg=Array.isArray,Ay=Object.prototype.hasOwnProperty,om={current:null},Iy={key:!0,ref:!0,__self:!0,__source:!0};function Ry(e,t,n){var r,s={},l=null,c=null;if(t!=null)for(r in t.ref!==void 0&&(c=t.ref),t.key!==void 0&&(l=""+t.key),t)Ay.call(t,r)&&!Iy.hasOwnProperty(r)&&(s[r]=t[r]);var d=arguments.length-2;if(d===1)s.children=n;else if(1<d){for(var f=Array(d),m=0;m<d;m++)f[m]=arguments[m+2];s.children=f}if(e&&e.defaultProps)for(r in d=e.defaultProps,d)s[r]===void 0&&(s[r]=d[r]);return{$$typeof:aa,type:e,key:l,ref:c,props:s,_owner:om.current}}function ek(e,t){return{$$typeof:aa,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function am(e){return typeof e=="object"&&e!==null&&e.$$typeof===aa}function tk(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Kg=/\/+/g;function Ed(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tk(""+e.key):t.toString(36)}function pl(e,t,n,r,s){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var c=!1;if(e===null)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case aa:case HS:c=!0}}if(c)return c=e,s=s(c),e=r===""?"."+Ed(c,0):r,Yg(s)?(n="",e!=null&&(n=e.replace(Kg,"$&/")+"/"),pl(s,t,n,"",function(m){return m})):s!=null&&(am(s)&&(s=ek(s,n+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(Kg,"$&/")+"/")+e)),t.push(s)),1;if(c=0,r=r===""?".":r+":",Yg(e))for(var d=0;d<e.length;d++){l=e[d];var f=r+Ed(l,d);c+=pl(l,t,n,f,s)}else if(f=JS(e),typeof f=="function")for(e=f.call(e),d=0;!(l=e.next()).done;)l=l.value,f=r+Ed(l,d++),c+=pl(l,t,n,f,s);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function Wa(e,t,n){if(e==null)return e;var r=[],s=0;return pl(e,r,"","",function(l){return t.call(n,l,s++)}),r}function nk(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var zt={current:null},gl={transition:null},rk={ReactCurrentDispatcher:zt,ReactCurrentBatchConfig:gl,ReactCurrentOwner:om};function zy(){throw Error("act(...) is not supported in production builds of React.")}_e.Children={map:Wa,forEach:function(e,t,n){Wa(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wa(e,function(){t++}),t},toArray:function(e){return Wa(e,function(t){return t})||[]},only:function(e){if(!am(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};_e.Component=Os;_e.Fragment=qS;_e.Profiler=ZS;_e.PureComponent=im;_e.StrictMode=WS;_e.Suspense=KS;_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rk;_e.act=zy;_e.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Ty({},e.props),s=e.key,l=e.ref,c=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,c=om.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var d=e.type.defaultProps;for(f in t)Ay.call(t,f)&&!Iy.hasOwnProperty(f)&&(r[f]=t[f]===void 0&&d!==void 0?d[f]:t[f])}var f=arguments.length-2;if(f===1)r.children=n;else if(1<f){d=Array(f);for(var m=0;m<f;m++)d[m]=arguments[m+2];r.children=d}return{$$typeof:aa,type:e.type,key:s,ref:l,props:r,_owner:c}};_e.createContext=function(e){return e={$$typeof:GS,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:VS,_context:e},e.Consumer=e};_e.createElement=Ry;_e.createFactory=function(e){var t=Ry.bind(null,e);return t.type=e,t};_e.createRef=function(){return{current:null}};_e.forwardRef=function(e){return{$$typeof:YS,render:e}};_e.isValidElement=am;_e.lazy=function(e){return{$$typeof:QS,_payload:{_status:-1,_result:e},_init:nk}};_e.memo=function(e,t){return{$$typeof:XS,type:e,compare:t===void 0?null:t}};_e.startTransition=function(e){var t=gl.transition;gl.transition={};try{e()}finally{gl.transition=t}};_e.unstable_act=zy;_e.useCallback=function(e,t){return zt.current.useCallback(e,t)};_e.useContext=function(e){return zt.current.useContext(e)};_e.useDebugValue=function(){};_e.useDeferredValue=function(e){return zt.current.useDeferredValue(e)};_e.useEffect=function(e,t){return zt.current.useEffect(e,t)};_e.useId=function(){return zt.current.useId()};_e.useImperativeHandle=function(e,t,n){return zt.current.useImperativeHandle(e,t,n)};_e.useInsertionEffect=function(e,t){return zt.current.useInsertionEffect(e,t)};_e.useLayoutEffect=function(e,t){return zt.current.useLayoutEffect(e,t)};_e.useMemo=function(e,t){return zt.current.useMemo(e,t)};_e.useReducer=function(e,t,n){return zt.current.useReducer(e,t,n)};_e.useRef=function(e){return zt.current.useRef(e)};_e.useState=function(e){return zt.current.useState(e)};_e.useSyncExternalStore=function(e,t,n){return zt.current.useSyncExternalStore(e,t,n)};_e.useTransition=function(){return zt.current.useTransition()};_e.version="18.3.1";Py.exports=_e;var j=Py.exports;const wn=rm(j),jf=FS({__proto__:null,default:wn},[j]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ik=j,sk=Symbol.for("react.element"),ok=Symbol.for("react.fragment"),ak=Object.prototype.hasOwnProperty,lk=ik.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ck={key:!0,ref:!0,__self:!0,__source:!0};function My(e,t,n){var r,s={},l=null,c=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(c=t.ref);for(r in t)ak.call(t,r)&&!ck.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:sk,type:e,key:l,ref:c,props:s,_owner:lk.current}}$c.Fragment=ok;$c.jsx=My;$c.jsxs=My;Cy.exports=$c;var o=Cy.exports,Nf={},$y={exports:{}},an={},Dy={exports:{}},By={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,M){var D=P.length;P.push(M);e:for(;0<D;){var Y=D-1>>>1,R=P[Y];if(0<s(R,M))P[Y]=M,P[D]=R,D=Y;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var M=P[0],D=P.pop();if(D!==M){P[0]=D;e:for(var Y=0,R=P.length,ne=R>>>1;Y<ne;){var oe=2*(Y+1)-1,ce=P[oe],ae=oe+1,at=P[ae];if(0>s(ce,D))ae<R&&0>s(at,ce)?(P[Y]=at,P[ae]=D,Y=ae):(P[Y]=ce,P[oe]=D,Y=oe);else if(ae<R&&0>s(at,D))P[Y]=at,P[ae]=D,Y=ae;else break e}}return M}function s(P,M){var D=P.sortIndex-M.sortIndex;return D!==0?D:P.id-M.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();e.unstable_now=function(){return c.now()-d}}var f=[],m=[],p=1,v=null,b=3,k=!1,N=!1,w=!1,S=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(P){for(var M=n(m);M!==null;){if(M.callback===null)r(m);else if(M.startTime<=P)r(m),M.sortIndex=M.expirationTime,t(f,M);else break;M=n(m)}}function E(P){if(w=!1,x(P),!N)if(n(f)!==null)N=!0,ee(T);else{var M=n(m);M!==null&&V(E,M.startTime-P)}}function T(P,M){N=!1,w&&(w=!1,_(q),q=-1),k=!0;var D=b;try{for(x(M),v=n(f);v!==null&&(!(v.expirationTime>M)||P&&!B());){var Y=v.callback;if(typeof Y=="function"){v.callback=null,b=v.priorityLevel;var R=Y(v.expirationTime<=M);M=e.unstable_now(),typeof R=="function"?v.callback=R:v===n(f)&&r(f),x(M)}else r(f);v=n(f)}if(v!==null)var ne=!0;else{var oe=n(m);oe!==null&&V(E,oe.startTime-M),ne=!1}return ne}finally{v=null,b=D,k=!1}}var O=!1,I=null,q=-1,F=5,z=-1;function B(){return!(e.unstable_now()-z<F)}function Z(){if(I!==null){var P=e.unstable_now();z=P;var M=!0;try{M=I(!0,P)}finally{M?Q():(O=!1,I=null)}}else O=!1}var Q;if(typeof y=="function")Q=function(){y(Z)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,te=K.port2;K.port1.onmessage=Z,Q=function(){te.postMessage(null)}}else Q=function(){S(Z,0)};function ee(P){I=P,O||(O=!0,Q())}function V(P,M){q=S(function(){P(e.unstable_now())},M)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){N||k||(N=!0,ee(T))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return b},e.unstable_getFirstCallbackNode=function(){return n(f)},e.unstable_next=function(P){switch(b){case 1:case 2:case 3:var M=3;break;default:M=b}var D=b;b=M;try{return P()}finally{b=D}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,M){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var D=b;b=P;try{return M()}finally{b=D}},e.unstable_scheduleCallback=function(P,M,D){var Y=e.unstable_now();switch(typeof D=="object"&&D!==null?(D=D.delay,D=typeof D=="number"&&0<D?Y+D:Y):D=Y,P){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=D+R,P={id:p++,callback:M,priorityLevel:P,startTime:D,expirationTime:R,sortIndex:-1},D>Y?(P.sortIndex=D,t(m,P),n(f)===null&&P===n(m)&&(w?(_(q),q=-1):w=!0,V(E,D-Y))):(P.sortIndex=R,t(f,P),N||k||(N=!0,ee(T))),P},e.unstable_shouldYield=B,e.unstable_wrapCallback=function(P){var M=b;return function(){var D=b;b=M;try{return P.apply(this,arguments)}finally{b=D}}}})(By);Dy.exports=By;var uk=Dy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dk=j,sn=uk;function X(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Fy=new Set,Io={};function ki(e,t){fs(e,t),fs(e+"Capture",t)}function fs(e,t){for(Io[e]=t,e=0;e<t.length;e++)Fy.add(t[e])}var hr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=Object.prototype.hasOwnProperty,fk=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Xg={},Qg={};function hk(e){return Cf.call(Qg,e)?!0:Cf.call(Xg,e)?!1:fk.test(e)?Qg[e]=!0:(Xg[e]=!0,!1)}function mk(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function pk(e,t,n,r){if(t===null||typeof t>"u"||mk(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Mt(e,t,n,r,s,l,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=c}var bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){bt[e]=new Mt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];bt[t]=new Mt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){bt[e]=new Mt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){bt[e]=new Mt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){bt[e]=new Mt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){bt[e]=new Mt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){bt[e]=new Mt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){bt[e]=new Mt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){bt[e]=new Mt(e,5,!1,e.toLowerCase(),null,!1,!1)});var lm=/[\-:]([a-z])/g;function cm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(lm,cm);bt[t]=new Mt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(lm,cm);bt[t]=new Mt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(lm,cm);bt[t]=new Mt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){bt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!1,!1)});bt.xlinkHref=new Mt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){bt[e]=new Mt(e,1,!1,e.toLowerCase(),null,!0,!0)});function um(e,t,n,r){var s=bt.hasOwnProperty(t)?bt[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(pk(t,n,s,r)&&(n=null),r||s===null?hk(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var yr=dk.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Za=Symbol.for("react.element"),Ui=Symbol.for("react.portal"),Hi=Symbol.for("react.fragment"),dm=Symbol.for("react.strict_mode"),Pf=Symbol.for("react.profiler"),Uy=Symbol.for("react.provider"),Hy=Symbol.for("react.context"),fm=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),Tf=Symbol.for("react.suspense_list"),hm=Symbol.for("react.memo"),kr=Symbol.for("react.lazy"),qy=Symbol.for("react.offscreen"),Jg=Symbol.iterator;function ao(e){return e===null||typeof e!="object"?null:(e=Jg&&e[Jg]||e["@@iterator"],typeof e=="function"?e:null)}var Ge=Object.assign,Td;function xo(e){if(Td===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Td=t&&t[1]||""}return`
`+Td+e}var Ld=!1;function Od(e,t){if(!e||Ld)return"";Ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(m){var r=m}Reflect.construct(e,[],t)}else{try{t.call()}catch(m){r=m}e.call(t.prototype)}else{try{throw Error()}catch(m){r=m}e()}}catch(m){if(m&&r&&typeof m.stack=="string"){for(var s=m.stack.split(`
`),l=r.stack.split(`
`),c=s.length-1,d=l.length-1;1<=c&&0<=d&&s[c]!==l[d];)d--;for(;1<=c&&0<=d;c--,d--)if(s[c]!==l[d]){if(c!==1||d!==1)do if(c--,d--,0>d||s[c]!==l[d]){var f=`
`+s[c].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=c&&0<=d);break}}}finally{Ld=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?xo(e):""}function gk(e){switch(e.tag){case 5:return xo(e.type);case 16:return xo("Lazy");case 13:return xo("Suspense");case 19:return xo("SuspenseList");case 0:case 2:case 15:return e=Od(e.type,!1),e;case 11:return e=Od(e.type.render,!1),e;case 1:return e=Od(e.type,!0),e;default:return""}}function Lf(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Hi:return"Fragment";case Ui:return"Portal";case Pf:return"Profiler";case dm:return"StrictMode";case Ef:return"Suspense";case Tf:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Hy:return(e.displayName||"Context")+".Consumer";case Uy:return(e._context.displayName||"Context")+".Provider";case fm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case hm:return t=e.displayName||null,t!==null?t:Lf(e.type)||"Memo";case kr:t=e._payload,e=e._init;try{return Lf(e(t))}catch{}}return null}function vk(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Lf(t);case 8:return t===dm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Hr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function yk(e){var t=Wy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(c){r=""+c,l.call(this,c)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(c){r=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Va(e){e._valueTracker||(e._valueTracker=yk(e))}function Zy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Wy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Of(e,t){var n=t.checked;return Ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function e0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Hr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Vy(e,t){t=t.checked,t!=null&&um(e,"checked",t,!1)}function Af(e,t){Vy(e,t);var n=Hr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?If(e,t.type,n):t.hasOwnProperty("defaultValue")&&If(e,t.type,Hr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function t0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function If(e,t,n){(t!=="number"||Fl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var wo=Array.isArray;function ts(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Hr(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Rf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(X(91));return Ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function n0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(X(92));if(wo(n)){if(1<n.length)throw Error(X(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Hr(n)}}function Gy(e,t){var n=Hr(t.value),r=Hr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function r0(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Yy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function zf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Yy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ga,Ky=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ga.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ro(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ko={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xk=["Webkit","ms","Moz","O"];Object.keys(ko).forEach(function(e){xk.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ko[t]=ko[e]})});function Xy(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ko.hasOwnProperty(e)&&ko[e]?(""+t).trim():t+"px"}function Qy(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Xy(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var wk=Ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(wk[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(X(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(X(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(X(61))}if(t.style!=null&&typeof t.style!="object")throw Error(X(62))}}function $f(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Df=null;function mm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bf=null,ns=null,rs=null;function i0(e){if(e=ua(e)){if(typeof Bf!="function")throw Error(X(280));var t=e.stateNode;t&&(t=Hc(t),Bf(e.stateNode,e.type,t))}}function Jy(e){ns?rs?rs.push(e):rs=[e]:ns=e}function ex(){if(ns){var e=ns,t=rs;if(rs=ns=null,i0(e),t)for(e=0;e<t.length;e++)i0(t[e])}}function tx(e,t){return e(t)}function nx(){}var Ad=!1;function rx(e,t,n){if(Ad)return e(t,n);Ad=!0;try{return tx(e,t,n)}finally{Ad=!1,(ns!==null||rs!==null)&&(nx(),ex())}}function zo(e,t){var n=e.stateNode;if(n===null)return null;var r=Hc(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(X(231,t,typeof n));return n}var Ff=!1;if(hr)try{var lo={};Object.defineProperty(lo,"passive",{get:function(){Ff=!0}}),window.addEventListener("test",lo,lo),window.removeEventListener("test",lo,lo)}catch{Ff=!1}function bk(e,t,n,r,s,l,c,d,f){var m=Array.prototype.slice.call(arguments,3);try{t.apply(n,m)}catch(p){this.onError(p)}}var jo=!1,Ul=null,Hl=!1,Uf=null,_k={onError:function(e){jo=!0,Ul=e}};function Sk(e,t,n,r,s,l,c,d,f){jo=!1,Ul=null,bk.apply(_k,arguments)}function kk(e,t,n,r,s,l,c,d,f){if(Sk.apply(this,arguments),jo){if(jo){var m=Ul;jo=!1,Ul=null}else throw Error(X(198));Hl||(Hl=!0,Uf=m)}}function ji(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ix(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function s0(e){if(ji(e)!==e)throw Error(X(188))}function jk(e){var t=e.alternate;if(!t){if(t=ji(e),t===null)throw Error(X(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var l=s.alternate;if(l===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===l.child){for(l=s.child;l;){if(l===n)return s0(s),e;if(l===r)return s0(s),t;l=l.sibling}throw Error(X(188))}if(n.return!==r.return)n=s,r=l;else{for(var c=!1,d=s.child;d;){if(d===n){c=!0,n=s,r=l;break}if(d===r){c=!0,r=s,n=l;break}d=d.sibling}if(!c){for(d=l.child;d;){if(d===n){c=!0,n=l,r=s;break}if(d===r){c=!0,r=l,n=s;break}d=d.sibling}if(!c)throw Error(X(189))}}if(n.alternate!==r)throw Error(X(190))}if(n.tag!==3)throw Error(X(188));return n.stateNode.current===n?e:t}function sx(e){return e=jk(e),e!==null?ox(e):null}function ox(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=ox(e);if(t!==null)return t;e=e.sibling}return null}var ax=sn.unstable_scheduleCallback,o0=sn.unstable_cancelCallback,Nk=sn.unstable_shouldYield,Ck=sn.unstable_requestPaint,Qe=sn.unstable_now,Pk=sn.unstable_getCurrentPriorityLevel,pm=sn.unstable_ImmediatePriority,lx=sn.unstable_UserBlockingPriority,ql=sn.unstable_NormalPriority,Ek=sn.unstable_LowPriority,cx=sn.unstable_IdlePriority,Dc=null,Qn=null;function Tk(e){if(Qn&&typeof Qn.onCommitFiberRoot=="function")try{Qn.onCommitFiberRoot(Dc,e,void 0,(e.current.flags&128)===128)}catch{}}var An=Math.clz32?Math.clz32:Ak,Lk=Math.log,Ok=Math.LN2;function Ak(e){return e>>>=0,e===0?32:31-(Lk(e)/Ok|0)|0}var Ya=64,Ka=4194304;function bo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Wl(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,l=e.pingedLanes,c=n&268435455;if(c!==0){var d=c&~s;d!==0?r=bo(d):(l&=c,l!==0&&(r=bo(l)))}else c=n&~s,c!==0?r=bo(c):l!==0&&(r=bo(l));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,l=t&-t,s>=l||s===16&&(l&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-An(t),s=1<<n,r|=e[n],t&=~s;return r}function Ik(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rk(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,l=e.pendingLanes;0<l;){var c=31-An(l),d=1<<c,f=s[c];f===-1?(!(d&n)||d&r)&&(s[c]=Ik(d,t)):f<=t&&(e.expiredLanes|=d),l&=~d}}function Hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ux(){var e=Ya;return Ya<<=1,!(Ya&4194240)&&(Ya=64),e}function Id(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-An(t),e[t]=n}function zk(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-An(n),l=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~l}}function gm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-An(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Le=0;function dx(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var fx,vm,hx,mx,px,qf=!1,Xa=[],Ir=null,Rr=null,zr=null,Mo=new Map,$o=new Map,Cr=[],Mk="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function a0(e,t){switch(e){case"focusin":case"focusout":Ir=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Mo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(t.pointerId)}}function co(e,t,n,r,s,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:l,targetContainers:[s]},t!==null&&(t=ua(t),t!==null&&vm(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function $k(e,t,n,r,s){switch(t){case"focusin":return Ir=co(Ir,e,t,n,r,s),!0;case"dragenter":return Rr=co(Rr,e,t,n,r,s),!0;case"mouseover":return zr=co(zr,e,t,n,r,s),!0;case"pointerover":var l=s.pointerId;return Mo.set(l,co(Mo.get(l)||null,e,t,n,r,s)),!0;case"gotpointercapture":return l=s.pointerId,$o.set(l,co($o.get(l)||null,e,t,n,r,s)),!0}return!1}function gx(e){var t=si(e.target);if(t!==null){var n=ji(t);if(n!==null){if(t=n.tag,t===13){if(t=ix(n),t!==null){e.blockedOn=t,px(e.priority,function(){hx(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Df=r,n.target.dispatchEvent(r),Df=null}else return t=ua(n),t!==null&&vm(t),e.blockedOn=n,!1;t.shift()}return!0}function l0(e,t,n){vl(e)&&n.delete(t)}function Dk(){qf=!1,Ir!==null&&vl(Ir)&&(Ir=null),Rr!==null&&vl(Rr)&&(Rr=null),zr!==null&&vl(zr)&&(zr=null),Mo.forEach(l0),$o.forEach(l0)}function uo(e,t){e.blockedOn===t&&(e.blockedOn=null,qf||(qf=!0,sn.unstable_scheduleCallback(sn.unstable_NormalPriority,Dk)))}function Do(e){function t(s){return uo(s,e)}if(0<Xa.length){uo(Xa[0],e);for(var n=1;n<Xa.length;n++){var r=Xa[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ir!==null&&uo(Ir,e),Rr!==null&&uo(Rr,e),zr!==null&&uo(zr,e),Mo.forEach(t),$o.forEach(t),n=0;n<Cr.length;n++)r=Cr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Cr.length&&(n=Cr[0],n.blockedOn===null);)gx(n),n.blockedOn===null&&Cr.shift()}var is=yr.ReactCurrentBatchConfig,Zl=!0;function Bk(e,t,n,r){var s=Le,l=is.transition;is.transition=null;try{Le=1,ym(e,t,n,r)}finally{Le=s,is.transition=l}}function Fk(e,t,n,r){var s=Le,l=is.transition;is.transition=null;try{Le=4,ym(e,t,n,r)}finally{Le=s,is.transition=l}}function ym(e,t,n,r){if(Zl){var s=Wf(e,t,n,r);if(s===null)qd(e,t,r,Vl,n),a0(e,r);else if($k(s,e,t,n,r))r.stopPropagation();else if(a0(e,r),t&4&&-1<Mk.indexOf(e)){for(;s!==null;){var l=ua(s);if(l!==null&&fx(l),l=Wf(e,t,n,r),l===null&&qd(e,t,r,Vl,n),l===s)break;s=l}s!==null&&r.stopPropagation()}else qd(e,t,r,null,n)}}var Vl=null;function Wf(e,t,n,r){if(Vl=null,e=mm(r),e=si(e),e!==null)if(t=ji(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ix(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Vl=e,null}function vx(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Pk()){case pm:return 1;case lx:return 4;case ql:case Ek:return 16;case cx:return 536870912;default:return 16}default:return 16}}var Er=null,xm=null,yl=null;function yx(){if(yl)return yl;var e,t=xm,n=t.length,r,s="value"in Er?Er.value:Er.textContent,l=s.length;for(e=0;e<n&&t[e]===s[e];e++);var c=n-e;for(r=1;r<=c&&t[n-r]===s[l-r];r++);return yl=s.slice(e,1<r?1-r:void 0)}function xl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qa(){return!0}function c0(){return!1}function ln(e){function t(n,r,s,l,c){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=l,this.target=c,this.currentTarget=null;for(var d in e)e.hasOwnProperty(d)&&(n=e[d],this[d]=n?n(l):l[d]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Qa:c0,this.isPropagationStopped=c0,this}return Ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),t}var As={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wm=ln(As),ca=Ge({},As,{view:0,detail:0}),Uk=ln(ca),Rd,zd,fo,Bc=Ge({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bm,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fo&&(fo&&e.type==="mousemove"?(Rd=e.screenX-fo.screenX,zd=e.screenY-fo.screenY):zd=Rd=0,fo=e),Rd)},movementY:function(e){return"movementY"in e?e.movementY:zd}}),u0=ln(Bc),Hk=Ge({},Bc,{dataTransfer:0}),qk=ln(Hk),Wk=Ge({},ca,{relatedTarget:0}),Md=ln(Wk),Zk=Ge({},As,{animationName:0,elapsedTime:0,pseudoElement:0}),Vk=ln(Zk),Gk=Ge({},As,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yk=ln(Gk),Kk=Ge({},As,{data:0}),d0=ln(Kk),Xk={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Jk={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ej(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Jk[e])?!!t[e]:!1}function bm(){return ej}var tj=Ge({},ca,{key:function(e){if(e.key){var t=Xk[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=xl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qk[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bm,charCode:function(e){return e.type==="keypress"?xl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?xl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),nj=ln(tj),rj=Ge({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),f0=ln(rj),ij=Ge({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bm}),sj=ln(ij),oj=Ge({},As,{propertyName:0,elapsedTime:0,pseudoElement:0}),aj=ln(oj),lj=Ge({},Bc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),cj=ln(lj),uj=[9,13,27,32],_m=hr&&"CompositionEvent"in window,No=null;hr&&"documentMode"in document&&(No=document.documentMode);var dj=hr&&"TextEvent"in window&&!No,xx=hr&&(!_m||No&&8<No&&11>=No),h0=" ",m0=!1;function wx(e,t){switch(e){case"keyup":return uj.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bx(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qi=!1;function fj(e,t){switch(e){case"compositionend":return bx(t);case"keypress":return t.which!==32?null:(m0=!0,h0);case"textInput":return e=t.data,e===h0&&m0?null:e;default:return null}}function hj(e,t){if(qi)return e==="compositionend"||!_m&&wx(e,t)?(e=yx(),yl=xm=Er=null,qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return xx&&t.locale!=="ko"?null:t.data;default:return null}}var mj={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!mj[e.type]:t==="textarea"}function _x(e,t,n,r){Jy(r),t=Gl(t,"onChange"),0<t.length&&(n=new wm("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Co=null,Bo=null;function pj(e){Ax(e,0)}function Fc(e){var t=Vi(e);if(Zy(t))return e}function gj(e,t){if(e==="change")return t}var Sx=!1;if(hr){var $d;if(hr){var Dd="oninput"in document;if(!Dd){var g0=document.createElement("div");g0.setAttribute("oninput","return;"),Dd=typeof g0.oninput=="function"}$d=Dd}else $d=!1;Sx=$d&&(!document.documentMode||9<document.documentMode)}function v0(){Co&&(Co.detachEvent("onpropertychange",kx),Bo=Co=null)}function kx(e){if(e.propertyName==="value"&&Fc(Bo)){var t=[];_x(t,Bo,e,mm(e)),rx(pj,t)}}function vj(e,t,n){e==="focusin"?(v0(),Co=t,Bo=n,Co.attachEvent("onpropertychange",kx)):e==="focusout"&&v0()}function yj(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Fc(Bo)}function xj(e,t){if(e==="click")return Fc(t)}function wj(e,t){if(e==="input"||e==="change")return Fc(t)}function bj(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var zn=typeof Object.is=="function"?Object.is:bj;function Fo(e,t){if(zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Cf.call(t,s)||!zn(e[s],t[s]))return!1}return!0}function y0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function x0(e,t){var n=y0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=y0(n)}}function jx(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?jx(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Nx(){for(var e=window,t=Fl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Fl(e.document)}return t}function Sm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function _j(e){var t=Nx(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&jx(n.ownerDocument.documentElement,n)){if(r!==null&&Sm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,l=Math.min(r.start,s);r=r.end===void 0?l:Math.min(r.end,s),!e.extend&&l>r&&(s=r,r=l,l=s),s=x0(n,l);var c=x0(n,r);s&&c&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),l>r?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Sj=hr&&"documentMode"in document&&11>=document.documentMode,Wi=null,Zf=null,Po=null,Vf=!1;function w0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||Wi==null||Wi!==Fl(r)||(r=Wi,"selectionStart"in r&&Sm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Po&&Fo(Po,r)||(Po=r,r=Gl(Zf,"onSelect"),0<r.length&&(t=new wm("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Wi)))}function Ja(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Zi={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},Bd={},Cx={};hr&&(Cx=document.createElement("div").style,"AnimationEvent"in window||(delete Zi.animationend.animation,delete Zi.animationiteration.animation,delete Zi.animationstart.animation),"TransitionEvent"in window||delete Zi.transitionend.transition);function Uc(e){if(Bd[e])return Bd[e];if(!Zi[e])return e;var t=Zi[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Cx)return Bd[e]=t[n];return e}var Px=Uc("animationend"),Ex=Uc("animationiteration"),Tx=Uc("animationstart"),Lx=Uc("transitionend"),Ox=new Map,b0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(e,t){Ox.set(e,t),ki(t,[e])}for(var Fd=0;Fd<b0.length;Fd++){var Ud=b0[Fd],kj=Ud.toLowerCase(),jj=Ud[0].toUpperCase()+Ud.slice(1);Wr(kj,"on"+jj)}Wr(Px,"onAnimationEnd");Wr(Ex,"onAnimationIteration");Wr(Tx,"onAnimationStart");Wr("dblclick","onDoubleClick");Wr("focusin","onFocus");Wr("focusout","onBlur");Wr(Lx,"onTransitionEnd");fs("onMouseEnter",["mouseout","mouseover"]);fs("onMouseLeave",["mouseout","mouseover"]);fs("onPointerEnter",["pointerout","pointerover"]);fs("onPointerLeave",["pointerout","pointerover"]);ki("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ki("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ki("onBeforeInput",["compositionend","keypress","textInput","paste"]);ki("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ki("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Nj=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function _0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kk(r,t,void 0,e),e.currentTarget=null}function Ax(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var l=void 0;if(t)for(var c=r.length-1;0<=c;c--){var d=r[c],f=d.instance,m=d.currentTarget;if(d=d.listener,f!==l&&s.isPropagationStopped())break e;_0(s,d,m),l=f}else for(c=0;c<r.length;c++){if(d=r[c],f=d.instance,m=d.currentTarget,d=d.listener,f!==l&&s.isPropagationStopped())break e;_0(s,d,m),l=f}}}if(Hl)throw e=Uf,Hl=!1,Uf=null,e}function De(e,t){var n=t[Qf];n===void 0&&(n=t[Qf]=new Set);var r=e+"__bubble";n.has(r)||(Ix(t,e,2,!1),n.add(r))}function Hd(e,t,n){var r=0;t&&(r|=4),Ix(n,e,r,t)}var el="_reactListening"+Math.random().toString(36).slice(2);function Uo(e){if(!e[el]){e[el]=!0,Fy.forEach(function(n){n!=="selectionchange"&&(Nj.has(n)||Hd(n,!1,e),Hd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[el]||(t[el]=!0,Hd("selectionchange",!1,t))}}function Ix(e,t,n,r){switch(vx(t)){case 1:var s=Bk;break;case 4:s=Fk;break;default:s=ym}n=s.bind(null,t,n,e),s=void 0,!Ff||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function qd(e,t,n,r,s){var l=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var c=r.tag;if(c===3||c===4){var d=r.stateNode.containerInfo;if(d===s||d.nodeType===8&&d.parentNode===s)break;if(c===4)for(c=r.return;c!==null;){var f=c.tag;if((f===3||f===4)&&(f=c.stateNode.containerInfo,f===s||f.nodeType===8&&f.parentNode===s))return;c=c.return}for(;d!==null;){if(c=si(d),c===null)return;if(f=c.tag,f===5||f===6){r=l=c;continue e}d=d.parentNode}}r=r.return}rx(function(){var m=l,p=mm(n),v=[];e:{var b=Ox.get(e);if(b!==void 0){var k=wm,N=e;switch(e){case"keypress":if(xl(n)===0)break e;case"keydown":case"keyup":k=nj;break;case"focusin":N="focus",k=Md;break;case"focusout":N="blur",k=Md;break;case"beforeblur":case"afterblur":k=Md;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=u0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=qk;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=sj;break;case Px:case Ex:case Tx:k=Vk;break;case Lx:k=aj;break;case"scroll":k=Uk;break;case"wheel":k=cj;break;case"copy":case"cut":case"paste":k=Yk;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=f0}var w=(t&4)!==0,S=!w&&e==="scroll",_=w?b!==null?b+"Capture":null:b;w=[];for(var y=m,x;y!==null;){x=y;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,_!==null&&(E=zo(y,_),E!=null&&w.push(Ho(y,E,x)))),S)break;y=y.return}0<w.length&&(b=new k(b,N,null,n,p),v.push({event:b,listeners:w}))}}if(!(t&7)){e:{if(b=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",b&&n!==Df&&(N=n.relatedTarget||n.fromElement)&&(si(N)||N[mr]))break e;if((k||b)&&(b=p.window===p?p:(b=p.ownerDocument)?b.defaultView||b.parentWindow:window,k?(N=n.relatedTarget||n.toElement,k=m,N=N?si(N):null,N!==null&&(S=ji(N),N!==S||N.tag!==5&&N.tag!==6)&&(N=null)):(k=null,N=m),k!==N)){if(w=u0,E="onMouseLeave",_="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(w=f0,E="onPointerLeave",_="onPointerEnter",y="pointer"),S=k==null?b:Vi(k),x=N==null?b:Vi(N),b=new w(E,y+"leave",k,n,p),b.target=S,b.relatedTarget=x,E=null,si(p)===m&&(w=new w(_,y+"enter",N,n,p),w.target=x,w.relatedTarget=S,E=w),S=E,k&&N)t:{for(w=k,_=N,y=0,x=w;x;x=Bi(x))y++;for(x=0,E=_;E;E=Bi(E))x++;for(;0<y-x;)w=Bi(w),y--;for(;0<x-y;)_=Bi(_),x--;for(;y--;){if(w===_||_!==null&&w===_.alternate)break t;w=Bi(w),_=Bi(_)}w=null}else w=null;k!==null&&S0(v,b,k,w,!1),N!==null&&S!==null&&S0(v,S,N,w,!0)}}e:{if(b=m?Vi(m):window,k=b.nodeName&&b.nodeName.toLowerCase(),k==="select"||k==="input"&&b.type==="file")var T=gj;else if(p0(b))if(Sx)T=wj;else{T=yj;var O=vj}else(k=b.nodeName)&&k.toLowerCase()==="input"&&(b.type==="checkbox"||b.type==="radio")&&(T=xj);if(T&&(T=T(e,m))){_x(v,T,n,p);break e}O&&O(e,b,m),e==="focusout"&&(O=b._wrapperState)&&O.controlled&&b.type==="number"&&If(b,"number",b.value)}switch(O=m?Vi(m):window,e){case"focusin":(p0(O)||O.contentEditable==="true")&&(Wi=O,Zf=m,Po=null);break;case"focusout":Po=Zf=Wi=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,w0(v,n,p);break;case"selectionchange":if(Sj)break;case"keydown":case"keyup":w0(v,n,p)}var I;if(_m)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else qi?wx(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(xx&&n.locale!=="ko"&&(qi||q!=="onCompositionStart"?q==="onCompositionEnd"&&qi&&(I=yx()):(Er=p,xm="value"in Er?Er.value:Er.textContent,qi=!0)),O=Gl(m,q),0<O.length&&(q=new d0(q,e,null,n,p),v.push({event:q,listeners:O}),I?q.data=I:(I=bx(n),I!==null&&(q.data=I)))),(I=dj?fj(e,n):hj(e,n))&&(m=Gl(m,"onBeforeInput"),0<m.length&&(p=new d0("onBeforeInput","beforeinput",null,n,p),v.push({event:p,listeners:m}),p.data=I))}Ax(v,t)})}function Ho(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Gl(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,l=s.stateNode;s.tag===5&&l!==null&&(s=l,l=zo(e,n),l!=null&&r.unshift(Ho(e,l,s)),l=zo(e,t),l!=null&&r.push(Ho(e,l,s))),e=e.return}return r}function Bi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function S0(e,t,n,r,s){for(var l=t._reactName,c=[];n!==null&&n!==r;){var d=n,f=d.alternate,m=d.stateNode;if(f!==null&&f===r)break;d.tag===5&&m!==null&&(d=m,s?(f=zo(n,l),f!=null&&c.unshift(Ho(n,f,d))):s||(f=zo(n,l),f!=null&&c.push(Ho(n,f,d)))),n=n.return}c.length!==0&&e.push({event:t,listeners:c})}var Cj=/\r\n?/g,Pj=/\u0000|\uFFFD/g;function k0(e){return(typeof e=="string"?e:""+e).replace(Cj,`
`).replace(Pj,"")}function tl(e,t,n){if(t=k0(t),k0(e)!==t&&n)throw Error(X(425))}function Yl(){}var Gf=null,Yf=null;function Kf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xf=typeof setTimeout=="function"?setTimeout:void 0,Ej=typeof clearTimeout=="function"?clearTimeout:void 0,j0=typeof Promise=="function"?Promise:void 0,Tj=typeof queueMicrotask=="function"?queueMicrotask:typeof j0<"u"?function(e){return j0.resolve(null).then(e).catch(Lj)}:Xf;function Lj(e){setTimeout(function(){throw e})}function Wd(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),Do(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Do(t)}function Mr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function N0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Is=Math.random().toString(36).slice(2),Xn="__reactFiber$"+Is,qo="__reactProps$"+Is,mr="__reactContainer$"+Is,Qf="__reactEvents$"+Is,Oj="__reactListeners$"+Is,Aj="__reactHandles$"+Is;function si(e){var t=e[Xn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[mr]||n[Xn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=N0(e);e!==null;){if(n=e[Xn])return n;e=N0(e)}return t}e=n,n=e.parentNode}return null}function ua(e){return e=e[Xn]||e[mr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(X(33))}function Hc(e){return e[qo]||null}var Jf=[],Gi=-1;function Zr(e){return{current:e}}function Fe(e){0>Gi||(e.current=Jf[Gi],Jf[Gi]=null,Gi--)}function Me(e,t){Gi++,Jf[Gi]=e.current,e.current=t}var qr={},Ct=Zr(qr),Zt=Zr(!1),gi=qr;function hs(e,t){var n=e.type.contextTypes;if(!n)return qr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},l;for(l in n)s[l]=t[l];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Vt(e){return e=e.childContextTypes,e!=null}function Kl(){Fe(Zt),Fe(Ct)}function C0(e,t,n){if(Ct.current!==qr)throw Error(X(168));Me(Ct,t),Me(Zt,n)}function Rx(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(X(108,vk(e)||"Unknown",s));return Ge({},n,r)}function Xl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qr,gi=Ct.current,Me(Ct,e),Me(Zt,Zt.current),!0}function P0(e,t,n){var r=e.stateNode;if(!r)throw Error(X(169));n?(e=Rx(e,t,gi),r.__reactInternalMemoizedMergedChildContext=e,Fe(Zt),Fe(Ct),Me(Ct,e)):Fe(Zt),Me(Zt,n)}var lr=null,qc=!1,Zd=!1;function zx(e){lr===null?lr=[e]:lr.push(e)}function Ij(e){qc=!0,zx(e)}function Vr(){if(!Zd&&lr!==null){Zd=!0;var e=0,t=Le;try{var n=lr;for(Le=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}lr=null,qc=!1}catch(s){throw lr!==null&&(lr=lr.slice(e+1)),ax(pm,Vr),s}finally{Le=t,Zd=!1}}return null}var Yi=[],Ki=0,Ql=null,Jl=0,pn=[],gn=0,vi=null,cr=1,ur="";function ri(e,t){Yi[Ki++]=Jl,Yi[Ki++]=Ql,Ql=e,Jl=t}function Mx(e,t,n){pn[gn++]=cr,pn[gn++]=ur,pn[gn++]=vi,vi=e;var r=cr;e=ur;var s=32-An(r)-1;r&=~(1<<s),n+=1;var l=32-An(t)+s;if(30<l){var c=s-s%5;l=(r&(1<<c)-1).toString(32),r>>=c,s-=c,cr=1<<32-An(t)+s|n<<s|r,ur=l+e}else cr=1<<l|n<<s|r,ur=e}function km(e){e.return!==null&&(ri(e,1),Mx(e,1,0))}function jm(e){for(;e===Ql;)Ql=Yi[--Ki],Yi[Ki]=null,Jl=Yi[--Ki],Yi[Ki]=null;for(;e===vi;)vi=pn[--gn],pn[gn]=null,ur=pn[--gn],pn[gn]=null,cr=pn[--gn],pn[gn]=null}var nn=null,tn=null,He=!1,On=null;function $x(e,t){var n=vn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function E0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,nn=e,tn=Mr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,nn=e,tn=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=vi!==null?{id:cr,overflow:ur}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=vn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,nn=e,tn=null,!0):!1;default:return!1}}function eh(e){return(e.mode&1)!==0&&(e.flags&128)===0}function th(e){if(He){var t=tn;if(t){var n=t;if(!E0(e,t)){if(eh(e))throw Error(X(418));t=Mr(n.nextSibling);var r=nn;t&&E0(e,t)?$x(r,n):(e.flags=e.flags&-4097|2,He=!1,nn=e)}}else{if(eh(e))throw Error(X(418));e.flags=e.flags&-4097|2,He=!1,nn=e}}}function T0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;nn=e}function nl(e){if(e!==nn)return!1;if(!He)return T0(e),He=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Kf(e.type,e.memoizedProps)),t&&(t=tn)){if(eh(e))throw Dx(),Error(X(418));for(;t;)$x(e,t),t=Mr(t.nextSibling)}if(T0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(X(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){tn=Mr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}tn=null}}else tn=nn?Mr(e.stateNode.nextSibling):null;return!0}function Dx(){for(var e=tn;e;)e=Mr(e.nextSibling)}function ms(){tn=nn=null,He=!1}function Nm(e){On===null?On=[e]:On.push(e)}var Rj=yr.ReactCurrentBatchConfig;function ho(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(X(309));var r=n.stateNode}if(!r)throw Error(X(147,e));var s=r,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(c){var d=s.refs;c===null?delete d[l]:d[l]=c},t._stringRef=l,t)}if(typeof e!="string")throw Error(X(284));if(!n._owner)throw Error(X(290,e))}return e}function rl(e,t){throw e=Object.prototype.toString.call(t),Error(X(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function L0(e){var t=e._init;return t(e._payload)}function Bx(e){function t(_,y){if(e){var x=_.deletions;x===null?(_.deletions=[y],_.flags|=16):x.push(y)}}function n(_,y){if(!e)return null;for(;y!==null;)t(_,y),y=y.sibling;return null}function r(_,y){for(_=new Map;y!==null;)y.key!==null?_.set(y.key,y):_.set(y.index,y),y=y.sibling;return _}function s(_,y){return _=Fr(_,y),_.index=0,_.sibling=null,_}function l(_,y,x){return _.index=x,e?(x=_.alternate,x!==null?(x=x.index,x<y?(_.flags|=2,y):x):(_.flags|=2,y)):(_.flags|=1048576,y)}function c(_){return e&&_.alternate===null&&(_.flags|=2),_}function d(_,y,x,E){return y===null||y.tag!==6?(y=Jd(x,_.mode,E),y.return=_,y):(y=s(y,x),y.return=_,y)}function f(_,y,x,E){var T=x.type;return T===Hi?p(_,y,x.props.children,E,x.key):y!==null&&(y.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===kr&&L0(T)===y.type)?(E=s(y,x.props),E.ref=ho(_,y,x),E.return=_,E):(E=Nl(x.type,x.key,x.props,null,_.mode,E),E.ref=ho(_,y,x),E.return=_,E)}function m(_,y,x,E){return y===null||y.tag!==4||y.stateNode.containerInfo!==x.containerInfo||y.stateNode.implementation!==x.implementation?(y=ef(x,_.mode,E),y.return=_,y):(y=s(y,x.children||[]),y.return=_,y)}function p(_,y,x,E,T){return y===null||y.tag!==7?(y=di(x,_.mode,E,T),y.return=_,y):(y=s(y,x),y.return=_,y)}function v(_,y,x){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Jd(""+y,_.mode,x),y.return=_,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Za:return x=Nl(y.type,y.key,y.props,null,_.mode,x),x.ref=ho(_,null,y),x.return=_,x;case Ui:return y=ef(y,_.mode,x),y.return=_,y;case kr:var E=y._init;return v(_,E(y._payload),x)}if(wo(y)||ao(y))return y=di(y,_.mode,x,null),y.return=_,y;rl(_,y)}return null}function b(_,y,x,E){var T=y!==null?y.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return T!==null?null:d(_,y,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:return x.key===T?f(_,y,x,E):null;case Ui:return x.key===T?m(_,y,x,E):null;case kr:return T=x._init,b(_,y,T(x._payload),E)}if(wo(x)||ao(x))return T!==null?null:p(_,y,x,E,null);rl(_,x)}return null}function k(_,y,x,E,T){if(typeof E=="string"&&E!==""||typeof E=="number")return _=_.get(x)||null,d(y,_,""+E,T);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Za:return _=_.get(E.key===null?x:E.key)||null,f(y,_,E,T);case Ui:return _=_.get(E.key===null?x:E.key)||null,m(y,_,E,T);case kr:var O=E._init;return k(_,y,x,O(E._payload),T)}if(wo(E)||ao(E))return _=_.get(x)||null,p(y,_,E,T,null);rl(y,E)}return null}function N(_,y,x,E){for(var T=null,O=null,I=y,q=y=0,F=null;I!==null&&q<x.length;q++){I.index>q?(F=I,I=null):F=I.sibling;var z=b(_,I,x[q],E);if(z===null){I===null&&(I=F);break}e&&I&&z.alternate===null&&t(_,I),y=l(z,y,q),O===null?T=z:O.sibling=z,O=z,I=F}if(q===x.length)return n(_,I),He&&ri(_,q),T;if(I===null){for(;q<x.length;q++)I=v(_,x[q],E),I!==null&&(y=l(I,y,q),O===null?T=I:O.sibling=I,O=I);return He&&ri(_,q),T}for(I=r(_,I);q<x.length;q++)F=k(I,_,q,x[q],E),F!==null&&(e&&F.alternate!==null&&I.delete(F.key===null?q:F.key),y=l(F,y,q),O===null?T=F:O.sibling=F,O=F);return e&&I.forEach(function(B){return t(_,B)}),He&&ri(_,q),T}function w(_,y,x,E){var T=ao(x);if(typeof T!="function")throw Error(X(150));if(x=T.call(x),x==null)throw Error(X(151));for(var O=T=null,I=y,q=y=0,F=null,z=x.next();I!==null&&!z.done;q++,z=x.next()){I.index>q?(F=I,I=null):F=I.sibling;var B=b(_,I,z.value,E);if(B===null){I===null&&(I=F);break}e&&I&&B.alternate===null&&t(_,I),y=l(B,y,q),O===null?T=B:O.sibling=B,O=B,I=F}if(z.done)return n(_,I),He&&ri(_,q),T;if(I===null){for(;!z.done;q++,z=x.next())z=v(_,z.value,E),z!==null&&(y=l(z,y,q),O===null?T=z:O.sibling=z,O=z);return He&&ri(_,q),T}for(I=r(_,I);!z.done;q++,z=x.next())z=k(I,_,q,z.value,E),z!==null&&(e&&z.alternate!==null&&I.delete(z.key===null?q:z.key),y=l(z,y,q),O===null?T=z:O.sibling=z,O=z);return e&&I.forEach(function(Z){return t(_,Z)}),He&&ri(_,q),T}function S(_,y,x,E){if(typeof x=="object"&&x!==null&&x.type===Hi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Za:e:{for(var T=x.key,O=y;O!==null;){if(O.key===T){if(T=x.type,T===Hi){if(O.tag===7){n(_,O.sibling),y=s(O,x.props.children),y.return=_,_=y;break e}}else if(O.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===kr&&L0(T)===O.type){n(_,O.sibling),y=s(O,x.props),y.ref=ho(_,O,x),y.return=_,_=y;break e}n(_,O);break}else t(_,O);O=O.sibling}x.type===Hi?(y=di(x.props.children,_.mode,E,x.key),y.return=_,_=y):(E=Nl(x.type,x.key,x.props,null,_.mode,E),E.ref=ho(_,y,x),E.return=_,_=E)}return c(_);case Ui:e:{for(O=x.key;y!==null;){if(y.key===O)if(y.tag===4&&y.stateNode.containerInfo===x.containerInfo&&y.stateNode.implementation===x.implementation){n(_,y.sibling),y=s(y,x.children||[]),y.return=_,_=y;break e}else{n(_,y);break}else t(_,y);y=y.sibling}y=ef(x,_.mode,E),y.return=_,_=y}return c(_);case kr:return O=x._init,S(_,y,O(x._payload),E)}if(wo(x))return N(_,y,x,E);if(ao(x))return w(_,y,x,E);rl(_,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,y!==null&&y.tag===6?(n(_,y.sibling),y=s(y,x),y.return=_,_=y):(n(_,y),y=Jd(x,_.mode,E),y.return=_,_=y),c(_)):n(_,y)}return S}var ps=Bx(!0),Fx=Bx(!1),ec=Zr(null),tc=null,Xi=null,Cm=null;function Pm(){Cm=Xi=tc=null}function Em(e){var t=ec.current;Fe(ec),e._currentValue=t}function nh(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ss(e,t){tc=e,Cm=Xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qt=!0),e.firstContext=null)}function bn(e){var t=e._currentValue;if(Cm!==e)if(e={context:e,memoizedValue:t,next:null},Xi===null){if(tc===null)throw Error(X(308));Xi=e,tc.dependencies={lanes:0,firstContext:e}}else Xi=Xi.next=e;return t}var oi=null;function Tm(e){oi===null?oi=[e]:oi.push(e)}function Ux(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,Tm(t)):(n.next=s.next,s.next=n),t.interleaved=n,pr(e,r)}function pr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var jr=!1;function Lm(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hx(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function dr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $r(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,ke&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,pr(e,n)}return s=r.interleaved,s===null?(t.next=t,Tm(r)):(t.next=s.next,s.next=t),r.interleaved=t,pr(e,n)}function wl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gm(e,n)}}function O0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var c={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?s=l=c:l=l.next=c,n=n.next}while(n!==null);l===null?s=l=t:l=l.next=t}else s=l=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:l,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function nc(e,t,n,r){var s=e.updateQueue;jr=!1;var l=s.firstBaseUpdate,c=s.lastBaseUpdate,d=s.shared.pending;if(d!==null){s.shared.pending=null;var f=d,m=f.next;f.next=null,c===null?l=m:c.next=m,c=f;var p=e.alternate;p!==null&&(p=p.updateQueue,d=p.lastBaseUpdate,d!==c&&(d===null?p.firstBaseUpdate=m:d.next=m,p.lastBaseUpdate=f))}if(l!==null){var v=s.baseState;c=0,p=m=f=null,d=l;do{var b=d.lane,k=d.eventTime;if((r&b)===b){p!==null&&(p=p.next={eventTime:k,lane:0,tag:d.tag,payload:d.payload,callback:d.callback,next:null});e:{var N=e,w=d;switch(b=t,k=n,w.tag){case 1:if(N=w.payload,typeof N=="function"){v=N.call(k,v,b);break e}v=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=w.payload,b=typeof N=="function"?N.call(k,v,b):N,b==null)break e;v=Ge({},v,b);break e;case 2:jr=!0}}d.callback!==null&&d.lane!==0&&(e.flags|=64,b=s.effects,b===null?s.effects=[d]:b.push(d))}else k={eventTime:k,lane:b,tag:d.tag,payload:d.payload,callback:d.callback,next:null},p===null?(m=p=k,f=v):p=p.next=k,c|=b;if(d=d.next,d===null){if(d=s.shared.pending,d===null)break;b=d,d=b.next,b.next=null,s.lastBaseUpdate=b,s.shared.pending=null}}while(!0);if(p===null&&(f=v),s.baseState=f,s.firstBaseUpdate=m,s.lastBaseUpdate=p,t=s.shared.interleaved,t!==null){s=t;do c|=s.lane,s=s.next;while(s!==t)}else l===null&&(s.shared.lanes=0);xi|=c,e.lanes=c,e.memoizedState=v}}function A0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(X(191,s));s.call(r)}}}var da={},Jn=Zr(da),Wo=Zr(da),Zo=Zr(da);function ai(e){if(e===da)throw Error(X(174));return e}function Om(e,t){switch(Me(Zo,t),Me(Wo,e),Me(Jn,da),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:zf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=zf(t,e)}Fe(Jn),Me(Jn,t)}function gs(){Fe(Jn),Fe(Wo),Fe(Zo)}function qx(e){ai(Zo.current);var t=ai(Jn.current),n=zf(t,e.type);t!==n&&(Me(Wo,e),Me(Jn,n))}function Am(e){Wo.current===e&&(Fe(Jn),Fe(Wo))}var Ze=Zr(0);function rc(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Vd=[];function Im(){for(var e=0;e<Vd.length;e++)Vd[e]._workInProgressVersionPrimary=null;Vd.length=0}var bl=yr.ReactCurrentDispatcher,Gd=yr.ReactCurrentBatchConfig,yi=0,Ve=null,ct=null,ft=null,ic=!1,Eo=!1,Vo=0,zj=0;function _t(){throw Error(X(321))}function Rm(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!zn(e[n],t[n]))return!1;return!0}function zm(e,t,n,r,s,l){if(yi=l,Ve=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,bl.current=e===null||e.memoizedState===null?Bj:Fj,e=n(r,s),Eo){l=0;do{if(Eo=!1,Vo=0,25<=l)throw Error(X(301));l+=1,ft=ct=null,t.updateQueue=null,bl.current=Uj,e=n(r,s)}while(Eo)}if(bl.current=sc,t=ct!==null&&ct.next!==null,yi=0,ft=ct=Ve=null,ic=!1,t)throw Error(X(300));return e}function Mm(){var e=Vo!==0;return Vo=0,e}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ft===null?Ve.memoizedState=ft=e:ft=ft.next=e,ft}function _n(){if(ct===null){var e=Ve.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=ft===null?Ve.memoizedState:ft.next;if(t!==null)ft=t,ct=e;else{if(e===null)throw Error(X(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},ft===null?Ve.memoizedState=ft=e:ft=ft.next=e}return ft}function Go(e,t){return typeof t=="function"?t(e):t}function Yd(e){var t=_n(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var r=ct,s=r.baseQueue,l=n.pending;if(l!==null){if(s!==null){var c=s.next;s.next=l.next,l.next=c}r.baseQueue=s=l,n.pending=null}if(s!==null){l=s.next,r=r.baseState;var d=c=null,f=null,m=l;do{var p=m.lane;if((yi&p)===p)f!==null&&(f=f.next={lane:0,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),r=m.hasEagerState?m.eagerState:e(r,m.action);else{var v={lane:p,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null};f===null?(d=f=v,c=r):f=f.next=v,Ve.lanes|=p,xi|=p}m=m.next}while(m!==null&&m!==l);f===null?c=r:f.next=d,zn(r,t.memoizedState)||(qt=!0),t.memoizedState=r,t.baseState=c,t.baseQueue=f,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do l=s.lane,Ve.lanes|=l,xi|=l,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kd(e){var t=_n(),n=t.queue;if(n===null)throw Error(X(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,l=t.memoizedState;if(s!==null){n.pending=null;var c=s=s.next;do l=e(l,c.action),c=c.next;while(c!==s);zn(l,t.memoizedState)||(qt=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,r]}function Wx(){}function Zx(e,t){var n=Ve,r=_n(),s=t(),l=!zn(r.memoizedState,s);if(l&&(r.memoizedState=s,qt=!0),r=r.queue,$m(Yx.bind(null,n,r,e),[e]),r.getSnapshot!==t||l||ft!==null&&ft.memoizedState.tag&1){if(n.flags|=2048,Yo(9,Gx.bind(null,n,r,s,t),void 0,null),mt===null)throw Error(X(349));yi&30||Vx(n,t,s)}return s}function Vx(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gx(e,t,n,r){t.value=n,t.getSnapshot=r,Kx(t)&&Xx(e)}function Yx(e,t,n){return n(function(){Kx(t)&&Xx(e)})}function Kx(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!zn(e,n)}catch{return!0}}function Xx(e){var t=pr(e,1);t!==null&&In(t,e,1,-1)}function I0(e){var t=Zn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:e},t.queue=e,e=e.dispatch=Dj.bind(null,Ve,e),[t.memoizedState,e]}function Yo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ve.updateQueue,t===null?(t={lastEffect:null,stores:null},Ve.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Qx(){return _n().memoizedState}function _l(e,t,n,r){var s=Zn();Ve.flags|=e,s.memoizedState=Yo(1|t,n,void 0,r===void 0?null:r)}function Wc(e,t,n,r){var s=_n();r=r===void 0?null:r;var l=void 0;if(ct!==null){var c=ct.memoizedState;if(l=c.destroy,r!==null&&Rm(r,c.deps)){s.memoizedState=Yo(t,n,l,r);return}}Ve.flags|=e,s.memoizedState=Yo(1|t,n,l,r)}function R0(e,t){return _l(8390656,8,e,t)}function $m(e,t){return Wc(2048,8,e,t)}function Jx(e,t){return Wc(4,2,e,t)}function ew(e,t){return Wc(4,4,e,t)}function tw(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nw(e,t,n){return n=n!=null?n.concat([e]):null,Wc(4,4,tw.bind(null,t,e),n)}function Dm(){}function rw(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rm(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function iw(e,t){var n=_n();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Rm(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sw(e,t,n){return yi&21?(zn(n,t)||(n=ux(),Ve.lanes|=n,xi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qt=!0),e.memoizedState=n)}function Mj(e,t){var n=Le;Le=n!==0&&4>n?n:4,e(!0);var r=Gd.transition;Gd.transition={};try{e(!1),t()}finally{Le=n,Gd.transition=r}}function ow(){return _n().memoizedState}function $j(e,t,n){var r=Br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},aw(e))lw(t,n);else if(n=Ux(e,t,n,r),n!==null){var s=It();In(n,e,r,s),cw(n,t,r)}}function Dj(e,t,n){var r=Br(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(aw(e))lw(t,s);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var c=t.lastRenderedState,d=l(c,n);if(s.hasEagerState=!0,s.eagerState=d,zn(d,c)){var f=t.interleaved;f===null?(s.next=s,Tm(t)):(s.next=f.next,f.next=s),t.interleaved=s;return}}catch{}finally{}n=Ux(e,t,s,r),n!==null&&(s=It(),In(n,e,r,s),cw(n,t,r))}}function aw(e){var t=e.alternate;return e===Ve||t!==null&&t===Ve}function lw(e,t){Eo=ic=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function cw(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,gm(e,n)}}var sc={readContext:bn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},Bj={readContext:bn,useCallback:function(e,t){return Zn().memoizedState=[e,t===void 0?null:t],e},useContext:bn,useEffect:R0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,_l(4194308,4,tw.bind(null,t,e),n)},useLayoutEffect:function(e,t){return _l(4194308,4,e,t)},useInsertionEffect:function(e,t){return _l(4,2,e,t)},useMemo:function(e,t){var n=Zn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Zn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=$j.bind(null,Ve,e),[r.memoizedState,e]},useRef:function(e){var t=Zn();return e={current:e},t.memoizedState=e},useState:I0,useDebugValue:Dm,useDeferredValue:function(e){return Zn().memoizedState=e},useTransition:function(){var e=I0(!1),t=e[0];return e=Mj.bind(null,e[1]),Zn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ve,s=Zn();if(He){if(n===void 0)throw Error(X(407));n=n()}else{if(n=t(),mt===null)throw Error(X(349));yi&30||Vx(r,t,n)}s.memoizedState=n;var l={value:n,getSnapshot:t};return s.queue=l,R0(Yx.bind(null,r,l,e),[e]),r.flags|=2048,Yo(9,Gx.bind(null,r,l,n,t),void 0,null),n},useId:function(){var e=Zn(),t=mt.identifierPrefix;if(He){var n=ur,r=cr;n=(r&~(1<<32-An(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Vo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=zj++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fj={readContext:bn,useCallback:rw,useContext:bn,useEffect:$m,useImperativeHandle:nw,useInsertionEffect:Jx,useLayoutEffect:ew,useMemo:iw,useReducer:Yd,useRef:Qx,useState:function(){return Yd(Go)},useDebugValue:Dm,useDeferredValue:function(e){var t=_n();return sw(t,ct.memoizedState,e)},useTransition:function(){var e=Yd(Go)[0],t=_n().memoizedState;return[e,t]},useMutableSource:Wx,useSyncExternalStore:Zx,useId:ow,unstable_isNewReconciler:!1},Uj={readContext:bn,useCallback:rw,useContext:bn,useEffect:$m,useImperativeHandle:nw,useInsertionEffect:Jx,useLayoutEffect:ew,useMemo:iw,useReducer:Kd,useRef:Qx,useState:function(){return Kd(Go)},useDebugValue:Dm,useDeferredValue:function(e){var t=_n();return ct===null?t.memoizedState=e:sw(t,ct.memoizedState,e)},useTransition:function(){var e=Kd(Go)[0],t=_n().memoizedState;return[e,t]},useMutableSource:Wx,useSyncExternalStore:Zx,useId:ow,unstable_isNewReconciler:!1};function Tn(e,t){if(e&&e.defaultProps){t=Ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function rh(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Zc={isMounted:function(e){return(e=e._reactInternals)?ji(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=It(),s=Br(e),l=dr(r,s);l.payload=t,n!=null&&(l.callback=n),t=$r(e,l,s),t!==null&&(In(t,e,s,r),wl(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=It(),s=Br(e),l=dr(r,s);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=$r(e,l,s),t!==null&&(In(t,e,s,r),wl(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=It(),r=Br(e),s=dr(n,r);s.tag=2,t!=null&&(s.callback=t),t=$r(e,s,r),t!==null&&(In(t,e,r,n),wl(t,e,r))}};function z0(e,t,n,r,s,l,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,l,c):t.prototype&&t.prototype.isPureReactComponent?!Fo(n,r)||!Fo(s,l):!0}function uw(e,t,n){var r=!1,s=qr,l=t.contextType;return typeof l=="object"&&l!==null?l=bn(l):(s=Vt(t)?gi:Ct.current,r=t.contextTypes,l=(r=r!=null)?hs(e,s):qr),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Zc,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=l),t}function M0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Zc.enqueueReplaceState(t,t.state,null)}function ih(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},Lm(e);var l=t.contextType;typeof l=="object"&&l!==null?s.context=bn(l):(l=Vt(t)?gi:Ct.current,s.context=hs(e,l)),s.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(rh(e,t,l,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Zc.enqueueReplaceState(s,s.state,null),nc(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function vs(e,t){try{var n="",r=t;do n+=gk(r),r=r.return;while(r);var s=n}catch(l){s=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:s,digest:null}}function Xd(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function sh(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hj=typeof WeakMap=="function"?WeakMap:Map;function dw(e,t,n){n=dr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){ac||(ac=!0,ph=r),sh(e,t)},n}function fw(e,t,n){n=dr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){sh(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){sh(e,t),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),n}function $0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hj;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=rN.bind(null,e,t,n),t.then(e,e))}function D0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function B0(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=dr(-1,1),t.tag=2,$r(n,t,1))),n.lanes|=1),e)}var qj=yr.ReactCurrentOwner,qt=!1;function At(e,t,n,r){t.child=e===null?Fx(t,null,n,r):ps(t,e.child,n,r)}function F0(e,t,n,r,s){n=n.render;var l=t.ref;return ss(t,s),r=zm(e,t,n,r,l,s),n=Mm(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gr(e,t,s)):(He&&n&&km(t),t.flags|=1,At(e,t,r,s),t.child)}function U0(e,t,n,r,s){if(e===null){var l=n.type;return typeof l=="function"&&!Vm(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,hw(e,t,l,r,s)):(e=Nl(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&s)){var c=l.memoizedProps;if(n=n.compare,n=n!==null?n:Fo,n(c,r)&&e.ref===t.ref)return gr(e,t,s)}return t.flags|=1,e=Fr(l,r),e.ref=t.ref,e.return=t,t.child=e}function hw(e,t,n,r,s){if(e!==null){var l=e.memoizedProps;if(Fo(l,r)&&e.ref===t.ref)if(qt=!1,t.pendingProps=r=l,(e.lanes&s)!==0)e.flags&131072&&(qt=!0);else return t.lanes=e.lanes,gr(e,t,s)}return oh(e,t,n,r,s)}function mw(e,t,n){var r=t.pendingProps,s=r.children,l=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Me(Ji,en),en|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Me(Ji,en),en|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=l!==null?l.baseLanes:n,Me(Ji,en),en|=r}else l!==null?(r=l.baseLanes|n,t.memoizedState=null):r=n,Me(Ji,en),en|=r;return At(e,t,s,n),t.child}function pw(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function oh(e,t,n,r,s){var l=Vt(n)?gi:Ct.current;return l=hs(t,l),ss(t,s),n=zm(e,t,n,r,l,s),r=Mm(),e!==null&&!qt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,gr(e,t,s)):(He&&r&&km(t),t.flags|=1,At(e,t,n,s),t.child)}function H0(e,t,n,r,s){if(Vt(n)){var l=!0;Xl(t)}else l=!1;if(ss(t,s),t.stateNode===null)Sl(e,t),uw(t,n,r),ih(t,n,r,s),r=!0;else if(e===null){var c=t.stateNode,d=t.memoizedProps;c.props=d;var f=c.context,m=n.contextType;typeof m=="object"&&m!==null?m=bn(m):(m=Vt(n)?gi:Ct.current,m=hs(t,m));var p=n.getDerivedStateFromProps,v=typeof p=="function"||typeof c.getSnapshotBeforeUpdate=="function";v||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==r||f!==m)&&M0(t,c,r,m),jr=!1;var b=t.memoizedState;c.state=b,nc(t,r,c,s),f=t.memoizedState,d!==r||b!==f||Zt.current||jr?(typeof p=="function"&&(rh(t,n,p,r),f=t.memoizedState),(d=jr||z0(t,n,d,r,b,f,m))?(v||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=f),c.props=r,c.state=f,c.context=m,r=d):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{c=t.stateNode,Hx(e,t),d=t.memoizedProps,m=t.type===t.elementType?d:Tn(t.type,d),c.props=m,v=t.pendingProps,b=c.context,f=n.contextType,typeof f=="object"&&f!==null?f=bn(f):(f=Vt(n)?gi:Ct.current,f=hs(t,f));var k=n.getDerivedStateFromProps;(p=typeof k=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(d!==v||b!==f)&&M0(t,c,r,f),jr=!1,b=t.memoizedState,c.state=b,nc(t,r,c,s);var N=t.memoizedState;d!==v||b!==N||Zt.current||jr?(typeof k=="function"&&(rh(t,n,k,r),N=t.memoizedState),(m=jr||z0(t,n,m,r,b,N,f)||!1)?(p||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,N,f),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,N,f)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=N),c.props=r,c.state=N,c.context=f,r=m):(typeof c.componentDidUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||d===e.memoizedProps&&b===e.memoizedState||(t.flags|=1024),r=!1)}return ah(e,t,n,r,l,s)}function ah(e,t,n,r,s,l){pw(e,t);var c=(t.flags&128)!==0;if(!r&&!c)return s&&P0(t,n,!1),gr(e,t,l);r=t.stateNode,qj.current=t;var d=c&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&c?(t.child=ps(t,e.child,null,l),t.child=ps(t,null,d,l)):At(e,t,d,l),t.memoizedState=r.state,s&&P0(t,n,!0),t.child}function gw(e){var t=e.stateNode;t.pendingContext?C0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&C0(e,t.context,!1),Om(e,t.containerInfo)}function q0(e,t,n,r,s){return ms(),Nm(s),t.flags|=256,At(e,t,n,r),t.child}var lh={dehydrated:null,treeContext:null,retryLane:0};function ch(e){return{baseLanes:e,cachePool:null,transitions:null}}function vw(e,t,n){var r=t.pendingProps,s=Ze.current,l=!1,c=(t.flags&128)!==0,d;if((d=c)||(d=e!==null&&e.memoizedState===null?!1:(s&2)!==0),d?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Me(Ze,s&1),e===null)return th(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(c=r.children,e=r.fallback,l?(r=t.mode,l=t.child,c={mode:"hidden",children:c},!(r&1)&&l!==null?(l.childLanes=0,l.pendingProps=c):l=Yc(c,r,0,null),e=di(e,r,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=ch(n),t.memoizedState=lh,e):Bm(t,c));if(s=e.memoizedState,s!==null&&(d=s.dehydrated,d!==null))return Wj(e,t,c,r,d,s,n);if(l){l=r.fallback,c=t.mode,s=e.child,d=s.sibling;var f={mode:"hidden",children:r.children};return!(c&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=f,t.deletions=null):(r=Fr(s,f),r.subtreeFlags=s.subtreeFlags&14680064),d!==null?l=Fr(d,l):(l=di(l,c,n,null),l.flags|=2),l.return=t,r.return=t,r.sibling=l,t.child=r,r=l,l=t.child,c=e.child.memoizedState,c=c===null?ch(n):{baseLanes:c.baseLanes|n,cachePool:null,transitions:c.transitions},l.memoizedState=c,l.childLanes=e.childLanes&~n,t.memoizedState=lh,r}return l=e.child,e=l.sibling,r=Fr(l,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Bm(e,t){return t=Yc({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function il(e,t,n,r){return r!==null&&Nm(r),ps(t,e.child,null,n),e=Bm(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Wj(e,t,n,r,s,l,c){if(n)return t.flags&256?(t.flags&=-257,r=Xd(Error(X(422))),il(e,t,c,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=r.fallback,s=t.mode,r=Yc({mode:"visible",children:r.children},s,0,null),l=di(l,s,c,null),l.flags|=2,r.return=t,l.return=t,r.sibling=l,t.child=r,t.mode&1&&ps(t,e.child,null,c),t.child.memoizedState=ch(c),t.memoizedState=lh,l);if(!(t.mode&1))return il(e,t,c,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var d=r.dgst;return r=d,l=Error(X(419)),r=Xd(l,r,void 0),il(e,t,c,r)}if(d=(c&e.childLanes)!==0,qt||d){if(r=mt,r!==null){switch(c&-c){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|c)?0:s,s!==0&&s!==l.retryLane&&(l.retryLane=s,pr(e,s),In(r,e,s,-1))}return Zm(),r=Xd(Error(X(421))),il(e,t,c,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=iN.bind(null,e),s._reactRetry=t,null):(e=l.treeContext,tn=Mr(s.nextSibling),nn=t,He=!0,On=null,e!==null&&(pn[gn++]=cr,pn[gn++]=ur,pn[gn++]=vi,cr=e.id,ur=e.overflow,vi=t),t=Bm(t,r.children),t.flags|=4096,t)}function W0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),nh(e.return,t,n)}function Qd(e,t,n,r,s){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=r,l.tail=n,l.tailMode=s)}function yw(e,t,n){var r=t.pendingProps,s=r.revealOrder,l=r.tail;if(At(e,t,r.children,n),r=Ze.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&W0(e,n,t);else if(e.tag===19)W0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Me(Ze,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&rc(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),Qd(t,!1,s,n,l);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&rc(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}Qd(t,!0,n,null,l);break;case"together":Qd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Sl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function gr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),xi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(X(153));if(t.child!==null){for(e=t.child,n=Fr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Fr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Zj(e,t,n){switch(t.tag){case 3:gw(t),ms();break;case 5:qx(t);break;case 1:Vt(t.type)&&Xl(t);break;case 4:Om(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Me(ec,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Me(Ze,Ze.current&1),t.flags|=128,null):n&t.child.childLanes?vw(e,t,n):(Me(Ze,Ze.current&1),e=gr(e,t,n),e!==null?e.sibling:null);Me(Ze,Ze.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return yw(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Me(Ze,Ze.current),r)break;return null;case 22:case 23:return t.lanes=0,mw(e,t,n)}return gr(e,t,n)}var xw,uh,ww,bw;xw=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uh=function(){};ww=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,ai(Jn.current);var l=null;switch(n){case"input":s=Of(e,s),r=Of(e,r),l=[];break;case"select":s=Ge({},s,{value:void 0}),r=Ge({},r,{value:void 0}),l=[];break;case"textarea":s=Rf(e,s),r=Rf(e,r),l=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Yl)}Mf(n,r);var c;n=null;for(m in s)if(!r.hasOwnProperty(m)&&s.hasOwnProperty(m)&&s[m]!=null)if(m==="style"){var d=s[m];for(c in d)d.hasOwnProperty(c)&&(n||(n={}),n[c]="")}else m!=="dangerouslySetInnerHTML"&&m!=="children"&&m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(Io.hasOwnProperty(m)?l||(l=[]):(l=l||[]).push(m,null));for(m in r){var f=r[m];if(d=s!=null?s[m]:void 0,r.hasOwnProperty(m)&&f!==d&&(f!=null||d!=null))if(m==="style")if(d){for(c in d)!d.hasOwnProperty(c)||f&&f.hasOwnProperty(c)||(n||(n={}),n[c]="");for(c in f)f.hasOwnProperty(c)&&d[c]!==f[c]&&(n||(n={}),n[c]=f[c])}else n||(l||(l=[]),l.push(m,n)),n=f;else m==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,d=d?d.__html:void 0,f!=null&&d!==f&&(l=l||[]).push(m,f)):m==="children"?typeof f!="string"&&typeof f!="number"||(l=l||[]).push(m,""+f):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&(Io.hasOwnProperty(m)?(f!=null&&m==="onScroll"&&De("scroll",e),l||d===f||(l=[])):(l=l||[]).push(m,f))}n&&(l=l||[]).push("style",n);var m=l;(t.updateQueue=m)&&(t.flags|=4)}};bw=function(e,t,n,r){n!==r&&(t.flags|=4)};function mo(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function St(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Vj(e,t,n){var r=t.pendingProps;switch(jm(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return St(t),null;case 1:return Vt(t.type)&&Kl(),St(t),null;case 3:return r=t.stateNode,gs(),Fe(Zt),Fe(Ct),Im(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(nl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,On!==null&&(yh(On),On=null))),uh(e,t),St(t),null;case 5:Am(t);var s=ai(Zo.current);if(n=t.type,e!==null&&t.stateNode!=null)ww(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(X(166));return St(t),null}if(e=ai(Jn.current),nl(t)){r=t.stateNode,n=t.type;var l=t.memoizedProps;switch(r[Xn]=t,r[qo]=l,e=(t.mode&1)!==0,n){case"dialog":De("cancel",r),De("close",r);break;case"iframe":case"object":case"embed":De("load",r);break;case"video":case"audio":for(s=0;s<_o.length;s++)De(_o[s],r);break;case"source":De("error",r);break;case"img":case"image":case"link":De("error",r),De("load",r);break;case"details":De("toggle",r);break;case"input":e0(r,l),De("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!l.multiple},De("invalid",r);break;case"textarea":n0(r,l),De("invalid",r)}Mf(n,l),s=null;for(var c in l)if(l.hasOwnProperty(c)){var d=l[c];c==="children"?typeof d=="string"?r.textContent!==d&&(l.suppressHydrationWarning!==!0&&tl(r.textContent,d,e),s=["children",d]):typeof d=="number"&&r.textContent!==""+d&&(l.suppressHydrationWarning!==!0&&tl(r.textContent,d,e),s=["children",""+d]):Io.hasOwnProperty(c)&&d!=null&&c==="onScroll"&&De("scroll",r)}switch(n){case"input":Va(r),t0(r,l,!0);break;case"textarea":Va(r),r0(r);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(r.onclick=Yl)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{c=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Yy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),n==="select"&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[Xn]=t,e[qo]=r,xw(e,t,!1,!1),t.stateNode=e;e:{switch(c=$f(n,r),n){case"dialog":De("cancel",e),De("close",e),s=r;break;case"iframe":case"object":case"embed":De("load",e),s=r;break;case"video":case"audio":for(s=0;s<_o.length;s++)De(_o[s],e);s=r;break;case"source":De("error",e),s=r;break;case"img":case"image":case"link":De("error",e),De("load",e),s=r;break;case"details":De("toggle",e),s=r;break;case"input":e0(e,r),s=Of(e,r),De("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=Ge({},r,{value:void 0}),De("invalid",e);break;case"textarea":n0(e,r),s=Rf(e,r),De("invalid",e);break;default:s=r}Mf(n,s),d=s;for(l in d)if(d.hasOwnProperty(l)){var f=d[l];l==="style"?Qy(e,f):l==="dangerouslySetInnerHTML"?(f=f?f.__html:void 0,f!=null&&Ky(e,f)):l==="children"?typeof f=="string"?(n!=="textarea"||f!=="")&&Ro(e,f):typeof f=="number"&&Ro(e,""+f):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Io.hasOwnProperty(l)?f!=null&&l==="onScroll"&&De("scroll",e):f!=null&&um(e,l,f,c))}switch(n){case"input":Va(e),t0(e,r,!1);break;case"textarea":Va(e),r0(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Hr(r.value));break;case"select":e.multiple=!!r.multiple,l=r.value,l!=null?ts(e,!!r.multiple,l,!1):r.defaultValue!=null&&ts(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Yl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return St(t),null;case 6:if(e&&t.stateNode!=null)bw(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(X(166));if(n=ai(Zo.current),ai(Jn.current),nl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Xn]=t,(l=r.nodeValue!==n)&&(e=nn,e!==null))switch(e.tag){case 3:tl(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&tl(r.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Xn]=t,t.stateNode=r}return St(t),null;case 13:if(Fe(Ze),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(He&&tn!==null&&t.mode&1&&!(t.flags&128))Dx(),ms(),t.flags|=98560,l=!1;else if(l=nl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!l)throw Error(X(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(X(317));l[Xn]=t}else ms(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;St(t),l=!1}else On!==null&&(yh(On),On=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Ze.current&1?ut===0&&(ut=3):Zm())),t.updateQueue!==null&&(t.flags|=4),St(t),null);case 4:return gs(),uh(e,t),e===null&&Uo(t.stateNode.containerInfo),St(t),null;case 10:return Em(t.type._context),St(t),null;case 17:return Vt(t.type)&&Kl(),St(t),null;case 19:if(Fe(Ze),l=t.memoizedState,l===null)return St(t),null;if(r=(t.flags&128)!==0,c=l.rendering,c===null)if(r)mo(l,!1);else{if(ut!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=rc(e),c!==null){for(t.flags|=128,mo(l,!1),r=c.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)l=n,e=r,l.flags&=14680066,c=l.alternate,c===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=c.childLanes,l.lanes=c.lanes,l.child=c.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=c.memoizedProps,l.memoizedState=c.memoizedState,l.updateQueue=c.updateQueue,l.type=c.type,e=c.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Me(Ze,Ze.current&1|2),t.child}e=e.sibling}l.tail!==null&&Qe()>ys&&(t.flags|=128,r=!0,mo(l,!1),t.lanes=4194304)}else{if(!r)if(e=rc(c),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),mo(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!He)return St(t),null}else 2*Qe()-l.renderingStartTime>ys&&n!==1073741824&&(t.flags|=128,r=!0,mo(l,!1),t.lanes=4194304);l.isBackwards?(c.sibling=t.child,t.child=c):(n=l.last,n!==null?n.sibling=c:t.child=c,l.last=c)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=Qe(),t.sibling=null,n=Ze.current,Me(Ze,r?n&1|2:n&1),t):(St(t),null);case 22:case 23:return Wm(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?en&1073741824&&(St(t),t.subtreeFlags&6&&(t.flags|=8192)):St(t),null;case 24:return null;case 25:return null}throw Error(X(156,t.tag))}function Gj(e,t){switch(jm(t),t.tag){case 1:return Vt(t.type)&&Kl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gs(),Fe(Zt),Fe(Ct),Im(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Am(t),null;case 13:if(Fe(Ze),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(X(340));ms()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Fe(Ze),null;case 4:return gs(),null;case 10:return Em(t.type._context),null;case 22:case 23:return Wm(),null;case 24:return null;default:return null}}var sl=!1,jt=!1,Yj=typeof WeakSet=="function"?WeakSet:Set,se=null;function Qi(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ye(e,t,r)}else n.current=null}function dh(e,t,n){try{n()}catch(r){Ye(e,t,r)}}var Z0=!1;function Kj(e,t){if(Gf=Zl,e=Nx(),Sm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,l=r.focusNode;r=r.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var c=0,d=-1,f=-1,m=0,p=0,v=e,b=null;t:for(;;){for(var k;v!==n||s!==0&&v.nodeType!==3||(d=c+s),v!==l||r!==0&&v.nodeType!==3||(f=c+r),v.nodeType===3&&(c+=v.nodeValue.length),(k=v.firstChild)!==null;)b=v,v=k;for(;;){if(v===e)break t;if(b===n&&++m===s&&(d=c),b===l&&++p===r&&(f=c),(k=v.nextSibling)!==null)break;v=b,b=v.parentNode}v=k}n=d===-1||f===-1?null:{start:d,end:f}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yf={focusedElem:e,selectionRange:n},Zl=!1,se=t;se!==null;)if(t=se,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,se=e;else for(;se!==null;){t=se;try{var N=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var w=N.memoizedProps,S=N.memoizedState,_=t.stateNode,y=_.getSnapshotBeforeUpdate(t.elementType===t.type?w:Tn(t.type,w),S);_.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var x=t.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(X(163))}}catch(E){Ye(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,se=e;break}se=t.return}return N=Z0,Z0=!1,N}function To(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var l=s.destroy;s.destroy=void 0,l!==void 0&&dh(t,n,l)}s=s.next}while(s!==r)}}function Vc(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function fh(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function _w(e){var t=e.alternate;t!==null&&(e.alternate=null,_w(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Xn],delete t[qo],delete t[Qf],delete t[Oj],delete t[Aj])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Sw(e){return e.tag===5||e.tag===3||e.tag===4}function V0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sw(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function hh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Yl));else if(r!==4&&(e=e.child,e!==null))for(hh(e,t,n),e=e.sibling;e!==null;)hh(e,t,n),e=e.sibling}function mh(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(mh(e,t,n),e=e.sibling;e!==null;)mh(e,t,n),e=e.sibling}var yt=null,Ln=!1;function _r(e,t,n){for(n=n.child;n!==null;)kw(e,t,n),n=n.sibling}function kw(e,t,n){if(Qn&&typeof Qn.onCommitFiberUnmount=="function")try{Qn.onCommitFiberUnmount(Dc,n)}catch{}switch(n.tag){case 5:jt||Qi(n,t);case 6:var r=yt,s=Ln;yt=null,_r(e,t,n),yt=r,Ln=s,yt!==null&&(Ln?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Ln?(e=yt,n=n.stateNode,e.nodeType===8?Wd(e.parentNode,n):e.nodeType===1&&Wd(e,n),Do(e)):Wd(yt,n.stateNode));break;case 4:r=yt,s=Ln,yt=n.stateNode.containerInfo,Ln=!0,_r(e,t,n),yt=r,Ln=s;break;case 0:case 11:case 14:case 15:if(!jt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var l=s,c=l.destroy;l=l.tag,c!==void 0&&(l&2||l&4)&&dh(n,t,c),s=s.next}while(s!==r)}_r(e,t,n);break;case 1:if(!jt&&(Qi(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(d){Ye(n,t,d)}_r(e,t,n);break;case 21:_r(e,t,n);break;case 22:n.mode&1?(jt=(r=jt)||n.memoizedState!==null,_r(e,t,n),jt=r):_r(e,t,n);break;default:_r(e,t,n)}}function G0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yj),t.forEach(function(r){var s=sN.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Pn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var l=e,c=t,d=c;e:for(;d!==null;){switch(d.tag){case 5:yt=d.stateNode,Ln=!1;break e;case 3:yt=d.stateNode.containerInfo,Ln=!0;break e;case 4:yt=d.stateNode.containerInfo,Ln=!0;break e}d=d.return}if(yt===null)throw Error(X(160));kw(l,c,s),yt=null,Ln=!1;var f=s.alternate;f!==null&&(f.return=null),s.return=null}catch(m){Ye(s,t,m)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)jw(t,e),t=t.sibling}function jw(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pn(t,e),qn(e),r&4){try{To(3,e,e.return),Vc(3,e)}catch(w){Ye(e,e.return,w)}try{To(5,e,e.return)}catch(w){Ye(e,e.return,w)}}break;case 1:Pn(t,e),qn(e),r&512&&n!==null&&Qi(n,n.return);break;case 5:if(Pn(t,e),qn(e),r&512&&n!==null&&Qi(n,n.return),e.flags&32){var s=e.stateNode;try{Ro(s,"")}catch(w){Ye(e,e.return,w)}}if(r&4&&(s=e.stateNode,s!=null)){var l=e.memoizedProps,c=n!==null?n.memoizedProps:l,d=e.type,f=e.updateQueue;if(e.updateQueue=null,f!==null)try{d==="input"&&l.type==="radio"&&l.name!=null&&Vy(s,l),$f(d,c);var m=$f(d,l);for(c=0;c<f.length;c+=2){var p=f[c],v=f[c+1];p==="style"?Qy(s,v):p==="dangerouslySetInnerHTML"?Ky(s,v):p==="children"?Ro(s,v):um(s,p,v,m)}switch(d){case"input":Af(s,l);break;case"textarea":Gy(s,l);break;case"select":var b=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!l.multiple;var k=l.value;k!=null?ts(s,!!l.multiple,k,!1):b!==!!l.multiple&&(l.defaultValue!=null?ts(s,!!l.multiple,l.defaultValue,!0):ts(s,!!l.multiple,l.multiple?[]:"",!1))}s[qo]=l}catch(w){Ye(e,e.return,w)}}break;case 6:if(Pn(t,e),qn(e),r&4){if(e.stateNode===null)throw Error(X(162));s=e.stateNode,l=e.memoizedProps;try{s.nodeValue=l}catch(w){Ye(e,e.return,w)}}break;case 3:if(Pn(t,e),qn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Do(t.containerInfo)}catch(w){Ye(e,e.return,w)}break;case 4:Pn(t,e),qn(e);break;case 13:Pn(t,e),qn(e),s=e.child,s.flags&8192&&(l=s.memoizedState!==null,s.stateNode.isHidden=l,!l||s.alternate!==null&&s.alternate.memoizedState!==null||(Hm=Qe())),r&4&&G0(e);break;case 22:if(p=n!==null&&n.memoizedState!==null,e.mode&1?(jt=(m=jt)||p,Pn(t,e),jt=m):Pn(t,e),qn(e),r&8192){if(m=e.memoizedState!==null,(e.stateNode.isHidden=m)&&!p&&e.mode&1)for(se=e,p=e.child;p!==null;){for(v=se=p;se!==null;){switch(b=se,k=b.child,b.tag){case 0:case 11:case 14:case 15:To(4,b,b.return);break;case 1:Qi(b,b.return);var N=b.stateNode;if(typeof N.componentWillUnmount=="function"){r=b,n=b.return;try{t=r,N.props=t.memoizedProps,N.state=t.memoizedState,N.componentWillUnmount()}catch(w){Ye(r,n,w)}}break;case 5:Qi(b,b.return);break;case 22:if(b.memoizedState!==null){K0(v);continue}}k!==null?(k.return=b,se=k):K0(v)}p=p.sibling}e:for(p=null,v=e;;){if(v.tag===5){if(p===null){p=v;try{s=v.stateNode,m?(l=s.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(d=v.stateNode,f=v.memoizedProps.style,c=f!=null&&f.hasOwnProperty("display")?f.display:null,d.style.display=Xy("display",c))}catch(w){Ye(e,e.return,w)}}}else if(v.tag===6){if(p===null)try{v.stateNode.nodeValue=m?"":v.memoizedProps}catch(w){Ye(e,e.return,w)}}else if((v.tag!==22&&v.tag!==23||v.memoizedState===null||v===e)&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===e)break e;for(;v.sibling===null;){if(v.return===null||v.return===e)break e;p===v&&(p=null),v=v.return}p===v&&(p=null),v.sibling.return=v.return,v=v.sibling}}break;case 19:Pn(t,e),qn(e),r&4&&G0(e);break;case 21:break;default:Pn(t,e),qn(e)}}function qn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Sw(n)){var r=n;break e}n=n.return}throw Error(X(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Ro(s,""),r.flags&=-33);var l=V0(e);mh(e,l,s);break;case 3:case 4:var c=r.stateNode.containerInfo,d=V0(e);hh(e,d,c);break;default:throw Error(X(161))}}catch(f){Ye(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xj(e,t,n){se=e,Nw(e)}function Nw(e,t,n){for(var r=(e.mode&1)!==0;se!==null;){var s=se,l=s.child;if(s.tag===22&&r){var c=s.memoizedState!==null||sl;if(!c){var d=s.alternate,f=d!==null&&d.memoizedState!==null||jt;d=sl;var m=jt;if(sl=c,(jt=f)&&!m)for(se=s;se!==null;)c=se,f=c.child,c.tag===22&&c.memoizedState!==null?X0(s):f!==null?(f.return=c,se=f):X0(s);for(;l!==null;)se=l,Nw(l),l=l.sibling;se=s,sl=d,jt=m}Y0(e)}else s.subtreeFlags&8772&&l!==null?(l.return=s,se=l):Y0(e)}}function Y0(e){for(;se!==null;){var t=se;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:jt||Vc(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!jt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:Tn(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&A0(t,l,r);break;case 3:var c=t.updateQueue;if(c!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}A0(t,c,n)}break;case 5:var d=t.stateNode;if(n===null&&t.flags&4){n=d;var f=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":f.autoFocus&&n.focus();break;case"img":f.src&&(n.src=f.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var m=t.alternate;if(m!==null){var p=m.memoizedState;if(p!==null){var v=p.dehydrated;v!==null&&Do(v)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(X(163))}jt||t.flags&512&&fh(t)}catch(b){Ye(t,t.return,b)}}if(t===e){se=null;break}if(n=t.sibling,n!==null){n.return=t.return,se=n;break}se=t.return}}function K0(e){for(;se!==null;){var t=se;if(t===e){se=null;break}var n=t.sibling;if(n!==null){n.return=t.return,se=n;break}se=t.return}}function X0(e){for(;se!==null;){var t=se;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vc(4,t)}catch(f){Ye(t,n,f)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(f){Ye(t,s,f)}}var l=t.return;try{fh(t)}catch(f){Ye(t,l,f)}break;case 5:var c=t.return;try{fh(t)}catch(f){Ye(t,c,f)}}}catch(f){Ye(t,t.return,f)}if(t===e){se=null;break}var d=t.sibling;if(d!==null){d.return=t.return,se=d;break}se=t.return}}var Qj=Math.ceil,oc=yr.ReactCurrentDispatcher,Fm=yr.ReactCurrentOwner,yn=yr.ReactCurrentBatchConfig,ke=0,mt=null,st=null,wt=0,en=0,Ji=Zr(0),ut=0,Ko=null,xi=0,Gc=0,Um=0,Lo=null,Ht=null,Hm=0,ys=1/0,or=null,ac=!1,ph=null,Dr=null,ol=!1,Tr=null,lc=0,Oo=0,gh=null,kl=-1,jl=0;function It(){return ke&6?Qe():kl!==-1?kl:kl=Qe()}function Br(e){return e.mode&1?ke&2&&wt!==0?wt&-wt:Rj.transition!==null?(jl===0&&(jl=ux()),jl):(e=Le,e!==0||(e=window.event,e=e===void 0?16:vx(e.type)),e):1}function In(e,t,n,r){if(50<Oo)throw Oo=0,gh=null,Error(X(185));la(e,n,r),(!(ke&2)||e!==mt)&&(e===mt&&(!(ke&2)&&(Gc|=n),ut===4&&Pr(e,wt)),Gt(e,r),n===1&&ke===0&&!(t.mode&1)&&(ys=Qe()+500,qc&&Vr()))}function Gt(e,t){var n=e.callbackNode;Rk(e,t);var r=Wl(e,e===mt?wt:0);if(r===0)n!==null&&o0(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&o0(n),t===1)e.tag===0?Ij(Q0.bind(null,e)):zx(Q0.bind(null,e)),Tj(function(){!(ke&6)&&Vr()}),n=null;else{switch(dx(r)){case 1:n=pm;break;case 4:n=lx;break;case 16:n=ql;break;case 536870912:n=cx;break;default:n=ql}n=Iw(n,Cw.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Cw(e,t){if(kl=-1,jl=0,ke&6)throw Error(X(327));var n=e.callbackNode;if(os()&&e.callbackNode!==n)return null;var r=Wl(e,e===mt?wt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=cc(e,r);else{t=r;var s=ke;ke|=2;var l=Ew();(mt!==e||wt!==t)&&(or=null,ys=Qe()+500,ui(e,t));do try{tN();break}catch(d){Pw(e,d)}while(!0);Pm(),oc.current=l,ke=s,st!==null?t=0:(mt=null,wt=0,t=ut)}if(t!==0){if(t===2&&(s=Hf(e),s!==0&&(r=s,t=vh(e,s))),t===1)throw n=Ko,ui(e,0),Pr(e,r),Gt(e,Qe()),n;if(t===6)Pr(e,r);else{if(s=e.current.alternate,!(r&30)&&!Jj(s)&&(t=cc(e,r),t===2&&(l=Hf(e),l!==0&&(r=l,t=vh(e,l))),t===1))throw n=Ko,ui(e,0),Pr(e,r),Gt(e,Qe()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(X(345));case 2:ii(e,Ht,or);break;case 3:if(Pr(e,r),(r&130023424)===r&&(t=Hm+500-Qe(),10<t)){if(Wl(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){It(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=Xf(ii.bind(null,e,Ht,or),t);break}ii(e,Ht,or);break;case 4:if(Pr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var c=31-An(r);l=1<<c,c=t[c],c>s&&(s=c),r&=~l}if(r=s,r=Qe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Qj(r/1960))-r,10<r){e.timeoutHandle=Xf(ii.bind(null,e,Ht,or),r);break}ii(e,Ht,or);break;case 5:ii(e,Ht,or);break;default:throw Error(X(329))}}}return Gt(e,Qe()),e.callbackNode===n?Cw.bind(null,e):null}function vh(e,t){var n=Lo;return e.current.memoizedState.isDehydrated&&(ui(e,t).flags|=256),e=cc(e,t),e!==2&&(t=Ht,Ht=n,t!==null&&yh(t)),e}function yh(e){Ht===null?Ht=e:Ht.push.apply(Ht,e)}function Jj(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],l=s.getSnapshot;s=s.value;try{if(!zn(l(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pr(e,t){for(t&=~Um,t&=~Gc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-An(t),r=1<<n;e[n]=-1,t&=~r}}function Q0(e){if(ke&6)throw Error(X(327));os();var t=Wl(e,0);if(!(t&1))return Gt(e,Qe()),null;var n=cc(e,t);if(e.tag!==0&&n===2){var r=Hf(e);r!==0&&(t=r,n=vh(e,r))}if(n===1)throw n=Ko,ui(e,0),Pr(e,t),Gt(e,Qe()),n;if(n===6)throw Error(X(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ii(e,Ht,or),Gt(e,Qe()),null}function qm(e,t){var n=ke;ke|=1;try{return e(t)}finally{ke=n,ke===0&&(ys=Qe()+500,qc&&Vr())}}function wi(e){Tr!==null&&Tr.tag===0&&!(ke&6)&&os();var t=ke;ke|=1;var n=yn.transition,r=Le;try{if(yn.transition=null,Le=1,e)return e()}finally{Le=r,yn.transition=n,ke=t,!(ke&6)&&Vr()}}function Wm(){en=Ji.current,Fe(Ji)}function ui(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ej(n)),st!==null)for(n=st.return;n!==null;){var r=n;switch(jm(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Kl();break;case 3:gs(),Fe(Zt),Fe(Ct),Im();break;case 5:Am(r);break;case 4:gs();break;case 13:Fe(Ze);break;case 19:Fe(Ze);break;case 10:Em(r.type._context);break;case 22:case 23:Wm()}n=n.return}if(mt=e,st=e=Fr(e.current,null),wt=en=t,ut=0,Ko=null,Um=Gc=xi=0,Ht=Lo=null,oi!==null){for(t=0;t<oi.length;t++)if(n=oi[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,l=n.pending;if(l!==null){var c=l.next;l.next=s,r.next=c}n.pending=r}oi=null}return e}function Pw(e,t){do{var n=st;try{if(Pm(),bl.current=sc,ic){for(var r=Ve.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}ic=!1}if(yi=0,ft=ct=Ve=null,Eo=!1,Vo=0,Fm.current=null,n===null||n.return===null){ut=1,Ko=t,st=null;break}e:{var l=e,c=n.return,d=n,f=t;if(t=wt,d.flags|=32768,f!==null&&typeof f=="object"&&typeof f.then=="function"){var m=f,p=d,v=p.tag;if(!(p.mode&1)&&(v===0||v===11||v===15)){var b=p.alternate;b?(p.updateQueue=b.updateQueue,p.memoizedState=b.memoizedState,p.lanes=b.lanes):(p.updateQueue=null,p.memoizedState=null)}var k=D0(c);if(k!==null){k.flags&=-257,B0(k,c,d,l,t),k.mode&1&&$0(l,m,t),t=k,f=m;var N=t.updateQueue;if(N===null){var w=new Set;w.add(f),t.updateQueue=w}else N.add(f);break e}else{if(!(t&1)){$0(l,m,t),Zm();break e}f=Error(X(426))}}else if(He&&d.mode&1){var S=D0(c);if(S!==null){!(S.flags&65536)&&(S.flags|=256),B0(S,c,d,l,t),Nm(vs(f,d));break e}}l=f=vs(f,d),ut!==4&&(ut=2),Lo===null?Lo=[l]:Lo.push(l),l=c;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var _=dw(l,f,t);O0(l,_);break e;case 1:d=f;var y=l.type,x=l.stateNode;if(!(l.flags&128)&&(typeof y.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Dr===null||!Dr.has(x)))){l.flags|=65536,t&=-t,l.lanes|=t;var E=fw(l,d,t);O0(l,E);break e}}l=l.return}while(l!==null)}Lw(n)}catch(T){t=T,st===n&&n!==null&&(st=n=n.return);continue}break}while(!0)}function Ew(){var e=oc.current;return oc.current=sc,e===null?sc:e}function Zm(){(ut===0||ut===3||ut===2)&&(ut=4),mt===null||!(xi&268435455)&&!(Gc&268435455)||Pr(mt,wt)}function cc(e,t){var n=ke;ke|=2;var r=Ew();(mt!==e||wt!==t)&&(or=null,ui(e,t));do try{eN();break}catch(s){Pw(e,s)}while(!0);if(Pm(),ke=n,oc.current=r,st!==null)throw Error(X(261));return mt=null,wt=0,ut}function eN(){for(;st!==null;)Tw(st)}function tN(){for(;st!==null&&!Nk();)Tw(st)}function Tw(e){var t=Aw(e.alternate,e,en);e.memoizedProps=e.pendingProps,t===null?Lw(e):st=t,Fm.current=null}function Lw(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Gj(n,t),n!==null){n.flags&=32767,st=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ut=6,st=null;return}}else if(n=Vj(n,t,en),n!==null){st=n;return}if(t=t.sibling,t!==null){st=t;return}st=t=e}while(t!==null);ut===0&&(ut=5)}function ii(e,t,n){var r=Le,s=yn.transition;try{yn.transition=null,Le=1,nN(e,t,n,r)}finally{yn.transition=s,Le=r}return null}function nN(e,t,n,r){do os();while(Tr!==null);if(ke&6)throw Error(X(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(X(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(zk(e,l),e===mt&&(st=mt=null,wt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ol||(ol=!0,Iw(ql,function(){return os(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=yn.transition,yn.transition=null;var c=Le;Le=1;var d=ke;ke|=4,Fm.current=null,Kj(e,n),jw(n,e),_j(Yf),Zl=!!Gf,Yf=Gf=null,e.current=n,Xj(n),Ck(),ke=d,Le=c,yn.transition=l}else e.current=n;if(ol&&(ol=!1,Tr=e,lc=s),l=e.pendingLanes,l===0&&(Dr=null),Tk(n.stateNode),Gt(e,Qe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(ac)throw ac=!1,e=ph,ph=null,e;return lc&1&&e.tag!==0&&os(),l=e.pendingLanes,l&1?e===gh?Oo++:(Oo=0,gh=e):Oo=0,Vr(),null}function os(){if(Tr!==null){var e=dx(lc),t=yn.transition,n=Le;try{if(yn.transition=null,Le=16>e?16:e,Tr===null)var r=!1;else{if(e=Tr,Tr=null,lc=0,ke&6)throw Error(X(331));var s=ke;for(ke|=4,se=e.current;se!==null;){var l=se,c=l.child;if(se.flags&16){var d=l.deletions;if(d!==null){for(var f=0;f<d.length;f++){var m=d[f];for(se=m;se!==null;){var p=se;switch(p.tag){case 0:case 11:case 15:To(8,p,l)}var v=p.child;if(v!==null)v.return=p,se=v;else for(;se!==null;){p=se;var b=p.sibling,k=p.return;if(_w(p),p===m){se=null;break}if(b!==null){b.return=k,se=b;break}se=k}}}var N=l.alternate;if(N!==null){var w=N.child;if(w!==null){N.child=null;do{var S=w.sibling;w.sibling=null,w=S}while(w!==null)}}se=l}}if(l.subtreeFlags&2064&&c!==null)c.return=l,se=c;else e:for(;se!==null;){if(l=se,l.flags&2048)switch(l.tag){case 0:case 11:case 15:To(9,l,l.return)}var _=l.sibling;if(_!==null){_.return=l.return,se=_;break e}se=l.return}}var y=e.current;for(se=y;se!==null;){c=se;var x=c.child;if(c.subtreeFlags&2064&&x!==null)x.return=c,se=x;else e:for(c=y;se!==null;){if(d=se,d.flags&2048)try{switch(d.tag){case 0:case 11:case 15:Vc(9,d)}}catch(T){Ye(d,d.return,T)}if(d===c){se=null;break e}var E=d.sibling;if(E!==null){E.return=d.return,se=E;break e}se=d.return}}if(ke=s,Vr(),Qn&&typeof Qn.onPostCommitFiberRoot=="function")try{Qn.onPostCommitFiberRoot(Dc,e)}catch{}r=!0}return r}finally{Le=n,yn.transition=t}}return!1}function J0(e,t,n){t=vs(n,t),t=dw(e,t,1),e=$r(e,t,1),t=It(),e!==null&&(la(e,1,t),Gt(e,t))}function Ye(e,t,n){if(e.tag===3)J0(e,e,n);else for(;t!==null;){if(t.tag===3){J0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){e=vs(n,e),e=fw(t,e,1),t=$r(t,e,1),e=It(),t!==null&&(la(t,1,e),Gt(t,e));break}}t=t.return}}function rN(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=It(),e.pingedLanes|=e.suspendedLanes&n,mt===e&&(wt&n)===n&&(ut===4||ut===3&&(wt&130023424)===wt&&500>Qe()-Hm?ui(e,0):Um|=n),Gt(e,t)}function Ow(e,t){t===0&&(e.mode&1?(t=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):t=1);var n=It();e=pr(e,t),e!==null&&(la(e,t,n),Gt(e,n))}function iN(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ow(e,n)}function sN(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(X(314))}r!==null&&r.delete(t),Ow(e,n)}var Aw;Aw=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Zt.current)qt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qt=!1,Zj(e,t,n);qt=!!(e.flags&131072)}else qt=!1,He&&t.flags&1048576&&Mx(t,Jl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Sl(e,t),e=t.pendingProps;var s=hs(t,Ct.current);ss(t,n),s=zm(null,t,r,e,s,n);var l=Mm();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Vt(r)?(l=!0,Xl(t)):l=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Lm(t),s.updater=Zc,t.stateNode=s,s._reactInternals=t,ih(t,r,e,n),t=ah(null,t,r,!0,l,n)):(t.tag=0,He&&l&&km(t),At(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Sl(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=aN(r),e=Tn(r,e),s){case 0:t=oh(null,t,r,e,n);break e;case 1:t=H0(null,t,r,e,n);break e;case 11:t=F0(null,t,r,e,n);break e;case 14:t=U0(null,t,r,Tn(r.type,e),n);break e}throw Error(X(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Tn(r,s),oh(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Tn(r,s),H0(e,t,r,s,n);case 3:e:{if(gw(t),e===null)throw Error(X(387));r=t.pendingProps,l=t.memoizedState,s=l.element,Hx(e,t),nc(t,r,null,n);var c=t.memoizedState;if(r=c.element,l.isDehydrated)if(l={element:r,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){s=vs(Error(X(423)),t),t=q0(e,t,r,n,s);break e}else if(r!==s){s=vs(Error(X(424)),t),t=q0(e,t,r,n,s);break e}else for(tn=Mr(t.stateNode.containerInfo.firstChild),nn=t,He=!0,On=null,n=Fx(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ms(),r===s){t=gr(e,t,n);break e}At(e,t,r,n)}t=t.child}return t;case 5:return qx(t),e===null&&th(t),r=t.type,s=t.pendingProps,l=e!==null?e.memoizedProps:null,c=s.children,Kf(r,s)?c=null:l!==null&&Kf(r,l)&&(t.flags|=32),pw(e,t),At(e,t,c,n),t.child;case 6:return e===null&&th(t),null;case 13:return vw(e,t,n);case 4:return Om(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=ps(t,null,r,n):At(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Tn(r,s),F0(e,t,r,s,n);case 7:return At(e,t,t.pendingProps,n),t.child;case 8:return At(e,t,t.pendingProps.children,n),t.child;case 12:return At(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,l=t.memoizedProps,c=s.value,Me(ec,r._currentValue),r._currentValue=c,l!==null)if(zn(l.value,c)){if(l.children===s.children&&!Zt.current){t=gr(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var d=l.dependencies;if(d!==null){c=l.child;for(var f=d.firstContext;f!==null;){if(f.context===r){if(l.tag===1){f=dr(-1,n&-n),f.tag=2;var m=l.updateQueue;if(m!==null){m=m.shared;var p=m.pending;p===null?f.next=f:(f.next=p.next,p.next=f),m.pending=f}}l.lanes|=n,f=l.alternate,f!==null&&(f.lanes|=n),nh(l.return,n,t),d.lanes|=n;break}f=f.next}}else if(l.tag===10)c=l.type===t.type?null:l.child;else if(l.tag===18){if(c=l.return,c===null)throw Error(X(341));c.lanes|=n,d=c.alternate,d!==null&&(d.lanes|=n),nh(c,n,t),c=l.sibling}else c=l.child;if(c!==null)c.return=l;else for(c=l;c!==null;){if(c===t){c=null;break}if(l=c.sibling,l!==null){l.return=c.return,c=l;break}c=c.return}l=c}At(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,ss(t,n),s=bn(s),r=r(s),t.flags|=1,At(e,t,r,n),t.child;case 14:return r=t.type,s=Tn(r,t.pendingProps),s=Tn(r.type,s),U0(e,t,r,s,n);case 15:return hw(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:Tn(r,s),Sl(e,t),t.tag=1,Vt(r)?(e=!0,Xl(t)):e=!1,ss(t,n),uw(t,r,s),ih(t,r,s,n),ah(null,t,r,!0,e,n);case 19:return yw(e,t,n);case 22:return mw(e,t,n)}throw Error(X(156,t.tag))};function Iw(e,t){return ax(e,t)}function oN(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function vn(e,t,n,r){return new oN(e,t,n,r)}function Vm(e){return e=e.prototype,!(!e||!e.isReactComponent)}function aN(e){if(typeof e=="function")return Vm(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fm)return 11;if(e===hm)return 14}return 2}function Fr(e,t){var n=e.alternate;return n===null?(n=vn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nl(e,t,n,r,s,l){var c=2;if(r=e,typeof e=="function")Vm(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case Hi:return di(n.children,s,l,t);case dm:c=8,s|=8;break;case Pf:return e=vn(12,n,t,s|2),e.elementType=Pf,e.lanes=l,e;case Ef:return e=vn(13,n,t,s),e.elementType=Ef,e.lanes=l,e;case Tf:return e=vn(19,n,t,s),e.elementType=Tf,e.lanes=l,e;case qy:return Yc(n,s,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Uy:c=10;break e;case Hy:c=9;break e;case fm:c=11;break e;case hm:c=14;break e;case kr:c=16,r=null;break e}throw Error(X(130,e==null?e:typeof e,""))}return t=vn(c,n,t,s),t.elementType=e,t.type=r,t.lanes=l,t}function di(e,t,n,r){return e=vn(7,e,r,t),e.lanes=n,e}function Yc(e,t,n,r){return e=vn(22,e,r,t),e.elementType=qy,e.lanes=n,e.stateNode={isHidden:!1},e}function Jd(e,t,n){return e=vn(6,e,null,t),e.lanes=n,e}function ef(e,t,n){return t=vn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function lN(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Id(0),this.expirationTimes=Id(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Id(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Gm(e,t,n,r,s,l,c,d,f){return e=new lN(e,t,n,d,f),t===1?(t=1,l===!0&&(t|=8)):t=0,l=vn(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lm(l),e}function cN(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ui,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Rw(e){if(!e)return qr;e=e._reactInternals;e:{if(ji(e)!==e||e.tag!==1)throw Error(X(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Vt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(X(171))}if(e.tag===1){var n=e.type;if(Vt(n))return Rx(e,n,t)}return t}function zw(e,t,n,r,s,l,c,d,f){return e=Gm(n,r,!0,e,s,l,c,d,f),e.context=Rw(null),n=e.current,r=It(),s=Br(n),l=dr(r,s),l.callback=t??null,$r(n,l,s),e.current.lanes=s,la(e,s,r),Gt(e,r),e}function Kc(e,t,n,r){var s=t.current,l=It(),c=Br(s);return n=Rw(n),t.context===null?t.context=n:t.pendingContext=n,t=dr(l,c),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=$r(s,t,c),e!==null&&(In(e,s,c,l),wl(e,s,c)),c}function uc(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ev(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ym(e,t){ev(e,t),(e=e.alternate)&&ev(e,t)}function uN(){return null}var Mw=typeof reportError=="function"?reportError:function(e){console.error(e)};function Km(e){this._internalRoot=e}Xc.prototype.render=Km.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(X(409));Kc(e,t,null,null)};Xc.prototype.unmount=Km.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;wi(function(){Kc(null,e,null,null)}),t[mr]=null}};function Xc(e){this._internalRoot=e}Xc.prototype.unstable_scheduleHydration=function(e){if(e){var t=mx();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Cr.length&&t!==0&&t<Cr[n].priority;n++);Cr.splice(n,0,e),n===0&&gx(e)}};function Xm(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Qc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tv(){}function dN(e,t,n,r,s){if(s){if(typeof r=="function"){var l=r;r=function(){var m=uc(c);l.call(m)}}var c=zw(t,r,e,0,null,!1,!1,"",tv);return e._reactRootContainer=c,e[mr]=c.current,Uo(e.nodeType===8?e.parentNode:e),wi(),c}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var d=r;r=function(){var m=uc(f);d.call(m)}}var f=Gm(e,0,!1,null,null,!1,!1,"",tv);return e._reactRootContainer=f,e[mr]=f.current,Uo(e.nodeType===8?e.parentNode:e),wi(function(){Kc(t,f,n,r)}),f}function Jc(e,t,n,r,s){var l=n._reactRootContainer;if(l){var c=l;if(typeof s=="function"){var d=s;s=function(){var f=uc(c);d.call(f)}}Kc(t,c,e,s)}else c=dN(n,t,e,s,r);return uc(c)}fx=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=bo(t.pendingLanes);n!==0&&(gm(t,n|1),Gt(t,Qe()),!(ke&6)&&(ys=Qe()+500,Vr()))}break;case 13:wi(function(){var r=pr(e,1);if(r!==null){var s=It();In(r,e,1,s)}}),Ym(e,1)}};vm=function(e){if(e.tag===13){var t=pr(e,134217728);if(t!==null){var n=It();In(t,e,134217728,n)}Ym(e,134217728)}};hx=function(e){if(e.tag===13){var t=Br(e),n=pr(e,t);if(n!==null){var r=It();In(n,e,t,r)}Ym(e,t)}};mx=function(){return Le};px=function(e,t){var n=Le;try{return Le=e,t()}finally{Le=n}};Bf=function(e,t,n){switch(t){case"input":if(Af(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Hc(r);if(!s)throw Error(X(90));Zy(r),Af(r,s)}}}break;case"textarea":Gy(e,n);break;case"select":t=n.value,t!=null&&ts(e,!!n.multiple,t,!1)}};tx=qm;nx=wi;var fN={usingClientEntryPoint:!1,Events:[ua,Vi,Hc,Jy,ex,qm]},po={findFiberByHostInstance:si,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},hN={bundleType:po.bundleType,version:po.version,rendererPackageName:po.rendererPackageName,rendererConfig:po.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:yr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=sx(e),e===null?null:e.stateNode},findFiberByHostInstance:po.findFiberByHostInstance||uN,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{Dc=al.inject(hN),Qn=al}catch{}}an.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fN;an.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xm(t))throw Error(X(200));return cN(e,t,null,n)};an.createRoot=function(e,t){if(!Xm(e))throw Error(X(299));var n=!1,r="",s=Mw;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Gm(e,1,!1,null,null,n,!1,r,s),e[mr]=t.current,Uo(e.nodeType===8?e.parentNode:e),new Km(t)};an.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(X(188)):(e=Object.keys(e).join(","),Error(X(268,e)));return e=sx(t),e=e===null?null:e.stateNode,e};an.flushSync=function(e){return wi(e)};an.hydrate=function(e,t,n){if(!Qc(t))throw Error(X(200));return Jc(null,e,t,!0,n)};an.hydrateRoot=function(e,t,n){if(!Xm(e))throw Error(X(405));var r=n!=null&&n.hydratedSources||null,s=!1,l="",c=Mw;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(c=n.onRecoverableError)),t=zw(t,null,e,1,n??null,s,!1,l,c),e[mr]=t.current,Uo(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Xc(t)};an.render=function(e,t,n){if(!Qc(t))throw Error(X(200));return Jc(null,e,t,!1,n)};an.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(X(40));return e._reactRootContainer?(wi(function(){Jc(null,null,e,!1,function(){e._reactRootContainer=null,e[mr]=null})}),!0):!1};an.unstable_batchedUpdates=qm;an.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(X(200));if(e==null||e._reactInternals===void 0)throw Error(X(38));return Jc(e,t,n,!1,r)};an.version="18.3.1-next-f1338f8080-20240426";function $w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($w)}catch(e){console.error(e)}}$w(),$y.exports=an;var mN=$y.exports,nv=mN;Nf.createRoot=nv.createRoot,Nf.hydrateRoot=nv.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Xo(){return Xo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Xo.apply(this,arguments)}var Lr;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Lr||(Lr={}));const rv="popstate";function pN(e){e===void 0&&(e={});function t(r,s){let{pathname:l,search:c,hash:d}=r.location;return xh("",{pathname:l,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:dc(s)}return vN(t,n,null,e)}function ot(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Dw(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function gN(){return Math.random().toString(36).substr(2,8)}function iv(e,t){return{usr:e.state,key:e.key,idx:t}}function xh(e,t,n,r){return n===void 0&&(n=null),Xo({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Rs(t):t,{state:n,key:t&&t.key||r||gN()})}function dc(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Rs(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function vN(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:l=!1}=r,c=s.history,d=Lr.Pop,f=null,m=p();m==null&&(m=0,c.replaceState(Xo({},c.state,{idx:m}),""));function p(){return(c.state||{idx:null}).idx}function v(){d=Lr.Pop;let S=p(),_=S==null?null:S-m;m=S,f&&f({action:d,location:w.location,delta:_})}function b(S,_){d=Lr.Push;let y=xh(w.location,S,_);m=p()+1;let x=iv(y,m),E=w.createHref(y);try{c.pushState(x,"",E)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;s.location.assign(E)}l&&f&&f({action:d,location:w.location,delta:1})}function k(S,_){d=Lr.Replace;let y=xh(w.location,S,_);m=p();let x=iv(y,m),E=w.createHref(y);c.replaceState(x,"",E),l&&f&&f({action:d,location:w.location,delta:0})}function N(S){let _=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof S=="string"?S:dc(S);return y=y.replace(/ $/,"%20"),ot(_,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,_)}let w={get action(){return d},get location(){return e(s,c)},listen(S){if(f)throw new Error("A history only accepts one active listener");return s.addEventListener(rv,v),f=S,()=>{s.removeEventListener(rv,v),f=null}},createHref(S){return t(s,S)},createURL:N,encodeLocation(S){let _=N(S);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:b,replace:k,go(S){return c.go(S)}};return w}var sv;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(sv||(sv={}));function yN(e,t,n){return n===void 0&&(n="/"),xN(e,t,n)}function xN(e,t,n,r){let s=typeof t=="string"?Rs(t):t,l=Qm(s.pathname||"/",n);if(l==null)return null;let c=Bw(e);wN(c);let d=null;for(let f=0;d==null&&f<c.length;++f){let m=ON(l);d=EN(c[f],m)}return d}function Bw(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(l,c,d)=>{let f={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};f.relativePath.startsWith("/")&&(ot(f.relativePath.startsWith(r),'Absolute route path "'+f.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),f.relativePath=f.relativePath.slice(r.length));let m=Ur([r,f.relativePath]),p=n.concat(f);l.children&&l.children.length>0&&(ot(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),Bw(l.children,t,p,m)),!(l.path==null&&!l.index)&&t.push({path:m,score:CN(m,l.index),routesMeta:p})};return e.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let f of Fw(l.path))s(l,c,f)}),t}function Fw(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),l=n.replace(/\?$/,"");if(r.length===0)return s?[l,""]:[l];let c=Fw(r.join("/")),d=[];return d.push(...c.map(f=>f===""?l:[l,f].join("/"))),s&&d.push(...c),d.map(f=>e.startsWith("/")&&f===""?"/":f)}function wN(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:PN(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bN=/^:[\w-]+$/,_N=3,SN=2,kN=1,jN=10,NN=-2,ov=e=>e==="*";function CN(e,t){let n=e.split("/"),r=n.length;return n.some(ov)&&(r+=NN),t&&(r+=SN),n.filter(s=>!ov(s)).reduce((s,l)=>s+(bN.test(l)?_N:l===""?kN:jN),r)}function PN(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function EN(e,t,n){let{routesMeta:r}=e,s={},l="/",c=[];for(let d=0;d<r.length;++d){let f=r[d],m=d===r.length-1,p=l==="/"?t:t.slice(l.length)||"/",v=TN({path:f.relativePath,caseSensitive:f.caseSensitive,end:m},p),b=f.route;if(!v)return null;Object.assign(s,v.params),c.push({params:s,pathname:Ur([l,v.pathname]),pathnameBase:zN(Ur([l,v.pathnameBase])),route:b}),v.pathnameBase!=="/"&&(l=Ur([l,v.pathnameBase]))}return c}function TN(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=LN(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:r.reduce((m,p,v)=>{let{paramName:b,isOptional:k}=p;if(b==="*"){let w=d[v]||"";c=l.slice(0,l.length-w.length).replace(/(.)\/+$/,"$1")}const N=d[v];return k&&!N?m[b]=void 0:m[b]=(N||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:c,pattern:e}}function LN(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Dw(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,f)=>(r.push({paramName:d,isOptional:f!=null}),f?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function ON(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Dw(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Qm(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function AN(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?Rs(e):e;return{pathname:n?n.startsWith("/")?n:IN(n,t):t,search:MN(r),hash:$N(s)}}function IN(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function tf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function RN(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uw(e,t){let n=RN(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Hw(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=Rs(e):(s=Xo({},e),ot(!s.pathname||!s.pathname.includes("?"),tf("?","pathname","search",s)),ot(!s.pathname||!s.pathname.includes("#"),tf("#","pathname","hash",s)),ot(!s.search||!s.search.includes("#"),tf("#","search","hash",s)));let l=e===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=n;else{let v=t.length-1;if(!r&&c.startsWith("..")){let b=c.split("/");for(;b[0]==="..";)b.shift(),v-=1;s.pathname=b.join("/")}d=v>=0?t[v]:"/"}let f=AN(s,d),m=c&&c!=="/"&&c.endsWith("/"),p=(l||c===".")&&n.endsWith("/");return!f.pathname.endsWith("/")&&(m||p)&&(f.pathname+="/"),f}const Ur=e=>e.join("/").replace(/\/\/+/g,"/"),zN=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),MN=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,$N=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function DN(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const qw=["post","put","patch","delete"];new Set(qw);const BN=["get",...qw];new Set(BN);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Qo.apply(this,arguments)}const Jm=j.createContext(null),FN=j.createContext(null),Ni=j.createContext(null),eu=j.createContext(null),Gr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),Ww=j.createContext(null);function UN(e,t){let{relative:n}=t===void 0?{}:t;fa()||ot(!1);let{basename:r,navigator:s}=j.useContext(Ni),{hash:l,pathname:c,search:d}=Vw(e,{relative:n}),f=c;return r!=="/"&&(f=c==="/"?r:Ur([r,c])),s.createHref({pathname:f,search:d,hash:l})}function fa(){return j.useContext(eu)!=null}function Yr(){return fa()||ot(!1),j.useContext(eu).location}function Zw(e){j.useContext(Ni).static||j.useLayoutEffect(e)}function Mn(){let{isDataRoute:e}=j.useContext(Gr);return e?nC():HN()}function HN(){fa()||ot(!1);let e=j.useContext(Jm),{basename:t,future:n,navigator:r}=j.useContext(Ni),{matches:s}=j.useContext(Gr),{pathname:l}=Yr(),c=JSON.stringify(Uw(s,n.v7_relativeSplatPath)),d=j.useRef(!1);return Zw(()=>{d.current=!0}),j.useCallback(function(m,p){if(p===void 0&&(p={}),!d.current)return;if(typeof m=="number"){r.go(m);return}let v=Hw(m,JSON.parse(c),l,p.relative==="path");e==null&&t!=="/"&&(v.pathname=v.pathname==="/"?t:Ur([t,v.pathname])),(p.replace?r.replace:r.push)(v,p.state,p)},[t,r,c,l,e])}function qN(){let{matches:e}=j.useContext(Gr),t=e[e.length-1];return t?t.params:{}}function Vw(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=j.useContext(Ni),{matches:s}=j.useContext(Gr),{pathname:l}=Yr(),c=JSON.stringify(Uw(s,r.v7_relativeSplatPath));return j.useMemo(()=>Hw(e,JSON.parse(c),l,n==="path"),[e,c,l,n])}function WN(e,t){return ZN(e,t)}function ZN(e,t,n,r){fa()||ot(!1);let{navigator:s}=j.useContext(Ni),{matches:l}=j.useContext(Gr),c=l[l.length-1],d=c?c.params:{};c&&c.pathname;let f=c?c.pathnameBase:"/";c&&c.route;let m=Yr(),p;if(t){var v;let S=typeof t=="string"?Rs(t):t;f==="/"||(v=S.pathname)!=null&&v.startsWith(f)||ot(!1),p=S}else p=m;let b=p.pathname||"/",k=b;if(f!=="/"){let S=f.replace(/^\//,"").split("/");k="/"+b.replace(/^\//,"").split("/").slice(S.length).join("/")}let N=yN(e,{pathname:k}),w=XN(N&&N.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:Ur([f,s.encodeLocation?s.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?f:Ur([f,s.encodeLocation?s.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),l,n,r);return t&&w?j.createElement(eu.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Lr.Pop}},w):w}function VN(){let e=tC(),t=DN(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},t),n?j.createElement("pre",{style:s},n):null,null)}const GN=j.createElement(VN,null);class YN extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?j.createElement(Gr.Provider,{value:this.props.routeContext},j.createElement(Ww.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function KN(e){let{routeContext:t,match:n,children:r}=e,s=j.useContext(Jm);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Gr.Provider,{value:t},r)}function XN(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=r)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let c=e,d=(s=n)==null?void 0:s.errors;if(d!=null){let p=c.findIndex(v=>v.route.id&&(d==null?void 0:d[v.route.id])!==void 0);p>=0||ot(!1),c=c.slice(0,Math.min(c.length,p+1))}let f=!1,m=-1;if(n&&r&&r.v7_partialHydration)for(let p=0;p<c.length;p++){let v=c[p];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(m=p),v.route.id){let{loaderData:b,errors:k}=n,N=v.route.loader&&b[v.route.id]===void 0&&(!k||k[v.route.id]===void 0);if(v.route.lazy||N){f=!0,m>=0?c=c.slice(0,m+1):c=[c[0]];break}}}return c.reduceRight((p,v,b)=>{let k,N=!1,w=null,S=null;n&&(k=d&&v.route.id?d[v.route.id]:void 0,w=v.route.errorElement||GN,f&&(m<0&&b===0?(rC("route-fallback"),N=!0,S=null):m===b&&(N=!0,S=v.route.hydrateFallbackElement||null)));let _=t.concat(c.slice(0,b+1)),y=()=>{let x;return k?x=w:N?x=S:v.route.Component?x=j.createElement(v.route.Component,null):v.route.element?x=v.route.element:x=p,j.createElement(KN,{match:v,routeContext:{outlet:p,matches:_,isDataRoute:n!=null},children:x})};return n&&(v.route.ErrorBoundary||v.route.errorElement||b===0)?j.createElement(YN,{location:n.location,revalidation:n.revalidation,component:w,error:k,children:y(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):y()},null)}var Gw=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Gw||{}),Yw=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Yw||{});function QN(e){let t=j.useContext(Jm);return t||ot(!1),t}function JN(e){let t=j.useContext(FN);return t||ot(!1),t}function eC(e){let t=j.useContext(Gr);return t||ot(!1),t}function Kw(e){let t=eC(),n=t.matches[t.matches.length-1];return n.route.id||ot(!1),n.route.id}function tC(){var e;let t=j.useContext(Ww),n=JN(),r=Kw();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function nC(){let{router:e}=QN(Gw.UseNavigateStable),t=Kw(Yw.UseNavigateStable),n=j.useRef(!1);return Zw(()=>{n.current=!0}),j.useCallback(function(s,l){l===void 0&&(l={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Qo({fromRouteId:t},l)))},[e,t])}const av={};function rC(e,t,n){av[e]||(av[e]=!0)}function iC(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Ot(e){ot(!1)}function sC(e){let{basename:t="/",children:n=null,location:r,navigationType:s=Lr.Pop,navigator:l,static:c=!1,future:d}=e;fa()&&ot(!1);let f=t.replace(/^\/*/,"/"),m=j.useMemo(()=>({basename:f,navigator:l,static:c,future:Qo({v7_relativeSplatPath:!1},d)}),[f,d,l,c]);typeof r=="string"&&(r=Rs(r));let{pathname:p="/",search:v="",hash:b="",state:k=null,key:N="default"}=r,w=j.useMemo(()=>{let S=Qm(p,f);return S==null?null:{location:{pathname:S,search:v,hash:b,state:k,key:N},navigationType:s}},[f,p,v,b,k,N,s]);return w==null?null:j.createElement(Ni.Provider,{value:m},j.createElement(eu.Provider,{children:n,value:w}))}function oC(e){let{children:t,location:n}=e;return WN(wh(t),n)}new Promise(()=>{});function wh(e,t){t===void 0&&(t=[]);let n=[];return j.Children.forEach(e,(r,s)=>{if(!j.isValidElement(r))return;let l=[...t,s];if(r.type===j.Fragment){n.push.apply(n,wh(r.props.children,l));return}r.type!==Ot&&ot(!1),!r.props.index||!r.props.children||ot(!1);let c={id:r.props.id||l.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=wh(r.props.children,l)),n.push(c)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bh(){return bh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},bh.apply(this,arguments)}function aC(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,l;for(l=0;l<r.length;l++)s=r[l],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function lC(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function cC(e,t){return e.button===0&&(!t||t==="_self")&&!lC(e)}function _h(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(s=>[n,s]):[[n,r]])},[]))}function uC(e,t){let n=_h(e);return t&&t.forEach((r,s)=>{n.has(s)||t.getAll(s).forEach(l=>{n.append(s,l)})}),n}const dC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],fC="6";try{window.__reactRouterVersion=fC}catch{}const hC="startTransition",lv=jf[hC];function mC(e){let{basename:t,children:n,future:r,window:s}=e,l=j.useRef();l.current==null&&(l.current=pN({window:s,v5Compat:!0}));let c=l.current,[d,f]=j.useState({action:c.action,location:c.location}),{v7_startTransition:m}=r||{},p=j.useCallback(v=>{m&&lv?lv(()=>f(v)):f(v)},[f,m]);return j.useLayoutEffect(()=>c.listen(p),[c,p]),j.useEffect(()=>iC(r),[r]),j.createElement(sC,{basename:t,children:n,location:d.location,navigationType:d.action,navigator:c,future:r})}const pC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",gC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xe=j.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:l,replace:c,state:d,target:f,to:m,preventScrollReset:p,viewTransition:v}=t,b=aC(t,dC),{basename:k}=j.useContext(Ni),N,w=!1;if(typeof m=="string"&&gC.test(m)&&(N=m,pC))try{let x=new URL(window.location.href),E=m.startsWith("//")?new URL(x.protocol+m):new URL(m),T=Qm(E.pathname,k);E.origin===x.origin&&T!=null?m=T+E.search+E.hash:w=!0}catch{}let S=UN(m,{relative:s}),_=vC(m,{replace:c,state:d,target:f,preventScrollReset:p,relative:s,viewTransition:v});function y(x){r&&r(x),x.defaultPrevented||_(x)}return j.createElement("a",bh({},b,{href:N||S,onClick:w||l?r:y,ref:n,target:f}))});var cv;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(cv||(cv={}));var uv;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(uv||(uv={}));function vC(e,t){let{target:n,replace:r,state:s,preventScrollReset:l,relative:c,viewTransition:d}=t===void 0?{}:t,f=Mn(),m=Yr(),p=Vw(e,{relative:c});return j.useCallback(v=>{if(cC(v,n)){v.preventDefault();let b=r!==void 0?r:dc(m)===dc(p);f(e,{replace:b,state:s,preventScrollReset:l,relative:c,viewTransition:d})}},[m,f,p,r,s,n,e,l,c,d])}function yC(e){let t=j.useRef(_h(e)),n=j.useRef(!1),r=Yr(),s=j.useMemo(()=>uC(r.search,n.current?null:t.current),[r.search]),l=Mn(),c=j.useCallback((d,f)=>{const m=_h(typeof d=="function"?d(s):d);n.current=!0,l("?"+m,f)},[l,s]);return[s,c]}function Xw(e,t){return function(){return e.apply(t,arguments)}}const{toString:xC}=Object.prototype,{getPrototypeOf:ep}=Object,{iterator:tu,toStringTag:Qw}=Symbol,nu=(e=>t=>{const n=xC.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),$n=e=>(e=e.toLowerCase(),t=>nu(t)===e),ru=e=>t=>typeof t===e,{isArray:zs}=Array,Jo=ru("undefined");function wC(e){return e!==null&&!Jo(e)&&e.constructor!==null&&!Jo(e.constructor)&&Yt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Jw=$n("ArrayBuffer");function bC(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Jw(e.buffer),t}const _C=ru("string"),Yt=ru("function"),eb=ru("number"),iu=e=>e!==null&&typeof e=="object",SC=e=>e===!0||e===!1,Cl=e=>{if(nu(e)!=="object")return!1;const t=ep(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Qw in e)&&!(tu in e)},kC=$n("Date"),jC=$n("File"),NC=$n("Blob"),CC=$n("FileList"),PC=e=>iu(e)&&Yt(e.pipe),EC=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Yt(e.append)&&((t=nu(e))==="formdata"||t==="object"&&Yt(e.toString)&&e.toString()==="[object FormData]"))},TC=$n("URLSearchParams"),[LC,OC,AC,IC]=["ReadableStream","Request","Response","Headers"].map($n),RC=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ha(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),zs(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const l=n?Object.getOwnPropertyNames(e):Object.keys(e),c=l.length;let d;for(r=0;r<c;r++)d=l[r],t.call(null,e[d],d,e)}}function tb(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const li=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,nb=e=>!Jo(e)&&e!==li;function Sh(){const{caseless:e}=nb(this)&&this||{},t={},n=(r,s)=>{const l=e&&tb(t,s)||s;Cl(t[l])&&Cl(r)?t[l]=Sh(t[l],r):Cl(r)?t[l]=Sh({},r):zs(r)?t[l]=r.slice():t[l]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ha(arguments[r],n);return t}const zC=(e,t,n,{allOwnKeys:r}={})=>(ha(t,(s,l)=>{n&&Yt(s)?e[l]=Xw(s,n):e[l]=s},{allOwnKeys:r}),e),MC=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),$C=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},DC=(e,t,n,r)=>{let s,l,c;const d={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),l=s.length;l-- >0;)c=s[l],(!r||r(c,e,t))&&!d[c]&&(t[c]=e[c],d[c]=!0);e=n!==!1&&ep(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},BC=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},FC=e=>{if(!e)return null;if(zs(e))return e;let t=e.length;if(!eb(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},UC=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&ep(Uint8Array)),HC=(e,t)=>{const r=(e&&e[tu]).call(e);let s;for(;(s=r.next())&&!s.done;){const l=s.value;t.call(e,l[0],l[1])}},qC=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},WC=$n("HTMLFormElement"),ZC=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),dv=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),VC=$n("RegExp"),rb=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ha(n,(s,l)=>{let c;(c=t(s,l,e))!==!1&&(r[l]=c||s)}),Object.defineProperties(e,r)},GC=e=>{rb(e,(t,n)=>{if(Yt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Yt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},YC=(e,t)=>{const n={},r=s=>{s.forEach(l=>{n[l]=!0})};return zs(e)?r(e):r(String(e).split(t)),n},KC=()=>{},XC=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function QC(e){return!!(e&&Yt(e.append)&&e[Qw]==="FormData"&&e[tu])}const JC=e=>{const t=new Array(10),n=(r,s)=>{if(iu(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const l=zs(r)?[]:{};return ha(r,(c,d)=>{const f=n(c,s+1);!Jo(f)&&(l[d]=f)}),t[s]=void 0,l}}return r};return n(e,0)},eP=$n("AsyncFunction"),tP=e=>e&&(iu(e)||Yt(e))&&Yt(e.then)&&Yt(e.catch),ib=((e,t)=>e?setImmediate:t?((n,r)=>(li.addEventListener("message",({source:s,data:l})=>{s===li&&l===n&&r.length&&r.shift()()},!1),s=>{r.push(s),li.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Yt(li.postMessage)),nP=typeof queueMicrotask<"u"?queueMicrotask.bind(li):typeof process<"u"&&process.nextTick||ib,rP=e=>e!=null&&Yt(e[tu]),H={isArray:zs,isArrayBuffer:Jw,isBuffer:wC,isFormData:EC,isArrayBufferView:bC,isString:_C,isNumber:eb,isBoolean:SC,isObject:iu,isPlainObject:Cl,isReadableStream:LC,isRequest:OC,isResponse:AC,isHeaders:IC,isUndefined:Jo,isDate:kC,isFile:jC,isBlob:NC,isRegExp:VC,isFunction:Yt,isStream:PC,isURLSearchParams:TC,isTypedArray:UC,isFileList:CC,forEach:ha,merge:Sh,extend:zC,trim:RC,stripBOM:MC,inherits:$C,toFlatObject:DC,kindOf:nu,kindOfTest:$n,endsWith:BC,toArray:FC,forEachEntry:HC,matchAll:qC,isHTMLForm:WC,hasOwnProperty:dv,hasOwnProp:dv,reduceDescriptors:rb,freezeMethods:GC,toObjectSet:YC,toCamelCase:ZC,noop:KC,toFiniteNumber:XC,findKey:tb,global:li,isContextDefined:nb,isSpecCompliantForm:QC,toJSONObject:JC,isAsyncFn:eP,isThenable:tP,setImmediate:ib,asap:nP,isIterable:rP};function me(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}H.inherits(me,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:H.toJSONObject(this.config),code:this.code,status:this.status}}});const sb=me.prototype,ob={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ob[e]={value:e}});Object.defineProperties(me,ob);Object.defineProperty(sb,"isAxiosError",{value:!0});me.from=(e,t,n,r,s,l)=>{const c=Object.create(sb);return H.toFlatObject(e,c,function(f){return f!==Error.prototype},d=>d!=="isAxiosError"),me.call(c,e.message,t,n,r,s),c.cause=e,c.name=e.name,l&&Object.assign(c,l),c};const iP=null;function kh(e){return H.isPlainObject(e)||H.isArray(e)}function ab(e){return H.endsWith(e,"[]")?e.slice(0,-2):e}function fv(e,t,n){return e?e.concat(t).map(function(s,l){return s=ab(s),!n&&l?"["+s+"]":s}).join(n?".":""):t}function sP(e){return H.isArray(e)&&!e.some(kh)}const oP=H.toFlatObject(H,{},null,function(t){return/^is[A-Z]/.test(t)});function su(e,t,n){if(!H.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=H.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,S){return!H.isUndefined(S[w])});const r=n.metaTokens,s=n.visitor||p,l=n.dots,c=n.indexes,f=(n.Blob||typeof Blob<"u"&&Blob)&&H.isSpecCompliantForm(t);if(!H.isFunction(s))throw new TypeError("visitor must be a function");function m(N){if(N===null)return"";if(H.isDate(N))return N.toISOString();if(H.isBoolean(N))return N.toString();if(!f&&H.isBlob(N))throw new me("Blob is not supported. Use a Buffer instead.");return H.isArrayBuffer(N)||H.isTypedArray(N)?f&&typeof Blob=="function"?new Blob([N]):Buffer.from(N):N}function p(N,w,S){let _=N;if(N&&!S&&typeof N=="object"){if(H.endsWith(w,"{}"))w=r?w:w.slice(0,-2),N=JSON.stringify(N);else if(H.isArray(N)&&sP(N)||(H.isFileList(N)||H.endsWith(w,"[]"))&&(_=H.toArray(N)))return w=ab(w),_.forEach(function(x,E){!(H.isUndefined(x)||x===null)&&t.append(c===!0?fv([w],E,l):c===null?w:w+"[]",m(x))}),!1}return kh(N)?!0:(t.append(fv(S,w,l),m(N)),!1)}const v=[],b=Object.assign(oP,{defaultVisitor:p,convertValue:m,isVisitable:kh});function k(N,w){if(!H.isUndefined(N)){if(v.indexOf(N)!==-1)throw Error("Circular reference detected in "+w.join("."));v.push(N),H.forEach(N,function(_,y){(!(H.isUndefined(_)||_===null)&&s.call(t,_,H.isString(y)?y.trim():y,w,b))===!0&&k(_,w?w.concat(y):[y])}),v.pop()}}if(!H.isObject(e))throw new TypeError("data must be an object");return k(e),t}function hv(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function tp(e,t){this._pairs=[],e&&su(e,this,t)}const lb=tp.prototype;lb.append=function(t,n){this._pairs.push([t,n])};lb.toString=function(t){const n=t?function(r){return t.call(this,r,hv)}:hv;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function aP(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function cb(e,t,n){if(!t)return e;const r=n&&n.encode||aP;H.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let l;if(s?l=s(t,n):l=H.isURLSearchParams(t)?t.toString():new tp(t,n).toString(r),l){const c=e.indexOf("#");c!==-1&&(e=e.slice(0,c)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class mv{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){H.forEach(this.handlers,function(r){r!==null&&t(r)})}}const ub={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},lP=typeof URLSearchParams<"u"?URLSearchParams:tp,cP=typeof FormData<"u"?FormData:null,uP=typeof Blob<"u"?Blob:null,dP={isBrowser:!0,classes:{URLSearchParams:lP,FormData:cP,Blob:uP},protocols:["http","https","file","blob","url","data"]},np=typeof window<"u"&&typeof document<"u",jh=typeof navigator=="object"&&navigator||void 0,fP=np&&(!jh||["ReactNative","NativeScript","NS"].indexOf(jh.product)<0),hP=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mP=np&&window.location.href||"http://localhost",pP=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:np,hasStandardBrowserEnv:fP,hasStandardBrowserWebWorkerEnv:hP,navigator:jh,origin:mP},Symbol.toStringTag,{value:"Module"})),Nt={...pP,...dP};function gP(e,t){return su(e,new Nt.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,l){return Nt.isNode&&H.isBuffer(n)?(this.append(r,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},t))}function vP(e){return H.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yP(e){const t={},n=Object.keys(e);let r;const s=n.length;let l;for(r=0;r<s;r++)l=n[r],t[l]=e[l];return t}function db(e){function t(n,r,s,l){let c=n[l++];if(c==="__proto__")return!0;const d=Number.isFinite(+c),f=l>=n.length;return c=!c&&H.isArray(s)?s.length:c,f?(H.hasOwnProp(s,c)?s[c]=[s[c],r]:s[c]=r,!d):((!s[c]||!H.isObject(s[c]))&&(s[c]=[]),t(n,r,s[c],l)&&H.isArray(s[c])&&(s[c]=yP(s[c])),!d)}if(H.isFormData(e)&&H.isFunction(e.entries)){const n={};return H.forEachEntry(e,(r,s)=>{t(vP(r),s,n,0)}),n}return null}function xP(e,t,n){if(H.isString(e))try{return(t||JSON.parse)(e),H.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const ma={transitional:ub,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,l=H.isObject(t);if(l&&H.isHTMLForm(t)&&(t=new FormData(t)),H.isFormData(t))return s?JSON.stringify(db(t)):t;if(H.isArrayBuffer(t)||H.isBuffer(t)||H.isStream(t)||H.isFile(t)||H.isBlob(t)||H.isReadableStream(t))return t;if(H.isArrayBufferView(t))return t.buffer;if(H.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let d;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return gP(t,this.formSerializer).toString();if((d=H.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return su(d?{"files[]":t}:t,f&&new f,this.formSerializer)}}return l||s?(n.setContentType("application/json",!1),xP(t)):t}],transformResponse:[function(t){const n=this.transitional||ma.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(H.isResponse(t)||H.isReadableStream(t))return t;if(t&&H.isString(t)&&(r&&!this.responseType||s)){const c=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(d){if(c)throw d.name==="SyntaxError"?me.from(d,me.ERR_BAD_RESPONSE,this,null,this.response):d}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};H.forEach(["delete","get","head","post","put","patch"],e=>{ma.headers[e]={}});const wP=H.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),bP=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(c){s=c.indexOf(":"),n=c.substring(0,s).trim().toLowerCase(),r=c.substring(s+1).trim(),!(!n||t[n]&&wP[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},pv=Symbol("internals");function go(e){return e&&String(e).trim().toLowerCase()}function Pl(e){return e===!1||e==null?e:H.isArray(e)?e.map(Pl):String(e)}function _P(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const SP=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function nf(e,t,n,r,s){if(H.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!H.isString(t)){if(H.isString(r))return t.indexOf(r)!==-1;if(H.isRegExp(r))return r.test(t)}}function kP(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function jP(e,t){const n=H.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,l,c){return this[r].call(this,t,s,l,c)},configurable:!0})})}let Kt=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function l(d,f,m){const p=go(f);if(!p)throw new Error("header name must be a non-empty string");const v=H.findKey(s,p);(!v||s[v]===void 0||m===!0||m===void 0&&s[v]!==!1)&&(s[v||f]=Pl(d))}const c=(d,f)=>H.forEach(d,(m,p)=>l(m,p,f));if(H.isPlainObject(t)||t instanceof this.constructor)c(t,n);else if(H.isString(t)&&(t=t.trim())&&!SP(t))c(bP(t),n);else if(H.isObject(t)&&H.isIterable(t)){let d={},f,m;for(const p of t){if(!H.isArray(p))throw TypeError("Object iterator must return a key-value pair");d[m=p[0]]=(f=d[m])?H.isArray(f)?[...f,p[1]]:[f,p[1]]:p[1]}c(d,n)}else t!=null&&l(n,t,r);return this}get(t,n){if(t=go(t),t){const r=H.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return _P(s);if(H.isFunction(n))return n.call(this,s,r);if(H.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=go(t),t){const r=H.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||nf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function l(c){if(c=go(c),c){const d=H.findKey(r,c);d&&(!n||nf(r,r[d],d,n))&&(delete r[d],s=!0)}}return H.isArray(t)?t.forEach(l):l(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const l=n[r];(!t||nf(this,this[l],l,t,!0))&&(delete this[l],s=!0)}return s}normalize(t){const n=this,r={};return H.forEach(this,(s,l)=>{const c=H.findKey(r,l);if(c){n[c]=Pl(s),delete n[l];return}const d=t?kP(l):String(l).trim();d!==l&&delete n[l],n[d]=Pl(s),r[d]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return H.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&H.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[pv]=this[pv]={accessors:{}}).accessors,s=this.prototype;function l(c){const d=go(c);r[d]||(jP(s,c),r[d]=!0)}return H.isArray(t)?t.forEach(l):l(t),this}};Kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);H.reduceDescriptors(Kt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});H.freezeMethods(Kt);function rf(e,t){const n=this||ma,r=t||n,s=Kt.from(r.headers);let l=r.data;return H.forEach(e,function(d){l=d.call(n,l,s.normalize(),t?t.status:void 0)}),s.normalize(),l}function fb(e){return!!(e&&e.__CANCEL__)}function Ms(e,t,n){me.call(this,e??"canceled",me.ERR_CANCELED,t,n),this.name="CanceledError"}H.inherits(Ms,me,{__CANCEL__:!0});function hb(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new me("Request failed with status code "+n.status,[me.ERR_BAD_REQUEST,me.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function NP(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function CP(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,l=0,c;return t=t!==void 0?t:1e3,function(f){const m=Date.now(),p=r[l];c||(c=m),n[s]=f,r[s]=m;let v=l,b=0;for(;v!==s;)b+=n[v++],v=v%e;if(s=(s+1)%e,s===l&&(l=(l+1)%e),m-c<t)return;const k=p&&m-p;return k?Math.round(b*1e3/k):void 0}}function PP(e,t){let n=0,r=1e3/t,s,l;const c=(m,p=Date.now())=>{n=p,s=null,l&&(clearTimeout(l),l=null),e.apply(null,m)};return[(...m)=>{const p=Date.now(),v=p-n;v>=r?c(m,p):(s=m,l||(l=setTimeout(()=>{l=null,c(s)},r-v)))},()=>s&&c(s)]}const fc=(e,t,n=3)=>{let r=0;const s=CP(50,250);return PP(l=>{const c=l.loaded,d=l.lengthComputable?l.total:void 0,f=c-r,m=s(f),p=c<=d;r=c;const v={loaded:c,total:d,progress:d?c/d:void 0,bytes:f,rate:m||void 0,estimated:m&&d&&p?(d-c)/m:void 0,event:l,lengthComputable:d!=null,[t?"download":"upload"]:!0};e(v)},n)},gv=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},vv=e=>(...t)=>H.asap(()=>e(...t)),EP=Nt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Nt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Nt.origin),Nt.navigator&&/(msie|trident)/i.test(Nt.navigator.userAgent)):()=>!0,TP=Nt.hasStandardBrowserEnv?{write(e,t,n,r,s,l){const c=[e+"="+encodeURIComponent(t)];H.isNumber(n)&&c.push("expires="+new Date(n).toGMTString()),H.isString(r)&&c.push("path="+r),H.isString(s)&&c.push("domain="+s),l===!0&&c.push("secure"),document.cookie=c.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function LP(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function OP(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function mb(e,t,n){let r=!LP(t);return e&&(r||n==!1)?OP(e,t):t}const yv=e=>e instanceof Kt?{...e}:e;function bi(e,t){t=t||{};const n={};function r(m,p,v,b){return H.isPlainObject(m)&&H.isPlainObject(p)?H.merge.call({caseless:b},m,p):H.isPlainObject(p)?H.merge({},p):H.isArray(p)?p.slice():p}function s(m,p,v,b){if(H.isUndefined(p)){if(!H.isUndefined(m))return r(void 0,m,v,b)}else return r(m,p,v,b)}function l(m,p){if(!H.isUndefined(p))return r(void 0,p)}function c(m,p){if(H.isUndefined(p)){if(!H.isUndefined(m))return r(void 0,m)}else return r(void 0,p)}function d(m,p,v){if(v in t)return r(m,p);if(v in e)return r(void 0,m)}const f={url:l,method:l,data:l,baseURL:c,transformRequest:c,transformResponse:c,paramsSerializer:c,timeout:c,timeoutMessage:c,withCredentials:c,withXSRFToken:c,adapter:c,responseType:c,xsrfCookieName:c,xsrfHeaderName:c,onUploadProgress:c,onDownloadProgress:c,decompress:c,maxContentLength:c,maxBodyLength:c,beforeRedirect:c,transport:c,httpAgent:c,httpsAgent:c,cancelToken:c,socketPath:c,responseEncoding:c,validateStatus:d,headers:(m,p,v)=>s(yv(m),yv(p),v,!0)};return H.forEach(Object.keys(Object.assign({},e,t)),function(p){const v=f[p]||s,b=v(e[p],t[p],p);H.isUndefined(b)&&v!==d||(n[p]=b)}),n}const pb=e=>{const t=bi({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:l,headers:c,auth:d}=t;t.headers=c=Kt.from(c),t.url=cb(mb(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),d&&c.set("Authorization","Basic "+btoa((d.username||"")+":"+(d.password?unescape(encodeURIComponent(d.password)):"")));let f;if(H.isFormData(n)){if(Nt.hasStandardBrowserEnv||Nt.hasStandardBrowserWebWorkerEnv)c.setContentType(void 0);else if((f=c.getContentType())!==!1){const[m,...p]=f?f.split(";").map(v=>v.trim()).filter(Boolean):[];c.setContentType([m||"multipart/form-data",...p].join("; "))}}if(Nt.hasStandardBrowserEnv&&(r&&H.isFunction(r)&&(r=r(t)),r||r!==!1&&EP(t.url))){const m=s&&l&&TP.read(l);m&&c.set(s,m)}return t},AP=typeof XMLHttpRequest<"u",IP=AP&&function(e){return new Promise(function(n,r){const s=pb(e);let l=s.data;const c=Kt.from(s.headers).normalize();let{responseType:d,onUploadProgress:f,onDownloadProgress:m}=s,p,v,b,k,N;function w(){k&&k(),N&&N(),s.cancelToken&&s.cancelToken.unsubscribe(p),s.signal&&s.signal.removeEventListener("abort",p)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function _(){if(!S)return;const x=Kt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),T={data:!d||d==="text"||d==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:x,config:e,request:S};hb(function(I){n(I),w()},function(I){r(I),w()},T),S=null}"onloadend"in S?S.onloadend=_:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(_)},S.onabort=function(){S&&(r(new me("Request aborted",me.ECONNABORTED,e,S)),S=null)},S.onerror=function(){r(new me("Network Error",me.ERR_NETWORK,e,S)),S=null},S.ontimeout=function(){let E=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||ub;s.timeoutErrorMessage&&(E=s.timeoutErrorMessage),r(new me(E,T.clarifyTimeoutError?me.ETIMEDOUT:me.ECONNABORTED,e,S)),S=null},l===void 0&&c.setContentType(null),"setRequestHeader"in S&&H.forEach(c.toJSON(),function(E,T){S.setRequestHeader(T,E)}),H.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),d&&d!=="json"&&(S.responseType=s.responseType),m&&([b,N]=fc(m,!0),S.addEventListener("progress",b)),f&&S.upload&&([v,k]=fc(f),S.upload.addEventListener("progress",v),S.upload.addEventListener("loadend",k)),(s.cancelToken||s.signal)&&(p=x=>{S&&(r(!x||x.type?new Ms(null,e,S):x),S.abort(),S=null)},s.cancelToken&&s.cancelToken.subscribe(p),s.signal&&(s.signal.aborted?p():s.signal.addEventListener("abort",p)));const y=NP(s.url);if(y&&Nt.protocols.indexOf(y)===-1){r(new me("Unsupported protocol "+y+":",me.ERR_BAD_REQUEST,e));return}S.send(l||null)})},RP=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const l=function(m){if(!s){s=!0,d();const p=m instanceof Error?m:this.reason;r.abort(p instanceof me?p:new Ms(p instanceof Error?p.message:p))}};let c=t&&setTimeout(()=>{c=null,l(new me(`timeout ${t} of ms exceeded`,me.ETIMEDOUT))},t);const d=()=>{e&&(c&&clearTimeout(c),c=null,e.forEach(m=>{m.unsubscribe?m.unsubscribe(l):m.removeEventListener("abort",l)}),e=null)};e.forEach(m=>m.addEventListener("abort",l));const{signal:f}=r;return f.unsubscribe=()=>H.asap(d),f}},zP=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},MP=async function*(e,t){for await(const n of $P(e))yield*zP(n,t)},$P=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},xv=(e,t,n,r)=>{const s=MP(e,t);let l=0,c,d=f=>{c||(c=!0,r&&r(f))};return new ReadableStream({async pull(f){try{const{done:m,value:p}=await s.next();if(m){d(),f.close();return}let v=p.byteLength;if(n){let b=l+=v;n(b)}f.enqueue(new Uint8Array(p))}catch(m){throw d(m),m}},cancel(f){return d(f),s.return()}},{highWaterMark:2})},ou=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",gb=ou&&typeof ReadableStream=="function",DP=ou&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),vb=(e,...t)=>{try{return!!e(...t)}catch{return!1}},BP=gb&&vb(()=>{let e=!1;const t=new Request(Nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),wv=64*1024,Nh=gb&&vb(()=>H.isReadableStream(new Response("").body)),hc={stream:Nh&&(e=>e.body)};ou&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!hc[t]&&(hc[t]=H.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new me(`Response type '${t}' is not supported`,me.ERR_NOT_SUPPORT,r)})})})(new Response);const FP=async e=>{if(e==null)return 0;if(H.isBlob(e))return e.size;if(H.isSpecCompliantForm(e))return(await new Request(Nt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(H.isArrayBufferView(e)||H.isArrayBuffer(e))return e.byteLength;if(H.isURLSearchParams(e)&&(e=e+""),H.isString(e))return(await DP(e)).byteLength},UP=async(e,t)=>{const n=H.toFiniteNumber(e.getContentLength());return n??FP(t)},HP=ou&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:l,timeout:c,onDownloadProgress:d,onUploadProgress:f,responseType:m,headers:p,withCredentials:v="same-origin",fetchOptions:b}=pb(e);m=m?(m+"").toLowerCase():"text";let k=RP([s,l&&l.toAbortSignal()],c),N;const w=k&&k.unsubscribe&&(()=>{k.unsubscribe()});let S;try{if(f&&BP&&n!=="get"&&n!=="head"&&(S=await UP(p,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),O;if(H.isFormData(r)&&(O=T.headers.get("content-type"))&&p.setContentType(O),T.body){const[I,q]=gv(S,fc(vv(f)));r=xv(T.body,wv,I,q)}}H.isString(v)||(v=v?"include":"omit");const _="credentials"in Request.prototype;N=new Request(t,{...b,signal:k,method:n.toUpperCase(),headers:p.normalize().toJSON(),body:r,duplex:"half",credentials:_?v:void 0});let y=await fetch(N,b);const x=Nh&&(m==="stream"||m==="response");if(Nh&&(d||x&&w)){const T={};["status","statusText","headers"].forEach(F=>{T[F]=y[F]});const O=H.toFiniteNumber(y.headers.get("content-length")),[I,q]=d&&gv(O,fc(vv(d),!0))||[];y=new Response(xv(y.body,wv,I,()=>{q&&q(),w&&w()}),T)}m=m||"text";let E=await hc[H.findKey(hc,m)||"text"](y,e);return!x&&w&&w(),await new Promise((T,O)=>{hb(T,O,{data:E,headers:Kt.from(y.headers),status:y.status,statusText:y.statusText,config:e,request:N})})}catch(_){throw w&&w(),_&&_.name==="TypeError"&&/Load failed|fetch/i.test(_.message)?Object.assign(new me("Network Error",me.ERR_NETWORK,e,N),{cause:_.cause||_}):me.from(_,_&&_.code,e,N)}}),Ch={http:iP,xhr:IP,fetch:HP};H.forEach(Ch,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const bv=e=>`- ${e}`,qP=e=>H.isFunction(e)||e===null||e===!1,yb={getAdapter:e=>{e=H.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let l=0;l<t;l++){n=e[l];let c;if(r=n,!qP(n)&&(r=Ch[(c=String(n)).toLowerCase()],r===void 0))throw new me(`Unknown adapter '${c}'`);if(r)break;s[c||"#"+l]=r}if(!r){const l=Object.entries(s).map(([d,f])=>`adapter ${d} `+(f===!1?"is not supported by the environment":"is not available in the build"));let c=t?l.length>1?`since :
`+l.map(bv).join(`
`):" "+bv(l[0]):"as no adapter specified";throw new me("There is no suitable adapter to dispatch the request "+c,"ERR_NOT_SUPPORT")}return r},adapters:Ch};function sf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ms(null,e)}function _v(e){return sf(e),e.headers=Kt.from(e.headers),e.data=rf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),yb.getAdapter(e.adapter||ma.adapter)(e).then(function(r){return sf(e),r.data=rf.call(e,e.transformResponse,r),r.headers=Kt.from(r.headers),r},function(r){return fb(r)||(sf(e),r&&r.response&&(r.response.data=rf.call(e,e.transformResponse,r.response),r.response.headers=Kt.from(r.response.headers))),Promise.reject(r)})}const xb="1.10.0",au={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{au[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Sv={};au.transitional=function(t,n,r){function s(l,c){return"[Axios v"+xb+"] Transitional option '"+l+"'"+c+(r?". "+r:"")}return(l,c,d)=>{if(t===!1)throw new me(s(c," has been removed"+(n?" in "+n:"")),me.ERR_DEPRECATED);return n&&!Sv[c]&&(Sv[c]=!0,console.warn(s(c," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,c,d):!0}};au.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function WP(e,t,n){if(typeof e!="object")throw new me("options must be an object",me.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const l=r[s],c=t[l];if(c){const d=e[l],f=d===void 0||c(d,l,e);if(f!==!0)throw new me("option "+l+" must be "+f,me.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new me("Unknown option "+l,me.ERR_BAD_OPTION)}}const El={assertOptions:WP,validators:au},Wn=El.validators;let fi=class{constructor(t){this.defaults=t||{},this.interceptors={request:new mv,response:new mv}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const l=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?l&&!String(r.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+l):r.stack=l}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=bi(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:l}=n;r!==void 0&&El.assertOptions(r,{silentJSONParsing:Wn.transitional(Wn.boolean),forcedJSONParsing:Wn.transitional(Wn.boolean),clarifyTimeoutError:Wn.transitional(Wn.boolean)},!1),s!=null&&(H.isFunction(s)?n.paramsSerializer={serialize:s}:El.assertOptions(s,{encode:Wn.function,serialize:Wn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),El.assertOptions(n,{baseUrl:Wn.spelling("baseURL"),withXsrfToken:Wn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let c=l&&H.merge(l.common,l[n.method]);l&&H.forEach(["delete","get","head","post","put","patch","common"],N=>{delete l[N]}),n.headers=Kt.concat(c,l);const d=[];let f=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(f=f&&w.synchronous,d.unshift(w.fulfilled,w.rejected))});const m=[];this.interceptors.response.forEach(function(w){m.push(w.fulfilled,w.rejected)});let p,v=0,b;if(!f){const N=[_v.bind(this),void 0];for(N.unshift.apply(N,d),N.push.apply(N,m),b=N.length,p=Promise.resolve(n);v<b;)p=p.then(N[v++],N[v++]);return p}b=d.length;let k=n;for(v=0;v<b;){const N=d[v++],w=d[v++];try{k=N(k)}catch(S){w.call(this,S);break}}try{p=_v.call(this,k)}catch(N){return Promise.reject(N)}for(v=0,b=m.length;v<b;)p=p.then(m[v++],m[v++]);return p}getUri(t){t=bi(this.defaults,t);const n=mb(t.baseURL,t.url,t.allowAbsoluteUrls);return cb(n,t.params,t.paramsSerializer)}};H.forEach(["delete","get","head","options"],function(t){fi.prototype[t]=function(n,r){return this.request(bi(r||{},{method:t,url:n,data:(r||{}).data}))}});H.forEach(["post","put","patch"],function(t){function n(r){return function(l,c,d){return this.request(bi(d||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:c}))}}fi.prototype[t]=n(),fi.prototype[t+"Form"]=n(!0)});let ZP=class wb{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const r=this;this.promise.then(s=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](s);r._listeners=null}),this.promise.then=s=>{let l;const c=new Promise(d=>{r.subscribe(d),l=d}).then(s);return c.cancel=function(){r.unsubscribe(l)},c},t(function(l,c,d){r.reason||(r.reason=new Ms(l,c,d),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new wb(function(s){t=s}),cancel:t}}};function VP(e){return function(n){return e.apply(null,n)}}function GP(e){return H.isObject(e)&&e.isAxiosError===!0}const Ph={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ph).forEach(([e,t])=>{Ph[t]=e});function bb(e){const t=new fi(e),n=Xw(fi.prototype.request,t);return H.extend(n,fi.prototype,t,{allOwnKeys:!0}),H.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return bb(bi(e,s))},n}const Je=bb(ma);Je.Axios=fi;Je.CanceledError=Ms;Je.CancelToken=ZP;Je.isCancel=fb;Je.VERSION=xb;Je.toFormData=su;Je.AxiosError=me;Je.Cancel=Je.CanceledError;Je.all=function(t){return Promise.all(t)};Je.spread=VP;Je.isAxiosError=GP;Je.mergeConfig=bi;Je.AxiosHeaders=Kt;Je.formToJSON=e=>db(H.isHTMLForm(e)?new FormData(e):e);Je.getAdapter=yb.getAdapter;Je.HttpStatusCode=Ph;Je.default=Je;const{Axios:ZI,AxiosError:VI,CanceledError:GI,isCancel:YI,CancelToken:KI,VERSION:XI,all:QI,Cancel:JI,isAxiosError:eR,spread:tR,toFormData:nR,AxiosHeaders:rR,HttpStatusCode:iR,formToJSON:sR,getAdapter:oR,mergeConfig:aR}=Je,Tl="https://api.fivlia.in",pe={VERIFY_MOBILE:"/verifyMobile",GET_SETTINGS:"/getSettings",LOGIN:"/login",SELLER_VERIFY_OTP:"/seller/verifyOtp",VERIFY_OTP:"/verifyOtp",REGISTER:"/register",GETCITY:"/getAllZone",SUBMIT:"/addSeller",GSTDETAIL:"/getDetailsGst",CATEGORIES:"/getMainCategory",BRANDS:"/getBrand",BANNERS:"/website/forwebgetBanner?lat=29.145848762271545&lng=75.73472849177169",POPULAR_PRODUCTS:"/website/bestSelling?lat=29.1553958&lng=75.7218976",RELATED_PRODUCTS:"/website/relatedProducts?lat=29.1553958&lng=75.7218976",FEATURED_PRODUCTS:"/website/featureProduct?lat=29.1553958&lng=75.7218976",SEARCH_PRODUCTS:"/website/searchProduct?lat=29.1553958&lng=75.7218976",PRODUCTS:"/website/getProduct?lat=29.1553958&lng=75.7218976",ADD_TO_CART:"/addCart",GET_CART:"/getCart",UPDATE_CART:"/updateCart",REMOVE_CART:"/removeCart",GET_ADDRESS:"/getAddress",ADD_ADDRESS:"/address",GET_DELIVERY_ESTIMATE:"/getDeliveryEstimateForWebsite",PLACE_ORDER:"/placeOrder",VERIFY_PAYMENT:"/verifyPayment",GET_ORDERS:"/getOrderDetails",PAGES:"/getPage",SAVE_CONTACT_US:"/save-contact-us"},$s=Je.create({baseURL:Tl,timeout:5e4}),_b=()=>localStorage.getItem("token"),lu=(e={})=>{const t=_b();return t?{...e,headers:{...e.headers,Authorization:`Bearer ${t}`}}:e};$s.interceptors.request.use(e=>{if(e.authRequired){const t=_b();t&&(e.headers=e.headers||{},e.headers.Authorization=`Bearer ${t}`),delete e.authRequired}return e},e=>Promise.reject(e));$s.interceptors.response.use(e=>e,e=>{var t,n,r,s;if(((t=e.response)==null?void 0:t.status)===401){const l=((s=(r=(n=e.response)==null?void 0:n.data)==null?void 0:r.message)==null?void 0:s.toLowerCase())||"";(l.includes("unauthorized")||l.includes("invalid token")||l.includes("token expired"))&&localStorage.removeItem("token")}return Promise.reject(e)});const Re=(e,t={})=>{const n=t.authRequired?lu(t):t;return $s.get(e,n)},xn=(e,t,n={})=>{const r=n.authRequired?lu(n):n;return $s.post(e,t,r)},YP=(e,t,n={})=>{const r=n.authRequired?lu(n):n;return $s.put(e,t,r)},KP=(e,t={})=>{const n=t.authRequired?lu(t):t;return $s.delete(e,n)},Sb=j.createContext(),XP=({children:e})=>{const[t,n]=j.useState(!1),[r,s]=j.useState(null);j.useEffect(()=>{const f=localStorage.getItem("token");f&&(s(f),n(!0))},[]);const l=f=>{localStorage.setItem("token",f),s(f),n(!0)},c=()=>{localStorage.removeItem("token"),s(null),n(!1)},d=()=>{const f=localStorage.getItem("token");return{isAuthenticated:t&&f,token:f,isLoggedIn:t}};return o.jsx(Sb.Provider,{value:{isLoggedIn:t,token:r,login:l,logout:c,checkAuth:d},children:e})},Ds=()=>j.useContext(Sb),kb=j.createContext(),QP=async()=>{const e={authRequired:!0};return await Re(pe.GET_CART,e)},JP=({children:e})=>{const[t,n]=j.useState([]),[r,s]=j.useState(0),[l,c]=j.useState(null),[d,f]=j.useState(!1),[m,p]=j.useState(!1),[v,b]=j.useState(null),[k,N]=j.useState(!1),[w,S]=j.useState(new Set),[_,y]=j.useState(new Set),{checkAuth:x,isLoggedIn:E}=Ds(),T=j.useRef({}),O=j.useRef({}),I=async()=>{const{isAuthenticated:te}=x();if(!te){n([]),s(0);return}try{p(!0),b(null);const ee=await QP();ee.data&&ee.data.items?(n(ee.data.items),s(ee.data.items.length),c(ee.data.StoreID),f(ee.data.paymentOption)):(n([]),s(0))}catch(ee){b(ee.message),n([]),s(0)}finally{p(!1)}},q=async te=>{const{isAuthenticated:ee}=x();if(!ee){b("User not authenticated");return}O.current[te]&&clearTimeout(O.current[te]),n(V=>V.filter(P=>!(P._id===te||P.cartItemId===te))),y(V=>new Set(V).add(te)),O.current[te]=setTimeout(async()=>{try{const V={authRequired:!0},P=await KP(`${pe.REMOVE_CART}/${te}`,V);P.data&&P.data.success?await I():await I()}catch(V){console.error("CartContext: Failed to remove cart item:",V),b("Failed to remove cart item"),await I()}finally{y(V=>{const P=new Set(V);return P.delete(te),P})}},300)},F=async(te,ee)=>{const{isAuthenticated:V}=x();if(!V){b("User not authenticated");return}if(ee<1){q(te);return}T.current[te]&&clearTimeout(T.current[te]),n(P=>P.map(M=>M._id===te||M.cartItemId===te?{...M,quantity:ee}:M)),S(P=>new Set(P).add(te)),T.current[te]=setTimeout(async()=>{try{const P={authRequired:!0},M=await YP(`${pe.UPDATE_CART}/${te}`,{quantity:ee},P);M.data&&M.data.success?await I():await I()}catch(P){console.error("CartContext: Failed to update cart item:",P),b("Failed to update cart item"),await I()}finally{S(P=>{const M=new Set(P);return M.delete(te),M})}},500)},z=te=>{n(ee=>ee.find(P=>P.productId===te.productId&&P.varientId===te.varientId)?ee.map(P=>P.productId===te.productId&&P.varientId===te.varientId?{...P,quantity:P.quantity+te.quantity}:P):[...ee,te]),I()},B=(te,ee)=>{n(V=>V.filter(P=>!(P.productId===te&&P.varientId===ee))),I()},Z=(te,ee,V)=>{n(P=>P.map(M=>M.productId===te&&M.varientId===ee?{...M,quantity:V}:M)),I()},Q=()=>t.reduce((te,ee)=>te+ee.price*ee.quantity,0),K=()=>{const te=Q();return parseFloat((te*.03).toFixed(2))};return j.useEffect(()=>{E!==void 0&&(N(!0),I())},[E]),j.useEffect(()=>{s(t.length)},[t]),j.useEffect(()=>()=>{Object.values(T.current).forEach(te=>{te&&clearTimeout(te)}),Object.values(O.current).forEach(te=>{te&&clearTimeout(te)})},[]),o.jsx(kb.Provider,{value:{cartItems:t,cartCount:r,loading:m,error:v,addToCart:z,removeFromCart:B,removeCartItem:q,updateQuantity:Z,updateCartItem:F,getCartTotal:Q,getShippingCharge:K,fetchCartItems:I,isInitialized:k,updatingItems:w,removingItems:_,storeId:l,paymentOption:d},children:e})},cu=()=>j.useContext(kb),eE="YHGoHrZHMgUpEeCA1CNKTg4iUePHYU2T8Upv6xdM",tE="https://api.olamaps.io",rp=async(e,t={})=>{const n=new URL(`${tE}${e}`);t.api_key=eE,n.search=new URLSearchParams(t).toString();const r=await fetch(n);if(!r.ok)throw new Error(`Ola Maps API error: ${r.status}`);return r.json()},nE=()=>new Promise((e,t)=>{if(!navigator.geolocation){t(new Error("Geolocation is not supported by this browser"));return}navigator.geolocation.getCurrentPosition(({coords:n})=>e({lat:n.latitude,lng:n.longitude}),n=>{switch(n.code){case n.PERMISSION_DENIED:t(new Error("Location permission denied"));break;case n.POSITION_UNAVAILABLE:t(new Error("Location unavailable"));break;case n.TIMEOUT:t(new Error("Location request timed out"));break;default:t(new Error("Unknown geolocation error"))}},{enableHighAccuracy:!0,timeout:1e4,maximumAge:3e5})}),jb=async e=>{try{return(await rp("/places/v1/autocomplete",{input:e})).predictions||[]}catch{return[]}},Nb=async e=>{try{const t=await rp("/places/v1/details",{place_id:e}),n=t.result.geometry.location;return{lat:n==null?void 0:n.lat,lng:n==null?void 0:n.lng,address:t.result.formatted_address,name:t.result.name}}catch{throw new Error("Failed to get place details")}},rE=async(e,t)=>{var n;try{const s=(n=(await rp("/places/v1/reverse-geocode",{latlng:`${e},${t}`})).results)==null?void 0:n[0];return{address:(s==null?void 0:s.formatted_address)||"",components:(s==null?void 0:s.address_components)||[]}}catch{throw new Error("Failed to get address from coordinates")}},kv=async(e,t)=>{var n,r;try{const s=await Re(`${pe.GET_DELIVERY_ESTIMATE}?lat=${e}&lng=${t}`);if(console.log("Full response:",s.data),(n=s.data)!=null&&n.status&&((r=s.data.filtered)!=null&&r.length)){const l=s.data.filtered[0].duration||"Unavailable";return console.log("🚚 Delivery Duration:",l),l}else return console.warn("⚠️ No delivery data available"),"Unavailable"}catch(s){return console.error("❌ Error fetching delivery time:",s),"Error"}},jv=e=>{try{return localStorage.setItem("userLocation",JSON.stringify({...e,timestamp:Date.now()})),!0}catch{return!1}},iE=()=>{try{const e=localStorage.getItem("userLocation");if(e){const t=JSON.parse(e);if(!(Date.now()-t.timestamp>24*60*60*1e3))return t}return null}catch{return null}},Nv=()=>{const[e,t]=j.useState("Mumbai, Maharashtra"),[n,r]=j.useState("2-3 hours"),[s,l]=j.useState(!1),[c,d]=j.useState(!1),[f,m]=j.useState(""),[p,v]=j.useState([]),[b,k]=j.useState(!1),[N,w]=j.useState(!1),[S,_]=j.useState(""),[y,x]=j.useState(!0),E=j.useRef(null),T=j.useRef(null);j.useEffect(()=>{const B=iE();B?(t(B.address),r(`${B.deliveryTime} minutes`),x(!1)):(d(!0),x(!0))},[]),j.useEffect(()=>(E.current&&clearTimeout(E.current),f.length>2?(w(!0),_(""),E.current=setTimeout(async()=>{try{let B=await jb(f);(!B||B.length===0)&&(B=O(f)),v(B||[])}catch(B){console.error("Error getting suggestions:",B);const Z=O(f);v(Z),_("Using offline suggestions")}finally{w(!1)}},300)):v([]),()=>{E.current&&clearTimeout(E.current)}),[f]);const O=B=>["Mumbai, Maharashtra, India","Delhi, India","Bangalore, Karnataka, India","Hyderabad, Telangana, India","Chennai, Tamil Nadu, India","Kolkata, West Bengal, India","Pune, Maharashtra, India","Ahmedabad, Gujarat, India","Jaipur, Rajasthan, India","Surat, Gujarat, India"].filter(K=>K.toLowerCase().includes(B.toLowerCase())).map((K,te)=>({place_id:`fallback_${te}`,description:K,structured_formatting:{main_text:K.split(",")[0],secondary_text:K.split(",").slice(1).join(",").trim()}})),I=async()=>{k(!0),_("");try{const B=await nE(),Z=await rE(B.lat,B.lng),Q=await kv(B.lat,B.lng);console.log("deliveryTime",Q);const K={lat:B.lat,lng:B.lng,address:Z.address,deliveryTime:Q};jv(K),t(Z.address),r(`${Q}`),d(!1),x(!1)}catch(B){_(B.message)}finally{k(!1)}},q=async B=>{w(!0),_("");try{let Z;if(B.startsWith("fallback_")){const te=parseInt(B.split("_")[1]),V=O("")[te];Z={lat:19.076+(Math.random()-.5)*.1,lng:72.8777+(Math.random()-.5)*.1,address:V.description,name:V.structured_formatting.main_text}}else Z=await Nb(B);const Q=kv(Z.lat,Z.lng),K={lat:Z.lat,lng:Z.lng,address:Z.address,deliveryTime:Q};jv(K),t(Z.address),r(`${Q} `),d(!1),m(""),v([]),x(!1)}catch{_("Failed to get location details")}finally{w(!1)}},F=()=>{y||(d(!1),m(""),v([]),_(""))},z=()=>{d(!0),x(!1)};return j.useEffect(()=>{c&&T.current&&setTimeout(()=>{var B;(B=T.current)==null||B.focus()},100)},[c]),o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"location-delivery-info",onClick:z,children:[o.jsx("style",{children:`
          .location-delivery-info {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem;
            min-width: 200px;
            max-width: 300px;
            font-size: 0.9rem;
            cursor: pointer;
            border-radius: 8px;
            transition: all 0.3s ease;
            position: relative;
          }
          
          .location-delivery-info:hover {
            background-color: rgba(48, 87, 78, 0.05);
            transform: translateY(-1px);
          }
          
          .location-icon {
            color: #30574e;
            flex-shrink: 0;
          }
          
          .location-content {
            flex: 1;
            min-width: 0;
            display: flex;
            flex-direction: column;
            gap: 0.125rem;
          }
          
          .delivery-text {
            font-weight: bold;
            font-size: 1.1rem;
            color: #000000;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-bottom: -5px;
          }
          
          .location-text {
            font-size: 0.8rem;
            color: #6c757d;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-weight: normal;
          }
          
          .chevron-icon {
            color: #6c757d;
            flex-shrink: 0;
            transition: transform 0.3s ease;
          }
          
          .location-delivery-info:hover .chevron-icon {
            transform: translateX(2px);
          }
          
          /* Modal Styles */
          .location-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
            z-index: 9999;
            backdrop-filter: blur(5px);
            padding: 1rem;
          }
          
          .modal-content {
            background: white;
            border-radius: 16px;
            padding: 1.25rem;
            width: 450px;
            height: auto;
            max-height: ${p.length>0?"600px":"400px"};
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
            animation: modalSlideIn 0.3s ease-out;
            margin-top: 20px;
            margin-left: 2rem;
            position: relative;
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateX(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateX(0) scale(1);
            }
          }
          
          .modal-header {
            text-align: center;
            margin-bottom: 1.25rem;
            position: relative;
          }
          
          .modal-title {
            font-size: 1.1rem;
            font-weight: 700;
            color: #30574e;
            margin-bottom: 0.5rem;
          }
          
          .modal-subtitle {
            color: #6c757d;
            font-size: 0.85rem;
          }
          
          .close-btn {
            position: absolute;
            top: 8px;
            right: 8px;
            background: #fff;
            border: 2px solid #e9ecef;
            border-radius: 50%;
            width: 28px;
            height: 28px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 16px;
            color: #6c757d;
            z-index: 10;
          }
          
          .close-btn:hover {
            border-color: #30574e;
            color: #30574e;
            transform: scale(1.1);
          }
          
          .location-options {
            display: flex;
            flex-direction: column;
            gap: 0.875rem;
            margin-bottom: ${p.length>0?"0":"1.25rem"};
          }
          
          .detect-location-btn {
            background: linear-gradient(135deg, #0AAD0A, #0B8A0B);
            color: white;
            border: none;
            padding: 0.75rem 1rem;
            border-radius: 10px;
            font-weight: 600;
            font-size: 0.9rem;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            box-shadow: 0 4px 12px rgba(10, 173, 10, 0.3);
          }
          
          .detect-location-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(10, 173, 10, 0.4);
          }
          
          .detect-location-btn:disabled {
            opacity: 0.7;
            cursor: not-allowed;
            transform: none;
          }
          
          .search-section {
            border-top: 1px solid #e9ecef;
            padding-top: 0.875rem;
            position: relative;
          }
          
          .search-label {
            font-weight: 600;
            color: #30574e;
            margin-bottom: 0.5rem;
            display: block;
            font-size: 0.85rem;
          }
          
          .search-input {
            width: 100%;
            padding: 0.75rem;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            font-size: 0.9rem;
            transition: all 0.3s ease;
            margin-bottom: 0.5rem;
            background: #f8f9fa;
          }
          
          .search-input:focus {
            outline: none;
            border-color: #30574e;
            background: white;
            box-shadow: 0 0 0 3px rgba(48, 87, 78, 0.1);
          }
          
          .error-message {
            color: #dc3545;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            text-align: center;
            padding: 0.5rem;
            background: #f8d7da;
            border-radius: 8px;
            border: 1px solid #f5c6cb;
          }
          
          .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid #ffffff;
            border-radius: 50%;
            border-top-color: transparent;
            animation: spin 1s ease-in-out infinite;
          }
          
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          
          /* Integrated Suggestions Container */
          .suggestions-container {
            border-top: 1px solid #e9ecef;
            margin-top: 0.5rem;
            max-height: 200px;
            overflow-y: auto;
            background: #f8f9fa;
            border-radius: 8px;
            margin-left: -0.5rem;
            margin-right: -0.5rem;
            padding: 0.5rem;
          }
          
          .suggestion-item {
            padding: 0.75rem;
            cursor: pointer;
            border-radius: 6px;
            transition: all 0.2s ease;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 0.75rem;
            margin-bottom: 0.25rem;
          }
          
          .suggestion-item:hover {
            background: white;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            transform: translateX(4px);
          }
          
          .suggestion-item:last-child {
            margin-bottom: 0;
          }
          
          .suggestion-icon {
            color: #0AAD0A;
            flex-shrink: 0;
          }
          
          .suggestion-text {
            flex: 1;
            color: #333;
            font-weight: 500;
          }
          
          .suggestion-subtext {
            font-size: 0.8rem;
            color: #6c757d;
            margin-top: 0.25rem;
          }
          
          /* Responsive styles */
          @media (max-width: 991.98px) {
            .location-delivery-info {
              display: flex;
              min-width: 200px;
              max-width: 300px;
              margin: 0 auto;
            }
            
            .location-modal {
              align-items: center;
              justify-content: center;
            }
            
            .modal-content {
              margin: 0;
              width: 90%;
              max-width: 450px;
            }
          }
          
          @media (max-width: 576px) {
            .location-delivery-info {
              display: flex;
              min-width: 150px;
              max-width: 250px;
              font-size: 0.8rem;
            }
            
            .delivery-text {
              font-size: 1rem;
            }
            
            .location-text {
              font-size: 0.75rem;
            }
            
            .modal-content {
              padding: 1rem;
              margin: 0.5rem;
              width: 95%;
            }
            
            .modal-title {
              font-size: 1rem;
            }
          }
        `}),o.jsx("div",{className:"location-icon",children:o.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),o.jsxs("div",{className:"location-content",children:[o.jsx("div",{className:"delivery-text",children:s?"Loading...":`Delivery in ${n}`}),o.jsx("div",{className:"location-text",children:s?"Getting location...":e})]}),o.jsx("div",{className:"chevron-icon",children:o.jsx("svg",{width:"15",height:"15",fill:"none",stroke:"currentColor",strokeWidth:"5",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:o.jsx("polyline",{points:"6 9 12 15 18 9"})})})]}),c&&o.jsx("div",{className:"location-modal",onClick:F,children:o.jsxs("div",{className:"modal-content",onClick:B=>B.stopPropagation(),children:[!y&&o.jsx("button",{className:"close-btn",onClick:F,children:"×"}),o.jsxs("div",{className:"modal-header",children:[o.jsx("h2",{className:"modal-title",children:y?"Welcome to FIVLIA! 🎉":"Change Location"}),o.jsx("p",{className:"modal-subtitle",style:{marginTop:10},children:y?"Please set your delivery location to get started":"Update your delivery location"})]}),o.jsxs("div",{className:"location-options",children:[o.jsx("button",{className:"detect-location-btn",onClick:I,disabled:b,children:b?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"loading-spinner"}),"Detecting..."]}):o.jsxs(o.Fragment,{children:[o.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]}),"Detect My Location"]})}),o.jsxs("div",{className:"search-section",children:[o.jsx("label",{className:"search-label",children:"Or enter your location manually:"}),o.jsx("input",{ref:T,type:"text",className:"search-input",placeholder:"Enter your address, city, or landmark...",value:f,onChange:B=>m(B.target.value),disabled:N}),N&&o.jsxs("div",{style:{textAlign:"center",padding:"0.5rem",color:"#6c757d"},children:[o.jsx("div",{className:"loading-spinner",style:{borderColor:"#0AAD0A",borderTopColor:"transparent"}}),"Searching..."]})]})]}),S&&o.jsx("div",{className:"error-message",children:S}),p.length>0&&o.jsx("div",{className:"suggestions-container",children:p.map((B,Z)=>{var Q,K;return o.jsxs("div",{className:"suggestion-item",onClick:()=>q(B.place_id),children:[o.jsx("div",{className:"suggestion-icon",children:o.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),o.jsxs("div",{children:[o.jsx("div",{className:"suggestion-text",children:((Q=B.structured_formatting)==null?void 0:Q.main_text)||B.description.split(",")[0]}),o.jsx("div",{className:"suggestion-subtext",children:((K=B.structured_formatting)==null?void 0:K.secondary_text)||B.description})]})]},B.place_id||Z)})})]})})]})},sE=()=>{const[e,t]=j.useState(""),[n,r]=j.useState(""),[s,l]=j.useState(!1),c=Mn(),d=async f=>{var p,v,b,k,N,w;f.preventDefault(),r(""),l(!0);let m=e.replace(/\D/g,"");if(m.length===10)m="+91"+m;else if(m.length===12&&m.startsWith("91"))m="+"+m;else if(!m.startsWith("+91")){r("Please enter a valid 10 digit mobile number"),l(!1);return}try{const S=await xn(pe.VERIFY_MOBILE,{mobileNumber:m});if(S.data.status===1){const _=await xn(pe.LOGIN,{mobileNumber:m,website:!0});if((p=_.data.message)!=null&&p.toLowerCase().includes("otp sent")){localStorage.setItem("mobile",m);const y=document.getElementById("userModal");y&&((v=window.bootstrap)!=null&&v.Modal)&&window.bootstrap.Modal.getOrCreateInstance(y).hide(),c("/otp-verification")}else r(_.data.message||"Error sending OTP")}else if(S.data.status===0){const _=await xn(pe.REGISTER,{mobileNumber:m});if((b=_.data.message)!=null&&b.toLowerCase().includes("otp sent")){localStorage.setItem("mobile",m);const y=document.getElementById("userModal");y&&((k=window.bootstrap)!=null&&k.Modal)&&window.bootstrap.Modal.getOrCreateInstance(y).hide(),c("/otp-verification")}else r(_.data.message||"Error sending OTP")}else r(S.data.message||"Error verifying mobile")}catch(S){r(((w=(N=S.response)==null?void 0:N.data)==null?void 0:w.message)||"Something went wrong")}l(!1)};return o.jsx("div",{className:"modal fade",id:"userModal",tabIndex:-1,"aria-labelledby":"userModalLabel","aria-hidden":"true",children:o.jsx("div",{className:"modal-dialog modal-dialog-centered",children:o.jsxs("div",{className:"modal-content p-4",children:[o.jsxs("div",{className:"modal-header border-0",children:[o.jsx("h5",{className:"modal-title fs-3 fw-bold",id:"userModalLabel",children:"Mobile Login"}),o.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),o.jsx("div",{className:"modal-body",children:o.jsxs("form",{onSubmit:d,children:[o.jsxs("div",{className:"mb-4",children:[o.jsx("label",{htmlFor:"mobileNumber",className:"form-label",children:"Mobile Number"}),o.jsx("input",{type:"tel",className:"form-control",id:"mobileNumber",placeholder:"Enter 10 digit mobile number",required:!0,pattern:"[0-9]{10}",maxLength:10,value:e,onChange:f=>t(f.target.value),disabled:s}),n&&o.jsx("div",{className:"text-danger mt-2",children:n})]}),o.jsx("button",{type:"submit",className:"btn btn-primary w-100",disabled:s,children:s?"Sending OTP...":"Login"})]})})]})})})},oE=()=>o.jsxs("div",{className:"cart-shimmer",children:[o.jsxs("div",{className:"shimmer-header mb-3",children:[o.jsx("div",{className:"shimmer-title"}),o.jsx("div",{className:"shimmer-subtitle"})]}),o.jsx("div",{className:"shimmer-alert mb-3"}),[1,2,3].map(e=>o.jsx("div",{className:"shimmer-cart-item mb-3",children:o.jsxs("div",{className:"row align-items-center",children:[o.jsx("div",{className:"col-2",children:o.jsx("div",{className:"shimmer-image"})}),o.jsxs("div",{className:"col-5",children:[o.jsx("div",{className:"shimmer-product-name mb-2"}),o.jsx("div",{className:"shimmer-product-price mb-2"}),o.jsx("div",{className:"shimmer-remove-btn"})]}),o.jsx("div",{className:"col-3",children:o.jsx("div",{className:"shimmer-quantity-controls"})}),o.jsx("div",{className:"col-2",children:o.jsx("div",{className:"shimmer-price"})})]})},e)),o.jsxs("div",{className:"shimmer-footer mt-4",children:[o.jsx("div",{className:"shimmer-total mb-3"}),o.jsx("div",{className:"shimmer-checkout-btn"})]}),o.jsx("style",{children:`
        .cart-shimmer {
          padding: 1rem;
        }

        .shimmer-header {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .shimmer-title {
          height: 24px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 60%;
        }

        .shimmer-subtitle {
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 40%;
        }

        .shimmer-alert {
          height: 40px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        .shimmer-cart-item {
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
        }

        .shimmer-image {
          width: 60px;
          height: 60px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        .shimmer-product-name {
          height: 18px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 80%;
        }

        .shimmer-product-price {
          height: 14px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 60%;
        }

        .shimmer-remove-btn {
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 40%;
        }

        .shimmer-quantity-controls {
          height: 32px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 6px;
        }

        .shimmer-price {
          height: 20px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }

        .shimmer-footer {
          border-top: 1px solid #e0e0e0;
          padding-top: 1rem;
        }

        .shimmer-total {
          height: 24px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
          width: 50%;
        }

        .shimmer-checkout-btn {
          height: 48px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `})]}),vr=(e,t=null)=>{if(!e||typeof e!="object")return!1;if(e.stock!==void 0&&e.stock!==null)return Number(e.stock)<=0;if(t&&typeof t=="object"&&t.stock!==void 0&&t.stock!==null)return Number(t.stock)<=0;if(e.inventory&&Array.isArray(e.inventory)&&e.inventory.length>0)if(t&&t._id){const n=e.inventory.find(r=>r.variantId===t._id);if(n)return Number(n.quantity)<=0}else return!e.inventory.some(r=>Number(r.quantity)>0);if(e.variants&&Array.isArray(e.variants)&&e.variants.length>0){const n=t||e.variants[0];if(n&&typeof n=="object"&&n.stock!==void 0&&n.stock!==null)return Number(n.stock)<=0}return!1},Bs=(e,t=null)=>{if(!e||typeof e!="object")return 999;if(e.stock!==void 0&&e.stock!==null)return Math.max(0,Number(e.stock));if(t&&typeof t=="object"&&t.stock!==void 0&&t.stock!==null)return Math.max(0,Number(t.stock));if(e.inventory&&Array.isArray(e.inventory)&&e.inventory.length>0)if(t&&t._id){const n=e.inventory.find(r=>r.variantId===t._id);if(n)return Math.max(0,Number(n.quantity))}else{const n=e.inventory.reduce((r,s)=>r+Number(s.quantity||0),0);return Math.max(0,n)}if(e.variants&&Array.isArray(e.variants)&&e.variants.length>0){const n=t||e.variants[0];if(n&&typeof n=="object"&&n.stock!==void 0&&n.stock!==null)return Math.max(0,Number(n.stock))}return 999},aE=(e,t=null,n=1)=>Bs(e,t)>=Number(n),Cb=(e,t=null)=>{if(vr(e,t))return"Out of Stock";const n=Bs(e,t);return n<10?`Only ${n} left`:"In Stock"},Pb=(e,t=null)=>vr(e,t)?"#dc3545":Bs(e,t)<10?"#ffc107":"#28a745";/*!
* sweetalert2 v11.22.2
* Released under the MIT License.
*/function Eb(e,t,n){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:n;throw new TypeError("Private element is not present on this object")}function lE(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Cv(e,t){return e.get(Eb(e,t))}function cE(e,t,n){lE(e,t),t.set(e,n)}function uE(e,t,n){return e.set(Eb(e,t),n),n}const dE=100,ue={},fE=()=>{ue.previousActiveElement instanceof HTMLElement?(ue.previousActiveElement.focus(),ue.previousActiveElement=null):document.body&&document.body.focus()},hE=e=>new Promise(t=>{if(!e)return t();const n=window.scrollX,r=window.scrollY;ue.restoreFocusTimeout=setTimeout(()=>{fE(),t()},dE),window.scrollTo(n,r)}),Tb="swal2-",mE=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],W=mE.reduce((e,t)=>(e[t]=Tb+t,e),{}),pE=["success","warning","info","question","error"],mc=pE.reduce((e,t)=>(e[t]=Tb+t,e),{}),Lb="SweetAlert2:",ip=e=>e.charAt(0).toUpperCase()+e.slice(1),Rt=e=>{console.warn(`${Lb} ${typeof e=="object"?e.join(" "):e}`)},Ci=e=>{console.error(`${Lb} ${e}`)},Pv=[],gE=e=>{Pv.includes(e)||(Pv.push(e),Rt(e))},Ob=(e,t=null)=>{gE(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)},uu=e=>typeof e=="function"?e():e,sp=e=>e&&typeof e.toPromise=="function",pa=e=>sp(e)?e.toPromise():Promise.resolve(e),op=e=>e&&Promise.resolve(e)===e,$t=()=>document.body.querySelector(`.${W.container}`),ga=e=>{const t=$t();return t?t.querySelector(e):null},cn=e=>ga(`.${e}`),Ne=()=>cn(W.popup),Fs=()=>cn(W.icon),vE=()=>cn(W["icon-content"]),Ab=()=>cn(W.title),ap=()=>cn(W["html-container"]),Ib=()=>cn(W.image),lp=()=>cn(W["progress-steps"]),du=()=>cn(W["validation-message"]),tr=()=>ga(`.${W.actions} .${W.confirm}`),Us=()=>ga(`.${W.actions} .${W.cancel}`),Pi=()=>ga(`.${W.actions} .${W.deny}`),yE=()=>cn(W["input-label"]),Hs=()=>ga(`.${W.loader}`),va=()=>cn(W.actions),Rb=()=>cn(W.footer),fu=()=>cn(W["timer-progress-bar"]),cp=()=>cn(W.close),xE=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,up=()=>{const e=Ne();if(!e)return[];const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(t).sort((l,c)=>{const d=parseInt(l.getAttribute("tabindex")||"0"),f=parseInt(c.getAttribute("tabindex")||"0");return d>f?1:d<f?-1:0}),r=e.querySelectorAll(xE),s=Array.from(r).filter(l=>l.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(s))].filter(l=>Xt(l))},dp=()=>fr(document.body,W.shown)&&!fr(document.body,W["toast-shown"])&&!fr(document.body,W["no-backdrop"]),hu=()=>{const e=Ne();return e?fr(e,W.toast):!1},wE=()=>{const e=Ne();return e?e.hasAttribute("data-loading"):!1},un=(e,t)=>{if(e.textContent="",t){const r=new DOMParser().parseFromString(t,"text/html"),s=r.querySelector("head");s&&Array.from(s.childNodes).forEach(c=>{e.appendChild(c)});const l=r.querySelector("body");l&&Array.from(l.childNodes).forEach(c=>{c instanceof HTMLVideoElement||c instanceof HTMLAudioElement?e.appendChild(c.cloneNode(!0)):e.appendChild(c)})}},fr=(e,t)=>{if(!t)return!1;const n=t.split(/\s+/);for(let r=0;r<n.length;r++)if(!e.classList.contains(n[r]))return!1;return!0},bE=(e,t)=>{Array.from(e.classList).forEach(n=>{!Object.values(W).includes(n)&&!Object.values(mc).includes(n)&&!Object.values(t.showClass||{}).includes(n)&&e.classList.remove(n)})},on=(e,t,n)=>{if(bE(e,t),!t.customClass)return;const r=t.customClass[n];if(r){if(typeof r!="string"&&!r.forEach){Rt(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof r}"`);return}Ee(e,r)}},mu=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${W.popup} > .${W[t]}`);case"checkbox":return e.querySelector(`.${W.popup} > .${W.checkbox} input`);case"radio":return e.querySelector(`.${W.popup} > .${W.radio} input:checked`)||e.querySelector(`.${W.popup} > .${W.radio} input:first-child`);case"range":return e.querySelector(`.${W.popup} > .${W.range} input`);default:return e.querySelector(`.${W.popup} > .${W.input}`)}},zb=e=>{if(e.focus(),e.type!=="file"){const t=e.value;e.value="",e.value=t}},Mb=(e,t,n)=>{!e||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(r=>{Array.isArray(e)?e.forEach(s=>{n?s.classList.add(r):s.classList.remove(r)}):n?e.classList.add(r):e.classList.remove(r)}))},Ee=(e,t)=>{Mb(e,t,!0)},Sn=(e,t)=>{Mb(e,t,!1)},Or=(e,t)=>{const n=Array.from(e.children);for(let r=0;r<n.length;r++){const s=n[r];if(s instanceof HTMLElement&&fr(s,t))return s}},hi=(e,t,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?e.style.setProperty(t,typeof n=="number"?`${n}px`:n):e.style.removeProperty(t)},pt=(e,t="flex")=>{e&&(e.style.display=t)},Pt=e=>{e&&(e.style.display="none")},fp=(e,t="block")=>{e&&new MutationObserver(()=>{ya(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},Ev=(e,t,n,r)=>{const s=e.querySelector(t);s&&s.style.setProperty(n,r)},ya=(e,t,n="flex")=>{t?pt(e,n):Pt(e)},Xt=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),_E=()=>!Xt(tr())&&!Xt(Pi())&&!Xt(Us()),Eh=e=>e.scrollHeight>e.clientHeight,SE=(e,t)=>{let n=e;for(;n&&n!==t;){if(Eh(n))return!0;n=n.parentElement}return!1},$b=e=>{const t=window.getComputedStyle(e),n=parseFloat(t.getPropertyValue("animation-duration")||"0"),r=parseFloat(t.getPropertyValue("transition-duration")||"0");return n>0||r>0},hp=(e,t=!1)=>{const n=fu();n&&Xt(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${e/1e3}s linear`,n.style.width="0%"},10))},kE=()=>{const e=fu();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const n=parseInt(window.getComputedStyle(e).width),r=t/n*100;e.style.width=`${r}%`},jE=()=>typeof window>"u"||typeof document>"u",NE=`
 <div aria-labelledby="${W.title}" aria-describedby="${W["html-container"]}" class="${W.popup}" tabindex="-1">
   <button type="button" class="${W.close}"></button>
   <ul class="${W["progress-steps"]}"></ul>
   <div class="${W.icon}"></div>
   <img class="${W.image}" />
   <h2 class="${W.title}" id="${W.title}"></h2>
   <div class="${W["html-container"]}" id="${W["html-container"]}"></div>
   <input class="${W.input}" id="${W.input}" />
   <input type="file" class="${W.file}" />
   <div class="${W.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${W.select}" id="${W.select}"></select>
   <div class="${W.radio}"></div>
   <label class="${W.checkbox}">
     <input type="checkbox" id="${W.checkbox}" />
     <span class="${W.label}"></span>
   </label>
   <textarea class="${W.textarea}" id="${W.textarea}"></textarea>
   <div class="${W["validation-message"]}" id="${W["validation-message"]}"></div>
   <div class="${W.actions}">
     <div class="${W.loader}"></div>
     <button type="button" class="${W.confirm}"></button>
     <button type="button" class="${W.deny}"></button>
     <button type="button" class="${W.cancel}"></button>
   </div>
   <div class="${W.footer}"></div>
   <div class="${W["timer-progress-bar-container"]}">
     <div class="${W["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),CE=()=>{const e=$t();return e?(e.remove(),Sn([document.documentElement,document.body],[W["no-backdrop"],W["toast-shown"],W["has-column"]]),!0):!1},ni=()=>{ue.currentInstance.resetValidationMessage()},PE=()=>{const e=Ne(),t=Or(e,W.input),n=Or(e,W.file),r=e.querySelector(`.${W.range} input`),s=e.querySelector(`.${W.range} output`),l=Or(e,W.select),c=e.querySelector(`.${W.checkbox} input`),d=Or(e,W.textarea);t.oninput=ni,n.onchange=ni,l.onchange=ni,c.onchange=ni,d.oninput=ni,r.oninput=()=>{ni(),s.value=r.value},r.onchange=()=>{ni(),s.value=r.value}},EE=e=>typeof e=="string"?document.querySelector(e):e,TE=e=>{const t=Ne();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")},LE=e=>{window.getComputedStyle(e).direction==="rtl"&&Ee($t(),W.rtl)},OE=e=>{const t=CE();if(jE()){Ci("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=W.container,t&&Ee(n,W["no-transition"]),un(n,NE),n.dataset.swal2Theme=e.theme;const r=EE(e.target);r.appendChild(n),e.topLayer&&(n.setAttribute("popover",""),n.showPopover()),TE(e),LE(r),PE()},mp=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e=="object"?AE(e,t):e&&un(t,e)},AE=(e,t)=>{e.jquery?IE(t,e):un(t,e.toString())},IE=(e,t)=>{if(e.textContent="",0 in t)for(let n=0;n in t;n++)e.appendChild(t[n].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},RE=(e,t)=>{const n=va(),r=Hs();!n||!r||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?Pt(n):pt(n),on(n,t,"actions"),zE(n,r,t),un(r,t.loaderHtml||""),on(r,t,"loader"))};function zE(e,t,n){const r=tr(),s=Pi(),l=Us();!r||!s||!l||(af(r,"confirm",n),af(s,"deny",n),af(l,"cancel",n),ME(r,s,l,n),n.reverseButtons&&(n.toast?(e.insertBefore(l,r),e.insertBefore(s,r)):(e.insertBefore(l,t),e.insertBefore(s,t),e.insertBefore(r,t))))}function ME(e,t,n,r){if(!r.buttonsStyling){Sn([e,t,n],W.styled);return}Ee([e,t,n],W.styled),r.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",r.confirmButtonColor),r.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",r.denyButtonColor),r.cancelButtonColor&&n.style.setProperty("--swal2-cancel-button-background-color",r.cancelButtonColor),of(e),of(t),of(n)}function of(e){const t=window.getComputedStyle(e);if(t.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const n=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-focus-box-shadow",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${n}`))}function af(e,t,n){const r=ip(t);ya(e,n[`show${r}Button`],"inline-block"),un(e,n[`${t}ButtonText`]||""),e.setAttribute("aria-label",n[`${t}ButtonAriaLabel`]||""),e.className=W[t],on(e,n,`${t}Button`)}const $E=(e,t)=>{const n=cp();n&&(un(n,t.closeButtonHtml||""),on(n,t,"closeButton"),ya(n,t.showCloseButton),n.setAttribute("aria-label",t.closeButtonAriaLabel||""))},DE=(e,t)=>{const n=$t();n&&(BE(n,t.backdrop),FE(n,t.position),UE(n,t.grow),on(n,t,"container"))};function BE(e,t){typeof t=="string"?e.style.background=t:t||Ee([document.documentElement,document.body],W["no-backdrop"])}function FE(e,t){t&&(t in W?Ee(e,W[t]):(Rt('The "position" parameter is not valid, defaulting to "center"'),Ee(e,W.center)))}function UE(e,t){t&&Ee(e,W[`grow-${t}`])}var $e={innerParams:new WeakMap,domCache:new WeakMap};const HE=["input","file","range","select","radio","checkbox","textarea"],qE=(e,t)=>{const n=Ne();if(!n)return;const r=$e.innerParams.get(e),s=!r||t.input!==r.input;HE.forEach(l=>{const c=Or(n,W[l]);c&&(VE(l,t.inputAttributes),c.className=W[l],s&&Pt(c))}),t.input&&(s&&WE(t),GE(t))},WE=e=>{if(!e.input)return;if(!Xe[e.input]){Ci(`Unexpected type of input! Expected ${Object.keys(Xe).join(" | ")}, got "${e.input}"`);return}const t=Db(e.input);if(!t)return;const n=Xe[e.input](t,e);pt(t),e.inputAutoFocus&&setTimeout(()=>{zb(n)})},ZE=e=>{for(let t=0;t<e.attributes.length;t++){const n=e.attributes[t].name;["id","type","value","style"].includes(n)||e.removeAttribute(n)}},VE=(e,t)=>{const n=Ne();if(!n)return;const r=mu(n,e);if(r){ZE(r);for(const s in t)r.setAttribute(s,t[s])}},GE=e=>{if(!e.input)return;const t=Db(e.input);t&&on(t,e,"input")},pp=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)},xa=(e,t,n)=>{if(n.inputLabel){const r=document.createElement("label"),s=W["input-label"];r.setAttribute("for",e.id),r.className=s,typeof n.customClass=="object"&&Ee(r,n.customClass.inputLabel),r.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",r)}},Db=e=>{const t=Ne();if(t)return Or(t,W[e]||W.input)},pc=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:op(t)||Rt(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},Xe={};Xe.text=Xe.email=Xe.password=Xe.number=Xe.tel=Xe.url=Xe.search=Xe.date=Xe["datetime-local"]=Xe.time=Xe.week=Xe.month=(e,t)=>(pc(e,t.inputValue),xa(e,e,t),pp(e,t),e.type=t.input,e);Xe.file=(e,t)=>(xa(e,e,t),pp(e,t),e);Xe.range=(e,t)=>{const n=e.querySelector("input"),r=e.querySelector("output");return pc(n,t.inputValue),n.type=t.input,pc(r,t.inputValue),xa(n,e,t),e};Xe.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");un(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return xa(e,e,t),e};Xe.radio=e=>(e.textContent="",e);Xe.checkbox=(e,t)=>{const n=mu(Ne(),"checkbox");n.value="1",n.checked=!!t.inputValue;const r=e.querySelector("span");return un(r,t.inputPlaceholder||t.inputLabel),n};Xe.textarea=(e,t)=>{pc(e,t.inputValue),pp(e,t),xa(e,e,t);const n=r=>parseInt(window.getComputedStyle(r).marginLeft)+parseInt(window.getComputedStyle(r).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const r=parseInt(window.getComputedStyle(Ne()).width),s=()=>{if(!document.body.contains(e))return;const l=e.offsetWidth+n(e);l>r?Ne().style.width=`${l}px`:hi(Ne(),"width",t.width)};new MutationObserver(s).observe(e,{attributes:!0,attributeFilter:["style"]})}}),e};const YE=(e,t)=>{const n=ap();n&&(fp(n),on(n,t,"htmlContainer"),t.html?(mp(t.html,n),pt(n,"block")):t.text?(n.textContent=t.text,pt(n,"block")):Pt(n),qE(e,t))},KE=(e,t)=>{const n=Rb();n&&(fp(n),ya(n,t.footer,"block"),t.footer&&mp(t.footer,n),on(n,t,"footer"))},XE=(e,t)=>{const n=$e.innerParams.get(e),r=Fs();if(!r)return;if(n&&t.icon===n.icon){Lv(r,t),Tv(r,t);return}if(!t.icon&&!t.iconHtml){Pt(r);return}if(t.icon&&Object.keys(mc).indexOf(t.icon)===-1){Ci(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),Pt(r);return}pt(r),Lv(r,t),Tv(r,t),Ee(r,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Bb)},Tv=(e,t)=>{for(const[n,r]of Object.entries(mc))t.icon!==n&&Sn(e,r);Ee(e,t.icon&&mc[t.icon]),eT(e,t),Bb(),on(e,t,"icon")},Bb=()=>{const e=Ne();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color"),n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let r=0;r<n.length;r++)n[r].style.backgroundColor=t},QE=e=>`
  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation?'<div class="swal2-success-fix"></div>':""}
  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,JE=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Lv=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let n=e.innerHTML,r="";t.iconHtml?r=Ov(t.iconHtml):t.icon==="success"?(r=QE(t),n=n.replace(/ style=".*?"/g,"")):t.icon==="error"?r=JE:t.icon&&(r=Ov({question:"?",warning:"!",info:"i"}[t.icon])),n.trim()!==r.trim()&&un(e,r)},eT=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Ev(e,n,"background-color",t.iconColor);Ev(e,".swal2-success-ring","border-color",t.iconColor)}},Ov=e=>`<div class="${W["icon-content"]}">${e}</div>`,tT=(e,t)=>{const n=Ib();if(n){if(!t.imageUrl){Pt(n);return}pt(n,""),n.setAttribute("src",t.imageUrl),n.setAttribute("alt",t.imageAlt||""),hi(n,"width",t.imageWidth),hi(n,"height",t.imageHeight),n.className=W.image,on(n,t,"image")}};let gp=!1,Fb=0,Ub=0,Hb=0,qb=0;const nT=e=>{e.addEventListener("mousedown",gc),document.body.addEventListener("mousemove",vc),e.addEventListener("mouseup",yc),e.addEventListener("touchstart",gc),document.body.addEventListener("touchmove",vc),e.addEventListener("touchend",yc)},rT=e=>{e.removeEventListener("mousedown",gc),document.body.removeEventListener("mousemove",vc),e.removeEventListener("mouseup",yc),e.removeEventListener("touchstart",gc),document.body.removeEventListener("touchmove",vc),e.removeEventListener("touchend",yc)},gc=e=>{const t=Ne();if(e.target===t||Fs().contains(e.target)){gp=!0;const n=Wb(e);Fb=n.clientX,Ub=n.clientY,Hb=parseInt(t.style.insetInlineStart)||0,qb=parseInt(t.style.insetBlockStart)||0,Ee(t,"swal2-dragging")}},vc=e=>{const t=Ne();if(gp){let{clientX:n,clientY:r}=Wb(e);t.style.insetInlineStart=`${Hb+(n-Fb)}px`,t.style.insetBlockStart=`${qb+(r-Ub)}px`}},yc=()=>{const e=Ne();gp=!1,Sn(e,"swal2-dragging")},Wb=e=>{let t=0,n=0;return e.type.startsWith("mouse")?(t=e.clientX,n=e.clientY):e.type.startsWith("touch")&&(t=e.touches[0].clientX,n=e.touches[0].clientY),{clientX:t,clientY:n}},iT=(e,t)=>{const n=$t(),r=Ne();if(!(!n||!r)){if(t.toast){hi(n,"width",t.width),r.style.width="100%";const s=Hs();s&&r.insertBefore(s,Fs())}else hi(r,"width",t.width);hi(r,"padding",t.padding),t.color&&(r.style.color=t.color),t.background&&(r.style.background=t.background),Pt(du()),sT(r,t),t.draggable&&!t.toast?(Ee(r,W.draggable),nT(r)):(Sn(r,W.draggable),rT(r))}},sT=(e,t)=>{const n=t.showClass||{};e.className=`${W.popup} ${Xt(e)?n.popup:""}`,t.toast?(Ee([document.documentElement,document.body],W["toast-shown"]),Ee(e,W.toast)):Ee(e,W.modal),on(e,t,"popup"),typeof t.customClass=="string"&&Ee(e,t.customClass),t.icon&&Ee(e,W[`icon-${t.icon}`])},oT=(e,t)=>{const n=lp();if(!n)return;const{progressSteps:r,currentProgressStep:s}=t;if(!r||r.length===0||s===void 0){Pt(n);return}pt(n),n.textContent="",s>=r.length&&Rt("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),r.forEach((l,c)=>{const d=aT(l);if(n.appendChild(d),c===s&&Ee(d,W["active-progress-step"]),c!==r.length-1){const f=lT(t);n.appendChild(f)}})},aT=e=>{const t=document.createElement("li");return Ee(t,W["progress-step"]),un(t,e),t},lT=e=>{const t=document.createElement("li");return Ee(t,W["progress-step-line"]),e.progressStepsDistance&&hi(t,"width",e.progressStepsDistance),t},cT=(e,t)=>{const n=Ab();n&&(fp(n),ya(n,t.title||t.titleText,"block"),t.title&&mp(t.title,n),t.titleText&&(n.innerText=t.titleText),on(n,t,"title"))},Zb=(e,t)=>{iT(e,t),DE(e,t),oT(e,t),XE(e,t),tT(e,t),cT(e,t),$E(e,t),YE(e,t),RE(e,t),KE(e,t);const n=Ne();typeof t.didRender=="function"&&n&&t.didRender(n),ue.eventEmitter.emit("didRender",n)},uT=()=>Xt(Ne()),Vb=()=>{var e;return(e=tr())===null||e===void 0?void 0:e.click()},dT=()=>{var e;return(e=Pi())===null||e===void 0?void 0:e.click()},fT=()=>{var e;return(e=Us())===null||e===void 0?void 0:e.click()},qs=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Gb=e=>{e.keydownTarget&&e.keydownHandlerAdded&&(e.keydownTarget.removeEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1)},hT=(e,t,n)=>{Gb(e),t.toast||(e.keydownHandler=r=>pT(t,r,n),e.keydownTarget=t.keydownListenerCapture?window:Ne(),e.keydownListenerCapture=t.keydownListenerCapture,e.keydownTarget.addEventListener("keydown",e.keydownHandler,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0)},Th=(e,t)=>{var n;const r=up();if(r.length){e=e+t,e===-2&&(e=r.length-1),e===r.length?e=0:e===-1&&(e=r.length-1),r[e].focus();return}(n=Ne())===null||n===void 0||n.focus()},Yb=["ArrowRight","ArrowDown"],mT=["ArrowLeft","ArrowUp"],pT=(e,t,n)=>{e&&(t.isComposing||t.keyCode===229||(e.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?gT(t,e):t.key==="Tab"?vT(t):[...Yb,...mT].includes(t.key)?yT(t.key):t.key==="Escape"&&xT(t,e,n)))},gT=(e,t)=>{if(!uu(t.allowEnterKey))return;const n=mu(Ne(),t.input);if(e.target&&n&&e.target instanceof HTMLElement&&e.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(t.input))return;Vb(),e.preventDefault()}},vT=e=>{const t=e.target,n=up();let r=-1;for(let s=0;s<n.length;s++)if(t===n[s]){r=s;break}e.shiftKey?Th(r,-1):Th(r,1),e.stopPropagation(),e.preventDefault()},yT=e=>{const t=va(),n=tr(),r=Pi(),s=Us();if(!t||!n||!r||!s)return;const l=[n,r,s];if(document.activeElement instanceof HTMLElement&&!l.includes(document.activeElement))return;const c=Yb.includes(e)?"nextElementSibling":"previousElementSibling";let d=document.activeElement;if(d){for(let f=0;f<t.children.length;f++){if(d=d[c],!d)return;if(d instanceof HTMLButtonElement&&Xt(d))break}d instanceof HTMLButtonElement&&d.focus()}},xT=(e,t,n)=>{e.preventDefault(),uu(t.allowEscapeKey)&&n(qs.esc)};var xs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const wT=()=>{const e=$t();Array.from(document.body.children).forEach(n=>{n.contains(e)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Kb=()=>{Array.from(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Xb=typeof window<"u"&&!!window.GestureEvent,bT=()=>{if(Xb&&!fr(document.body,W.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,Ee(document.body,W.iosfix),_T()}},_T=()=>{const e=$t();if(!e)return;let t;e.ontouchstart=n=>{t=ST(n)},e.ontouchmove=n=>{t&&(n.preventDefault(),n.stopPropagation())}},ST=e=>{const t=e.target,n=$t(),r=ap();return!n||!r||kT(e)||jT(e)?!1:t===n||!Eh(n)&&t instanceof HTMLElement&&!SE(t,r)&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(Eh(r)&&r.contains(t))},kT=e=>e.touches&&e.touches.length&&e.touches[0].touchType==="stylus",jT=e=>e.touches&&e.touches.length>1,NT=()=>{if(fr(document.body,W.iosfix)){const e=parseInt(document.body.style.top,10);Sn(document.body,W.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},CT=()=>{const e=document.createElement("div");e.className=W["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t};let as=null;const PT=e=>{as===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")&&(as=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${as+CT()}px`)},ET=()=>{as!==null&&(document.body.style.paddingRight=`${as}px`,as=null)};function Qb(e,t,n,r){hu()?Av(e,r):(hE(n).then(()=>Av(e,r)),Gb(ue)),Xb?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),dp()&&(ET(),NT(),Kb()),TT()}function TT(){Sn([document.documentElement,document.body],[W.shown,W["height-auto"],W["no-backdrop"],W["toast-shown"]])}function Ar(e){e=OT(e);const t=xs.swalPromiseResolve.get(this),n=LT(this);this.isAwaitingPromise?e.isDismissed||(wa(this),t(e)):n&&t(e)}const LT=e=>{const t=Ne();if(!t)return!1;const n=$e.innerParams.get(e);if(!n||fr(t,n.hideClass.popup))return!1;Sn(t,n.showClass.popup),Ee(t,n.hideClass.popup);const r=$t();return Sn(r,n.showClass.backdrop),Ee(r,n.hideClass.backdrop),AT(e,t,n),!0};function Jb(e){const t=xs.swalPromiseReject.get(this);wa(this),t&&t(e)}const wa=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,$e.innerParams.get(e)||e._destroy())},OT=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),AT=(e,t,n)=>{var r;const s=$t(),l=$b(t);typeof n.willClose=="function"&&n.willClose(t),(r=ue.eventEmitter)===null||r===void 0||r.emit("willClose",t),l?IT(e,t,s,n.returnFocus,n.didClose):Qb(e,s,n.returnFocus,n.didClose)},IT=(e,t,n,r,s)=>{ue.swalCloseEventFinishedCallback=Qb.bind(null,e,n,r,s);const l=function(c){if(c.target===t){var d;(d=ue.swalCloseEventFinishedCallback)===null||d===void 0||d.call(ue),delete ue.swalCloseEventFinishedCallback,t.removeEventListener("animationend",l),t.removeEventListener("transitionend",l)}};t.addEventListener("animationend",l),t.addEventListener("transitionend",l)},Av=(e,t)=>{setTimeout(()=>{var n;typeof t=="function"&&t.bind(e.params)(),(n=ue.eventEmitter)===null||n===void 0||n.emit("didClose"),e._destroy&&e._destroy()})},ws=e=>{let t=Ne();if(t||new Ie,t=Ne(),!t)return;const n=Hs();hu()?Pt(Fs()):RT(t,e),pt(n),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},RT=(e,t)=>{const n=va(),r=Hs();!n||!r||(!t&&Xt(tr())&&(t=tr()),pt(n),t&&(Pt(t),r.setAttribute("data-button-to-replace",t.className),n.insertBefore(r,t)),Ee([e,n],W.loading))},zT=(e,t)=>{t.input==="select"||t.input==="radio"?FT(e,t):["text","email","number","tel","textarea"].some(n=>n===t.input)&&(sp(t.inputValue)||op(t.inputValue))&&(ws(tr()),UT(e,t))},MT=(e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return $T(n);case"radio":return DT(n);case"file":return BT(n);default:return t.inputAutoTrim?n.value.trim():n.value}},$T=e=>e.checked?1:0,DT=e=>e.checked?e.value:null,BT=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,FT=(e,t)=>{const n=Ne();if(!n)return;const r=s=>{t.input==="select"?HT(n,xc(s),t):t.input==="radio"&&qT(n,xc(s),t)};sp(t.inputOptions)||op(t.inputOptions)?(ws(tr()),pa(t.inputOptions).then(s=>{e.hideLoading(),r(s)})):typeof t.inputOptions=="object"?r(t.inputOptions):Ci(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},UT=(e,t)=>{const n=e.getInput();n&&(Pt(n),pa(t.inputValue).then(r=>{n.value=t.input==="number"?`${parseFloat(r)||0}`:`${r}`,pt(n),n.focus(),e.hideLoading()}).catch(r=>{Ci(`Error in inputValue promise: ${r}`),n.value="",pt(n),n.focus(),e.hideLoading()}))};function HT(e,t,n){const r=Or(e,W.select);if(!r)return;const s=(l,c,d)=>{const f=document.createElement("option");f.value=d,un(f,c),f.selected=e_(d,n.inputValue),l.appendChild(f)};t.forEach(l=>{const c=l[0],d=l[1];if(Array.isArray(d)){const f=document.createElement("optgroup");f.label=c,f.disabled=!1,r.appendChild(f),d.forEach(m=>s(f,m[1],m[0]))}else s(r,d,c)}),r.focus()}function qT(e,t,n){const r=Or(e,W.radio);if(!r)return;t.forEach(l=>{const c=l[0],d=l[1],f=document.createElement("input"),m=document.createElement("label");f.type="radio",f.name=W.radio,f.value=c,e_(c,n.inputValue)&&(f.checked=!0);const p=document.createElement("span");un(p,d),p.className=W.label,m.appendChild(f),m.appendChild(p),r.appendChild(m)});const s=r.querySelectorAll("input");s.length&&s[0].focus()}const xc=e=>{const t=[];return e instanceof Map?e.forEach((n,r)=>{let s=n;typeof s=="object"&&(s=xc(s)),t.push([r,s])}):Object.keys(e).forEach(n=>{let r=e[n];typeof r=="object"&&(r=xc(r)),t.push([n,r])}),t},e_=(e,t)=>!!t&&t.toString()===e.toString(),WT=e=>{const t=$e.innerParams.get(e);e.disableButtons(),t.input?t_(e,"confirm"):yp(e,!0)},ZT=e=>{const t=$e.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?t_(e,"deny"):vp(e,!1)},VT=(e,t)=>{e.disableButtons(),t(qs.cancel)},t_=(e,t)=>{const n=$e.innerParams.get(e);if(!n.input){Ci(`The "input" parameter is needed to be set when using returnInputValueOn${ip(t)}`);return}const r=e.getInput(),s=MT(e,n);n.inputValidator?GT(e,s,t):r&&!r.checkValidity()?(e.enableButtons(),e.showValidationMessage(n.validationMessage||r.validationMessage)):t==="deny"?vp(e,s):yp(e,s)},GT=(e,t,n)=>{const r=$e.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>pa(r.inputValidator(t,r.validationMessage))).then(l=>{e.enableButtons(),e.enableInput(),l?e.showValidationMessage(l):n==="deny"?vp(e,t):yp(e,t)})},vp=(e,t)=>{const n=$e.innerParams.get(e||void 0);n.showLoaderOnDeny&&ws(Pi()),n.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>pa(n.preDeny(t,n.validationMessage))).then(s=>{s===!1?(e.hideLoading(),wa(e)):e.close({isDenied:!0,value:typeof s>"u"?t:s})}).catch(s=>n_(e||void 0,s))):e.close({isDenied:!0,value:t})},Iv=(e,t)=>{e.close({isConfirmed:!0,value:t})},n_=(e,t)=>{e.rejectPromise(t)},yp=(e,t)=>{const n=$e.innerParams.get(e||void 0);n.showLoaderOnConfirm&&ws(),n.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>pa(n.preConfirm(t,n.validationMessage))).then(s=>{Xt(du())||s===!1?(e.hideLoading(),wa(e)):Iv(e,typeof s>"u"?t:s)}).catch(s=>n_(e||void 0,s))):Iv(e,t)};function wc(){const e=$e.innerParams.get(this);if(!e)return;const t=$e.domCache.get(this);Pt(t.loader),hu()?e.icon&&pt(Fs()):YT(t),Sn([t.popup,t.actions],W.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const YT=e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));t.length?pt(t[0],"inline-block"):_E()&&Pt(e.actions)};function r_(){const e=$e.innerParams.get(this),t=$e.domCache.get(this);return t?mu(t.popup,e.input):null}function i_(e,t,n){const r=$e.domCache.get(e);t.forEach(s=>{r[s].disabled=n})}function s_(e,t){const n=Ne();if(!(!n||!e))if(e.type==="radio"){const r=n.querySelectorAll(`[name="${W.radio}"]`);for(let s=0;s<r.length;s++)r[s].disabled=t}else e.disabled=t}function o_(){i_(this,["confirmButton","denyButton","cancelButton"],!1)}function a_(){i_(this,["confirmButton","denyButton","cancelButton"],!0)}function l_(){s_(this.getInput(),!1)}function c_(){s_(this.getInput(),!0)}function u_(e){const t=$e.domCache.get(this),n=$e.innerParams.get(this);un(t.validationMessage,e),t.validationMessage.className=W["validation-message"],n.customClass&&n.customClass.validationMessage&&Ee(t.validationMessage,n.customClass.validationMessage),pt(t.validationMessage);const r=this.getInput();r&&(r.setAttribute("aria-invalid","true"),r.setAttribute("aria-describedby",W["validation-message"]),zb(r),Ee(r,W.inputerror))}function d_(){const e=$e.domCache.get(this);e.validationMessage&&Pt(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),Sn(t,W.inputerror))}const ls={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},KT=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],XT={allowEnterKey:void 0},QT=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],f_=e=>Object.prototype.hasOwnProperty.call(ls,e),h_=e=>KT.indexOf(e)!==-1,m_=e=>XT[e],JT=e=>{f_(e)||Rt(`Unknown parameter "${e}"`)},e5=e=>{QT.includes(e)&&Rt(`The parameter "${e}" is incompatible with toasts`)},t5=e=>{const t=m_(e);t&&Ob(e,t)},p_=e=>{e.backdrop===!1&&e.allowOutsideClick&&Rt('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e.theme&&!["light","dark","auto","minimal","borderless","embed-iframe","bulma","bulma-light","bulma-dark"].includes(e.theme)&&Rt(`Invalid theme "${e.theme}"`);for(const t in e)JT(t),e.toast&&e5(t),t5(t)};function g_(e){const t=$t(),n=Ne(),r=$e.innerParams.get(this);if(!n||fr(n,r.hideClass.popup)){Rt("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const s=n5(e),l=Object.assign({},r,s);p_(l),t.dataset.swal2Theme=l.theme,Zb(this,l),$e.innerParams.set(this,l),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const n5=e=>{const t={};return Object.keys(e).forEach(n=>{h_(n)?t[n]=e[n]:Rt(`Invalid parameter to update: ${n}`)}),t};function v_(){const e=$e.domCache.get(this),t=$e.innerParams.get(this);if(!t){y_(this);return}e.popup&&ue.swalCloseEventFinishedCallback&&(ue.swalCloseEventFinishedCallback(),delete ue.swalCloseEventFinishedCallback),typeof t.didDestroy=="function"&&t.didDestroy(),ue.eventEmitter.emit("didDestroy"),r5(this)}const r5=e=>{y_(e),delete e.params,delete ue.keydownHandler,delete ue.keydownTarget,delete ue.currentInstance},y_=e=>{e.isAwaitingPromise?(lf($e,e),e.isAwaitingPromise=!0):(lf(xs,e),lf($e,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},lf=(e,t)=>{for(const n in e)e[n].delete(t)};var i5=Object.freeze({__proto__:null,_destroy:v_,close:Ar,closeModal:Ar,closePopup:Ar,closeToast:Ar,disableButtons:a_,disableInput:c_,disableLoading:wc,enableButtons:o_,enableInput:l_,getInput:r_,handleAwaitingPromise:wa,hideLoading:wc,rejectPromise:Jb,resetValidationMessage:d_,showValidationMessage:u_,update:g_});const s5=(e,t,n)=>{e.toast?o5(e,t,n):(l5(t),c5(t),u5(e,t,n))},o5=(e,t,n)=>{t.popup.onclick=()=>{e&&(a5(e)||e.timer||e.input)||n(qs.close)}},a5=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let bc=!1;const l5=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{},t.target===e.container&&(bc=!0)}}},c5=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault(),e.popup.onmouseup=function(n){e.popup.onmouseup=()=>{},(n.target===e.popup||n.target instanceof HTMLElement&&e.popup.contains(n.target))&&(bc=!0)}}},u5=(e,t,n)=>{t.container.onclick=r=>{if(bc){bc=!1;return}r.target===t.container&&uu(e.allowOutsideClick)&&n(qs.backdrop)}},d5=e=>typeof e=="object"&&e.jquery,Rv=e=>e instanceof Element||d5(e),f5=e=>{const t={};return typeof e[0]=="object"&&!Rv(e[0])?Object.assign(t,e[0]):["title","html","icon"].forEach((n,r)=>{const s=e[r];typeof s=="string"||Rv(s)?t[n]=s:s!==void 0&&Ci(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof s}`)}),t};function h5(...e){return new this(...e)}function m5(e){class t extends this{_main(r,s){return super._main(r,Object.assign({},e,s))}}return t}const p5=()=>ue.timeout&&ue.timeout.getTimerLeft(),x_=()=>{if(ue.timeout)return kE(),ue.timeout.stop()},w_=()=>{if(ue.timeout){const e=ue.timeout.start();return hp(e),e}},g5=()=>{const e=ue.timeout;return e&&(e.running?x_():w_())},v5=e=>{if(ue.timeout){const t=ue.timeout.increase(e);return hp(t,!0),t}},y5=()=>!!(ue.timeout&&ue.timeout.isRunning());let zv=!1;const Lh={};function x5(e="data-swal-template"){Lh[e]=this,zv||(document.body.addEventListener("click",w5),zv=!0)}const w5=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const n in Lh){const r=t.getAttribute(n);if(r){Lh[n].fire({template:r});return}}};class b5{constructor(){this.events={}}_getHandlersByEventName(t){return typeof this.events[t]>"u"&&(this.events[t]=[]),this.events[t]}on(t,n){const r=this._getHandlersByEventName(t);r.includes(n)||r.push(n)}once(t,n){const r=(...s)=>{this.removeListener(t,r),n.apply(this,s)};this.on(t,r)}emit(t,...n){this._getHandlersByEventName(t).forEach(r=>{try{r.apply(this,n)}catch(s){console.error(s)}})}removeListener(t,n){const r=this._getHandlersByEventName(t),s=r.indexOf(n);s>-1&&r.splice(s,1)}removeAllListeners(t){this.events[t]!==void 0&&(this.events[t].length=0)}reset(){this.events={}}}ue.eventEmitter=new b5;const _5=(e,t)=>{ue.eventEmitter.on(e,t)},S5=(e,t)=>{ue.eventEmitter.once(e,t)},k5=(e,t)=>{if(!e){ue.eventEmitter.reset();return}t?ue.eventEmitter.removeListener(e,t):ue.eventEmitter.removeAllListeners(e)};var j5=Object.freeze({__proto__:null,argsToParams:f5,bindClickHandler:x5,clickCancel:fT,clickConfirm:Vb,clickDeny:dT,enableLoading:ws,fire:h5,getActions:va,getCancelButton:Us,getCloseButton:cp,getConfirmButton:tr,getContainer:$t,getDenyButton:Pi,getFocusableElements:up,getFooter:Rb,getHtmlContainer:ap,getIcon:Fs,getIconContent:vE,getImage:Ib,getInputLabel:yE,getLoader:Hs,getPopup:Ne,getProgressSteps:lp,getTimerLeft:p5,getTimerProgressBar:fu,getTitle:Ab,getValidationMessage:du,increaseTimer:v5,isDeprecatedParameter:m_,isLoading:wE,isTimerRunning:y5,isUpdatableParameter:h_,isValidParameter:f_,isVisible:uT,mixin:m5,off:k5,on:_5,once:S5,resumeTimer:w_,showLoading:ws,stopTimer:x_,toggleTimer:g5});class N5{constructor(t,n){this.callback=t,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(t){const n=this.running;return n&&this.stop(),this.remaining+=t,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const b_=["swal-title","swal-html","swal-footer"],C5=e=>{const t=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!t)return{};const n=t.content;return R5(n),Object.assign(P5(n),E5(n),T5(n),L5(n),O5(n),A5(n),I5(n,b_))},P5=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach(r=>{_i(r,["name","value"]);const s=r.getAttribute("name"),l=r.getAttribute("value");!s||!l||(typeof ls[s]=="boolean"?t[s]=l!=="false":typeof ls[s]=="object"?t[s]=JSON.parse(l):t[s]=l)}),t},E5=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(r=>{const s=r.getAttribute("name"),l=r.getAttribute("value");!s||!l||(t[s]=new Function(`return ${l}`)())}),t},T5=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach(r=>{_i(r,["type","color","aria-label"]);const s=r.getAttribute("type");!s||!["confirm","cancel","deny"].includes(s)||(t[`${s}ButtonText`]=r.innerHTML,t[`show${ip(s)}Button`]=!0,r.hasAttribute("color")&&(t[`${s}ButtonColor`]=r.getAttribute("color")),r.hasAttribute("aria-label")&&(t[`${s}ButtonAriaLabel`]=r.getAttribute("aria-label")))}),t},L5=e=>{const t={},n=e.querySelector("swal-image");return n&&(_i(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt")||void 0)),t},O5=e=>{const t={},n=e.querySelector("swal-icon");return n&&(_i(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},A5=e=>{const t={},n=e.querySelector("swal-input");n&&(_i(n,["type","label","placeholder","value"]),t.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(t.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(t.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(t.inputValue=n.getAttribute("value")));const r=Array.from(e.querySelectorAll("swal-input-option"));return r.length&&(t.inputOptions={},r.forEach(s=>{_i(s,["value"]);const l=s.getAttribute("value");if(!l)return;const c=s.innerHTML;t.inputOptions[l]=c})),t},I5=(e,t)=>{const n={};for(const r in t){const s=t[r],l=e.querySelector(s);l&&(_i(l,[]),n[s.replace(/^swal-/,"")]=l.innerHTML.trim())}return n},R5=e=>{const t=b_.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(n=>{const r=n.tagName.toLowerCase();t.includes(r)||Rt(`Unrecognized element <${r}>`)})},_i=(e,t)=>{Array.from(e.attributes).forEach(n=>{t.indexOf(n.name)===-1&&Rt([`Unrecognized attribute "${n.name}" on <${e.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},__=10,z5=e=>{const t=$t(),n=Ne();typeof e.willOpen=="function"&&e.willOpen(n),ue.eventEmitter.emit("willOpen",n);const s=window.getComputedStyle(document.body).overflowY;D5(t,n,e),setTimeout(()=>{M5(t,n)},__),dp()&&($5(t,e.scrollbarPadding,s),wT()),!hu()&&!ue.previousActiveElement&&(ue.previousActiveElement=document.activeElement),typeof e.didOpen=="function"&&setTimeout(()=>e.didOpen(n)),ue.eventEmitter.emit("didOpen",n),Sn(t,W["no-transition"])},_c=e=>{const t=Ne();if(e.target!==t)return;const n=$t();t.removeEventListener("animationend",_c),t.removeEventListener("transitionend",_c),n.style.overflowY="auto"},M5=(e,t)=>{$b(t)?(e.style.overflowY="hidden",t.addEventListener("animationend",_c),t.addEventListener("transitionend",_c)):e.style.overflowY="auto"},$5=(e,t,n)=>{bT(),t&&n!=="hidden"&&PT(n),setTimeout(()=>{e.scrollTop=0})},D5=(e,t,n)=>{Ee(e,n.showClass.backdrop),n.animation?(t.style.setProperty("opacity","0","important"),pt(t,"grid"),setTimeout(()=>{Ee(t,n.showClass.popup),t.style.removeProperty("opacity")},__)):pt(t,"grid"),Ee([document.documentElement,document.body],W.shown),n.heightAuto&&n.backdrop&&!n.toast&&Ee([document.documentElement,document.body],W["height-auto"])};var Mv={email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function B5(e){e.inputValidator||(e.input==="email"&&(e.inputValidator=Mv.email),e.input==="url"&&(e.inputValidator=Mv.url))}function F5(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(Rt('Target parameter is not valid, defaulting to "body"'),e.target="body")}function U5(e){B5(e),e.showLoaderOnConfirm&&!e.preConfirm&&Rt(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),F5(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),OE(e)}let Vn;var ll=new WeakMap;class et{constructor(...t){if(cE(this,ll,void 0),typeof window>"u")return;Vn=this;const n=Object.freeze(this.constructor.argsToParams(t));this.params=n,this.isAwaitingPromise=!1,uE(ll,this,this._main(Vn.params))}_main(t,n={}){if(p_(Object.assign({},n,t)),ue.currentInstance){const l=xs.swalPromiseResolve.get(ue.currentInstance),{isAwaitingPromise:c}=ue.currentInstance;ue.currentInstance._destroy(),c||l({isDismissed:!0}),dp()&&Kb()}ue.currentInstance=Vn;const r=q5(t,n);U5(r),Object.freeze(r),ue.timeout&&(ue.timeout.stop(),delete ue.timeout),clearTimeout(ue.restoreFocusTimeout);const s=W5(Vn);return Zb(Vn,r),$e.innerParams.set(Vn,r),H5(Vn,s,r)}then(t){return Cv(ll,this).then(t)}finally(t){return Cv(ll,this).finally(t)}}const H5=(e,t,n)=>new Promise((r,s)=>{const l=c=>{e.close({isDismissed:!0,dismiss:c})};xs.swalPromiseResolve.set(e,r),xs.swalPromiseReject.set(e,s),t.confirmButton.onclick=()=>{WT(e)},t.denyButton.onclick=()=>{ZT(e)},t.cancelButton.onclick=()=>{VT(e,l)},t.closeButton.onclick=()=>{l(qs.close)},s5(n,t,l),hT(ue,n,l),zT(e,n),z5(n),Z5(ue,n,l),V5(t,n),setTimeout(()=>{t.container.scrollTop=0})}),q5=(e,t)=>{const n=C5(e),r=Object.assign({},ls,t,n,e);return r.showClass=Object.assign({},ls.showClass,r.showClass),r.hideClass=Object.assign({},ls.hideClass,r.hideClass),r.animation===!1&&(r.showClass={backdrop:"swal2-noanimation"},r.hideClass={}),r},W5=e=>{const t={popup:Ne(),container:$t(),actions:va(),confirmButton:tr(),denyButton:Pi(),cancelButton:Us(),loader:Hs(),closeButton:cp(),validationMessage:du(),progressSteps:lp()};return $e.domCache.set(e,t),t},Z5=(e,t,n)=>{const r=fu();Pt(r),t.timer&&(e.timeout=new N5(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(pt(r),on(r,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&hp(t.timer)})))},V5=(e,t)=>{if(!t.toast){if(!uu(t.allowEnterKey)){Ob("allowEnterKey"),K5();return}G5(e)||Y5(e,t)||Th(-1,1)}},G5=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const n of t)if(n instanceof HTMLElement&&Xt(n))return n.focus(),!0;return!1},Y5=(e,t)=>t.focusDeny&&Xt(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&Xt(e.cancelButton)?(e.cancelButton.focus(),!0):t.focusConfirm&&Xt(e.confirmButton)?(e.confirmButton.focus(),!0):!1,K5=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const e=new Date,t=localStorage.getItem("swal-initiation");t?(e.getTime()-Date.parse(t))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${e}`)}et.prototype.disableButtons=a_;et.prototype.enableButtons=o_;et.prototype.getInput=r_;et.prototype.disableInput=c_;et.prototype.enableInput=l_;et.prototype.hideLoading=wc;et.prototype.disableLoading=wc;et.prototype.showValidationMessage=u_;et.prototype.resetValidationMessage=d_;et.prototype.close=Ar;et.prototype.closePopup=Ar;et.prototype.closeModal=Ar;et.prototype.closeToast=Ar;et.prototype.rejectPromise=Jb;et.prototype.update=g_;et.prototype._destroy=v_;Object.assign(et,j5);Object.keys(i5).forEach(e=>{et[e]=function(...t){return Vn&&Vn[e]?Vn[e](...t):null}});et.DismissReason=qs;et.version="11.22.2";const Ie=et;Ie.default=Ie;typeof document<"u"&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch{n.innerText=t}}(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px $swal2-outline-color;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const S_=j.createContext(),X5=({children:e})=>{const[t,n]=j.useState(null),[r,s]=j.useState(!0);return j.useEffect(()=>{(async()=>{var c;try{const d=await Re(pe.GET_SETTINGS);n(((c=d==null?void 0:d.data)==null?void 0:c.settings)||{})}catch{}finally{s(!1)}})()},[]),o.jsx(S_.Provider,{value:{settings:t,loading:r},children:e})},Q5=()=>j.useContext(S_),k_=()=>{const{settings:e}=Q5();return(t,n=null)=>{try{if(!e)return console.warn(`Settings not available, using fallback for key: ${t}`),n;const r=e[t];return r??(console.warn(`Key "${t}" not found in settings, using fallback`),n)}catch(r){return console.error(`Error getting setting for key "${t}":`,r),n}}},Et=()=>{const e=k_();return t=>{const n="/assets/img/no_image.jpg";if(!t)return n;const r=e("imageLink","");return t.startsWith("http")?t:`${r}${t}`}},J5=()=>{const{cartItems:e,cartCount:t,loading:n,error:r,removeCartItem:s,updateCartItem:l,getCartTotal:c,isInitialized:d,updatingItems:f,removingItems:m}=cu(),p=Mn(),v=Et(),b=(T,O)=>{O>0?l(T,O):s(T)},k=T=>{s(T)},N=T=>f.has(T),w=T=>m.has(T),S=()=>f.size>0||m.size>0,y=e.filter(T=>{const O={stock:T.stock,variants:T.variants||[],inventory:T.inventory||[]},I=T.varientId?O.variants.find(q=>q._id===T.varientId):null;return vr(O,I)}),x=y.length>0,E=()=>{if(x){Ie.fire({icon:"warning",title:"Out of Stock Items",text:`You have ${y.length} item(s) that are out of stock. Please remove them before proceeding to checkout.`,showConfirmButton:!0,confirmButtonText:"OK"});return}const T=document.getElementById("offcanvasRight");if(T){const O=bootstrap.Offcanvas.getInstance(T);O&&O.hide()}p("/OrderCheckout")};return!d||n?o.jsxs("div",{className:"offcanvas offcanvas-end",tabIndex:-1,id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel",children:[o.jsxs("div",{className:"offcanvas-header border-bottom",children:[o.jsx("div",{className:"text-start",children:o.jsx("h5",{id:"offcanvasRightLabel",className:"mb-0 fs-4",children:"Shop Cart"})}),o.jsx("button",{type:"button",className:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),o.jsx("div",{className:"offcanvas-body",children:o.jsx(oE,{})})]}):o.jsxs("div",{className:"offcanvas offcanvas-end",tabIndex:-1,id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel",children:[o.jsxs("div",{className:"offcanvas-header border-bottom",children:[o.jsx("div",{className:"text-start",children:o.jsxs("h5",{id:"offcanvasRightLabel",className:"mb-0 fs-4",children:["Shop Cart (",t," items)"]})}),o.jsx("button",{type:"button",className:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})]}),o.jsx("div",{className:"offcanvas-body cart-body",children:r?o.jsx("div",{className:"alert alert-danger",role:"alert",children:r}):e.length===0?o.jsxs("div",{className:"text-center py-5",children:[o.jsx("div",{className:"mb-3",children:o.jsx("i",{className:"fa fa-shopping-cart fa-3x text-muted"})}),o.jsx("h6",{className:"text-muted",children:"Your cart is empty"}),o.jsx("p",{className:"text-muted small",children:"Add some items to get started!"})]}):o.jsx(o.Fragment,{children:o.jsx("div",{className:"cart-products-section",children:o.jsx("ul",{className:"list-group list-group-flush",children:e.map((T,O)=>{const I=T._id||T.cartItemId,q=N(I),F=w(I),z=q||F,B={stock:T.stock,variants:T.variants||[],inventory:T.inventory||[]},Z=T.varientId?B.variants.find(K=>K._id===T.varientId):null,Q=vr(B,Z);return o.jsx("li",{className:"list-group-item py-3 px-0",children:o.jsxs("div",{className:"row align-items-center g-2",children:[o.jsxs("div",{className:"col-3 col-sm-2 position-relative",children:[o.jsx("img",{src:v(T.image),alt:T.name,className:"img-fluid rounded",onError:K=>{K.target.src="/assets/img/no_image.jpg"}}),Q&&o.jsx("span",{className:"badge bg-danger position-absolute top-0 start-0",style:{fontSize:"0.7rem"},children:"Out of Stock"})]}),o.jsxs("div",{className:"col-6 col-sm-5",children:[o.jsx("h6",{className:"mb-0 text-truncate",children:T.name}),o.jsx("span",{children:o.jsxs("small",{className:"text-muted",children:["₹",T.price," / unit"]})}),Q&&o.jsx("div",{className:"mt-1",children:o.jsxs("small",{className:"text-danger",children:[o.jsx("i",{className:"fa fa-exclamation-triangle me-1"}),"This item is out of stock"]})}),o.jsx("div",{className:"mt-2 small",children:o.jsxs("button",{onClick:()=>k(I),className:"text-decoration-none text-danger border-0 bg-transparent p-0",style:{cursor:"pointer"},disabled:z,children:[o.jsx("span",{className:"me-1",children:o.jsx("i",{className:"fa fa-trash"})}),F?"Removing...":"Remove"]})})]}),o.jsx("div",{className:"col-3 col-sm-3",children:o.jsxs("div",{className:"cart-qty-box",children:[o.jsx("button",{type:"button",className:"cart-qty-btn",onClick:()=>b(I,T.quantity-1),disabled:z||Q,"aria-label":"Decrease quantity",children:"-"}),o.jsx("input",{type:"number",min:"1",value:T.quantity,onChange:K=>b(I,parseInt(K.target.value)||1),className:"cart-qty-input",disabled:z||Q}),o.jsx("button",{type:"button",className:"cart-qty-btn",onClick:()=>b(I,T.quantity+1),disabled:z||Q,"aria-label":"Increase quantity",children:"+"}),z&&o.jsx("div",{className:"cart-updating-indicator",children:o.jsx("div",{className:"spinner-border spinner-border-sm text-success",role:"status",children:o.jsx("span",{className:"visually-hidden",children:"Processing..."})})})]})}),o.jsx("div",{className:"col-12 col-sm-2 text-end",children:o.jsxs("span",{className:"fw-bold",children:["₹",T.price*T.quantity]})})]})},`${T.productId}-${T.varientId}-${O}`)})})})})}),e.length>0&&o.jsx("div",{className:"cart-checkout-section",children:o.jsxs("div",{className:"pt-3",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-center mb-3",children:[o.jsx("h6",{className:"mb-0",children:"Total:"}),o.jsxs("h6",{className:"mb-0 text-success",children:["₹",c()]})]}),o.jsx("button",{onClick:E,className:`btn w-100 ${x?"btn-warning":"btn-success"} ${S()?"disabled":""}`,style:{pointerEvents:S()||x?"none":"auto",opacity:S()||x?.6:1},disabled:S()||x,children:S()?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Updating..."]}):x?o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fa fa-exclamation-triangle me-2"}),"Remove Out of Stock Items"]}):"Proceed to Checkout"})]})}),o.jsx("style",{children:`
        .cart-body {
          display: flex;
          flex-direction: column;
          height: calc(100vh - 120px);
          padding-bottom: 0;
          overflow-x: hidden;
        }

        .cart-products-section {
          flex: 1;
          overflow-y: auto;
          overflow-x: hidden;
          padding-bottom: 20px;
        }

        .cart-checkout-section {
          position: sticky;
          bottom: 0;
          background: white;
          padding: 1rem;
          border-top: 1px solid #e0e0e0;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          z-index: 10;
          overflow: hidden;
        }

        .cart-qty-box {
          display: flex;
          align-items: center;
          border: 1px solid #e0e0e0;
          border-radius: 7px;
          background: #fafafa;
          gap: 6px;
          height: 40px;
          min-width: 110px;
          max-width: 140px;
          position: relative;
        }

        .cart-qty-btn {
          background: none;
          border: none;
          font-size: 1.3rem;
          color: #0aad0a;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.15s;
          box-shadow: 0 1px 2px rgba(10,173,10,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .cart-qty-btn:hover:not(:disabled) {
          background: #e6f7e6;
        }

        .cart-qty-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .cart-qty-input {
          width: 32px;
          text-align: center;
          font-size: 1rem;
          border: none;
          background: transparent;
          outline: none;
          height: 32px;
          line-height: 32px;
          flex-shrink: 0;
        }

        .cart-qty-input:disabled {
          opacity: 0.6;
        }

        .cart-updating-indicator {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.9);
          border-radius: 4px;
          padding: 2px;
        }

        .btn.disabled {
          cursor: not-allowed;
        }

        .list-group-item {
          overflow-x: hidden;
        }

        .row {
          margin: 0;
        }

        .col-3, .col-6, .col-12, .col-sm-2, .col-sm-3, .col-sm-5 {
          padding: 0 8px;
        }

        @media (max-width: 576px) {
          .cart-body {
            height: calc(100vh - 100px);
          }
          
          .cart-qty-box {
            height: 36px;
            min-width: 100px;
            max-width: 120px;
          }
          
          .cart-qty-btn {
            width: 28px;
            height: 28px;
            font-size: 1.1rem;
          }
          
          .cart-qty-input {
            width: 28px;
            height: 28px;
            line-height: 28px;
            font-size: 0.9rem;
          }

          .col-3, .col-6, .col-12 {
            padding: 0 4px;
          }
        }
      `})]})},e3=()=>{const e=Mn(),[t,n]=j.useState(!1),[r,s]=j.useState(""),[l,c]=j.useState([]),[d,f]=j.useState(!1),[m,p]=j.useState(null),[v,b]=j.useState(!1),k=j.useRef(),N=j.useRef(),[w,S]=j.useState([]),[_,y]=j.useState(!0),[x,E]=j.useState(null),T=j.useRef(),{isLoggedIn:O,logout:I}=Ds(),{cartCount:q,isInitialized:F}=cu(),[z,B]=j.useState([]),[Z,Q]=j.useState(!0),[K,te]=j.useState(null),ee=Et(),[V,P]=j.useState([]),M=V.filter(R=>R.status&&R.pageSlug&&R.pageTitle),D=()=>{n(!t)},Y=R=>{console.log("product",R),e(`/product/${R._id||R.id}`,{state:{product:R}}),b(!1),s(""),c([])};return j.useEffect(()=>{if(!r){c([]),f(!1),p(null);return}return f(!0),p(null),k.current&&clearTimeout(k.current),k.current=setTimeout(()=>{Re(`${pe.SEARCH_PRODUCTS}&name=${encodeURIComponent(r)}`).then(R=>{var ne;c(((ne=R.data)==null?void 0:ne.products)||[]),f(!1)}).catch(R=>{p("Failed to fetch suggestions"),f(!1)})},300),()=>clearTimeout(k.current)},[r]),j.useEffect(()=>{function R(ne){T.current&&!T.current.contains(ne.target)&&b(!1)}return document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[]),j.useEffect(()=>{let R=!0;return y(!0),Re(pe.CATEGORIES).then(ne=>{var oe;R&&(S(((oe=ne.data)==null?void 0:oe.result)||[]),E(null))}).catch(ne=>{R&&E("Failed to load categories")}).finally(()=>{R&&y(!1)}),()=>{R=!1}},[]),j.useEffect(()=>{Re(pe.PAGES).then(R=>{var ne;P(((ne=R.data)==null?void 0:ne.getPage)||[])}).catch(R=>{console.error("Error fetching pages:",R)})},[]),j.useEffect(()=>{Q(!0),Re(pe.BRANDS).then(R=>{var oe;const ne=(oe=R.data)==null?void 0:oe.allBrands.sort((ce,ae)=>ce.brandName.localeCompare(ae.brandName));B(ne||[]),te(null)}).catch(R=>{te("Failed to load top brands")}).finally(()=>{Q(!1)})},[]),o.jsxs("div",{children:[o.jsx("style",{children:`
        .navbar-nav .nav-link:focus, .navbar-nav .nav-link:active, .navbar-nav .nav-link:focus-visible,
        .navbar-nav .dropdown-item:focus, .navbar-nav .dropdown-item:active, .navbar-nav .dropdown-item:focus-visible,
        .navbar-toggler:focus, .navbar-toggler:active, .navbar-toggler:focus-visible {
          outline: none !important;
          box-shadow: none !important;
          border: none !important;
        }
        .navbar-nav .nav-link {
          font-weight: 600 !important;
          letter-spacing: 0.02em !important;
          font-size: 1.0rem !important;
        }
        
        /* Top menu responsive styles */
        .top-menu ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        .top-menu .list-inline-item {
          margin-right: 0;
        }
        .top-menu .list-inline-item a {
          font-size: 0.9rem;
          transition: color 0.2s ease;
        }
        .top-menu .list-inline-item a:hover {
          color: #30574e !important;
        }
        
        /* Desktop layout for >991px */
        @media (min-width: 992px) {
          .header-search-desktop {
            display: flex !important;
            flex: 1 1 0;
            max-width: 520px;
            margin: 0 2rem;
            align-items: center;
          }
          .header-icons-desktop {
            display: flex !important;
            align-items: center;
            gap: 1.5rem;
            justify-content: flex-end;
          }
          .header-search-mobile,
          .header-icons-mobile {
            display: none !important;
          }
        }
        @media (max-width: 991.98px) {
          .header-search-desktop,
          .header-icons-desktop {
            display: none !important;
          }
          .header-search-mobile {
            display: flex !important;
            flex: 1 1 0;
            min-width: 0;
          }
          .header-icons-mobile {
            display: flex !important;
            justify-content: flex-end;
            gap: 1.5rem;
          }
        }
        
        /* Mobile responsive for top menu */
          @media (max-width: 576px) {
            .top-menu ul {
              flex-direction: row;
              flex-wrap: wrap;
              gap: 0.25rem;
            }
            .top-menu .list-inline-item {
              margin-bottom: 0;
            }
          }
      `}),o.jsx("style",{children:`
        .search-suggestion-dropdown, .search-suggestion-dropdown * {
          pointer-events: auto !important;
          z-index: 9999 !important;
        }
        .suggestion-item, .suggestion-item * {
          pointer-events: auto !important;
        }
      `}),o.jsx(o.Fragment,{children:o.jsx("div",{className:"border-bottom",children:o.jsx("div",{className:"bg-light py-3",children:o.jsx("div",{className:"container",children:o.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[o.jsx("div",{className:"flex-grow-1",children:o.jsx("nav",{className:"top-menu",children:o.jsx("ul",{className:"list-inline mb-0 d-flex flex-wrap align-items-center",children:M.map((R,ne)=>o.jsxs(wn.Fragment,{children:[o.jsx("li",{className:"list-inline-item",children:o.jsx(xe,{to:`/${R.pageSlug}`,className:"text-decoration-none text-muted",children:R.pageTitle})}),ne<M.length-1&&o.jsx("li",{className:"list-inline-item",children:o.jsx("span",{className:"text-muted mx-2",children:"|"})})]},R._id))})})}),o.jsxs("div",{className:"d-none d-lg-flex header-icons-desktop gap-3",children:[o.jsx("div",{className:"list-inline-item d-inline-block",children:O?o.jsx("button",{className:"btn text-muted d-inline-block p-0",onClick:()=>e("/MyAccountOrder"),title:"My Profile",style:{lineHeight:"1"},children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-user",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:12,cy:7,r:4})]})}):o.jsx("a",{href:"#",className:"text-muted","data-bs-toggle":"modal","data-bs-target":"#userModal",title:"Login",children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-user",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:12,cy:7,r:4})]})})}),o.jsxs(xe,{className:"text-muted position-relative","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight",to:"#offcanvasExample",role:"button","aria-controls":"offcanvasRight",children:[o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-shopping-bag",children:[o.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),o.jsx("line",{x1:3,y1:6,x2:21,y2:6}),o.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),F&&q>0&&o.jsxs("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill",style:{backgroundColor:"#198754"},children:[q,o.jsx("span",{className:"visually-hidden",children:"items in cart"})]})]})]})]})})})})}),o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"header-search-mobile",children:o.jsx(Nv,{})}),o.jsxs("div",{className:"d-flex align-items-center header-search-mobile py-2",style:{borderBottom:"1px solid #eee"},children:[o.jsxs("div",{className:"flex-grow-1",ref:T,style:{position:"relative",maxWidth:"calc(100% - 120px)"},children:[o.jsx("input",{ref:N,className:"form-control responsivesearch px-3",style:{width:"100%",minWidth:250,paddingRight:40,borderRadius:12,fontSize:"1rem",boxShadow:"0 2px 8px rgba(48,87,78,0.06)"},id:"product-search-input",placeholder:"Search for products...",value:r,onChange:R=>s(R.target.value),onKeyUp:R=>s(R.target.value),onFocus:()=>b(!0),autoComplete:"off","aria-label":"Search for products"}),o.jsx("span",{style:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",color:"#30574e",pointerEvents:"none"},children:o.jsxs("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),v&&(r||d||m)&&o.jsxs("div",{className:"search-suggestion-dropdown",style:{position:"absolute",top:"100%",left:0,right:0,zIndex:1050,background:"#fff",border:"1px solid #e0e0e0",borderTop:"none",maxHeight:400,width:"100%",overflowY:"auto",overflowx:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.08)",borderRadius:"0 0 8px 8px",transition:"width 0.2s"},children:[d&&o.jsx("div",{className:"p-2 text-center text-muted",children:"Loading..."}),m&&o.jsx("div",{className:"p-2 text-danger",children:m}),!d&&!m&&l.length===0&&r&&o.jsx("div",{className:"p-2 text-muted",children:"No products found"}),!d&&!m&&l.map(R=>{var ne,oe;return o.jsxs("div",{className:"d-flex align-items-center p-2 suggestion-item",style:{cursor:"pointer",borderBottom:"1px solid #f0f0f0",transition:"background 0.2s"},onClick:()=>Y(R),children:[o.jsx("img",{src:ee(R.productThumbnailUrl||R.productImageUrl&&R.productImageUrl[0]||R.image),alt:R.productName||R.name,style:{width:48,height:48,objectFit:"cover",borderRadius:6,marginRight:16,background:"#f8f8f8"}}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontWeight:600,fontSize:"1rem",color:"#30574e"},children:R.productName||R.name}),o.jsx("div",{style:{fontSize:"0.95em",color:"#888",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((oe=(ne=R.category)==null?void 0:ne[0])==null?void 0:oe.name)||R.category&&R.category.name||""}),R.variants&&R.variants[0]&&o.jsxs("div",{style:{fontSize:"0.95em",color:"#222",marginTop:2},children:["₹",R.variants[0].sell_price," ",o.jsx("span",{style:{textDecoration:"line-through",color:"#aaa",marginLeft:4,fontSize:"0.9em"},children:R.variants[0].mrp>R.variants[0].sell_price?`₹${R.variants[0].mrp}`:""}),R.variants[0].discountValue?o.jsxs("span",{style:{color:"#e53935",marginLeft:8,fontWeight:500},children:["-",R.variants[0].discountValue,"%"]}):null]})]})]},R._id||R.id||R.productName)})]})]}),o.jsxs("div",{className:"d-flex align-items-center gap-3 header-icons-mobile flex-shrink-0 ms-3",style:{minWidth:100,justifyContent:"flex-end"},children:[o.jsx("div",{className:"list-inline-item d-inline-block",children:O?o.jsx("button",{className:"btn text-muted d-inline-block p-0",onClick:()=>e("/MyAccountOrder"),title:"My Profile",style:{lineHeight:"1"},children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-user",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:12,cy:7,r:4})]})}):o.jsx("a",{href:"#",className:"text-muted","data-bs-toggle":"modal","data-bs-target":"#userModal",title:"Login",children:o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-user",children:[o.jsx("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),o.jsx("circle",{cx:12,cy:7,r:4})]})})}),o.jsxs(xe,{className:"text-muted position-relative","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight",to:"#offcanvasExample",role:"button","aria-controls":"offcanvasRight",children:[o.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:20,height:20,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round",className:"feather feather-shopping-bag",children:[o.jsx("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),o.jsx("line",{x1:3,y1:6,x2:21,y2:6}),o.jsx("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),F&&q>0&&o.jsxs("span",{className:"position-absolute top-0 start-100 translate-middle badge rounded-pill",style:{backgroundColor:"#198754"},children:[q,o.jsx("span",{className:"visually-hidden",children:"items in cart"})]})]})]})]})]}),o.jsx("nav",{className:"navbar navbar-expand-lg navbar-light sticky-top",children:o.jsxs("div",{className:"container d-flex align-items-center w-100",children:[o.jsx(xe,{className:"navbar-brand",to:"/",children:o.jsx("span",{style:{color:"#30574e",fontWeight:"bold",fontSize:"2rem",letterSpacing:"0.15em",fontFamily:"Montserrat, Arial, sans-serif",textTransform:"uppercase",textShadow:"0 2px 8px rgba(48,87,78,0.08)"},children:"FIVLIA"})}),o.jsx("div",{className:"header-search-desktop",children:o.jsx(Nv,{})}),o.jsxs("div",{className:"header-search-desktop ms-3 me-4",ref:T,style:{display:"none",flex:1,maxWidth:520,position:"relative"},children:[o.jsx("input",{ref:N,className:"form-control responsivesearch",style:{width:"100%",minWidth:520,paddingRight:40,borderRadius:12,fontSize:"1rem",boxShadow:"0 2px 8px rgba(48,87,78,0.06)"},id:"product-search-input-desktop",placeholder:"Search for products...",value:r,onChange:R=>s(R.target.value),onKeyUp:R=>s(R.target.value),onFocus:()=>b(!0),autoComplete:"off","aria-label":"Search for products"}),o.jsx("span",{style:{position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",color:"#30574e",pointerEvents:"none"},children:o.jsxs("svg",{width:"20",height:"20",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[o.jsx("circle",{cx:"11",cy:"11",r:"8"}),o.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),v&&(r||d||m)&&o.jsxs("div",{className:"search-suggestion-dropdown",style:{position:"absolute",top:"100%",left:0,right:0,zIndex:1e3,background:"#fff",border:"1px solid #e0e0e0",borderTop:"none",maxHeight:400,width:"100%",overflowY:"auto",overflowx:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.08)",borderRadius:"0 0 8px 8px",transition:"width 0.2s",minWidth:320},children:[d&&o.jsx("div",{className:"p-2 text-center text-muted",children:"Loading..."}),m&&o.jsx("div",{className:"p-2 text-danger",children:m}),!d&&!m&&l.length===0&&r&&o.jsx("div",{className:"p-2 text-muted",children:"No products found"}),!d&&!m&&l.map(R=>{var ne,oe;return o.jsxs("div",{className:"d-flex align-items-center p-2 suggestion-item",style:{cursor:"pointer",borderBottom:"1px solid #f0f0f0",transition:"background 0.2s"},onClick:()=>Y(R),children:[o.jsx("img",{src:ee(R.productThumbnailUrl||R.productImageUrl&&R.productImageUrl[0]||R.image||""),alt:R.productName||R.name,style:{width:48,height:48,objectFit:"cover",borderRadius:6,marginRight:16,background:"#f8f8f8"}}),o.jsxs("div",{style:{flex:1},children:[o.jsx("div",{style:{fontWeight:600,fontSize:"1rem",color:"#30574e"},children:R.productName||R.name}),o.jsx("div",{style:{fontSize:"0.95em",color:"#888",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},children:((oe=(ne=R.category)==null?void 0:ne[0])==null?void 0:oe.name)||R.category&&R.category.name||""}),R.variants&&R.variants[0]&&o.jsxs("div",{style:{fontSize:"0.95em",color:"#222",marginTop:2},children:["₹",R.variants[0].sell_price," ",o.jsx("span",{style:{textDecoration:"line-through",color:"#aaa",marginLeft:4,fontSize:"0.9em"},children:R.variants[0].mrp>R.variants[0].sell_price?`₹${R.variants[0].mrp}`:""}),R.variants[0].discountValue?o.jsxs("span",{style:{color:"#e53935",marginLeft:8,fontWeight:500},children:["-",R.variants[0].discountValue,"%"]}):null]})]})]},R._id||R.id||R.productName)})]})]}),o.jsx("button",{className:"navbar-toggler",type:"button","aria-label":"Toggle navigation",onClick:D,children:o.jsxs("div",{className:`containerr ${t?"change":""}`,children:[o.jsx("div",{className:"bar1"}),o.jsx("div",{className:"bar2"}),o.jsx("div",{className:"bar3"})]})}),o.jsxs("div",{className:`navbar-collapse${t?" show":" collapse"}`,id:"mobile_nav",children:[o.jsx("ul",{className:"navbar-nav mr-auto mt-2 mt-lg-0 float-md-right ms-auto"}),o.jsxs("ul",{className:"navbar-nav navbar-light",children:[o.jsxs("li",{className:"nav-item dmenu dropdown",children:[o.jsx(xe,{className:"nav-link dropdown-toggle",to:"",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Categories"}),o.jsxs("div",{className:"dropdown-menu sm-menu","aria-labelledby":"navbarDropdown",style:{minWidth:220},children:[_&&o.jsx("div",{className:"dropdown-item text-muted",children:"Loading..."}),x&&o.jsx("div",{className:"dropdown-item text-danger",children:x}),!_&&!x&&w.length===0&&o.jsx("div",{className:"dropdown-item text-muted",children:"No categories found"}),!_&&!x&&w.map((R,ne)=>o.jsx(xe,{className:"dropdown-item",to:`/Shop?category=${R.id||R._id||ne}`,"aria-label":`Go to ${R.name} category`,children:R.name},R.id||R._id||ne))]})]}),o.jsxs("li",{className:"nav-item dmenu dropdown",children:[o.jsx(xe,{className:"nav-link dropdown-toggle",to:"",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:"Top Brands"}),o.jsxs("div",{className:"dropdown-menu sm-menu","aria-labelledby":"navbarDropdown",style:{minWidth:220},children:[Z&&o.jsx("div",{className:"dropdown-item text-muted",children:"Loading..."}),K&&o.jsx("div",{className:"dropdown-item text-danger",children:K}),!Z&&!K&&z.length===0&&o.jsx("div",{className:"dropdown-item text-muted",children:"No categories found"}),!Z&&!K&&z.map((R,ne)=>o.jsx(xe,{to:`/brand?id=${R.id||R._id||ne}`,"aria-label":`Go to ${R.brandName} brand`,className:"dropdown-item",children:R.brandName},R.id||R._id||ne))]})]})]})]})]})}),o.jsxs(o.Fragment,{children:[o.jsx(sE,{}),o.jsx(J5,{})]})]})},t3=()=>{let t=new Date().getFullYear();const[n,r]=j.useState([]),{isLoggedIn:s,logout:l}=Ds();return j.useEffect(()=>{Re(pe.PAGES).then(c=>{var f;let d=(f=c.data)==null?void 0:f.getPage;d=d.filter(m=>m.status&&m.pageSlug&&m.pageTitle),r(d||[])}).catch(c=>{})},[]),o.jsxs("div",{children:[o.jsx("style",{children:`
        .footer-modern {
          background: #f8f9fa;
          padding-top: 3rem;
          padding-bottom: 2rem;
        }
        .footer-modern .footer-main {
          display: flex;
          flex-wrap: wrap;
          gap: 2.5rem;
          justify-content: space-between;
        }
        .footer-modern .footer-section {
          flex: 1 1 220px;
          min-width: 220px;
          margin-bottom: 2rem;
        }
        .footer-modern .footer-logo img {
          width: 180px;
          margin-bottom: 1rem;
        }
        .footer-modern .footer-title {
          font-weight: 700;
          font-size: 1.15rem;
          margin-bottom: 1rem;
          letter-spacing: 0.01em;
        }
        .footer-modern .footer-link-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-modern .footer-link-list li {
          margin-bottom: 0.5rem;
        }
        .footer-modern .footer-link-list a {
          color: #21313c;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        .footer-modern .footer-link-list a:hover {
          color: #0aad0a;
        }
        .footer-modern .payment-icons img {
          height: 32px;
          margin-right: 0.5rem;
        }
        .footer-modern .newsletter-item {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .footer-modern .newsletter-item input {
          flex: 1;
          border-radius: 10px;
          border: 1.5px solid #e0e0e0;
          padding: 0.7rem 1.2rem;
          font-size: 1.08rem;
          background: #fff;
          transition: border 0.2s, box-shadow 0.2s;
          box-shadow: 0 1px 4px rgba(10,173,10,0.04);
        }
        .footer-modern .newsletter-item input:focus {
          border: 1.5px solid #0aad0a;
          outline: none;
          box-shadow: 0 2px 8px rgba(10,173,10,0.08);
        }
        .footer-modern .newsletter-item button {
          background: linear-gradient(90deg, #0aad0a 60%, #0a8d0a 100%);
          color: #fff;
          border: none;
          border-radius: 10px;
          width: 48px;
          height: 48px;
          font-size: 1.3rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, box-shadow 0.2s;
          box-shadow: 0 1px 4px rgba(10,173,10,0.08);
        }
        .footer-modern .newsletter-item button:hover {
          background: linear-gradient(90deg, #0a8d0a 60%, #0aad0a 100%);
          box-shadow: 0 2px 8px rgba(10,173,10,0.12);
        }
        .footer-modern .social-media {
          display: flex;
          gap: 1rem;
          margin-bottom: 0.5rem;
        }
        .footer-modern .social-media a {
          color: #30574e;
          font-size: 1.5rem;
          width: 44px;
          height: 44px;
          border: 1.5px solid #e0e0e0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          transition: color 0.2s, border 0.2s, box-shadow 0.2s;
        }
        .footer-modern .social-media a:hover {
          color: #0aad0a;
          border: 1.5px solid #0aad0a;
          box-shadow: 0 2px 8px rgba(10,173,10,0.08);
        }
        .footer-modern .footer-bar {
          border-top: 1px solid #e0e0e0;
          margin-top: 2rem;
          padding-top: 1rem;
          font-size: 0.98rem;
          color: #888;
        }
        @media (max-width: 767px) {
          .footer-modern .footer-main {
            flex-direction: column;
            gap: 1.5rem;
          }
          .footer-modern .footer-section {
            min-width: 0;
          }
        }
      `}),o.jsxs("footer",{className:"footer-modern mt-8",children:[o.jsx("div",{className:"container",children:o.jsxs("div",{className:"footer-main",children:[o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-logo",children:o.jsx(xe,{to:"/",children:o.jsx("span",{style:{color:"#30574e",fontWeight:"bold",fontSize:"2rem",letterSpacing:"0.15em",fontFamily:"Montserrat, Arial, sans-serif",textTransform:"uppercase",textShadow:"0 2px 8px rgba(48,87,78,0.08)"},children:"FIVLIA"})})}),o.jsx("p",{style:{marginBottom:24},children:"FIVLIA is fast delivery platform within minutes that facilitates the delivery of various items, including groceries, food, personal care items. We connects users with local stores and restaurants for quick delivery."})]}),o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-title",children:"For Consumers"}),o.jsx("ul",{className:"footer-link-list",children:n.map((c,d)=>o.jsx(wn.Fragment,{children:o.jsx("li",{children:o.jsx(xe,{to:`/${c.pageSlug}`,className:"text-decoration-none text-muted",children:c.pageTitle})})},c._id))})]}),o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-title",children:"Usefull Links"}),o.jsxs("ul",{className:"footer-link-list",children:[o.jsx("li",{children:o.jsx(xe,{className:"text-decoration-none text-muted",to:"/become-a-seller",children:"Sell With Us"})}),o.jsx("li",{children:o.jsx(xe,{className:"text-decoration-none text-muted",to:"/become-a-delivery-partner",children:"Deliver With Us"})}),s?o.jsxs(o.Fragment,{children:[o.jsx("li",{children:o.jsx(xe,{className:"text-decoration-none text-muted",to:"/MyAccountOrder",children:"Track Orders"})}),o.jsx("li",{children:o.jsx(xe,{className:"text-decoration-none text-muted",to:"/MyAccountOrder",children:"My Accounts"})})]}):o.jsxs(o.Fragment,{children:[o.jsx("li",{children:o.jsx("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#userModal",className:"text-muted",children:"Track Orders"})}),o.jsx("li",{children:o.jsx("a",{href:"#","data-bs-toggle":"modal","data-bs-target":"#userModal",className:"text-muted",children:"My Accounts"})})]}),o.jsx("li",{children:o.jsx(xe,{className:"text-decoration-none text-muted",to:"/delete-account",children:"Delete Account"})})]})]}),o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-title",children:"Download App"}),o.jsxs("ul",{className:"footer-link-list",children:[o.jsx("li",{children:o.jsxs("a",{href:"https://play.google.com/store/apps/details?id=com.fivlia.user",target:"_blank",rel:"noopener noreferrer",className:"d-flex align-items-center",children:[o.jsx("i",{className:"fab fa-google-play me-2"})," User App"]})}),o.jsx("li",{children:o.jsxs("a",{href:"https://apps.apple.com/in/app/fivlia-delivery-in-minutes/id6748902989",target:"_blank",rel:"noopener noreferrer",className:"d-flex align-items-center",children:[o.jsx("i",{className:"fab fa-apple me-2"}),"User App (iOS)"]})}),o.jsx("li",{children:o.jsxs("a",{href:"https://play.google.com/store/apps/details?id=com.fivlia.delivery.fivliadelivery",target:"_blank",rel:"noopener noreferrer",className:"d-flex align-items-center",children:[o.jsx("i",{className:"fab fa-google-play me-2"}),"Delivery App"]})})]})]}),o.jsxs("div",{className:"footer-section",children:[o.jsx("div",{className:"footer-title",children:"Stay Connected"}),o.jsxs("form",{className:"newsletter-item",onSubmit:c=>c.preventDefault(),children:[o.jsx("input",{type:"email",id:"email",placeholder:"Your Email",className:"form-control form-control-lg",required:!0}),o.jsx("button",{type:"submit",children:o.jsx("i",{className:"fa fa-paper-plane"})})]}),o.jsxs("div",{className:"social-media",children:[o.jsx(xe,{to:"https://www.facebook.com/profile.php?id=100090157863841",className:"facebook",children:o.jsx("i",{className:"fab fa-facebook-f"})}),o.jsx(xe,{to:"https://www.youtube.com/channel/UCnX8Bt9yXNWUY7xWAycLGVw",className:"twitter",children:o.jsx("i",{className:"fab fa-youtube"})}),o.jsx(xe,{to:"https://www.instagram.com/fivliaindia",className:"instagram",children:o.jsx("i",{className:"fab fa-instagram"})}),o.jsx(xe,{to:"https://www.linkedin.com/in/fivlia-online-shopping-925641377/",className:"linkedin",children:o.jsx("i",{className:"fab fa-linkedin-in"})})]})]})]})}),o.jsx("div",{className:"footer-bar ",children:o.jsx("div",{className:"container text-center",children:o.jsx("div",{className:"footer-copy",children:o.jsxs("div",{className:"copyright",children:["© ",t," All Rights Reserved By -",o.jsx(xe,{to:"#",target:"_blank",children:" @fivlia"})]})})})})]})]})},n3="/assets/about-icons-1-B4NbcBgJ.svg",r3="/assets/map-DkMoROzf.png",i3="/assets/fivliaWebsite-ByAtPwId.png",s3="/assets/googleplay-btn-BMq5Ra2a.svg",o3="/assets/appstore-btn-COH6o3Yp.svg",j_=({product:e,quantity:t=1,selectedVariant:n=null,className:r="pqv-add-to-cart-btn",children:s="Add to Cart",onSuccess:l=null,onError:c=null})=>{const[d,f]=j.useState(!1),{checkAuth:m}=Ds(),{fetchCartItems:p}=cu(),v=e?vr(e,n):!1,b=e?aE(e,n,t):!1,k=e?Bs(e,n):999,N=async y=>{const x=new FormData;x.append("name",y.name),x.append("price",y.price.toString()),x.append("quantity",y.quantity.toString()),x.append("productId",y.productId),y.variantId&&x.append("varientId",y.variantId),y.image&&x.append("image",y.image);const E={authRequired:!0,headers:{"Content-Type":"multipart/form-data"}};return xn(pe.ADD_TO_CART,x,E)},w=async()=>{var T,O,I,q;if(v){Ie.fire({icon:"warning",title:"Out of Stock",text:"This product is currently out of stock.",showConfirmButton:!0,confirmButtonText:"OK"});return}if(!b){Ie.fire({icon:"warning",title:"Insufficient Stock",text:`Only ${k} items available in stock.`,showConfirmButton:!0,confirmButtonText:"OK"});return}const{isAuthenticated:y,token:x,isLoggedIn:E}=m();if(console.log("Auth check:",{isLoggedIn:E,token:x,isAuthenticated:y}),!y){console.log("User not logged in, showing login modal");const F=document.getElementById("userModal");F&&((T=window.bootstrap)!=null&&T.Modal)?window.bootstrap.Modal.getOrCreateInstance(F).show():Ie.fire({icon:"warning",title:"Login Required",text:"Please login to add items to your cart",showConfirmButton:!0,confirmButtonText:"OK"});return}try{f(!0);const F={name:e.productName||e.name,price:(n==null?void 0:n.sell_price)||e.price||e.sell_price,quantity:t,productId:e._id||e.id,variantId:(n==null?void 0:n._id)||null,image:((O=e.productImageUrl)==null?void 0:O[0])||e.image};console.log("Product data for API:",F);const z=await N(F);console.log("API Response:",z.data),z.data&&z.data.message?(Ie.fire({icon:"success",title:"Added to Cart!",text:`${t} x ${F.name} has been added to your cart successfully`,showConfirmButton:!0,timer:3e3}),await p(),l&&l(z.data)):(Ie.fire({icon:"warning",title:"Response Received",text:"Item was processed but response format was unexpected",showConfirmButton:!0}),l&&l(z.data))}catch(F){console.error("Add to cart error:",F);let z="Failed to add item to cart";(q=(I=F.response)==null?void 0:I.data)!=null&&q.message?z=F.response.data.message:F.message&&(z=F.message),Ie.fire({icon:"error",title:"Error",text:z,showConfirmButton:!0}),c&&c(F)}finally{f(!1)}},S=()=>v?"Out of Stock":b?s:`Only ${k} left`,_=d||v||!b;return o.jsx("button",{className:r,onClick:w,disabled:_,style:{opacity:_?.7:1,cursor:_?"not-allowed":"pointer",backgroundColor:v?"#6c757d":void 0},children:d?o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fa fa-spinner fa-spin",style:{marginRight:8}}),"Adding..."]}):o.jsxs(o.Fragment,{children:[o.jsx("i",{className:"fa fa-shopping-cart",style:{marginRight:8}}),S()]})})},N_=({product:e,isOpen:t,onClose:n,onAddToCart:r})=>{const[s,l]=j.useState(0),[c,d]=j.useState(""),[f,m]=j.useState(1),[p,v]=j.useState(!1),b=Et(),k=e!=null&&e.productImageUrl&&Array.isArray(e.productImageUrl)?e.productImageUrl:e!=null&&e.image?[e.image]:[],N=(e==null?void 0:e.variants)||[],w=N[s]||{};if(j.useEffect(()=>{e&&t&&(d(k[0]||""),m(1),l(0))},[e==null?void 0:e.id,t]),!e||!t)return null;const S=vr(e,w),_=Cb(e,w),y=Pb(e,w),x=Bs(e,w);return o.jsxs("div",{className:"pqv-modal-overlay",onClick:n,children:[o.jsxs("div",{className:"pqv-modal",onClick:E=>E.stopPropagation(),children:[o.jsx("button",{className:"pqv-close-btn",onClick:n,"aria-label":"Close",children:"×"}),o.jsx("div",{className:"pqv-modal-content",children:o.jsxs("div",{className:"pqv-details-row",children:[o.jsxs("div",{className:"pqv-modal-left",children:[o.jsx("div",{className:"pqv-main-image-wrapper",children:o.jsx("img",{src:b(c),alt:e.name,className:"pqv-main-image",onError:E=>{E.target.src="/assets/img/no_image.jpg"}})}),k.length>1&&o.jsx("div",{className:"pqv-thumbnails",children:k.map((E,T)=>o.jsx("img",{src:b(E),alt:`Thumbnail ${T+1}`,className:`pqv-thumbnail${c===E?" selected":""}`,onClick:()=>d(E),onError:O=>{O.target.src="/assets/img/no_image.jpg"}},E+T))})]}),o.jsxs("div",{className:"pqv-modal-right",children:[o.jsx("h2",{className:"pqv-product-name",children:e.name}),o.jsxs("div",{className:"pqv-product-meta",children:[o.jsxs("span",{className:"pqv-category",children:[e.category||"",e.isVeg!==0&&o.jsxs("span",{style:{color:e.isVeg===1?"green":"red",fontWeight:"bold"},children:[" (",e.isVeg===1?"Veg":"NonVeg",")"]})]}),e.brand&&e.brand.toLowerCase()!=="unbranded"&&o.jsxs("span",{className:"pqv-brand",children:["Brand: ",e.brand]}),o.jsxs("span",{className:"pqv-brand",children:["SKU: ",e.sku]})]}),N.length>0&&o.jsx("div",{className:"pqv-variant-selector",children:N.map((E,T)=>o.jsx("button",{className:`pqv-variant-pill${s===T?" selected":""}`,onClick:()=>l(T),type:"button",children:E.variantValue||E.attributeName||`Variant ${T+1}`},E._id||T))}),o.jsx("div",{className:"pqv-product-desc",children:e.description&&e.description.length>200?o.jsxs(o.Fragment,{children:[p?e.description:e.description.slice(0,200)+"...",o.jsx("button",{className:"pqv-readmore-btn",style:{background:"none",border:"none",color:"#0aad0a",cursor:"pointer",fontWeight:500,marginLeft:8,fontSize:"1em",padding:0},onClick:()=>v(E=>!E),children:p?"Read less":"Read more"})]}):e.description}),o.jsxs("div",{className:"pqv-product-price",children:[o.jsxs("span",{className:"pqv-price",children:["₹",w.sell_price||e.price]}),w.mrp&&w.mrp>(w.sell_price||e.price)&&o.jsxs("span",{className:"pqv-mrp",children:["₹",w.mrp]}),w.discountValue&&o.jsxs("span",{className:"pqv-discount",children:[w.discountValue,"% OFF"]})]}),o.jsx("div",{className:"pqv-stock-info",style:{marginBottom:"1rem"},children:o.jsxs("div",{className:"d-flex align-items-center",children:[o.jsx("span",{className:"badge",style:{backgroundColor:y,color:"white",fontSize:"0.8rem",padding:"0.5rem 0.75rem"},children:_}),!S&&x<10&&o.jsxs("small",{className:"text-warning ms-2",children:[o.jsx("i",{className:"fa fa-exclamation-triangle me-1"}),"Only ",x," left!"]})]})}),o.jsxs("div",{className:"pqv-qty-add-row",children:[o.jsx("div",{className:"pqv-qty-row",children:o.jsxs("div",{className:"pqv-qty-box",children:[o.jsx("button",{className:"pqv-qty-btn",onClick:E=>{E.preventDefault(),E.stopPropagation(),console.log("Decrease clicked, current quantity:",f),m(T=>{const O=Math.max(1,T-1);return console.log("New quantity after decrease:",O),O})},"aria-label":"Decrease quantity",type:"button",disabled:S,children:"-"}),o.jsx("input",{type:"number",min:"1",max:S?0:x,value:f,onChange:E=>{E.preventDefault();const T=Math.max(1,Math.min(x,parseInt(E.target.value)||1));console.log("Input changed, new value:",T),m(T)},onKeyDown:E=>{E.key==="Enter"&&E.preventDefault()},className:"pqv-qty-input",disabled:S}),o.jsx("button",{className:"pqv-qty-btn",onClick:E=>{E.preventDefault(),E.stopPropagation(),console.log("Increase clicked, current quantity:",f),m(T=>{const O=Math.min(x,T+1);return console.log("New quantity after increase:",O),O})},"aria-label":"Increase quantity",type:"button",disabled:S||f>=x,children:"+"})]})}),o.jsx(j_,{product:e,quantity:f,selectedVariant:w,className:"pqv-add-to-cart-btn",onSuccess:E=>{r&&r({...e,selectedVariant:w},f)}})]}),o.jsx("style",{children:`
                .pqv-variant-selector {
                  display: flex;
                  gap: 10px;
                  margin-bottom: 1rem;
                }
                .pqv-variant-pill {
                  border: 1px solid #0aad0a;
                  background: #fff;
                  color: #0aad0a;
                  border-radius: 20px;
                  padding: 6px 18px;
                  cursor: pointer;
                  font-weight: 500;
                  transition: background 0.18s, color 0.18s;
                }
                .pqv-variant-pill.selected,
                .pqv-variant-pill:hover {
                  background: #0aad0a;
                  color: #fff;
                }
              `})]})]})})]}),o.jsx("style",{children:`
.pqv-modal-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.45);
  z-index: 1050;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;
}
.pqv-modal {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 48px rgba(10,173,10,0.10), 0 2px 12px rgba(0,0,0,0.10);
  max-width: 1300px;
  width: 99vw;
  max-height: 90vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  animation: pqv-fadein 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1.5px solid #e0f7e0;
}
@keyframes pqv-fadein {
  from { transform: scale(0.97) translateY(30px); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
}
.pqv-close-btn {
  position: absolute;
  top: 18px;
  right: 22px;
  background: #fff;
  border: none;
  font-size: 2rem;
  color: #222;
  cursor: pointer;
  z-index: 2;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  line-height: 36px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  transition: background 0.15s;
}
.pqv-close-btn:hover {
  background: #f2f2f2;
}
.pqv-modal-content {
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 48px 40px 24px 40px;
  overflow: auto;
  border-radius: 18px;
  flex: 1 1 auto;
  min-height: 0;
  background: #fafdff;
  box-shadow: 0 2px 12px rgba(10,173,10,0.04);
  border: 1px solid #e6f7ee;
}
.pqv-details-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
}
.pqv-modal-left {
  flex: 1.1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pqv-main-image-wrapper {
  width: 340px;
  height: 340px;
  background: #fafafa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.pqv-main-image {
  max-width: 95%;
  max-height: 95%;
  border-radius: 10px;
  object-fit: contain;
}
.pqv-thumbnails {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}
.pqv-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 7px;
  border: 2px solid transparent;
  cursor: pointer;
  background: #f5f5f5;
  transition: border 0.15s;
}
.pqv-thumbnail.selected {
  border: 2px solid #0aad0a;
}
.pqv-modal-right {
  flex: 1.2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 18px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  min-height: 0;
  padding-right: 32px;
  background: transparent;
}
.pqv-product-name {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.2em;
  color: #222;
}
.pqv-product-meta {
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.5em;
  display: flex;
  gap: 18px;
}
.pqv-brand {
  color: #444;
  font-weight: 500;
}
.pqv-product-desc {
  font-size: 1.08rem;
  color: #444;
  margin-bottom: 0.7em;
  line-height: 1.5;
}
.pqv-product-price {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0aad0a;
  display: flex;
  align-items: center;
  gap: 12px;
}
.pqv-mrp {
  font-size: 1.1rem;
  color: #b0b0b0;
  text-decoration: line-through;
  font-weight: 400;
}
.pqv-qty-row {
  display: flex;
  align-items: center;
  height: 48px;
  gap: 12px;
}
.pqv-qty-box {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  background: #fafafa;
  padding: 2px 8px;
  gap: 6px;
  height: 48px;
  min-width: 110px;
}
.pqv-qty-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  color: #0aad0a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.15s;
  box-shadow: 0 1px 2px rgba(10,173,10,0.04);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pqv-qty-btn:hover {
  background: #e6f7e6;
}
.pqv-qty-input {
  width: 40px;
  text-align: center;
  font-size: 1.1rem;
  border: none;
  background: transparent;
  outline: none;
  height: 40px;
  line-height: 40px;
}
.pqv-add-to-cart-btn {
  background: linear-gradient(90deg, #0aad0a 60%, #0a8d0a 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0 32px;
  margin-top: 0;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(10,173,10,0.10);
  transition: background 0.18s, box-shadow 0.18s, transform 0.13s;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  height: 48px;
  min-width: 160px;
}
.pqv-add-to-cart-btn:hover {
  background: linear-gradient(90deg, #0a8d0a 60%, #0aad0a 100%);
  box-shadow: 0 4px 16px rgba(10,173,10,0.08);
}
.pqv-separator {
  margin: 24px 0 16px 0;
  border: none;
  border-top: 1.5px solid #e0e0e0;
  width: 100%;
}
@media (max-width: 900px) {
  .pqv-modal-content {
    flex-direction: column;
    gap: 18px;
    padding: 28px 10px 18px 10px;
  }
  .pqv-modal-left, .pqv-modal-right {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .pqv-main-image-wrapper {
    width: 90vw;
    max-width: 340px;
    height: 240px;
  }
}
@media (max-width: 600px) {
  .pqv-modal {
    max-width: 99vw;
    padding: 0;
    border-radius: 0;
  }
  .pqv-modal-content {
    padding: 10px 2vw 10px 2vw;
  }
  .pqv-main-image-wrapper {
    width: 98vw;
    max-width: 98vw;
    height: 180px;
  }
  .pqv-product-name {
    font-size: 1.2rem;
  }
  .pqv-product-price {
    font-size: 1.1rem;
  }
  .pqv-add-to-cart-btn {
    font-size: 1rem;
    padding: 10px 10vw;
  }
} 
.pqv-qty-add-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 0;
  margin-bottom: 0;
  justify-content: flex-start;
}
@media (max-width: 700px) {
  .pqv-qty-add-row {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .pqv-qty-row, .pqv-qty-box, .pqv-add-to-cart-btn {
    height: 40px;
    min-width: unset;
    padding-left: 0;
    padding-right: 0;
  }
}
`})]})},a3=(e,t)=>15+Math.floor(Math.random()*30),ba=({products:e=[]})=>{const[t,n]=j.useState(!1),[r,s]=j.useState(null),l=Mn(),c=k=>{s(k),n(!0)},d=()=>{n(!1),s(null)},f=(k,N)=>{Ie.fire({icon:"success",title:"Added to Cart",text:`${N} x ${k.name} added to your cart!`,showConfirmButton:!0,timer:3e3}),n(!1),s(null)},m=k=>{const N=[],w=Math.floor(k),S=k%1!==0;for(let y=0;y<w;y++)N.push(o.jsx("i",{className:"fa fa-star"},`full-${y}`));S&&N.push(o.jsx("i",{className:"fa fa-star-half-o"},"half"));const _=5-w-(S?1:0);for(let y=0;y<_;y++)N.push(o.jsx("i",{className:"fa fa-star-o"},`empty-${y}`));return N},p=k=>k?vr(k)?o.jsx("span",{className:"badge bg-danger",children:"Out of Stock"}):k.discount_percentage>0?o.jsxs("span",{className:"badge bg-danger",children:[k.discount_percentage,"% OFF"]}):k.is_hot?o.jsx("span",{className:"badge bg-danger",children:"Hot"}):k.is_new?o.jsx("span",{className:"badge bg-success",children:"New"}):null:null,v=k=>(k!=null&&k.id||Math.random(),a3()),b=(k,N)=>{if(N.preventDefault(),N.stopPropagation(),!!k){if(vr(k)){Ie.fire({icon:"warning",title:"Out of Stock",text:"This product is currently out of stock.",showConfirmButton:!0,confirmButtonText:"OK"});return}c(k)}};return!e||e.length===0?o.jsxs("div",{className:"product-flex-wrap",children:[o.jsx("div",{className:"text-center w-100",children:o.jsx("p",{className:"text-muted",children:"No products available"})}),o.jsx("style",{children:`
          .product-flex-wrap {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: flex-start;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 280px;
            width: 280px;
            max-width: 280px;
            min-width: 280px;
            display: flex;
          }
          .product-flex-wrap .card-product {
            min-height: 420px;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .product-flex-wrap .card-product .card-body {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            justify-content: space-between;
          }
          @media (max-width: 1200px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 45vw;
              width: 45vw;
              max-width: 100vw;
              min-width: 220px;
            }
          }
          @media (max-width: 900px) {
            .product-flex-wrap {
              gap: 1.2rem;
            }
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 90vw;
              width: 90vw;
              max-width: 100vw;
              min-width: 180px;
            }
          }
          @media (max-width: 600px) {
            .product-flex-wrap {
              gap: 0.7rem;
            }
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 98vw;
              width: 98vw;
              max-width: 100vw;
              min-width: 140px;
            }
            .product-flex-wrap .card-product {
              min-height: 320px;
            }
          }
        `})]}):o.jsxs(o.Fragment,{children:[o.jsx(N_,{product:r,isOpen:t,onClose:d,onAddToCart:f}),o.jsxs("div",{className:"product-flex-wrap",children:[e.map(k=>o.jsx("div",{className:"col fade-zoom",children:o.jsx("div",{className:"card card-product",children:o.jsxs("div",{className:"card-body",children:[o.jsxs("div",{className:"text-center position-relative",children:[p(k)&&o.jsx("div",{className:"position-absolute top-0 start-0",children:p(k)}),o.jsx("img",{src:k.image,alt:k.name,className:"mb-3 img-fluid",style:{height:"200px",objectFit:"cover",cursor:"pointer"},onClick:()=>l(`/product/${k.id}`,{state:{product:k}}),onError:N=>{N.target.src="/assets/img/no_image.jpg"}})]}),o.jsxs("div",{className:"category-delivery-row",children:[o.jsx("span",{className:"text-muted small",children:k.category}),o.jsxs("div",{className:"delivery-time-display",children:[o.jsx("i",{className:"fa fa-clock-o",style:{marginRight:"4px",color:"#0AAD0A"}}),o.jsxs("span",{className:"delivery-time-text",children:[o.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 64 64",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[o.jsx("circle",{cx:"32",cy:"32",r:"28",stroke:"#0AAD0A",strokeWidth:"4",fill:"none"}),o.jsx("line",{x1:"32",y1:"32",x2:"32",y2:"16",stroke:"#0AAD0A",strokeWidth:"4",strokeLinecap:"round"}),o.jsx("line",{x1:"32",y1:"32",x2:"44",y2:"32",stroke:"#0AAD0A",strokeWidth:"4",strokeLinecap:"round"}),o.jsx("rect",{x:"28",y:"4",width:"8",height:"8",fill:"#0AAD0A",rx:"2"})]}),"  ",v(k)," min"]})]})]}),k.brand&&o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"text-small mb-1",children:o.jsxs("span",{className:"text-muted",children:["Brand: ",k.brand]})}),o.jsx("div",{className:"text-small mb-1",children:o.jsxs("span",{className:"text-muted",children:["SKU: ",k.sku]})})]}),o.jsx("h2",{className:"fs-6",children:o.jsx("span",{className:"text-inherit text-decoration-none",style:{cursor:"pointer"},onClick:()=>l(`/product/${k.id}`,{state:{product:k}}),children:k.name})}),o.jsxs("div",{children:[o.jsx("small",{className:"text-warning",children:m(k.rating)})," ",o.jsxs("span",{className:"text-muted small",children:[k.rating," (",k.review_count,")"]})]}),o.jsxs("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[o.jsxs("div",{children:[o.jsxs("span",{className:"text-dark",children:["₹",k.price]})," ",k.mrp&&k.mrp>k.price&&o.jsxs("span",{className:"text-decoration-line-through text-muted",children:["₹",k.mrp]})]}),o.jsx("div",{children:o.jsxs("button",{type:"button",className:"btn btn-primary btn-sm",onClick:N=>b(k,N),children:[o.jsx("i",{className:"fa fa-plus"})," ","Add"]})})]})]})})},k.id)),o.jsx("style",{children:`
          .product-flex-wrap {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
            gap: 12px;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 230px;
            width: 230px;
            max-width: 230px;
            min-width: 230px;
            display: flex;
            margin-bottom: 2rem;
          }
          .product-flex-wrap .card-product {
            min-height: 420px;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .product-flex-wrap .card-product .card-body {
            display: flex;
            flex-direction: column;
            flex: 1 1 auto;
            justify-content: space-between;
          }
          .category-delivery-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 0.5rem;
          }
          .delivery-time-display {
            background: rgba(10, 173, 10, 0.1);
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            display: flex;
            align-items: center;
          }
          .delivery-time-text {
            display: flex;
            align-items: center;
            font-size: 0.75rem;
            color: #0AAD0A;
            font-weight: 600;
          }
          @media (max-width: 1200px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 23vw;
              width: 23vw;
              max-width: 100vw;
              min-width: 160px;
            }
          }
          @media (max-width: 900px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 0 0 45vw;
              width: 45vw;
              max-width: 100vw;
              min-width: 140px;
            }
          }
          @media (max-width: 600px) {
            .product-flex-wrap .col.fade-zoom {
              flex: 1 1 100%;
              width: 100%;
              max-width: 100%;
              min-width: 0;
              box-sizing: border-box;
            }
            .product-flex-wrap {
              padding-left: 0 !important;
              padding-right: 0 !important;
            }
            .product-flex-wrap .card-product {
              min-height: 320px;
            }
            .delivery-time-text {
              font-size: 0.7rem;
            }
            .delivery-time-display {
              padding: 0.2rem 0.4rem;
            }
          }
        `}),o.jsx("style",{children:`
          .btn-action {
            background: #0aad0a !important;
            color: #fff !important;
            border-radius: 7px;
            padding: 6px 8px;
            font-size: 1.1rem;
            transition: background 0.18s;
            border: none;
            outline: none;
            box-shadow: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
          }
          .btn-action:focus, .btn-action:active, .btn-action:hover {
            background: #088a08 !important;
            color: #fff !important;
            border: none;
            outline: none;
            box-shadow: none;
          }
        `})]})]})},_a=({count:e=5})=>o.jsxs("div",{className:"product-flex-wrap",children:[Array.from({length:e}).map((t,n)=>o.jsx("div",{className:"col fade-zoom",children:o.jsx("div",{className:"card card-product shimmer-card",children:o.jsxs("div",{className:"card-body",children:[o.jsxs("div",{className:"text-center position-relative",children:[o.jsx("div",{className:"shimmer-img shimmer-bg"}),o.jsxs("div",{className:"card-product-action",style:{display:"flex",gap:8,justifyContent:"center",alignItems:"center",marginTop:8},children:[o.jsx("div",{className:"shimmer-btn shimmer-bg"}),o.jsx("div",{className:"shimmer-btn shimmer-bg"})]})]}),o.jsx("div",{className:"shimmer-line shimmer-bg",style:{width:"60%",height:12,margin:"12px 0 6px 0"}}),o.jsx("div",{className:"shimmer-line shimmer-bg",style:{width:"40%",height:12,marginBottom:6}}),o.jsx("div",{className:"shimmer-line shimmer-bg",style:{width:"80%",height:18,marginBottom:10}}),o.jsx("div",{className:"shimmer-line shimmer-bg",style:{width:"50%",height:14,marginBottom:10}}),o.jsx("div",{className:"shimmer-line shimmer-bg",style:{width:"70%",height:16,marginBottom:10}}),o.jsxs("div",{className:"d-flex justify-content-between align-items-center mt-3",children:[o.jsx("div",{className:"shimmer-line shimmer-bg",style:{width:60,height:18}}),o.jsx("div",{className:"shimmer-btn shimmer-bg",style:{width:40,height:24}})]})]})})},n)),o.jsx("style",{children:`
        .product-flex-wrap {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        .product-flex-wrap .col.fade-zoom {
          flex: 0 0 230px;
          width: 230px;
          max-width: 230px;
          min-width: 230px;
          display: flex;
          margin-bottom: 2rem;
        }
        .product-flex-wrap .card-product {
          min-height: 420px;
          height: 100%;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .product-flex-wrap .card-product .card-body {
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          justify-content: space-between;
        }
        .shimmer-bg {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
          background-size: 400% 100%;
          animation: shimmer 1.2s ease-in-out infinite;
        }
        .shimmer-img {
          width: 100%;
          height: 200px;
          border-radius: 8px;
          margin-bottom: 12px;
        }
        .shimmer-line {
          border-radius: 4px;
        }
        .shimmer-btn {
          width: 32px;
          height: 32px;
          border-radius: 7px;
          margin-right: 4px;
        }
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @media (max-width: 1200px) {
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 23vw;
            width: 23vw;
            max-width: 100vw;
            min-width: 160px;
          }
        }
        @media (max-width: 900px) {
          .product-flex-wrap .col.fade-zoom {
            flex: 0 0 45vw;
            width: 45vw;
            max-width: 100vw;
            min-width: 140px;
          }
        }
        @media (max-width: 600px) {
          .product-flex-wrap .col.fade-zoom {
            flex: 1 1 100%;
            width: 100%;
            max-width: 100%;
            min-width: 0;
            box-sizing: border-box;
          }
          .product-flex-wrap {
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .product-flex-wrap .card-product {
            min-height: 320px;
          }
          .shimmer-img {
            height: 120px;
          }
        }
      `})]}),l3=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[s,l]=j.useState(null),c=Et();return j.useEffect(()=>{(async()=>{try{r(!0),l(null);const f=await Re(pe.POPULAR_PRODUCTS);if(f.data&&f.data.best){const m=f.data.best.map(p=>{var v,b,k,N,w,S,_,y,x,E,T;return{id:p._id,name:p.productName,description:p.description,image:c((v=p.productImageUrl)==null?void 0:v[0]),price:p.sell_price||p.variants[0].sell_price,mrp:p.mrp||p.variants[0].mrp,category:((k=(b=p.category)==null?void 0:b[0])==null?void 0:k.name)||"Category",category_id:((w=(N=p.category)==null?void 0:N[0])==null?void 0:w._id)||"",brand:((S=p.brand_Name)==null?void 0:S.name)||"Brand",brandId:((_=p.brand_Name)==null?void 0:_._id)||"",unit:((y=p.unit)==null?void 0:y.name)||"",tax:p.tax,rating:4.5,review_count:0,discount_percentage:((E=(x=p.variants)==null?void 0:x[0])==null?void 0:E.discountValue)||0,is_hot:p.feature_product||!1,is_new:!1,sku:p.sku,status:p.status,productImageUrl:p.productImageUrl,inCart:((T=p.inCart)==null?void 0:T.status)||!1,variants:p.variants||[],inventory:p.inventory||[],isVeg:p.isVeg}});t(m)}else l("Failed to fetch popular products")}catch(f){l(f.message||"Failed to fetch popular products")}finally{r(!1)}})()},[]),n?o.jsx("section",{className:"my-lg-14 my-8",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Popular Products",children:"Popular Products"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 text-center",children:o.jsx(_a,{count:10})})})]})}):s?o.jsx("section",{className:"my-lg-14 my-8",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Popular Products",children:"Popular Products"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 text-center",children:o.jsxs("div",{className:"alert alert-warning",role:"alert",children:[o.jsx("i",{className:"fa fa-exclamation-triangle me-2"}),s]})})})]})}):o.jsx("div",{children:o.jsx("section",{className:"my-lg-14 my-8",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Popular Products",children:"Popular Products"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsx(ba,{products:e})]})})})};function c3(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function u3(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var d3=function(){function e(n){var r=this;this._insertTag=function(s){var l;r.tags.length===0?r.insertionPoint?l=r.insertionPoint.nextSibling:r.prepend?l=r.container.firstChild:l=r.before:l=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(s,l),r.tags.push(s)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(u3(this));var s=this.tags[this.tags.length-1];if(this.isSpeedy){var l=c3(s);try{l.insertRule(r,l.cssRules.length)}catch{}}else s.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){var s;return(s=r.parentNode)==null?void 0:s.removeChild(r)}),this.tags=[],this.ctr=0},e}(),kt="-ms-",Sc="-moz-",Ce="-webkit-",C_="comm",xp="rule",wp="decl",f3="@import",P_="@keyframes",h3="@layer",m3=Math.abs,pu=String.fromCharCode,p3=Object.assign;function g3(e,t){return xt(e,0)^45?(((t<<2^xt(e,0))<<2^xt(e,1))<<2^xt(e,2))<<2^xt(e,3):0}function E_(e){return e.trim()}function v3(e,t){return(e=t.exec(e))?e[0]:e}function Pe(e,t,n){return e.replace(t,n)}function Oh(e,t){return e.indexOf(t)}function xt(e,t){return e.charCodeAt(t)|0}function ea(e,t,n){return e.slice(t,n)}function Gn(e){return e.length}function bp(e){return e.length}function cl(e,t){return t.push(e),e}function y3(e,t){return e.map(t).join("")}var gu=1,bs=1,T_=0,Qt=0,rt=0,Ws="";function vu(e,t,n,r,s,l,c){return{value:e,root:t,parent:n,type:r,props:s,children:l,line:gu,column:bs,length:c,return:""}}function vo(e,t){return p3(vu("",null,null,"",null,null,0),e,{length:-e.length},t)}function x3(){return rt}function w3(){return rt=Qt>0?xt(Ws,--Qt):0,bs--,rt===10&&(bs=1,gu--),rt}function rn(){return rt=Qt<T_?xt(Ws,Qt++):0,bs++,rt===10&&(bs=1,gu++),rt}function er(){return xt(Ws,Qt)}function Ll(){return Qt}function Sa(e,t){return ea(Ws,e,t)}function ta(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function L_(e){return gu=bs=1,T_=Gn(Ws=e),Qt=0,[]}function O_(e){return Ws="",e}function Ol(e){return E_(Sa(Qt-1,Ah(e===91?e+2:e===40?e+1:e)))}function b3(e){for(;(rt=er())&&rt<33;)rn();return ta(e)>2||ta(rt)>3?"":" "}function _3(e,t){for(;--t&&rn()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return Sa(e,Ll()+(t<6&&er()==32&&rn()==32))}function Ah(e){for(;rn();)switch(rt){case e:return Qt;case 34:case 39:e!==34&&e!==39&&Ah(rt);break;case 40:e===41&&Ah(e);break;case 92:rn();break}return Qt}function S3(e,t){for(;rn()&&e+rt!==57;)if(e+rt===84&&er()===47)break;return"/*"+Sa(t,Qt-1)+"*"+pu(e===47?e:rn())}function k3(e){for(;!ta(er());)rn();return Sa(e,Qt)}function j3(e){return O_(Al("",null,null,null,[""],e=L_(e),0,[0],e))}function Al(e,t,n,r,s,l,c,d,f){for(var m=0,p=0,v=c,b=0,k=0,N=0,w=1,S=1,_=1,y=0,x="",E=s,T=l,O=r,I=x;S;)switch(N=y,y=rn()){case 40:if(N!=108&&xt(I,v-1)==58){Oh(I+=Pe(Ol(y),"&","&\f"),"&\f")!=-1&&(_=-1);break}case 34:case 39:case 91:I+=Ol(y);break;case 9:case 10:case 13:case 32:I+=b3(N);break;case 92:I+=_3(Ll()-1,7);continue;case 47:switch(er()){case 42:case 47:cl(N3(S3(rn(),Ll()),t,n),f);break;default:I+="/"}break;case 123*w:d[m++]=Gn(I)*_;case 125*w:case 59:case 0:switch(y){case 0:case 125:S=0;case 59+p:_==-1&&(I=Pe(I,/\f/g,"")),k>0&&Gn(I)-v&&cl(k>32?Dv(I+";",r,n,v-1):Dv(Pe(I," ","")+";",r,n,v-2),f);break;case 59:I+=";";default:if(cl(O=$v(I,t,n,m,p,s,d,x,E=[],T=[],v),l),y===123)if(p===0)Al(I,t,O,O,E,l,v,d,T);else switch(b===99&&xt(I,3)===110?100:b){case 100:case 108:case 109:case 115:Al(e,O,O,r&&cl($v(e,O,O,0,0,s,d,x,s,E=[],v),T),s,T,v,d,r?E:T);break;default:Al(I,O,O,O,[""],T,0,d,T)}}m=p=k=0,w=_=1,x=I="",v=c;break;case 58:v=1+Gn(I),k=N;default:if(w<1){if(y==123)--w;else if(y==125&&w++==0&&w3()==125)continue}switch(I+=pu(y),y*w){case 38:_=p>0?1:(I+="\f",-1);break;case 44:d[m++]=(Gn(I)-1)*_,_=1;break;case 64:er()===45&&(I+=Ol(rn())),b=er(),p=v=Gn(x=I+=k3(Ll())),y++;break;case 45:N===45&&Gn(I)==2&&(w=0)}}return l}function $v(e,t,n,r,s,l,c,d,f,m,p){for(var v=s-1,b=s===0?l:[""],k=bp(b),N=0,w=0,S=0;N<r;++N)for(var _=0,y=ea(e,v+1,v=m3(w=c[N])),x=e;_<k;++_)(x=E_(w>0?b[_]+" "+y:Pe(y,/&\f/g,b[_])))&&(f[S++]=x);return vu(e,t,n,s===0?xp:d,f,m,p)}function N3(e,t,n){return vu(e,t,n,C_,pu(x3()),ea(e,2,-2),0)}function Dv(e,t,n,r){return vu(e,t,n,wp,ea(e,0,r),ea(e,r+1,-1),r)}function cs(e,t){for(var n="",r=bp(e),s=0;s<r;s++)n+=t(e[s],s,e,t)||"";return n}function C3(e,t,n,r){switch(e.type){case h3:if(e.children.length)break;case f3:case wp:return e.return=e.return||e.value;case C_:return"";case P_:return e.return=e.value+"{"+cs(e.children,r)+"}";case xp:e.value=e.props.join(",")}return Gn(n=cs(e.children,r))?e.return=e.value+"{"+n+"}":""}function P3(e){var t=bp(e);return function(n,r,s,l){for(var c="",d=0;d<t;d++)c+=e[d](n,r,s,l)||"";return c}}function E3(e){return function(t){t.root||(t=t.return)&&e(t)}}function T3(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var L3=function(t,n,r){for(var s=0,l=0;s=l,l=er(),s===38&&l===12&&(n[r]=1),!ta(l);)rn();return Sa(t,Qt)},O3=function(t,n){var r=-1,s=44;do switch(ta(s)){case 0:s===38&&er()===12&&(n[r]=1),t[r]+=L3(Qt-1,n,r);break;case 2:t[r]+=Ol(s);break;case 4:if(s===44){t[++r]=er()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=pu(s)}while(s=rn());return t},A3=function(t,n){return O_(O3(L_(t),n))},Bv=new WeakMap,I3=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,s=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!Bv.get(r))&&!s){Bv.set(t,!0);for(var l=[],c=A3(n,l),d=r.props,f=0,m=0;f<c.length;f++)for(var p=0;p<d.length;p++,m++)t.props[m]=l[f]?c[f].replace(/&\f/g,d[p]):d[p]+" "+c[f]}}},R3=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function A_(e,t){switch(g3(e,t)){case 5103:return Ce+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Ce+e+Sc+e+kt+e+e;case 6828:case 4268:return Ce+e+kt+e+e;case 6165:return Ce+e+kt+"flex-"+e+e;case 5187:return Ce+e+Pe(e,/(\w+).+(:[^]+)/,Ce+"box-$1$2"+kt+"flex-$1$2")+e;case 5443:return Ce+e+kt+"flex-item-"+Pe(e,/flex-|-self/,"")+e;case 4675:return Ce+e+kt+"flex-line-pack"+Pe(e,/align-content|flex-|-self/,"")+e;case 5548:return Ce+e+kt+Pe(e,"shrink","negative")+e;case 5292:return Ce+e+kt+Pe(e,"basis","preferred-size")+e;case 6060:return Ce+"box-"+Pe(e,"-grow","")+Ce+e+kt+Pe(e,"grow","positive")+e;case 4554:return Ce+Pe(e,/([^-])(transform)/g,"$1"+Ce+"$2")+e;case 6187:return Pe(Pe(Pe(e,/(zoom-|grab)/,Ce+"$1"),/(image-set)/,Ce+"$1"),e,"")+e;case 5495:case 3959:return Pe(e,/(image-set\([^]*)/,Ce+"$1$`$1");case 4968:return Pe(Pe(e,/(.+:)(flex-)?(.*)/,Ce+"box-pack:$3"+kt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Ce+e+e;case 4095:case 3583:case 4068:case 2532:return Pe(e,/(.+)-inline(.+)/,Ce+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Gn(e)-1-t>6)switch(xt(e,t+1)){case 109:if(xt(e,t+4)!==45)break;case 102:return Pe(e,/(.+:)(.+)-([^]+)/,"$1"+Ce+"$2-$3$1"+Sc+(xt(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Oh(e,"stretch")?A_(Pe(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(xt(e,t+1)!==115)break;case 6444:switch(xt(e,Gn(e)-3-(~Oh(e,"!important")&&10))){case 107:return Pe(e,":",":"+Ce)+e;case 101:return Pe(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+Ce+(xt(e,14)===45?"inline-":"")+"box$3$1"+Ce+"$2$3$1"+kt+"$2box$3")+e}break;case 5936:switch(xt(e,t+11)){case 114:return Ce+e+kt+Pe(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Ce+e+kt+Pe(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Ce+e+kt+Pe(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return Ce+e+kt+e+e}return e}var z3=function(t,n,r,s){if(t.length>-1&&!t.return)switch(t.type){case wp:t.return=A_(t.value,t.length);break;case P_:return cs([vo(t,{value:Pe(t.value,"@","@"+Ce)})],s);case xp:if(t.length)return y3(t.props,function(l){switch(v3(l,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return cs([vo(t,{props:[Pe(l,/:(read-\w+)/,":"+Sc+"$1")]})],s);case"::placeholder":return cs([vo(t,{props:[Pe(l,/:(plac\w+)/,":"+Ce+"input-$1")]}),vo(t,{props:[Pe(l,/:(plac\w+)/,":"+Sc+"$1")]}),vo(t,{props:[Pe(l,/:(plac\w+)/,kt+"input-$1")]})],s)}return""})}},M3=[z3],$3=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(w){var S=w.getAttribute("data-emotion");S.indexOf(" ")!==-1&&(document.head.appendChild(w),w.setAttribute("data-s",""))})}var s=t.stylisPlugins||M3,l={},c,d=[];c=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(w){for(var S=w.getAttribute("data-emotion").split(" "),_=1;_<S.length;_++)l[S[_]]=!0;d.push(w)});var f,m=[I3,R3];{var p,v=[C3,E3(function(w){p.insert(w)})],b=P3(m.concat(s,v)),k=function(S){return cs(j3(S),b)};f=function(S,_,y,x){p=y,k(S?S+"{"+_.styles+"}":_.styles),x&&(N.inserted[_.name]=!0)}}var N={key:n,sheet:new d3({key:n,container:c,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:l,registered:{},insert:f};return N.sheet.hydrate(d),N},I_={exports:{}},Oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gt=typeof Symbol=="function"&&Symbol.for,_p=gt?Symbol.for("react.element"):60103,Sp=gt?Symbol.for("react.portal"):60106,yu=gt?Symbol.for("react.fragment"):60107,xu=gt?Symbol.for("react.strict_mode"):60108,wu=gt?Symbol.for("react.profiler"):60114,bu=gt?Symbol.for("react.provider"):60109,_u=gt?Symbol.for("react.context"):60110,kp=gt?Symbol.for("react.async_mode"):60111,Su=gt?Symbol.for("react.concurrent_mode"):60111,ku=gt?Symbol.for("react.forward_ref"):60112,ju=gt?Symbol.for("react.suspense"):60113,D3=gt?Symbol.for("react.suspense_list"):60120,Nu=gt?Symbol.for("react.memo"):60115,Cu=gt?Symbol.for("react.lazy"):60116,B3=gt?Symbol.for("react.block"):60121,F3=gt?Symbol.for("react.fundamental"):60117,U3=gt?Symbol.for("react.responder"):60118,H3=gt?Symbol.for("react.scope"):60119;function dn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case _p:switch(e=e.type,e){case kp:case Su:case yu:case wu:case xu:case ju:return e;default:switch(e=e&&e.$$typeof,e){case _u:case ku:case Cu:case Nu:case bu:return e;default:return t}}case Sp:return t}}}function R_(e){return dn(e)===Su}Oe.AsyncMode=kp;Oe.ConcurrentMode=Su;Oe.ContextConsumer=_u;Oe.ContextProvider=bu;Oe.Element=_p;Oe.ForwardRef=ku;Oe.Fragment=yu;Oe.Lazy=Cu;Oe.Memo=Nu;Oe.Portal=Sp;Oe.Profiler=wu;Oe.StrictMode=xu;Oe.Suspense=ju;Oe.isAsyncMode=function(e){return R_(e)||dn(e)===kp};Oe.isConcurrentMode=R_;Oe.isContextConsumer=function(e){return dn(e)===_u};Oe.isContextProvider=function(e){return dn(e)===bu};Oe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===_p};Oe.isForwardRef=function(e){return dn(e)===ku};Oe.isFragment=function(e){return dn(e)===yu};Oe.isLazy=function(e){return dn(e)===Cu};Oe.isMemo=function(e){return dn(e)===Nu};Oe.isPortal=function(e){return dn(e)===Sp};Oe.isProfiler=function(e){return dn(e)===wu};Oe.isStrictMode=function(e){return dn(e)===xu};Oe.isSuspense=function(e){return dn(e)===ju};Oe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===yu||e===Su||e===wu||e===xu||e===ju||e===D3||typeof e=="object"&&e!==null&&(e.$$typeof===Cu||e.$$typeof===Nu||e.$$typeof===bu||e.$$typeof===_u||e.$$typeof===ku||e.$$typeof===F3||e.$$typeof===U3||e.$$typeof===H3||e.$$typeof===B3)};Oe.typeOf=dn;I_.exports=Oe;var q3=I_.exports,z_=q3,W3={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Z3={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},M_={};M_[z_.ForwardRef]=W3;M_[z_.Memo]=Z3;var V3=!0;function $_(e,t,n){var r="";return n.split(" ").forEach(function(s){e[s]!==void 0?t.push(e[s]+";"):s&&(r+=s+" ")}),r}var jp=function(t,n,r){var s=t.key+"-"+n.name;(r===!1||V3===!1)&&t.registered[s]===void 0&&(t.registered[s]=n.styles)},D_=function(t,n,r){jp(t,n,r);var s=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var l=n;do t.insert(n===l?"."+s:"",l,t.sheet,!0),l=l.next;while(l!==void 0)}};function G3(e){for(var t=0,n,r=0,s=e.length;s>=4;++r,s-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(s){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var Y3={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},K3=/[A-Z]|^ms/g,X3=/_EMO_([^_]+?)_([^]*?)_EMO_/g,B_=function(t){return t.charCodeAt(1)===45},Fv=function(t){return t!=null&&typeof t!="boolean"},cf=T3(function(e){return B_(e)?e:e.replace(K3,"-$&").toLowerCase()}),Uv=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(X3,function(r,s,l){return Yn={name:s,styles:l,next:Yn},s})}return Y3[t]!==1&&!B_(t)&&typeof n=="number"&&n!==0?n+"px":n};function na(e,t,n){if(n==null)return"";var r=n;if(r.__emotion_styles!==void 0)return r;switch(typeof n){case"boolean":return"";case"object":{var s=n;if(s.anim===1)return Yn={name:s.name,styles:s.styles,next:Yn},s.name;var l=n;if(l.styles!==void 0){var c=l.next;if(c!==void 0)for(;c!==void 0;)Yn={name:c.name,styles:c.styles,next:Yn},c=c.next;var d=l.styles+";";return d}return Q3(e,t,n)}case"function":{if(e!==void 0){var f=Yn,m=n(e);return Yn=f,na(e,t,m)}break}}var p=n;if(t==null)return p;var v=t[p];return v!==void 0?v:p}function Q3(e,t,n){var r="";if(Array.isArray(n))for(var s=0;s<n.length;s++)r+=na(e,t,n[s])+";";else for(var l in n){var c=n[l];if(typeof c!="object"){var d=c;t!=null&&t[d]!==void 0?r+=l+"{"+t[d]+"}":Fv(d)&&(r+=cf(l)+":"+Uv(l,d)+";")}else if(Array.isArray(c)&&typeof c[0]=="string"&&(t==null||t[c[0]]===void 0))for(var f=0;f<c.length;f++)Fv(c[f])&&(r+=cf(l)+":"+Uv(l,c[f])+";");else{var m=na(e,t,c);switch(l){case"animation":case"animationName":{r+=cf(l)+":"+m+";";break}default:r+=l+"{"+m+"}"}}}return r}var Hv=/label:\s*([^\s;{]+)\s*(;|$)/g,Yn;function Np(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var r=!0,s="";Yn=void 0;var l=e[0];if(l==null||l.raw===void 0)r=!1,s+=na(n,t,l);else{var c=l;s+=c[0]}for(var d=1;d<e.length;d++)if(s+=na(n,t,e[d]),r){var f=l;s+=f[d]}Hv.lastIndex=0;for(var m="",p;(p=Hv.exec(s))!==null;)m+="-"+p[1];var v=G3(s)+m;return{name:v,styles:s,next:Yn}}var J3=function(t){return t()},eL=jf.useInsertionEffect?jf.useInsertionEffect:!1,F_=eL||J3,U_=j.createContext(typeof HTMLElement<"u"?$3({key:"css"}):null);U_.Provider;var H_=function(t){return j.forwardRef(function(n,r){var s=j.useContext(U_);return t(n,s,r)})},q_=j.createContext({}),Pu={}.hasOwnProperty,Ih="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",W_=function(t,n){var r={};for(var s in n)Pu.call(n,s)&&(r[s]=n[s]);return r[Ih]=t,r},tL=function(t){var n=t.cache,r=t.serialized,s=t.isStringTag;return jp(n,r,s),F_(function(){return D_(n,r,s)}),null},nL=H_(function(e,t,n){var r=e.css;typeof r=="string"&&t.registered[r]!==void 0&&(r=t.registered[r]);var s=e[Ih],l=[r],c="";typeof e.className=="string"?c=$_(t.registered,l,e.className):e.className!=null&&(c=e.className+" ");var d=Np(l,void 0,j.useContext(q_));c+=t.key+"-"+d.name;var f={};for(var m in e)Pu.call(e,m)&&m!=="css"&&m!==Ih&&(f[m]=e[m]);return f.className=c,n&&(f.ref=n),j.createElement(j.Fragment,null,j.createElement(tL,{cache:t,serialized:d,isStringTag:typeof s=="string"}),j.createElement(s,f))}),Z_=nL,rL=o.Fragment,lt=function(t,n,r){return Pu.call(n,"css")?o.jsx(Z_,W_(t,n),r):o.jsx(t,n,r)},qv=function(t,n){var r=arguments;if(n==null||!Pu.call(n,"css"))return j.createElement.apply(void 0,r);var s=r.length,l=new Array(s);l[0]=Z_,l[1]=W_(t,n);for(var c=2;c<s;c++)l[c]=r[c];return j.createElement.apply(null,l)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(qv||(qv={}));function V_(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Np(t)}function J(){var e=V_.apply(void 0,arguments),t="animation-"+e.name;return{name:t,styles:"@keyframes "+t+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}}var iL=function e(t){for(var n=t.length,r=0,s="";r<n;r++){var l=t[r];if(l!=null){var c=void 0;switch(typeof l){case"boolean":break;case"object":{if(Array.isArray(l))c=e(l);else{c="";for(var d in l)l[d]&&d&&(c&&(c+=" "),c+=d)}break}default:c=l}c&&(s&&(s+=" "),s+=c)}}return s};function sL(e,t,n){var r=[],s=$_(e,r,n);return r.length<2?n:s+t(r)}var oL=function(t){var n=t.cache,r=t.serializedArr;return F_(function(){for(var s=0;s<r.length;s++)D_(n,r[s],!1)}),null},uf=H_(function(e,t){var n=[],r=function(){for(var f=arguments.length,m=new Array(f),p=0;p<f;p++)m[p]=arguments[p];var v=Np(m,t.registered);return n.push(v),jp(t,v,!1),t.key+"-"+v.name},s=function(){for(var f=arguments.length,m=new Array(f),p=0;p<f;p++)m[p]=arguments[p];return sL(t.registered,r,iL(m))},l={css:r,cx:s,theme:j.useContext(q_)},c=e.children(l);return j.createElement(j.Fragment,null,j.createElement(oL,{cache:t,serializedArr:n}),c)}),aL=Object.defineProperty,lL=(e,t,n)=>t in e?aL(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ul=(e,t,n)=>lL(e,typeof t!="symbol"?t+"":t,n),Rh=new Map,dl=new WeakMap,Wv=0,cL=void 0;function uL(e){return e?(dl.has(e)||(Wv+=1,dl.set(e,Wv.toString())),dl.get(e)):"0"}function dL(e){return Object.keys(e).sort().filter(t=>e[t]!==void 0).map(t=>`${t}_${t==="root"?uL(e.root):e[t]}`).toString()}function fL(e){const t=dL(e);let n=Rh.get(t);if(!n){const r=new Map;let s;const l=new IntersectionObserver(c=>{c.forEach(d=>{var f;const m=d.isIntersecting&&s.some(p=>d.intersectionRatio>=p);e.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=m),(f=r.get(d.target))==null||f.forEach(p=>{p(m,d)})})},e);s=l.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),n={id:t,observer:l,elements:r},Rh.set(t,n)}return n}function G_(e,t,n={},r=cL){if(typeof window.IntersectionObserver>"u"&&r!==void 0){const f=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:typeof n.threshold=="number"?n.threshold:0,time:0,boundingClientRect:f,intersectionRect:f,rootBounds:f}),()=>{}}const{id:s,observer:l,elements:c}=fL(n),d=c.get(e)||[];return c.has(e)||c.set(e,d),d.push(t),l.observe(e),function(){d.splice(d.indexOf(t),1),d.length===0&&(c.delete(e),l.unobserve(e)),c.size===0&&(l.disconnect(),Rh.delete(s))}}function hL(e){return typeof e.children!="function"}var Zv=class extends j.Component{constructor(e){super(e),ul(this,"node",null),ul(this,"_unobserveCb",null),ul(this,"handleNode",t=>{this.node&&(this.unobserve(),!t&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=t||null,this.observeNode()}),ul(this,"handleChange",(t,n)=>{t&&this.props.triggerOnce&&this.unobserve(),hL(this.props)||this.setState({inView:t,entry:n}),this.props.onChange&&this.props.onChange(t,n)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:s,fallbackInView:l}=this.props;this._unobserveCb=G_(this.node,this.handleChange,{threshold:e,root:t,rootMargin:n,trackVisibility:r,delay:s},l)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:k,entry:N}=this.state;return e({inView:k,entry:N,ref:this.handleNode})}const{as:t,triggerOnce:n,threshold:r,root:s,rootMargin:l,onChange:c,skip:d,trackVisibility:f,delay:m,initialInView:p,fallbackInView:v,...b}=this.props;return j.createElement(t||"div",{ref:this.handleNode,...b},e)}};function Y_({threshold:e,delay:t,trackVisibility:n,rootMargin:r,root:s,triggerOnce:l,skip:c,initialInView:d,fallbackInView:f,onChange:m}={}){var p;const[v,b]=j.useState(null),k=j.useRef(m),[N,w]=j.useState({inView:!!d,entry:void 0});k.current=m,j.useEffect(()=>{if(c||!v)return;let x;return x=G_(v,(E,T)=>{w({inView:E,entry:T}),k.current&&k.current(E,T),T.isIntersecting&&l&&x&&(x(),x=void 0)},{root:s,rootMargin:r,threshold:e,trackVisibility:n,delay:t},f),()=>{x&&x()}},[Array.isArray(e)?e.toString():e,v,s,r,l,c,n,f,t]);const S=(p=N.entry)==null?void 0:p.target,_=j.useRef(void 0);!v&&S&&!l&&!c&&_.current!==S&&(_.current=S,w({inView:!!d,entry:void 0}));const y=[b,N.inView,N.entry];return y.ref=y[0],y.inView=y[1],y.entry=y[2],y}var K_={exports:{}},Ae={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp=Symbol.for("react.element"),Pp=Symbol.for("react.portal"),Eu=Symbol.for("react.fragment"),Tu=Symbol.for("react.strict_mode"),Lu=Symbol.for("react.profiler"),Ou=Symbol.for("react.provider"),Au=Symbol.for("react.context"),mL=Symbol.for("react.server_context"),Iu=Symbol.for("react.forward_ref"),Ru=Symbol.for("react.suspense"),zu=Symbol.for("react.suspense_list"),Mu=Symbol.for("react.memo"),$u=Symbol.for("react.lazy"),pL=Symbol.for("react.offscreen"),X_;X_=Symbol.for("react.module.reference");function jn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Cp:switch(e=e.type,e){case Eu:case Lu:case Tu:case Ru:case zu:return e;default:switch(e=e&&e.$$typeof,e){case mL:case Au:case Iu:case $u:case Mu:case Ou:return e;default:return t}}case Pp:return t}}}Ae.ContextConsumer=Au;Ae.ContextProvider=Ou;Ae.Element=Cp;Ae.ForwardRef=Iu;Ae.Fragment=Eu;Ae.Lazy=$u;Ae.Memo=Mu;Ae.Portal=Pp;Ae.Profiler=Lu;Ae.StrictMode=Tu;Ae.Suspense=Ru;Ae.SuspenseList=zu;Ae.isAsyncMode=function(){return!1};Ae.isConcurrentMode=function(){return!1};Ae.isContextConsumer=function(e){return jn(e)===Au};Ae.isContextProvider=function(e){return jn(e)===Ou};Ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Cp};Ae.isForwardRef=function(e){return jn(e)===Iu};Ae.isFragment=function(e){return jn(e)===Eu};Ae.isLazy=function(e){return jn(e)===$u};Ae.isMemo=function(e){return jn(e)===Mu};Ae.isPortal=function(e){return jn(e)===Pp};Ae.isProfiler=function(e){return jn(e)===Lu};Ae.isStrictMode=function(e){return jn(e)===Tu};Ae.isSuspense=function(e){return jn(e)===Ru};Ae.isSuspenseList=function(e){return jn(e)===zu};Ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Eu||e===Lu||e===Tu||e===Ru||e===zu||e===pL||typeof e=="object"&&e!==null&&(e.$$typeof===$u||e.$$typeof===Mu||e.$$typeof===Ou||e.$$typeof===Au||e.$$typeof===Iu||e.$$typeof===X_||e.getModuleId!==void 0)};Ae.typeOf=jn;K_.exports=Ae;var gL=K_.exports;J`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;J`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;J`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;J`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;J`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;J`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;J`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;J`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;J`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;J`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;J`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;J`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;J`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;const Q_=J`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function vL({duration:e=1e3,delay:t=0,timingFunction:n="ease",keyframes:r=Q_,iterationCount:s=1}){return V_`
    animation-duration: ${e}ms;
    animation-timing-function: ${n};
    animation-delay: ${t}ms;
    animation-name: ${r};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${s};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function yL(e){return e==null}function xL(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function J_(e,t){return n=>n?e():t()}function ra(e){return J_(e,()=>null)}function zh(e){return ra(()=>({opacity:0}))(e)}const Ep=e=>{const{cascade:t=!1,damping:n=.5,delay:r=0,duration:s=1e3,fraction:l=0,keyframes:c=Q_,triggerOnce:d=!1,className:f,style:m,childClassName:p,childStyle:v,children:b,onVisibilityChange:k}=e,N=j.useMemo(()=>vL({keyframes:c,duration:s}),[s,c]);return yL(b)?null:xL(b)?lt(bL,{...e,animationStyles:N,children:String(b)}):gL.isFragment(b)?lt(e1,{...e,animationStyles:N}):lt(rL,{children:j.Children.map(b,(w,S)=>{if(!j.isValidElement(w))return null;const _=r+(t?S*s*n:0);switch(w.type){case"ol":case"ul":return lt(uf,{children:({cx:y})=>lt(w.type,{...w.props,className:y(f,w.props.className),style:Object.assign({},m,w.props.style),children:lt(Ep,{...e,children:w.props.children})})});case"li":return lt(Zv,{threshold:l,triggerOnce:d,onChange:k,children:({inView:y,ref:x})=>lt(uf,{children:({cx:E})=>lt(w.type,{...w.props,ref:x,className:E(p,w.props.className),css:ra(()=>N)(y),style:Object.assign({},v,w.props.style,zh(!y),{animationDelay:_+"ms"})})})});default:return lt(Zv,{threshold:l,triggerOnce:d,onChange:k,children:({inView:y,ref:x})=>lt("div",{ref:x,className:f,css:ra(()=>N)(y),style:Object.assign({},m,zh(!y),{animationDelay:_+"ms"}),children:lt(uf,{children:({cx:E})=>lt(w.type,{...w.props,className:E(p,w.props.className),style:Object.assign({},v,w.props.style)})})})})}})})},wL={display:"inline-block",whiteSpace:"pre"},bL=e=>{const{animationStyles:t,cascade:n=!1,damping:r=.5,delay:s=0,duration:l=1e3,fraction:c=0,triggerOnce:d=!1,className:f,style:m,children:p,onVisibilityChange:v}=e,{ref:b,inView:k}=Y_({triggerOnce:d,threshold:c,onChange:v});return J_(()=>lt("div",{ref:b,className:f,style:Object.assign({},m,wL),children:p.split("").map((N,w)=>lt("span",{css:ra(()=>t)(k),style:{animationDelay:s+w*l*r+"ms"},children:N},w))}),()=>lt(e1,{...e,children:p}))(n)},e1=e=>{const{animationStyles:t,fraction:n=0,triggerOnce:r=!1,className:s,style:l,children:c,onVisibilityChange:d}=e,{ref:f,inView:m}=Y_({triggerOnce:r,threshold:n,onChange:d});return lt("div",{ref:f,className:s,css:ra(()=>t)(m),style:Object.assign({},l,zh(!m)),children:c})};J`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;J`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;J`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;J`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;J`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;J`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;J`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;J`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;J`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;J`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;J`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`;J`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`;J`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`;J`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;J`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;J`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;J`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;J`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;J`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;J`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;J`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;J`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;J`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;J`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;J`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;J`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;J`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;J`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;const _L=J`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,SL=J`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,kL=J`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,jL=J`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,NL=J`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,CL=J`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,PL=J`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,EL=J`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function TL(e,t){switch(t){case"down":return e?NL:_L;case"right":return e?PL:kL;case"up":return e?EL:jL;case"left":default:return e?CL:SL}}const Il=e=>{const{direction:t,reverse:n=!1,...r}=e,s=j.useMemo(()=>TL(n,t),[t,n]);return lt(Ep,{keyframes:s,...r})},LL=J`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,OL=J`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,AL=J`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,IL=J`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,RL=J`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zL=J`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,ML=J`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,$L=J`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,DL=J`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,BL=J`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function FL(e,t){switch(t){case"down":return e?ML:OL;case"left":return e?$L:AL;case"right":return e?DL:IL;case"up":return e?BL:RL;default:return e?zL:LL}}const UL=e=>{const{direction:t,reverse:n=!1,...r}=e,s=j.useMemo(()=>FL(n,t),[t,n]);return lt(Ep,{keyframes:s,...r})};var Wt=function(){return Wt=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t},Wt.apply(this,arguments)};function ia(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,l;r<s;r++)(l||!(r in t))&&(l||(l=Array.prototype.slice.call(t,0,r)),l[r]=t[r]);return e.concat(l||Array.prototype.slice.call(t))}var Be="-ms-",Ao="-moz-",Te="-webkit-",t1="comm",Du="rule",Tp="decl",HL="@import",n1="@keyframes",qL="@layer",r1=Math.abs,Lp=String.fromCharCode,Mh=Object.assign;function WL(e,t){return ht(e,0)^45?(((t<<2^ht(e,0))<<2^ht(e,1))<<2^ht(e,2))<<2^ht(e,3):0}function i1(e){return e.trim()}function ar(e,t){return(e=t.exec(e))?e[0]:e}function ve(e,t,n){return e.replace(t,n)}function Rl(e,t,n){return e.indexOf(t,n)}function ht(e,t){return e.charCodeAt(t)|0}function _s(e,t,n){return e.slice(t,n)}function Kn(e){return e.length}function s1(e){return e.length}function So(e,t){return t.push(e),e}function ZL(e,t){return e.map(t).join("")}function Vv(e,t){return e.filter(function(n){return!ar(n,t)})}var Bu=1,Ss=1,o1=0,kn=0,it=0,Zs="";function Fu(e,t,n,r,s,l,c,d){return{value:e,root:t,parent:n,type:r,props:s,children:l,line:Bu,column:Ss,length:c,return:"",siblings:d}}function Sr(e,t){return Mh(Fu("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Fi(e){for(;e.root;)e=Sr(e.root,{children:[e]});So(e,e.siblings)}function VL(){return it}function GL(){return it=kn>0?ht(Zs,--kn):0,Ss--,it===10&&(Ss=1,Bu--),it}function Rn(){return it=kn<o1?ht(Zs,kn++):0,Ss++,it===10&&(Ss=1,Bu++),it}function mi(){return ht(Zs,kn)}function zl(){return kn}function Uu(e,t){return _s(Zs,e,t)}function $h(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function YL(e){return Bu=Ss=1,o1=Kn(Zs=e),kn=0,[]}function KL(e){return Zs="",e}function df(e){return i1(Uu(kn-1,Dh(e===91?e+2:e===40?e+1:e)))}function XL(e){for(;(it=mi())&&it<33;)Rn();return $h(e)>2||$h(it)>3?"":" "}function QL(e,t){for(;--t&&Rn()&&!(it<48||it>102||it>57&&it<65||it>70&&it<97););return Uu(e,zl()+(t<6&&mi()==32&&Rn()==32))}function Dh(e){for(;Rn();)switch(it){case e:return kn;case 34:case 39:e!==34&&e!==39&&Dh(it);break;case 40:e===41&&Dh(e);break;case 92:Rn();break}return kn}function JL(e,t){for(;Rn()&&e+it!==57;)if(e+it===84&&mi()===47)break;return"/*"+Uu(t,kn-1)+"*"+Lp(e===47?e:Rn())}function eO(e){for(;!$h(mi());)Rn();return Uu(e,kn)}function tO(e){return KL(Ml("",null,null,null,[""],e=YL(e),0,[0],e))}function Ml(e,t,n,r,s,l,c,d,f){for(var m=0,p=0,v=c,b=0,k=0,N=0,w=1,S=1,_=1,y=0,x="",E=s,T=l,O=r,I=x;S;)switch(N=y,y=Rn()){case 40:if(N!=108&&ht(I,v-1)==58){Rl(I+=ve(df(y),"&","&\f"),"&\f",r1(m?d[m-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:I+=df(y);break;case 9:case 10:case 13:case 32:I+=XL(N);break;case 92:I+=QL(zl()-1,7);continue;case 47:switch(mi()){case 42:case 47:So(nO(JL(Rn(),zl()),t,n,f),f);break;default:I+="/"}break;case 123*w:d[m++]=Kn(I)*_;case 125*w:case 59:case 0:switch(y){case 0:case 125:S=0;case 59+p:_==-1&&(I=ve(I,/\f/g,"")),k>0&&Kn(I)-v&&So(k>32?Yv(I+";",r,n,v-1,f):Yv(ve(I," ","")+";",r,n,v-2,f),f);break;case 59:I+=";";default:if(So(O=Gv(I,t,n,m,p,s,d,x,E=[],T=[],v,l),l),y===123)if(p===0)Ml(I,t,O,O,E,l,v,d,T);else switch(b===99&&ht(I,3)===110?100:b){case 100:case 108:case 109:case 115:Ml(e,O,O,r&&So(Gv(e,O,O,0,0,s,d,x,s,E=[],v,T),T),s,T,v,d,r?E:T);break;default:Ml(I,O,O,O,[""],T,0,d,T)}}m=p=k=0,w=_=1,x=I="",v=c;break;case 58:v=1+Kn(I),k=N;default:if(w<1){if(y==123)--w;else if(y==125&&w++==0&&GL()==125)continue}switch(I+=Lp(y),y*w){case 38:_=p>0?1:(I+="\f",-1);break;case 44:d[m++]=(Kn(I)-1)*_,_=1;break;case 64:mi()===45&&(I+=df(Rn())),b=mi(),p=v=Kn(x=I+=eO(zl())),y++;break;case 45:N===45&&Kn(I)==2&&(w=0)}}return l}function Gv(e,t,n,r,s,l,c,d,f,m,p,v){for(var b=s-1,k=s===0?l:[""],N=s1(k),w=0,S=0,_=0;w<r;++w)for(var y=0,x=_s(e,b+1,b=r1(S=c[w])),E=e;y<N;++y)(E=i1(S>0?k[y]+" "+x:ve(x,/&\f/g,k[y])))&&(f[_++]=E);return Fu(e,t,n,s===0?Du:d,f,m,p,v)}function nO(e,t,n,r){return Fu(e,t,n,t1,Lp(VL()),_s(e,2,-2),0,r)}function Yv(e,t,n,r,s){return Fu(e,t,n,Tp,_s(e,0,r),_s(e,r+1,-1),r,s)}function a1(e,t,n){switch(WL(e,t)){case 5103:return Te+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Te+e+e;case 4789:return Ao+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Te+e+Ao+e+Be+e+e;case 5936:switch(ht(e,t+11)){case 114:return Te+e+Be+ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Te+e+Be+ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Te+e+Be+ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Te+e+Be+e+e;case 6165:return Te+e+Be+"flex-"+e+e;case 5187:return Te+e+ve(e,/(\w+).+(:[^]+)/,Te+"box-$1$2"+Be+"flex-$1$2")+e;case 5443:return Te+e+Be+"flex-item-"+ve(e,/flex-|-self/g,"")+(ar(e,/flex-|baseline/)?"":Be+"grid-row-"+ve(e,/flex-|-self/g,""))+e;case 4675:return Te+e+Be+"flex-line-pack"+ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return Te+e+Be+ve(e,"shrink","negative")+e;case 5292:return Te+e+Be+ve(e,"basis","preferred-size")+e;case 6060:return Te+"box-"+ve(e,"-grow","")+Te+e+Be+ve(e,"grow","positive")+e;case 4554:return Te+ve(e,/([^-])(transform)/g,"$1"+Te+"$2")+e;case 6187:return ve(ve(ve(e,/(zoom-|grab)/,Te+"$1"),/(image-set)/,Te+"$1"),e,"")+e;case 5495:case 3959:return ve(e,/(image-set\([^]*)/,Te+"$1$`$1");case 4968:return ve(ve(e,/(.+:)(flex-)?(.*)/,Te+"box-pack:$3"+Be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Te+e+e;case 4200:if(!ar(e,/flex-|baseline/))return Be+"grid-column-align"+_s(e,t)+e;break;case 2592:case 3360:return Be+ve(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,s){return t=s,ar(r.props,/grid-\w+-end/)})?~Rl(e+(n=n[t].value),"span",0)?e:Be+ve(e,"-start","")+e+Be+"grid-row-span:"+(~Rl(n,"span",0)?ar(n,/\d+/):+ar(n,/\d+/)-+ar(e,/\d+/))+";":Be+ve(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ar(r.props,/grid-\w+-start/)})?e:Be+ve(ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return ve(e,/(.+)-inline(.+)/,Te+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Kn(e)-1-t>6)switch(ht(e,t+1)){case 109:if(ht(e,t+4)!==45)break;case 102:return ve(e,/(.+:)(.+)-([^]+)/,"$1"+Te+"$2-$3$1"+Ao+(ht(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Rl(e,"stretch",0)?a1(ve(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,s,l,c,d,f,m){return Be+s+":"+l+m+(c?Be+s+"-span:"+(d?f:+f-+l)+m:"")+e});case 4949:if(ht(e,t+6)===121)return ve(e,":",":"+Te)+e;break;case 6444:switch(ht(e,ht(e,14)===45?18:11)){case 120:return ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Te+(ht(e,14)===45?"inline-":"")+"box$3$1"+Te+"$2$3$1"+Be+"$2box$3")+e;case 100:return ve(e,":",":"+Be)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return ve(e,"scroll-","scroll-snap-")+e}return e}function kc(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function rO(e,t,n,r){switch(e.type){case qL:if(e.children.length)break;case HL:case Tp:return e.return=e.return||e.value;case t1:return"";case n1:return e.return=e.value+"{"+kc(e.children,r)+"}";case Du:if(!Kn(e.value=e.props.join(",")))return""}return Kn(n=kc(e.children,r))?e.return=e.value+"{"+n+"}":""}function iO(e){var t=s1(e);return function(n,r,s,l){for(var c="",d=0;d<t;d++)c+=e[d](n,r,s,l)||"";return c}}function sO(e){return function(t){t.root||(t=t.return)&&e(t)}}function oO(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Tp:e.return=a1(e.value,e.length,n);return;case n1:return kc([Sr(e,{value:ve(e.value,"@","@"+Te)})],r);case Du:if(e.length)return ZL(n=e.props,function(s){switch(ar(s,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Fi(Sr(e,{props:[ve(s,/:(read-\w+)/,":"+Ao+"$1")]})),Fi(Sr(e,{props:[s]})),Mh(e,{props:Vv(n,r)});break;case"::placeholder":Fi(Sr(e,{props:[ve(s,/:(plac\w+)/,":"+Te+"input-$1")]})),Fi(Sr(e,{props:[ve(s,/:(plac\w+)/,":"+Ao+"$1")]})),Fi(Sr(e,{props:[ve(s,/:(plac\w+)/,Be+"input-$1")]})),Fi(Sr(e,{props:[s]})),Mh(e,{props:Vv(n,r)});break}return""})}}var aO={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Jt={},ks=typeof process<"u"&&Jt!==void 0&&(Jt.REACT_APP_SC_ATTR||Jt.SC_ATTR)||"data-styled",l1="active",c1="data-styled-version",Hu="6.1.19",Op=`/*!sc*/
`,jc=typeof window<"u"&&typeof document<"u",lO=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Jt.REACT_APP_SC_DISABLE_SPEEDY!==""?Jt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Jt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Jt!==void 0&&Jt.SC_DISABLE_SPEEDY!==void 0&&Jt.SC_DISABLE_SPEEDY!==""&&Jt.SC_DISABLE_SPEEDY!=="false"&&Jt.SC_DISABLE_SPEEDY),qu=Object.freeze([]),js=Object.freeze({});function cO(e,t,n){return n===void 0&&(n=js),e.theme!==n.theme&&e.theme||t||n.theme}var u1=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),uO=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dO=/(^-|-$)/g;function Kv(e){return e.replace(uO,"-").replace(dO,"")}var fO=/(a)(d)/gi,fl=52,Xv=function(e){return String.fromCharCode(e+(e>25?39:97))};function Bh(e){var t,n="";for(t=Math.abs(e);t>fl;t=t/fl|0)n=Xv(t%fl)+n;return(Xv(t%fl)+n).replace(fO,"$1-$2")}var ff,d1=5381,es=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},f1=function(e){return es(d1,e)};function h1(e){return Bh(f1(e)>>>0)}function hO(e){return e.displayName||e.name||"Component"}function hf(e){return typeof e=="string"&&!0}var m1=typeof Symbol=="function"&&Symbol.for,p1=m1?Symbol.for("react.memo"):60115,mO=m1?Symbol.for("react.forward_ref"):60112,pO={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},gO={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},g1={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vO=((ff={})[mO]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ff[p1]=g1,ff);function Qv(e){return("type"in(t=e)&&t.type.$$typeof)===p1?g1:"$$typeof"in e?vO[e.$$typeof]:pO;var t}var yO=Object.defineProperty,xO=Object.getOwnPropertyNames,Jv=Object.getOwnPropertySymbols,wO=Object.getOwnPropertyDescriptor,bO=Object.getPrototypeOf,ey=Object.prototype;function v1(e,t,n){if(typeof t!="string"){if(ey){var r=bO(t);r&&r!==ey&&v1(e,r,n)}var s=xO(t);Jv&&(s=s.concat(Jv(t)));for(var l=Qv(e),c=Qv(t),d=0;d<s.length;++d){var f=s[d];if(!(f in gO||n&&n[f]||c&&f in c||l&&f in l)){var m=wO(t,f);try{yO(e,f,m)}catch{}}}}return e}function Ns(e){return typeof e=="function"}function Ap(e){return typeof e=="object"&&"styledComponentId"in e}function ci(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function Fh(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function sa(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Uh(e,t,n){if(n===void 0&&(n=!1),!n&&!sa(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Uh(e[r],t[r]);else if(sa(t))for(var r in t)e[r]=Uh(e[r],t[r]);return e}function Ip(e,t){Object.defineProperty(e,"toString",{value:t})}function ka(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var _O=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,s=r.length,l=s;t>=l;)if((l<<=1)<0)throw ka(16,"".concat(t));this.groupSizes=new Uint32Array(l),this.groupSizes.set(r),this.length=l;for(var c=s;c<l;c++)this.groupSizes[c]=0}for(var d=this.indexOfGroup(t+1),f=(c=0,n.length);c<f;c++)this.tag.insertRule(d,n[c])&&(this.groupSizes[t]++,d++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),s=r+n;this.groupSizes[t]=0;for(var l=r;l<s;l++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],s=this.indexOfGroup(t),l=s+r,c=s;c<l;c++)n+="".concat(this.tag.getRule(c)).concat(Op);return n},e}(),$l=new Map,Nc=new Map,Dl=1,hl=function(e){if($l.has(e))return $l.get(e);for(;Nc.has(Dl);)Dl++;var t=Dl++;return $l.set(e,t),Nc.set(t,e),t},SO=function(e,t){Dl=t+1,$l.set(e,t),Nc.set(t,e)},kO="style[".concat(ks,"][").concat(c1,'="').concat(Hu,'"]'),jO=new RegExp("^".concat(ks,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),NO=function(e,t,n){for(var r,s=n.split(","),l=0,c=s.length;l<c;l++)(r=s[l])&&e.registerName(t,r)},CO=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Op),s=[],l=0,c=r.length;l<c;l++){var d=r[l].trim();if(d){var f=d.match(jO);if(f){var m=0|parseInt(f[1],10),p=f[2];m!==0&&(SO(p,m),NO(e,p,f[3]),e.getTag().insertRules(m,s)),s.length=0}else s.push(d)}}},ty=function(e){for(var t=document.querySelectorAll(kO),n=0,r=t.length;n<r;n++){var s=t[n];s&&s.getAttribute(ks)!==l1&&(CO(e,s),s.parentNode&&s.parentNode.removeChild(s))}};function PO(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var y1=function(e){var t=document.head,n=e||t,r=document.createElement("style"),s=function(d){var f=Array.from(d.querySelectorAll("style[".concat(ks,"]")));return f[f.length-1]}(n),l=s!==void 0?s.nextSibling:null;r.setAttribute(ks,l1),r.setAttribute(c1,Hu);var c=PO();return c&&r.setAttribute("nonce",c),n.insertBefore(r,l),r},EO=function(){function e(t){this.element=y1(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,s=0,l=r.length;s<l;s++){var c=r[s];if(c.ownerNode===n)return c}throw ka(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),TO=function(){function e(t){this.element=y1(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),LO=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),ny=jc,OO={isServer:!jc,useCSSOMInjection:!lO},x1=function(){function e(t,n,r){t===void 0&&(t=js),n===void 0&&(n={});var s=this;this.options=Wt(Wt({},OO),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&jc&&ny&&(ny=!1,ty(this)),Ip(this,function(){return function(l){for(var c=l.getTag(),d=c.length,f="",m=function(v){var b=function(_){return Nc.get(_)}(v);if(b===void 0)return"continue";var k=l.names.get(b),N=c.getGroup(v);if(k===void 0||!k.size||N.length===0)return"continue";var w="".concat(ks,".g").concat(v,'[id="').concat(b,'"]'),S="";k!==void 0&&k.forEach(function(_){_.length>0&&(S+="".concat(_,","))}),f+="".concat(N).concat(w,'{content:"').concat(S,'"}').concat(Op)},p=0;p<d;p++)m(p);return f}(s)})}return e.registerId=function(t){return hl(t)},e.prototype.rehydrate=function(){!this.server&&jc&&ty(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(Wt(Wt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,s=n.target;return n.isServer?new LO(s):r?new EO(s):new TO(s)}(this.options),new _O(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(hl(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(hl(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(hl(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),AO=/&/g,IO=/^\s*\/\/.*$/gm;function w1(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=w1(n.children,t)),n})}function RO(e){var t,n,r,s=js,l=s.options,c=l===void 0?js:l,d=s.plugins,f=d===void 0?qu:d,m=function(b,k,N){return N.startsWith(n)&&N.endsWith(n)&&N.replaceAll(n,"").length>0?".".concat(t):b},p=f.slice();p.push(function(b){b.type===Du&&b.value.includes("&")&&(b.props[0]=b.props[0].replace(AO,n).replace(r,m))}),c.prefix&&p.push(oO),p.push(rO);var v=function(b,k,N,w){k===void 0&&(k=""),N===void 0&&(N=""),w===void 0&&(w="&"),t=w,n=k,r=new RegExp("\\".concat(n,"\\b"),"g");var S=b.replace(IO,""),_=tO(N||k?"".concat(N," ").concat(k," { ").concat(S," }"):S);c.namespace&&(_=w1(_,c.namespace));var y=[];return kc(_,iO(p.concat(sO(function(x){return y.push(x)})))),y};return v.hash=f.length?f.reduce(function(b,k){return k.name||ka(15),es(b,k.name)},d1).toString():"",v}var zO=new x1,Hh=RO(),b1=wn.createContext({shouldForwardProp:void 0,styleSheet:zO,stylis:Hh});b1.Consumer;wn.createContext(void 0);function ry(){return j.useContext(b1)}var _1=function(){function e(t,n){var r=this;this.inject=function(s,l){l===void 0&&(l=Hh);var c=r.name+l.hash;s.hasNameForId(r.id,c)||s.insertRules(r.id,c,l(r.rules,c,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Ip(this,function(){throw ka(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=Hh),this.name+t.hash},e}(),MO=function(e){return e>="A"&&e<="Z"};function iy(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;MO(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var S1=function(e){return e==null||e===!1||e===""},k1=function(e){var t,n,r=[];for(var s in e){var l=e[s];e.hasOwnProperty(s)&&!S1(l)&&(Array.isArray(l)&&l.isCss||Ns(l)?r.push("".concat(iy(s),":"),l,";"):sa(l)?r.push.apply(r,ia(ia(["".concat(s," {")],k1(l),!1),["}"],!1)):r.push("".concat(iy(s),": ").concat((t=s,(n=l)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in aO||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function pi(e,t,n,r){if(S1(e))return[];if(Ap(e))return[".".concat(e.styledComponentId)];if(Ns(e)){if(!Ns(l=e)||l.prototype&&l.prototype.isReactComponent||!t)return[e];var s=e(t);return pi(s,t,n,r)}var l;return e instanceof _1?n?(e.inject(n,r),[e.getName(r)]):[e]:sa(e)?k1(e):Array.isArray(e)?Array.prototype.concat.apply(qu,e.map(function(c){return pi(c,t,n,r)})):[e.toString()]}function $O(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Ns(n)&&!Ap(n))return!1}return!0}var DO=f1(Hu),BO=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&$O(t),this.componentId=n,this.baseHash=es(DO,n),this.baseStyle=r,x1.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var s=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))s=ci(s,this.staticRulesId);else{var l=Fh(pi(this.rules,t,n,r)),c=Bh(es(this.baseHash,l)>>>0);if(!n.hasNameForId(this.componentId,c)){var d=r(l,".".concat(c),void 0,this.componentId);n.insertRules(this.componentId,c,d)}s=ci(s,c),this.staticRulesId=c}else{for(var f=es(this.baseHash,r.hash),m="",p=0;p<this.rules.length;p++){var v=this.rules[p];if(typeof v=="string")m+=v;else if(v){var b=Fh(pi(v,t,n,r));f=es(f,b+p),m+=b}}if(m){var k=Bh(f>>>0);n.hasNameForId(this.componentId,k)||n.insertRules(this.componentId,k,r(m,".".concat(k),void 0,this.componentId)),s=ci(s,k)}}return s},e}(),j1=wn.createContext(void 0);j1.Consumer;var mf={};function FO(e,t,n){var r=Ap(e),s=e,l=!hf(e),c=t.attrs,d=c===void 0?qu:c,f=t.componentId,m=f===void 0?function(E,T){var O=typeof E!="string"?"sc":Kv(E);mf[O]=(mf[O]||0)+1;var I="".concat(O,"-").concat(h1(Hu+O+mf[O]));return T?"".concat(T,"-").concat(I):I}(t.displayName,t.parentComponentId):f,p=t.displayName,v=p===void 0?function(E){return hf(E)?"styled.".concat(E):"Styled(".concat(hO(E),")")}(e):p,b=t.displayName&&t.componentId?"".concat(Kv(t.displayName),"-").concat(t.componentId):t.componentId||m,k=r&&s.attrs?s.attrs.concat(d).filter(Boolean):d,N=t.shouldForwardProp;if(r&&s.shouldForwardProp){var w=s.shouldForwardProp;if(t.shouldForwardProp){var S=t.shouldForwardProp;N=function(E,T){return w(E,T)&&S(E,T)}}else N=w}var _=new BO(n,b,r?s.componentStyle:void 0);function y(E,T){return function(O,I,q){var F=O.attrs,z=O.componentStyle,B=O.defaultProps,Z=O.foldedComponentIds,Q=O.styledComponentId,K=O.target,te=wn.useContext(j1),ee=ry(),V=O.shouldForwardProp||ee.shouldForwardProp,P=cO(I,te,B)||js,M=function(ce,ae,at){for(var Dt,Dn=Wt(Wt({},ae),{className:void 0,theme:at}),Kr=0;Kr<ce.length;Kr+=1){var xr=Ns(Dt=ce[Kr])?Dt(Dn):Dt;for(var Bt in xr)Dn[Bt]=Bt==="className"?ci(Dn[Bt],xr[Bt]):Bt==="style"?Wt(Wt({},Dn[Bt]),xr[Bt]):xr[Bt]}return ae.className&&(Dn.className=ci(Dn.className,ae.className)),Dn}(F,I,P),D=M.as||K,Y={};for(var R in M)M[R]===void 0||R[0]==="$"||R==="as"||R==="theme"&&M.theme===P||(R==="forwardedAs"?Y.as=M.forwardedAs:V&&!V(R,D)||(Y[R]=M[R]));var ne=function(ce,ae){var at=ry(),Dt=ce.generateAndInjectStyles(ae,at.styleSheet,at.stylis);return Dt}(z,M),oe=ci(Z,Q);return ne&&(oe+=" "+ne),M.className&&(oe+=" "+M.className),Y[hf(D)&&!u1.has(D)?"class":"className"]=oe,q&&(Y.ref=q),j.createElement(D,Y)}(x,E,T)}y.displayName=v;var x=wn.forwardRef(y);return x.attrs=k,x.componentStyle=_,x.displayName=v,x.shouldForwardProp=N,x.foldedComponentIds=r?ci(s.foldedComponentIds,s.styledComponentId):"",x.styledComponentId=b,x.target=r?s.target:e,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(E){this._foldedDefaultProps=r?function(T){for(var O=[],I=1;I<arguments.length;I++)O[I-1]=arguments[I];for(var q=0,F=O;q<F.length;q++)Uh(T,F[q],!0);return T}({},s.defaultProps,E):E}}),Ip(x,function(){return".".concat(x.styledComponentId)}),l&&v1(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function sy(e,t){for(var n=[e[0]],r=0,s=t.length;r<s;r+=1)n.push(t[r],e[r+1]);return n}var oy=function(e){return Object.assign(e,{isCss:!0})};function N1(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Ns(e)||sa(e))return oy(pi(sy(qu,ia([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?pi(r):oy(pi(sy(r,t)))}function qh(e,t,n){if(n===void 0&&(n=js),!t)throw ka(1,t);var r=function(s){for(var l=[],c=1;c<arguments.length;c++)l[c-1]=arguments[c];return e(t,n,N1.apply(void 0,ia([s],l,!1)))};return r.attrs=function(s){return qh(e,t,Wt(Wt({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)}))},r.withConfig=function(s){return qh(e,t,Wt(Wt({},n),s))},r}var C1=function(e){return qh(FO,e)},Ei=C1;u1.forEach(function(e){Ei[e]=C1(e)});function Rp(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=Fh(N1.apply(void 0,ia([e],t,!1))),s=h1(r);return new _1(s,r)}const UO={"aria-busy":!0,role:"progressbar"};Ei.div`
  display: ${e=>e.$visible?"flex":"none"};
`;const HO="http://www.w3.org/2000/svg",En=242.776657104492,qO=1.6,WO=Rp`
12.5% {
  stroke-dasharray: ${En*.14}px, ${En}px;
  stroke-dashoffset: -${En*.11}px;
}
43.75% {
  stroke-dasharray: ${En*.35}px, ${En}px;
  stroke-dashoffset: -${En*.35}px;
}
100% {
  stroke-dasharray: ${En*.01}px, ${En}px;
  stroke-dashoffset: -${En*.99}px;
}
`;Ei.path`
  stroke-dasharray: ${En*.01}px, ${En};
  stroke-dashoffset: 0;
  animation: ${WO} ${qO}s linear infinite;
`;const ZO=Rp`
to {
   transform: rotate(360deg);
 }
`;Ei.svg`
  animation: ${ZO} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`;Ei.polyline`
  stroke-width: ${e=>e.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;const VO=Rp`
to {
   stroke-dashoffset: 136;
 }
`;Ei.polygon`
  stroke-dasharray: 17;
  animation: ${VO} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;Ei.svg`
  transform-origin: 50% 65%;
`;const Vs=({visible:e=!0,height:t="80",width:n="80",wrapperClass:r="",wrapperStyle:s={},ariaLabel:l="magnifying-glass-loading",glassColor:c="#c0efff",color:d="#e15b64"})=>e?o.jsx("svg",{width:n,height:t,xmlns:HO,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:r,style:s,"aria-label":l,"data-testid":"magnifying-glass-svg",...UO,children:o.jsx("g",{transform:"translate(50,50)",children:o.jsx("g",{transform:"scale(0.82)",children:o.jsx("g",{transform:"translate(-50,-50)",children:o.jsxs("g",{transform:"translate(16.3636 -20)",children:[o.jsx("animateTransform",{attributeName:"transform",type:"translate",calcMode:"linear",values:"-20 -20;20 -20;0 20;-20 -20",keyTimes:"0;0.33;0.66;1",dur:"1s",begin:"0s",repeatCount:"indefinite"}),o.jsx("path",{d:"M44.19,26.158c-4.817,0-9.345,1.876-12.751,5.282c-3.406,3.406-5.282,7.934-5.282,12.751 c0,4.817,1.876,9.345,5.282,12.751c3.406,3.406,7.934,5.282,12.751,5.282s9.345-1.876,12.751-5.282 c3.406-3.406,5.282-7.934,5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536,28.033,49.007,26.158,44.19,26.158z",fill:c}),o.jsx("path",{d:"M78.712,72.492L67.593,61.373l-3.475-3.475c1.621-2.352,2.779-4.926,3.475-7.596c1.044-4.008,1.044-8.23,0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572,22.362,50.381,20,44.19,20C38,20,31.809,22.362,27.085,27.085 c-9.447,9.447-9.447,24.763,0,34.21C31.809,66.019,38,68.381,44.19,68.381c4.798,0,9.593-1.425,13.708-4.262l9.695,9.695 l4.899,4.899C73.351,79.571,74.476,80,75.602,80s2.251-0.429,3.11-1.288C80.429,76.994,80.429,74.209,78.712,72.492z M56.942,56.942 c-3.406,3.406-7.934,5.282-12.751,5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817,1.876-9.345,5.282-12.751c3.406-3.406,7.934-5.282,12.751-5.282c4.817,0,9.345,1.876,12.751,5.282 c3.406,3.406,5.282,7.934,5.282,12.751C62.223,49.007,60.347,53.536,56.942,56.942z",fill:d})]})})})})}):null,GO=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[s,l]=j.useState(null),c=Et();return j.useEffect(()=>{let d=!0;return r(!0),Re(pe.CATEGORIES).then(f=>{var m;d&&(t(((m=f.data)==null?void 0:m.result)||[]),l(null))}).catch(f=>{d&&l("Failed to load categories")}).finally(()=>{d&&r(!1)}),()=>{d=!1}},[]),o.jsxs("section",{className:"my-lg-14 my-8",children:[o.jsx("style",{children:`
        /* Responsive grid adjustments */
        @media (max-width: 650px) {
          .col-lg-2 {
            flex: 0 0 33.333% !important;
            max-width: 33.333% !important;
          }
        }
      `}),o.jsx("div",{className:"container ",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-12",children:o.jsx("div",{className:"mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Shop Popular Categories",children:"Shop Popular Categories"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsxs("div",{className:"row ",children:[n&&o.jsxs(o.Fragment,{children:[Array.from({length:15}).map((d,f)=>o.jsx("div",{className:"col-lg-2 col-md-4 col-6 fade-zoom",style:{flex:"0 0 20%",maxWidth:"20%"},children:o.jsxs("div",{className:"category-shimmer text-center mb-10",children:[o.jsx("div",{className:"shimmer-circle shimmer-bg",style:{width:100,height:100,margin:"0 auto",borderRadius:50}}),o.jsx("div",{className:"shimmer-line shimmer-bg",style:{width:100,height:16,margin:"18px auto 0",borderRadius:6}})]})},f)),o.jsx("style",{children:`
                   .shimmer-bg {
                     background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
                     background-size: 400% 100%;
                     animation: shimmer 1.2s ease-in-out infinite;
                   }
                   @keyframes shimmer {
                     0% { background-position: -400px 0; }
                     100% { background-position: 400px 0; }
                   }
                 `})]}),s&&o.jsx("div",{className:"text-center text-danger py-5",children:s}),!n&&!s&&e.length===0&&o.jsx("div",{className:"text-center py-5",children:"No categories found."}),!n&&!s&&e.map((d,f)=>o.jsx("div",{className:"col-lg-2 col-md-4 col-6 fade-zoom",style:{flex:"0 0 20%",maxWidth:"20%"},children:o.jsx(UL,{children:o.jsxs("div",{className:"text-center mb-10",children:[o.jsx(xe,{to:`/Shop?category=${d.id||d._id||f}`,"aria-label":`Go to ${d.name} category`,children:o.jsx("img",{src:c(d.image),alt:d.name,className:"card-image rounded-circle",style:{objectFit:"cover",width:100,height:100}})}),o.jsx("div",{className:"mt-4",children:o.jsx("h5",{className:"fs-6 mb-0",children:o.jsx(xe,{to:`/Shop?category=${d.id||d._id||f}`,className:"text-inherit","aria-label":`Go to ${d.name} category`,children:d.name})})})]})})},d.id||d._id||f))]})]})})]})},YO={autoplaySpeed:7e3},KO=()=>{const[e,t]=j.useState(500);return j.useEffect(()=>{const n=()=>{window.innerWidth<480?t(180):window.innerWidth<600?t(220):window.innerWidth<768?t(300):window.innerWidth<900?t(350):window.innerWidth<1200?t(400):t(500)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e},XO=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[s,l]=j.useState(null),[c,d]=j.useState(0),f=KO(),m=Et();j.useEffect(()=>{let k=!0;r(!0);const N=`${pe.BANNERS}&type=normal`;return Re(N).then(w=>{var S;k&&(t(((S=w==null?void 0:w.data)==null?void 0:S.data)||[]),l(null))}).catch(()=>{k&&l("Failed to load banners")}).finally(()=>{k&&r(!1)}),()=>{k=!1}},[]),j.useEffect(()=>{if(!e.length)return;const k=setInterval(()=>{d(N=>(N+1)%e.length)},YO.autoplaySpeed);return()=>clearInterval(k)},[e]);const p=k=>d(k),v=()=>d(k=>(k-1+e.length)%e.length),b=()=>d(k=>(k+1)%e.length);return o.jsx("section",{className:"hero-section",children:o.jsxs("div",{className:"container mt-8",children:[n&&o.jsxs("div",{className:"banner-shimmer-wrapper text-center py-5",children:[o.jsx("div",{className:"banner-shimmer shimmer-bg",style:{width:"100%",minHeight:f,borderRadius:".5rem",margin:"0 auto",maxWidth:"100%"}}),o.jsx("style",{children:`
              .shimmer-bg {
                background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
                background-size: 400% 100%;
                animation: shimmer 1.2s ease-in-out infinite;
              }
              @keyframes shimmer {
                0% { background-position: -400px 0; }
                100% { background-position: 400px 0; }
              }
            `})]}),s&&o.jsx("div",{className:"text-center text-danger py-5",children:s}),!n&&!s&&e.length>0&&o.jsxs("div",{id:"carouselExampleFade",className:"carousel slide carousel-fade","data-bs-ride":"carousel",children:[o.jsx("div",{className:"carousel-inner",children:e.map((k,N)=>{var w;return o.jsx("div",{className:`carousel-item${N===c?" active":""}`,children:o.jsx(xe,{to:`/Shop?category=${((w=k.mainCategory)==null?void 0:w._id)||k.mainCategory||""}`,"aria-label":`Go to ${k.title} banner`,style:{textDecoration:"none"},children:o.jsx("div",{style:{background:`url(${m(k.image)}) no-repeat`,backgroundSize:"cover",borderRadius:".5rem",backgroundPosition:"center",minHeight:f,width:"100%",transition:"min-height 0.3s",cursor:"pointer"}})})},k._id||N)})}),o.jsxs("button",{className:"carousel-control-prev",onClick:v,type:"button","aria-label":"Previous",style:{background:"none",border:"none"},children:[o.jsx("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),o.jsx("span",{className:"visually-hidden",children:"Previous"})]}),o.jsxs("button",{className:"carousel-control-next",onClick:b,type:"button","aria-label":"Next",style:{background:"none",border:"none"},children:[o.jsx("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),o.jsx("span",{className:"visually-hidden",children:"Next"})]}),o.jsx("div",{className:"carousel-indicators",children:e.map((k,N)=>o.jsx("button",{type:"button",className:N===c?"active":"","aria-current":N===c,"aria-label":`Slide ${N+1}`,onClick:()=>p(N),style:{border:0,background:N===c?"#0aad0a":"#888",width:10,height:10,borderRadius:"50%",margin:2,transition:"background 0.3s"}},k._id||N))})]})]})})},QO=()=>{const[e,t]=j.useState(300);return j.useEffect(()=>{const n=()=>{window.innerWidth<480?t(220):window.innerWidth<600?t(260):window.innerWidth<768?t(300):window.innerWidth<900?t(340):t(380)};return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),e},JO=(e,t)=>{const n=[];for(let r=0;r<e.length;r+=t)n.push(e.slice(r,r+t));return n},e4=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(0),[s,l]=j.useState(!0),[c,d]=j.useState(null),f=QO(),m=Et();j.useEffect(()=>{let v=!0;const b=`${pe.BANNERS}&type=offer`;return Re(b).then(k=>{var N;v&&(t(((N=k==null?void 0:k.data)==null?void 0:N.data)||[]),d(null))}).catch(()=>{v&&d("Failed to load offer banners")}).finally(()=>{v&&l(!1)}),()=>{v=!1}},[]);const p=JO(e,2);return j.useEffect(()=>{if(!p.length)return;const v=setInterval(()=>{r(b=>(b+1)%p.length)},7e3);return()=>clearInterval(v)},[p]),!s&&!c&&e.length===0?null:o.jsxs("section",{className:"offer-banner-section py-3",children:[o.jsxs("div",{className:"container",children:[s&&o.jsx("div",{className:"text-center shimmer-bg",style:{minHeight:f}}),c&&o.jsx("div",{className:"text-danger text-center py-2",children:c}),!s&&!c&&p.length>0&&o.jsx("div",{className:"row",children:p[n].map((v,b)=>{var k;return o.jsx("div",{className:"col-12 col-lg-6 mb-3 fade-in-left",children:o.jsx(Il,{direction:b%2===0?"left":"right",children:o.jsx(xe,{to:`/Shop?category=${((k=v.mainCategory)==null?void 0:k._id)||v.mainCategory||""}`,style:{textDecoration:"none"},children:o.jsx("div",{style:{borderRadius:"10px",overflow:"hidden",width:"100%",maxWidth:"600px"},children:o.jsx("img",{src:m(v.image),alt:"",style:{width:"100%",height:"auto",display:"block",borderRadius:"10px"}})})})})},v._id||b)})})]}),o.jsx("style",{children:`
        .shimmer-bg {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
          background-size: 400% 100%;
          animation: shimmer 1.2s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
      `})]})};var P1={},E1={},Wu={},T1={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0};e.default=t})(T1);var t4="Expected a function",ay=NaN,n4="[object Symbol]",r4=/^\s+|\s+$/g,i4=/^[-+]0x[0-9a-f]+$/i,s4=/^0b[01]+$/i,o4=/^0o[0-7]+$/i,a4=parseInt,l4=typeof yo=="object"&&yo&&yo.Object===Object&&yo,c4=typeof self=="object"&&self&&self.Object===Object&&self,u4=l4||c4||Function("return this")(),d4=Object.prototype,f4=d4.toString,h4=Math.max,m4=Math.min,pf=function(){return u4.Date.now()};function p4(e,t,n){var r,s,l,c,d,f,m=0,p=!1,v=!1,b=!0;if(typeof e!="function")throw new TypeError(t4);t=ly(t)||0,Wh(n)&&(p=!!n.leading,v="maxWait"in n,l=v?h4(ly(n.maxWait)||0,t):l,b="trailing"in n?!!n.trailing:b);function k(O){var I=r,q=s;return r=s=void 0,m=O,c=e.apply(q,I),c}function N(O){return m=O,d=setTimeout(_,t),p?k(O):c}function w(O){var I=O-f,q=O-m,F=t-I;return v?m4(F,l-q):F}function S(O){var I=O-f,q=O-m;return f===void 0||I>=t||I<0||v&&q>=l}function _(){var O=pf();if(S(O))return y(O);d=setTimeout(_,w(O))}function y(O){return d=void 0,b&&r?k(O):(r=s=void 0,c)}function x(){d!==void 0&&clearTimeout(d),m=0,r=f=s=d=void 0}function E(){return d===void 0?c:y(pf())}function T(){var O=pf(),I=S(O);if(r=arguments,s=this,f=O,I){if(d===void 0)return N(f);if(v)return d=setTimeout(_,t),k(f)}return d===void 0&&(d=setTimeout(_,t)),c}return T.cancel=x,T.flush=E,T}function Wh(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function g4(e){return!!e&&typeof e=="object"}function v4(e){return typeof e=="symbol"||g4(e)&&f4.call(e)==n4}function ly(e){if(typeof e=="number")return e;if(v4(e))return ay;if(Wh(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Wh(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(r4,"");var n=s4.test(e);return n||o4.test(e)?a4(e.slice(2),n?2:8):i4.test(e)?ay:+e}var y4=p4,L1={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var l="",c=0;c<arguments.length;c++){var d=arguments[c];d&&(l=s(l,r(d)))}return l}function r(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return n.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var c="";for(var d in l)t.call(l,d)&&l[d]&&(c=s(c,d));return c}function s(l,c){return c?l?l+" "+c:l+c:l}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(L1);var Zu=L1.exports,re={},zp={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(j);function n(s){return s&&s.__esModule?s:{default:s}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(l){return t.default.createElement("ul",{style:{display:"block"}},l)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(l){return t.default.createElement("button",null,l+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0,asNavFor:null,unslick:!1};e.default=r})(zp);Object.defineProperty(re,"__esModule",{value:!0});re.checkSpecKeys=re.checkNavigable=re.changeSlide=re.canUseDOM=re.canGoNext=void 0;re.clamp=A1;re.extractObject=void 0;re.filterSettings=A4;re.validSettings=re.swipeStart=re.swipeMove=re.swipeEnd=re.slidesOnRight=re.slidesOnLeft=re.slideHandler=re.siblingDirection=re.safePreventDefault=re.lazyStartIndex=re.lazySlidesOnRight=re.lazySlidesOnLeft=re.lazyEndIndex=re.keyHandler=re.initializedState=re.getWidth=re.getTrackLeft=re.getTrackCSS=re.getTrackAnimateCSS=re.getTotalSlides=re.getSwipeDirection=re.getSlideCount=re.getRequiredLazySlides=re.getPreClones=re.getPostClones=re.getOnDemandLazySlides=re.getNavigableIndexes=re.getHeight=void 0;var x4=O1(j),w4=O1(zp);function O1(e){return e&&e.__esModule?e:{default:e}}function oa(e){"@babel/helpers - typeof";return oa=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},oa(e)}function cy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cy(Object(n),!0).forEach(function(r){b4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function b4(e,t,n){return t=_4(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _4(e){var t=S4(e,"string");return oa(t)=="symbol"?t:String(t)}function S4(e,t){if(oa(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(oa(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function A1(e,t,n){return Math.max(t,Math.min(e,n))}var us=re.safePreventDefault=function(t){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(t._reactName)||t.preventDefault()},I1=re.getOnDemandLazySlides=function(t){for(var n=[],r=R1(t),s=z1(t),l=r;l<s;l++)t.lazyLoadedList.indexOf(l)<0&&n.push(l);return n};re.getRequiredLazySlides=function(t){for(var n=[],r=R1(t),s=z1(t),l=r;l<s;l++)n.push(l);return n};var R1=re.lazyStartIndex=function(t){return t.currentSlide-k4(t)},z1=re.lazyEndIndex=function(t){return t.currentSlide+j4(t)},k4=re.lazySlidesOnLeft=function(t){return t.centerMode?Math.floor(t.slidesToShow/2)+(parseInt(t.centerPadding)>0?1:0):0},j4=re.lazySlidesOnRight=function(t){return t.centerMode?Math.floor((t.slidesToShow-1)/2)+1+(parseInt(t.centerPadding)>0?1:0):t.slidesToShow},Zh=re.getWidth=function(t){return t&&t.offsetWidth||0},M1=re.getHeight=function(t){return t&&t.offsetHeight||0},$1=re.getSwipeDirection=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,s,l,c;return r=t.startX-t.curX,s=t.startY-t.curY,l=Math.atan2(s,r),c=Math.round(l*180/Math.PI),c<0&&(c=360-Math.abs(c)),c<=45&&c>=0||c<=360&&c>=315?"left":c>=135&&c<=225?"right":n===!0?c>=35&&c<=135?"up":"down":"vertical"},D1=re.canGoNext=function(t){var n=!0;return t.infinite||(t.centerMode&&t.currentSlide>=t.slideCount-1||t.slideCount<=t.slidesToShow||t.currentSlide>=t.slideCount-t.slidesToShow)&&(n=!1),n};re.extractObject=function(t,n){var r={};return n.forEach(function(s){return r[s]=t[s]}),r};re.initializedState=function(t){var n=x4.default.Children.count(t.children),r=t.listRef,s=Math.ceil(Zh(r)),l=t.trackRef&&t.trackRef.node,c=Math.ceil(Zh(l)),d;if(t.vertical)d=s;else{var f=t.centerMode&&parseInt(t.centerPadding)*2;typeof t.centerPadding=="string"&&t.centerPadding.slice(-1)==="%"&&(f*=s/100),d=Math.ceil((s-f)/t.slidesToShow)}var m=r&&M1(r.querySelector('[data-index="0"]')),p=m*t.slidesToShow,v=t.currentSlide===void 0?t.initialSlide:t.currentSlide;t.rtl&&t.currentSlide===void 0&&(v=n-1-t.initialSlide);var b=t.lazyLoadedList||[],k=I1(Ue(Ue({},t),{},{currentSlide:v,lazyLoadedList:b}));b=b.concat(k);var N={slideCount:n,slideWidth:d,listWidth:s,trackWidth:c,currentSlide:v,slideHeight:m,listHeight:p,lazyLoadedList:b};return t.autoplaying===null&&t.autoplay&&(N.autoplaying="playing"),N};re.slideHandler=function(t){var n=t.waitForAnimate,r=t.animating,s=t.fade,l=t.infinite,c=t.index,d=t.slideCount,f=t.lazyLoad,m=t.currentSlide,p=t.centerMode,v=t.slidesToScroll,b=t.slidesToShow,k=t.useCSS,N=t.lazyLoadedList;if(n&&r)return{};var w=c,S,_,y,x={},E={},T=l?c:A1(c,0,d-1);if(s){if(!l&&(c<0||c>=d))return{};c<0?w=c+d:c>=d&&(w=c-d),f&&N.indexOf(w)<0&&(N=N.concat(w)),x={animating:!0,currentSlide:w,lazyLoadedList:N,targetSlide:w},E={animating:!1,targetSlide:w}}else S=w,w<0?(S=w+d,l?d%v!==0&&(S=d-d%v):S=0):!D1(t)&&w>m?w=S=m:p&&w>=d?(w=l?d:d-1,S=l?0:d-1):w>=d&&(S=w-d,l?d%v!==0&&(S=0):S=d-b),!l&&w+b>=d&&(S=d-b),_=Pc(Ue(Ue({},t),{},{slideIndex:w})),y=Pc(Ue(Ue({},t),{},{slideIndex:S})),l||(_===y&&(w=S),_=y),f&&(N=N.concat(I1(Ue(Ue({},t),{},{currentSlide:w})))),k?(x={animating:!0,currentSlide:S,trackStyle:B1(Ue(Ue({},t),{},{left:_})),lazyLoadedList:N,targetSlide:T},E={animating:!1,currentSlide:S,trackStyle:Cc(Ue(Ue({},t),{},{left:y})),swipeLeft:null,targetSlide:T}):x={currentSlide:S,trackStyle:Cc(Ue(Ue({},t),{},{left:y})),lazyLoadedList:N,targetSlide:T};return{state:x,nextState:E}};re.changeSlide=function(t,n){var r,s,l,c,d,f=t.slidesToScroll,m=t.slidesToShow,p=t.slideCount,v=t.currentSlide,b=t.targetSlide,k=t.lazyLoad,N=t.infinite;if(c=p%f!==0,r=c?0:(p-v)%f,n.message==="previous")l=r===0?f:m-r,d=v-l,k&&!N&&(s=v-l,d=s===-1?p-1:s),N||(d=b-f);else if(n.message==="next")l=r===0?f:r,d=v+l,k&&!N&&(d=(v+f)%p+r),N||(d=b+f);else if(n.message==="dots")d=n.index*n.slidesToScroll;else if(n.message==="children"){if(d=n.index,N){var w=E4(Ue(Ue({},t),{},{targetSlide:d}));d>n.currentSlide&&w==="left"?d=d-p:d<n.currentSlide&&w==="right"&&(d=d+p)}}else n.message==="index"&&(d=Number(n.index));return d};re.keyHandler=function(t,n,r){return t.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":t.keyCode===37?r?"next":"previous":t.keyCode===39?r?"previous":"next":""};re.swipeStart=function(t,n,r){return t.target.tagName==="IMG"&&us(t),!n||!r&&t.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:t.touches?t.touches[0].pageX:t.clientX,startY:t.touches?t.touches[0].pageY:t.clientY,curX:t.touches?t.touches[0].pageX:t.clientX,curY:t.touches?t.touches[0].pageY:t.clientY}}};re.swipeMove=function(t,n){var r=n.scrolling,s=n.animating,l=n.vertical,c=n.swipeToSlide,d=n.verticalSwiping,f=n.rtl,m=n.currentSlide,p=n.edgeFriction,v=n.edgeDragged,b=n.onEdge,k=n.swiped,N=n.swiping,w=n.slideCount,S=n.slidesToScroll,_=n.infinite,y=n.touchObject,x=n.swipeEvent,E=n.listHeight,T=n.listWidth;if(!r){if(s)return us(t);l&&c&&d&&us(t);var O,I={},q=Pc(n);y.curX=t.touches?t.touches[0].pageX:t.clientX,y.curY=t.touches?t.touches[0].pageY:t.clientY,y.swipeLength=Math.round(Math.sqrt(Math.pow(y.curX-y.startX,2)));var F=Math.round(Math.sqrt(Math.pow(y.curY-y.startY,2)));if(!d&&!N&&F>10)return{scrolling:!0};d&&(y.swipeLength=F);var z=(f?-1:1)*(y.curX>y.startX?1:-1);d&&(z=y.curY>y.startY?1:-1);var B=Math.ceil(w/S),Z=$1(n.touchObject,d),Q=y.swipeLength;return _||(m===0&&(Z==="right"||Z==="down")||m+1>=B&&(Z==="left"||Z==="up")||!D1(n)&&(Z==="left"||Z==="up"))&&(Q=y.swipeLength*p,v===!1&&b&&(b(Z),I.edgeDragged=!0)),!k&&x&&(x(Z),I.swiped=!0),l?O=q+Q*(E/T)*z:f?O=q-Q*z:O=q+Q*z,d&&(O=q+Q*z),I=Ue(Ue({},I),{},{touchObject:y,swipeLeft:O,trackStyle:Cc(Ue(Ue({},n),{},{left:O}))}),Math.abs(y.curX-y.startX)<Math.abs(y.curY-y.startY)*.8||y.swipeLength>10&&(I.swiping=!0,us(t)),I}};re.swipeEnd=function(t,n){var r=n.dragging,s=n.swipe,l=n.touchObject,c=n.listWidth,d=n.touchThreshold,f=n.verticalSwiping,m=n.listHeight,p=n.swipeToSlide,v=n.scrolling,b=n.onSwipe,k=n.targetSlide,N=n.currentSlide,w=n.infinite;if(!r)return s&&us(t),{};var S=f?m/d:c/d,_=$1(l,f),y={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(v||!l.swipeLength)return y;if(l.swipeLength>S){us(t),b&&b(_);var x,E,T=w?N:k;switch(_){case"left":case"up":E=T+dy(n),x=p?uy(n,E):E,y.currentDirection=0;break;case"right":case"down":E=T-dy(n),x=p?uy(n,E):E,y.currentDirection=1;break;default:x=T}y.triggerSlideHandler=x}else{var O=Pc(n);y.trackStyle=B1(Ue(Ue({},n),{},{left:O}))}return y};var N4=re.getNavigableIndexes=function(t){for(var n=t.infinite?t.slideCount*2:t.slideCount,r=t.infinite?t.slidesToShow*-1:0,s=t.infinite?t.slidesToShow*-1:0,l=[];r<n;)l.push(r),r=s+t.slidesToScroll,s+=Math.min(t.slidesToScroll,t.slidesToShow);return l},uy=re.checkNavigable=function(t,n){var r=N4(t),s=0;if(n>r[r.length-1])n=r[r.length-1];else for(var l in r){if(n<r[l]){n=s;break}s=r[l]}return n},dy=re.getSlideCount=function(t){var n=t.centerMode?t.slideWidth*Math.floor(t.slidesToShow/2):0;if(t.swipeToSlide){var r,s=t.listRef,l=s.querySelectorAll&&s.querySelectorAll(".slick-slide")||[];if(Array.from(l).every(function(f){if(t.vertical){if(f.offsetTop+M1(f)/2>t.swipeLeft*-1)return r=f,!1}else if(f.offsetLeft-n+Zh(f)/2>t.swipeLeft*-1)return r=f,!1;return!0}),!r)return 0;var c=t.rtl===!0?t.slideCount-t.currentSlide:t.currentSlide,d=Math.abs(r.dataset.index-c)||1;return d}else return t.slidesToScroll},Mp=re.checkSpecKeys=function(t,n){return n.reduce(function(r,s){return r&&t.hasOwnProperty(s)},!0)?null:console.error("Keys Missing:",t)},Cc=re.getTrackCSS=function(t){Mp(t,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,s=t.slideCount+2*t.slidesToShow;t.vertical?r=s*t.slideHeight:n=P4(t)*t.slideWidth;var l={opacity:1,transition:"",WebkitTransition:""};if(t.useTransform){var c=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",d=t.vertical?"translate3d(0px, "+t.left+"px, 0px)":"translate3d("+t.left+"px, 0px, 0px)",f=t.vertical?"translateY("+t.left+"px)":"translateX("+t.left+"px)";l=Ue(Ue({},l),{},{WebkitTransform:c,transform:d,msTransform:f})}else t.vertical?l.top=t.left:l.left=t.left;return t.fade&&(l={opacity:1}),n&&(l.width=n),r&&(l.height=r),window&&!window.addEventListener&&window.attachEvent&&(t.vertical?l.marginTop=t.left+"px":l.marginLeft=t.left+"px"),l},B1=re.getTrackAnimateCSS=function(t){Mp(t,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=Cc(t);return t.useTransform?(n.WebkitTransition="-webkit-transform "+t.speed+"ms "+t.cssEase,n.transition="transform "+t.speed+"ms "+t.cssEase):t.vertical?n.transition="top "+t.speed+"ms "+t.cssEase:n.transition="left "+t.speed+"ms "+t.cssEase,n},Pc=re.getTrackLeft=function(t){if(t.unslick)return 0;Mp(t,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=t.slideIndex,r=t.trackRef,s=t.infinite,l=t.centerMode,c=t.slideCount,d=t.slidesToShow,f=t.slidesToScroll,m=t.slideWidth,p=t.listWidth,v=t.variableWidth,b=t.slideHeight,k=t.fade,N=t.vertical,w=0,S,_,y=0;if(k||t.slideCount===1)return 0;var x=0;if(s?(x=-Bl(t),c%f!==0&&n+f>c&&(x=-(n>c?d-(n-c):c%f)),l&&(x+=parseInt(d/2))):(c%f!==0&&n+f>c&&(x=d-c%f),l&&(x=parseInt(d/2))),w=x*m,y=x*b,N?S=n*b*-1+y:S=n*m*-1+w,v===!0){var E,T=r&&r.node;if(E=n+Bl(t),_=T&&T.childNodes[E],S=_?_.offsetLeft*-1:0,l===!0){E=s?n+Bl(t):n,_=T&&T.children[E],S=0;for(var O=0;O<E;O++)S-=T&&T.children[O]&&T.children[O].offsetWidth;S-=parseInt(t.centerPadding),S+=_&&(p-_.offsetWidth)/2}}return S},Bl=re.getPreClones=function(t){return t.unslick||!t.infinite?0:t.variableWidth?t.slideCount:t.slidesToShow+(t.centerMode?1:0)},C4=re.getPostClones=function(t){return t.unslick||!t.infinite?0:t.slideCount},P4=re.getTotalSlides=function(t){return t.slideCount===1?1:Bl(t)+t.slideCount+C4(t)},E4=re.siblingDirection=function(t){return t.targetSlide>t.currentSlide?t.targetSlide>t.currentSlide+T4(t)?"left":"right":t.targetSlide<t.currentSlide-L4(t)?"right":"left"},T4=re.slidesOnRight=function(t){var n=t.slidesToShow,r=t.centerMode,s=t.rtl,l=t.centerPadding;if(r){var c=(n-1)/2+1;return parseInt(l)>0&&(c+=1),s&&n%2===0&&(c+=1),c}return s?0:n-1},L4=re.slidesOnLeft=function(t){var n=t.slidesToShow,r=t.centerMode,s=t.rtl,l=t.centerPadding;if(r){var c=(n-1)/2+1;return parseInt(l)>0&&(c+=1),!s&&n%2===0&&(c+=1),c}return s?n-1:0};re.canUseDOM=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};var O4=re.validSettings=Object.keys(w4.default);function A4(e){return O4.reduce(function(t,n){return e.hasOwnProperty(n)&&(t[n]=e[n]),t},{})}var Vu={};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.Track=void 0;var Nr=F1(j),gf=F1(Zu),vf=re;function F1(e){return e&&e.__esModule?e:{default:e}}function Cs(e){"@babel/helpers - typeof";return Cs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cs(e)}function Vh(){return Vh=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vh.apply(this,arguments)}function I4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function R4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,H1(r.key),r)}}function z4(e,t,n){return t&&R4(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function M4(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Gh(e,t)}function Gh(e,t){return Gh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},Gh(e,t)}function $4(e){var t=U1();return function(){var r=Ec(e),s;if(t){var l=Ec(this).constructor;s=Reflect.construct(r,arguments,l)}else s=r.apply(this,arguments);return D4(this,s)}}function D4(e,t){if(t&&(Cs(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Yh(e)}function Yh(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U1(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(U1=function(){return!!e})()}function Ec(e){return Ec=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ec(e)}function fy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Ut(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?fy(Object(n),!0).forEach(function(r){Kh(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kh(e,t,n){return t=H1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function H1(e){var t=B4(e,"string");return Cs(t)=="symbol"?t:String(t)}function B4(e,t){if(Cs(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Cs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var yf=function(t){var n,r,s,l,c;t.rtl?c=t.slideCount-1-t.index:c=t.index,s=c<0||c>=t.slideCount,t.centerMode?(l=Math.floor(t.slidesToShow/2),r=(c-t.currentSlide)%t.slideCount===0,c>t.currentSlide-l-1&&c<=t.currentSlide+l&&(n=!0)):n=t.currentSlide<=c&&c<t.currentSlide+t.slidesToShow;var d;t.targetSlide<0?d=t.targetSlide+t.slideCount:t.targetSlide>=t.slideCount?d=t.targetSlide-t.slideCount:d=t.targetSlide;var f=c===d;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":s,"slick-current":f}},F4=function(t){var n={};return(t.variableWidth===void 0||t.variableWidth===!1)&&(n.width=t.slideWidth),t.fade&&(n.position="relative",t.vertical?n.top=-t.index*parseInt(t.slideHeight):n.left=-t.index*parseInt(t.slideWidth),n.opacity=t.currentSlide===t.index?1:0,n.zIndex=t.currentSlide===t.index?999:998,t.useCSS&&(n.transition="opacity "+t.speed+"ms "+t.cssEase+", visibility "+t.speed+"ms "+t.cssEase)),n},xf=function(t,n){return t.key||n},U4=function(t){var n,r=[],s=[],l=[],c=Nr.default.Children.count(t.children),d=(0,vf.lazyStartIndex)(t),f=(0,vf.lazyEndIndex)(t);return Nr.default.Children.forEach(t.children,function(m,p){var v,b={message:"children",index:p,slidesToScroll:t.slidesToScroll,currentSlide:t.currentSlide};!t.lazyLoad||t.lazyLoad&&t.lazyLoadedList.indexOf(p)>=0?v=m:v=Nr.default.createElement("div",null);var k=F4(Ut(Ut({},t),{},{index:p})),N=v.props.className||"",w=yf(Ut(Ut({},t),{},{index:p}));if(r.push(Nr.default.cloneElement(v,{key:"original"+xf(v,p),"data-index":p,className:(0,gf.default)(w,N),tabIndex:"-1","aria-hidden":!w["slick-active"],style:Ut(Ut({outline:"none"},v.props.style||{}),k),onClick:function(y){v.props&&v.props.onClick&&v.props.onClick(y),t.focusOnSelect&&t.focusOnSelect(b)}})),t.infinite&&t.fade===!1){var S=c-p;S<=(0,vf.getPreClones)(t)&&(n=-S,n>=d&&(v=m),w=yf(Ut(Ut({},t),{},{index:n})),s.push(Nr.default.cloneElement(v,{key:"precloned"+xf(v,n),"data-index":n,tabIndex:"-1",className:(0,gf.default)(w,N),"aria-hidden":!w["slick-active"],style:Ut(Ut({},v.props.style||{}),k),onClick:function(y){v.props&&v.props.onClick&&v.props.onClick(y),t.focusOnSelect&&t.focusOnSelect(b)}}))),n=c+p,n<f&&(v=m),w=yf(Ut(Ut({},t),{},{index:n})),l.push(Nr.default.cloneElement(v,{key:"postcloned"+xf(v,n),"data-index":n,tabIndex:"-1",className:(0,gf.default)(w,N),"aria-hidden":!w["slick-active"],style:Ut(Ut({},v.props.style||{}),k),onClick:function(y){v.props&&v.props.onClick&&v.props.onClick(y),t.focusOnSelect&&t.focusOnSelect(b)}}))}}),t.rtl?s.concat(r,l).reverse():s.concat(r,l)};Vu.Track=function(e){M4(n,e);var t=$4(n);function n(){var r;I4(this,n);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];return r=t.call.apply(t,[this].concat(l)),Kh(Yh(r),"node",null),Kh(Yh(r),"handleRef",function(d){r.node=d}),r}return z4(n,[{key:"render",value:function(){var s=U4(this.props),l=this.props,c=l.onMouseEnter,d=l.onMouseOver,f=l.onMouseLeave,m={onMouseEnter:c,onMouseOver:d,onMouseLeave:f};return Nr.default.createElement("div",Vh({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},m),s)}}]),n}(Nr.default.PureComponent);var Gu={};function Ps(e){"@babel/helpers - typeof";return Ps=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ps(e)}Object.defineProperty(Gu,"__esModule",{value:!0});Gu.Dots=void 0;var ml=q1(j),H4=q1(Zu),hy=re;function q1(e){return e&&e.__esModule?e:{default:e}}function my(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function q4(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?my(Object(n),!0).forEach(function(r){W4(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):my(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function W4(e,t,n){return t=W1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Z4(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function V4(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,W1(r.key),r)}}function G4(e,t,n){return t&&V4(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function W1(e){var t=Y4(e,"string");return Ps(t)=="symbol"?t:String(t)}function Y4(e,t){if(Ps(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ps(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function K4(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Xh(e,t)}function Xh(e,t){return Xh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},Xh(e,t)}function X4(e){var t=Z1();return function(){var r=Tc(e),s;if(t){var l=Tc(this).constructor;s=Reflect.construct(r,arguments,l)}else s=r.apply(this,arguments);return Q4(this,s)}}function Q4(e,t){if(t&&(Ps(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return J4(e)}function J4(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Z1(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Z1=function(){return!!e})()}function Tc(e){return Tc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Tc(e)}var eA=function(t){var n;return t.infinite?n=Math.ceil(t.slideCount/t.slidesToScroll):n=Math.ceil((t.slideCount-t.slidesToShow)/t.slidesToScroll)+1,n};Gu.Dots=function(e){K4(n,e);var t=X4(n);function n(){return Z4(this,n),t.apply(this,arguments)}return G4(n,[{key:"clickHandler",value:function(s,l){l.preventDefault(),this.props.clickHandler(s)}},{key:"render",value:function(){for(var s=this.props,l=s.onMouseEnter,c=s.onMouseOver,d=s.onMouseLeave,f=s.infinite,m=s.slidesToScroll,p=s.slidesToShow,v=s.slideCount,b=s.currentSlide,k=eA({slideCount:v,slidesToScroll:m,slidesToShow:p,infinite:f}),N={onMouseEnter:l,onMouseOver:c,onMouseLeave:d},w=[],S=0;S<k;S++){var _=(S+1)*m-1,y=f?_:(0,hy.clamp)(_,0,v-1),x=y-(m-1),E=f?x:(0,hy.clamp)(x,0,v-1),T=(0,H4.default)({"slick-active":f?b>=E&&b<=y:b===E}),O={message:"dots",index:S,slidesToScroll:m,currentSlide:b},I=this.clickHandler.bind(this,O);w=w.concat(ml.default.createElement("li",{key:S,className:T},ml.default.cloneElement(this.props.customPaging(S),{onClick:I})))}return ml.default.cloneElement(this.props.appendDots(w),q4({className:this.props.dotsClass},N))}}]),n}(ml.default.PureComponent);var Es={};function Ts(e){"@babel/helpers - typeof";return Ts=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ts(e)}Object.defineProperty(Es,"__esModule",{value:!0});Es.PrevArrow=Es.NextArrow=void 0;var ds=G1(j),V1=G1(Zu),tA=re;function G1(e){return e&&e.__esModule?e:{default:e}}function Lc(){return Lc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lc.apply(this,arguments)}function py(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Oc(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?py(Object(n),!0).forEach(function(r){nA(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):py(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function nA(e,t,n){return t=X1(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Y1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function rA(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,X1(r.key),r)}}function K1(e,t,n){return t&&rA(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function X1(e){var t=iA(e,"string");return Ts(t)=="symbol"?t:String(t)}function iA(e,t){if(Ts(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Ts(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}function Q1(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Qh(e,t)}function Qh(e,t){return Qh=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},Qh(e,t)}function J1(e){var t=e2();return function(){var r=Ac(e),s;if(t){var l=Ac(this).constructor;s=Reflect.construct(r,arguments,l)}else s=r.apply(this,arguments);return sA(this,s)}}function sA(e,t){if(t&&(Ts(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return oA(e)}function oA(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function e2(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(e2=function(){return!!e})()}function Ac(e){return Ac=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Ac(e)}Es.PrevArrow=function(e){Q1(n,e);var t=J1(n);function n(){return Y1(this,n),t.apply(this,arguments)}return K1(n,[{key:"clickHandler",value:function(s,l){l&&l.preventDefault(),this.props.clickHandler(s,l)}},{key:"render",value:function(){var s={"slick-arrow":!0,"slick-prev":!0},l=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(s["slick-disabled"]=!0,l=null);var c={key:"0","data-role":"none",className:(0,V1.default)(s),style:{display:"block"},onClick:l},d={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},f;return this.props.prevArrow?f=ds.default.cloneElement(this.props.prevArrow,Oc(Oc({},c),d)):f=ds.default.createElement("button",Lc({key:"0",type:"button"},c)," ","Previous"),f}}]),n}(ds.default.PureComponent);Es.NextArrow=function(e){Q1(n,e);var t=J1(n);function n(){return Y1(this,n),t.apply(this,arguments)}return K1(n,[{key:"clickHandler",value:function(s,l){l&&l.preventDefault(),this.props.clickHandler(s,l)}},{key:"render",value:function(){var s={"slick-arrow":!0,"slick-next":!0},l=this.clickHandler.bind(this,{message:"next"});(0,tA.canGoNext)(this.props)||(s["slick-disabled"]=!0,l=null);var c={key:"1","data-role":"none",className:(0,V1.default)(s),style:{display:"block"},onClick:l},d={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},f;return this.props.nextArrow?f=ds.default.cloneElement(this.props.nextArrow,Oc(Oc({},c),d)):f=ds.default.createElement("button",Lc({key:"1",type:"button"},c)," ","Next"),f}}]),n}(ds.default.PureComponent);var t2=function(){if(typeof Map<"u")return Map;function e(t,n){var r=-1;return t.some(function(s,l){return s[0]===n?(r=l,!0):!1}),r}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var r=e(this.__entries__,n),s=this.__entries__[r];return s&&s[1]},t.prototype.set=function(n,r){var s=e(this.__entries__,n);~s?this.__entries__[s][1]=r:this.__entries__.push([n,r])},t.prototype.delete=function(n){var r=this.__entries__,s=e(r,n);~s&&r.splice(s,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var s=0,l=this.__entries__;s<l.length;s++){var c=l[s];n.call(r,c[1],c[0])}},t}()}(),Jh=typeof window<"u"&&typeof document<"u"&&window.document===document,Ic=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),aA=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Ic):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),lA=2;function cA(e,t){var n=!1,r=!1,s=0;function l(){n&&(n=!1,e()),r&&d()}function c(){aA(l)}function d(){var f=Date.now();if(n){if(f-s<lA)return;r=!0}else n=!0,r=!1,setTimeout(c,t);s=f}return d}var uA=20,dA=["top","right","bottom","left","width","height","size","weight"],fA=typeof MutationObserver<"u",hA=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=cA(this.refresh.bind(this),uA)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,r=n.indexOf(t);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!Jh||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),fA?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Jh||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,r=n===void 0?"":n,s=dA.some(function(l){return!!~r.indexOf(l)});s&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),n2=function(e,t){for(var n=0,r=Object.keys(t);n<r.length;n++){var s=r[n];Object.defineProperty(e,s,{value:t[s],enumerable:!1,writable:!1,configurable:!0})}return e},Ls=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||Ic},r2=Yu(0,0,0,0);function Rc(e){return parseFloat(e)||0}function gy(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(r,s){var l=e["border-"+s+"-width"];return r+Rc(l)},0)}function mA(e){for(var t=["top","right","bottom","left"],n={},r=0,s=t;r<s.length;r++){var l=s[r],c=e["padding-"+l];n[l]=Rc(c)}return n}function pA(e){var t=e.getBBox();return Yu(0,0,t.width,t.height)}function gA(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return r2;var r=Ls(e).getComputedStyle(e),s=mA(r),l=s.left+s.right,c=s.top+s.bottom,d=Rc(r.width),f=Rc(r.height);if(r.boxSizing==="border-box"&&(Math.round(d+l)!==t&&(d-=gy(r,"left","right")+l),Math.round(f+c)!==n&&(f-=gy(r,"top","bottom")+c)),!yA(e)){var m=Math.round(d+l)-t,p=Math.round(f+c)-n;Math.abs(m)!==1&&(d-=m),Math.abs(p)!==1&&(f-=p)}return Yu(s.left,s.top,d,f)}var vA=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof Ls(e).SVGGraphicsElement}:function(e){return e instanceof Ls(e).SVGElement&&typeof e.getBBox=="function"}}();function yA(e){return e===Ls(e).document.documentElement}function xA(e){return Jh?vA(e)?pA(e):gA(e):r2}function wA(e){var t=e.x,n=e.y,r=e.width,s=e.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,c=Object.create(l.prototype);return n2(c,{x:t,y:n,width:r,height:s,top:n,right:t+r,bottom:s+n,left:t}),c}function Yu(e,t,n,r){return{x:e,y:t,width:n,height:r}}var bA=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Yu(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=xA(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),_A=function(){function e(t,n){var r=wA(n);n2(this,{target:t,contentRect:r})}return e}(),SA=function(){function e(t,n,r){if(this.activeObservations_=[],this.observations_=new t2,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=r}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Ls(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new bA(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof Ls(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new _A(r.target,r.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),i2=typeof WeakMap<"u"?new WeakMap:new t2,s2=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=hA.getInstance(),r=new SA(t,n,this);i2.set(this,r)}return e}();["observe","unobserve","disconnect"].forEach(function(e){s2.prototype[e]=function(){var t;return(t=i2.get(this))[e].apply(t,arguments)}});var kA=function(){return typeof Ic.ResizeObserver<"u"?Ic.ResizeObserver:s2}();const jA=Object.freeze(Object.defineProperty({__proto__:null,default:kA},Symbol.toStringTag,{value:"Module"})),NA=US(jA);Object.defineProperty(Wu,"__esModule",{value:!0});Wu.InnerSlider=void 0;var Lt=ja(j),CA=ja(T1),PA=ja(y4),EA=ja(Zu),We=re,TA=Vu,LA=Gu,vy=Es,OA=ja(NA);function ja(e){return e&&e.__esModule?e:{default:e}}function Si(e){"@babel/helpers - typeof";return Si=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Si(e)}function zc(){return zc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zc.apply(this,arguments)}function AA(e,t){if(e==null)return{};var n=IA(e,t),r,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(s=0;s<l.length;s++)r=l[s],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function IA(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,l;for(l=0;l<r.length;l++)s=r[l],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function yy(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yy(Object(n),!0).forEach(function(r){be(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yy(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function RA(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function zA(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,a2(r.key),r)}}function MA(e,t,n){return t&&zA(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function $A(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&em(e,t)}function em(e,t){return em=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,s){return r.__proto__=s,r},em(e,t)}function DA(e){var t=o2();return function(){var r=Mc(e),s;if(t){var l=Mc(this).constructor;s=Reflect.construct(r,arguments,l)}else s=r.apply(this,arguments);return BA(this,s)}}function BA(e,t){if(t&&(Si(t)==="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return we(e)}function we(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o2(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(o2=function(){return!!e})()}function Mc(e){return Mc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},Mc(e)}function be(e,t,n){return t=a2(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a2(e){var t=FA(e,"string");return Si(t)=="symbol"?t:String(t)}function FA(e,t){if(Si(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Si(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}Wu.InnerSlider=function(e){$A(n,e);var t=DA(n);function n(r){var s;RA(this,n),s=t.call(this,r),be(we(s),"listRefHandler",function(c){return s.list=c}),be(we(s),"trackRefHandler",function(c){return s.track=c}),be(we(s),"adaptHeight",function(){if(s.props.adaptiveHeight&&s.list){var c=s.list.querySelector('[data-index="'.concat(s.state.currentSlide,'"]'));s.list.style.height=(0,We.getHeight)(c)+"px"}}),be(we(s),"componentDidMount",function(){if(s.props.onInit&&s.props.onInit(),s.props.lazyLoad){var c=(0,We.getOnDemandLazySlides)(de(de({},s.props),s.state));c.length>0&&(s.setState(function(f){return{lazyLoadedList:f.lazyLoadedList.concat(c)}}),s.props.onLazyLoad&&s.props.onLazyLoad(c))}var d=de({listRef:s.list,trackRef:s.track},s.props);s.updateState(d,!0,function(){s.adaptHeight(),s.props.autoplay&&s.autoPlay("update")}),s.props.lazyLoad==="progressive"&&(s.lazyLoadTimer=setInterval(s.progressiveLazyLoad,1e3)),s.ro=new OA.default(function(){s.state.animating?(s.onWindowResized(!1),s.callbackTimers.push(setTimeout(function(){return s.onWindowResized()},s.props.speed))):s.onWindowResized()}),s.ro.observe(s.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(f){f.onfocus=s.props.pauseOnFocus?s.onSlideFocus:null,f.onblur=s.props.pauseOnFocus?s.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",s.onWindowResized):window.attachEvent("onresize",s.onWindowResized)}),be(we(s),"componentWillUnmount",function(){s.animationEndCallback&&clearTimeout(s.animationEndCallback),s.lazyLoadTimer&&clearInterval(s.lazyLoadTimer),s.callbackTimers.length&&(s.callbackTimers.forEach(function(c){return clearTimeout(c)}),s.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",s.onWindowResized):window.detachEvent("onresize",s.onWindowResized),s.autoplayTimer&&clearInterval(s.autoplayTimer),s.ro.disconnect()}),be(we(s),"componentDidUpdate",function(c){if(s.checkImagesLoad(),s.props.onReInit&&s.props.onReInit(),s.props.lazyLoad){var d=(0,We.getOnDemandLazySlides)(de(de({},s.props),s.state));d.length>0&&(s.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(d)}}),s.props.onLazyLoad&&s.props.onLazyLoad(d))}s.adaptHeight();var f=de(de({listRef:s.list,trackRef:s.track},s.props),s.state),m=s.didPropsChange(c);m&&s.updateState(f,m,function(){s.state.currentSlide>=Lt.default.Children.count(s.props.children)&&s.changeSlide({message:"index",index:Lt.default.Children.count(s.props.children)-s.props.slidesToShow,currentSlide:s.state.currentSlide}),s.props.autoplay?s.autoPlay("update"):s.pause("paused")})}),be(we(s),"onWindowResized",function(c){s.debouncedResize&&s.debouncedResize.cancel(),s.debouncedResize=(0,PA.default)(function(){return s.resizeWindow(c)},50),s.debouncedResize()}),be(we(s),"resizeWindow",function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,d=!!(s.track&&s.track.node);if(d){var f=de(de({listRef:s.list,trackRef:s.track},s.props),s.state);s.updateState(f,c,function(){s.props.autoplay?s.autoPlay("update"):s.pause("paused")}),s.setState({animating:!1}),clearTimeout(s.animationEndCallback),delete s.animationEndCallback}}),be(we(s),"updateState",function(c,d,f){var m=(0,We.initializedState)(c);c=de(de(de({},c),m),{},{slideIndex:m.currentSlide});var p=(0,We.getTrackLeft)(c);c=de(de({},c),{},{left:p});var v=(0,We.getTrackCSS)(c);(d||Lt.default.Children.count(s.props.children)!==Lt.default.Children.count(c.children))&&(m.trackStyle=v),s.setState(m,f)}),be(we(s),"ssrInit",function(){if(s.props.variableWidth){var c=0,d=0,f=[],m=(0,We.getPreClones)(de(de(de({},s.props),s.state),{},{slideCount:s.props.children.length})),p=(0,We.getPostClones)(de(de(de({},s.props),s.state),{},{slideCount:s.props.children.length}));s.props.children.forEach(function(I){f.push(I.props.style.width),c+=I.props.style.width});for(var v=0;v<m;v++)d+=f[f.length-1-v],c+=f[f.length-1-v];for(var b=0;b<p;b++)c+=f[b];for(var k=0;k<s.state.currentSlide;k++)d+=f[k];var N={width:c+"px",left:-d+"px"};if(s.props.centerMode){var w="".concat(f[s.state.currentSlide],"px");N.left="calc(".concat(N.left," + (100% - ").concat(w,") / 2 ) ")}return{trackStyle:N}}var S=Lt.default.Children.count(s.props.children),_=de(de(de({},s.props),s.state),{},{slideCount:S}),y=(0,We.getPreClones)(_)+(0,We.getPostClones)(_)+S,x=100/s.props.slidesToShow*y,E=100/y,T=-E*((0,We.getPreClones)(_)+s.state.currentSlide)*x/100;s.props.centerMode&&(T+=(100-E*x/100)/2);var O={width:x+"%",left:T+"%"};return{slideWidth:E+"%",trackStyle:O}}),be(we(s),"checkImagesLoad",function(){var c=s.list&&s.list.querySelectorAll&&s.list.querySelectorAll(".slick-slide img")||[],d=c.length,f=0;Array.prototype.forEach.call(c,function(m){var p=function(){return++f&&f>=d&&s.onWindowResized()};if(!m.onclick)m.onclick=function(){return m.parentNode.focus()};else{var v=m.onclick;m.onclick=function(b){v(b),m.parentNode.focus()}}m.onload||(s.props.lazyLoad?m.onload=function(){s.adaptHeight(),s.callbackTimers.push(setTimeout(s.onWindowResized,s.props.speed))}:(m.onload=p,m.onerror=function(){p(),s.props.onLazyLoadError&&s.props.onLazyLoadError()}))})}),be(we(s),"progressiveLazyLoad",function(){for(var c=[],d=de(de({},s.props),s.state),f=s.state.currentSlide;f<s.state.slideCount+(0,We.getPostClones)(d);f++)if(s.state.lazyLoadedList.indexOf(f)<0){c.push(f);break}for(var m=s.state.currentSlide-1;m>=-(0,We.getPreClones)(d);m--)if(s.state.lazyLoadedList.indexOf(m)<0){c.push(m);break}c.length>0?(s.setState(function(p){return{lazyLoadedList:p.lazyLoadedList.concat(c)}}),s.props.onLazyLoad&&s.props.onLazyLoad(c)):s.lazyLoadTimer&&(clearInterval(s.lazyLoadTimer),delete s.lazyLoadTimer)}),be(we(s),"slideHandler",function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=s.props,m=f.asNavFor,p=f.beforeChange,v=f.onLazyLoad,b=f.speed,k=f.afterChange,N=s.state.currentSlide,w=(0,We.slideHandler)(de(de(de({index:c},s.props),s.state),{},{trackRef:s.track,useCSS:s.props.useCSS&&!d})),S=w.state,_=w.nextState;if(S){p&&p(N,S.currentSlide);var y=S.lazyLoadedList.filter(function(x){return s.state.lazyLoadedList.indexOf(x)<0});v&&y.length>0&&v(y),!s.props.waitForAnimate&&s.animationEndCallback&&(clearTimeout(s.animationEndCallback),k&&k(N),delete s.animationEndCallback),s.setState(S,function(){m&&s.asNavForIndex!==c&&(s.asNavForIndex=c,m.innerSlider.slideHandler(c)),_&&(s.animationEndCallback=setTimeout(function(){var x=_.animating,E=AA(_,["animating"]);s.setState(E,function(){s.callbackTimers.push(setTimeout(function(){return s.setState({animating:x})},10)),k&&k(S.currentSlide),delete s.animationEndCallback})},b))})}}),be(we(s),"changeSlide",function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,f=de(de({},s.props),s.state),m=(0,We.changeSlide)(f,c);if(!(m!==0&&!m)&&(d===!0?s.slideHandler(m,d):s.slideHandler(m),s.props.autoplay&&s.autoPlay("update"),s.props.focusOnSelect)){var p=s.list.querySelectorAll(".slick-current");p[0]&&p[0].focus()}}),be(we(s),"clickHandler",function(c){s.clickable===!1&&(c.stopPropagation(),c.preventDefault()),s.clickable=!0}),be(we(s),"keyHandler",function(c){var d=(0,We.keyHandler)(c,s.props.accessibility,s.props.rtl);d!==""&&s.changeSlide({message:d})}),be(we(s),"selectHandler",function(c){s.changeSlide(c)}),be(we(s),"disableBodyScroll",function(){var c=function(f){f=f||window.event,f.preventDefault&&f.preventDefault(),f.returnValue=!1};window.ontouchmove=c}),be(we(s),"enableBodyScroll",function(){window.ontouchmove=null}),be(we(s),"swipeStart",function(c){s.props.verticalSwiping&&s.disableBodyScroll();var d=(0,We.swipeStart)(c,s.props.swipe,s.props.draggable);d!==""&&s.setState(d)}),be(we(s),"swipeMove",function(c){var d=(0,We.swipeMove)(c,de(de(de({},s.props),s.state),{},{trackRef:s.track,listRef:s.list,slideIndex:s.state.currentSlide}));d&&(d.swiping&&(s.clickable=!1),s.setState(d))}),be(we(s),"swipeEnd",function(c){var d=(0,We.swipeEnd)(c,de(de(de({},s.props),s.state),{},{trackRef:s.track,listRef:s.list,slideIndex:s.state.currentSlide}));if(d){var f=d.triggerSlideHandler;delete d.triggerSlideHandler,s.setState(d),f!==void 0&&(s.slideHandler(f),s.props.verticalSwiping&&s.enableBodyScroll())}}),be(we(s),"touchEnd",function(c){s.swipeEnd(c),s.clickable=!0}),be(we(s),"slickPrev",function(){s.callbackTimers.push(setTimeout(function(){return s.changeSlide({message:"previous"})},0))}),be(we(s),"slickNext",function(){s.callbackTimers.push(setTimeout(function(){return s.changeSlide({message:"next"})},0))}),be(we(s),"slickGoTo",function(c){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(c=Number(c),isNaN(c))return"";s.callbackTimers.push(setTimeout(function(){return s.changeSlide({message:"index",index:c,currentSlide:s.state.currentSlide},d)},0))}),be(we(s),"play",function(){var c;if(s.props.rtl)c=s.state.currentSlide-s.props.slidesToScroll;else if((0,We.canGoNext)(de(de({},s.props),s.state)))c=s.state.currentSlide+s.props.slidesToScroll;else return!1;s.slideHandler(c)}),be(we(s),"autoPlay",function(c){s.autoplayTimer&&clearInterval(s.autoplayTimer);var d=s.state.autoplaying;if(c==="update"){if(d==="hovered"||d==="focused"||d==="paused")return}else if(c==="leave"){if(d==="paused"||d==="focused")return}else if(c==="blur"&&(d==="paused"||d==="hovered"))return;s.autoplayTimer=setInterval(s.play,s.props.autoplaySpeed+50),s.setState({autoplaying:"playing"})}),be(we(s),"pause",function(c){s.autoplayTimer&&(clearInterval(s.autoplayTimer),s.autoplayTimer=null);var d=s.state.autoplaying;c==="paused"?s.setState({autoplaying:"paused"}):c==="focused"?(d==="hovered"||d==="playing")&&s.setState({autoplaying:"focused"}):d==="playing"&&s.setState({autoplaying:"hovered"})}),be(we(s),"onDotsOver",function(){return s.props.autoplay&&s.pause("hovered")}),be(we(s),"onDotsLeave",function(){return s.props.autoplay&&s.state.autoplaying==="hovered"&&s.autoPlay("leave")}),be(we(s),"onTrackOver",function(){return s.props.autoplay&&s.pause("hovered")}),be(we(s),"onTrackLeave",function(){return s.props.autoplay&&s.state.autoplaying==="hovered"&&s.autoPlay("leave")}),be(we(s),"onSlideFocus",function(){return s.props.autoplay&&s.pause("focused")}),be(we(s),"onSlideBlur",function(){return s.props.autoplay&&s.state.autoplaying==="focused"&&s.autoPlay("blur")}),be(we(s),"render",function(){var c=(0,EA.default)("slick-slider",s.props.className,{"slick-vertical":s.props.vertical,"slick-initialized":!0}),d=de(de({},s.props),s.state),f=(0,We.extractObject)(d,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),m=s.props.pauseOnHover;f=de(de({},f),{},{onMouseEnter:m?s.onTrackOver:null,onMouseLeave:m?s.onTrackLeave:null,onMouseOver:m?s.onTrackOver:null,focusOnSelect:s.props.focusOnSelect&&s.clickable?s.selectHandler:null});var p;if(s.props.dots===!0&&s.state.slideCount>=s.props.slidesToShow){var v=(0,We.extractObject)(d,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),b=s.props.pauseOnDotsHover;v=de(de({},v),{},{clickHandler:s.changeSlide,onMouseEnter:b?s.onDotsLeave:null,onMouseOver:b?s.onDotsOver:null,onMouseLeave:b?s.onDotsLeave:null}),p=Lt.default.createElement(LA.Dots,v)}var k,N,w=(0,We.extractObject)(d,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);w.clickHandler=s.changeSlide,s.props.arrows&&(k=Lt.default.createElement(vy.PrevArrow,w),N=Lt.default.createElement(vy.NextArrow,w));var S=null;s.props.vertical&&(S={height:s.state.listHeight});var _=null;s.props.vertical===!1?s.props.centerMode===!0&&(_={padding:"0px "+s.props.centerPadding}):s.props.centerMode===!0&&(_={padding:s.props.centerPadding+" 0px"});var y=de(de({},S),_),x=s.props.touchMove,E={className:"slick-list",style:y,onClick:s.clickHandler,onMouseDown:x?s.swipeStart:null,onMouseMove:s.state.dragging&&x?s.swipeMove:null,onMouseUp:x?s.swipeEnd:null,onMouseLeave:s.state.dragging&&x?s.swipeEnd:null,onTouchStart:x?s.swipeStart:null,onTouchMove:s.state.dragging&&x?s.swipeMove:null,onTouchEnd:x?s.touchEnd:null,onTouchCancel:s.state.dragging&&x?s.swipeEnd:null,onKeyDown:s.props.accessibility?s.keyHandler:null},T={className:c,dir:"ltr",style:s.props.style};return s.props.unslick&&(E={className:"slick-list"},T={className:c}),Lt.default.createElement("div",T,s.props.unslick?"":k,Lt.default.createElement("div",zc({ref:s.listRefHandler},E),Lt.default.createElement(TA.Track,zc({ref:s.trackRefHandler},f),s.props.children)),s.props.unslick?"":N,s.props.unslick?"":p)}),s.list=null,s.track=null,s.state=de(de({},CA.default),{},{currentSlide:s.props.initialSlide,targetSlide:s.props.initialSlide?s.props.initialSlide:0,slideCount:Lt.default.Children.count(s.props.children)}),s.callbackTimers=[],s.clickable=!0,s.debouncedResize=null;var l=s.ssrInit();return s.state=de(de({},s.state),l),s}return MA(n,[{key:"didPropsChange",value:function(s){for(var l=!1,c=0,d=Object.keys(this.props);c<d.length;c++){var f=d[c];if(!s.hasOwnProperty(f)){l=!0;break}if(!(Si(s[f])==="object"||typeof s[f]=="function"||isNaN(s[f]))&&s[f]!==this.props[f]){l=!0;break}}return l||Lt.default.Children.count(this.props.children)!==Lt.default.Children.count(s.children)}}]),n}(Lt.default.Component);var UA=function(e){return e.replace(/[A-Z]/g,function(t){return"-"+t.toLowerCase()}).toLowerCase()},HA=UA,qA=HA,WA=function(e){var t=/[height|width]$/;return t.test(e)},xy=function(e){var t="",n=Object.keys(e);return n.forEach(function(r,s){var l=e[r];r=qA(r),WA(r)&&typeof l=="number"&&(l=l+"px"),l===!0?t+=r:l===!1?t+="not "+r:t+="("+r+": "+l+")",s<n.length-1&&(t+=" and ")}),t},ZA=function(e){var t="";return typeof e=="string"?e:e instanceof Array?(e.forEach(function(n,r){t+=xy(n),r<e.length-1&&(t+=", ")}),t):xy(e)},VA=ZA,wf,wy;function GA(){if(wy)return wf;wy=1;function e(t){this.options=t,!t.deferSetup&&this.setup()}return e.prototype={constructor:e,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},wf=e,wf}var bf,by;function l2(){if(by)return bf;by=1;function e(r,s){var l=0,c=r.length,d;for(l;l<c&&(d=s(r[l],l),d!==!1);l++);}function t(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return bf={isFunction:n,isArray:t,each:e},bf}var _f,_y;function YA(){if(_y)return _f;_y=1;var e=GA(),t=l2().each;function n(r,s){this.query=r,this.isUnconditional=s,this.handlers=[],this.mql=window.matchMedia(r);var l=this;this.listener=function(c){l.mql=c.currentTarget||c,l.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var s=new e(r);this.handlers.push(s),this.matches()&&s.on()},removeHandler:function(r){var s=this.handlers;t(s,function(l,c){if(l.equals(r))return l.destroy(),!s.splice(c,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){t(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";t(this.handlers,function(s){s[r]()})}},_f=n,_f}var Sf,Sy;function KA(){if(Sy)return Sf;Sy=1;var e=YA(),t=l2(),n=t.each,r=t.isFunction,s=t.isArray;function l(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return l.prototype={constructor:l,register:function(c,d,f){var m=this.queries,p=f&&this.browserIsIncapable;return m[c]||(m[c]=new e(c,p)),r(d)&&(d={match:d}),s(d)||(d=[d]),n(d,function(v){r(v)&&(v={match:v}),m[c].addHandler(v)}),this},unregister:function(c,d){var f=this.queries[c];return f&&(d?f.removeHandler(d):(f.clear(),delete this.queries[c])),this}},Sf=l,Sf}var kf,ky;function XA(){if(ky)return kf;ky=1;var e=KA();return kf=new e,kf}(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=c(j),n=Wu,r=c(VA),s=c(zp),l=re;function c(F){return F&&F.__esModule?F:{default:F}}function d(F){"@babel/helpers - typeof";return d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},d(F)}function f(){return f=Object.assign?Object.assign.bind():function(F){for(var z=1;z<arguments.length;z++){var B=arguments[z];for(var Z in B)Object.prototype.hasOwnProperty.call(B,Z)&&(F[Z]=B[Z])}return F},f.apply(this,arguments)}function m(F,z){var B=Object.keys(F);if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(F);z&&(Z=Z.filter(function(Q){return Object.getOwnPropertyDescriptor(F,Q).enumerable})),B.push.apply(B,Z)}return B}function p(F){for(var z=1;z<arguments.length;z++){var B=arguments[z]!=null?arguments[z]:{};z%2?m(Object(B),!0).forEach(function(Z){T(F,Z,B[Z])}):Object.getOwnPropertyDescriptors?Object.defineProperties(F,Object.getOwnPropertyDescriptors(B)):m(Object(B)).forEach(function(Z){Object.defineProperty(F,Z,Object.getOwnPropertyDescriptor(B,Z))})}return F}function v(F,z){if(!(F instanceof z))throw new TypeError("Cannot call a class as a function")}function b(F,z){for(var B=0;B<z.length;B++){var Z=z[B];Z.enumerable=Z.enumerable||!1,Z.configurable=!0,"value"in Z&&(Z.writable=!0),Object.defineProperty(F,O(Z.key),Z)}}function k(F,z,B){return z&&b(F.prototype,z),Object.defineProperty(F,"prototype",{writable:!1}),F}function N(F,z){if(typeof z!="function"&&z!==null)throw new TypeError("Super expression must either be null or a function");F.prototype=Object.create(z&&z.prototype,{constructor:{value:F,writable:!0,configurable:!0}}),Object.defineProperty(F,"prototype",{writable:!1}),z&&w(F,z)}function w(F,z){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(Z,Q){return Z.__proto__=Q,Z},w(F,z)}function S(F){var z=x();return function(){var Z=E(F),Q;if(z){var K=E(this).constructor;Q=Reflect.construct(Z,arguments,K)}else Q=Z.apply(this,arguments);return _(this,Q)}}function _(F,z){if(z&&(d(z)==="object"||typeof z=="function"))return z;if(z!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y(F)}function y(F){if(F===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return F}function x(){try{var F=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(x=function(){return!!F})()}function E(F){return E=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(B){return B.__proto__||Object.getPrototypeOf(B)},E(F)}function T(F,z,B){return z=O(z),z in F?Object.defineProperty(F,z,{value:B,enumerable:!0,configurable:!0,writable:!0}):F[z]=B,F}function O(F){var z=I(F,"string");return d(z)=="symbol"?z:String(z)}function I(F,z){if(d(F)!="object"||!F)return F;var B=F[Symbol.toPrimitive];if(B!==void 0){var Z=B.call(F,z);if(d(Z)!="object")return Z;throw new TypeError("@@toPrimitive must return a primitive value.")}return(z==="string"?String:Number)(F)}var q=(0,l.canUseDOM)()&&XA();e.default=function(F){N(B,F);var z=S(B);function B(Z){var Q;return v(this,B),Q=z.call(this,Z),T(y(Q),"innerSliderRefHandler",function(K){return Q.innerSlider=K}),T(y(Q),"slickPrev",function(){return Q.innerSlider.slickPrev()}),T(y(Q),"slickNext",function(){return Q.innerSlider.slickNext()}),T(y(Q),"slickGoTo",function(K){var te=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return Q.innerSlider.slickGoTo(K,te)}),T(y(Q),"slickPause",function(){return Q.innerSlider.pause("paused")}),T(y(Q),"slickPlay",function(){return Q.innerSlider.autoPlay("play")}),Q.state={breakpoint:null},Q._responsiveMediaHandlers=[],Q}return k(B,[{key:"media",value:function(Q,K){q.register(Q,K),this._responsiveMediaHandlers.push({query:Q,handler:K})}},{key:"componentDidMount",value:function(){var Q=this;if(this.props.responsive){var K=this.props.responsive.map(function(ee){return ee.breakpoint});K.sort(function(ee,V){return ee-V}),K.forEach(function(ee,V){var P;V===0?P=(0,r.default)({minWidth:0,maxWidth:ee}):P=(0,r.default)({minWidth:K[V-1]+1,maxWidth:ee}),(0,l.canUseDOM)()&&Q.media(P,function(){Q.setState({breakpoint:ee})})});var te=(0,r.default)({minWidth:K.slice(-1)[0]});(0,l.canUseDOM)()&&this.media(te,function(){Q.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(Q){q.unregister(Q.query,Q.handler)})}},{key:"render",value:function(){var Q=this,K,te;this.state.breakpoint?(te=this.props.responsive.filter(function(ce){return ce.breakpoint===Q.state.breakpoint}),K=te[0].settings==="unslick"?"unslick":p(p(p({},s.default),this.props),te[0].settings)):K=p(p({},s.default),this.props),K.centerMode&&(K.slidesToScroll>1,K.slidesToScroll=1),K.fade&&(K.slidesToShow>1,K.slidesToScroll>1,K.slidesToShow=1,K.slidesToScroll=1);var ee=t.default.Children.toArray(this.props.children);ee=ee.filter(function(ce){return typeof ce=="string"?!!ce.trim():!!ce}),K.variableWidth&&(K.rows>1||K.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),K.variableWidth=!1);for(var V=[],P=null,M=0;M<ee.length;M+=K.rows*K.slidesPerRow){for(var D=[],Y=M;Y<M+K.rows*K.slidesPerRow;Y+=K.slidesPerRow){for(var R=[],ne=Y;ne<Y+K.slidesPerRow&&(K.variableWidth&&ee[ne].props.style&&(P=ee[ne].props.style.width),!(ne>=ee.length));ne+=1)R.push(t.default.cloneElement(ee[ne],{key:100*M+10*Y+ne,tabIndex:-1,style:{width:"".concat(100/K.slidesPerRow,"%"),display:"inline-block"}}));D.push(t.default.createElement("div",{key:10*M+Y},R))}K.variableWidth?V.push(t.default.createElement("div",{key:M,style:{width:P}},D)):V.push(t.default.createElement("div",{key:M},D))}if(K==="unslick"){var oe="regular slider "+(this.props.className||"");return t.default.createElement("div",{className:oe},ee)}else V.length<=K.slidesToShow&&!K.infinite&&(K.unslick=!0);return t.default.createElement(n.InnerSlider,f({style:this.props.style,ref:this.innerSliderRefHandler},(0,l.filterSettings)(K)),V)}}]),B}(t.default.Component)})(E1);(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(E1);function n(r){return r&&r.__esModule?r:{default:r}}e.default=t.default})(P1);const jy=rm(P1),QA=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[s,l]=j.useState(null),c=Et();j.useEffect(()=>{(async()=>{try{r(!0),l(null);const p=await Re(pe.BRANDS);p.data&&p.data.featuredBrands?t(p.data.featuredBrands):t([])}catch{l("Failed to load brands"),t([])}finally{r(!1)}})()},[]);const d={dots:!1,infinite:!0,speed:500,slidesToShow:6,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:5,slidesToScroll:1}},{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]},f=()=>o.jsx("div",{className:"m-1",children:o.jsxs("div",{className:"partner-list shimmer-container",children:[o.jsx("div",{className:"shimmer-image"}),o.jsx("div",{className:"shimmer-text"})]})});return o.jsxs("div",{className:"container",children:[o.jsx("style",{children:`
        .brands-section {
          padding: 3rem 0;
        }
        
        .section-head {
          margin-bottom: 2.5rem;
        }
        
        .h3style {
          font-size: 2.5rem;
          font-weight: 700;
          color: #30574e;
          margin-bottom: 1rem;
          text-align: center;
        }
        
        .wt-separator {
          height: 3px;
          width: 80px;
          margin: 0 auto 0.5rem;
          border-radius: 2px;
        }
        
        .wt-separator2 {
          height: 1px;
          width: 40px;
          margin: 0 auto;
          border-radius: 1px;
        }
        
        .partner-list {
          background: white;
          border-radius: 16px;
          padding: 1.5rem;
          text-align: center;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        
        .partner-list:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        }
        
        .partner-list::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #30574e, #0AAD0A);
          border-radius: 16px 16px 0 0;
        }
        
        .partner-list img {
          width: 80px;
          height: 80px;
          object-fit: contain;
          border-radius: 12px;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }
        
        .partner-list:hover img {
          transform: scale(1.1);
        }
        
        .card-title {
          font-size: 1rem;
          font-weight: 600;
          color: #30574e;
          margin: 0;
          line-height: 1.3;
          text-align: center;
        }
        
        /* Shimmer Loading Styles */
        .shimmer-container {
          position: relative;
          overflow: hidden;
        }
        
        .shimmer-image {
          width: 80px;
          height: 80px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 12px;
          margin-bottom: 1rem;
        }
        
        .shimmer-text {
          width: 80%;
          height: 16px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 8px;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        /* Error State */
        .error-container {
          text-align: center;
          padding: 3rem 1rem;
          color: #dc3545;
        }
        
        .error-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          opacity: 0.7;
        }
        
        /* Responsive Design */
        @media (max-width: 1200px) {
          .h3style {
            font-size: 2.2rem;
          }
        }
        
        @media (max-width: 768px) {
          .brands-section {
            padding: 2rem 0;
          }
          
          .h3style {
            font-size: 1.8rem;
          }
          
          .partner-list {
            height: 180px;
            padding: 1rem;
          }
          
          .partner-list img {
            width: 60px;
            height: 60px;
          }
          
          .card-title {
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 576px) {
          .h3style {
            font-size: 1.5rem;
          }
          
          .partner-list {
            height: 160px;
            padding: 0.75rem;
          }
          
          .partner-list img {
            width: 50px;
            height: 50px;
          }
          
          .card-title {
            font-size: 0.8rem;
          }
        }
        
        /* Slick Slider Customization */
        .slick-slide {
          padding: 0 0.5rem;
        }
        
        .slick-track {
          display: flex;
          align-items: stretch;
        }
        
        .slick-slide > div {
          height: 100%;
        }
        
        .slick-slide > div > div {
          height: 100%;
        }
      `}),o.jsxs("div",{className:"brands-section",children:[o.jsx("div",{className:"col-12",children:o.jsx("div",{className:"mb-6",children:o.jsxs("div",{className:"section-head text-center",children:[o.jsx("h3",{className:"h3style",children:"Top Brands"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),n?o.jsx(jy,{...d,children:[...Array(8)].map((m,p)=>o.jsx(f,{},p))}):s?o.jsxs("div",{className:"error-container",children:[o.jsx("div",{className:"error-icon",children:"⚠️"}),o.jsx("h4",{children:"Oops! Something went wrong"}),o.jsx("p",{children:s}),o.jsx("button",{onClick:()=>window.location.reload(),className:"btn btn-primary mt-3",children:"Try Again"})]}):e.length===0?o.jsxs("div",{className:"error-container",children:[o.jsx("div",{className:"error-icon",children:"📦"}),o.jsx("h4",{children:"No Brands Available"}),o.jsx("p",{children:"We're working on adding more brands. Check back soon!"})]}):o.jsx(jy,{...d,children:e.map(m=>o.jsx("div",{className:"m-1",children:o.jsx(xe,{to:`/brand?id=${m._id}`,className:"text-inherit","aria-label":`Go to ${m.brandName} brand`,children:o.jsxs("div",{className:"partner-list text-center",children:[o.jsx("img",{src:c(m.brandLogo),alt:m.brandName,className:"img-fluid",style:{objectFit:"contain",maxHeight:"80px"},onError:p=>{p.target.src="/assets/img/no_image.jpg"}}),o.jsx("h6",{className:"card-title mt-2",children:m.brandName})]})})},m._id))})]})]})},JA=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[s,l]=j.useState(null),c=Et();return j.useEffect(()=>{r(!0),l(null),Re(pe.FEATURED_PRODUCTS).then(d=>{if(d.data&&d.data.products){const f=d.data.products.map(m=>{var p,v,b,k,N,w,S,_,y,x,E;return{id:m._id,name:m.productName,description:m.description,image:c((p=m.productImageUrl)==null?void 0:p[0]),price:m.sell_price||m.variants[0].sell_price,mrp:m.mrp||m.variants[0].mrp,category:((b=(v=m.category)==null?void 0:v[0])==null?void 0:b.name)||"Category",category_id:((N=(k=m.category)==null?void 0:k[0])==null?void 0:N._id)||"",brand:((w=m.brand_Name)==null?void 0:w.name)||"Brand",brandId:((S=m.brand_Name)==null?void 0:S._id)||"",unit:((_=m.unit)==null?void 0:_.name)||"",tax:m.tax,rating:4.5,review_count:0,discount_percentage:((x=(y=m.variants)==null?void 0:y[0])==null?void 0:x.discountValue)||0,is_hot:m.feature_product||!1,is_new:!1,sku:m.sku,status:m.status,productImageUrl:m.productImageUrl,inCart:((E=m.inCart)==null?void 0:E.status)||!1,variants:m.variants||[],inventory:m.inventory||[],isVeg:m.isVeg}});t(f)}else l("Failed to fetch popular products")}).catch(d=>l(d.message)).finally(()=>r(!1))},[]),n?o.jsx("section",{className:"my-lg-14 my-8",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Featured Products",children:"Featured Products"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 text-center",children:o.jsx(_a,{count:10})})})]})}):s?o.jsx("section",{className:"my-lg-14 my-8",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Featured Products",children:"Featured Products"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 text-center",children:o.jsxs("div",{className:"alert alert-warning",role:"alert",children:[o.jsx("i",{className:"fa fa-exclamation-triangle me-2"}),s]})})})]})}):o.jsx("div",{children:o.jsx("section",{className:"my-lg-14 my-8",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Featured Products",children:"Featured Products"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsx(ba,{products:e})]})})})},eI=()=>{const[e,t]=j.useState(!1),n=()=>{window.pageYOffset>300?t(!0):t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};j.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]);const[s,l]=j.useState(!0);return j.useEffect(()=>{setTimeout(()=>{l(!1)},1500)},[]),o.jsx("div",{children:o.jsx("div",{children:s?o.jsx("div",{className:"loader-container",children:o.jsx(Vs,{visible:!0,height:"100",width:"100",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperclassName:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#0aad0a"})}):o.jsxs(o.Fragment,{children:[o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"scroll-to-top",children:o.jsx("button",{onClick:r,className:`scroll-to-top-button ${e?"show":""}`,children:"↑"})}),o.jsx(XO,{})]}),o.jsx(o.Fragment,{children:o.jsx("section",{className:"mt-8",children:o.jsx("div",{className:"container ",children:o.jsx("div",{className:"row",children:o.jsx(Il,{direction:"down",children:o.jsx("div",{className:"col-12",children:o.jsxs("div",{className:"bg-light d-lg-flex justify-content-between align-items-center py-6 py-lg-3 px-8 rounded-3 text-center text-lg-start",children:[o.jsxs("div",{className:"d-lg-flex align-items-center",children:[o.jsx("img",{src:n3,alt:"about-icon",className:"img-fluid"}),o.jsxs("div",{className:"ms-lg-4",children:[o.jsx("h1",{className:"fs-2 mb-1",children:"Welcome to Fivlia"}),o.jsx("span",{children:"Download the app and explore everything you need in one place."})]})]}),o.jsx("div",{className:"mt-3 mt-lg-0",children:o.jsx(xe,{to:"https://play.google.com/store/apps/details?id=com.fivlia.user",className:"btn btn-dark",children:"Download Fivlia App"})})]})})})})})})}),o.jsx(o.Fragment,{children:o.jsx(GO,{})}),o.jsx(o.Fragment,{children:o.jsx(e4,{})}),o.jsx(o.Fragment,{children:o.jsx(QA,{})}),o.jsx(o.Fragment,{children:o.jsx(l3,{})}),o.jsx(o.Fragment,{children:o.jsx(JA,{})}),o.jsx(o.Fragment,{children:o.jsx("section",{children:o.jsx("div",{className:"container",style:{background:`url(${r3})no-repeat`,backgroundSize:"cover"},children:o.jsxs("div",{className:"row align-items-center text-center justify-content-center",children:[o.jsx("div",{className:" col-lg-6 col-md-6 fade-in-left",children:o.jsx(Il,{direction:"left",children:o.jsxs("div",{className:"mb-6",children:[o.jsxs("div",{className:"mb-7",children:[o.jsx("h1",{children:"Get the Fivlia app"}),o.jsx("h5",{className:"mb-0",children:"To get the app, open this page on your phone and tap the App Store or Google Play button below."})]}),o.jsx("div",{children:o.jsxs("ul",{className:"list-inline mb-0 mt-2 ",children:[o.jsx("li",{className:"list-inline-item",children:o.jsxs(xe,{to:"https://apps.apple.com/in/app/fivlia-delivery-in-minutes/id6748902989",children:[" ",o.jsx("img",{src:o3,alt:"appstore",style:{width:140}})]})}),o.jsx("li",{className:"list-inline-item",children:o.jsxs(xe,{to:"https://play.google.com/store/apps/details?id=com.fivlia.user",children:[" ",o.jsx("img",{src:s3,alt:"googleplay",style:{width:140}})]})})]})})]})})}),o.jsx("div",{className:" offset-lg-2 col-lg-4 col-md-6 fade-zoom",children:o.jsx(Il,{direction:"right",children:o.jsx("div",{className:"text-lg-start",children:o.jsx("img",{src:i3,alt:"iphone",className:" img-fluid",style:{height:656}})})})})]})})})}),o.jsx(o.Fragment,{})]})})})},tI=()=>{const[e,t]=j.useState({firstName:"",lastName:"",email:"",phone:"",message:""}),n=s=>{const{name:l,value:c}=s.target;t(d=>({...d,[l]:c}))},r=async s=>{s.preventDefault();const{firstName:l,lastName:c,phone:d,message:f}=e;if(!l||!c||!d||!f){Ie.fire({icon:"error",title:"Missing Fields",text:"Please fill in all required fields.",confirmButtonColor:"#dc3545"});return}Ie.fire({title:"Submitting...",text:"Please wait while we submit your message.",allowOutsideClick:!1,allowEscapeKey:!1,didOpen:()=>{Ie.showLoading()}});try{const m=await xn(pe.SAVE_CONTACT_US,e);if(Ie.close(),m.success)Ie.fire({icon:"success",title:"Message Sent!",html:`<p><strong>First Name:</strong> ${e.firstName}</p>`,confirmButtonColor:"#0aad0a"}),t({firstName:"",lastName:"",email:"",phone:"",message:""});else throw new Error("Failed to submit.")}catch{Ie.fire({icon:"error",title:"Submission Failed",text:"There was an error submitting your message. Please try again later.",confirmButtonColor:"#dc3545"})}};return o.jsx("div",{className:"container my-5",children:o.jsx("div",{className:"row justify-content-center",children:o.jsxs("div",{className:"col-lg-8 col-12",children:[o.jsxs("div",{className:"mb-5 text-center",children:[o.jsx("h1",{className:"h3",children:"Contact Us"}),o.jsx("p",{className:"lead",children:"Have a question or need help? Fill out the form below and we'll get back to you as soon as possible."})]}),o.jsxs("form",{className:"row",onSubmit:r,children:[o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["First Name",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",className:"form-control",name:"firstName",placeholder:"Enter your first name",value:e.firstName,onChange:n,required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Last Name",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",className:"form-control",name:"lastName",placeholder:"Enter your last name",value:e.lastName,onChange:n,required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsx("label",{className:"form-label",children:"Email"}),o.jsx("input",{type:"email",className:"form-control",name:"email",placeholder:"Enter your email (optional)",value:e.email,onChange:n})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Phone",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"tel",className:"form-control",name:"phone",placeholder:"Enter your phone number",value:e.phone,onChange:n,required:!0})]}),o.jsxs("div",{className:"col-md-12 mb-4",children:[o.jsxs("label",{className:"form-label",children:["Message",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("textarea",{rows:4,className:"form-control",name:"message",placeholder:"Write your message here",value:e.message,onChange:n,required:!0})]}),o.jsx("div",{className:"col-md-12 text-center",children:o.jsx("button",{style:{width:"70%"},type:"submit",className:"btn btn-primary px-5",children:"Submit"})})]})]})})})},Ti=()=>{const[e,t]=j.useState(!1),n=()=>{window.pageYOffset>300?t(!0):t(!1)},r=()=>{window.scrollTo({top:0,behavior:"smooth"})};return j.useEffect(()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)}),[]),o.jsx("div",{children:o.jsx(o.Fragment,{children:o.jsx("div",{className:"scroll-to-top",children:o.jsx("button",{onClick:r,className:`scroll-to-top-button ${e?"show":""}`,children:"↑"})})})})},nI=({onFilterChange:e,selectedFilters:t={}})=>{const[n,r]=j.useState([]),[s,l]=j.useState(!0),[c,d]=j.useState(null),[f,m]=j.useState("main"),[p,v]=j.useState(null),[b,k]=j.useState(null),[N,w]=j.useState(null),[S,_]=j.useState([]),[y,x]=j.useState({}),E=Yr(),T=Mn(),O=Et(),q=new URLSearchParams(E.search).get("category");j.useEffect(()=>{let P=!0;return l(!0),Re(pe.CATEGORIES).then(M=>{var D;P&&(r(((D=M.data)==null?void 0:D.result)||[]),d(null))}).catch(()=>{P&&d("Failed to load categories")}).finally(()=>{P&&l(!1)}),()=>{P=!1}},[]),j.useEffect(()=>{const P=async()=>{var M,D;try{const Y=await Re(pe.PRODUCTS),R=((M=Y.data)==null?void 0:M.products)||((D=Y.data)==null?void 0:D.result)||[],ne={main:{},subcat:{},subsubcat:{}};R.forEach(oe=>{if(oe.category&&oe.category.length>0){const ce=oe.category[0]._id;ne.main[ce]=(ne.main[ce]||0)+1}oe.subCategory&&oe.subCategory.length>0&&oe.subCategory.forEach(ce=>{const ae=ce._id;ne.subcat[ae]=(ne.subcat[ae]||0)+1}),oe.subSubCategory&&oe.subSubCategory.length>0&&oe.subSubCategory.forEach(ce=>{const ae=ce._id;ne.subsubcat[ae]=(ne.subsubcat[ae]||0)+1})}),x(ne)}catch(Y){console.error("Failed to load product counts:",Y)}};n.length>0&&P()},[n]),j.useEffect(()=>{var P;if(n.length>0)if(t.category&&t.category.length>0){const M=n.find(D=>D._id===t.category[0]);if(M)if(v(M),t.subSubCategory&&t.subSubCategory.length>0){const D=(P=M.subcat)==null?void 0:P.find(Y=>Y._id===t.subCategory[0]);D&&(k(D),m("subsubcat"),_([{name:M.name,id:M._id,level:"main"},{name:D.name,id:D._id,level:"subcat"}]))}else t.subCategory&&t.subCategory.length>0?(m("subcat"),_([{name:M.name,id:M._id,level:"main"}])):(m("subcat"),_([{name:M.name,id:M._id,level:"main"}]))}else if(q){const M=n.find(D=>D._id===q);M&&(v(M),m("subcat"),_([{name:M.name,id:M._id,level:"main"}]),e&&e({category:[q]}))}else m("main"),v(null),k(null),w(null),_([])},[n,q,t]);const F=(P,M)=>{var D;return((D=y[M])==null?void 0:D[P])||0},z=P=>{v(P),m("subcat"),_([{name:P.name,id:P._id,level:"main"}]),k(null),w(null),e&&e({category:[P._id]}),T(`/Shop?category=${P._id}`)},B=P=>{k(P),P.subsubcat&&P.subsubcat.length>0?(m("subsubcat"),w(null),_([{name:p.name,id:p._id,level:"main"},{name:P.name,id:P._id,level:"subcat"}])):(w(null),e&&e({category:[p._id],subCategory:[P._id]}))},Z=P=>{w(P),e&&e({category:[p._id],subCategory:[b._id],subSubCategory:[P._id]})},Q=P=>{P.level==="main"?(m("main"),v(null),k(null),w(null),_([]),e&&e({}),T("/Shop")):P.level==="subcat"&&(m("subcat"),k(null),w(null),_([{name:p.name,id:p._id,level:"main"}]),e&&e({category:[p._id]}))},K=()=>{f==="subsubcat"?(m("subcat"),w(null),_([{name:p.name,id:p._id,level:"main"}]),e&&e({category:[p._id],subCategory:[b._id]})):f==="subcat"&&(m("main"),v(null),k(null),w(null),_([]),e&&e({}),T("/Shop"))},te=()=>o.jsx("div",{className:"category-grid",children:n.map(P=>{const M=F(P._id,"main");return o.jsx("div",{className:"category-item",onClick:()=>z(P),children:o.jsxs("div",{className:"category-content",children:[o.jsx("img",{src:O(P.image),alt:P.name,className:"category-image",onError:D=>handleImageError(D)}),o.jsxs("div",{className:"category-info",children:[o.jsx("span",{className:"category-name",children:P.name}),o.jsxs("span",{className:"category-count",children:[M," ",M===1?"product":"products"]})]})]})},P._id)})}),ee=()=>{var P;return o.jsxs("div",{className:"subcat-container",children:[o.jsxs("div",{className:"breadcrumb-nav",children:[o.jsxs("div",{className:"back-link",onClick:K,children:[o.jsx("i",{className:"fa fa-arrow-left"})," Back"]}),o.jsx("div",{className:"breadcrumb",children:S.map((M,D)=>o.jsxs("span",{children:[o.jsx("span",{className:"breadcrumb-item",onClick:()=>Q(M),children:M.name}),D<S.length-1&&o.jsx("span",{className:"breadcrumb-separator",children:">"})]},D))})]}),o.jsx("div",{className:"subcat-grid",children:(P=p==null?void 0:p.subcat)==null?void 0:P.map(M=>{const D=(b==null?void 0:b._id)===M._id,Y=F(M._id,"subcat");return o.jsx("div",{className:`subcat-item${D?" selected":""}`,onClick:()=>B(M),children:o.jsxs("div",{className:"subcat-content",children:[o.jsx("img",{src:O(M.image),alt:M.name,className:"subcat-image",onError:R=>handleImageError(R)}),o.jsxs("div",{className:"subcat-info",children:[o.jsx("span",{className:"subcat-name",children:M.name}),o.jsxs("span",{className:"subcat-count",children:[Y," ",Y===1?"product":"products"]})]})]})},M._id)})})]})},V=()=>{var P;return o.jsxs("div",{className:"subsubcat-container",children:[o.jsxs("div",{className:"breadcrumb-nav",children:[o.jsxs("div",{className:"back-link",onClick:K,children:[o.jsx("i",{className:"fa fa-arrow-left"})," Back"]}),o.jsx("div",{className:"breadcrumb",children:S.map((M,D)=>o.jsxs("span",{children:[o.jsx("span",{className:"breadcrumb-item",onClick:()=>Q(M),children:M.name}),D<S.length-1&&o.jsx("span",{className:"breadcrumb-separator",children:">"})]},D))})]}),o.jsx("div",{className:"subsubcat-grid",children:(P=b==null?void 0:b.subsubcat)==null?void 0:P.map(M=>{const D=(N==null?void 0:N._id)===M._id,Y=F(M._id,"subsubcat");return o.jsx("div",{className:`subsubcat-item${D?" selected":""}`,onClick:()=>Z(M),children:o.jsxs("div",{className:"subsubcat-content",children:[o.jsx("img",{src:O(M.image),alt:M.name,className:"subsubcat-image",onError:R=>handleImageError(R)}),o.jsxs("div",{className:"subsubcat-info",children:[o.jsx("span",{className:"subsubcat-name",children:M.name}),o.jsxs("span",{className:"subsubcat-count",children:[Y," ",Y===1?"product":"products"]})]})]})},M._id)})})]})};return o.jsxs("div",{className:"col-md-3 sidebar-categories-container",children:[o.jsx("h5",{className:"mb-3 mt-8",children:"Categories"}),s&&o.jsxs("div",{className:"loading-container",children:[o.jsx("div",{className:"shimmer-title shimmer-bg",style:{width:"100%",height:70,margin:"24px 0 18px 0",borderRadius:6}}),o.jsx("div",{className:"category-grid",children:Array.from({length:6}).map((P,M)=>o.jsx("div",{className:"category-item shimmer",children:o.jsxs("div",{className:"shimmer-content",children:[o.jsx("div",{className:"shimmer-image shimmer-bg",style:{width:60,height:60,borderRadius:8}}),o.jsxs("div",{className:"shimmer-info",children:[o.jsx("div",{className:"shimmer-text shimmer-bg",style:{width:"70%",height:18,borderRadius:4}}),o.jsx("div",{className:"shimmer-text shimmer-bg",style:{width:"50%",height:14,marginTop:6,borderRadius:4}})]})]})},M))})]}),c&&o.jsx("div",{className:"text-danger py-3",children:c}),!s&&!c&&n.length===0&&o.jsx("div",{className:"text-center py-3",children:"No categories found."}),!s&&!c&&f==="main"&&te(),!s&&!c&&f==="subcat"&&ee(),!s&&!c&&f==="subsubcat"&&V(),o.jsx("style",{children:`
        .sidebar-categories-container {
          background: none !important;
          box-shadow: none !important;
          padding: 0;
        }
        
        .category-grid, .subcat-grid, .subsubcat-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        
        .category-item, .subcat-item, .subsubcat-item {
          border: 1px solid #e0e0e0;
          border-radius: 10px;
          padding: 12px;
          transition: all 0.2s ease;
          cursor: pointer;
          background: #fff;
        }
        
        .category-item:hover, .subcat-item:hover, .subsubcat-item:hover {
           border-color: #0aad0a;
           box-shadow: 0 4px 8px rgba(10, 173, 10, 0.15);
           transform: translateY(-2px);
         }
         
         .subcat-item.selected, .subsubcat-item.selected {
           border-color: #0aad0a;
           background: #e8f5e8;
           box-shadow: 0 2px 8px rgba(10, 173, 10, 0.2);
         }
        
        .category-content, .subcat-content, .subsubcat-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .category-image {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        
        .subcat-image {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        
        .subsubcat-image {
          width: 45px;
          height: 45px;
          object-fit: cover;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
        }
        
        .category-info, .subcat-info, .subsubcat-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .category-name, .subcat-name, .subsubcat-name {
          font-weight: 600;
          font-size: 1rem;
          color: #333;
        }
        
        .category-count, .subcat-count, .subsubcat-count {
          font-size: 0.85rem;
          color: #666;
        }
        
        .breadcrumb-nav {
           margin-bottom: 16px;
           padding: 12px;
           background: #f8f9fa;
           border-radius: 8px;
           border: 1px solid #e0e0e0;
         }
         
         .back-link {
           color: #0aad0a;
           cursor: pointer;
           font-weight: 500;
           margin-bottom: 8px;
           display: flex;
           align-items: center;
           gap: 6px;
           font-size: 0.9rem;
         }
         
         .back-link:hover {
           color: #088a08;
         }
         
         .breadcrumb {
           font-size: 0.9rem;
           color: #666;
           display: flex;
           align-items: center;
           flex-wrap: wrap;
           margin-bottom: 0;
         }
         
         .breadcrumb-item {
           color: #0aad0a;
           cursor: pointer;
           text-decoration: underline;
         }
         
         .breadcrumb-item:hover {
           color: #088a08;
         }
         
         .breadcrumb-separator {
           margin: 0 6px;
           color: #999;
         }
        
                 .loading-container {
           margin-bottom: 20px;
         }
         
         .shimmer-content {
           display: flex;
           align-items: center;
           gap: 12px;
         }
         
         .shimmer-info {
           flex: 1;
           display: flex;
           flex-direction: column;
           gap: 4px;
         }
        
        .shimmer-bg {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
          background-size: 400% 100%;
          animation: shimmer 1.2s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        
                 /* Responsive Design */
         @media (max-width: 768px) {
           .category-image {
             width: 50px;
             height: 50px;
           }
           .subcat-image {
             width: 45px;
             height: 45px;
           }
           .subsubcat-image {
             width: 40px;
             height: 40px;
           }
           .category-name, .subcat-name, .subsubcat-name {
             font-size: 0.9rem;
           }
           .category-count, .subcat-count, .subsubcat-count {
             font-size: 0.8rem;
           }
                       .breadcrumb-nav {
              padding: 10px;
            }
            .back-link {
              font-size: 0.85rem;
            }
           .breadcrumb {
             font-size: 0.9rem;
           }
           .breadcrumb-item {
             padding: 3px 6px;
           }
         }
        
        @media (max-width: 576px) {
          .category-item, .subcat-item, .subsubcat-item {
            padding: 10px;
          }
          .category-content, .subcat-content, .subsubcat-content {
            gap: 10px;
          }
        }
      `})]})},rI=({filters:e,selectedFilter:t,onFilterChange:n,className:r=""})=>{const[s,l]=j.useState([]),[c,d]=j.useState(!1);j.useEffect(()=>{e&&e.length>0?l(e):l([])},[e]);const f=m=>{const p=m.target.value;n(p==="all"?null:p)};return s.length===0?null:o.jsx("div",{className:`filter-dropdown-container ${r}`,style:{display:"flex",alignItems:"center",gap:"12px"},children:o.jsxs("div",{className:"filter-dropdown-wrapper",style:{display:"flex",alignItems:"center",gap:"8px",position:"relative"},children:[o.jsx("label",{htmlFor:"filter-select",className:"filter-label",style:{fontWeight:"500",color:"#666",fontSize:"0.9rem",whiteSpace:"nowrap"},children:"Filter by:"}),o.jsxs("select",{id:"filter-select",className:"filter-select",value:t||"all",onChange:f,disabled:c,style:{padding:"8px 12px",border:"1px solid #ddd",borderRadius:"6px",background:"#fff",fontSize:"0.9rem",color:"#333",cursor:"pointer",minWidth:"150px",transition:"all 0.2s ease"},children:[o.jsx("option",{value:"all",children:"All"}),s.map(m=>o.jsx("optgroup",{label:m.Filter_name,children:m.Filter.map(p=>o.jsx("option",{value:p._id,children:p.name},p._id))},m._id))]}),t&&o.jsx("button",{className:"clear-filter-btn",onClick:()=>n(null),title:"Clear filter",style:{background:"#ff4757",color:"white",border:"none",borderRadius:"50%",width:"24px",height:"24px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",fontSize:"0.8rem",transition:"all 0.2s ease"},children:o.jsx("i",{className:"fa fa-times"})})]})})},iI=({onPriceChange:e,maxPrice:t=1e4,currentPriceRange:n=[0,1e4]})=>{const[r,s]=j.useState(n),[l,c]=j.useState(!1),[d,f]=j.useState(!1),[m,p]=j.useState(n),v=j.useRef(null),b=j.useRef(null),k=j.useRef(null),N=j.useRef(n);j.useEffect(()=>{s(n),p(n),N.current=n},[n]);const w=j.useCallback((q,F)=>{let z;return(...B)=>{clearTimeout(z),z=setTimeout(()=>q.apply(void 0,B),F)}},[]),S=j.useCallback(w(q=>{e(q)},300),[e]),_=j.useCallback((q,F)=>{const z=parseInt(q.target.value),Z=[...N.current];F===0?Z[0]=Math.min(z,Z[1]):Z[1]=Math.max(z,Z[0]),N.current=Z,s(Z),p(Z),k.current&&clearTimeout(k.current),d||(k.current=setTimeout(()=>{S(Z)},100))},[d,S]),y=j.useCallback(()=>{f(!1),k.current&&clearTimeout(k.current),S(N.current)},[S]),x=j.useCallback(()=>{f(!0)},[]),E=j.useCallback(()=>{const q=[0,t];s(q),p(q),N.current=q,e(q)},[t,e]),T=j.useCallback(()=>{const q=N.current,F=q[0]/t*100,z=q[1]/t*100;return`linear-gradient(to right, #e0e0e0 0%, #e0e0e0 ${F}%, #0aad0a ${F}%, #0aad0a ${z}%, #e0e0e0 ${z}%, #e0e0e0 100%)`},[t]),O=j.useCallback(()=>{b.current&&clearTimeout(b.current),c(!0)},[]),I=j.useCallback(()=>{b.current=setTimeout(()=>{c(!1)},200)},[]);return j.useEffect(()=>{const q=F=>{v.current&&!v.current.contains(F.target)&&c(!1)};return l&&document.addEventListener("mousedown",q),()=>{document.removeEventListener("mousedown",q),b.current&&clearTimeout(b.current),k.current&&clearTimeout(k.current)}},[l]),o.jsxs("div",{className:"price-filter-wrapper",ref:v,onMouseEnter:O,onMouseLeave:I,children:[o.jsxs("button",{className:"price-filter-btn",onClick:()=>c(!l),type:"button",children:[o.jsx("i",{className:"fa fa-filter me-2"}),"Filter by Price",o.jsxs("span",{className:"price-badge",children:["₹",m[0].toLocaleString()," - ₹",m[1].toLocaleString()]}),o.jsx("i",{className:"fa fa-chevron-down ms-2"})]}),l&&o.jsxs("div",{className:"price-popup",children:[o.jsxs("div",{className:"price-popup-header",children:[o.jsx("h6",{className:"mb-0",children:"Price Range"}),o.jsx("button",{className:"btn btn-sm btn-outline-secondary reset-btn",onClick:E,type:"button",children:"Reset"})]}),o.jsx("div",{className:"price-range-display mb-3",children:o.jsxs("div",{className:"price-range-text",children:["₹",m[0].toLocaleString()," - ₹",m[1].toLocaleString()]})}),o.jsx("div",{className:"price-slider-container",children:o.jsxs("div",{className:"price-slider-track",style:{background:T()},children:[o.jsx("input",{type:"range",className:"price-slider price-slider-min",min:"0",max:t,value:r[0],onChange:q=>_(q,0),onMouseDown:x,onMouseUp:y,onTouchStart:x,onTouchEnd:y,step:"100"}),o.jsx("input",{type:"range",className:"price-slider price-slider-max",min:"0",max:t,value:r[1],onChange:q=>_(q,1),onMouseDown:x,onMouseUp:y,onTouchStart:x,onTouchEnd:y,step:"100"})]})})]}),o.jsx("style",{children:`
        .price-filter-wrapper {
          position: relative;
          display: inline-block;
        }

        .price-filter-btn {
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 6px;
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          color: #333;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          transition: all 0.2s ease;
          min-width: 280px;
        }

        .price-filter-btn:hover {
          border-color: #0aad0a;
          box-shadow: 0 2px 4px rgba(10, 173, 10, 0.15);
        }

        .price-badge {
          background: #0aad0a;
          color: #fff;
          padding: 0.125rem 0.5rem;
          border-radius: 12px;
          font-size: 0.75rem;
          min-width: 120px;
          text-align: center;
          display: inline-block;
        }

        .price-popup {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: #fff;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          padding: 1rem;
          margin-top: 0.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          z-index: 1000;
          min-width: 280px;
        }

        .price-popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }

        .reset-btn {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          border-color: #0aad0a;
          color: #0aad0a;
        }

        .reset-btn:hover {
          background-color: #0aad0a;
          color: #fff;
        }

        .price-range-text {
          text-align: center;
          font-weight: 600;
          color: #0aad0a;
          font-size: 1rem;
          min-width: 200px;
        }

        .price-slider-container {
          position: relative;
          height: 40px;
          display: flex;
          align-items: center;
        }

        .price-slider-track {
          position: relative;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background: #e0e0e0;
        }

        .price-slider {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          height: 4px;
          background: transparent;
          pointer-events: none;
          -webkit-appearance: none;
        }

        .price-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0aad0a;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          pointer-events: auto;
        }

        .price-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #0aad0a;
          cursor: pointer;
          border: 2px solid #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
          pointer-events: auto;
        }

        .price-slider::-webkit-slider-track,
        .price-slider::-moz-range-track {
          background: transparent;
        }

        .price-slider-min {
          z-index: 2;
        }

        .price-slider-max {
          z-index: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .price-popup {
            min-width: 250px;
            right: -50px;
          }

          .price-badge {
            min-width: 100px;
            font-size: 0.7rem;
          }

          .price-range-text {
            min-width: 180px;
          }
        }

        @media (max-width: 576px) {
          .price-filter-btn {
            padding: 0.375rem 0.75rem;
            font-size: 0.8rem;
          }

          .price-popup {
            min-width: 220px;
            right: -30px;
          }

          .price-range-text {
            min-width: 160px;
            font-size: 0.9rem;
          }

          .price-badge {
            min-width: 90px;
            font-size: 0.65rem;
          }
        }
      `})]})};function sI(){return new URLSearchParams(Yr().search)}function oI(){var te,ee,V;const t=sI().get("category"),[n,r]=j.useState(!0),[s,l]=j.useState(null),[c,d]=j.useState([]),[f,m]=j.useState([]),[p,v]=j.useState({category:[],subCategory:[],subSubCategory:[]}),[b,k]=j.useState(null),[N,w]=j.useState([]),[S,_]=j.useState(1),[y,x]=j.useState([]),[E,T]=j.useState([0,1e4]),O=20,I=Et();j.useEffect(()=>{r(!0),l(null),k(null),w([]),T([0,1e4]),z({category:[],subCategory:[],subSubCategory:[]});let P=pe.PRODUCTS;t&&(P+=`&id=${t}`),Re(P).then(M=>{const Y=(M.data.products||M.data.result||[]).map(R=>{var oe;const ne=R.variants&&R.variants[0]?R.variants[0]:{};return{id:R._id,name:R.productName||R.name,image:I(R.productImageUrl&&R.productImageUrl[0]),price:ne.sell_price||R.sell_price||R.price,mrp:ne.mrp||R.mrp,discount_percentage:ne.discountValue||R.discount_percentage||0,category:R.category&&R.category[0]&&R.category[0].name,category_id:R.category&&R.category[0]&&R.category[0]._id,subCategory:R.subCategory||[],subSubCategory:R.subSubCategory||[],brand:R.brand_Name&&R.brand_Name.name,brandId:((oe=R.brand_Name)==null?void 0:oe._id)||"",rating:R.rating&&(R.rating.rate||R.rating)||0,review_count:R.rating&&R.rating.users||0,is_hot:R.is_hot||R.feature_product||!1,is_new:R.is_new||!1,description:R.description||"",productImageUrl:R.productImageUrl,variants:R.variants||[],filter:R.filter||[],inventory:R.inventory||[],isVeg:R.isVeg,sku:R.sku}});d(Y),m(Y),M.data.filter&&Array.isArray(M.data.filter)&&M.data.filter.length>0?w(M.data.filter):w([])}).catch(M=>l(M.message||"Failed to fetch products")).finally(()=>r(!1))},[t]),j.useEffect(()=>{c.length>0&&F()},[b,E,c]),j.useEffect(()=>{T([0,1e4])},[p.category]),j.useEffect(()=>{Re(pe.CATEGORIES).then(P=>{var M;x(((M=P.data)==null?void 0:M.result)||[])}).catch(P=>{})},[]);const q=P=>{k(P),_(1),F()},F=()=>{let P=c;if(p.category&&p.category.length>0&&(P=P.filter(M=>p.category.includes(M.category_id))),p.subCategory&&p.subCategory.length>0&&(P=P.filter(M=>M.subCategory&&M.subCategory.some(D=>p.subCategory.includes(D._id||D.id)))),p.subSubCategory&&p.subSubCategory.length>0&&(P=P.filter(M=>M.subSubCategory&&M.subSubCategory.some(D=>p.subSubCategory.includes(D._id||D.id)))),E&&E.length===2){const[M,D]=E;(M>0||D<1e4)&&(P=P.filter(Y=>{const R=Y.price||0;return R>=M&&R<=D}))}b&&(P=P.filter(M=>!M.filter||!Array.isArray(M.filter)?!1:M.filter.some(D=>D.selected&&D.selected.some(Y=>Y._id===b)))),m(P)},z=P=>{v(P),_(1),F()},B=Math.ceil(f.length/O),Z=f.slice((S-1)*O,S*O),Q=P=>{P>=1&&P<=B&&_(P)};let K="All Products";if(p.category&&p.category.length>0){const P=y.find(M=>M._id===p.category[0]);if(P)if(p.subSubCategory&&p.subSubCategory.length>0){const M=(te=P.subcat)==null?void 0:te.find(D=>D._id===p.subCategory[0]);if(M){const D=(ee=M.subsubcat)==null?void 0:ee.find(Y=>Y._id===p.subSubCategory[0]);D&&(K=D.name)}}else if(p.subCategory&&p.subCategory.length>0){const M=(V=P.subcat)==null?void 0:V.find(D=>D._id===p.subCategory[0]);M&&(K=M.name)}else K=P.name}return o.jsxs("div",{children:[o.jsx(Ti,{}),o.jsx("div",{className:"container ",children:o.jsxs("div",{className:"row",children:[o.jsx(nI,{onFilterChange:z,selectedFilters:p}),o.jsxs("div",{className:"col-lg-9 col-md-8",style:{paddingTop:"2rem",paddingRight:0},children:[o.jsx("div",{className:"card mb-4 bg-light border-0",children:o.jsx("div",{className:"card-body p-4",children:o.jsxs("div",{className:"d-flex justify-content-between align-items-center flex-wrap",children:[o.jsx("h1",{className:"mb-0 mb-md-0",children:K}),o.jsxs("div",{className:"ms-auto mt-3 mt-md-0 d-flex align-items-center gap-3 flex-wrap",children:[o.jsx(iI,{onPriceChange:T,maxPrice:1e4,currentPriceRange:E}),o.jsx(rI,{filters:N,selectedFilter:b,onFilterChange:q})]})]})})}),n?o.jsx(_a,{count:12}):s?o.jsx("div",{className:"text-center text-danger py-5",children:s}):o.jsx(ba,{products:Z}),B>1&&o.jsx("nav",{"aria-label":"Product pagination",className:"mt-4",children:o.jsxs("ul",{className:"pagination justify-content-center flex-wrap",children:[o.jsx("li",{className:`page-item${S===1?" disabled":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>Q(S-1),"aria-label":"Previous",disabled:S===1,children:o.jsx("i",{className:"fa fa-chevron-left"})})}),(()=>{const P=[],M="...";let Y=Math.max(2,S-2),R=Math.min(B-1,S+2);S<=3&&(R=Math.min(1+2*2,B-1)),S>=B-2&&(Y=Math.max(B-2*2,2)),P.push(o.jsx("li",{className:`page-item${S===1?" active":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>Q(1),children:"1"})},1)),Y>2&&P.push(o.jsx("li",{className:"page-item disabled",children:o.jsx("span",{className:"page-link",children:M})},"dots-left"));for(let ne=Y;ne<=R;ne++)P.push(o.jsx("li",{className:`page-item${S===ne?" active":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>Q(ne),children:ne})},ne));return R<B-1&&P.push(o.jsx("li",{className:"page-item disabled",children:o.jsx("span",{className:"page-link",children:M})},"dots-right")),B>1&&P.push(o.jsx("li",{className:`page-item${S===B?" active":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>Q(B),children:B})},B)),P})(),o.jsx("li",{className:`page-item${S===B?" disabled":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>Q(S+1),"aria-label":"Next",disabled:S===B,children:o.jsx("i",{className:"fa fa-chevron-right"})})})]})})]})]})})]})}const aI=({formData:e,setFormData:t})=>{const[n,r]=j.useState(e.area||""),[s,l]=j.useState([]),[c,d]=j.useState(!1),[f,m]=j.useState(""),[p,v]=j.useState(!1),b=j.useRef(null);j.useEffect(()=>{if(b.current&&clearTimeout(b.current),p){l([]);return}return n.length>2?(d(!0),m(""),b.current=setTimeout(async()=>{try{let w=await jb(n);w!=null&&w.length||(w=[]),l(w)}catch{m("Error fetching suggestions"),l([])}finally{d(!1)}},300)):l([]),()=>clearTimeout(b.current)},[n,p]);const k=async w=>{d(!0),m("");try{const S=await Nb(w);t(_=>({..._,area:S.address})),r(S.address),l([]),v(!0)}catch{m("Failed to fetch place details")}finally{d(!1)}},N=w=>{r(w),t(S=>({...S,area:w})),p&&v(!1)};return o.jsxs("div",{className:"mb-3 position-relative",children:[o.jsx("input",{type:"text",className:"form-control",name:"area",placeholder:"Area *",value:n,onChange:w=>N(w.target.value),autoComplete:"off"}),c&&o.jsx("div",{style:{padding:"0.5rem",color:"#6c757d"},children:"Searching..."}),f&&o.jsx("div",{style:{color:"#dc3545",fontSize:"0.8rem",marginTop:"0.25rem"},children:f}),s.length>0&&o.jsx("div",{className:"suggestions-container",children:s.map((w,S)=>{var _;return o.jsxs("div",{className:"suggestion-item",onClick:()=>k(w.place_id),children:[o.jsx("div",{className:"suggestion-icon",children:o.jsxs("svg",{width:"16",height:"16",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",viewBox:"0 0 24 24",children:[o.jsx("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),o.jsx("circle",{cx:"12",cy:"10",r:"3"})]})}),o.jsx("div",{children:o.jsx("div",{className:"suggestion-text",children:((_=w.structured_formatting)==null?void 0:_.main_text)||w.description.split(",")[0]})})]},w.place_id||S)})}),o.jsx("style",{children:`
        .suggestions-container {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          max-height: 250px;
          overflow-y: auto;
          background: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 0 0 8px 8px;
          padding: 0.5rem;
          margin-top: -1px;
          z-index: 1000;
        }
        .suggestion-item {
          padding: 0.75rem;
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
          font-size: 0.9rem;
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          margin-bottom: 0.25rem;
          background: transparent;
        }
        .suggestion-item:last-child {
          margin-bottom: 0;
        }
        .suggestion-item:hover {
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transform: translateX(4px);
        }
        .suggestion-icon {
          color: #0aad0a;
          flex-shrink: 0;
        }
        .suggestion-text {
          flex: 1;
          color: #333;
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .suggestion-subtext {
          font-size: 0.8rem;
          color: #6c757d;
          margin-top: 0.25rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `})]})},lI=({onAddressAdded:e})=>{const[t,n]=j.useState({addressType:"home",fullName:"",alternateNumber:"",house_No:"",floor:"",area:"",pincode:"",city:"",state:"",landmark:"",street:""}),[r,s]=j.useState(!1),[l,c]=j.useState(""),d=m=>{const{name:p,value:v}=m.target;n(b=>({...b,[p]:v}))},f=async m=>{var p;if(m.preventDefault(),!t.fullName||!t.house_No||!t.area||!t.pincode||!t.city){c("Please fill in all required fields");return}try{s(!0),c("");const v={fullName:t.fullName,alternateNumber:t.alternateNumber||"",pincode:t.pincode,house_No:t.house_No,landmark:t.landmark||"",address:`${t.house_No}, ${t.area}`,state:t.state||"",street:t.street||"",latitude:"29.1492",longitude:"75.7217",city:t.city,addressType:t.addressType,floor:t.floor?parseInt(t.floor):void 0},b=await xn(pe.ADD_ADDRESS,v,{authRequired:!0});if(b.data&&b.data.status===!0){const k=document.getElementById("addAddressModal"),N=bootstrap.Modal.getInstance(k);N&&N.hide(),n({addressType:"home",fullName:"",alternateNumber:"",house_No:"",floor:"",area:"",pincode:"",city:"",state:"",landmark:"",street:""}),e&&e()}else c(((p=b.data)==null?void 0:p.message)||"Failed to add address. Please try again.")}catch(v){console.error("Error adding address:",v),c("Failed to add address. Please try again.")}finally{s(!1)}};return o.jsx("div",{className:"modal fade",id:"addAddressModal",tabIndex:-1,"aria-labelledby":"addAddressModalLabel","aria-hidden":"true",children:o.jsx("div",{className:"modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable",style:{justifyContent:"center"},children:o.jsxs("div",{className:"modal-content",style:{width:"600px"},children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h5",{className:"modal-title",id:"addAddressModalLabel",children:"Add New Address"}),o.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),o.jsx("div",{className:"modal-body",style:{maxHeight:"70vh",overflowY:"auto"},children:o.jsxs("form",{onSubmit:f,children:[o.jsx("div",{className:"mb-4",children:o.jsxs("div",{className:"d-flex justify-content-between",children:[o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"radio",name:"addressType",id:"home",value:"home",checked:t.addressType==="home",onChange:d}),o.jsxs("label",{className:"form-check-label",htmlFor:"home",children:[o.jsx("i",{className:"fa fa-home me-2"}),"Home"]})]}),o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"radio",name:"addressType",id:"office",value:"office",checked:t.addressType==="office",onChange:d}),o.jsxs("label",{className:"form-check-label",htmlFor:"office",children:[o.jsx("i",{className:"fa fa-building me-2"}),"Office"]})]}),o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"radio",name:"addressType",id:"other",value:"other",checked:t.addressType==="other",onChange:d}),o.jsxs("label",{className:"form-check-label",htmlFor:"other",children:[o.jsx("i",{className:"fa fa-map-marker me-2"}),"Other"]})]})]})}),o.jsx("div",{className:"mb-3",children:o.jsx("input",{type:"text",className:"form-control",name:"fullName",value:t.fullName,onChange:d,placeholder:"Full Name *",required:!0})}),o.jsx("div",{className:"mb-3",children:o.jsx("input",{type:"text",className:"form-control",name:"alternateNumber",value:t.alternateNumber,onChange:d,placeholder:"Alternate Number (Optional)"})}),o.jsx("div",{className:"mb-3",children:o.jsx("input",{type:"text",className:"form-control",name:"house_No",value:t.house_No,onChange:d,placeholder:"House No./Flat/Building *",required:!0})}),o.jsx("div",{className:"mb-3",children:o.jsx("input",{type:"number",className:"form-control",name:"floor",value:t.floor,onChange:d,placeholder:"Floor (Optional)"})}),o.jsx(aI,{formData:t,setFormData:n}),o.jsx("div",{className:"mb-3",children:o.jsx("input",{type:"text",className:"form-control",name:"pincode",value:t.pincode,onChange:d,placeholder:"Pincode *",required:!0})}),o.jsx("div",{className:"mb-3",children:o.jsx("input",{type:"text",className:"form-control",name:"city",value:t.city,onChange:d,placeholder:"City *",required:!0})}),o.jsx("div",{className:"mb-3",children:o.jsx("input",{type:"text",className:"form-control",name:"state",value:t.state,onChange:d,placeholder:"State"})}),o.jsx("div",{className:"mb-4",children:o.jsx("input",{type:"text",className:"form-control",name:"landmark",value:t.landmark,onChange:d,placeholder:"Landmark (Optional)"})}),l&&o.jsx("div",{className:"alert alert-danger",role:"alert",children:l})]})}),o.jsx("div",{className:"modal-footer",children:o.jsx("button",{type:"submit",className:"btn btn-primary w-100",disabled:r,onClick:f,children:r?o.jsxs(o.Fragment,{children:[o.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),"Saving..."]}):"Save Location"})})]})})})},cI=()=>o.jsxs(o.Fragment,{children:[o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-12 mb-3",children:o.jsx("div",{className:"border rounded-3 p-4",children:o.jsxs("div",{className:"d-flex align-items-start",children:[o.jsx("div",{className:"shimmer-radio me-3 mt-1"}),o.jsxs("div",{className:"flex-grow-1",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[o.jsxs("div",{children:[o.jsx("div",{className:"shimmer-name mb-1"}),o.jsx("div",{className:"shimmer-phone"})]}),o.jsx("div",{className:"shimmer-badge"})]}),o.jsx("div",{className:"shimmer-address"})]})]})})}),o.jsx("div",{className:"col-12 mb-3",children:o.jsx("div",{className:"border rounded-3 p-4",children:o.jsxs("div",{className:"d-flex align-items-start",children:[o.jsx("div",{className:"shimmer-radio me-3 mt-1"}),o.jsxs("div",{className:"flex-grow-1",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[o.jsxs("div",{children:[o.jsx("div",{className:"shimmer-name mb-1"}),o.jsx("div",{className:"shimmer-phone"})]}),o.jsx("div",{className:"shimmer-badge"})]}),o.jsx("div",{className:"shimmer-address"})]})]})})})]}),o.jsx("style",{children:`
        .shimmer-radio {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }
        
        .shimmer-name {
          height: 24px;
          width: 60%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        
        .shimmer-phone {
          height: 16px;
          width: 40%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        
        .shimmer-badge {
          width: 60px;
          height: 20px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 10px;
        }
        
        .shimmer-address {
          height: 18px;
          width: 90%;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
          border-radius: 4px;
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `})]}),uI=()=>new Promise((e,t)=>{if(window.Razorpay){e(!0);return}const n=document.createElement("script");n.src="https://checkout.razorpay.com/v1/checkout.js",n.onload=()=>e(!0),n.onerror=()=>t("Failed to load Razorpay SDK"),document.body.appendChild(n)}),dI=async({tempOrderId:e,amount:t,onSuccess:n,onFailure:r,razorpayKey:s})=>{if(!e||!t){alert("Invalid payment data. Cannot proceed to Razorpay.");return}if(console.log("Razorpay Key:wuw",s),!s){alert("Razorpay key not configured. Please contact support.");return}if(!await uI()){alert("Razorpay SDK failed to load. Please check your internet connection.");return}const c={key:s,amount:t,currency:"INR",name:"Fivlia",description:"Order Payment",handler:async function(f){var m,p;try{const v={razorpay_order_id:f.razorpay_order_id,razorpay_payment_id:f.razorpay_payment_id,razorpay_signature:f.razorpay_signature,tempOrderId:e,paymentStatus:!0,transactionId:f.razorpay_order_id},b=await xn(pe.VERIFY_PAYMENT,v,{authRequired:!0});((m=b.data)==null?void 0:m.status)===!0&&((p=b.data)==null?void 0:p.order.paymentStatus)==="Successful"?n==null||n(b.data):(alert("Payment verification failed. Please contact support."),r==null||r())}catch{alert("Something went wrong during payment verification."),r==null||r()}},theme:{color:"#3399cc"}};new window.Razorpay(c).open()},fI=()=>{const{cartItems:e,getCartTotal:t,getShippingCharge:n,isInitialized:r,storeId:s,fetchCartItems:l,paymentOption:c}=cu(),{isLoggedIn:d}=Ds(),f=Mn(),[m,p]=j.useState(!0),[v,b]=j.useState([]),[k,N]=j.useState(null),[w,S]=j.useState(!0),[_,y]=j.useState(null),[x,E]=j.useState("online"),T=k_(),O=Et();j.useEffect(()=>{setTimeout(()=>{p(!1)},1500)},[]),j.useEffect(()=>{r&&d&&I()},[r,d]),j.useEffect(()=>{r&&!d&&f("/MyAccountSignIn")},[r,d,f]),j.useEffect(()=>{r&&e.length===0&&f("/")},[r,e.length,f]);const I=async()=>{try{S(!0),y(null);const z=await Re(pe.GET_ADDRESS,{authRequired:!0});if(z.data&&z.data.addresses){const B=z.data.addresses||[];b(B),B.length>0&&N(B[0]._id)}else y("Failed to load addresses")}catch{y("Failed to load addresses. Please try again.")}finally{S(!1)}},q=z=>{N(z)},F=async()=>{if(x==="online"&&!k){alert("Please select a delivery address");return}const B=T("PaymentGateways").RazorPayKey.live;if(!B&&x==="online"){alert("Payment gateway facing some error. Please contact support.");return}if(x==="cod"&&T("codLimit")<t()+n()+T("Delivery_Charges")){alert("Order amount is greater than the COD limit. Use Online Payment instead.");return}try{const Z={addressId:k,cartIds:e.map(V=>V._id),paymentMode:x==="cod"?!0:"online",totalAmount:t()+n()+T("Delivery_Charges"),storeId:s},Q=await xn(pe.PLACE_ORDER,Z,{authRequired:!0}),{order:K,tempOrder:te,tempOrderId:ee}=Q.data||{};if(K&&K.cashOnDelivery===!0&&K.paymentStatus==="Successful"){l(),alert("Order placed successfully with Cash on Delivery!"),f("/MyAccountOrder");return}if(te&&ee&&te.totalPrice){const V=Math.round(te.totalPrice*100);dI({tempOrderId:ee,amount:V,onSuccess:()=>{l(),alert("Payment successful and order confirmed!"),f("/MyAccountOrder")},onFailure:()=>{alert("Payment verification failed or cancelled.")},razorpayKey:B})}else alert("Invalid order response. Please try again.")}catch(Z){console.error("Order placement error:",Z),alert("Something went wrong!")}};return o.jsx("div",{children:m?o.jsx("div",{className:"loader-container",children:o.jsx(Vs,{visible:!0,height:"100",width:"100",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperclassName:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#0aad0a"})}):o.jsxs(o.Fragment,{children:[o.jsx(Ti,{}),o.jsx("section",{className:"mb-lg-14 mb-8 mt-8",children:o.jsxs("div",{className:"container",children:[o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12",children:o.jsx("div",{className:"mb-8",children:o.jsx("h1",{className:"fw-bold mb-0",children:"Checkout"})})})}),o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-lg-7 col-md-12",children:o.jsxs("div",{className:"accordion accordion-flush",id:"accordionFlushExample",children:[o.jsxs("div",{className:"accordion-item py-2",style:{border:"none"},children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-center",children:[o.jsxs("div",{className:"fs-5 text-inherit h4",children:[o.jsx("i",{className:"feather-icon icon-map-pin me-2 text-muted"}),"Delivery Address"]}),o.jsx(xe,{to:"#",className:"btn btn-outline-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#addAddressModal",children:"Add New Address"})]}),o.jsx("div",{className:"mt-5",children:w?o.jsx(cI,{}):_?o.jsxs("div",{className:"alert alert-danger",role:"alert",children:[_,o.jsx("button",{className:"btn btn-sm btn-outline-danger ms-2",onClick:I,children:"Retry"})]}):v.length===0?o.jsxs("div",{className:"text-center py-4",children:[o.jsx("div",{className:"mb-3",children:o.jsx("i",{className:"fa fa-map-marker fa-3x text-muted"})}),o.jsx("h6",{className:"text-muted",children:"No addresses found"}),o.jsx("p",{className:"text-muted small",children:"Add a delivery address to continue"}),o.jsx("button",{className:"btn btn-primary btn-sm","data-bs-toggle":"modal","data-bs-target":"#addAddressModal",children:"Add Address"})]}):o.jsx("div",{className:"row",children:v.map((z,B)=>o.jsx("div",{className:"col-12 mb-3",children:o.jsx("div",{className:"border rounded p-4",children:o.jsxs("div",{className:"d-flex align-items-start",children:[o.jsx("div",{className:"form-check me-3 mt-1",children:o.jsx("input",{className:"form-check-input",type:"radio",name:"addressRadio",id:`address-${z._id||B}`,checked:k===z._id,onChange:()=>q(z._id)})}),o.jsxs("div",{className:"flex-grow-1",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[o.jsxs("div",{children:[o.jsx("h6",{className:"mb-1 fw-bold fs-5",children:z.fullName}),o.jsxs("div",{className:"text-muted",children:[z.mobileNumber&&o.jsxs("span",{className:"fw-medium",children:["Phone: ",z.mobileNumber]}),z.alternateNumber&&o.jsxs("span",{className:"ms-3 fw-medium",children:["Alt: ",z.alternateNumber]})]})]}),z.default&&o.jsx("span",{className:"badge bg-success text-white",children:"Default"})]}),o.jsx("div",{className:"address-details",children:o.jsxs("p",{className:"mb-0 text-dark fs-6 lh-base",children:[z.house_No&&`${z.house_No}, `,z.floor&&`${z.floor} floor, `,z.address,z.landmark&&`, ${z.landmark}`,z.city&&z.state&&`, ${z.city}, ${z.state} ${z.pincode}`]})})]})]})})},z._id||B))})})]}),o.jsxs("div",{className:"accordion-item py-4",children:[o.jsx("div",{className:"d-flex justify-content-between align-items-center",children:o.jsxs("div",{className:"fs-5 text-inherit h4",children:[o.jsx("i",{className:"feather-icon icon-credit-card me-2 text-muted"}),"Payment Method"]})}),o.jsx("div",{className:"mt-5",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-md-6 mb-3",children:o.jsx("div",{className:"card card-bordered shadow-none h-100",children:o.jsx("div",{className:"card-body p-4",children:o.jsxs("div",{className:"d-flex",children:[o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"radio",name:"paymentRadio",id:"payOnline",checked:x==="online",onChange:()=>E("online")}),o.jsx("label",{className:"form-check-label ms-2",htmlFor:"payOnline"})]}),o.jsxs("div",{children:[o.jsx("h5",{className:"mb-1 h6",children:"Pay Online"}),o.jsx("p",{className:"mb-0 small",children:"Complete your purchase securely using our online payment gateway. We support all major payment methods."})]})]})})})}),c===!0&&o.jsx("div",{className:"col-md-6 mb-3",children:o.jsx("div",{className:"card card-bordered shadow-none h-100",children:o.jsx("div",{className:"card-body p-4",children:o.jsxs("div",{className:"d-flex",children:[o.jsxs("div",{className:"form-check",children:[o.jsx("input",{className:"form-check-input",type:"radio",name:"paymentRadio",id:"cashonDelivery",checked:x==="cod",onChange:()=>E("cod")}),o.jsx("label",{className:"form-check-label ms-2",htmlFor:"cashonDelivery"})]}),o.jsxs("div",{children:[o.jsx("h5",{className:"mb-1 h6",children:"Cash on Delivery"}),o.jsx("p",{className:"mb-0 small",children:"Pay with cash when your order is delivered."})]})]})})})})]})})]})]})}),o.jsx("div",{className:"col-12 col-md-12 offset-lg-1 col-lg-4",children:o.jsx("div",{className:"mt-4 mt-lg-0",children:o.jsxs("div",{className:"card shadow-sm",children:[o.jsx("h5",{className:"px-6 py-4 bg-transparent mb-0",children:"Order Details"}),o.jsxs("ul",{className:"list-group list-group-flush",children:[e.map((z,B)=>o.jsx("li",{className:"list-group-item px-4 py-3",children:o.jsxs("div",{className:"row align-items-center",children:[o.jsx("div",{className:"col-2 col-md-2",children:o.jsx("img",{src:O(z.image),alt:z.name,className:"img-fluid",onError:Z=>{Z.target.src="/assets/img/no_image.jpg"}})}),o.jsxs("div",{className:"col-5 col-md-5",children:[o.jsx("h6",{className:"mb-0",children:z.name}),o.jsx("span",{children:o.jsxs("small",{className:"text-muted",children:["₹",z.price," / unit"]})})]}),o.jsx("div",{className:"col-2 col-md-2 text-center text-muted",children:o.jsx("span",{children:z.quantity})}),o.jsx("div",{className:"col-3 text-lg-end text-start text-md-end col-md-3",children:o.jsxs("span",{className:"fw-bold",children:["₹",z.price*z.quantity]})})]})},`${z.productId}-${z.varientId}-${B}`)),o.jsxs("li",{className:"list-group-item px-4 py-3",children:[o.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[o.jsx("div",{children:"Item Subtotal"}),o.jsxs("div",{className:"fw-bold",children:["₹",t()]})]}),o.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[o.jsxs("div",{children:["Platform Fee"," ",o.jsx("i",{className:"feather-icon icon-info text-muted","data-bs-toggle":"tooltip",title:"Default tooltip"})]}),o.jsxs("div",{className:"fw-bold",children:["₹",n()]})]}),o.jsxs("div",{className:"d-flex align-items-center justify-content-between",children:[o.jsxs("div",{children:["Delivery Charges"," ",o.jsx("i",{className:"feather-icon icon-info text-muted","data-bs-toggle":"tooltip",title:"Default tooltip"})]}),o.jsxs("div",{className:"fw-bold",children:["₹",T("Delivery_Charges")]})]})]}),o.jsx("li",{className:"list-group-item px-4 py-3",children:o.jsxs("div",{className:"d-flex align-items-center justify-content-between fw-bold",children:[o.jsx("div",{children:"Total"}),o.jsxs("div",{children:["₹",t()+n()+T("Delivery_Charges")]})]})})]}),o.jsx("div",{className:"p-4",children:o.jsx("button",{className:"btn btn-primary w-100",onClick:F,disabled:!k||w,children:w?"Loading...":"Place Order"})})]})})})]})]})}),o.jsx(lI,{onAddressAdded:I})]})})},$p=({children:e,activePath:t=""})=>o.jsxs("section",{children:[o.jsx("div",{className:"container",children:o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"col-12",children:o.jsxs("div",{className:"p-6 d-flex justify-content-between align-items-center d-md-none",children:[o.jsx("h3",{className:"fs-5 mb-0",children:"Account"}),o.jsx("button",{className:"btn btn-outline-gray-400 text-muted d-md-none",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasAccount","aria-controls":"offcanvasAccount",children:o.jsx("i",{className:"fas fa-bars"})})]})}),o.jsx("div",{className:"col-lg-3 col-md-4 col-12 border-end d-none d-md-block",children:o.jsxs("div",{className:"pt-10 pe-lg-10",children:[o.jsx("h6",{className:"text-uppercase text-muted mb-3",children:"Your Information"}),o.jsxs("ul",{className:"nav flex-column nav-pills nav-pills-dark mb-4",children:[o.jsx("li",{className:"nav-item",children:o.jsxs(xe,{className:`nav-link ${t==="order"?"active":""}`,to:"/MyAccountOrder",children:[o.jsx("i",{className:"fas fa-truck me-2"}),"Track Orders"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs(xe,{className:`nav-link ${t==="address"?"active":""}`,to:"/MyAccountAddress",children:[o.jsx("i",{className:"fas fa-map-marker-alt me-2"}),"Address Book"]})})]}),o.jsx("h6",{className:"text-uppercase text-muted mb-3",children:"Other"}),o.jsxs("ul",{className:"nav flex-column nav-pills nav-pills-dark",children:[o.jsx("li",{className:"nav-item",children:o.jsxs(xe,{className:"nav-link",to:"/About",children:[o.jsx("i",{className:"fas fa-info-circle me-2"}),"About Us"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs(xe,{className:"nav-link",to:"/PrivacyPolicy",children:[o.jsx("i",{className:"fas fa-shield-alt me-2"}),"Privacy Policy"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs(xe,{className:"nav-link",to:"/TermsConditions",children:[o.jsx("i",{className:"fas fa-file-contract me-2"}),"Terms & Conditions"]})}),o.jsx("li",{className:"nav-item",children:o.jsx("hr",{})}),o.jsx("li",{className:"nav-item",children:o.jsxs("button",{className:"nav-link text-danger btn btn-link text-start w-100",onClick:()=>{localStorage.clear(),sessionStorage.clear(),window.location.href="/"},children:[o.jsx("i",{className:"fas fa-sign-out-alt me-2"}),"Logout"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs("button",{className:"nav-link text-danger btn btn-link text-start w-100",onClick:()=>{window.confirm("Are you sure you want to delete your account? This action cannot be undone.")&&(localStorage.clear(),sessionStorage.clear(),window.location.href="/")},children:[o.jsx("i",{className:"fas fa-trash-alt me-2"}),"Delete Account"]})})]})]})}),o.jsx("div",{className:"col-lg-9 col-md-8 col-12",children:e})]})}),o.jsxs("div",{className:"offcanvas offcanvas-start",tabIndex:-1,id:"offcanvasAccount","aria-labelledby":"offcanvasAccountLabel",children:[o.jsxs("div",{className:"offcanvas-header",children:[o.jsx("h5",{className:"offcanvas-title",id:"offcanvasAccountLabel",children:"My Account"}),o.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"offcanvas"})]}),o.jsxs("div",{className:"offcanvas-body",children:[o.jsx("h6",{className:"text-uppercase text-muted mb-3",children:"Your Information"}),o.jsxs("ul",{className:"nav flex-column nav-pills nav-pills-dark mb-4",children:[o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link",href:"/MyAccountOrder",children:[o.jsx("i",{className:"fas fa-truck me-2"}),"Track Orders"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link",href:"/MyAccountAddress",children:[o.jsx("i",{className:"fas fa-map-marker-alt me-2"}),"Address"]})})]}),o.jsx("h6",{className:"text-uppercase text-muted mb-3",children:"Other"}),o.jsxs("ul",{className:"nav flex-column nav-pills nav-pills-dark",children:[o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link",href:"/MyAcconutPaymentMethod",children:[o.jsx("i",{className:"fas fa-credit-card me-2"}),"Payment Method"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link",href:"/MyAcconutNotification",children:[o.jsx("i",{className:"fas fa-bell me-2"}),"Notification"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link",href:"/About",children:[o.jsx("i",{className:"fas fa-info-circle me-2"}),"About Us"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link",href:"/PrivacyPolicy",children:[o.jsx("i",{className:"fas fa-shield-alt me-2"}),"Privacy Policy"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link",href:"/TermsConditions",children:[o.jsx("i",{className:"fas fa-file-contract me-2"}),"Terms & Conditions"]})}),o.jsx("li",{className:"nav-item",children:o.jsx("hr",{})}),o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link text-danger",href:"/Grocery-react/",children:[o.jsx("i",{className:"fas fa-sign-out-alt me-2"}),"Logout"]})}),o.jsx("li",{className:"nav-item",children:o.jsxs("a",{className:"nav-link text-danger",href:"#",onClick:n=>{n.preventDefault(),window.confirm("Are you sure you want to delete your account? This action cannot be undone.")&&(localStorage.clear(),sessionStorage.clear(),window.location.href="/")},children:[o.jsx("i",{className:"fas fa-trash-alt me-2"}),"Delete Account"]})})]})]})]})]}),hI=({order:e,isOpen:t,onClose:n})=>{if(!e||!t)return null;const r=Et(),s=e.items.reduce((c,d)=>c+d.price*d.quantity,0),l=s*(e.platformFee/100);return o.jsx("div",{className:"order-modal-overlay",onClick:n,children:o.jsxs("div",{className:"order-modal",onClick:c=>c.stopPropagation(),children:[o.jsx("button",{className:"order-close-btn",onClick:n,children:"×"}),o.jsxs("div",{className:"order-modal-content",children:[o.jsxs("h2",{className:"order-title",children:["Order Details - #",e.orderId]}),o.jsx("div",{className:"order-items",children:e.items.map((c,d)=>o.jsxs("div",{className:"order-item",children:[o.jsx("img",{src:r(c.image)||"/assets/img/no_image.jpg",alt:c.name,className:"order-item-img",onError:f=>{f.target.src="/assets/img/no_image.jpg"}}),o.jsxs("div",{className:"order-item-info",children:[o.jsx("h4",{className:"order-item-name",children:c.name}),o.jsxs("div",{className:"order-item-details",children:[o.jsxs("span",{children:[o.jsx("strong",{children:"Qty:"})," ",c.quantity]}),o.jsxs("span",{children:[o.jsx("strong",{children:"Price:"})," ₹",c.price]})]})]})]},d))}),o.jsx("hr",{}),o.jsxs("div",{className:"order-summary",children:[o.jsxs("div",{className:"summary-item",children:[o.jsx("strong",{children:"Subtotal:"})," ₹",s]}),o.jsxs("div",{className:"summary-item",children:[o.jsx("strong",{children:"Delivery Charges:"})," ₹",e.deliveryCharges]}),o.jsxs("div",{className:"summary-item",children:[o.jsx("strong",{children:"Platform Fee:"})," ₹",l]}),o.jsx("hr",{}),o.jsxs("div",{className:"summary-item",children:[o.jsx("strong",{children:"Total Amount:"})," ₹",e.totalPrice]}),o.jsxs("div",{className:"",children:[o.jsx("strong",{style:{color:"#000",fontSize:"0.9rem"},children:"Delivery Address:"})," ",o.jsx("br",{}),e.addressId.fullName,", ",o.jsx("br",{}),e.addressId.fullAddress,", ",o.jsx("br",{}),e.addressId.moibleNumber]})]})]}),o.jsx("style",{children:`
          .order-modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1050;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .order-modal {
            background: #fff;
            border-radius: 14px;
            max-width: 800px;
            width: 95%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            padding: 24px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            animation: fadeIn 0.2s ease-out;
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }

          .order-close-btn {
            position: absolute;
            top: 12px;
            right: 16px;
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
          }

          .order-title {
            font-size: 1.5rem;
            font-weight: bold;
            margin-bottom: 20px;
            color: #0aad0a;
            text-align: center;
          }

          .order-items {
            display: flex;
            flex-direction: column;
            gap: 14px;
          }

          .order-item {
            display: flex;
            gap: 12px;
            background: #f9f9f9;
            padding: 6px;
            border-radius: 10px;
            align-items: center;
            border: 1px solid #e0e0e0;
            max-height: 150px;
            overflow: hidden;
          }

          .order-item-img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 8px;
            background: #fff;
          }

          .order-item-info {
            flex: 1;
          }

          .order-item-name {
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 3px;
            color: #333;
            max-width: 100%; 
          }

          .order-item-details {
            display: flex;
            flex-direction: column;
            font-size: 0.95rem;
            color: #555;
          }

          .summary-item {
            font-size: 0.9rem;
            margin-bottom: 2px;
            color: #333;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .order-summary {
            margin-top: 20px;
            font-size: 1rem;
            color: #555;
          }

          @media (max-width: 600px) {
            .order-modal {
              padding: 16px;
            }

            .order-item {
              flex-direction: column;
              align-items: flex-start;
            }

            .order-item-img {
              width: 100%;
              height: auto;
              border-radius: 6px;
            }

            .order-item-details {
              flex-direction: column;
              gap: 6px;
            }
          }
        `})]})})},mI=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[s,l]=j.useState(null),[c,d]=j.useState(!1),[f,m]=j.useState(1),p=10;j.useEffect(()=>{(async()=>{var _;try{const y=await Re(pe.GET_ORDERS,{authRequired:!0});t(((_=y.data)==null?void 0:_.orders)||[])}catch{alert("Failed to load orders.")}finally{r(!1)}})()},[]);const v=S=>{l(S),d(!0)},b=S=>{switch(S){case"Pending":return o.jsx("span",{className:"badge bg-warning",children:"Pending"});case"Cancelled":return o.jsx("span",{className:"badge bg-danger",children:"Cancelled"});case"Completed":return o.jsx("span",{className:"badge bg-success",children:"Completed"});default:return o.jsx("span",{className:"badge bg-secondary",children:S})}},k=Math.ceil(e.length/p),N=e.slice((f-1)*p,f*p),w=S=>{S>=1&&S<=k&&m(S)};return o.jsxs(o.Fragment,{children:[o.jsx(Ti,{}),n?o.jsx("div",{className:"loader-container",children:o.jsx(Vs,{visible:!0,height:"100",width:"100",color:"#0aad0a",ariaLabel:"Loading..."})}):o.jsxs($p,{children:[o.jsxs("div",{className:"p-6 p-lg-10",children:[o.jsx("h2",{className:"mb-6",children:"Your Orders"}),o.jsx("div",{className:"table-responsive border-0",children:o.jsxs("table",{className:"table table-bordered table-hover",children:[o.jsx("thead",{className:"table-light",children:o.jsxs("tr",{children:[o.jsx("th",{children:"Order ID"}),o.jsx("th",{children:"Date"}),o.jsx("th",{children:"Items"}),o.jsx("th",{children:"Status"}),o.jsx("th",{children:"Amount"}),o.jsx("th",{children:"Payment Mode"}),o.jsx("th",{children:"Action"})]})}),o.jsx("tbody",{children:N.length===0?o.jsx("tr",{children:o.jsx("td",{colSpan:"7",className:"text-center py-4",children:"No orders found."})}):N.map(S=>{var _;return o.jsxs("tr",{children:[o.jsxs("td",{children:["#",S.orderId]}),o.jsx("td",{children:new Date(S.createdAt).toLocaleDateString()}),o.jsx("td",{children:S.items.length}),o.jsx("td",{children:b(S.orderStatus)}),o.jsxs("td",{children:["₹",(_=S.totalPrice)==null?void 0:_.toFixed(2)]}),o.jsx("td",{children:S.cashOnDelivery?"Cash on Delivery (COD)":"Online"}),o.jsx("td",{children:o.jsxs("button",{className:"btn btn-sm btn-outline-primary",onClick:()=>v(S),title:"Order Details",children:[o.jsx("i",{className:"fas fa-eye me-1"}),"View"]})})]},S._id)})})]})}),k>1&&o.jsx("nav",{className:"d-flex justify-content-center mt-4",children:o.jsxs("ul",{className:"pagination",children:[o.jsx("li",{className:`page-item ${f===1?"disabled":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>w(f-1),children:"Previous"})}),[...Array(k)].map((S,_)=>o.jsx("li",{className:`page-item ${f===_+1?"active":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>w(_+1),children:_+1})},_)),o.jsx("li",{className:`page-item ${f===k?"disabled":""}`,children:o.jsx("button",{className:"page-link",onClick:()=>w(f+1),children:"Next"})})]})})]}),o.jsx(hI,{order:s,isOpen:c,onClose:()=>d(!1)})]})]})},pI=()=>{const[e,t]=j.useState(!0);return j.useEffect(()=>{setTimeout(()=>{t(!1)},1500)},[]),o.jsxs("div",{children:[o.jsx(Ti,{}),o.jsx($p,{activePath:"setting",children:e?o.jsx("div",{className:"loader-container text-center py-5",children:o.jsx(Vs,{visible:!0,height:"100",width:"100",ariaLabel:"magnifying-glass-loading",glassColor:"#c0efff",color:"#0aad0a"})}):o.jsxs("div",{className:"p-6 p-lg-10",children:[o.jsx("div",{className:"mb-6",children:o.jsx("h2",{className:"mb-0",children:"Account Setting"})}),o.jsxs("div",{children:[o.jsx("h5",{className:"mb-4",children:"Account details"}),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-lg-5",children:o.jsxs("form",{children:[o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{className:"form-label",children:"Name"}),o.jsx("input",{type:"text",className:"form-control",placeholder:"Nigam Mishra"})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{className:"form-label",children:"Email"}),o.jsx("input",{type:"email",className:"form-control",placeholder:"example@gmail.com"})]}),o.jsxs("div",{className:"mb-5",children:[o.jsx("label",{className:"form-label",children:"Phone"}),o.jsx("input",{type:"text",className:"form-control",placeholder:"Phone number"})]}),o.jsx("div",{className:"mb-3",children:o.jsx("button",{className:"btn btn-primary",type:"submit",children:"Save Details"})})]})})})]}),o.jsx("hr",{className:"my-10"}),o.jsxs("div",{className:"pe-lg-14",children:[o.jsx("h5",{className:"mb-4",children:"Password"}),o.jsxs("form",{className:"row row-cols-1 row-cols-lg-2",children:[o.jsxs("div",{className:"mb-3 col",children:[o.jsx("label",{className:"form-label",children:"New Password"}),o.jsx("input",{type:"password",className:"form-control",placeholder:"**********"})]}),o.jsxs("div",{className:"mb-3 col",children:[o.jsx("label",{className:"form-label",children:"Current Password"}),o.jsx("input",{type:"password",className:"form-control",placeholder:"**********"})]}),o.jsxs("div",{className:"col-12",children:[o.jsxs("p",{className:"mb-4",children:["Can’t remember your current password?",o.jsx(xe,{to:"#",children:" Reset your password."})]}),o.jsx(xe,{to:"#",className:"btn btn-primary",children:"Save Password"})]})]})]}),o.jsx("hr",{className:"my-10"}),o.jsxs("div",{children:[o.jsx("h5",{className:"mb-4",children:"Delete Account"}),o.jsx("p",{className:"mb-2",children:"Would you like to delete your account?"}),o.jsx("p",{className:"mb-5",children:"This account contains 12 orders. Deleting your account will remove all associated order details."}),o.jsx(xe,{to:"#",className:"btn btn-outline-danger",children:"I want to delete my account"})]})]})})]})},gI=()=>{const[e,t]=j.useState([]),[n,r]=j.useState(!0),[s,l]=j.useState(null);j.useEffect(()=>{c()},[]);const c=async()=>{try{r(!0);const m=await Re(pe.GET_ADDRESS,{authRequired:!0});m.data&&m.data.addresses?t(m.data.addresses||[]):t([])}catch(m){console.error("Error fetching addresses:",m),l("Failed to load addresses"),t([])}finally{r(!1)}},d=m=>{switch(m){case"home":return"Home";case"office":return"Office";case"other":return"Other";default:return"Address"}},f=(m,p)=>o.jsx("div",{className:"col-12 mb-3",children:o.jsx("div",{className:"border rounded p-4",children:o.jsx("div",{className:"d-flex align-items-start",children:o.jsxs("div",{className:"flex-grow-1",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[o.jsxs("div",{children:[o.jsx("h6",{className:"mb-1 fw-bold fs-5",children:m.fullName}),o.jsxs("div",{className:"text-muted",children:[m.mobileNumber&&o.jsxs("span",{className:"fw-medium",children:["Phone: ",m.mobileNumber]}),m.alternateNumber&&o.jsxs("span",{className:"ms-3 fw-medium",children:["Alt: ",m.alternateNumber]})]})]}),o.jsxs("div",{className:"d-flex align-items-center",children:[m.default&&o.jsx("span",{className:"badge bg-success text-white me-2",children:"Default"}),o.jsx("span",{className:"badge bg-primary text-white",children:d(m.addressType)})]})]}),o.jsx("div",{className:"address-details",children:o.jsxs("p",{className:"mb-0 text-dark fs-6 lh-base",children:[m.house_No&&`${m.house_No}, `,m.floor&&`${m.floor} floor, `,m.address,m.landmark&&`, ${m.landmark}`,m.city&&m.state&&`, ${m.city}, ${m.state} ${m.pincode}`]})})]})})})},m._id||p);return o.jsxs(o.Fragment,{children:[o.jsx(Ti,{}),o.jsxs($p,{activePath:"address",children:[o.jsx("div",{className:"d-flex justify-content-between mb-6",children:o.jsx("h2",{className:"mb-0",children:"Address"})}),n?o.jsxs("div",{className:"row address-shimmer",children:[o.jsx("div",{className:"col-12 mb-3",children:o.jsx("div",{className:"border rounded p-4",children:o.jsx("div",{className:"d-flex align-items-start",children:o.jsxs("div",{className:"flex-grow-1",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[o.jsxs("div",{children:[o.jsx("div",{className:"shimmer-name mb-1"}),o.jsx("div",{className:"shimmer-phone"})]}),o.jsxs("div",{className:"d-flex",children:[o.jsx("div",{className:"shimmer-badge me-2"}),o.jsx("div",{className:"shimmer-badge"})]})]}),o.jsx("div",{className:"shimmer-address"})]})})})}),o.jsx("div",{className:"col-12 mb-3",children:o.jsx("div",{className:"border rounded p-4",children:o.jsx("div",{className:"d-flex align-items-start",children:o.jsxs("div",{className:"flex-grow-1",children:[o.jsxs("div",{className:"d-flex justify-content-between align-items-start mb-3",children:[o.jsxs("div",{children:[o.jsx("div",{className:"shimmer-name mb-1"}),o.jsx("div",{className:"shimmer-phone"})]}),o.jsxs("div",{className:"d-flex",children:[o.jsx("div",{className:"shimmer-badge me-2"}),o.jsx("div",{className:"shimmer-badge"})]})]}),o.jsx("div",{className:"shimmer-address"})]})})})})]}):s?o.jsx("div",{className:"alert alert-danger",role:"alert",children:s}):e.length===0?o.jsxs("div",{className:"text-center py-5",children:[o.jsx("div",{className:"mb-3",children:o.jsx("i",{className:"fa fa-map-marker fa-3x text-muted"})}),o.jsx("h6",{className:"text-muted",children:"No addresses found"}),o.jsx("p",{className:"text-muted small",children:"You haven't added any addresses yet."})]}):o.jsx("div",{className:"row",children:e.map((m,p)=>f(m,p))}),o.jsx("div",{className:"modal fade",id:"deleteModal",tabIndex:-1,"aria-labelledby":"deleteModalLabel","aria-hidden":"true",children:o.jsx("div",{className:"modal-dialog",children:o.jsxs("div",{className:"modal-content",children:[o.jsxs("div",{className:"modal-header",children:[o.jsx("h5",{className:"modal-title",id:"deleteModalLabel",children:"Delete address"}),o.jsx("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),o.jsxs("div",{className:"modal-body",children:[o.jsx("h6",{children:"Are you sure you want to delete this address?"}),o.jsx("p",{className:"mb-6",children:"This action cannot be undone."})]}),o.jsxs("div",{className:"modal-footer",children:[o.jsx("button",{type:"button",className:"btn btn-outline-gray-400","data-bs-dismiss":"modal",children:"Cancel"}),o.jsx("button",{type:"button",className:"btn btn-danger",children:"Delete"})]})]})})})]})]})},vI=`
  .address-shimmer .shimmer-name {
    height: 24px;
    width: 60%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 4px;
  }
  
  .address-shimmer .shimmer-phone {
    height: 16px;
    width: 40%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 4px;
  }
  
  .address-shimmer .shimmer-badge {
    width: 60px;
    height: 20px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 10px;
  }
  
  .address-shimmer .shimmer-address {
    height: 18px;
    width: 90%;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: address-shimmer 1.5s infinite;
    border-radius: 4px;
  }
  
  @keyframes address-shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;if(typeof document<"u"){const e=document.getElementById("address-shimmer-styles");e&&e.remove();const t=document.createElement("style");t.id="address-shimmer-styles",t.textContent=vI,document.head.appendChild(t)}const yI=()=>{const[e,t]=j.useState(""),[n,r]=j.useState(""),[s,l]=j.useState(""),[c,d]=j.useState(!1),f=Mn(),m=localStorage.getItem("mobile"),{login:p}=Ds(),v=async N=>{var w,S,_,y,x;if(N.preventDefault(),r(""),l(""),d(!0),e.length!==6||/\D/.test(e)){r("Please enter a valid 6-digit OTP."),d(!1);return}try{const E=await xn(pe.VERIFY_OTP,{mobileNumber:m,otp:e}),T=(w=E.data.message)==null?void 0:w.toLowerCase();if(T&&T.includes("login successful")){if(E.data.token?p(E.data.token):console.warn("OTP Verification: Login successful but no token received"),l("Login successful! Redirecting..."),localStorage.removeItem("mobile"),(_=(S=window.bootstrap)==null?void 0:S.Modal)!=null&&_.getInstance){const O=document.getElementById("userModal");if(O){const I=window.bootstrap.Modal.getInstance(O);I==null||I.hide()}}setTimeout(()=>{f("/")},1500)}else r(E.data.message||"Invalid OTP")}catch(E){r(((x=(y=E.response)==null?void 0:y.data)==null?void 0:x.message)||"Something went wrong.")}d(!1)},b=(N,w)=>{if(!/^\d?$/.test(N))return;const S=e.split("");S[w]=N;const _=S.join("").padEnd(6,"");if(t(_),N&&w<5){const y=document.getElementById(`otp-box-${w+1}`);y==null||y.focus()}},k=(N,w)=>{if(N.key==="Backspace"&&!e[w]&&w>0){const S=document.getElementById(`otp-box-${w-1}`);S==null||S.focus()}};return o.jsxs("div",{className:"container d-flex flex-column align-items-center justify-content-center",style:{minHeight:"60vh"},children:[o.jsx("style",{children:`
       input[type="text"].form-control {
  padding: 8px;
  text-align: center;
  border: 1px solid #ced4da;
  border-radius: 5px;
  box-shadow: none;
}

      `}),o.jsx("h2",{className:"mb-4",children:"OTP Verification"}),m&&o.jsxs("div",{className:"mb-2 text-secondary",children:["OTP sent to: ",o.jsx("b",{children:m})]}),o.jsxs("form",{onSubmit:v,style:{maxWidth:400,width:"100%"},autoComplete:"off",children:[o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{className:"form-label",children:"Enter OTP"}),o.jsx("div",{className:"d-flex gap-2 justify-content-between",children:[...Array(6)].map((N,w)=>o.jsx("input",{type:"text",maxLength:1,className:"form-control text-center",style:{width:"40px",fontSize:"20px"},value:e[w]||"",onChange:S=>b(S.target.value,w),onKeyDown:S=>k(S,w),id:`otp-box-${w}`,autoFocus:w===0},w))})]}),n&&o.jsx("div",{className:"alert alert-danger mt-2",children:n}),s&&o.jsx("div",{className:"alert alert-success mt-2",children:s}),o.jsx("button",{type:"submit",className:"btn btn-success w-100 mt-3",disabled:c,children:c?"Verifying...":"Verify OTP"})]})]})},xI=()=>{const[e,t]=j.useState("user"),[n,r]=j.useState(""),[s,l]=j.useState(""),[c,d]=j.useState(""),[f,m]=j.useState(""),[p,v]=j.useState(!1),[b,k]=j.useState(""),[N,w]=j.useState(""),[S,_]=j.useState(!1),y=async x=>{var E,T;if(x.preventDefault(),w(""),k(""),!n||!s||!f){w("Please fill in all required fields.");return}if(!p){w("You must agree before submitting.");return}_(!0);try{await xn(pe.DELETE_ACCOUNT,{accountType:e,fullName:n,phone:s,email:c,reason:f}),k("Your deletion request has been submitted successfully."),r(""),l(""),d(""),m(""),v(!1)}catch(O){w(((T=(E=O.response)==null?void 0:E.data)==null?void 0:T.message)||"Something went wrong.")}_(!1)};return o.jsxs("div",{style:{minHeight:"100vh",width:"100%",padding:"40px 20px",backgroundColor:"#f5f6fa",display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsx("style",{children:`
        h2 {
          font-weight: 600;
          margin-bottom: 20px;
          color: #333;
          text-align: center;
        }
        p.description {
          font-size: 0.95rem;
          color: #555;
          text-align: center;
          margin-bottom: 30px;
        }
        input, select, button {
          width: 100%;
          max-width: 800px;
          padding: 14px 16px;
          margin-bottom: 15px;
          border-radius: 8px;
          border: 1px solid #ccc;
          font-size: 0.95rem;
          transition: 0.2s;
        }
        input:focus, select:focus {
          border-color: #007bff;
          box-shadow: 0 0 5px rgba(0,123,255,0.3);
          outline: none;
        }
        button {
          background: #ff4d4f;
          color: #fff;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: 0.3s;
        }
        button:hover {
          background: #d9363e;
        }
        .radio-group {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          flex-wrap: wrap;
        }
        .radio-group label {
          display: flex;
          align-items: center;
          font-size: 0.95rem;
          cursor: pointer;
        }
        .radio-group input {
          margin-right: 6px;
        }
        .checkbox-label {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 0.95rem;
          cursor: pointer;
          user-select: none;
        }
        .checkbox-label input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #ff4d4f;
          cursor: pointer;
        }
        .alert {
          padding: 10px 15px;
          border-radius: 6px;
          margin-bottom: 15px;
          font-size: 0.9rem;
          max-width: 800px;
          width: 100%;
        }
        .alert-success {
          background: #d4edda;
          color: #155724;
        }
        .alert-danger {
          background: #f8d7da;
          color: #721c24;
        }
        .helper-text {
          margin-top: 10px;
          font-size: 0.85rem;
          color: #555;
          font-weight: bold;
          text-align: center;
          max-width: 800px;
          width: 100%;
        }
      `}),o.jsx("h2",{children:"Account Deletion Request"}),o.jsx("p",{className:"description",children:"Request permanent deletion of your account (User, Seller, or Driver). Once deleted, all your data and history will be removed. This cannot be undone."}),o.jsxs("form",{onSubmit:y,style:{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"},children:[o.jsxs("div",{className:"radio-group",children:[o.jsxs("label",{children:[o.jsx("input",{type:"radio",value:"user",checked:e==="user",onChange:()=>t("user")}),"User"]}),o.jsxs("label",{children:[o.jsx("input",{type:"radio",value:"driver",checked:e==="driver",onChange:()=>t("driver")}),"Driver"]}),o.jsxs("label",{children:[o.jsx("input",{type:"radio",value:"seller",checked:e==="seller",onChange:()=>t("seller")}),"Seller"]})]}),o.jsx("input",{type:"text",placeholder:"Full Name",value:n,onChange:x=>r(x.target.value)}),o.jsx("input",{type:"text",placeholder:"Phone Number",value:s,onChange:x=>l(x.target.value)}),o.jsx("input",{type:"email",placeholder:"Registered Email ID (optional)",value:c,onChange:x=>d(x.target.value)}),o.jsxs("select",{value:f,onChange:x=>m(x.target.value),children:[o.jsx("option",{value:"",children:"Reason for Deletion"}),o.jsx("option",{value:"privacy",children:"Privacy Concerns"}),o.jsx("option",{value:"not_using",children:"Not Using Service"}),o.jsx("option",{value:"other",children:"Other"})]}),o.jsxs("label",{className:"checkbox-label",children:[o.jsx("input",{type:"checkbox",checked:p,onChange:x=>v(x.target.checked)}),"I understand that my account and data will be permanently deleted."]}),N&&o.jsx("div",{className:"alert alert-danger",children:N}),b&&o.jsx("div",{className:"alert alert-success",children:b}),o.jsx("button",{type:"submit",disabled:S,children:S?"Submitting...":"Request Account Deletion"}),o.jsx("p",{className:"helper-text",children:"Once submitted, your account deletion request will be processed within 24-48 hours."})]})]})},wI=({productId:e})=>{const[t,n]=j.useState([]),[r,s]=j.useState(!0),[l,c]=j.useState(null),[d,f]=j.useState(null),[m,p]=j.useState(null),[v,b]=j.useState(0),k=Et();j.useEffect(()=>{s(!0),c(null),Re(`${pe.RELATED_PRODUCTS}&productId=${e}`).then(S=>{console.log("response fetch:",S.data.relatedProducts),n(S.data.relatedProducts||[])}).catch(S=>c(S.message)).finally(()=>s(!1))},[e]),j.useEffect(()=>{!d&&m&&(f(m),b(Date.now()),p(null))},[d,m]);const N=()=>{f(null)};if(r)return o.jsx("div",{className:"container",children:o.jsx(_a,{count:10})});if(l)return o.jsx("div",{className:"related-error",children:l});if(!t.length)return o.jsx("div",{className:"related-empty",children:"No related products found."});const w=t.map(S=>{var _,y,x;return{id:S._id,name:S.productName,description:S.description,image:k((_=S.productImageUrl)==null?void 0:_[0]),price:S.variants&&S.variants[0]&&S.variants[0].sell_price||S.sell_price||S.price,mrp:S.variants&&S.variants[0]&&S.variants[0].mrp||S.mrp,category:S.category&&S.category[0]&&S.category[0].name||"Category",category_id:S.category&&S.category[0]&&S.category[0]._id||"",brand:S.brand_Name&&S.brand_Name.name||"Brand",brandId:((y=S.brand_Name)==null?void 0:y._id)||"",unit:S.unit&&S.unit.name||"",tax:S.tax,rating:4.5,review_count:0,discount_percentage:S.variants&&S.variants[0]&&S.variants[0].discountValue||0,is_hot:S.feature_product||!1,is_new:!1,sku:S.sku,status:S.status,productImageUrl:S.productImageUrl,inCart:((x=S.inCart)==null?void 0:x.status)||!1,variants:S.variants||[],inventory:S.inventory||[],isVeg:S.isVeg}});return o.jsxs("div",{className:"container related-products-row-wrapper",children:[d&&o.jsx(N_,{product:d,isOpen:!!d,onClose:N,onAddToCart:()=>{}},v),o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 mb-6",children:o.jsxs("div",{className:"section-head text-center mt-8",children:[o.jsx("h3",{className:"h3style","data-title":"Related Products",children:"Related Products"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})})}),o.jsx(ba,{products:w})]})},bI=()=>{var x,E,T;const e=Yr(),t=Mn(),n=Et(),r=(x=e.state)==null?void 0:x.product;if(!r)return o.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[o.jsxs("div",{style:{fontSize:"1.2rem",color:"#e53935",marginBottom:16},children:["No product data provided.",o.jsx("br",{}),"Please access this page via the product search or product list."]}),o.jsx("button",{onClick:()=>t("/"),style:{padding:"0.5rem 1.5rem",background:"#0aad0a",color:"#fff",border:"none",borderRadius:6,fontWeight:600,cursor:"pointer"},children:"Go to Home"})]});const s=r.productImageUrl&&Array.isArray(r.productImageUrl)?r.productImageUrl:r.image?[r.image]:[],l=r.variants||[],[c,d]=j.useState(0),f=l[c]||{},[m,p]=j.useState(s[0]||""),[v,b]=j.useState(1),[k,N]=j.useState(!1);j.useEffect(()=>{p(s[0]||""),b(1),d(0)},[r]);const w=vr(r,f),S=Cb(r,f),_=Pb(r,f),y=Bs(r,f);return o.jsxs("div",{className:"container-fluid pqv-modal-content",style:{margin:"2rem auto",background:"transparent",boxShadow:"none",borderRadius:0,border:"none",overflowX:"hidden"},children:[o.jsxs("div",{className:"pqv-details-row",children:[o.jsxs("div",{className:"pqv-modal-left",children:[o.jsx("div",{className:"pqv-main-image-wrapper",children:o.jsx("img",{src:n(m||"/assets/img/no_image.jpg"),alt:r.productName||r.name,className:"pqv-main-image",onError:O=>{O.target.src="/assets/img/no_image.jpg"}})}),s.length>1&&o.jsx("div",{className:"pqv-thumbnails",children:s.map((O,I)=>o.jsx("img",{src:n(O||"/assets/img/no_image.jpg"),alt:`Thumbnail ${I+1}`,className:`pqv-thumbnail${m===O?" selected":""}`,onClick:()=>p(O),onError:q=>{q.target.src="/assets/img/no_image.jpg"}},O+I))})]}),o.jsxs("div",{className:"pqv-modal-right",children:[o.jsx("h2",{className:"pqv-product-name",children:r.name||r.productName}),o.jsxs("div",{className:"pqv-product-meta",children:[o.jsxs("span",{className:"pqv-category",children:[Array.isArray(r.category)?r.category.map(O=>O.name).join(", "):((E=r.category)==null?void 0:E.name)||r.category,r.isVeg!==0&&o.jsxs("span",{style:{color:r.isVeg===1?"green":"red",fontWeight:"bold"},children:[" (",r.isVeg===1?"Veg":"NonVeg",")"]})]}),(r.brand||r.brand_Name.name)&&o.jsxs(o.Fragment,{children:[o.jsxs("span",{className:"pqv-brand",children:["Brand: ",o.jsx(xe,{to:`/brand?id=${r.brandId||((T=r.brand_Name)==null?void 0:T._id)}`,children:r.brand||r.brand_Name.name})]}),o.jsxs("span",{className:"pqv-brand",children:["SKU: ",r.sku]})]})]}),l.length>0&&o.jsx("div",{className:"pqv-variant-selector",children:l.map((O,I)=>o.jsx("button",{className:`pqv-variant-pill${c===I?" selected":""}`,onClick:()=>d(I),type:"button",children:O.variantValue||O.attributeName||`Variant ${I+1}`},O._id||I))}),o.jsx("div",{className:"pqv-product-desc",children:r.description&&r.description.length>200?o.jsxs(o.Fragment,{children:[k?r.description:r.description.slice(0,200)+"...",o.jsx("button",{className:"pqv-readmore-btn",style:{background:"none",border:"none",color:"#0aad0a",cursor:"pointer",fontWeight:500,marginLeft:8,fontSize:"1em",padding:0},onClick:()=>N(O=>!O),children:k?"Read less":"Read more"})]}):r.description}),o.jsxs("div",{className:"pqv-product-price",children:[o.jsxs("span",{className:"pqv-price",children:["₹",f.sell_price||r.price]}),f.mrp&&f.mrp>(f.sell_price||r.price)&&o.jsxs("span",{className:"pqv-mrp",children:["₹",f.mrp]}),f.discountValue&&o.jsxs("span",{className:"pqv-discount",children:[f.discountValue,"% OFF"]})]}),o.jsx("div",{className:"pqv-stock-info",style:{marginBottom:"1rem"},children:o.jsxs("div",{className:"d-flex align-items-center",children:[o.jsx("span",{className:"badge",style:{backgroundColor:_,color:"white",fontSize:"0.8rem",padding:"0.5rem 0.75rem"},children:S}),!w&&y<10&&o.jsxs("small",{className:"text-warning ms-2",children:[o.jsx("i",{className:"fa fa-exclamation-triangle me-1"}),"Only ",y," left!"]})]})}),o.jsxs("div",{className:"pqv-qty-add-row",children:[o.jsx("div",{className:"pqv-qty-row",children:o.jsxs("div",{className:"pqv-qty-box",children:[o.jsx("button",{className:"pqv-qty-btn",onClick:()=>b(O=>Math.max(1,O-1)),"aria-label":"Decrease quantity",disabled:w,children:"-"}),o.jsx("input",{type:"number",min:"1",max:w?0:y,value:v,onChange:O=>b(Math.max(1,Math.min(y,parseInt(O.target.value)||1))),className:"pqv-qty-input",disabled:w}),o.jsx("button",{className:"pqv-qty-btn",onClick:()=>b(O=>Math.min(y,O+1)),"aria-label":"Increase quantity",disabled:w||v>=y,children:"+"})]})}),o.jsx(j_,{product:r,quantity:v,selectedVariant:f,className:"pqv-add-to-cart-btn"})]})]})]}),o.jsxs("div",{className:"pqv-related-section",children:[o.jsx("hr",{className:"pqv-separator"}),o.jsx(wI,{productId:r._id||r.id})]}),o.jsx("style",{children:`
.pqv-details-row {
  display: flex;
  flex-direction: row;
  gap: 32px;
  width: 100%;
}
@media (max-width: 900px) {
  .pqv-details-row {
    flex-direction: column;
    gap: 18px;
  }
  .pqv-modal-left, .pqv-modal-right {
    width: 100%;
    max-width: 100%;
    align-items: center;
  }
  .pqv-main-image-wrapper {
    width: 100vw;
    max-width: 100vw;
    height: 240px;
  }
}
@media (max-width: 600px) {
  .pqv-main-image-wrapper {
    width: 100vw;
    max-width: 100vw;
    height: 180px;
  }
  .pqv-product-name {
    font-size: 1.2rem;
  }
  .pqv-product-price {
    font-size: 1.1rem;
  }
  .pqv-add-to-cart-btn {
    font-size: 1rem;
    padding: 10px 10vw;
  }
  .pqv-modal-content {
    overflow-x: hidden;
  }
}
.pqv-modal-left {
  flex: 1.1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pqv-main-image-wrapper {
  width: 340px;
  height: 340px;
  background: #fafafa;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 18px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.pqv-main-image {
  max-width: 95%;
  max-height: 95%;
  border-radius: 10px;
  object-fit: contain;
}
.pqv-thumbnails {
  display: flex;
  gap: 10px;
  margin-top: 6px;
}
.pqv-thumbnail {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 7px;
  border: 2px solid transparent;
  cursor: pointer;
  background: #f5f5f5;
  transition: border 0.15s;
}
.pqv-thumbnail.selected {
  border: 2px solid #0aad0a;
}
.pqv-modal-right {
  flex: 1.2;
  min-width: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 18px;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  min-height: 0;
  padding-right: 32px;
  background: transparent;
}
.pqv-product-name {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0.2em;
  color: #222;
}
.pqv-product-meta {
  font-size: 1rem;
  color: #888;
  margin-bottom: 0.5em;
  display: flex;
  gap: 18px;
}
.pqv-brand {
  color: #444;
  font-weight: 500;
}
.pqv-product-desc {
  font-size: 1.08rem;
  color: #444;
  margin-bottom: 0.7em;
  line-height: 1.5;
}
.pqv-product-price {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0aad0a;
  display: flex;
  align-items: center;
  gap: 12px;
}
.pqv-mrp {
  font-size: 1.1rem;
  color: #b0b0b0;
  text-decoration: line-through;
  font-weight: 400;
}
.pqv-qty-row {
  display: flex;
  align-items: center;
  height: 48px;
  gap: 12px;
}
.pqv-qty-box {
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  background: #fafafa;
  padding: 2px 8px;
  gap: 6px;
  height: 48px;
  min-width: 110px;
}
.pqv-qty-btn {
  background: none;
  border: none;
  font-size: 1.3rem;
  color: #0aad0a;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.15s;
  box-shadow: 0 1px 2px rgba(10,173,10,0.04);
  display: flex;
  align-items: center;
  justify-content: center;
}
.pqv-qty-btn:hover {
  background: #e6f7e6;
}
.pqv-qty-input {
  width: 40px;
  text-align: center;
  font-size: 1.1rem;
  border: none;
  background: transparent;
  outline: none;
  height: 40px;
  line-height: 40px;
}
.pqv-add-to-cart-btn {
  background: linear-gradient(90deg, #0aad0a 60%, #0a8d0a 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.15rem;
  font-weight: 600;
  padding: 0 32px;
  margin-top: 0;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(10,173,10,0.10);
  transition: background 0.18s, box-shadow 0.18s, transform 0.13s;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.5px;
  height: 48px;
  min-width: 160px;
}
.pqv-add-to-cart-btn:hover {
  background: linear-gradient(90deg, #0a8d0a 60%, #0aad0a 100%);
  box-shadow: 0 4px 16px rgba(10,173,10,0.08);
}
.pqv-variant-selector {
  display: flex;
  gap: 10px;
  margin-bottom: 1rem;
}
.pqv-variant-pill {
  border: 1px solid #0aad0a;
  background: #fff;
  color: #0aad0a;
  border-radius: 20px;
  padding: 6px 18px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.18s, color 0.18s;
}
.pqv-variant-pill.selected,
.pqv-variant-pill:hover {
  background: #0aad0a;
  color: #fff;
}
.pqv-separator {
  margin: 24px 0 16px 0;
  border: none;
  border-top: 1.5px solid #e0e0e0;
  width: 100%;
}
.pqv-qty-add-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 24px;
  margin-top: 0;
  margin-bottom: 0;
  justify-content: flex-start;
}
@media (max-width: 700px) {
  .pqv-qty-add-row {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .pqv-qty-row, .pqv-qty-box, .pqv-add-to-cart-btn {
    height: 40px;
    min-width: unset;
    padding-left: 0;
    padding-right: 0;
  }
}
`})]})},_I=()=>{const[e]=yC(),t=e.get("id"),[n,r]=j.useState(null),[s,l]=j.useState([]),[c,d]=j.useState(!0),[f,m]=j.useState(null),p=Et();return j.useEffect(()=>{t?(async()=>{var b,k;try{d(!0),m(null);const N=await Re(`${pe.BRANDS}?id=${t}`),w=((b=N==null?void 0:N.data)==null?void 0:b.brand)||{},_=(((k=N==null?void 0:N.data)==null?void 0:k.products)||[]).map(y=>{var x,E,T,O,I,q,F,z,B,Z,Q,K,te,ee,V,P;return{id:y._id,name:y.productName,description:y.description,image:p(((x=y.productImageUrl)==null?void 0:x[0])||y.productThumbnailUrl),price:((T=(E=y.variants)==null?void 0:E[0])==null?void 0:T.sell_price)||y.sell_price||0,mrp:((I=(O=y.variants)==null?void 0:O[0])==null?void 0:I.mrp)||y.mrp||0,category:((F=(q=y.category)==null?void 0:q[0])==null?void 0:F.name)||"Category",category_id:((B=(z=y.category)==null?void 0:z[0])==null?void 0:B._id)||"",brand:((Z=y.brand_Name)==null?void 0:Z.name)||(w==null?void 0:w.brandName)||"",brandId:((Q=y.brand_Name)==null?void 0:Q._id)||"",unit:((K=y.unit)==null?void 0:K.name)||"",tax:y.tax||0,rating:4.5,review_count:0,discount_percentage:((ee=(te=y.variants)==null?void 0:te[0])==null?void 0:ee.discountValue)||0,is_hot:y.feature_product||!1,is_new:((V=y.ribbon)==null?void 0:V.toLowerCase())==="new",sku:y.sku,status:y.status,inCart:((P=y.inCart)==null?void 0:P.status)||!1,variants:y.variants||[],inventory:y.inventory||[],isVeg:y.isVeg}});r(w),l(_)}catch(N){console.error("Error fetching brand details:",N),m("Something went wrong while fetching brand details.")}finally{d(!1)}})():(m("Invalid brand ID."),d(!1))},[t]),o.jsx("section",{className:"my-lg-14 my-8",children:o.jsxs("div",{className:"container",children:[n!=null&&n.brandLogo||n!=null&&n.brandName?o.jsx("div",{className:"row align-items-center text-center mb-6",children:o.jsxs("div",{className:"col-12",children:[(n==null?void 0:n.brandLogo)&&o.jsx("img",{src:p(n.brandLogo),alt:n.brandName,style:{maxHeight:80,marginBottom:20}}),o.jsxs("div",{className:"section-head mt-2",children:[o.jsx("h3",{className:"h3style","data-title":(n==null?void 0:n.brandName)||"Brand",children:(n==null?void 0:n.brandName)||"Brand"}),o.jsx("div",{className:"wt-separator bg-primarys"}),o.jsx("div",{className:"wt-separator2 bg-primarys"})]})]})}):null,c?o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 text-center",children:o.jsx(_a,{count:10})})}):f?o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 text-center",children:o.jsx("div",{className:"alert alert-danger",children:f})})}):s.length===0?o.jsx("div",{className:"row",children:o.jsx("div",{className:"col-12 text-center",children:o.jsx("div",{className:"alert alert-warning",children:"No products found for this brand."})})}):o.jsx(ba,{products:s})]})})};function SI(){const{pageSlug:e}=qN(),[t,n]=j.useState(null),[r,s]=j.useState(!0),[l,c]=j.useState(null),d=f=>{const m=document.createElement("textarea");return m.innerHTML=f,m.value};return j.useEffect(()=>{s(!0),Re(pe.PAGES).then(f=>{var v,b;const p=(Array.isArray((v=f.data)==null?void 0:v.getPage)?f.data.getPage:[(b=f.data)==null?void 0:b.getPage].filter(Boolean)).find(k=>k.pageSlug===e);if(!p){c("Page not found"),s(!1);return}return Re(`${pe.PAGES}?id=${p._id}`)}).then(f=>{var m;if((m=f==null?void 0:f.data)!=null&&m.getPage){const p=d(f.data.getPage.pageContent);n({...f.data.getPage,pageContent:p})}else c("Page content not found")}).catch(()=>c("Error loading page")).finally(()=>s(!1))},[e]),r?o.jsx("div",{children:"Loading..."}):l?o.jsx("div",{style:{color:"red"},children:l}):o.jsxs("div",{className:"container py-5",children:[o.jsx("h1",{children:t.pageTitle}),o.jsx("div",{dangerouslySetInnerHTML:{__html:t.pageContent}})]})}function kI(e,t){const n=j.useRef(t);j.useEffect(function(){t!==n.current&&e.attributionControl!=null&&(n.current!=null&&e.attributionControl.removeAttribution(n.current),t!=null&&e.attributionControl.addAttribution(t)),n.current=t},[e,t])}const jI=1;function NI(e){return Object.freeze({__version:jI,map:e})}function CI(e,t){return Object.freeze({...e,...t})}const c2=j.createContext(null),u2=c2.Provider;function d2(){const e=j.useContext(c2);if(e==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function PI(e){function t(n,r){const{instance:s,context:l}=e(n).current;return j.useImperativeHandle(r,()=>s),n.children==null?null:wn.createElement(u2,{value:l},n.children)}return j.forwardRef(t)}function EI(e){function t(n,r){const{instance:s}=e(n).current;return j.useImperativeHandle(r,()=>s),null}return j.forwardRef(t)}function TI(e,t){const n=j.useRef();j.useEffect(function(){return t!=null&&e.instance.on(t),n.current=t,function(){n.current!=null&&e.instance.off(n.current),n.current=null}},[e,t])}function f2(e,t){const n=e.pane??t.pane;return n?{...e,pane:n}:e}var tm={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(e,t){(function(n,r){r(t)})(yo,function(n){var r="1.9.4";function s(i){var a,u,h,g;for(u=1,h=arguments.length;u<h;u++){g=arguments[u];for(a in g)i[a]=g[a]}return i}var l=Object.create||function(){function i(){}return function(a){return i.prototype=a,new i}}();function c(i,a){var u=Array.prototype.slice;if(i.bind)return i.bind.apply(i,u.call(arguments,1));var h=u.call(arguments,2);return function(){return i.apply(a,h.length?h.concat(u.call(arguments)):arguments)}}var d=0;function f(i){return"_leaflet_id"in i||(i._leaflet_id=++d),i._leaflet_id}function m(i,a,u){var h,g,C,A;return A=function(){h=!1,g&&(C.apply(u,g),g=!1)},C=function(){h?g=arguments:(i.apply(u,arguments),setTimeout(A,a),h=!0)},C}function p(i,a,u){var h=a[1],g=a[0],C=h-g;return i===h&&u?i:((i-g)%C+C)%C+g}function v(){return!1}function b(i,a){if(a===!1)return i;var u=Math.pow(10,a===void 0?6:a);return Math.round(i*u)/u}function k(i){return i.trim?i.trim():i.replace(/^\s+|\s+$/g,"")}function N(i){return k(i).split(/\s+/)}function w(i,a){Object.prototype.hasOwnProperty.call(i,"options")||(i.options=i.options?l(i.options):{});for(var u in a)i.options[u]=a[u];return i.options}function S(i,a,u){var h=[];for(var g in i)h.push(encodeURIComponent(u?g.toUpperCase():g)+"="+encodeURIComponent(i[g]));return(!a||a.indexOf("?")===-1?"?":"&")+h.join("&")}var _=/\{ *([\w_ -]+) *\}/g;function y(i,a){return i.replace(_,function(u,h){var g=a[h];if(g===void 0)throw new Error("No value provided for variable "+u);return typeof g=="function"&&(g=g(a)),g})}var x=Array.isArray||function(i){return Object.prototype.toString.call(i)==="[object Array]"};function E(i,a){for(var u=0;u<i.length;u++)if(i[u]===a)return u;return-1}var T="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function O(i){return window["webkit"+i]||window["moz"+i]||window["ms"+i]}var I=0;function q(i){var a=+new Date,u=Math.max(0,16-(a-I));return I=a+u,window.setTimeout(i,u)}var F=window.requestAnimationFrame||O("RequestAnimationFrame")||q,z=window.cancelAnimationFrame||O("CancelAnimationFrame")||O("CancelRequestAnimationFrame")||function(i){window.clearTimeout(i)};function B(i,a,u){if(u&&F===q)i.call(a);else return F.call(window,c(i,a))}function Z(i){i&&z.call(window,i)}var Q={__proto__:null,extend:s,create:l,bind:c,get lastId(){return d},stamp:f,throttle:m,wrapNum:p,falseFn:v,formatNum:b,trim:k,splitWords:N,setOptions:w,getParamString:S,template:y,isArray:x,indexOf:E,emptyImageUrl:T,requestFn:F,cancelFn:z,requestAnimFrame:B,cancelAnimFrame:Z};function K(){}K.extend=function(i){var a=function(){w(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=a.__super__=this.prototype,h=l(u);h.constructor=a,a.prototype=h;for(var g in this)Object.prototype.hasOwnProperty.call(this,g)&&g!=="prototype"&&g!=="__super__"&&(a[g]=this[g]);return i.statics&&s(a,i.statics),i.includes&&(te(i.includes),s.apply(null,[h].concat(i.includes))),s(h,i),delete h.statics,delete h.includes,h.options&&(h.options=u.options?l(u.options):{},s(h.options,i.options)),h._initHooks=[],h.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var C=0,A=h._initHooks.length;C<A;C++)h._initHooks[C].call(this)}},a},K.include=function(i){var a=this.prototype.options;return s(this.prototype,i),i.options&&(this.prototype.options=a,this.mergeOptions(i.options)),this},K.mergeOptions=function(i){return s(this.prototype.options,i),this},K.addInitHook=function(i){var a=Array.prototype.slice.call(arguments,1),u=typeof i=="function"?i:function(){this[i].apply(this,a)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function te(i){if(!(typeof L>"u"||!L||!L.Mixin)){i=x(i)?i:[i];for(var a=0;a<i.length;a++)i[a]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var ee={on:function(i,a,u){if(typeof i=="object")for(var h in i)this._on(h,i[h],a);else{i=N(i);for(var g=0,C=i.length;g<C;g++)this._on(i[g],a,u)}return this},off:function(i,a,u){if(!arguments.length)delete this._events;else if(typeof i=="object")for(var h in i)this._off(h,i[h],a);else{i=N(i);for(var g=arguments.length===1,C=0,A=i.length;C<A;C++)g?this._off(i[C]):this._off(i[C],a,u)}return this},_on:function(i,a,u,h){if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}if(this._listens(i,a,u)===!1){u===this&&(u=void 0);var g={fn:a,ctx:u};h&&(g.once=!0),this._events=this._events||{},this._events[i]=this._events[i]||[],this._events[i].push(g)}},_off:function(i,a,u){var h,g,C;if(this._events&&(h=this._events[i],!!h)){if(arguments.length===1){if(this._firingCount)for(g=0,C=h.length;g<C;g++)h[g].fn=v;delete this._events[i];return}if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}var A=this._listens(i,a,u);if(A!==!1){var $=h[A];this._firingCount&&($.fn=v,this._events[i]=h=h.slice()),h.splice(A,1)}}},fire:function(i,a,u){if(!this.listens(i,u))return this;var h=s({},a,{type:i,target:this,sourceTarget:a&&a.sourceTarget||this});if(this._events){var g=this._events[i];if(g){this._firingCount=this._firingCount+1||1;for(var C=0,A=g.length;C<A;C++){var $=g[C],U=$.fn;$.once&&this.off(i,U,$.ctx),U.call($.ctx||this,h)}this._firingCount--}}return u&&this._propagateEvent(h),this},listens:function(i,a,u,h){typeof i!="string"&&console.warn('"string" type argument expected');var g=a;typeof a!="function"&&(h=!!a,g=void 0,u=void 0);var C=this._events&&this._events[i];if(C&&C.length&&this._listens(i,g,u)!==!1)return!0;if(h){for(var A in this._eventParents)if(this._eventParents[A].listens(i,a,u,h))return!0}return!1},_listens:function(i,a,u){if(!this._events)return!1;var h=this._events[i]||[];if(!a)return!!h.length;u===this&&(u=void 0);for(var g=0,C=h.length;g<C;g++)if(h[g].fn===a&&h[g].ctx===u)return g;return!1},once:function(i,a,u){if(typeof i=="object")for(var h in i)this._on(h,i[h],a,!0);else{i=N(i);for(var g=0,C=i.length;g<C;g++)this._on(i[g],a,u,!0)}return this},addEventParent:function(i){return this._eventParents=this._eventParents||{},this._eventParents[f(i)]=i,this},removeEventParent:function(i){return this._eventParents&&delete this._eventParents[f(i)],this},_propagateEvent:function(i){for(var a in this._eventParents)this._eventParents[a].fire(i.type,s({layer:i.target,propagatedFrom:i.target},i),!0)}};ee.addEventListener=ee.on,ee.removeEventListener=ee.clearAllEventListeners=ee.off,ee.addOneTimeEventListener=ee.once,ee.fireEvent=ee.fire,ee.hasEventListeners=ee.listens;var V=K.extend(ee);function P(i,a,u){this.x=u?Math.round(i):i,this.y=u?Math.round(a):a}var M=Math.trunc||function(i){return i>0?Math.floor(i):Math.ceil(i)};P.prototype={clone:function(){return new P(this.x,this.y)},add:function(i){return this.clone()._add(D(i))},_add:function(i){return this.x+=i.x,this.y+=i.y,this},subtract:function(i){return this.clone()._subtract(D(i))},_subtract:function(i){return this.x-=i.x,this.y-=i.y,this},divideBy:function(i){return this.clone()._divideBy(i)},_divideBy:function(i){return this.x/=i,this.y/=i,this},multiplyBy:function(i){return this.clone()._multiplyBy(i)},_multiplyBy:function(i){return this.x*=i,this.y*=i,this},scaleBy:function(i){return new P(this.x*i.x,this.y*i.y)},unscaleBy:function(i){return new P(this.x/i.x,this.y/i.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=M(this.x),this.y=M(this.y),this},distanceTo:function(i){i=D(i);var a=i.x-this.x,u=i.y-this.y;return Math.sqrt(a*a+u*u)},equals:function(i){return i=D(i),i.x===this.x&&i.y===this.y},contains:function(i){return i=D(i),Math.abs(i.x)<=Math.abs(this.x)&&Math.abs(i.y)<=Math.abs(this.y)},toString:function(){return"Point("+b(this.x)+", "+b(this.y)+")"}};function D(i,a,u){return i instanceof P?i:x(i)?new P(i[0],i[1]):i==null?i:typeof i=="object"&&"x"in i&&"y"in i?new P(i.x,i.y):new P(i,a,u)}function Y(i,a){if(i)for(var u=a?[i,a]:i,h=0,g=u.length;h<g;h++)this.extend(u[h])}Y.prototype={extend:function(i){var a,u;if(!i)return this;if(i instanceof P||typeof i[0]=="number"||"x"in i)a=u=D(i);else if(i=R(i),a=i.min,u=i.max,!a||!u)return this;return!this.min&&!this.max?(this.min=a.clone(),this.max=u.clone()):(this.min.x=Math.min(a.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(a.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(i){return D((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,i)},getBottomLeft:function(){return D(this.min.x,this.max.y)},getTopRight:function(){return D(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(i){var a,u;return typeof i[0]=="number"||i instanceof P?i=D(i):i=R(i),i instanceof Y?(a=i.min,u=i.max):a=u=i,a.x>=this.min.x&&u.x<=this.max.x&&a.y>=this.min.y&&u.y<=this.max.y},intersects:function(i){i=R(i);var a=this.min,u=this.max,h=i.min,g=i.max,C=g.x>=a.x&&h.x<=u.x,A=g.y>=a.y&&h.y<=u.y;return C&&A},overlaps:function(i){i=R(i);var a=this.min,u=this.max,h=i.min,g=i.max,C=g.x>a.x&&h.x<u.x,A=g.y>a.y&&h.y<u.y;return C&&A},isValid:function(){return!!(this.min&&this.max)},pad:function(i){var a=this.min,u=this.max,h=Math.abs(a.x-u.x)*i,g=Math.abs(a.y-u.y)*i;return R(D(a.x-h,a.y-g),D(u.x+h,u.y+g))},equals:function(i){return i?(i=R(i),this.min.equals(i.getTopLeft())&&this.max.equals(i.getBottomRight())):!1}};function R(i,a){return!i||i instanceof Y?i:new Y(i,a)}function ne(i,a){if(i)for(var u=a?[i,a]:i,h=0,g=u.length;h<g;h++)this.extend(u[h])}ne.prototype={extend:function(i){var a=this._southWest,u=this._northEast,h,g;if(i instanceof ce)h=i,g=i;else if(i instanceof ne){if(h=i._southWest,g=i._northEast,!h||!g)return this}else return i?this.extend(ae(i)||oe(i)):this;return!a&&!u?(this._southWest=new ce(h.lat,h.lng),this._northEast=new ce(g.lat,g.lng)):(a.lat=Math.min(h.lat,a.lat),a.lng=Math.min(h.lng,a.lng),u.lat=Math.max(g.lat,u.lat),u.lng=Math.max(g.lng,u.lng)),this},pad:function(i){var a=this._southWest,u=this._northEast,h=Math.abs(a.lat-u.lat)*i,g=Math.abs(a.lng-u.lng)*i;return new ne(new ce(a.lat-h,a.lng-g),new ce(u.lat+h,u.lng+g))},getCenter:function(){return new ce((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new ce(this.getNorth(),this.getWest())},getSouthEast:function(){return new ce(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(i){typeof i[0]=="number"||i instanceof ce||"lat"in i?i=ae(i):i=oe(i);var a=this._southWest,u=this._northEast,h,g;return i instanceof ne?(h=i.getSouthWest(),g=i.getNorthEast()):h=g=i,h.lat>=a.lat&&g.lat<=u.lat&&h.lng>=a.lng&&g.lng<=u.lng},intersects:function(i){i=oe(i);var a=this._southWest,u=this._northEast,h=i.getSouthWest(),g=i.getNorthEast(),C=g.lat>=a.lat&&h.lat<=u.lat,A=g.lng>=a.lng&&h.lng<=u.lng;return C&&A},overlaps:function(i){i=oe(i);var a=this._southWest,u=this._northEast,h=i.getSouthWest(),g=i.getNorthEast(),C=g.lat>a.lat&&h.lat<u.lat,A=g.lng>a.lng&&h.lng<u.lng;return C&&A},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(i,a){return i?(i=oe(i),this._southWest.equals(i.getSouthWest(),a)&&this._northEast.equals(i.getNorthEast(),a)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function oe(i,a){return i instanceof ne?i:new ne(i,a)}function ce(i,a,u){if(isNaN(i)||isNaN(a))throw new Error("Invalid LatLng object: ("+i+", "+a+")");this.lat=+i,this.lng=+a,u!==void 0&&(this.alt=+u)}ce.prototype={equals:function(i,a){if(!i)return!1;i=ae(i);var u=Math.max(Math.abs(this.lat-i.lat),Math.abs(this.lng-i.lng));return u<=(a===void 0?1e-9:a)},toString:function(i){return"LatLng("+b(this.lat,i)+", "+b(this.lng,i)+")"},distanceTo:function(i){return Dt.distance(this,ae(i))},wrap:function(){return Dt.wrapLatLng(this)},toBounds:function(i){var a=180*i/40075017,u=a/Math.cos(Math.PI/180*this.lat);return oe([this.lat-a,this.lng-u],[this.lat+a,this.lng+u])},clone:function(){return new ce(this.lat,this.lng,this.alt)}};function ae(i,a,u){return i instanceof ce?i:x(i)&&typeof i[0]!="object"?i.length===3?new ce(i[0],i[1],i[2]):i.length===2?new ce(i[0],i[1]):null:i==null?i:typeof i=="object"&&"lat"in i?new ce(i.lat,"lng"in i?i.lng:i.lon,i.alt):a===void 0?null:new ce(i,a,u)}var at={latLngToPoint:function(i,a){var u=this.projection.project(i),h=this.scale(a);return this.transformation._transform(u,h)},pointToLatLng:function(i,a){var u=this.scale(a),h=this.transformation.untransform(i,u);return this.projection.unproject(h)},project:function(i){return this.projection.project(i)},unproject:function(i){return this.projection.unproject(i)},scale:function(i){return 256*Math.pow(2,i)},zoom:function(i){return Math.log(i/256)/Math.LN2},getProjectedBounds:function(i){if(this.infinite)return null;var a=this.projection.bounds,u=this.scale(i),h=this.transformation.transform(a.min,u),g=this.transformation.transform(a.max,u);return new Y(h,g)},infinite:!1,wrapLatLng:function(i){var a=this.wrapLng?p(i.lng,this.wrapLng,!0):i.lng,u=this.wrapLat?p(i.lat,this.wrapLat,!0):i.lat,h=i.alt;return new ce(u,a,h)},wrapLatLngBounds:function(i){var a=i.getCenter(),u=this.wrapLatLng(a),h=a.lat-u.lat,g=a.lng-u.lng;if(h===0&&g===0)return i;var C=i.getSouthWest(),A=i.getNorthEast(),$=new ce(C.lat-h,C.lng-g),U=new ce(A.lat-h,A.lng-g);return new ne($,U)}},Dt=s({},at,{wrapLng:[-180,180],R:6371e3,distance:function(i,a){var u=Math.PI/180,h=i.lat*u,g=a.lat*u,C=Math.sin((a.lat-i.lat)*u/2),A=Math.sin((a.lng-i.lng)*u/2),$=C*C+Math.cos(h)*Math.cos(g)*A*A,U=2*Math.atan2(Math.sqrt($),Math.sqrt(1-$));return this.R*U}}),Dn=6378137,Kr={R:Dn,MAX_LATITUDE:85.0511287798,project:function(i){var a=Math.PI/180,u=this.MAX_LATITUDE,h=Math.max(Math.min(u,i.lat),-u),g=Math.sin(h*a);return new P(this.R*i.lng*a,this.R*Math.log((1+g)/(1-g))/2)},unproject:function(i){var a=180/Math.PI;return new ce((2*Math.atan(Math.exp(i.y/this.R))-Math.PI/2)*a,i.x*a/this.R)},bounds:function(){var i=Dn*Math.PI;return new Y([-i,-i],[i,i])}()};function xr(i,a,u,h){if(x(i)){this._a=i[0],this._b=i[1],this._c=i[2],this._d=i[3];return}this._a=i,this._b=a,this._c=u,this._d=h}xr.prototype={transform:function(i,a){return this._transform(i.clone(),a)},_transform:function(i,a){return a=a||1,i.x=a*(this._a*i.x+this._b),i.y=a*(this._c*i.y+this._d),i},untransform:function(i,a){return a=a||1,new P((i.x/a-this._b)/this._a,(i.y/a-this._d)/this._c)}};function Bt(i,a,u,h){return new xr(i,a,u,h)}var Xu=s({},Dt,{code:"EPSG:3857",projection:Kr,transformation:function(){var i=.5/(Math.PI*Kr.R);return Bt(i,.5,-i,.5)}()}),v2=s({},Xu,{code:"EPSG:900913"});function Dp(i){return document.createElementNS("http://www.w3.org/2000/svg",i)}function Bp(i,a){var u="",h,g,C,A,$,U;for(h=0,C=i.length;h<C;h++){for($=i[h],g=0,A=$.length;g<A;g++)U=$[g],u+=(g?"L":"M")+U.x+" "+U.y;u+=a?le.svg?"z":"x":""}return u||"M0 0"}var Qu=document.documentElement.style,Na="ActiveXObject"in window,y2=Na&&!document.addEventListener,Fp="msLaunchUri"in navigator&&!("documentMode"in document),Ju=Bn("webkit"),Up=Bn("android"),Hp=Bn("android 2")||Bn("android 3"),x2=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),w2=Up&&Bn("Google")&&x2<537&&!("AudioNode"in window),ed=!!window.opera,qp=!Fp&&Bn("chrome"),Wp=Bn("gecko")&&!Ju&&!ed&&!Na,b2=!qp&&Bn("safari"),Zp=Bn("phantom"),Vp="OTransition"in Qu,_2=navigator.platform.indexOf("Win")===0,Gp=Na&&"transition"in Qu,td="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!Hp,Yp="MozPerspective"in Qu,S2=!window.L_DISABLE_3D&&(Gp||td||Yp)&&!Vp&&!Zp,Gs=typeof orientation<"u"||Bn("mobile"),k2=Gs&&Ju,j2=Gs&&td,Kp=!window.PointerEvent&&window.MSPointerEvent,Xp=!!(window.PointerEvent||Kp),Qp="ontouchstart"in window||!!window.TouchEvent,N2=!window.L_NO_TOUCH&&(Qp||Xp),C2=Gs&&ed,P2=Gs&&Wp,E2=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,T2=function(){var i=!1;try{var a=Object.defineProperty({},"passive",{get:function(){i=!0}});window.addEventListener("testPassiveEventSupport",v,a),window.removeEventListener("testPassiveEventSupport",v,a)}catch{}return i}(),L2=function(){return!!document.createElement("canvas").getContext}(),nd=!!(document.createElementNS&&Dp("svg").createSVGRect),O2=!!nd&&function(){var i=document.createElement("div");return i.innerHTML="<svg/>",(i.firstChild&&i.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),A2=!nd&&function(){try{var i=document.createElement("div");i.innerHTML='<v:shape adj="1"/>';var a=i.firstChild;return a.style.behavior="url(#default#VML)",a&&typeof a.adj=="object"}catch{return!1}}(),I2=navigator.platform.indexOf("Mac")===0,R2=navigator.platform.indexOf("Linux")===0;function Bn(i){return navigator.userAgent.toLowerCase().indexOf(i)>=0}var le={ie:Na,ielt9:y2,edge:Fp,webkit:Ju,android:Up,android23:Hp,androidStock:w2,opera:ed,chrome:qp,gecko:Wp,safari:b2,phantom:Zp,opera12:Vp,win:_2,ie3d:Gp,webkit3d:td,gecko3d:Yp,any3d:S2,mobile:Gs,mobileWebkit:k2,mobileWebkit3d:j2,msPointer:Kp,pointer:Xp,touch:N2,touchNative:Qp,mobileOpera:C2,mobileGecko:P2,retina:E2,passiveEvents:T2,canvas:L2,svg:nd,vml:A2,inlineSvg:O2,mac:I2,linux:R2},Jp=le.msPointer?"MSPointerDown":"pointerdown",eg=le.msPointer?"MSPointerMove":"pointermove",tg=le.msPointer?"MSPointerUp":"pointerup",ng=le.msPointer?"MSPointerCancel":"pointercancel",rd={touchstart:Jp,touchmove:eg,touchend:tg,touchcancel:ng},rg={touchstart:F2,touchmove:Ca,touchend:Ca,touchcancel:Ca},Li={},ig=!1;function z2(i,a,u){return a==="touchstart"&&B2(),rg[a]?(u=rg[a].bind(this,u),i.addEventListener(rd[a],u,!1),u):(console.warn("wrong event specified:",a),v)}function M2(i,a,u){if(!rd[a]){console.warn("wrong event specified:",a);return}i.removeEventListener(rd[a],u,!1)}function $2(i){Li[i.pointerId]=i}function D2(i){Li[i.pointerId]&&(Li[i.pointerId]=i)}function sg(i){delete Li[i.pointerId]}function B2(){ig||(document.addEventListener(Jp,$2,!0),document.addEventListener(eg,D2,!0),document.addEventListener(tg,sg,!0),document.addEventListener(ng,sg,!0),ig=!0)}function Ca(i,a){if(a.pointerType!==(a.MSPOINTER_TYPE_MOUSE||"mouse")){a.touches=[];for(var u in Li)a.touches.push(Li[u]);a.changedTouches=[a],i(a)}}function F2(i,a){a.MSPOINTER_TYPE_TOUCH&&a.pointerType===a.MSPOINTER_TYPE_TOUCH&&vt(a),Ca(i,a)}function U2(i){var a={},u,h;for(h in i)u=i[h],a[h]=u&&u.bind?u.bind(i):u;return i=a,a.type="dblclick",a.detail=2,a.isTrusted=!1,a._simulated=!0,a}var H2=200;function q2(i,a){i.addEventListener("dblclick",a);var u=0,h;function g(C){if(C.detail!==1){h=C.detail;return}if(!(C.pointerType==="mouse"||C.sourceCapabilities&&!C.sourceCapabilities.firesTouchEvents)){var A=ug(C);if(!(A.some(function(U){return U instanceof HTMLLabelElement&&U.attributes.for})&&!A.some(function(U){return U instanceof HTMLInputElement||U instanceof HTMLSelectElement}))){var $=Date.now();$-u<=H2?(h++,h===2&&a(U2(C))):h=1,u=$}}}return i.addEventListener("click",g),{dblclick:a,simDblclick:g}}function W2(i,a){i.removeEventListener("dblclick",a.dblclick),i.removeEventListener("click",a.simDblclick)}var id=Ta(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),Ys=Ta(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),og=Ys==="webkitTransition"||Ys==="OTransition"?Ys+"End":"transitionend";function ag(i){return typeof i=="string"?document.getElementById(i):i}function Ks(i,a){var u=i.style[a]||i.currentStyle&&i.currentStyle[a];if((!u||u==="auto")&&document.defaultView){var h=document.defaultView.getComputedStyle(i,null);u=h?h[a]:null}return u==="auto"?null:u}function je(i,a,u){var h=document.createElement(i);return h.className=a||"",u&&u.appendChild(h),h}function qe(i){var a=i.parentNode;a&&a.removeChild(i)}function Pa(i){for(;i.firstChild;)i.removeChild(i.firstChild)}function Oi(i){var a=i.parentNode;a&&a.lastChild!==i&&a.appendChild(i)}function Ai(i){var a=i.parentNode;a&&a.firstChild!==i&&a.insertBefore(i,a.firstChild)}function sd(i,a){if(i.classList!==void 0)return i.classList.contains(a);var u=Ea(i);return u.length>0&&new RegExp("(^|\\s)"+a+"(\\s|$)").test(u)}function ge(i,a){if(i.classList!==void 0)for(var u=N(a),h=0,g=u.length;h<g;h++)i.classList.add(u[h]);else if(!sd(i,a)){var C=Ea(i);od(i,(C?C+" ":"")+a)}}function Ke(i,a){i.classList!==void 0?i.classList.remove(a):od(i,k((" "+Ea(i)+" ").replace(" "+a+" "," ")))}function od(i,a){i.className.baseVal===void 0?i.className=a:i.className.baseVal=a}function Ea(i){return i.correspondingElement&&(i=i.correspondingElement),i.className.baseVal===void 0?i.className:i.className.baseVal}function fn(i,a){"opacity"in i.style?i.style.opacity=a:"filter"in i.style&&Z2(i,a)}function Z2(i,a){var u=!1,h="DXImageTransform.Microsoft.Alpha";try{u=i.filters.item(h)}catch{if(a===1)return}a=Math.round(a*100),u?(u.Enabled=a!==100,u.Opacity=a):i.style.filter+=" progid:"+h+"(opacity="+a+")"}function Ta(i){for(var a=document.documentElement.style,u=0;u<i.length;u++)if(i[u]in a)return i[u];return!1}function Xr(i,a,u){var h=a||new P(0,0);i.style[id]=(le.ie3d?"translate("+h.x+"px,"+h.y+"px)":"translate3d("+h.x+"px,"+h.y+"px,0)")+(u?" scale("+u+")":"")}function tt(i,a){i._leaflet_pos=a,le.any3d?Xr(i,a):(i.style.left=a.x+"px",i.style.top=a.y+"px")}function Qr(i){return i._leaflet_pos||new P(0,0)}var Xs,Qs,ad;if("onselectstart"in document)Xs=function(){he(window,"selectstart",vt)},Qs=function(){ze(window,"selectstart",vt)};else{var Js=Ta(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Xs=function(){if(Js){var i=document.documentElement.style;ad=i[Js],i[Js]="none"}},Qs=function(){Js&&(document.documentElement.style[Js]=ad,ad=void 0)}}function ld(){he(window,"dragstart",vt)}function cd(){ze(window,"dragstart",vt)}var La,ud;function dd(i){for(;i.tabIndex===-1;)i=i.parentNode;i.style&&(Oa(),La=i,ud=i.style.outlineStyle,i.style.outlineStyle="none",he(window,"keydown",Oa))}function Oa(){La&&(La.style.outlineStyle=ud,La=void 0,ud=void 0,ze(window,"keydown",Oa))}function lg(i){do i=i.parentNode;while((!i.offsetWidth||!i.offsetHeight)&&i!==document.body);return i}function fd(i){var a=i.getBoundingClientRect();return{x:a.width/i.offsetWidth||1,y:a.height/i.offsetHeight||1,boundingClientRect:a}}var V2={__proto__:null,TRANSFORM:id,TRANSITION:Ys,TRANSITION_END:og,get:ag,getStyle:Ks,create:je,remove:qe,empty:Pa,toFront:Oi,toBack:Ai,hasClass:sd,addClass:ge,removeClass:Ke,setClass:od,getClass:Ea,setOpacity:fn,testProp:Ta,setTransform:Xr,setPosition:tt,getPosition:Qr,get disableTextSelection(){return Xs},get enableTextSelection(){return Qs},disableImageDrag:ld,enableImageDrag:cd,preventOutline:dd,restoreOutline:Oa,getSizedParentNode:lg,getScale:fd};function he(i,a,u,h){if(a&&typeof a=="object")for(var g in a)md(i,g,a[g],u);else{a=N(a);for(var C=0,A=a.length;C<A;C++)md(i,a[C],u,h)}return this}var Fn="_leaflet_events";function ze(i,a,u,h){if(arguments.length===1)cg(i),delete i[Fn];else if(a&&typeof a=="object")for(var g in a)pd(i,g,a[g],u);else if(a=N(a),arguments.length===2)cg(i,function($){return E(a,$)!==-1});else for(var C=0,A=a.length;C<A;C++)pd(i,a[C],u,h);return this}function cg(i,a){for(var u in i[Fn]){var h=u.split(/\d/)[0];(!a||a(h))&&pd(i,h,null,null,u)}}var hd={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function md(i,a,u,h){var g=a+f(u)+(h?"_"+f(h):"");if(i[Fn]&&i[Fn][g])return this;var C=function($){return u.call(h||i,$||window.event)},A=C;!le.touchNative&&le.pointer&&a.indexOf("touch")===0?C=z2(i,a,C):le.touch&&a==="dblclick"?C=q2(i,C):"addEventListener"in i?a==="touchstart"||a==="touchmove"||a==="wheel"||a==="mousewheel"?i.addEventListener(hd[a]||a,C,le.passiveEvents?{passive:!1}:!1):a==="mouseenter"||a==="mouseleave"?(C=function($){$=$||window.event,vd(i,$)&&A($)},i.addEventListener(hd[a],C,!1)):i.addEventListener(a,A,!1):i.attachEvent("on"+a,C),i[Fn]=i[Fn]||{},i[Fn][g]=C}function pd(i,a,u,h,g){g=g||a+f(u)+(h?"_"+f(h):"");var C=i[Fn]&&i[Fn][g];if(!C)return this;!le.touchNative&&le.pointer&&a.indexOf("touch")===0?M2(i,a,C):le.touch&&a==="dblclick"?W2(i,C):"removeEventListener"in i?i.removeEventListener(hd[a]||a,C,!1):i.detachEvent("on"+a,C),i[Fn][g]=null}function Jr(i){return i.stopPropagation?i.stopPropagation():i.originalEvent?i.originalEvent._stopped=!0:i.cancelBubble=!0,this}function gd(i){return md(i,"wheel",Jr),this}function eo(i){return he(i,"mousedown touchstart dblclick contextmenu",Jr),i._leaflet_disable_click=!0,this}function vt(i){return i.preventDefault?i.preventDefault():i.returnValue=!1,this}function ei(i){return vt(i),Jr(i),this}function ug(i){if(i.composedPath)return i.composedPath();for(var a=[],u=i.target;u;)a.push(u),u=u.parentNode;return a}function dg(i,a){if(!a)return new P(i.clientX,i.clientY);var u=fd(a),h=u.boundingClientRect;return new P((i.clientX-h.left)/u.x-a.clientLeft,(i.clientY-h.top)/u.y-a.clientTop)}var G2=le.linux&&le.chrome?window.devicePixelRatio:le.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function fg(i){return le.edge?i.wheelDeltaY/2:i.deltaY&&i.deltaMode===0?-i.deltaY/G2:i.deltaY&&i.deltaMode===1?-i.deltaY*20:i.deltaY&&i.deltaMode===2?-i.deltaY*60:i.deltaX||i.deltaZ?0:i.wheelDelta?(i.wheelDeltaY||i.wheelDelta)/2:i.detail&&Math.abs(i.detail)<32765?-i.detail*20:i.detail?i.detail/-32765*60:0}function vd(i,a){var u=a.relatedTarget;if(!u)return!0;try{for(;u&&u!==i;)u=u.parentNode}catch{return!1}return u!==i}var Y2={__proto__:null,on:he,off:ze,stopPropagation:Jr,disableScrollPropagation:gd,disableClickPropagation:eo,preventDefault:vt,stop:ei,getPropagationPath:ug,getMousePosition:dg,getWheelDelta:fg,isExternalTarget:vd,addListener:he,removeListener:ze},hg=V.extend({run:function(i,a,u,h){this.stop(),this._el=i,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(h||.5,.2),this._startPos=Qr(i),this._offset=a.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=B(this._animate,this),this._step()},_step:function(i){var a=+new Date-this._startTime,u=this._duration*1e3;a<u?this._runFrame(this._easeOut(a/u),i):(this._runFrame(1),this._complete())},_runFrame:function(i,a){var u=this._startPos.add(this._offset.multiplyBy(i));a&&u._round(),tt(this._el,u),this.fire("step")},_complete:function(){Z(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(i){return 1-Math.pow(1-i,this._easeOutPower)}}),Se=V.extend({options:{crs:Xu,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(i,a){a=w(this,a),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(i),this._initLayout(),this._onResize=c(this._onResize,this),this._initEvents(),a.maxBounds&&this.setMaxBounds(a.maxBounds),a.zoom!==void 0&&(this._zoom=this._limitZoom(a.zoom)),a.center&&a.zoom!==void 0&&this.setView(ae(a.center),a.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=Ys&&le.any3d&&!le.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),he(this._proxy,og,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(i,a,u){if(a=a===void 0?this._zoom:this._limitZoom(a),i=this._limitCenter(ae(i),a,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=s({animate:u.animate},u.zoom),u.pan=s({animate:u.animate,duration:u.duration},u.pan));var h=this._zoom!==a?this._tryAnimatedZoom&&this._tryAnimatedZoom(i,a,u.zoom):this._tryAnimatedPan(i,u.pan);if(h)return clearTimeout(this._sizeTimer),this}return this._resetView(i,a,u.pan&&u.pan.noMoveStart),this},setZoom:function(i,a){return this._loaded?this.setView(this.getCenter(),i,{zoom:a}):(this._zoom=i,this)},zoomIn:function(i,a){return i=i||(le.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+i,a)},zoomOut:function(i,a){return i=i||(le.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-i,a)},setZoomAround:function(i,a,u){var h=this.getZoomScale(a),g=this.getSize().divideBy(2),C=i instanceof P?i:this.latLngToContainerPoint(i),A=C.subtract(g).multiplyBy(1-1/h),$=this.containerPointToLatLng(g.add(A));return this.setView($,a,{zoom:u})},_getBoundsCenterZoom:function(i,a){a=a||{},i=i.getBounds?i.getBounds():oe(i);var u=D(a.paddingTopLeft||a.padding||[0,0]),h=D(a.paddingBottomRight||a.padding||[0,0]),g=this.getBoundsZoom(i,!1,u.add(h));if(g=typeof a.maxZoom=="number"?Math.min(a.maxZoom,g):g,g===1/0)return{center:i.getCenter(),zoom:g};var C=h.subtract(u).divideBy(2),A=this.project(i.getSouthWest(),g),$=this.project(i.getNorthEast(),g),U=this.unproject(A.add($).divideBy(2).add(C),g);return{center:U,zoom:g}},fitBounds:function(i,a){if(i=oe(i),!i.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(i,a);return this.setView(u.center,u.zoom,a)},fitWorld:function(i){return this.fitBounds([[-90,-180],[90,180]],i)},panTo:function(i,a){return this.setView(i,this._zoom,{pan:a})},panBy:function(i,a){if(i=D(i).round(),a=a||{},!i.x&&!i.y)return this.fire("moveend");if(a.animate!==!0&&!this.getSize().contains(i))return this._resetView(this.unproject(this.project(this.getCenter()).add(i)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new hg,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),a.noMoveStart||this.fire("movestart"),a.animate!==!1){ge(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(i).round();this._panAnim.run(this._mapPane,u,a.duration||.25,a.easeLinearity)}else this._rawPanBy(i),this.fire("move").fire("moveend");return this},flyTo:function(i,a,u){if(u=u||{},u.animate===!1||!le.any3d)return this.setView(i,a,u);this._stop();var h=this.project(this.getCenter()),g=this.project(i),C=this.getSize(),A=this._zoom;i=ae(i),a=a===void 0?A:a;var $=Math.max(C.x,C.y),U=$*this.getZoomScale(A,a),G=g.distanceTo(h)||1,ie=1.42,fe=ie*ie;function ye(nt){var qa=nt?-1:1,MS=nt?U:$,$S=U*U-$*$+qa*fe*fe*G*G,DS=2*MS*fe*G,Pd=$S/DS,Vg=Math.sqrt(Pd*Pd+1)-Pd,BS=Vg<1e-9?-18:Math.log(Vg);return BS}function Tt(nt){return(Math.exp(nt)-Math.exp(-nt))/2}function dt(nt){return(Math.exp(nt)+Math.exp(-nt))/2}function mn(nt){return Tt(nt)/dt(nt)}var Ft=ye(0);function Di(nt){return $*(dt(Ft)/dt(Ft+ie*nt))}function AS(nt){return $*(dt(Ft)*mn(Ft+ie*nt)-Tt(Ft))/fe}function IS(nt){return 1-Math.pow(1-nt,1.5)}var RS=Date.now(),Wg=(ye(1)-Ft)/ie,zS=u.duration?1e3*u.duration:1e3*Wg*.8;function Zg(){var nt=(Date.now()-RS)/zS,qa=IS(nt)*Wg;nt<=1?(this._flyToFrame=B(Zg,this),this._move(this.unproject(h.add(g.subtract(h).multiplyBy(AS(qa)/G)),A),this.getScaleZoom($/Di(qa),A),{flyTo:!0})):this._move(i,a)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),Zg.call(this),this},flyToBounds:function(i,a){var u=this._getBoundsCenterZoom(i,a);return this.flyTo(u.center,u.zoom,a)},setMaxBounds:function(i){return i=oe(i),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),i.isValid()?(this.options.maxBounds=i,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(i){var a=this.options.minZoom;return this.options.minZoom=i,this._loaded&&a!==i&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(i):this},setMaxZoom:function(i){var a=this.options.maxZoom;return this.options.maxZoom=i,this._loaded&&a!==i&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(i):this},panInsideBounds:function(i,a){this._enforcingBounds=!0;var u=this.getCenter(),h=this._limitCenter(u,this._zoom,oe(i));return u.equals(h)||this.panTo(h,a),this._enforcingBounds=!1,this},panInside:function(i,a){a=a||{};var u=D(a.paddingTopLeft||a.padding||[0,0]),h=D(a.paddingBottomRight||a.padding||[0,0]),g=this.project(this.getCenter()),C=this.project(i),A=this.getPixelBounds(),$=R([A.min.add(u),A.max.subtract(h)]),U=$.getSize();if(!$.contains(C)){this._enforcingBounds=!0;var G=C.subtract($.getCenter()),ie=$.extend(C).getSize().subtract(U);g.x+=G.x<0?-ie.x:ie.x,g.y+=G.y<0?-ie.y:ie.y,this.panTo(this.unproject(g),a),this._enforcingBounds=!1}return this},invalidateSize:function(i){if(!this._loaded)return this;i=s({animate:!1,pan:!0},i===!0?{animate:!0}:i);var a=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),h=a.divideBy(2).round(),g=u.divideBy(2).round(),C=h.subtract(g);return!C.x&&!C.y?this:(i.animate&&i.pan?this.panBy(C):(i.pan&&this._rawPanBy(C),this.fire("move"),i.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(c(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:a,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(i){if(i=this._locateOptions=s({timeout:1e4,watch:!1},i),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var a=c(this._handleGeolocationResponse,this),u=c(this._handleGeolocationError,this);return i.watch?this._locationWatchId=navigator.geolocation.watchPosition(a,u,i):navigator.geolocation.getCurrentPosition(a,u,i),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(i){if(this._container._leaflet_id){var a=i.code,u=i.message||(a===1?"permission denied":a===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:a,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(i){if(this._container._leaflet_id){var a=i.coords.latitude,u=i.coords.longitude,h=new ce(a,u),g=h.toBounds(i.coords.accuracy*2),C=this._locateOptions;if(C.setView){var A=this.getBoundsZoom(g);this.setView(h,C.maxZoom?Math.min(A,C.maxZoom):A)}var $={latlng:h,bounds:g,timestamp:i.timestamp};for(var U in i.coords)typeof i.coords[U]=="number"&&($[U]=i.coords[U]);this.fire("locationfound",$)}},addHandler:function(i,a){if(!a)return this;var u=this[i]=new a(this);return this._handlers.push(u),this.options[i]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),qe(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(Z(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var i;for(i in this._layers)this._layers[i].remove();for(i in this._panes)qe(this._panes[i]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(i,a){var u="leaflet-pane"+(i?" leaflet-"+i.replace("Pane","")+"-pane":""),h=je("div",u,a||this._mapPane);return i&&(this._panes[i]=h),h},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var i=this.getPixelBounds(),a=this.unproject(i.getBottomLeft()),u=this.unproject(i.getTopRight());return new ne(a,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(i,a,u){i=oe(i),u=D(u||[0,0]);var h=this.getZoom()||0,g=this.getMinZoom(),C=this.getMaxZoom(),A=i.getNorthWest(),$=i.getSouthEast(),U=this.getSize().subtract(u),G=R(this.project($,h),this.project(A,h)).getSize(),ie=le.any3d?this.options.zoomSnap:1,fe=U.x/G.x,ye=U.y/G.y,Tt=a?Math.max(fe,ye):Math.min(fe,ye);return h=this.getScaleZoom(Tt,h),ie&&(h=Math.round(h/(ie/100))*(ie/100),h=a?Math.ceil(h/ie)*ie:Math.floor(h/ie)*ie),Math.max(g,Math.min(C,h))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new P(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(i,a){var u=this._getTopLeftPoint(i,a);return new Y(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(i){return this.options.crs.getProjectedBounds(i===void 0?this.getZoom():i)},getPane:function(i){return typeof i=="string"?this._panes[i]:i},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(i,a){var u=this.options.crs;return a=a===void 0?this._zoom:a,u.scale(i)/u.scale(a)},getScaleZoom:function(i,a){var u=this.options.crs;a=a===void 0?this._zoom:a;var h=u.zoom(i*u.scale(a));return isNaN(h)?1/0:h},project:function(i,a){return a=a===void 0?this._zoom:a,this.options.crs.latLngToPoint(ae(i),a)},unproject:function(i,a){return a=a===void 0?this._zoom:a,this.options.crs.pointToLatLng(D(i),a)},layerPointToLatLng:function(i){var a=D(i).add(this.getPixelOrigin());return this.unproject(a)},latLngToLayerPoint:function(i){var a=this.project(ae(i))._round();return a._subtract(this.getPixelOrigin())},wrapLatLng:function(i){return this.options.crs.wrapLatLng(ae(i))},wrapLatLngBounds:function(i){return this.options.crs.wrapLatLngBounds(oe(i))},distance:function(i,a){return this.options.crs.distance(ae(i),ae(a))},containerPointToLayerPoint:function(i){return D(i).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(i){return D(i).add(this._getMapPanePos())},containerPointToLatLng:function(i){var a=this.containerPointToLayerPoint(D(i));return this.layerPointToLatLng(a)},latLngToContainerPoint:function(i){return this.layerPointToContainerPoint(this.latLngToLayerPoint(ae(i)))},mouseEventToContainerPoint:function(i){return dg(i,this._container)},mouseEventToLayerPoint:function(i){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(i))},mouseEventToLatLng:function(i){return this.layerPointToLatLng(this.mouseEventToLayerPoint(i))},_initContainer:function(i){var a=this._container=ag(i);if(a){if(a._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");he(a,"scroll",this._onScroll,this),this._containerId=f(a)},_initLayout:function(){var i=this._container;this._fadeAnimated=this.options.fadeAnimation&&le.any3d,ge(i,"leaflet-container"+(le.touch?" leaflet-touch":"")+(le.retina?" leaflet-retina":"")+(le.ielt9?" leaflet-oldie":"")+(le.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var a=Ks(i,"position");a!=="absolute"&&a!=="relative"&&a!=="fixed"&&a!=="sticky"&&(i.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var i=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),tt(this._mapPane,new P(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(ge(i.markerPane,"leaflet-zoom-hide"),ge(i.shadowPane,"leaflet-zoom-hide"))},_resetView:function(i,a,u){tt(this._mapPane,new P(0,0));var h=!this._loaded;this._loaded=!0,a=this._limitZoom(a),this.fire("viewprereset");var g=this._zoom!==a;this._moveStart(g,u)._move(i,a)._moveEnd(g),this.fire("viewreset"),h&&this.fire("load")},_moveStart:function(i,a){return i&&this.fire("zoomstart"),a||this.fire("movestart"),this},_move:function(i,a,u,h){a===void 0&&(a=this._zoom);var g=this._zoom!==a;return this._zoom=a,this._lastCenter=i,this._pixelOrigin=this._getNewPixelOrigin(i),h?u&&u.pinch&&this.fire("zoom",u):((g||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(i){return i&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return Z(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(i){tt(this._mapPane,this._getMapPanePos().subtract(i))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(i){this._targets={},this._targets[f(this._container)]=this;var a=i?ze:he;a(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&a(window,"resize",this._onResize,this),le.any3d&&this.options.transform3DLimit&&(i?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){Z(this._resizeRequest),this._resizeRequest=B(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var i=this._getMapPanePos();Math.max(Math.abs(i.x),Math.abs(i.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(i,a){for(var u=[],h,g=a==="mouseout"||a==="mouseover",C=i.target||i.srcElement,A=!1;C;){if(h=this._targets[f(C)],h&&(a==="click"||a==="preclick")&&this._draggableMoved(h)){A=!0;break}if(h&&h.listens(a,!0)&&(g&&!vd(C,i)||(u.push(h),g))||C===this._container)break;C=C.parentNode}return!u.length&&!A&&!g&&this.listens(a,!0)&&(u=[this]),u},_isClickDisabled:function(i){for(;i&&i!==this._container;){if(i._leaflet_disable_click)return!0;i=i.parentNode}},_handleDOMEvent:function(i){var a=i.target||i.srcElement;if(!(!this._loaded||a._leaflet_disable_events||i.type==="click"&&this._isClickDisabled(a))){var u=i.type;u==="mousedown"&&dd(a),this._fireDOMEvent(i,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(i,a,u){if(i.type==="click"){var h=s({},i);h.type="preclick",this._fireDOMEvent(h,h.type,u)}var g=this._findEventTargets(i,a);if(u){for(var C=[],A=0;A<u.length;A++)u[A].listens(a,!0)&&C.push(u[A]);g=C.concat(g)}if(g.length){a==="contextmenu"&&vt(i);var $=g[0],U={originalEvent:i};if(i.type!=="keypress"&&i.type!=="keydown"&&i.type!=="keyup"){var G=$.getLatLng&&(!$._radius||$._radius<=10);U.containerPoint=G?this.latLngToContainerPoint($.getLatLng()):this.mouseEventToContainerPoint(i),U.layerPoint=this.containerPointToLayerPoint(U.containerPoint),U.latlng=G?$.getLatLng():this.layerPointToLatLng(U.layerPoint)}for(A=0;A<g.length;A++)if(g[A].fire(a,U,!0),U.originalEvent._stopped||g[A].options.bubblingMouseEvents===!1&&E(this._mouseEvents,a)!==-1)return}},_draggableMoved:function(i){return i=i.dragging&&i.dragging.enabled()?i:this,i.dragging&&i.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var i=0,a=this._handlers.length;i<a;i++)this._handlers[i].disable()},whenReady:function(i,a){return this._loaded?i.call(a||this,{target:this}):this.on("load",i,a),this},_getMapPanePos:function(){return Qr(this._mapPane)||new P(0,0)},_moved:function(){var i=this._getMapPanePos();return i&&!i.equals([0,0])},_getTopLeftPoint:function(i,a){var u=i&&a!==void 0?this._getNewPixelOrigin(i,a):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(i,a){var u=this.getSize()._divideBy(2);return this.project(i,a)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(i,a,u){var h=this._getNewPixelOrigin(u,a);return this.project(i,a)._subtract(h)},_latLngBoundsToNewLayerBounds:function(i,a,u){var h=this._getNewPixelOrigin(u,a);return R([this.project(i.getSouthWest(),a)._subtract(h),this.project(i.getNorthWest(),a)._subtract(h),this.project(i.getSouthEast(),a)._subtract(h),this.project(i.getNorthEast(),a)._subtract(h)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(i){return this.latLngToLayerPoint(i).subtract(this._getCenterLayerPoint())},_limitCenter:function(i,a,u){if(!u)return i;var h=this.project(i,a),g=this.getSize().divideBy(2),C=new Y(h.subtract(g),h.add(g)),A=this._getBoundsOffset(C,u,a);return Math.abs(A.x)<=1&&Math.abs(A.y)<=1?i:this.unproject(h.add(A),a)},_limitOffset:function(i,a){if(!a)return i;var u=this.getPixelBounds(),h=new Y(u.min.add(i),u.max.add(i));return i.add(this._getBoundsOffset(h,a))},_getBoundsOffset:function(i,a,u){var h=R(this.project(a.getNorthEast(),u),this.project(a.getSouthWest(),u)),g=h.min.subtract(i.min),C=h.max.subtract(i.max),A=this._rebound(g.x,-C.x),$=this._rebound(g.y,-C.y);return new P(A,$)},_rebound:function(i,a){return i+a>0?Math.round(i-a)/2:Math.max(0,Math.ceil(i))-Math.max(0,Math.floor(a))},_limitZoom:function(i){var a=this.getMinZoom(),u=this.getMaxZoom(),h=le.any3d?this.options.zoomSnap:1;return h&&(i=Math.round(i/h)*h),Math.max(a,Math.min(u,i))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){Ke(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(i,a){var u=this._getCenterOffset(i)._trunc();return(a&&a.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,a),!0)},_createAnimProxy:function(){var i=this._proxy=je("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(i),this.on("zoomanim",function(a){var u=id,h=this._proxy.style[u];Xr(this._proxy,this.project(a.center,a.zoom),this.getZoomScale(a.zoom,1)),h===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){qe(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var i=this.getCenter(),a=this.getZoom();Xr(this._proxy,this.project(i,a),this.getZoomScale(a,1))},_catchTransitionEnd:function(i){this._animatingZoom&&i.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(i,a,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(a-this._zoom)>this.options.zoomAnimationThreshold)return!1;var h=this.getZoomScale(a),g=this._getCenterOffset(i)._divideBy(1-1/h);return u.animate!==!0&&!this.getSize().contains(g)?!1:(B(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(i,a,!0)},this),!0)},_animateZoom:function(i,a,u,h){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=i,this._animateToZoom=a,ge(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:i,zoom:a,noUpdate:h}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(c(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&Ke(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function K2(i,a){return new Se(i,a)}var Nn=K.extend({options:{position:"topright"},initialize:function(i){w(this,i)},getPosition:function(){return this.options.position},setPosition:function(i){var a=this._map;return a&&a.removeControl(this),this.options.position=i,a&&a.addControl(this),this},getContainer:function(){return this._container},addTo:function(i){this.remove(),this._map=i;var a=this._container=this.onAdd(i),u=this.getPosition(),h=i._controlCorners[u];return ge(a,"leaflet-control"),u.indexOf("bottom")!==-1?h.insertBefore(a,h.firstChild):h.appendChild(a),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(qe(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(i){this._map&&i&&i.screenX>0&&i.screenY>0&&this._map.getContainer().focus()}}),to=function(i){return new Nn(i)};Se.include({addControl:function(i){return i.addTo(this),this},removeControl:function(i){return i.remove(),this},_initControlPos:function(){var i=this._controlCorners={},a="leaflet-",u=this._controlContainer=je("div",a+"control-container",this._container);function h(g,C){var A=a+g+" "+a+C;i[g+C]=je("div",A,u)}h("top","left"),h("top","right"),h("bottom","left"),h("bottom","right")},_clearControlPos:function(){for(var i in this._controlCorners)qe(this._controlCorners[i]);qe(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var mg=Nn.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(i,a,u,h){return u<h?-1:h<u?1:0}},initialize:function(i,a,u){w(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var h in i)this._addLayer(i[h],h);for(h in a)this._addLayer(a[h],h,!0)},onAdd:function(i){this._initLayout(),this._update(),this._map=i,i.on("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(i){return Nn.prototype.addTo.call(this,i),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var i=0;i<this._layers.length;i++)this._layers[i].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(i,a){return this._addLayer(i,a),this._map?this._update():this},addOverlay:function(i,a){return this._addLayer(i,a,!0),this._map?this._update():this},removeLayer:function(i){i.off("add remove",this._onLayerChange,this);var a=this._getLayer(f(i));return a&&this._layers.splice(this._layers.indexOf(a),1),this._map?this._update():this},expand:function(){ge(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var i=this._map.getSize().y-(this._container.offsetTop+50);return i<this._section.clientHeight?(ge(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=i+"px"):Ke(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return Ke(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var i="leaflet-control-layers",a=this._container=je("div",i),u=this.options.collapsed;a.setAttribute("aria-haspopup",!0),eo(a),gd(a);var h=this._section=je("section",i+"-list");u&&(this._map.on("click",this.collapse,this),he(a,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var g=this._layersLink=je("a",i+"-toggle",a);g.href="#",g.title="Layers",g.setAttribute("role","button"),he(g,{keydown:function(C){C.keyCode===13&&this._expandSafely()},click:function(C){vt(C),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=je("div",i+"-base",h),this._separator=je("div",i+"-separator",h),this._overlaysList=je("div",i+"-overlays",h),a.appendChild(h)},_getLayer:function(i){for(var a=0;a<this._layers.length;a++)if(this._layers[a]&&f(this._layers[a].layer)===i)return this._layers[a]},_addLayer:function(i,a,u){this._map&&i.on("add remove",this._onLayerChange,this),this._layers.push({layer:i,name:a,overlay:u}),this.options.sortLayers&&this._layers.sort(c(function(h,g){return this.options.sortFunction(h.layer,g.layer,h.name,g.name)},this)),this.options.autoZIndex&&i.setZIndex&&(this._lastZIndex++,i.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;Pa(this._baseLayersList),Pa(this._overlaysList),this._layerControlInputs=[];var i,a,u,h,g=0;for(u=0;u<this._layers.length;u++)h=this._layers[u],this._addItem(h),a=a||h.overlay,i=i||!h.overlay,g+=h.overlay?0:1;return this.options.hideSingleBase&&(i=i&&g>1,this._baseLayersList.style.display=i?"":"none"),this._separator.style.display=a&&i?"":"none",this},_onLayerChange:function(i){this._handlingClick||this._update();var a=this._getLayer(f(i.target)),u=a.overlay?i.type==="add"?"overlayadd":"overlayremove":i.type==="add"?"baselayerchange":null;u&&this._map.fire(u,a)},_createRadioElement:function(i,a){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+i+'"'+(a?' checked="checked"':"")+"/>",h=document.createElement("div");return h.innerHTML=u,h.firstChild},_addItem:function(i){var a=document.createElement("label"),u=this._map.hasLayer(i.layer),h;i.overlay?(h=document.createElement("input"),h.type="checkbox",h.className="leaflet-control-layers-selector",h.defaultChecked=u):h=this._createRadioElement("leaflet-base-layers_"+f(this),u),this._layerControlInputs.push(h),h.layerId=f(i.layer),he(h,"click",this._onInputClick,this);var g=document.createElement("span");g.innerHTML=" "+i.name;var C=document.createElement("span");a.appendChild(C),C.appendChild(h),C.appendChild(g);var A=i.overlay?this._overlaysList:this._baseLayersList;return A.appendChild(a),this._checkDisabledLayers(),a},_onInputClick:function(){if(!this._preventClick){var i=this._layerControlInputs,a,u,h=[],g=[];this._handlingClick=!0;for(var C=i.length-1;C>=0;C--)a=i[C],u=this._getLayer(a.layerId).layer,a.checked?h.push(u):a.checked||g.push(u);for(C=0;C<g.length;C++)this._map.hasLayer(g[C])&&this._map.removeLayer(g[C]);for(C=0;C<h.length;C++)this._map.hasLayer(h[C])||this._map.addLayer(h[C]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var i=this._layerControlInputs,a,u,h=this._map.getZoom(),g=i.length-1;g>=0;g--)a=i[g],u=this._getLayer(a.layerId).layer,a.disabled=u.options.minZoom!==void 0&&h<u.options.minZoom||u.options.maxZoom!==void 0&&h>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var i=this._section;this._preventClick=!0,he(i,"click",vt),this.expand();var a=this;setTimeout(function(){ze(i,"click",vt),a._preventClick=!1})}}),X2=function(i,a,u){return new mg(i,a,u)},yd=Nn.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(i){var a="leaflet-control-zoom",u=je("div",a+" leaflet-bar"),h=this.options;return this._zoomInButton=this._createButton(h.zoomInText,h.zoomInTitle,a+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(h.zoomOutText,h.zoomOutTitle,a+"-out",u,this._zoomOut),this._updateDisabled(),i.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(i){i.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(i){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(i.shiftKey?3:1))},_zoomOut:function(i){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(i.shiftKey?3:1))},_createButton:function(i,a,u,h,g){var C=je("a",u,h);return C.innerHTML=i,C.href="#",C.title=a,C.setAttribute("role","button"),C.setAttribute("aria-label",a),eo(C),he(C,"click",ei),he(C,"click",g,this),he(C,"click",this._refocusOnMap,this),C},_updateDisabled:function(){var i=this._map,a="leaflet-disabled";Ke(this._zoomInButton,a),Ke(this._zoomOutButton,a),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||i._zoom===i.getMinZoom())&&(ge(this._zoomOutButton,a),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||i._zoom===i.getMaxZoom())&&(ge(this._zoomInButton,a),this._zoomInButton.setAttribute("aria-disabled","true"))}});Se.mergeOptions({zoomControl:!0}),Se.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new yd,this.addControl(this.zoomControl))});var Q2=function(i){return new yd(i)},pg=Nn.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(i){var a="leaflet-control-scale",u=je("div",a),h=this.options;return this._addScales(h,a+"-line",u),i.on(h.updateWhenIdle?"moveend":"move",this._update,this),i.whenReady(this._update,this),u},onRemove:function(i){i.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(i,a,u){i.metric&&(this._mScale=je("div",a,u)),i.imperial&&(this._iScale=je("div",a,u))},_update:function(){var i=this._map,a=i.getSize().y/2,u=i.distance(i.containerPointToLatLng([0,a]),i.containerPointToLatLng([this.options.maxWidth,a]));this._updateScales(u)},_updateScales:function(i){this.options.metric&&i&&this._updateMetric(i),this.options.imperial&&i&&this._updateImperial(i)},_updateMetric:function(i){var a=this._getRoundNum(i),u=a<1e3?a+" m":a/1e3+" km";this._updateScale(this._mScale,u,a/i)},_updateImperial:function(i){var a=i*3.2808399,u,h,g;a>5280?(u=a/5280,h=this._getRoundNum(u),this._updateScale(this._iScale,h+" mi",h/u)):(g=this._getRoundNum(a),this._updateScale(this._iScale,g+" ft",g/a))},_updateScale:function(i,a,u){i.style.width=Math.round(this.options.maxWidth*u)+"px",i.innerHTML=a},_getRoundNum:function(i){var a=Math.pow(10,(Math.floor(i)+"").length-1),u=i/a;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,a*u}}),J2=function(i){return new pg(i)},eS='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',xd=Nn.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(le.inlineSvg?eS+" ":"")+"Leaflet</a>"},initialize:function(i){w(this,i),this._attributions={}},onAdd:function(i){i.attributionControl=this,this._container=je("div","leaflet-control-attribution"),eo(this._container);for(var a in i._layers)i._layers[a].getAttribution&&this.addAttribution(i._layers[a].getAttribution());return this._update(),i.on("layeradd",this._addAttribution,this),this._container},onRemove:function(i){i.off("layeradd",this._addAttribution,this)},_addAttribution:function(i){i.layer.getAttribution&&(this.addAttribution(i.layer.getAttribution()),i.layer.once("remove",function(){this.removeAttribution(i.layer.getAttribution())},this))},setPrefix:function(i){return this.options.prefix=i,this._update(),this},addAttribution:function(i){return i?(this._attributions[i]||(this._attributions[i]=0),this._attributions[i]++,this._update(),this):this},removeAttribution:function(i){return i?(this._attributions[i]&&(this._attributions[i]--,this._update()),this):this},_update:function(){if(this._map){var i=[];for(var a in this._attributions)this._attributions[a]&&i.push(a);var u=[];this.options.prefix&&u.push(this.options.prefix),i.length&&u.push(i.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});Se.mergeOptions({attributionControl:!0}),Se.addInitHook(function(){this.options.attributionControl&&new xd().addTo(this)});var tS=function(i){return new xd(i)};Nn.Layers=mg,Nn.Zoom=yd,Nn.Scale=pg,Nn.Attribution=xd,to.layers=X2,to.zoom=Q2,to.scale=J2,to.attribution=tS;var Un=K.extend({initialize:function(i){this._map=i},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Un.addTo=function(i,a){return i.addHandler(a,this),this};var nS={Events:ee},gg=le.touch?"touchstart mousedown":"mousedown",wr=V.extend({options:{clickTolerance:3},initialize:function(i,a,u,h){w(this,h),this._element=i,this._dragStartTarget=a||i,this._preventOutline=u},enable:function(){this._enabled||(he(this._dragStartTarget,gg,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(wr._dragging===this&&this.finishDrag(!0),ze(this._dragStartTarget,gg,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(i){if(this._enabled&&(this._moved=!1,!sd(this._element,"leaflet-zoom-anim"))){if(i.touches&&i.touches.length!==1){wr._dragging===this&&this.finishDrag();return}if(!(wr._dragging||i.shiftKey||i.which!==1&&i.button!==1&&!i.touches)&&(wr._dragging=this,this._preventOutline&&dd(this._element),ld(),Xs(),!this._moving)){this.fire("down");var a=i.touches?i.touches[0]:i,u=lg(this._element);this._startPoint=new P(a.clientX,a.clientY),this._startPos=Qr(this._element),this._parentScale=fd(u);var h=i.type==="mousedown";he(document,h?"mousemove":"touchmove",this._onMove,this),he(document,h?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(i){if(this._enabled){if(i.touches&&i.touches.length>1){this._moved=!0;return}var a=i.touches&&i.touches.length===1?i.touches[0]:i,u=new P(a.clientX,a.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,vt(i),this._moved||(this.fire("dragstart"),this._moved=!0,ge(document.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),ge(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=i,this._updatePosition())}},_updatePosition:function(){var i={originalEvent:this._lastEvent};this.fire("predrag",i),tt(this._element,this._newPos),this.fire("drag",i)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(i){Ke(document.body,"leaflet-dragging"),this._lastTarget&&(Ke(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),ze(document,"mousemove touchmove",this._onMove,this),ze(document,"mouseup touchend touchcancel",this._onUp,this),cd(),Qs();var a=this._moved&&this._moving;this._moving=!1,wr._dragging=!1,a&&this.fire("dragend",{noInertia:i,distance:this._newPos.distanceTo(this._startPos)})}});function vg(i,a,u){var h,g=[1,4,2,8],C,A,$,U,G,ie,fe,ye;for(C=0,ie=i.length;C<ie;C++)i[C]._code=ti(i[C],a);for($=0;$<4;$++){for(fe=g[$],h=[],C=0,ie=i.length,A=ie-1;C<ie;A=C++)U=i[C],G=i[A],U._code&fe?G._code&fe||(ye=Aa(G,U,fe,a,u),ye._code=ti(ye,a),h.push(ye)):(G._code&fe&&(ye=Aa(G,U,fe,a,u),ye._code=ti(ye,a),h.push(ye)),h.push(U));i=h}return i}function yg(i,a){var u,h,g,C,A,$,U,G,ie;if(!i||i.length===0)throw new Error("latlngs not passed");hn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var fe=ae([0,0]),ye=oe(i),Tt=ye.getNorthWest().distanceTo(ye.getSouthWest())*ye.getNorthEast().distanceTo(ye.getNorthWest());Tt<1700&&(fe=wd(i));var dt=i.length,mn=[];for(u=0;u<dt;u++){var Ft=ae(i[u]);mn.push(a.project(ae([Ft.lat-fe.lat,Ft.lng-fe.lng])))}for($=U=G=0,u=0,h=dt-1;u<dt;h=u++)g=mn[u],C=mn[h],A=g.y*C.x-C.y*g.x,U+=(g.x+C.x)*A,G+=(g.y+C.y)*A,$+=A*3;$===0?ie=mn[0]:ie=[U/$,G/$];var Di=a.unproject(D(ie));return ae([Di.lat+fe.lat,Di.lng+fe.lng])}function wd(i){for(var a=0,u=0,h=0,g=0;g<i.length;g++){var C=ae(i[g]);a+=C.lat,u+=C.lng,h++}return ae([a/h,u/h])}var rS={__proto__:null,clipPolygon:vg,polygonCenter:yg,centroid:wd};function xg(i,a){if(!a||!i.length)return i.slice();var u=a*a;return i=oS(i,u),i=sS(i,u),i}function wg(i,a,u){return Math.sqrt(no(i,a,u,!0))}function iS(i,a,u){return no(i,a,u)}function sS(i,a){var u=i.length,h=typeof Uint8Array<"u"?Uint8Array:Array,g=new h(u);g[0]=g[u-1]=1,bd(i,g,a,0,u-1);var C,A=[];for(C=0;C<u;C++)g[C]&&A.push(i[C]);return A}function bd(i,a,u,h,g){var C=0,A,$,U;for($=h+1;$<=g-1;$++)U=no(i[$],i[h],i[g],!0),U>C&&(A=$,C=U);C>u&&(a[A]=1,bd(i,a,u,h,A),bd(i,a,u,A,g))}function oS(i,a){for(var u=[i[0]],h=1,g=0,C=i.length;h<C;h++)aS(i[h],i[g])>a&&(u.push(i[h]),g=h);return g<C-1&&u.push(i[C-1]),u}var bg;function _g(i,a,u,h,g){var C=h?bg:ti(i,u),A=ti(a,u),$,U,G;for(bg=A;;){if(!(C|A))return[i,a];if(C&A)return!1;$=C||A,U=Aa(i,a,$,u,g),G=ti(U,u),$===C?(i=U,C=G):(a=U,A=G)}}function Aa(i,a,u,h,g){var C=a.x-i.x,A=a.y-i.y,$=h.min,U=h.max,G,ie;return u&8?(G=i.x+C*(U.y-i.y)/A,ie=U.y):u&4?(G=i.x+C*($.y-i.y)/A,ie=$.y):u&2?(G=U.x,ie=i.y+A*(U.x-i.x)/C):u&1&&(G=$.x,ie=i.y+A*($.x-i.x)/C),new P(G,ie,g)}function ti(i,a){var u=0;return i.x<a.min.x?u|=1:i.x>a.max.x&&(u|=2),i.y<a.min.y?u|=4:i.y>a.max.y&&(u|=8),u}function aS(i,a){var u=a.x-i.x,h=a.y-i.y;return u*u+h*h}function no(i,a,u,h){var g=a.x,C=a.y,A=u.x-g,$=u.y-C,U=A*A+$*$,G;return U>0&&(G=((i.x-g)*A+(i.y-C)*$)/U,G>1?(g=u.x,C=u.y):G>0&&(g+=A*G,C+=$*G)),A=i.x-g,$=i.y-C,h?A*A+$*$:new P(g,C)}function hn(i){return!x(i[0])||typeof i[0][0]!="object"&&typeof i[0][0]<"u"}function Sg(i){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),hn(i)}function kg(i,a){var u,h,g,C,A,$,U,G;if(!i||i.length===0)throw new Error("latlngs not passed");hn(i)||(console.warn("latlngs are not flat! Only the first ring will be used"),i=i[0]);var ie=ae([0,0]),fe=oe(i),ye=fe.getNorthWest().distanceTo(fe.getSouthWest())*fe.getNorthEast().distanceTo(fe.getNorthWest());ye<1700&&(ie=wd(i));var Tt=i.length,dt=[];for(u=0;u<Tt;u++){var mn=ae(i[u]);dt.push(a.project(ae([mn.lat-ie.lat,mn.lng-ie.lng])))}for(u=0,h=0;u<Tt-1;u++)h+=dt[u].distanceTo(dt[u+1])/2;if(h===0)G=dt[0];else for(u=0,C=0;u<Tt-1;u++)if(A=dt[u],$=dt[u+1],g=A.distanceTo($),C+=g,C>h){U=(C-h)/g,G=[$.x-U*($.x-A.x),$.y-U*($.y-A.y)];break}var Ft=a.unproject(D(G));return ae([Ft.lat+ie.lat,Ft.lng+ie.lng])}var lS={__proto__:null,simplify:xg,pointToSegmentDistance:wg,closestPointOnSegment:iS,clipSegment:_g,_getEdgeIntersection:Aa,_getBitCode:ti,_sqClosestPointOnSegment:no,isFlat:hn,_flat:Sg,polylineCenter:kg},_d={project:function(i){return new P(i.lng,i.lat)},unproject:function(i){return new ce(i.y,i.x)},bounds:new Y([-180,-90],[180,90])},Sd={R:6378137,R_MINOR:6356752314245179e-9,bounds:new Y([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(i){var a=Math.PI/180,u=this.R,h=i.lat*a,g=this.R_MINOR/u,C=Math.sqrt(1-g*g),A=C*Math.sin(h),$=Math.tan(Math.PI/4-h/2)/Math.pow((1-A)/(1+A),C/2);return h=-u*Math.log(Math.max($,1e-10)),new P(i.lng*a*u,h)},unproject:function(i){for(var a=180/Math.PI,u=this.R,h=this.R_MINOR/u,g=Math.sqrt(1-h*h),C=Math.exp(-i.y/u),A=Math.PI/2-2*Math.atan(C),$=0,U=.1,G;$<15&&Math.abs(U)>1e-7;$++)G=g*Math.sin(A),G=Math.pow((1-G)/(1+G),g/2),U=Math.PI/2-2*Math.atan(C*G)-A,A+=U;return new ce(A*a,i.x*a/u)}},cS={__proto__:null,LonLat:_d,Mercator:Sd,SphericalMercator:Kr},uS=s({},Dt,{code:"EPSG:3395",projection:Sd,transformation:function(){var i=.5/(Math.PI*Sd.R);return Bt(i,.5,-i,.5)}()}),jg=s({},Dt,{code:"EPSG:4326",projection:_d,transformation:Bt(1/180,1,-1/180,.5)}),dS=s({},at,{projection:_d,transformation:Bt(1,0,-1,0),scale:function(i){return Math.pow(2,i)},zoom:function(i){return Math.log(i)/Math.LN2},distance:function(i,a){var u=a.lng-i.lng,h=a.lat-i.lat;return Math.sqrt(u*u+h*h)},infinite:!0});at.Earth=Dt,at.EPSG3395=uS,at.EPSG3857=Xu,at.EPSG900913=v2,at.EPSG4326=jg,at.Simple=dS;var Cn=V.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(i){return i.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(i){return i&&i.removeLayer(this),this},getPane:function(i){return this._map.getPane(i?this.options[i]||i:this.options.pane)},addInteractiveTarget:function(i){return this._map._targets[f(i)]=this,this},removeInteractiveTarget:function(i){return delete this._map._targets[f(i)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(i){var a=i.target;if(a.hasLayer(this)){if(this._map=a,this._zoomAnimated=a._zoomAnimated,this.getEvents){var u=this.getEvents();a.on(u,this),this.once("remove",function(){a.off(u,this)},this)}this.onAdd(a),this.fire("add"),a.fire("layeradd",{layer:this})}}});Se.include({addLayer:function(i){if(!i._layerAdd)throw new Error("The provided object is not a Layer.");var a=f(i);return this._layers[a]?this:(this._layers[a]=i,i._mapToAdd=this,i.beforeAdd&&i.beforeAdd(this),this.whenReady(i._layerAdd,i),this)},removeLayer:function(i){var a=f(i);return this._layers[a]?(this._loaded&&i.onRemove(this),delete this._layers[a],this._loaded&&(this.fire("layerremove",{layer:i}),i.fire("remove")),i._map=i._mapToAdd=null,this):this},hasLayer:function(i){return f(i)in this._layers},eachLayer:function(i,a){for(var u in this._layers)i.call(a,this._layers[u]);return this},_addLayers:function(i){i=i?x(i)?i:[i]:[];for(var a=0,u=i.length;a<u;a++)this.addLayer(i[a])},_addZoomLimit:function(i){(!isNaN(i.options.maxZoom)||!isNaN(i.options.minZoom))&&(this._zoomBoundLayers[f(i)]=i,this._updateZoomLevels())},_removeZoomLimit:function(i){var a=f(i);this._zoomBoundLayers[a]&&(delete this._zoomBoundLayers[a],this._updateZoomLevels())},_updateZoomLevels:function(){var i=1/0,a=-1/0,u=this._getZoomSpan();for(var h in this._zoomBoundLayers){var g=this._zoomBoundLayers[h].options;i=g.minZoom===void 0?i:Math.min(i,g.minZoom),a=g.maxZoom===void 0?a:Math.max(a,g.maxZoom)}this._layersMaxZoom=a===-1/0?void 0:a,this._layersMinZoom=i===1/0?void 0:i,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ii=Cn.extend({initialize:function(i,a){w(this,a),this._layers={};var u,h;if(i)for(u=0,h=i.length;u<h;u++)this.addLayer(i[u])},addLayer:function(i){var a=this.getLayerId(i);return this._layers[a]=i,this._map&&this._map.addLayer(i),this},removeLayer:function(i){var a=i in this._layers?i:this.getLayerId(i);return this._map&&this._layers[a]&&this._map.removeLayer(this._layers[a]),delete this._layers[a],this},hasLayer:function(i){var a=typeof i=="number"?i:this.getLayerId(i);return a in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(i){var a=Array.prototype.slice.call(arguments,1),u,h;for(u in this._layers)h=this._layers[u],h[i]&&h[i].apply(h,a);return this},onAdd:function(i){this.eachLayer(i.addLayer,i)},onRemove:function(i){this.eachLayer(i.removeLayer,i)},eachLayer:function(i,a){for(var u in this._layers)i.call(a,this._layers[u]);return this},getLayer:function(i){return this._layers[i]},getLayers:function(){var i=[];return this.eachLayer(i.push,i),i},setZIndex:function(i){return this.invoke("setZIndex",i)},getLayerId:function(i){return f(i)}}),fS=function(i,a){return new Ii(i,a)},nr=Ii.extend({addLayer:function(i){return this.hasLayer(i)?this:(i.addEventParent(this),Ii.prototype.addLayer.call(this,i),this.fire("layeradd",{layer:i}))},removeLayer:function(i){return this.hasLayer(i)?(i in this._layers&&(i=this._layers[i]),i.removeEventParent(this),Ii.prototype.removeLayer.call(this,i),this.fire("layerremove",{layer:i})):this},setStyle:function(i){return this.invoke("setStyle",i)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var i=new ne;for(var a in this._layers){var u=this._layers[a];i.extend(u.getBounds?u.getBounds():u.getLatLng())}return i}}),hS=function(i,a){return new nr(i,a)},Ri=K.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(i){w(this,i)},createIcon:function(i){return this._createIcon("icon",i)},createShadow:function(i){return this._createIcon("shadow",i)},_createIcon:function(i,a){var u=this._getIconUrl(i);if(!u){if(i==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var h=this._createImg(u,a&&a.tagName==="IMG"?a:null);return this._setIconStyles(h,i),(this.options.crossOrigin||this.options.crossOrigin==="")&&(h.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),h},_setIconStyles:function(i,a){var u=this.options,h=u[a+"Size"];typeof h=="number"&&(h=[h,h]);var g=D(h),C=D(a==="shadow"&&u.shadowAnchor||u.iconAnchor||g&&g.divideBy(2,!0));i.className="leaflet-marker-"+a+" "+(u.className||""),C&&(i.style.marginLeft=-C.x+"px",i.style.marginTop=-C.y+"px"),g&&(i.style.width=g.x+"px",i.style.height=g.y+"px")},_createImg:function(i,a){return a=a||document.createElement("img"),a.src=i,a},_getIconUrl:function(i){return le.retina&&this.options[i+"RetinaUrl"]||this.options[i+"Url"]}});function mS(i){return new Ri(i)}var ro=Ri.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(i){return typeof ro.imagePath!="string"&&(ro.imagePath=this._detectIconPath()),(this.options.imagePath||ro.imagePath)+Ri.prototype._getIconUrl.call(this,i)},_stripUrl:function(i){var a=function(u,h,g){var C=h.exec(u);return C&&C[g]};return i=a(i,/^url\((['"])?(.+)\1\)$/,2),i&&a(i,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var i=je("div","leaflet-default-icon-path",document.body),a=Ks(i,"background-image")||Ks(i,"backgroundImage");if(document.body.removeChild(i),a=this._stripUrl(a),a)return a;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),Ng=Un.extend({initialize:function(i){this._marker=i},addHooks:function(){var i=this._marker._icon;this._draggable||(this._draggable=new wr(i,i,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),ge(i,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&Ke(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(i){var a=this._marker,u=a._map,h=this._marker.options.autoPanSpeed,g=this._marker.options.autoPanPadding,C=Qr(a._icon),A=u.getPixelBounds(),$=u.getPixelOrigin(),U=R(A.min._subtract($).add(g),A.max._subtract($).subtract(g));if(!U.contains(C)){var G=D((Math.max(U.max.x,C.x)-U.max.x)/(A.max.x-U.max.x)-(Math.min(U.min.x,C.x)-U.min.x)/(A.min.x-U.min.x),(Math.max(U.max.y,C.y)-U.max.y)/(A.max.y-U.max.y)-(Math.min(U.min.y,C.y)-U.min.y)/(A.min.y-U.min.y)).multiplyBy(h);u.panBy(G,{animate:!1}),this._draggable._newPos._add(G),this._draggable._startPos._add(G),tt(a._icon,this._draggable._newPos),this._onDrag(i),this._panRequest=B(this._adjustPan.bind(this,i))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(i){this._marker.options.autoPan&&(Z(this._panRequest),this._panRequest=B(this._adjustPan.bind(this,i)))},_onDrag:function(i){var a=this._marker,u=a._shadow,h=Qr(a._icon),g=a._map.layerPointToLatLng(h);u&&tt(u,h),a._latlng=g,i.latlng=g,i.oldLatLng=this._oldLatLng,a.fire("move",i).fire("drag",i)},_onDragEnd:function(i){Z(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",i)}}),Ia=Cn.extend({options:{icon:new ro,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(i,a){w(this,a),this._latlng=ae(i)},onAdd:function(i){this._zoomAnimated=this._zoomAnimated&&i.options.markerZoomAnimation,this._zoomAnimated&&i.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(i){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&i.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(i){var a=this._latlng;return this._latlng=ae(i),this.update(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},setZIndexOffset:function(i){return this.options.zIndexOffset=i,this.update()},getIcon:function(){return this.options.icon},setIcon:function(i){return this.options.icon=i,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var i=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(i)}return this},_initIcon:function(){var i=this.options,a="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=i.icon.createIcon(this._icon),h=!1;u!==this._icon&&(this._icon&&this._removeIcon(),h=!0,i.title&&(u.title=i.title),u.tagName==="IMG"&&(u.alt=i.alt||"")),ge(u,a),i.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,i.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&he(u,"focus",this._panOnFocus,this);var g=i.icon.createShadow(this._shadow),C=!1;g!==this._shadow&&(this._removeShadow(),C=!0),g&&(ge(g,a),g.alt=""),this._shadow=g,i.opacity<1&&this._updateOpacity(),h&&this.getPane().appendChild(this._icon),this._initInteraction(),g&&C&&this.getPane(i.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&ze(this._icon,"focus",this._panOnFocus,this),qe(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&qe(this._shadow),this._shadow=null},_setPos:function(i){this._icon&&tt(this._icon,i),this._shadow&&tt(this._shadow,i),this._zIndex=i.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(i){this._icon&&(this._icon.style.zIndex=this._zIndex+i)},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center).round();this._setPos(a)},_initInteraction:function(){if(this.options.interactive&&(ge(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),Ng)){var i=this.options.draggable;this.dragging&&(i=this.dragging.enabled(),this.dragging.disable()),this.dragging=new Ng(this),i&&this.dragging.enable()}},setOpacity:function(i){return this.options.opacity=i,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var i=this.options.opacity;this._icon&&fn(this._icon,i),this._shadow&&fn(this._shadow,i)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var i=this._map;if(i){var a=this.options.icon.options,u=a.iconSize?D(a.iconSize):D(0,0),h=a.iconAnchor?D(a.iconAnchor):D(0,0);i.panInside(this._latlng,{paddingTopLeft:h,paddingBottomRight:u.subtract(h)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function pS(i,a){return new Ia(i,a)}var br=Cn.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(i){this._renderer=i.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(i){return w(this,i),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&i&&Object.prototype.hasOwnProperty.call(i,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),Ra=br.extend({options:{fill:!0,radius:10},initialize:function(i,a){w(this,a),this._latlng=ae(i),this._radius=this.options.radius},setLatLng:function(i){var a=this._latlng;return this._latlng=ae(i),this.redraw(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(i){return this.options.radius=this._radius=i,this.redraw()},getRadius:function(){return this._radius},setStyle:function(i){var a=i&&i.radius||this._radius;return br.prototype.setStyle.call(this,i),this.setRadius(a),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var i=this._radius,a=this._radiusY||i,u=this._clickTolerance(),h=[i+u,a+u];this._pxBounds=new Y(this._point.subtract(h),this._point.add(h))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(i){return i.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function gS(i,a){return new Ra(i,a)}var kd=Ra.extend({initialize:function(i,a,u){if(typeof a=="number"&&(a=s({},u,{radius:a})),w(this,a),this._latlng=ae(i),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(i){return this._mRadius=i,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var i=[this._radius,this._radiusY||this._radius];return new ne(this._map.layerPointToLatLng(this._point.subtract(i)),this._map.layerPointToLatLng(this._point.add(i)))},setStyle:br.prototype.setStyle,_project:function(){var i=this._latlng.lng,a=this._latlng.lat,u=this._map,h=u.options.crs;if(h.distance===Dt.distance){var g=Math.PI/180,C=this._mRadius/Dt.R/g,A=u.project([a+C,i]),$=u.project([a-C,i]),U=A.add($).divideBy(2),G=u.unproject(U).lat,ie=Math.acos((Math.cos(C*g)-Math.sin(a*g)*Math.sin(G*g))/(Math.cos(a*g)*Math.cos(G*g)))/g;(isNaN(ie)||ie===0)&&(ie=C/Math.cos(Math.PI/180*a)),this._point=U.subtract(u.getPixelOrigin()),this._radius=isNaN(ie)?0:U.x-u.project([G,i-ie]).x,this._radiusY=U.y-A.y}else{var fe=h.unproject(h.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(fe).x}this._updateBounds()}});function vS(i,a,u){return new kd(i,a,u)}var rr=br.extend({options:{smoothFactor:1,noClip:!1},initialize:function(i,a){w(this,a),this._setLatLngs(i)},getLatLngs:function(){return this._latlngs},setLatLngs:function(i){return this._setLatLngs(i),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(i){for(var a=1/0,u=null,h=no,g,C,A=0,$=this._parts.length;A<$;A++)for(var U=this._parts[A],G=1,ie=U.length;G<ie;G++){g=U[G-1],C=U[G];var fe=h(i,g,C,!0);fe<a&&(a=fe,u=h(i,g,C))}return u&&(u.distance=Math.sqrt(a)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return kg(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(i,a){return a=a||this._defaultShape(),i=ae(i),a.push(i),this._bounds.extend(i),this.redraw()},_setLatLngs:function(i){this._bounds=new ne,this._latlngs=this._convertLatLngs(i)},_defaultShape:function(){return hn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(i){for(var a=[],u=hn(i),h=0,g=i.length;h<g;h++)u?(a[h]=ae(i[h]),this._bounds.extend(a[h])):a[h]=this._convertLatLngs(i[h]);return a},_project:function(){var i=new Y;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,i),this._bounds.isValid()&&i.isValid()&&(this._rawPxBounds=i,this._updateBounds())},_updateBounds:function(){var i=this._clickTolerance(),a=new P(i,i);this._rawPxBounds&&(this._pxBounds=new Y([this._rawPxBounds.min.subtract(a),this._rawPxBounds.max.add(a)]))},_projectLatlngs:function(i,a,u){var h=i[0]instanceof ce,g=i.length,C,A;if(h){for(A=[],C=0;C<g;C++)A[C]=this._map.latLngToLayerPoint(i[C]),u.extend(A[C]);a.push(A)}else for(C=0;C<g;C++)this._projectLatlngs(i[C],a,u)},_clipPoints:function(){var i=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}var a=this._parts,u,h,g,C,A,$,U;for(u=0,g=0,C=this._rings.length;u<C;u++)for(U=this._rings[u],h=0,A=U.length;h<A-1;h++)$=_g(U[h],U[h+1],i,h,!0),$&&(a[g]=a[g]||[],a[g].push($[0]),($[1]!==U[h+1]||h===A-2)&&(a[g].push($[1]),g++))}},_simplifyPoints:function(){for(var i=this._parts,a=this.options.smoothFactor,u=0,h=i.length;u<h;u++)i[u]=xg(i[u],a)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(i,a){var u,h,g,C,A,$,U=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(u=0,C=this._parts.length;u<C;u++)for($=this._parts[u],h=0,A=$.length,g=A-1;h<A;g=h++)if(!(!a&&h===0)&&wg(i,$[g],$[h])<=U)return!0;return!1}});function yS(i,a){return new rr(i,a)}rr._flat=Sg;var zi=rr.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return yg(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(i){var a=rr.prototype._convertLatLngs.call(this,i),u=a.length;return u>=2&&a[0]instanceof ce&&a[0].equals(a[u-1])&&a.pop(),a},_setLatLngs:function(i){rr.prototype._setLatLngs.call(this,i),hn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return hn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var i=this._renderer._bounds,a=this.options.weight,u=new P(a,a);if(i=new Y(i.min.subtract(u),i.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(i))){if(this.options.noClip){this._parts=this._rings;return}for(var h=0,g=this._rings.length,C;h<g;h++)C=vg(this._rings[h],i,!0),C.length&&this._parts.push(C)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(i){var a=!1,u,h,g,C,A,$,U,G;if(!this._pxBounds||!this._pxBounds.contains(i))return!1;for(C=0,U=this._parts.length;C<U;C++)for(u=this._parts[C],A=0,G=u.length,$=G-1;A<G;$=A++)h=u[A],g=u[$],h.y>i.y!=g.y>i.y&&i.x<(g.x-h.x)*(i.y-h.y)/(g.y-h.y)+h.x&&(a=!a);return a||rr.prototype._containsPoint.call(this,i,!0)}});function xS(i,a){return new zi(i,a)}var ir=nr.extend({initialize:function(i,a){w(this,a),this._layers={},i&&this.addData(i)},addData:function(i){var a=x(i)?i:i.features,u,h,g;if(a){for(u=0,h=a.length;u<h;u++)g=a[u],(g.geometries||g.geometry||g.features||g.coordinates)&&this.addData(g);return this}var C=this.options;if(C.filter&&!C.filter(i))return this;var A=za(i,C);return A?(A.feature=Da(i),A.defaultOptions=A.options,this.resetStyle(A),C.onEachFeature&&C.onEachFeature(i,A),this.addLayer(A)):this},resetStyle:function(i){return i===void 0?this.eachLayer(this.resetStyle,this):(i.options=s({},i.defaultOptions),this._setLayerStyle(i,this.options.style),this)},setStyle:function(i){return this.eachLayer(function(a){this._setLayerStyle(a,i)},this)},_setLayerStyle:function(i,a){i.setStyle&&(typeof a=="function"&&(a=a(i.feature)),i.setStyle(a))}});function za(i,a){var u=i.type==="Feature"?i.geometry:i,h=u?u.coordinates:null,g=[],C=a&&a.pointToLayer,A=a&&a.coordsToLatLng||jd,$,U,G,ie;if(!h&&!u)return null;switch(u.type){case"Point":return $=A(h),Cg(C,i,$,a);case"MultiPoint":for(G=0,ie=h.length;G<ie;G++)$=A(h[G]),g.push(Cg(C,i,$,a));return new nr(g);case"LineString":case"MultiLineString":return U=Ma(h,u.type==="LineString"?0:1,A),new rr(U,a);case"Polygon":case"MultiPolygon":return U=Ma(h,u.type==="Polygon"?1:2,A),new zi(U,a);case"GeometryCollection":for(G=0,ie=u.geometries.length;G<ie;G++){var fe=za({geometry:u.geometries[G],type:"Feature",properties:i.properties},a);fe&&g.push(fe)}return new nr(g);case"FeatureCollection":for(G=0,ie=u.features.length;G<ie;G++){var ye=za(u.features[G],a);ye&&g.push(ye)}return new nr(g);default:throw new Error("Invalid GeoJSON object.")}}function Cg(i,a,u,h){return i?i(a,u):new Ia(u,h&&h.markersInheritOptions&&h)}function jd(i){return new ce(i[1],i[0],i[2])}function Ma(i,a,u){for(var h=[],g=0,C=i.length,A;g<C;g++)A=a?Ma(i[g],a-1,u):(u||jd)(i[g]),h.push(A);return h}function Nd(i,a){return i=ae(i),i.alt!==void 0?[b(i.lng,a),b(i.lat,a),b(i.alt,a)]:[b(i.lng,a),b(i.lat,a)]}function $a(i,a,u,h){for(var g=[],C=0,A=i.length;C<A;C++)g.push(a?$a(i[C],hn(i[C])?0:a-1,u,h):Nd(i[C],h));return!a&&u&&g.length>0&&g.push(g[0].slice()),g}function Mi(i,a){return i.feature?s({},i.feature,{geometry:a}):Da(a)}function Da(i){return i.type==="Feature"||i.type==="FeatureCollection"?i:{type:"Feature",properties:{},geometry:i}}var Cd={toGeoJSON:function(i){return Mi(this,{type:"Point",coordinates:Nd(this.getLatLng(),i)})}};Ia.include(Cd),kd.include(Cd),Ra.include(Cd),rr.include({toGeoJSON:function(i){var a=!hn(this._latlngs),u=$a(this._latlngs,a?1:0,!1,i);return Mi(this,{type:(a?"Multi":"")+"LineString",coordinates:u})}}),zi.include({toGeoJSON:function(i){var a=!hn(this._latlngs),u=a&&!hn(this._latlngs[0]),h=$a(this._latlngs,u?2:a?1:0,!0,i);return a||(h=[h]),Mi(this,{type:(u?"Multi":"")+"Polygon",coordinates:h})}}),Ii.include({toMultiPoint:function(i){var a=[];return this.eachLayer(function(u){a.push(u.toGeoJSON(i).geometry.coordinates)}),Mi(this,{type:"MultiPoint",coordinates:a})},toGeoJSON:function(i){var a=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(a==="MultiPoint")return this.toMultiPoint(i);var u=a==="GeometryCollection",h=[];return this.eachLayer(function(g){if(g.toGeoJSON){var C=g.toGeoJSON(i);if(u)h.push(C.geometry);else{var A=Da(C);A.type==="FeatureCollection"?h.push.apply(h,A.features):h.push(A)}}}),u?Mi(this,{geometries:h,type:"GeometryCollection"}):{type:"FeatureCollection",features:h}}});function Pg(i,a){return new ir(i,a)}var wS=Pg,Ba=Cn.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(i,a,u){this._url=i,this._bounds=oe(a),w(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(ge(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){qe(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(i){return this.options.opacity=i,this._image&&this._updateOpacity(),this},setStyle:function(i){return i.opacity&&this.setOpacity(i.opacity),this},bringToFront:function(){return this._map&&Oi(this._image),this},bringToBack:function(){return this._map&&Ai(this._image),this},setUrl:function(i){return this._url=i,this._image&&(this._image.src=i),this},setBounds:function(i){return this._bounds=oe(i),this._map&&this._reset(),this},getEvents:function(){var i={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var i=this._url.tagName==="IMG",a=this._image=i?this._url:je("img");if(ge(a,"leaflet-image-layer"),this._zoomAnimated&&ge(a,"leaflet-zoom-animated"),this.options.className&&ge(a,this.options.className),a.onselectstart=v,a.onmousemove=v,a.onload=c(this.fire,this,"load"),a.onerror=c(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),i){this._url=a.src;return}a.src=this._url,a.alt=this.options.alt},_animateZoom:function(i){var a=this._map.getZoomScale(i.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,i.zoom,i.center).min;Xr(this._image,u,a)},_reset:function(){var i=this._image,a=new Y(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=a.getSize();tt(i,a.min),i.style.width=u.x+"px",i.style.height=u.y+"px"},_updateOpacity:function(){fn(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var i=this.options.errorOverlayUrl;i&&this._url!==i&&(this._url=i,this._image.src=i)},getCenter:function(){return this._bounds.getCenter()}}),bS=function(i,a,u){return new Ba(i,a,u)},Eg=Ba.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var i=this._url.tagName==="VIDEO",a=this._image=i?this._url:je("video");if(ge(a,"leaflet-image-layer"),this._zoomAnimated&&ge(a,"leaflet-zoom-animated"),this.options.className&&ge(a,this.options.className),a.onselectstart=v,a.onmousemove=v,a.onloadeddata=c(this.fire,this,"load"),i){for(var u=a.getElementsByTagName("source"),h=[],g=0;g<u.length;g++)h.push(u[g].src);this._url=u.length>0?h:[a.src];return}x(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(a.style,"objectFit")&&(a.style.objectFit="fill"),a.autoplay=!!this.options.autoplay,a.loop=!!this.options.loop,a.muted=!!this.options.muted,a.playsInline=!!this.options.playsInline;for(var C=0;C<this._url.length;C++){var A=je("source");A.src=this._url[C],a.appendChild(A)}}});function _S(i,a,u){return new Eg(i,a,u)}var Tg=Ba.extend({_initImage:function(){var i=this._image=this._url;ge(i,"leaflet-image-layer"),this._zoomAnimated&&ge(i,"leaflet-zoom-animated"),this.options.className&&ge(i,this.options.className),i.onselectstart=v,i.onmousemove=v}});function SS(i,a,u){return new Tg(i,a,u)}var Hn=Cn.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(i,a){i&&(i instanceof ce||x(i))?(this._latlng=ae(i),w(this,a)):(w(this,i),this._source=a),this.options.content&&(this._content=this.options.content)},openOn:function(i){return i=arguments.length?i:this._source._map,i.hasLayer(this)||i.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(i){return this._map?this.close():(arguments.length?this._source=i:i=this._source,this._prepareOpen(),this.openOn(i._map)),this},onAdd:function(i){this._zoomAnimated=i._zoomAnimated,this._container||this._initLayout(),i._fadeAnimated&&fn(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),i._fadeAnimated&&fn(this._container,1),this.bringToFront(),this.options.interactive&&(ge(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(i){i._fadeAnimated?(fn(this._container,0),this._removeTimeout=setTimeout(c(qe,void 0,this._container),200)):qe(this._container),this.options.interactive&&(Ke(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(i){return this._latlng=ae(i),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(i){return this._content=i,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var i={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&Oi(this._container),this},bringToBack:function(){return this._map&&Ai(this._container),this},_prepareOpen:function(i){var a=this._source;if(!a._map)return!1;if(a instanceof nr){a=null;var u=this._source._layers;for(var h in u)if(u[h]._map){a=u[h];break}if(!a)return!1;this._source=a}if(!i)if(a.getCenter)i=a.getCenter();else if(a.getLatLng)i=a.getLatLng();else if(a.getBounds)i=a.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(i),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var i=this._contentNode,a=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof a=="string")i.innerHTML=a;else{for(;i.hasChildNodes();)i.removeChild(i.firstChild);i.appendChild(a)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var i=this._map.latLngToLayerPoint(this._latlng),a=D(this.options.offset),u=this._getAnchor();this._zoomAnimated?tt(this._container,i.add(u)):a=a.add(i).add(u);var h=this._containerBottom=-a.y,g=this._containerLeft=-Math.round(this._containerWidth/2)+a.x;this._container.style.bottom=h+"px",this._container.style.left=g+"px"}},_getAnchor:function(){return[0,0]}});Se.include({_initOverlay:function(i,a,u,h){var g=a;return g instanceof i||(g=new i(h).setContent(a)),u&&g.setLatLng(u),g}}),Cn.include({_initOverlay:function(i,a,u,h){var g=u;return g instanceof i?(w(g,h),g._source=this):(g=a&&!h?a:new i(h,this),g.setContent(u)),g}});var Fa=Hn.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(i){return i=arguments.length?i:this._source._map,!i.hasLayer(this)&&i._popup&&i._popup.options.autoClose&&i.removeLayer(i._popup),i._popup=this,Hn.prototype.openOn.call(this,i)},onAdd:function(i){Hn.prototype.onAdd.call(this,i),i.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof br||this._source.on("preclick",Jr))},onRemove:function(i){Hn.prototype.onRemove.call(this,i),i.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof br||this._source.off("preclick",Jr))},getEvents:function(){var i=Hn.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(i.preclick=this.close),this.options.keepInView&&(i.moveend=this._adjustPan),i},_initLayout:function(){var i="leaflet-popup",a=this._container=je("div",i+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=je("div",i+"-content-wrapper",a);if(this._contentNode=je("div",i+"-content",u),eo(a),gd(this._contentNode),he(a,"contextmenu",Jr),this._tipContainer=je("div",i+"-tip-container",a),this._tip=je("div",i+"-tip",this._tipContainer),this.options.closeButton){var h=this._closeButton=je("a",i+"-close-button",a);h.setAttribute("role","button"),h.setAttribute("aria-label","Close popup"),h.href="#close",h.innerHTML='<span aria-hidden="true">&#215;</span>',he(h,"click",function(g){vt(g),this.close()},this)}},_updateLayout:function(){var i=this._contentNode,a=i.style;a.width="",a.whiteSpace="nowrap";var u=i.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),a.width=u+1+"px",a.whiteSpace="",a.height="";var h=i.offsetHeight,g=this.options.maxHeight,C="leaflet-popup-scrolled";g&&h>g?(a.height=g+"px",ge(i,C)):Ke(i,C),this._containerWidth=this._container.offsetWidth},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center),u=this._getAnchor();tt(this._container,a.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var i=this._map,a=parseInt(Ks(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+a,h=this._containerWidth,g=new P(this._containerLeft,-u-this._containerBottom);g._add(Qr(this._container));var C=i.layerPointToContainerPoint(g),A=D(this.options.autoPanPadding),$=D(this.options.autoPanPaddingTopLeft||A),U=D(this.options.autoPanPaddingBottomRight||A),G=i.getSize(),ie=0,fe=0;C.x+h+U.x>G.x&&(ie=C.x+h-G.x+U.x),C.x-ie-$.x<0&&(ie=C.x-$.x),C.y+u+U.y>G.y&&(fe=C.y+u-G.y+U.y),C.y-fe-$.y<0&&(fe=C.y-$.y),(ie||fe)&&(this.options.keepInView&&(this._autopanning=!0),i.fire("autopanstart").panBy([ie,fe]))}},_getAnchor:function(){return D(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),kS=function(i,a){return new Fa(i,a)};Se.mergeOptions({closePopupOnClick:!0}),Se.include({openPopup:function(i,a,u){return this._initOverlay(Fa,i,a,u).openOn(this),this},closePopup:function(i){return i=arguments.length?i:this._popup,i&&i.close(),this}}),Cn.include({bindPopup:function(i,a){return this._popup=this._initOverlay(Fa,this._popup,i,a),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(i){return this._popup&&(this instanceof nr||(this._popup._source=this),this._popup._prepareOpen(i||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(i){return this._popup&&this._popup.setContent(i),this},getPopup:function(){return this._popup},_openPopup:function(i){if(!(!this._popup||!this._map)){ei(i);var a=i.layer||i.target;if(this._popup._source===a&&!(a instanceof br)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(i.latlng);return}this._popup._source=a,this.openPopup(i.latlng)}},_movePopup:function(i){this._popup.setLatLng(i.latlng)},_onKeyPress:function(i){i.originalEvent.keyCode===13&&this._openPopup(i)}});var Ua=Hn.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(i){Hn.prototype.onAdd.call(this,i),this.setOpacity(this.options.opacity),i.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(i){Hn.prototype.onRemove.call(this,i),i.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var i=Hn.prototype.getEvents.call(this);return this.options.permanent||(i.preclick=this.close),i},_initLayout:function(){var i="leaflet-tooltip",a=i+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=je("div",a),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+f(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(i){var a,u,h=this._map,g=this._container,C=h.latLngToContainerPoint(h.getCenter()),A=h.layerPointToContainerPoint(i),$=this.options.direction,U=g.offsetWidth,G=g.offsetHeight,ie=D(this.options.offset),fe=this._getAnchor();$==="top"?(a=U/2,u=G):$==="bottom"?(a=U/2,u=0):$==="center"?(a=U/2,u=G/2):$==="right"?(a=0,u=G/2):$==="left"?(a=U,u=G/2):A.x<C.x?($="right",a=0,u=G/2):($="left",a=U+(ie.x+fe.x)*2,u=G/2),i=i.subtract(D(a,u,!0)).add(ie).add(fe),Ke(g,"leaflet-tooltip-right"),Ke(g,"leaflet-tooltip-left"),Ke(g,"leaflet-tooltip-top"),Ke(g,"leaflet-tooltip-bottom"),ge(g,"leaflet-tooltip-"+$),tt(g,i)},_updatePosition:function(){var i=this._map.latLngToLayerPoint(this._latlng);this._setPosition(i)},setOpacity:function(i){this.options.opacity=i,this._container&&fn(this._container,i)},_animateZoom:function(i){var a=this._map._latLngToNewLayerPoint(this._latlng,i.zoom,i.center);this._setPosition(a)},_getAnchor:function(){return D(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),jS=function(i,a){return new Ua(i,a)};Se.include({openTooltip:function(i,a,u){return this._initOverlay(Ua,i,a,u).openOn(this),this},closeTooltip:function(i){return i.close(),this}}),Cn.include({bindTooltip:function(i,a){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(Ua,this._tooltip,i,a),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(i){if(!(!i&&this._tooltipHandlersAdded)){var a=i?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[a](u),this._tooltipHandlersAdded=!i}},openTooltip:function(i){return this._tooltip&&(this instanceof nr||(this._tooltip._source=this),this._tooltip._prepareOpen(i)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(i){return this._tooltip&&this._tooltip.setContent(i),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(i){var a=typeof i.getElement=="function"&&i.getElement();a&&(he(a,"focus",function(){this._tooltip._source=i,this.openTooltip()},this),he(a,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(i){var a=typeof i.getElement=="function"&&i.getElement();a&&a.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(i){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var a=this;this._map.once("moveend",function(){a._openOnceFlag=!1,a._openTooltip(i)});return}this._tooltip._source=i.layer||i.target,this.openTooltip(this._tooltip.options.sticky?i.latlng:void 0)}},_moveTooltip:function(i){var a=i.latlng,u,h;this._tooltip.options.sticky&&i.originalEvent&&(u=this._map.mouseEventToContainerPoint(i.originalEvent),h=this._map.containerPointToLayerPoint(u),a=this._map.layerPointToLatLng(h)),this._tooltip.setLatLng(a)}});var Lg=Ri.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(i){var a=i&&i.tagName==="DIV"?i:document.createElement("div"),u=this.options;if(u.html instanceof Element?(Pa(a),a.appendChild(u.html)):a.innerHTML=u.html!==!1?u.html:"",u.bgPos){var h=D(u.bgPos);a.style.backgroundPosition=-h.x+"px "+-h.y+"px"}return this._setIconStyles(a,"icon"),a},createShadow:function(){return null}});function NS(i){return new Lg(i)}Ri.Default=ro;var io=Cn.extend({options:{tileSize:256,opacity:1,updateWhenIdle:le.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(i){w(this,i)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(i){i._addZoomLimit(this)},onRemove:function(i){this._removeAllTiles(),qe(this._container),i._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(Oi(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(Ai(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(i){return this.options.opacity=i,this._updateOpacity(),this},setZIndex:function(i){return this.options.zIndex=i,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var i=this._clampZoom(this._map.getZoom());i!==this._tileZoom&&(this._tileZoom=i,this._updateLevels()),this._update()}return this},getEvents:function(){var i={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=m(this._onMoveEnd,this.options.updateInterval,this)),i.move=this._onMove),this._zoomAnimated&&(i.zoomanim=this._animateZoom),i},createTile:function(){return document.createElement("div")},getTileSize:function(){var i=this.options.tileSize;return i instanceof P?i:new P(i,i)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(i){for(var a=this.getPane().children,u=-i(-1/0,1/0),h=0,g=a.length,C;h<g;h++)C=a[h].style.zIndex,a[h]!==this._container&&C&&(u=i(u,+C));isFinite(u)&&(this.options.zIndex=u+i(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!le.ielt9){fn(this._container,this.options.opacity);var i=+new Date,a=!1,u=!1;for(var h in this._tiles){var g=this._tiles[h];if(!(!g.current||!g.loaded)){var C=Math.min(1,(i-g.loaded)/200);fn(g.el,C),C<1?a=!0:(g.active?u=!0:this._onOpaqueTile(g),g.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),a&&(Z(this._fadeFrame),this._fadeFrame=B(this._updateOpacity,this))}},_onOpaqueTile:v,_initContainer:function(){this._container||(this._container=je("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var i=this._tileZoom,a=this.options.maxZoom;if(i!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===i?(this._levels[u].el.style.zIndex=a-Math.abs(i-u),this._onUpdateLevel(u)):(qe(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var h=this._levels[i],g=this._map;return h||(h=this._levels[i]={},h.el=je("div","leaflet-tile-container leaflet-zoom-animated",this._container),h.el.style.zIndex=a,h.origin=g.project(g.unproject(g.getPixelOrigin()),i).round(),h.zoom=i,this._setZoomTransform(h,g.getCenter(),g.getZoom()),v(h.el.offsetWidth),this._onCreateLevel(h)),this._level=h,h}},_onUpdateLevel:v,_onRemoveLevel:v,_onCreateLevel:v,_pruneTiles:function(){if(this._map){var i,a,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(i in this._tiles)a=this._tiles[i],a.retain=a.current;for(i in this._tiles)if(a=this._tiles[i],a.current&&!a.active){var h=a.coords;this._retainParent(h.x,h.y,h.z,h.z-5)||this._retainChildren(h.x,h.y,h.z,h.z+2)}for(i in this._tiles)this._tiles[i].retain||this._removeTile(i)}},_removeTilesAtZoom:function(i){for(var a in this._tiles)this._tiles[a].coords.z===i&&this._removeTile(a)},_removeAllTiles:function(){for(var i in this._tiles)this._removeTile(i)},_invalidateAll:function(){for(var i in this._levels)qe(this._levels[i].el),this._onRemoveLevel(Number(i)),delete this._levels[i];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(i,a,u,h){var g=Math.floor(i/2),C=Math.floor(a/2),A=u-1,$=new P(+g,+C);$.z=+A;var U=this._tileCoordsToKey($),G=this._tiles[U];return G&&G.active?(G.retain=!0,!0):(G&&G.loaded&&(G.retain=!0),A>h?this._retainParent(g,C,A,h):!1)},_retainChildren:function(i,a,u,h){for(var g=2*i;g<2*i+2;g++)for(var C=2*a;C<2*a+2;C++){var A=new P(g,C);A.z=u+1;var $=this._tileCoordsToKey(A),U=this._tiles[$];if(U&&U.active){U.retain=!0;continue}else U&&U.loaded&&(U.retain=!0);u+1<h&&this._retainChildren(g,C,u+1,h)}},_resetView:function(i){var a=i&&(i.pinch||i.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),a,a)},_animateZoom:function(i){this._setView(i.center,i.zoom,!0,i.noUpdate)},_clampZoom:function(i){var a=this.options;return a.minNativeZoom!==void 0&&i<a.minNativeZoom?a.minNativeZoom:a.maxNativeZoom!==void 0&&a.maxNativeZoom<i?a.maxNativeZoom:i},_setView:function(i,a,u,h){var g=Math.round(a);this.options.maxZoom!==void 0&&g>this.options.maxZoom||this.options.minZoom!==void 0&&g<this.options.minZoom?g=void 0:g=this._clampZoom(g);var C=this.options.updateWhenZooming&&g!==this._tileZoom;(!h||C)&&(this._tileZoom=g,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),g!==void 0&&this._update(i),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(i,a)},_setZoomTransforms:function(i,a){for(var u in this._levels)this._setZoomTransform(this._levels[u],i,a)},_setZoomTransform:function(i,a,u){var h=this._map.getZoomScale(u,i.zoom),g=i.origin.multiplyBy(h).subtract(this._map._getNewPixelOrigin(a,u)).round();le.any3d?Xr(i.el,g,h):tt(i.el,g)},_resetGrid:function(){var i=this._map,a=i.options.crs,u=this._tileSize=this.getTileSize(),h=this._tileZoom,g=this._map.getPixelWorldBounds(this._tileZoom);g&&(this._globalTileRange=this._pxBoundsToTileRange(g)),this._wrapX=a.wrapLng&&!this.options.noWrap&&[Math.floor(i.project([0,a.wrapLng[0]],h).x/u.x),Math.ceil(i.project([0,a.wrapLng[1]],h).x/u.y)],this._wrapY=a.wrapLat&&!this.options.noWrap&&[Math.floor(i.project([a.wrapLat[0],0],h).y/u.x),Math.ceil(i.project([a.wrapLat[1],0],h).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(i){var a=this._map,u=a._animatingZoom?Math.max(a._animateToZoom,a.getZoom()):a.getZoom(),h=a.getZoomScale(u,this._tileZoom),g=a.project(i,this._tileZoom).floor(),C=a.getSize().divideBy(h*2);return new Y(g.subtract(C),g.add(C))},_update:function(i){var a=this._map;if(a){var u=this._clampZoom(a.getZoom());if(i===void 0&&(i=a.getCenter()),this._tileZoom!==void 0){var h=this._getTiledPixelBounds(i),g=this._pxBoundsToTileRange(h),C=g.getCenter(),A=[],$=this.options.keepBuffer,U=new Y(g.getBottomLeft().subtract([$,-$]),g.getTopRight().add([$,-$]));if(!(isFinite(g.min.x)&&isFinite(g.min.y)&&isFinite(g.max.x)&&isFinite(g.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var G in this._tiles){var ie=this._tiles[G].coords;(ie.z!==this._tileZoom||!U.contains(new P(ie.x,ie.y)))&&(this._tiles[G].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(i,u);return}for(var fe=g.min.y;fe<=g.max.y;fe++)for(var ye=g.min.x;ye<=g.max.x;ye++){var Tt=new P(ye,fe);if(Tt.z=this._tileZoom,!!this._isValidTile(Tt)){var dt=this._tiles[this._tileCoordsToKey(Tt)];dt?dt.current=!0:A.push(Tt)}}if(A.sort(function(Ft,Di){return Ft.distanceTo(C)-Di.distanceTo(C)}),A.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var mn=document.createDocumentFragment();for(ye=0;ye<A.length;ye++)this._addTile(A[ye],mn);this._level.el.appendChild(mn)}}}},_isValidTile:function(i){var a=this._map.options.crs;if(!a.infinite){var u=this._globalTileRange;if(!a.wrapLng&&(i.x<u.min.x||i.x>u.max.x)||!a.wrapLat&&(i.y<u.min.y||i.y>u.max.y))return!1}if(!this.options.bounds)return!0;var h=this._tileCoordsToBounds(i);return oe(this.options.bounds).overlaps(h)},_keyToBounds:function(i){return this._tileCoordsToBounds(this._keyToTileCoords(i))},_tileCoordsToNwSe:function(i){var a=this._map,u=this.getTileSize(),h=i.scaleBy(u),g=h.add(u),C=a.unproject(h,i.z),A=a.unproject(g,i.z);return[C,A]},_tileCoordsToBounds:function(i){var a=this._tileCoordsToNwSe(i),u=new ne(a[0],a[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(i){return i.x+":"+i.y+":"+i.z},_keyToTileCoords:function(i){var a=i.split(":"),u=new P(+a[0],+a[1]);return u.z=+a[2],u},_removeTile:function(i){var a=this._tiles[i];a&&(qe(a.el),delete this._tiles[i],this.fire("tileunload",{tile:a.el,coords:this._keyToTileCoords(i)}))},_initTile:function(i){ge(i,"leaflet-tile");var a=this.getTileSize();i.style.width=a.x+"px",i.style.height=a.y+"px",i.onselectstart=v,i.onmousemove=v,le.ielt9&&this.options.opacity<1&&fn(i,this.options.opacity)},_addTile:function(i,a){var u=this._getTilePos(i),h=this._tileCoordsToKey(i),g=this.createTile(this._wrapCoords(i),c(this._tileReady,this,i));this._initTile(g),this.createTile.length<2&&B(c(this._tileReady,this,i,null,g)),tt(g,u),this._tiles[h]={el:g,coords:i,current:!0},a.appendChild(g),this.fire("tileloadstart",{tile:g,coords:i})},_tileReady:function(i,a,u){a&&this.fire("tileerror",{error:a,tile:u,coords:i});var h=this._tileCoordsToKey(i);u=this._tiles[h],u&&(u.loaded=+new Date,this._map._fadeAnimated?(fn(u.el,0),Z(this._fadeFrame),this._fadeFrame=B(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),a||(ge(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:i})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),le.ielt9||!this._map._fadeAnimated?B(this._pruneTiles,this):setTimeout(c(this._pruneTiles,this),250)))},_getTilePos:function(i){return i.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(i){var a=new P(this._wrapX?p(i.x,this._wrapX):i.x,this._wrapY?p(i.y,this._wrapY):i.y);return a.z=i.z,a},_pxBoundsToTileRange:function(i){var a=this.getTileSize();return new Y(i.min.unscaleBy(a).floor(),i.max.unscaleBy(a).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var i in this._tiles)if(!this._tiles[i].loaded)return!1;return!0}});function CS(i){return new io(i)}var $i=io.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(i,a){this._url=i,a=w(this,a),a.detectRetina&&le.retina&&a.maxZoom>0?(a.tileSize=Math.floor(a.tileSize/2),a.zoomReverse?(a.zoomOffset--,a.minZoom=Math.min(a.maxZoom,a.minZoom+1)):(a.zoomOffset++,a.maxZoom=Math.max(a.minZoom,a.maxZoom-1)),a.minZoom=Math.max(0,a.minZoom)):a.zoomReverse?a.minZoom=Math.min(a.maxZoom,a.minZoom):a.maxZoom=Math.max(a.minZoom,a.maxZoom),typeof a.subdomains=="string"&&(a.subdomains=a.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(i,a){return this._url===i&&a===void 0&&(a=!0),this._url=i,a||this.redraw(),this},createTile:function(i,a){var u=document.createElement("img");return he(u,"load",c(this._tileOnLoad,this,a,u)),he(u,"error",c(this._tileOnError,this,a,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(i),u},getTileUrl:function(i){var a={r:le.retina?"@2x":"",s:this._getSubdomain(i),x:i.x,y:i.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-i.y;this.options.tms&&(a.y=u),a["-y"]=u}return y(this._url,s(a,this.options))},_tileOnLoad:function(i,a){le.ielt9?setTimeout(c(i,this,null,a),0):i(null,a)},_tileOnError:function(i,a,u){var h=this.options.errorTileUrl;h&&a.getAttribute("src")!==h&&(a.src=h),i(u,a)},_onTileRemove:function(i){i.tile.onload=null},_getZoomForUrl:function(){var i=this._tileZoom,a=this.options.maxZoom,u=this.options.zoomReverse,h=this.options.zoomOffset;return u&&(i=a-i),i+h},_getSubdomain:function(i){var a=Math.abs(i.x+i.y)%this.options.subdomains.length;return this.options.subdomains[a]},_abortLoading:function(){var i,a;for(i in this._tiles)if(this._tiles[i].coords.z!==this._tileZoom&&(a=this._tiles[i].el,a.onload=v,a.onerror=v,!a.complete)){a.src=T;var u=this._tiles[i].coords;qe(a),delete this._tiles[i],this.fire("tileabort",{tile:a,coords:u})}},_removeTile:function(i){var a=this._tiles[i];if(a)return a.el.setAttribute("src",T),io.prototype._removeTile.call(this,i)},_tileReady:function(i,a,u){if(!(!this._map||u&&u.getAttribute("src")===T))return io.prototype._tileReady.call(this,i,a,u)}});function Og(i,a){return new $i(i,a)}var Ag=$i.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(i,a){this._url=i;var u=s({},this.defaultWmsParams);for(var h in a)h in this.options||(u[h]=a[h]);a=w(this,a);var g=a.detectRetina&&le.retina?2:1,C=this.getTileSize();u.width=C.x*g,u.height=C.y*g,this.wmsParams=u},onAdd:function(i){this._crs=this.options.crs||i.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var a=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[a]=this._crs.code,$i.prototype.onAdd.call(this,i)},getTileUrl:function(i){var a=this._tileCoordsToNwSe(i),u=this._crs,h=R(u.project(a[0]),u.project(a[1])),g=h.min,C=h.max,A=(this._wmsVersion>=1.3&&this._crs===jg?[g.y,g.x,C.y,C.x]:[g.x,g.y,C.x,C.y]).join(","),$=$i.prototype.getTileUrl.call(this,i);return $+S(this.wmsParams,$,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+A},setParams:function(i,a){return s(this.wmsParams,i),a||this.redraw(),this}});function PS(i,a){return new Ag(i,a)}$i.WMS=Ag,Og.wms=PS;var sr=Cn.extend({options:{padding:.1},initialize:function(i){w(this,i),f(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),ge(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var i={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(i.zoomanim=this._onAnimZoom),i},_onAnimZoom:function(i){this._updateTransform(i.center,i.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(i,a){var u=this._map.getZoomScale(a,this._zoom),h=this._map.getSize().multiplyBy(.5+this.options.padding),g=this._map.project(this._center,a),C=h.multiplyBy(-u).add(g).subtract(this._map._getNewPixelOrigin(i,a));le.any3d?Xr(this._container,C,u):tt(this._container,C)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var i in this._layers)this._layers[i]._reset()},_onZoomEnd:function(){for(var i in this._layers)this._layers[i]._project()},_updatePaths:function(){for(var i in this._layers)this._layers[i]._update()},_update:function(){var i=this.options.padding,a=this._map.getSize(),u=this._map.containerPointToLayerPoint(a.multiplyBy(-i)).round();this._bounds=new Y(u,u.add(a.multiplyBy(1+i*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),Ig=sr.extend({options:{tolerance:0},getEvents:function(){var i=sr.prototype.getEvents.call(this);return i.viewprereset=this._onViewPreReset,i},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){sr.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var i=this._container=document.createElement("canvas");he(i,"mousemove",this._onMouseMove,this),he(i,"click dblclick mousedown mouseup contextmenu",this._onClick,this),he(i,"mouseout",this._handleMouseOut,this),i._leaflet_disable_events=!0,this._ctx=i.getContext("2d")},_destroyContainer:function(){Z(this._redrawRequest),delete this._ctx,qe(this._container),ze(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var i;this._redrawBounds=null;for(var a in this._layers)i=this._layers[a],i._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){sr.prototype._update.call(this);var i=this._bounds,a=this._container,u=i.getSize(),h=le.retina?2:1;tt(a,i.min),a.width=h*u.x,a.height=h*u.y,a.style.width=u.x+"px",a.style.height=u.y+"px",le.retina&&this._ctx.scale(2,2),this._ctx.translate(-i.min.x,-i.min.y),this.fire("update")}},_reset:function(){sr.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(i){this._updateDashArray(i),this._layers[f(i)]=i;var a=i._order={layer:i,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=a),this._drawLast=a,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(i){this._requestRedraw(i)},_removePath:function(i){var a=i._order,u=a.next,h=a.prev;u?u.prev=h:this._drawLast=h,h?h.next=u:this._drawFirst=u,delete i._order,delete this._layers[f(i)],this._requestRedraw(i)},_updatePath:function(i){this._extendRedrawBounds(i),i._project(),i._update(),this._requestRedraw(i)},_updateStyle:function(i){this._updateDashArray(i),this._requestRedraw(i)},_updateDashArray:function(i){if(typeof i.options.dashArray=="string"){var a=i.options.dashArray.split(/[, ]+/),u=[],h,g;for(g=0;g<a.length;g++){if(h=Number(a[g]),isNaN(h))return;u.push(h)}i.options._dashArray=u}else i.options._dashArray=i.options.dashArray},_requestRedraw:function(i){this._map&&(this._extendRedrawBounds(i),this._redrawRequest=this._redrawRequest||B(this._redraw,this))},_extendRedrawBounds:function(i){if(i._pxBounds){var a=(i.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new Y,this._redrawBounds.extend(i._pxBounds.min.subtract([a,a])),this._redrawBounds.extend(i._pxBounds.max.add([a,a]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var i=this._redrawBounds;if(i){var a=i.getSize();this._ctx.clearRect(i.min.x,i.min.y,a.x,a.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var i,a=this._redrawBounds;if(this._ctx.save(),a){var u=a.getSize();this._ctx.beginPath(),this._ctx.rect(a.min.x,a.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var h=this._drawFirst;h;h=h.next)i=h.layer,(!a||i._pxBounds&&i._pxBounds.intersects(a))&&i._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(i,a){if(this._drawing){var u,h,g,C,A=i._parts,$=A.length,U=this._ctx;if($){for(U.beginPath(),u=0;u<$;u++){for(h=0,g=A[u].length;h<g;h++)C=A[u][h],U[h?"lineTo":"moveTo"](C.x,C.y);a&&U.closePath()}this._fillStroke(U,i)}}},_updateCircle:function(i){if(!(!this._drawing||i._empty())){var a=i._point,u=this._ctx,h=Math.max(Math.round(i._radius),1),g=(Math.max(Math.round(i._radiusY),1)||h)/h;g!==1&&(u.save(),u.scale(1,g)),u.beginPath(),u.arc(a.x,a.y/g,h,0,Math.PI*2,!1),g!==1&&u.restore(),this._fillStroke(u,i)}},_fillStroke:function(i,a){var u=a.options;u.fill&&(i.globalAlpha=u.fillOpacity,i.fillStyle=u.fillColor||u.color,i.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(i.setLineDash&&i.setLineDash(a.options&&a.options._dashArray||[]),i.globalAlpha=u.opacity,i.lineWidth=u.weight,i.strokeStyle=u.color,i.lineCap=u.lineCap,i.lineJoin=u.lineJoin,i.stroke())},_onClick:function(i){for(var a=this._map.mouseEventToLayerPoint(i),u,h,g=this._drawFirst;g;g=g.next)u=g.layer,u.options.interactive&&u._containsPoint(a)&&(!(i.type==="click"||i.type==="preclick")||!this._map._draggableMoved(u))&&(h=u);this._fireEvent(h?[h]:!1,i)},_onMouseMove:function(i){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var a=this._map.mouseEventToLayerPoint(i);this._handleMouseHover(i,a)}},_handleMouseOut:function(i){var a=this._hoveredLayer;a&&(Ke(this._container,"leaflet-interactive"),this._fireEvent([a],i,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(i,a){if(!this._mouseHoverThrottled){for(var u,h,g=this._drawFirst;g;g=g.next)u=g.layer,u.options.interactive&&u._containsPoint(a)&&(h=u);h!==this._hoveredLayer&&(this._handleMouseOut(i),h&&(ge(this._container,"leaflet-interactive"),this._fireEvent([h],i,"mouseover"),this._hoveredLayer=h)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,i),this._mouseHoverThrottled=!0,setTimeout(c(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(i,a,u){this._map._fireDOMEvent(a,u||a.type,i)},_bringToFront:function(i){var a=i._order;if(a){var u=a.next,h=a.prev;if(u)u.prev=h;else return;h?h.next=u:u&&(this._drawFirst=u),a.prev=this._drawLast,this._drawLast.next=a,a.next=null,this._drawLast=a,this._requestRedraw(i)}},_bringToBack:function(i){var a=i._order;if(a){var u=a.next,h=a.prev;if(h)h.next=u;else return;u?u.prev=h:h&&(this._drawLast=h),a.prev=null,a.next=this._drawFirst,this._drawFirst.prev=a,this._drawFirst=a,this._requestRedraw(i)}}});function Rg(i){return le.canvas?new Ig(i):null}var so=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(i){return document.createElement("<lvml:"+i+' class="lvml">')}}catch{}return function(i){return document.createElement("<"+i+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),ES={_initContainer:function(){this._container=je("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(sr.prototype._update.call(this),this.fire("update"))},_initPath:function(i){var a=i._container=so("shape");ge(a,"leaflet-vml-shape "+(this.options.className||"")),a.coordsize="1 1",i._path=so("path"),a.appendChild(i._path),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){var a=i._container;this._container.appendChild(a),i.options.interactive&&i.addInteractiveTarget(a)},_removePath:function(i){var a=i._container;qe(a),i.removeInteractiveTarget(a),delete this._layers[f(i)]},_updateStyle:function(i){var a=i._stroke,u=i._fill,h=i.options,g=i._container;g.stroked=!!h.stroke,g.filled=!!h.fill,h.stroke?(a||(a=i._stroke=so("stroke")),g.appendChild(a),a.weight=h.weight+"px",a.color=h.color,a.opacity=h.opacity,h.dashArray?a.dashStyle=x(h.dashArray)?h.dashArray.join(" "):h.dashArray.replace(/( *, *)/g," "):a.dashStyle="",a.endcap=h.lineCap.replace("butt","flat"),a.joinstyle=h.lineJoin):a&&(g.removeChild(a),i._stroke=null),h.fill?(u||(u=i._fill=so("fill")),g.appendChild(u),u.color=h.fillColor||h.color,u.opacity=h.fillOpacity):u&&(g.removeChild(u),i._fill=null)},_updateCircle:function(i){var a=i._point.round(),u=Math.round(i._radius),h=Math.round(i._radiusY||u);this._setPath(i,i._empty()?"M0 0":"AL "+a.x+","+a.y+" "+u+","+h+" 0,"+65535*360)},_setPath:function(i,a){i._path.v=a},_bringToFront:function(i){Oi(i._container)},_bringToBack:function(i){Ai(i._container)}},Ha=le.vml?so:Dp,oo=sr.extend({_initContainer:function(){this._container=Ha("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=Ha("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){qe(this._container),ze(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){sr.prototype._update.call(this);var i=this._bounds,a=i.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(a))&&(this._svgSize=a,u.setAttribute("width",a.x),u.setAttribute("height",a.y)),tt(u,i.min),u.setAttribute("viewBox",[i.min.x,i.min.y,a.x,a.y].join(" ")),this.fire("update")}},_initPath:function(i){var a=i._path=Ha("path");i.options.className&&ge(a,i.options.className),i.options.interactive&&ge(a,"leaflet-interactive"),this._updateStyle(i),this._layers[f(i)]=i},_addPath:function(i){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(i._path),i.addInteractiveTarget(i._path)},_removePath:function(i){qe(i._path),i.removeInteractiveTarget(i._path),delete this._layers[f(i)]},_updatePath:function(i){i._project(),i._update()},_updateStyle:function(i){var a=i._path,u=i.options;a&&(u.stroke?(a.setAttribute("stroke",u.color),a.setAttribute("stroke-opacity",u.opacity),a.setAttribute("stroke-width",u.weight),a.setAttribute("stroke-linecap",u.lineCap),a.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?a.setAttribute("stroke-dasharray",u.dashArray):a.removeAttribute("stroke-dasharray"),u.dashOffset?a.setAttribute("stroke-dashoffset",u.dashOffset):a.removeAttribute("stroke-dashoffset")):a.setAttribute("stroke","none"),u.fill?(a.setAttribute("fill",u.fillColor||u.color),a.setAttribute("fill-opacity",u.fillOpacity),a.setAttribute("fill-rule",u.fillRule||"evenodd")):a.setAttribute("fill","none"))},_updatePoly:function(i,a){this._setPath(i,Bp(i._parts,a))},_updateCircle:function(i){var a=i._point,u=Math.max(Math.round(i._radius),1),h=Math.max(Math.round(i._radiusY),1)||u,g="a"+u+","+h+" 0 1,0 ",C=i._empty()?"M0 0":"M"+(a.x-u)+","+a.y+g+u*2+",0 "+g+-u*2+",0 ";this._setPath(i,C)},_setPath:function(i,a){i._path.setAttribute("d",a)},_bringToFront:function(i){Oi(i._path)},_bringToBack:function(i){Ai(i._path)}});le.vml&&oo.include(ES);function zg(i){return le.svg||le.vml?new oo(i):null}Se.include({getRenderer:function(i){var a=i.options.renderer||this._getPaneRenderer(i.options.pane)||this.options.renderer||this._renderer;return a||(a=this._renderer=this._createRenderer()),this.hasLayer(a)||this.addLayer(a),a},_getPaneRenderer:function(i){if(i==="overlayPane"||i===void 0)return!1;var a=this._paneRenderers[i];return a===void 0&&(a=this._createRenderer({pane:i}),this._paneRenderers[i]=a),a},_createRenderer:function(i){return this.options.preferCanvas&&Rg(i)||zg(i)}});var Mg=zi.extend({initialize:function(i,a){zi.prototype.initialize.call(this,this._boundsToLatLngs(i),a)},setBounds:function(i){return this.setLatLngs(this._boundsToLatLngs(i))},_boundsToLatLngs:function(i){return i=oe(i),[i.getSouthWest(),i.getNorthWest(),i.getNorthEast(),i.getSouthEast()]}});function TS(i,a){return new Mg(i,a)}oo.create=Ha,oo.pointsToPath=Bp,ir.geometryToLayer=za,ir.coordsToLatLng=jd,ir.coordsToLatLngs=Ma,ir.latLngToCoords=Nd,ir.latLngsToCoords=$a,ir.getFeature=Mi,ir.asFeature=Da,Se.mergeOptions({boxZoom:!0});var $g=Un.extend({initialize:function(i){this._map=i,this._container=i._container,this._pane=i._panes.overlayPane,this._resetStateTimeout=0,i.on("unload",this._destroy,this)},addHooks:function(){he(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){ze(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){qe(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(i){if(!i.shiftKey||i.which!==1&&i.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Xs(),ld(),this._startPoint=this._map.mouseEventToContainerPoint(i),he(document,{contextmenu:ei,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(i){this._moved||(this._moved=!0,this._box=je("div","leaflet-zoom-box",this._container),ge(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(i);var a=new Y(this._point,this._startPoint),u=a.getSize();tt(this._box,a.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(qe(this._box),Ke(this._container,"leaflet-crosshair")),Qs(),cd(),ze(document,{contextmenu:ei,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(i){if(!(i.which!==1&&i.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(c(this._resetState,this),0);var a=new ne(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(a).fire("boxzoomend",{boxZoomBounds:a})}},_onKeyDown:function(i){i.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});Se.addInitHook("addHandler","boxZoom",$g),Se.mergeOptions({doubleClickZoom:!0});var Dg=Un.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(i){var a=this._map,u=a.getZoom(),h=a.options.zoomDelta,g=i.originalEvent.shiftKey?u-h:u+h;a.options.doubleClickZoom==="center"?a.setZoom(g):a.setZoomAround(i.containerPoint,g)}});Se.addInitHook("addHandler","doubleClickZoom",Dg),Se.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var Bg=Un.extend({addHooks:function(){if(!this._draggable){var i=this._map;this._draggable=new wr(i._mapPane,i._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),i.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),i.on("zoomend",this._onZoomEnd,this),i.whenReady(this._onZoomEnd,this))}ge(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){Ke(this._map._container,"leaflet-grab"),Ke(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var i=this._map;if(i._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var a=oe(this._map.options.maxBounds);this._offsetLimit=R(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;i.fire("movestart").fire("dragstart"),i.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(i){if(this._map.options.inertia){var a=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(a),this._prunePositions(a)}this._map.fire("move",i).fire("drag",i)},_prunePositions:function(i){for(;this._positions.length>1&&i-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var i=this._map.getSize().divideBy(2),a=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=a.subtract(i).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(i,a){return i-(i-a)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var i=this._draggable._newPos.subtract(this._draggable._startPos),a=this._offsetLimit;i.x<a.min.x&&(i.x=this._viscousLimit(i.x,a.min.x)),i.y<a.min.y&&(i.y=this._viscousLimit(i.y,a.min.y)),i.x>a.max.x&&(i.x=this._viscousLimit(i.x,a.max.x)),i.y>a.max.y&&(i.y=this._viscousLimit(i.y,a.max.y)),this._draggable._newPos=this._draggable._startPos.add(i)}},_onPreDragWrap:function(){var i=this._worldWidth,a=Math.round(i/2),u=this._initialWorldOffset,h=this._draggable._newPos.x,g=(h-a+u)%i+a-u,C=(h+a+u)%i-a-u,A=Math.abs(g+u)<Math.abs(C+u)?g:C;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=A},_onDragEnd:function(i){var a=this._map,u=a.options,h=!u.inertia||i.noInertia||this._times.length<2;if(a.fire("dragend",i),h)a.fire("moveend");else{this._prunePositions(+new Date);var g=this._lastPos.subtract(this._positions[0]),C=(this._lastTime-this._times[0])/1e3,A=u.easeLinearity,$=g.multiplyBy(A/C),U=$.distanceTo([0,0]),G=Math.min(u.inertiaMaxSpeed,U),ie=$.multiplyBy(G/U),fe=G/(u.inertiaDeceleration*A),ye=ie.multiplyBy(-fe/2).round();!ye.x&&!ye.y?a.fire("moveend"):(ye=a._limitOffset(ye,a.options.maxBounds),B(function(){a.panBy(ye,{duration:fe,easeLinearity:A,noMoveStart:!0,animate:!0})}))}}});Se.addInitHook("addHandler","dragging",Bg),Se.mergeOptions({keyboard:!0,keyboardPanDelta:80});var Fg=Un.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(i){this._map=i,this._setPanDelta(i.options.keyboardPanDelta),this._setZoomDelta(i.options.zoomDelta)},addHooks:function(){var i=this._map._container;i.tabIndex<=0&&(i.tabIndex="0"),he(i,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),ze(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=document.body,a=document.documentElement,u=i.scrollTop||a.scrollTop,h=i.scrollLeft||a.scrollLeft;this._map._container.focus(),window.scrollTo(h,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(i){var a=this._panKeys={},u=this.keyCodes,h,g;for(h=0,g=u.left.length;h<g;h++)a[u.left[h]]=[-1*i,0];for(h=0,g=u.right.length;h<g;h++)a[u.right[h]]=[i,0];for(h=0,g=u.down.length;h<g;h++)a[u.down[h]]=[0,i];for(h=0,g=u.up.length;h<g;h++)a[u.up[h]]=[0,-1*i]},_setZoomDelta:function(i){var a=this._zoomKeys={},u=this.keyCodes,h,g;for(h=0,g=u.zoomIn.length;h<g;h++)a[u.zoomIn[h]]=i;for(h=0,g=u.zoomOut.length;h<g;h++)a[u.zoomOut[h]]=-i},_addHooks:function(){he(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){ze(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(i){if(!(i.altKey||i.ctrlKey||i.metaKey)){var a=i.keyCode,u=this._map,h;if(a in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(h=this._panKeys[a],i.shiftKey&&(h=D(h).multiplyBy(3)),u.options.maxBounds&&(h=u._limitOffset(D(h),u.options.maxBounds)),u.options.worldCopyJump){var g=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(h)));u.panTo(g)}else u.panBy(h)}else if(a in this._zoomKeys)u.setZoom(u.getZoom()+(i.shiftKey?3:1)*this._zoomKeys[a]);else if(a===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;ei(i)}}});Se.addInitHook("addHandler","keyboard",Fg),Se.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var Ug=Un.extend({addHooks:function(){he(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){ze(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(i){var a=fg(i),u=this._map.options.wheelDebounceTime;this._delta+=a,this._lastMousePos=this._map.mouseEventToContainerPoint(i),this._startTime||(this._startTime=+new Date);var h=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(c(this._performZoom,this),h),ei(i)},_performZoom:function(){var i=this._map,a=i.getZoom(),u=this._map.options.zoomSnap||0;i._stop();var h=this._delta/(this._map.options.wheelPxPerZoomLevel*4),g=4*Math.log(2/(1+Math.exp(-Math.abs(h))))/Math.LN2,C=u?Math.ceil(g/u)*u:g,A=i._limitZoom(a+(this._delta>0?C:-C))-a;this._delta=0,this._startTime=null,A&&(i.options.scrollWheelZoom==="center"?i.setZoom(a+A):i.setZoomAround(this._lastMousePos,a+A))}});Se.addInitHook("addHandler","scrollWheelZoom",Ug);var LS=600;Se.mergeOptions({tapHold:le.touchNative&&le.safari&&le.mobile,tapTolerance:15});var Hg=Un.extend({addHooks:function(){he(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){ze(this._map._container,"touchstart",this._onDown,this)},_onDown:function(i){if(clearTimeout(this._holdTimeout),i.touches.length===1){var a=i.touches[0];this._startPos=this._newPos=new P(a.clientX,a.clientY),this._holdTimeout=setTimeout(c(function(){this._cancel(),this._isTapValid()&&(he(document,"touchend",vt),he(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",a))},this),LS),he(document,"touchend touchcancel contextmenu",this._cancel,this),he(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function i(){ze(document,"touchend",vt),ze(document,"touchend touchcancel",i)},_cancel:function(){clearTimeout(this._holdTimeout),ze(document,"touchend touchcancel contextmenu",this._cancel,this),ze(document,"touchmove",this._onMove,this)},_onMove:function(i){var a=i.touches[0];this._newPos=new P(a.clientX,a.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(i,a){var u=new MouseEvent(i,{bubbles:!0,cancelable:!0,view:window,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY});u._simulated=!0,a.target.dispatchEvent(u)}});Se.addInitHook("addHandler","tapHold",Hg),Se.mergeOptions({touchZoom:le.touch,bounceAtZoomLimits:!0});var qg=Un.extend({addHooks:function(){ge(this._map._container,"leaflet-touch-zoom"),he(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){Ke(this._map._container,"leaflet-touch-zoom"),ze(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(i){var a=this._map;if(!(!i.touches||i.touches.length!==2||a._animatingZoom||this._zooming)){var u=a.mouseEventToContainerPoint(i.touches[0]),h=a.mouseEventToContainerPoint(i.touches[1]);this._centerPoint=a.getSize()._divideBy(2),this._startLatLng=a.containerPointToLatLng(this._centerPoint),a.options.touchZoom!=="center"&&(this._pinchStartLatLng=a.containerPointToLatLng(u.add(h)._divideBy(2))),this._startDist=u.distanceTo(h),this._startZoom=a.getZoom(),this._moved=!1,this._zooming=!0,a._stop(),he(document,"touchmove",this._onTouchMove,this),he(document,"touchend touchcancel",this._onTouchEnd,this),vt(i)}},_onTouchMove:function(i){if(!(!i.touches||i.touches.length!==2||!this._zooming)){var a=this._map,u=a.mouseEventToContainerPoint(i.touches[0]),h=a.mouseEventToContainerPoint(i.touches[1]),g=u.distanceTo(h)/this._startDist;if(this._zoom=a.getScaleZoom(g,this._startZoom),!a.options.bounceAtZoomLimits&&(this._zoom<a.getMinZoom()&&g<1||this._zoom>a.getMaxZoom()&&g>1)&&(this._zoom=a._limitZoom(this._zoom)),a.options.touchZoom==="center"){if(this._center=this._startLatLng,g===1)return}else{var C=u._add(h)._divideBy(2)._subtract(this._centerPoint);if(g===1&&C.x===0&&C.y===0)return;this._center=a.unproject(a.project(this._pinchStartLatLng,this._zoom).subtract(C),this._zoom)}this._moved||(a._moveStart(!0,!1),this._moved=!0),Z(this._animRequest);var A=c(a._move,a,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=B(A,this,!0),vt(i)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,Z(this._animRequest),ze(document,"touchmove",this._onTouchMove,this),ze(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});Se.addInitHook("addHandler","touchZoom",qg),Se.BoxZoom=$g,Se.DoubleClickZoom=Dg,Se.Drag=Bg,Se.Keyboard=Fg,Se.ScrollWheelZoom=Ug,Se.TapHold=Hg,Se.TouchZoom=qg,n.Bounds=Y,n.Browser=le,n.CRS=at,n.Canvas=Ig,n.Circle=kd,n.CircleMarker=Ra,n.Class=K,n.Control=Nn,n.DivIcon=Lg,n.DivOverlay=Hn,n.DomEvent=Y2,n.DomUtil=V2,n.Draggable=wr,n.Evented=V,n.FeatureGroup=nr,n.GeoJSON=ir,n.GridLayer=io,n.Handler=Un,n.Icon=Ri,n.ImageOverlay=Ba,n.LatLng=ce,n.LatLngBounds=ne,n.Layer=Cn,n.LayerGroup=Ii,n.LineUtil=lS,n.Map=Se,n.Marker=Ia,n.Mixin=nS,n.Path=br,n.Point=P,n.PolyUtil=rS,n.Polygon=zi,n.Polyline=rr,n.Popup=Fa,n.PosAnimation=hg,n.Projection=cS,n.Rectangle=Mg,n.Renderer=sr,n.SVG=oo,n.SVGOverlay=Tg,n.TileLayer=$i,n.Tooltip=Ua,n.Transformation=xr,n.Util=Q,n.VideoOverlay=Eg,n.bind=c,n.bounds=R,n.canvas=Rg,n.circle=vS,n.circleMarker=gS,n.control=to,n.divIcon=NS,n.extend=s,n.featureGroup=hS,n.geoJSON=Pg,n.geoJson=wS,n.gridLayer=CS,n.icon=mS,n.imageOverlay=bS,n.latLng=ae,n.latLngBounds=oe,n.layerGroup=fS,n.map=K2,n.marker=pS,n.point=D,n.polygon=xS,n.polyline=yS,n.popup=kS,n.rectangle=TS,n.setOptions=w,n.stamp=f,n.svg=zg,n.svgOverlay=SS,n.tileLayer=Og,n.tooltip=jS,n.transformation=Bt,n.version=r,n.videoOverlay=_S;var OS=window.L;n.noConflict=function(){return window.L=OS,this},window.L=n})})(tm,tm.exports);var Ku=tm.exports;const h2=rm(Ku);function m2(e,t,n){return Object.freeze({instance:e,context:t,container:n})}function p2(e,t){return t==null?function(r,s){const l=j.useRef();return l.current||(l.current=e(r,s)),l}:function(r,s){const l=j.useRef();l.current||(l.current=e(r,s));const c=j.useRef(r),{instance:d}=l.current;return j.useEffect(function(){c.current!==r&&(t(d,r,c.current),c.current=r)},[d,r,s]),l}}function LI(e,t){j.useEffect(function(){return(t.layerContainer??t.map).addLayer(e.instance),function(){var l;(l=t.layerContainer)==null||l.removeLayer(e.instance),t.map.removeLayer(e.instance)}},[t,e])}function g2(e){return function(n){const r=d2(),s=e(f2(n,r),r);return kI(r.map,n.attribution),TI(s.current,n.eventHandlers),LI(s.current,r),s}}function OI(e,t){const n=p2(e,t),r=g2(n);return PI(r)}function AI(e,t){const n=p2(e,t),r=g2(n);return EI(r)}function II(e,t,n){const{opacity:r,zIndex:s}=t;r!=null&&r!==n.opacity&&e.setOpacity(r),s!=null&&s!==n.zIndex&&e.setZIndex(s)}function RI(){return d2().map}function Ny(e){const t=RI();return j.useEffect(function(){return t.on(e),function(){t.off(e)}},[t,e]),t}function nm(){return nm=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},nm.apply(this,arguments)}function zI({bounds:e,boundsOptions:t,center:n,children:r,className:s,id:l,placeholder:c,style:d,whenReady:f,zoom:m,...p},v){const[b]=j.useState({className:s,id:l,style:d}),[k,N]=j.useState(null);j.useImperativeHandle(v,()=>(k==null?void 0:k.map)??null,[k]);const w=j.useCallback(_=>{if(_!==null&&k===null){const y=new Ku.Map(_,p);n!=null&&m!=null?y.setView(n,m):e!=null&&y.fitBounds(e,t),f!=null&&y.whenReady(f),N(NI(y))}},[]);j.useEffect(()=>()=>{k==null||k.map.remove()},[k]);const S=k?wn.createElement(u2,{value:k},r):c??null;return wn.createElement("div",nm({},b,{ref:w}),S)}const MI=j.forwardRef(zI),$I=OI(function({position:t,...n},r){const s=new Ku.Marker(t,n);return m2(s,CI(r,{overlayContainer:s}))},function(t,n,r){n.position!==r.position&&t.setLatLng(n.position),n.icon!=null&&n.icon!==r.icon&&t.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==r.zIndexOffset&&t.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==r.opacity&&t.setOpacity(n.opacity),t.dragging!=null&&n.draggable!==r.draggable&&(n.draggable===!0?t.dragging.enable():t.dragging.disable())}),DI=AI(function({url:t,...n},r){const s=new Ku.TileLayer(t,f2(n,r));return m2(s,r)},function(t,n,r){II(t,n,r);const{url:s}=n;s!=null&&s!==r.url&&t.setUrl(s)});delete h2.Icon.Default.prototype._getIconUrl;h2.Icon.Default.mergeOptions({iconRetinaUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",iconUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png"});const BI=()=>{const e=Mn(),[t,n]=j.useState(!0),[r,s]=j.useState(null),[l,c]=j.useState(!1),[d,f]=j.useState({lat:29.1492,lng:75.7217}),[m,p]=j.useState(""),[v,b]=j.useState(""),[k,N]=j.useState({emailOtp:"",phoneOtp:""}),[w,S]=j.useState(!1),[_,y]=j.useState(""),[x,E]=j.useState({firstName:"",lastName:"",storeName:"",email:"",PhoneNumber:"",gstNumber:"",additionalInfo:"",city:"",zone:"",aadharCard:[],panCard:[]}),[T,O]=j.useState([]),[I,q]=j.useState([]),F=()=>(Ny({click(V){f(V.latlng),p(V.latlng.lat),b(V.latlng.lng)}}),null);j.useEffect(()=>{const V=setTimeout(()=>{n(!1)},1500);return()=>clearTimeout(V)},[]);const z=async()=>{var V,P;if(!k.emailOtp&&!k.phoneOtp){Ie.fire("Error","Enter at least one OTP to verify.","error");return}S(!0);try{const M=await xn(`${Tl}${pe.SELLER_VERIFY_OTP}`,{email:x.email,otpEmail:k.emailOtp,PhoneNumber:x.PhoneNumber,otp:k.phoneOtp,type:"register"});Ie.fire("Success",M.data.message,"success"),e("/"),c(!1)}catch(M){Ie.fire("Error",((P=(V=M.response)==null?void 0:V.data)==null?void 0:P.message)||"OTP verification failed","error")}finally{S(!1)}},B=async()=>{if(!x.gstNumber)return Ie.fire("Error","Enter GST Number","error");try{const V=await Re(`${Tl}${pe.GSTDETAIL}?gst=${x.gstNumber}`);if(V.data.success){const P=V.data.gstDetails;E(M=>({...M,storeName:P.tradename||""})),s(P),Ie.fire("Verified","GST Details fetched successfully","success")}else Ie.fire("Error","Invalid GST Number","error")}catch{Ie.fire("Error","Failed to verify GST number","error")}};j.useEffect(()=>{let V=!0;return n(!0),Re(pe.GETCITY).then(P=>{V&&(O(P.data||[]),y(null))}).catch(()=>{V&&y("Failed to load categories")}).finally(()=>{V&&n(!1)}),()=>{V=!1}},[]);const Z=V=>{const P=V.target.value;E(D=>({...D,city:P,zone:[]}));const M=T.find(D=>D.city===P);q((M==null?void 0:M.zones)||[])},Q=V=>{const P=V.target.value;E(Y=>({...Y,zone:[P]}));const M=T.find(Y=>Y.city===x.city),D=M==null?void 0:M.zones.find(Y=>Y._id===P);if(D){const Y={lat:D.latitude,lng:D.longitude};f(Y),p(D.latitude),b(D.longitude)}},K=({position:V})=>{const P=Ny({});return j.useEffect(()=>{P.setView(V,P.getZoom(),{animate:!0})},[V,P]),null},te=async V=>{var M,D;V.preventDefault();const P=new FormData;P.append("firstName",x.firstName),P.append("lastName",x.lastName),P.append("storeName",x.storeName),P.append("email",x.email),P.append("PhoneNumber",x.PhoneNumber),P.append("gstNumber",x.gstNumber),P.append("additionalInfo",x.additionalInfo),P.append("city",x.city),P.append("Latitude",m),P.append("Longitude",v),x.zone&&P.append("zone",x.zone),x.aadharCard.forEach(Y=>P.append("aadharCard",Y)),x.panCard.forEach(Y=>P.append("panCard",Y));try{const Y=await xn(`${Tl}${pe.SUBMIT}`,P,{headers:{"Content-Type":"multipart/form-data"}});Ie.fire("Success",Y.data.message,"success"),c(!0)}catch(Y){Ie.fire("Error",((D=(M=Y.response)==null?void 0:M.data)==null?void 0:D.message)||"Submission failed","error")}},ee=V=>{const{name:P,value:M}=V.target;E(D=>({...D,[P]:M}))};return o.jsx("div",{children:t?o.jsx("div",{className:"loader-container d-flex justify-content-center align-items-center",style:{minHeight:"60vh"},children:o.jsx(Vs,{visible:!0,height:"100",width:"100",ariaLabel:"magnifying-glass-loading",glassColor:"#c0efff",color:"#0aad0a"})}):o.jsxs(o.Fragment,{children:[o.jsx(Ti,{}),o.jsx("section",{className:"my-lg-14 my-8",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:o.jsxs("div",{className:"offset-lg-2 col-lg-8 col-12",children:[o.jsxs("div",{className:"mb-8",children:[o.jsx("h1",{className:"h3",children:"Become a Seller"}),o.jsx("p",{className:"lead mb-0",children:"Interested in selling your products on our platform? Fill out the form below, and our team will get in touch with you."})]}),o.jsxs("form",{className:"row",onSubmit:te,children:[o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["First Name",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",name:"firstName",className:"form-control",value:x.firstName,onChange:ee,required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Last Name",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",name:"lastName",className:"form-control",value:x.lastName,onChange:ee,required:!0})]}),o.jsxs("div",{className:"col-md-12 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Aadhar Card",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"file",className:"form-control",multiple:!0,accept:"image/*",onChange:V=>E(P=>({...P,aadharCard:Array.from(V.target.files)})),required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["GST Number",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsxs("div",{className:"d-flex",children:[o.jsx("input",{type:"text",className:"form-control",name:"gstNumber",value:x.gstNumber,onChange:ee,required:!0}),o.jsx("button",{type:"button",className:"btn btn-secondary ms-2",onClick:B,children:"Verify"})]})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Store / Business Name",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",name:"storeName",className:"form-control",value:x.storeName,onChange:ee,required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Email",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"email",name:"email",className:"form-control",value:x.email,onChange:ee,required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-whatsapp",viewBox:"0 0 16 16",children:o.jsx("path",{d:"M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"})})," WhatsApp Number"]}),o.jsx("input",{type:"tel",name:"PhoneNumber",className:"form-control",value:x.PhoneNumber,onChange:ee,placeholder:"Enter WhatsApp Number With country code"})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["City",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsxs("select",{name:"city",className:"form-control",value:x.city,onChange:Z,required:!0,children:[o.jsx("option",{value:"",children:"Select City"}),T.map(V=>o.jsx("option",{value:V.city,children:V.city},V._id))]})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Zone",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsxs("select",{name:"zone",className:"form-control",value:x.zone[0]||"",onChange:Q,required:!0,children:[o.jsx("option",{value:"",children:"Select Zone"}),I.map(V=>o.jsx("option",{value:V._id,children:V.zoneTitle},V._id))]})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx("div",{style:{height:"400px",width:"100%"},children:o.jsxs(MI,{center:d,zoom:15,style:{height:"100%",width:"100%"},children:[o.jsx(DI,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),o.jsx($I,{position:d}),o.jsx(F,{}),o.jsx(K,{position:d})]})}),o.jsxs("div",{className:"d-flex flex-wrap gap-3 mt-2",children:[o.jsxs("div",{style:{flex:"1 1 150px"},children:[o.jsx("label",{className:"form-label",children:"Latitude"}),o.jsx("input",{type:"number",step:"0.000001",className:"form-control",value:m||"",onChange:V=>p(parseFloat(V.target.value))})]}),o.jsxs("div",{style:{flex:"1 1 150px"},children:[o.jsx("label",{className:"form-label",children:"Longitude"}),o.jsx("input",{type:"number",step:"0.000001",className:"form-control",value:v||"",onChange:V=>b(parseFloat(V.target.value))})]})]})]}),l&&o.jsx("div",{className:"modal d-block",style:{background:"rgba(0,0,0,0.5)"},children:o.jsx("div",{className:"modal-dialog",children:o.jsxs("div",{className:"modal-content p-3",children:[o.jsx("h5",{className:"mb-3",children:"Verify Your OTP"}),o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{children:"Email OTP"}),o.jsx("input",{type:"text",className:"form-control",value:k.emailOtp,onChange:V=>N(P=>({...P,emailOtp:V.target.value})),placeholder:"Enter email OTP"})]}),o.jsxs("div",{className:"mb-3",children:[o.jsx("label",{children:"WhatsApp OTP"}),o.jsx("input",{type:"text",className:"form-control",value:k.phoneOtp,onChange:V=>N(P=>({...P,phoneOtp:V.target.value})),placeholder:"Enter WhatsApp OTP"})]}),o.jsxs("div",{className:"d-flex justify-content-end",children:[o.jsx("button",{className:"btn btn-secondary me-2",onClick:()=>c(!1),children:"Cancel"}),o.jsx("button",{className:"btn btn-primary",onClick:z,disabled:w,children:w?"Verifying...":"Verify OTP"})]})]})})}),o.jsxs("div",{className:"col-md-12 mb-3",children:[o.jsx("label",{className:"form-label",children:"Additional Information"}),o.jsx("textarea",{rows:3,className:"form-control",name:"additionalInfo",value:x.additionalInfo,onChange:ee})]}),o.jsx("div",{className:"col-md-12 justify-content-center d-flex mt-3",children:o.jsx("button",{type:"submit",style:{width:"80%"},className:"btn btn-primary",children:"Submit"})})]})]})})})})]})})},FI=()=>{const[e,t]=j.useState(!0);j.useEffect(()=>{const r=setTimeout(()=>{t(!1)},1500);return()=>clearTimeout(r)},[]);const n=r=>{r.preventDefault(),Ie.fire({icon:"success",title:"Thank you!",text:"Your delivery partner application has been submitted. Our team will contact you shortly.",confirmButtonColor:"#0aad0a"})};return o.jsx("div",{children:e?o.jsx("div",{className:"loader-container d-flex justify-content-center align-items-center",style:{minHeight:"60vh"},children:o.jsx(Vs,{visible:!0,height:"100",width:"100",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperClassName:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#0aad0a"})}):o.jsxs(o.Fragment,{children:[o.jsx(Ti,{}),o.jsx("section",{className:"my-lg-14 my-8",children:o.jsx("div",{className:"container",children:o.jsx("div",{className:"row",children:o.jsxs("div",{className:"offset-lg-2 col-lg-8 col-12",children:[o.jsxs("div",{className:"mb-8",children:[o.jsx("h1",{className:"h3",children:"Become a Delivery Partner"}),o.jsx("p",{className:"lead mb-0",children:"Want to deliver with us? Fill out the form below, and our team will review your application."})]}),o.jsxs("form",{className:"row",onSubmit:n,children:[o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["First Name",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",className:"form-control",placeholder:"Enter Your First Name",required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Last Name",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",className:"form-control",placeholder:"Enter Your Last Name",required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Email",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"email",className:"form-control",placeholder:"Your Email",required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Phone",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"tel",className:"form-control",placeholder:"Your Phone Number",required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsx("label",{className:"form-label",children:"Vehicle Type"}),o.jsx("input",{type:"text",className:"form-control",placeholder:"Bike, Scooter, Car, Van, etc."})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Vehicle Registration Number",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",className:"form-control",placeholder:"e.g., DL01AB1234",required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Driving License Number",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"text",className:"form-control",placeholder:"Enter DL Number",required:!0})]}),o.jsxs("div",{className:"col-md-6 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Upload Driving License",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"file",className:"form-control",accept:".pdf,.jpg,.jpeg,.png",required:!0})]}),o.jsxs("div",{className:"col-md-12 mb-3",children:[o.jsxs("label",{className:"form-label",children:["Upload ID Proof",o.jsx("span",{className:"text-danger",children:"*"})]}),o.jsx("input",{type:"file",className:"form-control",accept:".pdf,.jpg,.jpeg,.png",required:!0})]}),o.jsxs("div",{className:"col-md-12 mb-3",children:[o.jsx("label",{className:"form-label",children:"Additional Information"}),o.jsx("textarea",{rows:3,className:"form-control",placeholder:"Any additional comments or availability notes"})]}),o.jsx("div",{className:"col-md-12",children:o.jsx("button",{type:"submit",className:"btn btn-primary",children:"Submit"})})]})]})})})})]})})},UI=()=>typeof window>"u"?!1:new URLSearchParams(window.location.search).get("inapp")==="true",HI=()=>{const[e,t]=j.useState(!1);return j.useEffect(()=>{const n=UI();t(n)},[]),o.jsx("div",{children:o.jsxs(mC,{children:[!e&&o.jsx(e3,{}),o.jsxs(oC,{children:[o.jsx(Ot,{path:"/",element:o.jsx(eI,{})}),o.jsx(Ot,{path:"/Shop",element:o.jsx(oI,{})}),o.jsx(Ot,{path:"/product/:id",element:o.jsx(bI,{})}),o.jsx(Ot,{path:"/OrderCheckout",element:o.jsx(fI,{})}),o.jsx(Ot,{path:"/MyAccount",element:o.jsx(pI,{})}),o.jsx(Ot,{path:"/brand",element:o.jsx(_I,{})}),o.jsx(Ot,{path:"/MyAccountOrder",element:o.jsx(mI,{})}),o.jsx(Ot,{path:"/MyAccountAddress",element:o.jsx(gI,{})}),o.jsx(Ot,{path:"/otp-verification",element:o.jsx(yI,{})}),o.jsx(Ot,{path:"/become-a-seller",element:o.jsx(BI,{})}),o.jsx(Ot,{path:"/become-a-delivery-partner",element:o.jsx(FI,{})}),o.jsx(Ot,{path:"/delete-account",element:o.jsx(xI,{})}),o.jsx(Ot,{path:"/contact-us",element:o.jsx(tI,{})}),o.jsx(Ot,{path:"/:pageSlug",element:o.jsx(SI,{})})]}),!e&&o.jsx(t3,{})]})})};Nf.createRoot(document.getElementById("root")).render(o.jsx(wn.StrictMode,{children:o.jsxs(X5,{children:[" ",o.jsx(XP,{children:o.jsx(JP,{children:o.jsx(HI,{})})})]})}));
//# sourceMappingURL=index-Be6JGd3T.js.map
