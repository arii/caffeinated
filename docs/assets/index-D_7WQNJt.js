(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const p0=[["now","Now","What is happening now?"],["doing","Current task","What are you doing?"],["idea","Core idea","Tell me about your idea"],["result","Findings","What did you find?"],["notes","Notes","Your research notes"],["talk","Dialogue","Recorded conversations with other scientists"]];function m0(t){return t?"Tap a scientist":"Click a scientist"}function g0(t,e,n,i,r,s){const a=t<e&&t<=750,o=12,l=Math.max(n+o,a?i.bottom+14:0),c=a?8:i.right+14;if(a)return{left:c,width:t-16,top:Math.max(l,e-o-s)};const u=t-o-r-32,f=r-32-c,d=u>=f,h=Math.min(380,Math.max(220,d?u:f),t-o-c);return{left:d?t-o-h:c,width:h,top:l}}const Du="187",_0=0,Bd=1,v0=2,Po=1,x0=2,ua=3,Ur=0,xn=1,Ln=2,fs=0,ga=1,$d=2,Hd=3,Gd=4,y0=5,us=100,b0=101,S0=102,M0=103,E0=104,w0=200,T0=201,A0=202,R0=203,lp=204,cp=205,C0=206,P0=207,I0=208,L0=209,N0=210,D0=211,U0=212,k0=213,O0=214,Mc=0,Ec=1,wc=2,Ea=3,Tc=4,Ac=5,Rc=6,Cc=7,up=0,F0=1,z0=2,Ri=0,dp=1,fp=2,hp=3,Uu=4,pp=5,mp=6,gp=7,_p=300,ys=301,wa=302,Ul=303,kl=304,jo=1e3,wi=1001,Pc=1002,sn=1003,B0=1004,qa=1005,En=1006,Ol=1007,Ki=1008,Nn=1009,vp=1010,xp=1011,Ta=1012,ku=1013,di=1014,Yn=1015,fi=1016,Ou=1017,Fu=1018,bs=1020,yp=35902,bp=35899,Sp=1021,Mp=1022,oi=1023,rr=1026,Ji=1027,zu=1028,Bu=1029,kr=1030,$u=1031,Hu=1033,Io=33776,Lo=33777,No=33778,Do=33779,Ic=35840,Lc=35841,Nc=35842,Dc=35843,Uc=36196,kc=37492,Oc=37496,Fc=37488,zc=37489,Yo=37490,Bc=37491,$c=37808,Hc=37809,Gc=37810,Vc=37811,Wc=37812,Xc=37813,Zc=37814,qc=37815,jc=37816,Yc=37817,Kc=37818,Jc=37819,Qc=37820,eu=37821,tu=36492,nu=36494,iu=36495,ru=36283,su=36284,Ko=36285,au=36286,$0=3200,ou=0,H0=1,ji="",Wt="srgb",Jo="srgb-linear",Qo="linear",pt="srgb",Fl=7680,G0=519,V0=512,W0=513,X0=514,Ep=515,Z0=516,q0=517,wp=518,Tp=519,Ap=35044,Vd="300 es",Kn=2e3,Aa=2001;function j0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function el(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Y0(){const t=el("canvas");return t.style.display="block",t}const Wd={};function tl(...t){const e="THREE."+t.shift();console.log(e,...t)}function Rp(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ve(...t){t=Rp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=Rp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function hs(...t){const e=t.join(" ");e in Wd||(Wd[e]=!0,Ve(...t))}function K0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const J0={[Mc]:Mc,[wc]:Rc,[Tc]:Tc,[Ea]:Ac,[Ec]:Ec,[Rc]:wc,[Cc]:Cc,[Ac]:Ea};class Br{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Xd=1234567;const _a=Math.PI/180,Ra=180/Math.PI;function or(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(cn[t&255]+cn[t>>8&255]+cn[t>>16&255]+cn[t>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[n&63|128]+cn[n>>8&255]+"-"+cn[n>>16&255]+cn[n>>24&255]+cn[i&255]+cn[i>>8&255]+cn[i>>16&255]+cn[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Gu(t,e){return(t%e+e)%e}function Q0(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function e_(t,e,n){return t!==e?(n-t)/(e-t):0}function va(t,e,n){return(1-n)*t+n*e}function t_(t,e,n,i){return va(t,e,1-Math.exp(-n*i))}function n_(t,e=1){return e-Math.abs(Gu(t,e*2)-e)}function i_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function r_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function s_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function a_(t,e){return t+Math.random()*(e-t)}function o_(t){return t*(.5-Math.random())}function l_(t){t!==void 0&&(Xd=t);let e=Xd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c_(t){return t*_a}function u_(t){return t*Ra}function d_(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function f_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Cp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function h_(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*h,o*c);break;case"YXY":t.set(l*h,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*h,o*u,o*c);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Sl(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Vu(t,e){if(e.constructor===Float32Array)return t;const n=Sl(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Wu(t,e){if(e.constructor===Float32Array)return t;const n=Sl(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const wt={DEG2RAD:_a,RAD2DEG:Ra,generateUUID:or,clamp:Qe,euclideanModulo:Gu,mapLinear:Q0,inverseLerp:e_,lerp:va,damp:t_,pingpong:n_,smoothstep:i_,smootherstep:r_,randInt:s_,randFloat:a_,randFloatSpread:o_,seededRandom:l_,degToRad:c_,radToDeg:u_,isPowerOfTwo:d_,ceilPowerOfTwo:f_,floorPowerOfTwo:Cp,setQuaternionFromProperEuler:h_,normalize:Wu,denormalize:Vu},Dd=class Dd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dd.prototype.isVector2=!0;let Ze=Dd;class Ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(f!==_||l!==d||c!==h||u!==g){let p=l*d+c*h+u*g+f*_;p<0&&(d=-d,h=-h,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),M=Math.sin(v);m=Math.sin(m*v)/M,o=Math.sin(o*v)/M,l=l*m+d*o,c=c*m+h*o,u=u*m+g*o,f=f*m+_*o}else{l=l*m+d*o,c=c*m+h*o,u=u*m+g*o,f=f*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-o*h,e[n+2]=c*g+u*h+o*d-l*f,e[n+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Ud=class Ud{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Zd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Zd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return zl.copy(this).projectOnVector(e),this.sub(zl)}reflect(e){return this.sub(zl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Ud.prototype.isVector3=!0;let k=Ud;const zl=new k,Zd=new Ns,kd=class kd{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],p=r[3],m=r[6],v=r[1],M=r[4],b=r[7],T=r[2],A=r[5],x=r[8];return s[0]=a*_+o*v+l*T,s[3]=a*p+o*M+l*A,s[6]=a*m+o*b+l*x,s[1]=c*_+u*v+f*T,s[4]=c*p+u*M+f*A,s[7]=c*m+u*b+f*x,s[2]=d*_+h*v+g*T,s[5]=d*p+h*M+g*A,s[8]=d*m+h*b+g*x,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bl.makeScale(e,n)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bl.makeRotation(-e)),this}translate(e,n){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};kd.prototype.isMatrix3=!0;let We=kd;const Bl=new We,qd=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jd=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function p_(){const t={enabled:!0,workingColorSpace:Jo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ji?Qo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Jo]:{primaries:e,whitePoint:i,transfer:Qo,toXYZ:qd,fromXYZ:jd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:qd,fromXYZ:jd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),t}const st=p_();function Ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class m_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=el("canvas")),Wr.width=e.width,Wr.height=e.height;const r=Wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=el("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ci(n[i]/255)*255):n[i]=Ci(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let g_=0;class Xu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:g_++}),this.uuid=or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push($l(r[a].image)):s.push($l(r[a]))}else s=$l(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $l(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?m_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let __=0;const Hl=new k;class pn extends Br{constructor(e=pn.DEFAULT_IMAGE,n=pn.DEFAULT_MAPPING,i=wi,r=wi,s=En,a=Ki,o=oi,l=Nn,c=pn.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=or(),this.name="",this.source=new Xu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Hl).x}get height(){return this.source.getSize(Hl).y}get depth(){return this.source.getSize(Hl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_p)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case jo:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case jo:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=_p;pn.DEFAULT_ANISOTROPY=1;const Od=class Od{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const M=(c+1)/2,b=(h+1)/2,T=(m+1)/2,A=(u+d)/4,x=(f+_)/4,S=(g+p)/4;return M>b&&M>T?M<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(M),r=A/i,s=x/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=S/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=x/s,r=S/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Od.prototype.isVector4=!0;let Pt=Od;class v_ extends Br{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new pn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Xu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends v_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Pp extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class x_ extends pn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bl=class bl{constructor(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,p)}set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*o,n[4]=g*o-h,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*o,n[4]=-a*f,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=a*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=o*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(y_,e,b_)}lookAt(e,n,i){const r=this.elements;return Cn.subVectors(e,n),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Oi.crossVectors(i,Cn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Oi.crossVectors(i,Cn)),Oi.normalize(),ja.crossVectors(Cn,Oi),r[0]=Oi.x,r[4]=ja.x,r[8]=Cn.x,r[1]=Oi.y,r[5]=ja.y,r[9]=Cn.y,r[2]=Oi.z,r[6]=ja.z,r[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],v=i[3],M=i[7],b=i[11],T=i[15],A=r[0],x=r[4],S=r[8],O=r[12],N=r[1],R=r[5],$=r[9],B=r[13],C=r[2],G=r[6],V=r[10],H=r[14],de=r[3],K=r[7],le=r[11],fe=r[15];return s[0]=a*A+o*N+l*C+c*de,s[4]=a*x+o*R+l*G+c*K,s[8]=a*S+o*$+l*V+c*le,s[12]=a*O+o*B+l*H+c*fe,s[1]=u*A+f*N+d*C+h*de,s[5]=u*x+f*R+d*G+h*K,s[9]=u*S+f*$+d*V+h*le,s[13]=u*O+f*B+d*H+h*fe,s[2]=g*A+_*N+p*C+m*de,s[6]=g*x+_*R+p*G+m*K,s[10]=g*S+_*$+p*V+m*le,s[14]=g*O+_*B+p*H+m*fe,s[3]=v*A+M*N+b*C+T*de,s[7]=v*x+M*R+b*G+T*K,s[11]=v*S+M*$+b*V+T*le,s[15]=v*O+M*B+b*H+T*fe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*h-c*d,M=o*h-c*f,b=o*d-l*f,T=a*h-c*u,A=a*d-l*u,x=a*f-o*u;return n*(_*v-p*M+m*b)-i*(g*v-p*T+m*A)+r*(g*M-_*T+m*x)-s*(g*b-_*A+p*x)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=n*o-i*a,M=n*l-r*a,b=n*c-s*a,T=i*l-r*o,A=i*c-s*o,x=r*c-s*l,S=u*_-f*g,O=u*p-d*g,N=u*m-h*g,R=f*p-d*_,$=f*m-h*_,B=d*m-h*p,C=v*B-M*$+b*R+T*N-A*O+x*S;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/C;return e[0]=(o*B-l*$+c*R)*G,e[1]=(r*$-i*B-s*R)*G,e[2]=(_*x-p*A+m*T)*G,e[3]=(d*A-f*x-h*T)*G,e[4]=(l*N-a*B-c*O)*G,e[5]=(n*B-r*N+s*O)*G,e[6]=(p*b-g*x-m*M)*G,e[7]=(u*x-d*b+h*M)*G,e[8]=(a*$-o*N+c*S)*G,e[9]=(i*N-n*$-s*S)*G,e[10]=(g*A-_*b+m*v)*G,e[11]=(f*b-u*A-h*v)*G,e[12]=(o*O-a*R-l*S)*G,e[13]=(n*R-i*O+r*S)*G,e[14]=(_*M-g*T-p*v)*G,e[15]=(u*T-f*M+d*v)*G,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,p=a*f,m=o*f,v=l*c,M=l*u,b=l*f,T=i.x,A=i.y,x=i.z;return r[0]=(1-(_+m))*T,r[1]=(h+b)*T,r[2]=(g-M)*T,r[3]=0,r[4]=(h-b)*A,r[5]=(1-(d+m))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(g+M)*x,r[9]=(p-v)*x,r[10]=(1-(d+_))*x,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Xn.copy(this);const c=1/a,u=1/o,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,n.setFromRotationMatrix(Xn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Kn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Kn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Aa)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Kn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Kn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Aa)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};bl.prototype.isMatrix4=!0;let yt=bl;const Xr=new k,Xn=new yt,y_=new k(0,0,0),b_=new k(1,1,1),Oi=new k,ja=new k,Cn=new k,Yd=new yt,Kd=new Ns;class Hn{constructor(e=0,n=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Kd.setFromEuler(this),this.setFromQuaternion(Kd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Ip{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let S_=0;const Jd=new k,Zr=new Ns,vi=new yt,Ya=new k,Ws=new k,M_=new k,E_=new Ns,Qd=new k(1,0,0),ef=new k(0,1,0),tf=new k(0,0,1),nf={type:"added"},w_={type:"removed"},qr={type:"childadded",child:null},Gl={type:"childremoved",child:null};class Qt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:S_++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new k,n=new Hn,i=new Ns,r=new k(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new We}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ip,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Qd,e)}rotateY(e){return this.rotateOnAxis(ef,e)}rotateZ(e){return this.rotateOnAxis(tf,e)}translateOnAxis(e,n){return Jd.copy(e).applyQuaternion(this.quaternion),this.position.add(Jd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qd,e)}translateY(e){return this.translateOnAxis(ef,e)}translateZ(e){return this.translateOnAxis(tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ya.copy(e):Ya.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(Ws,Ya,this.up):vi.lookAt(Ya,Ws,this.up),this.quaternion.setFromRotationMatrix(vi),r&&(vi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(vi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nf),qr.child=e,this.dispatchEvent(qr),qr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(w_),Gl.child=e,this.dispatchEvent(Gl),Gl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nf),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,e,M_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,E_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qt.DEFAULT_UP=new k(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class jn extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new jn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Lp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},Ka={h:0,s:0,l:0};function Wl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ye{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=Gu(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Wl(a,s,e+1/3),this.g=Wl(a,s,e),this.b=Wl(a,s,e-1/3)}return st.colorSpaceToWorking(this,r),this}setStyle(e,n=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wt){const i=Lp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return st.workingToColorSpace(un.copy(this),e),Math.round(Qe(un.r*255,0,255))*65536+Math.round(Qe(un.g*255,0,255))*256+Math.round(Qe(un.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.workingToColorSpace(un.copy(this),n);const i=un.r,r=un.g,s=un.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=st.workingColorSpace){return st.workingToColorSpace(un.copy(this),n),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=Wt){st.workingToColorSpace(un.copy(this),e);const n=un.r,i=un.g,r=un.b;return e!==Wt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(Ka);const i=va(Fi.h,Ka.h,n),r=va(Fi.s,Ka.s,n),s=va(Fi.l,Ka.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Ye;Ye.NAMES=Lp;class Zu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ye(e),this.near=n,this.far=i}clone(){return new Zu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class A_ extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Zn=new k,xi=new k,Xl=new k,yi=new k,jr=new k,Yr=new k,rf=new k,Zl=new k,ql=new k,jl=new k,Yl=new Pt,Kl=new Pt,Jl=new Pt;class Bn{constructor(e=new k,n=new k,i=new k){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Zn.subVectors(e,n),r.cross(Zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Zn.subVectors(r,n),xi.subVectors(i,n),Xl.subVectors(e,n);const a=Zn.dot(Zn),o=Zn.dot(xi),l=Zn.dot(Xl),c=xi.dot(xi),u=xi.dot(Xl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Yl.setScalar(0),Kl.setScalar(0),Jl.setScalar(0),Yl.fromBufferAttribute(e,n),Kl.fromBufferAttribute(e,i),Jl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yl,s.x),a.addScaledVector(Kl,s.y),a.addScaledVector(Jl,s.z),a}static isFrontFacing(e,n,i,r){return Zn.subVectors(i,n),xi.subVectors(e,n),Zn.cross(xi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),xi.subVectors(this.a,this.b),Zn.cross(xi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Yr.subVectors(s,i),Zl.subVectors(e,i);const l=jr.dot(Zl),c=Yr.dot(Zl);if(l<=0&&c<=0)return n.copy(i);ql.subVectors(e,r);const u=jr.dot(ql),f=Yr.dot(ql);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(jr,a);jl.subVectors(e,s);const h=jr.dot(jl),g=Yr.dot(jl);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Yr,o);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return rf.subVectors(s,r),o=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(rf,o);const m=1/(p+_+d);return a=_*m,o=d*m,n.copy(i).addScaledVector(jr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $r{constructor(e=new k(1/0,1/0,1/0),n=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(qn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(qn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=qn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ja.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ja.copy(i.boundingBox)),Ja.applyMatrix4(e.matrixWorld),this.union(Ja)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Xs),Qa.subVectors(this.max,Xs),Kr.subVectors(e.a,Xs),Jr.subVectors(e.b,Xs),Qr.subVectors(e.c,Xs),zi.subVectors(Jr,Kr),Bi.subVectors(Qr,Jr),_r.subVectors(Kr,Qr);let n=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-_r.z,_r.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,_r.z,0,-_r.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-_r.y,_r.x,0];return!Ql(n,Kr,Jr,Qr,Qa)||(n=[1,0,0,0,1,0,0,0,1],!Ql(n,Kr,Jr,Qr,Qa))?!1:(eo.crossVectors(zi,Bi),n=[eo.x,eo.y,eo.z],Ql(n,Kr,Jr,Qr,Qa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(bi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),bi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),bi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),bi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),bi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),bi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),bi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),bi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(bi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const bi=[new k,new k,new k,new k,new k,new k,new k,new k],qn=new k,Ja=new $r,Kr=new k,Jr=new k,Qr=new k,zi=new k,Bi=new k,_r=new k,Xs=new k,Qa=new k,eo=new k,vr=new k;function Ql(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gt=new k,to=new Ze;let R_=0;class Pi extends Br{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:R_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ap,this.updateRanges=[],this.gpuType=Yn,this.version=0,this._normalizationScale=e!==void 0?Sl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)to.fromBufferAttribute(this,n),to.applyMatrix3(e),this.setXY(n,to.x,to.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Vu(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Wu(e,this.array)}}class Np extends Pi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Dp extends Pi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ft extends Pi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const C_=new $r,Zs=new k,ec=new k;class Fa{constructor(e=new k,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):C_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(ec)),this.expandByPoint(Zs.copy(e.center).sub(ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let P_=0;const kn=new yt,tc=new Qt,es=new k,Pn=new $r,qs=new $r,Jt=new k;class Gn extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j0(e)?Dp:Np)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,n,i){return kn.makeTranslation(e,n,i),this.applyMatrix4(kn),this}scale(e,n,i){return kn.makeScale(e,n,i),this.applyMatrix4(kn),this}lookAt(e){return tc.lookAt(e),tc.updateMatrix(),this.applyMatrix4(tc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];qs.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Pn.min,qs.min),Pn.expandByPoint(Jt),Jt.addVectors(Pn.max,qs.max),Pn.expandByPoint(Jt)):(Pn.expandByPoint(qs.min),Pn.expandByPoint(qs.max))}Pn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Jt.add(es)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Pi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new k,l[O]=new k;const u=new k,f=new k,d=new k,h=new Ze,g=new Ze,_=new Ze,p=new k,m=new k;function v(O,N,R){c[O]=c[N]=c[R]=1,u.fromBufferAttribute(i,O),f.fromBufferAttribute(i,N),d.fromBufferAttribute(i,R),h.fromBufferAttribute(s,O),g.fromBufferAttribute(s,N),_.fromBufferAttribute(s,R),f.sub(u),d.sub(u),g.sub(h),_.sub(h);const $=1/(g.x*_.y-_.x*g.y);isFinite($)&&(p.copy(f).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar($),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar($),o[O].add(p),o[N].add(p),o[R].add(p),l[O].add(m),l[N].add(m),l[R].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,N=M.length;O<N;++O){const R=M[O],$=R.start,B=R.count;for(let C=$,G=$+B;C<G;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const b=new k,T=new k,A=new k,x=new k;function S(O){A.fromBufferAttribute(r,O),x.copy(A);const N=o[O];b.copy(N),b.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(x,N);const $=T.dot(l[O])<0?-1:1;a.setXYZW(O,b.x,b.y,b.z,$)}for(let O=0,N=i.count;O<N;++O)c[O]&&S(O);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,l=new k,c=new k,u=new k,f=new k;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new Pi(d,u,f)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class I_{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ap,this.updateRanges=[],this.version=0,this.uuid=or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=sf(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=sf(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function sf(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=or()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const gn=new k;class nl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Sl(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyMatrix4(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.applyNormalMatrix(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)gn.fromBufferAttribute(this,n),gn.transformDirection(e),this.setXYZ(n,gn.x,gn.y,gn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){tl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Pi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Vu(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Wu(e,this.data.array)}}const nc=new k,L_=new k,N_=new We;class Xi{constructor(e=new k(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=nc.subVectors(i,n).cross(L_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(nc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||N_.getNormalMatrix(e),r=this.coplanarPoint(nc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let D_=0;class Ds extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=or(),this.name="",this.type="Material",this.blending=ga,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=lp,this.blendDst=cp,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ea,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fl,this.stencilZFail=Fl,this.stencilZPass=Fl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Xi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ze().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ze().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Uo extends Ds{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ts;const js=new k,ns=new k,is=new k,rs=new Ze,Ys=new Ze,Up=new yt,no=new k,Ks=new k,io=new k,af=new Ze,ic=new Ze,of=new Ze;class rc extends Qt{constructor(e=new Uo){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Gn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new I_(n,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new nl(i,3,0,!1)),ts.setAttribute("uv",new nl(i,2,3,!1))}this.geometry=ts,this.material=e,this.center=new Ze(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Up.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ro(no.set(-.5,-.5,0),is,a,ns,r,s),ro(Ks.set(.5,-.5,0),is,a,ns,r,s),ro(io.set(.5,.5,0),is,a,ns,r,s),af.set(0,0),ic.set(1,0),of.set(1,1);let o=e.ray.intersectTriangle(no,Ks,io,!1,js);if(o===null&&(ro(Ks.set(-.5,.5,0),is,a,ns,r,s),ic.set(0,1),o=e.ray.intersectTriangle(no,io,Ks,!1,js),o===null))return;const l=e.ray.origin.distanceTo(js);l<e.near||l>e.far||n.push({distance:l,point:js.clone(),uv:Bn.getInterpolation(js,no,Ks,io,af,ic,of,new Ze),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function ro(t,e,n,i,r,s){rs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ys.x=s*rs.x-r*rs.y,Ys.y=r*rs.x+s*rs.y):Ys.copy(rs),t.copy(e),t.x+=Ys.x,t.y+=Ys.y,t.applyMatrix4(Up)}const Si=new k,sc=new k,so=new k,ao=new k;class U_{constructor(e=new k,n=new k(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,n),Si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){sc.copy(e).add(n).multiplyScalar(.5),so.copy(n).sub(e).normalize(),ao.copy(this.origin).sub(sc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(so),o=ao.dot(this.direction),l=-ao.dot(so),c=ao.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(sc).addScaledVector(so,d),h}intersectSphere(e,n){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);const i=Si.dot(this.direction),r=Si.dot(Si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,g=n.x-a.x,_=n.y-a.y,p=n.z-a.z,m=i.x-a.x,v=i.y-a.y,M=i.z-a.z,b=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let x,S,O,N,R,$,B,C,G,V,H,de;if(b>=T&&b>=A?(O=l,$=f,G=g,de=m,l>=0?(x=c,S=u,N=d,R=h,B=_,C=p,V=v,H=M):(x=u,S=c,N=h,R=d,B=p,C=_,V=M,H=v)):T>=A?(O=c,$=d,G=_,de=v,c>=0?(x=u,S=l,N=h,R=f,B=p,C=g,V=M,H=m):(x=l,S=u,N=f,R=h,B=g,C=p,V=m,H=M)):(O=u,$=h,G=p,de=M,u>=0?(x=l,S=c,N=f,R=d,B=g,C=_,V=m,H=v):(x=c,S=l,N=d,R=f,B=_,C=g,V=v,H=m)),O===0)return null;const K=x/O,le=S/O,fe=1/O,Ce=N-K*$,$e=R-le*$,ae=B-K*G,_e=C-le*G,Re=V-K*de,Fe=H-le*de,we=Re*_e-Fe*ae,He=Ce*Fe-$e*Re,gt=ae*$e-_e*Ce;if(r){if(we<0||He<0||gt<0)return null}else if((we<0||He<0||gt<0)&&(we>0||He>0||gt>0))return null;const ze=we+He+gt;if(ze===0)return null;const et=fe*(we*$+He*G+gt*de);return(ze>0?et<0:et>0)?null:this.at(et/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zi extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lf=new yt,xr=new U_,oo=new Fa,cf=new k,lo=new k,co=new k,uo=new k,ac=new k,fo=new k,uf=new k,ho=new k;class xt extends Qt{constructor(e=new Gn,n=new Zi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){fo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(ac.fromBufferAttribute(f,e),a?fo.addScaledVector(ac,u):fo.addScaledVector(ac.sub(n),u))}n.add(fo)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oo.copy(i.boundingSphere),oo.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(oo.containsPoint(xr.origin)===!1&&(xr.intersectSphere(oo,cf)===null||xr.origin.distanceToSquared(cf)>(e.far-e.near)**2))&&(lf.copy(s).invert(),xr.copy(e.ray).applyMatrix4(lf),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=v,T=M;b<T;b+=3){const A=o.getX(b),x=o.getX(b+1),S=o.getX(b+2);r=po(this,m,e,i,c,u,f,A,x,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),M=o.getX(p+1),b=o.getX(p+2);r=po(this,a,e,i,c,u,f,v,M,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],v=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=v,T=M;b<T;b+=3){const A=b,x=b+1,S=b+2;r=po(this,m,e,i,c,u,f,A,x,S),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=p,M=p+1,b=p+2;r=po(this,a,e,i,c,u,f,v,M,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function k_(t,e,n,i,r,s,a,o){let l;if(e.side===xn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ur,o),l===null)return null;ho.copy(o),ho.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(ho);return c<n.near||c>n.far?null:{distance:c,point:ho.clone(),object:t}}function po(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,lo),t.getVertexPosition(l,co),t.getVertexPosition(c,uo);const u=k_(t,e,n,i,lo,co,uo,uf);if(u){const f=new k;Bn.getBarycoord(uf,lo,co,uo,f),r&&(u.uv=Bn.getInterpolatedAttribute(r,o,l,c,f,new Ze)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,o,l,c,f,new Ze)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,f,new k),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new k,materialIndex:0};Bn.getNormal(lo,co,uo,d.normal),u.face=d,u.barycoord=f}return u}class kp extends pn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=sn,u=sn,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class df extends Pi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new yt,ff=new yt,mo=[],hf=new $r,O_=new yt,Js=new xt,Qs=new Fa;class F_ extends xt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new df(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,O_)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ss),hf.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(hf)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ss),Qs.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Qs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(i),e.ray.intersectsSphere(Qs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ss),ff.multiplyMatrices(i,ss),Js.matrixWorld=ff,Js.raycast(e,mo);for(let a=0,o=mo.length;a<o;a++){const l=mo[a];l.instanceId=s,l.object=this,n.push(l)}mo.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new df(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new kp(new Float32Array(r*this.count),r,this.count,zu,Yn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yr=new Fa,z_=new Ze(.5,.5),go=new k;class Ca{constructor(e=new Xi,n=new Xi,i=new Xi,r=new Xi,s=new Xi,a=new Xi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Kn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],M=s[13],b=s[14],T=s[15];if(r[0].setComponents(c-a,h-u,m-g,T-v).normalize(),r[1].setComponents(c+a,h+u,m+g,T+v).normalize(),r[2].setComponents(c+o,h+f,m+_,T+M).normalize(),r[3].setComponents(c-o,h-f,m-_,T-M).normalize(),i)r[4].setComponents(l,d,p,b).normalize(),r[5].setComponents(c-l,h-d,m-p,T-b).normalize();else if(r[4].setComponents(c-l,h-d,m-p,T-b).normalize(),n===Kn)r[5].setComponents(c+l,h+d,m+p,T+b).normalize();else if(n===Aa)r[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const n=z_.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(go.x=r.normal.x>0?e.max.x:e.min.x,go.y=r.normal.y>0?e.max.y:e.min.y,go.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(go)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const pf=new yt;class qu{constructor(){this.coordinateSystem=Kn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];pf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Ca),i[r].setFromProjectionMatrix(pf,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Ca),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new qu().copy(this)}}class Op extends pn{constructor(e=[],n=ys,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class br extends pn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends pn{constructor(e,n,i=di,r,s,a,o=sn,l=sn,c,u=rr,f=1){if(u!==rr&&u!==Ji)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Fp extends Ss{constructor(e,n=di,i=ys,r,s,a=sn,o=sn,l,c=rr){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zp extends pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Hr extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function g(_,p,m,v,M,b,T,A,x,S,O){const N=b/x,R=T/S,$=b/2,B=T/2,C=A/2,G=x+1,V=S+1;let H=0,de=0;const K=new k;for(let le=0;le<V;le++){const fe=le*R-B;for(let Ce=0;Ce<G;Ce++){const $e=Ce*N-$;K[_]=$e*v,K[p]=fe*M,K[m]=C,c.push(K.x,K.y,K.z),K[_]=0,K[p]=0,K[m]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(Ce/x),f.push(1-le/S),H+=1}}for(let le=0;le<S;le++)for(let fe=0;fe<x;fe++){const Ce=d+fe+G*le,$e=d+fe+G*(le+1),ae=d+(fe+1)+G*(le+1),_e=d+(fe+1)+G*le;l.push(Ce,$e,_e),l.push($e,ae,_e),de+=6}o.addGroup(h,de,O),h+=de,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pa extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const _=[],p=i/2;let m=0;v(),a===!1&&(e>0&&M(!0),n>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(h,2));function v(){const b=new k,T=new k;let A=0;const x=(n-e)/i;for(let S=0;S<=s;S++){const O=[],N=S/s,R=N*(n-e)+e;for(let $=0;$<=r;$++){const B=$/r,C=B*l+o,G=Math.sin(C),V=Math.cos(C);T.x=R*G,T.y=-N*i+p,T.z=R*V,f.push(T.x,T.y,T.z),b.set(G,x,V).normalize(),d.push(b.x,b.y,b.z),h.push(B,1-N),O.push(g++)}_.push(O)}for(let S=0;S<r;S++)for(let O=0;O<s;O++){const N=_[O][S],R=_[O+1][S],$=_[O+1][S+1],B=_[O][S+1];(e>0||O!==0)&&(u.push(N,R,B),A+=3),(n>0||O!==s-1)&&(u.push(R,$,B),A+=3)}c.addGroup(m,A,0),m+=A}function M(b){const T=g,A=new Ze,x=new k;let S=0;const O=b===!0?e:n,N=b===!0?1:-1;for(let $=1;$<=r;$++)f.push(0,p*N,0),d.push(0,N,0),h.push(.5,.5),g++;const R=g;for(let $=0;$<=r;$++){const C=$/r*l+o,G=Math.cos(C),V=Math.sin(C);x.x=O*V,x.y=p*N,x.z=O*G,f.push(x.x,x.y,x.z),d.push(0,N,0),A.x=G*.5+.5,A.y=V*.5*N+.5,h.push(A.x,A.y),g++}for(let $=0;$<r;$++){const B=T+$,C=R+$;b===!0?u.push(C,C+1,B):u.push(C+1,C,B),S+=3}c.addGroup(m,S,b===!0?1:2),m+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ju extends Pa{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new ju(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*d-a;for(let M=0;M<c;M++){const b=M*f-s;g.push(b,-v,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const M=v+c*m,b=v+c*(m+1),T=v+1+c*(m+1),A=v+1+c*m;h.push(M,b,A),h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yu extends Gn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,h=new k,g=new Ze;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const m=s+p/i*a;h.x=f*Math.cos(m),h.y=f*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/n+1)/2,g.y=(h.y/n+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<r;_++){const p=_*(i+1);for(let m=0;m<i;m++){const v=m+p,M=v,b=v+i+1,T=v+i+2,A=v+1;o.push(M,b,A),o.push(b,T,A)}}this.setIndex(o),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ku extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new k,d=new k,h=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const v=[],M=m/i,b=a+M*o,T=e*Math.cos(b),A=Math.sqrt(e*e-T*T);let x=0;m===0&&a===0?x=.5/n:m===i&&l===Math.PI&&(x=-.5/n);for(let S=0;S<=n;S++){const O=S/n,N=r+O*s;f.x=-A*Math.cos(N),f.y=T,f.z=A*Math.sin(N),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(O+x,1-M),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<n;v++){const M=u[m][v+1],b=u[m][v],T=u[m+1][v],A=u[m+1][v+1];(m!==0||a>0)&&h.push(M,b,A),(m!==i-1||l<Math.PI)&&h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class xa extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],f=[],d=new k,h=new k,g=new k;for(let _=0;_<=i;_++){const p=a+_/i*o;for(let m=0;m<=r;m++){const v=m/r*s;h.x=(e+n*Math.cos(p))*Math.cos(v),h.y=(e+n*Math.cos(p))*Math.sin(v),h.z=n*Math.sin(p),c.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(m/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=r;p++){const m=(r+1)*_+p-1,v=(r+1)*(_-1)+p-1,M=(r+1)*(_-1)+p,b=(r+1)*_+p;l.push(m,v,b),l.push(v,M,b)}this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xa(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(mf(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(mf(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function vn(t){const e={};for(let n=0;n<t.length;n++){const i=Ms(t[n]);for(const r in i)e[r]=i[r]}return e}function mf(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function B_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Bp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const $_={clone:Ms,merge:vn};var H_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Or extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=H_,this.fragmentShader=G_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=B_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ye().setHex(r.value);break;case"v2":this.uniforms[i].value=new Ze().fromArray(r.value);break;case"v3":this.uniforms[i].value=new k().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new We().fromArray(r.value);break;case"m4":this.uniforms[i].value=new yt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class V_ extends Or{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ko extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ou,this.normalScale=new Ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class W_ extends ko{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ze(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class X_ extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Z_ extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ju extends Qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ye(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class q_ extends Ju{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ye(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const oc=new yt,gf=new k,_f=new k;class $p{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ze(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new Ze(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;gf.setFromMatrixPosition(e.matrixWorld),n.position.copy(gf),_f.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(_f),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){oc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(oc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Aa||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(oc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const _o=new k,vo=new Ns,ti=new k;class Hp extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(_o,vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(_o,vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(_o,vo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const $i=new k,vf=new Ze,xf=new Ze;class zn extends Hp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ra*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_a*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(_a*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,vf,xf),n.subVectors(xf,vf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_a*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class j_ extends $p{constructor(){super(new zn(90,1,.5,500)),this.isPointLightShadow=!0}}class Y_ extends Ju{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new j_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Gp extends Hp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class K_ extends $p{constructor(){super(new Gp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class yf extends Ju{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new K_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const as=-90,os=1;class lu extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(as,os,e,n);r.layers=this.layers,this.add(r);const s=new zn(as,os,e,n);s.layers=this.layers,this.add(s);const a=new zn(as,os,e,n);a.layers=this.layers,this.add(a);const o=new zn(as,os,e,n);o.layers=this.layers,this.add(o);const l=new zn(as,os,e,n);l.layers=this.layers,this.add(l);const c=new zn(as,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Aa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class J_ extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function bf(t,e,n,i){const r=Q_(i);switch(n){case Sp:return t*e;case zu:return t*e/r.components*r.byteLength;case Bu:return t*e/r.components*r.byteLength;case kr:return t*e*2/r.components*r.byteLength;case $u:return t*e*2/r.components*r.byteLength;case Mp:return t*e*3/r.components*r.byteLength;case oi:return t*e*4/r.components*r.byteLength;case Hu:return t*e*4/r.components*r.byteLength;case Io:case Lo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case No:case Do:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lc:case Dc:return Math.max(t,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(t,8)*Math.max(e,8)/2;case Uc:case kc:case Fc:case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Oc:case Yo:case Bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case jc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Yc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case eu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tu:case nu:case iu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ru:case su:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ko:case au:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Q_(t){switch(t){case Nn:case vp:return{byteLength:1,components:1};case Ta:case xp:case fi:return{byteLength:2,components:1};case Ou:case Fu:return{byteLength:2,components:4};case di:case ku:case Yn:return{byteLength:4,components:1};case yp:case bp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Du}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Du);function Vp(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ev(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var tv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,nv=`#ifdef USE_ALPHAHASH
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
#endif`,iv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,rv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,sv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,av=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ov=`#ifdef USE_AOMAP
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
#endif`,lv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cv=`#ifdef USE_BATCHING
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
#endif`,uv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,fv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,pv=`#ifdef USE_IRIDESCENCE
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
#endif`,mv=`#ifdef USE_BUMPMAP
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
#endif`,gv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ev=`#define PI 3.141592653589793
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
} // validated`,wv=`vec3 transformedNormal = objectNormal;
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
#endif`,Tv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Rv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Lv=`#ifdef USE_ENVMAP
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
#endif`,Nv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Dv=`#ifdef USE_ENVMAP
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
#endif`,Uv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,Ov=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Fv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,zv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$v=`#ifdef USE_GRADIENTMAP
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
}`,Hv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Gv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Xv=`#ifdef USE_ENVMAP
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
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,qv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Yv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kv=`PhysicalMaterial material;
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
#endif`,Jv=`uniform sampler2D dfgLUT;
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
}`,Qv=`
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
#endif`,ex=`#if defined( RE_IndirectDiffuse )
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nx=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ix=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ox=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,lx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ux=`#if defined( USE_POINTS_UV )
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
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,px=`#if defined( USE_MORPHCOLORS )
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
#endif`,mx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gx=`#ifdef USE_MORPHTARGETS
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
#endif`,_x=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,xx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Mx=`#ifdef USE_NORMALMAP
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
#endif`,Ex=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Tx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ax=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Cx=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Px=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Dx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ux=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,zx=`float getShadowMask() {
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
}`,Bx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$x=`#ifdef USE_SKINNING
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
#endif`,Hx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Gx=`#ifdef USE_SKINNING
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
#endif`,Vx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Xx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,qx=`#ifdef USE_TRANSMISSION
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
#endif`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ey=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ty=`uniform sampler2D t2D;
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
}`,ny=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iy=`uniform float backgroundBlurriness;
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
}`,ry=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ay=`#include <common>
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
}`,oy=`#if DEPTH_PACKING == 3200
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
}`,ly=`#define DISTANCE
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
}`,cy=`#define DISTANCE
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
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fy=`uniform float scale;
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
}`,hy=`uniform vec3 diffuse;
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
}`,py=`#include <common>
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
}`,my=`uniform vec3 diffuse;
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
}`,gy=`#define LAMBERT
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define MATCAP
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
}`,xy=`#define MATCAP
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
}`,yy=`#define NORMAL
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
}`,by=`#define NORMAL
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
}`,Sy=`#define PHONG
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
}`,My=`#define PHONG
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
}`,Ey=`#define STANDARD
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
}`,wy=`#define STANDARD
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
}`,Ty=`#define TOON
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
}`,Ay=`#define TOON
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
}`,Ry=`uniform float size;
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
}`,Cy=`uniform vec3 diffuse;
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
}`,Py=`#include <common>
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
}`,Iy=`uniform vec3 color;
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
}`,Ly=`uniform float rotation;
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
}`,Ny=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:tv,alphahash_pars_fragment:nv,alphamap_fragment:iv,alphamap_pars_fragment:rv,alphatest_fragment:sv,alphatest_pars_fragment:av,aomap_fragment:ov,aomap_pars_fragment:lv,batching_pars_vertex:cv,batching_vertex:uv,begin_vertex:dv,beginnormal_vertex:fv,bsdfs:hv,iridescence_fragment:pv,bumpmap_pars_fragment:mv,clipping_planes_fragment:gv,clipping_planes_pars_fragment:_v,clipping_planes_pars_vertex:vv,clipping_planes_vertex:xv,color_fragment:yv,color_pars_fragment:bv,color_pars_vertex:Sv,color_vertex:Mv,common:Ev,defaultnormal_vertex:wv,displacementmap_pars_vertex:Tv,displacementmap_vertex:Av,emissivemap_fragment:Rv,emissivemap_pars_fragment:Cv,colorspace_fragment:Pv,colorspace_pars_fragment:Iv,envmap_fragment:Lv,envmap_common_pars_fragment:Nv,envmap_pars_fragment:Dv,envmap_pars_vertex:Uv,envmap_physical_pars_fragment:Xv,envmap_vertex:kv,fog_vertex:Ov,fog_pars_vertex:Fv,fog_fragment:zv,fog_pars_fragment:Bv,gradientmap_pars_fragment:$v,lightmap_pars_fragment:Hv,lights_lambert_fragment:Gv,lights_lambert_pars_fragment:Vv,lights_pars_begin:Wv,lights_toon_fragment:Zv,lights_toon_pars_fragment:qv,lights_phong_fragment:jv,lights_phong_pars_fragment:Yv,lights_physical_fragment:Kv,lights_physical_pars_fragment:Jv,lights_fragment_begin:Qv,lights_fragment_maps:ex,lights_fragment_end:tx,lightprobes_pars_fragment:nx,logdepthbuf_fragment:ix,logdepthbuf_pars_fragment:rx,logdepthbuf_pars_vertex:sx,logdepthbuf_vertex:ax,map_fragment:ox,map_pars_fragment:lx,map_particle_fragment:cx,map_particle_pars_fragment:ux,metalnessmap_fragment:dx,metalnessmap_pars_fragment:fx,morphinstance_vertex:hx,morphcolor_vertex:px,morphnormal_vertex:mx,morphtarget_pars_vertex:gx,morphtarget_vertex:_x,normal_fragment_begin:vx,normal_fragment_maps:xx,normal_pars_fragment:yx,normal_pars_vertex:bx,normal_vertex:Sx,normalmap_pars_fragment:Mx,clearcoat_normal_fragment_begin:Ex,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Tx,iridescence_pars_fragment:Ax,opaque_fragment:Rx,packing:Cx,premultiplied_alpha_fragment:Px,project_vertex:Ix,dithering_fragment:Lx,dithering_pars_fragment:Nx,roughnessmap_fragment:Dx,roughnessmap_pars_fragment:Ux,shadowmap_pars_fragment:kx,shadowmap_pars_vertex:Ox,shadowmap_vertex:Fx,shadowmask_pars_fragment:zx,skinbase_vertex:Bx,skinning_pars_vertex:$x,skinning_vertex:Hx,skinnormal_vertex:Gx,specularmap_fragment:Vx,specularmap_pars_fragment:Wx,tonemapping_fragment:Xx,tonemapping_pars_fragment:Zx,transmission_fragment:qx,transmission_pars_fragment:jx,uv_pars_fragment:Yx,uv_pars_vertex:Kx,uv_vertex:Jx,worldpos_vertex:Qx,background_vert:ey,background_frag:ty,backgroundCube_vert:ny,backgroundCube_frag:iy,cube_vert:ry,cube_frag:sy,depth_vert:ay,depth_frag:oy,distance_vert:ly,distance_frag:cy,equirect_vert:uy,equirect_frag:dy,linedashed_vert:fy,linedashed_frag:hy,meshbasic_vert:py,meshbasic_frag:my,meshlambert_vert:gy,meshlambert_frag:_y,meshmatcap_vert:vy,meshmatcap_frag:xy,meshnormal_vert:yy,meshnormal_frag:by,meshphong_vert:Sy,meshphong_frag:My,meshphysical_vert:Ey,meshphysical_frag:wy,meshtoon_vert:Ty,meshtoon_frag:Ay,points_vert:Ry,points_frag:Cy,shadow_vert:Py,shadow_frag:Iy,sprite_vert:Ly,sprite_frag:Ny},Ae={common:{diffuse:{value:new Ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Ye(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ai={basic:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:vn([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},specular:{value:new Ye(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:vn([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:vn([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Ye(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:vn([Ae.points,Ae.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:vn([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:vn([Ae.common,Ae.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:vn([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:vn([Ae.sprite,Ae.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:vn([Ae.common,Ae.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:vn([Ae.lights,Ae.fog,{color:{value:new Ye(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};ai.physical={uniforms:vn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Ye(0)},specularColor:{value:new Ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const xo={r:0,b:0,g:0},Dy=new yt,Wp=new We;Wp.set(-1,0,0,0,1,0,0,0,1);function Uy(t,e,n,i,r,s){const a=new Ye(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function h(v){let M=v.isScene===!0?v.background:null;if(M&&M.isTexture){const b=v.backgroundBlurriness>0;M=e.get(M,b)}return M}function g(v){let M=!1;const b=h(v);b===null?p(a,o):b&&b.isColor&&(p(b,1),M=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,M){const b=h(M);b&&b.isCubeTexture?(c===void 0&&(c=new xt(new Hr(1,1,1),new Or({name:"BackgroundCubeMaterial",uniforms:Ms(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Dy.makeRotationFromEuler(M.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Wp),c.material.toneMapped=st.getTransfer(b.colorSpace)!==pt,(u!==b||f!==b.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new xt(new Cr(2,2),new Or({name:"BackgroundMaterial",uniforms:Ms(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=st.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,M){v.getRGB(xo,Bp(t)),n.buffers.color.setClear(xo.r,xo.g,xo.b,M,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:m}}function ky(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(R,$,B,C,G){let V=!1;const H=f(R,C,B,$);s!==H&&(s=H,c(s.object)),V=h(R,C,B,G),V&&g(R,C,B,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(R,$,B,C),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function u(R){return t.deleteVertexArray(R)}function f(R,$,B,C){const G=C.wireframe===!0;let V=i[$.id];V===void 0&&(V={},i[$.id]=V);const H=R.isInstancedMesh===!0?R.id:0;let de=V[H];de===void 0&&(de={},V[H]=de);let K=de[B.id];K===void 0&&(K={},de[B.id]=K);let le=K[G];return le===void 0&&(le=d(l()),K[G]=le),le}function d(R){const $=[],B=[],C=[];for(let G=0;G<n;G++)$[G]=0,B[G]=0,C[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:B,attributeDivisors:C,object:R,attributes:{},index:null}}function h(R,$,B,C){const G=s.attributes,V=$.attributes;let H=0;const de=B.getAttributes();for(const K in de)if(de[K].location>=0){const fe=G[K];let Ce=V[K];if(Ce===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Ce=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Ce=R.instanceColor)),fe===void 0||fe.attribute!==Ce||Ce&&fe.data!==Ce.data)return!0;H++}return s.attributesNum!==H||s.index!==C}function g(R,$,B,C){const G={},V=$.attributes;let H=0;const de=B.getAttributes();for(const K in de)if(de[K].location>=0){let fe=V[K];fe===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(fe=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(fe=R.instanceColor));const Ce={};Ce.attribute=fe,fe&&fe.data&&(Ce.data=fe.data),G[K]=Ce,H++}s.attributes=G,s.attributesNum=H,s.index=C}function _(){const R=s.newAttributes;for(let $=0,B=R.length;$<B;$++)R[$]=0}function p(R){m(R,0)}function m(R,$){const B=s.newAttributes,C=s.enabledAttributes,G=s.attributeDivisors;B[R]=1,C[R]===0&&(t.enableVertexAttribArray(R),C[R]=1),G[R]!==$&&(t.vertexAttribDivisor(R,$),G[R]=$)}function v(){const R=s.newAttributes,$=s.enabledAttributes;for(let B=0,C=$.length;B<C;B++)$[B]!==R[B]&&(t.disableVertexAttribArray(B),$[B]=0)}function M(R,$,B,C,G,V,H){H===!0?t.vertexAttribIPointer(R,$,B,G,V):t.vertexAttribPointer(R,$,B,C,G,V)}function b(R,$,B,C){_();const G=C.attributes,V=B.getAttributes(),H=$.defaultAttributeValues;for(const de in V){const K=V[de];if(K.location>=0){let le=G[de];if(le===void 0&&(de==="instanceMatrix"&&R.instanceMatrix&&(le=R.instanceMatrix),de==="instanceColor"&&R.instanceColor&&(le=R.instanceColor)),le!==void 0){const fe=le.normalized,Ce=le.itemSize,$e=e.get(le);if($e===void 0)continue;const ae=$e.buffer,_e=$e.type,Re=$e.bytesPerElement,Fe=_e===t.INT||_e===t.UNSIGNED_INT||le.gpuType===ku;if(le.isInterleavedBufferAttribute){const we=le.data,He=we.isInterleavedBuffer===!0?we.stride:we.itemSize,gt=le.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let ze=0;ze<K.locationSize;ze++)m(K.location+ze,we.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let ze=0;ze<K.locationSize;ze++)p(K.location+ze);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let ze=0;ze<K.locationSize;ze++)M(K.location+ze,Ce/K.locationSize,_e,fe,He*Re,(gt+Ce/K.locationSize*ze)*Re,Fe)}else{if(le.isInstancedBufferAttribute){for(let we=0;we<K.locationSize;we++)m(K.location+we,le.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let we=0;we<K.locationSize;we++)p(K.location+we);t.bindBuffer(t.ARRAY_BUFFER,ae);for(let we=0;we<K.locationSize;we++)M(K.location+we,Ce/K.locationSize,_e,fe,Ce*Re,Ce/K.locationSize*we*Re,Fe)}}else if(H!==void 0){const fe=H[de];if(fe!==void 0)switch(fe.length){case 2:t.vertexAttrib2fv(K.location,fe);break;case 3:t.vertexAttrib3fv(K.location,fe);break;case 4:t.vertexAttrib4fv(K.location,fe);break;default:t.vertexAttrib1fv(K.location,fe)}}}}v()}function T(){O();for(const R in i){const $=i[R];for(const B in $){const C=$[B];for(const G in C){const V=C[G];for(const H in V)u(V[H].object),delete V[H];delete C[G]}}delete i[R]}}function A(R){if(i[R.id]===void 0)return;const $=i[R.id];for(const B in $){const C=$[B];for(const G in C){const V=C[G];for(const H in V)u(V[H].object),delete V[H];delete C[G]}}delete i[R.id]}function x(R){for(const $ in i){const B=i[$];for(const C in B){const G=B[C];if(G[R.id]===void 0)continue;const V=G[R.id];for(const H in V)u(V[H].object),delete V[H];delete G[R.id]}}}function S(R){for(const $ in i){const B=i[$],C=R.isInstancedMesh===!0?R.id:0,G=B[C];if(G!==void 0){for(const V in G){const H=G[V];for(const de in H)u(H[de].object),delete H[de];delete G[V]}delete B[C],Object.keys(B).length===0&&delete i[$]}}}function O(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:S,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Oy(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Fy(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const x=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(x){return!(x!==oi&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){const S=x===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==Nn&&x!==Yn&&!S&&i.convert(x)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ve("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),M=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:b,maxSamples:T,samples:A}}function zy(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Xi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=t.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,M=v*4;let b=m.clippingState||null;l.value=b,b=u(g,d,M,h);for(let T=0;T!==M;++T)b[T]=n[T];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,b=h;M!==_;++M,b+=4)a.copy(f[M]).applyMatrix4(v,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class Qu extends ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Op(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Hr(5,5,5),s=new Or({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:fs});s.uniforms.tEquirect.value=n;const a=new xt(r,s),o=n.minFilter;return n.minFilter===Ki&&(n.minFilter=En),new lu(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Sf=256,By=3,$y=20,Xp=256,Zp=16,Hy=3,Gy=new k,Vy=new Ye;class il{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new lu(1,10,null),this._boxMesh=new xt(new Hr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Gy}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Vy));const p=new lu(i,r,u);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=g,e.background=_,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ef(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Sf,Cp(e))}_fromTexture(e,n){e.mapping===ys||e.mapping===wa?this._setSize(e.image.length===0?Sf:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Mf(e,!1,!1),i=Math.log2(e)-By;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Mf(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===ys||e.mapping===wa?(this._cubemapMaterial===null&&(this._cubemapMaterial=wf()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ef()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Wy(),this._integrationMaterial=Xy());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Zp);for(let a=0;a<=i;a++){const o=il.lodToRoughness(a,i);if(a>i-Hy)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Xp*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Zy());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Mf(t,e,n){return new Qu(t,{minFilter:Ki,generateMipmaps:e,type:fi,colorSpace:Jo,depthBuffer:n})}function za(t,e,n){return new Or({name:t,uniforms:e,vertexShader:je.cube_vert,fragmentShader:n,side:xn,blending:fs,depthTest:!1,depthWrite:!1})}function Wy(){return za("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xp}u

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
	`)}function Xy(){return za("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zp}},`

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
	`)}function Zy(){return za("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${$y}
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
	`)}function Ef(){return za("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function wf(){return za("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function qy(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ul||h===kl)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new Qu(g.height);return _.fromEquirectangularTexture(t,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,g=h===Ul||h===kl,_=h===ys||h===wa;if(g||_){let p=n.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new il(t)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new il(t)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,h){return h===Ul?d.mapping=ys:h===kl&&(d.mapping=wa),d}function l(d){let h=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function jy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hs("WebGLRenderer: "+i+" extension not supported."),r}}}function Yy(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const _=s.get(g);_&&(e.remove(_),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(g,_){return r[_.id]!==void 0||(_.addEventListener("dispose",o),r[_.id]=new WeakRef(_),a.register(_,_.id,_),n.memory.geometries++),_}function u(g){const _=g.attributes;for(const p in _)e.update(_[p],t.ARRAY_BUFFER)}function f(g){const _=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const v=_!==null?_.array.length:p.array.length/3-1,M=p.count>=65535?Dp:Np,b=new M(Math.ceil(v/3)*6,1),T=b.array;if(_!==null){const x=_.array;m=_.version;for(let S=0,O=0;S<v;S+=3){const N=x[S+0],R=x[S+1],$=x[S+2];T[O++]=N,T[O++]=R,T[O++]=R,T[O++]=$,T[O++]=$,T[O++]=N}}else{m=p.version;for(let x=0,S=0;x<v;x+=3){const O=x+0,N=x+1,R=x+2;T[S++]=O,T[S++]=N,T[S++]=N,T[S++]=R,T[S++]=R,T[S++]=O}}b.version=m;const A=s.get(g);A&&e.remove(A),s.set(g,b)}function d(g){const _=s.get(g);if(_){const p=g.index;p!==null&&_.version<p.version&&f(g)}else f(g);return s.get(g)}function h(){for(const g in r){const _=r[g].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function Ky(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,s,f*a,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let _=0;for(let p=0;p<h;p++)_+=d[p];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Jy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Qy(t,e,n){const i=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let N=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let T=o.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const x=new Float32Array(T*A*4*f),S=new Pp(x,T,A,f);S.type=Yn,S.needsUpdate=!0;const O=b*4;for(let R=0;R<f;R++){const $=m[R],B=v[R],C=M[R],G=T*A*4*R;for(let V=0;V<$.count;V++){const H=V*O;g===!0&&(r.fromBufferAttribute($,V),x[G+H+0]=r.x,x[G+H+1]=r.y,x[G+H+2]=r.z,x[G+H+3]=0),_===!0&&(r.fromBufferAttribute(B,V),x[G+H+4]=r.x,x[G+H+5]=r.y,x[G+H+6]=r.z,x[G+H+7]=0),p===!0&&(r.fromBufferAttribute(C,V),x[G+H+8]=r.x,x[G+H+9]=r.y,x[G+H+10]=r.z,x[G+H+11]=C.itemSize===4?r.w:1)}}d={count:f,texture:S,size:new Ze(T,A)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function eb(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const tb={[dp]:"LINEAR_TONE_MAPPING",[fp]:"REINHARD_TONE_MAPPING",[hp]:"CINEON_TONE_MAPPING",[Uu]:"ACES_FILMIC_TONE_MAPPING",[mp]:"AGX_TONE_MAPPING",[gp]:"NEUTRAL_TONE_MAPPING",[pp]:"CUSTOM_TONE_MAPPING"};function nb(t,e,n,i,r,s){const a=new ui(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Gn;u.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const f=new V_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new xt(u,f),h=new Gp(-1,1,1,-1,0,1);let g=null,_=null,p=!1,m,v=null,M=[],b=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let x=0;x<M.length;x++){const S=M[x];S.setSize&&S.setSize(T,A)}},this.setEffects=function(T){M=T,b=M.length>0&&M[0].isRenderPass===!0;const A=a.width,x=a.height;M.length>0&&o===null&&(o=new ui(A,x,{type:fi,depthBuffer:!1,stencilBuffer:!1}),l=new ui(A,x,{type:fi,depthBuffer:!1,stencilBuffer:!1}));const S=r===!0&&M.some(O=>O.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&c===null&&(c=new Ss(A,x),s===!0&&(c.format=Ji,c.type=bs)),a.dispose(),a.depthTexture=S?c:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let O=0;O<M.length;O++){const N=M[O];N.setSize&&N.setSize(A,x),S&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(T,A){if(p||T.toneMapping===Ri&&M.length===0)return!1;if(v=A,A!==null){const x=A.width,S=A.height;(a.width!==x||a.height!==S)&&this.setSize(x,S)}return b===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Ri,!0},this.hasRenderPass=function(){return b},this.end=function(T,A){T.toneMapping=m,p=!0;let x=a,S=o;for(let O=0;O<M.length;O++){const N=M[O];N.enabled!==!1&&(N.render(T,S,x,A),N.needsSwap!==!1&&(x=S,S=S===o?l:o))}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,f.defines={},st.getTransfer(g)===pt&&(f.defines.SRGB_TRANSFER="");const O=tb[_];O&&(f.defines[O]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(d,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const qp=new pn,jp=new Ss(1,1),Yp=new Fp(1),Kp=new Pp,Jp=new x_,Qp=new Op,Tf=[],Af=[],Rf=new Float32Array(16),Cf=new Float32Array(9),Pf=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Tf[r];if(s===void 0&&(s=new Float32Array(r),Tf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ml(t,e){let n=Af[e];n===void 0&&(n=new Int32Array(e),Af[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ib(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function rb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function ob(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;Pf.set(i),t.uniformMatrix2fv(this.addr,!1,Pf),jt(n,i)}}function lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;Cf.set(i),t.uniformMatrix3fv(this.addr,!1,Cf),jt(n,i)}}function cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;Rf.set(i),t.uniformMatrix4fv(this.addr,!1,Rf),jt(n,i)}}function ub(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function db(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function pb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function mb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function El(t){return t.version===0&&(t.compareFunction=Tp,t.needsUpdate=!0),t}function vb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=El(jp):s=qp,n.setTexture2D(e||s,r)}function xb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Jp,r)}function yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=El(Yp):s=Qp,n.setTextureCube(e||s,r)}function bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Kp,r)}function Sb(t){switch(t){case 5126:return ib;case 35664:return rb;case 35665:return sb;case 35666:return ab;case 35674:return ob;case 35675:return lb;case 35676:return cb;case 5124:case 35670:return ub;case 35667:case 35671:return db;case 35668:case 35672:return fb;case 35669:case 35673:return hb;case 5125:return pb;case 36294:return mb;case 36295:return gb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return vb;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return yb;case 36289:case 36303:case 36311:case 36292:return bb}}function Mb(t,e){t.uniform1fv(this.addr,e)}function Eb(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function wb(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function Tb(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function Ab(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Rb(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Cb(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Pb(t,e){t.uniform1iv(this.addr,e)}function Ib(t,e){t.uniform2iv(this.addr,e)}function Lb(t,e){t.uniform3iv(this.addr,e)}function Nb(t,e){t.uniform4iv(this.addr,e)}function Db(t,e){t.uniform1uiv(this.addr,e)}function Ub(t,e){t.uniform2uiv(this.addr,e)}function kb(t,e){t.uniform3uiv(this.addr,e)}function Ob(t,e){t.uniform4uiv(this.addr,e)}function Fb(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=El(jp):a=qp;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function zb(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Jp,s[a])}function Bb(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=El(Yp):a=Qp;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function $b(t,e,n){const i=this.cache,r=e.length,s=Ml(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Kp,s[a])}function Hb(t){switch(t){case 5126:return Mb;case 35664:return Eb;case 35665:return wb;case 35666:return Tb;case 35674:return Ab;case 35675:return Rb;case 35676:return Cb;case 5124:case 35670:return Pb;case 35667:case 35671:return Ib;case 35668:case 35672:return Lb;case 35669:case 35673:return Nb;case 5125:return Db;case 36294:return Ub;case 36295:return kb;case 36296:return Ob;case 35678:case 36198:case 36298:case 36306:case 35682:return Fb;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Bb;case 36289:case 36303:case 36311:case 36292:return $b}}class Gb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Sb(n.type)}}class Vb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Hb(n.type)}}class Wb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const lc=/(\w+)(\])?(\[|\.)?/g;function If(t,e){t.seq.push(e),t.map[e.id]=e}function Xb(t,e,n){const i=t.name,r=i.length;for(lc.lastIndex=0;;){const s=lc.exec(i),a=lc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){If(n,c===void 0?new Gb(o,t,e):new Vb(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Wb(o),If(n,f)),n=f}}}class Oo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Xb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Lf(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Zb=37297;let qb=0;function jb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Nf=new We;function Yb(t){st._getMatrix(Nf,st.workingColorSpace,t);const e=`mat3( ${Nf.elements.map(n=>n.toFixed(4))} )`;switch(st.getTransfer(t)){case Qo:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Df(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+jb(t.getShaderSource(e),o)}else return s}function Kb(t,e){const n=Yb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Jb={[dp]:"Linear",[fp]:"Reinhard",[hp]:"Cineon",[Uu]:"ACESFilmic",[mp]:"AgX",[gp]:"Neutral",[pp]:"Custom"};function Qb(t,e){const n=Jb[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yo=new k;function eS(){st.getLuminanceCoefficients(yo);const t=yo.x.toFixed(4),e=yo.y.toFixed(4),n=yo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(da).join(`
`)}function nS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function iS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function da(t){return t!==""}function Uf(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function kf(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const rS=/^[ \t]*#include +<([\w\d./]+)>/gm;function cu(t){return t.replace(rS,sS)}function sS(t,e){const n=je[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return cu(n)}const aS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(t){return t.replace(aS,oS)}function oS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Ff(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const lS={[Po]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function cS(t){return lS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const uS={[wa]:"ENVMAP_MODE_REFRACTION"};function dS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":uS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fS={[up]:"ENVMAP_BLENDING_MULTIPLY",[F0]:"ENVMAP_BLENDING_MIX",[z0]:"ENVMAP_BLENDING_ADD"};function hS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":fS[t.combine]||"ENVMAP_BLENDING_NONE"}function pS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=cS(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=dS(n),f=hS(n),d=tS(n),h=nS(s),g=r.createProgram();let _,p,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(da).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(da).join(`
`),p.length>0&&(p+=`
`)):(_=[Ff(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(da).join(`
`),p=[Ff(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ri?"#define TONE_MAPPING":"",n.toneMapping!==Ri?je.tonemapping_pars_fragment:"",n.toneMapping!==Ri?Qb("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,Kb("linearToOutputTexel",n.outputColorSpace),eS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(da).join(`
`)),a=cu(a),a=Uf(a,n),a=kf(a,n),o=cu(o),o=Uf(o,n),o=kf(o,n),a=Of(a),o=Of(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",n.glslVersion===Vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=m+_+a,M=m+p+o,b=Lf(r,r.VERTEX_SHADER,v),T=Lf(r,r.FRAGMENT_SHADER,M);r.attachShader(g,b),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(N){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(g)||"",$=r.getShaderInfoLog(b)||"",B=r.getShaderInfoLog(T)||"",C=R.trim(),G=$.trim(),V=B.trim();let H=!0,de=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,T);else{const K=Df(r,b,"vertex"),le=Df(r,T,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+C+`
`+K+`
`+le)}else C!==""?Ve("WebGLProgram: Program Info Log:",C):(G===""||V==="")&&(de=!1);de&&(N.diagnostics={runnable:H,programLog:C,vertexShader:{log:G,prefix:_},fragmentShader:{log:V,prefix:p}})}r.deleteShader(b),r.deleteShader(T),x=new Oo(r,g),S=iS(r,g)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let S;this.getAttributes=function(){return S===void 0&&A(this),S};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,Zb)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=qb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let mS=0;class gS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _S(e),n.set(e,i)),i}}class _S{constructor(e){this.id=mS++,this.code=e,this.usedTimes=0}}function vS(t){return t===kr||t===Yo||t===Ko}function xS(t,e,n,i,r,s){const a=new Ip,o=new gS,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,S,O,N,R,$){const B=N.fog,C=R.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?N.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,H=e.get(x.envMap||G,V),de=d[x.type];let K=i.precision;x.precision!==null&&(K=i.getMaxPrecision(x.precision),K!==x.precision&&Ve("WebGLProgram.getParameters:",x.precision,"not supported, using",K,"instead."));const le=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,fe=le!==void 0?le.length:0;let Ce=0;C.morphAttributes.position!==void 0&&(Ce=1),C.morphAttributes.normal!==void 0&&(Ce=2),C.morphAttributes.color!==void 0&&(Ce=3);let $e,ae,_e,Re;if(de){const ye=ai[de];$e=ye.vertexShader,ae=ye.fragmentShader}else{$e=x.vertexShader,ae=x.fragmentShader;const ye=o.getVertexShaderStage(x),dt=o.getFragmentShaderStage(x);o.update(x,ye,dt),_e=ye.id,Re=dt.id}const Fe=t.getRenderTarget(),we=t.state.buffers.depth.getReversed(),He=R.isInstancedMesh===!0,gt=R.isBatchedMesh===!0,ze=!!x.map,et=!!x.matcap,ot=!!H,qe=ot&&H.isPMREMTexture===!0,At=!!x.aoMap,ct=!!x.lightMap,Lt=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Yt=!!x.displacementMap,Et=!!x.emissiveMap,$t=!!x.metalnessMap,tn=!!x.roughnessMap,Le=x.anisotropy>0,z=x.clearcoat>0,Ut=x.diffuseRoughness>0,ut=x.dispersion>0,D=x.retroreflectivity>0,L=x.iridescence>0,ee=x.sheen>0,ne=x.transmission>0,se=Le&&!!x.anisotropyMap,w=z&&!!x.clearcoatMap,y=z&&!!x.clearcoatNormalMap,P=z&&!!x.clearcoatRoughnessMap,Z=Ut&&!!x.diffuseRoughnessMap,U=L&&!!x.iridescenceMap,oe=L&&!!x.iridescenceThicknessMap,ue=ee&&!!x.sheenColorMap,Q=ee&&!!x.sheenRoughnessMap,re=!!x.specularMap,he=!!x.specularColorMap,I=!!x.specularIntensityMap,ie=ne&&!!x.transmissionMap,j=ne&&!!x.thicknessMap,ge=!!x.gradientMap,pe=!!x.alphaMap,me=x.alphaTest>0,xe=!!x.alphaHash,ke=!!x.extensions;let W=Ri;x.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(W=t.toneMapping);const Ie=qe?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ge={shaderID:de,shaderType:x.type,shaderName:x.name,vertexShader:$e,fragmentShader:ae,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:Re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:K,batching:gt,batchingColor:gt&&R._colorsTexture!==null,instancing:He,instancingColor:He&&R.instanceColor!==null,instancingMorph:He&&R.morphTexture!==null,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:st.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:ze,matcap:et,envMap:ot,envMapMode:ot&&H.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ie.length-1:null,envMapSize:qe?Ie[0].width:null,aoMap:At,lightMap:ct,bumpMap:Lt,normalMap:_t,displacementMap:Yt,emissiveMap:Et,normalMapObjectSpace:_t&&x.normalMapType===H0,normalMapTangentSpace:_t&&x.normalMapType===ou,packedNormalMap:_t&&x.normalMapType===ou&&vS(x.normalMap.format),metalnessMap:$t,roughnessMap:tn,anisotropy:Le,anisotropyMap:se,clearcoat:z,clearcoatMap:w,clearcoatNormalMap:y,clearcoatRoughnessMap:P,diffuseRoughness:Ut,diffuseRoughnessMap:Z,dispersion:ut,retroreflection:D,iridescence:L,iridescenceMap:U,iridescenceThicknessMap:oe,sheen:ee,sheenColorMap:ue,sheenRoughnessMap:Q,specularMap:re,specularColorMap:he,specularIntensityMap:I,transmission:ne,transmissionMap:ie,thicknessMap:j,gradientMap:ge,opaque:x.transparent===!1&&x.blending===ga&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:me,alphaHash:xe,combine:x.combine,mapUv:ze&&h(x.map.channel),aoMapUv:At&&h(x.aoMap.channel),lightMapUv:ct&&h(x.lightMap.channel),bumpMapUv:Lt&&h(x.bumpMap.channel),normalMapUv:_t&&h(x.normalMap.channel),displacementMapUv:Yt&&h(x.displacementMap.channel),emissiveMapUv:Et&&h(x.emissiveMap.channel),metalnessMapUv:$t&&h(x.metalnessMap.channel),roughnessMapUv:tn&&h(x.roughnessMap.channel),anisotropyMapUv:se&&h(x.anisotropyMap.channel),clearcoatMapUv:w&&h(x.clearcoatMap.channel),clearcoatNormalMapUv:y&&h(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&h(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Z&&h(x.diffuseRoughnessMap.channel),iridescenceMapUv:U&&h(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&h(x.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&h(x.sheenRoughnessMap.channel),specularMapUv:re&&h(x.specularMap.channel),specularColorMapUv:he&&h(x.specularColorMap.channel),specularIntensityMapUv:I&&h(x.specularIntensityMap.channel),transmissionMapUv:ie&&h(x.transmissionMap.channel),thicknessMapUv:j&&h(x.thicknessMap.channel),alphaMapUv:pe&&h(x.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(_t||Le),vertexNormals:!!C.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!C.attributes.uv&&(ze||pe),fog:!!B,useFog:x.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||C.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:fe,morphTextureStride:Ce,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:$.filter(ye=>ye.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:W,decodeVideoTexture:ze&&x.map.isVideoTexture===!0&&st.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:Et&&x.emissiveMap.isVideoTexture===!0&&st.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ln,flipSided:x.side===xn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ke&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&x.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ge.vertexUv1s=l.has(1),Ge.vertexUv2s=l.has(2),Ge.vertexUv3s=l.has(3),l.clear(),Ge}function _(x){const S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(const O in x.defines)S.push(O),S.push(x.defines[O]);return x.isRawShaderMaterial===!1&&(p(S,x),m(S,x),S.push(t.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapPMREM),x.push(S.envMapMaxLod),x.push(S.envMapSize),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.diffuseRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.numLightProbeGrids),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function m(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){const S=d[x.type];let O;if(S){const N=ai[S];O=$_.clone(N.uniforms)}else O=x.uniforms;return O}function M(x,S){let O=u.get(S);return O!==void 0?++O.usedTimes:(O=new pS(t,S,x,r),c.push(O),u.set(S,O)),O}function b(x){if(--x.usedTimes===0){const S=c.indexOf(x);c[S]=c[c.length-1],c.pop(),u.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:M,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function yS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function bS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function zf(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Bf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,g,_,p,m){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},t[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=g,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=m),e++,v}function l(d,h,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);const M=o(d,h,g,_,p,m);g.transmission>0?i.push(M):g.transparent===!0?r.push(M):n.push(M)}function c(d,h,g,_,p,m){const v=o(d,h,g,_,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function u(d,h){n.length>1&&n.sort(d||bS),i.length>1&&i.sort(h||zf),r.length>1&&r.sort(h||zf)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function SS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Bf,t.set(i,[a])):r>=s.length?(a=new Bf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function MS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new k,color:new Ye};break;case"SpotLight":n={position:new k,direction:new k,color:new Ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new k,color:new Ye,distance:0,decay:0};break;case"HemisphereLight":n={direction:new k,skyColor:new Ye,groundColor:new Ye};break;case"RectAreaLight":n={color:new Ye,position:new k,halfWidth:new k,halfHeight:new k};break}return t[e.id]=n,n}}}function ES(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let wS=0;function TS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AS(t){const e=new MS,n=ES(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new yt,a=new yt;function o(c){let u=0,f=0,d=0;for(let $=0;$<9;$++)i.probe[$].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,v=0,M=0,b=0,T=0,A=0,x=0,S=0,O=0,N=0;c.sort(TS);for(let $=0,B=c.length;$<B;$++){const C=c[$],G=C.color,V=C.intensity,H=C.distance;let de=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===kr?de=C.shadow.map.texture:de=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=G.r*V,f+=G.g*V,d+=G.b*V;else if(C.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(C.sh.coefficients[K],V);N++}else if(C.isSunLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const le=C.shadow,fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize.copy(le.mapSize).multiply(le.getFrameExtents()),i.sunShadow[g]=fe,i.sunShadowMap[g]=de;const Ce=le.getViewportCount();for(let $e=0;$e<Ce;$e++)i.sunShadowMatrix[_+$e]=le.getMatrix($e),i.sunShadowCascade[_+$e]=le._cascadeData[$e];_+=Ce,g++}i.sun[h]=K,h++}else if(C.isDirectionalLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const le=C.shadow,fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,i.directionalShadow[p]=fe,i.directionalShadowMap[p]=de,i.directionalShadowMatrix[p]=C.shadow.matrix,T++}i.directional[p]=K,p++}else if(C.isSpotLight){const K=e.get(C);K.position.setFromMatrixPosition(C.matrixWorld),K.color.copy(G).multiplyScalar(V),K.distance=H,K.coneCos=Math.cos(C.angle),K.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),K.decay=C.decay,i.spot[v]=K;const le=C.shadow;if(C.map&&(i.spotLightMap[S]=C.map,S++,le.updateMatrices(C),C.castShadow&&O++),i.spotLightMatrix[v]=le.matrix,C.castShadow){const fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,i.spotShadow[v]=fe,i.spotShadowMap[v]=de,x++}v++}else if(C.isRectAreaLight){const K=e.get(C);K.color.copy(G).multiplyScalar(V),K.halfWidth.set(C.width*.5,0,0),K.halfHeight.set(0,C.height*.5,0),i.rectArea[M]=K,M++}else if(C.isPointLight){const K=e.get(C);if(K.color.copy(C.color).multiplyScalar(C.intensity),K.distance=C.distance,K.decay=C.decay,C.castShadow){const le=C.shadow,fe=n.get(C);fe.shadowIntensity=le.intensity,fe.shadowBias=le.bias,fe.shadowNormalBias=le.normalBias,fe.shadowRadius=le.radius,fe.shadowMapSize=le.mapSize,fe.shadowCameraNear=le.camera.near,fe.shadowCameraFar=le.camera.far,i.pointShadow[m]=fe,i.pointShadowMap[m]=de,i.pointShadowMatrix[m]=C.shadow.matrix,A++}i.point[m]=K,m++}else if(C.isHemisphereLight){const K=e.get(C);K.skyColor.copy(C.color).multiplyScalar(V),K.groundColor.copy(C.groundColor).multiplyScalar(V),i.hemi[b]=K,b++}}M>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.sunLength!==h||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==M||R.hemiLength!==b||R.numSunShadows!==g||R.numDirectionalShadows!==T||R.numPointShadows!==A||R.numSpotShadows!==x||R.numSpotMaps!==S||R.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=p,i.spot.length=v,i.rectArea.length=M,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=x,i.spotShadowMap.length=x,i.spotLightMatrix.length=x+S-O,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=N,R.sunLength=h,R.directionalLength=p,R.pointLength=m,R.spotLength=v,R.rectAreaLength=M,R.hemiLength=b,R.numSunShadows=g,R.numDirectionalShadows=T,R.numPointShadows=A,R.numSpotShadows=x,R.numSpotMaps=S,R.numLightProbes=N,i.version=wS++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let v=0,M=c.length;v<M;v++){const b=c[v];if(b.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),f++}else if(b.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(b.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function $f(t){const e=new AS(t),n=[],i=[],r=[];function s(f){u.camera=f,n.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):n.push(f)}function o(f){i.push(f)}function l(){e.setup(n),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function RS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new $f(t),e.set(r,[o])):s>=a.length?(o=new $f(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const CS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PS=`uniform sampler2D shadow_pass;
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
}`,IS=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],LS=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],Hf=new yt,ea=new k,cc=new k;function NS(t,e,n){let i=new Ca;const r=new Ze,s=new Ze,a=new Pt,o=new X_,l=new Z_,c={},u=n.maxTextureSize,f={[Ur]:xn,[xn]:Ur,[Ln]:Ln},d=new Or({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:CS,fragmentShader:PS}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new xt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Po;let m=this.type;this.render=function(A,x,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===x0&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Po);const O=t.getRenderTarget(),N=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),$=t.state;$.setBlending(fs),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const B=m!==this.type;B&&x.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(G=>G.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,G=A.length;C<G;C++){const V=A[C],H=V.shadow;if(H===void 0){Ve("WebGLShadowMap:",V,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const de=H.getFrameExtents();r.multiply(de),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,H.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=K,H.map===null||B===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ua){if(V.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ui(r.x,r.y,{format:kr,type:fi,minFilter:En,magFilter:En,generateMipmaps:!1}),H.map.texture.name=V.name+".shadowMap",H.map.depthTexture=new Ss(r.x,r.y,Yn),H.map.depthTexture.name=V.name+".shadowMapDepth",H.map.depthTexture.format=rr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=sn,H.map.depthTexture.magFilter=sn}else V.isPointLight?(H.map=new Qu(r.x),H.map.depthTexture=new Fp(r.x,di)):(H.map=new ui(r.x,r.y),H.map.depthTexture=new Ss(r.x,r.y,di)),H.map.depthTexture.name=V.name+".shadowMap",H.map.depthTexture.format=rr,this.type===Po?(H.map.depthTexture.compareFunction=K?wp:Ep,H.map.depthTexture.minFilter=En,H.map.depthTexture.magFilter=En):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=sn,H.map.depthTexture.magFilter=sn);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const le=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();V.isPointLight!==!0&&H.updateMatrices(V,S);const fe=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:S.layers;for(let Ce=0;Ce<le;Ce++){const $e=H.getCamera(Ce);if(V.isPointLight){const ae=H.camera,_e=H.matrix,Re=V.distance||ae.far;Re!==ae.far&&(ae.far=Re,ae.updateProjectionMatrix()),ea.setFromMatrixPosition(V.matrixWorld),ae.position.copy(ea),cc.copy(ae.position),cc.add(IS[Ce]),ae.up.copy(LS[Ce]),ae.lookAt(cc),ae.updateMatrixWorld(),_e.makeTranslation(-ea.x,-ea.y,-ea.z),Hf.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Hf,ae.coordinateSystem,ae.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,Ce),t.clear();else{Ce===0&&(t.setRenderTarget(H.map),t.clear());const ae=H.getViewport(Ce);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),$.viewport(a)}i=H.getFrustum(Ce),b(x,S,$e,V,fe,this.type)}H.isPointLightShadow!==!0&&this.type===ua&&v(H,S),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(O,N,R)};function v(A,x){const S=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new ui(r.x,r.y,{format:kr,type:fi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(x,null,S,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(x,null,S,h,_,null)}function M(A,x,S,O){let N=null;const R=S.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)N=R;else if(N=S.isPointLight===!0?l:o,t.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){const $=N.uuid,B=x.uuid;let C=c[$];C===void 0&&(C={},c[$]=C);let G=C[B];G===void 0&&(G=N.clone(),C[B]=G,x.addEventListener("dispose",T)),N=G}if(N.visible=x.visible,N.wireframe=x.wireframe,O===ua?N.side=x.shadowSide!==null?x.shadowSide:x.side:N.side=x.shadowSide!==null?x.shadowSide:f[x.side],N.alphaMap=x.alphaMap,N.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,N.map=x.map,N.clipShadows=x.clipShadows,N.clippingPlanes=x.clippingPlanes,N.clipIntersection=x.clipIntersection,N.displacementMap=x.displacementMap,N.displacementScale=x.displacementScale,N.displacementBias=x.displacementBias,N.wireframeLinewidth=x.wireframeLinewidth,N.linewidth=x.linewidth,S.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const $=t.properties.get(N);$.light=S}return N}function b(A,x,S,O,N,R){if(A.visible===!1)return;if(A.layers.test(N)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===ua)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,A.matrixWorld);const C=e.update(A),G=A.material;if(Array.isArray(G)){const V=C.groups;for(let H=0,de=V.length;H<de;H++){const K=V[H],le=G[K.materialIndex];if(le&&le.visible){const fe=M(A,le,O,R);A.onBeforeShadow(t,A,x,S,C,fe,K),t.renderBufferDirect(S,null,C,fe,A,K),A.onAfterShadow(t,A,x,S,C,fe,K)}}}else if(G.visible){const V=M(A,G,O,R);A.onBeforeShadow(t,A,x,S,C,V,null),t.renderBufferDirect(S,null,C,V,A,null),A.onAfterShadow(t,A,x,S,C,V,null)}}const B=A.children;for(let C=0,G=B.length;C<G;C++)b(B[C],x,S,O,N,R)}function T(A){A.target.removeEventListener("dispose",T);for(const S in c){const O=c[S],N=A.target.uuid;N in O&&(O[N].dispose(),delete O[N])}}}function DS(t,e){function n(){let I=!1;const ie=new Pt;let j=null;const ge=new Pt(0,0,0,0);return{setMask:function(pe){j!==pe&&!I&&(t.colorMask(pe,pe,pe,pe),j=pe)},setLocked:function(pe){I=pe},setClear:function(pe,me,xe,ke,W){W===!0&&(pe*=ke,me*=ke,xe*=ke),ie.set(pe,me,xe,ke),ge.equals(ie)===!1&&(t.clearColor(pe,me,xe,ke),ge.copy(ie))},reset:function(){I=!1,j=null,ge.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,j=null,ge=null,pe=null;return{setReversed:function(me){if(ie!==me){const xe=e.get("EXT_clip_control");me?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ie=me;const ke=pe;pe=null,this.setClear(ke)}},getReversed:function(){return ie},setTest:function(me){me?we(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(me){j!==me&&!I&&(t.depthMask(me),j=me)},setFunc:function(me){if(ie&&(me=J0[me]),ge!==me){switch(me){case Mc:t.depthFunc(t.NEVER);break;case Ec:t.depthFunc(t.ALWAYS);break;case wc:t.depthFunc(t.LESS);break;case Ea:t.depthFunc(t.LEQUAL);break;case Tc:t.depthFunc(t.EQUAL);break;case Ac:t.depthFunc(t.GEQUAL);break;case Rc:t.depthFunc(t.GREATER);break;case Cc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=me}},setLocked:function(me){I=me},setClear:function(me){pe!==me&&(pe=me,ie&&(me=1-me),t.clearDepth(me))},reset:function(){I=!1,j=null,ge=null,pe=null,ie=!1}}}function r(){let I=!1,ie=null,j=null,ge=null,pe=null,me=null,xe=null,ke=null,W=null;return{setTest:function(Ie){I||(Ie?we(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(Ie){ie!==Ie&&!I&&(t.stencilMask(Ie),ie=Ie)},setFunc:function(Ie,Ge,ye){(j!==Ie||ge!==Ge||pe!==ye)&&(t.stencilFunc(Ie,Ge,ye),j=Ie,ge=Ge,pe=ye)},setOp:function(Ie,Ge,ye){(me!==Ie||xe!==Ge||ke!==ye)&&(t.stencilOp(Ie,Ge,ye),me=Ie,xe=Ge,ke=ye)},setLocked:function(Ie){I=Ie},setClear:function(Ie){W!==Ie&&(t.clearStencil(Ie),W=Ie)},reset:function(){I=!1,ie=null,j=null,ge=null,pe=null,me=null,xe=null,ke=null,W=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],_=null,p=!1,m=null,v=null,M=null,b=null,T=null,A=null,x=null,S=new Ye(0,0,0),O=0,N=!1,R=null,$=null,B=null,C=null,G=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,de=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=de>=1):K.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=de>=2);let le=null,fe={};const Ce=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),ae=new Pt().fromArray(Ce),_e=new Pt().fromArray($e);function Re(I,ie,j,ge){const pe=new Uint8Array(4),me=t.createTexture();t.bindTexture(I,me),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let xe=0;xe<j;xe++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(ie+xe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return me}const Fe={};Fe[t.TEXTURE_2D]=Re(t.TEXTURE_2D,t.TEXTURE_2D,1),Fe[t.TEXTURE_CUBE_MAP]=Re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[t.TEXTURE_2D_ARRAY]=Re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Fe[t.TEXTURE_3D]=Re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),we(t.DEPTH_TEST),a.setFunc(Ea),Lt(!1),_t(Bd),we(t.CULL_FACE),At(fs);function we(I){u[I]!==!0&&(t.enable(I),u[I]=!0)}function He(I){u[I]!==!1&&(t.disable(I),u[I]=!1)}function gt(I,ie){return d[I]!==ie?(t.bindFramebuffer(I,ie),d[I]=ie,I===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ie),I===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function ze(I,ie){let j=g,ge=!1;if(I){j=h.get(ie),j===void 0&&(j=[],h.set(ie,j));const pe=I.textures;if(j.length!==pe.length||j[0]!==t.COLOR_ATTACHMENT0){for(let me=0,xe=pe.length;me<xe;me++)j[me]=t.COLOR_ATTACHMENT0+me;j.length=pe.length,ge=!0}}else j[0]!==t.BACK&&(j[0]=t.BACK,ge=!0);ge&&t.drawBuffers(j)}function et(I){return _!==I?(t.useProgram(I),_=I,!0):!1}const ot={[us]:t.FUNC_ADD,[b0]:t.FUNC_SUBTRACT,[S0]:t.FUNC_REVERSE_SUBTRACT};ot[M0]=t.MIN,ot[E0]=t.MAX;const qe={[w0]:t.ZERO,[T0]:t.ONE,[A0]:t.SRC_COLOR,[lp]:t.SRC_ALPHA,[N0]:t.SRC_ALPHA_SATURATE,[I0]:t.DST_COLOR,[C0]:t.DST_ALPHA,[R0]:t.ONE_MINUS_SRC_COLOR,[cp]:t.ONE_MINUS_SRC_ALPHA,[L0]:t.ONE_MINUS_DST_COLOR,[P0]:t.ONE_MINUS_DST_ALPHA,[D0]:t.CONSTANT_COLOR,[U0]:t.ONE_MINUS_CONSTANT_COLOR,[k0]:t.CONSTANT_ALPHA,[O0]:t.ONE_MINUS_CONSTANT_ALPHA};function At(I,ie,j,ge,pe,me,xe,ke,W,Ie){if(I===fs){p===!0&&(He(t.BLEND),p=!1);return}if(p===!1&&(we(t.BLEND),p=!0),I!==y0){if(I!==m||Ie!==N){if((v!==us||T!==us)&&(t.blendEquation(t.FUNC_ADD),v=us,T=us),Ie)switch(I){case ga:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $d:t.blendFunc(t.ONE,t.ONE);break;case Hd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Gd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",I);break}else switch(I){case ga:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case $d:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Hd:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Gd:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",I);break}M=null,b=null,A=null,x=null,S.set(0,0,0),O=0,m=I,N=Ie}return}pe=pe||ie,me=me||j,xe=xe||ge,(ie!==v||pe!==T)&&(t.blendEquationSeparate(ot[ie],ot[pe]),v=ie,T=pe),(j!==M||ge!==b||me!==A||xe!==x)&&(t.blendFuncSeparate(qe[j],qe[ge],qe[me],qe[xe]),M=j,b=ge,A=me,x=xe),(ke.equals(S)===!1||W!==O)&&(t.blendColor(ke.r,ke.g,ke.b,W),S.copy(ke),O=W),m=I,N=!1}function ct(I,ie){I.side===Ln?He(t.CULL_FACE):we(t.CULL_FACE);let j=I.side===xn;ie&&(j=!j),Lt(j),I.blending===ga&&I.transparent===!1?At(fs):At(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ge=I.stencilWrite;o.setTest(ge),ge&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Et(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?we(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function Lt(I){R!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),R=I)}function _t(I){I!==_0?(we(t.CULL_FACE),I!==$&&(I===Bd?t.cullFace(t.BACK):I===v0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),$=I}function Yt(I){I!==B&&(H&&t.lineWidth(I),B=I)}function Et(I,ie,j){I?(we(t.POLYGON_OFFSET_FILL),(C!==ie||G!==j)&&(C=ie,G=j,a.getReversed()&&(ie=-ie,j=-j),t.polygonOffset(ie,j))):He(t.POLYGON_OFFSET_FILL)}function $t(I){I?we(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function tn(I){I===void 0&&(I=t.TEXTURE0+V-1),le!==I&&(t.activeTexture(I),le=I)}function Le(I,ie,j){j===void 0&&(le===null?j=t.TEXTURE0+V-1:j=le);let ge=fe[j];ge===void 0&&(ge={type:void 0,texture:void 0},fe[j]=ge),(ge.type!==I||ge.texture!==ie)&&(le!==j&&(t.activeTexture(j),le=j),t.bindTexture(I,ie||Fe[I]),ge.type=I,ge.texture=ie)}function z(){const I=fe[le];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Ut(){try{t.compressedTexImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function ut(){try{t.compressedTexImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function D(){try{t.texSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function L(){try{t.texSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function ee(){try{t.compressedTexSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function ne(){try{t.compressedTexSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function se(){try{t.texStorage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function w(){try{t.texStorage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function y(){try{t.texImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function P(){try{t.texImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function Z(I){return f[I]!==void 0?f[I]:t.getParameter(I)}function U(I,ie){f[I]!==ie&&(t.pixelStorei(I,ie),f[I]=ie)}function oe(I){ae.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),ae.copy(I))}function ue(I){_e.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),_e.copy(I))}function Q(I,ie){let j=c.get(ie);j===void 0&&(j=new WeakMap,c.set(ie,j));let ge=j.get(I);ge===void 0&&(ge=t.getUniformBlockIndex(ie,I.name),t.uniformBlockBinding(ie,ge,ge),j.set(I,ge))}function re(I,ie,j){const pe=c.get(ie).get(I);l[pe]!==j&&(t.bindBufferBase(t.UNIFORM_BUFFER,pe,j),l[pe]=j)}function he(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},le=null,fe={},d={},l={},h=new WeakMap,g=[],_=null,p=!1,m=null,v=null,M=null,b=null,T=null,A=null,x=null,S=new Ye(0,0,0),O=0,N=!1,R=null,$=null,B=null,C=null,G=null,ae.set(0,0,t.canvas.width,t.canvas.height),_e.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:we,disable:He,bindFramebuffer:gt,drawBuffers:ze,useProgram:et,setBlending:At,setMaterial:ct,setFlipSided:Lt,setCullFace:_t,setLineWidth:Yt,setPolygonOffset:Et,setScissorTest:$t,activeTexture:tn,bindTexture:Le,unbindTexture:z,compressedTexImage2D:Ut,compressedTexImage3D:ut,texImage2D:y,texImage3D:P,pixelStorei:U,getParameter:Z,updateUBOMapping:Q,uniformBlockBinding:re,texStorage2D:se,texStorage3D:w,texSubImage2D:D,texSubImage3D:L,compressedTexSubImage2D:ee,compressedTexSubImage3D:ne,scissor:oe,viewport:ue,reset:he}}function US(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,u=new WeakMap,f=new Set;let d;const h=new WeakMap,g=new Set,_=new FinalizationRegistry(w=>g.delete(w));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,y){return p?new OffscreenCanvas(w,y):el("canvas")}function v(w,y,P){let Z=1;const U=se(w);if((U.width>P||U.height>P)&&(Z=P/Math.max(U.width,U.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const oe=Math.floor(Z*U.width),ue=Math.floor(Z*U.height);d===void 0&&(d=m(oe,ue));const Q=y?m(oe,ue):d;return Q.width=oe,Q.height=ue,Q.getContext("2d").drawImage(w,0,0,oe,ue),Ve("WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+oe+"x"+ue+")."),Q}else return"data"in w&&Ve("WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),w;return w}function M(w){return w.generateMipmaps}function b(w){t.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?t.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(w,y,P,Z,U,oe=!1){if(w!==null){if(t[w]!==void 0)return t[w];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ue;Z&&(ue=e.get("EXT_texture_norm16"),ue||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=y;if(y===t.RED&&(P===t.FLOAT&&(Q=t.R32F),P===t.HALF_FLOAT&&(Q=t.R16F),P===t.UNSIGNED_BYTE&&(Q=t.R8),P===t.UNSIGNED_SHORT&&ue&&(Q=ue.R16_EXT),P===t.SHORT&&ue&&(Q=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(P===t.UNSIGNED_BYTE&&(Q=t.R8UI),P===t.UNSIGNED_SHORT&&(Q=t.R16UI),P===t.UNSIGNED_INT&&(Q=t.R32UI),P===t.BYTE&&(Q=t.R8I),P===t.SHORT&&(Q=t.R16I),P===t.INT&&(Q=t.R32I)),y===t.RG&&(P===t.FLOAT&&(Q=t.RG32F),P===t.HALF_FLOAT&&(Q=t.RG16F),P===t.UNSIGNED_BYTE&&(Q=t.RG8),P===t.UNSIGNED_SHORT&&ue&&(Q=ue.RG16_EXT),P===t.SHORT&&ue&&(Q=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(P===t.UNSIGNED_BYTE&&(Q=t.RG8UI),P===t.UNSIGNED_SHORT&&(Q=t.RG16UI),P===t.UNSIGNED_INT&&(Q=t.RG32UI),P===t.BYTE&&(Q=t.RG8I),P===t.SHORT&&(Q=t.RG16I),P===t.INT&&(Q=t.RG32I)),y===t.RGB_INTEGER&&(P===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),P===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),P===t.UNSIGNED_INT&&(Q=t.RGB32UI),P===t.BYTE&&(Q=t.RGB8I),P===t.SHORT&&(Q=t.RGB16I),P===t.INT&&(Q=t.RGB32I)),y===t.RGBA_INTEGER&&(P===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),P===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),P===t.UNSIGNED_INT&&(Q=t.RGBA32UI),P===t.BYTE&&(Q=t.RGBA8I),P===t.SHORT&&(Q=t.RGBA16I),P===t.INT&&(Q=t.RGBA32I)),y===t.RGB&&(P===t.UNSIGNED_SHORT&&ue&&(Q=ue.RGB16_EXT),P===t.SHORT&&ue&&(Q=ue.RGB16_SNORM_EXT),P===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),P===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),y===t.RGBA){const re=oe?Qo:st.getTransfer(U);P===t.FLOAT&&(Q=t.RGBA32F),P===t.HALF_FLOAT&&(Q=t.RGBA16F),P===t.UNSIGNED_BYTE&&(Q=re===pt?t.SRGB8_ALPHA8:t.RGBA8),P===t.UNSIGNED_SHORT&&ue&&(Q=ue.RGBA16_EXT),P===t.SHORT&&ue&&(Q=ue.RGBA16_SNORM_EXT),P===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),P===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(w,y){let P;return w?y===null||y===di||y===bs?P=t.DEPTH24_STENCIL8:y===Yn?P=t.DEPTH32F_STENCIL8:y===Ta&&(P=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===di||y===bs?P=t.DEPTH_COMPONENT24:y===Yn?P=t.DEPTH_COMPONENT32F:y===Ta&&(P=t.DEPTH_COMPONENT16),P}function S(w,y){return M(w)===!0||w.isFramebufferTexture&&w.minFilter!==sn&&w.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?y.mipmaps.length:1}function O(w){const y=new WeakRef(w);i.get(w).__ref=y,g.add(y),_.register(w,y,y)}function N(w){const y=i.get(w).__ref;y!==void 0&&(g.delete(y),_.unregister(y))}function R(w){B(w.target)}function $(w){C(w.target)}function B(w){w.removeEventListener("dispose",R),N(w),V(w),w.isVideoTexture&&u.delete(w),w.isHTMLTexture&&f.delete(w)}function C(w){w.removeEventListener("dispose",$),N(w),de(w)}function G(){for(const w of g){const y=w.deref();y!==void 0&&(y.isRenderTarget===!0?C(y):B(y))}g.clear(),f.clear()}function V(w){const y=i.get(w);if(y.__webglInit===void 0)return;const P=w.source,Z=h.get(P);if(Z){const U=Z[y.__cacheKey];U.usedTimes--,U.usedTimes===0&&H(w),Object.keys(Z).length===0&&h.delete(P)}i.remove(w)}function H(w){const y=i.get(w);t.deleteTexture(y.__webglTexture);const P=w.source,Z=h.get(P);delete Z[y.__cacheKey],a.memory.textures--}function de(w){const y=i.get(w);y.__depthDisposeCallback&&y.__depthDisposeCallback();const P=w.depthTexture;if(P&&P.renderTarget===w&&B(P),w.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(y.__webglFramebuffer[U]))for(let oe=0;oe<y.__webglFramebuffer[U].length;oe++)t.deleteFramebuffer(y.__webglFramebuffer[U][oe]);else t.deleteFramebuffer(y.__webglFramebuffer[U]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[U])}else{if(Array.isArray(y.__webglFramebuffer))for(let U=0;U<y.__webglFramebuffer.length;U++)t.deleteFramebuffer(y.__webglFramebuffer[U]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let U=0;U<y.__webglColorRenderbuffer.length;U++)y.__webglColorRenderbuffer[U]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[U]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const Z=w.textures;for(let U=0,oe=Z.length;U<oe;U++){const ue=i.get(Z[U]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(Z[U])}i.remove(w)}let K=0;function le(){K=0}function fe(){return K}function Ce(w){K=w}function $e(){const w=K;return w>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+r.maxTextures),K+=1,w}function ae(w){const y=[];return y.push(w.wrapS),y.push(w.wrapT),y.push(w.wrapR||0),y.push(w.magFilter),y.push(w.minFilter),y.push(w.anisotropy),y.push(w.internalFormat),y.push(w.format),y.push(w.type),y.push(w.generateMipmaps),y.push(w.mipmapsAutoUpdate),y.push(w.premultiplyAlpha),y.push(w.flipY),y.push(w.unpackAlignment),y.push(w.colorSpace),y.join()}function _e(w,y){const P=i.get(w);if(w.isVideoTexture&&ee(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&P.__version!==w.version){const Z=w.image;if(Z===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(P,w,y);return}}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,P.__webglTexture,t.TEXTURE0+y)}function Re(w,y){const P=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){ct(P,w,y);return}else w.isExternalTexture&&(P.__webglTexture=w.sourceTexture?w.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,P.__webglTexture,t.TEXTURE0+y)}function Fe(w,y){const P=i.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&P.__version!==w.version){ct(P,w,y);return}n.bindTexture(t.TEXTURE_3D,P.__webglTexture,t.TEXTURE0+y)}function we(w,y){const P=i.get(w);if(w.version>0&&P.__version!==w.version){Lt(P,w,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+y)}const He={[jo]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Pc]:t.MIRRORED_REPEAT},gt={[sn]:t.NEAREST,[B0]:t.NEAREST_MIPMAP_NEAREST,[qa]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Ol]:t.LINEAR_MIPMAP_NEAREST,[Ki]:t.LINEAR_MIPMAP_LINEAR},ze={[V0]:t.NEVER,[Tp]:t.ALWAYS,[W0]:t.LESS,[Ep]:t.LEQUAL,[X0]:t.EQUAL,[wp]:t.GEQUAL,[Z0]:t.GREATER,[q0]:t.NOTEQUAL};function et(w,y){if(y.type===Yn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===Ol||y.magFilter===qa||y.magFilter===Ki||y.minFilter===En||y.minFilter===Ol||y.minFilter===qa||y.minFilter===Ki)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(w,t.TEXTURE_WRAP_S,He[y.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,He[y.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,He[y.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,gt[y.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,gt[y.minFilter]),y.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,ze[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===sn||y.minFilter!==qa&&y.minFilter!==Ki||y.type===Yn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const P=e.get("EXT_texture_filter_anisotropic");t.texParameterf(w,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ot(w,y){let P=!1;w.__webglInit===void 0&&(w.__webglInit=!0,y.addEventListener("dispose",R),O(y));const Z=y.source;let U=h.get(Z);U===void 0&&(U={},h.set(Z,U));const oe=ae(y);if(oe!==w.__cacheKey){U[oe]===void 0&&(U[oe]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,P=!0),U[oe].usedTimes++;const ue=U[w.__cacheKey];ue!==void 0&&(U[w.__cacheKey].usedTimes--,ue.usedTimes===0&&H(y)),w.__cacheKey=oe,w.__webglTexture=U[oe].texture}return P}function qe(w,y,P){return Math.floor(Math.floor(w/P)/y)}function At(w,y,P,Z){const oe=w.updateRanges;if(oe.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,P,Z,y.data);else{oe.sort((I,ie)=>I.start-ie.start);let ue=0;for(let I=1;I<oe.length;I++){const ie=oe[ue],j=oe[I],ge=ie.start+ie.count,pe=qe(j.start,y.width,4),me=qe(ie.start,y.width,4);j.start<=ge+1&&pe===me&&qe(j.start+j.count-1,y.width,4)===pe?ie.count=Math.max(ie.count,j.start+j.count-ie.start):(++ue,oe[ue]=j)}oe.length=ue+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),re=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let I=0,ie=oe.length;I<ie;I++){const j=oe[I],ge=Math.floor(j.start/4),pe=Math.ceil(j.count/4),me=ge%y.width,xe=Math.floor(ge/y.width),ke=pe,W=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe),n.texSubImage2D(t.TEXTURE_2D,0,me,xe,ke,W,P,Z,y.data)}w.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,re),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function ct(w,y,P){let Z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=t.TEXTURE_3D);const U=ot(w,y),oe=y.source;n.bindTexture(Z,w.__webglTexture,t.TEXTURE0+P);const ue=i.get(oe);if(oe.version!==ue.__version||U===!0){if(n.activeTexture(t.TEXTURE0+P),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const W=st.getPrimaries(st.workingColorSpace),Ie=y.colorSpace===ji?null:st.getPrimaries(y.colorSpace),Ge=y.colorSpace===ji||W===Ie?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let re=v(y.image,!1,r.maxTextureSize);re=ne(y,re);const he=s.convert(y.format,y.colorSpace),I=s.convert(y.type);let ie=A(y.internalFormat,he,I,y.normalized,y.colorSpace,y.isVideoTexture);et(Z,y);let j;const ge=y.mipmaps,pe=y.isVideoTexture!==!0,me=ue.__version===void 0||U===!0,xe=oe.dataReady,ke=S(y,re);if(y.isDepthTexture)ie=x(y.format===Ji,y.type),me&&(pe?n.texStorage2D(t.TEXTURE_2D,1,ie,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,ie,re.width,re.height,0,he,I,null));else if(y.isDataTexture)if(ge.length>0){pe&&me&&n.texStorage2D(t.TEXTURE_2D,ke,ie,ge[0].width,ge[0].height);for(let W=0,Ie=ge.length;W<Ie;W++)j=ge[W],pe?xe&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,j.width,j.height,he,I,j.data):n.texImage2D(t.TEXTURE_2D,W,ie,j.width,j.height,0,he,I,j.data);y.generateMipmaps=!1}else pe?(me&&n.texStorage2D(t.TEXTURE_2D,ke,ie,re.width,re.height),xe&&At(y,re,he,I)):n.texImage2D(t.TEXTURE_2D,0,ie,re.width,re.height,0,he,I,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){pe&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ie,ge[0].width,ge[0].height,re.depth);for(let W=0,Ie=ge.length;W<Ie;W++)if(j=ge[W],y.format!==oi)if(he!==null)if(pe){if(xe)if(y.layerUpdates.size>0){const Ge=bf(j.width,j.height,y.format,y.type);for(const ye of y.layerUpdates){const dt=j.data.subarray(ye*Ge/j.data.BYTES_PER_ELEMENT,(ye+1)*Ge/j.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,ye,j.width,j.height,1,he,dt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,j.width,j.height,re.depth,he,j.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,W,ie,j.width,j.height,re.depth,0,j.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?xe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,W,0,0,0,j.width,j.height,re.depth,he,I,j.data):n.texImage3D(t.TEXTURE_2D_ARRAY,W,ie,j.width,j.height,re.depth,0,he,I,j.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{pe&&me&&n.texStorage2D(t.TEXTURE_2D,ke,ie,ge[0].width,ge[0].height);for(let W=0,Ie=ge.length;W<Ie;W++)j=ge[W],y.format!==oi?he!==null?pe?xe&&n.compressedTexSubImage2D(t.TEXTURE_2D,W,0,0,j.width,j.height,he,j.data):n.compressedTexImage2D(t.TEXTURE_2D,W,ie,j.width,j.height,0,j.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?xe&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,j.width,j.height,he,I,j.data):n.texImage2D(t.TEXTURE_2D,W,ie,j.width,j.height,0,he,I,j.data)}else if(y.isDataArrayTexture)if(pe){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ke,ie,re.width,re.height,re.depth),xe)if(y.layerUpdates.size>0){const W=bf(re.width,re.height,y.format,y.type);for(const Ie of y.layerUpdates){const Ge=re.data.subarray(Ie*W/re.data.BYTES_PER_ELEMENT,(Ie+1)*W/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ie,re.width,re.height,1,he,I,Ge)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,he,I,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,re.width,re.height,re.depth,0,he,I,re.data);else if(y.isData3DTexture)pe?(me&&n.texStorage3D(t.TEXTURE_3D,ke,ie,re.width,re.height,re.depth),xe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,he,I,re.data)):n.texImage3D(t.TEXTURE_3D,0,ie,re.width,re.height,re.depth,0,he,I,re.data);else if(y.isFramebufferTexture){if(me)if(pe)n.texStorage2D(t.TEXTURE_2D,ke,ie,re.width,re.height);else{let W=re.width,Ie=re.height;for(let Ge=0;Ge<ke;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,ie,W,Ie,0,he,I,null),W>>=1,Ie>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const W=t.canvas;if(W.hasAttribute("layoutsubtree")||W.setAttribute("layoutsubtree","true"),re.parentNode!==W){W.appendChild(re),f.add(y),W.onpaint=Ie=>{const Ge=Ie.changedElements;for(const ye of f)Ge.includes(ye.image)&&(ye.needsUpdate=!0)},W.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,re);else{const Ge=t.RGBA,ye=t.RGBA,dt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,ye,dt,re)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ge.length>0){if(pe&&me){const W=se(ge[0]);n.texStorage2D(t.TEXTURE_2D,ke,ie,W.width,W.height)}for(let W=0,Ie=ge.length;W<Ie;W++)j=ge[W],pe?xe&&n.texSubImage2D(t.TEXTURE_2D,W,0,0,he,I,j):n.texImage2D(t.TEXTURE_2D,W,ie,he,I,j);y.generateMipmaps=!1}else if(pe){if(me){const W=se(re);n.texStorage2D(t.TEXTURE_2D,ke,ie,W.width,W.height)}xe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,I,re)}else n.texImage2D(t.TEXTURE_2D,0,ie,he,I,re);M(y)&&y.mipmapsAutoUpdate===!0&&b(Z),ue.__version=oe.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function Lt(w,y,P){if(y.image.length!==6)return;const Z=ot(w,y),U=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+P);const oe=i.get(U);if(U.version!==oe.__version||Z===!0){n.activeTexture(t.TEXTURE0+P);const ue=st.getPrimaries(st.workingColorSpace),Q=y.colorSpace===ji?null:st.getPrimaries(y.colorSpace),re=y.colorSpace===ji||ue===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,I=y.image[0]&&y.image[0].isDataTexture,ie=[];for(let ye=0;ye<6;ye++)!he&&!I?ie[ye]=v(y.image[ye],!0,r.maxCubemapSize):ie[ye]=I?y.image[ye].image:y.image[ye],ie[ye]=ne(y,ie[ye]);const j=ie[0],ge=s.convert(y.format,y.colorSpace),pe=s.convert(y.type);let me=A(y.internalFormat,ge,pe,y.normalized,y.colorSpace);const xe=y.isVideoTexture!==!0,ke=oe.__version===void 0||Z===!0,W=U.dataReady;let Ie=S(y,j);et(t.TEXTURE_CUBE_MAP,y);let Ge;if(y.isDepthTexture){if(me=x(y.format===Ji,y.type),ke)if(xe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,me,j.width,j.height);else for(let ye=0;ye<6;ye++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,j.width,j.height,0,ge,pe,null)}else if(he){xe&&ke&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,me,j.width,j.height);for(let ye=0;ye<6;ye++){Ge=ie[ye].mipmaps;for(let dt=0;dt<Ge.length;dt++){const Rt=Ge[dt];y.format!==oi?ge!==null?xe?W&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,0,0,Rt.width,Rt.height,ge,Rt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,me,Rt.width,Rt.height,0,Rt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,0,0,Rt.width,Rt.height,ge,pe,Rt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt,me,Rt.width,Rt.height,0,ge,pe,Rt.data)}}}else{if(Ge=y.mipmaps,xe&&ke){Ge.length>0&&Ie++;const ye=se(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ie,me,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(I){xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ie[ye].width,ie[ye].height,ge,pe,ie[ye].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,ie[ye].width,ie[ye].height,0,ge,pe,ie[ye].data);for(let dt=0;dt<Ge.length;dt++){const ei=Ge[dt].image[ye].image;xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,0,0,ei.width,ei.height,ge,pe,ei.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,me,ei.width,ei.height,0,ge,pe,ei.data)}}else{xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,ge,pe,ie[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,me,ge,pe,ie[ye]);for(let dt=0;dt<Ge.length;dt++){const Rt=Ge[dt];xe?W&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,0,0,ge,pe,Rt.image[ye]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ye,dt+1,me,ge,pe,Rt.image[ye])}}}M(y)&&y.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),oe.__version=U.version,y.onUpdate&&y.onUpdate(y)}w.__version=y.version}function _t(w,y,P,Z,U,oe){const ue=s.convert(P.format,P.colorSpace),Q=s.convert(P.type),re=A(P.internalFormat,ue,Q,P.normalized,P.colorSpace),he=i.get(y),I=i.get(P);if(I.__renderTarget=y,!he.__hasExternalTextures){const ie=Math.max(1,y.width>>oe),j=Math.max(1,y.height>>oe);U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?n.texImage3D(U,oe,re,ie,j,y.depth,0,ue,Q,null):n.texImage2D(U,oe,re,ie,j,0,ue,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,w),L(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,U,I.__webglTexture,0,D(y)):(U===t.TEXTURE_2D||U>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,U,I.__webglTexture,oe),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Yt(w,y,P){if(t.bindRenderbuffer(t.RENDERBUFFER,w),y.depthBuffer){const Z=y.depthTexture,U=Z&&Z.isDepthTexture?Z.type:null,oe=x(y.stencilBuffer,U),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;L(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),oe,y.width,y.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),oe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,oe,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,w)}else{const Z=y.textures;for(let U=0;U<Z.length;U++){const oe=Z[U],ue=s.convert(oe.format,oe.colorSpace),Q=s.convert(oe.type),re=A(oe.internalFormat,ue,Q,oe.normalized,oe.colorSpace);L(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),re,y.width,y.height):P?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),re,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,re,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Et(w,y,P){const Z=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const U=i.get(y.depthTexture);U.__renderTarget=y;const oe=Z?y.depthTexture.image[0]:y.depthTexture.image;(!U.__webglTexture||oe.width!==y.width||oe.height!==y.height)&&(oe.width=y.width,oe.height=y.height,y.depthTexture.needsUpdate=!0),Z?we(y.depthTexture,0):_e(y.depthTexture,0);const ue=U.__webglTexture,Q=D(y),re=Z?t.TEXTURE_CUBE_MAP_POSITIVE_X+P:t.TEXTURE_2D,he=y.depthTexture.format===Ji?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===rr)L(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,re,ue,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,he,re,ue,0);else if(y.depthTexture.format===Ji)L(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,re,ue,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,he,re,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $t(w){const y=i.get(w),P=w.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){const U=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",U)};Z.addEventListener("dispose",U),y.__depthDisposeCallback=U}y.__boundDepthTexture=Z}if(w.depthTexture&&!y.__autoAllocateDepthBuffer)if(P)for(let Z=0;Z<6;Z++)Et(y.__webglFramebuffer[Z],w,Z);else w.texture.mipmaps.length>0?Et(y.__webglFramebuffer[0],w,0):Et(y.__webglFramebuffer,w,0);else if(P){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=t.createRenderbuffer(),Yt(y.__webglDepthbuffer[Z],w,!1);else{const U=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,oe)}}else if(w.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Yt(y.__webglDepthbuffer,w,!1);else{const U=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function tn(w,y,P){const Z=i.get(w);y!==void 0&&_t(Z.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),P!==void 0&&$t(w)}function Le(w){const y=w.texture,P=i.get(w),Z=i.get(y);w.addEventListener("dispose",$),O(w);const U=w.textures,oe=w.isWebGLCubeRenderTarget===!0,ue=U.length>1;if(ue||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=y.version,a.memory.textures++),oe){P.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0){P.__webglFramebuffer[Q]=[];for(let re=0;re<y.mipmaps.length;re++)P.__webglFramebuffer[Q][re]=t.createFramebuffer()}else P.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(y.mipmaps.length>0){P.__webglFramebuffer=[];for(let Q=0;Q<y.mipmaps.length;Q++)P.__webglFramebuffer[Q]=t.createFramebuffer()}else P.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Q=0,re=U.length;Q<re;Q++){const he=i.get(U[Q]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(w.samples>0&&L(w)===!1){P.__webglMultisampledFramebuffer=t.createFramebuffer(),P.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let Q=0;Q<U.length;Q++){const re=U[Q];P.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,P.__webglColorRenderbuffer[Q]);const he=s.convert(re.format,re.colorSpace),I=s.convert(re.type),ie=A(re.internalFormat,he,I,re.normalized,re.colorSpace,w.isXRRenderTarget===!0),j=D(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,j,ie,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,P.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(P.__webglDepthRenderbuffer=t.createRenderbuffer(),Yt(P.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(oe){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),et(t.TEXTURE_CUBE_MAP,y);for(let Q=0;Q<6;Q++)if(y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)_t(P.__webglFramebuffer[Q][re],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,re);else _t(P.__webglFramebuffer[Q],w,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);M(y)?b(t.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let Q=0,re=U.length;Q<re;Q++){const he=U[Q],I=i.get(he);let ie=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ie=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,I.__webglTexture),et(ie,he),_t(P.__webglFramebuffer,w,he,t.COLOR_ATTACHMENT0+Q,ie,0),M(he)&&b(ie)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(Q=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,Z.__webglTexture),et(Q,y),y.mipmaps.length>0)for(let re=0;re<y.mipmaps.length;re++)_t(P.__webglFramebuffer[re],w,y,t.COLOR_ATTACHMENT0,Q,re);else _t(P.__webglFramebuffer,w,y,t.COLOR_ATTACHMENT0,Q,0);M(y)?b(Q):y.mipmaps.length>0&&t.texParameteri(Q,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}w.depthBuffer&&$t(w)}function z(w){const y=w.textures;for(let P=0,Z=y.length;P<Z;P++){const U=y[P];if(M(U)&&U.mipmapsAutoUpdate===!0){const oe=T(w),ue=i.get(U).__webglTexture;n.bindTexture(oe,ue),b(oe),n.unbindTexture()}}}const Ut=[];function ut(w){if(w.samples>0){if(L(w)===!1){const y=w.textures,P=w.width,Z=w.height;let U=t.COLOR_BUFFER_BIT;const oe=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(w),Q=y.length>1;if(Q)for(let he=0;he<y.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let he=0;he<y.length;he++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(U|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(U|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const I=i.get(y[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}t.blitFramebuffer(0,0,P,Z,0,0,P,Z,U,t.NEAREST),l===!0&&(Ut.length=0,Ut.push(t.COLOR_ATTACHMENT0+he),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Ut.push(oe),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let he=0;he<y.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,ue.__webglColorRenderbuffer[he]);const I=i.get(y[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){const y=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function D(w){return Math.min(r.maxSamples,w.samples)}function L(w){const y=i.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ee(w){const y=a.render.frame;u.get(w)!==y&&(u.set(w,y),w.update())}function ne(w,y){const P=w.colorSpace,Z=w.format,U=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||P!==Jo&&P!==ji&&(st.getTransfer(P)===pt?(Z!==oi||U!==Nn)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",P)),y}function se(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=$e,this.resetTextureUnits=le,this.getTextureUnits=fe,this.setTextureUnits=Ce,this.setTexture2D=_e,this.setTexture2DArray=Re,this.setTexture3D=Fe,this.setTextureCube=we,this.rebindTextures=tn,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=L,this.dispose=G}function kS(t,e){function n(i,r=ji){let s;const a=st.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Ou)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===yp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===bp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===vp)return t.BYTE;if(i===xp)return t.SHORT;if(i===Ta)return t.UNSIGNED_SHORT;if(i===ku)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===Yn)return t.FLOAT;if(i===fi)return t.HALF_FLOAT;if(i===Sp)return t.ALPHA;if(i===Mp)return t.RGB;if(i===oi)return t.RGBA;if(i===rr)return t.DEPTH_COMPONENT;if(i===Ji)return t.DEPTH_STENCIL;if(i===zu)return t.RED;if(i===Bu)return t.RED_INTEGER;if(i===kr)return t.RG;if(i===$u)return t.RG_INTEGER;if(i===Hu)return t.RGBA_INTEGER;if(i===Io||i===Lo||i===No||i===Do)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Io)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Io)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Lo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Lc||i===Nc||i===Dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uc||i===kc||i===Oc||i===Fc||i===zc||i===Yo||i===Bc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uc||i===kc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Fc)return s.COMPRESSED_R11_EAC;if(i===zc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Yo)return s.COMPRESSED_RG11_EAC;if(i===Bc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$c||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===Zc||i===qc||i===jc||i===Yc||i===Kc||i===Jc||i===Qc||i===eu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$c)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Yc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===eu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tu||i===nu||i===iu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tu)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===iu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ru||i===su||i===Ko||i===au)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ru)return s.COMPRESSED_RED_RGTC1_EXT;if(i===su)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===au)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const OS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FS=`
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

}`;class zS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new zp(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Or({vertexShader:OS,fragmentShader:FS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xt(new Cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class BS extends Br{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new zS,m={},v=n.getContextAttributes();let M=null,b=null;const T=[],A=[],x=new Ze;let S=null,O=null;const N=new zn;N.viewport=new Pt;const R=new zn;R.viewport=new Pt;const $=[N,R],B=new J_;let C=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let _e=T[ae];return _e===void 0&&(_e=new Vl,T[ae]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ae){let _e=T[ae];return _e===void 0&&(_e=new Vl,T[ae]=_e),_e.getGripSpace()},this.getHand=function(ae){let _e=T[ae];return _e===void 0&&(_e=new Vl,T[ae]=_e),_e.getHandSpace()};function V(ae){const _e=A.indexOf(ae.inputSource);if(_e===-1)return;const Re=T[_e];Re!==void 0&&(Re.update(ae.inputSource,ae.frame,c||a),Re.dispatchEvent({type:ae.type,data:ae.inputSource}))}function H(){r.removeEventListener("select",V),r.removeEventListener("selectstart",V),r.removeEventListener("selectend",V),r.removeEventListener("squeeze",V),r.removeEventListener("squeezestart",V),r.removeEventListener("squeezeend",V),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",de);for(let ae=0;ae<T.length;ae++){const _e=A[ae];_e!==null&&(A[ae]=null,T[ae].disconnect(_e))}C=null,G=null,p.reset();for(const ae in m)delete m[ae];if(e.setRenderTarget(M),h=null,d=null,f=null,r=null,b=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(x.width,x.height,!1),O!==null){const ae=O.camera;ae.fov=O.fov,ae.zoom=O.zoom,ae.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){s=ae,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){o=ae,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ae){c=ae},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ae){if(r=ae,r!==null){if(M=e.getRenderTarget(),r.addEventListener("select",V),r.addEventListener("selectstart",V),r.addEventListener("selectend",V),r.addEventListener("squeeze",V),r.addEventListener("squeezestart",V),r.addEventListener("squeezeend",V),r.addEventListener("end",H),r.addEventListener("inputsourceschange",de),v.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Fe=null,we=null;v.depth&&(we=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=v.stencil?Ji:rr,Fe=v.stencil?bs:di);const He={colorFormat:n.RGBA8,depthFormat:we,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(He),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new ui(d.textureWidth,d.textureHeight,{format:oi,type:Nn,depthTexture:new Ss(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new ui(h.framebufferWidth,h.framebufferHeight,{format:oi,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function de(ae){for(let _e=0;_e<ae.removed.length;_e++){const Re=ae.removed[_e],Fe=A.indexOf(Re);Fe>=0&&(A[Fe]=null,T[Fe].disconnect(Re))}for(let _e=0;_e<ae.added.length;_e++){const Re=ae.added[_e];let Fe=A.indexOf(Re);if(Fe===-1){for(let He=0;He<T.length;He++)if(He>=A.length){A.push(Re),Fe=He;break}else if(A[He]===null){A[He]=Re,Fe=He;break}if(Fe===-1)break}const we=T[Fe];we&&we.connect(Re)}}function K(ae,_e){_e===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(_e.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(r===null)return;let _e=ae.near,Re=ae.far;p.texture!==null&&(p.depthNear>0&&(_e=p.depthNear),p.depthFar>0&&(Re=p.depthFar)),B.near=R.near=N.near=_e,B.far=R.far=N.far=Re,(C!==B.near||G!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),C=B.near,G=B.far),B.layers.mask=ae.layers.mask|6,N.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;const Fe=ae.parent,we=B.cameras;K(B,Fe);for(let He=0;He<we.length;He++)K(we[He],Fe);B.projectionMatrix.copy(N.projectionMatrix),B.projectionMatrixInverse.copy(N.projectionMatrixInverse),O===null&&ae.isPerspectiveCamera&&(O={camera:ae,fov:ae.fov,zoom:ae.zoom}),le(ae,B,Fe)};function le(ae,_e,Re){Re===null?ae.matrix.copy(_e.matrixWorld):(ae.matrix.copy(Re.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(_e.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(_e.projectionMatrix),ae.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Ra*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(ae){l=ae,d!==null&&(d.fixedFoveation=ae),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=ae)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(ae){return m[ae]};let fe=null;function Ce(ae,_e){if(u=_e.getViewerPose(c||a),g=_e,u!==null){const Re=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Fe=!1;Re.length!==B.cameras.length&&(B.cameras.length=0,Fe=!0);for(let ze=0;ze<Re.length;ze++){const et=Re[ze];let ot=null;if(h!==null)ot=h.getViewport(et);else{const At=f.getViewSubImage(d,et);ot=At.viewport,ze===0&&(e.setRenderTargetTextures(b,At.colorTexture,At.depthStencilTexture),e.setRenderTarget(b))}let qe=$[ze];qe===void 0&&(qe=new zn,qe.layers.enable(ze),qe.viewport=new Pt,$[ze]=qe),qe.matrix.fromArray(et.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(et.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(ot.x,ot.y,ot.width,ot.height),ze===0&&(B.matrix.copy(qe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Fe===!0&&B.cameras.push(qe)}const we=r.enabledFeatures;if(we&&we.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const ze=f.getDepthInformation(Re[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<Re.length;ze++){const et=Re[ze].camera;if(et){let ot=m[et];ot||(ot=new zp,m[et]=ot);const qe=f.getCameraImage(et);ot.sourceTexture=qe}}}}for(let Re=0;Re<T.length;Re++){const Fe=A[Re],we=T[Re];Fe!==null&&we!==void 0&&we.update(Fe,_e,c||a)}fe&&fe(ae,_e),_e.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:_e}),g=null}const $e=new Vp;$e.setAnimationLoop(Ce),this.setAnimationLoop=function(ae){fe=ae},this.dispose=function(){}}}const $S=new yt,em=new We;em.set(-1,0,0,0,1,0,0,0,1);function HS(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Bp(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,M,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===xn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===xn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),M=v.envMap,b=v.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4($S.makeRotationFromEuler(b)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(em),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=M*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,n(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===xn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function GS(t,e,n,i){let r={},s={};function a(v,M){const b=M.program;i.uniformBlockBinding(v,b,r[v.id])}function o(v,M){let b=r[v.id];b===void 0&&(g(v),b=l(v),r[v.id]=b,v.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(v,T);const A=e.render.frame;s[v.id]!==A&&(c(v),s[v.id]=A)}function l(v){const M=t.createBuffer(),b=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,M),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),M}function c(v){const M=r[v.id],b=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,M);for(let A=0,x=b.length;A<x;A++){const S=b[A];if(Array.isArray(S))for(let O=0,N=S.length;O<N;O++)u(S[O],A,O,T);else u(S,A,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(v,M,b,T){if(d(v,M,b,T)===!0){const A=v.__offset,x=v.value;if(Array.isArray(x)){let S=0;for(let O=0;O<x.length;O++){const N=x[O],R=_(N,!0);f(N,v.__data,S),S+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(x,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,v.__data)}}function f(v,M,b){typeof v=="number"||typeof v=="boolean"?M[b]=v:v.isMatrix3?(M[b]=v.elements[0],M[b+1]=v.elements[1],M[b+2]=v.elements[2],M[b+3]=0,M[b+4]=v.elements[3],M[b+5]=v.elements[4],M[b+6]=v.elements[5],M[b+7]=0,M[b+8]=v.elements[6],M[b+9]=v.elements[7],M[b+10]=v.elements[8],M[b+11]=0):ArrayBuffer.isView(v)?M.set(v.subarray(0,M.length-b),b):v.toArray(M,b)}function d(v,M,b,T){const A=v.value,x=M+"_"+b;if(Array.isArray(A)){T[x]===void 0&&(T[x]=[]);const S=T[x];let O=!1;for(let N=0;N<A.length;N++)h(A[N],S,N)===!0&&(O=!0);return O}return h(A,T,x)}function h(v,M,b){if(M[b]===void 0)return typeof v=="number"||typeof v=="boolean"?M[b]=v:ArrayBuffer.isView(v)?M[b]=v.slice():M[b]=v.clone(),!0;{const T=M[b];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return M[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){const M=v.uniforms;let b=0;const T=16;for(let x=0,S=M.length;x<S;x++){const O=Array.isArray(M[x])?M[x]:[M[x]];for(let N=0,R=O.length;N<R;N++){const $=O[N],B=Array.isArray($.value)?$.value:[$.value],C=Array.isArray(M[x])||Array.isArray($.value);let G=b;for(let H=0,de=B.length;H<de;H++){const K=B[H],le=_(K,C),fe=b%T,Ce=fe%le.boundary,$e=fe+Ce;b+=Ce,$e!==0&&T-$e<le.storage&&(b+=T-$e),H===0&&(G=b),b+=le.storage}const V=$.type==="int"?Int32Array:$.type==="uint"?Uint32Array:Float32Array;$.__data=new V((b-G)/Float32Array.BYTES_PER_ELEMENT),$.__offset=G}}const A=b%T;return A>0&&(b+=T-A),v.__size=b,v.__cache={},this}function _(v,M){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",v),M===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(v){const M=v.target;M.removeEventListener("dispose",p),t.deleteBuffer(r[M.id]),delete r[M.id],delete s[M.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);r={},s={}}return{bind:a,update:o,dispose:m}}const VS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function WS(){return ni===null&&(ni=new kp(VS,16,16,kr,fi),ni.name="DFG_LUT",ni.minFilter=En,ni.magFilter=En,ni.wrapS=wi,ni.wrapT=wi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class XS{constructor(e={}){const{canvas:n=Y0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Nn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=h,p=new Set([Hu,$u,Bu]),m=new Set([Nn,di,Ta,bs,Ou,Fu]),v=new Uint32Array(4),M=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let T=null,A=null;const x=[],S=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let R=!1,$=null,B=null,C=null,G=null;this._outputColorSpace=Wt;let V=0,H=0,de=null,K=-1,le=null;const fe=new Pt,Ce=new Pt;let $e=null;const ae=new Ye(0);let _e=0,Re=n.width,Fe=n.height,we=1,He=null,gt=null;const ze=new Pt(0,0,Re,Fe),et=new Pt(0,0,Re,Fe);let ot=!1;const qe=new Ca,At=new qu;let ct=!1,Lt=!1;const _t=new yt,Yt=new k,Et=new Pt,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tn=!1;function Le(){return de===null?we:1}let z=i;function Ut(E,F){return n.getContext(E,F)}let ut,D,L,ee,ne,se,w,y,P,Z,U,oe,ue,Q,re,he,I,ie,j,ge,pe,me,xe;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Du}`),n.addEventListener("webglcontextlost",Ie,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",ye,!1),z===null){const F="webgl2";if(z=Ut(F,E),z===null)throw Ut(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ke()}catch(E){throw n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),ft("WebGLRenderer: "+E.message),E}function ke(){ut=new jy(z),ut.init(),pe=new kS(z,ut),D=new Fy(z,ut,e,pe),L=new DS(z,ut),D.reversedDepthBuffer&&d&&L.buffers.depth.setReversed(!0),B=z.createFramebuffer(),C=z.createFramebuffer(),G=z.createFramebuffer(),ee=new Jy(z),ne=new yS,se=new US(z,ut,L,ne,D,pe,ee),w=new qy(N),y=new ev(z),me=new ky(z,y),P=new Yy(z,y,ee,me),Z=new eb(z,P,y,me,ee),ie=new Qy(z,D,se),re=new zy(ne),U=new xS(N,w,ut,D,me,re),oe=new HS(N,ne),ue=new SS,Q=new RS(ut),I=new Uy(N,w,L,Z,g,l),he=new NS(N,Z,D),xe=new GS(z,ee,D,L),j=new Oy(z,ut,ee),ge=new Ky(z,ut,ee),ee.programs=U.programs,N.capabilities=D,N.extensions=ut,N.properties=ne,N.renderLists=ue,N.shadowMap=he,N.state=L,N.info=ee}_!==Nn&&(O=new nb(_,n.width,n.height,o,r,s));const W=new BS(N,z);this.xr=W,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(E){E!==void 0&&(we=E,this.setSize(Re,Fe,!1))},this.getSize=function(E){return E.set(Re,Fe)},this.setSize=function(E,F,J=!0){if(W.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=E,Fe=F,n.width=Math.floor(E*we),n.height=Math.floor(F*we),J===!0&&(n.style.width=E+"px",n.style.height=F+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Re*we,Fe*we).floor()},this.setDrawingBufferSize=function(E,F,J){Re=E,Fe=F,we=J,n.width=Math.floor(E*J),n.height=Math.floor(F*J),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(_===Nn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(fe)},this.getViewport=function(E){return E.copy(ze)},this.setViewport=function(E,F,J,X){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,F,J,X),L.viewport(fe.copy(ze).multiplyScalar(Le()).round())},this.getScissor=function(E){return E.copy(et)},this.setScissor=function(E,F,J,X){E.isVector4?et.set(E.x,E.y,E.z,E.w):et.set(E,F,J,X),L.scissor(Ce.copy(et).multiplyScalar(Le()).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){L.setScissorTest(ot=E)},this.setOpaqueSort=function(E){He=E},this.setTransparentSort=function(E){gt=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,J=!0){let X=0;if(E){let q=!1;if(de!==null){const Se=de.texture.format;q=p.has(Se)}if(q){const Se=de.texture.type,Ne=m.has(Se),be=I.getClearColor(),Pe=I.getClearAlpha(),Oe=be.r,Xe=be.g,tt=be.b;Ne?(v[0]=Oe,v[1]=Xe,v[2]=tt,v[3]=Pe,z.clearBufferuiv(z.COLOR,0,v)):(M[0]=Oe,M[1]=Xe,M[2]=tt,M[3]=Pe,z.clearBufferiv(z.COLOR,0,M))}else X|=z.COLOR_BUFFER_BIT}F&&(X|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),X!==0&&z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),$=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Ie,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",ye,!1),I.dispose(),ue.dispose(),Q.dispose(),se.dispose(),ne.dispose(),w.dispose(),Z.dispose(),P.dispose(),me.dispose(),xe.dispose(),U.dispose(),W.dispose(),W.removeEventListener("sessionstart",Hs),W.removeEventListener("sessionend",Je),nn.stop()};function Ie(E){E.preventDefault(),tl("WebGLRenderer: Context Lost."),R=!0}function Ge(){tl("WebGLRenderer: Context Restored."),R=!1;const E=ee.autoReset,F=he.enabled,J=he.autoUpdate,X=he.needsUpdate,q=he.type;ke(),ee.autoReset=E,he.enabled=F,he.autoUpdate=J,he.needsUpdate=X,he.type=q}function ye(E){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function dt(E){const F=E.target;F.removeEventListener("dispose",dt),Rt(F)}function Rt(E){ei(E),ne.remove(E)}function ei(E){const F=ne.get(E).programs;F!==void 0&&(F.forEach(function(J){U.releaseProgram(J)}),E.isShaderMaterial&&U.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,J,X,q,Se){F===null&&(F=$t);const Ne=q.isMesh&&q.matrixWorld.determinantAffine()<0,be=d0(E,F,J,X,q);L.setMaterial(X,Ne);let Pe=J.index,Oe=1;if(X.wireframe===!0){if(Pe=P.getWireframeAttribute(J),Pe===void 0)return;Oe=2}const Xe=J.drawRange,tt=J.attributes.position;let De=Xe.start*Oe,nt=(Xe.start+Xe.count)*Oe;Se!==null&&(De=Math.max(De,Se.start*Oe),nt=Math.min(nt,(Se.start+Se.count)*Oe)),Pe!==null?(De=Math.max(De,0),nt=Math.min(nt,Pe.count)):tt!=null&&(De=Math.max(De,0),nt=Math.min(nt,tt.count));const Ht=nt-De;if(Ht<0||Ht===1/0)return;me.setup(q,X,be,J,Pe);let bt,vt=j;if(Pe!==null&&(bt=y.get(Pe),vt=ge,vt.setIndex(bt)),q.isMesh)X.wireframe===!0?(L.setLineWidth(X.wireframeLinewidth*Le()),vt.setMode(z.LINES)):vt.setMode(z.TRIANGLES);else if(q.isLine){let on=X.linewidth;on===void 0&&(on=1),L.setLineWidth(on*Le()),q.isLineSegments?vt.setMode(z.LINES):q.isLineLoop?vt.setMode(z.LINE_LOOP):vt.setMode(z.LINE_STRIP)}else q.isPoints?vt.setMode(z.POINTS):q.isSprite&&vt.setMode(z.TRIANGLES);if(q.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))vt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const on=q._multiDrawStarts,Ue=q._multiDrawCounts,mn=q._multiDrawCount,ht=Pe?y.get(Pe).bytesPerElement:1,mr=ne.get(X).currentProgram.getUniforms();for(let ln=0;ln<mn;ln++)mr.setValue(z,"_gl_DrawID",ln),vt.render(on[ln]/ht,Ue[ln])}else if(q.isInstancedMesh)vt.renderInstances(De,Ht,q.count);else if(J.isInstancedBufferGeometry){const on=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ue=Math.min(J.instanceCount,on);vt.renderInstances(De,Ht,Ue)}else vt.render(De,Ht)};function Vr(E,F,J,X){$!==null&&E.isNodeMaterial&&$.setObject(X,E),ct===!0&&re.setState(E,J,!1),E.transparent===!0&&E.side===Ln&&E.forceSinglePass===!1?(E.side=xn,E.needsUpdate=!0,hr(E,F,X),E.side=Ur,E.needsUpdate=!0,hr(E,F,X),E.side=Ln):hr(E,F,X)}this.compile=function(E,F,J=null){J===null&&(J=E),$!==null&&$.renderStart(E,F,J),A=Q.get(J),A.init(F),S.push(A),J.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),E!==J&&E.traverseVisible(function(q){q.isLight&&q.layers.test(F.layers)&&(A.pushLight(q),q.castShadow&&A.pushShadow(q))}),A.setupLights(),$!==null&&$.updateLights(A.state.lightsArray),Lt=this.localClippingEnabled,ct=re.init(this.clippingPlanes,Lt),ct===!0&&re.setGlobalState(this.clippingPlanes,F),$!==null&&he.render(A.state.shadowsArray,J,F);const X=new Set;return E.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Se=q.material;if(Se)if(Array.isArray(Se))for(let Ne=0;Ne<Se.length;Ne++){const be=Se[Ne];Vr(be,J,F,q),X.add(be)}else Vr(Se,J,F,q),X.add(Se)}),A=S.pop(),$!==null&&$.renderEnd(),X},this.compileAsync=function(E,F,J=null){const X=this.compile(E,F,J);return new Promise(q=>{function Se(){if(X.forEach(function(Ne){const Pe=ne.get(Ne).currentProgram;(Pe===void 0||Pe.isReady())&&X.delete(Ne)}),X.size===0){q(E);return}setTimeout(Se,10)}ut.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ui=null;function ur(E){Ui&&Ui(E)}function Hs(){nn.stop()}function Je(){nn.start()}const nn=new Vp;nn.setAnimationLoop(ur),typeof self<"u"&&nn.setContext(self),this.setAnimationLoop=function(E){Ui=E,W.setAnimationLoop(E),E===null?nn.stop():nn.start()},W.addEventListener("sessionstart",Hs),W.addEventListener("sessionend",Je),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;$!==null&&$.renderStart(E,F);const J=W.enabled===!0&&W.isPresenting===!0,X=O!==null&&(de===null||J)&&O.begin(N,de);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),W.enabled===!0&&W.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(W.cameraAutoUpdate===!0&&W.updateCamera(F),F=W.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,F,de),A=Q.get(E,S.length),A.init(F),A.state.textureUnits=se.getTextureUnits(),S.push(A),_t.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?At.setFromArrayCamera(F):qe.setFromProjectionMatrix(_t,Kn,F.reversedDepth),Lt=this.localClippingEnabled,ct=re.init(this.clippingPlanes,Lt),T=ue.get(E,x.length),T.init(),x.push(T),this.info.render.frame++,W.enabled===!0&&W.isPresenting===!0){const Ne=N.xr.getDepthSensingMesh();Ne!==null&&dr(Ne,F,-1/0,N.sortObjects)}dr(E,F,0,N.sortObjects),T.finish(),$!==null&&$.updateLights(A.state.lightsArray),N.sortObjects===!0&&T.sort(He,gt),tn=W.enabled===!1||W.isPresenting===!1||W.hasDepthSensing()===!1,tn&&I.addToRenderList(T,E),this.info.autoReset===!0&&this.info.reset(),ct===!0&&re.beginShadows();const q=A.state.shadowsArray;if(he.render(q,E,F),ct===!0&&re.endShadows(),(X&&O.hasRenderPass())===!1){const Ne=T.opaque,be=T.transmissive;if(A.setupLights(),F.isArrayCamera){const Pe=F.cameras;if(be.length>0)for(let Oe=0,Xe=Pe.length;Oe<Xe;Oe++){const tt=Pe[Oe];Gs(Ne,be,E,tt)}tn&&I.render(E);for(let Oe=0,Xe=Pe.length;Oe<Xe;Oe++){const tt=Pe[Oe];gi(T,E,tt,tt.viewport)}}else be.length>0&&Gs(Ne,be,E,F),tn&&I.render(E),gi(T,E,F)}de!==null&&H===0&&(se.updateMultisampleRenderTarget(de),se.updateRenderTargetMipmap(de)),X&&O.end(N),E.isScene===!0&&E.onAfterRender(N,E,F),me.resetDefaultState(),K=-1,le=null,S.pop(),S.length>0?(A=S[S.length-1],se.setTextureUnits(A.state.textureUnits),ct===!0&&re.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,$!==null&&$.renderEnd()};function dr(E,F,J,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)J=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){const Ne=F.isArrayCamera?At:qe;if(!E.frustumCulled||E.intersectsFrustum(Ne)){X&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);const be=Z.update(E),Pe=E.material;Pe.visible&&T.push(E,be,Pe,J,Et.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){const Ne=F.isArrayCamera?At:qe;if(!E.frustumCulled||E.intersectsFrustum(Ne)){const be=Z.update(E),Pe=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Et.copy(be.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Pe)){const Oe=be.groups;for(let Xe=0,tt=Oe.length;Xe<tt;Xe++){const De=Oe[Xe],nt=Pe[De.materialIndex];nt&&nt.visible&&T.push(E,be,nt,J,Et.z,De,F)}}else Pe.visible&&T.push(E,be,Pe,J,Et.z,null,F)}}}const Se=E.children;for(let Ne=0,be=Se.length;Ne<be;Ne++)dr(Se[Ne],F,J,X)}function gi(E,F,J,X){const{opaque:q,transmissive:Se,transparent:Ne}=E;A.setupLightsView(J),ct===!0&&re.setGlobalState(N.clippingPlanes,J),X&&L.viewport(fe.copy(X)),q.length>0&&fr(q,F,J),Se.length>0&&fr(Se,F,J),Ne.length>0&&fr(Ne,F,J),L.buffers.depth.setTest(!0),L.buffers.depth.setMask(!0),L.buffers.color.setMask(!0),L.setPolygonOffset(!1)}function Gs(E,F,J,X){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[X.id]===void 0){const De=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[X.id]=new ui(1,1,{generateMipmaps:!0,type:De?fi:Nn,minFilter:Ki,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:st.workingColorSpace})}const Se=A.state.transmissionRenderTarget[X.id],Ne=X.viewport||fe;Se.setSize(Ne.z*N.transmissionResolutionScale,Ne.w*N.transmissionResolutionScale);const be=N.getRenderTarget(),Pe=N.getActiveCubeFace(),Oe=N.getActiveMipmapLevel();N.setRenderTarget(Se),N.getClearColor(ae),_e=N.getClearAlpha(),_e<1&&N.setClearColor(16777215,.5),N.clear(),tn&&I.render(J);const Xe=N.toneMapping;N.toneMapping=Ri;const tt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),A.setupLightsView(X),ct===!0&&re.setGlobalState(N.clippingPlanes,X),fr(E,J,X),se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se),ut.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let nt=0,Ht=F.length;nt<Ht;nt++){const bt=F[nt],{object:vt,geometry:on,material:Ue,group:mn}=bt;if(Ue.side===Ln&&vt.layers.test(X.layers)){const ht=Ue.side;Ue.side=xn,Ue.needsUpdate=!0,Va(vt,J,X,on,Ue,mn),Ue.side=ht,Ue.needsUpdate=!0,De=!0}}De===!0&&(se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se))}N.setRenderTarget(be,Pe,Oe),N.setClearColor(ae,_e),tt!==void 0&&(X.viewport=tt),N.toneMapping=Xe}function fr(E,F,J){const X=F.isScene===!0?F.overrideMaterial:null;for(let q=0,Se=E.length;q<Se;q++){const Ne=E[q],{object:be,geometry:Pe,group:Oe}=Ne;let Xe=Ne.material;Xe.allowOverride===!0&&X!==null&&(Xe=X),be.layers.test(J.layers)&&Va(be,F,J,Pe,Xe,Oe)}}function Va(E,F,J,X,q,Se){$!==null&&q.isNodeMaterial&&$.setObject(E,q),E.onBeforeRender(N,F,J,X,q,Se),E.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),q.onBeforeRender(N,F,J,X,E,Se),q.transparent===!0&&q.side===Ln&&q.forceSinglePass===!1?(q.side=xn,q.needsUpdate=!0,N.renderBufferDirect(J,F,X,q,E,Se),q.side=Ur,q.needsUpdate=!0,N.renderBufferDirect(J,F,X,q,E,Se),q.side=Ln):N.renderBufferDirect(J,F,X,q,E,Se),E.onAfterRender(N,F,J,X,q,Se)}function Wa(E){let F=0;for(const J of E)J.texture!==null&&F++;return F}function hr(E,F,J){F.isScene!==!0&&(F=$t);const X=ne.get(E),q=A.state.lights,Se=A.state.shadowsArray,Ne=q.state.version,be=U.getParameters(E,q.state,Se,F,J,A.state.lightProbeGridArray),Pe=U.getProgramCacheKey(be);let Oe=X.programs;X.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,X.fog=F.fog;const Xe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;X.envMap=w.get(E.envMap||X.environment,Xe),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",dt),Oe=new Map,X.programs=Oe,X.programVariants=new Map);let tt=Oe.get(Pe);if(tt!==void 0){if(X.currentProgram===tt&&X.lightsStateVersion===Ne)return Vs(E,be),tt}else be.uniforms=U.getUniforms(E),$!==null&&E.isNodeMaterial&&$.build(E,J,be),E.onBeforeCompile(be,N),tt=U.acquireProgram(be,Pe),Oe.set(Pe,tt),X.uniforms=be.uniforms;const De=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(De.clippingPlanes=re.uniform),Vs(E,be),X.needsLights=h0(E),X.lightsStateVersion=Ne,X.needsLights&&(De.ambientLightColor.value=q.state.ambient,De.lightProbe.value=q.state.probe,De.sunLights.value=q.state.sun,De.sunLightShadows.value=q.state.sunShadow,De.directionalLights.value=q.state.directional,De.directionalLightShadows.value=q.state.directionalShadow,De.spotLights.value=q.state.spot,De.spotLightShadows.value=q.state.spotShadow,De.rectAreaLights.value=q.state.rectArea,De.ltc_1.value=q.state.rectAreaLTC1,De.ltc_2.value=q.state.rectAreaLTC2,De.pointLights.value=q.state.point,De.pointLightShadows.value=q.state.pointShadow,De.hemisphereLights.value=q.state.hemi,De.sunShadowMatrix.value=q.state.sunShadowMatrix,De.sunShadowCascade.value=q.state.sunShadowCascade,De.directionalShadowMatrix.value=q.state.directionalShadowMatrix,De.spotLightMatrix.value=q.state.spotLightMatrix,De.spotLightMap.value=q.state.spotLightMap,De.pointShadowMatrix.value=q.state.pointShadowMatrix),X.numLightProbeGrids=Wa(A.state.lightProbeGridArray),X.currentProgram=tt,X.uniformsList=null,tt}function Xa(E,F,J,X,q){const Se=ne.get(E),Ne=Se.currentProgram.id+","+X+","+q;let be=Se.programVariants.get(Ne);return be===void 0?(be=hr(E,F,J),Se.programVariants.set(Ne,be)):(Se.currentProgram=be,Se.uniformsList=null,Se.outputColorSpace=X,Se.toneMapping=q),be}function pr(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Oo.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Vs(E,F){const J=ne.get(E);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function d0(E,F,J,X,q){F.isScene!==!0&&(F=$t),se.resetTextureUnits();const Se=F.fog,Ne=X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial?F.environment:null,be=de===null?N.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:st.workingColorSpace,Pe=X.isMeshStandardMaterial||X.isMeshLambertMaterial&&!X.envMap||X.isMeshPhongMaterial&&!X.envMap,Oe=w.get(X.envMap||Ne,Pe),Xe=X.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,tt=!!J.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),De=!!J.morphAttributes.position,nt=!!J.morphAttributes.normal,Ht=!!J.morphAttributes.color;let bt=Ri;X.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(bt=N.toneMapping);const vt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,on=vt!==void 0?vt.length:0,Ue=ne.get(X),mn=A.state.lights;if(ct===!0&&(Lt===!0||E!==le)){const Ct=E===le&&X.id===K;re.setState(X,E,Ct)}let ht=!1,mr=!1;X.version===Ue.__version?Ue.needsLights&&Ue.lightsStateVersion!==mn.state.version||q.isBatchedMesh&&Ue.batching===!1||!q.isBatchedMesh&&Ue.batching===!0||q.isBatchedMesh&&Ue.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&Ue.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&Ue.instancing===!1||!q.isInstancedMesh&&Ue.instancing===!0||q.isSkinnedMesh&&Ue.skinning===!1||!q.isSkinnedMesh&&Ue.skinning===!0||q.isInstancedMesh&&Ue.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ue.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ue.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ue.instancingMorph===!1&&q.morphTexture!==null||Ue.envMap!==Oe||X.fog===!0&&Ue.fog!==Se||Ue.numClippingPlanes!==void 0&&(Ue.numClippingPlanes!==re.numPlanes||Ue.numIntersection!==re.numIntersection)||Ue.vertexAlphas!==Xe||Ue.vertexTangents!==tt||Ue.morphTargets!==De||Ue.morphNormals!==nt||Ue.morphColors!==Ht||Ue.morphTargetsCount!==on||Ue.numLightProbeGrids!==Wa(A.state.lightProbeGridArray)?ht=!0:(Ue.outputColorSpace!==be||Ue.toneMapping!==bt)&&(mr=!0):(ht=!0,Ue.__version=X.version);let ln=Ue.currentProgram;(ht===!0||mr===!0)&&(ln=mr===!0?Xa(X,F,q,be,bt):hr(X,F,q),$&&X.isNodeMaterial&&$.onUpdateProgram(X,ln,Ue));let Za=!1,ki=!1,gr=!1;const lt=ln.getUniforms(),rn=Ue.uniforms;if(L.useProgram(ln.program)&&(Za=!0,ki=!0,gr=!0),X.id!==K&&(K=X.id,ki=!0),Za||le!==E){L.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(z,"projectionMatrix",E.projectionMatrix),lt.setValue(z,"viewMatrix",E.matrixWorldInverse);const Kt=lt.map.cameraPosition;Kt!==void 0&&Kt.setValue(z,Yt.setFromMatrixPosition(E.matrixWorld)),D.logarithmicDepthBuffer&&lt.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&lt.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),le!==E&&(le=E,ki=!0,gr=!0)}if(Ue.needsLights&&(mn.state.sunShadowMap.length>0&&lt.setValue(z,"sunShadowMap",mn.state.sunShadowMap,se),mn.state.directionalShadowMap.length>0&&lt.setValue(z,"directionalShadowMap",mn.state.directionalShadowMap,se),mn.state.spotShadowMap.length>0&&lt.setValue(z,"spotShadowMap",mn.state.spotShadowMap,se),mn.state.pointShadowMap.length>0&&lt.setValue(z,"pointShadowMap",mn.state.pointShadowMap,se)),q.isSkinnedMesh){lt.setOptional(z,q,"bindMatrix"),lt.setOptional(z,q,"bindMatrixInverse");const Ct=q.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),lt.setValue(z,"boneTexture",Ct.boneTexture,se))}q.isBatchedMesh&&(lt.setOptional(z,q,"batchingTexture"),lt.setValue(z,"batchingTexture",q._matricesTexture,se),lt.setOptional(z,q,"batchingIdTexture"),lt.setValue(z,"batchingIdTexture",q._indirectTexture,se),lt.setOptional(z,q,"batchingColorTexture"),q._colorsTexture!==null&&lt.setValue(z,"batchingColorTexture",q._colorsTexture,se));const Wn=J.morphAttributes;if((Wn.position!==void 0||Wn.normal!==void 0||Wn.color!==void 0)&&ie.update(q,J,ln),(ki||Ue.receiveShadow!==q.receiveShadow)&&(Ue.receiveShadow=q.receiveShadow,lt.setValue(z,"receiveShadow",q.receiveShadow)),(X.isMeshStandardMaterial||X.isMeshLambertMaterial||X.isMeshPhongMaterial)&&X.envMap===null&&F.environment!==null&&(rn.envMapIntensity.value=F.environmentIntensity),rn.dfgLUT!==void 0&&(rn.dfgLUT.value=WS()),ki){if(lt.setValue(z,"toneMappingExposure",N.toneMappingExposure),Ue.needsLights&&f0(rn,gr),Se&&X.fog===!0&&oe.refreshFogUniforms(rn,Se),oe.refreshMaterialUniforms(rn,X,we,Fe,A.state.transmissionRenderTarget[E.id]),Ue.needsLights&&Ue.numLightProbeGrids>0){const Ct=b;let Kt=0;for(const _i of A.state.lightProbeGridArray)_i.texture!==null&&(Ct.textures[Kt]=_i.texture,Ct.min[Kt]=_i.boundingBox.min,Ct.max[Kt]=_i.boundingBox.max,Ct.resolution[Kt]=_i.resolution,Kt++);for(const _i in Ct)Ct[_i].length=Kt;rn.probesSH.value=Ct.textures,rn.probesMin.value=Ct.min,rn.probesMax.value=Ct.max,rn.probesResolution.value=Ct.resolution}Oo.upload(z,pr(Ue),rn,se)}if(X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Oo.upload(z,pr(Ue),rn,se),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&lt.setValue(z,"center",q.center),lt.setValue(z,"modelViewMatrix",q.modelViewMatrix),lt.setValue(z,"normalMatrix",q.normalMatrix),lt.setValue(z,"modelMatrix",q.matrixWorld),X.uniformsGroups!==void 0){const Ct=X.uniformsGroups;for(let Kt=0,_i=Ct.length;Kt<_i;Kt++){const zd=Ct[Kt];xe.update(zd,ln),xe.bind(zd,ln)}}return ln}function f0(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function h0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(E,F,J){const X=ne.get(E);X.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),ne.get(E.texture).__webglTexture=F,ne.get(E.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:J,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const J=ne.get(E);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,J=0){de=E,V=F,H=J;let X=null,q=!1,Se=!1;if(E){const be=ne.get(E);if(be.__useDefaultFramebuffer!==void 0){L.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),fe.copy(E.viewport),Ce.copy(E.scissor),$e=E.scissorTest,L.viewport(fe),L.scissor(Ce),L.setScissorTest($e),K=-1;return}else if(be.__webglFramebuffer===void 0)se.setupRenderTarget(E);else if(be.__hasExternalTextures)se.rebindTextures(E,ne.get(E.texture).__webglTexture,ne.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Xe=E.depthTexture;if(be.__boundDepthTexture!==Xe){if(Xe!==null&&ne.has(Xe)&&(E.width!==Xe.image.width||E.height!==Xe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(Se=!0);const Oe=ne.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[F])?X=Oe[F][J]:X=Oe[F],q=!0):E.samples>0&&se.useMultisampledRTT(E)===!1?X=ne.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?X=Oe[J]:X=Oe,fe.copy(E.viewport),Ce.copy(E.scissor),$e=E.scissorTest}else fe.copy(ze).multiplyScalar(we).floor(),Ce.copy(et).multiplyScalar(we).floor(),$e=ot;if(J!==0&&(X=B),L.bindFramebuffer(z.FRAMEBUFFER,X)&&L.drawBuffers(E,X),L.viewport(fe),L.scissor(Ce),L.setScissorTest($e),q){const be=ne.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,be.__webglTexture,J)}else if(Se){const be=F;for(let Pe=0;Pe<E.textures.length;Pe++){const Oe=ne.get(E.textures[Pe]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Pe,Oe.__webglTexture,J,be)}}else if(E!==null&&J!==0){const be=ne.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,J)}K=-1};function Fd(E){const F=ne.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=D.textureFormatReadable(E.format),F.__typeReadable=D.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,J,X,q,Se,Ne,be=0){if(!(E&&E.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe){L.bindFramebuffer(z.FRAMEBUFFER,Pe);try{const Oe=E.textures[be],Xe=Oe.format,tt=Oe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const De=Fd(Oe);if(De.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(De.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&J>=0&&J<=E.height-q&&z.readPixels(F,J,X,q,pe.convert(Xe),pe.convert(tt),Se)}finally{const Oe=de!==null?ne.get(de).__webglFramebuffer:null;L.bindFramebuffer(z.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,F,J,X,q,Se,Ne,be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=ne.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ne!==void 0&&(Pe=Pe[Ne],Array.isArray(Pe)&&(Pe=Pe[0])),Pe)if(F>=0&&F<=E.width-X&&J>=0&&J<=E.height-q){L.bindFramebuffer(z.FRAMEBUFFER,Pe);const Oe=E.textures[be],Xe=Oe.format,tt=Oe.type;E.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const De=Fd(Oe);if(De.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(De.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,nt),z.bufferData(z.PIXEL_PACK_BUFFER,Se.byteLength,z.STREAM_READ),z.readPixels(F,J,X,q,pe.convert(Xe),pe.convert(tt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Ht=de!==null?ne.get(de).__webglFramebuffer:null;L.bindFramebuffer(z.FRAMEBUFFER,Ht);const bt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await K0(z,bt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,nt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Se),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(nt),z.deleteSync(bt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,J=0){const X=Math.pow(2,-J),q=Math.floor(E.image.width*X),Se=Math.floor(E.image.height*X),Ne=F!==null?F.x:0,be=F!==null?F.y:0;se.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Ne,be,q,Se),L.unbindTexture()},this.copyTextureToTexture=function(E,F,J=null,X=null,q=0,Se=0){let Ne,be,Pe,Oe,Xe,tt,De,nt,Ht;const bt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(J!==null)Ne=J.max.x-J.min.x,be=J.max.y-J.min.y,Pe=J.isBox3?J.max.z-J.min.z:1,Oe=J.min.x,Xe=J.min.y,tt=J.isBox3?J.min.z:0;else{const lt=Math.pow(2,-q);Ne=Math.floor(bt.width*lt),be=Math.floor(bt.height*lt),E.isDataArrayTexture?Pe=bt.depth:E.isData3DTexture?Pe=Math.floor(bt.depth*lt):Pe=1,Oe=0,Xe=0,tt=0}X!==null?(De=X.x,nt=X.y,Ht=X.z):(De=0,nt=0,Ht=0);const vt=pe.convert(F.format),on=pe.convert(F.type);let Ue;F.isData3DTexture?(se.setTexture3D(F,0),Ue=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(se.setTexture2DArray(F,0),Ue=z.TEXTURE_2D_ARRAY):(se.setTexture2D(F,0),Ue=z.TEXTURE_2D),L.activeTexture(z.TEXTURE0),L.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),L.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),L.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);const mn=L.getParameter(z.UNPACK_ROW_LENGTH),ht=L.getParameter(z.UNPACK_IMAGE_HEIGHT),mr=L.getParameter(z.UNPACK_SKIP_PIXELS),ln=L.getParameter(z.UNPACK_SKIP_ROWS),Za=L.getParameter(z.UNPACK_SKIP_IMAGES);L.pixelStorei(z.UNPACK_ROW_LENGTH,bt.width),L.pixelStorei(z.UNPACK_IMAGE_HEIGHT,bt.height),L.pixelStorei(z.UNPACK_SKIP_PIXELS,Oe),L.pixelStorei(z.UNPACK_SKIP_ROWS,Xe),L.pixelStorei(z.UNPACK_SKIP_IMAGES,tt);const ki=E.isDataArrayTexture||E.isData3DTexture,gr=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const lt=ne.get(E),rn=ne.get(F),Wn=ne.get(lt.__renderTarget),Ct=ne.get(rn.__renderTarget);L.bindFramebuffer(z.READ_FRAMEBUFFER,Wn.__webglFramebuffer),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Kt=0;Kt<Pe;Kt++)ki&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ne.get(E).__webglTexture,q,tt+Kt),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ne.get(F).__webglTexture,Se,Ht+Kt)),z.blitFramebuffer(Oe,Xe,Oe+Ne,Xe+be,De,nt,De+Ne,nt+be,z.DEPTH_BUFFER_BIT,z.NEAREST);L.bindFramebuffer(z.READ_FRAMEBUFFER,null),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(q!==0||E.isRenderTargetTexture||ne.has(E)){const lt=ne.get(E),rn=ne.get(F);L.bindFramebuffer(z.READ_FRAMEBUFFER,C),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let Wn=0;Wn<Pe;Wn++)ki?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,lt.__webglTexture,q,tt+Wn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,lt.__webglTexture,q),gr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,rn.__webglTexture,Se,Ht+Wn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,rn.__webglTexture,Se),q!==0?z.blitFramebuffer(Oe,Xe,Oe+Ne,Xe+be,De,nt,De+Ne,nt+be,z.COLOR_BUFFER_BIT,z.NEAREST):gr?z.copyTexSubImage3D(Ue,Se,De,nt,Ht+Wn,Oe,Xe,Ne,be):z.copyTexSubImage2D(Ue,Se,De,nt,Oe,Xe,Ne,be);L.bindFramebuffer(z.READ_FRAMEBUFFER,null),L.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else gr?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Ue,Se,De,nt,Ht,Ne,be,Pe,vt,on,bt.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Ue,Se,De,nt,Ht,Ne,be,Pe,vt,bt.data):z.texSubImage3D(Ue,Se,De,nt,Ht,Ne,be,Pe,vt,on,bt):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Se,De,nt,Ne,be,vt,on,bt.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Se,De,nt,bt.width,bt.height,vt,bt.data):z.texSubImage2D(z.TEXTURE_2D,Se,De,nt,Ne,be,vt,on,bt);L.pixelStorei(z.UNPACK_ROW_LENGTH,mn),L.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ht),L.pixelStorei(z.UNPACK_SKIP_PIXELS,mr),L.pixelStorei(z.UNPACK_SKIP_ROWS,ln),L.pixelStorei(z.UNPACK_SKIP_IMAGES,Za),Se===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&z.generateMipmap(Ue),L.unbindTexture()},this.initRenderTarget=function(E){ne.get(E).__webglFramebuffer===void 0&&se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),L.unbindTexture()},this.resetState=function(){V=0,H=0,de=null,L.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),n.unpackColorSpace=st._getUnpackColorSpace()}}const Gf=.003,rl=1.2;function ZS(t,e,n){const i=Math.tan(wt.degToRad(n/2))*Math.max(.2,e),r=Math.max(3.8,1.15/(i*.8)),s=t.z>4?-1:1;return{position:new k(wt.clamp(t.x,-10,10),3.6,wt.clamp(t.z+s*r,-11.5,11.5)),target:t.clone().add(new k(0,1.35,0))}}function uu(t,e,n,i){return{yaw:t-n*Gf,pitch:wt.clamp(e-i*Gf,-rl,rl)}}function tm(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:wt.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-rl,rl)}}class qS{yaw=0;pitch=0;freeMode=!1;anchor=new k;freePos=new k;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new k(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new Hn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,uu(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,tm(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new k;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new k(-i.z,0,i.x),s=new k;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=wt.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=wt.clamp(this.freePos.y,1.1,4.4),this.freePos.z=wt.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function jS(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}function YS(t,e,n,i,r){e.disabled=!i,e.onclick=()=>{i&&(t.close(),r())},n.onclick=()=>t.close(),t.showModal()}const KS=1;function JS(t,e,n){const i=t.target;t.code!=="Space"||t.defaultPrevented||t.repeat||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||e||i?.closest?.("input,select,textarea,button,a,[contenteditable]:not([contenteditable=false]),[role=button]")||(t.preventDefault(),n())}const Tr=64,ms=[{phase:"hook",start:0,caption:"AI researchers get stuck."},{phase:"trap",start:6,caption:"Local tweaks. Rising boredom."},{phase:"snap",start:20,caption:"Boredom triggers real scouting."},{phase:"breakthrough",start:36,caption:"Verified breakthrough."},{phase:"proof",start:54,caption:"Artificial Scientist Swarms."}],QS=2.8,uc=t=>typeof t=="number"&&Number.isFinite(t)?t:null,eM=new Set(["llm.called","agent.assigned"]);function tM(t,e,n){const i=[...t].sort((R,$)=>R.tick-$.tick),r=i.filter(R=>R.type==="boredom.measured"&&uc(R.payload?.B)!=null).map(R=>({tick:R.tick,agentId:R.agentId||"",value:uc(R.payload?.B),regime:String(R.payload?.regime||""),round:R.round??0})),s=r.find(R=>R.regime==="BOREDOM_SNAP"&&R.value>=.7)||r.find(R=>R.regime==="BOREDOM_SNAP"),a=i.filter(R=>R.type==="discovery.made").map(R=>({tick:R.tick,agentId:R.agentId||"",reward:uc(R.payload?.reward)??0}));if(!s||!a.some(R=>R.tick>s.tick))return null;const o=a.filter(R=>R.tick>s.tick),l=o.reduce((R,$)=>$.reward>R.reward?$:R,o[0]),c=i.filter(R=>R.type==="experiment.finished"&&R.payload?.status==="replicated").map(R=>R.tick),u=Math.max(0,(r[0]?.tick??0)-2),f=r.find(R=>R.tick>s.tick&&R.round>(s.round||0))?.tick??null,d=f==null?null:i.find(R=>R.tick>f&&R.type==="experiment.finished")?.tick??l.tick-10,h=i.filter(R=>R.type==="verdict.issued"&&R.tick>=l.tick),g=h.find(R=>/candidate|award|winner/i.test(String(R.payload?.verdict||""))),_=Math.min(n,Math.max(l.tick+4,h.at(-1)?.tick??l.tick+12)),p=e.filter(R=>R.bored).map(R=>R.id),m=i.find(R=>R.type==="agent.assigned"&&p.includes(R.agentId||"")&&R.tick>=s.tick)?.tick??s.tick+1,v=f??l.tick,M=i.filter(R=>R.type==="observation.received"&&R.tick>s.tick&&R.tick<v&&["sources","snap"].includes(String(R.payload?.kind||""))&&R.message&&R.message!=="(untitled)").map(R=>({tick:R.tick,agentId:R.agentId||"",title:String(R.message).split(";")[0].trim(),tool:String(R.payload?.tool||(R.payload?.kind==="snap"?"snap search":"literature"))})),b=i.filter(R=>R.type==="items.shared"&&R.tick>s.tick&&R.tick<v).map(R=>({tick:R.tick,agentId:R.agentId||""})),T=R=>Math.min(l.tick-1,Math.max(s.tick+1,Math.min(n,R))),A=T(Math.max(s.tick+10,...M.map(R=>R.tick),...b.map(R=>R.tick))),x=f==null?l.tick-1:T(f),S=d==null?l.tick-16:d-6,O=[[0,0],[6,Math.min(n,u)],[19,Math.min(n,s.tick-3)],[23,Math.min(l.tick,n,s.tick+1)],[32,T(Math.min(A+1,(x??l.tick)-1))],[36,T(Math.max(f==null?s.tick+1:x,S))],[46,l.tick],[52,_],[Tr,_]];for(let R=1;R<O.length;R++)O[R][1]=Math.max(O[R][1],O[R-1][1]);const N=new Map;for(const R of i)eM.has(R.type)||N.set(Math.floor(R.tick),Math.min(3,(N.get(Math.floor(R.tick))||0)+1));return{keys:O,weights:N,snapTick:s.tick,snapAgent:s.agentId,foundedTick:m,boredAgents:p,discoveries:a,breakthroughAgent:l.agentId,bestTick:l.tick,replicated:c,boredom:r,papers:M,shares:b,verdict:g?{tick:g.tick,agentId:g.agentId||"",label:String(g.payload?.verdict)}:void 0,startTick:u,endTick:_}}function Vf(t,e){const n=t.keys,i=Math.max(0,Math.min(Tr,e));let r=n.findIndex((h,g)=>g<n.length-1&&i<n[g+1][0]);r<0&&(r=n.length-2);const[s,a]=n[r],[o,l]=n[r+1];if(l<=a||o<=s)return a;const c=(i-s)/(o-s),u=[];for(let h=Math.floor(a);h<Math.ceil(l);h++)u.push(.35+(t.weights.get(h)||0));const f=u.reduce((h,g)=>h+g,0);let d=c*f;for(let h=0;h<u.length;h++){if(d<=u[h]){const g=Math.floor(a)+h+d/u[h];return Math.max(a,Math.min(l,g))}d-=u[h]}return l}function nM(t){let e=ms[0];for(const n of ms)t>=n.start&&(e=n);return e}const du=t=>{const e=Math.max(0,Math.min(1,t));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2};function iM(t,e){const n=t.boredom.filter(f=>f.tick<=e);if(!n.length)return{value:0,shown:0,regime:"EXPLOIT",agentId:""};const i=n.at(-1).round,r=n.filter(f=>f.round===i),s=r.reduce((f,d)=>d.value>f.value?d:f,r[0]),a=n.slice(0,-1),o=a.at(-1)?.round,l=a.filter(f=>f.round===o),c=l.length?l.reduce((f,d)=>d.value>f.value?d:f,l[0]).value:0,u=c+(s.value-c)*du((e-n.at(-1).tick)/2);return{value:s.value,shown:u,regime:s.regime,agentId:s.agentId}}function rM(t,e){return e==="BOREDOM_SNAP"||t>=.7?"snap":t>=.35?"amber":"cool"}function sM(t,e){return t.replicated.filter(n=>n<=e).length}function aM(t,e,n,i,r=360,s=120,a=""){const o=Math.max(1,t.length),l=h=>8+(Math.max(e,Math.min(n,h))-e)/Math.max(1,n-e)*(r-16),c=h=>s-10-h/o*(s-28);let u=0,f=`M${l(e).toFixed(1)} ${c(0).toFixed(1)}`;for(const h of t){if(h>i)break;f+=` H${l(h).toFixed(1)} V${c(++u).toFixed(1)}`}f+=` H${l(Math.min(i,n)).toFixed(1)}`;const d=Array.from({length:o+1},(h,g)=>`<line x1="8" x2="${r-8}" y1="${c(g).toFixed(1)}" y2="${c(g).toFixed(1)}"/>`).join("");return`<svg viewBox="0 0 ${r} ${s}" class="cin-step" role="img" aria-label="${a}"><g class="grid">${d}</g><path d="${f}"/><circle cx="${l(Math.min(i,n)).toFixed(1)}" cy="${c(u).toFixed(1)}" r="5"/></svg>`}const oM="github.com/arii/caffeinated",lM={title:"Pilot A/B · control vs boredom",rows:[{task:"hadamard19",result:"Tie"},{task:"bixbench_mini",result:"Control 2 of 3"},{task:"playworld_mini",result:"Within noise"},{task:"ignobel",result:"Control confirmed more"}],note:"3 runs per task · no significant boredom benefit yet"},bo={repo:oM,pilot:lM},cM={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Our hypothesis is that existing AI scientist swarms get stuck because they are bored, trapped in repetitive, low-payoff loops long after returns have diminished. Artificial Scientist Swarms adds a deterministic Boredom Meter grounded in psychology so the swarm does not stay bored. Recomputed from the shared experiment ledger, it tracks stagnation, novelty deficit and overload to detect boredom and force a seeking state, moving from routine exploitation to paradigm breakout. We test this controller on known benchmarks and an Ig Nobel challenge: research that makes you laugh, then think. Agents search via Exa, share memory on past.dev, pre-register real-data tests, and can be ranked by a two-judge committee and final IgJudge."},uM=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],dM={project:"Ig Nobel Prize Winning Artificial Scientist Swarms",team:"Team caffeinated",names:["Ariel Anders","Jialin Feng","Neeraj Shah","Masha Baidachna"]},fM={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},hM={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa"},pM={source:"Exa result:",missingExa:"results not kept as source cards",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},mM={citations:[{runId:"50bbe2bb-0a86-50d9-9ef8-be8aa5fa3929",studyId:"study:14",category:"Transport",text:"Kitchen Physics Lab: for confirming that heavier cars get fewer city miles per gallon.",note:"Strongest absolute correlation among eligible studies; not a prize award."}],proxyNote:"Metric / proxy",noProxy:"No proxy note is present in this recording.",studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"Prizes awarded: {N}",awardFallback:"Award issued",creditErrorSuffix:" (Tinker credit ran out)",noAwards:"No prizes awarded yet: this run stopped before committee judging.",factualLine:"Real result so far: {C} of {R} tests that ran passed their preregistered gates; {K} also pass the |ρ| ≥ 0.1 floor added after the run ({N} registered){committeeSuffix}",noCommitteeSuffix:"; no committee score yet",countLine:"{N} registered · {M} confirmed ({K} under the post-hoc |ρ| ≥ 0.1 floor)",track3Line:"Track 3 check (exploratory, 3 runs each): preregistered primary (guard2, stopped early, guarded) B 0.26 > S 0.24 > A 0.11; complete strict-guard set, picked after it finished, S 0.30 > A 0.09 > B 0.06. B leads S on mean only because S scored 0 on run 3001, where the guard rejected its candidate for the known integer-loop-bound false positive (unguarded 0.333); S beats B on the other two runs.",memoryComparisonUrl:"https://github.com/arii/caffeinated/blob/sf-ai-research-hack-2026/experiments/memory-comparison/README.md",track3Url:"https://github.com/arii/caffeinated/blob/sf-ai-research-hack-2026/experiments/confirmatory/RESULTS.md",bixbenchUrl:"https://github.com/arii/caffeinated/blob/sf-ai-research-hack-2026/experiments/real-runs/bixbench_mini-v2/held_out_test.json",charts:{toolsCaption:"Calls recorded in this run (Kimi + Exa + past.dev)",sourceCaption:"Source cards; some papers repeat.",funnelCaption:"Known relationships in teaching datasets, not discoveries.",bixbench:{baseline:{correct:1,total:7,ci:[.03,.51]},best:{correct:6,total:7,ci:[.49,.97]},caption:"7 held-out questions, one run."},track3:{groups:[{label:"Preregistered (stopped early)",values:[{arm:"B",value:.259},{arm:"S",value:.241},{arm:"A",value:.111}]},{label:"Complete set (picked after)",values:[{arm:"S",value:.296},{arm:"A",value:.093},{arm:"B",value:.056}]}],legend:[{arm:"B",label:"boredom swarm"},{arm:"S",label:"single agent"},{arm:"A",label:"meter off"}],caption:"3 runs each: neither ordering is significant."},memory:{pastdev:{hitAt1:.65,hitAt8:.95,medianLatencyMs:562},local:{hitAt1:.3,hitAt8:.825,medianLatencyMs:15},memories:419,probes:40,caption:"419 real memories, 40 hand-written probes."}}},Pr={event:cM,tools:uM,authors:dM,boredom:fM,sections:hM,labels:pM,results:mM},In=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),gM=(t,e)=>t.length>e?`${t.slice(0,e-1).trimEnd()}…`:t,Wf=(t,e)=>t<0?0:t<.25?t/.25:Math.exp(-(t-.25)/e),ta=new k(0,.7,-1.4),na=Object.fromEntries(ms.map(t=>[t.phase,t.start]));function _M(t){const{world:e,renderer:n,recording:i}=t,r=e.camera,s=(i.manifest.agents||[]).map(B=>({id:String(B.agent_id),name:String(B.display_name||B.label||""),bored:B.founded_because==="bored"})),a=tM(i.events,s,i.manifest.totalTicks);if(!a)return null;const o=a,l=B=>s.find(C=>C.id===B)?.name||"Lab",c=B=>{for(let C=0;C<=Tr;C+=1/60)if(Vf(o,C)>=B)return C;return Tr},u=c(o.snapTick),f=c(o.foundedTick),d=c(o.bestTick),h=o.discoveries.filter(B=>B.tick>o.snapTick).map(B=>({t:c(B.tick),best:B.tick===o.bestTick,agentId:B.agentId})),g=o.verdict?c(o.verdict.tick):Tr,_=document.createElement("div");_.id="cinema",_.setAttribute("aria-hidden","true");const p=o.replicated.filter(B=>B>o.snapTick).length;_.innerHTML=`<div class="cin-glow"></div><div class="cin-crimson"></div><svg class="cin-links" viewBox="0 0 1920 1080" preserveAspectRatio="none"></svg><div class="cin-tags"></div>
 <div class="cin-brand"><b>${In(Pr.authors.project)}</b><span>Real run · Ig Nobel task</span></div>
 <div class="cin-telemetry"><div class="cin-meter"><div class="row"><span class="lbl">Boredom</span><b class="val">0.00</b><i class="chip">EXPLOIT</i></div><div class="bar"><span></span><em style="left:70%"></em></div></div>
 <div class="cin-score"><div class="row"><span class="lbl">Replicated findings</span><b class="val">0</b></div><div class="chart"></div></div></div>
 <div class="cin-papers"></div>
 <div class="cin-burst"><b>New best</b><span>Replicated on both halves</span></div>
 <div class="cin-proof"><div class="credit"><b>${In(Pr.authors.project)}</b><span>${Pr.authors.names.map(In).join(" · ")}</span></div><div class="kicker">This run</div><div class="stats">
  <div><b>${Math.max(...o.boredom.map(B=>B.value)).toFixed(2)}</b><span>boredom at snap</span></div>
  <div><b>${o.boredAgents.length}</b><span>labs founded by boredom</span></div>
  <div><b>${p}</b><span>replicated after the snap</span></div>
  <div><b>${o.verdict?1:0}</b><span>${In(o.verdict?.label||"award candidate")}</span></div></div>
  <div class="kicker">${In(bo.pilot.title)}</div><div class="pilot">${bo.pilot.rows.map(B=>`<div><span>${In(B.task)}</span><b>${In(B.result)}</b></div>`).join("")}</div>
  <p class="note">${In(bo.pilot.note)}</p><div class="repo">${In(bo.repo)}</div></div>
 <div class="cin-caption"><span></span></div>`,document.body.appendChild(_);const m=B=>_.querySelector(B),v=new Y_("#ffc451",0,26,1);e.scene.add(v);const M=e.exposure??1,b=()=>new Map((e.agentPositions?.()||[]).map(B=>[B.id,B.position])),T=(B,C)=>{const G=B.map(V=>C.get(V)).filter(Boolean);return G.length?G.reduce((V,H)=>V.add(H),new k).multiplyScalar(1/G.length):ta.clone()},A=B=>(B.x=wt.clamp(B.x,-10.6,10.6),B.y=wt.clamp(B.y,1.2,4.35),B.z=wt.clamp(B.z,-12,11.4),B),x=(B,C=10.2,G=4.25)=>{const V=.42-B*.012;return{pos:A(new k(ta.x+Math.sin(V)*C,G,ta.z+Math.cos(V)*C)),look:ta.clone()}},S=(B,C,G,V)=>{const H=x(C).pos,de=H.clone().sub(B);de.y=0,de.normalize().applyAxisAngle(new k(0,1,0),.18);const K=B.clone().add(new k(0,1.05,0));return{pos:A(K.clone().add(de.multiplyScalar(G)).add(new k(0,V,0))),look:K}},O=(B,C,G)=>{if(B==="hook"||B==="trap")return x(C);if(B==="snap"){const V=C<f+1||!o.boredAgents.length?[o.snapAgent]:o.boredAgents;return S(T(V,G),C,5.2-Math.min(1.2,(C-na.snap)*.06),1.5)}if(B==="breakthrough"){const V=T([o.breakthroughAgent],G),H=S(V,C,5.6,2.2),de=du((C-d+.4)/5),K=H.pos.clone().sub(H.look).setY(0).normalize();return{pos:A(H.pos.clone().add(K.multiplyScalar(de*3.4)).setY(Math.min(3.7,H.pos.y+de*.3))),look:H.look.clone().lerp(ta.clone().setY(2),de*.4)}}return x(C,10.4,4.3)},N=B=>{const C=B.clone().project(r);return{x:(C.x+1)/2*1920,y:(1-C.y)/2*1080,visible:C.z<1&&Math.abs(C.x)<1.05&&Math.abs(C.y)<1.05}};let R={papers:"",tags:"",links:"",chart:""};function $(B){const C=Math.max(0,Math.min(Tr,B)),G=Vf(o,C),V=nM(C);t.seek(G),t.updateWorld(C),e.scene.traverse(Le=>{Le.isSprite&&(Le.visible=!1)});const H=b(),de=ms.findIndex(Le=>Le.phase===V.phase),K=du((C-V.start)/2.6);let le=O(V.phase,C,H);if(de>0&&K<1){const Le=O(ms[de-1].phase,C,H);le={pos:Le.pos.lerp(le.pos,K),look:Le.look.lerp(le.look,K)}}r.position.copy(le.pos),r.lookAt(le.look),r.updateMatrixWorld();const fe=Math.max(Wf(C-u,1.6),V.phase==="snap"||V.phase==="trap"&&C>u?.32:0)*(V.phase==="breakthrough"?Math.max(0,1-(C-na.breakthrough)/2):1);let Ce=0;for(const Le of h)Ce=Math.max(Ce,Wf(C-Le.t,Le.best?2.4:1.3)*(Le.best?1:.65));C>d&&V.phase!=="proof"&&(Ce=Math.max(Ce,.7)),V.phase==="proof"&&(Ce=Math.max(Ce,.7*Math.max(0,1-(C-na.proof)/3)));const $e=T([o.breakthroughAgent],H);v.position.set($e.x,3.2,$e.z),v.intensity=Ce*14,n.toneMappingExposure=M*(1+Ce*.22-fe*.12),_.style.setProperty("--gold",Ce.toFixed(3)),_.style.setProperty("--crimson",fe.toFixed(3)),_.dataset.phase=V.phase;const ae=iM(o,G),_e=rM(ae.shown,ae.regime);m(".cin-meter").dataset.tone=_e,m(".cin-meter .val").textContent=ae.shown.toFixed(2),m(".cin-meter .chip").textContent=ae.regime||"EXPLOIT",m(".cin-meter .bar span").style.width=`${Math.round(ae.shown*100)}%`;const Re=sM(o,G);m(".cin-score .val").textContent=String(Re),m(".cin-score").dataset.gold=String(Re>o.replicated.filter(Le=>Le<=o.snapTick).length);const Fe=aM(o.replicated,o.startTick,o.endTick,G,400,118,"Replicated findings");Fe!==R.chart&&(m(".cin-score .chart").innerHTML=Fe,R.chart=Fe);const we=m(".cin-caption"),He=Math.min(1,(C-V.start-.25)/.5),gt=ms[de+1],ze=V.phase==="proof"?1:Math.min(1,(V.start+QS-C)/.4,gt?(gt.start-C-.15)/.4:1);we.style.opacity=String(Math.max(0,Math.min(He,ze))),m(".cin-caption span").textContent=V.caption;const et=V.phase==="snap"?o.papers.filter(Le=>Le.tick<=G).slice(-3):[],ot=et.map(Le=>`<div class="paper"><i>${In(Le.tool==="seed"?"literature":Le.tool)}</i><b>${In(gM(Le.title,54))}</b><span>${In(l(Le.agentId))}</span></div>`).join("");ot!==R.papers&&(m(".cin-papers").innerHTML=ot,R.papers=ot);const qe=[],At=[],ct=[],Lt=(Le,z,Ut)=>{const ut=H.get(Le);if(!ut)return;const D=N(ut.clone().add(new k(0,2.05,0)));if(!D.visible)return;let L=D.y;for(;ct.some(ee=>Math.abs(ee.x-D.x)<300&&Math.abs(ee.y-L)<46);)L-=48;ct.push({x:D.x,y:L}),qe.push(`<div class="tag ${Ut}" style="left:${D.x.toFixed(0)}px;top:${L.toFixed(0)}px">${In(z)}</div>`)};if(C>=u-.2&&C<36&&Lt(o.snapAgent,`${l(o.snapAgent)} · B ${Math.max(...o.boredom.filter(Le=>Le.agentId===o.snapAgent&&Le.tick<=G).map(Le=>Le.value),0).toFixed(2)}`,"snap"),C>=f&&C<na.breakthrough)for(const Le of o.boredAgents)Lt(Le,`${l(Le)} · new lab`,"founded");const _t=h.some(Le=>C>=Le.t&&C<Le.t+3.2);for(const Le of h)!_t&&C>=Le.t+3.2&&C<(Le.best?na.proof:Le.t+4.6)&&V.phase==="breakthrough"&&Lt(Le.agentId,Le.best&&C>=g?`${l(Le.agentId)} · ${o.verdict?.label}`:`${l(Le.agentId)} · replicated`,"gold");for(const Le of o.shares){const z=c(Le.tick);if(C>=z&&C<z+3.2&&V.phase==="snap"){const Ut=o.shares.filter(L=>L!==Le).map(L=>L.agentId),ut=H.get(Le.agentId),D=Ut.map(L=>H.get(L)).find(Boolean);if(ut&&D){const L=N(ut.clone().add(new k(0,1.2,0))),ee=N(D.clone().add(new k(0,1.2,0)));At.push(`<path class="memory" d="M${L.x.toFixed(0)} ${L.y.toFixed(0)} Q${((L.x+ee.x)/2).toFixed(0)} ${(Math.min(L.y,ee.y)-120).toFixed(0)} ${ee.x.toFixed(0)} ${ee.y.toFixed(0)}"/>`),Le===o.shares[0]&&qe.push(`<div class="tag memory" style="left:${((L.x+ee.x)/2).toFixed(0)}px;top:${(Math.min(L.y,ee.y)-80).toFixed(0)}px">shared memory</div>`)}}}if(et.length){const Le=et.at(-1),z=H.get(Le.agentId);if(z){const Ut=N(z.clone().add(new k(0,1.3,0)));At.push(`<path class="scout" d="M${Ut.x.toFixed(0)} ${Ut.y.toFixed(0)} L470 ${(330+(et.length-1)*118).toFixed(0)}"/>`)}}const Yt=qe.join(""),Et=At.join("");Yt!==R.tags&&(m(".cin-tags").innerHTML=Yt,R.tags=Yt),Et!==R.links&&(m(".cin-links").innerHTML=Et,R.links=Et);const $t=h.filter(Le=>C>=Le.t).at(-1),tn=m(".cin-burst");tn.style.opacity=$t&&V.phase==="breakthrough"?String(Math.max(0,1-Math.max(0,C-$t.t-2.6)/.6)):"0",tn.style.setProperty("--k",$t?String(Math.min(1,(C-$t.t)/.35)):"0"),n.render(e.scene,r)}return{render:$,plan:o,duration:Tr}}const ia=new k;function On(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;ia.copy(e),ia[i]=0,ia.normalize();const c=.5*a/(a+o),u=1-ia.angleTo(t)/l;return Math.sign(ia[n])===1?u*c:o/(a+o)+c+c*(1-u)}class ed extends Hr{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new k,c=new k,u=new k(e,n,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,g=f.length/6,_=new k,p=.5/a;for(let m=0,v=0;m<f.length;m+=3,v+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=u.x*Math.sign(l.x)+c.x*s,f[m+1]=u.y*Math.sign(l.y)+c.y*s,f[m+2]=u.z*Math.sign(l.z)+c.z*s,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),h[v+0]=On(_,c,"z","y",s,i),h[v+1]=1-On(_,c,"y","z",s,n);break;case 1:_.set(-1,0,0),h[v+0]=1-On(_,c,"z","y",s,i),h[v+1]=1-On(_,c,"y","z",s,n);break;case 2:_.set(0,1,0),h[v+0]=1-On(_,c,"x","z",s,e),h[v+1]=On(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),h[v+0]=1-On(_,c,"x","z",s,e),h[v+1]=1-On(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),h[v+0]=1-On(_,c,"x","y",s,e),h[v+1]=1-On(_,c,"y","x",s,n);break;case 5:_.set(0,0,-1),h[v+0]=On(_,c,"x","y",s,e),h[v+1]=1-On(_,c,"y","x",s,n);break}}static fromJSON(e){return new ed(e.width,e.height,e.depth,e.segments,e.radius)}}const Xf=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function nm(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return Xf[e%Xf.length]}function Fo(t,e,n,i){const a=(f,d)=>f<n.minX+.2||f>n.maxX-.2||d<n.minZ+.2||d>n.maxZ-.2||i.some(h=>f>h.minX-.2&&f<h.maxX+.2&&d>h.minZ-.2&&d<h.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],l=new Set(["0,0"]);let c=-1;for(let f=0;f<o.length&&f<12e3;f++){const d=o[f];if(Math.hypot(d.x-e.x,d.z-e.z)<.48){c=f;break}for(const[h,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const _=d.x+h,p=d.z+g,m=`${Math.round((_-t.x)/.45)},${Math.round((p-t.z)/.45)}`;!l.has(m)&&!a(_,p)&&(l.add(m),o.push({x:_,z:p,parent:f}))}}if(c<0)return[];const u=[];for(let f=c;f>=0;f=o[f].parent)u.push({x:o[f].x,z:o[f].z});return u.reverse().slice(1)}const qi={x:-7.8,z:-4.6},vM=[0,4,8,2,6,10,1,5,9,3,7,11];function fu(t=0){const e=-Math.PI/2+vM[(t%12+12)%12]*Math.PI/6;return{x:qi.x+Math.cos(e)*2.15,z:qi.z+Math.sin(e)*2.15}}function hu(t,e=0){if(t==="culture")return fu(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const Sr=(t,e,n)=>t+(e-t)*n;function im(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=Sr(1.35,.5,n),s=Sr(2.2,.6,n),a=e?0:n<.35?Sr(.06,0,n/.35):0,o=Sr(9,4,n),l=n>.45?Sr(0,.42,(n-.45)/.55):0,c=n>.55?Sr(0,.12,(n-.55)/.45):0,u=n>.5?Sr(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:l,slump:c,saturation:u,zzz:n>=.8}}function xM(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Di(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const Zf=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function ks(t){const e=Di(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+Zf[n].map((r,s)=>Math.round(r+(Zf[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const yM={EXPLOIT:["Exploiting","calm","After a significant improvement or before min_attempts: most workers refine; one explores."],BOREDOM_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],YOKED_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],PARADIGM_BREAKOUT:["Paradigm breakout","breakout","All workers explore; the gate requires a top-level mechanism not used recently."],CONVERGED:["Converged","converged","The gate allows only exact reruns of the best for confirmation."],FRUSTRATED:["Frustrated","frustrated",""]};function Fr(t){if(!t)return{label:"",tone:"calm",description:""};const e=yM[t];return e?{label:e[0],tone:e[1],description:e[2]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm",description:""}}function bM(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function SM(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const pu=t=>Math.max(0,Math.min(1,t)),MM=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,qf=t=>{const e=pu(t);return e===0||e===1?e:pu(MM(e))};function EM(t,e){const n=pu(t),i=Math.max(0,Math.floor(e)),r=qf(n/.4),s=Array.from({length:i},(a,o)=>{const l=.4+o*.6/Math.max(1,i),c=.6/Math.max(1,i);return qf((n-l)/c)});return{room:r,agents:s}}function wM(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function TM(){const t=new A_;t.background=new Ye("#e4edf3"),t.fog=new Zu("#e4edf3",34,90);const e=new zn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new Hr(1,1,1),r=(D,L=.68,ee=0)=>new ko({color:D,roughness:L,metalness:ee}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),l=r("#b1bec5",.32,.65),c=r("#c8d3d6"),u=r("#a8b5a1"),f=r("#b4a38c",.8),d=r("#928572");r("#18252a",.38);const h=r("#f9f4e6"),g=r("#3e8493"),_=r("#d2a468"),p=new W_({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:Ln}),m=new Zi({color:"#fff6dd"}),v=new Zi({color:"#80b7ab"}),M=(D,L,ee,ne,se,w,y,P=t)=>{const Z=new xt(i,y);return Z.position.set(D,L,ee),Z.scale.set(ne,se,w),P.add(Z),Z},b=(D,L,ee,ne,se,w,y=t,P=20)=>{const Z=new xt(new Pa(ne,ne,se,P),w);return Z.position.set(D,L,ee),y.add(Z),Z},T=(D,L,ee,ne,se,w=t)=>{const y=new xt(new Ku(ne,16,12),se);return y.position.set(D,L,ee),w.add(y),y},A=(D,L,ee,ne)=>n.push({minX:D-ee/2,maxX:D+ee/2,minZ:L-ne/2,maxZ:L+ne/2}),x=(D,L,ee,ne,se=t)=>{const w=L.clone().sub(D),y=new xt(new Pa(ee,ee,w.length(),12),ne);return y.position.copy(D).add(L).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new k(0,1,0),w.normalize()),se.add(y),y},S=(D,L,ee,ne,se,w,y="#f5f4ec",P="#425859",Z=0)=>{const U=document.createElement("canvas");U.width=1024,U.height=Math.max(64,Math.round(1024*w/se));const oe=U.getContext("2d");oe.fillStyle=y,oe.fillRect(0,0,U.width,U.height);const ue=D.split(`
`),Q=Math.min(U.height/(ue.length+1),U.width/(Math.max(...ue.map(ie=>ie.length))*.62));oe.fillStyle=P,oe.textAlign="center",oe.textBaseline="middle",oe.font=`500 ${Q}px sans-serif`,ue.forEach((ie,j)=>oe.fillText(ie,512,U.height/2+(j-(ue.length-1)/2)*Q*1.3));const re=new br(U);re.colorSpace=Wt;const he=new Zi({map:re,side:Ln}),I=new xt(new Cr(se,w),he);return I.position.set(L,ee,ne),I.rotation.y=Z,t.add(I),I},O=(D,L,ee)=>{const ne=document.createElement("canvas");ne.width=960,ne.height=360;const se=ne.getContext("2d");se.fillStyle="#fff9ea",se.strokeStyle="#b6c9c4",se.lineWidth=4,se.beginPath(),se.roundRect(4,4,952,310,30),se.fill(),se.stroke(),se.beginPath(),se.moveTo(450,313),se.lineTo(480,352),se.lineTo(510,313),se.fill(),se.textAlign="left",se.fillStyle="#35716c",se.font="bold 38px sans-serif",se.fillText(D.toUpperCase(),34,48),se.fillStyle="#263b41",se.font="48px sans-serif";const w=L.replace(/\s+/g," ").trim().split(" "),y=[];let P="";for(const U of w){const oe=P?P+" "+U:U;se.measureText(oe).width>875&&P?(y.push(P),P=U):P=oe}P&&y.push(P),y.slice(0,3).forEach((U,oe)=>{let ue=U;oe===2&&y.length>3&&(ue=ue.replace(/.{0,3}$/,"…")),se.fillText(ue,34,110+oe*53)}),se.fillStyle="#6c817c",se.font="32px sans-serif",se.fillText(ee.length?"WITH "+ee.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const Z=new br(ne);return Z.colorSpace=Wt,new xt(new Cr(2.7,1.0125),new Zi({map:Z,transparent:!0,side:Ln,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new q_("#f5faff","#9caeb8",2.15));const N=new yf("#ffffff",2.2);N.position.set(-8,11,3),t.add(N);const R=new yf("#d0e9fa",.85);R.position.set(8,5,-8),t.add(R);const $=document.createElement("canvas");$.width=512,$.height=512;const B=$.getContext("2d");B.fillStyle="#d9e2e6",B.fillRect(0,0,512,512);for(let D=0;D<1700;D++){const L=Math.sin(D*41.77)*.5+.5,ee=Math.sin(D*19.31+5)*.5+.5;B.fillStyle=D%3?"#ecf0f1":"#c3d0d6",B.fillRect(L*512,ee*512,1+D%3,1+D%2)}const C=new br($);C.colorSpace=Wt,C.wrapS=C.wrapT=jo,C.repeat.set(8,9),C.anisotropy=8,M(0,-.12,0,24,.24,28,new ko({map:C,roughness:.85})),M(0,2.5,-13.5,24,5,.3,s),M(11.75,2.5,0,.3,5,27,s),M(0,.43,-13.27,23.5,.86,.12,f),M(11.53,.43,0,.12,.86,26.5,f),M(0,.08,-13.1,23.5,.16,.06,o),M(11.38,.08,0,.06,.16,26.5,o);const G=M(0,4.9,0,24,.16,28,s);G.userData.overhead=!0;for(const D of[-12,-6,0,6,12])M(-11.6,2.5,D,.22,5,.14,s);M(-11.6,.55,0,.3,1.1,27,s),M(-11.6,4.65,0,.3,.7,27,s),M(-11.68,2.75,0,.025,3.5,27,p);for(const D of[1.12,3.8])M(-11.4,D,0,.12,.07,27,l);M(-7.9,2.25,12.7,7.5,4.5,.14,s),M(7.9,2.25,12.7,7.5,4.5,.14,s);for(const D of[-3.9,3.9])M(D,2.25,12.65,.12,4.5,.18,l);M(0,2.25,12.8,7.7,4.5,.025,p),S("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const D of[-8,-1,6]){M(0,4.35,D,20,.08,.07,o);for(const L of[-7,0,7])b(L,4.18,D,.13,.22,o),b(L,4.06,D,.1,.025,m)}const V=new xt(new xa(1.8,.025,8,64),d);V.rotation.x=Math.PI/2,V.position.set(0,3.9,.5),t.add(V);for(const D of[-1.6,1.6])x(new k(D,3.9,.5),new k(D,4.84,.5),.012,l);M(-28,-.65,-2,45,1,70,r("#b0bf9d"));const H=r("#98af91"),de=r("#897e69");for(let D=0;D<14;D++){const L=-17-D%3*3,ee=-25+D*4.1;b(L,1.3,ee,.12,3,de);const ne=T(L,3,ee,1.25+D%3*.2,H);ne.scale.y=1.45}function K(D,L){b(D,.32,L,.34,.64,s),b(D,.66,L,.29,.04,d);for(let ee=0;ee<6;ee++){const ne=ee*2.4;x(new k(D,.65,L),new k(D+Math.cos(ne)*.25,1.5+ee%3*.18,L+Math.sin(ne)*.25),.025,u),T(D+Math.cos(ne)*.3,1.3+ee%3*.18,L+Math.sin(ne)*.3,.16,u).scale.set(.55,2,.8)}A(D,L,.8,.8)}K(-10.3,8.4),K(-10.3,-10.8),K(10.3,10.8);function le(D,L,ee,ne){M(D,.1,L,ee-.17,.2,ne-.12,o),M(D,.51,L,ee,.78,ne,c),M(D,.94,L,ee+.08,.08,ne+.08,o);const se=Math.round(ee/.85);for(let w=0;w<se;w++){const y=D-ee/2+(w+.5)*ee/se;M(y,.53,L+ne/2+.009,ee/se-.025,.7,.018,a),M(y,.77,L+ne/2+.028,.29,.025,.035,l)}A(D,L,ee+.12,ne+.12)}function fe(D,L,ee,ne="#8ab9ad"){M(D,1,L,.48,.035,.3,l),M(D,1.22,L,.055,.4,.055,l),M(D,1.53,L,.94,.59,.055,o),S(ee+`
RESEARCH IN PROGRESS`,D,1.53,L+.032,.86,.51,"#203137",ne),M(D,1.01,L+.36,.65,.035,.2,s);for(let se=0;se<5;se++)M(D-.25+se*.12,1.031,L+.36,.07,.007,.11,l)}function Ce(D,L,ee){M(D,1.02,L,.56,.09,.3,u);for(let ne=0;ne<5;ne++)b(D-.22+ne*.11,1.16,L,.031,.25,a,t,10),b(D-.22+ne*.11,1.3,L,.038,.025,ee,t,10)}function $e(D,L){const ee=new jn;ee.position.set(D,1,L),t.add(ee);const ne=M(0,.045,0,.58,.09,.55,a,ee);ne.rotation.y=-.1;const se=M(0,.36,-.15,.14,.62,.16,a,ee);se.rotation.x=-.15;const w=M(0,.61,-.03,.18,.15,.37,a,ee);w.rotation.x=-.2;const y=b(0,.67,.1,.07,.27,o,ee);y.rotation.x=-.38,b(0,.47,.1,.065,.18,l,ee),M(0,.23,.08,.4,.04,.35,o,ee),b(0,.11,.08,.12,.04,m,ee),T(.13,.32,-.11,.065,o,ee)}function ae(D,L){M(D,1.01,L,.35,.025,.22,l),M(D,1.25,L,.025,.45,.025,l),M(D,1.46,L,.35,.035,.05,s);for(let ee=0;ee<3;ee++){const ne=D-.12+ee*.12;b(ne,1.28,L,.026,.32,a,t,12),b(ne,1.08,L,.007,.12,l,t,8),b(ne,1.46,L,.035,.035,ee%2?g:_,t,12)}}const _e=qi.x,Re=qi.z;b(_e,.43,Re,.18,.78,l),b(_e,.88,Re,1.38,.12,f),b(_e,.95,Re,1.31,.025,a),A(_e,Re,2.8,2.8);for(let D=0;D<12;D++){const L=D*Math.PI/6,ee=_e+Math.sin(L)*2.15,ne=Re+Math.cos(L)*2.15;b(ee,.36,ne,.29,.07,l),b(ee,.18,ne,.035,.32,l);const se=b(ee,.43,ne,.31,.09,D%3===0?r("#dfabc5"):u);se.userData.discussionSeat=!0;const w=M(_e+Math.sin(L)*.87,.979,Re+Math.cos(L)*.87,.28,.015,.21,h);w.rotation.y=-L}b(_e,.99,Re,.19,.025,_),S("01   IDEATION ROUNDTABLE",_e,2.65,-7.2,4.7,.38),S("SHARED QUESTIONS / GROUP DISCUSSION",_e,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),le(5.4,-2.8,6.2,1.7);const Fe=M(5.6,1.44,-2.85,1.08,.88,.3,_);Fe.rotation.x=-.12,M(5.6,1.65,-2.666,.81,.25,.035,o),S("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const we=b(5.6,1.3,-2.64,.16,.07,o);we.rotation.x=Math.PI/2;const He=M(5.64,1.36,-2.59,.025,.11,.025,s);He.rotation.z=-.5;for(const[D,L]of[[5.28,g],[5.88,_]])T(D,1.1,-2.64,.045,o),x(new k(D,1.1,-2.61),new k(D+.35,1.03,-2.1),.018,L),x(new k(D+.35,1.03,-2.1),new k(D+.9,1.04,-2.17),.018,L);M(7.2,1.01,-2.8,.95,.055,.68,u);for(let D=0;D<4;D++)M(6.9+D*.19,1.08,-2.8,.1,.09,.18,o),M(6.9+D*.19,1.04,-2.8,.02,.018,.57,l);fe(3.3,-3.08,"PHYSICS / MEASUREMENTS"),S("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),le(.2,-10.6,5.8,1.5),fe(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let D=0;D<5;D++){const L=.25+D*.43,ee=-10.55+D%2*.19,ne=[g,_,u][D%3];b(L,1.16,ee,.13,.35,p),b(L,1.09,ee,.115,.19,ne),b(L,1.4,ee,.055,.15,p),b(L,1.49,ee,.065,.045,o)}Ce(2.2,-10.9,g),ae(.1,-11.05),S("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),S("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),S("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let D=0;D<5;D++)M(-2.2+D*1.12,2.68,-13.29,.85,.06,.02,D%2?u:f);le(-7.3,5.4,4.8,1.45),fe(-8.6,5.18,"BIOLOGY / CELL CULTURES"),$e(-7.15,5.32);for(let D=0;D<3;D++){const L=-6.25+D*.43,ee=5.5+D%2*.3;b(L,1.025,ee,.18,.055,p),b(L,1.045,ee,.16,.015,u);for(let ne=0;ne<5;ne++){const se=ne*2.4,w=T(L+Math.cos(se)*.1,1.065,ee+Math.sin(se)*.1,.035,D%2?_:g);w.scale.y=.35}}Ce(-5.55,5.15,g),S("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const D of[-9.9,-7.9,-5.9])M(10.75,1.22,D,1.4,2.4,1.5,a),M(10.02,1.22,D,.035,2.18,1.35,c),M(9.98,1.35,D+.42,.035,.43,.035,l),A(10.75,D,1.5,1.6);S("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),le(9.3,7.2,3.7,1.35),M(9.5,.99,7.1,.8,.025,.6,l),M(9.5,1.008,7.1,.63,.015,.46,o),x(new k(9.5,1,6.8),new k(9.5,1.5,6.8),.025,l),x(new k(9.5,1.5,6.8),new k(9.5,1.5,7.05),.025,l),S("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[D,L]of[[3.7,-.5],[-7.5,7.7]]){b(D,.66,L,.32,.12,u),b(D,.34,L,.045,.56,l);for(let ee=0;ee<4;ee++){const ne=ee*Math.PI/2;x(new k(D,.12,L),new k(D+Math.cos(ne)*.37,.08,L+Math.sin(ne)*.37),.025,l)}A(D,L,.7,.7)}b(0,.13,.5,1.85,.26,d),b(0,.52,.5,1.7,.55,f),b(0,.84,.5,1.84,.1,a),b(0,.9,.5,1.62,.035,o),A(0,.5,3.7,3.7),S("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const gt=new jn;gt.position.set(0,.95,.5),t.add(gt);const ze=[];for(let D=0;D<36;D++){const L=D*2.39996,ee=Math.sqrt(D/36)*1.35,ne=T(Math.cos(L)*ee,.15+D%5*.11,Math.sin(L)*ee,.045+D%3*.014,D%4===0?_:u,gt);ze.push(ne)}for(const D of[-1.45,1.45])for(const L of[-1.1,2.1])b(D,1.03,L,.018,.22,l);const et=[u,f,g,h,_];for(const D of[-6.2,6.2]){for(const L of[D-.9,D+.9])M(L,1.75,-12.7,.1,3.5,.5,f);for(const L of[.25,1.25,2.25,3.25]){M(D,L,-12.7,1.9,.075,.6,f);for(let ee=0;ee<6;ee++)M(D-.7+ee*.27,L+.3,-12.7,.17,.5-ee%3*.06,.32,et[ee%5])}A(D,-12.7,2.05,.75)}S("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),S("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function ot(D,L,ee){const ne=document.createElement("canvas");ne.width=256,ne.height=64;const se=ne.getContext("2d");se.fillStyle="rgba(23,35,44,.86)",se.beginPath(),se.roundRect(4,6,248,52,14),se.fill(),se.fillStyle="#ffffff26",se.beginPath(),se.roundRect(16,38,224,10,5),se.fill(),L!=null&&(se.fillStyle=ks(L),se.beginPath(),se.roundRect(16,38,Math.max(10,224*L/100),10,5),se.fill()),se.fillStyle="#f4f0e4",se.font="600 21px sans-serif",se.textBaseline="middle",se.fillText(L==null?"Boredom n/a":`Bored ${Math.round(L)}%`,18,22),ee&&(se.textAlign="right",se.fillStyle="#ddc270",se.font="600 15px sans-serif",se.fillText(ee.toUpperCase(),238,22));const w=D.material;w.map?.dispose(),w.map=new br(ne),w.map.colorSpace=Wt,w.needsUpdate=!0}const qe=(()=>{const D=document.createElement("canvas");D.width=128,D.height=128;const L=D.getContext("2d");L.fillStyle="#e9e4f4",L.strokeStyle="#31434b",L.lineWidth=6,L.font="700 40px sans-serif";for(const[ne,se,w,y]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])L.font=`700 ${y}px sans-serif`,L.fillStyle="#31434b",L.fillText(ne,se+3,w+3),L.fillStyle="#e9e4f4",L.fillText(ne,se,w);const ee=new br(D);return ee.colorSpace=Wt,ee})(),At=(D,L,ee)=>{const ne=Math.atan2(Math.sin(L-D),Math.cos(L-D));return Math.abs(ne)<ee?L:D+Math.sign(ne)*ee},ct=new Map;let Lt=1;function _t(D,L,ee,ne,se,w){const y=new jn;y.position.set(D,0,L),y.rotation.y=ee,t.add(y);const P=nm(w),Z=r(P.shell,.62),U=r("#293b42",.8),oe=r(P.accent,.48),ue=r(P.trim,.57),Q=new Zi({color:"#263b41",side:xn}),re=ne.startsWith("B")?u:ne.startsWith("C")?_:g,he=(Je,nn,dr,gi,Gs,fr,Va,Wa=y,hr=.055)=>{const Xa=new ed(gi,Gs,fr,3,Math.min(hr,gi/3,Gs/3,fr/3)),pr=new xt(Xa,Va);pr.position.set(Je,nn,dr),Wa.add(pr);const Vs=new xt(Xa,Q);return Vs.scale.setScalar(1.055),pr.add(Vs),pr};for(const Je of[-.13,.13])he(Je,.42,0,.16,.4,.18,Z),T(Je,.19,.055,.12,oe,y).scale.set(.95,.68,1.4);he(0,.99,0,.54,.61,.35,Z,y,.1),he(0,.72,0,.57,.13,.37,Z,y,.06),M(0,.98,.184,.012,.45,.012,U,y);const I=M(-.105,1.21,.19,.16,.07,.025,Z,y);I.rotation.z=-.55;const ie=M(.105,1.21,.19,.16,.07,.025,Z,y);ie.rotation.z=.55,b(0,1.36,0,.09,.12,oe,y);const j=new jn;if(j.position.set(0,1.64,0),y.add(j),P.head==="round"){const Je=T(0,0,0,.265,Z,j);Je.scale.set(1.21,1,.92);const nn=new xt(Je.geometry,Q);nn.scale.setScalar(1.055),Je.add(nn)}else he(0,0,0,.59,P.ears==="compact"?.44:.49,.45,Z,j,P.head==="monitor"?.055:.13);const ge=P.head==="monitor";ge&&he(0,-.005,.232,.49,.36,.025,U,j,.06);for(const Je of[-1,1]){const nn=b(Je*.335,0,0,.125,.09,oe,j);nn.rotation.z=Math.PI/2;const dr=b(Je*.389,0,0,P.ears==="compact"?.06:.085,.025,ue,j);if(dr.rotation.z=Math.PI/2,P.ears==="ring"){const gi=new xt(new xa(.125,.012,6,24),U);gi.rotation.y=Math.PI/2,gi.position.set(Je*.385,0,0),j.add(gi)}}const pe=P.antenna==="pair"?[-.17,.17]:[P.antenna==="offset-right"?.15:P.antenna==="offset-left"?-.16:0];for(const Je of pe)x(new k(Je,.23,0),new k(Je+(P.antenna==="offset-right"?.045:0),.39,0),.018,U,j),T(Je+(P.antenna==="offset-right"?.045:0),.4,0,.047,ue,j);const me=document.createElement("canvas");me.width=256,me.height=200;const xe=me.getContext("2d"),ke=ge?"#fff8e4":"#263b41";xe.fillStyle=ke,xe.strokeStyle=ke,xe.lineWidth=12,xe.lineCap="round";for(const Je of[82,174])xe.beginPath(),P.eyes==="happy"?(xe.arc(Je,79,15,Math.PI,Math.PI*2),xe.stroke()):(xe.ellipse(Je,76,10,17,0,0,Math.PI*2),xe.fill());xe.fillStyle="#f29b40";for(const Je of[52,204])xe.beginPath(),xe.ellipse(Je,112,13,8,0,0,Math.PI*2),xe.fill();xe.fillStyle="#263b41",xe.beginPath(),xe.ellipse(128,123,24,28,0,0,Math.PI),xe.closePath(),xe.fill(),xe.fillStyle="#f18540",xe.beginPath(),xe.ellipse(128,137,13,9,0,0,Math.PI*2),xe.fill();const W=new br(me);W.colorSpace=Wt;const Ie=new Zi({map:W,transparent:!0,depthWrite:!1}),Ge=new xt(new Cr(.49,.38),Ie);Ge.position.set(0,-.01,.255),j.add(Ge);const ye=new jn;if(ye.position.set(.32,1.22,0),y.add(ye),he(0,-.12,0,.16,.29,.19,Z,ye,.065),T(0,-.28,.07,.085,oe,ye),he(0,-.29,.16,.13,.12,.2,Z,ye,.05),T(0,-.29,.28,.092,oe,ye),he(-.32,1.04,0,.16,.36,.19,Z,y,.07),T(-.32,.84,.06,.09,oe,y),P.prop==="magnifier"){const Je=new xt(new xa(.1,.018,8,24),oe);Je.position.set(.32,1.05,.4),y.add(Je),x(new k(.32,.96,.4),new k(.32,.84,.4),.022,U,y);const nn=b(.32,1.05,.4,.084,.008,p,y);nn.rotation.x=Math.PI/2}else if(P.prop==="clipboard"){he(-.31,.96,.23,.22,.29,.035,ue,y,.025),M(-.31,.97,.253,.17,.22,.008,h,y);for(let Je=0;Je<3;Je++)M(-.31,.92+Je*.05,.261,.11,.012,.005,oe,y)}else{b(-.31,.97,.17,.028,.15,oe,y);const Je=new xt(new ju(.078,.15,16),ue);Je.position.set(-.31,.86,.17),y.add(Je)}const dt=T(-.17,1.22,.19,.018,v,y);dt.name="agent-status-led";const Rt=S(ne,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(Rt),y.add(Rt),M(.12,.93,.19,.2,.045,.015,re,y);const ei=S(ne.toUpperCase(),D,2.07,L+.16,.58,.18,"#f4f8fa","#31434b");y.userData.ownedMaterials=[Z,U,oe,ue,Q,Ie,Rt.material],y.userData.ownedTextures=[W,Rt.material.map];const Vr=new rc(new Uo({transparent:!0,depthTest:!1}));Vr.scale.set(.8,.8,1),t.add(Vr);const Ui=new rc(new Uo({transparent:!0,depthTest:!1}));Ui.scale.set(.86,.215,1),Ui.name="boredom-meter",t.add(Ui);const ur=new rc(new Uo({map:qe,transparent:!0,depthTest:!1}));ur.scale.set(.5,.5,1),ur.name="boredom-zzz",ur.visible=!1,t.add(ur);for(const Je of[Z,U,oe,ue])Je.userData.baseColor=Je.color.clone();const Hs={id:w,station:se,head:j,arm:ye,light:dt,group:y,sign:ei,path:[],target:"",activity:Vr,activityState:"",idea:null,ideaText:"",meter:Ui,meterKey:"",zzz:ur,tint:1};return ct.set(w,Hs),Hs}const Yt=new Map;for(const D of[...t.children])if(D instanceof xt&&D.geometry===i&&!D.userData.overhead&&!Array.isArray(D.material)&&!D.material.transparent){const L=Yt.get(D.material)||[];L.push(D),Yt.set(D.material,L)}for(const[D,L]of Yt){if(L.length<3)continue;const ee=new F_(i,D,L.length);L.forEach((ne,se)=>{ne.updateMatrix(),ee.setMatrixAt(se,ne.matrix),t.remove(ne)}),ee.instanceMatrix.needsUpdate=!0,ee.computeBoundingSphere(),t.add(ee)}const Et=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new k(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new k(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new k(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new k(-6.3,1.25,7.2),radius:3.1}];let $t=0;const tn={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function Le(D,L){const ee=Math.max(0,Math.min(.05,D-$t));$t=D,gt.rotation.y=D*(L.replay||L.running?.025:.006),ze.forEach((P,Z)=>{P.visible=Z<L.agents.length*4,P.position.y=.15+Z%5*.11+Math.sin(D*.8+Z)*.025});const ne=new Set(L.agents.map(P=>P.id));for(const[P,Z]of ct)if(!ne.has(P)){if(t.remove(Z.group,Z.sign,Z.activity,Z.meter,Z.zzz),Z.meter.material.map?.dispose(),Z.meter.material.dispose(),Z.zzz.material.dispose(),Z.idea){t.remove(Z.idea),Z.idea.geometry.dispose();const oe=Z.idea.material;oe.map?.dispose(),oe.dispose()}Z.activity.material.map?.dispose(),Z.activity.material.dispose(),Z.group.traverse(oe=>{oe instanceof xt&&oe.geometry!==i&&oe.geometry.dispose()});for(const oe of Z.group.userData.ownedMaterials)oe.dispose();for(const oe of Z.group.userData.ownedTextures||[])oe?.dispose();Z.sign.geometry.dispose();const U=Z.sign.material;U.map?.dispose(),U.dispose(),ct.delete(P)}L.agents.forEach((P,Z)=>{let U=ct.get(P.id);U||(U=_t(P.position?.x??(Z%3-1)*.6,P.position?.z??10.4+Math.floor(Z/3)*.4,0,P.name,P.stationId,P.id));const oe=P.id.startsWith("worker-")?Number(P.id.match(/\d+$/)?.[0]||1)-1:Z%4,ue=L.finale===!0,Q=Z/Math.max(1,L.agents.length)*Math.PI*2,re=ue?new k(qi.x+Math.cos(Q)*2.35,0,qi.z+Math.sin(Q)*2.35):hu(P.stationId,oe),he=ue?`finale:${Z}`:`${P.stationId}:${oe}`;U.target!==he&&(U.target=he,U.station=P.stationId,U.path=Fo(U.group.position,re,tn,n)),P.position&&!ue&&(U.group.position.set(P.position.x,0,P.position.z),U.path=[]);const I=im(P.boredom,L.reducedMotion),ie=U.path[0];if(ie){const ke=ie.x-U.group.position.x,W=ie.z-U.group.position.z,Ie=Math.hypot(ke,W);if(Ie<.07)U.path.shift();else{const Ge=Math.min(Ie,ee*1.8*I.walk);U.group.position.x+=ke/Ie*Ge,U.group.position.z+=W/Ie*Ge,U.group.rotation.y=L.reducedMotion?Math.atan2(ke,W):At(U.group.rotation.y,Math.atan2(ke,W),Math.max(.02,ee*6*I.turn))}}else U.group.rotation.y=P.position?.heading??(P.stationId==="culture"?Math.atan2(qi.x-U.group.position.x,qi.z-U.group.position.z):Math.PI);U.sign.position.set(U.group.position.x,2.28,U.group.position.z),U.sign.lookAt(e.position),U.activity.position.set(U.group.position.x,2.85,U.group.position.z);const j=!!ie||!!P.position?.moving,ge=`${P.boredom==null?"-":Math.round(P.boredom)}:${P.regime||""}`;U.meter.visible=P.boredom!=null&&Number.isFinite(P.boredom),U.meter.visible&&U.meterKey!==ge&&(U.meterKey=ge,ot(U.meter,P.boredom,Fr(P.regime).label)),U.meter.position.set(U.group.position.x,2.5,U.group.position.z),U.group.position.y=ue?L.reducedMotion?0:.12+Math.abs(Math.sin(D*3+Z))*.18:j?Math.abs(Math.sin(D*I.bobHz+Z))*I.bob:0,ue&&!L.reducedMotion&&(U.group.rotation.y+=ee*.35),U.group.rotation.x=I.slump,U.zzz.visible=I.zzz&&!j,U.zzz.position.set(U.group.position.x+.32,1.95+(L.reducedMotion?0:(D*.35+Z*.3)%1*.35),U.group.position.z),U.zzz.material.opacity=L.reducedMotion?.9:1-(D*.35+Z*.3)%1*.6,Math.abs(U.tint-I.saturation)>.02&&(U.tint=I.saturation,U.group.traverse(ke=>{if(ke instanceof xt&&ke.material instanceof ko&&ke.material.userData.baseColor){const W=ke.material.userData.baseColor,Ie=W.r*.3+W.g*.59+W.b*.11;ke.material.color.setRGB(Ie+(W.r-Ie)*I.saturation,Ie+(W.g-Ie)*I.saturation,Ie+(W.b-Ie)*I.saturation)}})),U.activity.visible=P.state!=="idle"&&!(P.stationId==="culture"&&P.discussionBrief);const pe=P.discussionBrief||"",me=pe?`${P.name}:${pe}:${(P.discussionPeers||[]).join(",")}`:"";if(U.ideaText!==me){if(U.idea){t.remove(U.idea),U.idea.geometry.dispose();const ke=U.idea.material;ke.map?.dispose(),ke.dispose(),U.idea=null}U.ideaText=me,pe&&(U.idea=O(P.name,pe,P.discussionPeers||[]),U.idea.name="recorded-discussion-bubble",t.add(U.idea))}if(U.idea&&(U.idea.visible=Lt>=.98&&P.stationId==="culture"&&!P.position?.moving&&(!!P.discussionBrief||P.state==="thinking"||P.state==="reviewing"),U.idea.position.set(U.group.position.x,3.05,U.group.position.z),U.idea.lookAt(e.position)),U.activityState!==P.state){U.activityState=P.state;const ke=document.createElement("canvas");ke.width=128,ke.height=128;const W=ke.getContext("2d");W.strokeStyle="#31434b",W.fillStyle="#f4f0e4",W.lineWidth=7,W.lineCap="round",W.lineJoin="round",P.state==="thinking"?(W.beginPath(),W.moveTo(64,19),W.lineTo(64,30),W.moveTo(37,31),W.lineTo(44,39),W.moveTo(91,31),W.lineTo(84,39),W.stroke(),W.beginPath(),W.arc(64,57,25,Math.PI,Math.PI*2),W.lineTo(82,75),W.lineTo(46,75),W.closePath(),W.fill(),W.stroke(),W.beginPath(),W.moveTo(50,88),W.lineTo(78,88),W.moveTo(54,99),W.lineTo(74,99),W.stroke()):P.state==="working"?(W.beginPath(),W.arc(48,48,26,0,Math.PI*2),W.arc(80,76,18,0,Math.PI*2),W.stroke(),W.beginPath(),W.moveTo(31,68),W.lineTo(22,91),W.lineTo(49,82),W.moveTo(76,96),W.lineTo(70,108),W.lineTo(87,99),W.stroke()):(W.beginPath(),W.moveTo(23,104),W.lineTo(105,104),W.moveTo(35,99),W.lineTo(35,76),W.lineTo(51,76),W.lineTo(51,99),W.moveTo(61,99),W.lineTo(61,55),W.lineTo(77,55),W.lineTo(77,99),W.moveTo(87,99),W.lineTo(87,30),W.lineTo(103,30),W.lineTo(103,99),W.stroke()),U.activity.material.map?.dispose(),U.activity.material.map=new br(ke),U.activity.material.map.colorSpace=Wt,U.activity.material.needsUpdate=!0}const xe=(L.replay||L.running)&&(P.state==="working"||P.state==="thinking");U.arm.rotation.x=ie||P.position?.moving?Math.sin(D*5+Z)*.12:xe?Math.sin(D*1.8+Z)*.08:0,U.head.rotation.y=Math.sin(D*(I.level==="frenetic"?.9:.32)+Z)*(I.level==="frenetic"?.12:.055),U.head.rotation.x=(xe&&!ie?.12:0)+I.droop,U.light.scale.setScalar(xe?1+Math.sin(D*2)*.12:1)}),e.updateMatrixWorld();const se=[],w=230,y=86.25;for(const P of ct.values())if(P.idea?.visible){const Z=P.idea.position.clone(),U=Z.clone().applyMatrix4(e.matrixWorldInverse);if(U.z>=0){P.idea.visible=!1;continue}const oe=Z.project(e);if(Math.abs(oe.x)>1.15||Math.abs(oe.y)>1.15){P.idea.visible=!1;continue}let ue=wt.clamp((oe.x+1)*innerWidth/2,90+w/2,innerWidth-w/2-16),Q=(1-oe.y)*innerHeight/2;for(let he=0;he<12&&se.some(I=>Math.abs(ue-I.x)<w+10&&Math.abs(Q-I.y)<y+8);he++)Q-=y+8,Q<110&&(Q=155,ue=Math.min(innerWidth-w/2-16,ue+w+12));se.push({x:ue,y:Q}),P.idea.position.set(ue/innerWidth*2-1,1-Q/innerHeight*2,oe.z).unproject(e),P.idea.quaternion.copy(e.quaternion);const re=2*-U.z*Math.tan(wt.degToRad(e.fov/2))/innerHeight;P.idea.scale.setScalar(w*re/2.7),P.idea.renderOrder=10}}const z=new jn;t.add(z);const Ut=new Set([...ct.values()].flatMap(D=>[D.group,D.sign,D.activity,D.meter,D.zzz]));for(const D of[...t.children])D!==z&&!Ut.has(D)&&z.add(D);function ut(D){Lt=wt.clamp(D,0,1);const L=EM(Lt,ct.size);z.scale.setScalar(L.room),[...ct.values()].forEach((ee,ne)=>{const se=L.agents[ne]??1,w=se<.88?se/.88*1.08:1.08-(se-.88)/.12*.08;ee.group.scale.setScalar(w),ee.sign.scale.setScalar(w),ee.activity.scale.set(.8*w,.8*w,1),ee.meter.scale.set(.86*w,.215*w,1),ee.zzz.scale.set(.5*w,.5*w,1)})}return{scene:t,camera:e,colliders:n,stations:Et,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:Le,grow:ut,setOverview:D=>{G.visible=!0},agentPositions:()=>[...ct.values()].map(D=>({id:D.id,position:D.group.position.clone()})),exposure:1}}const li=!0;function rm(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function mu(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function jf(t,e="|"){return t.map(n=>um(n)).join(e)}function gu(t,e){return typeof e=="bigint"?e.toString():e}class AM{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function td(t){return new AM(t)}function RM(t){return t==null}function nd(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function CM(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function Gr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function sm(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function Ni(t){return sm(t._zod.def)??t._zod.def.shape}function am(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return Gr(this,e,i),i},enumerable:!0,configurable:!0})}function om(t,e,n){e in t?Gr(t,e,n):t[e]=n}function zr(t,e,n,i){const r=Ni(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?am(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):om(t,s,i?i(a.value,s):a.value))}}function PM(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?am(t,n,()=>e[n]):om(t,n,i.value))}}function Dn(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function IM(t){return JSON.stringify(t)}function LM(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const lm="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function sl(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const NM=td(()=>{if(hi.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function Ia(t){if(sl(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(sl(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function cm(t){return Ia(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const DM=new Set(["string","number","symbol"]);function wl(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function lr(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Be(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function um(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function UM(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const dm={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},kM={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function OM(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return zr(s,t,Tl(t,e)),lr(t,Dn(n,{shape:s,checks:[]}))}function Tl(t,e){const n=Ni(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function FM(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(Tl(t,e)),a={};return zr(a,t,Reflect.ownKeys(Ni(t)).filter(o=>!s.has(o))),lr(t,Dn(n,{shape:a,checks:[]}))}function zM(t,e){if(!Ia(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=Ni(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return lr(t,Dn(t._zod.def,{shape:fm(t,e)}))}function fm(t,e){const n={};return zr(n,t,Reflect.ownKeys(Ni(t))),PM(n,e),n}function BM(t,e){if(!Ia(e))throw new Error("Invalid input to safeExtend: expected a plain object");return lr(t,Dn(t._zod.def,{shape:fm(t,e)}))}function $M(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};zr(n,t,Reflect.ownKeys(Ni(t))),zr(n,e,Reflect.ownKeys(Ni(e)));const i=Dn(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return lr(t,i)}function Yf(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(Tl(e,n)):void 0,l={};return zr(l,e,Reflect.ownKeys(Ni(e)),t&&((c,u)=>o&&!o.has(u)?c:new t({type:"optional",innerType:c}))),lr(e,Dn(e._zod.def,{shape:l,checks:[]}))}function HM(t,e,n){const i=n?new Set(Tl(e,n)):void 0,r={};return zr(r,e,Reflect.ownKeys(Ni(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),lr(e,Dn(e._zod.def,{shape:r}))}function Ti(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function GM(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function hm(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function ra(t){return typeof t=="string"?t:t?.message}function Kf(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function _u(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function Os(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:ra(t.inst?._zod.def?.error?.(t))??ra(s?.(t))??ra(e?.error?.(t))??ra(n.customError?.(t))??ra(n.localeError?.(t))??"Invalid input",o={};for(const l of Object.keys(t))l==="inst"||l==="schema"||l==="continue"||l==="input"||l==="__proto__"||(o[l]=t[l]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const VM=/[\uD800-\uDBFF]/;function id(t){const e=t.length;if(!VM.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function rd(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function WM(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function La(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function XM(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):ZM(t,n,i.value)}}function sr(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function pm(t,e,n){return sr(t,e,n,!1)}function mm(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return sr(this,n,i(this))},set(r){sr(this,n,r)}})}return e}function ZM(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:sr(this,e,n.bind(this))},set(i){sr(this,e,i)}})}function qM(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let dc,Gi=!1;const jM={configurable:!0,get(){Gi=!0}};function mt(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&dc!==t._zod){dc=void 0;return}dc=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,jM);const r=Gi;Gi=!1;try{const s=n(this);return Gi?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Gi=Gi||r,s}catch(s){throw delete this[e],Gi=Gi||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function YM(t,e,n,i){const r=qM(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const KM="~constantCatch";function JM(t){const e=()=>t;return e[KM]=!0,e}var Jf;const fc={value:void 0,enumerable:!1};let Qf="captureStackTrace"in Error?Error:null;function QM(t){const e=Qf;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return Qf=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function ce(t,e,n,i){const r={};function s(d){this.def=d,this.constr=f,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function l(d,h){if(d._zod){if(d._zod.traits.has(t))return}else{fc.value=new s(h);try{Object.defineProperty(d,"_zod",fc)}finally{fc.value=void 0}}if(d._zod.traits.add(t),e(d,h),o){const _=Object.getPrototypeOf(d),p=d._zod.constr.prototype;let m=_;for(;m&&m!==p;)m=Object.getPrototypeOf(m);const v=m??_;o.has(v)||(o.add(v),XM(v,a))}const g=f.prototype;for(const _ in g)Object.prototype.hasOwnProperty.call(g,_)&&(_ in d||(d[_]=g[_].bind(d)))}const c=i?.Parent??Object;class u extends c{}Object.defineProperty(u,"name",{value:t});function f(d){const h=i?.Parent?QM(u):this;l(h,d);const g=h._zod.deferred;if(g){for(const p of g)p();h._zod.deferred=void 0}const _=globalThis.__zod_globalConfig?.postProcessor;return _&&_(h),h}return Object.defineProperty(f,"init",{value:l}),Object.defineProperty(f,Symbol.hasInstance,{value:d=>i?.Parent&&d instanceof i.Parent?!0:d?._zod?.traits?.has(t)}),Object.defineProperty(f,"name",{value:t}),f}class Ir extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class gm extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Jf=globalThis).__zod_globalConfig??(Jf.__zod_globalConfig={});const hi=globalThis.__zod_globalConfig;function cr(t){return t&&Object.assign(hi,t),hi}function eE(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,gu,2)),t.message}function tE(t){this._zod.message=t}const nE={get:eE,set:tE,enumerable:!0,configurable:!0},hc={value:void 0,enumerable:!1},eh=new WeakSet([Object.prototype,Error.prototype]),iE=(t,e)=>{t.name="$ZodError",hc.value=e,Object.defineProperty(t,"issues",hc),hc.value=void 0,Object.defineProperty(t,"message",nE);const n=Object.getPrototypeOf(t);eh.has(n)||(eh.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},rE=ce("$ZodError",iE);function sE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function aE(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?sE(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function oE(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let l=n,c=0;for(;c<o.length;){const u=o[c],f=c===o.length-1;if(u==="_errors"){f&&l._errors.push(e(a)),c++;continue}Object.prototype.hasOwnProperty.call(l,u)||Object.defineProperty(l,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const d=l[u];f&&d._errors.push(e(a)),l=d,c++}}}};return i(t),n}function Al(t,e){return{callee:e?.callee??t,Err:e?.Err}}const sd=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new Ir;if(o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>Os(c,a,cr())));throw lm(l,s?.callee??e),l}return o.value};return e},ad=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>Os(c,a,cr())));throw lm(l,s?.callee??e),l}return o.value};return e},od=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new Ir;return s.issues.length?_m(t,s.issues,r):{success:!0,data:s.value}};function _m(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>Os(r,n,cr()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const ld=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?_m(t,s.issues,r):{success:!0,data:s.value}},lE=Symbol.for("zod.compile.invalid"),cE=Symbol.for("zod.compile.fallback"),uE=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==lE)return!0;if(i.definite===!0&&n===void 0)return!1}return dE(t,e,n)});function dE(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[cE]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new Ir;return s.issues.length===0}const fE=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},hE=t=>{const e=sd(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,Al(n,a))};return n},pE=t=>{const e=sd(t),n=(i,r,s,a)=>e(i,r,s,Al(n,a));return n},mE=t=>{const e=ad(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,Al(n,a))};return n},gE=t=>{const e=ad(t),n=async(i,r,s,a)=>await e(i,r,s,Al(n,a));return n},_E=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return od(t)(e,n,r)},vE=t=>(e,n,i)=>od(t)(e,n,i),xE=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return ld(t)(e,n,r)},yE=t=>async(e,n,i)=>ld(t)(e,n,i),bE=/^[cC][0-9a-z]{6,}$/,SE=/^[0-9a-z]+$/,ME=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,EE=/^[0-9a-vA-V]{20}$/,wE=/^[A-Za-z0-9]{27}$/,TE=/^[a-zA-Z0-9_-]{21}$/;function AE(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const RE=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,CE=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,th=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,PE=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,IE="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function LE(){return new RegExp(IE,"u")}const NE=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,DE=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,UE=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,kE=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,OE=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,FE=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,zE=/^https?$/,BE=/^\+[1-9]\d{6,14}$/,vm="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function $E(t){return new RegExp(`^${t}$`)}const HE=$E(vm);function vu(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function GE(t){return new RegExp(`^${vu(t)}$`)}function VE(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${vu({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${vu({precision:t.precision})}`:n;return new RegExp(`^${vm}T(?:${i})$`)}const WE=/^[\s\S]{0,}$/,XE=/^-?\d+(?:\.\d+)?$/,ZE=/^(?:true|false)$/i,qE=/^[^A-Z]*$/,jE=/^[^a-z]*$/,Rn=ce("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),cd=t=>{const e=t.value;return!RM(e)&&e.length!==void 0},al={number:"number",bigint:"bigint",object:"date"},xm=ce("$ZodCheckLessThan",(t,e)=>{Rn.init(t,e);const n=al[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:al[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),ym=ce("$ZodCheckGreaterThan",(t,e)=>{Rn.init(t,e);const n=al[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:al[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),YE=ce("$ZodCheckMultipleOf",(t,e)=>{Rn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):CM(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),KE=ce("$ZodCheckNumberFormat",(t,e)=>{Rn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=dm[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),JE=ce("$ZodCheckMaxLength",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=cd),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?id(r):s)<=e.maximum)return;const o=rd(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),QE=ce("$ZodCheckMinLength",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=cd),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?id(r):s)>=e.minimum)return;const o=rd(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),ew=ce("$ZodCheckLengthEquals",(t,e)=>{var n;Rn.init(t,e),(n=t._zod.def).when??(n.when=cd),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?id(r):s;if(a===e.length)return;const o=rd(r),l=a>e.length;i.issues.push({origin:o,...l?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),Rl=ce("$ZodCheckStringFormat",(t,e)=>{var n,i;Rn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),tw=ce("$ZodCheckRegex",(t,e)=>{Rl.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),nw=ce("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=qE),Rl.init(t,e)}),iw=ce("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=jE),Rl.init(t,e)}),rw=ce("$ZodCheckIncludes",(t,e)=>{Rn.init(t,e);const n=wl(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),sw=ce("$ZodCheckStartsWith",(t,e)=>{Rn.init(t,e);const n=new RegExp(`^${wl(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),aw=ce("$ZodCheckEndsWith",(t,e)=>{Rn.init(t,e);const n=new RegExp(`.*${wl(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),ow=ce("$ZodCheckOverwrite",(t,e)=>{Rn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class lw{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const cw={major:4,minor:6,patch:7},zt=ce("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=cw;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,l,c)=>{if(o.memo)return o;let u=Ti(o),f;for(const d of l){if(d._zod.def.when){if(GM(o)||!d._zod.def.when(o))continue}else if(u)continue;const h=o.issues.length,g=d._zod.check(o);if(g instanceof Promise&&c?.async===!1)throw new Ir;if(f||g instanceof Promise)f=(f??Promise.resolve()).then(async()=>{await g,o.issues.length!==h&&(_u(o.issues,h,t),u||(u=Ti(o,h)))});else{if(o.issues.length===h)continue;_u(o.issues,h,t),u||(u=Ti(o,h))}}return f?f.then(()=>o):o},a=(o,l,c)=>{if(Ti(o))return o.aborted=!0,o;const u=s(l,r,c);if(u instanceof Promise){if(c.async===!1)throw new Ir;return u.then(f=>t._zod.parse(f,c))}return t._zod.parse(u,c)};t._zod.run=(o,l)=>{if(l.skipChecks)return t._zod.parse(o,l);if(l.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...l,skipChecks:!0});return u instanceof Promise?u.then(f=>a(f,o,l)):a(u,o,l)}const c=t._zod.parse(o,l);if(c instanceof Promise){if(l.async===!1)throw new Ir;return c.then(u=>s(u,r,l))}return s(c,r,l)}}},{get"~standard"(){return pm(this,"~standard",Sm(this))},set"~standard"(t){sr(this,"~standard",t)}}),bm=(t,e)=>t.issues.length?{issues:t.issues.map(n=>Os(n,e,cr()))}:{value:t.value};async function uw(t,e){const n={async:!0};return bm(await t._zod.run({value:e,issues:[]},n),n)}function Sm(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return bm(i,n)}catch{}return uw(t,e)},vendor:"zod",version:1}}const ud=ce("$ZodString",(t,e)=>{zt.init(t,e),t._zod.pattern=e.pattern??WE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),Tt=ce("$ZodStringFormat",(t,e)=>{Rl.init(t,e),ud.init(t,e)}),dw=ce("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=CE),Tt.init(t,e)}),fw=ce("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=th(i))}else e.pattern??(e.pattern=th());Tt.init(t,e)}),hw=ce("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=PE),Tt.init(t,e)}),Mm=1,ol=2;function Em(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function pw(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?Em(t)||ol:mw(t,e)}function mw(t,e){if(!e.normalize&&e.protocol?.source===zE.source&&!/^https?:\/\//i.test(t))return Mm;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??ol}return new URL(t)}catch{return ol}}const gw=/[\t\n\r]/g;function nh(t){return t.replace(gw,"")}function _w(t,e){return e.lastIndex=0,e.test(t.hostname)}function vw(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const xw=ce("$ZodURL",(t,e)=>{Tt.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=pw(i,e);if(r===Mm){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===ol){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=nh(i);return}e.hostname&&!_w(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!vw(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:nh(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),yw=ce("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=LE()),Tt.init(t,e)}),bw=ce("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?TE:AE(e.length)),Tt.init(t,e)}),Sw=ce("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=bE),Tt.init(t,e)}),Mw=ce("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=SE),Tt.init(t,e)}),Ew=ce("$ZodULID",(t,e)=>{e.pattern??(e.pattern=ME),Tt.init(t,e)}),ww=ce("$ZodXID",(t,e)=>{e.pattern??(e.pattern=EE),Tt.init(t,e)}),Tw=ce("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=wE),Tt.init(t,e)}),Aw=ce("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=VE(e)),Tt.init(t,e)}),Rw=ce("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=HE),Tt.init(t,e)}),Cw=ce("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=GE(e)),Tt.init(t,e)}),Pw=ce("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=RE),Tt.init(t,e)}),Iw=ce("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=NE),Tt.init(t,e)}),Lw=/^[0-9a-fA-F:.]+$/;function wm(t){return Lw.test(t)?Em(`http://[${t}]`):!1}const Nw=ce("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=DE),Tt.init(t,e),t._zod.check=n=>{wm(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),Dw=ce("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=UE),Tt.init(t,e)});function Uw(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:wm(n)}const kw=ce("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=kE),Tt.init(t,e),t._zod.check=n=>{Uw(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function Tm(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const Am=/^[0-9a-zA-Z+/]*={0,2}$/,Ow=ce("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Am),Tt.init(t,e),t._zod.check=n=>{Tm(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),dd=/^[A-Za-z0-9_-]*$/;function Fw(t){if(!dd.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return Tm(n)}const zw=ce("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=dd),Tt.init(t,e),t._zod.check=n=>{Fw(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),Bw=ce("$ZodE164",(t,e)=>{e.pattern??(e.pattern=BE),Tt.init(t,e)});function $w(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Hw=ce("$ZodJWT",(t,e)=>{Tt.init(t,e),t._zod.check=n=>{$w(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),Rm=ce("$ZodNumber",(t,e)=>{zt.init(t,e),t._zod.pattern=XE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),Gw=ce("$ZodNumberFormat",(t,e)=>{KE.init(t,e),Rm.init(t,e)}),Vw=ce("$ZodBoolean",(t,e)=>{zt.init(t,e),t._zod.pattern=ZE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=!!n.value}catch{}const r=n.value;return typeof r=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:t}),n}}),Ww=ce("$ZodUnknown",(t,e)=>{zt.init(t,e),t._zod.parse=n=>n}),Xw=ce("$ZodNever",(t,e)=>{zt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Zw(t,e){const n=Kf(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[l,c]of Kf(t._zod.def.checks))if(o>l&&c._zod.def.when(s)){const u=s.issues.length;return c._zod.check(s),s.issues[u].continue=!1,_u(s.issues,u,t),s}}return r(s,a)}}const qw=t=>Array.isArray(t)?t.length:-1;function ih(t,e,n){t.issues.length&&e.issues.push(...hm(n,t.issues)),e.value[n]=t.value}const jw=ce("$ZodArray",(t,e)=>{zt.init(t,e);const n=hi.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let l=0;l<s.length;l++){const c=s[l],u=e.element._zod.run({value:c,issues:[]},r);if(u instanceof Promise)a.push(u.then(f=>ih(f,i,l)));else if(ih(u,i,l),o&&u.issues.length!==0&&Ti(u))break}return a.length?Promise.all(a).then(()=>i):i},Zw(t,qw)});function ll(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...hm(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const Yw=[];function Cm(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:Yw,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=UM(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function Pm(t,e,n,i,r,s,a){const o=[],l=r.keySet,c=r.catchall._zod,u=c.def.type,f=c.optin,d=c.optout;let h=0;for(const g in e){if(a&&n.issues.length!==h){if(Ti(n,h))break;h=n.issues.length}if(l.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const _=c.run({value:e[g],issues:[]},i);_ instanceof Promise?t.push(_.then(p=>ll(p,n,g,e,f,d))):ll(_,n,g,e,f,d)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const Kw=ce("$ZodObject",(t,e)=>{zt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const c=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),c.raw=u,u};c.raw=i,Object.defineProperty(e,"shape",{get:c})}const r=td(()=>Cm(e));mt(t,"propValues",c=>{const u=c.def.shape,f={};for(const d in u){const h=u[d]._zod;if(h.values){Object.prototype.hasOwnProperty.call(f,d)||Gr(f,d,new Set);for(const g of h.values)f[d].add(g);h.optin!==void 0&&f[d].add(void 0)}}return f});const s=sl,a=e.catchall;let o;const l=hi.memoizer;l?.attach(t),t._zod.parse=(c,u)=>{o??(o=r.value);const f=c.value;if(!s(f))return c.issues.push({expected:"object",code:"invalid_type",input:f,inst:t}),c;c.value=l?l.alloc(t,c,{},u):{};const d=[],h=o.shape,g=u?.abortEarly;let _=c.issues.length;for(const p of o.allKeys){if(g&&c.issues.length!==_){if(Ti(c,_))break;_=c.issues.length}if(p==="__proto__")continue;const m=h[p],v=m._zod.optin,M=m._zod.optout,b=m._zod.run({value:f[p],issues:[]},u);b instanceof Promise?d.push(b.then(T=>ll(T,c,p,f,v,M))):ll(b,c,p,f,v,M)}return a?Pm(d,f,c,u,r.value,t,g===!0):d.length?Promise.all(d).then(()=>c):c}}),Jw=ce("$ZodObjectJIT",(t,e)=>{Kw.init(t,e);const n=t._zod.parse,i=td(()=>Cm(e)),r=hi.memoizer,s=h=>{const g=i.value,_=g.symbolKeys,p=new lw(["payload","ctx"],{shape:h,inst:t,memo:r,syms:_}),m=T=>`shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`,v=(T,A)=>`
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
          }`;p.write("const input = payload.value;");const M=Object.create(null);let b=0;for(const T of g.allKeys)M[T]=`key_${b++}`;p.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const T of g.allKeys){if(T==="__proto__")continue;const A=M[T],x=typeof T=="symbol"?`syms[${_.indexOf(T)}]`:IM(T),S=`${x} in input`,O=h[T],N=O?._zod?.optin,R=N!==void 0,$=O?._zod?.optout==="optional";if(p.write(`const ${A} = ${m(x)};`),R&&$){const B=N==="optional"?`${A}_present`:`${A}.value !== undefined || ${A}_present`;p.write(`
        const ${A}_present = ${S};
        if (!${A}.issues.length || ${A}_present) {
          if (${A}.issues.length) {${v(A,x)}
          }

          if (${B}) {
            newResult[${x}] = ${A}.value;
          }
        }

      `)}else R?(p.write(`
        if (${A}.issues.length) {${v(A,x)}
        }
      `),N==="defaulted"?p.write(`newResult[${x}] = ${A}.value;`):p.write(`
        if (${A}.value !== undefined || ${S}) {
          newResult[${x}] = ${A}.value;
        }
      `)):p.write(`
        const ${A}_present = ${S};
        if (${A}.issues.length) {${v(A,x)}
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

      `)}return p.write("payload.value = newResult;"),p.write("return payload;"),p.compile()};let a;const o=sl,l=!hi.jitless,u=l&&NM.value,f=e.catchall;let d;t._zod.parse=(h,g)=>{d??(d=i.value);const _=h.value;return o(_)?l&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),h=a(h,g),f?Pm([],_,h,g,d,t,g?.abortEarly===!0):h):n(h,g):(h.issues.push({expected:"object",code:"invalid_type",input:_,inst:t}),h)}});function rh(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!Ti(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>Os(a,i,cr())))}),e)}const Qw=ce("$ZodUnion",(t,e)=>{zt.init(t,e),mt(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),mt(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),mt(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),mt(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>nd(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const l=o._zod.run({value:i.value,issues:[]},r);if(l instanceof Promise)a.push(l),s=!0;else{if(l.issues.length===0)return l;a.push(l)}}return s?Promise.all(a).then(o=>rh(o,i,t,r)):rh(a,i,t,r)}}),e1=ce("$ZodIntersection",(t,e)=>{zt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([l,c])=>sh(n,l,c)):sh(n,s,a)}});function xu(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Ia(t)&&Ia(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=xu(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=xu(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function sh(t,e,n){const i=new Map;let r;const s=new Map,a=(c,u)=>{let f;if(c.code==="unrecognized_keys"&&!c.path?.length)r??(r=c),f=c.keys;else if(c.code==="invalid_key"&&c.origin==="record"&&c.path?.length===1){const d=String(c.path[0]);s.has(d)||s.set(d,c),f=[d]}else return!1;for(const d of f)i.has(d)||i.set(d,{}),i.get(d)[u]=!0;return!0};for(const c of e.issues)a(c,"l")||t.issues.push(c);for(const c of n.issues)a(c,"r")||t.issues.push(c);const o=[...i].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(o.length){const c=r?o.filter(u=>r.keys.includes(u)):[];c.length&&t.issues.push({...r,keys:c});for(const u of o)!c.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const l=xu(e.value,n.value);if(!l.valid){if(Ti(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)}return t.value=l.data,t}const t1=ce("$ZodEnum",(t,e)=>{zt.init(t,e);const n=mu(e.entries),i=new Set(n);t._zod.values=i,mt(t,"pattern",r=>{const s=mu(r.def.entries).filter(a=>DM.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>wl(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),n1=ce("$ZodTransform",(t,e)=>{zt.init(t,e),t._zod.optin="optional",hi.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new gm(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new Ir;return n.value=r,n}});function ah(t,e){return t.value=e.issues.length?void 0:e.value,t}const Im=ce("$ZodOptional",(t,e)=>{zt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",mt(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),mt(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${nd(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>ah(n,s)):ah(n,r)}return e.innerType._zod.run(n,i)}}),i1=ce("$ZodExactOptional",(t,e)=>{Im.init(t,e),mt(t,"values",n=>n.def.innerType._zod.values),mt(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),r1=ce("$ZodNullable",(t,e)=>{zt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin),mt(t,"optout",n=>n.def.innerType._zod.optout),mt(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${nd(i.source)}|null)$`):void 0}),mt(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),s1=ce("$ZodDefault",(t,e)=>{zt.init(t,e),t._zod.optin="defaulted",mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>oh(s,e)):oh(r,e)}});function oh(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const a1=ce("$ZodPrefault",(t,e)=>{zt.init(t,e),t._zod.optin="defaulted",mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),o1=ce("$ZodNonOptional",(t,e)=>{zt.init(t,e),mt(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>lh(s,t)):lh(r,t)}});function lh(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function ch(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>Os(r,i,cr()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const l1=ce("$ZodCatch",(t,e)=>{zt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),mt(t,"optout",n=>n.def.innerType._zod.optout),mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>ch(n,s,e,i)):ch(n,r,e,i)}}),c1=ce("$ZodPipe",(t,e)=>{zt.init(t,e),mt(t,"values",n=>n.def.in._zod.values),mt(t,"optin",n=>n.def.in._zod.optin),mt(t,"optout",n=>n.def.out._zod.optout),mt(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>So(a,e.in,i)):So(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>So(s,e.out,i)):So(r,e.out,i)}});function So(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const u1=ce("$ZodReadonly",(t,e)=>{zt.init(t,e),mt(t,"propValues",n=>n.def.innerType._zod.propValues),mt(t,"values",n=>n.def.innerType._zod.values),mt(t,"optin",n=>n.def.innerType?._zod?.optin),mt(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(uh):uh(r)}});function uh(t){return t.memo||(t.value=Object.freeze(t.value)),t}const d1=ce("$ZodCustom",(t,e)=>{Rn.init(t,e),zt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>dh(s,n,i,t));dh(r,n,i,t)}});function dh(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(La(r))}}class f1 extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const yu="~memo",fh=[];function Lm(t){return t!==null&&typeof t=="object"}function pc(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const Nm=new WeakMap,fa=0,zo=1,ya=2;function Bo(t,e,n){const i=Nm.get(t);if(i!==void 0)return i?ya:fa;if(e.has(t))return ya;e.add(t);let r=fa;const s=u=>{if(r!==ya&&u?._zod){const f=Bo(u,e);f>r&&(r=f)}},a=(u,f)=>{let d=fa;for(const h of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,h);if(!g.enumerable)continue;const _=g.get?zo:g.value?._zod?Bo(g.value,e):fa;_>d&&(d=_)}return d},o=u=>{u>r&&(r=u)},l=t._zod.def;switch(l.type){case"object":{const u=sm(l);o(u?a(u):zo),s(l.catchall);break}case"array":s(l.element);break;case"tuple":for(const u of l.items)s(u);s(l.rest);break;case"record":case"map":s(l.keyType),s(l.valueType);break;case"set":s(l.valueType);break;case"union":for(const u of l.options)s(u);break;case"intersection":s(l.left),s(l.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(l.innerType);break;case"pipe":s(l.in),s(l.out);break;case"function":s(l.input),s(l.output);break;case"lazy":{const u=l._cachedInner??void 0;o(u?Bo(u,e):zo);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in l){const f=Object.getOwnPropertyDescriptor(l,u);if(!f||f.get)continue;const d=f.value;if(!(!d||typeof d!="object")){if(d._zod)s(d);else if(Array.isArray(d))for(const h of d)s(h)}}}return e.delete(t),h1(t,r)}function h1(t,e){return e!==zo&&Nm.set(t,e===ya),e}function p1(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let Mo;const Eo=[],m1={alloc(t,e,n){const i=Mo;if(!i)return n;Mo=void 0;const r={value:n,issues:null};return i.set(e.value,r),Eo.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&_1(s,r.value))throw new f1;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(l,c)=>{if(n===void 0){const m=Bo(t,new Set);if(m===fa)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(l,c);m===ya||i?n=!0:i=!0}const u=l.value;if(!Lm(u))return a(l,c);let f=c[yu];f||(f={buckets:new WeakMap,backEdges:void 0},c[yu]=f);let d;r===c?d=s:(d=p1(f,t),r=c,s=d);const h=d.get(u);if(h)return l.value=h.value,h.issues?h.issues.length&&l.issues.push(...pc(h.issues)):(l.memo=!0,f.backEdges??(f.backEdges=new WeakSet),f.backEdges.add(h.value)),l;Mo=d;const g=Eo.length,_=a(l,c);Mo=void 0;const p=Eo.length>g?Eo.pop():void 0;return _ instanceof Promise?_.then(m=>(p&&(p.issues=m.issues.length?pc(m.issues):fh),m)):(p&&(p.issues=_.issues.length?pc(_.issues):fh),_)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function g1(){return m1}function _1(t,e){const n=t[yu]?.backEdges;return n!==void 0&&Lm(e)&&n.has(e)}const v1=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=WM(s.input),l=r(o,s.input);return`Invalid input: expected ${a}, received ${l}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${um(s.values[0])}`:`Invalid option: expected one of ${jf(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${jf(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function x1(){return{localeError:v1()}}var hh;class y1{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function b1(){return new y1}(hh=globalThis).__zod_globalRegistry??(hh.__zod_globalRegistry=b1());const ha=globalThis.__zod_globalRegistry;function Dm(t){return t.checks&&(t.checks=[...t.checks]),t}function S1(t,e){return new t(Dm({type:"string",...Be(e)}))}function M1(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Be(e)})}function E1(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Be(e)})}function w1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Be(e)})}function T1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Be(e)})}function A1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Be(e)})}function R1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Be(e)})}function C1(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Be(e)})}function P1(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Be(e)})}function I1(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Be(e)})}function L1(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Be(e)})}function N1(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Be(e)})}function D1(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Be(e)})}function U1(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Be(e)})}function k1(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Be(e)})}function O1(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Be(e)})}function F1(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Be(e)})}function z1(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Be(e)})}function B1(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Be(e)})}function $1(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Be(e)})}function H1(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Be(e)})}function G1(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Be(e)})}function V1(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Be(e)})}function W1(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Be(e)})}function X1(t,e){return new t({type:"string",format:"date",check:"string_format",...Be(e)})}function Z1(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Be(e)})}function q1(t,e){return new t({type:"string",format:"duration",check:"string_format",...Be(e)})}function j1(t,e){return new t(Dm({type:"number",checks:[],...Be(e)}))}function Y1(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Be(e)})}function K1(t,e){return new t({type:"boolean",...Be(e)})}function J1(t){return new t({type:"unknown"})}function Q1(t,e){return new t({type:"never",...Be(e)})}function ph(t,e){return new xm({check:"less_than",...Be(e),value:t,inclusive:!1})}function mc(t,e){return new xm({check:"less_than",...Be(e),value:t,inclusive:!0})}function mh(t,e){return new ym({check:"greater_than",...Be(e),value:t,inclusive:!1})}function gc(t,e){return new ym({check:"greater_than",...Be(e),value:t,inclusive:!0})}function gh(t,e){return new YE({check:"multiple_of",...Be(e),value:t})}function Um(t,e){return new JE({check:"max_length",...Be(e),maximum:t})}function cl(t,e){return new QE({check:"min_length",...Be(e),minimum:t})}function km(t,e){return new ew({check:"length_equals",...Be(e),length:t})}function eT(t,e){return new tw({check:"string_format",format:"regex",...Be(e),pattern:t})}function tT(t){return new nw({check:"string_format",format:"lowercase",...Be(t)})}function nT(t){return new iw({check:"string_format",format:"uppercase",...Be(t)})}function iT(t,e){return new rw({check:"string_format",format:"includes",...Be(e),includes:t})}function rT(t,e){return new sw({check:"string_format",format:"starts_with",...Be(e),prefix:t})}function sT(t,e){return new aw({check:"string_format",format:"ends_with",...Be(e),suffix:t})}function Fs(t){return new ow({check:"overwrite",tx:t})}function aT(t){return Fs(e=>e.normalize(t))}function oT(){return Fs(t=>t.trim())}function lT(){return Fs(t=>t.toLowerCase())}function cT(){return Fs(t=>t.toUpperCase())}function uT(){return Fs(t=>LM(t))}function dT(t,e,n){return new t({type:"array",element:e,...Be(n)})}function fT(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Be(n)})}function hT(t,e){const n=pT(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(La(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(La(s))}},t(i.value,i)),e);return n}function pT(t,e){const n=new Rn({check:"custom",...Be(e)});return n._zod.check=t,n}function ba(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Gr(t,i,n[i]);return t}function Om(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??ha,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function zs(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function an(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const d=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(t,e,d,u)}const f=t._zod.parent;f&&(a.ref||(a.ref=f),an(f,e,u),e.seen.get(f).isParent=!0)}const l=e.metadataRegistry.get(t);return l&&ba(a.schema,l),e.io==="input"&&_n(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function _h(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function Fm(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const l=i.get(o);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const f=t.external.registry.get(a[0])?.id,d=t.external.uri??(g=>g);if(f)return{ref:d(f)};const h=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=h,{defId:h,ref:`${d("__shared")}#/${o}/${_h(h)}`}}const l="#",c=`${l}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:l};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:c+_h(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:l,defId:c}=r(a);o.def={...o.schema},c&&(o.defId=c);const u=o.schema;for(const f in u)delete u[f];u.$ref=l};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const c=t.external.registry.get(a[0])?.id;if(e!==a[0]&&c){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function zm(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;zm(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const Bm=new Set(["type","properties","required","additionalProperties"]),vh=["oneOf","anyOf"];function xh(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function bu(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!Bm.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const c of e){const u=c.properties?.[a]??xh(c);u!=null&&(o.some(f=>JSON.stringify(f)===JSON.stringify(u))||o.push(u))}const l=o.length===1?o[0]:bu(o)??{allOf:o};Gr(n,a,l)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=xh(a);o&&!s.some(l=>JSON.stringify(l)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function mT(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of Bm)if(r in t)return;const n=e.filter(r=>vh.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=bu(e);else{const r=n[0],s=vh.find(l=>Array.isArray(r[l]));if(Object.keys(r).length!==1)return;const a=e.filter(l=>l!==r),o=r[s].map(l=>bu([...a,l]));if(o.some(l=>!l))return;i={[s]:o}}i&&(delete t.allOf,ba(t,i))}function $m(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const l=t.seen.get(o);if(l.ref===null)return;const c=l.def??l.schema,u={...c},f=l.ref;if(l.ref=null,f){i(f);const h=t.seen.get(f),g=h.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(g)):ba(c,g),ba(c,u),o._zod.parent===f)for(const p in c)p==="$ref"||p==="allOf"||p in u||delete c[p];if(g.$ref&&h.def)for(const p in c)p==="$ref"||p==="allOf"||p in h.def&&JSON.stringify(c[p])===JSON.stringify(h.def[p])&&delete c[p]}const d=o._zod.parent;if(d&&d!==f){i(d);const h=t.seen.get(d);if(h?.schema.$ref&&(c.$ref=h.schema.$ref,h.def))for(const g in c)g==="$ref"||g==="allOf"||g in h.def&&JSON.stringify(c[g])===JSON.stringify(h.def[g])&&delete c[g]}t.override({zodSchema:o,jsonSchema:c,path:l.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())zm(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const l of t.seen.values())for(const c of[l.schema,l.def]){const u=c?.allOf;if(!Array.isArray(u))continue;const f=o.get(u);f?f.push(c):o.set(u,[c])}for(const l of t.intersections)for(const c of o.get(l)??[])mT(c)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}ba(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const l=o[1];l.def&&l.defId&&(l.def.id===l.defId&&delete l.def.id,Gr(a,l.defId,l.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:ul(e,"input",t.processors),output:ul(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function _n(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return _n(i.element,n);if(i.type==="set")return _n(i.valueType,n);if(i.type==="lazy")return _n(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return _n(i.innerType,n);if(i.type==="intersection")return _n(i.left,n)||_n(i.right,n);if(i.type==="record"||i.type==="map")return _n(i.keyType,n)||_n(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:_n(i.in,n)||_n(i.out,n);if(i.type==="object"){for(const r in i.shape)if(_n(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(_n(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(_n(r,n))return!0;return!!(i.rest&&_n(i.rest,n))}return!1}const gT=(t,e={})=>n=>{const i=Om({...n,processors:e});return an(t,i),Fm(i,t),$m(i,t)},ul=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=Om({...r??{},target:s,io:e,processors:n});return an(t,a),Fm(a,t),$m(a,t)},Es=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},ws=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},yh=(t,e)=>{Es(t,"minimum",e),ws(t,"maximum",e)},Hm=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},Gm=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},Vm=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},Wm=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},bh=(t,e)=>Es(t,"minimum",e.minimum),Sh=(t,e)=>ws(t,"maximum",e.maximum),Mh=t=>(e,n)=>{Wm(e,n.format);const[i,r]=t[n.format];Es(e,"minimum",i),ws(e,"maximum",r)},_T={greater_than:(t,e)=>Es(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>ws(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>Hm(t,e.value),number_format:Mh(dm),bigint_format:Mh(kM),min_length:bh,max_length:Sh,length_equals:(t,e)=>yh(t,e.length),min_size:bh,max_size:Sh,size_equals:(t,e)=>yh(t,e.size),string_format:(t,e)=>{Wm(t,e.format),e.pattern&&Gm(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>Vm(t,e.mime)};function ci(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)_T[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&Es(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&Es(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&ws(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&ws(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&Hm(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&Vm(e,r.mime);for(const s of r.patterns??[])Gm(e,s);return e}const vT={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},xT=new Map([[Am,OE],[dd,FE]]),yT=t=>xT.get(t)??t,bT=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:l,contentEncoding:c,laxFormat:u}=ci(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=vT[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),c&&(r.contentEncoding=c),l&&l.size>0){const f=[...l].map(yT);f.length===1?r.pattern=f[0].source:f.length>1&&(r.allOf=[...f.map(d=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:d.source}))])}},ST=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:l,exclusiveMinimum:c,isInt:u}=ci(t);r.type=u?"integer":"number";const f=typeof c=="number"&&c>=(s??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(a??Number.POSITIVE_INFINITY),h=e.target==="draft-04"||e.target==="openapi-3.0";if(f?h?(r.minimum=c,r.exclusiveMinimum=!0):r.exclusiveMinimum=c:typeof s=="number"&&(r.minimum=s),d?h?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const m of o)Number.isFinite(m)&&m!==0?g.add(Math.abs(m)):zs(t,e,r,i,`A multipleOf divisor of ${m} cannot be represented in JSON Schema`);const[_,...p]=g;_!==void 0&&(r.multipleOf=_),p.length&&(r.allOf=[...r.allOf??[],...p.map(m=>({multipleOf:m}))])}},MT=(t,e,n,i)=>{n.type="boolean"},ET=(t,e,n,i)=>{n.not={}},wT=(t,e,n,i)=>{},TT=(t,e,n,i)=>{const r=t._zod.def,s=mu(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},AT=(t,e,n,i)=>{zs(t,e,n,i,"Custom types cannot be represented in JSON Schema")},RT=(t,e,n,i)=>{zs(t,e,n,i,"Transforms cannot be represented in JSON Schema")},CT=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=ci(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=an(s.element,e,{...i,path:[...i.path,"items"]})};function Su(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?Su(e.out):e.type==="catch"?Su(e.innerType):t._zod.optin}const PT=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&zs(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const c in a)Gr(r.properties,c,an(a[c],e,{...i,path:[...i.path,"properties",c]}));const l=[];for(const c of Object.keys(a)){const u=s.shape[c];(e.io==="input"?Su(u)===void 0:u._zod.optout===void 0)&&l.push(c)}l.length>0&&(r.required=l),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=an(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},IT=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,l)=>an(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",l]}));s?n.oneOf=a:n.anyOf=a},LT=(t,e,n,i)=>{const r=t._zod.def,s=an(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=an(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=c=>"allOf"in c&&Object.keys(c).length===1,l=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=l,e.intersections.push(l)},NT=(t,e,n,i)=>{const r=t._zod.def,s=an(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},DT=(t,e,n,i)=>{const r=t._zod.def;an(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},fd=Symbol();function Xm(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,l)=>typeof l!="bigint"?l:(s=!0,null));return s?(zs(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),fd):JSON.parse(a)}const UT=(t,e,n,i)=>{const r=t._zod.def;an(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=Xm(r.defaultValue,t,e,n,i);a!==fd&&(n.default=a)},kT=(t,e,n,i)=>{const r=t._zod.def;an(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=Xm(r.defaultValue,t,e,n,i);a!==fd&&(n._prefault=a)},OT=(t,e,n,i)=>{const r=t._zod.def;an(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{zs(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},FT=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;an(a,e,i);const o=e.seen.get(t);o.ref=a},zT=(t,e,n,i)=>{const r=t._zod.def;an(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},Zm=(t,e,n,i)=>{const r=t._zod.def;an(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Eh=new WeakSet([Object.prototype,Error.prototype]);function wo(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const BT=(t,e)=>{rE.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);Eh.has(n)||(Eh.add(n),wo(n,"format",i=>r=>oE(i,r)),wo(n,"flatten",i=>r=>aE(i,r)),wo(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,gu,2)}),wo(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,gu,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Vn=ce("ZodError",BT,void 0,{Parent:Error}),$T=sd(Vn),HT=ad(Vn),GT=od(Vn),VT=ld(Vn),WT=hE(Vn),XT=pE(Vn),ZT=mE(Vn),qT=gE(Vn),jT=_E(Vn),YT=vE(Vn),KT=xE(Vn),JT=yE(Vn);function QT(){hi.localeError||cr(x1())}function hd(){hi.memoizer||cr({memoizer:g1()})}const Bt=ce("ZodType",(t,e)=>(QT(),zt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(Dn(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return lr(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(YA(t,e))},superRefine(t,e){return this.check(KA(t,e))},overwrite(t){return this.check(Fs(t))},optional(){return Ah(this)},exactOptional(){return OA(this)},nullable(){return Rh(this)},nullish(){return Ah(Rh(this))},nonoptional(t){return GA(this,t)},array(){return ds(this)},or(t){return LA([this,t])},and(t){return DA(this,t)},transform(t){return Ch(this,kA(t))},default(t){return BA(this,t)},prefault(t){return HA(this,t)},catch(t){return WA(this,t)},pipe(t){return Ch(this,t)},readonly(){return qA(this)},describe(t){const e=this.clone();return ha.add(e,{description:t}),e},meta(...t){if(t.length===0)return ha.get(this);const e=this.clone();return ha.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return pm(this,"~standard",{...Sm(this),jsonSchema:{input:ul(this,"input"),output:ul(this,"output")}})},set"~standard"(t){sr(this,"~standard",t)},parse:function t(e,n){return $T(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await HT(this,e,n,{callee:t})},safeParse(t,e){return GT(this,t,e)},async safeParseAsync(t,e){return VT(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){sr(this,"spa",t)},validate(t,e){return uE(this,t,e)},validateAsync(t,e){return fE(this,t,e)},encode:function t(e,n){return WT(this,e,n,{callee:t})},decode:function t(e,n){return XT(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await ZT(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await qT(this,e,n,{callee:t})},safeEncode(t,e){return jT(this,t,e)},safeDecode(t,e){return YT(this,t,e)},async safeEncodeAsync(t,e){return KT(this,t,e)},async safeDecodeAsync(t,e){return JT(this,t,e)},toJSONSchema(t){return gT(this,{})(t)},get description(){return ha.get(this)?.description},get _def(){return this._zod.def}}),qm=ce("_ZodString",(t,e)=>{ud.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>bT(t,n,i)},mm({format:t=>ci(t).format??null,minLength:t=>ci(t).minimum??null,maxLength:t=>ci(t).maximum??null},{regex(...t){return this.check(eT(...t))},includes(...t){return this.check(iT(...t))},startsWith(...t){return this.check(rT(...t))},endsWith(...t){return this.check(sT(...t))},min(...t){return this.check(cl(...t))},max(...t){return this.check(Um(...t))},length(...t){return this.check(km(...t))},nonempty(...t){return this.check(cl(1,...t))},lowercase(t){return this.check(tT(t))},uppercase(t){return this.check(nT(t))},trim(){return this.check(oT())},normalize(...t){return this.check(aT(...t))},toLowerCase(){return this.check(lT())},toUpperCase(){return this.check(cT())},slugify(){return this.check(uT())}})),eA=ce("ZodString",(t,e)=>{ud.init(t,e),qm.init(t,e)},{email(t){return this.check(M1(sA,t))},url(t){return this.check(C1(oA,t))},jwt(t){return this.check(V1(SA,t))},emoji(t){return this.check(P1(lA,t))},guid(t){return this.check(E1(aA,t))},uuid(t){return this.check(w1(To,t))},uuidv4(t){return this.check(T1(To,t))},uuidv6(t){return this.check(A1(To,t))},uuidv7(t){return this.check(R1(To,t))},nanoid(t){return this.check(I1(cA,t))},cuid(t){return this.check(L1(uA,t))},cuid2(t){return this.check(N1(dA,t))},ulid(t){return this.check(D1(fA,t))},base64(t){return this.check($1(xA,t))},base64url(t){return this.check(H1(yA,t))},xid(t){return this.check(U1(hA,t))},ksuid(t){return this.check(k1(pA,t))},ipv4(t){return this.check(O1(mA,t))},ipv6(t){return this.check(F1(gA,t))},cidrv4(t){return this.check(z1(_A,t))},cidrv6(t){return this.check(B1(vA,t))},e164(t){return this.check(G1(bA,t))},datetime(t){return this.check(W1(tA,t))},date(t){return this.check(X1(nA,t))},time(t){return this.check(Z1(iA,t))},duration(t){return this.check(q1(rA,t))}});function Ke(t){return S1(eA,t)}const It=ce("ZodStringFormat",(t,e)=>{Tt.init(t,e),qm.init(t,e)}),tA=ce("ZodISODateTime",(t,e)=>{Aw.init(t,e),It.init(t,e)}),nA=ce("ZodISODate",(t,e)=>{Rw.init(t,e),It.init(t,e)}),iA=ce("ZodISOTime",(t,e)=>{Cw.init(t,e),It.init(t,e)}),rA=ce("ZodISODuration",(t,e)=>{Pw.init(t,e),It.init(t,e)}),sA=ce("ZodEmail",(t,e)=>{hw.init(t,e),It.init(t,e)}),aA=ce("ZodGUID",(t,e)=>{dw.init(t,e),It.init(t,e)}),To=ce("ZodUUID",(t,e)=>{fw.init(t,e),It.init(t,e)}),oA=ce("ZodURL",(t,e)=>{xw.init(t,e),It.init(t,e)}),lA=ce("ZodEmoji",(t,e)=>{yw.init(t,e),It.init(t,e)}),cA=ce("ZodNanoID",(t,e)=>{bw.init(t,e),It.init(t,e)}),uA=ce("ZodCUID",(t,e)=>{Sw.init(t,e),It.init(t,e)}),dA=ce("ZodCUID2",(t,e)=>{Mw.init(t,e),It.init(t,e)}),fA=ce("ZodULID",(t,e)=>{Ew.init(t,e),It.init(t,e)}),hA=ce("ZodXID",(t,e)=>{ww.init(t,e),It.init(t,e)}),pA=ce("ZodKSUID",(t,e)=>{Tw.init(t,e),It.init(t,e)}),mA=ce("ZodIPv4",(t,e)=>{Iw.init(t,e),It.init(t,e)}),gA=ce("ZodIPv6",(t,e)=>{Nw.init(t,e),It.init(t,e)}),_A=ce("ZodCIDRv4",(t,e)=>{Dw.init(t,e),It.init(t,e)}),vA=ce("ZodCIDRv6",(t,e)=>{kw.init(t,e),It.init(t,e)}),xA=ce("ZodBase64",(t,e)=>{Ow.init(t,e),It.init(t,e)}),yA=ce("ZodBase64URL",(t,e)=>{zw.init(t,e),It.init(t,e)}),bA=ce("ZodE164",(t,e)=>{Bw.init(t,e),It.init(t,e)}),SA=ce("ZodJWT",(t,e)=>{Hw.init(t,e),It.init(t,e)}),jm=ce("ZodNumber",(t,e)=>{Rm.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ST(t,n,i,r),t.isFinite=!0},mm({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=ci(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=ci(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=ci(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>ci(t).format??null},{gt(t,e){return this.check(mh(t,e))},gte(t,e){return this.check(gc(t,e))},min(t,e){return this.check(gc(t,e))},lt(t,e){return this.check(ph(t,e))},lte(t,e){return this.check(mc(t,e))},max(t,e){return this.check(mc(t,e))},int(t){return this.check(wh(t))},safe(t){return this.check(wh(t))},positive(t){return this.check(mh(0,t))},nonnegative(t){return this.check(gc(0,t))},negative(t){return this.check(ph(0,t))},nonpositive(t){return this.check(mc(0,t))},multipleOf(t,e){return this.check(gh(t,e))},step(t,e){return this.check(gh(t,e))},finite(){return this}}));function Vt(t){return j1(jm,t)}const MA=ce("ZodNumberFormat",(t,e)=>{Gw.init(t,e),jm.init(t,e)});function wh(t){return Y1(MA,t)}const EA=ce("ZodBoolean",(t,e)=>{Vw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>MT(t,n,i)});function wA(t){return K1(EA,t)}const TA=ce("ZodUnknown",(t,e)=>{Ww.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>wT()});function Th(){return J1(TA)}const AA=ce("ZodNever",(t,e)=>{Xw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ET(t,n,i)});function RA(t){return Q1(AA,t)}const CA=ce("ZodArray",(t,e)=>{hd(),jw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>CT(t,n,i,r),t.element=e.element},{min(t,e){return this.check(cl(t,e))},nonempty(t){return this.check(cl(1,t))},max(t,e){return this.check(Um(t,e))},length(t,e){return this.check(km(t,e))},unwrap(){return this.element}});function ds(t,e){return dT(CA,t,e)}const PA=ce("ZodObject",(t,e)=>{hd(),Jw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>PT(t,n,i,r),YM(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return Ar(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(Dn(this._zod.def,{catchall:t}))},passthrough(){return this.clone(Dn(this._zod.def,{catchall:Th()}))},loose(){return this.clone(Dn(this._zod.def,{catchall:Th()}))},strict(){return this.clone(Dn(this._zod.def,{catchall:RA()}))},strip(){return this.clone(Dn(this._zod.def,{catchall:void 0}))},extend(t){return zM(this,t)},safeExtend(t){return BM(this,t)},merge(t){return $M(this,t)},pick(t){return OM(this,t)},omit(t){return FM(this,t)},partial(...t){return Yf(Ym,this,t[0])},exactPartial(...t){return Yf(Km,this,t[0],"exactPartial")},required(...t){return HM(Jm,this,t[0])}});function ri(t,e){const n={type:"object",shape:t??{},...Be(e)};return new PA(n)}const IA=ce("ZodUnion",(t,e)=>{Qw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>IT(t,n,i,r),t.options=e.options});function LA(t,e){return new IA({type:"union",options:t,...Be(e)})}const NA=ce("ZodIntersection",(t,e)=>{e1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>LT(t,n,i,r)});function DA(t,e){return new NA({type:"intersection",left:t,right:e})}const Mu=ce("ZodEnum",(t,e)=>{t1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(i,r,s)=>TT(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Mu({...e,checks:[],...Be(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new Mu({...e,checks:[],...Be(r),entries:s})}});function Ar(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new Mu({type:"enum",entries:n,...Be(e)})}const UA=ce("ZodTransform",(t,e)=>{hd(),n1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>RT(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new gm(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(La(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(La(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function kA(t){return new UA({type:"transform",transform:t})}const Ym=ce("ZodOptional",(t,e)=>{Im.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Zm(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Ah(t){return new Ym({type:"optional",innerType:t})}const Km=ce("ZodExactOptional",(t,e)=>{i1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Zm(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function OA(t){return new Km({type:"optional",innerType:t})}const FA=ce("ZodNullable",(t,e)=>{r1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>NT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Rh(t){return new FA({type:"nullable",innerType:t})}const zA=ce("ZodDefault",(t,e)=>{s1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>UT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function BA(t,e){return new zA({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():cm(e)}})}const $A=ce("ZodPrefault",(t,e)=>{a1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>kT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function HA(t,e){return new $A({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():cm(e)}})}const Jm=ce("ZodNonOptional",(t,e)=>{o1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>DT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function GA(t,e){return new Jm({type:"nonoptional",innerType:t,...Be(e)})}const VA=ce("ZodCatch",(t,e)=>{l1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>OT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function WA(t,e){return new VA({type:"catch",innerType:t,catchValue:typeof e=="function"?e:JM(e)})}const XA=ce("ZodPipe",(t,e)=>{c1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>FT(t,n,i,r),t.in=e.in,t.out=e.out});function Ch(t,e){return new XA({type:"pipe",in:t,out:e})}const ZA=ce("ZodReadonly",(t,e)=>{u1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>zT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function qA(t){return new ZA({type:"readonly",innerType:t})}const jA=ce("ZodCustom",(t,e)=>{d1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>AT(t,n,i,r)});function YA(t,e={}){return fT(jA,t,e)}function KA(t,e){return hT(t,e)}const JA=ri({id:Ke(),name:Ke(),role:Ke(),state:Ar(["idle","thinking","working","reviewing"]),stationId:Ar(["culture","analyzer","explorer","notebook"]),boredom:Vt().min(0).max(100).nullable(),boredomSpectrum:ri({position:Vt().min(0).max(1),color:Ke(),regime:Ke()}).optional()}),QA=ri({field:Ke().nullable(),question:Ke(),test:Ke().nullable(),rho:Vt().nullable(),p:Vt().nullable(),n:Vt().nullable(),replicated:wA(),rejected:Ke().nullable(),error:Ke().nullable()});ri({runId:Ke(),lastSequence:Vt().int().nonnegative(),status:Ar(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:Vt(),title:Ke().optional(),config:ri({mode:Ar(["tinker_modal","recorded"]),arm:Ar(["A","B","C","D","full"]),rounds:Vt(),task:Ke().optional(),seed:Vt().nullable(),model:Ke().nullable()}),sourceCommit:Ke(),progress:Vt().min(0).max(1),round:Vt(),boredom:Vt(),regime:Ke(),value:Vt().nullable(),reference:Vt().nullable(),agents:ds(JA),findings:ds(ri({agent:Ke().optional(),role:Ke(),message:Ke(),round:Vt().optional(),memoryId:Ke().optional()})),results:ds(ri({agent:Ke(),round:Vt(),kind:Ke(),status:Ke(),value:Vt().nullable(),commit:Ke().nullable().optional(),description:Ke(),sources:ds(Ke()).optional(),effectSize:Vt().nullable().optional(),pValue:Vt().nullable().optional(),reward:Vt().nullable().optional(),study:QA.nullable().optional()})),sources:ds(ri({id:Ke().nullable(),title:Ke().nullable(),url:Ke().nullable(),query_id:Ke().nullable()})),error:Ke().nullable(),metric:ri({name:Ke(),unit:Ke(),direction:Ar(["minimize","maximize"])}),provenance:ri({llm:Ke(),gpu:Ke(),exa:Ke(),memory:Ke(),execution:Ke().optional()})});async function dl(t,e){{const n=rm(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const _c=(t,e)=>t.filter(e).at(-1),Ts=(t,e)=>t.filter(n=>n.tick<=e),ve=t=>typeof t=="string"&&t.trim()?t.trim():null,St=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Ii=t=>typeof t=="boolean"?t:null;function Na(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const Eu=t=>new Map(t.map(e=>[String(e.id),e]));function Ph(t){const e=ve(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:ve(n.idea)||ve(n.text)||e}:{text:e}}catch{return{text:e}}}function Da(t,e,n){if(!t)return null;const i=Ts(t.events,n).filter(b=>b.refs?.experiment_id===e);if(!i.length)return null;const r=Eu(Na(t,"experiments")).get(e)||{},s=i.find(b=>b.type==="experiment.started"),a=_c(i,b=>b.type==="experiment.finished"),o=_c(i,b=>b.type==="gate.checked"),l=_c(i,b=>b.type==="verdict.issued"),c=i.find(b=>b.refs?.study_id),u=ve(r.hypothesis_id)||ve(s?.refs?.hypothesis_id),f=u?Ts(t.events,n).find(b=>b.type==="hypothesis.proposed"&&b.refs?.hypothesis_id===u):void 0,d=f?Eu(Na(t,"hypotheses")).get(u)||{}:null,h=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(h.reasons)&&h.reasons.length>0||typeof h.pass=="boolean"||St(h.attempts)>0,_=o?.payload||{},p=[...Array.isArray(_.reasons)?_.reasons:[],...a&&Array.isArray(h.reasons)?h.reasons:[]].map(String),m=t.events.some(b=>b.type==="verdict.issued"&&b.refs?.experiment_id===e),v=l||a&&!m?r.verdict:null,M=l?.payload||{};return{id:e,agentId:ve(r.agent_id)||s?.agentId||i[0].agentId||null,round:St(r.round)??St(i[0].round),kind:ve(r.kind),commit:ve(r.commit)||ve(_.candidate_commit),role:ve(r.role)||ve(s?.payload?.role),description:ve(r.description)||ve(s?.payload?.description)||ve(s?.message),idea:d?{text:Ph(d.text||f?.payload?.text).text,rationale:ve(d.rationale)||ve(f?.payload?.rationale)||ve(Ph(d.text||f?.payload?.text).rationale),predictedDelta:St(d.predicted_delta)??St(r.predicted_delta),sources:(Array.isArray(d.source_ids)?d.source_ids:[]).map(String)}:null,descriptor:r.descriptor||_.descriptor||null,gate:o||a&&g?{pass:Ii(_.pass)??Ii(h.pass),reasons:[...new Set(p)],attempts:St(h.attempts),text:ve(_.text)||ve(o?.message),priorArt:(Array.isArray(_.prior_art)?_.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:ve(a.payload?.status)||ve(r.status),metric:St(a.payload?.metric_value)??St(r.metric_value),reward:St(a.payload?.reward),text:ve(a.payload?.text)||ve(a.message),tick:a.tick}:null,verdict:l||v?{by:ve(v?.by_agent_id)||l?.agentId||null,verdict:ve(M.verdict)||ve(v?.verdict),why:ve(M.why)||ve(v?.why),tick:l?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([b,T])=>typeof T=="string"&&(a||b==="diff"))),logTail:a?ve(r.log_tail):null,studyId:ve(r.study_id)||ve(c?.refs?.study_id),timeline:i.map(b=>({tick:b.tick,type:b.type,text:ve(b.payload?.text)||ve(b.message)||b.type}))}}function eR(t,e){return[...new Set(Ts(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function pd(t,e){if(!t)return[];const n=Ts(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(eR(t,e)),s=Na(t,"experiments").filter(a=>r.has(String(a.id)));return Na(t,"sources").flatMap(a=>{const o=String(a.id),l=i.get(o),c=St(a.tick);if(!l&&(c==null||c>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(ve).filter(Boolean):[],f=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(d=>r.has(d)),...s.filter(d=>Array.isArray(d.source_ids)&&d.source_ids.includes(o)).map(d=>String(d.id))])];return[{id:o,title:ve(a.title)||ve(l?.payload?.summary)||ve(a.url)||o,url:ve(a.url)||ve(l?.payload?.url),highlight:u[0]||ve(a.highlight)||ve(a.extract)||ve(l?.payload?.text),agentId:ve(a.agent_id)||l?.agentId||null,tick:l?.tick??c,citedBy:f}]})}const tR=t=>Array.isArray(t)?t.map(e=>({rho:St(e?.rho),p:St(e?.p),n:St(e?.n),problem:e?.problem})):[],Ih=t=>({rho:St(t.rho),p:St(t.p),n:St(t.n),halves:tR(t.halves),significant:Ii(t.significant),replicated:Ii(t.replicated),confirmed:Ii(t.confirmed)});function wu(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(wu);if(typeof t=="object"){const e=t,n=ve(e.text)||ve(e.why)||ve(e.reason)||ve(e.verdict);return n?[[ve(e.by)||ve(e.judge)||ve(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>wu(r).map(s=>`${i}: ${s}`))}return[String(t)]}function Lh(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Ii(e.available)??!0,score:St(e.score),rejected:Ii(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const l=o&&typeof o=="object"?o:{};return[a,{laugh:St(l.laugh),think:St(l.think),reason:ve(l.reason),model:ve(l.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:ve(a.title)||"",url:ve(a.url)||"",snippet:ve(a.snippet)||""})),priorWorkAvailable:Ii(e.prior_work_available)??!1}}function Bs(t,e){if(!t)return[];const n=Ts(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=Eu(Na(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),l=i.get(o)||{},c=s.payload||{};if(s.type==="study.registered"){const f=l.dataset&&typeof l.dataset=="object"?l.dataset:{};r.set(o,{id:o,agentId:ve(l.agent_id)||s.agentId||null,experimentId:ve(l.experiment_id)||ve(s.refs?.experiment_id),round:St(l.round)??St(s.round),field:ve(c.field)||ve(l.field),direction:ve(l.direction),question:ve(c.question)||ve(l.question),hypothesis:ve(l.hypothesis),mechanism:ve(l.mechanism),dataset:{url:ve(f.url),x:ve(c.x)||ve(f.x),y:ve(c.y)||ve(f.y),xLevel:ve(f.x_level),yLevel:ve(f.y_level),id:ve(l.dataset_id)},predictedRho:St(c.predicted_rho)??St(l.predicted_rho),citations:(Array.isArray(l.citations)?l.citations:[]).map(String),novelty:St(l.novelty),priorArtPass:Ii(l.prior_art_pass),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...Ih({...l,...c,halves:c.halves??l.halves,significant:c.significant??l.significant}),headline:ve(c.headline)||ve(l.headline),rejected:ve(c.rejected),text:ve(c.text)||ve(s.message)},u.committee=Lh(c.committee??l.committee)):s.type==="study.replicated"?u.replications.push(Ih(c)):s.type==="award.issued"&&(u.award={award:ve(c.award),score:St(c.score),rejected:ve(c.rejected),headline:ve(c.headline),verdicts:wu(c.verdicts??l.committee?.verdicts),text:ve(c.text)||ve(s.message)},u.committee=Lh(c)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function Qm(t,e,n,i=40){return Ts(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:ve(s.kind),text:ve(s.text)||ve(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const nR=(t,e=3)=>t==null?"–":(t>0?"+":"")+t.toFixed(e),fl=t=>t==null?"–":t<1e-300?"<1e-300":String(Number(t.toPrecision(2))),Nh={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},vc=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function Lr(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const Hi=t=>typeof t=="string"?t.trim():"";function eg(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},l=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const c=Hi(o.regime);if(!c)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",f=s.get(u);s.set(u,c),l&&f!==c&&Nh[c]&&r.push({tick:a.tick,kind:"regime",title:Nh[c],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(l)if(a.type==="discovery.made"){const c=vc(o.metric_value),u=vc(o.previous_best),f=Hi(o.title),d=c==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${Lr(c)}${u==null?"":` (was ${Lr(u)})`}`,h=vc(o.reward);r.push({tick:a.tick,kind:"best",title:c==null?"New discovery!":"New best!",detail:[d||(h==null?"":`reward ${Lr(h)}`),f].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:Hi(o.award)||Hi(o.prize)||"Award issued",detail:[Hi(o.title)||Hi(o.headline),Hi(o.citation)||Hi(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function iR(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}const rR=/\b(?:402|credit|billing|payment|quota)\b/i;function tg(t,e){const n=i=>typeof i=="string"&&rR.test(i.replace(/https?:\/\/\S+/gi," "));return Array.isArray(t.publish_errors)&&t.publish_errors.some(i=>n(i.kind)||n(i.message))?!0:(e?.events||[]).some(i=>(i.type==="run.finished"||i.type==="run.stopped")&&(n(i.message)||["text","error","reason","detail","message"].some(r=>n(i.payload?.[r]))))}function sR(t){const e=t.provenance?.command,i=(Array.isArray(e)?e.join(" "):typeof e=="string"?e:"").match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1],r=Number(i);return Number.isFinite(r)&&r>0?r:void 0}function aR(t,e){const n=(e?.events||[]).flatMap(o=>[o.round,o.payload?.round]).filter(o=>typeof o=="number"&&Number.isFinite(o)),i=Math.max(t.time?.rounds||0,...n),r=t.requestedRounds||t.requested_rounds||t.rounds||t.run?.rounds||sR(t),s=i?` (${i}${r?`/${r}`:""} rounds)`:"",a=tg(t,e)?" · Tinker credit ran out":"";return`Stopped real run${s}${a}`}function md(t,e){const n=t?.provenance,i=[];if(n?.exa==="off"?i.push("Exa off"):(n?.exa==="live"||n?.exa==="on")&&i.push("Exa on"),n?.memory_backend==="pastdev"?i.push("past.dev memory"):n?.memory_backend==="local"&&i.push("local memory"),n?.llm==="fake"||n?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:i};const r=typeof n?.llm=="string"&&n.llm!=="fake"?iR(n.llm):"";return r?t?.status==="stopped"?{label:aR(t,e),tone:"stopped",chips:i}:t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:i}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${r} run`,tone:"live",chips:i}:{label:"Finished real run",tone:"finished",chips:i}:{label:"Unverified recording",tone:"unknown",chips:i}}const oR="f8fa53cc-6afd-5e98-9596-0c7b8711e718";function lR(t,e){const n=t.find(r=>r.id===e);if(n)return n.id;const i=e?t.filter(r=>r.id.startsWith(e)):[];return(i.length===1?i[0].id:void 0)||t.find(r=>r.id===oR)?.id||t[0]?.id}function cR(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function uR(t){return t.sample===!1&&t.status==="stopped"?{eyebrow:"RESEARCH / SWARM RUN",kicker:"● SWARM RUN · STOPPED",callout:"Swarm run · stopped. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${mR(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function dR(t,e){return!!t.live||e<t.totalTicks}function Ba(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function fR(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function hR(t,e){return t.filter(n=>n.tick<=e)}function pR(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const mR=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function gR(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}const Dh=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function _R(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const l=[...n[a]||[]],c=new Map(l.map((u,f)=>[Dh(u),f]));for(const u of o){const f=c.get(Dh(u));f===void 0?l.push(u):l[f]=u}n[a]=l}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,..."igjudge"in e?{igjudge:e.igjudge}:{},manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function vR(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return _R(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const xR={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel Prize hunt"};function Uh(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function ng(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function Cl(t){return t.task_title||xR[ng(t)]||t.title}function ig(t,e){return!0}function rg(t){return t?.direction==="minimize"?"Loss":t?.name?t.name.replaceAll("_"," ").replace(/^./,e=>e.toUpperCase()):"Metric"}function yR(t,e,n,i){return typeof t=="number"&&Number.isFinite(t)?`${n} ${i(t)}`:t===null&&typeof e=="number"&&Number.isFinite(e)?`Reward ${i(e)}`:""}function sg(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};if(t.status==="stopped")return{status:"stopped",label:"STOPPED",detail:"The run ended before finishing"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${Uh(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${Uh(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function bR(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function SR(t){return[t.time?.rounds,t.run?.rounds,t.rounds].find(e=>typeof e=="number"&&Number.isFinite(e)&&e>=0)}function ag(t){const e=SR(t);return e===void 0?"":`${e} round${e===1?"":"s"}`}function MR(t){const e=sg(t),n=e.status==="sample"||/\btest run\b/i.test(t.title||"")?"Test recording":e.status==="finished"?"Finished":e.status==="live"?"Live":e.status==="stale"?"Stalled":"Stopped";return[Cl(t)||t.description,[ag(t),n].filter(Boolean).join(" · ")].filter(Boolean).join(`
`)}function ER(t,e){const n=sg(t);if(e!==void 0){const a=new Date(t.time?.ts_start||""),o=Number.isFinite(a.getTime())?a.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"}):"",l=/\btest run\b/i.test(t.title||"")?"Test":{sample:"Test",stopped:"Stopped",live:"Live",stale:"Stalled",finished:""}[n.status];return[`Run ${e}`,ag(t),o,l].filter(Boolean).join(" · ")}const i=t.sample===!1?gR({...t,stale:n.status==="stale",live:n.status==="live"}):"",r=Cl(t),s=r===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[i+r,s,t.sample===!1&&n.status==="stopped"?n.label.toLowerCase():"",t.sample===!1?bR(t):""].filter(Boolean).join(" · ")}function wR(t,e,n=!1){const i=[["Live now",t.filter(s=>s.sample===!1&&s.live)],["Swarm runs",t.filter(s=>s.sample===!1&&!s.live)],["Recorded samples",t.filter(s=>s.sample!==!1)]],r=s=>`<option value="${e(s.id)}">${e(ER(s,n?t.indexOf(s)+1:void 0))}</option>`;return i.filter(([,s])=>s.length).map(([s,a])=>`<optgroup label="${s}">${a.map(r).join("")}</optgroup>`).join("")}const Sa=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:null,og=t=>Array.isArray(t)?t.filter(e=>!!Sa(e)):Sa(t)?Object.values(t).filter(e=>!!Sa(e)):[],TR="Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.";function As(t,e){const n=t?.metric?.description||"";return!!t&&(ng(t)==="ignobel"||t.metric?.name==="replicated_findings"||/replicated and significant/i.test(n)||og(e?.entities?.studies).length>0)}function Ua(t,e){return As(t,e)?!og(e?.entities?.studies).some(i=>i.committee!=null||Sa(i.result)?.committee!=null||Sa(i.graded)?.committee!=null)&&!(e?.events||[]).some(i=>i.type==="award.issued"):!1}function Pl(t,e){if(As(t,e)){if(Ua(t,e))return TR;const n=t?.metric?.description;if(n)return n.replace(/\breplicated\s+and\s+significant\b/gi,"split-half consistent and significant").replace(/\breplicated\b/gi,"passed split-half consistency").replace(/\breplication\b/gi,"split-half consistency")}return t?.proxy_note}const $o={minRho:.1,alpha:.005,splitAlpha:.05},wr=t=>typeof t=="number"&&Number.isFinite(t),xc=t=>wr(t)?t:void 0,Ao=t=>String(t);function gd(t){const e=t&&typeof t=="object"?t:{};return{minRho:xc(e.minRho??e.min_rho??e.min_effect_rho)??$o.minRho,alpha:xc(e.alpha??e.p_alpha??e.significance_alpha)??$o.alpha,splitAlpha:xc(e.splitAlpha??e.split_alpha??e.replication_alpha)??$o.splitAlpha}}function _d(t,e={}){const n={...$o,...e},i=[],r=t?.rho,s=t?.p,a=t?.direction==="positive"?1:t?.direction==="negative"?-1:wr(r)?Math.sign(r):0,o=t?.halves;return(!wr(r)||r*a<n.minRho)&&i.push(`|ρ| ≥ ${Ao(n.minRho)}`),(!wr(s)||s>=n.alpha)&&i.push(`p < ${Ao(n.alpha)}`),wr(r)&&o&&o.length>=2&&o.every(c=>{const u=c?.rho,f=c?.p;return wr(u)&&wr(f)&&f<n.splitAlpha&&u*a>=n.minRho&&!c.problem})||i.push(`split-half consistency (both halves p < ${Ao(n.splitAlpha)}, same direction, |ρ| ≥ ${Ao(n.minRho)})`),{pass:i.length===0,failures:i}}const Vi=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:{},Xt=t=>typeof t=="string"?t:"",ls=t=>typeof t=="number"&&Number.isFinite(t)?t:null,sa=t=>Array.isArray(t)?t:[],AR={humor:"Humor",plausibility:"Plausible",originality:"Original",insight:"Insight",appeal:"Appeal",alignment:"Ig Nobel"};function vd(t){const e=Vi(t);if(e.schema!=="igjudge/v1")return null;const n=sa(e.criteria).map(Vi).map(a=>({key:Xt(a.key),label:Xt(a.label)||Xt(a.key),weight:ls(a.weight)??1})).filter(a=>a.key),i=new Map(sa(e.leaderboard).map(Vi).map(a=>[Xt(a.study_id),ls(a.rank)])),r=sa(e.ideas).map(Vi).map(a=>{const o={};for(const[c,u]of Object.entries(Vi(a.scores))){const f=Vi(u);o[c]={initial:ls(f.initial),revised:ls(f.revised),final:ls(f.final),reason:Xt(f.reason)}}const l=Xt(a.study_id);return{studyId:l,agentId:Xt(a.agent_id),title:Xt(a.title)||l,hypothesis:Xt(a.hypothesis),gate:Xt(a.gate),committee:Xt(a.committee),scores:o,total:ls(a.total),classification:Xt(a.classification),verdict:Xt(a.verdict),safeguards:sa(a.safeguards).map(Xt).filter(Boolean),priorWork:sa(a.prior_work).map(Vi).map(c=>({title:Xt(c.title),url:Xt(c.url)})).filter(c=>c.url),error:Xt(a.error),rank:i.get(l)??null}});if(!r.length)return null;r.sort((a,o)=>(a.rank??1/0)-(o.rank??1/0)||a.studyId.localeCompare(o.studyId));const s=Xt(e.winner);return{model:Xt(e.model),criteria:n,ideas:r,winner:r.find(a=>a.studyId===s&&a.total!=null)??null}}const kh=t=>/^https?:\/\//i.test(t)?t:"";function RR(t,e){const n=vd(t);if(!n)return"";const i=d=>d==null?"–":String(Math.round(d*10)/10),r=(d,h)=>d.scores[h]?.final??null,s=n.winner,a=Vi(t).prior_work_available===!1?" No prior-work search was used; originality remains unverified.":"",o=s?`<div class="igjudge-winner"><span class="igjudge-trophy" aria-hidden="true">#1</span><div><p class="igjudge-kicker">Winner · ${e(i(s.total))}/100</p><p class="igjudge-winner-title">${e(s.title)}</p>${s.verdict?`<p class="igjudge-verdict">${e(s.verdict)}</p>`:""}</div></div>`:"",l=n.criteria.map(d=>`<th scope="col" title="${e(d.label)} (×${e(d.weight)})">${e(AR[d.key]||d.label)}<small>×${e(d.weight)}</small></th>`).join(""),c=n.ideas.map(d=>`<tr class="${d===s?"igjudge-win":""}"><td>${d.rank??"–"}</td><th scope="row">${e(d.title)}</th>${n.criteria.map(h=>`<td>${e(i(r(d,h.key)))}</td>`).join("")}<td class="igjudge-total">${e(d.error?"not scored":i(d.total))}</td></tr>`).join(""),u=n.ideas.map(d=>`<details class="igjudge-idea${d===s?" igjudge-win":""}"><summary><b>${d.rank?`#${d.rank}`:"–"}</b> ${e(d.title)} <span class="igjudge-pill">${e(i(d.total))}</span></summary>${d.error?`<p class="igjudge-error">Not scored: ${e(d.error)}</p>`:""}<p class="igjudge-status">Gate: ${e(d.gate||"–")} · Committee: ${e(d.committee||"–")}</p>${d.verdict?`<p>${e(d.verdict)}</p>`:""}<ul class="igjudge-criteria">${n.criteria.map(h=>{const g=d.scores[h.key];return g?`<li><b>${e(h.label)}</b> ${e(i(g.final))}/10 <small>(rounds ${e(i(g.initial))} → ${e(i(g.revised))} → ${e(i(g.final))})</small>${g.reason?`: ${e(g.reason)}`:""}</li>`:""}).join("")}</ul>${d.safeguards.length?`<p class="igjudge-safeguards">Safeguards: ${d.safeguards.map(e).join("; ")}</p>`:""}${d.priorWork.length?`<p class="igjudge-prior">Prior work (Exa): ${d.priorWork.slice(0,3).map(h=>kh(h.url)?`<a href="${e(kh(h.url))}" target="_blank" rel="noopener">${e(h.title||h.url)}</a>`:e(h.title)).join(" · ")}</p>`:""}</details>`).join(""),f=n.ideas.filter(d=>d.total!=null).length;return`<section class="igjudge" aria-labelledby="igjudge-title"><h2 id="igjudge-title">IgJudge final verdict</h2><p class="igjudge-note">Post-run final pass: one LLM judge${n.model?` (${e(n.model)})`:""} scored all ${f} ideas on six criteria (1–10, three internal rounds), weighted to a 10–100 total. The in-run two-judge committee is unchanged; gate/committee status is shown per idea.${e(a)}</p>${o}<div class="igjudge-scroll" tabindex="0" role="region" aria-label="IgJudge leaderboard"><table class="igjudge-table"><thead><tr><th scope="col">#</th><th scope="col">Idea</th>${l}<th scope="col">Total</th></tr></thead><tbody>${c}</tbody></table></div><h3>Per-idea scores and reasons</h3>${u}</section>`}const Tu=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Mr=t=>typeof t=="string"?t:"";function CR(t){const e=Tu(t?.entities?.sources),n=new Map(e.map(o=>[Mr(o.url),o]).filter(([o])=>o)),i=Tu(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(l=>{const c=Mr(l),u=n.get(c);return{study:Mr(o.question)||Mr(o.headline)||Mr(o.id),url:c,sourceId:u?String(u.id??u.source_id??""):"",title:u?Mr(u.title):""}})).sort((o,l)=>+!!l.sourceId-+!!o.sourceId),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(Mr(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="search").length,memoryRecalls:s,pastdev:a}}function Oh(t){const e=t?.events||[];return{exaSearches:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="search").length,sourceCards:Tu(t?.entities?.sources).length,pastdevRecalls:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="recall"&&n.payload?.backend==="pastdev").length,memoryWrites:e.filter(n=>n.type==="memory.written").length}}function Au(t,e=Number.MAX_SAFE_INTEGER){const n=Bs(t,e),i=eg(t?.events||[],-1,e).filter(l=>l.kind==="award"),r=new Set(n.filter(l=>l.result&&l.result.rejected==null&&l.result.p!=null&&Number.isFinite(l.result.p)).map(l=>l.id)).size,s=n.filter(l=>l.result?.confirmed===!0||l.result?.replicated===!0||l.replications.some(c=>c.confirmed===!0||c.replicated===!0)),a=s.filter(l=>_d(l.result?{...l.result,direction:l.direction||void 0}:null,gd(t?.manifest?.judging)).pass).length,o=Pl(t?.manifest,t)||"";return{studies:n.length,registered:n.length,ran:r,confirmed:s.length,underCurrentRules:a,passed:s.length,awards:i.map(l=>[l.title,l.detail].filter(Boolean).join(" · ")),proxyNote:o,isIgnobel:As(t?.manifest,t),preCommittee:Ua(t?.manifest,t)}}function PR(t,e){if(!t)return e||"Dataset";try{const n=new URL(t).pathname.split("/").filter(Boolean),i=n.at(-1),r=i==="content"?n.at(-2):i;return decodeURIComponent(r||e||"Dataset").replace(/\.[^.]+$/,"").replaceAll("_"," ").replaceAll("-"," ")}catch{return e||t}}function lg(t){if(!t)return[];const e=gd(t.manifest?.judging);return Bs(t,Number.MAX_SAFE_INTEGER).flatMap(n=>{const i=n.result,r=i?.rho;if(!(i?.confirmed===!0||i?.replicated===!0||n.replications.some(o=>o.confirmed===!0||o.replicated===!0))||n.priorArtPass===!1||r==null||Math.abs(r)<.1||!_d(i?{...i,direction:n.direction||void 0}:null,e).pass)return[];const a=t.manifest.agents?.find(o=>o.agent_id===n.agentId)?.display_name||t.frames.flatMap(o=>o.snapshot.agents||[]).find(o=>o.id===n.agentId)?.name||n.field?.replaceAll("_"," ")||"Research lab";return[{id:n.id,question:n.question||n.hypothesis||n.id,dataset:PR(n.dataset.url,n.dataset.id),rho:r,lab:a}]}).sort((n,i)=>Math.abs(i.rho)-Math.abs(n.rho))}function cg(t,e=Number.MAX_SAFE_INTEGER){return t?Bs(t,e).flatMap(n=>{const i=n.award?.score??n.committee?.score;if(i==null||!Number.isFinite(i))return[];const r=[...new Set(Object.values(n.committee?.judges||{}).map(s=>s.model).filter(s=>!!s))];return[{id:n.id,headline:n.award?.headline||n.question||n.hypothesis||n.id,score:i,rejected:n.committee?.rejected===!0,award:n.award?.award||null,judgeModels:r}]}).sort((n,i)=>i.score-n.score||n.id.localeCompare(i.id)):[]}function Ho(t,e,n){return/^https?:\/\//i.test(t)?`<a href="${n(t)}" target="_blank" rel="noopener noreferrer">${n(e)}</a>`:n(e)}function IR(t,e,n,i=null,r=null){const s=i?.provenance,a=md(i,r||void 0),o=t.tools.map(u=>{let f=u.name,d=u.detail,h="";if(u.kind==="llm"){const g=s?.llm==="fake"||s?.llm_mode==="fake",_=typeof s?.llm=="string"?s.llm:"",p=_&&_!=="fake"&&_.split("/").filter(Boolean).at(-1)||"";g?(f=u.fakeName||u.name,d=u.fakeDetail||u.detail,h=u.fakeSuffix||""):p?(f=s?.llm_mode==="tinker"&&u.tinkerName||u.name,d=(s?.llm_mode==="tinker"&&u.tinkerDetail||u.detail).replace(/\{model\}/g,/kimi/i.test(_)?"Kimi":p)):(d=u.unverifiedDetail||u.detail,h=u.unknownSuffix||"")}else u.kind==="exa"?h=s?.exa==="off"?u.offSuffix||"":s?.exa==="live"||s?.exa==="on"?"":u.unknownSuffix||"":u.kind==="memory"&&(h=s?.memory_backend==="pastdev"?"":s?.memory_backend==="local"?u.localSuffix||"":s?.memory_backend==="off"?u.offSuffix||"":u.unknownSuffix||"");return`<li><b>${n(f)}</b> ${n(d)}${h?` <span class="about-provenance-note">${n(h)}</span>`:""}</li>`}).join(""),l=`<div class="provenance-badge about-provenance" data-tone="${a.tone}" role="status" aria-label="${n(a.label)}"><span class="provenance-badge-label">${n(a.label)}</span></div>`,c=e.citations.slice(0,12).map(u=>`<li><span>${n(u.study)}</span> ${u.sourceId?`<button class="chip" data-source="${n(u.sourceId)}">${n(t.labels.source)} ${n(u.title||u.url)}</button>`:`${/^https?:\/\//i.test(u.url)?`<a href="${n(u.url)}" target="_blank" rel="noopener noreferrer">${n(u.url)}</a>`:`<code>${n(u.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join("");return`<div class="about-heading"><h2>${n(t.sections.about.replace(/\s*▾$/,""))}</h2><button class="drawer-close" data-close-drawer aria-label="Close About">✕</button></div><div class="about-body" tabindex="0" role="region" aria-label="About this research lab"><h3>${n(t.event.title)}</h3>${l}<a class="about-video-link" href="https://arii.github.io/caffeinated/about.html" target="_blank" rel="noopener noreferrer">▶ Watch the 85-second demo</a><p class="about-credit">Built by <a href="https://arii.github.io" target="_blank" rel="noopener noreferrer">Ariel Anders</a>, Jialin Feng, Neeraj Shah and Masha Baidachna · <a href="https://github.com/arii/caffeinated" target="_blank" rel="noopener noreferrer">GitHub</a></p><details class="about-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details><details class="about-section"><summary>${n(t.sections.tools)}</summary><ul class="about-tools">${o}</ul></details><details class="about-section"><summary>${n(t.sections.authors)}</summary>${t.authors.project?`<h3>${n(t.authors.project)}</h3>`:""}${t.authors.team?`<p class="eyebrow">${n(t.authors.team)}</p>`:""}<p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details><details class="about-section"><summary>${n(t.sections.boredom)}</summary><h3>${n(t.boredom.title)}</h3>${t.boredom.paragraphs.map(u=>`<p>${n(u)}</p>`).join("")}<p class="muted">${Ho(t.boredom.source,t.boredom.source,n)}</p></details><details class="about-section"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${c?`<ul class="about-cites">${c}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details></div>`}const ug={B:"#e3cba3",S:"#99c6b3",A:"#91a9d1"},Fh=t=>String(Number(t.toFixed(3)));function zh(t,e,n){return`<section class="tool-use"><div class="visual-heading"><h2>Tools used in this run</h2></div><div class="tool-use-grid">${[["EXA",e.exaSearches,"searches",""],["EXA",e.sourceCards,"source cards",t.results.charts.sourceCaption],["past.dev",e.pastdevRecalls,"recalls",""],["MEMORY",e.memoryWrites,"memories written",""]].map(([r,s,a,o])=>`<div class="tool-use-tile"><span class="tool-wordmark">${n(r)}</span><strong>${s}</strong><span>${n(a)}</span>${o?`<small>${n(o)}</small>`:""}</div>`).join("")}</div><p class="chart-caption">${n(t.results.charts.toolsCaption)}</p><button class="see-sources" type="button" data-open-evidence>See sources</button></section>`}function Bh(t,e,n){const i=lg(e);return`<section class="finalists"><h2>Finalists: awaiting committee judging</h2><div class="finalist-grid">${i.map(r=>`<article class="finalist-card"><h3 title="${n(r.question)}">${n(r.question)}</h3><div class="finalist-meta"><span>${n(r.dataset)}</span><span>Lab · ${n(r.lab)}</span></div><div class="finalist-rho"><svg viewBox="0 0 180 14" role="img" aria-label="Absolute correlation ${Math.abs(r.rho).toFixed(3)}"><rect x="0" y="4" width="170" height="6" rx="3" fill="#ffffff25"/><rect x="0" y="4" width="${Math.max(1,Math.abs(r.rho)*170).toFixed(1)}" height="6" rx="3" fill="#e3cba3"/></svg><span>ρ ${r.rho.toFixed(3)}</span></div></article>`).join("")}</div>${i.length?"":"<p>No studies passed both filters.</p>"}</section>`}function yc(t,e){const n=cg(t),i=n.length>0&&n.every(r=>r.score<.5);return n.length?`<section class="finalists committee-results"><h2>${i?"Committee verdict: no award":"Committee scores"}</h2><ol class="committee-score-list">${n.map((r,s)=>`<li class="committee-score-row"><div class="committee-score-heading"><span>${s+1}</span><strong>${e(r.headline)}</strong><b>${r.score.toFixed(2)}</b></div><div class="committee-score-track" role="img" aria-label="Committee score ${r.score.toFixed(2)} out of 1"><i style="width:${Math.max(0,Math.min(1,r.score))*100}%"></i></div>${r.judgeModels.length?`<small>Judges · ${r.judgeModels.map(e).join(" · ")}</small>`:""}</li>`).join("")}</ol></section>`:""}function $h(t,e){const n=[["Registered",t.registered],["Tests run",t.ran],["Passed gates",t.confirmed],["Post-hoc floor",t.underCurrentRules]],i=Math.max(1,...n.map(r=>r[1]));return`<svg class="chart-svg" viewBox="0 0 360 126" role="img" aria-label="Ig Nobel study counts">${n.map(([r,s],a)=>{const o=20+a*29,l=Math.max(2,Number(s)/i*164);return`<text x="4" y="${o+4}" class="chart-label">${e(r)}</text><rect x="150" y="${o-7}" width="164" height="13" rx="4" class="chart-track"/><rect x="150" y="${o-7}" width="${l.toFixed(1)}" height="13" rx="4" class="chart-bar"/><text x="320" y="${o+4}" class="chart-value">${s}</text>`}).join("")}</svg>`}function LR(t,e){const{baseline:n,best:i}=t.results.charts.bixbench,r=210,s=112;return`<svg class="chart-svg" viewBox="0 0 380 104" role="img" aria-label="BixBench held-out score with 95 percent confidence intervals">${[{label:"Baseline",score:n,y:30,color:"#99c6b3"},{label:"Swarm best",score:i,y:72,color:"#e3cba3"}].map(({label:o,score:l,y:c,color:u})=>{const f=l.correct/l.total,d=s+l.ci[0]*r,h=s+l.ci[1]*r;return`<text x="4" y="${c+4}" class="chart-label">${e(o)}</text><rect x="${s}" y="${c-7}" width="${r}" height="13" rx="4" class="chart-track"/><rect x="${s}" y="${c-7}" width="${(f*r).toFixed(1)}" height="13" rx="4" fill="${u}"/><line x1="${d}" y1="${c-13}" x2="${h}" y2="${c-13}" class="chart-whisker"/><line x1="${d}" y1="${c-17}" x2="${d}" y2="${c-9}" class="chart-whisker"/><line x1="${h}" y1="${c-17}" x2="${h}" y2="${c-9}" class="chart-whisker"/><text x="328" y="${c+4}" class="chart-value">${l.correct}/${l.total}</text>`}).join("")}</svg>`}function NR(t,e){const{groups:n}=t.results.charts.track3,i=132/.32;return`<svg class="chart-svg" viewBox="0 0 430 164" role="img" aria-label="Track 3 grouped bars: preregistered stopped early, and complete set picked after">${n.map((r,s)=>{const a=s?220:6,o=r.label.includes("(")?r.label.slice(0,r.label.indexOf("(")).trim():r.label,l=r.label.includes("(")?r.label.slice(r.label.indexOf("(")):"";return`<text x="${a}" y="16" class="chart-group">${e(o)}</text><text x="${a}" y="32" class="chart-group">${e(l)}</text>${r.values.map((c,u)=>{const f=58+u*31;return`<text x="${a}" y="${f+3}" class="chart-label">${e(c.arm)}</text><rect x="${a+17}" y="${f-8}" width="132" height="12" rx="4" class="chart-track"/><rect x="${a+17}" y="${f-8}" width="${(c.value*i).toFixed(1)}" height="12" rx="4" fill="${ug[c.arm]}"/><text x="${a+155}" y="${f+3}" class="chart-value">${c.value.toFixed(3)}</text>`}).join("")}`}).join("")}</svg>`}function DR(t,e){const{pastdev:n,local:i}=t.results.charts.memory,r=[{label:"Hit@1",a:n.hitAt1,b:i.hitAt1,y:30},{label:"Hit@8",a:n.hitAt8,b:i.hitAt8,y:66}],s=[{label:"past.dev",value:n.medianLatencyMs,color:"#99c6b3"},{label:"Local",value:i.medianLatencyMs,color:"#e3cba3"}],a=r.map(({label:l,a:c,b:u,y:f})=>`<text x="4" y="${f+4}" class="chart-label">${e(l)}</text><text x="60" y="${f-2}" class="chart-mini-label">past.dev</text><rect x="126" y="${f-12}" width="${(c*150).toFixed(1)}" height="10" rx="3" fill="#99c6b3"/><text x="282" y="${f-3}" class="chart-value">${Fh(c)}</text><text x="60" y="${f+12}" class="chart-mini-label">Local</text><rect x="126" y="${f+2}" width="${(u*150).toFixed(1)}" height="10" rx="3" fill="#e3cba3"/><text x="282" y="${f+11}" class="chart-value">${Fh(u)}</text>`).join(""),o=s.map((l,c)=>{const u=137+c*20;return`<text x="60" y="${u+3}" class="chart-mini-label">${e(l.label)}</text><rect x="126" y="${u-7}" width="${Math.max(2,l.value/600*150).toFixed(1)}" height="10" rx="3" fill="${l.color}"/><text x="282" y="${u+2}" class="chart-value">${l.value} ms</text>`}).join("");return`<svg class="chart-svg" viewBox="0 0 380 178" role="img" aria-label="Past.dev and local memory retrieval comparison">${a}<line x1="4" y1="100" x2="365" y2="100" class="chart-divider"/><text x="4" y="119" class="chart-label">Median latency</text>${o}</svg>`}function UR(t,e,n){const i=lg(e)[0],r=t.results.citations?.find(s=>s.runId===e.manifest.id&&s.studyId===i?.id);return!r||!i?"":`<section class="result-citation" aria-label="Research result in one sentence"><div class="eyebrow">${n(r.category)} · Research citation</div><p class="result-citation-line">${n(r.text)}</p><p class="chart-caption">${n(i.dataset)} · ρ ${i.rho.toFixed(3)}. ${n(r.note)}</p></section>`}function Hh(t,e,n,i=Au(e),r=!1){if(r&&vd(e.igjudge)?.ideas.some(_=>_.total!=null&&!_.error)){const _=yc(e,n);return`${zh(t,Oh(e),n)}${_||'<section class="committee-results"><h2>In-run committee data</h2><p>No in-run committee scores were recorded. Final rankings use the post-run final judge scores.</p></section>'}`}if(e.manifest.continuous)return`${yc(e,n)||Bh(t,e,n)}<section class="result-chart"><h2>This session's studies</h2>${$h(i,n)}<p>${i.registered} registered · ${i.ran} tested · ${i.confirmed} confirmed</p></section><p class="metric-note">${n(e.manifest.metric?.description||i.proxyNote||t.results.noProxy)}</p>`;const s=t.results.charts,a=Oh(e),o=yc(e,n)||Bh(t,e,n),l=`<section class="result-chart"><h2>Ig Nobel test funnel</h2>${$h(i,n)}<p class="chart-caption">${n(s.funnelCaption)}</p></section>`,c=`<section class="result-chart"><h2>BixBench held-out</h2>${LR(t,n)}<p class="chart-caption">${n(s.bixbench.caption)}</p></section>`,u=`<section class="result-chart"><h2>Track 3 · three-arm comparison</h2>${NR(t,n)}<div class="chart-legend">${s.track3.legend.map(_=>`<span><i style="background:${ug[_.arm]}"></i>${n(_.arm)} = ${n(_.label)}</span>`).join("")}</div><p class="chart-caption">${n(s.track3.caption)}</p></section>`,f=`<section class="result-chart"><h2>Memory retrieval</h2>${DR(t,n)}<p class="chart-caption">${n(s.memory.caption)}</p></section>`,d=s.funnelCaption?t.results.factualLine.replace("{N}",String(i.registered)).replace("{R}",String(i.ran)).replace("{C}",String(i.confirmed)).replace("{K}",String(i.underCurrentRules)).replace("{committeeSuffix}",i.preCommittee?t.results.noCommitteeSuffix:""):"",h=e.manifest.metric?.description||i.proxyNote||t.results.noProxy,g=[Ho(t.results.memoryComparisonUrl,"Memory comparison details",n),Ho(t.results.track3Url,"Track 3 results and caveats",n),Ho(t.results.bixbenchUrl,"BixBench held-out artifact",n)];return`${UR(t,e,n)}${zh(t,a,n)}${o}${l}${c}${u}${f}<details class="results-details"><summary>Details</summary><p>${n(d)}</p><p>${n(t.results.track3Line)}</p><p class="metric-note"><strong>${n(t.results.proxyNote)}:</strong> ${n(h)}</p><ul class="detail-links">${g.map(_=>`<li>${_}</li>`).join("")}</ul></details>`}const kR="How it's judged",OR="Committee data exists, but no prizes were issued in this recording.",FR=["Preregister the study before looking at the data.","Use a real, public dataset.","Pass the gates: |ρ| ≥ 0.1 and p < 0.005.","Pass split-half consistency: both halves p < 0.05 and in the same direction.","Check prior work with Exa.","Two independent non-Kimi judges (gpt-oss-120b and Qwen3.5-397B) score each study; the final score is the lower judge.","Reject any study that targets a group of people."],bc={title:kR,committeePending:OR,steps:FR},zR="/caffeinated/assets/follow-qr-Bv-E2P9c.png";function BR(t,e){const n=t!=null&&Number.isFinite(t);return{role:n?"meter":"img","aria-label":n?e:`${e}: not measured`,"aria-valuemin":n?"0":null,"aria-valuemax":n?"100":null,"aria-valuenow":n?String(Math.round(t)):null}}const Gh={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function $R(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function Vh(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Wh={B:"BIO",C:"CHEM",P:"PHYSICS"};function HR(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=$R(t.name);if(Gh[n])return{initial:r,familyKey:"S",familyLabel:Gh[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:Vh(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const c=Vh(a);return{initial:r,familyKey:c,familyLabel:Wh[c]||a.toUpperCase(),staff:!1,color:i}}const l=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:l,familyLabel:Wh[l]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const GR={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function xd(t){return t?GR[t]||t.replaceAll("_"," ").toLowerCase():""}function dg(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const VR={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function fg(t){return VR[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function WR(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function hg(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!WR(e)}function XR(t,e,n=110){const i=[fg(t.type),e].filter(Boolean).join(" · ");if(!hg(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i}: ${r.length>n?r.slice(0,n-1)+"…":r}`}function ZR(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const aa=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function pg(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=aa(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=aa(a.mechanism)||i.mechanism,i.method=aa(a.method)||i.method),i.role=aa(s.role)||i.role}else r.type==="study.registered"&&(i.field=aa(s.field)||i.field)}return i}function mg(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const Xh={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function qR(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:Xh[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:Xh[i]?.[1]||"",names:r}))}function jR(t,e){return e-t<=1}function YR(t){return t.live?t.totalTicks:0}function KR(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function gg(t,e,n){return!!t?.live&&n&&jR(e,t.totalTicks)}function _g(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function JR(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(gg(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=_g(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function wn(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function QR(t,e,n,i=!0){const r=l=>typeof l=="number"&&Number.isFinite(l)?l:null,s=t.filter(l=>(l.tick??0)<=n).map(l=>({id:l.id,tick:l.tick??0,raw:r(l.value),value:i?r(l.value):null,outcome:wn(l.status,l.kind),agent:l.agent,description:l.description,status:l.status})),a=[],o=[];for(const l of e){if(l.tick>n||l.tick<0)continue;const c=l.snapshot.value;if(c==null||!Number.isFinite(c))continue;const u=a.at(-1);(!u||u[1]!==c)&&(u&&o.push([l.tick,c]),a.push([l.tick,c]))}return{points:s,best:a,newBest:o}}const ii={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},oa=t=>String(Number(t.toPrecision(4)));function eC(t,e,n,i){const r=[...t.points.map(S=>S.value),...t.best.map(S=>S[1])].filter(S=>S!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,l=52,c=560,u=16,f=132,d=150,h=Math.max(1,n),g=a===s?s-o/2:s,_=a===s?o:a-s,p=S=>l+Math.min(1,S/h)*(c-l),m=S=>f-(S-g)/_*(f-u),v=t.best.map(([S,O],N)=>`${N?"H":"M"}${p(S).toFixed(1)} ${N?`V${m(O).toFixed(1)}`:m(O).toFixed(1)}`).join(""),M=t.best.length?`<path class="best-line" d="${v}H${p(h).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",b=S=>{const O=p(S.tick).toFixed(1),N=`${i(S.agent)} · ${i(S.status)} · ${S.raw==null?"no score":oa(S.raw)} · ${i(S.description)}`,R=`<title>${N}</title>`,$=S.id?` data-experiment="${i(S.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${N}"`:"";if(S.value==null&&S.outcome!=="crashed")return`<circle class="pt ${S.outcome}"${$} cx="${O}" cy="${d}" r="${S.outcome==="discarded"?3.5:4.5}" fill="${S.outcome==="discarded"?"none":ii[S.outcome]}" stroke="${ii[S.outcome]}" stroke-width="1.6">${R}</circle>`;if(S.value==null)return`<g class="pt crashed"${$}>${R}<path d="M${+O-4} ${d-4}l8 8m0 -8l-8 8" stroke="${ii.crashed}" stroke-width="2"/></g>`;const B=m(S.value).toFixed(1);return S.outcome==="crashed"?`<g class="pt crashed"${$}>${R}<path d="M${+O-4} ${+B-4}l8 8m0 -8l-8 8" stroke="${ii.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${S.outcome}"${$} cx="${O}" cy="${B}" r="${S.outcome==="discarded"?3.5:4.5}" fill="${S.outcome==="discarded"?"none":ii[S.outcome]}" stroke="${ii[S.outcome]}" stroke-width="1.6">${R}</circle>`},T=t.newBest.map(([S,O])=>`<path class="new-best" d="M${p(S).toFixed(1)} ${(m(O)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${oa(O)} at tick ${S}</title></path>`).join(""),A=e.direction==="maximize"?"↑ better":"↓ better",x=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="group" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${l} ${u-4}V${f+4}H${c}" fill="none" stroke="#79918b"/><text x="${l-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${oa(a)}</text><text x="${l-6}" y="${f}" text-anchor="end" fill="#b9cac2" font-size="9">${oa(s)}</text><text x="${l-6}" y="${d+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(S=>S.value==null&&S.raw!=null)?"other measure":"no score"}</text><path d="M${l} ${d}H${c}" stroke="#ffffff14" stroke-dasharray="3 4"/>${M}${t.points.map(b).join("")}${T}${x?`<text x="${c}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${oa(x[1])}</text>`:""}<text x="${l}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${A}</text><g font-size="9" fill="#b9cac2" transform="translate(${l} 186)"><circle cx="0" cy="-3" r="4" fill="${ii.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${ii.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${ii.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${ii.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}function vg(t,e,n,i,r,s){const a=new Map(e.map(o=>[i(o),o]));return t.map(o=>{const l=n(o),c=a.get(l)||r(o);return a.delete(l),s(c,o),c})}function yd(t){return t.events.find(n=>{if(n.type!=="agent.assigned")return!1;const i=String(n.payload?.role||"").toLowerCase();return!["conductor","critic","host","baseline","environment","world"].includes(i)})?.tick??0}function xg(t,e=0){const n=t.events,i=[{tick:0,label:"Start"}];e>0&&(i[0]={tick:e,label:"Scientists arrive"});const r=(a,o)=>{const l=n.find(c=>c.tick>=e&&o(c));l&&i.push({tick:l.tick,label:a})};r("Boredom shift",a=>["round.started","boredom.measured"].includes(a.type)&&/snap|breakout/i.test(String(a.payload?.regime||""))),r("New best",a=>a.type==="discovery.made"),r("Confirmed study",a=>a.type==="study.result"&&(a.payload?.confirmed===!0||a.payload?.replicated===!0)),r("Critic review",a=>a.type==="verdict.issued"||/critic\.(veto|rejected)/i.test(a.type)),i.push({tick:t.manifest.totalTicks,label:"Finish"});const s=[...new Map(i.sort((a,o)=>a.tick-o.tick).map(a=>[a.tick,a])).values()];return s.length>1?s:[{tick:0,label:"Start"},{tick:t.manifest.totalTicks,label:"Finish"}]}function tC(t,e,n=75e3){if(!t.length)return 0;if(t.length===1)return t[0].tick;if(e>=n)return t.at(-1).tick;const i=Math.min(2e3,n/t.length/2),r=(n-i*t.length)/(t.length-1);let s=0;for(let a=0;a<t.length;a++){if(e<s+i)return t[a].tick;if(s+=i,a<t.length-1){if(e<s+r){const o=(e-s)/r,l=o*o*(3-2*o);return t[a].tick+(t[a+1].tick-t[a].tick)*l}s+=r}}return t.at(-1).tick}function yg(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function bg(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function Ru(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function nC(t,e,n){const i=yg(t),r=[],s=new Map,a=new Set,o=new Set,l=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let c=0;const u=new Set,f=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),d=.25,h=d*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=f;g+=d){for(;c<l.length&&l[c].tick<=g;){const p=l[c++];if(p.type==="experiment.started"){p.agentId&&(a.add(p.agentId),o.add(p.agentId));continue}if(p.type==="experiment.finished"){p.agentId&&o.delete(p.agentId);continue}for(const m of[p.agentId,...p.payload?.to_agent_ids||[],p.refs?.to_agent_id].filter(Boolean)){u.add(m);const v=s.get(m);v&&!v.table&&(v.pending=!0)}}const _=Ba(t.frames,g)?.snapshot.agents||[];bg(_,g,i).forEach(p=>{const m=_.findIndex(b=>b.id===p.id);let v=s.get(p.id);if(!v){v={p:{...fu(m),atTable:u.has(p.id)},path:[],leg:0,dwell:u.has(p.id)?2.5:0,pending:!1,table:u.has(p.id),lab:!1},s.set(p.id,v);return}if(a.delete(p.id)&&(v.lab=!0,v.table=!1,v.dwell=0,v.p.atTable=!1,v.p.atLab=!1,v.path=Fo(v.p,hu(Ru({...p,activity:"experimenting"}),m),e,n)),v.lab&&!v.path.length&&!v.p.atLab&&(v.p.atLab=!0,v.dwell=4),v.dwell>0){v.dwell=Math.max(0,v.dwell-h),v.p.atTable=v.table;return}if(v.lab&&v.p.atLab){if(o.has(p.id))return;v.lab=!1,v.p.atLab=!1}if(v.p.atTable=!1,!v.path.length){v.table&&(v.table=!1,v.pending=!1,v.leg=0);const T=[hu(Ru({...p,activity:"experimenting"}),m),{x:2.7+m%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(v.leg>=T.length&&v.pending)v.table=!0,v.path=Fo(v.p,fu(m),e,n);else{const A=T[v.leg%T.length];v.leg++,v.path=Fo(v.p,A,e,n)}}let M=h*2.1;for(;v.path.length&&M>0;){const b=v.path[0],T=Math.hypot(b.x-v.p.x,b.z-v.p.z);T<=M?(v.p.x=b.x,v.p.z=b.z,M-=T,v.path.shift()):(v.p.x+=(b.x-v.p.x)/T*M,v.p.z+=(b.z-v.p.z)/T*M,M=0)}!v.path.length&&v.lab&&(v.p.atLab=!0,v.dwell=4),!v.path.length&&v.table&&(v.dwell=3,v.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([p,m])=>[p,{...m.p}]))})}return r}function iC(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function rC(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const l=o.payload?.text||o.message||"";if(!l.trim())continue;const c=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:iC(i(l)),peers:c.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const rt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",Sc=t=>typeof t=="number"&&Number.isFinite(t)?t:null,gs=t=>String(Number(t.toPrecision(4))),Sg=(t,e=140)=>{if(t.length<=e)return t;const n=t.slice(0,e).search(/\s+\S*$/);return n>0?t.slice(0,n)+"…":t},Mg=t=>Array.isArray(t)?t.map(e=>rt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function hl(t,e,n=!1){const i=(a,o=140)=>n?a:Sg(a,o),r=t.payload||{},s=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const a=rt(r.why)||rt(r.reason);return r.accepted===!0?`Critic approved${a?`: ${i(a)}`:": the rerun reproduced the score"}`:r.accepted===!1?`Critic rejected${a?`: ${i(a)}`:": score didn't reproduce on rerun"}`:rt(r.text)}case"gate.checked":{const a=Mg(r.reasons);if(r.pass===!1)return`Novelty gate blocked: ${a.length?i(a.join("; ")):"too close to an earlier idea"}`;const o=Array.isArray(r.prior_art)?r.prior_art.length:0;return r.pass===!0?`Novelty gate passed: the idea is new enough${o?` (checked against ${o} prior source${o===1?"":"s"})`:""}`:rt(r.text)}case"experiment.started":return`Testing: ${i(rt(r.description)||rt(r.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const a=Sc(r.metric_value),o=rt(r.status).toLowerCase(),l=a==null?"":` ${s} ${gs(a)}`,c=e.best==null?"":` (best ${gs(e.best)})`;return/crash|error|fail|timeout/.test(o)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(o)&&!/not_/.test(o)?`Kept:${l||" result"} beats the previous best`:a==null&&o?`${/reject|invalid|block/.test(o)?"Rejected before scoring":"Not scored"}${rt(r.text)?`: ${i(rt(r.text))}`:""}`:o?`Discarded:${l} didn't beat the best${c}`:rt(r.text)}case"agent.assigned":{const a=rt(r.role);return a?`Conductor assigned ${a}${rt(r.rationale)?`: ${i(rt(r.rationale))}`:""}`:rt(r.text)}case"round.started":{const a=Fr(rt(r.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${a?` · ${a}`:""}${rt(r.rationale)?`: ${i(rt(r.rationale))}`:""}`}case"boredom.measured":{const a=Sc(r.B),o=Fr(rt(r.regime)).label;return a==null?rt(r.text):`Boredom ${Math.round(a*100)}%${o?` · ${o}`:""}${a>.6?": repeating itself, ready to switch approach":a<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${i(rt(r.text))}`;case"question.asked":{const a=rt(r.kind);return`${a==="recall"?"Recalling memory":a==="read"?"Reading the source":/^(search|dataset_search|exa)$/.test(a)?"Searching the literature":"Asking"}: ${i(rt(r.text))}`}case"observation.received":return`Read: ${i(rt(r.text)||rt(r.summary))}`;case"message.sent":{const a=rt(r.to_agent_id)||rt(t.refs?.to_agent_id);return`${a?`To ${e.name(a)}`:"Message"}: ${i(rt(r.text))}`}case"study.registered":return`Pre-registered: ${i(rt(r.question)||rt(r.text))}`;case"study.result":return i(rt(r.text)||rt(r.headline));case"discovery.made":{const a=Sc(r.metric_value);return`New best${a==null?"":`: ${s} ${gs(a)}`}${rt(r.title)?` · ${i(rt(r.title),80)}`:""}`}default:return""}}function bd(t,e,n,i,r){const s=(t?.events||[]).filter(h=>h.tick<=i&&h.agentId===e),a=s.filter(h=>h.type==="experiment.started"&&h.refs?.experiment_id).at(-1),o=s.filter(h=>h.type==="gate.checked").at(-1),l=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,c=a&&!l?Da(t,String(a.refs.experiment_id),i):null,u=c&&(t?.events||[]).filter(h=>h.tick<=i&&h.type==="verdict.issued"&&h.refs?.experiment_id===c.id).at(-1),d=[...s,...u&&u.agentId!==e?[u]:[]].sort((h,g)=>h.tick-g.tick).map(h=>({tick:h.tick,why:hl(h,r),full:hl(h,r,!0),kind:h.type==="observation.received"||h.type==="question.asked"&&h.payload?.kind==="read"?"Read":h.type==="question.asked"&&/^(search|dataset_search|exa)$/.test(rt(h.payload?.kind))?"Search":void 0})).filter(h=>h.why).slice(-6).reverse();return{activity:xd(n),latest:s.at(-1)||null,blocked:l,experiment:c,sources:pd(t,i).filter(h=>h.agentId===e).slice(-3).reverse(),feed:d}}function Eg(t,e,n,i=!0){const r=e.esc,s=t.experiment,a=(_,p)=>p?`<div class="now-row"><b>${_}</b><div>${p}</div></div>`:"",o=r(t.activity||"Not active yet"),l=s?`${r(s.idea?.text||s.description||"")}${s.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${s.idea.predictedDelta>0?"+":""}${gs(s.idea.predictedDelta)}</span>`:""}${s.descriptor?.mechanism?` <span class="pill">${r(String(s.descriptor.mechanism).replaceAll("_"," "))}${s.descriptor.method?` / ${r(String(s.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",c=t.sources.map(_=>`<button class="chip" data-source="${r(_.id)}" title="${r(_.title)}">${r(Sg(_.title,60))}</button>`).join(""),u=t.blocked?`<span class="pill bad">blocked</span> ${r(Mg(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:s?.gate?`<span class="pill ${s.gate.pass?"ok":"bad"}">${s.gate.pass?"passed":s.gate.pass===!1?"blocked":"checked"}</span> ${r(s.gate.reasons.length?s.gate.reasons.join("; "):s.gate.pass?"The idea is new enough to try.":"")}`:s?'<span class="muted">Not checked yet</span>':"",f=s?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(s.verdict.verdict||"")&&!/not_/i.test(s.verdict.verdict||"")?"ok":"bad"}">${r(s.verdict.verdict||"verdict")}</span> ${r(s.verdict.why||"")}`:s?.result?'<span class="muted">Waiting for the critic</span>':"",d=n?.name.replaceAll("_"," ")||"score",h=n?.direction==="maximize"?"higher":"lower",g=s?.result?`<span class="pill">${r(s.result.status||"done")}</span> ${s.result.metric==null?"":`${r(d)} ${gs(s.result.metric)}`}${e.best==null?"":` · best so far ${gs(e.best)} (${h} is better)`}`:s?'<span class="muted">Still running</span>':"";return`<div class="now-card">${i?a("Doing",o):""}${a("Idea",l)}${a("Read",c)}${a("Gate",u)}${a("Score",g)}${a("Critic",f)}${s?`<button class="inspect-link" data-experiment="${r(s.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h3>Why, step by step</h3><ol class="why-feed">${t.feed.map(_=>`<li title="${r(_.full||_.why)}">${_.kind?`<span class="step-kind" data-kind="${_.kind}">${_.kind}</span>`:""}${r(_.why)}</li>`).join("")}</ol>`:""}</div>`}const sC=t=>t&&/^https?:\/\//i.test(t)?t:null,Go=(t,e,n)=>sC(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),Vo=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,wg=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,la=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function aC(t,e,n){const i=e.esc,r=h=>`<p class="muted">${h}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${nR(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([h,g])=>`${h}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${Vo(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(h=>`<li>${i(h)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),l=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"–")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),c=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),f=`${u.length?`<div class="artifact-links">${u.map(([h,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(h)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${la("Idea",s+a,!!(t.idea||t.description))}${la("Gate",o,!!t.gate)}${la("Score",l,!!t.result)}${la("Critic",c,!!t.verdict)}${la("Artifacts",f,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${Tg(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(h=>`<li><span>t${h.tick}</span> <b>${i(h.type)}</b> ${i(h.text)}</li>`).join("")}</ul></details>`}function oC(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${Go(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(Cg(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(Pg(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>wg(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const _s=t=>t==null?"–":t.toFixed(3),lC=t=>`rho ${_s(t.rho)}, p ${fl(t.p)}, n ${t.n??"–"}`;function cC(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${_s(t)}, observed rho ${_s(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function uC(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed&&t.priorArtPass===!1?`<span class="badge" title="Replicated, but the novelty critic matched it to prior work, so it was not accepted.">Confirmed · not accepted: prior art${t.novelty!=null?` (novelty ${t.novelty.toFixed(2)})`:""}</span>`:t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function Tg(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(f,d)=>f?`${n(f)}${d?` = <b>${n(d)}</b>`:""}`:"–",o=(r?.confirmed?_d({...r,direction:t.direction||void 0},gd(e.judging)).failures:[]).map(f=>`<span class="badge current-rule-failure">Fails current ${n(f)} rule</span>`).join(""),l=r?.halves.length?`<div class="halves">${r.halves.map((f,d)=>`<span>Half ${d+1}: rho ${_s(f.rho)}, p ${fl(f.p)}, n ${f.n??"–"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',c=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(f=>`<li>${lC(f)} ${Vo(f.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",u=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([f,d])=>`<li>Judge ${n(f)} · laugh ${d.laugh??"–"} / think ${d.think??"–"}${d.reason?`: ${n(d.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(f=>`<li>${Go(e,f.url,f.title||f.url)}${f.snippet?`<p class="muted">${n(f.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(f=>`<li>${n(f)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head"><div class="study-badges">${uC(t,e)}${o}</div><span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?Go(e,i.url,Cg(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"–")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${_s(t.predictedRho)} → observed <b>${_s(r?.rho??null)}</b>${r?` · p ${fl(r.p)} · n ${r.n??"–"}`:""}${cC(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?l:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${Vo(r.significant,"significant","not significant")}, ${Vo(r.replicated,"split-half consistent","not split-half consistent")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${c}${u}<div class="chips">${t.experimentId?wg(e,t.experimentId):""}${t.citations.map(f=>`<span class="chip">${Go(e,f,Pg(f.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function Ag(t,e){return t.length?`<div class="card-grid">${t.map(n=>Tg(n,e)).join("")}</div>`:""}function Rg(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function Cg(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function Pg(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function dC(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const fC={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function hC(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=mg(pg(r,e.id,i),e.family||""),a={name:t.agentName||(f=>f===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=bd(n,e.id,e.activity||e.state,i,a),l=im(e.boredom).level,c=o.experiment,u=o.blocked?hl(o.blocked,a):"";return{name:e.name,role:s||dg(e.role)||"Scientist",mood:{level:l,label:fC[l]||null,boredomPct:e.boredom==null?null:Di(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:c?.idea?.text||c?.description||null,predicted:u?null:c?.idea?.predictedDelta??null}}function pC(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(Lr(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const Wo=t=>typeof t=="number"&&Number.isFinite(t),Zh=t=>Math.max(0,Math.min(1,t)),mC="Passed means zero loss on the preregistered checks; test totals exclude the baseline and missing results.";function gC(t,e,n){const i=s=>s.agent===e||s.agent===n||s.agentId===e,r=t.filter(s=>i(s)&&wn(s.status,s.kind)!=="baseline"&&Wo(s.value));return{confirmed:r.filter(s=>s.value===0).length,tested:r.length}}function _C(t){return`${t.confirmed} of ${t.tested} tests passed`}function vC(t,e,n){const i=e.filter(r=>r.tick<=n);if(t==="conductor"){const r=i.filter(l=>l.type==="round.started").reduce((l,c)=>!l||c.tick>=l.tick?c:l,void 0),s=r?.payload?.regime;if(typeof s!="string")return"Conductor · awaiting assignment";const a=s.toUpperCase();return`Conductor · ${/BOREDOM_SNAP|EXPLORE|DIVERG/.test(a)?"Bored: trying new directions":/BREAKOUT|NOVEL/.test(a)?"Breakout":"Refining"}`}if(t==="critic"){const r=i.filter(s=>s.type==="verdict.issued").length;return`Critic · ${r} review${r===1?"":"s"}`}return""}function xC(t,e,n){if(t!=="conductor")return"";const i=e.filter(s=>s.tick<=n&&s.type==="round.started").reduce((s,a)=>!s||a.tick>=s.tick?a:s,void 0),r=i?.payload?.regime;return typeof r=="string"?Fr(r).description:""}function yC(t){return t==null?"best n/a":`best ${Lr(t)}`}function bC(t,e,n,i,r,s){const a=_=>_.agent===e||_.agent===n||_.agentId===e,o=t.filter(_=>a(_)&&wn(_.status,_.kind)!=="baseline").slice().sort((_,p)=>(_.tick??0)-(p.tick??0)),l=o.map(_=>_.value).filter(Wo),c=i.name==="replicated_findings"?"maximize":i.direction,u=l.length?c==="maximize"?Math.max(...l):Math.min(...l):null,f=t.filter(_=>wn(_.status,_.kind)!=="baseline").map(_=>_.value).filter(Wo),d=f.length?c==="maximize"?Math.min(...f):Math.max(...f):null;let h=null;if(u!=null&&r!=null){if(u===r)h=1;else if(s!=null){const _=r-s;h=_===0?0:Zh((u-s)/_)}else if(d!=null){const _=Math.abs(r-d);h=_===0?1:Zh(c==="maximize"?(u-d)/_:(d-u)/_)}}const g={kept:0,discarded:0,crashed:0};for(const _ of o){const p=wn(_.status,_.kind);p!=="baseline"&&g[p]++}return{best:u,progress:h,...g,spark:o.map(_=>_.value).filter(Wo).slice(-12)}}function SC(t,e,n=1.96){if(!Number.isFinite(t)||!Number.isFinite(e)||e<=0||t<0||t>e)return null;const i=t/e,r=n*n,s=1+r/e,a=(i+r/(2*e))/s,o=n*Math.sqrt((i*(1-i)+r/(4*e))/e)/s;return{low:Math.max(0,a-o),high:Math.min(1,a+o)}}const Ei=t=>typeof t=="number"&&Number.isFinite(t),Ig=t=>typeof t=="string"&&t?t.slice(0,7):null;function MC(t,e=String){return t==null?"":t===0?"no change":`${t>0?"improved by":"worsened by"} ${e(Math.abs(t))}`}function qh(t,e){const n=Ei(t?.score)?t.score:null,i=n==null?null:n*e,r=i!=null&&Math.abs(i-Math.round(i))<=1e-6?Math.round(i):null;return{score:n,k:r,fraction:r==null?null:`${r}/${e}`,wilson:r==null?null:SC(r,e),loss:Ei(t?.loss)?t.loss:null,commit:Ig(t?.commit)}}function Rs(t,e){return t?t.events.some(n=>n.type==="run.finished"&&n.tick<=e)?!0:["finished","completed","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks:!1}function EC(t,e){if(!t)return null;const{manifest:n}=t,i=Ba(t.frames,e)?.snapshot,r=i?.results||[],s=n.metric?.direction==="maximize"||i?.metric.direction==="maximize"?"maximize":"minimize",a=n.metric?.label||i?.metric.name||n.metric?.name||"result",o=r.find(v=>wn(String(v.status||""),String(v.kind||""))==="baseline"),l=r.filter(v=>wn(String(v.status||""),String(v.kind||""))==="kept"),c=l.length?l.reduce((v,M)=>s==="maximize"?Ei(M.value)&&(!Ei(v.value)||M.value>v.value)?M:v:Ei(M.value)&&(!Ei(v.value)||M.value<v.value)?M:v):o,u=Ei(o?.value)?o.value:null,f=Ei(c?.value)?c.value:null,d=u==null||f==null?null:s==="maximize"?f-u:u-f,h={kept:0,discarded:0,crashed:0};for(const v of r){const M=wn(String(v.status||""),String(v.kind||""));M!=="baseline"&&h[M]++}const g=Pl(n,t)||"",_=n.held_out_test,p=_&&Ei(_.n_items)?_.n_items:0,m=_&&p>0?{n:p,baseline:qh(_.baseline,p),best:qh(_.best,p),proxyNote:As(n,t)?g:_.proxy_note||g,referenceNote:_.reference_note||n.reference_note||""}:null;return{status:n.status==="stopped"?"stopped":"finished",metric:a,direction:s,baseline:u,best:f,delta:d,winner:l.length&&c?{commit:Ig(c.commit),description:String(c.description||""),agent:String(c.agent||"")}:null,totals:h,heldOut:m,proxyNote:m?.proxyNote||g,referenceNote:m?.referenceNote||n.reference_note||""}}const Sn=t=>t&&typeof t=="object"?t:{},Xo=t=>typeof t=="number"&&Number.isFinite(t),Il=t=>Array.isArray(t)?t.map(Sn):t&&typeof t=="object"?Object.values(t).map(Sn):[],jh=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Mn=t=>typeof t=="string"?t:"",hn=t=>Xo(t)?t:null,Qi=t=>Mn(t.id||t.study_id||t.studyId),Sd=t=>Mn(t.refs?.study_id||t.refs?.studyId||t.payload?.study_id||t.payload?.studyId),wC=["score","scores","judges","verdicts"],Lg=t=>Object.keys(t).length>0,Ng=t=>wC.some(e=>t[e]!=null);function Yh(t){const e=Sn(t);return(Array.isArray(t)?t.map(Sn):Object.entries(e).map(([i,r])=>({id:i,...Sn(r)}))).map(i=>({id:Mn(i.id)||"judge",model:Mn(i.model),laugh:hn(i.laugh),think:hn(i.think),reason:Mn(i.reason)}))}const TC=["award.issued","study.result","study.replicated","study.completed"];function AC(t){const e=Sn(t.payload),n=[e.committee,e.award].map(Sn).find(Lg);return n||(Ng(e)?e:null)}function RC(t,e,n,i){const r=e.filter(p=>TC.includes(p.type)&&Sd(p)===Qi(t)).map(p=>({event:p,payload:AC(p)})).filter(p=>p.payload!==null),s=r.filter(p=>p.event.tick<=n).sort((p,m)=>p.event.tick-m.event.tick).at(-1);if(!s&&(r.length||!i))return null;const a=Sn(t.graded),o=[t.committee,a.committee,Sn(t.result).committee].map(Sn).find(Lg),l=Sn(s?.payload??o),c=jh(a.scores).map(p=>{const m=Sn(p);return hn(m.score??m.value??p)}).filter(Xo);if(!Object.keys(l).length&&Ng(a)&&Object.assign(l,{available:a.available,rejected:a.rejected,scores:a.scores,verdicts:a.verdicts,score:c.length?Math.min(...c):a.score,prior_work:a.prior_work}),!Object.keys(l).length)return null;if(l.available===!1)return{score:null,rejected:l.rejected===!0,judges:Yh(l.judges??l.verdicts),priorWork:null};const u=Yh(l.judges??l.verdicts??l.per_judge),f=u.map(p=>p.laugh==null||p.think==null?null:Math.min(p.laugh,p.think)/10).filter(Xo),d=jh(l.scores).map(p=>{const m=Sn(p);return hn(m.score??m.value??p)}).filter(Xo),h=hn(l.score)??(d.length?Math.min(...d):null)??(f.length?Math.min(...f):null),g=Il(l.prior_work??l.priorWork),_=g.map(p=>({url:Mn(p.url),title:Mn(p.title)||void 0})).filter(p=>p.url);return{score:h,rejected:l.rejected===!0,judges:u,priorWork:g.length||l.prior_work_available===!0?{count:g.length,links:_}:null}}function ca(t,e){const n=Qi(t),i=e.filter(a=>Sd(a)===n),r=i.filter(a=>a.type==="study.registered").sort((a,o)=>a.tick-o.tick)[0],s=i.filter(a=>["study.result","study.replicated","study.completed"].includes(a.type)).sort((a,o)=>a.tick-o.tick)[0];return r?.tick??hn(t.registered_tick)??hn(t.tick)??s?.tick??0}function CC(t,e){return e.filter(n=>Sd(n)===Qi(t)&&["study.result","study.replicated","study.completed"].includes(n.type)).sort((n,i)=>n.tick-i.tick)[0]?.tick??null}const PC=t=>{const e=Sn(t.result),n=Mn(t.status||e.status).toLowerCase();return t.confirmed===!0||t.replicated===!0||e.confirmed===!0||e.replicated===!0||n==="confirmed"||n==="replicated"||Il(t.replications).some(i=>i.confirmed===!0||i.replicated===!0||["confirmed","replicated"].includes(Mn(i.status).toLowerCase()))};function IC(t,e,n,i){const r=Il(t).filter(c=>ca(c,e)<=n),s=r.filter(c=>{const u=CC(c,e);return u!=null&&u<=n&&PC(c)}),a=s.map(c=>({study:c,committee:RC(c,e,n,i)})).filter(c=>c.study.rejected!==!0&&!c.committee?.rejected),o=a.filter(c=>c.committee?.score!=null);if(o.length){const c=o.sort((u,f)=>f.committee.score-u.committee.score||(hn(u.study.p)??1/0)-(hn(f.study.p)??1/0)||ca(u.study,e)-ca(f.study,e)||Qi(u.study).localeCompare(Qi(f.study))).slice(0,3);return{status:"ranked",tested:r.length,confirmed:s.length,entries:c.map((u,f)=>Kh(u.study,u.committee,f+1))}}const l=a.sort((c,u)=>ca(c.study,e)-ca(u.study,e)||Qi(c.study).localeCompare(Qi(u.study)));return{status:l.length?"awaiting":"none",tested:r.length,confirmed:s.length,entries:l.map(c=>Kh(c.study,c.committee,null))}}function Kh(t,e,n){const i=Il(t.halves);return{studyId:Qi(t),headline:Mn(t.headline)||Mn(t.question),hypothesis:Mn(t.hypothesis)||Mn(t.mechanism),agentId:Mn(t.agent_id),tick:hn(t.tick)??0,p:hn(t.p),rho:hn(t.rho),n:hn(t.n),halves:i.map(r=>({rho:hn(r.rho),n:hn(r.n),p:hn(r.p)})),rank:n,score:e?.score??null,unscored:e?.score==null,committee:e}}function LC(t,e){const n=Pl(t.manifest,t);return n?`<p class="metric-description">${e(n)}</p>`:""}function NC(t){const e=nm(t),n=e.head==="monitor"?"#fff8e4":"#263b41",i=e.head==="round"?`<ellipse cx="70" cy="49" rx="33" ry="26" fill="${e.shell}"/>`:`<rect x="37" y="24" width="66" height="50" rx="${e.head==="monitor"?7:17}" fill="${e.shell}"/>`,r=e.antenna==="pair"?[53,87]:[e.antenna==="offset-right"?87:e.antenna==="offset-left"?53:70],s=[58,82].map(o=>e.eyes==="happy"?`<path d="M${o-5} 47q5-8 10 0" fill="none" stroke="${n}" stroke-width="3" stroke-linecap="round"/>`:`<ellipse cx="${o}" cy="46" rx="3.5" ry="5" fill="${n}"/>`).join(""),a=e.prop==="magnifier"?`<circle cx="112" cy="99" r="12" fill="#bce7ef88" stroke="${e.accent}" stroke-width="5"/><path d="M106 109l-7 14" stroke="#263b41" stroke-width="5"/>`:e.prop==="clipboard"?`<rect x="19" y="89" width="25" height="34" rx="3" fill="${e.trim}"/><rect x="23" y="94" width="17" height="24" fill="#fff8e4"/><path d="M26 100h11m-11 6h11m-11 6h8" stroke="${e.accent}" stroke-width="2"/>`:`<path d="M28 92h10v15l10 16H18l10-16Z" fill="${e.trim}" stroke="#263b41" stroke-width="2"/><path d="M28 92h10" stroke="${e.accent}" stroke-width="4"/>`;return`<svg class="podium-agent" viewBox="0 0 140 162" aria-hidden="true" focusable="false"><ellipse cx="70" cy="155" rx="39" ry="5" fill="#0003"/><g stroke="#263b41" stroke-width="2"><path d="M54 127v20m32-20v20" stroke="${e.shell}" stroke-width="14"/><rect x="43" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="75" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="42" y="81" width="56" height="51" rx="12" fill="${e.shell}"/><path d="M70 88v41" stroke-width="1"/><path d="M42 90l-8 25m64-25 8 23" stroke="${e.shell}" stroke-width="12"/><circle cx="33" cy="116" r="7" fill="${e.accent}"/><circle cx="106" cy="114" r="7" fill="${e.accent}"/><rect x="61" y="71" width="18" height="11" rx="3" fill="${e.accent}"/><circle cx="34" cy="49" r="10" fill="${e.accent}"/><circle cx="106" cy="49" r="10" fill="${e.accent}"/>${r.map(o=>`<path d="M${o} 25V12"/><circle cx="${o}" cy="10" r="5" fill="${e.trim}"/>`).join("")}${i}</g>${e.head==="monitor"?'<rect x="43" y="31" width="54" height="36" rx="6" fill="#263b41"/>':""}${s}<path d="M62 56q8 12 16 0" fill="none" stroke="${n}" stroke-width="2.5" stroke-linecap="round"/><circle cx="49" cy="56" r="3" fill="${e.trim}"/><circle cx="91" cy="56" r="3" fill="${e.trim}"/><rect x="77" y="96" width="14" height="10" rx="2" fill="${e.accent}"/><circle cx="52" cy="93" r="3" fill="${e.trim}"/>${a}</svg>`}function DC(t){return t.filter(e=>!e.error&&e.score!=null&&Number.isFinite(e.score)).map((e,n)=>({idea:e,index:n})).sort((e,n)=>{const i=r=>r.rank!=null&&Number.isFinite(r.rank)&&r.rank>0?r.rank:1/0;return i(e.idea)-i(n.idea)||n.idea.score-e.idea.score||e.index-n.index}).slice(0,3).map(({idea:e})=>e)}function UC(t,e){const n=DC(t);if(!n.length)return'<section class="final-podium"><h2>Ig Nobel podium</h2><p role="status">Awaiting final judge scores. The podium will appear when judging is complete.</p></section>';const i=n.map((r,s)=>`<details class="podium-place podium-place-${s+1}"><summary><span class="podium-stage"><span class="podium-contestant">${r.agent?`${NC(r.agent.id)}<span class="podium-agent-name">${e(r.agent.name)}</span>`:'<span class="podium-agent-unknown">Agent not recorded</span>'}</span><span class="podium-step"><span class="podium-medal">${s+1}</span><span class="podium-score">${e(r.score)}<small>Final judge score</small></span></span></span><span class="podium-idea-label"><span class="podium-label">${s===0?"Ig Nobel Prize winner":s===1?"Second place":"Third place"}</span><strong class="podium-title">${e(r.title||r.id)}</strong><span class="podium-inspect">Inspect idea <span aria-hidden="true">↗</span></span></span></summary><div class="podium-description">${r.agent?`<p class="podium-author">Researcher: ${e(r.agent.name)}</p>`:""}<p>${e(r.description||"No additional idea description was supplied.")}</p>${r.verdict?`<p>${e(r.verdict)}</p>`:""}<p><strong>Final score: ${e(r.score)}</strong></p><small>Idea ${e(r.id)}</small></div></details>`).join("");return`<section class="final-podium" aria-label="Final top three ideas"><h2>Ig Nobel podium</h2><p>Final judge ranking · Select an idea to explore its details.</p>${n.length<3?`<p>Only ${n.length} scored ${n.length===1?"idea is":"ideas are"} available.</p>`:""}<div class="podium-places">${i}</div></section>`}function kC(t){return vd(t.igjudge)?.ideas.filter(n=>n.rank!=null).map(n=>{const i=t.entities?.studies?.find(l=>{const c=l;return(c.id??c.study_id)===n.studyId}),r=n.agentId||(typeof i?.agent_id=="string"?i.agent_id:""),s=t.manifest.agents?.find(l=>l.agent_id===r||l.native_id===r),a=t.frames.at(-1)?.snapshot.agents.find(l=>l.id===r),o=r?{id:s?.agent_id||r,name:s?.display_name||a?.name||r}:void 0;return{id:n.studyId,title:n.title,description:n.hypothesis,score:n.total,rank:n.rank,verdict:n.verdict,error:n.error,agent:o}})??[]}function OC(t,e,n){return Rs(t,e)?UC(kC(t),n):""}const Fn=t=>typeof t=="string"?t:"",Dg=(t,e)=>t.events.filter(n=>n.tick<=e);function FC(t,e=6){const n=new Map;for(const r of t){const s=n.get(r.round)||[];s.push(r),n.set(r.round,s)}const i=Math.max(1,Math.floor(e));return[...n].sort(([r],[s])=>r-s).map(([r,s])=>(s.sort((a,o)=>a.tick-o.tick),{round:r,visible:s.slice(0,i),hidden:s.slice(i)}))}function zC(t,e,n){if(!t.length)return 0;let i=n==null?-1:t.findIndex(o=>o.round===n);i<0&&(i=t.findIndex(o=>e>=o.startTick&&e<=o.endTick)),i<0&&(i=e<t[0].startTick?0:t.length-1);const r=t[i],s=r.endTick-r.startTick,a=s>0?(e-r.startTick)/s:e>=r.endTick?1:0;return i+Math.max(0,Math.min(1,a))}function BC(t){if(t.type==="hypothesis.proposed")return"idea";if(t.type==="llm.called"){const e=Fn(t.payload?.role).toLowerCase();return e.includes("scout")||e.includes("search")?"scout":e.includes("memory")?"memory":"idea"}return t.type==="verdict.issued"?t.payload?.vetoed===!0?"veto":"critic":t.type==="study.replicated"?"critic":t.type==="question.asked"&&t.payload?.kind==="search"||t.type==="agent.assigned"&&t.payload?.scout===!0?"scout":t.type==="question.asked"&&t.payload?.kind==="recall"||t.type==="observation.received"&&t.payload?.kind==="memories"?"memory":t.type==="boredom.measured"||t.type==="round.started"&&["BOREDOM_SNAP","PARADIGM_BREAKOUT"].includes(Fn(t.payload?.regime))?"boredom":t.type==="experiment.finished"?t.payload?.status==="keep"?"keep":"evaluation":t.type==="discovery.made"?"keep":t.type==="gate.checked"&&(t.payload?.pass??t.payload?.passed)===!1?"gate":t.type==="experiment.started"&&t.payload?.kind!=="baseline"?"idea":null}function $C(t,e){if(!t)return{rounds:[],lanes:[],roundCloses:[],roundSpans:[]};const n=new Map;let i=0;for(const d of t.events)d.type==="round.started"&&(i=Number(d.round||d.payload?.round)||i+1),n.set(d,Number(d.round||d.payload?.round)||i);const r=Dg(t,e),s=new Map;let a=0;const o=new Map,l=new Set;for(const d of r)d.type==="round.started"&&(a=Number(d.round||d.payload?.round)||a+1,l.add(a)),s.set(d,Number(d.round||d.payload?.round)||a);for(const d of r){const h=BC(d);if(!h)continue;const g=Fn(d.agentId||d.payload?.agent_id||d.refs?.agent_id);if(!g)continue;const _=s.get(d)||1;l.add(_);const p=t.manifest.agents?.find(b=>b.agent_id===g)?.display_name||g,m=o.get(g)||{id:g,name:p,marks:[]},v=Fn(d.refs?.event_id)||`${d.type}:${d.tick}`,M=h==="veto"?"Veto":h==="keep"?"New best":h==="gate"?"Gate blocked":h==="scout"?"Search":h==="memory"?"Memory recall":h==="boredom"?"Boredom shift":h==="critic"?"Critic review":h==="idea"?"Idea":"Evaluation";m.marks.push({tick:d.tick,round:_,kind:h,label:M,why:Fn(d.message||d.payload?.why||d.payload?.reason),eventId:v}),o.set(g,m)}const c=[...l].flatMap(d=>{const h=t.events.filter(m=>m.type==="experiment.finished"&&n.get(m)===d),g=t.events.find(m=>["round.closed","round.finished","round.completed"].includes(m.type)&&n.get(m)===d),_=t.events.find(m=>m.type==="round.started"&&(n.get(m)||0)>d),p=g?.tick??h.at(-1)?.tick??_?.tick;return p!=null&&p<=e?[{round:d,tick:p}]:[]}),u=[...l].sort((d,h)=>d-h),f=u.map((d,h)=>{const g=t.events.find(b=>b.type==="round.started"&&n.get(b)===d),_=t.events.filter(b=>n.get(b)===d),p=g?.tick??_[0]?.tick??0,m=t.events.find(b=>["round.closed","round.finished","round.completed"].includes(b.type)&&n.get(b)===d),v=t.events.filter(b=>b.type==="experiment.finished"&&n.get(b)===d).at(-1),M=u[h+1]==null?void 0:t.events.find(b=>b.type==="round.started"&&n.get(b)===u[h+1]);return{round:d,startTick:p,endTick:m?.tick??v?.tick??M?.tick??t.manifest.totalTicks}});return{rounds:u,lanes:[...o.values()],roundCloses:c,roundSpans:f}}function HC(t,e){if(!t)return{};const n=Dg(t,e);let i=0;if(n.some(g=>["run.finished","run.stopped"].includes(g.type))||["finished","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks)return Object.fromEntries((t.manifest.agents||[]).map(g=>[g.agent_id,"idle"]));for(const g of n)g.type==="round.started"&&(i=Number(g.round||g.payload?.round)||i+1);const s=n.filter(g=>(Number(g.round||g.payload?.round)||i)===i),a=new Set(s.filter(g=>g.type==="agent.assigned").map(g=>Fn(g.agentId||g.payload?.agent_id)).filter(Boolean)),o=s.filter(g=>["llm.called","hypothesis.proposed"].includes(g.type)&&Fn(g.agentId||g.payload?.agent_id)),l=s.filter(g=>g.type==="agent.assigned"&&Fn(g.agentId||g.payload?.agent_id)),c=o.at(-1),u=l.at(-1),f=c&&(!u||c.tick>=u.tick)?Fn(c.agentId||c.payload?.agent_id):"",d=u&&(!c||u.tick>c.tick)?Fn(u.agentId||u.payload?.agent_id):"",h={};for(const g of t.manifest.agents||[])h[g.agent_id]="idle";for(const g of a){const _=o.some(m=>Fn(m.agentId||m.payload?.agent_id)===g),p=s.some(m=>m.type==="experiment.finished"&&Fn(m.agentId||m.payload?.agent_id)===g);h[g]=g===d?"waiting":g===f&&!p?"active":_||p?"done":"waiting"}if(n.some(g=>["round.closed","round.finished","round.completed"].includes(g.type)&&(Number(g.round||g.payload?.round)||i)===i)||n.some(g=>g.type==="round.started"&&(Number(g.round||g.payload?.round)||i)>i))for(const g of a)h[g]="done";return h}document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target.closest?.("[data-orch-tick]");e&&(t.preventDefault(),e.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});const Y=t=>document.getElementById(t),pl=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Me=t=>pl(ka(String(t??""))),Cs=Y("console"),Mt=Y("conversation"),Md=Y("guide"),ir=Y("inspector"),er=Y("results-dialog");let Te,Nt,Jn,te=null,at=null,Ug=[],Er=null,tr="",Ee=0,it=!1,kt=!1,Zo=KS,ar="highlights",vs=0,Ed=[],Li=null,Ll="",Mi="",Ot="",Ai=!1,An=!1,Yi="",pi="",Jh=0,Ps=!1,Ma=!1,Qh=0,$n="",Cu=!1,kg=!1,Ro=!1,ep=!1,Nr=null,yn=0,si=0,pa=!1,Co={x:0,y:0},Wi=null,tp,np,ml,Dr=0,Og=new Map,gl=!1,Fg=!1,Pu=!1,cs=null;const Iu=xM(),zg=new URLSearchParams(location.search);let Tn=zg.get("cinema")==="1";const GC=Tn&&zg.get("capture")==="1";let Rr=null,Bg=0;Tn&&document.body.classList.add("cinema");function ka(t){return pR(t,Og)}function $g(){const t=md(te?.manifest,te||void 0),e=Y("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${Me(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${Me(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.hidden=!te,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}$g();function VC(t){Og=new Map(Object.entries(t.manifest.aliasMap||{}))}let Hg=new Map,qo=[];const bn=new Set;function $a(t){return HR(t,te?.manifest.agents?.find(e=>e.agent_id===t.id))}function Gg(t){const e=$a(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${Me(e.initial)}</span>`}function Vg(t,e=!0){const n=$a(t),i=te&&!n.staff?mg(pg(te.events,t.id,Ee),n.familyLabel):"";return[n.familyLabel,n.staff?"":i||(t.role!==t.type?dg(t.role):""),e?t.standby?"standing by":xd(t.activity||t.state):""].filter(Boolean).map(r=>pl(r)).join(" · ")}function Wg(t){if($a(t).staff)return"";const e=t.boredom==null?null:Di(t.boredom),n=Fr(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":ks(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}" title="${Me(n.description)}">${Me(n.label)}</em>`:""}</span>`}function WC(t){const e=t.boredom==null?null:Di(t.boredom);return`<span class="strip-meter"><i style="width:${e??0}%;background:${e==null?"transparent":ks(e)}"></i></span>`}function Xg(t,e,n){for(const[i,r]of Object.entries(BR(e,n)))r==null?t.removeAttribute(i):t.getAttribute(i)!==r&&t.setAttribute(i,r)}function XC(){const t=qR(te?.manifest.agents||[]);Y("whos-who").hidden=!t.length,Y("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${pl(e.title)}<small>${Me(e.names.join(", "))}</small></dt><dd>${pl(e.does)}</dd>`).join("")}</dl>`:""}function ma(){return te?.manifest.live?"Published":"Recorded"}function wd(){return gg(te?.manifest,Ee,it)}function ip(t,e){const n=$s(t.agentId,"");if(t.kind==="regime"){nr(`${t.title}${n?` · ${n}`:""}: ${t.detail}`);return}const i=Y("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${Me(t.title)}</strong><p>${Me([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(np),np=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function Td(){if(te){if(Ee>Dr){const t=eg(te.events,Dr,Ee,te.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?ip(e.at(-1),e.length-1):t.length&&ip(t.at(-1),0)}Dr=Ee}}function en(){return bg(at?.agents||[],Ee,Hg)}function nr(t){Y("toast").textContent=t,Y("toast").hidden=!1,clearTimeout(tp),tp=setTimeout(()=>Y("toast").hidden=!0,4e3)}function Un(){document.exitPointerLock?.(),bn.clear()}function fn(){return document.querySelector("dialog[open]")!==null||Li!==null}function Zg(t,e,n){const i=Array.from(t.querySelectorAll(n)),r=new Set(e);for(const s of i)r.has(s)||s.remove();if(i.length!==e.length||i.some((s,a)=>s!==e[a]))for(const s of e)t.appendChild(s)}function ZC(t,e){const n=t.children[1],i=n.querySelector(".row-meter");if($a(e).staff){i?.remove();return}const r=e.boredom==null?null:Di(e.boredom);let s=i;if(!s){const h=document.createElement("template");h.innerHTML=Wg(e),s=h.content.firstElementChild,n.appendChild(s)}const a=(h,g)=>{s.getAttribute(h)!==g&&s.setAttribute(h,g)};a("aria-label",`${e.name} boredom`),a("aria-valuemin","0"),a("aria-valuemax","100"),r==null?s.removeAttribute("aria-valuenow"):a("aria-valuenow",String(Math.round(r)));const o=s.querySelector("i");o.style.width!==`${r??0}%`&&(o.style.width=`${r??0}%`);const l=r==null?"transparent":ks(r);o.style.background!==l&&(o.style.background=l);const c=s.querySelector("b"),u=r==null?"not measured":`bored ${Math.round(r)}%`;c.textContent!==u&&(c.textContent=u);const f=Fr(e.boredomSpectrum?.regime);let d=s.querySelector(".regime-chip");if(!f.label){d?.remove();return}d||(d=document.createElement("em"),d.className="regime-chip",s.appendChild(d)),d.dataset.tone!==f.tone&&(d.dataset.tone=f.tone),d.title!==f.description&&(d.title=f.description),d.textContent!==f.label&&(d.textContent=f.label)}function qC(t){const e=document.createElement("button");return e.type="button",e.className="agent-row",e.dataset.agent=t.id,e.innerHTML=`${Gg(t)}<span><strong></strong><small></small>${Wg(t)}</span><i></i>`,e}function jC(t,e){t.dataset.agent=e.id,t.disabled=!!e.standby,e.standby?t.dataset.standby="true":delete t.dataset.standby;const n=$a(e),i=t.querySelector(".agent-avatar");i.dataset.family!==n.familyKey&&(i.dataset.family=n.familyKey),i.textContent!==n.initial&&(i.textContent=n.initial);const r=n.color||"";i.style.getPropertyValue("--agent-color")!==r&&(r?i.style.setProperty("--agent-color",r):i.style.removeProperty("--agent-color"));const s=t.querySelector("strong");s.textContent!==e.name&&(s.textContent=e.name);const a=t.querySelector("small"),o=Vg(e);a.innerHTML!==o&&(a.innerHTML=o),ZC(t,e)}function YC(){const t=Y("agent-list"),e=ZR(at?.agents||[],en());if(!e.length){const r=Array.from(t.querySelectorAll(".agent-row[data-agent]"));for(const s of r)s.remove();t.querySelector(".empty")||(t.innerHTML='<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>');return}t.querySelector(".empty")?.remove();const n=Array.from(t.querySelectorAll(".agent-row[data-agent]")),i=vg(e,n,r=>r.id,r=>r.dataset.agent||"",qC,jC);Zg(t,i,".agent-row[data-agent]")}function Is(t){document.body.classList.toggle("bar-collapsed",t),Y("collapse-bar").setAttribute("aria-expanded",String(!t)),Y("collapse-bar").textContent=t?"▴":"▾",Y("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel"),Y("tick-label").textContent=t?te?.manifest.continuous?"Continuous session":`Round ${at?.round??1}`:`Tick ${Math.floor(Ee)} / ${te?.manifest.totalTicks||0}`}function KC(){const t=Cs.open||ir.open?"open-console":Md.open?"open-guide":Mt.open?"team-drawer":Li;document.querySelectorAll(".sidebar button").forEach(e=>e.setAttribute("aria-pressed",String((e.dataset.drawer||e.id)===t)))}function Dt(){KC();const t=fn(),e=t||An;document.body.classList.toggle("dock-auto-hidden",t),document.body.classList.toggle("context-panel-open",t),document.body.classList.toggle("dock-context-open",e),e&&!Ro&&(ep=document.body.classList.contains("bar-collapsed"),Ro=!0),e?Is(!0):Ro&&(Ro=!1,Is(ep)),Y("collapse-bar").disabled=e,Nl()}document.querySelectorAll("dialog").forEach(t=>t.addEventListener("close",Dt));function mi(){Li&&(Y(Li).hidden=!0),Li=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false")),Y("open-about").setAttribute("aria-expanded","false"),Dt()}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=Li!==e;Un(),Mt.close(),mi(),n&&(it=!1,Zt(),Li=e,Y(e).hidden=!1,t.setAttribute("aria-expanded","true"),e==="orchestration-drawer"&&e2(),Dt())};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=mi;function Ha(t){if(kt=t,Ot="",Ai=!1,An=!1,Yi="",pi="",Dt(),Un(),Te.setOverview?.(!t),Y("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){it=!1,Te.camera.position.set(0,1.69,9.5);const e=new Hn().setFromQuaternion(Te.camera.quaternion,"YXZ");yn=e.y,si=e.x}else{const e=Te.camera.quaternion.clone();Jn.reset(),Te.camera.quaternion.copy(e),Jn.syncFromCamera()}Zt(),jg()}function Zt(){if(te){const r=uR(te.manifest);Y("overview-eyebrow").textContent=r.eyebrow,Y("run-callout").textContent=r.callout,Y("replay-kicker").textContent=it?"Replaying recorded run":"Recorded run",Y("connection").hidden=li,Y("header-actions").hidden=!1,Y("open-results").textContent="Results",JC();const s=at?.boredom==null?null:Math.round(Di(at.boredom)),a=Y("boredom-gauge");Xg(a,s,"Swarm boredom"),a.querySelector("span").style.width=`${s??0}%`,a.dataset.tone=s==null?"unknown":s>=65?"high":s>=35?"medium":"low"}Y("open-results").hidden=!te||!li;const t=JR(te?.manifest,Ee,it,te?.events||[]);Y("go-live").hidden=t.hidden,Y("go-live").textContent=t.label,Y("go-live").classList.toggle("at-edge",t.atEdge),Y("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),Y("play").textContent=it?"Ⅱ Pause":"▶ Play",Y("play").setAttribute("aria-label",it?"Pause":"Play"),Y("camera-mode").textContent=kt?"Lab view ↗":"Walk inside ↗",Y("camera-mode").disabled=!te||it,Y("timeline").value=String(Ee),Y("tick-label").textContent=document.body.classList.contains("bar-collapsed")?te?.manifest.continuous?"Continuous session":`Round ${at?.round??1}`:`Tick ${Math.floor(Ee)} / ${te?.manifest.totalTicks||0}`,Y("timeline").setAttribute("aria-valuetext",`Round ${at?.round??1} of ${at?.config.rounds??te?.manifest.time?.rounds??0}`),Y("replay-mode").value=ar;const e=te&&Ba(te.events,Ee),n=Y("activity-caption"),i=e?.refs?.experiment_id;n.textContent=it?"Replaying recorded run":e?ka(XR({...e,message:hl(e,Oa())||e.message},$s(e.agentId,""))):"Recorded run",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function JC(){if(Y("selected-run-summary").textContent=te?MR(te.manifest):"",!te)return;const t=te.manifest.time?.rounds||at?.config.rounds||0,e=String(at?.regime||"").toUpperCase(),n=/BOREDOM_SNAP/.test(e)?"Bored: trying new directions":/PARADIGM_BREAKOUT/.test(e)?"Breakout":"Refining";Y("run-meta").innerHTML=`<span class="status-chip">${it?"Replaying recorded run":"Recorded run"}</span><span>${te.manifest.continuous?"Continuous session":`Round ${at?.round??1}${t?` of ${t}`:""}`}</span><span>${n}</span>`}function Qn(t){te&&(Ee=Math.max(0,Math.min(te.manifest.totalTicks,t)),at=Ba(te.frames,Ee)?.snapshot||null,Zt(),Ad(),Cs.open&&Pd(),Mt.open&&Id(),ir.open&&i0(),er.open&&Lu(),!Tn&&!Cu&&Rs(te,Ee)&&(Cu=!0,Lu(),er.open||(er.showModal(),er.scrollTop=0,Dt())))}function Ad(){Y("agent-count").textContent=`${en().length} AGENTS`,YC(),Y("run-label").textContent=at?te?.manifest.continuous?"Continuous session":`Round ${at.round}${at.config.rounds?` of ${at.config.rounds}`:""}`:"Waiting for the recorded run",jg()}function QC(t){const e=document.createElement("button");return e.type="button",e.dataset.agent=t.agent.id,e.dataset.kind=t.kind,t.kind==="staff"?e.className="status-tile status-role":(e.className="status-tile",e.innerHTML=`<strong class="status-tile-name"></strong>${WC(t.agent)}<span class="tile-metric"></span>`),qg(e,t),e}function qg(t,e){const n=e.agent;if(t.dataset.agent=n.id,t.dataset.kind!==e.kind&&(t.dataset.kind=e.kind),e.kind==="staff"){t.className!=="status-tile status-role"&&(t.className="status-tile status-role");const h=e.help||n.name,g=`Focus ${n.name}: ${e.label}`;t.title!==h&&(t.title=h),t.getAttribute("aria-label")!==g&&t.setAttribute("aria-label",g),t.textContent!==e.label&&(t.textContent=e.label);return}t.className!=="status-tile"&&(t.className="status-tile");const i=`Focus ${n.name}: ${e.metricText}`;t.getAttribute("aria-label")!==i&&t.setAttribute("aria-label",i);const r=t.querySelector(".status-tile-name");r.textContent!==n.name&&(r.textContent=n.name);const s=t.querySelector(".strip-meter"),a=n.boredom==null?null:Di(n.boredom);Xg(s,a,`${n.name} boredom`);const o=s.querySelector("i"),l=`${a??0}%`,c=a==null?"transparent":ks(a);o.style.width!==l&&(o.style.width=l),o.style.background!==c&&(o.style.background=c);const u=t.querySelector(".tile-metric");u.textContent!==e.metricText&&(u.textContent=e.metricText),e.metricTitle?u.title!==e.metricTitle&&(u.title=e.metricTitle):u.hasAttribute("title")&&u.removeAttribute("title");const f={active:"Active turn",waiting:"Waiting",done:"Done this round"};let d=t.querySelector(".turn-badge");if(!e.turn){d?.remove();return}d||(d=document.createElement("small"),d.className="turn-badge",t.appendChild(d)),d.dataset.turn!==e.turn&&(d.dataset.turn=e.turn),d.textContent!==f[e.turn]&&(d.textContent=f[e.turn])}function jg(){const t=Y("status-strip");if(!te||!at||kt||document.body.classList.contains("prestart")){t.hidden=!0;return}const e=en().filter(p=>p.type!=="baseline"),n=at.results,i=at.metric,r=Ua(te.manifest,te),s=e.filter(p=>p.type!=="conductor"&&p.type!=="critic").length,a=n.filter(p=>wn(p.status,p.kind)!=="baseline"&&typeof p.value=="number"&&Number.isFinite(p.value)),o=i.name==="replicated_findings"?"maximize":i.direction,l=a.length?o==="maximize"?Math.max(...a.map(p=>p.value)):Math.min(...a.map(p=>p.value)):at.value,c=n.find(p=>wn(p.status,p.kind)==="baseline"&&typeof p.value=="number")?.value??null,u={active:"Active turn",waiting:"Waiting",done:"Done this round",idle:"Idle"},f=HC(te,Ee),d=e.map(p=>{if(p.type==="conductor"||p.type==="critic")return{agent:p,kind:"staff",label:vC(p.type,te.events,Ee),help:xC(p.type,te.events,Ee)};const m=bC(n,p.id,p.name,i,l,c),v=r?gC(n,p.id,p.name):null,M=f[p.id];return{agent:p,kind:"scientist",metricText:v?_C(v):yC(m.best),metricTitle:v?mC:void 0,turn:M&&M!=="idle"?u[M]:void 0}}),h=Array.from(t.querySelectorAll(".status-tile[data-agent]")),g=vg(d,h,p=>p.agent.id,p=>p.dataset.agent||"",QC,qg);Zg(t,g,".status-tile[data-agent]");let _=t.querySelector(".status-scroll-hint");s?(_||(_=document.createElement("span"),_.className="status-scroll-hint",_.setAttribute("aria-hidden","true"),t.appendChild(_)),_.textContent!=="›"&&(_.textContent="›"),t.lastElementChild!==_&&t.appendChild(_)):_?.remove(),t.hidden=!e.length,Nl()}function e2(){const t=Y("orchestration-content");if(!te){t.innerHTML="<p>No run loaded.</p>";return}const e=$C(te,Ee),n=860,i=40,r=30,s=r+e.lanes.length*i+12,a=158,o=n-a-24,l=o/Math.max(1,e.rounds.length),c=(m,v)=>a+zC(e.roundSpans,m,v)*l,u={idea:"#e4c986",critic:"#91b4d4",veto:"#e77872",scout:"#82c5ae",memory:"#b39bdb",boredom:"#dd9b59",evaluation:"#a8b6b7",keep:"#77bb69",gate:"#e77872"},f=e.lanes.map((m,v)=>{const M=r+v*i,b=FC(m.marks).map(T=>{const A=Math.max(0,e.rounds.indexOf(T.round)),x=a+A*l+4,S=a+(A+1)*l-4,O=T.visible.map(C=>c(C.tick,C.round));for(let C=1;C<O.length;C++)O[C]=Math.max(O[C],O[C-1]+8.5);if(O.length){const C=O.at(-1)-S;if(C>0)for(let V=0;V<O.length;V++)O[V]-=C;const G=x-O[0];if(G>0)for(let V=0;V<O.length;V++)O[V]+=G}const N=T.visible.map((C,G)=>`<g class="orch-mark" role="button" tabindex="0" data-orch-tick="${C.tick}" data-orch-agent="${Me(m.id)}" aria-label="${Me(C.label)} by ${Me(m.name)} at tick ${C.tick}"><title>${Me(C.label)}${C.why?`: ${Me(C.why)}`:""} · tick ${C.tick}</title><circle cx="${O[G]}" cy="${M}" r="${C.kind==="veto"?5:4}" fill="${u[C.kind]}" class="orch-dot ${C.kind}"/></g>`).join(""),R=T.hidden[0],$=R?Math.max(x+10,Math.min(S-10,c(R.tick,T.round))):0,B=R?`<g class="orch-overflow" role="button" tabindex="0" data-orch-tick="${R.tick}" data-orch-agent="${Me(m.id)}" aria-label="${T.hidden.length} more events in round ${T.round}; jump to ${Me(R.label)} at tick ${R.tick}"><title>${T.hidden.length} more events in round ${T.round}</title><rect x="${$-10}" y="${M+14}" width="20" height="14" rx="7"/><text x="${$}" y="${M+24}" text-anchor="middle">+${T.hidden.length}</text></g>`:"";return`${N}${B}`}).join("");return`<text x="8" y="${M+4}" class="orch-name">${Me(m.name)}</text><line x1="${a}" y1="${M}" x2="${n-12}" y2="${M}" class="orch-lane"/>${b}`}).join(""),d=e.roundCloses.filter(m=>m.tick>0).map(m=>`<line x1="${c(m.tick,m.round)}" y1="${r-20}" x2="${c(m.tick,m.round)}" y2="${s}" class="orch-close"><title>Round ${m.round} closed</title></line>`).join(""),h=e.rounds.map((m,v)=>`<text x="${a+(v+.5)*l}" y="13" class="orch-round">${te?.manifest.continuous?"Session":`Round ${m}`}</text>`).join(""),g=`<line x1="${c(Ee)}" y1="${r-20}" x2="${c(Ee)}" y2="${s}" class="orch-playhead"/>`,_={breakout:"Breakout conditions assign three refining slots and one exploring slot.",boredom:"A boredom shift assigns one refining slot and three exploring slots; the novelty screen rejects close repeats.",keep:"Kept means retained as a current best; baseline is the unmodified reference."},p=[["idea","Idea"],["scout","Search"],["memory","Memory"],["boredom","Boredom shift"],["critic","Review"],["veto","Veto"],["keep","Kept"]].map(([m,v])=>`<span${_[m]?` title="${Me(_[m])}"`:""}><i style="--mark:${u[m]}"></i>${v}</span>`).join("")+`<span class="orchestration-legend-note"><span title="${Me(_.breakout)}">Breakout</span>: 3 refine + 1 explore; <span title="${Me(_.boredom)}">Boredom shift</span>: 1 refine + 3 explore; close repeats are screened out.</span>`;t.innerHTML=e.lanes.length?`<div class="orchestration-scroll"><svg class="orchestration-svg" viewBox="0 0 ${n} ${s}" role="img" aria-label="Orchestration lanes through tick ${Math.floor(Ee)}">${h}${d}${f}${g}</svg></div><div class="orchestration-legend">${p}</div><p class="orchestration-hint">Select a mark to jump to that event and focus its scientist.</p>`:"<p>No orchestration events by this moment.</p>"}function Lu(){if(!te){Y("results-content").innerHTML="<p>No results available.</p>";return}const t=Rs(te,Ee)?OC(te,Ee,Me)+RR(te.igjudge,Me):"";if(As(te.manifest,te)){const u=Au(te),f=cg(te,Ee),d=f.some(h=>h.score>=.5&&!h.rejected&&h.award&&!/committee/i.test(h.award));if(Ua(te.manifest,te)||!d){Y("results-title").textContent="What the swarm found",Y("results-content").innerHTML=t+Hh(Pr,te,Me,u,!!t);return}}const e=Pr.results,n=md(te.manifest,te),i=`<div class="results-provenance" data-tone="${n.tone}"><strong>${Me(n.label)}</strong>${n.chips.map(u=>`<span>${Me(u)}</span>`).join("")}</div>`;if(As(te.manifest,te)){const u=Rs(te,Ee)||Ee>=te.manifest.totalTicks||te.events.some(v=>["run.finished","run.stopped"].includes(v.type)&&v.tick<=Ee),f=Au(te,Ee),d=IC(te.entities?.studies,te.events,Ee,u),h=f.awards.length?`<p class="podium-award-count">${Me(e.awardCount.replace("{N}",String(f.awards.length)))}</p>`:Ua(te.manifest,te)?`<p class="podium-empty">${Me(e.noAwards)}${tg(te.manifest,te)?Me(e.creditErrorSuffix):""}</p>`:`<p class="podium-empty">${Me(bc.committeePending)}</p>`,g=e.countLine.replace("{N}",String(f.registered)).replace("{M}",String(f.confirmed)).replace("{K}",String(f.underCurrentRules)),_=d.entries.map(v=>`<li>${v.rank?`<b>#${v.rank}</b> `:""}${Me(v.headline||v.studyId)}${v.unscored?" · Unscored":` · score ${Me(v.score)}`}${v.rho!=null?` · ρ ${v.rho.toFixed(3)}`:""}${v.p!=null?` · p ${fl(v.p)}`:""}</li>`).join("");Y("results-title").textContent="What the swarm found";const p=d.status==="awaiting"&&_?`<details class="unscored-studies"><summary>${d.confirmed} confirmed studies, unscored</summary><ul class="podium-list">${_}</ul></details>`:_?`<ul class="podium-list">${_}</ul>`:"",m=LC(te,Me);Y("results-content").innerHTML=`${t}${Hh(Pr,te,Me,f,!!t)}${i}<h2>In-run committee results</h2>${h}<p class="results-count">${Me(g)}</p>${m}${p}<details class="judging-details"><summary>${Me(bc.title)}</summary><ol>${bc.steps.map(v=>`<li>${Me(v)}</li>`).join("")}</ol></details>`;return}const r=EC(te,Ee);if(!r){Y("results-content").innerHTML="<p>No results available.</p>";return}const s=u=>u==null?"–":Lr(u),a=u=>u?`${u.low.toFixed(2)}–${u.high.toFixed(2)}`:"",o=u=>u.fraction||s(u.score??u.loss),l=r.heldOut?`<section class="held-out"><h3>Held-out test</h3><p>Baseline ${o(r.heldOut.baseline)} → best ${o(r.heldOut.best)}</p>${r.heldOut.best.wilson?`<p>95% Wilson CI: ${a(r.heldOut.best.wilson)} (baseline ${a(r.heldOut.baseline.wilson)})</p>`:""}${r.heldOut.proxyNote?`<p>${Me(r.heldOut.proxyNote)}</p>`:""}${r.heldOut.referenceNote?`<p>${Me(r.heldOut.referenceNote)}</p>`:""}</section>`:'<p class="no-held-out">no held-out split for this task</p>',c=r.delta==null?"":` · ${MC(r.delta,s)}`;Y("results-title").textContent=`RUN RESULTS · ${r.status.toUpperCase()}`,Y("results-content").innerHTML=`${i}<h2>${Me(Cl(te.manifest))}</h2><p class="result-metric">${Me(r.metric)} · ${r.direction==="maximize"?"higher is better":"lower is better"}</p><p class="result-baseline">Baseline ${s(r.baseline)} → best dev result ${s(r.best)}${c}</p>${r.winner?.commit?`<section class="result-winner"><h3>Winning change</h3><p><code>${Me(r.winner.commit)}</code> · ${Me(r.winner.agent)}</p><p class="result-winner-description">${Me(r.winner.description)}</p></section>`:"<p>Baseline is the best result so far.</p>"}${l}<p class="result-totals">Kept ${r.totals.kept} · discarded ${r.totals.discarded} · crashed ${r.totals.crashed}</p>${r.proxyNote&&!r.heldOut?.proxyNote?`<p class="proxy-note">${Me(r.proxyNote)}</p>`:""}${r.referenceNote&&!r.heldOut?.referenceNote?`<p class="reference-note">${Me(r.referenceNote)}</p>`:""}`}function Yg(){const t=Y("status-strip");t.dataset.scrollable=String(t.scrollWidth>t.clientWidth+1&&t.scrollLeft+t.clientWidth<t.scrollWidth-1)}function Nl(){const t=document.querySelector(".replay-bar"),e=Y("status-strip");if(!t||!e)return;const n=t.getBoundingClientRect();if(innerHeight<=500&&innerWidth>innerHeight){const i=document.querySelector(".sidebar"),r=document.querySelector("header"),s=Math.max(8,(i?.getBoundingClientRect().right??0)+8);e.style.left=`${s}px`,e.style.width=`${Math.max(0,innerWidth-s-8)}px`,e.style.top=`${Math.max(68,(r?.getBoundingClientRect().bottom??58)+8)}px`}else{const i=e.getBoundingClientRect().height||56;e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.top=`${Math.max(0,n.top-i-8)}px`}e.style.bottom="auto",e.style.transform="none",Yg()}Y("status-strip").addEventListener("scroll",Yg,{passive:!0});Y("replay-intro").addEventListener("close",()=>{Y("play").focus(),Dt()});const rp=document.querySelector(".replay-bar");rp&&new ResizeObserver(Nl).observe(rp);window.addEventListener("resize",Nl);function t2(){const t=Y("proximity");if(!Ot){t.hidden=!0;return}const e=en().find(i=>i.id===Ot);if(!e){t.hidden=!0;return}const n=`${Ot}|${Math.floor(Ee)}|${An}`;if(n!==pi){const i=hC({agent:e,recording:te,tick:Ee,metric:at?.metric,best:at?.value??null,agentName:$s});if(Nu(t,sp(pC(i,An,Me))),An){const r=bd(te,e.id,e.activity||e.state,Ee,Oa()),s=t.querySelector("[data-bubble-now]");s&&Nu(s,sp(Eg(r,{...Oa(),esc:Me},at?.metric)))}pi=n}t.hidden=!1,i2()}function sp(t){const e=document.createElement("template");return e.innerHTML=t,e.content}function Nu(t,e){const n=[...t.childNodes],i=[...e.childNodes];for(i.forEach((r,s)=>{const a=n[s];if(!a){t.appendChild(r.cloneNode(!0));return}if(a.nodeType===Node.TEXT_NODE&&r.nodeType===Node.TEXT_NODE){a.nodeValue!==r.nodeValue&&(a.nodeValue=r.nodeValue);return}if(a instanceof Element&&r instanceof Element&&a.tagName===r.tagName){for(const o of[...a.attributes])r.hasAttribute(o.name)||a.removeAttribute(o.name);for(const o of[...r.attributes])a.getAttribute(o.name)!==o.value&&a.setAttribute(o.name,o.value);Nu(a,n2(r));return}t.replaceChild(r.cloneNode(!0),a)});t.childNodes.length>i.length;)t.lastChild&&t.removeChild(t.lastChild)}function n2(t){const e=document.createDocumentFragment();return e.append(...[...t.childNodes].map(n=>n.cloneNode(!0))),e}function i2(){const t=Y("proximity");if(t.hidden)return;const e=Te.agentPositions?.().find(p=>p.id===Ot);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new k(0,2.35,0));if(Te.camera.updateMatrixWorld(),n.clone().applyMatrix4(Te.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(Te.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12,l=wt.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o)),c=Math.max(o,innerHeight-a.height-o),u=[document.querySelector("header"),Y("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar")].filter(p=>!!p&&!p.hidden&&getComputedStyle(p).display!=="none").map(p=>p.getBoundingClientRect()).filter(p=>p.width>0&&p.height>0),f=[s-a.height-22,s+22,...u.flatMap(p=>[p.bottom+o,p.top-a.height-o]),o,c].map(p=>wt.clamp(p,o,c)),d=(p,m)=>l<m.right&&l+a.width>m.left&&p<m.bottom&&p+a.height>m.top,h=p=>u.reduce((m,v)=>m+Math.max(0,Math.min(p+a.height,v.bottom)-Math.max(p,v.top))*Math.max(0,Math.min(l+a.width,v.right)-Math.max(l,v.left)),0),_=f.find(p=>!u.some(m=>d(p,m)))??f.sort((p,m)=>h(p)-h(m))[0];t.style.visibility="visible",t.style.left=`${l}px`,t.style.top=`${_}px`}function Kg(t,e=!1){Ot=t,Ai=!0,An=!1,Yi="",pi="",Dt(),e||Rd("scientist")}function r2(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function s2(){try{return localStorage.getItem("lab.coach.dismissed")==="1"}catch{return!1}}function a2(){const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(ml),Nr?.(),Nr=null;try{localStorage.setItem("lab.coach.dismissed","1")}catch{}$n="done",Y("coach-mark").hidden=!0};t.forEach(n=>window.addEventListener(n,e,!0)),Nr=()=>t.forEach(n=>window.removeEventListener(n,e,!0))}function _l(){if(fn()||s2()){Y("coach-mark").hidden=!0;return}const t=wM(r2());if(t==="scientist"&&innerHeight<=500&&!document.body.classList.contains("bar-collapsed")){$n="done",Y("coach-mark").hidden=!0;return}if(!t){$n="done",Y("coach-mark").hidden=!0;return}$n=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?m0(matchMedia("(any-pointer:coarse)").matches):"Drag to scrub";Y("coach-mark").dataset.coach=t,Y("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,Y("coach-mark").hidden=!1,a2(),clearTimeout(ml),ml=setTimeout(()=>{Nr?.(),Nr=null,$n="done",Y("coach-mark").hidden=!0},8e3)}function Rd(t){$n===t&&(clearTimeout(ml),Nr?.(),Nr=null,$n="",Y("coach-mark").hidden=!0,_l())}function o2(){const t=Y("coach-mark");if(t.hidden||$n!=="scientist")return;const e=en().find(v=>!Ls(v)),n=e&&Te.agentPositions?.().find(v=>v.id===e.id);if(!n)return;const i=n.position.clone().add(new k(0,1.6,0));i.project(Te.camera);const r=(i.x+1)*innerWidth/2;(1-i.y)*innerHeight/2;const s=t.getBoundingClientRect(),a=innerHeight<=500?72:80,o=v=>!!v&&!v.hidden&&getComputedStyle(v).display!=="none"&&getComputedStyle(v).visibility!=="hidden",l=[document.querySelector("header"),Y("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar"),Y("proximity")].filter(o).map(v=>v.getBoundingClientRect()).filter(v=>v.width>0&&v.height>0);Te.camera.updateMatrixWorld();const c=new Set(en().filter(v=>!Ls(v)).map(v=>v.id));for(const v of Te.agentPositions?.()||[]){if(!c.has(v.id))continue;const M=[-.9,.9].flatMap(b=>[.15,3.1].flatMap(T=>[-.55,.55].map(A=>new k(v.position.x+b,v.position.y+T,v.position.z+A).project(Te.camera)))).filter(b=>b.z>=-1&&b.z<=1);if(M.length){const b=Math.min(...M.map(S=>(S.x+1)*innerWidth/2)),T=Math.max(...M.map(S=>(S.x+1)*innerWidth/2)),A=Math.min(...M.map(S=>(1-S.y)*innerHeight/2)),x=Math.max(...M.map(S=>(1-S.y)*innerHeight/2));T>0&&b<innerWidth&&x>0&&A<innerHeight&&l.push(new DOMRect(b,A,T-b,x-A))}}const u=wt.clamp(r-s.width/2,8,Math.max(8,innerWidth-s.width-8)),f=document.querySelector("header")?.getBoundingClientRect().bottom??a,d=wt.clamp(f+8,a,Math.max(a,innerHeight-s.height-12)),h=[u,8,innerWidth-s.width-8,...l.flatMap(v=>[v.left-s.width-8,v.right+8])].map(v=>wt.clamp(v,8,Math.max(8,innerWidth-s.width-8))),g=[d,a,innerHeight-s.height-12,...l.flatMap(v=>[v.top-s.height-8,v.bottom+8])].map(v=>wt.clamp(v,a,Math.max(a,innerHeight-s.height-12))),_=(v,M)=>l.reduce((b,T)=>b+Math.max(0,Math.min(v+s.width,T.right)-Math.max(v,T.left))*Math.max(0,Math.min(M+s.height,T.bottom)-Math.max(M,T.top)),0),p=h.flatMap(v=>g.map(M=>({left:v,top:M,overlap:_(v,M),distance:Math.hypot(v-u,M-d)}))).sort((v,M)=>v.overlap-M.overlap||v.distance-M.distance),m=p[0];t.style.right="auto",t.style.transform="none",t.style.left=`${m.left}px`,t.style.top=`${m.top}px`,t.style.bottom="auto"}function Jg(){if(!Pu){gl=!0,vl();return}if(!Ps&&(Ps=!0,document.body.classList.remove("prestart"),document.body.dataset.labOpen="true",Y("header-actions").hidden=!1,!(Tn&&te&&(l2(),Tn)))){if(te){if(te.manifest.live)Qn(te.manifest.totalTicks);else{ar="highlights";const t=yd(te);Ed=xg(te,t),vs=0,Qn(t)}it=!0,Dr=Ee}{Te.camera.fov=innerWidth<760?62:48,Te.camera.updateProjectionMatrix();const t=Ga(),e=en().filter(n=>!Ls(n)).flatMap(n=>{const i=t.get(n.id);return i?[new k(i.x,0,i.z)]:[]});e.length?s0(e):(Te.camera.position.set(0,2.7,1.2),Jn.focus(new k(0,1.3,-2))),Is(!0)}if(Zt(),Ad(),Nt.domElement.focus(),!Tn){it=!1,Zt(),YS(Y("replay-intro"),Y("intro-play"),Y("dismiss-replay-intro"),!!te,()=>{it=!0,Zt(),en().length&&_l(),ap()});return}en().length&&_l(),ap()}}function vl(){!gl||!Fg||Pu||(Pu=!0,Y("loading").classList.add("loaded"),setTimeout(()=>{Y("loading").hidden=!0,Jg()},380))}function ap(){if(cs||Te.camera.aspect<.85)return;const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(cs),cs=null,t.forEach(i=>document.removeEventListener(i,e,!0))};t.forEach(i=>document.addEventListener(i,e,!0));const n=()=>{if(cs=null,!Ps||fn()){t.forEach(o=>document.removeEventListener(o,e,!0));return}const i=new Set((Te.agentPositions?.()||[]).map(o=>o.id)),r=en().find(o=>!Ls(o)&&i.has(o.id));if(!r){cs=setTimeout(n,300);return}t.forEach(o=>document.removeEventListener(o,e,!0)),Nd(r.id,!0);let s=!0;const a=()=>{s&&(s=!1,t.forEach(o=>document.removeEventListener(o,a,!0)),Ot===r.id&&Ld())};t.forEach(o=>document.addEventListener(o,a,!0))};cs=setTimeout(n,3e3)}function l2(){if(Rr=_M({world:Te,renderer:Nt,recording:te,seek:Qn,updateWorld:u0}),!Rr){nr("Cinema mode needs a run with a boredom snap followed by a discovery."),document.body.classList.remove("cinema"),Tn=!1;return}it=!1,Cd(),Y("loading").hidden=!0,Te.camera.fov=46,Te.camera.updateProjectionMatrix(),Bg=performance.now(),window.__cinema={ready:!0,duration:Rr.duration,render:t=>Rr.render(t)}}function Cd(){Ma&&(Ma=!1,Te.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",Cd,{capture:!0});window.addEventListener("keydown",Cd,{capture:!0});Y("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&Rd($n)};function c2(){if(!te||!at)return"<p>No measurements yet.</p>";const t=te.manifest.swarm==="ignobel"&&at.metric.name==="replicated_findings";return eC(QR(at.results,te.frames,Ee,!t),at.metric,Ee,Me)}function Qg(t,e=rg(at?.metric)){const n=yR(t.value,t.reward,e,Lr),i=[t.effectSize==null?"":`Effect ${Me(t.effectSize)}`,t.pValue==null?"":`p = ${Me(t.pValue)}`,n?Me(n):""].filter(Boolean);return i.length?i.join("<br>"):Me(t.value??"–")}function Pd(){const t=at;if(!t){Y("console-content").innerHTML="<h2>No evidence yet.</h2>";return}const e=te?Pl(te.manifest,te):void 0,n=rg(t.metric),i='<p class="evidence-key"><span title="Kept candidates are retained when they improve the current best.">Keep</span> = retained as a current best; <span title="Baseline is the unmodified reference used for comparison.">baseline</span> = the unmodified reference.</p>',r=M=>M.map(b=>{const T=b.kind==="baseline"?"Baseline is the unmodified reference for comparison.":String(b.status).toLowerCase()==="keep"?"Kept because this result improved the current best.":"";return`<tr${b.id?` class="inspectable" data-experiment="${Me(b.id)}" tabindex="0"`:""}><td>${b.round}</td><td>${Me(b.agent)}</td><td><span${T?` title="${Me(T)}"`:""}>${Me(b.status)}</span><br>${Me(b.description)}</td><td>${Qg(b,n)}</td></tr>`}).join(""),s=Bs(te,Ee),a=s.length?`<h3>Ig Nobel studies</h3>${Ag(s,xs())}`:"",o=t.results.filter(M=>wn(M.status,M.kind)==="crashed"),l=t.results.filter(M=>wn(M.status,M.kind)==="kept"),c=t.results.filter(M=>wn(M.status,M.kind)!=="crashed"&&wn(M.status,M.kind)!=="kept"),u=`<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th title="Run metric value">${Me(n)}</th></tr></thead><tbody>`,f="</tbody></table></div>",d=t.findings.filter(M=>!/swarm_B|per_agent_B|boredom/i.test(M.message)).slice().reverse(),h=d.filter(M=>M.message.trim().length>180||/^\s*[\[{]/.test(M.message)),g=d.filter(M=>!h.includes(M)),_=M=>M.map(b=>`<div class="finding"><b>${Me(en().find(T=>T.id===b.agent)?.name||b.role)}</b><span>${Me(b.message)}</span></div>`).join("")||"<p>No findings yet.</p>",p=Y("console-content"),m=p.querySelector(".evidence-failures")?.open??!1,v=p.querySelector(".evidence-raw")?.open??!1;Y("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(Ee)}. Kept findings and candidates appear first; failures remain available below.</p>${a}${i}${e?`<p class="proxy-note"><b>About this benchmark:</b> ${Me(e)}</p>`:""}${c2()}${u}${r([...l,...c])}${f}${o.length?`<details class="evidence-failures"${m?" open":""}><summary>Failures (${o.length})</summary>${u}${r(o)}${f}</details>`:""}<h3>${ma()} findings</h3>${_(g)}${h.length?`<details class="evidence-raw"${v?" open":""}><summary>Full recorded findings (${h.length})</summary>${_(h)}</details>`:""}${u2(!1)}`}function u2(t=!0){const e=t?Bs(te,Ee):[],n=pd(te,Ee),i=Qm(n0(),Ee);return`${e.length?`<h3>Ig Nobel studies</h3>${Ag(e,xs())}`:""}${i.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll" role="region" aria-label="Recorded lab dialogue" tabindex="0">${Rg(i,xs())}</div>`:""}${n.length||d2("sources")?`<h3>Research sources</h3>${oC(n,xs())}`:""}`}let dn="now";function Oa(){return{name:t=>$s(t),metric:at?.metric,best:at?.value??null}}function Id(){const t=en().find(b=>b.id===Ll);if(!t){Mt.close();return}const e=te?hR(te.events,Ee).filter(b=>b.agentId===t.id||b.type==="message.sent"&&(b.payload?.to_agent_id===t.id||b.payload?.to_agent_ids?.includes(t.id))):[],n=dn==="idea"?/hypothesis|propos|question|idea/:dn==="result"?/experiment|observ|discover|reward|evaluat/:dn==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=hg,r=e.filter(b=>n.test(b.type)&&i(b.message)).slice(-1),s=dn==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=dn==="result"&&t.lastResult?`<blockquote>${Me(t.lastResult.description)}<br>${Me(t.lastResult.status)} · ${Qg(t.lastResult)}<cite>${ma()} result · available by tick ${Math.floor(Ee)}</cite></blockquote>`:"",o=dn==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",l=t.boredom==null?null:Di(t.boredom),c=te?SM(te.events,t.id,Ee):null,u=Fr(c?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),f=bM(c?.components||t.boredomDetail?.components),d=Qm(n0(),Ee,t.id),h=dn==="result"||dn==="doing"?t.lastResult?.id&&Da(te,t.lastResult.id,Ee)?t.lastResult.id:t.focus?.experiment_id&&Da(te,t.focus.experiment_id,Ee)?t.focus.experiment_id:null:null,g=h?`<button class="inspect-link" data-experiment="${Me(h)}">Inspect experiment →</button>`:"",_=!!te?.manifest.live,p=wd(),m=te?_g(te.events,Ee):0,v=_?p?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(Ee)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(Ee)}${m?` · ${m} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(Ee)}.`,M=b=>b.type==="message.sent"&&b.agentId!==t.id?`Message from ${Me($s(b.agentId,"")||"a colleague")}`:`${_?"Published":"Recorded"} ${Me(fg(b.type).toLowerCase())}`;Y("conversation-tag").textContent=_?p?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",Y("conversation-content").innerHTML=`<div class="conversation-header"><div class="conversation-person">${Gg(t)}<div><h2>${Me(t.name)}</h2><p>${Vg(t,!1)}</p></div></div><div class="conversation-questions">${p0.filter(([b])=>b!=="talk"||d.length).map(([b,T,A])=>`<button data-topic="${b}" aria-label="${A}" aria-pressed="${dn===b}">${T}</button>`).join("")}</div></div><div class="conversation-body" tabindex="0" role="region" aria-label="Scientist research notes">${dn==="now"?`<div class="conversation-doing"><b>Doing</b><span>${Me(xd(t.activity||t.state)||"Not active yet")}</span></div>`:""}<div class="speech-bubble${dn==="talk"||dn==="now"?" history":""}">${dn==="now"?Eg(bd(te,t.id,t.activity||t.state,Ee,Oa()),{...Oa(),esc:Me},at?.metric,!1):dn==="talk"?Rg(d,xs(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${Me(o)}<cite>${ma()} proposal · available by tick ${Math.floor(Ee)}</cite></blockquote>`:r.length?r.map(b=>`<blockquote>${Me(b.message)}<cite>${M(b)} · tick ${b.tick}</cite></blockquote>`).join(""):s?`<blockquote>${Me(s)}<cite>${ma()} excerpt · through tick ${Math.floor(Ee)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${ma().toUpperCase()} BOREDOM</span><strong style="color:${l==null?"inherit":ks(l)}">${l==null?"Not measured":Math.round(l)+"%"}</strong></div>${l==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i style="left:${l}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||f.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${Me(u.label)}</span>`:""}${f.length?`<div class="boredom-components" aria-label="Boredom components">${f.map(b=>`<div><span>${Me(b.label)}</span><i style="--v:${b.value}%"></i><b>${b.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${v}</p></div>`}function e0(t){if(Ot="",Ai=!1,An=!1,pi="",Dt(),wd()||(it=!1),Ll=t,dn="now",Un(),mi(),Zt(),Id(),en().some(e=>e.id===t)){const e=Te.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new k(0,innerWidth<innerHeight?.4:2.1,0));if(Te.camera.lookAt(n),kt||Jn.focus(n),kt){const i=new Hn().setFromQuaternion(Te.camera.quaternion,"YXZ");yn=i.y,si=i.x}}Mt.open||(Mt.show(),Dt()),t0(),Mt.querySelector("button")?.focus()}}function t0(){if(!Mt.open)return;const t=Te.agentPositions?.().find(a=>a.id===Ll);if(!t){Mt.style.visibility="hidden";return}const e=t.position.clone().add(new k(0,2.35,0));if(Te.camera.updateMatrixWorld(),e.clone().applyMatrix4(Te.camera.matrixWorldInverse).z>=0){Mt.style.visibility="hidden";return}Mt.style.visibility="visible",e.project(Te.camera);const i=document.querySelector(".sidebar").getBoundingClientRect(),r=document.querySelector("header").getBoundingClientRect(),s=g0(innerWidth,innerHeight,r.bottom,i,(e.x+1)/2*innerWidth,Mt.getBoundingClientRect().height);Mt.style.width=`${s.width}px`,Mt.style.setProperty("--conversation-width",`${s.width}px`),Mt.style.left=`${s.left}px`,Mt.style.top=`${s.top}px`}Y("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(dn=e,Id())};Y("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&e0(e)};function n0(){return te?.events||[]}function d2(t){const e=te?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function $s(t,e){return t?(at?.agents||te?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||te?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function xs(){const t=te?.manifest.id||"";return{esc:Me,name:$s,judging:te?.manifest.judging,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return rm(n)},experimentLabel:e=>{const n=Da(te,e,Ee);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let xl=null;function i0(){if(!xl)return;const t=Da(te,xl,Ee);Y("inspector-content").innerHTML=t?aC(t,xs(),t.studyId?Bs(te,Ee).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function f2(t){it=!1,Zt(),Un(),mi(),Mt.close();const e=pd(te,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>Ee&&Qn(e),Pd(),Cs.open||(Cs.showModal(),Dt());const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function r0(t){it=!1,Zt(),Un(),xl=t,i0(),ir.open||(ir.showModal(),Dt()),ir.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-orch-tick]");if(n){t.preventDefault(),it=!1;const s=n.dataset.orchAgent,a=Number(n.dataset.orchTick);Qn(a);const o=Te.agentPositions?.().find(l=>l.id===s);if(o){const l=o.position.clone().add(new k(0,2.1,0));Te.camera.lookAt(l),Jn.focus(l)}Kg(s);return}const i=e.closest?.("[data-source]")?.dataset.source;if(i){f2(i);return}const r=e.closest?.("[data-experiment]")?.dataset.experiment;r&&(t.preventDefault(),r0(r))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),r0(e.dataset.experiment))});function yl(){Ot&&(Un(),An=!0,pi="",Dt())}function Ld(){Ot&&(Yi=Ot),Ot="",Ai=!1,An=!1,pi="",Y("proximity").hidden=!0,Dt()}function Ls(t){return[t.type,t.role].filter(Boolean).some(e=>["conductor","critic","host","baseline","environment","world"].includes(String(e).toLowerCase()))}function h2(t,e=!1){const n=t.clone().add(new k(0,2.1,0)),i=e?innerWidth<760?7.2:6.8:innerWidth<760?4.4:5.2,r=e?3.1:innerWidth<760?2.1:2.5,s=t.z>4?-1:1;Te.camera.position.set(t.x,t.y+r,t.z+s*i),Te.camera.position.x=wt.clamp(Te.camera.position.x,-10,10),Te.camera.position.y=wt.clamp(Te.camera.position.y,1.6,4.3),Te.camera.position.z=wt.clamp(Te.camera.position.z,-12,11),Te.camera.lookAt(n),Jn.syncFromCamera()}function Dl(t=1){if(Te.camera.aspect>=.85||!tr||kt||fn())return;const e=Ga();if(!e.has(tr)){const r=en().find(s=>!Ls(s)&&e.has(s.id));if(!r)return;tr=r.id}const n=e.get(tr),i=ZS(new k(n.x,0,n.z),Te.camera.aspect,Te.camera.fov);Te.camera.position.lerp(i.position,t),Jn.focus(i.target)}function s0(t){if(Te.camera.aspect<.85){const m=Ga(),v=en().find(M=>!Ls(M)&&m.has(M.id));if(v){tr=v.id,Dl();return}}const e=Math.min(...t.map(m=>m.x)),n=Math.max(...t.map(m=>m.x)),i=Math.min(...t.map(m=>m.z)),r=Math.max(...t.map(m=>m.z)),s=(e+n)/2,a=(i+r)/2,o=n-e,l=r-i,c=wt.degToRad(Te.camera.fov),u=Math.tan(c/2)*Te.camera.aspect,f=o/Math.max(.1,2*u),d=2.6+l*.26,h=d/Math.max(.1,2*Math.tan(c/2)),g=innerWidth<760?8.4:7,_=Math.max(g,l/2+f+1.1,h+1),p=new k(s,1.35,a);Te.camera.position.set(s,p.y+_*.26,a+_),Te.camera.lookAt(p),Jn.syncFromCamera()}function Nd(t,e=!1){const n=Te.agentPositions?.().find(r=>r.id===t);if(!n)return;const i=n.position.clone().add(new k(0,2.1,0));if(!kt)Te.camera.aspect<.85?(tr=t,Dl()):h2(n.position,e);else if(kt){Te.camera.lookAt(i);const r=new Hn().setFromQuaternion(Te.camera.quaternion,"YXZ");yn=r.y,si=r.x}Kg(t,e)}Y("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){Ld();return}if(n?.hasAttribute("data-bubble-more")){Ot&&e0(Ot);return}if(n?.hasAttribute("data-bubble-expand")){yl();return}An||yl()});Y("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");e&&Nd(e.dataset.agent)});ir.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);Y("close-inspector").onclick=()=>ir.close();ir.addEventListener("close",()=>{xl=null});Y("close-results").onclick=()=>er.close();Y("open-results").onclick=()=>{it=!1,Zt(),Un(),Lu(),er.showModal(),Dt()};Y("open-about").onclick=()=>{const t=Li!=="about-drawer",e=Y("about-drawer"),n=Y("open-about");Un(),Mt.close(),mi(),t&&(it=!1,Zt(),e.innerHTML=IR(Pr,CR(te),Me,te?.manifest||null,te),e.hidden=!1,e.scrollTop=0,e.querySelector(".about-body").scrollTop=0,Li="about-drawer",e.querySelector("[data-close-drawer]").onclick=mi,n.setAttribute("aria-expanded","true"),Dt())};Y("results-content").addEventListener("click",t=>{t.target.closest("[data-open-evidence]")&&(er.close(),Y("open-console").click())});Y("close-conversation").onclick=()=>{Mt.close(),Nt.domElement.focus()};Y("close-console").onclick=()=>Cs.close();Y("close-guide").onclick=()=>Md.close();const a0=Y("qr-dialog");Y("qr-image").src=zR;Y("close-qr").onclick=()=>a0.close();Y("open-qr").onclick=()=>{it=!1,Zt(),Un(),mi(),a0.showModal(),Dt()};Y("open-console").onclick=()=>{it=!1,Zt(),Un(),mi(),Pd(),Cs.showModal(),Dt()};Y("open-guide").onclick=()=>{it=!1,Zt(),Un(),mi(),Md.showModal(),Dt()};Y("play").onclick=()=>{if(te){if(!it){if(Mt.close(),!te.manifest.live&&Ee>=te.manifest.totalTicks){const t=ar==="highlights"?yd(te):0;vs=0,Qn(t)}kt&&Ha(!1)}it=!it,Zt()}};Y("camera-mode").onclick=()=>Ha(!kt);Y("collapse-bar").onclick=()=>{kg=!0,Is(!document.body.classList.contains("bar-collapsed"))};Is(ig());Dt();window.addEventListener("resize",()=>{kg||Is(ig()),Dt()});Y("timeline").oninput=()=>{it=!1,ar="full",Y("replay-mode").value="full",Qn(Number(Y("timeline").value)),Dl(),Dr=Ee,Rd("scrub")};Y("replay-mode").onchange=()=>{ar=Y("replay-mode").value;const t=te&&li&&ar==="highlights"?yd(te):0;Ee=t,vs=0,Ed=te?xg(te,t):[],Qn(t),it=!!te,Zt()};Y("go-live").onclick=()=>{te?.manifest.live&&(Mt.close(),kt&&Ha(!1),it=!0,Qn(te.manifest.totalTicks),Td())};Y("pace").onchange=()=>{Zo=Number(Y("pace").value)};window.addEventListener("keydown",t=>JS(t,fn()||!te||kt,()=>{Y("play").click()}));function p2(t){Hg=yg(t),qo=nC(t,Te.bounds,Te.colliders)}function Ga(){const t=Ba(qo,Ee);if(!t)return new Map;if(Ee<=0)return t.positions;const e=qo[qo.indexOf(t)+1];if(!e)return t.positions;const n=(Ee-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function o0(t,e=!1){const n=++Jh;e||(it=!1,Cu=!1,er.close(),Y("connection").textContent="LOADING RUN");try{const i=await vR(dl,t,Ug.find(o=>o.id===t)?.contentVersion||"2",te);if(n!==Jh)return;const r=Ee,s=wd();te=i,$g(),VC(i),i.frames.sort((o,l)=>o.tick-l.tick),i.events.sort((o,l)=>o.tick-l.tick),p2(i),XC(),Y("timeline").max=String(i.manifest.totalTicks),Y("timeline").disabled=!1,Y("play").disabled=!1,Y("replay-title").textContent=ka(Cl(i.manifest)),Y("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),Y("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),Y("timeline-markers").innerHTML=i.events.filter(o=>/experiment.finished|discovery|study.completed|award/.test(o.type)).map(o=>`<i${/discovery|award/.test(o.type)?' class="best"':""} style="left:${o.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),Y("run-picker").value=t,e||Ha(!1);const a=e?KR(r,i.manifest,s):YR(i.manifest);e||(it=Ps,Dr=a),Qn(a),e&&s?Td():e||(Dr=Ee),Zt(),li&&!e?(gl=!0,vl()):e||Jg()}catch(i){Y("connection").textContent="ARCHIVE UNAVAILABLE",nr(i.message),e||(gl=!0,vl())}}async function l0(){try{const t=cR(await dl("/recordings"));if(Ug=t,Y("run-picker").innerHTML=wR(t,Me,li)||"<option>No artificial scientist swarm recordings available</option>",te)Y("run-picker").value=te.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await o0(lR(t,e))}else t.length||(Y("connection").textContent="NO SWARM RECORDINGS",Y("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){Y("connection").textContent="ARCHIVE UNAVAILABLE",Y("replay-title").textContent="Archive unavailable",nr(t.message)}}Y("refresh-runs").onclick=()=>l0();async function c0(){}Y("launch-openai").onclick=async()=>{if(Y("launch-openai").dataset.running==="true"){try{await dl("/openai-runs/stop",{method:"POST"}),nr("Stopping: current work will finish; no new work will start.")}catch(t){nr(t.message)}return}if(confirm("Start a live Sol + Luna Ig Nobel run? It calls the OpenAI API and may spend up to the server cost cap.")){try{const t=await dl("/openai-runs",{method:"POST",body:JSON.stringify({minutes:30})});nr(`Started ${t.name}; it appears in RUNS as workers start.`)}catch(t){nr(t.message)}c0()}};c0();Y("run-picker").onchange=()=>o0(Y("run-picker").value);Y("refresh-runs").hidden=!0,document.body.classList.add("static-site");function u0(t){m2();const e=Ga(),n=en(),i=rC(te?.events||[],Ee,n,ka,100);Te.update(t,{progress:at?.progress||0,boredom:0,running:it||Tn,replay:!0,finale:Rs(te,Ee),reducedMotion:Iu,agents:n.map(r=>({...r,boredom:r.boredom==null?null:Di(r.boredom),regime:r.boredomSpectrum?.regime,state:e.get(r.id)?.atLab?"working":r.state,stationId:e.get(r.id)?.atTable?"culture":Ru({...r,activity:"experimenting"}),discussionBrief:!Tn&&e.get(r.id)?.atTable?i.get(r.id)?.brief:void 0,discussionPeers:i.get(r.id)?.peers,ideaBrief:Tn?void 0:jS(ka(r.lastIdea||r.lastQuestion||r.lastObservation||"")),position:Rs(te,Ee)?void 0:e.get(r.id)}))})}function m2(){if(!Er){Er=new jn;for(const[e,n,i]of[[.49,.65,"#172c35"],[.52,.61,"#f3d98b"]]){const r=new xt(new Yu(e,n,48),new Zi({color:i,side:Ln,depthTest:!1}));r.renderOrder=12,Er.add(r)}Te.scene.add(Er)}const t=Mt.open?Te.agentPositions?.().find(e=>e.id===Ll):null;Er.visible=!!t,t&&(Er.position.set(t.position.x,t.position.y+1.65,t.position.z),Er.lookAt(Te.camera.position))}function op(t,e){const i=Te.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||Te.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),bn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>bn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(An){An=!1,pi="",Dt();return}if(Ai||Ot){Ld(),Un();return}Mt.close(),mi(),Un()}if(!(fn()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Ot){t.preventDefault(),yl();return}t.code==="Enter"&&Ot&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),yl()),["KeyW","KeyA","KeyS","KeyD",...kt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&(tr="",t.preventDefault()),bn.add(t.code)}});window.addEventListener("keyup",t=>bn.delete(t.code));window.addEventListener("blur",()=>{bn.clear(),pa=!1,Wi=null,it=!1,Zt()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);if(n=s,Tn){Rr?GC||Rr.render((s-Bg)/1e3%Rr.duration):Nt.render(Te.scene,Te.camera);return}if(it&&te){if(ar==="highlights"){vs+=a*1e3*4/Zo;const u=75e3*4/Zo;Ee=tC(Ed,vs,u),vs>=u&&(Ee=te.manifest.totalTicks,it=!1)}else Ee=fR(Ee,a,Zo,te.manifest.totalTicks,te.manifest.tickDurationMs);ar==="full"&&!dR(te.manifest,Ee)&&(it=!1),Math.floor(Ee)!==i?(Qn(Ee),i=Math.floor(Ee),Td()):Zt()}const o=Te.camera;if(!kt&&!fn()&&!Mt.open&&(Dl(Iu?1:Math.min(1,a*5)),Jn.update(a,bn)),kt&&!fn()){({yaw:yn,pitch:si}=tm(yn,si,a,bn));const u=Number(bn.has("KeyW"))-Number(bn.has("KeyS")),f=Number(bn.has("KeyD"))-Number(bn.has("KeyA"));if(u||f){const d=(bn.has("ShiftLeft")||bn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(u,f),h=(-Math.sin(yn)*u+Math.cos(yn)*f)*d,g=(-Math.cos(yn)*u-Math.sin(yn)*f)*d;op(o.position.x+h,o.position.z)||(o.position.x+=h),op(o.position.x,o.position.z+g)||(o.position.z+=g)}o.rotation.set(si,yn,0,"YXZ")}if(u0(Ee*(te?.manifest.tickDurationMs||700)/1e3),Ps&&!$n&&en().length&&!fn()&&_l(),Y("coach-mark").hidden=fn()||!$n||$n==="done",o2(),Ma){const u=(s-Qh)/(Iu?300:li?1600:2200);Te.grow?.(Math.min(1,u)),u>=1&&(Ma=!1,document.body.classList.remove("world-growing"))}const l=Mi;if(kt&&!fn()){o.getWorldDirection(r),r.y=0,r.normalize();const u=(Te.agentPositions?.()||[]).map(f=>{const d=f.position.clone().sub(o.position);d.y=0;const h=d.length();return{id:f.id,distance:h,facing:h?d.normalize().dot(r):1}});Mi=dC(u,Mi)}else Mi="";Yi&&Mi!==Yi&&(Yi="");const c=Ai?Ot:Mi===Yi?"":Mi;c!==Ot&&(Ot=c,An=!1,pi=""),l!==Mi&&!Ai&&Mi&&(Yi=""),t2(),Nt.render(Te.scene,o),t0()};Te=TM(),Qh=performance.now(),Ma=!0,document.body.classList.add("world-growing"),Te.grow?.(0),Nt=new XS({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:Tn}),Nt.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),Nt.setSize(innerWidth,innerHeight),Nt.toneMapping=Uu,Nt.toneMappingExposure=Te.exposure??1,Nt.outputColorSpace=Wt,Y("world").appendChild(Nt.domElement),Nt.domElement.tabIndex=0,Nt.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),Te.camera.rotation.order="YXZ",Jn=new qS(Te.camera),Ha(!1),Nt.domElement.onclick=()=>{if(kt&&!fn()&&!Mt.open&&!Ai)try{Nt.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},Nt.domElement.onpointerdown=s=>{fn()||(pa=!0,Co={x:s.clientX,y:s.clientY},Wi={x:s.clientX,y:s.clientY,canvas:s.target===Nt.domElement,pointerType:s.pointerType},kt||Nt.domElement.setPointerCapture(s.pointerId))},Nt.domElement.onpointermove=s=>{if(!pa||document.pointerLockElement||fn())return;const a=s.clientX-Co.x,o=s.clientY-Co.y;kt?{yaw:yn,pitch:si}=uu(yn,si,a,o):(tr="",Jn.dragBy(a,o)),Co={x:s.clientX,y:s.clientY}},Nt.domElement.onpointercancel=()=>{pa=!1,Wi=null},window.addEventListener("pointerup",s=>{if(Wi?.canvas&&Math.hypot(s.clientX-Wi.x,s.clientY-Wi.y)<10&&!fn()){const a=Te.camera;a.updateMatrixWorld();let o=null;for(const l of Te.agentPositions?.()||[]){if(!en().some(_=>_.id===l.id))continue;const c=l.position.clone().add(new k(0,2.35,0));if(c.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;c.project(a);const f=(c.x+1)*innerWidth/2,d=(1-c.y)*innerHeight/2,h=Math.hypot(s.clientX-f,s.clientY-d),g=Wi.pointerType==="touch"?84:64;h<g&&(!o||h<o.distance)&&(o={id:l.id,distance:h})}o?Nd(o.id):(Ot="",Ai=!1,An=!1,pi="",Dt())}Wi=null,pa=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&kt&&!fn()&&({yaw:yn,pitch:si}=uu(yn,si,s.movementX,s.movementY))});const e=()=>{if(Te.camera.aspect=innerWidth/innerHeight,li&&!Tn&&(Te.camera.fov=innerWidth<760?62:48),Te.camera.updateProjectionMatrix(),Nt.setSize(innerWidth,innerHeight),li&&Ps&&!Tn&&!kt){const s=[...Ga().values()].map(a=>new k(a.x,0,a.z));s.length&&s0(s)}};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new k;Ad(),t(),li&&setTimeout(()=>{Fg=!0,vl()},1500),l0()}catch(t){console.error(t),Y("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
