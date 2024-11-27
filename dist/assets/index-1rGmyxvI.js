(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function sl(t,e){const n=new Set(t.split(","));return r=>n.has(r)}const Me={},Qr=[],Ut=()=>{},q_=()=>!1,Jo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),il=t=>t.startsWith("onUpdate:"),tt=Object.assign,ol=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},H_=Object.prototype.hasOwnProperty,Ae=(t,e)=>H_.call(t,e),le=Array.isArray,Xr=t=>Zo(t)==="[object Map]",_f=t=>Zo(t)==="[object Set]",fe=t=>typeof t=="function",Ze=t=>typeof t=="string",Cr=t=>typeof t=="symbol",Ue=t=>t!==null&&typeof t=="object",yf=t=>(Ue(t)||fe(t))&&fe(t.then)&&fe(t.catch),vf=Object.prototype.toString,Zo=t=>vf.call(t),z_=t=>Zo(t).slice(8,-1),Ef=t=>Zo(t)==="[object Object]",al=t=>Ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ys=sl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ea=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},K_=/-(\w)/g,on=ea(t=>t.replace(K_,(e,n)=>n?n.toUpperCase():"")),W_=/\B([A-Z])/g,ps=ea(t=>t.replace(W_,"-$1").toLowerCase()),ta=ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qa=ea(t=>t?`on${ta(t)}`:""),Xn=(t,e)=>!Object.is(t,e),mo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},wf=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},vc=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ah;const Tf=()=>ah||(ah=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hi(t){if(le(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ze(r)?Y_(r):hi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ze(t)||Ue(t))return t}const G_=/;(?![^(]*\))/g,Q_=/:([^]+)/,X_=/\/\*[^]*?\*\//g;function Y_(t){const e={};return t.replace(X_,"").split(G_).forEach(n=>{if(n){const r=n.split(Q_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function na(t){let e="";if(Ze(t))e=t;else if(le(t))for(let n=0;n<t.length;n++){const r=na(t[n]);r&&(e+=r+" ")}else if(Ue(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const J_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Z_=sl(J_);function If(t){return!!t||t===""}const Wr=t=>Ze(t)?t:t==null?"":le(t)||Ue(t)&&(t.toString===vf||!fe(t.toString))?JSON.stringify(t,Af,2):String(t),Af=(t,e)=>e&&e.__v_isRef?Af(t,e.value):Xr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Xa(r,i)+" =>"]=s,n),{})}:_f(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xa(n))}:Cr(e)?Xa(e):Ue(e)&&!le(e)&&!Ef(e)?String(e):e,Xa=(t,e="")=>{var n;return Cr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xt;class ey{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xt,!e&&xt&&(this.index=(xt.scopes||(xt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=xt;try{return xt=this,e()}finally{xt=n}}}on(){xt=this}off(){xt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function ty(t,e=xt){e&&e.active&&e.effects.push(t)}function bf(){return xt}function ny(t){xt&&xt.cleanups.push(t)}let gr;class cl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,ty(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,tr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(ry(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),nr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=zn,n=gr;try{return zn=!0,gr=this,this._runnings++,ch(this),this.fn()}finally{lh(this),this._runnings--,gr=n,zn=e}}stop(){this.active&&(ch(this),lh(this),this.onStop&&this.onStop(),this.active=!1)}}function ry(t){return t.value}function ch(t){t._trackId++,t._depsLength=0}function lh(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Rf(t.deps[e],t);t.deps.length=t._depsLength}}function Rf(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let zn=!0,Ec=0;const Pf=[];function tr(){Pf.push(zn),zn=!1}function nr(){const t=Pf.pop();zn=t===void 0?!0:t}function ll(){Ec++}function ul(){for(Ec--;!Ec&&wc.length;)wc.shift()()}function Sf(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Rf(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const wc=[];function Cf(t,e,n){ll();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&wc.push(r.scheduler)))}ul()}const kf=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},Tc=new WeakMap,_r=Symbol(""),Ic=Symbol("");function Rt(t,e,n){if(zn&&gr){let r=Tc.get(t);r||Tc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=kf(()=>r.delete(n))),Sf(gr,s)}}function _n(t,e,n,r,s,i){const o=Tc.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&le(t)){const l=Number(r);o.forEach((h,f)=>{(f==="length"||!Cr(f)&&f>=l)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":le(t)?al(n)&&c.push(o.get("length")):(c.push(o.get(_r)),Xr(t)&&c.push(o.get(Ic)));break;case"delete":le(t)||(c.push(o.get(_r)),Xr(t)&&c.push(o.get(Ic)));break;case"set":Xr(t)&&c.push(o.get(_r));break}ll();for(const l of c)l&&Cf(l,4);ul()}const sy=sl("__proto__,__v_isRef,__isVue"),xf=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cr)),uh=iy();function iy(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=Se(this);for(let i=0,o=this.length;i<o;i++)Rt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(Se)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){tr(),ll();const r=Se(this)[e].apply(this,n);return ul(),nr(),r}}),t}function oy(t){Cr(t)||(t=String(t));const e=Se(this);return Rt(e,"has",t),e.hasOwnProperty(t)}class Of{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?vy:Mf:i?Vf:Df).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=le(e);if(!s){if(o&&Ae(uh,n))return Reflect.get(uh,n,r);if(n==="hasOwnProperty")return oy}const c=Reflect.get(e,n,r);return(Cr(n)?xf.has(n):sy(n))||(s||Rt(e,"get",n),i)?c:Pt(c)?o&&al(n)?c:c.value:Ue(c)?s?Lf(c):ms(c):c}}class Nf extends Of{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=di(i);if(!xo(r)&&!di(r)&&(i=Se(i),r=Se(r)),!le(e)&&Pt(i)&&!Pt(r))return l?!1:(i.value=r,!0)}const o=le(e)&&al(n)?Number(n)<e.length:Ae(e,n),c=Reflect.set(e,n,r,s);return e===Se(s)&&(o?Xn(r,i)&&_n(e,"set",n,r):_n(e,"add",n,r)),c}deleteProperty(e,n){const r=Ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Cr(n)||!xf.has(n))&&Rt(e,"has",n),r}ownKeys(e){return Rt(e,"iterate",le(e)?"length":_r),Reflect.ownKeys(e)}}class ay extends Of{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const cy=new Nf,ly=new ay,uy=new Nf(!0);const hl=t=>t,ra=t=>Reflect.getPrototypeOf(t);function to(t,e,n=!1,r=!1){t=t.__v_raw;const s=Se(t),i=Se(e);n||(Xn(e,i)&&Rt(s,"get",e),Rt(s,"get",i));const{has:o}=ra(s),c=r?hl:n?pl:fi;if(o.call(s,e))return c(t.get(e));if(o.call(s,i))return c(t.get(i));t!==s&&t.get(e)}function no(t,e=!1){const n=this.__v_raw,r=Se(n),s=Se(t);return e||(Xn(t,s)&&Rt(r,"has",t),Rt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ro(t,e=!1){return t=t.__v_raw,!e&&Rt(Se(t),"iterate",_r),Reflect.get(t,"size",t)}function hh(t){t=Se(t);const e=Se(this);return ra(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function dh(t,e){e=Se(e);const n=Se(this),{has:r,get:s}=ra(n);let i=r.call(n,t);i||(t=Se(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Xn(e,o)&&_n(n,"set",t,e):_n(n,"add",t,e),this}function fh(t){const e=Se(this),{has:n,get:r}=ra(e);let s=n.call(e,t);s||(t=Se(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&_n(e,"delete",t,void 0),i}function ph(){const t=Se(this),e=t.size!==0,n=t.clear();return e&&_n(t,"clear",void 0,void 0),n}function so(t,e){return function(r,s){const i=this,o=i.__v_raw,c=Se(o),l=e?hl:t?pl:fi;return!t&&Rt(c,"iterate",_r),o.forEach((h,f)=>r.call(s,l(h),l(f),i))}}function io(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=Xr(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?hl:e?pl:fi;return!e&&Rt(i,"iterate",l?Ic:_r),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:c?[f(p[0]),f(p[1])]:f(p),done:g}},[Symbol.iterator](){return this}}}}function Cn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function hy(){const t={get(i){return to(this,i)},get size(){return ro(this)},has:no,add:hh,set:dh,delete:fh,clear:ph,forEach:so(!1,!1)},e={get(i){return to(this,i,!1,!0)},get size(){return ro(this)},has:no,add:hh,set:dh,delete:fh,clear:ph,forEach:so(!1,!0)},n={get(i){return to(this,i,!0)},get size(){return ro(this,!0)},has(i){return no.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:so(!0,!1)},r={get(i){return to(this,i,!0,!0)},get size(){return ro(this,!0)},has(i){return no.call(this,i,!0)},add:Cn("add"),set:Cn("set"),delete:Cn("delete"),clear:Cn("clear"),forEach:so(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=io(i,!1,!1),n[i]=io(i,!0,!1),e[i]=io(i,!1,!0),r[i]=io(i,!0,!0)}),[t,n,e,r]}const[dy,fy,py,my]=hy();function dl(t,e){const n=e?t?my:py:t?fy:dy;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ae(n,s)&&s in r?n:r,s,i)}const gy={get:dl(!1,!1)},_y={get:dl(!1,!0)},yy={get:dl(!0,!1)};const Df=new WeakMap,Vf=new WeakMap,Mf=new WeakMap,vy=new WeakMap;function Ey(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function wy(t){return t.__v_skip||!Object.isExtensible(t)?0:Ey(z_(t))}function ms(t){return di(t)?t:fl(t,!1,cy,gy,Df)}function Ty(t){return fl(t,!1,uy,_y,Vf)}function Lf(t){return fl(t,!0,ly,yy,Mf)}function fl(t,e,n,r,s){if(!Ue(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=wy(t);if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Js(t){return di(t)?Js(t.__v_raw):!!(t&&t.__v_isReactive)}function di(t){return!!(t&&t.__v_isReadonly)}function xo(t){return!!(t&&t.__v_isShallow)}function Uf(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Iy(t){return Object.isExtensible(t)&&wf(t,"__v_skip",!0),t}const fi=t=>Ue(t)?ms(t):t,pl=t=>Ue(t)?Lf(t):t;class Ff{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new cl(()=>e(this._value),()=>go(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=Se(this);return(!e._cacheable||e.effect.dirty)&&Xn(e._value,e._value=e.effect.run())&&go(e,4),Bf(e),e.effect._dirtyLevel>=2&&go(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Ay(t,e,n=!1){let r,s;const i=fe(t);return i?(r=t,s=Ut):(r=t.get,s=t.set),new Ff(r,s,i||!s,n)}function Bf(t){var e;zn&&gr&&(t=Se(t),Sf(gr,(e=t.dep)!=null?e:t.dep=kf(()=>t.dep=void 0,t instanceof Ff?t:void 0)))}function go(t,e=4,n){t=Se(t);const r=t.dep;r&&Cf(r,e)}function Pt(t){return!!(t&&t.__v_isRef===!0)}function Qe(t){return $f(t,!1)}function by(t){return $f(t,!0)}function $f(t,e){return Pt(t)?t:new Ry(t,e)}class Ry{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:Se(e),this._value=n?e:fi(e)}get value(){return Bf(this),this._value}set value(e){const n=this.__v_isShallow||xo(e)||di(e);e=n?e:Se(e),Xn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:fi(e),go(this,4))}}function Yr(t){return Pt(t)?t.value:t}const Py={get:(t,e,n)=>Yr(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Pt(s)&&!Pt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function jf(t){return Js(t)?t:new Proxy(t,Py)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Kn(t,e,n,r){try{return r?t(...r):t()}catch(s){sa(s,e,n)}}function zt(t,e,n,r){if(fe(t)){const s=Kn(t,e,n,r);return s&&yf(s)&&s.catch(i=>{sa(i,e,n)}),s}if(le(t)){const s=[];for(let i=0;i<t.length;i++)s.push(zt(t[i],e,n,r));return s}}function sa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const h=i.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,o,c)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){tr(),Kn(l,null,10,[t,o,c]),nr();return}}Sy(t,n,s,r)}function Sy(t,e,n,r=!0){console.error(t)}let pi=!1,Ac=!1;const pt=[];let Yt=0;const Jr=[];let Nn=null,fr=0;const qf=Promise.resolve();let ml=null;function Hf(t){const e=ml||qf;return t?e.then(this?t.bind(this):t):e}function Cy(t){let e=Yt+1,n=pt.length;for(;e<n;){const r=e+n>>>1,s=pt[r],i=mi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function gl(t){(!pt.length||!pt.includes(t,pi&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?pt.push(t):pt.splice(Cy(t.id),0,t),zf())}function zf(){!pi&&!Ac&&(Ac=!0,ml=qf.then(Wf))}function ky(t){const e=pt.indexOf(t);e>Yt&&pt.splice(e,1)}function xy(t){le(t)?Jr.push(...t):(!Nn||!Nn.includes(t,t.allowRecurse?fr+1:fr))&&Jr.push(t),zf()}function mh(t,e,n=pi?Yt+1:0){for(;n<pt.length;n++){const r=pt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;pt.splice(n,1),n--,r()}}}function Kf(t){if(Jr.length){const e=[...new Set(Jr)].sort((n,r)=>mi(n)-mi(r));if(Jr.length=0,Nn){Nn.push(...e);return}for(Nn=e,fr=0;fr<Nn.length;fr++)Nn[fr]();Nn=null,fr=0}}const mi=t=>t.id==null?1/0:t.id,Oy=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Wf(t){Ac=!1,pi=!0,pt.sort(Oy);try{for(Yt=0;Yt<pt.length;Yt++){const e=pt[Yt];e&&e.active!==!1&&Kn(e,null,14)}}finally{Yt=0,pt.length=0,Kf(),pi=!1,ml=null,(pt.length||Jr.length)&&Wf()}}function Ny(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Me;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=r[f]||Me;g&&(s=n.map(w=>Ze(w)?w.trim():w)),p&&(s=n.map(vc))}let c,l=r[c=Qa(e)]||r[c=Qa(on(e))];!l&&i&&(l=r[c=Qa(ps(e))]),l&&zt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,zt(h,t,6,s)}}function Gf(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!fe(t)){const l=h=>{const f=Gf(h,e,!0);f&&(c=!0,tt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ue(t)&&r.set(t,null),null):(le(i)?i.forEach(l=>o[l]=null):tt(o,i),Ue(t)&&r.set(t,o),o)}function ia(t,e){return!t||!Jo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ae(t,e[0].toLowerCase()+e.slice(1))||Ae(t,ps(e))||Ae(t,e))}let bt=null,oa=null;function Oo(t){const e=bt;return bt=t,oa=t&&t.type.__scopeId||null,e}function gs(t){oa=t}function _s(){oa=null}function Tt(t,e=bt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Rh(-1);const i=Oo(e);let o;try{o=t(...s)}finally{Oo(i),r._d&&Rh(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Ya(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:g,setupState:w,ctx:S,inheritAttrs:O}=t,x=Oo(t);let j,$;try{if(n.shapeFlag&4){const Y=s||r,me=Y;j=Xt(h.call(me,Y,f,p,w,g,S)),$=c}else{const Y=e;j=Xt(Y.length>1?Y(p,{attrs:c,slots:o,emit:l}):Y(p,null)),$=e.props?c:Dy(c)}}catch(Y){ni.length=0,sa(Y,t,1),j=ye(Er)}let H=j;if($&&O!==!1){const Y=Object.keys($),{shapeFlag:me}=H;Y.length&&me&7&&(i&&Y.some(il)&&($=Vy($,i)),H=rs(H,$,!1,!0))}return n.dirs&&(H=rs(H,null,!1,!0),H.dirs=H.dirs?H.dirs.concat(n.dirs):n.dirs),n.transition&&(H.transition=n.transition),j=H,Oo(x),j}const Dy=t=>{let e;for(const n in t)(n==="class"||n==="style"||Jo(n))&&((e||(e={}))[n]=t[n]);return e},Vy=(t,e)=>{const n={};for(const r in t)(!il(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function My(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?gh(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const g=f[p];if(o[g]!==r[g]&&!ia(h,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?gh(r,o,h):!0:!!o;return!1}function gh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!ia(n,i))return!0}return!1}function Ly({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const Qf="components";function Ye(t,e){return Fy(Qf,t,!0,e)||t}const Uy=Symbol.for("v-ndc");function Fy(t,e,n=!0,r=!1){const s=bt||mt;if(s){const i=s.type;if(t===Qf){const c=Ov(i,!1);if(c&&(c===e||c===on(e)||c===ta(on(e))))return i}const o=_h(s[t]||i[t],e)||_h(s.appContext[t],e);return!o&&r?i:o}}function _h(t,e){return t&&(t[e]||t[on(e)]||t[ta(on(e))])}const By=t=>t.__isSuspense;function $y(t,e){e&&e.pendingBranch?le(t)?e.effects.push(...t):e.effects.push(t):xy(t)}const jy=Symbol.for("v-scx"),qy=()=>Kt(jy),oo={};function Zs(t,e,n){return Xf(t,e,n)}function Xf(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:c}=Me){if(e&&i){const J=e;e=(...I)=>{J(...I),me()}}const l=mt,h=J=>r===!0?J:pr(J,r===!1?1:void 0);let f,p=!1,g=!1;if(Pt(t)?(f=()=>t.value,p=xo(t)):Js(t)?(f=()=>h(t),p=!0):le(t)?(g=!0,p=t.some(J=>Js(J)||xo(J)),f=()=>t.map(J=>{if(Pt(J))return J.value;if(Js(J))return h(J);if(fe(J))return Kn(J,l,2)})):fe(t)?e?f=()=>Kn(t,l,2):f=()=>(w&&w(),zt(t,l,3,[S])):f=Ut,e&&r){const J=f;f=()=>pr(J())}let w,S=J=>{w=H.onStop=()=>{Kn(J,l,4),w=H.onStop=void 0}},O;if(la)if(S=Ut,e?n&&zt(e,l,3,[f(),g?[]:void 0,S]):f(),s==="sync"){const J=qy();O=J.__watcherHandles||(J.__watcherHandles=[])}else return Ut;let x=g?new Array(t.length).fill(oo):oo;const j=()=>{if(!(!H.active||!H.dirty))if(e){const J=H.run();(r||p||(g?J.some((I,_)=>Xn(I,x[_])):Xn(J,x)))&&(w&&w(),zt(e,l,3,[J,x===oo?void 0:g&&x[0]===oo?[]:x,S]),x=J)}else H.run()};j.allowRecurse=!!e;let $;s==="sync"?$=j:s==="post"?$=()=>It(j,l&&l.suspense):(j.pre=!0,l&&(j.id=l.uid),$=()=>gl(j));const H=new cl(f,Ut,$),Y=bf(),me=()=>{H.stop(),Y&&ol(Y.effects,H)};return e?n?j():x=H.run():s==="post"?It(H.run.bind(H),l&&l.suspense):H.run(),O&&O.push(me),me}function Hy(t,e,n){const r=this.proxy,s=Ze(t)?t.includes(".")?Yf(r,t):()=>r[t]:t.bind(r,r);let i;fe(e)?i=e:(i=e.handler,n=e);const o=Pi(this),c=Xf(s,i.bind(r),n);return o(),c}function Yf(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function pr(t,e=1/0,n){if(e<=0||!Ue(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Pt(t))pr(t.value,e,n);else if(le(t))for(let r=0;r<t.length;r++)pr(t[r],e,n);else if(_f(t)||Xr(t))t.forEach(r=>{pr(r,e,n)});else if(Ef(t))for(const r in t)pr(t[r],e,n);return t}function jn(t,e){if(bt===null)return t;const n=ua(bt)||bt.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Me]=e[s];i&&(fe(i)&&(i={mounted:i,updated:i}),i.deep&&pr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function ur(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(tr(),zt(l,n,8,[t.el,c,t,e]),nr())}}/*! #__NO_SIDE_EFFECTS__ */function Jf(t,e){return fe(t)?tt({name:t.name},e,{setup:t}):t}const _o=t=>!!t.type.__asyncLoader,Zf=t=>t.type.__isKeepAlive;function zy(t,e){ep(t,"a",e)}function Ky(t,e){ep(t,"da",e)}function ep(t,e,n=mt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(aa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Zf(s.parent.vnode)&&Wy(r,e,n,s),s=s.parent}}function Wy(t,e,n,r){const s=aa(e,t,r,!0);np(()=>{ol(r[e],s)},n)}function aa(t,e,n=mt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;tr();const c=Pi(n),l=zt(e,n,t,o);return c(),nr(),l});return r?s.unshift(i):s.push(i),i}}const An=t=>(e,n=mt)=>(!la||t==="sp")&&aa(t,(...r)=>e(...r),n),Gy=An("bm"),tp=An("m"),Qy=An("bu"),Xy=An("u"),Yy=An("bum"),np=An("um"),Jy=An("sp"),Zy=An("rtg"),ev=An("rtc");function tv(t,e=mt){aa("ec",t,e)}function rp(t,e,n,r){let s;const i=n;if(le(t)||Ze(t)){s=new Array(t.length);for(let o=0,c=t.length;o<c;o++)s[o]=e(t[o],o,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i)}else if(Ue(t))if(t[Symbol.iterator])s=Array.from(t,(o,c)=>e(o,c,void 0,i));else{const o=Object.keys(t);s=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const h=o[c];s[c]=e(t[h],h,c,i)}}else s=[];return s}const bc=t=>t?yp(t)?ua(t)||t.proxy:bc(t.parent):null,ei=tt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>bc(t.parent),$root:t=>bc(t.root),$emit:t=>t.emit,$options:t=>_l(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,gl(t.update)}),$nextTick:t=>t.n||(t.n=Hf.bind(t.proxy)),$watch:t=>Hy.bind(t)}),Ja=(t,e)=>t!==Me&&!t.__isScriptSetup&&Ae(t,e),nv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;let h;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ja(r,e))return o[e]=1,r[e];if(s!==Me&&Ae(s,e))return o[e]=2,s[e];if((h=t.propsOptions[0])&&Ae(h,e))return o[e]=3,i[e];if(n!==Me&&Ae(n,e))return o[e]=4,n[e];Rc&&(o[e]=0)}}const f=ei[e];let p,g;if(f)return e==="$attrs"&&Rt(t.attrs,"get",""),f(t);if((p=c.__cssModules)&&(p=p[e]))return p;if(n!==Me&&Ae(n,e))return o[e]=4,n[e];if(g=l.config.globalProperties,Ae(g,e))return g[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ja(s,e)?(s[e]=n,!0):r!==Me&&Ae(r,e)?(r[e]=n,!0):Ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let c;return!!n[o]||t!==Me&&Ae(t,o)||Ja(e,o)||(c=i[0])&&Ae(c,o)||Ae(r,o)||Ae(ei,o)||Ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function yh(t){return le(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Rc=!0;function rv(t){const e=_l(t),n=t.proxy,r=t.ctx;Rc=!1,e.beforeCreate&&vh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:g,beforeUpdate:w,updated:S,activated:O,deactivated:x,beforeDestroy:j,beforeUnmount:$,destroyed:H,unmounted:Y,render:me,renderTracked:J,renderTriggered:I,errorCaptured:_,serverPrefetch:E,expose:T,inheritAttrs:b,components:R,directives:v,filters:rt}=e;if(h&&sv(h,r,null),o)for(const Te in o){const Ee=o[Te];fe(Ee)&&(r[Te]=Ee.bind(n))}if(s){const Te=s.call(n,n);Ue(Te)&&(t.data=ms(Te))}if(Rc=!0,i)for(const Te in i){const Ee=i[Te],_t=fe(Ee)?Ee.bind(n,n):fe(Ee.get)?Ee.get.bind(n,n):Ut,Gt=!fe(Ee)&&fe(Ee.set)?Ee.set.bind(n):Ut,St=At({get:_t,set:Gt});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>St.value,set:Fe=>St.value=Fe})}if(c)for(const Te in c)sp(c[Te],r,n,Te);if(l){const Te=fe(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(Ee=>{yo(Ee,Te[Ee])})}f&&vh(f,t,"c");function je(Te,Ee){le(Ee)?Ee.forEach(_t=>Te(_t.bind(n))):Ee&&Te(Ee.bind(n))}if(je(Gy,p),je(tp,g),je(Qy,w),je(Xy,S),je(zy,O),je(Ky,x),je(tv,_),je(ev,J),je(Zy,I),je(Yy,$),je(np,Y),je(Jy,E),le(T))if(T.length){const Te=t.exposed||(t.exposed={});T.forEach(Ee=>{Object.defineProperty(Te,Ee,{get:()=>n[Ee],set:_t=>n[Ee]=_t})})}else t.exposed||(t.exposed={});me&&t.render===Ut&&(t.render=me),b!=null&&(t.inheritAttrs=b),R&&(t.components=R),v&&(t.directives=v)}function sv(t,e,n=Ut){le(t)&&(t=Pc(t));for(const r in t){const s=t[r];let i;Ue(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),Pt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function vh(t,e,n){zt(le(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function sp(t,e,n,r){const s=r.includes(".")?Yf(n,r):()=>n[r];if(Ze(t)){const i=e[t];fe(i)&&Zs(s,i)}else if(fe(t))Zs(s,t.bind(n));else if(Ue(t))if(le(t))t.forEach(i=>sp(i,e,n,r));else{const i=fe(t.handler)?t.handler.bind(n):e[t.handler];fe(i)&&Zs(s,i,t)}}function _l(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>No(l,h,o,!0)),No(l,e,o)),Ue(e)&&i.set(e,l),l}function No(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&No(t,i,n,!0),s&&s.forEach(o=>No(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=iv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const iv={data:Eh,props:wh,emits:wh,methods:Hs,computed:Hs,beforeCreate:wt,created:wt,beforeMount:wt,mounted:wt,beforeUpdate:wt,updated:wt,beforeDestroy:wt,beforeUnmount:wt,destroyed:wt,unmounted:wt,activated:wt,deactivated:wt,errorCaptured:wt,serverPrefetch:wt,components:Hs,directives:Hs,watch:av,provide:Eh,inject:ov};function Eh(t,e){return e?t?function(){return tt(fe(t)?t.call(this,this):t,fe(e)?e.call(this,this):e)}:e:t}function ov(t,e){return Hs(Pc(t),Pc(e))}function Pc(t){if(le(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function wt(t,e){return t?[...new Set([].concat(t,e))]:e}function Hs(t,e){return t?tt(Object.create(null),t,e):e}function wh(t,e){return t?le(t)&&le(e)?[...new Set([...t,...e])]:tt(Object.create(null),yh(t),yh(e??{})):e}function av(t,e){if(!t)return e;if(!e)return t;const n=tt(Object.create(null),t);for(const r in e)n[r]=wt(t[r],e[r]);return n}function ip(){return{app:null,config:{isNativeTag:q_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cv=0;function lv(t,e){return function(r,s=null){fe(r)||(r=tt({},r)),s!=null&&!Ue(s)&&(s=null);const i=ip(),o=new WeakSet;let c=!1;const l=i.app={_uid:cv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Dv,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&fe(h.install)?(o.add(h),h.install(l,...f)):fe(h)&&(o.add(h),h(l,...f))),l},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),l},component(h,f){return f?(i.components[h]=f,l):i.components[h]},directive(h,f){return f?(i.directives[h]=f,l):i.directives[h]},mount(h,f,p){if(!c){const g=ye(r,s);return g.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(g,h):t(g,h,p),c=!0,l._container=h,h.__vue_app__=l,ua(g.component)||g.component.proxy}},unmount(){c&&(t(null,l._container),delete l._container.__vue_app__)},provide(h,f){return i.provides[h]=f,l},runWithContext(h){const f=ti;ti=l;try{return h()}finally{ti=f}}};return l}}let ti=null;function yo(t,e){if(mt){let n=mt.provides;const r=mt.parent&&mt.parent.provides;r===n&&(n=mt.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=mt||bt;if(r||ti){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ti._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&fe(e)?e.call(r&&r.proxy):e}}const op={},ap=()=>Object.create(op),cp=t=>Object.getPrototypeOf(t)===op;function uv(t,e,n,r=!1){const s={},i=ap();t.propsDefaults=Object.create(null),lp(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Ty(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let g=f[p];if(ia(t.emitsOptions,g))continue;const w=e[g];if(l)if(Ae(i,g))w!==i[g]&&(i[g]=w,h=!0);else{const S=on(g);s[S]=Sc(l,c,S,w,t,!1)}else w!==i[g]&&(i[g]=w,h=!0)}}}else{lp(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Ae(e,p)&&((f=ps(p))===p||!Ae(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Sc(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ae(e,p))&&(delete i[p],h=!0)}h&&_n(t.attrs,"set","")}function lp(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ys(l))continue;const h=e[l];let f;s&&Ae(s,f=on(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:ia(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Se(n),h=c||Me;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Sc(s,l,p,h[p],t,!Ae(h,p))}}return o}function Sc(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ae(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&fe(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=Pi(s);r=h[n]=l.call(null,e),f()}}else r=l}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===ps(n))&&(r=!0))}return r}function up(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!fe(t)){const f=p=>{l=!0;const[g,w]=up(p,e,!0);tt(o,g),w&&c.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ue(t)&&r.set(t,Qr),Qr;if(le(i))for(let f=0;f<i.length;f++){const p=on(i[f]);Th(p)&&(o[p]=Me)}else if(i)for(const f in i){const p=on(f);if(Th(p)){const g=i[f],w=o[p]=le(g)||fe(g)?{type:g}:tt({},g);if(w){const S=bh(Boolean,w.type),O=bh(String,w.type);w[0]=S>-1,w[1]=O<0||S<O,(S>-1||Ae(w,"default"))&&c.push(p)}}}const h=[o,c];return Ue(t)&&r.set(t,h),h}function Th(t){return t[0]!=="$"&&!Ys(t)}function Ih(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ah(t,e){return Ih(t)===Ih(e)}function bh(t,e){return le(e)?e.findIndex(n=>Ah(n,t)):fe(e)&&Ah(e,t)?0:-1}const hp=t=>t[0]==="_"||t==="$stable",yl=t=>le(t)?t.map(Xt):[Xt(t)],dv=(t,e,n)=>{if(e._n)return e;const r=Tt((...s)=>yl(e(...s)),n);return r._c=!1,r},dp=(t,e,n)=>{const r=t._ctx;for(const s in t){if(hp(s))continue;const i=t[s];if(fe(i))e[s]=dv(s,i,r);else if(i!=null){const o=yl(i);e[s]=()=>o}}},fp=(t,e)=>{const n=yl(e);t.slots.default=()=>n},fv=(t,e)=>{const n=t.slots=ap();if(t.vnode.shapeFlag&32){const r=e._;r?(tt(n,e),wf(n,"_",r,!0)):dp(e,n)}else e&&fp(t,e)},pv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Me;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:(tt(s,e),!n&&c===1&&delete s._):(i=!e.$stable,dp(e,s)),o=e}else e&&(fp(t,e),o={default:1});if(i)for(const c in s)!hp(c)&&o[c]==null&&delete s[c]};function Cc(t,e,n,r,s=!1){if(le(t)){t.forEach((g,w)=>Cc(g,e&&(le(e)?e[w]:e),n,r,s));return}if(_o(r)&&!s)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Me?c.refs={}:c.refs,p=c.setupState;if(h!=null&&h!==l&&(Ze(h)?(f[h]=null,Ae(p,h)&&(p[h]=null)):Pt(h)&&(h.value=null)),fe(l))Kn(l,c,12,[o,f]);else{const g=Ze(l),w=Pt(l);if(g||w){const S=()=>{if(t.f){const O=g?Ae(p,l)?p[l]:f[l]:l.value;s?le(O)&&ol(O,i):le(O)?O.includes(i)||O.push(i):g?(f[l]=[i],Ae(p,l)&&(p[l]=f[l])):(l.value=[i],t.k&&(f[t.k]=l.value))}else g?(f[l]=o,Ae(p,l)&&(p[l]=o)):w&&(l.value=o,t.k&&(f[t.k]=o))};o?(S.id=-1,It(S,n)):S()}}}const It=$y;function mv(t){return gv(t)}function gv(t,e){const n=Tf();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:g,setScopeId:w=Ut,insertStaticContent:S}=t,O=(y,A,C,D=null,V=null,q=null,G=void 0,B=null,z=!!A.dynamicChildren)=>{if(y===A)return;y&&!Bs(y,A)&&(D=W(y),Fe(y,V,q,!0),y=null),A.patchFlag===-2&&(z=!1,A.dynamicChildren=null);const{type:F,ref:Q,shapeFlag:re}=A;switch(F){case ca:x(y,A,C,D);break;case Er:j(y,A,C,D);break;case vo:y==null&&$(A,C,D,G);break;case Mt:R(y,A,C,D,V,q,G,B,z);break;default:re&1?me(y,A,C,D,V,q,G,B,z):re&6?v(y,A,C,D,V,q,G,B,z):(re&64||re&128)&&F.process(y,A,C,D,V,q,G,B,z,Pe)}Q!=null&&V&&Cc(Q,y&&y.ref,q,A||y,!A)},x=(y,A,C,D)=>{if(y==null)r(A.el=c(A.children),C,D);else{const V=A.el=y.el;A.children!==y.children&&h(V,A.children)}},j=(y,A,C,D)=>{y==null?r(A.el=l(A.children||""),C,D):A.el=y.el},$=(y,A,C,D)=>{[y.el,y.anchor]=S(y.children,A,C,D,y.el,y.anchor)},H=({el:y,anchor:A},C,D)=>{let V;for(;y&&y!==A;)V=g(y),r(y,C,D),y=V;r(A,C,D)},Y=({el:y,anchor:A})=>{let C;for(;y&&y!==A;)C=g(y),s(y),y=C;s(A)},me=(y,A,C,D,V,q,G,B,z)=>{A.type==="svg"?G="svg":A.type==="math"&&(G="mathml"),y==null?J(A,C,D,V,q,G,B,z):E(y,A,V,q,G,B,z)},J=(y,A,C,D,V,q,G,B)=>{let z,F;const{props:Q,shapeFlag:re,transition:te,dirs:ee}=y;if(z=y.el=o(y.type,q,Q&&Q.is,Q),re&8?f(z,y.children):re&16&&_(y.children,z,null,D,V,Za(y,q),G,B),ee&&ur(y,null,D,"created"),I(z,y,y.scopeId,G,D),Q){for(const Ie in Q)Ie!=="value"&&!Ys(Ie)&&i(z,Ie,null,Q[Ie],q,y.children,D,V,X);"value"in Q&&i(z,"value",null,Q.value,q),(F=Q.onVnodeBeforeMount)&&Qt(F,D,y)}ee&&ur(y,null,D,"beforeMount");const ie=_v(V,te);ie&&te.beforeEnter(z),r(z,A,C),((F=Q&&Q.onVnodeMounted)||ie||ee)&&It(()=>{F&&Qt(F,D,y),ie&&te.enter(z),ee&&ur(y,null,D,"mounted")},V)},I=(y,A,C,D,V)=>{if(C&&w(y,C),D)for(let q=0;q<D.length;q++)w(y,D[q]);if(V){let q=V.subTree;if(A===q){const G=V.vnode;I(y,G,G.scopeId,G.slotScopeIds,V.parent)}}},_=(y,A,C,D,V,q,G,B,z=0)=>{for(let F=z;F<y.length;F++){const Q=y[F]=B?Dn(y[F]):Xt(y[F]);O(null,Q,A,C,D,V,q,G,B)}},E=(y,A,C,D,V,q,G)=>{const B=A.el=y.el;let{patchFlag:z,dynamicChildren:F,dirs:Q}=A;z|=y.patchFlag&16;const re=y.props||Me,te=A.props||Me;let ee;if(C&&hr(C,!1),(ee=te.onVnodeBeforeUpdate)&&Qt(ee,C,A,y),Q&&ur(A,y,C,"beforeUpdate"),C&&hr(C,!0),F?T(y.dynamicChildren,F,B,C,D,Za(A,V),q):G||Ee(y,A,B,null,C,D,Za(A,V),q,!1),z>0){if(z&16)b(B,A,re,te,C,D,V);else if(z&2&&re.class!==te.class&&i(B,"class",null,te.class,V),z&4&&i(B,"style",re.style,te.style,V),z&8){const ie=A.dynamicProps;for(let Ie=0;Ie<ie.length;Ie++){const xe=ie[Ie],Ke=re[xe],Ct=te[xe];(Ct!==Ke||xe==="value")&&i(B,xe,Ke,Ct,V,y.children,C,D,X)}}z&1&&y.children!==A.children&&f(B,A.children)}else!G&&F==null&&b(B,A,re,te,C,D,V);((ee=te.onVnodeUpdated)||Q)&&It(()=>{ee&&Qt(ee,C,A,y),Q&&ur(A,y,C,"updated")},D)},T=(y,A,C,D,V,q,G)=>{for(let B=0;B<A.length;B++){const z=y[B],F=A[B],Q=z.el&&(z.type===Mt||!Bs(z,F)||z.shapeFlag&70)?p(z.el):C;O(z,F,Q,null,D,V,q,G,!0)}},b=(y,A,C,D,V,q,G)=>{if(C!==D){if(C!==Me)for(const B in C)!Ys(B)&&!(B in D)&&i(y,B,C[B],null,G,A.children,V,q,X);for(const B in D){if(Ys(B))continue;const z=D[B],F=C[B];z!==F&&B!=="value"&&i(y,B,F,z,G,A.children,V,q,X)}"value"in D&&i(y,"value",C.value,D.value,G)}},R=(y,A,C,D,V,q,G,B,z)=>{const F=A.el=y?y.el:c(""),Q=A.anchor=y?y.anchor:c("");let{patchFlag:re,dynamicChildren:te,slotScopeIds:ee}=A;ee&&(B=B?B.concat(ee):ee),y==null?(r(F,C,D),r(Q,C,D),_(A.children||[],C,Q,V,q,G,B,z)):re>0&&re&64&&te&&y.dynamicChildren?(T(y.dynamicChildren,te,C,V,q,G,B),(A.key!=null||V&&A===V.subTree)&&pp(y,A,!0)):Ee(y,A,C,Q,V,q,G,B,z)},v=(y,A,C,D,V,q,G,B,z)=>{A.slotScopeIds=B,y==null?A.shapeFlag&512?V.ctx.activate(A,C,D,G,z):rt(A,C,D,V,q,G,z):Bt(y,A,z)},rt=(y,A,C,D,V,q,G)=>{const B=y.component=Pv(y,D,V);if(Zf(y)&&(B.ctx.renderer=Pe),Sv(B),B.asyncDep){if(V&&V.registerDep(B,je),!y.el){const z=B.subTree=ye(Er);j(null,z,A,C)}}else je(B,y,A,C,V,q,G)},Bt=(y,A,C)=>{const D=A.component=y.component;if(My(y,A,C))if(D.asyncDep&&!D.asyncResolved){Te(D,A,C);return}else D.next=A,ky(D.update),D.effect.dirty=!0,D.update();else A.el=y.el,D.vnode=A},je=(y,A,C,D,V,q,G)=>{const B=()=>{if(y.isMounted){let{next:Q,bu:re,u:te,parent:ee,vnode:ie}=y;{const Dt=mp(y);if(Dt){Q&&(Q.el=ie.el,Te(y,Q,G)),Dt.asyncDep.then(()=>{y.isUnmounted||B()});return}}let Ie=Q,xe;hr(y,!1),Q?(Q.el=ie.el,Te(y,Q,G)):Q=ie,re&&mo(re),(xe=Q.props&&Q.props.onVnodeBeforeUpdate)&&Qt(xe,ee,Q,ie),hr(y,!0);const Ke=Ya(y),Ct=y.subTree;y.subTree=Ke,O(Ct,Ke,p(Ct.el),W(Ct),y,V,q),Q.el=Ke.el,Ie===null&&Ly(y,Ke.el),te&&It(te,V),(xe=Q.props&&Q.props.onVnodeUpdated)&&It(()=>Qt(xe,ee,Q,ie),V)}else{let Q;const{el:re,props:te}=A,{bm:ee,m:ie,parent:Ie}=y,xe=_o(A);if(hr(y,!1),ee&&mo(ee),!xe&&(Q=te&&te.onVnodeBeforeMount)&&Qt(Q,Ie,A),hr(y,!0),re&&he){const Ke=()=>{y.subTree=Ya(y),he(re,y.subTree,y,V,null)};xe?A.type.__asyncLoader().then(()=>!y.isUnmounted&&Ke()):Ke()}else{const Ke=y.subTree=Ya(y);O(null,Ke,C,D,y,V,q),A.el=Ke.el}if(ie&&It(ie,V),!xe&&(Q=te&&te.onVnodeMounted)){const Ke=A;It(()=>Qt(Q,Ie,Ke),V)}(A.shapeFlag&256||Ie&&_o(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&y.a&&It(y.a,V),y.isMounted=!0,A=C=D=null}},z=y.effect=new cl(B,Ut,()=>gl(F),y.scope),F=y.update=()=>{z.dirty&&z.run()};F.id=y.uid,hr(y,!0),F()},Te=(y,A,C)=>{A.component=y;const D=y.vnode.props;y.vnode=A,y.next=null,hv(y,A.props,D,C),pv(y,A.children,C),tr(),mh(y),nr()},Ee=(y,A,C,D,V,q,G,B,z=!1)=>{const F=y&&y.children,Q=y?y.shapeFlag:0,re=A.children,{patchFlag:te,shapeFlag:ee}=A;if(te>0){if(te&128){Gt(F,re,C,D,V,q,G,B,z);return}else if(te&256){_t(F,re,C,D,V,q,G,B,z);return}}ee&8?(Q&16&&X(F,V,q),re!==F&&f(C,re)):Q&16?ee&16?Gt(F,re,C,D,V,q,G,B,z):X(F,V,q,!0):(Q&8&&f(C,""),ee&16&&_(re,C,D,V,q,G,B,z))},_t=(y,A,C,D,V,q,G,B,z)=>{y=y||Qr,A=A||Qr;const F=y.length,Q=A.length,re=Math.min(F,Q);let te;for(te=0;te<re;te++){const ee=A[te]=z?Dn(A[te]):Xt(A[te]);O(y[te],ee,C,null,V,q,G,B,z)}F>Q?X(y,V,q,!0,!1,re):_(A,C,D,V,q,G,B,z,re)},Gt=(y,A,C,D,V,q,G,B,z)=>{let F=0;const Q=A.length;let re=y.length-1,te=Q-1;for(;F<=re&&F<=te;){const ee=y[F],ie=A[F]=z?Dn(A[F]):Xt(A[F]);if(Bs(ee,ie))O(ee,ie,C,null,V,q,G,B,z);else break;F++}for(;F<=re&&F<=te;){const ee=y[re],ie=A[te]=z?Dn(A[te]):Xt(A[te]);if(Bs(ee,ie))O(ee,ie,C,null,V,q,G,B,z);else break;re--,te--}if(F>re){if(F<=te){const ee=te+1,ie=ee<Q?A[ee].el:D;for(;F<=te;)O(null,A[F]=z?Dn(A[F]):Xt(A[F]),C,ie,V,q,G,B,z),F++}}else if(F>te)for(;F<=re;)Fe(y[F],V,q,!0),F++;else{const ee=F,ie=F,Ie=new Map;for(F=ie;F<=te;F++){const yt=A[F]=z?Dn(A[F]):Xt(A[F]);yt.key!=null&&Ie.set(yt.key,F)}let xe,Ke=0;const Ct=te-ie+1;let Dt=!1,Rs=0;const bn=new Array(Ct);for(F=0;F<Ct;F++)bn[F]=0;for(F=ee;F<=re;F++){const yt=y[F];if(Ke>=Ct){Fe(yt,V,q,!0);continue}let Vt;if(yt.key!=null)Vt=Ie.get(yt.key);else for(xe=ie;xe<=te;xe++)if(bn[xe-ie]===0&&Bs(yt,A[xe])){Vt=xe;break}Vt===void 0?Fe(yt,V,q,!0):(bn[Vt-ie]=F+1,Vt>=Rs?Rs=Vt:Dt=!0,O(yt,A[Vt],C,null,V,q,G,B,z),Ke++)}const Vr=Dt?yv(bn):Qr;for(xe=Vr.length-1,F=Ct-1;F>=0;F--){const yt=ie+F,Vt=A[yt],Mr=yt+1<Q?A[yt+1].el:D;bn[F]===0?O(null,Vt,C,Mr,V,q,G,B,z):Dt&&(xe<0||F!==Vr[xe]?St(Vt,C,Mr,2):xe--)}}},St=(y,A,C,D,V=null)=>{const{el:q,type:G,transition:B,children:z,shapeFlag:F}=y;if(F&6){St(y.component.subTree,A,C,D);return}if(F&128){y.suspense.move(A,C,D);return}if(F&64){G.move(y,A,C,Pe);return}if(G===Mt){r(q,A,C);for(let re=0;re<z.length;re++)St(z[re],A,C,D);r(y.anchor,A,C);return}if(G===vo){H(y,A,C);return}if(D!==2&&F&1&&B)if(D===0)B.beforeEnter(q),r(q,A,C),It(()=>B.enter(q),V);else{const{leave:re,delayLeave:te,afterLeave:ee}=B,ie=()=>r(q,A,C),Ie=()=>{re(q,()=>{ie(),ee&&ee()})};te?te(q,ie,Ie):Ie()}else r(q,A,C)},Fe=(y,A,C,D=!1,V=!1)=>{const{type:q,props:G,ref:B,children:z,dynamicChildren:F,shapeFlag:Q,patchFlag:re,dirs:te}=y;if(B!=null&&Cc(B,null,C,y,!0),Q&256){A.ctx.deactivate(y);return}const ee=Q&1&&te,ie=!_o(y);let Ie;if(ie&&(Ie=G&&G.onVnodeBeforeUnmount)&&Qt(Ie,A,y),Q&6)N(y.component,C,D);else{if(Q&128){y.suspense.unmount(C,D);return}ee&&ur(y,null,A,"beforeUnmount"),Q&64?y.type.remove(y,A,C,V,Pe,D):F&&(q!==Mt||re>0&&re&64)?X(F,A,C,!1,!0):(q===Mt&&re&384||!V&&Q&16)&&X(z,A,C),D&&Be(y)}(ie&&(Ie=G&&G.onVnodeUnmounted)||ee)&&It(()=>{Ie&&Qt(Ie,A,y),ee&&ur(y,null,A,"unmounted")},C)},Be=y=>{const{type:A,el:C,anchor:D,transition:V}=y;if(A===Mt){Bi(C,D);return}if(A===vo){Y(y);return}const q=()=>{s(C),V&&!V.persisted&&V.afterLeave&&V.afterLeave()};if(y.shapeFlag&1&&V&&!V.persisted){const{leave:G,delayLeave:B}=V,z=()=>G(C,q);B?B(y.el,q,z):z()}else q()},Bi=(y,A)=>{let C;for(;y!==A;)C=g(y),s(y),y=C;s(A)},N=(y,A,C)=>{const{bum:D,scope:V,update:q,subTree:G,um:B}=y;D&&mo(D),V.stop(),q&&(q.active=!1,Fe(G,y,A,C)),B&&It(B,A),It(()=>{y.isUnmounted=!0},A),A&&A.pendingBranch&&!A.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===A.pendingId&&(A.deps--,A.deps===0&&A.resolve())},X=(y,A,C,D=!1,V=!1,q=0)=>{for(let G=q;G<y.length;G++)Fe(y[G],A,C,D,V)},W=y=>y.shapeFlag&6?W(y.component.subTree):y.shapeFlag&128?y.suspense.next():g(y.anchor||y.el);let ne=!1;const Ce=(y,A,C)=>{y==null?A._vnode&&Fe(A._vnode,null,null,!0):O(A._vnode||null,y,A,null,null,null,C),ne||(ne=!0,mh(),Kf(),ne=!1),A._vnode=y},Pe={p:O,um:Fe,m:St,r:Be,mt:rt,mc:_,pc:Ee,pbc:T,n:W,o:t};let pe,he;return{render:Ce,hydrate:pe,createApp:lv(Ce,pe)}}function Za({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function hr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _v(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function pp(t,e,n=!1){const r=t.children,s=e.children;if(le(r)&&le(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Dn(s[i]),c.el=o.el),n||pp(o,c)),c.type===ca&&(c.el=o.el)}}function yv(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function mp(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:mp(e)}const vv=t=>t.__isTeleport,Mt=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Er=Symbol.for("v-cmt"),vo=Symbol.for("v-stc"),ni=[];let qt=null;function ge(t=!1){ni.push(qt=t?null:[])}function Ev(){ni.pop(),qt=ni[ni.length-1]||null}let gi=1;function Rh(t){gi+=t}function gp(t){return t.dynamicChildren=gi>0?qt||Qr:null,Ev(),gi>0&&qt&&qt.push(t),t}function ke(t,e,n,r,s,i){return gp(M(t,e,n,r,s,i,!0))}function fn(t,e,n,r,s){return gp(ye(t,e,n,r,s,!0))}function kc(t){return t?t.__v_isVNode===!0:!1}function Bs(t,e){return t.type===e.type&&t.key===e.key}const _p=({key:t})=>t??null,Eo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ze(t)||Pt(t)||fe(t)?{i:bt,r:t,k:e,f:!!n}:t:null);function M(t,e=null,n=null,r=0,s=null,i=t===Mt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&_p(e),ref:e&&Eo(e),scopeId:oa,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return c?(vl(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ze(n)?8:16),gi>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const ye=wv;function wv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===Uy)&&(t=Er),kc(t)){const c=rs(t,e,!0);return n&&vl(c,n),gi>0&&!i&&qt&&(c.shapeFlag&6?qt[qt.indexOf(t)]=c:qt.push(c)),c.patchFlag|=-2,c}if(Nv(t)&&(t=t.__vccOpts),e){e=Tv(e);let{class:c,style:l}=e;c&&!Ze(c)&&(e.class=na(c)),Ue(l)&&(Uf(l)&&!le(l)&&(l=tt({},l)),e.style=hi(l))}const o=Ze(t)?1:By(t)?128:vv(t)?64:Ue(t)?4:fe(t)?2:0;return M(t,e,n,r,s,o,i,!0)}function Tv(t){return t?Uf(t)||cp(t)?tt({},t):t:null}function rs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?Av(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&_p(h),ref:e&&e.ref?n&&i?le(i)?i.concat(Eo(e)):[i,Eo(e)]:Eo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Mt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&rs(t.ssContent),ssFallback:t.ssFallback&&rs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&(f.transition=l.clone(f)),f}function jt(t=" ",e=0){return ye(ca,null,t,e)}function Iv(t,e){const n=ye(vo,null,t);return n.staticCount=e,n}function Ot(t="",e=!1){return e?(ge(),fn(Er,null,t)):ye(Er,null,t)}function Xt(t){return t==null||typeof t=="boolean"?ye(Er):le(t)?ye(Mt,null,t.slice()):typeof t=="object"?Dn(t):ye(ca,null,String(t))}function Dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:rs(t)}function vl(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(le(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),vl(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!cp(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else fe(e)?(e={default:e,_ctx:bt},n=32):(e=String(e),r&64?(n=16,e=[jt(e)]):n=8);t.children=e,t.shapeFlag|=n}function Av(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=na([e.class,r.class]));else if(s==="style")e.style=hi([e.style,r.style]);else if(Jo(s)){const i=e[s],o=r[s];o&&i!==o&&!(le(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Qt(t,e,n,r=null){zt(t,e,7,[n,r])}const bv=ip();let Rv=0;function Pv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||bv,i={uid:Rv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ey(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:up(r,s),emitsOptions:Gf(r,s),emit:null,emitted:null,propsDefaults:Me,inheritAttrs:r.inheritAttrs,ctx:Me,data:Me,props:Me,attrs:Me,slots:Me,refs:Me,setupState:Me,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=Ny.bind(null,i),t.ce&&t.ce(i),i}let mt=null,Do,xc;{const t=Tf(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Do=e("__VUE_INSTANCE_SETTERS__",n=>mt=n),xc=e("__VUE_SSR_SETTERS__",n=>la=n)}const Pi=t=>{const e=mt;return Do(t),t.scope.on(),()=>{t.scope.off(),Do(e)}},Ph=()=>{mt&&mt.scope.off(),Do(null)};function yp(t){return t.vnode.shapeFlag&4}let la=!1;function Sv(t,e=!1){e&&xc(e);const{props:n,children:r}=t.vnode,s=yp(t);uv(t,n,s,e),fv(t,r);const i=s?Cv(t,e):void 0;return e&&xc(!1),i}function Cv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,nv);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?xv(t):null,i=Pi(t);tr();const o=Kn(r,t,0,[t.props,s]);if(nr(),i(),yf(o)){if(o.then(Ph,Ph),e)return o.then(c=>{Sh(t,c,e)}).catch(c=>{sa(c,t,0)});t.asyncDep=o}else Sh(t,o,e)}else vp(t,e)}function Sh(t,e,n){fe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ue(e)&&(t.setupState=jf(e)),vp(t,n)}let Ch;function vp(t,e,n){const r=t.type;if(!t.render){if(!e&&Ch&&!r.render){const s=r.template||_l(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:l}=r,h=tt(tt({isCustomElement:i,delimiters:c},o),l);r.render=Ch(s,h)}}t.render=r.render||Ut}{const s=Pi(t);tr();try{rv(t)}finally{nr(),s()}}}const kv={get(t,e){return Rt(t,"get",""),t[e]}};function xv(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,kv),slots:t.slots,emit:t.emit,expose:e}}function ua(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(jf(Iy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ei)return ei[n](t)},has(e,n){return n in e||n in ei}}))}function Ov(t,e=!0){return fe(t)?t.displayName||t.name:t.name||e&&t.__name}function Nv(t){return fe(t)&&"__vccOpts"in t}const At=(t,e)=>Ay(t,e,la);function Ep(t,e,n){const r=arguments.length;return r===2?Ue(e)&&!le(e)?kc(e)?ye(t,null,[e]):ye(t,e):ye(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kc(n)&&(n=[n]),ye(t,e,n))}const Dv="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const Vv="http://www.w3.org/2000/svg",Mv="http://www.w3.org/1998/Math/MathML",Vn=typeof document<"u"?document:null,kh=Vn&&Vn.createElement("template"),Lv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Vn.createElementNS(Vv,t):e==="mathml"?Vn.createElementNS(Mv,t):Vn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Vn.createTextNode(t),createComment:t=>Vn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Vn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{kh.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const c=kh.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Uv=Symbol("_vtc");function Fv(t,e,n){const r=t[Uv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const xh=Symbol("_vod"),Bv=Symbol("_vsh"),$v=Symbol(""),jv=/(^|;)\s*display\s*:/;function qv(t,e,n){const r=t.style,s=Ze(n);let i=!1;if(n&&!s){if(e)if(Ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&wo(r,c,"")}else for(const o in e)n[o]==null&&wo(r,o,"");for(const o in n)o==="display"&&(i=!0),wo(r,o,n[o])}else if(s){if(e!==n){const o=r[$v];o&&(n+=";"+o),r.cssText=n,i=jv.test(n)}}else e&&t.removeAttribute("style");xh in t&&(t[xh]=i?r.display:"",t[Bv]&&(r.display="none"))}const Oh=/\s*!important$/;function wo(t,e,n){if(le(n))n.forEach(r=>wo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Hv(t,e);Oh.test(n)?t.setProperty(ps(r),n.replace(Oh,""),"important"):t[r]=n}}const Nh=["Webkit","Moz","ms"],ec={};function Hv(t,e){const n=ec[e];if(n)return n;let r=on(e);if(r!=="filter"&&r in t)return ec[e]=r;r=ta(r);for(let s=0;s<Nh.length;s++){const i=Nh[s]+r;if(i in t)return ec[e]=i}return e}const Dh="http://www.w3.org/1999/xlink";function zv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Dh,e.slice(6,e.length)):t.setAttributeNS(Dh,e,n);else{const i=Z_(e);n==null||i&&!If(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Kv(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const c=t.tagName;if(e==="value"&&c!=="PROGRESS"&&!c.includes("-")){const h=c==="OPTION"?t.getAttribute("value")||"":t.value,f=n??"";(h!==f||!("_value"in t))&&(t.value=f),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const h=typeof t[e];h==="boolean"?n=If(n):n==null&&h==="string"?(n="",l=!0):h==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function jr(t,e,n,r){t.addEventListener(e,n,r)}function Wv(t,e,n,r){t.removeEventListener(e,n,r)}const Vh=Symbol("_vei");function Gv(t,e,n,r,s=null){const i=t[Vh]||(t[Vh]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Qv(e);if(r){const h=i[e]=Jv(r,s);jr(t,c,h,l)}else o&&(Wv(t,c,o,l),i[e]=void 0)}}const Mh=/(?:Once|Passive|Capture)$/;function Qv(t){let e;if(Mh.test(t)){e={};let r;for(;r=t.match(Mh);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ps(t.slice(2)),e]}let tc=0;const Xv=Promise.resolve(),Yv=()=>tc||(Xv.then(()=>tc=0),tc=Date.now());function Jv(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;zt(Zv(r,n.value),e,5,[r])};return n.value=t,n.attached=Yv(),n}function Zv(t,e){if(le(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Lh=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,eE=(t,e,n,r,s,i,o,c,l)=>{const h=s==="svg";e==="class"?Fv(t,r,h):e==="style"?qv(t,n,r):Jo(e)?il(e)||Gv(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tE(t,e,r,h))?Kv(t,e,r,i,o,c,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zv(t,e,r,h))};function tE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Lh(e)&&fe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Lh(e)&&Ze(n)?!1:e in t}const Uh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return le(e)?n=>mo(e,n):e};function nE(t){t.target.composing=!0}function Fh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const nc=Symbol("_assign"),qn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[nc]=Uh(s);const i=r||s.props&&s.props.type==="number";jr(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),i&&(c=vc(c)),t[nc](c)}),n&&jr(t,"change",()=>{t.value=t.value.trim()}),e||(jr(t,"compositionstart",nE),jr(t,"compositionend",Fh),jr(t,"change",Fh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[nc]=Uh(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?vc(t.value):t.value,c=e??"";o!==c&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===c)||(t.value=c))}},rE=["ctrl","shift","alt","meta"],sE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>rE.some(n=>t[`${n}Key`]&&!e.includes(n))},El=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const c=sE[e[o]];if(c&&c(s,e))return}return t(s,...i)})},iE=tt({patchProp:eE},Lv);let Bh;function oE(){return Bh||(Bh=mv(iE))}const aE=(...t)=>{const e=oE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lE(r);if(!s)return;const i=e._component;!fe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,cE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function cE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lE(t){return Ze(t)?document.querySelector(t):t}const ln=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},uE={};function hE(t,e){const n=Ye("router-view");return ge(),fn(n)}const dE=ln(uE,[["render",hE]]);/*!
  * vue-router v4.0.13
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const wp=typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol",ys=t=>wp?Symbol(t):"_vr_"+t,fE=ys("rvlm"),$h=ys("rvd"),ha=ys("r"),wl=ys("rl"),Oc=ys("rvl"),qr=typeof window<"u";function pE(t){return t.__esModule||wp&&t[Symbol.toStringTag]==="Module"}const Ne=Object.assign;function rc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Array.isArray(s)?s.map(t):t(s)}return n}const ri=()=>{},mE=/\/$/,gE=t=>t.replace(mE,"");function sc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("?"),l=e.indexOf("#",c>-1?c:0);return c>-1&&(r=e.slice(0,c),i=e.slice(c+1,l>-1?l:e.length),s=t(i)),l>-1&&(r=r||e.slice(0,l),o=e.slice(l,e.length)),r=EE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function _E(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function jh(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function yE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&ss(e.matched[r],n.matched[s])&&Tp(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function ss(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Tp(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!vE(t[n],e[n]))return!1;return!0}function vE(t,e){return Array.isArray(t)?qh(t,e):Array.isArray(e)?qh(e,t):t===e}function qh(t,e){return Array.isArray(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function EE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/");let s=n.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],!(s===1||o==="."))if(o==="..")s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(si||(si={}));function wE(t){if(!t)if(qr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),gE(t)}const TE=/^[^#]+#/;function IE(t,e){return t.replace(TE,"#")+e}function AE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const da=()=>({left:window.pageXOffset,top:window.pageYOffset});function bE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=AE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Hh(t,e){return(history.state?history.state.position-e:-1)+t}const Nc=new Map;function RE(t,e){Nc.set(t,e)}function PE(t){const e=Nc.get(t);return Nc.delete(t),e}let SE=()=>location.protocol+"//"+location.host;function Ip(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let c=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(c);return l[0]!=="/"&&(l="/"+l),jh(l,"")}return jh(n,t)+r+s}function CE(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const w=Ip(t,location),S=n.value,O=e.value;let x=0;if(g){if(n.value=w,e.value=g,o&&o===S){o=null;return}x=O?g.position-O.position:0}else r(w);s.forEach(j=>{j(n.value,S,{delta:x,type:_i.pop,direction:x?x>0?si.forward:si.back:si.unknown})})};function l(){o=n.value}function h(g){s.push(g);const w=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(w),w}function f(){const{history:g}=window;g.state&&g.replaceState(Ne({},g.state,{scroll:da()}),"")}function p(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",c),window.addEventListener("beforeunload",f),{pauseListeners:l,listen:h,destroy:p}}function zh(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?da():null}}function kE(t){const{history:e,location:n}=window,r={value:Ip(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),g=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:SE()+t+l;try{e[f?"replaceState":"pushState"](h,"",g),s.value=h}catch(w){console.error(w),n[f?"replace":"assign"](g)}}function o(l,h){const f=Ne({},e.state,zh(s.value.back,l,s.value.forward,!0),h,{position:s.value.position});i(l,f,!0),r.value=l}function c(l,h){const f=Ne({},s.value,e.state,{forward:l,scroll:da()});i(f.current,f,!0);const p=Ne({},zh(r.value,l,null),{position:f.position+1},h);i(l,p,!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function xE(t){t=wE(t);const e=kE(t),n=CE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ne({location:"",base:t,go:r,createHref:IE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function OE(t){return typeof t=="string"||t&&typeof t=="object"}function Ap(t){return typeof t=="string"||typeof t=="symbol"}const kn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},bp=ys("nf");var Kh;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Kh||(Kh={}));function is(t,e){return Ne(new Error,{type:t,[bp]:!0},e)}function xn(t,e){return t instanceof Error&&bp in t&&(e==null||!!(t.type&e))}const Wh="[^/]+?",NE={sensitive:!1,strict:!1,start:!0,end:!0},DE=/[.+*?^${}()[\]/\\]/g;function VE(t,e){const n=Ne({},NE,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[90];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const g=h[p];let w=40+(n.sensitive?.25:0);if(g.type===0)p||(s+="/"),s+=g.value.replace(DE,"\\$&"),w+=40;else if(g.type===1){const{value:S,repeatable:O,optional:x,regexp:j}=g;i.push({name:S,repeatable:O,optional:x});const $=j||Wh;if($!==Wh){w+=10;try{new RegExp(`(${$})`)}catch(Y){throw new Error(`Invalid custom RegExp for param "${S}" (${$}): `+Y.message)}}let H=O?`((?:${$})(?:/(?:${$}))*)`:`(${$})`;p||(H=x&&h.length<2?`(?:/${H})`:"/"+H),x&&(H+="?"),s+=H,w+=20,x&&(w+=-8),O&&(w+=-20),$===".*"&&(w+=-50)}f.push(w)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let g=1;g<f.length;g++){const w=f[g]||"",S=i[g-1];p[S.name]=w&&S.repeatable?w.split("/"):w}return p}function l(h){let f="",p=!1;for(const g of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const w of g)if(w.type===0)f+=w.value;else if(w.type===1){const{value:S,repeatable:O,optional:x}=w,j=S in h?h[S]:"";if(Array.isArray(j)&&!O)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const $=Array.isArray(j)?j.join("/"):j;if(!$)if(x)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=$}}return f}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ME(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function LE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ME(r[n],s[n]);if(i)return i;n++}return s.length-r.length}const UE={type:0,value:""},FE=/[a-zA-Z0-9_]/;function BE(t){if(!t)return[[]];if(t==="/")return[[UE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(w){throw new Error(`ERR (${n})/"${h}": ${w}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===0?i.push({type:0,value:h}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function g(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(h&&p(),o()):l===":"?(p(),n=1):g();break;case 4:g(),n=r;break;case 1:l==="("?n=2:FE.test(l)?g():(p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case 2:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=3:f+=l;break;case 3:p(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}function $E(t,e,n){const r=VE(BE(t.path),n),s=Ne(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function jE(t,e){const n=[],r=new Map;e=Qh({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,p,g){const w=!g,S=HE(f);S.aliasOf=g&&g.record;const O=Qh(e,f),x=[S];if("alias"in f){const H=typeof f.alias=="string"?[f.alias]:f.alias;for(const Y of H)x.push(Ne({},S,{components:g?g.record.components:S.components,path:Y,aliasOf:g?g.record:S}))}let j,$;for(const H of x){const{path:Y}=H;if(p&&Y[0]!=="/"){const me=p.record.path,J=me[me.length-1]==="/"?"":"/";H.path=p.record.path+(Y&&J+Y)}if(j=$E(H,p,O),g?g.alias.push(j):($=$||j,$!==j&&$.alias.push(j),w&&f.name&&!Gh(j)&&o(f.name)),"children"in S){const me=S.children;for(let J=0;J<me.length;J++)i(me[J],j,g&&g.children[J])}g=g||j,l(j)}return $?()=>{o($)}:ri}function o(f){if(Ap(f)){const p=r.get(f);p&&(r.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function c(){return n}function l(f){let p=0;for(;p<n.length&&LE(f,n[p])>=0&&(f.record.path!==n[p].record.path||!Rp(f,n[p]));)p++;n.splice(p,0,f),f.record.name&&!Gh(f)&&r.set(f.record.name,f)}function h(f,p){let g,w={},S,O;if("name"in f&&f.name){if(g=r.get(f.name),!g)throw is(1,{location:f});O=g.record.name,w=Ne(qE(p.params,g.keys.filter($=>!$.optional).map($=>$.name)),f.params),S=g.stringify(w)}else if("path"in f)S=f.path,g=n.find($=>$.re.test(S)),g&&(w=g.parse(S),O=g.record.name);else{if(g=p.name?r.get(p.name):n.find($=>$.re.test(p.path)),!g)throw is(1,{location:f,currentLocation:p});O=g.record.name,w=Ne({},p.params,f.params),S=g.stringify(w)}const x=[];let j=g;for(;j;)x.unshift(j.record),j=j.parent;return{name:O,path:S,params:w,matched:x,meta:KE(x)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:h,removeRoute:o,getRoutes:c,getRecordMatcher:s}}function qE(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function HE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||{}:{default:t.component}}}function zE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="boolean"?n:n[r];return e}function Gh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KE(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function Qh(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Rp(t,e){return e.children.some(n=>n===t||Rp(t,n))}const Pp=/#/g,WE=/&/g,GE=/\//g,QE=/=/g,XE=/\?/g,Sp=/\+/g,YE=/%5B/g,JE=/%5D/g,Cp=/%5E/g,ZE=/%60/g,kp=/%7B/g,ew=/%7C/g,xp=/%7D/g,tw=/%20/g;function Tl(t){return encodeURI(""+t).replace(ew,"|").replace(YE,"[").replace(JE,"]")}function nw(t){return Tl(t).replace(kp,"{").replace(xp,"}").replace(Cp,"^")}function Dc(t){return Tl(t).replace(Sp,"%2B").replace(tw,"+").replace(Pp,"%23").replace(WE,"%26").replace(ZE,"`").replace(kp,"{").replace(xp,"}").replace(Cp,"^")}function rw(t){return Dc(t).replace(QE,"%3D")}function sw(t){return Tl(t).replace(Pp,"%23").replace(XE,"%3F")}function iw(t){return t==null?"":sw(t).replace(GE,"%2F")}function Vo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ow(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Sp," "),o=i.indexOf("="),c=Vo(o<0?i:i.slice(0,o)),l=o<0?null:Vo(i.slice(o+1));if(c in e){let h=e[c];Array.isArray(h)||(h=e[c]=[h]),h.push(l)}else e[c]=l}return e}function Xh(t){let e="";for(let n in t){const r=t[n];if(n=rw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Array.isArray(r)?r.map(i=>i&&Dc(i)):[r&&Dc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function aw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Array.isArray(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}function $s(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t,reset:n}}function Mn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,c)=>{const l=p=>{p===!1?c(is(4,{from:n,to:e})):p instanceof Error?c(p):OE(p)?c(is(2,{from:e,to:p})):(i&&r.enterCallbacks[s]===i&&typeof p=="function"&&i.push(p),o())},h=t.call(r&&r.instances[s],e,n,l);let f=Promise.resolve(h);t.length<3&&(f=f.then(l)),f.catch(p=>c(p))})}function ic(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let c=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(cw(c)){const h=(c.__vccOpts||c)[e];h&&s.push(Mn(h,n,r,i,o))}else{let l=c();s.push(()=>l.then(h=>{if(!h)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=pE(h)?h.default:h;i.components[o]=f;const g=(f.__vccOpts||f)[e];return g&&Mn(g,n,r,i,o)()}))}}return s}function cw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Yh(t){const e=Kt(ha),n=Kt(wl),r=At(()=>e.resolve(Yr(t.to))),s=At(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const g=p.findIndex(ss.bind(null,f));if(g>-1)return g;const w=Jh(l[h-2]);return h>1&&Jh(f)===w&&p[p.length-1].path!==w?p.findIndex(ss.bind(null,l[h-2])):g}),i=At(()=>s.value>-1&&dw(n.params,r.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&Tp(n.params,r.value.params));function c(l={}){return hw(l)?e[Yr(t.replace)?"replace":"push"](Yr(t.to)).catch(ri):Promise.resolve()}return{route:r,href:At(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}const lw=Jf({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Yh,setup(t,{slots:e}){const n=ms(Yh(t)),{options:r}=Kt(ha),s=At(()=>({[Zh(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Zh(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ep("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),uw=lw;function hw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function dw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Array.isArray(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Jh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Zh=(t,e,n)=>t??e??n,fw=Jf({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(t,{attrs:e,slots:n}){const r=Kt(Oc),s=At(()=>t.route||r.value),i=Kt($h,0),o=At(()=>s.value.matched[i]);yo($h,i+1),yo(fE,o),yo(Oc,s);const c=Qe();return Zs(()=>[c.value,o.value,t.name],([l,h,f],[p,g,w])=>{h&&(h.instances[f]=l,g&&g!==h&&l&&l===p&&(h.leaveGuards.size||(h.leaveGuards=g.leaveGuards),h.updateGuards.size||(h.updateGuards=g.updateGuards))),l&&h&&(!g||!ss(h,g)||!p)&&(h.enterCallbacks[f]||[]).forEach(S=>S(l))},{flush:"post"}),()=>{const l=s.value,h=o.value,f=h&&h.components[t.name],p=t.name;if(!f)return ed(n.default,{Component:f,route:l});const g=h.props[t.name],w=g?g===!0?l.params:typeof g=="function"?g(l):g:null,O=Ep(f,Ne({},w,e,{onVnodeUnmounted:x=>{x.component.isUnmounted&&(h.instances[p]=null)},ref:c}));return ed(n.default,{Component:O,route:l})||O}}});function ed(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const pw=fw;function mw(t){const e=jE(t.routes,t),n=t.parseQuery||ow,r=t.stringifyQuery||Xh,s=t.history,i=$s(),o=$s(),c=$s(),l=by(kn);let h=kn;qr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=rc.bind(null,N=>""+N),p=rc.bind(null,iw),g=rc.bind(null,Vo);function w(N,X){let W,ne;return Ap(N)?(W=e.getRecordMatcher(N),ne=X):ne=N,e.addRoute(ne,W)}function S(N){const X=e.getRecordMatcher(N);X&&e.removeRoute(X)}function O(){return e.getRoutes().map(N=>N.record)}function x(N){return!!e.getRecordMatcher(N)}function j(N,X){if(X=Ne({},X||l.value),typeof N=="string"){const he=sc(n,N,X.path),y=e.resolve({path:he.path},X),A=s.createHref(he.fullPath);return Ne(he,y,{params:g(y.params),hash:Vo(he.hash),redirectedFrom:void 0,href:A})}let W;if("path"in N)W=Ne({},N,{path:sc(n,N.path,X.path).path});else{const he=Ne({},N.params);for(const y in he)he[y]==null&&delete he[y];W=Ne({},N,{params:p(N.params)}),X.params=p(X.params)}const ne=e.resolve(W,X),Ce=N.hash||"";ne.params=f(g(ne.params));const Pe=_E(r,Ne({},N,{hash:nw(Ce),path:ne.path})),pe=s.createHref(Pe);return Ne({fullPath:Pe,hash:Ce,query:r===Xh?aw(N.query):N.query||{}},ne,{redirectedFrom:void 0,href:pe})}function $(N){return typeof N=="string"?sc(n,N,l.value.path):Ne({},N)}function H(N,X){if(h!==N)return is(8,{from:X,to:N})}function Y(N){return I(N)}function me(N){return Y(Ne($(N),{replace:!0}))}function J(N){const X=N.matched[N.matched.length-1];if(X&&X.redirect){const{redirect:W}=X;let ne=typeof W=="function"?W(N):W;return typeof ne=="string"&&(ne=ne.includes("?")||ne.includes("#")?ne=$(ne):{path:ne},ne.params={}),Ne({query:N.query,hash:N.hash,params:N.params},ne)}}function I(N,X){const W=h=j(N),ne=l.value,Ce=N.state,Pe=N.force,pe=N.replace===!0,he=J(W);if(he)return I(Ne($(he),{state:Ce,force:Pe,replace:pe}),X||W);const y=W;y.redirectedFrom=X;let A;return!Pe&&yE(r,ne,W)&&(A=is(16,{to:y,from:ne}),Gt(ne,ne,!0,!1)),(A?Promise.resolve(A):E(y,ne)).catch(C=>xn(C)?xn(C,2)?C:_t(C):Te(C,y,ne)).then(C=>{if(C){if(xn(C,2))return I(Ne($(C.to),{state:Ce,force:Pe,replace:pe}),X||y)}else C=b(y,ne,!0,pe,Ce);return T(y,ne,C),C})}function _(N,X){const W=H(N,X);return W?Promise.reject(W):Promise.resolve()}function E(N,X){let W;const[ne,Ce,Pe]=gw(N,X);W=ic(ne.reverse(),"beforeRouteLeave",N,X);for(const he of ne)he.leaveGuards.forEach(y=>{W.push(Mn(y,N,X))});const pe=_.bind(null,N,X);return W.push(pe),$r(W).then(()=>{W=[];for(const he of i.list())W.push(Mn(he,N,X));return W.push(pe),$r(W)}).then(()=>{W=ic(Ce,"beforeRouteUpdate",N,X);for(const he of Ce)he.updateGuards.forEach(y=>{W.push(Mn(y,N,X))});return W.push(pe),$r(W)}).then(()=>{W=[];for(const he of N.matched)if(he.beforeEnter&&!X.matched.includes(he))if(Array.isArray(he.beforeEnter))for(const y of he.beforeEnter)W.push(Mn(y,N,X));else W.push(Mn(he.beforeEnter,N,X));return W.push(pe),$r(W)}).then(()=>(N.matched.forEach(he=>he.enterCallbacks={}),W=ic(Pe,"beforeRouteEnter",N,X),W.push(pe),$r(W))).then(()=>{W=[];for(const he of o.list())W.push(Mn(he,N,X));return W.push(pe),$r(W)}).catch(he=>xn(he,8)?he:Promise.reject(he))}function T(N,X,W){for(const ne of c.list())ne(N,X,W)}function b(N,X,W,ne,Ce){const Pe=H(N,X);if(Pe)return Pe;const pe=X===kn,he=qr?history.state:{};W&&(ne||pe?s.replace(N.fullPath,Ne({scroll:pe&&he&&he.scroll},Ce)):s.push(N.fullPath,Ce)),l.value=N,Gt(N,X,W,pe),_t()}let R;function v(){R=s.listen((N,X,W)=>{const ne=j(N),Ce=J(ne);if(Ce){I(Ne(Ce,{replace:!0}),ne).catch(ri);return}h=ne;const Pe=l.value;qr&&RE(Hh(Pe.fullPath,W.delta),da()),E(ne,Pe).catch(pe=>xn(pe,12)?pe:xn(pe,2)?(I(pe.to,ne).then(he=>{xn(he,20)&&!W.delta&&W.type===_i.pop&&s.go(-1,!1)}).catch(ri),Promise.reject()):(W.delta&&s.go(-W.delta,!1),Te(pe,ne,Pe))).then(pe=>{pe=pe||b(ne,Pe,!1),pe&&(W.delta?s.go(-W.delta,!1):W.type===_i.pop&&xn(pe,20)&&s.go(-1,!1)),T(ne,Pe,pe)}).catch(ri)})}let rt=$s(),Bt=$s(),je;function Te(N,X,W){_t(N);const ne=Bt.list();return ne.length?ne.forEach(Ce=>Ce(N,X,W)):console.error(N),Promise.reject(N)}function Ee(){return je&&l.value!==kn?Promise.resolve():new Promise((N,X)=>{rt.add([N,X])})}function _t(N){return je||(je=!N,v(),rt.list().forEach(([X,W])=>N?W(N):X()),rt.reset()),N}function Gt(N,X,W,ne){const{scrollBehavior:Ce}=t;if(!qr||!Ce)return Promise.resolve();const Pe=!W&&PE(Hh(N.fullPath,0))||(ne||!W)&&history.state&&history.state.scroll||null;return Hf().then(()=>Ce(N,X,Pe)).then(pe=>pe&&bE(pe)).catch(pe=>Te(pe,N,X))}const St=N=>s.go(N);let Fe;const Be=new Set;return{currentRoute:l,addRoute:w,removeRoute:S,hasRoute:x,getRoutes:O,resolve:j,options:t,push:Y,replace:me,go:St,back:()=>St(-1),forward:()=>St(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Bt.add,isReady:Ee,install(N){const X=this;N.component("RouterLink",uw),N.component("RouterView",pw),N.config.globalProperties.$router=X,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>Yr(l)}),qr&&!Fe&&l.value===kn&&(Fe=!0,Y(s.location).catch(Ce=>{}));const W={};for(const Ce in kn)W[Ce]=At(()=>l.value[Ce]);N.provide(ha,X),N.provide(wl,ms(W)),N.provide(Oc,l);const ne=N.unmount;Be.add(N),N.unmount=function(){Be.delete(N),Be.size<1&&(h=kn,R&&R(),l.value=kn,Fe=!1,je=!1),ne()}}}}function $r(t){return t.reduce((e,n)=>e.then(()=>n()),Promise.resolve())}function gw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>ss(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>ss(h,l))||s.push(l))}return[n,r,s]}function fa(){return Kt(ha)}function _w(){return Kt(wl)}var td={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},yw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let g=(c&15)<<2|h>>6,w=h&63;l||(w=64,o||(g=64)),r.push(n[f],n[p],n[g],n[w])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Op(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):yw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new vw;const g=i<<2|c>>4;if(r.push(g),h!==64){const w=c<<4&240|h>>2;if(r.push(w),p!==64){const S=h<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class vw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(t){const e=Op(t);return Np.encodeByteArray(e,!0)},Mo=function(t){return Ew(t).replace(/\./g,"")},Dp=function(t){try{return Np.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=()=>ww().__FIREBASE_DEFAULTS__,Iw=()=>{if(typeof process>"u"||typeof td>"u")return;const t=td.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Aw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Dp(t[1]);return e&&JSON.parse(e)},pa=()=>{try{return Tw()||Iw()||Aw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Vp=t=>{var e,n;return(n=(e=pa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Mp=t=>{const e=Vp(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Lp=()=>{var t;return(t=pa())===null||t===void 0?void 0:t.config},Up=t=>{var e;return(e=pa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bw{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mo(JSON.stringify(n)),Mo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ct())}function Pw(){var t;const e=(t=pa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Sw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Cw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kw(){const t=ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function xw(){return!Pw()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Ow(){try{return typeof indexedDB=="object"}catch{return!1}}function Nw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw="FirebaseError";class un extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dw,Object.setPrototypeOf(this,un.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Si.prototype.create)}}class Si{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Vw(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new un(s,c,r)}}function Vw(t,e){return t.replace(Mw,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mw=/\{\$([^}]+)}/g;function Lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Lo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(nd(i)&&nd(o)){if(!Lo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function nd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function Uw(t,e){const n=new Fw(t,e);return n.subscribe.bind(n)}class Fw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Bw(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=oc),s.error===void 0&&(s.error=oc),s.complete===void 0&&(s.complete=oc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Bw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function oc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(t){return t&&t._delegate?t._delegate:t}class Yn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new bw;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qw(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:jw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jw(t){return t===dr?void 0:t}function qw(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $w(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const zw={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Kw=ve.INFO,Ww={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Gw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Ww[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Il{constructor(e){this.name=e,this._logLevel=Kw,this._logHandler=Gw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?zw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const Qw=(t,e)=>e.some(n=>t instanceof n);let rd,sd;function Xw(){return rd||(rd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yw(){return sd||(sd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bp=new WeakMap,Vc=new WeakMap,$p=new WeakMap,ac=new WeakMap,Al=new WeakMap;function Jw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bp.set(n,t)}).catch(()=>{}),Al.set(e,t),e}function Zw(t){if(Vc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vc.set(t,e)}let Mc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||$p.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eT(t){Mc=t(Mc)}function tT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cc(this),e,...n);return $p.set(r,e.sort?e.sort():[e]),Wn(r)}:Yw().includes(t)?function(...e){return t.apply(cc(this),e),Wn(Bp.get(this))}:function(...e){return Wn(t.apply(cc(this),e))}}function nT(t){return typeof t=="function"?tT(t):(t instanceof IDBTransaction&&Zw(t),Qw(t,Xw())?new Proxy(t,Mc):t)}function Wn(t){if(t instanceof IDBRequest)return Jw(t);if(ac.has(t))return ac.get(t);const e=nT(t);return e!==t&&(ac.set(t,e),Al.set(e,t)),e}const cc=t=>Al.get(t);function rT(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Wn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Wn(o.result),l.oldVersion,l.newVersion,Wn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const sT=["get","getKey","getAll","getAllKeys","count"],iT=["put","add","delete","clear"],lc=new Map;function id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lc.get(e))return lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=iT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||sT.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return lc.set(e,i),i}eT(t=>({...t,get:(e,n,r)=>id(e,n)||t.get(e,n,r),has:(e,n)=>!!id(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oT{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Lc="@firebase/app",od="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=new Il("@firebase/app"),cT="@firebase/app-compat",lT="@firebase/analytics-compat",uT="@firebase/analytics",hT="@firebase/app-check-compat",dT="@firebase/app-check",fT="@firebase/auth",pT="@firebase/auth-compat",mT="@firebase/database",gT="@firebase/database-compat",_T="@firebase/functions",yT="@firebase/functions-compat",vT="@firebase/installations",ET="@firebase/installations-compat",wT="@firebase/messaging",TT="@firebase/messaging-compat",IT="@firebase/performance",AT="@firebase/performance-compat",bT="@firebase/remote-config",RT="@firebase/remote-config-compat",PT="@firebase/storage",ST="@firebase/storage-compat",CT="@firebase/firestore",kT="@firebase/vertexai-preview",xT="@firebase/firestore-compat",OT="firebase",NT="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="[DEFAULT]",DT={[Lc]:"fire-core",[cT]:"fire-core-compat",[uT]:"fire-analytics",[lT]:"fire-analytics-compat",[dT]:"fire-app-check",[hT]:"fire-app-check-compat",[fT]:"fire-auth",[pT]:"fire-auth-compat",[mT]:"fire-rtdb",[gT]:"fire-rtdb-compat",[_T]:"fire-fn",[yT]:"fire-fn-compat",[vT]:"fire-iid",[ET]:"fire-iid-compat",[wT]:"fire-fcm",[TT]:"fire-fcm-compat",[IT]:"fire-perf",[AT]:"fire-perf-compat",[bT]:"fire-rc",[RT]:"fire-rc-compat",[PT]:"fire-gcs",[ST]:"fire-gcs-compat",[CT]:"fire-fst",[xT]:"fire-fst-compat",[kT]:"fire-vertex","fire-js":"fire-js",[OT]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uo=new Map,VT=new Map,Fc=new Map;function ad(t,e){try{t.container.addComponent(e)}catch(n){wr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(Fc.has(e))return wr.debug(`There were multiple attempts to register component ${e}.`),!1;Fc.set(e,t);for(const n of Uo.values())ad(n,t);for(const n of VT.values())ad(n,t);return!0}function ma(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new Si("app","Firebase",MT);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=NT;function jp(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Gn.create("bad-app-name",{appName:String(s)});if(n||(n=Lp()),!n)throw Gn.create("no-options");const i=Uo.get(s);if(i){if(Lo(n,i.options)&&Lo(r,i.config))return i;throw Gn.create("duplicate-app",{appName:s})}const o=new Hw(s);for(const l of Fc.values())o.addComponent(l);const c=new LT(n,r,o);return Uo.set(s,c),c}function bl(t=Uc){const e=Uo.get(t);if(!e&&t===Uc&&Lp())return jp();if(!e)throw Gn.create("no-app",{appName:t});return e}function en(t,e,n){var r;let s=(r=DT[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),wr.warn(c.join(" "));return}Tr(new Yn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UT="firebase-heartbeat-database",FT=1,yi="firebase-heartbeat-store";let uc=null;function qp(){return uc||(uc=rT(UT,FT,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),uc}async function BT(t){try{const n=(await qp()).transaction(yi),r=await n.objectStore(yi).get(Hp(t));return await n.done,r}catch(e){if(e instanceof un)wr.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});wr.warn(n.message)}}}async function cd(t,e){try{const r=(await qp()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,Hp(t)),await r.done}catch(n){if(n instanceof un)wr.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});wr.warn(r.message)}}}function Hp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T=1024,jT=30*24*60*60*1e3;class qT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ld();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=jT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ld(),{heartbeatsToSend:r,unsentEntries:s}=HT(this._heartbeatsCache.heartbeats),i=Mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ld(){return new Date().toISOString().substring(0,10)}function HT(t,e=$T){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),ud(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ud(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class zT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ow()?Nw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ud(t){return Mo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KT(t){Tr(new Yn("platform-logger",e=>new oT(e),"PRIVATE")),Tr(new Yn("heartbeat",e=>new qT(e),"PRIVATE")),en(Lc,od,t),en(Lc,od,"esm2017"),en("fire-js","")}KT("");var WT="firebase",GT="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en(WT,GT,"app");var hd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yr,zp;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function E(){}E.prototype=_.prototype,I.D=_.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(T,b,R){for(var v=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)v[rt-2]=arguments[rt];return _.prototype[b].apply(T,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,E){E||(E=0);var T=Array(16);if(typeof _=="string")for(var b=0;16>b;++b)T[b]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(b=0;16>b;++b)T[b]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=I.g[0],E=I.g[1],b=I.g[2];var R=I.g[3],v=_+(R^E&(b^R))+T[0]+3614090360&4294967295;_=E+(v<<7&4294967295|v>>>25),v=R+(b^_&(E^b))+T[1]+3905402710&4294967295,R=_+(v<<12&4294967295|v>>>20),v=b+(E^R&(_^E))+T[2]+606105819&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(_^b&(R^_))+T[3]+3250441966&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(R^E&(b^R))+T[4]+4118548399&4294967295,_=E+(v<<7&4294967295|v>>>25),v=R+(b^_&(E^b))+T[5]+1200080426&4294967295,R=_+(v<<12&4294967295|v>>>20),v=b+(E^R&(_^E))+T[6]+2821735955&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(_^b&(R^_))+T[7]+4249261313&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(R^E&(b^R))+T[8]+1770035416&4294967295,_=E+(v<<7&4294967295|v>>>25),v=R+(b^_&(E^b))+T[9]+2336552879&4294967295,R=_+(v<<12&4294967295|v>>>20),v=b+(E^R&(_^E))+T[10]+4294925233&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(_^b&(R^_))+T[11]+2304563134&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(R^E&(b^R))+T[12]+1804603682&4294967295,_=E+(v<<7&4294967295|v>>>25),v=R+(b^_&(E^b))+T[13]+4254626195&4294967295,R=_+(v<<12&4294967295|v>>>20),v=b+(E^R&(_^E))+T[14]+2792965006&4294967295,b=R+(v<<17&4294967295|v>>>15),v=E+(_^b&(R^_))+T[15]+1236535329&4294967295,E=b+(v<<22&4294967295|v>>>10),v=_+(b^R&(E^b))+T[1]+4129170786&4294967295,_=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(_^E))+T[6]+3225465664&4294967295,R=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(R^_))+T[11]+643717713&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^_&(b^R))+T[0]+3921069994&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(b^R&(E^b))+T[5]+3593408605&4294967295,_=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(_^E))+T[10]+38016083&4294967295,R=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(R^_))+T[15]+3634488961&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^_&(b^R))+T[4]+3889429448&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(b^R&(E^b))+T[9]+568446438&4294967295,_=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(_^E))+T[14]+3275163606&4294967295,R=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(R^_))+T[3]+4107603335&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^_&(b^R))+T[8]+1163531501&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(b^R&(E^b))+T[13]+2850285829&4294967295,_=E+(v<<5&4294967295|v>>>27),v=R+(E^b&(_^E))+T[2]+4243563512&4294967295,R=_+(v<<9&4294967295|v>>>23),v=b+(_^E&(R^_))+T[7]+1735328473&4294967295,b=R+(v<<14&4294967295|v>>>18),v=E+(R^_&(b^R))+T[12]+2368359562&4294967295,E=b+(v<<20&4294967295|v>>>12),v=_+(E^b^R)+T[5]+4294588738&4294967295,_=E+(v<<4&4294967295|v>>>28),v=R+(_^E^b)+T[8]+2272392833&4294967295,R=_+(v<<11&4294967295|v>>>21),v=b+(R^_^E)+T[11]+1839030562&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^_)+T[14]+4259657740&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(E^b^R)+T[1]+2763975236&4294967295,_=E+(v<<4&4294967295|v>>>28),v=R+(_^E^b)+T[4]+1272893353&4294967295,R=_+(v<<11&4294967295|v>>>21),v=b+(R^_^E)+T[7]+4139469664&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^_)+T[10]+3200236656&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(E^b^R)+T[13]+681279174&4294967295,_=E+(v<<4&4294967295|v>>>28),v=R+(_^E^b)+T[0]+3936430074&4294967295,R=_+(v<<11&4294967295|v>>>21),v=b+(R^_^E)+T[3]+3572445317&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^_)+T[6]+76029189&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(E^b^R)+T[9]+3654602809&4294967295,_=E+(v<<4&4294967295|v>>>28),v=R+(_^E^b)+T[12]+3873151461&4294967295,R=_+(v<<11&4294967295|v>>>21),v=b+(R^_^E)+T[15]+530742520&4294967295,b=R+(v<<16&4294967295|v>>>16),v=E+(b^R^_)+T[2]+3299628645&4294967295,E=b+(v<<23&4294967295|v>>>9),v=_+(b^(E|~R))+T[0]+4096336452&4294967295,_=E+(v<<6&4294967295|v>>>26),v=R+(E^(_|~b))+T[7]+1126891415&4294967295,R=_+(v<<10&4294967295|v>>>22),v=b+(_^(R|~E))+T[14]+2878612391&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~_))+T[5]+4237533241&4294967295,E=b+(v<<21&4294967295|v>>>11),v=_+(b^(E|~R))+T[12]+1700485571&4294967295,_=E+(v<<6&4294967295|v>>>26),v=R+(E^(_|~b))+T[3]+2399980690&4294967295,R=_+(v<<10&4294967295|v>>>22),v=b+(_^(R|~E))+T[10]+4293915773&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~_))+T[1]+2240044497&4294967295,E=b+(v<<21&4294967295|v>>>11),v=_+(b^(E|~R))+T[8]+1873313359&4294967295,_=E+(v<<6&4294967295|v>>>26),v=R+(E^(_|~b))+T[15]+4264355552&4294967295,R=_+(v<<10&4294967295|v>>>22),v=b+(_^(R|~E))+T[6]+2734768916&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~_))+T[13]+1309151649&4294967295,E=b+(v<<21&4294967295|v>>>11),v=_+(b^(E|~R))+T[4]+4149444226&4294967295,_=E+(v<<6&4294967295|v>>>26),v=R+(E^(_|~b))+T[11]+3174756917&4294967295,R=_+(v<<10&4294967295|v>>>22),v=b+(_^(R|~E))+T[2]+718787259&4294967295,b=R+(v<<15&4294967295|v>>>17),v=E+(R^(b|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(b+(v<<21&4294967295|v>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var E=_-this.blockSize,T=this.B,b=this.h,R=0;R<_;){if(b==0)for(;R<=E;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<_;)if(T[b++]=I.charCodeAt(R++),b==this.blockSize){s(this,T),b=0;break}}else for(;R<_;)if(T[b++]=I[R++],b==this.blockSize){s(this,T),b=0;break}}this.h=b,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var E=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=E&255,E/=256;for(this.u(I),I=Array(16),_=E=0;4>_;++_)for(var T=0;32>T;T+=8)I[E++]=this.g[_]>>>T&255;return I};function i(I,_){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=_(I)}function o(I,_){this.h=_;for(var E=[],T=!0,b=I.length-1;0<=b;b--){var R=I[b]|0;T&&R==_||(E[b]=R,T=!1)}this.g=E}var c={};function l(I){return-128<=I&&128>I?i(I,function(_){return new o([_|0],0>_?-1:0)}):new o([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return x(h(-I));for(var _=[],E=1,T=0;I>=E;T++)_[T]=I/E|0,E*=4294967296;return new o(_,0)}function f(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return x(f(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),T=p,b=0;b<I.length;b+=8){var R=Math.min(8,I.length-b),v=parseInt(I.substring(b,b+R),_);8>R?(R=h(Math.pow(_,R)),T=T.j(R).add(h(v))):(T=T.j(E),T=T.add(h(v)))}return T}var p=l(0),g=l(1),w=l(16777216);t=o.prototype,t.m=function(){if(O(this))return-x(this).m();for(var I=0,_=1,E=0;E<this.g.length;E++){var T=this.i(E);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(O(this))return"-"+x(this).toString(I);for(var _=h(Math.pow(I,6)),E=this,T="";;){var b=Y(E,_).g;E=j(E,b.j(_));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=b,S(E))return R+T;for(;6>R.length;)R="0"+R;T=R+T}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function O(I){return I.h==-1}t.l=function(I){return I=j(this,I),O(I)?-1:S(I)?0:1};function x(I){for(var _=I.g.length,E=[],T=0;T<_;T++)E[T]=~I.g[T];return new o(E,~I.h).add(g)}t.abs=function(){return O(this)?x(this):this},t.add=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0,b=0;b<=_;b++){var R=T+(this.i(b)&65535)+(I.i(b)&65535),v=(R>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);T=v>>>16,R&=65535,v&=65535,E[b]=v<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function j(I,_){return I.add(x(_))}t.j=function(I){if(S(this)||S(I))return p;if(O(this))return O(I)?x(this).j(x(I)):x(x(this).j(I));if(O(I))return x(this.j(x(I)));if(0>this.l(w)&&0>I.l(w))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,E=[],T=0;T<2*_;T++)E[T]=0;for(T=0;T<this.g.length;T++)for(var b=0;b<I.g.length;b++){var R=this.i(T)>>>16,v=this.i(T)&65535,rt=I.i(b)>>>16,Bt=I.i(b)&65535;E[2*T+2*b]+=v*Bt,$(E,2*T+2*b),E[2*T+2*b+1]+=R*Bt,$(E,2*T+2*b+1),E[2*T+2*b+1]+=v*rt,$(E,2*T+2*b+1),E[2*T+2*b+2]+=R*rt,$(E,2*T+2*b+2)}for(T=0;T<_;T++)E[T]=E[2*T+1]<<16|E[2*T];for(T=_;T<2*_;T++)E[T]=0;return new o(E,0)};function $(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function H(I,_){this.g=I,this.h=_}function Y(I,_){if(S(_))throw Error("division by zero");if(S(I))return new H(p,p);if(O(I))return _=Y(x(I),_),new H(x(_.g),x(_.h));if(O(_))return _=Y(I,x(_)),new H(x(_.g),_.h);if(30<I.g.length){if(O(I)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,T=_;0>=T.l(I);)E=me(E),T=me(T);var b=J(E,1),R=J(T,1);for(T=J(T,2),E=J(E,2);!S(T);){var v=R.add(T);0>=v.l(I)&&(b=b.add(E),R=v),T=J(T,1),E=J(E,1)}return _=j(I,b.j(_)),new H(b,_)}for(b=p;0<=I.l(_);){for(E=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(E)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),R=h(E),v=R.j(_);O(v)||0<v.l(I);)E-=T,R=h(E),v=R.j(_);S(R)&&(R=g),b=b.add(R),I=j(I,v)}return new H(b,I)}t.A=function(I){return Y(this,I).h},t.and=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)&I.i(T);return new o(E,this.h&I.h)},t.or=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)|I.i(T);return new o(E,this.h|I.h)},t.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),E=[],T=0;T<_;T++)E[T]=this.i(T)^I.i(T);return new o(E,this.h^I.h)};function me(I){for(var _=I.g.length+1,E=[],T=0;T<_;T++)E[T]=I.i(T)<<1|I.i(T-1)>>>31;return new o(E,I.h)}function J(I,_){var E=_>>5;_%=32;for(var T=I.g.length-E,b=[],R=0;R<T;R++)b[R]=0<_?I.i(R+E)>>>_|I.i(R+E+1)<<32-_:I.i(R+E);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zp=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,yr=o}).apply(typeof hd<"u"?hd:typeof self<"u"?self:typeof window<"u"?window:{});var ao=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Kp,Wp,Ws,Gp,To,Bc,Qp,Xp,Yp;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ao=="object"&&ao];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var P=a[m];if(!(P in d))break e;d=d[P]}a=a[a.length-1],m=d[a],u=u(m),u!=m&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,m=!1,P={next:function(){if(!m&&d<a.length){var k=d++;return{value:u(k,a[k]),done:!1}}return m=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,m),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function g(a,u,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,g.apply(null,arguments)}function w(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,P,k){for(var K=Array(arguments.length-2),Oe=2;Oe<arguments.length;Oe++)K[Oe-2]=arguments[Oe];return u.prototype[P].apply(m,K)}}function O(a){const u=a.length;if(0<u){const d=Array(u);for(let m=0;m<u;m++)d[m]=a[m];return d}return[]}function x(a,u){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(l(m)){const P=a.length||0,k=m.length||0;a.length=P+k;for(let K=0;K<k;K++)a[P+K]=m[K]}else a.push(m)}}class j{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(a){return/^[\s\xa0]*$/.test(a)}function H(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function Y(a){return Y[" "](a),a}Y[" "]=function(){};var me=H().indexOf("Gecko")!=-1&&!(H().toLowerCase().indexOf("webkit")!=-1&&H().indexOf("Edge")==-1)&&!(H().indexOf("Trident")!=-1||H().indexOf("MSIE")!=-1)&&H().indexOf("Edge")==-1;function J(a,u,d){for(const m in a)u.call(d,a[m],m,a)}function I(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function _(a){const u={};for(const d in a)u[d]=a[d];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(a,u){let d,m;for(let P=1;P<arguments.length;P++){m=arguments[P];for(d in m)a[d]=m[d];for(let k=0;k<E.length;k++)d=E[k],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function b(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function R(a){c.setTimeout(()=>{throw a},0)}function v(){var a=_t;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class rt{constructor(){this.h=this.g=null}add(u,d){const m=Bt.get();m.set(u,d),this.h?this.h.next=m:this.g=m,this.h=m}}var Bt=new j(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,Ee=!1,_t=new rt,Gt=()=>{const a=c.Promise.resolve(void 0);Te=()=>{a.then(St)}};var St=()=>{for(var a;a=v();){try{a.h.call(a.g)}catch(d){R(d)}var u=Bt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}Ee=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Be(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Be.prototype.h=function(){this.defaultPrevented=!0};var Bi=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a}();function N(a,u){if(Be.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(me){e:{try{Y(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:X[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&N.aa.h.call(this)}}S(N,Be);var X={2:"touch",3:"pen",4:"mouse"};N.prototype.h=function(){N.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var W="closure_listenable_"+(1e6*Math.random()|0),ne=0;function Ce(a,u,d,m,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!m,this.ha=P,this.key=++ne,this.da=this.fa=!1}function Pe(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,m,P){var k=a.toString();a=this.g[k],a||(a=this.g[k]=[],this.h++);var K=y(a,u,m,P);return-1<K?(u=a[K],d||(u.fa=!1)):(u=new Ce(u,this.src,k,!!m,P),u.fa=d,a.push(u)),u};function he(a,u){var d=u.type;if(d in a.g){var m=a.g[d],P=Array.prototype.indexOf.call(m,u,void 0),k;(k=0<=P)&&Array.prototype.splice.call(m,P,1),k&&(Pe(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function y(a,u,d,m){for(var P=0;P<a.length;++P){var k=a[P];if(!k.da&&k.listener==u&&k.capture==!!d&&k.ha==m)return P}return-1}var A="closure_lm_"+(1e6*Math.random()|0),C={};function D(a,u,d,m,P){if(Array.isArray(u)){for(var k=0;k<u.length;k++)D(a,u[k],d,m,P);return null}return d=te(d),a&&a[W]?a.K(u,d,h(m)?!!m.capture:!!m,P):V(a,u,d,!1,m,P)}function V(a,u,d,m,P,k){if(!u)throw Error("Invalid event type");var K=h(P)?!!P.capture:!!P,Oe=Q(a);if(Oe||(a[A]=Oe=new pe(a)),d=Oe.add(u,d,m,K,k),d.proxy)return d;if(m=q(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)Bi||(P=K),P===void 0&&(P=!1),a.addEventListener(u.toString(),m,P);else if(a.attachEvent)a.attachEvent(z(u.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function q(){function a(d){return u.call(a.src,a.listener,d)}const u=F;return a}function G(a,u,d,m,P){if(Array.isArray(u))for(var k=0;k<u.length;k++)G(a,u[k],d,m,P);else m=h(m)?!!m.capture:!!m,d=te(d),a&&a[W]?(a=a.i,u=String(u).toString(),u in a.g&&(k=a.g[u],d=y(k,d,m,P),-1<d&&(Pe(k[d]),Array.prototype.splice.call(k,d,1),k.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=y(u,d,m,P)),(d=-1<a?u[a]:null)&&B(d))}function B(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[W])he(u.i,a);else{var d=a.type,m=a.proxy;u.removeEventListener?u.removeEventListener(d,m,a.capture):u.detachEvent?u.detachEvent(z(d),m):u.addListener&&u.removeListener&&u.removeListener(m),(d=Q(u))?(he(d,a),d.h==0&&(d.src=null,u[A]=null)):Pe(a)}}}function z(a){return a in C?C[a]:C[a]="on"+a}function F(a,u){if(a.da)a=!0;else{u=new N(u,this);var d=a.listener,m=a.ha||a.src;a.fa&&B(a),a=d.call(m,u)}return a}function Q(a){return a=a[A],a instanceof pe?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function te(a){return typeof a=="function"?a:(a[re]||(a[re]=function(u){return a.handleEvent(u)}),a[re])}function ee(){Fe.call(this),this.i=new pe(this),this.M=this,this.F=null}S(ee,Fe),ee.prototype[W]=!0,ee.prototype.removeEventListener=function(a,u,d,m){G(this,a,u,d,m)};function ie(a,u){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=u.type||u,typeof u=="string")u=new Be(u,a);else if(u instanceof Be)u.target=u.target||a;else{var P=u;u=new Be(m,a),T(u,P)}if(P=!0,d)for(var k=d.length-1;0<=k;k--){var K=u.g=d[k];P=Ie(K,m,!0,u)&&P}if(K=u.g=a,P=Ie(K,m,!0,u)&&P,P=Ie(K,m,!1,u)&&P,d)for(k=0;k<d.length;k++)K=u.g=d[k],P=Ie(K,m,!1,u)&&P}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],m=0;m<d.length;m++)Pe(d[m]);delete a.g[u],a.h--}}this.F=null},ee.prototype.K=function(a,u,d,m){return this.i.add(String(a),u,!1,d,m)},ee.prototype.L=function(a,u,d,m){return this.i.add(String(a),u,!0,d,m)};function Ie(a,u,d,m){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,k=0;k<u.length;++k){var K=u[k];if(K&&!K.da&&K.capture==d){var Oe=K.listener,st=K.ha||K.src;K.fa&&he(a.i,K),P=Oe.call(st,m)!==!1&&P}}return P&&!m.defaultPrevented}function xe(a,u,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ke(a){a.g=xe(()=>{a.g=null,a.i&&(a.i=!1,Ke(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Ct extends Fe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ke(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Dt(a){Fe.call(this),this.h=a,this.g={}}S(Dt,Fe);var Rs=[];function bn(a){J(a.g,function(u,d){this.g.hasOwnProperty(d)&&B(u)},a),a.g={}}Dt.prototype.N=function(){Dt.aa.N.call(this),bn(this)},Dt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Vr=c.JSON.stringify,yt=c.JSON.parse,Vt=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Mr(){}Mr.prototype.h=null;function gu(a){return a.h||(a.h=a.i())}function _u(){}var Ps={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Va(){Be.call(this,"d")}S(Va,Be);function Ma(){Be.call(this,"c")}S(Ma,Be);var or={},yu=null;function $i(){return yu=yu||new ee}or.La="serverreachability";function vu(a){Be.call(this,or.La,a)}S(vu,Be);function Ss(a){const u=$i();ie(u,new vu(u))}or.STAT_EVENT="statevent";function Eu(a,u){Be.call(this,or.STAT_EVENT,a),this.stat=u}S(Eu,Be);function vt(a){const u=$i();ie(u,new Eu(u,a))}or.Ma="timingevent";function wu(a,u){Be.call(this,or.Ma,a),this.size=u}S(wu,Be);function Cs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function ks(){this.g=!0}ks.prototype.xa=function(){this.g=!1};function E_(a,u,d,m,P,k){a.info(function(){if(a.g)if(k)for(var K="",Oe=k.split("&"),st=0;st<Oe.length;st++){var be=Oe[st].split("=");if(1<be.length){var lt=be[0];be=be[1];var ut=lt.split("_");K=2<=ut.length&&ut[1]=="type"?K+(lt+"="+be+"&"):K+(lt+"=redacted&")}}else K=null;else K=k;return"XMLHTTP REQ ("+m+") [attempt "+P+"]: "+u+`
`+d+`
`+K})}function w_(a,u,d,m,P,k,K){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+P+"]: "+u+`
`+d+`
`+k+" "+K})}function Lr(a,u,d,m){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+I_(a,d)+(m?" "+m:"")})}function T_(a,u){a.info(function(){return"TIMEOUT: "+u})}ks.prototype.info=function(){};function I_(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var P=m[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var K=1;K<P.length;K++)P[K]=""}}}}return Vr(d)}catch{return u}}var ji={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},La;function qi(){}S(qi,Mr),qi.prototype.g=function(){return new XMLHttpRequest},qi.prototype.i=function(){return{}},La=new qi;function Rn(a,u,d,m){this.j=a,this.i=u,this.l=d,this.R=m||1,this.U=new Dt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Iu}function Iu(){this.i=null,this.g="",this.h=!1}var Au={},Ua={};function Fa(a,u,d){a.L=1,a.v=Wi(hn(u)),a.m=d,a.P=!0,bu(a,null)}function bu(a,u){a.F=Date.now(),Hi(a),a.A=hn(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),Fu(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Iu,a.g=rh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Ct(g(a.Y,a,a.g),a.O)),u=a.U,d=a.g,m=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(Rs[0]=P.toString()),P=Rs);for(var k=0;k<P.length;k++){var K=D(d,P[k],m||u.handleEvent,!1,u.h||u);if(!K)break;u.g[K.key]=K}u=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Ss(),E_(a.i,a.u,a.A,a.l,a.R,a.m)}Rn.prototype.ca=function(a){a=a.target;const u=this.M;u&&dn(a)==3?u.j():this.Y(a)},Rn.prototype.Y=function(a){try{if(a==this.g)e:{const ut=dn(this.g);var u=this.g.Ba();const Br=this.g.Z();if(!(3>ut)&&(ut!=3||this.g&&(this.h.h||this.g.oa()||Ku(this.g)))){this.J||ut!=4||u==7||(u==8||0>=Br?Ss(3):Ss(2)),Ba(this);var d=this.g.Z();this.X=d;t:if(Ru(this)){var m=Ku(this.g);a="";var P=m.length,k=dn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ar(this),xs(this);var K="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(m[u],{stream:!(k&&u==P-1)});m.length=0,this.h.g+=a,this.C=0,K=this.h.g}else K=this.g.oa();if(this.o=d==200,w_(this.i,this.u,this.A,this.l,this.R,ut,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Oe,st=this.g;if((Oe=st.g?st.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Oe)){var be=Oe;break t}}be=null}if(d=be)Lr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$a(this,d);else{this.o=!1,this.s=3,vt(12),ar(this),xs(this);break e}}if(this.P){d=!0;let $t;for(;!this.J&&this.C<K.length;)if($t=A_(this,K),$t==Ua){ut==4&&(this.s=4,vt(14),d=!1),Lr(this.i,this.l,null,"[Incomplete Response]");break}else if($t==Au){this.s=4,vt(15),Lr(this.i,this.l,K,"[Invalid Chunk]"),d=!1;break}else Lr(this.i,this.l,$t,null),$a(this,$t);if(Ru(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ut!=4||K.length!=0||this.h.h||(this.s=1,vt(16),d=!1),this.o=this.o&&d,!d)Lr(this.i,this.l,K,"[Invalid Chunked Response]"),ar(this),xs(this);else if(0<K.length&&!this.W){this.W=!0;var lt=this.j;lt.g==this&&lt.ba&&!lt.M&&(lt.j.info("Great, no buffering proxy detected. Bytes received: "+K.length),Wa(lt),lt.M=!0,vt(11))}}else Lr(this.i,this.l,K,null),$a(this,K);ut==4&&ar(this),this.o&&!this.J&&(ut==4?Zu(this.j,this):(this.o=!1,Hi(this)))}else $_(this.g),d==400&&0<K.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),ar(this),xs(this)}}}catch{}finally{}};function Ru(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function A_(a,u){var d=a.C,m=u.indexOf(`
`,d);return m==-1?Ua:(d=Number(u.substring(d,m)),isNaN(d)?Au:(m+=1,m+d>u.length?Ua:(u=u.slice(m,m+d),a.C=m+d,u)))}Rn.prototype.cancel=function(){this.J=!0,ar(this)};function Hi(a){a.S=Date.now()+a.I,Pu(a,a.I)}function Pu(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Cs(g(a.ba,a),u)}function Ba(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Rn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(T_(this.i,this.A),this.L!=2&&(Ss(),vt(17)),ar(this),this.s=2,xs(this)):Pu(this,this.S-a)};function xs(a){a.j.G==0||a.J||Zu(a.j,a)}function ar(a){Ba(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,bn(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function $a(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||ja(d.h,a))){if(!a.K&&ja(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(u)}catch{m=null}if(Array.isArray(m)&&m.length==3){var P=m;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Ji(d),Xi(d);else break e;Ka(d),vt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Cs(g(d.Za,d),6e3));if(1>=ku(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else lr(d,11)}else if((a.K||d.g==a)&&Ji(d),!$(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let be=P[u];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const lt=be[3];lt!=null&&(d.la=lt,d.j.info("VER="+d.la));const ut=be[4];ut!=null&&(d.Aa=ut,d.j.info("SVER="+d.Aa));const Br=be[5];Br!=null&&typeof Br=="number"&&0<Br&&(m=1.5*Br,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const $t=a.g;if($t){const eo=$t.g?$t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(eo){var k=m.h;k.g||eo.indexOf("spdy")==-1&&eo.indexOf("quic")==-1&&eo.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(qa(k,k.h),k.h=null))}if(m.D){const Ga=$t.g?$t.g.getResponseHeader("X-HTTP-Session-Id"):null;Ga&&(m.ya=Ga,Ve(m.I,m.D,Ga))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var K=a;if(m.qa=nh(m,m.J?m.ia:null,m.W),K.K){xu(m.h,K);var Oe=K,st=m.L;st&&(Oe.I=st),Oe.B&&(Ba(Oe),Hi(Oe)),m.g=K}else Yu(m);0<d.i.length&&Yi(d)}else be[0]!="stop"&&be[0]!="close"||lr(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?lr(d,7):za(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}Ss(4)}catch{}}var b_=class{constructor(a,u){this.g=a,this.map=u}};function Su(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cu(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function ku(a){return a.h?1:a.g?a.g.size:0}function ja(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function qa(a,u){a.g?a.g.add(u):a.h=u}function xu(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}Su.prototype.cancel=function(){if(this.i=Ou(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ou(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return O(a.i)}function R_(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,m=0;m<d;m++)u.push(a[m]);return u}u=[],d=0;for(m in a)u[d++]=a[m];return u}function P_(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const m in a)u[d++]=m;return u}}}function Nu(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=P_(a),m=R_(a),P=m.length,k=0;k<P;k++)u.call(void 0,m[k],d&&d[k],a)}var Du=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function S_(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),P=null;if(0<=m){var k=a[d].substring(0,m);P=a[d].substring(m+1)}else k=a[d];u(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function cr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof cr){this.h=a.h,zi(this,a.j),this.o=a.o,this.g=a.g,Ki(this,a.s),this.l=a.l;var u=a.i,d=new Ds;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Vu(this,d),this.m=a.m}else a&&(u=String(a).match(Du))?(this.h=!1,zi(this,u[1]||"",!0),this.o=Os(u[2]||""),this.g=Os(u[3]||"",!0),Ki(this,u[4]),this.l=Os(u[5]||"",!0),Vu(this,u[6]||"",!0),this.m=Os(u[7]||"")):(this.h=!1,this.i=new Ds(null,this.h))}cr.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Ns(u,Mu,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Ns(u,Mu,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ns(d,d.charAt(0)=="/"?x_:k_,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ns(d,N_)),a.join("")};function hn(a){return new cr(a)}function zi(a,u,d){a.j=d?Os(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function Ki(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Vu(a,u,d){u instanceof Ds?(a.i=u,D_(a.i,a.h)):(d||(u=Ns(u,O_)),a.i=new Ds(u,a.h))}function Ve(a,u,d){a.i.set(u,d)}function Wi(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Os(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ns(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,C_),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function C_(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Mu=/[#\/\?@]/g,k_=/[#\?:]/g,x_=/[#\?]/g,O_=/[#\?@]/g,N_=/#/g;function Ds(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Pn(a){a.g||(a.g=new Map,a.h=0,a.i&&S_(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ds.prototype,t.add=function(a,u){Pn(this),this.i=null,a=Ur(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Lu(a,u){Pn(a),u=Ur(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function Uu(a,u){return Pn(a),u=Ur(a,u),a.g.has(u)}t.forEach=function(a,u){Pn(this),this.g.forEach(function(d,m){d.forEach(function(P){a.call(u,P,m,this)},this)},this)},t.na=function(){Pn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let m=0;m<u.length;m++){const P=a[m];for(let k=0;k<P.length;k++)d.push(u[m])}return d},t.V=function(a){Pn(this);let u=[];if(typeof a=="string")Uu(this,a)&&(u=u.concat(this.g.get(Ur(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Pn(this),this.i=null,a=Ur(this,a),Uu(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Fu(a,u,d){Lu(a,u),0<d.length&&(a.i=null,a.g.set(Ur(a,u),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var m=u[d];const k=encodeURIComponent(String(m)),K=this.V(m);for(m=0;m<K.length;m++){var P=k;K[m]!==""&&(P+="="+encodeURIComponent(String(K[m]))),a.push(P)}}return this.i=a.join("&")};function Ur(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function D_(a,u){u&&!a.j&&(Pn(a),a.i=null,a.g.forEach(function(d,m){var P=m.toLowerCase();m!=P&&(Lu(this,m),Fu(this,P,d))},a)),a.j=u}function V_(a,u){const d=new ks;if(c.Image){const m=new Image;m.onload=w(Sn,d,"TestLoadImage: loaded",!0,u,m),m.onerror=w(Sn,d,"TestLoadImage: error",!1,u,m),m.onabort=w(Sn,d,"TestLoadImage: abort",!1,u,m),m.ontimeout=w(Sn,d,"TestLoadImage: timeout",!1,u,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else u(!1)}function M_(a,u){const d=new ks,m=new AbortController,P=setTimeout(()=>{m.abort(),Sn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:m.signal}).then(k=>{clearTimeout(P),k.ok?Sn(d,"TestPingServer: ok",!0,u):Sn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Sn(d,"TestPingServer: error",!1,u)})}function Sn(a,u,d,m,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),m(d)}catch{}}function L_(){this.g=new Vt}function U_(a,u,d){const m=d||"";try{Nu(a,function(P,k){let K=P;h(P)&&(K=Vr(P)),u.push(m+k+"="+encodeURIComponent(K))})}catch(P){throw u.push(m+"type="+encodeURIComponent("_badmap")),P}}function Vs(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Vs,Mr),Vs.prototype.g=function(){return new Gi(this.l,this.j)},Vs.prototype.i=function(a){return function(){return a}}({});function Gi(a,u){ee.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Gi,ee),t=Gi.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,Ls(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ms(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ls(this)),this.g&&(this.readyState=3,Ls(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Bu(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Bu(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Ms(this):Ls(this),this.readyState==3&&Bu(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ms(this))},t.Qa=function(a){this.g&&(this.response=a,Ms(this))},t.ga=function(){this.g&&Ms(this)};function Ms(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ls(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function Ls(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Gi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function $u(a){let u="";return J(a,function(d,m){u+=m,u+=":",u+=d,u+=`\r
`}),u}function Ha(a,u,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=$u(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,u,d))}function qe(a){ee.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(qe,ee);var F_=/^https?$/i,B_=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():La.g(),this.v=this.o?gu(this.o):gu(La),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(k){ju(this,k);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var P in m)d.set(P,m[P]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const k of m.keys())d.set(k,m.get(k));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(k=>k.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(B_,u,void 0))||m||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,K]of d)this.g.setRequestHeader(k,K);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{zu(this),this.u=!0,this.g.send(a),this.u=!1}catch(k){ju(this,k)}};function ju(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,qu(a),Qi(a)}function qu(a){a.A||(a.A=!0,ie(a,"complete"),ie(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ie(this,"complete"),ie(this,"abort"),Qi(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qi(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Hu(this):this.bb())},t.bb=function(){Hu(this)};function Hu(a){if(a.h&&typeof o<"u"&&(!a.v[1]||dn(a)!=4||a.Z()!=2)){if(a.u&&dn(a)==4)xe(a.Ea,0,a);else if(ie(a,"readystatechange"),dn(a)==4){a.h=!1;try{const K=a.Z();e:switch(K){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var m;if(m=K===0){var P=String(a.D).match(Du)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),m=!F_.test(P?P.toLowerCase():"")}d=m}if(d)ie(a,"complete"),ie(a,"success");else{a.m=6;try{var k=2<dn(a)?a.g.statusText:""}catch{k=""}a.l=k+" ["+a.Z()+"]",qu(a)}}finally{Qi(a)}}}}function Qi(a,u){if(a.g){zu(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ie(a,"ready");try{d.onreadystatechange=m}catch{}}}function zu(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function dn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<dn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),yt(u)}};function Ku(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function $_(a){const u={};a=(a.g&&2<=dn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if($(a[m]))continue;var d=b(a[m]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const k=u[P]||[];u[P]=k,k.push(d)}I(u,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Us(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function Wu(a){this.Aa=0,this.i=[],this.j=new ks,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Us("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Us("baseRetryDelayMs",5e3,a),this.cb=Us("retryDelaySeedMs",1e4,a),this.Wa=Us("forwardChannelMaxRetries",2,a),this.wa=Us("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Su(a&&a.concurrentRequestLimit),this.Da=new L_,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wu.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,m){vt(0),this.W=a,this.H=u||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=nh(this,null,this.W),Yi(this)};function za(a){if(Gu(a),a.G==3){var u=a.U++,d=hn(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Fs(a,d),u=new Rn(a,a.j,u),u.L=2,u.v=Wi(hn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=rh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Hi(u)}th(a)}function Xi(a){a.g&&(Wa(a),a.g.cancel(),a.g=null)}function Gu(a){Xi(a),a.u&&(c.clearTimeout(a.u),a.u=null),Ji(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Yi(a){if(!Cu(a.h)&&!a.s){a.s=!0;var u=a.Ga;Te||Gt(),Ee||(Te(),Ee=!0),_t.add(u,a),a.B=0}}function j_(a,u){return ku(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Cs(g(a.Ga,a,u),eh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Rn(this,this.j,a);let k=this.o;if(this.S&&(k?(k=_(k),T(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(u+=m,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Xu(this,P,u),d=hn(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Fs(this,d),k&&(this.O?u="headers="+encodeURIComponent(String($u(k)))+"&"+u:this.m&&Ha(d,this.m,k)),qa(this.h,P),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),P.T=!0,Fa(P,d,null)):Fa(P,d,u),this.G=2}}else this.G==3&&(a?Qu(this,a):this.i.length==0||Cu(this.h)||Qu(this))};function Qu(a,u){var d;u?d=u.l:d=a.U++;const m=hn(a.I);Ve(m,"SID",a.K),Ve(m,"RID",d),Ve(m,"AID",a.T),Fs(a,m),a.m&&a.o&&Ha(m,a.m,a.o),d=new Rn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=Xu(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),qa(a.h,d),Fa(d,m,u)}function Fs(a,u){a.H&&J(a.H,function(d,m){Ve(u,m,d)}),a.l&&Nu({},function(d,m){Ve(u,m,d)})}function Xu(a,u,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let k=-1;for(;;){const K=["count="+d];k==-1?0<d?(k=P[0].g,K.push("ofs="+k)):k=0:K.push("ofs="+k);let Oe=!0;for(let st=0;st<d;st++){let be=P[st].g;const lt=P[st].map;if(be-=k,0>be)k=Math.max(0,P[st].g-100),Oe=!1;else try{U_(lt,K,"req"+be+"_")}catch{m&&m(lt)}}if(Oe){m=K.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,m}function Yu(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;Te||Gt(),Ee||(Te(),Ee=!0),_t.add(u,a),a.v=0}}function Ka(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Cs(g(a.Fa,a),eh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Ju(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Cs(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),Xi(this),Ju(this))};function Wa(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Ju(a){a.g=new Rn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=hn(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Fs(a,u),a.m&&a.o&&Ha(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Wi(hn(u)),d.m=null,d.P=!0,bu(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Xi(this),Ka(this),vt(19))};function Ji(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Zu(a,u){var d=null;if(a.g==u){Ji(a),Wa(a),a.g=null;var m=2}else if(ja(a.h,u))d=u.D,xu(a.h,u),m=1;else return;if(a.G!=0){if(u.o)if(m==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;m=$i(),ie(m,new wu(m,d)),Yi(a)}else Yu(a);else if(P=u.s,P==3||P==0&&0<u.X||!(m==1&&j_(a,u)||m==2&&Ka(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:lr(a,5);break;case 4:lr(a,10);break;case 3:lr(a,6);break;default:lr(a,2)}}}function eh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function lr(a,u){if(a.j.info("Error code "+u),u==2){var d=g(a.fb,a),m=a.Xa;const P=!m;m=new cr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||zi(m,"https"),Wi(m),P?V_(m.toString(),d):M_(m.toString(),d)}else vt(2);a.G=0,a.l&&a.l.sa(u),th(a),Gu(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function th(a){if(a.G=0,a.ka=[],a.l){const u=Ou(a.h);(u.length!=0||a.i.length!=0)&&(x(a.ka,u),x(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function nh(a,u,d){var m=d instanceof cr?hn(d):new cr(d);if(m.g!="")u&&(m.g=u+"."+m.g),Ki(m,m.s);else{var P=c.location;m=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var k=new cr(null);m&&zi(k,m),u&&(k.g=u),P&&Ki(k,P),d&&(k.l=d),m=k}return d=a.D,u=a.ya,d&&u&&Ve(m,d,u),Ve(m,"VER",a.la),Fs(a,m),m}function rh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new qe(new Vs({eb:d})):new qe(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function sh(){}t=sh.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Zi(){}Zi.prototype.g=function(a,u){return new kt(a,u)};function kt(a,u){ee.call(this),this.g=new Wu(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!$(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Fr(this)}S(kt,ee),kt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},kt.prototype.close=function(){za(this.g)},kt.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=Vr(a),a=d);u.i.push(new b_(u.Ya++,a)),u.G==3&&Yi(u)},kt.prototype.N=function(){this.g.l=null,delete this.j,za(this.g),delete this.g,kt.aa.N.call(this)};function ih(a){Va.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}S(ih,Va);function oh(){Ma.call(this),this.status=1}S(oh,Ma);function Fr(a){this.g=a}S(Fr,sh),Fr.prototype.ua=function(){ie(this.g,"a")},Fr.prototype.ta=function(a){ie(this.g,new ih(a))},Fr.prototype.sa=function(a){ie(this.g,new oh)},Fr.prototype.ra=function(){ie(this.g,"b")},Zi.prototype.createWebChannel=Zi.prototype.g,kt.prototype.send=kt.prototype.o,kt.prototype.open=kt.prototype.m,kt.prototype.close=kt.prototype.close,Yp=function(){return new Zi},Xp=function(){return $i()},Qp=or,Bc={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ji.NO_ERROR=0,ji.TIMEOUT=8,ji.HTTP_ERROR=6,To=ji,Tu.COMPLETE="complete",Gp=Tu,_u.EventType=Ps,Ps.OPEN="a",Ps.CLOSE="b",Ps.ERROR="c",Ps.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ws=_u,Wp=Vs,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,Kp=qe}).apply(typeof ao<"u"?ao:typeof self<"u"?self:typeof window<"u"?window:{});const dd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vs="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=new Il("@firebase/firestore");function js(){return Ir.logLevel}function Z(t,...e){if(Ir.logLevel<=ve.DEBUG){const n=e.map(Rl);Ir.debug(`Firestore (${vs}): ${t}`,...n)}}function wn(t,...e){if(Ir.logLevel<=ve.ERROR){const n=e.map(Rl);Ir.error(`Firestore (${vs}): ${t}`,...n)}}function os(t,...e){if(Ir.logLevel<=ve.WARN){const n=e.map(Rl);Ir.warn(`Firestore (${vs}): ${t}`,...n)}}function Rl(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t="Unexpected state"){const e=`FIRESTORE (${vs}) INTERNAL ASSERTION FAILED: `+t;throw wn(e),new Error(e)}function De(t,e){t||ce()}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class se extends un{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jp{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class QT{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(dt.UNAUTHENTICATED))}shutdown(){}}class XT{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class YT{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},c=l=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>c(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(De(typeof r.accessToken=="string"),new Jp(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return De(e===null||typeof e=="string"),new dt(e)}}class JT{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ZT{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new JT(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(dt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class eI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tI{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(De(typeof n.token=="string"),this.R=n.token,new eI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nI(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=nI(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function Re(t,e){return t<e?-1:t>e?1:0}function as(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new se(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new se(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new se(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new se(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Je.fromMillis(Date.now())}static fromDate(e){return Je.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Je(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ue(e)}static min(){return new ue(new Je(0,0))}static max(){return new ue(new Je(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e,n,r){n===void 0?n=0:n>e.length&&ce(),r===void 0?r=e.length-n:r>e.length-n&&ce(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return vi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Le extends vi{construct(e,n,r){return new Le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new se(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Le(n)}static emptyPath(){return new Le([])}}const rI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends vi{construct(e,n,r){return new ot(e,n,r)}static isValidIdentifier(e){return rI.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new se(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new se(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new se(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new se(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ot(n)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Le.fromString(e))}static fromName(e){return new oe(Le.fromString(e).popFirst(5))}static empty(){return new oe(Le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Le(e.slice()))}}function sI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new Je(n+1,0):new Je(n,r));return new Jn(s,oe.empty(),e)}function iI(t){return new Jn(t.readTime,t.key,-1)}class Jn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Jn(ue.min(),oe.empty(),-1)}static max(){return new Jn(ue.max(),oe.empty(),-1)}}function oI(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=oe.comparator(t.documentKey,e.documentKey),n!==0?n:Re(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==aI)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ce(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new U((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof U?n:U.resolve(n)}catch(n){return U.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):U.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):U.reject(n)}static resolve(e){return new U((n,r)=>{n(e)})}static reject(e){return new U((n,r)=>{r(e)})}static waitFor(e){return new U((n,r)=>{let s=0,i=0,o=!1;e.forEach(c=>{++s,c.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=U.resolve(!1);for(const r of e)n=n.next(s=>s?U.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new U((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next(f=>{o[h]=f,++c,c===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new U((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function lI(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Pl.oe=-1;function ga(t){return t==null}function Fo(t){return t===0&&1/t==-1/0}function uI(t){return typeof t=="number"&&Number.isInteger(t)&&!Fo(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Es(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function em(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n){this.comparator=e,this.root=n||it.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,it.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,it.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new co(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new co(this.root,e,this.comparator,!1)}getReverseIterator(){return new co(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new co(this.root,e,this.comparator,!0)}}class co{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class it{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??it.RED,this.left=s??it.EMPTY,this.right=i??it.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new it(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return it.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ce();const e=this.left.check();if(e!==this.right.check())throw ce();return e+(this.isRed()?0:1)}}it.EMPTY=null,it.RED=!0,it.BLACK=!1;it.EMPTY=new class{constructor(){this.size=0}get key(){throw ce()}get value(){throw ce()}get color(){throw ce()}get left(){throw ce()}get right(){throw ce()}copy(e,n,r,s,i){return this}insert(e,n,r){return new it(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new pd(this.data.getIterator())}getIteratorFrom(e){return new pd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class pd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(ot.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new at(ot.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return as(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new tm("Invalid base64 string: "+i):i}}(e);return new gt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new gt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gt.EMPTY_BYTE_STRING=new gt("");const hI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zn(t){if(De(!!t),typeof t=="string"){let e=0;const n=hI.exec(t);if(De(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ge(t.seconds),nanos:Ge(t.nanos)}}function Ge(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ar(t){return typeof t=="string"?gt.fromBase64String(t):gt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sl(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cl(t){const e=t.mapValue.fields.__previous_value__;return Sl(e)?Cl(e):e}function Ei(t){const e=Zn(t.mapValue.fields.__local_write_time__.timestampValue);return new Je(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,n,r,s,i,o,c,l,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h}}class wi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new wi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Sl(t)?4:fI(t)?9007199254740991:10:ce()}function an(t,e){if(t===e)return!0;const n=br(t);if(n!==br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ei(t).isEqual(Ei(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Zn(s.timestampValue),c=Zn(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ar(s.bytesValue).isEqual(Ar(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ge(s.geoPointValue.latitude)===Ge(i.geoPointValue.latitude)&&Ge(s.geoPointValue.longitude)===Ge(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ge(s.integerValue)===Ge(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ge(s.doubleValue),c=Ge(i.doubleValue);return o===c?Fo(o)===Fo(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return as(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(fd(o)!==fd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!an(o[l],c[l])))return!1;return!0}(t,e);default:return ce()}}function Ti(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function cs(t,e){if(t===e)return 0;const n=br(t),r=br(e);if(n!==r)return Re(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Re(t.booleanValue,e.booleanValue);case 2:return function(i,o){const c=Ge(i.integerValue||i.doubleValue),l=Ge(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1}(t,e);case 3:return md(t.timestampValue,e.timestampValue);case 4:return md(Ei(t),Ei(e));case 5:return Re(t.stringValue,e.stringValue);case 6:return function(i,o){const c=Ar(i),l=Ar(o);return c.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=Re(c[h],l[h]);if(f!==0)return f}return Re(c.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const c=Re(Ge(i.latitude),Ge(o.latitude));return c!==0?c:Re(Ge(i.longitude),Ge(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const c=i.values||[],l=o.values||[];for(let h=0;h<c.length&&h<l.length;++h){const f=cs(c[h],l[h]);if(f)return f}return Re(c.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===lo.mapValue&&o===lo.mapValue)return 0;if(i===lo.mapValue)return 1;if(o===lo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const g=Re(l[p],f[p]);if(g!==0)return g;const w=cs(c[l[p]],h[f[p]]);if(w!==0)return w}return Re(l.length,f.length)}(t.mapValue,e.mapValue);default:throw ce()}}function md(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Re(t,e);const n=Zn(t),r=Zn(e),s=Re(n.seconds,r.seconds);return s!==0?s:Re(n.nanos,r.nanos)}function ls(t){return $c(t)}function $c(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Zn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ar(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return oe.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$c(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$c(n.fields[o])}`;return s+"}"}(t.mapValue):ce()}function jc(t){return!!t&&"integerValue"in t}function kl(t){return!!t&&"arrayValue"in t}function gd(t){return!!t&&"nullValue"in t}function _d(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Io(t){return!!t&&"mapValue"in t}function ii(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Es(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ii(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ii(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fI(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this.value=e}static empty(){return new Lt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Io(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ii(n)}setAll(e){let n=ot.emptyPath(),r={},s=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=ii(o):s.push(c.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Io(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Es(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Lt(ii(this.value))}}function nm(t){const e=[];return Es(t.fields,(n,r)=>{const s=new ot([n]);if(Io(r)){const i=nm(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ft(e,0,ue.min(),ue.min(),ue.min(),Lt.empty(),0)}static newFoundDocument(e,n,r,s){return new ft(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new ft(e,2,n,ue.min(),ue.min(),Lt.empty(),0)}static newUnknownDocument(e,n){return new ft(e,3,n,ue.min(),ue.min(),Lt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Lt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ft&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ft(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e,n){this.position=e,this.inclusive=n}}function yd(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=oe.comparator(oe.fromName(o.referenceValue),n.key):r=cs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n="asc"){this.field=e,this.dir=n}}function pI(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{}class Xe extends rm{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new gI(e,n,r):n==="array-contains"?new vI(e,r):n==="in"?new EI(e,r):n==="not-in"?new wI(e,r):n==="array-contains-any"?new TI(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _I(e,r):new yI(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(cs(n,this.value)):n!==null&&br(this.value)===br(n)&&this.matchesComparison(cs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ce()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class cn extends rm{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new cn(e,n)}matches(e){return sm(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function sm(t){return t.op==="and"}function im(t){return mI(t)&&sm(t)}function mI(t){for(const e of t.filters)if(e instanceof cn)return!1;return!0}function qc(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+ls(t.value);if(im(t))return t.filters.map(e=>qc(e)).join(",");{const e=t.filters.map(n=>qc(n)).join(",");return`${t.op}(${e})`}}function om(t,e){return t instanceof Xe?function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof cn?function(r,s){return s instanceof cn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,c)=>i&&om(o,s.filters[c]),!0):!1}(t,e):void ce()}function am(t){return t instanceof Xe?function(n){return`${n.field.canonicalString()} ${n.op} ${ls(n.value)}`}(t):t instanceof cn?function(n){return n.op.toString()+" {"+n.getFilters().map(am).join(" ,")+"}"}(t):"Filter"}class gI extends Xe{constructor(e,n,r){super(e,n,r),this.key=oe.fromName(r.referenceValue)}matches(e){const n=oe.comparator(e.key,this.key);return this.matchesComparison(n)}}class _I extends Xe{constructor(e,n){super(e,"in",n),this.keys=cm("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yI extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=cm("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cm(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>oe.fromName(r.referenceValue))}class vI extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return kl(n)&&Ti(n.arrayValue,this.value)}}class EI extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ti(this.value.arrayValue,n)}}class wI extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ti(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ti(this.value.arrayValue,n)}}class TI extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!kl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ti(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.ue=null}}function Ed(t,e=null,n=[],r=[],s=null,i=null,o=null){return new II(t,e,n,r,s,i,o)}function xl(t){const e=de(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>qc(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),ga(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ls(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ls(r)).join(",")),e.ue=n}return e.ue}function Ol(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pI(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!om(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vd(t.startAt,e.startAt)&&vd(t.endAt,e.endAt)}function Hc(t){return oe.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function AI(t,e,n,r,s,i,o,c){return new _a(t,e,n,r,s,i,o,c)}function Nl(t){return new _a(t)}function wd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function bI(t){return t.collectionGroup!==null}function oi(t){const e=de(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new at(ot.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(h=>{h.isInequality()&&(c=c.add(h.field))})}),c})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new $o(i,r))}),n.has(ot.keyField().canonicalString())||e.ce.push(new $o(ot.keyField(),r))}return e.ce}function tn(t){const e=de(t);return e.le||(e.le=RI(e,oi(t))),e.le}function RI(t,e){if(t.limitType==="F")return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new $o(s.field,i)});const n=t.endAt?new Bo(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Bo(t.startAt.position,t.startAt.inclusive):null;return Ed(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function zc(t,e,n){return new _a(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ya(t,e){return Ol(tn(t),tn(e))&&t.limitType===e.limitType}function lm(t){return`${xl(tn(t))}|lt:${t.limitType}`}function Hr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>am(s)).join(", ")}]`),ga(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ls(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ls(s)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function va(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):oe.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of oi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,c,l){const h=yd(o,c,l);return o.inclusive?h<=0:h<0}(r.startAt,oi(r),s)||r.endAt&&!function(o,c,l){const h=yd(o,c,l);return o.inclusive?h>=0:h>0}(r.endAt,oi(r),s))}(t,e)}function PI(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function um(t){return(e,n)=>{let r=!1;for(const s of oi(t)){const i=SI(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function SI(t,e,n){const r=t.field.isKeyField()?oe.comparator(e.key,n.key):function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?cs(l,h):ce()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ce()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Es(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return em(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=new $e(oe.comparator);function Tn(){return CI}const hm=new $e(oe.comparator);function Gs(...t){let e=hm;for(const n of t)e=e.insert(n.key,n);return e}function dm(t){let e=hm;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return ai()}function fm(){return ai()}function ai(){return new ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const kI=new $e(oe.comparator),xI=new at(oe.comparator);function _e(...t){let e=xI;for(const n of t)e=e.add(n);return e}const OI=new at(Re);function NI(){return OI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Fo(e)?"-0":e}}function mm(t){return{integerValue:""+t}}function DI(t,e){return uI(e)?mm(e):pm(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this._=void 0}}function VI(t,e,n){return t instanceof jo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Sl(i)&&(i=Cl(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ii?_m(t,e):t instanceof Ai?ym(t,e):function(s,i){const o=gm(s,i),c=Td(o)+Td(s.Pe);return jc(o)&&jc(s.Pe)?mm(c):pm(s.serializer,c)}(t,e)}function MI(t,e,n){return t instanceof Ii?_m(t,e):t instanceof Ai?ym(t,e):n}function gm(t,e){return t instanceof qo?function(r){return jc(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class jo extends Ea{}class Ii extends Ea{constructor(e){super(),this.elements=e}}function _m(t,e){const n=vm(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ai extends Ea{constructor(e){super(),this.elements=e}}function ym(t,e){let n=vm(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class qo extends Ea{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Td(t){return Ge(t.integerValue||t.doubleValue)}function vm(t){return kl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function LI(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ii&&s instanceof Ii||r instanceof Ai&&s instanceof Ai?as(r.elements,s.elements,an):r instanceof qo&&s instanceof qo?an(r.Pe,s.Pe):r instanceof jo&&s instanceof jo}(t.transform,e.transform)}class UI{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ao(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wa{}function Em(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Tm(t.key,vn.none()):new Oi(t.key,t.data,vn.none());{const n=t.data,r=Lt.empty();let s=new at(ot.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new xr(t.key,r,new Ht(s.toArray()),vn.none())}}function FI(t,e,n){t instanceof Oi?function(s,i,o){const c=s.value.clone(),l=Ad(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(s,i,o){if(!Ao(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Ad(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(wm(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ci(t,e,n,r){return t instanceof Oi?function(i,o,c,l){if(!Ao(i.precondition,o))return c;const h=i.value.clone(),f=bd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(i,o,c,l){if(!Ao(i.precondition,o))return c;const h=bd(i.fieldTransforms,l,o),f=o.data;return f.setAll(wm(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(p=>p.field))}(t,e,n,r):function(i,o,c){return Ao(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function BI(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=gm(r.transform,s||null);i!=null&&(n===null&&(n=Lt.empty()),n.set(r.field,i))}return n||null}function Id(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&as(r,s,(i,o)=>LI(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Oi extends wa{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xr extends wa{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function wm(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ad(t,e,n){const r=new Map;De(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,MI(o,c,n[s]))}return r}function bd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,VI(i,o,e))}return r}class Tm extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $I extends wa{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FI(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=fm();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Em(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),_e())}isEqual(e){return this.batchId===e.batchId&&as(this.mutations,e.mutations,(n,r)=>Id(n,r))&&as(this.baseMutations,e.baseMutations,(n,r)=>Id(n,r))}}class Dl{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){De(e.mutations.length===r.length);let s=function(){return kI}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Dl(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,we;function zI(t){switch(t){default:return ce();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function Im(t){if(t===void 0)return wn("GRPC error has no .code"),L.UNKNOWN;switch(t){case We.OK:return L.OK;case We.CANCELLED:return L.CANCELLED;case We.UNKNOWN:return L.UNKNOWN;case We.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case We.INTERNAL:return L.INTERNAL;case We.UNAVAILABLE:return L.UNAVAILABLE;case We.UNAUTHENTICATED:return L.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case We.NOT_FOUND:return L.NOT_FOUND;case We.ALREADY_EXISTS:return L.ALREADY_EXISTS;case We.PERMISSION_DENIED:return L.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case We.ABORTED:return L.ABORTED;case We.OUT_OF_RANGE:return L.OUT_OF_RANGE;case We.UNIMPLEMENTED:return L.UNIMPLEMENTED;case We.DATA_LOSS:return L.DATA_LOSS;default:return ce()}}(we=We||(We={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI=new yr([4294967295,4294967295],0);function Rd(t){const e=KI().encode(t),n=new zp;return n.update(e),new Uint8Array(n.digest())}function Pd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new yr([n,r],0),new yr([s,i],0)]}class Vl{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=yr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(yr.fromNumber(r)));return s.compare(WI)===1&&(s=new yr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Rd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Vl(i,s,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.Ie===0)return;const n=Rd(e),[r,s]=Pd(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ni.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Ta(ue.min(),s,new $e(Re),Tn(),_e())}}class Ni{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ni(r,n,_e(),_e(),_e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Am{constructor(e,n){this.targetId=e,this.me=n}}class bm{constructor(e,n,r=gt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Sd{constructor(){this.fe=0,this.ge=kd(),this.pe=gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=_e(),n=_e(),r=_e();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ce()}}),new Ni(this.pe,this.ye,e,n,r)}ve(){this.we=!1,this.ge=kd()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,De(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class GI{constructor(e){this.Le=e,this.Be=new Map,this.ke=Tn(),this.qe=Cd(),this.Qe=new $e(Re)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.ve(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ce()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Hc(i))if(r===0){const o=new oe(i.path);this.Ue(n,o,ft.newNoDocument(o,ue.min()))}else De(r===1);else{const o=this.Ye(n);if(o!==r){const c=this.Ze(e),l=c?this.Xe(c,e,o):1;if(l!==0){this.je(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,h)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Ar(r).toUint8Array()}catch(l){if(l instanceof tm)return os("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Vl(o,s,i)}catch(l){return os(l instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.Ie===0?null:c}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const c=this.Je(o);if(c){if(i.current&&Hc(c.target)){const l=new oe(c.target.path);this.ke.get(l)!==null||this.it(o,l)||this.Ue(o,l,ft.newNoDocument(l,e))}i.be&&(n.set(o,i.Ce()),i.ve())}});let r=_e();this.qe.forEach((i,o)=>{let c=!0;o.forEachWhile(l=>{const h=this.Je(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Ta(e,n,this.Qe,this.ke,r);return this.ke=Tn(),this.qe=Cd(),this.Qe=new $e(Re),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Sd,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new at(Re),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Z("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Sd),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Cd(){return new $e(oe.comparator)}function kd(){return new $e(oe.comparator)}const QI={asc:"ASCENDING",desc:"DESCENDING"},XI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YI={and:"AND",or:"OR"};class JI{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Kc(t,e){return t.useProto3Json||ga(e)?e:{value:e}}function Ho(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZI(t,e){return Ho(t,e.toTimestamp())}function nn(t){return De(!!t),ue.fromTimestamp(function(n){const r=Zn(n);return new Je(r.seconds,r.nanos)}(t))}function Ml(t,e){return Wc(t,e).canonicalString()}function Wc(t,e){const n=function(s){return new Le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Pm(t){const e=Le.fromString(t);return De(Om(e)),e}function Gc(t,e){return Ml(t.databaseId,e.path)}function hc(t,e){const n=Pm(e);if(n.get(1)!==t.databaseId.projectId)throw new se(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new se(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new oe(Cm(n))}function Sm(t,e){return Ml(t.databaseId,e)}function e0(t){const e=Pm(t);return e.length===4?Le.emptyPath():Cm(e)}function Qc(t){return new Le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Cm(t){return De(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function xd(t,e,n){return{name:Gc(t,e),fields:n.value.mapValue.fields}}function t0(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:ce()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(h,f){return h.useProto3Json?(De(f===void 0||typeof f=="string"),gt.fromBase64String(f||"")):(De(f===void 0||f instanceof Buffer||f instanceof Uint8Array),gt.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(h){const f=h.code===void 0?L.UNKNOWN:Im(h.code);return new se(f,h.message||"")}(o);n=new bm(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=hc(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):ue.min(),c=new Lt({mapValue:{fields:r.document.fields}}),l=ft.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new bo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=hc(t,r.document),i=r.readTime?nn(r.readTime):ue.min(),o=ft.newNoDocument(s,i),c=r.removedTargetIds||[];n=new bo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=hc(t,r.document),i=r.removedTargetIds||[];n=new bo([],i,s,null)}else{if(!("filter"in e))return ce();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new HI(s,i),c=r.targetId;n=new Am(c,o)}}return n}function n0(t,e){let n;if(e instanceof Oi)n={update:xd(t,e.key,e.value)};else if(e instanceof Tm)n={delete:Gc(t,e.key)};else if(e instanceof xr)n={update:xd(t,e.key,e.data),updateMask:h0(e.fieldMask)};else{if(!(e instanceof $I))return ce();n={verify:Gc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const c=o.transform;if(c instanceof jo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Ii)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Ai)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof qo)return{fieldPath:o.field.canonicalString(),increment:c.Pe};throw ce()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ZI(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ce()}(t,e.precondition)),n}function r0(t,e){return t&&t.length>0?(De(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(ue.min())&&(o=nn(i)),new UI(o,s.transformResults||[])}(n,e))):[]}function s0(t,e){return{documents:[Sm(t,e.path)]}}function i0(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Sm(t,s);const i=function(h){if(h.length!==0)return xm(cn.create(h,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:zr(g.field),direction:c0(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Kc(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{_t:n,parent:s}}function o0(t){let e=e0(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){De(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(p){const g=km(p);return g instanceof cn&&im(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(p){return p.map(g=>function(S){return new $o(Kr(S.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(g))}(n.orderBy));let c=null;n.limit&&(c=function(p){let g;return g=typeof p=="object"?p.value:p,ga(g)?null:g}(n.limit));let l=null;n.startAt&&(l=function(p){const g=!!p.before,w=p.values||[];return new Bo(w,g)}(n.startAt));let h=null;return n.endAt&&(h=function(p){const g=!p.before,w=p.values||[];return new Bo(w,g)}(n.endAt)),AI(e,s,o,i,c,"F",l,h)}function a0(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ce()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function km(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Kr(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Kr(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Kr(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Kr(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ce()}}(t):t.fieldFilter!==void 0?function(n){return Xe.create(Kr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ce()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return cn.create(n.compositeFilter.filters.map(r=>km(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ce()}}(n.compositeFilter.op))}(t):ce()}function c0(t){return QI[t]}function l0(t){return XI[t]}function u0(t){return YI[t]}function zr(t){return{fieldPath:t.canonicalString()}}function Kr(t){return ot.fromServerFormat(t.fieldPath)}function xm(t){return t instanceof Xe?function(n){if(n.op==="=="){if(_d(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NAN"}};if(gd(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(_d(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NOT_NAN"}};if(gd(n.value))return{unaryFilter:{field:zr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:zr(n.field),op:l0(n.op),value:n.value}}}(t):t instanceof cn?function(n){const r=n.getFilters().map(s=>xm(s));return r.length===1?r[0]:{compositeFilter:{op:u0(n.op),filters:r}}}(t):ce()}function h0(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Om(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hn{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=gt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Hn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Hn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e){this.ct=e}}function f0(t){const e=o0({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?zc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(){this._n=new m0}addToCollectionParentIndex(e,n){return this._n.add(n),U.resolve()}getCollectionParents(e,n){return U.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return U.resolve()}deleteFieldIndex(e,n){return U.resolve()}deleteAllFieldIndexes(e){return U.resolve()}createTargetIndexes(e,n){return U.resolve()}getDocumentsMatchingTarget(e,n){return U.resolve(null)}getIndexType(e,n){return U.resolve(0)}getFieldIndexes(e,n){return U.resolve([])}getNextCollectionGroupToUpdate(e){return U.resolve(null)}getMinOffset(e,n){return U.resolve(Jn.min())}getMinOffsetFromCollectionGroup(e,n){return U.resolve(Jn.min())}updateCollectionGroup(e,n,r){return U.resolve()}updateIndexEntries(e,n){return U.resolve()}}class m0{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new at(Le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new at(Le.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new us(0)}static Ln(){return new us(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(){this.changes=new ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ft.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?U.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y0{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ci(r.mutation,s,Ht.empty(),Je.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,_e()).next(()=>r))}getLocalViewOfDocuments(e,n,r=_e()){const s=mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gs();return i.forEach((c,l)=>{o=o.insert(c,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,_e()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,s){let i=Tn();const o=ai(),c=function(){return ai()}();return n.forEach((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof xr)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),ci(f.mutation,h,f.mutation.getFieldMask(),Je.now())):o.set(h.key,Ht.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var p;return c.set(h,new _0(f,(p=o.get(h))!==null&&p!==void 0?p:null))}),c))}recalculateAndSaveOverlays(e,n){const r=ai();let s=new $e((o,c)=>o-c),i=_e();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Ht.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||_e()).add(l);s=s.insert(c.batchId,p)})}).next(()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=fm();f.forEach(g=>{if(!i.has(g)){const w=Em(n.get(g),r.get(g));w!==null&&p.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return U.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return oe.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):bI(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):U.resolve(mr());let c=-1,l=i;return o.next(h=>U.forEach(h,(f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?U.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{l=l.insert(f,g)}))).next(()=>this.populateOverlays(e,h,i)).next(()=>this.computeViews(e,l,h,_e())).next(f=>({batchId:c,changes:dm(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new oe(n)).next(r=>{let s=Gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,i).next(c=>U.forEach(c,l=>{const h=function(p,g){return new _a(g,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next(f=>{f.forEach((p,g)=>{o=o.insert(p,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,ft.newInvalidDocument(f)))});let c=Gs();return o.forEach((l,h)=>{const f=i.get(l);f!==void 0&&ci(f.mutation,h,Ht.empty(),Je.now()),va(n,h)&&(c=c.insert(l,h))}),c})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v0{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return U.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),U.resolve()}getNamedQuery(e,n){return U.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:f0(s.bundledQuery),readTime:nn(s.readTime)}}(n)),U.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(){this.overlays=new $e(oe.comparator),this.hr=new Map}getOverlay(e,n){return U.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return U.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),U.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),U.resolve()}getOverlaysForCollection(e,n,r){const s=mr(),i=n.length+1,o=new oe(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return U.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=mr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=mr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=s)););return U.resolve(c)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new qI(n,r));let i=this.hr.get(n);i===void 0&&(i=_e(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(){this.Pr=new at(et.Ir),this.Tr=new at(et.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new et(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new et(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new oe(new Le([])),r=new et(n,e),s=new et(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new oe(new Le([])),r=new et(n,e),s=new et(n,e+1);let i=_e();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new et(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return oe.comparator(e.key,n.key)||Re(e.pr,n.pr)}static Er(e,n){return Re(e.pr,n.pr)||oe.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new at(et.Ir)}checkEmpty(e){return U.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new jI(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.wr=this.wr.add(new et(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return U.resolve(o)}lookupMutationBatch(e,n){return U.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return U.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return U.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return U.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new et(n,0),s=new et(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const c=this.Sr(o.pr);i.push(c)}),U.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new at(Re);return n.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],c=>{r=r.add(c.pr)})}),U.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;oe.isDocumentKey(i)||(i=i.child(""));const o=new et(new oe(i),0);let c=new at(Re);return this.wr.forEachWhile(l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.pr)),!0)},o),U.resolve(this.Dr(c))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){De(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return U.forEach(n.mutations,s=>{const i=new et(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new et(n,0),s=this.wr.firstAfterOrEqual(r);return U.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,U.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T0{constructor(e){this.vr=e,this.docs=function(){return new $e(oe.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return U.resolve(r?r.document.mutableCopy():ft.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ft.newInvalidDocument(s))}),U.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,c=new oe(o.child("")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||oI(iI(f),r)<=0||(s.has(f.key)||va(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return U.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ce()}Fr(e,n){return U.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new I0(this)}getSize(e){return U.resolve(this.size)}}class I0 extends g0{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),U.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e){this.persistence=e,this.Mr=new ws(n=>xl(n),Ol),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ll,this.targetCount=0,this.Lr=us.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),U.resolve()}getLastRemoteSnapshotVersion(e){return U.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return U.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),U.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),U.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new us(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,U.resolve()}updateTargetData(e,n){return this.qn(n),U.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,U.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),U.waitFor(i).next(()=>s)}getTargetCount(e){return U.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return U.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),U.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),U.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),U.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return U.resolve(r)}containsKey(e,n){return U.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n){this.Br={},this.overlays={},this.kr=new Pl(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new A0(this),this.indexManager=new p0,this.remoteDocumentCache=function(s){return new T0(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new d0(n),this.$r=new v0(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new E0,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new w0(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new R0(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return U.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class R0 extends cI{constructor(e){super(),this.currentSequenceNumber=e}}class Ul{constructor(e){this.persistence=e,this.zr=new Ll,this.jr=null}static Hr(e){return new Ul(e)}get Jr(){if(this.jr)return this.jr;throw ce()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),U.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),U.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),U.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return U.forEach(this.Jr,r=>{const s=oe.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ue.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return U.or([()=>U.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=_e(),s=_e();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Fl(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P0{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return xw()?8:lI(ct())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new P0;return this.Ji(e,n,o).next(c=>{if(i.result=c,this.Ui)return this.Yi(e,n,o,c.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(js()<=ve.DEBUG&&Z("QueryEngine","SDK will not create cache indexes for query:",Hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),U.resolve()):(js()<=ve.DEBUG&&Z("QueryEngine","Query:",Hr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(js()<=ve.DEBUG&&Z("QueryEngine","The SDK decides to create cache indexes for query:",Hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):U.resolve())}ji(e,n){if(wd(n))return U.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=zc(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=_e(...i);return this.zi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(l=>{const h=this.Zi(n,c);return this.Xi(n,h,o,l.readTime)?this.ji(e,zc(n,null,"F")):this.es(e,h,n,l)}))})))}Hi(e,n,r,s){return wd(n)||s.isEqual(ue.min())?U.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?U.resolve(null):(js()<=ve.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Hr(n)),this.es(e,o,n,sI(s,-1)).next(c=>c))})}Zi(e,n){let r=new at(um(e));return n.forEach((s,i)=>{va(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return js()<=ve.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",Hr(n)),this.zi.getDocumentsMatchingQuery(e,n,Jn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new $e(Re),this.rs=new ws(i=>xl(i),Ol),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new y0(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function k0(t,e,n,r){return new C0(t,e,n,r)}async function Nm(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],c=[];let l=_e();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next(h=>({us:h,removedBatchIds:o,addedBatchIds:c}))})})}function x0(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(c,l,h,f){const p=h.batch,g=p.keys();let w=U.resolve();return g.forEach(S=>{w=w.next(()=>f.getEntry(l,S)).next(O=>{const x=h.docVersions.get(S);De(x!==null),O.version.compareTo(x)<0&&(p.applyToRemoteDocument(O,h),O.isValidDocument()&&(O.setReadTime(h.commitVersion),f.addEntry(O)))})}),w.next(()=>c.mutationQueue.removeMutationBatch(l,p))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let l=_e();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Dm(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function O0(t,e){const n=de(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const c=[];e.targetChanges.forEach((f,p)=>{const g=s.get(p);if(!g)return;c.push(n.Qr.removeMatchingKeys(i,f.removedDocuments,p).next(()=>n.Qr.addMatchingKeys(i,f.addedDocuments,p)));let w=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?w=w.withResumeToken(gt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(f.resumeToken,r)),s=s.insert(p,w),function(O,x,j){return O.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=3e8?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0}(g,w,f)&&c.push(n.Qr.updateTargetData(i,w))});let l=Tn(),h=_e();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),c.push(N0(i,o,e.documentUpdates).next(f=>{l=f.cs,h=f.ls})),!r.isEqual(ue.min())){const f=n.Qr.getLastRemoteSnapshotVersion(i).next(p=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(f)}return U.waitFor(c).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.ns=s,i))}function N0(t,e,n){let r=_e(),s=_e();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Z("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)}),{cs:o,ls:s}})}function D0(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function V0(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,U.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Hn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function Xc(t,e,n){const r=de(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!xi(o))throw o;Z("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Od(t,e,n){const r=de(t);let s=ue.min(),i=_e();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,h,f){const p=de(l),g=p.rs.get(f);return g!==void 0?U.resolve(p.ns.get(g)):p.Qr.getTargetData(h,f)}(r,o,tn(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,c.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:_e())).next(c=>(M0(r,PI(e),c),{documents:c,hs:i})))}function M0(t,e,n){let r=t.ss.get(e)||ue.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Nd{constructor(){this.activeTargetIds=NI()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class L0{constructor(){this.no=new Nd,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Nd,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U0{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uo=null;function dc(){return uo===null?uo=function(){return 268435456+Math.round(2147483648*Math.random())}():uo++,"0x"+uo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ht="WebChannelConnection";class $0 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=r+"://"+n.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(n,r,s,i,o){const c=dc(),l=this.vo(n,r.toUriEncodedString());Z("RestConnection",`Sending RPC '${n}' ${c}:`,l,s);const h={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(h,i,o),this.Mo(n,l,h,s).then(f=>(Z("RestConnection",`Received RPC '${n}' ${c}: `,f),f),f=>{throw os("RestConnection",`RPC '${n}' ${c} failed with error: `,f,"url: ",l,"request:",s),f})}xo(n,r,s,i,o,c){return this.Co(n,r,s,i,o)}Fo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+vs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}vo(n,r){const s=F0[n];return`${this.wo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,r,s){const i=dc();return new Promise((o,c)=>{const l=new Kp;l.setWithCredentials(!0),l.listenOnce(Gp.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case To.NO_ERROR:const f=l.getResponseJson();Z(ht,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case To.TIMEOUT:Z(ht,`RPC '${e}' ${i} timed out`),c(new se(L.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const p=l.getStatus();if(Z(ht,`RPC '${e}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const S=function(x){const j=x.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(j)>=0?j:L.UNKNOWN}(w.status);c(new se(S,w.message))}else c(new se(L.UNKNOWN,"Server responded with status "+l.getStatus()))}else c(new se(L.UNAVAILABLE,"Connection failed."));break;default:ce()}}finally{Z(ht,`RPC '${e}' ${i} completed.`)}});const h=JSON.stringify(s);Z(ht,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",h,r,15)})}Oo(e,n,r){const s=dc(),i=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Yp(),c=Xp(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.xmlHttpFactory=new Wp({})),this.Fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Z(ht,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);let g=!1,w=!1;const S=new B0({lo:x=>{w?Z(ht,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(g||(Z(ht,`Opening RPC '${e}' stream ${s} transport.`),p.open(),g=!0),Z(ht,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},ho:()=>p.close()}),O=(x,j,$)=>{x.listen(j,H=>{try{$(H)}catch(Y){setTimeout(()=>{throw Y},0)}})};return O(p,Ws.EventType.OPEN,()=>{w||(Z(ht,`RPC '${e}' stream ${s} transport opened.`),S.mo())}),O(p,Ws.EventType.CLOSE,()=>{w||(w=!0,Z(ht,`RPC '${e}' stream ${s} transport closed`),S.po())}),O(p,Ws.EventType.ERROR,x=>{w||(w=!0,os(ht,`RPC '${e}' stream ${s} transport errored:`,x),S.po(new se(L.UNAVAILABLE,"The operation could not be completed")))}),O(p,Ws.EventType.MESSAGE,x=>{var j;if(!w){const $=x.data[0];De(!!$);const H=$,Y=H.error||((j=H[0])===null||j===void 0?void 0:j.error);if(Y){Z(ht,`RPC '${e}' stream ${s} received error:`,Y);const me=Y.status;let J=function(E){const T=We[E];if(T!==void 0)return Im(T)}(me),I=Y.message;J===void 0&&(J=L.INTERNAL,I="Unknown error status: "+me+" with message "+Y.message),w=!0,S.po(new se(J,I)),p.close()}else Z(ht,`RPC '${e}' stream ${s} received:`,$),S.yo($)}}),O(c,Qp.STAT_EVENT,x=>{x.stat===Bc.PROXY?Z(ht,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Bc.NOPROXY&&Z(ht,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{S.fo()},0),S}}function fc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(t){return new JI(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e,n,r,s,i,o,c,l){this.oi=e,this.Go=r,this.zo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Vm(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(wn(n.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.jo===n&&this.u_(r,s)},r=>{e(()=>{const s=new se(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.c_(s)})})}u_(e,n){const r=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{r(()=>this.listener.Po())}),this.stream.To(()=>{r(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{r(()=>this.c_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j0 extends Mm{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=t0(this.serializer,e),r=function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?nn(o.readTime):ue.min()}(e);return this.listener.h_(n,r)}P_(e){const n={};n.database=Qc(this.serializer),n.addTarget=function(i,o){let c;const l=o.target;if(c=Hc(l)?{documents:s0(i,l)}:{query:i0(i,l)._t},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Rm(i,o.resumeToken);const h=Kc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=Ho(i,o.snapshotVersion.toTimestamp());const h=Kc(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c}(this.serializer,e);const r=a0(this.serializer,e);r&&(n.labels=r),this.i_(n)}I_(e){const n={};n.database=Qc(this.serializer),n.removeTarget=e,this.i_(n)}}class q0 extends Mm{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if(De(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=r0(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.A_(r,n)}return De(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=Qc(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>n0(this.serializer,r))};this.i_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H0 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new se(L.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,Wc(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new se(L.UNKNOWN,i.toString())})}xo(e,n,r,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.xo(e,Wc(n,r),s,o,c,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new se(L.UNKNOWN,o.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class z0{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(wn(n),this.y_=!1):Z("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(o=>{r.enqueueAndForget(async()=>{Or(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(l){const h=de(l);h.M_.add(4),await Di(h),h.N_.set("Unknown"),h.M_.delete(4),await Aa(h)}(this))})}),this.N_=new z0(r,s)}}async function Aa(t){if(Or(t))for(const e of t.x_)await e(!0)}async function Di(t){for(const e of t.x_)await e(!1)}function Lm(t,e){const n=de(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),ql(n)?jl(n):Ts(n).Xo()&&$l(n,e))}function Bl(t,e){const n=de(t),r=Ts(n);n.F_.delete(e),r.Xo()&&Um(n,e),n.F_.size===0&&(r.Xo()?r.n_():Or(n)&&n.N_.set("Unknown"))}function $l(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ts(t).P_(e)}function Um(t,e){t.L_.xe(e),Ts(t).I_(e)}function jl(t){t.L_=new GI({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Ts(t).start(),t.N_.w_()}function ql(t){return Or(t)&&!Ts(t).Zo()&&t.F_.size>0}function Or(t){return de(t).M_.size===0}function Fm(t){t.L_=void 0}async function W0(t){t.N_.set("Online")}async function G0(t){t.F_.forEach((e,n)=>{$l(t,e)})}async function Q0(t,e){Fm(t),ql(t)?(t.N_.D_(e),jl(t)):t.N_.set("Unknown")}async function X0(t,e,n){if(t.N_.set("Online"),e instanceof bm&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const c of i.targetIds)s.F_.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.F_.delete(c),s.L_.removeTarget(c))}(t,e)}catch(r){Z("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await zo(t,r)}else if(e instanceof bo?t.L_.Ke(e):e instanceof Am?t.L_.He(e):t.L_.We(e),!n.isEqual(ue.min()))try{const r=await Dm(t.localStore);n.compareTo(r)>=0&&await function(i,o){const c=i.L_.rt(o);return c.targetChanges.forEach((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.F_.get(h);f&&i.F_.set(h,f.withResumeToken(l.resumeToken,o))}}),c.targetMismatches.forEach((l,h)=>{const f=i.F_.get(l);if(!f)return;i.F_.set(l,f.withResumeToken(gt.EMPTY_BYTE_STRING,f.snapshotVersion)),Um(i,l);const p=new Hn(f.target,l,h,f.sequenceNumber);$l(i,p)}),i.remoteSyncer.applyRemoteEvent(c)}(t,n)}catch(r){Z("RemoteStore","Failed to raise snapshot:",r),await zo(t,r)}}async function zo(t,e,n){if(!xi(e))throw e;t.M_.add(1),await Di(t),t.N_.set("Offline"),n||(n=()=>Dm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await Aa(t)})}function Bm(t,e){return e().catch(n=>zo(t,n,e))}async function ba(t){const e=de(t),n=er(e);let r=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;Y0(e);)try{const s=await D0(e.localStore,r);if(s===null){e.v_.length===0&&n.n_();break}r=s.batchId,J0(e,s)}catch(s){await zo(e,s)}$m(e)&&jm(e)}function Y0(t){return Or(t)&&t.v_.length<10}function J0(t,e){t.v_.push(e);const n=er(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function $m(t){return Or(t)&&!er(t).Zo()&&t.v_.length>0}function jm(t){er(t).start()}async function Z0(t){er(t).V_()}async function eA(t){const e=er(t);for(const n of t.v_)e.d_(n.mutations)}async function tA(t,e,n){const r=t.v_.shift(),s=Dl.from(r,e,n);await Bm(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await ba(t)}async function nA(t,e){e&&er(t).E_&&await async function(r,s){if(function(o){return zI(o)&&o!==L.ABORTED}(s.code)){const i=r.v_.shift();er(r).t_(),await Bm(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ba(r)}}(t,e),$m(t)&&jm(t)}async function Vd(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Or(n);n.M_.add(3),await Di(n),r&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await Aa(n)}async function rA(t,e){const n=de(t);e?(n.M_.delete(2),await Aa(n)):e||(n.M_.add(2),await Di(n),n.N_.set("Unknown"))}function Ts(t){return t.B_||(t.B_=function(n,r,s){const i=de(n);return i.f_(),new j0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:W0.bind(null,t),To:G0.bind(null,t),Ao:Q0.bind(null,t),h_:X0.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),ql(t)?jl(t):t.N_.set("Unknown")):(await t.B_.stop(),Fm(t))})),t.B_}function er(t){return t.k_||(t.k_=function(n,r,s){const i=de(n);return i.f_(),new q0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:Z0.bind(null,t),Ao:nA.bind(null,t),R_:eA.bind(null,t),A_:tA.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await ba(t)):(await t.k_.stop(),t.v_.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Hl(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new se(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function zl(t,e){if(wn("AsyncQueue",`${e}: ${t}`),xi(t))return new se(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||oe.comparator(n.key,r.key):(n,r)=>oe.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new Zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.q_=new $e(oe.comparator)}track(e){const n=e.doc.key,r=this.q_.get(n);r?e.type!==0&&r.type===3?this.q_=this.q_.insert(n,e):e.type===3&&r.type!==1?this.q_=this.q_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.q_=this.q_.remove(n):e.type===1&&r.type===2?this.q_=this.q_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):ce():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,r)=>{e.push(r)}),e}}class hs{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new hs(e,n,Zr.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ya(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class iA{constructor(){this.queries=new ws(e=>lm(e),ya),this.onlineState="Unknown",this.z_=new Set}}async function qm(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.W_()&&e.G_()&&(r=2):(i=new sA,r=e.G_()?0:1);try{switch(r){case 0:i.K_=await n.onListen(s,!0);break;case 1:i.K_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=zl(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.U_.push(e),e.j_(n.onlineState),i.K_&&e.H_(i.K_)&&Kl(n)}async function Hm(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.U_.indexOf(e);o>=0&&(i.U_.splice(o,1),i.U_.length===0?s=e.G_()?0:1:!i.W_()&&e.G_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function oA(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.U_)c.H_(s)&&(r=!0);o.K_=s}}r&&Kl(n)}function aA(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.U_)i.onError(n);r.queries.delete(e)}function Kl(t){t.z_.forEach(e=>{e.next()})}var Yc,Ld;(Ld=Yc||(Yc={})).J_="default",Ld.Cache="cache";class zm{constructor(e,n,r){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=r||{}}H_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new hs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const r=n!=="Offline";return(!this.options.ra||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=hs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==Yc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Km{constructor(e){this.key=e}}class Wm{constructor(e){this.key=e}}class cA{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=_e(),this.mutatedKeys=_e(),this.Ia=um(e),this.Ta=new Zr(this.Ia)}get Ea(){return this.la}da(e,n){const r=n?n.Aa:new Md,s=n?n.Ta:this.Ta;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,p)=>{const g=s.get(f),w=va(this.query,p)?p:null,S=!!g&&this.mutatedKeys.has(g.key),O=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let x=!1;g&&w?g.data.isEqual(w.data)?S!==O&&(r.track({type:3,doc:w}),x=!0):this.Ra(g,w)||(r.track({type:2,doc:w}),x=!0,(l&&this.Ia(w,l)>0||h&&this.Ia(w,h)<0)&&(c=!0)):!g&&w?(r.track({type:0,doc:w}),x=!0):g&&!w&&(r.track({type:1,doc:g}),x=!0,(l||h)&&(c=!0)),x&&(w?(o=o.add(w),i=O?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ta:o,Aa:r,Xi:c,mutatedKeys:i}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const o=e.Aa.Q_();o.sort((f,p)=>function(w,S){const O=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ce()}};return O(w)-O(S)}(f.type,p.type)||this.Ia(f.doc,p.doc)),this.Va(r),s=s!=null&&s;const c=n&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,h=l!==this.ha;return this.ha=l,o.length!==0||h?{snapshot:new hs(this.query,e.Ta,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),fa:c}:{fa:c}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Md,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=_e(),this.Ta.forEach(r=>{this.ga(r.key)&&(this.Pa=this.Pa.add(r.key))});const n=[];return e.forEach(r=>{this.Pa.has(r)||n.push(new Wm(r))}),this.Pa.forEach(r=>{e.has(r)||n.push(new Km(r))}),n}pa(e){this.la=e.hs,this.Pa=_e();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return hs.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class lA{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class uA{constructor(e){this.key=e,this.wa=!1}}class hA{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Sa={},this.ba=new ws(c=>lm(c),ya),this.Da=new Map,this.Ca=new Set,this.va=new $e(oe.comparator),this.Fa=new Map,this.Ma=new Ll,this.xa={},this.Oa=new Map,this.Na=us.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function dA(t,e,n=!0){const r=Zm(t);let s;const i=r.ba.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await Gm(r,e,n,!0),s}async function fA(t,e){const n=Zm(t);await Gm(n,e,!0,!1)}async function Gm(t,e,n,r){const s=await V0(t.localStore,tn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let c;return r&&(c=await pA(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Lm(t.remoteStore,s),c}async function pA(t,e,n,r,s){t.Ba=(p,g,w)=>async function(O,x,j,$){let H=x.view.da(j);H.Xi&&(H=await Od(O.localStore,x.query,!1).then(({documents:I})=>x.view.da(I,H)));const Y=$&&$.targetChanges.get(x.targetId),me=$&&$.targetMismatches.get(x.targetId)!=null,J=x.view.applyChanges(H,O.isPrimaryClient,Y,me);return Fd(O,x.targetId,J.fa),J.snapshot}(t,p,g,w);const i=await Od(t.localStore,e,!0),o=new cA(e,i.hs),c=o.da(i.documents),l=Ni.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);Fd(t,n,h.fa);const f=new lA(e,n,o);return t.ba.set(e,f),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),h.snapshot}async function mA(t,e,n){const r=de(t),s=r.ba.get(e),i=r.Da.get(s.targetId);if(i.length>1)return r.Da.set(s.targetId,i.filter(o=>!ya(o,e))),void r.ba.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Xc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Bl(r.remoteStore,s.targetId),Jc(r,s.targetId)}).catch(ki)):(Jc(r,s.targetId),await Xc(r.localStore,s.targetId,!0))}async function gA(t,e){const n=de(t),r=n.ba.get(e),s=n.Da.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Bl(n.remoteStore,r.targetId))}async function _A(t,e,n){const r=AA(t);try{const s=await function(o,c){const l=de(o),h=Je.now(),f=c.reduce((w,S)=>w.add(S.key),_e());let p,g;return l.persistence.runTransaction("Locally write mutations","readwrite",w=>{let S=Tn(),O=_e();return l.os.getEntries(w,f).next(x=>{S=x,S.forEach((j,$)=>{$.isValidDocument()||(O=O.add(j))})}).next(()=>l.localDocuments.getOverlayedDocuments(w,S)).next(x=>{p=x;const j=[];for(const $ of c){const H=BI($,p.get($.key).overlayedDocument);H!=null&&j.push(new xr($.key,H,nm(H.value.mapValue),vn.exists(!0)))}return l.mutationQueue.addMutationBatch(w,h,j,c)}).next(x=>{g=x;const j=x.applyToLocalDocumentSet(p,O);return l.documentOverlayCache.saveOverlays(w,x.batchId,j)})}).then(()=>({batchId:g.batchId,changes:dm(p)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,c,l){let h=o.xa[o.currentUser.toKey()];h||(h=new $e(Re)),h=h.insert(c,l),o.xa[o.currentUser.toKey()]=h}(r,s.batchId,n),await Vi(r,s.changes),await ba(r.remoteStore)}catch(s){const i=zl(s,"Failed to persist write");n.reject(i)}}async function Qm(t,e){const n=de(t);try{const r=await O0(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Fa.get(i);o&&(De(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.wa=!0:s.modifiedDocuments.size>0?De(o.wa):s.removedDocuments.size>0&&(De(o.wa),o.wa=!1))}),await Vi(n,r,e)}catch(r){await ki(r)}}function Ud(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ba.forEach((i,o)=>{const c=o.view.j_(e);c.snapshot&&s.push(c.snapshot)}),function(o,c){const l=de(o);l.onlineState=c;let h=!1;l.queries.forEach((f,p)=>{for(const g of p.U_)g.j_(c)&&(h=!0)}),h&&Kl(l)}(r.eventManager,e),s.length&&r.Sa.h_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yA(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Fa.get(e),i=s&&s.key;if(i){let o=new $e(oe.comparator);o=o.insert(i,ft.newNoDocument(i,ue.min()));const c=_e().add(i),l=new Ta(ue.min(),new Map,new $e(Re),o,c);await Qm(r,l),r.va=r.va.remove(i),r.Fa.delete(e),Wl(r)}else await Xc(r.localStore,e,!1).then(()=>Jc(r,e,n)).catch(ki)}async function vA(t,e){const n=de(t),r=e.batch.batchId;try{const s=await x0(n.localStore,e);Ym(n,r,null),Xm(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Vi(n,s)}catch(s){await ki(s)}}async function EA(t,e,n){const r=de(t);try{const s=await function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next(p=>(De(p!==null),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p))).next(()=>l.mutationQueue.performConsistencyCheck(h)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>l.localDocuments.getDocuments(h,f))})}(r.localStore,e);Ym(r,e,n),Xm(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Vi(r,s)}catch(s){await ki(s)}}function Xm(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Ym(t,e,n){const r=de(t);let s=r.xa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.xa[r.currentUser.toKey()]=s}}function Jc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Da.get(e))t.ba.delete(r),n&&t.Sa.ka(r,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(r=>{t.Ma.containsKey(r)||Jm(t,r)})}function Jm(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(Bl(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Wl(t))}function Fd(t,e,n){for(const r of n)r instanceof Km?(t.Ma.addReference(r.key,e),wA(t,r)):r instanceof Wm?(Z("SyncEngine","Document no longer in limbo: "+r.key),t.Ma.removeReference(r.key,e),t.Ma.containsKey(r.key)||Jm(t,r.key)):ce()}function wA(t,e){const n=e.key,r=n.path.canonicalString();t.va.get(n)||t.Ca.has(r)||(Z("SyncEngine","New document in limbo: "+n),t.Ca.add(r),Wl(t))}function Wl(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new oe(Le.fromString(e)),r=t.Na.next();t.Fa.set(r,new uA(n)),t.va=t.va.insert(n,r),Lm(t.remoteStore,new Hn(tn(Nl(n.path)),r,"TargetPurposeLimboResolution",Pl.oe))}}async function Vi(t,e,n){const r=de(t),s=[],i=[],o=[];r.ba.isEmpty()||(r.ba.forEach((c,l)=>{o.push(r.Ba(l,e,n).then(h=>{if((h||n)&&r.isPrimaryClient){const f=h&&!h.fromCache;r.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(h){s.push(h);const f=Fl.Ki(l.targetId,h);i.push(f)}}))}),await Promise.all(o),r.Sa.h_(s),await async function(l,h){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",p=>U.forEach(h,g=>U.forEach(g.qi,w=>f.persistence.referenceDelegate.addReference(p,g.targetId,w)).next(()=>U.forEach(g.Qi,w=>f.persistence.referenceDelegate.removeReference(p,g.targetId,w)))))}catch(p){if(!xi(p))throw p;Z("LocalStore","Failed to update sequence numbers: "+p)}for(const p of h){const g=p.targetId;if(!p.fromCache){const w=f.ns.get(g),S=w.snapshotVersion,O=w.withLastLimboFreeSnapshotVersion(S);f.ns=f.ns.insert(g,O)}}}(r.localStore,i))}async function TA(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await Nm(n.localStore,e);n.currentUser=e,function(i,o){i.Oa.forEach(c=>{c.forEach(l=>{l.reject(new se(L.CANCELLED,o))})}),i.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Vi(n,r.us)}}function IA(t,e){const n=de(t),r=n.Fa.get(e);if(r&&r.wa)return _e().add(r.key);{let s=_e();const i=n.Da.get(e);if(!i)return s;for(const o of i){const c=n.ba.get(o);s=s.unionWith(c.view.Ea)}return s}}function Zm(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Qm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=IA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yA.bind(null,e),e.Sa.h_=oA.bind(null,e.eventManager),e.Sa.ka=aA.bind(null,e.eventManager),e}function AA(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=EA.bind(null,e),e}class Bd{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ia(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return k0(this.persistence,new S0,e.initialUser,this.serializer)}createPersistence(e){return new b0(Ul.Hr,this.serializer)}createSharedClientState(e){return new L0}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class bA{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ud(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TA.bind(null,this.syncEngine),await rA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new iA}()}createDatastore(e){const n=Ia(e.databaseInfo.databaseId),r=function(i){return new $0(i)}(e.databaseInfo);return function(i,o,c,l){return new H0(i,o,c,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,c){return new K0(r,s,i,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>Ud(this.syncEngine,n,0),function(){return Dd.D()?new Dd:new U0}())}createSyncEngine(e,n){return function(s,i,o,c,l,h,f){const p=new hA(s,i,o,c,l,h);return f&&(p.La=!0),p}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=de(r);Z("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await Di(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eg{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=dt.UNAUTHENTICATED,this.clientId=Zp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{Z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(Z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new se(L.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=zl(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function pc(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Nm(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function $d(t,e){t.asyncQueue.verifyOperationInProgress();const n=await SA(t);Z("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Vd(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Vd(e.remoteStore,s)),t._onlineComponents=e}function PA(t){return t.name==="FirebaseError"?t.code===L.FAILED_PRECONDITION||t.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function SA(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await pc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!PA(n))throw n;os("Error using user provided cache. Falling back to memory cache: "+n),await pc(t,new Bd)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await pc(t,new Bd);return t._offlineComponents}async function tg(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await $d(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await $d(t,new bA))),t._onlineComponents}function CA(t){return tg(t).then(e=>e.syncEngine)}async function ng(t){const e=await tg(t),n=e.eventManager;return n.onListen=dA.bind(null,e.syncEngine),n.onUnlisten=mA.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=fA.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=gA.bind(null,e.syncEngine),n}function kA(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new eg({next:g=>{o.enqueueAndForget(()=>Hm(i,p));const w=g.docs.has(c);!w&&g.fromCache?h.reject(new se(L.UNAVAILABLE,"Failed to get document because the client is offline.")):w&&g.fromCache&&l&&l.source==="server"?h.reject(new se(L.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new zm(Nl(c.path),f,{includeMetadataChanges:!0,ra:!0});return qm(i,p)}(await ng(t),t.asyncQueue,e,n,r)),r.promise}function xA(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,c,l,h){const f=new eg({next:g=>{o.enqueueAndForget(()=>Hm(i,p)),g.fromCache&&l.source==="server"?h.reject(new se(L.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),p=new zm(c,f,{includeMetadataChanges:!0,ra:!0});return qm(i,p)}(await ng(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jd=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(t,e,n){if(!n)throw new se(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function OA(t,e,n,r){if(e===!0&&r===!0)throw new se(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function qd(t){if(!oe.isDocumentKey(t))throw new se(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Hd(t){if(oe.isDocumentKey(t))throw new se(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Gl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ce()}function ds(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new se(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gl(t);throw new se(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new se(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new se(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}OA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rg((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new se(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new se(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new se(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ra{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new zd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new se(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new se(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new zd(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new QT;switch(r.type){case"firstParty":return new ZT(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new se(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=jd.get(n);r&&(Z("ComponentProvider","Removing Datastore"),jd.delete(n),r.terminate())}(this),Promise.resolve()}}function NA(t,e,n,r={}){var s;const i=(t=ds(t,Ra))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&os("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let c,l;if(typeof r.mockUserToken=="string")c=r.mockUserToken,l=dt.MOCK_USER;else{c=Fp(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new se(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new dt(h)}t._authCredentials=new XT(new Jp(c,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Pa(this.firestore,e,this._query)}}class Ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ft(this.firestore,e,this._key)}}class Qn extends Pa{constructor(e,n,r){super(e,n,Nl(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ft(this.firestore,null,new oe(e))}withConverter(e){return new Qn(this.firestore,e,this._path)}}function ig(t,e,...n){if(t=nt(t),sg("collection","path",e),t instanceof Ra){const r=Le.fromString(e,...n);return Hd(r),new Qn(t,null,r)}{if(!(t instanceof Ft||t instanceof Qn))throw new se(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return Hd(r),new Qn(t.firestore,null,r)}}function og(t,e,...n){if(t=nt(t),arguments.length===1&&(e=Zp.newId()),sg("doc","path",e),t instanceof Ra){const r=Le.fromString(e,...n);return qd(r),new Ft(t,null,new oe(r))}{if(!(t instanceof Ft||t instanceof Qn))throw new se(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Le.fromString(e,...n));return qd(r),new Ft(t.firestore,t instanceof Qn?t.converter:null,new oe(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Vm(this,"async_queue_retry"),this.hu=()=>{const n=fc();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=fc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=fc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new yn;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!xi(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const s=function(o){let c=o.message||"";return o.stack&&(c=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),c}(r);throw wn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const s=Hl.createAndSchedule(this,e,n,r,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&ce()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Sa extends Ra{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new DA}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ag(this),this._firestoreClient.terminate()}}function VA(t,e){const n=typeof t=="object"?t:bl(),r=typeof t=="string"?t:"(default)",s=ma(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Mp("firestore");i&&NA(s,...i)}return s}function Ql(t){return t._firestoreClient||ag(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function ag(t){var e,n,r;const s=t._freezeSettings(),i=function(c,l,h,f){return new dI(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,rg(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new RA(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fs(gt.fromBase64String(e))}catch(n){throw new se(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fs(gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new se(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new se(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new se(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=/^__.*__$/;class LA{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Oi(e,this.data,n,this.fieldTransforms)}}function lg(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ce()}}class Jl{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new Jl(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.wu(e),s}Su(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.gu({path:r,yu:!1});return s.mu(),s}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Ko(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(lg(this.fu)&&MA.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class UA{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ia(e)}Fu(e,n,r,s=!1){return new Jl({fu:e,methodName:n,vu:r,path:ot.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function FA(t){const e=t._freezeSettings(),n=Ia(t._databaseId);return new UA(t._databaseId,!!e.ignoreUndefinedProperties,n)}function BA(t,e,n,r,s,i={}){const o=t.Fu(i.merge||i.mergeFields?2:0,e,n,s);fg("Data must be an object, but it was:",o,r);const c=hg(r,o);let l,h;if(i.merge)l=new Ht(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const g=$A(e,p,n);if(!o.contains(g))throw new se(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);qA(f,g)||f.push(g)}l=new Ht(f),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new LA(new Lt(c),l,h)}function ug(t,e){if(dg(t=nt(t)))return fg("Unsupported field value:",e,t),hg(t,e);if(t instanceof cg)return function(r,s){if(!lg(s.fu))throw s.Du(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const c of r){let l=ug(c,s.bu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=nt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DI(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Je.fromDate(r);return{timestampValue:Ho(s.serializer,i)}}if(r instanceof Je){const i=new Je(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ho(s.serializer,i)}}if(r instanceof Yl)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fs)return{bytesValue:Rm(s.serializer,r._byteString)};if(r instanceof Ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Du(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ml(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Du(`Unsupported field value: ${Gl(r)}`)}(t,e)}function hg(t,e){const n={};return em(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Es(t,(r,s)=>{const i=ug(s,e.pu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function dg(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Je||t instanceof Yl||t instanceof fs||t instanceof Ft||t instanceof cg)}function fg(t,e,n){if(!dg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Gl(n);throw r==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+r)}}function $A(t,e,n){if((e=nt(e))instanceof Xl)return e._internalPath;if(typeof e=="string")return pg(t,e);throw Ko("Field path arguments must be of type string or ",t,!1,void 0,n)}const jA=new RegExp("[~\\*/\\[\\]]");function pg(t,e,n){if(e.search(jA)>=0)throw Ko(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Xl(...e.split("."))._internalPath}catch{throw Ko(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ko(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new se(L.INVALID_ARGUMENT,c+t+l)}function qA(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mg{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new HA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(gg("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class HA extends mg{data(){return super.data()}}function gg(t,e){return typeof e=="string"?pg(t,e):e instanceof Xl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zA(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new se(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class KA{convertValue(e,n="none"){switch(br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ge(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ar(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ce()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Es(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Yl(Ge(e.latitude),Ge(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Cl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ei(e));default:return null}}convertTimestamp(e){const n=Zn(e);return new Je(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Le.fromString(e);De(Om(r));const s=new wi(r.get(1),r.get(3)),i=new oe(r.popFirst(5));return s.isEqual(n)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WA(t,e,n){let r;return r=t?t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class _g extends mg{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ro(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(gg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ro extends _g{data(e={}){return super.data(e)}}class GA{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Xs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ro(this._firestore,this._userDataWriter,r.key,r,new Xs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new se(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const l=new Ro(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Xs(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:QA(c.type),doc:l,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function QA(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ce()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(t){t=ds(t,Ft);const e=ds(t.firestore,Sa);return kA(Ql(e),t._key).then(n=>eb(e,t,n))}class yg extends KA{constructor(e){super(),this.firestore=e}convertBytes(e){return new fs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ft(this.firestore,null,n)}}function YA(t){t=ds(t,Pa);const e=ds(t.firestore,Sa),n=Ql(e),r=new yg(e);return zA(t._query),xA(n,t._query).then(s=>new GA(e,r,t,s))}function JA(t,e){const n=ds(t.firestore,Sa),r=og(t),s=WA(t.converter,e);return ZA(n,[BA(FA(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vn.exists(!1))]).then(()=>r)}function ZA(t,e){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>_A(await CA(r),s,i)),i.promise}(Ql(t),e)}function eb(t,e,n){const r=n.docs.get(e._key),s=new yg(t);return new _g(t,s,e._key,r,new Xs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){vs=s})(kr),Tr(new Yn("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Sa(new YT(r.getProvider("auth-internal")),new tI(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new se(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wi(h.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),en(dd,"4.6.3",e),en(dd,"4.6.3","esm2017")})();function Zl(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tb=vg,Eg=new Si("auth","Firebase",vg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo=new Il("@firebase/auth");function nb(t,...e){Wo.logLevel<=ve.WARN&&Wo.warn(`Auth (${kr}): ${t}`,...e)}function Po(t,...e){Wo.logLevel<=ve.ERROR&&Wo.error(`Auth (${kr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t,...e){throw eu(t,...e)}function rn(t,...e){return eu(t,...e)}function wg(t,e,n){const r=Object.assign(Object.assign({},tb()),{[e]:n});return new Si("auth","Firebase",r).create(e,{appName:t.name})}function En(t){return wg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function eu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Eg.create(t,...e)}function ae(t,e,...n){if(!t)throw eu(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Po(e),new Error(e)}function In(t,e){t||pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function rb(){return Kd()==="http:"||Kd()==="https:"}function Kd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sb(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rb()||Sw()||"connection"in navigator)?navigator.onLine:!0}function ib(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,In(n>e,"Short delay should be less than long delay!"),this.isMobile=Rw()||Cw()}get(){return sb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t,e){In(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=new Mi(3e4,6e4);function rr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sr(t,e,n,r,s={}){return Ig(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=Ci(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Tg.fetch()(Ag(t,t.config.apiHost,n,c),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function Ig(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ob),e);try{const s=new lb(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ho(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw wg(t,f,h);Wt(t,f)}}catch(s){if(s instanceof un)throw s;Wt(t,"network-request-failed",{message:String(s)})}}async function Li(t,e,n,r,s={}){const i=await sr(t,e,n,r,s);return"mfaPendingCredential"in i&&Wt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Ag(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?tu(t.config,s):`${t.config.apiScheme}://${s}`}function cb(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class lb{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(rn(this.auth,"network-request-failed")),ab.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=rn(t,e,r);return s.customData._tokenResponse=n,s}function Wd(t){return t!==void 0&&t.enterprise!==void 0}class ub{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return cb(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function hb(t,e){return sr(t,"GET","/v2/recaptchaConfig",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(t,e){return sr(t,"POST","/v1/accounts:delete",e)}async function bg(t,e){return sr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fb(t,e=!1){const n=nt(t),r=await n.getIdToken(e),s=nu(r);ae(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:li(mc(s.auth_time)),issuedAtTime:li(mc(s.iat)),expirationTime:li(mc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function mc(t){return Number(t)*1e3}function nu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Po("JWT malformed, contained fewer than 3 sections"),null;try{const s=Dp(n);return s?JSON.parse(s):(Po("Failed to decode base64 JWT payload"),null)}catch(s){return Po("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gd(t){const e=nu(t);return ae(e,"internal-error"),ae(typeof e.exp<"u","internal-error"),ae(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof un&&pb(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function pb({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=li(this.lastLoginAt),this.creationTime=li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Go(t){var e;const n=t.auth,r=await t.getIdToken(),s=await bi(t,bg(n,{idToken:r}));ae(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Rg(i.providerUserInfo):[],c=_b(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new el(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function gb(t){const e=nt(t);await Go(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function _b(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Rg(t){return t.map(e=>{var{providerId:n}=e,r=Zl(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yb(t,e){const n=await Ig(t,{},async()=>{const r=Ci({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Ag(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Tg.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vb(t,e){return sr(t,"POST","/v2/accounts:revokeToken",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ae(e.idToken,"internal-error"),ae(typeof e.idToken<"u","internal-error"),ae(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ae(e.length!==0,"internal-error");const n=Gd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ae(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yb(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new es;return r&&(ae(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ae(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ae(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new es,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){ae(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Zl(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new el(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await bi(this,this.stsTokenManager.getToken(this.auth,e));return ae(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return fb(this,e)}reload(){return gb(this)}_assign(e){this!==e&&(ae(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ae(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Go(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(En(this.auth));const e=await this.getIdToken();return await bi(this,db(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(h=n.createdAt)!==null&&h!==void 0?h:void 0,$=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:H,emailVerified:Y,isAnonymous:me,providerData:J,stsTokenManager:I}=n;ae(H&&I,e,"internal-error");const _=es.fromJSON(this.name,I);ae(typeof H=="string",e,"internal-error"),On(p,e.name),On(g,e.name),ae(typeof Y=="boolean",e,"internal-error"),ae(typeof me=="boolean",e,"internal-error"),On(w,e.name),On(S,e.name),On(O,e.name),On(x,e.name),On(j,e.name),On($,e.name);const E=new mn({uid:H,auth:e,email:g,emailVerified:Y,displayName:p,isAnonymous:me,photoURL:S,phoneNumber:w,tenantId:O,stsTokenManager:_,createdAt:j,lastLoginAt:$});return J&&Array.isArray(J)&&(E.providerData=J.map(T=>Object.assign({},T))),x&&(E._redirectEventId=x),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new es;s.updateFromServerResponse(n);const i=new mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Go(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ae(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Rg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new es;c.updateFromIdToken(r);const l=new mn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new el(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd=new Map;function gn(t){In(t instanceof Function,"Expected a class definition");let e=Qd.get(t);return e?(In(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Pg.type="NONE";const Xd=Pg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t,e,n){return`firebase:${t}:${e}:${n}`}class ts{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=So(this.userKey,s.apiKey,i),this.fullPersistenceKey=So("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ts(gn(Xd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||gn(Xd);const o=So(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const p=mn._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ts(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ts(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Sg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Og(e))return"Blackberry";if(Ng(e))return"Webos";if(ru(e))return"Safari";if((e.includes("chrome/")||Cg(e))&&!e.includes("edge/"))return"Chrome";if(xg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sg(t=ct()){return/firefox\//i.test(t)}function ru(t=ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Cg(t=ct()){return/crios\//i.test(t)}function kg(t=ct()){return/iemobile/i.test(t)}function xg(t=ct()){return/android/i.test(t)}function Og(t=ct()){return/blackberry/i.test(t)}function Ng(t=ct()){return/webos/i.test(t)}function Ca(t=ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Eb(t=ct()){var e;return Ca(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wb(){return kw()&&document.documentMode===10}function Dg(t=ct()){return Ca(t)||xg(t)||Ng(t)||Og(t)||/windows phone/i.test(t)||kg(t)}function Tb(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vg(t,e=[]){let n;switch(t){case"Browser":n=Yd(ct());break;case"Worker":n=`${Yd(ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${kr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ib{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ab(t,e={}){return sr(t,"GET","/v2/passwordPolicy",rr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb=6;class Rb{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:bb,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jd(this),this.idTokenSubscription=new Jd(this),this.beforeStateQueue=new Ib(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Eg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ts.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await bg(this,{idToken:e}),r=await mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ae(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Go(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ib()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(En(this));const n=e?nt(e):null;return n&&ae(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ae(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(En(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(En(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ab(this),n=new Rb(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Si("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vb(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;ae(n,this,"argument-error"),this.redirectPersistenceManager=await ts.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ae(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ae(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&nb(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Nr(t){return nt(t)}class Jd{constructor(e){this.auth=e,this.observer=null,this.addObserver=Uw(n=>this.observer=n)}get next(){return ae(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ka={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Sb(t){ka=t}function Mg(t){return ka.loadJS(t)}function Cb(){return ka.recaptchaEnterpriseScript}function kb(){return ka.gapiScript}function xb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const Ob="recaptcha-enterprise",Nb="NO_RECAPTCHA";class Db{constructor(e){this.type=Ob,this.auth=Nr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{hb(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new ub(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Wd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Nb)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Wd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=Cb();l.length!==0&&(l+=c),Mg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function Zd(t,e,n,r=!1){const s=new Db(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function tl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Zd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Zd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vb(t,e){const n=ma(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Lo(i,e??{}))return s;Wt(s,"already-initialized")}return n.initialize({options:e})}function Mb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Lb(t,e,n){const r=Nr(t);ae(r._canInitEmulator,r,"emulator-config-failed"),ae(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Lg(e),{host:o,port:c}=Ub(e),l=c===null?"":`:${c}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),Fb()}function Lg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Ub(t){const e=Lg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:ef(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:ef(o)}}}function ef(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Fb(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function Bb(t,e){return sr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $b(t,e){return Li(t,"POST","/v1/accounts:signInWithPassword",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jb(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}async function qb(t,e){return Li(t,"POST","/v1/accounts:signInWithEmailLink",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends su{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tl(e,n,"signInWithPassword",$b);case"emailLink":return jb(e,{email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return tl(e,r,"signUpPassword",Bb);case"emailLink":return qb(e,{idToken:n,email:this._email,oobCode:this._password});default:Wt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ns(t,e){return Li(t,"POST","/v1/accounts:signInWithIdp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb="http://localhost";class Rr extends su{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Wt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Zl(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ns(e,n)}buildRequest(){const e={requestUri:Hb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ci(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zb(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Kb(t){const e=zs(Ks(t)).link,n=e?zs(Ks(e)).deep_link_id:null,r=zs(Ks(t)).deep_link_id;return(r?zs(Ks(r)).link:null)||r||n||e||t}class iu{constructor(e){var n,r,s,i,o,c;const l=zs(Ks(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=zb((s=l.mode)!==null&&s!==void 0?s:null);ae(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=Kb(e);try{return new iu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(){this.providerId=Is.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=iu.parseLink(n);return ae(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}Is.PROVIDER_ID="password";Is.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Is.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui extends Ug{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Ui{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Ui{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.GOOGLE_SIGN_IN_METHOD="google.com";Un.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Ui{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.GITHUB_SIGN_IN_METHOD="github.com";Fn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn extends Ui{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Bn.PROVIDER_ID,signInMethod:Bn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Bn.credentialFromTaggedObject(e)}static credentialFromError(e){return Bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Bn.credential(n,r)}catch{return null}}}Bn.TWITTER_SIGN_IN_METHOD="twitter.com";Bn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wb(t,e){return Li(t,"POST","/v1/accounts:signUp",rr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await mn._fromIdTokenResponse(e,r,s),o=tf(r);return new Pr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=tf(r);return new Pr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function tf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qo extends un{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Qo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Qo(e,n,r,s)}}function Fg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Qo._fromErrorAndOperation(t,i,e,r):i})}async function Gb(t,e,n=!1){const r=await bi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qb(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(En(r));const s="reauthenticate";try{const i=await bi(t,Fg(r,s,e,t),n);ae(i.idToken,r,"internal-error");const o=nu(i.idToken);ae(o,r,"internal-error");const{sub:c}=o;return ae(t.uid===c,r,"user-mismatch"),Pr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Wt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bg(t,e,n=!1){if(Jt(t.app))return Promise.reject(En(t));const r="signIn",s=await Fg(t,r,e),i=await Pr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Xb(t,e){return Bg(Nr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $g(t){const e=Nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Yb(t,e,n){if(Jt(t.app))return Promise.reject(En(t));const r=Nr(t),o=await tl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Wb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&$g(t),l}),c=await Pr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Jb(t,e,n){return Jt(t.app)?Promise.reject(En(t)):Xb(nt(t),Is.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&$g(t),r})}function Zb(t,e,n,r){return nt(t).onIdTokenChanged(e,n,r)}function eR(t,e,n){return nt(t).beforeAuthStateChanged(e,n)}function tR(t,e,n,r){return nt(t).onAuthStateChanged(e,n,r)}function nR(t){return nt(t).signOut()}const Xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(){const t=ct();return ru(t)||Ca(t)}const sR=1e3,iR=10;class qg extends jg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=rR()&&Tb(),this.fallbackToPolling=Dg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wb()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,iR):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},sR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qg.type="LOCAL";const oR=qg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg extends jg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Hg.type="SESSION";const zg=Hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await aR(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ou(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=ou("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(){return window}function lR(t){sn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kg(){return typeof sn().WorkerGlobalScope<"u"&&typeof sn().importScripts=="function"}async function uR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function hR(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function dR(){return Kg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="firebaseLocalStorageDb",fR=1,Yo="firebaseLocalStorage",Gg="fbase_key";class Fi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function pR(){const t=indexedDB.deleteDatabase(Wg);return new Fi(t).toPromise()}function nl(){const t=indexedDB.open(Wg,fR);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:Gg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await pR(),e(await nl()))})})}async function nf(t,e,n){const r=Oa(t,!0).put({[Gg]:e,value:n});return new Fi(r).toPromise()}async function mR(t,e){const n=Oa(t,!1).get(e),r=await new Fi(n).toPromise();return r===void 0?null:r.value}function rf(t,e){const n=Oa(t,!0).delete(e);return new Fi(n).toPromise()}const gR=800,_R=3;class Qg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_R)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(dR()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uR(),!this.activeServiceWorker)return;this.sender=new cR(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||hR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nl();return await nf(e,Xo,"1"),await rf(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>nf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>mR(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>rf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oa(s,!1).getAll();return new Fi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qg.type="LOCAL";const yR=Qg;new Mi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t,e){return e?gn(e):(ae(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au extends su{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ER(t){return Bg(t.auth,new au(t),t.bypassAuthState)}function wR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Qb(n,new au(t),t.bypassAuthState)}async function TR(t){const{auth:e,user:n}=t;return ae(n,e,"internal-error"),Gb(n,new au(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ER;case"linkViaPopup":case"linkViaRedirect":return TR;case"reauthViaPopup":case"reauthViaRedirect":return wR;default:Wt(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR=new Mi(2e3,1e4);class Gr extends Xg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Gr.currentPopupAction&&Gr.currentPopupAction.cancel(),Gr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ae(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=ou();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,IR.get())};e()}}Gr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="pendingRedirect",Co=new Map;class bR extends Xg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await RR(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RR(t,e){const n=CR(e),r=SR(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function PR(t,e){Co.set(t._key(),e)}function SR(t){return gn(t._redirectPersistence)}function CR(t){return So(AR,t.config.apiKey,t.name)}async function kR(t,e,n=!1){if(Jt(t.app))return Promise.reject(En(t));const r=Nr(t),s=vR(r,e),o=await new bR(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xR=10*60*1e3;class OR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(rn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xR&&this.cachedEventUids.clear(),this.cachedEventUids.has(sf(e))}saveEventToCache(e){this.cachedEventUids.add(sf(e)),this.lastProcessedEventTime=Date.now()}}function sf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e={}){return sr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MR=/^https?/;async function LR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await DR(t);for(const n of e)try{if(UR(n))return}catch{}Wt(t,"unauthorized-domain")}function UR(t){const e=Zc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!MR.test(n))return!1;if(VR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR=new Mi(3e4,6e4);function of(){const t=sn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BR(t){return new Promise((e,n)=>{var r,s,i;function o(){of(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{of(),n(rn(t,"network-request-failed"))},timeout:FR.get()})}if(!((s=(r=sn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=sn().gapi)===null||i===void 0)&&i.load)o();else{const c=xb("iframefcb");return sn()[c]=()=>{gapi.load?o():n(rn(t,"network-request-failed"))},Mg(`${kb()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ko=null,e})}let ko=null;function $R(t){return ko=ko||BR(t),ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jR=new Mi(5e3,15e3),qR="__/auth/iframe",HR="emulator/auth/iframe",zR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},KR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function WR(t){const e=t.config;ae(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?tu(e,HR):`https://${t.config.authDomain}/${qR}`,r={apiKey:e.apiKey,appName:t.name,v:kr},s=KR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ci(r).slice(1)}`}async function GR(t){const e=await $R(t),n=sn().gapi;return ae(n,t,"internal-error"),e.open({where:document.body,url:WR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=rn(t,"network-request-failed"),c=sn().setTimeout(()=>{i(o)},jR.get());function l(){sn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XR=500,YR=600,JR="_blank",ZR="http://localhost";class af{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eP(t,e,n,r=XR,s=YR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},QR),{width:r.toString(),height:s.toString(),top:i,left:o}),h=ct().toLowerCase();n&&(c=Cg(h)?JR:n),Sg(h)&&(e=e||ZR,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[w,S])=>`${g}${w}=${S},`,"");if(Eb(h)&&c!=="_self")return tP(e||"",c),new af(null);const p=window.open(e||"",c,f);ae(p,t,"popup-blocked");try{p.focus()}catch{}return new af(p)}function tP(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nP="__/auth/handler",rP="emulator/auth/handler",sP=encodeURIComponent("fac");async function cf(t,e,n,r,s,i){ae(t.config.authDomain,t,"auth-domain-config-required"),ae(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:kr,eventId:s};if(e instanceof Ug){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Lw(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Ui){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${sP}=${encodeURIComponent(l)}`:"";return`${iP(t)}?${Ci(c).slice(1)}${h}`}function iP({config:t}){return t.emulator?tu(t,rP):`https://${t.authDomain}/${nP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gc="webStorageSupport";class oP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zg,this._completeRedirectFn=kR,this._overrideRedirectResult=PR}async _openPopup(e,n,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await cf(e,n,r,Zc(),s);return eP(e,o,ou())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await cf(e,n,r,Zc(),s);return lR(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await GR(e),r=new OR(e);return n.register("authEvent",s=>(ae(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(gc,{type:gc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[gc];o!==void 0&&n(!!o),Wt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dg()||ru()||Ca()}}const aP=oP;var lf="@firebase/auth",uf="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ae(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uP(t){Tr(new Yn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ae(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vg(t)},h=new Pb(r,s,i,l);return Mb(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new Yn("auth-internal",e=>{const n=Nr(e.getProvider("auth").getImmediate());return(r=>new cP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),en(lf,uf,lP(t)),en(lf,uf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hP=5*60,dP=Up("authIdTokenMaxAge")||hP;let hf=null;const fP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dP)return;const s=n==null?void 0:n.token;hf!==s&&(hf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pP(t=bl()){const e=ma(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Vb(t,{popupRedirectResolver:aP,persistence:[yR,oR,zg]}),r=Up("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fP(i.toString());eR(n,o,()=>o(n.currentUser)),Zb(n,c=>o(c))}}const s=Vp("auth");return s&&Lb(n,`http://${s}`),n}function mP(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Sb({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=rn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",mP().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uP("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jg="firebasestorage.googleapis.com",Zg="storageBucket",gP=2*60*1e3,_P=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze extends un{constructor(e,n,r=0){super(_c(e),`Firebase Storage: ${n} (${_c(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ze.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return _c(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var He;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(He||(He={}));function _c(t){return"storage/"+t}function cu(){const t="An unknown error occurred, please check the error payload for server response.";return new ze(He.UNKNOWN,t)}function yP(t){return new ze(He.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vP(t){return new ze(He.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function EP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ze(He.UNAUTHENTICATED,t)}function wP(){return new ze(He.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function TP(t){return new ze(He.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function IP(){return new ze(He.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function AP(){return new ze(He.CANCELED,"User canceled the upload/download.")}function bP(t){return new ze(He.INVALID_URL,"Invalid URL '"+t+"'.")}function RP(t){return new ze(He.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function PP(){return new ze(He.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Zg+"' property when initializing the app?")}function SP(){return new ze(He.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function CP(){return new ze(He.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function kP(t){return new ze(He.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function rl(t){return new ze(He.INVALID_ARGUMENT,t)}function e_(){return new ze(He.APP_DELETED,"The Firebase app was deleted.")}function xP(t){return new ze(He.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ui(t,e){return new ze(He.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function qs(t){throw new ze(He.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Nt.makeFromUrl(e,n)}catch{return new Nt(e,"")}if(r.path==="")return r;throw RP(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(Y){Y.path.charAt(Y.path.length-1)==="/"&&(Y.path_=Y.path_.slice(0,-1))}const o="(/(.*))?$",c=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function h(Y){Y.path_=decodeURIComponent(Y.path)}const f="v[A-Za-z0-9_]+",p=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",w=new RegExp(`^https?://${p}/${f}/b/${s}/o${g}`,"i"),S={bucket:1,path:3},O=n===Jg?"(?:storage.googleapis.com|storage.cloud.google.com)":n,x="([^?#]*)",j=new RegExp(`^https?://${O}/${s}/${x}`,"i"),H=[{regex:c,indices:l,postModify:i},{regex:w,indices:S,postModify:h},{regex:j,indices:{bucket:1,path:2},postModify:h}];for(let Y=0;Y<H.length;Y++){const me=H[Y],J=me.regex.exec(e);if(J){const I=J[me.indices.bucket];let _=J[me.indices.path];_||(_=""),r=new Nt(I,_),me.postModify(r);break}}if(r==null)throw bP(e);return r}}class OP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NP(t,e,n){let r=1,s=null,i=null,o=!1,c=0;function l(){return c===2}let h=!1;function f(...x){h||(h=!0,e.apply(null,x))}function p(x){s=setTimeout(()=>{s=null,t(w,l())},x)}function g(){i&&clearTimeout(i)}function w(x,...j){if(h){g();return}if(x){g(),f.call(null,x,...j);return}if(l()||o){g(),f.call(null,x,...j);return}r<64&&(r*=2);let H;c===1?(c=2,H=0):H=(r+Math.random())*1e3,p(H)}let S=!1;function O(x){S||(S=!0,g(),!h&&(s!==null?(x||(c=2),clearTimeout(s),p(0)):x||(c=1)))}return p(0),i=setTimeout(()=>{o=!0,O(!0)},n),O}function DP(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t){return t!==void 0}function MP(t){return typeof t=="object"&&!Array.isArray(t)}function lu(t){return typeof t=="string"||t instanceof String}function df(t){return uu()&&t instanceof Blob}function uu(){return typeof Blob<"u"}function ff(t,e,n,r){if(r<e)throw rl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw rl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function t_(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(vr||(vr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LP(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,s,i,o,c,l,h,f,p,g=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=c,this.errorCallback_=l,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=p,this.retry=g,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((w,S)=>{this.resolve_=w,this.reject_=S,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new fo(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=c=>{const l=c.loaded,h=c.lengthComputable?c.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,h)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const c=i.getErrorCode()===vr.NO_ERROR,l=i.getStatus();if(!c||LP(l,this.additionalRetryCodes_)&&this.retry){const f=i.getErrorCode()===vr.ABORT;r(!1,new fo(!1,null,f));return}const h=this.successCodes_.indexOf(l)!==-1;r(!0,new fo(h,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,c=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(c,c.getResponse());VP(l)?i(l):i()}catch(l){o(l)}else if(c!==null){const l=cu();l.serverResponse=c.getErrorText(),this.errorCallback_?o(this.errorCallback_(c,l)):o(l)}else if(s.canceled){const l=this.appDelete_?e_():AP();o(l)}else{const l=IP();o(l)}};this.canceled_?n(!1,new fo(!1,null,!0)):this.backoffId_=NP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&DP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function FP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function BP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function $P(t,e){e&&(t["X-Firebase-GMPID"]=e)}function jP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function qP(t,e,n,r,s,i,o=!0){const c=t_(t.urlParams),l=t.url+c,h=Object.assign({},t.headers);return $P(h,e),FP(h,n),BP(h,i),jP(h,r),new UP(l,t.method,h,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function zP(...t){const e=HP();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(uu())return new Blob(t);throw new ze(He.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function KP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WP(t){if(typeof atob>"u")throw kP("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class yc{constructor(e,n){this.data=e,this.contentType=n||null}}function GP(t,e){switch(t){case Zt.RAW:return new yc(n_(e));case Zt.BASE64:case Zt.BASE64URL:return new yc(r_(t,e));case Zt.DATA_URL:return new yc(XP(e),YP(e))}throw cu()}function n_(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function QP(t){let e;try{e=decodeURIComponent(t)}catch{throw ui(Zt.DATA_URL,"Malformed data URL.")}return n_(e)}function r_(t,e){switch(t){case Zt.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Zt.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=WP(e)}catch(s){throw s.message.includes("polyfill")?s:ui(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class s_{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ui(Zt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=JP(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function XP(t){const e=new s_(t);return e.base64?r_(Zt.BASE64,e.rest):QP(e.rest)}function YP(t){return new s_(t).contentType}function JP(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n{constructor(e,n){let r=0,s="";df(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(df(this.data_)){const r=this.data_,s=KP(r,e,n);return s===null?null:new $n(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new $n(r,!0)}}static getBlob(...e){if(uu()){const n=e.map(r=>r instanceof $n?r.data_:r);return new $n(zP.apply(null,n))}else{const n=e.map(o=>lu(o)?GP(Zt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let c=0;c<o.length;c++)s[i++]=o[c]}),new $n(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(t){let e;try{e=JSON.parse(t)}catch{return null}return MP(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function eS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function o_(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t,e){return e}class Et{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||tS}}let po=null;function nS(t){return!lu(t)||t.length<2?t:o_(t)}function a_(){if(po)return po;const t=[];t.push(new Et("bucket")),t.push(new Et("generation")),t.push(new Et("metageneration")),t.push(new Et("name","fullPath",!0));function e(i,o){return nS(o)}const n=new Et("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new Et("size");return s.xform=r,t.push(s),t.push(new Et("timeCreated")),t.push(new Et("updated")),t.push(new Et("md5Hash",null,!0)),t.push(new Et("cacheControl",null,!0)),t.push(new Et("contentDisposition",null,!0)),t.push(new Et("contentEncoding",null,!0)),t.push(new Et("contentLanguage",null,!0)),t.push(new Et("contentType",null,!0)),t.push(new Et("metadata","customMetadata",!0)),po=t,po}function rS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Nt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function sS(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return rS(r,t),r}function c_(t,e,n){const r=i_(e);return r===null?null:sS(t,r,n)}function iS(t,e,n,r){const s=i_(e);if(s===null||!lu(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(h=>{const f=t.bucket,p=t.fullPath,g="/b/"+o(f)+"/o/"+o(p),w=hu(g,n,r),S=t_({alt:"media",token:h});return w+S})[0]}function oS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class l_{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){if(!t)throw cu()}function aS(t,e){function n(r,s){const i=c_(t,s,e);return u_(i!==null),i}return n}function cS(t,e){function n(r,s){const i=c_(t,s,e);return u_(i!==null),iS(i,s,t.host,t._protocol)}return n}function h_(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=wP():s=EP():n.getStatus()===402?s=vP(t.bucket):n.getStatus()===403?s=TP(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function lS(t){const e=h_(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=yP(t.path)),i.serverResponse=s.serverResponse,i}return n}function uS(t,e,n){const r=e.fullServerUrl(),s=hu(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,c=new l_(s,i,cS(t,n),o);return c.errorHandler=lS(e),c}function hS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function dS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=hS(null,e)),r}function fS(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function c(){let H="";for(let Y=0;Y<2;Y++)H=H+Math.random().toString().slice(2);return H}const l=c();o["Content-Type"]="multipart/related; boundary="+l;const h=dS(e,r,s),f=oS(h,n),p="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+f+`\r
--`+l+`\r
Content-Type: `+h.contentType+`\r
\r
`,g=`\r
--`+l+"--",w=$n.getBlob(p,r,g);if(w===null)throw SP();const S={name:h.fullPath},O=hu(i,t.host,t._protocol),x="POST",j=t.maxUploadRetryTime,$=new l_(O,x,aS(t,n),j);return $.urlParams=S,$.headers=o,$.body=w.uploadData(),$.errorHandler=h_(e),$}class pS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=vr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=vr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=vr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw qs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw qs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw qs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw qs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw qs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class mS extends pS{initXhr(){this.xhr_.responseType="text"}}function d_(){return new mS}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n){this._service=e,n instanceof Nt?this._location=n:this._location=Nt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Sr(e,n)}get root(){const e=new Nt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return o_(this._location.path)}get storage(){return this._service}get parent(){const e=ZP(this._location.path);if(e===null)return null;const n=new Nt(this._location.bucket,e);return new Sr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw xP(e)}}function gS(t,e,n){t._throwIfRoot("uploadBytes");const r=fS(t.storage,t._location,a_(),new $n(e,!0),n);return t.storage.makeRequestWithTokens(r,d_).then(s=>({metadata:s,ref:t}))}function _S(t){t._throwIfRoot("getDownloadURL");const e=uS(t.storage,t._location,a_());return t.storage.makeRequestWithTokens(e,d_).then(n=>{if(n===null)throw CP();return n})}function yS(t,e){const n=eS(t._location.path,e),r=new Nt(t._location.bucket,n);return new Sr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vS(t){return/^[A-Za-z]+:\/\//.test(t)}function ES(t,e){return new Sr(t,e)}function f_(t,e){if(t instanceof du){const n=t;if(n._bucket==null)throw PP();const r=new Sr(n,n._bucket);return e!=null?f_(r,e):r}else return e!==void 0?yS(t,e):t}function wS(t,e){if(e&&vS(e)){if(t instanceof du)return ES(t,e);throw rl("To use ref(service, url), the first argument must be a Storage instance.")}else return f_(t,e)}function pf(t,e){const n=e==null?void 0:e[Zg];return n==null?null:Nt.makeFromBucketSpec(n,t)}function TS(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Fp(s,t.app.options.projectId))}class du{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Jg,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=gP,this._maxUploadRetryTime=_P,this._requests=new Set,s!=null?this._bucket=Nt.makeFromBucketSpec(s,this._host):this._bucket=pf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Nt.makeFromBucketSpec(this._url,e):this._bucket=pf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){ff("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){ff("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Sr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new OP(e_());{const o=qP(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const mf="@firebase/storage",gf="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_="storage";function IS(t,e,n){return t=nt(t),gS(t,e,n)}function AS(t){return t=nt(t),_S(t)}function bS(t,e){return t=nt(t),wS(t,e)}function RS(t=bl(),e){t=nt(t);const r=ma(t,p_).getImmediate({identifier:e}),s=Mp("storage");return s&&PS(r,...s),r}function PS(t,e,n,r={}){TS(t,e,n,r)}function SS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new du(n,r,s,e,kr)}function CS(){Tr(new Yn(p_,SS,"PUBLIC").setMultipleInstances(!0)),en(mf,gf,""),en(mf,gf,"esm2017")}CS();const kS={apiKey:"AIzaSyAUzeYUmqjvBh86Uz88tJiRJ558qDQ67oU",authDomain:"b-store-vue.firebaseapp.com",projectId:"b-store-vue",storageBucket:"b-store-vue.appspot.com",messagingSenderId:"287383292836",appId:"1:287383292836:web:35414f6ba2e3bbd6678f31",measurementId:"G-BNMYXZ0ZP7"},fu=jp(kS),Na=pP(fu),pu=VA(fu),xS=RS(fu),m_=ms({user:null});tR(Na,t=>{m_.user=t});function OS(t){return bf()?(ny(t),!0):!1}function g_(t){return typeof t=="function"?t():Yr(t)}const NS=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const DS=Object.prototype.toString,VS=t=>DS.call(t)==="[object Object]",MS=()=>{};function LS(t){var e;const n=g_(t);return(e=n==null?void 0:n.$el)!=null?e:n}const __=NS?window:void 0;function US(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=__):[e,n,r,s]=t,!e)return MS;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(f=>f()),i.length=0},c=(f,p,g,w)=>(f.addEventListener(p,g,w),()=>f.removeEventListener(p,g,w)),l=Zs(()=>[LS(e),g_(s)],([f,p])=>{if(o(),!f)return;const g=VS(p)?{...p}:p;i.push(...n.flatMap(w=>r.map(S=>c(f,w,S,g))))},{immediate:!0,flush:"post"}),h=()=>{l(),o()};return OS(h),h}function FS(t={}){const{window:e=__,behavior:n="auto"}=t;if(!e)return{x:Qe(0),y:Qe(0)};const r=Qe(e.scrollX),s=Qe(e.scrollY),i=At({get(){return r.value},set(c){scrollTo({left:c,behavior:n})}}),o=At({get(){return s.value},set(c){scrollTo({top:c,behavior:n})}});return US(e,"scroll",()=>{r.value=e.scrollX,s.value=e.scrollY},{capture:!1,passive:!0}),{x:i,y:o}}const BS="/assets/logo-DA9iJCrQ.png",$S={name:"Navbar",setup(){const t=Qe(!1),e=fa(),n=_w(),r=At(()=>m_.user),s=()=>{t.value=!t.value},i=async()=>{try{await nR(Na),e.push("/"),console.log("Logout successful")}catch(h){console.error("Logout error",h)}},o=Qe(!1),{y:c}=FS();tp(()=>{c.value>0?o.value=!0:o.value=!1}),window.addEventListener("scroll",()=>{c.value>0?o.value=!0:o.value=!1});const l=At(()=>n.path==="/");return{isMenuOpen:t,toggleMenu:s,user:r,logout:i,isScrolled:o,isHomePage:l,logoImage:BS}}},y_=t=>(gs("data-v-fdf39f45"),t=t(),_s(),t),jS={class:"container mx-auto flex justify-between items-center"},qS=["src"],HS={class:"hidden md:flex space-x-4 text-white primary"},zS={class:"md:hidden text-white"},KS={key:0,class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},WS=y_(()=>M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,-1)),GS=[WS],QS={key:1,class:"h-6 w-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},XS=y_(()=>M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,-1)),YS=[XS],JS={key:0,class:"md:hidden"},ZS={class:"flex flex-col items-center pt-20"};function eC(t,e,n,r,s,i){const o=Ye("router-link");return ge(),ke("header",{class:na([{"bg-secondary":r.isScrolled||!r.isHomePage,"bg-transparent":!r.isScrolled&&r.isHomePage},"sm:px-0 sm:py-6 px-6 py-3 fixed top-0 w-full z-50"])},[M("nav",jS,[ye(o,{to:"/",class:"home-link"},{default:Tt(()=>[M("img",{src:r.logoImage,alt:"logo",class:"w-44"},null,8,qS)]),_:1}),M("div",HS,[r.user?(ge(),fn(o,{key:0,to:"/admin",class:"text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"},{default:Tt(()=>[jt("Admin Panel")]),_:1})):Ot("",!0),ye(o,{to:"/",class:"text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"},{default:Tt(()=>[jt("Home")]),_:1}),ye(o,{to:"/products",class:"text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"},{default:Tt(()=>[jt("Products")]),_:1}),r.user?Ot("",!0):(ge(),fn(o,{key:1,to:"/login",class:"text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"},{default:Tt(()=>[jt("Login")]),_:1})),r.user?Ot("",!0):(ge(),fn(o,{key:2,to:"/signup",class:"text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"},{default:Tt(()=>[jt("Sign Up")]),_:1})),r.user?(ge(),ke("button",{key:3,onClick:e[0]||(e[0]=(...c)=>r.logout&&r.logout(...c)),class:"text-lg hover:text-gray-200 transition duration-300 ease-in-out primary"}," Log Out ")):Ot("",!0)]),M("div",zS,[M("button",{onClick:e[1]||(e[1]=(...c)=>r.toggleMenu&&r.toggleMenu(...c)),class:"focus:outline-none primary"},[r.isMenuOpen?(ge(),ke("svg",QS,YS)):(ge(),ke("svg",KS,GS))])])]),r.isMenuOpen?(ge(),ke("div",JS,[M("div",{class:"fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 z-10",onClick:e[3]||(e[3]=(...c)=>r.toggleMenu&&r.toggleMenu(...c))},[M("div",ZS,[r.user?(ge(),fn(o,{key:0,to:"/admin",class:"text-lg text-white hover:text-gray-200 mb-4 primary"},{default:Tt(()=>[jt(" Admin Panel ")]),_:1})):Ot("",!0),ye(o,{to:"/",class:"text-lg text-white hover:text-gray-200 mb-4 primary",onClick:r.toggleMenu},{default:Tt(()=>[jt("Home")]),_:1},8,["onClick"]),ye(o,{to:"/products",class:"text-lg text-white hover:text-gray-200 mb-4 primary",onClick:r.toggleMenu},{default:Tt(()=>[jt("Products")]),_:1},8,["onClick"]),r.user?Ot("",!0):(ge(),fn(o,{key:1,to:"/login",class:"text-lg text-white hover:text-gray-200 mb-4 primary",onClick:r.toggleMenu},{default:Tt(()=>[jt("Login")]),_:1},8,["onClick"])),r.user?Ot("",!0):(ge(),fn(o,{key:2,to:"/signup",class:"text-lg text-white hover:text-gray-200 mb-4 primary",onClick:r.toggleMenu},{default:Tt(()=>[jt("Sign Up")]),_:1},8,["onClick"])),r.user?(ge(),ke("button",{key:3,onClick:e[2]||(e[2]=(...c)=>r.logout&&r.logout(...c)),class:"text-lg text-white hover:text-gray-200 mb-4 primary"}," Log Out ")):Ot("",!0)])])])):Ot("",!0)],2)}const As=ln($S,[["render",eC],["__scopeId","data-v-fdf39f45"]]),tC={name:"Footer"},nC=t=>(gs("data-v-41ec3b3f"),t=t(),_s(),t),rC={class:"bg-secondary text-white p-4 fixed bottom-0 w-full"},sC=nC(()=>M("div",{class:"container mx-auto"},[M("p",{class:"primary"},"© 2024 BazaarBay, Beka Tevdorashvili")],-1)),iC=[sC];function oC(t,e,n,r,s,i){return ge(),ke("footer",rC,iC)}const Dr=ln(tC,[["render",oC],["__scopeId","data-v-41ec3b3f"]]),aC="/assets/1-B9aahxSl.png",cC="/assets/bg-BM69y6lA.jpeg",lC={name:"Home",components:{Navbar:As,Footer:Dr},data(){return{heroImage:aC,bgImage:cC}}},bs=t=>(gs("data-v-0ea2252e"),t=t(),_s(),t),uC={class:"mx-auto mb-16"},hC={class:"hero text-white pt-32 pb-8 md:flex md:items-center md:justify-center relative px-4"},dC={class:"md:hidden text-center mb-8"},fC=["src"],pC=bs(()=>M("h1",{class:"text-4xl font-semibold mb-4 primary"}," Welcome to my Online Store ",-1)),mC=bs(()=>M("p",{class:"text-lg mb-8 primary"},"Sign Up and sell your products!",-1)),gC=bs(()=>M("button",{class:"bttn text-white font-bold py-3 px-6 rounded-full transition duration-300"}," Explore Products ",-1)),_C={class:"hidden md:flex items-center justify-between w-full px-16"},yC={class:"max-w-lg text-left"},vC=bs(()=>M("h1",{class:"text-5xl font-semibold mb-4 primary"}," Welcome to my Online Store ",-1)),EC=bs(()=>M("p",{class:"text-lg mb-8 primary"},"Sign Up and sell your products!",-1)),wC=bs(()=>M("button",{class:"bttn text-white font-bold py-3 px-6 rounded-full transition duration-300"}," Explore Products ",-1)),TC={class:"ml-8"},IC=["src"],AC=Iv('<section class="features py-16 px-4" data-v-0ea2252e><div class="container mx-auto" data-v-0ea2252e><h2 class="text-3xl font-semibold mb-8 primary" data-v-0ea2252e>Key Features</h2><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-0ea2252e><div class="feature bg-primary rounded-lg shadow-md p-6" data-v-0ea2252e><h3 class="text-xl font-semibold mb-3 primary" data-v-0ea2252e> Explore Exciting New Products </h3><p class="primary text-sm" data-v-0ea2252e> Find the latest and greatest products in our ever-expanding catalog. From trending items to unique finds, there&#39;s always something new to discover. </p></div><div class="feature bg-primary rounded-lg shadow-md p-6" data-v-0ea2252e><h3 class="text-xl font-semibold mb-3 primary" data-v-0ea2252e> Showcase Your Products </h3><p class="primary text-sm" data-v-0ea2252e> Join our platform and showcase your products to a global audience. Whether you&#39;re a small business or a large retailer, our platform provides the tools you need to reach more customers and grow your business. </p></div><div class="feature bg-primary rounded-lg shadow-md p-6" data-v-0ea2252e><h3 class="text-xl font-semibold mb-3 primary" data-v-0ea2252e> Boost Your Sales </h3><p class="primary text-sm" data-v-0ea2252e> Accelerate your sales and increase your revenue with our streamlined selling process. Our platform offers seamless integration, powerful analytics, and dedicated support to help you become a fast seller in no time. </p></div></div></div></section>',1);function bC(t,e,n,r,s,i){const o=Ye("Navbar"),c=Ye("router-link"),l=Ye("Footer");return ge(),ke("div",null,[ye(o),M("main",uC,[M("section",hC,[M("div",dC,[M("img",{src:s.heroImage,alt:"Hero Image",class:"mx-auto mb-8 rounded-lg"},null,8,fC),pC,mC,ye(c,{to:"/products"},{default:Tt(()=>[gC]),_:1})]),M("div",_C,[M("div",yC,[vC,EC,ye(c,{to:"/products"},{default:Tt(()=>[wC]),_:1})]),M("div",TC,[M("img",{src:s.heroImage,alt:"Product Image",class:"rounded-lg"},null,8,IC)])])]),AC]),ye(l)])}const RC=ln(lC,[["render",bC],["__scopeId","data-v-0ea2252e"]]),PC={components:{Navbar:As,Footer:Dr},data(){return{products:[]}},async mounted(){await this.fetchProducts()},methods:{async fetchProducts(){(await YA(ig(pu,"products"))).forEach(e=>{this.products.push({id:e.id,...e.data()})})}}},SC={class:"sm:px-12 sm:py-6 px-6 pt-3 mb-32 mt-20"},CC=M("h1",{class:"text-3xl font-semibold mb-6 primary"},"Products",-1),kC={class:"grid grid-cols-1 md:grid-cols-4 gap-6"},xC={class:"flex justify-center"},OC=["src","alt"],NC={class:"p-4"},DC={class:"text-xl font-semibold mb-2"},VC={class:"text-gray-800 mt-2 font-semibold"};function MC(t,e,n,r,s,i){const o=Ye("Navbar"),c=Ye("router-link"),l=Ye("Footer");return ge(),ke("div",null,[ye(o),M("div",SC,[CC,M("div",kC,[(ge(!0),ke(Mt,null,rp(s.products,h=>(ge(),fn(c,{key:h.id,to:{name:"ProductDetail",params:{id:h.id}},class:"bg-white rounded-lg overflow-hidden shadow-md flex flex-col py-2"},{default:Tt(()=>[M("div",xC,[M("img",{src:h.image1,alt:h.name,class:"w-56 h-56 object-cover object-center"},null,8,OC)]),M("div",NC,[M("h2",DC,Wr(h.name),1),M("p",VC,"$"+Wr(h.price),1)])]),_:2},1032,["to"]))),128))])]),ye(l)])}const LC=ln(PC,[["render",MC]]),UC={name:"Login",components:{Navbar:As,Footer:Dr},setup(){const t=Qe(""),e=Qe(""),n=fa();return{email:t,password:e,login:async()=>{try{await Jb(Na,t.value,e.value),n.push("/"),console.log("Login successful")}catch(s){console.error("Login error",s)}}}}},Da=t=>(gs("data-v-29a021e8"),t=t(),_s(),t),FC={class:"container mx-auto py-8 px-8 max-w-2xl mt-16"},BC=Da(()=>M("h1",{class:"text-3xl font-semibold mb-4 primary"},"Login",-1)),$C={class:"mb-4"},jC=Da(()=>M("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1)),qC={class:"mb-4"},HC=Da(()=>M("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1)),zC=Da(()=>M("button",{type:"submit",class:"w-full py-2 px-4 bttn text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Login ",-1));function KC(t,e,n,r,s,i){const o=Ye("Navbar"),c=Ye("Footer");return ge(),ke("div",null,[ye(o),M("div",FC,[BC,M("form",{onSubmit:e[2]||(e[2]=El((...l)=>r.login&&r.login(...l),["prevent"])),class:"bg-white rounded-lg shadow-md p-6"},[M("div",$C,[jC,jn(M("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=l=>r.email=l),id:"email",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[qn,r.email]])]),M("div",qC,[HC,jn(M("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=l=>r.password=l),id:"password",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[qn,r.password]])]),zC],32)]),ye(c)])}const WC=ln(UC,[["render",KC],["__scopeId","data-v-29a021e8"]]);var GC=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n};const QC={name:"SemipolarSpinner",props:{animationDuration:{type:Number,default:2e3},size:{type:Number,default:65},color:{type:String,default:"#fff"}},data(){return{ringsNum:5}},computed:{spinnerStyle(){return{height:`${this.size}px`,width:`${this.size}px`}},ringStyle(){return{animationDuration:`${this.animationDuration}ms`,borderTopColor:this.color,borderLeftColor:this.color}},ringsStyles(){const t=[],n=this.size*.05,r=n*2,s=this.size*.2;for(let i=0;i<this.ringsNum;i++){const o=`${this.size-s*i}px`,c=`${r*i}px`,l=Object.assign({animationDelay:`${this.animationDuration*.1*(this.ringsNum-i-1)}ms`,height:o,width:o,left:c,top:c,borderWidth:`${n}px`},this.ringStyle);t.push(l)}return t}}};function XC(t,e,n,r,s,i){return ge(),ke("div",{class:"semipolar-spinner",style:hi(i.spinnerStyle)},[(ge(!0),ke(Mt,null,rp(i.ringsStyles,(o,c)=>(ge(),ke("div",{key:c,class:"ring",style:hi(o)},null,4))),128))],4)}var v_=GC(QC,[["render",XC]]);const YC={name:"SignUp",components:{Navbar:As,Footer:Dr,SemipolarSpinner:v_},setup(){const t=Qe(""),e=Qe(""),n=fa(),r=Qe(!1);return{email:t,password:e,signUp:async()=>{if(e.value.length<6){console.error("Password must be at least 6 characters long");return}try{r.value=!0,await Yb(Na,t.value,e.value),console.log("Sign up successful"),setTimeout(()=>{r.value=!1,n.push("/products")},2e3)}catch(i){console.error("Sign up error",i),r.value=!1}},loading:r}}},JC={key:0,class:"my-16 text-center mt-16"},ZC={class:"container mx-auto py-8 px-8 max-w-2xl"},e1=M("h1",{class:"text-3xl font-semibold mb-4 primary"}," Successfully Signed Up! ",-1),t1={class:"flex justify-center items-center"},n1={key:1,class:"container mx-auto py-8 px-8 max-w-2xl mt-16"},r1=M("h1",{class:"text-3xl font-semibold mb-4 primary"},"Sign Up",-1),s1={class:"mb-4"},i1=M("label",{for:"email",class:"block text-sm font-medium text-gray-700"},"Email",-1),o1={class:"mb-4"},a1=M("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1),c1={key:0,class:"text-red-500 text-sm mt-2"},l1=M("button",{type:"submit",class:"w-full py-2 px-4 text-white rounded-md bttn focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"}," Sign Up ",-1);function u1(t,e,n,r,s,i){const o=Ye("Navbar"),c=Ye("semipolar-spinner"),l=Ye("Footer");return ge(),ke("div",null,[ye(o),r.loading?(ge(),ke("div",JC,[M("div",ZC,[e1,M("div",t1,[ye(c,{"animation-duration":2e3,size:65,color:"#1F547F"})])])])):(ge(),ke("div",n1,[r1,M("form",{onSubmit:e[2]||(e[2]=El((...h)=>r.signUp&&r.signUp(...h),["prevent"])),class:"bg-white rounded-lg shadow-md p-6"},[M("div",s1,[i1,jn(M("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=h=>r.email=h),id:"email",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[qn,r.email]])]),M("div",o1,[a1,jn(M("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=h=>r.password=h),id:"password",class:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"},null,512),[[qn,r.password]]),r.password.length>0&&r.password.length<6?(ge(),ke("p",c1," Password must be at least 6 characters long. ")):Ot("",!0)]),l1],32)])),ye(l)])}const h1=ln(YC,[["render",u1]]),d1={name:"ProductForm",components:{Footer:Dr,SemipolarSpinner:v_},setup(){const t=fa(),e=Qe(""),n=Qe(""),r=Qe(null),s=Qe(""),i=Qe({image1:null,image2:null,image3:null}),o=Qe({image1:null,image2:null,image3:null}),c=Qe(!1),l=(p,g)=>{const w=p.target.files[0];if(w){i.value[g]=w;const S=new FileReader;S.onload=O=>{o.value[g]=O.target.result},S.readAsDataURL(w)}},h=async p=>{const g=bS(xS,`products/${p.name}`);return await IS(g,p),AS(g)};return{name:e,description:n,price:r,mob:s,images:i,imagePreviews:o,onFileChange:l,submitForm:async()=>{try{c.value=!0;const p={};for(const[w,S]of Object.entries(i.value))S&&(p[w]=await h(S));const g={name:e.value,description:n.value,price:r.value,mob:s.value,image1:p.image1||"",image2:p.image2||"",image3:p.image3||""};await JA(ig(pu,"products"),g),console.log("Product added successfully:",g),e.value="",n.value="",r.value=null,s.value="",i.value={image1:null,image2:null,image3:null},o.value={image1:null,image2:null,image3:null},c.value=!1,setTimeout(()=>{t.push({name:"Products"})},2e3)}catch(p){console.error("Error adding product:",p),c.value=!1}},loading:c}}},ir=t=>(gs("data-v-88689855"),t=t(),_s(),t),f1={class:"container mx-auto py-8 px-8 max-w-2xl mt-16"},p1={key:0},m1={class:"mb-4"},g1=ir(()=>M("label",{for:"name",class:"block text-sm font-medium text-gray-700"},"Product name",-1)),_1={class:"mb-4"},y1=ir(()=>M("label",{for:"description",class:"block text-sm font-medium text-gray-700"},"Product description",-1)),v1={class:"mb-4"},E1=ir(()=>M("label",{for:"price",class:"block text-sm font-medium text-gray-700"},"Product price",-1)),w1={class:"mb-4"},T1=ir(()=>M("label",{for:"mob",class:"block text-sm font-medium text-gray-700"},"Your Phone Number",-1)),I1={class:"mb-4"},A1=ir(()=>M("label",{for:"image1",class:"block text-sm font-medium text-gray-700"},"Product Image 1",-1)),b1=["src"],R1={class:"mb-4"},P1=ir(()=>M("label",{for:"image2",class:"block text-sm font-medium text-gray-700"},"Product Image 2",-1)),S1=["src"],C1={class:"mb-4"},k1=ir(()=>M("label",{for:"image3",class:"block text-sm font-medium text-gray-700"},"Product Image 3",-1)),x1=["src"],O1=ir(()=>M("button",{type:"submit",class:"submit-button bttn"},"Add Product",-1)),N1={key:1,class:"flex justify-center items-center"};function D1(t,e,n,r,s,i){const o=Ye("semipolar-spinner");return ge(),ke("div",null,[M("div",f1,[r.loading?(ge(),ke("div",N1,[ye(o,{"animation-duration":2e3,size:65,color:"#1F547F"})])):(ge(),ke("div",p1,[M("form",{onSubmit:e[7]||(e[7]=El((...c)=>r.submitForm&&r.submitForm(...c),["prevent"])),class:"bg-white rounded-lg shadow-md p-6 mb-16"},[M("div",m1,[g1,jn(M("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=c=>r.name=c),id:"name",class:"input-field"},null,512),[[qn,r.name]])]),M("div",_1,[y1,jn(M("textarea",{"onUpdate:modelValue":e[1]||(e[1]=c=>r.description=c),id:"description",class:"input-field textarea-field"},null,512),[[qn,r.description]])]),M("div",v1,[E1,jn(M("input",{type:"number","onUpdate:modelValue":e[2]||(e[2]=c=>r.price=c),id:"price",class:"input-field"},null,512),[[qn,r.price,void 0,{number:!0}]])]),M("div",w1,[T1,jn(M("input",{type:"text","onUpdate:modelValue":e[3]||(e[3]=c=>r.mob=c),id:"mob",class:"input-field"},null,512),[[qn,r.mob]])]),M("div",I1,[A1,M("input",{type:"file",onChange:e[4]||(e[4]=c=>r.onFileChange(c,"image1")),id:"image1",class:"input-field"},null,32),r.imagePreviews.image1?(ge(),ke("img",{key:0,src:r.imagePreviews.image1,alt:"Image Preview",class:"image-preview"},null,8,b1)):Ot("",!0)]),M("div",R1,[P1,M("input",{type:"file",onChange:e[5]||(e[5]=c=>r.onFileChange(c,"image2")),id:"image2",class:"input-field"},null,32),r.imagePreviews.image2?(ge(),ke("img",{key:0,src:r.imagePreviews.image2,alt:"Image Preview",class:"image-preview"},null,8,S1)):Ot("",!0)]),M("div",C1,[k1,M("input",{type:"file",onChange:e[6]||(e[6]=c=>r.onFileChange(c,"image3")),id:"image3",class:"input-field"},null,32),r.imagePreviews.image3?(ge(),ke("img",{key:0,src:r.imagePreviews.image3,alt:"Image Preview",class:"image-preview"},null,8,x1)):Ot("",!0)]),O1],32)]))])])}const V1=ln(d1,[["render",D1],["__scopeId","data-v-88689855"]]),M1={name:"AdminPanel",components:{ProductForm:V1,Navbar:As,Footer:Dr}},L1={class:"container mx-auto py-8 mt-16"},U1=M("h1",{class:"text-3xl font-semibold mb-4 primary"},"Add Product",-1);function F1(t,e,n,r,s,i){const o=Ye("Navbar"),c=Ye("ProductForm"),l=Ye("Footer");return ge(),ke(Mt,null,[ye(o),M("div",L1,[U1,ye(c)]),ye(l)],64)}const B1=ln(M1,[["render",F1]]),$1={components:{Navbar:As,Footer:Dr},data(){return{product:null,currentImage:0}},async mounted(){const t=this.$route.params.id;await this.fetchProduct(t)},methods:{async fetchProduct(t){const e=await XA(og(pu,"products",t));if(e.exists()){const n=e.data(),r=[n.image1,n.image2,n.image3].filter(Boolean);this.product={id:e.id,...n,images:r}}else console.error("No such product!")},nextImage(){this.product&&(this.currentImage=(this.currentImage+1)%this.product.images.length)},prevImage(){this.product&&(this.currentImage=(this.currentImage-1+this.product.images.length)%this.product.images.length)}}},mu=t=>(gs("data-v-5d6b7553"),t=t(),_s(),t),j1={class:"p-5 md:p-32 my-16 md:my-0"},q1={key:0},H1={class:"text-4xl font-bold mb-6 primary"},z1={class:"flex flex-col md:flex-row"},K1={class:"relative mb-6 md:mb-0 text-center md:text-left md:pr-12 pr-0 md:pb-0 pb-12"},W1={class:"relative max-w-[600px] md:w-96 max-h-full overflow-hidden rounded-lg shadow-sm text-left"},G1=["src","alt"],Q1=mu(()=>M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-6 h-6"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M15 19l-7-7 7-7"})],-1)),X1=[Q1],Y1=mu(()=>M("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",class:"w-6 h-6"},[M("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M9 5l7 7-7 7"})],-1)),J1=[Y1],Z1={class:"text-lg text-gray-700"},ek={class:"text-2xl primary font-semibold mb-8"},tk={class:"mb-4 primary text-base"},nk={class:"mb-4 primary text-base"},rk={key:1},sk=mu(()=>M("p",null,"Loading...",-1)),ik=[sk];function ok(t,e,n,r,s,i){const o=Ye("Navbar"),c=Ye("Footer");return ge(),ke("div",null,[ye(o),M("div",j1,[s.product?(ge(),ke("div",q1,[M("h1",H1,Wr(s.product.name),1),M("div",z1,[M("div",K1,[M("div",W1,[M("img",{src:s.product.images[s.currentImage],alt:s.product.name,class:"w-full h-full object-cover object-center"},null,8,G1),M("button",{class:"absolute top-1-2 left-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full bg-opacity-20 hover:bg-opacity-90",onClick:e[0]||(e[0]=(...l)=>i.prevImage&&i.prevImage(...l))},X1),M("button",{class:"absolute top-1-2 right-2 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full bg-opacity-20 hover:bg-opacity-90",onClick:e[1]||(e[1]=(...l)=>i.nextImage&&i.nextImage(...l))},J1)])]),M("div",Z1,[M("div",ek,Wr(s.product.price)+" $ ",1),M("p",tk,Wr(s.product.description),1),M("p",nk," Phone Number: "+Wr(s.product.mob),1)])])])):(ge(),ke("div",rk,ik))]),ye(c)])}const ak=ln($1,[["render",ok],["__scopeId","data-v-5d6b7553"]]),ck=[{path:"/",name:"Home",component:RC},{path:"/products",name:"Products",component:LC},{path:"/login",name:"Login",component:WC},{path:"/signup",name:"SignUp",component:h1},{path:"/products/:id",name:"ProductDetail",component:ak,props:!0},{path:"/admin",name:"AdminPanel",component:B1,meta:{requiresAuth:!0}}],lk=mw({history:xE(),routes:ck});aE(dE).use(lk).mount("#app");
