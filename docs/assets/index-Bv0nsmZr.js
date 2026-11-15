(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const gu="187",Bg=0,xd=1,$g=2,vo=1,Hg=2,Js=3,Rr=0,pn=1,Fn=2,ss=0,ra=1,yd=2,bd=3,Sd=4,Gg=5,is=100,Vg=101,Wg=102,Xg=103,Zg=104,qg=200,Yg=201,jg=202,Kg=203,kh=204,zh=205,Jg=206,Qg=207,e0=208,t0=209,n0=210,i0=211,r0=212,s0=213,a0=214,oc=0,lc=1,cc=2,fa=3,uc=4,dc=5,fc=6,hc=7,Bh=0,o0=1,l0=2,Ti=0,$h=1,Hh=2,Gh=3,_u=4,Vh=5,Wh=6,Xh=7,Zh=300,fs=301,ha=302,bl=303,Sl=304,ko=1e3,Mi=1001,pc=1002,Kt=1003,c0=1004,Fa=1005,En=1006,Ml=1007,Xi=1008,In=1009,qh=1010,Yh=1011,pa=1012,vu=1013,li=1014,Zn=1015,ci=1016,xu=1017,yu=1018,hs=1020,jh=35902,Kh=35899,Jh=1021,Qh=1022,ri=1023,ji=1026,Zi=1027,bu=1028,Su=1029,Cr=1030,Mu=1031,Eu=1033,xo=33776,yo=33777,bo=33778,So=33779,mc=35840,gc=35841,_c=35842,vc=35843,xc=36196,yc=37492,bc=37496,Sc=37488,Mc=37489,zo=37490,Ec=37491,wc=37808,Tc=37809,Ac=37810,Rc=37811,Cc=37812,Pc=37813,Ic=37814,Lc=37815,Nc=37816,Dc=37817,Uc=37818,Oc=37819,Fc=37820,kc=37821,zc=36492,Bc=36494,$c=36495,Hc=36283,Gc=36284,Bo=36285,Vc=36286,u0=3200,Wc=0,d0=1,Vi="",kt="srgb",$o="srgb-linear",Ho="linear",ft="srgb",El=7680,f0=519,h0=512,p0=513,m0=514,ep=515,g0=516,_0=517,tp=518,np=519,ip=35044,Md="300 es",qn=2e3,ma=2001;function v0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Go(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function x0(){const t=Go("canvas");return t.style.display="block",t}const Ed={};function Vo(...t){const e="THREE."+t.shift();console.log(e,...t)}function rp(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function $e(...t){t=rp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=rp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function as(...t){const e=t.join(" ");e in Ed||(Ed[e]=!0,$e(...t))}function y0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const b0={[oc]:oc,[cc]:fc,[uc]:uc,[fa]:dc,[lc]:lc,[fc]:cc,[hc]:hc,[dc]:fa};class Nr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wd=1234567;const sa=Math.PI/180,ga=180/Math.PI;function Qi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[t&255]+nn[t>>8&255]+nn[t>>16&255]+nn[t>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[n&63|128]+nn[n>>8&255]+"-"+nn[n>>16&255]+nn[n>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function wu(t,e){return(t%e+e)%e}function S0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function M0(t,e,n){return t!==e?(n-t)/(e-t):0}function aa(t,e,n){return(1-n)*t+n*e}function E0(t,e,n,i){return aa(t,e,1-Math.exp(-n*i))}function w0(t,e=1){return e-Math.abs(wu(t,e*2)-e)}function T0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function A0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function R0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function C0(t,e){return t+Math.random()*(e-t)}function P0(t){return t*(.5-Math.random())}function I0(t){t!==void 0&&(wd=t);let e=wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function L0(t){return t*sa}function N0(t){return t*ga}function D0(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function U0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function O0(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*d,l*f,o*c);break;case"YZY":t.set(l*f,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*f,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*h,o*c);break;case"YXY":t.set(l*h,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*h,o*u,o*c);break;default:$e("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ul(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Tu(t,e){if(e.constructor===Float32Array)return t;const n=ul(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Au(t,e){if(e.constructor===Float32Array)return t;const n=ul(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const At={DEG2RAD:sa,RAD2DEG:ga,generateUUID:Qi,clamp:Je,euclideanModulo:wu,mapLinear:S0,inverseLerp:M0,lerp:aa,damp:E0,pingpong:w0,smoothstep:T0,smootherstep:A0,randInt:R0,randFloat:C0,randFloatSpread:P0,seededRandom:I0,degToRad:L0,radToDeg:N0,isPowerOfTwo:D0,ceilPowerOfTwo:U0,floorPowerOfTwo:sp,setQuaternionFromProperEuler:O0,normalize:Au,denormalize:Tu},hd=class hd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};hd.prototype.isVector2=!0;let Xe=hd;class Ms{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||l!==f||c!==h||u!==g){let p=l*f+c*h+u*g+d*v;p<0&&(f=-f,h=-h,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,l=l*m+f*o,c=c*m+h*o,u=u*m+g*o,d=d*m+v*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+g*o,d=d*m+v*o;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-o*h,e[n+2]=c*g+u*h+o*f-l*d,e[n+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:$e("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const pd=class pd{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Td.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Td.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};pd.prototype.isVector3=!0;let O=pd;const wl=new O,Td=new Ms,md=class md{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],p=r[3],m=r[6],_=r[1],M=r[4],b=r[7],T=r[2],A=r[5],x=r[8];return s[0]=a*v+o*_+l*T,s[3]=a*p+o*M+l*A,s[6]=a*m+o*b+l*x,s[1]=c*v+u*_+d*T,s[4]=c*p+u*M+d*A,s[7]=c*m+u*b+d*x,s[2]=f*v+h*_+g*T,s[5]=f*p+h*M+g*A,s[8]=f*m+h*b+g*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return as("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Tl.makeScale(e,n)),this}rotate(e){return as("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Tl.makeRotation(-e)),this}translate(e,n){return as("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Tl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};md.prototype.isMatrix3=!0;let Ve=md;const Tl=new Ve,Ad=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rd=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function F0(){const t={enabled:!0,workingColorSpace:$o,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Ai(r.r),r.g=Ai(r.g),r.b=Ai(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=os(r.r),r.g=os(r.g),r.b=os(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Vi?Ho:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[$o]:{primaries:e,whitePoint:i,transfer:Ho,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Ad,fromXYZ:Rd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),t}const tt=F0();function Ai(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let kr;class k0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{kr===void 0&&(kr=Go("canvas")),kr.width=e.width,kr.height=e.height;const r=kr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=kr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Go("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ai(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ai(n[i]/255)*255):n[i]=Ai(n[i]);return{data:n,width:e.width,height:e.height}}else return $e("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let z0=0;class Ru{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:z0++}),this.uuid=Qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Al(r[a].image)):s.push(Al(r[a]))}else s=Al(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Al(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?k0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:($e("Texture: Unable to serialize Texture."),{})}let B0=0;const Rl=new O;class an extends Nr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=Mi,r=Mi,s=En,a=Xi,o=ri,l=In,c=an.DEFAULT_ANISOTROPY,u=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B0++}),this.uuid=Qi(),this.name="",this.source=new Ru(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){$e(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){$e(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ko:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ko:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Zh;an.DEFAULT_ANISOTROPY=1;const gd=class gd{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,b=(h+1)/2,T=(m+1)/2,A=(u+f)/4,x=(d+v)/4,S=(g+p)/4;return M>b&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=x/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=x/s,r=S/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};gd.prototype.isVector4=!0;let wt=gd;class $0 extends Nr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new an({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ru(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ai extends $0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ap extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class H0 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const cl=class cl{constructor(e,n,i,r,s,a,o,l,c,u,d,f,h,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,h,g,v,p)}set(e,n,i,r,s,a,o,l,c,u,d,f,h,g,v,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/zr.setFromMatrixColumn(e,0).length(),s=1/zr.setFromMatrixColumn(e,1).length(),a=1/zr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,v=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-v*c,n[9]=-o*l,n[2]=v-f*c,n[6]=g+h*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;n[0]=f+v*o,n[4]=g*o-h,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=v+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;n[0]=f-v*o,n[4]=-a*d,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=v-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,v=o*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=v-f*d,n[8]=g*d+h,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=a*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=o*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G0,e,V0)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Di.crossVectors(i,Cn),Di.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Di.crossVectors(i,Cn)),Di.normalize(),ka.crossVectors(Cn,Di),r[0]=Di.x,r[4]=ka.x,r[8]=Cn.x,r[1]=Di.y,r[5]=ka.y,r[9]=Cn.y,r[2]=Di.z,r[6]=ka.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],p=i[10],m=i[14],_=i[3],M=i[7],b=i[11],T=i[15],A=r[0],x=r[4],S=r[8],k=r[12],N=r[1],F=r[5],B=r[9],q=r[13],P=r[2],X=r[6],ne=r[10],W=r[14],he=r[3],J=r[7],le=r[11],de=r[15];return s[0]=a*A+o*N+l*P+c*he,s[4]=a*x+o*F+l*X+c*J,s[8]=a*S+o*B+l*ne+c*le,s[12]=a*k+o*q+l*W+c*de,s[1]=u*A+d*N+f*P+h*he,s[5]=u*x+d*F+f*X+h*J,s[9]=u*S+d*B+f*ne+h*le,s[13]=u*k+d*q+f*W+h*de,s[2]=g*A+v*N+p*P+m*he,s[6]=g*x+v*F+p*X+m*J,s[10]=g*S+v*B+p*ne+m*le,s[14]=g*k+v*q+p*W+m*de,s[3]=_*A+M*N+b*P+T*he,s[7]=_*x+M*F+b*X+T*J,s[11]=_*S+M*B+b*ne+T*le,s[15]=_*k+M*q+b*W+T*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=l*h-c*f,M=o*h-c*d,b=o*f-l*d,T=a*h-c*u,A=a*f-l*u,x=a*d-o*u;return n*(v*_-p*M+m*b)-i*(g*_-p*T+m*A)+r*(g*M-v*T+m*x)-s*(g*b-v*A+p*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=n*o-i*a,M=n*l-r*a,b=n*c-s*a,T=i*l-r*o,A=i*c-s*o,x=r*c-s*l,S=u*v-d*g,k=u*p-f*g,N=u*m-h*g,F=d*p-f*v,B=d*m-h*v,q=f*m-h*p,P=_*q-M*B+b*F+T*N-A*k+x*S;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/P;return e[0]=(o*q-l*B+c*F)*X,e[1]=(r*B-i*q-s*F)*X,e[2]=(v*x-p*A+m*T)*X,e[3]=(f*A-d*x-h*T)*X,e[4]=(l*N-a*q-c*k)*X,e[5]=(n*q-r*N+s*k)*X,e[6]=(p*b-g*x-m*M)*X,e[7]=(u*x-f*b+h*M)*X,e[8]=(a*B-o*N+c*S)*X,e[9]=(i*N-n*B-s*S)*X,e[10]=(g*A-v*b+m*_)*X,e[11]=(d*b-u*A-h*_)*X,e[12]=(o*k-a*F-l*S)*X,e[13]=(n*F-i*k+r*S)*X,e[14]=(v*M-g*T-p*_)*X,e[15]=(u*T-d*M+f*_)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,v=a*u,p=a*d,m=o*d,_=l*c,M=l*u,b=l*d,T=i.x,A=i.y,x=i.z;return r[0]=(1-(v+m))*T,r[1]=(h+b)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(h-b)*A,r[5]=(1-(f+m))*A,r[6]=(p+_)*A,r[7]=0,r[8]=(g+M)*x,r[9]=(p-_)*x,r[10]=(1-(f+v))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=zr.set(r[0],r[1],r[2]).length();const o=zr.set(r[4],r[5],r[6]).length(),l=zr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Gn.copy(this);const c=1/a,u=1/o,d=1/l;return Gn.elements[0]*=c,Gn.elements[1]*=c,Gn.elements[2]*=c,Gn.elements[4]*=u,Gn.elements[5]*=u,Gn.elements[6]*=u,Gn.elements[8]*=d,Gn.elements[9]*=d,Gn.elements[10]*=d,n.setFromRotationMatrix(Gn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=qn,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===qn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ma)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=qn,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===qn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ma)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};cl.prototype.isMatrix4=!0;let mt=cl;const zr=new O,Gn=new mt,G0=new O(0,0,0),V0=new O(1,1,1),Di=new O,ka=new O,Cn=new O,Cd=new mt,Pd=new Ms;class Bn{constructor(e=0,n=0,i=0,r=Bn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:$e("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Pd.setFromEuler(this),this.setFromQuaternion(Pd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Bn.DEFAULT_ORDER="XYZ";class op{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W0=0;const Id=new O,Br=new Ms,gi=new mt,za=new O,Us=new O,X0=new O,Z0=new Ms,Ld=new O(1,0,0),Nd=new O(0,1,0),Dd=new O(0,0,1),Ud={type:"added"},q0={type:"removed"},$r={type:"childadded",child:null},Cl={type:"childremoved",child:null};class Zt extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W0++}),this.uuid=Qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Zt.DEFAULT_UP.clone();const e=new O,n=new Bn,i=new Ms,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new mt},normalMatrix:{value:new Ve}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=Zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new op,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.multiply(Br),this}rotateOnWorldAxis(e,n){return Br.setFromAxisAngle(e,n),this.quaternion.premultiply(Br),this}rotateX(e){return this.rotateOnAxis(Ld,e)}rotateY(e){return this.rotateOnAxis(Nd,e)}rotateZ(e){return this.rotateOnAxis(Dd,e)}translateOnAxis(e,n){return Id.copy(e).applyQuaternion(this.quaternion),this.position.add(Id.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Ld,e)}translateY(e){return this.translateOnAxis(Nd,e)}translateZ(e){return this.translateOnAxis(Dd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(gi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?za.copy(e):za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?gi.lookAt(Us,za,this.up):gi.lookAt(za,Us,this.up),this.quaternion.setFromRotationMatrix(gi),r&&(gi.extractRotation(r.matrixWorld),Br.setFromRotationMatrix(gi),this.quaternion.premultiply(Br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ud),$r.child=e,this.dispatchEvent($r),$r.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(q0),Cl.child=e,this.dispatchEvent(Cl),Cl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ud),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,e,X0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Us,Z0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Zt.DEFAULT_UP=new O(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ni extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y0={type:"move"};class Pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ni,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ni,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ni,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Y0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ni;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Ba={h:0,s:0,l:0};function Il(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=wu(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Il(a,s,e+1/3),this.g=Il(a,s,e),this.b=Il(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=kt){function i(s){s!==void 0&&parseFloat(s)<1&&$e("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:$e("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);$e("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=kt){const i=lp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):$e("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ai(e.r),this.g=Ai(e.g),this.b=Ai(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return tt.workingToColorSpace(rn.copy(this),e),Math.round(Je(rn.r*255,0,255))*65536+Math.round(Je(rn.g*255,0,255))*256+Math.round(Je(rn.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(rn.copy(this),n);const i=rn.r,r=rn.g,s=rn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(rn.copy(this),n),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=kt){tt.workingToColorSpace(rn.copy(this),e);const n=rn.r,i=rn.g,r=rn.b;return e!==kt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Ba);const i=aa(Ui.h,Ba.h,n),r=aa(Ui.s,Ba.s,n),s=aa(Ui.l,Ba.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const rn=new qe;qe.NAMES=lp;class Cu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new qe(e),this.near=n,this.far=i}clone(){return new Cu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class j0 extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Bn,this.environmentIntensity=1,this.environmentRotation=new Bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new O,_i=new O,Ll=new O,vi=new O,Hr=new O,Gr=new O,Od=new O,Nl=new O,Dl=new O,Ul=new O,Ol=new wt,Fl=new wt,kl=new wt;class kn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),_i.subVectors(i,n),Ll.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(_i),l=Vn.dot(Ll),c=_i.dot(_i),u=_i.dot(Ll),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ol.setScalar(0),Fl.setScalar(0),kl.setScalar(0),Ol.fromBufferAttribute(e,n),Fl.fromBufferAttribute(e,i),kl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ol,s.x),a.addScaledVector(Fl,s.y),a.addScaledVector(kl,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),_i.subVectors(e,n),Vn.cross(_i).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Vn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Hr.subVectors(r,i),Gr.subVectors(s,i),Nl.subVectors(e,i);const l=Hr.dot(Nl),c=Gr.dot(Nl);if(l<=0&&c<=0)return n.copy(i);Dl.subVectors(e,r);const u=Hr.dot(Dl),d=Gr.dot(Dl);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(Hr,a);Ul.subVectors(e,s);const h=Hr.dot(Ul),g=Gr.dot(Ul);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Gr,o);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return Od.subVectors(s,r),o=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(Od,o);const m=1/(p+v+f);return a=v*m,o=f*m,n.copy(i).addScaledVector(Hr,a).addScaledVector(Gr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Dr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Wn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Wn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Wn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(s,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Ha.subVectors(this.max,Os),Vr.subVectors(e.a,Os),Wr.subVectors(e.b,Os),Xr.subVectors(e.c,Os),Oi.subVectors(Wr,Vr),Fi.subVectors(Xr,Wr),cr.subVectors(Vr,Xr);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-cr.z,cr.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,cr.z,0,-cr.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-cr.y,cr.x,0];return!zl(n,Vr,Wr,Xr,Ha)||(n=[1,0,0,0,1,0,0,0,1],!zl(n,Vr,Wr,Xr,Ha))?!1:(Ga.crossVectors(Oi,Fi),n=[Ga.x,Ga.y,Ga.z],zl(n,Vr,Wr,Xr,Ha))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new O,new O,new O,new O,new O,new O,new O,new O],Wn=new O,$a=new Dr,Vr=new O,Wr=new O,Xr=new O,Oi=new O,Fi=new O,cr=new O,Os=new O,Ha=new O,Ga=new O,ur=new O;function zl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){ur.fromArray(t,s);const o=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=n.dot(ur),u=i.dot(ur);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Dt=new O,Va=new Xe;let K0=0;class Ri extends Nr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ip,this.updateRanges=[],this.gpuType=Zn,this.version=0,this._normalizationScale=e!==void 0?ul(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Va.fromBufferAttribute(this,n),Va.applyMatrix3(e),this.setXY(n,Va.x,Va.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix3(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyMatrix4(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.applyNormalMatrix(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Dt.fromBufferAttribute(this,n),Dt.transformDirection(e),this.setXYZ(n,Dt.x,Dt.y,Dt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Tu(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Au(e,this.array)}}class cp extends Ri{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class up extends Ri{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class qt extends Ri{constructor(e,n,i){super(new Float32Array(e),n,i)}}const J0=new Dr,Fs=new O,Bl=new O;class Ra{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):J0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const n=Fs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Bl)),this.expandByPoint(Fs.copy(e.center).sub(Bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Q0=0;const Dn=new mt,$l=new Zt,Zr=new O,Pn=new Dr,ks=new Dr,Wt=new O;class Yn extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(v0(e)?up:cp)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,n,i){return Dn.makeTranslation(e,n,i),this.applyMatrix4(Dn),this}scale(e,n,i){return Dn.makeScale(e,n,i),this.applyMatrix4(Dn),this}lookAt(e){return $l.lookAt(e),$l.updateMatrix(),this.applyMatrix4($l.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&$e("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ks.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Pn.min,ks.min),Pn.expandByPoint(Wt),Wt.addVectors(Pn.max,ks.max),Pn.expandByPoint(Wt)):(Pn.expandByPoint(ks.min),Pn.expandByPoint(ks.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Wt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Wt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Wt.fromBufferAttribute(o,c),l&&(Zr.fromBufferAttribute(e,c),Wt.add(Zr)),r=Math.max(r,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ri(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new O,l[k]=new O;const u=new O,d=new O,f=new O,h=new Xe,g=new Xe,v=new Xe,p=new O,m=new O;function _(k,N,F){c[k]=c[N]=c[F]=1,u.fromBufferAttribute(i,k),d.fromBufferAttribute(i,N),f.fromBufferAttribute(i,F),h.fromBufferAttribute(s,k),g.fromBufferAttribute(s,N),v.fromBufferAttribute(s,F),d.sub(u),f.sub(u),g.sub(h),v.sub(h);const B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar(B),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(B),o[k].add(p),o[N].add(p),o[F].add(p),l[k].add(m),l[N].add(m),l[F].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let k=0,N=M.length;k<N;++k){const F=M[k],B=F.start,q=F.count;for(let P=B,X=B+q;P<X;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const b=new O,T=new O,A=new O,x=new O;function S(k){A.fromBufferAttribute(r,k),x.copy(A);const N=o[k];b.copy(N),b.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(x,N);const B=T.dot(l[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,B)}for(let k=0,N=i.count;k<N;++k)c[k]&&S(k);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ri(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Wt.fromBufferAttribute(e,n),Wt.normalize(),e.setXYZ(n,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Ri(f,u,d)}if(this.index===null)return $e("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Yn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class e_{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ip,this.updateRanges=[],this.version=0,this.uuid=Qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Fd(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Fd(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Fd(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Qi()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const cn=new O;class Wo{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?ul(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyMatrix4(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.applyNormalMatrix(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)cn.fromBufferAttribute(this,n),cn.transformDirection(e),this.setXYZ(n,cn.x,cn.y,cn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Vo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ri(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Tu(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Au(e,this.data.array)}}const Hl=new O,t_=new O,n_=new Ve;class Hi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hl.subVectors(i,n).cross(t_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Hl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||n_.getNormalMatrix(e),r=this.coplanarPoint(Hl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let i_=0;class Es extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=Qi(),this.name="",this.type="Material",this.blending=ra,this.side=Rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kh,this.blendDst=zh,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=f0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=El,this.stencilZFail=El,this.stencilZPass=El,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){$e(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){$e(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Hi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Mo extends Es{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qr;const zs=new O,Yr=new O,jr=new O,Kr=new Xe,Bs=new Xe,dp=new mt,Wa=new O,$s=new O,Xa=new O,kd=new Xe,Gl=new Xe,zd=new Xe;class Vl extends Zt{constructor(e=new Mo){if(super(),this.isSprite=!0,this.type="Sprite",qr===void 0){qr=new Yn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new e_(n,5);qr.setIndex([0,1,2,0,2,3]),qr.setAttribute("position",new Wo(i,3,0,!1)),qr.setAttribute("uv",new Wo(i,2,3,!1))}this.geometry=qr,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Yr.setFromMatrixScale(this.matrixWorld),dp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),jr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Yr.multiplyScalar(-jr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Za(Wa.set(-.5,-.5,0),jr,a,Yr,r,s),Za($s.set(.5,-.5,0),jr,a,Yr,r,s),Za(Xa.set(.5,.5,0),jr,a,Yr,r,s),kd.set(0,0),Gl.set(1,0),zd.set(1,1);let o=e.ray.intersectTriangle(Wa,$s,Xa,!1,zs);if(o===null&&(Za($s.set(-.5,.5,0),jr,a,Yr,r,s),Gl.set(0,1),o=e.ray.intersectTriangle(Wa,Xa,$s,!1,zs),o===null))return;const l=e.ray.origin.distanceTo(zs);l<e.near||l>e.far||n.push({distance:l,point:zs.clone(),uv:kn.getInterpolation(zs,Wa,$s,Xa,kd,Gl,zd,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function Za(t,e,n,i,r,s){Kr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Bs.x=s*Kr.x-r*Kr.y,Bs.y=r*Kr.x+s*Kr.y):Bs.copy(Kr),t.copy(e),t.x+=Bs.x,t.y+=Bs.y,t.applyMatrix4(dp)}const yi=new O,Wl=new O,qa=new O,Ya=new O;class r_{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,n),yi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Wl.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),Ya.copy(this.origin).sub(Wl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(qa),o=Ya.dot(this.direction),l=-Ya.dot(qa),c=Ya.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wl).addScaledVector(qa,f),h}intersectSphere(e,n){if(e.radius<0)return null;yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=n.x-a.x,v=n.y-a.y,p=n.z-a.z,m=i.x-a.x,_=i.y-a.y,M=i.z-a.z,b=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let x,S,k,N,F,B,q,P,X,ne,W,he;if(b>=T&&b>=A?(k=l,B=d,X=g,he=m,l>=0?(x=c,S=u,N=f,F=h,q=v,P=p,ne=_,W=M):(x=u,S=c,N=h,F=f,q=p,P=v,ne=M,W=_)):T>=A?(k=c,B=f,X=v,he=_,c>=0?(x=u,S=l,N=h,F=d,q=p,P=g,ne=M,W=m):(x=l,S=u,N=d,F=h,q=g,P=p,ne=m,W=M)):(k=u,B=h,X=p,he=M,u>=0?(x=l,S=c,N=d,F=f,q=g,P=v,ne=m,W=_):(x=c,S=l,N=f,F=d,q=v,P=g,ne=_,W=m)),k===0)return null;const J=x/k,le=S/k,de=1/k,Ie=N-J*B,He=F-le*B,oe=q-J*X,ve=P-le*X,Re=ne-J*he,ke=W-le*he,we=Re*ve-ke*oe,Ge=Ie*ke-He*Re,xt=oe*He-ve*Ie;if(r){if(we<0||Ge<0||xt<0)return null}else if((we<0||Ge<0||xt<0)&&(we>0||Ge>0||xt>0))return null;const ze=we+Ge+xt;if(ze===0)return null;const lt=de*(we*B+Ge*X+xt*he);return(ze>0?lt<0:lt>0)?null:this.at(lt/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _r extends Es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bd=new mt,dr=new r_,ja=new Ra,$d=new O,Ka=new O,Ja=new O,Qa=new O,Xl=new O,eo=new O,Hd=new O,to=new O;class vt extends Zt{constructor(e=new Yn,n=new _r){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){eo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(Xl.fromBufferAttribute(d,e),a?eo.addScaledVector(Xl,u):eo.addScaledVector(Xl.sub(n),u))}n.add(eo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ja.copy(i.boundingSphere),ja.applyMatrix4(s),dr.copy(e.ray).recast(e.near),!(ja.containsPoint(dr.origin)===!1&&(dr.intersectSphere(ja,$d)===null||dr.origin.distanceToSquared($d)>(e.far-e.near)**2))&&(Bd.copy(s).invert(),dr.copy(e.ray).applyMatrix4(Bd),!(i.boundingBox!==null&&dr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,dr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=_,T=M;b<T;b+=3){const A=o.getX(b),x=o.getX(b+1),S=o.getX(b+2);r=no(this,m,e,i,c,u,d,A,x,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const _=o.getX(p),M=o.getX(p+1),b=o.getX(p+2);r=no(this,a,e,i,c,u,d,_,M,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=_,T=M;b<T;b+=3){const A=b,x=b+1,S=b+2;r=no(this,m,e,i,c,u,d,A,x,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const _=p,M=p+1,b=p+2;r=no(this,a,e,i,c,u,d,_,M,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function s_(t,e,n,i,r,s,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Rr,o),l===null)return null;to.copy(o),to.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(to);return c<n.near||c>n.far?null:{distance:c,point:to.clone(),object:t}}function no(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ka),t.getVertexPosition(l,Ja),t.getVertexPosition(c,Qa);const u=s_(t,e,n,i,Ka,Ja,Qa,Hd);if(u){const d=new O;kn.getBarycoord(Hd,Ka,Ja,Qa,d),r&&(u.uv=kn.getInterpolatedAttribute(r,o,l,c,d,new Xe)),s&&(u.uv1=kn.getInterpolatedAttribute(s,o,l,c,d,new Xe)),a&&(u.normal=kn.getInterpolatedAttribute(a,o,l,c,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new O,materialIndex:0};kn.getNormal(Ka,Ja,Qa,f.normal),u.face=f,u.barycoord=d}return u}class fp extends an{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Kt,u=Kt,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gd extends Ri{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Jr=new mt,Vd=new mt,io=[],Wd=new Dr,a_=new mt,Hs=new vt,Gs=new Ra;class o_ extends vt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Gd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,a_)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Dr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Jr),Wd.copy(e.boundingBox).applyMatrix4(Jr),this.boundingBox.union(Wd)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ra),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Jr),Gs.copy(e.boundingSphere).applyMatrix4(Jr),this.boundingSphere.union(Gs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Hs.geometry=this.geometry,Hs.material=this.material,Hs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gs.copy(this.boundingSphere),Gs.applyMatrix4(i),e.ray.intersectsSphere(Gs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Jr),Vd.multiplyMatrices(i,Jr),Hs.matrixWorld=Vd,Hs.raycast(e,io);for(let a=0,o=io.length;a<o;a++){const l=io[a];l.instanceId=s,l.object=this,n.push(l)}io.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Gd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new fp(new Float32Array(r*this.count),r,this.count,bu,Zn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fr=new Ra,l_=new Xe(.5,.5),ro=new O;class _a{constructor(e=new Hi,n=new Hi,i=new Hi,r=new Hi,s=new Hi,a=new Hi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=qn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],v=s[9],p=s[10],m=s[11],_=s[12],M=s[13],b=s[14],T=s[15];if(r[0].setComponents(c-a,h-u,m-g,T-_).normalize(),r[1].setComponents(c+a,h+u,m+g,T+_).normalize(),r[2].setComponents(c+o,h+d,m+v,T+M).normalize(),r[3].setComponents(c-o,h-d,m-v,T-M).normalize(),i)r[4].setComponents(l,f,p,b).normalize(),r[5].setComponents(c-l,h-f,m-p,T-b).normalize();else if(r[4].setComponents(c-l,h-f,m-p,T-b).normalize(),n===qn)r[5].setComponents(c+l,h+f,m+p,T+b).normalize();else if(n===ma)r[5].setComponents(l,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),fr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fr)}intersectsSprite(e){fr.center.set(0,0,0);const n=l_.distanceTo(e.center);return fr.radius=.7071067811865476+n,fr.applyMatrix4(e.matrixWorld),this.intersectsSphere(fr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ro.x=r.normal.x>0?e.max.x:e.min.x,ro.y=r.normal.y>0?e.max.y:e.min.y,ro.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ro)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Xd=new mt;class Pu{constructor(){this.coordinateSystem=qn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Xd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new _a),i[r].setFromProjectionMatrix(Xd,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new _a),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Pu().copy(this)}}class hp extends an{constructor(e=[],n=fs,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class hr extends an{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ps extends an{constructor(e,n,i=li,r,s,a,o=Kt,l=Kt,c,u=ji,d=1){if(u!==ji&&u!==Zi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ru(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class pp extends ps{constructor(e,n=li,i=fs,r,s,a=Kt,o=Kt,l,c=ji){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mp extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ur extends Yn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2));function g(v,p,m,_,M,b,T,A,x,S,k){const N=b/x,F=T/S,B=b/2,q=T/2,P=A/2,X=x+1,ne=S+1;let W=0,he=0;const J=new O;for(let le=0;le<ne;le++){const de=le*F-q;for(let Ie=0;Ie<X;Ie++){const He=Ie*N-B;J[v]=He*_,J[p]=de*M,J[m]=P,c.push(J.x,J.y,J.z),J[v]=0,J[p]=0,J[m]=A>0?1:-1,u.push(J.x,J.y,J.z),d.push(Ie/x),d.push(1-le/S),W+=1}}for(let le=0;le<S;le++)for(let de=0;de<x;de++){const Ie=f+de+X*le,He=f+de+X*(le+1),oe=f+(de+1)+X*(le+1),ve=f+(de+1)+X*le;l.push(Ie,He,ve),l.push(He,oe,ve),he+=6}o.addGroup(h,he,k),h+=he,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class va extends Yn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const v=[],p=i/2;let m=0;_(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new qt(d,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(h,2));function _(){const b=new O,T=new O;let A=0;const x=(n-e)/i;for(let S=0;S<=s;S++){const k=[],N=S/s,F=N*(n-e)+e;for(let B=0;B<=r;B++){const q=B/r,P=q*l+o,X=Math.sin(P),ne=Math.cos(P);T.x=F*X,T.y=-N*i+p,T.z=F*ne,d.push(T.x,T.y,T.z),b.set(X,x,ne).normalize(),f.push(b.x,b.y,b.z),h.push(q,1-N),k.push(g++)}v.push(k)}for(let S=0;S<r;S++)for(let k=0;k<s;k++){const N=v[k][S],F=v[k+1][S],B=v[k+1][S+1],q=v[k][S+1];(e>0||k!==0)&&(u.push(N,F,q),A+=3),(n>0||k!==s-1)&&(u.push(F,B,q),A+=3)}c.addGroup(m,A,0),m+=A}function M(b){const T=g,A=new Xe,x=new O;let S=0;const k=b===!0?e:n,N=b===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,p*N,0),f.push(0,N,0),h.push(.5,.5),g++;const F=g;for(let B=0;B<=r;B++){const P=B/r*l+o,X=Math.cos(P),ne=Math.sin(P);x.x=k*ne,x.y=p*N,x.z=k*X,d.push(x.x,x.y,x.z),f.push(0,N,0),A.x=X*.5+.5,A.y=ne*.5*N+.5,h.push(A.x,A.y),g++}for(let B=0;B<r;B++){const q=T+B,P=F+B;b===!0?u.push(P,P+1,q):u.push(P+1,P,q),S+=3}c.addGroup(m,S,b===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Iu extends va{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Iu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class br extends Yn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,h=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const _=m*f-a;for(let M=0;M<c;M++){const b=M*d-s;g.push(b,-_,0),v.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const M=_+c*m,b=_+c*(m+1),T=_+1+c*(m+1),A=_+1+c*m;h.push(M,b,A),h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new br(e.width,e.height,e.widthSegments,e.heightSegments)}}class Lu extends Yn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new O,f=new O,h=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const _=[],M=m/i,b=a+M*o,T=e*Math.cos(b),A=Math.sqrt(e*e-T*T);let x=0;m===0&&a===0?x=.5/n:m===i&&l===Math.PI&&(x=-.5/n);for(let S=0;S<=n;S++){const k=S/n,N=r+k*s;d.x=-A*Math.cos(N),d.y=T,d.z=A*Math.sin(N),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(k+x,1-M),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<n;_++){const M=u[m][_+1],b=u[m][_],T=u[m+1][_],A=u[m+1][_+1];(m!==0||a>0)&&h.push(M,b,A),(m!==i-1||l<Math.PI)&&h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Lu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oa extends Yn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],d=[],f=new O,h=new O,g=new O;for(let v=0;v<=i;v++){const p=a+v/i*o;for(let m=0;m<=r;m++){const _=m/r*s;h.x=(e+n*Math.cos(p))*Math.cos(_),h.y=(e+n*Math.cos(p))*Math.sin(_),h.z=n*Math.sin(p),c.push(h.x,h.y,h.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(m/r),d.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=r;p++){const m=(r+1)*v+p-1,_=(r+1)*(v-1)+p-1,M=(r+1)*(v-1)+p,b=(r+1)*v+p;l.push(m,_,b),l.push(_,M,b)}this.setIndex(l),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(u,3)),this.setAttribute("uv",new qt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Zd(r))r.isRenderTargetTexture?($e("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Zd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function fn(t){const e={};for(let n=0;n<t.length;n++){const i=ms(t[n]);for(const r in i)e[r]=i[r]}return e}function Zd(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function c_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function gp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const u_={clone:ms,merge:fn};var d_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d_,this.fragmentShader=f_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ms(e.uniforms),this.uniformsGroups=c_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new mt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class h_ extends Pr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Eo extends Es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wc,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p_ extends Eo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new qe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new qe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new qe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return as('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){as('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class m_ extends Es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=u0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class g_ extends Es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _p extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class __ extends _p{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Zl=new mt,qd=new O,Yd=new O;class v_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _a,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;qd.setFromMatrixPosition(e.matrixWorld),n.position.copy(qd),Yd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Yd),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Zl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Zl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ma||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const so=new O,ao=new Ms,Kn=new O;class vp extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(so,ao,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ao,Kn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(so,ao,Kn),Kn.x===1&&Kn.y===1&&Kn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(so,ao,Kn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ki=new O,jd=new Xe,Kd=new Xe;class Xn extends vp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ga*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ga*2*Math.atan(Math.tan(sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,jd,Kd),n.subVectors(Kd,jd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(sa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class xp extends vp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class x_ extends v_{constructor(){super(new xp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jd extends _p{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new x_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Qr=-90,es=1;class Xc extends Zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xn(Qr,es,e,n);r.layers=this.layers,this.add(r);const s=new Xn(Qr,es,e,n);s.layers=this.layers,this.add(s);const a=new Xn(Qr,es,e,n);a.layers=this.layers,this.add(a);const o=new Xn(Qr,es,e,n);o.layers=this.layers,this.add(o);const l=new Xn(Qr,es,e,n);l.layers=this.layers,this.add(l);const c=new Xn(Qr,es,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class y_ extends Xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Qd(t,e,n,i){const r=b_(i);switch(n){case Jh:return t*e;case bu:return t*e/r.components*r.byteLength;case Su:return t*e/r.components*r.byteLength;case Cr:return t*e*2/r.components*r.byteLength;case Mu:return t*e*2/r.components*r.byteLength;case Qh:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case Eu:return t*e*4/r.components*r.byteLength;case xo:case yo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bo:case So:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gc:case vc:return Math.max(t,16)*Math.max(e,8)/4;case mc:case _c:return Math.max(t,8)*Math.max(e,8)/2;case xc:case yc:case Sc:case Mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case bc:case zo:case Ec:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Tc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ac:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Rc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Cc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Pc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ic:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Lc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Dc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Uc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Oc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case kc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case zc:case Bc:case $c:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Hc:case Gc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Bo:case Vc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function b_(t){switch(t){case In:case qh:return{byteLength:1,components:1};case pa:case Yh:case ci:return{byteLength:2,components:1};case xu:case yu:return{byteLength:2,components:4};case li:case vu:case Zn:return{byteLength:4,components:1};case jh:case Kh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gu}}));typeof window<"u"&&(window.__THREE__?$e("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gu);function yp(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S_(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var M_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,R_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,C_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,P_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,I_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,N_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,D_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,U_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,O_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,z_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,B_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,H_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,G_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,V_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,X_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Z_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,q_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Y_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,K_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J_="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,av=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,pv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,mv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_v=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ev=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,wv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Av=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Rv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Cv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Iv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Lv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Uv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ov=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,zv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$v=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Wv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Xv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Kv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Qv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ex=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ix=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,sx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ax=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ox=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ux=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,px=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,_x=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,bx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Sx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Mx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ex=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ax=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Cx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Px=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ix=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Lx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dx=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ux=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ox=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zx=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$x=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Zx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ey=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:M_,alphahash_pars_fragment:E_,alphamap_fragment:w_,alphamap_pars_fragment:T_,alphatest_fragment:A_,alphatest_pars_fragment:R_,aomap_fragment:C_,aomap_pars_fragment:P_,batching_pars_vertex:I_,batching_vertex:L_,begin_vertex:N_,beginnormal_vertex:D_,bsdfs:U_,iridescence_fragment:O_,bumpmap_pars_fragment:F_,clipping_planes_fragment:k_,clipping_planes_pars_fragment:z_,clipping_planes_pars_vertex:B_,clipping_planes_vertex:$_,color_fragment:H_,color_pars_fragment:G_,color_pars_vertex:V_,color_vertex:W_,common:X_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:q_,displacementmap_vertex:Y_,emissivemap_fragment:j_,emissivemap_pars_fragment:K_,colorspace_fragment:J_,colorspace_pars_fragment:Q_,envmap_fragment:ev,envmap_common_pars_fragment:tv,envmap_pars_fragment:nv,envmap_pars_vertex:iv,envmap_physical_pars_fragment:pv,envmap_vertex:rv,fog_vertex:sv,fog_pars_vertex:av,fog_fragment:ov,fog_pars_fragment:lv,gradientmap_pars_fragment:cv,lightmap_pars_fragment:uv,lights_lambert_fragment:dv,lights_lambert_pars_fragment:fv,lights_pars_begin:hv,lights_toon_fragment:mv,lights_toon_pars_fragment:gv,lights_phong_fragment:_v,lights_phong_pars_fragment:vv,lights_physical_fragment:xv,lights_physical_pars_fragment:yv,lights_fragment_begin:bv,lights_fragment_maps:Sv,lights_fragment_end:Mv,lightprobes_pars_fragment:Ev,logdepthbuf_fragment:wv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:Av,logdepthbuf_vertex:Rv,map_fragment:Cv,map_pars_fragment:Pv,map_particle_fragment:Iv,map_particle_pars_fragment:Lv,metalnessmap_fragment:Nv,metalnessmap_pars_fragment:Dv,morphinstance_vertex:Uv,morphcolor_vertex:Ov,morphnormal_vertex:Fv,morphtarget_pars_vertex:kv,morphtarget_vertex:zv,normal_fragment_begin:Bv,normal_fragment_maps:$v,normal_pars_fragment:Hv,normal_pars_vertex:Gv,normal_vertex:Vv,normalmap_pars_fragment:Wv,clearcoat_normal_fragment_begin:Xv,clearcoat_normal_fragment_maps:Zv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:jv,packing:Kv,premultiplied_alpha_fragment:Jv,project_vertex:Qv,dithering_fragment:ex,dithering_pars_fragment:tx,roughnessmap_fragment:nx,roughnessmap_pars_fragment:ix,shadowmap_pars_fragment:rx,shadowmap_pars_vertex:sx,shadowmap_vertex:ax,shadowmask_pars_fragment:ox,skinbase_vertex:lx,skinning_pars_vertex:cx,skinning_vertex:ux,skinnormal_vertex:dx,specularmap_fragment:fx,specularmap_pars_fragment:hx,tonemapping_fragment:px,tonemapping_pars_fragment:mx,transmission_fragment:gx,transmission_pars_fragment:_x,uv_pars_fragment:vx,uv_pars_vertex:xx,uv_vertex:yx,worldpos_vertex:bx,background_vert:Sx,background_frag:Mx,backgroundCube_vert:Ex,backgroundCube_frag:wx,cube_vert:Tx,cube_frag:Ax,depth_vert:Rx,depth_frag:Cx,distance_vert:Px,distance_frag:Ix,equirect_vert:Lx,equirect_frag:Nx,linedashed_vert:Dx,linedashed_frag:Ux,meshbasic_vert:Ox,meshbasic_frag:Fx,meshlambert_vert:kx,meshlambert_frag:zx,meshmatcap_vert:Bx,meshmatcap_frag:$x,meshnormal_vert:Hx,meshnormal_frag:Gx,meshphong_vert:Vx,meshphong_frag:Wx,meshphysical_vert:Xx,meshphysical_frag:Zx,meshtoon_vert:qx,meshtoon_frag:Yx,points_vert:jx,points_frag:Kx,shadow_vert:Jx,shadow_frag:Qx,sprite_vert:ey,sprite_frag:ty},Te={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ii={basic:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:fn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:fn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:fn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:fn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:fn([Te.points,Te.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:fn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:fn([Te.common,Te.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:fn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:fn([Te.sprite,Te.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:fn([Te.common,Te.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:fn([Te.lights,Te.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};ii.physical={uniforms:fn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const oo={r:0,b:0,g:0},ny=new mt,bp=new Ve;bp.set(-1,0,0,0,1,0,0,0,1);function iy(t,e,n,i,r,s){const a=new qe(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function h(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const b=_.backgroundBlurriness>0;M=e.get(M,b)}return M}function g(_){let M=!1;const b=h(_);b===null?p(a,o):b&&b.isColor&&(p(b,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(_,M){const b=h(M);b&&b.isCubeTexture?(c===void 0&&(c=new vt(new Ur(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:ms(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ny.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(bp),c.material.toneMapped=tt.getTransfer(b.colorSpace)!==ft,(u!==b||d!==b.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new vt(new br(2,2),new Pr({name:"BackgroundMaterial",uniforms:ms(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Rr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=tt.getTransfer(b.colorSpace)!==ft,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(oo,gp(t)),n.buffers.color.setClear(oo.r,oo.g,oo.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:v,dispose:m}}function ry(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(F,B,q,P,X){let ne=!1;const W=d(F,P,q,B);s!==W&&(s=W,c(s.object)),ne=h(F,P,q,X),ne&&g(F,P,q,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,b(F,B,q,P),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(F){return t.bindVertexArray(F)}function u(F){return t.deleteVertexArray(F)}function d(F,B,q,P){const X=P.wireframe===!0;let ne=i[B.id];ne===void 0&&(ne={},i[B.id]=ne);const W=F.isInstancedMesh===!0?F.id:0;let he=ne[W];he===void 0&&(he={},ne[W]=he);let J=he[q.id];J===void 0&&(J={},he[q.id]=J);let le=J[X];return le===void 0&&(le=f(l()),J[X]=le),le}function f(F){const B=[],q=[],P=[];for(let X=0;X<n;X++)B[X]=0,q[X]=0,P[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:q,attributeDivisors:P,object:F,attributes:{},index:null}}function h(F,B,q,P){const X=s.attributes,ne=B.attributes;let W=0;const he=q.getAttributes();for(const J in he)if(he[J].location>=0){const de=X[J];let Ie=ne[J];if(Ie===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),de===void 0||de.attribute!==Ie||Ie&&de.data!==Ie.data)return!0;W++}return s.attributesNum!==W||s.index!==P}function g(F,B,q,P){const X={},ne=B.attributes;let W=0;const he=q.getAttributes();for(const J in he)if(he[J].location>=0){let de=ne[J];de===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));const Ie={};Ie.attribute=de,de&&de.data&&(Ie.data=de.data),X[J]=Ie,W++}s.attributes=X,s.attributesNum=W,s.index=P}function v(){const F=s.newAttributes;for(let B=0,q=F.length;B<q;B++)F[B]=0}function p(F){m(F,0)}function m(F,B){const q=s.newAttributes,P=s.enabledAttributes,X=s.attributeDivisors;q[F]=1,P[F]===0&&(t.enableVertexAttribArray(F),P[F]=1),X[F]!==B&&(t.vertexAttribDivisor(F,B),X[F]=B)}function _(){const F=s.newAttributes,B=s.enabledAttributes;for(let q=0,P=B.length;q<P;q++)B[q]!==F[q]&&(t.disableVertexAttribArray(q),B[q]=0)}function M(F,B,q,P,X,ne,W){W===!0?t.vertexAttribIPointer(F,B,q,X,ne):t.vertexAttribPointer(F,B,q,P,X,ne)}function b(F,B,q,P){v();const X=P.attributes,ne=q.getAttributes(),W=B.defaultAttributeValues;for(const he in ne){const J=ne[he];if(J.location>=0){let le=X[he];if(le===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(le=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(le=F.instanceColor)),le!==void 0){const de=le.normalized,Ie=le.itemSize,He=e.get(le);if(He===void 0)continue;const oe=He.buffer,ve=He.type,Re=He.bytesPerElement,ke=ve===t.INT||ve===t.UNSIGNED_INT||le.gpuType===vu;if(le.isInterleavedBufferAttribute){const we=le.data,Ge=we.isInterleavedBuffer===!0?we.stride:we.itemSize,xt=le.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let ze=0;ze<J.locationSize;ze++)m(J.location+ze,we.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ze=0;ze<J.locationSize;ze++)p(J.location+ze);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let ze=0;ze<J.locationSize;ze++)M(J.location+ze,Ie/J.locationSize,ve,de,Ge*Re,(xt+Ie/J.locationSize*ze)*Re,ke)}else{if(le.isInstancedBufferAttribute){for(let we=0;we<J.locationSize;we++)m(J.location+we,le.meshPerAttribute);F.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<J.locationSize;we++)p(J.location+we);t.bindBuffer(t.ARRAY_BUFFER,oe);for(let we=0;we<J.locationSize;we++)M(J.location+we,Ie/J.locationSize,ve,de,Ie*Re,Ie/J.locationSize*we*Re,ke)}}else if(W!==void 0){const de=W[he];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(J.location,de);break;case 3:t.vertexAttrib3fv(J.location,de);break;case 4:t.vertexAttrib4fv(J.location,de);break;default:t.vertexAttrib1fv(J.location,de)}}}}_()}function T(){k();for(const F in i){const B=i[F];for(const q in B){const P=B[q];for(const X in P){const ne=P[X];for(const W in ne)u(ne[W].object),delete ne[W];delete P[X]}}delete i[F]}}function A(F){if(i[F.id]===void 0)return;const B=i[F.id];for(const q in B){const P=B[q];for(const X in P){const ne=P[X];for(const W in ne)u(ne[W].object),delete ne[W];delete P[X]}}delete i[F.id]}function x(F){for(const B in i){const q=i[B];for(const P in q){const X=q[P];if(X[F.id]===void 0)continue;const ne=X[F.id];for(const W in ne)u(ne[W].object),delete ne[W];delete X[F.id]}}}function S(F){for(const B in i){const q=i[B],P=F.isInstancedMesh===!0?F.id:0,X=q[P];if(X!==void 0){for(const ne in X){const W=X[ne];for(const he in W)u(W[he].object),delete W[he];delete X[ne]}delete q[P],Object.keys(q).length===0&&delete i[B]}}}function k(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function sy(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function ay(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==ri&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const S=x===ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==In&&x!==Zn&&!S&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&($e("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&$e("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&$e("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:b,maxSamples:T,samples:A}}function oy(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Hi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const _=s?0:i,M=_*4;let b=m.clippingState||null;l.value=b,b=u(g,f,M,h);for(let T=0;T!==M;++T)b[T]=n[T];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=h+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,b=h;M!==v;++M,b+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class Nu extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ur(5,5,5),s=new Pr({name:"CubemapFromEquirect",uniforms:ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:ss});s.uniforms.tEquirect.value=n;const a=new vt(r,s),o=n.minFilter;return n.minFilter===Xi&&(n.minFilter=En),new Xc(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const ef=256,ly=3,cy=20,Sp=256,Mp=16,uy=3,dy=new O,fy=new qe;class Xo{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Xc(1,10,null),this._boxMesh=new vt(new Ur(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=dy}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(fy));const p=new Xc(i,r,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=g,e.background=v,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(ef,sp(e))}_fromTexture(e,n){e.mapping===fs||e.mapping===ha?this._setSize(e.image.length===0?ef:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=tf(e,!1,!1),i=Math.log2(e)-ly;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=tf(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===fs||e.mapping===ha?(this._cubemapMaterial===null&&(this._cubemapMaterial=rf()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=nf()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=hy(),this._integrationMaterial=py());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Mp);for(let a=0;a<=i;a++){const o=Xo.lodToRoughness(a,i);if(a>i-uy)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Sp*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=my());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function tf(t,e,n){return new Nu(t,{minFilter:Xi,generateMipmaps:e,type:ci,colorSpace:$o,depthBuffer:n})}function Ca(t,e,n){return new Pr({name:t,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:n,side:pn,blending:ss,depthTest:!1,depthWrite:!1})}function hy(){return Ca("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Sp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function py(){return Ca("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Mp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function my(){return Ca("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${cy}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function nf(){return Ca("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function rf(){return Ca("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function gy(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===bl||h===Sl)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new Nu(g.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,g=h===bl||h===Sl,v=h===fs||h===ha;if(g||v){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Xo(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const _=f.image;return g&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new Xo(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===bl?f.mapping=fs:h===Sl&&(f.mapping=ha),f}function l(f){let h=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function _y(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&as("WebGLRenderer: "+i+" extension not supported."),r}}}function vy(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const v=s.get(g);v&&(e.remove(v),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(g,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),n.memory.geometries++),v}function u(g){const v=g.attributes;for(const p in v)e.update(v[p],t.ARRAY_BUFFER)}function d(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const _=v!==null?v.array.length:p.array.length/3-1,M=p.count>=65535?up:cp,b=new M(Math.ceil(_/3)*6,1),T=b.array;if(v!==null){const x=v.array;m=v.version;for(let S=0,k=0;S<_;S+=3){const N=x[S+0],F=x[S+1],B=x[S+2];T[k++]=N,T[k++]=F,T[k++]=F,T[k++]=B,T[k++]=B,T[k++]=N}}else{m=p.version;for(let x=0,S=0;x<_;x+=3){const k=x+0,N=x+1,F=x+2;T[S++]=k,T[S++]=N,T[S++]=N,T[S++]=F,T[S++]=F,T[S++]=k}}b.version=m;const A=s.get(g);A&&e.remove(A),s.set(g,b)}function f(g){const v=s.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&d(g)}else d(g);return s.get(g)}function h(){for(const g in r){const v=r[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function xy(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function c(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,d*a,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let v=0;for(let p=0;p<h;p++)v+=f[p];n.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function yy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function by(t,e,n){const i=new WeakMap,r=new wt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let N=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let T=o.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const x=new Float32Array(T*A*4*d),S=new ap(x,T,A,d);S.type=Zn,S.needsUpdate=!0;const k=b*4;for(let F=0;F<d;F++){const B=m[F],q=_[F],P=M[F],X=T*A*4*F;for(let ne=0;ne<B.count;ne++){const W=ne*k;g===!0&&(r.fromBufferAttribute(B,ne),x[X+W+0]=r.x,x[X+W+1]=r.y,x[X+W+2]=r.z,x[X+W+3]=0),v===!0&&(r.fromBufferAttribute(q,ne),x[X+W+4]=r.x,x[X+W+5]=r.y,x[X+W+6]=r.z,x[X+W+7]=0),p===!0&&(r.fromBufferAttribute(P,ne),x[X+W+8]=r.x,x[X+W+9]=r.y,x[X+W+10]=r.z,x[X+W+11]=P.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new Xe(T,A)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Sy(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const My={[$h]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[Gh]:"CINEON_TONE_MAPPING",[_u]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[Xh]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};function Ey(t,e,n,i,r,s){const a=new ai(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Yn;u.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new qt([0,2,0,0,2,0],2));const d=new h_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new vt(u,d),h=new xp(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,_=null,M=[],b=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let x=0;x<M.length;x++){const S=M[x];S.setSize&&S.setSize(T,A)}},this.setEffects=function(T){M=T,b=M.length>0&&M[0].isRenderPass===!0;const A=a.width,x=a.height;M.length>0&&o===null&&(o=new ai(A,x,{type:ci,depthBuffer:!1,stencilBuffer:!1}),l=new ai(A,x,{type:ci,depthBuffer:!1,stencilBuffer:!1}));const S=r===!0&&M.some(k=>k.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new ps(A,x),s===!0&&(c.format=Zi,c.type=hs)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let k=0;k<M.length;k++){const N=M[k];N.setSize&&N.setSize(A,x),S&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(T,A){if(p||T.toneMapping===Ti&&M.length===0)return!1;if(_=A,A!==null){const x=A.width,S=A.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return b===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Ti,!0},this.hasRenderPass=function(){return b},this.end=function(T,A){T.toneMapping=m,p=!0;let x=a,S=o;for(let k=0;k<M.length;k++){const N=M[k];N.enabled!==!1&&(N.render(T,S,x,A),N.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,d.defines={},tt.getTransfer(g)===ft&&(d.defines.SRGB_TRANSFER="");const k=My[v];k&&(d.defines[k]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(_),T.render(f,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const Ep=new an,wp=new ps(1,1),Tp=new pp(1),Ap=new ap,Rp=new H0,Cp=new hp,sf=[],af=[],of=new Float32Array(16),lf=new Float32Array(9),cf=new Float32Array(4);function ws(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=sf[r];if(s===void 0&&(s=new Float32Array(r),sf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function $t(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function dl(t,e){let n=af[e];n===void 0&&(n=new Int32Array(e),af[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function wy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ty(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function Ay(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if($t(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function Ry(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function Cy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if($t(n,i))return;cf.set(i),t.uniformMatrix2fv(this.addr,!1,cf),Ht(n,i)}}function Py(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if($t(n,i))return;lf.set(i),t.uniformMatrix3fv(this.addr,!1,lf),Ht(n,i)}}function Iy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if($t(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if($t(n,i))return;of.set(i),t.uniformMatrix4fv(this.addr,!1,of),Ht(n,i)}}function Ly(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ny(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function Dy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function Uy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function Oy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Fy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if($t(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if($t(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function zy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if($t(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function fl(t){return t.version===0&&(t.compareFunction=np,t.needsUpdate=!0),t}function By(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=fl(wp):s=Ep,n.setTexture2D(e||s,r)}function $y(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rp,r)}function Hy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=fl(Tp):s=Cp,n.setTextureCube(e||s,r)}function Gy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ap,r)}function Vy(t){switch(t){case 5126:return wy;case 35664:return Ty;case 35665:return Ay;case 35666:return Ry;case 35674:return Cy;case 35675:return Py;case 35676:return Iy;case 5124:case 35670:return Ly;case 35667:case 35671:return Ny;case 35668:case 35672:return Dy;case 35669:case 35673:return Uy;case 5125:return Oy;case 36294:return Fy;case 36295:return ky;case 36296:return zy;case 35678:case 36198:case 36298:case 36306:case 35682:return By;case 35679:case 36299:case 36307:return $y;case 35680:case 36300:case 36308:case 36293:return Hy;case 36289:case 36303:case 36311:case 36292:return Gy}}function Wy(t,e){t.uniform1fv(this.addr,e)}function Xy(t,e){const n=ws(e,this.size,2);t.uniform2fv(this.addr,n)}function Zy(t,e){const n=ws(e,this.size,3);t.uniform3fv(this.addr,n)}function qy(t,e){const n=ws(e,this.size,4);t.uniform4fv(this.addr,n)}function Yy(t,e){const n=ws(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function jy(t,e){const n=ws(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ky(t,e){const n=ws(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Jy(t,e){t.uniform1iv(this.addr,e)}function Qy(t,e){t.uniform2iv(this.addr,e)}function eb(t,e){t.uniform3iv(this.addr,e)}function tb(t,e){t.uniform4iv(this.addr,e)}function nb(t,e){t.uniform1uiv(this.addr,e)}function ib(t,e){t.uniform2uiv(this.addr,e)}function rb(t,e){t.uniform3uiv(this.addr,e)}function sb(t,e){t.uniform4uiv(this.addr,e)}function ab(t,e,n){const i=this.cache,r=e.length,s=dl(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=fl(wp):a=Ep;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function ob(t,e,n){const i=this.cache,r=e.length,s=dl(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Rp,s[a])}function lb(t,e,n){const i=this.cache,r=e.length,s=dl(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=fl(Tp):a=Cp;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function cb(t,e,n){const i=this.cache,r=e.length,s=dl(n,r);$t(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ap,s[a])}function ub(t){switch(t){case 5126:return Wy;case 35664:return Xy;case 35665:return Zy;case 35666:return qy;case 35674:return Yy;case 35675:return jy;case 35676:return Ky;case 5124:case 35670:return Jy;case 35667:case 35671:return Qy;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return rb;case 36296:return sb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}class db{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Vy(n.type)}}class fb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=ub(n.type)}}class hb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const ql=/(\w+)(\])?(\[|\.)?/g;function uf(t,e){t.seq.push(e),t.map[e.id]=e}function pb(t,e,n){const i=t.name,r=i.length;for(ql.lastIndex=0;;){const s=ql.exec(i),a=ql.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){uf(n,c===void 0?new db(o,t,e):new fb(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new hb(o),uf(n,d)),n=d}}}class wo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);pb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function df(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const mb=37297;let gb=0;function _b(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const ff=new Ve;function vb(t){tt._getMatrix(ff,tt.workingColorSpace,t);const e=`mat3( ${ff.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case Ho:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return $e("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function hf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+_b(t.getShaderSource(e),o)}else return s}function xb(t,e){const n=vb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const yb={[$h]:"Linear",[Hh]:"Reinhard",[Gh]:"Cineon",[_u]:"ACESFilmic",[Wh]:"AgX",[Xh]:"Neutral",[Vh]:"Custom"};function bb(t,e){const n=yb[e];return n===void 0?($e("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const lo=new O;function Sb(){tt.getLuminanceCoefficients(lo);const t=lo.x.toFixed(4),e=lo.y.toFixed(4),n=lo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Mb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Eb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function wb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Qs(t){return t!==""}function pf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function mf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zc(t){return t.replace(Tb,Ab)}function Ab(t,e){const n=Ze[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Zc(n)}const Rb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gf(t){return t.replace(Rb,Cb)}function Cb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _f(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Pb={[vo]:"SHADOWMAP_TYPE_PCF",[Js]:"SHADOWMAP_TYPE_VSM"};function Ib(t){return Pb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Lb={[ha]:"ENVMAP_MODE_REFRACTION"};function Nb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Lb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Db={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[o0]:"ENVMAP_BLENDING_MIX",[l0]:"ENVMAP_BLENDING_ADD"};function Ub(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Db[t.combine]||"ENVMAP_BLENDING_NONE"}function Ob(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Ib(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Nb(n),d=Ub(n),f=Mb(n),h=Eb(s),g=r.createProgram();let v,p,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(Qs).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(Qs).join(`
`),p.length>0&&(p+=`
`)):(v=[_f(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),p=[_f(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ti?"#define TONE_MAPPING":"",n.toneMapping!==Ti?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Ti?bb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,xb("linearToOutputTexel",n.outputColorSpace),Sb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Zc(a),a=pf(a,n),a=mf(a,n),o=Zc(o),o=pf(o,n),o=mf(o,n),a=gf(a),o=gf(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",n.glslVersion===Md?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Md?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=m+v+a,M=m+p+o,b=df(r,r.VERTEX_SHADER,_),T=df(r,r.FRAGMENT_SHADER,M);r.attachShader(g,b),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(b)||"",q=r.getShaderInfoLog(T)||"",P=F.trim(),X=B.trim(),ne=q.trim();let W=!0,he=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,T);else{const J=hf(r,b,"vertex"),le=hf(r,T,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+J+`
`+le)}else P!==""?$e("WebGLProgram: Program Info Log:",P):(X===""||ne==="")&&(he=!1);he&&(N.diagnostics={runnable:W,programLog:P,vertexShader:{log:X,prefix:v},fragmentShader:{log:ne,prefix:p}})}r.deleteShader(b),r.deleteShader(T),x=new wo(r,g),S=wb(r,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(g,mb)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=gb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let Fb=0;class kb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new zb(e),n.set(e,i)),i}}class zb{constructor(e){this.id=Fb++,this.code=e,this.usedTimes=0}}function Bb(t){return t===Cr||t===zo||t===Bo}function $b(t,e,n,i,r,s){const a=new op,o=new kb,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,k,N,F,B){const q=N.fog,P=F.geometry,X=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,ne=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,W=e.get(x.envMap||X,ne),he=f[x.type];let J=i.precision;x.precision!==null&&(J=i.getMaxPrecision(x.precision),J!==x.precision&&$e("WebGLProgram.getParameters:",x.precision,"not supported, using",J,"instead."));const le=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,de=le!==void 0?le.length:0;let Ie=0;P.morphAttributes.position!==void 0&&(Ie=1),P.morphAttributes.normal!==void 0&&(Ie=2),P.morphAttributes.color!==void 0&&(Ie=3);let He,oe,ve,Re;if(he){const ye=ii[he];He=ye.vertexShader,oe=ye.fragmentShader}else{He=x.vertexShader,oe=x.fragmentShader;const ye=o.getVertexShaderStage(x),at=o.getFragmentShaderStage(x);o.update(x,ye,at),ve=ye.id,Re=at.id}const ke=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),Ge=F.isInstancedMesh===!0,xt=F.isBatchedMesh===!0,ze=!!x.map,lt=!!x.matcap,ut=!!W,Ye=ut&&W.isPMREMTexture===!0,zt=!!x.aoMap,dt=!!x.lightMap,Gt=!!x.bumpMap&&x.wireframe===!1,yt=!!x.normalMap,mn=!!x.displacementMap,Lt=!!x.emissiveMap,on=!!x.metalnessMap,gn=!!x.roughnessMap,_n=x.anisotropy>0,z=x.clearcoat>0,vn=x.diffuseRoughness>0,gt=x.dispersion>0,D=x.retroreflectivity>0,I=x.iridescence>0,se=x.sheen>0,Q=x.transmission>0,re=_n&&!!x.anisotropyMap,w=z&&!!x.clearcoatMap,y=z&&!!x.clearcoatNormalMap,R=z&&!!x.clearcoatRoughnessMap,G=vn&&!!x.diffuseRoughnessMap,L=I&&!!x.iridescenceMap,ae=I&&!!x.iridescenceThicknessMap,ue=se&&!!x.sheenColorMap,j=se&&!!x.sheenRoughnessMap,ie=!!x.specularMap,fe=!!x.specularColorMap,C=!!x.specularIntensityMap,ee=Q&&!!x.transmissionMap,Z=Q&&!!x.thicknessMap,ge=!!x.gradientMap,pe=!!x.alphaMap,me=x.alphaTest>0,xe=!!x.alphaHash,De=!!x.extensions;let $=Ti;x.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&($=t.toneMapping);const Ce=Ye?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Be={shaderID:he,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:oe,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:J,batching:xt,batchingColor:xt&&F._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&F.instanceColor!==null,instancingMorph:Ge&&F.morphTexture!==null,outputColorSpace:ke===null?t.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:lt,envMap:ut,envMapMode:ut&&W.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ce.length-1:null,envMapSize:Ye?Ce[0].width:null,aoMap:zt,lightMap:dt,bumpMap:Gt,normalMap:yt,displacementMap:mn,emissiveMap:Lt,normalMapObjectSpace:yt&&x.normalMapType===d0,normalMapTangentSpace:yt&&x.normalMapType===Wc,packedNormalMap:yt&&x.normalMapType===Wc&&Bb(x.normalMap.format),metalnessMap:on,roughnessMap:gn,anisotropy:_n,anisotropyMap:re,clearcoat:z,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:R,diffuseRoughness:vn,diffuseRoughnessMap:G,dispersion:gt,retroreflection:D,iridescence:I,iridescenceMap:L,iridescenceThicknessMap:ae,sheen:se,sheenColorMap:ue,sheenRoughnessMap:j,specularMap:ie,specularColorMap:fe,specularIntensityMap:C,transmission:Q,transmissionMap:ee,thicknessMap:Z,gradientMap:ge,opaque:x.transparent===!1&&x.blending===ra&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:me,alphaHash:xe,combine:x.combine,mapUv:ze&&h(x.map.channel),aoMapUv:zt&&h(x.aoMap.channel),lightMapUv:dt&&h(x.lightMap.channel),bumpMapUv:Gt&&h(x.bumpMap.channel),normalMapUv:yt&&h(x.normalMap.channel),displacementMapUv:mn&&h(x.displacementMap.channel),emissiveMapUv:Lt&&h(x.emissiveMap.channel),metalnessMapUv:on&&h(x.metalnessMap.channel),roughnessMapUv:gn&&h(x.roughnessMap.channel),anisotropyMapUv:re&&h(x.anisotropyMap.channel),clearcoatMapUv:w&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:G&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:L&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:j&&h(x.sheenRoughnessMap.channel),specularMapUv:ie&&h(x.specularMap.channel),specularColorMapUv:fe&&h(x.specularColorMap.channel),specularIntensityMapUv:C&&h(x.specularIntensityMap.channel),transmissionMapUv:ee&&h(x.transmissionMap.channel),thicknessMapUv:Z&&h(x.thicknessMap.channel),alphaMapUv:pe&&h(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(yt||_n),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!P.attributes.uv&&(ze||pe),fog:!!q,useFog:x.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&yt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ie,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter(ye=>ye.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:$,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&tt.getTransfer(x.map.colorSpace)===ft,decodeVideoTextureEmissive:Lt&&x.emissiveMap.isVideoTexture===!0&&tt.getTransfer(x.emissiveMap.colorSpace)===ft,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Fn,flipSided:x.side===pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:De&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&x.extensions.multiDraw===!0||xt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function v(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)S.push(k),S.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(p(S,x),m(S,x),S.push(t.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){const S=f[x.type];let k;if(S){const N=ii[S];k=u_.clone(N.uniforms)}else k=x.uniforms;return k}function M(x,S){let k=u.get(S);return k!==void 0?++k.usedTimes:(k=new Ob(t,S,x,r),c.push(k),u.set(S,k)),k}function b(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:_,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function Hb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Gb(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function vf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function xf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,v,p,m){let _=t[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},t[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=g,_.materialVariant=a(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function l(f,h,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);const M=o(f,h,g,v,p,m);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):n.push(M)}function c(f,h,g,v,p,m){const _=o(f,h,g,v,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function u(f,h){n.length>1&&n.sort(f||Gb),i.length>1&&i.sort(h||vf),r.length>1&&r.sort(h||vf)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function Vb(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new xf,t.set(i,[a])):r>=s.length?(a=new xf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Wb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new qe};break;case"SpotLight":n={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function Xb(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Zb=0;function qb(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Yb(t){const e=new Wb,n=Xb(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new mt,a=new mt;function o(c){let u=0,d=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,g=0,v=0,p=0,m=0,_=0,M=0,b=0,T=0,A=0,x=0,S=0,k=0,N=0;c.sort(qb);for(let B=0,q=c.length;B<q;B++){const P=c[B],X=P.color,ne=P.intensity,W=P.distance;let he=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Cr?he=P.shadow.map.texture:he=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=X.r*ne,d+=X.g*ne,f+=X.b*ne;else if(P.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(P.sh.coefficients[J],ne);N++}else if(P.isSunLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const le=P.shadow,de=n.get(P);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[g]=de,i.sunShadowMap[g]=he;const Ie=le.getViewportCount();for(let He=0;He<Ie;He++)i.sunShadowMatrix[v+He]=le.getMatrix(He),i.sunShadowCascade[v+He]=le._cascadeData[He];v+=Ie,g++}i.sun[h]=J,h++}else if(P.isDirectionalLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const le=P.shadow,de=n.get(P);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,i.directionalShadow[p]=de,i.directionalShadowMap[p]=he,i.directionalShadowMatrix[p]=P.shadow.matrix,T++}i.directional[p]=J,p++}else if(P.isSpotLight){const J=e.get(P);J.position.setFromMatrixPosition(P.matrixWorld),J.color.copy(X).multiplyScalar(ne),J.distance=W,J.coneCos=Math.cos(P.angle),J.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),J.decay=P.decay,i.spot[_]=J;const le=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,le.updateMatrices(P),P.castShadow&&k++),i.spotLightMatrix[_]=le.matrix,P.castShadow){const de=n.get(P);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,i.spotShadow[_]=de,i.spotShadowMap[_]=he,x++}_++}else if(P.isRectAreaLight){const J=e.get(P);J.color.copy(X).multiplyScalar(ne),J.halfWidth.set(P.width*.5,0,0),J.halfHeight.set(0,P.height*.5,0),i.rectArea[M]=J,M++}else if(P.isPointLight){const J=e.get(P);if(J.color.copy(P.color).multiplyScalar(P.intensity),J.distance=P.distance,J.decay=P.decay,P.castShadow){const le=P.shadow,de=n.get(P);de.shadowIntensity=le.intensity,de.shadowBias=le.bias,de.shadowNormalBias=le.normalBias,de.shadowRadius=le.radius,de.shadowMapSize=le.mapSize,de.shadowCameraNear=le.camera.near,de.shadowCameraFar=le.camera.far,i.pointShadow[m]=de,i.pointShadowMap[m]=he,i.pointShadowMatrix[m]=P.shadow.matrix,A++}i.point[m]=J,m++}else if(P.isHemisphereLight){const J=e.get(P);J.skyColor.copy(P.color).multiplyScalar(ne),J.groundColor.copy(P.groundColor).multiplyScalar(ne),i.hemi[b]=J,b++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.sunLength!==h||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==_||F.rectAreaLength!==M||F.hemiLength!==b||F.numSunShadows!==g||F.numDirectionalShadows!==T||F.numPointShadows!==A||F.numSpotShadows!==x||F.numSpotMaps!==S||F.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-k,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=N,F.sunLength=h,F.directionalLength=p,F.pointLength=m,F.spotLength=_,F.rectAreaLength=M,F.hemiLength=b,F.numSunShadows=g,F.numDirectionalShadows=T,F.numPointShadows=A,F.numSpotShadows=x,F.numSpotMaps=S,F.numLightProbes=N,i.version=Zb++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0,p=0;const m=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const b=c[_];if(b.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),d++}else if(b.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(b.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function yf(t){const e=new Yb(t),n=[],i=[],r=[];function s(d){u.camera=d,n.length=0,i.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):n.push(d)}function o(d){i.push(d)}function l(){e.setup(n),r.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function jb(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new yf(t),e.set(r,[o])):s>=a.length?(o=new yf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Kb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Qb=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],eS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],bf=new mt,Vs=new O,Yl=new O;function tS(t,e,n){let i=new _a;const r=new Xe,s=new Xe,a=new wt,o=new m_,l=new g_,c={},u=n.maxTextureSize,d={[Rr]:pn,[pn]:Rr,[Fn]:Fn},f=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:Kb,fragmentShader:Jb}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Yn;g.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vo;let m=this.type;this.render=function(A,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Hg&&($e("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=vo);const k=t.getRenderTarget(),N=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),B=t.state;B.setBlending(ss),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const q=m!==this.type;q&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(X=>X.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,X=A.length;P<X;P++){const ne=A[P],W=ne.shadow;if(W===void 0){$e("WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const he=W.getFrameExtents();r.multiply(he),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,W.mapSize.y=s.y));const J=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=J,W.map===null||q===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Js){if(ne.isPointLight){$e("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new ai(r.x,r.y,{format:Cr,type:ci,minFilter:En,magFilter:En,generateMipmaps:!1}),W.map.texture.name=ne.name+".shadowMap",W.map.depthTexture=new ps(r.x,r.y,Zn),W.map.depthTexture.name=ne.name+".shadowMapDepth",W.map.depthTexture.format=ji,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Kt,W.map.depthTexture.magFilter=Kt}else ne.isPointLight?(W.map=new Nu(r.x),W.map.depthTexture=new pp(r.x,li)):(W.map=new ai(r.x,r.y),W.map.depthTexture=new ps(r.x,r.y,li)),W.map.depthTexture.name=ne.name+".shadowMap",W.map.depthTexture.format=ji,this.type===vo?(W.map.depthTexture.compareFunction=J?tp:ep,W.map.depthTexture.minFilter=En,W.map.depthTexture.magFilter=En):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=Kt,W.map.depthTexture.magFilter=Kt);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==r.x||W.map.height!==r.y)&&W.map.setSize(r.x,r.y);const le=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();ne.isPointLight!==!0&&W.updateMatrices(ne,S);const de=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let Ie=0;Ie<le;Ie++){const He=W.getCamera(Ie);if(ne.isPointLight){const oe=W.camera,ve=W.matrix,Re=ne.distance||oe.far;Re!==oe.far&&(oe.far=Re,oe.updateProjectionMatrix()),Vs.setFromMatrixPosition(ne.matrixWorld),oe.position.copy(Vs),Yl.copy(oe.position),Yl.add(Qb[Ie]),oe.up.copy(eS[Ie]),oe.lookAt(Yl),oe.updateMatrixWorld(),ve.makeTranslation(-Vs.x,-Vs.y,-Vs.z),bf.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),W._frustum.setFromProjectionMatrix(bf,oe.coordinateSystem,oe.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,Ie),t.clear();else{Ie===0&&(t.setRenderTarget(W.map),t.clear());const oe=W.getViewport(Ie);a.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),B.viewport(a)}i=W.getFrustum(Ie),b(x,S,He,ne,de,this.type)}W.isPointLightShadow!==!0&&this.type===Js&&_(W,S),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(k,N,F)};function _(A,x){const S=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new ai(r.x,r.y,{format:Cr,type:ci}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(x,null,S,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(x,null,S,h,v,null)}function M(A,x,S,k){let N=null;const F=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(F!==void 0)N=F;else if(N=S.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const B=N.uuid,q=x.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let X=P[q];X===void 0&&(X=N.clone(),P[q]=X,x.addEventListener("dispose",T)),N=X}if(N.visible=x.visible,N.wireframe=x.wireframe,k===Js?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:d[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=t.properties.get(N);B.light=S}return N}function b(A,x,S,k,N,F){if(A.visible===!1)return;if(A.layers.test(N)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===Js)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const P=e.update(A),X=A.material;if(Array.isArray(X)){const ne=P.groups;for(let W=0,he=ne.length;W<he;W++){const J=ne[W],le=X[J.materialIndex];if(le&&le.visible){const de=M(A,le,k,F);A.onBeforeShadow(t,A,x,S,P,de,J),t.renderBufferDirect(S,null,P,de,A,J),A.onAfterShadow(t,A,x,S,P,de,J)}}}else if(X.visible){const ne=M(A,X,k,F);A.onBeforeShadow(t,A,x,S,P,ne,null),t.renderBufferDirect(S,null,P,ne,A,null),A.onAfterShadow(t,A,x,S,P,ne,null)}}const q=A.children;for(let P=0,X=q.length;P<X;P++)b(q[P],x,S,k,N,F)}function T(A){A.target.removeEventListener("dispose",T);for(const S in c){const k=c[S],N=A.target.uuid;N in k&&(k[N].dispose(),delete k[N])}}}function nS(t,e){function n(){let C=!1;const ee=new wt;let Z=null;const ge=new wt(0,0,0,0);return{setMask:function(pe){Z!==pe&&!C&&(t.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){C=pe},setClear:function(pe,me,xe,De,$){$===!0&&(pe*=De,me*=De,xe*=De),ee.set(pe,me,xe,De),ge.equals(ee)===!1&&(t.clearColor(pe,me,xe,De),ge.copy(ee))},reset:function(){C=!1,Z=null,ge.set(-1,0,0,0)}}}function i(){let C=!1,ee=!1,Z=null,ge=null,pe=null;return{setReversed:function(me){if(ee!==me){const xe=e.get("EXT_clip_control");me?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ee=me;const De=pe;pe=null,this.setClear(De)}},getReversed:function(){return ee},setTest:function(me){me?we(t.DEPTH_TEST):Ge(t.DEPTH_TEST)},setMask:function(me){Z!==me&&!C&&(t.depthMask(me),Z=me)},setFunc:function(me){if(ee&&(me=b0[me]),ge!==me){switch(me){case oc:t.depthFunc(t.NEVER);break;case lc:t.depthFunc(t.ALWAYS);break;case cc:t.depthFunc(t.LESS);break;case fa:t.depthFunc(t.LEQUAL);break;case uc:t.depthFunc(t.EQUAL);break;case dc:t.depthFunc(t.GEQUAL);break;case fc:t.depthFunc(t.GREATER);break;case hc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=me}},setLocked:function(me){C=me},setClear:function(me){pe!==me&&(pe=me,ee&&(me=1-me),t.clearDepth(me))},reset:function(){C=!1,Z=null,ge=null,pe=null,ee=!1}}}function r(){let C=!1,ee=null,Z=null,ge=null,pe=null,me=null,xe=null,De=null,$=null;return{setTest:function(Ce){C||(Ce?we(t.STENCIL_TEST):Ge(t.STENCIL_TEST))},setMask:function(Ce){ee!==Ce&&!C&&(t.stencilMask(Ce),ee=Ce)},setFunc:function(Ce,Be,ye){(Z!==Ce||ge!==Be||pe!==ye)&&(t.stencilFunc(Ce,Be,ye),Z=Ce,ge=Be,pe=ye)},setOp:function(Ce,Be,ye){(me!==Ce||xe!==Be||De!==ye)&&(t.stencilOp(Ce,Be,ye),me=Ce,xe=Be,De=ye)},setLocked:function(Ce){C=Ce},setClear:function(Ce){$!==Ce&&(t.clearStencil(Ce),$=Ce)},reset:function(){C=!1,ee=null,Z=null,ge=null,pe=null,me=null,xe=null,De=null,$=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],v=null,p=!1,m=null,_=null,M=null,b=null,T=null,A=null,x=null,S=new qe(0,0,0),k=0,N=!1,F=null,B=null,q=null,P=null,X=null;const ne=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,he=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(J)[1]),W=he>=1):J.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),W=he>=2);let le=null,de={};const Ie=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),oe=new wt().fromArray(Ie),ve=new wt().fromArray(He);function Re(C,ee,Z,ge){const pe=new Uint8Array(4),me=t.createTexture();t.bindTexture(C,me),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<Z;xe++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ee+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return me}const ke={};ke[t.TEXTURE_2D]=Re(t.TEXTURE_2D,t.TEXTURE_2D,1),ke[t.TEXTURE_CUBE_MAP]=Re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ke[t.TEXTURE_2D_ARRAY]=Re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ke[t.TEXTURE_3D]=Re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),we(t.DEPTH_TEST),a.setFunc(fa),Gt(!1),yt(xd),we(t.CULL_FACE),zt(ss);function we(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function Ge(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function xt(C,ee){return f[C]!==ee?(t.bindFramebuffer(C,ee),f[C]=ee,C===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ee),C===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function ze(C,ee){let Z=g,ge=!1;if(C){Z=h.get(ee),Z===void 0&&(Z=[],h.set(ee,Z));const pe=C.textures;if(Z.length!==pe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let me=0,xe=pe.length;me<xe;me++)Z[me]=t.COLOR_ATTACHMENT0+me;Z.length=pe.length,ge=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,ge=!0);ge&&t.drawBuffers(Z)}function lt(C){return v!==C?(t.useProgram(C),v=C,!0):!1}const ut={[is]:t.FUNC_ADD,[Vg]:t.FUNC_SUBTRACT,[Wg]:t.FUNC_REVERSE_SUBTRACT};ut[Xg]=t.MIN,ut[Zg]=t.MAX;const Ye={[qg]:t.ZERO,[Yg]:t.ONE,[jg]:t.SRC_COLOR,[kh]:t.SRC_ALPHA,[n0]:t.SRC_ALPHA_SATURATE,[e0]:t.DST_COLOR,[Jg]:t.DST_ALPHA,[Kg]:t.ONE_MINUS_SRC_COLOR,[zh]:t.ONE_MINUS_SRC_ALPHA,[t0]:t.ONE_MINUS_DST_COLOR,[Qg]:t.ONE_MINUS_DST_ALPHA,[i0]:t.CONSTANT_COLOR,[r0]:t.ONE_MINUS_CONSTANT_COLOR,[s0]:t.CONSTANT_ALPHA,[a0]:t.ONE_MINUS_CONSTANT_ALPHA};function zt(C,ee,Z,ge,pe,me,xe,De,$,Ce){if(C===ss){p===!0&&(Ge(t.BLEND),p=!1);return}if(p===!1&&(we(t.BLEND),p=!0),C!==Gg){if(C!==m||Ce!==N){if((_!==is||T!==is)&&(t.blendEquation(t.FUNC_ADD),_=is,T=is),Ce)switch(C){case ra:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yd:t.blendFunc(t.ONE,t.ONE);break;case bd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",C);break}else switch(C){case ra:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case yd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case bd:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sd:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",C);break}M=null,b=null,A=null,x=null,S.set(0,0,0),k=0,m=C,N=Ce}return}pe=pe||ee,me=me||Z,xe=xe||ge,(ee!==_||pe!==T)&&(t.blendEquationSeparate(ut[ee],ut[pe]),_=ee,T=pe),(Z!==M||ge!==b||me!==A||xe!==x)&&(t.blendFuncSeparate(Ye[Z],Ye[ge],Ye[me],Ye[xe]),M=Z,b=ge,A=me,x=xe),(De.equals(S)===!1||$!==k)&&(t.blendColor(De.r,De.g,De.b,$),S.copy(De),k=$),m=C,N=!1}function dt(C,ee){C.side===Fn?Ge(t.CULL_FACE):we(t.CULL_FACE);let Z=C.side===pn;ee&&(Z=!Z),Gt(Z),C.blending===ra&&C.transparent===!1?zt(ss):zt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const ge=C.stencilWrite;o.setTest(ge),ge&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Lt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):Ge(t.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(C){F!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),F=C)}function yt(C){C!==Bg?(we(t.CULL_FACE),C!==B&&(C===xd?t.cullFace(t.BACK):C===$g?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ge(t.CULL_FACE),B=C}function mn(C){C!==q&&(W&&t.lineWidth(C),q=C)}function Lt(C,ee,Z){C?(we(t.POLYGON_OFFSET_FILL),(P!==ee||X!==Z)&&(P=ee,X=Z,a.getReversed()&&(ee=-ee,Z=-Z),t.polygonOffset(ee,Z))):Ge(t.POLYGON_OFFSET_FILL)}function on(C){C?we(t.SCISSOR_TEST):Ge(t.SCISSOR_TEST)}function gn(C){C===void 0&&(C=t.TEXTURE0+ne-1),le!==C&&(t.activeTexture(C),le=C)}function _n(C,ee,Z){Z===void 0&&(le===null?Z=t.TEXTURE0+ne-1:Z=le);let ge=de[Z];ge===void 0&&(ge={type:void 0,texture:void 0},de[Z]=ge),(ge.type!==C||ge.texture!==ee)&&(le!==Z&&(t.activeTexture(Z),le=Z),t.bindTexture(C,ee||ke[C]),ge.type=C,ge.texture=ee)}function z(){const C=de[le];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function vn(){try{t.compressedTexImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function gt(){try{t.compressedTexImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function D(){try{t.texSubImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function I(){try{t.texSubImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function se(){try{t.compressedTexSubImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function Q(){try{t.compressedTexSubImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function re(){try{t.texStorage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function w(){try{t.texStorage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function y(){try{t.texImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function R(){try{t.texImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function G(C){return d[C]!==void 0?d[C]:t.getParameter(C)}function L(C,ee){d[C]!==ee&&(t.pixelStorei(C,ee),d[C]=ee)}function ae(C){oe.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),oe.copy(C))}function ue(C){ve.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function j(C,ee){let Z=c.get(ee);Z===void 0&&(Z=new WeakMap,c.set(ee,Z));let ge=Z.get(C);ge===void 0&&(ge=t.getUniformBlockIndex(ee,C.name),t.uniformBlockBinding(ee,ge,ge),Z.set(C,ge))}function ie(C,ee,Z){const pe=c.get(ee).get(C);l[pe]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,pe,Z),l[pe]=Z)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},le=null,de={},f={},l={},h=new WeakMap,g=[],v=null,p=!1,m=null,_=null,M=null,b=null,T=null,A=null,x=null,S=new qe(0,0,0),k=0,N=!1,F=null,B=null,q=null,P=null,X=null,oe.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:we,disable:Ge,bindFramebuffer:xt,drawBuffers:ze,useProgram:lt,setBlending:zt,setMaterial:dt,setFlipSided:Gt,setCullFace:yt,setLineWidth:mn,setPolygonOffset:Lt,setScissorTest:on,activeTexture:gn,bindTexture:_n,unbindTexture:z,compressedTexImage2D:vn,compressedTexImage3D:gt,texImage2D:y,texImage3D:R,pixelStorei:L,getParameter:G,updateUBOMapping:j,uniformBlockBinding:ie,texStorage2D:re,texStorage3D:w,texSubImage2D:D,texSubImage3D:I,compressedTexSubImage2D:se,compressedTexSubImage3D:Q,scissor:ae,viewport:ue,reset:fe}}function iS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,d=new Set;let f;const h=new WeakMap,g=new Set,v=new FinalizationRegistry(w=>g.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return p?new OffscreenCanvas(w,y):Go("canvas")}function _(w,y,R){let G=1;const L=re(w);if((L.width>R||L.height>R)&&(G=R/Math.max(L.width,L.height)),G<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const ae=Math.floor(G*L.width),ue=Math.floor(G*L.height);f===void 0&&(f=m(ae,ue));const j=y?m(ae,ue):f;return j.width=ae,j.height=ue,j.getContext("2d").drawImage(w,0,0,ae,ue),$e("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ae+"x"+ue+")."),j}else return"data"in w&&$e("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),w;return w}function M(w){return w.generateMipmaps}function b(w){t.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(w,y,R,G,L,ae=!1){if(w!==null){if(t[w]!==void 0)return t[w];$e("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||$e("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=y;if(y===t.RED&&(R===t.FLOAT&&(j=t.R32F),R===t.HALF_FLOAT&&(j=t.R16F),R===t.UNSIGNED_BYTE&&(j=t.R8),R===t.UNSIGNED_SHORT&&ue&&(j=ue.R16_EXT),R===t.SHORT&&ue&&(j=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&(j=t.R8UI),R===t.UNSIGNED_SHORT&&(j=t.R16UI),R===t.UNSIGNED_INT&&(j=t.R32UI),R===t.BYTE&&(j=t.R8I),R===t.SHORT&&(j=t.R16I),R===t.INT&&(j=t.R32I)),y===t.RG&&(R===t.FLOAT&&(j=t.RG32F),R===t.HALF_FLOAT&&(j=t.RG16F),R===t.UNSIGNED_BYTE&&(j=t.RG8),R===t.UNSIGNED_SHORT&&ue&&(j=ue.RG16_EXT),R===t.SHORT&&ue&&(j=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&(j=t.RG8UI),R===t.UNSIGNED_SHORT&&(j=t.RG16UI),R===t.UNSIGNED_INT&&(j=t.RG32UI),R===t.BYTE&&(j=t.RG8I),R===t.SHORT&&(j=t.RG16I),R===t.INT&&(j=t.RG32I)),y===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&(j=t.RGB8UI),R===t.UNSIGNED_SHORT&&(j=t.RGB16UI),R===t.UNSIGNED_INT&&(j=t.RGB32UI),R===t.BYTE&&(j=t.RGB8I),R===t.SHORT&&(j=t.RGB16I),R===t.INT&&(j=t.RGB32I)),y===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),R===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),R===t.UNSIGNED_INT&&(j=t.RGBA32UI),R===t.BYTE&&(j=t.RGBA8I),R===t.SHORT&&(j=t.RGBA16I),R===t.INT&&(j=t.RGBA32I)),y===t.RGB&&(R===t.UNSIGNED_SHORT&&ue&&(j=ue.RGB16_EXT),R===t.SHORT&&ue&&(j=ue.RGB16_SNORM_EXT),R===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),R===t.UNSIGNED_INT_10F_11F_11F_REV&&(j=t.R11F_G11F_B10F)),y===t.RGBA){const ie=ae?Ho:tt.getTransfer(L);R===t.FLOAT&&(j=t.RGBA32F),R===t.HALF_FLOAT&&(j=t.RGBA16F),R===t.UNSIGNED_BYTE&&(j=ie===ft?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT&&ue&&(j=ue.RGBA16_EXT),R===t.SHORT&&ue&&(j=ue.RGBA16_SNORM_EXT),R===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(w,y){let R;return w?y===null||y===li||y===hs?R=t.DEPTH24_STENCIL8:y===Zn?R=t.DEPTH32F_STENCIL8:y===pa&&(R=t.DEPTH24_STENCIL8,$e("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===li||y===hs?R=t.DEPTH_COMPONENT24:y===Zn?R=t.DEPTH_COMPONENT32F:y===pa&&(R=t.DEPTH_COMPONENT16),R}function S(w,y){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==Kt&&w.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function k(w){const y=new WeakRef(w);i.get(w).__ref=y,g.add(y),v.register(w,y,y)}function N(w){const y=i.get(w).__ref;y!==void 0&&(g.delete(y),v.unregister(y))}function F(w){q(w.target)}function B(w){P(w.target)}function q(w){w.removeEventListener("dispose",F),N(w),ne(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function P(w){w.removeEventListener("dispose",B),N(w),he(w)}function X(){for(const w of g){const y=w.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):q(y))}g.clear(),d.clear()}function ne(w){const y=i.get(w);if(y.__webglInit===void 0)return;const R=w.source,G=h.get(R);if(G){const L=G[y.__cacheKey];L.usedTimes--,L.usedTimes===0&&W(w),Object.keys(G).length===0&&h.delete(R)}i.remove(w)}function W(w){const y=i.get(w);t.deleteTexture(y.__webglTexture);const R=w.source,G=h.get(R);delete G[y.__cacheKey],a.memory.textures--}function he(w){const y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();const R=w.depthTexture;if(R&&R.renderTarget===w&&q(R),w.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(y.__webglFramebuffer[L]))for(let ae=0;ae<y.__webglFramebuffer[L].length;ae++)t.deleteFramebuffer(y.__webglFramebuffer[L][ae]);else t.deleteFramebuffer(y.__webglFramebuffer[L]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[L])}else{if(Array.isArray(y.__webglFramebuffer))for(let L=0;L<y.__webglFramebuffer.length;L++)t.deleteFramebuffer(y.__webglFramebuffer[L]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let L=0;L<y.__webglColorRenderbuffer.length;L++)y.__webglColorRenderbuffer[L]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[L]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=w.textures;for(let L=0,ae=G.length;L<ae;L++){const ue=i.get(G[L]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(G[L])}i.remove(w)}let J=0;function le(){J=0}function de(){return J}function Ie(w){J=w}function He(){const w=J;return w>=r.maxTextures&&$e("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),J+=1,w}function oe(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function ve(w,y){const R=i.get(w);if(w.isVideoTexture&&se(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&R.__version!==w.version){const G=w.image;if(G===null)$e("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)$e("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(R,w,y);return}}else w.isExternalTexture&&(R.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+y)}function Re(w,y){const R=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&R.__version!==w.version){dt(R,w,y);return}else w.isExternalTexture&&(R.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+y)}function ke(w,y){const R=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&R.__version!==w.version){dt(R,w,y);return}n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+y)}function we(w,y){const R=i.get(w);if(w.version>0&&R.__version!==w.version){Gt(R,w,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+y)}const Ge={[ko]:t.REPEAT,[Mi]:t.CLAMP_TO_EDGE,[pc]:t.MIRRORED_REPEAT},xt={[Kt]:t.NEAREST,[c0]:t.NEAREST_MIPMAP_NEAREST,[Fa]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Ml]:t.LINEAR_MIPMAP_NEAREST,[Xi]:t.LINEAR_MIPMAP_LINEAR},ze={[h0]:t.NEVER,[np]:t.ALWAYS,[p0]:t.LESS,[ep]:t.LEQUAL,[m0]:t.EQUAL,[tp]:t.GEQUAL,[g0]:t.GREATER,[_0]:t.NOTEQUAL};function lt(w,y){if(y.type===Zn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===Ml||y.magFilter===Fa||y.magFilter===Xi||y.minFilter===En||y.minFilter===Ml||y.minFilter===Fa||y.minFilter===Xi)&&$e("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,Ge[y.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,Ge[y.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,Ge[y.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,xt[y.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kt||y.minFilter!==Fa&&y.minFilter!==Xi||y.type===Zn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ut(w,y){let R=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",F),k(y));const G=y.source;let L=h.get(G);L===void 0&&(L={},h.set(G,L));const ae=oe(y);if(ae!==w.__cacheKey){L[ae]===void 0&&(L[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,R=!0),L[ae].usedTimes++;const ue=L[w.__cacheKey];ue!==void 0&&(L[w.__cacheKey].usedTimes--,ue.usedTimes===0&&W(y)),w.__cacheKey=ae,w.__webglTexture=L[ae].texture}return R}function Ye(w,y,R){return Math.floor(Math.floor(w/R)/y)}function zt(w,y,R,G){const ae=w.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,R,G,y.data);else{ae.sort((C,ee)=>C.start-ee.start);let ue=0;for(let C=1;C<ae.length;C++){const ee=ae[ue],Z=ae[C],ge=ee.start+ee.count,pe=Ye(Z.start,y.width,4),me=Ye(ee.start,y.width,4);Z.start<=ge+1&&pe===me&&Ye(Z.start+Z.count-1,y.width,4)===pe?ee.count=Math.max(ee.count,Z.start+Z.count-ee.start):(++ue,ae[ue]=Z)}ae.length=ue+1;const j=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let C=0,ee=ae.length;C<ee;C++){const Z=ae[C],ge=Math.floor(Z.start/4),pe=Math.ceil(Z.count/4),me=ge%y.width,xe=Math.floor(ge/y.width),De=pe,$=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe),n.texSubImage2D(t.TEXTURE_2D,0,me,xe,De,$,R,G,y.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,j),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function dt(w,y,R){let G=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=t.TEXTURE_3D);const L=ut(w,y),ae=y.source;n.bindTexture(G,w.__webglTexture,t.TEXTURE0+R);const ue=i.get(ae);if(ae.version!==ue.__version||L===!0){if(n.activeTexture(t.TEXTURE0+R),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const $=tt.getPrimaries(tt.workingColorSpace),Ce=y.colorSpace===Vi?null:tt.getPrimaries(y.colorSpace),Be=y.colorSpace===Vi||$===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ie=_(y.image,!1,r.maxTextureSize);ie=Q(y,ie);const fe=s.convert(y.format,y.colorSpace),C=s.convert(y.type);let ee=A(y.internalFormat,fe,C,y.normalized,y.colorSpace,y.isVideoTexture);lt(G,y);let Z;const ge=y.mipmaps,pe=y.isVideoTexture!==!0,me=ue.__version===void 0||L===!0,xe=ae.dataReady,De=S(y,ie);if(y.isDepthTexture)ee=x(y.format===Zi,y.type),me&&(pe?n.texStorage2D(t.TEXTURE_2D,1,ee,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,ee,ie.width,ie.height,0,fe,C,null));else if(y.isDataTexture)if(ge.length>0){pe&&me&&n.texStorage2D(t.TEXTURE_2D,De,ee,ge[0].width,ge[0].height);for(let $=0,Ce=ge.length;$<Ce;$++)Z=ge[$],pe?xe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Z.width,Z.height,fe,C,Z.data):n.texImage2D(t.TEXTURE_2D,$,ee,Z.width,Z.height,0,fe,C,Z.data);y.generateMipmaps=!1}else pe?(me&&n.texStorage2D(t.TEXTURE_2D,De,ee,ie.width,ie.height),xe&&zt(y,ie,fe,C)):n.texImage2D(t.TEXTURE_2D,0,ee,ie.width,ie.height,0,fe,C,ie.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){pe&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,ee,ge[0].width,ge[0].height,ie.depth);for(let $=0,Ce=ge.length;$<Ce;$++)if(Z=ge[$],y.format!==ri)if(fe!==null)if(pe){if(xe)if(y.layerUpdates.size>0){const Be=Qd(Z.width,Z.height,y.format,y.type);for(const ye of y.layerUpdates){const at=Z.data.subarray(ye*Be/Z.data.BYTES_PER_ELEMENT,(ye+1)*Be/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,ye,Z.width,Z.height,1,fe,at)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Z.width,Z.height,ie.depth,fe,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,$,ee,Z.width,Z.height,ie.depth,0,Z.data,0,0);else $e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,$,0,0,0,Z.width,Z.height,ie.depth,fe,C,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,$,ee,Z.width,Z.height,ie.depth,0,fe,C,Z.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{pe&&me&&n.texStorage2D(t.TEXTURE_2D,De,ee,ge[0].width,ge[0].height);for(let $=0,Ce=ge.length;$<Ce;$++)Z=ge[$],y.format!==ri?fe!==null?pe?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,$,0,0,Z.width,Z.height,fe,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,$,ee,Z.width,Z.height,0,Z.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?xe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,Z.width,Z.height,fe,C,Z.data):n.texImage2D(t.TEXTURE_2D,$,ee,Z.width,Z.height,0,fe,C,Z.data)}else if(y.isDataArrayTexture)if(pe){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,ee,ie.width,ie.height,ie.depth),xe)if(y.layerUpdates.size>0){const $=Qd(ie.width,ie.height,y.format,y.type);for(const Ce of y.layerUpdates){const Be=ie.data.subarray(Ce*$/ie.data.BYTES_PER_ELEMENT,(Ce+1)*$/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ce,ie.width,ie.height,1,fe,C,Be)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,fe,C,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,ie.width,ie.height,ie.depth,0,fe,C,ie.data);else if(y.isData3DTexture)pe?(me&&n.texStorage3D(t.TEXTURE_3D,De,ee,ie.width,ie.height,ie.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,fe,C,ie.data)):n.texImage3D(t.TEXTURE_3D,0,ee,ie.width,ie.height,ie.depth,0,fe,C,ie.data);else if(y.isFramebufferTexture){if(me)if(pe)n.texStorage2D(t.TEXTURE_2D,De,ee,ie.width,ie.height);else{let $=ie.width,Ce=ie.height;for(let Be=0;Be<De;Be++)n.texImage2D(t.TEXTURE_2D,Be,ee,$,Ce,0,fe,C,null),$>>=1,Ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const $=t.canvas;if($.hasAttribute("layoutsubtree")||$.setAttribute("layoutsubtree","true"),ie.parentNode!==$){$.appendChild(ie),d.add(y),$.onpaint=Ce=>{const Be=Ce.changedElements;for(const ye of d)Be.includes(ye.image)&&(ye.needsUpdate=!0)},$.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Be=t.RGBA,ye=t.RGBA,at=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Be,ye,at,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ge.length>0){if(pe&&me){const $=re(ge[0]);n.texStorage2D(t.TEXTURE_2D,De,ee,$.width,$.height)}for(let $=0,Ce=ge.length;$<Ce;$++)Z=ge[$],pe?xe&&n.texSubImage2D(t.TEXTURE_2D,$,0,0,fe,C,Z):n.texImage2D(t.TEXTURE_2D,$,ee,fe,C,Z);y.generateMipmaps=!1}else if(pe){if(me){const $=re(ie);n.texStorage2D(t.TEXTURE_2D,De,ee,$.width,$.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,C,ie)}else n.texImage2D(t.TEXTURE_2D,0,ee,fe,C,ie);M(y)&&y.mipmapsAutoUpdate===!0&&b(G),ue.__version=ae.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Gt(w,y,R){if(y.image.length!==6)return;const G=ut(w,y),L=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+R);const ae=i.get(L);if(L.version!==ae.__version||G===!0){n.activeTexture(t.TEXTURE0+R);const ue=tt.getPrimaries(tt.workingColorSpace),j=y.colorSpace===Vi?null:tt.getPrimaries(y.colorSpace),ie=y.colorSpace===Vi||ue===j?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,ee=[];for(let ye=0;ye<6;ye++)!fe&&!C?ee[ye]=_(y.image[ye],!0,r.maxCubemapSize):ee[ye]=C?y.image[ye].image:y.image[ye],ee[ye]=Q(y,ee[ye]);const Z=ee[0],ge=s.convert(y.format,y.colorSpace),pe=s.convert(y.type);let me=A(y.internalFormat,ge,pe,y.normalized,y.colorSpace);const xe=y.isVideoTexture!==!0,De=ae.__version===void 0||G===!0,$=L.dataReady;let Ce=S(y,Z);lt(t.TEXTURE_CUBE_MAP,y);let Be;if(y.isDepthTexture){if(me=x(y.format===Zi,y.type),De)if(xe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,me,Z.width,Z.height);else for(let ye=0;ye<6;ye++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,Z.width,Z.height,0,ge,pe,null)}else if(fe){xe&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,me,Z.width,Z.height);for(let ye=0;ye<6;ye++){Be=ee[ye].mipmaps;for(let at=0;at<Be.length;at++){const Mt=Be[at];y.format!==ri?ge!==null?xe?$&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at,0,0,Mt.width,Mt.height,ge,Mt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at,me,Mt.width,Mt.height,0,Mt.data):$e("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at,0,0,Mt.width,Mt.height,ge,pe,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at,me,Mt.width,Mt.height,0,ge,pe,Mt.data)}}}else{if(Be=y.mipmaps,xe&&De){Be.length>0&&Ce++;const ye=re(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,me,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(C){xe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ee[ye].width,ee[ye].height,ge,pe,ee[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,ee[ye].width,ee[ye].height,0,ge,pe,ee[ye].data);for(let at=0;at<Be.length;at++){const jn=Be[at].image[ye].image;xe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at+1,0,0,jn.width,jn.height,ge,pe,jn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at+1,me,jn.width,jn.height,0,ge,pe,jn.data)}}else{xe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ge,pe,ee[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,ge,pe,ee[ye]);for(let at=0;at<Be.length;at++){const Mt=Be[at];xe?$&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at+1,0,0,ge,pe,Mt.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,at+1,me,ge,pe,Mt.image[ye])}}}M(y)&&y.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),ae.__version=L.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function yt(w,y,R,G,L,ae){const ue=s.convert(R.format,R.colorSpace),j=s.convert(R.type),ie=A(R.internalFormat,ue,j,R.normalized,R.colorSpace),fe=i.get(y),C=i.get(R);if(C.__renderTarget=y,!fe.__hasExternalTextures){const ee=Math.max(1,y.width>>ae),Z=Math.max(1,y.height>>ae);L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?n.texImage3D(L,ae,ie,ee,Z,y.depth,0,ue,j,null):n.texImage2D(L,ae,ie,ee,Z,0,ue,j,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),I(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,L,C.__webglTexture,0,D(y)):(L===t.TEXTURE_2D||L>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,L,C.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function mn(w,y,R){if(t.bindRenderbuffer(t.RENDERBUFFER,w),y.depthBuffer){const G=y.depthTexture,L=G&&G.isDepthTexture?G.type:null,ae=x(y.stencilBuffer,L),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;I(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),ae,y.width,y.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),ae,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ae,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,w)}else{const G=y.textures;for(let L=0;L<G.length;L++){const ae=G[L],ue=s.convert(ae.format,ae.colorSpace),j=s.convert(ae.type),ie=A(ae.internalFormat,ue,j,ae.normalized,ae.colorSpace);I(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),ie,y.width,y.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ie,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Lt(w,y,R){const G=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const L=i.get(y.depthTexture);L.__renderTarget=y;const ae=G?y.depthTexture.image[0]:y.depthTexture.image;(!L.__webglTexture||ae.width!==y.width||ae.height!==y.height)&&(ae.width=y.width,ae.height=y.height,y.depthTexture.needsUpdate=!0),G?we(y.depthTexture,0):ve(y.depthTexture,0);const ue=L.__webglTexture,j=D(y),ie=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+R:t.TEXTURE_2D,fe=y.depthTexture.format===Zi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===ji)I(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ie,ue,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ie,ue,0);else if(y.depthTexture.format===Zi)I(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ie,ue,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ie,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function on(w){const y=i.get(w),R=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const G=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){const L=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",L)};G.addEventListener("dispose",L),y.__depthDisposeCallback=L}y.__boundDepthTexture=G}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(R)for(let G=0;G<6;G++)Lt(y.__webglFramebuffer[G],w,G);else w.texture.mipmaps.length>0?Lt(y.__webglFramebuffer[0],w,0):Lt(y.__webglFramebuffer,w,0);else if(R){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=t.createRenderbuffer(),mn(y.__webglDepthbuffer[G],w,!1);else{const L=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,ae)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),mn(y.__webglDepthbuffer,w,!1);else{const L=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function gn(w,y,R){const G=i.get(w);y!==void 0&&yt(G.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&on(w)}function _n(w){const y=w.texture,R=i.get(w),G=i.get(y);w.addEventListener("dispose",B),k(w);const L=w.textures,ae=w.isWebGLCubeRenderTarget===!0,ue=L.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=y.version,a.memory.textures++),ae){R.__webglFramebuffer=[];for(let j=0;j<6;j++)if(y.mipmaps.length>0){R.__webglFramebuffer[j]=[];for(let ie=0;ie<y.mipmaps.length;ie++)R.__webglFramebuffer[j][ie]=t.createFramebuffer()}else R.__webglFramebuffer[j]=t.createFramebuffer()}else{if(y.mipmaps.length>0){R.__webglFramebuffer=[];for(let j=0;j<y.mipmaps.length;j++)R.__webglFramebuffer[j]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(ue)for(let j=0,ie=L.length;j<ie;j++){const fe=i.get(L[j]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&I(w)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let j=0;j<L.length;j++){const ie=L[j];R.__webglColorRenderbuffer[j]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[j]);const fe=s.convert(ie.format,ie.colorSpace),C=s.convert(ie.type),ee=A(ie.internalFormat,fe,C,ie.normalized,ie.colorSpace,w.isXRRenderTarget===!0),Z=D(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,ee,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+j,t.RENDERBUFFER,R.__webglColorRenderbuffer[j])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),mn(R.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),lt(t.TEXTURE_CUBE_MAP,y);for(let j=0;j<6;j++)if(y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)yt(R.__webglFramebuffer[j][ie],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,ie);else yt(R.__webglFramebuffer[j],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);M(y)?b(t.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let j=0,ie=L.length;j<ie;j++){const fe=L[j],C=i.get(fe);let ee=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ee=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,C.__webglTexture),lt(ee,fe),yt(R.__webglFramebuffer,w,fe,t.COLOR_ATTACHMENT0+j,ee,0),M(fe)&&b(ee)}n.unbindTexture()}else{let j=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(j=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,G.__webglTexture),lt(j,y),y.mipmaps.length>0)for(let ie=0;ie<y.mipmaps.length;ie++)yt(R.__webglFramebuffer[ie],w,y,t.COLOR_ATTACHMENT0,j,ie);else yt(R.__webglFramebuffer,w,y,t.COLOR_ATTACHMENT0,j,0);M(y)?b(j):y.mipmaps.length>0&&t.texParameteri(j,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&on(w)}function z(w){const y=w.textures;for(let R=0,G=y.length;R<G;R++){const L=y[R];if(M(L)&&L.mipmapsAutoUpdate===!0){const ae=T(w),ue=i.get(L).__webglTexture;n.bindTexture(ae,ue),b(ae),n.unbindTexture()}}}const vn=[];function gt(w){if(w.samples>0){if(I(w)===!1){const y=w.textures,R=w.width,G=w.height;let L=t.COLOR_BUFFER_BIT;const ae=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),j=y.length>1;if(j)for(let fe=0;fe<y.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(L|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(L|=t.STENCIL_BUFFER_BIT)),j){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const C=i.get(y[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,R,G,0,0,R,G,L,t.NEAREST),l===!0&&(vn.length=0,vn.push(t.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&vn.push(ae),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),j)for(let fe=0;fe<y.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const C=i.get(y[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function D(w){return Math.min(r.maxSamples,w.samples)}function I(w){const y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function se(w){const y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function Q(w,y){const R=w.colorSpace,G=w.format,L=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||R!==$o&&R!==Vi&&(tt.getTransfer(R)===ft?(G!==ri||L!==In)&&$e("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",R)),y}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=He,this.resetTextureUnits=le,this.getTextureUnits=de,this.setTextureUnits=Ie,this.setTexture2D=ve,this.setTexture2DArray=Re,this.setTexture3D=ke,this.setTextureCube=we,this.rebindTextures=gn,this.setupRenderTarget=_n,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=on,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=I,this.dispose=X}function rS(t,e){function n(i,r=Vi){let s;const a=tt.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===xu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===yu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===jh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Kh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return t.BYTE;if(i===Yh)return t.SHORT;if(i===pa)return t.UNSIGNED_SHORT;if(i===vu)return t.INT;if(i===li)return t.UNSIGNED_INT;if(i===Zn)return t.FLOAT;if(i===ci)return t.HALF_FLOAT;if(i===Jh)return t.ALPHA;if(i===Qh)return t.RGB;if(i===ri)return t.RGBA;if(i===ji)return t.DEPTH_COMPONENT;if(i===Zi)return t.DEPTH_STENCIL;if(i===bu)return t.RED;if(i===Su)return t.RED_INTEGER;if(i===Cr)return t.RG;if(i===Mu)return t.RG_INTEGER;if(i===Eu)return t.RGBA_INTEGER;if(i===xo||i===yo||i===bo||i===So)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===yo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===bo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===So)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===mc||i===gc||i===_c||i===vc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===mc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===gc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===_c)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===xc||i===yc||i===bc||i===Sc||i===Mc||i===zo||i===Ec)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===xc||i===yc)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===bc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sc)return s.COMPRESSED_R11_EAC;if(i===Mc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===zo)return s.COMPRESSED_RG11_EAC;if(i===Ec)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===wc||i===Tc||i===Ac||i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Nc||i===Dc||i===Uc||i===Oc||i===Fc||i===kc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===wc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Tc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ac)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Rc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Cc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Pc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ic)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Lc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Dc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Uc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Oc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===kc)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===zc||i===Bc||i===$c)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===zc)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Hc||i===Gc||i===Bo||i===Vc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Hc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Bo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const sS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,aS=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new mp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Pr({vertexShader:sS,fragmentShader:aS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vt(new br(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lS extends Nr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",p=new oS,m={},_=n.getContextAttributes();let M=null,b=null;const T=[],A=[],x=new Xe;let S=null,k=null;const N=new Xn;N.viewport=new wt;const F=new Xn;F.viewport=new wt;const B=[N,F],q=new y_;let P=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let ve=T[oe];return ve===void 0&&(ve=new Pl,T[oe]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(oe){let ve=T[oe];return ve===void 0&&(ve=new Pl,T[oe]=ve),ve.getGripSpace()},this.getHand=function(oe){let ve=T[oe];return ve===void 0&&(ve=new Pl,T[oe]=ve),ve.getHandSpace()};function ne(oe){const ve=A.indexOf(oe.inputSource);if(ve===-1)return;const Re=T[ve];Re!==void 0&&(Re.update(oe.inputSource,oe.frame,c||a),Re.dispatchEvent({type:oe.type,data:oe.inputSource}))}function W(){r.removeEventListener("select",ne),r.removeEventListener("selectstart",ne),r.removeEventListener("selectend",ne),r.removeEventListener("squeeze",ne),r.removeEventListener("squeezestart",ne),r.removeEventListener("squeezeend",ne),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",he);for(let oe=0;oe<T.length;oe++){const ve=A[oe];ve!==null&&(A[oe]=null,T[oe].disconnect(ve))}P=null,X=null,p.reset();for(const oe in m)delete m[oe];if(e.setRenderTarget(M),h=null,f=null,d=null,r=null,b=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),k!==null){const oe=k.camera;oe.fov=k.fov,oe.zoom=k.zoom,oe.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){s=oe,i.isPresenting===!0&&$e("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){o=oe,i.isPresenting===!0&&$e("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(oe){c=oe},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(oe){if(r=oe,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",ne),r.addEventListener("selectstart",ne),r.addEventListener("selectend",ne),r.addEventListener("squeeze",ne),r.addEventListener("squeezestart",ne),r.addEventListener("squeezeend",ne),r.addEventListener("end",W),r.addEventListener("inputsourceschange",he),_.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,ke=null,we=null;_.depth&&(we=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=_.stencil?Zi:ji,ke=_.stencil?hs:li);const Ge={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Ge),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ai(f.textureWidth,f.textureHeight,{format:ri,type:In,depthTexture:new ps(f.textureWidth,f.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new ai(h.framebufferWidth,h.framebufferHeight,{format:ri,type:In,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function he(oe){for(let ve=0;ve<oe.removed.length;ve++){const Re=oe.removed[ve],ke=A.indexOf(Re);ke>=0&&(A[ke]=null,T[ke].disconnect(Re))}for(let ve=0;ve<oe.added.length;ve++){const Re=oe.added[ve];let ke=A.indexOf(Re);if(ke===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=A.length){A.push(Re),ke=Ge;break}else if(A[Ge]===null){A[Ge]=Re,ke=Ge;break}if(ke===-1)break}const we=T[ke];we&&we.connect(Re)}}function J(oe,ve){ve===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(ve.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(r===null)return;let ve=oe.near,Re=oe.far;p.texture!==null&&(p.depthNear>0&&(ve=p.depthNear),p.depthFar>0&&(Re=p.depthFar)),q.near=F.near=N.near=ve,q.far=F.far=N.far=Re,(P!==q.near||X!==q.far)&&(r.updateRenderState({depthNear:q.near,depthFar:q.far}),P=q.near,X=q.far),q.layers.mask=oe.layers.mask|6,N.layers.mask=q.layers.mask&-5,F.layers.mask=q.layers.mask&-3;const ke=oe.parent,we=q.cameras;J(q,ke);for(let Ge=0;Ge<we.length;Ge++)J(we[Ge],ke);q.projectionMatrix.copy(N.projectionMatrix),q.projectionMatrixInverse.copy(N.projectionMatrixInverse),k===null&&oe.isPerspectiveCamera&&(k={camera:oe,fov:oe.fov,zoom:oe.zoom}),le(oe,q,ke)};function le(oe,ve,Re){Re===null?oe.matrix.copy(ve.matrixWorld):(oe.matrix.copy(Re.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(ve.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(ve.projectionMatrix),oe.projectionMatrixInverse.copy(ve.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=ga*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(oe){l=oe,f!==null&&(f.fixedFoveation=oe),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=oe)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(oe){return m[oe]};let de=null;function Ie(oe,ve){if(u=ve.getViewerPose(c||a),g=ve,u!==null){const Re=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let ke=!1;Re.length!==q.cameras.length&&(q.cameras.length=0,ke=!0);for(let ze=0;ze<Re.length;ze++){const lt=Re[ze];let ut=null;if(h!==null)ut=h.getViewport(lt);else{const zt=d.getViewSubImage(f,lt);ut=zt.viewport,ze===0&&(e.setRenderTargetTextures(b,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(b))}let Ye=B[ze];Ye===void 0&&(Ye=new Xn,Ye.layers.enable(ze),Ye.viewport=new wt,B[ze]=Ye),Ye.matrix.fromArray(lt.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(lt.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ut.x,ut.y,ut.width,ut.height),ze===0&&(q.matrix.copy(Ye.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ke===!0&&q.cameras.push(Ye)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const ze=d.getDepthInformation(Re[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<Re.length;ze++){const lt=Re[ze].camera;if(lt){let ut=m[lt];ut||(ut=new mp,m[lt]=ut);const Ye=d.getCameraImage(lt);ut.sourceTexture=Ye}}}}for(let Re=0;Re<T.length;Re++){const ke=A[Re],we=T[Re];ke!==null&&we!==void 0&&we.update(ke,ve,c||a)}de&&de(oe,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}const He=new yp;He.setAnimationLoop(Ie),this.setAnimationLoop=function(oe){de=oe},this.dispose=function(){}}}const cS=new mt,Pp=new Ve;Pp.set(-1,0,0,0,1,0,0,0,1);function uS(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,gp(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,_,M,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===pn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===pn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m),M=_.envMap,b=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(cS.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Pp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,n(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function dS(t,e,n,i){let r={},s={};function a(_,M){const b=M.program;i.uniformBlockBinding(_,b,r[_.id])}function o(_,M){let b=r[_.id];b===void 0&&(g(_),b=l(_),r[_.id]=b,_.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(_,T);const A=e.render.frame;s[_.id]!==A&&(c(_),s[_.id]=A)}function l(_){const M=t.createBuffer(),b=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),M}function c(_){const M=r[_.id],b=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let A=0,x=b.length;A<x;A++){const S=b[A];if(Array.isArray(S))for(let k=0,N=S.length;k<N;k++)u(S[k],A,k,T);else u(S,A,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(_,M,b,T){if(f(_,M,b,T)===!0){const A=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let k=0;k<x.length;k++){const N=x[k],F=v(N,!0);d(N,_.__data,S),S+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,_.__data)}}function d(_,M,b){typeof _=="number"||typeof _=="boolean"?M[b]=_:_.isMatrix3?(M[b]=_.elements[0],M[b+1]=_.elements[1],M[b+2]=_.elements[2],M[b+3]=0,M[b+4]=_.elements[3],M[b+5]=_.elements[4],M[b+6]=_.elements[5],M[b+7]=0,M[b+8]=_.elements[6],M[b+9]=_.elements[7],M[b+10]=_.elements[8],M[b+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-b),b):_.toArray(M,b)}function f(_,M,b,T){const A=_.value,x=M+"_"+b;if(Array.isArray(A)){T[x]===void 0&&(T[x]=[]);const S=T[x];let k=!1;for(let N=0;N<A.length;N++)h(A[N],S,N)===!0&&(k=!0);return k}return h(A,T,x)}function h(_,M,b){if(M[b]===void 0)return typeof _=="number"||typeof _=="boolean"?M[b]=_:ArrayBuffer.isView(_)?M[b]=_.slice():M[b]=_.clone(),!0;{const T=M[b];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return M[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(_){const M=_.uniforms;let b=0;const T=16;for(let x=0,S=M.length;x<S;x++){const k=Array.isArray(M[x])?M[x]:[M[x]];for(let N=0,F=k.length;N<F;N++){const B=k[N],q=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(M[x])||Array.isArray(B.value);let X=b;for(let W=0,he=q.length;W<he;W++){const J=q[W],le=v(J,P),de=b%T,Ie=de%le.boundary,He=de+Ie;b+=Ie,He!==0&&T-He<le.storage&&(b+=T-He),W===0&&(X=b),b+=le.storage}const ne=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new ne((b-X)/Float32Array.BYTES_PER_ELEMENT),B.__offset=X}}const A=b%T;return A>0&&(b+=T-A),_.__size=b,_.__cache={},this}function v(_,M){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=16,b.storage=48):_.isMatrix4?(b.boundary=16,b.storage=64):_.isTexture?$e("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):$e("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(_){const M=_.target;M.removeEventListener("dispose",p),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const _ in r)t.deleteBuffer(r[_]);r={},s={}}return{bind:a,update:o,dispose:m}}const fS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function hS(){return Jn===null&&(Jn=new fp(fS,16,16,Cr,ci),Jn.name="DFG_LUT",Jn.minFilter=En,Jn.magFilter=En,Jn.wrapS=Mi,Jn.wrapT=Mi,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class pS{constructor(e={}){const{canvas:n=x0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=In}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=h,p=new Set([Eu,Mu,Su]),m=new Set([In,li,pa,hs,xu,yu]),_=new Uint32Array(4),M=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let T=null,A=null;const x=[],S=[];let k=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ti,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,B=null,q=null,P=null,X=null;this._outputColorSpace=kt;let ne=0,W=0,he=null,J=-1,le=null;const de=new wt,Ie=new wt;let He=null;const oe=new qe(0);let ve=0,Re=n.width,ke=n.height,we=1,Ge=null,xt=null;const ze=new wt(0,0,Re,ke),lt=new wt(0,0,Re,ke);let ut=!1;const Ye=new _a,zt=new Pu;let dt=!1,Gt=!1;const yt=new mt,mn=new O,Lt=new wt,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let gn=!1;function _n(){return he===null?we:1}let z=i;function vn(E,U){return n.getContext(E,U)}let gt,D,I,se,Q,re,w,y,R,G,L,ae,ue,j,ie,fe,C,ee,Z,ge,pe,me,xe;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${gu}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",Be,!1),n.addEventListener("webglcontextcreationerror",ye,!1),z===null){const U="webgl2";if(z=vn(U,E),z===null)throw vn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(E){throw n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),ot("WebGLRenderer: "+E.message),E}function De(){gt=new _y(z),gt.init(),pe=new rS(z,gt),D=new ay(z,gt,e,pe),I=new nS(z,gt),D.reversedDepthBuffer&&f&&I.buffers.depth.setReversed(!0),q=z.createFramebuffer(),P=z.createFramebuffer(),X=z.createFramebuffer(),se=new yy(z),Q=new Hb,re=new iS(z,gt,I,Q,D,pe,se),w=new gy(N),y=new S_(z),me=new ry(z,y),R=new vy(z,y,se,me),G=new Sy(z,R,y,me,se),ee=new by(z,D,re),ie=new oy(Q),L=new $b(N,w,gt,D,me,ie),ae=new uS(N,Q),ue=new Vb,j=new jb(gt),C=new iy(N,w,I,G,g,l),fe=new tS(N,G,D),xe=new dS(z,se,D,I),Z=new sy(z,gt,se),ge=new xy(z,gt,se),se.programs=L.programs,N.capabilities=D,N.extensions=gt,N.properties=Q,N.renderLists=ue,N.shadowMap=fe,N.state=I,N.info=se}v!==In&&(k=new Ey(v,n.width,n.height,o,r,s));const $=new lS(N,z);this.xr=$,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(E){E!==void 0&&(we=E,this.setSize(Re,ke,!1))},this.getSize=function(E){return E.set(Re,ke)},this.setSize=function(E,U,Y=!0){if($.isPresenting){$e("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=E,ke=U,n.width=Math.floor(E*we),n.height=Math.floor(U*we),Y===!0&&(n.style.width=E+"px",n.style.height=U+"px"),k!==null&&k.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(Re*we,ke*we).floor()},this.setDrawingBufferSize=function(E,U,Y){Re=E,ke=U,we=Y,n.width=Math.floor(E*Y),n.height=Math.floor(U*Y),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(v===In){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){$e("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(de)},this.getViewport=function(E){return E.copy(ze)},this.setViewport=function(E,U,Y,H){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,U,Y,H),I.viewport(de.copy(ze).multiplyScalar(_n()).round())},this.getScissor=function(E){return E.copy(lt)},this.setScissor=function(E,U,Y,H){E.isVector4?lt.set(E.x,E.y,E.z,E.w):lt.set(E,U,Y,H),I.scissor(Ie.copy(lt).multiplyScalar(_n()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(E){I.setScissorTest(ut=E)},this.setOpaqueSort=function(E){Ge=E},this.setTransparentSort=function(E){xt=E},this.getClearColor=function(E){return E.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Y=!0){let H=0;if(E){let V=!1;if(he!==null){const Se=he.texture.format;V=p.has(Se)}if(V){const Se=he.texture.type,Pe=m.has(Se),be=C.getClearColor(),Ae=C.getClearAlpha(),Oe=be.r,We=be.g,Qe=be.b;Pe?(_[0]=Oe,_[1]=We,_[2]=Qe,_[3]=Ae,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=Oe,M[1]=We,M[2]=Qe,M[3]=Ae,z.clearBufferiv(z.COLOR,0,M))}else H|=z.COLOR_BUFFER_BIT}U&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Y&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",Be,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),C.dispose(),ue.dispose(),j.dispose(),re.dispose(),Q.dispose(),w.dispose(),G.dispose(),R.dispose(),me.dispose(),xe.dispose(),L.dispose(),$.dispose(),$.removeEventListener("sessionstart",Ls),$.removeEventListener("sessionend",Ke),Yt.stop()};function Ce(E){E.preventDefault(),Vo("WebGLRenderer: Context Lost."),F=!0}function Be(){Vo("WebGLRenderer: Context Restored."),F=!1;const E=se.autoReset,U=fe.enabled,Y=fe.autoUpdate,H=fe.needsUpdate,V=fe.type;De(),se.autoReset=E,fe.enabled=U,fe.autoUpdate=Y,fe.needsUpdate=H,fe.type=V}function ye(E){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function at(E){const U=E.target;U.removeEventListener("dispose",at),Mt(U)}function Mt(E){jn(E),Q.remove(E)}function jn(E){const U=Q.get(E).programs;U!==void 0&&(U.forEach(function(Y){L.releaseProgram(Y)}),E.isShaderMaterial&&L.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Y,H,V,Se){U===null&&(U=on);const Pe=V.isMesh&&V.matrixWorld.determinantAffine()<0,be=Fg(E,U,Y,H,V);I.setMaterial(H,Pe);let Ae=Y.index,Oe=1;if(H.wireframe===!0){if(Ae=R.getWireframeAttribute(Y),Ae===void 0)return;Oe=2}const We=Y.drawRange,Qe=Y.attributes.position;let Le=We.start*Oe,et=(We.start+We.count)*Oe;Se!==null&&(Le=Math.max(Le,Se.start*Oe),et=Math.min(et,(Se.start+Se.count)*Oe)),Ae!==null?(Le=Math.max(Le,0),et=Math.min(et,Ae.count)):Qe!=null&&(Le=Math.max(Le,0),et=Math.min(et,Qe.count));const Nt=et-Le;if(Nt<0||Nt===1/0)return;me.setup(V,H,be,Y,Ae);let _t,pt=Z;if(Ae!==null&&(_t=y.get(Ae),pt=ge,pt.setIndex(_t)),V.isMesh)H.wireframe===!0?(I.setLineWidth(H.wireframeLinewidth*_n()),pt.setMode(z.LINES)):pt.setMode(z.TRIANGLES);else if(V.isLine){let en=H.linewidth;en===void 0&&(en=1),I.setLineWidth(en*_n()),V.isLineSegments?pt.setMode(z.LINES):V.isLineLoop?pt.setMode(z.LINE_LOOP):pt.setMode(z.LINE_STRIP)}else V.isPoints?pt.setMode(z.POINTS):V.isSprite&&pt.setMode(z.TRIANGLES);if(V.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const en=V._multiDrawStarts,Ne=V._multiDrawCounts,ln=V._multiDrawCount,ct=Ae?y.get(Ae).bytesPerElement:1,or=Q.get(H).currentProgram.getUniforms();for(let tn=0;tn<ln;tn++)or.setValue(z,"_gl_DrawID",tn),pt.render(en[tn]/ct,Ne[tn])}else if(V.isInstancedMesh)pt.renderInstances(Le,Nt,V.count);else if(Y.isInstancedBufferGeometry){const en=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Ne=Math.min(Y.instanceCount,en);pt.renderInstances(Le,Nt,Ne)}else pt.render(Le,Nt)};function Fr(E,U,Y,H){B!==null&&E.isNodeMaterial&&B.setObject(H,E),dt===!0&&ie.setState(E,Y,!1),E.transparent===!0&&E.side===Fn&&E.forceSinglePass===!1?(E.side=pn,E.needsUpdate=!0,sr(E,U,H),E.side=Rr,E.needsUpdate=!0,sr(E,U,H),E.side=Fn):sr(E,U,H)}this.compile=function(E,U,Y=null){Y===null&&(Y=E),B!==null&&B.renderStart(E,U,Y),A=j.get(Y),A.init(U),S.push(A),Y.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),E!==Y&&E.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(A.pushLight(V),V.castShadow&&A.pushShadow(V))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),Gt=this.localClippingEnabled,dt=ie.init(this.clippingPlanes,Gt),dt===!0&&ie.setGlobalState(this.clippingPlanes,U),B!==null&&fe.render(A.state.shadowsArray,Y,U);const H=new Set;return E.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Se=V.material;if(Se)if(Array.isArray(Se))for(let Pe=0;Pe<Se.length;Pe++){const be=Se[Pe];Fr(be,Y,U,V),H.add(be)}else Fr(Se,Y,U,V),H.add(Se)}),A=S.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(E,U,Y=null){const H=this.compile(E,U,Y);return new Promise(V=>{function Se(){if(H.forEach(function(Pe){const Ae=Q.get(Pe).currentProgram;(Ae===void 0||Ae.isReady())&&H.delete(Pe)}),H.size===0){V(E);return}setTimeout(Se,10)}gt.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Li=null;function nr(E){Li&&Li(E)}function Ls(){Yt.stop()}function Ke(){Yt.start()}const Yt=new yp;Yt.setAnimationLoop(nr),typeof self<"u"&&Yt.setContext(self),this.setAnimationLoop=function(E){Li=E,$.setAnimationLoop(E),E===null?Yt.stop():Yt.start()},$.addEventListener("sessionstart",Ls),$.addEventListener("sessionend",Ke),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(E,U);const Y=$.enabled===!0&&$.isPresenting===!0,H=k!==null&&(he===null||Y)&&k.begin(N,he);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,U,he),A=j.get(E,S.length),A.init(U),A.state.textureUnits=re.getTextureUnits(),S.push(A),yt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?zt.setFromArrayCamera(U):Ye.setFromProjectionMatrix(yt,qn,U.reversedDepth),Gt=this.localClippingEnabled,dt=ie.init(this.clippingPlanes,Gt),T=ue.get(E,x.length),T.init(),x.push(T),this.info.render.frame++,$.enabled===!0&&$.isPresenting===!0){const Pe=N.xr.getDepthSensingMesh();Pe!==null&&ir(Pe,U,-1/0,N.sortObjects)}ir(E,U,0,N.sortObjects),T.finish(),B!==null&&B.updateLights(A.state.lightsArray),N.sortObjects===!0&&T.sort(Ge,xt),gn=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,gn&&C.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),dt===!0&&ie.beginShadows();const V=A.state.shadowsArray;if(fe.render(V,E,U),dt===!0&&ie.endShadows(),(H&&k.hasRenderPass())===!1){const Pe=T.opaque,be=T.transmissive;if(A.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(be.length>0)for(let Oe=0,We=Ae.length;Oe<We;Oe++){const Qe=Ae[Oe];Ns(Pe,be,E,Qe)}gn&&C.render(E);for(let Oe=0,We=Ae.length;Oe<We;Oe++){const Qe=Ae[Oe];pi(T,E,Qe,Qe.viewport)}}else be.length>0&&Ns(Pe,be,E,U),gn&&C.render(E),pi(T,E,U)}he!==null&&W===0&&(re.updateMultisampleRenderTarget(he),re.updateRenderTargetMipmap(he)),H&&k.end(N),E.isScene===!0&&E.onAfterRender(N,E,U),me.resetDefaultState(),J=-1,le=null,S.pop(),S.length>0?(A=S[S.length-1],re.setTextureUnits(A.state.textureUnits),dt===!0&&ie.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,B!==null&&B.renderEnd()};function ir(E,U,Y,H){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){const Pe=U.isArrayCamera?zt:Ye;if(!E.frustumCulled||E.intersectsFrustum(Pe)){H&&Lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(yt);const be=G.update(E),Ae=E.material;Ae.visible&&T.push(E,be,Ae,Y,Lt.z,null,U)}}else if(E.isMesh||E.isLine||E.isPoints){const Pe=U.isArrayCamera?zt:Ye;if(!E.frustumCulled||E.intersectsFrustum(Pe)){const be=G.update(E),Ae=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Lt.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Lt.copy(be.boundingSphere.center)),Lt.applyMatrix4(E.matrixWorld).applyMatrix4(yt)),Array.isArray(Ae)){const Oe=be.groups;for(let We=0,Qe=Oe.length;We<Qe;We++){const Le=Oe[We],et=Ae[Le.materialIndex];et&&et.visible&&T.push(E,be,et,Y,Lt.z,Le,U)}}else Ae.visible&&T.push(E,be,Ae,Y,Lt.z,null,U)}}}const Se=E.children;for(let Pe=0,be=Se.length;Pe<be;Pe++)ir(Se[Pe],U,Y,H)}function pi(E,U,Y,H){const{opaque:V,transmissive:Se,transparent:Pe}=E;A.setupLightsView(Y),dt===!0&&ie.setGlobalState(N.clippingPlanes,Y),H&&I.viewport(de.copy(H)),V.length>0&&rr(V,U,Y),Se.length>0&&rr(Se,U,Y),Pe.length>0&&rr(Pe,U,Y),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function Ns(E,U,Y,H){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){const Le=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new ai(1,1,{generateMipmaps:!0,type:Le?ci:In,minFilter:Xi,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Se=A.state.transmissionRenderTarget[H.id],Pe=H.viewport||de;Se.setSize(Pe.z*N.transmissionResolutionScale,Pe.w*N.transmissionResolutionScale);const be=N.getRenderTarget(),Ae=N.getActiveCubeFace(),Oe=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(oe),ve=N.getClearAlpha(),ve<1&&N.setClearColor(16777215,.5),N.clear(),gn&&C.render(Y);const We=N.toneMapping;N.toneMapping=Ti;const Qe=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),dt===!0&&ie.setGlobalState(N.clippingPlanes,H),rr(E,Y,H),re.updateMultisampleRenderTarget(Se),re.updateRenderTargetMipmap(Se),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let et=0,Nt=U.length;et<Nt;et++){const _t=U[et],{object:pt,geometry:en,material:Ne,group:ln}=_t;if(Ne.side===Fn&&pt.layers.test(H.layers)){const ct=Ne.side;Ne.side=pn,Ne.needsUpdate=!0,Na(pt,Y,H,en,Ne,ln),Ne.side=ct,Ne.needsUpdate=!0,Le=!0}}Le===!0&&(re.updateMultisampleRenderTarget(Se),re.updateRenderTargetMipmap(Se))}N.setRenderTarget(be,Ae,Oe),N.setClearColor(oe,ve),Qe!==void 0&&(H.viewport=Qe),N.toneMapping=We}function rr(E,U,Y){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Se=E.length;V<Se;V++){const Pe=E[V],{object:be,geometry:Ae,group:Oe}=Pe;let We=Pe.material;We.allowOverride===!0&&H!==null&&(We=H),be.layers.test(Y.layers)&&Na(be,U,Y,Ae,We,Oe)}}function Na(E,U,Y,H,V,Se){B!==null&&V.isNodeMaterial&&B.setObject(E,V),E.onBeforeRender(N,U,Y,H,V,Se),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),V.onBeforeRender(N,U,Y,H,E,Se),V.transparent===!0&&V.side===Fn&&V.forceSinglePass===!1?(V.side=pn,V.needsUpdate=!0,N.renderBufferDirect(Y,U,H,V,E,Se),V.side=Rr,V.needsUpdate=!0,N.renderBufferDirect(Y,U,H,V,E,Se),V.side=Fn):N.renderBufferDirect(Y,U,H,V,E,Se),E.onAfterRender(N,U,Y,H,V,Se)}function Da(E){let U=0;for(const Y of E)Y.texture!==null&&U++;return U}function sr(E,U,Y){U.isScene!==!0&&(U=on);const H=Q.get(E),V=A.state.lights,Se=A.state.shadowsArray,Pe=V.state.version,be=L.getParameters(E,V.state,Se,U,Y,A.state.lightProbeGridArray),Ae=L.getProgramCacheKey(be);let Oe=H.programs;H.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const We=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;H.envMap=w.get(E.envMap||H.environment,We),H.envMapRotation=H.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",at),Oe=new Map,H.programs=Oe,H.programVariants=new Map);let Qe=Oe.get(Ae);if(Qe!==void 0){if(H.currentProgram===Qe&&H.lightsStateVersion===Pe)return Ds(E,be),Qe}else be.uniforms=L.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,Y,be),E.onBeforeCompile(be,N),Qe=L.acquireProgram(be,Ae),Oe.set(Ae,Qe),H.uniforms=be.uniforms;const Le=H.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ie.uniform),Ds(E,be),H.needsLights=zg(E),H.lightsStateVersion=Pe,H.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.sunLights.value=V.state.sun,Le.sunLightShadows.value=V.state.sunShadow,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.sunShadowMatrix.value=V.state.sunShadowMatrix,Le.sunShadowCascade.value=V.state.sunShadowCascade,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=Da(A.state.lightProbeGridArray),H.currentProgram=Qe,H.uniformsList=null,Qe}function Ua(E,U,Y,H,V){const Se=Q.get(E),Pe=Se.currentProgram.id+","+H+","+V;let be=Se.programVariants.get(Pe);return be===void 0?(be=sr(E,U,Y),Se.programVariants.set(Pe,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=H,Se.toneMapping=V),be}function ar(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=wo.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function Ds(E,U){const Y=Q.get(E);Y.outputColorSpace=U.outputColorSpace,Y.batching=U.batching,Y.batchingColor=U.batchingColor,Y.instancing=U.instancing,Y.instancingColor=U.instancingColor,Y.instancingMorph=U.instancingMorph,Y.skinning=U.skinning,Y.morphTargets=U.morphTargets,Y.morphNormals=U.morphNormals,Y.morphColors=U.morphColors,Y.morphTargetsCount=U.morphTargetsCount,Y.numClippingPlanes=U.numClippingPlanes,Y.numIntersection=U.numClipIntersection,Y.vertexAlphas=U.vertexAlphas,Y.vertexTangents=U.vertexTangents,Y.toneMapping=U.toneMapping}function Fg(E,U,Y,H,V){U.isScene!==!0&&(U=on),re.resetTextureUnits();const Se=U.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,be=he===null?N.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:tt.workingColorSpace,Ae=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Oe=w.get(H.envMap||Pe,Ae),We=H.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Qe=!!Y.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!Y.morphAttributes.position,et=!!Y.morphAttributes.normal,Nt=!!Y.morphAttributes.color;let _t=Ti;H.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(_t=N.toneMapping);const pt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,en=pt!==void 0?pt.length:0,Ne=Q.get(H),ln=A.state.lights;if(dt===!0&&(Gt===!0||E!==le)){const Et=E===le&&H.id===J;ie.setState(H,E,Et)}let ct=!1,or=!1;H.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==ln.state.version||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Oe||H.fog===!0&&Ne.fog!==Se||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ie.numPlanes||Ne.numIntersection!==ie.numIntersection)||Ne.vertexAlphas!==We||Ne.vertexTangents!==Qe||Ne.morphTargets!==Le||Ne.morphNormals!==et||Ne.morphColors!==Nt||Ne.morphTargetsCount!==en||Ne.numLightProbeGrids!==Da(A.state.lightProbeGridArray)?ct=!0:(Ne.outputColorSpace!==be||Ne.toneMapping!==_t)&&(or=!0):(ct=!0,Ne.__version=H.version);let tn=Ne.currentProgram;(ct===!0||or===!0)&&(tn=or===!0?Ua(H,U,V,be,_t):sr(H,U,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,tn,Ne));let Oa=!1,Ni=!1,lr=!1;const rt=tn.getUniforms(),jt=Ne.uniforms;if(I.useProgram(tn.program)&&(Oa=!0,Ni=!0,lr=!0),H.id!==J&&(J=H.id,Ni=!0),Oa||le!==E){I.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),rt.setValue(z,"projectionMatrix",E.projectionMatrix),rt.setValue(z,"viewMatrix",E.matrixWorldInverse);const Vt=rt.map.cameraPosition;Vt!==void 0&&Vt.setValue(z,mn.setFromMatrixPosition(E.matrixWorld)),D.logarithmicDepthBuffer&&rt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&rt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),le!==E&&(le=E,Ni=!0,lr=!0)}if(Ne.needsLights&&(ln.state.sunShadowMap.length>0&&rt.setValue(z,"sunShadowMap",ln.state.sunShadowMap,re),ln.state.directionalShadowMap.length>0&&rt.setValue(z,"directionalShadowMap",ln.state.directionalShadowMap,re),ln.state.spotShadowMap.length>0&&rt.setValue(z,"spotShadowMap",ln.state.spotShadowMap,re),ln.state.pointShadowMap.length>0&&rt.setValue(z,"pointShadowMap",ln.state.pointShadowMap,re)),V.isSkinnedMesh){rt.setOptional(z,V,"bindMatrix"),rt.setOptional(z,V,"bindMatrixInverse");const Et=V.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),rt.setValue(z,"boneTexture",Et.boneTexture,re))}V.isBatchedMesh&&(rt.setOptional(z,V,"batchingTexture"),rt.setValue(z,"batchingTexture",V._matricesTexture,re),rt.setOptional(z,V,"batchingIdTexture"),rt.setValue(z,"batchingIdTexture",V._indirectTexture,re),rt.setOptional(z,V,"batchingColorTexture"),V._colorsTexture!==null&&rt.setValue(z,"batchingColorTexture",V._colorsTexture,re));const Hn=Y.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&ee.update(V,Y,tn),(Ni||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,rt.setValue(z,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(jt.envMapIntensity.value=U.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=hS()),Ni){if(rt.setValue(z,"toneMappingExposure",N.toneMappingExposure),Ne.needsLights&&kg(jt,lr),Se&&H.fog===!0&&ae.refreshFogUniforms(jt,Se),ae.refreshMaterialUniforms(jt,H,we,ke,A.state.transmissionRenderTarget[E.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){const Et=b;let Vt=0;for(const mi of A.state.lightProbeGridArray)mi.texture!==null&&(Et.textures[Vt]=mi.texture,Et.min[Vt]=mi.boundingBox.min,Et.max[Vt]=mi.boundingBox.max,Et.resolution[Vt]=mi.resolution,Vt++);for(const mi in Et)Et[mi].length=Vt;jt.probesSH.value=Et.textures,jt.probesMin.value=Et.min,jt.probesMax.value=Et.max,jt.probesResolution.value=Et.resolution}wo.upload(z,ar(Ne),jt,re)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(wo.upload(z,ar(Ne),jt,re),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&rt.setValue(z,"center",V.center),rt.setValue(z,"modelViewMatrix",V.modelViewMatrix),rt.setValue(z,"normalMatrix",V.normalMatrix),rt.setValue(z,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const Et=H.uniformsGroups;for(let Vt=0,mi=Et.length;Vt<mi;Vt++){const vd=Et[Vt];xe.update(vd,tn),xe.bind(vd,tn)}}return tn}function kg(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function zg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(E,U,Y){const H=Q.get(E);H.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Q.get(E.texture).__webglTexture=U,Q.get(E.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Y,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const Y=Q.get(E);Y.__webglFramebuffer=U,Y.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Y=0){he=E,ne=U,W=Y;let H=null,V=!1,Se=!1;if(E){const be=Q.get(E);if(be.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),de.copy(E.viewport),Ie.copy(E.scissor),He=E.scissorTest,I.viewport(de),I.scissor(Ie),I.setScissorTest(He),J=-1;return}else if(be.__webglFramebuffer===void 0)re.setupRenderTarget(E);else if(be.__hasExternalTextures)re.rebindTextures(E,Q.get(E.texture).__webglTexture,Q.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(be.__boundDepthTexture!==We){if(We!==null&&Q.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");re.setupDepthRenderbuffer(E)}}const Ae=E.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Se=!0);const Oe=Q.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?H=Oe[U][Y]:H=Oe[U],V=!0):E.samples>0&&re.useMultisampledRTT(E)===!1?H=Q.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?H=Oe[Y]:H=Oe,de.copy(E.viewport),Ie.copy(E.scissor),He=E.scissorTest}else de.copy(ze).multiplyScalar(we).floor(),Ie.copy(lt).multiplyScalar(we).floor(),He=ut;if(Y!==0&&(H=q),I.bindFramebuffer(z.FRAMEBUFFER,H)&&I.drawBuffers(E,H),I.viewport(de),I.scissor(Ie),I.setScissorTest(He),V){const be=Q.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,Y)}else if(Se){const be=U;for(let Ae=0;Ae<E.textures.length;Ae++){const Oe=Q.get(E.textures[Ae]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ae,Oe.__webglTexture,Y,be)}}else if(E!==null&&Y!==0){const be=Q.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,Y)}J=-1};function _d(E){const U=Q.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=D.textureFormatReadable(E.format),U.__typeReadable=D.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Y,H,V,Se,Pe,be=0){if(!(E&&E.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ae=Ae[Pe],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){I.bindFramebuffer(z.FRAMEBUFFER,Ae);try{const Oe=E.textures[be],We=Oe.format,Qe=Oe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const Le=_d(Oe);if(Le.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-H&&Y>=0&&Y<=E.height-V&&z.readPixels(U,Y,H,V,pe.convert(We),pe.convert(Qe),Se)}finally{const Oe=he!==null?Q.get(he).__webglFramebuffer:null;I.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,U,Y,H,V,Se,Pe,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=Q.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ae=Ae[Pe],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(U>=0&&U<=E.width-H&&Y>=0&&Y<=E.height-V){I.bindFramebuffer(z.FRAMEBUFFER,Ae);const Oe=E.textures[be],We=Oe.format,Qe=Oe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const Le=_d(Oe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(U,Y,H,V,pe.convert(We),pe.convert(Qe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Nt=he!==null?Q.get(he).__webglFramebuffer:null;I.bindFramebuffer(z.FRAMEBUFFER,Nt);const _t=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await y0(z,_t,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(et),z.deleteSync(_t),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Y=0){const H=Math.pow(2,-Y),V=Math.floor(E.image.width*H),Se=Math.floor(E.image.height*H),Pe=U!==null?U.x:0,be=U!==null?U.y:0;re.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,Y,0,0,Pe,be,V,Se),I.unbindTexture()},this.copyTextureToTexture=function(E,U,Y=null,H=null,V=0,Se=0){let Pe,be,Ae,Oe,We,Qe,Le,et,Nt;const _t=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(Y!==null)Pe=Y.max.x-Y.min.x,be=Y.max.y-Y.min.y,Ae=Y.isBox3?Y.max.z-Y.min.z:1,Oe=Y.min.x,We=Y.min.y,Qe=Y.isBox3?Y.min.z:0;else{const rt=Math.pow(2,-V);Pe=Math.floor(_t.width*rt),be=Math.floor(_t.height*rt),E.isDataArrayTexture?Ae=_t.depth:E.isData3DTexture?Ae=Math.floor(_t.depth*rt):Ae=1,Oe=0,We=0,Qe=0}H!==null?(Le=H.x,et=H.y,Nt=H.z):(Le=0,et=0,Nt=0);const pt=pe.convert(U.format),en=pe.convert(U.type);let Ne;U.isData3DTexture?(re.setTexture3D(U,0),Ne=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(re.setTexture2DArray(U,0),Ne=z.TEXTURE_2D_ARRAY):(re.setTexture2D(U,0),Ne=z.TEXTURE_2D),I.activeTexture(z.TEXTURE0),I.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);const ln=I.getParameter(z.UNPACK_ROW_LENGTH),ct=I.getParameter(z.UNPACK_IMAGE_HEIGHT),or=I.getParameter(z.UNPACK_SKIP_PIXELS),tn=I.getParameter(z.UNPACK_SKIP_ROWS),Oa=I.getParameter(z.UNPACK_SKIP_IMAGES);I.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),I.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),I.pixelStorei(z.UNPACK_SKIP_PIXELS,Oe),I.pixelStorei(z.UNPACK_SKIP_ROWS,We),I.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe);const Ni=E.isDataArrayTexture||E.isData3DTexture,lr=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const rt=Q.get(E),jt=Q.get(U),Hn=Q.get(rt.__renderTarget),Et=Q.get(jt.__renderTarget);I.bindFramebuffer(z.READ_FRAMEBUFFER,Hn.__webglFramebuffer),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Vt=0;Vt<Ae;Vt++)Ni&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(E).__webglTexture,V,Qe+Vt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Q.get(U).__webglTexture,Se,Nt+Vt)),z.blitFramebuffer(Oe,We,Oe+Pe,We+be,Le,et,Le+Pe,et+be,z.DEPTH_BUFFER_BIT,z.NEAREST);I.bindFramebuffer(z.READ_FRAMEBUFFER,null),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(V!==0||E.isRenderTargetTexture||Q.has(E)){const rt=Q.get(E),jt=Q.get(U);I.bindFramebuffer(z.READ_FRAMEBUFFER,P),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,X);for(let Hn=0;Hn<Ae;Hn++)Ni?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rt.__webglTexture,V,Qe+Hn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rt.__webglTexture,V),lr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,jt.__webglTexture,Se,Nt+Hn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,jt.__webglTexture,Se),V!==0?z.blitFramebuffer(Oe,We,Oe+Pe,We+be,Le,et,Le+Pe,et+be,z.COLOR_BUFFER_BIT,z.NEAREST):lr?z.copyTexSubImage3D(Ne,Se,Le,et,Nt+Hn,Oe,We,Pe,be):z.copyTexSubImage2D(Ne,Se,Le,et,Oe,We,Pe,be);I.bindFramebuffer(z.READ_FRAMEBUFFER,null),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else lr?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ne,Se,Le,et,Nt,Pe,be,Ae,pt,en,_t.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Ne,Se,Le,et,Nt,Pe,be,Ae,pt,_t.data):z.texSubImage3D(Ne,Se,Le,et,Nt,Pe,be,Ae,pt,en,_t):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,Le,et,Pe,be,pt,en,_t.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,Le,et,_t.width,_t.height,pt,_t.data):z.texSubImage2D(z.TEXTURE_2D,Se,Le,et,Pe,be,pt,en,_t);I.pixelStorei(z.UNPACK_ROW_LENGTH,ln),I.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct),I.pixelStorei(z.UNPACK_SKIP_PIXELS,or),I.pixelStorei(z.UNPACK_SKIP_ROWS,tn),I.pixelStorei(z.UNPACK_SKIP_IMAGES,Oa),Se===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Ne),I.unbindTexture()},this.initRenderTarget=function(E){Q.get(E).__webglFramebuffer===void 0&&re.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?re.setTextureCube(E,0):E.isData3DTexture?re.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?re.setTexture2DArray(E,0):re.setTexture2D(E,0),I.unbindTexture()},this.resetState=function(){ne=0,W=0,he=null,I.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const Sf=.003,Zo=1.2;function qc(t,e,n,i){return{yaw:t-n*Sf,pitch:At.clamp(e-i*Sf,-Zo,Zo)}}function Ip(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:At.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-Zo,Zo)}}class mS{yaw=0;pitch=0;freeMode=!1;anchor=new O;freePos=new O;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new O(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new Bn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,qc(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,Ip(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new O;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new O(-i.z,0,i.x),s=new O;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=At.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=At.clamp(this.freePos.y,1.1,4.4),this.freePos.z=At.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function gS(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}const Ws=new O;function Un(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ws.copy(e),Ws[i]=0,Ws.normalize();const c=.5*a/(a+o),u=1-Ws.angleTo(t)/l;return Math.sign(Ws[n])===1?u*c:o/(a+o)+c+c*(1-u)}class Du extends Ur{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new O,c=new O,u=new O(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,g=d.length/6,v=new O,p=.5/a;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*s,d[m+1]=u.y*Math.sign(l.y)+c.y*s,d[m+2]=u.z*Math.sign(l.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:v.set(1,0,0),h[_+0]=Un(v,c,"z","y",s,i),h[_+1]=1-Un(v,c,"y","z",s,n);break;case 1:v.set(-1,0,0),h[_+0]=1-Un(v,c,"z","y",s,i),h[_+1]=1-Un(v,c,"y","z",s,n);break;case 2:v.set(0,1,0),h[_+0]=1-Un(v,c,"x","z",s,e),h[_+1]=Un(v,c,"z","x",s,i);break;case 3:v.set(0,-1,0),h[_+0]=1-Un(v,c,"x","z",s,e),h[_+1]=1-Un(v,c,"z","x",s,i);break;case 4:v.set(0,0,1),h[_+0]=1-Un(v,c,"x","y",s,e),h[_+1]=1-Un(v,c,"y","x",s,n);break;case 5:v.set(0,0,-1),h[_+0]=Un(v,c,"x","y",s,e),h[_+1]=1-Un(v,c,"y","x",s,n);break}}static fromJSON(e){return new Du(e.width,e.height,e.depth,e.segments,e.radius)}}const Mf=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function Lp(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return Mf[e%Mf.length]}function To(t,e,n,i){const a=(d,f)=>d<n.minX+.2||d>n.maxX-.2||f<n.minZ+.2||f>n.maxZ-.2||i.some(h=>d>h.minX-.2&&d<h.maxX+.2&&f>h.minZ-.2&&f<h.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],l=new Set(["0,0"]);let c=-1;for(let d=0;d<o.length&&d<12e3;d++){const f=o[d];if(Math.hypot(f.x-e.x,f.z-e.z)<.48){c=d;break}for(const[h,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const v=f.x+h,p=f.z+g,m=`${Math.round((v-t.x)/.45)},${Math.round((p-t.z)/.45)}`;!l.has(m)&&!a(v,p)&&(l.add(m),o.push({x:v,z:p,parent:d}))}}if(c<0)return[];const u=[];for(let d=c;d>=0;d=o[d].parent)u.push({x:o[d].x,z:o[d].z});return u.reverse().slice(1)}const Gi={x:-7.8,z:-4.6},_S=[0,4,8,2,6,10,1,5,9,3,7,11];function Yc(t=0){const e=-Math.PI/2+_S[(t%12+12)%12]*Math.PI/6;return{x:Gi.x+Math.cos(e)*2.15,z:Gi.z+Math.sin(e)*2.15}}function jc(t,e=0){if(t==="culture")return Yc(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const pr=(t,e,n)=>t+(e-t)*n;function Np(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=pr(1.35,.5,n),s=pr(2.2,.6,n),a=e?0:n<.35?pr(.06,0,n/.35):0,o=pr(9,4,n),l=n>.45?pr(0,.42,(n-.45)/.55):0,c=n>.55?pr(0,.12,(n-.55)/.45):0,u=n>.5?pr(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:l,slump:c,saturation:u,zzz:n>=.8}}function vS(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Ii(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const Ef=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function Ts(t){const e=Ii(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+Ef[n].map((r,s)=>Math.round(r+(Ef[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const xS={EXPLOIT:["Exploiting","calm","After a significant improvement or before min_attempts: most workers refine; one explores."],BOREDOM_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],YOKED_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],PARADIGM_BREAKOUT:["Paradigm breakout","breakout","All workers explore; the gate requires a top-level mechanism not used recently."],CONVERGED:["Converged","converged","The gate allows only exact reruns of the best for confirmation."],FRUSTRATED:["Frustrated","frustrated",""]};function Ir(t){if(!t)return{label:"",tone:"calm",description:""};const e=xS[t];return e?{label:e[0],tone:e[1],description:e[2]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm",description:""}}function yS(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function bS(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const Kc=t=>Math.max(0,Math.min(1,t)),SS=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,wf=t=>{const e=Kc(t);return e===0||e===1?e:Kc(SS(e))};function MS(t,e){const n=Kc(t),i=Math.max(0,Math.floor(e)),r=wf(n/.4),s=Array.from({length:i},(a,o)=>{const l=.4+o*.6/Math.max(1,i),c=.6/Math.max(1,i);return wf((n-l)/c)});return{room:r,agents:s}}function ES(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function wS(){const t=new j0;t.background=new qe("#e4edf3"),t.fog=new Cu("#e4edf3",34,90);const e=new Xn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new Ur(1,1,1),r=(D,I=.68,se=0)=>new Eo({color:D,roughness:I,metalness:se}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),l=r("#b1bec5",.32,.65),c=r("#c8d3d6"),u=r("#a8b5a1"),d=r("#b4a38c",.8),f=r("#928572");r("#18252a",.38);const h=r("#f9f4e6"),g=r("#3e8493"),v=r("#d2a468"),p=new p_({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:Fn}),m=new _r({color:"#fff6dd"}),_=new _r({color:"#80b7ab"}),M=(D,I,se,Q,re,w,y,R=t)=>{const G=new vt(i,y);return G.position.set(D,I,se),G.scale.set(Q,re,w),R.add(G),G},b=(D,I,se,Q,re,w,y=t,R=20)=>{const G=new vt(new va(Q,Q,re,R),w);return G.position.set(D,I,se),y.add(G),G},T=(D,I,se,Q,re,w=t)=>{const y=new vt(new Lu(Q,16,12),re);return y.position.set(D,I,se),w.add(y),y},A=(D,I,se,Q)=>n.push({minX:D-se/2,maxX:D+se/2,minZ:I-Q/2,maxZ:I+Q/2}),x=(D,I,se,Q,re=t)=>{const w=I.clone().sub(D),y=new vt(new va(se,se,w.length(),12),Q);return y.position.copy(D).add(I).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new O(0,1,0),w.normalize()),re.add(y),y},S=(D,I,se,Q,re,w,y="#f5f4ec",R="#425859",G=0)=>{const L=document.createElement("canvas");L.width=1024,L.height=Math.max(64,Math.round(1024*w/re));const ae=L.getContext("2d");ae.fillStyle=y,ae.fillRect(0,0,L.width,L.height);const ue=D.split(`
`),j=Math.min(L.height/(ue.length+1),L.width/(Math.max(...ue.map(ee=>ee.length))*.62));ae.fillStyle=R,ae.textAlign="center",ae.textBaseline="middle",ae.font=`500 ${j}px sans-serif`,ue.forEach((ee,Z)=>ae.fillText(ee,512,L.height/2+(Z-(ue.length-1)/2)*j*1.3));const ie=new hr(L);ie.colorSpace=kt;const fe=new _r({map:ie,side:Fn}),C=new vt(new br(re,w),fe);return C.position.set(I,se,Q),C.rotation.y=G,t.add(C),C},k=(D,I,se)=>{const Q=document.createElement("canvas");Q.width=960,Q.height=360;const re=Q.getContext("2d");re.fillStyle="#fff9ea",re.strokeStyle="#b6c9c4",re.lineWidth=4,re.beginPath(),re.roundRect(4,4,952,310,30),re.fill(),re.stroke(),re.beginPath(),re.moveTo(450,313),re.lineTo(480,352),re.lineTo(510,313),re.fill(),re.textAlign="left",re.fillStyle="#35716c",re.font="bold 38px sans-serif",re.fillText(D.toUpperCase(),34,48),re.fillStyle="#263b41",re.font="48px sans-serif";const w=I.replace(/\s+/g," ").trim().split(" "),y=[];let R="";for(const L of w){const ae=R?R+" "+L:L;re.measureText(ae).width>875&&R?(y.push(R),R=L):R=ae}R&&y.push(R),y.slice(0,3).forEach((L,ae)=>{let ue=L;ae===2&&y.length>3&&(ue=ue.replace(/.{0,3}$/,"…")),re.fillText(ue,34,110+ae*53)}),re.fillStyle="#6c817c",re.font="32px sans-serif",re.fillText(se.length?"WITH "+se.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const G=new hr(Q);return G.colorSpace=kt,new vt(new br(2.7,1.0125),new _r({map:G,transparent:!0,side:Fn,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new __("#f5faff","#9caeb8",2.15));const N=new Jd("#ffffff",2.2);N.position.set(-8,11,3),t.add(N);const F=new Jd("#d0e9fa",.85);F.position.set(8,5,-8),t.add(F);const B=document.createElement("canvas");B.width=512,B.height=512;const q=B.getContext("2d");q.fillStyle="#d9e2e6",q.fillRect(0,0,512,512);for(let D=0;D<1700;D++){const I=Math.sin(D*41.77)*.5+.5,se=Math.sin(D*19.31+5)*.5+.5;q.fillStyle=D%3?"#ecf0f1":"#c3d0d6",q.fillRect(I*512,se*512,1+D%3,1+D%2)}const P=new hr(B);P.colorSpace=kt,P.wrapS=P.wrapT=ko,P.repeat.set(8,9),P.anisotropy=8,M(0,-.12,0,24,.24,28,new Eo({map:P,roughness:.85})),M(0,2.5,-13.5,24,5,.3,s),M(11.75,2.5,0,.3,5,27,s),M(0,.43,-13.27,23.5,.86,.12,d),M(11.53,.43,0,.12,.86,26.5,d),M(0,.08,-13.1,23.5,.16,.06,o),M(11.38,.08,0,.06,.16,26.5,o);const X=M(0,4.9,0,24,.16,28,s);X.userData.overhead=!0;for(const D of[-12,-6,0,6,12])M(-11.6,2.5,D,.22,5,.14,s);M(-11.6,.55,0,.3,1.1,27,s),M(-11.6,4.65,0,.3,.7,27,s),M(-11.68,2.75,0,.025,3.5,27,p);for(const D of[1.12,3.8])M(-11.4,D,0,.12,.07,27,l);M(-7.9,2.25,12.7,7.5,4.5,.14,s),M(7.9,2.25,12.7,7.5,4.5,.14,s);for(const D of[-3.9,3.9])M(D,2.25,12.65,.12,4.5,.18,l);M(0,2.25,12.8,7.7,4.5,.025,p),S("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const D of[-8,-1,6]){M(0,4.35,D,20,.08,.07,o);for(const I of[-7,0,7])b(I,4.18,D,.13,.22,o),b(I,4.06,D,.1,.025,m)}const ne=new vt(new oa(1.8,.025,8,64),f);ne.rotation.x=Math.PI/2,ne.position.set(0,3.9,.5),t.add(ne);for(const D of[-1.6,1.6])x(new O(D,3.9,.5),new O(D,4.84,.5),.012,l);M(-28,-.65,-2,45,1,70,r("#b0bf9d"));const W=r("#98af91"),he=r("#897e69");for(let D=0;D<14;D++){const I=-17-D%3*3,se=-25+D*4.1;b(I,1.3,se,.12,3,he);const Q=T(I,3,se,1.25+D%3*.2,W);Q.scale.y=1.45}function J(D,I){b(D,.32,I,.34,.64,s),b(D,.66,I,.29,.04,f);for(let se=0;se<6;se++){const Q=se*2.4;x(new O(D,.65,I),new O(D+Math.cos(Q)*.25,1.5+se%3*.18,I+Math.sin(Q)*.25),.025,u),T(D+Math.cos(Q)*.3,1.3+se%3*.18,I+Math.sin(Q)*.3,.16,u).scale.set(.55,2,.8)}A(D,I,.8,.8)}J(-10.3,8.4),J(-10.3,-10.8),J(10.3,10.8);function le(D,I,se,Q){M(D,.1,I,se-.17,.2,Q-.12,o),M(D,.51,I,se,.78,Q,c),M(D,.94,I,se+.08,.08,Q+.08,o);const re=Math.round(se/.85);for(let w=0;w<re;w++){const y=D-se/2+(w+.5)*se/re;M(y,.53,I+Q/2+.009,se/re-.025,.7,.018,a),M(y,.77,I+Q/2+.028,.29,.025,.035,l)}A(D,I,se+.12,Q+.12)}function de(D,I,se,Q="#8ab9ad"){M(D,1,I,.48,.035,.3,l),M(D,1.22,I,.055,.4,.055,l),M(D,1.53,I,.94,.59,.055,o),S(se+`
—  RESEARCH IN PROGRESS  —`,D,1.53,I+.032,.86,.51,"#203137",Q),M(D,1.01,I+.36,.65,.035,.2,s);for(let re=0;re<5;re++)M(D-.25+re*.12,1.031,I+.36,.07,.007,.11,l)}function Ie(D,I,se){M(D,1.02,I,.56,.09,.3,u);for(let Q=0;Q<5;Q++)b(D-.22+Q*.11,1.16,I,.031,.25,a,t,10),b(D-.22+Q*.11,1.3,I,.038,.025,se,t,10)}function He(D,I){const se=new ni;se.position.set(D,1,I),t.add(se);const Q=M(0,.045,0,.58,.09,.55,a,se);Q.rotation.y=-.1;const re=M(0,.36,-.15,.14,.62,.16,a,se);re.rotation.x=-.15;const w=M(0,.61,-.03,.18,.15,.37,a,se);w.rotation.x=-.2;const y=b(0,.67,.1,.07,.27,o,se);y.rotation.x=-.38,b(0,.47,.1,.065,.18,l,se),M(0,.23,.08,.4,.04,.35,o,se),b(0,.11,.08,.12,.04,m,se),T(.13,.32,-.11,.065,o,se)}function oe(D,I){M(D,1.01,I,.35,.025,.22,l),M(D,1.25,I,.025,.45,.025,l),M(D,1.46,I,.35,.035,.05,s);for(let se=0;se<3;se++){const Q=D-.12+se*.12;b(Q,1.28,I,.026,.32,a,t,12),b(Q,1.08,I,.007,.12,l,t,8),b(Q,1.46,I,.035,.035,se%2?g:v,t,12)}}const ve=Gi.x,Re=Gi.z;b(ve,.43,Re,.18,.78,l),b(ve,.88,Re,1.38,.12,d),b(ve,.95,Re,1.31,.025,a),A(ve,Re,2.8,2.8);for(let D=0;D<12;D++){const I=D*Math.PI/6,se=ve+Math.sin(I)*2.15,Q=Re+Math.cos(I)*2.15;b(se,.36,Q,.29,.07,l),b(se,.18,Q,.035,.32,l);const re=b(se,.43,Q,.31,.09,D%3===0?r("#dfabc5"):u);re.userData.discussionSeat=!0;const w=M(ve+Math.sin(I)*.87,.979,Re+Math.cos(I)*.87,.28,.015,.21,h);w.rotation.y=-I}b(ve,.99,Re,.19,.025,v),S("01   IDEATION ROUNDTABLE",ve,2.65,-7.2,4.7,.38),S("SHARED QUESTIONS / GROUP DISCUSSION",ve,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),le(5.4,-2.8,6.2,1.7);const ke=M(5.6,1.44,-2.85,1.08,.88,.3,v);ke.rotation.x=-.12,M(5.6,1.65,-2.666,.81,.25,.035,o),S("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const we=b(5.6,1.3,-2.64,.16,.07,o);we.rotation.x=Math.PI/2;const Ge=M(5.64,1.36,-2.59,.025,.11,.025,s);Ge.rotation.z=-.5;for(const[D,I]of[[5.28,g],[5.88,v]])T(D,1.1,-2.64,.045,o),x(new O(D,1.1,-2.61),new O(D+.35,1.03,-2.1),.018,I),x(new O(D+.35,1.03,-2.1),new O(D+.9,1.04,-2.17),.018,I);M(7.2,1.01,-2.8,.95,.055,.68,u);for(let D=0;D<4;D++)M(6.9+D*.19,1.08,-2.8,.1,.09,.18,o),M(6.9+D*.19,1.04,-2.8,.02,.018,.57,l);de(3.3,-3.08,"PHYSICS / MEASUREMENTS"),S("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),le(.2,-10.6,5.8,1.5),de(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let D=0;D<5;D++){const I=.25+D*.43,se=-10.55+D%2*.19,Q=[g,v,u][D%3];b(I,1.16,se,.13,.35,p),b(I,1.09,se,.115,.19,Q),b(I,1.4,se,.055,.15,p),b(I,1.49,se,.065,.045,o)}Ie(2.2,-10.9,g),oe(.1,-11.05),S("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),S("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),S("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let D=0;D<5;D++)M(-2.2+D*1.12,2.68,-13.29,.85,.06,.02,D%2?u:d);le(-7.3,5.4,4.8,1.45),de(-8.6,5.18,"BIOLOGY / CELL CULTURES"),He(-7.15,5.32);for(let D=0;D<3;D++){const I=-6.25+D*.43,se=5.5+D%2*.3;b(I,1.025,se,.18,.055,p),b(I,1.045,se,.16,.015,u);for(let Q=0;Q<5;Q++){const re=Q*2.4,w=T(I+Math.cos(re)*.1,1.065,se+Math.sin(re)*.1,.035,D%2?v:g);w.scale.y=.35}}Ie(-5.55,5.15,g),S("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const D of[-9.9,-7.9,-5.9])M(10.75,1.22,D,1.4,2.4,1.5,a),M(10.02,1.22,D,.035,2.18,1.35,c),M(9.98,1.35,D+.42,.035,.43,.035,l),A(10.75,D,1.5,1.6);S("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),le(9.3,7.2,3.7,1.35),M(9.5,.99,7.1,.8,.025,.6,l),M(9.5,1.008,7.1,.63,.015,.46,o),x(new O(9.5,1,6.8),new O(9.5,1.5,6.8),.025,l),x(new O(9.5,1.5,6.8),new O(9.5,1.5,7.05),.025,l),S("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[D,I]of[[3.7,-.5],[-7.5,7.7]]){b(D,.66,I,.32,.12,u),b(D,.34,I,.045,.56,l);for(let se=0;se<4;se++){const Q=se*Math.PI/2;x(new O(D,.12,I),new O(D+Math.cos(Q)*.37,.08,I+Math.sin(Q)*.37),.025,l)}A(D,I,.7,.7)}b(0,.13,.5,1.85,.26,f),b(0,.52,.5,1.7,.55,d),b(0,.84,.5,1.84,.1,a),b(0,.9,.5,1.62,.035,o),A(0,.5,3.7,3.7),S("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const xt=new ni;xt.position.set(0,.95,.5),t.add(xt);const ze=[];for(let D=0;D<36;D++){const I=D*2.39996,se=Math.sqrt(D/36)*1.35,Q=T(Math.cos(I)*se,.15+D%5*.11,Math.sin(I)*se,.045+D%3*.014,D%4===0?v:u,xt);ze.push(Q)}for(const D of[-1.45,1.45])for(const I of[-1.1,2.1])b(D,1.03,I,.018,.22,l);const lt=[u,d,g,h,v];for(const D of[-6.2,6.2]){for(const I of[D-.9,D+.9])M(I,1.75,-12.7,.1,3.5,.5,d);for(const I of[.25,1.25,2.25,3.25]){M(D,I,-12.7,1.9,.075,.6,d);for(let se=0;se<6;se++)M(D-.7+se*.27,I+.3,-12.7,.17,.5-se%3*.06,.32,lt[se%5])}A(D,-12.7,2.05,.75)}S("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),S("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function ut(D,I,se){const Q=document.createElement("canvas");Q.width=256,Q.height=64;const re=Q.getContext("2d");re.fillStyle="rgba(23,35,44,.86)",re.beginPath(),re.roundRect(4,6,248,52,14),re.fill(),re.fillStyle="#ffffff26",re.beginPath(),re.roundRect(16,38,224,10,5),re.fill(),I!=null&&(re.fillStyle=Ts(I),re.beginPath(),re.roundRect(16,38,Math.max(10,224*I/100),10,5),re.fill()),re.fillStyle="#f4f0e4",re.font="600 21px sans-serif",re.textBaseline="middle",re.fillText(I==null?"Boredom —":`Bored ${Math.round(I)}%`,18,22),se&&(re.textAlign="right",re.fillStyle="#ddc270",re.font="600 15px sans-serif",re.fillText(se.toUpperCase(),238,22));const w=D.material;w.map?.dispose(),w.map=new hr(Q),w.map.colorSpace=kt,w.needsUpdate=!0}const Ye=(()=>{const D=document.createElement("canvas");D.width=128,D.height=128;const I=D.getContext("2d");I.fillStyle="#e9e4f4",I.strokeStyle="#31434b",I.lineWidth=6,I.font="700 40px sans-serif";for(const[Q,re,w,y]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])I.font=`700 ${y}px sans-serif`,I.fillStyle="#31434b",I.fillText(Q,re+3,w+3),I.fillStyle="#e9e4f4",I.fillText(Q,re,w);const se=new hr(D);return se.colorSpace=kt,se})(),zt=(D,I,se)=>{const Q=Math.atan2(Math.sin(I-D),Math.cos(I-D));return Math.abs(Q)<se?I:D+Math.sign(Q)*se},dt=new Map;let Gt=1;function yt(D,I,se,Q,re,w){const y=new ni;y.position.set(D,0,I),y.rotation.y=se,t.add(y);const R=Lp(w),G=r(R.shell,.62),L=r("#293b42",.8),ae=r(R.accent,.48),ue=r(R.trim,.57),j=new _r({color:"#263b41",side:pn}),ie=Q.startsWith("B")?u:Q.startsWith("C")?v:g,fe=(Ke,Yt,ir,pi,Ns,rr,Na,Da=y,sr=.055)=>{const Ua=new Du(pi,Ns,rr,3,Math.min(sr,pi/3,Ns/3,rr/3)),ar=new vt(Ua,Na);ar.position.set(Ke,Yt,ir),Da.add(ar);const Ds=new vt(Ua,j);return Ds.scale.setScalar(1.055),ar.add(Ds),ar};for(const Ke of[-.13,.13])fe(Ke,.42,0,.16,.4,.18,G),T(Ke,.19,.055,.12,ae,y).scale.set(.95,.68,1.4);fe(0,.99,0,.54,.61,.35,G,y,.1),fe(0,.72,0,.57,.13,.37,G,y,.06),M(0,.98,.184,.012,.45,.012,L,y);const C=M(-.105,1.21,.19,.16,.07,.025,G,y);C.rotation.z=-.55;const ee=M(.105,1.21,.19,.16,.07,.025,G,y);ee.rotation.z=.55,b(0,1.36,0,.09,.12,ae,y);const Z=new ni;if(Z.position.set(0,1.64,0),y.add(Z),R.head==="round"){const Ke=T(0,0,0,.265,G,Z);Ke.scale.set(1.21,1,.92);const Yt=new vt(Ke.geometry,j);Yt.scale.setScalar(1.055),Ke.add(Yt)}else fe(0,0,0,.59,R.ears==="compact"?.44:.49,.45,G,Z,R.head==="monitor"?.055:.13);const ge=R.head==="monitor";ge&&fe(0,-.005,.232,.49,.36,.025,L,Z,.06);for(const Ke of[-1,1]){const Yt=b(Ke*.335,0,0,.125,.09,ae,Z);Yt.rotation.z=Math.PI/2;const ir=b(Ke*.389,0,0,R.ears==="compact"?.06:.085,.025,ue,Z);if(ir.rotation.z=Math.PI/2,R.ears==="ring"){const pi=new vt(new oa(.125,.012,6,24),L);pi.rotation.y=Math.PI/2,pi.position.set(Ke*.385,0,0),Z.add(pi)}}const pe=R.antenna==="pair"?[-.17,.17]:[R.antenna==="offset-right"?.15:R.antenna==="offset-left"?-.16:0];for(const Ke of pe)x(new O(Ke,.23,0),new O(Ke+(R.antenna==="offset-right"?.045:0),.39,0),.018,L,Z),T(Ke+(R.antenna==="offset-right"?.045:0),.4,0,.047,ue,Z);const me=document.createElement("canvas");me.width=256,me.height=200;const xe=me.getContext("2d"),De=ge?"#fff8e4":"#263b41";xe.fillStyle=De,xe.strokeStyle=De,xe.lineWidth=12,xe.lineCap="round";for(const Ke of[82,174])xe.beginPath(),R.eyes==="happy"?(xe.arc(Ke,79,15,Math.PI,Math.PI*2),xe.stroke()):(xe.ellipse(Ke,76,10,17,0,0,Math.PI*2),xe.fill());xe.fillStyle="#f29b40";for(const Ke of[52,204])xe.beginPath(),xe.ellipse(Ke,112,13,8,0,0,Math.PI*2),xe.fill();xe.fillStyle="#263b41",xe.beginPath(),xe.ellipse(128,123,24,28,0,0,Math.PI),xe.closePath(),xe.fill(),xe.fillStyle="#f18540",xe.beginPath(),xe.ellipse(128,137,13,9,0,0,Math.PI*2),xe.fill();const $=new hr(me);$.colorSpace=kt;const Ce=new _r({map:$,transparent:!0,depthWrite:!1}),Be=new vt(new br(.49,.38),Ce);Be.position.set(0,-.01,.255),Z.add(Be);const ye=new ni;if(ye.position.set(.32,1.22,0),y.add(ye),fe(0,-.12,0,.16,.29,.19,G,ye,.065),T(0,-.28,.07,.085,ae,ye),fe(0,-.29,.16,.13,.12,.2,G,ye,.05),T(0,-.29,.28,.092,ae,ye),fe(-.32,1.04,0,.16,.36,.19,G,y,.07),T(-.32,.84,.06,.09,ae,y),R.prop==="magnifier"){const Ke=new vt(new oa(.1,.018,8,24),ae);Ke.position.set(.32,1.05,.4),y.add(Ke),x(new O(.32,.96,.4),new O(.32,.84,.4),.022,L,y);const Yt=b(.32,1.05,.4,.084,.008,p,y);Yt.rotation.x=Math.PI/2}else if(R.prop==="clipboard"){fe(-.31,.96,.23,.22,.29,.035,ue,y,.025),M(-.31,.97,.253,.17,.22,.008,h,y);for(let Ke=0;Ke<3;Ke++)M(-.31,.92+Ke*.05,.261,.11,.012,.005,ae,y)}else{b(-.31,.97,.17,.028,.15,ae,y);const Ke=new vt(new Iu(.078,.15,16),ue);Ke.position.set(-.31,.86,.17),y.add(Ke)}const at=T(-.17,1.22,.19,.018,_,y);at.name="agent-status-led";const Mt=S(Q,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(Mt),y.add(Mt),M(.12,.93,.19,.2,.045,.015,ie,y);const jn=S(Q.toUpperCase(),D,2.07,I+.16,.58,.18,"#f4f8fa","#31434b");y.userData.ownedMaterials=[G,L,ae,ue,j,Ce,Mt.material],y.userData.ownedTextures=[$,Mt.material.map];const Fr=new Vl(new Mo({transparent:!0,depthTest:!1}));Fr.scale.set(.8,.8,1),t.add(Fr);const Li=new Vl(new Mo({transparent:!0,depthTest:!1}));Li.scale.set(.86,.215,1),Li.name="boredom-meter",t.add(Li);const nr=new Vl(new Mo({map:Ye,transparent:!0,depthTest:!1}));nr.scale.set(.5,.5,1),nr.name="boredom-zzz",nr.visible=!1,t.add(nr);for(const Ke of[G,L,ae,ue])Ke.userData.baseColor=Ke.color.clone();const Ls={id:w,station:re,head:Z,arm:ye,light:at,group:y,sign:jn,path:[],target:"",activity:Fr,activityState:"",idea:null,ideaText:"",meter:Li,meterKey:"",zzz:nr,tint:1};return dt.set(w,Ls),Ls}const mn=new Map;for(const D of[...t.children])if(D instanceof vt&&D.geometry===i&&!D.userData.overhead&&!Array.isArray(D.material)&&!D.material.transparent){const I=mn.get(D.material)||[];I.push(D),mn.set(D.material,I)}for(const[D,I]of mn){if(I.length<3)continue;const se=new o_(i,D,I.length);I.forEach((Q,re)=>{Q.updateMatrix(),se.setMatrixAt(re,Q.matrix),t.remove(Q)}),se.instanceMatrix.needsUpdate=!0,se.computeBoundingSphere(),t.add(se)}const Lt=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new O(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new O(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new O(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new O(-6.3,1.25,7.2),radius:3.1}];let on=0;const gn={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function _n(D,I){const se=Math.max(0,Math.min(.05,D-on));on=D,xt.rotation.y=D*(I.replay||I.running?.025:.006),ze.forEach((R,G)=>{R.visible=G<I.agents.length*4,R.position.y=.15+G%5*.11+Math.sin(D*.8+G)*.025});const Q=new Set(I.agents.map(R=>R.id));for(const[R,G]of dt)if(!Q.has(R)){if(t.remove(G.group,G.sign,G.activity,G.meter,G.zzz),G.meter.material.map?.dispose(),G.meter.material.dispose(),G.zzz.material.dispose(),G.idea){t.remove(G.idea),G.idea.geometry.dispose();const ae=G.idea.material;ae.map?.dispose(),ae.dispose()}G.activity.material.map?.dispose(),G.activity.material.dispose(),G.group.traverse(ae=>{ae instanceof vt&&ae.geometry!==i&&ae.geometry.dispose()});for(const ae of G.group.userData.ownedMaterials)ae.dispose();for(const ae of G.group.userData.ownedTextures||[])ae?.dispose();G.sign.geometry.dispose();const L=G.sign.material;L.map?.dispose(),L.dispose(),dt.delete(R)}I.agents.forEach((R,G)=>{let L=dt.get(R.id);L||(L=yt(R.position?.x??(G%3-1)*.6,R.position?.z??10.4+Math.floor(G/3)*.4,0,R.name,R.stationId,R.id));const ae=R.id.startsWith("worker-")?Number(R.id.match(/\d+$/)?.[0]||1)-1:G%4,ue=I.finale===!0,j=G/Math.max(1,I.agents.length)*Math.PI*2,ie=ue?new O(Gi.x+Math.cos(j)*2.35,0,Gi.z+Math.sin(j)*2.35):jc(R.stationId,ae),fe=ue?`finale:${G}`:`${R.stationId}:${ae}`;L.target!==fe&&(L.target=fe,L.station=R.stationId,L.path=To(L.group.position,ie,gn,n)),R.position&&!ue&&(L.group.position.set(R.position.x,0,R.position.z),L.path=[]);const C=Np(R.boredom,I.reducedMotion),ee=L.path[0];if(ee){const De=ee.x-L.group.position.x,$=ee.z-L.group.position.z,Ce=Math.hypot(De,$);if(Ce<.07)L.path.shift();else{const Be=Math.min(Ce,se*1.8*C.walk);L.group.position.x+=De/Ce*Be,L.group.position.z+=$/Ce*Be,L.group.rotation.y=I.reducedMotion?Math.atan2(De,$):zt(L.group.rotation.y,Math.atan2(De,$),Math.max(.02,se*6*C.turn))}}else L.group.rotation.y=R.position?.heading??(R.stationId==="culture"?Math.atan2(Gi.x-L.group.position.x,Gi.z-L.group.position.z):Math.PI);L.sign.position.set(L.group.position.x,2.28,L.group.position.z),L.sign.lookAt(e.position),L.activity.position.set(L.group.position.x,2.85,L.group.position.z);const Z=!!ee||!!R.position?.moving,ge=`${R.boredom==null?"-":Math.round(R.boredom)}:${R.regime||""}`;L.meterKey!==ge&&(L.meterKey=ge,ut(L.meter,R.boredom,Ir(R.regime).label)),L.meter.position.set(L.group.position.x,2.5,L.group.position.z),L.group.position.y=ue?I.reducedMotion?0:.12+Math.abs(Math.sin(D*3+G))*.18:Z?Math.abs(Math.sin(D*C.bobHz+G))*C.bob:0,ue&&!I.reducedMotion&&(L.group.rotation.y+=se*.35),L.group.rotation.x=C.slump,L.zzz.visible=C.zzz&&!Z,L.zzz.position.set(L.group.position.x+.32,1.95+(I.reducedMotion?0:(D*.35+G*.3)%1*.35),L.group.position.z),L.zzz.material.opacity=I.reducedMotion?.9:1-(D*.35+G*.3)%1*.6,Math.abs(L.tint-C.saturation)>.02&&(L.tint=C.saturation,L.group.traverse(De=>{if(De instanceof vt&&De.material instanceof Eo&&De.material.userData.baseColor){const $=De.material.userData.baseColor,Ce=$.r*.3+$.g*.59+$.b*.11;De.material.color.setRGB(Ce+($.r-Ce)*C.saturation,Ce+($.g-Ce)*C.saturation,Ce+($.b-Ce)*C.saturation)}})),L.activity.visible=R.state!=="idle"&&!(R.stationId==="culture"&&R.discussionBrief);const pe=R.discussionBrief||"",me=pe?`${R.name}:${pe}:${(R.discussionPeers||[]).join(",")}`:"";if(L.ideaText!==me){if(L.idea){t.remove(L.idea),L.idea.geometry.dispose();const De=L.idea.material;De.map?.dispose(),De.dispose(),L.idea=null}L.ideaText=me,pe&&(L.idea=k(R.name,pe,R.discussionPeers||[]),L.idea.name="recorded-discussion-bubble",t.add(L.idea))}if(L.idea&&(L.idea.visible=Gt>=.98&&R.stationId==="culture"&&!R.position?.moving&&(!!R.discussionBrief||R.state==="thinking"||R.state==="reviewing"),L.idea.position.set(L.group.position.x,3.05,L.group.position.z),L.idea.lookAt(e.position)),L.activityState!==R.state){L.activityState=R.state;const De=document.createElement("canvas");De.width=128,De.height=128;const $=De.getContext("2d");$.strokeStyle="#31434b",$.fillStyle="#f4f0e4",$.lineWidth=7,$.lineCap="round",$.lineJoin="round",R.state==="thinking"?($.beginPath(),$.moveTo(64,19),$.lineTo(64,30),$.moveTo(37,31),$.lineTo(44,39),$.moveTo(91,31),$.lineTo(84,39),$.stroke(),$.beginPath(),$.arc(64,57,25,Math.PI,Math.PI*2),$.lineTo(82,75),$.lineTo(46,75),$.closePath(),$.fill(),$.stroke(),$.beginPath(),$.moveTo(50,88),$.lineTo(78,88),$.moveTo(54,99),$.lineTo(74,99),$.stroke()):R.state==="working"?($.beginPath(),$.arc(48,48,26,0,Math.PI*2),$.arc(80,76,18,0,Math.PI*2),$.stroke(),$.beginPath(),$.moveTo(31,68),$.lineTo(22,91),$.lineTo(49,82),$.moveTo(76,96),$.lineTo(70,108),$.lineTo(87,99),$.stroke()):($.beginPath(),$.moveTo(23,104),$.lineTo(105,104),$.moveTo(35,99),$.lineTo(35,76),$.lineTo(51,76),$.lineTo(51,99),$.moveTo(61,99),$.lineTo(61,55),$.lineTo(77,55),$.lineTo(77,99),$.moveTo(87,99),$.lineTo(87,30),$.lineTo(103,30),$.lineTo(103,99),$.stroke()),L.activity.material.map?.dispose(),L.activity.material.map=new hr(De),L.activity.material.map.colorSpace=kt,L.activity.material.needsUpdate=!0}const xe=(I.replay||I.running)&&(R.state==="working"||R.state==="thinking");L.arm.rotation.x=ee||R.position?.moving?Math.sin(D*5+G)*.12:xe?Math.sin(D*1.8+G)*.08:0,L.head.rotation.y=Math.sin(D*(C.level==="frenetic"?.9:.32)+G)*(C.level==="frenetic"?.12:.055),L.head.rotation.x=(xe&&!ee?.12:0)+C.droop,L.light.scale.setScalar(xe?1+Math.sin(D*2)*.12:1)}),e.updateMatrixWorld();const re=[],w=230,y=86.25;for(const R of dt.values())if(R.idea?.visible){const G=R.idea.position.clone(),L=G.clone().applyMatrix4(e.matrixWorldInverse);if(L.z>=0){R.idea.visible=!1;continue}const ae=G.project(e);if(Math.abs(ae.x)>1.15||Math.abs(ae.y)>1.15){R.idea.visible=!1;continue}let ue=At.clamp((ae.x+1)*innerWidth/2,90+w/2,innerWidth-w/2-16),j=(1-ae.y)*innerHeight/2;for(let fe=0;fe<12&&re.some(C=>Math.abs(ue-C.x)<w+10&&Math.abs(j-C.y)<y+8);fe++)j-=y+8,j<110&&(j=155,ue=Math.min(innerWidth-w/2-16,ue+w+12));re.push({x:ue,y:j}),R.idea.position.set(ue/innerWidth*2-1,1-j/innerHeight*2,ae.z).unproject(e),R.idea.quaternion.copy(e.quaternion);const ie=2*-L.z*Math.tan(At.degToRad(e.fov/2))/innerHeight;R.idea.scale.setScalar(w*ie/2.7),R.idea.renderOrder=10}}const z=new ni;t.add(z);const vn=new Set([...dt.values()].flatMap(D=>[D.group,D.sign,D.activity,D.meter,D.zzz]));for(const D of[...t.children])D!==z&&!vn.has(D)&&z.add(D);function gt(D){Gt=At.clamp(D,0,1);const I=MS(Gt,dt.size);z.scale.setScalar(I.room),[...dt.values()].forEach((se,Q)=>{const re=I.agents[Q]??1,w=re<.88?re/.88*1.08:1.08-(re-.88)/.12*.08;se.group.scale.setScalar(w),se.sign.scale.setScalar(w),se.activity.scale.set(.8*w,.8*w,1),se.meter.scale.set(.86*w,.215*w,1),se.zzz.scale.set(.5*w,.5*w,1)})}return{scene:t,camera:e,colliders:n,stations:Lt,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:_n,grow:gt,setOverview:D=>{X.visible=!0},agentPositions:()=>[...dt.values()].map(D=>({id:D.id,position:D.group.position.clone()})),exposure:1}}const gs=!0;function Dp(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function Jc(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Tf(t,e="|"){return t.map(n=>Bp(n)).join(e)}function Qc(t,e){return typeof e=="bigint"?e.toString():e}class TS{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function Uu(t){return new TS(t)}function AS(t){return t==null}function Ou(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function RS(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function Or(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Up(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function Pi(t){return Up(t._zod.def)??t._zod.def.shape}function Op(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return Or(this,e,i),i},enumerable:!0,configurable:!0})}function Fp(t,e,n){e in t?Or(t,e,n):t[e]=n}function Lr(t,e,n,i){const r=Pi(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?Op(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):Fp(t,s,i?i(a.value,s):a.value))}}function CS(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?Op(t,n,()=>e[n]):Fp(t,n,i.value))}}function Ln(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function PS(t){return JSON.stringify(t)}function IS(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const kp="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function qo(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const LS=Uu(()=>{if(ui.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function xa(t){if(qo(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(qo(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function zp(t){return xa(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const NS=new Set(["string","number","symbol"]);function hl(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function er(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Fe(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function Bp(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function DS(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const $p={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},US={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function OS(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return Lr(s,t,pl(t,e)),er(t,Ln(n,{shape:s,checks:[]}))}function pl(t,e){const n=Pi(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function FS(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(pl(t,e)),a={};return Lr(a,t,Reflect.ownKeys(Pi(t)).filter(o=>!s.has(o))),er(t,Ln(n,{shape:a,checks:[]}))}function kS(t,e){if(!xa(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=Pi(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return er(t,Ln(t._zod.def,{shape:Hp(t,e)}))}function Hp(t,e){const n={};return Lr(n,t,Reflect.ownKeys(Pi(t))),CS(n,e),n}function zS(t,e){if(!xa(e))throw new Error("Invalid input to safeExtend: expected a plain object");return er(t,Ln(t._zod.def,{shape:Hp(t,e)}))}function BS(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};Lr(n,t,Reflect.ownKeys(Pi(t))),Lr(n,e,Reflect.ownKeys(Pi(e)));const i=Ln(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return er(t,i)}function Af(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(pl(e,n)):void 0,l={};return Lr(l,e,Reflect.ownKeys(Pi(e)),t&&((c,u)=>o&&!o.has(u)?c:new t({type:"optional",innerType:c}))),er(e,Ln(e._zod.def,{shape:l,checks:[]}))}function $S(t,e,n){const i=n?new Set(pl(e,n)):void 0,r={};return Lr(r,e,Reflect.ownKeys(Pi(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),er(e,Ln(e._zod.def,{shape:r}))}function Ei(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function HS(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function Gp(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function Xs(t){return typeof t=="string"?t:t?.message}function Rf(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function eu(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function As(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:Xs(t.inst?._zod.def?.error?.(t))??Xs(s?.(t))??Xs(e?.error?.(t))??Xs(n.customError?.(t))??Xs(n.localeError?.(t))??"Invalid input",o={};for(const l of Object.keys(t))l==="inst"||l==="schema"||l==="continue"||l==="input"||l==="__proto__"||(o[l]=t[l]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const GS=/[\uD800-\uDBFF]/;function Fu(t){const e=t.length;if(!GS.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function ku(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function VS(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function ya(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function WS(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):XS(t,n,i.value)}}function Ki(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function Vp(t,e,n){return Ki(t,e,n,!1)}function Wp(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return Ki(this,n,i(this))},set(r){Ki(this,n,r)}})}return e}function XS(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:Ki(this,e,n.bind(this))},set(i){Ki(this,e,i)}})}function ZS(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let jl,Bi=!1;const qS={configurable:!0,get(){Bi=!0}};function ht(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&jl!==t._zod){jl=void 0;return}jl=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,qS);const r=Bi;Bi=!1;try{const s=n(this);return Bi?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Bi=Bi||r,s}catch(s){throw delete this[e],Bi=Bi||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function YS(t,e,n,i){const r=ZS(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const jS="~constantCatch";function KS(t){const e=()=>t;return e[jS]=!0,e}var Cf;const Kl={value:void 0,enumerable:!1};let Pf="captureStackTrace"in Error?Error:null;function JS(t){const e=Pf;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return Pf=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function ce(t,e,n,i){const r={};function s(f){this.def=f,this.constr=d,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function l(f,h){if(f._zod){if(f._zod.traits.has(t))return}else{Kl.value=new s(h);try{Object.defineProperty(f,"_zod",Kl)}finally{Kl.value=void 0}}if(f._zod.traits.add(t),e(f,h),o){const v=Object.getPrototypeOf(f),p=f._zod.constr.prototype;let m=v;for(;m&&m!==p;)m=Object.getPrototypeOf(m);const _=m??v;o.has(_)||(o.add(_),WS(_,a))}const g=d.prototype;for(const v in g)Object.prototype.hasOwnProperty.call(g,v)&&(v in f||(f[v]=g[v].bind(f)))}const c=i?.Parent??Object;class u extends c{}Object.defineProperty(u,"name",{value:t});function d(f){const h=i?.Parent?JS(u):this;l(h,f);const g=h._zod.deferred;if(g){for(const p of g)p();h._zod.deferred=void 0}const v=globalThis.__zod_globalConfig?.postProcessor;return v&&v(h),h}return Object.defineProperty(d,"init",{value:l}),Object.defineProperty(d,Symbol.hasInstance,{value:f=>i?.Parent&&f instanceof i.Parent?!0:f?._zod?.traits?.has(t)}),Object.defineProperty(d,"name",{value:t}),d}class Sr extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Xp extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Cf=globalThis).__zod_globalConfig??(Cf.__zod_globalConfig={});const ui=globalThis.__zod_globalConfig;function tr(t){return t&&Object.assign(ui,t),ui}function QS(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,Qc,2)),t.message}function eM(t){this._zod.message=t}const tM={get:QS,set:eM,enumerable:!0,configurable:!0},Jl={value:void 0,enumerable:!1},If=new WeakSet([Object.prototype,Error.prototype]),nM=(t,e)=>{t.name="$ZodError",Jl.value=e,Object.defineProperty(t,"issues",Jl),Jl.value=void 0,Object.defineProperty(t,"message",tM);const n=Object.getPrototypeOf(t);If.has(n)||(If.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},iM=ce("$ZodError",nM);function rM(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function sM(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?rM(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function aM(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let l=n,c=0;for(;c<o.length;){const u=o[c],d=c===o.length-1;if(u==="_errors"){d&&l._errors.push(e(a)),c++;continue}Object.prototype.hasOwnProperty.call(l,u)||Object.defineProperty(l,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const f=l[u];d&&f._errors.push(e(a)),l=f,c++}}}};return i(t),n}function ml(t,e){return{callee:e?.callee??t,Err:e?.Err}}const zu=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new Sr;if(o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>As(c,a,tr())));throw kp(l,s?.callee??e),l}return o.value};return e},Bu=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>As(c,a,tr())));throw kp(l,s?.callee??e),l}return o.value};return e},$u=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new Sr;return s.issues.length?Zp(t,s.issues,r):{success:!0,data:s.value}};function Zp(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>As(r,n,tr()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const Hu=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?Zp(t,s.issues,r):{success:!0,data:s.value}},oM=Symbol.for("zod.compile.invalid"),lM=Symbol.for("zod.compile.fallback"),cM=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==oM)return!0;if(i.definite===!0&&n===void 0)return!1}return uM(t,e,n)});function uM(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[lM]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new Sr;return s.issues.length===0}const dM=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},fM=t=>{const e=zu(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,ml(n,a))};return n},hM=t=>{const e=zu(t),n=(i,r,s,a)=>e(i,r,s,ml(n,a));return n},pM=t=>{const e=Bu(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,ml(n,a))};return n},mM=t=>{const e=Bu(t),n=async(i,r,s,a)=>await e(i,r,s,ml(n,a));return n},gM=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return $u(t)(e,n,r)},_M=t=>(e,n,i)=>$u(t)(e,n,i),vM=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Hu(t)(e,n,r)},xM=t=>async(e,n,i)=>Hu(t)(e,n,i),yM=/^[cC][0-9a-z]{6,}$/,bM=/^[0-9a-z]+$/,SM=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,MM=/^[0-9a-vA-V]{20}$/,EM=/^[A-Za-z0-9]{27}$/,wM=/^[a-zA-Z0-9_-]{21}$/;function TM(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const AM=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,RM=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Lf=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,CM=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,PM="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function IM(){return new RegExp(PM,"u")}const LM=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,NM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,DM=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,UM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,OM=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,FM=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,kM=/^https?$/,zM=/^\+[1-9]\d{6,14}$/,qp="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function BM(t){return new RegExp(`^${t}$`)}const $M=BM(qp);function tu(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function HM(t){return new RegExp(`^${tu(t)}$`)}function GM(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${tu({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${tu({precision:t.precision})}`:n;return new RegExp(`^${qp}T(?:${i})$`)}const VM=/^[\s\S]{0,}$/,WM=/^-?\d+(?:\.\d+)?$/,XM=/^(?:true|false)$/i,ZM=/^[^A-Z]*$/,qM=/^[^a-z]*$/,Rn=ce("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),Gu=t=>{const e=t.value;return!AS(e)&&e.length!==void 0},Yo={number:"number",bigint:"bigint",object:"date"},Yp=ce("$ZodCheckLessThan",(t,e)=>{Rn.init(t,e);const n=Yo[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:Yo[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),jp=ce("$ZodCheckGreaterThan",(t,e)=>{Rn.init(t,e);const n=Yo[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:Yo[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),YM=ce("$ZodCheckMultipleOf",(t,e)=>{Rn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):RS(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),jM=ce("$ZodCheckNumberFormat",(t,e)=>{Rn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=$p[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),KM=ce("$ZodCheckMaxLength",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=Gu),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?Fu(r):s)<=e.maximum)return;const o=ku(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),JM=ce("$ZodCheckMinLength",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=Gu),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?Fu(r):s)>=e.minimum)return;const o=ku(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),QM=ce("$ZodCheckLengthEquals",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=Gu),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?Fu(r):s;if(a===e.length)return;const o=ku(r),l=a>e.length;i.issues.push({origin:o,...l?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),gl=ce("$ZodCheckStringFormat",(t,e)=>{var n,i;Rn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),eE=ce("$ZodCheckRegex",(t,e)=>{gl.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),tE=ce("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=ZM),gl.init(t,e)}),nE=ce("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=qM),gl.init(t,e)}),iE=ce("$ZodCheckIncludes",(t,e)=>{Rn.init(t,e);const n=hl(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),rE=ce("$ZodCheckStartsWith",(t,e)=>{Rn.init(t,e);const n=new RegExp(`^${hl(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),sE=ce("$ZodCheckEndsWith",(t,e)=>{Rn.init(t,e);const n=new RegExp(`.*${hl(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),aE=ce("$ZodCheckOverwrite",(t,e)=>{Rn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class oE{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const lE={major:4,minor:6,patch:7},Pt=ce("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=lE;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,l,c)=>{if(o.memo)return o;let u=Ei(o),d;for(const f of l){if(f._zod.def.when){if(HS(o)||!f._zod.def.when(o))continue}else if(u)continue;const h=o.issues.length,g=f._zod.check(o);if(g instanceof Promise&&c?.async===!1)throw new Sr;if(d||g instanceof Promise)d=(d??Promise.resolve()).then(async()=>{await g,o.issues.length!==h&&(eu(o.issues,h,t),u||(u=Ei(o,h)))});else{if(o.issues.length===h)continue;eu(o.issues,h,t),u||(u=Ei(o,h))}}return d?d.then(()=>o):o},a=(o,l,c)=>{if(Ei(o))return o.aborted=!0,o;const u=s(l,r,c);if(u instanceof Promise){if(c.async===!1)throw new Sr;return u.then(d=>t._zod.parse(d,c))}return t._zod.parse(u,c)};t._zod.run=(o,l)=>{if(l.skipChecks)return t._zod.parse(o,l);if(l.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...l,skipChecks:!0});return u instanceof Promise?u.then(d=>a(d,o,l)):a(u,o,l)}const c=t._zod.parse(o,l);if(c instanceof Promise){if(l.async===!1)throw new Sr;return c.then(u=>s(u,r,l))}return s(c,r,l)}}},{get"~standard"(){return Vp(this,"~standard",Jp(this))},set"~standard"(t){Ki(this,"~standard",t)}}),Kp=(t,e)=>t.issues.length?{issues:t.issues.map(n=>As(n,e,tr()))}:{value:t.value};async function cE(t,e){const n={async:!0};return Kp(await t._zod.run({value:e,issues:[]},n),n)}function Jp(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return Kp(i,n)}catch{}return cE(t,e)},vendor:"zod",version:1}}const Vu=ce("$ZodString",(t,e)=>{Pt.init(t,e),t._zod.pattern=e.pattern??VM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),St=ce("$ZodStringFormat",(t,e)=>{gl.init(t,e),Vu.init(t,e)}),uE=ce("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=RM),St.init(t,e)}),dE=ce("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Lf(i))}else e.pattern??(e.pattern=Lf());St.init(t,e)}),fE=ce("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=CM),St.init(t,e)}),Qp=1,jo=2;function em(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function hE(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?em(t)||jo:pE(t,e)}function pE(t,e){if(!e.normalize&&e.protocol?.source===kM.source&&!/^https?:\/\//i.test(t))return Qp;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??jo}return new URL(t)}catch{return jo}}const mE=/[\t\n\r]/g;function Nf(t){return t.replace(mE,"")}function gE(t,e){return e.lastIndex=0,e.test(t.hostname)}function _E(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const vE=ce("$ZodURL",(t,e)=>{St.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=hE(i,e);if(r===Qp){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===jo){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=Nf(i);return}e.hostname&&!gE(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!_E(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:Nf(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),xE=ce("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=IM()),St.init(t,e)}),yE=ce("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?wM:TM(e.length)),St.init(t,e)}),bE=ce("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=yM),St.init(t,e)}),SE=ce("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=bM),St.init(t,e)}),ME=ce("$ZodULID",(t,e)=>{e.pattern??(e.pattern=SM),St.init(t,e)}),EE=ce("$ZodXID",(t,e)=>{e.pattern??(e.pattern=MM),St.init(t,e)}),wE=ce("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=EM),St.init(t,e)}),TE=ce("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=GM(e)),St.init(t,e)}),AE=ce("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=$M),St.init(t,e)}),RE=ce("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=HM(e)),St.init(t,e)}),CE=ce("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=AM),St.init(t,e)}),PE=ce("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=LM),St.init(t,e)}),IE=/^[0-9a-fA-F:.]+$/;function tm(t){return IE.test(t)?em(`http://[${t}]`):!1}const LE=ce("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=NM),St.init(t,e),t._zod.check=n=>{tm(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),NE=ce("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=DM),St.init(t,e)});function DE(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:tm(n)}const UE=ce("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=UM),St.init(t,e),t._zod.check=n=>{DE(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function nm(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const im=/^[0-9a-zA-Z+/]*={0,2}$/,OE=ce("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=im),St.init(t,e),t._zod.check=n=>{nm(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),Wu=/^[A-Za-z0-9_-]*$/;function FE(t){if(!Wu.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return nm(n)}const kE=ce("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=Wu),St.init(t,e),t._zod.check=n=>{FE(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),zE=ce("$ZodE164",(t,e)=>{e.pattern??(e.pattern=zM),St.init(t,e)});function BE(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const $E=ce("$ZodJWT",(t,e)=>{St.init(t,e),t._zod.check=n=>{BE(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),rm=ce("$ZodNumber",(t,e)=>{Pt.init(t,e),t._zod.pattern=WM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),HE=ce("$ZodNumberFormat",(t,e)=>{jM.init(t,e),rm.init(t,e)}),GE=ce("$ZodBoolean",(t,e)=>{Pt.init(t,e),t._zod.pattern=XM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=!!n.value}catch{}const r=n.value;return typeof r=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:t}),n}}),VE=ce("$ZodUnknown",(t,e)=>{Pt.init(t,e),t._zod.parse=n=>n}),WE=ce("$ZodNever",(t,e)=>{Pt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function XE(t,e){const n=Rf(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[l,c]of Rf(t._zod.def.checks))if(o>l&&c._zod.def.when(s)){const u=s.issues.length;return c._zod.check(s),s.issues[u].continue=!1,eu(s.issues,u,t),s}}return r(s,a)}}const ZE=t=>Array.isArray(t)?t.length:-1;function Df(t,e,n){t.issues.length&&e.issues.push(...Gp(n,t.issues)),e.value[n]=t.value}const qE=ce("$ZodArray",(t,e)=>{Pt.init(t,e);const n=ui.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let l=0;l<s.length;l++){const c=s[l],u=e.element._zod.run({value:c,issues:[]},r);if(u instanceof Promise)a.push(u.then(d=>Df(d,i,l)));else if(Df(u,i,l),o&&u.issues.length!==0&&Ei(u))break}return a.length?Promise.all(a).then(()=>i):i},XE(t,ZE)});function Ko(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...Gp(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const YE=[];function sm(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:YE,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=DS(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function am(t,e,n,i,r,s,a){const o=[],l=r.keySet,c=r.catchall._zod,u=c.def.type,d=c.optin,f=c.optout;let h=0;for(const g in e){if(a&&n.issues.length!==h){if(Ei(n,h))break;h=n.issues.length}if(l.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const v=c.run({value:e[g],issues:[]},i);v instanceof Promise?t.push(v.then(p=>Ko(p,n,g,e,d,f))):Ko(v,n,g,e,d,f)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const jE=ce("$ZodObject",(t,e)=>{Pt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const c=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),c.raw=u,u};c.raw=i,Object.defineProperty(e,"shape",{get:c})}const r=Uu(()=>sm(e));ht(t,"propValues",c=>{const u=c.def.shape,d={};for(const f in u){const h=u[f]._zod;if(h.values){Object.prototype.hasOwnProperty.call(d,f)||Or(d,f,new Set);for(const g of h.values)d[f].add(g);h.optin!==void 0&&d[f].add(void 0)}}return d});const s=qo,a=e.catchall;let o;const l=ui.memoizer;l?.attach(t),t._zod.parse=(c,u)=>{o??(o=r.value);const d=c.value;if(!s(d))return c.issues.push({expected:"object",code:"invalid_type",input:d,inst:t}),c;c.value=l?l.alloc(t,c,{},u):{};const f=[],h=o.shape,g=u?.abortEarly;let v=c.issues.length;for(const p of o.allKeys){if(g&&c.issues.length!==v){if(Ei(c,v))break;v=c.issues.length}if(p==="__proto__")continue;const m=h[p],_=m._zod.optin,M=m._zod.optout,b=m._zod.run({value:d[p],issues:[]},u);b instanceof Promise?f.push(b.then(T=>Ko(T,c,p,d,_,M))):Ko(b,c,p,d,_,M)}return a?am(f,d,c,u,r.value,t,g===!0):f.length?Promise.all(f).then(()=>c):c}}),KE=ce("$ZodObjectJIT",(t,e)=>{jE.init(t,e);const n=t._zod.parse,i=Uu(()=>sm(e)),r=ui.memoizer,s=h=>{const g=i.value,v=g.symbolKeys,p=new oE(["payload","ctx"],{shape:h,inst:t,memo:r,syms:v}),m=T=>`shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`,_=(T,A)=>`
          let ${T}_ab = false;
          for (let i = 0; i < ${T}.issues.length; i++) {
            const iss = ${T}.issues[i];
            iss.path = iss.path ? [${A}, ...iss.path] : [${A}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${T}_ab = true;
          }
          if (${T}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;p.write("const input = payload.value;");const M=Object.create(null);let b=0;for(const T of g.allKeys)M[T]=`key_${b++}`;p.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const T of g.allKeys){if(T==="__proto__")continue;const A=M[T],x=typeof T=="symbol"?`syms[${v.indexOf(T)}]`:PS(T),S=`${x} in input`,k=h[T],N=k?._zod?.optin,F=N!==void 0,B=k?._zod?.optout==="optional";if(p.write(`const ${A} = ${m(x)};`),F&&B){const q=N==="optional"?`${A}_present`:`${A}.value !== undefined || ${A}_present`;p.write(`
        const ${A}_present = ${S};
        if (!${A}.issues.length || ${A}_present) {
          if (${A}.issues.length) {${_(A,x)}
          }

          if (${q}) {
            newResult[${x}] = ${A}.value;
          }
        }

      `)}else F?(p.write(`
        if (${A}.issues.length) {${_(A,x)}
        }
      `),N==="defaulted"?p.write(`newResult[${x}] = ${A}.value;`):p.write(`
        if (${A}.value !== undefined || ${S}) {
          newResult[${x}] = ${A}.value;
        }
      `)):p.write(`
        const ${A}_present = ${S};
        if (${A}.issues.length) {${_(A,x)}
        }
        if (!${A}_present && !${A}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${x}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${A}_present) {
          newResult[${x}] = ${A}.value;
        }

      `)}return p.write("payload.value = newResult;"),p.write("return payload;"),p.compile()};let a;const o=qo,l=!ui.jitless,u=l&&LS.value,d=e.catchall;let f;t._zod.parse=(h,g)=>{f??(f=i.value);const v=h.value;return o(v)?l&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),h=a(h,g),d?am([],v,h,g,f,t,g?.abortEarly===!0):h):n(h,g):(h.issues.push({expected:"object",code:"invalid_type",input:v,inst:t}),h)}});function Uf(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!Ei(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>As(a,i,tr())))}),e)}const JE=ce("$ZodUnion",(t,e)=>{Pt.init(t,e),ht(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),ht(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),ht(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),ht(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>Ou(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const l=o._zod.run({value:i.value,issues:[]},r);if(l instanceof Promise)a.push(l),s=!0;else{if(l.issues.length===0)return l;a.push(l)}}return s?Promise.all(a).then(o=>Uf(o,i,t,r)):Uf(a,i,t,r)}}),QE=ce("$ZodIntersection",(t,e)=>{Pt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([l,c])=>Of(n,l,c)):Of(n,s,a)}});function nu(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(xa(t)&&xa(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=nu(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=nu(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Of(t,e,n){const i=new Map;let r;const s=new Map,a=(c,u)=>{let d;if(c.code==="unrecognized_keys"&&!c.path?.length)r??(r=c),d=c.keys;else if(c.code==="invalid_key"&&c.origin==="record"&&c.path?.length===1){const f=String(c.path[0]);s.has(f)||s.set(f,c),d=[f]}else return!1;for(const f of d)i.has(f)||i.set(f,{}),i.get(f)[u]=!0;return!0};for(const c of e.issues)a(c,"l")||t.issues.push(c);for(const c of n.issues)a(c,"r")||t.issues.push(c);const o=[...i].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(o.length){const c=r?o.filter(u=>r.keys.includes(u)):[];c.length&&t.issues.push({...r,keys:c});for(const u of o)!c.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const l=nu(e.value,n.value);if(!l.valid){if(Ei(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)}return t.value=l.data,t}const ew=ce("$ZodEnum",(t,e)=>{Pt.init(t,e);const n=Jc(e.entries),i=new Set(n);t._zod.values=i,ht(t,"pattern",r=>{const s=Jc(r.def.entries).filter(a=>NS.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>hl(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),tw=ce("$ZodTransform",(t,e)=>{Pt.init(t,e),t._zod.optin="optional",ui.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new Xp(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new Sr;return n.value=r,n}});function Ff(t,e){return t.value=e.issues.length?void 0:e.value,t}const om=ce("$ZodOptional",(t,e)=>{Pt.init(t,e),ht(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",ht(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),ht(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${Ou(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>Ff(n,s)):Ff(n,r)}return e.innerType._zod.run(n,i)}}),nw=ce("$ZodExactOptional",(t,e)=>{om.init(t,e),ht(t,"values",n=>n.def.innerType._zod.values),ht(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),iw=ce("$ZodNullable",(t,e)=>{Pt.init(t,e),ht(t,"optin",n=>n.def.innerType._zod.optin),ht(t,"optout",n=>n.def.innerType._zod.optout),ht(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${Ou(i.source)}|null)$`):void 0}),ht(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),rw=ce("$ZodDefault",(t,e)=>{Pt.init(t,e),t._zod.optin="defaulted",ht(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>kf(s,e)):kf(r,e)}});function kf(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const sw=ce("$ZodPrefault",(t,e)=>{Pt.init(t,e),t._zod.optin="defaulted",ht(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),aw=ce("$ZodNonOptional",(t,e)=>{Pt.init(t,e),ht(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>zf(s,t)):zf(r,t)}});function zf(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function Bf(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>As(r,i,tr()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const ow=ce("$ZodCatch",(t,e)=>{Pt.init(t,e),ht(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),ht(t,"optout",n=>n.def.innerType._zod.optout),ht(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>Bf(n,s,e,i)):Bf(n,r,e,i)}}),lw=ce("$ZodPipe",(t,e)=>{Pt.init(t,e),ht(t,"values",n=>n.def.in._zod.values),ht(t,"optin",n=>n.def.in._zod.optin),ht(t,"optout",n=>n.def.out._zod.optout),ht(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>co(a,e.in,i)):co(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>co(s,e.out,i)):co(r,e.out,i)}});function co(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const cw=ce("$ZodReadonly",(t,e)=>{Pt.init(t,e),ht(t,"propValues",n=>n.def.innerType._zod.propValues),ht(t,"values",n=>n.def.innerType._zod.values),ht(t,"optin",n=>n.def.innerType?._zod?.optin),ht(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then($f):$f(r)}});function $f(t){return t.memo||(t.value=Object.freeze(t.value)),t}const uw=ce("$ZodCustom",(t,e)=>{Rn.init(t,e),Pt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>Hf(s,n,i,t));Hf(r,n,i,t)}});function Hf(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(ya(r))}}class dw extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const iu="~memo",Gf=[];function lm(t){return t!==null&&typeof t=="object"}function Ql(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const cm=new WeakMap,ea=0,Ao=1,la=2;function Ro(t,e,n){const i=cm.get(t);if(i!==void 0)return i?la:ea;if(e.has(t))return la;e.add(t);let r=ea;const s=u=>{if(r!==la&&u?._zod){const d=Ro(u,e);d>r&&(r=d)}},a=(u,d)=>{let f=ea;for(const h of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,h);if(!g.enumerable)continue;const v=g.get?Ao:g.value?._zod?Ro(g.value,e):ea;v>f&&(f=v)}return f},o=u=>{u>r&&(r=u)},l=t._zod.def;switch(l.type){case"object":{const u=Up(l);o(u?a(u):Ao),s(l.catchall);break}case"array":s(l.element);break;case"tuple":for(const u of l.items)s(u);s(l.rest);break;case"record":case"map":s(l.keyType),s(l.valueType);break;case"set":s(l.valueType);break;case"union":for(const u of l.options)s(u);break;case"intersection":s(l.left),s(l.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(l.innerType);break;case"pipe":s(l.in),s(l.out);break;case"function":s(l.input),s(l.output);break;case"lazy":{const u=l._cachedInner??void 0;o(u?Ro(u,e):Ao);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in l){const d=Object.getOwnPropertyDescriptor(l,u);if(!d||d.get)continue;const f=d.value;if(!(!f||typeof f!="object")){if(f._zod)s(f);else if(Array.isArray(f))for(const h of f)s(h)}}}return e.delete(t),fw(t,r)}function fw(t,e){return e!==Ao&&cm.set(t,e===la),e}function hw(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let uo;const fo=[],pw={alloc(t,e,n){const i=uo;if(!i)return n;uo=void 0;const r={value:n,issues:null};return i.set(e.value,r),fo.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&gw(s,r.value))throw new dw;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(l,c)=>{if(n===void 0){const m=Ro(t,new Set);if(m===ea)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(l,c);m===la||i?n=!0:i=!0}const u=l.value;if(!lm(u))return a(l,c);let d=c[iu];d||(d={buckets:new WeakMap,backEdges:void 0},c[iu]=d);let f;r===c?f=s:(f=hw(d,t),r=c,s=f);const h=f.get(u);if(h)return l.value=h.value,h.issues?h.issues.length&&l.issues.push(...Ql(h.issues)):(l.memo=!0,d.backEdges??(d.backEdges=new WeakSet),d.backEdges.add(h.value)),l;uo=f;const g=fo.length,v=a(l,c);uo=void 0;const p=fo.length>g?fo.pop():void 0;return v instanceof Promise?v.then(m=>(p&&(p.issues=m.issues.length?Ql(m.issues):Gf),m)):(p&&(p.issues=v.issues.length?Ql(v.issues):Gf),v)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function mw(){return pw}function gw(t,e){const n=t[iu]?.backEdges;return n!==void 0&&lm(e)&&n.has(e)}const _w=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=VS(s.input),l=r(o,s.input);return`Invalid input: expected ${a}, received ${l}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${Bp(s.values[0])}`:`Invalid option: expected one of ${Tf(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${Tf(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function vw(){return{localeError:_w()}}var Vf;class xw{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function yw(){return new xw}(Vf=globalThis).__zod_globalRegistry??(Vf.__zod_globalRegistry=yw());const ta=globalThis.__zod_globalRegistry;function um(t){return t.checks&&(t.checks=[...t.checks]),t}function bw(t,e){return new t(um({type:"string",...Fe(e)}))}function Sw(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function Mw(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function Ew(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function ww(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function Tw(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function Aw(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function Rw(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function Cw(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function Pw(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function Iw(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function Lw(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function Nw(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function Dw(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function Uw(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function Ow(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function Fw(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function kw(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function zw(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function Bw(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function $w(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function Hw(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function Gw(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function Vw(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function Ww(t,e){return new t({type:"string",format:"date",check:"string_format",...Fe(e)})}function Xw(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function Zw(t,e){return new t({type:"string",format:"duration",check:"string_format",...Fe(e)})}function qw(t,e){return new t(um({type:"number",checks:[],...Fe(e)}))}function Yw(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function jw(t,e){return new t({type:"boolean",...Fe(e)})}function Kw(t){return new t({type:"unknown"})}function Jw(t,e){return new t({type:"never",...Fe(e)})}function Wf(t,e){return new Yp({check:"less_than",...Fe(e),value:t,inclusive:!1})}function ec(t,e){return new Yp({check:"less_than",...Fe(e),value:t,inclusive:!0})}function Xf(t,e){return new jp({check:"greater_than",...Fe(e),value:t,inclusive:!1})}function tc(t,e){return new jp({check:"greater_than",...Fe(e),value:t,inclusive:!0})}function Zf(t,e){return new YM({check:"multiple_of",...Fe(e),value:t})}function dm(t,e){return new KM({check:"max_length",...Fe(e),maximum:t})}function Jo(t,e){return new JM({check:"min_length",...Fe(e),minimum:t})}function fm(t,e){return new QM({check:"length_equals",...Fe(e),length:t})}function Qw(t,e){return new eE({check:"string_format",format:"regex",...Fe(e),pattern:t})}function eT(t){return new tE({check:"string_format",format:"lowercase",...Fe(t)})}function tT(t){return new nE({check:"string_format",format:"uppercase",...Fe(t)})}function nT(t,e){return new iE({check:"string_format",format:"includes",...Fe(e),includes:t})}function iT(t,e){return new rE({check:"string_format",format:"starts_with",...Fe(e),prefix:t})}function rT(t,e){return new sE({check:"string_format",format:"ends_with",...Fe(e),suffix:t})}function Rs(t){return new aE({check:"overwrite",tx:t})}function sT(t){return Rs(e=>e.normalize(t))}function aT(){return Rs(t=>t.trim())}function oT(){return Rs(t=>t.toLowerCase())}function lT(){return Rs(t=>t.toUpperCase())}function cT(){return Rs(t=>IS(t))}function uT(t,e,n){return new t({type:"array",element:e,...Fe(n)})}function dT(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Fe(n)})}function fT(t,e){const n=hT(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(ya(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(ya(s))}},t(i.value,i)),e);return n}function hT(t,e){const n=new Rn({check:"custom",...Fe(e)});return n._zod.check=t,n}function ca(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Or(t,i,n[i]);return t}function hm(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??ta,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function Cs(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function Jt(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const f=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(t,e,f,u)}const d=t._zod.parent;d&&(a.ref||(a.ref=d),Jt(d,e,u),e.seen.get(d).isParent=!0)}const l=e.metadataRegistry.get(t);return l&&ca(a.schema,l),e.io==="input"&&un(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function qf(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function pm(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const l=i.get(o);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const d=t.external.registry.get(a[0])?.id,f=t.external.uri??(g=>g);if(d)return{ref:f(d)};const h=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=h,{defId:h,ref:`${f("__shared")}#/${o}/${qf(h)}`}}const l="#",c=`${l}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:l};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:c+qf(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:l,defId:c}=r(a);o.def={...o.schema},c&&(o.defId=c);const u=o.schema;for(const d in u)delete u[d];u.$ref=l};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const c=t.external.registry.get(a[0])?.id;if(e!==a[0]&&c){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function mm(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;mm(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const gm=new Set(["type","properties","required","additionalProperties"]),Yf=["oneOf","anyOf"];function jf(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function ru(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!gm.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const c of e){const u=c.properties?.[a]??jf(c);u!=null&&(o.some(d=>JSON.stringify(d)===JSON.stringify(u))||o.push(u))}const l=o.length===1?o[0]:ru(o)??{allOf:o};Or(n,a,l)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=jf(a);o&&!s.some(l=>JSON.stringify(l)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function pT(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of gm)if(r in t)return;const n=e.filter(r=>Yf.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=ru(e);else{const r=n[0],s=Yf.find(l=>Array.isArray(r[l]));if(Object.keys(r).length!==1)return;const a=e.filter(l=>l!==r),o=r[s].map(l=>ru([...a,l]));if(o.some(l=>!l))return;i={[s]:o}}i&&(delete t.allOf,ca(t,i))}function _m(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const l=t.seen.get(o);if(l.ref===null)return;const c=l.def??l.schema,u={...c},d=l.ref;if(l.ref=null,d){i(d);const h=t.seen.get(d),g=h.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(g)):ca(c,g),ca(c,u),o._zod.parent===d)for(const p in c)p==="$ref"||p==="allOf"||p in u||delete c[p];if(g.$ref&&h.def)for(const p in c)p==="$ref"||p==="allOf"||p in h.def&&JSON.stringify(c[p])===JSON.stringify(h.def[p])&&delete c[p]}const f=o._zod.parent;if(f&&f!==d){i(f);const h=t.seen.get(f);if(h?.schema.$ref&&(c.$ref=h.schema.$ref,h.def))for(const g in c)g==="$ref"||g==="allOf"||g in h.def&&JSON.stringify(c[g])===JSON.stringify(h.def[g])&&delete c[g]}t.override({zodSchema:o,jsonSchema:c,path:l.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())mm(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const l of t.seen.values())for(const c of[l.schema,l.def]){const u=c?.allOf;if(!Array.isArray(u))continue;const d=o.get(u);d?d.push(c):o.set(u,[c])}for(const l of t.intersections)for(const c of o.get(l)??[])pT(c)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}ca(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const l=o[1];l.def&&l.defId&&(l.def.id===l.defId&&delete l.def.id,Or(a,l.defId,l.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:Qo(e,"input",t.processors),output:Qo(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function un(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return un(i.element,n);if(i.type==="set")return un(i.valueType,n);if(i.type==="lazy")return un(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return un(i.innerType,n);if(i.type==="intersection")return un(i.left,n)||un(i.right,n);if(i.type==="record"||i.type==="map")return un(i.keyType,n)||un(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:un(i.in,n)||un(i.out,n);if(i.type==="object"){for(const r in i.shape)if(un(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(un(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(un(r,n))return!0;return!!(i.rest&&un(i.rest,n))}return!1}const mT=(t,e={})=>n=>{const i=hm({...n,processors:e});return Jt(t,i),pm(i,t),_m(i,t)},Qo=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=hm({...r??{},target:s,io:e,processors:n});return Jt(t,a),pm(a,t),_m(a,t)},_s=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},vs=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},Kf=(t,e)=>{_s(t,"minimum",e),vs(t,"maximum",e)},vm=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},xm=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},ym=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},bm=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},Jf=(t,e)=>_s(t,"minimum",e.minimum),Qf=(t,e)=>vs(t,"maximum",e.maximum),eh=t=>(e,n)=>{bm(e,n.format);const[i,r]=t[n.format];_s(e,"minimum",i),vs(e,"maximum",r)},gT={greater_than:(t,e)=>_s(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>vs(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>vm(t,e.value),number_format:eh($p),bigint_format:eh(US),min_length:Jf,max_length:Qf,length_equals:(t,e)=>Kf(t,e.length),min_size:Jf,max_size:Qf,size_equals:(t,e)=>Kf(t,e.size),string_format:(t,e)=>{bm(t,e.format),e.pattern&&xm(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>ym(t,e.mime)};function si(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)gT[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&_s(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&_s(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&vs(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&vs(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&vm(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&ym(e,r.mime);for(const s of r.patterns??[])xm(e,s);return e}const _T={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},vT=new Map([[im,OM],[Wu,FM]]),xT=t=>vT.get(t)??t,yT=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:l,contentEncoding:c,laxFormat:u}=si(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=_T[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),c&&(r.contentEncoding=c),l&&l.size>0){const d=[...l].map(xT);d.length===1?r.pattern=d[0].source:d.length>1&&(r.allOf=[...d.map(f=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:f.source}))])}},bT=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:l,exclusiveMinimum:c,isInt:u}=si(t);r.type=u?"integer":"number";const d=typeof c=="number"&&c>=(s??Number.NEGATIVE_INFINITY),f=typeof l=="number"&&l<=(a??Number.POSITIVE_INFINITY),h=e.target==="draft-04"||e.target==="openapi-3.0";if(d?h?(r.minimum=c,r.exclusiveMinimum=!0):r.exclusiveMinimum=c:typeof s=="number"&&(r.minimum=s),f?h?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const m of o)Number.isFinite(m)&&m!==0?g.add(Math.abs(m)):Cs(t,e,r,i,`A multipleOf divisor of ${m} cannot be represented in JSON Schema`);const[v,...p]=g;v!==void 0&&(r.multipleOf=v),p.length&&(r.allOf=[...r.allOf??[],...p.map(m=>({multipleOf:m}))])}},ST=(t,e,n,i)=>{n.type="boolean"},MT=(t,e,n,i)=>{n.not={}},ET=(t,e,n,i)=>{},wT=(t,e,n,i)=>{const r=t._zod.def,s=Jc(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},TT=(t,e,n,i)=>{Cs(t,e,n,i,"Custom types cannot be represented in JSON Schema")},AT=(t,e,n,i)=>{Cs(t,e,n,i,"Transforms cannot be represented in JSON Schema")},RT=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=si(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=Jt(s.element,e,{...i,path:[...i.path,"items"]})};function su(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?su(e.out):e.type==="catch"?su(e.innerType):t._zod.optin}const CT=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&Cs(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const c in a)Or(r.properties,c,Jt(a[c],e,{...i,path:[...i.path,"properties",c]}));const l=[];for(const c of Object.keys(a)){const u=s.shape[c];(e.io==="input"?su(u)===void 0:u._zod.optout===void 0)&&l.push(c)}l.length>0&&(r.required=l),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=Jt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},PT=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,l)=>Jt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",l]}));s?n.oneOf=a:n.anyOf=a},IT=(t,e,n,i)=>{const r=t._zod.def,s=Jt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=Jt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=c=>"allOf"in c&&Object.keys(c).length===1,l=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=l,e.intersections.push(l)},LT=(t,e,n,i)=>{const r=t._zod.def,s=Jt(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},NT=(t,e,n,i)=>{const r=t._zod.def;Jt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Xu=Symbol();function Sm(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,l)=>typeof l!="bigint"?l:(s=!0,null));return s?(Cs(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),Xu):JSON.parse(a)}const DT=(t,e,n,i)=>{const r=t._zod.def;Jt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=Sm(r.defaultValue,t,e,n,i);a!==Xu&&(n.default=a)},UT=(t,e,n,i)=>{const r=t._zod.def;Jt(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=Sm(r.defaultValue,t,e,n,i);a!==Xu&&(n._prefault=a)},OT=(t,e,n,i)=>{const r=t._zod.def;Jt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{Cs(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},FT=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;Jt(a,e,i);const o=e.seen.get(t);o.ref=a},kT=(t,e,n,i)=>{const r=t._zod.def;Jt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},Mm=(t,e,n,i)=>{const r=t._zod.def;Jt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},th=new WeakSet([Object.prototype,Error.prototype]);function ho(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const zT=(t,e)=>{iM.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);th.has(n)||(th.add(n),ho(n,"format",i=>r=>aM(i,r)),ho(n,"flatten",i=>r=>sM(i,r)),ho(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,Qc,2)}),ho(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,Qc,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},$n=ce("ZodError",zT,void 0,{Parent:Error}),BT=zu($n),$T=Bu($n),HT=$u($n),GT=Hu($n),VT=fM($n),WT=hM($n),XT=pM($n),ZT=mM($n),qT=gM($n),YT=_M($n),jT=vM($n),KT=xM($n);function JT(){ui.localeError||tr(vw())}function Zu(){ui.memoizer||tr({memoizer:mw()})}const It=ce("ZodType",(t,e)=>(JT(),Pt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(Ln(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return er(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(Y1(t,e))},superRefine(t,e){return this.check(j1(t,e))},overwrite(t){return this.check(Rs(t))},optional(){return rh(this)},exactOptional(){return O1(this)},nullable(){return sh(this)},nullish(){return rh(sh(this))},nonoptional(t){return H1(this,t)},array(){return rs(this)},or(t){return I1([this,t])},and(t){return N1(this,t)},transform(t){return ah(this,U1(t))},default(t){return z1(this,t)},prefault(t){return $1(this,t)},catch(t){return V1(this,t)},pipe(t){return ah(this,t)},readonly(){return Z1(this)},describe(t){const e=this.clone();return ta.add(e,{description:t}),e},meta(...t){if(t.length===0)return ta.get(this);const e=this.clone();return ta.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return Vp(this,"~standard",{...Jp(this),jsonSchema:{input:Qo(this,"input"),output:Qo(this,"output")}})},set"~standard"(t){Ki(this,"~standard",t)},parse:function t(e,n){return BT(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await $T(this,e,n,{callee:t})},safeParse(t,e){return HT(this,t,e)},async safeParseAsync(t,e){return GT(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){Ki(this,"spa",t)},validate(t,e){return cM(this,t,e)},validateAsync(t,e){return dM(this,t,e)},encode:function t(e,n){return VT(this,e,n,{callee:t})},decode:function t(e,n){return WT(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await XT(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await ZT(this,e,n,{callee:t})},safeEncode(t,e){return qT(this,t,e)},safeDecode(t,e){return YT(this,t,e)},async safeEncodeAsync(t,e){return jT(this,t,e)},async safeDecodeAsync(t,e){return KT(this,t,e)},toJSONSchema(t){return mT(this,{})(t)},get description(){return ta.get(this)?.description},get _def(){return this._zod.def}}),Em=ce("_ZodString",(t,e)=>{Vu.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>yT(t,n,i)},Wp({format:t=>si(t).format??null,minLength:t=>si(t).minimum??null,maxLength:t=>si(t).maximum??null},{regex(...t){return this.check(Qw(...t))},includes(...t){return this.check(nT(...t))},startsWith(...t){return this.check(iT(...t))},endsWith(...t){return this.check(rT(...t))},min(...t){return this.check(Jo(...t))},max(...t){return this.check(dm(...t))},length(...t){return this.check(fm(...t))},nonempty(...t){return this.check(Jo(1,...t))},lowercase(t){return this.check(eT(t))},uppercase(t){return this.check(tT(t))},trim(){return this.check(aT())},normalize(...t){return this.check(sT(...t))},toLowerCase(){return this.check(oT())},toUpperCase(){return this.check(lT())},slugify(){return this.check(cT())}})),QT=ce("ZodString",(t,e)=>{Vu.init(t,e),Em.init(t,e)},{email(t){return this.check(Sw(r1,t))},url(t){return this.check(Rw(a1,t))},jwt(t){return this.check(Gw(b1,t))},emoji(t){return this.check(Cw(o1,t))},guid(t){return this.check(Mw(s1,t))},uuid(t){return this.check(Ew(po,t))},uuidv4(t){return this.check(ww(po,t))},uuidv6(t){return this.check(Tw(po,t))},uuidv7(t){return this.check(Aw(po,t))},nanoid(t){return this.check(Pw(l1,t))},cuid(t){return this.check(Iw(c1,t))},cuid2(t){return this.check(Lw(u1,t))},ulid(t){return this.check(Nw(d1,t))},base64(t){return this.check(Bw(v1,t))},base64url(t){return this.check($w(x1,t))},xid(t){return this.check(Dw(f1,t))},ksuid(t){return this.check(Uw(h1,t))},ipv4(t){return this.check(Ow(p1,t))},ipv6(t){return this.check(Fw(m1,t))},cidrv4(t){return this.check(kw(g1,t))},cidrv6(t){return this.check(zw(_1,t))},e164(t){return this.check(Hw(y1,t))},datetime(t){return this.check(Vw(e1,t))},date(t){return this.check(Ww(t1,t))},time(t){return this.check(Xw(n1,t))},duration(t){return this.check(Zw(i1,t))}});function je(t){return bw(QT,t)}const Tt=ce("ZodStringFormat",(t,e)=>{St.init(t,e),Em.init(t,e)}),e1=ce("ZodISODateTime",(t,e)=>{TE.init(t,e),Tt.init(t,e)}),t1=ce("ZodISODate",(t,e)=>{AE.init(t,e),Tt.init(t,e)}),n1=ce("ZodISOTime",(t,e)=>{RE.init(t,e),Tt.init(t,e)}),i1=ce("ZodISODuration",(t,e)=>{CE.init(t,e),Tt.init(t,e)}),r1=ce("ZodEmail",(t,e)=>{fE.init(t,e),Tt.init(t,e)}),s1=ce("ZodGUID",(t,e)=>{uE.init(t,e),Tt.init(t,e)}),po=ce("ZodUUID",(t,e)=>{dE.init(t,e),Tt.init(t,e)}),a1=ce("ZodURL",(t,e)=>{vE.init(t,e),Tt.init(t,e)}),o1=ce("ZodEmoji",(t,e)=>{xE.init(t,e),Tt.init(t,e)}),l1=ce("ZodNanoID",(t,e)=>{yE.init(t,e),Tt.init(t,e)}),c1=ce("ZodCUID",(t,e)=>{bE.init(t,e),Tt.init(t,e)}),u1=ce("ZodCUID2",(t,e)=>{SE.init(t,e),Tt.init(t,e)}),d1=ce("ZodULID",(t,e)=>{ME.init(t,e),Tt.init(t,e)}),f1=ce("ZodXID",(t,e)=>{EE.init(t,e),Tt.init(t,e)}),h1=ce("ZodKSUID",(t,e)=>{wE.init(t,e),Tt.init(t,e)}),p1=ce("ZodIPv4",(t,e)=>{PE.init(t,e),Tt.init(t,e)}),m1=ce("ZodIPv6",(t,e)=>{LE.init(t,e),Tt.init(t,e)}),g1=ce("ZodCIDRv4",(t,e)=>{NE.init(t,e),Tt.init(t,e)}),_1=ce("ZodCIDRv6",(t,e)=>{UE.init(t,e),Tt.init(t,e)}),v1=ce("ZodBase64",(t,e)=>{OE.init(t,e),Tt.init(t,e)}),x1=ce("ZodBase64URL",(t,e)=>{kE.init(t,e),Tt.init(t,e)}),y1=ce("ZodE164",(t,e)=>{zE.init(t,e),Tt.init(t,e)}),b1=ce("ZodJWT",(t,e)=>{$E.init(t,e),Tt.init(t,e)}),wm=ce("ZodNumber",(t,e)=>{rm.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>bT(t,n,i,r),t.isFinite=!0},Wp({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=si(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=si(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=si(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>si(t).format??null},{gt(t,e){return this.check(Xf(t,e))},gte(t,e){return this.check(tc(t,e))},min(t,e){return this.check(tc(t,e))},lt(t,e){return this.check(Wf(t,e))},lte(t,e){return this.check(ec(t,e))},max(t,e){return this.check(ec(t,e))},int(t){return this.check(nh(t))},safe(t){return this.check(nh(t))},positive(t){return this.check(Xf(0,t))},nonnegative(t){return this.check(tc(0,t))},negative(t){return this.check(Wf(0,t))},nonpositive(t){return this.check(ec(0,t))},multipleOf(t,e){return this.check(Zf(t,e))},step(t,e){return this.check(Zf(t,e))},finite(){return this}}));function Ot(t){return qw(wm,t)}const S1=ce("ZodNumberFormat",(t,e)=>{HE.init(t,e),wm.init(t,e)});function nh(t){return Yw(S1,t)}const M1=ce("ZodBoolean",(t,e)=>{GE.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ST(t,n,i)});function E1(t){return jw(M1,t)}const w1=ce("ZodUnknown",(t,e)=>{VE.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ET()});function ih(){return Kw(w1)}const T1=ce("ZodNever",(t,e)=>{WE.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>MT(t,n,i)});function A1(t){return Jw(T1,t)}const R1=ce("ZodArray",(t,e)=>{Zu(),qE.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>RT(t,n,i,r),t.element=e.element},{min(t,e){return this.check(Jo(t,e))},nonempty(t){return this.check(Jo(1,t))},max(t,e){return this.check(dm(t,e))},length(t,e){return this.check(fm(t,e))},unwrap(){return this.element}});function rs(t,e){return uT(R1,t,e)}const C1=ce("ZodObject",(t,e)=>{Zu(),KE.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>CT(t,n,i,r),YS(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return xr(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(Ln(this._zod.def,{catchall:t}))},passthrough(){return this.clone(Ln(this._zod.def,{catchall:ih()}))},loose(){return this.clone(Ln(this._zod.def,{catchall:ih()}))},strict(){return this.clone(Ln(this._zod.def,{catchall:A1()}))},strip(){return this.clone(Ln(this._zod.def,{catchall:void 0}))},extend(t){return kS(this,t)},safeExtend(t){return zS(this,t)},merge(t){return BS(this,t)},pick(t){return OS(this,t)},omit(t){return FS(this,t)},partial(...t){return Af(Tm,this,t[0])},exactPartial(...t){return Af(Am,this,t[0],"exactPartial")},required(...t){return $S(Rm,this,t[0])}});function ei(t,e){const n={type:"object",shape:t??{},...Fe(e)};return new C1(n)}const P1=ce("ZodUnion",(t,e)=>{JE.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>PT(t,n,i,r),t.options=e.options});function I1(t,e){return new P1({type:"union",options:t,...Fe(e)})}const L1=ce("ZodIntersection",(t,e)=>{QE.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>IT(t,n,i,r)});function N1(t,e){return new L1({type:"intersection",left:t,right:e})}const au=ce("ZodEnum",(t,e)=>{ew.init(t,e),It.init(t,e),t._zod.processJSONSchema=(i,r,s)=>wT(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new au({...e,checks:[],...Fe(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new au({...e,checks:[],...Fe(r),entries:s})}});function xr(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new au({type:"enum",entries:n,...Fe(e)})}const D1=ce("ZodTransform",(t,e)=>{Zu(),tw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>AT(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new Xp(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(ya(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(ya(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function U1(t){return new D1({type:"transform",transform:t})}const Tm=ce("ZodOptional",(t,e)=>{om.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Mm(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function rh(t){return new Tm({type:"optional",innerType:t})}const Am=ce("ZodExactOptional",(t,e)=>{nw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Mm(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function O1(t){return new Am({type:"optional",innerType:t})}const F1=ce("ZodNullable",(t,e)=>{iw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>LT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function sh(t){return new F1({type:"nullable",innerType:t})}const k1=ce("ZodDefault",(t,e)=>{rw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>DT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function z1(t,e){return new k1({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():zp(e)}})}const B1=ce("ZodPrefault",(t,e)=>{sw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>UT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function $1(t,e){return new B1({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():zp(e)}})}const Rm=ce("ZodNonOptional",(t,e)=>{aw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>NT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function H1(t,e){return new Rm({type:"nonoptional",innerType:t,...Fe(e)})}const G1=ce("ZodCatch",(t,e)=>{ow.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>OT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function V1(t,e){return new G1({type:"catch",innerType:t,catchValue:typeof e=="function"?e:KS(e)})}const W1=ce("ZodPipe",(t,e)=>{lw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>FT(t,n,i,r),t.in=e.in,t.out=e.out});function ah(t,e){return new W1({type:"pipe",in:t,out:e})}const X1=ce("ZodReadonly",(t,e)=>{cw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>kT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Z1(t){return new X1({type:"readonly",innerType:t})}const q1=ce("ZodCustom",(t,e)=>{uw.init(t,e),It.init(t,e),t._zod.processJSONSchema=(n,i,r)=>TT(t,n,i,r)});function Y1(t,e={}){return dT(q1,t,e)}function j1(t,e){return fT(t,e)}const K1=ei({id:je(),name:je(),role:je(),state:xr(["idle","thinking","working","reviewing"]),stationId:xr(["culture","analyzer","explorer","notebook"]),boredom:Ot().min(0).max(100).nullable(),boredomSpectrum:ei({position:Ot().min(0).max(1),color:je(),regime:je()}).optional()}),J1=ei({field:je().nullable(),question:je(),test:je().nullable(),rho:Ot().nullable(),p:Ot().nullable(),n:Ot().nullable(),replicated:E1(),rejected:je().nullable(),error:je().nullable()});ei({runId:je(),lastSequence:Ot().int().nonnegative(),status:xr(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:Ot(),title:je().optional(),config:ei({mode:xr(["tinker_modal","recorded"]),arm:xr(["A","B","C","D","full"]),rounds:Ot(),task:je().optional(),seed:Ot().nullable(),model:je().nullable()}),sourceCommit:je(),progress:Ot().min(0).max(1),round:Ot(),boredom:Ot(),regime:je(),value:Ot().nullable(),reference:Ot().nullable(),agents:rs(K1),findings:rs(ei({agent:je().optional(),role:je(),message:je(),round:Ot().optional(),memoryId:je().optional()})),results:rs(ei({agent:je(),round:Ot(),kind:je(),status:je(),value:Ot().nullable(),commit:je().nullable().optional(),description:je(),sources:rs(je()).optional(),effectSize:Ot().nullable().optional(),pValue:Ot().nullable().optional(),reward:Ot().nullable().optional(),study:J1.nullable().optional()})),sources:rs(ei({id:je().nullable(),title:je().nullable(),url:je().nullable(),query_id:je().nullable()})),error:je().nullable(),metric:ei({name:je(),unit:je(),direction:xr(["minimize","maximize"])}),provenance:ei({llm:je(),gpu:je(),exa:je(),memory:je(),execution:je().optional()})});async function el(t,e){{const n=Dp(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const nc=(t,e)=>t.filter(e).at(-1),xs=(t,e)=>t.filter(n=>n.tick<=e),_e=t=>typeof t=="string"&&t.trim()?t.trim():null,bt=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Ci=t=>typeof t=="boolean"?t:null;function ba(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const ou=t=>new Map(t.map(e=>[String(e.id),e]));function oh(t){const e=_e(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:_e(n.idea)||_e(n.text)||e}:{text:e}}catch{return{text:e}}}function Sa(t,e,n){if(!t)return null;const i=xs(t.events,n).filter(b=>b.refs?.experiment_id===e);if(!i.length)return null;const r=ou(ba(t,"experiments")).get(e)||{},s=i.find(b=>b.type==="experiment.started"),a=nc(i,b=>b.type==="experiment.finished"),o=nc(i,b=>b.type==="gate.checked"),l=nc(i,b=>b.type==="verdict.issued"),c=i.find(b=>b.refs?.study_id),u=_e(r.hypothesis_id)||_e(s?.refs?.hypothesis_id),d=u?xs(t.events,n).find(b=>b.type==="hypothesis.proposed"&&b.refs?.hypothesis_id===u):void 0,f=d?ou(ba(t,"hypotheses")).get(u)||{}:null,h=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(h.reasons)&&h.reasons.length>0||typeof h.pass=="boolean"||bt(h.attempts)>0,v=o?.payload||{},p=[...Array.isArray(v.reasons)?v.reasons:[],...a&&Array.isArray(h.reasons)?h.reasons:[]].map(String),m=t.events.some(b=>b.type==="verdict.issued"&&b.refs?.experiment_id===e),_=l||a&&!m?r.verdict:null,M=l?.payload||{};return{id:e,agentId:_e(r.agent_id)||s?.agentId||i[0].agentId||null,round:bt(r.round)??bt(i[0].round),kind:_e(r.kind),commit:_e(r.commit)||_e(v.candidate_commit),role:_e(r.role)||_e(s?.payload?.role),description:_e(r.description)||_e(s?.payload?.description)||_e(s?.message),idea:f?{text:oh(f.text||d?.payload?.text).text,rationale:_e(f.rationale)||_e(d?.payload?.rationale)||_e(oh(f.text||d?.payload?.text).rationale),predictedDelta:bt(f.predicted_delta)??bt(r.predicted_delta),sources:(Array.isArray(f.source_ids)?f.source_ids:[]).map(String)}:null,descriptor:r.descriptor||v.descriptor||null,gate:o||a&&g?{pass:Ci(v.pass)??Ci(h.pass),reasons:[...new Set(p)],attempts:bt(h.attempts),text:_e(v.text)||_e(o?.message),priorArt:(Array.isArray(v.prior_art)?v.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:_e(a.payload?.status)||_e(r.status),metric:bt(a.payload?.metric_value)??bt(r.metric_value),reward:bt(a.payload?.reward),text:_e(a.payload?.text)||_e(a.message),tick:a.tick}:null,verdict:l||_?{by:_e(_?.by_agent_id)||l?.agentId||null,verdict:_e(M.verdict)||_e(_?.verdict),why:_e(M.why)||_e(_?.why),tick:l?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([b,T])=>typeof T=="string"&&(a||b==="diff"))),logTail:a?_e(r.log_tail):null,studyId:_e(r.study_id)||_e(c?.refs?.study_id),timeline:i.map(b=>({tick:b.tick,type:b.type,text:_e(b.payload?.text)||_e(b.message)||b.type}))}}function Q1(t,e){return[...new Set(xs(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function qu(t,e){if(!t)return[];const n=xs(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(Q1(t,e)),s=ba(t,"experiments").filter(a=>r.has(String(a.id)));return ba(t,"sources").flatMap(a=>{const o=String(a.id),l=i.get(o),c=bt(a.tick);if(!l&&(c==null||c>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(_e).filter(Boolean):[],d=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(f=>r.has(f)),...s.filter(f=>Array.isArray(f.source_ids)&&f.source_ids.includes(o)).map(f=>String(f.id))])];return[{id:o,title:_e(a.title)||_e(l?.payload?.summary)||_e(a.url)||o,url:_e(a.url)||_e(l?.payload?.url),highlight:u[0]||_e(a.highlight)||_e(a.extract)||_e(l?.payload?.text),agentId:_e(a.agent_id)||l?.agentId||null,tick:l?.tick??c,citedBy:d}]})}const eA=t=>Array.isArray(t)?t.map(e=>({rho:bt(e?.rho),p:bt(e?.p),n:bt(e?.n),problem:e?.problem})):[],lh=t=>({rho:bt(t.rho),p:bt(t.p),n:bt(t.n),halves:eA(t.halves),significant:Ci(t.significant),replicated:Ci(t.replicated),confirmed:Ci(t.confirmed)});function lu(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(lu);if(typeof t=="object"){const e=t,n=_e(e.text)||_e(e.why)||_e(e.reason)||_e(e.verdict);return n?[[_e(e.by)||_e(e.judge)||_e(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>lu(r).map(s=>`${i}: ${s}`))}return[String(t)]}function ch(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Ci(e.available)??!0,score:bt(e.score),rejected:Ci(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const l=o&&typeof o=="object"?o:{};return[a,{laugh:bt(l.laugh),think:bt(l.think),reason:_e(l.reason),model:_e(l.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:_e(a.title)||"",url:_e(a.url)||"",snippet:_e(a.snippet)||""})),priorWorkAvailable:Ci(e.prior_work_available)??!1}}function Ps(t,e){if(!t)return[];const n=xs(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=ou(ba(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),l=i.get(o)||{},c=s.payload||{};if(s.type==="study.registered"){const d=l.dataset&&typeof l.dataset=="object"?l.dataset:{};r.set(o,{id:o,agentId:_e(l.agent_id)||s.agentId||null,experimentId:_e(l.experiment_id)||_e(s.refs?.experiment_id),round:bt(l.round)??bt(s.round),field:_e(c.field)||_e(l.field),direction:_e(l.direction),question:_e(c.question)||_e(l.question),hypothesis:_e(l.hypothesis),mechanism:_e(l.mechanism),dataset:{url:_e(d.url),x:_e(c.x)||_e(d.x),y:_e(c.y)||_e(d.y),xLevel:_e(d.x_level),yLevel:_e(d.y_level),id:_e(l.dataset_id)},predictedRho:bt(c.predicted_rho)??bt(l.predicted_rho),citations:(Array.isArray(l.citations)?l.citations:[]).map(String),novelty:bt(l.novelty),priorArtPass:Ci(l.prior_art_pass),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...lh({...l,...c,halves:c.halves??l.halves,significant:c.significant??l.significant}),headline:_e(c.headline)||_e(l.headline),rejected:_e(c.rejected),text:_e(c.text)||_e(s.message)},u.committee=ch(c.committee??l.committee)):s.type==="study.replicated"?u.replications.push(lh(c)):s.type==="award.issued"&&(u.award={award:_e(c.award),score:bt(c.score),rejected:_e(c.rejected),headline:_e(c.headline),verdicts:lu(c.verdicts??l.committee?.verdicts),text:_e(c.text)||_e(s.message)},u.committee=ch(c)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function Cm(t,e,n,i=40){return xs(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:_e(s.kind),text:_e(s.text)||_e(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const tA=(t,e=3)=>t==null?"—":(t>0?"+":"")+t.toFixed(e),tl=t=>t==null?"—":t<1e-300?"<1e-300":String(Number(t.toPrecision(2))),uh={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},ic=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function Mr(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const zi=t=>typeof t=="string"?t.trim():"";function Pm(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},l=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const c=zi(o.regime);if(!c)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",d=s.get(u);s.set(u,c),l&&d!==c&&uh[c]&&r.push({tick:a.tick,kind:"regime",title:uh[c],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(l)if(a.type==="discovery.made"){const c=ic(o.metric_value),u=ic(o.previous_best),d=zi(o.title),f=c==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${Mr(c)}${u==null?"":` (was ${Mr(u)})`}`,h=ic(o.reward);r.push({tick:a.tick,kind:"best",title:c==null?"New discovery!":"New best!",detail:[f||(h==null?"":`reward ${Mr(h)}`),d].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:zi(o.award)||zi(o.prize)||"Award issued",detail:[zi(o.title)||zi(o.headline),zi(o.citation)||zi(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function nA(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}const iA=/\b(?:402|credit|billing|payment|quota)\b/i;function Im(t,e){const n=i=>typeof i=="string"&&iA.test(i.replace(/https?:\/\/\S+/gi," "));return Array.isArray(t.publish_errors)&&t.publish_errors.some(i=>n(i.kind)||n(i.message))?!0:(e?.events||[]).some(i=>(i.type==="run.finished"||i.type==="run.stopped")&&(n(i.message)||["text","error","reason","detail","message"].some(r=>n(i.payload?.[r]))))}function rA(t){const e=t.provenance?.command,i=(Array.isArray(e)?e.join(" "):typeof e=="string"?e:"").match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1],r=Number(i);return Number.isFinite(r)&&r>0?r:void 0}function sA(t,e){const n=(e?.events||[]).flatMap(o=>[o.round,o.payload?.round]).filter(o=>typeof o=="number"&&Number.isFinite(o)),i=Math.max(t.time?.rounds||0,...n),r=t.requestedRounds||t.requested_rounds||t.rounds||t.run?.rounds||rA(t),s=i?` (${i}${r?`/${r}`:""} rounds)`:"",a=Im(t,e)?" · Tinker credit ran out":"";return`Stopped real run${s}${a}`}function Yu(t,e){const n=t?.provenance,i=[];if(n?.exa==="off"?i.push("Exa off"):(n?.exa==="live"||n?.exa==="on")&&i.push("Exa on"),n?.memory_backend==="pastdev"?i.push("past.dev memory"):n?.memory_backend==="local"&&i.push("local memory"),n?.llm==="fake"||n?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:i};const r=typeof n?.llm=="string"&&n.llm!=="fake"?nA(n.llm):"";return r?t?.status==="stopped"?{label:sA(t,e),tone:"stopped",chips:i}:t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:i}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${r} run`,tone:"live",chips:i}:{label:"Finished real run",tone:"finished",chips:i}:{label:"Unverified recording",tone:"unknown",chips:i}}const aA="f8fa53cc-6afd-5e98-9596-0c7b8711e718";function oA(t,e){return t.find(n=>n.id===e)?.id||t.find(n=>n.id===aA)?.id||t[0]?.id}function lA(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function cA(t){return t.sample===!1&&t.status==="stopped"?{eyebrow:"RESEARCH / SWARM RUN",kicker:"● SWARM RUN · STOPPED",callout:"Swarm run · stopped. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${pA(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function uA(t,e){return!!t.live||e<t.totalTicks}function Pa(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function dA(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function fA(t,e){return t.filter(n=>n.tick<=e)}function hA(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const pA=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function mA(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}const dh=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function gA(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const l=[...n[a]||[]],c=new Map(l.map((u,d)=>[dh(u),d]));for(const u of o){const d=c.get(dh(u));d===void 0?l.push(u):l[d]=u}n[a]=l}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,..."igjudge"in e?{igjudge:e.igjudge}:{},manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function _A(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return gA(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const vA={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel Prize hunt"};function fh(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function Lm(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function ju(t){return t.task_title||vA[Lm(t)]||t.title}function Nm(t,e){return!0}function Dm(t){return t?.direction==="minimize"?"Loss":t?.name?t.name.replaceAll("_"," ").replace(/^./,e=>e.toUpperCase()):"Metric"}function xA(t,e,n,i){return typeof t=="number"&&Number.isFinite(t)?`${n} ${i(t)}`:t===null&&typeof e=="number"&&Number.isFinite(e)?`Reward ${i(e)}`:""}function yA(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};if(t.status==="stopped")return{status:"stopped",label:"STOPPED",detail:"The run ended before finishing"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${fh(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${fh(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function bA(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function SA(t){const e=yA(t),n=t.sample===!1?mA({...t,stale:e.status==="stale",live:e.status==="live"}):"",i=ju(t),r=i===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[n+i,r,t.sample===!1&&e.status==="stopped"?e.label.toLowerCase():"",t.sample===!1?bA(t):""].filter(Boolean).join(" · ")}function MA(t,e){const n=[["Live now",t.filter(r=>r.sample===!1&&r.live)],["Swarm runs",t.filter(r=>r.sample===!1&&!r.live)],["Recorded samples",t.filter(r=>r.sample!==!1)]],i=r=>`<option value="${e(r.id)}">${e(SA(r))}</option>`;return n.filter(([,r])=>r.length).map(([r,s])=>`<optgroup label="${r}">${s.map(i).join("")}</optgroup>`).join("")}const ua=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:null,Um=t=>Array.isArray(t)?t.filter(e=>!!ua(e)):ua(t)?Object.values(t).filter(e=>!!ua(e)):[],EA="Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.";function ys(t,e){const n=t?.metric?.description||"";return!!t&&(Lm(t)==="ignobel"||t.metric?.name==="replicated_findings"||/replicated and significant/i.test(n)||Um(e?.entities?.studies).length>0)}function Ma(t,e){return ys(t,e)?!Um(e?.entities?.studies).some(i=>i.committee!=null||ua(i.result)?.committee!=null||ua(i.graded)?.committee!=null)&&!(e?.events||[]).some(i=>i.type==="award.issued"):!1}function _l(t,e){if(ys(t,e)){if(Ma(t,e))return EA;const n=t?.metric?.description;if(n)return n.replace(/\breplicated\s+and\s+significant\b/gi,"split-half consistent and significant").replace(/\breplicated\b/gi,"passed split-half consistency").replace(/\breplication\b/gi,"split-half consistency")}return t?.proxy_note}const Co={minRho:.1,alpha:.005,splitAlpha:.05},vr=t=>typeof t=="number"&&Number.isFinite(t),rc=t=>vr(t)?t:void 0,mo=t=>String(t);function Ku(t){const e=t&&typeof t=="object"?t:{};return{minRho:rc(e.minRho??e.min_rho??e.min_effect_rho)??Co.minRho,alpha:rc(e.alpha??e.p_alpha??e.significance_alpha)??Co.alpha,splitAlpha:rc(e.splitAlpha??e.split_alpha??e.replication_alpha)??Co.splitAlpha}}function Ju(t,e={}){const n={...Co,...e},i=[],r=t?.rho,s=t?.p,a=t?.direction==="positive"?1:t?.direction==="negative"?-1:vr(r)?Math.sign(r):0,o=t?.halves;return(!vr(r)||r*a<n.minRho)&&i.push(`|ρ| ≥ ${mo(n.minRho)}`),(!vr(s)||s>=n.alpha)&&i.push(`p < ${mo(n.alpha)}`),vr(r)&&o&&o.length>=2&&o.every(c=>{const u=c?.rho,d=c?.p;return vr(u)&&vr(d)&&d<n.splitAlpha&&u*a>=n.minRho&&!c.problem})||i.push(`split-half consistency (both halves p < ${mo(n.splitAlpha)}, same direction, |ρ| ≥ ${mo(n.minRho)})`),{pass:i.length===0,failures:i}}const cu=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],mr=t=>typeof t=="string"?t:"";function wA(t){const e=cu(t?.entities?.sources),n=new Map(e.map(o=>[mr(o.url),o]).filter(([o])=>o)),i=cu(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(l=>{const c=mr(l),u=n.get(c);return{study:mr(o.question)||mr(o.headline)||mr(o.id),url:c,sourceId:u?String(u.id??u.source_id??""):"",title:u?mr(u.title):""}})).sort((o,l)=>+!!l.sourceId-+!!o.sourceId),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(mr(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="search").length,memoryRecalls:s,pastdev:a}}function TA(t){const e=t?.events||[];return{exaSearches:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="search").length,sourceCards:cu(t?.entities?.sources).length,pastdevRecalls:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="recall"&&n.payload?.backend==="pastdev").length,memoryWrites:e.filter(n=>n.type==="memory.written").length}}function uu(t,e=Number.MAX_SAFE_INTEGER){const n=Ps(t,e),i=Pm(t?.events||[],-1,e).filter(l=>l.kind==="award"),r=new Set(n.filter(l=>l.result&&l.result.rejected==null&&l.result.p!=null&&Number.isFinite(l.result.p)).map(l=>l.id)).size,s=n.filter(l=>l.result?.confirmed===!0||l.result?.replicated===!0||l.replications.some(c=>c.confirmed===!0||c.replicated===!0)),a=s.filter(l=>Ju(l.result?{...l.result,direction:l.direction||void 0}:null,Ku(t?.manifest?.judging)).pass).length,o=_l(t?.manifest,t)||"";return{studies:n.length,registered:n.length,ran:r,confirmed:s.length,underCurrentRules:a,passed:s.length,awards:i.map(l=>[l.title,l.detail].filter(Boolean).join(" · ")),proxyNote:o,isIgnobel:ys(t?.manifest,t),preCommittee:Ma(t?.manifest,t)}}function AA(t,e){if(!t)return e||"Dataset";try{const n=new URL(t).pathname.split("/").filter(Boolean),i=n.at(-1),r=i==="content"?n.at(-2):i;return decodeURIComponent(r||e||"Dataset").replace(/\.[^.]+$/,"").replaceAll("_"," ").replaceAll("-"," ")}catch{return e||t}}function Om(t){if(!t)return[];const e=Ku(t.manifest?.judging);return Ps(t,Number.MAX_SAFE_INTEGER).flatMap(n=>{const i=n.result,r=i?.rho;if(!(i?.confirmed===!0||i?.replicated===!0||n.replications.some(o=>o.confirmed===!0||o.replicated===!0))||n.priorArtPass===!1||r==null||Math.abs(r)<.1||!Ju(i?{...i,direction:n.direction||void 0}:null,e).pass)return[];const a=t.manifest.agents?.find(o=>o.agent_id===n.agentId)?.display_name||t.frames.flatMap(o=>o.snapshot.agents||[]).find(o=>o.id===n.agentId)?.name||n.field?.replaceAll("_"," ")||"Research lab";return[{id:n.id,question:n.question||n.hypothesis||n.id,dataset:AA(n.dataset.url,n.dataset.id),rho:r,lab:a}]}).sort((n,i)=>Math.abs(i.rho)-Math.abs(n.rho))}function Fm(t,e=Number.MAX_SAFE_INTEGER){return t?Ps(t,e).flatMap(n=>{const i=n.award?.score??n.committee?.score;if(i==null||!Number.isFinite(i))return[];const r=[...new Set(Object.values(n.committee?.judges||{}).map(s=>s.model).filter(s=>!!s))];return[{id:n.id,headline:n.award?.headline||n.question||n.hypothesis||n.id,score:i,rejected:n.committee?.rejected===!0,award:n.award?.award||null,judgeModels:r}]}).sort((n,i)=>i.score-n.score||n.id.localeCompare(i.id)):[]}function Po(t,e,n){return/^https?:\/\//i.test(t)?`<a href="${n(t)}" target="_blank" rel="noopener noreferrer">${n(e)}</a>`:n(e)}function RA(t,e,n,i=null,r=null){const s=i?.provenance,a=Yu(i,r||void 0),o=t.tools.map(u=>{let d=u.name,f=u.detail,h="";if(u.kind==="llm"){const g=s?.llm==="fake"||s?.llm_mode==="fake",v=typeof s?.llm=="string"?s.llm:"",p=v&&v!=="fake"&&v.split("/").filter(Boolean).at(-1)||"";g?(d=u.fakeName||u.name,f=u.fakeDetail||u.detail,h=u.fakeSuffix||""):p?(d=s?.llm_mode==="tinker"&&u.tinkerName||u.name,f=(s?.llm_mode==="tinker"&&u.tinkerDetail||u.detail).replace(/\{model\}/g,/kimi/i.test(v)?"Kimi":p)):(f=u.unverifiedDetail||u.detail,h=u.unknownSuffix||"")}else u.kind==="exa"?h=s?.exa==="off"?u.offSuffix||"":s?.exa==="live"||s?.exa==="on"?"":u.unknownSuffix||"":u.kind==="memory"&&(h=s?.memory_backend==="pastdev"?"":s?.memory_backend==="local"?u.localSuffix||"":s?.memory_backend==="off"?u.offSuffix||"":u.unknownSuffix||"");return`<li><b>${n(d)}</b> ${n(f)}${h?` <span class="about-provenance-note">${n(h)}</span>`:""}</li>`}).join(""),l=`<div class="provenance-badge about-provenance" data-tone="${a.tone}" role="status" aria-label="${n(a.label)}"><span class="provenance-badge-label">${n(a.label)}</span></div>`,c=e.citations.slice(0,12).map(u=>`<li><span>${n(u.study)}</span> ${u.sourceId?`<button class="chip" data-source="${n(u.sourceId)}">${n(t.labels.source)} ${n(u.title||u.url)}</button>`:`${/^https?:\/\//i.test(u.url)?`<a href="${n(u.url)}" target="_blank" rel="noopener noreferrer">${n(u.url)}</a>`:`<code>${n(u.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join("");return`<button class="drawer-close" data-close-drawer aria-label="Close About">✕</button><div class="eyebrow">${n(t.sections.about)}</div><h2>${n(t.event.title)}</h2>${l}<details class="about-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details><details class="about-section"><summary>${n(t.sections.tools)}</summary><ul class="about-tools">${o}</ul></details><details class="about-section"><summary>${n(t.sections.authors)}</summary>${t.authors.project?`<h3>${n(t.authors.project)}</h3>`:""}${t.authors.team?`<p class="eyebrow">${n(t.authors.team)}</p>`:""}<p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details><details class="about-section"><summary>${n(t.sections.boredom)}</summary><h3>${n(t.boredom.title)}</h3>${t.boredom.paragraphs.map(u=>`<p>${n(u)}</p>`).join("")}<p class="muted">${Po(t.boredom.source,t.boredom.source,n)}</p></details><details class="about-section"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${c?`<ul class="about-cites">${c}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details>`}const km={B:"#e3cba3",S:"#99c6b3",A:"#91a9d1"},hh=t=>String(Number(t.toFixed(3)));function CA(t,e,n){return`<section class="tool-use"><div class="visual-heading"><h2>Tools used in this run</h2></div><div class="tool-use-grid">${[["EXA",e.exaSearches,"searches",""],["EXA",e.sourceCards,"source cards",t.results.charts.sourceCaption],["past.dev",e.pastdevRecalls,"recalls",""],["MEMORY",e.memoryWrites,"memories written",""]].map(([r,s,a,o])=>`<div class="tool-use-tile"><span class="tool-wordmark">${n(r)}</span><strong>${s}</strong><span>${n(a)}</span>${o?`<small>${n(o)}</small>`:""}</div>`).join("")}</div><p class="chart-caption">${n(t.results.charts.toolsCaption)}</p><button class="see-sources" type="button" data-open-evidence>See sources</button></section>`}function ph(t,e,n){const i=Om(e);return`<section class="finalists"><h2>Finalists — awaiting committee judging</h2><div class="finalist-grid">${i.map(r=>`<article class="finalist-card"><h3 title="${n(r.question)}">${n(r.question)}</h3><div class="finalist-meta"><span>${n(r.dataset)}</span><span>Lab · ${n(r.lab)}</span></div><div class="finalist-rho"><svg viewBox="0 0 180 14" role="img" aria-label="Absolute correlation ${Math.abs(r.rho).toFixed(3)}"><rect x="0" y="4" width="170" height="6" rx="3" fill="#ffffff25"/><rect x="0" y="4" width="${Math.max(1,Math.abs(r.rho)*170).toFixed(1)}" height="6" rx="3" fill="#e3cba3"/></svg><span>ρ ${r.rho.toFixed(3)}</span></div></article>`).join("")}</div>${i.length?"":"<p>No studies passed both filters.</p>"}</section>`}function mh(t,e){const n=Fm(t),i=n.length>0&&n.every(r=>r.score<.5);return n.length?`<section class="finalists committee-results"><h2>${i?"Committee verdict: no award":"Committee scores"}</h2><ol class="committee-score-list">${n.map((r,s)=>`<li class="committee-score-row"><div class="committee-score-heading"><span>${s+1}</span><strong>${e(r.headline)}</strong><b>${r.score.toFixed(2)}</b></div><div class="committee-score-track" role="img" aria-label="Committee score ${r.score.toFixed(2)} out of 1"><i style="width:${Math.max(0,Math.min(1,r.score))*100}%"></i></div>${r.judgeModels.length?`<small>Judges · ${r.judgeModels.map(e).join(" · ")}</small>`:""}</li>`).join("")}</ol></section>`:""}function gh(t,e){const n=[["Registered",t.registered],["Tests run",t.ran],["Passed gates",t.confirmed],["Post-hoc floor",t.underCurrentRules]],i=Math.max(1,...n.map(r=>r[1]));return`<svg class="chart-svg" viewBox="0 0 360 126" role="img" aria-label="Ig Nobel study counts">${n.map(([r,s],a)=>{const o=20+a*29,l=Math.max(2,Number(s)/i*164);return`<text x="4" y="${o+4}" class="chart-label">${e(r)}</text><rect x="150" y="${o-7}" width="164" height="13" rx="4" class="chart-track"/><rect x="150" y="${o-7}" width="${l.toFixed(1)}" height="13" rx="4" class="chart-bar"/><text x="320" y="${o+4}" class="chart-value">${s}</text>`}).join("")}</svg>`}function PA(t,e){const{baseline:n,best:i}=t.results.charts.bixbench,r=210,s=112;return`<svg class="chart-svg" viewBox="0 0 380 104" role="img" aria-label="BixBench held-out score with 95 percent confidence intervals">${[{label:"Baseline",score:n,y:30,color:"#99c6b3"},{label:"Swarm best",score:i,y:72,color:"#e3cba3"}].map(({label:o,score:l,y:c,color:u})=>{const d=l.correct/l.total,f=s+l.ci[0]*r,h=s+l.ci[1]*r;return`<text x="4" y="${c+4}" class="chart-label">${e(o)}</text><rect x="${s}" y="${c-7}" width="${r}" height="13" rx="4" class="chart-track"/><rect x="${s}" y="${c-7}" width="${(d*r).toFixed(1)}" height="13" rx="4" fill="${u}"/><line x1="${f}" y1="${c-13}" x2="${h}" y2="${c-13}" class="chart-whisker"/><line x1="${f}" y1="${c-17}" x2="${f}" y2="${c-9}" class="chart-whisker"/><line x1="${h}" y1="${c-17}" x2="${h}" y2="${c-9}" class="chart-whisker"/><text x="328" y="${c+4}" class="chart-value">${l.correct}/${l.total}</text>`}).join("")}</svg>`}function IA(t,e){const{groups:n}=t.results.charts.track3,i=132/.32;return`<svg class="chart-svg" viewBox="0 0 430 164" role="img" aria-label="Track 3 grouped bars: preregistered stopped early, and complete set picked after">${n.map((r,s)=>{const a=s?220:6,o=r.label.includes("(")?r.label.slice(0,r.label.indexOf("(")).trim():r.label,l=r.label.includes("(")?r.label.slice(r.label.indexOf("(")):"";return`<text x="${a}" y="16" class="chart-group">${e(o)}</text><text x="${a}" y="32" class="chart-group">${e(l)}</text>${r.values.map((c,u)=>{const d=58+u*31;return`<text x="${a}" y="${d+3}" class="chart-label">${e(c.arm)}</text><rect x="${a+17}" y="${d-8}" width="132" height="12" rx="4" class="chart-track"/><rect x="${a+17}" y="${d-8}" width="${(c.value*i).toFixed(1)}" height="12" rx="4" fill="${km[c.arm]}"/><text x="${a+155}" y="${d+3}" class="chart-value">${c.value.toFixed(3)}</text>`}).join("")}`}).join("")}</svg>`}function LA(t,e){const{pastdev:n,local:i}=t.results.charts.memory,r=[{label:"Hit@1",a:n.hitAt1,b:i.hitAt1,y:30},{label:"Hit@8",a:n.hitAt8,b:i.hitAt8,y:66}],s=[{label:"past.dev",value:n.medianLatencyMs,color:"#99c6b3"},{label:"Local",value:i.medianLatencyMs,color:"#e3cba3"}],a=r.map(({label:l,a:c,b:u,y:d})=>`<text x="4" y="${d+4}" class="chart-label">${e(l)}</text><text x="60" y="${d-2}" class="chart-mini-label">past.dev</text><rect x="126" y="${d-12}" width="${(c*150).toFixed(1)}" height="10" rx="3" fill="#99c6b3"/><text x="282" y="${d-3}" class="chart-value">${hh(c)}</text><text x="60" y="${d+12}" class="chart-mini-label">Local</text><rect x="126" y="${d+2}" width="${(u*150).toFixed(1)}" height="10" rx="3" fill="#e3cba3"/><text x="282" y="${d+11}" class="chart-value">${hh(u)}</text>`).join(""),o=s.map((l,c)=>{const u=123+c*16;return`<text x="60" y="${u+3}" class="chart-mini-label">${e(l.label)}</text><rect x="126" y="${u-7}" width="${Math.max(2,l.value/600*150).toFixed(1)}" height="10" rx="3" fill="${l.color}"/><text x="282" y="${u+2}" class="chart-value">${l.value} ms</text>`}).join("");return`<svg class="chart-svg" viewBox="0 0 380 158" role="img" aria-label="Past.dev and local memory retrieval comparison">${a}<line x1="4" y1="100" x2="365" y2="100" class="chart-divider"/><text x="4" y="119" class="chart-label">Median latency</text>${o}</svg>`}function NA(t,e,n){const i=Om(e)[0],r=t.results.citations?.find(s=>s.runId===e.manifest.id&&s.studyId===i?.id);return!r||!i?"":`<section class="result-citation" aria-label="Research result in one sentence"><div class="eyebrow">${n(r.category)} · Research citation</div><p class="result-citation-line">${n(r.text)}</p><p class="chart-caption">${n(i.dataset)} · ρ ${i.rho.toFixed(3)}. ${n(r.note)}</p></section>`}function _h(t,e,n,i=uu(e)){if(e.manifest.continuous)return`${mh(e,n)||ph(t,e,n)}<section class="result-chart"><h2>This session's studies</h2>${gh(i,n)}<p>${i.registered} registered · ${i.ran} tested · ${i.confirmed} confirmed</p></section><p class="metric-note">${n(e.manifest.metric?.description||i.proxyNote||t.results.noProxy)}</p>`;const r=t.results.charts,s=TA(e),a=mh(e,n)||ph(t,e,n),o=`<section class="result-chart"><h2>Ig Nobel test funnel</h2>${gh(i,n)}<p class="chart-caption">${n(r.funnelCaption)}</p></section>`,l=`<section class="result-chart"><h2>BixBench held-out</h2>${PA(t,n)}<p class="chart-caption">${n(r.bixbench.caption)}</p></section>`,c=`<section class="result-chart"><h2>Track 3 · three-arm comparison</h2>${IA(t,n)}<div class="chart-legend">${r.track3.legend.map(g=>`<span><i style="background:${km[g.arm]}"></i>${n(g.arm)} = ${n(g.label)}</span>`).join("")}</div><p class="chart-caption">${n(r.track3.caption)}</p></section>`,u=`<section class="result-chart"><h2>Memory retrieval</h2>${LA(t,n)}<p class="chart-caption">${n(r.memory.caption)}</p></section>`,d=r.funnelCaption?t.results.factualLine.replace("{N}",String(i.registered)).replace("{R}",String(i.ran)).replace("{C}",String(i.confirmed)).replace("{K}",String(i.underCurrentRules)).replace("{committeeSuffix}",i.preCommittee?t.results.noCommitteeSuffix:""):"",f=e.manifest.metric?.description||i.proxyNote||t.results.noProxy,h=[Po(t.results.memoryComparisonUrl,"Memory comparison details",n),Po(t.results.track3Url,"Track 3 results and caveats",n),Po(t.results.bixbenchUrl,"BixBench held-out artifact",n)];return`${NA(t,e,n)}${CA(t,s,n)}${a}${o}${l}${c}${u}<details class="results-details"><summary>Details</summary><p>${n(d)}</p><p>${n(t.results.track3Line)}</p><p class="metric-note"><strong>${n(t.results.proxyNote)}:</strong> ${n(f)}</p><ul class="detail-links">${h.map(g=>`<li>${g}</li>`).join("")}</ul></details>`}const DA={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Artificial Scientist Swarms (ASS) prevents research agents from stalling by giving them a deterministic boredom meter grounded in psychology. Unlike standard agents that endlessly loop on diminishing returns, our swarm tracks stagnation, novelty deficit, and overload to trigger a seeking state—forcing a jump from routine exploitation to paradigm breakout. Validated on known benchmarks before tackling an Ig Nobel Prize hunt, agents search via Exa, share an experiment ledger on past.dev, and pre-register tests on real public data before a two-judge committee and final IgJudge select the winner."},UA=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],OA={project:"Ig Nobel Prize Winning ASS (Artificial Scientist Swarms)",team:"Team caffeinated",names:["Ariel Anders","Jialin Feng","Neeraj Shah","Masha Baidachna"]},FA={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},kA={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa"},zA={source:"Exa result:",missingExa:"results not kept as source cards",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},BA={citations:[{runId:"50bbe2bb-0a86-50d9-9ef8-be8aa5fa3929",studyId:"study:14",category:"Transport",text:"Kitchen Physics Lab — for confirming that heavier cars get fewer city miles per gallon.",note:"Strongest absolute correlation among eligible studies; not a prize award."}],proxyNote:"Metric / proxy",noProxy:"No proxy note is present in this recording.",studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"Prizes awarded: {N}",awardFallback:"Award issued",creditErrorSuffix:" (Tinker credit ran out)",noAwards:"No prizes awarded yet — this run stopped before committee judging.",factualLine:"Real result so far: {C} of {R} tests that ran passed their preregistered gates; {K} also pass the |ρ| ≥ 0.1 floor added after the run ({N} registered){committeeSuffix}",noCommitteeSuffix:"; no committee score yet",countLine:"{N} registered · {M} confirmed ({K} under the post-hoc |ρ| ≥ 0.1 floor)",track3Line:"Track 3 check (exploratory, 3 runs each): preregistered primary (guard2, stopped early, guarded) B 0.26 > S 0.24 > A 0.11; complete strict-guard set, picked after it finished, S 0.30 > A 0.09 > B 0.06. B leads S on mean only because S scored 0 on run 3001, where the guard rejected its candidate for the known integer-loop-bound false positive (unguarded 0.333); S beats B on the other two runs.",memoryComparisonUrl:"https://github.com/arii/caffeinated/blob/agent/devin/overnight/experiments/memory-comparison/README.md",track3Url:"https://github.com/arii/caffeinated/blob/agent/devin/overnight/experiments/confirmatory/RESULTS.md",bixbenchUrl:"https://github.com/arii/caffeinated/blob/agent/devin/overnight/experiments/real-runs/bixbench_mini-v2/held_out_test.json",charts:{toolsCaption:"Live calls recorded in this run (Kimi + Exa + past.dev)",sourceCaption:"Source cards; some papers repeat.",funnelCaption:"Known relationships in teaching datasets, not discoveries.",bixbench:{baseline:{correct:1,total:7,ci:[.03,.51]},best:{correct:6,total:7,ci:[.49,.97]},caption:"7 held-out questions, one run."},track3:{groups:[{label:"Preregistered (stopped early)",values:[{arm:"B",value:.259},{arm:"S",value:.241},{arm:"A",value:.111}]},{label:"Complete set (picked after)",values:[{arm:"S",value:.296},{arm:"A",value:.093},{arm:"B",value:.056}]}],legend:[{arm:"B",label:"boredom swarm"},{arm:"S",label:"single agent"},{arm:"A",label:"meter off"}],caption:"3 runs each — neither ordering is significant."},memory:{pastdev:{hitAt1:.65,hitAt8:.95,medianLatencyMs:562},local:{hitAt1:.3,hitAt8:.825,medianLatencyMs:15},memories:419,probes:40,caption:"419 real memories, 40 hand-written probes."}}},Io={event:DA,tools:UA,authors:OA,boredom:FA,sections:kA,labels:zA,results:BA},$A="How it's judged",HA="Committee data exists, but no prizes were issued in this recording.",GA=["Preregister the study before looking at the data.","Use a real, public dataset.","Pass the gates: |ρ| ≥ 0.1 and p < 0.005.","Pass split-half consistency: both halves p < 0.05 and in the same direction.","Check prior work with Exa.","Two independent non-Kimi judges (gpt-oss-120b and Qwen3.5-397B) score each study; the final score is the lower judge.","Reject any study that targets a group of people."],sc={title:$A,committeePending:HA,steps:GA},VA="/caffeinated/assets/follow-qr-Bv-E2P9c.png",vh={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function WA(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function xh(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const yh={B:"BIO",C:"CHEM",P:"PHYSICS"};function XA(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=WA(t.name);if(vh[n])return{initial:r,familyKey:"S",familyLabel:vh[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:xh(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const c=xh(a);return{initial:r,familyKey:c,familyLabel:yh[c]||a.toUpperCase(),staff:!1,color:i}}const l=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:l,familyLabel:yh[l]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const ZA={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function zm(t){return t?ZA[t]||t.replaceAll("_"," ").toLowerCase():""}function Bm(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const qA={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function $m(t){return qA[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function YA(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function Hm(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!YA(e)}function jA(t,e,n=110){const i=[$m(t.type),e].filter(Boolean).join(" · ");if(!Hm(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i} — ${r.length>n?r.slice(0,n-1)+"…":r}`}function KA(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const Zs=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function Gm(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=Zs(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=Zs(a.mechanism)||i.mechanism,i.method=Zs(a.method)||i.method),i.role=Zs(s.role)||i.role}else r.type==="study.registered"&&(i.field=Zs(s.field)||i.field)}return i}function Vm(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const bh={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function JA(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:bh[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:bh[i]?.[1]||"",names:r}))}function QA(t,e){return e-t<=1}function eR(t){return t.live?t.totalTicks:0}function tR(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function Wm(t,e,n){return!!t?.live&&n&&QA(e,t.totalTicks)}function Xm(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function nR(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(Wm(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=Xm(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function wn(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function iR(t,e,n,i=!0){const r=l=>typeof l=="number"&&Number.isFinite(l)?l:null,s=t.filter(l=>(l.tick??0)<=n).map(l=>({id:l.id,tick:l.tick??0,raw:r(l.value),value:i?r(l.value):null,outcome:wn(l.status,l.kind),agent:l.agent,description:l.description,status:l.status})),a=[],o=[];for(const l of e){if(l.tick>n||l.tick<0)continue;const c=l.snapshot.value;if(c==null||!Number.isFinite(c))continue;const u=a.at(-1);(!u||u[1]!==c)&&(u&&o.push([l.tick,c]),a.push([l.tick,c]))}return{points:s,best:a,newBest:o}}const Qn={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},qs=t=>String(Number(t.toPrecision(4)));function rR(t,e,n,i){const r=[...t.points.map(S=>S.value),...t.best.map(S=>S[1])].filter(S=>S!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,l=52,c=560,u=16,d=132,f=150,h=Math.max(1,n),g=a===s?s-o/2:s,v=a===s?o:a-s,p=S=>l+Math.min(1,S/h)*(c-l),m=S=>d-(S-g)/v*(d-u),_=t.best.map(([S,k],N)=>`${N?"H":"M"}${p(S).toFixed(1)} ${N?`V${m(k).toFixed(1)}`:m(k).toFixed(1)}`).join(""),M=t.best.length?`<path class="best-line" d="${_}H${p(h).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",b=S=>{const k=p(S.tick).toFixed(1),N=`${i(S.agent)} · ${i(S.status)} · ${S.raw==null?"no score":qs(S.raw)} · ${i(S.description)}`,F=`<title>${N}</title>`,B=S.id?` data-experiment="${i(S.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${N}"`:"";if(S.value==null&&S.outcome!=="crashed")return`<circle class="pt ${S.outcome}"${B} cx="${k}" cy="${f}" r="${S.outcome==="discarded"?3.5:4.5}" fill="${S.outcome==="discarded"?"none":Qn[S.outcome]}" stroke="${Qn[S.outcome]}" stroke-width="1.6">${F}</circle>`;if(S.value==null)return`<g class="pt crashed"${B}>${F}<path d="M${+k-4} ${f-4}l8 8m0 -8l-8 8" stroke="${Qn.crashed}" stroke-width="2"/></g>`;const q=m(S.value).toFixed(1);return S.outcome==="crashed"?`<g class="pt crashed"${B}>${F}<path d="M${+k-4} ${+q-4}l8 8m0 -8l-8 8" stroke="${Qn.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${S.outcome}"${B} cx="${k}" cy="${q}" r="${S.outcome==="discarded"?3.5:4.5}" fill="${S.outcome==="discarded"?"none":Qn[S.outcome]}" stroke="${Qn[S.outcome]}" stroke-width="1.6">${F}</circle>`},T=t.newBest.map(([S,k])=>`<path class="new-best" d="M${p(S).toFixed(1)} ${(m(k)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${qs(k)} at tick ${S}</title></path>`).join(""),A=e.direction==="maximize"?"↑ better":"↓ better",x=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${l} ${u-4}V${d+4}H${c}" fill="none" stroke="#79918b"/><text x="${l-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${qs(a)}</text><text x="${l-6}" y="${d}" text-anchor="end" fill="#b9cac2" font-size="9">${qs(s)}</text><text x="${l-6}" y="${f+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(S=>S.value==null&&S.raw!=null)?"other measure":"no score"}</text><path d="M${l} ${f}H${c}" stroke="#ffffff14" stroke-dasharray="3 4"/>${M}${t.points.map(b).join("")}${T}${x?`<text x="${c}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${qs(x[1])}</text>`:""}<text x="${l}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${A}</text><g font-size="9" fill="#b9cac2" transform="translate(${l} 186)"><circle cx="0" cy="-3" r="4" fill="${Qn.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${Qn.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${Qn.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${Qn.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}function Zm(t,e,n,i,r,s){const a=new Map(e.map(o=>[i(o),o]));return t.map(o=>{const l=n(o),c=a.get(l)||r(o);return a.delete(l),s(c,o),c})}function Qu(t){return t.events.find(n=>{if(n.type!=="agent.assigned")return!1;const i=String(n.payload?.role||"").toLowerCase();return!["conductor","critic","host","baseline","environment","world"].includes(i)})?.tick??0}function qm(t,e=0){const n=t.events,i=[{tick:0,label:"Start"}];e>0&&(i[0]={tick:e,label:"Scientists arrive"});const r=(a,o)=>{const l=n.find(c=>c.tick>=e&&o(c));l&&i.push({tick:l.tick,label:a})};r("Boredom shift",a=>["round.started","boredom.measured"].includes(a.type)&&/snap|breakout/i.test(String(a.payload?.regime||""))),r("New best",a=>a.type==="discovery.made"),r("Confirmed study",a=>a.type==="study.result"&&(a.payload?.confirmed===!0||a.payload?.replicated===!0)),r("Critic review",a=>a.type==="verdict.issued"||/critic\.(veto|rejected)/i.test(a.type)),i.push({tick:t.manifest.totalTicks,label:"Finish"});const s=[...new Map(i.sort((a,o)=>a.tick-o.tick).map(a=>[a.tick,a])).values()];return s.length>1?s:[{tick:0,label:"Start"},{tick:t.manifest.totalTicks,label:"Finish"}]}function sR(t,e,n=75e3){if(!t.length)return 0;if(t.length===1)return t[0].tick;if(e>=n)return t.at(-1).tick;const i=Math.min(2e3,n/t.length/2),r=(n-i*t.length)/(t.length-1);let s=0;for(let a=0;a<t.length;a++){if(e<s+i)return t[a].tick;if(s+=i,a<t.length-1){if(e<s+r){const o=(e-s)/r,l=o*o*(3-2*o);return t[a].tick+(t[a+1].tick-t[a].tick)*l}s+=r}}return t.at(-1).tick}function Ym(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function jm(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function du(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function aR(t,e,n){const i=Ym(t),r=[],s=new Map,a=new Set,o=new Set,l=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let c=0;const u=new Set,d=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),f=.25,h=f*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=d;g+=f){for(;c<l.length&&l[c].tick<=g;){const p=l[c++];if(p.type==="experiment.started"){p.agentId&&(a.add(p.agentId),o.add(p.agentId));continue}if(p.type==="experiment.finished"){p.agentId&&o.delete(p.agentId);continue}for(const m of[p.agentId,...p.payload?.to_agent_ids||[],p.refs?.to_agent_id].filter(Boolean)){u.add(m);const _=s.get(m);_&&!_.table&&(_.pending=!0)}}const v=Pa(t.frames,g)?.snapshot.agents||[];jm(v,g,i).forEach(p=>{const m=v.findIndex(b=>b.id===p.id);let _=s.get(p.id);if(!_){_={p:{...Yc(m),atTable:u.has(p.id)},path:[],leg:0,dwell:u.has(p.id)?2.5:0,pending:!1,table:u.has(p.id),lab:!1},s.set(p.id,_);return}if(a.delete(p.id)&&(_.lab=!0,_.table=!1,_.dwell=0,_.p.atTable=!1,_.p.atLab=!1,_.path=To(_.p,jc(du({...p,activity:"experimenting"}),m),e,n)),_.lab&&!_.path.length&&!_.p.atLab&&(_.p.atLab=!0,_.dwell=4),_.dwell>0){_.dwell=Math.max(0,_.dwell-h),_.p.atTable=_.table;return}if(_.lab&&_.p.atLab){if(o.has(p.id))return;_.lab=!1,_.p.atLab=!1}if(_.p.atTable=!1,!_.path.length){_.table&&(_.table=!1,_.pending=!1,_.leg=0);const T=[jc(du({...p,activity:"experimenting"}),m),{x:2.7+m%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(_.leg>=T.length&&_.pending)_.table=!0,_.path=To(_.p,Yc(m),e,n);else{const A=T[_.leg%T.length];_.leg++,_.path=To(_.p,A,e,n)}}let M=h*2.1;for(;_.path.length&&M>0;){const b=_.path[0],T=Math.hypot(b.x-_.p.x,b.z-_.p.z);T<=M?(_.p.x=b.x,_.p.z=b.z,M-=T,_.path.shift()):(_.p.x+=(b.x-_.p.x)/T*M,_.p.z+=(b.z-_.p.z)/T*M,M=0)}!_.path.length&&_.lab&&(_.p.atLab=!0,_.dwell=4),!_.path.length&&_.table&&(_.dwell=3,_.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([p,m])=>[p,{...m.p}]))})}return r}function oR(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function lR(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const l=o.payload?.text||o.message||"";if(!l.trim())continue;const c=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:oR(i(l)),peers:c.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const nt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",ac=t=>typeof t=="number"&&Number.isFinite(t)?t:null,ls=t=>String(Number(t.toPrecision(4))),dn=(t,e=140)=>t.length>e?t.slice(0,e-1)+"…":t,Km=t=>Array.isArray(t)?t.map(e=>nt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function vl(t,e){const n=t.payload||{},i=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const r=nt(n.why)||nt(n.reason);return n.accepted===!0?`Critic approved${r?`: ${dn(r)}`:": the rerun reproduced the score"}`:n.accepted===!1?`Critic rejected${r?`: ${dn(r)}`:": score didn't reproduce on rerun"}`:nt(n.text)}case"gate.checked":{const r=Km(n.reasons);if(n.pass===!1)return`Novelty gate blocked: ${r.length?dn(r.join("; ")):"too close to an earlier idea"}`;const s=Array.isArray(n.prior_art)?n.prior_art.length:0;return n.pass===!0?`Novelty gate passed: the idea is new enough${s?` (checked against ${s} prior source${s===1?"":"s"})`:""}`:nt(n.text)}case"experiment.started":return`Testing: ${dn(nt(n.description)||nt(n.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const r=ac(n.metric_value),s=nt(n.status).toLowerCase(),a=r==null?"":` ${i} ${ls(r)}`,o=e.best==null?"":` (best ${ls(e.best)})`;return/crash|error|fail|timeout/.test(s)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(s)&&!/not_/.test(s)?`Kept:${a||" result"} beats the previous best`:r==null&&s?`${/reject|invalid|block/.test(s)?"Rejected before scoring":"Not scored"}${nt(n.text)?`: ${dn(nt(n.text))}`:""}`:s?`Discarded:${a} didn't beat the best${o}`:nt(n.text)}case"agent.assigned":{const r=nt(n.role);return r?`Conductor assigned ${r}${nt(n.rationale)?`: ${dn(nt(n.rationale))}`:""}`:nt(n.text)}case"round.started":{const r=Ir(nt(n.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${r?` · ${r}`:""}${nt(n.rationale)?`: ${dn(nt(n.rationale))}`:""}`}case"boredom.measured":{const r=ac(n.B),s=Ir(nt(n.regime)).label;return r==null?nt(n.text):`Boredom ${Math.round(r*100)}%${s?` · ${s}`:""}${r>.6?": repeating itself, ready to switch approach":r<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${dn(nt(n.text))}`;case"question.asked":{const r=nt(n.kind);return`${r==="recall"?"Recalling memory":r==="search"||r==="exa"?"Searching the literature":"Asking"}: ${dn(nt(n.text))}`}case"observation.received":return`Read: ${dn(nt(n.text)||nt(n.summary))}`;case"message.sent":{const r=nt(n.to_agent_id)||nt(t.refs?.to_agent_id);return`${r?`To ${e.name(r)}`:"Message"}: ${dn(nt(n.text))}`}case"study.registered":return`Pre-registered: ${dn(nt(n.question)||nt(n.text))}`;case"study.result":return dn(nt(n.text)||nt(n.headline));case"discovery.made":{const r=ac(n.metric_value);return`New best${r==null?"":`: ${i} ${ls(r)}`}${nt(n.title)?` · ${dn(nt(n.title),80)}`:""}`}default:return""}}function ed(t,e,n,i,r){const s=(t?.events||[]).filter(h=>h.tick<=i&&h.agentId===e),a=s.filter(h=>h.type==="experiment.started"&&h.refs?.experiment_id).at(-1),o=s.filter(h=>h.type==="gate.checked").at(-1),l=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,c=a&&!l?Sa(t,String(a.refs.experiment_id),i):null,u=c&&(t?.events||[]).filter(h=>h.tick<=i&&h.type==="verdict.issued"&&h.refs?.experiment_id===c.id).at(-1),f=[...s,...u&&u.agentId!==e?[u]:[]].sort((h,g)=>h.tick-g.tick).map(h=>({tick:h.tick,why:vl(h,r)})).filter(h=>h.why).slice(-6).reverse();return{activity:zm(n),latest:s.at(-1)||null,blocked:l,experiment:c,sources:qu(t,i).filter(h=>h.agentId===e).slice(-3).reverse(),feed:f}}function Jm(t,e,n){const i=e.esc,r=t.experiment,s=(g,v)=>v?`<div class="now-row"><b>${g}</b><div>${v}</div></div>`:"",a=t.latest?`${i(t.activity||"working")} · <span class="muted">${i(vl(t.latest,e)||t.latest.type)}</span>`:i(t.activity||"Not active yet"),o=r?`${i(r.idea?.text||r.description||"")}${r.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${r.idea.predictedDelta>0?"+":""}${ls(r.idea.predictedDelta)}</span>`:""}${r.descriptor?.mechanism?` <span class="pill">${i(String(r.descriptor.mechanism).replaceAll("_"," "))}${r.descriptor.method?` / ${i(String(r.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",l=t.sources.map(g=>`<button class="chip" data-source="${i(g.id)}">${i(dn(g.title,60))}</button>`).join(""),c=t.blocked?`<span class="pill bad">blocked</span> ${i(Km(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:r?.gate?`<span class="pill ${r.gate.pass?"ok":"bad"}">${r.gate.pass?"passed":r.gate.pass===!1?"blocked":"checked"}</span> ${i(r.gate.reasons.length?r.gate.reasons.join("; "):r.gate.pass?"The idea is new enough to try.":"")}`:r?'<span class="muted">Not checked yet</span>':"",u=r?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(r.verdict.verdict||"")&&!/not_/i.test(r.verdict.verdict||"")?"ok":"bad"}">${i(r.verdict.verdict||"verdict")}</span> ${i(r.verdict.why||"")}`:r?.result?'<span class="muted">Waiting for the critic</span>':"",d=n?.name.replaceAll("_"," ")||"score",f=n?.direction==="maximize"?"higher":"lower",h=r?.result?`<span class="pill">${i(r.result.status||"done")}</span> ${r.result.metric==null?"":`${i(d)} ${ls(r.result.metric)}`}${e.best==null?"":` · best so far ${ls(e.best)} (${f} is better)`}`:r?'<span class="muted">Still running</span>':"";return`<div class="now-card">${s("Doing",a)}${s("Idea",o)}${s("Read",l)}${s("Gate",c)}${s("Score",h)}${s("Critic",u)}${r?`<button class="inspect-link" data-experiment="${i(r.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${t.feed.map(g=>`<li><span>${g.tick}</span>${i(g.why)}</li>`).join("")}</ol>`:""}</div>`}const cR=t=>t&&/^https?:\/\//i.test(t)?t:null,Lo=(t,e,n)=>cR(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),No=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,Qm=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,Ys=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function uR(t,e,n){const i=e.esc,r=h=>`<p class="muted">${h}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${tA(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([h,g])=>`${h}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${No(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(h=>`<li>${i(h)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),l=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"—")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),c=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),d=`${u.length?`<div class="artifact-links">${u.map(([h,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(h)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${Ys("Idea",s+a,!!(t.idea||t.description))}${Ys("Gate",o,!!t.gate)}${Ys("Score",l,!!t.result)}${Ys("Critic",c,!!t.verdict)}${Ys("Artifacts",d,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${eg(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(h=>`<li><span>t${h.tick}</span> <b>${i(h.type)}</b> ${i(h.text)}</li>`).join("")}</ul></details>`}function dR(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${Lo(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(ig(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(rg(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>Qm(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const cs=t=>t==null?"—":t.toFixed(3),fR=t=>`rho ${cs(t.rho)}, p ${tl(t.p)}, n ${t.n??"—"}`;function hR(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${cs(t)}, observed rho ${cs(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function pR(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed&&t.priorArtPass===!1?`<span class="badge" title="Replicated, but the novelty critic matched it to prior work, so it was not accepted.">Confirmed · not accepted: prior art${t.novelty!=null?` (novelty ${t.novelty.toFixed(2)})`:""}</span>`:t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function eg(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(d,f)=>d?`${n(d)}${f?` = <b>${n(f)}</b>`:""}`:"—",o=(r?.confirmed?Ju({...r,direction:t.direction||void 0},Ku(e.judging)).failures:[]).map(d=>`<span class="badge current-rule-failure">Fails current ${n(d)} rule</span>`).join(""),l=r?.halves.length?`<div class="halves">${r.halves.map((d,f)=>`<span>Half ${f+1}: rho ${cs(d.rho)}, p ${tl(d.p)}, n ${d.n??"—"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',c=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(d=>`<li>${fR(d)} ${No(d.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",u=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([d,f])=>`<li>Judge ${n(d)} · laugh ${f.laugh??"—"} / think ${f.think??"—"}${f.reason?`: ${n(f.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(d=>`<li>${Lo(e,d.url,d.title||d.url)}${d.snippet?`<p class="muted">${n(d.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(d=>`<li>${n(d)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head"><div class="study-badges">${pR(t,e)}${o}</div><span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?Lo(e,i.url,ig(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"—")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${cs(t.predictedRho)} → observed <b>${cs(r?.rho??null)}</b>${r?` · p ${tl(r.p)} · n ${r.n??"—"}`:""}${hR(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?l:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${No(r.significant,"significant","not significant")}, ${No(r.replicated,"split-half consistent","not split-half consistent")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${c}${u}<div class="chips">${t.experimentId?Qm(e,t.experimentId):""}${t.citations.map(d=>`<span class="chip">${Lo(e,d,rg(d.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function tg(t,e){return t.length?`<div class="card-grid">${t.map(n=>eg(n,e)).join("")}</div>`:""}function ng(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function ig(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function rg(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function mR(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const gR={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function _R(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=Vm(Gm(r,e.id,i),e.family||""),a={name:t.agentName||(d=>d===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=ed(n,e.id,e.activity||e.state,i,a),l=Np(e.boredom).level,c=o.experiment,u=o.blocked?vl(o.blocked,a):"";return{name:e.name,role:s||Bm(e.role)||"Scientist",mood:{level:l,label:gR[l]||null,boredomPct:e.boredom==null?null:Ii(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:c?.idea?.text||c?.description||null,predicted:u?null:c?.idea?.predictedDelta??null}}function vR(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(Mr(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const Do=t=>typeof t=="number"&&Number.isFinite(t),Sh=t=>Math.max(0,Math.min(1,t)),xR="Zero loss passed the preregistered gates; tested counts finite candidate results.";function yR(t,e,n){const i=s=>s.agent===e||s.agent===n||s.agentId===e,r=t.filter(s=>i(s)&&wn(s.status,s.kind)!=="baseline"&&Do(s.value));return{confirmed:r.filter(s=>s.value===0).length,tested:r.length}}function bR(t){return`${t.confirmed} gate-confirmed / ${t.tested} tested`}function SR(t,e,n){const i=e.filter(r=>r.tick<=n);if(t==="conductor"){const r=i.filter(l=>l.type==="round.started").reduce((l,c)=>!l||c.tick>=l.tick?c:l,void 0),s=r?.payload?.regime;if(typeof s!="string")return"Conductor · awaiting assignment";const a=s.toUpperCase();return`Conductor · ${/BOREDOM_SNAP|EXPLORE|DIVERG/.test(a)?"Bored — trying new directions":/BREAKOUT|NOVEL/.test(a)?"Breakout":"Refining"}`}if(t==="critic"){const r=i.filter(s=>s.type==="verdict.issued").length;return`Critic · ${r} review${r===1?"":"s"}`}return""}function MR(t,e,n){if(t!=="conductor")return"";const i=e.filter(s=>s.tick<=n&&s.type==="round.started").reduce((s,a)=>!s||a.tick>=s.tick?a:s,void 0),r=i?.payload?.regime;return typeof r=="string"?Ir(r).description:""}function ER(t){return t==null?"best —":`best ${Mr(t)}`}function wR(t,e,n,i,r,s){const a=v=>v.agent===e||v.agent===n||v.agentId===e,o=t.filter(v=>a(v)&&wn(v.status,v.kind)!=="baseline").slice().sort((v,p)=>(v.tick??0)-(p.tick??0)),l=o.map(v=>v.value).filter(Do),c=i.name==="replicated_findings"?"maximize":i.direction,u=l.length?c==="maximize"?Math.max(...l):Math.min(...l):null,d=t.filter(v=>wn(v.status,v.kind)!=="baseline").map(v=>v.value).filter(Do),f=d.length?c==="maximize"?Math.min(...d):Math.max(...d):null;let h=null;if(u!=null&&r!=null){if(u===r)h=1;else if(s!=null){const v=r-s;h=v===0?0:Sh((u-s)/v)}else if(f!=null){const v=Math.abs(r-f);h=v===0?1:Sh(c==="maximize"?(u-f)/v:(f-u)/v)}}const g={kept:0,discarded:0,crashed:0};for(const v of o){const p=wn(v.status,v.kind);p!=="baseline"&&g[p]++}return{best:u,progress:h,...g,spark:o.map(v=>v.value).filter(Do).slice(-12)}}function TR(t,e,n=1.96){if(!Number.isFinite(t)||!Number.isFinite(e)||e<=0||t<0||t>e)return null;const i=t/e,r=n*n,s=1+r/e,a=(i+r/(2*e))/s,o=n*Math.sqrt((i*(1-i)+r/(4*e))/e)/s;return{low:Math.max(0,a-o),high:Math.min(1,a+o)}}const Si=t=>typeof t=="number"&&Number.isFinite(t),sg=t=>typeof t=="string"&&t?t.slice(0,7):null;function AR(t,e=String){return t==null?"":t===0?"no change":`${t>0?"improved by":"worsened by"} ${e(Math.abs(t))}`}function Mh(t,e){const n=Si(t?.score)?t.score:null,i=n==null?null:n*e,r=i!=null&&Math.abs(i-Math.round(i))<=1e-6?Math.round(i):null;return{score:n,k:r,fraction:r==null?null:`${r}/${e}`,wilson:r==null?null:TR(r,e),loss:Si(t?.loss)?t.loss:null,commit:sg(t?.commit)}}function bs(t,e){return t?t.events.some(n=>n.type==="run.finished"&&n.tick<=e)?!0:["finished","completed","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks:!1}function RR(t,e){if(!t)return null;const{manifest:n}=t,i=Pa(t.frames,e)?.snapshot,r=i?.results||[],s=n.metric?.direction==="maximize"||i?.metric.direction==="maximize"?"maximize":"minimize",a=n.metric?.label||i?.metric.name||n.metric?.name||"result",o=r.find(_=>wn(String(_.status||""),String(_.kind||""))==="baseline"),l=r.filter(_=>wn(String(_.status||""),String(_.kind||""))==="kept"),c=l.length?l.reduce((_,M)=>s==="maximize"?Si(M.value)&&(!Si(_.value)||M.value>_.value)?M:_:Si(M.value)&&(!Si(_.value)||M.value<_.value)?M:_):o,u=Si(o?.value)?o.value:null,d=Si(c?.value)?c.value:null,f=u==null||d==null?null:s==="maximize"?d-u:u-d,h={kept:0,discarded:0,crashed:0};for(const _ of r){const M=wn(String(_.status||""),String(_.kind||""));M!=="baseline"&&h[M]++}const g=_l(n,t)||"",v=n.held_out_test,p=v&&Si(v.n_items)?v.n_items:0,m=v&&p>0?{n:p,baseline:Mh(v.baseline,p),best:Mh(v.best,p),proxyNote:ys(n,t)?g:v.proxy_note||g,referenceNote:v.reference_note||n.reference_note||""}:null;return{status:n.status==="stopped"?"stopped":"finished",metric:a,direction:s,baseline:u,best:d,delta:f,winner:l.length&&c?{commit:sg(c.commit),description:String(c.description||""),agent:String(c.agent||"")}:null,totals:h,heldOut:m,proxyNote:m?.proxyNote||g,referenceNote:m?.referenceNote||n.reference_note||""}}const Sn=t=>t&&typeof t=="object"?t:{},Uo=t=>typeof t=="number"&&Number.isFinite(t),xl=t=>Array.isArray(t)?t.map(Sn):t&&typeof t=="object"?Object.values(t).map(Sn):[],Eh=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Mn=t=>typeof t=="string"?t:"",sn=t=>Uo(t)?t:null,qi=t=>Mn(t.id||t.study_id||t.studyId),td=t=>Mn(t.refs?.study_id||t.refs?.studyId||t.payload?.study_id||t.payload?.studyId),CR=["score","scores","judges","verdicts"],ag=t=>Object.keys(t).length>0,og=t=>CR.some(e=>t[e]!=null);function wh(t){const e=Sn(t);return(Array.isArray(t)?t.map(Sn):Object.entries(e).map(([i,r])=>({id:i,...Sn(r)}))).map(i=>({id:Mn(i.id)||"judge",model:Mn(i.model),laugh:sn(i.laugh),think:sn(i.think),reason:Mn(i.reason)}))}const PR=["award.issued","study.result","study.replicated","study.completed"];function IR(t){const e=Sn(t.payload),n=[e.committee,e.award].map(Sn).find(ag);return n||(og(e)?e:null)}function LR(t,e,n,i){const r=e.filter(p=>PR.includes(p.type)&&td(p)===qi(t)).map(p=>({event:p,payload:IR(p)})).filter(p=>p.payload!==null),s=r.filter(p=>p.event.tick<=n).sort((p,m)=>p.event.tick-m.event.tick).at(-1);if(!s&&(r.length||!i))return null;const a=Sn(t.graded),o=[t.committee,a.committee,Sn(t.result).committee].map(Sn).find(ag),l=Sn(s?.payload??o),c=Eh(a.scores).map(p=>{const m=Sn(p);return sn(m.score??m.value??p)}).filter(Uo);if(!Object.keys(l).length&&og(a)&&Object.assign(l,{available:a.available,rejected:a.rejected,scores:a.scores,verdicts:a.verdicts,score:c.length?Math.min(...c):a.score,prior_work:a.prior_work}),!Object.keys(l).length)return null;if(l.available===!1)return{score:null,rejected:l.rejected===!0,judges:wh(l.judges??l.verdicts),priorWork:null};const u=wh(l.judges??l.verdicts??l.per_judge),d=u.map(p=>p.laugh==null||p.think==null?null:Math.min(p.laugh,p.think)/10).filter(Uo),f=Eh(l.scores).map(p=>{const m=Sn(p);return sn(m.score??m.value??p)}).filter(Uo),h=sn(l.score)??(f.length?Math.min(...f):null)??(d.length?Math.min(...d):null),g=xl(l.prior_work??l.priorWork),v=g.map(p=>({url:Mn(p.url),title:Mn(p.title)||void 0})).filter(p=>p.url);return{score:h,rejected:l.rejected===!0,judges:u,priorWork:g.length||l.prior_work_available===!0?{count:g.length,links:v}:null}}function js(t,e){const n=qi(t),i=e.filter(a=>td(a)===n),r=i.filter(a=>a.type==="study.registered").sort((a,o)=>a.tick-o.tick)[0],s=i.filter(a=>["study.result","study.replicated","study.completed"].includes(a.type)).sort((a,o)=>a.tick-o.tick)[0];return r?.tick??sn(t.registered_tick)??sn(t.tick)??s?.tick??0}function NR(t,e){return e.filter(n=>td(n)===qi(t)&&["study.result","study.replicated","study.completed"].includes(n.type)).sort((n,i)=>n.tick-i.tick)[0]?.tick??null}const DR=t=>{const e=Sn(t.result),n=Mn(t.status||e.status).toLowerCase();return t.confirmed===!0||t.replicated===!0||e.confirmed===!0||e.replicated===!0||n==="confirmed"||n==="replicated"||xl(t.replications).some(i=>i.confirmed===!0||i.replicated===!0||["confirmed","replicated"].includes(Mn(i.status).toLowerCase()))};function UR(t,e,n,i){const r=xl(t).filter(c=>js(c,e)<=n),s=r.filter(c=>{const u=NR(c,e);return u!=null&&u<=n&&DR(c)}),a=s.map(c=>({study:c,committee:LR(c,e,n,i)})).filter(c=>c.study.rejected!==!0&&!c.committee?.rejected),o=a.filter(c=>c.committee?.score!=null);if(o.length){const c=o.sort((u,d)=>d.committee.score-u.committee.score||(sn(u.study.p)??1/0)-(sn(d.study.p)??1/0)||js(u.study,e)-js(d.study,e)||qi(u.study).localeCompare(qi(d.study))).slice(0,3);return{status:"ranked",tested:r.length,confirmed:s.length,entries:c.map((u,d)=>Th(u.study,u.committee,d+1))}}const l=a.sort((c,u)=>js(c.study,e)-js(u.study,e)||qi(c.study).localeCompare(qi(u.study)));return{status:l.length?"awaiting":"none",tested:r.length,confirmed:s.length,entries:l.map(c=>Th(c.study,c.committee,null))}}function Th(t,e,n){const i=xl(t.halves);return{studyId:qi(t),headline:Mn(t.headline)||Mn(t.question),hypothesis:Mn(t.hypothesis)||Mn(t.mechanism),agentId:Mn(t.agent_id),tick:sn(t.tick)??0,p:sn(t.p),rho:sn(t.rho),n:sn(t.n),halves:i.map(r=>({rho:sn(r.rho),n:sn(r.n),p:sn(r.p)})),rank:n,score:e?.score??null,unscored:e?.score==null,committee:e}}function OR(t,e){const n=_l(t.manifest,t);return n?`<p class="metric-description">${e(n)}</p>`:""}const gr=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:{},Bt=t=>typeof t=="string"?t:"",ts=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Ks=t=>Array.isArray(t)?t:[],FR={humor:"Humor",plausibility:"Plausible",originality:"Original",insight:"Insight",appeal:"Appeal",alignment:"Ig Nobel"};function lg(t){const e=gr(t);if(e.schema!=="igjudge/v1")return null;const n=Ks(e.criteria).map(gr).map(a=>({key:Bt(a.key),label:Bt(a.label)||Bt(a.key),weight:ts(a.weight)??1})).filter(a=>a.key),i=new Map(Ks(e.leaderboard).map(gr).map(a=>[Bt(a.study_id),ts(a.rank)])),r=Ks(e.ideas).map(gr).map(a=>{const o={};for(const[c,u]of Object.entries(gr(a.scores))){const d=gr(u);o[c]={initial:ts(d.initial),revised:ts(d.revised),final:ts(d.final),reason:Bt(d.reason)}}const l=Bt(a.study_id);return{studyId:l,agentId:Bt(a.agent_id),title:Bt(a.title)||l,hypothesis:Bt(a.hypothesis),gate:Bt(a.gate),committee:Bt(a.committee),scores:o,total:ts(a.total),classification:Bt(a.classification),verdict:Bt(a.verdict),safeguards:Ks(a.safeguards).map(Bt).filter(Boolean),priorWork:Ks(a.prior_work).map(gr).map(c=>({title:Bt(c.title),url:Bt(c.url)})).filter(c=>c.url),error:Bt(a.error),rank:i.get(l)??null}});if(!r.length)return null;r.sort((a,o)=>(a.rank??1/0)-(o.rank??1/0)||a.studyId.localeCompare(o.studyId));const s=Bt(e.winner);return{model:Bt(e.model),criteria:n,ideas:r,winner:r.find(a=>a.studyId===s&&a.total!=null)??null}}const Ah=t=>/^https?:\/\//i.test(t)?t:"";function kR(t,e){const n=lg(t);if(!n)return"";const i=d=>d==null?"–":String(Math.round(d*10)/10),r=(d,f)=>d.scores[f]?.final??null,s=n.winner,a=s?`<div class="igjudge-winner"><span class="igjudge-trophy" aria-hidden="true">#1</span><div><p class="igjudge-kicker">Winner · ${e(i(s.total))}/100</p><p class="igjudge-winner-title">${e(s.title)}</p>${s.verdict?`<p class="igjudge-verdict">${e(s.verdict)}</p>`:""}</div></div>`:"",o=n.criteria.map(d=>`<th scope="col" title="${e(d.label)} (×${e(d.weight)})">${e(FR[d.key]||d.label)}<small>×${e(d.weight)}</small></th>`).join(""),l=n.ideas.map(d=>`<tr class="${d===s?"igjudge-win":""}"><td>${d.rank??"–"}</td><th scope="row">${e(d.title)}</th>${n.criteria.map(f=>`<td>${e(i(r(d,f.key)))}</td>`).join("")}<td class="igjudge-total">${e(d.error?"not scored":i(d.total))}</td></tr>`).join(""),c=n.ideas.map(d=>`<details class="igjudge-idea${d===s?" igjudge-win":""}"><summary><b>${d.rank?`#${d.rank}`:"–"}</b> ${e(d.title)} <span class="igjudge-pill">${e(i(d.total))}</span></summary>${d.error?`<p class="igjudge-error">Not scored: ${e(d.error)}</p>`:""}<p class="igjudge-status">Gate: ${e(d.gate||"–")} · Committee: ${e(d.committee||"–")}</p>${d.verdict?`<p>${e(d.verdict)}</p>`:""}<ul class="igjudge-criteria">${n.criteria.map(f=>{const h=d.scores[f.key];return h?`<li><b>${e(f.label)}</b> ${e(i(h.final))}/10 <small>(rounds ${e(i(h.initial))} → ${e(i(h.revised))} → ${e(i(h.final))})</small>${h.reason?` — ${e(h.reason)}`:""}</li>`:""}).join("")}</ul>${d.safeguards.length?`<p class="igjudge-safeguards">Safeguards: ${d.safeguards.map(e).join("; ")}</p>`:""}${d.priorWork.length?`<p class="igjudge-prior">Prior work (Exa): ${d.priorWork.slice(0,3).map(f=>Ah(f.url)?`<a href="${e(Ah(f.url))}" target="_blank" rel="noopener">${e(f.title||f.url)}</a>`:e(f.title)).join(" · ")}</p>`:""}</details>`).join(""),u=n.ideas.filter(d=>d.total!=null).length;return`<section class="igjudge" aria-labelledby="igjudge-title"><h2 id="igjudge-title">IgJudge final verdict</h2><p class="igjudge-note">Post-run final pass: one LLM judge${n.model?` (${e(n.model)})`:""} scored all ${u} ideas on six criteria (1–10, three internal rounds), weighted to a 10–100 total. The in-run two-judge committee is unchanged; gate/committee status is shown per idea.</p>${a}<div class="igjudge-scroll" tabindex="0" role="region" aria-label="IgJudge leaderboard"><table class="igjudge-table"><thead><tr><th scope="col">#</th><th scope="col">Idea</th>${o}<th scope="col">Total</th></tr></thead><tbody>${l}</tbody></table></div><h3>Per-idea scores and reasons</h3>${c}</section>`}function zR(t){const e=Lp(t),n=e.head==="monitor"?"#fff8e4":"#263b41",i=e.head==="round"?`<ellipse cx="70" cy="49" rx="33" ry="26" fill="${e.shell}"/>`:`<rect x="37" y="24" width="66" height="50" rx="${e.head==="monitor"?7:17}" fill="${e.shell}"/>`,r=e.antenna==="pair"?[53,87]:[e.antenna==="offset-right"?87:e.antenna==="offset-left"?53:70],s=[58,82].map(o=>e.eyes==="happy"?`<path d="M${o-5} 47q5-8 10 0" fill="none" stroke="${n}" stroke-width="3" stroke-linecap="round"/>`:`<ellipse cx="${o}" cy="46" rx="3.5" ry="5" fill="${n}"/>`).join(""),a=e.prop==="magnifier"?`<circle cx="112" cy="99" r="12" fill="#bce7ef88" stroke="${e.accent}" stroke-width="5"/><path d="M106 109l-7 14" stroke="#263b41" stroke-width="5"/>`:e.prop==="clipboard"?`<rect x="19" y="89" width="25" height="34" rx="3" fill="${e.trim}"/><rect x="23" y="94" width="17" height="24" fill="#fff8e4"/><path d="M26 100h11m-11 6h11m-11 6h8" stroke="${e.accent}" stroke-width="2"/>`:`<path d="M28 92h10v15l10 16H18l10-16Z" fill="${e.trim}" stroke="#263b41" stroke-width="2"/><path d="M28 92h10" stroke="${e.accent}" stroke-width="4"/>`;return`<svg class="podium-agent" viewBox="0 0 140 162" aria-hidden="true" focusable="false"><ellipse cx="70" cy="155" rx="39" ry="5" fill="#0003"/><g stroke="#263b41" stroke-width="2"><path d="M54 127v20m32-20v20" stroke="${e.shell}" stroke-width="14"/><rect x="43" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="75" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="42" y="81" width="56" height="51" rx="12" fill="${e.shell}"/><path d="M70 88v41" stroke-width="1"/><path d="M42 90l-8 25m64-25 8 23" stroke="${e.shell}" stroke-width="12"/><circle cx="33" cy="116" r="7" fill="${e.accent}"/><circle cx="106" cy="114" r="7" fill="${e.accent}"/><rect x="61" y="71" width="18" height="11" rx="3" fill="${e.accent}"/><circle cx="34" cy="49" r="10" fill="${e.accent}"/><circle cx="106" cy="49" r="10" fill="${e.accent}"/>${r.map(o=>`<path d="M${o} 25V12"/><circle cx="${o}" cy="10" r="5" fill="${e.trim}"/>`).join("")}${i}</g>${e.head==="monitor"?'<rect x="43" y="31" width="54" height="36" rx="6" fill="#263b41"/>':""}${s}<path d="M62 56q8 12 16 0" fill="none" stroke="${n}" stroke-width="2.5" stroke-linecap="round"/><circle cx="49" cy="56" r="3" fill="${e.trim}"/><circle cx="91" cy="56" r="3" fill="${e.trim}"/><rect x="77" y="96" width="14" height="10" rx="2" fill="${e.accent}"/><circle cx="52" cy="93" r="3" fill="${e.trim}"/>${a}</svg>`}function BR(t){return t.filter(e=>!e.error&&e.score!=null&&Number.isFinite(e.score)).map((e,n)=>({idea:e,index:n})).sort((e,n)=>{const i=r=>r.rank!=null&&Number.isFinite(r.rank)&&r.rank>0?r.rank:1/0;return i(e.idea)-i(n.idea)||n.idea.score-e.idea.score||e.index-n.index}).slice(0,3).map(({idea:e})=>e)}function $R(t,e){const n=BR(t);if(!n.length)return'<section class="final-podium"><h2>Ig Nobel podium</h2><p role="status">Awaiting final judge scores. The podium will appear when judging is complete.</p></section>';const i=n.map((r,s)=>`<details class="podium-place podium-place-${s+1}"><summary><span class="podium-stage"><span class="podium-contestant">${r.agent?`${zR(r.agent.id)}<span class="podium-agent-name">${e(r.agent.name)}</span>`:'<span class="podium-agent-unknown">Agent not recorded</span>'}</span><span class="podium-step"><span class="podium-medal">${s+1}</span><span class="podium-score">${e(r.score)}<small>Final judge score</small></span></span></span><span class="podium-idea-label"><span class="podium-label">${s===0?"Ig Nobel Prize winner":s===1?"Second place":"Third place"}</span><strong class="podium-title">${e(r.title||r.id)}</strong><span class="podium-inspect">Inspect idea <span aria-hidden="true">↗</span></span></span></summary><div class="podium-description">${r.agent?`<p class="podium-author">Researcher: ${e(r.agent.name)}</p>`:""}<p>${e(r.description||"No additional idea description was supplied.")}</p>${r.verdict?`<p>${e(r.verdict)}</p>`:""}<p><strong>Final score: ${e(r.score)}</strong></p><small>Idea ${e(r.id)}</small></div></details>`).join("");return`<section class="final-podium" aria-label="Final top three ideas"><h2>Ig Nobel podium</h2><p>Final judge ranking · Select an idea to explore its details.</p>${n.length<3?`<p>Only ${n.length} scored ${n.length===1?"idea is":"ideas are"} available.</p>`:""}<div class="podium-places">${i}</div></section>`}function HR(t){return lg(t.igjudge)?.ideas.map(n=>{const i=t.entities?.studies?.find(l=>{const c=l;return(c.id??c.study_id)===n.studyId}),r=n.agentId||(typeof i?.agent_id=="string"?i.agent_id:""),s=t.manifest.agents?.find(l=>l.agent_id===r||l.native_id===r),a=t.frames.at(-1)?.snapshot.agents.find(l=>l.id===r),o=r?{id:s?.agent_id||r,name:s?.display_name||a?.name||r}:void 0;return{id:n.studyId,title:n.title,description:n.hypothesis,score:n.total,rank:n.rank,verdict:n.verdict,error:n.error,agent:o}})??[]}function GR(t,e,n){return bs(t,e)?$R(HR(t),n):""}const On=t=>typeof t=="string"?t:"",cg=(t,e)=>t.events.filter(n=>n.tick<=e);function VR(t,e=6){const n=new Map;for(const r of t){const s=n.get(r.round)||[];s.push(r),n.set(r.round,s)}const i=Math.max(1,Math.floor(e));return[...n].sort(([r],[s])=>r-s).map(([r,s])=>(s.sort((a,o)=>a.tick-o.tick),{round:r,visible:s.slice(0,i),hidden:s.slice(i)}))}function WR(t,e,n){if(!t.length)return 0;let i=n==null?-1:t.findIndex(o=>o.round===n);i<0&&(i=t.findIndex(o=>e>=o.startTick&&e<=o.endTick)),i<0&&(i=e<t[0].startTick?0:t.length-1);const r=t[i],s=r.endTick-r.startTick,a=s>0?(e-r.startTick)/s:e>=r.endTick?1:0;return i+Math.max(0,Math.min(1,a))}function XR(t){if(t.type==="hypothesis.proposed")return"idea";if(t.type==="llm.called"){const e=On(t.payload?.role).toLowerCase();return e.includes("scout")||e.includes("search")?"scout":e.includes("memory")?"memory":"idea"}return t.type==="verdict.issued"?t.payload?.vetoed===!0?"veto":"critic":t.type==="study.replicated"?"critic":t.type==="question.asked"&&t.payload?.kind==="search"||t.type==="agent.assigned"&&t.payload?.scout===!0?"scout":t.type==="question.asked"&&t.payload?.kind==="recall"||t.type==="observation.received"&&t.payload?.kind==="memories"?"memory":t.type==="boredom.measured"||t.type==="round.started"&&["BOREDOM_SNAP","PARADIGM_BREAKOUT"].includes(On(t.payload?.regime))?"boredom":t.type==="experiment.finished"?t.payload?.status==="keep"?"keep":"evaluation":t.type==="discovery.made"?"keep":t.type==="gate.checked"&&(t.payload?.pass??t.payload?.passed)===!1?"gate":t.type==="experiment.started"&&t.payload?.kind!=="baseline"?"idea":null}function ZR(t,e){if(!t)return{rounds:[],lanes:[],roundCloses:[],roundSpans:[]};const n=new Map;let i=0;for(const f of t.events)f.type==="round.started"&&(i=Number(f.round||f.payload?.round)||i+1),n.set(f,Number(f.round||f.payload?.round)||i);const r=cg(t,e),s=new Map;let a=0;const o=new Map,l=new Set;for(const f of r)f.type==="round.started"&&(a=Number(f.round||f.payload?.round)||a+1,l.add(a)),s.set(f,Number(f.round||f.payload?.round)||a);for(const f of r){const h=XR(f);if(!h)continue;const g=On(f.agentId||f.payload?.agent_id||f.refs?.agent_id);if(!g)continue;const v=s.get(f)||1;l.add(v);const p=t.manifest.agents?.find(b=>b.agent_id===g)?.display_name||g,m=o.get(g)||{id:g,name:p,marks:[]},_=On(f.refs?.event_id)||`${f.type}:${f.tick}`,M=h==="veto"?"Veto":h==="keep"?"New best":h==="gate"?"Gate blocked":h==="scout"?"Search":h==="memory"?"Memory recall":h==="boredom"?"Boredom shift":h==="critic"?"Critic review":h==="idea"?"Idea":"Evaluation";m.marks.push({tick:f.tick,round:v,kind:h,label:M,why:On(f.message||f.payload?.why||f.payload?.reason),eventId:_}),o.set(g,m)}const c=[...l].flatMap(f=>{const h=t.events.filter(m=>m.type==="experiment.finished"&&n.get(m)===f),g=t.events.find(m=>["round.closed","round.finished","round.completed"].includes(m.type)&&n.get(m)===f),v=t.events.find(m=>m.type==="round.started"&&(n.get(m)||0)>f),p=g?.tick??h.at(-1)?.tick??v?.tick;return p!=null&&p<=e?[{round:f,tick:p}]:[]}),u=[...l].sort((f,h)=>f-h),d=u.map((f,h)=>{const g=t.events.find(b=>b.type==="round.started"&&n.get(b)===f),v=t.events.filter(b=>n.get(b)===f),p=g?.tick??v[0]?.tick??0,m=t.events.find(b=>["round.closed","round.finished","round.completed"].includes(b.type)&&n.get(b)===f),_=t.events.filter(b=>b.type==="experiment.finished"&&n.get(b)===f).at(-1),M=u[h+1]==null?void 0:t.events.find(b=>b.type==="round.started"&&n.get(b)===u[h+1]);return{round:f,startTick:p,endTick:m?.tick??_?.tick??M?.tick??t.manifest.totalTicks}});return{rounds:u,lanes:[...o.values()],roundCloses:c,roundSpans:d}}function qR(t,e){if(!t)return{};const n=cg(t,e);let i=0;if(n.some(g=>["run.finished","run.stopped"].includes(g.type))||["finished","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks)return Object.fromEntries((t.manifest.agents||[]).map(g=>[g.agent_id,"idle"]));for(const g of n)g.type==="round.started"&&(i=Number(g.round||g.payload?.round)||i+1);const s=n.filter(g=>(Number(g.round||g.payload?.round)||i)===i),a=new Set(s.filter(g=>g.type==="agent.assigned").map(g=>On(g.agentId||g.payload?.agent_id)).filter(Boolean)),o=s.filter(g=>["llm.called","hypothesis.proposed"].includes(g.type)&&On(g.agentId||g.payload?.agent_id)),l=s.filter(g=>g.type==="agent.assigned"&&On(g.agentId||g.payload?.agent_id)),c=o.at(-1),u=l.at(-1),d=c&&(!u||c.tick>=u.tick)?On(c.agentId||c.payload?.agent_id):"",f=u&&(!c||u.tick>c.tick)?On(u.agentId||u.payload?.agent_id):"",h={};for(const g of t.manifest.agents||[])h[g.agent_id]="idle";for(const g of a){const v=o.some(m=>On(m.agentId||m.payload?.agent_id)===g),p=s.some(m=>m.type==="experiment.finished"&&On(m.agentId||m.payload?.agent_id)===g);h[g]=g===f?"waiting":g===d&&!p?"active":v||p?"done":"waiting"}if(n.some(g=>["round.closed","round.finished","round.completed"].includes(g.type)&&(Number(g.round||g.payload?.round)||i)===i)||n.some(g=>g.type==="round.started"&&(Number(g.round||g.payload?.round)||i)>i))for(const g of a)h[g]="done";return h}document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target.closest?.("[data-orch-tick]");e&&(t.preventDefault(),e.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});const K=t=>document.getElementById(t),nl=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Me=t=>nl(Ta(String(t??""))),Ea=K("console"),Ft=K("conversation"),ug=K("guide"),Er=K("inspector"),wr=K("results-dialog");let Ue,Ut,oi,te=null,it=null,dg=[],Ee=0,st=!1,Xt=!1,Oo=4,Ji="highlights",us=0,nd=[],Yi=null,id="",bi="",Rt="",wi=!1,Tn=!1,Wi="",di="",Rh=0,wa=!1,da=!1,Ch=0,zn="",fu=!1,fg=!1,go=!1,Ph=!1,Tr=null,xn=0,ti=0,na=!1,_o={x:0,y:0},$i=null,Ih,Lh,il,Ar=0,hg=new Map,rl=!1,pg=!1,hu=!1,ns=null;const Nh=vS();function Ta(t){return hA(t,hg)}function mg(){const t=Yu(te?.manifest,te||void 0),e=K("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${Me(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${Me(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.hidden=!te,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}mg();function YR(t){hg=new Map(Object.entries(t.manifest.aliasMap||{}))}let gg=new Map,Fo=[];const bn=new Set;function Ia(t){return XA(t,te?.manifest.agents?.find(e=>e.agent_id===t.id))}function _g(t){const e=Ia(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${Me(e.initial)}</span>`}function vg(t){const e=Ia(t),n=te&&!e.staff?Vm(Gm(te.events,t.id,Ee),e.familyLabel):"";return[e.familyLabel,e.staff?"":n||(t.role!==t.type?Bm(t.role):""),t.standby?"standing by":zm(t.activity||t.state)].filter(Boolean).map(i=>nl(i)).join(" · ")}function xg(t){if(Ia(t).staff)return"";const e=t.boredom==null?null:Ii(t.boredom),n=Ir(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Ts(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}" title="${Me(n.description)}">${Me(n.label)}</em>`:""}</span>`}function jR(t){const e=t.boredom==null?null:Ii(t.boredom);return`<span class="strip-meter" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Ts(e)}"></i></span>`}function KR(){const t=JA(te?.manifest.agents||[]);K("whos-who").hidden=!t.length,K("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${nl(e.title)}<small>${Me(e.names.join(", "))}</small></dt><dd>${nl(e.does)}</dd>`).join("")}</dl>`:""}function ia(){return te?.manifest.live?"Published":"Recorded"}function rd(){return Wm(te?.manifest,Ee,st)}function Dh(t,e){const n=Is(t.agentId,"");if(t.kind==="regime"){yr(`${t.title}${n?` · ${n}`:""} — ${t.detail}`);return}const i=K("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${Me(t.title)}</strong><p>${Me([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(Lh),Lh=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function sd(){if(te){if(Ee>Ar){const t=Pm(te.events,Ar,Ee,te.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?Dh(e.at(-1),e.length-1):t.length&&Dh(t.at(-1),0)}Ar=Ee}}function An(){return jm(it?.agents||[],Ee,gg)}function yr(t){K("toast").textContent=t,K("toast").hidden=!1,clearTimeout(Ih),Ih=setTimeout(()=>K("toast").hidden=!0,4e3)}function Nn(){document.exitPointerLock?.(),bn.clear()}function yn(){return document.querySelector("dialog[open]")!==null||Yi!==null}function yg(t,e,n){const i=Array.from(t.querySelectorAll(n)),r=new Set(e);for(const s of i)r.has(s)||s.remove();if(i.length!==e.length||i.some((s,a)=>s!==e[a]))for(const s of e)t.appendChild(s)}function JR(t,e){const n=t.children[1],i=n.querySelector(".row-meter");if(Ia(e).staff){i?.remove();return}const r=e.boredom==null?null:Ii(e.boredom);let s=i;if(!s){const h=document.createElement("template");h.innerHTML=xg(e),s=h.content.firstElementChild,n.appendChild(s)}const a=(h,g)=>{s.getAttribute(h)!==g&&s.setAttribute(h,g)};a("aria-label",`${e.name} boredom`),a("aria-valuemin","0"),a("aria-valuemax","100"),r==null?s.removeAttribute("aria-valuenow"):a("aria-valuenow",String(Math.round(r)));const o=s.querySelector("i");o.style.width!==`${r??0}%`&&(o.style.width=`${r??0}%`);const l=r==null?"transparent":Ts(r);o.style.background!==l&&(o.style.background=l);const c=s.querySelector("b"),u=r==null?"not measured":`bored ${Math.round(r)}%`;c.textContent!==u&&(c.textContent=u);const d=Ir(e.boredomSpectrum?.regime);let f=s.querySelector(".regime-chip");if(!d.label){f?.remove();return}f||(f=document.createElement("em"),f.className="regime-chip",s.appendChild(f)),f.dataset.tone!==d.tone&&(f.dataset.tone=d.tone),f.title!==d.description&&(f.title=d.description),f.textContent!==d.label&&(f.textContent=d.label)}function QR(t){const e=document.createElement("button");return e.type="button",e.className="agent-row",e.dataset.agent=t.id,e.innerHTML=`${_g(t)}<span><strong></strong><small></small>${xg(t)}</span><i></i>`,e}function eC(t,e){t.dataset.agent=e.id,t.disabled=!!e.standby,e.standby?t.dataset.standby="true":delete t.dataset.standby;const n=Ia(e),i=t.querySelector(".agent-avatar");i.dataset.family!==n.familyKey&&(i.dataset.family=n.familyKey),i.textContent!==n.initial&&(i.textContent=n.initial);const r=n.color||"";i.style.getPropertyValue("--agent-color")!==r&&(r?i.style.setProperty("--agent-color",r):i.style.removeProperty("--agent-color"));const s=t.querySelector("strong");s.textContent!==e.name&&(s.textContent=e.name);const a=t.querySelector("small"),o=vg(e);a.innerHTML!==o&&(a.innerHTML=o),JR(t,e)}function tC(){const t=K("agent-list"),e=KA(it?.agents||[],An());if(!e.length){const r=Array.from(t.querySelectorAll(".agent-row[data-agent]"));for(const s of r)s.remove();t.querySelector(".empty")||(t.innerHTML='<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>');return}t.querySelector(".empty")?.remove();const n=Array.from(t.querySelectorAll(".agent-row[data-agent]")),i=Zm(e,n,r=>r.id,r=>r.dataset.agent||"",QR,eC);yg(t,i,".agent-row[data-agent]")}function Ss(t){document.body.classList.toggle("bar-collapsed",t),K("collapse-bar").setAttribute("aria-expanded",String(!t)),K("collapse-bar").textContent=t?"▴":"▾",K("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel"),K("tick-label").textContent=t?te?.manifest.continuous?"Continuous session":`Round ${it?.round??1}`:`Tick ${Math.floor(Ee)} / ${te?.manifest.totalTicks||0}`}function Ct(){const t=yn(),e=t||Tn;document.body.classList.toggle("dock-auto-hidden",t),document.body.classList.toggle("context-panel-open",t),document.body.classList.toggle("dock-context-open",e),e&&!go&&(Ph=document.body.classList.contains("bar-collapsed"),go=!0),e?Ss(!0):go&&(go=!1,Ss(Ph)),K("collapse-bar").disabled=e,yl()}document.querySelectorAll("dialog").forEach(t=>t.addEventListener("close",Ct));function fi(){Yi&&(K(Yi).hidden=!0),Yi=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false")),K("open-about").setAttribute("aria-expanded","false"),Ct()}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=Yi!==e;Nn(),fi(),n&&(st=!1,Qt(),Yi=e,K(e).hidden=!1,t.setAttribute("aria-expanded","true"),e==="orchestration-drawer"&&rC(),Ct())};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=fi;function La(t){if(Xt=t,Rt="",wi=!1,Tn=!1,Wi="",di="",Ct(),Nn(),Ue.setOverview?.(!t),K("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){st=!1,Ue.camera.position.set(0,1.69,9.5);const e=new Bn().setFromQuaternion(Ue.camera.quaternion,"YXZ");xn=e.y,ti=e.x}else{const e=Ue.camera.quaternion.clone();oi.reset(),Ue.camera.quaternion.copy(e),oi.syncFromCamera()}Qt(),Sg()}function Qt(){if(te){const r=cA(te.manifest);K("overview-eyebrow").textContent=r.eyebrow,K("run-callout").textContent=r.callout,K("replay-kicker").textContent=st?"Replaying recorded run":"Recorded run",K("connection").hidden=gs,K("header-actions").hidden=!1,K("open-results").textContent="Results",nC();const s=it?.boredom==null?null:Math.round(Ii(it.boredom)),a=K("boredom-gauge");a.setAttribute("aria-valuenow",String(s??0)),a.setAttribute("aria-label",s==null?"Swarm boredom not yet measured":`Swarm boredom ${s}%`),a.querySelector("span").style.width=`${s??0}%`,a.dataset.tone=s==null?"unknown":s>=65?"high":s>=35?"medium":"low"}K("open-results").hidden=!te||!gs;const t=nR(te?.manifest,Ee,st,te?.events||[]);K("go-live").hidden=t.hidden,K("go-live").textContent=t.label,K("go-live").classList.toggle("at-edge",t.atEdge),K("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),K("play").textContent=st?"Ⅱ Pause":"▶ Play",K("play").setAttribute("aria-label",st?"Pause":"Play"),K("camera-mode").textContent=Xt?"Lab view ↗":"Walk inside ↗",K("camera-mode").disabled=!te||st,K("timeline").value=String(Ee),K("tick-label").textContent=document.body.classList.contains("bar-collapsed")?te?.manifest.continuous?"Continuous session":`Round ${it?.round??1}`:`Tick ${Math.floor(Ee)} / ${te?.manifest.totalTicks||0}`,K("timeline").setAttribute("aria-valuetext",`Round ${it?.round??1} of ${it?.config.rounds??te?.manifest.time?.rounds??0}`),K("replay-mode").value=Ji;const e=te&&Pa(te.events,Ee),n=K("activity-caption"),i=e?.refs?.experiment_id;n.textContent=st?"Replaying recorded run":e?Ta(jA({...e,message:vl(e,Aa())||e.message},Is(e.agentId,""))):"Recorded run",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function nC(){if(!te)return;const t=te.manifest.time?.rounds||it?.config.rounds||0,e=String(it?.regime||"").toUpperCase(),n=/BOREDOM_SNAP/.test(e)?"Bored — trying new directions":/PARADIGM_BREAKOUT/.test(e)?"Breakout":"Refining";K("run-meta").innerHTML=`<span class="status-chip">${st?"Replaying recorded run":"Recorded run"}</span><span>${te.manifest.continuous?"Continuous session":`Round ${it?.round??1}${t?` of ${t}`:""}`}</span><span>${n}</span>`}function hi(t){te&&(Ee=Math.max(0,Math.min(te.manifest.totalTicks,t)),it=Pa(te.frames,Ee)?.snapshot||null,Qt(),ad(),Ea.open&&cd(),Ft.open&&ud(),Er.open&&Pg(),wr.open&&pu(),!fu&&bs(te,Ee)&&(fu=!0,pu(),wr.open||(wr.showModal(),Ct())))}function ad(){K("agent-count").textContent=`${An().length} AGENTS`,tC(),K("run-label").textContent=it?te?.manifest.continuous?"Continuous session":`Round ${it.round}${it.config.rounds?` of ${it.config.rounds}`:""}`:"Waiting for the recorded run",Sg()}function iC(t){const e=document.createElement("button");return e.type="button",e.dataset.agent=t.agent.id,e.dataset.kind=t.kind,t.kind==="staff"?e.className="status-tile status-role":(e.className="status-tile",e.innerHTML=`<strong class="status-tile-name"></strong>${jR(t.agent)}<span class="tile-metric"></span>`),bg(e,t),e}function bg(t,e){const n=e.agent;if(t.dataset.agent=n.id,t.dataset.kind!==e.kind&&(t.dataset.kind=e.kind),e.kind==="staff"){t.className!=="status-tile status-role"&&(t.className="status-tile status-role");const v=e.help||n.name,p=`Focus ${n.name}: ${e.label}`;t.title!==v&&(t.title=v),t.getAttribute("aria-label")!==p&&t.setAttribute("aria-label",p),t.textContent!==e.label&&(t.textContent=e.label);return}t.className!=="status-tile"&&(t.className="status-tile");const i=`Focus ${n.name}: ${e.metricText}`;t.getAttribute("aria-label")!==i&&t.setAttribute("aria-label",i);const r=t.querySelector(".status-tile-name");r.textContent!==n.name&&(r.textContent=n.name);const s=t.querySelector(".strip-meter"),a=n.boredom==null?null:Ii(n.boredom),o=`${n.name} boredom`,l=a==null?null:String(Math.round(a));s.getAttribute("aria-label")!==o&&s.setAttribute("aria-label",o),s.getAttribute("aria-valuenow")!==(l??null)&&(l==null?s.removeAttribute("aria-valuenow"):s.setAttribute("aria-valuenow",l));const c=s.querySelector("i"),u=`${a??0}%`,d=a==null?"transparent":Ts(a);c.style.width!==u&&(c.style.width=u),c.style.background!==d&&(c.style.background=d);const f=t.querySelector(".tile-metric");f.textContent!==e.metricText&&(f.textContent=e.metricText),e.metricTitle?f.title!==e.metricTitle&&(f.title=e.metricTitle):f.hasAttribute("title")&&f.removeAttribute("title");const h={active:"Active turn",waiting:"Waiting",done:"Done this round"};let g=t.querySelector(".turn-badge");if(!e.turn){g?.remove();return}g||(g=document.createElement("small"),g.className="turn-badge",t.appendChild(g)),g.dataset.turn!==e.turn&&(g.dataset.turn=e.turn),g.textContent!==h[e.turn]&&(g.textContent=h[e.turn])}function Sg(){const t=K("status-strip");if(!te||!it||Xt||document.body.classList.contains("prestart")){t.hidden=!0;return}const e=An().filter(p=>p.type!=="baseline"),n=it.results,i=it.metric,r=Ma(te.manifest,te),s=e.filter(p=>p.type!=="conductor"&&p.type!=="critic").length,a=n.filter(p=>wn(p.status,p.kind)!=="baseline"&&typeof p.value=="number"&&Number.isFinite(p.value)),o=i.name==="replicated_findings"?"maximize":i.direction,l=a.length?o==="maximize"?Math.max(...a.map(p=>p.value)):Math.min(...a.map(p=>p.value)):it.value,c=n.find(p=>wn(p.status,p.kind)==="baseline"&&typeof p.value=="number")?.value??null,u={active:"Active turn",waiting:"Waiting",done:"Done this round",idle:"Idle"},d=qR(te,Ee),f=e.map(p=>{if(p.type==="conductor"||p.type==="critic")return{agent:p,kind:"staff",label:SR(p.type,te.events,Ee),help:MR(p.type,te.events,Ee)};const m=wR(n,p.id,p.name,i,l,c),_=r?yR(n,p.id,p.name):null,M=d[p.id];return{agent:p,kind:"scientist",metricText:_?bR(_):ER(m.best),metricTitle:_?xR:void 0,turn:M&&M!=="idle"?u[M]:void 0}}),h=Array.from(t.querySelectorAll(".status-tile[data-agent]")),g=Zm(f,h,p=>p.agent.id,p=>p.dataset.agent||"",iC,bg);yg(t,g,".status-tile[data-agent]");let v=t.querySelector(".status-scroll-hint");if(s){v||(v=document.createElement("span"),v.className="status-scroll-hint",t.appendChild(v));const p=`${s} scientist${s===1?"":"s"} ›`;v.textContent!==p&&(v.textContent=p),t.lastElementChild!==v&&t.appendChild(v)}else v?.remove();t.hidden=!e.length,yl()}function rC(){const t=K("orchestration-content");if(!te){t.innerHTML="<p>No run loaded.</p>";return}const e=ZR(te,Ee),n=860,i=40,r=30,s=r+e.lanes.length*i+12,a=158,o=n-a-24,l=o/Math.max(1,e.rounds.length),c=(m,_)=>a+WR(e.roundSpans,m,_)*l,u={idea:"#e4c986",critic:"#91b4d4",veto:"#e77872",scout:"#82c5ae",memory:"#b39bdb",boredom:"#dd9b59",evaluation:"#a8b6b7",keep:"#77bb69",gate:"#e77872"},d=e.lanes.map((m,_)=>{const M=r+_*i,b=VR(m.marks).map(T=>{const A=Math.max(0,e.rounds.indexOf(T.round)),x=a+A*l+4,S=a+(A+1)*l-4,k=T.visible.map(P=>c(P.tick,P.round));for(let P=1;P<k.length;P++)k[P]=Math.max(k[P],k[P-1]+8.5);if(k.length){const P=k.at(-1)-S;if(P>0)for(let ne=0;ne<k.length;ne++)k[ne]-=P;const X=x-k[0];if(X>0)for(let ne=0;ne<k.length;ne++)k[ne]+=X}const N=T.visible.map((P,X)=>`<g class="orch-mark" role="button" tabindex="0" data-orch-tick="${P.tick}" data-orch-agent="${Me(m.id)}" aria-label="${Me(P.label)} by ${Me(m.name)} at tick ${P.tick}"><title>${Me(P.label)}${P.why?`: ${Me(P.why)}`:""} · tick ${P.tick}</title><circle cx="${k[X]}" cy="${M}" r="${P.kind==="veto"?5:4}" fill="${u[P.kind]}" class="orch-dot ${P.kind}"/></g>`).join(""),F=T.hidden[0],B=F?Math.max(x+10,Math.min(S-10,c(F.tick,T.round))):0,q=F?`<g class="orch-overflow" role="button" tabindex="0" data-orch-tick="${F.tick}" data-orch-agent="${Me(m.id)}" aria-label="${T.hidden.length} more events in round ${T.round}; jump to ${Me(F.label)} at tick ${F.tick}"><title>${T.hidden.length} more events in round ${T.round}</title><rect x="${B-10}" y="${M+14}" width="20" height="14" rx="7"/><text x="${B}" y="${M+24}" text-anchor="middle">+${T.hidden.length}</text></g>`:"";return`${N}${q}`}).join("");return`<text x="8" y="${M+4}" class="orch-name">${Me(m.name)}</text><line x1="${a}" y1="${M}" x2="${n-12}" y2="${M}" class="orch-lane"/>${b}`}).join(""),f=e.roundCloses.filter(m=>m.tick>0).map(m=>`<line x1="${c(m.tick,m.round)}" y1="${r-20}" x2="${c(m.tick,m.round)}" y2="${s}" class="orch-close"><title>Round ${m.round} closed</title></line>`).join(""),h=e.rounds.map((m,_)=>`<text x="${a+(_+.5)*l}" y="13" class="orch-round">${te?.manifest.continuous?"Session":`Round ${m}`}</text>`).join(""),g=`<line x1="${c(Ee)}" y1="${r-20}" x2="${c(Ee)}" y2="${s}" class="orch-playhead"/>`,v={breakout:"Breakout conditions assign three refining slots and one exploring slot.",boredom:"A boredom shift assigns one refining slot and three exploring slots; the novelty screen rejects close repeats.",keep:"Kept means retained as a current best; baseline is the unmodified reference."},p=[["idea","Idea"],["scout","Search"],["memory","Memory"],["boredom","Boredom shift"],["critic","Review"],["veto","Veto"],["keep","Kept"]].map(([m,_])=>`<span${v[m]?` title="${Me(v[m])}"`:""}><i style="--mark:${u[m]}"></i>${_}</span>`).join("")+`<span class="orchestration-legend-note"><span title="${Me(v.breakout)}">Breakout</span>: 3 refine + 1 explore; <span title="${Me(v.boredom)}">Boredom shift</span>: 1 refine + 3 explore; close repeats are screened out.</span>`;t.innerHTML=e.lanes.length?`<div class="orchestration-scroll"><svg class="orchestration-svg" viewBox="0 0 ${n} ${s}" role="img" aria-label="Orchestration lanes through tick ${Math.floor(Ee)}">${h}${f}${d}${g}</svg></div><div class="orchestration-legend">${p}</div><p class="orchestration-hint">Select a mark to jump to that event and focus its scientist.</p>`:"<p>No orchestration events by this moment.</p>"}function pu(){if(!te){K("results-content").innerHTML="<p>No results available.</p>";return}const t=bs(te,Ee)?GR(te,Ee,Me)+kR(te.igjudge,Me):"";if(ys(te.manifest,te)){const u=uu(te),d=Fm(te,Ee),f=d.some(h=>h.score>=.5&&!h.rejected&&h.award&&!/committee/i.test(h.award));if(Ma(te.manifest,te)||!f){K("results-title").textContent="What the swarm found",K("results-content").innerHTML=t+_h(Io,te,Me,u);return}}const e=Io.results,n=Yu(te.manifest,te),i=`<div class="results-provenance" data-tone="${n.tone}"><strong>${Me(n.label)}</strong>${n.chips.map(u=>`<span>${Me(u)}</span>`).join("")}</div>`;if(ys(te.manifest,te)){const u=bs(te,Ee)||Ee>=te.manifest.totalTicks||te.events.some(_=>["run.finished","run.stopped"].includes(_.type)&&_.tick<=Ee),d=uu(te,Ee),f=UR(te.entities?.studies,te.events,Ee,u),h=d.awards.length?`<p class="podium-award-count">${Me(e.awardCount.replace("{N}",String(d.awards.length)))}</p>`:Ma(te.manifest,te)?`<p class="podium-empty">${Me(e.noAwards)}${Im(te.manifest,te)?Me(e.creditErrorSuffix):""}</p>`:`<p class="podium-empty">${Me(sc.committeePending)}</p>`,g=e.countLine.replace("{N}",String(d.registered)).replace("{M}",String(d.confirmed)).replace("{K}",String(d.underCurrentRules)),v=f.entries.map(_=>`<li>${_.rank?`<b>#${_.rank}</b> `:""}${Me(_.headline||_.studyId)}${_.unscored?" · Unscored":` · score ${Me(_.score)}`}${_.rho!=null?` · ρ ${_.rho.toFixed(3)}`:""}${_.p!=null?` · p ${tl(_.p)}`:""}</li>`).join("");K("results-title").textContent="What the swarm found";const p=f.status==="awaiting"&&v?`<details class="unscored-studies"><summary>${f.confirmed} confirmed studies, unscored</summary><ul class="podium-list">${v}</ul></details>`:v?`<ul class="podium-list">${v}</ul>`:"",m=OR(te,Me);K("results-content").innerHTML=`${t}${_h(Io,te,Me,d)}${i}<h2>In-run committee results</h2>${h}<p class="results-count">${Me(g)}</p>${m}${p}<details class="judging-details"><summary>${Me(sc.title)}</summary><ol>${sc.steps.map(_=>`<li>${Me(_)}</li>`).join("")}</ol></details>`;return}const r=RR(te,Ee);if(!r){K("results-content").innerHTML="<p>No results available.</p>";return}const s=u=>u==null?"—":Mr(u),a=u=>u?`${u.low.toFixed(2)}–${u.high.toFixed(2)}`:"",o=u=>u.fraction||s(u.score??u.loss),l=r.heldOut?`<section class="held-out"><h3>Held-out test</h3><p>Baseline ${o(r.heldOut.baseline)} → best ${o(r.heldOut.best)}</p>${r.heldOut.best.wilson?`<p>95% Wilson CI: ${a(r.heldOut.best.wilson)} (baseline ${a(r.heldOut.baseline.wilson)})</p>`:""}${r.heldOut.proxyNote?`<p>${Me(r.heldOut.proxyNote)}</p>`:""}${r.heldOut.referenceNote?`<p>${Me(r.heldOut.referenceNote)}</p>`:""}</section>`:'<p class="no-held-out">no held-out split for this task</p>',c=r.delta==null?"":` · ${AR(r.delta,s)}`;K("results-title").textContent=`RUN RESULTS · ${r.status.toUpperCase()}`,K("results-content").innerHTML=`${i}<h2>${Me(ju(te.manifest))}</h2><p class="result-metric">${Me(r.metric)} · ${r.direction==="maximize"?"higher is better":"lower is better"}</p><p class="result-baseline">Baseline ${s(r.baseline)} → best dev result ${s(r.best)}${c}</p>${r.winner?.commit?`<section class="result-winner"><h3>Winning change</h3><p><code>${Me(r.winner.commit)}</code> · ${Me(r.winner.agent)}</p><p class="result-winner-description">${Me(r.winner.description)}</p></section>`:"<p>Baseline is the best result so far.</p>"}${l}<p class="result-totals">Kept ${r.totals.kept} · discarded ${r.totals.discarded} · crashed ${r.totals.crashed}</p>${r.proxyNote&&!r.heldOut?.proxyNote?`<p class="proxy-note">${Me(r.proxyNote)}</p>`:""}${r.referenceNote&&!r.heldOut?.referenceNote?`<p class="reference-note">${Me(r.referenceNote)}</p>`:""}`}function yl(){const t=document.querySelector(".replay-bar"),e=K("status-strip");if(!t||!e)return;const n=t.getBoundingClientRect();if(innerHeight<=500&&innerWidth>innerHeight){const i=document.querySelector(".sidebar"),r=document.querySelector("header"),s=Math.max(8,(i?.getBoundingClientRect().right??0)+8);e.style.left=`${s}px`,e.style.width=`${Math.max(0,innerWidth-s-8)}px`,e.style.top=`${Math.max(68,(r?.getBoundingClientRect().bottom??58)+8)}px`}else{const i=e.getBoundingClientRect().height||56;e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.top=`${Math.max(0,n.top-i-8)}px`}e.style.bottom="auto",e.style.transform="none"}const Uh=document.querySelector(".replay-bar");Uh&&new ResizeObserver(yl).observe(Uh);window.addEventListener("resize",yl);function sC(){const t=K("proximity");if(!Rt){t.hidden=!0;return}const e=An().find(i=>i.id===Rt);if(!e){t.hidden=!0;return}const n=`${Rt}|${Math.floor(Ee)}|${Tn}`;if(n!==di){const i=_R({agent:e,recording:te,tick:Ee,metric:it?.metric,best:it?.value??null,agentName:Is});if(mu(t,Oh(vR(i,Tn,Me))),Tn){const r=ed(te,e.id,e.activity||e.state,Ee,Aa()),s=t.querySelector("[data-bubble-now]");s&&mu(s,Oh(Jm(r,{...Aa(),esc:Me},it?.metric)))}di=n}t.hidden=!1,oC()}function Oh(t){const e=document.createElement("template");return e.innerHTML=t,e.content}function mu(t,e){const n=[...t.childNodes],i=[...e.childNodes];for(i.forEach((r,s)=>{const a=n[s];if(!a){t.appendChild(r.cloneNode(!0));return}if(a.nodeType===Node.TEXT_NODE&&r.nodeType===Node.TEXT_NODE){a.nodeValue!==r.nodeValue&&(a.nodeValue=r.nodeValue);return}if(a instanceof Element&&r instanceof Element&&a.tagName===r.tagName){for(const o of[...a.attributes])r.hasAttribute(o.name)||a.removeAttribute(o.name);for(const o of[...r.attributes])a.getAttribute(o.name)!==o.value&&a.setAttribute(o.name,o.value);mu(a,aC(r));return}t.replaceChild(r.cloneNode(!0),a)});t.childNodes.length>i.length;)t.lastChild&&t.removeChild(t.lastChild)}function aC(t){const e=document.createDocumentFragment();return e.append(...[...t.childNodes].map(n=>n.cloneNode(!0))),e}function oC(){const t=K("proximity");if(t.hidden)return;const e=Ue.agentPositions?.().find(p=>p.id===Rt);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new O(0,2.35,0));if(Ue.camera.updateMatrixWorld(),n.clone().applyMatrix4(Ue.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(Ue.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12,l=At.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o)),c=Math.max(o,innerHeight-a.height-o),u=[document.querySelector("header"),K("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar")].filter(p=>!!p&&!p.hidden&&getComputedStyle(p).display!=="none").map(p=>p.getBoundingClientRect()).filter(p=>p.width>0&&p.height>0),d=[s-a.height-22,s+22,...u.flatMap(p=>[p.bottom+o,p.top-a.height-o]),o,c].map(p=>At.clamp(p,o,c)),f=(p,m)=>l<m.right&&l+a.width>m.left&&p<m.bottom&&p+a.height>m.top,h=p=>u.reduce((m,_)=>m+Math.max(0,Math.min(p+a.height,_.bottom)-Math.max(p,_.top))*Math.max(0,Math.min(l+a.width,_.right)-Math.max(l,_.left)),0),v=d.find(p=>!u.some(m=>f(p,m)))??d.sort((p,m)=>h(p)-h(m))[0];t.style.visibility="visible",t.style.left=`${l}px`,t.style.top=`${v}px`}function Mg(t,e=!1){Rt=t,wi=!0,Tn=!1,Wi="",di="",Ct(),e||ld("scientist")}function lC(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function cC(){try{return localStorage.getItem("lab.coach.dismissed")==="1"}catch{return!1}}function uC(){const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(il),Tr?.(),Tr=null;try{localStorage.setItem("lab.coach.dismissed","1")}catch{}zn="done",K("coach-mark").hidden=!0};t.forEach(n=>window.addEventListener(n,e,!0)),Tr=()=>t.forEach(n=>window.removeEventListener(n,e,!0))}function od(){if(yn()||cC()){K("coach-mark").hidden=!0;return}const t=ES(lC());if(t==="scientist"&&innerHeight<=500&&!document.body.classList.contains("bar-collapsed")){zn="done",K("coach-mark").hidden=!0;return}if(!t){zn="done",K("coach-mark").hidden=!0;return}zn=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?matchMedia("(pointer:fine)").matches?"Click a scientist":"Tap a scientist":"Drag to scrub";K("coach-mark").dataset.coach=t,K("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,K("coach-mark").hidden=!1,uC(),clearTimeout(il),il=setTimeout(()=>{Tr?.(),Tr=null,zn="done",K("coach-mark").hidden=!0},8e3)}function ld(t){zn===t&&(clearTimeout(il),Tr?.(),Tr=null,zn="",K("coach-mark").hidden=!0,od())}function dC(){const t=K("coach-mark");if(t.hidden||zn!=="scientist")return;const e=An().find(_=>!ll(_)),n=e&&Ue.agentPositions?.().find(_=>_.id===e.id);if(!n)return;const i=n.position.clone().add(new O(0,1.6,0));i.project(Ue.camera);const r=(i.x+1)*innerWidth/2;(1-i.y)*innerHeight/2;const s=t.getBoundingClientRect(),a=innerHeight<=500?72:80,o=_=>!!_&&!_.hidden&&getComputedStyle(_).display!=="none"&&getComputedStyle(_).visibility!=="hidden",l=[document.querySelector("header"),K("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar"),K("proximity")].filter(o).map(_=>_.getBoundingClientRect()).filter(_=>_.width>0&&_.height>0);Ue.camera.updateMatrixWorld();const c=new Set(An().filter(_=>!ll(_)).map(_=>_.id));for(const _ of Ue.agentPositions?.()||[]){if(!c.has(_.id))continue;const M=[-.9,.9].flatMap(b=>[.15,3.1].flatMap(T=>[-.55,.55].map(A=>new O(_.position.x+b,_.position.y+T,_.position.z+A).project(Ue.camera)))).filter(b=>b.z>=-1&&b.z<=1);if(M.length){const b=Math.min(...M.map(S=>(S.x+1)*innerWidth/2)),T=Math.max(...M.map(S=>(S.x+1)*innerWidth/2)),A=Math.min(...M.map(S=>(1-S.y)*innerHeight/2)),x=Math.max(...M.map(S=>(1-S.y)*innerHeight/2));T>0&&b<innerWidth&&x>0&&A<innerHeight&&l.push(new DOMRect(b,A,T-b,x-A))}}const u=At.clamp(r-s.width/2,8,Math.max(8,innerWidth-s.width-8)),d=document.querySelector("header")?.getBoundingClientRect().bottom??a,f=At.clamp(d+8,a,Math.max(a,innerHeight-s.height-12)),h=[u,8,innerWidth-s.width-8,...l.flatMap(_=>[_.left-s.width-8,_.right+8])].map(_=>At.clamp(_,8,Math.max(8,innerWidth-s.width-8))),g=[f,a,innerHeight-s.height-12,...l.flatMap(_=>[_.top-s.height-8,_.bottom+8])].map(_=>At.clamp(_,a,Math.max(a,innerHeight-s.height-12))),v=(_,M)=>l.reduce((b,T)=>b+Math.max(0,Math.min(_+s.width,T.right)-Math.max(_,T.left))*Math.max(0,Math.min(M+s.height,T.bottom)-Math.max(M,T.top)),0),p=h.flatMap(_=>g.map(M=>({left:_,top:M,overlap:v(_,M),distance:Math.hypot(_-u,M-f)}))).sort((_,M)=>_.overlap-M.overlap||_.distance-M.distance),m=p[0];t.style.right="auto",t.style.transform="none",t.style.left=`${m.left}px`,t.style.top=`${m.top}px`,t.style.bottom="auto"}function Eg(){if(!hu){rl=!0,sl();return}if(!wa){if(wa=!0,document.body.classList.remove("prestart"),document.body.dataset.labOpen="true",K("header-actions").hidden=!1,te){if(te.manifest.live)hi(te.manifest.totalTicks);else{Ji="highlights";const t=Qu(te);nd=qm(te,t),us=0,hi(t)}st=!0,Ar=Ee}{Ue.camera.fov=innerWidth<760?62:48,Ue.camera.updateProjectionMatrix();const t=Ng(),e=An().filter(n=>!ll(n)).flatMap(n=>{const i=t.get(n.id);return i?[new O(i.x,0,i.z)]:[]});e.length?vC(e):(Ue.camera.position.set(0,2.7,1.2),oi.focus(new O(0,1.3,-2))),Ss(!0)}Qt(),ad(),Ut.domElement.focus(),An().length&&od(),fC()}}function sl(){!rl||!pg||hu||(hu=!0,K("loading").classList.add("loaded"),setTimeout(()=>{K("loading").hidden=!0,Eg()},380))}function fC(){if(ns)return;const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(ns),ns=null,t.forEach(i=>document.removeEventListener(i,e,!0))};t.forEach(i=>document.addEventListener(i,e,!0));const n=()=>{if(ns=null,!wa||yn()){t.forEach(o=>document.removeEventListener(o,e,!0));return}const i=new Set((Ue.agentPositions?.()||[]).map(o=>o.id)),r=An().find(o=>!ll(o)&&i.has(o.id));if(!r){ns=setTimeout(n,300);return}t.forEach(o=>document.removeEventListener(o,e,!0)),fd(r.id,!0);let s=!0;const a=()=>{s&&(s=!1,t.forEach(o=>document.removeEventListener(o,a,!0)),Rt===r.id&&dd())};t.forEach(o=>document.addEventListener(o,a,!0))};ns=setTimeout(n,3e3)}function wg(){da&&(da=!1,Ue.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",wg,{capture:!0});window.addEventListener("keydown",wg,{capture:!0});K("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&ld(zn)};function hC(){if(!te||!it)return"<p>No measurements yet.</p>";const t=te.manifest.swarm==="ignobel"&&it.metric.name==="replicated_findings";return rR(iR(it.results,te.frames,Ee,!t),it.metric,Ee,Me)}function Tg(t,e=Dm(it?.metric)){const n=xA(t.value,t.reward,e,Mr),i=[t.effectSize==null?"":`Effect ${Me(t.effectSize)}`,t.pValue==null?"":`p = ${Me(t.pValue)}`,n?Me(n):""].filter(Boolean);return i.length?i.join("<br>"):Me(t.value??"—")}function cd(){const t=it;if(!t){K("console-content").innerHTML="<h2>No evidence yet.</h2>";return}const e=te?_l(te.manifest,te):void 0,n=Dm(t.metric),i='<p class="evidence-key"><span title="Kept candidates are retained when they improve the current best.">Keep</span> = retained as a current best; <span title="Baseline is the unmodified reference used for comparison.">baseline</span> = the unmodified reference.</p>',r=M=>M.map(b=>{const T=b.kind==="baseline"?"Baseline is the unmodified reference for comparison.":String(b.status).toLowerCase()==="keep"?"Kept because this result improved the current best.":"";return`<tr${b.id?` class="inspectable" data-experiment="${Me(b.id)}" tabindex="0"`:""}><td>${b.round}</td><td>${Me(b.agent)}</td><td><span${T?` title="${Me(T)}"`:""}>${Me(b.status)}</span><br>${Me(b.description)}</td><td>${Tg(b,n)}</td></tr>`}).join(""),s=Ps(te,Ee),a=s.length?`<h3>Ig Nobel studies</h3>${tg(s,ds())}`:"",o=t.results.filter(M=>wn(M.status,M.kind)==="crashed"),l=t.results.filter(M=>wn(M.status,M.kind)==="kept"),c=t.results.filter(M=>wn(M.status,M.kind)!=="crashed"&&wn(M.status,M.kind)!=="kept"),u=`<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th title="Run metric value">${Me(n)}</th></tr></thead><tbody>`,d="</tbody></table></div>",f=t.findings.filter(M=>!/swarm_B|per_agent_B|boredom/i.test(M.message)).slice().reverse(),h=f.filter(M=>M.message.trim().length>180||/^\s*[\[{]/.test(M.message)),g=f.filter(M=>!h.includes(M)),v=M=>M.map(b=>`<div class="finding"><b>${Me(An().find(T=>T.id===b.agent)?.name||b.role)}</b><span>${Me(b.message)}</span></div>`).join("")||"<p>No findings yet.</p>",p=K("console-content"),m=p.querySelector(".evidence-failures")?.open??!1,_=p.querySelector(".evidence-raw")?.open??!1;K("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(Ee)}. Kept findings and candidates appear first; failures remain available below.</p>${a}${i}${e?`<p class="proxy-note"><b>About this benchmark:</b> ${Me(e)}</p>`:""}${hC()}${u}${r([...l,...c])}${d}${o.length?`<details class="evidence-failures"${m?" open":""}><summary>Failures (${o.length})</summary>${u}${r(o)}${d}</details>`:""}<h3>${ia()} findings</h3>${v(g)}${h.length?`<details class="evidence-raw"${_?" open":""}><summary>Full recorded findings (${h.length})</summary>${v(h)}</details>`:""}${pC(!1)}`}function pC(t=!0){const e=t?Ps(te,Ee):[],n=qu(te,Ee),i=Cm(Cg(),Ee);return`${e.length?`<h3>Ig Nobel studies</h3>${tg(e,ds())}`:""}${i.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${ng(i,ds())}</div>`:""}${n.length||mC("sources")?`<h3>Research sources</h3>${dR(n,ds())}`:""}`}let hn="now";function Aa(){return{name:t=>Is(t),metric:it?.metric,best:it?.value??null}}function ud(){const t=An().find(b=>b.id===id);if(!t){Ft.close();return}const e=te?fA(te.events,Ee).filter(b=>b.agentId===t.id||b.type==="message.sent"&&(b.payload?.to_agent_id===t.id||b.payload?.to_agent_ids?.includes(t.id))):[],n=hn==="idea"?/hypothesis|propos|question|idea/:hn==="result"?/experiment|observ|discover|reward|evaluat/:hn==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=Hm,r=e.filter(b=>n.test(b.type)&&i(b.message)).slice(-1),s=hn==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=hn==="result"&&t.lastResult?`<blockquote>${Me(t.lastResult.description)}<br>${Me(t.lastResult.status)} · ${Tg(t.lastResult)}<cite>${ia()} result · available by tick ${Math.floor(Ee)}</cite></blockquote>`:"",o=hn==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",l=t.boredom==null?null:Ii(t.boredom),c=te?bS(te.events,t.id,Ee):null,u=Ir(c?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),d=yS(c?.components||t.boredomDetail?.components),f=Cm(Cg(),Ee,t.id),h=hn==="result"||hn==="doing"?t.lastResult?.id&&Sa(te,t.lastResult.id,Ee)?t.lastResult.id:t.focus?.experiment_id&&Sa(te,t.focus.experiment_id,Ee)?t.focus.experiment_id:null:null,g=h?`<button class="inspect-link" data-experiment="${Me(h)}">Inspect experiment →</button>`:"",v=!!te?.manifest.live,p=rd(),m=te?Xm(te.events,Ee):0,_=v?p?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(Ee)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(Ee)}${m?` · ${m} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(Ee)}.`,M=b=>b.type==="message.sent"&&b.agentId!==t.id?`Message from ${Me(Is(b.agentId,"")||"a colleague")}`:`${v?"Published":"Recorded"} ${Me($m(b.type).toLowerCase())}`;K("conversation-tag").textContent=v?p?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",K("conversation-content").innerHTML=`<div class="conversation-person">${_g(t)}<div><h2>${Me(t.name)}</h2><p>${vg(t)}</p></div></div><div class="conversation-questions">${[["now","Now"],["doing","What are you doing?"],["idea","Tell me about your idea"],["result","What did you find?"],["notes","Your research notes"],...f.length?[["talk","Conversation"]]:[]].map(([b,T])=>`<button data-topic="${b}" aria-pressed="${hn===b}">${T}</button>`).join("")}</div><div class="speech-bubble${hn==="talk"||hn==="now"?" history":""}">${hn==="now"?Jm(ed(te,t.id,t.activity||t.state,Ee,Aa()),{...Aa(),esc:Me},it?.metric):hn==="talk"?ng(f,ds(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${Me(o)}<cite>${ia()} proposal · available by tick ${Math.floor(Ee)}</cite></blockquote>`:r.length?r.map(b=>`<blockquote>${Me(b.message)}<cite>${M(b)} · tick ${b.tick}</cite></blockquote>`).join(""):s?`<blockquote>${Me(s)}<cite>${ia()} excerpt · through tick ${Math.floor(Ee)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${ia().toUpperCase()} BOREDOM</span><strong style="color:${l==null?"inherit":Ts(l)}">${l==null?"Not measured":Math.round(l)+"%"}</strong></div>${l==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i style="left:${l}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||d.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${Me(u.label)}</span>`:""}${d.length?`<div class="boredom-components" aria-label="Boredom components">${d.map(b=>`<div><span>${Me(b.label)}</span><i style="--v:${b.value}%"></i><b>${b.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${_}</p>`}function Ag(t){if(Rt="",wi=!1,Tn=!1,di="",Ct(),rd()||(st=!1),id=t,hn="now",Nn(),fi(),Qt(),ud(),An().some(e=>e.id===t)){const e=Ue.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new O(0,2.1,0));if(Ue.camera.lookAt(n),Xt||oi.focus(n),Xt){const i=new Bn().setFromQuaternion(Ue.camera.quaternion,"YXZ");xn=i.y,ti=i.x}}Ft.open||(Ft.show(),Ct()),Rg(),Ft.querySelector("button")?.focus()}}function Rg(){if(!Ft.open)return;const t=Ue.agentPositions?.().find(c=>c.id===id);if(!t){Ft.style.visibility="hidden";return}const e=t.position.clone().add(new O(0,2.35,0));if(Ue.camera.updateMatrixWorld(),e.clone().applyMatrix4(Ue.camera.matrixWorldInverse).z>=0){Ft.style.visibility="hidden";return}Ft.style.visibility="visible",e.project(Ue.camera);const i=(e.x+1)/2*innerWidth,r=(1-e.y)/2*innerHeight,s=Ft.getBoundingClientRect(),a=12,o=At.clamp(i-s.width/2,a,Math.max(a,innerWidth-s.width-a)),l=At.clamp(r-s.height-24,80,Math.max(80,innerHeight-s.height-190));Ft.style.left=`${o}px`,Ft.style.top=`${l}px`,Ft.style.setProperty("--speech-tail",`${At.clamp(i-o,20,s.width-20)}px`)}K("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(hn=e,ud())};K("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&Ag(e)};function Cg(){return te?.events||[]}function mC(t){const e=te?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function Is(t,e){return t?(it?.agents||te?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||te?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function ds(){const t=te?.manifest.id||"";return{esc:Me,name:Is,judging:te?.manifest.judging,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return Dp(n)},experimentLabel:e=>{const n=Sa(te,e,Ee);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let al=null;function Pg(){if(!al)return;const t=Sa(te,al,Ee);K("inspector-content").innerHTML=t?uR(t,ds(),t.studyId?Ps(te,Ee).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function gC(t){st=!1,Qt(),Nn(),fi(),Ft.close();const e=qu(te,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>Ee&&hi(e),cd(),Ea.open||(Ea.showModal(),Ct());const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function Ig(t){st=!1,Qt(),Nn(),al=t,Pg(),Er.open||(Er.showModal(),Ct()),Er.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-orch-tick]");if(n){t.preventDefault(),st=!1;const s=n.dataset.orchAgent,a=Number(n.dataset.orchTick);hi(a);const o=Ue.agentPositions?.().find(l=>l.id===s);if(o){const l=o.position.clone().add(new O(0,2.1,0));Ue.camera.lookAt(l),oi.focus(l)}Mg(s);return}const i=e.closest?.("[data-source]")?.dataset.source;if(i){gC(i);return}const r=e.closest?.("[data-experiment]")?.dataset.experiment;r&&(t.preventDefault(),Ig(r))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),Ig(e.dataset.experiment))});function ol(){Rt&&(Nn(),Tn=!0,di="",Ct())}function dd(){Rt&&(Wi=Rt),Rt="",wi=!1,Tn=!1,di="",K("proximity").hidden=!0,Ct()}function ll(t){return[t.type,t.role].filter(Boolean).some(e=>["conductor","critic","host","baseline","environment","world"].includes(String(e).toLowerCase()))}function _C(t,e=!1){const n=t.clone().add(new O(0,2.1,0)),i=e?innerWidth<760?7.2:6.8:innerWidth<760?4.4:5.2,r=e?3.1:innerWidth<760?2.1:2.5,s=t.z>4?-1:1;Ue.camera.position.set(t.x,t.y+r,t.z+s*i),Ue.camera.position.x=At.clamp(Ue.camera.position.x,-10,10),Ue.camera.position.y=At.clamp(Ue.camera.position.y,1.6,4.3),Ue.camera.position.z=At.clamp(Ue.camera.position.z,-12,11),Ue.camera.lookAt(n),oi.syncFromCamera()}function vC(t){const e=Math.min(...t.map(m=>m.x)),n=Math.max(...t.map(m=>m.x)),i=Math.min(...t.map(m=>m.z)),r=Math.max(...t.map(m=>m.z)),s=(e+n)/2,a=(i+r)/2,o=n-e,l=r-i,c=At.degToRad(Ue.camera.fov),u=Math.tan(c/2)*Ue.camera.aspect,d=o/Math.max(.1,2*u),f=2.6+l*.26,h=f/Math.max(.1,2*Math.tan(c/2)),g=innerWidth<760?8.4:7,v=Math.max(g,l/2+d+1.1,h+1),p=new O(s,1.35,a);Ue.camera.position.set(s,p.y+v*.26,a+v),Ue.camera.lookAt(p),oi.syncFromCamera()}function fd(t,e=!1){const n=Ue.agentPositions?.().find(r=>r.id===t);if(!n)return;const i=n.position.clone().add(new O(0,2.1,0));if(!Xt)_C(n.position,e);else if(Xt){Ue.camera.lookAt(i);const r=new Bn().setFromQuaternion(Ue.camera.quaternion,"YXZ");xn=r.y,ti=r.x}Mg(t,e)}K("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){dd();return}if(n?.hasAttribute("data-bubble-more")){Rt&&Ag(Rt);return}if(n?.hasAttribute("data-bubble-expand")){ol();return}Tn||ol()});K("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");e&&fd(e.dataset.agent)});Er.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);K("close-inspector").onclick=()=>Er.close();Er.addEventListener("close",()=>{al=null});K("close-results").onclick=()=>wr.close();K("open-results").onclick=()=>{st=!1,Qt(),Nn(),pu(),wr.showModal(),Ct()};K("open-about").onclick=()=>{const t=Yi!=="about-drawer",e=K("about-drawer"),n=K("open-about");Nn(),fi(),t&&(st=!1,Qt(),e.innerHTML=RA(Io,wA(te),Me,te?.manifest||null,te),e.hidden=!1,Yi="about-drawer",e.querySelector("[data-close-drawer]").onclick=fi,n.setAttribute("aria-expanded","true"),Ct())};K("results-content").addEventListener("click",t=>{t.target.closest("[data-open-evidence]")&&(wr.close(),K("open-console").click())});K("close-conversation").onclick=()=>{Ft.close(),Ut.domElement.focus()};K("close-console").onclick=()=>Ea.close();K("close-guide").onclick=()=>ug.close();const Lg=K("qr-dialog");K("qr-image").src=VA;K("close-qr").onclick=()=>Lg.close();K("open-qr").onclick=()=>{st=!1,Qt(),Nn(),fi(),Lg.showModal(),Ct()};K("open-console").onclick=()=>{st=!1,Qt(),Nn(),fi(),cd(),Ea.showModal(),Ct()};K("open-guide").onclick=()=>{st=!1,Qt(),Nn(),fi(),ug.showModal(),Ct()};K("play").onclick=()=>{if(te){if(!st){if(Ft.close(),!te.manifest.live&&Ee>=te.manifest.totalTicks){const t=Ji==="highlights"?Qu(te):0;us=0,hi(t)}Xt&&La(!1)}st=!st,Qt()}};K("camera-mode").onclick=()=>La(!Xt);K("collapse-bar").onclick=()=>{fg=!0,Ss(!document.body.classList.contains("bar-collapsed"))};Ss(Nm());Ct();window.addEventListener("resize",()=>{fg||Ss(Nm()),Ct()});K("timeline").oninput=()=>{st=!1,Ji="full",K("replay-mode").value="full",hi(Number(K("timeline").value)),Ar=Ee,ld("scrub")};K("replay-mode").onchange=()=>{Ji=K("replay-mode").value;const t=te&&gs&&Ji==="highlights"?Qu(te):0;Ee=t,us=0,nd=te?qm(te,t):[],hi(t),st=!!te,Qt()};K("go-live").onclick=()=>{te?.manifest.live&&(Ft.close(),Xt&&La(!1),st=!0,hi(te.manifest.totalTicks),sd())};K("pace").onchange=()=>{Oo=Number(K("pace").value)};function xC(t){gg=Ym(t),Fo=aR(t,Ue.bounds,Ue.colliders)}function Ng(){const t=Pa(Fo,Ee);if(!t)return new Map;if(Ee<=0)return t.positions;const e=Fo[Fo.indexOf(t)+1];if(!e)return t.positions;const n=(Ee-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function Dg(t,e=!1){const n=++Rh;e||(st=!1,fu=!1,wr.close(),K("connection").textContent="LOADING RUN");try{const i=await _A(el,t,dg.find(l=>l.id===t)?.contentVersion||"2",te);if(n!==Rh)return;const r=Ee,s=rd();te=i,mg(),YR(i),i.frames.sort((l,c)=>l.tick-c.tick),i.events.sort((l,c)=>l.tick-c.tick),xC(i),KR(),K("timeline").max=String(i.manifest.totalTicks),K("timeline").disabled=!1,K("play").disabled=!1,K("replay-title").textContent=Ta(ju(i.manifest)),K("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),K("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),K("timeline-markers").innerHTML=i.events.filter(l=>/experiment.finished|discovery|study.completed|award/.test(l.type)).map(l=>`<i${/discovery|award/.test(l.type)?' class="best"':""} style="left:${l.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),K("run-picker").value=t,e||La(!1);const a=e?tR(r,i.manifest,s):eR(i.manifest);e||(st=wa,Ar=a),hi(a),e&&s?sd():e||(Ar=Ee),Qt(),gs&&!e?(rl=!0,sl()):e||Eg();const o=new URL(location.href);o.searchParams.set("recording",t),o.searchParams.delete("run"),history.replaceState(null,"",o)}catch(i){K("connection").textContent="ARCHIVE UNAVAILABLE",yr(i.message),e||(rl=!0,sl())}}async function Ug(){try{const t=lA(await el("/recordings"));if(dg=t,K("run-picker").innerHTML=MA(t,Me)||"<option>No artificial scientist swarm recordings available</option>",te)K("run-picker").value=te.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await Dg(oA(t,e))}else t.length||(K("connection").textContent="NO SWARM RECORDINGS",K("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){K("connection").textContent="ARCHIVE UNAVAILABLE",K("replay-title").textContent="Archive unavailable",yr(t.message)}}K("refresh-runs").onclick=()=>Ug();async function Og(){}K("launch-openai").onclick=async()=>{if(K("launch-openai").dataset.running==="true"){try{await el("/openai-runs/stop",{method:"POST"}),yr("Stopping: current work will finish; no new work will start.")}catch(t){yr(t.message)}return}if(confirm("Start a live Sol + Luna Ig Nobel run? It calls the OpenAI API and may spend up to the server cost cap.")){try{const t=await el("/openai-runs",{method:"POST",body:JSON.stringify({minutes:30})});yr(`Started ${t.name}; it appears in RUNS as workers start.`)}catch(t){yr(t.message)}Og()}};Og();K("run-picker").onchange=()=>Dg(K("run-picker").value);K("refresh-runs").hidden=!0,document.body.classList.add("static-site");function Fh(t,e){const i=Ue.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||Ue.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),bn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>bn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(Tn){Tn=!1,di="",Ct();return}if(wi||Rt){dd(),Nn();return}Ft.close(),fi(),Nn()}if(!(yn()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Rt){t.preventDefault(),ol();return}t.code==="Enter"&&Rt&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),ol()),["KeyW","KeyA","KeyS","KeyD",...Xt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault(),bn.add(t.code)}});window.addEventListener("keyup",t=>bn.delete(t.code));window.addEventListener("blur",()=>{bn.clear(),na=!1,$i=null,st=!1,Qt()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);if(n=s,st&&te){if(Ji==="highlights"){us+=a*1e3*4/Oo;const h=75e3*4/Oo;Ee=sR(nd,us,h),us>=h&&(Ee=te.manifest.totalTicks,st=!1)}else Ee=dA(Ee,a,Oo,te.manifest.totalTicks,te.manifest.tickDurationMs);Ji==="full"&&!uA(te.manifest,Ee)&&(st=!1),Math.floor(Ee)!==i?(hi(Ee),i=Math.floor(Ee),sd()):Qt()}const o=Ue.camera;if(!Xt&&!yn()&&!Ft.open&&oi.update(a,bn),Xt&&!yn()){({yaw:xn,pitch:ti}=Ip(xn,ti,a,bn));const h=Number(bn.has("KeyW"))-Number(bn.has("KeyS")),g=Number(bn.has("KeyD"))-Number(bn.has("KeyA"));if(h||g){const v=(bn.has("ShiftLeft")||bn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(h,g),p=(-Math.sin(xn)*h+Math.cos(xn)*g)*v,m=(-Math.cos(xn)*h-Math.sin(xn)*g)*v;Fh(o.position.x+p,o.position.z)||(o.position.x+=p),Fh(o.position.x,o.position.z+m)||(o.position.z+=m)}o.rotation.set(ti,xn,0,"YXZ")}const l=Ng(),c=An(),u=lR(te?.events||[],Ee,c,Ta,100);if(Ue.update(Ee*(te?.manifest.tickDurationMs||700)/1e3,{progress:it?.progress||0,boredom:0,running:st,replay:!0,finale:bs(te,Ee),reducedMotion:Nh,agents:c.map(h=>({...h,boredom:h.boredom==null?null:Ii(h.boredom),regime:h.boredomSpectrum?.regime,state:l.get(h.id)?.atLab?"working":h.state,stationId:l.get(h.id)?.atTable?"culture":du({...h,state:"working",activity:"experimenting"}),discussionBrief:l.get(h.id)?.atTable?u.get(h.id)?.brief:void 0,discussionPeers:u.get(h.id)?.peers,ideaBrief:gS(Ta(h.lastIdea||h.lastQuestion||h.lastObservation||"")),position:bs(te,Ee)?void 0:l.get(h.id)}))}),wa&&!zn&&c.length&&!yn()&&od(),K("coach-mark").hidden=yn()||!zn||zn==="done",dC(),da){const h=(s-Ch)/(Nh?300:gs?1600:2200);Ue.grow?.(Math.min(1,h)),h>=1&&(da=!1,document.body.classList.remove("world-growing"))}const d=bi;if(Xt&&!yn()){o.getWorldDirection(r),r.y=0,r.normalize();const h=(Ue.agentPositions?.()||[]).map(g=>{const v=g.position.clone().sub(o.position);v.y=0;const p=v.length();return{id:g.id,distance:p,facing:p?v.normalize().dot(r):1}});bi=mR(h,bi)}else bi="";Wi&&bi!==Wi&&(Wi="");const f=wi?Rt:bi===Wi?"":bi;f!==Rt&&(Rt=f,Tn=!1,di=""),d!==bi&&!wi&&bi&&(Wi=""),sC(),Ut.render(Ue.scene,o),Rg()};Ue=wS(),Ch=performance.now(),da=!0,document.body.classList.add("world-growing"),Ue.grow?.(0),Ut=new pS({antialias:!0,powerPreference:"high-performance"}),Ut.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),Ut.setSize(innerWidth,innerHeight),Ut.toneMapping=_u,Ut.toneMappingExposure=Ue.exposure??1,Ut.outputColorSpace=kt,K("world").appendChild(Ut.domElement),Ut.domElement.tabIndex=0,Ut.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),Ue.camera.rotation.order="YXZ",oi=new mS(Ue.camera),La(!1),Ut.domElement.onclick=()=>{if(Xt&&!yn()&&!Ft.open&&!wi)try{Ut.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},Ut.domElement.onpointerdown=s=>{yn()||(na=!0,_o={x:s.clientX,y:s.clientY},$i={x:s.clientX,y:s.clientY,canvas:s.target===Ut.domElement,pointerType:s.pointerType},Xt||Ut.domElement.setPointerCapture(s.pointerId))},Ut.domElement.onpointermove=s=>{if(!na||document.pointerLockElement||yn())return;const a=s.clientX-_o.x,o=s.clientY-_o.y;Xt?{yaw:xn,pitch:ti}=qc(xn,ti,a,o):oi.dragBy(a,o),_o={x:s.clientX,y:s.clientY}},Ut.domElement.onpointercancel=()=>{na=!1,$i=null},window.addEventListener("pointerup",s=>{if($i?.canvas&&Math.hypot(s.clientX-$i.x,s.clientY-$i.y)<10&&!yn()){const a=Ue.camera;a.updateMatrixWorld();let o=null;for(const l of Ue.agentPositions?.()||[]){if(!An().some(v=>v.id===l.id))continue;const c=l.position.clone().add(new O(0,2.35,0));if(c.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;c.project(a);const d=(c.x+1)*innerWidth/2,f=(1-c.y)*innerHeight/2,h=Math.hypot(s.clientX-d,s.clientY-f),g=$i.pointerType==="touch"?84:64;h<g&&(!o||h<o.distance)&&(o={id:l.id,distance:h})}o?fd(o.id):(Rt="",wi=!1,Tn=!1,di="",Ct())}$i=null,na=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&Xt&&!yn()&&({yaw:xn,pitch:ti}=qc(xn,ti,s.movementX,s.movementY))});const e=()=>{Ue.camera.aspect=innerWidth/innerHeight,Ue.camera.updateProjectionMatrix(),Ut.setSize(innerWidth,innerHeight)};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new O;ad(),t(),gs&&setTimeout(()=>{pg=!0,sl()},1500),Ug()}catch(t){console.error(t),K("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
