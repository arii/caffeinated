(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Tu="187",n0=0,Id=1,i0=2,Ao=1,r0=2,aa=3,Nr=0,vn=1,zn=2,us=0,fa=1,Ld=2,Nd=3,Dd=4,s0=5,ls=100,a0=101,o0=102,l0=103,c0=104,u0=200,d0=201,f0=202,h0=203,Kh=204,Jh=205,p0=206,m0=207,g0=208,_0=209,v0=210,x0=211,y0=212,b0=213,S0=214,gc=0,_c=1,vc=2,ya=3,xc=4,yc=5,bc=6,Sc=7,Qh=0,M0=1,E0=2,Ri=0,ep=1,tp=2,np=3,Au=4,ip=5,rp=6,sp=7,ap=300,vs=301,ba=302,Cl=303,Pl=304,Xo=1e3,wi=1001,Mc=1002,nn=1003,w0=1004,Wa=1005,wn=1006,Il=1007,qi=1008,Ln=1009,op=1010,lp=1011,Sa=1012,Ru=1013,di=1014,qn=1015,fi=1016,Cu=1017,Pu=1018,xs=1020,cp=35902,up=35899,dp=1021,fp=1022,oi=1023,Qi=1026,ji=1027,Iu=1028,Lu=1029,Dr=1030,Nu=1031,Du=1033,Ro=33776,Co=33777,Po=33778,Io=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37488,Lc=37489,Zo=37490,Nc=37491,Dc=37808,Uc=37809,kc=37810,Oc=37811,Fc=37812,zc=37813,Bc=37814,$c=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,Zc=37821,qc=36492,jc=36494,Yc=36495,Kc=36283,Jc=36284,qo=36285,Qc=36286,T0=3200,eu=0,A0=1,Xi="",Gt="srgb",jo="srgb-linear",Yo="linear",pt="srgb",Ll=7680,R0=519,C0=512,P0=513,I0=514,hp=515,L0=516,N0=517,pp=518,mp=519,gp=35044,Ud="300 es",jn=2e3,Ma=2001;function D0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ko(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function U0(){const t=Ko("canvas");return t.style.display="block",t}const kd={};function Jo(...t){const e="THREE."+t.shift();console.log(e,...t)}function _p(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ve(...t){t=_p(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=_p(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function ds(...t){const e=t.join(" ");e in kd||(kd[e]=!0,Ve(...t))}function k0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const O0={[gc]:gc,[vc]:bc,[xc]:xc,[ya]:yc,[_c]:_c,[bc]:vc,[Sc]:Sc,[yc]:ya};class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Od=1234567;const ha=Math.PI/180,Ea=180/Math.PI;function nr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Uu(t,e){return(t%e+e)%e}function F0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function z0(t,e,n){return t!==e?(n-t)/(e-t):0}function pa(t,e,n){return(1-n)*t+n*e}function B0(t,e,n,i){return pa(t,e,1-Math.exp(-n*i))}function $0(t,e=1){return e-Math.abs(Uu(t,e*2)-e)}function H0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function G0(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function V0(t,e){return t+Math.floor(Math.random()*(e-t+1))}function W0(t,e){return t+Math.random()*(e-t)}function X0(t){return t*(.5-Math.random())}function Z0(t){t!==void 0&&(Od=t);let e=Od+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function q0(t){return t*ha}function j0(t){return t*Ea}function Y0(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function K0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function J0(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*d,l*f,o*c);break;case"YZY":t.set(l*f,o*u,l*d,o*c);break;case"ZXZ":t.set(l*d,l*f,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*h,o*c);break;case"YXY":t.set(l*h,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*h,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function vl(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ku(t,e){if(e.constructor===Float32Array)return t;const n=vl(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Ou(t,e){if(e.constructor===Float32Array)return t;const n=vl(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Et={DEG2RAD:ha,RAD2DEG:Ea,generateUUID:nr,clamp:Qe,euclideanModulo:Uu,mapLinear:F0,inverseLerp:z0,lerp:pa,damp:B0,pingpong:$0,smoothstep:H0,smootherstep:G0,randInt:V0,randFloat:W0,randFloatSpread:X0,seededRandom:Z0,degToRad:q0,radToDeg:j0,isPowerOfTwo:Y0,ceilPowerOfTwo:K0,floorPowerOfTwo:vp,setQuaternionFromProperEuler:J0,normalize:Ou,denormalize:ku},wd=class wd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wd.prototype.isVector2=!0;let Ze=wd;class Cs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],g=s[a+2],v=s[a+3];if(d!==v||l!==f||c!==h||u!==g){let p=l*f+c*h+u*g+d*v;p<0&&(f=-f,h=-h,g=-g,v=-v,p=-p);let m=1-o;if(p<.9995){const _=Math.acos(p),M=Math.sin(_);m=Math.sin(m*_)/M,o=Math.sin(o*_)/M,l=l*m+f*o,c=c*m+h*o,u=u*m+g*o,d=d*m+v*o}else{l=l*m+f*o,c=c*m+h*o,u=u*m+g*o,d=d*m+v*o;const _=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=_,c*=_,u*=_,d*=_}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*d+l*h-c*f,e[n+1]=l*g+u*f+c*d-o*h,e[n+2]=c*g+u*h+o*f-l*d,e[n+3]=u*g-o*d-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),d=o(s/2),f=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d+f*h*g;break;case"YZX":this._x=f*u*d+c*h*g,this._y=c*h*d+f*u*g,this._z=c*u*g-f*h*d,this._w=c*u*d-f*h*g;break;case"XZY":this._x=f*u*d-c*h*g,this._y=c*h*d-f*u*g,this._z=c*u*g+f*h*d,this._w=c*u*d+f*h*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Td=class Td{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+l*c+a*d-o*u,this.y=i+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Td.prototype.isVector3=!0;let k=Td;const Nl=new k,Fd=new Cs,Ad=class Ad{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],v=r[0],p=r[3],m=r[6],_=r[1],M=r[4],b=r[7],T=r[2],R=r[5],x=r[8];return s[0]=a*v+o*_+l*T,s[3]=a*p+o*M+l*R,s[6]=a*m+o*b+l*x,s[1]=c*v+u*_+d*T,s[4]=c*p+u*M+d*R,s[7]=c*m+u*b+d*x,s[2]=f*v+h*_+g*T,s[5]=f*p+h*M+g*R,s[8]=f*m+h*b+g*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,f=o*l-u*s,h=c*s-a*l,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=f*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Dl.makeScale(e,n)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Dl.makeRotation(-e)),this}translate(e,n){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Dl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ad.prototype.isMatrix3=!0;let We=Ad;const Dl=new We,zd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Q0(){const t={enabled:!0,workingColorSpace:jo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=fs(r.r),r.g=fs(r.g),r.b=fs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Xi?Yo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[jo]:{primaries:e,whitePoint:i,transfer:Yo,toXYZ:zd,fromXYZ:Bd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Gt},outputColorSpaceConfig:{drawingBufferColorSpace:Gt}},[Gt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:zd,fromXYZ:Bd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Gt}}}),t}const it=Q0();function Ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function fs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class e_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Gr===void 0&&(Gr=Ko("canvas")),Gr.width=e.width,Gr.height=e.height;const r=Gr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Gr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ko("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ci(n[i]/255)*255):n[i]=Ci(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let t_=0;class Fu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:t_++}),this.uuid=nr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Ul(r[a].image)):s.push(Ul(r[a]))}else s=Ul(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ul(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?e_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let n_=0;const kl=new k;class dn extends Fr{constructor(e=dn.DEFAULT_IMAGE,n=dn.DEFAULT_MAPPING,i=wi,r=wi,s=wn,a=qi,o=oi,l=Ln,c=dn.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:n_++}),this.uuid=nr(),this.name="",this.source=new Fu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kl).x}get height(){return this.source.getSize(kl).y}get depth(){return this.source.getSize(kl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ap)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xo:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Mc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xo:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Mc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=ap;dn.DEFAULT_ANISOTROPY=1;const Rd=class Rd{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],f=l[1],h=l[5],g=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(u-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,b=(h+1)/2,T=(m+1)/2,R=(u+f)/4,x=(d+v)/4,S=(g+p)/4;return M>b&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=R/i,s=x/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=R/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=x/s,r=S/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-g)*(p-g)+(d-v)*(d-v)+(f-u)*(f-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(d-v)/_,this.z=(f-u)/_,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rd.prototype.isVector4=!0;let Ct=Rd;class i_ extends Fr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:wn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new dn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:wn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Fu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends i_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xp extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class r_ extends dn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const _l=class _l{constructor(e,n,i,r,s,a,o,l,c,u,d,f,h,g,v,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,d,f,h,g,v,p)}set(e,n,i,r,s,a,o,l,c,u,d,f,h,g,v,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _l().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Vr.setFromMatrixColumn(e,0).length(),s=1/Vr.setFromMatrixColumn(e,1).length(),a=1/Vr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,v=o*d;n[0]=l*u,n[4]=-l*d,n[8]=c,n[1]=h+g*c,n[5]=f-v*c,n[9]=-o*l,n[2]=v-f*c,n[6]=g+h*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*u,h=l*d,g=c*u,v=c*d;n[0]=f+v*o,n[4]=g*o-h,n[8]=a*c,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=v+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*u,h=l*d,g=c*u,v=c*d;n[0]=f-v*o,n[4]=-a*d,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=v-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,v=o*d;n[0]=l*u,n[4]=g*c-h,n[8]=f*c+v,n[1]=l*d,n[5]=v*c+f,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,h=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=v-f*d,n[8]=g*d+h,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*d+g,n[10]=f-v*d}else if(e.order==="XZY"){const f=a*l,h=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=-d,n[8]=c*u,n[1]=f*d+v,n[5]=a*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=o*u,n[10]=v*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(s_,e,a_)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),ki.crossVectors(i,Cn),ki.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),ki.crossVectors(i,Cn)),ki.normalize(),Xa.crossVectors(Cn,ki),r[0]=ki.x,r[4]=Xa.x,r[8]=Cn.x,r[1]=ki.y,r[5]=Xa.y,r[9]=Cn.y,r[2]=ki.z,r[6]=Xa.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],v=i[6],p=i[10],m=i[14],_=i[3],M=i[7],b=i[11],T=i[15],R=r[0],x=r[4],S=r[8],O=r[12],N=r[1],A=r[5],$=r[9],B=r[13],C=r[2],G=r[6],V=r[10],H=r[14],de=r[3],Y=r[7],le=r[11],fe=r[15];return s[0]=a*R+o*N+l*C+c*de,s[4]=a*x+o*A+l*G+c*Y,s[8]=a*S+o*$+l*V+c*le,s[12]=a*O+o*B+l*H+c*fe,s[1]=u*R+d*N+f*C+h*de,s[5]=u*x+d*A+f*G+h*Y,s[9]=u*S+d*$+f*V+h*le,s[13]=u*O+d*B+f*H+h*fe,s[2]=g*R+v*N+p*C+m*de,s[6]=g*x+v*A+p*G+m*Y,s[10]=g*S+v*$+p*V+m*le,s[14]=g*O+v*B+p*H+m*fe,s[3]=_*R+M*N+b*C+T*de,s[7]=_*x+M*A+b*G+T*Y,s[11]=_*S+M*$+b*V+T*le,s[15]=_*O+M*B+b*H+T*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],v=e[7],p=e[11],m=e[15],_=l*h-c*f,M=o*h-c*d,b=o*f-l*d,T=a*h-c*u,R=a*f-l*u,x=a*d-o*u;return n*(v*_-p*M+m*b)-i*(g*_-p*T+m*R)+r*(g*M-v*T+m*x)-s*(g*b-v*R+p*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],v=e[13],p=e[14],m=e[15],_=n*o-i*a,M=n*l-r*a,b=n*c-s*a,T=i*l-r*o,R=i*c-s*o,x=r*c-s*l,S=u*v-d*g,O=u*p-f*g,N=u*m-h*g,A=d*p-f*v,$=d*m-h*v,B=f*m-h*p,C=_*B-M*$+b*A+T*N-R*O+x*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/C;return e[0]=(o*B-l*$+c*A)*G,e[1]=(r*$-i*B-s*A)*G,e[2]=(v*x-p*R+m*T)*G,e[3]=(f*R-d*x-h*T)*G,e[4]=(l*N-a*B-c*O)*G,e[5]=(n*B-r*N+s*O)*G,e[6]=(p*b-g*x-m*M)*G,e[7]=(u*x-f*b+h*M)*G,e[8]=(a*$-o*N+c*S)*G,e[9]=(i*N-n*$-s*S)*G,e[10]=(g*R-v*b+m*_)*G,e[11]=(d*b-u*R-h*_)*G,e[12]=(o*O-a*A-l*S)*G,e[13]=(n*A-i*O+r*S)*G,e[14]=(v*M-g*T-p*_)*G,e[15]=(u*T-d*M+f*_)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,d=o+o,f=s*c,h=s*u,g=s*d,v=a*u,p=a*d,m=o*d,_=l*c,M=l*u,b=l*d,T=i.x,R=i.y,x=i.z;return r[0]=(1-(v+m))*T,r[1]=(h+b)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(h-b)*R,r[5]=(1-(f+m))*R,r[6]=(p+_)*R,r[7]=0,r[8]=(g+M)*x,r[9]=(p-_)*x,r[10]=(1-(f+v))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Vr.set(r[0],r[1],r[2]).length();const o=Vr.set(r[4],r[5],r[6]).length(),l=Vr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Wn.copy(this);const c=1/a,u=1/o,d=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=d,Wn.elements[9]*=d,Wn.elements[10]*=d,n.setFromRotationMatrix(Wn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=jn,l=!1){const c=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===jn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===Ma)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=jn,l=!1){const c=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===jn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===Ma)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};_l.prototype.isMatrix4=!0;let xt=_l;const Vr=new k,Wn=new xt,s_=new k(0,0,0),a_=new k(1,1,1),ki=new k,Xa=new k,Cn=new k,$d=new xt,Hd=new Cs;class Hn{constructor(e=0,n=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hd.setFromEuler(this),this.setFromQuaternion(Hd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class yp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let o_=0;const Gd=new k,Wr=new Cs,vi=new xt,Za=new k,$s=new k,l_=new k,c_=new Cs,Vd=new k(1,0,0),Wd=new k(0,1,0),Xd=new k(0,0,1),Zd={type:"added"},u_={type:"removed"},Xr={type:"childadded",child:null},Ol={type:"childremoved",child:null};class Kt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:o_++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new k,n=new Hn,i=new Cs,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.multiply(Wr),this}rotateOnWorldAxis(e,n){return Wr.setFromAxisAngle(e,n),this.quaternion.premultiply(Wr),this}rotateX(e){return this.rotateOnAxis(Vd,e)}rotateY(e){return this.rotateOnAxis(Wd,e)}rotateZ(e){return this.rotateOnAxis(Xd,e)}translateOnAxis(e,n){return Gd.copy(e).applyQuaternion(this.quaternion),this.position.add(Gd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vd,e)}translateY(e){return this.translateOnAxis(Wd,e)}translateZ(e){return this.translateOnAxis(Xd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Za.copy(e):Za.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt($s,Za,this.up):vi.lookAt(Za,$s,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Wr.setFromRotationMatrix(vi),this.quaternion.premultiply(Wr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zd),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(u_),Ol.child=e,this.dispatchEvent(Ol),Ol.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zd),Xr.child=e,this.dispatchEvent(Xr),Xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,l_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,c_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Kt.DEFAULT_UP=new k(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class si extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d_={type:"move"};class Fl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new si,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new si,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new si,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;c.inputState.pinching&&f>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(d_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new si;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const bp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},qa={h:0,s:0,l:0};function zl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=Uu(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=zl(a,s,e+1/3),this.g=zl(a,s,e),this.b=zl(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Gt){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Gt){const i=bp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return it.workingToColorSpace(cn.copy(this),e),Math.round(Qe(cn.r*255,0,255))*65536+Math.round(Qe(cn.g*255,0,255))*256+Math.round(Qe(cn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Gt){it.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==Gt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(qa);const i=pa(Oi.h,qa.h,n),r=pa(Oi.s,qa.s,n),s=pa(Oi.l,qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new Ye;Ye.NAMES=bp;class zu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=n,this.far=i}clone(){return new zu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class f_ extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Xn=new k,xi=new k,Bl=new k,yi=new k,Zr=new k,qr=new k,qd=new k,$l=new k,Hl=new k,Gl=new k,Vl=new Ct,Wl=new Ct,Xl=new Ct;class Bn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),xi.subVectors(i,n),Bl.subVectors(e,n);const a=Xn.dot(Xn),o=Xn.dot(xi),l=Xn.dot(Bl),c=xi.dot(xi),u=xi.dot(Bl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Vl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Vl.fromBufferAttribute(e,n),Wl.fromBufferAttribute(e,i),Xl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Vl,s.x),a.addScaledVector(Wl,s.y),a.addScaledVector(Xl,s.z),a}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),xi.subVectors(e,n),Xn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Xn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,i),qr.subVectors(s,i),$l.subVectors(e,i);const l=Zr.dot($l),c=qr.dot($l);if(l<=0&&c<=0)return n.copy(i);Hl.subVectors(e,r);const u=Zr.dot(Hl),d=qr.dot(Hl);if(u>=0&&d<=u)return n.copy(r);const f=l*d-u*c;if(f<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(Zr,a);Gl.subVectors(e,s);const h=Zr.dot(Gl),g=qr.dot(Gl);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(qr,o);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return qd.subVectors(s,r),o=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(qd,o);const m=1/(p+v+f);return a=v*m,o=f*m,n.copy(i).addScaledVector(Zr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class zr{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zn):Zn.fromBufferAttribute(s,a),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ja.copy(i.boundingBox)),ja.applyMatrix4(e.matrixWorld),this.union(ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hs),Ya.subVectors(this.max,Hs),jr.subVectors(e.a,Hs),Yr.subVectors(e.b,Hs),Kr.subVectors(e.c,Hs),Fi.subVectors(Yr,jr),zi.subVectors(Kr,Yr),fr.subVectors(jr,Kr);let n=[0,-Fi.z,Fi.y,0,-zi.z,zi.y,0,-fr.z,fr.y,Fi.z,0,-Fi.x,zi.z,0,-zi.x,fr.z,0,-fr.x,-Fi.y,Fi.x,0,-zi.y,zi.x,0,-fr.y,fr.x,0];return!Zl(n,jr,Yr,Kr,Ya)||(n=[1,0,0,0,1,0,0,0,1],!Zl(n,jr,Yr,Kr,Ya))?!1:(Ka.crossVectors(Fi,zi),n=[Ka.x,Ka.y,Ka.z],Zl(n,jr,Yr,Kr,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new k,new k,new k,new k,new k,new k,new k,new k],Zn=new k,ja=new zr,jr=new k,Yr=new k,Kr=new k,Fi=new k,zi=new k,fr=new k,Hs=new k,Ya=new k,Ka=new k,hr=new k;function Zl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){hr.fromArray(t,s);const o=r.x*Math.abs(hr.x)+r.y*Math.abs(hr.y)+r.z*Math.abs(hr.z),l=e.dot(hr),c=n.dot(hr),u=i.dot(hr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Bt=new k,Ja=new Ze;let h_=0;class Pi extends Fr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:h_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=gp,this.updateRanges=[],this.gpuType=qn,this.version=0,this._normalizationScale=e!==void 0?vl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ja.fromBufferAttribute(this,n),Ja.applyMatrix3(e),this.setXY(n,Ja.x,Ja.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix3(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyMatrix4(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.applyNormalMatrix(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bt.fromBufferAttribute(this,n),Bt.transformDirection(e),this.setXYZ(n,Bt.x,Bt.y,Bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):ku(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Ou(e,this.array)}}class Sp extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Mp extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Jt extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const p_=new zr,Gs=new k,ql=new k;class ka{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):p_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Gs.subVectors(e,this.center);const n=Gs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Gs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ql.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Gs.copy(e.center).add(ql)),this.expandByPoint(Gs.copy(e.center).sub(ql))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let m_=0;const Un=new xt,jl=new Kt,Jr=new k,Pn=new zr,Vs=new zr,jt=new k;class Jn extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D0(e)?Mp:Sp)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Jt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ka);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Vs.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Pn.min,Vs.min),Pn.expandByPoint(jt),jt.addVectors(Pn.max,Vs.max),Pn.expandByPoint(jt)):(Pn.expandByPoint(Vs.min),Pn.expandByPoint(Vs.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)jt.fromBufferAttribute(o,c),l&&(Jr.fromBufferAttribute(e,c),jt.add(Jr)),r=Math.max(r,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new k,l[O]=new k;const u=new k,d=new k,f=new k,h=new Ze,g=new Ze,v=new Ze,p=new k,m=new k;function _(O,N,A){c[O]=c[N]=c[A]=1,u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,N),f.fromBufferAttribute(i,A),h.fromBufferAttribute(s,O),g.fromBufferAttribute(s,N),v.fromBufferAttribute(s,A),d.sub(u),f.sub(u),g.sub(h),v.sub(h);const $=1/(g.x*v.y-v.x*g.y);isFinite($)&&(p.copy(d).multiplyScalar(v.y).addScaledVector(f,-g.y).multiplyScalar($),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar($),o[O].add(p),o[N].add(p),o[A].add(p),l[O].add(m),l[N].add(m),l[A].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,N=M.length;O<N;++O){const A=M[O],$=A.start,B=A.count;for(let C=$,G=$+B;C<G;C+=3)_(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const b=new k,T=new k,R=new k,x=new k;function S(O){R.fromBufferAttribute(r,O),x.copy(R);const N=o[O];b.copy(N),b.sub(R.multiplyScalar(R.dot(N))).normalize(),T.crossVectors(x,N);const $=T.dot(l[O])<0?-1:1;a.setXYZW(O,b.x,b.y,b.z,$)}for(let O=0,N=i.count;O<N;++O)c[O]&&S(O);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,d=new k;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),v=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,f=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*u;for(let m=0;m<u;m++)f[g++]=c[h++]}return new Pi(f,u,d)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Jn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const f=c[u],h=e(f,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,f=c.length;d<f;d++){const h=c[d];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class g_{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=gp,this.updateRanges=[],this.version=0,this.uuid=nr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=jd(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=jd(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function jd(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=nr()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const hn=new k;class Qo{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?vl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyMatrix4(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.applyNormalMatrix(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)hn.fromBufferAttribute(this,n),hn.transformDirection(e),this.setXYZ(n,hn.x,hn.y,hn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Jo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Pi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Qo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Jo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):ku(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Ou(e,this.data.array)}}const Yl=new k,__=new k,v_=new We;class Vi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Yl.subVectors(i,n).cross(__.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Yl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||v_.getNormalMatrix(e),r=this.coplanarPoint(Yl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let x_=0;class Ps extends Fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x_++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=fa,this.side=Nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Kh,this.blendDst=Jh,this.blendEquation=ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=ya,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=R0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Vi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lo extends Ps{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Qr;const Ws=new k,es=new k,ts=new k,ns=new Ze,Xs=new Ze,Ep=new xt,Qa=new k,Zs=new k,eo=new k,Yd=new Ze,Kl=new Ze,Kd=new Ze;class Jl extends Kt{constructor(e=new Lo){if(super(),this.isSprite=!0,this.type="Sprite",Qr===void 0){Qr=new Jn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new g_(n,5);Qr.setIndex([0,1,2,0,2,3]),Qr.setAttribute("position",new Qo(i,3,0,!1)),Qr.setAttribute("uv",new Qo(i,2,3,!1))}this.geometry=Qr,this.material=e,this.center=new Ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),es.setFromMatrixScale(this.matrixWorld),Ep.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&es.multiplyScalar(-ts.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;to(Qa.set(-.5,-.5,0),ts,a,es,r,s),to(Zs.set(.5,-.5,0),ts,a,es,r,s),to(eo.set(.5,.5,0),ts,a,es,r,s),Yd.set(0,0),Kl.set(1,0),Kd.set(1,1);let o=e.ray.intersectTriangle(Qa,Zs,eo,!1,Ws);if(o===null&&(to(Zs.set(-.5,.5,0),ts,a,es,r,s),Kl.set(0,1),o=e.ray.intersectTriangle(Qa,eo,Zs,!1,Ws),o===null))return;const l=e.ray.origin.distanceTo(Ws);l<e.near||l>e.far||n.push({distance:l,point:Ws.clone(),uv:Bn.getInterpolation(Ws,Qa,Zs,eo,Yd,Kl,Kd,new Ze),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function to(t,e,n,i,r,s){ns.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Xs.x=s*ns.x-r*ns.y,Xs.y=r*ns.x+s*ns.y):Xs.copy(ns),t.copy(e),t.x+=Xs.x,t.y+=Xs.y,t.applyMatrix4(Ep)}const Si=new k,Ql=new k,no=new k,io=new k;class y_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Ql.copy(e).add(n).multiplyScalar(.5),no.copy(n).sub(e).normalize(),io.copy(this.origin).sub(Ql);const s=e.distanceTo(n)*.5,a=-this.direction.dot(no),o=io.dot(this.direction),l=-io.dot(no),c=io.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*l-o,f=a*o-l,g=s*u,d>=0)if(f>=-g)if(f<=g){const v=1/u;d*=v,f*=v,h=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),h=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),h=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Ql).addScaledVector(no,f),h}intersectSphere(e,n){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=n.x-a.x,v=n.y-a.y,p=n.z-a.z,m=i.x-a.x,_=i.y-a.y,M=i.z-a.z,b=Math.abs(l),T=Math.abs(c),R=Math.abs(u);let x,S,O,N,A,$,B,C,G,V,H,de;if(b>=T&&b>=R?(O=l,$=d,G=g,de=m,l>=0?(x=c,S=u,N=f,A=h,B=v,C=p,V=_,H=M):(x=u,S=c,N=h,A=f,B=p,C=v,V=M,H=_)):T>=R?(O=c,$=f,G=v,de=_,c>=0?(x=u,S=l,N=h,A=d,B=p,C=g,V=M,H=m):(x=l,S=u,N=d,A=h,B=g,C=p,V=m,H=M)):(O=u,$=h,G=p,de=M,u>=0?(x=l,S=c,N=d,A=f,B=g,C=v,V=m,H=_):(x=c,S=l,N=f,A=d,B=v,C=g,V=_,H=m)),O===0)return null;const Y=x/O,le=S/O,fe=1/O,Re=N-Y*$,$e=A-le*$,ae=B-Y*G,_e=C-le*G,Ae=V-Y*de,Fe=H-le*de,we=Ae*_e-Fe*ae,He=Re*Fe-$e*Ae,gt=ae*$e-_e*Re;if(r){if(we<0||He<0||gt<0)return null}else if((we<0||He<0||gt<0)&&(we>0||He>0||gt>0))return null;const ze=we+He+gt;if(ze===0)return null;const et=fe*(we*$+He*G+gt*de);return(ze>0?et<0:et>0)?null:this.at(et/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yr extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=Qh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jd=new xt,pr=new y_,ro=new ka,Qd=new k,so=new k,ao=new k,oo=new k,ec=new k,lo=new k,ef=new k,co=new k;class bt extends Kt{constructor(e=new Jn,n=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(ec.fromBufferAttribute(d,e),a?lo.addScaledVector(ec,u):lo.addScaledVector(ec.sub(n),u))}n.add(lo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ro.copy(i.boundingSphere),ro.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(ro.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ro,Qd)===null||pr.origin.distanceToSquared(Qd)>(e.far-e.near)**2))&&(Jd.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Jd),!(i.boundingBox!==null&&pr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,pr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=_,T=M;b<T;b+=3){const R=o.getX(b),x=o.getX(b+1),S=o.getX(b+2);r=uo(this,m,e,i,c,u,d,R,x,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const _=o.getX(p),M=o.getX(p+1),b=o.getX(p+2);r=uo(this,a,e,i,c,u,d,_,M,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=a[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=_,T=M;b<T;b+=3){const R=b,x=b+1,S=b+2;r=uo(this,m,e,i,c,u,d,R,x,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let p=g,m=v;p<m;p+=3){const _=p,M=p+1,b=p+2;r=uo(this,a,e,i,c,u,d,_,M,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function b_(t,e,n,i,r,s,a,o){let l;if(e.side===vn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Nr,o),l===null)return null;co.copy(o),co.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(co);return c<n.near||c>n.far?null:{distance:c,point:co.clone(),object:t}}function uo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,so),t.getVertexPosition(l,ao),t.getVertexPosition(c,oo);const u=b_(t,e,n,i,so,ao,oo,ef);if(u){const d=new k;Bn.getBarycoord(ef,so,ao,oo,d),r&&(u.uv=Bn.getInterpolatedAttribute(r,o,l,c,d,new Ze)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,o,l,c,d,new Ze)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,d,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new k,materialIndex:0};Bn.getNormal(so,ao,oo,f.normal),u.face=f,u.barycoord=d}return u}class wp extends dn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=nn,u=nn,d,f){super(null,a,o,l,c,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tf extends Pi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const is=new xt,nf=new xt,fo=[],rf=new zr,S_=new xt,qs=new bt,js=new ka;class M_ extends bt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new tf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,S_)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new zr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,is),rf.copy(e.boundingBox).applyMatrix4(is),this.boundingBox.union(rf)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ka),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,is),js.copy(e.boundingSphere).applyMatrix4(is),this.boundingSphere.union(js)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(qs.geometry=this.geometry,qs.material=this.material,qs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),js.copy(this.boundingSphere),js.applyMatrix4(i),e.ray.intersectsSphere(js)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,is),nf.multiplyMatrices(i,is),qs.matrixWorld=nf,qs.raycast(e,fo);for(let a=0,o=fo.length;a<o;a++){const l=fo[a];l.instanceId=s,l.object=this,n.push(l)}fo.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new tf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new wp(new Float32Array(r*this.count),r,this.count,Iu,qn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const mr=new ka,E_=new Ze(.5,.5),ho=new k;class wa{constructor(e=new Vi,n=new Vi,i=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=jn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],v=s[9],p=s[10],m=s[11],_=s[12],M=s[13],b=s[14],T=s[15];if(r[0].setComponents(c-a,h-u,m-g,T-_).normalize(),r[1].setComponents(c+a,h+u,m+g,T+_).normalize(),r[2].setComponents(c+o,h+d,m+v,T+M).normalize(),r[3].setComponents(c-o,h-d,m-v,T-M).normalize(),i)r[4].setComponents(l,f,p,b).normalize(),r[5].setComponents(c-l,h-f,m-p,T-b).normalize();else if(r[4].setComponents(c-l,h-f,m-p,T-b).normalize(),n===jn)r[5].setComponents(c+l,h+f,m+p,T+b).normalize();else if(n===Ma)r[5].setComponents(l,f,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){mr.center.set(0,0,0);const n=E_.distanceTo(e.center);return mr.radius=.7071067811865476+n,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ho.x=r.normal.x>0?e.max.x:e.min.x,ho.y=r.normal.y>0?e.max.y:e.min.y,ho.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ho)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const sf=new xt;class Bu{constructor(){this.coordinateSystem=jn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];sf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new wa),i[r].setFromProjectionMatrix(sf,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new wa),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Bu().copy(this)}}class Tp extends dn{constructor(e=[],n=vs,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gr extends dn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ys extends dn{constructor(e,n,i=di,r,s,a,o=nn,l=nn,c,u=Qi,d=1){if(u!==Qi&&u!==ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Ap extends ys{constructor(e,n=di,i=vs,r,s,a=nn,o=nn,l,c=Qi){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Rp extends dn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Br extends Jn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2));function g(v,p,m,_,M,b,T,R,x,S,O){const N=b/x,A=T/S,$=b/2,B=T/2,C=R/2,G=x+1,V=S+1;let H=0,de=0;const Y=new k;for(let le=0;le<V;le++){const fe=le*A-B;for(let Re=0;Re<G;Re++){const $e=Re*N-$;Y[v]=$e*_,Y[p]=fe*M,Y[m]=C,c.push(Y.x,Y.y,Y.z),Y[v]=0,Y[p]=0,Y[m]=R>0?1:-1,u.push(Y.x,Y.y,Y.z),d.push(Re/x),d.push(1-le/S),H+=1}}for(let le=0;le<S;le++)for(let fe=0;fe<x;fe++){const Re=f+fe+G*le,$e=f+fe+G*(le+1),ae=f+(fe+1)+G*(le+1),_e=f+(fe+1)+G*le;l.push(Re,$e,_e),l.push($e,ae,_e),de+=6}o.addGroup(h,de,O),h+=de,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Br(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ta extends Jn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const v=[],p=i/2;let m=0;_(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Jt(d,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(h,2));function _(){const b=new k,T=new k;let R=0;const x=(n-e)/i;for(let S=0;S<=s;S++){const O=[],N=S/s,A=N*(n-e)+e;for(let $=0;$<=r;$++){const B=$/r,C=B*l+o,G=Math.sin(C),V=Math.cos(C);T.x=A*G,T.y=-N*i+p,T.z=A*V,d.push(T.x,T.y,T.z),b.set(G,x,V).normalize(),f.push(b.x,b.y,b.z),h.push(B,1-N),O.push(g++)}v.push(O)}for(let S=0;S<r;S++)for(let O=0;O<s;O++){const N=v[O][S],A=v[O+1][S],$=v[O+1][S+1],B=v[O][S+1];(e>0||O!==0)&&(u.push(N,A,B),R+=3),(n>0||O!==s-1)&&(u.push(A,$,B),R+=3)}c.addGroup(m,R,0),m+=R}function M(b){const T=g,R=new Ze,x=new k;let S=0;const O=b===!0?e:n,N=b===!0?1:-1;for(let $=1;$<=r;$++)d.push(0,p*N,0),f.push(0,N,0),h.push(.5,.5),g++;const A=g;for(let $=0;$<=r;$++){const C=$/r*l+o,G=Math.cos(C),V=Math.sin(C);x.x=O*V,x.y=p*N,x.z=O*G,d.push(x.x,x.y,x.z),f.push(0,N,0),R.x=G*.5+.5,R.y=V*.5*N+.5,h.push(R.x,R.y),g++}for(let $=0;$<r;$++){const B=T+$,C=A+$;b===!0?u.push(C,C+1,B):u.push(C+1,C,B),S+=3}c.addGroup(m,S,b===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $u extends Ta{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $u(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends Jn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,d=e/o,f=n/l,h=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const _=m*f-a;for(let M=0;M<c;M++){const b=M*d-s;g.push(b,-_,0),v.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let _=0;_<o;_++){const M=_+c*m,b=_+c*(m+1),T=_+1+c*(m+1),R=_+1+c*m;h.push(M,b,R),h.push(b,T,R)}this.setIndex(h),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Hu extends Jn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new k,f=new k,h=[],g=[],v=[],p=[];for(let m=0;m<=i;m++){const _=[],M=m/i,b=a+M*o,T=e*Math.cos(b),R=Math.sqrt(e*e-T*T);let x=0;m===0&&a===0?x=.5/n:m===i&&l===Math.PI&&(x=-.5/n);for(let S=0;S<=n;S++){const O=S/n,N=r+O*s;d.x=-R*Math.cos(N),d.y=T,d.z=R*Math.sin(N),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),p.push(O+x,1-M),_.push(c++)}u.push(_)}for(let m=0;m<i;m++)for(let _=0;_<n;_++){const M=u[m][_+1],b=u[m][_],T=u[m+1][_],R=u[m+1][_+1];(m!==0||a>0)&&h.push(M,b,R),(m!==i-1||l<Math.PI)&&h.push(b,T,R)}this.setIndex(h),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(v,3)),this.setAttribute("uv",new Jt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ma extends Jn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],d=[],f=new k,h=new k,g=new k;for(let v=0;v<=i;v++){const p=a+v/i*o;for(let m=0;m<=r;m++){const _=m/r*s;h.x=(e+n*Math.cos(p))*Math.cos(_),h.y=(e+n*Math.cos(p))*Math.sin(_),h.z=n*Math.sin(p),c.push(h.x,h.y,h.z),f.x=e*Math.cos(_),f.y=e*Math.sin(_),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(m/r),d.push(v/i)}}for(let v=1;v<=i;v++)for(let p=1;p<=r;p++){const m=(r+1)*v+p-1,_=(r+1)*(v-1)+p-1,M=(r+1)*(v-1)+p,b=(r+1)*v+p;l.push(m,_,b),l.push(_,M,b)}this.setIndex(l),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(u,3)),this.setAttribute("uv",new Jt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ma(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function bs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(af(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(af(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=bs(t[n]);for(const r in i)e[r]=i[r]}return e}function af(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function w_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Cp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const T_={clone:bs,merge:gn};var A_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,R_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ur extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=A_,this.fragmentShader=R_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=bs(e.uniforms),this.uniformsGroups=w_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new We().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class C_ extends Ur{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class No extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=eu,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class P_ extends No{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){ds('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class I_ extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=T0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class L_ extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Gu extends Kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class N_ extends Gu{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const tc=new xt,of=new k,lf=new k;class Pp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;of.setFromMatrixPosition(e.matrixWorld),n.position.copy(of),lf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(lf),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(tc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ma||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const po=new k,mo=new Cs,ei=new k;class Ip extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(po,mo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(po,mo,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(po,mo,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new k,cf=new Ze,uf=new Ze;class Fn extends Ip{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ea*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ea*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,cf,uf),n.subVectors(uf,cf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ha*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class D_ extends Pp{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}}class U_ extends Gu{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new D_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Lp extends Ip{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class k_ extends Pp{constructor(){super(new Lp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class df extends Gu{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new k_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const rs=-90,ss=1;class tu extends Kt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(rs,ss,e,n);r.layers=this.layers,this.add(r);const s=new Fn(rs,ss,e,n);s.layers=this.layers,this.add(s);const a=new Fn(rs,ss,e,n);a.layers=this.layers,this.add(a);const o=new Fn(rs,ss,e,n);o.layers=this.layers,this.add(o);const l=new Fn(rs,ss,e,n);l.layers=this.layers,this.add(l);const c=new Fn(rs,ss,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class O_ extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function ff(t,e,n,i){const r=F_(i);switch(n){case dp:return t*e;case Iu:return t*e/r.components*r.byteLength;case Lu:return t*e/r.components*r.byteLength;case Dr:return t*e*2/r.components*r.byteLength;case Nu:return t*e*2/r.components*r.byteLength;case fp:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Du:return t*e*4/r.components*r.byteLength;case Ro:case Co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Po:case Io:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ac:return Math.max(t,16)*Math.max(e,8)/4;case Ec:case Tc:return Math.max(t,8)*Math.max(e,8)/2;case Rc:case Cc:case Ic:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Zo:case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case kc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Oc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qc:case jc:case Yc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Kc:case Jc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case qo:case Qc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function F_(t){switch(t){case Ln:case op:return{byteLength:1,components:1};case Sa:case lp:case fi:return{byteLength:2,components:1};case Cu:case Pu:return{byteLength:2,components:4};case di:case Ru:case qn:return{byteLength:4,components:1};case cp:case up:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);function Np(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function z_(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const u=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],v=d[h];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const v=d[h];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var B_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$_=`#ifdef USE_ALPHAHASH
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
#endif`,H_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,V_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,W_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X_=`#ifdef USE_AOMAP
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
#endif`,Z_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,q_=`#ifdef USE_BATCHING
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
#endif`,j_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Y_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,J_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q_=`#ifdef USE_IRIDESCENCE
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
#endif`,ev=`#ifdef USE_BUMPMAP
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
#endif`,tv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ov=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cv=`#define PI 3.141592653589793
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
} // validated`,uv=`vec3 transformedNormal = objectNormal;
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
#endif`,dv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mv="gl_FragColor = linearToOutputTexel( gl_FragColor );",gv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_v=`#ifdef USE_ENVMAP
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
#endif`,vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
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
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bv=`#ifdef USE_ENVMAP
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
#endif`,Sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ev=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tv=`#ifdef USE_GRADIENTMAP
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
}`,Av=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Pv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Iv=`#ifdef USE_ENVMAP
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
#endif`,Lv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kv=`PhysicalMaterial material;
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
#endif`,Ov=`uniform sampler2D dfgLUT;
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
}`,Fv=`
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
#endif`,zv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bv=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$v=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Xv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jv=`#if defined( USE_POINTS_UV )
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
#endif`,Yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qv=`#if defined( USE_MORPHCOLORS )
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
#endif`,ex=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tx=`#ifdef USE_MORPHTARGETS
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
#endif`,nx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ax=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ox=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lx=`#ifdef USE_NORMALMAP
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
#endif`,cx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_x=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Sx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Mx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ex=`float getShadowMask() {
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
}`,wx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tx=`#ifdef USE_SKINNING
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
#endif`,Ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rx=`#ifdef USE_SKINNING
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
#endif`,Cx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Px=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ix=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nx=`#ifdef USE_TRANSMISSION
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
#endif`,Dx=`#ifdef USE_TRANSMISSION
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
#endif`,Ux=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ox=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bx=`uniform sampler2D t2D;
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
}`,$x=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hx=`uniform float backgroundBlurriness;
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
}`,Gx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wx=`#include <common>
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
}`,Xx=`#if DEPTH_PACKING == 3200
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
}`,Zx=`#define DISTANCE
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
}`,qx=`#define DISTANCE
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
}`,jx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kx=`uniform float scale;
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
}`,Jx=`uniform vec3 diffuse;
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
}`,Qx=`#include <common>
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
}`,ey=`uniform vec3 diffuse;
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
}`,ty=`#define LAMBERT
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
}`,ny=`#define LAMBERT
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
}`,iy=`#define MATCAP
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
}`,ry=`#define MATCAP
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
}`,sy=`#define NORMAL
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
}`,ay=`#define NORMAL
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
}`,oy=`#define PHONG
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
}`,ly=`#define PHONG
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
}`,cy=`#define STANDARD
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
}`,uy=`#define STANDARD
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
}`,dy=`#define TOON
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
}`,fy=`#define TOON
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
}`,hy=`uniform float size;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 color;
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
}`,_y=`uniform float rotation;
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
}`,vy=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:B_,alphahash_pars_fragment:$_,alphamap_fragment:H_,alphamap_pars_fragment:G_,alphatest_fragment:V_,alphatest_pars_fragment:W_,aomap_fragment:X_,aomap_pars_fragment:Z_,batching_pars_vertex:q_,batching_vertex:j_,begin_vertex:Y_,beginnormal_vertex:K_,bsdfs:J_,iridescence_fragment:Q_,bumpmap_pars_fragment:ev,clipping_planes_fragment:tv,clipping_planes_pars_fragment:nv,clipping_planes_pars_vertex:iv,clipping_planes_vertex:rv,color_fragment:sv,color_pars_fragment:av,color_pars_vertex:ov,color_vertex:lv,common:cv,defaultnormal_vertex:uv,displacementmap_pars_vertex:dv,displacementmap_vertex:fv,emissivemap_fragment:hv,emissivemap_pars_fragment:pv,colorspace_fragment:mv,colorspace_pars_fragment:gv,envmap_fragment:_v,envmap_common_pars_fragment:vv,envmap_pars_fragment:xv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Iv,envmap_vertex:bv,fog_vertex:Sv,fog_pars_vertex:Mv,fog_fragment:Ev,fog_pars_fragment:wv,gradientmap_pars_fragment:Tv,lightmap_pars_fragment:Av,lights_lambert_fragment:Rv,lights_lambert_pars_fragment:Cv,lights_pars_begin:Pv,lights_toon_fragment:Lv,lights_toon_pars_fragment:Nv,lights_phong_fragment:Dv,lights_phong_pars_fragment:Uv,lights_physical_fragment:kv,lights_physical_pars_fragment:Ov,lights_fragment_begin:Fv,lights_fragment_maps:zv,lights_fragment_end:Bv,lightprobes_pars_fragment:$v,logdepthbuf_fragment:Hv,logdepthbuf_pars_fragment:Gv,logdepthbuf_pars_vertex:Vv,logdepthbuf_vertex:Wv,map_fragment:Xv,map_pars_fragment:Zv,map_particle_fragment:qv,map_particle_pars_fragment:jv,metalnessmap_fragment:Yv,metalnessmap_pars_fragment:Kv,morphinstance_vertex:Jv,morphcolor_vertex:Qv,morphnormal_vertex:ex,morphtarget_pars_vertex:tx,morphtarget_vertex:nx,normal_fragment_begin:ix,normal_fragment_maps:rx,normal_pars_fragment:sx,normal_pars_vertex:ax,normal_vertex:ox,normalmap_pars_fragment:lx,clearcoat_normal_fragment_begin:cx,clearcoat_normal_fragment_maps:ux,clearcoat_pars_fragment:dx,iridescence_pars_fragment:fx,opaque_fragment:hx,packing:px,premultiplied_alpha_fragment:mx,project_vertex:gx,dithering_fragment:_x,dithering_pars_fragment:vx,roughnessmap_fragment:xx,roughnessmap_pars_fragment:yx,shadowmap_pars_fragment:bx,shadowmap_pars_vertex:Sx,shadowmap_vertex:Mx,shadowmask_pars_fragment:Ex,skinbase_vertex:wx,skinning_pars_vertex:Tx,skinning_vertex:Ax,skinnormal_vertex:Rx,specularmap_fragment:Cx,specularmap_pars_fragment:Px,tonemapping_fragment:Ix,tonemapping_pars_fragment:Lx,transmission_fragment:Nx,transmission_pars_fragment:Dx,uv_pars_fragment:Ux,uv_pars_vertex:kx,uv_vertex:Ox,worldpos_vertex:Fx,background_vert:zx,background_frag:Bx,backgroundCube_vert:$x,backgroundCube_frag:Hx,cube_vert:Gx,cube_frag:Vx,depth_vert:Wx,depth_frag:Xx,distance_vert:Zx,distance_frag:qx,equirect_vert:jx,equirect_frag:Yx,linedashed_vert:Kx,linedashed_frag:Jx,meshbasic_vert:Qx,meshbasic_frag:ey,meshlambert_vert:ty,meshlambert_frag:ny,meshmatcap_vert:iy,meshmatcap_frag:ry,meshnormal_vert:sy,meshnormal_frag:ay,meshphong_vert:oy,meshphong_frag:ly,meshphysical_vert:cy,meshphysical_frag:uy,meshtoon_vert:dy,meshtoon_frag:fy,points_vert:hy,points_frag:py,shadow_vert:my,shadow_frag:gy,sprite_vert:_y,sprite_frag:vy},Te={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ai={basic:{uniforms:gn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:gn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:gn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:gn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:gn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Ye(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:gn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:gn([Te.points,Te.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:gn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:gn([Te.common,Te.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:gn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:gn([Te.sprite,Te.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:gn([Te.common,Te.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:gn([Te.lights,Te.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ai.physical={uniforms:gn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const go={r:0,b:0,g:0},xy=new xt,Dp=new We;Dp.set(-1,0,0,0,1,0,0,0,1);function yy(t,e,n,i,r,s){const a=new Ye(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function h(_){let M=_.isScene===!0?_.background:null;if(M&&M.isTexture){const b=_.backgroundBlurriness>0;M=e.get(M,b)}return M}function g(_){let M=!1;const b=h(_);b===null?p(a,o):b&&b.isColor&&(p(b,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(_,M){const b=h(M);b&&b.isCubeTexture?(c===void 0&&(c=new bt(new Br(1,1,1),new Ur({name:"BackgroundCubeMaterial",uniforms:bs(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,R,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xy.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Dp),c.material.toneMapped=it.getTransfer(b.colorSpace)!==pt,(u!==b||d!==b.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,f=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new bt(new wr(2,2),new Ur({name:"BackgroundMaterial",uniforms:bs(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Nr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=it.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,d=b.version,f=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,M){_.getRGB(go,Cp(t)),n.buffers.color.setClear(go.r,go.g,go.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,p(a,o)},render:g,addToRenderList:v,dispose:m}}function by(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(A,$,B,C,G){let V=!1;const H=d(A,C,B,$);s!==H&&(s=H,c(s.object)),V=h(A,C,B,G),V&&g(A,C,B,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(A,$,B,C),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(A){return t.bindVertexArray(A)}function u(A){return t.deleteVertexArray(A)}function d(A,$,B,C){const G=C.wireframe===!0;let V=i[$.id];V===void 0&&(V={},i[$.id]=V);const H=A.isInstancedMesh===!0?A.id:0;let de=V[H];de===void 0&&(de={},V[H]=de);let Y=de[B.id];Y===void 0&&(Y={},de[B.id]=Y);let le=Y[G];return le===void 0&&(le=f(l()),Y[G]=le),le}function f(A){const $=[],B=[],C=[];for(let G=0;G<n;G++)$[G]=0,B[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:B,attributeDivisors:C,object:A,attributes:{},index:null}}function h(A,$,B,C){const G=s.attributes,V=$.attributes;let H=0;const de=B.getAttributes();for(const Y in de)if(de[Y].location>=0){const fe=G[Y];let Re=V[Y];if(Re===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(Re=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(Re=A.instanceColor)),fe===void 0||fe.attribute!==Re||Re&&fe.data!==Re.data)return!0;H++}return s.attributesNum!==H||s.index!==C}function g(A,$,B,C){const G={},V=$.attributes;let H=0;const de=B.getAttributes();for(const Y in de)if(de[Y].location>=0){let fe=V[Y];fe===void 0&&(Y==="instanceMatrix"&&A.instanceMatrix&&(fe=A.instanceMatrix),Y==="instanceColor"&&A.instanceColor&&(fe=A.instanceColor));const Re={};Re.attribute=fe,fe&&fe.data&&(Re.data=fe.data),G[Y]=Re,H++}s.attributes=G,s.attributesNum=H,s.index=C}function v(){const A=s.newAttributes;for(let $=0,B=A.length;$<B;$++)A[$]=0}function p(A){m(A,0)}function m(A,$){const B=s.newAttributes,C=s.enabledAttributes,G=s.attributeDivisors;B[A]=1,C[A]===0&&(t.enableVertexAttribArray(A),C[A]=1),G[A]!==$&&(t.vertexAttribDivisor(A,$),G[A]=$)}function _(){const A=s.newAttributes,$=s.enabledAttributes;for(let B=0,C=$.length;B<C;B++)$[B]!==A[B]&&(t.disableVertexAttribArray(B),$[B]=0)}function M(A,$,B,C,G,V,H){H===!0?t.vertexAttribIPointer(A,$,B,G,V):t.vertexAttribPointer(A,$,B,C,G,V)}function b(A,$,B,C){v();const G=C.attributes,V=B.getAttributes(),H=$.defaultAttributeValues;for(const de in V){const Y=V[de];if(Y.location>=0){let le=G[de];if(le===void 0&&(de==="instanceMatrix"&&A.instanceMatrix&&(le=A.instanceMatrix),de==="instanceColor"&&A.instanceColor&&(le=A.instanceColor)),le!==void 0){const fe=le.normalized,Re=le.itemSize,$e=e.get(le);if($e===void 0)continue;const ae=$e.buffer,_e=$e.type,Ae=$e.bytesPerElement,Fe=_e===t.INT||_e===t.UNSIGNED_INT||le.gpuType===Ru;if(le.isInterleavedBufferAttribute){const we=le.data,He=we.isInterleavedBuffer===!0?we.stride:we.itemSize,gt=le.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let ze=0;ze<Y.locationSize;ze++)m(Y.location+ze,we.meshPerAttribute);A.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ze=0;ze<Y.locationSize;ze++)p(Y.location+ze);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let ze=0;ze<Y.locationSize;ze++)M(Y.location+ze,Re/Y.locationSize,_e,fe,He*Ae,(gt+Re/Y.locationSize*ze)*Ae,Fe)}else{if(le.isInstancedBufferAttribute){for(let we=0;we<Y.locationSize;we++)m(Y.location+we,le.meshPerAttribute);A.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<Y.locationSize;we++)p(Y.location+we);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let we=0;we<Y.locationSize;we++)M(Y.location+we,Re/Y.locationSize,_e,fe,Re*Ae,Re/Y.locationSize*we*Ae,Fe)}}else if(H!==void 0){const fe=H[de];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(Y.location,fe);break;case 3:t.vertexAttrib3fv(Y.location,fe);break;case 4:t.vertexAttrib4fv(Y.location,fe);break;default:t.vertexAttrib1fv(Y.location,fe)}}}}_()}function T(){O();for(const A in i){const $=i[A];for(const B in $){const C=$[B];for(const G in C){const V=C[G];for(const H in V)u(V[H].object),delete V[H];delete C[G]}}delete i[A]}}function R(A){if(i[A.id]===void 0)return;const $=i[A.id];for(const B in $){const C=$[B];for(const G in C){const V=C[G];for(const H in V)u(V[H].object),delete V[H];delete C[G]}}delete i[A.id]}function x(A){for(const $ in i){const B=i[$];for(const C in B){const G=B[C];if(G[A.id]===void 0)continue;const V=G[A.id];for(const H in V)u(V[H].object),delete V[H];delete G[A.id]}}}function S(A){for(const $ in i){const B=i[$],C=A.isInstancedMesh===!0?A.id:0,G=B[C];if(G!==void 0){for(const V in G){const H=G[V];for(const de in H)u(H[de].object),delete H[de];delete G[V]}delete B[C],Object.keys(B).length===0&&delete i[$]}}}function O(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:R,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function Sy(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let f=0;for(let h=0;h<u;h++)f+=c[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function My(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==oi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const S=x===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Ln&&x!==qn&&!S&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),R=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:b,maxSamples:T,samples:R}}function Ey(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Vi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,v=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const _=s?0:i,M=_*4;let b=m.clippingState||null;l.value=b,b=u(g,f,M,h);for(let T=0;T!==M;++T)b[T]=n[T];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const v=d!==null?d.length:0;let p=null;if(v!==0){if(p=l.value,g!==!0||p===null){const m=h+v*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,b=h;M!==v;++M,b+=4)a.copy(d[M]).applyMatrix4(_,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}class Vu extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Tp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Br(5,5,5),s=new Ur({name:"CubemapFromEquirect",uniforms:bs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:us});s.uniforms.tEquirect.value=n;const a=new bt(r,s),o=n.minFilter;return n.minFilter===qi&&(n.minFilter=wn),new tu(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const hf=256,wy=3,Ty=20,Up=256,kp=16,Ay=3,Ry=new k,Cy=new Ye;class el{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new tu(1,10,null),this._boxMesh=new bt(new Br(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Ry}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const d=l.autoClear,f=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Cy));const p=new tu(i,r,u);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=f,l.autoClearDepth=h,l.autoClearStencil=g,e.background=v,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(hf,vp(e))}_fromTexture(e,n){e.mapping===vs||e.mapping===ba?this._setSize(e.image.length===0?hf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=pf(e,!1,!1),i=Math.log2(e)-wy;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=pf(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===vs||e.mapping===ba?(this._cubemapMaterial===null&&(this._cubemapMaterial=gf()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=mf()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Py(),this._integrationMaterial=Iy());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/kp);for(let a=0;a<=i;a++){const o=el.lodToRoughness(a,i);if(a>i-Ay)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Up*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Ly());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function pf(t,e,n){return new Vu(t,{minFilter:qi,generateMipmaps:e,type:fi,colorSpace:jo,depthBuffer:n})}function Oa(t,e,n){return new Ur({name:t,uniforms:e,vertexShader:je.cube_vert,fragmentShader:n,side:vn,blending:us,depthTest:!1,depthWrite:!1})}function Py(){return Oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Up}u

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
	`)}function Iy(){return Oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:kp}},`

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
	`)}function Ly(){return Oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ty}
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
	`)}function mf(){return Oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function gf(){return Oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ny(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===Cl||h===Pl)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const v=new Vu(g.height);return v.fromEquirectangularTexture(t,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,g=h===Cl||h===Pl,v=h===vs||h===ba;if(g||v){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new el(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const _=f.image;return g&&_&&_.height>0||v&&_&&l(_)?(i===null&&(i=new el(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===Cl?f.mapping=vs:h===Pl&&(f.mapping=ba),f}function l(f){let h=0;const g=6;for(let v=0;v<g;v++)f[v]!==void 0&&h++;return h===g}function c(f){const h=f.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function Dy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ds("WebGLRenderer: "+i+" extension not supported."),r}}}function Uy(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const v=s.get(g);v&&(e.remove(v),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(g,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),n.memory.geometries++),v}function u(g){const v=g.attributes;for(const p in v)e.update(v[p],t.ARRAY_BUFFER)}function d(g){const v=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const _=v!==null?v.array.length:p.array.length/3-1,M=p.count>=65535?Mp:Sp,b=new M(Math.ceil(_/3)*6,1),T=b.array;if(v!==null){const x=v.array;m=v.version;for(let S=0,O=0;S<_;S+=3){const N=x[S+0],A=x[S+1],$=x[S+2];T[O++]=N,T[O++]=A,T[O++]=A,T[O++]=$,T[O++]=$,T[O++]=N}}else{m=p.version;for(let x=0,S=0;x<_;x+=3){const O=x+0,N=x+1,A=x+2;T[S++]=O,T[S++]=N,T[S++]=N,T[S++]=A,T[S++]=A,T[S++]=O}}b.version=m;const R=s.get(g);R&&e.remove(R),s.set(g,b)}function f(g){const v=s.get(g);if(v){const p=g.index;p!==null&&v.version<p.version&&d(g)}else d(g);return s.get(g)}function h(){for(const g in r){const v=r[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:f,dispose:h}}function ky(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function c(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,d*a,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let v=0;for(let p=0;p<h;p++)v+=f[p];n.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Oy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Fy(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let N=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),v===!0&&(b=2),p===!0&&(b=3);let T=o.attributes.position.count*b,R=1;T>e.maxTextureSize&&(R=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const x=new Float32Array(T*R*4*d),S=new xp(x,T,R,d);S.type=qn,S.needsUpdate=!0;const O=b*4;for(let A=0;A<d;A++){const $=m[A],B=_[A],C=M[A],G=T*R*4*A;for(let V=0;V<$.count;V++){const H=V*O;g===!0&&(r.fromBufferAttribute($,V),x[G+H+0]=r.x,x[G+H+1]=r.y,x[G+H+2]=r.z,x[G+H+3]=0),v===!0&&(r.fromBufferAttribute(B,V),x[G+H+4]=r.x,x[G+H+5]=r.y,x[G+H+6]=r.z,x[G+H+7]=0),p===!0&&(r.fromBufferAttribute(C,V),x[G+H+8]=r.x,x[G+H+9]=r.y,x[G+H+10]=r.z,x[G+H+11]=C.itemSize===4?r.w:1)}}f={count:d,texture:S,size:new Ze(T,R)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function zy(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,d=c.geometry,f=e.get(c,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const By={[ep]:"LINEAR_TONE_MAPPING",[tp]:"REINHARD_TONE_MAPPING",[np]:"CINEON_TONE_MAPPING",[Au]:"ACES_FILMIC_TONE_MAPPING",[rp]:"AGX_TONE_MAPPING",[sp]:"NEUTRAL_TONE_MAPPING",[ip]:"CUSTOM_TONE_MAPPING"};function $y(t,e,n,i,r,s){const a=new ci(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Jn;u.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const d=new C_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new bt(u,d),h=new Lp(-1,1,1,-1,0,1);let g=null,v=null,p=!1,m,_=null,M=[],b=!1;this.setSize=function(T,R){a.setSize(T,R),o!==null&&o.setSize(T,R),l!==null&&l.setSize(T,R);for(let x=0;x<M.length;x++){const S=M[x];S.setSize&&S.setSize(T,R)}},this.setEffects=function(T){M=T,b=M.length>0&&M[0].isRenderPass===!0;const R=a.width,x=a.height;M.length>0&&o===null&&(o=new ci(R,x,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new ci(R,x,{type:fi,depthBuffer:!1,stencilBuffer:!1}));const S=r===!0&&M.some(O=>O.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new ys(R,x),s===!0&&(c.format=ji,c.type=xs)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let O=0;O<M.length;O++){const N=M[O];N.setSize&&N.setSize(R,x),S&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(T,R){if(p||T.toneMapping===Ri&&M.length===0)return!1;if(_=R,R!==null){const x=R.width,S=R.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return b===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Ri,!0},this.hasRenderPass=function(){return b},this.end=function(T,R){T.toneMapping=m,p=!0;let x=a,S=o;for(let O=0;O<M.length;O++){const N=M[O];N.enabled!==!1&&(N.render(T,S,x,R),N.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(g!==T.outputColorSpace||v!==T.toneMapping){g=T.outputColorSpace,v=T.toneMapping,d.defines={},it.getTransfer(g)===pt&&(d.defines.SRGB_TRANSFER="");const O=By[v];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(_),T.render(f,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),d.dispose()}}const Op=new dn,Fp=new ys(1,1),zp=new Ap(1),Bp=new xp,$p=new r_,Hp=new Tp,_f=[],vf=[],xf=new Float32Array(16),yf=new Float32Array(9),bf=new Float32Array(4);function Is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_f[r];if(s===void 0&&(s=new Float32Array(r),_f[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Wt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Xt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function xl(t,e){let n=vf[e];n===void 0&&(n=new Int32Array(e),vf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Hy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Gy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2fv(this.addr,e),Xt(n,e)}}function Vy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Wt(n,e))return;t.uniform3fv(this.addr,e),Xt(n,e)}}function Wy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4fv(this.addr,e),Xt(n,e)}}function Xy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;bf.set(i),t.uniformMatrix2fv(this.addr,!1,bf),Xt(n,i)}}function Zy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;yf.set(i),t.uniformMatrix3fv(this.addr,!1,yf),Xt(n,i)}}function qy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Wt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Xt(n,e)}else{if(Wt(n,i))return;xf.set(i),t.uniformMatrix4fv(this.addr,!1,xf),Xt(n,i)}}function jy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Yy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2iv(this.addr,e),Xt(n,e)}}function Ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3iv(this.addr,e),Xt(n,e)}}function Jy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4iv(this.addr,e),Xt(n,e)}}function Qy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function eb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Wt(n,e))return;t.uniform2uiv(this.addr,e),Xt(n,e)}}function tb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Wt(n,e))return;t.uniform3uiv(this.addr,e),Xt(n,e)}}function nb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Wt(n,e))return;t.uniform4uiv(this.addr,e),Xt(n,e)}}function yl(t){return t.version===0&&(t.compareFunction=mp,t.needsUpdate=!0),t}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=yl(Fp):s=Op,n.setTexture2D(e||s,r)}function rb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||$p,r)}function sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=yl(zp):s=Hp,n.setTextureCube(e||s,r)}function ab(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Bp,r)}function ob(t){switch(t){case 5126:return Hy;case 35664:return Gy;case 35665:return Vy;case 35666:return Wy;case 35674:return Xy;case 35675:return Zy;case 35676:return qy;case 5124:case 35670:return jy;case 35667:case 35671:return Yy;case 35668:case 35672:return Ky;case 35669:case 35673:return Jy;case 5125:return Qy;case 36294:return eb;case 36295:return tb;case 36296:return nb;case 35678:case 36198:case 36298:case 36306:case 35682:return ib;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return ab}}function lb(t,e){t.uniform1fv(this.addr,e)}function cb(t,e){const n=Is(e,this.size,2);t.uniform2fv(this.addr,n)}function ub(t,e){const n=Is(e,this.size,3);t.uniform3fv(this.addr,n)}function db(t,e){const n=Is(e,this.size,4);t.uniform4fv(this.addr,n)}function fb(t,e){const n=Is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function hb(t,e){const n=Is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function pb(t,e){const n=Is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function mb(t,e){t.uniform1iv(this.addr,e)}function gb(t,e){t.uniform2iv(this.addr,e)}function _b(t,e){t.uniform3iv(this.addr,e)}function vb(t,e){t.uniform4iv(this.addr,e)}function xb(t,e){t.uniform1uiv(this.addr,e)}function yb(t,e){t.uniform2uiv(this.addr,e)}function bb(t,e){t.uniform3uiv(this.addr,e)}function Sb(t,e){t.uniform4uiv(this.addr,e)}function Mb(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=yl(Fp):a=Op;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Eb(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||$p,s[a])}function wb(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=yl(zp):a=Hp;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function Tb(t,e,n){const i=this.cache,r=e.length,s=xl(n,r);Wt(i,s)||(t.uniform1iv(this.addr,s),Xt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Bp,s[a])}function Ab(t){switch(t){case 5126:return lb;case 35664:return cb;case 35665:return ub;case 35666:return db;case 35674:return fb;case 35675:return hb;case 35676:return pb;case 5124:case 35670:return mb;case 35667:case 35671:return gb;case 35668:case 35672:return _b;case 35669:case 35673:return vb;case 5125:return xb;case 36294:return yb;case 36295:return bb;case 36296:return Sb;case 35678:case 36198:case 36298:case 36306:case 35682:return Mb;case 35679:case 36299:case 36307:return Eb;case 35680:case 36300:case 36308:case 36293:return wb;case 36289:case 36303:case 36311:case 36292:return Tb}}class Rb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ob(n.type)}}class Cb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Ab(n.type)}}class Pb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const nc=/(\w+)(\])?(\[|\.)?/g;function Sf(t,e){t.seq.push(e),t.map[e.id]=e}function Ib(t,e,n){const i=t.name,r=i.length;for(nc.lastIndex=0;;){const s=nc.exec(i),a=nc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Sf(n,c===void 0?new Rb(o,t,e):new Cb(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Pb(o),Sf(n,d)),n=d}}}class Do{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Ib(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Mf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Lb=37297;let Nb=0;function Db(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Ef=new We;function Ub(t){it._getMatrix(Ef,it.workingColorSpace,t);const e=`mat3( ${Ef.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Yo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Db(t.getShaderSource(e),o)}else return s}function kb(t,e){const n=Ub(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ob={[ep]:"Linear",[tp]:"Reinhard",[np]:"Cineon",[Au]:"ACESFilmic",[rp]:"AgX",[sp]:"Neutral",[ip]:"Custom"};function Fb(t,e){const n=Ob[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const _o=new k;function zb(){it.getLuminanceCoefficients(_o);const t=_o.x.toFixed(4),e=_o.y.toFixed(4),n=_o.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bb(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function $b(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Hb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function oa(t){return t!==""}function Tf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Af(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gb=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(t){return t.replace(Gb,Vb)}function Vb(t,e){const n=je[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nu(n)}const Wb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rf(t){return t.replace(Wb,Xb)}function Xb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Zb={[Ao]:"SHADOWMAP_TYPE_PCF",[aa]:"SHADOWMAP_TYPE_VSM"};function qb(t){return Zb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jb={[ba]:"ENVMAP_MODE_REFRACTION"};function Yb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Kb={[Qh]:"ENVMAP_BLENDING_MULTIPLY",[M0]:"ENVMAP_BLENDING_MIX",[E0]:"ENVMAP_BLENDING_ADD"};function Jb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Kb[t.combine]||"ENVMAP_BLENDING_NONE"}function Qb(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=qb(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Yb(n),d=Jb(n),f=Bb(n),h=$b(s),g=r.createProgram();let v,p,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(oa).join(`
`),v.length>0&&(v+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(oa).join(`
`),p.length>0&&(p+=`
`)):(v=[Cf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),p=[Cf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?je.tonemapping_pars_fragment:"",n.toneMapping!==Ri?Fb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,kb("linearToOutputTexel",n.outputColorSpace),zb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=nu(a),a=Tf(a,n),a=Af(a,n),o=nu(o),o=Tf(o,n),o=Af(o,n),a=Rf(a),o=Rf(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,v=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,p=["#define varying in",n.glslVersion===Ud?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ud?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=m+v+a,M=m+p+o,b=Mf(r,r.VERTEX_SHADER,_),T=Mf(r,r.FRAGMENT_SHADER,M);r.attachShader(g,b),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function R(N){if(t.debug.checkShaderErrors){const A=r.getProgramInfoLog(g)||"",$=r.getShaderInfoLog(b)||"",B=r.getShaderInfoLog(T)||"",C=A.trim(),G=$.trim(),V=B.trim();let H=!0,de=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,T);else{const Y=wf(r,b,"vertex"),le=wf(r,T,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+C+`
`+Y+`
`+le)}else C!==""?Ve("WebGLProgram: Program Info Log:",C):(G===""||V==="")&&(de=!1);de&&(N.diagnostics={runnable:H,programLog:C,vertexShader:{log:G,prefix:v},fragmentShader:{log:V,prefix:p}})}r.deleteShader(b),r.deleteShader(T),x=new Do(r,g),S=Hb(r,g)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,Lb)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Nb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let eS=0;class tS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nS(e),n.set(e,i)),i}}class nS{constructor(e){this.id=eS++,this.code=e,this.usedTimes=0}}function iS(t){return t===Dr||t===Zo||t===qo}function rS(t,e,n,i,r,s){const a=new yp,o=new tS,l=new Set,c=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,O,N,A,$){const B=N.fog,C=A.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||G,V),de=f[x.type];let Y=i.precision;x.precision!==null&&(Y=i.getMaxPrecision(x.precision),Y!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",Y,"instead."));const le=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,fe=le!==void 0?le.length:0;let Re=0;C.morphAttributes.position!==void 0&&(Re=1),C.morphAttributes.normal!==void 0&&(Re=2),C.morphAttributes.color!==void 0&&(Re=3);let $e,ae,_e,Ae;if(de){const ye=ai[de];$e=ye.vertexShader,ae=ye.fragmentShader}else{$e=x.vertexShader,ae=x.fragmentShader;const ye=o.getVertexShaderStage(x),dt=o.getFragmentShaderStage(x);o.update(x,ye,dt),_e=ye.id,Ae=dt.id}const Fe=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),He=A.isInstancedMesh===!0,gt=A.isBatchedMesh===!0,ze=!!x.map,et=!!x.matcap,ot=!!H,qe=ot&&H.isPMREMTexture===!0,Tt=!!x.aoMap,ct=!!x.lightMap,It=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Zt=!!x.displacementMap,Mt=!!x.emissiveMap,Ft=!!x.metalnessMap,Qt=!!x.roughnessMap,Le=x.anisotropy>0,z=x.clearcoat>0,Nt=x.diffuseRoughness>0,ut=x.dispersion>0,D=x.retroreflectivity>0,L=x.iridescence>0,ee=x.sheen>0,te=x.transmission>0,se=Le&&!!x.anisotropyMap,w=z&&!!x.clearcoatMap,y=z&&!!x.clearcoatNormalMap,P=z&&!!x.clearcoatRoughnessMap,Z=Nt&&!!x.diffuseRoughnessMap,U=L&&!!x.iridescenceMap,oe=L&&!!x.iridescenceThicknessMap,ue=ee&&!!x.sheenColorMap,J=ee&&!!x.sheenRoughnessMap,re=!!x.specularMap,he=!!x.specularColorMap,I=!!x.specularIntensityMap,ie=te&&!!x.transmissionMap,j=te&&!!x.thicknessMap,ge=!!x.gradientMap,pe=!!x.alphaMap,me=x.alphaTest>0,xe=!!x.alphaHash,ke=!!x.extensions;let W=Ri;x.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(W=t.toneMapping);const Pe=qe?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ge={shaderID:de,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:ae,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Ae,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:Y,batching:gt,batchingColor:gt&&A._colorsTexture!==null,instancing:He,instancingColor:He&&A.instanceColor!==null,instancingMorph:He&&A.morphTexture!==null,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:et,envMap:ot,envMapMode:ot&&H.mapping,envMapPMREM:qe,envMapMaxLod:qe?Pe.length-1:null,envMapSize:qe?Pe[0].width:null,aoMap:Tt,lightMap:ct,bumpMap:It,normalMap:_t,displacementMap:Zt,emissiveMap:Mt,normalMapObjectSpace:_t&&x.normalMapType===A0,normalMapTangentSpace:_t&&x.normalMapType===eu,packedNormalMap:_t&&x.normalMapType===eu&&iS(x.normalMap.format),metalnessMap:Ft,roughnessMap:Qt,anisotropy:Le,anisotropyMap:se,clearcoat:z,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:P,diffuseRoughness:Nt,diffuseRoughnessMap:Z,dispersion:ut,retroreflection:D,iridescence:L,iridescenceMap:U,iridescenceThicknessMap:oe,sheen:ee,sheenColorMap:ue,sheenRoughnessMap:J,specularMap:re,specularColorMap:he,specularIntensityMap:I,transmission:te,transmissionMap:ie,thicknessMap:j,gradientMap:ge,opaque:x.transparent===!1&&x.blending===fa&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:me,alphaHash:xe,combine:x.combine,mapUv:ze&&h(x.map.channel),aoMapUv:Tt&&h(x.aoMap.channel),lightMapUv:ct&&h(x.lightMap.channel),bumpMapUv:It&&h(x.bumpMap.channel),normalMapUv:_t&&h(x.normalMap.channel),displacementMapUv:Zt&&h(x.displacementMap.channel),emissiveMapUv:Mt&&h(x.emissiveMap.channel),metalnessMapUv:Ft&&h(x.metalnessMap.channel),roughnessMapUv:Qt&&h(x.roughnessMap.channel),anisotropyMapUv:se&&h(x.anisotropyMap.channel),clearcoatMapUv:w&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Z&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:U&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:J&&h(x.sheenRoughnessMap.channel),specularMapUv:re&&h(x.specularMap.channel),specularColorMapUv:he&&h(x.specularColorMap.channel),specularIntensityMapUv:I&&h(x.specularIntensityMap.channel),transmissionMapUv:ie&&h(x.transmissionMap.channel),thicknessMapUv:j&&h(x.thicknessMap.channel),alphaMapUv:pe&&h(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(_t||Le),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:A.isPoints===!0&&!!C.attributes.uv&&(ze||pe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:A.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Re,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:$.filter(ye=>ye.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:W,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&it.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:Mt&&x.emissiveMap.isVideoTexture===!0&&it.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===zn,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ke&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&x.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function v(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)S.push(O),S.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(p(S,x),m(S,x),S.push(t.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function _(x){const S=f[x.type];let O;if(S){const N=ai[S];O=T_.clone(N.uniforms)}else O=x.uniforms;return O}function M(x,S){let O=u.get(S);return O!==void 0?++O.usedTimes:(O=new Qb(t,S,x,r),c.push(O),u.set(S,O)),O}function b(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:_,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:R}}function sS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function aS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Pf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function If(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,v,p,m){let _=t[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:p,group:m},t[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=g,_.materialVariant=a(f),_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function l(f,h,g,v,p,m,_){_.reversedDepth===!0&&(p=-p);const M=o(f,h,g,v,p,m);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):n.push(M)}function c(f,h,g,v,p,m){const _=o(f,h,g,v,p,m);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function u(f,h){n.length>1&&n.sort(f||aS),i.length>1&&i.sort(h||Pf),r.length>1&&r.sort(h||Pf)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:d,sort:u}}function oS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new If,t.set(i,[a])):r>=s.length?(a=new If,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function lS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new k,color:new Ye};break;case"SpotLight":n={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function cS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uS=0;function dS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fS(t){const e=new lS,n=cS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new xt,a=new xt;function o(c){let u=0,d=0,f=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let h=0,g=0,v=0,p=0,m=0,_=0,M=0,b=0,T=0,R=0,x=0,S=0,O=0,N=0;c.sort(dS);for(let $=0,B=c.length;$<B;$++){const C=c[$],G=C.color,V=C.intensity,H=C.distance;let de=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Dr?de=C.shadow.map.texture:de=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=G.r*V,d+=G.g*V,f+=G.b*V;else if(C.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(C.sh.coefficients[Y],V);N++}else if(C.isSunLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const le=C.shadow,fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[g]=fe,i.sunShadowMap[g]=de;const Re=le.getViewportCount();for(let $e=0;$e<Re;$e++)i.sunShadowMatrix[v+$e]=le.getMatrix($e),i.sunShadowCascade[v+$e]=le._cascadeData[$e];v+=Re,g++}i.sun[h]=Y,h++}else if(C.isDirectionalLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const le=C.shadow,fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,i.directionalShadow[p]=fe,i.directionalShadowMap[p]=de,i.directionalShadowMatrix[p]=C.shadow.matrix,T++}i.directional[p]=Y,p++}else if(C.isSpotLight){const Y=e.get(C);Y.position.setFromMatrixPosition(C.matrixWorld),Y.color.copy(G).multiplyScalar(V),Y.distance=H,Y.coneCos=Math.cos(C.angle),Y.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Y.decay=C.decay,i.spot[_]=Y;const le=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,le.updateMatrices(C),C.castShadow&&O++),i.spotLightMatrix[_]=le.matrix,C.castShadow){const fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,i.spotShadow[_]=fe,i.spotShadowMap[_]=de,x++}_++}else if(C.isRectAreaLight){const Y=e.get(C);Y.color.copy(G).multiplyScalar(V),Y.halfWidth.set(C.width*.5,0,0),Y.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=Y,M++}else if(C.isPointLight){const Y=e.get(C);if(Y.color.copy(C.color).multiplyScalar(C.intensity),Y.distance=C.distance,Y.decay=C.decay,C.castShadow){const le=C.shadow,fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,fe.shadowCameraNear=le.camera.near,fe.shadowCameraFar=le.camera.far,i.pointShadow[m]=fe,i.pointShadowMap[m]=de,i.pointShadowMatrix[m]=C.shadow.matrix,R++}i.point[m]=Y,m++}else if(C.isHemisphereLight){const Y=e.get(C);Y.skyColor.copy(C.color).multiplyScalar(V),Y.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[b]=Y,b++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Te.LTC_FLOAT_1,i.rectAreaLTC2=Te.LTC_FLOAT_2):(i.rectAreaLTC1=Te.LTC_HALF_1,i.rectAreaLTC2=Te.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const A=i.hash;(A.sunLength!==h||A.directionalLength!==p||A.pointLength!==m||A.spotLength!==_||A.rectAreaLength!==M||A.hemiLength!==b||A.numSunShadows!==g||A.numDirectionalShadows!==T||A.numPointShadows!==R||A.numSpotShadows!==x||A.numSpotMaps!==S||A.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=p,i.spot.length=_,i.rectArea.length=M,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=R,i.pointShadowMap.length=R,i.pointShadowMatrix.length=R,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-O,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=N,A.sunLength=h,A.directionalLength=p,A.pointLength=m,A.spotLength=_,A.rectAreaLength=M,A.hemiLength=b,A.numSunShadows=g,A.numDirectionalShadows=T,A.numPointShadows=R,A.numSpotShadows=x,A.numSpotMaps=S,A.numLightProbes=N,i.version=uS++)}function l(c,u){let d=0,f=0,h=0,g=0,v=0,p=0;const m=u.matrixWorldInverse;for(let _=0,M=c.length;_<M;_++){const b=c[_];if(b.isSunLight){const T=i.sun[d];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),d++}else if(b.isDirectionalLight){const T=i.directional[f];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),f++}else if(b.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const T=i.rectArea[v];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Lf(t){const e=new fS(t),n=[],i=[],r=[];function s(d){u.camera=d,n.length=0,i.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):n.push(d)}function o(d){i.push(d)}function l(){e.setup(n),r.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function c(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function hS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Lf(t),e.set(r,[o])):s>=a.length?(o=new Lf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const pS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mS=`uniform sampler2D shadow_pass;
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
}`,gS=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],_S=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Nf=new xt,Ys=new k,ic=new k;function vS(t,e,n){let i=new wa;const r=new Ze,s=new Ze,a=new Ct,o=new I_,l=new L_,c={},u=n.maxTextureSize,d={[Nr]:vn,[vn]:Nr,[zn]:zn},f=new Ur({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:pS,fragmentShader:mS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Jn;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new bt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ao;let m=this.type;this.render=function(R,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;this.type===r0&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ao);const O=t.getRenderTarget(),N=t.getActiveCubeFace(),A=t.getActiveMipmapLevel(),$=t.state;$.setBlending(us),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const B=m!==this.type;B&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=R.length;C<G;C++){const V=R[C],H=V.shadow;if(H===void 0){Ve("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const de=H.getFrameExtents();r.multiply(de),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,H.mapSize.y=s.y));const Y=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=Y,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===aa){if(V.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ci(r.x,r.y,{format:Dr,type:fi,minFilter:wn,magFilter:wn,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new ys(r.x,r.y,qn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=Qi,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn}else V.isPointLight?(H.map=new Vu(r.x),H.map.depthTexture=new Ap(r.x,di)):(H.map=new ci(r.x,r.y),H.map.depthTexture=new ys(r.x,r.y,di)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=Qi,this.type===Ao?(H.map.depthTexture.compareFunction=Y?pp:hp,H.map.depthTexture.minFilter=wn,H.map.depthTexture.magFilter=wn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=nn,H.map.depthTexture.magFilter=nn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const le=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,S);const fe=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Re=0;Re<le;Re++){const $e=H.getCamera(Re);if(V.isPointLight){const ae=H.camera,_e=H.matrix,Ae=V.distance||ae.far;Ae!==ae.far&&(ae.far=Ae,ae.updateProjectionMatrix()),Ys.setFromMatrixPosition(V.matrixWorld),ae.position.copy(Ys),ic.copy(ae.position),ic.add(gS[Re]),ae.up.copy(_S[Re]),ae.lookAt(ic),ae.updateMatrixWorld(),_e.makeTranslation(-Ys.x,-Ys.y,-Ys.z),Nf.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Nf,ae.coordinateSystem,ae.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,Re),t.clear();else{Re===0&&(t.setRenderTarget(H.map),t.clear());const ae=H.getViewport(Re);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),$.viewport(a)}i=H.getFrustum(Re),b(x,S,$e,V,fe,this.type)}H.isPointLightShadow!==!0&&this.type===aa&&_(H,S),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(O,N,A)};function _(R,x){const S=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,h.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),R.mapPass===null?R.mapPass=new ci(r.x,r.y,{format:Dr,type:fi}):(R.mapPass.width!==R.map.width||R.mapPass.height!==R.map.height)&&R.mapPass.setSize(R.map.width,R.map.height),f.uniforms.shadow_pass.value=R.map.depthTexture,f.uniforms.resolution.value.set(R.map.width,R.map.height),f.uniforms.radius.value=R.radius,t.setRenderTarget(R.mapPass),t.clear(),t.renderBufferDirect(x,null,S,f,v,null),h.uniforms.shadow_pass.value=R.mapPass.texture,h.uniforms.resolution.value.set(R.map.width,R.map.height),h.uniforms.radius.value=R.radius,t.setRenderTarget(R.map),t.clear(),t.renderBufferDirect(x,null,S,h,v,null)}function M(R,x,S,O){let N=null;const A=S.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(A!==void 0)N=A;else if(N=S.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const $=N.uuid,B=x.uuid;let C=c[$];C===void 0&&(C={},c[$]=C);let G=C[B];G===void 0&&(G=N.clone(),C[B]=G,x.addEventListener("dispose",T)),N=G}if(N.visible=x.visible,N.wireframe=x.wireframe,O===aa?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:d[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const $=t.properties.get(N);$.light=S}return N}function b(R,x,S,O,N,A){if(R.visible===!1)return;if(R.layers.test(N)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&A===aa)&&(!R.frustumCulled||R.intersectsFrustum(i))){R.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,R.matrixWorld);const C=e.update(R),G=R.material;if(Array.isArray(G)){const V=C.groups;for(let H=0,de=V.length;H<de;H++){const Y=V[H],le=G[Y.materialIndex];if(le&&le.visible){const fe=M(R,le,O,A);R.onBeforeShadow(t,R,x,S,C,fe,Y),t.renderBufferDirect(S,null,C,fe,R,Y),R.onAfterShadow(t,R,x,S,C,fe,Y)}}}else if(G.visible){const V=M(R,G,O,A);R.onBeforeShadow(t,R,x,S,C,V,null),t.renderBufferDirect(S,null,C,V,R,null),R.onAfterShadow(t,R,x,S,C,V,null)}}const B=R.children;for(let C=0,G=B.length;C<G;C++)b(B[C],x,S,O,N,A)}function T(R){R.target.removeEventListener("dispose",T);for(const S in c){const O=c[S],N=R.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}function xS(t,e){function n(){let I=!1;const ie=new Ct;let j=null;const ge=new Ct(0,0,0,0);return{setMask:function(pe){j!==pe&&!I&&(t.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){I=pe},setClear:function(pe,me,xe,ke,W){W===!0&&(pe*=ke,me*=ke,xe*=ke),ie.set(pe,me,xe,ke),ge.equals(ie)===!1&&(t.clearColor(pe,me,xe,ke),ge.copy(ie))},reset:function(){I=!1,j=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,j=null,ge=null,pe=null;return{setReversed:function(me){if(ie!==me){const xe=e.get("EXT_clip_control");me?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=me;const ke=pe;pe=null,this.setClear(ke)}},getReversed:function(){return ie},setTest:function(me){me?we(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(me){j!==me&&!I&&(t.depthMask(me),j=me)},setFunc:function(me){if(ie&&(me=O0[me]),ge!==me){switch(me){case gc:t.depthFunc(t.NEVER);break;case _c:t.depthFunc(t.ALWAYS);break;case vc:t.depthFunc(t.LESS);break;case ya:t.depthFunc(t.LEQUAL);break;case xc:t.depthFunc(t.EQUAL);break;case yc:t.depthFunc(t.GEQUAL);break;case bc:t.depthFunc(t.GREATER);break;case Sc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=me}},setLocked:function(me){I=me},setClear:function(me){pe!==me&&(pe=me,ie&&(me=1-me),t.clearDepth(me))},reset:function(){I=!1,j=null,ge=null,pe=null,ie=!1}}}function r(){let I=!1,ie=null,j=null,ge=null,pe=null,me=null,xe=null,ke=null,W=null;return{setTest:function(Pe){I||(Pe?we(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(Pe){ie!==Pe&&!I&&(t.stencilMask(Pe),ie=Pe)},setFunc:function(Pe,Ge,ye){(j!==Pe||ge!==Ge||pe!==ye)&&(t.stencilFunc(Pe,Ge,ye),j=Pe,ge=Ge,pe=ye)},setOp:function(Pe,Ge,ye){(me!==Pe||xe!==Ge||ke!==ye)&&(t.stencilOp(Pe,Ge,ye),me=Pe,xe=Ge,ke=ye)},setLocked:function(Pe){I=Pe},setClear:function(Pe){W!==Pe&&(t.clearStencil(Pe),W=Pe)},reset:function(){I=!1,ie=null,j=null,ge=null,pe=null,me=null,xe=null,ke=null,W=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],v=null,p=!1,m=null,_=null,M=null,b=null,T=null,R=null,x=null,S=new Ye(0,0,0),O=0,N=!1,A=null,$=null,B=null,C=null,G=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,de=0;const Y=t.getParameter(t.VERSION);Y.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(Y)[1]),H=de>=1):Y.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),H=de>=2);let le=null,fe={};const Re=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),ae=new Ct().fromArray(Re),_e=new Ct().fromArray($e);function Ae(I,ie,j,ge){const pe=new Uint8Array(4),me=t.createTexture();t.bindTexture(I,me),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<j;xe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ie+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return me}const Fe={};Fe[t.TEXTURE_2D]=Ae(t.TEXTURE_2D,t.TEXTURE_2D,1),Fe[t.TEXTURE_CUBE_MAP]=Ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[t.TEXTURE_2D_ARRAY]=Ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Fe[t.TEXTURE_3D]=Ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),we(t.DEPTH_TEST),a.setFunc(ya),It(!1),_t(Id),we(t.CULL_FACE),Tt(us);function we(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function He(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function gt(I,ie){return f[I]!==ie?(t.bindFramebuffer(I,ie),f[I]=ie,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ie),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function ze(I,ie){let j=g,ge=!1;if(I){j=h.get(ie),j===void 0&&(j=[],h.set(ie,j));const pe=I.textures;if(j.length!==pe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let me=0,xe=pe.length;me<xe;me++)j[me]=t.COLOR_ATTACHMENT0+me;j.length=pe.length,ge=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,ge=!0);ge&&t.drawBuffers(j)}function et(I){return v!==I?(t.useProgram(I),v=I,!0):!1}const ot={[ls]:t.FUNC_ADD,[a0]:t.FUNC_SUBTRACT,[o0]:t.FUNC_REVERSE_SUBTRACT};ot[l0]=t.MIN,ot[c0]=t.MAX;const qe={[u0]:t.ZERO,[d0]:t.ONE,[f0]:t.SRC_COLOR,[Kh]:t.SRC_ALPHA,[v0]:t.SRC_ALPHA_SATURATE,[g0]:t.DST_COLOR,[p0]:t.DST_ALPHA,[h0]:t.ONE_MINUS_SRC_COLOR,[Jh]:t.ONE_MINUS_SRC_ALPHA,[_0]:t.ONE_MINUS_DST_COLOR,[m0]:t.ONE_MINUS_DST_ALPHA,[x0]:t.CONSTANT_COLOR,[y0]:t.ONE_MINUS_CONSTANT_COLOR,[b0]:t.CONSTANT_ALPHA,[S0]:t.ONE_MINUS_CONSTANT_ALPHA};function Tt(I,ie,j,ge,pe,me,xe,ke,W,Pe){if(I===us){p===!0&&(He(t.BLEND),p=!1);return}if(p===!1&&(we(t.BLEND),p=!0),I!==s0){if(I!==m||Pe!==N){if((_!==ls||T!==ls)&&(t.blendEquation(t.FUNC_ADD),_=ls,T=ls),Pe)switch(I){case fa:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ld:t.blendFunc(t.ONE,t.ONE);break;case Nd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Dd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",I);break}else switch(I){case fa:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ld:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Nd:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Dd:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",I);break}M=null,b=null,R=null,x=null,S.set(0,0,0),O=0,m=I,N=Pe}return}pe=pe||ie,me=me||j,xe=xe||ge,(ie!==_||pe!==T)&&(t.blendEquationSeparate(ot[ie],ot[pe]),_=ie,T=pe),(j!==M||ge!==b||me!==R||xe!==x)&&(t.blendFuncSeparate(qe[j],qe[ge],qe[me],qe[xe]),M=j,b=ge,R=me,x=xe),(ke.equals(S)===!1||W!==O)&&(t.blendColor(ke.r,ke.g,ke.b,W),S.copy(ke),O=W),m=I,N=!1}function ct(I,ie){I.side===zn?He(t.CULL_FACE):we(t.CULL_FACE);let j=I.side===vn;ie&&(j=!j),It(j),I.blending===fa&&I.transparent===!1?Tt(us):Tt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function It(I){A!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),A=I)}function _t(I){I!==n0?(we(t.CULL_FACE),I!==$&&(I===Id?t.cullFace(t.BACK):I===i0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),$=I}function Zt(I){I!==B&&(H&&t.lineWidth(I),B=I)}function Mt(I,ie,j){I?(we(t.POLYGON_OFFSET_FILL),(C!==ie||G!==j)&&(C=ie,G=j,a.getReversed()&&(ie=-ie,j=-j),t.polygonOffset(ie,j))):He(t.POLYGON_OFFSET_FILL)}function Ft(I){I?we(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function Qt(I){I===void 0&&(I=t.TEXTURE0+V-1),le!==I&&(t.activeTexture(I),le=I)}function Le(I,ie,j){j===void 0&&(le===null?j=t.TEXTURE0+V-1:j=le);let ge=fe[j];ge===void 0&&(ge={type:void 0,texture:void 0},fe[j]=ge),(ge.type!==I||ge.texture!==ie)&&(le!==j&&(t.activeTexture(j),le=j),t.bindTexture(I,ie||Fe[I]),ge.type=I,ge.texture=ie)}function z(){const I=fe[le];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Nt(){try{t.compressedTexImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function ut(){try{t.compressedTexImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function D(){try{t.texSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function L(){try{t.texSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function se(){try{t.texStorage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function w(){try{t.texStorage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function y(){try{t.texImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function P(){try{t.texImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function Z(I){return d[I]!==void 0?d[I]:t.getParameter(I)}function U(I,ie){d[I]!==ie&&(t.pixelStorei(I,ie),d[I]=ie)}function oe(I){ae.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function ue(I){_e.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),_e.copy(I))}function J(I,ie){let j=c.get(ie);j===void 0&&(j=new WeakMap,c.set(ie,j));let ge=j.get(I);ge===void 0&&(ge=t.getUniformBlockIndex(ie,I.name),t.uniformBlockBinding(ie,ge,ge),j.set(I,ge))}function re(I,ie,j){const pe=c.get(ie).get(I);l[pe]!==j&&(t.bindBufferBase(t.UNIFORM_BUFFER,pe,j),l[pe]=j)}function he(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},le=null,fe={},f={},l={},h=new WeakMap,g=[],v=null,p=!1,m=null,_=null,M=null,b=null,T=null,R=null,x=null,S=new Ye(0,0,0),O=0,N=!1,A=null,$=null,B=null,C=null,G=null,ae.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:we,disable:He,bindFramebuffer:gt,drawBuffers:ze,useProgram:et,setBlending:Tt,setMaterial:ct,setFlipSided:It,setCullFace:_t,setLineWidth:Zt,setPolygonOffset:Mt,setScissorTest:Ft,activeTexture:Qt,bindTexture:Le,unbindTexture:z,compressedTexImage2D:Nt,compressedTexImage3D:ut,texImage2D:y,texImage3D:P,pixelStorei:U,getParameter:Z,updateUBOMapping:J,uniformBlockBinding:re,texStorage2D:se,texStorage3D:w,texSubImage2D:D,texSubImage3D:L,compressedTexSubImage2D:ee,compressedTexSubImage3D:te,scissor:oe,viewport:ue,reset:he}}function yS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,d=new Set;let f;const h=new WeakMap,g=new Set,v=new FinalizationRegistry(w=>g.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return p?new OffscreenCanvas(w,y):Ko("canvas")}function _(w,y,P){let Z=1;const U=se(w);if((U.width>P||U.height>P)&&(Z=P/Math.max(U.width,U.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const oe=Math.floor(Z*U.width),ue=Math.floor(Z*U.height);f===void 0&&(f=m(oe,ue));const J=y?m(oe,ue):f;return J.width=oe,J.height=ue,J.getContext("2d").drawImage(w,0,0,oe,ue),Ve("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+oe+"x"+ue+")."),J}else return"data"in w&&Ve("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),w;return w}function M(w){return w.generateMipmaps}function b(w){t.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function R(w,y,P,Z,U,oe=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;Z&&(ue=e.get("EXT_texture_norm16"),ue||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=y;if(y===t.RED&&(P===t.FLOAT&&(J=t.R32F),P===t.HALF_FLOAT&&(J=t.R16F),P===t.UNSIGNED_BYTE&&(J=t.R8),P===t.UNSIGNED_SHORT&&ue&&(J=ue.R16_EXT),P===t.SHORT&&ue&&(J=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(J=t.R8UI),P===t.UNSIGNED_SHORT&&(J=t.R16UI),P===t.UNSIGNED_INT&&(J=t.R32UI),P===t.BYTE&&(J=t.R8I),P===t.SHORT&&(J=t.R16I),P===t.INT&&(J=t.R32I)),y===t.RG&&(P===t.FLOAT&&(J=t.RG32F),P===t.HALF_FLOAT&&(J=t.RG16F),P===t.UNSIGNED_BYTE&&(J=t.RG8),P===t.UNSIGNED_SHORT&&ue&&(J=ue.RG16_EXT),P===t.SHORT&&ue&&(J=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(J=t.RG8UI),P===t.UNSIGNED_SHORT&&(J=t.RG16UI),P===t.UNSIGNED_INT&&(J=t.RG32UI),P===t.BYTE&&(J=t.RG8I),P===t.SHORT&&(J=t.RG16I),P===t.INT&&(J=t.RG32I)),y===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(J=t.RGB8UI),P===t.UNSIGNED_SHORT&&(J=t.RGB16UI),P===t.UNSIGNED_INT&&(J=t.RGB32UI),P===t.BYTE&&(J=t.RGB8I),P===t.SHORT&&(J=t.RGB16I),P===t.INT&&(J=t.RGB32I)),y===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),P===t.UNSIGNED_INT&&(J=t.RGBA32UI),P===t.BYTE&&(J=t.RGBA8I),P===t.SHORT&&(J=t.RGBA16I),P===t.INT&&(J=t.RGBA32I)),y===t.RGB&&(P===t.UNSIGNED_SHORT&&ue&&(J=ue.RGB16_EXT),P===t.SHORT&&ue&&(J=ue.RGB16_SNORM_EXT),P===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),P===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),y===t.RGBA){const re=oe?Yo:it.getTransfer(U);P===t.FLOAT&&(J=t.RGBA32F),P===t.HALF_FLOAT&&(J=t.RGBA16F),P===t.UNSIGNED_BYTE&&(J=re===pt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT&&ue&&(J=ue.RGBA16_EXT),P===t.SHORT&&ue&&(J=ue.RGBA16_SNORM_EXT),P===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function x(w,y){let P;return w?y===null||y===di||y===xs?P=t.DEPTH24_STENCIL8:y===qn?P=t.DEPTH32F_STENCIL8:y===Sa&&(P=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===di||y===xs?P=t.DEPTH_COMPONENT24:y===qn?P=t.DEPTH_COMPONENT32F:y===Sa&&(P=t.DEPTH_COMPONENT16),P}function S(w,y){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==nn&&w.minFilter!==wn?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function O(w){const y=new WeakRef(w);i.get(w).__ref=y,g.add(y),v.register(w,y,y)}function N(w){const y=i.get(w).__ref;y!==void 0&&(g.delete(y),v.unregister(y))}function A(w){B(w.target)}function $(w){C(w.target)}function B(w){w.removeEventListener("dispose",A),N(w),V(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&d.delete(w)}function C(w){w.removeEventListener("dispose",$),N(w),de(w)}function G(){for(const w of g){const y=w.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):B(y))}g.clear(),d.clear()}function V(w){const y=i.get(w);if(y.__webglInit===void 0)return;const P=w.source,Z=h.get(P);if(Z){const U=Z[y.__cacheKey];U.usedTimes--,U.usedTimes===0&&H(w),Object.keys(Z).length===0&&h.delete(P)}i.remove(w)}function H(w){const y=i.get(w);t.deleteTexture(y.__webglTexture);const P=w.source,Z=h.get(P);delete Z[y.__cacheKey],a.memory.textures--}function de(w){const y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();const P=w.depthTexture;if(P&&P.renderTarget===w&&B(P),w.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(y.__webglFramebuffer[U]))for(let oe=0;oe<y.__webglFramebuffer[U].length;oe++)t.deleteFramebuffer(y.__webglFramebuffer[U][oe]);else t.deleteFramebuffer(y.__webglFramebuffer[U]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[U])}else{if(Array.isArray(y.__webglFramebuffer))for(let U=0;U<y.__webglFramebuffer.length;U++)t.deleteFramebuffer(y.__webglFramebuffer[U]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let U=0;U<y.__webglColorRenderbuffer.length;U++)y.__webglColorRenderbuffer[U]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[U]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=w.textures;for(let U=0,oe=Z.length;U<oe;U++){const ue=i.get(Z[U]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(Z[U])}i.remove(w)}let Y=0;function le(){Y=0}function fe(){return Y}function Re(w){Y=w}function $e(){const w=Y;return w>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),Y+=1,w}function ae(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function _e(w,y){const P=i.get(w);if(w.isVideoTexture&&ee(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&P.__version!==w.version){const Z=w.image;if(Z===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(P,w,y);return}}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+y)}function Ae(w,y){const P=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){ct(P,w,y);return}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+y)}function Fe(w,y){const P=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){ct(P,w,y);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+y)}function we(w,y){const P=i.get(w);if(w.version>0&&P.__version!==w.version){It(P,w,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+y)}const He={[Xo]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Mc]:t.MIRRORED_REPEAT},gt={[nn]:t.NEAREST,[w0]:t.NEAREST_MIPMAP_NEAREST,[Wa]:t.NEAREST_MIPMAP_LINEAR,[wn]:t.LINEAR,[Il]:t.LINEAR_MIPMAP_NEAREST,[qi]:t.LINEAR_MIPMAP_LINEAR},ze={[C0]:t.NEVER,[mp]:t.ALWAYS,[P0]:t.LESS,[hp]:t.LEQUAL,[I0]:t.EQUAL,[pp]:t.GEQUAL,[L0]:t.GREATER,[N0]:t.NOTEQUAL};function et(w,y){if(y.type===qn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===wn||y.magFilter===Il||y.magFilter===Wa||y.magFilter===qi||y.minFilter===wn||y.minFilter===Il||y.minFilter===Wa||y.minFilter===qi)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,He[y.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,He[y.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,He[y.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,gt[y.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===nn||y.minFilter!==Wa&&y.minFilter!==qi||y.type===qn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ot(w,y){let P=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",A),O(y));const Z=y.source;let U=h.get(Z);U===void 0&&(U={},h.set(Z,U));const oe=ae(y);if(oe!==w.__cacheKey){U[oe]===void 0&&(U[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),U[oe].usedTimes++;const ue=U[w.__cacheKey];ue!==void 0&&(U[w.__cacheKey].usedTimes--,ue.usedTimes===0&&H(y)),w.__cacheKey=oe,w.__webglTexture=U[oe].texture}return P}function qe(w,y,P){return Math.floor(Math.floor(w/P)/y)}function Tt(w,y,P,Z){const oe=w.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,P,Z,y.data);else{oe.sort((I,ie)=>I.start-ie.start);let ue=0;for(let I=1;I<oe.length;I++){const ie=oe[ue],j=oe[I],ge=ie.start+ie.count,pe=qe(j.start,y.width,4),me=qe(ie.start,y.width,4);j.start<=ge+1&&pe===me&&qe(j.start+j.count-1,y.width,4)===pe?ie.count=Math.max(ie.count,j.start+j.count-ie.start):(++ue,oe[ue]=j)}oe.length=ue+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let I=0,ie=oe.length;I<ie;I++){const j=oe[I],ge=Math.floor(j.start/4),pe=Math.ceil(j.count/4),me=ge%y.width,xe=Math.floor(ge/y.width),ke=pe,W=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe),n.texSubImage2D(t.TEXTURE_2D,0,me,xe,ke,W,P,Z,y.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function ct(w,y,P){let Z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=t.TEXTURE_3D);const U=ot(w,y),oe=y.source;n.bindTexture(Z,w.__webglTexture,t.TEXTURE0+P);const ue=i.get(oe);if(oe.version!==ue.__version||U===!0){if(n.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const W=it.getPrimaries(it.workingColorSpace),Pe=y.colorSpace===Xi?null:it.getPrimaries(y.colorSpace),Ge=y.colorSpace===Xi||W===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let re=_(y.image,!1,r.maxTextureSize);re=te(y,re);const he=s.convert(y.format,y.colorSpace),I=s.convert(y.type);let ie=R(y.internalFormat,he,I,y.normalized,y.colorSpace,y.isVideoTexture);et(Z,y);let j;const ge=y.mipmaps,pe=y.isVideoTexture!==!0,me=ue.__version===void 0||U===!0,xe=oe.dataReady,ke=S(y,re);if(y.isDepthTexture)ie=x(y.format===ji,y.type),me&&(pe?n.texStorage2D(t.TEXTURE_2D,1,ie,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ie,re.width,re.height,0,he,I,null));else if(y.isDataTexture)if(ge.length>0){pe&&me&&n.texStorage2D(t.TEXTURE_2D,ke,ie,ge[0].width,ge[0].height);for(let W=0,Pe=ge.length;W<Pe;W++)j=ge[W],pe?xe&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,j.width,j.height,he,I,j.data):n.texImage2D(t.TEXTURE_2D,W,ie,j.width,j.height,0,he,I,j.data);y.generateMipmaps=!1}else pe?(me&&n.texStorage2D(t.TEXTURE_2D,ke,ie,re.width,re.height),xe&&Tt(y,re,he,I)):n.texImage2D(t.TEXTURE_2D,0,ie,re.width,re.height,0,he,I,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){pe&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ie,ge[0].width,ge[0].height,re.depth);for(let W=0,Pe=ge.length;W<Pe;W++)if(j=ge[W],y.format!==oi)if(he!==null)if(pe){if(xe)if(y.layerUpdates.size>0){const Ge=ff(j.width,j.height,y.format,y.type);for(const ye of y.layerUpdates){const dt=j.data.subarray(ye*Ge/j.data.BYTES_PER_ELEMENT,(ye+1)*Ge/j.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,ye,j.width,j.height,1,he,dt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,j.width,j.height,re.depth,he,j.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,ie,j.width,j.height,re.depth,0,j.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,j.width,j.height,re.depth,he,I,j.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,ie,j.width,j.height,re.depth,0,he,I,j.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{pe&&me&&n.texStorage2D(t.TEXTURE_2D,ke,ie,ge[0].width,ge[0].height);for(let W=0,Pe=ge.length;W<Pe;W++)j=ge[W],y.format!==oi?he!==null?pe?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,j.width,j.height,he,j.data):n.compressedTexImage2D(t.TEXTURE_2D,W,ie,j.width,j.height,0,j.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?xe&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,j.width,j.height,he,I,j.data):n.texImage2D(t.TEXTURE_2D,W,ie,j.width,j.height,0,he,I,j.data)}else if(y.isDataArrayTexture)if(pe){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ie,re.width,re.height,re.depth),xe)if(y.layerUpdates.size>0){const W=ff(re.width,re.height,y.format,y.type);for(const Pe of y.layerUpdates){const Ge=re.data.subarray(Pe*W/re.data.BYTES_PER_ELEMENT,(Pe+1)*W/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Pe,re.width,re.height,1,he,I,Ge)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,I,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,re.width,re.height,re.depth,0,he,I,re.data);else if(y.isData3DTexture)pe?(me&&n.texStorage3D(t.TEXTURE_3D,ke,ie,re.width,re.height,re.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,I,re.data)):n.texImage3D(t.TEXTURE_3D,0,ie,re.width,re.height,re.depth,0,he,I,re.data);else if(y.isFramebufferTexture){if(me)if(pe)n.texStorage2D(t.TEXTURE_2D,ke,ie,re.width,re.height);else{let W=re.width,Pe=re.height;for(let Ge=0;Ge<ke;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,ie,W,Pe,0,he,I,null),W>>=1,Pe>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const W=t.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),re.parentNode!==W){W.appendChild(re),d.add(y),W.onpaint=Pe=>{const Ge=Pe.changedElements;for(const ye of d)Ge.includes(ye.image)&&(ye.needsUpdate=!0)},W.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const Ge=t.RGBA,ye=t.RGBA,dt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,ye,dt,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ge.length>0){if(pe&&me){const W=se(ge[0]);n.texStorage2D(t.TEXTURE_2D,ke,ie,W.width,W.height)}for(let W=0,Pe=ge.length;W<Pe;W++)j=ge[W],pe?xe&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,he,I,j):n.texImage2D(t.TEXTURE_2D,W,ie,he,I,j);y.generateMipmaps=!1}else if(pe){if(me){const W=se(re);n.texStorage2D(t.TEXTURE_2D,ke,ie,W.width,W.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,I,re)}else n.texImage2D(t.TEXTURE_2D,0,ie,he,I,re);M(y)&&y.mipmapsAutoUpdate===!0&&b(Z),ue.__version=oe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function It(w,y,P){if(y.image.length!==6)return;const Z=ot(w,y),U=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+P);const oe=i.get(U);if(U.version!==oe.__version||Z===!0){n.activeTexture(t.TEXTURE0+P);const ue=it.getPrimaries(it.workingColorSpace),J=y.colorSpace===Xi?null:it.getPrimaries(y.colorSpace),re=y.colorSpace===Xi||ue===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,I=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let ye=0;ye<6;ye++)!he&&!I?ie[ye]=_(y.image[ye],!0,r.maxCubemapSize):ie[ye]=I?y.image[ye].image:y.image[ye],ie[ye]=te(y,ie[ye]);const j=ie[0],ge=s.convert(y.format,y.colorSpace),pe=s.convert(y.type);let me=R(y.internalFormat,ge,pe,y.normalized,y.colorSpace);const xe=y.isVideoTexture!==!0,ke=oe.__version===void 0||Z===!0,W=U.dataReady;let Pe=S(y,j);et(t.TEXTURE_CUBE_MAP,y);let Ge;if(y.isDepthTexture){if(me=x(y.format===ji,y.type),ke)if(xe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,me,j.width,j.height);else for(let ye=0;ye<6;ye++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,j.width,j.height,0,ge,pe,null)}else if(he){xe&&ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,me,j.width,j.height);for(let ye=0;ye<6;ye++){Ge=ie[ye].mipmaps;for(let dt=0;dt<Ge.length;dt++){const At=Ge[dt];y.format!==oi?ge!==null?xe?W&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,0,0,At.width,At.height,ge,At.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,me,At.width,At.height,0,At.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,0,0,At.width,At.height,ge,pe,At.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,me,At.width,At.height,0,ge,pe,At.data)}}}else{if(Ge=y.mipmaps,xe&&ke){Ge.length>0&&Pe++;const ye=se(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,me,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(I){xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ie[ye].width,ie[ye].height,ge,pe,ie[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,ie[ye].width,ie[ye].height,0,ge,pe,ie[ye].data);for(let dt=0;dt<Ge.length;dt++){const Qn=Ge[dt].image[ye].image;xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,0,0,Qn.width,Qn.height,ge,pe,Qn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,me,Qn.width,Qn.height,0,ge,pe,Qn.data)}}else{xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ge,pe,ie[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,ge,pe,ie[ye]);for(let dt=0;dt<Ge.length;dt++){const At=Ge[dt];xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,0,0,ge,pe,At.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,me,ge,pe,At.image[ye])}}}M(y)&&y.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),oe.__version=U.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _t(w,y,P,Z,U,oe){const ue=s.convert(P.format,P.colorSpace),J=s.convert(P.type),re=R(P.internalFormat,ue,J,P.normalized,P.colorSpace),he=i.get(y),I=i.get(P);if(I.__renderTarget=y,!he.__hasExternalTextures){const ie=Math.max(1,y.width>>oe),j=Math.max(1,y.height>>oe);U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?n.texImage3D(U,oe,re,ie,j,y.depth,0,ue,J,null):n.texImage2D(U,oe,re,ie,j,0,ue,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),L(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,U,I.__webglTexture,0,D(y)):(U===t.TEXTURE_2D||U>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,U,I.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Zt(w,y,P){if(t.bindRenderbuffer(t.RENDERBUFFER,w),y.depthBuffer){const Z=y.depthTexture,U=Z&&Z.isDepthTexture?Z.type:null,oe=x(y.stencilBuffer,U),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;L(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),oe,y.width,y.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),oe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,oe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,w)}else{const Z=y.textures;for(let U=0;U<Z.length;U++){const oe=Z[U],ue=s.convert(oe.format,oe.colorSpace),J=s.convert(oe.type),re=R(oe.internalFormat,ue,J,oe.normalized,oe.colorSpace);L(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),re,y.width,y.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),re,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,re,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Mt(w,y,P){const Z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const U=i.get(y.depthTexture);U.__renderTarget=y;const oe=Z?y.depthTexture.image[0]:y.depthTexture.image;(!U.__webglTexture||oe.width!==y.width||oe.height!==y.height)&&(oe.width=y.width,oe.height=y.height,y.depthTexture.needsUpdate=!0),Z?we(y.depthTexture,0):_e(y.depthTexture,0);const ue=U.__webglTexture,J=D(y),re=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,he=y.depthTexture.format===ji?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Qi)L(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,re,ue,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,he,re,ue,0);else if(y.depthTexture.format===ji)L(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,re,ue,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,he,re,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ft(w){const y=i.get(w),P=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const U=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",U)};Z.addEventListener("dispose",U),y.__depthDisposeCallback=U}y.__boundDepthTexture=Z}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let Z=0;Z<6;Z++)Mt(y.__webglFramebuffer[Z],w,Z);else w.texture.mipmaps.length>0?Mt(y.__webglFramebuffer[0],w,0):Mt(y.__webglFramebuffer,w,0);else if(P){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=t.createRenderbuffer(),Zt(y.__webglDepthbuffer[Z],w,!1);else{const U=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,oe)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Zt(y.__webglDepthbuffer,w,!1);else{const U=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Qt(w,y,P){const Z=i.get(w);y!==void 0&&_t(Z.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&Ft(w)}function Le(w){const y=w.texture,P=i.get(w),Z=i.get(y);w.addEventListener("dispose",$),O(w);const U=w.textures,oe=w.isWebGLCubeRenderTarget===!0,ue=U.length>1;if(ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=y.version,a.memory.textures++),oe){P.__webglFramebuffer=[];for(let J=0;J<6;J++)if(y.mipmaps.length>0){P.__webglFramebuffer[J]=[];for(let re=0;re<y.mipmaps.length;re++)P.__webglFramebuffer[J][re]=t.createFramebuffer()}else P.__webglFramebuffer[J]=t.createFramebuffer()}else{if(y.mipmaps.length>0){P.__webglFramebuffer=[];for(let J=0;J<y.mipmaps.length;J++)P.__webglFramebuffer[J]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(ue)for(let J=0,re=U.length;J<re;J++){const he=i.get(U[J]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&L(w)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let J=0;J<U.length;J++){const re=U[J];P.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[J]);const he=s.convert(re.format,re.colorSpace),I=s.convert(re.type),ie=R(re.internalFormat,he,I,re.normalized,re.colorSpace,w.isXRRenderTarget===!0),j=D(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,j,ie,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,P.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),Zt(P.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),et(t.TEXTURE_CUBE_MAP,y);for(let J=0;J<6;J++)if(y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)_t(P.__webglFramebuffer[J][re],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,re);else _t(P.__webglFramebuffer[J],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);M(y)?b(t.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let J=0,re=U.length;J<re;J++){const he=U[J],I=i.get(he);let ie=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,I.__webglTexture),et(ie,he),_t(P.__webglFramebuffer,w,he,t.COLOR_ATTACHMENT0+J,ie,0),M(he)&&b(ie)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,Z.__webglTexture),et(J,y),y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)_t(P.__webglFramebuffer[re],w,y,t.COLOR_ATTACHMENT0,J,re);else _t(P.__webglFramebuffer,w,y,t.COLOR_ATTACHMENT0,J,0);M(y)?b(J):y.mipmaps.length>0&&t.texParameteri(J,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&Ft(w)}function z(w){const y=w.textures;for(let P=0,Z=y.length;P<Z;P++){const U=y[P];if(M(U)&&U.mipmapsAutoUpdate===!0){const oe=T(w),ue=i.get(U).__webglTexture;n.bindTexture(oe,ue),b(oe),n.unbindTexture()}}}const Nt=[];function ut(w){if(w.samples>0){if(L(w)===!1){const y=w.textures,P=w.width,Z=w.height;let U=t.COLOR_BUFFER_BIT;const oe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),J=y.length>1;if(J)for(let he=0;he<y.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<y.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(U|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(U|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const I=i.get(y[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}t.blitFramebuffer(0,0,P,Z,0,0,P,Z,U,t.NEAREST),l===!0&&(Nt.length=0,Nt.push(t.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Nt.push(oe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Nt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let he=0;he<y.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const I=i.get(y[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function D(w){return Math.min(r.maxSamples,w.samples)}function L(w){const y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(w){const y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function te(w,y){const P=w.colorSpace,Z=w.format,U=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||P!==jo&&P!==Xi&&(it.getTransfer(P)===pt?(Z!==oi||U!==Ln)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",P)),y}function se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=$e,this.resetTextureUnits=le,this.getTextureUnits=fe,this.setTextureUnits=Re,this.setTexture2D=_e,this.setTexture2DArray=Ae,this.setTexture3D=Fe,this.setTextureCube=we,this.rebindTextures=Qt,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=L,this.dispose=G}function bS(t,e){function n(i,r=Xi){let s;const a=it.getTransfer(r);if(i===Ln)return t.UNSIGNED_BYTE;if(i===Cu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Pu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===cp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===up)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===op)return t.BYTE;if(i===lp)return t.SHORT;if(i===Sa)return t.UNSIGNED_SHORT;if(i===Ru)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===qn)return t.FLOAT;if(i===fi)return t.HALF_FLOAT;if(i===dp)return t.ALPHA;if(i===fp)return t.RGB;if(i===oi)return t.RGBA;if(i===Qi)return t.DEPTH_COMPONENT;if(i===ji)return t.DEPTH_STENCIL;if(i===Iu)return t.RED;if(i===Lu)return t.RED_INTEGER;if(i===Dr)return t.RG;if(i===Nu)return t.RG_INTEGER;if(i===Du)return t.RGBA_INTEGER;if(i===Ro||i===Co||i===Po||i===Io)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ro)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ro)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Co)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Po)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===wc||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===Zo||i===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Cc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ic)return s.COMPRESSED_R11_EAC;if(i===Lc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zo)return s.COMPRESSED_RG11_EAC;if(i===Nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dc||i===Uc||i===kc||i===Oc||i===Fc||i===zc||i===Bc||i===$c||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===Zc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qc||i===jc||i===Yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qc)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===jc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Kc||i===Jc||i===qo||i===Qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Kc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===xs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const SS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MS=`
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

}`;class ES{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Rp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ur({vertexShader:SS,fragmentShader:MS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bt(new wr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wS extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,f=null,h=null,g=null;const v=typeof XRWebGLBinding<"u",p=new ES,m={},_=n.getContextAttributes();let M=null,b=null;const T=[],R=[],x=new Ze;let S=null,O=null;const N=new Fn;N.viewport=new Ct;const A=new Fn;A.viewport=new Ct;const $=[N,A],B=new O_;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let _e=T[ae];return _e===void 0&&(_e=new Fl,T[ae]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ae){let _e=T[ae];return _e===void 0&&(_e=new Fl,T[ae]=_e),_e.getGripSpace()},this.getHand=function(ae){let _e=T[ae];return _e===void 0&&(_e=new Fl,T[ae]=_e),_e.getHandSpace()};function V(ae){const _e=R.indexOf(ae.inputSource);if(_e===-1)return;const Ae=T[_e];Ae!==void 0&&(Ae.update(ae.inputSource,ae.frame,c||a),Ae.dispatchEvent({type:ae.type,data:ae.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",de);for(let ae=0;ae<T.length;ae++){const _e=R[ae];_e!==null&&(R[ae]=null,T[ae].disconnect(_e))}C=null,G=null,p.reset();for(const ae in m)delete m[ae];if(e.setRenderTarget(M),h=null,f=null,d=null,r=null,b=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),O!==null){const ae=O.camera;ae.fov=O.fov,ae.zoom=O.zoom,ae.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",de),_.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Fe=null,we=null;_.depth&&(we=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=_.stencil?ji:Qi,Fe=_.stencil?xs:di);const He={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(He),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new ci(f.textureWidth,f.textureHeight,{format:oi,type:Ln,depthTexture:new ys(f.textureWidth,f.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ae={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new ci(h.framebufferWidth,h.framebufferHeight,{format:oi,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function de(ae){for(let _e=0;_e<ae.removed.length;_e++){const Ae=ae.removed[_e],Fe=R.indexOf(Ae);Fe>=0&&(R[Fe]=null,T[Fe].disconnect(Ae))}for(let _e=0;_e<ae.added.length;_e++){const Ae=ae.added[_e];let Fe=R.indexOf(Ae);if(Fe===-1){for(let He=0;He<T.length;He++)if(He>=R.length){R.push(Ae),Fe=He;break}else if(R[He]===null){R[He]=Ae,Fe=He;break}if(Fe===-1)break}const we=T[Fe];we&&we.connect(Ae)}}function Y(ae,_e){_e===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(_e.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let _e=ae.near,Ae=ae.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(Ae=p.depthFar)),B.near=A.near=N.near=_e,B.far=A.far=N.far=Ae,(C!==B.near||G!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),C=B.near,G=B.far),B.layers.mask=ae.layers.mask|6,N.layers.mask=B.layers.mask&-5,A.layers.mask=B.layers.mask&-3;const Fe=ae.parent,we=B.cameras;Y(B,Fe);for(let He=0;He<we.length;He++)Y(we[He],Fe);B.projectionMatrix.copy(N.projectionMatrix),B.projectionMatrixInverse.copy(N.projectionMatrixInverse),O===null&&ae.isPerspectiveCamera&&(O={camera:ae,fov:ae.fov,zoom:ae.zoom}),le(ae,B,Fe)};function le(ae,_e,Ae){Ae===null?ae.matrix.copy(_e.matrixWorld):(ae.matrix.copy(Ae.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(_e.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(_e.projectionMatrix),ae.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ea*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(ae){l=ae,f!==null&&(f.fixedFoveation=ae),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ae)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(ae){return m[ae]};let fe=null;function Re(ae,_e){if(u=_e.getViewerPose(c||a),g=_e,u!==null){const Ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Fe=!1;Ae.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let ze=0;ze<Ae.length;ze++){const et=Ae[ze];let ot=null;if(h!==null)ot=h.getViewport(et);else{const Tt=d.getViewSubImage(f,et);ot=Tt.viewport,ze===0&&(e.setRenderTargetTextures(b,Tt.colorTexture,Tt.depthStencilTexture),e.setRenderTarget(b))}let qe=$[ze];qe===void 0&&(qe=new Fn,qe.layers.enable(ze),qe.viewport=new Ct,$[ze]=qe),qe.matrix.fromArray(et.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(et.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ot.x,ot.y,ot.width,ot.height),ze===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(qe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){d=i.getBinding();const ze=d.getDepthInformation(Ae[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(we&&we.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<Ae.length;ze++){const et=Ae[ze].camera;if(et){let ot=m[et];ot||(ot=new Rp,m[et]=ot);const qe=d.getCameraImage(et);ot.sourceTexture=qe}}}}for(let Ae=0;Ae<T.length;Ae++){const Fe=R[Ae],we=T[Ae];Fe!==null&&we!==void 0&&we.update(Fe,_e,c||a)}fe&&fe(ae,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}const $e=new Np;$e.setAnimationLoop(Re),this.setAnimationLoop=function(ae){fe=ae},this.dispose=function(){}}}const TS=new xt,Gp=new We;Gp.set(-1,0,0,0,1,0,0,0,1);function AS(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Cp(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,_,M,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,_,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m),M=_.envMap,b=_.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(TS.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Gp),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,n(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const _=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function RS(t,e,n,i){let r={},s={};function a(_,M){const b=M.program;i.uniformBlockBinding(_,b,r[_.id])}function o(_,M){let b=r[_.id];b===void 0&&(g(_),b=l(_),r[_.id]=b,_.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(_,T);const R=e.render.frame;s[_.id]!==R&&(c(_),s[_.id]=R)}function l(_){const M=t.createBuffer(),b=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),M}function c(_){const M=r[_.id],b=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let R=0,x=b.length;R<x;R++){const S=b[R];if(Array.isArray(S))for(let O=0,N=S.length;O<N;O++)u(S[O],R,O,T);else u(S,R,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(_,M,b,T){if(f(_,M,b,T)===!0){const R=_.__offset,x=_.value;if(Array.isArray(x)){let S=0;for(let O=0;O<x.length;O++){const N=x[O],A=v(N,!0);d(N,_.__data,S),S+=A.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,R,_.__data)}}function d(_,M,b){typeof _=="number"||typeof _=="boolean"?M[b]=_:_.isMatrix3?(M[b]=_.elements[0],M[b+1]=_.elements[1],M[b+2]=_.elements[2],M[b+3]=0,M[b+4]=_.elements[3],M[b+5]=_.elements[4],M[b+6]=_.elements[5],M[b+7]=0,M[b+8]=_.elements[6],M[b+9]=_.elements[7],M[b+10]=_.elements[8],M[b+11]=0):ArrayBuffer.isView(_)?M.set(_.subarray(0,M.length-b),b):_.toArray(M,b)}function f(_,M,b,T){const R=_.value,x=M+"_"+b;if(Array.isArray(R)){T[x]===void 0&&(T[x]=[]);const S=T[x];let O=!1;for(let N=0;N<R.length;N++)h(R[N],S,N)===!0&&(O=!0);return O}return h(R,T,x)}function h(_,M,b){if(M[b]===void 0)return typeof _=="number"||typeof _=="boolean"?M[b]=_:ArrayBuffer.isView(_)?M[b]=_.slice():M[b]=_.clone(),!0;{const T=M[b];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return M[b]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(_){const M=_.uniforms;let b=0;const T=16;for(let x=0,S=M.length;x<S;x++){const O=Array.isArray(M[x])?M[x]:[M[x]];for(let N=0,A=O.length;N<A;N++){const $=O[N],B=Array.isArray($.value)?$.value:[$.value],C=Array.isArray(M[x])||Array.isArray($.value);let G=b;for(let H=0,de=B.length;H<de;H++){const Y=B[H],le=v(Y,C),fe=b%T,Re=fe%le.boundary,$e=fe+Re;b+=Re,$e!==0&&T-$e<le.storage&&(b+=T-$e),H===0&&(G=b),b+=le.storage}const V=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new V((b-G)/Float32Array.BYTES_PER_ELEMENT),$.__offset=G}}const R=b%T;return R>0&&(b+=T-R),_.__size=b,_.__cache={},this}function v(_,M){const b={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(b.boundary=4,b.storage=4):_.isVector2?(b.boundary=8,b.storage=8):_.isVector3||_.isColor?(b.boundary=16,b.storage=12):_.isVector4?(b.boundary=16,b.storage=16):_.isMatrix3?(b.boundary=16,b.storage=48):_.isMatrix4?(b.boundary=16,b.storage=64):_.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(b.boundary=16,b.storage=_.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",_),M===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(_){const M=_.target;M.removeEventListener("dispose",p),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const _ in r)t.deleteBuffer(r[_]);r={},s={}}return{bind:a,update:o,dispose:m}}const CS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function PS(){return ti===null&&(ti=new wp(CS,16,16,Dr,fi),ti.name="DFG_LUT",ti.minFilter=wn,ti.magFilter=wn,ti.wrapS=wi,ti.wrapT=wi,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class IS{constructor(e={}){const{canvas:n=U0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Ln}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=h,p=new Set([Du,Nu,Lu]),m=new Set([Ln,di,Sa,xs,Cu,Pu]),_=new Uint32Array(4),M=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let T=null,R=null;const x=[],S=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let A=!1,$=null,B=null,C=null,G=null;this._outputColorSpace=Gt;let V=0,H=0,de=null,Y=-1,le=null;const fe=new Ct,Re=new Ct;let $e=null;const ae=new Ye(0);let _e=0,Ae=n.width,Fe=n.height,we=1,He=null,gt=null;const ze=new Ct(0,0,Ae,Fe),et=new Ct(0,0,Ae,Fe);let ot=!1;const qe=new wa,Tt=new Bu;let ct=!1,It=!1;const _t=new xt,Zt=new k,Mt=new Ct,Ft={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qt=!1;function Le(){return de===null?we:1}let z=i;function Nt(E,F){return n.getContext(E,F)}let ut,D,L,ee,te,se,w,y,P,Z,U,oe,ue,J,re,he,I,ie,j,ge,pe,me,xe;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tu}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",ye,!1),z===null){const F="webgl2";if(z=Nt(F,E),z===null)throw Nt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),ft("WebGLRenderer: "+E.message),E}function ke(){ut=new Dy(z),ut.init(),pe=new bS(z,ut),D=new My(z,ut,e,pe),L=new xS(z,ut),D.reversedDepthBuffer&&f&&L.buffers.depth.setReversed(!0),B=z.createFramebuffer(),C=z.createFramebuffer(),G=z.createFramebuffer(),ee=new Oy(z),te=new sS,se=new yS(z,ut,L,te,D,pe,ee),w=new Ny(N),y=new z_(z),me=new by(z,y),P=new Uy(z,y,ee,me),Z=new zy(z,P,y,me,ee),ie=new Fy(z,D,se),re=new Ey(te),U=new rS(N,w,ut,D,me,re),oe=new AS(N,te),ue=new oS,J=new hS(ut),I=new yy(N,w,L,Z,g,l),he=new vS(N,Z,D),xe=new RS(z,ee,D,L),j=new Sy(z,ut,ee),ge=new ky(z,ut,ee),ee.programs=U.programs,N.capabilities=D,N.extensions=ut,N.properties=te,N.renderLists=ue,N.shadowMap=he,N.state=L,N.info=ee}v!==Ln&&(O=new $y(v,n.width,n.height,o,r,s));const W=new wS(N,z);this.xr=W,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(E){E!==void 0&&(we=E,this.setSize(Ae,Fe,!1))},this.getSize=function(E){return E.set(Ae,Fe)},this.setSize=function(E,F,K=!0){if(W.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,Fe=F,n.width=Math.floor(E*we),n.height=Math.floor(F*we),K===!0&&(n.style.width=E+"px",n.style.height=F+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Ae*we,Fe*we).floor()},this.setDrawingBufferSize=function(E,F,K){Ae=E,Fe=F,we=K,n.width=Math.floor(E*K),n.height=Math.floor(F*K),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(v===Ln){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(fe)},this.getViewport=function(E){return E.copy(ze)},this.setViewport=function(E,F,K,X){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,F,K,X),L.viewport(fe.copy(ze).multiplyScalar(Le()).round())},this.getScissor=function(E){return E.copy(et)},this.setScissor=function(E,F,K,X){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,F,K,X),L.scissor(Re.copy(et).multiplyScalar(Le()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){L.setScissorTest(ot=E)},this.setOpaqueSort=function(E){He=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,K=!0){let X=0;if(E){let q=!1;if(de!==null){const Se=de.texture.format;q=p.has(Se)}if(q){const Se=de.texture.type,Ne=m.has(Se),be=I.getClearColor(),Ce=I.getClearAlpha(),Oe=be.r,Xe=be.g,tt=be.b;Ne?(_[0]=Oe,_[1]=Xe,_[2]=tt,_[3]=Ce,z.clearBufferuiv(z.COLOR,0,_)):(M[0]=Oe,M[1]=Xe,M[2]=tt,M[3]=Ce,z.clearBufferiv(z.COLOR,0,M))}else X|=z.COLOR_BUFFER_BIT}F&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),$=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),I.dispose(),ue.dispose(),J.dispose(),se.dispose(),te.dispose(),w.dispose(),Z.dispose(),P.dispose(),me.dispose(),xe.dispose(),U.dispose(),W.dispose(),W.removeEventListener("sessionstart",Fs),W.removeEventListener("sessionend",Je),en.stop()};function Pe(E){E.preventDefault(),Jo("WebGLRenderer: Context Lost."),A=!0}function Ge(){Jo("WebGLRenderer: Context Restored."),A=!1;const E=ee.autoReset,F=he.enabled,K=he.autoUpdate,X=he.needsUpdate,q=he.type;ke(),ee.autoReset=E,he.enabled=F,he.autoUpdate=K,he.needsUpdate=X,he.type=q}function ye(E){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){const F=E.target;F.removeEventListener("dispose",dt),At(F)}function At(E){Qn(E),te.remove(E)}function Qn(E){const F=te.get(E).programs;F!==void 0&&(F.forEach(function(K){U.releaseProgram(K)}),E.isShaderMaterial&&U.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,K,X,q,Se){F===null&&(F=Ft);const Ne=q.isMesh&&q.matrixWorld.determinantAffine()<0,be=Qg(E,F,K,X,q);L.setMaterial(X,Ne);let Ce=K.index,Oe=1;if(X.wireframe===!0){if(Ce=P.getWireframeAttribute(K),Ce===void 0)return;Oe=2}const Xe=K.drawRange,tt=K.attributes.position;let De=Xe.start*Oe,nt=(Xe.start+Xe.count)*Oe;Se!==null&&(De=Math.max(De,Se.start*Oe),nt=Math.min(nt,(Se.start+Se.count)*Oe)),Ce!==null?(De=Math.max(De,0),nt=Math.min(nt,Ce.count)):tt!=null&&(De=Math.max(De,0),nt=Math.min(nt,tt.count));const zt=nt-De;if(zt<0||zt===1/0)return;me.setup(q,X,be,K,Ce);let yt,vt=j;if(Ce!==null&&(yt=y.get(Ce),vt=ge,vt.setIndex(yt)),q.isMesh)X.wireframe===!0?(L.setLineWidth(X.wireframeLinewidth*Le()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(q.isLine){let an=X.linewidth;an===void 0&&(an=1),L.setLineWidth(an*Le()),q.isLineSegments?vt.setMode(z.LINES):q.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else q.isPoints?vt.setMode(z.POINTS):q.isSprite&&vt.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))vt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const an=q._multiDrawStarts,Ue=q._multiDrawCounts,fn=q._multiDrawCount,ht=Ce?y.get(Ce).bytesPerElement:1,ur=te.get(X).currentProgram.getUniforms();for(let on=0;on<fn;on++)ur.setValue(z,"_gl_DrawID",on),vt.render(an[on]/ht,Ue[on])}else if(q.isInstancedMesh)vt.renderInstances(De,zt,q.count);else if(K.isInstancedBufferGeometry){const an=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ue=Math.min(K.instanceCount,an);vt.renderInstances(De,zt,Ue)}else vt.render(De,zt)};function Hr(E,F,K,X){$!==null&&E.isNodeMaterial&&$.setObject(X,E),ct===!0&&re.setState(E,K,!1),E.transparent===!0&&E.side===zn&&E.forceSinglePass===!1?(E.side=vn,E.needsUpdate=!0,lr(E,F,X),E.side=Nr,E.needsUpdate=!0,lr(E,F,X),E.side=zn):lr(E,F,X)}this.compile=function(E,F,K=null){K===null&&(K=E),$!==null&&$.renderStart(E,F,K),R=J.get(K),R.init(F),S.push(R),K.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),E!==K&&E.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(R.pushLight(q),q.castShadow&&R.pushShadow(q))}),R.setupLights(),$!==null&&$.updateLights(R.state.lightsArray),It=this.localClippingEnabled,ct=re.init(this.clippingPlanes,It),ct===!0&&re.setGlobalState(this.clippingPlanes,F),$!==null&&he.render(R.state.shadowsArray,K,F);const X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const be=Se[Ne];Hr(be,K,F,q),X.add(be)}else Hr(Se,K,F,q),X.add(Se)}),R=S.pop(),$!==null&&$.renderEnd(),X},this.compileAsync=function(E,F,K=null){const X=this.compile(E,F,K);return new Promise(q=>{function Se(){if(X.forEach(function(Ne){const Ce=te.get(Ne).currentProgram;(Ce===void 0||Ce.isReady())&&X.delete(Ne)}),X.size===0){q(E);return}setTimeout(Se,10)}ut.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Di=null;function sr(E){Di&&Di(E)}function Fs(){en.stop()}function Je(){en.start()}const en=new Np;en.setAnimationLoop(sr),typeof self<"u"&&en.setContext(self),this.setAnimationLoop=function(E){Di=E,W.setAnimationLoop(E),E===null?en.stop():en.start()},W.addEventListener("sessionstart",Fs),W.addEventListener("sessionend",Je),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;$!==null&&$.renderStart(E,F);const K=W.enabled===!0&&W.isPresenting===!0,X=O!==null&&(de===null||K)&&O.begin(N,de);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(F),F=W.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,F,de),R=J.get(E,S.length),R.init(F),R.state.textureUnits=se.getTextureUnits(),S.push(R),_t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?Tt.setFromArrayCamera(F):qe.setFromProjectionMatrix(_t,jn,F.reversedDepth),It=this.localClippingEnabled,ct=re.init(this.clippingPlanes,It),T=ue.get(E,x.length),T.init(),x.push(T),this.info.render.frame++,W.enabled===!0&&W.isPresenting===!0){const Ne=N.xr.getDepthSensingMesh();Ne!==null&&ar(Ne,F,-1/0,N.sortObjects)}ar(E,F,0,N.sortObjects),T.finish(),$!==null&&$.updateLights(R.state.lightsArray),N.sortObjects===!0&&T.sort(He,gt),Qt=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,Qt&&I.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),ct===!0&&re.beginShadows();const q=R.state.shadowsArray;if(he.render(q,E,F),ct===!0&&re.endShadows(),(X&&O.hasRenderPass())===!1){const Ne=T.opaque,be=T.transmissive;if(R.setupLights(),F.isArrayCamera){const Ce=F.cameras;if(be.length>0)for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++){const tt=Ce[Oe];zs(Ne,be,E,tt)}Qt&&I.render(E);for(let Oe=0,Xe=Ce.length;Oe<Xe;Oe++){const tt=Ce[Oe];gi(T,E,tt,tt.viewport)}}else be.length>0&&zs(Ne,be,E,F),Qt&&I.render(E),gi(T,E,F)}de!==null&&H===0&&(se.updateMultisampleRenderTarget(de),se.updateRenderTargetMipmap(de)),X&&O.end(N),E.isScene===!0&&E.onAfterRender(N,E,F),me.resetDefaultState(),Y=-1,le=null,S.pop(),S.length>0?(R=S[S.length-1],se.setTextureUnits(R.state.textureUnits),ct===!0&&re.setGlobalState(N.clippingPlanes,R.state.camera)):R=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,$!==null&&$.renderEnd()};function ar(E,F,K,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)R.pushLight(E),E.castShadow&&R.pushShadow(E);else if(E.isSprite){const Ne=F.isArrayCamera?Tt:qe;if(!E.frustumCulled||E.intersectsFrustum(Ne)){X&&Mt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const be=Z.update(E),Ce=E.material;Ce.visible&&T.push(E,be,Ce,K,Mt.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){const Ne=F.isArrayCamera?Tt:qe;if(!E.frustumCulled||E.intersectsFrustum(Ne)){const be=Z.update(E),Ce=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Mt.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Mt.copy(be.boundingSphere.center)),Mt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Ce)){const Oe=be.groups;for(let Xe=0,tt=Oe.length;Xe<tt;Xe++){const De=Oe[Xe],nt=Ce[De.materialIndex];nt&&nt.visible&&T.push(E,be,nt,K,Mt.z,De,F)}}else Ce.visible&&T.push(E,be,Ce,K,Mt.z,null,F)}}}const Se=E.children;for(let Ne=0,be=Se.length;Ne<be;Ne++)ar(Se[Ne],F,K,X)}function gi(E,F,K,X){const{opaque:q,transmissive:Se,transparent:Ne}=E;R.setupLightsView(K),ct===!0&&re.setGlobalState(N.clippingPlanes,K),X&&L.viewport(fe.copy(X)),q.length>0&&or(q,F,K),Se.length>0&&or(Se,F,K),Ne.length>0&&or(Ne,F,K),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function zs(E,F,K,X){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[X.id]===void 0){const De=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[X.id]=new ci(1,1,{generateMipmaps:!0,type:De?fi:Ln,minFilter:qi,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const Se=R.state.transmissionRenderTarget[X.id],Ne=X.viewport||fe;Se.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const be=N.getRenderTarget(),Ce=N.getActiveCubeFace(),Oe=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(ae),_e=N.getClearAlpha(),_e<1&&N.setClearColor(16777215,.5),N.clear(),Qt&&I.render(K);const Xe=N.toneMapping;N.toneMapping=Ri;const tt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),R.setupLightsView(X),ct===!0&&re.setGlobalState(N.clippingPlanes,X),or(E,K,X),se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se),ut.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let nt=0,zt=F.length;nt<zt;nt++){const yt=F[nt],{object:vt,geometry:an,material:Ue,group:fn}=yt;if(Ue.side===zn&&vt.layers.test(X.layers)){const ht=Ue.side;Ue.side=vn,Ue.needsUpdate=!0,$a(vt,K,X,an,Ue,fn),Ue.side=ht,Ue.needsUpdate=!0,De=!0}}De===!0&&(se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se))}N.setRenderTarget(be,Ce,Oe),N.setClearColor(ae,_e),tt!==void 0&&(X.viewport=tt),N.toneMapping=Xe}function or(E,F,K){const X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Se=E.length;q<Se;q++){const Ne=E[q],{object:be,geometry:Ce,group:Oe}=Ne;let Xe=Ne.material;Xe.allowOverride===!0&&X!==null&&(Xe=X),be.layers.test(K.layers)&&$a(be,F,K,Ce,Xe,Oe)}}function $a(E,F,K,X,q,Se){$!==null&&q.isNodeMaterial&&$.setObject(E,q),E.onBeforeRender(N,F,K,X,q,Se),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(N,F,K,X,E,Se),q.transparent===!0&&q.side===zn&&q.forceSinglePass===!1?(q.side=vn,q.needsUpdate=!0,N.renderBufferDirect(K,F,X,q,E,Se),q.side=Nr,q.needsUpdate=!0,N.renderBufferDirect(K,F,X,q,E,Se),q.side=zn):N.renderBufferDirect(K,F,X,q,E,Se),E.onAfterRender(N,F,K,X,q,Se)}function Ha(E){let F=0;for(const K of E)K.texture!==null&&F++;return F}function lr(E,F,K){F.isScene!==!0&&(F=Ft);const X=te.get(E),q=R.state.lights,Se=R.state.shadowsArray,Ne=q.state.version,be=U.getParameters(E,q.state,Se,F,K,R.state.lightProbeGridArray),Ce=U.getProgramCacheKey(be);let Oe=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=w.get(E.envMap||X.environment,Xe),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",dt),Oe=new Map,X.programs=Oe,X.programVariants=new Map);let tt=Oe.get(Ce);if(tt!==void 0){if(X.currentProgram===tt&&X.lightsStateVersion===Ne)return Bs(E,be),tt}else be.uniforms=U.getUniforms(E),$!==null&&E.isNodeMaterial&&$.build(E,K,be),E.onBeforeCompile(be,N),tt=U.acquireProgram(be,Ce),Oe.set(Ce,tt),X.uniforms=be.uniforms;const De=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=re.uniform),Bs(E,be),X.needsLights=t0(E),X.lightsStateVersion=Ne,X.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.sunLights.value=q.state.sun,De.sunLightShadows.value=q.state.sunShadow,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.sunShadowMatrix.value=q.state.sunShadowMatrix,De.sunShadowCascade.value=q.state.sunShadowCascade,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),X.numLightProbeGrids=Ha(R.state.lightProbeGridArray),X.currentProgram=tt,X.uniformsList=null,tt}function Ga(E,F,K,X,q){const Se=te.get(E),Ne=Se.currentProgram.id+","+X+","+q;let be=Se.programVariants.get(Ne);return be===void 0?(be=lr(E,F,K),Se.programVariants.set(Ne,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=X,Se.toneMapping=q),be}function cr(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Do.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Bs(E,F){const K=te.get(E);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function Qg(E,F,K,X,q){F.isScene!==!0&&(F=Ft),se.resetTextureUnits();const Se=F.fog,Ne=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,be=de===null?N.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:it.workingColorSpace,Ce=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=w.get(X.envMap||Ne,Ce),Xe=X.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,tt=!!K.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!K.morphAttributes.position,nt=!!K.morphAttributes.normal,zt=!!K.morphAttributes.color;let yt=Ri;X.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(yt=N.toneMapping);const vt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,an=vt!==void 0?vt.length:0,Ue=te.get(X),fn=R.state.lights;if(ct===!0&&(It===!0||E!==le)){const Rt=E===le&&X.id===Y;re.setState(X,E,Rt)}let ht=!1,ur=!1;X.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==fn.state.version||q.isBatchedMesh&&Ue.batching===!1||!q.isBatchedMesh&&Ue.batching===!0||q.isBatchedMesh&&Ue.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ue.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ue.instancing===!1||!q.isInstancedMesh&&Ue.instancing===!0||q.isSkinnedMesh&&Ue.skinning===!1||!q.isSkinnedMesh&&Ue.skinning===!0||q.isInstancedMesh&&Ue.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ue.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ue.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ue.instancingMorph===!1&&q.morphTexture!==null||Ue.envMap!==Oe||X.fog===!0&&Ue.fog!==Se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==Xe||Ue.vertexTangents!==tt||Ue.morphTargets!==De||Ue.morphNormals!==nt||Ue.morphColors!==zt||Ue.morphTargetsCount!==an||Ue.numLightProbeGrids!==Ha(R.state.lightProbeGridArray)?ht=!0:(Ue.outputColorSpace!==be||Ue.toneMapping!==yt)&&(ur=!0):(ht=!0,Ue.__version=X.version);let on=Ue.currentProgram;(ht===!0||ur===!0)&&(on=ur===!0?Ga(X,F,q,be,yt):lr(X,F,q),$&&X.isNodeMaterial&&$.onUpdateProgram(X,on,Ue));let Va=!1,Ui=!1,dr=!1;const lt=on.getUniforms(),tn=Ue.uniforms;if(L.useProgram(on.program)&&(Va=!0,Ui=!0,dr=!0),X.id!==Y&&(Y=X.id,Ui=!0),Va||le!==E){L.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(z,"projectionMatrix",E.projectionMatrix),lt.setValue(z,"viewMatrix",E.matrixWorldInverse);const qt=lt.map.cameraPosition;qt!==void 0&&qt.setValue(z,Zt.setFromMatrixPosition(E.matrixWorld)),D.logarithmicDepthBuffer&&lt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),le!==E&&(le=E,Ui=!0,dr=!0)}if(Ue.needsLights&&(fn.state.sunShadowMap.length>0&&lt.setValue(z,"sunShadowMap",fn.state.sunShadowMap,se),fn.state.directionalShadowMap.length>0&&lt.setValue(z,"directionalShadowMap",fn.state.directionalShadowMap,se),fn.state.spotShadowMap.length>0&&lt.setValue(z,"spotShadowMap",fn.state.spotShadowMap,se),fn.state.pointShadowMap.length>0&&lt.setValue(z,"pointShadowMap",fn.state.pointShadowMap,se)),q.isSkinnedMesh){lt.setOptional(z,q,"bindMatrix"),lt.setOptional(z,q,"bindMatrixInverse");const Rt=q.skeleton;Rt&&(Rt.boneTexture===null&&Rt.computeBoneTexture(),lt.setValue(z,"boneTexture",Rt.boneTexture,se))}q.isBatchedMesh&&(lt.setOptional(z,q,"batchingTexture"),lt.setValue(z,"batchingTexture",q._matricesTexture,se),lt.setOptional(z,q,"batchingIdTexture"),lt.setValue(z,"batchingIdTexture",q._indirectTexture,se),lt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&lt.setValue(z,"batchingColorTexture",q._colorsTexture,se));const Vn=K.morphAttributes;if((Vn.position!==void 0||Vn.normal!==void 0||Vn.color!==void 0)&&ie.update(q,K,on),(Ui||Ue.receiveShadow!==q.receiveShadow)&&(Ue.receiveShadow=q.receiveShadow,lt.setValue(z,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(tn.envMapIntensity.value=F.environmentIntensity),tn.dfgLUT!==void 0&&(tn.dfgLUT.value=PS()),Ui){if(lt.setValue(z,"toneMappingExposure",N.toneMappingExposure),Ue.needsLights&&e0(tn,dr),Se&&X.fog===!0&&oe.refreshFogUniforms(tn,Se),oe.refreshMaterialUniforms(tn,X,we,Fe,R.state.transmissionRenderTarget[E.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){const Rt=b;let qt=0;for(const _i of R.state.lightProbeGridArray)_i.texture!==null&&(Rt.textures[qt]=_i.texture,Rt.min[qt]=_i.boundingBox.min,Rt.max[qt]=_i.boundingBox.max,Rt.resolution[qt]=_i.resolution,qt++);for(const _i in Rt)Rt[_i].length=qt;tn.probesSH.value=Rt.textures,tn.probesMin.value=Rt.min,tn.probesMax.value=Rt.max,tn.probesResolution.value=Rt.resolution}Do.upload(z,cr(Ue),tn,se)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Do.upload(z,cr(Ue),tn,se),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(z,"center",q.center),lt.setValue(z,"modelViewMatrix",q.modelViewMatrix),lt.setValue(z,"normalMatrix",q.normalMatrix),lt.setValue(z,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const Rt=X.uniformsGroups;for(let qt=0,_i=Rt.length;qt<_i;qt++){const Pd=Rt[qt];xe.update(Pd,on),xe.bind(Pd,on)}}return on}function e0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function t0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(E,F,K){const X=te.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),te.get(E.texture).__webglTexture=F,te.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:K,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const K=te.get(E);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,K=0){de=E,V=F,H=K;let X=null,q=!1,Se=!1;if(E){const be=te.get(E);if(be.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),fe.copy(E.viewport),Re.copy(E.scissor),$e=E.scissorTest,L.viewport(fe),L.scissor(Re),L.setScissorTest($e),Y=-1;return}else if(be.__webglFramebuffer===void 0)se.setupRenderTarget(E);else if(be.__hasExternalTextures)se.rebindTextures(E,te.get(E.texture).__webglTexture,te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(be.__boundDepthTexture!==Xe){if(Xe!==null&&te.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(E)}}const Ce=E.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(Se=!0);const Oe=te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?X=Oe[F][K]:X=Oe[F],q=!0):E.samples>0&&se.useMultisampledRTT(E)===!1?X=te.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[K]:X=Oe,fe.copy(E.viewport),Re.copy(E.scissor),$e=E.scissorTest}else fe.copy(ze).multiplyScalar(we).floor(),Re.copy(et).multiplyScalar(we).floor(),$e=ot;if(K!==0&&(X=B),L.bindFramebuffer(z.FRAMEBUFFER,X)&&L.drawBuffers(E,X),L.viewport(fe),L.scissor(Re),L.setScissorTest($e),q){const be=te.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,K)}else if(Se){const be=F;for(let Ce=0;Ce<E.textures.length;Ce++){const Oe=te.get(E.textures[Ce]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ce,Oe.__webglTexture,K,be)}}else if(E!==null&&K!==0){const be=te.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,K)}Y=-1};function Cd(E){const F=te.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=D.textureFormatReadable(E.format),F.__typeReadable=D.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,K,X,q,Se,Ne,be=0){if(!(E&&E.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){L.bindFramebuffer(z.FRAMEBUFFER,Ce);try{const Oe=E.textures[be],Xe=Oe.format,tt=Oe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const De=Cd(Oe);if(De.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&K>=0&&K<=E.height-q&&z.readPixels(F,K,X,q,pe.convert(Xe),pe.convert(tt),Se)}finally{const Oe=de!==null?te.get(de).__webglFramebuffer:null;L.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,F,K,X,q,Se,Ne,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(F>=0&&F<=E.width-X&&K>=0&&K<=E.height-q){L.bindFramebuffer(z.FRAMEBUFFER,Ce);const Oe=E.textures[be],Xe=Oe.format,tt=Oe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const De=Cd(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,nt),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(F,K,X,q,pe.convert(Xe),pe.convert(tt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const zt=de!==null?te.get(de).__webglFramebuffer:null;L.bindFramebuffer(z.FRAMEBUFFER,zt);const yt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await k0(z,yt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,nt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(nt),z.deleteSync(yt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,K=0){const X=Math.pow(2,-K),q=Math.floor(E.image.width*X),Se=Math.floor(E.image.height*X),Ne=F!==null?F.x:0,be=F!==null?F.y:0;se.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,Ne,be,q,Se),L.unbindTexture()},this.copyTextureToTexture=function(E,F,K=null,X=null,q=0,Se=0){let Ne,be,Ce,Oe,Xe,tt,De,nt,zt;const yt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(K!==null)Ne=K.max.x-K.min.x,be=K.max.y-K.min.y,Ce=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,Xe=K.min.y,tt=K.isBox3?K.min.z:0;else{const lt=Math.pow(2,-q);Ne=Math.floor(yt.width*lt),be=Math.floor(yt.height*lt),E.isDataArrayTexture?Ce=yt.depth:E.isData3DTexture?Ce=Math.floor(yt.depth*lt):Ce=1,Oe=0,Xe=0,tt=0}X!==null?(De=X.x,nt=X.y,zt=X.z):(De=0,nt=0,zt=0);const vt=pe.convert(F.format),an=pe.convert(F.type);let Ue;F.isData3DTexture?(se.setTexture3D(F,0),Ue=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(se.setTexture2DArray(F,0),Ue=z.TEXTURE_2D_ARRAY):(se.setTexture2D(F,0),Ue=z.TEXTURE_2D),L.activeTexture(z.TEXTURE0),L.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);const fn=L.getParameter(z.UNPACK_ROW_LENGTH),ht=L.getParameter(z.UNPACK_IMAGE_HEIGHT),ur=L.getParameter(z.UNPACK_SKIP_PIXELS),on=L.getParameter(z.UNPACK_SKIP_ROWS),Va=L.getParameter(z.UNPACK_SKIP_IMAGES);L.pixelStorei(z.UNPACK_ROW_LENGTH,yt.width),L.pixelStorei(z.UNPACK_IMAGE_HEIGHT,yt.height),L.pixelStorei(z.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(z.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(z.UNPACK_SKIP_IMAGES,tt);const Ui=E.isDataArrayTexture||E.isData3DTexture,dr=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const lt=te.get(E),tn=te.get(F),Vn=te.get(lt.__renderTarget),Rt=te.get(tn.__renderTarget);L.bindFramebuffer(z.READ_FRAMEBUFFER,Vn.__webglFramebuffer),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,Rt.__webglFramebuffer);for(let qt=0;qt<Ce;qt++)Ui&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,te.get(E).__webglTexture,q,tt+qt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,te.get(F).__webglTexture,Se,zt+qt)),z.blitFramebuffer(Oe,Xe,Oe+Ne,Xe+be,De,nt,De+Ne,nt+be,z.DEPTH_BUFFER_BIT,z.NEAREST);L.bindFramebuffer(z.READ_FRAMEBUFFER,null),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||te.has(E)){const lt=te.get(E),tn=te.get(F);L.bindFramebuffer(z.READ_FRAMEBUFFER,C),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let Vn=0;Vn<Ce;Vn++)Ui?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,lt.__webglTexture,q,tt+Vn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,lt.__webglTexture,q),dr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,tn.__webglTexture,Se,zt+Vn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,tn.__webglTexture,Se),q!==0?z.blitFramebuffer(Oe,Xe,Oe+Ne,Xe+be,De,nt,De+Ne,nt+be,z.COLOR_BUFFER_BIT,z.NEAREST):dr?z.copyTexSubImage3D(Ue,Se,De,nt,zt+Vn,Oe,Xe,Ne,be):z.copyTexSubImage2D(Ue,Se,De,nt,Oe,Xe,Ne,be);L.bindFramebuffer(z.READ_FRAMEBUFFER,null),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else dr?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ue,Se,De,nt,zt,Ne,be,Ce,vt,an,yt.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Ue,Se,De,nt,zt,Ne,be,Ce,vt,yt.data):z.texSubImage3D(Ue,Se,De,nt,zt,Ne,be,Ce,vt,an,yt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,De,nt,Ne,be,vt,an,yt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,De,nt,yt.width,yt.height,vt,yt.data):z.texSubImage2D(z.TEXTURE_2D,Se,De,nt,Ne,be,vt,an,yt);L.pixelStorei(z.UNPACK_ROW_LENGTH,fn),L.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(z.UNPACK_SKIP_PIXELS,ur),L.pixelStorei(z.UNPACK_SKIP_ROWS,on),L.pixelStorei(z.UNPACK_SKIP_IMAGES,Va),Se===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(Ue),L.unbindTexture()},this.initRenderTarget=function(E){te.get(E).__webglFramebuffer===void 0&&se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),L.unbindTexture()},this.resetState=function(){V=0,H=0,de=null,L.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}const Df=.003,tl=1.2;function iu(t,e,n,i){return{yaw:t-n*Df,pitch:Et.clamp(e-i*Df,-tl,tl)}}function Vp(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:Et.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-tl,tl)}}class LS{yaw=0;pitch=0;freeMode=!1;anchor=new k;freePos=new k;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new k(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new Hn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,iu(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,Vp(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new k;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new k(-i.z,0,i.x),s=new k;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=Et.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=Et.clamp(this.freePos.y,1.1,4.4),this.freePos.z=Et.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function NS(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}const Sr=64,hs=[{phase:"hook",start:0,caption:"AI scientists can't get bored."},{phase:"trap",start:6,caption:"Local tweaks. Rising boredom."},{phase:"snap",start:20,caption:"Boredom triggers real scouting."},{phase:"breakthrough",start:36,caption:"Verified breakthrough."},{phase:"proof",start:54,caption:"Artificial Scientist Swarms."}],DS=2.8,rc=t=>typeof t=="number"&&Number.isFinite(t)?t:null,US=new Set(["llm.called","agent.assigned"]);function kS(t,e,n){const i=[...t].sort((A,$)=>A.tick-$.tick),r=i.filter(A=>A.type==="boredom.measured"&&rc(A.payload?.B)!=null).map(A=>({tick:A.tick,agentId:A.agentId||"",value:rc(A.payload?.B),regime:String(A.payload?.regime||""),round:A.round??0})),s=r.find(A=>A.regime==="BOREDOM_SNAP"&&A.value>=.7)||r.find(A=>A.regime==="BOREDOM_SNAP"),a=i.filter(A=>A.type==="discovery.made").map(A=>({tick:A.tick,agentId:A.agentId||"",reward:rc(A.payload?.reward)??0}));if(!s||!a.some(A=>A.tick>s.tick))return null;const o=a.filter(A=>A.tick>s.tick),l=o.reduce((A,$)=>$.reward>A.reward?$:A,o[0]),c=i.filter(A=>A.type==="experiment.finished"&&A.payload?.status==="replicated").map(A=>A.tick),u=Math.max(0,(r[0]?.tick??0)-2),d=r.find(A=>A.tick>s.tick&&A.round>(s.round||0))?.tick??null,f=d==null?null:i.find(A=>A.tick>d&&A.type==="experiment.finished")?.tick??l.tick-10,h=i.filter(A=>A.type==="verdict.issued"&&A.tick>=l.tick),g=h.find(A=>/candidate|award|winner/i.test(String(A.payload?.verdict||""))),v=Math.min(n,Math.max(l.tick+4,h.at(-1)?.tick??l.tick+12)),p=e.filter(A=>A.bored).map(A=>A.id),m=i.find(A=>A.type==="agent.assigned"&&p.includes(A.agentId||"")&&A.tick>=s.tick)?.tick??s.tick+1,_=d??l.tick,M=i.filter(A=>A.type==="observation.received"&&A.tick>s.tick&&A.tick<_&&["sources","snap"].includes(String(A.payload?.kind||""))&&A.message&&A.message!=="(untitled)").map(A=>({tick:A.tick,agentId:A.agentId||"",title:String(A.message).split(";")[0].trim(),tool:String(A.payload?.tool||(A.payload?.kind==="snap"?"snap search":"literature"))})),b=i.filter(A=>A.type==="items.shared"&&A.tick>s.tick&&A.tick<_).map(A=>({tick:A.tick,agentId:A.agentId||""})),T=A=>Math.min(l.tick-1,Math.max(s.tick+1,Math.min(n,A))),R=T(Math.max(s.tick+10,...M.map(A=>A.tick),...b.map(A=>A.tick))),x=d==null?l.tick-1:T(d),S=f==null?l.tick-16:f-6,O=[[0,0],[6,Math.min(n,u)],[19,Math.min(n,s.tick-3)],[23,Math.min(l.tick,n,s.tick+1)],[32,T(Math.min(R+1,(x??l.tick)-1))],[36,T(Math.max(d==null?s.tick+1:x,S))],[46,l.tick],[52,v],[Sr,v]];for(let A=1;A<O.length;A++)O[A][1]=Math.max(O[A][1],O[A-1][1]);const N=new Map;for(const A of i)US.has(A.type)||N.set(Math.floor(A.tick),Math.min(3,(N.get(Math.floor(A.tick))||0)+1));return{keys:O,weights:N,snapTick:s.tick,snapAgent:s.agentId,foundedTick:m,boredAgents:p,discoveries:a,breakthroughAgent:l.agentId,bestTick:l.tick,replicated:c,boredom:r,papers:M,shares:b,verdict:g?{tick:g.tick,agentId:g.agentId||"",label:String(g.payload?.verdict)}:void 0,startTick:u,endTick:v}}function Uf(t,e){const n=t.keys,i=Math.max(0,Math.min(Sr,e));let r=n.findIndex((h,g)=>g<n.length-1&&i<n[g+1][0]);r<0&&(r=n.length-2);const[s,a]=n[r],[o,l]=n[r+1];if(l<=a||o<=s)return a;const c=(i-s)/(o-s),u=[];for(let h=Math.floor(a);h<Math.ceil(l);h++)u.push(.35+(t.weights.get(h)||0));const d=u.reduce((h,g)=>h+g,0);let f=c*d;for(let h=0;h<u.length;h++){if(f<=u[h]){const g=Math.floor(a)+h+f/u[h];return Math.max(a,Math.min(l,g))}f-=u[h]}return l}function OS(t){let e=hs[0];for(const n of hs)t>=n.start&&(e=n);return e}const ru=t=>{const e=Math.max(0,Math.min(1,t));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2};function FS(t,e){const n=t.boredom.filter(d=>d.tick<=e);if(!n.length)return{value:0,shown:0,regime:"EXPLOIT",agentId:""};const i=n.at(-1).round,r=n.filter(d=>d.round===i),s=r.reduce((d,f)=>f.value>d.value?f:d,r[0]),a=n.slice(0,-1),o=a.at(-1)?.round,l=a.filter(d=>d.round===o),c=l.length?l.reduce((d,f)=>f.value>d.value?f:d,l[0]).value:0,u=c+(s.value-c)*ru((e-n.at(-1).tick)/2);return{value:s.value,shown:u,regime:s.regime,agentId:s.agentId}}function zS(t,e){return e==="BOREDOM_SNAP"||t>=.7?"snap":t>=.35?"amber":"cool"}function BS(t,e){return t.replicated.filter(n=>n<=e).length}function $S(t,e,n,i,r=360,s=120,a=""){const o=Math.max(1,t.length),l=h=>8+(Math.max(e,Math.min(n,h))-e)/Math.max(1,n-e)*(r-16),c=h=>s-10-h/o*(s-28);let u=0,d=`M${l(e).toFixed(1)} ${c(0).toFixed(1)}`;for(const h of t){if(h>i)break;d+=` H${l(h).toFixed(1)} V${c(++u).toFixed(1)}`}d+=` H${l(Math.min(i,n)).toFixed(1)}`;const f=Array.from({length:o+1},(h,g)=>`<line x1="8" x2="${r-8}" y1="${c(g).toFixed(1)}" y2="${c(g).toFixed(1)}"/>`).join("");return`<svg viewBox="0 0 ${r} ${s}" class="cin-step" role="img" aria-label="${a}"><g class="grid">${f}</g><path d="${d}"/><circle cx="${l(Math.min(i,n)).toFixed(1)}" cy="${c(u).toFixed(1)}" r="5"/></svg>`}const HS="github.com/arii/caffeinated",GS={title:"Pilot A/B · control vs boredom",rows:[{task:"hadamard19",result:"Tie"},{task:"bixbench_mini",result:"Control 2 of 3"},{task:"playworld_mini",result:"Within noise"},{task:"ignobel",result:"Control confirmed more"}],note:"3 runs per task · no significant boredom benefit yet"},vo={repo:HS,pilot:GS},VS={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Our hypothesis is that existing AI scientist swarms get stuck because they are bored—trapped in repetitive, low-payoff loops. Artificial Scientist Swarms (ASS) fixes this by adding a deterministic boredom meter grounded in psychology. It tracks stagnation, novelty deficit, and overload to detect when the swarm is bored and trigger a seeking state—forcing a jump from routine exploitation to paradigm breakout. Validated on known benchmarks, we put the swarm on an Ig Nobel challenge: research that makes you laugh, then think. Agents search via Exa, share memory on past.dev, pre-register real-data tests, and get ranked by a two-judge committee and final IgJudge."},WS=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],XS={project:"Ig Nobel Prize Winning ASS (Artificial Scientist Swarms)",team:"Team caffeinated",names:["Ariel Anders","Jialin Feng","Neeraj Shah","Masha Baidachna"]},ZS={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},qS={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa"},jS={source:"Exa result:",missingExa:"results not kept as source cards",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},YS={citations:[{runId:"50bbe2bb-0a86-50d9-9ef8-be8aa5fa3929",studyId:"study:14",category:"Transport",text:"Kitchen Physics Lab — for confirming that heavier cars get fewer city miles per gallon.",note:"Strongest absolute correlation among eligible studies; not a prize award."}],proxyNote:"Metric / proxy",noProxy:"No proxy note is present in this recording.",studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"Prizes awarded: {N}",awardFallback:"Award issued",creditErrorSuffix:" (Tinker credit ran out)",noAwards:"No prizes awarded yet — this run stopped before committee judging.",factualLine:"Real result so far: {C} of {R} tests that ran passed their preregistered gates; {K} also pass the |ρ| ≥ 0.1 floor added after the run ({N} registered){committeeSuffix}",noCommitteeSuffix:"; no committee score yet",countLine:"{N} registered · {M} confirmed ({K} under the post-hoc |ρ| ≥ 0.1 floor)",track3Line:"Track 3 check (exploratory, 3 runs each): preregistered primary (guard2, stopped early, guarded) B 0.26 > S 0.24 > A 0.11; complete strict-guard set, picked after it finished, S 0.30 > A 0.09 > B 0.06. B leads S on mean only because S scored 0 on run 3001, where the guard rejected its candidate for the known integer-loop-bound false positive (unguarded 0.333); S beats B on the other two runs.",memoryComparisonUrl:"https://github.com/arii/caffeinated/blob/agent/devin/overnight/experiments/memory-comparison/README.md",track3Url:"https://github.com/arii/caffeinated/blob/agent/devin/overnight/experiments/confirmatory/RESULTS.md",bixbenchUrl:"https://github.com/arii/caffeinated/blob/agent/devin/overnight/experiments/real-runs/bixbench_mini-v2/held_out_test.json",charts:{toolsCaption:"Live calls recorded in this run (Kimi + Exa + past.dev)",sourceCaption:"Source cards; some papers repeat.",funnelCaption:"Known relationships in teaching datasets, not discoveries.",bixbench:{baseline:{correct:1,total:7,ci:[.03,.51]},best:{correct:6,total:7,ci:[.49,.97]},caption:"7 held-out questions, one run."},track3:{groups:[{label:"Preregistered (stopped early)",values:[{arm:"B",value:.259},{arm:"S",value:.241},{arm:"A",value:.111}]},{label:"Complete set (picked after)",values:[{arm:"S",value:.296},{arm:"A",value:.093},{arm:"B",value:.056}]}],legend:[{arm:"B",label:"boredom swarm"},{arm:"S",label:"single agent"},{arm:"A",label:"meter off"}],caption:"3 runs each — neither ordering is significant."},memory:{pastdev:{hitAt1:.65,hitAt8:.95,medianLatencyMs:562},local:{hitAt1:.3,hitAt8:.825,medianLatencyMs:15},memories:419,probes:40,caption:"419 real memories, 40 hand-written probes."}}},Tr={event:VS,tools:WS,authors:XS,boredom:ZS,sections:qS,labels:jS,results:YS},In=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),KS=(t,e)=>t.length>e?`${t.slice(0,e-1).trimEnd()}…`:t,kf=(t,e)=>t<0?0:t<.25?t/.25:Math.exp(-(t-.25)/e),Ks=new k(0,.7,-1.4),Js=Object.fromEntries(hs.map(t=>[t.phase,t.start]));function JS(t){const{world:e,renderer:n,recording:i}=t,r=e.camera,s=(i.manifest.agents||[]).map(B=>({id:String(B.agent_id),name:String(B.display_name||B.label||""),bored:B.founded_because==="bored"})),a=kS(i.events,s,i.manifest.totalTicks);if(!a)return null;const o=a,l=B=>s.find(C=>C.id===B)?.name||"Lab",c=B=>{for(let C=0;C<=Sr;C+=1/60)if(Uf(o,C)>=B)return C;return Sr},u=c(o.snapTick),d=c(o.foundedTick),f=c(o.bestTick),h=o.discoveries.filter(B=>B.tick>o.snapTick).map(B=>({t:c(B.tick),best:B.tick===o.bestTick,agentId:B.agentId})),g=o.verdict?c(o.verdict.tick):Sr,v=document.createElement("div");v.id="cinema",v.setAttribute("aria-hidden","true");const p=o.replicated.filter(B=>B>o.snapTick).length;v.innerHTML=`<div class="cin-glow"></div><div class="cin-crimson"></div><svg class="cin-links" viewBox="0 0 1920 1080" preserveAspectRatio="none"></svg><div class="cin-tags"></div>
 <div class="cin-brand"><b>${In(Tr.authors.project)}</b><span>Real run · Ig Nobel task</span></div>
 <div class="cin-telemetry"><div class="cin-meter"><div class="row"><span class="lbl">Boredom</span><b class="val">0.00</b><i class="chip">EXPLOIT</i></div><div class="bar"><span></span><em style="left:70%"></em></div></div>
 <div class="cin-score"><div class="row"><span class="lbl">Replicated findings</span><b class="val">0</b></div><div class="chart"></div></div></div>
 <div class="cin-papers"></div>
 <div class="cin-burst"><b>New best</b><span>Replicated on both halves</span></div>
 <div class="cin-proof"><div class="credit"><b>${In(Tr.authors.project)}</b><span>${Tr.authors.names.map(In).join(" · ")}</span></div><div class="kicker">This run</div><div class="stats">
  <div><b>${Math.max(...o.boredom.map(B=>B.value)).toFixed(2)}</b><span>boredom at snap</span></div>
  <div><b>${o.boredAgents.length}</b><span>labs founded by boredom</span></div>
  <div><b>${p}</b><span>replicated after the snap</span></div>
  <div><b>${o.verdict?1:0}</b><span>${In(o.verdict?.label||"award candidate")}</span></div></div>
  <div class="kicker">${In(vo.pilot.title)}</div><div class="pilot">${vo.pilot.rows.map(B=>`<div><span>${In(B.task)}</span><b>${In(B.result)}</b></div>`).join("")}</div>
  <p class="note">${In(vo.pilot.note)}</p><div class="repo">${In(vo.repo)}</div></div>
 <div class="cin-caption"><span></span></div>`,document.body.appendChild(v);const m=B=>v.querySelector(B),_=new U_("#ffc451",0,26,1);e.scene.add(_);const M=e.exposure??1,b=()=>new Map((e.agentPositions?.()||[]).map(B=>[B.id,B.position])),T=(B,C)=>{const G=B.map(V=>C.get(V)).filter(Boolean);return G.length?G.reduce((V,H)=>V.add(H),new k).multiplyScalar(1/G.length):Ks.clone()},R=B=>(B.x=Et.clamp(B.x,-10.6,10.6),B.y=Et.clamp(B.y,1.2,4.35),B.z=Et.clamp(B.z,-12,11.4),B),x=(B,C=10.2,G=4.25)=>{const V=.42-B*.012;return{pos:R(new k(Ks.x+Math.sin(V)*C,G,Ks.z+Math.cos(V)*C)),look:Ks.clone()}},S=(B,C,G,V)=>{const H=x(C).pos,de=H.clone().sub(B);de.y=0,de.normalize().applyAxisAngle(new k(0,1,0),.18);const Y=B.clone().add(new k(0,1.05,0));return{pos:R(Y.clone().add(de.multiplyScalar(G)).add(new k(0,V,0))),look:Y}},O=(B,C,G)=>{if(B==="hook"||B==="trap")return x(C);if(B==="snap"){const V=C<d+1||!o.boredAgents.length?[o.snapAgent]:o.boredAgents;return S(T(V,G),C,5.2-Math.min(1.2,(C-Js.snap)*.06),1.5)}if(B==="breakthrough"){const V=T([o.breakthroughAgent],G),H=S(V,C,5.6,2.2),de=ru((C-f+.4)/5),Y=H.pos.clone().sub(H.look).setY(0).normalize();return{pos:R(H.pos.clone().add(Y.multiplyScalar(de*3.4)).setY(Math.min(3.7,H.pos.y+de*.3))),look:H.look.clone().lerp(Ks.clone().setY(2),de*.4)}}return x(C,10.4,4.3)},N=B=>{const C=B.clone().project(r);return{x:(C.x+1)/2*1920,y:(1-C.y)/2*1080,visible:C.z<1&&Math.abs(C.x)<1.05&&Math.abs(C.y)<1.05}};let A={papers:"",tags:"",links:"",chart:""};function $(B){const C=Math.max(0,Math.min(Sr,B)),G=Uf(o,C),V=OS(C);t.seek(G),t.updateWorld(C),e.scene.traverse(Le=>{Le.isSprite&&(Le.visible=!1)});const H=b(),de=hs.findIndex(Le=>Le.phase===V.phase),Y=ru((C-V.start)/2.6);let le=O(V.phase,C,H);if(de>0&&Y<1){const Le=O(hs[de-1].phase,C,H);le={pos:Le.pos.lerp(le.pos,Y),look:Le.look.lerp(le.look,Y)}}r.position.copy(le.pos),r.lookAt(le.look),r.updateMatrixWorld();const fe=Math.max(kf(C-u,1.6),V.phase==="snap"||V.phase==="trap"&&C>u?.32:0)*(V.phase==="breakthrough"?Math.max(0,1-(C-Js.breakthrough)/2):1);let Re=0;for(const Le of h)Re=Math.max(Re,kf(C-Le.t,Le.best?2.4:1.3)*(Le.best?1:.65));C>f&&V.phase!=="proof"&&(Re=Math.max(Re,.7)),V.phase==="proof"&&(Re=Math.max(Re,.7*Math.max(0,1-(C-Js.proof)/3)));const $e=T([o.breakthroughAgent],H);_.position.set($e.x,3.2,$e.z),_.intensity=Re*14,n.toneMappingExposure=M*(1+Re*.22-fe*.12),v.style.setProperty("--gold",Re.toFixed(3)),v.style.setProperty("--crimson",fe.toFixed(3)),v.dataset.phase=V.phase;const ae=FS(o,G),_e=zS(ae.shown,ae.regime);m(".cin-meter").dataset.tone=_e,m(".cin-meter .val").textContent=ae.shown.toFixed(2),m(".cin-meter .chip").textContent=ae.regime||"EXPLOIT",m(".cin-meter .bar span").style.width=`${Math.round(ae.shown*100)}%`;const Ae=BS(o,G);m(".cin-score .val").textContent=String(Ae),m(".cin-score").dataset.gold=String(Ae>o.replicated.filter(Le=>Le<=o.snapTick).length);const Fe=$S(o.replicated,o.startTick,o.endTick,G,400,118,"Replicated findings");Fe!==A.chart&&(m(".cin-score .chart").innerHTML=Fe,A.chart=Fe);const we=m(".cin-caption"),He=Math.min(1,(C-V.start-.25)/.5),gt=hs[de+1],ze=V.phase==="proof"?1:Math.min(1,(V.start+DS-C)/.4,gt?(gt.start-C-.15)/.4:1);we.style.opacity=String(Math.max(0,Math.min(He,ze))),m(".cin-caption span").textContent=V.caption;const et=V.phase==="snap"?o.papers.filter(Le=>Le.tick<=G).slice(-3):[],ot=et.map(Le=>`<div class="paper"><i>${In(Le.tool==="seed"?"literature":Le.tool)}</i><b>${In(KS(Le.title,54))}</b><span>${In(l(Le.agentId))}</span></div>`).join("");ot!==A.papers&&(m(".cin-papers").innerHTML=ot,A.papers=ot);const qe=[],Tt=[],ct=[],It=(Le,z,Nt)=>{const ut=H.get(Le);if(!ut)return;const D=N(ut.clone().add(new k(0,2.05,0)));if(!D.visible)return;let L=D.y;for(;ct.some(ee=>Math.abs(ee.x-D.x)<300&&Math.abs(ee.y-L)<46);)L-=48;ct.push({x:D.x,y:L}),qe.push(`<div class="tag ${Nt}" style="left:${D.x.toFixed(0)}px;top:${L.toFixed(0)}px">${In(z)}</div>`)};if(C>=u-.2&&C<36&&It(o.snapAgent,`${l(o.snapAgent)} · B ${Math.max(...o.boredom.filter(Le=>Le.agentId===o.snapAgent&&Le.tick<=G).map(Le=>Le.value),0).toFixed(2)}`,"snap"),C>=d&&C<Js.breakthrough)for(const Le of o.boredAgents)It(Le,`${l(Le)} · new lab`,"founded");const _t=h.some(Le=>C>=Le.t&&C<Le.t+3.2);for(const Le of h)!_t&&C>=Le.t+3.2&&C<(Le.best?Js.proof:Le.t+4.6)&&V.phase==="breakthrough"&&It(Le.agentId,Le.best&&C>=g?`${l(Le.agentId)} · ${o.verdict?.label}`:`${l(Le.agentId)} · replicated`,"gold");for(const Le of o.shares){const z=c(Le.tick);if(C>=z&&C<z+3.2&&V.phase==="snap"){const Nt=o.shares.filter(L=>L!==Le).map(L=>L.agentId),ut=H.get(Le.agentId),D=Nt.map(L=>H.get(L)).find(Boolean);if(ut&&D){const L=N(ut.clone().add(new k(0,1.2,0))),ee=N(D.clone().add(new k(0,1.2,0)));Tt.push(`<path class="memory" d="M${L.x.toFixed(0)} ${L.y.toFixed(0)} Q${((L.x+ee.x)/2).toFixed(0)} ${(Math.min(L.y,ee.y)-120).toFixed(0)} ${ee.x.toFixed(0)} ${ee.y.toFixed(0)}"/>`),Le===o.shares[0]&&qe.push(`<div class="tag memory" style="left:${((L.x+ee.x)/2).toFixed(0)}px;top:${(Math.min(L.y,ee.y)-80).toFixed(0)}px">shared memory</div>`)}}}if(et.length){const Le=et.at(-1),z=H.get(Le.agentId);if(z){const Nt=N(z.clone().add(new k(0,1.3,0)));Tt.push(`<path class="scout" d="M${Nt.x.toFixed(0)} ${Nt.y.toFixed(0)} L470 ${(330+(et.length-1)*118).toFixed(0)}"/>`)}}const Zt=qe.join(""),Mt=Tt.join("");Zt!==A.tags&&(m(".cin-tags").innerHTML=Zt,A.tags=Zt),Mt!==A.links&&(m(".cin-links").innerHTML=Mt,A.links=Mt);const Ft=h.filter(Le=>C>=Le.t).at(-1),Qt=m(".cin-burst");Qt.style.opacity=Ft&&V.phase==="breakthrough"?String(Math.max(0,1-Math.max(0,C-Ft.t-2.6)/.6)):"0",Qt.style.setProperty("--k",Ft?String(Math.min(1,(C-Ft.t)/.35)):"0"),n.render(e.scene,r)}return{render:$,plan:o,duration:Sr}}const Qs=new k;function kn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Qs.copy(e),Qs[i]=0,Qs.normalize();const c=.5*a/(a+o),u=1-Qs.angleTo(t)/l;return Math.sign(Qs[n])===1?u*c:o/(a+o)+c+c*(1-u)}class Wu extends Br{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new k,c=new k,u=new k(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,g=d.length/6,v=new k,p=.5/a;for(let m=0,_=0;m<d.length;m+=3,_+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=u.x*Math.sign(l.x)+c.x*s,d[m+1]=u.y*Math.sign(l.y)+c.y*s,d[m+2]=u.z*Math.sign(l.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:v.set(1,0,0),h[_+0]=kn(v,c,"z","y",s,i),h[_+1]=1-kn(v,c,"y","z",s,n);break;case 1:v.set(-1,0,0),h[_+0]=1-kn(v,c,"z","y",s,i),h[_+1]=1-kn(v,c,"y","z",s,n);break;case 2:v.set(0,1,0),h[_+0]=1-kn(v,c,"x","z",s,e),h[_+1]=kn(v,c,"z","x",s,i);break;case 3:v.set(0,-1,0),h[_+0]=1-kn(v,c,"x","z",s,e),h[_+1]=1-kn(v,c,"z","x",s,i);break;case 4:v.set(0,0,1),h[_+0]=1-kn(v,c,"x","y",s,e),h[_+1]=1-kn(v,c,"y","x",s,n);break;case 5:v.set(0,0,-1),h[_+0]=kn(v,c,"x","y",s,e),h[_+1]=1-kn(v,c,"y","x",s,n);break}}static fromJSON(e){return new Wu(e.width,e.height,e.depth,e.segments,e.radius)}}const Of=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function Wp(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return Of[e%Of.length]}function Uo(t,e,n,i){const a=(d,f)=>d<n.minX+.2||d>n.maxX-.2||f<n.minZ+.2||f>n.maxZ-.2||i.some(h=>d>h.minX-.2&&d<h.maxX+.2&&f>h.minZ-.2&&f<h.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],l=new Set(["0,0"]);let c=-1;for(let d=0;d<o.length&&d<12e3;d++){const f=o[d];if(Math.hypot(f.x-e.x,f.z-e.z)<.48){c=d;break}for(const[h,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const v=f.x+h,p=f.z+g,m=`${Math.round((v-t.x)/.45)},${Math.round((p-t.z)/.45)}`;!l.has(m)&&!a(v,p)&&(l.add(m),o.push({x:v,z:p,parent:d}))}}if(c<0)return[];const u=[];for(let d=c;d>=0;d=o[d].parent)u.push({x:o[d].x,z:o[d].z});return u.reverse().slice(1)}const Wi={x:-7.8,z:-4.6},QS=[0,4,8,2,6,10,1,5,9,3,7,11];function su(t=0){const e=-Math.PI/2+QS[(t%12+12)%12]*Math.PI/6;return{x:Wi.x+Math.cos(e)*2.15,z:Wi.z+Math.sin(e)*2.15}}function au(t,e=0){if(t==="culture")return su(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const _r=(t,e,n)=>t+(e-t)*n;function Xp(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=_r(1.35,.5,n),s=_r(2.2,.6,n),a=e?0:n<.35?_r(.06,0,n/.35):0,o=_r(9,4,n),l=n>.45?_r(0,.42,(n-.45)/.55):0,c=n>.55?_r(0,.12,(n-.55)/.45):0,u=n>.5?_r(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:l,slump:c,saturation:u,zzz:n>=.8}}function eM(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Ni(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const Ff=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function Ls(t){const e=Ni(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+Ff[n].map((r,s)=>Math.round(r+(Ff[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const tM={EXPLOIT:["Exploiting","calm","After a significant improvement or before min_attempts: most workers refine; one explores."],BOREDOM_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],YOKED_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],PARADIGM_BREAKOUT:["Paradigm breakout","breakout","All workers explore; the gate requires a top-level mechanism not used recently."],CONVERGED:["Converged","converged","The gate allows only exact reruns of the best for confirmation."],FRUSTRATED:["Frustrated","frustrated",""]};function kr(t){if(!t)return{label:"",tone:"calm",description:""};const e=tM[t];return e?{label:e[0],tone:e[1],description:e[2]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm",description:""}}function nM(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function iM(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const ou=t=>Math.max(0,Math.min(1,t)),rM=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,zf=t=>{const e=ou(t);return e===0||e===1?e:ou(rM(e))};function sM(t,e){const n=ou(t),i=Math.max(0,Math.floor(e)),r=zf(n/.4),s=Array.from({length:i},(a,o)=>{const l=.4+o*.6/Math.max(1,i),c=.6/Math.max(1,i);return zf((n-l)/c)});return{room:r,agents:s}}function aM(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function oM(){const t=new f_;t.background=new Ye("#e4edf3"),t.fog=new zu("#e4edf3",34,90);const e=new Fn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new Br(1,1,1),r=(D,L=.68,ee=0)=>new No({color:D,roughness:L,metalness:ee}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),l=r("#b1bec5",.32,.65),c=r("#c8d3d6"),u=r("#a8b5a1"),d=r("#b4a38c",.8),f=r("#928572");r("#18252a",.38);const h=r("#f9f4e6"),g=r("#3e8493"),v=r("#d2a468"),p=new P_({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:zn}),m=new yr({color:"#fff6dd"}),_=new yr({color:"#80b7ab"}),M=(D,L,ee,te,se,w,y,P=t)=>{const Z=new bt(i,y);return Z.position.set(D,L,ee),Z.scale.set(te,se,w),P.add(Z),Z},b=(D,L,ee,te,se,w,y=t,P=20)=>{const Z=new bt(new Ta(te,te,se,P),w);return Z.position.set(D,L,ee),y.add(Z),Z},T=(D,L,ee,te,se,w=t)=>{const y=new bt(new Hu(te,16,12),se);return y.position.set(D,L,ee),w.add(y),y},R=(D,L,ee,te)=>n.push({minX:D-ee/2,maxX:D+ee/2,minZ:L-te/2,maxZ:L+te/2}),x=(D,L,ee,te,se=t)=>{const w=L.clone().sub(D),y=new bt(new Ta(ee,ee,w.length(),12),te);return y.position.copy(D).add(L).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new k(0,1,0),w.normalize()),se.add(y),y},S=(D,L,ee,te,se,w,y="#f5f4ec",P="#425859",Z=0)=>{const U=document.createElement("canvas");U.width=1024,U.height=Math.max(64,Math.round(1024*w/se));const oe=U.getContext("2d");oe.fillStyle=y,oe.fillRect(0,0,U.width,U.height);const ue=D.split(`
`),J=Math.min(U.height/(ue.length+1),U.width/(Math.max(...ue.map(ie=>ie.length))*.62));oe.fillStyle=P,oe.textAlign="center",oe.textBaseline="middle",oe.font=`500 ${J}px sans-serif`,ue.forEach((ie,j)=>oe.fillText(ie,512,U.height/2+(j-(ue.length-1)/2)*J*1.3));const re=new gr(U);re.colorSpace=Gt;const he=new yr({map:re,side:zn}),I=new bt(new wr(se,w),he);return I.position.set(L,ee,te),I.rotation.y=Z,t.add(I),I},O=(D,L,ee)=>{const te=document.createElement("canvas");te.width=960,te.height=360;const se=te.getContext("2d");se.fillStyle="#fff9ea",se.strokeStyle="#b6c9c4",se.lineWidth=4,se.beginPath(),se.roundRect(4,4,952,310,30),se.fill(),se.stroke(),se.beginPath(),se.moveTo(450,313),se.lineTo(480,352),se.lineTo(510,313),se.fill(),se.textAlign="left",se.fillStyle="#35716c",se.font="bold 38px sans-serif",se.fillText(D.toUpperCase(),34,48),se.fillStyle="#263b41",se.font="48px sans-serif";const w=L.replace(/\s+/g," ").trim().split(" "),y=[];let P="";for(const U of w){const oe=P?P+" "+U:U;se.measureText(oe).width>875&&P?(y.push(P),P=U):P=oe}P&&y.push(P),y.slice(0,3).forEach((U,oe)=>{let ue=U;oe===2&&y.length>3&&(ue=ue.replace(/.{0,3}$/,"…")),se.fillText(ue,34,110+oe*53)}),se.fillStyle="#6c817c",se.font="32px sans-serif",se.fillText(ee.length?"WITH "+ee.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const Z=new gr(te);return Z.colorSpace=Gt,new bt(new wr(2.7,1.0125),new yr({map:Z,transparent:!0,side:zn,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new N_("#f5faff","#9caeb8",2.15));const N=new df("#ffffff",2.2);N.position.set(-8,11,3),t.add(N);const A=new df("#d0e9fa",.85);A.position.set(8,5,-8),t.add(A);const $=document.createElement("canvas");$.width=512,$.height=512;const B=$.getContext("2d");B.fillStyle="#d9e2e6",B.fillRect(0,0,512,512);for(let D=0;D<1700;D++){const L=Math.sin(D*41.77)*.5+.5,ee=Math.sin(D*19.31+5)*.5+.5;B.fillStyle=D%3?"#ecf0f1":"#c3d0d6",B.fillRect(L*512,ee*512,1+D%3,1+D%2)}const C=new gr($);C.colorSpace=Gt,C.wrapS=C.wrapT=Xo,C.repeat.set(8,9),C.anisotropy=8,M(0,-.12,0,24,.24,28,new No({map:C,roughness:.85})),M(0,2.5,-13.5,24,5,.3,s),M(11.75,2.5,0,.3,5,27,s),M(0,.43,-13.27,23.5,.86,.12,d),M(11.53,.43,0,.12,.86,26.5,d),M(0,.08,-13.1,23.5,.16,.06,o),M(11.38,.08,0,.06,.16,26.5,o);const G=M(0,4.9,0,24,.16,28,s);G.userData.overhead=!0;for(const D of[-12,-6,0,6,12])M(-11.6,2.5,D,.22,5,.14,s);M(-11.6,.55,0,.3,1.1,27,s),M(-11.6,4.65,0,.3,.7,27,s),M(-11.68,2.75,0,.025,3.5,27,p);for(const D of[1.12,3.8])M(-11.4,D,0,.12,.07,27,l);M(-7.9,2.25,12.7,7.5,4.5,.14,s),M(7.9,2.25,12.7,7.5,4.5,.14,s);for(const D of[-3.9,3.9])M(D,2.25,12.65,.12,4.5,.18,l);M(0,2.25,12.8,7.7,4.5,.025,p),S("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const D of[-8,-1,6]){M(0,4.35,D,20,.08,.07,o);for(const L of[-7,0,7])b(L,4.18,D,.13,.22,o),b(L,4.06,D,.1,.025,m)}const V=new bt(new ma(1.8,.025,8,64),f);V.rotation.x=Math.PI/2,V.position.set(0,3.9,.5),t.add(V);for(const D of[-1.6,1.6])x(new k(D,3.9,.5),new k(D,4.84,.5),.012,l);M(-28,-.65,-2,45,1,70,r("#b0bf9d"));const H=r("#98af91"),de=r("#897e69");for(let D=0;D<14;D++){const L=-17-D%3*3,ee=-25+D*4.1;b(L,1.3,ee,.12,3,de);const te=T(L,3,ee,1.25+D%3*.2,H);te.scale.y=1.45}function Y(D,L){b(D,.32,L,.34,.64,s),b(D,.66,L,.29,.04,f);for(let ee=0;ee<6;ee++){const te=ee*2.4;x(new k(D,.65,L),new k(D+Math.cos(te)*.25,1.5+ee%3*.18,L+Math.sin(te)*.25),.025,u),T(D+Math.cos(te)*.3,1.3+ee%3*.18,L+Math.sin(te)*.3,.16,u).scale.set(.55,2,.8)}R(D,L,.8,.8)}Y(-10.3,8.4),Y(-10.3,-10.8),Y(10.3,10.8);function le(D,L,ee,te){M(D,.1,L,ee-.17,.2,te-.12,o),M(D,.51,L,ee,.78,te,c),M(D,.94,L,ee+.08,.08,te+.08,o);const se=Math.round(ee/.85);for(let w=0;w<se;w++){const y=D-ee/2+(w+.5)*ee/se;M(y,.53,L+te/2+.009,ee/se-.025,.7,.018,a),M(y,.77,L+te/2+.028,.29,.025,.035,l)}R(D,L,ee+.12,te+.12)}function fe(D,L,ee,te="#8ab9ad"){M(D,1,L,.48,.035,.3,l),M(D,1.22,L,.055,.4,.055,l),M(D,1.53,L,.94,.59,.055,o),S(ee+`
—  RESEARCH IN PROGRESS  —`,D,1.53,L+.032,.86,.51,"#203137",te),M(D,1.01,L+.36,.65,.035,.2,s);for(let se=0;se<5;se++)M(D-.25+se*.12,1.031,L+.36,.07,.007,.11,l)}function Re(D,L,ee){M(D,1.02,L,.56,.09,.3,u);for(let te=0;te<5;te++)b(D-.22+te*.11,1.16,L,.031,.25,a,t,10),b(D-.22+te*.11,1.3,L,.038,.025,ee,t,10)}function $e(D,L){const ee=new si;ee.position.set(D,1,L),t.add(ee);const te=M(0,.045,0,.58,.09,.55,a,ee);te.rotation.y=-.1;const se=M(0,.36,-.15,.14,.62,.16,a,ee);se.rotation.x=-.15;const w=M(0,.61,-.03,.18,.15,.37,a,ee);w.rotation.x=-.2;const y=b(0,.67,.1,.07,.27,o,ee);y.rotation.x=-.38,b(0,.47,.1,.065,.18,l,ee),M(0,.23,.08,.4,.04,.35,o,ee),b(0,.11,.08,.12,.04,m,ee),T(.13,.32,-.11,.065,o,ee)}function ae(D,L){M(D,1.01,L,.35,.025,.22,l),M(D,1.25,L,.025,.45,.025,l),M(D,1.46,L,.35,.035,.05,s);for(let ee=0;ee<3;ee++){const te=D-.12+ee*.12;b(te,1.28,L,.026,.32,a,t,12),b(te,1.08,L,.007,.12,l,t,8),b(te,1.46,L,.035,.035,ee%2?g:v,t,12)}}const _e=Wi.x,Ae=Wi.z;b(_e,.43,Ae,.18,.78,l),b(_e,.88,Ae,1.38,.12,d),b(_e,.95,Ae,1.31,.025,a),R(_e,Ae,2.8,2.8);for(let D=0;D<12;D++){const L=D*Math.PI/6,ee=_e+Math.sin(L)*2.15,te=Ae+Math.cos(L)*2.15;b(ee,.36,te,.29,.07,l),b(ee,.18,te,.035,.32,l);const se=b(ee,.43,te,.31,.09,D%3===0?r("#dfabc5"):u);se.userData.discussionSeat=!0;const w=M(_e+Math.sin(L)*.87,.979,Ae+Math.cos(L)*.87,.28,.015,.21,h);w.rotation.y=-L}b(_e,.99,Ae,.19,.025,v),S("01   IDEATION ROUNDTABLE",_e,2.65,-7.2,4.7,.38),S("SHARED QUESTIONS / GROUP DISCUSSION",_e,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),le(5.4,-2.8,6.2,1.7);const Fe=M(5.6,1.44,-2.85,1.08,.88,.3,v);Fe.rotation.x=-.12,M(5.6,1.65,-2.666,.81,.25,.035,o),S("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const we=b(5.6,1.3,-2.64,.16,.07,o);we.rotation.x=Math.PI/2;const He=M(5.64,1.36,-2.59,.025,.11,.025,s);He.rotation.z=-.5;for(const[D,L]of[[5.28,g],[5.88,v]])T(D,1.1,-2.64,.045,o),x(new k(D,1.1,-2.61),new k(D+.35,1.03,-2.1),.018,L),x(new k(D+.35,1.03,-2.1),new k(D+.9,1.04,-2.17),.018,L);M(7.2,1.01,-2.8,.95,.055,.68,u);for(let D=0;D<4;D++)M(6.9+D*.19,1.08,-2.8,.1,.09,.18,o),M(6.9+D*.19,1.04,-2.8,.02,.018,.57,l);fe(3.3,-3.08,"PHYSICS / MEASUREMENTS"),S("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),le(.2,-10.6,5.8,1.5),fe(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let D=0;D<5;D++){const L=.25+D*.43,ee=-10.55+D%2*.19,te=[g,v,u][D%3];b(L,1.16,ee,.13,.35,p),b(L,1.09,ee,.115,.19,te),b(L,1.4,ee,.055,.15,p),b(L,1.49,ee,.065,.045,o)}Re(2.2,-10.9,g),ae(.1,-11.05),S("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),S("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),S("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let D=0;D<5;D++)M(-2.2+D*1.12,2.68,-13.29,.85,.06,.02,D%2?u:d);le(-7.3,5.4,4.8,1.45),fe(-8.6,5.18,"BIOLOGY / CELL CULTURES"),$e(-7.15,5.32);for(let D=0;D<3;D++){const L=-6.25+D*.43,ee=5.5+D%2*.3;b(L,1.025,ee,.18,.055,p),b(L,1.045,ee,.16,.015,u);for(let te=0;te<5;te++){const se=te*2.4,w=T(L+Math.cos(se)*.1,1.065,ee+Math.sin(se)*.1,.035,D%2?v:g);w.scale.y=.35}}Re(-5.55,5.15,g),S("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const D of[-9.9,-7.9,-5.9])M(10.75,1.22,D,1.4,2.4,1.5,a),M(10.02,1.22,D,.035,2.18,1.35,c),M(9.98,1.35,D+.42,.035,.43,.035,l),R(10.75,D,1.5,1.6);S("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),le(9.3,7.2,3.7,1.35),M(9.5,.99,7.1,.8,.025,.6,l),M(9.5,1.008,7.1,.63,.015,.46,o),x(new k(9.5,1,6.8),new k(9.5,1.5,6.8),.025,l),x(new k(9.5,1.5,6.8),new k(9.5,1.5,7.05),.025,l),S("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[D,L]of[[3.7,-.5],[-7.5,7.7]]){b(D,.66,L,.32,.12,u),b(D,.34,L,.045,.56,l);for(let ee=0;ee<4;ee++){const te=ee*Math.PI/2;x(new k(D,.12,L),new k(D+Math.cos(te)*.37,.08,L+Math.sin(te)*.37),.025,l)}R(D,L,.7,.7)}b(0,.13,.5,1.85,.26,f),b(0,.52,.5,1.7,.55,d),b(0,.84,.5,1.84,.1,a),b(0,.9,.5,1.62,.035,o),R(0,.5,3.7,3.7),S("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const gt=new si;gt.position.set(0,.95,.5),t.add(gt);const ze=[];for(let D=0;D<36;D++){const L=D*2.39996,ee=Math.sqrt(D/36)*1.35,te=T(Math.cos(L)*ee,.15+D%5*.11,Math.sin(L)*ee,.045+D%3*.014,D%4===0?v:u,gt);ze.push(te)}for(const D of[-1.45,1.45])for(const L of[-1.1,2.1])b(D,1.03,L,.018,.22,l);const et=[u,d,g,h,v];for(const D of[-6.2,6.2]){for(const L of[D-.9,D+.9])M(L,1.75,-12.7,.1,3.5,.5,d);for(const L of[.25,1.25,2.25,3.25]){M(D,L,-12.7,1.9,.075,.6,d);for(let ee=0;ee<6;ee++)M(D-.7+ee*.27,L+.3,-12.7,.17,.5-ee%3*.06,.32,et[ee%5])}R(D,-12.7,2.05,.75)}S("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),S("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function ot(D,L,ee){const te=document.createElement("canvas");te.width=256,te.height=64;const se=te.getContext("2d");se.fillStyle="rgba(23,35,44,.86)",se.beginPath(),se.roundRect(4,6,248,52,14),se.fill(),se.fillStyle="#ffffff26",se.beginPath(),se.roundRect(16,38,224,10,5),se.fill(),L!=null&&(se.fillStyle=Ls(L),se.beginPath(),se.roundRect(16,38,Math.max(10,224*L/100),10,5),se.fill()),se.fillStyle="#f4f0e4",se.font="600 21px sans-serif",se.textBaseline="middle",se.fillText(L==null?"Boredom —":`Bored ${Math.round(L)}%`,18,22),ee&&(se.textAlign="right",se.fillStyle="#ddc270",se.font="600 15px sans-serif",se.fillText(ee.toUpperCase(),238,22));const w=D.material;w.map?.dispose(),w.map=new gr(te),w.map.colorSpace=Gt,w.needsUpdate=!0}const qe=(()=>{const D=document.createElement("canvas");D.width=128,D.height=128;const L=D.getContext("2d");L.fillStyle="#e9e4f4",L.strokeStyle="#31434b",L.lineWidth=6,L.font="700 40px sans-serif";for(const[te,se,w,y]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])L.font=`700 ${y}px sans-serif`,L.fillStyle="#31434b",L.fillText(te,se+3,w+3),L.fillStyle="#e9e4f4",L.fillText(te,se,w);const ee=new gr(D);return ee.colorSpace=Gt,ee})(),Tt=(D,L,ee)=>{const te=Math.atan2(Math.sin(L-D),Math.cos(L-D));return Math.abs(te)<ee?L:D+Math.sign(te)*ee},ct=new Map;let It=1;function _t(D,L,ee,te,se,w){const y=new si;y.position.set(D,0,L),y.rotation.y=ee,t.add(y);const P=Wp(w),Z=r(P.shell,.62),U=r("#293b42",.8),oe=r(P.accent,.48),ue=r(P.trim,.57),J=new yr({color:"#263b41",side:vn}),re=te.startsWith("B")?u:te.startsWith("C")?v:g,he=(Je,en,ar,gi,zs,or,$a,Ha=y,lr=.055)=>{const Ga=new Wu(gi,zs,or,3,Math.min(lr,gi/3,zs/3,or/3)),cr=new bt(Ga,$a);cr.position.set(Je,en,ar),Ha.add(cr);const Bs=new bt(Ga,J);return Bs.scale.setScalar(1.055),cr.add(Bs),cr};for(const Je of[-.13,.13])he(Je,.42,0,.16,.4,.18,Z),T(Je,.19,.055,.12,oe,y).scale.set(.95,.68,1.4);he(0,.99,0,.54,.61,.35,Z,y,.1),he(0,.72,0,.57,.13,.37,Z,y,.06),M(0,.98,.184,.012,.45,.012,U,y);const I=M(-.105,1.21,.19,.16,.07,.025,Z,y);I.rotation.z=-.55;const ie=M(.105,1.21,.19,.16,.07,.025,Z,y);ie.rotation.z=.55,b(0,1.36,0,.09,.12,oe,y);const j=new si;if(j.position.set(0,1.64,0),y.add(j),P.head==="round"){const Je=T(0,0,0,.265,Z,j);Je.scale.set(1.21,1,.92);const en=new bt(Je.geometry,J);en.scale.setScalar(1.055),Je.add(en)}else he(0,0,0,.59,P.ears==="compact"?.44:.49,.45,Z,j,P.head==="monitor"?.055:.13);const ge=P.head==="monitor";ge&&he(0,-.005,.232,.49,.36,.025,U,j,.06);for(const Je of[-1,1]){const en=b(Je*.335,0,0,.125,.09,oe,j);en.rotation.z=Math.PI/2;const ar=b(Je*.389,0,0,P.ears==="compact"?.06:.085,.025,ue,j);if(ar.rotation.z=Math.PI/2,P.ears==="ring"){const gi=new bt(new ma(.125,.012,6,24),U);gi.rotation.y=Math.PI/2,gi.position.set(Je*.385,0,0),j.add(gi)}}const pe=P.antenna==="pair"?[-.17,.17]:[P.antenna==="offset-right"?.15:P.antenna==="offset-left"?-.16:0];for(const Je of pe)x(new k(Je,.23,0),new k(Je+(P.antenna==="offset-right"?.045:0),.39,0),.018,U,j),T(Je+(P.antenna==="offset-right"?.045:0),.4,0,.047,ue,j);const me=document.createElement("canvas");me.width=256,me.height=200;const xe=me.getContext("2d"),ke=ge?"#fff8e4":"#263b41";xe.fillStyle=ke,xe.strokeStyle=ke,xe.lineWidth=12,xe.lineCap="round";for(const Je of[82,174])xe.beginPath(),P.eyes==="happy"?(xe.arc(Je,79,15,Math.PI,Math.PI*2),xe.stroke()):(xe.ellipse(Je,76,10,17,0,0,Math.PI*2),xe.fill());xe.fillStyle="#f29b40";for(const Je of[52,204])xe.beginPath(),xe.ellipse(Je,112,13,8,0,0,Math.PI*2),xe.fill();xe.fillStyle="#263b41",xe.beginPath(),xe.ellipse(128,123,24,28,0,0,Math.PI),xe.closePath(),xe.fill(),xe.fillStyle="#f18540",xe.beginPath(),xe.ellipse(128,137,13,9,0,0,Math.PI*2),xe.fill();const W=new gr(me);W.colorSpace=Gt;const Pe=new yr({map:W,transparent:!0,depthWrite:!1}),Ge=new bt(new wr(.49,.38),Pe);Ge.position.set(0,-.01,.255),j.add(Ge);const ye=new si;if(ye.position.set(.32,1.22,0),y.add(ye),he(0,-.12,0,.16,.29,.19,Z,ye,.065),T(0,-.28,.07,.085,oe,ye),he(0,-.29,.16,.13,.12,.2,Z,ye,.05),T(0,-.29,.28,.092,oe,ye),he(-.32,1.04,0,.16,.36,.19,Z,y,.07),T(-.32,.84,.06,.09,oe,y),P.prop==="magnifier"){const Je=new bt(new ma(.1,.018,8,24),oe);Je.position.set(.32,1.05,.4),y.add(Je),x(new k(.32,.96,.4),new k(.32,.84,.4),.022,U,y);const en=b(.32,1.05,.4,.084,.008,p,y);en.rotation.x=Math.PI/2}else if(P.prop==="clipboard"){he(-.31,.96,.23,.22,.29,.035,ue,y,.025),M(-.31,.97,.253,.17,.22,.008,h,y);for(let Je=0;Je<3;Je++)M(-.31,.92+Je*.05,.261,.11,.012,.005,oe,y)}else{b(-.31,.97,.17,.028,.15,oe,y);const Je=new bt(new $u(.078,.15,16),ue);Je.position.set(-.31,.86,.17),y.add(Je)}const dt=T(-.17,1.22,.19,.018,_,y);dt.name="agent-status-led";const At=S(te,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(At),y.add(At),M(.12,.93,.19,.2,.045,.015,re,y);const Qn=S(te.toUpperCase(),D,2.07,L+.16,.58,.18,"#f4f8fa","#31434b");y.userData.ownedMaterials=[Z,U,oe,ue,J,Pe,At.material],y.userData.ownedTextures=[W,At.material.map];const Hr=new Jl(new Lo({transparent:!0,depthTest:!1}));Hr.scale.set(.8,.8,1),t.add(Hr);const Di=new Jl(new Lo({transparent:!0,depthTest:!1}));Di.scale.set(.86,.215,1),Di.name="boredom-meter",t.add(Di);const sr=new Jl(new Lo({map:qe,transparent:!0,depthTest:!1}));sr.scale.set(.5,.5,1),sr.name="boredom-zzz",sr.visible=!1,t.add(sr);for(const Je of[Z,U,oe,ue])Je.userData.baseColor=Je.color.clone();const Fs={id:w,station:se,head:j,arm:ye,light:dt,group:y,sign:Qn,path:[],target:"",activity:Hr,activityState:"",idea:null,ideaText:"",meter:Di,meterKey:"",zzz:sr,tint:1};return ct.set(w,Fs),Fs}const Zt=new Map;for(const D of[...t.children])if(D instanceof bt&&D.geometry===i&&!D.userData.overhead&&!Array.isArray(D.material)&&!D.material.transparent){const L=Zt.get(D.material)||[];L.push(D),Zt.set(D.material,L)}for(const[D,L]of Zt){if(L.length<3)continue;const ee=new M_(i,D,L.length);L.forEach((te,se)=>{te.updateMatrix(),ee.setMatrixAt(se,te.matrix),t.remove(te)}),ee.instanceMatrix.needsUpdate=!0,ee.computeBoundingSphere(),t.add(ee)}const Mt=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new k(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new k(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new k(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new k(-6.3,1.25,7.2),radius:3.1}];let Ft=0;const Qt={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function Le(D,L){const ee=Math.max(0,Math.min(.05,D-Ft));Ft=D,gt.rotation.y=D*(L.replay||L.running?.025:.006),ze.forEach((P,Z)=>{P.visible=Z<L.agents.length*4,P.position.y=.15+Z%5*.11+Math.sin(D*.8+Z)*.025});const te=new Set(L.agents.map(P=>P.id));for(const[P,Z]of ct)if(!te.has(P)){if(t.remove(Z.group,Z.sign,Z.activity,Z.meter,Z.zzz),Z.meter.material.map?.dispose(),Z.meter.material.dispose(),Z.zzz.material.dispose(),Z.idea){t.remove(Z.idea),Z.idea.geometry.dispose();const oe=Z.idea.material;oe.map?.dispose(),oe.dispose()}Z.activity.material.map?.dispose(),Z.activity.material.dispose(),Z.group.traverse(oe=>{oe instanceof bt&&oe.geometry!==i&&oe.geometry.dispose()});for(const oe of Z.group.userData.ownedMaterials)oe.dispose();for(const oe of Z.group.userData.ownedTextures||[])oe?.dispose();Z.sign.geometry.dispose();const U=Z.sign.material;U.map?.dispose(),U.dispose(),ct.delete(P)}L.agents.forEach((P,Z)=>{let U=ct.get(P.id);U||(U=_t(P.position?.x??(Z%3-1)*.6,P.position?.z??10.4+Math.floor(Z/3)*.4,0,P.name,P.stationId,P.id));const oe=P.id.startsWith("worker-")?Number(P.id.match(/\d+$/)?.[0]||1)-1:Z%4,ue=L.finale===!0,J=Z/Math.max(1,L.agents.length)*Math.PI*2,re=ue?new k(Wi.x+Math.cos(J)*2.35,0,Wi.z+Math.sin(J)*2.35):au(P.stationId,oe),he=ue?`finale:${Z}`:`${P.stationId}:${oe}`;U.target!==he&&(U.target=he,U.station=P.stationId,U.path=Uo(U.group.position,re,Qt,n)),P.position&&!ue&&(U.group.position.set(P.position.x,0,P.position.z),U.path=[]);const I=Xp(P.boredom,L.reducedMotion),ie=U.path[0];if(ie){const ke=ie.x-U.group.position.x,W=ie.z-U.group.position.z,Pe=Math.hypot(ke,W);if(Pe<.07)U.path.shift();else{const Ge=Math.min(Pe,ee*1.8*I.walk);U.group.position.x+=ke/Pe*Ge,U.group.position.z+=W/Pe*Ge,U.group.rotation.y=L.reducedMotion?Math.atan2(ke,W):Tt(U.group.rotation.y,Math.atan2(ke,W),Math.max(.02,ee*6*I.turn))}}else U.group.rotation.y=P.position?.heading??(P.stationId==="culture"?Math.atan2(Wi.x-U.group.position.x,Wi.z-U.group.position.z):Math.PI);U.sign.position.set(U.group.position.x,2.28,U.group.position.z),U.sign.lookAt(e.position),U.activity.position.set(U.group.position.x,2.85,U.group.position.z);const j=!!ie||!!P.position?.moving,ge=`${P.boredom==null?"-":Math.round(P.boredom)}:${P.regime||""}`;U.meterKey!==ge&&(U.meterKey=ge,ot(U.meter,P.boredom,kr(P.regime).label)),U.meter.position.set(U.group.position.x,2.5,U.group.position.z),U.group.position.y=ue?L.reducedMotion?0:.12+Math.abs(Math.sin(D*3+Z))*.18:j?Math.abs(Math.sin(D*I.bobHz+Z))*I.bob:0,ue&&!L.reducedMotion&&(U.group.rotation.y+=ee*.35),U.group.rotation.x=I.slump,U.zzz.visible=I.zzz&&!j,U.zzz.position.set(U.group.position.x+.32,1.95+(L.reducedMotion?0:(D*.35+Z*.3)%1*.35),U.group.position.z),U.zzz.material.opacity=L.reducedMotion?.9:1-(D*.35+Z*.3)%1*.6,Math.abs(U.tint-I.saturation)>.02&&(U.tint=I.saturation,U.group.traverse(ke=>{if(ke instanceof bt&&ke.material instanceof No&&ke.material.userData.baseColor){const W=ke.material.userData.baseColor,Pe=W.r*.3+W.g*.59+W.b*.11;ke.material.color.setRGB(Pe+(W.r-Pe)*I.saturation,Pe+(W.g-Pe)*I.saturation,Pe+(W.b-Pe)*I.saturation)}})),U.activity.visible=P.state!=="idle"&&!(P.stationId==="culture"&&P.discussionBrief);const pe=P.discussionBrief||"",me=pe?`${P.name}:${pe}:${(P.discussionPeers||[]).join(",")}`:"";if(U.ideaText!==me){if(U.idea){t.remove(U.idea),U.idea.geometry.dispose();const ke=U.idea.material;ke.map?.dispose(),ke.dispose(),U.idea=null}U.ideaText=me,pe&&(U.idea=O(P.name,pe,P.discussionPeers||[]),U.idea.name="recorded-discussion-bubble",t.add(U.idea))}if(U.idea&&(U.idea.visible=It>=.98&&P.stationId==="culture"&&!P.position?.moving&&(!!P.discussionBrief||P.state==="thinking"||P.state==="reviewing"),U.idea.position.set(U.group.position.x,3.05,U.group.position.z),U.idea.lookAt(e.position)),U.activityState!==P.state){U.activityState=P.state;const ke=document.createElement("canvas");ke.width=128,ke.height=128;const W=ke.getContext("2d");W.strokeStyle="#31434b",W.fillStyle="#f4f0e4",W.lineWidth=7,W.lineCap="round",W.lineJoin="round",P.state==="thinking"?(W.beginPath(),W.moveTo(64,19),W.lineTo(64,30),W.moveTo(37,31),W.lineTo(44,39),W.moveTo(91,31),W.lineTo(84,39),W.stroke(),W.beginPath(),W.arc(64,57,25,Math.PI,Math.PI*2),W.lineTo(82,75),W.lineTo(46,75),W.closePath(),W.fill(),W.stroke(),W.beginPath(),W.moveTo(50,88),W.lineTo(78,88),W.moveTo(54,99),W.lineTo(74,99),W.stroke()):P.state==="working"?(W.beginPath(),W.arc(48,48,26,0,Math.PI*2),W.arc(80,76,18,0,Math.PI*2),W.stroke(),W.beginPath(),W.moveTo(31,68),W.lineTo(22,91),W.lineTo(49,82),W.moveTo(76,96),W.lineTo(70,108),W.lineTo(87,99),W.stroke()):(W.beginPath(),W.moveTo(23,104),W.lineTo(105,104),W.moveTo(35,99),W.lineTo(35,76),W.lineTo(51,76),W.lineTo(51,99),W.moveTo(61,99),W.lineTo(61,55),W.lineTo(77,55),W.lineTo(77,99),W.moveTo(87,99),W.lineTo(87,30),W.lineTo(103,30),W.lineTo(103,99),W.stroke()),U.activity.material.map?.dispose(),U.activity.material.map=new gr(ke),U.activity.material.map.colorSpace=Gt,U.activity.material.needsUpdate=!0}const xe=(L.replay||L.running)&&(P.state==="working"||P.state==="thinking");U.arm.rotation.x=ie||P.position?.moving?Math.sin(D*5+Z)*.12:xe?Math.sin(D*1.8+Z)*.08:0,U.head.rotation.y=Math.sin(D*(I.level==="frenetic"?.9:.32)+Z)*(I.level==="frenetic"?.12:.055),U.head.rotation.x=(xe&&!ie?.12:0)+I.droop,U.light.scale.setScalar(xe?1+Math.sin(D*2)*.12:1)}),e.updateMatrixWorld();const se=[],w=230,y=86.25;for(const P of ct.values())if(P.idea?.visible){const Z=P.idea.position.clone(),U=Z.clone().applyMatrix4(e.matrixWorldInverse);if(U.z>=0){P.idea.visible=!1;continue}const oe=Z.project(e);if(Math.abs(oe.x)>1.15||Math.abs(oe.y)>1.15){P.idea.visible=!1;continue}let ue=Et.clamp((oe.x+1)*innerWidth/2,90+w/2,innerWidth-w/2-16),J=(1-oe.y)*innerHeight/2;for(let he=0;he<12&&se.some(I=>Math.abs(ue-I.x)<w+10&&Math.abs(J-I.y)<y+8);he++)J-=y+8,J<110&&(J=155,ue=Math.min(innerWidth-w/2-16,ue+w+12));se.push({x:ue,y:J}),P.idea.position.set(ue/innerWidth*2-1,1-J/innerHeight*2,oe.z).unproject(e),P.idea.quaternion.copy(e.quaternion);const re=2*-U.z*Math.tan(Et.degToRad(e.fov/2))/innerHeight;P.idea.scale.setScalar(w*re/2.7),P.idea.renderOrder=10}}const z=new si;t.add(z);const Nt=new Set([...ct.values()].flatMap(D=>[D.group,D.sign,D.activity,D.meter,D.zzz]));for(const D of[...t.children])D!==z&&!Nt.has(D)&&z.add(D);function ut(D){It=Et.clamp(D,0,1);const L=sM(It,ct.size);z.scale.setScalar(L.room),[...ct.values()].forEach((ee,te)=>{const se=L.agents[te]??1,w=se<.88?se/.88*1.08:1.08-(se-.88)/.12*.08;ee.group.scale.setScalar(w),ee.sign.scale.setScalar(w),ee.activity.scale.set(.8*w,.8*w,1),ee.meter.scale.set(.86*w,.215*w,1),ee.zzz.scale.set(.5*w,.5*w,1)})}return{scene:t,camera:e,colliders:n,stations:Mt,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:Le,grow:ut,setOverview:D=>{G.visible=!0},agentPositions:()=>[...ct.values()].map(D=>({id:D.id,position:D.group.position.clone()})),exposure:1}}const Ss=!0;function Zp(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function lu(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Bf(t,e="|"){return t.map(n=>Qp(n)).join(e)}function cu(t,e){return typeof e=="bigint"?e.toString():e}class lM{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function Xu(t){return new lM(t)}function cM(t){return t==null}function Zu(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function uM(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function $r(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function qp(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function Li(t){return qp(t._zod.def)??t._zod.def.shape}function jp(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return $r(this,e,i),i},enumerable:!0,configurable:!0})}function Yp(t,e,n){e in t?$r(t,e,n):t[e]=n}function Or(t,e,n,i){const r=Li(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?jp(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):Yp(t,s,i?i(a.value,s):a.value))}}function dM(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?jp(t,n,()=>e[n]):Yp(t,n,i.value))}}function Nn(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function fM(t){return JSON.stringify(t)}function hM(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Kp="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function nl(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const pM=Xu(()=>{if(hi.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function Aa(t){if(nl(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(nl(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function Jp(t){return Aa(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const mM=new Set(["string","number","symbol"]);function bl(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ir(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Be(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function Qp(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function gM(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const em={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},_M={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function vM(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return Or(s,t,Sl(t,e)),ir(t,Nn(n,{shape:s,checks:[]}))}function Sl(t,e){const n=Li(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function xM(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(Sl(t,e)),a={};return Or(a,t,Reflect.ownKeys(Li(t)).filter(o=>!s.has(o))),ir(t,Nn(n,{shape:a,checks:[]}))}function yM(t,e){if(!Aa(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=Li(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return ir(t,Nn(t._zod.def,{shape:tm(t,e)}))}function tm(t,e){const n={};return Or(n,t,Reflect.ownKeys(Li(t))),dM(n,e),n}function bM(t,e){if(!Aa(e))throw new Error("Invalid input to safeExtend: expected a plain object");return ir(t,Nn(t._zod.def,{shape:tm(t,e)}))}function SM(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};Or(n,t,Reflect.ownKeys(Li(t))),Or(n,e,Reflect.ownKeys(Li(e)));const i=Nn(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return ir(t,i)}function $f(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(Sl(e,n)):void 0,l={};return Or(l,e,Reflect.ownKeys(Li(e)),t&&((c,u)=>o&&!o.has(u)?c:new t({type:"optional",innerType:c}))),ir(e,Nn(e._zod.def,{shape:l,checks:[]}))}function MM(t,e,n){const i=n?new Set(Sl(e,n)):void 0,r={};return Or(r,e,Reflect.ownKeys(Li(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),ir(e,Nn(e._zod.def,{shape:r}))}function Ti(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function EM(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function nm(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function ea(t){return typeof t=="string"?t:t?.message}function Hf(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function uu(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function Ns(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:ea(t.inst?._zod.def?.error?.(t))??ea(s?.(t))??ea(e?.error?.(t))??ea(n.customError?.(t))??ea(n.localeError?.(t))??"Invalid input",o={};for(const l of Object.keys(t))l==="inst"||l==="schema"||l==="continue"||l==="input"||l==="__proto__"||(o[l]=t[l]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const wM=/[\uD800-\uDBFF]/;function qu(t){const e=t.length;if(!wM.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function ju(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function TM(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function Ra(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function AM(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):RM(t,n,i.value)}}function er(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function im(t,e,n){return er(t,e,n,!1)}function rm(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return er(this,n,i(this))},set(r){er(this,n,r)}})}return e}function RM(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:er(this,e,n.bind(this))},set(i){er(this,e,i)}})}function CM(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let sc,Hi=!1;const PM={configurable:!0,get(){Hi=!0}};function mt(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&sc!==t._zod){sc=void 0;return}sc=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,PM);const r=Hi;Hi=!1;try{const s=n(this);return Hi?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Hi=Hi||r,s}catch(s){throw delete this[e],Hi=Hi||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function IM(t,e,n,i){const r=CM(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const LM="~constantCatch";function NM(t){const e=()=>t;return e[LM]=!0,e}var Gf;const ac={value:void 0,enumerable:!1};let Vf="captureStackTrace"in Error?Error:null;function DM(t){const e=Vf;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return Vf=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function ce(t,e,n,i){const r={};function s(f){this.def=f,this.constr=d,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function l(f,h){if(f._zod){if(f._zod.traits.has(t))return}else{ac.value=new s(h);try{Object.defineProperty(f,"_zod",ac)}finally{ac.value=void 0}}if(f._zod.traits.add(t),e(f,h),o){const v=Object.getPrototypeOf(f),p=f._zod.constr.prototype;let m=v;for(;m&&m!==p;)m=Object.getPrototypeOf(m);const _=m??v;o.has(_)||(o.add(_),AM(_,a))}const g=d.prototype;for(const v in g)Object.prototype.hasOwnProperty.call(g,v)&&(v in f||(f[v]=g[v].bind(f)))}const c=i?.Parent??Object;class u extends c{}Object.defineProperty(u,"name",{value:t});function d(f){const h=i?.Parent?DM(u):this;l(h,f);const g=h._zod.deferred;if(g){for(const p of g)p();h._zod.deferred=void 0}const v=globalThis.__zod_globalConfig?.postProcessor;return v&&v(h),h}return Object.defineProperty(d,"init",{value:l}),Object.defineProperty(d,Symbol.hasInstance,{value:f=>i?.Parent&&f instanceof i.Parent?!0:f?._zod?.traits?.has(t)}),Object.defineProperty(d,"name",{value:t}),d}class Ar extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class sm extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Gf=globalThis).__zod_globalConfig??(Gf.__zod_globalConfig={});const hi=globalThis.__zod_globalConfig;function rr(t){return t&&Object.assign(hi,t),hi}function UM(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,cu,2)),t.message}function kM(t){this._zod.message=t}const OM={get:UM,set:kM,enumerable:!0,configurable:!0},oc={value:void 0,enumerable:!1},Wf=new WeakSet([Object.prototype,Error.prototype]),FM=(t,e)=>{t.name="$ZodError",oc.value=e,Object.defineProperty(t,"issues",oc),oc.value=void 0,Object.defineProperty(t,"message",OM);const n=Object.getPrototypeOf(t);Wf.has(n)||(Wf.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},zM=ce("$ZodError",FM);function BM(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function $M(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?BM(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function HM(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let l=n,c=0;for(;c<o.length;){const u=o[c],d=c===o.length-1;if(u==="_errors"){d&&l._errors.push(e(a)),c++;continue}Object.prototype.hasOwnProperty.call(l,u)||Object.defineProperty(l,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const f=l[u];d&&f._errors.push(e(a)),l=f,c++}}}};return i(t),n}function Ml(t,e){return{callee:e?.callee??t,Err:e?.Err}}const Yu=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new Ar;if(o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>Ns(c,a,rr())));throw Kp(l,s?.callee??e),l}return o.value};return e},Ku=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>Ns(c,a,rr())));throw Kp(l,s?.callee??e),l}return o.value};return e},Ju=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new Ar;return s.issues.length?am(t,s.issues,r):{success:!0,data:s.value}};function am(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>Ns(r,n,rr()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const Qu=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?am(t,s.issues,r):{success:!0,data:s.value}},GM=Symbol.for("zod.compile.invalid"),VM=Symbol.for("zod.compile.fallback"),WM=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==GM)return!0;if(i.definite===!0&&n===void 0)return!1}return XM(t,e,n)});function XM(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[VM]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new Ar;return s.issues.length===0}const ZM=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},qM=t=>{const e=Yu(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,Ml(n,a))};return n},jM=t=>{const e=Yu(t),n=(i,r,s,a)=>e(i,r,s,Ml(n,a));return n},YM=t=>{const e=Ku(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,Ml(n,a))};return n},KM=t=>{const e=Ku(t),n=async(i,r,s,a)=>await e(i,r,s,Ml(n,a));return n},JM=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Ju(t)(e,n,r)},QM=t=>(e,n,i)=>Ju(t)(e,n,i),eE=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Qu(t)(e,n,r)},tE=t=>async(e,n,i)=>Qu(t)(e,n,i),nE=/^[cC][0-9a-z]{6,}$/,iE=/^[0-9a-z]+$/,rE=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,sE=/^[0-9a-vA-V]{20}$/,aE=/^[A-Za-z0-9]{27}$/,oE=/^[a-zA-Z0-9_-]{21}$/;function lE(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const cE=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,uE=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Xf=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,dE=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,fE="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function hE(){return new RegExp(fE,"u")}const pE=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,mE=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,gE=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,_E=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,vE=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,xE=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,yE=/^https?$/,bE=/^\+[1-9]\d{6,14}$/,om="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function SE(t){return new RegExp(`^${t}$`)}const ME=SE(om);function du(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function EE(t){return new RegExp(`^${du(t)}$`)}function wE(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${du({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${du({precision:t.precision})}`:n;return new RegExp(`^${om}T(?:${i})$`)}const TE=/^[\s\S]{0,}$/,AE=/^-?\d+(?:\.\d+)?$/,RE=/^(?:true|false)$/i,CE=/^[^A-Z]*$/,PE=/^[^a-z]*$/,Rn=ce("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),ed=t=>{const e=t.value;return!cM(e)&&e.length!==void 0},il={number:"number",bigint:"bigint",object:"date"},lm=ce("$ZodCheckLessThan",(t,e)=>{Rn.init(t,e);const n=il[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:il[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),cm=ce("$ZodCheckGreaterThan",(t,e)=>{Rn.init(t,e);const n=il[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:il[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),IE=ce("$ZodCheckMultipleOf",(t,e)=>{Rn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):uM(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),LE=ce("$ZodCheckNumberFormat",(t,e)=>{Rn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=em[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),NE=ce("$ZodCheckMaxLength",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=ed),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?qu(r):s)<=e.maximum)return;const o=ju(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),DE=ce("$ZodCheckMinLength",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=ed),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?qu(r):s)>=e.minimum)return;const o=ju(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),UE=ce("$ZodCheckLengthEquals",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=ed),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?qu(r):s;if(a===e.length)return;const o=ju(r),l=a>e.length;i.issues.push({origin:o,...l?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),El=ce("$ZodCheckStringFormat",(t,e)=>{var n,i;Rn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),kE=ce("$ZodCheckRegex",(t,e)=>{El.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),OE=ce("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=CE),El.init(t,e)}),FE=ce("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=PE),El.init(t,e)}),zE=ce("$ZodCheckIncludes",(t,e)=>{Rn.init(t,e);const n=bl(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),BE=ce("$ZodCheckStartsWith",(t,e)=>{Rn.init(t,e);const n=new RegExp(`^${bl(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),$E=ce("$ZodCheckEndsWith",(t,e)=>{Rn.init(t,e);const n=new RegExp(`.*${bl(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),HE=ce("$ZodCheckOverwrite",(t,e)=>{Rn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class GE{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const VE={major:4,minor:6,patch:7},kt=ce("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=VE;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,l,c)=>{if(o.memo)return o;let u=Ti(o),d;for(const f of l){if(f._zod.def.when){if(EM(o)||!f._zod.def.when(o))continue}else if(u)continue;const h=o.issues.length,g=f._zod.check(o);if(g instanceof Promise&&c?.async===!1)throw new Ar;if(d||g instanceof Promise)d=(d??Promise.resolve()).then(async()=>{await g,o.issues.length!==h&&(uu(o.issues,h,t),u||(u=Ti(o,h)))});else{if(o.issues.length===h)continue;uu(o.issues,h,t),u||(u=Ti(o,h))}}return d?d.then(()=>o):o},a=(o,l,c)=>{if(Ti(o))return o.aborted=!0,o;const u=s(l,r,c);if(u instanceof Promise){if(c.async===!1)throw new Ar;return u.then(d=>t._zod.parse(d,c))}return t._zod.parse(u,c)};t._zod.run=(o,l)=>{if(l.skipChecks)return t._zod.parse(o,l);if(l.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...l,skipChecks:!0});return u instanceof Promise?u.then(d=>a(d,o,l)):a(u,o,l)}const c=t._zod.parse(o,l);if(c instanceof Promise){if(l.async===!1)throw new Ar;return c.then(u=>s(u,r,l))}return s(c,r,l)}}},{get"~standard"(){return im(this,"~standard",dm(this))},set"~standard"(t){er(this,"~standard",t)}}),um=(t,e)=>t.issues.length?{issues:t.issues.map(n=>Ns(n,e,rr()))}:{value:t.value};async function WE(t,e){const n={async:!0};return um(await t._zod.run({value:e,issues:[]},n),n)}function dm(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return um(i,n)}catch{}return WE(t,e)},vendor:"zod",version:1}}const td=ce("$ZodString",(t,e)=>{kt.init(t,e),t._zod.pattern=e.pattern??TE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),wt=ce("$ZodStringFormat",(t,e)=>{El.init(t,e),td.init(t,e)}),XE=ce("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=uE),wt.init(t,e)}),ZE=ce("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Xf(i))}else e.pattern??(e.pattern=Xf());wt.init(t,e)}),qE=ce("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=dE),wt.init(t,e)}),fm=1,rl=2;function hm(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function jE(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?hm(t)||rl:YE(t,e)}function YE(t,e){if(!e.normalize&&e.protocol?.source===yE.source&&!/^https?:\/\//i.test(t))return fm;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??rl}return new URL(t)}catch{return rl}}const KE=/[\t\n\r]/g;function Zf(t){return t.replace(KE,"")}function JE(t,e){return e.lastIndex=0,e.test(t.hostname)}function QE(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const ew=ce("$ZodURL",(t,e)=>{wt.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=jE(i,e);if(r===fm){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===rl){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=Zf(i);return}e.hostname&&!JE(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!QE(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:Zf(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),tw=ce("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=hE()),wt.init(t,e)}),nw=ce("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?oE:lE(e.length)),wt.init(t,e)}),iw=ce("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=nE),wt.init(t,e)}),rw=ce("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=iE),wt.init(t,e)}),sw=ce("$ZodULID",(t,e)=>{e.pattern??(e.pattern=rE),wt.init(t,e)}),aw=ce("$ZodXID",(t,e)=>{e.pattern??(e.pattern=sE),wt.init(t,e)}),ow=ce("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=aE),wt.init(t,e)}),lw=ce("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=wE(e)),wt.init(t,e)}),cw=ce("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=ME),wt.init(t,e)}),uw=ce("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=EE(e)),wt.init(t,e)}),dw=ce("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=cE),wt.init(t,e)}),fw=ce("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=pE),wt.init(t,e)}),hw=/^[0-9a-fA-F:.]+$/;function pm(t){return hw.test(t)?hm(`http://[${t}]`):!1}const pw=ce("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=mE),wt.init(t,e),t._zod.check=n=>{pm(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),mw=ce("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=gE),wt.init(t,e)});function gw(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:pm(n)}const _w=ce("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=_E),wt.init(t,e),t._zod.check=n=>{gw(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function mm(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const gm=/^[0-9a-zA-Z+/]*={0,2}$/,vw=ce("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=gm),wt.init(t,e),t._zod.check=n=>{mm(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),nd=/^[A-Za-z0-9_-]*$/;function xw(t){if(!nd.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return mm(n)}const yw=ce("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=nd),wt.init(t,e),t._zod.check=n=>{xw(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),bw=ce("$ZodE164",(t,e)=>{e.pattern??(e.pattern=bE),wt.init(t,e)});function Sw(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Mw=ce("$ZodJWT",(t,e)=>{wt.init(t,e),t._zod.check=n=>{Sw(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),_m=ce("$ZodNumber",(t,e)=>{kt.init(t,e),t._zod.pattern=AE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),Ew=ce("$ZodNumberFormat",(t,e)=>{LE.init(t,e),_m.init(t,e)}),ww=ce("$ZodBoolean",(t,e)=>{kt.init(t,e),t._zod.pattern=RE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=!!n.value}catch{}const r=n.value;return typeof r=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:t}),n}}),Tw=ce("$ZodUnknown",(t,e)=>{kt.init(t,e),t._zod.parse=n=>n}),Aw=ce("$ZodNever",(t,e)=>{kt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Rw(t,e){const n=Hf(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[l,c]of Hf(t._zod.def.checks))if(o>l&&c._zod.def.when(s)){const u=s.issues.length;return c._zod.check(s),s.issues[u].continue=!1,uu(s.issues,u,t),s}}return r(s,a)}}const Cw=t=>Array.isArray(t)?t.length:-1;function qf(t,e,n){t.issues.length&&e.issues.push(...nm(n,t.issues)),e.value[n]=t.value}const Pw=ce("$ZodArray",(t,e)=>{kt.init(t,e);const n=hi.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let l=0;l<s.length;l++){const c=s[l],u=e.element._zod.run({value:c,issues:[]},r);if(u instanceof Promise)a.push(u.then(d=>qf(d,i,l)));else if(qf(u,i,l),o&&u.issues.length!==0&&Ti(u))break}return a.length?Promise.all(a).then(()=>i):i},Rw(t,Cw)});function sl(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...nm(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const Iw=[];function vm(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:Iw,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=gM(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function xm(t,e,n,i,r,s,a){const o=[],l=r.keySet,c=r.catchall._zod,u=c.def.type,d=c.optin,f=c.optout;let h=0;for(const g in e){if(a&&n.issues.length!==h){if(Ti(n,h))break;h=n.issues.length}if(l.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const v=c.run({value:e[g],issues:[]},i);v instanceof Promise?t.push(v.then(p=>sl(p,n,g,e,d,f))):sl(v,n,g,e,d,f)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const Lw=ce("$ZodObject",(t,e)=>{kt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const c=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),c.raw=u,u};c.raw=i,Object.defineProperty(e,"shape",{get:c})}const r=Xu(()=>vm(e));mt(t,"propValues",c=>{const u=c.def.shape,d={};for(const f in u){const h=u[f]._zod;if(h.values){Object.prototype.hasOwnProperty.call(d,f)||$r(d,f,new Set);for(const g of h.values)d[f].add(g);h.optin!==void 0&&d[f].add(void 0)}}return d});const s=nl,a=e.catchall;let o;const l=hi.memoizer;l?.attach(t),t._zod.parse=(c,u)=>{o??(o=r.value);const d=c.value;if(!s(d))return c.issues.push({expected:"object",code:"invalid_type",input:d,inst:t}),c;c.value=l?l.alloc(t,c,{},u):{};const f=[],h=o.shape,g=u?.abortEarly;let v=c.issues.length;for(const p of o.allKeys){if(g&&c.issues.length!==v){if(Ti(c,v))break;v=c.issues.length}if(p==="__proto__")continue;const m=h[p],_=m._zod.optin,M=m._zod.optout,b=m._zod.run({value:d[p],issues:[]},u);b instanceof Promise?f.push(b.then(T=>sl(T,c,p,d,_,M))):sl(b,c,p,d,_,M)}return a?xm(f,d,c,u,r.value,t,g===!0):f.length?Promise.all(f).then(()=>c):c}}),Nw=ce("$ZodObjectJIT",(t,e)=>{Lw.init(t,e);const n=t._zod.parse,i=Xu(()=>vm(e)),r=hi.memoizer,s=h=>{const g=i.value,v=g.symbolKeys,p=new GE(["payload","ctx"],{shape:h,inst:t,memo:r,syms:v}),m=T=>`shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`,_=(T,R)=>`
          let ${T}_ab = false;
          for (let i = 0; i < ${T}.issues.length; i++) {
            const iss = ${T}.issues[i];
            iss.path = iss.path ? [${R}, ...iss.path] : [${R}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${T}_ab = true;
          }
          if (${T}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;p.write("const input = payload.value;");const M=Object.create(null);let b=0;for(const T of g.allKeys)M[T]=`key_${b++}`;p.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const T of g.allKeys){if(T==="__proto__")continue;const R=M[T],x=typeof T=="symbol"?`syms[${v.indexOf(T)}]`:fM(T),S=`${x} in input`,O=h[T],N=O?._zod?.optin,A=N!==void 0,$=O?._zod?.optout==="optional";if(p.write(`const ${R} = ${m(x)};`),A&&$){const B=N==="optional"?`${R}_present`:`${R}.value !== undefined || ${R}_present`;p.write(`
        const ${R}_present = ${S};
        if (!${R}.issues.length || ${R}_present) {
          if (${R}.issues.length) {${_(R,x)}
          }

          if (${B}) {
            newResult[${x}] = ${R}.value;
          }
        }

      `)}else A?(p.write(`
        if (${R}.issues.length) {${_(R,x)}
        }
      `),N==="defaulted"?p.write(`newResult[${x}] = ${R}.value;`):p.write(`
        if (${R}.value !== undefined || ${S}) {
          newResult[${x}] = ${R}.value;
        }
      `)):p.write(`
        const ${R}_present = ${S};
        if (${R}.issues.length) {${_(R,x)}
        }
        if (!${R}_present && !${R}.issues.length) {
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

        if (${R}_present) {
          newResult[${x}] = ${R}.value;
        }

      `)}return p.write("payload.value = newResult;"),p.write("return payload;"),p.compile()};let a;const o=nl,l=!hi.jitless,u=l&&pM.value,d=e.catchall;let f;t._zod.parse=(h,g)=>{f??(f=i.value);const v=h.value;return o(v)?l&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),h=a(h,g),d?xm([],v,h,g,f,t,g?.abortEarly===!0):h):n(h,g):(h.issues.push({expected:"object",code:"invalid_type",input:v,inst:t}),h)}});function jf(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!Ti(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>Ns(a,i,rr())))}),e)}const Dw=ce("$ZodUnion",(t,e)=>{kt.init(t,e),mt(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),mt(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),mt(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),mt(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>Zu(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const l=o._zod.run({value:i.value,issues:[]},r);if(l instanceof Promise)a.push(l),s=!0;else{if(l.issues.length===0)return l;a.push(l)}}return s?Promise.all(a).then(o=>jf(o,i,t,r)):jf(a,i,t,r)}}),Uw=ce("$ZodIntersection",(t,e)=>{kt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([l,c])=>Yf(n,l,c)):Yf(n,s,a)}});function fu(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Aa(t)&&Aa(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=fu(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=fu(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Yf(t,e,n){const i=new Map;let r;const s=new Map,a=(c,u)=>{let d;if(c.code==="unrecognized_keys"&&!c.path?.length)r??(r=c),d=c.keys;else if(c.code==="invalid_key"&&c.origin==="record"&&c.path?.length===1){const f=String(c.path[0]);s.has(f)||s.set(f,c),d=[f]}else return!1;for(const f of d)i.has(f)||i.set(f,{}),i.get(f)[u]=!0;return!0};for(const c of e.issues)a(c,"l")||t.issues.push(c);for(const c of n.issues)a(c,"r")||t.issues.push(c);const o=[...i].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(o.length){const c=r?o.filter(u=>r.keys.includes(u)):[];c.length&&t.issues.push({...r,keys:c});for(const u of o)!c.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const l=fu(e.value,n.value);if(!l.valid){if(Ti(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)}return t.value=l.data,t}const kw=ce("$ZodEnum",(t,e)=>{kt.init(t,e);const n=lu(e.entries),i=new Set(n);t._zod.values=i,mt(t,"pattern",r=>{const s=lu(r.def.entries).filter(a=>mM.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>bl(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),Ow=ce("$ZodTransform",(t,e)=>{kt.init(t,e),t._zod.optin="optional",hi.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new sm(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new Ar;return n.value=r,n}});function Kf(t,e){return t.value=e.issues.length?void 0:e.value,t}const ym=ce("$ZodOptional",(t,e)=>{kt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",mt(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),mt(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${Zu(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>Kf(n,s)):Kf(n,r)}return e.innerType._zod.run(n,i)}}),Fw=ce("$ZodExactOptional",(t,e)=>{ym.init(t,e),mt(t,"values",n=>n.def.innerType._zod.values),mt(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),zw=ce("$ZodNullable",(t,e)=>{kt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin),mt(t,"optout",n=>n.def.innerType._zod.optout),mt(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${Zu(i.source)}|null)$`):void 0}),mt(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),Bw=ce("$ZodDefault",(t,e)=>{kt.init(t,e),t._zod.optin="defaulted",mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>Jf(s,e)):Jf(r,e)}});function Jf(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const $w=ce("$ZodPrefault",(t,e)=>{kt.init(t,e),t._zod.optin="defaulted",mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),Hw=ce("$ZodNonOptional",(t,e)=>{kt.init(t,e),mt(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>Qf(s,t)):Qf(r,t)}});function Qf(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function eh(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>Ns(r,i,rr()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const Gw=ce("$ZodCatch",(t,e)=>{kt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),mt(t,"optout",n=>n.def.innerType._zod.optout),mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>eh(n,s,e,i)):eh(n,r,e,i)}}),Vw=ce("$ZodPipe",(t,e)=>{kt.init(t,e),mt(t,"values",n=>n.def.in._zod.values),mt(t,"optin",n=>n.def.in._zod.optin),mt(t,"optout",n=>n.def.out._zod.optout),mt(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>xo(a,e.in,i)):xo(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>xo(s,e.out,i)):xo(r,e.out,i)}});function xo(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const Ww=ce("$ZodReadonly",(t,e)=>{kt.init(t,e),mt(t,"propValues",n=>n.def.innerType._zod.propValues),mt(t,"values",n=>n.def.innerType._zod.values),mt(t,"optin",n=>n.def.innerType?._zod?.optin),mt(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(th):th(r)}});function th(t){return t.memo||(t.value=Object.freeze(t.value)),t}const Xw=ce("$ZodCustom",(t,e)=>{Rn.init(t,e),kt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>nh(s,n,i,t));nh(r,n,i,t)}});function nh(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Ra(r))}}class Zw extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const hu="~memo",ih=[];function bm(t){return t!==null&&typeof t=="object"}function lc(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const Sm=new WeakMap,la=0,ko=1,ga=2;function Oo(t,e,n){const i=Sm.get(t);if(i!==void 0)return i?ga:la;if(e.has(t))return ga;e.add(t);let r=la;const s=u=>{if(r!==ga&&u?._zod){const d=Oo(u,e);d>r&&(r=d)}},a=(u,d)=>{let f=la;for(const h of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,h);if(!g.enumerable)continue;const v=g.get?ko:g.value?._zod?Oo(g.value,e):la;v>f&&(f=v)}return f},o=u=>{u>r&&(r=u)},l=t._zod.def;switch(l.type){case"object":{const u=qp(l);o(u?a(u):ko),s(l.catchall);break}case"array":s(l.element);break;case"tuple":for(const u of l.items)s(u);s(l.rest);break;case"record":case"map":s(l.keyType),s(l.valueType);break;case"set":s(l.valueType);break;case"union":for(const u of l.options)s(u);break;case"intersection":s(l.left),s(l.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(l.innerType);break;case"pipe":s(l.in),s(l.out);break;case"function":s(l.input),s(l.output);break;case"lazy":{const u=l._cachedInner??void 0;o(u?Oo(u,e):ko);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in l){const d=Object.getOwnPropertyDescriptor(l,u);if(!d||d.get)continue;const f=d.value;if(!(!f||typeof f!="object")){if(f._zod)s(f);else if(Array.isArray(f))for(const h of f)s(h)}}}return e.delete(t),qw(t,r)}function qw(t,e){return e!==ko&&Sm.set(t,e===ga),e}function jw(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let yo;const bo=[],Yw={alloc(t,e,n){const i=yo;if(!i)return n;yo=void 0;const r={value:n,issues:null};return i.set(e.value,r),bo.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&Jw(s,r.value))throw new Zw;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(l,c)=>{if(n===void 0){const m=Oo(t,new Set);if(m===la)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(l,c);m===ga||i?n=!0:i=!0}const u=l.value;if(!bm(u))return a(l,c);let d=c[hu];d||(d={buckets:new WeakMap,backEdges:void 0},c[hu]=d);let f;r===c?f=s:(f=jw(d,t),r=c,s=f);const h=f.get(u);if(h)return l.value=h.value,h.issues?h.issues.length&&l.issues.push(...lc(h.issues)):(l.memo=!0,d.backEdges??(d.backEdges=new WeakSet),d.backEdges.add(h.value)),l;yo=f;const g=bo.length,v=a(l,c);yo=void 0;const p=bo.length>g?bo.pop():void 0;return v instanceof Promise?v.then(m=>(p&&(p.issues=m.issues.length?lc(m.issues):ih),m)):(p&&(p.issues=v.issues.length?lc(v.issues):ih),v)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function Kw(){return Yw}function Jw(t,e){const n=t[hu]?.backEdges;return n!==void 0&&bm(e)&&n.has(e)}const Qw=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=TM(s.input),l=r(o,s.input);return`Invalid input: expected ${a}, received ${l}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${Qp(s.values[0])}`:`Invalid option: expected one of ${Bf(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${Bf(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function e1(){return{localeError:Qw()}}var rh;class t1{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function n1(){return new t1}(rh=globalThis).__zod_globalRegistry??(rh.__zod_globalRegistry=n1());const ca=globalThis.__zod_globalRegistry;function Mm(t){return t.checks&&(t.checks=[...t.checks]),t}function i1(t,e){return new t(Mm({type:"string",...Be(e)}))}function r1(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Be(e)})}function s1(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Be(e)})}function a1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Be(e)})}function o1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Be(e)})}function l1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Be(e)})}function c1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Be(e)})}function u1(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Be(e)})}function d1(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Be(e)})}function f1(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Be(e)})}function h1(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Be(e)})}function p1(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Be(e)})}function m1(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Be(e)})}function g1(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Be(e)})}function _1(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Be(e)})}function v1(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Be(e)})}function x1(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Be(e)})}function y1(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Be(e)})}function b1(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Be(e)})}function S1(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Be(e)})}function M1(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Be(e)})}function E1(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Be(e)})}function w1(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Be(e)})}function T1(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Be(e)})}function A1(t,e){return new t({type:"string",format:"date",check:"string_format",...Be(e)})}function R1(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Be(e)})}function C1(t,e){return new t({type:"string",format:"duration",check:"string_format",...Be(e)})}function P1(t,e){return new t(Mm({type:"number",checks:[],...Be(e)}))}function I1(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Be(e)})}function L1(t,e){return new t({type:"boolean",...Be(e)})}function N1(t){return new t({type:"unknown"})}function D1(t,e){return new t({type:"never",...Be(e)})}function sh(t,e){return new lm({check:"less_than",...Be(e),value:t,inclusive:!1})}function cc(t,e){return new lm({check:"less_than",...Be(e),value:t,inclusive:!0})}function ah(t,e){return new cm({check:"greater_than",...Be(e),value:t,inclusive:!1})}function uc(t,e){return new cm({check:"greater_than",...Be(e),value:t,inclusive:!0})}function oh(t,e){return new IE({check:"multiple_of",...Be(e),value:t})}function Em(t,e){return new NE({check:"max_length",...Be(e),maximum:t})}function al(t,e){return new DE({check:"min_length",...Be(e),minimum:t})}function wm(t,e){return new UE({check:"length_equals",...Be(e),length:t})}function U1(t,e){return new kE({check:"string_format",format:"regex",...Be(e),pattern:t})}function k1(t){return new OE({check:"string_format",format:"lowercase",...Be(t)})}function O1(t){return new FE({check:"string_format",format:"uppercase",...Be(t)})}function F1(t,e){return new zE({check:"string_format",format:"includes",...Be(e),includes:t})}function z1(t,e){return new BE({check:"string_format",format:"starts_with",...Be(e),prefix:t})}function B1(t,e){return new $E({check:"string_format",format:"ends_with",...Be(e),suffix:t})}function Ds(t){return new HE({check:"overwrite",tx:t})}function $1(t){return Ds(e=>e.normalize(t))}function H1(){return Ds(t=>t.trim())}function G1(){return Ds(t=>t.toLowerCase())}function V1(){return Ds(t=>t.toUpperCase())}function W1(){return Ds(t=>hM(t))}function X1(t,e,n){return new t({type:"array",element:e,...Be(n)})}function Z1(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Be(n)})}function q1(t,e){const n=j1(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(Ra(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(Ra(s))}},t(i.value,i)),e);return n}function j1(t,e){const n=new Rn({check:"custom",...Be(e)});return n._zod.check=t,n}function _a(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&$r(t,i,n[i]);return t}function Tm(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??ca,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function Us(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function rn(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const f=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(t,e,f,u)}const d=t._zod.parent;d&&(a.ref||(a.ref=d),rn(d,e,u),e.seen.get(d).isParent=!0)}const l=e.metadataRegistry.get(t);return l&&_a(a.schema,l),e.io==="input"&&pn(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function lh(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function Am(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const l=i.get(o);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const d=t.external.registry.get(a[0])?.id,f=t.external.uri??(g=>g);if(d)return{ref:f(d)};const h=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=h,{defId:h,ref:`${f("__shared")}#/${o}/${lh(h)}`}}const l="#",c=`${l}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:l};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:c+lh(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:l,defId:c}=r(a);o.def={...o.schema},c&&(o.defId=c);const u=o.schema;for(const d in u)delete u[d];u.$ref=l};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const c=t.external.registry.get(a[0])?.id;if(e!==a[0]&&c){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function Rm(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;Rm(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const Cm=new Set(["type","properties","required","additionalProperties"]),ch=["oneOf","anyOf"];function uh(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function pu(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!Cm.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const c of e){const u=c.properties?.[a]??uh(c);u!=null&&(o.some(d=>JSON.stringify(d)===JSON.stringify(u))||o.push(u))}const l=o.length===1?o[0]:pu(o)??{allOf:o};$r(n,a,l)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=uh(a);o&&!s.some(l=>JSON.stringify(l)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function Y1(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of Cm)if(r in t)return;const n=e.filter(r=>ch.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=pu(e);else{const r=n[0],s=ch.find(l=>Array.isArray(r[l]));if(Object.keys(r).length!==1)return;const a=e.filter(l=>l!==r),o=r[s].map(l=>pu([...a,l]));if(o.some(l=>!l))return;i={[s]:o}}i&&(delete t.allOf,_a(t,i))}function Pm(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const l=t.seen.get(o);if(l.ref===null)return;const c=l.def??l.schema,u={...c},d=l.ref;if(l.ref=null,d){i(d);const h=t.seen.get(d),g=h.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(g)):_a(c,g),_a(c,u),o._zod.parent===d)for(const p in c)p==="$ref"||p==="allOf"||p in u||delete c[p];if(g.$ref&&h.def)for(const p in c)p==="$ref"||p==="allOf"||p in h.def&&JSON.stringify(c[p])===JSON.stringify(h.def[p])&&delete c[p]}const f=o._zod.parent;if(f&&f!==d){i(f);const h=t.seen.get(f);if(h?.schema.$ref&&(c.$ref=h.schema.$ref,h.def))for(const g in c)g==="$ref"||g==="allOf"||g in h.def&&JSON.stringify(c[g])===JSON.stringify(h.def[g])&&delete c[g]}t.override({zodSchema:o,jsonSchema:c,path:l.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())Rm(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const l of t.seen.values())for(const c of[l.schema,l.def]){const u=c?.allOf;if(!Array.isArray(u))continue;const d=o.get(u);d?d.push(c):o.set(u,[c])}for(const l of t.intersections)for(const c of o.get(l)??[])Y1(c)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}_a(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const l=o[1];l.def&&l.defId&&(l.def.id===l.defId&&delete l.def.id,$r(a,l.defId,l.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:ol(e,"input",t.processors),output:ol(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function pn(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return pn(i.element,n);if(i.type==="set")return pn(i.valueType,n);if(i.type==="lazy")return pn(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return pn(i.innerType,n);if(i.type==="intersection")return pn(i.left,n)||pn(i.right,n);if(i.type==="record"||i.type==="map")return pn(i.keyType,n)||pn(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:pn(i.in,n)||pn(i.out,n);if(i.type==="object"){for(const r in i.shape)if(pn(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(pn(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(pn(r,n))return!0;return!!(i.rest&&pn(i.rest,n))}return!1}const K1=(t,e={})=>n=>{const i=Tm({...n,processors:e});return rn(t,i),Am(i,t),Pm(i,t)},ol=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=Tm({...r??{},target:s,io:e,processors:n});return rn(t,a),Am(a,t),Pm(a,t)},Ms=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},Es=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},dh=(t,e)=>{Ms(t,"minimum",e),Es(t,"maximum",e)},Im=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},Lm=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},Nm=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},Dm=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},fh=(t,e)=>Ms(t,"minimum",e.minimum),hh=(t,e)=>Es(t,"maximum",e.maximum),ph=t=>(e,n)=>{Dm(e,n.format);const[i,r]=t[n.format];Ms(e,"minimum",i),Es(e,"maximum",r)},J1={greater_than:(t,e)=>Ms(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>Es(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>Im(t,e.value),number_format:ph(em),bigint_format:ph(_M),min_length:fh,max_length:hh,length_equals:(t,e)=>dh(t,e.length),min_size:fh,max_size:hh,size_equals:(t,e)=>dh(t,e.size),string_format:(t,e)=>{Dm(t,e.format),e.pattern&&Lm(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>Nm(t,e.mime)};function li(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)J1[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&Ms(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&Ms(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&Es(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&Es(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&Im(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&Nm(e,r.mime);for(const s of r.patterns??[])Lm(e,s);return e}const Q1={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},eT=new Map([[gm,vE],[nd,xE]]),tT=t=>eT.get(t)??t,nT=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:l,contentEncoding:c,laxFormat:u}=li(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=Q1[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),c&&(r.contentEncoding=c),l&&l.size>0){const d=[...l].map(tT);d.length===1?r.pattern=d[0].source:d.length>1&&(r.allOf=[...d.map(f=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:f.source}))])}},iT=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:l,exclusiveMinimum:c,isInt:u}=li(t);r.type=u?"integer":"number";const d=typeof c=="number"&&c>=(s??Number.NEGATIVE_INFINITY),f=typeof l=="number"&&l<=(a??Number.POSITIVE_INFINITY),h=e.target==="draft-04"||e.target==="openapi-3.0";if(d?h?(r.minimum=c,r.exclusiveMinimum=!0):r.exclusiveMinimum=c:typeof s=="number"&&(r.minimum=s),f?h?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const m of o)Number.isFinite(m)&&m!==0?g.add(Math.abs(m)):Us(t,e,r,i,`A multipleOf divisor of ${m} cannot be represented in JSON Schema`);const[v,...p]=g;v!==void 0&&(r.multipleOf=v),p.length&&(r.allOf=[...r.allOf??[],...p.map(m=>({multipleOf:m}))])}},rT=(t,e,n,i)=>{n.type="boolean"},sT=(t,e,n,i)=>{n.not={}},aT=(t,e,n,i)=>{},oT=(t,e,n,i)=>{const r=t._zod.def,s=lu(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},lT=(t,e,n,i)=>{Us(t,e,n,i,"Custom types cannot be represented in JSON Schema")},cT=(t,e,n,i)=>{Us(t,e,n,i,"Transforms cannot be represented in JSON Schema")},uT=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=li(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=rn(s.element,e,{...i,path:[...i.path,"items"]})};function mu(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?mu(e.out):e.type==="catch"?mu(e.innerType):t._zod.optin}const dT=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&Us(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const c in a)$r(r.properties,c,rn(a[c],e,{...i,path:[...i.path,"properties",c]}));const l=[];for(const c of Object.keys(a)){const u=s.shape[c];(e.io==="input"?mu(u)===void 0:u._zod.optout===void 0)&&l.push(c)}l.length>0&&(r.required=l),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=rn(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},fT=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,l)=>rn(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",l]}));s?n.oneOf=a:n.anyOf=a},hT=(t,e,n,i)=>{const r=t._zod.def,s=rn(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=rn(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=c=>"allOf"in c&&Object.keys(c).length===1,l=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=l,e.intersections.push(l)},pT=(t,e,n,i)=>{const r=t._zod.def,s=rn(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},mT=(t,e,n,i)=>{const r=t._zod.def;rn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},id=Symbol();function Um(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,l)=>typeof l!="bigint"?l:(s=!0,null));return s?(Us(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),id):JSON.parse(a)}const gT=(t,e,n,i)=>{const r=t._zod.def;rn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=Um(r.defaultValue,t,e,n,i);a!==id&&(n.default=a)},_T=(t,e,n,i)=>{const r=t._zod.def;rn(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=Um(r.defaultValue,t,e,n,i);a!==id&&(n._prefault=a)},vT=(t,e,n,i)=>{const r=t._zod.def;rn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{Us(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},xT=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;rn(a,e,i);const o=e.seen.get(t);o.ref=a},yT=(t,e,n,i)=>{const r=t._zod.def;rn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},km=(t,e,n,i)=>{const r=t._zod.def;rn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},mh=new WeakSet([Object.prototype,Error.prototype]);function So(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const bT=(t,e)=>{zM.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);mh.has(n)||(mh.add(n),So(n,"format",i=>r=>HM(i,r)),So(n,"flatten",i=>r=>$M(i,r)),So(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,cu,2)}),So(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,cu,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Gn=ce("ZodError",bT,void 0,{Parent:Error}),ST=Yu(Gn),MT=Ku(Gn),ET=Ju(Gn),wT=Qu(Gn),TT=qM(Gn),AT=jM(Gn),RT=YM(Gn),CT=KM(Gn),PT=JM(Gn),IT=QM(Gn),LT=eE(Gn),NT=tE(Gn);function DT(){hi.localeError||rr(e1())}function rd(){hi.memoizer||rr({memoizer:Kw()})}const Ot=ce("ZodType",(t,e)=>(DT(),kt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(Nn(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return ir(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(IA(t,e))},superRefine(t,e){return this.check(LA(t,e))},overwrite(t){return this.check(Ds(t))},optional(){return vh(this)},exactOptional(){return vA(this)},nullable(){return xh(this)},nullish(){return vh(xh(this))},nonoptional(t){return EA(this,t)},array(){return cs(this)},or(t){return hA([this,t])},and(t){return mA(this,t)},transform(t){return yh(this,_A(t))},default(t){return bA(this,t)},prefault(t){return MA(this,t)},catch(t){return TA(this,t)},pipe(t){return yh(this,t)},readonly(){return CA(this)},describe(t){const e=this.clone();return ca.add(e,{description:t}),e},meta(...t){if(t.length===0)return ca.get(this);const e=this.clone();return ca.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return im(this,"~standard",{...dm(this),jsonSchema:{input:ol(this,"input"),output:ol(this,"output")}})},set"~standard"(t){er(this,"~standard",t)},parse:function t(e,n){return ST(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await MT(this,e,n,{callee:t})},safeParse(t,e){return ET(this,t,e)},async safeParseAsync(t,e){return wT(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){er(this,"spa",t)},validate(t,e){return WM(this,t,e)},validateAsync(t,e){return ZM(this,t,e)},encode:function t(e,n){return TT(this,e,n,{callee:t})},decode:function t(e,n){return AT(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await RT(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await CT(this,e,n,{callee:t})},safeEncode(t,e){return PT(this,t,e)},safeDecode(t,e){return IT(this,t,e)},async safeEncodeAsync(t,e){return LT(this,t,e)},async safeDecodeAsync(t,e){return NT(this,t,e)},toJSONSchema(t){return K1(this,{})(t)},get description(){return ca.get(this)?.description},get _def(){return this._zod.def}}),Om=ce("_ZodString",(t,e)=>{td.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>nT(t,n,i)},rm({format:t=>li(t).format??null,minLength:t=>li(t).minimum??null,maxLength:t=>li(t).maximum??null},{regex(...t){return this.check(U1(...t))},includes(...t){return this.check(F1(...t))},startsWith(...t){return this.check(z1(...t))},endsWith(...t){return this.check(B1(...t))},min(...t){return this.check(al(...t))},max(...t){return this.check(Em(...t))},length(...t){return this.check(wm(...t))},nonempty(...t){return this.check(al(1,...t))},lowercase(t){return this.check(k1(t))},uppercase(t){return this.check(O1(t))},trim(){return this.check(H1())},normalize(...t){return this.check($1(...t))},toLowerCase(){return this.check(G1())},toUpperCase(){return this.check(V1())},slugify(){return this.check(W1())}})),UT=ce("ZodString",(t,e)=>{td.init(t,e),Om.init(t,e)},{email(t){return this.check(r1(BT,t))},url(t){return this.check(u1(HT,t))},jwt(t){return this.check(w1(iA,t))},emoji(t){return this.check(d1(GT,t))},guid(t){return this.check(s1($T,t))},uuid(t){return this.check(a1(Mo,t))},uuidv4(t){return this.check(o1(Mo,t))},uuidv6(t){return this.check(l1(Mo,t))},uuidv7(t){return this.check(c1(Mo,t))},nanoid(t){return this.check(f1(VT,t))},cuid(t){return this.check(h1(WT,t))},cuid2(t){return this.check(p1(XT,t))},ulid(t){return this.check(m1(ZT,t))},base64(t){return this.check(S1(eA,t))},base64url(t){return this.check(M1(tA,t))},xid(t){return this.check(g1(qT,t))},ksuid(t){return this.check(_1(jT,t))},ipv4(t){return this.check(v1(YT,t))},ipv6(t){return this.check(x1(KT,t))},cidrv4(t){return this.check(y1(JT,t))},cidrv6(t){return this.check(b1(QT,t))},e164(t){return this.check(E1(nA,t))},datetime(t){return this.check(T1(kT,t))},date(t){return this.check(A1(OT,t))},time(t){return this.check(R1(FT,t))},duration(t){return this.check(C1(zT,t))}});function Ke(t){return i1(UT,t)}const Pt=ce("ZodStringFormat",(t,e)=>{wt.init(t,e),Om.init(t,e)}),kT=ce("ZodISODateTime",(t,e)=>{lw.init(t,e),Pt.init(t,e)}),OT=ce("ZodISODate",(t,e)=>{cw.init(t,e),Pt.init(t,e)}),FT=ce("ZodISOTime",(t,e)=>{uw.init(t,e),Pt.init(t,e)}),zT=ce("ZodISODuration",(t,e)=>{dw.init(t,e),Pt.init(t,e)}),BT=ce("ZodEmail",(t,e)=>{qE.init(t,e),Pt.init(t,e)}),$T=ce("ZodGUID",(t,e)=>{XE.init(t,e),Pt.init(t,e)}),Mo=ce("ZodUUID",(t,e)=>{ZE.init(t,e),Pt.init(t,e)}),HT=ce("ZodURL",(t,e)=>{ew.init(t,e),Pt.init(t,e)}),GT=ce("ZodEmoji",(t,e)=>{tw.init(t,e),Pt.init(t,e)}),VT=ce("ZodNanoID",(t,e)=>{nw.init(t,e),Pt.init(t,e)}),WT=ce("ZodCUID",(t,e)=>{iw.init(t,e),Pt.init(t,e)}),XT=ce("ZodCUID2",(t,e)=>{rw.init(t,e),Pt.init(t,e)}),ZT=ce("ZodULID",(t,e)=>{sw.init(t,e),Pt.init(t,e)}),qT=ce("ZodXID",(t,e)=>{aw.init(t,e),Pt.init(t,e)}),jT=ce("ZodKSUID",(t,e)=>{ow.init(t,e),Pt.init(t,e)}),YT=ce("ZodIPv4",(t,e)=>{fw.init(t,e),Pt.init(t,e)}),KT=ce("ZodIPv6",(t,e)=>{pw.init(t,e),Pt.init(t,e)}),JT=ce("ZodCIDRv4",(t,e)=>{mw.init(t,e),Pt.init(t,e)}),QT=ce("ZodCIDRv6",(t,e)=>{_w.init(t,e),Pt.init(t,e)}),eA=ce("ZodBase64",(t,e)=>{vw.init(t,e),Pt.init(t,e)}),tA=ce("ZodBase64URL",(t,e)=>{yw.init(t,e),Pt.init(t,e)}),nA=ce("ZodE164",(t,e)=>{bw.init(t,e),Pt.init(t,e)}),iA=ce("ZodJWT",(t,e)=>{Mw.init(t,e),Pt.init(t,e)}),Fm=ce("ZodNumber",(t,e)=>{_m.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>iT(t,n,i,r),t.isFinite=!0},rm({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=li(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=li(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=li(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>li(t).format??null},{gt(t,e){return this.check(ah(t,e))},gte(t,e){return this.check(uc(t,e))},min(t,e){return this.check(uc(t,e))},lt(t,e){return this.check(sh(t,e))},lte(t,e){return this.check(cc(t,e))},max(t,e){return this.check(cc(t,e))},int(t){return this.check(gh(t))},safe(t){return this.check(gh(t))},positive(t){return this.check(ah(0,t))},nonnegative(t){return this.check(uc(0,t))},negative(t){return this.check(sh(0,t))},nonpositive(t){return this.check(cc(0,t))},multipleOf(t,e){return this.check(oh(t,e))},step(t,e){return this.check(oh(t,e))},finite(){return this}}));function $t(t){return P1(Fm,t)}const rA=ce("ZodNumberFormat",(t,e)=>{Ew.init(t,e),Fm.init(t,e)});function gh(t){return I1(rA,t)}const sA=ce("ZodBoolean",(t,e)=>{ww.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>rT(t,n,i)});function aA(t){return L1(sA,t)}const oA=ce("ZodUnknown",(t,e)=>{Tw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>aT()});function _h(){return N1(oA)}const lA=ce("ZodNever",(t,e)=>{Aw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>sT(t,n,i)});function cA(t){return D1(lA,t)}const uA=ce("ZodArray",(t,e)=>{rd(),Pw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>uT(t,n,i,r),t.element=e.element},{min(t,e){return this.check(al(t,e))},nonempty(t){return this.check(al(1,t))},max(t,e){return this.check(Em(t,e))},length(t,e){return this.check(wm(t,e))},unwrap(){return this.element}});function cs(t,e){return X1(uA,t,e)}const dA=ce("ZodObject",(t,e)=>{rd(),Nw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>dT(t,n,i,r),IM(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return Mr(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(Nn(this._zod.def,{catchall:t}))},passthrough(){return this.clone(Nn(this._zod.def,{catchall:_h()}))},loose(){return this.clone(Nn(this._zod.def,{catchall:_h()}))},strict(){return this.clone(Nn(this._zod.def,{catchall:cA()}))},strip(){return this.clone(Nn(this._zod.def,{catchall:void 0}))},extend(t){return yM(this,t)},safeExtend(t){return bM(this,t)},merge(t){return SM(this,t)},pick(t){return vM(this,t)},omit(t){return xM(this,t)},partial(...t){return $f(zm,this,t[0])},exactPartial(...t){return $f(Bm,this,t[0],"exactPartial")},required(...t){return MM($m,this,t[0])}});function ii(t,e){const n={type:"object",shape:t??{},...Be(e)};return new dA(n)}const fA=ce("ZodUnion",(t,e)=>{Dw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>fT(t,n,i,r),t.options=e.options});function hA(t,e){return new fA({type:"union",options:t,...Be(e)})}const pA=ce("ZodIntersection",(t,e)=>{Uw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>hT(t,n,i,r)});function mA(t,e){return new pA({type:"intersection",left:t,right:e})}const gu=ce("ZodEnum",(t,e)=>{kw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(i,r,s)=>oT(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new gu({...e,checks:[],...Be(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new gu({...e,checks:[],...Be(r),entries:s})}});function Mr(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new gu({type:"enum",entries:n,...Be(e)})}const gA=ce("ZodTransform",(t,e)=>{rd(),Ow.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>cT(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new sm(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(Ra(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(Ra(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function _A(t){return new gA({type:"transform",transform:t})}const zm=ce("ZodOptional",(t,e)=>{ym.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>km(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function vh(t){return new zm({type:"optional",innerType:t})}const Bm=ce("ZodExactOptional",(t,e)=>{Fw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>km(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function vA(t){return new Bm({type:"optional",innerType:t})}const xA=ce("ZodNullable",(t,e)=>{zw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>pT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function xh(t){return new xA({type:"nullable",innerType:t})}const yA=ce("ZodDefault",(t,e)=>{Bw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>gT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function bA(t,e){return new yA({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():Jp(e)}})}const SA=ce("ZodPrefault",(t,e)=>{$w.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>_T(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function MA(t,e){return new SA({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():Jp(e)}})}const $m=ce("ZodNonOptional",(t,e)=>{Hw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>mT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function EA(t,e){return new $m({type:"nonoptional",innerType:t,...Be(e)})}const wA=ce("ZodCatch",(t,e)=>{Gw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>vT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function TA(t,e){return new wA({type:"catch",innerType:t,catchValue:typeof e=="function"?e:NM(e)})}const AA=ce("ZodPipe",(t,e)=>{Vw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>xT(t,n,i,r),t.in=e.in,t.out=e.out});function yh(t,e){return new AA({type:"pipe",in:t,out:e})}const RA=ce("ZodReadonly",(t,e)=>{Ww.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>yT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function CA(t){return new RA({type:"readonly",innerType:t})}const PA=ce("ZodCustom",(t,e)=>{Xw.init(t,e),Ot.init(t,e),t._zod.processJSONSchema=(n,i,r)=>lT(t,n,i,r)});function IA(t,e={}){return Z1(PA,t,e)}function LA(t,e){return q1(t,e)}const NA=ii({id:Ke(),name:Ke(),role:Ke(),state:Mr(["idle","thinking","working","reviewing"]),stationId:Mr(["culture","analyzer","explorer","notebook"]),boredom:$t().min(0).max(100).nullable(),boredomSpectrum:ii({position:$t().min(0).max(1),color:Ke(),regime:Ke()}).optional()}),DA=ii({field:Ke().nullable(),question:Ke(),test:Ke().nullable(),rho:$t().nullable(),p:$t().nullable(),n:$t().nullable(),replicated:aA(),rejected:Ke().nullable(),error:Ke().nullable()});ii({runId:Ke(),lastSequence:$t().int().nonnegative(),status:Mr(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:$t(),title:Ke().optional(),config:ii({mode:Mr(["tinker_modal","recorded"]),arm:Mr(["A","B","C","D","full"]),rounds:$t(),task:Ke().optional(),seed:$t().nullable(),model:Ke().nullable()}),sourceCommit:Ke(),progress:$t().min(0).max(1),round:$t(),boredom:$t(),regime:Ke(),value:$t().nullable(),reference:$t().nullable(),agents:cs(NA),findings:cs(ii({agent:Ke().optional(),role:Ke(),message:Ke(),round:$t().optional(),memoryId:Ke().optional()})),results:cs(ii({agent:Ke(),round:$t(),kind:Ke(),status:Ke(),value:$t().nullable(),commit:Ke().nullable().optional(),description:Ke(),sources:cs(Ke()).optional(),effectSize:$t().nullable().optional(),pValue:$t().nullable().optional(),reward:$t().nullable().optional(),study:DA.nullable().optional()})),sources:cs(ii({id:Ke().nullable(),title:Ke().nullable(),url:Ke().nullable(),query_id:Ke().nullable()})),error:Ke().nullable(),metric:ii({name:Ke(),unit:Ke(),direction:Mr(["minimize","maximize"])}),provenance:ii({llm:Ke(),gpu:Ke(),exa:Ke(),memory:Ke(),execution:Ke().optional()})});async function ll(t,e){{const n=Zp(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const dc=(t,e)=>t.filter(e).at(-1),ws=(t,e)=>t.filter(n=>n.tick<=e),ve=t=>typeof t=="string"&&t.trim()?t.trim():null,St=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Ii=t=>typeof t=="boolean"?t:null;function Ca(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const _u=t=>new Map(t.map(e=>[String(e.id),e]));function bh(t){const e=ve(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:ve(n.idea)||ve(n.text)||e}:{text:e}}catch{return{text:e}}}function Pa(t,e,n){if(!t)return null;const i=ws(t.events,n).filter(b=>b.refs?.experiment_id===e);if(!i.length)return null;const r=_u(Ca(t,"experiments")).get(e)||{},s=i.find(b=>b.type==="experiment.started"),a=dc(i,b=>b.type==="experiment.finished"),o=dc(i,b=>b.type==="gate.checked"),l=dc(i,b=>b.type==="verdict.issued"),c=i.find(b=>b.refs?.study_id),u=ve(r.hypothesis_id)||ve(s?.refs?.hypothesis_id),d=u?ws(t.events,n).find(b=>b.type==="hypothesis.proposed"&&b.refs?.hypothesis_id===u):void 0,f=d?_u(Ca(t,"hypotheses")).get(u)||{}:null,h=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(h.reasons)&&h.reasons.length>0||typeof h.pass=="boolean"||St(h.attempts)>0,v=o?.payload||{},p=[...Array.isArray(v.reasons)?v.reasons:[],...a&&Array.isArray(h.reasons)?h.reasons:[]].map(String),m=t.events.some(b=>b.type==="verdict.issued"&&b.refs?.experiment_id===e),_=l||a&&!m?r.verdict:null,M=l?.payload||{};return{id:e,agentId:ve(r.agent_id)||s?.agentId||i[0].agentId||null,round:St(r.round)??St(i[0].round),kind:ve(r.kind),commit:ve(r.commit)||ve(v.candidate_commit),role:ve(r.role)||ve(s?.payload?.role),description:ve(r.description)||ve(s?.payload?.description)||ve(s?.message),idea:f?{text:bh(f.text||d?.payload?.text).text,rationale:ve(f.rationale)||ve(d?.payload?.rationale)||ve(bh(f.text||d?.payload?.text).rationale),predictedDelta:St(f.predicted_delta)??St(r.predicted_delta),sources:(Array.isArray(f.source_ids)?f.source_ids:[]).map(String)}:null,descriptor:r.descriptor||v.descriptor||null,gate:o||a&&g?{pass:Ii(v.pass)??Ii(h.pass),reasons:[...new Set(p)],attempts:St(h.attempts),text:ve(v.text)||ve(o?.message),priorArt:(Array.isArray(v.prior_art)?v.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:ve(a.payload?.status)||ve(r.status),metric:St(a.payload?.metric_value)??St(r.metric_value),reward:St(a.payload?.reward),text:ve(a.payload?.text)||ve(a.message),tick:a.tick}:null,verdict:l||_?{by:ve(_?.by_agent_id)||l?.agentId||null,verdict:ve(M.verdict)||ve(_?.verdict),why:ve(M.why)||ve(_?.why),tick:l?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([b,T])=>typeof T=="string"&&(a||b==="diff"))),logTail:a?ve(r.log_tail):null,studyId:ve(r.study_id)||ve(c?.refs?.study_id),timeline:i.map(b=>({tick:b.tick,type:b.type,text:ve(b.payload?.text)||ve(b.message)||b.type}))}}function UA(t,e){return[...new Set(ws(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function sd(t,e){if(!t)return[];const n=ws(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(UA(t,e)),s=Ca(t,"experiments").filter(a=>r.has(String(a.id)));return Ca(t,"sources").flatMap(a=>{const o=String(a.id),l=i.get(o),c=St(a.tick);if(!l&&(c==null||c>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(ve).filter(Boolean):[],d=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(f=>r.has(f)),...s.filter(f=>Array.isArray(f.source_ids)&&f.source_ids.includes(o)).map(f=>String(f.id))])];return[{id:o,title:ve(a.title)||ve(l?.payload?.summary)||ve(a.url)||o,url:ve(a.url)||ve(l?.payload?.url),highlight:u[0]||ve(a.highlight)||ve(a.extract)||ve(l?.payload?.text),agentId:ve(a.agent_id)||l?.agentId||null,tick:l?.tick??c,citedBy:d}]})}const kA=t=>Array.isArray(t)?t.map(e=>({rho:St(e?.rho),p:St(e?.p),n:St(e?.n),problem:e?.problem})):[],Sh=t=>({rho:St(t.rho),p:St(t.p),n:St(t.n),halves:kA(t.halves),significant:Ii(t.significant),replicated:Ii(t.replicated),confirmed:Ii(t.confirmed)});function vu(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(vu);if(typeof t=="object"){const e=t,n=ve(e.text)||ve(e.why)||ve(e.reason)||ve(e.verdict);return n?[[ve(e.by)||ve(e.judge)||ve(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>vu(r).map(s=>`${i}: ${s}`))}return[String(t)]}function Mh(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Ii(e.available)??!0,score:St(e.score),rejected:Ii(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const l=o&&typeof o=="object"?o:{};return[a,{laugh:St(l.laugh),think:St(l.think),reason:ve(l.reason),model:ve(l.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:ve(a.title)||"",url:ve(a.url)||"",snippet:ve(a.snippet)||""})),priorWorkAvailable:Ii(e.prior_work_available)??!1}}function ks(t,e){if(!t)return[];const n=ws(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=_u(Ca(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),l=i.get(o)||{},c=s.payload||{};if(s.type==="study.registered"){const d=l.dataset&&typeof l.dataset=="object"?l.dataset:{};r.set(o,{id:o,agentId:ve(l.agent_id)||s.agentId||null,experimentId:ve(l.experiment_id)||ve(s.refs?.experiment_id),round:St(l.round)??St(s.round),field:ve(c.field)||ve(l.field),direction:ve(l.direction),question:ve(c.question)||ve(l.question),hypothesis:ve(l.hypothesis),mechanism:ve(l.mechanism),dataset:{url:ve(d.url),x:ve(c.x)||ve(d.x),y:ve(c.y)||ve(d.y),xLevel:ve(d.x_level),yLevel:ve(d.y_level),id:ve(l.dataset_id)},predictedRho:St(c.predicted_rho)??St(l.predicted_rho),citations:(Array.isArray(l.citations)?l.citations:[]).map(String),novelty:St(l.novelty),priorArtPass:Ii(l.prior_art_pass),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...Sh({...l,...c,halves:c.halves??l.halves,significant:c.significant??l.significant}),headline:ve(c.headline)||ve(l.headline),rejected:ve(c.rejected),text:ve(c.text)||ve(s.message)},u.committee=Mh(c.committee??l.committee)):s.type==="study.replicated"?u.replications.push(Sh(c)):s.type==="award.issued"&&(u.award={award:ve(c.award),score:St(c.score),rejected:ve(c.rejected),headline:ve(c.headline),verdicts:vu(c.verdicts??l.committee?.verdicts),text:ve(c.text)||ve(s.message)},u.committee=Mh(c)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function Hm(t,e,n,i=40){return ws(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:ve(s.kind),text:ve(s.text)||ve(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const OA=(t,e=3)=>t==null?"—":(t>0?"+":"")+t.toFixed(e),cl=t=>t==null?"—":t<1e-300?"<1e-300":String(Number(t.toPrecision(2))),Eh={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},fc=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function Rr(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const $i=t=>typeof t=="string"?t.trim():"";function Gm(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},l=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const c=$i(o.regime);if(!c)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",d=s.get(u);s.set(u,c),l&&d!==c&&Eh[c]&&r.push({tick:a.tick,kind:"regime",title:Eh[c],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(l)if(a.type==="discovery.made"){const c=fc(o.metric_value),u=fc(o.previous_best),d=$i(o.title),f=c==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${Rr(c)}${u==null?"":` (was ${Rr(u)})`}`,h=fc(o.reward);r.push({tick:a.tick,kind:"best",title:c==null?"New discovery!":"New best!",detail:[f||(h==null?"":`reward ${Rr(h)}`),d].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:$i(o.award)||$i(o.prize)||"Award issued",detail:[$i(o.title)||$i(o.headline),$i(o.citation)||$i(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function FA(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}const zA=/\b(?:402|credit|billing|payment|quota)\b/i;function Vm(t,e){const n=i=>typeof i=="string"&&zA.test(i.replace(/https?:\/\/\S+/gi," "));return Array.isArray(t.publish_errors)&&t.publish_errors.some(i=>n(i.kind)||n(i.message))?!0:(e?.events||[]).some(i=>(i.type==="run.finished"||i.type==="run.stopped")&&(n(i.message)||["text","error","reason","detail","message"].some(r=>n(i.payload?.[r]))))}function BA(t){const e=t.provenance?.command,i=(Array.isArray(e)?e.join(" "):typeof e=="string"?e:"").match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1],r=Number(i);return Number.isFinite(r)&&r>0?r:void 0}function $A(t,e){const n=(e?.events||[]).flatMap(o=>[o.round,o.payload?.round]).filter(o=>typeof o=="number"&&Number.isFinite(o)),i=Math.max(t.time?.rounds||0,...n),r=t.requestedRounds||t.requested_rounds||t.rounds||t.run?.rounds||BA(t),s=i?` (${i}${r?`/${r}`:""} rounds)`:"",a=Vm(t,e)?" · Tinker credit ran out":"";return`Stopped real run${s}${a}`}function ad(t,e){const n=t?.provenance,i=[];if(n?.exa==="off"?i.push("Exa off"):(n?.exa==="live"||n?.exa==="on")&&i.push("Exa on"),n?.memory_backend==="pastdev"?i.push("past.dev memory"):n?.memory_backend==="local"&&i.push("local memory"),n?.llm==="fake"||n?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:i};const r=typeof n?.llm=="string"&&n.llm!=="fake"?FA(n.llm):"";return r?t?.status==="stopped"?{label:$A(t,e),tone:"stopped",chips:i}:t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:i}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${r} run`,tone:"live",chips:i}:{label:"Finished real run",tone:"finished",chips:i}:{label:"Unverified recording",tone:"unknown",chips:i}}const HA="f8fa53cc-6afd-5e98-9596-0c7b8711e718";function GA(t,e){return t.find(n=>n.id===e)?.id||t.find(n=>n.id===HA)?.id||t[0]?.id}function VA(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function WA(t){return t.sample===!1&&t.status==="stopped"?{eyebrow:"RESEARCH / SWARM RUN",kicker:"● SWARM RUN · STOPPED",callout:"Swarm run · stopped. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${YA(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function XA(t,e){return!!t.live||e<t.totalTicks}function Fa(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function ZA(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function qA(t,e){return t.filter(n=>n.tick<=e)}function jA(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const YA=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function KA(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}const wh=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function JA(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const l=[...n[a]||[]],c=new Map(l.map((u,d)=>[wh(u),d]));for(const u of o){const d=c.get(wh(u));d===void 0?l.push(u):l[d]=u}n[a]=l}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,..."igjudge"in e?{igjudge:e.igjudge}:{},manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function QA(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return JA(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const eR={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel Prize hunt"};function Th(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function Wm(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function od(t){return t.task_title||eR[Wm(t)]||t.title}function Xm(t,e){return!0}function Zm(t){return t?.direction==="minimize"?"Loss":t?.name?t.name.replaceAll("_"," ").replace(/^./,e=>e.toUpperCase()):"Metric"}function tR(t,e,n,i){return typeof t=="number"&&Number.isFinite(t)?`${n} ${i(t)}`:t===null&&typeof e=="number"&&Number.isFinite(e)?`Reward ${i(e)}`:""}function nR(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};if(t.status==="stopped")return{status:"stopped",label:"STOPPED",detail:"The run ended before finishing"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${Th(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${Th(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function iR(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function rR(t){const e=nR(t),n=t.sample===!1?KA({...t,stale:e.status==="stale",live:e.status==="live"}):"",i=od(t),r=i===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[n+i,r,t.sample===!1&&e.status==="stopped"?e.label.toLowerCase():"",t.sample===!1?iR(t):""].filter(Boolean).join(" · ")}function sR(t,e){const n=[["Live now",t.filter(r=>r.sample===!1&&r.live)],["Swarm runs",t.filter(r=>r.sample===!1&&!r.live)],["Recorded samples",t.filter(r=>r.sample!==!1)]],i=r=>`<option value="${e(r.id)}">${e(rR(r))}</option>`;return n.filter(([,r])=>r.length).map(([r,s])=>`<optgroup label="${r}">${s.map(i).join("")}</optgroup>`).join("")}const va=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:null,qm=t=>Array.isArray(t)?t.filter(e=>!!va(e)):va(t)?Object.values(t).filter(e=>!!va(e)):[],aR="Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.";function Ts(t,e){const n=t?.metric?.description||"";return!!t&&(Wm(t)==="ignobel"||t.metric?.name==="replicated_findings"||/replicated and significant/i.test(n)||qm(e?.entities?.studies).length>0)}function Ia(t,e){return Ts(t,e)?!qm(e?.entities?.studies).some(i=>i.committee!=null||va(i.result)?.committee!=null||va(i.graded)?.committee!=null)&&!(e?.events||[]).some(i=>i.type==="award.issued"):!1}function wl(t,e){if(Ts(t,e)){if(Ia(t,e))return aR;const n=t?.metric?.description;if(n)return n.replace(/\breplicated\s+and\s+significant\b/gi,"split-half consistent and significant").replace(/\breplicated\b/gi,"passed split-half consistency").replace(/\breplication\b/gi,"split-half consistency")}return t?.proxy_note}const Fo={minRho:.1,alpha:.005,splitAlpha:.05},br=t=>typeof t=="number"&&Number.isFinite(t),hc=t=>br(t)?t:void 0,Eo=t=>String(t);function ld(t){const e=t&&typeof t=="object"?t:{};return{minRho:hc(e.minRho??e.min_rho??e.min_effect_rho)??Fo.minRho,alpha:hc(e.alpha??e.p_alpha??e.significance_alpha)??Fo.alpha,splitAlpha:hc(e.splitAlpha??e.split_alpha??e.replication_alpha)??Fo.splitAlpha}}function cd(t,e={}){const n={...Fo,...e},i=[],r=t?.rho,s=t?.p,a=t?.direction==="positive"?1:t?.direction==="negative"?-1:br(r)?Math.sign(r):0,o=t?.halves;return(!br(r)||r*a<n.minRho)&&i.push(`|ρ| ≥ ${Eo(n.minRho)}`),(!br(s)||s>=n.alpha)&&i.push(`p < ${Eo(n.alpha)}`),br(r)&&o&&o.length>=2&&o.every(c=>{const u=c?.rho,d=c?.p;return br(u)&&br(d)&&d<n.splitAlpha&&u*a>=n.minRho&&!c.problem})||i.push(`split-half consistency (both halves p < ${Eo(n.splitAlpha)}, same direction, |ρ| ≥ ${Eo(n.minRho)})`),{pass:i.length===0,failures:i}}const xu=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],vr=t=>typeof t=="string"?t:"";function oR(t){const e=xu(t?.entities?.sources),n=new Map(e.map(o=>[vr(o.url),o]).filter(([o])=>o)),i=xu(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(l=>{const c=vr(l),u=n.get(c);return{study:vr(o.question)||vr(o.headline)||vr(o.id),url:c,sourceId:u?String(u.id??u.source_id??""):"",title:u?vr(u.title):""}})).sort((o,l)=>+!!l.sourceId-+!!o.sourceId),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(vr(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="search").length,memoryRecalls:s,pastdev:a}}function lR(t){const e=t?.events||[];return{exaSearches:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="search").length,sourceCards:xu(t?.entities?.sources).length,pastdevRecalls:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="recall"&&n.payload?.backend==="pastdev").length,memoryWrites:e.filter(n=>n.type==="memory.written").length}}function yu(t,e=Number.MAX_SAFE_INTEGER){const n=ks(t,e),i=Gm(t?.events||[],-1,e).filter(l=>l.kind==="award"),r=new Set(n.filter(l=>l.result&&l.result.rejected==null&&l.result.p!=null&&Number.isFinite(l.result.p)).map(l=>l.id)).size,s=n.filter(l=>l.result?.confirmed===!0||l.result?.replicated===!0||l.replications.some(c=>c.confirmed===!0||c.replicated===!0)),a=s.filter(l=>cd(l.result?{...l.result,direction:l.direction||void 0}:null,ld(t?.manifest?.judging)).pass).length,o=wl(t?.manifest,t)||"";return{studies:n.length,registered:n.length,ran:r,confirmed:s.length,underCurrentRules:a,passed:s.length,awards:i.map(l=>[l.title,l.detail].filter(Boolean).join(" · ")),proxyNote:o,isIgnobel:Ts(t?.manifest,t),preCommittee:Ia(t?.manifest,t)}}function cR(t,e){if(!t)return e||"Dataset";try{const n=new URL(t).pathname.split("/").filter(Boolean),i=n.at(-1),r=i==="content"?n.at(-2):i;return decodeURIComponent(r||e||"Dataset").replace(/\.[^.]+$/,"").replaceAll("_"," ").replaceAll("-"," ")}catch{return e||t}}function jm(t){if(!t)return[];const e=ld(t.manifest?.judging);return ks(t,Number.MAX_SAFE_INTEGER).flatMap(n=>{const i=n.result,r=i?.rho;if(!(i?.confirmed===!0||i?.replicated===!0||n.replications.some(o=>o.confirmed===!0||o.replicated===!0))||n.priorArtPass===!1||r==null||Math.abs(r)<.1||!cd(i?{...i,direction:n.direction||void 0}:null,e).pass)return[];const a=t.manifest.agents?.find(o=>o.agent_id===n.agentId)?.display_name||t.frames.flatMap(o=>o.snapshot.agents||[]).find(o=>o.id===n.agentId)?.name||n.field?.replaceAll("_"," ")||"Research lab";return[{id:n.id,question:n.question||n.hypothesis||n.id,dataset:cR(n.dataset.url,n.dataset.id),rho:r,lab:a}]}).sort((n,i)=>Math.abs(i.rho)-Math.abs(n.rho))}function Ym(t,e=Number.MAX_SAFE_INTEGER){return t?ks(t,e).flatMap(n=>{const i=n.award?.score??n.committee?.score;if(i==null||!Number.isFinite(i))return[];const r=[...new Set(Object.values(n.committee?.judges||{}).map(s=>s.model).filter(s=>!!s))];return[{id:n.id,headline:n.award?.headline||n.question||n.hypothesis||n.id,score:i,rejected:n.committee?.rejected===!0,award:n.award?.award||null,judgeModels:r}]}).sort((n,i)=>i.score-n.score||n.id.localeCompare(i.id)):[]}function zo(t,e,n){return/^https?:\/\//i.test(t)?`<a href="${n(t)}" target="_blank" rel="noopener noreferrer">${n(e)}</a>`:n(e)}function uR(t,e,n,i=null,r=null){const s=i?.provenance,a=ad(i,r||void 0),o=t.tools.map(u=>{let d=u.name,f=u.detail,h="";if(u.kind==="llm"){const g=s?.llm==="fake"||s?.llm_mode==="fake",v=typeof s?.llm=="string"?s.llm:"",p=v&&v!=="fake"&&v.split("/").filter(Boolean).at(-1)||"";g?(d=u.fakeName||u.name,f=u.fakeDetail||u.detail,h=u.fakeSuffix||""):p?(d=s?.llm_mode==="tinker"&&u.tinkerName||u.name,f=(s?.llm_mode==="tinker"&&u.tinkerDetail||u.detail).replace(/\{model\}/g,/kimi/i.test(v)?"Kimi":p)):(f=u.unverifiedDetail||u.detail,h=u.unknownSuffix||"")}else u.kind==="exa"?h=s?.exa==="off"?u.offSuffix||"":s?.exa==="live"||s?.exa==="on"?"":u.unknownSuffix||"":u.kind==="memory"&&(h=s?.memory_backend==="pastdev"?"":s?.memory_backend==="local"?u.localSuffix||"":s?.memory_backend==="off"?u.offSuffix||"":u.unknownSuffix||"");return`<li><b>${n(d)}</b> ${n(f)}${h?` <span class="about-provenance-note">${n(h)}</span>`:""}</li>`}).join(""),l=`<div class="provenance-badge about-provenance" data-tone="${a.tone}" role="status" aria-label="${n(a.label)}"><span class="provenance-badge-label">${n(a.label)}</span></div>`,c=e.citations.slice(0,12).map(u=>`<li><span>${n(u.study)}</span> ${u.sourceId?`<button class="chip" data-source="${n(u.sourceId)}">${n(t.labels.source)} ${n(u.title||u.url)}</button>`:`${/^https?:\/\//i.test(u.url)?`<a href="${n(u.url)}" target="_blank" rel="noopener noreferrer">${n(u.url)}</a>`:`<code>${n(u.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join("");return`<button class="drawer-close" data-close-drawer aria-label="Close About">✕</button><div class="eyebrow">${n(t.sections.about)}</div><h2>${n(t.event.title)}</h2>${l}<a class="about-video-link" href="https://arii.github.io/caffeinated/about.html" target="_blank" rel="noopener noreferrer">▶ Watch the 64-second demo</a><details class="about-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details><details class="about-section"><summary>${n(t.sections.tools)}</summary><ul class="about-tools">${o}</ul></details><details class="about-section"><summary>${n(t.sections.authors)}</summary>${t.authors.project?`<h3>${n(t.authors.project)}</h3>`:""}${t.authors.team?`<p class="eyebrow">${n(t.authors.team)}</p>`:""}<p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details><details class="about-section"><summary>${n(t.sections.boredom)}</summary><h3>${n(t.boredom.title)}</h3>${t.boredom.paragraphs.map(u=>`<p>${n(u)}</p>`).join("")}<p class="muted">${zo(t.boredom.source,t.boredom.source,n)}</p></details><details class="about-section"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${c?`<ul class="about-cites">${c}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details>`}const Km={B:"#e3cba3",S:"#99c6b3",A:"#91a9d1"},Ah=t=>String(Number(t.toFixed(3)));function dR(t,e,n){return`<section class="tool-use"><div class="visual-heading"><h2>Tools used in this run</h2></div><div class="tool-use-grid">${[["EXA",e.exaSearches,"searches",""],["EXA",e.sourceCards,"source cards",t.results.charts.sourceCaption],["past.dev",e.pastdevRecalls,"recalls",""],["MEMORY",e.memoryWrites,"memories written",""]].map(([r,s,a,o])=>`<div class="tool-use-tile"><span class="tool-wordmark">${n(r)}</span><strong>${s}</strong><span>${n(a)}</span>${o?`<small>${n(o)}</small>`:""}</div>`).join("")}</div><p class="chart-caption">${n(t.results.charts.toolsCaption)}</p><button class="see-sources" type="button" data-open-evidence>See sources</button></section>`}function Rh(t,e,n){const i=jm(e);return`<section class="finalists"><h2>Finalists — awaiting committee judging</h2><div class="finalist-grid">${i.map(r=>`<article class="finalist-card"><h3 title="${n(r.question)}">${n(r.question)}</h3><div class="finalist-meta"><span>${n(r.dataset)}</span><span>Lab · ${n(r.lab)}</span></div><div class="finalist-rho"><svg viewBox="0 0 180 14" role="img" aria-label="Absolute correlation ${Math.abs(r.rho).toFixed(3)}"><rect x="0" y="4" width="170" height="6" rx="3" fill="#ffffff25"/><rect x="0" y="4" width="${Math.max(1,Math.abs(r.rho)*170).toFixed(1)}" height="6" rx="3" fill="#e3cba3"/></svg><span>ρ ${r.rho.toFixed(3)}</span></div></article>`).join("")}</div>${i.length?"":"<p>No studies passed both filters.</p>"}</section>`}function Ch(t,e){const n=Ym(t),i=n.length>0&&n.every(r=>r.score<.5);return n.length?`<section class="finalists committee-results"><h2>${i?"Committee verdict: no award":"Committee scores"}</h2><ol class="committee-score-list">${n.map((r,s)=>`<li class="committee-score-row"><div class="committee-score-heading"><span>${s+1}</span><strong>${e(r.headline)}</strong><b>${r.score.toFixed(2)}</b></div><div class="committee-score-track" role="img" aria-label="Committee score ${r.score.toFixed(2)} out of 1"><i style="width:${Math.max(0,Math.min(1,r.score))*100}%"></i></div>${r.judgeModels.length?`<small>Judges · ${r.judgeModels.map(e).join(" · ")}</small>`:""}</li>`).join("")}</ol></section>`:""}function Ph(t,e){const n=[["Registered",t.registered],["Tests run",t.ran],["Passed gates",t.confirmed],["Post-hoc floor",t.underCurrentRules]],i=Math.max(1,...n.map(r=>r[1]));return`<svg class="chart-svg" viewBox="0 0 360 126" role="img" aria-label="Ig Nobel study counts">${n.map(([r,s],a)=>{const o=20+a*29,l=Math.max(2,Number(s)/i*164);return`<text x="4" y="${o+4}" class="chart-label">${e(r)}</text><rect x="150" y="${o-7}" width="164" height="13" rx="4" class="chart-track"/><rect x="150" y="${o-7}" width="${l.toFixed(1)}" height="13" rx="4" class="chart-bar"/><text x="320" y="${o+4}" class="chart-value">${s}</text>`}).join("")}</svg>`}function fR(t,e){const{baseline:n,best:i}=t.results.charts.bixbench,r=210,s=112;return`<svg class="chart-svg" viewBox="0 0 380 104" role="img" aria-label="BixBench held-out score with 95 percent confidence intervals">${[{label:"Baseline",score:n,y:30,color:"#99c6b3"},{label:"Swarm best",score:i,y:72,color:"#e3cba3"}].map(({label:o,score:l,y:c,color:u})=>{const d=l.correct/l.total,f=s+l.ci[0]*r,h=s+l.ci[1]*r;return`<text x="4" y="${c+4}" class="chart-label">${e(o)}</text><rect x="${s}" y="${c-7}" width="${r}" height="13" rx="4" class="chart-track"/><rect x="${s}" y="${c-7}" width="${(d*r).toFixed(1)}" height="13" rx="4" fill="${u}"/><line x1="${f}" y1="${c-13}" x2="${h}" y2="${c-13}" class="chart-whisker"/><line x1="${f}" y1="${c-17}" x2="${f}" y2="${c-9}" class="chart-whisker"/><line x1="${h}" y1="${c-17}" x2="${h}" y2="${c-9}" class="chart-whisker"/><text x="328" y="${c+4}" class="chart-value">${l.correct}/${l.total}</text>`}).join("")}</svg>`}function hR(t,e){const{groups:n}=t.results.charts.track3,i=132/.32;return`<svg class="chart-svg" viewBox="0 0 430 164" role="img" aria-label="Track 3 grouped bars: preregistered stopped early, and complete set picked after">${n.map((r,s)=>{const a=s?220:6,o=r.label.includes("(")?r.label.slice(0,r.label.indexOf("(")).trim():r.label,l=r.label.includes("(")?r.label.slice(r.label.indexOf("(")):"";return`<text x="${a}" y="16" class="chart-group">${e(o)}</text><text x="${a}" y="32" class="chart-group">${e(l)}</text>${r.values.map((c,u)=>{const d=58+u*31;return`<text x="${a}" y="${d+3}" class="chart-label">${e(c.arm)}</text><rect x="${a+17}" y="${d-8}" width="132" height="12" rx="4" class="chart-track"/><rect x="${a+17}" y="${d-8}" width="${(c.value*i).toFixed(1)}" height="12" rx="4" fill="${Km[c.arm]}"/><text x="${a+155}" y="${d+3}" class="chart-value">${c.value.toFixed(3)}</text>`}).join("")}`}).join("")}</svg>`}function pR(t,e){const{pastdev:n,local:i}=t.results.charts.memory,r=[{label:"Hit@1",a:n.hitAt1,b:i.hitAt1,y:30},{label:"Hit@8",a:n.hitAt8,b:i.hitAt8,y:66}],s=[{label:"past.dev",value:n.medianLatencyMs,color:"#99c6b3"},{label:"Local",value:i.medianLatencyMs,color:"#e3cba3"}],a=r.map(({label:l,a:c,b:u,y:d})=>`<text x="4" y="${d+4}" class="chart-label">${e(l)}</text><text x="60" y="${d-2}" class="chart-mini-label">past.dev</text><rect x="126" y="${d-12}" width="${(c*150).toFixed(1)}" height="10" rx="3" fill="#99c6b3"/><text x="282" y="${d-3}" class="chart-value">${Ah(c)}</text><text x="60" y="${d+12}" class="chart-mini-label">Local</text><rect x="126" y="${d+2}" width="${(u*150).toFixed(1)}" height="10" rx="3" fill="#e3cba3"/><text x="282" y="${d+11}" class="chart-value">${Ah(u)}</text>`).join(""),o=s.map((l,c)=>{const u=123+c*16;return`<text x="60" y="${u+3}" class="chart-mini-label">${e(l.label)}</text><rect x="126" y="${u-7}" width="${Math.max(2,l.value/600*150).toFixed(1)}" height="10" rx="3" fill="${l.color}"/><text x="282" y="${u+2}" class="chart-value">${l.value} ms</text>`}).join("");return`<svg class="chart-svg" viewBox="0 0 380 158" role="img" aria-label="Past.dev and local memory retrieval comparison">${a}<line x1="4" y1="100" x2="365" y2="100" class="chart-divider"/><text x="4" y="119" class="chart-label">Median latency</text>${o}</svg>`}function mR(t,e,n){const i=jm(e)[0],r=t.results.citations?.find(s=>s.runId===e.manifest.id&&s.studyId===i?.id);return!r||!i?"":`<section class="result-citation" aria-label="Research result in one sentence"><div class="eyebrow">${n(r.category)} · Research citation</div><p class="result-citation-line">${n(r.text)}</p><p class="chart-caption">${n(i.dataset)} · ρ ${i.rho.toFixed(3)}. ${n(r.note)}</p></section>`}function Ih(t,e,n,i=yu(e)){if(e.manifest.continuous)return`${Ch(e,n)||Rh(t,e,n)}<section class="result-chart"><h2>This session's studies</h2>${Ph(i,n)}<p>${i.registered} registered · ${i.ran} tested · ${i.confirmed} confirmed</p></section><p class="metric-note">${n(e.manifest.metric?.description||i.proxyNote||t.results.noProxy)}</p>`;const r=t.results.charts,s=lR(e),a=Ch(e,n)||Rh(t,e,n),o=`<section class="result-chart"><h2>Ig Nobel test funnel</h2>${Ph(i,n)}<p class="chart-caption">${n(r.funnelCaption)}</p></section>`,l=`<section class="result-chart"><h2>BixBench held-out</h2>${fR(t,n)}<p class="chart-caption">${n(r.bixbench.caption)}</p></section>`,c=`<section class="result-chart"><h2>Track 3 · three-arm comparison</h2>${hR(t,n)}<div class="chart-legend">${r.track3.legend.map(g=>`<span><i style="background:${Km[g.arm]}"></i>${n(g.arm)} = ${n(g.label)}</span>`).join("")}</div><p class="chart-caption">${n(r.track3.caption)}</p></section>`,u=`<section class="result-chart"><h2>Memory retrieval</h2>${pR(t,n)}<p class="chart-caption">${n(r.memory.caption)}</p></section>`,d=r.funnelCaption?t.results.factualLine.replace("{N}",String(i.registered)).replace("{R}",String(i.ran)).replace("{C}",String(i.confirmed)).replace("{K}",String(i.underCurrentRules)).replace("{committeeSuffix}",i.preCommittee?t.results.noCommitteeSuffix:""):"",f=e.manifest.metric?.description||i.proxyNote||t.results.noProxy,h=[zo(t.results.memoryComparisonUrl,"Memory comparison details",n),zo(t.results.track3Url,"Track 3 results and caveats",n),zo(t.results.bixbenchUrl,"BixBench held-out artifact",n)];return`${mR(t,e,n)}${dR(t,s,n)}${a}${o}${l}${c}${u}<details class="results-details"><summary>Details</summary><p>${n(d)}</p><p>${n(t.results.track3Line)}</p><p class="metric-note"><strong>${n(t.results.proxyNote)}:</strong> ${n(f)}</p><ul class="detail-links">${h.map(g=>`<li>${g}</li>`).join("")}</ul></details>`}const gR="How it's judged",_R="Committee data exists, but no prizes were issued in this recording.",vR=["Preregister the study before looking at the data.","Use a real, public dataset.","Pass the gates: |ρ| ≥ 0.1 and p < 0.005.","Pass split-half consistency: both halves p < 0.05 and in the same direction.","Check prior work with Exa.","Two independent non-Kimi judges (gpt-oss-120b and Qwen3.5-397B) score each study; the final score is the lower judge.","Reject any study that targets a group of people."],pc={title:gR,committeePending:_R,steps:vR},xR="/caffeinated/assets/follow-qr-Bv-E2P9c.png",Lh={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function yR(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function Nh(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Dh={B:"BIO",C:"CHEM",P:"PHYSICS"};function bR(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=yR(t.name);if(Lh[n])return{initial:r,familyKey:"S",familyLabel:Lh[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:Nh(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const c=Nh(a);return{initial:r,familyKey:c,familyLabel:Dh[c]||a.toUpperCase(),staff:!1,color:i}}const l=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:l,familyLabel:Dh[l]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const SR={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function Jm(t){return t?SR[t]||t.replaceAll("_"," ").toLowerCase():""}function Qm(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const MR={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function eg(t){return MR[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function ER(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function tg(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!ER(e)}function wR(t,e,n=110){const i=[eg(t.type),e].filter(Boolean).join(" · ");if(!tg(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i} — ${r.length>n?r.slice(0,n-1)+"…":r}`}function TR(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const ta=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function ng(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=ta(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=ta(a.mechanism)||i.mechanism,i.method=ta(a.method)||i.method),i.role=ta(s.role)||i.role}else r.type==="study.registered"&&(i.field=ta(s.field)||i.field)}return i}function ig(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const Uh={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function AR(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:Uh[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:Uh[i]?.[1]||"",names:r}))}function RR(t,e){return e-t<=1}function CR(t){return t.live?t.totalTicks:0}function PR(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function rg(t,e,n){return!!t?.live&&n&&RR(e,t.totalTicks)}function sg(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function IR(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(rg(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=sg(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function Tn(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function LR(t,e,n,i=!0){const r=l=>typeof l=="number"&&Number.isFinite(l)?l:null,s=t.filter(l=>(l.tick??0)<=n).map(l=>({id:l.id,tick:l.tick??0,raw:r(l.value),value:i?r(l.value):null,outcome:Tn(l.status,l.kind),agent:l.agent,description:l.description,status:l.status})),a=[],o=[];for(const l of e){if(l.tick>n||l.tick<0)continue;const c=l.snapshot.value;if(c==null||!Number.isFinite(c))continue;const u=a.at(-1);(!u||u[1]!==c)&&(u&&o.push([l.tick,c]),a.push([l.tick,c]))}return{points:s,best:a,newBest:o}}const ni={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},na=t=>String(Number(t.toPrecision(4)));function NR(t,e,n,i){const r=[...t.points.map(S=>S.value),...t.best.map(S=>S[1])].filter(S=>S!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,l=52,c=560,u=16,d=132,f=150,h=Math.max(1,n),g=a===s?s-o/2:s,v=a===s?o:a-s,p=S=>l+Math.min(1,S/h)*(c-l),m=S=>d-(S-g)/v*(d-u),_=t.best.map(([S,O],N)=>`${N?"H":"M"}${p(S).toFixed(1)} ${N?`V${m(O).toFixed(1)}`:m(O).toFixed(1)}`).join(""),M=t.best.length?`<path class="best-line" d="${_}H${p(h).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",b=S=>{const O=p(S.tick).toFixed(1),N=`${i(S.agent)} · ${i(S.status)} · ${S.raw==null?"no score":na(S.raw)} · ${i(S.description)}`,A=`<title>${N}</title>`,$=S.id?` data-experiment="${i(S.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${N}"`:"";if(S.value==null&&S.outcome!=="crashed")return`<circle class="pt ${S.outcome}"${$} cx="${O}" cy="${f}" r="${S.outcome==="discarded"?3.5:4.5}" fill="${S.outcome==="discarded"?"none":ni[S.outcome]}" stroke="${ni[S.outcome]}" stroke-width="1.6">${A}</circle>`;if(S.value==null)return`<g class="pt crashed"${$}>${A}<path d="M${+O-4} ${f-4}l8 8m0 -8l-8 8" stroke="${ni.crashed}" stroke-width="2"/></g>`;const B=m(S.value).toFixed(1);return S.outcome==="crashed"?`<g class="pt crashed"${$}>${A}<path d="M${+O-4} ${+B-4}l8 8m0 -8l-8 8" stroke="${ni.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${S.outcome}"${$} cx="${O}" cy="${B}" r="${S.outcome==="discarded"?3.5:4.5}" fill="${S.outcome==="discarded"?"none":ni[S.outcome]}" stroke="${ni[S.outcome]}" stroke-width="1.6">${A}</circle>`},T=t.newBest.map(([S,O])=>`<path class="new-best" d="M${p(S).toFixed(1)} ${(m(O)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${na(O)} at tick ${S}</title></path>`).join(""),R=e.direction==="maximize"?"↑ better":"↓ better",x=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${l} ${u-4}V${d+4}H${c}" fill="none" stroke="#79918b"/><text x="${l-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${na(a)}</text><text x="${l-6}" y="${d}" text-anchor="end" fill="#b9cac2" font-size="9">${na(s)}</text><text x="${l-6}" y="${f+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(S=>S.value==null&&S.raw!=null)?"other measure":"no score"}</text><path d="M${l} ${f}H${c}" stroke="#ffffff14" stroke-dasharray="3 4"/>${M}${t.points.map(b).join("")}${T}${x?`<text x="${c}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${na(x[1])}</text>`:""}<text x="${l}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${R}</text><g font-size="9" fill="#b9cac2" transform="translate(${l} 186)"><circle cx="0" cy="-3" r="4" fill="${ni.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${ni.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${ni.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${ni.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}function ag(t,e,n,i,r,s){const a=new Map(e.map(o=>[i(o),o]));return t.map(o=>{const l=n(o),c=a.get(l)||r(o);return a.delete(l),s(c,o),c})}function ud(t){return t.events.find(n=>{if(n.type!=="agent.assigned")return!1;const i=String(n.payload?.role||"").toLowerCase();return!["conductor","critic","host","baseline","environment","world"].includes(i)})?.tick??0}function og(t,e=0){const n=t.events,i=[{tick:0,label:"Start"}];e>0&&(i[0]={tick:e,label:"Scientists arrive"});const r=(a,o)=>{const l=n.find(c=>c.tick>=e&&o(c));l&&i.push({tick:l.tick,label:a})};r("Boredom shift",a=>["round.started","boredom.measured"].includes(a.type)&&/snap|breakout/i.test(String(a.payload?.regime||""))),r("New best",a=>a.type==="discovery.made"),r("Confirmed study",a=>a.type==="study.result"&&(a.payload?.confirmed===!0||a.payload?.replicated===!0)),r("Critic review",a=>a.type==="verdict.issued"||/critic\.(veto|rejected)/i.test(a.type)),i.push({tick:t.manifest.totalTicks,label:"Finish"});const s=[...new Map(i.sort((a,o)=>a.tick-o.tick).map(a=>[a.tick,a])).values()];return s.length>1?s:[{tick:0,label:"Start"},{tick:t.manifest.totalTicks,label:"Finish"}]}function DR(t,e,n=75e3){if(!t.length)return 0;if(t.length===1)return t[0].tick;if(e>=n)return t.at(-1).tick;const i=Math.min(2e3,n/t.length/2),r=(n-i*t.length)/(t.length-1);let s=0;for(let a=0;a<t.length;a++){if(e<s+i)return t[a].tick;if(s+=i,a<t.length-1){if(e<s+r){const o=(e-s)/r,l=o*o*(3-2*o);return t[a].tick+(t[a+1].tick-t[a].tick)*l}s+=r}}return t.at(-1).tick}function lg(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function cg(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function bu(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function UR(t,e,n){const i=lg(t),r=[],s=new Map,a=new Set,o=new Set,l=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let c=0;const u=new Set,d=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),f=.25,h=f*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=d;g+=f){for(;c<l.length&&l[c].tick<=g;){const p=l[c++];if(p.type==="experiment.started"){p.agentId&&(a.add(p.agentId),o.add(p.agentId));continue}if(p.type==="experiment.finished"){p.agentId&&o.delete(p.agentId);continue}for(const m of[p.agentId,...p.payload?.to_agent_ids||[],p.refs?.to_agent_id].filter(Boolean)){u.add(m);const _=s.get(m);_&&!_.table&&(_.pending=!0)}}const v=Fa(t.frames,g)?.snapshot.agents||[];cg(v,g,i).forEach(p=>{const m=v.findIndex(b=>b.id===p.id);let _=s.get(p.id);if(!_){_={p:{...su(m),atTable:u.has(p.id)},path:[],leg:0,dwell:u.has(p.id)?2.5:0,pending:!1,table:u.has(p.id),lab:!1},s.set(p.id,_);return}if(a.delete(p.id)&&(_.lab=!0,_.table=!1,_.dwell=0,_.p.atTable=!1,_.p.atLab=!1,_.path=Uo(_.p,au(bu({...p,activity:"experimenting"}),m),e,n)),_.lab&&!_.path.length&&!_.p.atLab&&(_.p.atLab=!0,_.dwell=4),_.dwell>0){_.dwell=Math.max(0,_.dwell-h),_.p.atTable=_.table;return}if(_.lab&&_.p.atLab){if(o.has(p.id))return;_.lab=!1,_.p.atLab=!1}if(_.p.atTable=!1,!_.path.length){_.table&&(_.table=!1,_.pending=!1,_.leg=0);const T=[au(bu({...p,activity:"experimenting"}),m),{x:2.7+m%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(_.leg>=T.length&&_.pending)_.table=!0,_.path=Uo(_.p,su(m),e,n);else{const R=T[_.leg%T.length];_.leg++,_.path=Uo(_.p,R,e,n)}}let M=h*2.1;for(;_.path.length&&M>0;){const b=_.path[0],T=Math.hypot(b.x-_.p.x,b.z-_.p.z);T<=M?(_.p.x=b.x,_.p.z=b.z,M-=T,_.path.shift()):(_.p.x+=(b.x-_.p.x)/T*M,_.p.z+=(b.z-_.p.z)/T*M,M=0)}!_.path.length&&_.lab&&(_.p.atLab=!0,_.dwell=4),!_.path.length&&_.table&&(_.dwell=3,_.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([p,m])=>[p,{...m.p}]))})}return r}function kR(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function OR(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const l=o.payload?.text||o.message||"";if(!l.trim())continue;const c=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:kR(i(l)),peers:c.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const rt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",mc=t=>typeof t=="number"&&Number.isFinite(t)?t:null,ps=t=>String(Number(t.toPrecision(4))),mn=(t,e=140)=>t.length>e?t.slice(0,e-1)+"…":t,ug=t=>Array.isArray(t)?t.map(e=>rt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function Tl(t,e){const n=t.payload||{},i=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const r=rt(n.why)||rt(n.reason);return n.accepted===!0?`Critic approved${r?`: ${mn(r)}`:": the rerun reproduced the score"}`:n.accepted===!1?`Critic rejected${r?`: ${mn(r)}`:": score didn't reproduce on rerun"}`:rt(n.text)}case"gate.checked":{const r=ug(n.reasons);if(n.pass===!1)return`Novelty gate blocked: ${r.length?mn(r.join("; ")):"too close to an earlier idea"}`;const s=Array.isArray(n.prior_art)?n.prior_art.length:0;return n.pass===!0?`Novelty gate passed: the idea is new enough${s?` (checked against ${s} prior source${s===1?"":"s"})`:""}`:rt(n.text)}case"experiment.started":return`Testing: ${mn(rt(n.description)||rt(n.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const r=mc(n.metric_value),s=rt(n.status).toLowerCase(),a=r==null?"":` ${i} ${ps(r)}`,o=e.best==null?"":` (best ${ps(e.best)})`;return/crash|error|fail|timeout/.test(s)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(s)&&!/not_/.test(s)?`Kept:${a||" result"} beats the previous best`:r==null&&s?`${/reject|invalid|block/.test(s)?"Rejected before scoring":"Not scored"}${rt(n.text)?`: ${mn(rt(n.text))}`:""}`:s?`Discarded:${a} didn't beat the best${o}`:rt(n.text)}case"agent.assigned":{const r=rt(n.role);return r?`Conductor assigned ${r}${rt(n.rationale)?`: ${mn(rt(n.rationale))}`:""}`:rt(n.text)}case"round.started":{const r=kr(rt(n.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${r?` · ${r}`:""}${rt(n.rationale)?`: ${mn(rt(n.rationale))}`:""}`}case"boredom.measured":{const r=mc(n.B),s=kr(rt(n.regime)).label;return r==null?rt(n.text):`Boredom ${Math.round(r*100)}%${s?` · ${s}`:""}${r>.6?": repeating itself, ready to switch approach":r<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${mn(rt(n.text))}`;case"question.asked":{const r=rt(n.kind);return`${r==="recall"?"Recalling memory":r==="search"||r==="exa"?"Searching the literature":"Asking"}: ${mn(rt(n.text))}`}case"observation.received":return`Read: ${mn(rt(n.text)||rt(n.summary))}`;case"message.sent":{const r=rt(n.to_agent_id)||rt(t.refs?.to_agent_id);return`${r?`To ${e.name(r)}`:"Message"}: ${mn(rt(n.text))}`}case"study.registered":return`Pre-registered: ${mn(rt(n.question)||rt(n.text))}`;case"study.result":return mn(rt(n.text)||rt(n.headline));case"discovery.made":{const r=mc(n.metric_value);return`New best${r==null?"":`: ${i} ${ps(r)}`}${rt(n.title)?` · ${mn(rt(n.title),80)}`:""}`}default:return""}}function dd(t,e,n,i,r){const s=(t?.events||[]).filter(h=>h.tick<=i&&h.agentId===e),a=s.filter(h=>h.type==="experiment.started"&&h.refs?.experiment_id).at(-1),o=s.filter(h=>h.type==="gate.checked").at(-1),l=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,c=a&&!l?Pa(t,String(a.refs.experiment_id),i):null,u=c&&(t?.events||[]).filter(h=>h.tick<=i&&h.type==="verdict.issued"&&h.refs?.experiment_id===c.id).at(-1),f=[...s,...u&&u.agentId!==e?[u]:[]].sort((h,g)=>h.tick-g.tick).map(h=>({tick:h.tick,why:Tl(h,r)})).filter(h=>h.why).slice(-6).reverse();return{activity:Jm(n),latest:s.at(-1)||null,blocked:l,experiment:c,sources:sd(t,i).filter(h=>h.agentId===e).slice(-3).reverse(),feed:f}}function dg(t,e,n){const i=e.esc,r=t.experiment,s=(g,v)=>v?`<div class="now-row"><b>${g}</b><div>${v}</div></div>`:"",a=t.latest?`${i(t.activity||"working")} · <span class="muted">${i(Tl(t.latest,e)||t.latest.type)}</span>`:i(t.activity||"Not active yet"),o=r?`${i(r.idea?.text||r.description||"")}${r.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${r.idea.predictedDelta>0?"+":""}${ps(r.idea.predictedDelta)}</span>`:""}${r.descriptor?.mechanism?` <span class="pill">${i(String(r.descriptor.mechanism).replaceAll("_"," "))}${r.descriptor.method?` / ${i(String(r.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",l=t.sources.map(g=>`<button class="chip" data-source="${i(g.id)}">${i(mn(g.title,60))}</button>`).join(""),c=t.blocked?`<span class="pill bad">blocked</span> ${i(ug(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:r?.gate?`<span class="pill ${r.gate.pass?"ok":"bad"}">${r.gate.pass?"passed":r.gate.pass===!1?"blocked":"checked"}</span> ${i(r.gate.reasons.length?r.gate.reasons.join("; "):r.gate.pass?"The idea is new enough to try.":"")}`:r?'<span class="muted">Not checked yet</span>':"",u=r?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(r.verdict.verdict||"")&&!/not_/i.test(r.verdict.verdict||"")?"ok":"bad"}">${i(r.verdict.verdict||"verdict")}</span> ${i(r.verdict.why||"")}`:r?.result?'<span class="muted">Waiting for the critic</span>':"",d=n?.name.replaceAll("_"," ")||"score",f=n?.direction==="maximize"?"higher":"lower",h=r?.result?`<span class="pill">${i(r.result.status||"done")}</span> ${r.result.metric==null?"":`${i(d)} ${ps(r.result.metric)}`}${e.best==null?"":` · best so far ${ps(e.best)} (${f} is better)`}`:r?'<span class="muted">Still running</span>':"";return`<div class="now-card">${s("Doing",a)}${s("Idea",o)}${s("Read",l)}${s("Gate",c)}${s("Score",h)}${s("Critic",u)}${r?`<button class="inspect-link" data-experiment="${i(r.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${t.feed.map(g=>`<li><span>${g.tick}</span>${i(g.why)}</li>`).join("")}</ol>`:""}</div>`}const FR=t=>t&&/^https?:\/\//i.test(t)?t:null,Bo=(t,e,n)=>FR(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),$o=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,fg=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,ia=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function zR(t,e,n){const i=e.esc,r=h=>`<p class="muted">${h}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${OA(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([h,g])=>`${h}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${$o(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(h=>`<li>${i(h)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),l=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"—")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),c=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),d=`${u.length?`<div class="artifact-links">${u.map(([h,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(h)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${ia("Idea",s+a,!!(t.idea||t.description))}${ia("Gate",o,!!t.gate)}${ia("Score",l,!!t.result)}${ia("Critic",c,!!t.verdict)}${ia("Artifacts",d,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${hg(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(h=>`<li><span>t${h.tick}</span> <b>${i(h.type)}</b> ${i(h.text)}</li>`).join("")}</ul></details>`}function BR(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${Bo(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(gg(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(_g(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>fg(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const ms=t=>t==null?"—":t.toFixed(3),$R=t=>`rho ${ms(t.rho)}, p ${cl(t.p)}, n ${t.n??"—"}`;function HR(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${ms(t)}, observed rho ${ms(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function GR(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed&&t.priorArtPass===!1?`<span class="badge" title="Replicated, but the novelty critic matched it to prior work, so it was not accepted.">Confirmed · not accepted: prior art${t.novelty!=null?` (novelty ${t.novelty.toFixed(2)})`:""}</span>`:t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function hg(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(d,f)=>d?`${n(d)}${f?` = <b>${n(f)}</b>`:""}`:"—",o=(r?.confirmed?cd({...r,direction:t.direction||void 0},ld(e.judging)).failures:[]).map(d=>`<span class="badge current-rule-failure">Fails current ${n(d)} rule</span>`).join(""),l=r?.halves.length?`<div class="halves">${r.halves.map((d,f)=>`<span>Half ${f+1}: rho ${ms(d.rho)}, p ${cl(d.p)}, n ${d.n??"—"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',c=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(d=>`<li>${$R(d)} ${$o(d.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",u=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([d,f])=>`<li>Judge ${n(d)} · laugh ${f.laugh??"—"} / think ${f.think??"—"}${f.reason?`: ${n(f.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(d=>`<li>${Bo(e,d.url,d.title||d.url)}${d.snippet?`<p class="muted">${n(d.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(d=>`<li>${n(d)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head"><div class="study-badges">${GR(t,e)}${o}</div><span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?Bo(e,i.url,gg(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"—")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${ms(t.predictedRho)} → observed <b>${ms(r?.rho??null)}</b>${r?` · p ${cl(r.p)} · n ${r.n??"—"}`:""}${HR(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?l:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${$o(r.significant,"significant","not significant")}, ${$o(r.replicated,"split-half consistent","not split-half consistent")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${c}${u}<div class="chips">${t.experimentId?fg(e,t.experimentId):""}${t.citations.map(d=>`<span class="chip">${Bo(e,d,_g(d.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function pg(t,e){return t.length?`<div class="card-grid">${t.map(n=>hg(n,e)).join("")}</div>`:""}function mg(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function gg(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function _g(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function VR(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const WR={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function XR(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=ig(ng(r,e.id,i),e.family||""),a={name:t.agentName||(d=>d===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=dd(n,e.id,e.activity||e.state,i,a),l=Xp(e.boredom).level,c=o.experiment,u=o.blocked?Tl(o.blocked,a):"";return{name:e.name,role:s||Qm(e.role)||"Scientist",mood:{level:l,label:WR[l]||null,boredomPct:e.boredom==null?null:Ni(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:c?.idea?.text||c?.description||null,predicted:u?null:c?.idea?.predictedDelta??null}}function ZR(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(Rr(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const Ho=t=>typeof t=="number"&&Number.isFinite(t),kh=t=>Math.max(0,Math.min(1,t)),qR="Zero loss passed the preregistered gates; tested counts finite candidate results.";function jR(t,e,n){const i=s=>s.agent===e||s.agent===n||s.agentId===e,r=t.filter(s=>i(s)&&Tn(s.status,s.kind)!=="baseline"&&Ho(s.value));return{confirmed:r.filter(s=>s.value===0).length,tested:r.length}}function YR(t){return`${t.confirmed} gate-confirmed / ${t.tested} tested`}function KR(t,e,n){const i=e.filter(r=>r.tick<=n);if(t==="conductor"){const r=i.filter(l=>l.type==="round.started").reduce((l,c)=>!l||c.tick>=l.tick?c:l,void 0),s=r?.payload?.regime;if(typeof s!="string")return"Conductor · awaiting assignment";const a=s.toUpperCase();return`Conductor · ${/BOREDOM_SNAP|EXPLORE|DIVERG/.test(a)?"Bored — trying new directions":/BREAKOUT|NOVEL/.test(a)?"Breakout":"Refining"}`}if(t==="critic"){const r=i.filter(s=>s.type==="verdict.issued").length;return`Critic · ${r} review${r===1?"":"s"}`}return""}function JR(t,e,n){if(t!=="conductor")return"";const i=e.filter(s=>s.tick<=n&&s.type==="round.started").reduce((s,a)=>!s||a.tick>=s.tick?a:s,void 0),r=i?.payload?.regime;return typeof r=="string"?kr(r).description:""}function QR(t){return t==null?"best —":`best ${Rr(t)}`}function eC(t,e,n,i,r,s){const a=v=>v.agent===e||v.agent===n||v.agentId===e,o=t.filter(v=>a(v)&&Tn(v.status,v.kind)!=="baseline").slice().sort((v,p)=>(v.tick??0)-(p.tick??0)),l=o.map(v=>v.value).filter(Ho),c=i.name==="replicated_findings"?"maximize":i.direction,u=l.length?c==="maximize"?Math.max(...l):Math.min(...l):null,d=t.filter(v=>Tn(v.status,v.kind)!=="baseline").map(v=>v.value).filter(Ho),f=d.length?c==="maximize"?Math.min(...d):Math.max(...d):null;let h=null;if(u!=null&&r!=null){if(u===r)h=1;else if(s!=null){const v=r-s;h=v===0?0:kh((u-s)/v)}else if(f!=null){const v=Math.abs(r-f);h=v===0?1:kh(c==="maximize"?(u-f)/v:(f-u)/v)}}const g={kept:0,discarded:0,crashed:0};for(const v of o){const p=Tn(v.status,v.kind);p!=="baseline"&&g[p]++}return{best:u,progress:h,...g,spark:o.map(v=>v.value).filter(Ho).slice(-12)}}function tC(t,e,n=1.96){if(!Number.isFinite(t)||!Number.isFinite(e)||e<=0||t<0||t>e)return null;const i=t/e,r=n*n,s=1+r/e,a=(i+r/(2*e))/s,o=n*Math.sqrt((i*(1-i)+r/(4*e))/e)/s;return{low:Math.max(0,a-o),high:Math.min(1,a+o)}}const Ei=t=>typeof t=="number"&&Number.isFinite(t),vg=t=>typeof t=="string"&&t?t.slice(0,7):null;function nC(t,e=String){return t==null?"":t===0?"no change":`${t>0?"improved by":"worsened by"} ${e(Math.abs(t))}`}function Oh(t,e){const n=Ei(t?.score)?t.score:null,i=n==null?null:n*e,r=i!=null&&Math.abs(i-Math.round(i))<=1e-6?Math.round(i):null;return{score:n,k:r,fraction:r==null?null:`${r}/${e}`,wilson:r==null?null:tC(r,e),loss:Ei(t?.loss)?t.loss:null,commit:vg(t?.commit)}}function As(t,e){return t?t.events.some(n=>n.type==="run.finished"&&n.tick<=e)?!0:["finished","completed","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks:!1}function iC(t,e){if(!t)return null;const{manifest:n}=t,i=Fa(t.frames,e)?.snapshot,r=i?.results||[],s=n.metric?.direction==="maximize"||i?.metric.direction==="maximize"?"maximize":"minimize",a=n.metric?.label||i?.metric.name||n.metric?.name||"result",o=r.find(_=>Tn(String(_.status||""),String(_.kind||""))==="baseline"),l=r.filter(_=>Tn(String(_.status||""),String(_.kind||""))==="kept"),c=l.length?l.reduce((_,M)=>s==="maximize"?Ei(M.value)&&(!Ei(_.value)||M.value>_.value)?M:_:Ei(M.value)&&(!Ei(_.value)||M.value<_.value)?M:_):o,u=Ei(o?.value)?o.value:null,d=Ei(c?.value)?c.value:null,f=u==null||d==null?null:s==="maximize"?d-u:u-d,h={kept:0,discarded:0,crashed:0};for(const _ of r){const M=Tn(String(_.status||""),String(_.kind||""));M!=="baseline"&&h[M]++}const g=wl(n,t)||"",v=n.held_out_test,p=v&&Ei(v.n_items)?v.n_items:0,m=v&&p>0?{n:p,baseline:Oh(v.baseline,p),best:Oh(v.best,p),proxyNote:Ts(n,t)?g:v.proxy_note||g,referenceNote:v.reference_note||n.reference_note||""}:null;return{status:n.status==="stopped"?"stopped":"finished",metric:a,direction:s,baseline:u,best:d,delta:f,winner:l.length&&c?{commit:vg(c.commit),description:String(c.description||""),agent:String(c.agent||"")}:null,totals:h,heldOut:m,proxyNote:m?.proxyNote||g,referenceNote:m?.referenceNote||n.reference_note||""}}const Mn=t=>t&&typeof t=="object"?t:{},Go=t=>typeof t=="number"&&Number.isFinite(t),Al=t=>Array.isArray(t)?t.map(Mn):t&&typeof t=="object"?Object.values(t).map(Mn):[],Fh=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],En=t=>typeof t=="string"?t:"",un=t=>Go(t)?t:null,Yi=t=>En(t.id||t.study_id||t.studyId),fd=t=>En(t.refs?.study_id||t.refs?.studyId||t.payload?.study_id||t.payload?.studyId),rC=["score","scores","judges","verdicts"],xg=t=>Object.keys(t).length>0,yg=t=>rC.some(e=>t[e]!=null);function zh(t){const e=Mn(t);return(Array.isArray(t)?t.map(Mn):Object.entries(e).map(([i,r])=>({id:i,...Mn(r)}))).map(i=>({id:En(i.id)||"judge",model:En(i.model),laugh:un(i.laugh),think:un(i.think),reason:En(i.reason)}))}const sC=["award.issued","study.result","study.replicated","study.completed"];function aC(t){const e=Mn(t.payload),n=[e.committee,e.award].map(Mn).find(xg);return n||(yg(e)?e:null)}function oC(t,e,n,i){const r=e.filter(p=>sC.includes(p.type)&&fd(p)===Yi(t)).map(p=>({event:p,payload:aC(p)})).filter(p=>p.payload!==null),s=r.filter(p=>p.event.tick<=n).sort((p,m)=>p.event.tick-m.event.tick).at(-1);if(!s&&(r.length||!i))return null;const a=Mn(t.graded),o=[t.committee,a.committee,Mn(t.result).committee].map(Mn).find(xg),l=Mn(s?.payload??o),c=Fh(a.scores).map(p=>{const m=Mn(p);return un(m.score??m.value??p)}).filter(Go);if(!Object.keys(l).length&&yg(a)&&Object.assign(l,{available:a.available,rejected:a.rejected,scores:a.scores,verdicts:a.verdicts,score:c.length?Math.min(...c):a.score,prior_work:a.prior_work}),!Object.keys(l).length)return null;if(l.available===!1)return{score:null,rejected:l.rejected===!0,judges:zh(l.judges??l.verdicts),priorWork:null};const u=zh(l.judges??l.verdicts??l.per_judge),d=u.map(p=>p.laugh==null||p.think==null?null:Math.min(p.laugh,p.think)/10).filter(Go),f=Fh(l.scores).map(p=>{const m=Mn(p);return un(m.score??m.value??p)}).filter(Go),h=un(l.score)??(f.length?Math.min(...f):null)??(d.length?Math.min(...d):null),g=Al(l.prior_work??l.priorWork),v=g.map(p=>({url:En(p.url),title:En(p.title)||void 0})).filter(p=>p.url);return{score:h,rejected:l.rejected===!0,judges:u,priorWork:g.length||l.prior_work_available===!0?{count:g.length,links:v}:null}}function ra(t,e){const n=Yi(t),i=e.filter(a=>fd(a)===n),r=i.filter(a=>a.type==="study.registered").sort((a,o)=>a.tick-o.tick)[0],s=i.filter(a=>["study.result","study.replicated","study.completed"].includes(a.type)).sort((a,o)=>a.tick-o.tick)[0];return r?.tick??un(t.registered_tick)??un(t.tick)??s?.tick??0}function lC(t,e){return e.filter(n=>fd(n)===Yi(t)&&["study.result","study.replicated","study.completed"].includes(n.type)).sort((n,i)=>n.tick-i.tick)[0]?.tick??null}const cC=t=>{const e=Mn(t.result),n=En(t.status||e.status).toLowerCase();return t.confirmed===!0||t.replicated===!0||e.confirmed===!0||e.replicated===!0||n==="confirmed"||n==="replicated"||Al(t.replications).some(i=>i.confirmed===!0||i.replicated===!0||["confirmed","replicated"].includes(En(i.status).toLowerCase()))};function uC(t,e,n,i){const r=Al(t).filter(c=>ra(c,e)<=n),s=r.filter(c=>{const u=lC(c,e);return u!=null&&u<=n&&cC(c)}),a=s.map(c=>({study:c,committee:oC(c,e,n,i)})).filter(c=>c.study.rejected!==!0&&!c.committee?.rejected),o=a.filter(c=>c.committee?.score!=null);if(o.length){const c=o.sort((u,d)=>d.committee.score-u.committee.score||(un(u.study.p)??1/0)-(un(d.study.p)??1/0)||ra(u.study,e)-ra(d.study,e)||Yi(u.study).localeCompare(Yi(d.study))).slice(0,3);return{status:"ranked",tested:r.length,confirmed:s.length,entries:c.map((u,d)=>Bh(u.study,u.committee,d+1))}}const l=a.sort((c,u)=>ra(c.study,e)-ra(u.study,e)||Yi(c.study).localeCompare(Yi(u.study)));return{status:l.length?"awaiting":"none",tested:r.length,confirmed:s.length,entries:l.map(c=>Bh(c.study,c.committee,null))}}function Bh(t,e,n){const i=Al(t.halves);return{studyId:Yi(t),headline:En(t.headline)||En(t.question),hypothesis:En(t.hypothesis)||En(t.mechanism),agentId:En(t.agent_id),tick:un(t.tick)??0,p:un(t.p),rho:un(t.rho),n:un(t.n),halves:i.map(r=>({rho:un(r.rho),n:un(r.n),p:un(r.p)})),rank:n,score:e?.score??null,unscored:e?.score==null,committee:e}}function dC(t,e){const n=wl(t.manifest,t);return n?`<p class="metric-description">${e(n)}</p>`:""}const xr=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:{},Vt=t=>typeof t=="string"?t:"",as=t=>typeof t=="number"&&Number.isFinite(t)?t:null,sa=t=>Array.isArray(t)?t:[],fC={humor:"Humor",plausibility:"Plausible",originality:"Original",insight:"Insight",appeal:"Appeal",alignment:"Ig Nobel"};function bg(t){const e=xr(t);if(e.schema!=="igjudge/v1")return null;const n=sa(e.criteria).map(xr).map(a=>({key:Vt(a.key),label:Vt(a.label)||Vt(a.key),weight:as(a.weight)??1})).filter(a=>a.key),i=new Map(sa(e.leaderboard).map(xr).map(a=>[Vt(a.study_id),as(a.rank)])),r=sa(e.ideas).map(xr).map(a=>{const o={};for(const[c,u]of Object.entries(xr(a.scores))){const d=xr(u);o[c]={initial:as(d.initial),revised:as(d.revised),final:as(d.final),reason:Vt(d.reason)}}const l=Vt(a.study_id);return{studyId:l,agentId:Vt(a.agent_id),title:Vt(a.title)||l,hypothesis:Vt(a.hypothesis),gate:Vt(a.gate),committee:Vt(a.committee),scores:o,total:as(a.total),classification:Vt(a.classification),verdict:Vt(a.verdict),safeguards:sa(a.safeguards).map(Vt).filter(Boolean),priorWork:sa(a.prior_work).map(xr).map(c=>({title:Vt(c.title),url:Vt(c.url)})).filter(c=>c.url),error:Vt(a.error),rank:i.get(l)??null}});if(!r.length)return null;r.sort((a,o)=>(a.rank??1/0)-(o.rank??1/0)||a.studyId.localeCompare(o.studyId));const s=Vt(e.winner);return{model:Vt(e.model),criteria:n,ideas:r,winner:r.find(a=>a.studyId===s&&a.total!=null)??null}}const $h=t=>/^https?:\/\//i.test(t)?t:"";function hC(t,e){const n=bg(t);if(!n)return"";const i=d=>d==null?"–":String(Math.round(d*10)/10),r=(d,f)=>d.scores[f]?.final??null,s=n.winner,a=s?`<div class="igjudge-winner"><span class="igjudge-trophy" aria-hidden="true">#1</span><div><p class="igjudge-kicker">Winner · ${e(i(s.total))}/100</p><p class="igjudge-winner-title">${e(s.title)}</p>${s.verdict?`<p class="igjudge-verdict">${e(s.verdict)}</p>`:""}</div></div>`:"",o=n.criteria.map(d=>`<th scope="col" title="${e(d.label)} (×${e(d.weight)})">${e(fC[d.key]||d.label)}<small>×${e(d.weight)}</small></th>`).join(""),l=n.ideas.map(d=>`<tr class="${d===s?"igjudge-win":""}"><td>${d.rank??"–"}</td><th scope="row">${e(d.title)}</th>${n.criteria.map(f=>`<td>${e(i(r(d,f.key)))}</td>`).join("")}<td class="igjudge-total">${e(d.error?"not scored":i(d.total))}</td></tr>`).join(""),c=n.ideas.map(d=>`<details class="igjudge-idea${d===s?" igjudge-win":""}"><summary><b>${d.rank?`#${d.rank}`:"–"}</b> ${e(d.title)} <span class="igjudge-pill">${e(i(d.total))}</span></summary>${d.error?`<p class="igjudge-error">Not scored: ${e(d.error)}</p>`:""}<p class="igjudge-status">Gate: ${e(d.gate||"–")} · Committee: ${e(d.committee||"–")}</p>${d.verdict?`<p>${e(d.verdict)}</p>`:""}<ul class="igjudge-criteria">${n.criteria.map(f=>{const h=d.scores[f.key];return h?`<li><b>${e(f.label)}</b> ${e(i(h.final))}/10 <small>(rounds ${e(i(h.initial))} → ${e(i(h.revised))} → ${e(i(h.final))})</small>${h.reason?` — ${e(h.reason)}`:""}</li>`:""}).join("")}</ul>${d.safeguards.length?`<p class="igjudge-safeguards">Safeguards: ${d.safeguards.map(e).join("; ")}</p>`:""}${d.priorWork.length?`<p class="igjudge-prior">Prior work (Exa): ${d.priorWork.slice(0,3).map(f=>$h(f.url)?`<a href="${e($h(f.url))}" target="_blank" rel="noopener">${e(f.title||f.url)}</a>`:e(f.title)).join(" · ")}</p>`:""}</details>`).join(""),u=n.ideas.filter(d=>d.total!=null).length;return`<section class="igjudge" aria-labelledby="igjudge-title"><h2 id="igjudge-title">IgJudge final verdict</h2><p class="igjudge-note">Post-run final pass: one LLM judge${n.model?` (${e(n.model)})`:""} scored all ${u} ideas on six criteria (1–10, three internal rounds), weighted to a 10–100 total. The in-run two-judge committee is unchanged; gate/committee status is shown per idea.</p>${a}<div class="igjudge-scroll" tabindex="0" role="region" aria-label="IgJudge leaderboard"><table class="igjudge-table"><thead><tr><th scope="col">#</th><th scope="col">Idea</th>${o}<th scope="col">Total</th></tr></thead><tbody>${l}</tbody></table></div><h3>Per-idea scores and reasons</h3>${c}</section>`}function pC(t){const e=Wp(t),n=e.head==="monitor"?"#fff8e4":"#263b41",i=e.head==="round"?`<ellipse cx="70" cy="49" rx="33" ry="26" fill="${e.shell}"/>`:`<rect x="37" y="24" width="66" height="50" rx="${e.head==="monitor"?7:17}" fill="${e.shell}"/>`,r=e.antenna==="pair"?[53,87]:[e.antenna==="offset-right"?87:e.antenna==="offset-left"?53:70],s=[58,82].map(o=>e.eyes==="happy"?`<path d="M${o-5} 47q5-8 10 0" fill="none" stroke="${n}" stroke-width="3" stroke-linecap="round"/>`:`<ellipse cx="${o}" cy="46" rx="3.5" ry="5" fill="${n}"/>`).join(""),a=e.prop==="magnifier"?`<circle cx="112" cy="99" r="12" fill="#bce7ef88" stroke="${e.accent}" stroke-width="5"/><path d="M106 109l-7 14" stroke="#263b41" stroke-width="5"/>`:e.prop==="clipboard"?`<rect x="19" y="89" width="25" height="34" rx="3" fill="${e.trim}"/><rect x="23" y="94" width="17" height="24" fill="#fff8e4"/><path d="M26 100h11m-11 6h11m-11 6h8" stroke="${e.accent}" stroke-width="2"/>`:`<path d="M28 92h10v15l10 16H18l10-16Z" fill="${e.trim}" stroke="#263b41" stroke-width="2"/><path d="M28 92h10" stroke="${e.accent}" stroke-width="4"/>`;return`<svg class="podium-agent" viewBox="0 0 140 162" aria-hidden="true" focusable="false"><ellipse cx="70" cy="155" rx="39" ry="5" fill="#0003"/><g stroke="#263b41" stroke-width="2"><path d="M54 127v20m32-20v20" stroke="${e.shell}" stroke-width="14"/><rect x="43" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="75" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="42" y="81" width="56" height="51" rx="12" fill="${e.shell}"/><path d="M70 88v41" stroke-width="1"/><path d="M42 90l-8 25m64-25 8 23" stroke="${e.shell}" stroke-width="12"/><circle cx="33" cy="116" r="7" fill="${e.accent}"/><circle cx="106" cy="114" r="7" fill="${e.accent}"/><rect x="61" y="71" width="18" height="11" rx="3" fill="${e.accent}"/><circle cx="34" cy="49" r="10" fill="${e.accent}"/><circle cx="106" cy="49" r="10" fill="${e.accent}"/>${r.map(o=>`<path d="M${o} 25V12"/><circle cx="${o}" cy="10" r="5" fill="${e.trim}"/>`).join("")}${i}</g>${e.head==="monitor"?'<rect x="43" y="31" width="54" height="36" rx="6" fill="#263b41"/>':""}${s}<path d="M62 56q8 12 16 0" fill="none" stroke="${n}" stroke-width="2.5" stroke-linecap="round"/><circle cx="49" cy="56" r="3" fill="${e.trim}"/><circle cx="91" cy="56" r="3" fill="${e.trim}"/><rect x="77" y="96" width="14" height="10" rx="2" fill="${e.accent}"/><circle cx="52" cy="93" r="3" fill="${e.trim}"/>${a}</svg>`}function mC(t){return t.filter(e=>!e.error&&e.score!=null&&Number.isFinite(e.score)).map((e,n)=>({idea:e,index:n})).sort((e,n)=>{const i=r=>r.rank!=null&&Number.isFinite(r.rank)&&r.rank>0?r.rank:1/0;return i(e.idea)-i(n.idea)||n.idea.score-e.idea.score||e.index-n.index}).slice(0,3).map(({idea:e})=>e)}function gC(t,e){const n=mC(t);if(!n.length)return'<section class="final-podium"><h2>Ig Nobel podium</h2><p role="status">Awaiting final judge scores. The podium will appear when judging is complete.</p></section>';const i=n.map((r,s)=>`<details class="podium-place podium-place-${s+1}"><summary><span class="podium-stage"><span class="podium-contestant">${r.agent?`${pC(r.agent.id)}<span class="podium-agent-name">${e(r.agent.name)}</span>`:'<span class="podium-agent-unknown">Agent not recorded</span>'}</span><span class="podium-step"><span class="podium-medal">${s+1}</span><span class="podium-score">${e(r.score)}<small>Final judge score</small></span></span></span><span class="podium-idea-label"><span class="podium-label">${s===0?"Ig Nobel Prize winner":s===1?"Second place":"Third place"}</span><strong class="podium-title">${e(r.title||r.id)}</strong><span class="podium-inspect">Inspect idea <span aria-hidden="true">↗</span></span></span></summary><div class="podium-description">${r.agent?`<p class="podium-author">Researcher: ${e(r.agent.name)}</p>`:""}<p>${e(r.description||"No additional idea description was supplied.")}</p>${r.verdict?`<p>${e(r.verdict)}</p>`:""}<p><strong>Final score: ${e(r.score)}</strong></p><small>Idea ${e(r.id)}</small></div></details>`).join("");return`<section class="final-podium" aria-label="Final top three ideas"><h2>Ig Nobel podium</h2><p>Final judge ranking · Select an idea to explore its details.</p>${n.length<3?`<p>Only ${n.length} scored ${n.length===1?"idea is":"ideas are"} available.</p>`:""}<div class="podium-places">${i}</div></section>`}function _C(t){return bg(t.igjudge)?.ideas.map(n=>{const i=t.entities?.studies?.find(l=>{const c=l;return(c.id??c.study_id)===n.studyId}),r=n.agentId||(typeof i?.agent_id=="string"?i.agent_id:""),s=t.manifest.agents?.find(l=>l.agent_id===r||l.native_id===r),a=t.frames.at(-1)?.snapshot.agents.find(l=>l.id===r),o=r?{id:s?.agent_id||r,name:s?.display_name||a?.name||r}:void 0;return{id:n.studyId,title:n.title,description:n.hypothesis,score:n.total,rank:n.rank,verdict:n.verdict,error:n.error,agent:o}})??[]}function vC(t,e,n){return As(t,e)?gC(_C(t),n):""}const On=t=>typeof t=="string"?t:"",Sg=(t,e)=>t.events.filter(n=>n.tick<=e);function xC(t,e=6){const n=new Map;for(const r of t){const s=n.get(r.round)||[];s.push(r),n.set(r.round,s)}const i=Math.max(1,Math.floor(e));return[...n].sort(([r],[s])=>r-s).map(([r,s])=>(s.sort((a,o)=>a.tick-o.tick),{round:r,visible:s.slice(0,i),hidden:s.slice(i)}))}function yC(t,e,n){if(!t.length)return 0;let i=n==null?-1:t.findIndex(o=>o.round===n);i<0&&(i=t.findIndex(o=>e>=o.startTick&&e<=o.endTick)),i<0&&(i=e<t[0].startTick?0:t.length-1);const r=t[i],s=r.endTick-r.startTick,a=s>0?(e-r.startTick)/s:e>=r.endTick?1:0;return i+Math.max(0,Math.min(1,a))}function bC(t){if(t.type==="hypothesis.proposed")return"idea";if(t.type==="llm.called"){const e=On(t.payload?.role).toLowerCase();return e.includes("scout")||e.includes("search")?"scout":e.includes("memory")?"memory":"idea"}return t.type==="verdict.issued"?t.payload?.vetoed===!0?"veto":"critic":t.type==="study.replicated"?"critic":t.type==="question.asked"&&t.payload?.kind==="search"||t.type==="agent.assigned"&&t.payload?.scout===!0?"scout":t.type==="question.asked"&&t.payload?.kind==="recall"||t.type==="observation.received"&&t.payload?.kind==="memories"?"memory":t.type==="boredom.measured"||t.type==="round.started"&&["BOREDOM_SNAP","PARADIGM_BREAKOUT"].includes(On(t.payload?.regime))?"boredom":t.type==="experiment.finished"?t.payload?.status==="keep"?"keep":"evaluation":t.type==="discovery.made"?"keep":t.type==="gate.checked"&&(t.payload?.pass??t.payload?.passed)===!1?"gate":t.type==="experiment.started"&&t.payload?.kind!=="baseline"?"idea":null}function SC(t,e){if(!t)return{rounds:[],lanes:[],roundCloses:[],roundSpans:[]};const n=new Map;let i=0;for(const f of t.events)f.type==="round.started"&&(i=Number(f.round||f.payload?.round)||i+1),n.set(f,Number(f.round||f.payload?.round)||i);const r=Sg(t,e),s=new Map;let a=0;const o=new Map,l=new Set;for(const f of r)f.type==="round.started"&&(a=Number(f.round||f.payload?.round)||a+1,l.add(a)),s.set(f,Number(f.round||f.payload?.round)||a);for(const f of r){const h=bC(f);if(!h)continue;const g=On(f.agentId||f.payload?.agent_id||f.refs?.agent_id);if(!g)continue;const v=s.get(f)||1;l.add(v);const p=t.manifest.agents?.find(b=>b.agent_id===g)?.display_name||g,m=o.get(g)||{id:g,name:p,marks:[]},_=On(f.refs?.event_id)||`${f.type}:${f.tick}`,M=h==="veto"?"Veto":h==="keep"?"New best":h==="gate"?"Gate blocked":h==="scout"?"Search":h==="memory"?"Memory recall":h==="boredom"?"Boredom shift":h==="critic"?"Critic review":h==="idea"?"Idea":"Evaluation";m.marks.push({tick:f.tick,round:v,kind:h,label:M,why:On(f.message||f.payload?.why||f.payload?.reason),eventId:_}),o.set(g,m)}const c=[...l].flatMap(f=>{const h=t.events.filter(m=>m.type==="experiment.finished"&&n.get(m)===f),g=t.events.find(m=>["round.closed","round.finished","round.completed"].includes(m.type)&&n.get(m)===f),v=t.events.find(m=>m.type==="round.started"&&(n.get(m)||0)>f),p=g?.tick??h.at(-1)?.tick??v?.tick;return p!=null&&p<=e?[{round:f,tick:p}]:[]}),u=[...l].sort((f,h)=>f-h),d=u.map((f,h)=>{const g=t.events.find(b=>b.type==="round.started"&&n.get(b)===f),v=t.events.filter(b=>n.get(b)===f),p=g?.tick??v[0]?.tick??0,m=t.events.find(b=>["round.closed","round.finished","round.completed"].includes(b.type)&&n.get(b)===f),_=t.events.filter(b=>b.type==="experiment.finished"&&n.get(b)===f).at(-1),M=u[h+1]==null?void 0:t.events.find(b=>b.type==="round.started"&&n.get(b)===u[h+1]);return{round:f,startTick:p,endTick:m?.tick??_?.tick??M?.tick??t.manifest.totalTicks}});return{rounds:u,lanes:[...o.values()],roundCloses:c,roundSpans:d}}function MC(t,e){if(!t)return{};const n=Sg(t,e);let i=0;if(n.some(g=>["run.finished","run.stopped"].includes(g.type))||["finished","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks)return Object.fromEntries((t.manifest.agents||[]).map(g=>[g.agent_id,"idle"]));for(const g of n)g.type==="round.started"&&(i=Number(g.round||g.payload?.round)||i+1);const s=n.filter(g=>(Number(g.round||g.payload?.round)||i)===i),a=new Set(s.filter(g=>g.type==="agent.assigned").map(g=>On(g.agentId||g.payload?.agent_id)).filter(Boolean)),o=s.filter(g=>["llm.called","hypothesis.proposed"].includes(g.type)&&On(g.agentId||g.payload?.agent_id)),l=s.filter(g=>g.type==="agent.assigned"&&On(g.agentId||g.payload?.agent_id)),c=o.at(-1),u=l.at(-1),d=c&&(!u||c.tick>=u.tick)?On(c.agentId||c.payload?.agent_id):"",f=u&&(!c||u.tick>c.tick)?On(u.agentId||u.payload?.agent_id):"",h={};for(const g of t.manifest.agents||[])h[g.agent_id]="idle";for(const g of a){const v=o.some(m=>On(m.agentId||m.payload?.agent_id)===g),p=s.some(m=>m.type==="experiment.finished"&&On(m.agentId||m.payload?.agent_id)===g);h[g]=g===f?"waiting":g===d&&!p?"active":v||p?"done":"waiting"}if(n.some(g=>["round.closed","round.finished","round.completed"].includes(g.type)&&(Number(g.round||g.payload?.round)||i)===i)||n.some(g=>g.type==="round.started"&&(Number(g.round||g.payload?.round)||i)>i))for(const g of a)h[g]="done";return h}document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target.closest?.("[data-orch-tick]");e&&(t.preventDefault(),e.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});const Q=t=>document.getElementById(t),ul=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Me=t=>ul(Da(String(t??""))),La=Q("console"),Ht=Q("conversation"),Mg=Q("guide"),Cr=Q("inspector"),Pr=Q("results-dialog");let Ie,Lt,ui,ne=null,at=null,Eg=[],Ee=0,st=!1,Yt=!1,Vo=4,tr="highlights",gs=0,hd=[],Ji=null,pd="",Mi="",Dt="",Ai=!1,An=!1,Zi="",pi="",Hh=0,Na=!1,xa=!1,Gh=0,$n="",Su=!1,wg=!1,wo=!1,Vh=!1,Ir=null,yn=0,ri=0,ua=!1,To={x:0,y:0},Gi=null,Wh,Xh,dl,Lr=0,Tg=new Map,fl=!1,Ag=!1,Mu=!1,os=null;const Rg=eM(),Cg=new URLSearchParams(location.search);let Yn=Cg.get("cinema")==="1";const EC=Yn&&Cg.get("capture")==="1";let Er=null,Pg=0;Yn&&document.body.classList.add("cinema");function Da(t){return jA(t,Tg)}function Ig(){const t=ad(ne?.manifest,ne||void 0),e=Q("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${Me(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${Me(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.hidden=!ne,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}Ig();function wC(t){Tg=new Map(Object.entries(t.manifest.aliasMap||{}))}let Lg=new Map,Wo=[];const Sn=new Set;function za(t){return bR(t,ne?.manifest.agents?.find(e=>e.agent_id===t.id))}function Ng(t){const e=za(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${Me(e.initial)}</span>`}function Dg(t){const e=za(t),n=ne&&!e.staff?ig(ng(ne.events,t.id,Ee),e.familyLabel):"";return[e.familyLabel,e.staff?"":n||(t.role!==t.type?Qm(t.role):""),t.standby?"standing by":Jm(t.activity||t.state)].filter(Boolean).map(i=>ul(i)).join(" · ")}function Ug(t){if(za(t).staff)return"";const e=t.boredom==null?null:Ni(t.boredom),n=kr(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Ls(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}" title="${Me(n.description)}">${Me(n.label)}</em>`:""}</span>`}function TC(t){const e=t.boredom==null?null:Ni(t.boredom);return`<span class="strip-meter" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Ls(e)}"></i></span>`}function AC(){const t=AR(ne?.manifest.agents||[]);Q("whos-who").hidden=!t.length,Q("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${ul(e.title)}<small>${Me(e.names.join(", "))}</small></dt><dd>${ul(e.does)}</dd>`).join("")}</dl>`:""}function da(){return ne?.manifest.live?"Published":"Recorded"}function md(){return rg(ne?.manifest,Ee,st)}function Zh(t,e){const n=Os(t.agentId,"");if(t.kind==="regime"){Ki(`${t.title}${n?` · ${n}`:""} — ${t.detail}`);return}const i=Q("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${Me(t.title)}</strong><p>${Me([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(Xh),Xh=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function gd(){if(ne){if(Ee>Lr){const t=Gm(ne.events,Lr,Ee,ne.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?Zh(e.at(-1),e.length-1):t.length&&Zh(t.at(-1),0)}Lr=Ee}}function xn(){return cg(at?.agents||[],Ee,Lg)}function Ki(t){Q("toast").textContent=t,Q("toast").hidden=!1,clearTimeout(Wh),Wh=setTimeout(()=>Q("toast").hidden=!0,4e3)}function Dn(){document.exitPointerLock?.(),Sn.clear()}function bn(){return document.querySelector("dialog[open]")!==null||Ji!==null}function kg(t,e,n){const i=Array.from(t.querySelectorAll(n)),r=new Set(e);for(const s of i)r.has(s)||s.remove();if(i.length!==e.length||i.some((s,a)=>s!==e[a]))for(const s of e)t.appendChild(s)}function RC(t,e){const n=t.children[1],i=n.querySelector(".row-meter");if(za(e).staff){i?.remove();return}const r=e.boredom==null?null:Ni(e.boredom);let s=i;if(!s){const h=document.createElement("template");h.innerHTML=Ug(e),s=h.content.firstElementChild,n.appendChild(s)}const a=(h,g)=>{s.getAttribute(h)!==g&&s.setAttribute(h,g)};a("aria-label",`${e.name} boredom`),a("aria-valuemin","0"),a("aria-valuemax","100"),r==null?s.removeAttribute("aria-valuenow"):a("aria-valuenow",String(Math.round(r)));const o=s.querySelector("i");o.style.width!==`${r??0}%`&&(o.style.width=`${r??0}%`);const l=r==null?"transparent":Ls(r);o.style.background!==l&&(o.style.background=l);const c=s.querySelector("b"),u=r==null?"not measured":`bored ${Math.round(r)}%`;c.textContent!==u&&(c.textContent=u);const d=kr(e.boredomSpectrum?.regime);let f=s.querySelector(".regime-chip");if(!d.label){f?.remove();return}f||(f=document.createElement("em"),f.className="regime-chip",s.appendChild(f)),f.dataset.tone!==d.tone&&(f.dataset.tone=d.tone),f.title!==d.description&&(f.title=d.description),f.textContent!==d.label&&(f.textContent=d.label)}function CC(t){const e=document.createElement("button");return e.type="button",e.className="agent-row",e.dataset.agent=t.id,e.innerHTML=`${Ng(t)}<span><strong></strong><small></small>${Ug(t)}</span><i></i>`,e}function PC(t,e){t.dataset.agent=e.id,t.disabled=!!e.standby,e.standby?t.dataset.standby="true":delete t.dataset.standby;const n=za(e),i=t.querySelector(".agent-avatar");i.dataset.family!==n.familyKey&&(i.dataset.family=n.familyKey),i.textContent!==n.initial&&(i.textContent=n.initial);const r=n.color||"";i.style.getPropertyValue("--agent-color")!==r&&(r?i.style.setProperty("--agent-color",r):i.style.removeProperty("--agent-color"));const s=t.querySelector("strong");s.textContent!==e.name&&(s.textContent=e.name);const a=t.querySelector("small"),o=Dg(e);a.innerHTML!==o&&(a.innerHTML=o),RC(t,e)}function IC(){const t=Q("agent-list"),e=TR(at?.agents||[],xn());if(!e.length){const r=Array.from(t.querySelectorAll(".agent-row[data-agent]"));for(const s of r)s.remove();t.querySelector(".empty")||(t.innerHTML='<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>');return}t.querySelector(".empty")?.remove();const n=Array.from(t.querySelectorAll(".agent-row[data-agent]")),i=ag(e,n,r=>r.id,r=>r.dataset.agent||"",CC,PC);kg(t,i,".agent-row[data-agent]")}function Rs(t){document.body.classList.toggle("bar-collapsed",t),Q("collapse-bar").setAttribute("aria-expanded",String(!t)),Q("collapse-bar").textContent=t?"▴":"▾",Q("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel"),Q("tick-label").textContent=t?ne?.manifest.continuous?"Continuous session":`Round ${at?.round??1}`:`Tick ${Math.floor(Ee)} / ${ne?.manifest.totalTicks||0}`}function Ut(){const t=bn(),e=t||An;document.body.classList.toggle("dock-auto-hidden",t),document.body.classList.toggle("context-panel-open",t),document.body.classList.toggle("dock-context-open",e),e&&!wo&&(Vh=document.body.classList.contains("bar-collapsed"),wo=!0),e?Rs(!0):wo&&(wo=!1,Rs(Vh)),Q("collapse-bar").disabled=e,Rl()}document.querySelectorAll("dialog").forEach(t=>t.addEventListener("close",Ut));function mi(){Ji&&(Q(Ji).hidden=!0),Ji=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false")),Q("open-about").setAttribute("aria-expanded","false"),Ut()}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=Ji!==e;Dn(),mi(),n&&(st=!1,sn(),Ji=e,Q(e).hidden=!1,t.setAttribute("aria-expanded","true"),e==="orchestration-drawer"&&DC(),Ut())};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=mi;function Ba(t){if(Yt=t,Dt="",Ai=!1,An=!1,Zi="",pi="",Ut(),Dn(),Ie.setOverview?.(!t),Q("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){st=!1,Ie.camera.position.set(0,1.69,9.5);const e=new Hn().setFromQuaternion(Ie.camera.quaternion,"YXZ");yn=e.y,ri=e.x}else{const e=Ie.camera.quaternion.clone();ui.reset(),Ie.camera.quaternion.copy(e),ui.syncFromCamera()}sn(),Fg()}function sn(){if(ne){const r=WA(ne.manifest);Q("overview-eyebrow").textContent=r.eyebrow,Q("run-callout").textContent=r.callout,Q("replay-kicker").textContent=st?"Replaying recorded run":"Recorded run",Q("connection").hidden=Ss,Q("header-actions").hidden=!1,Q("open-results").textContent="Results",LC();const s=at?.boredom==null?null:Math.round(Ni(at.boredom)),a=Q("boredom-gauge");a.setAttribute("aria-valuenow",String(s??0)),a.setAttribute("aria-label",s==null?"Swarm boredom not yet measured":`Swarm boredom ${s}%`),a.querySelector("span").style.width=`${s??0}%`,a.dataset.tone=s==null?"unknown":s>=65?"high":s>=35?"medium":"low"}Q("open-results").hidden=!ne||!Ss;const t=IR(ne?.manifest,Ee,st,ne?.events||[]);Q("go-live").hidden=t.hidden,Q("go-live").textContent=t.label,Q("go-live").classList.toggle("at-edge",t.atEdge),Q("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),Q("play").textContent=st?"Ⅱ Pause":"▶ Play",Q("play").setAttribute("aria-label",st?"Pause":"Play"),Q("camera-mode").textContent=Yt?"Lab view ↗":"Walk inside ↗",Q("camera-mode").disabled=!ne||st,Q("timeline").value=String(Ee),Q("tick-label").textContent=document.body.classList.contains("bar-collapsed")?ne?.manifest.continuous?"Continuous session":`Round ${at?.round??1}`:`Tick ${Math.floor(Ee)} / ${ne?.manifest.totalTicks||0}`,Q("timeline").setAttribute("aria-valuetext",`Round ${at?.round??1} of ${at?.config.rounds??ne?.manifest.time?.rounds??0}`),Q("replay-mode").value=tr;const e=ne&&Fa(ne.events,Ee),n=Q("activity-caption"),i=e?.refs?.experiment_id;n.textContent=st?"Replaying recorded run":e?Da(wR({...e,message:Tl(e,Ua())||e.message},Os(e.agentId,""))):"Recorded run",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function LC(){if(!ne)return;const t=ne.manifest.time?.rounds||at?.config.rounds||0,e=String(at?.regime||"").toUpperCase(),n=/BOREDOM_SNAP/.test(e)?"Bored — trying new directions":/PARADIGM_BREAKOUT/.test(e)?"Breakout":"Refining";Q("run-meta").innerHTML=`<span class="status-chip">${st?"Replaying recorded run":"Recorded run"}</span><span>${ne.manifest.continuous?"Continuous session":`Round ${at?.round??1}${t?` of ${t}`:""}`}</span><span>${n}</span>`}function Kn(t){ne&&(Ee=Math.max(0,Math.min(ne.manifest.totalTicks,t)),at=Fa(ne.frames,Ee)?.snapshot||null,sn(),_d(),La.open&&bd(),Ht.open&&Sd(),Cr.open&&Wg(),Pr.open&&Eu(),!Yn&&!Su&&As(ne,Ee)&&(Su=!0,Eu(),Pr.open||(Pr.showModal(),Ut())))}function _d(){Q("agent-count").textContent=`${xn().length} AGENTS`,IC(),Q("run-label").textContent=at?ne?.manifest.continuous?"Continuous session":`Round ${at.round}${at.config.rounds?` of ${at.config.rounds}`:""}`:"Waiting for the recorded run",Fg()}function NC(t){const e=document.createElement("button");return e.type="button",e.dataset.agent=t.agent.id,e.dataset.kind=t.kind,t.kind==="staff"?e.className="status-tile status-role":(e.className="status-tile",e.innerHTML=`<strong class="status-tile-name"></strong>${TC(t.agent)}<span class="tile-metric"></span>`),Og(e,t),e}function Og(t,e){const n=e.agent;if(t.dataset.agent=n.id,t.dataset.kind!==e.kind&&(t.dataset.kind=e.kind),e.kind==="staff"){t.className!=="status-tile status-role"&&(t.className="status-tile status-role");const v=e.help||n.name,p=`Focus ${n.name}: ${e.label}`;t.title!==v&&(t.title=v),t.getAttribute("aria-label")!==p&&t.setAttribute("aria-label",p),t.textContent!==e.label&&(t.textContent=e.label);return}t.className!=="status-tile"&&(t.className="status-tile");const i=`Focus ${n.name}: ${e.metricText}`;t.getAttribute("aria-label")!==i&&t.setAttribute("aria-label",i);const r=t.querySelector(".status-tile-name");r.textContent!==n.name&&(r.textContent=n.name);const s=t.querySelector(".strip-meter"),a=n.boredom==null?null:Ni(n.boredom),o=`${n.name} boredom`,l=a==null?null:String(Math.round(a));s.getAttribute("aria-label")!==o&&s.setAttribute("aria-label",o),s.getAttribute("aria-valuenow")!==(l??null)&&(l==null?s.removeAttribute("aria-valuenow"):s.setAttribute("aria-valuenow",l));const c=s.querySelector("i"),u=`${a??0}%`,d=a==null?"transparent":Ls(a);c.style.width!==u&&(c.style.width=u),c.style.background!==d&&(c.style.background=d);const f=t.querySelector(".tile-metric");f.textContent!==e.metricText&&(f.textContent=e.metricText),e.metricTitle?f.title!==e.metricTitle&&(f.title=e.metricTitle):f.hasAttribute("title")&&f.removeAttribute("title");const h={active:"Active turn",waiting:"Waiting",done:"Done this round"};let g=t.querySelector(".turn-badge");if(!e.turn){g?.remove();return}g||(g=document.createElement("small"),g.className="turn-badge",t.appendChild(g)),g.dataset.turn!==e.turn&&(g.dataset.turn=e.turn),g.textContent!==h[e.turn]&&(g.textContent=h[e.turn])}function Fg(){const t=Q("status-strip");if(!ne||!at||Yt||document.body.classList.contains("prestart")){t.hidden=!0;return}const e=xn().filter(p=>p.type!=="baseline"),n=at.results,i=at.metric,r=Ia(ne.manifest,ne),s=e.filter(p=>p.type!=="conductor"&&p.type!=="critic").length,a=n.filter(p=>Tn(p.status,p.kind)!=="baseline"&&typeof p.value=="number"&&Number.isFinite(p.value)),o=i.name==="replicated_findings"?"maximize":i.direction,l=a.length?o==="maximize"?Math.max(...a.map(p=>p.value)):Math.min(...a.map(p=>p.value)):at.value,c=n.find(p=>Tn(p.status,p.kind)==="baseline"&&typeof p.value=="number")?.value??null,u={active:"Active turn",waiting:"Waiting",done:"Done this round",idle:"Idle"},d=MC(ne,Ee),f=e.map(p=>{if(p.type==="conductor"||p.type==="critic")return{agent:p,kind:"staff",label:KR(p.type,ne.events,Ee),help:JR(p.type,ne.events,Ee)};const m=eC(n,p.id,p.name,i,l,c),_=r?jR(n,p.id,p.name):null,M=d[p.id];return{agent:p,kind:"scientist",metricText:_?YR(_):QR(m.best),metricTitle:_?qR:void 0,turn:M&&M!=="idle"?u[M]:void 0}}),h=Array.from(t.querySelectorAll(".status-tile[data-agent]")),g=ag(f,h,p=>p.agent.id,p=>p.dataset.agent||"",NC,Og);kg(t,g,".status-tile[data-agent]");let v=t.querySelector(".status-scroll-hint");if(s){v||(v=document.createElement("span"),v.className="status-scroll-hint",t.appendChild(v));const p=`${s} scientist${s===1?"":"s"} ›`;v.textContent!==p&&(v.textContent=p),t.lastElementChild!==v&&t.appendChild(v)}else v?.remove();t.hidden=!e.length,Rl()}function DC(){const t=Q("orchestration-content");if(!ne){t.innerHTML="<p>No run loaded.</p>";return}const e=SC(ne,Ee),n=860,i=40,r=30,s=r+e.lanes.length*i+12,a=158,o=n-a-24,l=o/Math.max(1,e.rounds.length),c=(m,_)=>a+yC(e.roundSpans,m,_)*l,u={idea:"#e4c986",critic:"#91b4d4",veto:"#e77872",scout:"#82c5ae",memory:"#b39bdb",boredom:"#dd9b59",evaluation:"#a8b6b7",keep:"#77bb69",gate:"#e77872"},d=e.lanes.map((m,_)=>{const M=r+_*i,b=xC(m.marks).map(T=>{const R=Math.max(0,e.rounds.indexOf(T.round)),x=a+R*l+4,S=a+(R+1)*l-4,O=T.visible.map(C=>c(C.tick,C.round));for(let C=1;C<O.length;C++)O[C]=Math.max(O[C],O[C-1]+8.5);if(O.length){const C=O.at(-1)-S;if(C>0)for(let V=0;V<O.length;V++)O[V]-=C;const G=x-O[0];if(G>0)for(let V=0;V<O.length;V++)O[V]+=G}const N=T.visible.map((C,G)=>`<g class="orch-mark" role="button" tabindex="0" data-orch-tick="${C.tick}" data-orch-agent="${Me(m.id)}" aria-label="${Me(C.label)} by ${Me(m.name)} at tick ${C.tick}"><title>${Me(C.label)}${C.why?`: ${Me(C.why)}`:""} · tick ${C.tick}</title><circle cx="${O[G]}" cy="${M}" r="${C.kind==="veto"?5:4}" fill="${u[C.kind]}" class="orch-dot ${C.kind}"/></g>`).join(""),A=T.hidden[0],$=A?Math.max(x+10,Math.min(S-10,c(A.tick,T.round))):0,B=A?`<g class="orch-overflow" role="button" tabindex="0" data-orch-tick="${A.tick}" data-orch-agent="${Me(m.id)}" aria-label="${T.hidden.length} more events in round ${T.round}; jump to ${Me(A.label)} at tick ${A.tick}"><title>${T.hidden.length} more events in round ${T.round}</title><rect x="${$-10}" y="${M+14}" width="20" height="14" rx="7"/><text x="${$}" y="${M+24}" text-anchor="middle">+${T.hidden.length}</text></g>`:"";return`${N}${B}`}).join("");return`<text x="8" y="${M+4}" class="orch-name">${Me(m.name)}</text><line x1="${a}" y1="${M}" x2="${n-12}" y2="${M}" class="orch-lane"/>${b}`}).join(""),f=e.roundCloses.filter(m=>m.tick>0).map(m=>`<line x1="${c(m.tick,m.round)}" y1="${r-20}" x2="${c(m.tick,m.round)}" y2="${s}" class="orch-close"><title>Round ${m.round} closed</title></line>`).join(""),h=e.rounds.map((m,_)=>`<text x="${a+(_+.5)*l}" y="13" class="orch-round">${ne?.manifest.continuous?"Session":`Round ${m}`}</text>`).join(""),g=`<line x1="${c(Ee)}" y1="${r-20}" x2="${c(Ee)}" y2="${s}" class="orch-playhead"/>`,v={breakout:"Breakout conditions assign three refining slots and one exploring slot.",boredom:"A boredom shift assigns one refining slot and three exploring slots; the novelty screen rejects close repeats.",keep:"Kept means retained as a current best; baseline is the unmodified reference."},p=[["idea","Idea"],["scout","Search"],["memory","Memory"],["boredom","Boredom shift"],["critic","Review"],["veto","Veto"],["keep","Kept"]].map(([m,_])=>`<span${v[m]?` title="${Me(v[m])}"`:""}><i style="--mark:${u[m]}"></i>${_}</span>`).join("")+`<span class="orchestration-legend-note"><span title="${Me(v.breakout)}">Breakout</span>: 3 refine + 1 explore; <span title="${Me(v.boredom)}">Boredom shift</span>: 1 refine + 3 explore; close repeats are screened out.</span>`;t.innerHTML=e.lanes.length?`<div class="orchestration-scroll"><svg class="orchestration-svg" viewBox="0 0 ${n} ${s}" role="img" aria-label="Orchestration lanes through tick ${Math.floor(Ee)}">${h}${f}${d}${g}</svg></div><div class="orchestration-legend">${p}</div><p class="orchestration-hint">Select a mark to jump to that event and focus its scientist.</p>`:"<p>No orchestration events by this moment.</p>"}function Eu(){if(!ne){Q("results-content").innerHTML="<p>No results available.</p>";return}const t=As(ne,Ee)?vC(ne,Ee,Me)+hC(ne.igjudge,Me):"";if(Ts(ne.manifest,ne)){const u=yu(ne),d=Ym(ne,Ee),f=d.some(h=>h.score>=.5&&!h.rejected&&h.award&&!/committee/i.test(h.award));if(Ia(ne.manifest,ne)||!f){Q("results-title").textContent="What the swarm found",Q("results-content").innerHTML=t+Ih(Tr,ne,Me,u);return}}const e=Tr.results,n=ad(ne.manifest,ne),i=`<div class="results-provenance" data-tone="${n.tone}"><strong>${Me(n.label)}</strong>${n.chips.map(u=>`<span>${Me(u)}</span>`).join("")}</div>`;if(Ts(ne.manifest,ne)){const u=As(ne,Ee)||Ee>=ne.manifest.totalTicks||ne.events.some(_=>["run.finished","run.stopped"].includes(_.type)&&_.tick<=Ee),d=yu(ne,Ee),f=uC(ne.entities?.studies,ne.events,Ee,u),h=d.awards.length?`<p class="podium-award-count">${Me(e.awardCount.replace("{N}",String(d.awards.length)))}</p>`:Ia(ne.manifest,ne)?`<p class="podium-empty">${Me(e.noAwards)}${Vm(ne.manifest,ne)?Me(e.creditErrorSuffix):""}</p>`:`<p class="podium-empty">${Me(pc.committeePending)}</p>`,g=e.countLine.replace("{N}",String(d.registered)).replace("{M}",String(d.confirmed)).replace("{K}",String(d.underCurrentRules)),v=f.entries.map(_=>`<li>${_.rank?`<b>#${_.rank}</b> `:""}${Me(_.headline||_.studyId)}${_.unscored?" · Unscored":` · score ${Me(_.score)}`}${_.rho!=null?` · ρ ${_.rho.toFixed(3)}`:""}${_.p!=null?` · p ${cl(_.p)}`:""}</li>`).join("");Q("results-title").textContent="What the swarm found";const p=f.status==="awaiting"&&v?`<details class="unscored-studies"><summary>${f.confirmed} confirmed studies, unscored</summary><ul class="podium-list">${v}</ul></details>`:v?`<ul class="podium-list">${v}</ul>`:"",m=dC(ne,Me);Q("results-content").innerHTML=`${t}${Ih(Tr,ne,Me,d)}${i}<h2>In-run committee results</h2>${h}<p class="results-count">${Me(g)}</p>${m}${p}<details class="judging-details"><summary>${Me(pc.title)}</summary><ol>${pc.steps.map(_=>`<li>${Me(_)}</li>`).join("")}</ol></details>`;return}const r=iC(ne,Ee);if(!r){Q("results-content").innerHTML="<p>No results available.</p>";return}const s=u=>u==null?"—":Rr(u),a=u=>u?`${u.low.toFixed(2)}–${u.high.toFixed(2)}`:"",o=u=>u.fraction||s(u.score??u.loss),l=r.heldOut?`<section class="held-out"><h3>Held-out test</h3><p>Baseline ${o(r.heldOut.baseline)} → best ${o(r.heldOut.best)}</p>${r.heldOut.best.wilson?`<p>95% Wilson CI: ${a(r.heldOut.best.wilson)} (baseline ${a(r.heldOut.baseline.wilson)})</p>`:""}${r.heldOut.proxyNote?`<p>${Me(r.heldOut.proxyNote)}</p>`:""}${r.heldOut.referenceNote?`<p>${Me(r.heldOut.referenceNote)}</p>`:""}</section>`:'<p class="no-held-out">no held-out split for this task</p>',c=r.delta==null?"":` · ${nC(r.delta,s)}`;Q("results-title").textContent=`RUN RESULTS · ${r.status.toUpperCase()}`,Q("results-content").innerHTML=`${i}<h2>${Me(od(ne.manifest))}</h2><p class="result-metric">${Me(r.metric)} · ${r.direction==="maximize"?"higher is better":"lower is better"}</p><p class="result-baseline">Baseline ${s(r.baseline)} → best dev result ${s(r.best)}${c}</p>${r.winner?.commit?`<section class="result-winner"><h3>Winning change</h3><p><code>${Me(r.winner.commit)}</code> · ${Me(r.winner.agent)}</p><p class="result-winner-description">${Me(r.winner.description)}</p></section>`:"<p>Baseline is the best result so far.</p>"}${l}<p class="result-totals">Kept ${r.totals.kept} · discarded ${r.totals.discarded} · crashed ${r.totals.crashed}</p>${r.proxyNote&&!r.heldOut?.proxyNote?`<p class="proxy-note">${Me(r.proxyNote)}</p>`:""}${r.referenceNote&&!r.heldOut?.referenceNote?`<p class="reference-note">${Me(r.referenceNote)}</p>`:""}`}function Rl(){const t=document.querySelector(".replay-bar"),e=Q("status-strip");if(!t||!e)return;const n=t.getBoundingClientRect();if(innerHeight<=500&&innerWidth>innerHeight){const i=document.querySelector(".sidebar"),r=document.querySelector("header"),s=Math.max(8,(i?.getBoundingClientRect().right??0)+8);e.style.left=`${s}px`,e.style.width=`${Math.max(0,innerWidth-s-8)}px`,e.style.top=`${Math.max(68,(r?.getBoundingClientRect().bottom??58)+8)}px`}else{const i=e.getBoundingClientRect().height||56;e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.top=`${Math.max(0,n.top-i-8)}px`}e.style.bottom="auto",e.style.transform="none"}const qh=document.querySelector(".replay-bar");qh&&new ResizeObserver(Rl).observe(qh);window.addEventListener("resize",Rl);function UC(){const t=Q("proximity");if(!Dt){t.hidden=!0;return}const e=xn().find(i=>i.id===Dt);if(!e){t.hidden=!0;return}const n=`${Dt}|${Math.floor(Ee)}|${An}`;if(n!==pi){const i=XR({agent:e,recording:ne,tick:Ee,metric:at?.metric,best:at?.value??null,agentName:Os});if(wu(t,jh(ZR(i,An,Me))),An){const r=dd(ne,e.id,e.activity||e.state,Ee,Ua()),s=t.querySelector("[data-bubble-now]");s&&wu(s,jh(dg(r,{...Ua(),esc:Me},at?.metric)))}pi=n}t.hidden=!1,OC()}function jh(t){const e=document.createElement("template");return e.innerHTML=t,e.content}function wu(t,e){const n=[...t.childNodes],i=[...e.childNodes];for(i.forEach((r,s)=>{const a=n[s];if(!a){t.appendChild(r.cloneNode(!0));return}if(a.nodeType===Node.TEXT_NODE&&r.nodeType===Node.TEXT_NODE){a.nodeValue!==r.nodeValue&&(a.nodeValue=r.nodeValue);return}if(a instanceof Element&&r instanceof Element&&a.tagName===r.tagName){for(const o of[...a.attributes])r.hasAttribute(o.name)||a.removeAttribute(o.name);for(const o of[...r.attributes])a.getAttribute(o.name)!==o.value&&a.setAttribute(o.name,o.value);wu(a,kC(r));return}t.replaceChild(r.cloneNode(!0),a)});t.childNodes.length>i.length;)t.lastChild&&t.removeChild(t.lastChild)}function kC(t){const e=document.createDocumentFragment();return e.append(...[...t.childNodes].map(n=>n.cloneNode(!0))),e}function OC(){const t=Q("proximity");if(t.hidden)return;const e=Ie.agentPositions?.().find(p=>p.id===Dt);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new k(0,2.35,0));if(Ie.camera.updateMatrixWorld(),n.clone().applyMatrix4(Ie.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(Ie.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12,l=Et.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o)),c=Math.max(o,innerHeight-a.height-o),u=[document.querySelector("header"),Q("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar")].filter(p=>!!p&&!p.hidden&&getComputedStyle(p).display!=="none").map(p=>p.getBoundingClientRect()).filter(p=>p.width>0&&p.height>0),d=[s-a.height-22,s+22,...u.flatMap(p=>[p.bottom+o,p.top-a.height-o]),o,c].map(p=>Et.clamp(p,o,c)),f=(p,m)=>l<m.right&&l+a.width>m.left&&p<m.bottom&&p+a.height>m.top,h=p=>u.reduce((m,_)=>m+Math.max(0,Math.min(p+a.height,_.bottom)-Math.max(p,_.top))*Math.max(0,Math.min(l+a.width,_.right)-Math.max(l,_.left)),0),v=d.find(p=>!u.some(m=>f(p,m)))??d.sort((p,m)=>h(p)-h(m))[0];t.style.visibility="visible",t.style.left=`${l}px`,t.style.top=`${v}px`}function zg(t,e=!1){Dt=t,Ai=!0,An=!1,Zi="",pi="",Ut(),e||xd("scientist")}function FC(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function zC(){try{return localStorage.getItem("lab.coach.dismissed")==="1"}catch{return!1}}function BC(){const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(dl),Ir?.(),Ir=null;try{localStorage.setItem("lab.coach.dismissed","1")}catch{}$n="done",Q("coach-mark").hidden=!0};t.forEach(n=>window.addEventListener(n,e,!0)),Ir=()=>t.forEach(n=>window.removeEventListener(n,e,!0))}function vd(){if(bn()||zC()){Q("coach-mark").hidden=!0;return}const t=aM(FC());if(t==="scientist"&&innerHeight<=500&&!document.body.classList.contains("bar-collapsed")){$n="done",Q("coach-mark").hidden=!0;return}if(!t){$n="done",Q("coach-mark").hidden=!0;return}$n=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?matchMedia("(pointer:fine)").matches?"Click a scientist":"Tap a scientist":"Drag to scrub";Q("coach-mark").dataset.coach=t,Q("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,Q("coach-mark").hidden=!1,BC(),clearTimeout(dl),dl=setTimeout(()=>{Ir?.(),Ir=null,$n="done",Q("coach-mark").hidden=!0},8e3)}function xd(t){$n===t&&(clearTimeout(dl),Ir?.(),Ir=null,$n="",Q("coach-mark").hidden=!0,vd())}function $C(){const t=Q("coach-mark");if(t.hidden||$n!=="scientist")return;const e=xn().find(_=>!gl(_)),n=e&&Ie.agentPositions?.().find(_=>_.id===e.id);if(!n)return;const i=n.position.clone().add(new k(0,1.6,0));i.project(Ie.camera);const r=(i.x+1)*innerWidth/2;(1-i.y)*innerHeight/2;const s=t.getBoundingClientRect(),a=innerHeight<=500?72:80,o=_=>!!_&&!_.hidden&&getComputedStyle(_).display!=="none"&&getComputedStyle(_).visibility!=="hidden",l=[document.querySelector("header"),Q("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar"),Q("proximity")].filter(o).map(_=>_.getBoundingClientRect()).filter(_=>_.width>0&&_.height>0);Ie.camera.updateMatrixWorld();const c=new Set(xn().filter(_=>!gl(_)).map(_=>_.id));for(const _ of Ie.agentPositions?.()||[]){if(!c.has(_.id))continue;const M=[-.9,.9].flatMap(b=>[.15,3.1].flatMap(T=>[-.55,.55].map(R=>new k(_.position.x+b,_.position.y+T,_.position.z+R).project(Ie.camera)))).filter(b=>b.z>=-1&&b.z<=1);if(M.length){const b=Math.min(...M.map(S=>(S.x+1)*innerWidth/2)),T=Math.max(...M.map(S=>(S.x+1)*innerWidth/2)),R=Math.min(...M.map(S=>(1-S.y)*innerHeight/2)),x=Math.max(...M.map(S=>(1-S.y)*innerHeight/2));T>0&&b<innerWidth&&x>0&&R<innerHeight&&l.push(new DOMRect(b,R,T-b,x-R))}}const u=Et.clamp(r-s.width/2,8,Math.max(8,innerWidth-s.width-8)),d=document.querySelector("header")?.getBoundingClientRect().bottom??a,f=Et.clamp(d+8,a,Math.max(a,innerHeight-s.height-12)),h=[u,8,innerWidth-s.width-8,...l.flatMap(_=>[_.left-s.width-8,_.right+8])].map(_=>Et.clamp(_,8,Math.max(8,innerWidth-s.width-8))),g=[f,a,innerHeight-s.height-12,...l.flatMap(_=>[_.top-s.height-8,_.bottom+8])].map(_=>Et.clamp(_,a,Math.max(a,innerHeight-s.height-12))),v=(_,M)=>l.reduce((b,T)=>b+Math.max(0,Math.min(_+s.width,T.right)-Math.max(_,T.left))*Math.max(0,Math.min(M+s.height,T.bottom)-Math.max(M,T.top)),0),p=h.flatMap(_=>g.map(M=>({left:_,top:M,overlap:v(_,M),distance:Math.hypot(_-u,M-f)}))).sort((_,M)=>_.overlap-M.overlap||_.distance-M.distance),m=p[0];t.style.right="auto",t.style.transform="none",t.style.left=`${m.left}px`,t.style.top=`${m.top}px`,t.style.bottom="auto"}function Bg(){if(!Mu){fl=!0,hl();return}if(!Na&&(Na=!0,document.body.classList.remove("prestart"),document.body.dataset.labOpen="true",Q("header-actions").hidden=!1,!(Yn&&ne&&(GC(),Yn)))){if(ne){if(ne.manifest.live)Kn(ne.manifest.totalTicks);else{tr="highlights";const t=ud(ne);hd=og(ne,t),gs=0,Kn(t)}st=!0,Lr=Ee}{Ie.camera.fov=innerWidth<760?62:48,Ie.camera.updateProjectionMatrix();const t=qg(),e=xn().filter(n=>!gl(n)).flatMap(n=>{const i=t.get(n.id);return i?[new k(i.x,0,i.z)]:[]});e.length?jC(e):(Ie.camera.position.set(0,2.7,1.2),ui.focus(new k(0,1.3,-2))),Rs(!0)}sn(),_d(),Lt.domElement.focus(),xn().length&&vd(),HC()}}function hl(){!fl||!Ag||Mu||(Mu=!0,Q("loading").classList.add("loaded"),setTimeout(()=>{Q("loading").hidden=!0,Bg()},380))}function HC(){if(os)return;const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(os),os=null,t.forEach(i=>document.removeEventListener(i,e,!0))};t.forEach(i=>document.addEventListener(i,e,!0));const n=()=>{if(os=null,!Na||bn()){t.forEach(o=>document.removeEventListener(o,e,!0));return}const i=new Set((Ie.agentPositions?.()||[]).map(o=>o.id)),r=xn().find(o=>!gl(o)&&i.has(o.id));if(!r){os=setTimeout(n,300);return}t.forEach(o=>document.removeEventListener(o,e,!0)),Ed(r.id,!0);let s=!0;const a=()=>{s&&(s=!1,t.forEach(o=>document.removeEventListener(o,a,!0)),Dt===r.id&&Md())};t.forEach(o=>document.addEventListener(o,a,!0))};os=setTimeout(n,3e3)}function GC(){if(Er=JS({world:Ie,renderer:Lt,recording:ne,seek:Kn,updateWorld:Jg}),!Er){Ki("Cinema mode needs a run with a boredom snap followed by a discovery."),document.body.classList.remove("cinema"),Yn=!1;return}st=!1,yd(),Q("loading").hidden=!0,Ie.camera.fov=46,Ie.camera.updateProjectionMatrix(),Pg=performance.now(),window.__cinema={ready:!0,duration:Er.duration,render:t=>Er.render(t)}}function yd(){xa&&(xa=!1,Ie.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",yd,{capture:!0});window.addEventListener("keydown",yd,{capture:!0});Q("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&xd($n)};function VC(){if(!ne||!at)return"<p>No measurements yet.</p>";const t=ne.manifest.swarm==="ignobel"&&at.metric.name==="replicated_findings";return NR(LR(at.results,ne.frames,Ee,!t),at.metric,Ee,Me)}function $g(t,e=Zm(at?.metric)){const n=tR(t.value,t.reward,e,Rr),i=[t.effectSize==null?"":`Effect ${Me(t.effectSize)}`,t.pValue==null?"":`p = ${Me(t.pValue)}`,n?Me(n):""].filter(Boolean);return i.length?i.join("<br>"):Me(t.value??"—")}function bd(){const t=at;if(!t){Q("console-content").innerHTML="<h2>No evidence yet.</h2>";return}const e=ne?wl(ne.manifest,ne):void 0,n=Zm(t.metric),i='<p class="evidence-key"><span title="Kept candidates are retained when they improve the current best.">Keep</span> = retained as a current best; <span title="Baseline is the unmodified reference used for comparison.">baseline</span> = the unmodified reference.</p>',r=M=>M.map(b=>{const T=b.kind==="baseline"?"Baseline is the unmodified reference for comparison.":String(b.status).toLowerCase()==="keep"?"Kept because this result improved the current best.":"";return`<tr${b.id?` class="inspectable" data-experiment="${Me(b.id)}" tabindex="0"`:""}><td>${b.round}</td><td>${Me(b.agent)}</td><td><span${T?` title="${Me(T)}"`:""}>${Me(b.status)}</span><br>${Me(b.description)}</td><td>${$g(b,n)}</td></tr>`}).join(""),s=ks(ne,Ee),a=s.length?`<h3>Ig Nobel studies</h3>${pg(s,_s())}`:"",o=t.results.filter(M=>Tn(M.status,M.kind)==="crashed"),l=t.results.filter(M=>Tn(M.status,M.kind)==="kept"),c=t.results.filter(M=>Tn(M.status,M.kind)!=="crashed"&&Tn(M.status,M.kind)!=="kept"),u=`<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th title="Run metric value">${Me(n)}</th></tr></thead><tbody>`,d="</tbody></table></div>",f=t.findings.filter(M=>!/swarm_B|per_agent_B|boredom/i.test(M.message)).slice().reverse(),h=f.filter(M=>M.message.trim().length>180||/^\s*[\[{]/.test(M.message)),g=f.filter(M=>!h.includes(M)),v=M=>M.map(b=>`<div class="finding"><b>${Me(xn().find(T=>T.id===b.agent)?.name||b.role)}</b><span>${Me(b.message)}</span></div>`).join("")||"<p>No findings yet.</p>",p=Q("console-content"),m=p.querySelector(".evidence-failures")?.open??!1,_=p.querySelector(".evidence-raw")?.open??!1;Q("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(Ee)}. Kept findings and candidates appear first; failures remain available below.</p>${a}${i}${e?`<p class="proxy-note"><b>About this benchmark:</b> ${Me(e)}</p>`:""}${VC()}${u}${r([...l,...c])}${d}${o.length?`<details class="evidence-failures"${m?" open":""}><summary>Failures (${o.length})</summary>${u}${r(o)}${d}</details>`:""}<h3>${da()} findings</h3>${v(g)}${h.length?`<details class="evidence-raw"${_?" open":""}><summary>Full recorded findings (${h.length})</summary>${v(h)}</details>`:""}${WC(!1)}`}function WC(t=!0){const e=t?ks(ne,Ee):[],n=sd(ne,Ee),i=Hm(Vg(),Ee);return`${e.length?`<h3>Ig Nobel studies</h3>${pg(e,_s())}`:""}${i.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${mg(i,_s())}</div>`:""}${n.length||XC("sources")?`<h3>Research sources</h3>${BR(n,_s())}`:""}`}let _n="now";function Ua(){return{name:t=>Os(t),metric:at?.metric,best:at?.value??null}}function Sd(){const t=xn().find(b=>b.id===pd);if(!t){Ht.close();return}const e=ne?qA(ne.events,Ee).filter(b=>b.agentId===t.id||b.type==="message.sent"&&(b.payload?.to_agent_id===t.id||b.payload?.to_agent_ids?.includes(t.id))):[],n=_n==="idea"?/hypothesis|propos|question|idea/:_n==="result"?/experiment|observ|discover|reward|evaluat/:_n==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=tg,r=e.filter(b=>n.test(b.type)&&i(b.message)).slice(-1),s=_n==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=_n==="result"&&t.lastResult?`<blockquote>${Me(t.lastResult.description)}<br>${Me(t.lastResult.status)} · ${$g(t.lastResult)}<cite>${da()} result · available by tick ${Math.floor(Ee)}</cite></blockquote>`:"",o=_n==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",l=t.boredom==null?null:Ni(t.boredom),c=ne?iM(ne.events,t.id,Ee):null,u=kr(c?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),d=nM(c?.components||t.boredomDetail?.components),f=Hm(Vg(),Ee,t.id),h=_n==="result"||_n==="doing"?t.lastResult?.id&&Pa(ne,t.lastResult.id,Ee)?t.lastResult.id:t.focus?.experiment_id&&Pa(ne,t.focus.experiment_id,Ee)?t.focus.experiment_id:null:null,g=h?`<button class="inspect-link" data-experiment="${Me(h)}">Inspect experiment →</button>`:"",v=!!ne?.manifest.live,p=md(),m=ne?sg(ne.events,Ee):0,_=v?p?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(Ee)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(Ee)}${m?` · ${m} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(Ee)}.`,M=b=>b.type==="message.sent"&&b.agentId!==t.id?`Message from ${Me(Os(b.agentId,"")||"a colleague")}`:`${v?"Published":"Recorded"} ${Me(eg(b.type).toLowerCase())}`;Q("conversation-tag").textContent=v?p?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",Q("conversation-content").innerHTML=`<div class="conversation-person">${Ng(t)}<div><h2>${Me(t.name)}</h2><p>${Dg(t)}</p></div></div><div class="conversation-questions">${[["now","Now"],["doing","What are you doing?"],["idea","Tell me about your idea"],["result","What did you find?"],["notes","Your research notes"],...f.length?[["talk","Conversation"]]:[]].map(([b,T])=>`<button data-topic="${b}" aria-pressed="${_n===b}">${T}</button>`).join("")}</div><div class="speech-bubble${_n==="talk"||_n==="now"?" history":""}">${_n==="now"?dg(dd(ne,t.id,t.activity||t.state,Ee,Ua()),{...Ua(),esc:Me},at?.metric):_n==="talk"?mg(f,_s(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${Me(o)}<cite>${da()} proposal · available by tick ${Math.floor(Ee)}</cite></blockquote>`:r.length?r.map(b=>`<blockquote>${Me(b.message)}<cite>${M(b)} · tick ${b.tick}</cite></blockquote>`).join(""):s?`<blockquote>${Me(s)}<cite>${da()} excerpt · through tick ${Math.floor(Ee)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${da().toUpperCase()} BOREDOM</span><strong style="color:${l==null?"inherit":Ls(l)}">${l==null?"Not measured":Math.round(l)+"%"}</strong></div>${l==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i style="left:${l}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||d.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${Me(u.label)}</span>`:""}${d.length?`<div class="boredom-components" aria-label="Boredom components">${d.map(b=>`<div><span>${Me(b.label)}</span><i style="--v:${b.value}%"></i><b>${b.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${_}</p>`}function Hg(t){if(Dt="",Ai=!1,An=!1,pi="",Ut(),md()||(st=!1),pd=t,_n="now",Dn(),mi(),sn(),Sd(),xn().some(e=>e.id===t)){const e=Ie.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new k(0,2.1,0));if(Ie.camera.lookAt(n),Yt||ui.focus(n),Yt){const i=new Hn().setFromQuaternion(Ie.camera.quaternion,"YXZ");yn=i.y,ri=i.x}}Ht.open||(Ht.show(),Ut()),Gg(),Ht.querySelector("button")?.focus()}}function Gg(){if(!Ht.open)return;const t=Ie.agentPositions?.().find(c=>c.id===pd);if(!t){Ht.style.visibility="hidden";return}const e=t.position.clone().add(new k(0,2.35,0));if(Ie.camera.updateMatrixWorld(),e.clone().applyMatrix4(Ie.camera.matrixWorldInverse).z>=0){Ht.style.visibility="hidden";return}Ht.style.visibility="visible",e.project(Ie.camera);const i=(e.x+1)/2*innerWidth,r=(1-e.y)/2*innerHeight,s=Ht.getBoundingClientRect(),a=12,o=Et.clamp(i-s.width/2,a,Math.max(a,innerWidth-s.width-a)),l=Et.clamp(r-s.height-24,80,Math.max(80,innerHeight-s.height-190));Ht.style.left=`${o}px`,Ht.style.top=`${l}px`,Ht.style.setProperty("--speech-tail",`${Et.clamp(i-o,20,s.width-20)}px`)}Q("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(_n=e,Sd())};Q("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&Hg(e)};function Vg(){return ne?.events||[]}function XC(t){const e=ne?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function Os(t,e){return t?(at?.agents||ne?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||ne?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function _s(){const t=ne?.manifest.id||"";return{esc:Me,name:Os,judging:ne?.manifest.judging,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return Zp(n)},experimentLabel:e=>{const n=Pa(ne,e,Ee);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let pl=null;function Wg(){if(!pl)return;const t=Pa(ne,pl,Ee);Q("inspector-content").innerHTML=t?zR(t,_s(),t.studyId?ks(ne,Ee).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function ZC(t){st=!1,sn(),Dn(),mi(),Ht.close();const e=sd(ne,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>Ee&&Kn(e),bd(),La.open||(La.showModal(),Ut());const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function Xg(t){st=!1,sn(),Dn(),pl=t,Wg(),Cr.open||(Cr.showModal(),Ut()),Cr.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-orch-tick]");if(n){t.preventDefault(),st=!1;const s=n.dataset.orchAgent,a=Number(n.dataset.orchTick);Kn(a);const o=Ie.agentPositions?.().find(l=>l.id===s);if(o){const l=o.position.clone().add(new k(0,2.1,0));Ie.camera.lookAt(l),ui.focus(l)}zg(s);return}const i=e.closest?.("[data-source]")?.dataset.source;if(i){ZC(i);return}const r=e.closest?.("[data-experiment]")?.dataset.experiment;r&&(t.preventDefault(),Xg(r))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),Xg(e.dataset.experiment))});function ml(){Dt&&(Dn(),An=!0,pi="",Ut())}function Md(){Dt&&(Zi=Dt),Dt="",Ai=!1,An=!1,pi="",Q("proximity").hidden=!0,Ut()}function gl(t){return[t.type,t.role].filter(Boolean).some(e=>["conductor","critic","host","baseline","environment","world"].includes(String(e).toLowerCase()))}function qC(t,e=!1){const n=t.clone().add(new k(0,2.1,0)),i=e?innerWidth<760?7.2:6.8:innerWidth<760?4.4:5.2,r=e?3.1:innerWidth<760?2.1:2.5,s=t.z>4?-1:1;Ie.camera.position.set(t.x,t.y+r,t.z+s*i),Ie.camera.position.x=Et.clamp(Ie.camera.position.x,-10,10),Ie.camera.position.y=Et.clamp(Ie.camera.position.y,1.6,4.3),Ie.camera.position.z=Et.clamp(Ie.camera.position.z,-12,11),Ie.camera.lookAt(n),ui.syncFromCamera()}function jC(t){const e=Math.min(...t.map(m=>m.x)),n=Math.max(...t.map(m=>m.x)),i=Math.min(...t.map(m=>m.z)),r=Math.max(...t.map(m=>m.z)),s=(e+n)/2,a=(i+r)/2,o=n-e,l=r-i,c=Et.degToRad(Ie.camera.fov),u=Math.tan(c/2)*Ie.camera.aspect,d=o/Math.max(.1,2*u),f=2.6+l*.26,h=f/Math.max(.1,2*Math.tan(c/2)),g=innerWidth<760?8.4:7,v=Math.max(g,l/2+d+1.1,h+1),p=new k(s,1.35,a);Ie.camera.position.set(s,p.y+v*.26,a+v),Ie.camera.lookAt(p),ui.syncFromCamera()}function Ed(t,e=!1){const n=Ie.agentPositions?.().find(r=>r.id===t);if(!n)return;const i=n.position.clone().add(new k(0,2.1,0));if(!Yt)qC(n.position,e);else if(Yt){Ie.camera.lookAt(i);const r=new Hn().setFromQuaternion(Ie.camera.quaternion,"YXZ");yn=r.y,ri=r.x}zg(t,e)}Q("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){Md();return}if(n?.hasAttribute("data-bubble-more")){Dt&&Hg(Dt);return}if(n?.hasAttribute("data-bubble-expand")){ml();return}An||ml()});Q("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");e&&Ed(e.dataset.agent)});Cr.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);Q("close-inspector").onclick=()=>Cr.close();Cr.addEventListener("close",()=>{pl=null});Q("close-results").onclick=()=>Pr.close();Q("open-results").onclick=()=>{st=!1,sn(),Dn(),Eu(),Pr.showModal(),Ut()};Q("open-about").onclick=()=>{const t=Ji!=="about-drawer",e=Q("about-drawer"),n=Q("open-about");Dn(),mi(),t&&(st=!1,sn(),e.innerHTML=uR(Tr,oR(ne),Me,ne?.manifest||null,ne),e.hidden=!1,Ji="about-drawer",e.querySelector("[data-close-drawer]").onclick=mi,n.setAttribute("aria-expanded","true"),Ut())};Q("results-content").addEventListener("click",t=>{t.target.closest("[data-open-evidence]")&&(Pr.close(),Q("open-console").click())});Q("close-conversation").onclick=()=>{Ht.close(),Lt.domElement.focus()};Q("close-console").onclick=()=>La.close();Q("close-guide").onclick=()=>Mg.close();const Zg=Q("qr-dialog");Q("qr-image").src=xR;Q("close-qr").onclick=()=>Zg.close();Q("open-qr").onclick=()=>{st=!1,sn(),Dn(),mi(),Zg.showModal(),Ut()};Q("open-console").onclick=()=>{st=!1,sn(),Dn(),mi(),bd(),La.showModal(),Ut()};Q("open-guide").onclick=()=>{st=!1,sn(),Dn(),mi(),Mg.showModal(),Ut()};Q("play").onclick=()=>{if(ne){if(!st){if(Ht.close(),!ne.manifest.live&&Ee>=ne.manifest.totalTicks){const t=tr==="highlights"?ud(ne):0;gs=0,Kn(t)}Yt&&Ba(!1)}st=!st,sn()}};Q("camera-mode").onclick=()=>Ba(!Yt);Q("collapse-bar").onclick=()=>{wg=!0,Rs(!document.body.classList.contains("bar-collapsed"))};Rs(Xm());Ut();window.addEventListener("resize",()=>{wg||Rs(Xm()),Ut()});Q("timeline").oninput=()=>{st=!1,tr="full",Q("replay-mode").value="full",Kn(Number(Q("timeline").value)),Lr=Ee,xd("scrub")};Q("replay-mode").onchange=()=>{tr=Q("replay-mode").value;const t=ne&&Ss&&tr==="highlights"?ud(ne):0;Ee=t,gs=0,hd=ne?og(ne,t):[],Kn(t),st=!!ne,sn()};Q("go-live").onclick=()=>{ne?.manifest.live&&(Ht.close(),Yt&&Ba(!1),st=!0,Kn(ne.manifest.totalTicks),gd())};Q("pace").onchange=()=>{Vo=Number(Q("pace").value)};function YC(t){Lg=lg(t),Wo=UR(t,Ie.bounds,Ie.colliders)}function qg(){const t=Fa(Wo,Ee);if(!t)return new Map;if(Ee<=0)return t.positions;const e=Wo[Wo.indexOf(t)+1];if(!e)return t.positions;const n=(Ee-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function jg(t,e=!1){const n=++Hh;e||(st=!1,Su=!1,Pr.close(),Q("connection").textContent="LOADING RUN");try{const i=await QA(ll,t,Eg.find(l=>l.id===t)?.contentVersion||"2",ne);if(n!==Hh)return;const r=Ee,s=md();ne=i,Ig(),wC(i),i.frames.sort((l,c)=>l.tick-c.tick),i.events.sort((l,c)=>l.tick-c.tick),YC(i),AC(),Q("timeline").max=String(i.manifest.totalTicks),Q("timeline").disabled=!1,Q("play").disabled=!1,Q("replay-title").textContent=Da(od(i.manifest)),Q("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),Q("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),Q("timeline-markers").innerHTML=i.events.filter(l=>/experiment.finished|discovery|study.completed|award/.test(l.type)).map(l=>`<i${/discovery|award/.test(l.type)?' class="best"':""} style="left:${l.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),Q("run-picker").value=t,e||Ba(!1);const a=e?PR(r,i.manifest,s):CR(i.manifest);e||(st=Na,Lr=a),Kn(a),e&&s?gd():e||(Lr=Ee),sn(),Ss&&!e?(fl=!0,hl()):e||Bg();const o=new URL(location.href);o.searchParams.set("recording",t),o.searchParams.delete("run"),history.replaceState(null,"",o)}catch(i){Q("connection").textContent="ARCHIVE UNAVAILABLE",Ki(i.message),e||(fl=!0,hl())}}async function Yg(){try{const t=VA(await ll("/recordings"));if(Eg=t,Q("run-picker").innerHTML=sR(t,Me)||"<option>No artificial scientist swarm recordings available</option>",ne)Q("run-picker").value=ne.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await jg(GA(t,e))}else t.length||(Q("connection").textContent="NO SWARM RECORDINGS",Q("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){Q("connection").textContent="ARCHIVE UNAVAILABLE",Q("replay-title").textContent="Archive unavailable",Ki(t.message)}}Q("refresh-runs").onclick=()=>Yg();async function Kg(){}Q("launch-openai").onclick=async()=>{if(Q("launch-openai").dataset.running==="true"){try{await ll("/openai-runs/stop",{method:"POST"}),Ki("Stopping: current work will finish; no new work will start.")}catch(t){Ki(t.message)}return}if(confirm("Start a live Sol + Luna Ig Nobel run? It calls the OpenAI API and may spend up to the server cost cap.")){try{const t=await ll("/openai-runs",{method:"POST",body:JSON.stringify({minutes:30})});Ki(`Started ${t.name}; it appears in RUNS as workers start.`)}catch(t){Ki(t.message)}Kg()}};Kg();Q("run-picker").onchange=()=>jg(Q("run-picker").value);Q("refresh-runs").hidden=!0,document.body.classList.add("static-site");function Jg(t){const e=qg(),n=xn(),i=OR(ne?.events||[],Ee,n,Da,100);Ie.update(t,{progress:at?.progress||0,boredom:0,running:st||Yn,replay:!0,finale:As(ne,Ee),reducedMotion:Rg,agents:n.map(r=>({...r,boredom:r.boredom==null?null:Ni(r.boredom),regime:r.boredomSpectrum?.regime,state:e.get(r.id)?.atLab?"working":r.state,stationId:e.get(r.id)?.atTable?"culture":bu({...r,activity:"experimenting"}),discussionBrief:!Yn&&e.get(r.id)?.atTable?i.get(r.id)?.brief:void 0,discussionPeers:i.get(r.id)?.peers,ideaBrief:Yn?void 0:NS(Da(r.lastIdea||r.lastQuestion||r.lastObservation||"")),position:As(ne,Ee)?void 0:e.get(r.id)}))})}function Yh(t,e){const i=Ie.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||Ie.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),Sn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>Sn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(An){An=!1,pi="",Ut();return}if(Ai||Dt){Md(),Dn();return}Ht.close(),mi(),Dn()}if(!(bn()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Dt){t.preventDefault(),ml();return}t.code==="Enter"&&Dt&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),ml()),["KeyW","KeyA","KeyS","KeyD",...Yt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault(),Sn.add(t.code)}});window.addEventListener("keyup",t=>Sn.delete(t.code));window.addEventListener("blur",()=>{Sn.clear(),ua=!1,Gi=null,st=!1,sn()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);if(n=s,Yn){Er?EC||Er.render((s-Pg)/1e3%Er.duration):Lt.render(Ie.scene,Ie.camera);return}if(st&&ne){if(tr==="highlights"){gs+=a*1e3*4/Vo;const u=75e3*4/Vo;Ee=DR(hd,gs,u),gs>=u&&(Ee=ne.manifest.totalTicks,st=!1)}else Ee=ZA(Ee,a,Vo,ne.manifest.totalTicks,ne.manifest.tickDurationMs);tr==="full"&&!XA(ne.manifest,Ee)&&(st=!1),Math.floor(Ee)!==i?(Kn(Ee),i=Math.floor(Ee),gd()):sn()}const o=Ie.camera;if(!Yt&&!bn()&&!Ht.open&&ui.update(a,Sn),Yt&&!bn()){({yaw:yn,pitch:ri}=Vp(yn,ri,a,Sn));const u=Number(Sn.has("KeyW"))-Number(Sn.has("KeyS")),d=Number(Sn.has("KeyD"))-Number(Sn.has("KeyA"));if(u||d){const f=(Sn.has("ShiftLeft")||Sn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(u,d),h=(-Math.sin(yn)*u+Math.cos(yn)*d)*f,g=(-Math.cos(yn)*u-Math.sin(yn)*d)*f;Yh(o.position.x+h,o.position.z)||(o.position.x+=h),Yh(o.position.x,o.position.z+g)||(o.position.z+=g)}o.rotation.set(ri,yn,0,"YXZ")}if(Jg(Ee*(ne?.manifest.tickDurationMs||700)/1e3),Na&&!$n&&xn().length&&!bn()&&vd(),Q("coach-mark").hidden=bn()||!$n||$n==="done",$C(),xa){const u=(s-Gh)/(Rg?300:Ss?1600:2200);Ie.grow?.(Math.min(1,u)),u>=1&&(xa=!1,document.body.classList.remove("world-growing"))}const l=Mi;if(Yt&&!bn()){o.getWorldDirection(r),r.y=0,r.normalize();const u=(Ie.agentPositions?.()||[]).map(d=>{const f=d.position.clone().sub(o.position);f.y=0;const h=f.length();return{id:d.id,distance:h,facing:h?f.normalize().dot(r):1}});Mi=VR(u,Mi)}else Mi="";Zi&&Mi!==Zi&&(Zi="");const c=Ai?Dt:Mi===Zi?"":Mi;c!==Dt&&(Dt=c,An=!1,pi=""),l!==Mi&&!Ai&&Mi&&(Zi=""),UC(),Lt.render(Ie.scene,o),Gg()};Ie=oM(),Gh=performance.now(),xa=!0,document.body.classList.add("world-growing"),Ie.grow?.(0),Lt=new IS({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:Yn}),Lt.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),Lt.setSize(innerWidth,innerHeight),Lt.toneMapping=Au,Lt.toneMappingExposure=Ie.exposure??1,Lt.outputColorSpace=Gt,Q("world").appendChild(Lt.domElement),Lt.domElement.tabIndex=0,Lt.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),Ie.camera.rotation.order="YXZ",ui=new LS(Ie.camera),Ba(!1),Lt.domElement.onclick=()=>{if(Yt&&!bn()&&!Ht.open&&!Ai)try{Lt.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},Lt.domElement.onpointerdown=s=>{bn()||(ua=!0,To={x:s.clientX,y:s.clientY},Gi={x:s.clientX,y:s.clientY,canvas:s.target===Lt.domElement,pointerType:s.pointerType},Yt||Lt.domElement.setPointerCapture(s.pointerId))},Lt.domElement.onpointermove=s=>{if(!ua||document.pointerLockElement||bn())return;const a=s.clientX-To.x,o=s.clientY-To.y;Yt?{yaw:yn,pitch:ri}=iu(yn,ri,a,o):ui.dragBy(a,o),To={x:s.clientX,y:s.clientY}},Lt.domElement.onpointercancel=()=>{ua=!1,Gi=null},window.addEventListener("pointerup",s=>{if(Gi?.canvas&&Math.hypot(s.clientX-Gi.x,s.clientY-Gi.y)<10&&!bn()){const a=Ie.camera;a.updateMatrixWorld();let o=null;for(const l of Ie.agentPositions?.()||[]){if(!xn().some(v=>v.id===l.id))continue;const c=l.position.clone().add(new k(0,2.35,0));if(c.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;c.project(a);const d=(c.x+1)*innerWidth/2,f=(1-c.y)*innerHeight/2,h=Math.hypot(s.clientX-d,s.clientY-f),g=Gi.pointerType==="touch"?84:64;h<g&&(!o||h<o.distance)&&(o={id:l.id,distance:h})}o?Ed(o.id):(Dt="",Ai=!1,An=!1,pi="",Ut())}Gi=null,ua=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&Yt&&!bn()&&({yaw:yn,pitch:ri}=iu(yn,ri,s.movementX,s.movementY))});const e=()=>{Ie.camera.aspect=innerWidth/innerHeight,Ie.camera.updateProjectionMatrix(),Lt.setSize(innerWidth,innerHeight)};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new k;_d(),t(),Ss&&setTimeout(()=>{Ag=!0,hl()},1500),Yg()}catch(t){console.error(t),Q("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
