(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Rl="187",wm=0,Iu=1,Tm=2,Ha=1,Am=2,As=3,dr=0,cn=1,Tn=2,$r=0,Ns=1,Lu=2,Nu=3,Du=4,Rm=5,kr=100,Cm=101,Pm=102,Im=103,Lm=104,Nm=200,Dm=201,Um=202,Om=203,kf=204,zf=205,Fm=206,km=207,zm=208,Bm=209,$m=210,Hm=211,Gm=212,Vm=213,Wm=214,bc=0,Ec=1,wc=2,Gs=3,Tc=4,Ac=5,Rc=6,Cc=7,Bf=0,Xm=1,Zm=2,hi=0,$f=1,Hf=2,Gf=3,Cl=4,Vf=5,Wf=6,Xf=7,Zf=300,Zr=301,Vs=302,ko=303,zo=304,ro=1e3,ui=1001,Pc=1002,Xt=1003,qm=1004,la=1005,mn=1006,Bo=1007,Ii=1008,Sn=1009,qf=1010,Yf=1011,Ws=1012,Pl=1013,Zn=1014,Dn=1015,qn=1016,Il=1017,Ll=1018,qr=1020,Kf=35902,jf=35899,Jf=1021,Qf=1022,Vn=1023,Ui=1026,Li=1027,Nl=1028,Dl=1029,fr=1030,Ul=1031,Ol=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,Ic=35840,Lc=35841,Nc=35842,Dc=35843,Uc=36196,Oc=37492,Fc=37496,kc=37488,zc=37489,so=37490,Bc=37491,$c=37808,Hc=37809,Gc=37810,Vc=37811,Wc=37812,Xc=37813,Zc=37814,qc=37815,Yc=37816,Kc=37817,jc=37818,Jc=37819,Qc=37820,el=37821,tl=36492,nl=36494,il=36495,rl=36283,sl=36284,ao=36285,al=36286,Ym=3200,ol=0,Km=1,Ci="",Ot="srgb",oo="srgb-linear",co="linear",dt="srgb",$o=7680,jm=519,Jm=512,Qm=513,eg=514,eh=515,tg=516,ng=517,th=518,nh=519,ih=35044,Uu="300 es",Un=2e3,Xs=2001;function ig(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function lo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function rg(){const t=lo("canvas");return t.style.display="block",t}const Ou={};function uo(...t){const e="THREE."+t.shift();console.log(e,...t)}function rh(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=rh(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=rh(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Hr(...t){const e=t.join(" ");e in Ou||(Ou[e]=!0,ze(...t))}function sg(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const ag={[bc]:bc,[wc]:Rc,[Tc]:Tc,[Gs]:Ac,[Ec]:Ec,[Rc]:wc,[Cc]:Cc,[Ac]:Gs};class mr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fu=1234567;const Ds=Math.PI/180,Zs=180/Math.PI;function zi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function Fl(t,e){return(t%e+e)%e}function og(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function cg(t,e,n){return t!==e?(n-t)/(e-t):0}function Us(t,e,n){return(1-n)*t+n*e}function lg(t,e,n,i){return Us(t,e,1-Math.exp(-n*i))}function ug(t,e=1){return e-Math.abs(Fl(t,e*2)-e)}function dg(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fg(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function hg(t,e){return t+Math.floor(Math.random()*(e-t+1))}function pg(t,e){return t+Math.random()*(e-t)}function mg(t){return t*(.5-Math.random())}function gg(t){t!==void 0&&(Fu=t);let e=Fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function _g(t){return t*Ds}function vg(t){return t*Zs}function xg(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Sg(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yg(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*d,c*f,o*l);break;case"YZY":t.set(c*f,o*u,c*d,o*l);break;case"ZXZ":t.set(c*d,c*f,o*u,o*l);break;case"XZX":t.set(o*u,c*g,c*h,o*l);break;case"YXY":t.set(c*h,o*u,c*g,o*l);break;case"ZYZ":t.set(c*g,c*h,o*u,o*l);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ao(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function kl(t,e){if(e.constructor===Float32Array)return t;const n=Ao(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function zl(t,e){if(e.constructor===Float32Array)return t;const n=Ao(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Mn={DEG2RAD:Ds,RAD2DEG:Zs,generateUUID:zi,clamp:je,euclideanModulo:Fl,mapLinear:og,inverseLerp:cg,lerp:Us,damp:lg,pingpong:ug,smoothstep:dg,smootherstep:fg,randInt:hg,randFloat:pg,randFloatSpread:mg,seededRandom:gg,degToRad:_g,radToDeg:vg,isPowerOfTwo:xg,ceilPowerOfTwo:Sg,floorPowerOfTwo:sh,setQuaternionFromProperEuler:yg,normalize:zl,denormalize:kl},wu=class wu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wu.prototype.isVector2=!0;let We=wu;class ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],g=s[a+2],x=s[a+3];if(d!==x||c!==f||l!==h||u!==g){let m=c*f+l*h+u*g+d*x;m<0&&(f=-f,h=-h,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const S=Math.acos(m),w=Math.sin(S);p=Math.sin(p*S)/w,o=Math.sin(o*S)/w,c=c*p+f*o,l=l*p+h*o,u=u*p+g*o,d=d*p+x*o}else{c=c*p+f*o,l=l*p+h*o,u=u*p+g*o,d=d*p+x*o;const S=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=S,l*=S,u*=S,d*=S}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*d+c*h-l*f,e[n+1]=c*g+u*f+l*d-o*h,e[n+2]=l*g+u*h+o*f-c*d,e[n+3]=u*g-o*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Tu=class Tu{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ku.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ho.copy(this).projectOnVector(e),this.sub(Ho)}reflect(e){return this.sub(Ho.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tu.prototype.isVector3=!0;let O=Tu;const Ho=new O,ku=new ns,Au=class Au{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],S=r[1],w=r[4],y=r[7],A=r[2],T=r[5],_=r[8];return s[0]=a*x+o*S+c*A,s[3]=a*m+o*w+c*T,s[6]=a*p+o*y+c*_,s[1]=l*x+u*S+d*A,s[4]=l*m+u*w+d*T,s[7]=l*p+u*y+d*_,s[2]=f*x+h*S+g*A,s[5]=f*m+h*w+g*T,s[8]=f*p+h*y+g*_,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*s,h=l*s-a*c,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*c)*x,e[5]=(r*s-o*n)*x,e[6]=h*x,e[7]=(i*c-l*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return Hr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Go.makeScale(e,n)),this}rotate(e){return Hr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Go.makeRotation(-e)),this}translate(e,n){return Hr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Go.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Au.prototype.isMatrix3=!0;let He=Au;const Go=new He,zu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Mg(){const t={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Gr(r.r),r.g=Gr(r.g),r.b=Gr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?co:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[oo]:{primaries:e,whitePoint:i,transfer:co,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:zu,fromXYZ:Bu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),t}const tt=Mg();function pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Gr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let yr;class bg{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{yr===void 0&&(yr=lo("canvas")),yr.width=e.width,yr.height=e.height;const r=yr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=yr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=lo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pi(n[i]/255)*255):n[i]=pi(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Eg=0;class Bl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Vo(r[a].image)):s.push(Vo(r[a]))}else s=Vo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Vo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?bg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let wg=0;const Wo=new O;class Qt extends mr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=ui,r=ui,s=mn,a=Ii,o=Vn,c=Sn,l=Qt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=zi(),this.name="",this.source=new Bl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Wo).x}get height(){return this.source.getSize(Wo).y}get depth(){return this.source.getSize(Wo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ro:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case Pc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ro:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case Pc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Zf;Qt.DEFAULT_ANISOTROPY=1;const Ru=class Ru{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(l+1)/2,y=(h+1)/2,A=(p+1)/2,T=(u+f)/4,_=(d+x)/4,M=(g+m)/4;return w>y&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=_/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=M/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=_/s,r=M/s),this.set(i,r,s,n),this}let S=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(d-x)/S,this.z=(f-u)/S,this.w=Math.acos((l+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ru.prototype.isVector4=!0;let Et=Ru;class Tg extends mr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Qt({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Bl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends Tg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ah extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ag extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const To=class To{constructor(e,n,i,r,s,a,o,c,l,u,d,f,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,d,f,h,g,x,m)}set(e,n,i,r,s,a,o,c,l,u,d,f,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=f,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new To().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Mr.setFromMatrixColumn(e,0).length(),s=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,x=o*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=h+g*l,n[5]=f-x*l,n[9]=-o*c,n[2]=x-f*l,n[6]=g+h*l,n[10]=a*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,x=l*d;n[0]=f+x*o,n[4]=g*o-h,n[8]=a*l,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=x+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,x=l*d;n[0]=f-x*o,n[4]=-a*d,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,x=o*d;n[0]=c*u,n[4]=g*l-h,n[8]=f*l+x,n[1]=c*d,n[5]=x*l+f,n[9]=h*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,h=a*l,g=o*c,x=o*l;n[0]=c*u,n[4]=x-f*d,n[8]=g*d+h,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=h*d+g,n[10]=f-x*d}else if(e.order==="XZY"){const f=a*c,h=a*l,g=o*c,x=o*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+x,n[5]=a*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=o*u,n[10]=x*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rg,e,Cg)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),Si.crossVectors(i,_n),Si.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),Si.crossVectors(i,_n)),Si.normalize(),ua.crossVectors(_n,Si),r[0]=Si.x,r[4]=ua.x,r[8]=_n.x,r[1]=Si.y,r[5]=ua.y,r[9]=_n.y,r[2]=Si.z,r[6]=ua.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],S=i[3],w=i[7],y=i[11],A=i[15],T=r[0],_=r[4],M=r[8],z=r[12],N=r[1],F=r[5],B=r[9],Y=r[13],D=r[2],X=r[6],ie=r[10],V=r[14],pe=r[3],j=r[7],se=r[11],de=r[15];return s[0]=a*T+o*N+c*D+l*pe,s[4]=a*_+o*F+c*X+l*j,s[8]=a*M+o*B+c*ie+l*se,s[12]=a*z+o*Y+c*V+l*de,s[1]=u*T+d*N+f*D+h*pe,s[5]=u*_+d*F+f*X+h*j,s[9]=u*M+d*B+f*ie+h*se,s[13]=u*z+d*Y+f*V+h*de,s[2]=g*T+x*N+m*D+p*pe,s[6]=g*_+x*F+m*X+p*j,s[10]=g*M+x*B+m*ie+p*se,s[14]=g*z+x*Y+m*V+p*de,s[3]=S*T+w*N+y*D+A*pe,s[7]=S*_+w*F+y*X+A*j,s[11]=S*M+w*B+y*ie+A*se,s[15]=S*z+w*Y+y*V+A*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],S=c*h-l*f,w=o*h-l*d,y=o*f-c*d,A=a*h-l*u,T=a*f-c*u,_=a*d-o*u;return n*(x*S-m*w+p*y)-i*(g*S-m*A+p*T)+r*(g*w-x*A+p*_)-s*(g*y-x*T+m*_)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return n*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],S=n*o-i*a,w=n*c-r*a,y=n*l-s*a,A=i*c-r*o,T=i*l-s*o,_=r*l-s*c,M=u*x-d*g,z=u*m-f*g,N=u*p-h*g,F=d*m-f*x,B=d*p-h*x,Y=f*p-h*m,D=S*Y-w*B+y*F+A*N-T*z+_*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/D;return e[0]=(o*Y-c*B+l*F)*X,e[1]=(r*B-i*Y-s*F)*X,e[2]=(x*_-m*T+p*A)*X,e[3]=(f*T-d*_-h*A)*X,e[4]=(c*N-a*Y-l*z)*X,e[5]=(n*Y-r*N+s*z)*X,e[6]=(m*y-g*_-p*w)*X,e[7]=(u*_-f*y+h*w)*X,e[8]=(a*B-o*N+l*M)*X,e[9]=(i*N-n*B-s*M)*X,e[10]=(g*T-x*y+p*S)*X,e[11]=(d*y-u*T-h*S)*X,e[12]=(o*z-a*F-c*M)*X,e[13]=(n*F-i*z+r*M)*X,e[14]=(x*w-g*A-m*S)*X,e[15]=(u*A-d*w+f*S)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,d=o+o,f=s*l,h=s*u,g=s*d,x=a*u,m=a*d,p=o*d,S=c*l,w=c*u,y=c*d,A=i.x,T=i.y,_=i.z;return r[0]=(1-(x+p))*A,r[1]=(h+y)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(h-y)*T,r[5]=(1-(f+p))*T,r[6]=(m+S)*T,r[7]=0,r[8]=(g+w)*_,r[9]=(m-S)*_,r[10]=(1-(f+x))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Mr.set(r[0],r[1],r[2]).length();const o=Mr.set(r[4],r[5],r[6]).length(),c=Mr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Pn.copy(this);const l=1/a,u=1/o,d=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=d,Pn.elements[9]*=d,Pn.elements[10]*=d,n.setFromRotationMatrix(Pn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=Un,c=!1){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Un)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Xs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Un,c=!1){const l=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Un)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Xs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};To.prototype.isMatrix4=!0;let pt=To;const Mr=new O,Pn=new pt,Rg=new O(0,0,0),Cg=new O(1,1,1),Si=new O,ua=new O,_n=new O,$u=new pt,Hu=new ns;class On{constructor(e=0,n=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-je(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $u.makeRotationFromQuaternion(e),this.setFromRotationMatrix($u,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Pg=0;const Gu=new O,br=new ns,ti=new pt,da=new O,fs=new O,Ig=new O,Lg=new ns,Vu=new O(1,0,0),Wu=new O(0,1,0),Xu=new O(0,0,1),Zu={type:"added"},Ng={type:"removed"},Er={type:"childadded",child:null},Xo={type:"childremoved",child:null};class Ht extends mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new O,n=new On,i=new ns,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,n){return br.setFromAxisAngle(e,n),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Vu,e)}rotateY(e){return this.rotateOnAxis(Wu,e)}rotateZ(e){return this.rotateOnAxis(Xu,e)}translateOnAxis(e,n){return Gu.copy(e).applyQuaternion(this.quaternion),this.position.add(Gu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vu,e)}translateY(e){return this.translateOnAxis(Wu,e)}translateZ(e){return this.translateOnAxis(Xu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?da.copy(e):da.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(fs,da,this.up):ti.lookAt(da,fs,this.up),this.quaternion.setFromRotationMatrix(ti),r&&(ti.extractRotation(r.matrixWorld),br.setFromRotationMatrix(ti),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Zu),Er.child=e,this.dispatchEvent(Er),Er.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ng),Xo.child=e,this.dispatchEvent(Xo),Xo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Zu),Er.child=e,this.dispatchEvent(Er),Er.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Ig),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Lg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dg={type:"move"};class Zo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ch={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},fa={h:0,s:0,l:0};function qo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=Fl(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=qo(a,s,e+1/3),this.g=qo(a,s,e),this.b=qo(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=ch[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.workingToColorSpace(jt.copy(this),e),Math.round(je(jt.r*255,0,255))*65536+Math.round(je(jt.g*255,0,255))*256+Math.round(je(jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ot){tt.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(yi),this.setHSL(yi.h+e,yi.s+n,yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(yi),e.getHSL(fa);const i=Us(yi.h,fa.h,n),r=Us(yi.s,fa.s,n),s=Us(yi.l,fa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ze;Ze.NAMES=ch;class $l{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=n,this.far=i}clone(){return new $l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ug extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const In=new O,ni=new O,Yo=new O,ii=new O,wr=new O,Tr=new O,qu=new O,Ko=new O,jo=new O,Jo=new O,Qo=new Et,ec=new Et,tc=new Et;class An{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ni.subVectors(i,n),Yo.subVectors(e,n);const a=In.dot(In),o=In.dot(ni),c=In.dot(Yo),l=ni.dot(ni),u=ni.dot(Yo),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ii.x),c.addScaledVector(a,ii.y),c.addScaledVector(o,ii.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qo.setScalar(0),ec.setScalar(0),tc.setScalar(0),Qo.fromBufferAttribute(e,n),ec.fromBufferAttribute(e,i),tc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qo,s.x),a.addScaledVector(ec,s.y),a.addScaledVector(tc,s.z),a}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ni.subVectors(e,n),In.cross(ni).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),In.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;wr.subVectors(r,i),Tr.subVectors(s,i),Ko.subVectors(e,i);const c=wr.dot(Ko),l=Tr.dot(Ko);if(c<=0&&l<=0)return n.copy(i);jo.subVectors(e,r);const u=wr.dot(jo),d=Tr.dot(jo);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),n.copy(i).addScaledVector(wr,a);Jo.subVectors(e,s);const h=wr.dot(Jo),g=Tr.dot(Jo);if(g>=0&&h<=g)return n.copy(s);const x=h*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(Tr,o);const m=u*g-h*d;if(m<=0&&d-u>=0&&h-g>=0)return qu.subVectors(s,r),o=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(qu,o);const p=1/(m+x+f);return a=x*p,o=f*p,n.copy(i).addScaledVector(wr,a).addScaledVector(Tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class gr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(hs),pa.subVectors(this.max,hs),Ar.subVectors(e.a,hs),Rr.subVectors(e.b,hs),Cr.subVectors(e.c,hs),Mi.subVectors(Rr,Ar),bi.subVectors(Cr,Rr),Yi.subVectors(Ar,Cr);let n=[0,-Mi.z,Mi.y,0,-bi.z,bi.y,0,-Yi.z,Yi.y,Mi.z,0,-Mi.x,bi.z,0,-bi.x,Yi.z,0,-Yi.x,-Mi.y,Mi.x,0,-bi.y,bi.x,0,-Yi.y,Yi.x,0];return!nc(n,Ar,Rr,Cr,pa)||(n=[1,0,0,0,1,0,0,0,1],!nc(n,Ar,Rr,Cr,pa))?!1:(ma.crossVectors(Mi,bi),n=[ma.x,ma.y,ma.z],nc(n,Ar,Rr,Cr,pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ri=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,ha=new gr,Ar=new O,Rr=new O,Cr=new O,Mi=new O,bi=new O,Yi=new O,hs=new O,pa=new O,ma=new O,Ki=new O;function nc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ki.fromArray(t,s);const o=r.x*Math.abs(Ki.x)+r.y*Math.abs(Ki.y)+r.z*Math.abs(Ki.z),c=e.dot(Ki),l=n.dot(Ki),u=i.dot(Ki);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pt=new O,ga=new We;let Og=0;class mi extends mr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Og++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=ih,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=e!==void 0?Ao(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ga.fromBufferAttribute(this,n),ga.applyMatrix3(e),this.setXY(n,ga.x,ga.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):kl(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):zl(e,this.array)}}class lh extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class uh extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Fg=new gr,ps=new O,ic=new O;class na{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Fg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ps.subVectors(e,this.center);const n=ps.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ps,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ps.copy(e.center).add(ic)),this.expandByPoint(ps.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let kg=0;const En=new pt,rc=new Ht,Pr=new O,vn=new gr,ms=new gr,$t=new O;class Fn extends mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kg++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?uh:lh)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Pr).negate(),this.translate(Pr.x,Pr.y,Pr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ms.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(vn.min,ms.min),vn.expandByPoint($t),$t.addVectors(vn.max,ms.max),vn.expandByPoint($t)):(vn.expandByPoint(ms.min),vn.expandByPoint(ms.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$t.fromBufferAttribute(o,l),c&&(Pr.fromBufferAttribute(e,l),$t.add(Pr)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let z=0;z<i.count;z++)o[z]=new O,c[z]=new O;const u=new O,d=new O,f=new O,h=new We,g=new We,x=new We,m=new O,p=new O;function S(z,N,F){l[z]=l[N]=l[F]=1,u.fromBufferAttribute(i,z),d.fromBufferAttribute(i,N),f.fromBufferAttribute(i,F),h.fromBufferAttribute(s,z),g.fromBufferAttribute(s,N),x.fromBufferAttribute(s,F),d.sub(u),f.sub(u),g.sub(h),x.sub(h);const B=1/(g.x*x.y-x.x*g.y);isFinite(B)&&(m.copy(d).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(B),p.copy(f).multiplyScalar(g.x).addScaledVector(d,-x.x).multiplyScalar(B),o[z].add(m),o[N].add(m),o[F].add(m),c[z].add(p),c[N].add(p),c[F].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,N=w.length;z<N;++z){const F=w[z],B=F.start,Y=F.count;for(let D=B,X=B+Y;D<X;D+=3)S(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new O,A=new O,T=new O,_=new O;function M(z){T.fromBufferAttribute(r,z),_.copy(T);const N=o[z];y.copy(N),y.sub(T.multiplyScalar(T.dot(N))).normalize(),A.crossVectors(_,N);const B=A.dot(c[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,B)}for(let z=0,N=i.count;z<N;++z)l[z]&&M(z);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,d=new O;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?h=c[x]*o.data.stride+o.offset:h=c[x]*u;for(let p=0;p<u;p++)f[g++]=l[h++]}return new mi(f,u,d)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zg{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=ih,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Yu(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Yu(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Yu(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=zi()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const nn=new O;class fo{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Ao(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){uo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new mi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){uo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):kl(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):zl(e,this.data.array)}}const sc=new O,Bg=new O,$g=new He;class Ri{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=sc.subVectors(i,n).cross(Bg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(sc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||$g.getNormalMatrix(e),r=this.coplanarPoint(sc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hg=0;class is extends mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=Ns,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=kf,this.blendDst=zf,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$o,this.stencilZFail=$o,this.stencilZPass=$o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Za extends is{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ir;const gs=new O,Lr=new O,Nr=new O,Dr=new We,_s=new We,dh=new pt,_a=new O,vs=new O,va=new O,Ku=new We,ac=new We,ju=new We;class oc extends Ht{constructor(e=new Za){if(super(),this.isSprite=!0,this.type="Sprite",Ir===void 0){Ir=new Fn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new zg(n,5);Ir.setIndex([0,1,2,0,2,3]),Ir.setAttribute("position",new fo(i,3,0,!1)),Ir.setAttribute("uv",new fo(i,2,3,!1))}this.geometry=Ir,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lr.setFromMatrixScale(this.matrixWorld),dh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Nr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lr.multiplyScalar(-Nr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;xa(_a.set(-.5,-.5,0),Nr,a,Lr,r,s),xa(vs.set(.5,-.5,0),Nr,a,Lr,r,s),xa(va.set(.5,.5,0),Nr,a,Lr,r,s),Ku.set(0,0),ac.set(1,0),ju.set(1,1);let o=e.ray.intersectTriangle(_a,vs,va,!1,gs);if(o===null&&(xa(vs.set(-.5,.5,0),Nr,a,Lr,r,s),ac.set(0,1),o=e.ray.intersectTriangle(_a,va,vs,!1,gs),o===null))return;const c=e.ray.origin.distanceTo(gs);c<e.near||c>e.far||n.push({distance:c,point:gs.clone(),uv:An.getInterpolation(gs,_a,vs,va,Ku,ac,ju,new We),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function xa(t,e,n,i,r,s){Dr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(_s.x=s*Dr.x-r*Dr.y,_s.y=r*Dr.x+s*Dr.y):_s.copy(Dr),t.copy(e),t.x+=_s.x,t.y+=_s.y,t.applyMatrix4(dh)}const si=new O,cc=new O,Sa=new O,ya=new O;class Gg{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){cc.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),ya.copy(this.origin).sub(cc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Sa),o=ya.dot(this.direction),c=-ya.dot(Sa),l=ya.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*c-o,f=a*o-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const x=1/u;d*=x,f*=x,h=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(cc).addScaledVector(Sa,f),h}intersectSphere(e,n){if(e.radius<0)return null;si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=n.x-a.x,x=n.y-a.y,m=n.z-a.z,p=i.x-a.x,S=i.y-a.y,w=i.z-a.z,y=Math.abs(c),A=Math.abs(l),T=Math.abs(u);let _,M,z,N,F,B,Y,D,X,ie,V,pe;if(y>=A&&y>=T?(z=c,B=d,X=g,pe=p,c>=0?(_=l,M=u,N=f,F=h,Y=x,D=m,ie=S,V=w):(_=u,M=l,N=h,F=f,Y=m,D=x,ie=w,V=S)):A>=T?(z=l,B=f,X=x,pe=S,l>=0?(_=u,M=c,N=h,F=d,Y=m,D=g,ie=w,V=p):(_=c,M=u,N=d,F=h,Y=g,D=m,ie=p,V=w)):(z=u,B=h,X=m,pe=w,u>=0?(_=c,M=l,N=d,F=f,Y=g,D=x,ie=p,V=S):(_=l,M=c,N=f,F=d,Y=x,D=g,ie=S,V=p)),z===0)return null;const j=_/z,se=M/z,de=1/z,Re=N-j*B,Be=F-se*B,re=Y-j*X,ve=D-se*X,Te=ie-j*pe,Oe=V-se*pe,be=Te*ve-Oe*re,$e=Re*Oe-Be*Te,vt=re*Be-ve*Re;if(r){if(be<0||$e<0||vt<0)return null}else if((be<0||$e<0||vt<0)&&(be>0||$e>0||vt>0))return null;const ke=be+$e+vt;if(ke===0)return null;const ot=de*(be*B+$e*X+vt*pe);return(ke>0?ot<0:ot>0)?null:this.at(ot/ke,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tr extends is{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ju=new pt,ji=new Gg,Ma=new na,Qu=new O,ba=new O,Ea=new O,wa=new O,lc=new O,Ta=new O,ed=new O,Aa=new O;class _t extends Ht{constructor(e=new Fn,n=new tr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ta.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(lc.fromBufferAttribute(d,e),a?Ta.addScaledVector(lc,u):Ta.addScaledVector(lc.sub(n),u))}n.add(Ta)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),ji.copy(e.ray).recast(e.near),!(Ma.containsPoint(ji.origin)===!1&&(ji.intersectSphere(Ma,Qu)===null||ji.origin.distanceToSquared(Qu)>(e.far-e.near)**2))&&(Ju.copy(s).invert(),ji.copy(e.ray).applyMatrix4(Ju),!(i.boundingBox!==null&&ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ji)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,h.start),w=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,A=w;y<A;y+=3){const T=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);r=Ra(this,p,e,i,l,u,d,T,_,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const S=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);r=Ra(this,a,e,i,l,u,d,S,w,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const m=f[g],p=a[m.materialIndex],S=Math.max(m.start,h.start),w=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let y=S,A=w;y<A;y+=3){const T=y,_=y+1,M=y+2;r=Ra(this,p,e,i,l,u,d,T,_,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(c.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const S=m,w=m+1,y=m+2;r=Ra(this,a,e,i,l,u,d,S,w,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Vg(t,e,n,i,r,s,a,o){let c;if(e.side===cn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===dr,o),c===null)return null;Aa.copy(o),Aa.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(Aa);return l<n.near||l>n.far?null:{distance:l,point:Aa.clone(),object:t}}function Ra(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,ba),t.getVertexPosition(c,Ea),t.getVertexPosition(l,wa);const u=Vg(t,e,n,i,ba,Ea,wa,ed);if(u){const d=new O;An.getBarycoord(ed,ba,Ea,wa,d),r&&(u.uv=An.getInterpolatedAttribute(r,o,c,l,d,new We)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,c,l,d,new We)),a&&(u.normal=An.getInterpolatedAttribute(a,o,c,l,d,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new O,materialIndex:0};An.getNormal(ba,Ea,wa,f.normal),u.face=f,u.barycoord=d}return u}class fh extends Qt{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Xt,u=Xt,d,f){super(null,a,o,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class td extends mi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ur=new pt,nd=new pt,Ca=[],id=new gr,Wg=new pt,xs=new _t,Ss=new na;class Xg extends _t{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new td(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Wg)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ur),id.copy(e.boundingBox).applyMatrix4(Ur),this.boundingBox.union(id)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new na),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Ur),Ss.copy(e.boundingSphere).applyMatrix4(Ur),this.boundingSphere.union(Ss)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(xs.geometry=this.geometry,xs.material=this.material,xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ss.copy(this.boundingSphere),Ss.applyMatrix4(i),e.ray.intersectsSphere(Ss)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ur),nd.multiplyMatrices(i,Ur),xs.matrixWorld=nd,xs.raycast(e,Ca);for(let a=0,o=Ca.length;a<o;a++){const c=Ca[a];c.instanceId=s,c.object=this,n.push(c)}Ca.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new td(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new fh(new Float32Array(r*this.count),r,this.count,Nl,Dn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ji=new na,Zg=new We(.5,.5),Pa=new O;class qs{constructor(e=new Ri,n=new Ri,i=new Ri,r=new Ri,s=new Ri,a=new Ri){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Un,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],S=s[12],w=s[13],y=s[14],A=s[15];if(r[0].setComponents(l-a,h-u,p-g,A-S).normalize(),r[1].setComponents(l+a,h+u,p+g,A+S).normalize(),r[2].setComponents(l+o,h+d,p+x,A+w).normalize(),r[3].setComponents(l-o,h-d,p-x,A-w).normalize(),i)r[4].setComponents(c,f,m,y).normalize(),r[5].setComponents(l-c,h-f,p-m,A-y).normalize();else if(r[4].setComponents(l-c,h-f,p-m,A-y).normalize(),n===Un)r[5].setComponents(l+c,h+f,p+m,A+y).normalize();else if(n===Xs)r[5].setComponents(c,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const n=Zg.distanceTo(e.center);return Ji.radius=.7071067811865476+n,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const rd=new pt;class Hl{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];rd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new qs),i[r].setFromProjectionMatrix(rd,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new qs),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Hl().copy(this)}}class hh extends Qt{constructor(e=[],n=Zr,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qi extends Qt{constructor(e,n,i,r,s,a,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yr extends Qt{constructor(e,n,i=Zn,r,s,a,o=Xt,c=Xt,l,u=Ui,d=1){if(u!==Ui&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class ph extends Yr{constructor(e,n=Zn,i=Zr,r,s,a=Xt,o=Xt,c,l=Ui){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mh extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class _r extends Fn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2));function g(x,m,p,S,w,y,A,T,_,M,z){const N=y/_,F=A/M,B=y/2,Y=A/2,D=T/2,X=_+1,ie=M+1;let V=0,pe=0;const j=new O;for(let se=0;se<ie;se++){const de=se*F-Y;for(let Re=0;Re<X;Re++){const Be=Re*N-B;j[x]=Be*S,j[m]=de*w,j[p]=D,l.push(j.x,j.y,j.z),j[x]=0,j[m]=0,j[p]=T>0?1:-1,u.push(j.x,j.y,j.z),d.push(Re/_),d.push(1-se/M),V+=1}}for(let se=0;se<M;se++)for(let de=0;de<_;de++){const Re=f+de+X*se,Be=f+de+X*(se+1),re=f+(de+1)+X*(se+1),ve=f+(de+1)+X*se;c.push(Re,Be,ve),c.push(Be,re,ve),pe+=6}o.addGroup(h,pe,z),h+=pe,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ys extends Fn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const x=[],m=i/2;let p=0;S(),a===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Gt(d,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(h,2));function S(){const y=new O,A=new O;let T=0;const _=(n-e)/i;for(let M=0;M<=s;M++){const z=[],N=M/s,F=N*(n-e)+e;for(let B=0;B<=r;B++){const Y=B/r,D=Y*c+o,X=Math.sin(D),ie=Math.cos(D);A.x=F*X,A.y=-N*i+m,A.z=F*ie,d.push(A.x,A.y,A.z),y.set(X,_,ie).normalize(),f.push(y.x,y.y,y.z),h.push(Y,1-N),z.push(g++)}x.push(z)}for(let M=0;M<r;M++)for(let z=0;z<s;z++){const N=x[z][M],F=x[z+1][M],B=x[z+1][M+1],Y=x[z][M+1];(e>0||z!==0)&&(u.push(N,F,Y),T+=3),(n>0||z!==s-1)&&(u.push(F,B,Y),T+=3)}l.addGroup(p,T,0),p+=T}function w(y){const A=g,T=new We,_=new O;let M=0;const z=y===!0?e:n,N=y===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,m*N,0),f.push(0,N,0),h.push(.5,.5),g++;const F=g;for(let B=0;B<=r;B++){const D=B/r*c+o,X=Math.cos(D),ie=Math.sin(D);_.x=z*ie,_.y=m*N,_.z=z*X,d.push(_.x,_.y,_.z),f.push(0,N,0),T.x=X*.5+.5,T.y=ie*.5*N+.5,h.push(T.x,T.y),g++}for(let B=0;B<r;B++){const Y=A+B,D=F+B;y===!0?u.push(D,D+1,Y):u.push(D+1,D,Y),M+=3}l.addGroup(p,M,y===!0?1:2),p+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ys(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Gl extends Ys{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Gl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sr extends Fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=n/c,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const S=p*f-a;for(let w=0;w<l;w++){const y=w*d-s;g.push(y,-S,0),x.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<o;S++){const w=S+l*p,y=S+l*(p+1),A=S+1+l*(p+1),T=S+1+l*p;h.push(w,y,T),h.push(y,A,T)}this.setIndex(h),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Vl extends Fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new O,f=new O,h=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const S=[],w=p/i,y=a+w*o,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let _=0;p===0&&a===0?_=.5/n:p===i&&c===Math.PI&&(_=-.5/n);for(let M=0;M<=n;M++){const z=M/n,N=r+z*s;d.x=-T*Math.cos(N),d.y=A,d.z=T*Math.sin(N),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(z+_,1-w),S.push(l++)}u.push(S)}for(let p=0;p<i;p++)for(let S=0;S<n;S++){const w=u[p][S+1],y=u[p][S],A=u[p+1][S],T=u[p+1][S+1];(p!==0||a>0)&&h.push(w,y,T),(p!==i-1||c<Math.PI)&&h.push(y,A,T)}this.setIndex(h),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Vl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Os extends Fn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],d=[],f=new O,h=new O,g=new O;for(let x=0;x<=i;x++){const m=a+x/i*o;for(let p=0;p<=r;p++){const S=p/r*s;h.x=(e+n*Math.cos(m))*Math.cos(S),h.y=(e+n*Math.cos(m))*Math.sin(S),h.z=n*Math.sin(m),l.push(h.x,h.y,h.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(p/r),d.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=r;m++){const p=(r+1)*x+m-1,S=(r+1)*(x-1)+m-1,w=(r+1)*(x-1)+m,y=(r+1)*x+m;c.push(p,S,y),c.push(S,w,y)}this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Os(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Kr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(sd(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(sd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=Kr(t[n]);for(const r in i)e[r]=i[r]}return e}function sd(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function qg(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function gh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Yg={clone:Kr,merge:an};var Kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hr extends is{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kg,this.fragmentShader=jg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Kr(e.uniforms),this.uniformsGroups=qg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new We().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Jg extends hr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class qa extends is{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ol,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qg extends qa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Hr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Hr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class e0 extends is{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class t0 extends is{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class _h extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class n0 extends _h{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const uc=new pt,ad=new O,od=new O;class i0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;ad.setFromMatrixPosition(e.matrixWorld),n.position.copy(ad),od.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(od),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(uc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Xs||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),n.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ia=new O,La=new ns,zn=new O;class vh extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ia,La,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,zn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ia,La,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ia,La,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ei=new O,cd=new We,ld=new We;class Nn extends vh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Zs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ds*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zs*2*Math.atan(Math.tan(Ds*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z),Ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ei.x,Ei.y).multiplyScalar(-e/Ei.z)}getViewSize(e,n){return this.getViewBounds(e,cd,ld),n.subVectors(ld,cd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ds*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class xh extends vh{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class r0 extends i0{constructor(){super(new xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ud extends _h{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new r0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Or=-90,Fr=1;class cl extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Or,Fr,e,n);r.layers=this.layers,this.add(r);const s=new Nn(Or,Fr,e,n);s.layers=this.layers,this.add(s);const a=new Nn(Or,Fr,e,n);a.layers=this.layers,this.add(a);const o=new Nn(Or,Fr,e,n);o.layers=this.layers,this.add(o);const c=new Nn(Or,Fr,e,n);c.layers=this.layers,this.add(c);const l=new Nn(Or,Fr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Xs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class s0 extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function dd(t,e,n,i){const r=a0(i);switch(n){case Jf:return t*e;case Nl:return t*e/r.components*r.byteLength;case Dl:return t*e/r.components*r.byteLength;case fr:return t*e*2/r.components*r.byteLength;case Ul:return t*e*2/r.components*r.byteLength;case Qf:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case Ol:return t*e*4/r.components*r.byteLength;case Ga:case Va:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Wa:case Xa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lc:case Dc:return Math.max(t,16)*Math.max(e,8)/4;case Ic:case Nc:return Math.max(t,8)*Math.max(e,8)/2;case Uc:case Oc:case kc:case zc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Fc:case so:case Bc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case qc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Kc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case jc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Jc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case el:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case tl:case nl:case il:return Math.ceil(t/4)*Math.ceil(e/4)*16;case rl:case sl:return Math.ceil(t/4)*Math.ceil(e/4)*8;case ao:case al:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function a0(t){switch(t){case Sn:case qf:return{byteLength:1,components:1};case Ws:case Yf:case qn:return{byteLength:2,components:1};case Il:case Ll:return{byteLength:2,components:4};case Zn:case Pl:case Dn:return{byteLength:4,components:1};case Kf:case jf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Rl}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Rl);function Sh(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function o0(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=t.SHORT;else if(l instanceof Uint32Array)h=t.UNSIGNED_INT;else if(l instanceof Int32Array)h=t.INT;else if(l instanceof Int8Array)h=t.BYTE;else if(l instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(t.bindBuffer(l,o),d.length===0)t.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],x=d[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const x=d[h];t.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var c0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,l0=`#ifdef USE_ALPHAHASH
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
#endif`,u0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,d0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,p0=`#ifdef USE_AOMAP
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
#endif`,m0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,g0=`#ifdef USE_BATCHING
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
#endif`,_0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,v0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,x0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,S0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,y0=`#ifdef USE_IRIDESCENCE
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
#endif`,M0=`#ifdef USE_BUMPMAP
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
#endif`,b0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,E0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,w0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,T0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,A0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,R0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,C0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,P0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,I0=`#define PI 3.141592653589793
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
} // validated`,L0=`vec3 transformedNormal = objectNormal;
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
#endif`,N0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,D0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,U0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,O0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,F0="gl_FragColor = linearToOutputTexel( gl_FragColor );",k0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,z0=`#ifdef USE_ENVMAP
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
#endif`,B0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,$0=`#ifdef USE_ENVMAP
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
#endif`,H0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,G0=`#ifdef USE_ENVMAP
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
#endif`,V0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,W0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,X0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Z0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,q0=`#ifdef USE_GRADIENTMAP
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
}`,Y0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,K0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,j0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,J0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Q0=`#ifdef USE_ENVMAP
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
#endif`,e_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,t_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,n_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,i_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r_=`PhysicalMaterial material;
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
#endif`,s_=`uniform sampler2D dfgLUT;
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
}`,a_=`
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
#endif`,o_=`#if defined( RE_IndirectDiffuse )
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
#endif`,c_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,l_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,u_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,d_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,f_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,h_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,p_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,m_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,g_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,__=`#if defined( USE_POINTS_UV )
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
#endif`,v_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,y_=`#if defined( USE_MORPHCOLORS )
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
#endif`,M_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,b_=`#ifdef USE_MORPHTARGETS
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
#endif`,E_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,w_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,T_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,A_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,C_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,P_=`#ifdef USE_NORMALMAP
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
#endif`,I_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,N_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,U_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,O_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,F_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,k_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,z_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,B_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,$_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,H_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,G_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,V_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,W_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,X_=`float getShadowMask() {
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
}`,Z_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,q_=`#ifdef USE_SKINNING
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
#endif`,Y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K_=`#ifdef USE_SKINNING
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
#endif`,j_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,J_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Q_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#ifdef USE_TRANSMISSION
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,av=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cv=`uniform sampler2D t2D;
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
}`,lv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform float backgroundBlurriness;
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
}`,dv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hv=`#include <common>
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
}`,pv=`#if DEPTH_PACKING == 3200
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
}`,mv=`#define DISTANCE
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
}`,gv=`#define DISTANCE
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
}`,_v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xv=`uniform float scale;
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
}`,Sv=`uniform vec3 diffuse;
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
}`,yv=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,bv=`#define LAMBERT
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
}`,Ev=`#define LAMBERT
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
}`,wv=`#define MATCAP
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
}`,Tv=`#define MATCAP
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
}`,Av=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define PHONG
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
}`,Iv=`#define STANDARD
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
}`,Lv=`#define STANDARD
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
}`,Nv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Ov=`uniform vec3 diffuse;
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
}`,Fv=`#include <common>
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
}`,kv=`uniform vec3 color;
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
}`,zv=`uniform float rotation;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:c0,alphahash_pars_fragment:l0,alphamap_fragment:u0,alphamap_pars_fragment:d0,alphatest_fragment:f0,alphatest_pars_fragment:h0,aomap_fragment:p0,aomap_pars_fragment:m0,batching_pars_vertex:g0,batching_vertex:_0,begin_vertex:v0,beginnormal_vertex:x0,bsdfs:S0,iridescence_fragment:y0,bumpmap_pars_fragment:M0,clipping_planes_fragment:b0,clipping_planes_pars_fragment:E0,clipping_planes_pars_vertex:w0,clipping_planes_vertex:T0,color_fragment:A0,color_pars_fragment:R0,color_pars_vertex:C0,color_vertex:P0,common:I0,defaultnormal_vertex:L0,displacementmap_pars_vertex:N0,displacementmap_vertex:D0,emissivemap_fragment:U0,emissivemap_pars_fragment:O0,colorspace_fragment:F0,colorspace_pars_fragment:k0,envmap_fragment:z0,envmap_common_pars_fragment:B0,envmap_pars_fragment:$0,envmap_pars_vertex:H0,envmap_physical_pars_fragment:Q0,envmap_vertex:G0,fog_vertex:V0,fog_pars_vertex:W0,fog_fragment:X0,fog_pars_fragment:Z0,gradientmap_pars_fragment:q0,lightmap_pars_fragment:Y0,lights_lambert_fragment:K0,lights_lambert_pars_fragment:j0,lights_pars_begin:J0,lights_toon_fragment:e_,lights_toon_pars_fragment:t_,lights_phong_fragment:n_,lights_phong_pars_fragment:i_,lights_physical_fragment:r_,lights_physical_pars_fragment:s_,lights_fragment_begin:a_,lights_fragment_maps:o_,lights_fragment_end:c_,lightprobes_pars_fragment:l_,logdepthbuf_fragment:u_,logdepthbuf_pars_fragment:d_,logdepthbuf_pars_vertex:f_,logdepthbuf_vertex:h_,map_fragment:p_,map_pars_fragment:m_,map_particle_fragment:g_,map_particle_pars_fragment:__,metalnessmap_fragment:v_,metalnessmap_pars_fragment:x_,morphinstance_vertex:S_,morphcolor_vertex:y_,morphnormal_vertex:M_,morphtarget_pars_vertex:b_,morphtarget_vertex:E_,normal_fragment_begin:w_,normal_fragment_maps:T_,normal_pars_fragment:A_,normal_pars_vertex:R_,normal_vertex:C_,normalmap_pars_fragment:P_,clearcoat_normal_fragment_begin:I_,clearcoat_normal_fragment_maps:L_,clearcoat_pars_fragment:N_,iridescence_pars_fragment:D_,opaque_fragment:U_,packing:O_,premultiplied_alpha_fragment:F_,project_vertex:k_,dithering_fragment:z_,dithering_pars_fragment:B_,roughnessmap_fragment:$_,roughnessmap_pars_fragment:H_,shadowmap_pars_fragment:G_,shadowmap_pars_vertex:V_,shadowmap_vertex:W_,shadowmask_pars_fragment:X_,skinbase_vertex:Z_,skinning_pars_vertex:q_,skinning_vertex:Y_,skinnormal_vertex:K_,specularmap_fragment:j_,specularmap_pars_fragment:J_,tonemapping_fragment:Q_,tonemapping_pars_fragment:ev,transmission_fragment:tv,transmission_pars_fragment:nv,uv_pars_fragment:iv,uv_pars_vertex:rv,uv_vertex:sv,worldpos_vertex:av,background_vert:ov,background_frag:cv,backgroundCube_vert:lv,backgroundCube_frag:uv,cube_vert:dv,cube_frag:fv,depth_vert:hv,depth_frag:pv,distance_vert:mv,distance_frag:gv,equirect_vert:_v,equirect_frag:vv,linedashed_vert:xv,linedashed_frag:Sv,meshbasic_vert:yv,meshbasic_frag:Mv,meshlambert_vert:bv,meshlambert_frag:Ev,meshmatcap_vert:wv,meshmatcap_frag:Tv,meshnormal_vert:Av,meshnormal_frag:Rv,meshphong_vert:Cv,meshphong_frag:Pv,meshphysical_vert:Iv,meshphysical_frag:Lv,meshtoon_vert:Nv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Ov,shadow_vert:Fv,shadow_frag:kv,sprite_vert:zv,sprite_frag:Bv},Ee={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Gn={basic:{uniforms:an([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:an([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:an([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:an([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:an([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:an([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:an([Ee.points,Ee.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:an([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:an([Ee.common,Ee.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:an([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:an([Ee.sprite,Ee.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:an([Ee.common,Ee.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:an([Ee.lights,Ee.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Na={r:0,b:0,g:0},$v=new pt,yh=new He;yh.set(-1,0,0,0,1,0,0,0,1);function Hv(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,c,l,u=null,d=0,f=null;function h(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const y=S.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(S){let w=!1;const y=h(S);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(S,w){const y=h(w);y&&y.isCubeTexture?(l===void 0&&(l=new _t(new _r(1,1,1),new hr({name:"BackgroundCubeMaterial",uniforms:Kr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4($v.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(yh),l.material.toneMapped=tt.getTransfer(y.colorSpace)!==dt,(u!==y||d!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new sr(2,2),new hr({name:"BackgroundMaterial",uniforms:Kr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,f=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function m(S,w){S.getRGB(Na,gh(t)),n.buffers.color.setClear(Na.r,Na.g,Na.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Gv(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(F,B,Y,D,X){let ie=!1;const V=d(F,D,Y,B);s!==V&&(s=V,l(s.object)),ie=h(F,D,Y,X),ie&&g(F,D,Y,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,y(F,B,Y,D),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function l(F){return t.bindVertexArray(F)}function u(F){return t.deleteVertexArray(F)}function d(F,B,Y,D){const X=D.wireframe===!0;let ie=i[B.id];ie===void 0&&(ie={},i[B.id]=ie);const V=F.isInstancedMesh===!0?F.id:0;let pe=ie[V];pe===void 0&&(pe={},ie[V]=pe);let j=pe[Y.id];j===void 0&&(j={},pe[Y.id]=j);let se=j[X];return se===void 0&&(se=f(c()),j[X]=se),se}function f(F){const B=[],Y=[],D=[];for(let X=0;X<n;X++)B[X]=0,Y[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:D,object:F,attributes:{},index:null}}function h(F,B,Y,D){const X=s.attributes,ie=B.attributes;let V=0;const pe=Y.getAttributes();for(const j in pe)if(pe[j].location>=0){const de=X[j];let Re=ie[j];if(Re===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(Re=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(Re=F.instanceColor)),de===void 0||de.attribute!==Re||Re&&de.data!==Re.data)return!0;V++}return s.attributesNum!==V||s.index!==D}function g(F,B,Y,D){const X={},ie=B.attributes;let V=0;const pe=Y.getAttributes();for(const j in pe)if(pe[j].location>=0){let de=ie[j];de===void 0&&(j==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),j==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));const Re={};Re.attribute=de,de&&de.data&&(Re.data=de.data),X[j]=Re,V++}s.attributes=X,s.attributesNum=V,s.index=D}function x(){const F=s.newAttributes;for(let B=0,Y=F.length;B<Y;B++)F[B]=0}function m(F){p(F,0)}function p(F,B){const Y=s.newAttributes,D=s.enabledAttributes,X=s.attributeDivisors;Y[F]=1,D[F]===0&&(t.enableVertexAttribArray(F),D[F]=1),X[F]!==B&&(t.vertexAttribDivisor(F,B),X[F]=B)}function S(){const F=s.newAttributes,B=s.enabledAttributes;for(let Y=0,D=B.length;Y<D;Y++)B[Y]!==F[Y]&&(t.disableVertexAttribArray(Y),B[Y]=0)}function w(F,B,Y,D,X,ie,V){V===!0?t.vertexAttribIPointer(F,B,Y,X,ie):t.vertexAttribPointer(F,B,Y,D,X,ie)}function y(F,B,Y,D){x();const X=D.attributes,ie=Y.getAttributes(),V=B.defaultAttributeValues;for(const pe in ie){const j=ie[pe];if(j.location>=0){let se=X[pe];if(se===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),se!==void 0){const de=se.normalized,Re=se.itemSize,Be=e.get(se);if(Be===void 0)continue;const re=Be.buffer,ve=Be.type,Te=Be.bytesPerElement,Oe=ve===t.INT||ve===t.UNSIGNED_INT||se.gpuType===Pl;if(se.isInterleavedBufferAttribute){const be=se.data,$e=be.isInterleavedBuffer===!0?be.stride:be.itemSize,vt=se.offset;if(be.isInstancedInterleavedBuffer||be.isInstancedBufferAttribute){for(let ke=0;ke<j.locationSize;ke++)p(j.location+ke,be.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ke=0;ke<j.locationSize;ke++)m(j.location+ke);t.bindBuffer(t.ARRAY_BUFFER,re);for(let ke=0;ke<j.locationSize;ke++)w(j.location+ke,Re/j.locationSize,ve,de,$e*Te,(vt+Re/j.locationSize*ke)*Te,Oe)}else{if(se.isInstancedBufferAttribute){for(let be=0;be<j.locationSize;be++)p(j.location+be,se.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let be=0;be<j.locationSize;be++)m(j.location+be);t.bindBuffer(t.ARRAY_BUFFER,re);for(let be=0;be<j.locationSize;be++)w(j.location+be,Re/j.locationSize,ve,de,Re*Te,Re/j.locationSize*be*Te,Oe)}}else if(V!==void 0){const de=V[pe];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(j.location,de);break;case 3:t.vertexAttrib3fv(j.location,de);break;case 4:t.vertexAttrib4fv(j.location,de);break;default:t.vertexAttrib1fv(j.location,de)}}}}S()}function A(){z();for(const F in i){const B=i[F];for(const Y in B){const D=B[Y];for(const X in D){const ie=D[X];for(const V in ie)u(ie[V].object),delete ie[V];delete D[X]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;const B=i[F.id];for(const Y in B){const D=B[Y];for(const X in D){const ie=D[X];for(const V in ie)u(ie[V].object),delete ie[V];delete D[X]}}delete i[F.id]}function _(F){for(const B in i){const Y=i[B];for(const D in Y){const X=Y[D];if(X[F.id]===void 0)continue;const ie=X[F.id];for(const V in ie)u(ie[V].object),delete ie[V];delete X[F.id]}}}function M(F){for(const B in i){const Y=i[B],D=F.isInstancedMesh===!0?F.id:0,X=Y[D];if(X!==void 0){for(const ie in X){const V=X[ie];for(const pe in V)u(V[pe].object),delete V[pe];delete X[ie]}delete Y[D],Object.keys(Y).length===0&&delete i[B]}}}function z(){N(),a=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:m,disableUnusedAttributes:S}}function Vv(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(t.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Wv(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==Vn&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const M=_===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Sn&&_!==Dn&&!M&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(ze("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:T}}function Xv(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ri,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):l();else{const S=s?0:i,w=S*4;let y=p.clippingState||null;c.value=y,y=u(g,f,w,h);for(let A=0;A!==w;++A)y[A]=n[A];p.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=c.value,g!==!0||m===null){const p=h+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=h;w!==x;++w,y+=4)a.copy(d[w]).applyMatrix4(S,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}class Wl extends Xn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new hh(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new _r(5,5,5),s=new hr({name:"CubemapFromEquirect",uniforms:Kr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:$r});s.uniforms.tEquirect.value=n;const a=new _t(r,s),o=n.minFilter;return n.minFilter===Ii&&(n.minFilter=mn),new cl(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const fd=256,Zv=3,qv=20,Mh=256,bh=16,Yv=3,Kv=new O,jv=new Ze;class ho{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cl(1,10,null),this._boxMesh=new _t(new _r(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Kv}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,f=c.autoClearColor,h=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(jv));const m=new cl(i,r,u);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=h,c.autoClearStencil=g,e.background=x,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,n)),this._applyPMREM(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=md(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(fd,sh(e))}_fromTexture(e,n){e.mapping===Zr||e.mapping===Vs?this._setSize(e.image.length===0?fd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=hd(e,!1,!1),i=Math.log2(e)-Zv;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=hd(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Zr||e.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=md()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=pd()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Jv(),this._integrationMaterial=Qv());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/bh);for(let a=0;a<=i;a++){const o=ho.lodToRoughness(a,i);if(a>i-Yv)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(n)+.5*Math.log2(6/(Mh*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=ex());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function hd(t,e,n){return new Wl(t,{minFilter:Ii,generateMipmaps:e,type:qn,colorSpace:oo,depthBuffer:n})}function ia(t,e,n){return new hr({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:n,side:cn,blending:$r,depthTest:!1,depthWrite:!1})}function Jv(){return ia("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mh}u

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
	`)}function Qv(){return ia("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:bh}},`

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
	`)}function ex(){return ia("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${qv}
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
	`)}function pd(){return ia("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function md(){return ia("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tx(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ko||h===zo)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const x=new Wl(g.height);return x.fromEquirectangularTexture(t,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,g=h===ko||h===zo,x=h===Zr||h===Vs;if(g||x){let m=n.get(f);const p=m!==void 0?m.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==p)return i===null&&(i=new ho(t)),m=g?i.fromEquirectangular(f,m):i.fromCubemap(f,m),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),m.texture;if(m!==void 0)return m.texture;{const S=f.image;return g&&S&&S.height>0||x&&S&&c(S)?(i===null&&(i=new ho(t)),m=g?i.fromEquirectangular(f):i.fromCubemap(f),m.texture.pmremVersion=f.pmremVersion,n.set(f,m),f.addEventListener("dispose",u),m.texture):null}}}return f}function o(f,h){return h===ko?f.mapping=Zr:h===zo&&(f.mapping=Vs),f}function c(f){let h=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function nx(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Hr("WebGLRenderer: "+i+" extension not supported."),r}}}function ix(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function l(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",o),r[x.id]=new WeakRef(x),a.register(x,x.id,x),n.memory.geometries++),x}function u(g){const x=g.attributes;for(const m in x)e.update(x[m],t.ARRAY_BUFFER)}function d(g){const x=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const S=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?uh:lh,y=new w(Math.ceil(S/3)*6,1),A=y.array;if(x!==null){const _=x.array;p=x.version;for(let M=0,z=0;M<S;M+=3){const N=_[M+0],F=_[M+1],B=_[M+2];A[z++]=N,A[z++]=F,A[z++]=F,A[z++]=B,A[z++]=B,A[z++]=N}}else{p=m.version;for(let _=0,M=0;_<S;_+=3){const z=_+0,N=_+1,F=_+2;A[M++]=z,A[M++]=N,A[M++]=N,A[M++]=F,A[M++]=F,A[M++]=z}}y.version=p;const T=s.get(g);T&&e.remove(T),s.set(g,y)}function f(g){const x=s.get(g);if(x){const m=g.index;m!==null&&x.version<m.version&&d(g)}else d(g);return s.get(g)}function h(){for(const g in r){const x=r[g].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:f,dispose:h}}function rx(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function l(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,d*a,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let x=0;for(let m=0;m<h;m++)x+=f[m];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function sx(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function ax(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let N=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),m===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const _=new Float32Array(A*T*4*d),M=new ah(_,A,T,d);M.type=Dn,M.needsUpdate=!0;const z=y*4;for(let F=0;F<d;F++){const B=p[F],Y=S[F],D=w[F],X=A*T*4*F;for(let ie=0;ie<B.count;ie++){const V=ie*z;g===!0&&(r.fromBufferAttribute(B,ie),_[X+V+0]=r.x,_[X+V+1]=r.y,_[X+V+2]=r.z,_[X+V+3]=0),x===!0&&(r.fromBufferAttribute(Y,ie),_[X+V+4]=r.x,_[X+V+5]=r.y,_[X+V+6]=r.z,_[X+V+7]=0),m===!0&&(r.fromBufferAttribute(D,ie),_[X+V+8]=r.x,_[X+V+9]=r.y,_[X+V+10]=r.z,_[X+V+11]=D.itemSize===4?r.w:1)}}f={count:d,texture:M,size:new We(A,T)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function ox(t,e,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const cx={[$f]:"LINEAR_TONE_MAPPING",[Hf]:"REINHARD_TONE_MAPPING",[Gf]:"CINEON_TONE_MAPPING",[Cl]:"ACES_FILMIC_TONE_MAPPING",[Wf]:"AGX_TONE_MAPPING",[Xf]:"NEUTRAL_TONE_MAPPING",[Vf]:"CUSTOM_TONE_MAPPING"};function lx(t,e,n,i,r,s){const a=new Xn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Fn;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const d=new Jg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _t(u,d),h=new xh(-1,1,1,-1,0,1);let g=null,x=null,m=!1,p,S=null,w=[],y=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),c!==null&&c.setSize(A,T);for(let _=0;_<w.length;_++){const M=w[_];M.setSize&&M.setSize(A,T)}},this.setEffects=function(A){w=A,y=w.length>0&&w[0].isRenderPass===!0;const T=a.width,_=a.height;w.length>0&&o===null&&(o=new Xn(T,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new Xn(T,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&w.some(z=>z.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Yr(T,_),s===!0&&(l.format=Li,l.type=qr)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let z=0;z<w.length;z++){const N=w[z];N.setSize&&N.setSize(T,_),M&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(A,T){if(m||A.toneMapping===hi&&w.length===0)return!1;if(S=T,T!==null){const _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=hi,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=p,m=!0;let _=a,M=o;for(let z=0;z<w.length;z++){const N=w[z];N.enabled!==!1&&(N.render(A,M,_,T),N.needsSwap!==!1&&(_=M,M=M===o?c:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,d.defines={},tt.getTransfer(g)===dt&&(d.defines.SRGB_TRANSFER="");const z=cx[x];z&&(d.defines[z]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(S),A.render(f,h),S=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}const Eh=new Qt,wh=new Yr(1,1),Th=new ph(1),Ah=new ah,Rh=new Ag,Ch=new hh,gd=[],_d=[],vd=new Float32Array(16),xd=new Float32Array(9),Sd=new Float32Array(4);function rs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gd[r];if(s===void 0&&(s=new Float32Array(r),gd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Ro(t,e){let n=_d[e];n===void 0&&(n=new Int32Array(e),_d[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function ux(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function dx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function fx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function hx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function px(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Sd.set(i),t.uniformMatrix2fv(this.addr,!1,Sd),kt(n,i)}}function mx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;xd.set(i),t.uniformMatrix3fv(this.addr,!1,xd),kt(n,i)}}function gx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;vd.set(i),t.uniformMatrix4fv(this.addr,!1,vd),kt(n,i)}}function _x(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function vx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function xx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function Sx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function yx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Mx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function bx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function Ex(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Co(t){return t.version===0&&(t.compareFunction=nh,t.needsUpdate=!0),t}function wx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Co(wh):s=Eh,n.setTexture2D(e||s,r)}function Tx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Rh,r)}function Ax(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Co(Th):s=Ch,n.setTextureCube(e||s,r)}function Rx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Ah,r)}function Cx(t){switch(t){case 5126:return ux;case 35664:return dx;case 35665:return fx;case 35666:return hx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return _x;case 35667:case 35671:return vx;case 35668:case 35672:return xx;case 35669:case 35673:return Sx;case 5125:return yx;case 36294:return Mx;case 36295:return bx;case 36296:return Ex;case 35678:case 36198:case 36298:case 36306:case 35682:return wx;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ax;case 36289:case 36303:case 36311:case 36292:return Rx}}function Px(t,e){t.uniform1fv(this.addr,e)}function Ix(t,e){const n=rs(e,this.size,2);t.uniform2fv(this.addr,n)}function Lx(t,e){const n=rs(e,this.size,3);t.uniform3fv(this.addr,n)}function Nx(t,e){const n=rs(e,this.size,4);t.uniform4fv(this.addr,n)}function Dx(t,e){const n=rs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Ux(t,e){const n=rs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ox(t,e){const n=rs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Fx(t,e){t.uniform1iv(this.addr,e)}function kx(t,e){t.uniform2iv(this.addr,e)}function zx(t,e){t.uniform3iv(this.addr,e)}function Bx(t,e){t.uniform4iv(this.addr,e)}function $x(t,e){t.uniform1uiv(this.addr,e)}function Hx(t,e){t.uniform2uiv(this.addr,e)}function Gx(t,e){t.uniform3uiv(this.addr,e)}function Vx(t,e){t.uniform4uiv(this.addr,e)}function Wx(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Co(wh):a=Eh;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Xx(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Rh,s[a])}function Zx(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Co(Th):a=Ch;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function qx(t,e,n){const i=this.cache,r=e.length,s=Ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Ah,s[a])}function Yx(t){switch(t){case 5126:return Px;case 35664:return Ix;case 35665:return Lx;case 35666:return Nx;case 35674:return Dx;case 35675:return Ux;case 35676:return Ox;case 5124:case 35670:return Fx;case 35667:case 35671:return kx;case 35668:case 35672:return zx;case 35669:case 35673:return Bx;case 5125:return $x;case 36294:return Hx;case 36295:return Gx;case 36296:return Vx;case 35678:case 36198:case 36298:case 36306:case 35682:return Wx;case 35679:case 36299:case 36307:return Xx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return qx}}class Kx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Cx(n.type)}}class jx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Yx(n.type)}}class Jx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const dc=/(\w+)(\])?(\[|\.)?/g;function yd(t,e){t.seq.push(e),t.map[e.id]=e}function Qx(t,e,n){const i=t.name,r=i.length;for(dc.lastIndex=0;;){const s=dc.exec(i),a=dc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){yd(n,l===void 0?new Kx(o,t,e):new jx(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Jx(o),yd(n,d)),n=d}}}class Ya{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);Qx(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Md(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const eS=37297;let tS=0;function nS(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const bd=new He;function iS(t){tt._getMatrix(bd,tt.workingColorSpace,t);const e=`mat3( ${bd.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case co:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Ed(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+nS(t.getShaderSource(e),o)}else return s}function rS(t,e){const n=iS(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const sS={[$f]:"Linear",[Hf]:"Reinhard",[Gf]:"Cineon",[Cl]:"ACESFilmic",[Wf]:"AgX",[Xf]:"Neutral",[Vf]:"Custom"};function aS(t,e){const n=sS[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Da=new O;function oS(){tt.getLuminanceCoefficients(Da);const t=Da.x.toFixed(4),e=Da.y.toFixed(4),n=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function cS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function lS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function uS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Rs(t){return t!==""}function wd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Td(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dS=/^[ \t]*#include +<([\w\d./]+)>/gm;function ll(t){return t.replace(dS,fS)}function fS(t,e){const n=Xe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return ll(n)}const hS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ad(t){return t.replace(hS,pS)}function pS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const mS={[Ha]:"SHADOWMAP_TYPE_PCF",[As]:"SHADOWMAP_TYPE_VSM"};function gS(t){return mS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const _S={[Vs]:"ENVMAP_MODE_REFRACTION"};function vS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":_S[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const xS={[Bf]:"ENVMAP_BLENDING_MULTIPLY",[Xm]:"ENVMAP_BLENDING_MIX",[Zm]:"ENVMAP_BLENDING_ADD"};function SS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":xS[t.combine]||"ENVMAP_BLENDING_NONE"}function yS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=gS(n),l=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=vS(n),d=SS(n),f=cS(n),h=lS(s),g=r.createProgram();let x,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(Rs).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(Rs).join(`
`),m.length>0&&(m+=`
`)):(x=[Rd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),m=[Rd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==hi?aS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,rS("linearToOutputTexel",n.outputColorSpace),oS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Rs).join(`
`)),a=ll(a),a=wd(a,n),a=Td(a,n),o=ll(o),o=wd(o,n),o=Td(o,n),a=Ad(a),o=Ad(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",n.glslVersion===Uu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Uu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=p+x+a,w=p+m+o,y=Md(r,r.VERTEX_SHADER,S),A=Md(r,r.FRAGMENT_SHADER,w);r.attachShader(g,y),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(y)||"",Y=r.getShaderInfoLog(A)||"",D=F.trim(),X=B.trim(),ie=Y.trim();let V=!0,pe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,y,A);else{const j=Ed(r,y,"vertex"),se=Ed(r,A,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+j+`
`+se)}else D!==""?ze("WebGLProgram: Program Info Log:",D):(X===""||ie==="")&&(pe=!1);pe&&(N.diagnostics={runnable:V,programLog:D,vertexShader:{log:X,prefix:x},fragmentShader:{log:ie,prefix:m}})}r.deleteShader(y),r.deleteShader(A),_=new Ya(r,g),M=uS(r,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(g,eS)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=tS++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}let MS=0;class bS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new ES(e),n.set(e,i)),i}}class ES{constructor(e){this.id=MS++,this.code=e,this.usedTimes=0}}function wS(t){return t===fr||t===so||t===ao}function TS(t,e,n,i,r,s){const a=new oh,o=new bS,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,z,N,F,B){const Y=N.fog,D=F.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||X,ie),pe=f[_.type];let j=i.precision;_.precision!==null&&(j=i.getMaxPrecision(_.precision),j!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",j,"instead."));const se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,de=se!==void 0?se.length:0;let Re=0;D.morphAttributes.position!==void 0&&(Re=1),D.morphAttributes.normal!==void 0&&(Re=2),D.morphAttributes.color!==void 0&&(Re=3);let Be,re,ve,Te;if(pe){const xe=Gn[pe];Be=xe.vertexShader,re=xe.fragmentShader}else{Be=_.vertexShader,re=_.fragmentShader;const xe=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,xe,st),ve=xe.id,Te=st.id}const Oe=t.getRenderTarget(),be=t.state.buffers.depth.getReversed(),$e=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,ke=!!_.map,ot=!!_.matcap,lt=!!V,qe=lt&&V.isPMREMTexture===!0,Ut=!!_.aoMap,ut=!!_.lightMap,zt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,ln=!!_.displacementMap,Rt=!!_.emissiveMap,en=!!_.metalnessMap,un=!!_.roughnessMap,dn=_.anisotropy>0,k=_.clearcoat>0,fn=_.diffuseRoughness>0,mt=_.dispersion>0,L=_.retroreflectivity>0,P=_.iridescence>0,ne=_.sheen>0,J=_.transmission>0,Q=dn&&!!_.anisotropyMap,E=k&&!!_.clearcoatMap,v=k&&!!_.clearcoatNormalMap,R=k&&!!_.clearcoatRoughnessMap,H=fn&&!!_.diffuseRoughnessMap,I=P&&!!_.iridescenceMap,te=P&&!!_.iridescenceThicknessMap,le=ne&&!!_.sheenColorMap,K=ne&&!!_.sheenRoughnessMap,Z=!!_.specularMap,ue=!!_.specularColorMap,C=!!_.specularIntensityMap,ee=J&&!!_.transmissionMap,W=J&&!!_.thicknessMap,ge=!!_.gradientMap,me=!!_.alphaMap,ce=_.alphaTest>0,he=!!_.alphaHash,Ue=!!_.extensions;let fe=hi;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(fe=t.toneMapping);const Ne=qe?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ge={shaderID:pe,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:re,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:Te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:j,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:$e,instancingColor:$e&&F.instanceColor!==null,instancingMorph:$e&&F.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:ot,envMap:lt,envMapMode:lt&&V.mapping,envMapPMREM:qe,envMapMaxLod:qe?Ne.length-1:null,envMapSize:qe?Ne[0].width:null,aoMap:Ut,lightMap:ut,bumpMap:zt,normalMap:xt,displacementMap:ln,emissiveMap:Rt,normalMapObjectSpace:xt&&_.normalMapType===Km,normalMapTangentSpace:xt&&_.normalMapType===ol,packedNormalMap:xt&&_.normalMapType===ol&&wS(_.normalMap.format),metalnessMap:en,roughnessMap:un,anisotropy:dn,anisotropyMap:Q,clearcoat:k,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:R,diffuseRoughness:fn,diffuseRoughnessMap:H,dispersion:mt,retroreflection:L,iridescence:P,iridescenceMap:I,iridescenceThicknessMap:te,sheen:ne,sheenColorMap:le,sheenRoughnessMap:K,specularMap:Z,specularColorMap:ue,specularIntensityMap:C,transmission:J,transmissionMap:ee,thicknessMap:W,gradientMap:ge,opaque:_.transparent===!1&&_.blending===Ns&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:ce,alphaHash:he,combine:_.combine,mapUv:ke&&h(_.map.channel),aoMapUv:Ut&&h(_.aoMap.channel),lightMapUv:ut&&h(_.lightMap.channel),bumpMapUv:zt&&h(_.bumpMap.channel),normalMapUv:xt&&h(_.normalMap.channel),displacementMapUv:ln&&h(_.displacementMap.channel),emissiveMapUv:Rt&&h(_.emissiveMap.channel),metalnessMapUv:en&&h(_.metalnessMap.channel),roughnessMapUv:un&&h(_.roughnessMap.channel),anisotropyMapUv:Q&&h(_.anisotropyMap.channel),clearcoatMapUv:E&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&h(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:H&&h(_.diffuseRoughnessMap.channel),iridescenceMapUv:I&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:le&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&h(_.sheenRoughnessMap.channel),specularMapUv:Z&&h(_.specularMap.channel),specularColorMapUv:ue&&h(_.specularColorMap.channel),specularIntensityMapUv:C&&h(_.specularIntensityMap.channel),transmissionMapUv:ee&&h(_.transmissionMap.channel),thicknessMapUv:W&&h(_.thicknessMap.channel),alphaMapUv:me&&h(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||dn),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(ke||me),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:be,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Re,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:B.filter(xe=>xe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:fe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Rt&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ue&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ue&&_.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function x(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)M.push(z),M.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(m(M,_),p(M,_),M.push(t.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function m(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function p(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const M=f[_.type];let z;if(M){const N=Gn[M];z=Yg.clone(N.uniforms)}else z=_.uniforms;return z}function w(_,M){let z=u.get(M);return z!==void 0?++z.usedTimes:(z=new yS(t,M,_,r),l.push(z),u.set(M,z)),z}function y(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:S,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:T}}function AS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function RS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Cd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,x,m,p){let S=t[e];return S===void 0?(S={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:m,group:p},t[e]=S):(S.id=f.id,S.object=f,S.geometry=h,S.material=g,S.materialVariant=a(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=m,S.group=p),e++,S}function c(f,h,g,x,m,p,S){S.reversedDepth===!0&&(m=-m);const w=o(f,h,g,x,m,p);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):n.push(w)}function l(f,h,g,x,m,p){const S=o(f,h,g,x,m,p);g.transmission>0?i.unshift(S):g.transparent===!0?r.unshift(S):n.unshift(S)}function u(f,h){n.length>1&&n.sort(f||RS),i.length>1&&i.sort(h||Cd),r.length>1&&r.sort(h||Cd)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function CS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Pd,t.set(i,[a])):r>=s.length?(a=new Pd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function PS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new Ze};break;case"SpotLight":n={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function IS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let LS=0;function NS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DS(t){const e=new PS,n=IS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new pt,a=new pt;function o(l){let u=0,d=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,S=0,w=0,y=0,A=0,T=0,_=0,M=0,z=0,N=0;l.sort(NS);for(let B=0,Y=l.length;B<Y;B++){const D=l[B],X=D.color,ie=D.intensity,V=D.distance;let pe=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===fr?pe=D.shadow.map.texture:pe=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=X.r*ie,d+=X.g*ie,f+=X.b*ie;else if(D.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(D.sh.coefficients[j],ie);N++}else if(D.isSunLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,de=n.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),i.sunShadow[g]=de,i.sunShadowMap[g]=pe;const Re=se.getViewportCount();for(let Be=0;Be<Re;Be++)i.sunShadowMatrix[x+Be]=se.getMatrix(Be),i.sunShadowCascade[x+Be]=se._cascadeData[Be];x+=Re,g++}i.sun[h]=j,h++}else if(D.isDirectionalLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,de=n.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.directionalShadow[m]=de,i.directionalShadowMap[m]=pe,i.directionalShadowMatrix[m]=D.shadow.matrix,A++}i.directional[m]=j,m++}else if(D.isSpotLight){const j=e.get(D);j.position.setFromMatrixPosition(D.matrixWorld),j.color.copy(X).multiplyScalar(ie),j.distance=V,j.coneCos=Math.cos(D.angle),j.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),j.decay=D.decay,i.spot[S]=j;const se=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,se.updateMatrices(D),D.castShadow&&z++),i.spotLightMatrix[S]=se.matrix,D.castShadow){const de=n.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,i.spotShadow[S]=de,i.spotShadowMap[S]=pe,_++}S++}else if(D.isRectAreaLight){const j=e.get(D);j.color.copy(X).multiplyScalar(ie),j.halfWidth.set(D.width*.5,0,0),j.halfHeight.set(0,D.height*.5,0),i.rectArea[w]=j,w++}else if(D.isPointLight){const j=e.get(D);if(j.color.copy(D.color).multiplyScalar(D.intensity),j.distance=D.distance,j.decay=D.decay,D.castShadow){const se=D.shadow,de=n.get(D);de.shadowIntensity=se.intensity,de.shadowBias=se.bias,de.shadowNormalBias=se.normalBias,de.shadowRadius=se.radius,de.shadowMapSize=se.mapSize,de.shadowCameraNear=se.camera.near,de.shadowCameraFar=se.camera.far,i.pointShadow[p]=de,i.pointShadowMap[p]=pe,i.pointShadowMatrix[p]=D.shadow.matrix,T++}i.point[p]=j,p++}else if(D.isHemisphereLight){const j=e.get(D);j.skyColor.copy(D.color).multiplyScalar(ie),j.groundColor.copy(D.groundColor).multiplyScalar(ie),i.hemi[y]=j,y++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const F=i.hash;(F.sunLength!==h||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==S||F.rectAreaLength!==w||F.hemiLength!==y||F.numSunShadows!==g||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==_||F.numSpotMaps!==M||F.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=m,i.spot.length=S,i.rectArea.length=w,i.point.length=p,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-z,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=N,F.sunLength=h,F.directionalLength=m,F.pointLength=p,F.spotLength=S,F.rectAreaLength=w,F.hemiLength=y,F.numSunShadows=g,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=_,F.numSpotMaps=M,F.numLightProbes=N,i.version=LS++)}function c(l,u){let d=0,f=0,h=0,g=0,x=0,m=0;const p=u.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){const y=l[S];if(y.isSunLight){const A=i.sun[d];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),d++}else if(y.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),f++}else if(y.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(y.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const A=i.point[h];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(p),h++}else if(y.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function Id(t){const e=new DS(t),n=[],i=[],r=[];function s(d){u.camera=d,n.length=0,i.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):n.push(d)}function o(d){i.push(d)}function c(){e.setup(n),r.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function US(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Id(t),e.set(r,[o])):s>=a.length?(o=new Id(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const OS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,FS=`uniform sampler2D shadow_pass;
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
}`,kS=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],zS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Ld=new pt,ys=new O,fc=new O;function BS(t,e,n){let i=new qs;const r=new We,s=new We,a=new Et,o=new e0,c=new t0,l={},u=n.maxTextureSize,d={[dr]:cn,[cn]:dr,[Tn]:Tn},f=new hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:OS,fragmentShader:FS}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _t(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let p=this.type;this.render=function(T,_,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===Am&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ha);const z=t.getRenderTarget(),N=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),B=t.state;B.setBlending($r),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Y=p!==this.type;Y&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=T.length;D<X;D++){const ie=T[D],V=ie.shadow;if(V===void 0){ze("WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const pe=V.getFrameExtents();r.multiply(pe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,V.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=j,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===As){if(ie.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Xn(r.x,r.y,{format:fr,type:qn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),V.map.texture.name=ie.name+".shadowMap",V.map.depthTexture=new Yr(r.x,r.y,Dn),V.map.depthTexture.name=ie.name+".shadowMapDepth",V.map.depthTexture.format=Ui,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt}else ie.isPointLight?(V.map=new Wl(r.x),V.map.depthTexture=new ph(r.x,Zn)):(V.map=new Xn(r.x,r.y),V.map.depthTexture=new Yr(r.x,r.y,Zn)),V.map.depthTexture.name=ie.name+".shadowMap",V.map.depthTexture.format=Ui,this.type===Ha?(V.map.depthTexture.compareFunction=j?th:eh,V.map.depthTexture.minFilter=mn,V.map.depthTexture.magFilter=mn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const se=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();ie.isPointLight!==!0&&V.updateMatrices(ie,M);const de=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let Re=0;Re<se;Re++){const Be=V.getCamera(Re);if(ie.isPointLight){const re=V.camera,ve=V.matrix,Te=ie.distance||re.far;Te!==re.far&&(re.far=Te,re.updateProjectionMatrix()),ys.setFromMatrixPosition(ie.matrixWorld),re.position.copy(ys),fc.copy(re.position),fc.add(kS[Re]),re.up.copy(zS[Re]),re.lookAt(fc),re.updateMatrixWorld(),ve.makeTranslation(-ys.x,-ys.y,-ys.z),Ld.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Ld,re.coordinateSystem,re.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Re),t.clear();else{Re===0&&(t.setRenderTarget(V.map),t.clear());const re=V.getViewport(Re);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),B.viewport(a)}i=V.getFrustum(Re),y(_,M,Be,ie,de,this.type)}V.isPointLightShadow!==!0&&this.type===As&&S(V,M),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(z,N,F)};function S(T,_){const M=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,h.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xn(r.x,r.y,{format:fr,type:qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(_,null,M,f,x,null),h.uniforms.shadow_pass.value=T.mapPass.texture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(_,null,M,h,x,null)}function w(T,_,M,z){let N=null;const F=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)N=F;else if(N=M.isPointLight===!0?c:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const B=N.uuid,Y=_.uuid;let D=l[B];D===void 0&&(D={},l[B]=D);let X=D[Y];X===void 0&&(X=N.clone(),D[Y]=X,_.addEventListener("dispose",A)),N=X}if(N.visible=_.visible,N.wireframe=_.wireframe,z===As?N.side=_.shadowSide!==null?_.shadowSide:_.side:N.side=_.shadowSide!==null?_.shadowSide:d[_.side],N.alphaMap=_.alphaMap,N.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,N.map=_.map,N.clipShadows=_.clipShadows,N.clippingPlanes=_.clippingPlanes,N.clipIntersection=_.clipIntersection,N.displacementMap=_.displacementMap,N.displacementScale=_.displacementScale,N.displacementBias=_.displacementBias,N.wireframeLinewidth=_.wireframeLinewidth,N.linewidth=_.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=t.properties.get(N);B.light=M}return N}function y(T,_,M,z,N,F){if(T.visible===!1)return;if(T.layers.test(N)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===As)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const D=e.update(T),X=T.material;if(Array.isArray(X)){const ie=D.groups;for(let V=0,pe=ie.length;V<pe;V++){const j=ie[V],se=X[j.materialIndex];if(se&&se.visible){const de=w(T,se,z,F);T.onBeforeShadow(t,T,_,M,D,de,j),t.renderBufferDirect(M,null,D,de,T,j),T.onAfterShadow(t,T,_,M,D,de,j)}}}else if(X.visible){const ie=w(T,X,z,F);T.onBeforeShadow(t,T,_,M,D,ie,null),t.renderBufferDirect(M,null,D,ie,T,null),T.onAfterShadow(t,T,_,M,D,ie,null)}}const Y=T.children;for(let D=0,X=Y.length;D<X;D++)y(Y[D],_,M,z,N,F)}function A(T){T.target.removeEventListener("dispose",A);for(const M in l){const z=l[M],N=T.target.uuid;N in z&&(z[N].dispose(),delete z[N])}}}function $S(t,e){function n(){let C=!1;const ee=new Et;let W=null;const ge=new Et(0,0,0,0);return{setMask:function(me){W!==me&&!C&&(t.colorMask(me,me,me,me),W=me)},setLocked:function(me){C=me},setClear:function(me,ce,he,Ue,fe){fe===!0&&(me*=Ue,ce*=Ue,he*=Ue),ee.set(me,ce,he,Ue),ge.equals(ee)===!1&&(t.clearColor(me,ce,he,Ue),ge.copy(ee))},reset:function(){C=!1,W=null,ge.set(-1,0,0,0)}}}function i(){let C=!1,ee=!1,W=null,ge=null,me=null;return{setReversed:function(ce){if(ee!==ce){const he=e.get("EXT_clip_control");ce?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ee=ce;const Ue=me;me=null,this.setClear(Ue)}},getReversed:function(){return ee},setTest:function(ce){ce?be(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(ce){W!==ce&&!C&&(t.depthMask(ce),W=ce)},setFunc:function(ce){if(ee&&(ce=ag[ce]),ge!==ce){switch(ce){case bc:t.depthFunc(t.NEVER);break;case Ec:t.depthFunc(t.ALWAYS);break;case wc:t.depthFunc(t.LESS);break;case Gs:t.depthFunc(t.LEQUAL);break;case Tc:t.depthFunc(t.EQUAL);break;case Ac:t.depthFunc(t.GEQUAL);break;case Rc:t.depthFunc(t.GREATER);break;case Cc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=ce}},setLocked:function(ce){C=ce},setClear:function(ce){me!==ce&&(me=ce,ee&&(ce=1-ce),t.clearDepth(ce))},reset:function(){C=!1,W=null,ge=null,me=null,ee=!1}}}function r(){let C=!1,ee=null,W=null,ge=null,me=null,ce=null,he=null,Ue=null,fe=null;return{setTest:function(Ne){C||(Ne?be(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(Ne){ee!==Ne&&!C&&(t.stencilMask(Ne),ee=Ne)},setFunc:function(Ne,Ge,xe){(W!==Ne||ge!==Ge||me!==xe)&&(t.stencilFunc(Ne,Ge,xe),W=Ne,ge=Ge,me=xe)},setOp:function(Ne,Ge,xe){(ce!==Ne||he!==Ge||Ue!==xe)&&(t.stencilOp(Ne,Ge,xe),ce=Ne,he=Ge,Ue=xe)},setLocked:function(Ne){C=Ne},setClear:function(Ne){fe!==Ne&&(t.clearStencil(Ne),fe=Ne)},reset:function(){C=!1,ee=null,W=null,ge=null,me=null,ce=null,he=null,Ue=null,fe=null}}}const s=new n,a=new i,o=new r;let c={};const l=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],x=null,m=!1,p=null,S=null,w=null,y=null,A=null,T=null,_=null,M=new Ze(0,0,0),z=0,N=!1,F=null,B=null,Y=null,D=null,X=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,pe=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=pe>=1):j.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=pe>=2);let se=null,de={};const Re=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),re=new Et().fromArray(Re),ve=new Et().fromArray(Be);function Te(C,ee,W,ge){const me=new Uint8Array(4),ce=t.createTexture();t.bindTexture(C,ce),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let he=0;he<W;he++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(ee+he,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ce}const Oe={};Oe[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),be(t.DEPTH_TEST),a.setFunc(Gs),zt(!1),xt(Iu),be(t.CULL_FACE),Ut($r);function be(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function $e(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function vt(C,ee){return f[C]!==ee?(t.bindFramebuffer(C,ee),f[C]=ee,C===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ee),C===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function ke(C,ee){let W=g,ge=!1;if(C){W=h.get(ee),W===void 0&&(W=[],h.set(ee,W));const me=C.textures;if(W.length!==me.length||W[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,he=me.length;ce<he;ce++)W[ce]=t.COLOR_ATTACHMENT0+ce;W.length=me.length,ge=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ge=!0);ge&&t.drawBuffers(W)}function ot(C){return x!==C?(t.useProgram(C),x=C,!0):!1}const lt={[kr]:t.FUNC_ADD,[Cm]:t.FUNC_SUBTRACT,[Pm]:t.FUNC_REVERSE_SUBTRACT};lt[Im]=t.MIN,lt[Lm]=t.MAX;const qe={[Nm]:t.ZERO,[Dm]:t.ONE,[Um]:t.SRC_COLOR,[kf]:t.SRC_ALPHA,[$m]:t.SRC_ALPHA_SATURATE,[zm]:t.DST_COLOR,[Fm]:t.DST_ALPHA,[Om]:t.ONE_MINUS_SRC_COLOR,[zf]:t.ONE_MINUS_SRC_ALPHA,[Bm]:t.ONE_MINUS_DST_COLOR,[km]:t.ONE_MINUS_DST_ALPHA,[Hm]:t.CONSTANT_COLOR,[Gm]:t.ONE_MINUS_CONSTANT_COLOR,[Vm]:t.CONSTANT_ALPHA,[Wm]:t.ONE_MINUS_CONSTANT_ALPHA};function Ut(C,ee,W,ge,me,ce,he,Ue,fe,Ne){if(C===$r){m===!0&&($e(t.BLEND),m=!1);return}if(m===!1&&(be(t.BLEND),m=!0),C!==Rm){if(C!==p||Ne!==N){if((S!==kr||A!==kr)&&(t.blendEquation(t.FUNC_ADD),S=kr,A=kr),Ne)switch(C){case Ns:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lu:t.blendFunc(t.ONE,t.ONE);break;case Nu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Du:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",C);break}else switch(C){case Ns:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Lu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Nu:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Du:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",C);break}w=null,y=null,T=null,_=null,M.set(0,0,0),z=0,p=C,N=Ne}return}me=me||ee,ce=ce||W,he=he||ge,(ee!==S||me!==A)&&(t.blendEquationSeparate(lt[ee],lt[me]),S=ee,A=me),(W!==w||ge!==y||ce!==T||he!==_)&&(t.blendFuncSeparate(qe[W],qe[ge],qe[ce],qe[he]),w=W,y=ge,T=ce,_=he),(Ue.equals(M)===!1||fe!==z)&&(t.blendColor(Ue.r,Ue.g,Ue.b,fe),M.copy(Ue),z=fe),p=C,N=!1}function ut(C,ee){C.side===Tn?$e(t.CULL_FACE):be(t.CULL_FACE);let W=C.side===cn;ee&&(W=!W),zt(W),C.blending===Ns&&C.transparent===!1?Ut($r):Ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const ge=C.stencilWrite;o.setTest(ge),ge&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Rt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?be(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function zt(C){F!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),F=C)}function xt(C){C!==wm?(be(t.CULL_FACE),C!==B&&(C===Iu?t.cullFace(t.BACK):C===Tm?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),B=C}function ln(C){C!==Y&&(V&&t.lineWidth(C),Y=C)}function Rt(C,ee,W){C?(be(t.POLYGON_OFFSET_FILL),(D!==ee||X!==W)&&(D=ee,X=W,a.getReversed()&&(ee=-ee,W=-W),t.polygonOffset(ee,W))):$e(t.POLYGON_OFFSET_FILL)}function en(C){C?be(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function un(C){C===void 0&&(C=t.TEXTURE0+ie-1),se!==C&&(t.activeTexture(C),se=C)}function dn(C,ee,W){W===void 0&&(se===null?W=t.TEXTURE0+ie-1:W=se);let ge=de[W];ge===void 0&&(ge={type:void 0,texture:void 0},de[W]=ge),(ge.type!==C||ge.texture!==ee)&&(se!==W&&(t.activeTexture(W),se=W),t.bindTexture(C,ee||Oe[C]),ge.type=C,ge.texture=ee)}function k(){const C=de[se];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function fn(){try{t.compressedTexImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function mt(){try{t.compressedTexImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function L(){try{t.texSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function P(){try{t.texSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function ne(){try{t.compressedTexSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function Q(){try{t.texStorage2D(...arguments)}catch(C){at("WebGLState:",C)}}function E(){try{t.texStorage3D(...arguments)}catch(C){at("WebGLState:",C)}}function v(){try{t.texImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function R(){try{t.texImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function H(C){return d[C]!==void 0?d[C]:t.getParameter(C)}function I(C,ee){d[C]!==ee&&(t.pixelStorei(C,ee),d[C]=ee)}function te(C){re.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function le(C){ve.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function K(C,ee){let W=l.get(ee);W===void 0&&(W=new WeakMap,l.set(ee,W));let ge=W.get(C);ge===void 0&&(ge=t.getUniformBlockIndex(ee,C.name),t.uniformBlockBinding(ee,ge,ge),W.set(C,ge))}function Z(C,ee,W){const me=l.get(ee).get(C);c[me]!==W&&(t.bindBufferBase(t.UNIFORM_BUFFER,me,W),c[me]=W)}function ue(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},se=null,de={},f={},c={},h=new WeakMap,g=[],x=null,m=!1,p=null,S=null,w=null,y=null,A=null,T=null,_=null,M=new Ze(0,0,0),z=0,N=!1,F=null,B=null,Y=null,D=null,X=null,re.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:be,disable:$e,bindFramebuffer:vt,drawBuffers:ke,useProgram:ot,setBlending:Ut,setMaterial:ut,setFlipSided:zt,setCullFace:xt,setLineWidth:ln,setPolygonOffset:Rt,setScissorTest:en,activeTexture:un,bindTexture:dn,unbindTexture:k,compressedTexImage2D:fn,compressedTexImage3D:mt,texImage2D:v,texImage3D:R,pixelStorei:I,getParameter:H,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Q,texStorage3D:E,texSubImage2D:L,texSubImage3D:P,compressedTexSubImage2D:ne,compressedTexSubImage3D:J,scissor:te,viewport:le,reset:ue}}function HS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap,d=new Set;let f;const h=new WeakMap,g=new Set,x=new FinalizationRegistry(E=>g.delete(E));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,v){return m?new OffscreenCanvas(E,v):lo("canvas")}function S(E,v,R){let H=1;const I=Q(E);if((I.width>R||I.height>R)&&(H=R/Math.max(I.width,I.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const te=Math.floor(H*I.width),le=Math.floor(H*I.height);f===void 0&&(f=p(te,le));const K=v?p(te,le):f;return K.width=te,K.height=le,K.getContext("2d").drawImage(E,0,0,te,le),ze("WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+te+"x"+le+")."),K}else return"data"in E&&ze("WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),E;return E}function w(E){return E.generateMipmaps}function y(E){t.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(E,v,R,H,I,te=!1){if(E!==null){if(t[E]!==void 0)return t[E];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let le;H&&(le=e.get("EXT_texture_norm16"),le||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===t.RED&&(R===t.FLOAT&&(K=t.R32F),R===t.HALF_FLOAT&&(K=t.R16F),R===t.UNSIGNED_BYTE&&(K=t.R8),R===t.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),R===t.SHORT&&le&&(K=le.R16_SNORM_EXT)),v===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.R8UI),R===t.UNSIGNED_SHORT&&(K=t.R16UI),R===t.UNSIGNED_INT&&(K=t.R32UI),R===t.BYTE&&(K=t.R8I),R===t.SHORT&&(K=t.R16I),R===t.INT&&(K=t.R32I)),v===t.RG&&(R===t.FLOAT&&(K=t.RG32F),R===t.HALF_FLOAT&&(K=t.RG16F),R===t.UNSIGNED_BYTE&&(K=t.RG8),R===t.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),R===t.SHORT&&le&&(K=le.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.RG8UI),R===t.UNSIGNED_SHORT&&(K=t.RG16UI),R===t.UNSIGNED_INT&&(K=t.RG32UI),R===t.BYTE&&(K=t.RG8I),R===t.SHORT&&(K=t.RG16I),R===t.INT&&(K=t.RG32I)),v===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.RGB8UI),R===t.UNSIGNED_SHORT&&(K=t.RGB16UI),R===t.UNSIGNED_INT&&(K=t.RGB32UI),R===t.BYTE&&(K=t.RGB8I),R===t.SHORT&&(K=t.RGB16I),R===t.INT&&(K=t.RGB32I)),v===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),R===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),R===t.UNSIGNED_INT&&(K=t.RGBA32UI),R===t.BYTE&&(K=t.RGBA8I),R===t.SHORT&&(K=t.RGBA16I),R===t.INT&&(K=t.RGBA32I)),v===t.RGB&&(R===t.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),R===t.SHORT&&le&&(K=le.RGB16_SNORM_EXT),R===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),R===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),v===t.RGBA){const Z=te?co:tt.getTransfer(I);R===t.FLOAT&&(K=t.RGBA32F),R===t.HALF_FLOAT&&(K=t.RGBA16F),R===t.UNSIGNED_BYTE&&(K=Z===dt?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),R===t.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),R===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(E,v){let R;return E?v===null||v===Zn||v===qr?R=t.DEPTH24_STENCIL8:v===Dn?R=t.DEPTH32F_STENCIL8:v===Ws&&(R=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===qr?R=t.DEPTH_COMPONENT24:v===Dn?R=t.DEPTH_COMPONENT32F:v===Ws&&(R=t.DEPTH_COMPONENT16),R}function M(E,v){return w(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xt&&E.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function z(E){const v=new WeakRef(E);i.get(E).__ref=v,g.add(v),x.register(E,v,v)}function N(E){const v=i.get(E).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function F(E){Y(E.target)}function B(E){D(E.target)}function Y(E){E.removeEventListener("dispose",F),N(E),ie(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&d.delete(E)}function D(E){E.removeEventListener("dispose",B),N(E),pe(E)}function X(){for(const E of g){const v=E.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):Y(v))}g.clear(),d.clear()}function ie(E){const v=i.get(E);if(v.__webglInit===void 0)return;const R=E.source,H=h.get(R);if(H){const I=H[v.__cacheKey];I.usedTimes--,I.usedTimes===0&&V(E),Object.keys(H).length===0&&h.delete(R)}i.remove(E)}function V(E){const v=i.get(E);t.deleteTexture(v.__webglTexture);const R=E.source,H=h.get(R);delete H[v.__cacheKey],a.memory.textures--}function pe(E){const v=i.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();const R=E.depthTexture;if(R&&R.renderTarget===E&&Y(R),E.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(v.__webglFramebuffer[I]))for(let te=0;te<v.__webglFramebuffer[I].length;te++)t.deleteFramebuffer(v.__webglFramebuffer[I][te]);else t.deleteFramebuffer(v.__webglFramebuffer[I]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[I])}else{if(Array.isArray(v.__webglFramebuffer))for(let I=0;I<v.__webglFramebuffer.length;I++)t.deleteFramebuffer(v.__webglFramebuffer[I]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let I=0;I<v.__webglColorRenderbuffer.length;I++)v.__webglColorRenderbuffer[I]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[I]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=E.textures;for(let I=0,te=H.length;I<te;I++){const le=i.get(H[I]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(H[I])}i.remove(E)}let j=0;function se(){j=0}function de(){return j}function Re(E){j=E}function Be(){const E=j;return E>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),j+=1,E}function re(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ve(E,v){const R=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&R.__version!==E.version){const H=E.image;if(H===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(R,E,v);return}}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+v)}function Te(E,v){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,v);return}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+v)}function Oe(E,v){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,v);return}n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+v)}function be(E,v){const R=i.get(E);if(E.version>0&&R.__version!==E.version){zt(R,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+v)}const $e={[ro]:t.REPEAT,[ui]:t.CLAMP_TO_EDGE,[Pc]:t.MIRRORED_REPEAT},vt={[Xt]:t.NEAREST,[qm]:t.NEAREST_MIPMAP_NEAREST,[la]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[Bo]:t.LINEAR_MIPMAP_NEAREST,[Ii]:t.LINEAR_MIPMAP_LINEAR},ke={[Jm]:t.NEVER,[nh]:t.ALWAYS,[Qm]:t.LESS,[eh]:t.LEQUAL,[eg]:t.EQUAL,[th]:t.GEQUAL,[tg]:t.GREATER,[ng]:t.NOTEQUAL};function ot(E,v){if(v.type===Dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===Bo||v.magFilter===la||v.magFilter===Ii||v.minFilter===mn||v.minFilter===Bo||v.minFilter===la||v.minFilter===Ii)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,$e[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,$e[v.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,$e[v.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,vt[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==la&&v.minFilter!==Ii||v.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function lt(E,v){let R=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",F),z(v));const H=v.source;let I=h.get(H);I===void 0&&(I={},h.set(H,I));const te=re(v);if(te!==E.__cacheKey){I[te]===void 0&&(I[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,R=!0),I[te].usedTimes++;const le=I[E.__cacheKey];le!==void 0&&(I[E.__cacheKey].usedTimes--,le.usedTimes===0&&V(v)),E.__cacheKey=te,E.__webglTexture=I[te].texture}return R}function qe(E,v,R){return Math.floor(Math.floor(E/R)/v)}function Ut(E,v,R,H){const te=E.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,R,H,v.data);else{te.sort((C,ee)=>C.start-ee.start);let le=0;for(let C=1;C<te.length;C++){const ee=te[le],W=te[C],ge=ee.start+ee.count,me=qe(W.start,v.width,4),ce=qe(ee.start,v.width,4);W.start<=ge+1&&me===ce&&qe(W.start+W.count-1,v.width,4)===me?ee.count=Math.max(ee.count,W.start+W.count-ee.start):(++le,te[le]=W)}te.length=le+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),ue=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let C=0,ee=te.length;C<ee;C++){const W=te[C],ge=Math.floor(W.start/4),me=Math.ceil(W.count/4),ce=ge%v.width,he=Math.floor(ge/v.width),Ue=me,fe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ce),n.pixelStorei(t.UNPACK_SKIP_ROWS,he),n.texSubImage2D(t.TEXTURE_2D,0,ce,he,Ue,fe,R,H,v.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,ue)}}function ut(E,v,R){let H=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=t.TEXTURE_3D);const I=lt(E,v),te=v.source;n.bindTexture(H,E.__webglTexture,t.TEXTURE0+R);const le=i.get(te);if(te.version!==le.__version||I===!0){if(n.activeTexture(t.TEXTURE0+R),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const fe=tt.getPrimaries(tt.workingColorSpace),Ne=v.colorSpace===Ci?null:tt.getPrimaries(v.colorSpace),Ge=v.colorSpace===Ci||fe===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=S(v.image,!1,r.maxTextureSize);Z=J(v,Z);const ue=s.convert(v.format,v.colorSpace),C=s.convert(v.type);let ee=T(v.internalFormat,ue,C,v.normalized,v.colorSpace,v.isVideoTexture);ot(H,v);let W;const ge=v.mipmaps,me=v.isVideoTexture!==!0,ce=le.__version===void 0||I===!0,he=te.dataReady,Ue=M(v,Z);if(v.isDepthTexture)ee=_(v.format===Li,v.type),ce&&(me?n.texStorage2D(t.TEXTURE_2D,1,ee,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,ee,Z.width,Z.height,0,ue,C,null));else if(v.isDataTexture)if(ge.length>0){me&&ce&&n.texStorage2D(t.TEXTURE_2D,Ue,ee,ge[0].width,ge[0].height);for(let fe=0,Ne=ge.length;fe<Ne;fe++)W=ge[fe],me?he&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,W.width,W.height,ue,C,W.data):n.texImage2D(t.TEXTURE_2D,fe,ee,W.width,W.height,0,ue,C,W.data);v.generateMipmaps=!1}else me?(ce&&n.texStorage2D(t.TEXTURE_2D,Ue,ee,Z.width,Z.height),he&&Ut(v,Z,ue,C)):n.texImage2D(t.TEXTURE_2D,0,ee,Z.width,Z.height,0,ue,C,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){me&&ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,ee,ge[0].width,ge[0].height,Z.depth);for(let fe=0,Ne=ge.length;fe<Ne;fe++)if(W=ge[fe],v.format!==Vn)if(ue!==null)if(me){if(he)if(v.layerUpdates.size>0){const Ge=dd(W.width,W.height,v.format,v.type);for(const xe of v.layerUpdates){const st=W.data.subarray(xe*Ge/W.data.BYTES_PER_ELEMENT,(xe+1)*Ge/W.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,xe,W.width,W.height,1,ue,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,W.width,W.height,Z.depth,ue,W.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,ee,W.width,W.height,Z.depth,0,W.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,W.width,W.height,Z.depth,ue,C,W.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,ee,W.width,W.height,Z.depth,0,ue,C,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{me&&ce&&n.texStorage2D(t.TEXTURE_2D,Ue,ee,ge[0].width,ge[0].height);for(let fe=0,Ne=ge.length;fe<Ne;fe++)W=ge[fe],v.format!==Vn?ue!==null?me?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,W.width,W.height,ue,W.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,ee,W.width,W.height,0,W.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?he&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,W.width,W.height,ue,C,W.data):n.texImage2D(t.TEXTURE_2D,fe,ee,W.width,W.height,0,ue,C,W.data)}else if(v.isDataArrayTexture)if(me){if(ce&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ue,ee,Z.width,Z.height,Z.depth),he)if(v.layerUpdates.size>0){const fe=dd(Z.width,Z.height,v.format,v.type);for(const Ne of v.layerUpdates){const Ge=Z.data.subarray(Ne*fe/Z.data.BYTES_PER_ELEMENT,(Ne+1)*fe/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ne,Z.width,Z.height,1,ue,C,Ge)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ue,C,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,Z.width,Z.height,Z.depth,0,ue,C,Z.data);else if(v.isData3DTexture)me?(ce&&n.texStorage3D(t.TEXTURE_3D,Ue,ee,Z.width,Z.height,Z.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ue,C,Z.data)):n.texImage3D(t.TEXTURE_3D,0,ee,Z.width,Z.height,Z.depth,0,ue,C,Z.data);else if(v.isFramebufferTexture){if(ce)if(me)n.texStorage2D(t.TEXTURE_2D,Ue,ee,Z.width,Z.height);else{let fe=Z.width,Ne=Z.height;for(let Ge=0;Ge<Ue;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,ee,fe,Ne,0,ue,C,null),fe>>=1,Ne>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const fe=t.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),Z.parentNode!==fe){fe.appendChild(Z),d.add(v),fe.onpaint=Ne=>{const Ge=Ne.changedElements;for(const xe of d)Ge.includes(xe.image)&&(xe.needsUpdate=!0)},fe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Z);else{const Ge=t.RGBA,xe=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,xe,st,Z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ge.length>0){if(me&&ce){const fe=Q(ge[0]);n.texStorage2D(t.TEXTURE_2D,Ue,ee,fe.width,fe.height)}for(let fe=0,Ne=ge.length;fe<Ne;fe++)W=ge[fe],me?he&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,ue,C,W):n.texImage2D(t.TEXTURE_2D,fe,ee,ue,C,W);v.generateMipmaps=!1}else if(me){if(ce){const fe=Q(Z);n.texStorage2D(t.TEXTURE_2D,Ue,ee,fe.width,fe.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,C,Z)}else n.texImage2D(t.TEXTURE_2D,0,ee,ue,C,Z);w(v)&&v.mipmapsAutoUpdate===!0&&y(H),le.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function zt(E,v,R){if(v.image.length!==6)return;const H=lt(E,v),I=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+R);const te=i.get(I);if(I.version!==te.__version||H===!0){n.activeTexture(t.TEXTURE0+R);const le=tt.getPrimaries(tt.workingColorSpace),K=v.colorSpace===Ci?null:tt.getPrimaries(v.colorSpace),Z=v.colorSpace===Ci||le===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ue=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let xe=0;xe<6;xe++)!ue&&!C?ee[xe]=S(v.image[xe],!0,r.maxCubemapSize):ee[xe]=C?v.image[xe].image:v.image[xe],ee[xe]=J(v,ee[xe]);const W=ee[0],ge=s.convert(v.format,v.colorSpace),me=s.convert(v.type);let ce=T(v.internalFormat,ge,me,v.normalized,v.colorSpace);const he=v.isVideoTexture!==!0,Ue=te.__version===void 0||H===!0,fe=I.dataReady;let Ne=M(v,W);ot(t.TEXTURE_CUBE_MAP,v);let Ge;if(v.isDepthTexture){if(ce=_(v.format===Li,v.type),Ue)if(he)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ce,W.width,W.height);else for(let xe=0;xe<6;xe++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,W.width,W.height,0,ge,me,null)}else if(ue){he&&Ue&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,ce,W.width,W.height);for(let xe=0;xe<6;xe++){Ge=ee[xe].mipmaps;for(let st=0;st<Ge.length;st++){const Mt=Ge[st];v.format!==Vn?ge!==null?he?fe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Mt.width,Mt.height,ge,Mt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,ce,Mt.width,Mt.height,0,Mt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Mt.width,Mt.height,ge,me,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,ce,Mt.width,Mt.height,0,ge,me,Mt.data)}}}else{if(Ge=v.mipmaps,he&&Ue){Ge.length>0&&Ne++;const xe=Q(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ne,ce,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(C){he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ee[xe].width,ee[xe].height,ge,me,ee[xe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,ee[xe].width,ee[xe].height,0,ge,me,ee[xe].data);for(let st=0;st<Ge.length;st++){const kn=Ge[st].image[xe].image;he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,kn.width,kn.height,ge,me,kn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,ce,kn.width,kn.height,0,ge,me,kn.data)}}else{he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ge,me,ee[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ce,ge,me,ee[xe]);for(let st=0;st<Ge.length;st++){const Mt=Ge[st];he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,ge,me,Mt.image[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,ce,ge,me,Mt.image[xe])}}}w(v)&&v.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),te.__version=I.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xt(E,v,R,H,I,te){const le=s.convert(R.format,R.colorSpace),K=s.convert(R.type),Z=T(R.internalFormat,le,K,R.normalized,R.colorSpace),ue=i.get(v),C=i.get(R);if(C.__renderTarget=v,!ue.__hasExternalTextures){const ee=Math.max(1,v.width>>te),W=Math.max(1,v.height>>te);I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?n.texImage3D(I,te,Z,ee,W,v.depth,0,le,K,null):n.texImage2D(I,te,Z,ee,W,0,le,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),P(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,I,C.__webglTexture,0,L(v)):(I===t.TEXTURE_2D||I>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,I,C.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ln(E,v,R){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer){const H=v.depthTexture,I=H&&H.isDepthTexture?H.type:null,te=_(v.stencilBuffer,I),le=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;P(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(v),te,v.width,v.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(v),te,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,te,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,E)}else{const H=v.textures;for(let I=0;I<H.length;I++){const te=H[I],le=s.convert(te.format,te.colorSpace),K=s.convert(te.type),Z=T(te.internalFormat,le,K,te.normalized,te.colorSpace);P(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(v),Z,v.width,v.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(v),Z,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Z,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Rt(E,v,R){const H=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const I=i.get(v.depthTexture);I.__renderTarget=v;const te=H?v.depthTexture.image[0]:v.depthTexture.image;(!I.__webglTexture||te.width!==v.width||te.height!==v.height)&&(te.width=v.width,te.height=v.height,v.depthTexture.needsUpdate=!0),H?be(v.depthTexture,0):ve(v.depthTexture,0);const le=I.__webglTexture,K=L(v),Z=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+R:t.TEXTURE_2D,ue=v.depthTexture.format===Li?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ui)P(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,Z,le,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,ue,Z,le,0);else if(v.depthTexture.format===Li)P(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ue,Z,le,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,ue,Z,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function en(E){const v=i.get(E),R=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const I=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",I)};H.addEventListener("dispose",I),v.__depthDisposeCallback=I}v.__boundDepthTexture=H}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(R)for(let H=0;H<6;H++)Rt(v.__webglFramebuffer[H],E,H);else E.texture.mipmaps.length>0?Rt(v.__webglFramebuffer[0],E,0):Rt(v.__webglFramebuffer,E,0);else if(R){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=t.createRenderbuffer(),ln(v.__webglDepthbuffer[H],E,!1);else{const I=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,I,t.RENDERBUFFER,te)}}else if(E.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),ln(v.__webglDepthbuffer,E,!1);else{const I=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,I,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function un(E,v,R){const H=i.get(E);v!==void 0&&xt(H.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&en(E)}function dn(E){const v=E.texture,R=i.get(E),H=i.get(v);E.addEventListener("dispose",B),z(E);const I=E.textures,te=E.isWebGLCubeRenderTarget===!0,le=I.length>1;if(le||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=v.version,a.memory.textures++),te){R.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps.length>0){R.__webglFramebuffer[K]=[];for(let Z=0;Z<v.mipmaps.length;Z++)R.__webglFramebuffer[K][Z]=t.createFramebuffer()}else R.__webglFramebuffer[K]=t.createFramebuffer()}else{if(v.mipmaps.length>0){R.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)R.__webglFramebuffer[K]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(le)for(let K=0,Z=I.length;K<Z;K++){const ue=i.get(I[K]);ue.__webglTexture===void 0&&(ue.__webglTexture=t.createTexture(),a.memory.textures++)}if(E.samples>0&&P(E)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let K=0;K<I.length;K++){const Z=I[K];R.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[K]);const ue=s.convert(Z.format,Z.colorSpace),C=s.convert(Z.type),ee=T(Z.internalFormat,ue,C,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),W=L(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,W,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,R.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),ln(R.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),ot(t.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)xt(R.__webglFramebuffer[K][Z],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else xt(R.__webglFramebuffer[K],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(v)?y(t.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}else if(le){for(let K=0,Z=I.length;K<Z;K++){const ue=I[K],C=i.get(ue);let ee=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,C.__webglTexture),ot(ee,ue),xt(R.__webglFramebuffer,E,ue,t.COLOR_ATTACHMENT0+K,ee,0),w(ue)&&y(ee)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,H.__webglTexture),ot(K,v),v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)xt(R.__webglFramebuffer[Z],E,v,t.COLOR_ATTACHMENT0,K,Z);else xt(R.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,K,0);w(v)?y(K):v.mipmaps.length>0&&t.texParameteri(K,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}E.depthBuffer&&en(E)}function k(E){const v=E.textures;for(let R=0,H=v.length;R<H;R++){const I=v[R];if(w(I)&&I.mipmapsAutoUpdate===!0){const te=A(E),le=i.get(I).__webglTexture;n.bindTexture(te,le),y(te),n.unbindTexture()}}}const fn=[];function mt(E){if(E.samples>0){if(P(E)===!1){const v=E.textures,R=E.width,H=E.height;let I=t.COLOR_BUFFER_BIT;const te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(E),K=v.length>1;if(K)for(let ue=0;ue<v.length;ue++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ue=0;ue<v.length;ue++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(I|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(I|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const C=i.get(v[ue]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,R,H,0,0,R,H,I,t.NEAREST),c===!0&&(fn.length=0,fn.push(t.COLOR_ATTACHMENT0+ue),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&fn.push(te),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let ue=0;ue<v.length;ue++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.RENDERBUFFER,le.__webglColorRenderbuffer[ue]);const C=i.get(v[ue]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ue,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const v=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function L(E){return Math.min(r.maxSamples,E.samples)}function P(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(E){const v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function J(E,v){const R=E.colorSpace,H=E.format,I=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||R!==oo&&R!==Ci&&(tt.getTransfer(R)===dt?(H!==Vn||I!==Sn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",R)),v}function Q(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Be,this.resetTextureUnits=se,this.getTextureUnits=de,this.setTextureUnits=Re,this.setTexture2D=ve,this.setTexture2DArray=Te,this.setTexture3D=Oe,this.setTextureCube=be,this.rebindTextures=un,this.setupRenderTarget=dn,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=en,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=P,this.dispose=X}function GS(t,e){function n(i,r=Ci){let s;const a=tt.getTransfer(r);if(i===Sn)return t.UNSIGNED_BYTE;if(i===Il)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Ll)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Kf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===qf)return t.BYTE;if(i===Yf)return t.SHORT;if(i===Ws)return t.UNSIGNED_SHORT;if(i===Pl)return t.INT;if(i===Zn)return t.UNSIGNED_INT;if(i===Dn)return t.FLOAT;if(i===qn)return t.HALF_FLOAT;if(i===Jf)return t.ALPHA;if(i===Qf)return t.RGB;if(i===Vn)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===Li)return t.DEPTH_STENCIL;if(i===Nl)return t.RED;if(i===Dl)return t.RED_INTEGER;if(i===fr)return t.RG;if(i===Ul)return t.RG_INTEGER;if(i===Ol)return t.RGBA_INTEGER;if(i===Ga||i===Va||i===Wa||i===Xa)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ga)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ga)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ic||i===Lc||i===Nc||i===Dc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ic)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Lc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Uc||i===Oc||i===Fc||i===kc||i===zc||i===so||i===Bc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Uc||i===Oc)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Fc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===kc)return s.COMPRESSED_R11_EAC;if(i===zc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===so)return s.COMPRESSED_RG11_EAC;if(i===Bc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===$c||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===Zc||i===qc||i===Yc||i===Kc||i===jc||i===Jc||i===Qc||i===el)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$c)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Gc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Vc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Zc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===qc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Kc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===jc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Jc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===el)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===tl||i===nl||i===il)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===tl)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===nl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===il)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rl||i===sl||i===ao||i===al)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===rl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===sl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ao)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===al)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const VS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,WS=`
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

}`;class XS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new mh(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hr({vertexShader:VS,fragmentShader:WS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new sr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ZS extends mr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new XS,p={},S=n.getContextAttributes();let w=null,y=null;const A=[],T=[],_=new We;let M=null,z=null;const N=new Nn;N.viewport=new Et;const F=new Nn;F.viewport=new Et;const B=[N,F],Y=new s0;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=A[re];return ve===void 0&&(ve=new Zo,A[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=A[re];return ve===void 0&&(ve=new Zo,A[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=A[re];return ve===void 0&&(ve=new Zo,A[re]=ve),ve.getHandSpace()};function ie(re){const ve=T.indexOf(re.inputSource);if(ve===-1)return;const Te=A[ve];Te!==void 0&&(Te.update(re.inputSource,re.frame,l||a),Te.dispatchEvent({type:re.type,data:re.inputSource}))}function V(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",pe);for(let re=0;re<A.length;re++){const ve=T[re];ve!==null&&(T[re]=null,A[re].disconnect(ve))}D=null,X=null,m.reset();for(const re in p)delete p[re];if(e.setRenderTarget(w),h=null,f=null,d=null,r=null,y=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),z!==null){const re=z.camera;re.fov=z.fov,re.zoom=z.zoom,re.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",V),r.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Oe=null,be=null;S.depth&&(be=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=S.stencil?Li:Ui,Oe=S.stencil?qr:Zn);const $e={colorFormat:n.RGBA8,depthFormat:be,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer($e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Xn(f.textureWidth,f.textureHeight,{format:Vn,type:Sn,depthTexture:new Yr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Te),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),y=new Xn(h.framebufferWidth,h.framebufferHeight,{format:Vn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(re){for(let ve=0;ve<re.removed.length;ve++){const Te=re.removed[ve],Oe=T.indexOf(Te);Oe>=0&&(T[Oe]=null,A[Oe].disconnect(Te))}for(let ve=0;ve<re.added.length;ve++){const Te=re.added[ve];let Oe=T.indexOf(Te);if(Oe===-1){for(let $e=0;$e<A.length;$e++)if($e>=T.length){T.push(Te),Oe=$e;break}else if(T[$e]===null){T[$e]=Te,Oe=$e;break}if(Oe===-1)break}const be=A[Oe];be&&be.connect(Te)}}function j(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ve=re.near,Te=re.far;m.texture!==null&&(m.depthNear>0&&(ve=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),Y.near=F.near=N.near=ve,Y.far=F.far=N.far=Te,(D!==Y.near||X!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),D=Y.near,X=Y.far),Y.layers.mask=re.layers.mask|6,N.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;const Oe=re.parent,be=Y.cameras;j(Y,Oe);for(let $e=0;$e<be.length;$e++)j(be[$e],Oe);Y.projectionMatrix.copy(N.projectionMatrix),Y.projectionMatrixInverse.copy(N.projectionMatrixInverse),z===null&&re.isPerspectiveCamera&&(z={camera:re,fov:re.fov,zoom:re.zoom}),se(re,Y,Oe)};function se(re,ve,Te){Te===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(Te.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Zs*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(re){return p[re]};let de=null;function Re(re,ve){if(u=ve.getViewerPose(l||a),g=ve,u!==null){const Te=u.views;h!==null&&(e.setRenderTargetFramebuffer(y,h.framebuffer),e.setRenderTarget(y));let Oe=!1;Te.length!==Y.cameras.length&&(Y.cameras.length=0,Oe=!0);for(let ke=0;ke<Te.length;ke++){const ot=Te[ke];let lt=null;if(h!==null)lt=h.getViewport(ot);else{const Ut=d.getViewSubImage(f,ot);lt=Ut.viewport,ke===0&&(e.setRenderTargetTextures(y,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(y))}let qe=B[ke];qe===void 0&&(qe=new Nn,qe.layers.enable(ke),qe.viewport=new Et,B[ke]=qe),qe.matrix.fromArray(ot.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ot.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(lt.x,lt.y,lt.width,lt.height),ke===0&&(Y.matrix.copy(qe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Oe===!0&&Y.cameras.push(qe)}const be=r.enabledFeatures;if(be&&be.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const ke=d.getDepthInformation(Te[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,r.renderState)}if(be&&be.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let ke=0;ke<Te.length;ke++){const ot=Te[ke].camera;if(ot){let lt=p[ot];lt||(lt=new mh,p[ot]=lt);const qe=d.getCameraImage(ot);lt.sourceTexture=qe}}}}for(let Te=0;Te<A.length;Te++){const Oe=T[Te],be=A[Te];Oe!==null&&be!==void 0&&be.update(Oe,ve,l||a)}de&&de(re,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}const Be=new Sh;Be.setAnimationLoop(Re),this.setAnimationLoop=function(re){de=re},this.dispose=function(){}}}const qS=new pt,Ph=new He;Ph.set(-1,0,0,0,1,0,0,0,1);function YS(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,gh(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,S,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,S,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const S=e.get(p),w=S.envMap,y=S.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(qS.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Ph),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,S){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const S=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function KS(t,e,n,i){let r={},s={};function a(S,w){const y=w.program;i.uniformBlockBinding(S,y,r[S.id])}function o(S,w){let y=r[S.id];y===void 0&&(g(S),y=c(S),r[S.id]=y,S.addEventListener("dispose",m));const A=w.program;i.updateUBOMapping(S,A);const T=e.render.frame;s[S.id]!==T&&(l(S),s[S.id]=T)}function c(S){const w=t.createBuffer(),y=S.__size,A=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,y,A),t.bindBuffer(t.UNIFORM_BUFFER,null),w}function l(S){const w=r[S.id],y=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let T=0,_=y.length;T<_;T++){const M=y[T];if(Array.isArray(M))for(let z=0,N=M.length;z<N;z++)u(M[z],T,z,A);else u(M,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(S,w,y,A){if(f(S,w,y,A)===!0){const T=S.__offset,_=S.value;if(Array.isArray(_)){let M=0;for(let z=0;z<_.length;z++){const N=_[z],F=x(N,!0);d(N,S.__data,M),M+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,S.__data)}}function d(S,w,y){typeof S=="number"||typeof S=="boolean"?w[y]=S:S.isMatrix3?(w[y]=S.elements[0],w[y+1]=S.elements[1],w[y+2]=S.elements[2],w[y+3]=0,w[y+4]=S.elements[3],w[y+5]=S.elements[4],w[y+6]=S.elements[5],w[y+7]=0,w[y+8]=S.elements[6],w[y+9]=S.elements[7],w[y+10]=S.elements[8],w[y+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-y),y):S.toArray(w,y)}function f(S,w,y,A){const T=S.value,_=w+"_"+y;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);const M=A[_];let z=!1;for(let N=0;N<T.length;N++)h(T[N],M,N)===!0&&(z=!0);return z}return h(T,A,_)}function h(S,w,y){if(w[y]===void 0)return typeof S=="number"||typeof S=="boolean"?w[y]=S:ArrayBuffer.isView(S)?w[y]=S.slice():w[y]=S.clone(),!0;{const A=w[y];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){const w=S.uniforms;let y=0;const A=16;for(let _=0,M=w.length;_<M;_++){const z=Array.isArray(w[_])?w[_]:[w[_]];for(let N=0,F=z.length;N<F;N++){const B=z[N],Y=Array.isArray(B.value)?B.value:[B.value],D=Array.isArray(w[_])||Array.isArray(B.value);let X=y;for(let V=0,pe=Y.length;V<pe;V++){const j=Y[V],se=x(j,D),de=y%A,Re=de%se.boundary,Be=de+Re;y+=Re,Be!==0&&A-Be<se.storage&&(y+=A-Be),V===0&&(X=y),y+=se.storage}const ie=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new ie((y-X)/Float32Array.BYTES_PER_ELEMENT),B.__offset=X}}const T=y%A;return T>0&&(y+=A-T),S.__size=y,S.__cache={},this}function x(S,w){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(S){const w=S.target;w.removeEventListener("dispose",m),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const S in r)t.deleteBuffer(r[S]);r={},s={}}return{bind:a,update:o,dispose:p}}const jS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function JS(){return Bn===null&&(Bn=new fh(jS,16,16,fr,qn),Bn.name="DFG_LUT",Bn.minFilter=mn,Bn.magFilter=mn,Bn.wrapS=ui,Bn.wrapT=ui,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class QS{constructor(e={}){const{canvas:n=rg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=Sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=h,m=new Set([Ol,Ul,Dl]),p=new Set([Sn,Zn,Ws,qr,Il,Ll]),S=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const _=[],M=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,B=null,Y=null,D=null,X=null;this._outputColorSpace=Ot;let ie=0,V=0,pe=null,j=-1,se=null;const de=new Et,Re=new Et;let Be=null;const re=new Ze(0);let ve=0,Te=n.width,Oe=n.height,be=1,$e=null,vt=null;const ke=new Et(0,0,Te,Oe),ot=new Et(0,0,Te,Oe);let lt=!1;const qe=new qs,Ut=new Hl;let ut=!1,zt=!1;const xt=new pt,ln=new O,Rt=new Et,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let un=!1;function dn(){return pe===null?be:1}let k=i;function fn(b,U){return n.getContext(b,U)}let mt,L,P,ne,J,Q,E,v,R,H,I,te,le,K,Z,ue,C,ee,W,ge,me,ce,he;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Rl}`),n.addEventListener("webglcontextlost",Ne,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",xe,!1),k===null){const U="webgl2";if(k=fn(U,b),k===null)throw fn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ue()}catch(b){throw n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),at("WebGLRenderer: "+b.message),b}function Ue(){mt=new nx(k),mt.init(),me=new GS(k,mt),L=new Wv(k,mt,e,me),P=new $S(k,mt),L.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),Y=k.createFramebuffer(),D=k.createFramebuffer(),X=k.createFramebuffer(),ne=new sx(k),J=new AS,Q=new HS(k,mt,P,J,L,me,ne),E=new tx(N),v=new o0(k),ce=new Gv(k,v),R=new ix(k,v,ne,ce),H=new ox(k,R,v,ce,ne),ee=new ax(k,L,Q),Z=new Xv(J),I=new TS(N,E,mt,L,ce,Z),te=new YS(N,J),le=new CS,K=new US(mt),C=new Hv(N,E,P,H,g,c),ue=new BS(N,H,L),he=new KS(k,ne,L,P),W=new Vv(k,mt,ne),ge=new rx(k,mt,ne),ne.programs=I.programs,N.capabilities=L,N.extensions=mt,N.properties=J,N.renderLists=le,N.shadowMap=ue,N.state=P,N.info=ne}x!==Sn&&(z=new lx(x,n.width,n.height,o,r,s));const fe=new ZS(N,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return be},this.setPixelRatio=function(b){b!==void 0&&(be=b,this.setSize(Te,Oe,!1))},this.getSize=function(b){return b.set(Te,Oe)},this.setSize=function(b,U,q=!0){if(fe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=b,Oe=U,n.width=Math.floor(b*be),n.height=Math.floor(U*be),q===!0&&(n.style.width=b+"px",n.style.height=U+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Te*be,Oe*be).floor()},this.setDrawingBufferSize=function(b,U,q){Te=b,Oe=U,be=q,n.width=Math.floor(b*q),n.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===Sn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(de)},this.getViewport=function(b){return b.copy(ke)},this.setViewport=function(b,U,q,$){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,U,q,$),P.viewport(de.copy(ke).multiplyScalar(dn()).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,U,q,$){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,U,q,$),P.scissor(Re.copy(ot).multiplyScalar(dn()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){P.setScissorTest(lt=b)},this.setOpaqueSort=function(b){$e=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let $=0;if(b){let G=!1;if(pe!==null){const Me=pe.texture.format;G=m.has(Me)}if(G){const Me=pe.texture.type,Ae=p.has(Me),ye=C.getClearColor(),we=C.getClearAlpha(),Ie=ye.r,Ve=ye.g,Je=ye.b;Ae?(S[0]=Ie,S[1]=Ve,S[2]=Je,S[3]=we,k.clearBufferuiv(k.COLOR,0,S)):(w[0]=Ie,w[1]=Ve,w[2]=Je,w[3]=we,k.clearBufferiv(k.COLOR,0,w))}else $|=k.COLOR_BUFFER_BIT}U&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Ne,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),C.dispose(),le.dispose(),K.dispose(),Q.dispose(),J.dispose(),E.dispose(),H.dispose(),R.dispose(),ce.dispose(),he.dispose(),I.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",ls),fe.removeEventListener("sessionend",Ye),Vt.stop()};function Ne(b){b.preventDefault(),uo("WebGLRenderer: Context Lost."),F=!0}function Ge(){uo("WebGLRenderer: Context Restored."),F=!1;const b=ne.autoReset,U=ue.enabled,q=ue.autoUpdate,$=ue.needsUpdate,G=ue.type;Ue(),ne.autoReset=b,ue.enabled=U,ue.autoUpdate=q,ue.needsUpdate=$,ue.type=G}function xe(b){at("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const U=b.target;U.removeEventListener("dispose",st),Mt(U)}function Mt(b){kn(b),J.remove(b)}function kn(b){const U=J.get(b).programs;U!==void 0&&(U.forEach(function(q){I.releaseProgram(q)}),b.isShaderMaterial&&I.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,$,G,Me){U===null&&(U=en);const Ae=G.isMesh&&G.matrixWorld.determinantAffine()<0,ye=Mm(b,U,q,$,G);P.setMaterial($,Ae);let we=q.index,Ie=1;if($.wireframe===!0){if(we=R.getWireframeAttribute(q),we===void 0)return;Ie=2}const Ve=q.drawRange,Je=q.attributes.position;let Ce=Ve.start*Ie,Qe=(Ve.start+Ve.count)*Ie;Me!==null&&(Ce=Math.max(Ce,Me.start*Ie),Qe=Math.min(Qe,(Me.start+Me.count)*Ie)),we!==null?(Ce=Math.max(Ce,0),Qe=Math.min(Qe,we.count)):Je!=null&&(Ce=Math.max(Ce,0),Qe=Math.min(Qe,Je.count));const Ct=Qe-Ce;if(Ct<0||Ct===1/0)return;ce.setup(G,$,ye,q,we);let gt,ht=W;if(we!==null&&(gt=v.get(we),ht=ge,ht.setIndex(gt)),G.isMesh)$.wireframe===!0?(P.setLineWidth($.wireframeLinewidth*dn()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(G.isLine){let qt=$.linewidth;qt===void 0&&(qt=1),P.setLineWidth(qt*dn()),G.isLineSegments?ht.setMode(k.LINES):G.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else G.isPoints?ht.setMode(k.POINTS):G.isSprite&&ht.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qt=G._multiDrawStarts,Pe=G._multiDrawCounts,tn=G._multiDrawCount,ct=we?v.get(we).bytesPerElement:1,Zi=J.get($).currentProgram.getUniforms();for(let Yt=0;Yt<tn;Yt++)Zi.setValue(k,"_gl_DrawID",Yt),ht.render(qt[Yt]/ct,Pe[Yt])}else if(G.isInstancedMesh)ht.renderInstances(Ce,Ct,G.count);else if(q.isInstancedBufferGeometry){const qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,qt);ht.renderInstances(Ce,Ct,Pe)}else ht.render(Ce,Ct)};function Sr(b,U,q,$){B!==null&&b.isNodeMaterial&&B.setObject($,b),ut===!0&&Z.setState(b,q,!1),b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,Wi(b,U,$),b.side=dr,b.needsUpdate=!0,Wi(b,U,$),b.side=Tn):Wi(b,U,$)}this.compile=function(b,U,q=null){q===null&&(q=b),B!==null&&B.renderStart(b,U,q),T=K.get(q),T.init(U),M.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),zt=this.localClippingEnabled,ut=Z.init(this.clippingPlanes,zt),ut===!0&&Z.setGlobalState(this.clippingPlanes,U),B!==null&&ue.render(T.state.shadowsArray,q,U);const $=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Ae=0;Ae<Me.length;Ae++){const ye=Me[Ae];Sr(ye,q,U,G),$.add(ye)}else Sr(Me,q,U,G),$.add(Me)}),T=M.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(b,U,q=null){const $=this.compile(b,U,q);return new Promise(G=>{function Me(){if($.forEach(function(Ae){const we=J.get(Ae).currentProgram;(we===void 0||we.isReady())&&$.delete(Ae)}),$.size===0){G(b);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let vi=null;function Hi(b){vi&&vi(b)}function ls(){Vt.stop()}function Ye(){Vt.start()}const Vt=new Sh;Vt.setAnimationLoop(Hi),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(b){vi=b,fe.setAnimationLoop(b),b===null?Vt.stop():Vt.start()},fe.addEventListener("sessionstart",ls),fe.addEventListener("sessionend",Ye),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(b,U);const q=fe.enabled===!0&&fe.isPresenting===!0,$=z!==null&&(pe===null||q)&&z.begin(N,pe);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,U,pe),T=K.get(b,M.length),T.init(U),T.state.textureUnits=Q.getTextureUnits(),M.push(T),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ut.setFromArrayCamera(U):qe.setFromProjectionMatrix(xt,Un,U.reversedDepth),zt=this.localClippingEnabled,ut=Z.init(this.clippingPlanes,zt),A=le.get(b,_.length),A.init(),_.push(A),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&Gi(Ae,U,-1/0,N.sortObjects)}Gi(b,U,0,N.sortObjects),A.finish(),B!==null&&B.updateLights(T.state.lightsArray),N.sortObjects===!0&&A.sort($e,vt),un=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,un&&C.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),ut===!0&&Z.beginShadows();const G=T.state.shadowsArray;if(ue.render(G,b,U),ut===!0&&Z.endShadows(),($&&z.hasRenderPass())===!1){const Ae=A.opaque,ye=A.transmissive;if(T.setupLights(),U.isArrayCamera){const we=U.cameras;if(ye.length>0)for(let Ie=0,Ve=we.length;Ie<Ve;Ie++){const Je=we[Ie];us(Ae,ye,b,Je)}un&&C.render(b);for(let Ie=0,Ve=we.length;Ie<Ve;Ie++){const Je=we[Ie];Qn(A,b,Je,Je.viewport)}}else ye.length>0&&us(Ae,ye,b,U),un&&C.render(b),Qn(A,b,U)}pe!==null&&V===0&&(Q.updateMultisampleRenderTarget(pe),Q.updateRenderTargetMipmap(pe)),$&&z.end(N),b.isScene===!0&&b.onAfterRender(N,b,U),ce.resetDefaultState(),j=-1,se=null,M.pop(),M.length>0?(T=M[M.length-1],Q.setTextureUnits(T.state.textureUnits),ut===!0&&Z.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function Gi(b,U,q,$){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Ae=U.isArrayCamera?Ut:qe;if(!b.frustumCulled||b.intersectsFrustum(Ae)){$&&Rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);const ye=H.update(b),we=b.material;we.visible&&A.push(b,ye,we,q,Rt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){const Ae=U.isArrayCamera?Ut:qe;if(!b.frustumCulled||b.intersectsFrustum(Ae)){const ye=H.update(b),we=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Rt.copy(b.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Rt.copy(ye.boundingSphere.center)),Rt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(we)){const Ie=ye.groups;for(let Ve=0,Je=Ie.length;Ve<Je;Ve++){const Ce=Ie[Ve],Qe=we[Ce.materialIndex];Qe&&Qe.visible&&A.push(b,ye,Qe,q,Rt.z,Ce,U)}}else we.visible&&A.push(b,ye,we,q,Rt.z,null,U)}}}const Me=b.children;for(let Ae=0,ye=Me.length;Ae<ye;Ae++)Gi(Me[Ae],U,q,$)}function Qn(b,U,q,$){const{opaque:G,transmissive:Me,transparent:Ae}=b;T.setupLightsView(q),ut===!0&&Z.setGlobalState(N.clippingPlanes,q),$&&P.viewport(de.copy($)),G.length>0&&Vi(G,U,q),Me.length>0&&Vi(Me,U,q),Ae.length>0&&Vi(Ae,U,q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function us(b,U,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){const Ce=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new Xn(1,1,{generateMipmaps:!0,type:Ce?qn:Sn,minFilter:Ii,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Me=T.state.transmissionRenderTarget[$.id],Ae=$.viewport||de;Me.setSize(Ae.z*N.transmissionResolutionScale,Ae.w*N.transmissionResolutionScale);const ye=N.getRenderTarget(),we=N.getActiveCubeFace(),Ie=N.getActiveMipmapLevel();N.setRenderTarget(Me),N.getClearColor(re),ve=N.getClearAlpha(),ve<1&&N.setClearColor(16777215,.5),N.clear(),un&&C.render(q);const Ve=N.toneMapping;N.toneMapping=hi;const Je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),ut===!0&&Z.setGlobalState(N.clippingPlanes,$),Vi(b,q,$),Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Qe=0,Ct=U.length;Qe<Ct;Qe++){const gt=U[Qe],{object:ht,geometry:qt,material:Pe,group:tn}=gt;if(Pe.side===Tn&&ht.layers.test($.layers)){const ct=Pe.side;Pe.side=cn,Pe.needsUpdate=!0,sa(ht,q,$,qt,Pe,tn),Pe.side=ct,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(Q.updateMultisampleRenderTarget(Me),Q.updateRenderTargetMipmap(Me))}N.setRenderTarget(ye,we,Ie),N.setClearColor(re,ve),Je!==void 0&&($.viewport=Je),N.toneMapping=Ve}function Vi(b,U,q){const $=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Me=b.length;G<Me;G++){const Ae=b[G],{object:ye,geometry:we,group:Ie}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),ye.layers.test(q.layers)&&sa(ye,U,q,we,Ve,Ie)}}function sa(b,U,q,$,G,Me){B!==null&&G.isNodeMaterial&&B.setObject(b,G),b.onBeforeRender(N,U,q,$,G,Me),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(N,U,q,$,b,Me),G.transparent===!0&&G.side===Tn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,N.renderBufferDirect(q,U,$,G,b,Me),G.side=dr,G.needsUpdate=!0,N.renderBufferDirect(q,U,$,G,b,Me),G.side=Tn):N.renderBufferDirect(q,U,$,G,b,Me),b.onAfterRender(N,U,q,$,G,Me)}function aa(b){let U=0;for(const q of b)q.texture!==null&&U++;return U}function Wi(b,U,q){U.isScene!==!0&&(U=en);const $=J.get(b),G=T.state.lights,Me=T.state.shadowsArray,Ae=G.state.version,ye=I.getParameters(b,G.state,Me,U,q,T.state.lightProbeGridArray),we=I.getProgramCacheKey(ye);let Ie=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,$.fog=U.fog;const Ve=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=E.get(b.envMap||$.environment,Ve),$.envMapRotation=$.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",st),Ie=new Map,$.programs=Ie,$.programVariants=new Map);let Je=Ie.get(we);if(Je!==void 0){if($.currentProgram===Je&&$.lightsStateVersion===Ae)return ds(b,ye),Je}else ye.uniforms=I.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,q,ye),b.onBeforeCompile(ye,N),Je=I.acquireProgram(ye,we),Ie.set(we,Je),$.uniforms=ye.uniforms;const Ce=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=Z.uniform),ds(b,ye),$.needsLights=Em(b),$.lightsStateVersion=Ae,$.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.sunLights.value=G.state.sun,Ce.sunLightShadows.value=G.state.sunShadow,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.sunShadowMatrix.value=G.state.sunShadowMatrix,Ce.sunShadowCascade.value=G.state.sunShadowCascade,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),$.numLightProbeGrids=aa(T.state.lightProbeGridArray),$.currentProgram=Je,$.uniformsList=null,Je}function oa(b,U,q,$,G){const Me=J.get(b),Ae=Me.currentProgram.id+","+$+","+G;let ye=Me.programVariants.get(Ae);return ye===void 0?(ye=Wi(b,U,q),Me.programVariants.set(Ae,ye)):(Me.currentProgram=ye,Me.uniformsList=null,Me.outputColorSpace=$,Me.toneMapping=G),ye}function Xi(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Ya.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ds(b,U){const q=J.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Mm(b,U,q,$,G){U.isScene!==!0&&(U=en),Q.resetTextureUnits();const Me=U.fog,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?U.environment:null,ye=pe===null?N.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:tt.workingColorSpace,we=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ie=E.get($.envMap||Ae,we),Ve=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Je=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color;let gt=hi;$.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(gt=N.toneMapping);const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=ht!==void 0?ht.length:0,Pe=J.get($),tn=T.state.lights;if(ut===!0&&(zt===!0||b!==se)){const bt=b===se&&$.id===j;Z.setState($,b,bt)}let ct=!1,Zi=!1;$.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==tn.state.version||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Ie||$.fog===!0&&Pe.fog!==Me||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Z.numPlanes||Pe.numIntersection!==Z.numIntersection)||Pe.vertexAlphas!==Ve||Pe.vertexTangents!==Je||Pe.morphTargets!==Ce||Pe.morphNormals!==Qe||Pe.morphColors!==Ct||Pe.morphTargetsCount!==qt||Pe.numLightProbeGrids!==aa(T.state.lightProbeGridArray)?ct=!0:(Pe.outputColorSpace!==ye||Pe.toneMapping!==gt)&&(Zi=!0):(ct=!0,Pe.__version=$.version);let Yt=Pe.currentProgram;(ct===!0||Zi===!0)&&(Yt=Zi===!0?oa($,U,G,ye,gt):Wi($,U,G),B&&$.isNodeMaterial&&B.onUpdateProgram($,Yt,Pe));let ca=!1,xi=!1,qi=!1;const it=Yt.getUniforms(),Wt=Pe.uniforms;if(P.useProgram(Yt.program)&&(ca=!0,xi=!0,qi=!0),$.id!==j&&(j=$.id,xi=!0),ca||se!==b){P.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),it.setValue(k,"projectionMatrix",b.projectionMatrix),it.setValue(k,"viewMatrix",b.matrixWorldInverse);const Bt=it.map.cameraPosition;Bt!==void 0&&Bt.setValue(k,ln.setFromMatrixPosition(b.matrixWorld)),L.logarithmicDepthBuffer&&it.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&it.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,xi=!0,qi=!0)}if(Pe.needsLights&&(tn.state.sunShadowMap.length>0&&it.setValue(k,"sunShadowMap",tn.state.sunShadowMap,Q),tn.state.directionalShadowMap.length>0&&it.setValue(k,"directionalShadowMap",tn.state.directionalShadowMap,Q),tn.state.spotShadowMap.length>0&&it.setValue(k,"spotShadowMap",tn.state.spotShadowMap,Q),tn.state.pointShadowMap.length>0&&it.setValue(k,"pointShadowMap",tn.state.pointShadowMap,Q)),G.isSkinnedMesh){it.setOptional(k,G,"bindMatrix"),it.setOptional(k,G,"bindMatrixInverse");const bt=G.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),it.setValue(k,"boneTexture",bt.boneTexture,Q))}G.isBatchedMesh&&(it.setOptional(k,G,"batchingTexture"),it.setValue(k,"batchingTexture",G._matricesTexture,Q),it.setOptional(k,G,"batchingIdTexture"),it.setValue(k,"batchingIdTexture",G._indirectTexture,Q),it.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(k,"batchingColorTexture",G._colorsTexture,Q));const Cn=q.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ee.update(G,q,Yt),(xi||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,it.setValue(k,"receiveShadow",G.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=JS()),xi){if(it.setValue(k,"toneMappingExposure",N.toneMappingExposure),Pe.needsLights&&bm(Wt,qi),Me&&$.fog===!0&&te.refreshFogUniforms(Wt,Me),te.refreshMaterialUniforms(Wt,$,be,Oe,T.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const bt=y;let Bt=0;for(const ei of T.state.lightProbeGridArray)ei.texture!==null&&(bt.textures[Bt]=ei.texture,bt.min[Bt]=ei.boundingBox.min,bt.max[Bt]=ei.boundingBox.max,bt.resolution[Bt]=ei.resolution,Bt++);for(const ei in bt)bt[ei].length=Bt;Wt.probesSH.value=bt.textures,Wt.probesMin.value=bt.min,Wt.probesMax.value=bt.max,Wt.probesResolution.value=bt.resolution}Ya.upload(k,Xi(Pe),Wt,Q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Ya.upload(k,Xi(Pe),Wt,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&it.setValue(k,"center",G.center),it.setValue(k,"modelViewMatrix",G.modelViewMatrix),it.setValue(k,"normalMatrix",G.normalMatrix),it.setValue(k,"modelMatrix",G.matrixWorld),$.uniformsGroups!==void 0){const bt=$.uniformsGroups;for(let Bt=0,ei=bt.length;Bt<ei;Bt++){const Pu=bt[Bt];he.update(Pu,Yt),he.bind(Pu,Yt)}}return Yt}function bm(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function Em(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(b,U,q){const $=J.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),J.get(b.texture).__webglTexture=U,J.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const q=J.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){pe=b,ie=U,V=q;let $=null,G=!1,Me=!1;if(b){const ye=J.get(b);if(ye.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(k.FRAMEBUFFER,ye.__webglFramebuffer),de.copy(b.viewport),Re.copy(b.scissor),Be=b.scissorTest,P.viewport(de),P.scissor(Re),P.setScissorTest(Be),j=-1;return}else if(ye.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(ye.__hasExternalTextures)Q.rebindTextures(b,J.get(b.texture).__webglTexture,J.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ve=b.depthTexture;if(ye.__boundDepthTexture!==Ve){if(Ve!==null&&J.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(Me=!0);const Ie=J.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?$=Ie[U][q]:$=Ie[U],G=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?$=J.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?$=Ie[q]:$=Ie,de.copy(b.viewport),Re.copy(b.scissor),Be=b.scissorTest}else de.copy(ke).multiplyScalar(be).floor(),Re.copy(ot).multiplyScalar(be).floor(),Be=lt;if(q!==0&&($=Y),P.bindFramebuffer(k.FRAMEBUFFER,$)&&P.drawBuffers(b,$),P.viewport(de),P.scissor(Re),P.setScissorTest(Be),G){const ye=J.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,ye.__webglTexture,q)}else if(Me){const ye=U;for(let we=0;we<b.textures.length;we++){const Ie=J.get(b.textures[we]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+we,Ie.__webglTexture,q,ye)}}else if(b!==null&&q!==0){const ye=J.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ye.__webglTexture,q)}j=-1};function Cu(b){const U=J.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=L.textureFormatReadable(b.format),U.__typeReadable=L.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,q,$,G,Me,Ae,ye=0){if(!(b&&b.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we){P.bindFramebuffer(k.FRAMEBUFFER,we);try{const Ie=b.textures[ye],Ve=Ie.format,Je=Ie.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ye);const Ce=Cu(Ie);if(Ce.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-$&&q>=0&&q<=b.height-G&&k.readPixels(U,q,$,G,me.convert(Ve),me.convert(Je),Me)}finally{const Ie=pe!==null?J.get(pe).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,$,G,Me,Ae,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=J.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we)if(U>=0&&U<=b.width-$&&q>=0&&q<=b.height-G){P.bindFramebuffer(k.FRAMEBUFFER,we);const Ie=b.textures[ye],Ve=Ie.format,Je=Ie.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ye);const Ce=Cu(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),k.readPixels(U,q,$,G,me.convert(Ve),me.convert(Je),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ct=pe!==null?J.get(pe).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,Ct);const gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await sg(k,gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Qe),k.deleteSync(gt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){const $=Math.pow(2,-q),G=Math.floor(b.image.width*$),Me=Math.floor(b.image.height*$),Ae=U!==null?U.x:0,ye=U!==null?U.y:0;Q.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Ae,ye,G,Me),P.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,$=null,G=0,Me=0){let Ae,ye,we,Ie,Ve,Je,Ce,Qe,Ct;const gt=b.isCompressedTexture?b.mipmaps[Me]:b.image;if(q!==null)Ae=q.max.x-q.min.x,ye=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Ve=q.min.y,Je=q.isBox3?q.min.z:0;else{const it=Math.pow(2,-G);Ae=Math.floor(gt.width*it),ye=Math.floor(gt.height*it),b.isDataArrayTexture?we=gt.depth:b.isData3DTexture?we=Math.floor(gt.depth*it):we=1,Ie=0,Ve=0,Je=0}$!==null?(Ce=$.x,Qe=$.y,Ct=$.z):(Ce=0,Qe=0,Ct=0);const ht=me.convert(U.format),qt=me.convert(U.type);let Pe;U.isData3DTexture?(Q.setTexture3D(U,0),Pe=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Pe=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Pe=k.TEXTURE_2D),P.activeTexture(k.TEXTURE0),P.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const tn=P.getParameter(k.UNPACK_ROW_LENGTH),ct=P.getParameter(k.UNPACK_IMAGE_HEIGHT),Zi=P.getParameter(k.UNPACK_SKIP_PIXELS),Yt=P.getParameter(k.UNPACK_SKIP_ROWS),ca=P.getParameter(k.UNPACK_SKIP_IMAGES);P.pixelStorei(k.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const xi=b.isDataArrayTexture||b.isData3DTexture,qi=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const it=J.get(b),Wt=J.get(U),Cn=J.get(it.__renderTarget),bt=J.get(Wt.__renderTarget);P.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<we;Bt++)xi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(b).__webglTexture,G,Je+Bt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,J.get(U).__webglTexture,Me,Ct+Bt)),k.blitFramebuffer(Ie,Ve,Ie+Ae,Ve+ye,Ce,Qe,Ce+Ae,Qe+ye,k.DEPTH_BUFFER_BIT,k.NEAREST);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||J.has(b)){const it=J.get(b),Wt=J.get(U);P.bindFramebuffer(k.READ_FRAMEBUFFER,D),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,X);for(let Cn=0;Cn<we;Cn++)xi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,it.__webglTexture,G,Je+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,it.__webglTexture,G),qi?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,Me,Ct+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wt.__webglTexture,Me),G!==0?k.blitFramebuffer(Ie,Ve,Ie+Ae,Ve+ye,Ce,Qe,Ce+Ae,Qe+ye,k.COLOR_BUFFER_BIT,k.NEAREST):qi?k.copyTexSubImage3D(Pe,Me,Ce,Qe,Ct+Cn,Ie,Ve,Ae,ye):k.copyTexSubImage2D(Pe,Me,Ce,Qe,Ie,Ve,Ae,ye);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else qi?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Pe,Me,Ce,Qe,Ct,Ae,ye,we,ht,qt,gt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Pe,Me,Ce,Qe,Ct,Ae,ye,we,ht,gt.data):k.texSubImage3D(Pe,Me,Ce,Qe,Ct,Ae,ye,we,ht,qt,gt):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,Ce,Qe,Ae,ye,ht,qt,gt.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,Ce,Qe,gt.width,gt.height,ht,gt.data):k.texSubImage2D(k.TEXTURE_2D,Me,Ce,Qe,Ae,ye,ht,qt,gt);P.pixelStorei(k.UNPACK_ROW_LENGTH,tn),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct),P.pixelStorei(k.UNPACK_SKIP_PIXELS,Zi),P.pixelStorei(k.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(k.UNPACK_SKIP_IMAGES,ca),Me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(Pe),P.unbindTexture()},this.initRenderTarget=function(b){J.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),P.unbindTexture()},this.resetState=function(){ie=0,V=0,pe=null,P.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const Nd=.003,po=1.2;function ul(t,e,n,i){return{yaw:t-n*Nd,pitch:Mn.clamp(e-i*Nd,-po,po)}}function Ih(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:Mn.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-po,po)}}class ey{yaw=0;pitch=0;freeMode=!1;anchor=new O;freePos=new O;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new O(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new On().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,ul(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,Ih(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new O;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new O(-i.z,0,i.x),s=new O;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=Mn.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=Mn.clamp(this.freePos.y,1.1,4.4),this.freePos.z=Mn.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function ty(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}const Ms=new O;function wn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;Ms.copy(e),Ms[i]=0,Ms.normalize();const l=.5*a/(a+o),u=1-Ms.angleTo(t)/c;return Math.sign(Ms[n])===1?u*l:o/(a+o)+l+l*(1-u)}class Xl extends _r{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new O,l=new O,u=new O(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,g=d.length/6,x=new O,m=.5/a;for(let p=0,S=0;p<d.length;p+=3,S+=2)switch(c.fromArray(d,p),l.copy(c),l.x-=Math.sign(l.x)*m,l.y-=Math.sign(l.y)*m,l.z-=Math.sign(l.z)*m,l.normalize(),d[p+0]=u.x*Math.sign(c.x)+l.x*s,d[p+1]=u.y*Math.sign(c.y)+l.y*s,d[p+2]=u.z*Math.sign(c.z)+l.z*s,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/g)){case 0:x.set(1,0,0),h[S+0]=wn(x,l,"z","y",s,i),h[S+1]=1-wn(x,l,"y","z",s,n);break;case 1:x.set(-1,0,0),h[S+0]=1-wn(x,l,"z","y",s,i),h[S+1]=1-wn(x,l,"y","z",s,n);break;case 2:x.set(0,1,0),h[S+0]=1-wn(x,l,"x","z",s,e),h[S+1]=wn(x,l,"z","x",s,i);break;case 3:x.set(0,-1,0),h[S+0]=1-wn(x,l,"x","z",s,e),h[S+1]=1-wn(x,l,"z","x",s,i);break;case 4:x.set(0,0,1),h[S+0]=1-wn(x,l,"x","y",s,e),h[S+1]=1-wn(x,l,"y","x",s,n);break;case 5:x.set(0,0,-1),h[S+0]=wn(x,l,"x","y",s,e),h[S+1]=1-wn(x,l,"y","x",s,n);break}}static fromJSON(e){return new Xl(e.width,e.height,e.depth,e.segments,e.radius)}}const Dd=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function ny(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return Dd[e%Dd.length]}function Ka(t,e,n,i){const a=(d,f)=>d<n.minX+.2||d>n.maxX-.2||f<n.minZ+.2||f>n.maxZ-.2||i.some(h=>d>h.minX-.2&&d<h.maxX+.2&&f>h.minZ-.2&&f<h.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],c=new Set(["0,0"]);let l=-1;for(let d=0;d<o.length&&d<12e3;d++){const f=o[d];if(Math.hypot(f.x-e.x,f.z-e.z)<.48){l=d;break}for(const[h,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const x=f.x+h,m=f.z+g,p=`${Math.round((x-t.x)/.45)},${Math.round((m-t.z)/.45)}`;!c.has(p)&&!a(x,m)&&(c.add(p),o.push({x,z:m,parent:d}))}}if(l<0)return[];const u=[];for(let d=l;d>=0;d=o[d].parent)u.push({x:o[d].x,z:o[d].z});return u.reverse().slice(1)}const Br={x:-7.8,z:-4.6},iy=[0,4,8,2,6,10,1,5,9,3,7,11];function dl(t=0){const e=-Math.PI/2+iy[(t%12+12)%12]*Math.PI/6;return{x:Br.x+Math.cos(e)*2.15,z:Br.z+Math.sin(e)*2.15}}function fl(t,e=0){if(t==="culture")return dl(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const er=(t,e,n)=>t+(e-t)*n;function Lh(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=er(1.35,.5,n),s=er(2.2,.6,n),a=e?0:n<.35?er(.06,0,n/.35):0,o=er(9,4,n),c=n>.45?er(0,.42,(n-.45)/.55):0,l=n>.55?er(0,.12,(n-.55)/.45):0,u=n>.5?er(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:c,slump:l,saturation:u,zzz:n>=.8}}function ry(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Oi(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const Ud=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function Po(t){const e=Oi(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+Ud[n].map((r,s)=>Math.round(r+(Ud[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const sy={EXPLOIT:["Exploiting","calm"],BOREDOM_SNAP:["Boredom snap","snap"],YOKED_SNAP:["Boredom snap","snap"],PARADIGM_BREAKOUT:["Paradigm breakout","breakout"],CONVERGED:["Converged","converged"],FRUSTRATED:["Frustrated","frustrated"]};function jr(t){if(!t)return{label:"",tone:"calm"};const e=sy[t];return e?{label:e[0],tone:e[1]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm"}}function ay(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function oy(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const hl=t=>Math.max(0,Math.min(1,t)),cy=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,Od=t=>{const e=hl(t);return e===0||e===1?e:hl(cy(e))};function ly(t,e){const n=hl(t),i=Math.max(0,Math.floor(e)),r=Od(n/.4),s=Array.from({length:i},(a,o)=>{const c=.4+o*.6/Math.max(1,i),l=.6/Math.max(1,i);return Od((n-c)/l)});return{room:r,agents:s}}function uy(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function dy(){const t=new Ug;t.background=new Ze("#e4edf3"),t.fog=new $l("#e4edf3",34,90);const e=new Nn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new _r(1,1,1),r=(L,P=.68,ne=0)=>new qa({color:L,roughness:P,metalness:ne}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),c=r("#b1bec5",.32,.65),l=r("#c8d3d6"),u=r("#a8b5a1"),d=r("#b4a38c",.8),f=r("#928572");r("#18252a",.38);const h=r("#f9f4e6"),g=r("#3e8493"),x=r("#d2a468"),m=new Qg({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:Tn}),p=new tr({color:"#fff6dd"}),S=new tr({color:"#80b7ab"}),w=(L,P,ne,J,Q,E,v,R=t)=>{const H=new _t(i,v);return H.position.set(L,P,ne),H.scale.set(J,Q,E),R.add(H),H},y=(L,P,ne,J,Q,E,v=t,R=20)=>{const H=new _t(new Ys(J,J,Q,R),E);return H.position.set(L,P,ne),v.add(H),H},A=(L,P,ne,J,Q,E=t)=>{const v=new _t(new Vl(J,16,12),Q);return v.position.set(L,P,ne),E.add(v),v},T=(L,P,ne,J)=>n.push({minX:L-ne/2,maxX:L+ne/2,minZ:P-J/2,maxZ:P+J/2}),_=(L,P,ne,J,Q=t)=>{const E=P.clone().sub(L),v=new _t(new Ys(ne,ne,E.length(),12),J);return v.position.copy(L).add(P).multiplyScalar(.5),v.quaternion.setFromUnitVectors(new O(0,1,0),E.normalize()),Q.add(v),v},M=(L,P,ne,J,Q,E,v="#f5f4ec",R="#425859",H=0)=>{const I=document.createElement("canvas");I.width=1024,I.height=Math.max(64,Math.round(1024*E/Q));const te=I.getContext("2d");te.fillStyle=v,te.fillRect(0,0,I.width,I.height);const le=L.split(`
`),K=Math.min(I.height/(le.length+1),I.width/(Math.max(...le.map(ee=>ee.length))*.62));te.fillStyle=R,te.textAlign="center",te.textBaseline="middle",te.font=`500 ${K}px sans-serif`,le.forEach((ee,W)=>te.fillText(ee,512,I.height/2+(W-(le.length-1)/2)*K*1.3));const Z=new Qi(I);Z.colorSpace=Ot;const ue=new tr({map:Z,side:Tn}),C=new _t(new sr(Q,E),ue);return C.position.set(P,ne,J),C.rotation.y=H,t.add(C),C},z=(L,P,ne)=>{const J=document.createElement("canvas");J.width=960,J.height=360;const Q=J.getContext("2d");Q.fillStyle="#fff9ea",Q.strokeStyle="#b6c9c4",Q.lineWidth=4,Q.beginPath(),Q.roundRect(4,4,952,310,30),Q.fill(),Q.stroke(),Q.beginPath(),Q.moveTo(450,313),Q.lineTo(480,352),Q.lineTo(510,313),Q.fill(),Q.textAlign="left",Q.fillStyle="#35716c",Q.font="bold 38px sans-serif",Q.fillText(L.toUpperCase(),34,48),Q.fillStyle="#263b41",Q.font="48px sans-serif";const E=P.replace(/\s+/g," ").trim().split(" "),v=[];let R="";for(const I of E){const te=R?R+" "+I:I;Q.measureText(te).width>875&&R?(v.push(R),R=I):R=te}R&&v.push(R),v.slice(0,3).forEach((I,te)=>{let le=I;te===2&&v.length>3&&(le=le.replace(/.{0,3}$/,"…")),Q.fillText(le,34,110+te*53)}),Q.fillStyle="#6c817c",Q.font="32px sans-serif",Q.fillText(ne.length?"WITH "+ne.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const H=new Qi(J);return H.colorSpace=Ot,new _t(new sr(2.7,1.0125),new tr({map:H,transparent:!0,side:Tn,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new n0("#f5faff","#9caeb8",2.15));const N=new ud("#ffffff",2.2);N.position.set(-8,11,3),t.add(N);const F=new ud("#d0e9fa",.85);F.position.set(8,5,-8),t.add(F);const B=document.createElement("canvas");B.width=512,B.height=512;const Y=B.getContext("2d");Y.fillStyle="#d9e2e6",Y.fillRect(0,0,512,512);for(let L=0;L<1700;L++){const P=Math.sin(L*41.77)*.5+.5,ne=Math.sin(L*19.31+5)*.5+.5;Y.fillStyle=L%3?"#ecf0f1":"#c3d0d6",Y.fillRect(P*512,ne*512,1+L%3,1+L%2)}const D=new Qi(B);D.colorSpace=Ot,D.wrapS=D.wrapT=ro,D.repeat.set(8,9),D.anisotropy=8,w(0,-.12,0,24,.24,28,new qa({map:D,roughness:.85})),w(0,2.5,-13.5,24,5,.3,s),w(11.75,2.5,0,.3,5,27,s),w(0,.43,-13.27,23.5,.86,.12,d),w(11.53,.43,0,.12,.86,26.5,d),w(0,.08,-13.1,23.5,.16,.06,o),w(11.38,.08,0,.06,.16,26.5,o);const X=w(0,4.9,0,24,.16,28,s);X.userData.overhead=!0;for(const L of[-12,-6,0,6,12])w(-11.6,2.5,L,.22,5,.14,s);w(-11.6,.55,0,.3,1.1,27,s),w(-11.6,4.65,0,.3,.7,27,s),w(-11.68,2.75,0,.025,3.5,27,m);for(const L of[1.12,3.8])w(-11.4,L,0,.12,.07,27,c);w(-7.9,2.25,12.7,7.5,4.5,.14,s),w(7.9,2.25,12.7,7.5,4.5,.14,s);for(const L of[-3.9,3.9])w(L,2.25,12.65,.12,4.5,.18,c);w(0,2.25,12.8,7.7,4.5,.025,m),M("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const L of[-8,-1,6]){w(0,4.35,L,20,.08,.07,o);for(const P of[-7,0,7])y(P,4.18,L,.13,.22,o),y(P,4.06,L,.1,.025,p)}const ie=new _t(new Os(1.8,.025,8,64),f);ie.rotation.x=Math.PI/2,ie.position.set(0,3.9,.5),t.add(ie);for(const L of[-1.6,1.6])_(new O(L,3.9,.5),new O(L,4.84,.5),.012,c);w(-28,-.65,-2,45,1,70,r("#b0bf9d"));const V=r("#98af91"),pe=r("#897e69");for(let L=0;L<14;L++){const P=-17-L%3*3,ne=-25+L*4.1;y(P,1.3,ne,.12,3,pe);const J=A(P,3,ne,1.25+L%3*.2,V);J.scale.y=1.45}function j(L,P){y(L,.32,P,.34,.64,s),y(L,.66,P,.29,.04,f);for(let ne=0;ne<6;ne++){const J=ne*2.4;_(new O(L,.65,P),new O(L+Math.cos(J)*.25,1.5+ne%3*.18,P+Math.sin(J)*.25),.025,u),A(L+Math.cos(J)*.3,1.3+ne%3*.18,P+Math.sin(J)*.3,.16,u).scale.set(.55,2,.8)}T(L,P,.8,.8)}j(-10.3,8.4),j(-10.3,-10.8),j(10.3,10.8);function se(L,P,ne,J){w(L,.1,P,ne-.17,.2,J-.12,o),w(L,.51,P,ne,.78,J,l),w(L,.94,P,ne+.08,.08,J+.08,o);const Q=Math.round(ne/.85);for(let E=0;E<Q;E++){const v=L-ne/2+(E+.5)*ne/Q;w(v,.53,P+J/2+.009,ne/Q-.025,.7,.018,a),w(v,.77,P+J/2+.028,.29,.025,.035,c)}T(L,P,ne+.12,J+.12)}function de(L,P,ne,J="#8ab9ad"){w(L,1,P,.48,.035,.3,c),w(L,1.22,P,.055,.4,.055,c),w(L,1.53,P,.94,.59,.055,o),M(ne+`
—  RESEARCH IN PROGRESS  —`,L,1.53,P+.032,.86,.51,"#203137",J),w(L,1.01,P+.36,.65,.035,.2,s);for(let Q=0;Q<5;Q++)w(L-.25+Q*.12,1.031,P+.36,.07,.007,.11,c)}function Re(L,P,ne){w(L,1.02,P,.56,.09,.3,u);for(let J=0;J<5;J++)y(L-.22+J*.11,1.16,P,.031,.25,a,t,10),y(L-.22+J*.11,1.3,P,.038,.025,ne,t,10)}function Be(L,P){const ne=new Hn;ne.position.set(L,1,P),t.add(ne);const J=w(0,.045,0,.58,.09,.55,a,ne);J.rotation.y=-.1;const Q=w(0,.36,-.15,.14,.62,.16,a,ne);Q.rotation.x=-.15;const E=w(0,.61,-.03,.18,.15,.37,a,ne);E.rotation.x=-.2;const v=y(0,.67,.1,.07,.27,o,ne);v.rotation.x=-.38,y(0,.47,.1,.065,.18,c,ne),w(0,.23,.08,.4,.04,.35,o,ne),y(0,.11,.08,.12,.04,p,ne),A(.13,.32,-.11,.065,o,ne)}function re(L,P){w(L,1.01,P,.35,.025,.22,c),w(L,1.25,P,.025,.45,.025,c),w(L,1.46,P,.35,.035,.05,s);for(let ne=0;ne<3;ne++){const J=L-.12+ne*.12;y(J,1.28,P,.026,.32,a,t,12),y(J,1.08,P,.007,.12,c,t,8),y(J,1.46,P,.035,.035,ne%2?g:x,t,12)}}const ve=Br.x,Te=Br.z;y(ve,.43,Te,.18,.78,c),y(ve,.88,Te,1.38,.12,d),y(ve,.95,Te,1.31,.025,a),T(ve,Te,2.8,2.8);for(let L=0;L<12;L++){const P=L*Math.PI/6,ne=ve+Math.sin(P)*2.15,J=Te+Math.cos(P)*2.15;y(ne,.36,J,.29,.07,c),y(ne,.18,J,.035,.32,c);const Q=y(ne,.43,J,.31,.09,L%3===0?r("#dfabc5"):u);Q.userData.discussionSeat=!0;const E=w(ve+Math.sin(P)*.87,.979,Te+Math.cos(P)*.87,.28,.015,.21,h);E.rotation.y=-P}y(ve,.99,Te,.19,.025,x),M("01   IDEATION ROUNDTABLE",ve,2.65,-7.2,4.7,.38),M("SHARED QUESTIONS / GROUP DISCUSSION",ve,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),se(5.4,-2.8,6.2,1.7);const Oe=w(5.6,1.44,-2.85,1.08,.88,.3,x);Oe.rotation.x=-.12,w(5.6,1.65,-2.666,.81,.25,.035,o),M("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const be=y(5.6,1.3,-2.64,.16,.07,o);be.rotation.x=Math.PI/2;const $e=w(5.64,1.36,-2.59,.025,.11,.025,s);$e.rotation.z=-.5;for(const[L,P]of[[5.28,g],[5.88,x]])A(L,1.1,-2.64,.045,o),_(new O(L,1.1,-2.61),new O(L+.35,1.03,-2.1),.018,P),_(new O(L+.35,1.03,-2.1),new O(L+.9,1.04,-2.17),.018,P);w(7.2,1.01,-2.8,.95,.055,.68,u);for(let L=0;L<4;L++)w(6.9+L*.19,1.08,-2.8,.1,.09,.18,o),w(6.9+L*.19,1.04,-2.8,.02,.018,.57,c);de(3.3,-3.08,"PHYSICS / MEASUREMENTS"),M("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),se(.2,-10.6,5.8,1.5),de(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let L=0;L<5;L++){const P=.25+L*.43,ne=-10.55+L%2*.19,J=[g,x,u][L%3];y(P,1.16,ne,.13,.35,m),y(P,1.09,ne,.115,.19,J),y(P,1.4,ne,.055,.15,m),y(P,1.49,ne,.065,.045,o)}Re(2.2,-10.9,g),re(.1,-11.05),M("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),M("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),M("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let L=0;L<5;L++)w(-2.2+L*1.12,2.68,-13.29,.85,.06,.02,L%2?u:d);se(-7.3,5.4,4.8,1.45),de(-8.6,5.18,"BIOLOGY / CELL CULTURES"),Be(-7.15,5.32);for(let L=0;L<3;L++){const P=-6.25+L*.43,ne=5.5+L%2*.3;y(P,1.025,ne,.18,.055,m),y(P,1.045,ne,.16,.015,u);for(let J=0;J<5;J++){const Q=J*2.4,E=A(P+Math.cos(Q)*.1,1.065,ne+Math.sin(Q)*.1,.035,L%2?x:g);E.scale.y=.35}}Re(-5.55,5.15,g),M("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const L of[-9.9,-7.9,-5.9])w(10.75,1.22,L,1.4,2.4,1.5,a),w(10.02,1.22,L,.035,2.18,1.35,l),w(9.98,1.35,L+.42,.035,.43,.035,c),T(10.75,L,1.5,1.6);M("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),se(9.3,7.2,3.7,1.35),w(9.5,.99,7.1,.8,.025,.6,c),w(9.5,1.008,7.1,.63,.015,.46,o),_(new O(9.5,1,6.8),new O(9.5,1.5,6.8),.025,c),_(new O(9.5,1.5,6.8),new O(9.5,1.5,7.05),.025,c),M("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[L,P]of[[3.7,-.5],[-7.5,7.7]]){y(L,.66,P,.32,.12,u),y(L,.34,P,.045,.56,c);for(let ne=0;ne<4;ne++){const J=ne*Math.PI/2;_(new O(L,.12,P),new O(L+Math.cos(J)*.37,.08,P+Math.sin(J)*.37),.025,c)}T(L,P,.7,.7)}y(0,.13,.5,1.85,.26,f),y(0,.52,.5,1.7,.55,d),y(0,.84,.5,1.84,.1,a),y(0,.9,.5,1.62,.035,o),T(0,.5,3.7,3.7),M("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const vt=new Hn;vt.position.set(0,.95,.5),t.add(vt);const ke=[];for(let L=0;L<36;L++){const P=L*2.39996,ne=Math.sqrt(L/36)*1.35,J=A(Math.cos(P)*ne,.15+L%5*.11,Math.sin(P)*ne,.045+L%3*.014,L%4===0?x:u,vt);ke.push(J)}for(const L of[-1.45,1.45])for(const P of[-1.1,2.1])y(L,1.03,P,.018,.22,c);const ot=[u,d,g,h,x];for(const L of[-6.2,6.2]){for(const P of[L-.9,L+.9])w(P,1.75,-12.7,.1,3.5,.5,d);for(const P of[.25,1.25,2.25,3.25]){w(L,P,-12.7,1.9,.075,.6,d);for(let ne=0;ne<6;ne++)w(L-.7+ne*.27,P+.3,-12.7,.17,.5-ne%3*.06,.32,ot[ne%5])}T(L,-12.7,2.05,.75)}M("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),M("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function lt(L,P,ne){const J=document.createElement("canvas");J.width=256,J.height=64;const Q=J.getContext("2d");Q.fillStyle="rgba(23,35,44,.86)",Q.beginPath(),Q.roundRect(4,6,248,52,14),Q.fill(),Q.fillStyle="#ffffff26",Q.beginPath(),Q.roundRect(16,38,224,10,5),Q.fill(),P!=null&&(Q.fillStyle=Po(P),Q.beginPath(),Q.roundRect(16,38,Math.max(10,224*P/100),10,5),Q.fill()),Q.fillStyle="#f4f0e4",Q.font="600 21px sans-serif",Q.textBaseline="middle",Q.fillText(P==null?"Boredom —":`Bored ${Math.round(P)}%`,18,22),ne&&(Q.textAlign="right",Q.fillStyle="#ddc270",Q.font="600 15px sans-serif",Q.fillText(ne.toUpperCase(),238,22));const E=L.material;E.map?.dispose(),E.map=new Qi(J),E.map.colorSpace=Ot,E.needsUpdate=!0}const qe=(()=>{const L=document.createElement("canvas");L.width=128,L.height=128;const P=L.getContext("2d");P.fillStyle="#e9e4f4",P.strokeStyle="#31434b",P.lineWidth=6,P.font="700 40px sans-serif";for(const[J,Q,E,v]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])P.font=`700 ${v}px sans-serif`,P.fillStyle="#31434b",P.fillText(J,Q+3,E+3),P.fillStyle="#e9e4f4",P.fillText(J,Q,E);const ne=new Qi(L);return ne.colorSpace=Ot,ne})(),Ut=(L,P,ne)=>{const J=Math.atan2(Math.sin(P-L),Math.cos(P-L));return Math.abs(J)<ne?P:L+Math.sign(J)*ne},ut=new Map;let zt=1;function xt(L,P,ne,J,Q,E){const v=new Hn;v.position.set(L,0,P),v.rotation.y=ne,t.add(v);const R=ny(E),H=r(R.shell,.62),I=r("#293b42",.8),te=r(R.accent,.48),le=r(R.trim,.57),K=new tr({color:"#263b41",side:cn}),Z=J.startsWith("B")?u:J.startsWith("C")?x:g,ue=(Ye,Vt,Gi,Qn,us,Vi,sa,aa=v,Wi=.055)=>{const oa=new Xl(Qn,us,Vi,3,Math.min(Wi,Qn/3,us/3,Vi/3)),Xi=new _t(oa,sa);Xi.position.set(Ye,Vt,Gi),aa.add(Xi);const ds=new _t(oa,K);return ds.scale.setScalar(1.055),Xi.add(ds),Xi};for(const Ye of[-.13,.13])ue(Ye,.42,0,.16,.4,.18,H),A(Ye,.19,.055,.12,te,v).scale.set(.95,.68,1.4);ue(0,.99,0,.54,.61,.35,H,v,.1),ue(0,.72,0,.57,.13,.37,H,v,.06),w(0,.98,.184,.012,.45,.012,I,v);const C=w(-.105,1.21,.19,.16,.07,.025,H,v);C.rotation.z=-.55;const ee=w(.105,1.21,.19,.16,.07,.025,H,v);ee.rotation.z=.55,y(0,1.36,0,.09,.12,te,v);const W=new Hn;if(W.position.set(0,1.64,0),v.add(W),R.head==="round"){const Ye=A(0,0,0,.265,H,W);Ye.scale.set(1.21,1,.92);const Vt=new _t(Ye.geometry,K);Vt.scale.setScalar(1.055),Ye.add(Vt)}else ue(0,0,0,.59,R.ears==="compact"?.44:.49,.45,H,W,R.head==="monitor"?.055:.13);const ge=R.head==="monitor";ge&&ue(0,-.005,.232,.49,.36,.025,I,W,.06);for(const Ye of[-1,1]){const Vt=y(Ye*.335,0,0,.125,.09,te,W);Vt.rotation.z=Math.PI/2;const Gi=y(Ye*.389,0,0,R.ears==="compact"?.06:.085,.025,le,W);if(Gi.rotation.z=Math.PI/2,R.ears==="ring"){const Qn=new _t(new Os(.125,.012,6,24),I);Qn.rotation.y=Math.PI/2,Qn.position.set(Ye*.385,0,0),W.add(Qn)}}const me=R.antenna==="pair"?[-.17,.17]:[R.antenna==="offset-right"?.15:R.antenna==="offset-left"?-.16:0];for(const Ye of me)_(new O(Ye,.23,0),new O(Ye+(R.antenna==="offset-right"?.045:0),.39,0),.018,I,W),A(Ye+(R.antenna==="offset-right"?.045:0),.4,0,.047,le,W);const ce=document.createElement("canvas");ce.width=256,ce.height=200;const he=ce.getContext("2d"),Ue=ge?"#fff8e4":"#263b41";he.fillStyle=Ue,he.strokeStyle=Ue,he.lineWidth=12,he.lineCap="round";for(const Ye of[82,174])he.beginPath(),R.eyes==="happy"?(he.arc(Ye,79,15,Math.PI,Math.PI*2),he.stroke()):(he.ellipse(Ye,76,10,17,0,0,Math.PI*2),he.fill());he.fillStyle="#f29b40";for(const Ye of[52,204])he.beginPath(),he.ellipse(Ye,112,13,8,0,0,Math.PI*2),he.fill();he.fillStyle="#263b41",he.beginPath(),he.ellipse(128,123,24,28,0,0,Math.PI),he.closePath(),he.fill(),he.fillStyle="#f18540",he.beginPath(),he.ellipse(128,137,13,9,0,0,Math.PI*2),he.fill();const fe=new Qi(ce);fe.colorSpace=Ot;const Ne=new tr({map:fe,transparent:!0,depthWrite:!1}),Ge=new _t(new sr(.49,.38),Ne);Ge.position.set(0,-.01,.255),W.add(Ge);const xe=new Hn;if(xe.position.set(.32,1.22,0),v.add(xe),ue(0,-.12,0,.16,.29,.19,H,xe,.065),A(0,-.28,.07,.085,te,xe),ue(0,-.29,.16,.13,.12,.2,H,xe,.05),A(0,-.29,.28,.092,te,xe),ue(-.32,1.04,0,.16,.36,.19,H,v,.07),A(-.32,.84,.06,.09,te,v),R.prop==="magnifier"){const Ye=new _t(new Os(.1,.018,8,24),te);Ye.position.set(.32,1.05,.4),v.add(Ye),_(new O(.32,.96,.4),new O(.32,.84,.4),.022,I,v);const Vt=y(.32,1.05,.4,.084,.008,m,v);Vt.rotation.x=Math.PI/2}else if(R.prop==="clipboard"){ue(-.31,.96,.23,.22,.29,.035,le,v,.025),w(-.31,.97,.253,.17,.22,.008,h,v);for(let Ye=0;Ye<3;Ye++)w(-.31,.92+Ye*.05,.261,.11,.012,.005,te,v)}else{y(-.31,.97,.17,.028,.15,te,v);const Ye=new _t(new Gl(.078,.15,16),le);Ye.position.set(-.31,.86,.17),v.add(Ye)}const st=A(-.17,1.22,.19,.018,S,v);st.name="agent-status-led";const Mt=M(J,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(Mt),v.add(Mt),w(.12,.93,.19,.2,.045,.015,Z,v);const kn=M(J.toUpperCase(),L,2.07,P+.16,.58,.18,"#f4f8fa","#31434b");v.userData.ownedMaterials=[H,I,te,le,K,Ne,Mt.material],v.userData.ownedTextures=[fe,Mt.material.map];const Sr=new oc(new Za({transparent:!0,depthTest:!1}));Sr.scale.set(.8,.8,1),t.add(Sr);const vi=new oc(new Za({transparent:!0,depthTest:!1}));vi.scale.set(.86,.215,1),vi.name="boredom-meter",t.add(vi);const Hi=new oc(new Za({map:qe,transparent:!0,depthTest:!1}));Hi.scale.set(.5,.5,1),Hi.name="boredom-zzz",Hi.visible=!1,t.add(Hi);for(const Ye of[H,I,te,le])Ye.userData.baseColor=Ye.color.clone();const ls={id:E,station:Q,head:W,arm:xe,light:st,group:v,sign:kn,path:[],target:"",activity:Sr,activityState:"",idea:null,ideaText:"",meter:vi,meterKey:"",zzz:Hi,tint:1};return ut.set(E,ls),ls}const ln=new Map;for(const L of[...t.children])if(L instanceof _t&&L.geometry===i&&!L.userData.overhead&&!Array.isArray(L.material)&&!L.material.transparent){const P=ln.get(L.material)||[];P.push(L),ln.set(L.material,P)}for(const[L,P]of ln){if(P.length<3)continue;const ne=new Xg(i,L,P.length);P.forEach((J,Q)=>{J.updateMatrix(),ne.setMatrixAt(Q,J.matrix),t.remove(J)}),ne.instanceMatrix.needsUpdate=!0,ne.computeBoundingSphere(),t.add(ne)}const Rt=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new O(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new O(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new O(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new O(-6.3,1.25,7.2),radius:3.1}];let en=0;const un={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function dn(L,P){const ne=Math.max(0,Math.min(.05,L-en));en=L,vt.rotation.y=L*(P.replay||P.running?.025:.006),ke.forEach((R,H)=>{R.visible=H<P.agents.length*4,R.position.y=.15+H%5*.11+Math.sin(L*.8+H)*.025});const J=new Set(P.agents.map(R=>R.id));for(const[R,H]of ut)if(!J.has(R)){if(t.remove(H.group,H.sign,H.activity,H.meter,H.zzz),H.meter.material.map?.dispose(),H.meter.material.dispose(),H.zzz.material.dispose(),H.idea){t.remove(H.idea),H.idea.geometry.dispose();const te=H.idea.material;te.map?.dispose(),te.dispose()}H.activity.material.map?.dispose(),H.activity.material.dispose(),H.group.traverse(te=>{te instanceof _t&&te.geometry!==i&&te.geometry.dispose()});for(const te of H.group.userData.ownedMaterials)te.dispose();for(const te of H.group.userData.ownedTextures||[])te?.dispose();H.sign.geometry.dispose();const I=H.sign.material;I.map?.dispose(),I.dispose(),ut.delete(R)}P.agents.forEach((R,H)=>{let I=ut.get(R.id);I||(I=xt(R.position?.x??(H%3-1)*.6,R.position?.z??10.4+Math.floor(H/3)*.4,0,R.name,R.stationId,R.id));const te=R.id.startsWith("worker-")?Number(R.id.match(/\d+$/)?.[0]||1)-1:H%4,le=fl(R.stationId,te),K=`${R.stationId}:${te}`;I.target!==K&&(I.target=K,I.station=R.stationId,I.path=Ka(I.group.position,le,un,n)),R.position&&(I.group.position.set(R.position.x,0,R.position.z),I.path=[]);const Z=Lh(R.boredom,P.reducedMotion),ue=I.path[0];if(ue){const ce=ue.x-I.group.position.x,he=ue.z-I.group.position.z,Ue=Math.hypot(ce,he);if(Ue<.07)I.path.shift();else{const fe=Math.min(Ue,ne*1.8*Z.walk);I.group.position.x+=ce/Ue*fe,I.group.position.z+=he/Ue*fe,I.group.rotation.y=P.reducedMotion?Math.atan2(ce,he):Ut(I.group.rotation.y,Math.atan2(ce,he),Math.max(.02,ne*6*Z.turn))}}else I.group.rotation.y=R.position?.heading??(R.stationId==="culture"?Math.atan2(Br.x-I.group.position.x,Br.z-I.group.position.z):Math.PI);I.sign.position.set(I.group.position.x,2.28,I.group.position.z),I.sign.lookAt(e.position),I.activity.position.set(I.group.position.x,2.85,I.group.position.z);const C=!!ue||!!R.position?.moving,ee=`${R.boredom==null?"-":Math.round(R.boredom)}:${R.regime||""}`;I.meterKey!==ee&&(I.meterKey=ee,lt(I.meter,R.boredom,jr(R.regime).label)),I.meter.position.set(I.group.position.x,2.5,I.group.position.z),I.group.position.y=C?Math.abs(Math.sin(L*Z.bobHz+H))*Z.bob:0,I.group.rotation.x=Z.slump,I.zzz.visible=Z.zzz&&!C,I.zzz.position.set(I.group.position.x+.32,1.95+(P.reducedMotion?0:(L*.35+H*.3)%1*.35),I.group.position.z),I.zzz.material.opacity=P.reducedMotion?.9:1-(L*.35+H*.3)%1*.6,Math.abs(I.tint-Z.saturation)>.02&&(I.tint=Z.saturation,I.group.traverse(ce=>{if(ce instanceof _t&&ce.material instanceof qa&&ce.material.userData.baseColor){const he=ce.material.userData.baseColor,Ue=he.r*.3+he.g*.59+he.b*.11;ce.material.color.setRGB(Ue+(he.r-Ue)*Z.saturation,Ue+(he.g-Ue)*Z.saturation,Ue+(he.b-Ue)*Z.saturation)}})),I.activity.visible=R.state!=="idle"&&!(R.stationId==="culture"&&R.discussionBrief);const W=R.discussionBrief||"",ge=W?`${R.name}:${W}:${(R.discussionPeers||[]).join(",")}`:"";if(I.ideaText!==ge){if(I.idea){t.remove(I.idea),I.idea.geometry.dispose();const ce=I.idea.material;ce.map?.dispose(),ce.dispose(),I.idea=null}I.ideaText=ge,W&&(I.idea=z(R.name,W,R.discussionPeers||[]),I.idea.name="recorded-discussion-bubble",t.add(I.idea))}if(I.idea&&(I.idea.visible=zt>=.98&&R.stationId==="culture"&&!R.position?.moving&&(!!R.discussionBrief||R.state==="thinking"||R.state==="reviewing"),I.idea.position.set(I.group.position.x,3.05,I.group.position.z),I.idea.lookAt(e.position)),I.activityState!==R.state){I.activityState=R.state;const ce=document.createElement("canvas");ce.width=128,ce.height=128;const he=ce.getContext("2d");he.font="80px sans-serif",he.textAlign="center",he.textBaseline="middle",he.fillText(R.state==="thinking"?"💡":R.state==="working"?"🫧":"📈",64,64),I.activity.material.map?.dispose(),I.activity.material.map=new Qi(ce),I.activity.material.needsUpdate=!0}const me=(P.replay||P.running)&&(R.state==="working"||R.state==="thinking");I.arm.rotation.x=ue||R.position?.moving?Math.sin(L*5+H)*.12:me?Math.sin(L*1.8+H)*.08:0,I.head.rotation.y=Math.sin(L*(Z.level==="frenetic"?.9:.32)+H)*(Z.level==="frenetic"?.12:.055),I.head.rotation.x=(me&&!ue?.12:0)+Z.droop,I.light.scale.setScalar(me?1+Math.sin(L*2)*.12:1)}),e.updateMatrixWorld();const Q=[],E=230,v=86.25;for(const R of ut.values())if(R.idea?.visible){const H=R.idea.position.clone(),I=H.clone().applyMatrix4(e.matrixWorldInverse);if(I.z>=0){R.idea.visible=!1;continue}const te=H.project(e);if(Math.abs(te.x)>1.15||Math.abs(te.y)>1.15){R.idea.visible=!1;continue}let le=Mn.clamp((te.x+1)*innerWidth/2,90+E/2,innerWidth-E/2-16),K=(1-te.y)*innerHeight/2;for(let ue=0;ue<12&&Q.some(C=>Math.abs(le-C.x)<E+10&&Math.abs(K-C.y)<v+8);ue++)K-=v+8,K<110&&(K=155,le=Math.min(innerWidth-E/2-16,le+E+12));Q.push({x:le,y:K}),R.idea.position.set(le/innerWidth*2-1,1-K/innerHeight*2,te.z).unproject(e),R.idea.quaternion.copy(e.quaternion);const Z=2*-I.z*Math.tan(Mn.degToRad(e.fov/2))/innerHeight;R.idea.scale.setScalar(E*Z/2.7),R.idea.renderOrder=10}}const k=new Hn;t.add(k);const fn=new Set([...ut.values()].flatMap(L=>[L.group,L.sign,L.activity,L.meter,L.zzz]));for(const L of[...t.children])L!==k&&!fn.has(L)&&k.add(L);function mt(L){zt=Mn.clamp(L,0,1);const P=ly(zt,ut.size);k.scale.setScalar(P.room),[...ut.values()].forEach((ne,J)=>{const Q=P.agents[J]??1,E=Q<.88?Q/.88*1.08:1.08-(Q-.88)/.12*.08;ne.group.scale.setScalar(E),ne.sign.scale.setScalar(E),ne.activity.scale.set(.8*E,.8*E,1),ne.meter.scale.set(.86*E,.215*E,1),ne.zzz.scale.set(.5*E,.5*E,1)})}return{scene:t,camera:e,colliders:n,stations:Rt,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:dn,grow:mt,setOverview:L=>{X.visible=!0},agentPositions:()=>[...ut.values()].map(L=>({id:L.id,position:L.group.position.clone()})),exposure:1}}const fy=!0;function Nh(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function pl(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Fd(t,e="|"){return t.map(n=>zh(n)).join(e)}function ml(t,e){return typeof e=="bigint"?e.toString():e}class hy{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function Zl(t){return new hy(t)}function py(t){return t==null}function ql(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function my(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function vr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Dh(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function gi(t){return Dh(t._zod.def)??t._zod.def.shape}function Uh(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return vr(this,e,i),i},enumerable:!0,configurable:!0})}function Oh(t,e,n){e in t?vr(t,e,n):t[e]=n}function pr(t,e,n,i){const r=gi(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?Uh(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):Oh(t,s,i?i(a.value,s):a.value))}}function gy(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?Uh(t,n,()=>e[n]):Oh(t,n,i.value))}}function yn(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function _y(t){return JSON.stringify(t)}function vy(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Fh="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function mo(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const xy=Zl(()=>{if(Yn.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function Ks(t){if(mo(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(mo(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function kh(t){return Ks(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const Sy=new Set(["string","number","symbol"]);function Io(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Bi(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Fe(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function zh(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function yy(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const Bh={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},My={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function by(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return pr(s,t,Lo(t,e)),Bi(t,yn(n,{shape:s,checks:[]}))}function Lo(t,e){const n=gi(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function Ey(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(Lo(t,e)),a={};return pr(a,t,Reflect.ownKeys(gi(t)).filter(o=>!s.has(o))),Bi(t,yn(n,{shape:a,checks:[]}))}function wy(t,e){if(!Ks(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=gi(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return Bi(t,yn(t._zod.def,{shape:$h(t,e)}))}function $h(t,e){const n={};return pr(n,t,Reflect.ownKeys(gi(t))),gy(n,e),n}function Ty(t,e){if(!Ks(e))throw new Error("Invalid input to safeExtend: expected a plain object");return Bi(t,yn(t._zod.def,{shape:$h(t,e)}))}function Ay(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};pr(n,t,Reflect.ownKeys(gi(t))),pr(n,e,Reflect.ownKeys(gi(e)));const i=yn(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return Bi(t,i)}function kd(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(Lo(e,n)):void 0,c={};return pr(c,e,Reflect.ownKeys(gi(e)),t&&((l,u)=>o&&!o.has(u)?l:new t({type:"optional",innerType:l}))),Bi(e,yn(e._zod.def,{shape:c,checks:[]}))}function Ry(t,e,n){const i=n?new Set(Lo(e,n)):void 0,r={};return pr(r,e,Reflect.ownKeys(gi(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),Bi(e,yn(e._zod.def,{shape:r}))}function di(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function Cy(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function Hh(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function bs(t){return typeof t=="string"?t:t?.message}function zd(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function gl(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function ss(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:bs(t.inst?._zod.def?.error?.(t))??bs(s?.(t))??bs(e?.error?.(t))??bs(n.customError?.(t))??bs(n.localeError?.(t))??"Invalid input",o={};for(const c of Object.keys(t))c==="inst"||c==="schema"||c==="continue"||c==="input"||c==="__proto__"||(o[c]=t[c]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const Py=/[\uD800-\uDBFF]/;function Yl(t){const e=t.length;if(!Py.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function Kl(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function Iy(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function js(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function Ly(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):Ny(t,n,i.value)}}function Fi(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function Gh(t,e,n){return Fi(t,e,n,!1)}function Vh(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return Fi(this,n,i(this))},set(r){Fi(this,n,r)}})}return e}function Ny(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:Fi(this,e,n.bind(this))},set(i){Fi(this,e,i)}})}function Dy(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let hc,Ai=!1;const Uy={configurable:!0,get(){Ai=!0}};function ft(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&hc!==t._zod){hc=void 0;return}hc=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,Uy);const r=Ai;Ai=!1;try{const s=n(this);return Ai?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Ai=Ai||r,s}catch(s){throw delete this[e],Ai=Ai||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function Oy(t,e,n,i){const r=Dy(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const Fy="~constantCatch";function ky(t){const e=()=>t;return e[Fy]=!0,e}var Bd;const pc={value:void 0,enumerable:!1};let $d="captureStackTrace"in Error?Error:null;function zy(t){const e=$d;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return $d=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function ae(t,e,n,i){const r={};function s(f){this.def=f,this.constr=d,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function c(f,h){if(f._zod){if(f._zod.traits.has(t))return}else{pc.value=new s(h);try{Object.defineProperty(f,"_zod",pc)}finally{pc.value=void 0}}if(f._zod.traits.add(t),e(f,h),o){const x=Object.getPrototypeOf(f),m=f._zod.constr.prototype;let p=x;for(;p&&p!==m;)p=Object.getPrototypeOf(p);const S=p??x;o.has(S)||(o.add(S),Ly(S,a))}const g=d.prototype;for(const x in g)Object.prototype.hasOwnProperty.call(g,x)&&(x in f||(f[x]=g[x].bind(f)))}const l=i?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:t});function d(f){const h=i?.Parent?zy(u):this;c(h,f);const g=h._zod.deferred;if(g){for(const m of g)m();h._zod.deferred=void 0}const x=globalThis.__zod_globalConfig?.postProcessor;return x&&x(h),h}return Object.defineProperty(d,"init",{value:c}),Object.defineProperty(d,Symbol.hasInstance,{value:f=>i?.Parent&&f instanceof i.Parent?!0:f?._zod?.traits?.has(t)}),Object.defineProperty(d,"name",{value:t}),d}class ar extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class Wh extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Bd=globalThis).__zod_globalConfig??(Bd.__zod_globalConfig={});const Yn=globalThis.__zod_globalConfig;function $i(t){return t&&Object.assign(Yn,t),Yn}function By(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,ml,2)),t.message}function $y(t){this._zod.message=t}const Hy={get:By,set:$y,enumerable:!0,configurable:!0},mc={value:void 0,enumerable:!1},Hd=new WeakSet([Object.prototype,Error.prototype]),Gy=(t,e)=>{t.name="$ZodError",mc.value=e,Object.defineProperty(t,"issues",mc),mc.value=void 0,Object.defineProperty(t,"message",Hy);const n=Object.getPrototypeOf(t);Hd.has(n)||(Hd.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},Vy=ae("$ZodError",Gy);function Wy(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function Xy(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?Wy(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function Zy(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let c=n,l=0;for(;l<o.length;){const u=o[l],d=l===o.length-1;if(u==="_errors"){d&&c._errors.push(e(a)),l++;continue}Object.prototype.hasOwnProperty.call(c,u)||Object.defineProperty(c,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const f=c[u];d&&f._errors.push(e(a)),c=f,l++}}}};return i(t),n}function No(t,e){return{callee:e?.callee??t,Err:e?.Err}}const jl=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new ar;if(o.issues.length){const c=new(s?.Err??t)(o.issues.map(l=>ss(l,a,$i())));throw Fh(c,s?.callee??e),c}return o.value};return e},Jl=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const c=new(s?.Err??t)(o.issues.map(l=>ss(l,a,$i())));throw Fh(c,s?.callee??e),c}return o.value};return e},Ql=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new ar;return s.issues.length?Xh(t,s.issues,r):{success:!0,data:s.value}};function Xh(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>ss(r,n,$i()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const eu=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?Xh(t,s.issues,r):{success:!0,data:s.value}},qy=Symbol.for("zod.compile.invalid"),Yy=Symbol.for("zod.compile.fallback"),Ky=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==qy)return!0;if(i.definite===!0&&n===void 0)return!1}return jy(t,e,n)});function jy(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[Yy]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new ar;return s.issues.length===0}const Jy=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},Qy=t=>{const e=jl(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,No(n,a))};return n},eM=t=>{const e=jl(t),n=(i,r,s,a)=>e(i,r,s,No(n,a));return n},tM=t=>{const e=Jl(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,No(n,a))};return n},nM=t=>{const e=Jl(t),n=async(i,r,s,a)=>await e(i,r,s,No(n,a));return n},iM=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Ql(t)(e,n,r)},rM=t=>(e,n,i)=>Ql(t)(e,n,i),sM=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return eu(t)(e,n,r)},aM=t=>async(e,n,i)=>eu(t)(e,n,i),oM=/^[cC][0-9a-z]{6,}$/,cM=/^[0-9a-z]+$/,lM=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,uM=/^[0-9a-vA-V]{20}$/,dM=/^[A-Za-z0-9]{27}$/,fM=/^[a-zA-Z0-9_-]{21}$/;function hM(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const pM=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,mM=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Gd=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,gM=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,_M="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function vM(){return new RegExp(_M,"u")}const xM=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,SM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,yM=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,MM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,bM=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,EM=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,wM=/^https?$/,TM=/^\+[1-9]\d{6,14}$/,Zh="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function AM(t){return new RegExp(`^${t}$`)}const RM=AM(Zh);function _l(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function CM(t){return new RegExp(`^${_l(t)}$`)}function PM(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${_l({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${_l({precision:t.precision})}`:n;return new RegExp(`^${Zh}T(?:${i})$`)}const IM=/^[\s\S]{0,}$/,LM=/^-?\d+(?:\.\d+)?$/,NM=/^[^A-Z]*$/,DM=/^[^a-z]*$/,gn=ae("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),tu=t=>{const e=t.value;return!py(e)&&e.length!==void 0},go={number:"number",bigint:"bigint",object:"date"},qh=ae("$ZodCheckLessThan",(t,e)=>{gn.init(t,e);const n=go[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:go[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Yh=ae("$ZodCheckGreaterThan",(t,e)=>{gn.init(t,e);const n=go[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:go[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),UM=ae("$ZodCheckMultipleOf",(t,e)=>{gn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):my(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),OM=ae("$ZodCheckNumberFormat",(t,e)=>{gn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=Bh[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),FM=ae("$ZodCheckMaxLength",(t,e)=>{var n;gn.init(t,e),(n=t._zod.def).when??(n.when=tu),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?Yl(r):s)<=e.maximum)return;const o=Kl(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),kM=ae("$ZodCheckMinLength",(t,e)=>{var n;gn.init(t,e),(n=t._zod.def).when??(n.when=tu),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?Yl(r):s)>=e.minimum)return;const o=Kl(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),zM=ae("$ZodCheckLengthEquals",(t,e)=>{var n;gn.init(t,e),(n=t._zod.def).when??(n.when=tu),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?Yl(r):s;if(a===e.length)return;const o=Kl(r),c=a>e.length;i.issues.push({origin:o,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),Do=ae("$ZodCheckStringFormat",(t,e)=>{var n,i;gn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),BM=ae("$ZodCheckRegex",(t,e)=>{Do.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),$M=ae("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=NM),Do.init(t,e)}),HM=ae("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=DM),Do.init(t,e)}),GM=ae("$ZodCheckIncludes",(t,e)=>{gn.init(t,e);const n=Io(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),VM=ae("$ZodCheckStartsWith",(t,e)=>{gn.init(t,e);const n=new RegExp(`^${Io(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),WM=ae("$ZodCheckEndsWith",(t,e)=>{gn.init(t,e);const n=new RegExp(`.*${Io(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),XM=ae("$ZodCheckOverwrite",(t,e)=>{gn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class ZM{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const qM={major:4,minor:6,patch:7},Nt=ae("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=qM;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,c,l)=>{if(o.memo)return o;let u=di(o),d;for(const f of c){if(f._zod.def.when){if(Cy(o)||!f._zod.def.when(o))continue}else if(u)continue;const h=o.issues.length,g=f._zod.check(o);if(g instanceof Promise&&l?.async===!1)throw new ar;if(d||g instanceof Promise)d=(d??Promise.resolve()).then(async()=>{await g,o.issues.length!==h&&(gl(o.issues,h,t),u||(u=di(o,h)))});else{if(o.issues.length===h)continue;gl(o.issues,h,t),u||(u=di(o,h))}}return d?d.then(()=>o):o},a=(o,c,l)=>{if(di(o))return o.aborted=!0,o;const u=s(c,r,l);if(u instanceof Promise){if(l.async===!1)throw new ar;return u.then(d=>t._zod.parse(d,l))}return t._zod.parse(u,l)};t._zod.run=(o,c)=>{if(c.skipChecks)return t._zod.parse(o,c);if(c.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(d=>a(d,o,c)):a(u,o,c)}const l=t._zod.parse(o,c);if(l instanceof Promise){if(c.async===!1)throw new ar;return l.then(u=>s(u,r,c))}return s(l,r,c)}}},{get"~standard"(){return Gh(this,"~standard",jh(this))},set"~standard"(t){Fi(this,"~standard",t)}}),Kh=(t,e)=>t.issues.length?{issues:t.issues.map(n=>ss(n,e,$i()))}:{value:t.value};async function YM(t,e){const n={async:!0};return Kh(await t._zod.run({value:e,issues:[]},n),n)}function jh(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return Kh(i,n)}catch{}return YM(t,e)},vendor:"zod",version:1}}const nu=ae("$ZodString",(t,e)=>{Nt.init(t,e),t._zod.pattern=e.pattern??IM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),yt=ae("$ZodStringFormat",(t,e)=>{Do.init(t,e),nu.init(t,e)}),KM=ae("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=mM),yt.init(t,e)}),jM=ae("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Gd(i))}else e.pattern??(e.pattern=Gd());yt.init(t,e)}),JM=ae("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=gM),yt.init(t,e)}),Jh=1,_o=2;function Qh(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function QM(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?Qh(t)||_o:eb(t,e)}function eb(t,e){if(!e.normalize&&e.protocol?.source===wM.source&&!/^https?:\/\//i.test(t))return Jh;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??_o}return new URL(t)}catch{return _o}}const tb=/[\t\n\r]/g;function Vd(t){return t.replace(tb,"")}function nb(t,e){return e.lastIndex=0,e.test(t.hostname)}function ib(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const rb=ae("$ZodURL",(t,e)=>{yt.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=QM(i,e);if(r===Jh){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===_o){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=Vd(i);return}e.hostname&&!nb(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!ib(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:Vd(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),sb=ae("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=vM()),yt.init(t,e)}),ab=ae("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?fM:hM(e.length)),yt.init(t,e)}),ob=ae("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=oM),yt.init(t,e)}),cb=ae("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=cM),yt.init(t,e)}),lb=ae("$ZodULID",(t,e)=>{e.pattern??(e.pattern=lM),yt.init(t,e)}),ub=ae("$ZodXID",(t,e)=>{e.pattern??(e.pattern=uM),yt.init(t,e)}),db=ae("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=dM),yt.init(t,e)}),fb=ae("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=PM(e)),yt.init(t,e)}),hb=ae("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=RM),yt.init(t,e)}),pb=ae("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=CM(e)),yt.init(t,e)}),mb=ae("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=pM),yt.init(t,e)}),gb=ae("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=xM),yt.init(t,e)}),_b=/^[0-9a-fA-F:.]+$/;function ep(t){return _b.test(t)?Qh(`http://[${t}]`):!1}const vb=ae("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=SM),yt.init(t,e),t._zod.check=n=>{ep(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),xb=ae("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=yM),yt.init(t,e)});function Sb(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:ep(n)}const yb=ae("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=MM),yt.init(t,e),t._zod.check=n=>{Sb(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function tp(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const np=/^[0-9a-zA-Z+/]*={0,2}$/,Mb=ae("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=np),yt.init(t,e),t._zod.check=n=>{tp(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),iu=/^[A-Za-z0-9_-]*$/;function bb(t){if(!iu.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return tp(n)}const Eb=ae("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=iu),yt.init(t,e),t._zod.check=n=>{bb(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),wb=ae("$ZodE164",(t,e)=>{e.pattern??(e.pattern=TM),yt.init(t,e)});function Tb(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Ab=ae("$ZodJWT",(t,e)=>{yt.init(t,e),t._zod.check=n=>{Tb(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),ip=ae("$ZodNumber",(t,e)=>{Nt.init(t,e),t._zod.pattern=LM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),Rb=ae("$ZodNumberFormat",(t,e)=>{OM.init(t,e),ip.init(t,e)}),Cb=ae("$ZodUnknown",(t,e)=>{Nt.init(t,e),t._zod.parse=n=>n}),Pb=ae("$ZodNever",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Ib(t,e){const n=zd(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[c,l]of zd(t._zod.def.checks))if(o>c&&l._zod.def.when(s)){const u=s.issues.length;return l._zod.check(s),s.issues[u].continue=!1,gl(s.issues,u,t),s}}return r(s,a)}}const Lb=t=>Array.isArray(t)?t.length:-1;function Wd(t,e,n){t.issues.length&&e.issues.push(...Hh(n,t.issues)),e.value[n]=t.value}const Nb=ae("$ZodArray",(t,e)=>{Nt.init(t,e);const n=Yn.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let c=0;c<s.length;c++){const l=s[c],u=e.element._zod.run({value:l,issues:[]},r);if(u instanceof Promise)a.push(u.then(d=>Wd(d,i,c)));else if(Wd(u,i,c),o&&u.issues.length!==0&&di(u))break}return a.length?Promise.all(a).then(()=>i):i},Ib(t,Lb)});function vo(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...Hh(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const Db=[];function rp(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:Db,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=yy(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function sp(t,e,n,i,r,s,a){const o=[],c=r.keySet,l=r.catchall._zod,u=l.def.type,d=l.optin,f=l.optout;let h=0;for(const g in e){if(a&&n.issues.length!==h){if(di(n,h))break;h=n.issues.length}if(c.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const x=l.run({value:e[g],issues:[]},i);x instanceof Promise?t.push(x.then(m=>vo(m,n,g,e,d,f))):vo(x,n,g,e,d,f)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const Ub=ae("$ZodObject",(t,e)=>{Nt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const l=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),l.raw=u,u};l.raw=i,Object.defineProperty(e,"shape",{get:l})}const r=Zl(()=>rp(e));ft(t,"propValues",l=>{const u=l.def.shape,d={};for(const f in u){const h=u[f]._zod;if(h.values){Object.prototype.hasOwnProperty.call(d,f)||vr(d,f,new Set);for(const g of h.values)d[f].add(g);h.optin!==void 0&&d[f].add(void 0)}}return d});const s=mo,a=e.catchall;let o;const c=Yn.memoizer;c?.attach(t),t._zod.parse=(l,u)=>{o??(o=r.value);const d=l.value;if(!s(d))return l.issues.push({expected:"object",code:"invalid_type",input:d,inst:t}),l;l.value=c?c.alloc(t,l,{},u):{};const f=[],h=o.shape,g=u?.abortEarly;let x=l.issues.length;for(const m of o.allKeys){if(g&&l.issues.length!==x){if(di(l,x))break;x=l.issues.length}if(m==="__proto__")continue;const p=h[m],S=p._zod.optin,w=p._zod.optout,y=p._zod.run({value:d[m],issues:[]},u);y instanceof Promise?f.push(y.then(A=>vo(A,l,m,d,S,w))):vo(y,l,m,d,S,w)}return a?sp(f,d,l,u,r.value,t,g===!0):f.length?Promise.all(f).then(()=>l):l}}),Ob=ae("$ZodObjectJIT",(t,e)=>{Ub.init(t,e);const n=t._zod.parse,i=Zl(()=>rp(e)),r=Yn.memoizer,s=h=>{const g=i.value,x=g.symbolKeys,m=new ZM(["payload","ctx"],{shape:h,inst:t,memo:r,syms:x}),p=A=>`shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`,S=(A,T)=>`
          let ${A}_ab = false;
          for (let i = 0; i < ${A}.issues.length; i++) {
            const iss = ${A}.issues[i];
            iss.path = iss.path ? [${T}, ...iss.path] : [${T}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${A}_ab = true;
          }
          if (${A}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;m.write("const input = payload.value;");const w=Object.create(null);let y=0;for(const A of g.allKeys)w[A]=`key_${y++}`;m.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const A of g.allKeys){if(A==="__proto__")continue;const T=w[A],_=typeof A=="symbol"?`syms[${x.indexOf(A)}]`:_y(A),M=`${_} in input`,z=h[A],N=z?._zod?.optin,F=N!==void 0,B=z?._zod?.optout==="optional";if(m.write(`const ${T} = ${p(_)};`),F&&B){const Y=N==="optional"?`${T}_present`:`${T}.value !== undefined || ${T}_present`;m.write(`
        const ${T}_present = ${M};
        if (!${T}.issues.length || ${T}_present) {
          if (${T}.issues.length) {${S(T,_)}
          }

          if (${Y}) {
            newResult[${_}] = ${T}.value;
          }
        }

      `)}else F?(m.write(`
        if (${T}.issues.length) {${S(T,_)}
        }
      `),N==="defaulted"?m.write(`newResult[${_}] = ${T}.value;`):m.write(`
        if (${T}.value !== undefined || ${M}) {
          newResult[${_}] = ${T}.value;
        }
      `)):m.write(`
        const ${T}_present = ${M};
        if (${T}.issues.length) {${S(T,_)}
        }
        if (!${T}_present && !${T}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${_}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${T}_present) {
          newResult[${_}] = ${T}.value;
        }

      `)}return m.write("payload.value = newResult;"),m.write("return payload;"),m.compile()};let a;const o=mo,c=!Yn.jitless,u=c&&xy.value,d=e.catchall;let f;t._zod.parse=(h,g)=>{f??(f=i.value);const x=h.value;return o(x)?c&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),h=a(h,g),d?sp([],x,h,g,f,t,g?.abortEarly===!0):h):n(h,g):(h.issues.push({expected:"object",code:"invalid_type",input:x,inst:t}),h)}});function Xd(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!di(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>ss(a,i,$i())))}),e)}const Fb=ae("$ZodUnion",(t,e)=>{Nt.init(t,e),ft(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),ft(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),ft(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),ft(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>ql(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const c=o._zod.run({value:i.value,issues:[]},r);if(c instanceof Promise)a.push(c),s=!0;else{if(c.issues.length===0)return c;a.push(c)}}return s?Promise.all(a).then(o=>Xd(o,i,t,r)):Xd(a,i,t,r)}}),kb=ae("$ZodIntersection",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([c,l])=>Zd(n,c,l)):Zd(n,s,a)}});function vl(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Ks(t)&&Ks(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=vl(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=vl(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Zd(t,e,n){const i=new Map;let r;const s=new Map,a=(l,u)=>{let d;if(l.code==="unrecognized_keys"&&!l.path?.length)r??(r=l),d=l.keys;else if(l.code==="invalid_key"&&l.origin==="record"&&l.path?.length===1){const f=String(l.path[0]);s.has(f)||s.set(f,l),d=[f]}else return!1;for(const f of d)i.has(f)||i.set(f,{}),i.get(f)[u]=!0;return!0};for(const l of e.issues)a(l,"l")||t.issues.push(l);for(const l of n.issues)a(l,"r")||t.issues.push(l);const o=[...i].filter(([,l])=>l.l&&l.r).map(([l])=>l);if(o.length){const l=r?o.filter(u=>r.keys.includes(u)):[];l.length&&t.issues.push({...r,keys:l});for(const u of o)!l.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const c=vl(e.value,n.value);if(!c.valid){if(di(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return t.value=c.data,t}const zb=ae("$ZodEnum",(t,e)=>{Nt.init(t,e);const n=pl(e.entries),i=new Set(n);t._zod.values=i,ft(t,"pattern",r=>{const s=pl(r.def.entries).filter(a=>Sy.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>Io(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),Bb=ae("$ZodTransform",(t,e)=>{Nt.init(t,e),t._zod.optin="optional",Yn.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new Wh(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new ar;return n.value=r,n}});function qd(t,e){return t.value=e.issues.length?void 0:e.value,t}const ap=ae("$ZodOptional",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${ql(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>qd(n,s)):qd(n,r)}return e.innerType._zod.run(n,i)}}),$b=ae("$ZodExactOptional",(t,e)=>{ap.init(t,e),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),Hb=ae("$ZodNullable",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${ql(i.source)}|null)$`):void 0}),ft(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),Gb=ae("$ZodDefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>Yd(s,e)):Yd(r,e)}});function Yd(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const Vb=ae("$ZodPrefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),Wb=ae("$ZodNonOptional",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>Kd(s,t)):Kd(r,t)}});function Kd(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function jd(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>ss(r,i,$i()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const Xb=ae("$ZodCatch",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>jd(n,s,e,i)):jd(n,r,e,i)}}),Zb=ae("$ZodPipe",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>n.def.in._zod.values),ft(t,"optin",n=>n.def.in._zod.optin),ft(t,"optout",n=>n.def.out._zod.optout),ft(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>Ua(a,e.in,i)):Ua(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>Ua(s,e.out,i)):Ua(r,e.out,i)}});function Ua(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const qb=ae("$ZodReadonly",(t,e)=>{Nt.init(t,e),ft(t,"propValues",n=>n.def.innerType._zod.propValues),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"optin",n=>n.def.innerType?._zod?.optin),ft(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(Jd):Jd(r)}});function Jd(t){return t.memo||(t.value=Object.freeze(t.value)),t}const Yb=ae("$ZodCustom",(t,e)=>{gn.init(t,e),Nt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>Qd(s,n,i,t));Qd(r,n,i,t)}});function Qd(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(js(r))}}class Kb extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const xl="~memo",ef=[];function op(t){return t!==null&&typeof t=="object"}function gc(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const cp=new WeakMap,Cs=0,ja=1,Fs=2;function Ja(t,e,n){const i=cp.get(t);if(i!==void 0)return i?Fs:Cs;if(e.has(t))return Fs;e.add(t);let r=Cs;const s=u=>{if(r!==Fs&&u?._zod){const d=Ja(u,e);d>r&&(r=d)}},a=(u,d)=>{let f=Cs;for(const h of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,h);if(!g.enumerable)continue;const x=g.get?ja:g.value?._zod?Ja(g.value,e):Cs;x>f&&(f=x)}return f},o=u=>{u>r&&(r=u)},c=t._zod.def;switch(c.type){case"object":{const u=Dh(c);o(u?a(u):ja),s(c.catchall);break}case"array":s(c.element);break;case"tuple":for(const u of c.items)s(u);s(c.rest);break;case"record":case"map":s(c.keyType),s(c.valueType);break;case"set":s(c.valueType);break;case"union":for(const u of c.options)s(u);break;case"intersection":s(c.left),s(c.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(c.innerType);break;case"pipe":s(c.in),s(c.out);break;case"function":s(c.input),s(c.output);break;case"lazy":{const u=c._cachedInner??void 0;o(u?Ja(u,e):ja);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in c){const d=Object.getOwnPropertyDescriptor(c,u);if(!d||d.get)continue;const f=d.value;if(!(!f||typeof f!="object")){if(f._zod)s(f);else if(Array.isArray(f))for(const h of f)s(h)}}}return e.delete(t),jb(t,r)}function jb(t,e){return e!==ja&&cp.set(t,e===Fs),e}function Jb(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let Oa;const Fa=[],Qb={alloc(t,e,n){const i=Oa;if(!i)return n;Oa=void 0;const r={value:n,issues:null};return i.set(e.value,r),Fa.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&tE(s,r.value))throw new Kb;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(c,l)=>{if(n===void 0){const p=Ja(t,new Set);if(p===Cs)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(c,l);p===Fs||i?n=!0:i=!0}const u=c.value;if(!op(u))return a(c,l);let d=l[xl];d||(d={buckets:new WeakMap,backEdges:void 0},l[xl]=d);let f;r===l?f=s:(f=Jb(d,t),r=l,s=f);const h=f.get(u);if(h)return c.value=h.value,h.issues?h.issues.length&&c.issues.push(...gc(h.issues)):(c.memo=!0,d.backEdges??(d.backEdges=new WeakSet),d.backEdges.add(h.value)),c;Oa=f;const g=Fa.length,x=a(c,l);Oa=void 0;const m=Fa.length>g?Fa.pop():void 0;return x instanceof Promise?x.then(p=>(m&&(m.issues=p.issues.length?gc(p.issues):ef),p)):(m&&(m.issues=x.issues.length?gc(x.issues):ef),x)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function eE(){return Qb}function tE(t,e){const n=t[xl]?.backEdges;return n!==void 0&&op(e)&&n.has(e)}const nE=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=Iy(s.input),c=r(o,s.input);return`Invalid input: expected ${a}, received ${c}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${zh(s.values[0])}`:`Invalid option: expected one of ${Fd(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${Fd(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function iE(){return{localeError:nE()}}var tf;class rE{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function sE(){return new rE}(tf=globalThis).__zod_globalRegistry??(tf.__zod_globalRegistry=sE());const Ps=globalThis.__zod_globalRegistry;function lp(t){return t.checks&&(t.checks=[...t.checks]),t}function aE(t,e){return new t(lp({type:"string",...Fe(e)}))}function oE(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function cE(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function lE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function uE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function dE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function fE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function hE(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function pE(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function mE(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function gE(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function _E(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function vE(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function xE(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function SE(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function yE(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function ME(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function bE(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function EE(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function wE(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function TE(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function AE(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function RE(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function CE(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function PE(t,e){return new t({type:"string",format:"date",check:"string_format",...Fe(e)})}function IE(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function LE(t,e){return new t({type:"string",format:"duration",check:"string_format",...Fe(e)})}function NE(t,e){return new t(lp({type:"number",checks:[],...Fe(e)}))}function DE(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function UE(t){return new t({type:"unknown"})}function OE(t,e){return new t({type:"never",...Fe(e)})}function nf(t,e){return new qh({check:"less_than",...Fe(e),value:t,inclusive:!1})}function _c(t,e){return new qh({check:"less_than",...Fe(e),value:t,inclusive:!0})}function rf(t,e){return new Yh({check:"greater_than",...Fe(e),value:t,inclusive:!1})}function vc(t,e){return new Yh({check:"greater_than",...Fe(e),value:t,inclusive:!0})}function sf(t,e){return new UM({check:"multiple_of",...Fe(e),value:t})}function up(t,e){return new FM({check:"max_length",...Fe(e),maximum:t})}function xo(t,e){return new kM({check:"min_length",...Fe(e),minimum:t})}function dp(t,e){return new zM({check:"length_equals",...Fe(e),length:t})}function FE(t,e){return new BM({check:"string_format",format:"regex",...Fe(e),pattern:t})}function kE(t){return new $M({check:"string_format",format:"lowercase",...Fe(t)})}function zE(t){return new HM({check:"string_format",format:"uppercase",...Fe(t)})}function BE(t,e){return new GM({check:"string_format",format:"includes",...Fe(e),includes:t})}function $E(t,e){return new VM({check:"string_format",format:"starts_with",...Fe(e),prefix:t})}function HE(t,e){return new WM({check:"string_format",format:"ends_with",...Fe(e),suffix:t})}function as(t){return new XM({check:"overwrite",tx:t})}function GE(t){return as(e=>e.normalize(t))}function VE(){return as(t=>t.trim())}function WE(){return as(t=>t.toLowerCase())}function XE(){return as(t=>t.toUpperCase())}function ZE(){return as(t=>vy(t))}function qE(t,e,n){return new t({type:"array",element:e,...Fe(n)})}function YE(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Fe(n)})}function KE(t,e){const n=jE(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(js(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(js(s))}},t(i.value,i)),e);return n}function jE(t,e){const n=new gn({check:"custom",...Fe(e)});return n._zod.check=t,n}function ks(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&vr(t,i,n[i]);return t}function fp(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??Ps,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function os(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function Zt(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const f=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(t,e,f,u)}const d=t._zod.parent;d&&(a.ref||(a.ref=d),Zt(d,e,u),e.seen.get(d).isParent=!0)}const c=e.metadataRegistry.get(t);return c&&ks(a.schema,c),e.io==="input"&&rn(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function af(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function hp(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const c=i.get(o);if(c&&c!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const d=t.external.registry.get(a[0])?.id,f=t.external.uri??(g=>g);if(d)return{ref:f(d)};const h=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=h,{defId:h,ref:`${f("__shared")}#/${o}/${af(h)}`}}const c="#",l=`${c}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:c};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:l+af(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:c,defId:l}=r(a);o.def={...o.schema},l&&(o.defId=l);const u=o.schema;for(const d in u)delete u[d];u.$ref=c};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const l=t.external.registry.get(a[0])?.id;if(e!==a[0]&&l){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function pp(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;pp(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const mp=new Set(["type","properties","required","additionalProperties"]),of=["oneOf","anyOf"];function cf(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function Sl(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!mp.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const l of e){const u=l.properties?.[a]??cf(l);u!=null&&(o.some(d=>JSON.stringify(d)===JSON.stringify(u))||o.push(u))}const c=o.length===1?o[0]:Sl(o)??{allOf:o};vr(n,a,c)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=cf(a);o&&!s.some(c=>JSON.stringify(c)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function JE(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of mp)if(r in t)return;const n=e.filter(r=>of.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=Sl(e);else{const r=n[0],s=of.find(c=>Array.isArray(r[c]));if(Object.keys(r).length!==1)return;const a=e.filter(c=>c!==r),o=r[s].map(c=>Sl([...a,c]));if(o.some(c=>!c))return;i={[s]:o}}i&&(delete t.allOf,ks(t,i))}function gp(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const c=t.seen.get(o);if(c.ref===null)return;const l=c.def??c.schema,u={...l},d=c.ref;if(c.ref=null,d){i(d);const h=t.seen.get(d),g=h.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(g)):ks(l,g),ks(l,u),o._zod.parent===d)for(const m in l)m==="$ref"||m==="allOf"||m in u||delete l[m];if(g.$ref&&h.def)for(const m in l)m==="$ref"||m==="allOf"||m in h.def&&JSON.stringify(l[m])===JSON.stringify(h.def[m])&&delete l[m]}const f=o._zod.parent;if(f&&f!==d){i(f);const h=t.seen.get(f);if(h?.schema.$ref&&(l.$ref=h.schema.$ref,h.def))for(const g in l)g==="$ref"||g==="allOf"||g in h.def&&JSON.stringify(l[g])===JSON.stringify(h.def[g])&&delete l[g]}t.override({zodSchema:o,jsonSchema:l,path:c.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())pp(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const c of t.seen.values())for(const l of[c.schema,c.def]){const u=l?.allOf;if(!Array.isArray(u))continue;const d=o.get(u);d?d.push(l):o.set(u,[l])}for(const c of t.intersections)for(const l of o.get(c)??[])JE(l)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}ks(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const c=o[1];c.def&&c.defId&&(c.def.id===c.defId&&delete c.def.id,vr(a,c.defId,c.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:So(e,"input",t.processors),output:So(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function rn(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return rn(i.element,n);if(i.type==="set")return rn(i.valueType,n);if(i.type==="lazy")return rn(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return rn(i.innerType,n);if(i.type==="intersection")return rn(i.left,n)||rn(i.right,n);if(i.type==="record"||i.type==="map")return rn(i.keyType,n)||rn(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:rn(i.in,n)||rn(i.out,n);if(i.type==="object"){for(const r in i.shape)if(rn(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(rn(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(rn(r,n))return!0;return!!(i.rest&&rn(i.rest,n))}return!1}const QE=(t,e={})=>n=>{const i=fp({...n,processors:e});return Zt(t,i),hp(i,t),gp(i,t)},So=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=fp({...r??{},target:s,io:e,processors:n});return Zt(t,a),hp(a,t),gp(a,t)},Jr=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},Qr=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},lf=(t,e)=>{Jr(t,"minimum",e),Qr(t,"maximum",e)},_p=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},vp=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},xp=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},Sp=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},uf=(t,e)=>Jr(t,"minimum",e.minimum),df=(t,e)=>Qr(t,"maximum",e.maximum),ff=t=>(e,n)=>{Sp(e,n.format);const[i,r]=t[n.format];Jr(e,"minimum",i),Qr(e,"maximum",r)},ew={greater_than:(t,e)=>Jr(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>Qr(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>_p(t,e.value),number_format:ff(Bh),bigint_format:ff(My),min_length:uf,max_length:df,length_equals:(t,e)=>lf(t,e.length),min_size:uf,max_size:df,size_equals:(t,e)=>lf(t,e.size),string_format:(t,e)=>{Sp(t,e.format),e.pattern&&vp(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>xp(t,e.mime)};function Wn(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)ew[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&Jr(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&Jr(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&Qr(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&Qr(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&_p(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&xp(e,r.mime);for(const s of r.patterns??[])vp(e,s);return e}const tw={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},nw=new Map([[np,bM],[iu,EM]]),iw=t=>nw.get(t)??t,rw=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:c,contentEncoding:l,laxFormat:u}=Wn(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=tw[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const d=[...c].map(iw);d.length===1?r.pattern=d[0].source:d.length>1&&(r.allOf=[...d.map(f=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:f.source}))])}},sw=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=Wn(t);r.type=u?"integer":"number";const d=typeof l=="number"&&l>=(s??Number.NEGATIVE_INFINITY),f=typeof c=="number"&&c<=(a??Number.POSITIVE_INFINITY),h=e.target==="draft-04"||e.target==="openapi-3.0";if(d?h?(r.minimum=l,r.exclusiveMinimum=!0):r.exclusiveMinimum=l:typeof s=="number"&&(r.minimum=s),f?h?(r.maximum=c,r.exclusiveMaximum=!0):r.exclusiveMaximum=c:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const p of o)Number.isFinite(p)&&p!==0?g.add(Math.abs(p)):os(t,e,r,i,`A multipleOf divisor of ${p} cannot be represented in JSON Schema`);const[x,...m]=g;x!==void 0&&(r.multipleOf=x),m.length&&(r.allOf=[...r.allOf??[],...m.map(p=>({multipleOf:p}))])}},aw=(t,e,n,i)=>{n.not={}},ow=(t,e,n,i)=>{},cw=(t,e,n,i)=>{const r=t._zod.def,s=pl(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},lw=(t,e,n,i)=>{os(t,e,n,i,"Custom types cannot be represented in JSON Schema")},uw=(t,e,n,i)=>{os(t,e,n,i,"Transforms cannot be represented in JSON Schema")},dw=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=Wn(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=Zt(s.element,e,{...i,path:[...i.path,"items"]})};function yl(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?yl(e.out):e.type==="catch"?yl(e.innerType):t._zod.optin}const fw=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&os(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const l in a)vr(r.properties,l,Zt(a[l],e,{...i,path:[...i.path,"properties",l]}));const c=[];for(const l of Object.keys(a)){const u=s.shape[l];(e.io==="input"?yl(u)===void 0:u._zod.optout===void 0)&&c.push(l)}c.length>0&&(r.required=c),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=Zt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},hw=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,c)=>Zt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",c]}));s?n.oneOf=a:n.anyOf=a},pw=(t,e,n,i)=>{const r=t._zod.def,s=Zt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=Zt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=l=>"allOf"in l&&Object.keys(l).length===1,c=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=c,e.intersections.push(c)},mw=(t,e,n,i)=>{const r=t._zod.def,s=Zt(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},gw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},ru=Symbol();function yp(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,c)=>typeof c!="bigint"?c:(s=!0,null));return s?(os(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),ru):JSON.parse(a)}const _w=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=yp(r.defaultValue,t,e,n,i);a!==ru&&(n.default=a)},vw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=yp(r.defaultValue,t,e,n,i);a!==ru&&(n._prefault=a)},xw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{os(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},Sw=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;Zt(a,e,i);const o=e.seen.get(t);o.ref=a},yw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},Mp=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},hf=new WeakSet([Object.prototype,Error.prototype]);function ka(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const Mw=(t,e)=>{Vy.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);hf.has(n)||(hf.add(n),ka(n,"format",i=>r=>Zy(i,r)),ka(n,"flatten",i=>r=>Xy(i,r)),ka(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,ml,2)}),ka(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,ml,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Rn=ae("ZodError",Mw,void 0,{Parent:Error}),bw=jl(Rn),Ew=Jl(Rn),ww=Ql(Rn),Tw=eu(Rn),Aw=Qy(Rn),Rw=eM(Rn),Cw=tM(Rn),Pw=nM(Rn),Iw=iM(Rn),Lw=rM(Rn),Nw=sM(Rn),Dw=aM(Rn);function Uw(){Yn.localeError||$i(iE())}function su(){Yn.memoizer||$i({memoizer:eE()})}const Dt=ae("ZodType",(t,e)=>(Uw(),Nt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(yn(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return Bi(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(PT(t,e))},superRefine(t,e){return this.check(IT(t,e))},overwrite(t){return this.check(as(t))},optional(){return gf(this)},exactOptional(){return _T(this)},nullable(){return _f(this)},nullish(){return gf(_f(this))},nonoptional(t){return bT(this,t)},array(){return zr(this)},or(t){return fT([this,t])},and(t){return pT(this,t)},transform(t){return vf(this,gT(t))},default(t){return ST(this,t)},prefault(t){return MT(this,t)},catch(t){return wT(this,t)},pipe(t){return vf(this,t)},readonly(){return RT(this)},describe(t){const e=this.clone();return Ps.add(e,{description:t}),e},meta(...t){if(t.length===0)return Ps.get(this);const e=this.clone();return Ps.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return Gh(this,"~standard",{...jh(this),jsonSchema:{input:So(this,"input"),output:So(this,"output")}})},set"~standard"(t){Fi(this,"~standard",t)},parse:function t(e,n){return bw(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await Ew(this,e,n,{callee:t})},safeParse(t,e){return ww(this,t,e)},async safeParseAsync(t,e){return Tw(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){Fi(this,"spa",t)},validate(t,e){return Ky(this,t,e)},validateAsync(t,e){return Jy(this,t,e)},encode:function t(e,n){return Aw(this,e,n,{callee:t})},decode:function t(e,n){return Rw(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await Cw(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await Pw(this,e,n,{callee:t})},safeEncode(t,e){return Iw(this,t,e)},safeDecode(t,e){return Lw(this,t,e)},async safeEncodeAsync(t,e){return Nw(this,t,e)},async safeDecodeAsync(t,e){return Dw(this,t,e)},toJSONSchema(t){return QE(this,{})(t)},get description(){return Ps.get(this)?.description},get _def(){return this._zod.def}}),bp=ae("_ZodString",(t,e)=>{nu.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>rw(t,n,i)},Vh({format:t=>Wn(t).format??null,minLength:t=>Wn(t).minimum??null,maxLength:t=>Wn(t).maximum??null},{regex(...t){return this.check(FE(...t))},includes(...t){return this.check(BE(...t))},startsWith(...t){return this.check($E(...t))},endsWith(...t){return this.check(HE(...t))},min(...t){return this.check(xo(...t))},max(...t){return this.check(up(...t))},length(...t){return this.check(dp(...t))},nonempty(...t){return this.check(xo(1,...t))},lowercase(t){return this.check(kE(t))},uppercase(t){return this.check(zE(t))},trim(){return this.check(VE())},normalize(...t){return this.check(GE(...t))},toLowerCase(){return this.check(WE())},toUpperCase(){return this.check(XE())},slugify(){return this.check(ZE())}})),Ow=ae("ZodString",(t,e)=>{nu.init(t,e),bp.init(t,e)},{email(t){return this.check(oE($w,t))},url(t){return this.check(hE(Gw,t))},jwt(t){return this.check(RE(rT,t))},emoji(t){return this.check(pE(Vw,t))},guid(t){return this.check(cE(Hw,t))},uuid(t){return this.check(lE(za,t))},uuidv4(t){return this.check(uE(za,t))},uuidv6(t){return this.check(dE(za,t))},uuidv7(t){return this.check(fE(za,t))},nanoid(t){return this.check(mE(Ww,t))},cuid(t){return this.check(gE(Xw,t))},cuid2(t){return this.check(_E(Zw,t))},ulid(t){return this.check(vE(qw,t))},base64(t){return this.check(wE(tT,t))},base64url(t){return this.check(TE(nT,t))},xid(t){return this.check(xE(Yw,t))},ksuid(t){return this.check(SE(Kw,t))},ipv4(t){return this.check(yE(jw,t))},ipv6(t){return this.check(ME(Jw,t))},cidrv4(t){return this.check(bE(Qw,t))},cidrv6(t){return this.check(EE(eT,t))},e164(t){return this.check(AE(iT,t))},datetime(t){return this.check(CE(Fw,t))},date(t){return this.check(PE(kw,t))},time(t){return this.check(IE(zw,t))},duration(t){return this.check(LE(Bw,t))}});function rt(t){return aE(Ow,t)}const wt=ae("ZodStringFormat",(t,e)=>{yt.init(t,e),bp.init(t,e)}),Fw=ae("ZodISODateTime",(t,e)=>{fb.init(t,e),wt.init(t,e)}),kw=ae("ZodISODate",(t,e)=>{hb.init(t,e),wt.init(t,e)}),zw=ae("ZodISOTime",(t,e)=>{pb.init(t,e),wt.init(t,e)}),Bw=ae("ZodISODuration",(t,e)=>{mb.init(t,e),wt.init(t,e)}),$w=ae("ZodEmail",(t,e)=>{JM.init(t,e),wt.init(t,e)}),Hw=ae("ZodGUID",(t,e)=>{KM.init(t,e),wt.init(t,e)}),za=ae("ZodUUID",(t,e)=>{jM.init(t,e),wt.init(t,e)}),Gw=ae("ZodURL",(t,e)=>{rb.init(t,e),wt.init(t,e)}),Vw=ae("ZodEmoji",(t,e)=>{sb.init(t,e),wt.init(t,e)}),Ww=ae("ZodNanoID",(t,e)=>{ab.init(t,e),wt.init(t,e)}),Xw=ae("ZodCUID",(t,e)=>{ob.init(t,e),wt.init(t,e)}),Zw=ae("ZodCUID2",(t,e)=>{cb.init(t,e),wt.init(t,e)}),qw=ae("ZodULID",(t,e)=>{lb.init(t,e),wt.init(t,e)}),Yw=ae("ZodXID",(t,e)=>{ub.init(t,e),wt.init(t,e)}),Kw=ae("ZodKSUID",(t,e)=>{db.init(t,e),wt.init(t,e)}),jw=ae("ZodIPv4",(t,e)=>{gb.init(t,e),wt.init(t,e)}),Jw=ae("ZodIPv6",(t,e)=>{vb.init(t,e),wt.init(t,e)}),Qw=ae("ZodCIDRv4",(t,e)=>{xb.init(t,e),wt.init(t,e)}),eT=ae("ZodCIDRv6",(t,e)=>{yb.init(t,e),wt.init(t,e)}),tT=ae("ZodBase64",(t,e)=>{Mb.init(t,e),wt.init(t,e)}),nT=ae("ZodBase64URL",(t,e)=>{Eb.init(t,e),wt.init(t,e)}),iT=ae("ZodE164",(t,e)=>{wb.init(t,e),wt.init(t,e)}),rT=ae("ZodJWT",(t,e)=>{Ab.init(t,e),wt.init(t,e)}),Ep=ae("ZodNumber",(t,e)=>{ip.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>sw(t,n,i,r),t.isFinite=!0},Vh({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=Wn(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=Wn(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=Wn(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>Wn(t).format??null},{gt(t,e){return this.check(rf(t,e))},gte(t,e){return this.check(vc(t,e))},min(t,e){return this.check(vc(t,e))},lt(t,e){return this.check(nf(t,e))},lte(t,e){return this.check(_c(t,e))},max(t,e){return this.check(_c(t,e))},int(t){return this.check(pf(t))},safe(t){return this.check(pf(t))},positive(t){return this.check(rf(0,t))},nonnegative(t){return this.check(vc(0,t))},negative(t){return this.check(nf(0,t))},nonpositive(t){return this.check(_c(0,t))},multipleOf(t,e){return this.check(sf(t,e))},step(t,e){return this.check(sf(t,e))},finite(){return this}}));function hn(t){return NE(Ep,t)}const sT=ae("ZodNumberFormat",(t,e)=>{Rb.init(t,e),Ep.init(t,e)});function pf(t){return DE(sT,t)}const aT=ae("ZodUnknown",(t,e)=>{Cb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ow()});function mf(){return UE(aT)}const oT=ae("ZodNever",(t,e)=>{Pb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>aw(t,n,i)});function cT(t){return OE(oT,t)}const lT=ae("ZodArray",(t,e)=>{su(),Nb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>dw(t,n,i,r),t.element=e.element},{min(t,e){return this.check(xo(t,e))},nonempty(t){return this.check(xo(1,t))},max(t,e){return this.check(up(t,e))},length(t,e){return this.check(dp(t,e))},unwrap(){return this.element}});function zr(t,e){return qE(lT,t,e)}const uT=ae("ZodObject",(t,e)=>{su(),Ob.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>fw(t,n,i,r),Oy(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return rr(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(yn(this._zod.def,{catchall:t}))},passthrough(){return this.clone(yn(this._zod.def,{catchall:mf()}))},loose(){return this.clone(yn(this._zod.def,{catchall:mf()}))},strict(){return this.clone(yn(this._zod.def,{catchall:cT()}))},strip(){return this.clone(yn(this._zod.def,{catchall:void 0}))},extend(t){return wy(this,t)},safeExtend(t){return Ty(this,t)},merge(t){return Ay(this,t)},pick(t){return by(this,t)},omit(t){return Ey(this,t)},partial(...t){return kd(wp,this,t[0])},exactPartial(...t){return kd(Tp,this,t[0],"exactPartial")},required(...t){return Ry(Ap,this,t[0])}});function ci(t,e){const n={type:"object",shape:t??{},...Fe(e)};return new uT(n)}const dT=ae("ZodUnion",(t,e)=>{Fb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>hw(t,n,i,r),t.options=e.options});function fT(t,e){return new dT({type:"union",options:t,...Fe(e)})}const hT=ae("ZodIntersection",(t,e)=>{kb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>pw(t,n,i,r)});function pT(t,e){return new hT({type:"intersection",left:t,right:e})}const Ml=ae("ZodEnum",(t,e)=>{zb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(i,r,s)=>cw(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Ml({...e,checks:[],...Fe(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new Ml({...e,checks:[],...Fe(r),entries:s})}});function rr(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new Ml({type:"enum",entries:n,...Fe(e)})}const mT=ae("ZodTransform",(t,e)=>{su(),Bb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>uw(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new Wh(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(js(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(js(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function gT(t){return new mT({type:"transform",transform:t})}const wp=ae("ZodOptional",(t,e)=>{ap.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Mp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function gf(t){return new wp({type:"optional",innerType:t})}const Tp=ae("ZodExactOptional",(t,e)=>{$b.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Mp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function _T(t){return new Tp({type:"optional",innerType:t})}const vT=ae("ZodNullable",(t,e)=>{Hb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>mw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function _f(t){return new vT({type:"nullable",innerType:t})}const xT=ae("ZodDefault",(t,e)=>{Gb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>_w(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function ST(t,e){return new xT({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():kh(e)}})}const yT=ae("ZodPrefault",(t,e)=>{Vb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>vw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function MT(t,e){return new yT({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():kh(e)}})}const Ap=ae("ZodNonOptional",(t,e)=>{Wb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>gw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function bT(t,e){return new Ap({type:"nonoptional",innerType:t,...Fe(e)})}const ET=ae("ZodCatch",(t,e)=>{Xb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>xw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function wT(t,e){return new ET({type:"catch",innerType:t,catchValue:typeof e=="function"?e:ky(e)})}const TT=ae("ZodPipe",(t,e)=>{Zb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Sw(t,n,i,r),t.in=e.in,t.out=e.out});function vf(t,e){return new TT({type:"pipe",in:t,out:e})}const AT=ae("ZodReadonly",(t,e)=>{qb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>yw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function RT(t){return new AT({type:"readonly",innerType:t})}const CT=ae("ZodCustom",(t,e)=>{Yb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>lw(t,n,i,r)});function PT(t,e={}){return YE(CT,t,e)}function IT(t,e){return KE(t,e)}const LT=ci({id:rt(),name:rt(),role:rt(),state:rr(["idle","thinking","working","reviewing"]),stationId:rr(["culture","analyzer","explorer","notebook"]),boredom:hn().min(0).max(100).nullable(),boredomSpectrum:ci({position:hn().min(0).max(1),color:rt(),regime:rt()}).optional()});ci({runId:rt(),lastSequence:hn().int().nonnegative(),status:rr(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:hn(),title:rt().optional(),config:ci({mode:rr(["tinker_modal","recorded"]),arm:rr(["A","B","C","D","full"]),rounds:hn(),task:rt().optional(),seed:hn().nullable(),model:rt().nullable()}),sourceCommit:rt(),progress:hn().min(0).max(1),round:hn(),boredom:hn(),regime:rt(),value:hn().nullable(),reference:hn().nullable(),agents:zr(LT),findings:zr(ci({agent:rt().optional(),role:rt(),message:rt(),round:hn().optional(),memoryId:rt().optional()})),results:zr(ci({agent:rt(),round:hn(),kind:rt(),status:rt(),value:hn().nullable(),commit:rt().nullable().optional(),description:rt(),sources:zr(rt()).optional()})),sources:zr(ci({id:rt().nullable(),title:rt().nullable(),url:rt().nullable(),query_id:rt().nullable()})),error:rt().nullable(),metric:ci({name:rt(),unit:rt(),direction:rr(["minimize","maximize"])}),provenance:ci({llm:rt(),gpu:rt(),exa:rt(),memory:rt(),execution:rt().optional()})});async function Rp(t,e){{const n=Nh(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const xc=(t,e)=>t.filter(e).at(-1),es=(t,e)=>t.filter(n=>n.tick<=e),_e=t=>typeof t=="string"&&t.trim()?t.trim():null,St=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Ni=t=>typeof t=="boolean"?t:null;function Js(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const bl=t=>new Map(t.map(e=>[String(e.id),e]));function xf(t){const e=_e(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:_e(n.idea)||_e(n.text)||e}:{text:e}}catch{return{text:e}}}function Qs(t,e,n){if(!t)return null;const i=es(t.events,n).filter(y=>y.refs?.experiment_id===e);if(!i.length)return null;const r=bl(Js(t,"experiments")).get(e)||{},s=i.find(y=>y.type==="experiment.started"),a=xc(i,y=>y.type==="experiment.finished"),o=xc(i,y=>y.type==="gate.checked"),c=xc(i,y=>y.type==="verdict.issued"),l=i.find(y=>y.refs?.study_id),u=_e(r.hypothesis_id)||_e(s?.refs?.hypothesis_id),d=u?es(t.events,n).find(y=>y.type==="hypothesis.proposed"&&y.refs?.hypothesis_id===u):void 0,f=d?bl(Js(t,"hypotheses")).get(u)||{}:null,h=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(h.reasons)&&h.reasons.length>0||typeof h.pass=="boolean"||St(h.attempts)>0,x=o?.payload||{},m=[...Array.isArray(x.reasons)?x.reasons:[],...a&&Array.isArray(h.reasons)?h.reasons:[]].map(String),p=t.events.some(y=>y.type==="verdict.issued"&&y.refs?.experiment_id===e),S=c||a&&!p?r.verdict:null,w=c?.payload||{};return{id:e,agentId:_e(r.agent_id)||s?.agentId||i[0].agentId||null,round:St(r.round)??St(i[0].round),kind:_e(r.kind),commit:_e(r.commit)||_e(x.candidate_commit),role:_e(r.role)||_e(s?.payload?.role),description:_e(r.description)||_e(s?.payload?.description)||_e(s?.message),idea:f?{text:xf(f.text||d?.payload?.text).text,rationale:_e(f.rationale)||_e(d?.payload?.rationale)||_e(xf(f.text||d?.payload?.text).rationale),predictedDelta:St(f.predicted_delta)??St(r.predicted_delta),sources:(Array.isArray(f.source_ids)?f.source_ids:[]).map(String)}:null,descriptor:r.descriptor||x.descriptor||null,gate:o||a&&g?{pass:Ni(x.pass)??Ni(h.pass),reasons:[...new Set(m)],attempts:St(h.attempts),text:_e(x.text)||_e(o?.message),priorArt:(Array.isArray(x.prior_art)?x.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:_e(a.payload?.status)||_e(r.status),metric:St(a.payload?.metric_value)??St(r.metric_value),reward:St(a.payload?.reward),text:_e(a.payload?.text)||_e(a.message),tick:a.tick}:null,verdict:c||S?{by:_e(S?.by_agent_id)||c?.agentId||null,verdict:_e(w.verdict)||_e(S?.verdict),why:_e(w.why)||_e(S?.why),tick:c?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([y,A])=>typeof A=="string"&&(a||y==="diff"))),logTail:a?_e(r.log_tail):null,studyId:_e(r.study_id)||_e(l?.refs?.study_id),timeline:i.map(y=>({tick:y.tick,type:y.type,text:_e(y.payload?.text)||_e(y.message)||y.type}))}}function NT(t,e){return[...new Set(es(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function au(t,e){if(!t)return[];const n=es(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(NT(t,e)),s=Js(t,"experiments").filter(a=>r.has(String(a.id)));return Js(t,"sources").flatMap(a=>{const o=String(a.id),c=i.get(o),l=St(a.tick);if(!c&&(l==null||l>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(_e).filter(Boolean):[],d=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(f=>r.has(f)),...s.filter(f=>Array.isArray(f.source_ids)&&f.source_ids.includes(o)).map(f=>String(f.id))])];return[{id:o,title:_e(a.title)||_e(c?.payload?.summary)||_e(a.url)||o,url:_e(a.url)||_e(c?.payload?.url),highlight:u[0]||_e(a.highlight)||_e(a.extract)||_e(c?.payload?.text),agentId:_e(a.agent_id)||c?.agentId||null,tick:c?.tick??l,citedBy:d}]})}const DT=t=>Array.isArray(t)?t.map(e=>({rho:St(e?.rho),p:St(e?.p),n:St(e?.n),problem:e?.problem})):[],Sf=t=>({rho:St(t.rho),p:St(t.p),n:St(t.n),halves:DT(t.halves),significant:Ni(t.significant),replicated:Ni(t.replicated),confirmed:Ni(t.confirmed)});function El(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(El);if(typeof t=="object"){const e=t,n=_e(e.text)||_e(e.why)||_e(e.reason)||_e(e.verdict);return n?[[_e(e.by)||_e(e.judge)||_e(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>El(r).map(s=>`${i}: ${s}`))}return[String(t)]}function yf(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Ni(e.available)??!0,score:St(e.score),rejected:Ni(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const c=o&&typeof o=="object"?o:{};return[a,{laugh:St(c.laugh),think:St(c.think),reason:_e(c.reason),model:_e(c.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:_e(a.title)||"",url:_e(a.url)||"",snippet:_e(a.snippet)||""})),priorWorkAvailable:Ni(e.prior_work_available)??!1}}function ou(t,e){if(!t)return[];const n=es(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=bl(Js(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),c=i.get(o)||{},l=s.payload||{};if(s.type==="study.registered"){const d=c.dataset&&typeof c.dataset=="object"?c.dataset:{};r.set(o,{id:o,agentId:_e(c.agent_id)||s.agentId||null,experimentId:_e(c.experiment_id)||_e(s.refs?.experiment_id),round:St(c.round)??St(s.round),field:_e(l.field)||_e(c.field),direction:_e(c.direction),question:_e(l.question)||_e(c.question),hypothesis:_e(c.hypothesis),mechanism:_e(c.mechanism),dataset:{url:_e(d.url),x:_e(l.x)||_e(d.x),y:_e(l.y)||_e(d.y),xLevel:_e(d.x_level),yLevel:_e(d.y_level),id:_e(c.dataset_id)},predictedRho:St(l.predicted_rho)??St(c.predicted_rho),citations:(Array.isArray(c.citations)?c.citations:[]).map(String),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...Sf({...c,...l,halves:l.halves??c.halves,significant:l.significant??c.significant}),headline:_e(l.headline)||_e(c.headline),rejected:_e(l.rejected),text:_e(l.text)||_e(s.message)},u.committee=yf(l.committee??c.committee)):s.type==="study.replicated"?u.replications.push(Sf(l)):s.type==="award.issued"&&(u.award={award:_e(l.award),score:St(l.score),rejected:_e(l.rejected),headline:_e(l.headline),verdicts:El(l.verdicts??c.committee?.verdicts),text:_e(l.text)||_e(s.message)},u.committee=yf(l)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function Cp(t,e,n,i=40){return es(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:_e(s.kind),text:_e(s.text)||_e(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const UT=(t,e=3)=>t==null?"—":(t>0?"+":"")+t.toFixed(e),wl=t=>t==null?"—":t<.001?"<0.001":t.toFixed(3),Mf={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},Sc=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function zs(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const wi=t=>typeof t=="string"?t.trim():"";function Pp(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},c=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const l=wi(o.regime);if(!l)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",d=s.get(u);s.set(u,l),c&&d!==l&&Mf[l]&&r.push({tick:a.tick,kind:"regime",title:Mf[l],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(c)if(a.type==="discovery.made"){const l=Sc(o.metric_value),u=Sc(o.previous_best),d=wi(o.title),f=l==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${zs(l)}${u==null?"":` (was ${zs(u)})`}`,h=Sc(o.reward);r.push({tick:a.tick,kind:"best",title:l==null?"New discovery!":"New best!",detail:[f||(h==null?"":`reward ${zs(h)}`),d].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:wi(o.award)||wi(o.prize)||"Award issued",detail:[wi(o.title)||wi(o.headline),wi(o.citation)||wi(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function OT(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}const FT=/\b(?:402|credit|billing|payment|quota)\b/i;function Ip(t,e){const n=i=>typeof i=="string"&&FT.test(i.replace(/https?:\/\/\S+/gi," "));return Array.isArray(t.publish_errors)&&t.publish_errors.some(i=>n(i.kind)||n(i.message))?!0:(e?.events||[]).some(i=>(i.type==="run.finished"||i.type==="run.stopped")&&(n(i.message)||["text","error","reason","detail","message"].some(r=>n(i.payload?.[r]))))}function kT(t){const e=t.provenance?.command,i=(Array.isArray(e)?e.join(" "):typeof e=="string"?e:"").match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1],r=Number(i);return Number.isFinite(r)&&r>0?r:void 0}function zT(t,e){const n=(e?.events||[]).flatMap(o=>[o.round,o.payload?.round]).filter(o=>typeof o=="number"&&Number.isFinite(o)),i=Math.max(t.time?.rounds||0,...n),r=t.requestedRounds||t.requested_rounds||t.rounds||t.run?.rounds||kT(t),s=i?` (${i}${r?`/${r}`:""} rounds)`:"",a=Ip(t,e)?" · Tinker credit ran out":"";return`Stopped real run${s}${a}`}function Lp(t,e){const n=t?.provenance,i=[];if(n?.exa==="off"?i.push("Exa off"):(n?.exa==="live"||n?.exa==="on")&&i.push("Exa on"),n?.memory_backend==="pastdev"?i.push("past.dev memory"):n?.memory_backend==="local"&&i.push("local memory"),n?.llm==="fake"||n?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:i};const r=typeof n?.llm=="string"&&n.llm!=="fake"?OT(n.llm):"";return r?t?.status==="stopped"?{label:zT(t,e),tone:"stopped",chips:i}:t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:i}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${r} run`,tone:"live",chips:i}:{label:"Finished real run",tone:"finished",chips:i}:{label:"Unverified recording",tone:"unknown",chips:i}}function BT(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function $T(t){return t.sample===!1&&t.status==="stopped"?{eyebrow:"RESEARCH / SWARM RUN",kicker:"● SWARM RUN · STOPPED",callout:"Swarm run · stopped. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${Np(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function HT(t,e){return!!t.live||e<t.totalTicks}function Uo(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function GT(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function VT(t,e){return t.filter(n=>n.tick<=e)}function WT(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const Np=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function XT(t){const e=t.publish_errors;return Array.isArray(e)?e.filter(n=>n.kind!=="recovered").length:typeof e=="number"?e:0}function ZT(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}function qT(t){const e=t.status==="stopped"?"● SWARM RUN · STOPPED":t.stale?`LIVE RUN STALLED${t.lastUpdateTs?" · NO UPDATES SINCE "+Np(t.lastUpdateTs):""}`:t.live?"FOLLOWING LIVE SWARM":"SWARM RUN · FINISHED",n=XT(t);return n?`${e} · ${n} PUBLISH ERROR${n===1?"":"S"}`:e}const bf=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function YT(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const c=[...n[a]||[]],l=new Map(c.map((u,d)=>[bf(u),d]));for(const u of o){const d=l.get(bf(u));d===void 0?c.push(u):c[d]=u}n[a]=c}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function KT(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return YT(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const jT={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel prize hunt"};function Ef(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function Dp(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function Up(t){return t.task_title||jT[Dp(t)]||t.title}function Tl(t){if(!t?.name)return"";const e=t.name.replaceAll("_"," ");return t.direction==="maximize"?`${e} ↑ higher is better`:`${e} ↓ lower is better`}function cu(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};if(t.status==="stopped")return{status:"stopped",label:"STOPPED",detail:"The run ended before finishing"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${Ef(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${Ef(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function JT(t){const e=t.publish_errors;return Array.isArray(e)?e.length:typeof e=="number"?e:0}function QT(t){const e=JT(t);return e?`${e} publish error${e===1?"":"s"}`:""}function eA(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function tA(t){const e=cu(t),n=t.sample===!1?ZT({...t,stale:e.status==="stale",live:e.status==="live"}):"",i=Up(t),r=i===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[n+i,r,t.sample===!1&&e.status==="stopped"?e.label.toLowerCase():"",t.sample===!1?eA(t):""].filter(Boolean).join(" · ")}function nA(t,e){const n=[["Live now",t.filter(r=>r.sample===!1&&r.live)],["Swarm runs",t.filter(r=>r.sample===!1&&!r.live)],["Recorded samples",t.filter(r=>r.sample!==!1)]],i=r=>`<option value="${e(r.id)}">${e(tA(r))}</option>`;return n.filter(([,r])=>r.length).map(([r,s])=>`<optgroup label="${r}">${s.map(i).join("")}</optgroup>`).join("")}const Bs=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:null,Op=t=>Array.isArray(t)?t.filter(e=>!!Bs(e)):Bs(t)?Object.values(t).filter(e=>!!Bs(e)):[],iA="Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.";function lu(t,e){const n=t?.metric?.description||"";return!!t&&(Dp(t)==="ignobel"||t.metric?.name==="replicated_findings"||/replicated and significant/i.test(n)||Op(e?.entities?.studies).length>0)}function uu(t,e){return lu(t,e)?!Op(e?.entities?.studies).some(i=>i.committee!=null||Bs(i.result)?.committee!=null||Bs(i.graded)?.committee!=null)&&!(e?.events||[]).some(i=>i.type==="award.issued"):!1}function du(t,e){if(lu(t,e)){if(uu(t,e))return iA;const n=t?.metric?.description;if(n)return n.replace(/\breplicated\s+and\s+significant\b/gi,"split-half consistent and significant").replace(/\breplicated\b/gi,"passed split-half consistency").replace(/\breplication\b/gi,"split-half consistency")}return t?.proxy_note}const Qa={minRho:.1,alpha:.005,splitAlpha:.05},nr=t=>typeof t=="number"&&Number.isFinite(t),yc=t=>nr(t)?t:void 0,Ba=t=>String(t);function Fp(t){const e=t&&typeof t=="object"?t:{};return{minRho:yc(e.minRho??e.min_rho??e.min_effect_rho)??Qa.minRho,alpha:yc(e.alpha??e.p_alpha??e.significance_alpha)??Qa.alpha,splitAlpha:yc(e.splitAlpha??e.split_alpha??e.replication_alpha)??Qa.splitAlpha}}function kp(t,e={}){const n={...Qa,...e},i=[],r=t?.rho,s=t?.p,a=t?.direction==="positive"?1:t?.direction==="negative"?-1:nr(r)?Math.sign(r):0,o=t?.halves;return(!nr(r)||r*a<n.minRho)&&i.push(`|ρ| ≥ ${Ba(n.minRho)}`),(!nr(s)||s>=n.alpha)&&i.push(`p < ${Ba(n.alpha)}`),nr(r)&&o&&o.length>=2&&o.every(l=>{const u=l?.rho,d=l?.p;return nr(u)&&nr(d)&&d<n.splitAlpha&&u*a>=n.minRho&&!l.problem})||i.push(`split-half consistency (both halves p < ${Ba(n.splitAlpha)}, same direction, |ρ| ≥ ${Ba(n.minRho)})`),{pass:i.length===0,failures:i}}const wf=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Ti=t=>typeof t=="string"?t:"";function rA(t){const e=wf(t?.entities?.sources),n=new Map(e.map(o=>[Ti(o.url),o]).filter(([o])=>o)),i=wf(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(c=>{const l=Ti(c),u=n.get(l);return{study:Ti(o.question)||Ti(o.headline)||Ti(o.id),url:l,sourceId:u?String(u.id??u.source_id??""):"",title:u?Ti(u.title):""}})),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(Ti(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&/search|exa/.test(Ti(o.payload?.kind))).length,memoryRecalls:s,pastdev:a}}function zp(t){const e=ou(t,Number.MAX_SAFE_INTEGER),n=Pp(t?.events||[],-1,Number.MAX_SAFE_INTEGER).filter(a=>a.kind==="award"),i=e.filter(a=>a.result?.confirmed===!0||a.result?.replicated===!0||a.replications.some(o=>o.confirmed===!0||o.replicated===!0)),r=i.filter(a=>kp(a.result?{...a.result,direction:a.direction||void 0}:null,Fp(t?.manifest?.judging)).pass).length,s=du(t?.manifest,t)||"";return{studies:e.length,registered:e.length,confirmed:i.length,underCurrentRules:r,passed:i.length,awards:n.map(a=>[a.title,a.detail].filter(Boolean).join(" · ")),proxyNote:s,isIgnobel:lu(t?.manifest,t),preCommittee:uu(t?.manifest,t)}}function sA(t,e,n,i=zp(null),r=null,s=null){const a=r?.provenance,o=Lp(r,s||void 0),c=t.tools.map(p=>{let S=p.name,w=p.detail,y="";if(p.kind==="llm"){const A=a?.llm==="fake"||a?.llm_mode==="fake",T=typeof a?.llm=="string"?a.llm:"",_=T&&T!=="fake"&&T.split("/").filter(Boolean).at(-1)||"";A?(S=p.fakeName||p.name,w=p.fakeDetail||p.detail,y=p.fakeSuffix||""):_?(S=a?.llm_mode==="tinker"&&p.tinkerName||p.name,w=(a?.llm_mode==="tinker"&&p.tinkerDetail||p.detail).replace(/\{model\}/g,/kimi/i.test(T)?"Kimi":_)):(w=p.unverifiedDetail||p.detail,y=p.unknownSuffix||"")}else if(p.kind==="exa"){const A=a?.exa;y=A==="off"?p.offSuffix||"":A==="live"||A==="on"?"":p.unknownSuffix||""}else p.kind==="memory"&&(y=a?.memory_backend==="pastdev"?"":a?.memory_backend==="local"?p.localSuffix||"":a?.memory_backend==="off"?p.offSuffix||"":p.unknownSuffix||"");return`<li><b>${n(S)}</b> ${n(w)}${y?` <span class="intro-provenance-note">${n(y)}</span>`:""}</li>`}).join(""),l=`<div class="provenance-badge intro-provenance" data-tone="${o.tone}" role="status" aria-label="${n(o.label)}"><span class="provenance-badge-label">${n(o.label)}</span></div>`,u=e.citations.slice(0,12).map(p=>`<li><span>${n(p.study)}</span> ${p.sourceId?`<button class="chip" data-source="${n(p.sourceId)}">${n(t.labels.source)} ${n(p.title||p.url)}</button>`:`${/^https?:\/\//i.test(p.url)?`<a href="${n(p.url)}" target="_blank" rel="noopener noreferrer">${n(p.url)}</a>`:`<code>${n(p.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join(""),d=(p,S)=>p.replace(/\{([^}]+)\}/g,(w,y)=>String(S[y]??"")),f=i.studies?`<p>${n(d(t.results.countLine,{N:i.registered,M:i.confirmed,K:i.underCurrentRules}))}</p>`:`<p>${n(t.results.noStudies)}</p>`,h=i.isIgnobel&&i.studies?`<p class="intro-result-line">${n(d(t.results.factualLine,{N:i.registered,K:i.underCurrentRules,committeeSuffix:i.preCommittee?t.results.noCommitteeSuffix:""}))}</p>`:"",g=i.awards.length?`<p>${n(d(t.results.awardCount,{N:i.awards.length}))}</p><ul>${i.awards.map(p=>`<li>${n(p==="Award issued"?t.results.awardFallback:p)}</li>`).join("")}</ul>`:`<p>${n(t.results.noAwards)}${r&&Ip(r,s)?n(t.results.creditErrorSuffix):""}</p>`,x=`<p class="track3-note"><a href="${n(t.results.memoryComparisonUrl)}" target="_blank" rel="noopener noreferrer">${n(t.results.memoryComparisonLine)}</a></p>`,m=`<p class="track3-note">${n(t.results.bixbenchLine)}</p>`;return`<div class="intro-card">${l}<h1>${n(t.replay.title)}</h1><p class="intro-subline">${n(t.replay.subline)}</p>${h}<button id="intro-start" class="intro-start">${n(t.replay.button)}</button><a id="intro-results-link" class="intro-results-button" href="#intro-real-results">${n(t.replay.resultsButton)}</a><a id="intro-qualifier" class="intro-qualifier" href="#intro-real-results">${n(t.replay.qualifier)}</a>
<details id="intro-about" class="intro-about"><summary>${n(t.sections.about)}</summary><div class="intro-sections"><details class="intro-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.title)} · ${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details>
<details class="intro-section"><summary>${n(t.sections.tools)}</summary><ul class="intro-tools">${c}</ul></details>
<details class="intro-section"><summary>${n(t.sections.authors)}</summary><p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details>
<details class="intro-section"><summary>${n(t.sections.boredom)}</summary><h2>${n(t.boredom.title)}</h2>${t.boredom.paragraphs.map(p=>`<p>${n(p)}</p>`).join("")}<p class="muted">${n(t.boredom.source)}</p></details>
<details class="intro-section intro-trail"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${u?`<ul class="intro-cites">${u}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details></div></details>
<details id="intro-real-results" class="intro-real-results" hidden><summary>${n(t.sections.results)}</summary>${f}${g}<p class="track3-note">${n(t.results.track3Line)}</p>${x}${m}${i.proxyNote?`<p><b>${n(t.results.proxyNote)}:</b> ${n(i.proxyNote)}</p>`:`<p class="muted">${n(t.results.noProxy)}</p>`}</details></div>`}const aA={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Built in one weekend at the SF AI Research Hack (Nov 14–15, hosted by Iterate): an artificial scientist swarm that notices when it is bored and changes approach."},oA=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],cA={placeholder:!0,names:["[AUTHORS — names to come]"]},lA={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},uA={title:"This year the Ig Nobel research prize was discovered early by a phenomenal breakthrough in artificial scientist swarms.",subline:"The secret: making AI less boring.",button:"Watch the swarm",qualifier:"tongue-in-cheek headline",resultsButton:"See the real results"},dA={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa",results:"The real results"},fA={source:"Exa result:",missingExa:"no Exa result in this recording",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},hA={studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"Prizes awarded: {N}",awardFallback:"Award issued",creditErrorSuffix:" (Tinker credit ran out)",proxyNote:"Metric / proxy",noStudies:"No Ig Nobel study registrations appear in this recording.",noAwards:"No prizes awarded yet — this run stopped before committee judging.",noProxy:"No proxy note is present in this recording.",factualLine:"Real result so far: {K} of {N} preregistered tests held up{committeeSuffix}",noCommitteeSuffix:"; no committee score yet",countLine:"{N} registered · {M} confirmed ({K} under current rules)",track3Line:"Track 3 check: a single agent scored higher on held-out than the boredom swarm, but the ordering depends on a grader fix made after the winners were known; exploratory.",memoryComparisonLine:"past.dev vs local memory on 419 real memories: hit@1 0.65 vs 0.30, 562 ms vs 15 ms (hand-written probes)",memoryComparisonUrl:"https://github.com/arii/caffeinated/blob/main/experiments/memory-comparison/README.md",bixbenchLine:"BixBench held-out: baseline 1/7 → swarm best 6/7 (one run; 95% CI 0.49–0.97)"},pA={event:aA,tools:oA,authors:cA,boredom:lA,replay:uA,sections:dA,labels:fA,results:hA},Tf={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function mA(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function Af(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Rf={B:"BIO",C:"CHEM",P:"PHYSICS"};function gA(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=mA(t.name);if(Tf[n])return{initial:r,familyKey:"S",familyLabel:Tf[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:Af(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const l=Af(a);return{initial:r,familyKey:l,familyLabel:Rf[l]||a.toUpperCase(),staff:!1,color:i}}const c=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:c,familyLabel:Rf[c]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const _A={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function Bp(t){return t?_A[t]||t.replaceAll("_"," ").toLowerCase():""}function $p(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const vA={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function Hp(t){return vA[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function xA(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function Gp(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!xA(e)}function SA(t,e,n=110){const i=[Hp(t.type),e].filter(Boolean).join(" · ");if(!Gp(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i} — ${r.length>n?r.slice(0,n-1)+"…":r}`}function yA(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const Es=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function Vp(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=Es(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=Es(a.mechanism)||i.mechanism,i.method=Es(a.method)||i.method),i.role=Es(s.role)||i.role}else r.type==="study.registered"&&(i.field=Es(s.field)||i.field)}return i}function Wp(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const Cf={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function MA(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:Cf[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:Cf[i]?.[1]||"",names:r}))}function bA(t,e){return e-t<=1}function EA(t){return t.live?t.totalTicks:0}function wA(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function Xp(t,e,n){return!!t?.live&&n&&bA(e,t.totalTicks)}function Zp(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function TA(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(Xp(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=Zp(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function or(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function AA(t,e,n,i=!0){const r=c=>typeof c=="number"&&Number.isFinite(c)?c:null,s=t.filter(c=>(c.tick??0)<=n).map(c=>({id:c.id,tick:c.tick??0,raw:r(c.value),value:i?r(c.value):null,outcome:or(c.status,c.kind),agent:c.agent,description:c.description,status:c.status})),a=[],o=[];for(const c of e){if(c.tick>n||c.tick<0)continue;const l=c.snapshot.value;if(l==null||!Number.isFinite(l))continue;const u=a.at(-1);(!u||u[1]!==l)&&(u&&o.push([c.tick,l]),a.push([c.tick,l]))}return{points:s,best:a,newBest:o}}const $n={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},ws=t=>String(Number(t.toPrecision(4)));function RA(t,e,n,i){const r=[...t.points.map(M=>M.value),...t.best.map(M=>M[1])].filter(M=>M!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,c=52,l=560,u=16,d=132,f=150,h=Math.max(1,n),g=a===s?s-o/2:s,x=a===s?o:a-s,m=M=>c+Math.min(1,M/h)*(l-c),p=M=>d-(M-g)/x*(d-u),S=t.best.map(([M,z],N)=>`${N?"H":"M"}${m(M).toFixed(1)} ${N?`V${p(z).toFixed(1)}`:p(z).toFixed(1)}`).join(""),w=t.best.length?`<path class="best-line" d="${S}H${m(h).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",y=M=>{const z=m(M.tick).toFixed(1),N=`${i(M.agent)} · ${i(M.status)} · ${M.raw==null?"no score":ws(M.raw)} · ${i(M.description)}`,F=`<title>${N}</title>`,B=M.id?` data-experiment="${i(M.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${N}"`:"";if(M.value==null&&M.outcome!=="crashed")return`<circle class="pt ${M.outcome}"${B} cx="${z}" cy="${f}" r="${M.outcome==="discarded"?3.5:4.5}" fill="${M.outcome==="discarded"?"none":$n[M.outcome]}" stroke="${$n[M.outcome]}" stroke-width="1.6">${F}</circle>`;if(M.value==null)return`<g class="pt crashed"${B}>${F}<path d="M${+z-4} ${f-4}l8 8m0 -8l-8 8" stroke="${$n.crashed}" stroke-width="2"/></g>`;const Y=p(M.value).toFixed(1);return M.outcome==="crashed"?`<g class="pt crashed"${B}>${F}<path d="M${+z-4} ${+Y-4}l8 8m0 -8l-8 8" stroke="${$n.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${M.outcome}"${B} cx="${z}" cy="${Y}" r="${M.outcome==="discarded"?3.5:4.5}" fill="${M.outcome==="discarded"?"none":$n[M.outcome]}" stroke="${$n[M.outcome]}" stroke-width="1.6">${F}</circle>`},A=t.newBest.map(([M,z])=>`<path class="new-best" d="M${m(M).toFixed(1)} ${(p(z)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${ws(z)} at tick ${M}</title></path>`).join(""),T=e.direction==="maximize"?"↑ better":"↓ better",_=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${c} ${u-4}V${d+4}H${l}" fill="none" stroke="#79918b"/><text x="${c-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${ws(a)}</text><text x="${c-6}" y="${d}" text-anchor="end" fill="#b9cac2" font-size="9">${ws(s)}</text><text x="${c-6}" y="${f+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(M=>M.value==null&&M.raw!=null)?"other measure":"no score"}</text><path d="M${c} ${f}H${l}" stroke="#ffffff14" stroke-dasharray="3 4"/>${w}${t.points.map(y).join("")}${A}${_?`<text x="${l}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${ws(_[1])}</text>`:""}<text x="${c}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${T}</text><g font-size="9" fill="#b9cac2" transform="translate(${c} 186)"><circle cx="0" cy="-3" r="4" fill="${$n.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${$n.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${$n.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${$n.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}function qp(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function Yp(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function Al(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function CA(t,e,n){const i=qp(t),r=[],s=new Map,a=new Set,o=new Set,c=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let l=0;const u=new Set,d=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),f=.25,h=f*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=d;g+=f){for(;l<c.length&&c[l].tick<=g;){const m=c[l++];if(m.type==="experiment.started"){m.agentId&&(a.add(m.agentId),o.add(m.agentId));continue}if(m.type==="experiment.finished"){m.agentId&&o.delete(m.agentId);continue}for(const p of[m.agentId,...m.payload?.to_agent_ids||[],m.refs?.to_agent_id].filter(Boolean)){u.add(p);const S=s.get(p);S&&!S.table&&(S.pending=!0)}}const x=Uo(t.frames,g)?.snapshot.agents||[];Yp(x,g,i).forEach(m=>{const p=x.findIndex(y=>y.id===m.id);let S=s.get(m.id);if(!S){S={p:{...dl(p),atTable:u.has(m.id)},path:[],leg:0,dwell:u.has(m.id)?2.5:0,pending:!1,table:u.has(m.id),lab:!1},s.set(m.id,S);return}if(a.delete(m.id)&&(S.lab=!0,S.table=!1,S.dwell=0,S.p.atTable=!1,S.p.atLab=!1,S.path=Ka(S.p,fl(Al({...m,activity:"experimenting"}),p),e,n)),S.lab&&!S.path.length&&!S.p.atLab&&(S.p.atLab=!0,S.dwell=4),S.dwell>0){S.dwell=Math.max(0,S.dwell-h),S.p.atTable=S.table;return}if(S.lab&&S.p.atLab){if(o.has(m.id))return;S.lab=!1,S.p.atLab=!1}if(S.p.atTable=!1,!S.path.length){S.table&&(S.table=!1,S.pending=!1,S.leg=0);const A=[fl(Al({...m,activity:"experimenting"}),p),{x:2.7+p%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(S.leg>=A.length&&S.pending)S.table=!0,S.path=Ka(S.p,dl(p),e,n);else{const T=A[S.leg%A.length];S.leg++,S.path=Ka(S.p,T,e,n)}}let w=h*2.1;for(;S.path.length&&w>0;){const y=S.path[0],A=Math.hypot(y.x-S.p.x,y.z-S.p.z);A<=w?(S.p.x=y.x,S.p.z=y.z,w-=A,S.path.shift()):(S.p.x+=(y.x-S.p.x)/A*w,S.p.z+=(y.z-S.p.z)/A*w,w=0)}!S.path.length&&S.lab&&(S.p.atLab=!0,S.dwell=4),!S.path.length&&S.table&&(S.dwell=3,S.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([m,p])=>[m,{...p.p}]))})}return r}function PA(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function IA(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const c=o.payload?.text||o.message||"";if(!c.trim())continue;const l=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:PA(i(c)),peers:l.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const nt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",Mc=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Vr=t=>String(Number(t.toPrecision(4))),sn=(t,e=140)=>t.length>e?t.slice(0,e-1)+"…":t,Kp=t=>Array.isArray(t)?t.map(e=>nt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function Oo(t,e){const n=t.payload||{},i=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const r=nt(n.why)||nt(n.reason);return n.accepted===!0?`Critic approved${r?`: ${sn(r)}`:": the rerun reproduced the score"}`:n.accepted===!1?`Critic rejected${r?`: ${sn(r)}`:": score didn't reproduce on rerun"}`:nt(n.text)}case"gate.checked":{const r=Kp(n.reasons);if(n.pass===!1)return`Novelty gate blocked: ${r.length?sn(r.join("; ")):"too close to an earlier idea"}`;const s=Array.isArray(n.prior_art)?n.prior_art.length:0;return n.pass===!0?`Novelty gate passed: the idea is new enough${s?` (checked against ${s} prior source${s===1?"":"s"})`:""}`:nt(n.text)}case"experiment.started":return`Testing: ${sn(nt(n.description)||nt(n.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const r=Mc(n.metric_value),s=nt(n.status).toLowerCase(),a=r==null?"":` ${i} ${Vr(r)}`,o=e.best==null?"":` (best ${Vr(e.best)})`;return/crash|error|fail|timeout/.test(s)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(s)&&!/not_/.test(s)?`Kept:${a||" result"} beats the previous best`:r==null&&s?`${/reject|invalid|block/.test(s)?"Rejected before scoring":"Not scored"}${nt(n.text)?`: ${sn(nt(n.text))}`:""}`:s?`Discarded:${a} didn't beat the best${o}`:nt(n.text)}case"agent.assigned":{const r=nt(n.role);return r?`Conductor assigned ${r}${nt(n.rationale)?`: ${sn(nt(n.rationale))}`:""}`:nt(n.text)}case"round.started":{const r=jr(nt(n.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${r?` · ${r}`:""}${nt(n.rationale)?`: ${sn(nt(n.rationale))}`:""}`}case"boredom.measured":{const r=Mc(n.B),s=jr(nt(n.regime)).label;return r==null?nt(n.text):`Boredom ${Math.round(r*100)}%${s?` · ${s}`:""}${r>.6?": repeating itself, ready to switch approach":r<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${sn(nt(n.text))}`;case"question.asked":{const r=nt(n.kind);return`${r==="recall"?"Recalling memory":r==="search"||r==="exa"?"Searching the literature":"Asking"}: ${sn(nt(n.text))}`}case"observation.received":return`Read: ${sn(nt(n.text)||nt(n.summary))}`;case"message.sent":{const r=nt(n.to_agent_id)||nt(t.refs?.to_agent_id);return`${r?`To ${e.name(r)}`:"Message"}: ${sn(nt(n.text))}`}case"study.registered":return`Pre-registered: ${sn(nt(n.question)||nt(n.text))}`;case"study.result":return sn(nt(n.text)||nt(n.headline));case"discovery.made":{const r=Mc(n.metric_value);return`New best${r==null?"":`: ${i} ${Vr(r)}`}${nt(n.title)?` · ${sn(nt(n.title),80)}`:""}`}default:return""}}function fu(t,e,n,i,r){const s=(t?.events||[]).filter(h=>h.tick<=i&&h.agentId===e),a=s.filter(h=>h.type==="experiment.started"&&h.refs?.experiment_id).at(-1),o=s.filter(h=>h.type==="gate.checked").at(-1),c=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,l=a&&!c?Qs(t,String(a.refs.experiment_id),i):null,u=l&&(t?.events||[]).filter(h=>h.tick<=i&&h.type==="verdict.issued"&&h.refs?.experiment_id===l.id).at(-1),f=[...s,...u&&u.agentId!==e?[u]:[]].sort((h,g)=>h.tick-g.tick).map(h=>({tick:h.tick,why:Oo(h,r)})).filter(h=>h.why).slice(-6).reverse();return{activity:Bp(n),latest:s.at(-1)||null,blocked:c,experiment:l,sources:au(t,i).filter(h=>h.agentId===e).slice(-3).reverse(),feed:f}}function jp(t,e,n){const i=e.esc,r=t.experiment,s=(g,x)=>x?`<div class="now-row"><b>${g}</b><div>${x}</div></div>`:"",a=t.latest?`${i(t.activity||"working")} · <span class="muted">${i(Oo(t.latest,e)||t.latest.type)}</span>`:i(t.activity||"Not active yet"),o=r?`${i(r.idea?.text||r.description||"")}${r.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${r.idea.predictedDelta>0?"+":""}${Vr(r.idea.predictedDelta)}</span>`:""}${r.descriptor?.mechanism?` <span class="pill">${i(String(r.descriptor.mechanism).replaceAll("_"," "))}${r.descriptor.method?` / ${i(String(r.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",c=t.sources.map(g=>`<button class="chip" data-source="${i(g.id)}">${i(sn(g.title,60))}</button>`).join(""),l=t.blocked?`<span class="pill bad">blocked</span> ${i(Kp(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:r?.gate?`<span class="pill ${r.gate.pass?"ok":"bad"}">${r.gate.pass?"passed":r.gate.pass===!1?"blocked":"checked"}</span> ${i(r.gate.reasons.length?r.gate.reasons.join("; "):r.gate.pass?"The idea is new enough to try.":"")}`:r?'<span class="muted">Not checked yet</span>':"",u=r?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(r.verdict.verdict||"")&&!/not_/i.test(r.verdict.verdict||"")?"ok":"bad"}">${i(r.verdict.verdict||"verdict")}</span> ${i(r.verdict.why||"")}`:r?.result?'<span class="muted">Waiting for the critic</span>':"",d=n?.name.replaceAll("_"," ")||"score",f=n?.direction==="maximize"?"higher":"lower",h=r?.result?`<span class="pill">${i(r.result.status||"done")}</span> ${r.result.metric==null?"":`${i(d)} ${Vr(r.result.metric)}`}${e.best==null?"":` · best so far ${Vr(e.best)} (${f} is better)`}`:r?'<span class="muted">Still running</span>':"";return`<div class="now-card">${s("Doing",a)}${s("Idea",o)}${s("Read",c)}${s("Gate",l)}${s("Score",h)}${s("Critic",u)}${r?`<button class="inspect-link" data-experiment="${i(r.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${t.feed.map(g=>`<li><span>${g.tick}</span>${i(g.why)}</li>`).join("")}</ol>`:""}</div>`}const LA=t=>t&&/^https?:\/\//i.test(t)?t:null,eo=(t,e,n)=>LA(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),to=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,Jp=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,Ts=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function NA(t,e,n){const i=e.esc,r=h=>`<p class="muted">${h}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${UT(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([h,g])=>`${h}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${to(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(h=>`<li>${i(h)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),c=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"—")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),l=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),d=`${u.length?`<div class="artifact-links">${u.map(([h,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(h)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${Ts("Idea",s+a,!!(t.idea||t.description))}${Ts("Gate",o,!!t.gate)}${Ts("Score",c,!!t.result)}${Ts("Critic",l,!!t.verdict)}${Ts("Artifacts",d,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${Qp(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(h=>`<li><span>t${h.tick}</span> <b>${i(h.type)}</b> ${i(h.text)}</li>`).join("")}</ul></details>`}function DA(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${eo(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(tm(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(nm(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>Jp(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const Wr=t=>t==null?"—":t.toFixed(3),UA=t=>`rho ${Wr(t.rho)}, p ${wl(t.p)}, n ${t.n??"—"}`;function OA(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${Wr(t)}, observed rho ${Wr(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function FA(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function Qp(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(d,f)=>d?`${n(d)}${f?` = <b>${n(f)}</b>`:""}`:"—",o=(r?.confirmed?kp({...r,direction:t.direction||void 0},Fp(e.judging)).failures:[]).map(d=>`<span class="badge current-rule-failure">Fails current ${n(d)} rule</span>`).join(""),c=r?.halves.length?`<div class="halves">${r.halves.map((d,f)=>`<span>Half ${f+1}: rho ${Wr(d.rho)}, p ${wl(d.p)}, n ${d.n??"—"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',l=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(d=>`<li>${UA(d)} ${to(d.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",u=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([d,f])=>`<li>Judge ${n(d)} · laugh ${f.laugh??"—"} / think ${f.think??"—"}${f.reason?`: ${n(f.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(d=>`<li>${eo(e,d.url,d.title||d.url)}${d.snippet?`<p class="muted">${n(d.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(d=>`<li>${n(d)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head"><div class="study-badges">${FA(t,e)}${o}</div><span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?eo(e,i.url,tm(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"—")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${Wr(t.predictedRho)} → observed <b>${Wr(r?.rho??null)}</b>${r?` · p ${wl(r.p)} · n ${r.n??"—"}`:""}${OA(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?c:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${to(r.significant,"significant","not significant")} ${to(r.replicated,"replicated","not replicated")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${l}${u}<div class="chips">${t.experimentId?Jp(e,t.experimentId):""}${t.citations.map(d=>`<span class="chip">${eo(e,d,nm(d.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function kA(t,e){return t.length?`<div class="card-grid">${t.map(n=>Qp(n,e)).join("")}</div>`:""}function em(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function tm(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function nm(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function zA(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const BA={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function $A(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=Wp(Vp(r,e.id,i),e.family||""),a={name:t.agentName||(d=>d===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=fu(n,e.id,e.activity||e.state,i,a),c=Lh(e.boredom).level,l=o.experiment,u=o.blocked?Oo(o.blocked,a):"";return{name:e.name,role:s||$p(e.role)||"Scientist",mood:{level:c,label:BA[c]||null,boredomPct:e.boredom==null?null:Oi(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:l?.idea?.text||l?.description||null,predicted:u?null:l?.idea?.predictedDelta??null}}function HA(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(zs(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const no=t=>typeof t=="number"&&Number.isFinite(t),Pf=t=>Math.max(0,Math.min(1,t));function GA(t,e,n){const i=s=>s.agent===e||s.agent===n||s.agentId===e,r=t.filter(s=>i(s)&&or(s.status,s.kind)!=="baseline"&&no(s.value));return{confirmed:r.filter(s=>s.value===0).length,tested:r.length}}function VA(t){return`${t.confirmed} gate-confirmed / ${t.tested} tested`}function WA(t,e,n){const i=e.filter(r=>r.tick<=n);if(t==="conductor"){const r=i.filter(a=>a.type==="round.started").reduce((a,o)=>!a||o.tick>=a.tick?o:a,void 0),s=r?.payload?.regime;return typeof s=="string"?`Conductor · assigning ${s}`:"Conductor · awaiting assignment"}if(t==="critic"){const r=i.filter(s=>s.type==="verdict.issued").length;return`Critic · ${r} review${r===1?"":"s"}`}return""}function XA(t){return t==null?"best —":`best ${zs(t)}`}function ZA(t,e,n,i,r,s){const a=x=>x.agent===e||x.agent===n||x.agentId===e,o=t.filter(x=>a(x)&&or(x.status,x.kind)!=="baseline").slice().sort((x,m)=>(x.tick??0)-(m.tick??0)),c=o.map(x=>x.value).filter(no),l=i.name==="replicated_findings"?"maximize":i.direction,u=c.length?l==="maximize"?Math.max(...c):Math.min(...c):null,d=t.filter(x=>or(x.status,x.kind)!=="baseline").map(x=>x.value).filter(no),f=d.length?l==="maximize"?Math.min(...d):Math.max(...d):null;let h=null;if(u!=null&&r!=null){if(u===r)h=1;else if(s!=null){const x=r-s;h=x===0?0:Pf((u-s)/x)}else if(f!=null){const x=Math.abs(r-f);h=x===0?1:Pf(l==="maximize"?(u-f)/x:(f-u)/x)}}const g={kept:0,discarded:0,crashed:0};for(const x of o){const m=or(x.status,x.kind);m!=="baseline"&&g[m]++}return{best:u,progress:h,...g,spark:o.map(x=>x.value).filter(no).slice(-12)}}const oe=t=>document.getElementById(t),yo=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Le=t=>yo(ea(String(t??""))),ts=oe("console"),It=oe("conversation"),hu=oe("guide"),Di=oe("inspector");let Ke,Tt,cr,Se=null,et=null,im=[],De=0,At=!1,Jt=!1,rm=1,Xr=null,pu="",ai="",Lt="",fi=!1,bn=!1,Pi="",Kn="",If=0,Mo=!1,$s=!1,Lf=0,lr="",xn=0,li=0,Is=!1,$a={x:0,y:0},ir=null,Nf,Df,ur=0,sm=new Map;const bo=ry();function ea(t){return WT(t,sm)}function am(){const t=Lp(Se?.manifest,Se||void 0),e=oe("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${Le(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${Le(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}am();function qA(t){sm=new Map(Object.entries(t.manifest.aliasMap||{}))}let om=new Map,io=[];const pn=new Set;function mu(t){return gA(t,Se?.manifest.agents?.find(e=>e.agent_id===t.id))}function cm(t){const e=mu(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${Le(e.initial)}</span>`}function lm(t){const e=mu(t),n=Se&&!e.staff?Wp(Vp(Se.events,t.id,De),e.familyLabel):"";return[e.familyLabel,e.staff?"":n||(t.role!==t.type?$p(t.role):""),t.standby?"standing by":Bp(t.activity||t.state)].filter(Boolean).map(i=>yo(i)).join(" · ")}function YA(t){if(mu(t).staff)return"";const e=t.boredom==null?null:Oi(t.boredom),n=jr(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${Le(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Po(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}">${Le(n.label)}</em>`:""}</span>`}function KA(t){const e=t.boredom==null?null:Oi(t.boredom);return`<span class="strip-meter" role="meter" aria-label="${Le(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Po(e)}"></i></span>`}function jA(){const t=MA(Se?.manifest.agents||[]);oe("whos-who").hidden=!t.length,oe("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${yo(e.title)}<small>${Le(e.names.join(", "))}</small></dt><dd>${yo(e.does)}</dd>`).join("")}</dl>`:""}function Ls(){return Se?.manifest.live?"Published":"Recorded"}function Fo(){return Xp(Se?.manifest,De,At)}function Uf(t,e){const n=cs(t.agentId,"");if(t.kind==="regime"){_u(`${t.title}${n?` · ${n}`:""} — ${t.detail}`);return}const i=oe("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${Le(t.title)}</strong><p>${Le([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(Df),Df=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function gu(){if(Se){if(De>ur){const t=Pp(Se.events,ur,De,Se.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?Uf(e.at(-1),e.length-1):t.length&&Uf(t.at(-1),0)}ur=De}}function jn(){return Yp(et?.agents||[],De,om)}function _u(t){oe("toast").textContent=t,oe("toast").hidden=!1,clearTimeout(Nf),Nf=setTimeout(()=>oe("toast").hidden=!0,4e3)}function Jn(){document.exitPointerLock?.(),pn.clear()}function oi(){return ts.open||hu.open||Di.open||Xr!==null}function xr(){Xr&&(oe(Xr).hidden=!0),Xr=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false"))}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=Xr!==e;Jn(),xr(),n&&(Xr=e,oe(e).hidden=!1,t.setAttribute("aria-expanded","true"))};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=xr;function ra(t){if(Jt=t,Lt="",fi=!1,bn=!1,Pi="",Kn="",Jn(),Ke.setOverview?.(!t),oe("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){At=!1,Ke.camera.position.set(0,1.69,9.5);const e=new On().setFromQuaternion(Ke.camera.quaternion,"YXZ");xn=e.y,li=e.x}else{const e=Ke.camera.quaternion.clone();cr.reset(),Ke.camera.quaternion.copy(e),cr.syncFromCamera()}_i(),um()}function _i(){if(Se){const r=Se.manifest,s=$T(r),a=cu(r);oe("overview-eyebrow").textContent=s.eyebrow,oe("run-callout").textContent=s.callout,oe("replay-kicker").textContent=s.kicker,oe("connection").textContent=r.sample===!1?a.status==="live"&&!Fo()?"LIVE SWARM · VIEWING THE PAST":qT({...r,stale:a.status==="stale"}):r.description?.includes("mock")?"RECORDED SAMPLE · MOCK PRIOR-ART":"RECORDED REPLAY",JA()}const t=TA(Se?.manifest,De,At,Se?.events||[]);oe("go-live").hidden=t.hidden,oe("go-live").textContent=t.label,oe("go-live").classList.toggle("at-edge",t.atEdge),oe("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),oe("play").textContent=At?"Ⅱ Pause":"▶ Play",oe("play").setAttribute("aria-label",At?"Pause":"Play"),oe("camera-mode").textContent=Jt?"Lab view ↗":"Walk inside ↗",oe("camera-mode").disabled=!Se||At,oe("timeline").value=String(De),oe("tick-label").textContent=`Tick ${Math.floor(De)} / ${Se?.manifest.totalTicks||0}`,oe("timeline").setAttribute("aria-valuetext",`Tick ${Math.floor(De)} of ${Se?.manifest.totalTicks||0}`);const e=Se&&Uo(Se.events,De),n=oe("activity-caption"),i=e?.refs?.experiment_id;n.textContent=e?ea(SA({...e,message:Oo(e,ta())||e.message},cs(e.agentId,""))):"The run begins here",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function JA(){if(!Se)return;const t=Se.manifest,e=cu(t),n=jr(et?.regime),i=t.time?.rounds||et?.config.rounds||0,r=QT(t),s=du(t,Se);oe("run-meta").innerHTML=[`<span class="status-chip" data-status="${e.status}" title="${Le(e.detail)}">${Le(e.label)}</span>`,`<span class="meta-task">${Le(Up(t))}</span>`,Tl(t.metric||et?.metric)?`<span>${Le(Tl(t.metric||et?.metric))}</span>`:"",s?`<span class="proxy-chip" title="Benchmark caveat for this recording">Proxy: ${Le(s)}</span>`:"",et?.round?`<span>Round ${et.round}${i?` / ${i}`:""}</span>`:"",n.label&&t.sample===!1?`<span class="regime-chip" data-tone="${n.tone}" title="Swarm boredom ${Math.round(Oi(et?.boredom||0))}%">${Le(n.label)} · ${Math.round(Oi(et?.boredom||0))}%</span>`:"",e.status==="stale"?`<span class="warn-chip">${Le(e.detail)}</span>`:"",r?`<span class="warn-chip">${Le(r)}</span>`:""].filter(Boolean).join("")}function ki(t){Se&&(De=Math.max(0,Math.min(Se.manifest.totalTicks,t)),et=Uo(Se.frames,De)?.snapshot||null,_i(),vu(),ts.open&&bu(),It.open&&Eu(),Di.open&&_m())}function vu(){oe("agent-count").textContent=`${jn().length} AGENTS`,oe("agent-list").innerHTML=yA(et?.agents||[],jn()).map(t=>`<button class="agent-row" data-agent="${Le(t.id)}"${t.standby?' disabled data-standby="true"':""}>${cm(t)}<span><strong>${Le(t.name)}</strong><small>${lm(t)}</small>${YA(t)}</span><i></i></button>`).join("")||'<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>',oe("run-label").textContent=et?`ROUND ${et.round}${et.config.rounds?` / ${et.config.rounds}`:""} · BEST ${et.metric.name.replaceAll("_"," ")} ${et.value==null?"—":et.value.toFixed(4)} · ${Tl(et.metric).split(" ").slice(-3).join(" ")}`:"Waiting for the first events from the artificial scientist swarm",um()}function um(){const t=oe("status-strip");if(!Se||!et||Jt||document.body.classList.contains("prestart")){t.hidden=!0,t.innerHTML="";return}const e=jn().filter(u=>u.type!=="baseline"),n=et.results,i=et.metric,r=uu(Se.manifest,Se),s=e.filter(u=>u.type!=="conductor"&&u.type!=="critic").length,a=n.filter(u=>or(u.status,u.kind)!=="baseline"&&typeof u.value=="number"&&Number.isFinite(u.value)),o=i.name==="replicated_findings"?"maximize":i.direction,c=a.length?o==="maximize"?Math.max(...a.map(u=>u.value)):Math.min(...a.map(u=>u.value)):et.value,l=n.find(u=>or(u.status,u.kind)==="baseline"&&typeof u.value=="number")?.value??null;t.innerHTML=e.map(u=>{if(u.type==="conductor"||u.type==="critic"){const h=WA(u.type,Se.events,De);return`<button class="status-tile status-role" data-agent="${Le(u.id)}" title="${Le(u.name)}" aria-label="Focus ${Le(u.name)}: ${Le(h)}">${Le(h)}</button>`}const d=ZA(n,u.id,u.name,i,c,l),f=r?VA(GA(n,u.id,u.name)):XA(d.best);return`<button class="status-tile" data-agent="${Le(u.id)}" aria-label="Focus ${Le(u.name)}: ${Le(f)}"><strong class="status-tile-name">${Le(u.name)}</strong>${KA(u)}<span class="tile-metric">${Le(f)}</span></button>`}).join("")+(s?`<span class="status-scroll-hint">${s} scientist${s===1?"":"s"} ›</span>`:""),t.hidden=!e.length,xu()}function xu(){const t=document.querySelector(".replay-bar"),e=oe("status-strip");if(!t||!e)return;const n=t.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.top=`${Math.max(0,n.top-52)}px`,e.style.bottom="auto",e.style.transform="none"}const Of=document.querySelector(".replay-bar");Of&&new ResizeObserver(xu).observe(Of);window.addEventListener("resize",xu);function QA(){const t=oe("proximity");if(!Lt){t.hidden=!0;return}const e=jn().find(i=>i.id===Lt);if(!e){t.hidden=!0;return}const n=`${Lt}|${Math.floor(De)}|${bn}`;if(n!==Kn){const i=$A({agent:e,recording:Se,tick:De,metric:et?.metric,best:et?.value??null,agentName:cs});if(t.innerHTML=HA(i,bn,Le),bn){const r=fu(Se,e.id,e.activity||e.state,De,ta()),s=t.querySelector("[data-bubble-now]");s&&(s.innerHTML=jp(r,{...ta(),esc:Le},et?.metric))}Kn=n}t.hidden=!1,e1()}function e1(){const t=oe("proximity");if(t.hidden)return;const e=Ke.agentPositions?.().find(c=>c.id===Lt);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new O(0,2.35,0));if(Ke.camera.updateMatrixWorld(),n.clone().applyMatrix4(Ke.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(Ke.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12;t.style.visibility="visible",t.style.left=`${Mn.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o))}px`,t.style.top=`${Mn.clamp(s-a.height-22,o,Math.max(o,innerHeight-a.height-o))}px`}function dm(t){Lt=t,fi=!0,bn=!1,Pi="",Kn="",yu("scientist")}function t1(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function Su(){const t=uy(t1());if(t==="scientist"&&innerHeight<=500&&!document.body.classList.contains("bar-collapsed")){lr="done",oe("coach-mark").hidden=!0;return}if(!t){lr="done",oe("coach-mark").hidden=!0;return}lr=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?"Tap a scientist":"Drag to scrub";oe("coach-mark").dataset.coach=t,oe("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,oe("coach-mark").hidden=!1}function yu(t){lr===t&&(lr="",oe("coach-mark").hidden=!0,Su())}function Mu(){Mo||(Mo=!0,document.body.classList.remove("prestart"),oe("prestart").hidden=!0,oe("intro").hidden=!0,Se&&(Se.manifest.live?ki(Se.manifest.totalTicks):De>=Se.manifest.totalTicks&&ki(0),At=!0,ur=De),_i(),vu(),Tt.domElement.focus(),jn().length&&Su())}function fm(){$s&&($s=!1,Ke.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",fm,{capture:!0});window.addEventListener("keydown",fm,{capture:!0});oe("start-swarm").onclick=Mu;oe("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&yu(lr)};function n1(){if(!Se||!et)return"<p>No measurements yet.</p>";const t=Se.manifest.swarm==="ignobel"&&et.metric.name==="replicated_findings";return RA(AA(et.results,Se.frames,De,!t),et.metric,De,Le)}function hm(t){const e=[t.effectSize==null?"":`Effect ${Le(t.effectSize)}`,t.pValue==null?"":`p = ${Le(t.pValue)}`,t.reward==null?"":`Reward ${Le(t.reward)}`].filter(Boolean);return e.length?e.join("<br>"):Le(t.value??"—")}function bu(){const t=et;if(!t){oe("console-content").innerHTML="<h2>No evidence yet.</h2>";return}const e=Se?du(Se.manifest,Se):void 0;oe("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(De)}. Every candidate is plotted: kept, discarded and crashed, with the confirmed best so far. Later results stay hidden until playback reaches them.</p>${e?`<p class="proxy-note"><b>About this benchmark:</b> ${Le(e)}</p>`:""}${n1()}<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th>MEASUREMENT</th></tr></thead><tbody>${t.results.slice().reverse().map(n=>`<tr${n.id?` class="inspectable" data-experiment="${Le(n.id)}" tabindex="0"`:""}><td>${n.round}</td><td>${Le(n.agent)}</td><td>${Le(n.status)}<br>${Le(n.description)}</td><td>${hm(n)}</td></tr>`).join("")}</tbody></table></div><h3>${Ls()} findings</h3>${t.findings.filter(n=>!/swarm_B|per_agent_B|boredom/i.test(n.message)).slice().reverse().map(n=>`<div class="finding"><b>${Le(jn().find(i=>i.id===n.agent)?.name||n.role)}</b><span>${Le(n.message)}</span></div>`).join("")||"<p>No findings yet.</p>"}${i1()}`}function i1(){const t=ou(Se,De),e=au(Se,De),n=Cp(gm(),De);return`${t.length?`<h3>Ig Nobel studies</h3>${kA(t,Hs())}`:""}${n.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${em(n,Hs())}</div>`:""}${e.length||r1("sources")?`<h3>Research sources</h3>${DA(e,Hs())}`:""}`}let on="now";function ta(){return{name:t=>cs(t),metric:et?.metric,best:et?.value??null}}function Eu(){const t=jn().find(y=>y.id===pu);if(!t){It.close();return}const e=Se?VT(Se.events,De).filter(y=>y.agentId===t.id||y.type==="message.sent"&&(y.payload?.to_agent_id===t.id||y.payload?.to_agent_ids?.includes(t.id))):[],n=on==="idea"?/hypothesis|propos|question|idea/:on==="result"?/experiment|observ|discover|reward|evaluat/:on==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=Gp,r=e.filter(y=>n.test(y.type)&&i(y.message)).slice(-1),s=on==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=on==="result"&&t.lastResult?`<blockquote>${Le(t.lastResult.description)}<br>${Le(t.lastResult.status)} · ${hm(t.lastResult)}<cite>${Ls()} result · available by tick ${Math.floor(De)}</cite></blockquote>`:"",o=on==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",c=t.boredom==null?null:Oi(t.boredom),l=Se?oy(Se.events,t.id,De):null,u=jr(l?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),d=ay(l?.components||t.boredomDetail?.components),f=Cp(gm(),De,t.id),h=on==="result"||on==="doing"?t.lastResult?.id&&Qs(Se,t.lastResult.id,De)?t.lastResult.id:t.focus?.experiment_id&&Qs(Se,t.focus.experiment_id,De)?t.focus.experiment_id:null:null,g=h?`<button class="inspect-link" data-experiment="${Le(h)}">Inspect experiment →</button>`:"",x=!!Se?.manifest.live,m=Fo(),p=Se?Zp(Se.events,De):0,S=x?m?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(De)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(De)}${p?` · ${p} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(De)}.`,w=y=>y.type==="message.sent"&&y.agentId!==t.id?`Message from ${Le(cs(y.agentId,"")||"a colleague")}`:`${x?"Published":"Recorded"} ${Le(Hp(y.type).toLowerCase())}`;oe("conversation-tag").textContent=x?m?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",oe("conversation-content").innerHTML=`<div class="conversation-person">${cm(t)}<div><h2>${Le(t.name)}</h2><p>${lm(t)}</p></div></div><div class="conversation-questions">${[["now","Now"],["doing","What are you doing?"],["idea","Tell me about your idea"],["result","What did you find?"],["notes","Your research notes"],...f.length?[["talk","Conversation"]]:[]].map(([y,A])=>`<button data-topic="${y}" aria-pressed="${on===y}">${A}</button>`).join("")}</div><div class="speech-bubble${on==="talk"||on==="now"?" history":""}">${on==="now"?jp(fu(Se,t.id,t.activity||t.state,De,ta()),{...ta(),esc:Le},et?.metric):on==="talk"?em(f,Hs(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${Le(o)}<cite>${Ls()} proposal · available by tick ${Math.floor(De)}</cite></blockquote>`:r.length?r.map(y=>`<blockquote>${Le(y.message)}<cite>${w(y)} · tick ${y.tick}</cite></blockquote>`).join(""):s?`<blockquote>${Le(s)}<cite>${Ls()} excerpt · through tick ${Math.floor(De)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${Ls().toUpperCase()} BOREDOM</span><strong style="color:${c==null?"inherit":Po(c)}">${c==null?"Not measured":Math.round(c)+"%"}</strong></div>${c==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${Le(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${c}"><i style="left:${c}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||d.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${Le(u.label)}</span>`:""}${d.length?`<div class="boredom-components" aria-label="Boredom components">${d.map(y=>`<div><span>${Le(y.label)}</span><i style="--v:${y.value}%"></i><b>${y.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${S}</p>`}function pm(t){if(Lt="",fi=!1,bn=!1,Kn="",Fo()||(At=!1),pu=t,on="now",Jn(),xr(),_i(),Eu(),jn().some(e=>e.id===t)){const e=Ke.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new O(0,2.1,0));if(Ke.camera.lookAt(n),Jt||cr.focus(n),Jt){const i=new On().setFromQuaternion(Ke.camera.quaternion,"YXZ");xn=i.y,li=i.x}}It.open||It.show(),mm(),It.querySelector("button")?.focus()}}function mm(){if(!It.open)return;const t=Ke.agentPositions?.().find(l=>l.id===pu);if(!t){It.style.visibility="hidden";return}const e=t.position.clone().add(new O(0,2.35,0));if(Ke.camera.updateMatrixWorld(),e.clone().applyMatrix4(Ke.camera.matrixWorldInverse).z>=0){It.style.visibility="hidden";return}It.style.visibility="visible",e.project(Ke.camera);const i=(e.x+1)/2*innerWidth,r=(1-e.y)/2*innerHeight,s=It.getBoundingClientRect(),a=12,o=Mn.clamp(i-s.width/2,a,Math.max(a,innerWidth-s.width-a)),c=Mn.clamp(r-s.height-24,80,Math.max(80,innerHeight-s.height-190));It.style.left=`${o}px`,It.style.top=`${c}px`,It.style.setProperty("--speech-tail",`${Mn.clamp(i-o,20,s.width-20)}px`)}oe("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(on=e,Eu())};oe("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&pm(e)};function gm(){return Se?.events||[]}function r1(t){const e=Se?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function cs(t,e){return t?(et?.agents||Se?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||Se?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function Hs(){const t=Se?.manifest.id||"";return{esc:Le,name:cs,judging:Se?.manifest.judging,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return Nh(n)},experimentLabel:e=>{const n=Qs(Se,e,De);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let Eo=null;function _m(){if(!Eo)return;const t=Qs(Se,Eo,De);oe("inspector-content").innerHTML=t?NA(t,Hs(),t.studyId?ou(Se,De).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function s1(t){Jn(),xr(),It.close();const e=au(Se,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>De&&(At=!1,ki(e)),bu(),ts.open||ts.showModal();const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function vm(t){At=!1,_i(),Jn(),Eo=t,_m(),Di.open||Di.showModal(),Di.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target.closest?.("[data-source]")?.dataset.source;if(e){s1(e);return}const n=t.target.closest?.("[data-experiment]")?.dataset.experiment;n&&(t.preventDefault(),vm(n))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),vm(e.dataset.experiment))});function wo(){Lt&&(Jn(),bn=!0,Kn="")}function xm(){Lt&&(Pi=Lt),Lt="",fi=!1,bn=!1,Kn="",oe("proximity").hidden=!0}oe("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){xm();return}if(n?.hasAttribute("data-bubble-more")){Lt&&pm(Lt);return}if(n?.hasAttribute("data-bubble-expand")){wo();return}bn||wo()});oe("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");if(!e)return;const n=e.dataset.agent,i=Ke.agentPositions?.().find(s=>s.id===n);if(!i)return;const r=i.position.clone().add(new O(0,2.1,0));Ke.camera.lookAt(r),cr.focus(r),dm(n)});Di.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);oe("close-inspector").onclick=()=>Di.close();Di.addEventListener("close",()=>{Eo=null});oe("close-conversation").onclick=()=>{It.close(),Tt.domElement.focus()};oe("close-console").onclick=()=>ts.close();oe("close-guide").onclick=()=>hu.close();oe("open-console").onclick=()=>{Jn(),xr(),bu(),ts.showModal()};oe("open-guide").onclick=()=>{Jn(),xr(),hu.showModal()};oe("play").onclick=()=>{Se&&(At||(It.close(),!Se.manifest.live&&De>=Se.manifest.totalTicks&&ki(0),Jt&&ra(!1)),At=!At,_i())};oe("camera-mode").onclick=()=>ra(!Jt);oe("collapse-bar").onclick=()=>{const t=document.body.classList.toggle("bar-collapsed");oe("collapse-bar").setAttribute("aria-expanded",String(!t)),oe("collapse-bar").textContent=t?"▴":"▾",oe("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel")};oe("timeline").oninput=()=>{At=!1,ki(Number(oe("timeline").value)),ur=De,yu("scrub")};oe("go-live").onclick=()=>{Se?.manifest.live&&(It.close(),Jt&&ra(!1),At=!0,ki(Se.manifest.totalTicks),gu())};oe("pace").onchange=()=>{rm=Number(oe("pace").value)};function a1(t){om=qp(t),io=CA(t,Ke.bounds,Ke.colliders)}function o1(){const t=Uo(io,De);if(!t)return new Map;if(De<=0)return t.positions;const e=io[io.indexOf(t)+1];if(!e)return t.positions;const n=(De-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function Sm(t,e=!1){const n=++If;e||(At=!1,oe("connection").textContent="LOADING RUN");try{const i=await KT(Rp,t,im.find(c=>c.id===t)?.contentVersion||"2",Se);if(n!==If)return;const r=De,s=Fo();Se=i,am(),qA(i),i.frames.sort((c,l)=>c.tick-l.tick),i.events.sort((c,l)=>c.tick-l.tick),a1(i),jA(),oe("timeline").max=String(i.manifest.totalTicks),oe("timeline").disabled=!1,oe("play").disabled=!1,oe("replay-title").textContent=ea(i.manifest.title),oe("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),oe("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),oe("timeline-markers").innerHTML=i.events.filter(c=>/experiment.finished|discovery|study.completed|award/.test(c.type)).map(c=>`<i${/discovery|award/.test(c.type)?' class="best"':""} style="left:${c.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),oe("run-picker").value=t,e||ra(!1);const a=e?wA(r,i.manifest,s):EA(i.manifest);e||(At=Mo,ur=a),ki(a),e&&s?gu():e||(ur=De),_i(),fy&&!e&&(sessionStorage.getItem("intro-seen")?Mu():(sessionStorage.setItem("intro-seen","1"),c1()));const o=new URL(location.href);o.searchParams.set("recording",t),o.searchParams.delete("run"),history.replaceState(null,"",o)}catch(i){oe("connection").textContent="ARCHIVE UNAVAILABLE",_u(i.message)}}async function ym(){try{const t=BT(await Rp("/recordings"));if(im=t,oe("run-picker").innerHTML=nA(t,Le)||"<option>No artificial scientist swarm recordings available</option>",Se)oe("run-picker").value=Se.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await Sm(t.find(n=>n.id===e)?.id||t[0].id)}else t.length||(oe("connection").textContent="NO SWARM RECORDINGS",oe("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){oe("connection").textContent="ARCHIVE UNAVAILABLE",oe("replay-title").textContent="Archive unavailable",_u(t.message)}}oe("refresh-runs").onclick=()=>ym();oe("run-picker").onchange=()=>Sm(oe("run-picker").value);function c1(){oe("intro").innerHTML=sA(pA,rA(Se),Le,zp(Se),Se?.manifest,Se),oe("prestart").hidden=!0,oe("intro").hidden=!1,oe("intro-start").onclick=Mu,oe("intro-results-link").onclick=t=>{t.preventDefault();const e=oe("intro-about"),n=oe("intro-real-results");e.open=!0,n.hidden=!1,n.open=!0,n.scrollIntoView({behavior:bo?"auto":"smooth",block:"center"})},oe("intro-qualifier").onclick=t=>{t.preventDefault();const e=oe("intro-about"),n=oe("intro-real-results");e.open=!0,n.hidden=!1,n.open=!0,n.scrollIntoView({behavior:bo?"auto":"smooth",block:"center"})}}oe("refresh-runs").hidden=!0,document.body.classList.add("static-site");function Ff(t,e){const i=Ke.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||Ke.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),pn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>pn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(bn){bn=!1,Kn="";return}if(fi||Lt){xm(),Jn();return}It.close(),xr(),Jn()}if(!(oi()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Lt){t.preventDefault(),wo();return}t.code==="Enter"&&Lt&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),wo()),["KeyW","KeyA","KeyS","KeyD",...Jt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault(),pn.add(t.code)}});window.addEventListener("keyup",t=>pn.delete(t.code));window.addEventListener("blur",()=>{pn.clear(),Is=!1,ir=null,At=!1,_i()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);n=s,At&&Se&&(De=GT(De,a,rm,Se.manifest.totalTicks,Se.manifest.tickDurationMs),HT(Se.manifest,De)||(At=!1),Math.floor(De)!==i?(ki(De),i=Math.floor(De),gu()):_i());const o=Ke.camera;if(!Jt&&!oi()&&!It.open&&cr.update(a,pn),Jt&&!oi()){({yaw:xn,pitch:li}=Ih(xn,li,a,pn));const h=Number(pn.has("KeyW"))-Number(pn.has("KeyS")),g=Number(pn.has("KeyD"))-Number(pn.has("KeyA"));if(h||g){const x=(pn.has("ShiftLeft")||pn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(h,g),m=(-Math.sin(xn)*h+Math.cos(xn)*g)*x,p=(-Math.cos(xn)*h-Math.sin(xn)*g)*x;Ff(o.position.x+m,o.position.z)||(o.position.x+=m),Ff(o.position.x,o.position.z+p)||(o.position.z+=p)}o.rotation.set(li,xn,0,"YXZ")}const c=o1(),l=jn(),u=IA(Se?.events||[],De,l,ea,100);if(Ke.update(De*(Se?.manifest.tickDurationMs||700)/1e3,{progress:et?.progress||0,boredom:0,running:At,replay:!0,reducedMotion:bo,agents:l.map(h=>({...h,boredom:h.boredom==null?null:Oi(h.boredom),regime:h.boredomSpectrum?.regime,state:c.get(h.id)?.atLab?"working":h.state,stationId:c.get(h.id)?.atTable?"culture":Al({...h,state:"working",activity:"experimenting"}),discussionBrief:c.get(h.id)?.atTable?u.get(h.id)?.brief:void 0,discussionPeers:u.get(h.id)?.peers,ideaBrief:ty(ea(h.lastIdea||h.lastQuestion||h.lastObservation||"")),position:c.get(h.id)}))}),Mo&&!lr&&l.length&&Su(),$s){const h=(s-Lf)/(bo?300:2200);Ke.grow?.(Math.min(1,h)),h>=1&&($s=!1,document.body.classList.remove("world-growing"))}const d=ai;if(Jt&&!oi()){o.getWorldDirection(r),r.y=0,r.normalize();const h=(Ke.agentPositions?.()||[]).map(g=>{const x=g.position.clone().sub(o.position);x.y=0;const m=x.length();return{id:g.id,distance:m,facing:m?x.normalize().dot(r):1}});ai=zA(h,ai)}else ai="";Pi&&ai!==Pi&&(Pi="");const f=fi?Lt:ai===Pi?"":ai;f!==Lt&&(Lt=f,bn=!1,Kn=""),d!==ai&&!fi&&ai&&(Pi=""),QA(),Tt.render(Ke.scene,o),mm()};Ke=dy(),Lf=performance.now(),$s=!0,document.body.classList.add("world-growing"),Ke.grow?.(0),Tt=new QS({antialias:!0,powerPreference:"high-performance"}),Tt.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),Tt.setSize(innerWidth,innerHeight),Tt.toneMapping=Cl,Tt.toneMappingExposure=Ke.exposure??1,Tt.outputColorSpace=Ot,oe("world").appendChild(Tt.domElement),Tt.domElement.tabIndex=0,Tt.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),Ke.camera.rotation.order="YXZ",cr=new ey(Ke.camera),ra(!1),Tt.domElement.onclick=()=>{if(Jt&&!oi()&&!It.open&&!fi)try{Tt.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},Tt.domElement.onpointerdown=s=>{oi()||(Is=!0,$a={x:s.clientX,y:s.clientY},ir={x:s.clientX,y:s.clientY,canvas:s.target===Tt.domElement},Jt||Tt.domElement.setPointerCapture(s.pointerId))},Tt.domElement.onpointermove=s=>{if(!Is||document.pointerLockElement||oi())return;const a=s.clientX-$a.x,o=s.clientY-$a.y;Jt?{yaw:xn,pitch:li}=ul(xn,li,a,o):cr.dragBy(a,o),$a={x:s.clientX,y:s.clientY}},Tt.domElement.onpointercancel=()=>{Is=!1,ir=null},window.addEventListener("pointerup",s=>{if(ir?.canvas&&Math.hypot(s.clientX-ir.x,s.clientY-ir.y)<8&&s.target===Tt.domElement&&!oi()){const a=Ke.camera;a.updateMatrixWorld();let o=null;for(const c of Ke.agentPositions?.()||[]){if(!jn().some(g=>g.id===c.id))continue;const l=c.position.clone().add(new O(0,2.35,0));if(l.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;l.project(a);const d=(l.x+1)*innerWidth/2,f=(1-l.y)*innerHeight/2,h=Math.hypot(s.clientX-d,s.clientY-f);h<48&&(!o||h<o.distance)&&(o={id:c.id,distance:h})}o?dm(o.id):(Lt="",fi=!1,bn=!1,Kn="")}ir=null,Is=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&Jt&&!oi()&&({yaw:xn,pitch:li}=ul(xn,li,s.movementX,s.movementY))});const e=()=>{Ke.camera.aspect=innerWidth/innerHeight,Ke.camera.updateProjectionMatrix(),Tt.setSize(innerWidth,innerHeight)};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new O;vu(),t(),oe("loading").classList.add("loaded"),setTimeout(()=>oe("loading").hidden=!0,380),ym()}catch(t){console.error(t),oe("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
