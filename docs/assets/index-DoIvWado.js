(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const rl="187",Cp=0,nu=1,Pp=2,wa=1,Ip=2,ps=3,Zi=0,on=1,bn=2,br=0,Ss=1,iu=2,ru=3,su=4,Lp=5,Sr=100,Dp=101,Np=102,Up=103,Op=104,Fp=200,zp=201,kp=202,Bp=203,rf=204,sf=205,Gp=206,Hp=207,$p=208,Vp=209,Wp=210,Xp=211,Zp=212,qp=213,Yp=214,jo=0,Qo=1,ec=2,Rs=3,tc=4,nc=5,ic=6,rc=7,af=0,Kp=1,Jp=2,oi=0,of=1,cf=2,lf=3,sl=4,uf=5,df=6,ff=7,hf=300,Ir=301,Cs=302,ho=303,po=304,za=1e3,si=1001,sc=1002,Wt=1003,jp=1004,Zs=1005,fn=1006,mo=1007,bi=1008,vn=1009,pf=1010,mf=1011,Ps=1012,al=1013,Wn=1014,Ln=1015,Xn=1016,ol=1017,cl=1018,Lr=1020,gf=35902,_f=35899,vf=1021,xf=1022,Gn=1023,Ti=1026,Ei=1027,ll=1028,ul=1029,qi=1030,dl=1031,fl=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,ac=35840,oc=35841,cc=35842,lc=35843,uc=36196,dc=37492,fc=37496,hc=37488,pc=37489,ka=37490,mc=37491,gc=37808,_c=37809,vc=37810,xc=37811,Sc=37812,Mc=37813,yc=37814,bc=37815,Ec=37816,wc=37817,Tc=37818,Ac=37819,Rc=37820,Cc=37821,Pc=36492,Ic=36494,Lc=36495,Dc=36283,Nc=36284,Ba=36285,Uc=36286,Qp=3200,Oc=0,em=1,yi="",Ot="srgb",Ga="srgb-linear",Ha="linear",dt="srgb",go=7680,tm=519,nm=512,im=513,rm=514,Sf=515,sm=516,am=517,Mf=518,yf=519,bf=35044,au="300 es",Dn=2e3,Is=2001;function om(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $a(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function cm(){const t=$a("canvas");return t.style.display="block",t}const ou={};function Va(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ef(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=Ef(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=Ef(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Er(...t){const e=t.join(" ");e in ou||(ou[e]=!0,Ge(...t))}function lm(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const um={[jo]:jo,[ec]:ic,[tc]:tc,[Rs]:nc,[Qo]:Qo,[ic]:ec,[rc]:rc,[nc]:Rs};class ji{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cu=1234567;const Ms=Math.PI/180,Ls=180/Math.PI;function Ri(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function hl(t,e){return(t%e+e)%e}function dm(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function fm(t,e,n){return t!==e?(n-t)/(e-t):0}function ys(t,e,n){return(1-n)*t+n*e}function hm(t,e,n,i){return ys(t,e,1-Math.exp(-n*i))}function pm(t,e=1){return e-Math.abs(hl(t,e*2)-e)}function mm(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function gm(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function _m(t,e){return t+Math.floor(Math.random()*(e-t+1))}function vm(t,e){return t+Math.random()*(e-t)}function xm(t){return t*(.5-Math.random())}function Sm(t){t!==void 0&&(cu=t);let e=cu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Mm(t){return t*Ms}function ym(t){return t*Ls}function bm(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Em(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function wf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function wm(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),d=s((e-i)/2),f=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*d,c*f,o*l);break;case"YZY":t.set(c*f,o*u,c*d,o*l);break;case"ZXZ":t.set(c*d,c*f,o*u,o*l);break;case"XZX":t.set(o*u,c*g,c*h,o*l);break;case"YXY":t.set(c*h,o*u,c*g,o*l);break;case"ZYZ":t.set(c*g,c*h,o*u,o*l);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function io(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function pl(t,e){if(e.constructor===Float32Array)return t;const n=io(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function ml(t,e){if(e.constructor===Float32Array)return t;const n=io(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const $n={DEG2RAD:Ms,RAD2DEG:Ls,generateUUID:Ri,clamp:Qe,euclideanModulo:hl,mapLinear:dm,inverseLerp:fm,lerp:ys,damp:hm,pingpong:pm,smoothstep:mm,smootherstep:gm,randInt:_m,randFloat:vm,randFloatSpread:xm,seededRandom:Sm,degToRad:Mm,radToDeg:ym,isPowerOfTwo:bm,ceilPowerOfTwo:Em,floorPowerOfTwo:wf,setQuaternionFromProperEuler:wm,normalize:ml,denormalize:pl},ql=class ql{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ql.prototype.isVector2=!0;let qe=ql;class Gr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],d=i[r+3],f=s[a+0],h=s[a+1],g=s[a+2],y=s[a+3];if(d!==y||c!==f||l!==h||u!==g){let p=c*f+l*h+u*g+d*y;p<0&&(f=-f,h=-h,g=-g,y=-y,p=-p);let m=1-o;if(p<.9995){const x=Math.acos(p),T=Math.sin(x);m=Math.sin(m*x)/T,o=Math.sin(o*x)/T,c=c*m+f*o,l=l*m+h*o,u=u*m+g*o,d=d*m+y*o}else{c=c*m+f*o,l=l*m+h*o,u=u*m+g*o,d=d*m+y*o;const x=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=x,l*=x,u*=x,d*=x}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],d=s[a],f=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*d+c*h-l*f,e[n+1]=c*g+u*f+l*d-o*h,e[n+2]=l*g+u*h+o*f-c*d,e[n+3]=u*g-o*d-c*f-l*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),d=o(s/2),f=c(i/2),h=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"YXZ":this._x=f*u*d+l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"ZXY":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d-f*h*g;break;case"ZYX":this._x=f*u*d-l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d+f*h*g;break;case"YZX":this._x=f*u*d+l*h*g,this._y=l*h*d+f*u*g,this._z=l*u*g-f*h*d,this._w=l*u*d-f*h*g;break;case"XZY":this._x=f*u*d-l*h*g,this._y=l*h*d-f*u*g,this._z=l*u*g+f*h*d,this._w=l*u*d+f*h*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],d=n[10],f=i+o+d;if(f>0){const h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(u-c)*h,this._y=(s-l)*h,this._z=(a-r)*h}else if(i>o&&i>d){const h=2*Math.sqrt(1+i-o-d);this._w=(u-c)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+l)/h}else if(o>d){const h=2*Math.sqrt(1+o-i-d);this._w=(s-l)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(c+u)/h}else{const h=2*Math.sqrt(1+d-i-o);this._w=(a-r)/h,this._x=(s+l)/h,this._y=(c+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Yl=class Yl{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(lu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(lu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),d=2*(s*i-a*n);return this.x=n+c*l+a*d-o*u,this.y=i+c*u+o*l-s*d,this.z=r+c*d+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _o.copy(this).projectOnVector(e),this.sub(_o)}reflect(e){return this.sub(_o.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Yl.prototype.isVector3=!0;let D=Yl;const _o=new D,lu=new Gr,Kl=class Kl{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],d=i[7],f=i[2],h=i[5],g=i[8],y=r[0],p=r[3],m=r[6],x=r[1],T=r[4],S=r[7],R=r[2],A=r[5],_=r[8];return s[0]=a*y+o*x+c*R,s[3]=a*p+o*T+c*A,s[6]=a*m+o*S+c*_,s[1]=l*y+u*x+d*R,s[4]=l*p+u*T+d*A,s[7]=l*m+u*S+d*_,s[2]=f*y+h*x+g*R,s[5]=f*p+h*T+g*A,s[8]=f*m+h*S+g*_,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=u*a-o*l,f=o*c-u*s,h=l*s-a*c,g=n*d+i*f+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=d*y,e[1]=(r*l-u*i)*y,e[2]=(o*i-r*a)*y,e[3]=f*y,e[4]=(u*n-r*c)*y,e[5]=(r*s-o*n)*y,e[6]=h*y,e[7]=(i*c-l*n)*y,e[8]=(a*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return Er("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(vo.makeScale(e,n)),this}rotate(e){return Er("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(vo.makeRotation(-e)),this}translate(e,n){return Er("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(vo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Kl.prototype.isMatrix3=!0;let Ve=Kl;const vo=new Ve,uu=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),du=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Tm(){const t={enabled:!0,workingColorSpace:Ga,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=ci(r.r),r.g=ci(r.g),r.b=ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=wr(r.r),r.g=wr(r.g),r.b=wr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yi?Ha:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ga]:{primaries:e,whitePoint:i,transfer:Ha,toXYZ:uu,fromXYZ:du,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:uu,fromXYZ:du,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),t}const nt=Tm();function ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function wr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ir;class Am{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ir===void 0&&(ir=$a("canvas")),ir.width=e.width,ir.height=e.height;const r=ir.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ir}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=$a("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ci(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ci(n[i]/255)*255):n[i]=ci(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rm=0;class gl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=Ri(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(xo(r[a].image)):s.push(xo(r[a]))}else s=xo(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function xo(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Am.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let Cm=0;const So=new D;class Qt extends ji{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=si,r=si,s=fn,a=bi,o=Gn,c=vn,l=Qt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Ri(),this.name="",this.source=new gl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new qe(0,0),this.repeat=new qe(1,1),this.center=new qe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(So).x}get height(){return this.source.getSize(So).y}get depth(){return this.source.getSize(So).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case za:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case sc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case za:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case sc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=hf;Qt.DEFAULT_ANISOTROPY=1;const Jl=class Jl{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],d=c[8],f=c[1],h=c[5],g=c[9],y=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+p)<.1&&Math.abs(l+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const T=(l+1)/2,S=(h+1)/2,R=(m+1)/2,A=(u+f)/4,_=(d+y)/4,b=(g+p)/4;return T>S&&T>R?T<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(T),r=A/i,s=_/i):S>R?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):R<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),i=_/s,r=b/s),this.set(i,r,s,n),this}let x=Math.sqrt((p-g)*(p-g)+(d-y)*(d-y)+(f-u)*(f-u));return Math.abs(x)<.001&&(x=1),this.x=(p-g)/x,this.y=(d-y)/x,this.z=(f-u)/x,this.w=Math.acos((l+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Jl.prototype.isVector4=!0;let wt=Jl;class Pm extends ji{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new wt(0,0,e,n),this.scissorTest=!1,this.viewport=new wt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Qt({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new gl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends Pm{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Tf extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Im extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const no=class no{constructor(e,n,i,r,s,a,o,c,l,u,d,f,h,g,y,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,d,f,h,g,y,p)}set(e,n,i,r,s,a,o,c,l,u,d,f,h,g,y,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=d,m[14]=f,m[3]=h,m[7]=g,m[11]=y,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new no().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/rr.setFromMatrixColumn(e,0).length(),s=1/rr.setFromMatrixColumn(e,1).length(),a=1/rr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const f=a*u,h=a*d,g=o*u,y=o*d;n[0]=c*u,n[4]=-c*d,n[8]=l,n[1]=h+g*l,n[5]=f-y*l,n[9]=-o*c,n[2]=y-f*l,n[6]=g+h*l,n[10]=a*c}else if(e.order==="YXZ"){const f=c*u,h=c*d,g=l*u,y=l*d;n[0]=f+y*o,n[4]=g*o-h,n[8]=a*l,n[1]=a*d,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=y+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*u,h=c*d,g=l*u,y=l*d;n[0]=f-y*o,n[4]=-a*d,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=y-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*u,h=a*d,g=o*u,y=o*d;n[0]=c*u,n[4]=g*l-h,n[8]=f*l+y,n[1]=c*d,n[5]=y*l+f,n[9]=h*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,h=a*l,g=o*c,y=o*l;n[0]=c*u,n[4]=y-f*d,n[8]=g*d+h,n[1]=d,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=h*d+g,n[10]=f-y*d}else if(e.order==="XZY"){const f=a*c,h=a*l,g=o*c,y=o*l;n[0]=c*u,n[4]=-d,n[8]=l*u,n[1]=f*d+y,n[5]=a*u,n[9]=h*d-g,n[2]=g*d-h,n[6]=o*u,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Lm,e,Dm)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),fi.crossVectors(i,mn),fi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),fi.crossVectors(i,mn)),fi.normalize(),qs.crossVectors(mn,fi),r[0]=fi.x,r[4]=qs.x,r[8]=mn.x,r[1]=fi.y,r[5]=qs.y,r[9]=mn.y,r[2]=fi.z,r[6]=qs.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],d=i[5],f=i[9],h=i[13],g=i[2],y=i[6],p=i[10],m=i[14],x=i[3],T=i[7],S=i[11],R=i[15],A=r[0],_=r[4],b=r[8],O=r[12],P=r[1],N=r[5],z=r[9],Z=r[13],I=r[2],$=r[6],j=r[10],H=r[14],de=r[3],K=r[7],ne=r[11],le=r[15];return s[0]=a*A+o*P+c*I+l*de,s[4]=a*_+o*N+c*$+l*K,s[8]=a*b+o*z+c*j+l*ne,s[12]=a*O+o*Z+c*H+l*le,s[1]=u*A+d*P+f*I+h*de,s[5]=u*_+d*N+f*$+h*K,s[9]=u*b+d*z+f*j+h*ne,s[13]=u*O+d*Z+f*H+h*le,s[2]=g*A+y*P+p*I+m*de,s[6]=g*_+y*N+p*$+m*K,s[10]=g*b+y*z+p*j+m*ne,s[14]=g*O+y*Z+p*H+m*le,s[3]=x*A+T*P+S*I+R*de,s[7]=x*_+T*N+S*$+R*K,s[11]=x*b+T*z+S*j+R*ne,s[15]=x*O+T*Z+S*H+R*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],d=e[6],f=e[10],h=e[14],g=e[3],y=e[7],p=e[11],m=e[15],x=c*h-l*f,T=o*h-l*d,S=o*f-c*d,R=a*h-l*u,A=a*f-c*u,_=a*d-o*u;return n*(y*x-p*T+m*S)-i*(g*x-p*R+m*A)+r*(g*T-y*R+m*_)-s*(g*S-y*A+p*_)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return n*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],d=e[9],f=e[10],h=e[11],g=e[12],y=e[13],p=e[14],m=e[15],x=n*o-i*a,T=n*c-r*a,S=n*l-s*a,R=i*c-r*o,A=i*l-s*o,_=r*l-s*c,b=u*y-d*g,O=u*p-f*g,P=u*m-h*g,N=d*p-f*y,z=d*m-h*y,Z=f*m-h*p,I=x*Z-T*z+S*N+R*P-A*O+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/I;return e[0]=(o*Z-c*z+l*N)*$,e[1]=(r*z-i*Z-s*N)*$,e[2]=(y*_-p*A+m*R)*$,e[3]=(f*A-d*_-h*R)*$,e[4]=(c*P-a*Z-l*O)*$,e[5]=(n*Z-r*P+s*O)*$,e[6]=(p*S-g*_-m*T)*$,e[7]=(u*_-f*S+h*T)*$,e[8]=(a*z-o*P+l*b)*$,e[9]=(i*P-n*z-s*b)*$,e[10]=(g*A-y*S+m*x)*$,e[11]=(d*S-u*A-h*x)*$,e[12]=(o*O-a*N-c*b)*$,e[13]=(n*N-i*O+r*b)*$,e[14]=(y*T-g*R-p*x)*$,e[15]=(u*R-d*T+f*x)*$,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,d=o+o,f=s*l,h=s*u,g=s*d,y=a*u,p=a*d,m=o*d,x=c*l,T=c*u,S=c*d,R=i.x,A=i.y,_=i.z;return r[0]=(1-(y+m))*R,r[1]=(h+S)*R,r[2]=(g-T)*R,r[3]=0,r[4]=(h-S)*A,r[5]=(1-(f+m))*A,r[6]=(p+x)*A,r[7]=0,r[8]=(g+T)*_,r[9]=(p-x)*_,r[10]=(1-(f+y))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=rr.set(r[0],r[1],r[2]).length();const o=rr.set(r[4],r[5],r[6]).length(),c=rr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Rn.copy(this);const l=1/a,u=1/o,d=1/c;return Rn.elements[0]*=l,Rn.elements[1]*=l,Rn.elements[2]*=l,Rn.elements[4]*=u,Rn.elements[5]*=u,Rn.elements[6]*=u,Rn.elements[8]*=d,Rn.elements[9]*=d,Rn.elements[10]*=d,n.setFromRotationMatrix(Rn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=Dn,c=!1){const l=this.elements,u=2*s/(n-e),d=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let g,y;if(c)g=s/(a-s),y=a*s/(a-s);else if(o===Dn)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===Is)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Dn,c=!1){const l=this.elements,u=2/(n-e),d=2/(i-r),f=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,y;if(c)g=1/(a-s),y=a/(a-s);else if(o===Dn)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===Is)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=h,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};no.prototype.isMatrix4=!0;let gt=no;const rr=new D,Rn=new gt,Lm=new D(0,0,0),Dm=new D(1,1,1),fi=new D,qs=new D,mn=new D,fu=new gt,hu=new Gr;class Nn{constructor(e=0,n=0,i=0,r=Nn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],d=r[2],f=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,h),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Qe(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Qe(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fu,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return hu.setFromEuler(this),this.setFromQuaternion(hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Nn.DEFAULT_ORDER="XYZ";class Af{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const pu=new D,sr=new Gr,Kn=new gt,Ys=new D,Qr=new D,Um=new D,Om=new Gr,mu=new D(1,0,0),gu=new D(0,1,0),_u=new D(0,0,1),vu={type:"added"},Fm={type:"removed"},ar={type:"childadded",child:null},Mo={type:"childremoved",child:null};class Ht extends ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new D,n=new Nn,i=new Gr,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new Ve}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Af,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return sr.setFromAxisAngle(e,n),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,n){return sr.setFromAxisAngle(e,n),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(mu,e)}rotateY(e){return this.rotateOnAxis(gu,e)}rotateZ(e){return this.rotateOnAxis(_u,e)}translateOnAxis(e,n){return pu.copy(e).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(mu,e)}translateY(e){return this.translateOnAxis(gu,e)}translateZ(e){return this.translateOnAxis(_u,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Kn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ys.copy(e):Ys.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Qr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Kn.lookAt(Qr,Ys,this.up):Kn.lookAt(Ys,Qr,this.up),this.quaternion.setFromRotationMatrix(Kn),r&&(Kn.extractRotation(r.matrixWorld),sr.setFromRotationMatrix(Kn),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(vu),ar.child=e,this.dispatchEvent(ar),ar.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Fm),Mo.child=e,this.dispatchEvent(Mo),Mo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(vu),ar.child=e,this.dispatchEvent(ar),ar.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,e,Um),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qr,Om,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),d=a(e.shapes),f=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new D(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ii extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zm={type:"move"};class yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ii,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ii,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ii,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const y of e.hand.values()){const p=n.getJointPose(y,i),m=this._getHandJoint(l,y);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=u.position.distanceTo(d.position),h=.02,g=.005;l.inputState.pinching&&f>h+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=h-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zm)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ii;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ks={h:0,s:0,l:0};function bo(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ke{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=hl(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=bo(a,s,e+1/3),this.g=bo(a,s,e),this.b=bo(a,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=Rf[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=wr(e.r),this.g=wr(e.g),this.b=wr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return nt.workingToColorSpace(Jt.copy(this),e),Math.round(Qe(Jt.r*255,0,255))*65536+Math.round(Qe(Jt.g*255,0,255))*256+Math.round(Qe(Jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case i:c=(r-s)/d+(r<s?6:0);break;case r:c=(s-i)/d+2;break;case s:c=(i-r)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=nt.workingColorSpace){return nt.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ot){nt.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(hi),this.setHSL(hi.h+e,hi.s+n,hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(hi),e.getHSL(Ks);const i=ys(hi.h,Ks.h,n),r=ys(hi.s,Ks.s,n),s=ys(hi.l,Ks.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ke;Ke.NAMES=Rf;class _l{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ke(e),this.near=n,this.far=i}clone(){return new _l(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class km extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Nn,this.environmentIntensity=1,this.environmentRotation=new Nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Cn=new D,Jn=new D,Eo=new D,jn=new D,or=new D,cr=new D,xu=new D,wo=new D,To=new D,Ao=new D,Ro=new wt,Co=new wt,Po=new wt;class En{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Cn.subVectors(e,n),r.cross(Cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Cn.subVectors(r,n),Jn.subVectors(i,n),Eo.subVectors(e,n);const a=Cn.dot(Cn),o=Cn.dot(Jn),c=Cn.dot(Eo),l=Jn.dot(Jn),u=Jn.dot(Eo),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,h=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,jn)===null?!1:jn.x>=0&&jn.y>=0&&jn.x+jn.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,jn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,jn.x),c.addScaledVector(a,jn.y),c.addScaledVector(o,jn.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Ro.setScalar(0),Co.setScalar(0),Po.setScalar(0),Ro.fromBufferAttribute(e,n),Co.fromBufferAttribute(e,i),Po.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ro,s.x),a.addScaledVector(Co,s.y),a.addScaledVector(Po,s.z),a}static isFrontFacing(e,n,i,r){return Cn.subVectors(i,n),Jn.subVectors(e,n),Cn.cross(Jn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Cn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Cn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return En.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return En.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return En.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return En.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return En.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;or.subVectors(r,i),cr.subVectors(s,i),wo.subVectors(e,i);const c=or.dot(wo),l=cr.dot(wo);if(c<=0&&l<=0)return n.copy(i);To.subVectors(e,r);const u=or.dot(To),d=cr.dot(To);if(u>=0&&d<=u)return n.copy(r);const f=c*d-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),n.copy(i).addScaledVector(or,a);Ao.subVectors(e,s);const h=or.dot(Ao),g=cr.dot(Ao);if(g>=0&&h<=g)return n.copy(s);const y=h*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(cr,o);const p=u*g-h*d;if(p<=0&&d-u>=0&&h-g>=0)return xu.subVectors(s,r),o=(d-u)/(d-u+(h-g)),n.copy(r).addScaledVector(xu,o);const m=1/(p+y+f);return a=y*m,o=f*m,n.copy(i).addScaledVector(or,a).addScaledVector(cr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qi{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Pn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Pn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Pn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Pn):Pn.fromBufferAttribute(s,a),Pn.applyMatrix4(e.matrixWorld),this.expandByPoint(Pn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Pn),Pn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(es),js.subVectors(this.max,es),lr.subVectors(e.a,es),ur.subVectors(e.b,es),dr.subVectors(e.c,es),pi.subVectors(ur,lr),mi.subVectors(dr,ur),Fi.subVectors(lr,dr);let n=[0,-pi.z,pi.y,0,-mi.z,mi.y,0,-Fi.z,Fi.y,pi.z,0,-pi.x,mi.z,0,-mi.x,Fi.z,0,-Fi.x,-pi.y,pi.x,0,-mi.y,mi.x,0,-Fi.y,Fi.x,0];return!Io(n,lr,ur,dr,js)||(n=[1,0,0,0,1,0,0,0,1],!Io(n,lr,ur,dr,js))?!1:(Qs.crossVectors(pi,mi),n=[Qs.x,Qs.y,Qs.z],Io(n,lr,ur,dr,js))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Pn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Pn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Qn=[new D,new D,new D,new D,new D,new D,new D,new D],Pn=new D,Js=new Qi,lr=new D,ur=new D,dr=new D,pi=new D,mi=new D,Fi=new D,es=new D,js=new D,Qs=new D,zi=new D;function Io(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){zi.fromArray(t,s);const o=r.x*Math.abs(zi.x)+r.y*Math.abs(zi.y)+r.z*Math.abs(zi.z),c=e.dot(zi),l=n.dot(zi),u=i.dot(zi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pt=new D,ea=new qe;let Bm=0;class li extends ji{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Bm++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=bf,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?io(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ea.fromBufferAttribute(this,n),ea.applyMatrix3(e),this.setXY(n,ea.x,ea.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):pl(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):ml(e,this.array)}}class Cf extends li{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Pf extends li{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class $t extends li{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Gm=new Qi,ts=new D,Lo=new D;class Bs{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Gm.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ts.subVectors(e,this.center);const n=ts.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ts,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Lo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ts.copy(e.center).add(Lo)),this.expandByPoint(ts.copy(e.center).sub(Lo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Hm=0;const Mn=new gt,Do=new Ht,fr=new D,gn=new Qi,ns=new Qi,Bt=new D;class Un extends ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hm++}),this.uuid=Ri(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?Pf:Cf)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return Do.lookAt(e),Do.updateMatrix(),this.applyMatrix4(Do.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new $t(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bs);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ns.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(gn.min,ns.min),gn.expandByPoint(Bt),Bt.addVectors(gn.max,ns.max),gn.expandByPoint(Bt)):(gn.expandByPoint(ns.min),gn.expandByPoint(ns.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Bt.fromBufferAttribute(o,l),c&&(fr.fromBufferAttribute(e,l),Bt.add(fr)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new li(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let O=0;O<i.count;O++)o[O]=new D,c[O]=new D;const u=new D,d=new D,f=new D,h=new qe,g=new qe,y=new qe,p=new D,m=new D;function x(O,P,N){l[O]=l[P]=l[N]=1,u.fromBufferAttribute(i,O),d.fromBufferAttribute(i,P),f.fromBufferAttribute(i,N),h.fromBufferAttribute(s,O),g.fromBufferAttribute(s,P),y.fromBufferAttribute(s,N),d.sub(u),f.sub(u),g.sub(h),y.sub(h);const z=1/(g.x*y.y-y.x*g.y);isFinite(z)&&(p.copy(d).multiplyScalar(y.y).addScaledVector(f,-g.y).multiplyScalar(z),m.copy(f).multiplyScalar(g.x).addScaledVector(d,-y.x).multiplyScalar(z),o[O].add(p),o[P].add(p),o[N].add(p),c[O].add(m),c[P].add(m),c[N].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let O=0,P=T.length;O<P;++O){const N=T[O],z=N.start,Z=N.count;for(let I=z,$=z+Z;I<$;I+=3)x(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const S=new D,R=new D,A=new D,_=new D;function b(O){A.fromBufferAttribute(r,O),_.copy(A);const P=o[O];S.copy(P),S.sub(A.multiplyScalar(A.dot(P))).normalize(),R.crossVectors(_,P);const z=R.dot(c[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,z)}for(let O=0,P=i.count;O<P;++O)l[O]&&b(O);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,h=i.count;f<h;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,a=new D,o=new D,c=new D,l=new D,u=new D,d=new D;if(e)for(let f=0,h=e.count;f<h;f+=3){const g=e.getX(f+0),y=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),a.fromBufferAttribute(n,p),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,h=n.count;f<h;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,d=o.normalized,f=new l.constructor(c.length*u);let h=0,g=0;for(let y=0,p=c.length;y<p;y++){o.isInterleavedBufferAttribute?h=c[y]*o.data.stride+o.offset:h=c[y]*u;for(let m=0;m<u;m++)f[g++]=l[h++]}return new li(f,u,d)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Un,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){const f=l[u],h=e(f,i);c.push(h)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let d=0,f=l.length;d<f;d++){const h=l[d];u.push(h.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],d=s[l];for(let f=0,h=d.length;f<h;f++)u.push(d[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $m{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=bf,this.updateRanges=[],this.version=0,this.uuid=Ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Su(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Su(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Su(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Ri()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const tn=new D;class Wa{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?io(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new li(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):pl(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):ml(e,this.data.array)}}const No=new D,Vm=new D,Wm=new Ve;class Mi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=No.subVectors(i,n).cross(Vm.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(No),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Wm.getNormalMatrix(e),r=this.coplanarPoint(No).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Xm=0;class Hr extends ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=Ri(),this.name="",this.type="Material",this.blending=Ss,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rf,this.blendDst=sf,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ke(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ke().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Mi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new qe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new qe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Pa extends Hr{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ke(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hr;const is=new D,pr=new D,mr=new D,gr=new qe,rs=new qe,If=new gt,ta=new D,ss=new D,na=new D,Mu=new qe,Uo=new qe,yu=new qe;class Oo extends Ht{constructor(e=new Pa){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Un;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new $m(n,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new Wa(i,3,0,!1)),hr.setAttribute("uv",new Wa(i,2,3,!1))}this.geometry=hr,this.material=e,this.center=new qe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ot('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),pr.setFromMatrixScale(this.matrixWorld),If.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),mr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&pr.multiplyScalar(-mr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ia(ta.set(-.5,-.5,0),mr,a,pr,r,s),ia(ss.set(.5,-.5,0),mr,a,pr,r,s),ia(na.set(.5,.5,0),mr,a,pr,r,s),Mu.set(0,0),Uo.set(1,0),yu.set(1,1);let o=e.ray.intersectTriangle(ta,ss,na,!1,is);if(o===null&&(ia(ss.set(-.5,.5,0),mr,a,pr,r,s),Uo.set(0,1),o=e.ray.intersectTriangle(ta,na,ss,!1,is),o===null))return;const c=e.ray.origin.distanceTo(is);c<e.near||c>e.far||n.push({distance:c,point:is.clone(),uv:En.getInterpolation(is,ta,ss,na,Mu,Uo,yu,new qe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function ia(t,e,n,i,r,s){gr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(rs.x=s*gr.x-r*gr.y,rs.y=r*gr.x+s*gr.y):rs.copy(gr),t.copy(e),t.x+=rs.x,t.y+=rs.y,t.applyMatrix4(If)}const ei=new D,Fo=new D,ra=new D,sa=new D;class Zm{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ei.copy(this.origin).addScaledVector(this.direction,n),ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Fo.copy(e).add(n).multiplyScalar(.5),ra.copy(n).sub(e).normalize(),sa.copy(this.origin).sub(Fo);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ra),o=sa.dot(this.direction),c=-sa.dot(ra),l=sa.lengthSq(),u=Math.abs(1-a*a);let d,f,h,g;if(u>0)if(d=a*c-o,f=a*o-c,g=s*u,d>=0)if(f>=-g)if(f<=g){const y=1/u;d*=y,f*=y,h=d*(d+a*f+2*o)+f*(a*d+f+2*c)+l}else f=s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f=-s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-s,-c),s),h=f*(f+2*c)+l):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-c),s),h=-d*d+f*(f+2*c)+l);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),h=-d*d+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Fo).addScaledVector(ra,f),h}intersectSphere(e,n){if(e.radius<0)return null;ei.subVectors(e.center,this.origin);const i=ei.dot(this.direction),r=ei.dot(ei)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-f.z)*d,c=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,c=(e.min.z-f.z)*d),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ei)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=e.x-a.x,f=e.y-a.y,h=e.z-a.z,g=n.x-a.x,y=n.y-a.y,p=n.z-a.z,m=i.x-a.x,x=i.y-a.y,T=i.z-a.z,S=Math.abs(c),R=Math.abs(l),A=Math.abs(u);let _,b,O,P,N,z,Z,I,$,j,H,de;if(S>=R&&S>=A?(O=c,z=d,$=g,de=m,c>=0?(_=l,b=u,P=f,N=h,Z=y,I=p,j=x,H=T):(_=u,b=l,P=h,N=f,Z=p,I=y,j=T,H=x)):R>=A?(O=l,z=f,$=y,de=x,l>=0?(_=u,b=c,P=h,N=d,Z=p,I=g,j=T,H=m):(_=c,b=u,P=d,N=h,Z=g,I=p,j=m,H=T)):(O=u,z=h,$=p,de=T,u>=0?(_=c,b=l,P=d,N=f,Z=g,I=y,j=m,H=x):(_=l,b=c,P=f,N=d,Z=y,I=g,j=x,H=m)),O===0)return null;const K=_/O,ne=b/O,le=1/O,Pe=P-K*z,He=N-ne*z,Q=Z-K*$,ve=I-ne*$,Ae=j-K*de,Oe=H-ne*de,Ee=Ae*ve-Oe*Q,$e=Pe*Oe-He*Ae,Mt=Q*He-ve*Pe;if(r){if(Ee<0||$e<0||Mt<0)return null}else if((Ee<0||$e<0||Mt<0)&&(Ee>0||$e>0||Mt>0))return null;const ze=Ee+$e+Mt;if(ze===0)return null;const ct=le*(Ee*z+$e*$+Mt*de);return(ze>0?ct<0:ct>0)?null:this.at(ct/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $i extends Hr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.combine=af,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bu=new gt,ki=new Zm,aa=new Bs,Eu=new D,oa=new D,ca=new D,la=new D,zo=new D,ua=new D,wu=new D,da=new D;class xt extends Ht{constructor(e=new Un,n=new $i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ua.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],d=s[c];u!==0&&(zo.fromBufferAttribute(d,e),a?ua.addScaledVector(zo,u):ua.addScaledVector(zo.sub(n),u))}n.add(ua)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),aa.copy(i.boundingSphere),aa.applyMatrix4(s),ki.copy(e.ray).recast(e.near),!(aa.containsPoint(ki.origin)===!1&&(ki.intersectSphere(aa,Eu)===null||ki.origin.distanceToSquared(Eu)>(e.far-e.near)**2))&&(bu.copy(s).invert(),ki.copy(e.ray).applyMatrix4(bu),!(i.boundingBox!==null&&ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,f=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const p=f[g],m=a[p.materialIndex],x=Math.max(p.start,h.start),T=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let S=x,R=T;S<R;S+=3){const A=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);r=fa(this,m,e,i,l,u,d,A,_,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let p=g,m=y;p<m;p+=3){const x=o.getX(p),T=o.getX(p+1),S=o.getX(p+2);r=fa(this,a,e,i,l,u,d,x,T,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const p=f[g],m=a[p.materialIndex],x=Math.max(p.start,h.start),T=Math.min(c.count,Math.min(p.start+p.count,h.start+h.count));for(let S=x,R=T;S<R;S+=3){const A=S,_=S+1,b=S+2;r=fa(this,m,e,i,l,u,d,A,_,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),y=Math.min(c.count,h.start+h.count);for(let p=g,m=y;p<m;p+=3){const x=p,T=p+1,S=p+2;r=fa(this,a,e,i,l,u,d,x,T,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function qm(t,e,n,i,r,s,a,o){let c;if(e.side===on?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Zi,o),c===null)return null;da.copy(o),da.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(da);return l<n.near||l>n.far?null:{distance:l,point:da.clone(),object:t}}function fa(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,oa),t.getVertexPosition(c,ca),t.getVertexPosition(l,la);const u=qm(t,e,n,i,oa,ca,la,wu);if(u){const d=new D;En.getBarycoord(wu,oa,ca,la,d),r&&(u.uv=En.getInterpolatedAttribute(r,o,c,l,d,new qe)),s&&(u.uv1=En.getInterpolatedAttribute(s,o,c,l,d,new qe)),a&&(u.normal=En.getInterpolatedAttribute(a,o,c,l,d,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new D,materialIndex:0};En.getNormal(oa,ca,la,f.normal),u.face=f,u.barycoord=d}return u}class Lf extends Qt{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Wt,u=Wt,d,f){super(null,a,o,c,l,u,r,s,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tu extends li{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const _r=new gt,Au=new gt,ha=[],Ru=new Qi,Ym=new gt,as=new xt,os=new Bs;class Km extends xt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Tu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ym)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_r),Ru.copy(e.boundingBox).applyMatrix4(_r),this.boundingBox.union(Ru)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,_r),os.copy(e.boundingSphere).applyMatrix4(_r),this.boundingSphere.union(os)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(as.geometry=this.geometry,as.material=this.material,as.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(i),e.ray.intersectsSphere(os)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,_r),Au.multiplyMatrices(i,_r),as.matrixWorld=Au,as.raycast(e,ha);for(let a=0,o=ha.length;a<o;a++){const c=ha[a];c.instanceId=s,c.object=this,n.push(c)}ha.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Tu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Lf(new Float32Array(r*this.count),r,this.count,ll,Ln));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Bi=new Bs,Jm=new qe(.5,.5),pa=new D;class Ds{constructor(e=new Mi,n=new Mi,i=new Mi,r=new Mi,s=new Mi,a=new Mi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Dn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],f=s[6],h=s[7],g=s[8],y=s[9],p=s[10],m=s[11],x=s[12],T=s[13],S=s[14],R=s[15];if(r[0].setComponents(l-a,h-u,m-g,R-x).normalize(),r[1].setComponents(l+a,h+u,m+g,R+x).normalize(),r[2].setComponents(l+o,h+d,m+y,R+T).normalize(),r[3].setComponents(l-o,h-d,m-y,R-T).normalize(),i)r[4].setComponents(c,f,p,S).normalize(),r[5].setComponents(l-c,h-f,m-p,R-S).normalize();else if(r[4].setComponents(l-c,h-f,m-p,R-S).normalize(),n===Dn)r[5].setComponents(l+c,h+f,m+p,R+S).normalize();else if(n===Is)r[5].setComponents(c,f,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Bi.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bi)}intersectsSprite(e){Bi.center.set(0,0,0);const n=Jm.distanceTo(e.center);return Bi.radius=.7071067811865476+n,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pa.x=r.normal.x>0?e.max.x:e.min.x,pa.y=r.normal.y>0?e.max.y:e.min.y,pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Cu=new gt;class vl{constructor(){this.coordinateSystem=Dn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Cu.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Ds),i[r].setFromProjectionMatrix(Cu,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Ds),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new vl().copy(this)}}class Df extends Qt{constructor(e=[],n=Ir,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Gi extends Qt{constructor(e,n,i,r,s,a,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dr extends Qt{constructor(e,n,i=Wn,r,s,a,o=Wt,c=Wt,l,u=Ti,d=1){if(u!==Ti&&u!==Ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:d};super(f,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Nf extends Dr{constructor(e,n=Wn,i=Ir,r,s,a=Wt,o=Wt,c,l=Ti){const u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uf extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class er extends Un{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],d=[];let f=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2));function g(y,p,m,x,T,S,R,A,_,b,O){const P=S/_,N=R/b,z=S/2,Z=R/2,I=A/2,$=_+1,j=b+1;let H=0,de=0;const K=new D;for(let ne=0;ne<j;ne++){const le=ne*N-Z;for(let Pe=0;Pe<$;Pe++){const He=Pe*P-z;K[y]=He*x,K[p]=le*T,K[m]=I,l.push(K.x,K.y,K.z),K[y]=0,K[p]=0,K[m]=A>0?1:-1,u.push(K.x,K.y,K.z),d.push(Pe/_),d.push(1-ne/b),H+=1}}for(let ne=0;ne<b;ne++)for(let le=0;le<_;le++){const Pe=f+le+$*ne,He=f+le+$*(ne+1),Q=f+(le+1)+$*(ne+1),ve=f+(le+1)+$*ne;c.push(Pe,He,ve),c.push(He,Q,ve),de+=6}o.addGroup(h,de,O),h+=de,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new er(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ns extends Un{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],f=[],h=[];let g=0;const y=[],p=i/2;let m=0;x(),a===!1&&(e>0&&T(!0),n>0&&T(!1)),this.setIndex(u),this.setAttribute("position",new $t(d,3)),this.setAttribute("normal",new $t(f,3)),this.setAttribute("uv",new $t(h,2));function x(){const S=new D,R=new D;let A=0;const _=(n-e)/i;for(let b=0;b<=s;b++){const O=[],P=b/s,N=P*(n-e)+e;for(let z=0;z<=r;z++){const Z=z/r,I=Z*c+o,$=Math.sin(I),j=Math.cos(I);R.x=N*$,R.y=-P*i+p,R.z=N*j,d.push(R.x,R.y,R.z),S.set($,_,j).normalize(),f.push(S.x,S.y,S.z),h.push(Z,1-P),O.push(g++)}y.push(O)}for(let b=0;b<r;b++)for(let O=0;O<s;O++){const P=y[O][b],N=y[O+1][b],z=y[O+1][b+1],Z=y[O][b+1];(e>0||O!==0)&&(u.push(P,N,Z),A+=3),(n>0||O!==s-1)&&(u.push(N,z,Z),A+=3)}l.addGroup(m,A,0),m+=A}function T(S){const R=g,A=new qe,_=new D;let b=0;const O=S===!0?e:n,P=S===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,p*P,0),f.push(0,P,0),h.push(.5,.5),g++;const N=g;for(let z=0;z<=r;z++){const I=z/r*c+o,$=Math.cos(I),j=Math.sin(I);_.x=O*j,_.y=p*P,_.z=O*$,d.push(_.x,_.y,_.z),f.push(0,P,0),A.x=$*.5+.5,A.y=j*.5*P+.5,h.push(A.x,A.y),g++}for(let z=0;z<r;z++){const Z=R+z,I=N+z;S===!0?u.push(I,I+1,Z):u.push(I+1,I,Z),b+=3}l.addGroup(m,b,S===!0?1:2),m+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ns(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class xl extends Ns{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new xl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wi extends Un{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,d=e/o,f=n/c,h=[],g=[],y=[],p=[];for(let m=0;m<u;m++){const x=m*f-a;for(let T=0;T<l;T++){const S=T*d-s;g.push(S,-x,0),y.push(0,0,1),p.push(T/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let x=0;x<o;x++){const T=x+l*m,S=x+l*(m+1),R=x+1+l*(m+1),A=x+1+l*m;h.push(T,S,A),h.push(S,R,A)}this.setIndex(h),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wi(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sl extends Un{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],d=new D,f=new D,h=[],g=[],y=[],p=[];for(let m=0;m<=i;m++){const x=[],T=m/i,S=a+T*o,R=e*Math.cos(S),A=Math.sqrt(e*e-R*R);let _=0;m===0&&a===0?_=.5/n:m===i&&c===Math.PI&&(_=-.5/n);for(let b=0;b<=n;b++){const O=b/n,P=r+O*s;d.x=-A*Math.cos(P),d.y=R,d.z=A*Math.sin(P),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),p.push(O+_,1-T),x.push(l++)}u.push(x)}for(let m=0;m<i;m++)for(let x=0;x<n;x++){const T=u[m][x+1],S=u[m][x],R=u[m+1][x],A=u[m+1][x+1];(m!==0||a>0)&&h.push(T,S,A),(m!==i-1||c<Math.PI)&&h.push(S,R,A)}this.setIndex(h),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(y,3)),this.setAttribute("uv",new $t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bs extends Un{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],d=[],f=new D,h=new D,g=new D;for(let y=0;y<=i;y++){const p=a+y/i*o;for(let m=0;m<=r;m++){const x=m/r*s;h.x=(e+n*Math.cos(p))*Math.cos(x),h.y=(e+n*Math.cos(p))*Math.sin(x),h.z=n*Math.sin(p),l.push(h.x,h.y,h.z),f.x=e*Math.cos(x),f.y=e*Math.sin(x),g.subVectors(h,f).normalize(),u.push(g.x,g.y,g.z),d.push(m/r),d.push(y/i)}}for(let y=1;y<=i;y++)for(let p=1;p<=r;p++){const m=(r+1)*y+p-1,x=(r+1)*(y-1)+p-1,T=(r+1)*(y-1)+p,S=(r+1)*y+p;c.push(m,x,S),c.push(x,T,S)}this.setIndex(c),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(u,3)),this.setAttribute("uv",new $t(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Nr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Pu(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Pu(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function sn(t){const e={};for(let n=0;n<t.length;n++){const i=Nr(t[n]);for(const r in i)e[r]=i[r]}return e}function Pu(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function jm(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Of(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Qm={clone:Nr,merge:sn};var eg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Hr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eg,this.fragmentShader=tg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Nr(e.uniforms),this.uniformsGroups=jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ke().setHex(r.value);break;case"v2":this.uniforms[i].value=new qe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new wt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new gt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class ng extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ia extends Hr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oc,this.normalScale=new qe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ig extends Ia{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new qe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Er('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Er('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class rg extends Hr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Qp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sg extends Hr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ff extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ke(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class ag extends Ff{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ke(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const ko=new gt,Iu=new D,Lu=new D;class og{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qe(512,512),this.mapType=vn,this.map=null,this.mapPass=null,this.matrix=new gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ds,this._frameExtents=new qe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Iu.setFromMatrixPosition(e.matrixWorld),n.position.copy(Iu),Lu.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Lu),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){ko.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(ko,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Is||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),n.multiply(ko)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ma=new D,ga=new Gr,Fn=new D;class zf extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ma,ga,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Fn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(ma,ga,Fn),Fn.x===1&&Fn.y===1&&Fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ma,ga,Fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const gi=new D,Du=new qe,Nu=new qe;class In extends zf{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ls*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ls*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){gi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(gi.x,gi.y).multiplyScalar(-e/gi.z),gi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gi.x,gi.y).multiplyScalar(-e/gi.z)}getViewSize(e,n){return this.getViewBounds(e,Du,Nu),n.subVectors(Nu,Du)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ms*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class kf extends zf{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class cg extends og{constructor(){super(new kf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Uu extends Ff{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new cg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const vr=-90,xr=1;class Fc extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new In(vr,xr,e,n);r.layers=this.layers,this.add(r);const s=new In(vr,xr,e,n);s.layers=this.layers,this.add(s);const a=new In(vr,xr,e,n);a.layers=this.layers,this.add(a);const o=new In(vr,xr,e,n);o.layers=this.layers,this.add(o);const c=new In(vr,xr,e,n);c.layers=this.layers,this.add(c);const l=new In(vr,xr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Is)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.mipmapsAutoUpdate=y,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(d,f,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class lg extends In{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Ou(t,e,n,i){const r=ug(i);switch(n){case vf:return t*e;case ll:return t*e/r.components*r.byteLength;case ul:return t*e/r.components*r.byteLength;case qi:return t*e*2/r.components*r.byteLength;case dl:return t*e*2/r.components*r.byteLength;case xf:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case fl:return t*e*4/r.components*r.byteLength;case Ta:case Aa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case oc:case lc:return Math.max(t,16)*Math.max(e,8)/4;case ac:case cc:return Math.max(t,8)*Math.max(e,8)/2;case uc:case dc:case hc:case pc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fc:case ka:case mc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _c:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case vc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case xc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Sc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Mc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case yc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case bc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case wc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Tc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Ac:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Rc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Pc:case Ic:case Lc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dc:case Nc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ba:case Uc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ug(t){switch(t){case vn:case pf:return{byteLength:1,components:1};case Ps:case mf:case Xn:return{byteLength:2,components:1};case ol:case cl:return{byteLength:2,components:4};case Wn:case al:case Ln:return{byteLength:4,components:1};case gf:case _f:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rl}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rl);function Bf(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function dg(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,d=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),o.onUploadCallback();let h;if(l instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)h=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)h=t.SHORT;else if(l instanceof Uint32Array)h=t.UNSIGNED_INT;else if(l instanceof Int32Array)h=t.INT;else if(l instanceof Int8Array)h=t.BYTE;else if(l instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:h,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){const u=c.array,d=c.updateRanges;if(t.bindBuffer(l,o),d.length===0)t.bufferSubData(l,0,u);else{d.sort((h,g)=>h.start-g.start);let f=0;for(let h=1;h<d.length;h++){const g=d[f],y=d[h];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let h=0,g=d.length;h<g;h++){const y=d[h];t.bufferSubData(l,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var fg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,hg=`#ifdef USE_ALPHAHASH
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
#endif`,pg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,mg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_g=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vg=`#ifdef USE_AOMAP
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
#endif`,xg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sg=`#ifdef USE_BATCHING
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
#endif`,Mg=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,wg=`#ifdef USE_IRIDESCENCE
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
#endif`,Tg=`#ifdef USE_BUMPMAP
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
#endif`,Ag=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Pg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ig=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Dg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ng=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Ug=`#define PI 3.141592653589793
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
} // validated`,Og=`vec3 transformedNormal = objectNormal;
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
#endif`,Fg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gg="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$g=`#ifdef USE_ENVMAP
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
#endif`,Vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Wg=`#ifdef USE_ENVMAP
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
#endif`,Xg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zg=`#ifdef USE_ENVMAP
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
#endif`,qg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jg=`#ifdef USE_GRADIENTMAP
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
}`,Qg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,e0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,t0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,n0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,i0=`#ifdef USE_ENVMAP
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
#endif`,r0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,c0=`PhysicalMaterial material;
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
#endif`,l0=`uniform sampler2D dfgLUT;
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
}`,u0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,f0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,h0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,p0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,m0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,g0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,M0=`#if defined( USE_POINTS_UV )
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
#endif`,y0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,b0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,w0=`#if defined( USE_MORPHCOLORS )
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
#endif`,T0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,R0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,P0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,I0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,L0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,N0=`#ifdef USE_NORMALMAP
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
#endif`,U0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,B0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,G0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,H0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,V0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,W0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,K0=`float getShadowMask() {
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
}`,J0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,j0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e_=`#ifdef USE_SKINNING
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
#endif`,t_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,n_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s_=`#ifdef USE_TRANSMISSION
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
#endif`,a_=`#ifdef USE_TRANSMISSION
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
#endif`,o_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,f_=`uniform sampler2D t2D;
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
}`,h_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p_=`uniform float backgroundBlurriness;
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,__=`#include <common>
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
}`,v_=`#if DEPTH_PACKING == 3200
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
}`,x_=`#define DISTANCE
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
}`,S_=`#define DISTANCE
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
}`,M_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b_=`uniform float scale;
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
}`,E_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,T_=`uniform vec3 diffuse;
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
}`,A_=`#define LAMBERT
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
}`,R_=`#define LAMBERT
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
}`,C_=`#define MATCAP
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
}`,P_=`#define MATCAP
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
}`,I_=`#define NORMAL
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
}`,L_=`#define NORMAL
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
}`,D_=`#define PHONG
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
}`,N_=`#define PHONG
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
}`,U_=`#define STANDARD
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
}`,O_=`#define STANDARD
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
}`,F_=`#define TOON
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
}`,z_=`#define TOON
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
}`,k_=`uniform float size;
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
}`,B_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,H_=`uniform vec3 color;
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
}`,$_=`uniform float rotation;
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
}`,V_=`uniform vec3 diffuse;
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
}`,Ye={alphahash_fragment:fg,alphahash_pars_fragment:hg,alphamap_fragment:pg,alphamap_pars_fragment:mg,alphatest_fragment:gg,alphatest_pars_fragment:_g,aomap_fragment:vg,aomap_pars_fragment:xg,batching_pars_vertex:Sg,batching_vertex:Mg,begin_vertex:yg,beginnormal_vertex:bg,bsdfs:Eg,iridescence_fragment:wg,bumpmap_pars_fragment:Tg,clipping_planes_fragment:Ag,clipping_planes_pars_fragment:Rg,clipping_planes_pars_vertex:Cg,clipping_planes_vertex:Pg,color_fragment:Ig,color_pars_fragment:Lg,color_pars_vertex:Dg,color_vertex:Ng,common:Ug,defaultnormal_vertex:Og,displacementmap_pars_vertex:Fg,displacementmap_vertex:zg,emissivemap_fragment:kg,emissivemap_pars_fragment:Bg,colorspace_fragment:Gg,colorspace_pars_fragment:Hg,envmap_fragment:$g,envmap_common_pars_fragment:Vg,envmap_pars_fragment:Wg,envmap_pars_vertex:Xg,envmap_physical_pars_fragment:i0,envmap_vertex:Zg,fog_vertex:qg,fog_pars_vertex:Yg,fog_fragment:Kg,fog_pars_fragment:Jg,gradientmap_pars_fragment:jg,lightmap_pars_fragment:Qg,lights_lambert_fragment:e0,lights_lambert_pars_fragment:t0,lights_pars_begin:n0,lights_toon_fragment:r0,lights_toon_pars_fragment:s0,lights_phong_fragment:a0,lights_phong_pars_fragment:o0,lights_physical_fragment:c0,lights_physical_pars_fragment:l0,lights_fragment_begin:u0,lights_fragment_maps:d0,lights_fragment_end:f0,lightprobes_pars_fragment:h0,logdepthbuf_fragment:p0,logdepthbuf_pars_fragment:m0,logdepthbuf_pars_vertex:g0,logdepthbuf_vertex:_0,map_fragment:v0,map_pars_fragment:x0,map_particle_fragment:S0,map_particle_pars_fragment:M0,metalnessmap_fragment:y0,metalnessmap_pars_fragment:b0,morphinstance_vertex:E0,morphcolor_vertex:w0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:R0,normal_fragment_begin:C0,normal_fragment_maps:P0,normal_pars_fragment:I0,normal_pars_vertex:L0,normal_vertex:D0,normalmap_pars_fragment:N0,clearcoat_normal_fragment_begin:U0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:F0,iridescence_pars_fragment:z0,opaque_fragment:k0,packing:B0,premultiplied_alpha_fragment:G0,project_vertex:H0,dithering_fragment:$0,dithering_pars_fragment:V0,roughnessmap_fragment:W0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:q0,shadowmap_vertex:Y0,shadowmask_pars_fragment:K0,skinbase_vertex:J0,skinning_pars_vertex:j0,skinning_vertex:Q0,skinnormal_vertex:e_,specularmap_fragment:t_,specularmap_pars_fragment:n_,tonemapping_fragment:i_,tonemapping_pars_fragment:r_,transmission_fragment:s_,transmission_pars_fragment:a_,uv_pars_fragment:o_,uv_pars_vertex:c_,uv_vertex:l_,worldpos_vertex:u_,background_vert:d_,background_frag:f_,backgroundCube_vert:h_,backgroundCube_frag:p_,cube_vert:m_,cube_frag:g_,depth_vert:__,depth_frag:v_,distance_vert:x_,distance_frag:S_,equirect_vert:M_,equirect_frag:y_,linedashed_vert:b_,linedashed_frag:E_,meshbasic_vert:w_,meshbasic_frag:T_,meshlambert_vert:A_,meshlambert_frag:R_,meshmatcap_vert:C_,meshmatcap_frag:P_,meshnormal_vert:I_,meshnormal_frag:L_,meshphong_vert:D_,meshphong_frag:N_,meshphysical_vert:U_,meshphysical_frag:O_,meshtoon_vert:F_,meshtoon_frag:z_,points_vert:k_,points_frag:B_,shadow_vert:G_,shadow_frag:H_,sprite_vert:$_,sprite_frag:V_},we={common:{diffuse:{value:new Ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new qe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ke(16777215)},opacity:{value:1},center:{value:new qe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},Bn={basic:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ke(0)},envMapIntensity:{value:1}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:sn([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ke(0)},specular:{value:new Ke(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:sn([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:sn([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ke(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:sn([we.points,we.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:sn([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:sn([we.common,we.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:sn([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:sn([we.sprite,we.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distance:{uniforms:sn([we.common,we.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distance_vert,fragmentShader:Ye.distance_frag},shadow:{uniforms:sn([we.lights,we.fog,{color:{value:new Ke(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Bn.physical={uniforms:sn([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new qe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new qe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ke(0)},specularColor:{value:new Ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new qe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const _a={r:0,b:0,g:0},W_=new gt,Gf=new Ve;Gf.set(-1,0,0,0,1,0,0,0,1);function X_(t,e,n,i,r,s){const a=new Ke(0);let o=r===!0?0:1,c,l,u=null,d=0,f=null;function h(x){let T=x.isScene===!0?x.background:null;if(T&&T.isTexture){const S=x.backgroundBlurriness>0;T=e.get(T,S)}return T}function g(x){let T=!1;const S=h(x);S===null?p(a,o):S&&S.isColor&&(p(S,1),T=!0);const R=t.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,s):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||T)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(x,T){const S=h(T);S&&S.isCubeTexture?(l===void 0&&(l=new xt(new er(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:Nr(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(R,A,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(W_.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Gf),l.material.toneMapped=nt.getTransfer(S.colorSpace)!==dt,(u!==S||d!==S.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new xt(new Wi(2,2),new Yi({name:"BackgroundMaterial",uniforms:Nr(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=nt.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,f=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,T){x.getRGB(_a,Of(t)),n.buffers.color.setClear(_a.r,_a.g,_a.b,T,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,T=1){a.set(x),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:g,addToRenderList:y,dispose:m}}function Z_(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(N,z,Z,I,$){let j=!1;const H=d(N,I,Z,z);s!==H&&(s=H,l(s.object)),j=h(N,I,Z,$),j&&g(N,I,Z,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(j||a)&&(a=!1,S(N,z,Z,I),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function c(){return t.createVertexArray()}function l(N){return t.bindVertexArray(N)}function u(N){return t.deleteVertexArray(N)}function d(N,z,Z,I){const $=I.wireframe===!0;let j=i[z.id];j===void 0&&(j={},i[z.id]=j);const H=N.isInstancedMesh===!0?N.id:0;let de=j[H];de===void 0&&(de={},j[H]=de);let K=de[Z.id];K===void 0&&(K={},de[Z.id]=K);let ne=K[$];return ne===void 0&&(ne=f(c()),K[$]=ne),ne}function f(N){const z=[],Z=[],I=[];for(let $=0;$<n;$++)z[$]=0,Z[$]=0,I[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:Z,attributeDivisors:I,object:N,attributes:{},index:null}}function h(N,z,Z,I){const $=s.attributes,j=z.attributes;let H=0;const de=Z.getAttributes();for(const K in de)if(de[K].location>=0){const le=$[K];let Pe=j[K];if(Pe===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(Pe=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(Pe=N.instanceColor)),le===void 0||le.attribute!==Pe||Pe&&le.data!==Pe.data)return!0;H++}return s.attributesNum!==H||s.index!==I}function g(N,z,Z,I){const $={},j=z.attributes;let H=0;const de=Z.getAttributes();for(const K in de)if(de[K].location>=0){let le=j[K];le===void 0&&(K==="instanceMatrix"&&N.instanceMatrix&&(le=N.instanceMatrix),K==="instanceColor"&&N.instanceColor&&(le=N.instanceColor));const Pe={};Pe.attribute=le,le&&le.data&&(Pe.data=le.data),$[K]=Pe,H++}s.attributes=$,s.attributesNum=H,s.index=I}function y(){const N=s.newAttributes;for(let z=0,Z=N.length;z<Z;z++)N[z]=0}function p(N){m(N,0)}function m(N,z){const Z=s.newAttributes,I=s.enabledAttributes,$=s.attributeDivisors;Z[N]=1,I[N]===0&&(t.enableVertexAttribArray(N),I[N]=1),$[N]!==z&&(t.vertexAttribDivisor(N,z),$[N]=z)}function x(){const N=s.newAttributes,z=s.enabledAttributes;for(let Z=0,I=z.length;Z<I;Z++)z[Z]!==N[Z]&&(t.disableVertexAttribArray(Z),z[Z]=0)}function T(N,z,Z,I,$,j,H){H===!0?t.vertexAttribIPointer(N,z,Z,$,j):t.vertexAttribPointer(N,z,Z,I,$,j)}function S(N,z,Z,I){y();const $=I.attributes,j=Z.getAttributes(),H=z.defaultAttributeValues;for(const de in j){const K=j[de];if(K.location>=0){let ne=$[de];if(ne===void 0&&(de==="instanceMatrix"&&N.instanceMatrix&&(ne=N.instanceMatrix),de==="instanceColor"&&N.instanceColor&&(ne=N.instanceColor)),ne!==void 0){const le=ne.normalized,Pe=ne.itemSize,He=e.get(ne);if(He===void 0)continue;const Q=He.buffer,ve=He.type,Ae=He.bytesPerElement,Oe=ve===t.INT||ve===t.UNSIGNED_INT||ne.gpuType===al;if(ne.isInterleavedBufferAttribute){const Ee=ne.data,$e=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,Mt=ne.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let ze=0;ze<K.locationSize;ze++)m(K.location+ze,Ee.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ze=0;ze<K.locationSize;ze++)p(K.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let ze=0;ze<K.locationSize;ze++)T(K.location+ze,Pe/K.locationSize,ve,le,$e*Ae,(Mt+Pe/K.locationSize*ze)*Ae,Oe)}else{if(ne.isInstancedBufferAttribute){for(let Ee=0;Ee<K.locationSize;Ee++)m(K.location+Ee,ne.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)p(K.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,Q);for(let Ee=0;Ee<K.locationSize;Ee++)T(K.location+Ee,Pe/K.locationSize,ve,le,Pe*Ae,Pe/K.locationSize*Ee*Ae,Oe)}}else if(H!==void 0){const le=H[de];if(le!==void 0)switch(le.length){case 2:t.vertexAttrib2fv(K.location,le);break;case 3:t.vertexAttrib3fv(K.location,le);break;case 4:t.vertexAttrib4fv(K.location,le);break;default:t.vertexAttrib1fv(K.location,le)}}}}x()}function R(){O();for(const N in i){const z=i[N];for(const Z in z){const I=z[Z];for(const $ in I){const j=I[$];for(const H in j)u(j[H].object),delete j[H];delete I[$]}}delete i[N]}}function A(N){if(i[N.id]===void 0)return;const z=i[N.id];for(const Z in z){const I=z[Z];for(const $ in I){const j=I[$];for(const H in j)u(j[H].object),delete j[H];delete I[$]}}delete i[N.id]}function _(N){for(const z in i){const Z=i[z];for(const I in Z){const $=Z[I];if($[N.id]===void 0)continue;const j=$[N.id];for(const H in j)u(j[H].object),delete j[H];delete $[N.id]}}}function b(N){for(const z in i){const Z=i[z],I=N.isInstancedMesh===!0?N.id:0,$=Z[I];if($!==void 0){for(const j in $){const H=$[j];for(const de in H)u(H[de].object),delete H[de];delete $[j]}delete Z[I],Object.keys(Z).length===0&&delete i[z]}}}function O(){P(),a=!0,s!==r&&(s=r,l(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:O,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:p,disableUnusedAttributes:x}}function q_(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(t.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let h=0;h<u;h++)f+=l[h];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Y_(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==Gn&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const b=_===Xn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==vn&&_!==Ln&&!b&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(Ge("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),T=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),R=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:x,maxVaryings:T,maxFragmentUniforms:S,maxSamples:R,samples:A}}function K_(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Mi,o=new Ve,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const h=d.length!==0||f||i!==0||r;return r=f,i=d.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){n=u(d,f,0)},this.setState=function(d,f,h){const g=d.clippingPlanes,y=d.clipIntersection,p=d.clipShadows,m=t.get(d);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const x=s?0:i,T=x*4;let S=m.clippingState||null;c.value=S,S=u(g,f,T,h);for(let R=0;R!==T;++R)S[R]=n[R];m.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(d,f,h,g){const y=d!==null?d.length:0;let p=null;if(y!==0){if(p=c.value,g!==!0||p===null){const m=h+y*4,x=f.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<m)&&(p=new Float32Array(m));for(let T=0,S=h;T!==y;++T,S+=4)a.copy(d[T]).applyMatrix4(x,o),a.normal.toArray(p,S),p[S+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,p}}class Ml extends Vn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Df(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new er(5,5,5),s=new Yi({name:"CubemapFromEquirect",uniforms:Nr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:br});s.uniforms.tEquirect.value=n;const a=new xt(r,s),o=n.minFilter;return n.minFilter===bi&&(n.minFilter=fn),new Fc(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Fu=256,J_=3,j_=20,Hf=256,$f=16,Q_=3,ev=new D,tv=new Ke;class Xa{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Fc(1,10,null),this._boxMesh=new xt(new er(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=ev}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const d=c.autoClear,f=c.autoClearColor,h=c.autoClearDepth,g=c.autoClearStencil,y=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,y===null&&(e.background=c.getClearColor(tv));const p=new Fc(i,r,u);return p.position.copy(o),p.update(c,e),c.autoClear=d,c.autoClearColor=f,c.autoClearDepth=h,c.autoClearStencil=g,e.background=y,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,n)),this._applyPMREM(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ku(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Fu,wf(e))}_fromTexture(e,n){e.mapping===Ir||e.mapping===Cs?this._setSize(e.image.length===0?Fu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=zu(e,!1,!1),i=Math.log2(e)-J_;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=zu(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Ir||e.mapping===Cs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bu()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=ku()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=nv(),this._integrationMaterial=iv());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/$f);for(let a=0;a<=i;a++){const o=Xa.lodToRoughness(a,i);if(a>i-Q_)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(n)+.5*Math.log2(6/(Hf*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=rv());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function zu(t,e,n){return new Ml(t,{minFilter:bi,generateMipmaps:e,type:Xn,colorSpace:Ga,depthBuffer:n})}function Gs(t,e,n){return new Yi({name:t,uniforms:e,vertexShader:Ye.cube_vert,fragmentShader:n,side:on,blending:br,depthTest:!1,depthWrite:!1})}function nv(){return Gs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hf}u

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
	`)}function iv(){return Gs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$f}},`

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
	`)}function rv(){return Gs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${j_}
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
	`)}function ku(){return Gs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Bu(){return Gs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function sv(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,h=!1){return f==null?null:h?a(f):s(f)}function s(f){if(f&&f.isTexture){const h=f.mapping;if(h===ho||h===po)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const y=new Ml(g.height);return y.fromEquirectangularTexture(t,f),e.set(f,y),f.addEventListener("dispose",l),o(y.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const h=f.mapping,g=h===ho||h===po,y=h===Ir||h===Cs;if(g||y){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new Xa(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const x=f.image;return g&&x&&x.height>0||y&&x&&c(x)?(i===null&&(i=new Xa(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,h){return h===ho?f.mapping=Ir:h===po&&(f.mapping=Cs),f}function c(f){let h=0;const g=6;for(let y=0;y<g;y++)f[y]!==void 0&&h++;return h===g}function l(f){const h=f.target;h.removeEventListener("dispose",l);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(f){const h=f.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function av(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Er("WebGLRenderer: "+i+" extension not supported."),r}}}function ov(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const y=s.get(g);y&&(e.remove(y),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function l(g,y){return r[y.id]!==void 0||(y.addEventListener("dispose",o),r[y.id]=new WeakRef(y),a.register(y,y.id,y),n.memory.geometries++),y}function u(g){const y=g.attributes;for(const p in y)e.update(y[p],t.ARRAY_BUFFER)}function d(g){const y=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const x=y!==null?y.array.length:p.array.length/3-1,T=p.count>=65535?Pf:Cf,S=new T(Math.ceil(x/3)*6,1),R=S.array;if(y!==null){const _=y.array;m=y.version;for(let b=0,O=0;b<x;b+=3){const P=_[b+0],N=_[b+1],z=_[b+2];R[O++]=P,R[O++]=N,R[O++]=N,R[O++]=z,R[O++]=z,R[O++]=P}}else{m=p.version;for(let _=0,b=0;_<x;_+=3){const O=_+0,P=_+1,N=_+2;R[b++]=O,R[b++]=P,R[b++]=P,R[b++]=N,R[b++]=N,R[b++]=O}}S.version=m;const A=s.get(g);A&&e.remove(A),s.set(g,S)}function f(g){const y=s.get(g);if(y){const p=g.index;p!==null&&y.version<p.version&&d(g)}else d(g);return s.get(g)}function h(){for(const g in r){const y=r[g].deref();y!==void 0&&c(y)}}return{get:l,update:u,getWireframeAttribute:f,dispose:h}}function cv(t,e,n){let i;function r(d){i=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,f){t.drawElements(i,f,s,d*a),n.update(f,i,1)}function l(d,f,h){h!==0&&(t.drawElementsInstanced(i,f,s,d*a,h),n.update(f,i,h))}function u(d,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,d,0,h);let y=0;for(let p=0;p<h;p++)y+=f[p];n.update(y,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function lv(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function uv(t,e,n){const i=new WeakMap,r=new wt;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let P=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",P)};var h=P;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),y===!0&&(S=2),p===!0&&(S=3);let R=o.attributes.position.count*S,A=1;R>e.maxTextureSize&&(A=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const _=new Float32Array(R*A*4*d),b=new Tf(_,R,A,d);b.type=Ln,b.needsUpdate=!0;const O=S*4;for(let N=0;N<d;N++){const z=m[N],Z=x[N],I=T[N],$=R*A*4*N;for(let j=0;j<z.count;j++){const H=j*O;g===!0&&(r.fromBufferAttribute(z,j),_[$+H+0]=r.x,_[$+H+1]=r.y,_[$+H+2]=r.z,_[$+H+3]=0),y===!0&&(r.fromBufferAttribute(Z,j),_[$+H+4]=r.x,_[$+H+5]=r.y,_[$+H+6]=r.z,_[$+H+7]=0),p===!0&&(r.fromBufferAttribute(I,j),_[$+H+8]=r.x,_[$+H+9]=r.y,_[$+H+10]=r.z,_[$+H+11]=I.itemSize===4?r.w:1)}}f={count:d,texture:b,size:new qe(R,A)},i.set(o,f),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",y),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function dv(t,e,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return f}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const fv={[of]:"LINEAR_TONE_MAPPING",[cf]:"REINHARD_TONE_MAPPING",[lf]:"CINEON_TONE_MAPPING",[sl]:"ACES_FILMIC_TONE_MAPPING",[df]:"AGX_TONE_MAPPING",[ff]:"NEUTRAL_TONE_MAPPING",[uf]:"CUSTOM_TONE_MAPPING"};function hv(t,e,n,i,r,s){const a=new Vn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Un;u.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new $t([0,2,0,0,2,0],2));const d=new ng({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new xt(u,d),h=new kf(-1,1,1,-1,0,1);let g=null,y=null,p=!1,m,x=null,T=[],S=!1;this.setSize=function(R,A){a.setSize(R,A),o!==null&&o.setSize(R,A),c!==null&&c.setSize(R,A);for(let _=0;_<T.length;_++){const b=T[_];b.setSize&&b.setSize(R,A)}},this.setEffects=function(R){T=R,S=T.length>0&&T[0].isRenderPass===!0;const A=a.width,_=a.height;T.length>0&&o===null&&(o=new Vn(A,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}),c=new Vn(A,_,{type:Xn,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&T.some(O=>O.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new Dr(A,_),s===!0&&(l.format=Ei,l.type=Lr)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let O=0;O<T.length;O++){const P=T[O];P.setSize&&P.setSize(A,_),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(R,A){if(p||R.toneMapping===oi&&T.length===0)return!1;if(x=A,A!==null){const _=A.width,b=A.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&R.setRenderTarget(a),m=R.toneMapping,R.toneMapping=oi,!0},this.hasRenderPass=function(){return S},this.end=function(R,A){R.toneMapping=m,p=!0;let _=a,b=o;for(let O=0;O<T.length;O++){const P=T[O];P.enabled!==!1&&(P.render(R,b,_,A),P.needsSwap!==!1&&(_=b,b=b===o?c:o))}if(g!==R.outputColorSpace||y!==R.toneMapping){g=R.outputColorSpace,y=R.toneMapping,d.defines={},nt.getTransfer(g)===dt&&(d.defines.SRGB_TRANSFER="");const O=fv[y];O&&(d.defines[O]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,R.setRenderTarget(x),R.render(f,h),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}const Vf=new Qt,Wf=new Dr(1,1),Xf=new Nf(1),Zf=new Tf,qf=new Im,Yf=new Df,Gu=[],Hu=[],$u=new Float32Array(16),Vu=new Float32Array(9),Wu=new Float32Array(4);function $r(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Gu[r];if(s===void 0&&(s=new Float32Array(r),Gu[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ro(t,e){let n=Hu[e];n===void 0&&(n=new Int32Array(e),Hu[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function pv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function mv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function gv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function _v(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function vv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;Wu.set(i),t.uniformMatrix2fv(this.addr,!1,Wu),zt(n,i)}}function xv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;Vu.set(i),t.uniformMatrix3fv(this.addr,!1,Vu),zt(n,i)}}function Sv(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ft(n,i))return;$u.set(i),t.uniformMatrix4fv(this.addr,!1,$u),zt(n,i)}}function Mv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function yv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function bv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function Ev(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function wv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Tv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function Av(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function Rv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function so(t){return t.version===0&&(t.compareFunction=yf,t.needsUpdate=!0),t}function Cv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=so(Wf):s=Vf,n.setTexture2D(e||s,r)}function Pv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||qf,r)}function Iv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=so(Xf):s=Yf,n.setTextureCube(e||s,r)}function Lv(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Zf,r)}function Dv(t){switch(t){case 5126:return pv;case 35664:return mv;case 35665:return gv;case 35666:return _v;case 35674:return vv;case 35675:return xv;case 35676:return Sv;case 5124:case 35670:return Mv;case 35667:case 35671:return yv;case 35668:case 35672:return bv;case 35669:case 35673:return Ev;case 5125:return wv;case 36294:return Tv;case 36295:return Av;case 36296:return Rv;case 35678:case 36198:case 36298:case 36306:case 35682:return Cv;case 35679:case 36299:case 36307:return Pv;case 35680:case 36300:case 36308:case 36293:return Iv;case 36289:case 36303:case 36311:case 36292:return Lv}}function Nv(t,e){t.uniform1fv(this.addr,e)}function Uv(t,e){const n=$r(e,this.size,2);t.uniform2fv(this.addr,n)}function Ov(t,e){const n=$r(e,this.size,3);t.uniform3fv(this.addr,n)}function Fv(t,e){const n=$r(e,this.size,4);t.uniform4fv(this.addr,n)}function zv(t,e){const n=$r(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function kv(t,e){const n=$r(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Bv(t,e){const n=$r(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Gv(t,e){t.uniform1iv(this.addr,e)}function Hv(t,e){t.uniform2iv(this.addr,e)}function $v(t,e){t.uniform3iv(this.addr,e)}function Vv(t,e){t.uniform4iv(this.addr,e)}function Wv(t,e){t.uniform1uiv(this.addr,e)}function Xv(t,e){t.uniform2uiv(this.addr,e)}function Zv(t,e){t.uniform3uiv(this.addr,e)}function qv(t,e){t.uniform4uiv(this.addr,e)}function Yv(t,e,n){const i=this.cache,r=e.length,s=ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=so(Wf):a=Vf;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Kv(t,e,n){const i=this.cache,r=e.length,s=ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||qf,s[a])}function Jv(t,e,n){const i=this.cache,r=e.length,s=ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=so(Xf):a=Yf;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function jv(t,e,n){const i=this.cache,r=e.length,s=ro(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Zf,s[a])}function Qv(t){switch(t){case 5126:return Nv;case 35664:return Uv;case 35665:return Ov;case 35666:return Fv;case 35674:return zv;case 35675:return kv;case 35676:return Bv;case 5124:case 35670:return Gv;case 35667:case 35671:return Hv;case 35668:case 35672:return $v;case 35669:case 35673:return Vv;case 5125:return Wv;case 36294:return Xv;case 36295:return Zv;case 36296:return qv;case 35678:case 36198:case 36298:case 36306:case 35682:return Yv;case 35679:case 36299:case 36307:return Kv;case 35680:case 36300:case 36308:case 36293:return Jv;case 36289:case 36303:case 36311:case 36292:return jv}}class ex{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Dv(n.type)}}class tx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Qv(n.type)}}class nx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Bo=/(\w+)(\])?(\[|\.)?/g;function Xu(t,e){t.seq.push(e),t.map[e.id]=e}function ix(t,e,n){const i=t.name,r=i.length;for(Bo.lastIndex=0;;){const s=Bo.exec(i),a=Bo.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){Xu(n,l===void 0?new ex(o,t,e):new tx(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new nx(o),Xu(n,d)),n=d}}}class La{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);ix(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Zu(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const rx=37297;let sx=0;function ax(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const qu=new Ve;function ox(t){nt._getMatrix(qu,nt.workingColorSpace,t);const e=`mat3( ${qu.elements.map(n=>n.toFixed(4))} )`;switch(nt.getTransfer(t)){case Ha:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Yu(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+ax(t.getShaderSource(e),o)}else return s}function cx(t,e){const n=ox(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const lx={[of]:"Linear",[cf]:"Reinhard",[lf]:"Cineon",[sl]:"ACESFilmic",[df]:"AgX",[ff]:"Neutral",[uf]:"Custom"};function ux(t,e){const n=lx[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const va=new D;function dx(){nt.getLuminanceCoefficients(va);const t=va.x.toFixed(4),e=va.y.toFixed(4),n=va.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ms).join(`
`)}function hx(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function px(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ms(t){return t!==""}function Ku(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ju(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const mx=/^[ \t]*#include +<([\w\d./]+)>/gm;function zc(t){return t.replace(mx,gx)}function gx(t,e){const n=Ye[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zc(n)}const _x=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ju(t){return t.replace(_x,vx)}function vx(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Qu(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const xx={[wa]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function Sx(t){return xx[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mx={[Cs]:"ENVMAP_MODE_REFRACTION"};function yx(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Mx[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const bx={[af]:"ENVMAP_BLENDING_MULTIPLY",[Kp]:"ENVMAP_BLENDING_MIX",[Jp]:"ENVMAP_BLENDING_ADD"};function Ex(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":bx[t.combine]||"ENVMAP_BLENDING_NONE"}function wx(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Sx(n),l=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=yx(n),d=Ex(n),f=fx(n),h=hx(s),g=r.createProgram();let y,p,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(ms).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(y=[Qu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[Qu(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==oi?"#define TONE_MAPPING":"",n.toneMapping!==oi?Ye.tonemapping_pars_fragment:"",n.toneMapping!==oi?ux("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,cx("linearToOutputTexel",n.outputColorSpace),dx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ms).join(`
`)),a=zc(a),a=Ku(a,n),a=Ju(a,n),o=zc(o),o=Ku(o,n),o=Ju(o,n),a=ju(a),o=ju(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,y=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",n.glslVersion===au?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===au?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const x=m+y+a,T=m+p+o,S=Zu(r,r.VERTEX_SHADER,x),R=Zu(r,r.FRAGMENT_SHADER,T);r.attachShader(g,S),r.attachShader(g,R),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(P){if(t.debug.checkShaderErrors){const N=r.getProgramInfoLog(g)||"",z=r.getShaderInfoLog(S)||"",Z=r.getShaderInfoLog(R)||"",I=N.trim(),$=z.trim(),j=Z.trim();let H=!0,de=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(H=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,S,R);else{const K=Yu(r,S,"vertex"),ne=Yu(r,R,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+I+`
`+K+`
`+ne)}else I!==""?Ge("WebGLProgram: Program Info Log:",I):($===""||j==="")&&(de=!1);de&&(P.diagnostics={runnable:H,programLog:I,vertexShader:{log:$,prefix:y},fragmentShader:{log:j,prefix:p}})}r.deleteShader(S),r.deleteShader(R),_=new La(r,g),b=px(r,g)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(g,rx)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=sx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=R,this}let Tx=0;class Ax{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Rx(e),n.set(e,i)),i}}class Rx{constructor(e){this.id=Tx++,this.code=e,this.usedTimes=0}}function Cx(t){return t===qi||t===ka||t===Ba}function Px(t,e,n,i,r,s){const a=new Af,o=new Ax,c=new Set,l=[],u=new Map,d=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,b,O,P,N,z){const Z=P.fog,I=N.geometry,$=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?P.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,H=e.get(_.envMap||$,j),de=f[_.type];let K=i.precision;_.precision!==null&&(K=i.getMaxPrecision(_.precision),K!==_.precision&&Ge("WebGLProgram.getParameters:",_.precision,"not supported, using",K,"instead."));const ne=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,le=ne!==void 0?ne.length:0;let Pe=0;I.morphAttributes.position!==void 0&&(Pe=1),I.morphAttributes.normal!==void 0&&(Pe=2),I.morphAttributes.color!==void 0&&(Pe=3);let He,Q,ve,Ae;if(de){const be=Bn[de];He=be.vertexShader,Q=be.fragmentShader}else{He=_.vertexShader,Q=_.fragmentShader;const be=o.getVertexShaderStage(_),it=o.getFragmentShaderStage(_);o.update(_,be,it),ve=be.id,Ae=it.id}const Oe=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),$e=N.isInstancedMesh===!0,Mt=N.isBatchedMesh===!0,ze=!!_.map,ct=!!_.matcap,ut=!!H,Je=ut&&H.isPMREMTexture===!0,Ut=!!_.aoMap,_t=!!_.lightMap,Zt=!!_.bumpMap&&_.wireframe===!1,pt=!!_.normalMap,Sn=!!_.displacementMap,At=!!_.emissiveMap,cn=!!_.metalnessMap,ln=!!_.roughnessMap,U=_.anisotropy>0,w=_.clearcoat>0,te=_.diffuseRoughness>0,ae=_.dispersion>0,oe=_.retroreflectivity>0,ee=_.iridescence>0,ye=_.sheen>0,W=_.transmission>0,se=U&&!!_.anisotropyMap,M=w&&!!_.clearcoatMap,v=w&&!!_.clearcoatNormalMap,F=w&&!!_.clearcoatRoughnessMap,ie=te&&!!_.diffuseRoughnessMap,Y=ee&&!!_.iridescenceMap,ce=ee&&!!_.iridescenceThicknessMap,pe=ye&&!!_.sheenColorMap,J=ye&&!!_.sheenRoughnessMap,q=!!_.specularMap,me=!!_.specularColorMap,C=!!_.specularIntensityMap,V=W&&!!_.transmissionMap,k=W&&!!_.thicknessMap,ue=!!_.gradientMap,fe=!!_.alphaMap,_e=_.alphaTest>0,De=!!_.alphaHash,Be=!!_.extensions;let he=oi;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(he=t.toneMapping);const Ue=Je?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Ze={shaderID:de,shaderType:_.type,shaderName:_.name,vertexShader:He,fragmentShader:Q,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:Ae,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:K,batching:Mt,batchingColor:Mt&&N._colorsTexture!==null,instancing:$e,instancingColor:$e&&N.instanceColor!==null,instancingMorph:$e&&N.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:ct,envMap:ut,envMapMode:ut&&H.mapping,envMapPMREM:Je,envMapMaxLod:Je?Ue.length-1:null,envMapSize:Je?Ue[0].width:null,aoMap:Ut,lightMap:_t,bumpMap:Zt,normalMap:pt,displacementMap:Sn,emissiveMap:At,normalMapObjectSpace:pt&&_.normalMapType===em,normalMapTangentSpace:pt&&_.normalMapType===Oc,packedNormalMap:pt&&_.normalMapType===Oc&&Cx(_.normalMap.format),metalnessMap:cn,roughnessMap:ln,anisotropy:U,anisotropyMap:se,clearcoat:w,clearcoatMap:M,clearcoatNormalMap:v,clearcoatRoughnessMap:F,diffuseRoughness:te,diffuseRoughnessMap:ie,dispersion:ae,retroreflection:oe,iridescence:ee,iridescenceMap:Y,iridescenceThicknessMap:ce,sheen:ye,sheenColorMap:pe,sheenRoughnessMap:J,specularMap:q,specularColorMap:me,specularIntensityMap:C,transmission:W,transmissionMap:V,thicknessMap:k,gradientMap:ue,opaque:_.transparent===!1&&_.blending===Ss&&_.alphaToCoverage===!1,alphaMap:fe,alphaTest:_e,alphaHash:De,combine:_.combine,mapUv:ze&&h(_.map.channel),aoMapUv:Ut&&h(_.aoMap.channel),lightMapUv:_t&&h(_.lightMap.channel),bumpMapUv:Zt&&h(_.bumpMap.channel),normalMapUv:pt&&h(_.normalMap.channel),displacementMapUv:Sn&&h(_.displacementMap.channel),emissiveMapUv:At&&h(_.emissiveMap.channel),metalnessMapUv:cn&&h(_.metalnessMap.channel),roughnessMapUv:ln&&h(_.roughnessMap.channel),anisotropyMapUv:se&&h(_.anisotropyMap.channel),clearcoatMapUv:M&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:F&&h(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ie&&h(_.diffuseRoughnessMap.channel),iridescenceMapUv:Y&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:J&&h(_.sheenRoughnessMap.channel),specularMapUv:q&&h(_.specularMap.channel),specularColorMapUv:me&&h(_.specularColorMap.channel),specularIntensityMapUv:C&&h(_.specularIntensityMap.channel),transmissionMapUv:V&&h(_.transmissionMap.channel),thicknessMapUv:k&&h(_.thicknessMap.channel),alphaMapUv:fe&&h(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(pt||U),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(ze||fe),fog:!!Z,useFog:_.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&pt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Ee,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:Pe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:z.filter(be=>be.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:he,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&nt.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:At&&_.emissiveMap.isVideoTexture===!0&&nt.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===bn,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Be&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&_.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function y(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const O in _.defines)b.push(O),b.push(_.defines[O]);return _.isRawShaderMaterial===!1&&(p(b,_),m(b,_),b.push(t.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function p(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){const b=f[_.type];let O;if(b){const P=Bn[b];O=Qm.clone(P.uniforms)}else O=_.uniforms;return O}function T(_,b){let O=u.get(b);return O!==void 0?++O.usedTimes:(O=new wx(t,b,_,r),l.push(O),u.set(b,O)),O}function S(_){if(--_.usedTimes===0){const b=l.indexOf(_);l[b]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function R(_){o.remove(_)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:x,acquireProgram:T,releaseProgram:S,releaseShaderCache:R,programs:l,dispose:A}}function Ix(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Lx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function ed(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function td(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,g,y,p,m){let x=t[e];return x===void 0?(x={id:f.id,object:f,geometry:h,material:g,materialVariant:a(f),groupOrder:y,renderOrder:f.renderOrder,z:p,group:m},t[e]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=g,x.materialVariant=a(f),x.groupOrder=y,x.renderOrder=f.renderOrder,x.z=p,x.group=m),e++,x}function c(f,h,g,y,p,m,x){x.reversedDepth===!0&&(p=-p);const T=o(f,h,g,y,p,m);g.transmission>0?i.push(T):g.transparent===!0?r.push(T):n.push(T)}function l(f,h,g,y,p,m){const x=o(f,h,g,y,p,m);g.transmission>0?i.unshift(x):g.transparent===!0?r.unshift(x):n.unshift(x)}function u(f,h){n.length>1&&n.sort(f||Lx),i.length>1&&i.sort(h||ed),r.length>1&&r.sort(h||ed)}function d(){for(let f=e,h=t.length;f<h;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:d,sort:u}}function Dx(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new td,t.set(i,[a])):r>=s.length?(a=new td,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function Nx(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new Ke};break;case"SpotLight":n={position:new D,direction:new D,color:new Ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new Ke,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new Ke,groundColor:new Ke};break;case"RectAreaLight":n={color:new Ke,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function Ux(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Ox=0;function Fx(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zx(t){const e=new Nx,n=Ux(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new D);const r=new D,s=new gt,a=new gt;function o(l){let u=0,d=0,f=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let h=0,g=0,y=0,p=0,m=0,x=0,T=0,S=0,R=0,A=0,_=0,b=0,O=0,P=0;l.sort(Fx);for(let z=0,Z=l.length;z<Z;z++){const I=l[z],$=I.color,j=I.intensity,H=I.distance;let de=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===qi?de=I.shadow.map.texture:de=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=$.r*j,d+=$.g*j,f+=$.b*j;else if(I.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(I.sh.coefficients[K],j);P++}else if(I.isSunLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,le=n.get(I);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),i.sunShadow[g]=le,i.sunShadowMap[g]=de;const Pe=ne.getViewportCount();for(let He=0;He<Pe;He++)i.sunShadowMatrix[y+He]=ne.getMatrix(He),i.sunShadowCascade[y+He]=ne._cascadeData[He];y+=Pe,g++}i.sun[h]=K,h++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ne=I.shadow,le=n.get(I);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.directionalShadow[p]=le,i.directionalShadowMap[p]=de,i.directionalShadowMatrix[p]=I.shadow.matrix,R++}i.directional[p]=K,p++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy($).multiplyScalar(j),K.distance=H,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,i.spot[x]=K;const ne=I.shadow;if(I.map&&(i.spotLightMap[b]=I.map,b++,ne.updateMatrices(I),I.castShadow&&O++),i.spotLightMatrix[x]=ne.matrix,I.castShadow){const le=n.get(I);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,i.spotShadow[x]=le,i.spotShadowMap[x]=de,_++}x++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy($).multiplyScalar(j),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),i.rectArea[T]=K,T++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity),K.distance=I.distance,K.decay=I.decay,I.castShadow){const ne=I.shadow,le=n.get(I);le.shadowIntensity=ne.intensity,le.shadowBias=ne.bias,le.shadowNormalBias=ne.normalBias,le.shadowRadius=ne.radius,le.shadowMapSize=ne.mapSize,le.shadowCameraNear=ne.camera.near,le.shadowCameraFar=ne.camera.far,i.pointShadow[m]=le,i.pointShadowMap[m]=de,i.pointShadowMatrix[m]=I.shadow.matrix,A++}i.point[m]=K,m++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(j),K.groundColor.copy(I.groundColor).multiplyScalar(j),i.hemi[S]=K,S++}}T>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=d,i.ambient[2]=f;const N=i.hash;(N.sunLength!==h||N.directionalLength!==p||N.pointLength!==m||N.spotLength!==x||N.rectAreaLength!==T||N.hemiLength!==S||N.numSunShadows!==g||N.numDirectionalShadows!==R||N.numPointShadows!==A||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==P)&&(i.sun.length=h,i.directional.length=p,i.spot.length=x,i.rectArea.length=T,i.point.length=m,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=y,i.sunShadowCascade.length=y,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.directionalShadowMatrix.length=R,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-O,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=P,N.sunLength=h,N.directionalLength=p,N.pointLength=m,N.spotLength=x,N.rectAreaLength=T,N.hemiLength=S,N.numSunShadows=g,N.numDirectionalShadows=R,N.numPointShadows=A,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=P,i.version=Ox++)}function c(l,u){let d=0,f=0,h=0,g=0,y=0,p=0;const m=u.matrixWorldInverse;for(let x=0,T=l.length;x<T;x++){const S=l[x];if(S.isSunLight){const R=i.sun[d];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(m),d++}else if(S.isDirectionalLight){const R=i.directional[f];R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),f++}else if(S.isSpotLight){const R=i.spot[g];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),R.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(m),g++}else if(S.isRectAreaLight){const R=i.rectArea[y];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),R.halfWidth.set(S.width*.5,0,0),R.halfHeight.set(0,S.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),y++}else if(S.isPointLight){const R=i.point[h];R.position.setFromMatrixPosition(S.matrixWorld),R.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const R=i.hemi[p];R.direction.setFromMatrixPosition(S.matrixWorld),R.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function nd(t){const e=new zx(t),n=[],i=[],r=[];function s(d){u.camera=d,n.length=0,i.length=0,r.length=0}function a(d){d.isLightProbeGrid?r.push(d):n.push(d)}function o(d){i.push(d)}function c(){e.setup(n),r.sort((d,f)=>d.priority-f.priority||d.id-f.id)}function l(d){e.setupView(n,d)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function kx(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new nd(t),e.set(r,[o])):s>=a.length?(o=new nd(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const Bx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
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
}`,Hx=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$x=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],id=new gt,cs=new D,Go=new D;function Vx(t,e,n){let i=new Ds;const r=new qe,s=new qe,a=new wt,o=new rg,c=new sg,l={},u=n.maxTextureSize,d={[Zi]:on,[on]:Zi,[bn]:bn},f=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qe},radius:{value:4}},vertexShader:Bx,fragmentShader:Gx}),h=f.clone();h.defines.HORIZONTAL_PASS=1;const g=new Un;g.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new xt(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wa;let m=this.type;this.render=function(A,_,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===Ip&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wa);const O=t.getRenderTarget(),P=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),z=t.state;z.setBlending(br),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const Z=m!==this.type;Z&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach($=>$.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,$=A.length;I<$;I++){const j=A[I],H=j.shadow;if(H===void 0){Ge("WebGLShadowMap:",j,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;r.copy(H.mapSize);const de=H.getFrameExtents();r.multiply(de),s.copy(H.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/de.x),r.x=s.x*de.x,H.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/de.y),r.y=s.y*de.y,H.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(H.camera._reversedDepth=K,H.map===null||Z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ps){if(j.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Vn(r.x,r.y,{format:qi,type:Xn,minFilter:fn,magFilter:fn,generateMipmaps:!1}),H.map.texture.name=j.name+".shadowMap",H.map.depthTexture=new Dr(r.x,r.y,Ln),H.map.depthTexture.name=j.name+".shadowMapDepth",H.map.depthTexture.format=Ti,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt}else j.isPointLight?(H.map=new Ml(r.x),H.map.depthTexture=new Nf(r.x,Wn)):(H.map=new Vn(r.x,r.y),H.map.depthTexture=new Dr(r.x,r.y,Wn)),H.map.depthTexture.name=j.name+".shadowMap",H.map.depthTexture.format=Ti,this.type===wa?(H.map.depthTexture.compareFunction=K?Mf:Sf,H.map.depthTexture.minFilter=fn,H.map.depthTexture.magFilter=fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Wt,H.map.depthTexture.magFilter=Wt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==r.x||H.map.height!==r.y)&&H.map.setSize(r.x,r.y);const ne=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();j.isPointLight!==!0&&H.updateMatrices(j,b);const le=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:b.layers;for(let Pe=0;Pe<ne;Pe++){const He=H.getCamera(Pe);if(j.isPointLight){const Q=H.camera,ve=H.matrix,Ae=j.distance||Q.far;Ae!==Q.far&&(Q.far=Ae,Q.updateProjectionMatrix()),cs.setFromMatrixPosition(j.matrixWorld),Q.position.copy(cs),Go.copy(Q.position),Go.add(Hx[Pe]),Q.up.copy($x[Pe]),Q.lookAt(Go),Q.updateMatrixWorld(),ve.makeTranslation(-cs.x,-cs.y,-cs.z),id.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),H._frustum.setFromProjectionMatrix(id,Q.coordinateSystem,Q.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)t.setRenderTarget(H.map,Pe),t.clear();else{Pe===0&&(t.setRenderTarget(H.map),t.clear());const Q=H.getViewport(Pe);a.set(s.x*Q.x,s.y*Q.y,s.x*Q.z,s.y*Q.w),z.viewport(a)}i=H.getFrustum(Pe),S(_,b,He,j,le,this.type)}H.isPointLightShadow!==!0&&this.type===ps&&x(H,b),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(O,P,N)};function x(A,_){const b=e.update(y);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Vn(r.x,r.y,{format:qi,type:Xn}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(_,null,b,f,y,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(_,null,b,h,y,null)}function T(A,_,b,O){let P=null;const N=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(N!==void 0)P=N;else if(P=b.isPointLight===!0?c:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const z=P.uuid,Z=_.uuid;let I=l[z];I===void 0&&(I={},l[z]=I);let $=I[Z];$===void 0&&($=P.clone(),I[Z]=$,_.addEventListener("dispose",R)),P=$}if(P.visible=_.visible,P.wireframe=_.wireframe,O===ps?P.side=_.shadowSide!==null?_.shadowSide:_.side:P.side=_.shadowSide!==null?_.shadowSide:d[_.side],P.alphaMap=_.alphaMap,P.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,P.map=_.map,P.clipShadows=_.clipShadows,P.clippingPlanes=_.clippingPlanes,P.clipIntersection=_.clipIntersection,P.displacementMap=_.displacementMap,P.displacementScale=_.displacementScale,P.displacementBias=_.displacementBias,P.wireframeLinewidth=_.wireframeLinewidth,P.linewidth=_.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const z=t.properties.get(P);z.light=b}return P}function S(A,_,b,O,P,N){if(A.visible===!1)return;if(A.layers.test(P)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&N===ps)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const I=e.update(A),$=A.material;if(Array.isArray($)){const j=I.groups;for(let H=0,de=j.length;H<de;H++){const K=j[H],ne=$[K.materialIndex];if(ne&&ne.visible){const le=T(A,ne,O,N);A.onBeforeShadow(t,A,_,b,I,le,K),t.renderBufferDirect(b,null,I,le,A,K),A.onAfterShadow(t,A,_,b,I,le,K)}}}else if($.visible){const j=T(A,$,O,N);A.onBeforeShadow(t,A,_,b,I,j,null),t.renderBufferDirect(b,null,I,j,A,null),A.onAfterShadow(t,A,_,b,I,j,null)}}const Z=A.children;for(let I=0,$=Z.length;I<$;I++)S(Z[I],_,b,O,P,N)}function R(A){A.target.removeEventListener("dispose",R);for(const b in l){const O=l[b],P=A.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}}function Wx(t,e){function n(){let C=!1;const V=new wt;let k=null;const ue=new wt(0,0,0,0);return{setMask:function(fe){k!==fe&&!C&&(t.colorMask(fe,fe,fe,fe),k=fe)},setLocked:function(fe){C=fe},setClear:function(fe,_e,De,Be,he){he===!0&&(fe*=Be,_e*=Be,De*=Be),V.set(fe,_e,De,Be),ue.equals(V)===!1&&(t.clearColor(fe,_e,De,Be),ue.copy(V))},reset:function(){C=!1,k=null,ue.set(-1,0,0,0)}}}function i(){let C=!1,V=!1,k=null,ue=null,fe=null;return{setReversed:function(_e){if(V!==_e){const De=e.get("EXT_clip_control");_e?De.clipControlEXT(De.LOWER_LEFT_EXT,De.ZERO_TO_ONE_EXT):De.clipControlEXT(De.LOWER_LEFT_EXT,De.NEGATIVE_ONE_TO_ONE_EXT),V=_e;const Be=fe;fe=null,this.setClear(Be)}},getReversed:function(){return V},setTest:function(_e){_e?Ee(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(_e){k!==_e&&!C&&(t.depthMask(_e),k=_e)},setFunc:function(_e){if(V&&(_e=um[_e]),ue!==_e){switch(_e){case jo:t.depthFunc(t.NEVER);break;case Qo:t.depthFunc(t.ALWAYS);break;case ec:t.depthFunc(t.LESS);break;case Rs:t.depthFunc(t.LEQUAL);break;case tc:t.depthFunc(t.EQUAL);break;case nc:t.depthFunc(t.GEQUAL);break;case ic:t.depthFunc(t.GREATER);break;case rc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ue=_e}},setLocked:function(_e){C=_e},setClear:function(_e){fe!==_e&&(fe=_e,V&&(_e=1-_e),t.clearDepth(_e))},reset:function(){C=!1,k=null,ue=null,fe=null,V=!1}}}function r(){let C=!1,V=null,k=null,ue=null,fe=null,_e=null,De=null,Be=null,he=null;return{setTest:function(Ue){C||(Ue?Ee(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(Ue){V!==Ue&&!C&&(t.stencilMask(Ue),V=Ue)},setFunc:function(Ue,Ze,be){(k!==Ue||ue!==Ze||fe!==be)&&(t.stencilFunc(Ue,Ze,be),k=Ue,ue=Ze,fe=be)},setOp:function(Ue,Ze,be){(_e!==Ue||De!==Ze||Be!==be)&&(t.stencilOp(Ue,Ze,be),_e=Ue,De=Ze,Be=be)},setLocked:function(Ue){C=Ue},setClear:function(Ue){he!==Ue&&(t.clearStencil(Ue),he=Ue)},reset:function(){C=!1,V=null,k=null,ue=null,fe=null,_e=null,De=null,Be=null,he=null}}}const s=new n,a=new i,o=new r;let c={};const l=new WeakMap;let u={},d={},f={},h=new WeakMap,g=[],y=null,p=!1,m=null,x=null,T=null,S=null,R=null,A=null,_=null,b=new Ke(0,0,0),O=0,P=!1,N=null,z=null,Z=null,I=null,$=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,de=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(de=parseFloat(/^WebGL (\d)/.exec(K)[1]),H=de>=1):K.indexOf("OpenGL ES")!==-1&&(de=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),H=de>=2);let ne=null,le={};const Pe=t.getParameter(t.SCISSOR_BOX),He=t.getParameter(t.VIEWPORT),Q=new wt().fromArray(Pe),ve=new wt().fromArray(He);function Ae(C,V,k,ue){const fe=new Uint8Array(4),_e=t.createTexture();t.bindTexture(C,_e),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let De=0;De<k;De++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(V,0,t.RGBA,1,1,ue,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(V+De,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return _e}const Oe={};Oe[t.TEXTURE_2D]=Ae(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=Ae(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=Ae(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=Ae(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(t.DEPTH_TEST),a.setFunc(Rs),Zt(!1),pt(nu),Ee(t.CULL_FACE),Ut(br);function Ee(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function $e(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function Mt(C,V){return f[C]!==V?(t.bindFramebuffer(C,V),f[C]=V,C===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=V),C===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=V),!0):!1}function ze(C,V){let k=g,ue=!1;if(C){k=h.get(V),k===void 0&&(k=[],h.set(V,k));const fe=C.textures;if(k.length!==fe.length||k[0]!==t.COLOR_ATTACHMENT0){for(let _e=0,De=fe.length;_e<De;_e++)k[_e]=t.COLOR_ATTACHMENT0+_e;k.length=fe.length,ue=!0}}else k[0]!==t.BACK&&(k[0]=t.BACK,ue=!0);ue&&t.drawBuffers(k)}function ct(C){return y!==C?(t.useProgram(C),y=C,!0):!1}const ut={[Sr]:t.FUNC_ADD,[Dp]:t.FUNC_SUBTRACT,[Np]:t.FUNC_REVERSE_SUBTRACT};ut[Up]=t.MIN,ut[Op]=t.MAX;const Je={[Fp]:t.ZERO,[zp]:t.ONE,[kp]:t.SRC_COLOR,[rf]:t.SRC_ALPHA,[Wp]:t.SRC_ALPHA_SATURATE,[$p]:t.DST_COLOR,[Gp]:t.DST_ALPHA,[Bp]:t.ONE_MINUS_SRC_COLOR,[sf]:t.ONE_MINUS_SRC_ALPHA,[Vp]:t.ONE_MINUS_DST_COLOR,[Hp]:t.ONE_MINUS_DST_ALPHA,[Xp]:t.CONSTANT_COLOR,[Zp]:t.ONE_MINUS_CONSTANT_COLOR,[qp]:t.CONSTANT_ALPHA,[Yp]:t.ONE_MINUS_CONSTANT_ALPHA};function Ut(C,V,k,ue,fe,_e,De,Be,he,Ue){if(C===br){p===!0&&($e(t.BLEND),p=!1);return}if(p===!1&&(Ee(t.BLEND),p=!0),C!==Lp){if(C!==m||Ue!==P){if((x!==Sr||R!==Sr)&&(t.blendEquation(t.FUNC_ADD),x=Sr,R=Sr),Ue)switch(C){case Ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFunc(t.ONE,t.ONE);break;case ru:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case su:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",C);break}else switch(C){case Ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case iu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case ru:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case su:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",C);break}T=null,S=null,A=null,_=null,b.set(0,0,0),O=0,m=C,P=Ue}return}fe=fe||V,_e=_e||k,De=De||ue,(V!==x||fe!==R)&&(t.blendEquationSeparate(ut[V],ut[fe]),x=V,R=fe),(k!==T||ue!==S||_e!==A||De!==_)&&(t.blendFuncSeparate(Je[k],Je[ue],Je[_e],Je[De]),T=k,S=ue,A=_e,_=De),(Be.equals(b)===!1||he!==O)&&(t.blendColor(Be.r,Be.g,Be.b,he),b.copy(Be),O=he),m=C,P=!1}function _t(C,V){C.side===bn?$e(t.CULL_FACE):Ee(t.CULL_FACE);let k=C.side===on;V&&(k=!k),Zt(k),C.blending===Ss&&C.transparent===!1?Ut(br):Ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const ue=C.stencilWrite;o.setTest(ue),ue&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),At(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function Zt(C){N!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),N=C)}function pt(C){C!==Cp?(Ee(t.CULL_FACE),C!==z&&(C===nu?t.cullFace(t.BACK):C===Pp?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),z=C}function Sn(C){C!==Z&&(H&&t.lineWidth(C),Z=C)}function At(C,V,k){C?(Ee(t.POLYGON_OFFSET_FILL),(I!==V||$!==k)&&(I=V,$=k,a.getReversed()&&(V=-V,k=-k),t.polygonOffset(V,k))):$e(t.POLYGON_OFFSET_FILL)}function cn(C){C?Ee(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function ln(C){C===void 0&&(C=t.TEXTURE0+j-1),ne!==C&&(t.activeTexture(C),ne=C)}function U(C,V,k){k===void 0&&(ne===null?k=t.TEXTURE0+j-1:k=ne);let ue=le[k];ue===void 0&&(ue={type:void 0,texture:void 0},le[k]=ue),(ue.type!==C||ue.texture!==V)&&(ne!==k&&(t.activeTexture(k),ne=k),t.bindTexture(C,V||Oe[C]),ue.type=C,ue.texture=V)}function w(){const C=le[ne];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function te(){try{t.compressedTexImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function ae(){try{t.compressedTexImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function oe(){try{t.texSubImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function ee(){try{t.texSubImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function ye(){try{t.compressedTexSubImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function W(){try{t.compressedTexSubImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function se(){try{t.texStorage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function M(){try{t.texStorage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function v(){try{t.texImage2D(...arguments)}catch(C){ot("WebGLState:",C)}}function F(){try{t.texImage3D(...arguments)}catch(C){ot("WebGLState:",C)}}function ie(C){return d[C]!==void 0?d[C]:t.getParameter(C)}function Y(C,V){d[C]!==V&&(t.pixelStorei(C,V),d[C]=V)}function ce(C){Q.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),Q.copy(C))}function pe(C){ve.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function J(C,V){let k=l.get(V);k===void 0&&(k=new WeakMap,l.set(V,k));let ue=k.get(C);ue===void 0&&(ue=t.getUniformBlockIndex(V,C.name),t.uniformBlockBinding(V,ue,ue),k.set(C,ue))}function q(C,V,k){const fe=l.get(V).get(C);c[fe]!==k&&(t.bindBufferBase(t.UNIFORM_BUFFER,fe,k),c[fe]=k)}function me(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},d={},ne=null,le={},f={},c={},h=new WeakMap,g=[],y=null,p=!1,m=null,x=null,T=null,S=null,R=null,A=null,_=null,b=new Ke(0,0,0),O=0,P=!1,N=null,z=null,Z=null,I=null,$=null,Q.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Ee,disable:$e,bindFramebuffer:Mt,drawBuffers:ze,useProgram:ct,setBlending:Ut,setMaterial:_t,setFlipSided:Zt,setCullFace:pt,setLineWidth:Sn,setPolygonOffset:At,setScissorTest:cn,activeTexture:ln,bindTexture:U,unbindTexture:w,compressedTexImage2D:te,compressedTexImage3D:ae,texImage2D:v,texImage3D:F,pixelStorei:Y,getParameter:ie,updateUBOMapping:J,uniformBlockBinding:q,texStorage2D:se,texStorage3D:M,texSubImage2D:oe,texSubImage3D:ee,compressedTexSubImage2D:ye,compressedTexSubImage3D:W,scissor:ce,viewport:pe,reset:me}}function Xx(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new qe,u=new WeakMap,d=new Set;let f;const h=new WeakMap,g=new Set,y=new FinalizationRegistry(M=>g.delete(M));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,v){return p?new OffscreenCanvas(M,v):$a("canvas")}function x(M,v,F){let ie=1;const Y=se(M);if((Y.width>F||Y.height>F)&&(ie=F/Math.max(Y.width,Y.height)),ie<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const ce=Math.floor(ie*Y.width),pe=Math.floor(ie*Y.height);f===void 0&&(f=m(ce,pe));const J=v?m(ce,pe):f;return J.width=ce,J.height=pe,J.getContext("2d").drawImage(M,0,0,ce,pe),Ge("WebGLRenderer: Texture has been resized from ("+Y.width+"x"+Y.height+") to ("+ce+"x"+pe+")."),J}else return"data"in M&&Ge("WebGLRenderer: Image in DataTexture is too big ("+Y.width+"x"+Y.height+")."),M;return M}function T(M){return M.generateMipmaps}function S(M){t.generateMipmap(M)}function R(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(M,v,F,ie,Y,ce=!1){if(M!==null){if(t[M]!==void 0)return t[M];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let pe;ie&&(pe=e.get("EXT_texture_norm16"),pe||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===t.RED&&(F===t.FLOAT&&(J=t.R32F),F===t.HALF_FLOAT&&(J=t.R16F),F===t.UNSIGNED_BYTE&&(J=t.R8),F===t.UNSIGNED_SHORT&&pe&&(J=pe.R16_EXT),F===t.SHORT&&pe&&(J=pe.R16_SNORM_EXT)),v===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.R8UI),F===t.UNSIGNED_SHORT&&(J=t.R16UI),F===t.UNSIGNED_INT&&(J=t.R32UI),F===t.BYTE&&(J=t.R8I),F===t.SHORT&&(J=t.R16I),F===t.INT&&(J=t.R32I)),v===t.RG&&(F===t.FLOAT&&(J=t.RG32F),F===t.HALF_FLOAT&&(J=t.RG16F),F===t.UNSIGNED_BYTE&&(J=t.RG8),F===t.UNSIGNED_SHORT&&pe&&(J=pe.RG16_EXT),F===t.SHORT&&pe&&(J=pe.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RG8UI),F===t.UNSIGNED_SHORT&&(J=t.RG16UI),F===t.UNSIGNED_INT&&(J=t.RG32UI),F===t.BYTE&&(J=t.RG8I),F===t.SHORT&&(J=t.RG16I),F===t.INT&&(J=t.RG32I)),v===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RGB8UI),F===t.UNSIGNED_SHORT&&(J=t.RGB16UI),F===t.UNSIGNED_INT&&(J=t.RGB32UI),F===t.BYTE&&(J=t.RGB8I),F===t.SHORT&&(J=t.RGB16I),F===t.INT&&(J=t.RGB32I)),v===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),F===t.UNSIGNED_INT&&(J=t.RGBA32UI),F===t.BYTE&&(J=t.RGBA8I),F===t.SHORT&&(J=t.RGBA16I),F===t.INT&&(J=t.RGBA32I)),v===t.RGB&&(F===t.UNSIGNED_SHORT&&pe&&(J=pe.RGB16_EXT),F===t.SHORT&&pe&&(J=pe.RGB16_SNORM_EXT),F===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),F===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),v===t.RGBA){const q=ce?Ha:nt.getTransfer(Y);F===t.FLOAT&&(J=t.RGBA32F),F===t.HALF_FLOAT&&(J=t.RGBA16F),F===t.UNSIGNED_BYTE&&(J=q===dt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT&&pe&&(J=pe.RGBA16_EXT),F===t.SHORT&&pe&&(J=pe.RGBA16_SNORM_EXT),F===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(M,v){let F;return M?v===null||v===Wn||v===Lr?F=t.DEPTH24_STENCIL8:v===Ln?F=t.DEPTH32F_STENCIL8:v===Ps&&(F=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Wn||v===Lr?F=t.DEPTH_COMPONENT24:v===Ln?F=t.DEPTH_COMPONENT32F:v===Ps&&(F=t.DEPTH_COMPONENT16),F}function b(M,v){return T(M)===!0||M.isFramebufferTexture&&M.minFilter!==Wt&&M.minFilter!==fn?Math.log2(Math.max(v.width,v.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?v.mipmaps.length:1}function O(M){const v=new WeakRef(M);i.get(M).__ref=v,g.add(v),y.register(M,v,v)}function P(M){const v=i.get(M).__ref;v!==void 0&&(g.delete(v),y.unregister(v))}function N(M){Z(M.target)}function z(M){I(M.target)}function Z(M){M.removeEventListener("dispose",N),P(M),j(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&d.delete(M)}function I(M){M.removeEventListener("dispose",z),P(M),de(M)}function $(){for(const M of g){const v=M.deref();v!==void 0&&(v.isRenderTarget===!0?I(v):Z(v))}g.clear(),d.clear()}function j(M){const v=i.get(M);if(v.__webglInit===void 0)return;const F=M.source,ie=h.get(F);if(ie){const Y=ie[v.__cacheKey];Y.usedTimes--,Y.usedTimes===0&&H(M),Object.keys(ie).length===0&&h.delete(F)}i.remove(M)}function H(M){const v=i.get(M);t.deleteTexture(v.__webglTexture);const F=M.source,ie=h.get(F);delete ie[v.__cacheKey],a.memory.textures--}function de(M){const v=i.get(M);v.__depthDisposeCallback&&v.__depthDisposeCallback();const F=M.depthTexture;if(F&&F.renderTarget===M&&Z(F),M.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(v.__webglFramebuffer[Y]))for(let ce=0;ce<v.__webglFramebuffer[Y].length;ce++)t.deleteFramebuffer(v.__webglFramebuffer[Y][ce]);else t.deleteFramebuffer(v.__webglFramebuffer[Y]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[Y])}else{if(Array.isArray(v.__webglFramebuffer))for(let Y=0;Y<v.__webglFramebuffer.length;Y++)t.deleteFramebuffer(v.__webglFramebuffer[Y]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Y=0;Y<v.__webglColorRenderbuffer.length;Y++)v.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const ie=M.textures;for(let Y=0,ce=ie.length;Y<ce;Y++){const pe=i.get(ie[Y]);pe.__webglTexture&&(t.deleteTexture(pe.__webglTexture),a.memory.textures--),i.remove(ie[Y])}i.remove(M)}let K=0;function ne(){K=0}function le(){return K}function Pe(M){K=M}function He(){const M=K;return M>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+r.maxTextures),K+=1,M}function Q(M){const v=[];return v.push(M.wrapS),v.push(M.wrapT),v.push(M.wrapR||0),v.push(M.magFilter),v.push(M.minFilter),v.push(M.anisotropy),v.push(M.internalFormat),v.push(M.format),v.push(M.type),v.push(M.generateMipmaps),v.push(M.mipmapsAutoUpdate),v.push(M.premultiplyAlpha),v.push(M.flipY),v.push(M.unpackAlignment),v.push(M.colorSpace),v.join()}function ve(M,v){const F=i.get(M);if(M.isVideoTexture&&ye(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&F.__version!==M.version){const ie=M.image;if(ie===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{_t(F,M,v);return}}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+v)}function Ae(M,v){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){_t(F,M,v);return}else M.isExternalTexture&&(F.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+v)}function Oe(M,v){const F=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&F.__version!==M.version){_t(F,M,v);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+v)}function Ee(M,v){const F=i.get(M);if(M.version>0&&F.__version!==M.version){Zt(F,M,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+v)}const $e={[za]:t.REPEAT,[si]:t.CLAMP_TO_EDGE,[sc]:t.MIRRORED_REPEAT},Mt={[Wt]:t.NEAREST,[jp]:t.NEAREST_MIPMAP_NEAREST,[Zs]:t.NEAREST_MIPMAP_LINEAR,[fn]:t.LINEAR,[mo]:t.LINEAR_MIPMAP_NEAREST,[bi]:t.LINEAR_MIPMAP_LINEAR},ze={[nm]:t.NEVER,[yf]:t.ALWAYS,[im]:t.LESS,[Sf]:t.LEQUAL,[rm]:t.EQUAL,[Mf]:t.GEQUAL,[sm]:t.GREATER,[am]:t.NOTEQUAL};function ct(M,v){if(v.type===Ln&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===fn||v.magFilter===mo||v.magFilter===Zs||v.magFilter===bi||v.minFilter===fn||v.minFilter===mo||v.minFilter===Zs||v.minFilter===bi)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,$e[v.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,$e[v.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,$e[v.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,Mt[v.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,Mt[v.minFilter]),v.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ze[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Wt||v.minFilter!==Zs&&v.minFilter!==bi||v.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function ut(M,v){let F=!1;M.__webglInit===void 0&&(M.__webglInit=!0,v.addEventListener("dispose",N),O(v));const ie=v.source;let Y=h.get(ie);Y===void 0&&(Y={},h.set(ie,Y));const ce=Q(v);if(ce!==M.__cacheKey){Y[ce]===void 0&&(Y[ce]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,F=!0),Y[ce].usedTimes++;const pe=Y[M.__cacheKey];pe!==void 0&&(Y[M.__cacheKey].usedTimes--,pe.usedTimes===0&&H(v)),M.__cacheKey=ce,M.__webglTexture=Y[ce].texture}return F}function Je(M,v,F){return Math.floor(Math.floor(M/F)/v)}function Ut(M,v,F,ie){const ce=M.updateRanges;if(ce.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,F,ie,v.data);else{ce.sort((C,V)=>C.start-V.start);let pe=0;for(let C=1;C<ce.length;C++){const V=ce[pe],k=ce[C],ue=V.start+V.count,fe=Je(k.start,v.width,4),_e=Je(V.start,v.width,4);k.start<=ue+1&&fe===_e&&Je(k.start+k.count-1,v.width,4)===fe?V.count=Math.max(V.count,k.start+k.count-V.start):(++pe,ce[pe]=k)}ce.length=pe+1;const J=n.getParameter(t.UNPACK_ROW_LENGTH),q=n.getParameter(t.UNPACK_SKIP_PIXELS),me=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let C=0,V=ce.length;C<V;C++){const k=ce[C],ue=Math.floor(k.start/4),fe=Math.ceil(k.count/4),_e=ue%v.width,De=Math.floor(ue/v.width),Be=fe,he=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,_e),n.pixelStorei(t.UNPACK_SKIP_ROWS,De),n.texSubImage2D(t.TEXTURE_2D,0,_e,De,Be,he,F,ie,v.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,J),n.pixelStorei(t.UNPACK_SKIP_PIXELS,q),n.pixelStorei(t.UNPACK_SKIP_ROWS,me)}}function _t(M,v,F){let ie=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ie=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ie=t.TEXTURE_3D);const Y=ut(M,v),ce=v.source;n.bindTexture(ie,M.__webglTexture,t.TEXTURE0+F);const pe=i.get(ce);if(ce.version!==pe.__version||Y===!0){if(n.activeTexture(t.TEXTURE0+F),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const he=nt.getPrimaries(nt.workingColorSpace),Ue=v.colorSpace===yi?null:nt.getPrimaries(v.colorSpace),Ze=v.colorSpace===yi||he===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let q=x(v.image,!1,r.maxTextureSize);q=W(v,q);const me=s.convert(v.format,v.colorSpace),C=s.convert(v.type);let V=A(v.internalFormat,me,C,v.normalized,v.colorSpace,v.isVideoTexture);ct(ie,v);let k;const ue=v.mipmaps,fe=v.isVideoTexture!==!0,_e=pe.__version===void 0||Y===!0,De=ce.dataReady,Be=b(v,q);if(v.isDepthTexture)V=_(v.format===Ei,v.type),_e&&(fe?n.texStorage2D(t.TEXTURE_2D,1,V,q.width,q.height):n.texImage2D(t.TEXTURE_2D,0,V,q.width,q.height,0,me,C,null));else if(v.isDataTexture)if(ue.length>0){fe&&_e&&n.texStorage2D(t.TEXTURE_2D,Be,V,ue[0].width,ue[0].height);for(let he=0,Ue=ue.length;he<Ue;he++)k=ue[he],fe?De&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,k.width,k.height,me,C,k.data):n.texImage2D(t.TEXTURE_2D,he,V,k.width,k.height,0,me,C,k.data);v.generateMipmaps=!1}else fe?(_e&&n.texStorage2D(t.TEXTURE_2D,Be,V,q.width,q.height),De&&Ut(v,q,me,C)):n.texImage2D(t.TEXTURE_2D,0,V,q.width,q.height,0,me,C,q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){fe&&_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,V,ue[0].width,ue[0].height,q.depth);for(let he=0,Ue=ue.length;he<Ue;he++)if(k=ue[he],v.format!==Gn)if(me!==null)if(fe){if(De)if(v.layerUpdates.size>0){const Ze=Ou(k.width,k.height,v.format,v.type);for(const be of v.layerUpdates){const it=k.data.subarray(be*Ze/k.data.BYTES_PER_ELEMENT,(be+1)*Ze/k.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,be,k.width,k.height,1,me,it)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,k.width,k.height,q.depth,me,k.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,he,V,k.width,k.height,q.depth,0,k.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?De&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,he,0,0,0,k.width,k.height,q.depth,me,C,k.data):n.texImage3D(t.TEXTURE_2D_ARRAY,he,V,k.width,k.height,q.depth,0,me,C,k.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{fe&&_e&&n.texStorage2D(t.TEXTURE_2D,Be,V,ue[0].width,ue[0].height);for(let he=0,Ue=ue.length;he<Ue;he++)k=ue[he],v.format!==Gn?me!==null?fe?De&&n.compressedTexSubImage2D(t.TEXTURE_2D,he,0,0,k.width,k.height,me,k.data):n.compressedTexImage2D(t.TEXTURE_2D,he,V,k.width,k.height,0,k.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?De&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,k.width,k.height,me,C,k.data):n.texImage2D(t.TEXTURE_2D,he,V,k.width,k.height,0,me,C,k.data)}else if(v.isDataArrayTexture)if(fe){if(_e&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Be,V,q.width,q.height,q.depth),De)if(v.layerUpdates.size>0){const he=Ou(q.width,q.height,v.format,v.type);for(const Ue of v.layerUpdates){const Ze=q.data.subarray(Ue*he/q.data.BYTES_PER_ELEMENT,(Ue+1)*he/q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ue,q.width,q.height,1,me,C,Ze)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,me,C,q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,V,q.width,q.height,q.depth,0,me,C,q.data);else if(v.isData3DTexture)fe?(_e&&n.texStorage3D(t.TEXTURE_3D,Be,V,q.width,q.height,q.depth),De&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,me,C,q.data)):n.texImage3D(t.TEXTURE_3D,0,V,q.width,q.height,q.depth,0,me,C,q.data);else if(v.isFramebufferTexture){if(_e)if(fe)n.texStorage2D(t.TEXTURE_2D,Be,V,q.width,q.height);else{let he=q.width,Ue=q.height;for(let Ze=0;Ze<Be;Ze++)n.texImage2D(t.TEXTURE_2D,Ze,V,he,Ue,0,me,C,null),he>>=1,Ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const he=t.canvas;if(he.hasAttribute("layoutsubtree")||he.setAttribute("layoutsubtree","true"),q.parentNode!==he){he.appendChild(q),d.add(v),he.onpaint=Ue=>{const Ze=Ue.changedElements;for(const be of d)Ze.includes(be.image)&&(be.needsUpdate=!0)},he.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,q);else{const Ze=t.RGBA,be=t.RGBA,it=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ze,be,it,q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ue.length>0){if(fe&&_e){const he=se(ue[0]);n.texStorage2D(t.TEXTURE_2D,Be,V,he.width,he.height)}for(let he=0,Ue=ue.length;he<Ue;he++)k=ue[he],fe?De&&n.texSubImage2D(t.TEXTURE_2D,he,0,0,me,C,k):n.texImage2D(t.TEXTURE_2D,he,V,me,C,k);v.generateMipmaps=!1}else if(fe){if(_e){const he=se(q);n.texStorage2D(t.TEXTURE_2D,Be,V,he.width,he.height)}De&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,me,C,q)}else n.texImage2D(t.TEXTURE_2D,0,V,me,C,q);T(v)&&v.mipmapsAutoUpdate===!0&&S(ie),pe.__version=ce.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function Zt(M,v,F){if(v.image.length!==6)return;const ie=ut(M,v),Y=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+F);const ce=i.get(Y);if(Y.version!==ce.__version||ie===!0){n.activeTexture(t.TEXTURE0+F);const pe=nt.getPrimaries(nt.workingColorSpace),J=v.colorSpace===yi?null:nt.getPrimaries(v.colorSpace),q=v.colorSpace===yi||pe===J?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);const me=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,V=[];for(let be=0;be<6;be++)!me&&!C?V[be]=x(v.image[be],!0,r.maxCubemapSize):V[be]=C?v.image[be].image:v.image[be],V[be]=W(v,V[be]);const k=V[0],ue=s.convert(v.format,v.colorSpace),fe=s.convert(v.type);let _e=A(v.internalFormat,ue,fe,v.normalized,v.colorSpace);const De=v.isVideoTexture!==!0,Be=ce.__version===void 0||ie===!0,he=Y.dataReady;let Ue=b(v,k);ct(t.TEXTURE_CUBE_MAP,v);let Ze;if(v.isDepthTexture){if(_e=_(v.format===Ei,v.type),Be)if(De)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,_e,k.width,k.height);else for(let be=0;be<6;be++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,_e,k.width,k.height,0,ue,fe,null)}else if(me){De&&Be&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,_e,k.width,k.height);for(let be=0;be<6;be++){Ze=V[be].mipmaps;for(let it=0;it<Ze.length;it++){const yt=Ze[it];v.format!==Gn?ue!==null?De?he&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it,0,0,yt.width,yt.height,ue,yt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it,_e,yt.width,yt.height,0,yt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it,0,0,yt.width,yt.height,ue,fe,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it,_e,yt.width,yt.height,0,ue,fe,yt.data)}}}else{if(Ze=v.mipmaps,De&&Be){Ze.length>0&&Ue++;const be=se(V[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,_e,be.width,be.height)}for(let be=0;be<6;be++)if(C){De?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,V[be].width,V[be].height,ue,fe,V[be].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,_e,V[be].width,V[be].height,0,ue,fe,V[be].data);for(let it=0;it<Ze.length;it++){const Tn=Ze[it].image[be].image;De?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it+1,0,0,Tn.width,Tn.height,ue,fe,Tn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it+1,_e,Tn.width,Tn.height,0,ue,fe,Tn.data)}}else{De?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ue,fe,V[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,_e,ue,fe,V[be]);for(let it=0;it<Ze.length;it++){const yt=Ze[it];De?he&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it+1,0,0,ue,fe,yt.image[be]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+be,it+1,_e,ue,fe,yt.image[be])}}}T(v)&&v.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),ce.__version=Y.version,v.onUpdate&&v.onUpdate(v)}M.__version=v.version}function pt(M,v,F,ie,Y,ce){const pe=s.convert(F.format,F.colorSpace),J=s.convert(F.type),q=A(F.internalFormat,pe,J,F.normalized,F.colorSpace),me=i.get(v),C=i.get(F);if(C.__renderTarget=v,!me.__hasExternalTextures){const V=Math.max(1,v.width>>ce),k=Math.max(1,v.height>>ce);Y===t.TEXTURE_3D||Y===t.TEXTURE_2D_ARRAY?n.texImage3D(Y,ce,q,V,k,v.depth,0,pe,J,null):n.texImage2D(Y,ce,q,V,k,0,pe,J,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),ee(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,Y,C.__webglTexture,0,oe(v)):(Y===t.TEXTURE_2D||Y>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Y<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ie,Y,C.__webglTexture,ce),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Sn(M,v,F){if(t.bindRenderbuffer(t.RENDERBUFFER,M),v.depthBuffer){const ie=v.depthTexture,Y=ie&&ie.isDepthTexture?ie.type:null,ce=_(v.stencilBuffer,Y),pe=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;ee(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(v),ce,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(v),ce,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,ce,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,pe,t.RENDERBUFFER,M)}else{const ie=v.textures;for(let Y=0;Y<ie.length;Y++){const ce=ie[Y],pe=s.convert(ce.format,ce.colorSpace),J=s.convert(ce.type),q=A(ce.internalFormat,pe,J,ce.normalized,ce.colorSpace);ee(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,oe(v),q,v.width,v.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,oe(v),q,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,q,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function At(M,v,F){const ie=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const Y=i.get(v.depthTexture);Y.__renderTarget=v;const ce=ie?v.depthTexture.image[0]:v.depthTexture.image;(!Y.__webglTexture||ce.width!==v.width||ce.height!==v.height)&&(ce.width=v.width,ce.height=v.height,v.depthTexture.needsUpdate=!0),ie?Ee(v.depthTexture,0):ve(v.depthTexture,0);const pe=Y.__webglTexture,J=oe(v),q=ie?t.TEXTURE_CUBE_MAP_POSITIVE_X+F:t.TEXTURE_2D,me=v.depthTexture.format===Ei?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ti)ee(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,q,pe,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,me,q,pe,0);else if(v.depthTexture.format===Ei)ee(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,me,q,pe,0,J):t.framebufferTexture2D(t.FRAMEBUFFER,me,q,pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function cn(M){const v=i.get(M),F=M.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==M.depthTexture){const ie=M.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ie){const Y=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ie.removeEventListener("dispose",Y)};ie.addEventListener("dispose",Y),v.__depthDisposeCallback=Y}v.__boundDepthTexture=ie}if(M.depthTexture&&!v.__autoAllocateDepthBuffer)if(F)for(let ie=0;ie<6;ie++)At(v.__webglFramebuffer[ie],M,ie);else M.texture.mipmaps.length>0?At(v.__webglFramebuffer[0],M,0):At(v.__webglFramebuffer,M,0);else if(F){v.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[ie]),v.__webglDepthbuffer[ie]===void 0)v.__webglDepthbuffer[ie]=t.createRenderbuffer(),Sn(v.__webglDepthbuffer[ie],M,!1);else{const Y=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer[ie];t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,ce)}}else if(M.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),Sn(v.__webglDepthbuffer,M,!1);else{const Y=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ce),t.framebufferRenderbuffer(t.FRAMEBUFFER,Y,t.RENDERBUFFER,ce)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ln(M,v,F){const ie=i.get(M);v!==void 0&&pt(ie.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&cn(M)}function U(M){const v=M.texture,F=i.get(M),ie=i.get(v);M.addEventListener("dispose",z),O(M);const Y=M.textures,ce=M.isWebGLCubeRenderTarget===!0,pe=Y.length>1;if(pe||(ie.__webglTexture===void 0&&(ie.__webglTexture=t.createTexture()),ie.__version=v.version,a.memory.textures++),ce){F.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps.length>0){F.__webglFramebuffer[J]=[];for(let q=0;q<v.mipmaps.length;q++)F.__webglFramebuffer[J][q]=t.createFramebuffer()}else F.__webglFramebuffer[J]=t.createFramebuffer()}else{if(v.mipmaps.length>0){F.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)F.__webglFramebuffer[J]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(pe)for(let J=0,q=Y.length;J<q;J++){const me=i.get(Y[J]);me.__webglTexture===void 0&&(me.__webglTexture=t.createTexture(),a.memory.textures++)}if(M.samples>0&&ee(M)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let J=0;J<Y.length;J++){const q=Y[J];F.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[J]);const me=s.convert(q.format,q.colorSpace),C=s.convert(q.type),V=A(q.internalFormat,me,C,q.normalized,q.colorSpace,M.isXRRenderTarget===!0),k=oe(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,k,V,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,F.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),Sn(F.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ce){n.bindTexture(t.TEXTURE_CUBE_MAP,ie.__webglTexture),ct(t.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)pt(F.__webglFramebuffer[J][q],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,q);else pt(F.__webglFramebuffer[J],M,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);T(v)?S(t.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}else if(pe){for(let J=0,q=Y.length;J<q;J++){const me=Y[J],C=i.get(me);let V=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(V=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(V,C.__webglTexture),ct(V,me),pt(F.__webglFramebuffer,M,me,t.COLOR_ATTACHMENT0+J,V,0),T(me)&&S(V)}n.unbindTexture()}else{let J=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(J=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,ie.__webglTexture),ct(J,v),v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)pt(F.__webglFramebuffer[q],M,v,t.COLOR_ATTACHMENT0,J,q);else pt(F.__webglFramebuffer,M,v,t.COLOR_ATTACHMENT0,J,0);T(v)?S(J):v.mipmaps.length>0&&t.texParameteri(J,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}M.depthBuffer&&cn(M)}function w(M){const v=M.textures;for(let F=0,ie=v.length;F<ie;F++){const Y=v[F];if(T(Y)&&Y.mipmapsAutoUpdate===!0){const ce=R(M),pe=i.get(Y).__webglTexture;n.bindTexture(ce,pe),S(ce),n.unbindTexture()}}}const te=[];function ae(M){if(M.samples>0){if(ee(M)===!1){const v=M.textures,F=M.width,ie=M.height;let Y=t.COLOR_BUFFER_BIT;const ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=i.get(M),J=v.length>1;if(J)for(let me=0;me<v.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,pe.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglFramebuffer);for(let me=0;me<v.length;me++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(Y|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(Y|=t.STENCIL_BUFFER_BIT)),J){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const C=i.get(v[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,F,ie,0,0,F,ie,Y,t.NEAREST),c===!0&&(te.length=0,te.push(t.COLOR_ATTACHMENT0+me),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&te.push(ce),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,te))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let me=0;me<v.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,pe.__webglColorRenderbuffer[me]);const C=i.get(v[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,pe.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&c){const v=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function oe(M){return Math.min(r.maxSamples,M.samples)}function ee(M){const v=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ye(M){const v=a.render.frame;u.get(M)!==v&&(u.set(M,v),M.update())}function W(M,v){const F=M.colorSpace,ie=M.format,Y=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||F!==Ga&&F!==yi&&(nt.getTransfer(F)===dt?(ie!==Gn||Y!==vn)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",F)),v}function se(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(l.width=M.naturalWidth||M.width,l.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(l.width=M.displayWidth,l.height=M.displayHeight):(l.width=M.width,l.height=M.height),l}this.allocateTextureUnit=He,this.resetTextureUnits=ne,this.getTextureUnits=le,this.setTextureUnits=Pe,this.setTexture2D=ve,this.setTexture2DArray=Ae,this.setTexture3D=Oe,this.setTextureCube=Ee,this.rebindTextures=ln,this.setupRenderTarget=U,this.updateRenderTargetMipmap=w,this.updateMultisampleRenderTarget=ae,this.setupDepthRenderbuffer=cn,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=ee,this.dispose=$}function Zx(t,e){function n(i,r=yi){let s;const a=nt.getTransfer(r);if(i===vn)return t.UNSIGNED_BYTE;if(i===ol)return t.UNSIGNED_SHORT_4_4_4_4;if(i===cl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===gf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===_f)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===pf)return t.BYTE;if(i===mf)return t.SHORT;if(i===Ps)return t.UNSIGNED_SHORT;if(i===al)return t.INT;if(i===Wn)return t.UNSIGNED_INT;if(i===Ln)return t.FLOAT;if(i===Xn)return t.HALF_FLOAT;if(i===vf)return t.ALPHA;if(i===xf)return t.RGB;if(i===Gn)return t.RGBA;if(i===Ti)return t.DEPTH_COMPONENT;if(i===Ei)return t.DEPTH_STENCIL;if(i===ll)return t.RED;if(i===ul)return t.RED_INTEGER;if(i===qi)return t.RG;if(i===dl)return t.RG_INTEGER;if(i===fl)return t.RGBA_INTEGER;if(i===Ta||i===Aa||i===Ra||i===Ca)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ta)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ta)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Aa)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ra)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ca)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ac||i===oc||i===cc||i===lc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ac)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===cc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uc||i===dc||i===fc||i===hc||i===pc||i===ka||i===mc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===uc||i===dc)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===fc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===hc)return s.COMPRESSED_R11_EAC;if(i===pc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===ka)return s.COMPRESSED_RG11_EAC;if(i===mc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===gc||i===_c||i===vc||i===xc||i===Sc||i===Mc||i===yc||i===bc||i===Ec||i===wc||i===Tc||i===Ac||i===Rc||i===Cc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===gc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_c)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===vc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===xc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Sc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ec)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===wc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Tc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ac)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Rc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Pc||i===Ic||i===Lc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Pc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dc||i===Nc||i===Ba||i===Uc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Dc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ba)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Uc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Lr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const qx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yx=`
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

}`;class Kx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Uf(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Yi({vertexShader:qx,fragmentShader:Yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new xt(new Wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jx extends ji{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,d=null,f=null,h=null,g=null;const y=typeof XRWebGLBinding<"u",p=new Kx,m={},x=n.getContextAttributes();let T=null,S=null;const R=[],A=[],_=new qe;let b=null,O=null;const P=new In;P.viewport=new wt;const N=new In;N.viewport=new wt;const z=[P,N],Z=new lg;let I=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ve=R[Q];return ve===void 0&&(ve=new yo,R[Q]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(Q){let ve=R[Q];return ve===void 0&&(ve=new yo,R[Q]=ve),ve.getGripSpace()},this.getHand=function(Q){let ve=R[Q];return ve===void 0&&(ve=new yo,R[Q]=ve),ve.getHandSpace()};function j(Q){const ve=A.indexOf(Q.inputSource);if(ve===-1)return;const Ae=R[ve];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,l||a),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function H(){r.removeEventListener("select",j),r.removeEventListener("selectstart",j),r.removeEventListener("selectend",j),r.removeEventListener("squeeze",j),r.removeEventListener("squeezestart",j),r.removeEventListener("squeezeend",j),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",de);for(let Q=0;Q<R.length;Q++){const ve=A[Q];ve!==null&&(A[Q]=null,R[Q].disconnect(ve))}I=null,$=null,p.reset();for(const Q in m)delete m[Q];if(e.setRenderTarget(T),h=null,f=null,d=null,r=null,S=null,He.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),O!==null){const Q=O.camera;Q.fov=O.fov,Q.zoom=O.zoom,Q.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){s=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,n)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(Q){if(r=Q,r!==null){if(T=e.getRenderTarget(),r.addEventListener("select",j),r.addEventListener("selectstart",j),r.addEventListener("selectend",j),r.addEventListener("squeeze",j),r.addEventListener("squeezestart",j),r.addEventListener("squeezeend",j),r.addEventListener("end",H),r.addEventListener("inputsourceschange",de),x.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ae=null,Oe=null,Ee=null;x.depth&&(Ee=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Ae=x.stencil?Ei:Ti,Oe=x.stencil?Lr:Wn);const $e={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer($e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Vn(f.textureWidth,f.textureHeight,{format:Gn,type:vn,depthTexture:new Dr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Ae),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Ae={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Ae),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Vn(h.framebufferWidth,h.framebufferHeight,{format:Gn,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),He.setContext(r),He.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function de(Q){for(let ve=0;ve<Q.removed.length;ve++){const Ae=Q.removed[ve],Oe=A.indexOf(Ae);Oe>=0&&(A[Oe]=null,R[Oe].disconnect(Ae))}for(let ve=0;ve<Q.added.length;ve++){const Ae=Q.added[ve];let Oe=A.indexOf(Ae);if(Oe===-1){for(let $e=0;$e<R.length;$e++)if($e>=A.length){A.push(Ae),Oe=$e;break}else if(A[$e]===null){A[$e]=Ae,Oe=$e;break}if(Oe===-1)break}const Ee=R[Oe];Ee&&Ee.connect(Ae)}}function K(Q,ve){ve===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ve.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(r===null)return;let ve=Q.near,Ae=Q.far;p.texture!==null&&(p.depthNear>0&&(ve=p.depthNear),p.depthFar>0&&(Ae=p.depthFar)),Z.near=N.near=P.near=ve,Z.far=N.far=P.far=Ae,(I!==Z.near||$!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),I=Z.near,$=Z.far),Z.layers.mask=Q.layers.mask|6,P.layers.mask=Z.layers.mask&-5,N.layers.mask=Z.layers.mask&-3;const Oe=Q.parent,Ee=Z.cameras;K(Z,Oe);for(let $e=0;$e<Ee.length;$e++)K(Ee[$e],Oe);Z.projectionMatrix.copy(P.projectionMatrix),Z.projectionMatrixInverse.copy(P.projectionMatrixInverse),O===null&&Q.isPerspectiveCamera&&(O={camera:Q,fov:Q.fov,zoom:Q.zoom}),ne(Q,Z,Oe)};function ne(Q,ve,Ae){Ae===null?Q.matrix.copy(ve.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ve.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ve.projectionMatrix),Q.projectionMatrixInverse.copy(ve.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Ls*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(f===null&&h===null))return c},this.setFoveation=function(Q){c=Q,f!==null&&(f.fixedFoveation=Q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=Q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Z)},this.getCameraTexture=function(Q){return m[Q]};let le=null;function Pe(Q,ve){if(u=ve.getViewerPose(l||a),g=ve,u!==null){const Ae=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Oe=!1;Ae.length!==Z.cameras.length&&(Z.cameras.length=0,Oe=!0);for(let ze=0;ze<Ae.length;ze++){const ct=Ae[ze];let ut=null;if(h!==null)ut=h.getViewport(ct);else{const Ut=d.getViewSubImage(f,ct);ut=Ut.viewport,ze===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(S))}let Je=z[ze];Je===void 0&&(Je=new In,Je.layers.enable(ze),Je.viewport=new wt,z[ze]=Je),Je.matrix.fromArray(ct.transform.matrix),Je.matrix.decompose(Je.position,Je.quaternion,Je.scale),Je.projectionMatrix.fromArray(ct.projectionMatrix),Je.projectionMatrixInverse.copy(Je.projectionMatrix).invert(),Je.viewport.set(ut.x,ut.y,ut.width,ut.height),ze===0&&(Z.matrix.copy(Je.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Oe===!0&&Z.cameras.push(Je)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=i.getBinding();const ze=d.getDepthInformation(Ae[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(Ee&&Ee.includes("camera-access")&&y){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<Ae.length;ze++){const ct=Ae[ze].camera;if(ct){let ut=m[ct];ut||(ut=new Uf,m[ct]=ut);const Je=d.getCameraImage(ct);ut.sourceTexture=Je}}}}for(let Ae=0;Ae<R.length;Ae++){const Oe=A[Ae],Ee=R[Ae];Oe!==null&&Ee!==void 0&&Ee.update(Oe,ve,l||a)}le&&le(Q,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}const He=new Bf;He.setAnimationLoop(Pe),this.setAnimationLoop=function(Q){le=Q},this.dispose=function(){}}}const jx=new gt,Kf=new Ve;Kf.set(-1,0,0,0,1,0,0,0,1);function Qx(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Of(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,x,T,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),d(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,S)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),y(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,x,T):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===on&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===on&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const x=e.get(m),T=x.envMap,S=x.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Kf),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,x,T){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*x,p.scale.value=T*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,x){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,n(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===on&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function y(p,m){const x=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function eS(t,e,n,i){let r={},s={};function a(x,T){const S=T.program;i.uniformBlockBinding(x,S,r[x.id])}function o(x,T){let S=r[x.id];S===void 0&&(g(x),S=c(x),r[x.id]=S,x.addEventListener("dispose",p));const R=T.program;i.updateUBOMapping(x,R);const A=e.render.frame;s[x.id]!==A&&(l(x),s[x.id]=A)}function c(x){const T=t.createBuffer(),S=x.__size,R=x.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,S,R),t.bindBuffer(t.UNIFORM_BUFFER,null),T}function l(x){const T=r[x.id],S=x.uniforms,R=x.__cache;t.bindBuffer(t.UNIFORM_BUFFER,T);for(let A=0,_=S.length;A<_;A++){const b=S[A];if(Array.isArray(b))for(let O=0,P=b.length;O<P;O++)u(b[O],A,O,R);else u(b,A,0,R)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(x,T,S,R){if(f(x,T,S,R)===!0){const A=x.__offset,_=x.value;if(Array.isArray(_)){let b=0;for(let O=0;O<_.length;O++){const P=_[O],N=y(P,!0);d(P,x.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,x.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,x.__data)}}function d(x,T,S){typeof x=="number"||typeof x=="boolean"?T[S]=x:x.isMatrix3?(T[S]=x.elements[0],T[S+1]=x.elements[1],T[S+2]=x.elements[2],T[S+3]=0,T[S+4]=x.elements[3],T[S+5]=x.elements[4],T[S+6]=x.elements[5],T[S+7]=0,T[S+8]=x.elements[6],T[S+9]=x.elements[7],T[S+10]=x.elements[8],T[S+11]=0):ArrayBuffer.isView(x)?T.set(x.subarray(0,T.length-S),S):x.toArray(T,S)}function f(x,T,S,R){const A=x.value,_=T+"_"+S;if(Array.isArray(A)){R[_]===void 0&&(R[_]=[]);const b=R[_];let O=!1;for(let P=0;P<A.length;P++)h(A[P],b,P)===!0&&(O=!0);return O}return h(A,R,_)}function h(x,T,S){if(T[S]===void 0)return typeof x=="number"||typeof x=="boolean"?T[S]=x:ArrayBuffer.isView(x)?T[S]=x.slice():T[S]=x.clone(),!0;{const R=T[S];if(typeof x=="number"||typeof x=="boolean"){if(R!==x)return T[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(R.equals(x)===!1)return R.copy(x),!0}}return!1}function g(x){const T=x.uniforms;let S=0;const R=16;for(let _=0,b=T.length;_<b;_++){const O=Array.isArray(T[_])?T[_]:[T[_]];for(let P=0,N=O.length;P<N;P++){const z=O[P],Z=Array.isArray(z.value)?z.value:[z.value],I=Array.isArray(T[_])||Array.isArray(z.value);let $=S;for(let H=0,de=Z.length;H<de;H++){const K=Z[H],ne=y(K,I),le=S%R,Pe=le%ne.boundary,He=le+Pe;S+=Pe,He!==0&&R-He<ne.storage&&(S+=R-He),H===0&&($=S),S+=ne.storage}const j=z.type==="int"?Int32Array:z.type==="uint"?Uint32Array:Float32Array;z.__data=new j((S-$)/Float32Array.BYTES_PER_ELEMENT),z.__offset=$}}const A=S%R;return A>0&&(S+=R-A),x.__size=S,x.__cache={},this}function y(x,T){const S={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(S.boundary=4,S.storage=4):x.isVector2?(S.boundary=8,S.storage=8):x.isVector3||x.isColor?(S.boundary=16,S.storage=12):x.isVector4?(S.boundary=16,S.storage=16):x.isMatrix3?(S.boundary=16,S.storage=48):x.isMatrix4?(S.boundary=16,S.storage=64):x.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(S.boundary=16,S.storage=x.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",x),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(x){const T=x.target;T.removeEventListener("dispose",p),t.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const x in r)t.deleteBuffer(r[x]);r={},s={}}return{bind:a,update:o,dispose:m}}const tS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zn=null;function nS(){return zn===null&&(zn=new Lf(tS,16,16,qi,Xn),zn.name="DFG_LUT",zn.minFilter=fn,zn.magFilter=fn,zn.wrapS=si,zn.wrapT=si,zn.generateMipmaps=!1,zn.needsUpdate=!0),zn}class iS{constructor(e={}){const{canvas:n=cm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1,outputBufferType:h=vn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const y=h,p=new Set([fl,dl,ul]),m=new Set([vn,Wn,Ps,Lr,ol,cl]),x=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let R=null,A=null;const _=[],b=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=oi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let N=!1,z=null,Z=null,I=null,$=null;this._outputColorSpace=Ot;let j=0,H=0,de=null,K=-1,ne=null;const le=new wt,Pe=new wt;let He=null;const Q=new Ke(0);let ve=0,Ae=n.width,Oe=n.height,Ee=1,$e=null,Mt=null;const ze=new wt(0,0,Ae,Oe),ct=new wt(0,0,Ae,Oe);let ut=!1;const Je=new Ds,Ut=new vl;let _t=!1,Zt=!1;const pt=new gt,Sn=new D,At=new wt,cn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ln=!1;function U(){return de===null?Ee:1}let w=i;function te(E,L){return n.getContext(E,L)}let ae,oe,ee,ye,W,se,M,v,F,ie,Y,ce,pe,J,q,me,C,V,k,ue,fe,_e,De;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${rl}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",Ze,!1),n.addEventListener("webglcontextcreationerror",be,!1),w===null){const L="webgl2";if(w=te(L,E),w===null)throw te(L)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Be()}catch(E){throw n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",be,!1),ot("WebGLRenderer: "+E.message),E}function Be(){ae=new av(w),ae.init(),fe=new Zx(w,ae),oe=new Y_(w,ae,e,fe),ee=new Wx(w,ae),oe.reversedDepthBuffer&&f&&ee.buffers.depth.setReversed(!0),Z=w.createFramebuffer(),I=w.createFramebuffer(),$=w.createFramebuffer(),ye=new lv(w),W=new Ix,se=new Xx(w,ae,ee,W,oe,fe,ye),M=new sv(P),v=new dg(w),_e=new Z_(w,v),F=new ov(w,v,ye,_e),ie=new dv(w,F,v,_e,ye),V=new uv(w,oe,se),q=new K_(W),Y=new Px(P,M,ae,oe,_e,q),ce=new Qx(P,W),pe=new Dx,J=new kx(ae),C=new X_(P,M,ee,ie,g,c),me=new Vx(P,ie,oe),De=new eS(w,ye,oe,ee),k=new q_(w,ae,ye),ue=new cv(w,ae,ye),ye.programs=Y.programs,P.capabilities=oe,P.extensions=ae,P.properties=W,P.renderLists=pe,P.shadowMap=me,P.state=ee,P.info=ye}y!==vn&&(O=new hv(y,n.width,n.height,o,r,s));const he=new Jx(P,w);this.xr=he,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const E=ae.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ae.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(E){E!==void 0&&(Ee=E,this.setSize(Ae,Oe,!1))},this.getSize=function(E){return E.set(Ae,Oe)},this.setSize=function(E,L,X=!0){if(he.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Ae=E,Oe=L,n.width=Math.floor(E*Ee),n.height=Math.floor(L*Ee),X===!0&&(n.style.width=E+"px",n.style.height=L+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,E,L)},this.getDrawingBufferSize=function(E){return E.set(Ae*Ee,Oe*Ee).floor()},this.setDrawingBufferSize=function(E,L,X){Ae=E,Oe=L,Ee=X,n.width=Math.floor(E*X),n.height=Math.floor(L*X),this.setViewport(0,0,E,L)},this.setEffects=function(E){if(y===vn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let L=0;L<E.length;L++)if(E[L].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(le)},this.getViewport=function(E){return E.copy(ze)},this.setViewport=function(E,L,X,B){E.isVector4?ze.set(E.x,E.y,E.z,E.w):ze.set(E,L,X,B),ee.viewport(le.copy(ze).multiplyScalar(U()).round())},this.getScissor=function(E){return E.copy(ct)},this.setScissor=function(E,L,X,B){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,L,X,B),ee.scissor(Pe.copy(ct).multiplyScalar(U()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(E){ee.setScissorTest(ut=E)},this.setOpaqueSort=function(E){$e=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(E=!0,L=!0,X=!0){let B=0;if(E){let G=!1;if(de!==null){const Se=de.texture.format;G=p.has(Se)}if(G){const Se=de.texture.type,Ce=m.has(Se),xe=C.getClearColor(),Te=C.getClearAlpha(),Ne=xe.r,We=xe.g,et=xe.b;Ce?(x[0]=Ne,x[1]=We,x[2]=et,x[3]=Te,w.clearBufferuiv(w.COLOR,0,x)):(T[0]=Ne,T[1]=We,T[2]=et,T[3]=Te,w.clearBufferiv(w.COLOR,0,T))}else B|=w.COLOR_BUFFER_BIT}L&&(B|=w.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(B|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B!==0&&w.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",be,!1),C.dispose(),pe.dispose(),J.dispose(),se.dispose(),W.dispose(),M.dispose(),ie.dispose(),F.dispose(),_e.dispose(),De.dispose(),Y.dispose(),he.dispose(),he.removeEventListener("sessionstart",qn),he.removeEventListener("sessionend",Yr),On.stop()};function Ue(E){E.preventDefault(),Va("WebGLRenderer: Context Lost."),N=!0}function Ze(){Va("WebGLRenderer: Context Restored."),N=!1;const E=ye.autoReset,L=me.enabled,X=me.autoUpdate,B=me.needsUpdate,G=me.type;Be(),ye.autoReset=E,me.enabled=L,me.autoUpdate=X,me.needsUpdate=B,me.type=G}function be(E){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const L=E.target;L.removeEventListener("dispose",it),yt(L)}function yt(E){Tn(E),W.remove(E)}function Tn(E){const L=W.get(E).programs;L!==void 0&&(L.forEach(function(X){Y.releaseProgram(X)}),E.isShaderMaterial&&Y.releaseShaderCache(E))}this.renderBufferDirect=function(E,L,X,B,G,Se){L===null&&(L=cn);const Ce=G.isMesh&&G.matrixWorld.determinantAffine()<0,xe=Tp(E,L,X,B,G);ee.setMaterial(B,Ce);let Te=X.index,Ne=1;if(B.wireframe===!0){if(Te=F.getWireframeAttribute(X),Te===void 0)return;Ne=2}const We=X.drawRange,et=X.attributes.position;let Ie=We.start*Ne,tt=(We.start+We.count)*Ne;Se!==null&&(Ie=Math.max(Ie,Se.start*Ne),tt=Math.min(tt,(Se.start+Se.count)*Ne)),Te!==null?(Ie=Math.max(Ie,0),tt=Math.min(tt,Te.count)):et!=null&&(Ie=Math.max(Ie,0),tt=Math.min(tt,et.count));const Ct=tt-Ie;if(Ct<0||Ct===1/0)return;_e.setup(G,B,xe,X,Te);let vt,mt=k;if(Te!==null&&(vt=v.get(Te),mt=ue,mt.setIndex(vt)),G.isMesh)B.wireframe===!0?(ee.setLineWidth(B.wireframeLinewidth*U()),mt.setMode(w.LINES)):mt.setMode(w.TRIANGLES);else if(G.isLine){let qt=B.linewidth;qt===void 0&&(qt=1),ee.setLineWidth(qt*U()),G.isLineSegments?mt.setMode(w.LINES):G.isLineLoop?mt.setMode(w.LINE_LOOP):mt.setMode(w.LINE_STRIP)}else G.isPoints?mt.setMode(w.POINTS):G.isSprite&&mt.setMode(w.TRIANGLES);if(G.isBatchedMesh)if(ae.get("WEBGL_multi_draw"))mt.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qt=G._multiDrawStarts,Le=G._multiDrawCounts,en=G._multiDrawCount,lt=Te?v.get(Te).bytesPerElement:1,Ui=W.get(B).currentProgram.getUniforms();for(let Yt=0;Yt<en;Yt++)Ui.setValue(w,"_gl_DrawID",Yt),mt.render(qt[Yt]/lt,Le[Yt])}else if(G.isInstancedMesh)mt.renderInstances(Ie,Ct,G.count);else if(X.isInstancedBufferGeometry){const qt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Le=Math.min(X.instanceCount,qt);mt.renderInstances(Ie,Ct,Le)}else mt.render(Ie,Ct)};function je(E,L,X,B){z!==null&&E.isNodeMaterial&&z.setObject(B,E),_t===!0&&q.setState(E,X,!1),E.transparent===!0&&E.side===bn&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,jr(E,L,B),E.side=Zi,E.needsUpdate=!0,jr(E,L,B),E.side=bn):jr(E,L,B)}this.compile=function(E,L,X=null){X===null&&(X=E),z!==null&&z.renderStart(E,L,X),A=J.get(X),A.init(L),b.push(A),X.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(L.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),z!==null&&z.updateLights(A.state.lightsArray),Zt=this.localClippingEnabled,_t=q.init(this.clippingPlanes,Zt),_t===!0&&q.setGlobalState(this.clippingPlanes,L),z!==null&&me.render(A.state.shadowsArray,X,L);const B=new Set;return E.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Se=G.material;if(Se)if(Array.isArray(Se))for(let Ce=0;Ce<Se.length;Ce++){const xe=Se[Ce];je(xe,X,L,G),B.add(xe)}else je(Se,X,L,G),B.add(Se)}),A=b.pop(),z!==null&&z.renderEnd(),B},this.compileAsync=function(E,L,X=null){const B=this.compile(E,L,X);return new Promise(G=>{function Se(){if(B.forEach(function(Ce){const Te=W.get(Ce).currentProgram;(Te===void 0||Te.isReady())&&B.delete(Ce)}),B.size===0){G(E);return}setTimeout(Se,10)}ae.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let pn=null;function qr(E){pn&&pn(E)}function qn(){On.stop()}function Yr(){On.start()}const On=new Bf;On.setAnimationLoop(qr),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(E){pn=E,he.setAnimationLoop(E),E===null?On.stop():On.start()},he.addEventListener("sessionstart",qn),he.addEventListener("sessionend",Yr),this.render=function(E,L){if(L!==void 0&&L.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;z!==null&&z.renderStart(E,L);const X=he.enabled===!0&&he.isPresenting===!0,B=O!==null&&(de===null||X)&&O.begin(P,de);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(L),L=he.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,L,de),A=J.get(E,b.length),A.init(L),A.state.textureUnits=se.getTextureUnits(),b.push(A),pt.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),L.isArrayCamera?Ut.setFromArrayCamera(L):Je.setFromProjectionMatrix(pt,Dn,L.reversedDepth),Zt=this.localClippingEnabled,_t=q.init(this.clippingPlanes,Zt),R=pe.get(E,_.length),R.init(),_.push(R),this.info.render.frame++,he.enabled===!0&&he.isPresenting===!0){const Ce=P.xr.getDepthSensingMesh();Ce!==null&&Kr(Ce,L,-1/0,P.sortObjects)}Kr(E,L,0,P.sortObjects),R.finish(),z!==null&&z.updateLights(A.state.lightsArray),P.sortObjects===!0&&R.sort($e,Mt),ln=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,ln&&C.addToRenderList(R,E),this.info.autoReset===!0&&this.info.reset(),_t===!0&&q.beginShadows();const G=A.state.shadowsArray;if(me.render(G,E,L),_t===!0&&q.endShadows(),(B&&O.hasRenderPass())===!1){const Ce=R.opaque,xe=R.transmissive;if(A.setupLights(),L.isArrayCamera){const Te=L.cameras;if(xe.length>0)for(let Ne=0,We=Te.length;Ne<We;Ne++){const et=Te[Ne];Ws(Ce,xe,E,et)}ln&&C.render(E);for(let Ne=0,We=Te.length;Ne<We;Ne++){const et=Te[Ne];Vs(R,E,et,et.viewport)}}else xe.length>0&&Ws(Ce,xe,E,L),ln&&C.render(E),Vs(R,E,L)}de!==null&&H===0&&(se.updateMultisampleRenderTarget(de),se.updateRenderTargetMipmap(de)),B&&O.end(P),E.isScene===!0&&E.onAfterRender(P,E,L),_e.resetDefaultState(),K=-1,ne=null,b.pop(),b.length>0?(A=b[b.length-1],se.setTextureUnits(A.state.textureUnits),_t===!0&&q.setGlobalState(P.clippingPlanes,A.state.camera)):A=null,_.pop(),_.length>0?R=_[_.length-1]:R=null,z!==null&&z.renderEnd()};function Kr(E,L,X,B){if(E.visible===!1)return;if(E.layers.test(L.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(L);else if(E.isLight)A.pushLight(E),E.castShadow&&A.pushShadow(E);else if(E.isSprite){const Ce=L.isArrayCamera?Ut:Je;if(!E.frustumCulled||E.intersectsFrustum(Ce)){B&&At.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pt);const xe=ie.update(E),Te=E.material;Te.visible&&R.push(E,xe,Te,X,At.z,null,L)}}else if(E.isMesh||E.isLine||E.isPoints){const Ce=L.isArrayCamera?Ut:Je;if(!E.frustumCulled||E.intersectsFrustum(Ce)){const xe=ie.update(E),Te=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),At.copy(E.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),At.copy(xe.boundingSphere.center)),At.applyMatrix4(E.matrixWorld).applyMatrix4(pt)),Array.isArray(Te)){const Ne=xe.groups;for(let We=0,et=Ne.length;We<et;We++){const Ie=Ne[We],tt=Te[Ie.materialIndex];tt&&tt.visible&&R.push(E,xe,tt,X,At.z,Ie,L)}}else Te.visible&&R.push(E,xe,Te,X,At.z,null,L)}}}const Se=E.children;for(let Ce=0,xe=Se.length;Ce<xe;Ce++)Kr(Se[Ce],L,X,B)}function Vs(E,L,X,B){const{opaque:G,transmissive:Se,transparent:Ce}=E;A.setupLightsView(X),_t===!0&&q.setGlobalState(P.clippingPlanes,X),B&&ee.viewport(le.copy(B)),G.length>0&&Di(G,L,X),Se.length>0&&Di(Se,L,X),Ce.length>0&&Di(Ce,L,X),ee.buffers.depth.setTest(!0),ee.buffers.depth.setMask(!0),ee.buffers.color.setMask(!0),ee.setPolygonOffset(!1)}function Ws(E,L,X,B){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[B.id]===void 0){const Ie=ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[B.id]=new Vn(1,1,{generateMipmaps:!0,type:Ie?Xn:vn,minFilter:bi,samples:Math.max(4,oe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const Se=A.state.transmissionRenderTarget[B.id],Ce=B.viewport||le;Se.setSize(Ce.z*P.transmissionResolutionScale,Ce.w*P.transmissionResolutionScale);const xe=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ne=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(Q),ve=P.getClearAlpha(),ve<1&&P.setClearColor(16777215,.5),P.clear(),ln&&C.render(X);const We=P.toneMapping;P.toneMapping=oi;const et=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),A.setupLightsView(B),_t===!0&&q.setGlobalState(P.clippingPlanes,B),Di(E,X,B),se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let tt=0,Ct=L.length;tt<Ct;tt++){const vt=L[tt],{object:mt,geometry:qt,material:Le,group:en}=vt;if(Le.side===bn&&mt.layers.test(B.layers)){const lt=Le.side;Le.side=on,Le.needsUpdate=!0,Ni(mt,X,B,qt,Le,en),Le.side=lt,Le.needsUpdate=!0,Ie=!0}}Ie===!0&&(se.updateMultisampleRenderTarget(Se),se.updateRenderTargetMipmap(Se))}P.setRenderTarget(xe,Te,Ne),P.setClearColor(Q,ve),et!==void 0&&(B.viewport=et),P.toneMapping=We}function Di(E,L,X){const B=L.isScene===!0?L.overrideMaterial:null;for(let G=0,Se=E.length;G<Se;G++){const Ce=E[G],{object:xe,geometry:Te,group:Ne}=Ce;let We=Ce.material;We.allowOverride===!0&&B!==null&&(We=B),xe.layers.test(X.layers)&&Ni(xe,L,X,Te,We,Ne)}}function Ni(E,L,X,B,G,Se){z!==null&&G.isNodeMaterial&&z.setObject(E,G),E.onBeforeRender(P,L,X,B,G,Se),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(P,L,X,B,E,Se),G.transparent===!0&&G.side===bn&&G.forceSinglePass===!1?(G.side=on,G.needsUpdate=!0,P.renderBufferDirect(X,L,B,G,E,Se),G.side=Zi,G.needsUpdate=!0,P.renderBufferDirect(X,L,B,G,E,Se),G.side=bn):P.renderBufferDirect(X,L,B,G,E,Se),E.onAfterRender(P,L,X,B,G,Se)}function Jr(E){let L=0;for(const X of E)X.texture!==null&&L++;return L}function jr(E,L,X){L.isScene!==!0&&(L=cn);const B=W.get(E),G=A.state.lights,Se=A.state.shadowsArray,Ce=G.state.version,xe=Y.getParameters(E,G.state,Se,L,X,A.state.lightProbeGridArray),Te=Y.getProgramCacheKey(xe);let Ne=B.programs;B.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?L.environment:null,B.fog=L.fog;const We=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;B.envMap=M.get(E.envMap||B.environment,We),B.envMapRotation=B.environment!==null&&E.envMap===null?L.environmentRotation:E.envMapRotation,Ne===void 0&&(E.addEventListener("dispose",it),Ne=new Map,B.programs=Ne,B.programVariants=new Map);let et=Ne.get(Te);if(et!==void 0){if(B.currentProgram===et&&B.lightsStateVersion===Ce)return Ql(E,xe),et}else xe.uniforms=Y.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,X,xe),E.onBeforeCompile(xe,P),et=Y.acquireProgram(xe,Te),Ne.set(Te,et),B.uniforms=xe.uniforms;const Ie=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=q.uniform),Ql(E,xe),B.needsLights=Rp(E),B.lightsStateVersion=Ce,B.needsLights&&(Ie.ambientLightColor.value=G.state.ambient,Ie.lightProbe.value=G.state.probe,Ie.sunLights.value=G.state.sun,Ie.sunLightShadows.value=G.state.sunShadow,Ie.directionalLights.value=G.state.directional,Ie.directionalLightShadows.value=G.state.directionalShadow,Ie.spotLights.value=G.state.spot,Ie.spotLightShadows.value=G.state.spotShadow,Ie.rectAreaLights.value=G.state.rectArea,Ie.ltc_1.value=G.state.rectAreaLTC1,Ie.ltc_2.value=G.state.rectAreaLTC2,Ie.pointLights.value=G.state.point,Ie.pointLightShadows.value=G.state.pointShadow,Ie.hemisphereLights.value=G.state.hemi,Ie.sunShadowMatrix.value=G.state.sunShadowMatrix,Ie.sunShadowCascade.value=G.state.sunShadowCascade,Ie.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ie.spotLightMatrix.value=G.state.spotLightMatrix,Ie.spotLightMap.value=G.state.spotLightMap,Ie.pointShadowMatrix.value=G.state.pointShadowMatrix),B.numLightProbeGrids=Jr(A.state.lightProbeGridArray),B.currentProgram=et,B.uniformsList=null,et}function wp(E,L,X,B,G){const Se=W.get(E),Ce=Se.currentProgram.id+","+B+","+G;let xe=Se.programVariants.get(Ce);return xe===void 0?(xe=jr(E,L,X),Se.programVariants.set(Ce,xe)):(Se.currentProgram=xe,Se.uniformsList=null,Se.outputColorSpace=B,Se.toneMapping=G),xe}function jl(E){if(E.uniformsList===null){const L=E.currentProgram.getUniforms();E.uniformsList=La.seqWithValue(L.seq,E.uniforms)}return E.uniformsList}function Ql(E,L){const X=W.get(E);X.outputColorSpace=L.outputColorSpace,X.batching=L.batching,X.batchingColor=L.batchingColor,X.instancing=L.instancing,X.instancingColor=L.instancingColor,X.instancingMorph=L.instancingMorph,X.skinning=L.skinning,X.morphTargets=L.morphTargets,X.morphNormals=L.morphNormals,X.morphColors=L.morphColors,X.morphTargetsCount=L.morphTargetsCount,X.numClippingPlanes=L.numClippingPlanes,X.numIntersection=L.numClipIntersection,X.vertexAlphas=L.vertexAlphas,X.vertexTangents=L.vertexTangents,X.toneMapping=L.toneMapping}function Tp(E,L,X,B,G){L.isScene!==!0&&(L=cn),se.resetTextureUnits();const Se=L.fog,Ce=B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial?L.environment:null,xe=de===null?P.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:nt.workingColorSpace,Te=B.isMeshStandardMaterial||B.isMeshLambertMaterial&&!B.envMap||B.isMeshPhongMaterial&&!B.envMap,Ne=M.get(B.envMap||Ce,Te),We=B.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,et=!!X.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Ie=!!X.morphAttributes.position,tt=!!X.morphAttributes.normal,Ct=!!X.morphAttributes.color;let vt=oi;B.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(vt=P.toneMapping);const mt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,qt=mt!==void 0?mt.length:0,Le=W.get(B),en=A.state.lights;if(_t===!0&&(Zt===!0||E!==ne)){const Et=E===ne&&B.id===K;q.setState(B,E,Et)}let lt=!1,Ui=!1;B.version===Le.__version?Le.needsLights&&Le.lightsStateVersion!==en.state.version||G.isBatchedMesh&&Le.batching===!1||!G.isBatchedMesh&&Le.batching===!0||G.isBatchedMesh&&Le.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Le.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Le.instancing===!1||!G.isInstancedMesh&&Le.instancing===!0||G.isSkinnedMesh&&Le.skinning===!1||!G.isSkinnedMesh&&Le.skinning===!0||G.isInstancedMesh&&Le.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Le.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Le.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Le.instancingMorph===!1&&G.morphTexture!==null||Le.envMap!==Ne||B.fog===!0&&Le.fog!==Se||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==q.numPlanes||Le.numIntersection!==q.numIntersection)||Le.vertexAlphas!==We||Le.vertexTangents!==et||Le.morphTargets!==Ie||Le.morphNormals!==tt||Le.morphColors!==Ct||Le.morphTargetsCount!==qt||Le.numLightProbeGrids!==Jr(A.state.lightProbeGridArray)?lt=!0:(Le.outputColorSpace!==xe||Le.toneMapping!==vt)&&(Ui=!0):(lt=!0,Le.__version=B.version);let Yt=Le.currentProgram;(lt===!0||Ui===!0)&&(Yt=Ui===!0?wp(B,L,G,xe,vt):jr(B,L,G),z&&B.isNodeMaterial&&z.onUpdateProgram(B,Yt,Le));let Xs=!1,di=!1,Oi=!1;const st=Yt.getUniforms(),Vt=Le.uniforms;if(ee.useProgram(Yt.program)&&(Xs=!0,di=!0,Oi=!0),B.id!==K&&(K=B.id,di=!0),Xs||ne!==E){ee.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),st.setValue(w,"projectionMatrix",E.projectionMatrix),st.setValue(w,"viewMatrix",E.matrixWorldInverse);const kt=st.map.cameraPosition;kt!==void 0&&kt.setValue(w,Sn.setFromMatrixPosition(E.matrixWorld)),oe.logarithmicDepthBuffer&&st.setValue(w,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&st.setValue(w,"isOrthographic",E.isOrthographicCamera===!0),ne!==E&&(ne=E,di=!0,Oi=!0)}if(Le.needsLights&&(en.state.sunShadowMap.length>0&&st.setValue(w,"sunShadowMap",en.state.sunShadowMap,se),en.state.directionalShadowMap.length>0&&st.setValue(w,"directionalShadowMap",en.state.directionalShadowMap,se),en.state.spotShadowMap.length>0&&st.setValue(w,"spotShadowMap",en.state.spotShadowMap,se),en.state.pointShadowMap.length>0&&st.setValue(w,"pointShadowMap",en.state.pointShadowMap,se)),G.isSkinnedMesh){st.setOptional(w,G,"bindMatrix"),st.setOptional(w,G,"bindMatrixInverse");const Et=G.skeleton;Et&&(Et.boneTexture===null&&Et.computeBoneTexture(),st.setValue(w,"boneTexture",Et.boneTexture,se))}G.isBatchedMesh&&(st.setOptional(w,G,"batchingTexture"),st.setValue(w,"batchingTexture",G._matricesTexture,se),st.setOptional(w,G,"batchingIdTexture"),st.setValue(w,"batchingIdTexture",G._indirectTexture,se),st.setOptional(w,G,"batchingColorTexture"),G._colorsTexture!==null&&st.setValue(w,"batchingColorTexture",G._colorsTexture,se));const An=X.morphAttributes;if((An.position!==void 0||An.normal!==void 0||An.color!==void 0)&&V.update(G,X,Yt),(di||Le.receiveShadow!==G.receiveShadow)&&(Le.receiveShadow=G.receiveShadow,st.setValue(w,"receiveShadow",G.receiveShadow)),(B.isMeshStandardMaterial||B.isMeshLambertMaterial||B.isMeshPhongMaterial)&&B.envMap===null&&L.environment!==null&&(Vt.envMapIntensity.value=L.environmentIntensity),Vt.dfgLUT!==void 0&&(Vt.dfgLUT.value=nS()),di){if(st.setValue(w,"toneMappingExposure",P.toneMappingExposure),Le.needsLights&&Ap(Vt,Oi),Se&&B.fog===!0&&ce.refreshFogUniforms(Vt,Se),ce.refreshMaterialUniforms(Vt,B,Ee,Oe,A.state.transmissionRenderTarget[E.id]),Le.needsLights&&Le.numLightProbeGrids>0){const Et=S;let kt=0;for(const Yn of A.state.lightProbeGridArray)Yn.texture!==null&&(Et.textures[kt]=Yn.texture,Et.min[kt]=Yn.boundingBox.min,Et.max[kt]=Yn.boundingBox.max,Et.resolution[kt]=Yn.resolution,kt++);for(const Yn in Et)Et[Yn].length=kt;Vt.probesSH.value=Et.textures,Vt.probesMin.value=Et.min,Vt.probesMax.value=Et.max,Vt.probesResolution.value=Et.resolution}La.upload(w,jl(Le),Vt,se)}if(B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(La.upload(w,jl(Le),Vt,se),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&st.setValue(w,"center",G.center),st.setValue(w,"modelViewMatrix",G.modelViewMatrix),st.setValue(w,"normalMatrix",G.normalMatrix),st.setValue(w,"modelMatrix",G.matrixWorld),B.uniformsGroups!==void 0){const Et=B.uniformsGroups;for(let kt=0,Yn=Et.length;kt<Yn;kt++){const tu=Et[kt];De.update(tu,Yt),De.bind(tu,Yt)}}return Yt}function Ap(E,L){E.ambientLightColor.needsUpdate=L,E.lightProbe.needsUpdate=L,E.sunLights.needsUpdate=L,E.sunLightShadows.needsUpdate=L,E.directionalLights.needsUpdate=L,E.directionalLightShadows.needsUpdate=L,E.pointLights.needsUpdate=L,E.pointLightShadows.needsUpdate=L,E.spotLights.needsUpdate=L,E.spotLightShadows.needsUpdate=L,E.rectAreaLights.needsUpdate=L,E.hemisphereLights.needsUpdate=L}function Rp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return de},this.setRenderTargetTextures=function(E,L,X){const B=W.get(E);B.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,B.__autoAllocateDepthBuffer===!1&&(B.__useRenderToTexture=!1),W.get(E.texture).__webglTexture=L,W.get(E.depthTexture).__webglTexture=B.__autoAllocateDepthBuffer?void 0:X,B.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,L){const X=W.get(E);X.__webglFramebuffer=L,X.__useDefaultFramebuffer=L===void 0},this.setRenderTarget=function(E,L=0,X=0){de=E,j=L,H=X;let B=null,G=!1,Se=!1;if(E){const xe=W.get(E);if(xe.__useDefaultFramebuffer!==void 0){ee.bindFramebuffer(w.FRAMEBUFFER,xe.__webglFramebuffer),le.copy(E.viewport),Pe.copy(E.scissor),He=E.scissorTest,ee.viewport(le),ee.scissor(Pe),ee.setScissorTest(He),K=-1;return}else if(xe.__webglFramebuffer===void 0)se.setupRenderTarget(E);else if(xe.__hasExternalTextures)se.rebindTextures(E,W.get(E.texture).__webglTexture,W.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const We=E.depthTexture;if(xe.__boundDepthTexture!==We){if(We!==null&&W.has(We)&&(E.width!==We.image.width||E.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Se=!0);const Ne=W.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ne[L])?B=Ne[L][X]:B=Ne[L],G=!0):E.samples>0&&se.useMultisampledRTT(E)===!1?B=W.get(E).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[X]:B=Ne,le.copy(E.viewport),Pe.copy(E.scissor),He=E.scissorTest}else le.copy(ze).multiplyScalar(Ee).floor(),Pe.copy(ct).multiplyScalar(Ee).floor(),He=ut;if(X!==0&&(B=Z),ee.bindFramebuffer(w.FRAMEBUFFER,B)&&ee.drawBuffers(E,B),ee.viewport(le),ee.scissor(Pe),ee.setScissorTest(He),G){const xe=W.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,xe.__webglTexture,X)}else if(Se){const xe=L;for(let Te=0;Te<E.textures.length;Te++){const Ne=W.get(E.textures[Te]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Te,Ne.__webglTexture,X,xe)}}else if(E!==null&&X!==0){const xe=W.get(E.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,xe.__webglTexture,X)}K=-1};function eu(E){const L=W.get(E);return(L.__readFormat!==E.format||L.__readType!==E.type)&&(L.__readFormat=E.format,L.__readType=E.type,L.__formatReadable=oe.textureFormatReadable(E.format),L.__typeReadable=oe.textureTypeReadable(E.type)),L}this.readRenderTargetPixels=function(E,L,X,B,G,Se,Ce,xe=0){if(!(E&&E.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te){ee.bindFramebuffer(w.FRAMEBUFFER,Te);try{const Ne=E.textures[xe],We=Ne.format,et=Ne.type;E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+xe);const Ie=eu(Ne);if(Ie.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ie.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=E.width-B&&X>=0&&X<=E.height-G&&w.readPixels(L,X,B,G,fe.convert(We),fe.convert(et),Se)}finally{const Ne=de!==null?W.get(de).__webglFramebuffer:null;ee.bindFramebuffer(w.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(E,L,X,B,G,Se,Ce,xe=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=W.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ce!==void 0&&(Te=Te[Ce],Array.isArray(Te)&&(Te=Te[0])),Te)if(L>=0&&L<=E.width-B&&X>=0&&X<=E.height-G){ee.bindFramebuffer(w.FRAMEBUFFER,Te);const Ne=E.textures[xe],We=Ne.format,et=Ne.type;E.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+xe);const Ie=eu(Ne);if(Ie.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ie.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,tt),w.bufferData(w.PIXEL_PACK_BUFFER,Se.byteLength,w.STREAM_READ),w.readPixels(L,X,B,G,fe.convert(We),fe.convert(et),0),w.bindBuffer(w.PIXEL_PACK_BUFFER,null);const Ct=de!==null?W.get(de).__webglFramebuffer:null;ee.bindFramebuffer(w.FRAMEBUFFER,Ct);const vt=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await lm(w,vt,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,tt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Se),w.bindBuffer(w.PIXEL_PACK_BUFFER,null),w.deleteBuffer(tt),w.deleteSync(vt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,L=null,X=0){const B=Math.pow(2,-X),G=Math.floor(E.image.width*B),Se=Math.floor(E.image.height*B),Ce=L!==null?L.x:0,xe=L!==null?L.y:0;se.setTexture2D(E,0),w.copyTexSubImage2D(w.TEXTURE_2D,X,0,0,Ce,xe,G,Se),ee.unbindTexture()},this.copyTextureToTexture=function(E,L,X=null,B=null,G=0,Se=0){let Ce,xe,Te,Ne,We,et,Ie,tt,Ct;const vt=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(X!==null)Ce=X.max.x-X.min.x,xe=X.max.y-X.min.y,Te=X.isBox3?X.max.z-X.min.z:1,Ne=X.min.x,We=X.min.y,et=X.isBox3?X.min.z:0;else{const st=Math.pow(2,-G);Ce=Math.floor(vt.width*st),xe=Math.floor(vt.height*st),E.isDataArrayTexture?Te=vt.depth:E.isData3DTexture?Te=Math.floor(vt.depth*st):Te=1,Ne=0,We=0,et=0}B!==null?(Ie=B.x,tt=B.y,Ct=B.z):(Ie=0,tt=0,Ct=0);const mt=fe.convert(L.format),qt=fe.convert(L.type);let Le;L.isData3DTexture?(se.setTexture3D(L,0),Le=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(se.setTexture2DArray(L,0),Le=w.TEXTURE_2D_ARRAY):(se.setTexture2D(L,0),Le=w.TEXTURE_2D),ee.activeTexture(w.TEXTURE0),ee.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),ee.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),ee.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const en=ee.getParameter(w.UNPACK_ROW_LENGTH),lt=ee.getParameter(w.UNPACK_IMAGE_HEIGHT),Ui=ee.getParameter(w.UNPACK_SKIP_PIXELS),Yt=ee.getParameter(w.UNPACK_SKIP_ROWS),Xs=ee.getParameter(w.UNPACK_SKIP_IMAGES);ee.pixelStorei(w.UNPACK_ROW_LENGTH,vt.width),ee.pixelStorei(w.UNPACK_IMAGE_HEIGHT,vt.height),ee.pixelStorei(w.UNPACK_SKIP_PIXELS,Ne),ee.pixelStorei(w.UNPACK_SKIP_ROWS,We),ee.pixelStorei(w.UNPACK_SKIP_IMAGES,et);const di=E.isDataArrayTexture||E.isData3DTexture,Oi=L.isDataArrayTexture||L.isData3DTexture;if(E.isDepthTexture){const st=W.get(E),Vt=W.get(L),An=W.get(st.__renderTarget),Et=W.get(Vt.__renderTarget);ee.bindFramebuffer(w.READ_FRAMEBUFFER,An.__webglFramebuffer),ee.bindFramebuffer(w.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let kt=0;kt<Te;kt++)di&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,W.get(E).__webglTexture,G,et+kt),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,W.get(L).__webglTexture,Se,Ct+kt)),w.blitFramebuffer(Ne,We,Ne+Ce,We+xe,Ie,tt,Ie+Ce,tt+xe,w.DEPTH_BUFFER_BIT,w.NEAREST);ee.bindFramebuffer(w.READ_FRAMEBUFFER,null),ee.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(G!==0||E.isRenderTargetTexture||W.has(E)){const st=W.get(E),Vt=W.get(L);ee.bindFramebuffer(w.READ_FRAMEBUFFER,I),ee.bindFramebuffer(w.DRAW_FRAMEBUFFER,$);for(let An=0;An<Te;An++)di?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,st.__webglTexture,G,et+An):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,st.__webglTexture,G),Oi?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Vt.__webglTexture,Se,Ct+An):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Vt.__webglTexture,Se),G!==0?w.blitFramebuffer(Ne,We,Ne+Ce,We+xe,Ie,tt,Ie+Ce,tt+xe,w.COLOR_BUFFER_BIT,w.NEAREST):Oi?w.copyTexSubImage3D(Le,Se,Ie,tt,Ct+An,Ne,We,Ce,xe):w.copyTexSubImage2D(Le,Se,Ie,tt,Ne,We,Ce,xe);ee.bindFramebuffer(w.READ_FRAMEBUFFER,null),ee.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Oi?E.isDataTexture||E.isData3DTexture?w.texSubImage3D(Le,Se,Ie,tt,Ct,Ce,xe,Te,mt,qt,vt.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(Le,Se,Ie,tt,Ct,Ce,xe,Te,mt,vt.data):w.texSubImage3D(Le,Se,Ie,tt,Ct,Ce,xe,Te,mt,qt,vt):E.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Se,Ie,tt,Ce,xe,mt,qt,vt.data):E.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Se,Ie,tt,vt.width,vt.height,mt,vt.data):w.texSubImage2D(w.TEXTURE_2D,Se,Ie,tt,Ce,xe,mt,qt,vt);ee.pixelStorei(w.UNPACK_ROW_LENGTH,en),ee.pixelStorei(w.UNPACK_IMAGE_HEIGHT,lt),ee.pixelStorei(w.UNPACK_SKIP_PIXELS,Ui),ee.pixelStorei(w.UNPACK_SKIP_ROWS,Yt),ee.pixelStorei(w.UNPACK_SKIP_IMAGES,Xs),Se===0&&L.generateMipmaps===!0&&L.mipmapsAutoUpdate===!0&&w.generateMipmap(Le),ee.unbindTexture()},this.initRenderTarget=function(E){W.get(E).__webglFramebuffer===void 0&&se.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?se.setTextureCube(E,0):E.isData3DTexture?se.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?se.setTexture2DArray(E,0):se.setTexture2D(E,0),ee.unbindTexture()},this.resetState=function(){j=0,H=0,de=null,ee.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),n.unpackColorSpace=nt._getUnpackColorSpace()}}const rd=.003,Za=1.2;function kc(t,e,n,i){return{yaw:t-n*rd,pitch:$n.clamp(e-i*rd,-Za,Za)}}function Jf(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:$n.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-Za,Za)}}class rS{yaw=0;pitch=0;freeMode=!1;anchor=new D;freePos=new D;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new D(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new Nn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,kc(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,Jf(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new D;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new D(-i.z,0,i.x),s=new D;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=$n.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=$n.clamp(this.freePos.y,1.1,4.4),this.freePos.z=$n.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function sS(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}const ls=new D;function yn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;ls.copy(e),ls[i]=0,ls.normalize();const l=.5*a/(a+o),u=1-ls.angleTo(t)/c;return Math.sign(ls[n])===1?u*l:o/(a+o)+l+l*(1-u)}class yl extends er{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new D,l=new D,u=new D(e,n,i).divideScalar(2).subScalar(s),d=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,g=d.length/6,y=new D,p=.5/a;for(let m=0,x=0;m<d.length;m+=3,x+=2)switch(c.fromArray(d,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),d[m+0]=u.x*Math.sign(c.x)+l.x*s,d[m+1]=u.y*Math.sign(c.y)+l.y*s,d[m+2]=u.z*Math.sign(c.z)+l.z*s,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:y.set(1,0,0),h[x+0]=yn(y,l,"z","y",s,i),h[x+1]=1-yn(y,l,"y","z",s,n);break;case 1:y.set(-1,0,0),h[x+0]=1-yn(y,l,"z","y",s,i),h[x+1]=1-yn(y,l,"y","z",s,n);break;case 2:y.set(0,1,0),h[x+0]=1-yn(y,l,"x","z",s,e),h[x+1]=yn(y,l,"z","x",s,i);break;case 3:y.set(0,-1,0),h[x+0]=1-yn(y,l,"x","z",s,e),h[x+1]=1-yn(y,l,"z","x",s,i);break;case 4:y.set(0,0,1),h[x+0]=1-yn(y,l,"x","y",s,e),h[x+1]=1-yn(y,l,"y","x",s,n);break;case 5:y.set(0,0,-1),h[x+0]=yn(y,l,"x","y",s,e),h[x+1]=1-yn(y,l,"y","x",s,n);break}}static fromJSON(e){return new yl(e.width,e.height,e.depth,e.segments,e.radius)}}const sd=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function aS(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return sd[e%sd.length]}function Da(t,e,n,i){const a=(d,f)=>d<n.minX+.2||d>n.maxX-.2||f<n.minZ+.2||f>n.maxZ-.2||i.some(h=>d>h.minX-.2&&d<h.maxX+.2&&f>h.minZ-.2&&f<h.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],c=new Set(["0,0"]);let l=-1;for(let d=0;d<o.length&&d<12e3;d++){const f=o[d];if(Math.hypot(f.x-e.x,f.z-e.z)<.48){l=d;break}for(const[h,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const y=f.x+h,p=f.z+g,m=`${Math.round((y-t.x)/.45)},${Math.round((p-t.z)/.45)}`;!c.has(m)&&!a(y,p)&&(c.add(m),o.push({x:y,z:p,parent:d}))}}if(l<0)return[];const u=[];for(let d=l;d>=0;d=o[d].parent)u.push({x:o[d].x,z:o[d].z});return u.reverse().slice(1)}const yr={x:-7.8,z:-4.6},oS=[0,4,8,2,6,10,1,5,9,3,7,11];function Bc(t=0){const e=-Math.PI/2+oS[(t%12+12)%12]*Math.PI/6;return{x:yr.x+Math.cos(e)*2.15,z:yr.z+Math.sin(e)*2.15}}function Gc(t,e=0){if(t==="culture")return Bc(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const Hi=(t,e,n)=>t+(e-t)*n;function cS(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=Hi(1.35,.5,n),s=Hi(2.2,.6,n),a=e?0:n<.35?Hi(.06,0,n/.35):0,o=Hi(9,4,n),c=n>.45?Hi(0,.42,(n-.45)/.55):0,l=n>.55?Hi(0,.12,(n-.55)/.45):0,u=n>.5?Hi(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:c,slump:l,saturation:u,zzz:n>=.8}}function lS(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Ur(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const ad=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function bl(t){const e=Ur(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+ad[n].map((r,s)=>Math.round(r+(ad[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const uS={EXPLOIT:["Exploiting","calm"],BOREDOM_SNAP:["Boredom snap","snap"],YOKED_SNAP:["Boredom snap","snap"],PARADIGM_BREAKOUT:["Paradigm breakout","breakout"],CONVERGED:["Converged","converged"],FRUSTRATED:["Frustrated","frustrated"]};function Or(t){if(!t)return{label:"",tone:"calm"};const e=uS[t];return e?{label:e[0],tone:e[1]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm"}}function dS(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function fS(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}function hS(){const t=new km;t.background=new Ke("#e4edf3"),t.fog=new _l("#e4edf3",34,90);const e=new In(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new er(1,1,1),r=(U,w=.68,te=0)=>new Ia({color:U,roughness:w,metalness:te}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),c=r("#b1bec5",.32,.65),l=r("#c8d3d6"),u=r("#a8b5a1"),d=r("#b4a38c",.8),f=r("#928572");r("#18252a",.38);const h=r("#f9f4e6"),g=r("#3e8493"),y=r("#d2a468"),p=new ig({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:bn}),m=new $i({color:"#fff6dd"}),x=new $i({color:"#80b7ab"}),T=(U,w,te,ae,oe,ee,ye,W=t)=>{const se=new xt(i,ye);return se.position.set(U,w,te),se.scale.set(ae,oe,ee),W.add(se),se},S=(U,w,te,ae,oe,ee,ye=t,W=20)=>{const se=new xt(new Ns(ae,ae,oe,W),ee);return se.position.set(U,w,te),ye.add(se),se},R=(U,w,te,ae,oe,ee=t)=>{const ye=new xt(new Sl(ae,16,12),oe);return ye.position.set(U,w,te),ee.add(ye),ye},A=(U,w,te,ae)=>n.push({minX:U-te/2,maxX:U+te/2,minZ:w-ae/2,maxZ:w+ae/2}),_=(U,w,te,ae,oe=t)=>{const ee=w.clone().sub(U),ye=new xt(new Ns(te,te,ee.length(),12),ae);return ye.position.copy(U).add(w).multiplyScalar(.5),ye.quaternion.setFromUnitVectors(new D(0,1,0),ee.normalize()),oe.add(ye),ye},b=(U,w,te,ae,oe,ee,ye="#f5f4ec",W="#425859",se=0)=>{const M=document.createElement("canvas");M.width=1024,M.height=Math.max(64,Math.round(1024*ee/oe));const v=M.getContext("2d");v.fillStyle=ye,v.fillRect(0,0,M.width,M.height);const F=U.split(`
`),ie=Math.min(M.height/(F.length+1),M.width/(Math.max(...F.map(J=>J.length))*.62));v.fillStyle=W,v.textAlign="center",v.textBaseline="middle",v.font=`500 ${ie}px sans-serif`,F.forEach((J,q)=>v.fillText(J,512,M.height/2+(q-(F.length-1)/2)*ie*1.3));const Y=new Gi(M);Y.colorSpace=Ot;const ce=new $i({map:Y,side:bn}),pe=new xt(new Wi(oe,ee),ce);return pe.position.set(w,te,ae),pe.rotation.y=se,t.add(pe),pe},O=(U,w,te)=>{const ae=document.createElement("canvas");ae.width=960,ae.height=360;const oe=ae.getContext("2d");oe.fillStyle="#fff9ea",oe.strokeStyle="#b6c9c4",oe.lineWidth=4,oe.beginPath(),oe.roundRect(4,4,952,310,30),oe.fill(),oe.stroke(),oe.beginPath(),oe.moveTo(450,313),oe.lineTo(480,352),oe.lineTo(510,313),oe.fill(),oe.textAlign="left",oe.fillStyle="#35716c",oe.font="bold 38px sans-serif",oe.fillText(U.toUpperCase(),34,48),oe.fillStyle="#263b41",oe.font="48px sans-serif";const ee=w.replace(/\s+/g," ").trim().split(" "),ye=[];let W="";for(const M of ee){const v=W?W+" "+M:M;oe.measureText(v).width>875&&W?(ye.push(W),W=M):W=v}W&&ye.push(W),ye.slice(0,3).forEach((M,v)=>{let F=M;v===2&&ye.length>3&&(F=F.replace(/.{0,3}$/,"…")),oe.fillText(F,34,110+v*53)}),oe.fillStyle="#6c817c",oe.font="32px sans-serif",oe.fillText(te.length?"WITH "+te.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const se=new Gi(ae);return se.colorSpace=Ot,new xt(new Wi(2.7,1.0125),new $i({map:se,transparent:!0,side:bn,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new ag("#f5faff","#9caeb8",2.15));const P=new Uu("#ffffff",2.2);P.position.set(-8,11,3),t.add(P);const N=new Uu("#d0e9fa",.85);N.position.set(8,5,-8),t.add(N);const z=document.createElement("canvas");z.width=512,z.height=512;const Z=z.getContext("2d");Z.fillStyle="#d9e2e6",Z.fillRect(0,0,512,512);for(let U=0;U<1700;U++){const w=Math.sin(U*41.77)*.5+.5,te=Math.sin(U*19.31+5)*.5+.5;Z.fillStyle=U%3?"#ecf0f1":"#c3d0d6",Z.fillRect(w*512,te*512,1+U%3,1+U%2)}const I=new Gi(z);I.colorSpace=Ot,I.wrapS=I.wrapT=za,I.repeat.set(8,9),I.anisotropy=8,T(0,-.12,0,24,.24,28,new Ia({map:I,roughness:.85})),T(0,2.5,-13.5,24,5,.3,s),T(11.75,2.5,0,.3,5,27,s),T(0,.43,-13.27,23.5,.86,.12,d),T(11.53,.43,0,.12,.86,26.5,d),T(0,.08,-13.1,23.5,.16,.06,o),T(11.38,.08,0,.06,.16,26.5,o);const $=T(0,4.9,0,24,.16,28,s);$.userData.overhead=!0;for(const U of[-12,-6,0,6,12])T(-11.6,2.5,U,.22,5,.14,s);T(-11.6,.55,0,.3,1.1,27,s),T(-11.6,4.65,0,.3,.7,27,s),T(-11.68,2.75,0,.025,3.5,27,p);for(const U of[1.12,3.8])T(-11.4,U,0,.12,.07,27,c);T(-7.9,2.25,12.7,7.5,4.5,.14,s),T(7.9,2.25,12.7,7.5,4.5,.14,s);for(const U of[-3.9,3.9])T(U,2.25,12.65,.12,4.5,.18,c);T(0,2.25,12.8,7.7,4.5,.025,p),b("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const U of[-8,-1,6]){T(0,4.35,U,20,.08,.07,o);for(const w of[-7,0,7])S(w,4.18,U,.13,.22,o),S(w,4.06,U,.1,.025,m)}const j=new xt(new bs(1.8,.025,8,64),f);j.rotation.x=Math.PI/2,j.position.set(0,3.9,.5),t.add(j);for(const U of[-1.6,1.6])_(new D(U,3.9,.5),new D(U,4.84,.5),.012,c);T(-28,-.65,-2,45,1,70,r("#b0bf9d"));const H=r("#98af91"),de=r("#897e69");for(let U=0;U<14;U++){const w=-17-U%3*3,te=-25+U*4.1;S(w,1.3,te,.12,3,de);const ae=R(w,3,te,1.25+U%3*.2,H);ae.scale.y=1.45}function K(U,w){S(U,.32,w,.34,.64,s),S(U,.66,w,.29,.04,f);for(let te=0;te<6;te++){const ae=te*2.4;_(new D(U,.65,w),new D(U+Math.cos(ae)*.25,1.5+te%3*.18,w+Math.sin(ae)*.25),.025,u),R(U+Math.cos(ae)*.3,1.3+te%3*.18,w+Math.sin(ae)*.3,.16,u).scale.set(.55,2,.8)}A(U,w,.8,.8)}K(-10.3,8.4),K(-10.3,-10.8),K(10.3,10.8);function ne(U,w,te,ae){T(U,.1,w,te-.17,.2,ae-.12,o),T(U,.51,w,te,.78,ae,l),T(U,.94,w,te+.08,.08,ae+.08,o);const oe=Math.round(te/.85);for(let ee=0;ee<oe;ee++){const ye=U-te/2+(ee+.5)*te/oe;T(ye,.53,w+ae/2+.009,te/oe-.025,.7,.018,a),T(ye,.77,w+ae/2+.028,.29,.025,.035,c)}A(U,w,te+.12,ae+.12)}function le(U,w,te,ae="#8ab9ad"){T(U,1,w,.48,.035,.3,c),T(U,1.22,w,.055,.4,.055,c),T(U,1.53,w,.94,.59,.055,o),b(te+`
—  RESEARCH IN PROGRESS  —`,U,1.53,w+.032,.86,.51,"#203137",ae),T(U,1.01,w+.36,.65,.035,.2,s);for(let oe=0;oe<5;oe++)T(U-.25+oe*.12,1.031,w+.36,.07,.007,.11,c)}function Pe(U,w,te){T(U,1.02,w,.56,.09,.3,u);for(let ae=0;ae<5;ae++)S(U-.22+ae*.11,1.16,w,.031,.25,a,t,10),S(U-.22+ae*.11,1.3,w,.038,.025,te,t,10)}function He(U,w){const te=new ii;te.position.set(U,1,w),t.add(te);const ae=T(0,.045,0,.58,.09,.55,a,te);ae.rotation.y=-.1;const oe=T(0,.36,-.15,.14,.62,.16,a,te);oe.rotation.x=-.15;const ee=T(0,.61,-.03,.18,.15,.37,a,te);ee.rotation.x=-.2;const ye=S(0,.67,.1,.07,.27,o,te);ye.rotation.x=-.38,S(0,.47,.1,.065,.18,c,te),T(0,.23,.08,.4,.04,.35,o,te),S(0,.11,.08,.12,.04,m,te),R(.13,.32,-.11,.065,o,te)}function Q(U,w){T(U,1.01,w,.35,.025,.22,c),T(U,1.25,w,.025,.45,.025,c),T(U,1.46,w,.35,.035,.05,s);for(let te=0;te<3;te++){const ae=U-.12+te*.12;S(ae,1.28,w,.026,.32,a,t,12),S(ae,1.08,w,.007,.12,c,t,8),S(ae,1.46,w,.035,.035,te%2?g:y,t,12)}}const ve=yr.x,Ae=yr.z;S(ve,.43,Ae,.18,.78,c),S(ve,.88,Ae,1.38,.12,d),S(ve,.95,Ae,1.31,.025,a),A(ve,Ae,2.8,2.8);for(let U=0;U<12;U++){const w=U*Math.PI/6,te=ve+Math.sin(w)*2.15,ae=Ae+Math.cos(w)*2.15;S(te,.36,ae,.29,.07,c),S(te,.18,ae,.035,.32,c);const oe=S(te,.43,ae,.31,.09,U%3===0?r("#dfabc5"):u);oe.userData.discussionSeat=!0;const ee=T(ve+Math.sin(w)*.87,.979,Ae+Math.cos(w)*.87,.28,.015,.21,h);ee.rotation.y=-w}S(ve,.99,Ae,.19,.025,y),b("01   IDEATION ROUNDTABLE",ve,2.65,-7.2,4.7,.38),b("SHARED QUESTIONS / GROUP DISCUSSION",ve,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),ne(5.4,-2.8,6.2,1.7);const Oe=T(5.6,1.44,-2.85,1.08,.88,.3,y);Oe.rotation.x=-.12,T(5.6,1.65,-2.666,.81,.25,.035,o),b("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const Ee=S(5.6,1.3,-2.64,.16,.07,o);Ee.rotation.x=Math.PI/2;const $e=T(5.64,1.36,-2.59,.025,.11,.025,s);$e.rotation.z=-.5;for(const[U,w]of[[5.28,g],[5.88,y]])R(U,1.1,-2.64,.045,o),_(new D(U,1.1,-2.61),new D(U+.35,1.03,-2.1),.018,w),_(new D(U+.35,1.03,-2.1),new D(U+.9,1.04,-2.17),.018,w);T(7.2,1.01,-2.8,.95,.055,.68,u);for(let U=0;U<4;U++)T(6.9+U*.19,1.08,-2.8,.1,.09,.18,o),T(6.9+U*.19,1.04,-2.8,.02,.018,.57,c);le(3.3,-3.08,"PHYSICS / MEASUREMENTS"),b("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),ne(.2,-10.6,5.8,1.5),le(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let U=0;U<5;U++){const w=.25+U*.43,te=-10.55+U%2*.19,ae=[g,y,u][U%3];S(w,1.16,te,.13,.35,p),S(w,1.09,te,.115,.19,ae),S(w,1.4,te,.055,.15,p),S(w,1.49,te,.065,.045,o)}Pe(2.2,-10.9,g),Q(.1,-11.05),b("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),b("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),b("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let U=0;U<5;U++)T(-2.2+U*1.12,2.68,-13.29,.85,.06,.02,U%2?u:d);ne(-7.3,5.4,4.8,1.45),le(-8.6,5.18,"BIOLOGY / CELL CULTURES"),He(-7.15,5.32);for(let U=0;U<3;U++){const w=-6.25+U*.43,te=5.5+U%2*.3;S(w,1.025,te,.18,.055,p),S(w,1.045,te,.16,.015,u);for(let ae=0;ae<5;ae++){const oe=ae*2.4,ee=R(w+Math.cos(oe)*.1,1.065,te+Math.sin(oe)*.1,.035,U%2?y:g);ee.scale.y=.35}}Pe(-5.55,5.15,g),b("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const U of[-9.9,-7.9,-5.9])T(10.75,1.22,U,1.4,2.4,1.5,a),T(10.02,1.22,U,.035,2.18,1.35,l),T(9.98,1.35,U+.42,.035,.43,.035,c),A(10.75,U,1.5,1.6);b("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),ne(9.3,7.2,3.7,1.35),T(9.5,.99,7.1,.8,.025,.6,c),T(9.5,1.008,7.1,.63,.015,.46,o),_(new D(9.5,1,6.8),new D(9.5,1.5,6.8),.025,c),_(new D(9.5,1.5,6.8),new D(9.5,1.5,7.05),.025,c),b("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[U,w]of[[3.7,-.5],[-7.5,7.7]]){S(U,.66,w,.32,.12,u),S(U,.34,w,.045,.56,c);for(let te=0;te<4;te++){const ae=te*Math.PI/2;_(new D(U,.12,w),new D(U+Math.cos(ae)*.37,.08,w+Math.sin(ae)*.37),.025,c)}A(U,w,.7,.7)}S(0,.13,.5,1.85,.26,f),S(0,.52,.5,1.7,.55,d),S(0,.84,.5,1.84,.1,a),S(0,.9,.5,1.62,.035,o),A(0,.5,3.7,3.7),b("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const Mt=new ii;Mt.position.set(0,.95,.5),t.add(Mt);const ze=[];for(let U=0;U<36;U++){const w=U*2.39996,te=Math.sqrt(U/36)*1.35,ae=R(Math.cos(w)*te,.15+U%5*.11,Math.sin(w)*te,.045+U%3*.014,U%4===0?y:u,Mt);ze.push(ae)}for(const U of[-1.45,1.45])for(const w of[-1.1,2.1])S(U,1.03,w,.018,.22,c);const ct=[u,d,g,h,y];for(const U of[-6.2,6.2]){for(const w of[U-.9,U+.9])T(w,1.75,-12.7,.1,3.5,.5,d);for(const w of[.25,1.25,2.25,3.25]){T(U,w,-12.7,1.9,.075,.6,d);for(let te=0;te<6;te++)T(U-.7+te*.27,w+.3,-12.7,.17,.5-te%3*.06,.32,ct[te%5])}A(U,-12.7,2.05,.75)}b("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),b("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function ut(U,w,te){const ae=document.createElement("canvas");ae.width=256,ae.height=64;const oe=ae.getContext("2d");oe.fillStyle="rgba(23,35,44,.86)",oe.beginPath(),oe.roundRect(4,6,248,52,14),oe.fill(),oe.fillStyle="#ffffff26",oe.beginPath(),oe.roundRect(16,38,224,10,5),oe.fill(),w!=null&&(oe.fillStyle=bl(w),oe.beginPath(),oe.roundRect(16,38,Math.max(10,224*w/100),10,5),oe.fill()),oe.fillStyle="#f4f0e4",oe.font="600 21px sans-serif",oe.textBaseline="middle",oe.fillText(w==null?"Boredom —":`Bored ${Math.round(w)}%`,18,22),te&&(oe.textAlign="right",oe.fillStyle="#ddc270",oe.font="600 15px sans-serif",oe.fillText(te.toUpperCase(),238,22));const ee=U.material;ee.map?.dispose(),ee.map=new Gi(ae),ee.map.colorSpace=Ot,ee.needsUpdate=!0}const Je=(()=>{const U=document.createElement("canvas");U.width=128,U.height=128;const w=U.getContext("2d");w.fillStyle="#e9e4f4",w.strokeStyle="#31434b",w.lineWidth=6,w.font="700 40px sans-serif";for(const[ae,oe,ee,ye]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])w.font=`700 ${ye}px sans-serif`,w.fillStyle="#31434b",w.fillText(ae,oe+3,ee+3),w.fillStyle="#e9e4f4",w.fillText(ae,oe,ee);const te=new Gi(U);return te.colorSpace=Ot,te})(),Ut=(U,w,te)=>{const ae=Math.atan2(Math.sin(w-U),Math.cos(w-U));return Math.abs(ae)<te?w:U+Math.sign(ae)*te},_t=new Map;function Zt(U,w,te,ae,oe,ee){const ye=new ii;ye.position.set(U,0,w),ye.rotation.y=te,t.add(ye);const W=aS(ee),se=r(W.shell,.62),M=r("#293b42",.8),v=r(W.accent,.48),F=r(W.trim,.57),ie=new $i({color:"#263b41",side:on}),Y=ae.startsWith("B")?u:ae.startsWith("C")?y:g,ce=(je,pn,qr,qn,Yr,On,Kr,Vs=ye,Ws=.055)=>{const Di=new yl(qn,Yr,On,3,Math.min(Ws,qn/3,Yr/3,On/3)),Ni=new xt(Di,Kr);Ni.position.set(je,pn,qr),Vs.add(Ni);const Jr=new xt(Di,ie);return Jr.scale.setScalar(1.055),Ni.add(Jr),Ni};for(const je of[-.13,.13])ce(je,.42,0,.16,.4,.18,se),R(je,.19,.055,.12,v,ye).scale.set(.95,.68,1.4);ce(0,.99,0,.54,.61,.35,se,ye,.1),ce(0,.72,0,.57,.13,.37,se,ye,.06),T(0,.98,.184,.012,.45,.012,M,ye);const pe=T(-.105,1.21,.19,.16,.07,.025,se,ye);pe.rotation.z=-.55;const J=T(.105,1.21,.19,.16,.07,.025,se,ye);J.rotation.z=.55,S(0,1.36,0,.09,.12,v,ye);const q=new ii;if(q.position.set(0,1.64,0),ye.add(q),W.head==="round"){const je=R(0,0,0,.265,se,q);je.scale.set(1.21,1,.92);const pn=new xt(je.geometry,ie);pn.scale.setScalar(1.055),je.add(pn)}else ce(0,0,0,.59,W.ears==="compact"?.44:.49,.45,se,q,W.head==="monitor"?.055:.13);const me=W.head==="monitor";me&&ce(0,-.005,.232,.49,.36,.025,M,q,.06);for(const je of[-1,1]){const pn=S(je*.335,0,0,.125,.09,v,q);pn.rotation.z=Math.PI/2;const qr=S(je*.389,0,0,W.ears==="compact"?.06:.085,.025,F,q);if(qr.rotation.z=Math.PI/2,W.ears==="ring"){const qn=new xt(new bs(.125,.012,6,24),M);qn.rotation.y=Math.PI/2,qn.position.set(je*.385,0,0),q.add(qn)}}const C=W.antenna==="pair"?[-.17,.17]:[W.antenna==="offset-right"?.15:W.antenna==="offset-left"?-.16:0];for(const je of C)_(new D(je,.23,0),new D(je+(W.antenna==="offset-right"?.045:0),.39,0),.018,M,q),R(je+(W.antenna==="offset-right"?.045:0),.4,0,.047,F,q);const V=document.createElement("canvas");V.width=256,V.height=200;const k=V.getContext("2d"),ue=me?"#fff8e4":"#263b41";k.fillStyle=ue,k.strokeStyle=ue,k.lineWidth=12,k.lineCap="round";for(const je of[82,174])k.beginPath(),W.eyes==="happy"?(k.arc(je,79,15,Math.PI,Math.PI*2),k.stroke()):(k.ellipse(je,76,10,17,0,0,Math.PI*2),k.fill());k.fillStyle="#f29b40";for(const je of[52,204])k.beginPath(),k.ellipse(je,112,13,8,0,0,Math.PI*2),k.fill();k.fillStyle="#263b41",k.beginPath(),k.ellipse(128,123,24,28,0,0,Math.PI),k.closePath(),k.fill(),k.fillStyle="#f18540",k.beginPath(),k.ellipse(128,137,13,9,0,0,Math.PI*2),k.fill();const fe=new Gi(V);fe.colorSpace=Ot;const _e=new $i({map:fe,transparent:!0,depthWrite:!1}),De=new xt(new Wi(.49,.38),_e);De.position.set(0,-.01,.255),q.add(De);const Be=new ii;if(Be.position.set(.32,1.22,0),ye.add(Be),ce(0,-.12,0,.16,.29,.19,se,Be,.065),R(0,-.28,.07,.085,v,Be),ce(0,-.29,.16,.13,.12,.2,se,Be,.05),R(0,-.29,.28,.092,v,Be),ce(-.32,1.04,0,.16,.36,.19,se,ye,.07),R(-.32,.84,.06,.09,v,ye),W.prop==="magnifier"){const je=new xt(new bs(.1,.018,8,24),v);je.position.set(.32,1.05,.4),ye.add(je),_(new D(.32,.96,.4),new D(.32,.84,.4),.022,M,ye);const pn=S(.32,1.05,.4,.084,.008,p,ye);pn.rotation.x=Math.PI/2}else if(W.prop==="clipboard"){ce(-.31,.96,.23,.22,.29,.035,F,ye,.025),T(-.31,.97,.253,.17,.22,.008,h,ye);for(let je=0;je<3;je++)T(-.31,.92+je*.05,.261,.11,.012,.005,v,ye)}else{S(-.31,.97,.17,.028,.15,v,ye);const je=new xt(new xl(.078,.15,16),F);je.position.set(-.31,.86,.17),ye.add(je)}const he=R(-.17,1.22,.19,.018,x,ye);he.name="agent-status-led";const Ue=b(ae,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(Ue),ye.add(Ue),T(.12,.93,.19,.2,.045,.015,Y,ye);const Ze=b(ae.toUpperCase(),U,2.07,w+.16,.58,.18,"#f4f8fa","#31434b");ye.userData.ownedMaterials=[se,M,v,F,ie,_e,Ue.material],ye.userData.ownedTextures=[fe,Ue.material.map];const be=new Oo(new Pa({transparent:!0,depthTest:!1}));be.scale.set(.8,.8,1),t.add(be);const it=new Oo(new Pa({transparent:!0,depthTest:!1}));it.scale.set(.86,.215,1),it.name="boredom-meter",t.add(it);const yt=new Oo(new Pa({map:Je,transparent:!0,depthTest:!1}));yt.scale.set(.5,.5,1),yt.name="boredom-zzz",yt.visible=!1,t.add(yt);for(const je of[se,M,v,F])je.userData.baseColor=je.color.clone();const Tn={id:ee,station:oe,head:q,arm:Be,light:he,group:ye,sign:Ze,path:[],target:"",activity:be,activityState:"",idea:null,ideaText:"",meter:it,meterKey:"",zzz:yt,tint:1};return _t.set(ee,Tn),Tn}const pt=new Map;for(const U of[...t.children])if(U instanceof xt&&U.geometry===i&&!U.userData.overhead&&!Array.isArray(U.material)&&!U.material.transparent){const w=pt.get(U.material)||[];w.push(U),pt.set(U.material,w)}for(const[U,w]of pt){if(w.length<3)continue;const te=new Km(i,U,w.length);w.forEach((ae,oe)=>{ae.updateMatrix(),te.setMatrixAt(oe,ae.matrix),t.remove(ae)}),te.instanceMatrix.needsUpdate=!0,te.computeBoundingSphere(),t.add(te)}const Sn=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new D(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new D(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new D(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new D(-6.3,1.25,7.2),radius:3.1}];let At=0;const cn={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function ln(U,w){const te=Math.max(0,Math.min(.05,U-At));At=U,Mt.rotation.y=U*(w.replay||w.running?.025:.006),ze.forEach((W,se)=>{W.visible=se<w.agents.length*4,W.position.y=.15+se%5*.11+Math.sin(U*.8+se)*.025});const ae=new Set(w.agents.map(W=>W.id));for(const[W,se]of _t)if(!ae.has(W)){if(t.remove(se.group,se.sign,se.activity,se.meter,se.zzz),se.meter.material.map?.dispose(),se.meter.material.dispose(),se.zzz.material.dispose(),se.idea){t.remove(se.idea),se.idea.geometry.dispose();const v=se.idea.material;v.map?.dispose(),v.dispose()}se.activity.material.map?.dispose(),se.activity.material.dispose(),se.group.traverse(v=>{v instanceof xt&&v.geometry!==i&&v.geometry.dispose()});for(const v of se.group.userData.ownedMaterials)v.dispose();for(const v of se.group.userData.ownedTextures||[])v?.dispose();se.sign.geometry.dispose();const M=se.sign.material;M.map?.dispose(),M.dispose(),_t.delete(W)}w.agents.forEach((W,se)=>{let M=_t.get(W.id);M||(M=Zt(W.position?.x??(se%3-1)*.6,W.position?.z??10.4+Math.floor(se/3)*.4,0,W.name,W.stationId,W.id));const v=W.id.startsWith("worker-")?Number(W.id.match(/\d+$/)?.[0]||1)-1:se%4,F=Gc(W.stationId,v),ie=`${W.stationId}:${v}`;M.target!==ie&&(M.target=ie,M.station=W.stationId,M.path=Da(M.group.position,F,cn,n)),W.position&&(M.group.position.set(W.position.x,0,W.position.z),M.path=[]);const Y=cS(W.boredom,w.reducedMotion),ce=M.path[0];if(ce){const V=ce.x-M.group.position.x,k=ce.z-M.group.position.z,ue=Math.hypot(V,k);if(ue<.07)M.path.shift();else{const fe=Math.min(ue,te*1.8*Y.walk);M.group.position.x+=V/ue*fe,M.group.position.z+=k/ue*fe,M.group.rotation.y=w.reducedMotion?Math.atan2(V,k):Ut(M.group.rotation.y,Math.atan2(V,k),Math.max(.02,te*6*Y.turn))}}else M.group.rotation.y=W.position?.heading??(W.stationId==="culture"?Math.atan2(yr.x-M.group.position.x,yr.z-M.group.position.z):Math.PI);M.sign.position.set(M.group.position.x,2.28,M.group.position.z),M.sign.lookAt(e.position),M.activity.position.set(M.group.position.x,2.85,M.group.position.z);const pe=!!ce||!!W.position?.moving,J=`${W.boredom==null?"-":Math.round(W.boredom)}:${W.regime||""}`;M.meterKey!==J&&(M.meterKey=J,ut(M.meter,W.boredom,Or(W.regime).label)),M.meter.position.set(M.group.position.x,2.5,M.group.position.z),M.group.position.y=pe?Math.abs(Math.sin(U*Y.bobHz+se))*Y.bob:0,M.group.rotation.x=Y.slump,M.zzz.visible=Y.zzz&&!pe,M.zzz.position.set(M.group.position.x+.32,1.95+(w.reducedMotion?0:(U*.35+se*.3)%1*.35),M.group.position.z),M.zzz.material.opacity=w.reducedMotion?.9:1-(U*.35+se*.3)%1*.6,Math.abs(M.tint-Y.saturation)>.02&&(M.tint=Y.saturation,M.group.traverse(V=>{if(V instanceof xt&&V.material instanceof Ia&&V.material.userData.baseColor){const k=V.material.userData.baseColor,ue=k.r*.3+k.g*.59+k.b*.11;V.material.color.setRGB(ue+(k.r-ue)*Y.saturation,ue+(k.g-ue)*Y.saturation,ue+(k.b-ue)*Y.saturation)}})),M.activity.visible=W.state!=="idle"&&!(W.stationId==="culture"&&W.discussionBrief);const q=W.discussionBrief||"",me=q?`${W.name}:${q}:${(W.discussionPeers||[]).join(",")}`:"";if(M.ideaText!==me){if(M.idea){t.remove(M.idea),M.idea.geometry.dispose();const V=M.idea.material;V.map?.dispose(),V.dispose(),M.idea=null}M.ideaText=me,q&&(M.idea=O(W.name,q,W.discussionPeers||[]),M.idea.name="recorded-discussion-bubble",t.add(M.idea))}if(M.idea&&(M.idea.visible=W.stationId==="culture"&&!W.position?.moving&&(!!W.discussionBrief||W.state==="thinking"||W.state==="reviewing"),M.idea.position.set(M.group.position.x,3.05,M.group.position.z),M.idea.lookAt(e.position)),M.activityState!==W.state){M.activityState=W.state;const V=document.createElement("canvas");V.width=128,V.height=128;const k=V.getContext("2d");k.font="80px sans-serif",k.textAlign="center",k.textBaseline="middle",k.fillText(W.state==="thinking"?"💡":W.state==="working"?"🫧":"📈",64,64),M.activity.material.map?.dispose(),M.activity.material.map=new Gi(V),M.activity.material.needsUpdate=!0}const C=(w.replay||w.running)&&(W.state==="working"||W.state==="thinking");M.arm.rotation.x=ce||W.position?.moving?Math.sin(U*5+se)*.12:C?Math.sin(U*1.8+se)*.08:0,M.head.rotation.y=Math.sin(U*(Y.level==="frenetic"?.9:.32)+se)*(Y.level==="frenetic"?.12:.055),M.head.rotation.x=(C&&!ce?.12:0)+Y.droop,M.light.scale.setScalar(C?1+Math.sin(U*2)*.12:1)}),e.updateMatrixWorld();const oe=[],ee=230,ye=86.25;for(const W of _t.values())if(W.idea?.visible){const se=W.idea.position.clone(),M=se.clone().applyMatrix4(e.matrixWorldInverse);if(M.z>=0){W.idea.visible=!1;continue}const v=se.project(e);if(Math.abs(v.x)>1.15||Math.abs(v.y)>1.15){W.idea.visible=!1;continue}let F=$n.clamp((v.x+1)*innerWidth/2,90+ee/2,innerWidth-ee/2-16),ie=(1-v.y)*innerHeight/2;for(let ce=0;ce<12&&oe.some(pe=>Math.abs(F-pe.x)<ee+10&&Math.abs(ie-pe.y)<ye+8);ce++)ie-=ye+8,ie<110&&(ie=155,F=Math.min(innerWidth-ee/2-16,F+ee+12));oe.push({x:F,y:ie}),W.idea.position.set(F/innerWidth*2-1,1-ie/innerHeight*2,v.z).unproject(e),W.idea.quaternion.copy(e.quaternion);const Y=2*-M.z*Math.tan($n.degToRad(e.fov/2))/innerHeight;W.idea.scale.setScalar(ee*Y/2.7),W.idea.renderOrder=10}}return{scene:t,camera:e,colliders:n,stations:Sn,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:ln,setOverview:U=>{$.visible=!0},agentPositions:()=>[..._t.values()].map(U=>({id:U.id,position:U.group.position.clone()})),exposure:1}}const pS=!0;function jf(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function Hc(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function od(t,e="|"){return t.map(n=>rh(n)).join(e)}function $c(t,e){return typeof e=="bigint"?e.toString():e}class mS{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function El(t){return new mS(t)}function gS(t){return t==null}function wl(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function _S(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function tr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Qf(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function ui(t){return Qf(t._zod.def)??t._zod.def.shape}function eh(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return tr(this,e,i),i},enumerable:!0,configurable:!0})}function th(t,e,n){e in t?tr(t,e,n):t[e]=n}function Ki(t,e,n,i){const r=ui(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?eh(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):th(t,s,i?i(a.value,s):a.value))}}function vS(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?eh(t,n,()=>e[n]):th(t,n,i.value))}}function xn(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function xS(t){return JSON.stringify(t)}function SS(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const nh="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function qa(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const MS=El(()=>{if(Zn.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function Us(t){if(qa(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(qa(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function ih(t){return Us(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const yS=new Set(["string","number","symbol"]);function ao(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Ci(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Fe(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function rh(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function bS(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const sh={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},ES={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function wS(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return Ki(s,t,oo(t,e)),Ci(t,xn(n,{shape:s,checks:[]}))}function oo(t,e){const n=ui(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function TS(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(oo(t,e)),a={};return Ki(a,t,Reflect.ownKeys(ui(t)).filter(o=>!s.has(o))),Ci(t,xn(n,{shape:a,checks:[]}))}function AS(t,e){if(!Us(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=ui(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return Ci(t,xn(t._zod.def,{shape:ah(t,e)}))}function ah(t,e){const n={};return Ki(n,t,Reflect.ownKeys(ui(t))),vS(n,e),n}function RS(t,e){if(!Us(e))throw new Error("Invalid input to safeExtend: expected a plain object");return Ci(t,xn(t._zod.def,{shape:ah(t,e)}))}function CS(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};Ki(n,t,Reflect.ownKeys(ui(t))),Ki(n,e,Reflect.ownKeys(ui(e)));const i=xn(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return Ci(t,i)}function cd(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(oo(e,n)):void 0,c={};return Ki(c,e,Reflect.ownKeys(ui(e)),t&&((l,u)=>o&&!o.has(u)?l:new t({type:"optional",innerType:l}))),Ci(e,xn(e._zod.def,{shape:c,checks:[]}))}function PS(t,e,n){const i=n?new Set(oo(e,n)):void 0,r={};return Ki(r,e,Reflect.ownKeys(ui(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),Ci(e,xn(e._zod.def,{shape:r}))}function ai(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function IS(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function oh(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function us(t){return typeof t=="string"?t:t?.message}function ld(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function Vc(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function Vr(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:us(t.inst?._zod.def?.error?.(t))??us(s?.(t))??us(e?.error?.(t))??us(n.customError?.(t))??us(n.localeError?.(t))??"Invalid input",o={};for(const c of Object.keys(t))c==="inst"||c==="schema"||c==="continue"||c==="input"||c==="__proto__"||(o[c]=t[c]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const LS=/[\uD800-\uDBFF]/;function Tl(t){const e=t.length;if(!LS.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function Al(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function DS(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function Os(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function NS(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):US(t,n,i.value)}}function Ai(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function ch(t,e,n){return Ai(t,e,n,!1)}function lh(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return Ai(this,n,i(this))},set(r){Ai(this,n,r)}})}return e}function US(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:Ai(this,e,n.bind(this))},set(i){Ai(this,e,i)}})}function OS(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let Ho,xi=!1;const FS={configurable:!0,get(){xi=!0}};function ht(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&Ho!==t._zod){Ho=void 0;return}Ho=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,FS);const r=xi;xi=!1;try{const s=n(this);return xi?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),xi=xi||r,s}catch(s){throw delete this[e],xi=xi||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function zS(t,e,n,i){const r=OS(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const kS="~constantCatch";function BS(t){const e=()=>t;return e[kS]=!0,e}var ud;const $o={value:void 0,enumerable:!1};let dd="captureStackTrace"in Error?Error:null;function GS(t){const e=dd;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return dd=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function re(t,e,n,i){const r={};function s(f){this.def=f,this.constr=d,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function c(f,h){if(f._zod){if(f._zod.traits.has(t))return}else{$o.value=new s(h);try{Object.defineProperty(f,"_zod",$o)}finally{$o.value=void 0}}if(f._zod.traits.add(t),e(f,h),o){const y=Object.getPrototypeOf(f),p=f._zod.constr.prototype;let m=y;for(;m&&m!==p;)m=Object.getPrototypeOf(m);const x=m??y;o.has(x)||(o.add(x),NS(x,a))}const g=d.prototype;for(const y in g)Object.prototype.hasOwnProperty.call(g,y)&&(y in f||(f[y]=g[y].bind(f)))}const l=i?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:t});function d(f){const h=i?.Parent?GS(u):this;c(h,f);const g=h._zod.deferred;if(g){for(const p of g)p();h._zod.deferred=void 0}const y=globalThis.__zod_globalConfig?.postProcessor;return y&&y(h),h}return Object.defineProperty(d,"init",{value:c}),Object.defineProperty(d,Symbol.hasInstance,{value:f=>i?.Parent&&f instanceof i.Parent?!0:f?._zod?.traits?.has(t)}),Object.defineProperty(d,"name",{value:t}),d}class Xi extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class uh extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(ud=globalThis).__zod_globalConfig??(ud.__zod_globalConfig={});const Zn=globalThis.__zod_globalConfig;function Pi(t){return t&&Object.assign(Zn,t),Zn}function HS(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,$c,2)),t.message}function $S(t){this._zod.message=t}const VS={get:HS,set:$S,enumerable:!0,configurable:!0},Vo={value:void 0,enumerable:!1},fd=new WeakSet([Object.prototype,Error.prototype]),WS=(t,e)=>{t.name="$ZodError",Vo.value=e,Object.defineProperty(t,"issues",Vo),Vo.value=void 0,Object.defineProperty(t,"message",VS);const n=Object.getPrototypeOf(t);fd.has(n)||(fd.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},XS=re("$ZodError",WS);function ZS(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function qS(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?ZS(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function YS(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let c=n,l=0;for(;l<o.length;){const u=o[l],d=l===o.length-1;if(u==="_errors"){d&&c._errors.push(e(a)),l++;continue}Object.prototype.hasOwnProperty.call(c,u)||Object.defineProperty(c,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const f=c[u];d&&f._errors.push(e(a)),c=f,l++}}}};return i(t),n}function co(t,e){return{callee:e?.callee??t,Err:e?.Err}}const Rl=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new Xi;if(o.issues.length){const c=new(s?.Err??t)(o.issues.map(l=>Vr(l,a,Pi())));throw nh(c,s?.callee??e),c}return o.value};return e},Cl=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const c=new(s?.Err??t)(o.issues.map(l=>Vr(l,a,Pi())));throw nh(c,s?.callee??e),c}return o.value};return e},Pl=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new Xi;return s.issues.length?dh(t,s.issues,r):{success:!0,data:s.value}};function dh(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>Vr(r,n,Pi()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const Il=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?dh(t,s.issues,r):{success:!0,data:s.value}},KS=Symbol.for("zod.compile.invalid"),JS=Symbol.for("zod.compile.fallback"),jS=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==KS)return!0;if(i.definite===!0&&n===void 0)return!1}return QS(t,e,n)});function QS(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[JS]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new Xi;return s.issues.length===0}const eM=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},tM=t=>{const e=Rl(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,co(n,a))};return n},nM=t=>{const e=Rl(t),n=(i,r,s,a)=>e(i,r,s,co(n,a));return n},iM=t=>{const e=Cl(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,co(n,a))};return n},rM=t=>{const e=Cl(t),n=async(i,r,s,a)=>await e(i,r,s,co(n,a));return n},sM=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Pl(t)(e,n,r)},aM=t=>(e,n,i)=>Pl(t)(e,n,i),oM=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Il(t)(e,n,r)},cM=t=>async(e,n,i)=>Il(t)(e,n,i),lM=/^[cC][0-9a-z]{6,}$/,uM=/^[0-9a-z]+$/,dM=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,fM=/^[0-9a-vA-V]{20}$/,hM=/^[A-Za-z0-9]{27}$/,pM=/^[a-zA-Z0-9_-]{21}$/;function mM(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const gM=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,_M=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,hd=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,vM=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,xM="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function SM(){return new RegExp(xM,"u")}const MM=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,yM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,bM=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,EM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,wM=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,TM=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,AM=/^https?$/,RM=/^\+[1-9]\d{6,14}$/,fh="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function CM(t){return new RegExp(`^${t}$`)}const PM=CM(fh);function Wc(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function IM(t){return new RegExp(`^${Wc(t)}$`)}function LM(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${Wc({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${Wc({precision:t.precision})}`:n;return new RegExp(`^${fh}T(?:${i})$`)}const DM=/^[\s\S]{0,}$/,NM=/^-?\d+(?:\.\d+)?$/,UM=/^[^A-Z]*$/,OM=/^[^a-z]*$/,hn=re("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),Ll=t=>{const e=t.value;return!gS(e)&&e.length!==void 0},Ya={number:"number",bigint:"bigint",object:"date"},hh=re("$ZodCheckLessThan",(t,e)=>{hn.init(t,e);const n=Ya[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:Ya[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),ph=re("$ZodCheckGreaterThan",(t,e)=>{hn.init(t,e);const n=Ya[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:Ya[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),FM=re("$ZodCheckMultipleOf",(t,e)=>{hn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):_S(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),zM=re("$ZodCheckNumberFormat",(t,e)=>{hn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=sh[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),kM=re("$ZodCheckMaxLength",(t,e)=>{var n;hn.init(t,e),(n=t._zod.def).when??(n.when=Ll),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?Tl(r):s)<=e.maximum)return;const o=Al(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),BM=re("$ZodCheckMinLength",(t,e)=>{var n;hn.init(t,e),(n=t._zod.def).when??(n.when=Ll),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?Tl(r):s)>=e.minimum)return;const o=Al(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),GM=re("$ZodCheckLengthEquals",(t,e)=>{var n;hn.init(t,e),(n=t._zod.def).when??(n.when=Ll),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?Tl(r):s;if(a===e.length)return;const o=Al(r),c=a>e.length;i.issues.push({origin:o,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),lo=re("$ZodCheckStringFormat",(t,e)=>{var n,i;hn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),HM=re("$ZodCheckRegex",(t,e)=>{lo.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),$M=re("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=UM),lo.init(t,e)}),VM=re("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=OM),lo.init(t,e)}),WM=re("$ZodCheckIncludes",(t,e)=>{hn.init(t,e);const n=ao(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),XM=re("$ZodCheckStartsWith",(t,e)=>{hn.init(t,e);const n=new RegExp(`^${ao(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),ZM=re("$ZodCheckEndsWith",(t,e)=>{hn.init(t,e);const n=new RegExp(`.*${ao(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),qM=re("$ZodCheckOverwrite",(t,e)=>{hn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class YM{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const KM={major:4,minor:6,patch:7},Dt=re("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=KM;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,c,l)=>{if(o.memo)return o;let u=ai(o),d;for(const f of c){if(f._zod.def.when){if(IS(o)||!f._zod.def.when(o))continue}else if(u)continue;const h=o.issues.length,g=f._zod.check(o);if(g instanceof Promise&&l?.async===!1)throw new Xi;if(d||g instanceof Promise)d=(d??Promise.resolve()).then(async()=>{await g,o.issues.length!==h&&(Vc(o.issues,h,t),u||(u=ai(o,h)))});else{if(o.issues.length===h)continue;Vc(o.issues,h,t),u||(u=ai(o,h))}}return d?d.then(()=>o):o},a=(o,c,l)=>{if(ai(o))return o.aborted=!0,o;const u=s(c,r,l);if(u instanceof Promise){if(l.async===!1)throw new Xi;return u.then(d=>t._zod.parse(d,l))}return t._zod.parse(u,l)};t._zod.run=(o,c)=>{if(c.skipChecks)return t._zod.parse(o,c);if(c.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(d=>a(d,o,c)):a(u,o,c)}const l=t._zod.parse(o,c);if(l instanceof Promise){if(c.async===!1)throw new Xi;return l.then(u=>s(u,r,c))}return s(l,r,c)}}},{get"~standard"(){return ch(this,"~standard",gh(this))},set"~standard"(t){Ai(this,"~standard",t)}}),mh=(t,e)=>t.issues.length?{issues:t.issues.map(n=>Vr(n,e,Pi()))}:{value:t.value};async function JM(t,e){const n={async:!0};return mh(await t._zod.run({value:e,issues:[]},n),n)}function gh(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return mh(i,n)}catch{}return JM(t,e)},vendor:"zod",version:1}}const Dl=re("$ZodString",(t,e)=>{Dt.init(t,e),t._zod.pattern=e.pattern??DM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),bt=re("$ZodStringFormat",(t,e)=>{lo.init(t,e),Dl.init(t,e)}),jM=re("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=_M),bt.init(t,e)}),QM=re("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=hd(i))}else e.pattern??(e.pattern=hd());bt.init(t,e)}),ey=re("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=vM),bt.init(t,e)}),_h=1,Ka=2;function vh(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function ty(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?vh(t)||Ka:ny(t,e)}function ny(t,e){if(!e.normalize&&e.protocol?.source===AM.source&&!/^https?:\/\//i.test(t))return _h;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??Ka}return new URL(t)}catch{return Ka}}const iy=/[\t\n\r]/g;function pd(t){return t.replace(iy,"")}function ry(t,e){return e.lastIndex=0,e.test(t.hostname)}function sy(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const ay=re("$ZodURL",(t,e)=>{bt.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=ty(i,e);if(r===_h){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===Ka){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=pd(i);return}e.hostname&&!ry(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!sy(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:pd(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),oy=re("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=SM()),bt.init(t,e)}),cy=re("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?pM:mM(e.length)),bt.init(t,e)}),ly=re("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=lM),bt.init(t,e)}),uy=re("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=uM),bt.init(t,e)}),dy=re("$ZodULID",(t,e)=>{e.pattern??(e.pattern=dM),bt.init(t,e)}),fy=re("$ZodXID",(t,e)=>{e.pattern??(e.pattern=fM),bt.init(t,e)}),hy=re("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=hM),bt.init(t,e)}),py=re("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=LM(e)),bt.init(t,e)}),my=re("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=PM),bt.init(t,e)}),gy=re("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=IM(e)),bt.init(t,e)}),_y=re("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=gM),bt.init(t,e)}),vy=re("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=MM),bt.init(t,e)}),xy=/^[0-9a-fA-F:.]+$/;function xh(t){return xy.test(t)?vh(`http://[${t}]`):!1}const Sy=re("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=yM),bt.init(t,e),t._zod.check=n=>{xh(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),My=re("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=bM),bt.init(t,e)});function yy(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:xh(n)}const by=re("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=EM),bt.init(t,e),t._zod.check=n=>{yy(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function Sh(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const Mh=/^[0-9a-zA-Z+/]*={0,2}$/,Ey=re("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Mh),bt.init(t,e),t._zod.check=n=>{Sh(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),Nl=/^[A-Za-z0-9_-]*$/;function wy(t){if(!Nl.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return Sh(n)}const Ty=re("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=Nl),bt.init(t,e),t._zod.check=n=>{wy(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),Ay=re("$ZodE164",(t,e)=>{e.pattern??(e.pattern=RM),bt.init(t,e)});function Ry(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Cy=re("$ZodJWT",(t,e)=>{bt.init(t,e),t._zod.check=n=>{Ry(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),yh=re("$ZodNumber",(t,e)=>{Dt.init(t,e),t._zod.pattern=NM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),Py=re("$ZodNumberFormat",(t,e)=>{zM.init(t,e),yh.init(t,e)}),Iy=re("$ZodUnknown",(t,e)=>{Dt.init(t,e),t._zod.parse=n=>n}),Ly=re("$ZodNever",(t,e)=>{Dt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Dy(t,e){const n=ld(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[c,l]of ld(t._zod.def.checks))if(o>c&&l._zod.def.when(s)){const u=s.issues.length;return l._zod.check(s),s.issues[u].continue=!1,Vc(s.issues,u,t),s}}return r(s,a)}}const Ny=t=>Array.isArray(t)?t.length:-1;function md(t,e,n){t.issues.length&&e.issues.push(...oh(n,t.issues)),e.value[n]=t.value}const Uy=re("$ZodArray",(t,e)=>{Dt.init(t,e);const n=Zn.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let c=0;c<s.length;c++){const l=s[c],u=e.element._zod.run({value:l,issues:[]},r);if(u instanceof Promise)a.push(u.then(d=>md(d,i,c)));else if(md(u,i,c),o&&u.issues.length!==0&&ai(u))break}return a.length?Promise.all(a).then(()=>i):i},Dy(t,Ny)});function Ja(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...oh(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const Oy=[];function bh(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:Oy,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=bS(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function Eh(t,e,n,i,r,s,a){const o=[],c=r.keySet,l=r.catchall._zod,u=l.def.type,d=l.optin,f=l.optout;let h=0;for(const g in e){if(a&&n.issues.length!==h){if(ai(n,h))break;h=n.issues.length}if(c.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const y=l.run({value:e[g],issues:[]},i);y instanceof Promise?t.push(y.then(p=>Ja(p,n,g,e,d,f))):Ja(y,n,g,e,d,f)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const Fy=re("$ZodObject",(t,e)=>{Dt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const l=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),l.raw=u,u};l.raw=i,Object.defineProperty(e,"shape",{get:l})}const r=El(()=>bh(e));ht(t,"propValues",l=>{const u=l.def.shape,d={};for(const f in u){const h=u[f]._zod;if(h.values){Object.prototype.hasOwnProperty.call(d,f)||tr(d,f,new Set);for(const g of h.values)d[f].add(g);h.optin!==void 0&&d[f].add(void 0)}}return d});const s=qa,a=e.catchall;let o;const c=Zn.memoizer;c?.attach(t),t._zod.parse=(l,u)=>{o??(o=r.value);const d=l.value;if(!s(d))return l.issues.push({expected:"object",code:"invalid_type",input:d,inst:t}),l;l.value=c?c.alloc(t,l,{},u):{};const f=[],h=o.shape,g=u?.abortEarly;let y=l.issues.length;for(const p of o.allKeys){if(g&&l.issues.length!==y){if(ai(l,y))break;y=l.issues.length}if(p==="__proto__")continue;const m=h[p],x=m._zod.optin,T=m._zod.optout,S=m._zod.run({value:d[p],issues:[]},u);S instanceof Promise?f.push(S.then(R=>Ja(R,l,p,d,x,T))):Ja(S,l,p,d,x,T)}return a?Eh(f,d,l,u,r.value,t,g===!0):f.length?Promise.all(f).then(()=>l):l}}),zy=re("$ZodObjectJIT",(t,e)=>{Fy.init(t,e);const n=t._zod.parse,i=El(()=>bh(e)),r=Zn.memoizer,s=h=>{const g=i.value,y=g.symbolKeys,p=new YM(["payload","ctx"],{shape:h,inst:t,memo:r,syms:y}),m=R=>`shape[${R}]._zod.run({ value: input[${R}], issues: [] }, ctx)`,x=(R,A)=>`
          let ${R}_ab = false;
          for (let i = 0; i < ${R}.issues.length; i++) {
            const iss = ${R}.issues[i];
            iss.path = iss.path ? [${A}, ...iss.path] : [${A}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${R}_ab = true;
          }
          if (${R}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;p.write("const input = payload.value;");const T=Object.create(null);let S=0;for(const R of g.allKeys)T[R]=`key_${S++}`;p.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const R of g.allKeys){if(R==="__proto__")continue;const A=T[R],_=typeof R=="symbol"?`syms[${y.indexOf(R)}]`:xS(R),b=`${_} in input`,O=h[R],P=O?._zod?.optin,N=P!==void 0,z=O?._zod?.optout==="optional";if(p.write(`const ${A} = ${m(_)};`),N&&z){const Z=P==="optional"?`${A}_present`:`${A}.value !== undefined || ${A}_present`;p.write(`
        const ${A}_present = ${b};
        if (!${A}.issues.length || ${A}_present) {
          if (${A}.issues.length) {${x(A,_)}
          }

          if (${Z}) {
            newResult[${_}] = ${A}.value;
          }
        }

      `)}else N?(p.write(`
        if (${A}.issues.length) {${x(A,_)}
        }
      `),P==="defaulted"?p.write(`newResult[${_}] = ${A}.value;`):p.write(`
        if (${A}.value !== undefined || ${b}) {
          newResult[${_}] = ${A}.value;
        }
      `)):p.write(`
        const ${A}_present = ${b};
        if (${A}.issues.length) {${x(A,_)}
        }
        if (!${A}_present && !${A}.issues.length) {
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

        if (${A}_present) {
          newResult[${_}] = ${A}.value;
        }

      `)}return p.write("payload.value = newResult;"),p.write("return payload;"),p.compile()};let a;const o=qa,c=!Zn.jitless,u=c&&MS.value,d=e.catchall;let f;t._zod.parse=(h,g)=>{f??(f=i.value);const y=h.value;return o(y)?c&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),h=a(h,g),d?Eh([],y,h,g,f,t,g?.abortEarly===!0):h):n(h,g):(h.issues.push({expected:"object",code:"invalid_type",input:y,inst:t}),h)}});function gd(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!ai(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>Vr(a,i,Pi())))}),e)}const ky=re("$ZodUnion",(t,e)=>{Dt.init(t,e),ht(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),ht(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),ht(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),ht(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>wl(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const c=o._zod.run({value:i.value,issues:[]},r);if(c instanceof Promise)a.push(c),s=!0;else{if(c.issues.length===0)return c;a.push(c)}}return s?Promise.all(a).then(o=>gd(o,i,t,r)):gd(a,i,t,r)}}),By=re("$ZodIntersection",(t,e)=>{Dt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([c,l])=>_d(n,c,l)):_d(n,s,a)}});function Xc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Us(t)&&Us(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=Xc(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=Xc(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function _d(t,e,n){const i=new Map;let r;const s=new Map,a=(l,u)=>{let d;if(l.code==="unrecognized_keys"&&!l.path?.length)r??(r=l),d=l.keys;else if(l.code==="invalid_key"&&l.origin==="record"&&l.path?.length===1){const f=String(l.path[0]);s.has(f)||s.set(f,l),d=[f]}else return!1;for(const f of d)i.has(f)||i.set(f,{}),i.get(f)[u]=!0;return!0};for(const l of e.issues)a(l,"l")||t.issues.push(l);for(const l of n.issues)a(l,"r")||t.issues.push(l);const o=[...i].filter(([,l])=>l.l&&l.r).map(([l])=>l);if(o.length){const l=r?o.filter(u=>r.keys.includes(u)):[];l.length&&t.issues.push({...r,keys:l});for(const u of o)!l.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const c=Xc(e.value,n.value);if(!c.valid){if(ai(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return t.value=c.data,t}const Gy=re("$ZodEnum",(t,e)=>{Dt.init(t,e);const n=Hc(e.entries),i=new Set(n);t._zod.values=i,ht(t,"pattern",r=>{const s=Hc(r.def.entries).filter(a=>yS.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>ao(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),Hy=re("$ZodTransform",(t,e)=>{Dt.init(t,e),t._zod.optin="optional",Zn.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new uh(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new Xi;return n.value=r,n}});function vd(t,e){return t.value=e.issues.length?void 0:e.value,t}const wh=re("$ZodOptional",(t,e)=>{Dt.init(t,e),ht(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",ht(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),ht(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${wl(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>vd(n,s)):vd(n,r)}return e.innerType._zod.run(n,i)}}),$y=re("$ZodExactOptional",(t,e)=>{wh.init(t,e),ht(t,"values",n=>n.def.innerType._zod.values),ht(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),Vy=re("$ZodNullable",(t,e)=>{Dt.init(t,e),ht(t,"optin",n=>n.def.innerType._zod.optin),ht(t,"optout",n=>n.def.innerType._zod.optout),ht(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${wl(i.source)}|null)$`):void 0}),ht(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),Wy=re("$ZodDefault",(t,e)=>{Dt.init(t,e),t._zod.optin="defaulted",ht(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>xd(s,e)):xd(r,e)}});function xd(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const Xy=re("$ZodPrefault",(t,e)=>{Dt.init(t,e),t._zod.optin="defaulted",ht(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),Zy=re("$ZodNonOptional",(t,e)=>{Dt.init(t,e),ht(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>Sd(s,t)):Sd(r,t)}});function Sd(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function Md(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>Vr(r,i,Pi()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const qy=re("$ZodCatch",(t,e)=>{Dt.init(t,e),ht(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),ht(t,"optout",n=>n.def.innerType._zod.optout),ht(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>Md(n,s,e,i)):Md(n,r,e,i)}}),Yy=re("$ZodPipe",(t,e)=>{Dt.init(t,e),ht(t,"values",n=>n.def.in._zod.values),ht(t,"optin",n=>n.def.in._zod.optin),ht(t,"optout",n=>n.def.out._zod.optout),ht(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>xa(a,e.in,i)):xa(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>xa(s,e.out,i)):xa(r,e.out,i)}});function xa(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const Ky=re("$ZodReadonly",(t,e)=>{Dt.init(t,e),ht(t,"propValues",n=>n.def.innerType._zod.propValues),ht(t,"values",n=>n.def.innerType._zod.values),ht(t,"optin",n=>n.def.innerType?._zod?.optin),ht(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(yd):yd(r)}});function yd(t){return t.memo||(t.value=Object.freeze(t.value)),t}const Jy=re("$ZodCustom",(t,e)=>{hn.init(t,e),Dt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>bd(s,n,i,t));bd(r,n,i,t)}});function bd(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Os(r))}}class jy extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const Zc="~memo",Ed=[];function Th(t){return t!==null&&typeof t=="object"}function Wo(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const Ah=new WeakMap,gs=0,Na=1,Es=2;function Ua(t,e,n){const i=Ah.get(t);if(i!==void 0)return i?Es:gs;if(e.has(t))return Es;e.add(t);let r=gs;const s=u=>{if(r!==Es&&u?._zod){const d=Ua(u,e);d>r&&(r=d)}},a=(u,d)=>{let f=gs;for(const h of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,h);if(!g.enumerable)continue;const y=g.get?Na:g.value?._zod?Ua(g.value,e):gs;y>f&&(f=y)}return f},o=u=>{u>r&&(r=u)},c=t._zod.def;switch(c.type){case"object":{const u=Qf(c);o(u?a(u):Na),s(c.catchall);break}case"array":s(c.element);break;case"tuple":for(const u of c.items)s(u);s(c.rest);break;case"record":case"map":s(c.keyType),s(c.valueType);break;case"set":s(c.valueType);break;case"union":for(const u of c.options)s(u);break;case"intersection":s(c.left),s(c.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(c.innerType);break;case"pipe":s(c.in),s(c.out);break;case"function":s(c.input),s(c.output);break;case"lazy":{const u=c._cachedInner??void 0;o(u?Ua(u,e):Na);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in c){const d=Object.getOwnPropertyDescriptor(c,u);if(!d||d.get)continue;const f=d.value;if(!(!f||typeof f!="object")){if(f._zod)s(f);else if(Array.isArray(f))for(const h of f)s(h)}}}return e.delete(t),Qy(t,r)}function Qy(t,e){return e!==Na&&Ah.set(t,e===Es),e}function eb(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let Sa;const Ma=[],tb={alloc(t,e,n){const i=Sa;if(!i)return n;Sa=void 0;const r={value:n,issues:null};return i.set(e.value,r),Ma.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&ib(s,r.value))throw new jy;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(c,l)=>{if(n===void 0){const m=Ua(t,new Set);if(m===gs)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(c,l);m===Es||i?n=!0:i=!0}const u=c.value;if(!Th(u))return a(c,l);let d=l[Zc];d||(d={buckets:new WeakMap,backEdges:void 0},l[Zc]=d);let f;r===l?f=s:(f=eb(d,t),r=l,s=f);const h=f.get(u);if(h)return c.value=h.value,h.issues?h.issues.length&&c.issues.push(...Wo(h.issues)):(c.memo=!0,d.backEdges??(d.backEdges=new WeakSet),d.backEdges.add(h.value)),c;Sa=f;const g=Ma.length,y=a(c,l);Sa=void 0;const p=Ma.length>g?Ma.pop():void 0;return y instanceof Promise?y.then(m=>(p&&(p.issues=m.issues.length?Wo(m.issues):Ed),m)):(p&&(p.issues=y.issues.length?Wo(y.issues):Ed),y)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function nb(){return tb}function ib(t,e){const n=t[Zc]?.backEdges;return n!==void 0&&Th(e)&&n.has(e)}const rb=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=DS(s.input),c=r(o,s.input);return`Invalid input: expected ${a}, received ${c}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${rh(s.values[0])}`:`Invalid option: expected one of ${od(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${od(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function sb(){return{localeError:rb()}}var wd;class ab{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function ob(){return new ab}(wd=globalThis).__zod_globalRegistry??(wd.__zod_globalRegistry=ob());const _s=globalThis.__zod_globalRegistry;function Rh(t){return t.checks&&(t.checks=[...t.checks]),t}function cb(t,e){return new t(Rh({type:"string",...Fe(e)}))}function lb(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function ub(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function db(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function fb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function hb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function pb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function mb(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function gb(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function _b(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function vb(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function xb(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function Sb(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function Mb(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function yb(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function bb(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function Eb(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function wb(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function Tb(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function Ab(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function Rb(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function Cb(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function Pb(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function Ib(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function Lb(t,e){return new t({type:"string",format:"date",check:"string_format",...Fe(e)})}function Db(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function Nb(t,e){return new t({type:"string",format:"duration",check:"string_format",...Fe(e)})}function Ub(t,e){return new t(Rh({type:"number",checks:[],...Fe(e)}))}function Ob(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function Fb(t){return new t({type:"unknown"})}function zb(t,e){return new t({type:"never",...Fe(e)})}function Td(t,e){return new hh({check:"less_than",...Fe(e),value:t,inclusive:!1})}function Xo(t,e){return new hh({check:"less_than",...Fe(e),value:t,inclusive:!0})}function Ad(t,e){return new ph({check:"greater_than",...Fe(e),value:t,inclusive:!1})}function Zo(t,e){return new ph({check:"greater_than",...Fe(e),value:t,inclusive:!0})}function Rd(t,e){return new FM({check:"multiple_of",...Fe(e),value:t})}function Ch(t,e){return new kM({check:"max_length",...Fe(e),maximum:t})}function ja(t,e){return new BM({check:"min_length",...Fe(e),minimum:t})}function Ph(t,e){return new GM({check:"length_equals",...Fe(e),length:t})}function kb(t,e){return new HM({check:"string_format",format:"regex",...Fe(e),pattern:t})}function Bb(t){return new $M({check:"string_format",format:"lowercase",...Fe(t)})}function Gb(t){return new VM({check:"string_format",format:"uppercase",...Fe(t)})}function Hb(t,e){return new WM({check:"string_format",format:"includes",...Fe(e),includes:t})}function $b(t,e){return new XM({check:"string_format",format:"starts_with",...Fe(e),prefix:t})}function Vb(t,e){return new ZM({check:"string_format",format:"ends_with",...Fe(e),suffix:t})}function Wr(t){return new qM({check:"overwrite",tx:t})}function Wb(t){return Wr(e=>e.normalize(t))}function Xb(){return Wr(t=>t.trim())}function Zb(){return Wr(t=>t.toLowerCase())}function qb(){return Wr(t=>t.toUpperCase())}function Yb(){return Wr(t=>SS(t))}function Kb(t,e,n){return new t({type:"array",element:e,...Fe(n)})}function Jb(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Fe(n)})}function jb(t,e){const n=Qb(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(Os(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(Os(s))}},t(i.value,i)),e);return n}function Qb(t,e){const n=new hn({check:"custom",...Fe(e)});return n._zod.check=t,n}function ws(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&tr(t,i,n[i]);return t}function Ih(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??_s,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function Xr(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function Xt(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const f=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(t,e,f,u)}const d=t._zod.parent;d&&(a.ref||(a.ref=d),Xt(d,e,u),e.seen.get(d).isParent=!0)}const c=e.metadataRegistry.get(t);return c&&ws(a.schema,c),e.io==="input"&&nn(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function Cd(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function Lh(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const c=i.get(o);if(c&&c!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const d=t.external.registry.get(a[0])?.id,f=t.external.uri??(g=>g);if(d)return{ref:f(d)};const h=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=h,{defId:h,ref:`${f("__shared")}#/${o}/${Cd(h)}`}}const c="#",l=`${c}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:c};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:l+Cd(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:c,defId:l}=r(a);o.def={...o.schema},l&&(o.defId=l);const u=o.schema;for(const d in u)delete u[d];u.$ref=c};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const l=t.external.registry.get(a[0])?.id;if(e!==a[0]&&l){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function Dh(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;Dh(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const Nh=new Set(["type","properties","required","additionalProperties"]),Pd=["oneOf","anyOf"];function Id(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function qc(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!Nh.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const l of e){const u=l.properties?.[a]??Id(l);u!=null&&(o.some(d=>JSON.stringify(d)===JSON.stringify(u))||o.push(u))}const c=o.length===1?o[0]:qc(o)??{allOf:o};tr(n,a,c)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=Id(a);o&&!s.some(c=>JSON.stringify(c)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function eE(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of Nh)if(r in t)return;const n=e.filter(r=>Pd.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=qc(e);else{const r=n[0],s=Pd.find(c=>Array.isArray(r[c]));if(Object.keys(r).length!==1)return;const a=e.filter(c=>c!==r),o=r[s].map(c=>qc([...a,c]));if(o.some(c=>!c))return;i={[s]:o}}i&&(delete t.allOf,ws(t,i))}function Uh(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const c=t.seen.get(o);if(c.ref===null)return;const l=c.def??c.schema,u={...l},d=c.ref;if(c.ref=null,d){i(d);const h=t.seen.get(d),g=h.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(g)):ws(l,g),ws(l,u),o._zod.parent===d)for(const p in l)p==="$ref"||p==="allOf"||p in u||delete l[p];if(g.$ref&&h.def)for(const p in l)p==="$ref"||p==="allOf"||p in h.def&&JSON.stringify(l[p])===JSON.stringify(h.def[p])&&delete l[p]}const f=o._zod.parent;if(f&&f!==d){i(f);const h=t.seen.get(f);if(h?.schema.$ref&&(l.$ref=h.schema.$ref,h.def))for(const g in l)g==="$ref"||g==="allOf"||g in h.def&&JSON.stringify(l[g])===JSON.stringify(h.def[g])&&delete l[g]}t.override({zodSchema:o,jsonSchema:l,path:c.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())Dh(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const c of t.seen.values())for(const l of[c.schema,c.def]){const u=l?.allOf;if(!Array.isArray(u))continue;const d=o.get(u);d?d.push(l):o.set(u,[l])}for(const c of t.intersections)for(const l of o.get(c)??[])eE(l)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}ws(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const c=o[1];c.def&&c.defId&&(c.def.id===c.defId&&delete c.def.id,tr(a,c.defId,c.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:Qa(e,"input",t.processors),output:Qa(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function nn(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return nn(i.element,n);if(i.type==="set")return nn(i.valueType,n);if(i.type==="lazy")return nn(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return nn(i.innerType,n);if(i.type==="intersection")return nn(i.left,n)||nn(i.right,n);if(i.type==="record"||i.type==="map")return nn(i.keyType,n)||nn(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:nn(i.in,n)||nn(i.out,n);if(i.type==="object"){for(const r in i.shape)if(nn(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(nn(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(nn(r,n))return!0;return!!(i.rest&&nn(i.rest,n))}return!1}const tE=(t,e={})=>n=>{const i=Ih({...n,processors:e});return Xt(t,i),Lh(i,t),Uh(i,t)},Qa=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=Ih({...r??{},target:s,io:e,processors:n});return Xt(t,a),Lh(a,t),Uh(a,t)},Fr=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},zr=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},Ld=(t,e)=>{Fr(t,"minimum",e),zr(t,"maximum",e)},Oh=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},Fh=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},zh=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},kh=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},Dd=(t,e)=>Fr(t,"minimum",e.minimum),Nd=(t,e)=>zr(t,"maximum",e.maximum),Ud=t=>(e,n)=>{kh(e,n.format);const[i,r]=t[n.format];Fr(e,"minimum",i),zr(e,"maximum",r)},nE={greater_than:(t,e)=>Fr(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>zr(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>Oh(t,e.value),number_format:Ud(sh),bigint_format:Ud(ES),min_length:Dd,max_length:Nd,length_equals:(t,e)=>Ld(t,e.length),min_size:Dd,max_size:Nd,size_equals:(t,e)=>Ld(t,e.size),string_format:(t,e)=>{kh(t,e.format),e.pattern&&Fh(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>zh(t,e.mime)};function Hn(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)nE[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&Fr(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&Fr(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&zr(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&zr(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&Oh(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&zh(e,r.mime);for(const s of r.patterns??[])Fh(e,s);return e}const iE={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},rE=new Map([[Mh,wM],[Nl,TM]]),sE=t=>rE.get(t)??t,aE=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:c,contentEncoding:l,laxFormat:u}=Hn(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=iE[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const d=[...c].map(sE);d.length===1?r.pattern=d[0].source:d.length>1&&(r.allOf=[...d.map(f=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:f.source}))])}},oE=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=Hn(t);r.type=u?"integer":"number";const d=typeof l=="number"&&l>=(s??Number.NEGATIVE_INFINITY),f=typeof c=="number"&&c<=(a??Number.POSITIVE_INFINITY),h=e.target==="draft-04"||e.target==="openapi-3.0";if(d?h?(r.minimum=l,r.exclusiveMinimum=!0):r.exclusiveMinimum=l:typeof s=="number"&&(r.minimum=s),f?h?(r.maximum=c,r.exclusiveMaximum=!0):r.exclusiveMaximum=c:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const m of o)Number.isFinite(m)&&m!==0?g.add(Math.abs(m)):Xr(t,e,r,i,`A multipleOf divisor of ${m} cannot be represented in JSON Schema`);const[y,...p]=g;y!==void 0&&(r.multipleOf=y),p.length&&(r.allOf=[...r.allOf??[],...p.map(m=>({multipleOf:m}))])}},cE=(t,e,n,i)=>{n.not={}},lE=(t,e,n,i)=>{},uE=(t,e,n,i)=>{const r=t._zod.def,s=Hc(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},dE=(t,e,n,i)=>{Xr(t,e,n,i,"Custom types cannot be represented in JSON Schema")},fE=(t,e,n,i)=>{Xr(t,e,n,i,"Transforms cannot be represented in JSON Schema")},hE=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=Hn(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=Xt(s.element,e,{...i,path:[...i.path,"items"]})};function Yc(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?Yc(e.out):e.type==="catch"?Yc(e.innerType):t._zod.optin}const pE=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&Xr(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const l in a)tr(r.properties,l,Xt(a[l],e,{...i,path:[...i.path,"properties",l]}));const c=[];for(const l of Object.keys(a)){const u=s.shape[l];(e.io==="input"?Yc(u)===void 0:u._zod.optout===void 0)&&c.push(l)}c.length>0&&(r.required=c),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=Xt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},mE=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,c)=>Xt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",c]}));s?n.oneOf=a:n.anyOf=a},gE=(t,e,n,i)=>{const r=t._zod.def,s=Xt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=Xt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=l=>"allOf"in l&&Object.keys(l).length===1,c=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=c,e.intersections.push(c)},_E=(t,e,n,i)=>{const r=t._zod.def,s=Xt(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},vE=(t,e,n,i)=>{const r=t._zod.def;Xt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Ul=Symbol();function Bh(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,c)=>typeof c!="bigint"?c:(s=!0,null));return s?(Xr(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),Ul):JSON.parse(a)}const xE=(t,e,n,i)=>{const r=t._zod.def;Xt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=Bh(r.defaultValue,t,e,n,i);a!==Ul&&(n.default=a)},SE=(t,e,n,i)=>{const r=t._zod.def;Xt(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=Bh(r.defaultValue,t,e,n,i);a!==Ul&&(n._prefault=a)},ME=(t,e,n,i)=>{const r=t._zod.def;Xt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{Xr(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},yE=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;Xt(a,e,i);const o=e.seen.get(t);o.ref=a},bE=(t,e,n,i)=>{const r=t._zod.def;Xt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},Gh=(t,e,n,i)=>{const r=t._zod.def;Xt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Od=new WeakSet([Object.prototype,Error.prototype]);function ya(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const EE=(t,e)=>{XS.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);Od.has(n)||(Od.add(n),ya(n,"format",i=>r=>YS(i,r)),ya(n,"flatten",i=>r=>qS(i,r)),ya(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,$c,2)}),ya(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,$c,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},wn=re("ZodError",EE,void 0,{Parent:Error}),wE=Rl(wn),TE=Cl(wn),AE=Pl(wn),RE=Il(wn),CE=tM(wn),PE=nM(wn),IE=iM(wn),LE=rM(wn),DE=sM(wn),NE=aM(wn),UE=oM(wn),OE=cM(wn);function FE(){Zn.localeError||Pi(sb())}function Ol(){Zn.memoizer||Pi({memoizer:nb()})}const Nt=re("ZodType",(t,e)=>(FE(),Dt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(xn(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return Ci(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(Lw(t,e))},superRefine(t,e){return this.check(Dw(t,e))},overwrite(t){return this.check(Wr(t))},optional(){return kd(this)},exactOptional(){return xw(this)},nullable(){return Bd(this)},nullish(){return kd(Bd(this))},nonoptional(t){return ww(this,t)},array(){return Mr(this)},or(t){return pw([this,t])},and(t){return gw(this,t)},transform(t){return Gd(this,vw(t))},default(t){return yw(this,t)},prefault(t){return Ew(this,t)},catch(t){return Aw(this,t)},pipe(t){return Gd(this,t)},readonly(){return Pw(this)},describe(t){const e=this.clone();return _s.add(e,{description:t}),e},meta(...t){if(t.length===0)return _s.get(this);const e=this.clone();return _s.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return ch(this,"~standard",{...gh(this),jsonSchema:{input:Qa(this,"input"),output:Qa(this,"output")}})},set"~standard"(t){Ai(this,"~standard",t)},parse:function t(e,n){return wE(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await TE(this,e,n,{callee:t})},safeParse(t,e){return AE(this,t,e)},async safeParseAsync(t,e){return RE(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){Ai(this,"spa",t)},validate(t,e){return jS(this,t,e)},validateAsync(t,e){return eM(this,t,e)},encode:function t(e,n){return CE(this,e,n,{callee:t})},decode:function t(e,n){return PE(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await IE(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await LE(this,e,n,{callee:t})},safeEncode(t,e){return DE(this,t,e)},safeDecode(t,e){return NE(this,t,e)},async safeEncodeAsync(t,e){return UE(this,t,e)},async safeDecodeAsync(t,e){return OE(this,t,e)},toJSONSchema(t){return tE(this,{})(t)},get description(){return _s.get(this)?.description},get _def(){return this._zod.def}}),Hh=re("_ZodString",(t,e)=>{Dl.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>aE(t,n,i)},lh({format:t=>Hn(t).format??null,minLength:t=>Hn(t).minimum??null,maxLength:t=>Hn(t).maximum??null},{regex(...t){return this.check(kb(...t))},includes(...t){return this.check(Hb(...t))},startsWith(...t){return this.check($b(...t))},endsWith(...t){return this.check(Vb(...t))},min(...t){return this.check(ja(...t))},max(...t){return this.check(Ch(...t))},length(...t){return this.check(Ph(...t))},nonempty(...t){return this.check(ja(1,...t))},lowercase(t){return this.check(Bb(t))},uppercase(t){return this.check(Gb(t))},trim(){return this.check(Xb())},normalize(...t){return this.check(Wb(...t))},toLowerCase(){return this.check(Zb())},toUpperCase(){return this.check(qb())},slugify(){return this.check(Yb())}})),zE=re("ZodString",(t,e)=>{Dl.init(t,e),Hh.init(t,e)},{email(t){return this.check(lb($E,t))},url(t){return this.check(mb(WE,t))},jwt(t){return this.check(Pb(aw,t))},emoji(t){return this.check(gb(XE,t))},guid(t){return this.check(ub(VE,t))},uuid(t){return this.check(db(ba,t))},uuidv4(t){return this.check(fb(ba,t))},uuidv6(t){return this.check(hb(ba,t))},uuidv7(t){return this.check(pb(ba,t))},nanoid(t){return this.check(_b(ZE,t))},cuid(t){return this.check(vb(qE,t))},cuid2(t){return this.check(xb(YE,t))},ulid(t){return this.check(Sb(KE,t))},base64(t){return this.check(Ab(iw,t))},base64url(t){return this.check(Rb(rw,t))},xid(t){return this.check(Mb(JE,t))},ksuid(t){return this.check(yb(jE,t))},ipv4(t){return this.check(bb(QE,t))},ipv6(t){return this.check(Eb(ew,t))},cidrv4(t){return this.check(wb(tw,t))},cidrv6(t){return this.check(Tb(nw,t))},e164(t){return this.check(Cb(sw,t))},datetime(t){return this.check(Ib(kE,t))},date(t){return this.check(Lb(BE,t))},time(t){return this.check(Db(GE,t))},duration(t){return this.check(Nb(HE,t))}});function at(t){return cb(zE,t)}const Tt=re("ZodStringFormat",(t,e)=>{bt.init(t,e),Hh.init(t,e)}),kE=re("ZodISODateTime",(t,e)=>{py.init(t,e),Tt.init(t,e)}),BE=re("ZodISODate",(t,e)=>{my.init(t,e),Tt.init(t,e)}),GE=re("ZodISOTime",(t,e)=>{gy.init(t,e),Tt.init(t,e)}),HE=re("ZodISODuration",(t,e)=>{_y.init(t,e),Tt.init(t,e)}),$E=re("ZodEmail",(t,e)=>{ey.init(t,e),Tt.init(t,e)}),VE=re("ZodGUID",(t,e)=>{jM.init(t,e),Tt.init(t,e)}),ba=re("ZodUUID",(t,e)=>{QM.init(t,e),Tt.init(t,e)}),WE=re("ZodURL",(t,e)=>{ay.init(t,e),Tt.init(t,e)}),XE=re("ZodEmoji",(t,e)=>{oy.init(t,e),Tt.init(t,e)}),ZE=re("ZodNanoID",(t,e)=>{cy.init(t,e),Tt.init(t,e)}),qE=re("ZodCUID",(t,e)=>{ly.init(t,e),Tt.init(t,e)}),YE=re("ZodCUID2",(t,e)=>{uy.init(t,e),Tt.init(t,e)}),KE=re("ZodULID",(t,e)=>{dy.init(t,e),Tt.init(t,e)}),JE=re("ZodXID",(t,e)=>{fy.init(t,e),Tt.init(t,e)}),jE=re("ZodKSUID",(t,e)=>{hy.init(t,e),Tt.init(t,e)}),QE=re("ZodIPv4",(t,e)=>{vy.init(t,e),Tt.init(t,e)}),ew=re("ZodIPv6",(t,e)=>{Sy.init(t,e),Tt.init(t,e)}),tw=re("ZodCIDRv4",(t,e)=>{My.init(t,e),Tt.init(t,e)}),nw=re("ZodCIDRv6",(t,e)=>{by.init(t,e),Tt.init(t,e)}),iw=re("ZodBase64",(t,e)=>{Ey.init(t,e),Tt.init(t,e)}),rw=re("ZodBase64URL",(t,e)=>{Ty.init(t,e),Tt.init(t,e)}),sw=re("ZodE164",(t,e)=>{Ay.init(t,e),Tt.init(t,e)}),aw=re("ZodJWT",(t,e)=>{Cy.init(t,e),Tt.init(t,e)}),$h=re("ZodNumber",(t,e)=>{yh.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>oE(t,n,i,r),t.isFinite=!0},lh({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=Hn(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=Hn(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=Hn(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>Hn(t).format??null},{gt(t,e){return this.check(Ad(t,e))},gte(t,e){return this.check(Zo(t,e))},min(t,e){return this.check(Zo(t,e))},lt(t,e){return this.check(Td(t,e))},lte(t,e){return this.check(Xo(t,e))},max(t,e){return this.check(Xo(t,e))},int(t){return this.check(Fd(t))},safe(t){return this.check(Fd(t))},positive(t){return this.check(Ad(0,t))},nonnegative(t){return this.check(Zo(0,t))},negative(t){return this.check(Td(0,t))},nonpositive(t){return this.check(Xo(0,t))},multipleOf(t,e){return this.check(Rd(t,e))},step(t,e){return this.check(Rd(t,e))},finite(){return this}}));function un(t){return Ub($h,t)}const ow=re("ZodNumberFormat",(t,e)=>{Py.init(t,e),$h.init(t,e)});function Fd(t){return Ob(ow,t)}const cw=re("ZodUnknown",(t,e)=>{Iy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>lE()});function zd(){return Fb(cw)}const lw=re("ZodNever",(t,e)=>{Ly.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>cE(t,n,i)});function uw(t){return zb(lw,t)}const dw=re("ZodArray",(t,e)=>{Ol(),Uy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>hE(t,n,i,r),t.element=e.element},{min(t,e){return this.check(ja(t,e))},nonempty(t){return this.check(ja(1,t))},max(t,e){return this.check(Ch(t,e))},length(t,e){return this.check(Ph(t,e))},unwrap(){return this.element}});function Mr(t,e){return Kb(dw,t,e)}const fw=re("ZodObject",(t,e)=>{Ol(),zy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>pE(t,n,i,r),zS(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return Vi(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(xn(this._zod.def,{catchall:t}))},passthrough(){return this.clone(xn(this._zod.def,{catchall:zd()}))},loose(){return this.clone(xn(this._zod.def,{catchall:zd()}))},strict(){return this.clone(xn(this._zod.def,{catchall:uw()}))},strip(){return this.clone(xn(this._zod.def,{catchall:void 0}))},extend(t){return AS(this,t)},safeExtend(t){return RS(this,t)},merge(t){return CS(this,t)},pick(t){return wS(this,t)},omit(t){return TS(this,t)},partial(...t){return cd(Vh,this,t[0])},exactPartial(...t){return cd(Wh,this,t[0],"exactPartial")},required(...t){return PS(Xh,this,t[0])}});function ti(t,e){const n={type:"object",shape:t??{},...Fe(e)};return new fw(n)}const hw=re("ZodUnion",(t,e)=>{ky.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>mE(t,n,i,r),t.options=e.options});function pw(t,e){return new hw({type:"union",options:t,...Fe(e)})}const mw=re("ZodIntersection",(t,e)=>{By.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>gE(t,n,i,r)});function gw(t,e){return new mw({type:"intersection",left:t,right:e})}const Kc=re("ZodEnum",(t,e)=>{Gy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(i,r,s)=>uE(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Kc({...e,checks:[],...Fe(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new Kc({...e,checks:[],...Fe(r),entries:s})}});function Vi(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new Kc({type:"enum",entries:n,...Fe(e)})}const _w=re("ZodTransform",(t,e)=>{Ol(),Hy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>fE(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new uh(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(Os(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(Os(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function vw(t){return new _w({type:"transform",transform:t})}const Vh=re("ZodOptional",(t,e)=>{wh.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Gh(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function kd(t){return new Vh({type:"optional",innerType:t})}const Wh=re("ZodExactOptional",(t,e)=>{$y.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Gh(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function xw(t){return new Wh({type:"optional",innerType:t})}const Sw=re("ZodNullable",(t,e)=>{Vy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>_E(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Bd(t){return new Sw({type:"nullable",innerType:t})}const Mw=re("ZodDefault",(t,e)=>{Wy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>xE(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function yw(t,e){return new Mw({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():ih(e)}})}const bw=re("ZodPrefault",(t,e)=>{Xy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>SE(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Ew(t,e){return new bw({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():ih(e)}})}const Xh=re("ZodNonOptional",(t,e)=>{Zy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>vE(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function ww(t,e){return new Xh({type:"nonoptional",innerType:t,...Fe(e)})}const Tw=re("ZodCatch",(t,e)=>{qy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ME(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function Aw(t,e){return new Tw({type:"catch",innerType:t,catchValue:typeof e=="function"?e:BS(e)})}const Rw=re("ZodPipe",(t,e)=>{Yy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>yE(t,n,i,r),t.in=e.in,t.out=e.out});function Gd(t,e){return new Rw({type:"pipe",in:t,out:e})}const Cw=re("ZodReadonly",(t,e)=>{Ky.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>bE(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Pw(t){return new Cw({type:"readonly",innerType:t})}const Iw=re("ZodCustom",(t,e)=>{Jy.init(t,e),Nt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>dE(t,n,i,r)});function Lw(t,e={}){return Jb(Iw,t,e)}function Dw(t,e){return jb(t,e)}const Nw=ti({id:at(),name:at(),role:at(),state:Vi(["idle","thinking","working","reviewing"]),stationId:Vi(["culture","analyzer","explorer","notebook"]),boredom:un().min(0).max(100).nullable(),boredomSpectrum:ti({position:un().min(0).max(1),color:at(),regime:at()}).optional()});ti({runId:at(),lastSequence:un().int().nonnegative(),status:Vi(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:un(),title:at().optional(),config:ti({mode:Vi(["tinker_modal","recorded"]),arm:Vi(["A","B","C","D","full"]),rounds:un(),task:at().optional(),seed:un().nullable(),model:at().nullable()}),sourceCommit:at(),progress:un().min(0).max(1),round:un(),boredom:un(),regime:at(),value:un().nullable(),reference:un().nullable(),agents:Mr(Nw),findings:Mr(ti({agent:at().optional(),role:at(),message:at(),round:un().optional(),memoryId:at().optional()})),results:Mr(ti({agent:at(),round:un(),kind:at(),status:at(),value:un().nullable(),commit:at().nullable().optional(),description:at(),sources:Mr(at()).optional()})),sources:Mr(ti({id:at().nullable(),title:at().nullable(),url:at().nullable(),query_id:at().nullable()})),error:at().nullable(),metric:ti({name:at(),unit:at(),direction:Vi(["minimize","maximize"])}),provenance:ti({llm:at(),gpu:at(),exa:at(),memory:at(),execution:at().optional()})});async function Zh(t,e){{const n=jf(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);return i.json()}}const Hd=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],_i=t=>typeof t=="string"?t:"";function Uw(t){const e=Hd(t?.entities?.sources),n=new Map(e.map(o=>[_i(o.url),o]).filter(([o])=>o)),i=Hd(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(c=>{const l=_i(c),u=n.get(l);return{study:_i(o.question)||_i(o.headline)||_i(o.id),url:l,sourceId:u?String(u.id??u.source_id??""):"",title:u?_i(u.title):""}})),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(_i(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&/search|exa/.test(_i(o.payload?.kind))).length,memoryRecalls:s,pastdev:a}}function Ow(t,e,n){const i=e.citations.slice(0,12).map(r=>`<li><span>${n(r.study)}</span> ${r.sourceId?`<button class="chip" data-source="${n(r.sourceId)}">Exa result: ${n(r.title||r.url)}</button>`:`${/^https?:\/\//i.test(r.url)?`<a href="${n(r.url)}" target="_blank" rel="noopener noreferrer">${n(r.url)}</a>`:`<code>${n(r.url)}</code>`} <em>no Exa result in this recording</em>`}</li>`).join("");return`<div class="intro-card"><p class="eyebrow">${n(t.event.title)} · ${n(t.event.dates)} · ${n(t.event.host)}</p><h1>${n(t.replay.title)}</h1><p>${n(t.event.summary)}</p>
<section><h2>Tools we used</h2><ul class="intro-tools">${t.tools.map(r=>`<li><b>${n(r.name)}</b> ${n(r.detail)}</li>`).join("")}</ul></section>
<section><h2>Authors</h2><p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></section>
<section><h2>${n(t.boredom.title)}</h2>${t.boredom.paragraphs.map(r=>`<p>${n(r)}</p>`).join("")}<p class="muted">${n(t.boredom.source)}</p></section>
<details class="intro-trail"><summary>How we use Exa / past.dev</summary><p>This run: ${e.exaSearches} literature searches, ${e.sources} Exa source cards, ${e.memoryRecalls} shared-memory recalls${e.pastdev?" (past.dev)":" (local memory backend)"}.</p>${i?`<ul class="intro-cites">${i}</ul>`:'<p class="muted">No study citations in this recording yet.</p>'}</details>
<button id="intro-start" class="intro-start">${n(t.replay.button)} →</button></div>`}const Fw={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Built in one weekend at the SF AI Research Hack (Nov 14–15, hosted by Iterate): a swarm of AI scientists that notices when it is bored and changes approach."},zw=[{name:"Tinker",detail:"Kimi via Thinking Machines powers every researcher in the swarm."},{name:"Exa",detail:"Research search: workers look up prior work and public datasets before proposing a study."},{name:"past.dev",detail:"Shared swarm memory: agents recall what has already been tried and write back what they learned."},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],kw={placeholder:!0,names:["[AUTHORS — names to come]"]},Bw={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},Gw={title:"The Ig Nobel prize hunt",button:"Watch the replay"},Hw={event:Fw,tools:zw,authors:kw,boredom:Bw,replay:Gw};function $w(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function Vw(t){return t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${qh(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function Ww(t,e){return!!t.live||e<t.totalTicks}function uo(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function Xw(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function Zw(t,e){return t.filter(n=>n.tick<=e)}function qw(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const qh=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function Yw(t){const e=t.publish_errors;return Array.isArray(e)?e.filter(n=>n.kind!=="recovered").length:typeof e=="number"?e:0}function Kw(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}function Jw(t){const e=t.stale?`LIVE RUN STALLED${t.lastUpdateTs?" · NO UPDATES SINCE "+qh(t.lastUpdateTs):""}`:t.live?"FOLLOWING LIVE SWARM":"SWARM RUN · FINISHED",n=Yw(t);return n?`${e} · ${n} PUBLISH ERROR${n===1?"":"S"}`:e}const $d=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function jw(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const c=[...n[a]||[]],l=new Map(c.map((u,d)=>[$d(u),d]));for(const u of o){const d=l.get($d(u));d===void 0?c.push(u):c[d]=u}n[a]=c}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function Qw(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return jw(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const Vd={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function eT(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function Wd(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Xd={B:"BIO",C:"CHEM",P:"PHYSICS"};function tT(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=eT(t.name);if(Vd[n])return{initial:r,familyKey:"S",familyLabel:Vd[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:Wd(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const l=Wd(a);return{initial:r,familyKey:l,familyLabel:Xd[l]||a.toUpperCase(),staff:!1,color:i}}const c=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:c,familyLabel:Xd[c]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const nT={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function Yh(t){return t?nT[t]||t.replaceAll("_"," ").toLowerCase():""}function iT(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const rT={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function Kh(t){return rT[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function sT(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function Jh(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!sT(e)}function aT(t,e,n=110){const i=[Kh(t.type),e].filter(Boolean).join(" · ");if(!Jh(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i} — ${r.length>n?r.slice(0,n-1)+"…":r}`}function oT(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const ds=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function cT(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=ds(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=ds(a.mechanism)||i.mechanism,i.method=ds(a.method)||i.method),i.role=ds(s.role)||i.role}else r.type==="study.registered"&&(i.field=ds(s.field)||i.field)}return i}function lT(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const Zd={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function uT(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:Zd[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:Zd[i]?.[1]||"",names:r}))}function dT(t,e){return e-t<=1}function fT(t){return t.live?t.totalTicks:0}function hT(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function jh(t,e,n){return!!t?.live&&n&&dT(e,t.totalTicks)}function Qh(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function pT(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(jh(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=Qh(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}const qd={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},qo=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function Yo(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const vi=t=>typeof t=="string"?t.trim():"";function mT(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},c=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const l=vi(o.regime);if(!l)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",d=s.get(u);s.set(u,l),c&&d!==l&&qd[l]&&r.push({tick:a.tick,kind:"regime",title:qd[l],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(c)if(a.type==="discovery.made"){const l=qo(o.metric_value),u=qo(o.previous_best),d=vi(o.title),f=l==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${Yo(l)}${u==null?"":` (was ${Yo(u)})`}`,h=qo(o.reward);r.push({tick:a.tick,kind:"best",title:l==null?"New discovery!":"New best!",detail:[f||(h==null?"":`reward ${Yo(h)}`),d].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:vi(o.award)||vi(o.prize)||"Award issued",detail:[vi(o.title)||vi(o.headline),vi(o.citation)||vi(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function gT(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function _T(t,e,n,i=!0){const r=c=>typeof c=="number"&&Number.isFinite(c)?c:null,s=t.filter(c=>(c.tick??0)<=n).map(c=>({id:c.id,tick:c.tick??0,raw:r(c.value),value:i?r(c.value):null,outcome:gT(c.status,c.kind),agent:c.agent,description:c.description,status:c.status})),a=[],o=[];for(const c of e){if(c.tick>n||c.tick<0)continue;const l=c.snapshot.value;if(l==null||!Number.isFinite(l))continue;const u=a.at(-1);(!u||u[1]!==l)&&(u&&o.push([c.tick,l]),a.push([c.tick,l]))}return{points:s,best:a,newBest:o}}const kn={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},fs=t=>String(Number(t.toPrecision(4)));function vT(t,e,n,i){const r=[...t.points.map(b=>b.value),...t.best.map(b=>b[1])].filter(b=>b!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,c=52,l=560,u=16,d=132,f=150,h=Math.max(1,n),g=a===s?s-o/2:s,y=a===s?o:a-s,p=b=>c+Math.min(1,b/h)*(l-c),m=b=>d-(b-g)/y*(d-u),x=t.best.map(([b,O],P)=>`${P?"H":"M"}${p(b).toFixed(1)} ${P?`V${m(O).toFixed(1)}`:m(O).toFixed(1)}`).join(""),T=t.best.length?`<path class="best-line" d="${x}H${p(h).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",S=b=>{const O=p(b.tick).toFixed(1),P=`${i(b.agent)} · ${i(b.status)} · ${b.raw==null?"no score":fs(b.raw)} · ${i(b.description)}`,N=`<title>${P}</title>`,z=b.id?` data-experiment="${i(b.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${P}"`:"";if(b.value==null&&b.outcome!=="crashed")return`<circle class="pt ${b.outcome}"${z} cx="${O}" cy="${f}" r="${b.outcome==="discarded"?3.5:4.5}" fill="${b.outcome==="discarded"?"none":kn[b.outcome]}" stroke="${kn[b.outcome]}" stroke-width="1.6">${N}</circle>`;if(b.value==null)return`<g class="pt crashed"${z}>${N}<path d="M${+O-4} ${f-4}l8 8m0 -8l-8 8" stroke="${kn.crashed}" stroke-width="2"/></g>`;const Z=m(b.value).toFixed(1);return b.outcome==="crashed"?`<g class="pt crashed"${z}>${N}<path d="M${+O-4} ${+Z-4}l8 8m0 -8l-8 8" stroke="${kn.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${b.outcome}"${z} cx="${O}" cy="${Z}" r="${b.outcome==="discarded"?3.5:4.5}" fill="${b.outcome==="discarded"?"none":kn[b.outcome]}" stroke="${kn[b.outcome]}" stroke-width="1.6">${N}</circle>`},R=t.newBest.map(([b,O])=>`<path class="new-best" d="M${p(b).toFixed(1)} ${(m(O)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${fs(O)} at tick ${b}</title></path>`).join(""),A=e.direction==="maximize"?"↑ better":"↓ better",_=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${c} ${u-4}V${d+4}H${l}" fill="none" stroke="#79918b"/><text x="${c-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${fs(a)}</text><text x="${c-6}" y="${d}" text-anchor="end" fill="#b9cac2" font-size="9">${fs(s)}</text><text x="${c-6}" y="${f+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(b=>b.value==null&&b.raw!=null)?"other measure":"no score"}</text><path d="M${c} ${f}H${l}" stroke="#ffffff14" stroke-dasharray="3 4"/>${T}${t.points.map(S).join("")}${R}${_?`<text x="${l}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${fs(_[1])}</text>`:""}<text x="${c}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${A}</text><g font-size="9" fill="#b9cac2" transform="translate(${c} 186)"><circle cx="0" cy="-3" r="4" fill="${kn.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${kn.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${kn.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${kn.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}const xT={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel prize hunt"};function Yd(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function ST(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function ep(t){return t.task_title||xT[ST(t)]||t.title}function Jc(t){if(!t?.name)return"";const e=t.name.replaceAll("_"," ");return t.direction==="maximize"?`${e} ↑ higher is better`:`${e} ↓ lower is better`}function Fl(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${Yd(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${Yd(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function MT(t){const e=t.publish_errors;return Array.isArray(e)?e.length:typeof e=="number"?e:0}function yT(t){const e=MT(t);return e?`${e} publish error${e===1?"":"s"}`:""}function bT(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function ET(t){const e=Fl(t),n=t.sample===!1?Kw({...t,stale:e.status==="stale",live:e.status==="live"}):"",i=ep(t),r=i===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[n+i,r,t.sample===!1&&e.status==="stopped"?e.label.toLowerCase():"",t.sample===!1?bT(t):""].filter(Boolean).join(" · ")}function wT(t,e){const n=[["Live now",t.filter(r=>r.sample===!1&&r.live)],["Swarm runs",t.filter(r=>r.sample===!1&&!r.live)],["Recorded samples",t.filter(r=>r.sample!==!1)]],i=r=>`<option value="${e(r.id)}">${e(ET(r))}</option>`;return n.filter(([,r])=>r.length).map(([r,s])=>`<optgroup label="${r}">${s.map(i).join("")}</optgroup>`).join("")}function tp(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function np(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function jc(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function TT(t,e,n){const i=tp(t),r=[],s=new Map,a=new Set,o=new Set,c=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let l=0;const u=new Set,d=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),f=.25,h=f*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=d;g+=f){for(;l<c.length&&c[l].tick<=g;){const p=c[l++];if(p.type==="experiment.started"){p.agentId&&(a.add(p.agentId),o.add(p.agentId));continue}if(p.type==="experiment.finished"){p.agentId&&o.delete(p.agentId);continue}for(const m of[p.agentId,...p.payload?.to_agent_ids||[],p.refs?.to_agent_id].filter(Boolean)){u.add(m);const x=s.get(m);x&&!x.table&&(x.pending=!0)}}const y=uo(t.frames,g)?.snapshot.agents||[];np(y,g,i).forEach(p=>{const m=y.findIndex(S=>S.id===p.id);let x=s.get(p.id);if(!x){x={p:{...Bc(m),atTable:u.has(p.id)},path:[],leg:0,dwell:u.has(p.id)?2.5:0,pending:!1,table:u.has(p.id),lab:!1},s.set(p.id,x);return}if(a.delete(p.id)&&(x.lab=!0,x.table=!1,x.dwell=0,x.p.atTable=!1,x.p.atLab=!1,x.path=Da(x.p,Gc(jc({...p,activity:"experimenting"}),m),e,n)),x.lab&&!x.path.length&&!x.p.atLab&&(x.p.atLab=!0,x.dwell=4),x.dwell>0){x.dwell=Math.max(0,x.dwell-h),x.p.atTable=x.table;return}if(x.lab&&x.p.atLab){if(o.has(p.id))return;x.lab=!1,x.p.atLab=!1}if(x.p.atTable=!1,!x.path.length){x.table&&(x.table=!1,x.pending=!1,x.leg=0);const R=[Gc(jc({...p,activity:"experimenting"}),m),{x:2.7+m%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(x.leg>=R.length&&x.pending)x.table=!0,x.path=Da(x.p,Bc(m),e,n);else{const A=R[x.leg%R.length];x.leg++,x.path=Da(x.p,A,e,n)}}let T=h*2.1;for(;x.path.length&&T>0;){const S=x.path[0],R=Math.hypot(S.x-x.p.x,S.z-x.p.z);R<=T?(x.p.x=S.x,x.p.z=S.z,T-=R,x.path.shift()):(x.p.x+=(S.x-x.p.x)/R*T,x.p.z+=(S.z-x.p.z)/R*T,T=0)}!x.path.length&&x.lab&&(x.p.atLab=!0,x.dwell=4),!x.path.length&&x.table&&(x.dwell=3,x.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([p,m])=>[p,{...m.p}]))})}return r}function AT(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function RT(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const c=o.payload?.text||o.message||"";if(!c.trim())continue;const l=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:AT(i(c)),peers:l.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const Ko=(t,e)=>t.filter(e).at(-1),kr=(t,e)=>t.filter(n=>n.tick<=e),Me=t=>typeof t=="string"&&t.trim()?t.trim():null,Rt=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Ts=t=>typeof t=="boolean"?t:null;function Fs(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const Qc=t=>new Map(t.map(e=>[String(e.id),e]));function Kd(t){const e=Me(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:Me(n.idea)||Me(n.text)||e}:{text:e}}catch{return{text:e}}}function zs(t,e,n){if(!t)return null;const i=kr(t.events,n).filter(S=>S.refs?.experiment_id===e);if(!i.length)return null;const r=Qc(Fs(t,"experiments")).get(e)||{},s=i.find(S=>S.type==="experiment.started"),a=Ko(i,S=>S.type==="experiment.finished"),o=Ko(i,S=>S.type==="gate.checked"),c=Ko(i,S=>S.type==="verdict.issued"),l=i.find(S=>S.refs?.study_id),u=Me(r.hypothesis_id)||Me(s?.refs?.hypothesis_id),d=u?kr(t.events,n).find(S=>S.type==="hypothesis.proposed"&&S.refs?.hypothesis_id===u):void 0,f=d?Qc(Fs(t,"hypotheses")).get(u)||{}:null,h=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(h.reasons)&&h.reasons.length>0||typeof h.pass=="boolean"||Rt(h.attempts)>0,y=o?.payload||{},p=[...Array.isArray(y.reasons)?y.reasons:[],...a&&Array.isArray(h.reasons)?h.reasons:[]].map(String),m=t.events.some(S=>S.type==="verdict.issued"&&S.refs?.experiment_id===e),x=c||a&&!m?r.verdict:null,T=c?.payload||{};return{id:e,agentId:Me(r.agent_id)||s?.agentId||i[0].agentId||null,round:Rt(r.round)??Rt(i[0].round),kind:Me(r.kind),commit:Me(r.commit)||Me(y.candidate_commit),role:Me(r.role)||Me(s?.payload?.role),description:Me(r.description)||Me(s?.payload?.description)||Me(s?.message),idea:f?{text:Kd(f.text||d?.payload?.text).text,rationale:Me(f.rationale)||Me(d?.payload?.rationale)||Me(Kd(f.text||d?.payload?.text).rationale),predictedDelta:Rt(f.predicted_delta)??Rt(r.predicted_delta),sources:(Array.isArray(f.source_ids)?f.source_ids:[]).map(String)}:null,descriptor:r.descriptor||y.descriptor||null,gate:o||a&&g?{pass:Ts(y.pass)??Ts(h.pass),reasons:[...new Set(p)],attempts:Rt(h.attempts),text:Me(y.text)||Me(o?.message),priorArt:(Array.isArray(y.prior_art)?y.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:Me(a.payload?.status)||Me(r.status),metric:Rt(a.payload?.metric_value)??Rt(r.metric_value),reward:Rt(a.payload?.reward),text:Me(a.payload?.text)||Me(a.message),tick:a.tick}:null,verdict:c||x?{by:Me(x?.by_agent_id)||c?.agentId||null,verdict:Me(T.verdict)||Me(x?.verdict),why:Me(T.why)||Me(x?.why),tick:c?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([S,R])=>typeof R=="string"&&(a||S==="diff"))),logTail:a?Me(r.log_tail):null,studyId:Me(r.study_id)||Me(l?.refs?.study_id),timeline:i.map(S=>({tick:S.tick,type:S.type,text:Me(S.payload?.text)||Me(S.message)||S.type}))}}function CT(t,e){return[...new Set(kr(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function zl(t,e){if(!t)return[];const n=kr(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(CT(t,e)),s=Fs(t,"experiments").filter(a=>r.has(String(a.id)));return Fs(t,"sources").flatMap(a=>{const o=String(a.id),c=i.get(o),l=Rt(a.tick);if(!c&&(l==null||l>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(Me).filter(Boolean):[],d=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(f=>r.has(f)),...s.filter(f=>Array.isArray(f.source_ids)&&f.source_ids.includes(o)).map(f=>String(f.id))])];return[{id:o,title:Me(a.title)||Me(c?.payload?.summary)||Me(a.url)||o,url:Me(a.url)||Me(c?.payload?.url),highlight:u[0]||Me(a.highlight)||Me(a.extract)||Me(c?.payload?.text),agentId:Me(a.agent_id)||c?.agentId||null,tick:c?.tick??l,citedBy:d}]})}const PT=t=>Array.isArray(t)?t.map(e=>({rho:Rt(e?.rho),p:Rt(e?.p),n:Rt(e?.n)})):[],Jd=t=>({rho:Rt(t.rho),p:Rt(t.p),n:Rt(t.n),halves:PT(t.halves),significant:Ts(t.significant),replicated:Ts(t.replicated),confirmed:Ts(t.confirmed)});function el(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(el);if(typeof t=="object"){const e=t,n=Me(e.text)||Me(e.why)||Me(e.reason)||Me(e.verdict);return n?[[Me(e.by)||Me(e.judge)||Me(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>el(r).map(s=>`${i}: ${s}`))}return[String(t)]}function ip(t,e){if(!t)return[];const n=kr(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=Qc(Fs(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),c=i.get(o)||{},l=s.payload||{};if(s.type==="study.registered"){const d=c.dataset&&typeof c.dataset=="object"?c.dataset:{};r.set(o,{id:o,agentId:Me(c.agent_id)||s.agentId||null,experimentId:Me(c.experiment_id)||Me(s.refs?.experiment_id),round:Rt(c.round)??Rt(s.round),field:Me(l.field)||Me(c.field),question:Me(l.question)||Me(c.question),hypothesis:Me(c.hypothesis),mechanism:Me(c.mechanism),dataset:{url:Me(d.url),x:Me(l.x)||Me(d.x),y:Me(l.y)||Me(d.y),xLevel:Me(d.x_level),yLevel:Me(d.y_level),id:Me(c.dataset_id)},predictedRho:Rt(l.predicted_rho)??Rt(c.predicted_rho),citations:(Array.isArray(c.citations)?c.citations:[]).map(String),result:null,replications:[],award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?u.result={...Jd({...c,...l,halves:l.halves??c.halves,significant:l.significant??c.significant}),headline:Me(l.headline)||Me(c.headline),rejected:Me(l.rejected),text:Me(l.text)||Me(s.message)}:s.type==="study.replicated"?u.replications.push(Jd(l)):s.type==="award.issued"&&(u.award={award:Me(l.award),score:Rt(l.score),rejected:Me(l.rejected),headline:Me(l.headline),verdicts:el(l.verdicts??c.committee?.verdicts),text:Me(l.text)||Me(s.message)}))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function rp(t,e,n,i=40){return kr(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:Me(s.kind),text:Me(s.text)||Me(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const IT=(t,e=3)=>t==null?"—":(t>0?"+":"")+t.toFixed(e),tl=t=>t==null?"—":t<.001?"<0.001":t.toFixed(3),rt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",Jo=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Tr=t=>String(Number(t.toPrecision(4))),rn=(t,e=140)=>t.length>e?t.slice(0,e-1)+"…":t,sp=t=>Array.isArray(t)?t.map(e=>rt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function kl(t,e){const n=t.payload||{},i=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const r=rt(n.why)||rt(n.reason);return n.accepted===!0?`Critic approved${r?`: ${rn(r)}`:": the rerun reproduced the score"}`:n.accepted===!1?`Critic rejected${r?`: ${rn(r)}`:": score didn't reproduce on rerun"}`:rt(n.text)}case"gate.checked":{const r=sp(n.reasons);if(n.pass===!1)return`Novelty gate blocked: ${r.length?rn(r.join("; ")):"too close to an earlier idea"}`;const s=Array.isArray(n.prior_art)?n.prior_art.length:0;return n.pass===!0?`Novelty gate passed: the idea is new enough${s?` (checked against ${s} prior source${s===1?"":"s"})`:""}`:rt(n.text)}case"experiment.started":return`Testing: ${rn(rt(n.description)||rt(n.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const r=Jo(n.metric_value),s=rt(n.status).toLowerCase(),a=r==null?"":` ${i} ${Tr(r)}`,o=e.best==null?"":` (best ${Tr(e.best)})`;return/crash|error|fail|timeout/.test(s)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(s)&&!/not_/.test(s)?`Kept:${a||" result"} beats the previous best`:r==null&&s?`${/reject|invalid|block/.test(s)?"Rejected before scoring":"Not scored"}${rt(n.text)?`: ${rn(rt(n.text))}`:""}`:s?`Discarded:${a} didn't beat the best${o}`:rt(n.text)}case"agent.assigned":{const r=rt(n.role);return r?`Conductor assigned ${r}${rt(n.rationale)?`: ${rn(rt(n.rationale))}`:""}`:rt(n.text)}case"round.started":{const r=Or(rt(n.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${r?` · ${r}`:""}${rt(n.rationale)?`: ${rn(rt(n.rationale))}`:""}`}case"boredom.measured":{const r=Jo(n.B),s=Or(rt(n.regime)).label;return r==null?rt(n.text):`Boredom ${Math.round(r*100)}%${s?` · ${s}`:""}${r>.6?": repeating itself, ready to switch approach":r<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${rn(rt(n.text))}`;case"question.asked":{const r=rt(n.kind);return`${r==="recall"?"Recalling memory":r==="search"||r==="exa"?"Searching the literature":"Asking"}: ${rn(rt(n.text))}`}case"observation.received":return`Read: ${rn(rt(n.text)||rt(n.summary))}`;case"message.sent":{const r=rt(n.to_agent_id)||rt(t.refs?.to_agent_id);return`${r?`To ${e.name(r)}`:"Message"}: ${rn(rt(n.text))}`}case"study.registered":return`Pre-registered: ${rn(rt(n.question)||rt(n.text))}`;case"study.result":return rn(rt(n.text)||rt(n.headline));case"discovery.made":{const r=Jo(n.metric_value);return`New best${r==null?"":`: ${i} ${Tr(r)}`}${rt(n.title)?` · ${rn(rt(n.title),80)}`:""}`}default:return""}}function LT(t,e,n,i,r){const s=(t?.events||[]).filter(h=>h.tick<=i&&h.agentId===e),a=s.filter(h=>h.type==="experiment.started"&&h.refs?.experiment_id).at(-1),o=s.filter(h=>h.type==="gate.checked").at(-1),c=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,l=a&&!c?zs(t,String(a.refs.experiment_id),i):null,u=l&&(t?.events||[]).filter(h=>h.tick<=i&&h.type==="verdict.issued"&&h.refs?.experiment_id===l.id).at(-1),f=[...s,...u&&u.agentId!==e?[u]:[]].sort((h,g)=>h.tick-g.tick).map(h=>({tick:h.tick,why:kl(h,r)})).filter(h=>h.why).slice(-6).reverse();return{activity:Yh(n),latest:s.at(-1)||null,blocked:c,experiment:l,sources:zl(t,i).filter(h=>h.agentId===e).slice(-3).reverse(),feed:f}}function DT(t,e,n){const i=e.esc,r=t.experiment,s=(g,y)=>y?`<div class="now-row"><b>${g}</b><div>${y}</div></div>`:"",a=t.latest?`${i(t.activity||"working")} · <span class="muted">${i(kl(t.latest,e)||t.latest.type)}</span>`:i(t.activity||"Not active yet"),o=r?`${i(r.idea?.text||r.description||"")}${r.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${r.idea.predictedDelta>0?"+":""}${Tr(r.idea.predictedDelta)}</span>`:""}${r.descriptor?.mechanism?` <span class="pill">${i(String(r.descriptor.mechanism).replaceAll("_"," "))}${r.descriptor.method?` / ${i(String(r.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",c=t.sources.map(g=>`<button class="chip" data-source="${i(g.id)}">${i(rn(g.title,60))}</button>`).join(""),l=t.blocked?`<span class="pill bad">blocked</span> ${i(sp(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:r?.gate?`<span class="pill ${r.gate.pass?"ok":"bad"}">${r.gate.pass?"passed":r.gate.pass===!1?"blocked":"checked"}</span> ${i(r.gate.reasons.length?r.gate.reasons.join("; "):r.gate.pass?"The idea is new enough to try.":"")}`:r?'<span class="muted">Not checked yet</span>':"",u=r?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(r.verdict.verdict||"")&&!/not_/i.test(r.verdict.verdict||"")?"ok":"bad"}">${i(r.verdict.verdict||"verdict")}</span> ${i(r.verdict.why||"")}`:r?.result?'<span class="muted">Waiting for the critic</span>':"",d=n?.name.replaceAll("_"," ")||"score",f=n?.direction==="maximize"?"higher":"lower",h=r?.result?`<span class="pill">${i(r.result.status||"done")}</span> ${r.result.metric==null?"":`${i(d)} ${Tr(r.result.metric)}`}${e.best==null?"":` · best so far ${Tr(e.best)} (${f} is better)`}`:r?'<span class="muted">Still running</span>':"";return`<div class="now-card">${s("Doing",a)}${s("Idea",o)}${s("Read",c)}${s("Gate",l)}${s("Score",h)}${s("Critic",u)}${r?`<button class="inspect-link" data-experiment="${i(r.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${t.feed.map(g=>`<li><span>${g.tick}</span>${i(g.why)}</li>`).join("")}</ol>`:""}</div>`}const NT=t=>t&&/^https?:\/\//i.test(t)?t:null,nl=(t,e,n)=>NT(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),Oa=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,ap=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,hs=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function UT(t,e,n){const i=e.esc,r=h=>`<p class="muted">${h}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${IT(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([h,g])=>`${h}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${Oa(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(h=>`<li>${i(h)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),c=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"—")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),l=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),d=`${u.length?`<div class="artifact-links">${u.map(([h,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(h)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${hs("Idea",s+a,!!(t.idea||t.description))}${hs("Gate",o,!!t.gate)}${hs("Score",c,!!t.result)}${hs("Critic",l,!!t.verdict)}${hs("Artifacts",d,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${op(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(h=>`<li><span>t${h.tick}</span> <b>${i(h.type)}</b> ${i(h.text)}</li>`).join("")}</ul></details>`}function OT(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${nl(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(lp(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(up(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>ap(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const Ar=t=>t==null?"—":t.toFixed(3),FT=t=>`rho ${Ar(t.rho)}, p ${tl(t.p)}, n ${t.n??"—"}`;function zT(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${Ar(t)}, observed rho ${Ar(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function kT(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function op(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(l,u)=>l?`${n(l)}${u?` = <b>${n(u)}</b>`:""}`:"—",a=r?.halves.length?`<div class="halves">${r.halves.map((l,u)=>`<span>Half ${u+1}: rho ${Ar(l.rho)}, p ${tl(l.p)}, n ${l.n??"—"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',o=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(l=>`<li>${FT(l)} ${Oa(l.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",c=t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(l=>`<li>${n(l)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head">${kT(t,e)}<span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?nl(e,i.url,lp(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"—")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${Ar(t.predictedRho)} → observed <b>${Ar(r?.rho??null)}</b>${r?` · p ${tl(r.p)} · n ${r.n??"—"}`:""}${zT(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?a:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${Oa(r.significant,"significant","not significant")} ${Oa(r.replicated,"replicated","not replicated")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${o}${c}<div class="chips">${t.experimentId?ap(e,t.experimentId):""}${t.citations.map(l=>`<span class="chip">${nl(e,l,up(l.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function BT(t,e){return t.length?`<div class="card-grid">${t.map(n=>op(n,e)).join("")}</div>`:""}function cp(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function lp(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function up(t,e){return t.length>e?t.slice(0,e-1)+"…":t}const ge=t=>document.getElementById(t),eo=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Xe=t=>eo(ks(String(t??""))),Br=ge("console"),It=ge("conversation"),Bl=ge("guide"),wi=ge("inspector");let St,Gt,Rr,Re=null,ft=null,dp=[],ke=0,Lt=!1,jt=!1,fp=1,Cr=null,Gl="",ri="",jd=0,_n=0,ni=0,vs=!1,Ea={x:0,y:0},Qd,ef,Pr=0,hp=new Map;const GT=lS();function ks(t){return qw(t,hp)}function HT(t){hp=new Map(Object.entries(t.manifest.aliasMap||{}))}let pp=new Map,Fa=[];const dn=new Set;function Hl(t){return tT(t,Re?.manifest.agents?.find(e=>e.agent_id===t.id))}function mp(t){const e=Hl(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${Xe(e.initial)}</span>`}function gp(t){const e=Hl(t),n=Re&&!e.staff?lT(cT(Re.events,t.id,ke),e.familyLabel):"";return[e.familyLabel,e.staff?"":n||(t.role!==t.type?iT(t.role):""),t.standby?"standing by":Yh(t.activity||t.state)].filter(Boolean).map(i=>eo(i)).join(" · ")}function $T(t){if(Hl(t).staff)return"";const e=t.boredom==null?null:Ur(t.boredom),n=Or(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${Xe(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":bl(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}">${Xe(n.label)}</em>`:""}</span>`}function VT(){const t=uT(Re?.manifest.agents||[]);ge("whos-who").hidden=!t.length,ge("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${eo(e.title)}<small>${Xe(e.names.join(", "))}</small></dt><dd>${eo(e.does)}</dd>`).join("")}</dl>`:""}function xs(){return Re?.manifest.live?"Published":"Recorded"}function fo(){return jh(Re?.manifest,ke,Lt)}function tf(t,e){const n=$s(t.agentId,"");if(t.kind==="regime"){Vl(`${t.title}${n?` · ${n}`:""} — ${t.detail}`);return}const i=ge("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${Xe(t.title)}</strong><p>${Xe([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(ef),ef=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function $l(){if(Re){if(ke>Pr){const t=mT(Re.events,Pr,ke,Re.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?tf(e.at(-1),e.length-1):t.length&&tf(t.at(-1),0)}Pr=ke}}function Ji(){return np(ft?.agents||[],ke,pp)}function Vl(t){ge("toast").textContent=t,ge("toast").hidden=!1,clearTimeout(Qd),Qd=setTimeout(()=>ge("toast").hidden=!0,4e3)}function Ii(){document.exitPointerLock?.(),dn.clear()}function Si(){return Br.open||Bl.open||wi.open||Cr!==null}function nr(){Cr&&(ge(Cr).hidden=!0),Cr=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false"))}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=Cr!==e;Ii(),nr(),n&&(Cr=e,ge(e).hidden=!1,t.setAttribute("aria-expanded","true"))};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=nr;function Hs(t){if(jt=t,Ii(),St.setOverview?.(!t),ge("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){Lt=!1,St.camera.position.set(0,1.69,9.5);const e=new Nn().setFromQuaternion(St.camera.quaternion,"YXZ");_n=e.y,ni=e.x}else{const e=St.camera.quaternion.clone();Rr.reset(),St.camera.quaternion.copy(e),Rr.syncFromCamera()}Li()}function Li(){if(Re){const r=Re.manifest,s=Vw(r),a=Fl(r);ge("overview-eyebrow").textContent=s.eyebrow,ge("run-callout").textContent=s.callout,ge("replay-kicker").textContent=s.kicker,ge("connection").textContent=r.sample===!1?a.status==="live"&&!fo()?"LIVE SWARM · VIEWING THE PAST":Jw({...r,stale:a.status==="stale"}):r.description?.includes("mock")?"RECORDED SAMPLE · MOCK PRIOR-ART":"RECORDED REPLAY",WT()}const t=pT(Re?.manifest,ke,Lt,Re?.events||[]);ge("go-live").hidden=t.hidden,ge("go-live").textContent=t.label,ge("go-live").classList.toggle("at-edge",t.atEdge),ge("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),ge("play").textContent=Lt?"Ⅱ Pause":"▶ Play",ge("play").setAttribute("aria-label",Lt?"Pause":"Play"),ge("camera-mode").textContent=jt?"Lab view ↗":"Walk inside ↗",ge("camera-mode").disabled=!Re||Lt,ge("timeline").value=String(ke),ge("tick-label").textContent=`Tick ${Math.floor(ke)} / ${Re?.manifest.totalTicks||0}`,ge("timeline").setAttribute("aria-valuetext",`Tick ${Math.floor(ke)} of ${Re?.manifest.totalTicks||0}`);const e=Re&&uo(Re.events,ke),n=ge("activity-caption"),i=e?.refs?.experiment_id;n.textContent=e?ks(aT({...e,message:kl(e,il())||e.message},$s(e.agentId,""))):"The run begins here",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function WT(){if(!Re)return;const t=Re.manifest,e=Fl(t),n=Or(ft?.regime),i=t.time?.rounds||ft?.config.rounds||0,r=yT(t);ge("run-meta").innerHTML=[`<span class="status-chip" data-status="${e.status}" title="${Xe(e.detail)}">${Xe(e.label)}</span>`,`<span class="meta-task">${Xe(ep(t))}</span>`,Jc(t.metric||ft?.metric)?`<span>${Xe(Jc(t.metric||ft?.metric))}</span>`:"",t.proxy_note?`<span class="proxy-chip" title="Benchmark caveat from the task definition">Proxy: ${Xe(t.proxy_note)}</span>`:"",ft?.round?`<span>Round ${ft.round}${i?` / ${i}`:""}</span>`:"",n.label&&t.sample===!1?`<span class="regime-chip" data-tone="${n.tone}" title="Swarm boredom ${Math.round(Ur(ft?.boredom||0))}%">${Xe(n.label)} · ${Math.round(Ur(ft?.boredom||0))}%</span>`:"",e.status==="stale"?`<span class="warn-chip">${Xe(e.detail)}</span>`:"",r?`<span class="warn-chip">${Xe(r)}</span>`:""].filter(Boolean).join("")}function Zr(t){Re&&(ke=Math.max(0,Math.min(Re.manifest.totalTicks,t)),ft=uo(Re.frames,ke)?.snapshot||null,Li(),_p(),Br.open&&Wl(),It.open&&Xl(),wi.open&&Mp())}function _p(){ge("agent-count").textContent=`${Ji().length} AGENTS`,ge("agent-list").innerHTML=oT(ft?.agents||[],Ji()).map(t=>`<button class="agent-row" data-agent="${Xe(t.id)}"${t.standby?' disabled data-standby="true"':""}>${mp(t)}<span><strong>${Xe(t.name)}</strong><small>${gp(t)}</small>${$T(t)}</span><i></i></button>`).join("")||'<p class="empty">No researchers active at this moment.</p>',ge("run-label").textContent=ft?`ROUND ${ft.round}${ft.config.rounds?` / ${ft.config.rounds}`:""} · BEST ${ft.metric.name.replaceAll("_"," ")} ${ft.value==null?"—":ft.value.toFixed(4)} · ${Jc(ft.metric).split(" ").slice(-3).join(" ")}`:"Waiting for the first events"}function XT(){if(!Re||!ft)return"<p>No measurements yet.</p>";const t=Re.manifest.swarm==="ignobel"&&ft.metric.name==="replicated_findings";return vT(_T(ft.results,Re.frames,ke,!t),ft.metric,ke,Xe)}function vp(t){const e=[t.effectSize==null?"":`Effect ${Xe(t.effectSize)}`,t.pValue==null?"":`p = ${Xe(t.pValue)}`,t.reward==null?"":`Reward ${Xe(t.reward)}`].filter(Boolean);return e.length?e.join("<br>"):Xe(t.value??"—")}function Wl(){const t=ft;if(!t){ge("console-content").innerHTML="<h2>No evidence yet.</h2>";return}ge("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(ke)}. Every candidate is plotted: kept, discarded and crashed, with the confirmed best so far. Later results stay hidden until playback reaches them.</p>${Re?.manifest.proxy_note?`<p class="proxy-note"><b>About this benchmark:</b> ${Xe(Re.manifest.proxy_note)}</p>`:""}${XT()}<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th>MEASUREMENT</th></tr></thead><tbody>${t.results.slice().reverse().map(e=>`<tr${e.id?` class="inspectable" data-experiment="${Xe(e.id)}" tabindex="0"`:""}><td>${e.round}</td><td>${Xe(e.agent)}</td><td>${Xe(e.status)}<br>${Xe(e.description)}</td><td>${vp(e)}</td></tr>`).join("")}</tbody></table></div><h3>${xs()} findings</h3>${t.findings.filter(e=>!/swarm_B|per_agent_B|boredom/i.test(e.message)).slice().reverse().map(e=>`<div class="finding"><b>${Xe(Ji().find(n=>n.id===e.agent)?.name||e.role)}</b><span>${Xe(e.message)}</span></div>`).join("")||"<p>No findings yet.</p>"}${ZT()}`}function ZT(){const t=ip(Re,ke),e=zl(Re,ke),n=rp(Sp(),ke);return`${t.length?`<h3>Ig Nobel studies</h3>${BT(t,As())}`:""}${n.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${cp(n,As())}</div>`:""}${e.length||qT("sources")?`<h3>Research sources</h3>${OT(e,As())}`:""}`}let an="now";function il(){return{name:t=>$s(t),metric:ft?.metric,best:ft?.value??null}}function Xl(){const t=Ji().find(S=>S.id===Gl);if(!t){It.close();return}const e=Re?Zw(Re.events,ke).filter(S=>S.agentId===t.id||S.type==="message.sent"&&(S.payload?.to_agent_id===t.id||S.payload?.to_agent_ids?.includes(t.id))):[],n=an==="idea"?/hypothesis|propos|question|idea/:an==="result"?/experiment|observ|discover|reward|evaluat/:an==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=Jh,r=e.filter(S=>n.test(S.type)&&i(S.message)).slice(-1),s=an==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=an==="result"&&t.lastResult?`<blockquote>${Xe(t.lastResult.description)}<br>${Xe(t.lastResult.status)} · ${vp(t.lastResult)}<cite>${xs()} result · available by tick ${Math.floor(ke)}</cite></blockquote>`:"",o=an==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",c=t.boredom==null?null:Ur(t.boredom),l=Re?fS(Re.events,t.id,ke):null,u=Or(l?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),d=dS(l?.components||t.boredomDetail?.components),f=rp(Sp(),ke,t.id),h=an==="result"||an==="doing"?t.lastResult?.id&&zs(Re,t.lastResult.id,ke)?t.lastResult.id:t.focus?.experiment_id&&zs(Re,t.focus.experiment_id,ke)?t.focus.experiment_id:null:null,g=h?`<button class="inspect-link" data-experiment="${Xe(h)}">Inspect experiment →</button>`:"",y=!!Re?.manifest.live,p=fo(),m=Re?Qh(Re.events,ke):0,x=y?p?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(ke)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(ke)}${m?` · ${m} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(ke)}.`,T=S=>S.type==="message.sent"&&S.agentId!==t.id?`Message from ${Xe($s(S.agentId,"")||"a colleague")}`:`${y?"Published":"Recorded"} ${Xe(Kh(S.type).toLowerCase())}`;ge("conversation-tag").textContent=y?p?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",ge("conversation-content").innerHTML=`<div class="conversation-person">${mp(t)}<div><h2>${Xe(t.name)}</h2><p>${gp(t)}</p></div></div><div class="conversation-questions">${[["now","Now"],["doing","What are you doing?"],["idea","Tell me about your idea"],["result","What did you find?"],["notes","Your research notes"],...f.length?[["talk","Conversation"]]:[]].map(([S,R])=>`<button data-topic="${S}" aria-pressed="${an===S}">${R}</button>`).join("")}</div><div class="speech-bubble${an==="talk"||an==="now"?" history":""}">${an==="now"?DT(LT(Re,t.id,t.activity||t.state,ke,il()),{...il(),esc:Xe},ft?.metric):an==="talk"?cp(f,As(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${Xe(o)}<cite>${xs()} proposal · available by tick ${Math.floor(ke)}</cite></blockquote>`:r.length?r.map(S=>`<blockquote>${Xe(S.message)}<cite>${T(S)} · tick ${S.tick}</cite></blockquote>`).join(""):s?`<blockquote>${Xe(s)}<cite>${xs()} excerpt · through tick ${Math.floor(ke)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${xs().toUpperCase()} BOREDOM</span><strong style="color:${c==null?"inherit":bl(c)}">${c==null?"Not measured":Math.round(c)+"%"}</strong></div>${c==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${Xe(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${c}"><i style="left:${c}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||d.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${Xe(u.label)}</span>`:""}${d.length?`<div class="boredom-components" aria-label="Boredom components">${d.map(S=>`<div><span>${Xe(S.label)}</span><i style="--v:${S.value}%"></i><b>${S.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${x}</p>`}function Zl(t){if(fo()||(Lt=!1),Gl=t,an="now",Ii(),nr(),Li(),Xl(),Ji().some(e=>e.id===t)){const e=St.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new D(0,2.1,0));if(St.camera.lookAt(n),jt||Rr.focus(n),jt){const i=new Nn().setFromQuaternion(St.camera.quaternion,"YXZ");_n=i.y,ni=i.x}}It.open||It.show(),xp(),It.querySelector("button")?.focus()}}function xp(){if(!It.open)return;const t=St.agentPositions?.().find(l=>l.id===Gl);if(!t){It.style.visibility="hidden";return}const e=t.position.clone().add(new D(0,2.35,0));if(St.camera.updateMatrixWorld(),e.clone().applyMatrix4(St.camera.matrixWorldInverse).z>=0){It.style.visibility="hidden";return}It.style.visibility="visible",e.project(St.camera);const i=(e.x+1)/2*innerWidth,r=(1-e.y)/2*innerHeight,s=It.getBoundingClientRect(),a=12,o=$n.clamp(i-s.width/2,a,Math.max(a,innerWidth-s.width-a)),c=$n.clamp(r-s.height-24,80,Math.max(80,innerHeight-s.height-190));It.style.left=`${o}px`,It.style.top=`${c}px`,It.style.setProperty("--speech-tail",`${$n.clamp(i-o,20,s.width-20)}px`)}ge("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(an=e,Xl())};ge("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&Zl(e)};function Sp(){return Re?.events||[]}function qT(t){const e=Re?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function $s(t,e){return t?(ft?.agents||Re?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||Re?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function As(){const t=Re?.manifest.id||"";return{esc:Xe,name:$s,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return jf(n)},experimentLabel:e=>{const n=zs(Re,e,ke);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let to=null;function Mp(){if(!to)return;const t=zs(Re,to,ke);ge("inspector-content").innerHTML=t?UT(t,As(),t.studyId?ip(Re,ke).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function YT(t){Ii(),nr(),It.close();const e=zl(Re,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>ke&&(Lt=!1,Zr(e)),Wl(),Br.open||Br.showModal();const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function yp(t){Lt=!1,Li(),Ii(),to=t,Mp(),wi.open||wi.showModal(),wi.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target.closest?.("[data-source]")?.dataset.source;if(e){YT(e);return}const n=t.target.closest?.("[data-experiment]")?.dataset.experiment;n&&(t.preventDefault(),yp(n))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),yp(e.dataset.experiment))});wi.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);ge("close-inspector").onclick=()=>wi.close();wi.addEventListener("close",()=>{to=null});ge("agent-interact").onclick=()=>{ri&&Zl(ri)};ge("close-conversation").onclick=()=>{It.close(),Gt.domElement.focus()};ge("close-console").onclick=()=>Br.close();ge("close-guide").onclick=()=>Bl.close();ge("open-console").onclick=()=>{Ii(),nr(),Wl(),Br.showModal()};ge("open-guide").onclick=()=>{Ii(),nr(),Bl.showModal()};ge("play").onclick=()=>{Re&&(Lt||(It.close(),!Re.manifest.live&&ke>=Re.manifest.totalTicks&&Zr(0),jt&&Hs(!1)),Lt=!Lt,Li())};ge("camera-mode").onclick=()=>Hs(!jt);ge("collapse-bar").onclick=()=>{const t=document.body.classList.toggle("bar-collapsed");ge("collapse-bar").setAttribute("aria-expanded",String(!t)),ge("collapse-bar").textContent=t?"▴":"▾",ge("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel")};ge("timeline").oninput=()=>{Lt=!1,Zr(Number(ge("timeline").value)),Pr=ke};ge("go-live").onclick=()=>{Re?.manifest.live&&(It.close(),jt&&Hs(!1),Lt=!0,Zr(Re.manifest.totalTicks),$l())};ge("pace").onchange=()=>{fp=Number(ge("pace").value)};function KT(t){pp=tp(t),Fa=TT(t,St.bounds,St.colliders)}function JT(){const t=uo(Fa,ke);if(!t)return new Map;if(ke<=0)return t.positions;const e=Fa[Fa.indexOf(t)+1];if(!e)return t.positions;const n=(ke-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function bp(t,e=!1){const n=++jd;e||(Lt=!1,ge("connection").textContent="LOADING RUN");try{const i=await Qw(Zh,t,dp.find(c=>c.id===t)?.contentVersion||"2",Re);if(n!==jd)return;const r=ke,s=fo();Re=i,HT(i),i.frames.sort((c,l)=>c.tick-l.tick),i.events.sort((c,l)=>c.tick-l.tick),KT(i),VT(),ge("timeline").max=String(i.manifest.totalTicks),ge("timeline").disabled=!1,ge("play").disabled=!1,ge("replay-title").textContent=ks(i.manifest.title),ge("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),ge("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),ge("timeline-markers").innerHTML=i.events.filter(c=>/experiment.finished|discovery|study.completed|award/.test(c.type)).map(c=>`<i${/discovery|award/.test(c.type)?' class="best"':""} style="left:${c.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),ge("run-picker").value=t,e||Hs(!1);const a=e?hT(r,i.manifest,s):fT(i.manifest);e||(Lt=!!i.manifest.live,Pr=a),Zr(a),e&&s?$l():e||(Pr=ke),Li(),pS&&!e&&!sessionStorage.getItem("intro-seen")&&(sessionStorage.setItem("intro-seen","1"),jT());const o=new URL(location.href);o.searchParams.set("recording",t),o.searchParams.delete("run"),history.replaceState(null,"",o)}catch(i){ge("connection").textContent="ARCHIVE UNAVAILABLE",Vl(i.message)}}async function Ep(){try{const t=$w(await Zh("/recordings"));if(dp=t,ge("run-picker").innerHTML=wT(t,Xe)||"<option>No recordings imported</option>",Re)ge("run-picker").value=Re.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await bp(t.find(n=>n.id===e)?.id||t[0].id)}else t.length||(ge("connection").textContent="NO RECORDINGS",ge("replay-title").textContent="No recordings imported")}catch(t){ge("connection").textContent="ARCHIVE UNAVAILABLE",ge("replay-title").textContent="Archive unavailable",Vl(t.message)}}ge("refresh-runs").onclick=()=>Ep();ge("run-picker").onchange=()=>bp(ge("run-picker").value);function jT(){ge("intro").innerHTML=Ow(Hw,Uw(Re),Xe),ge("intro").hidden=!1,ge("intro-start").onclick=()=>{ge("intro").hidden=!0}}ge("refresh-runs").hidden=!0,document.body.classList.add("static-site");function nf(t,e){const i=St.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||St.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),dn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>dn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{t.code==="Escape"&&(It.close(),nr(),Ii()),!(Si()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))&&(["KeyW","KeyA","KeyS","KeyD",...jt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault(),dn.add(t.code),jt&&t.code==="KeyE"&&!t.repeat&&ri&&Zl(ri))});window.addEventListener("keyup",t=>dn.delete(t.code));window.addEventListener("blur",()=>{dn.clear(),vs=!1,Lt=!1,Li()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);n=s,Lt&&Re&&(ke=Xw(ke,a,fp,Re.manifest.totalTicks,Re.manifest.tickDurationMs),Ww(Re.manifest,ke)||(Lt=!1),Math.floor(ke)!==i?(Zr(ke),i=Math.floor(ke),$l()):Li());const o=St.camera;if(!jt&&!Si()&&!It.open&&Rr.update(a,dn),jt&&!Si()){({yaw:_n,pitch:ni}=Jf(_n,ni,a,dn));const d=Number(dn.has("KeyW"))-Number(dn.has("KeyS")),f=Number(dn.has("KeyD"))-Number(dn.has("KeyA"));if(d||f){const h=(dn.has("ShiftLeft")||dn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(d,f),g=(-Math.sin(_n)*d+Math.cos(_n)*f)*h,y=(-Math.cos(_n)*d-Math.sin(_n)*f)*h;nf(o.position.x+g,o.position.z)||(o.position.x+=g),nf(o.position.x,o.position.z+y)||(o.position.z+=y)}o.rotation.set(ni,_n,0,"YXZ")}const c=JT(),l=Ji(),u=RT(Re?.events||[],ke,l,ks,100);if(St.update(ke*(Re?.manifest.tickDurationMs||700)/1e3,{progress:ft?.progress||0,boredom:0,running:Lt,replay:!0,reducedMotion:GT,agents:l.map(d=>({...d,boredom:d.boredom==null?null:Ur(d.boredom),regime:d.boredomSpectrum?.regime,state:c.get(d.id)?.atLab?"working":d.state,stationId:c.get(d.id)?.atTable?"culture":jc({...d,state:"working",activity:"experimenting"}),discussionBrief:c.get(d.id)?.atTable?u.get(d.id)?.brief:void 0,discussionPeers:u.get(d.id)?.peers,ideaBrief:sS(ks(d.lastIdea||d.lastQuestion||d.lastObservation||"")),position:c.get(d.id)}))}),ri="",jt&&!Si()){o.getWorldDirection(r),r.y=0,r.normalize();let d=3;for(const f of St.agentPositions?.()||[]){const h=f.position.clone().sub(o.position);h.y=0;const g=h.length();g<d&&h.normalize().dot(r)>.35&&(d=g,ri=f.id)}}ge("proximity").hidden=!ri,ri&&(ge("agent-name").textContent=Ji().find(d=>d.id===ri)?.name||"",ge("proximity-kicker").textContent=Re?.manifest.live?"RESEARCHER · LIVE RUN":"ARCHIVED RESEARCHER"),Gt.render(St.scene,o),xp()};St=hS(),Gt=new iS({antialias:!0,powerPreference:"high-performance"}),Gt.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),Gt.setSize(innerWidth,innerHeight),Gt.toneMapping=sl,Gt.toneMappingExposure=St.exposure??1,Gt.outputColorSpace=Ot,ge("world").appendChild(Gt.domElement),Gt.domElement.tabIndex=0,Gt.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),St.camera.rotation.order="YXZ",Rr=new rS(St.camera),Hs(!1),Gt.domElement.onclick=()=>{if(jt&&!Si()&&!It.open)try{Gt.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},Gt.domElement.onpointerdown=s=>{Si()||(vs=!0,Ea={x:s.clientX,y:s.clientY},jt||Gt.domElement.setPointerCapture(s.pointerId))},Gt.domElement.onpointermove=s=>{if(!vs||document.pointerLockElement||Si())return;const a=s.clientX-Ea.x,o=s.clientY-Ea.y;jt?{yaw:_n,pitch:ni}=kc(_n,ni,a,o):Rr.dragBy(a,o),Ea={x:s.clientX,y:s.clientY}},Gt.domElement.onpointercancel=()=>vs=!1,window.addEventListener("pointerup",()=>vs=!1),document.addEventListener("mousemove",s=>{document.pointerLockElement&&jt&&!Si()&&({yaw:_n,pitch:ni}=kc(_n,ni,s.movementX,s.movementY))});const e=()=>{St.camera.aspect=innerWidth/innerHeight,St.camera.updateProjectionMatrix(),Gt.setSize(innerWidth,innerHeight)};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new D;_p(),t(),ge("loading").hidden=!0,Ep()}catch(t){console.error(t),ge("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
