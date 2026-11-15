(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Ml="187",hm=0,Eu=1,pm=2,za=1,mm=2,Ts=3,or=0,cn=1,Tn=2,kr=0,Ls=1,wu=2,Tu=3,Au=4,gm=5,Ur=100,_m=101,vm=102,xm=103,Sm=104,ym=200,Mm=201,bm=202,Em=203,If=204,Lf=205,wm=206,Tm=207,Am=208,Rm=209,Cm=210,Pm=211,Im=212,Lm=213,Nm=214,gc=0,_c=1,vc=2,$s=3,xc=4,Sc=5,yc=6,Mc=7,Nf=0,Dm=1,Um=2,hi=0,Df=1,Uf=2,Of=3,bl=4,Ff=5,kf=6,zf=7,Bf=300,Wr=301,Hs=302,Lo=303,No=304,eo=1e3,ui=1001,bc=1002,Xt=1003,Om=1004,oa=1005,mn=1006,Do=1007,Ii=1008,Sn=1009,$f=1010,Hf=1011,Gs=1012,El=1013,Zn=1014,Dn=1015,qn=1016,wl=1017,Tl=1018,Xr=1020,Gf=35902,Vf=35899,Wf=1021,Xf=1022,Vn=1023,Ui=1026,Li=1027,Al=1028,Rl=1029,cr=1030,Cl=1031,Pl=1033,Ba=33776,$a=33777,Ha=33778,Ga=33779,Ec=35840,wc=35841,Tc=35842,Ac=35843,Rc=36196,Cc=37492,Pc=37496,Ic=37488,Lc=37489,to=37490,Nc=37491,Dc=37808,Uc=37809,Oc=37810,Fc=37811,kc=37812,zc=37813,Bc=37814,$c=37815,Hc=37816,Gc=37817,Vc=37818,Wc=37819,Xc=37820,Zc=37821,qc=36492,Yc=36494,Kc=36495,Jc=36283,jc=36284,no=36285,Qc=36286,Fm=3200,el=0,km=1,Ci="",Ot="srgb",io="srgb-linear",ro="linear",dt="srgb",Uo=7680,zm=519,Bm=512,$m=513,Hm=514,Zf=515,Gm=516,Vm=517,qf=518,Yf=519,Kf=35044,Ru="300 es",Un=2e3,Vs=2001;function Wm(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function so(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Xm(){const t=so("canvas");return t.style.display="block",t}const Cu={};function ao(...t){const e="THREE."+t.shift();console.log(e,...t)}function Jf(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function ze(...t){t=Jf(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=Jf(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function zr(...t){const e=t.join(" ");e in Cu||(Cu[e]=!0,ze(...t))}function Zm(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const qm={[gc]:gc,[vc]:yc,[xc]:xc,[$s]:Sc,[_c]:_c,[yc]:vc,[Mc]:Mc,[Sc]:$s};class fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Pu=1234567;const Ns=Math.PI/180,Ws=180/Math.PI;function ki(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function Il(t,e){return(t%e+e)%e}function Ym(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Km(t,e,n){return t!==e?(n-t)/(e-t):0}function Ds(t,e,n){return(1-n)*t+n*e}function Jm(t,e,n,i){return Ds(t,e,1-Math.exp(-n*i))}function jm(t,e=1){return e-Math.abs(Il(t,e*2)-e)}function Qm(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function eg(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function tg(t,e){return t+Math.floor(Math.random()*(e-t+1))}function ng(t,e){return t+Math.random()*(e-t)}function ig(t){return t*(.5-Math.random())}function rg(t){t!==void 0&&(Pu=t);let e=Pu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sg(t){return t*Ns}function ag(t){return t*Ws}function og(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function cg(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function jf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function lg(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),c=a(n/2),l=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),d=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,c*h,c*f,o*l);break;case"YZY":t.set(c*f,o*u,c*h,o*l);break;case"ZXZ":t.set(c*h,c*f,o*u,o*l);break;case"XZX":t.set(o*u,c*g,c*d,o*l);break;case"YXY":t.set(c*d,o*u,c*g,o*l);break;case"ZYZ":t.set(c*g,c*d,o*u,o*l);break;default:ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Mo(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ll(t,e){if(e.constructor===Float32Array)return t;const n=Mo(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Nl(t,e){if(e.constructor===Float32Array)return t;const n=Mo(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Mn={DEG2RAD:Ns,RAD2DEG:Ws,generateUUID:ki,clamp:Je,euclideanModulo:Il,mapLinear:Ym,inverseLerp:Km,lerp:Ds,damp:Jm,pingpong:jm,smoothstep:Qm,smootherstep:eg,randInt:tg,randFloat:ng,randFloatSpread:ig,seededRandom:rg,degToRad:sg,radToDeg:ag,isPowerOfTwo:og,ceilPowerOfTwo:cg,floorPowerOfTwo:jf,setQuaternionFromProperEuler:lg,normalize:Nl,denormalize:Ll},vu=class vu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vu.prototype.isVector2=!0;let We=vu;class ts{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],l=i[r+1],u=i[r+2],h=i[r+3],f=s[a+0],d=s[a+1],g=s[a+2],x=s[a+3];if(h!==x||c!==f||l!==d||u!==g){let p=c*f+l*d+u*g+h*x;p<0&&(f=-f,d=-d,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){const S=Math.acos(p),w=Math.sin(S);m=Math.sin(m*S)/w,o=Math.sin(o*S)/w,c=c*m+f*o,l=l*m+d*o,u=u*m+g*o,h=h*m+x*o}else{c=c*m+f*o,l=l*m+d*o,u=u*m+g*o,h=h*m+x*o;const S=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=S,l*=S,u*=S,h*=S}}e[n]=c,e[n+1]=l,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],l=i[r+2],u=i[r+3],h=s[a],f=s[a+1],d=s[a+2],g=s[a+3];return e[n]=o*g+u*h+c*d-l*f,e[n+1]=c*g+u*f+l*h-o*d,e[n+2]=l*g+u*d+o*f-c*h,e[n+3]=u*g-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),u=o(r/2),h=o(s/2),f=c(i/2),d=c(r/2),g=c(s/2);switch(a){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],l=n[2],u=n[6],h=n[10],f=i+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(a-r)*d}else if(i>o&&i>h){const d=2*Math.sqrt(1+i-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-i-h);this._w=(s-l)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-i-o);this._w=(a-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,l=n._z,u=n._w;return this._x=i*u+a*o+r*l-s*c,this._y=r*u+a*c+s*o-i*l,this._z=s*u+a*l+i*c-r*o,this._w=a*u-i*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,n=Math.sin(n*l)/u,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xu=class xu{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Iu.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Iu.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+c*l+a*h-o*u,this.y=i+c*u+o*l-s*h,this.z=r+c*h+s*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xu.prototype.isVector3=!0;let O=xu;const Oo=new O,Iu=new ts,Su=class Su{constructor(e,n,i,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l)}set(e,n,i,r,s,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=c,u[6]=i,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],u=i[4],h=i[7],f=i[2],d=i[5],g=i[8],x=r[0],p=r[3],m=r[6],S=r[1],w=r[4],y=r[7],A=r[2],T=r[5],_=r[8];return s[0]=a*x+o*S+c*A,s[3]=a*p+o*w+c*T,s[6]=a*m+o*y+c*_,s[1]=l*x+u*S+h*A,s[4]=l*p+u*w+h*T,s[7]=l*m+u*y+h*_,s[2]=f*x+d*S+g*A,s[5]=f*p+d*w+g*T,s[8]=f*m+d*y+g*_,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return n*a*u-n*o*l-i*s*u+i*o*c+r*s*l-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*s,d=l*s-a*c,g=n*h+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=h*x,e[1]=(r*l-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=f*x,e[4]=(u*n-r*c)*x,e[5]=(r*s-o*n)*x,e[6]=d*x,e[7]=(i*c-l*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return zr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fo.makeScale(e,n)),this}rotate(e){return zr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fo.makeRotation(-e)),this}translate(e,n){return zr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fo.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Su.prototype.isMatrix3=!0;let He=Su;const Fo=new He,Lu=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nu=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){const t={enabled:!0,workingColorSpace:io,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=Br(r.r),r.g=Br(r.g),r.b=Br(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?ro:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[io]:{primaries:e,whitePoint:i,transfer:ro,toXYZ:Lu,fromXYZ:Nu,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:Lu,fromXYZ:Nu,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),t}const tt=ug();function pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Br(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let vr;class dg{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{vr===void 0&&(vr=so("canvas")),vr.width=e.width,vr.height=e.height;const r=vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=vr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=so("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(pi(n[i]/255)*255):n[i]=pi(n[i]);return{data:n,width:e.width,height:e.height}}else return ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fg=0;class Dl{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ko(r[a].image)):s.push(ko(r[a]))}else s=ko(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function ko(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(ze("Texture: Unable to serialize Texture."),{})}let hg=0;const zo=new O;class Qt extends fr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=ui,r=ui,s=mn,a=Ii,o=Vn,c=Sn,l=Qt.DEFAULT_ANISOTROPY,u=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=ki(),this.name="",this.source=new Dl(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){ze(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case eo:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case eo:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=Bf;Qt.DEFAULT_ANISOTROPY=1;const yu=class yu{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],x=c[2],p=c[6],m=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(l+1)/2,y=(d+1)/2,A=(m+1)/2,T=(u+f)/4,_=(h+x)/4,M=(g+p)/4;return w>y&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=_/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=M/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=_/s,r=M/s),this.set(i,r,s,n),this}let S=Math.sqrt((p-g)*(p-g)+(h-x)*(h-x)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(h-x)/S,this.z=(f-u)/S,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yu.prototype.isVector4=!0;let Et=yu;class pg extends fr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new Qt({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dl(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends pg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Qf extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class mg extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const yo=class yo{constructor(e,n,i,r,s,a,o,c,l,u,h,f,d,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,l,u,h,f,d,g,x,p)}set(e,n,i,r,s,a,o,c,l,u,h,f,d,g,x,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=u,m[10]=h,m[14]=f,m[3]=d,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yo().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/xr.setFromMatrixColumn(e,0).length(),s=1/xr.setFromMatrixColumn(e,1).length(),a=1/xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,d=a*h,g=o*u,x=o*h;n[0]=c*u,n[4]=-c*h,n[8]=l,n[1]=d+g*l,n[5]=f-x*l,n[9]=-o*c,n[2]=x-f*l,n[6]=g+d*l,n[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,g=l*u,x=l*h;n[0]=f+x*o,n[4]=g*o-d,n[8]=a*l,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=d*o-g,n[6]=x+f*o,n[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,g=l*u,x=l*h;n[0]=f-x*o,n[4]=-a*h,n[8]=g+d*o,n[1]=d+g*o,n[5]=a*u,n[9]=x-f*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,g=o*u,x=o*h;n[0]=c*u,n[4]=g*l-d,n[8]=f*l+x,n[1]=c*h,n[5]=x*l+f,n[9]=d*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,g=o*c,x=o*l;n[0]=c*u,n[4]=x-f*h,n[8]=g*h+d,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-l*u,n[6]=d*h+g,n[10]=f-x*h}else if(e.order==="XZY"){const f=a*c,d=a*l,g=o*c,x=o*l;n[0]=c*u,n[4]=-h,n[8]=l*u,n[1]=f*h+x,n[5]=a*u,n[9]=d*h-g,n[2]=g*h-d,n[6]=o*u,n[10]=x*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gg,e,_g)}lookAt(e,n,i){const r=this.elements;return _n.subVectors(e,n),_n.lengthSq()===0&&(_n.z=1),_n.normalize(),yi.crossVectors(i,_n),yi.lengthSq()===0&&(Math.abs(i.z)===1?_n.x+=1e-4:_n.z+=1e-4,_n.normalize(),yi.crossVectors(i,_n)),yi.normalize(),ca.crossVectors(_n,yi),r[0]=yi.x,r[4]=ca.x,r[8]=_n.x,r[1]=yi.y,r[5]=ca.y,r[9]=_n.y,r[2]=yi.z,r[6]=ca.z,r[10]=_n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],u=i[1],h=i[5],f=i[9],d=i[13],g=i[2],x=i[6],p=i[10],m=i[14],S=i[3],w=i[7],y=i[11],A=i[15],T=r[0],_=r[4],M=r[8],z=r[12],N=r[1],F=r[5],B=r[9],Y=r[13],D=r[2],X=r[6],ie=r[10],V=r[14],pe=r[3],J=r[7],se=r[11],ue=r[15];return s[0]=a*T+o*N+c*D+l*pe,s[4]=a*_+o*F+c*X+l*J,s[8]=a*M+o*B+c*ie+l*se,s[12]=a*z+o*Y+c*V+l*ue,s[1]=u*T+h*N+f*D+d*pe,s[5]=u*_+h*F+f*X+d*J,s[9]=u*M+h*B+f*ie+d*se,s[13]=u*z+h*Y+f*V+d*ue,s[2]=g*T+x*N+p*D+m*pe,s[6]=g*_+x*F+p*X+m*J,s[10]=g*M+x*B+p*ie+m*se,s[14]=g*z+x*Y+p*V+m*ue,s[3]=S*T+w*N+y*D+A*pe,s[7]=S*_+w*F+y*X+A*J,s[11]=S*M+w*B+y*ie+A*se,s[15]=S*z+w*Y+y*V+A*ue,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],x=e[7],p=e[11],m=e[15],S=c*d-l*f,w=o*d-l*h,y=o*f-c*h,A=a*d-l*u,T=a*f-c*u,_=a*h-o*u;return n*(x*S-p*w+m*y)-i*(g*S-p*A+m*T)+r*(g*w-x*A+m*_)-s*(g*y-x*T+p*_)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],u=e[10];return n*(a*u-o*l)-i*(s*u-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],x=e[13],p=e[14],m=e[15],S=n*o-i*a,w=n*c-r*a,y=n*l-s*a,A=i*c-r*o,T=i*l-s*o,_=r*l-s*c,M=u*x-h*g,z=u*p-f*g,N=u*m-d*g,F=h*p-f*x,B=h*m-d*x,Y=f*m-d*p,D=S*Y-w*B+y*F+A*N-T*z+_*M;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/D;return e[0]=(o*Y-c*B+l*F)*X,e[1]=(r*B-i*Y-s*F)*X,e[2]=(x*_-p*T+m*A)*X,e[3]=(f*T-h*_-d*A)*X,e[4]=(c*N-a*Y-l*z)*X,e[5]=(n*Y-r*N+s*z)*X,e[6]=(p*y-g*_-m*w)*X,e[7]=(u*_-f*y+d*w)*X,e[8]=(a*B-o*N+l*M)*X,e[9]=(i*N-n*B-s*M)*X,e[10]=(g*T-x*y+m*S)*X,e[11]=(h*y-u*T-d*S)*X,e[12]=(o*z-a*F-c*M)*X,e[13]=(n*F-i*z+r*M)*X,e[14]=(x*w-g*A-p*S)*X,e[15]=(u*A-h*w+f*S)*X,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,l=s*a,u=s*o;return this.set(l*a+i,l*o-r*c,l*c+r*o,0,l*o+r*c,u*o+i,u*c-r*a,0,l*c-r*o,u*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,l=s+s,u=a+a,h=o+o,f=s*l,d=s*u,g=s*h,x=a*u,p=a*h,m=o*h,S=c*l,w=c*u,y=c*h,A=i.x,T=i.y,_=i.z;return r[0]=(1-(x+m))*A,r[1]=(d+y)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(f+m))*T,r[6]=(p+S)*T,r[7]=0,r[8]=(g+w)*_,r[9]=(p-S)*_,r[10]=(1-(f+x))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=xr.set(r[0],r[1],r[2]).length();const o=xr.set(r[4],r[5],r[6]).length(),c=xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Pn.copy(this);const l=1/a,u=1/o,h=1/c;return Pn.elements[0]*=l,Pn.elements[1]*=l,Pn.elements[2]*=l,Pn.elements[4]*=u,Pn.elements[5]*=u,Pn.elements[6]*=u,Pn.elements[8]*=h,Pn.elements[9]*=h,Pn.elements[10]*=h,n.setFromRotationMatrix(Pn),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=Un,c=!1){const l=this.elements,u=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let g,x;if(c)g=s/(a-s),x=a*s/(a-s);else if(o===Un)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===Vs)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Un,c=!1){const l=this.elements,u=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),d=-(i+r)/(i-r);let g,x;if(c)g=1/(a-s),x=a/(a-s);else if(o===Un)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===Vs)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=h,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};yo.prototype.isMatrix4=!0;let pt=yo;const xr=new O,Pn=new pt,gg=new O(0,0,0),_g=new O(1,1,1),yi=new O,ca=new O,_n=new O,Du=new pt,Uu=new ts;class On{constructor(e=0,n=0,i=0,r=On.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],u=r[9],h=r[2],f=r[6],d=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Je(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Du.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Du,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Uu.setFromEuler(this),this.setFromQuaternion(Uu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}On.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let vg=0;const Ou=new O,Sr=new ts,ei=new pt,la=new O,ds=new O,xg=new O,Sg=new ts,Fu=new O(1,0,0),ku=new O(0,1,0),zu=new O(0,0,1),Bu={type:"added"},yg={type:"removed"},yr={type:"childadded",child:null},Bo={type:"childremoved",child:null};class Ht extends fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vg++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new O,n=new On,i=new ts,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Sr.setFromAxisAngle(e,n),this.quaternion.multiply(Sr),this}rotateOnWorldAxis(e,n){return Sr.setFromAxisAngle(e,n),this.quaternion.premultiply(Sr),this}rotateX(e){return this.rotateOnAxis(Fu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(zu,e)}translateOnAxis(e,n){return Ou.copy(e).applyQuaternion(this.quaternion),this.position.add(Ou.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Fu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?la.copy(e):la.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ds.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ds,la,this.up):ei.lookAt(la,ds,this.up),this.quaternion.setFromRotationMatrix(ei),r&&(ei.extractRotation(r.matrixWorld),Sr.setFromRotationMatrix(ei),this.quaternion.premultiply(Sr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Bu),yr.child=e,this.dispatchEvent(yr),yr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(yg),Bo.child=e,this.dispatchEvent(Bo),Bo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Bu),yr.child=e,this.dispatchEvent(yr),yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,e,xg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ds,Sg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Hn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Mg={type:"move"};class $o{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const x of e.hand.values()){const p=n.getJointPose(x,i),m=this._getHandJoint(l,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Mg)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const th={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},ua={h:0,s:0,l:0};function Ho(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=Il(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Ho(a,s,e+1/3),this.g=Ho(a,s,e),this.b=Ho(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&ze("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:ze("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=th[e.toLowerCase()];return i!==void 0?this.setHex(i,n):ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pi(e.r),this.g=pi(e.g),this.b=pi(e.b),this}copyLinearToSRGB(e){return this.r=Br(e.r),this.g=Br(e.g),this.b=Br(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.workingToColorSpace(Jt.copy(this),e),Math.round(Je(Jt.r*255,0,255))*65536+Math.round(Je(Jt.g*255,0,255))*256+Math.round(Je(Jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ot){tt.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+n,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Mi),e.getHSL(ua);const i=Ds(Mi.h,ua.h,n),r=Ds(Mi.s,ua.s,n),s=Ds(Mi.l,ua.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ze;Ze.NAMES=th;class Ul{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=n,this.far=i}clone(){return new Ul(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class bg extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new On,this.environmentIntensity=1,this.environmentRotation=new On,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const In=new O,ti=new O,Go=new O,ni=new O,Mr=new O,br=new O,$u=new O,Vo=new O,Wo=new O,Xo=new O,Zo=new Et,qo=new Et,Yo=new Et;class An{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ti.subVectors(i,n),Go.subVectors(e,n);const a=In.dot(In),o=In.dot(ti),c=In.dot(Go),l=ti.dot(ti),u=ti.dot(Go),h=a*l-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,g=(a*u-o*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,ni)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,ni.x),c.addScaledVector(a,ni.y),c.addScaledVector(o,ni.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Zo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Zo.fromBufferAttribute(e,n),qo.fromBufferAttribute(e,i),Yo.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Zo,s.x),a.addScaledVector(qo,s.y),a.addScaledVector(Yo,s.z),a}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ti.subVectors(e,n),In.cross(ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ti.subVectors(this.a,this.b),In.cross(ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return An.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return An.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Mr.subVectors(r,i),br.subVectors(s,i),Vo.subVectors(e,i);const c=Mr.dot(Vo),l=br.dot(Vo);if(c<=0&&l<=0)return n.copy(i);Wo.subVectors(e,r);const u=Mr.dot(Wo),h=br.dot(Wo);if(u>=0&&h<=u)return n.copy(r);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0&&c-u>0)return a=c/(c-u),n.copy(i).addScaledVector(Mr,a);Xo.subVectors(e,s);const d=Mr.dot(Xo),g=br.dot(Xo);if(g>=0&&d<=g)return n.copy(s);const x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(br,o);const p=u*g-d*h;if(p<=0&&h-u>=0&&d-g>=0)return $u.subVectors(s,r),o=(h-u)/(h-u+(d-g)),n.copy(r).addScaledVector($u,o);const m=1/(p+x+f);return a=x*m,o=f*m,n.copy(i).addScaledVector(Mr,a).addScaledVector(br,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class hr{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Ln.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Ln.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Ln.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),da.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),da.copy(i.boundingBox)),da.applyMatrix4(e.matrixWorld),this.union(da)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fs),fa.subVectors(this.max,fs),Er.subVectors(e.a,fs),wr.subVectors(e.b,fs),Tr.subVectors(e.c,fs),bi.subVectors(wr,Er),Ei.subVectors(Tr,wr),qi.subVectors(Er,Tr);let n=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-qi.z,qi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,qi.z,0,-qi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-qi.y,qi.x,0];return!Ko(n,Er,wr,Tr,fa)||(n=[1,0,0,0,1,0,0,0,1],!Ko(n,Er,wr,Tr,fa))?!1:(ha.crossVectors(bi,Ei),n=[ha.x,ha.y,ha.z],Ko(n,Er,wr,Tr,fa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ii[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ii[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ii[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ii[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ii[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ii[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ii[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ii[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ii),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ii=[new O,new O,new O,new O,new O,new O,new O,new O],Ln=new O,da=new hr,Er=new O,wr=new O,Tr=new O,bi=new O,Ei=new O,qi=new O,fs=new O,fa=new O,ha=new O,Yi=new O;function Ko(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Yi.fromArray(t,s);const o=r.x*Math.abs(Yi.x)+r.y*Math.abs(Yi.y)+r.z*Math.abs(Yi.z),c=e.dot(Yi),l=n.dot(Yi),u=i.dot(Yi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const Pt=new O,pa=new We;let Eg=0;class mi extends fr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Eg++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Kf,this.updateRanges=[],this.gpuType=Dn,this.version=0,this._normalizationScale=e!==void 0?Mo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)pa.fromBufferAttribute(this,n),pa.applyMatrix3(e),this.setXY(n,pa.x,pa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Ll(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Nl(e,this.array)}}class nh extends mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ih extends mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const wg=new hr,hs=new O,Jo=new O;class ea{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):wg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;hs.subVectors(e,this.center);const n=hs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(hs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(hs.copy(e.center).add(Jo)),this.expandByPoint(hs.copy(e.center).sub(Jo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Tg=0;const En=new pt,jo=new Ht,Ar=new O,vn=new hr,ps=new hr,$t=new O;class Fn extends fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Tg++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?ih:nh)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return jo.lookAt(e),jo.updateMatrix(),this.applyMatrix4(jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];vn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];ps.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(vn.min,ps.min),vn.expandByPoint($t),$t.addVectors(vn.max,ps.max),vn.expandByPoint($t)):(vn.expandByPoint(ps.min),vn.expandByPoint(ps.max))}vn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)$t.fromBufferAttribute(o,l),c&&(Ar.fromBufferAttribute(e,l),$t.add(Ar)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[],l=new Uint8Array(i.count);for(let z=0;z<i.count;z++)o[z]=new O,c[z]=new O;const u=new O,h=new O,f=new O,d=new We,g=new We,x=new We,p=new O,m=new O;function S(z,N,F){l[z]=l[N]=l[F]=1,u.fromBufferAttribute(i,z),h.fromBufferAttribute(i,N),f.fromBufferAttribute(i,F),d.fromBufferAttribute(s,z),g.fromBufferAttribute(s,N),x.fromBufferAttribute(s,F),h.sub(u),f.sub(u),g.sub(d),x.sub(d);const B=1/(g.x*x.y-x.x*g.y);isFinite(B)&&(p.copy(h).multiplyScalar(x.y).addScaledVector(f,-g.y).multiplyScalar(B),m.copy(f).multiplyScalar(g.x).addScaledVector(h,-x.x).multiplyScalar(B),o[z].add(p),o[N].add(p),o[F].add(p),c[z].add(m),c[N].add(m),c[F].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,N=w.length;z<N;++z){const F=w[z],B=F.start,Y=F.count;for(let D=B,X=B+Y;D<X;D+=3)S(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const y=new O,A=new O,T=new O,_=new O;function M(z){T.fromBufferAttribute(r,z),_.copy(T);const N=o[z];y.copy(N),y.sub(T.multiplyScalar(T.dot(N))).normalize(),A.crossVectors(_,N);const B=A.dot(c[z])<0?-1:1;a.setXYZW(z,y.x,y.y,y.z,B)}for(let z=0,N=i.count;z<N;++z)l[z]&&M(z);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new O,s=new O,a=new O,o=new O,c=new O,l=new O,u=new O,h=new O;if(e)for(let f=0,d=e.count;f<d;f+=3){const g=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,p),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,p),o.add(u),c.add(u),l.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=n.count;f<d;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,g=0;for(let x=0,p=c.length;x<p;x++){o.isInterleavedBufferAttribute?d=c[x]*o.data.stride+o.offset:d=c[x]*u;for(let m=0;m<u;m++)f[g++]=l[d++]}return new mi(f,u,h)}if(this.index===null)return ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Fn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,i);n.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,i);c.push(d)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const l=i[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(n))}const s=e.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(n));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ag{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Kf,this.updateRanges=[],this.version=0,this.uuid=ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Hu(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=Hu(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function Hu(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=ki()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const nn=new O;class oo{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Mo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyMatrix4(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.applyNormalMatrix(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)nn.fromBufferAttribute(this,n),nn.transformDirection(e),this.setXYZ(n,nn.x,nn.y,nn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){ao("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new mi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new oo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ao("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Ll(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Nl(e,this.data.array)}}const Qo=new O,Rg=new O,Cg=new He;class Ri{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qo.subVectors(i,n).cross(Rg.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Qo),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Cg.getNormalMatrix(e),r=this.coplanarPoint(Qo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Pg=0;class ns extends fr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pg++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Ls,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=If,this.blendDst=Lf,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Uo,this.stencilZFail=Uo,this.stencilZPass=Uo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){ze(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){ze(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ri().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Va extends ns{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Rr;const ms=new O,Cr=new O,Pr=new O,Ir=new We,gs=new We,rh=new pt,ma=new O,_s=new O,ga=new O,Gu=new We,ec=new We,Vu=new We;class tc extends Ht{constructor(e=new Va){if(super(),this.isSprite=!0,this.type="Sprite",Rr===void 0){Rr=new Fn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ag(n,5);Rr.setIndex([0,1,2,0,2,3]),Rr.setAttribute("position",new oo(i,3,0,!1)),Rr.setAttribute("uv",new oo(i,2,3,!1))}this.geometry=Rr,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Cr.setFromMatrixScale(this.matrixWorld),rh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Cr.multiplyScalar(-Pr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;_a(ma.set(-.5,-.5,0),Pr,a,Cr,r,s),_a(_s.set(.5,-.5,0),Pr,a,Cr,r,s),_a(ga.set(.5,.5,0),Pr,a,Cr,r,s),Gu.set(0,0),ec.set(1,0),Vu.set(1,1);let o=e.ray.intersectTriangle(ma,_s,ga,!1,ms);if(o===null&&(_a(_s.set(-.5,.5,0),Pr,a,Cr,r,s),ec.set(0,1),o=e.ray.intersectTriangle(ma,ga,_s,!1,ms),o===null))return;const c=e.ray.origin.distanceTo(ms);c<e.near||c>e.far||n.push({distance:c,point:ms.clone(),uv:An.getInterpolation(ms,ma,_s,ga,Gu,ec,Vu,new We),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function _a(t,e,n,i,r,s){Ir.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(gs.x=s*Ir.x-r*Ir.y,gs.y=r*Ir.x+s*Ir.y):gs.copy(Ir),t.copy(e),t.x+=gs.x,t.y+=gs.y,t.applyMatrix4(rh)}const ri=new O,nc=new O,va=new O,xa=new O;class Ig{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,n),ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nc.copy(e).add(n).multiplyScalar(.5),va.copy(n).sub(e).normalize(),xa.copy(this.origin).sub(nc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(va),o=xa.dot(this.direction),c=-xa.dot(va),l=xa.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*c-o,f=a*o-c,g=s*u,h>=0)if(f>=-g)if(f<=g){const x=1/u;h*=x,f*=x,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-c),s),d=-h*h+f*(f+2*c)+l);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(nc).addScaledVector(va,f),d}intersectSphere(e,n){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);const i=ri.dot(this.direction),r=ri.dot(ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(i=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(i=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=e.x-a.x,f=e.y-a.y,d=e.z-a.z,g=n.x-a.x,x=n.y-a.y,p=n.z-a.z,m=i.x-a.x,S=i.y-a.y,w=i.z-a.z,y=Math.abs(c),A=Math.abs(l),T=Math.abs(u);let _,M,z,N,F,B,Y,D,X,ie,V,pe;if(y>=A&&y>=T?(z=c,B=h,X=g,pe=m,c>=0?(_=l,M=u,N=f,F=d,Y=x,D=p,ie=S,V=w):(_=u,M=l,N=d,F=f,Y=p,D=x,ie=w,V=S)):A>=T?(z=l,B=f,X=x,pe=S,l>=0?(_=u,M=c,N=d,F=h,Y=p,D=g,ie=w,V=m):(_=c,M=u,N=h,F=d,Y=g,D=p,ie=m,V=w)):(z=u,B=d,X=p,pe=w,u>=0?(_=c,M=l,N=h,F=f,Y=g,D=x,ie=m,V=S):(_=l,M=c,N=f,F=h,Y=x,D=g,ie=S,V=m)),z===0)return null;const J=_/z,se=M/z,ue=1/z,Re=N-J*B,Be=F-se*B,re=Y-J*X,ve=D-se*X,Te=ie-J*pe,Oe=V-se*pe,Me=Te*ve-Oe*re,$e=Re*Oe-Be*Te,vt=re*Be-ve*Re;if(r){if(Me<0||$e<0||vt<0)return null}else if((Me<0||$e<0||vt<0)&&(Me>0||$e>0||vt>0))return null;const ke=Me+$e+vt;if(ke===0)return null;const ot=ue*(Me*B+$e*X+vt*pe);return(ke>0?ot<0:ot>0)?null:this.at(ot/ke,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class er extends ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.combine=Nf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wu=new pt,Ki=new Ig,Sa=new ea,Xu=new O,ya=new O,Ma=new O,ba=new O,ic=new O,Ea=new O,Zu=new O,wa=new O;class _t extends Ht{constructor(e=new Fn,n=new er){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ea.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const u=o[c],h=s[c];u!==0&&(ic.fromBufferAttribute(h,e),a?Ea.addScaledVector(ic,u):Ea.addScaledVector(ic.sub(n),u))}n.add(Ea)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Sa.copy(i.boundingSphere),Sa.applyMatrix4(s),Ki.copy(e.ray).recast(e.near),!(Sa.containsPoint(Ki.origin)===!1&&(Ki.intersectSphere(Sa,Xu)===null||Ki.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(s).invert(),Ki.copy(e.ray).applyMatrix4(Wu),!(i.boundingBox!==null&&Ki.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ki)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),w=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,A=w;y<A;y+=3){const T=o.getX(y),_=o.getX(y+1),M=o.getX(y+2);r=Ta(this,m,e,i,l,u,h,T,_,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const S=o.getX(p),w=o.getX(p+1),y=o.getX(p+2);r=Ta(this,a,e,i,l,u,h,S,w,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=f.length;g<x;g++){const p=f[g],m=a[p.materialIndex],S=Math.max(p.start,d.start),w=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let y=S,A=w;y<A;y+=3){const T=y,_=y+1,M=y+2;r=Ta(this,m,e,i,l,u,h,T,_,M),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let p=g,m=x;p<m;p+=3){const S=p,w=p+1,y=p+2;r=Ta(this,a,e,i,l,u,h,S,w,y),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function Lg(t,e,n,i,r,s,a,o){let c;if(e.side===cn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===or,o),c===null)return null;wa.copy(o),wa.applyMatrix4(t.matrixWorld);const l=n.ray.origin.distanceTo(wa);return l<n.near||l>n.far?null:{distance:l,point:wa.clone(),object:t}}function Ta(t,e,n,i,r,s,a,o,c,l){t.getVertexPosition(o,ya),t.getVertexPosition(c,Ma),t.getVertexPosition(l,ba);const u=Lg(t,e,n,i,ya,Ma,ba,Zu);if(u){const h=new O;An.getBarycoord(Zu,ya,Ma,ba,h),r&&(u.uv=An.getInterpolatedAttribute(r,o,c,l,h,new We)),s&&(u.uv1=An.getInterpolatedAttribute(s,o,c,l,h,new We)),a&&(u.normal=An.getInterpolatedAttribute(a,o,c,l,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new O,materialIndex:0};An.getNormal(ya,Ma,ba,f.normal),u.face=f,u.barycoord=h}return u}class sh extends Qt{constructor(e=null,n=1,i=1,r,s,a,o,c,l=Xt,u=Xt,h,f){super(null,a,o,c,l,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qu extends mi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Lr=new pt,Yu=new pt,Aa=[],Ku=new hr,Ng=new pt,vs=new _t,xs=new ea;class Dg extends _t{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new qu(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,Ng)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new hr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Lr),Ku.copy(e.boundingBox).applyMatrix4(Lr),this.boundingBox.union(Ku)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ea),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Lr),xs.copy(e.boundingSphere).applyMatrix4(Lr),this.boundingSphere.union(xs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(i),e.ray.intersectsSphere(xs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Lr),Yu.multiplyMatrices(i,Lr),vs.matrixWorld=Yu,vs.raycast(e,Aa);for(let a=0,o=Aa.length;a<o;a++){const c=Aa[a];c.instanceId=s,c.object=this,n.push(c)}Aa.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new qu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new sh(new Float32Array(r*this.count),r,this.count,Al,Dn));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<i.length;l++)a+=i[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=r*e;return s[c]=o,s.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ji=new ea,Ug=new We(.5,.5),Ra=new O;class Xs{constructor(e=new Ri,n=new Ri,i=new Ri,r=new Ri,s=new Ri,a=new Ri){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Un,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],h=s[5],f=s[6],d=s[7],g=s[8],x=s[9],p=s[10],m=s[11],S=s[12],w=s[13],y=s[14],A=s[15];if(r[0].setComponents(l-a,d-u,m-g,A-S).normalize(),r[1].setComponents(l+a,d+u,m+g,A+S).normalize(),r[2].setComponents(l+o,d+h,m+x,A+w).normalize(),r[3].setComponents(l-o,d-h,m-x,A-w).normalize(),i)r[4].setComponents(c,f,p,y).normalize(),r[5].setComponents(l-c,d-f,m-p,A-y).normalize();else if(r[4].setComponents(l-c,d-f,m-p,A-y).normalize(),n===Un)r[5].setComponents(l+c,d+f,m+p,A+y).normalize();else if(n===Vs)r[5].setComponents(c,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ji.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ji.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ji)}intersectsSprite(e){Ji.center.set(0,0,0);const n=Ug.distanceTo(e.center);return Ji.radius=.7071067811865476+n,Ji.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ji)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ra.x=r.normal.x>0?e.max.x:e.min.x,Ra.y=r.normal.y>0?e.max.y:e.min.y,Ra.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ra)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Ju=new pt;class Ol{constructor(){this.coordinateSystem=Un,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Ju.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Xs),i[r].setFromProjectionMatrix(Ju,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Xs),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Ol().copy(this)}}class ah extends Qt{constructor(e=[],n=Wr,i,r,s,a,o,c,l,u){super(e,n,i,r,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ji extends Qt{constructor(e,n,i,r,s,a,o,c,l){super(e,n,i,r,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zr extends Qt{constructor(e,n,i=Zn,r,s,a,o=Xt,c=Xt,l,u=Ui,h=1){if(u!==Ui&&u!==Li)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,c,u,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dl(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class oh extends Zr{constructor(e,n=Zn,i=Wr,r,s,a=Xt,o=Xt,c,l=Ui){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ch extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class pr extends Fn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function g(x,p,m,S,w,y,A,T,_,M,z){const N=y/_,F=A/M,B=y/2,Y=A/2,D=T/2,X=_+1,ie=M+1;let V=0,pe=0;const J=new O;for(let se=0;se<ie;se++){const ue=se*F-Y;for(let Re=0;Re<X;Re++){const Be=Re*N-B;J[x]=Be*S,J[p]=ue*w,J[m]=D,l.push(J.x,J.y,J.z),J[x]=0,J[p]=0,J[m]=T>0?1:-1,u.push(J.x,J.y,J.z),h.push(Re/_),h.push(1-se/M),V+=1}}for(let se=0;se<M;se++)for(let ue=0;ue<_;ue++){const Re=f+ue+X*se,Be=f+ue+X*(se+1),re=f+(ue+1)+X*(se+1),ve=f+(ue+1)+X*se;c.push(Re,Be,ve),c.push(Be,re,ve),pe+=6}o.addGroup(d,pe,z),d+=pe,f+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zs extends Fn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],f=[],d=[];let g=0;const x=[],p=i/2;let m=0;S(),a===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(f,3)),this.setAttribute("uv",new Gt(d,2));function S(){const y=new O,A=new O;let T=0;const _=(n-e)/i;for(let M=0;M<=s;M++){const z=[],N=M/s,F=N*(n-e)+e;for(let B=0;B<=r;B++){const Y=B/r,D=Y*c+o,X=Math.sin(D),ie=Math.cos(D);A.x=F*X,A.y=-N*i+p,A.z=F*ie,h.push(A.x,A.y,A.z),y.set(X,_,ie).normalize(),f.push(y.x,y.y,y.z),d.push(Y,1-N),z.push(g++)}x.push(z)}for(let M=0;M<r;M++)for(let z=0;z<s;z++){const N=x[z][M],F=x[z+1][M],B=x[z+1][M+1],Y=x[z][M+1];(e>0||z!==0)&&(u.push(N,F,Y),T+=3),(n>0||z!==s-1)&&(u.push(F,B,Y),T+=3)}l.addGroup(m,T,0),m+=T}function w(y){const A=g,T=new We,_=new O;let M=0;const z=y===!0?e:n,N=y===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,p*N,0),f.push(0,N,0),d.push(.5,.5),g++;const F=g;for(let B=0;B<=r;B++){const D=B/r*c+o,X=Math.cos(D),ie=Math.sin(D);_.x=z*ie,_.y=p*N,_.z=z*X,h.push(_.x,_.y,_.z),f.push(0,N,0),T.x=X*.5+.5,T.y=ie*.5*N+.5,d.push(T.x,T.y),g++}for(let B=0;B<r;B++){const Y=A+B,D=F+B;y===!0?u.push(D,D+1,Y):u.push(D+1,D,Y),M+=3}l.addGroup(m,M,y===!0?1:2),m+=M}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Fl extends Zs{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Fl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ir extends Fn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),l=o+1,u=c+1,h=e/o,f=n/c,d=[],g=[],x=[],p=[];for(let m=0;m<u;m++){const S=m*f-a;for(let w=0;w<l;w++){const y=w*h-s;g.push(y,-S,0),x.push(0,0,1),p.push(w/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const w=S+l*m,y=S+l*(m+1),A=S+1+l*(m+1),T=S+1+l*m;d.push(w,y,T),d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}class kl extends Fn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const c=Math.min(a+o,Math.PI);let l=0;const u=[],h=new O,f=new O,d=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){const S=[],w=m/i,y=a+w*o,A=e*Math.cos(y),T=Math.sqrt(e*e-A*A);let _=0;m===0&&a===0?_=.5/n:m===i&&c===Math.PI&&(_=-.5/n);for(let M=0;M<=n;M++){const z=M/n,N=r+z*s;h.x=-T*Math.cos(N),h.y=A,h.z=T*Math.sin(N),g.push(h.x,h.y,h.z),f.copy(h).normalize(),x.push(f.x,f.y,f.z),p.push(z+_,1-w),S.push(l++)}u.push(S)}for(let m=0;m<i;m++)for(let S=0;S<n;S++){const w=u[m][S+1],y=u[m][S],A=u[m+1][S],T=u[m+1][S+1];(m!==0||a>0)&&d.push(w,y,T),(m!==i-1||c<Math.PI)&&d.push(y,A,T)}this.setIndex(d),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Us extends Fn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const c=[],l=[],u=[],h=[],f=new O,d=new O,g=new O;for(let x=0;x<=i;x++){const p=a+x/i*o;for(let m=0;m<=r;m++){const S=m/r*s;d.x=(e+n*Math.cos(p))*Math.cos(S),d.y=(e+n*Math.cos(p))*Math.sin(S),d.z=n*Math.sin(p),l.push(d.x,d.y,d.z),f.x=e*Math.cos(S),f.y=e*Math.sin(S),g.subVectors(d,f).normalize(),u.push(g.x,g.y,g.z),h.push(m/r),h.push(x/i)}}for(let x=1;x<=i;x++)for(let p=1;p<=r;p++){const m=(r+1)*x+p-1,S=(r+1)*(x-1)+p-1,w=(r+1)*(x-1)+p,y=(r+1)*x+p;c.push(m,S,y),c.push(S,w,y)}this.setIndex(c),this.setAttribute("position",new Gt(l,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Us(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function qr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(ju(r))r.isRenderTargetTexture?(ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(ju(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=qr(t[n]);for(const r in i)e[r]=i[r]}return e}function ju(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Og(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function lh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const Fg={clone:qr,merge:an};var kg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kg,this.fragmentShader=zg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qr(e.uniforms),this.uniformsGroups=Og(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new We().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new He().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Bg extends lr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Wa extends ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=el,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new On,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $g extends Wa{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return zr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){zr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Hg extends ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Gg extends ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class uh extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class Vg extends uh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const rc=new pt,Qu=new O,ed=new O;class Wg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Qu.setFromMatrixPosition(e.matrixWorld),n.position.copy(Qu),ed.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(ed),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){rc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(rc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Vs||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),n.multiply(rc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ca=new O,Pa=new ts,zn=new O;class dh extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Un,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ca,Pa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,zn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ca,Pa,zn),zn.x===1&&zn.y===1&&zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ca,Pa,zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wi=new O,td=new We,nd=new We;class Nn extends dh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Ws*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ns*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Ns*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wi.x,wi.y).multiplyScalar(-e/wi.z),wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(wi.x,wi.y).multiplyScalar(-e/wi.z)}getViewSize(e,n){return this.getViewBounds(e,td,nd),n.subVectors(nd,td)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ns*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/l,r*=a.width/c,i*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class fh extends dh{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Xg extends Wg{constructor(){super(new fh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class id extends uh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Xg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Nr=-90,Dr=1;class tl extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Nn(Nr,Dr,e,n);r.layers=this.layers,this.add(r);const s=new Nn(Nr,Dr,e,n);s.layers=this.layers,this.add(s);const a=new Nn(Nr,Dr,e,n);a.layers=this.layers,this.add(a);const o=new Nn(Nr,Dr,e,n);o.layers=this.layers,this.add(o);const c=new Nn(Nr,Dr,e,n);c.layers=this.layers,this.add(c);const l=new Nn(Nr,Dr,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const l of n)this.remove(l);if(e===Un)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Vs)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Zg extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function rd(t,e,n,i){const r=qg(i);switch(n){case Wf:return t*e;case Al:return t*e/r.components*r.byteLength;case Rl:return t*e/r.components*r.byteLength;case cr:return t*e*2/r.components*r.byteLength;case Cl:return t*e*2/r.components*r.byteLength;case Xf:return t*e*3/r.components*r.byteLength;case Vn:return t*e*4/r.components*r.byteLength;case Pl:return t*e*4/r.components*r.byteLength;case Ba:case $a:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ha:case Ga:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wc:case Ac:return Math.max(t,16)*Math.max(e,8)/4;case Ec:case Tc:return Math.max(t,8)*Math.max(e,8)/2;case Rc:case Cc:case Ic:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pc:case to:case Nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $c:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Hc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Zc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case qc:case Yc:case Kc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Jc:case jc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case no:case Qc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function qg(t){switch(t){case Sn:case $f:return{byteLength:1,components:1};case Gs:case Hf:case qn:return{byteLength:2,components:1};case wl:case Tl:return{byteLength:2,components:4};case Zn:case El:case Dn:return{byteLength:4,components:1};case Gf:case Vf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ml}}));typeof window<"u"&&(window.__THREE__?ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ml);function hh(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Yg(t){const e=new WeakMap;function n(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=t.createBuffer();t.bindBuffer(c,f),t.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=t.HALF_FLOAT:d=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=t.SHORT;else if(l instanceof Uint32Array)d=t.UNSIGNED_INT;else if(l instanceof Int32Array)d=t.INT;else if(l instanceof Int8Array)d=t.BYTE;else if(l instanceof Uint8Array)d=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,c,l){const u=c.array,h=c.updateRanges;if(t.bindBuffer(l,o),h.length===0)t.bufferSubData(l,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],x=h[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,h[f]=x)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const x=h[d];t.bufferSubData(l,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Kg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jg=`#ifdef USE_ALPHAHASH
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
#endif`,jg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,t0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,n0=`#ifdef USE_AOMAP
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
#endif`,i0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,r0=`#ifdef USE_BATCHING
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
#endif`,s0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,a0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,o0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,c0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,l0=`#ifdef USE_IRIDESCENCE
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
#endif`,u0=`#ifdef USE_BUMPMAP
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
#endif`,d0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,p0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,m0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,g0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,v0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,x0=`#define PI 3.141592653589793
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
} // validated`,S0=`vec3 transformedNormal = objectNormal;
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
#endif`,y0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,E0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",T0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,P0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,I0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,N0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,U0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,O0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,k0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,B0=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,$0=`#ifdef USE_ENVMAP
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
#endif`,H0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,G0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,W0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,X0=`PhysicalMaterial material;
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
#endif`,Z0=`uniform sampler2D dfgLUT;
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,J0=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,j0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Q0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,e_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,t_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,n_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,i_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,r_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,s_=`#if defined( USE_POINTS_UV )
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
#endif`,a_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,o_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,c_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,l_=`#if defined( USE_MORPHCOLORS )
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
#endif`,u_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,d_=`#ifdef USE_MORPHTARGETS
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
#endif`,f_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,h_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,p_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,m_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,g_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,__=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,v_=`#ifdef USE_NORMALMAP
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
#endif`,x_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,S_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,M_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,b_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,E_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,w_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,A_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,R_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,C_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,P_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,I_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,L_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,D_=`float getShadowMask() {
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
}`,U_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O_=`#ifdef USE_SKINNING
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
#endif`,F_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,k_=`#ifdef USE_SKINNING
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
#endif`,z_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G_=`#ifdef USE_TRANSMISSION
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
#endif`,V_=`#ifdef USE_TRANSMISSION
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
#endif`,W_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Y_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,K_=`uniform sampler2D t2D;
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
}`,J_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j_=`uniform float backgroundBlurriness;
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
}`,Q_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ev=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tv=`#include <common>
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
}`,nv=`#if DEPTH_PACKING == 3200
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
}`,iv=`#define DISTANCE
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
}`,rv=`#define DISTANCE
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
}`,sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,av=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ov=`uniform float scale;
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
}`,cv=`uniform vec3 diffuse;
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
}`,lv=`#include <common>
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
}`,uv=`uniform vec3 diffuse;
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
}`,dv=`#define LAMBERT
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
}`,fv=`#define LAMBERT
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
}`,hv=`#define MATCAP
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
}`,pv=`#define MATCAP
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
}`,mv=`#define NORMAL
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
}`,gv=`#define NORMAL
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
}`,_v=`#define PHONG
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
}`,vv=`#define PHONG
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
}`,xv=`#define STANDARD
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
}`,Sv=`#define STANDARD
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
}`,yv=`#define TOON
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
}`,Mv=`#define TOON
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
}`,bv=`uniform float size;
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
}`,Ev=`uniform vec3 diffuse;
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
}`,wv=`#include <common>
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
}`,Tv=`uniform vec3 color;
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
}`,Av=`uniform float rotation;
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
}`,Rv=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:Kg,alphahash_pars_fragment:Jg,alphamap_fragment:jg,alphamap_pars_fragment:Qg,alphatest_fragment:e0,alphatest_pars_fragment:t0,aomap_fragment:n0,aomap_pars_fragment:i0,batching_pars_vertex:r0,batching_vertex:s0,begin_vertex:a0,beginnormal_vertex:o0,bsdfs:c0,iridescence_fragment:l0,bumpmap_pars_fragment:u0,clipping_planes_fragment:d0,clipping_planes_pars_fragment:f0,clipping_planes_pars_vertex:h0,clipping_planes_vertex:p0,color_fragment:m0,color_pars_fragment:g0,color_pars_vertex:_0,color_vertex:v0,common:x0,defaultnormal_vertex:S0,displacementmap_pars_vertex:y0,displacementmap_vertex:M0,emissivemap_fragment:b0,emissivemap_pars_fragment:E0,colorspace_fragment:w0,colorspace_pars_fragment:T0,envmap_fragment:A0,envmap_common_pars_fragment:R0,envmap_pars_fragment:C0,envmap_pars_vertex:P0,envmap_physical_pars_fragment:$0,envmap_vertex:I0,fog_vertex:L0,fog_pars_vertex:N0,fog_fragment:D0,fog_pars_fragment:U0,gradientmap_pars_fragment:O0,lightmap_pars_fragment:F0,lights_lambert_fragment:k0,lights_lambert_pars_fragment:z0,lights_pars_begin:B0,lights_toon_fragment:H0,lights_toon_pars_fragment:G0,lights_phong_fragment:V0,lights_phong_pars_fragment:W0,lights_physical_fragment:X0,lights_physical_pars_fragment:Z0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:K0,lightprobes_pars_fragment:J0,logdepthbuf_fragment:j0,logdepthbuf_pars_fragment:Q0,logdepthbuf_pars_vertex:e_,logdepthbuf_vertex:t_,map_fragment:n_,map_pars_fragment:i_,map_particle_fragment:r_,map_particle_pars_fragment:s_,metalnessmap_fragment:a_,metalnessmap_pars_fragment:o_,morphinstance_vertex:c_,morphcolor_vertex:l_,morphnormal_vertex:u_,morphtarget_pars_vertex:d_,morphtarget_vertex:f_,normal_fragment_begin:h_,normal_fragment_maps:p_,normal_pars_fragment:m_,normal_pars_vertex:g_,normal_vertex:__,normalmap_pars_fragment:v_,clearcoat_normal_fragment_begin:x_,clearcoat_normal_fragment_maps:S_,clearcoat_pars_fragment:y_,iridescence_pars_fragment:M_,opaque_fragment:b_,packing:E_,premultiplied_alpha_fragment:w_,project_vertex:T_,dithering_fragment:A_,dithering_pars_fragment:R_,roughnessmap_fragment:C_,roughnessmap_pars_fragment:P_,shadowmap_pars_fragment:I_,shadowmap_pars_vertex:L_,shadowmap_vertex:N_,shadowmask_pars_fragment:D_,skinbase_vertex:U_,skinning_pars_vertex:O_,skinning_vertex:F_,skinnormal_vertex:k_,specularmap_fragment:z_,specularmap_pars_fragment:B_,tonemapping_fragment:$_,tonemapping_pars_fragment:H_,transmission_fragment:G_,transmission_pars_fragment:V_,uv_pars_fragment:W_,uv_pars_vertex:X_,uv_vertex:Z_,worldpos_vertex:q_,background_vert:Y_,background_frag:K_,backgroundCube_vert:J_,backgroundCube_frag:j_,cube_vert:Q_,cube_frag:ev,depth_vert:tv,depth_frag:nv,distance_vert:iv,distance_frag:rv,equirect_vert:sv,equirect_frag:av,linedashed_vert:ov,linedashed_frag:cv,meshbasic_vert:lv,meshbasic_frag:uv,meshlambert_vert:dv,meshlambert_frag:fv,meshmatcap_vert:hv,meshmatcap_frag:pv,meshnormal_vert:mv,meshnormal_frag:gv,meshphong_vert:_v,meshphong_frag:vv,meshphysical_vert:xv,meshphysical_frag:Sv,meshtoon_vert:yv,meshtoon_frag:Mv,points_vert:bv,points_frag:Ev,shadow_vert:wv,shadow_frag:Tv,sprite_vert:Av,sprite_frag:Rv},be={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Gn={basic:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:an([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:an([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:an([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:an([be.points,be.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:an([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:an([be.common,be.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:an([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:an([be.sprite,be.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:an([be.common,be.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:an([be.lights,be.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Gn.physical={uniforms:an([Gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ia={r:0,b:0,g:0},Cv=new pt,ph=new He;ph.set(-1,0,0,0,1,0,0,0,1);function Pv(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,c,l,u=null,h=0,f=null;function d(S){let w=S.isScene===!0?S.background:null;if(w&&w.isTexture){const y=S.backgroundBlurriness>0;w=e.get(w,y)}return w}function g(S){let w=!1;const y=d(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),w=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(S,w){const y=d(w);y&&y.isCubeTexture?(l===void 0&&(l=new _t(new pr(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:qr(Gn.backgroundCube.uniforms),vertexShader:Gn.backgroundCube.vertexShader,fragmentShader:Gn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Cv.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(ph),l.material.toneMapped=tt.getTransfer(y.colorSpace)!==dt,(u!==y||h!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,f=t.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new _t(new ir(2,2),new lr({name:"BackgroundMaterial",uniforms:qr(Gn.background.uniforms),vertexShader:Gn.background.vertexShader,fragmentShader:Gn.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=tt.getTransfer(y.colorSpace)!==dt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,f=t.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,w){S.getRGB(Ia,lh(t)),n.buffers.color.setClear(Ia.r,Ia.g,Ia.b,w,s)}function m(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),o=w,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:x,dispose:m}}function Iv(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(F,B,Y,D,X){let ie=!1;const V=h(F,D,Y,B);s!==V&&(s=V,l(s.object)),ie=d(F,D,Y,X),ie&&g(F,D,Y,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,y(F,B,Y,D),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return t.createVertexArray()}function l(F){return t.bindVertexArray(F)}function u(F){return t.deleteVertexArray(F)}function h(F,B,Y,D){const X=D.wireframe===!0;let ie=i[B.id];ie===void 0&&(ie={},i[B.id]=ie);const V=F.isInstancedMesh===!0?F.id:0;let pe=ie[V];pe===void 0&&(pe={},ie[V]=pe);let J=pe[Y.id];J===void 0&&(J={},pe[Y.id]=J);let se=J[X];return se===void 0&&(se=f(c()),J[X]=se),se}function f(F){const B=[],Y=[],D=[];for(let X=0;X<n;X++)B[X]=0,Y[X]=0,D[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Y,attributeDivisors:D,object:F,attributes:{},index:null}}function d(F,B,Y,D){const X=s.attributes,ie=B.attributes;let V=0;const pe=Y.getAttributes();for(const J in pe)if(pe[J].location>=0){const ue=X[J];let Re=ie[J];if(Re===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(Re=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(Re=F.instanceColor)),ue===void 0||ue.attribute!==Re||Re&&ue.data!==Re.data)return!0;V++}return s.attributesNum!==V||s.index!==D}function g(F,B,Y,D){const X={},ie=B.attributes;let V=0;const pe=Y.getAttributes();for(const J in pe)if(pe[J].location>=0){let ue=ie[J];ue===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(ue=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(ue=F.instanceColor));const Re={};Re.attribute=ue,ue&&ue.data&&(Re.data=ue.data),X[J]=Re,V++}s.attributes=X,s.attributesNum=V,s.index=D}function x(){const F=s.newAttributes;for(let B=0,Y=F.length;B<Y;B++)F[B]=0}function p(F){m(F,0)}function m(F,B){const Y=s.newAttributes,D=s.enabledAttributes,X=s.attributeDivisors;Y[F]=1,D[F]===0&&(t.enableVertexAttribArray(F),D[F]=1),X[F]!==B&&(t.vertexAttribDivisor(F,B),X[F]=B)}function S(){const F=s.newAttributes,B=s.enabledAttributes;for(let Y=0,D=B.length;Y<D;Y++)B[Y]!==F[Y]&&(t.disableVertexAttribArray(Y),B[Y]=0)}function w(F,B,Y,D,X,ie,V){V===!0?t.vertexAttribIPointer(F,B,Y,X,ie):t.vertexAttribPointer(F,B,Y,D,X,ie)}function y(F,B,Y,D){x();const X=D.attributes,ie=Y.getAttributes(),V=B.defaultAttributeValues;for(const pe in ie){const J=ie[pe];if(J.location>=0){let se=X[pe];if(se===void 0&&(pe==="instanceMatrix"&&F.instanceMatrix&&(se=F.instanceMatrix),pe==="instanceColor"&&F.instanceColor&&(se=F.instanceColor)),se!==void 0){const ue=se.normalized,Re=se.itemSize,Be=e.get(se);if(Be===void 0)continue;const re=Be.buffer,ve=Be.type,Te=Be.bytesPerElement,Oe=ve===t.INT||ve===t.UNSIGNED_INT||se.gpuType===El;if(se.isInterleavedBufferAttribute){const Me=se.data,$e=Me.isInterleavedBuffer===!0?Me.stride:Me.itemSize,vt=se.offset;if(Me.isInstancedInterleavedBuffer||Me.isInstancedBufferAttribute){for(let ke=0;ke<J.locationSize;ke++)m(J.location+ke,Me.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ke=0;ke<J.locationSize;ke++)p(J.location+ke);t.bindBuffer(t.ARRAY_BUFFER,re);for(let ke=0;ke<J.locationSize;ke++)w(J.location+ke,Re/J.locationSize,ve,ue,$e*Te,(vt+Re/J.locationSize*ke)*Te,Oe)}else{if(se.isInstancedBufferAttribute){for(let Me=0;Me<J.locationSize;Me++)m(J.location+Me,se.meshPerAttribute);F.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Me=0;Me<J.locationSize;Me++)p(J.location+Me);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Me=0;Me<J.locationSize;Me++)w(J.location+Me,Re/J.locationSize,ve,ue,Re*Te,Re/J.locationSize*Me*Te,Oe)}}else if(V!==void 0){const ue=V[pe];if(ue!==void 0)switch(ue.length){case 2:t.vertexAttrib2fv(J.location,ue);break;case 3:t.vertexAttrib3fv(J.location,ue);break;case 4:t.vertexAttrib4fv(J.location,ue);break;default:t.vertexAttrib1fv(J.location,ue)}}}}S()}function A(){z();for(const F in i){const B=i[F];for(const Y in B){const D=B[Y];for(const X in D){const ie=D[X];for(const V in ie)u(ie[V].object),delete ie[V];delete D[X]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;const B=i[F.id];for(const Y in B){const D=B[Y];for(const X in D){const ie=D[X];for(const V in ie)u(ie[V].object),delete ie[V];delete D[X]}}delete i[F.id]}function _(F){for(const B in i){const Y=i[B];for(const D in Y){const X=Y[D];if(X[F.id]===void 0)continue;const ie=X[F.id];for(const V in ie)u(ie[V].object),delete ie[V];delete X[F.id]}}}function M(F){for(const B in i){const Y=i[B],D=F.isInstancedMesh===!0?F.id:0,X=Y[D];if(X!==void 0){for(const ie in X){const V=X[ie];for(const pe in V)u(V[pe].object),delete V[pe];delete X[ie]}delete Y[D],Object.keys(Y).length===0&&delete i[B]}}}function z(){N(),a=!0,s!==r&&(s=r,l(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:N,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:M,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function Lv(t,e,n){let i;function r(c){i=c}function s(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,u){u!==0&&(t.drawArraysInstanced(i,c,l,u),n.update(l,i,u))}function o(c,l,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,u);let f=0;for(let d=0;d<u;d++)f+=l[d];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Nv(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==Vn&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const M=_===qn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Sn&&_!==Dn&&!M&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp";const u=c(l);u!==l&&(ze("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=n.logarithmicDepthBuffer===!0&&h===!1;n.reversedDepthBuffer===!0&&h===!1&&ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&h===!0&&ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const d=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),S=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:h,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:y,maxSamples:A,samples:T}}function Dv(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Ri,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||i!==0||r;return r=f,i=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,x=h.clipIntersection,p=h.clipShadows,m=t.get(h);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const S=s?0:i,w=S*4;let y=m.clippingState||null;c.value=y,y=u(g,f,w,d);for(let A=0;A!==w;++A)y[A]=n[A];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,f,d,g){const x=h!==null?h.length:0;let p=null;if(x!==0){if(p=c.value,g!==!0||p===null){const m=d+x*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let w=0,y=d;w!==x;++w,y+=4)a.copy(h[w]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}class zl extends Xn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new ah(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new pr(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:qr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:kr});s.uniforms.tEquirect.value=n;const a=new _t(r,s),o=n.minFilter;return n.minFilter===Ii&&(n.minFilter=mn),new tl(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const sd=256,Uv=3,Ov=20,mh=256,gh=16,Fv=3,kv=new O,zv=new Ze;class co{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new tl(1,10,null),this._boxMesh=new _t(new pr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=kv}=s,c=this._renderer;this._setSize(a);const l=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const h=c.autoClear,f=c.autoClearColor,d=c.autoClearDepth,g=c.autoClearStencil,x=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,x===null&&(e.background=c.getClearColor(zv));const p=new tl(i,r,u);return p.position.copy(o),p.update(c,e),c.autoClear=h,c.autoClearColor=f,c.autoClearDepth=d,c.autoClearStencil=g,e.background=x,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(l,n)),this._applyPMREM(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(sd,jf(e))}_fromTexture(e,n){e.mapping===Wr||e.mapping===Hs?this._setSize(e.image.length===0?sd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=ad(e,!1,!1),i=Math.log2(e)-Uv;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=ad(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===Wr||e.mapping===Hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=od()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Bv(),this._integrationMaterial=$v());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/gh);for(let a=0;a<=i;a++){const o=co.lodToRoughness(a,i);if(a>i-Fv)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const c=o>0?Math.log2(n)+.5*Math.log2(6/(mh*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Hv());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function ad(t,e,n){return new zl(t,{minFilter:Ii,generateMipmaps:e,type:qn,colorSpace:io,depthBuffer:n})}function ta(t,e,n){return new lr({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:n,side:cn,blending:kr,depthTest:!1,depthWrite:!1})}function Bv(){return ta("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mh}u

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
	`)}function $v(){return ta("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gh}},`

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
	`)}function Hv(){return ta("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ov}
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
	`)}function od(){return ta("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function cd(){return ta("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Gv(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,d=!1){return f==null?null:d?a(f):s(f)}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Lo||d===No)if(e.has(f)){const g=e.get(f).texture;return o(g,f.mapping)}else{const g=f.image;if(g&&g.height>0){const x=new zl(g.height);return x.fromEquirectangularTexture(t,f),e.set(f,x),f.addEventListener("dispose",l),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture&&f.isPMREMTexture!==!0){const d=f.mapping,g=d===Lo||d===No,x=d===Wr||d===Hs;if(g||x){let p=n.get(f);const m=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==m)return i===null&&(i=new co(t)),p=g?i.fromEquirectangular(f,p):i.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),p.texture;if(p!==void 0)return p.texture;{const S=f.image;return g&&S&&S.height>0||x&&S&&c(S)?(i===null&&(i=new co(t)),p=g?i.fromEquirectangular(f):i.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,n.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,d){return d===Lo?f.mapping=Wr:d===No&&(f.mapping=Hs),f}function c(f){let d=0;const g=6;for(let x=0;x<g;x++)f[x]!==void 0&&d++;return d===g}function l(f){const d=f.target;d.removeEventListener("dispose",l);const g=e.get(d);g!==void 0&&(e.delete(d),g.dispose())}function u(f){const d=f.target;d.removeEventListener("dispose",u);const g=n.get(d);g!==void 0&&(n.delete(d),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Vv(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&zr("WebGLRenderer: "+i+" extension not supported."),r}}}function Wv(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function l(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",o),r[x.id]=new WeakRef(x),a.register(x,x.id,x),n.memory.geometries++),x}function u(g){const x=g.attributes;for(const p in x)e.update(x[p],t.ARRAY_BUFFER)}function h(g){const x=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const S=x!==null?x.array.length:p.array.length/3-1,w=p.count>=65535?ih:nh,y=new w(Math.ceil(S/3)*6,1),A=y.array;if(x!==null){const _=x.array;m=x.version;for(let M=0,z=0;M<S;M+=3){const N=_[M+0],F=_[M+1],B=_[M+2];A[z++]=N,A[z++]=F,A[z++]=F,A[z++]=B,A[z++]=B,A[z++]=N}}else{m=p.version;for(let _=0,M=0;_<S;_+=3){const z=_+0,N=_+1,F=_+2;A[M++]=z,A[M++]=N,A[M++]=N,A[M++]=F,A[M++]=F,A[M++]=z}}y.version=m;const T=s.get(g);T&&e.remove(T),s.set(g,y)}function f(g){const x=s.get(g);if(x){const p=g.index;p!==null&&x.version<p.version&&h(g)}else h(g);return s.get(g)}function d(){for(const g in r){const x=r[g].deref();x!==void 0&&c(x)}}return{get:l,update:u,getWireframeAttribute:f,dispose:d}}function Xv(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function c(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function l(h,f,d){d!==0&&(t.drawElementsInstanced(i,f,s,h*a,d),n.update(f,i,d))}function u(h,f,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,d);let x=0;for(let p=0;p<d;p++)x+=f[p];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Zv(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function qv(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let N=function(){M.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var d=N;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let y=0;g===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let A=o.attributes.position.count*y,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const _=new Float32Array(A*T*4*h),M=new Qf(_,A,T,h);M.type=Dn,M.needsUpdate=!0;const z=y*4;for(let F=0;F<h;F++){const B=m[F],Y=S[F],D=w[F],X=A*T*4*F;for(let ie=0;ie<B.count;ie++){const V=ie*z;g===!0&&(r.fromBufferAttribute(B,ie),_[X+V+0]=r.x,_[X+V+1]=r.y,_[X+V+2]=r.z,_[X+V+3]=0),x===!0&&(r.fromBufferAttribute(Y,ie),_[X+V+4]=r.x,_[X+V+5]=r.y,_[X+V+6]=r.z,_[X+V+7]=0),p===!0&&(r.fromBufferAttribute(D,ie),_[X+V+8]=r.x,_[X+V+9]=r.y,_[X+V+10]=r.z,_[X+V+11]=D.itemSize===4?r.w:1)}}f={count:h,texture:M,size:new We(A,T)},i.set(o,f),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<l.length;p++)g+=l[p];const x=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(t,"morphTargetBaseInfluence",x),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Yv(t,e,n,i,r){let s=new WeakMap;function a(l){const u=r.render.frame,h=l.geometry,f=e.get(l,h);if(s.get(f)!==u&&(e.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==u&&(d.update(),s.set(d,u))}return f}function o(){s=new WeakMap}function c(l){const u=l.target;u.removeEventListener("dispose",c),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const Kv={[Df]:"LINEAR_TONE_MAPPING",[Uf]:"REINHARD_TONE_MAPPING",[Of]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[kf]:"AGX_TONE_MAPPING",[zf]:"NEUTRAL_TONE_MAPPING",[Ff]:"CUSTOM_TONE_MAPPING"};function Jv(t,e,n,i,r,s){const a=new Xn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null,l=null;const u=new Fn;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const h=new Bg({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new _t(u,h),d=new fh(-1,1,1,-1,0,1);let g=null,x=null,p=!1,m,S=null,w=[],y=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),c!==null&&c.setSize(A,T);for(let _=0;_<w.length;_++){const M=w[_];M.setSize&&M.setSize(A,T)}},this.setEffects=function(A){w=A,y=w.length>0&&w[0].isRenderPass===!0;const T=a.width,_=a.height;w.length>0&&o===null&&(o=new Xn(T,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}),c=new Xn(T,_,{type:qn,depthBuffer:!1,stencilBuffer:!1}));const M=r===!0&&w.some(z=>z.needsDepthTexture===!0);M!==(a.depthTexture!==null)&&(M===!0&&l===null&&(l=new Zr(T,_),s===!0&&(l.format=Li,l.type=Xr)),a.dispose(),a.depthTexture=M?l:null,a.resolveDepthBuffer=M,a.storeMultisampledDepthBuffer=M);for(let z=0;z<w.length;z++){const N=w[z];N.setSize&&N.setSize(T,_),M&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(l)}},this.begin=function(A,T){if(p||A.toneMapping===hi&&w.length===0)return!1;if(S=T,T!==null){const _=T.width,M=T.height;(a.width!==_||a.height!==M)&&this.setSize(_,M)}return y===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=hi,!0},this.hasRenderPass=function(){return y},this.end=function(A,T){A.toneMapping=m,p=!0;let _=a,M=o;for(let z=0;z<w.length;z++){const N=w[z];N.enabled!==!1&&(N.render(A,M,_,T),N.needsSwap!==!1&&(_=M,M=M===o?c:o))}if(g!==A.outputColorSpace||x!==A.toneMapping){g=A.outputColorSpace,x=A.toneMapping,h.defines={},tt.getTransfer(g)===dt&&(h.defines.SRGB_TRANSFER="");const z=Kv[x];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(S),A.render(f,d),S=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const _h=new Qt,vh=new Zr(1,1),xh=new oh(1),Sh=new Qf,yh=new mg,Mh=new ah,ld=[],ud=[],dd=new Float32Array(16),fd=new Float32Array(9),hd=new Float32Array(4);function is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=ld[r];if(s===void 0&&(s=new Float32Array(r),ld[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bo(t,e){let n=ud[e];n===void 0&&(n=new Int32Array(e),ud[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jv(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Qv(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function ex(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function tx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function nx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;hd.set(i),t.uniformMatrix2fv(this.addr,!1,hd),kt(n,i)}}function ix(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;fd.set(i),t.uniformMatrix3fv(this.addr,!1,fd),kt(n,i)}}function rx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;dd.set(i),t.uniformMatrix4fv(this.addr,!1,dd),kt(n,i)}}function sx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ax(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function ox(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function cx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function lx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ux(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function dx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function fx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Eo(t){return t.version===0&&(t.compareFunction=Yf,t.needsUpdate=!0),t}function hx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Eo(vh):s=_h,n.setTexture2D(e||s,r)}function px(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||yh,r)}function mx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Eo(xh):s=Mh,n.setTextureCube(e||s,r)}function gx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Sh,r)}function _x(t){switch(t){case 5126:return jv;case 35664:return Qv;case 35665:return ex;case 35666:return tx;case 35674:return nx;case 35675:return ix;case 35676:return rx;case 5124:case 35670:return sx;case 35667:case 35671:return ax;case 35668:case 35672:return ox;case 35669:case 35673:return cx;case 5125:return lx;case 36294:return ux;case 36295:return dx;case 36296:return fx;case 35678:case 36198:case 36298:case 36306:case 35682:return hx;case 35679:case 36299:case 36307:return px;case 35680:case 36300:case 36308:case 36293:return mx;case 36289:case 36303:case 36311:case 36292:return gx}}function vx(t,e){t.uniform1fv(this.addr,e)}function xx(t,e){const n=is(e,this.size,2);t.uniform2fv(this.addr,n)}function Sx(t,e){const n=is(e,this.size,3);t.uniform3fv(this.addr,n)}function yx(t,e){const n=is(e,this.size,4);t.uniform4fv(this.addr,n)}function Mx(t,e){const n=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function bx(t,e){const n=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Ex(t,e){const n=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function wx(t,e){t.uniform1iv(this.addr,e)}function Tx(t,e){t.uniform2iv(this.addr,e)}function Ax(t,e){t.uniform3iv(this.addr,e)}function Rx(t,e){t.uniform4iv(this.addr,e)}function Cx(t,e){t.uniform1uiv(this.addr,e)}function Px(t,e){t.uniform2uiv(this.addr,e)}function Ix(t,e){t.uniform3uiv(this.addr,e)}function Lx(t,e){t.uniform4uiv(this.addr,e)}function Nx(t,e,n){const i=this.cache,r=e.length,s=bo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Eo(vh):a=_h;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Dx(t,e,n){const i=this.cache,r=e.length,s=bo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||yh,s[a])}function Ux(t,e,n){const i=this.cache,r=e.length,s=bo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Eo(xh):a=Mh;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function Ox(t,e,n){const i=this.cache,r=e.length,s=bo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Sh,s[a])}function Fx(t){switch(t){case 5126:return vx;case 35664:return xx;case 35665:return Sx;case 35666:return yx;case 35674:return Mx;case 35675:return bx;case 35676:return Ex;case 5124:case 35670:return wx;case 35667:case 35671:return Tx;case 35668:case 35672:return Ax;case 35669:case 35673:return Rx;case 5125:return Cx;case 36294:return Px;case 36295:return Ix;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Nx;case 35679:case 36299:case 36307:return Dx;case 35680:case 36300:case 36308:case 36293:return Ux;case 36289:case 36303:case 36311:case 36292:return Ox}}class kx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=_x(n.type)}}class zx{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Fx(n.type)}}class Bx{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const sc=/(\w+)(\])?(\[|\.)?/g;function pd(t,e){t.seq.push(e),t.map[e.id]=e}function $x(t,e,n){const i=t.name,r=i.length;for(sc.lastIndex=0;;){const s=sc.exec(i),a=sc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){pd(n,l===void 0?new kx(o,t,e):new zx(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new Bx(o),pd(n,h)),n=h}}}class Xa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);$x(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function md(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Hx=37297;let Gx=0;function Vx(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const gd=new He;function Wx(t){tt._getMatrix(gd,tt.workingColorSpace,t);const e=`mat3( ${gd.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case ro:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return ze("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function _d(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Vx(t.getShaderSource(e),o)}else return s}function Xx(t,e){const n=Wx(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Zx={[Df]:"Linear",[Uf]:"Reinhard",[Of]:"Cineon",[bl]:"ACESFilmic",[kf]:"AgX",[zf]:"Neutral",[Ff]:"Custom"};function qx(t,e){const n=Zx[e];return n===void 0?(ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const La=new O;function Yx(){tt.getLuminanceCoefficients(La);const t=La.x.toFixed(4),e=La.y.toFixed(4),n=La.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kx(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(As).join(`
`)}function Jx(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function jx(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function As(t){return t!==""}function vd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function xd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Qx=/^[ \t]*#include +<([\w\d./]+)>/gm;function nl(t){return t.replace(Qx,eS)}function eS(t,e){const n=Xe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return nl(n)}const tS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sd(t){return t.replace(tS,nS)}function nS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function yd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const iS={[za]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function rS(t){return iS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const sS={[Hs]:"ENVMAP_MODE_REFRACTION"};function aS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":sS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const oS={[Nf]:"ENVMAP_BLENDING_MULTIPLY",[Dm]:"ENVMAP_BLENDING_MIX",[Um]:"ENVMAP_BLENDING_ADD"};function cS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":oS[t.combine]||"ENVMAP_BLENDING_NONE"}function lS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=rS(n),l=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=aS(n),h=cS(n),f=Kx(n),d=Jx(s),g=r.createProgram();let x,p,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(As).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d].filter(As).join(`
`),p.length>0&&(p+=`
`)):(x=[yd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(As).join(`
`),p=[yd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,d,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==hi?"#define TONE_MAPPING":"",n.toneMapping!==hi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==hi?qx("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Xx("linearToOutputTexel",n.outputColorSpace),Yx(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(As).join(`
`)),a=nl(a),a=vd(a,n),a=xd(a,n),o=nl(o),o=vd(o,n),o=xd(o,n),a=Sd(a),o=Sd(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",n.glslVersion===Ru?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ru?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=m+x+a,w=m+p+o,y=md(r,r.VERTEX_SHADER,S),A=md(r,r.FRAGMENT_SHADER,w);r.attachShader(g,y),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(N){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(y)||"",Y=r.getShaderInfoLog(A)||"",D=F.trim(),X=B.trim(),ie=Y.trim();let V=!0,pe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,y,A);else{const J=_d(r,y,"vertex"),se=_d(r,A,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+D+`
`+J+`
`+se)}else D!==""?ze("WebGLProgram: Program Info Log:",D):(X===""||ie==="")&&(pe=!1);pe&&(N.diagnostics={runnable:V,programLog:D,vertexShader:{log:X,prefix:x},fragmentShader:{log:ie,prefix:p}})}r.deleteShader(y),r.deleteShader(A),_=new Xa(r,g),M=jx(r,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(g,Hx)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Gx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=A,this}let uS=0;class dS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fS(e),n.set(e,i)),i}}class fS{constructor(e){this.id=uS++,this.code=e,this.usedTimes=0}}function hS(t){return t===cr||t===to||t===no}function pS(t,e,n,i,r,s){const a=new eh,o=new dS,c=new Set,l=[],u=new Map,h=i.logarithmicDepthBuffer,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,M,z,N,F,B){const Y=N.fog,D=F.geometry,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?N.environment:null,ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||X,ie),pe=f[_.type];let J=i.precision;_.precision!==null&&(J=i.getMaxPrecision(_.precision),J!==_.precision&&ze("WebGLProgram.getParameters:",_.precision,"not supported, using",J,"instead."));const se=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,ue=se!==void 0?se.length:0;let Re=0;D.morphAttributes.position!==void 0&&(Re=1),D.morphAttributes.normal!==void 0&&(Re=2),D.morphAttributes.color!==void 0&&(Re=3);let Be,re,ve,Te;if(pe){const xe=Gn[pe];Be=xe.vertexShader,re=xe.fragmentShader}else{Be=_.vertexShader,re=_.fragmentShader;const xe=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,xe,st),ve=xe.id,Te=st.id}const Oe=t.getRenderTarget(),Me=t.state.buffers.depth.getReversed(),$e=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,ke=!!_.map,ot=!!_.matcap,lt=!!V,qe=lt&&V.isPMREMTexture===!0,Ut=!!_.aoMap,ut=!!_.lightMap,zt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,ln=!!_.displacementMap,Rt=!!_.emissiveMap,en=!!_.metalnessMap,un=!!_.roughnessMap,dn=_.anisotropy>0,k=_.clearcoat>0,fn=_.diffuseRoughness>0,mt=_.dispersion>0,L=_.retroreflectivity>0,P=_.iridescence>0,ne=_.sheen>0,j=_.transmission>0,Q=dn&&!!_.anisotropyMap,E=k&&!!_.clearcoatMap,v=k&&!!_.clearcoatNormalMap,R=k&&!!_.clearcoatRoughnessMap,H=fn&&!!_.diffuseRoughnessMap,I=P&&!!_.iridescenceMap,te=P&&!!_.iridescenceThicknessMap,ce=ne&&!!_.sheenColorMap,K=ne&&!!_.sheenRoughnessMap,Z=!!_.specularMap,le=!!_.specularColorMap,C=!!_.specularIntensityMap,ee=j&&!!_.transmissionMap,W=j&&!!_.thicknessMap,ge=!!_.gradientMap,me=!!_.alphaMap,oe=_.alphaTest>0,he=!!_.alphaHash,De=!!_.extensions;let fe=hi;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(fe=t.toneMapping);const Le=qe?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ge={shaderID:pe,shaderType:_.type,shaderName:_.name,vertexShader:Be,fragmentShader:re,defines:_.defines,customVertexShaderID:ve,customFragmentShaderID:Te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:J,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:$e,instancingColor:$e&&F.instanceColor!==null,instancingMorph:$e&&F.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:ot,envMap:lt,envMapMode:lt&&V.mapping,envMapPMREM:qe,envMapMaxLod:qe?Le.length-1:null,envMapSize:qe?Le[0].width:null,aoMap:Ut,lightMap:ut,bumpMap:zt,normalMap:xt,displacementMap:ln,emissiveMap:Rt,normalMapObjectSpace:xt&&_.normalMapType===km,normalMapTangentSpace:xt&&_.normalMapType===el,packedNormalMap:xt&&_.normalMapType===el&&hS(_.normalMap.format),metalnessMap:en,roughnessMap:un,anisotropy:dn,anisotropyMap:Q,clearcoat:k,clearcoatMap:E,clearcoatNormalMap:v,clearcoatRoughnessMap:R,diffuseRoughness:fn,diffuseRoughnessMap:H,dispersion:mt,retroreflection:L,iridescence:P,iridescenceMap:I,iridescenceThicknessMap:te,sheen:ne,sheenColorMap:ce,sheenRoughnessMap:K,specularMap:Z,specularColorMap:le,specularIntensityMap:C,transmission:j,transmissionMap:ee,thicknessMap:W,gradientMap:ge,opaque:_.transparent===!1&&_.blending===Ls&&_.alphaToCoverage===!1,alphaMap:me,alphaTest:oe,alphaHash:he,combine:_.combine,mapUv:ke&&d(_.map.channel),aoMapUv:Ut&&d(_.aoMap.channel),lightMapUv:ut&&d(_.lightMap.channel),bumpMapUv:zt&&d(_.bumpMap.channel),normalMapUv:xt&&d(_.normalMap.channel),displacementMapUv:ln&&d(_.displacementMap.channel),emissiveMapUv:Rt&&d(_.emissiveMap.channel),metalnessMapUv:en&&d(_.metalnessMap.channel),roughnessMapUv:un&&d(_.roughnessMap.channel),anisotropyMapUv:Q&&d(_.anisotropyMap.channel),clearcoatMapUv:E&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:H&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:I&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:te&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:K&&d(_.sheenRoughnessMap.channel),specularMapUv:Z&&d(_.specularMap.channel),specularColorMapUv:le&&d(_.specularColorMap.channel),specularIntensityMapUv:C&&d(_.specularIntensityMap.channel),transmissionMapUv:ee&&d(_.transmissionMap.channel),thicknessMapUv:W&&d(_.thicknessMap.channel),alphaMapUv:me&&d(_.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(xt||dn),vertexNormals:!!D.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!D.attributes.uv&&(ke||me),fog:!!Y,useFog:_.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||D.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:ue,morphTextureStride:Re,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:B.filter(xe=>xe.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:fe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Rt&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Tn,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:De&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&_.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function x(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)M.push(z),M.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(p(M,_),m(M,_),M.push(t.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function p(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapPMREM),_.push(M.envMapMaxLod),_.push(M.envMapSize),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.diffuseRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.numLightProbeGrids),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function m(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.diffuseRoughness&&a.enable(25),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){const M=f[_.type];let z;if(M){const N=Gn[M];z=Fg.clone(N.uniforms)}else z=_.uniforms;return z}function w(_,M){let z=u.get(M);return z!==void 0?++z.usedTimes:(z=new lS(t,M,_,r),l.push(z),u.set(M,z)),z}function y(_){if(--_.usedTimes===0){const M=l.indexOf(_);l[M]=l[l.length-1],l.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:S,acquireProgram:w,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:T}}function mS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function gS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Md(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function bd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let d=0;return f.isInstancedMesh&&(d+=2),f.isSkinnedMesh&&(d+=1),d}function o(f,d,g,x,p,m){let S=t[e];return S===void 0?(S={id:f.id,object:f,geometry:d,material:g,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:m},t[e]=S):(S.id=f.id,S.object=f,S.geometry=d,S.material=g,S.materialVariant=a(f),S.groupOrder=x,S.renderOrder=f.renderOrder,S.z=p,S.group=m),e++,S}function c(f,d,g,x,p,m,S){S.reversedDepth===!0&&(p=-p);const w=o(f,d,g,x,p,m);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):n.push(w)}function l(f,d,g,x,p,m){const S=o(f,d,g,x,p,m);g.transmission>0?i.unshift(S):g.transparent===!0?r.unshift(S):n.unshift(S)}function u(f,d){n.length>1&&n.sort(f||gS),i.length>1&&i.sort(d||Md),r.length>1&&r.sort(d||Md)}function h(){for(let f=e,d=t.length;f<d;f++){const g=t[f];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:l,finish:h,sort:u}}function _S(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new bd,t.set(i,[a])):r>=s.length?(a=new bd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function vS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new Ze};break;case"SpotLight":n={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function xS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let SS=0;function yS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function MS(t){const e=new vS,n=xS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new O);const r=new O,s=new pt,a=new pt;function o(l){let u=0,h=0,f=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let d=0,g=0,x=0,p=0,m=0,S=0,w=0,y=0,A=0,T=0,_=0,M=0,z=0,N=0;l.sort(yS);for(let B=0,Y=l.length;B<Y;B++){const D=l[B],X=D.color,ie=D.intensity,V=D.distance;let pe=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===cr?pe=D.shadow.map.texture:pe=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=X.r*ie,h+=X.g*ie,f+=X.b*ie;else if(D.isLightProbe){for(let J=0;J<9;J++)i.probe[J].addScaledVector(D.sh.coefficients[J],ie);N++}else if(D.isSunLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,ue=n.get(D);ue.shadowIntensity=se.intensity,ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize.copy(se.mapSize).multiply(se.getFrameExtents()),i.sunShadow[g]=ue,i.sunShadowMap[g]=pe;const Re=se.getViewportCount();for(let Be=0;Be<Re;Be++)i.sunShadowMatrix[x+Be]=se.getMatrix(Be),i.sunShadowCascade[x+Be]=se._cascadeData[Be];x+=Re,g++}i.sun[d]=J,d++}else if(D.isDirectionalLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const se=D.shadow,ue=n.get(D);ue.shadowIntensity=se.intensity,ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,i.directionalShadow[p]=ue,i.directionalShadowMap[p]=pe,i.directionalShadowMatrix[p]=D.shadow.matrix,A++}i.directional[p]=J,p++}else if(D.isSpotLight){const J=e.get(D);J.position.setFromMatrixPosition(D.matrixWorld),J.color.copy(X).multiplyScalar(ie),J.distance=V,J.coneCos=Math.cos(D.angle),J.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),J.decay=D.decay,i.spot[S]=J;const se=D.shadow;if(D.map&&(i.spotLightMap[M]=D.map,M++,se.updateMatrices(D),D.castShadow&&z++),i.spotLightMatrix[S]=se.matrix,D.castShadow){const ue=n.get(D);ue.shadowIntensity=se.intensity,ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,i.spotShadow[S]=ue,i.spotShadowMap[S]=pe,_++}S++}else if(D.isRectAreaLight){const J=e.get(D);J.color.copy(X).multiplyScalar(ie),J.halfWidth.set(D.width*.5,0,0),J.halfHeight.set(0,D.height*.5,0),i.rectArea[w]=J,w++}else if(D.isPointLight){const J=e.get(D);if(J.color.copy(D.color).multiplyScalar(D.intensity),J.distance=D.distance,J.decay=D.decay,D.castShadow){const se=D.shadow,ue=n.get(D);ue.shadowIntensity=se.intensity,ue.shadowBias=se.bias,ue.shadowNormalBias=se.normalBias,ue.shadowRadius=se.radius,ue.shadowMapSize=se.mapSize,ue.shadowCameraNear=se.camera.near,ue.shadowCameraFar=se.camera.far,i.pointShadow[m]=ue,i.pointShadowMap[m]=pe,i.pointShadowMatrix[m]=D.shadow.matrix,T++}i.point[m]=J,m++}else if(D.isHemisphereLight){const J=e.get(D);J.skyColor.copy(D.color).multiplyScalar(ie),J.groundColor.copy(D.groundColor).multiplyScalar(ie),i.hemi[y]=J,y++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=be.LTC_FLOAT_1,i.rectAreaLTC2=be.LTC_FLOAT_2):(i.rectAreaLTC1=be.LTC_HALF_1,i.rectAreaLTC2=be.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=f;const F=i.hash;(F.sunLength!==d||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==S||F.rectAreaLength!==w||F.hemiLength!==y||F.numSunShadows!==g||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==_||F.numSpotMaps!==M||F.numLightProbes!==N)&&(i.sun.length=d,i.directional.length=p,i.spot.length=S,i.rectArea.length=w,i.point.length=m,i.hemi.length=y,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+M-z,i.spotLightMap.length=M,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=N,F.sunLength=d,F.directionalLength=p,F.pointLength=m,F.spotLength=S,F.rectAreaLength=w,F.hemiLength=y,F.numSunShadows=g,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=_,F.numSpotMaps=M,F.numLightProbes=N,i.version=SS++)}function c(l,u){let h=0,f=0,d=0,g=0,x=0,p=0;const m=u.matrixWorldInverse;for(let S=0,w=l.length;S<w;S++){const y=l[S];if(y.isSunLight){const A=i.sun[h];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),h++}else if(y.isDirectionalLight){const A=i.directional[f];A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),f++}else if(y.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const A=i.rectArea[x];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),a.identity(),s.copy(y.matrixWorld),s.premultiply(m),a.extractRotation(s),A.halfWidth.set(y.width*.5,0,0),A.halfHeight.set(0,y.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){const A=i.point[d];A.position.setFromMatrixPosition(y.matrixWorld),A.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const A=i.hemi[p];A.direction.setFromMatrixPosition(y.matrixWorld),A.direction.transformDirection(m),p++}}}return{setup:o,setupView:c,state:i}}function Ed(t){const e=new MS(t),n=[],i=[],r=[];function s(h){u.camera=h,n.length=0,i.length=0,r.length=0}function a(h){h.isLightProbeGrid?r.push(h):n.push(h)}function o(h){i.push(h)}function c(){e.setup(n),r.sort((h,f)=>h.priority-f.priority||h.id-f.id)}function l(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function bS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ed(t),e.set(r,[o])):s>=a.length?(o=new Ed(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const ES=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,wS=`uniform sampler2D shadow_pass;
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
}`,TS=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],AS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],wd=new pt,Ss=new O,ac=new O;function RS(t,e,n){let i=new Xs;const r=new We,s=new We,a=new Et,o=new Hg,c=new Gg,l={},u=n.maxTextureSize,h={[or]:cn,[cn]:or,[Tn]:Tn},f=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:ES,fragmentShader:wS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Fn;g.setAttribute("position",new mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _t(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=za;let m=this.type;this.render=function(T,_,M){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===mm&&(ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=za);const z=t.getRenderTarget(),N=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),B=t.state;B.setBlending(kr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Y=m!==this.type;Y&&_.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(X=>X.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,X=T.length;D<X;D++){const ie=T[D],V=ie.shadow;if(V===void 0){ze("WebGLShadowMap:",ie,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const pe=V.getFrameExtents();r.multiply(pe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,V.mapSize.y=s.y));const J=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=J,V.map===null||Y===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Ts){if(ie.isPointLight){ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Xn(r.x,r.y,{format:cr,type:qn,minFilter:mn,magFilter:mn,generateMipmaps:!1}),V.map.texture.name=ie.name+".shadowMap",V.map.depthTexture=new Zr(r.x,r.y,Dn),V.map.depthTexture.name=ie.name+".shadowMapDepth",V.map.depthTexture.format=Ui,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt}else ie.isPointLight?(V.map=new zl(r.x),V.map.depthTexture=new oh(r.x,Zn)):(V.map=new Xn(r.x,r.y),V.map.depthTexture=new Zr(r.x,r.y,Zn)),V.map.depthTexture.name=ie.name+".shadowMap",V.map.depthTexture.format=Ui,this.type===za?(V.map.depthTexture.compareFunction=J?qf:Zf,V.map.depthTexture.minFilter=mn,V.map.depthTexture.magFilter=mn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Xt,V.map.depthTexture.magFilter=Xt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const se=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();ie.isPointLight!==!0&&V.updateMatrices(ie,M);const ue=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:M.layers;for(let Re=0;Re<se;Re++){const Be=V.getCamera(Re);if(ie.isPointLight){const re=V.camera,ve=V.matrix,Te=ie.distance||re.far;Te!==re.far&&(re.far=Te,re.updateProjectionMatrix()),Ss.setFromMatrixPosition(ie.matrixWorld),re.position.copy(Ss),ac.copy(re.position),ac.add(TS[Re]),re.up.copy(AS[Re]),re.lookAt(ac),re.updateMatrixWorld(),ve.makeTranslation(-Ss.x,-Ss.y,-Ss.z),wd.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),V._frustum.setFromProjectionMatrix(wd,re.coordinateSystem,re.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Re),t.clear();else{Re===0&&(t.setRenderTarget(V.map),t.clear());const re=V.getViewport(Re);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),B.viewport(a)}i=V.getFrustum(Re),y(_,M,Be,ie,ue,this.type)}V.isPointLightShadow!==!0&&this.type===Ts&&S(V,M),V.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(z,N,F)};function S(T,_){const M=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null?T.mapPass=new Xn(r.x,r.y,{format:cr,type:qn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(_,null,M,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(_,null,M,d,x,null)}function w(T,_,M,z){let N=null;const F=M.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)N=F;else if(N=M.isPointLight===!0?c:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const B=N.uuid,Y=_.uuid;let D=l[B];D===void 0&&(D={},l[B]=D);let X=D[Y];X===void 0&&(X=N.clone(),D[Y]=X,_.addEventListener("dispose",A)),N=X}if(N.visible=_.visible,N.wireframe=_.wireframe,z===Ts?N.side=_.shadowSide!==null?_.shadowSide:_.side:N.side=_.shadowSide!==null?_.shadowSide:h[_.side],N.alphaMap=_.alphaMap,N.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,N.map=_.map,N.clipShadows=_.clipShadows,N.clippingPlanes=_.clippingPlanes,N.clipIntersection=_.clipIntersection,N.displacementMap=_.displacementMap,N.displacementScale=_.displacementScale,N.displacementBias=_.displacementBias,N.wireframeLinewidth=_.wireframeLinewidth,N.linewidth=_.linewidth,M.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=t.properties.get(N);B.light=M}return N}function y(T,_,M,z,N,F){if(T.visible===!1)return;if(T.layers.test(N)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Ts)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,T.matrixWorld);const D=e.update(T),X=T.material;if(Array.isArray(X)){const ie=D.groups;for(let V=0,pe=ie.length;V<pe;V++){const J=ie[V],se=X[J.materialIndex];if(se&&se.visible){const ue=w(T,se,z,F);T.onBeforeShadow(t,T,_,M,D,ue,J),t.renderBufferDirect(M,null,D,ue,T,J),T.onAfterShadow(t,T,_,M,D,ue,J)}}}else if(X.visible){const ie=w(T,X,z,F);T.onBeforeShadow(t,T,_,M,D,ie,null),t.renderBufferDirect(M,null,D,ie,T,null),T.onAfterShadow(t,T,_,M,D,ie,null)}}const Y=T.children;for(let D=0,X=Y.length;D<X;D++)y(Y[D],_,M,z,N,F)}function A(T){T.target.removeEventListener("dispose",A);for(const M in l){const z=l[M],N=T.target.uuid;N in z&&(z[N].dispose(),delete z[N])}}}function CS(t,e){function n(){let C=!1;const ee=new Et;let W=null;const ge=new Et(0,0,0,0);return{setMask:function(me){W!==me&&!C&&(t.colorMask(me,me,me,me),W=me)},setLocked:function(me){C=me},setClear:function(me,oe,he,De,fe){fe===!0&&(me*=De,oe*=De,he*=De),ee.set(me,oe,he,De),ge.equals(ee)===!1&&(t.clearColor(me,oe,he,De),ge.copy(ee))},reset:function(){C=!1,W=null,ge.set(-1,0,0,0)}}}function i(){let C=!1,ee=!1,W=null,ge=null,me=null;return{setReversed:function(oe){if(ee!==oe){const he=e.get("EXT_clip_control");oe?he.clipControlEXT(he.LOWER_LEFT_EXT,he.ZERO_TO_ONE_EXT):he.clipControlEXT(he.LOWER_LEFT_EXT,he.NEGATIVE_ONE_TO_ONE_EXT),ee=oe;const De=me;me=null,this.setClear(De)}},getReversed:function(){return ee},setTest:function(oe){oe?Me(t.DEPTH_TEST):$e(t.DEPTH_TEST)},setMask:function(oe){W!==oe&&!C&&(t.depthMask(oe),W=oe)},setFunc:function(oe){if(ee&&(oe=qm[oe]),ge!==oe){switch(oe){case gc:t.depthFunc(t.NEVER);break;case _c:t.depthFunc(t.ALWAYS);break;case vc:t.depthFunc(t.LESS);break;case $s:t.depthFunc(t.LEQUAL);break;case xc:t.depthFunc(t.EQUAL);break;case Sc:t.depthFunc(t.GEQUAL);break;case yc:t.depthFunc(t.GREATER);break;case Mc:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=oe}},setLocked:function(oe){C=oe},setClear:function(oe){me!==oe&&(me=oe,ee&&(oe=1-oe),t.clearDepth(oe))},reset:function(){C=!1,W=null,ge=null,me=null,ee=!1}}}function r(){let C=!1,ee=null,W=null,ge=null,me=null,oe=null,he=null,De=null,fe=null;return{setTest:function(Le){C||(Le?Me(t.STENCIL_TEST):$e(t.STENCIL_TEST))},setMask:function(Le){ee!==Le&&!C&&(t.stencilMask(Le),ee=Le)},setFunc:function(Le,Ge,xe){(W!==Le||ge!==Ge||me!==xe)&&(t.stencilFunc(Le,Ge,xe),W=Le,ge=Ge,me=xe)},setOp:function(Le,Ge,xe){(oe!==Le||he!==Ge||De!==xe)&&(t.stencilOp(Le,Ge,xe),oe=Le,he=Ge,De=xe)},setLocked:function(Le){C=Le},setClear:function(Le){fe!==Le&&(t.clearStencil(Le),fe=Le)},reset:function(){C=!1,ee=null,W=null,ge=null,me=null,oe=null,he=null,De=null,fe=null}}}const s=new n,a=new i,o=new r;let c={};const l=new WeakMap;let u={},h={},f={},d=new WeakMap,g=[],x=null,p=!1,m=null,S=null,w=null,y=null,A=null,T=null,_=null,M=new Ze(0,0,0),z=0,N=!1,F=null,B=null,Y=null,D=null,X=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,pe=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(J)[1]),V=pe>=1):J.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),V=pe>=2);let se=null,ue={};const Re=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),re=new Et().fromArray(Re),ve=new Et().fromArray(Be);function Te(C,ee,W,ge){const me=new Uint8Array(4),oe=t.createTexture();t.bindTexture(C,oe),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let he=0;he<W;he++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(ee,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(ee+he,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return oe}const Oe={};Oe[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Me(t.DEPTH_TEST),a.setFunc($s),zt(!1),xt(Eu),Me(t.CULL_FACE),Ut(kr);function Me(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function $e(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function vt(C,ee){return f[C]!==ee?(t.bindFramebuffer(C,ee),f[C]=ee,C===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ee),C===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ee),!0):!1}function ke(C,ee){let W=g,ge=!1;if(C){W=d.get(ee),W===void 0&&(W=[],d.set(ee,W));const me=C.textures;if(W.length!==me.length||W[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,he=me.length;oe<he;oe++)W[oe]=t.COLOR_ATTACHMENT0+oe;W.length=me.length,ge=!0}}else W[0]!==t.BACK&&(W[0]=t.BACK,ge=!0);ge&&t.drawBuffers(W)}function ot(C){return x!==C?(t.useProgram(C),x=C,!0):!1}const lt={[Ur]:t.FUNC_ADD,[_m]:t.FUNC_SUBTRACT,[vm]:t.FUNC_REVERSE_SUBTRACT};lt[xm]=t.MIN,lt[Sm]=t.MAX;const qe={[ym]:t.ZERO,[Mm]:t.ONE,[bm]:t.SRC_COLOR,[If]:t.SRC_ALPHA,[Cm]:t.SRC_ALPHA_SATURATE,[Am]:t.DST_COLOR,[wm]:t.DST_ALPHA,[Em]:t.ONE_MINUS_SRC_COLOR,[Lf]:t.ONE_MINUS_SRC_ALPHA,[Rm]:t.ONE_MINUS_DST_COLOR,[Tm]:t.ONE_MINUS_DST_ALPHA,[Pm]:t.CONSTANT_COLOR,[Im]:t.ONE_MINUS_CONSTANT_COLOR,[Lm]:t.CONSTANT_ALPHA,[Nm]:t.ONE_MINUS_CONSTANT_ALPHA};function Ut(C,ee,W,ge,me,oe,he,De,fe,Le){if(C===kr){p===!0&&($e(t.BLEND),p=!1);return}if(p===!1&&(Me(t.BLEND),p=!0),C!==gm){if(C!==m||Le!==N){if((S!==Ur||A!==Ur)&&(t.blendEquation(t.FUNC_ADD),S=Ur,A=Ur),Le)switch(C){case Ls:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wu:t.blendFunc(t.ONE,t.ONE);break;case Tu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Au:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",C);break}else switch(C){case Ls:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case wu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Tu:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Au:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",C);break}w=null,y=null,T=null,_=null,M.set(0,0,0),z=0,m=C,N=Le}return}me=me||ee,oe=oe||W,he=he||ge,(ee!==S||me!==A)&&(t.blendEquationSeparate(lt[ee],lt[me]),S=ee,A=me),(W!==w||ge!==y||oe!==T||he!==_)&&(t.blendFuncSeparate(qe[W],qe[ge],qe[oe],qe[he]),w=W,y=ge,T=oe,_=he),(De.equals(M)===!1||fe!==z)&&(t.blendColor(De.r,De.g,De.b,fe),M.copy(De),z=fe),m=C,N=!1}function ut(C,ee){C.side===Tn?$e(t.CULL_FACE):Me(t.CULL_FACE);let W=C.side===cn;ee&&(W=!W),zt(W),C.blending===Ls&&C.transparent===!1?Ut(kr):Ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const ge=C.stencilWrite;o.setTest(ge),ge&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Rt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Me(t.SAMPLE_ALPHA_TO_COVERAGE):$e(t.SAMPLE_ALPHA_TO_COVERAGE)}function zt(C){F!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),F=C)}function xt(C){C!==hm?(Me(t.CULL_FACE),C!==B&&(C===Eu?t.cullFace(t.BACK):C===pm?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):$e(t.CULL_FACE),B=C}function ln(C){C!==Y&&(V&&t.lineWidth(C),Y=C)}function Rt(C,ee,W){C?(Me(t.POLYGON_OFFSET_FILL),(D!==ee||X!==W)&&(D=ee,X=W,a.getReversed()&&(ee=-ee,W=-W),t.polygonOffset(ee,W))):$e(t.POLYGON_OFFSET_FILL)}function en(C){C?Me(t.SCISSOR_TEST):$e(t.SCISSOR_TEST)}function un(C){C===void 0&&(C=t.TEXTURE0+ie-1),se!==C&&(t.activeTexture(C),se=C)}function dn(C,ee,W){W===void 0&&(se===null?W=t.TEXTURE0+ie-1:W=se);let ge=ue[W];ge===void 0&&(ge={type:void 0,texture:void 0},ue[W]=ge),(ge.type!==C||ge.texture!==ee)&&(se!==W&&(t.activeTexture(W),se=W),t.bindTexture(C,ee||Oe[C]),ge.type=C,ge.texture=ee)}function k(){const C=ue[se];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function fn(){try{t.compressedTexImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function mt(){try{t.compressedTexImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function L(){try{t.texSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function P(){try{t.texSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function ne(){try{t.compressedTexSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function Q(){try{t.texStorage2D(...arguments)}catch(C){at("WebGLState:",C)}}function E(){try{t.texStorage3D(...arguments)}catch(C){at("WebGLState:",C)}}function v(){try{t.texImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function R(){try{t.texImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function H(C){return h[C]!==void 0?h[C]:t.getParameter(C)}function I(C,ee){h[C]!==ee&&(t.pixelStorei(C,ee),h[C]=ee)}function te(C){re.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function ce(C){ve.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ve.copy(C))}function K(C,ee){let W=l.get(ee);W===void 0&&(W=new WeakMap,l.set(ee,W));let ge=W.get(C);ge===void 0&&(ge=t.getUniformBlockIndex(ee,C.name),t.uniformBlockBinding(ee,ge,ge),W.set(C,ge))}function Z(C,ee,W){const me=l.get(ee).get(C);c[me]!==W&&(t.bindBufferBase(t.UNIFORM_BUFFER,me,W),c[me]=W)}function le(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},se=null,ue={},f={},c={},d=new WeakMap,g=[],x=null,p=!1,m=null,S=null,w=null,y=null,A=null,T=null,_=null,M=new Ze(0,0,0),z=0,N=!1,F=null,B=null,Y=null,D=null,X=null,re.set(0,0,t.canvas.width,t.canvas.height),ve.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Me,disable:$e,bindFramebuffer:vt,drawBuffers:ke,useProgram:ot,setBlending:Ut,setMaterial:ut,setFlipSided:zt,setCullFace:xt,setLineWidth:ln,setPolygonOffset:Rt,setScissorTest:en,activeTexture:un,bindTexture:dn,unbindTexture:k,compressedTexImage2D:fn,compressedTexImage3D:mt,texImage2D:v,texImage3D:R,pixelStorei:I,getParameter:H,updateUBOMapping:K,uniformBlockBinding:Z,texStorage2D:Q,texStorage3D:E,texSubImage2D:L,texSubImage3D:P,compressedTexSubImage2D:ne,compressedTexSubImage3D:j,scissor:te,viewport:ce,reset:le}}function PS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,u=new WeakMap,h=new Set;let f;const d=new WeakMap,g=new Set,x=new FinalizationRegistry(E=>g.delete(E));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,v){return p?new OffscreenCanvas(E,v):so("canvas")}function S(E,v,R){let H=1;const I=Q(E);if((I.width>R||I.height>R)&&(H=R/Math.max(I.width,I.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const te=Math.floor(H*I.width),ce=Math.floor(H*I.height);f===void 0&&(f=m(te,ce));const K=v?m(te,ce):f;return K.width=te,K.height=ce,K.getContext("2d").drawImage(E,0,0,te,ce),ze("WebGLRenderer: Texture has been resized from ("+I.width+"x"+I.height+") to ("+te+"x"+ce+")."),K}else return"data"in E&&ze("WebGLRenderer: Image in DataTexture is too big ("+I.width+"x"+I.height+")."),E;return E}function w(E){return E.generateMipmaps}function y(E){t.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(E,v,R,H,I,te=!1){if(E!==null){if(t[E]!==void 0)return t[E];ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ce;H&&(ce=e.get("EXT_texture_norm16"),ce||ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===t.RED&&(R===t.FLOAT&&(K=t.R32F),R===t.HALF_FLOAT&&(K=t.R16F),R===t.UNSIGNED_BYTE&&(K=t.R8),R===t.UNSIGNED_SHORT&&ce&&(K=ce.R16_EXT),R===t.SHORT&&ce&&(K=ce.R16_SNORM_EXT)),v===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.R8UI),R===t.UNSIGNED_SHORT&&(K=t.R16UI),R===t.UNSIGNED_INT&&(K=t.R32UI),R===t.BYTE&&(K=t.R8I),R===t.SHORT&&(K=t.R16I),R===t.INT&&(K=t.R32I)),v===t.RG&&(R===t.FLOAT&&(K=t.RG32F),R===t.HALF_FLOAT&&(K=t.RG16F),R===t.UNSIGNED_BYTE&&(K=t.RG8),R===t.UNSIGNED_SHORT&&ce&&(K=ce.RG16_EXT),R===t.SHORT&&ce&&(K=ce.RG16_SNORM_EXT)),v===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.RG8UI),R===t.UNSIGNED_SHORT&&(K=t.RG16UI),R===t.UNSIGNED_INT&&(K=t.RG32UI),R===t.BYTE&&(K=t.RG8I),R===t.SHORT&&(K=t.RG16I),R===t.INT&&(K=t.RG32I)),v===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.RGB8UI),R===t.UNSIGNED_SHORT&&(K=t.RGB16UI),R===t.UNSIGNED_INT&&(K=t.RGB32UI),R===t.BYTE&&(K=t.RGB8I),R===t.SHORT&&(K=t.RGB16I),R===t.INT&&(K=t.RGB32I)),v===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&(K=t.RGBA8UI),R===t.UNSIGNED_SHORT&&(K=t.RGBA16UI),R===t.UNSIGNED_INT&&(K=t.RGBA32UI),R===t.BYTE&&(K=t.RGBA8I),R===t.SHORT&&(K=t.RGBA16I),R===t.INT&&(K=t.RGBA32I)),v===t.RGB&&(R===t.UNSIGNED_SHORT&&ce&&(K=ce.RGB16_EXT),R===t.SHORT&&ce&&(K=ce.RGB16_SNORM_EXT),R===t.UNSIGNED_INT_5_9_9_9_REV&&(K=t.RGB9_E5),R===t.UNSIGNED_INT_10F_11F_11F_REV&&(K=t.R11F_G11F_B10F)),v===t.RGBA){const Z=te?ro:tt.getTransfer(I);R===t.FLOAT&&(K=t.RGBA32F),R===t.HALF_FLOAT&&(K=t.RGBA16F),R===t.UNSIGNED_BYTE&&(K=Z===dt?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT&&ce&&(K=ce.RGBA16_EXT),R===t.SHORT&&ce&&(K=ce.RGBA16_SNORM_EXT),R===t.UNSIGNED_SHORT_4_4_4_4&&(K=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&(K=t.RGB5_A1)}return(K===t.R16F||K===t.R32F||K===t.RG16F||K===t.RG32F||K===t.RGBA16F||K===t.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function _(E,v){let R;return E?v===null||v===Zn||v===Xr?R=t.DEPTH24_STENCIL8:v===Dn?R=t.DEPTH32F_STENCIL8:v===Gs&&(R=t.DEPTH24_STENCIL8,ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===Xr?R=t.DEPTH_COMPONENT24:v===Dn?R=t.DEPTH_COMPONENT32F:v===Gs&&(R=t.DEPTH_COMPONENT16),R}function M(E,v){return w(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xt&&E.minFilter!==mn?Math.log2(Math.max(v.width,v.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?v.mipmaps.length:1}function z(E){const v=new WeakRef(E);i.get(E).__ref=v,g.add(v),x.register(E,v,v)}function N(E){const v=i.get(E).__ref;v!==void 0&&(g.delete(v),x.unregister(v))}function F(E){Y(E.target)}function B(E){D(E.target)}function Y(E){E.removeEventListener("dispose",F),N(E),ie(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function D(E){E.removeEventListener("dispose",B),N(E),pe(E)}function X(){for(const E of g){const v=E.deref();v!==void 0&&(v.isRenderTarget===!0?D(v):Y(v))}g.clear(),h.clear()}function ie(E){const v=i.get(E);if(v.__webglInit===void 0)return;const R=E.source,H=d.get(R);if(H){const I=H[v.__cacheKey];I.usedTimes--,I.usedTimes===0&&V(E),Object.keys(H).length===0&&d.delete(R)}i.remove(E)}function V(E){const v=i.get(E);t.deleteTexture(v.__webglTexture);const R=E.source,H=d.get(R);delete H[v.__cacheKey],a.memory.textures--}function pe(E){const v=i.get(E);v.__depthDisposeCallback&&v.__depthDisposeCallback();const R=E.depthTexture;if(R&&R.renderTarget===E&&Y(R),E.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(v.__webglFramebuffer[I]))for(let te=0;te<v.__webglFramebuffer[I].length;te++)t.deleteFramebuffer(v.__webglFramebuffer[I][te]);else t.deleteFramebuffer(v.__webglFramebuffer[I]);v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer[I])}else{if(Array.isArray(v.__webglFramebuffer))for(let I=0;I<v.__webglFramebuffer.length;I++)t.deleteFramebuffer(v.__webglFramebuffer[I]);else t.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&t.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&t.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let I=0;I<v.__webglColorRenderbuffer.length;I++)v.__webglColorRenderbuffer[I]&&t.deleteRenderbuffer(v.__webglColorRenderbuffer[I]);v.__webglDepthRenderbuffer&&t.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const H=E.textures;for(let I=0,te=H.length;I<te;I++){const ce=i.get(H[I]);ce.__webglTexture&&(t.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(H[I])}i.remove(E)}let J=0;function se(){J=0}function ue(){return J}function Re(E){J=E}function Be(){const E=J;return E>=r.maxTextures&&ze("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),J+=1,E}function re(E){const v=[];return v.push(E.wrapS),v.push(E.wrapT),v.push(E.wrapR||0),v.push(E.magFilter),v.push(E.minFilter),v.push(E.anisotropy),v.push(E.internalFormat),v.push(E.format),v.push(E.type),v.push(E.generateMipmaps),v.push(E.mipmapsAutoUpdate),v.push(E.premultiplyAlpha),v.push(E.flipY),v.push(E.unpackAlignment),v.push(E.colorSpace),v.join()}function ve(E,v){const R=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&R.__version!==E.version){const H=E.image;if(H===null)ze("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)ze("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(R,E,v);return}}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+v)}function Te(E,v){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,v);return}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+v)}function Oe(E,v){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,v);return}n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+v)}function Me(E,v){const R=i.get(E);if(E.version>0&&R.__version!==E.version){zt(R,E,v);return}n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+v)}const $e={[eo]:t.REPEAT,[ui]:t.CLAMP_TO_EDGE,[bc]:t.MIRRORED_REPEAT},vt={[Xt]:t.NEAREST,[Om]:t.NEAREST_MIPMAP_NEAREST,[oa]:t.NEAREST_MIPMAP_LINEAR,[mn]:t.LINEAR,[Do]:t.LINEAR_MIPMAP_NEAREST,[Ii]:t.LINEAR_MIPMAP_LINEAR},ke={[Bm]:t.NEVER,[Yf]:t.ALWAYS,[$m]:t.LESS,[Zf]:t.LEQUAL,[Hm]:t.EQUAL,[qf]:t.GEQUAL,[Gm]:t.GREATER,[Vm]:t.NOTEQUAL};function ot(E,v){if(v.type===Dn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===mn||v.magFilter===Do||v.magFilter===oa||v.magFilter===Ii||v.minFilter===mn||v.minFilter===Do||v.minFilter===oa||v.minFilter===Ii)&&ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,$e[v.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,$e[v.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,$e[v.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,vt[v.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,vt[v.minFilter]),v.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Xt||v.minFilter!==oa&&v.minFilter!==Ii||v.type===Dn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||i.get(v).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy}}}function lt(E,v){let R=!1;E.__webglInit===void 0&&(E.__webglInit=!0,v.addEventListener("dispose",F),z(v));const H=v.source;let I=d.get(H);I===void 0&&(I={},d.set(H,I));const te=re(v);if(te!==E.__cacheKey){I[te]===void 0&&(I[te]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,R=!0),I[te].usedTimes++;const ce=I[E.__cacheKey];ce!==void 0&&(I[E.__cacheKey].usedTimes--,ce.usedTimes===0&&V(v)),E.__cacheKey=te,E.__webglTexture=I[te].texture}return R}function qe(E,v,R){return Math.floor(Math.floor(E/R)/v)}function Ut(E,v,R,H){const te=E.updateRanges;if(te.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,v.width,v.height,R,H,v.data);else{te.sort((C,ee)=>C.start-ee.start);let ce=0;for(let C=1;C<te.length;C++){const ee=te[ce],W=te[C],ge=ee.start+ee.count,me=qe(W.start,v.width,4),oe=qe(ee.start,v.width,4);W.start<=ge+1&&me===oe&&qe(W.start+W.count-1,v.width,4)===me?ee.count=Math.max(ee.count,W.start+W.count-ee.start):(++ce,te[ce]=W)}te.length=ce+1;const K=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),le=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,v.width);for(let C=0,ee=te.length;C<ee;C++){const W=te[C],ge=Math.floor(W.start/4),me=Math.ceil(W.count/4),oe=ge%v.width,he=Math.floor(ge/v.width),De=me,fe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,he),n.texSubImage2D(t.TEXTURE_2D,0,oe,he,De,fe,R,H,v.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,K),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,le)}}function ut(E,v,R){let H=t.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),v.isData3DTexture&&(H=t.TEXTURE_3D);const I=lt(E,v),te=v.source;n.bindTexture(H,E.__webglTexture,t.TEXTURE0+R);const ce=i.get(te);if(te.version!==ce.__version||I===!0){if(n.activeTexture(t.TEXTURE0+R),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const fe=tt.getPrimaries(tt.workingColorSpace),Le=v.colorSpace===Ci?null:tt.getPrimaries(v.colorSpace),Ge=v.colorSpace===Ci||fe===Le?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge)}n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment);let Z=S(v.image,!1,r.maxTextureSize);Z=j(v,Z);const le=s.convert(v.format,v.colorSpace),C=s.convert(v.type);let ee=T(v.internalFormat,le,C,v.normalized,v.colorSpace,v.isVideoTexture);ot(H,v);let W;const ge=v.mipmaps,me=v.isVideoTexture!==!0,oe=ce.__version===void 0||I===!0,he=te.dataReady,De=M(v,Z);if(v.isDepthTexture)ee=_(v.format===Li,v.type),oe&&(me?n.texStorage2D(t.TEXTURE_2D,1,ee,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,ee,Z.width,Z.height,0,le,C,null));else if(v.isDataTexture)if(ge.length>0){me&&oe&&n.texStorage2D(t.TEXTURE_2D,De,ee,ge[0].width,ge[0].height);for(let fe=0,Le=ge.length;fe<Le;fe++)W=ge[fe],me?he&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,W.width,W.height,le,C,W.data):n.texImage2D(t.TEXTURE_2D,fe,ee,W.width,W.height,0,le,C,W.data);v.generateMipmaps=!1}else me?(oe&&n.texStorage2D(t.TEXTURE_2D,De,ee,Z.width,Z.height),he&&Ut(v,Z,le,C)):n.texImage2D(t.TEXTURE_2D,0,ee,Z.width,Z.height,0,le,C,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){me&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,ee,ge[0].width,ge[0].height,Z.depth);for(let fe=0,Le=ge.length;fe<Le;fe++)if(W=ge[fe],v.format!==Vn)if(le!==null)if(me){if(he)if(v.layerUpdates.size>0){const Ge=rd(W.width,W.height,v.format,v.type);for(const xe of v.layerUpdates){const st=W.data.subarray(xe*Ge/W.data.BYTES_PER_ELEMENT,(xe+1)*Ge/W.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,xe,W.width,W.height,1,le,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,W.width,W.height,Z.depth,le,W.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,fe,ee,W.width,W.height,Z.depth,0,W.data,0,0);else ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?he&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,fe,0,0,0,W.width,W.height,Z.depth,le,C,W.data):n.texImage3D(t.TEXTURE_2D_ARRAY,fe,ee,W.width,W.height,Z.depth,0,le,C,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{me&&oe&&n.texStorage2D(t.TEXTURE_2D,De,ee,ge[0].width,ge[0].height);for(let fe=0,Le=ge.length;fe<Le;fe++)W=ge[fe],v.format!==Vn?le!==null?me?he&&n.compressedTexSubImage2D(t.TEXTURE_2D,fe,0,0,W.width,W.height,le,W.data):n.compressedTexImage2D(t.TEXTURE_2D,fe,ee,W.width,W.height,0,W.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?he&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,W.width,W.height,le,C,W.data):n.texImage2D(t.TEXTURE_2D,fe,ee,W.width,W.height,0,le,C,W.data)}else if(v.isDataArrayTexture)if(me){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,ee,Z.width,Z.height,Z.depth),he)if(v.layerUpdates.size>0){const fe=rd(Z.width,Z.height,v.format,v.type);for(const Le of v.layerUpdates){const Ge=Z.data.subarray(Le*fe/Z.data.BYTES_PER_ELEMENT,(Le+1)*fe/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Le,Z.width,Z.height,1,le,C,Ge)}v.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,le,C,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ee,Z.width,Z.height,Z.depth,0,le,C,Z.data);else if(v.isData3DTexture)me?(oe&&n.texStorage3D(t.TEXTURE_3D,De,ee,Z.width,Z.height,Z.depth),he&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,le,C,Z.data)):n.texImage3D(t.TEXTURE_3D,0,ee,Z.width,Z.height,Z.depth,0,le,C,Z.data);else if(v.isFramebufferTexture){if(oe)if(me)n.texStorage2D(t.TEXTURE_2D,De,ee,Z.width,Z.height);else{let fe=Z.width,Le=Z.height;for(let Ge=0;Ge<De;Ge++)n.texImage2D(t.TEXTURE_2D,Ge,ee,fe,Le,0,le,C,null),fe>>=1,Le>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in t){const fe=t.canvas;if(fe.hasAttribute("layoutsubtree")||fe.setAttribute("layoutsubtree","true"),Z.parentNode!==fe){fe.appendChild(Z),h.add(v),fe.onpaint=Le=>{const Ge=Le.changedElements;for(const xe of h)Ge.includes(xe.image)&&(xe.needsUpdate=!0)},fe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Z);else{const Ge=t.RGBA,xe=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ge,xe,st,Z)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ge.length>0){if(me&&oe){const fe=Q(ge[0]);n.texStorage2D(t.TEXTURE_2D,De,ee,fe.width,fe.height)}for(let fe=0,Le=ge.length;fe<Le;fe++)W=ge[fe],me?he&&n.texSubImage2D(t.TEXTURE_2D,fe,0,0,le,C,W):n.texImage2D(t.TEXTURE_2D,fe,ee,le,C,W);v.generateMipmaps=!1}else if(me){if(oe){const fe=Q(Z);n.texStorage2D(t.TEXTURE_2D,De,ee,fe.width,fe.height)}he&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,le,C,Z)}else n.texImage2D(t.TEXTURE_2D,0,ee,le,C,Z);w(v)&&v.mipmapsAutoUpdate===!0&&y(H),ce.__version=te.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function zt(E,v,R){if(v.image.length!==6)return;const H=lt(E,v),I=v.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+R);const te=i.get(I);if(I.version!==te.__version||H===!0){n.activeTexture(t.TEXTURE0+R);const ce=tt.getPrimaries(tt.workingColorSpace),K=v.colorSpace===Ci?null:tt.getPrimaries(v.colorSpace),Z=v.colorSpace===Ci||ce===K?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const le=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let xe=0;xe<6;xe++)!le&&!C?ee[xe]=S(v.image[xe],!0,r.maxCubemapSize):ee[xe]=C?v.image[xe].image:v.image[xe],ee[xe]=j(v,ee[xe]);const W=ee[0],ge=s.convert(v.format,v.colorSpace),me=s.convert(v.type);let oe=T(v.internalFormat,ge,me,v.normalized,v.colorSpace);const he=v.isVideoTexture!==!0,De=te.__version===void 0||H===!0,fe=I.dataReady;let Le=M(v,W);ot(t.TEXTURE_CUBE_MAP,v);let Ge;if(v.isDepthTexture){if(oe=_(v.format===Li,v.type),De)if(he)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,oe,W.width,W.height);else for(let xe=0;xe<6;xe++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,oe,W.width,W.height,0,ge,me,null)}else if(le){he&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,oe,W.width,W.height);for(let xe=0;xe<6;xe++){Ge=ee[xe].mipmaps;for(let st=0;st<Ge.length;st++){const Mt=Ge[st];v.format!==Vn?ge!==null?he?fe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Mt.width,Mt.height,ge,Mt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,oe,Mt.width,Mt.height,0,Mt.data):ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,0,0,Mt.width,Mt.height,ge,me,Mt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st,oe,Mt.width,Mt.height,0,ge,me,Mt.data)}}}else{if(Ge=v.mipmaps,he&&De){Ge.length>0&&Le++;const xe=Q(ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Le,oe,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(C){he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ee[xe].width,ee[xe].height,ge,me,ee[xe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,oe,ee[xe].width,ee[xe].height,0,ge,me,ee[xe].data);for(let st=0;st<Ge.length;st++){const kn=Ge[st].image[xe].image;he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,kn.width,kn.height,ge,me,kn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,oe,kn.width,kn.height,0,ge,me,kn.data)}}else{he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ge,me,ee[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,oe,ge,me,ee[xe]);for(let st=0;st<Ge.length;st++){const Mt=Ge[st];he?fe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,0,0,ge,me,Mt.image[xe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+xe,st+1,oe,ge,me,Mt.image[xe])}}}w(v)&&v.mipmapsAutoUpdate===!0&&y(t.TEXTURE_CUBE_MAP),te.__version=I.version,v.onUpdate&&v.onUpdate(v)}E.__version=v.version}function xt(E,v,R,H,I,te){const ce=s.convert(R.format,R.colorSpace),K=s.convert(R.type),Z=T(R.internalFormat,ce,K,R.normalized,R.colorSpace),le=i.get(v),C=i.get(R);if(C.__renderTarget=v,!le.__hasExternalTextures){const ee=Math.max(1,v.width>>te),W=Math.max(1,v.height>>te);I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?n.texImage3D(I,te,Z,ee,W,v.depth,0,ce,K,null):n.texImage2D(I,te,Z,ee,W,0,ce,K,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),P(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,I,C.__webglTexture,0,L(v)):(I===t.TEXTURE_2D||I>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&I<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,I,C.__webglTexture,te),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ln(E,v,R){if(t.bindRenderbuffer(t.RENDERBUFFER,E),v.depthBuffer){const H=v.depthTexture,I=H&&H.isDepthTexture?H.type:null,te=_(v.stencilBuffer,I),ce=v.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;P(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(v),te,v.width,v.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(v),te,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,te,v.width,v.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,E)}else{const H=v.textures;for(let I=0;I<H.length;I++){const te=H[I],ce=s.convert(te.format,te.colorSpace),K=s.convert(te.type),Z=T(te.internalFormat,ce,K,te.normalized,te.colorSpace);P(v)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,L(v),Z,v.width,v.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,L(v),Z,v.width,v.height):t.renderbufferStorage(t.RENDERBUFFER,Z,v.width,v.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Rt(E,v,R){const H=v.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const I=i.get(v.depthTexture);I.__renderTarget=v;const te=H?v.depthTexture.image[0]:v.depthTexture.image;(!I.__webglTexture||te.width!==v.width||te.height!==v.height)&&(te.width=v.width,te.height=v.height,v.depthTexture.needsUpdate=!0),H?Me(v.depthTexture,0):ve(v.depthTexture,0);const ce=I.__webglTexture,K=L(v),Z=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+R:t.TEXTURE_2D,le=v.depthTexture.format===Li?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(v.depthTexture.format===Ui)P(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,Z,ce,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,le,Z,ce,0);else if(v.depthTexture.format===Li)P(v)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,le,Z,ce,0,K):t.framebufferTexture2D(t.FRAMEBUFFER,le,Z,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function en(E){const v=i.get(E),R=E.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),H){const I=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,H.removeEventListener("dispose",I)};H.addEventListener("dispose",I),v.__depthDisposeCallback=I}v.__boundDepthTexture=H}if(E.depthTexture&&!v.__autoAllocateDepthBuffer)if(R)for(let H=0;H<6;H++)Rt(v.__webglFramebuffer[H],E,H);else E.texture.mipmaps.length>0?Rt(v.__webglFramebuffer[0],E,0):Rt(v.__webglFramebuffer,E,0);else if(R){v.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[H]),v.__webglDepthbuffer[H]===void 0)v.__webglDepthbuffer[H]=t.createRenderbuffer(),ln(v.__webglDepthbuffer[H],E,!1);else{const I=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,I,t.RENDERBUFFER,te)}}else if(E.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=t.createRenderbuffer(),ln(v.__webglDepthbuffer,E,!1);else{const I=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=v.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,I,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function un(E,v,R){const H=i.get(E);v!==void 0&&xt(H.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&en(E)}function dn(E){const v=E.texture,R=i.get(E),H=i.get(v);E.addEventListener("dispose",B),z(E);const I=E.textures,te=E.isWebGLCubeRenderTarget===!0,ce=I.length>1;if(ce||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=v.version,a.memory.textures++),te){R.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps.length>0){R.__webglFramebuffer[K]=[];for(let Z=0;Z<v.mipmaps.length;Z++)R.__webglFramebuffer[K][Z]=t.createFramebuffer()}else R.__webglFramebuffer[K]=t.createFramebuffer()}else{if(v.mipmaps.length>0){R.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)R.__webglFramebuffer[K]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(ce)for(let K=0,Z=I.length;K<Z;K++){const le=i.get(I[K]);le.__webglTexture===void 0&&(le.__webglTexture=t.createTexture(),a.memory.textures++)}if(E.samples>0&&P(E)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let K=0;K<I.length;K++){const Z=I[K];R.__webglColorRenderbuffer[K]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[K]);const le=s.convert(Z.format,Z.colorSpace),C=s.convert(Z.type),ee=T(Z.internalFormat,le,C,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),W=L(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,W,ee,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+K,t.RENDERBUFFER,R.__webglColorRenderbuffer[K])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),ln(R.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(te){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),ot(t.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)xt(R.__webglFramebuffer[K][Z],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Z);else xt(R.__webglFramebuffer[K],E,v,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);w(v)?y(t.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}else if(ce){for(let K=0,Z=I.length;K<Z;K++){const le=I[K],C=i.get(le);let ee=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ee=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,C.__webglTexture),ot(ee,le),xt(R.__webglFramebuffer,E,le,t.COLOR_ATTACHMENT0+K,ee,0),w(le)&&y(ee)}n.unbindTexture()}else{let K=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(K=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(K,H.__webglTexture),ot(K,v),v.mipmaps.length>0)for(let Z=0;Z<v.mipmaps.length;Z++)xt(R.__webglFramebuffer[Z],E,v,t.COLOR_ATTACHMENT0,K,Z);else xt(R.__webglFramebuffer,E,v,t.COLOR_ATTACHMENT0,K,0);w(v)?y(K):v.mipmaps.length>0&&t.texParameteri(K,t.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),n.unbindTexture()}E.depthBuffer&&en(E)}function k(E){const v=E.textures;for(let R=0,H=v.length;R<H;R++){const I=v[R];if(w(I)&&I.mipmapsAutoUpdate===!0){const te=A(E),ce=i.get(I).__webglTexture;n.bindTexture(te,ce),y(te),n.unbindTexture()}}}const fn=[];function mt(E){if(E.samples>0){if(P(E)===!1){const v=E.textures,R=E.width,H=E.height;let I=t.COLOR_BUFFER_BIT;const te=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(E),K=v.length>1;if(K)for(let le=0;le<v.length;le++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let le=0;le<v.length;le++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(I|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(I|=t.STENCIL_BUFFER_BIT)),K){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const C=i.get(v[le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,R,H,0,0,R,H,I,t.NEAREST),c===!0&&(fn.length=0,fn.push(t.COLOR_ATTACHMENT0+le),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&fn.push(te),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,fn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),K)for(let le=0;le<v.length;le++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,ce.__webglColorRenderbuffer[le]);const C=i.get(v[le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){const v=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[v])}}}function L(E){return Math.min(r.maxSamples,E.samples)}function P(E){const v=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ne(E){const v=a.render.frame;u.get(E)!==v&&(u.set(E,v),E.update())}function j(E,v){const R=E.colorSpace,H=E.format,I=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||R!==io&&R!==Ci&&(tt.getTransfer(R)===dt?(H!==Vn||I!==Sn)&&ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",R)),v}function Q(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Be,this.resetTextureUnits=se,this.getTextureUnits=ue,this.setTextureUnits=Re,this.setTexture2D=ve,this.setTexture2DArray=Te,this.setTexture3D=Oe,this.setTextureCube=Me,this.rebindTextures=un,this.setupRenderTarget=dn,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=en,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=P,this.dispose=X}function IS(t,e){function n(i,r=Ci){let s;const a=tt.getTransfer(r);if(i===Sn)return t.UNSIGNED_BYTE;if(i===wl)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Tl)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Vf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===$f)return t.BYTE;if(i===Hf)return t.SHORT;if(i===Gs)return t.UNSIGNED_SHORT;if(i===El)return t.INT;if(i===Zn)return t.UNSIGNED_INT;if(i===Dn)return t.FLOAT;if(i===qn)return t.HALF_FLOAT;if(i===Wf)return t.ALPHA;if(i===Xf)return t.RGB;if(i===Vn)return t.RGBA;if(i===Ui)return t.DEPTH_COMPONENT;if(i===Li)return t.DEPTH_STENCIL;if(i===Al)return t.RED;if(i===Rl)return t.RED_INTEGER;if(i===cr)return t.RG;if(i===Cl)return t.RG_INTEGER;if(i===Pl)return t.RGBA_INTEGER;if(i===Ba||i===$a||i===Ha||i===Ga)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ba)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ba)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ha)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ga)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ec||i===wc||i===Tc||i===Ac)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ec)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ac)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Rc||i===Cc||i===Pc||i===Ic||i===Lc||i===to||i===Nc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Rc||i===Cc)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Pc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ic)return s.COMPRESSED_R11_EAC;if(i===Lc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===to)return s.COMPRESSED_RG11_EAC;if(i===Nc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Dc||i===Uc||i===Oc||i===Fc||i===kc||i===zc||i===Bc||i===$c||i===Hc||i===Gc||i===Vc||i===Wc||i===Xc||i===Zc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Dc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$c)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Hc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Wc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Zc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===qc||i===Yc||i===Kc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===qc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Jc||i===jc||i===no||i===Qc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Jc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===jc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===no)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const LS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,NS=`
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

}`;class DS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new ch(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new lr({vertexShader:LS,fragmentShader:NS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new ir(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class US extends fr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null;const x=typeof XRWebGLBinding<"u",p=new DS,m={},S=n.getContextAttributes();let w=null,y=null;const A=[],T=[],_=new We;let M=null,z=null;const N=new Nn;N.viewport=new Et;const F=new Nn;F.viewport=new Et;const B=[N,F],Y=new Zg;let D=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let ve=A[re];return ve===void 0&&(ve=new $o,A[re]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(re){let ve=A[re];return ve===void 0&&(ve=new $o,A[re]=ve),ve.getGripSpace()},this.getHand=function(re){let ve=A[re];return ve===void 0&&(ve=new $o,A[re]=ve),ve.getHandSpace()};function ie(re){const ve=T.indexOf(re.inputSource);if(ve===-1)return;const Te=A[ve];Te!==void 0&&(Te.update(re.inputSource,re.frame,l||a),Te.dispatchEvent({type:re.type,data:re.inputSource}))}function V(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",pe);for(let re=0;re<A.length;re++){const ve=T[re];ve!==null&&(T[re]=null,A[re].disconnect(ve))}D=null,X=null,p.reset();for(const re in m)delete m[re];if(e.setRenderTarget(w),d=null,f=null,h=null,r=null,y=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(_.width,_.height,!1),z!==null){const re=z.camera;re.fov=z.fov,re.zoom=z.zoom,re.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(re){l=re},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&x&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",V),r.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Oe=null,Me=null;S.depth&&(Me=S.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=S.stencil?Li:Ui,Oe=S.stencil?Xr:Zn);const $e={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer($e),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Xn(f.textureWidth,f.textureHeight,{format:Vn,type:Sn,depthTexture:new Zr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const Te={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,n,Te),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Xn(d.framebufferWidth,d.framebufferHeight,{format:Vn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function pe(re){for(let ve=0;ve<re.removed.length;ve++){const Te=re.removed[ve],Oe=T.indexOf(Te);Oe>=0&&(T[Oe]=null,A[Oe].disconnect(Te))}for(let ve=0;ve<re.added.length;ve++){const Te=re.added[ve];let Oe=T.indexOf(Te);if(Oe===-1){for(let $e=0;$e<A.length;$e++)if($e>=T.length){T.push(Te),Oe=$e;break}else if(T[$e]===null){T[$e]=Te,Oe=$e;break}if(Oe===-1)break}const Me=A[Oe];Me&&Me.connect(Te)}}function J(re,ve){ve===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(ve.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let ve=re.near,Te=re.far;p.texture!==null&&(p.depthNear>0&&(ve=p.depthNear),p.depthFar>0&&(Te=p.depthFar)),Y.near=F.near=N.near=ve,Y.far=F.far=N.far=Te,(D!==Y.near||X!==Y.far)&&(r.updateRenderState({depthNear:Y.near,depthFar:Y.far}),D=Y.near,X=Y.far),Y.layers.mask=re.layers.mask|6,N.layers.mask=Y.layers.mask&-5,F.layers.mask=Y.layers.mask&-3;const Oe=re.parent,Me=Y.cameras;J(Y,Oe);for(let $e=0;$e<Me.length;$e++)J(Me[$e],Oe);Y.projectionMatrix.copy(N.projectionMatrix),Y.projectionMatrixInverse.copy(N.projectionMatrixInverse),z===null&&re.isPerspectiveCamera&&(z={camera:re,fov:re.fov,zoom:re.zoom}),se(re,Y,Oe)};function se(re,ve,Te){Te===null?re.matrix.copy(ve.matrixWorld):(re.matrix.copy(Te.matrixWorld),re.matrix.invert(),re.matrix.multiply(ve.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(ve.projectionMatrix),re.projectionMatrixInverse.copy(ve.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=Ws*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(re){c=re,f!==null&&(f.fixedFoveation=re),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=re)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(Y)},this.getCameraTexture=function(re){return m[re]};let ue=null;function Re(re,ve){if(u=ve.getViewerPose(l||a),g=ve,u!==null){const Te=u.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Oe=!1;Te.length!==Y.cameras.length&&(Y.cameras.length=0,Oe=!0);for(let ke=0;ke<Te.length;ke++){const ot=Te[ke];let lt=null;if(d!==null)lt=d.getViewport(ot);else{const Ut=h.getViewSubImage(f,ot);lt=Ut.viewport,ke===0&&(e.setRenderTargetTextures(y,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(y))}let qe=B[ke];qe===void 0&&(qe=new Nn,qe.layers.enable(ke),qe.viewport=new Et,B[ke]=qe),qe.matrix.fromArray(ot.transform.matrix),qe.matrix.decompose(qe.position,qe.quaternion,qe.scale),qe.projectionMatrix.fromArray(ot.projectionMatrix),qe.projectionMatrixInverse.copy(qe.projectionMatrix).invert(),qe.viewport.set(lt.x,lt.y,lt.width,lt.height),ke===0&&(Y.matrix.copy(qe.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Oe===!0&&Y.cameras.push(qe)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){h=i.getBinding();const ke=h.getDepthInformation(Te[0]);ke&&ke.isValid&&ke.texture&&p.init(ke,r.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),h=i.getBinding();for(let ke=0;ke<Te.length;ke++){const ot=Te[ke].camera;if(ot){let lt=m[ot];lt||(lt=new ch,m[ot]=lt);const qe=h.getCameraImage(ot);lt.sourceTexture=qe}}}}for(let Te=0;Te<A.length;Te++){const Oe=T[Te],Me=A[Te];Oe!==null&&Me!==void 0&&Me.update(Oe,ve,l||a)}ue&&ue(re,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),g=null}const Be=new hh;Be.setAnimationLoop(Re),this.setAnimationLoop=function(re){ue=re},this.dispose=function(){}}}const OS=new pt,bh=new He;bh.set(-1,0,0,0,1,0,0,0,1);function FS(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,lh(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,S,w,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),h(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),x(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,S,w):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===cn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===cn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),w=S.envMap,y=S.envMapRotation;w&&(p.envMap.value=w,p.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(bh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,w){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=w*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function h(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,n(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===cn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function kS(t,e,n,i){let r={},s={};function a(S,w){const y=w.program;i.uniformBlockBinding(S,y,r[S.id])}function o(S,w){let y=r[S.id];y===void 0&&(g(S),y=c(S),r[S.id]=y,S.addEventListener("dispose",p));const A=w.program;i.updateUBOMapping(S,A);const T=e.render.frame;s[S.id]!==T&&(l(S),s[S.id]=T)}function c(S){const w=t.createBuffer(),y=S.__size,A=S.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,y,A),t.bindBuffer(t.UNIFORM_BUFFER,null),w}function l(S){const w=r[S.id],y=S.uniforms,A=S.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let T=0,_=y.length;T<_;T++){const M=y[T];if(Array.isArray(M))for(let z=0,N=M.length;z<N;z++)u(M[z],T,z,A);else u(M,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(S,w,y,A){if(f(S,w,y,A)===!0){const T=S.__offset,_=S.value;if(Array.isArray(_)){let M=0;for(let z=0;z<_.length;z++){const N=_[z],F=x(N,!0);h(N,S.__data,M),M+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,S.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,S.__data)}}function h(S,w,y){typeof S=="number"||typeof S=="boolean"?w[y]=S:S.isMatrix3?(w[y]=S.elements[0],w[y+1]=S.elements[1],w[y+2]=S.elements[2],w[y+3]=0,w[y+4]=S.elements[3],w[y+5]=S.elements[4],w[y+6]=S.elements[5],w[y+7]=0,w[y+8]=S.elements[6],w[y+9]=S.elements[7],w[y+10]=S.elements[8],w[y+11]=0):ArrayBuffer.isView(S)?w.set(S.subarray(0,w.length-y),y):S.toArray(w,y)}function f(S,w,y,A){const T=S.value,_=w+"_"+y;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);const M=A[_];let z=!1;for(let N=0;N<T.length;N++)d(T[N],M,N)===!0&&(z=!0);return z}return d(T,A,_)}function d(S,w,y){if(w[y]===void 0)return typeof S=="number"||typeof S=="boolean"?w[y]=S:ArrayBuffer.isView(S)?w[y]=S.slice():w[y]=S.clone(),!0;{const A=w[y];if(typeof S=="number"||typeof S=="boolean"){if(A!==S)return w[y]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(A.equals(S)===!1)return A.copy(S),!0}}return!1}function g(S){const w=S.uniforms;let y=0;const A=16;for(let _=0,M=w.length;_<M;_++){const z=Array.isArray(w[_])?w[_]:[w[_]];for(let N=0,F=z.length;N<F;N++){const B=z[N],Y=Array.isArray(B.value)?B.value:[B.value],D=Array.isArray(w[_])||Array.isArray(B.value);let X=y;for(let V=0,pe=Y.length;V<pe;V++){const J=Y[V],se=x(J,D),ue=y%A,Re=ue%se.boundary,Be=ue+Re;y+=Re,Be!==0&&A-Be<se.storage&&(y+=A-Be),V===0&&(X=y),y+=se.storage}const ie=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new ie((y-X)/Float32Array.BYTES_PER_ELEMENT),B.__offset=X}}const T=y%A;return T>0&&(y+=A-T),S.__size=y,S.__cache={},this}function x(S,w){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=16,y.storage=48):S.isMatrix4?(y.boundary=16,y.storage=64):S.isTexture?ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):ze("WebGLRenderer: Unsupported uniform value type.",S),w===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(S){const w=S.target;w.removeEventListener("dispose",p),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function m(){for(const S in r)t.deleteBuffer(r[S]);r={},s={}}return{bind:a,update:o,dispose:m}}const zS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Bn=null;function BS(){return Bn===null&&(Bn=new sh(zS,16,16,cr,qn),Bn.name="DFG_LUT",Bn.minFilter=mn,Bn.magFilter=mn,Bn.wrapS=ui,Bn.wrapT=ui,Bn.generateMipmaps=!1,Bn.needsUpdate=!0),Bn}class $S{constructor(e={}){const{canvas:n=Xm(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Sn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=d,p=new Set([Pl,Cl,Rl]),m=new Set([Sn,Zn,Gs,Xr,wl,Tl]),S=new Uint32Array(4),w=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const _=[],M=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1,B=null,Y=null,D=null,X=null;this._outputColorSpace=Ot;let ie=0,V=0,pe=null,J=-1,se=null;const ue=new Et,Re=new Et;let Be=null;const re=new Ze(0);let ve=0,Te=n.width,Oe=n.height,Me=1,$e=null,vt=null;const ke=new Et(0,0,Te,Oe),ot=new Et(0,0,Te,Oe);let lt=!1;const qe=new Xs,Ut=new Ol;let ut=!1,zt=!1;const xt=new pt,ln=new O,Rt=new Et,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let un=!1;function dn(){return pe===null?Me:1}let k=i;function fn(b,U){return n.getContext(b,U)}let mt,L,P,ne,j,Q,E,v,R,H,I,te,ce,K,Z,le,C,ee,W,ge,me,oe,he;try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ml}`),n.addEventListener("webglcontextlost",Le,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",xe,!1),k===null){const U="webgl2";if(k=fn(U,b),k===null)throw fn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(b){throw n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),at("WebGLRenderer: "+b.message),b}function De(){mt=new Vv(k),mt.init(),me=new IS(k,mt),L=new Nv(k,mt,e,me),P=new CS(k,mt),L.reversedDepthBuffer&&f&&P.buffers.depth.setReversed(!0),Y=k.createFramebuffer(),D=k.createFramebuffer(),X=k.createFramebuffer(),ne=new Zv(k),j=new mS,Q=new PS(k,mt,P,j,L,me,ne),E=new Gv(N),v=new Yg(k),oe=new Iv(k,v),R=new Wv(k,v,ne,oe),H=new Yv(k,R,v,oe,ne),ee=new qv(k,L,Q),Z=new Dv(j),I=new pS(N,E,mt,L,oe,Z),te=new FS(N,j),ce=new _S,K=new bS(mt),C=new Pv(N,E,P,H,g,c),le=new RS(N,H,L),he=new kS(k,ne,L,P),W=new Lv(k,mt,ne),ge=new Xv(k,mt,ne),ne.programs=I.programs,N.capabilities=L,N.extensions=mt,N.properties=j,N.renderLists=ce,N.shadowMap=le,N.state=P,N.info=ne}x!==Sn&&(z=new Jv(x,n.width,n.height,o,r,s));const fe=new US(N,k);this.xr=fe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const b=mt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=mt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(b){b!==void 0&&(Me=b,this.setSize(Te,Oe,!1))},this.getSize=function(b){return b.set(Te,Oe)},this.setSize=function(b,U,q=!0){if(fe.isPresenting){ze("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=b,Oe=U,n.width=Math.floor(b*Me),n.height=Math.floor(U*Me),q===!0&&(n.style.width=b+"px",n.style.height=U+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Te*Me,Oe*Me).floor()},this.setDrawingBufferSize=function(b,U,q){Te=b,Oe=U,Me=q,n.width=Math.floor(b*q),n.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(x===Sn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ue)},this.getViewport=function(b){return b.copy(ke)},this.setViewport=function(b,U,q,$){b.isVector4?ke.set(b.x,b.y,b.z,b.w):ke.set(b,U,q,$),P.viewport(ue.copy(ke).multiplyScalar(dn()).round())},this.getScissor=function(b){return b.copy(ot)},this.setScissor=function(b,U,q,$){b.isVector4?ot.set(b.x,b.y,b.z,b.w):ot.set(b,U,q,$),P.scissor(Re.copy(ot).multiplyScalar(dn()).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(b){P.setScissorTest(lt=b)},this.setOpaqueSort=function(b){$e=b},this.setTransparentSort=function(b){vt=b},this.getClearColor=function(b){return b.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let $=0;if(b){let G=!1;if(pe!==null){const ye=pe.texture.format;G=p.has(ye)}if(G){const ye=pe.texture.type,Ae=m.has(ye),Se=C.getClearColor(),we=C.getClearAlpha(),Ie=Se.r,Ve=Se.g,je=Se.b;Ae?(S[0]=Ie,S[1]=Ve,S[2]=je,S[3]=we,k.clearBufferuiv(k.COLOR,0,S)):(w[0]=Ie,w[1]=Ve,w[2]=je,w[3]=we,k.clearBufferiv(k.COLOR,0,w))}else $|=k.COLOR_BUFFER_BIT}U&&($|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&($|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&k.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),B=b},this.dispose=function(){n.removeEventListener("webglcontextlost",Le,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),C.dispose(),ce.dispose(),K.dispose(),Q.dispose(),j.dispose(),E.dispose(),H.dispose(),R.dispose(),oe.dispose(),he.dispose(),I.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",cs),fe.removeEventListener("sessionend",Ye),Vt.stop()};function Le(b){b.preventDefault(),ao("WebGLRenderer: Context Lost."),F=!0}function Ge(){ao("WebGLRenderer: Context Restored."),F=!1;const b=ne.autoReset,U=le.enabled,q=le.autoUpdate,$=le.needsUpdate,G=le.type;De(),ne.autoReset=b,le.enabled=U,le.autoUpdate=q,le.needsUpdate=$,le.type=G}function xe(b){at("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const U=b.target;U.removeEventListener("dispose",st),Mt(U)}function Mt(b){kn(b),j.remove(b)}function kn(b){const U=j.get(b).programs;U!==void 0&&(U.forEach(function(q){I.releaseProgram(q)}),b.isShaderMaterial&&I.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,$,G,ye){U===null&&(U=en);const Ae=G.isMesh&&G.matrixWorld.determinantAffine()<0,Se=um(b,U,q,$,G);P.setMaterial($,Ae);let we=q.index,Ie=1;if($.wireframe===!0){if(we=R.getWireframeAttribute(q),we===void 0)return;Ie=2}const Ve=q.drawRange,je=q.attributes.position;let Ce=Ve.start*Ie,Qe=(Ve.start+Ve.count)*Ie;ye!==null&&(Ce=Math.max(Ce,ye.start*Ie),Qe=Math.min(Qe,(ye.start+ye.count)*Ie)),we!==null?(Ce=Math.max(Ce,0),Qe=Math.min(Qe,we.count)):je!=null&&(Ce=Math.max(Ce,0),Qe=Math.min(Qe,je.count));const Ct=Qe-Ce;if(Ct<0||Ct===1/0)return;oe.setup(G,$,Se,q,we);let gt,ht=W;if(we!==null&&(gt=v.get(we),ht=ge,ht.setIndex(gt)),G.isMesh)$.wireframe===!0?(P.setLineWidth($.wireframeLinewidth*dn()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(G.isLine){let qt=$.linewidth;qt===void 0&&(qt=1),P.setLineWidth(qt*dn()),G.isLineSegments?ht.setMode(k.LINES):G.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else G.isPoints?ht.setMode(k.POINTS):G.isSprite&&ht.setMode(k.TRIANGLES);if(G.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const qt=G._multiDrawStarts,Pe=G._multiDrawCounts,tn=G._multiDrawCount,ct=we?v.get(we).bytesPerElement:1,Xi=j.get($).currentProgram.getUniforms();for(let Yt=0;Yt<tn;Yt++)Xi.setValue(k,"_gl_DrawID",Yt),ht.render(qt[Yt]/ct,Pe[Yt])}else if(G.isInstancedMesh)ht.renderInstances(Ce,Ct,G.count);else if(q.isInstancedBufferGeometry){const qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Pe=Math.min(q.instanceCount,qt);ht.renderInstances(Ce,Ct,Pe)}else ht.render(Ce,Ct)};function _r(b,U,q,$){B!==null&&b.isNodeMaterial&&B.setObject($,b),ut===!0&&Z.setState(b,q,!1),b.transparent===!0&&b.side===Tn&&b.forceSinglePass===!1?(b.side=cn,b.needsUpdate=!0,Vi(b,U,$),b.side=or,b.needsUpdate=!0,Vi(b,U,$),b.side=Tn):Vi(b,U,$)}this.compile=function(b,U,q=null){q===null&&(q=b),B!==null&&B.renderStart(b,U,q),T=K.get(q),T.init(U),M.push(T),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),b!==q&&b.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(T.pushLight(G),G.castShadow&&T.pushShadow(G))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),zt=this.localClippingEnabled,ut=Z.init(this.clippingPlanes,zt),ut===!0&&Z.setGlobalState(this.clippingPlanes,U),B!==null&&le.render(T.state.shadowsArray,q,U);const $=new Set;return b.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ye=G.material;if(ye)if(Array.isArray(ye))for(let Ae=0;Ae<ye.length;Ae++){const Se=ye[Ae];_r(Se,q,U,G),$.add(Se)}else _r(ye,q,U,G),$.add(ye)}),T=M.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(b,U,q=null){const $=this.compile(b,U,q);return new Promise(G=>{function ye(){if($.forEach(function(Ae){const we=j.get(Ae).currentProgram;(we===void 0||we.isReady())&&$.delete(Ae)}),$.size===0){G(b);return}setTimeout(ye,10)}mt.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let xi=null;function $i(b){xi&&xi(b)}function cs(){Vt.stop()}function Ye(){Vt.start()}const Vt=new hh;Vt.setAnimationLoop($i),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(b){xi=b,fe.setAnimationLoop(b),b===null?Vt.stop():Vt.start()},fe.addEventListener("sessionstart",cs),fe.addEventListener("sessionend",Ye),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(b,U);const q=fe.enabled===!0&&fe.isPresenting===!0,$=z!==null&&(pe===null||q)&&z.begin(N,pe);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(U),U=fe.getCamera()),b.isScene===!0&&b.onBeforeRender(N,b,U,pe),T=K.get(b,M.length),T.init(U),T.state.textureUnits=Q.getTextureUnits(),M.push(T),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ut.setFromArrayCamera(U):qe.setFromProjectionMatrix(xt,Un,U.reversedDepth),zt=this.localClippingEnabled,ut=Z.init(this.clippingPlanes,zt),A=ce.get(b,_.length),A.init(),_.push(A),this.info.render.frame++,fe.enabled===!0&&fe.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&Hi(Ae,U,-1/0,N.sortObjects)}Hi(b,U,0,N.sortObjects),A.finish(),B!==null&&B.updateLights(T.state.lightsArray),N.sortObjects===!0&&A.sort($e,vt),un=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,un&&C.addToRenderList(A,b),this.info.autoReset===!0&&this.info.reset(),ut===!0&&Z.beginShadows();const G=T.state.shadowsArray;if(le.render(G,b,U),ut===!0&&Z.endShadows(),($&&z.hasRenderPass())===!1){const Ae=A.opaque,Se=A.transmissive;if(T.setupLights(),U.isArrayCamera){const we=U.cameras;if(Se.length>0)for(let Ie=0,Ve=we.length;Ie<Ve;Ie++){const je=we[Ie];ls(Ae,Se,b,je)}un&&C.render(b);for(let Ie=0,Ve=we.length;Ie<Ve;Ie++){const je=we[Ie];jn(A,b,je,je.viewport)}}else Se.length>0&&ls(Ae,Se,b,U),un&&C.render(b),jn(A,b,U)}pe!==null&&V===0&&(Q.updateMultisampleRenderTarget(pe),Q.updateRenderTargetMipmap(pe)),$&&z.end(N),b.isScene===!0&&b.onAfterRender(N,b,U),oe.resetDefaultState(),J=-1,se=null,M.pop(),M.length>0?(T=M[M.length-1],Q.setTextureUnits(T.state.textureUnits),ut===!0&&Z.setGlobalState(N.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function Hi(b,U,q,$){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){const Ae=U.isArrayCamera?Ut:qe;if(!b.frustumCulled||b.intersectsFrustum(Ae)){$&&Rt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(xt);const Se=H.update(b),we=b.material;we.visible&&A.push(b,Se,we,q,Rt.z,null,U)}}else if(b.isMesh||b.isLine||b.isPoints){const Ae=U.isArrayCamera?Ut:qe;if(!b.frustumCulled||b.intersectsFrustum(Ae)){const Se=H.update(b),we=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Rt.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),Rt.copy(Se.boundingSphere.center)),Rt.applyMatrix4(b.matrixWorld).applyMatrix4(xt)),Array.isArray(we)){const Ie=Se.groups;for(let Ve=0,je=Ie.length;Ve<je;Ve++){const Ce=Ie[Ve],Qe=we[Ce.materialIndex];Qe&&Qe.visible&&A.push(b,Se,Qe,q,Rt.z,Ce,U)}}else we.visible&&A.push(b,Se,we,q,Rt.z,null,U)}}}const ye=b.children;for(let Ae=0,Se=ye.length;Ae<Se;Ae++)Hi(ye[Ae],U,q,$)}function jn(b,U,q,$){const{opaque:G,transmissive:ye,transparent:Ae}=b;T.setupLightsView(q),ut===!0&&Z.setGlobalState(N.clippingPlanes,q),$&&P.viewport(ue.copy($)),G.length>0&&Gi(G,U,q),ye.length>0&&Gi(ye,U,q),Ae.length>0&&Gi(Ae,U,q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function ls(b,U,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){const Ce=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new Xn(1,1,{generateMipmaps:!0,type:Ce?qn:Sn,minFilter:Ii,samples:Math.max(4,L.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const ye=T.state.transmissionRenderTarget[$.id],Ae=$.viewport||ue;ye.setSize(Ae.z*N.transmissionResolutionScale,Ae.w*N.transmissionResolutionScale);const Se=N.getRenderTarget(),we=N.getActiveCubeFace(),Ie=N.getActiveMipmapLevel();N.setRenderTarget(ye),N.getClearColor(re),ve=N.getClearAlpha(),ve<1&&N.setClearColor(16777215,.5),N.clear(),un&&C.render(q);const Ve=N.toneMapping;N.toneMapping=hi;const je=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),ut===!0&&Z.setGlobalState(N.clippingPlanes,$),Gi(b,q,$),Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let Qe=0,Ct=U.length;Qe<Ct;Qe++){const gt=U[Qe],{object:ht,geometry:qt,material:Pe,group:tn}=gt;if(Pe.side===Tn&&ht.layers.test($.layers)){const ct=Pe.side;Pe.side=cn,Pe.needsUpdate=!0,ia(ht,q,$,qt,Pe,tn),Pe.side=ct,Pe.needsUpdate=!0,Ce=!0}}Ce===!0&&(Q.updateMultisampleRenderTarget(ye),Q.updateRenderTargetMipmap(ye))}N.setRenderTarget(Se,we,Ie),N.setClearColor(re,ve),je!==void 0&&($.viewport=je),N.toneMapping=Ve}function Gi(b,U,q){const $=U.isScene===!0?U.overrideMaterial:null;for(let G=0,ye=b.length;G<ye;G++){const Ae=b[G],{object:Se,geometry:we,group:Ie}=Ae;let Ve=Ae.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),Se.layers.test(q.layers)&&ia(Se,U,q,we,Ve,Ie)}}function ia(b,U,q,$,G,ye){B!==null&&G.isNodeMaterial&&B.setObject(b,G),b.onBeforeRender(N,U,q,$,G,ye),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),G.onBeforeRender(N,U,q,$,b,ye),G.transparent===!0&&G.side===Tn&&G.forceSinglePass===!1?(G.side=cn,G.needsUpdate=!0,N.renderBufferDirect(q,U,$,G,b,ye),G.side=or,G.needsUpdate=!0,N.renderBufferDirect(q,U,$,G,b,ye),G.side=Tn):N.renderBufferDirect(q,U,$,G,b,ye),b.onAfterRender(N,U,q,$,G,ye)}function ra(b){let U=0;for(const q of b)q.texture!==null&&U++;return U}function Vi(b,U,q){U.isScene!==!0&&(U=en);const $=j.get(b),G=T.state.lights,ye=T.state.shadowsArray,Ae=G.state.version,Se=I.getParameters(b,G.state,ye,U,q,T.state.lightProbeGridArray),we=I.getProgramCacheKey(Se);let Ie=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,$.fog=U.fog;const Ve=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=E.get(b.envMap||$.environment,Ve),$.envMapRotation=$.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ie===void 0&&(b.addEventListener("dispose",st),Ie=new Map,$.programs=Ie,$.programVariants=new Map);let je=Ie.get(we);if(je!==void 0){if($.currentProgram===je&&$.lightsStateVersion===Ae)return us(b,Se),je}else Se.uniforms=I.getUniforms(b),B!==null&&b.isNodeMaterial&&B.build(b,q,Se),b.onBeforeCompile(Se,N),je=I.acquireProgram(Se,we),Ie.set(we,je),$.uniforms=Se.uniforms;const Ce=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=Z.uniform),us(b,Se),$.needsLights=fm(b),$.lightsStateVersion=Ae,$.needsLights&&(Ce.ambientLightColor.value=G.state.ambient,Ce.lightProbe.value=G.state.probe,Ce.sunLights.value=G.state.sun,Ce.sunLightShadows.value=G.state.sunShadow,Ce.directionalLights.value=G.state.directional,Ce.directionalLightShadows.value=G.state.directionalShadow,Ce.spotLights.value=G.state.spot,Ce.spotLightShadows.value=G.state.spotShadow,Ce.rectAreaLights.value=G.state.rectArea,Ce.ltc_1.value=G.state.rectAreaLTC1,Ce.ltc_2.value=G.state.rectAreaLTC2,Ce.pointLights.value=G.state.point,Ce.pointLightShadows.value=G.state.pointShadow,Ce.hemisphereLights.value=G.state.hemi,Ce.sunShadowMatrix.value=G.state.sunShadowMatrix,Ce.sunShadowCascade.value=G.state.sunShadowCascade,Ce.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ce.spotLightMatrix.value=G.state.spotLightMatrix,Ce.spotLightMap.value=G.state.spotLightMap,Ce.pointShadowMatrix.value=G.state.pointShadowMatrix),$.numLightProbeGrids=ra(T.state.lightProbeGridArray),$.currentProgram=je,$.uniformsList=null,je}function sa(b,U,q,$,G){const ye=j.get(b),Ae=ye.currentProgram.id+","+$+","+G;let Se=ye.programVariants.get(Ae);return Se===void 0?(Se=Vi(b,U,q),ye.programVariants.set(Ae,Se)):(ye.currentProgram=Se,ye.uniformsList=null,ye.outputColorSpace=$,ye.toneMapping=G),Se}function Wi(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Xa.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function us(b,U){const q=j.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function um(b,U,q,$,G){U.isScene!==!0&&(U=en),Q.resetTextureUnits();const ye=U.fog,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?U.environment:null,Se=pe===null?N.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:tt.workingColorSpace,we=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ie=E.get($.envMap||Ae,we),Ve=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,je=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ce=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color;let gt=hi;$.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(gt=N.toneMapping);const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=ht!==void 0?ht.length:0,Pe=j.get($),tn=T.state.lights;if(ut===!0&&(zt===!0||b!==se)){const bt=b===se&&$.id===J;Z.setState($,b,bt)}let ct=!1,Xi=!1;$.version===Pe.__version?Pe.needsLights&&Pe.lightsStateVersion!==tn.state.version||G.isBatchedMesh&&Pe.batching===!1||!G.isBatchedMesh&&Pe.batching===!0||G.isBatchedMesh&&Pe.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Pe.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Pe.instancing===!1||!G.isInstancedMesh&&Pe.instancing===!0||G.isSkinnedMesh&&Pe.skinning===!1||!G.isSkinnedMesh&&Pe.skinning===!0||G.isInstancedMesh&&Pe.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Pe.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Pe.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Pe.instancingMorph===!1&&G.morphTexture!==null||Pe.envMap!==Ie||$.fog===!0&&Pe.fog!==ye||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==Z.numPlanes||Pe.numIntersection!==Z.numIntersection)||Pe.vertexAlphas!==Ve||Pe.vertexTangents!==je||Pe.morphTargets!==Ce||Pe.morphNormals!==Qe||Pe.morphColors!==Ct||Pe.morphTargetsCount!==qt||Pe.numLightProbeGrids!==ra(T.state.lightProbeGridArray)?ct=!0:(Pe.outputColorSpace!==Se||Pe.toneMapping!==gt)&&(Xi=!0):(ct=!0,Pe.__version=$.version);let Yt=Pe.currentProgram;(ct===!0||Xi===!0)&&(Yt=Xi===!0?sa($,U,G,Se,gt):Vi($,U,G),B&&$.isNodeMaterial&&B.onUpdateProgram($,Yt,Pe));let aa=!1,Si=!1,Zi=!1;const it=Yt.getUniforms(),Wt=Pe.uniforms;if(P.useProgram(Yt.program)&&(aa=!0,Si=!0,Zi=!0),$.id!==J&&(J=$.id,Si=!0),aa||se!==b){P.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),it.setValue(k,"projectionMatrix",b.projectionMatrix),it.setValue(k,"viewMatrix",b.matrixWorldInverse);const Bt=it.map.cameraPosition;Bt!==void 0&&Bt.setValue(k,ln.setFromMatrixPosition(b.matrixWorld)),L.logarithmicDepthBuffer&&it.setValue(k,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&it.setValue(k,"isOrthographic",b.isOrthographicCamera===!0),se!==b&&(se=b,Si=!0,Zi=!0)}if(Pe.needsLights&&(tn.state.sunShadowMap.length>0&&it.setValue(k,"sunShadowMap",tn.state.sunShadowMap,Q),tn.state.directionalShadowMap.length>0&&it.setValue(k,"directionalShadowMap",tn.state.directionalShadowMap,Q),tn.state.spotShadowMap.length>0&&it.setValue(k,"spotShadowMap",tn.state.spotShadowMap,Q),tn.state.pointShadowMap.length>0&&it.setValue(k,"pointShadowMap",tn.state.pointShadowMap,Q)),G.isSkinnedMesh){it.setOptional(k,G,"bindMatrix"),it.setOptional(k,G,"bindMatrixInverse");const bt=G.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),it.setValue(k,"boneTexture",bt.boneTexture,Q))}G.isBatchedMesh&&(it.setOptional(k,G,"batchingTexture"),it.setValue(k,"batchingTexture",G._matricesTexture,Q),it.setOptional(k,G,"batchingIdTexture"),it.setValue(k,"batchingIdTexture",G._indirectTexture,Q),it.setOptional(k,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(k,"batchingColorTexture",G._colorsTexture,Q));const Cn=q.morphAttributes;if((Cn.position!==void 0||Cn.normal!==void 0||Cn.color!==void 0)&&ee.update(G,q,Yt),(Si||Pe.receiveShadow!==G.receiveShadow)&&(Pe.receiveShadow=G.receiveShadow,it.setValue(k,"receiveShadow",G.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=BS()),Si){if(it.setValue(k,"toneMappingExposure",N.toneMappingExposure),Pe.needsLights&&dm(Wt,Zi),ye&&$.fog===!0&&te.refreshFogUniforms(Wt,ye),te.refreshMaterialUniforms(Wt,$,Me,Oe,T.state.transmissionRenderTarget[b.id]),Pe.needsLights&&Pe.numLightProbeGrids>0){const bt=y;let Bt=0;for(const Qn of T.state.lightProbeGridArray)Qn.texture!==null&&(bt.textures[Bt]=Qn.texture,bt.min[Bt]=Qn.boundingBox.min,bt.max[Bt]=Qn.boundingBox.max,bt.resolution[Bt]=Qn.resolution,Bt++);for(const Qn in bt)bt[Qn].length=Bt;Wt.probesSH.value=bt.textures,Wt.probesMin.value=bt.min,Wt.probesMax.value=bt.max,Wt.probesResolution.value=bt.resolution}Xa.upload(k,Wi(Pe),Wt,Q)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Xa.upload(k,Wi(Pe),Wt,Q),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&it.setValue(k,"center",G.center),it.setValue(k,"modelViewMatrix",G.modelViewMatrix),it.setValue(k,"normalMatrix",G.normalMatrix),it.setValue(k,"modelMatrix",G.matrixWorld),$.uniformsGroups!==void 0){const bt=$.uniformsGroups;for(let Bt=0,Qn=bt.length;Bt<Qn;Bt++){const bu=bt[Bt];he.update(bu,Yt),he.bind(bu,Yt)}}return Yt}function dm(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function fm(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(b,U,q){const $=j.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),j.get(b.texture).__webglTexture=U,j.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const q=j.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){pe=b,ie=U,V=q;let $=null,G=!1,ye=!1;if(b){const Se=j.get(b);if(Se.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(k.FRAMEBUFFER,Se.__webglFramebuffer),ue.copy(b.viewport),Re.copy(b.scissor),Be=b.scissorTest,P.viewport(ue),P.scissor(Re),P.setScissorTest(Be),J=-1;return}else if(Se.__webglFramebuffer===void 0)Q.setupRenderTarget(b);else if(Se.__hasExternalTextures)Q.rebindTextures(b,j.get(b.texture).__webglTexture,j.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ve=b.depthTexture;if(Se.__boundDepthTexture!==Ve){if(Ve!==null&&j.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Q.setupDepthRenderbuffer(b)}}const we=b.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(ye=!0);const Ie=j.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ie[U])?$=Ie[U][q]:$=Ie[U],G=!0):b.samples>0&&Q.useMultisampledRTT(b)===!1?$=j.get(b).__webglMultisampledFramebuffer:Array.isArray(Ie)?$=Ie[q]:$=Ie,ue.copy(b.viewport),Re.copy(b.scissor),Be=b.scissorTest}else ue.copy(ke).multiplyScalar(Me).floor(),Re.copy(ot).multiplyScalar(Me).floor(),Be=lt;if(q!==0&&($=Y),P.bindFramebuffer(k.FRAMEBUFFER,$)&&P.drawBuffers(b,$),P.viewport(ue),P.scissor(Re),P.setScissorTest(Be),G){const Se=j.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Se.__webglTexture,q)}else if(ye){const Se=U;for(let we=0;we<b.textures.length;we++){const Ie=j.get(b.textures[we]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+we,Ie.__webglTexture,q,Se)}}else if(b!==null&&q!==0){const Se=j.get(b.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Se.__webglTexture,q)}J=-1};function Mu(b){const U=j.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=L.textureFormatReadable(b.format),U.__typeReadable=L.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,q,$,G,ye,Ae,Se=0){if(!(b&&b.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we){P.bindFramebuffer(k.FRAMEBUFFER,we);try{const Ie=b.textures[Se],Ve=Ie.format,je=Ie.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Se);const Ce=Mu(Ie);if(Ce.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-$&&q>=0&&q<=b.height-G&&k.readPixels(U,q,$,G,me.convert(Ve),me.convert(je),ye)}finally{const Ie=pe!==null?j.get(pe).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,Ie)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,$,G,ye,Ae,Se=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=j.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ae!==void 0&&(we=we[Ae],Array.isArray(we)&&(we=we[0])),we)if(U>=0&&U<=b.width-$&&q>=0&&q<=b.height-G){P.bindFramebuffer(k.FRAMEBUFFER,we);const Ie=b.textures[Se],Ve=Ie.format,je=Ie.type;b.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Se);const Ce=Mu(Ie);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.bufferData(k.PIXEL_PACK_BUFFER,ye.byteLength,k.STREAM_READ),k.readPixels(U,q,$,G,me.convert(Ve),me.convert(je),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ct=pe!==null?j.get(pe).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,Ct);const gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Zm(k,gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,ye),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Qe),k.deleteSync(gt),ye}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){const $=Math.pow(2,-q),G=Math.floor(b.image.width*$),ye=Math.floor(b.image.height*$),Ae=U!==null?U.x:0,Se=U!==null?U.y:0;Q.setTexture2D(b,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Ae,Se,G,ye),P.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,$=null,G=0,ye=0){let Ae,Se,we,Ie,Ve,je,Ce,Qe,Ct;const gt=b.isCompressedTexture?b.mipmaps[ye]:b.image;if(q!==null)Ae=q.max.x-q.min.x,Se=q.max.y-q.min.y,we=q.isBox3?q.max.z-q.min.z:1,Ie=q.min.x,Ve=q.min.y,je=q.isBox3?q.min.z:0;else{const it=Math.pow(2,-G);Ae=Math.floor(gt.width*it),Se=Math.floor(gt.height*it),b.isDataArrayTexture?we=gt.depth:b.isData3DTexture?we=Math.floor(gt.depth*it):we=1,Ie=0,Ve=0,je=0}$!==null?(Ce=$.x,Qe=$.y,Ct=$.z):(Ce=0,Qe=0,Ct=0);const ht=me.convert(U.format),qt=me.convert(U.type);let Pe;U.isData3DTexture?(Q.setTexture3D(U,0),Pe=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Q.setTexture2DArray(U,0),Pe=k.TEXTURE_2D_ARRAY):(Q.setTexture2D(U,0),Pe=k.TEXTURE_2D),P.activeTexture(k.TEXTURE0),P.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const tn=P.getParameter(k.UNPACK_ROW_LENGTH),ct=P.getParameter(k.UNPACK_IMAGE_HEIGHT),Xi=P.getParameter(k.UNPACK_SKIP_PIXELS),Yt=P.getParameter(k.UNPACK_SKIP_ROWS),aa=P.getParameter(k.UNPACK_SKIP_IMAGES);P.pixelStorei(k.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(k.UNPACK_SKIP_PIXELS,Ie),P.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(k.UNPACK_SKIP_IMAGES,je);const Si=b.isDataArrayTexture||b.isData3DTexture,Zi=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const it=j.get(b),Wt=j.get(U),Cn=j.get(it.__renderTarget),bt=j.get(Wt.__renderTarget);P.bindFramebuffer(k.READ_FRAMEBUFFER,Cn.__webglFramebuffer),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Bt=0;Bt<we;Bt++)Si&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(b).__webglTexture,G,je+Bt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(U).__webglTexture,ye,Ct+Bt)),k.blitFramebuffer(Ie,Ve,Ie+Ae,Ve+Se,Ce,Qe,Ce+Ae,Qe+Se,k.DEPTH_BUFFER_BIT,k.NEAREST);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(G!==0||b.isRenderTargetTexture||j.has(b)){const it=j.get(b),Wt=j.get(U);P.bindFramebuffer(k.READ_FRAMEBUFFER,D),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,X);for(let Cn=0;Cn<we;Cn++)Si?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,it.__webglTexture,G,je+Cn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,it.__webglTexture,G),Zi?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,ye,Ct+Cn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wt.__webglTexture,ye),G!==0?k.blitFramebuffer(Ie,Ve,Ie+Ae,Ve+Se,Ce,Qe,Ce+Ae,Qe+Se,k.COLOR_BUFFER_BIT,k.NEAREST):Zi?k.copyTexSubImage3D(Pe,ye,Ce,Qe,Ct+Cn,Ie,Ve,Ae,Se):k.copyTexSubImage2D(Pe,ye,Ce,Qe,Ie,Ve,Ae,Se);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Zi?b.isDataTexture||b.isData3DTexture?k.texSubImage3D(Pe,ye,Ce,Qe,Ct,Ae,Se,we,ht,qt,gt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Pe,ye,Ce,Qe,Ct,Ae,Se,we,ht,gt.data):k.texSubImage3D(Pe,ye,Ce,Qe,Ct,Ae,Se,we,ht,qt,gt):b.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,ye,Ce,Qe,Ae,Se,ht,qt,gt.data):b.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,ye,Ce,Qe,gt.width,gt.height,ht,gt.data):k.texSubImage2D(k.TEXTURE_2D,ye,Ce,Qe,Ae,Se,ht,qt,gt);P.pixelStorei(k.UNPACK_ROW_LENGTH,tn),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ct),P.pixelStorei(k.UNPACK_SKIP_PIXELS,Xi),P.pixelStorei(k.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(k.UNPACK_SKIP_IMAGES,aa),ye===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(Pe),P.unbindTexture()},this.initRenderTarget=function(b){j.get(b).__webglFramebuffer===void 0&&Q.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Q.setTextureCube(b,0):b.isData3DTexture?Q.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Q.setTexture2DArray(b,0):Q.setTexture2D(b,0),P.unbindTexture()},this.resetState=function(){ie=0,V=0,pe=null,P.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const Td=.003,lo=1.2;function il(t,e,n,i){return{yaw:t-n*Td,pitch:Mn.clamp(e-i*Td,-lo,lo)}}function Eh(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:Mn.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-lo,lo)}}class HS{yaw=0;pitch=0;freeMode=!1;anchor=new O;freePos=new O;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new O(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new On().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,il(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,Eh(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new O;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new O(-i.z,0,i.x),s=new O;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=Mn.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=Mn.clamp(this.freePos.y,1.1,4.4),this.freePos.z=Mn.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function GS(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}const ys=new O;function wn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),c=Math.PI/4;ys.copy(e),ys[i]=0,ys.normalize();const l=.5*a/(a+o),u=1-ys.angleTo(t)/c;return Math.sign(ys[n])===1?u*l:o/(a+o)+l+l*(1-u)}class Bl extends pr{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const c=new O,l=new O,u=new O(e,n,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=h.length/6,x=new O,p=.5/a;for(let m=0,S=0;m<h.length;m+=3,S+=2)switch(c.fromArray(h,m),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),h[m+0]=u.x*Math.sign(c.x)+l.x*s,h[m+1]=u.y*Math.sign(c.y)+l.y*s,h[m+2]=u.z*Math.sign(c.z)+l.z*s,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/g)){case 0:x.set(1,0,0),d[S+0]=wn(x,l,"z","y",s,i),d[S+1]=1-wn(x,l,"y","z",s,n);break;case 1:x.set(-1,0,0),d[S+0]=1-wn(x,l,"z","y",s,i),d[S+1]=1-wn(x,l,"y","z",s,n);break;case 2:x.set(0,1,0),d[S+0]=1-wn(x,l,"x","z",s,e),d[S+1]=wn(x,l,"z","x",s,i);break;case 3:x.set(0,-1,0),d[S+0]=1-wn(x,l,"x","z",s,e),d[S+1]=1-wn(x,l,"z","x",s,i);break;case 4:x.set(0,0,1),d[S+0]=1-wn(x,l,"x","y",s,e),d[S+1]=1-wn(x,l,"y","x",s,n);break;case 5:x.set(0,0,-1),d[S+0]=wn(x,l,"x","y",s,e),d[S+1]=1-wn(x,l,"y","x",s,n);break}}static fromJSON(e){return new Bl(e.width,e.height,e.depth,e.segments,e.radius)}}const Ad=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function VS(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return Ad[e%Ad.length]}function Za(t,e,n,i){const a=(h,f)=>h<n.minX+.2||h>n.maxX-.2||f<n.minZ+.2||f>n.maxZ-.2||i.some(d=>h>d.minX-.2&&h<d.maxX+.2&&f>d.minZ-.2&&f<d.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],c=new Set(["0,0"]);let l=-1;for(let h=0;h<o.length&&h<12e3;h++){const f=o[h];if(Math.hypot(f.x-e.x,f.z-e.z)<.48){l=h;break}for(const[d,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const x=f.x+d,p=f.z+g,m=`${Math.round((x-t.x)/.45)},${Math.round((p-t.z)/.45)}`;!c.has(m)&&!a(x,p)&&(c.add(m),o.push({x,z:p,parent:h}))}}if(l<0)return[];const u=[];for(let h=l;h>=0;h=o[h].parent)u.push({x:o[h].x,z:o[h].z});return u.reverse().slice(1)}const Fr={x:-7.8,z:-4.6},WS=[0,4,8,2,6,10,1,5,9,3,7,11];function rl(t=0){const e=-Math.PI/2+WS[(t%12+12)%12]*Math.PI/6;return{x:Fr.x+Math.cos(e)*2.15,z:Fr.z+Math.sin(e)*2.15}}function sl(t,e=0){if(t==="culture")return rl(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const Qi=(t,e,n)=>t+(e-t)*n;function wh(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=Qi(1.35,.5,n),s=Qi(2.2,.6,n),a=e?0:n<.35?Qi(.06,0,n/.35):0,o=Qi(9,4,n),c=n>.45?Qi(0,.42,(n-.45)/.55):0,l=n>.55?Qi(0,.12,(n-.55)/.45):0,u=n>.5?Qi(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:c,slump:l,saturation:u,zzz:n>=.8}}function XS(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function ur(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const Rd=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function $l(t){const e=ur(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+Rd[n].map((r,s)=>Math.round(r+(Rd[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const ZS={EXPLOIT:["Exploiting","calm"],BOREDOM_SNAP:["Boredom snap","snap"],YOKED_SNAP:["Boredom snap","snap"],PARADIGM_BREAKOUT:["Paradigm breakout","breakout"],CONVERGED:["Converged","converged"],FRUSTRATED:["Frustrated","frustrated"]};function Yr(t){if(!t)return{label:"",tone:"calm"};const e=ZS[t];return e?{label:e[0],tone:e[1]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm"}}function qS(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function YS(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const al=t=>Math.max(0,Math.min(1,t)),KS=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,Cd=t=>{const e=al(t);return e===0||e===1?e:al(KS(e))};function JS(t,e){const n=al(t),i=Math.max(0,Math.floor(e)),r=Cd(n/.4),s=Array.from({length:i},(a,o)=>{const c=.4+o*.6/Math.max(1,i),l=.6/Math.max(1,i);return Cd((n-c)/l)});return{room:r,agents:s}}function jS(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function QS(){const t=new bg;t.background=new Ze("#e4edf3"),t.fog=new Ul("#e4edf3",34,90);const e=new Nn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new pr(1,1,1),r=(L,P=.68,ne=0)=>new Wa({color:L,roughness:P,metalness:ne}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),c=r("#b1bec5",.32,.65),l=r("#c8d3d6"),u=r("#a8b5a1"),h=r("#b4a38c",.8),f=r("#928572");r("#18252a",.38);const d=r("#f9f4e6"),g=r("#3e8493"),x=r("#d2a468"),p=new $g({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:Tn}),m=new er({color:"#fff6dd"}),S=new er({color:"#80b7ab"}),w=(L,P,ne,j,Q,E,v,R=t)=>{const H=new _t(i,v);return H.position.set(L,P,ne),H.scale.set(j,Q,E),R.add(H),H},y=(L,P,ne,j,Q,E,v=t,R=20)=>{const H=new _t(new Zs(j,j,Q,R),E);return H.position.set(L,P,ne),v.add(H),H},A=(L,P,ne,j,Q,E=t)=>{const v=new _t(new kl(j,16,12),Q);return v.position.set(L,P,ne),E.add(v),v},T=(L,P,ne,j)=>n.push({minX:L-ne/2,maxX:L+ne/2,minZ:P-j/2,maxZ:P+j/2}),_=(L,P,ne,j,Q=t)=>{const E=P.clone().sub(L),v=new _t(new Zs(ne,ne,E.length(),12),j);return v.position.copy(L).add(P).multiplyScalar(.5),v.quaternion.setFromUnitVectors(new O(0,1,0),E.normalize()),Q.add(v),v},M=(L,P,ne,j,Q,E,v="#f5f4ec",R="#425859",H=0)=>{const I=document.createElement("canvas");I.width=1024,I.height=Math.max(64,Math.round(1024*E/Q));const te=I.getContext("2d");te.fillStyle=v,te.fillRect(0,0,I.width,I.height);const ce=L.split(`
`),K=Math.min(I.height/(ce.length+1),I.width/(Math.max(...ce.map(ee=>ee.length))*.62));te.fillStyle=R,te.textAlign="center",te.textBaseline="middle",te.font=`500 ${K}px sans-serif`,ce.forEach((ee,W)=>te.fillText(ee,512,I.height/2+(W-(ce.length-1)/2)*K*1.3));const Z=new ji(I);Z.colorSpace=Ot;const le=new er({map:Z,side:Tn}),C=new _t(new ir(Q,E),le);return C.position.set(P,ne,j),C.rotation.y=H,t.add(C),C},z=(L,P,ne)=>{const j=document.createElement("canvas");j.width=960,j.height=360;const Q=j.getContext("2d");Q.fillStyle="#fff9ea",Q.strokeStyle="#b6c9c4",Q.lineWidth=4,Q.beginPath(),Q.roundRect(4,4,952,310,30),Q.fill(),Q.stroke(),Q.beginPath(),Q.moveTo(450,313),Q.lineTo(480,352),Q.lineTo(510,313),Q.fill(),Q.textAlign="left",Q.fillStyle="#35716c",Q.font="bold 38px sans-serif",Q.fillText(L.toUpperCase(),34,48),Q.fillStyle="#263b41",Q.font="48px sans-serif";const E=P.replace(/\s+/g," ").trim().split(" "),v=[];let R="";for(const I of E){const te=R?R+" "+I:I;Q.measureText(te).width>875&&R?(v.push(R),R=I):R=te}R&&v.push(R),v.slice(0,3).forEach((I,te)=>{let ce=I;te===2&&v.length>3&&(ce=ce.replace(/.{0,3}$/,"…")),Q.fillText(ce,34,110+te*53)}),Q.fillStyle="#6c817c",Q.font="32px sans-serif",Q.fillText(ne.length?"WITH "+ne.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const H=new ji(j);return H.colorSpace=Ot,new _t(new ir(2.7,1.0125),new er({map:H,transparent:!0,side:Tn,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new Vg("#f5faff","#9caeb8",2.15));const N=new id("#ffffff",2.2);N.position.set(-8,11,3),t.add(N);const F=new id("#d0e9fa",.85);F.position.set(8,5,-8),t.add(F);const B=document.createElement("canvas");B.width=512,B.height=512;const Y=B.getContext("2d");Y.fillStyle="#d9e2e6",Y.fillRect(0,0,512,512);for(let L=0;L<1700;L++){const P=Math.sin(L*41.77)*.5+.5,ne=Math.sin(L*19.31+5)*.5+.5;Y.fillStyle=L%3?"#ecf0f1":"#c3d0d6",Y.fillRect(P*512,ne*512,1+L%3,1+L%2)}const D=new ji(B);D.colorSpace=Ot,D.wrapS=D.wrapT=eo,D.repeat.set(8,9),D.anisotropy=8,w(0,-.12,0,24,.24,28,new Wa({map:D,roughness:.85})),w(0,2.5,-13.5,24,5,.3,s),w(11.75,2.5,0,.3,5,27,s),w(0,.43,-13.27,23.5,.86,.12,h),w(11.53,.43,0,.12,.86,26.5,h),w(0,.08,-13.1,23.5,.16,.06,o),w(11.38,.08,0,.06,.16,26.5,o);const X=w(0,4.9,0,24,.16,28,s);X.userData.overhead=!0;for(const L of[-12,-6,0,6,12])w(-11.6,2.5,L,.22,5,.14,s);w(-11.6,.55,0,.3,1.1,27,s),w(-11.6,4.65,0,.3,.7,27,s),w(-11.68,2.75,0,.025,3.5,27,p);for(const L of[1.12,3.8])w(-11.4,L,0,.12,.07,27,c);w(-7.9,2.25,12.7,7.5,4.5,.14,s),w(7.9,2.25,12.7,7.5,4.5,.14,s);for(const L of[-3.9,3.9])w(L,2.25,12.65,.12,4.5,.18,c);w(0,2.25,12.8,7.7,4.5,.025,p),M("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const L of[-8,-1,6]){w(0,4.35,L,20,.08,.07,o);for(const P of[-7,0,7])y(P,4.18,L,.13,.22,o),y(P,4.06,L,.1,.025,m)}const ie=new _t(new Us(1.8,.025,8,64),f);ie.rotation.x=Math.PI/2,ie.position.set(0,3.9,.5),t.add(ie);for(const L of[-1.6,1.6])_(new O(L,3.9,.5),new O(L,4.84,.5),.012,c);w(-28,-.65,-2,45,1,70,r("#b0bf9d"));const V=r("#98af91"),pe=r("#897e69");for(let L=0;L<14;L++){const P=-17-L%3*3,ne=-25+L*4.1;y(P,1.3,ne,.12,3,pe);const j=A(P,3,ne,1.25+L%3*.2,V);j.scale.y=1.45}function J(L,P){y(L,.32,P,.34,.64,s),y(L,.66,P,.29,.04,f);for(let ne=0;ne<6;ne++){const j=ne*2.4;_(new O(L,.65,P),new O(L+Math.cos(j)*.25,1.5+ne%3*.18,P+Math.sin(j)*.25),.025,u),A(L+Math.cos(j)*.3,1.3+ne%3*.18,P+Math.sin(j)*.3,.16,u).scale.set(.55,2,.8)}T(L,P,.8,.8)}J(-10.3,8.4),J(-10.3,-10.8),J(10.3,10.8);function se(L,P,ne,j){w(L,.1,P,ne-.17,.2,j-.12,o),w(L,.51,P,ne,.78,j,l),w(L,.94,P,ne+.08,.08,j+.08,o);const Q=Math.round(ne/.85);for(let E=0;E<Q;E++){const v=L-ne/2+(E+.5)*ne/Q;w(v,.53,P+j/2+.009,ne/Q-.025,.7,.018,a),w(v,.77,P+j/2+.028,.29,.025,.035,c)}T(L,P,ne+.12,j+.12)}function ue(L,P,ne,j="#8ab9ad"){w(L,1,P,.48,.035,.3,c),w(L,1.22,P,.055,.4,.055,c),w(L,1.53,P,.94,.59,.055,o),M(ne+`
—  RESEARCH IN PROGRESS  —`,L,1.53,P+.032,.86,.51,"#203137",j),w(L,1.01,P+.36,.65,.035,.2,s);for(let Q=0;Q<5;Q++)w(L-.25+Q*.12,1.031,P+.36,.07,.007,.11,c)}function Re(L,P,ne){w(L,1.02,P,.56,.09,.3,u);for(let j=0;j<5;j++)y(L-.22+j*.11,1.16,P,.031,.25,a,t,10),y(L-.22+j*.11,1.3,P,.038,.025,ne,t,10)}function Be(L,P){const ne=new Hn;ne.position.set(L,1,P),t.add(ne);const j=w(0,.045,0,.58,.09,.55,a,ne);j.rotation.y=-.1;const Q=w(0,.36,-.15,.14,.62,.16,a,ne);Q.rotation.x=-.15;const E=w(0,.61,-.03,.18,.15,.37,a,ne);E.rotation.x=-.2;const v=y(0,.67,.1,.07,.27,o,ne);v.rotation.x=-.38,y(0,.47,.1,.065,.18,c,ne),w(0,.23,.08,.4,.04,.35,o,ne),y(0,.11,.08,.12,.04,m,ne),A(.13,.32,-.11,.065,o,ne)}function re(L,P){w(L,1.01,P,.35,.025,.22,c),w(L,1.25,P,.025,.45,.025,c),w(L,1.46,P,.35,.035,.05,s);for(let ne=0;ne<3;ne++){const j=L-.12+ne*.12;y(j,1.28,P,.026,.32,a,t,12),y(j,1.08,P,.007,.12,c,t,8),y(j,1.46,P,.035,.035,ne%2?g:x,t,12)}}const ve=Fr.x,Te=Fr.z;y(ve,.43,Te,.18,.78,c),y(ve,.88,Te,1.38,.12,h),y(ve,.95,Te,1.31,.025,a),T(ve,Te,2.8,2.8);for(let L=0;L<12;L++){const P=L*Math.PI/6,ne=ve+Math.sin(P)*2.15,j=Te+Math.cos(P)*2.15;y(ne,.36,j,.29,.07,c),y(ne,.18,j,.035,.32,c);const Q=y(ne,.43,j,.31,.09,L%3===0?r("#dfabc5"):u);Q.userData.discussionSeat=!0;const E=w(ve+Math.sin(P)*.87,.979,Te+Math.cos(P)*.87,.28,.015,.21,d);E.rotation.y=-P}y(ve,.99,Te,.19,.025,x),M("01   IDEATION ROUNDTABLE",ve,2.65,-7.2,4.7,.38),M("SHARED QUESTIONS / GROUP DISCUSSION",ve,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),se(5.4,-2.8,6.2,1.7);const Oe=w(5.6,1.44,-2.85,1.08,.88,.3,x);Oe.rotation.x=-.12,w(5.6,1.65,-2.666,.81,.25,.035,o),M("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const Me=y(5.6,1.3,-2.64,.16,.07,o);Me.rotation.x=Math.PI/2;const $e=w(5.64,1.36,-2.59,.025,.11,.025,s);$e.rotation.z=-.5;for(const[L,P]of[[5.28,g],[5.88,x]])A(L,1.1,-2.64,.045,o),_(new O(L,1.1,-2.61),new O(L+.35,1.03,-2.1),.018,P),_(new O(L+.35,1.03,-2.1),new O(L+.9,1.04,-2.17),.018,P);w(7.2,1.01,-2.8,.95,.055,.68,u);for(let L=0;L<4;L++)w(6.9+L*.19,1.08,-2.8,.1,.09,.18,o),w(6.9+L*.19,1.04,-2.8,.02,.018,.57,c);ue(3.3,-3.08,"PHYSICS / MEASUREMENTS"),M("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),se(.2,-10.6,5.8,1.5),ue(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let L=0;L<5;L++){const P=.25+L*.43,ne=-10.55+L%2*.19,j=[g,x,u][L%3];y(P,1.16,ne,.13,.35,p),y(P,1.09,ne,.115,.19,j),y(P,1.4,ne,.055,.15,p),y(P,1.49,ne,.065,.045,o)}Re(2.2,-10.9,g),re(.1,-11.05),M("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),M("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),M("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let L=0;L<5;L++)w(-2.2+L*1.12,2.68,-13.29,.85,.06,.02,L%2?u:h);se(-7.3,5.4,4.8,1.45),ue(-8.6,5.18,"BIOLOGY / CELL CULTURES"),Be(-7.15,5.32);for(let L=0;L<3;L++){const P=-6.25+L*.43,ne=5.5+L%2*.3;y(P,1.025,ne,.18,.055,p),y(P,1.045,ne,.16,.015,u);for(let j=0;j<5;j++){const Q=j*2.4,E=A(P+Math.cos(Q)*.1,1.065,ne+Math.sin(Q)*.1,.035,L%2?x:g);E.scale.y=.35}}Re(-5.55,5.15,g),M("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const L of[-9.9,-7.9,-5.9])w(10.75,1.22,L,1.4,2.4,1.5,a),w(10.02,1.22,L,.035,2.18,1.35,l),w(9.98,1.35,L+.42,.035,.43,.035,c),T(10.75,L,1.5,1.6);M("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),se(9.3,7.2,3.7,1.35),w(9.5,.99,7.1,.8,.025,.6,c),w(9.5,1.008,7.1,.63,.015,.46,o),_(new O(9.5,1,6.8),new O(9.5,1.5,6.8),.025,c),_(new O(9.5,1.5,6.8),new O(9.5,1.5,7.05),.025,c),M("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[L,P]of[[3.7,-.5],[-7.5,7.7]]){y(L,.66,P,.32,.12,u),y(L,.34,P,.045,.56,c);for(let ne=0;ne<4;ne++){const j=ne*Math.PI/2;_(new O(L,.12,P),new O(L+Math.cos(j)*.37,.08,P+Math.sin(j)*.37),.025,c)}T(L,P,.7,.7)}y(0,.13,.5,1.85,.26,f),y(0,.52,.5,1.7,.55,h),y(0,.84,.5,1.84,.1,a),y(0,.9,.5,1.62,.035,o),T(0,.5,3.7,3.7),M("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const vt=new Hn;vt.position.set(0,.95,.5),t.add(vt);const ke=[];for(let L=0;L<36;L++){const P=L*2.39996,ne=Math.sqrt(L/36)*1.35,j=A(Math.cos(P)*ne,.15+L%5*.11,Math.sin(P)*ne,.045+L%3*.014,L%4===0?x:u,vt);ke.push(j)}for(const L of[-1.45,1.45])for(const P of[-1.1,2.1])y(L,1.03,P,.018,.22,c);const ot=[u,h,g,d,x];for(const L of[-6.2,6.2]){for(const P of[L-.9,L+.9])w(P,1.75,-12.7,.1,3.5,.5,h);for(const P of[.25,1.25,2.25,3.25]){w(L,P,-12.7,1.9,.075,.6,h);for(let ne=0;ne<6;ne++)w(L-.7+ne*.27,P+.3,-12.7,.17,.5-ne%3*.06,.32,ot[ne%5])}T(L,-12.7,2.05,.75)}M("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),M("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function lt(L,P,ne){const j=document.createElement("canvas");j.width=256,j.height=64;const Q=j.getContext("2d");Q.fillStyle="rgba(23,35,44,.86)",Q.beginPath(),Q.roundRect(4,6,248,52,14),Q.fill(),Q.fillStyle="#ffffff26",Q.beginPath(),Q.roundRect(16,38,224,10,5),Q.fill(),P!=null&&(Q.fillStyle=$l(P),Q.beginPath(),Q.roundRect(16,38,Math.max(10,224*P/100),10,5),Q.fill()),Q.fillStyle="#f4f0e4",Q.font="600 21px sans-serif",Q.textBaseline="middle",Q.fillText(P==null?"Boredom —":`Bored ${Math.round(P)}%`,18,22),ne&&(Q.textAlign="right",Q.fillStyle="#ddc270",Q.font="600 15px sans-serif",Q.fillText(ne.toUpperCase(),238,22));const E=L.material;E.map?.dispose(),E.map=new ji(j),E.map.colorSpace=Ot,E.needsUpdate=!0}const qe=(()=>{const L=document.createElement("canvas");L.width=128,L.height=128;const P=L.getContext("2d");P.fillStyle="#e9e4f4",P.strokeStyle="#31434b",P.lineWidth=6,P.font="700 40px sans-serif";for(const[j,Q,E,v]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])P.font=`700 ${v}px sans-serif`,P.fillStyle="#31434b",P.fillText(j,Q+3,E+3),P.fillStyle="#e9e4f4",P.fillText(j,Q,E);const ne=new ji(L);return ne.colorSpace=Ot,ne})(),Ut=(L,P,ne)=>{const j=Math.atan2(Math.sin(P-L),Math.cos(P-L));return Math.abs(j)<ne?P:L+Math.sign(j)*ne},ut=new Map;let zt=1;function xt(L,P,ne,j,Q,E){const v=new Hn;v.position.set(L,0,P),v.rotation.y=ne,t.add(v);const R=VS(E),H=r(R.shell,.62),I=r("#293b42",.8),te=r(R.accent,.48),ce=r(R.trim,.57),K=new er({color:"#263b41",side:cn}),Z=j.startsWith("B")?u:j.startsWith("C")?x:g,le=(Ye,Vt,Hi,jn,ls,Gi,ia,ra=v,Vi=.055)=>{const sa=new Bl(jn,ls,Gi,3,Math.min(Vi,jn/3,ls/3,Gi/3)),Wi=new _t(sa,ia);Wi.position.set(Ye,Vt,Hi),ra.add(Wi);const us=new _t(sa,K);return us.scale.setScalar(1.055),Wi.add(us),Wi};for(const Ye of[-.13,.13])le(Ye,.42,0,.16,.4,.18,H),A(Ye,.19,.055,.12,te,v).scale.set(.95,.68,1.4);le(0,.99,0,.54,.61,.35,H,v,.1),le(0,.72,0,.57,.13,.37,H,v,.06),w(0,.98,.184,.012,.45,.012,I,v);const C=w(-.105,1.21,.19,.16,.07,.025,H,v);C.rotation.z=-.55;const ee=w(.105,1.21,.19,.16,.07,.025,H,v);ee.rotation.z=.55,y(0,1.36,0,.09,.12,te,v);const W=new Hn;if(W.position.set(0,1.64,0),v.add(W),R.head==="round"){const Ye=A(0,0,0,.265,H,W);Ye.scale.set(1.21,1,.92);const Vt=new _t(Ye.geometry,K);Vt.scale.setScalar(1.055),Ye.add(Vt)}else le(0,0,0,.59,R.ears==="compact"?.44:.49,.45,H,W,R.head==="monitor"?.055:.13);const ge=R.head==="monitor";ge&&le(0,-.005,.232,.49,.36,.025,I,W,.06);for(const Ye of[-1,1]){const Vt=y(Ye*.335,0,0,.125,.09,te,W);Vt.rotation.z=Math.PI/2;const Hi=y(Ye*.389,0,0,R.ears==="compact"?.06:.085,.025,ce,W);if(Hi.rotation.z=Math.PI/2,R.ears==="ring"){const jn=new _t(new Us(.125,.012,6,24),I);jn.rotation.y=Math.PI/2,jn.position.set(Ye*.385,0,0),W.add(jn)}}const me=R.antenna==="pair"?[-.17,.17]:[R.antenna==="offset-right"?.15:R.antenna==="offset-left"?-.16:0];for(const Ye of me)_(new O(Ye,.23,0),new O(Ye+(R.antenna==="offset-right"?.045:0),.39,0),.018,I,W),A(Ye+(R.antenna==="offset-right"?.045:0),.4,0,.047,ce,W);const oe=document.createElement("canvas");oe.width=256,oe.height=200;const he=oe.getContext("2d"),De=ge?"#fff8e4":"#263b41";he.fillStyle=De,he.strokeStyle=De,he.lineWidth=12,he.lineCap="round";for(const Ye of[82,174])he.beginPath(),R.eyes==="happy"?(he.arc(Ye,79,15,Math.PI,Math.PI*2),he.stroke()):(he.ellipse(Ye,76,10,17,0,0,Math.PI*2),he.fill());he.fillStyle="#f29b40";for(const Ye of[52,204])he.beginPath(),he.ellipse(Ye,112,13,8,0,0,Math.PI*2),he.fill();he.fillStyle="#263b41",he.beginPath(),he.ellipse(128,123,24,28,0,0,Math.PI),he.closePath(),he.fill(),he.fillStyle="#f18540",he.beginPath(),he.ellipse(128,137,13,9,0,0,Math.PI*2),he.fill();const fe=new ji(oe);fe.colorSpace=Ot;const Le=new er({map:fe,transparent:!0,depthWrite:!1}),Ge=new _t(new ir(.49,.38),Le);Ge.position.set(0,-.01,.255),W.add(Ge);const xe=new Hn;if(xe.position.set(.32,1.22,0),v.add(xe),le(0,-.12,0,.16,.29,.19,H,xe,.065),A(0,-.28,.07,.085,te,xe),le(0,-.29,.16,.13,.12,.2,H,xe,.05),A(0,-.29,.28,.092,te,xe),le(-.32,1.04,0,.16,.36,.19,H,v,.07),A(-.32,.84,.06,.09,te,v),R.prop==="magnifier"){const Ye=new _t(new Us(.1,.018,8,24),te);Ye.position.set(.32,1.05,.4),v.add(Ye),_(new O(.32,.96,.4),new O(.32,.84,.4),.022,I,v);const Vt=y(.32,1.05,.4,.084,.008,p,v);Vt.rotation.x=Math.PI/2}else if(R.prop==="clipboard"){le(-.31,.96,.23,.22,.29,.035,ce,v,.025),w(-.31,.97,.253,.17,.22,.008,d,v);for(let Ye=0;Ye<3;Ye++)w(-.31,.92+Ye*.05,.261,.11,.012,.005,te,v)}else{y(-.31,.97,.17,.028,.15,te,v);const Ye=new _t(new Fl(.078,.15,16),ce);Ye.position.set(-.31,.86,.17),v.add(Ye)}const st=A(-.17,1.22,.19,.018,S,v);st.name="agent-status-led";const Mt=M(j,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(Mt),v.add(Mt),w(.12,.93,.19,.2,.045,.015,Z,v);const kn=M(j.toUpperCase(),L,2.07,P+.16,.58,.18,"#f4f8fa","#31434b");v.userData.ownedMaterials=[H,I,te,ce,K,Le,Mt.material],v.userData.ownedTextures=[fe,Mt.material.map];const _r=new tc(new Va({transparent:!0,depthTest:!1}));_r.scale.set(.8,.8,1),t.add(_r);const xi=new tc(new Va({transparent:!0,depthTest:!1}));xi.scale.set(.86,.215,1),xi.name="boredom-meter",t.add(xi);const $i=new tc(new Va({map:qe,transparent:!0,depthTest:!1}));$i.scale.set(.5,.5,1),$i.name="boredom-zzz",$i.visible=!1,t.add($i);for(const Ye of[H,I,te,ce])Ye.userData.baseColor=Ye.color.clone();const cs={id:E,station:Q,head:W,arm:xe,light:st,group:v,sign:kn,path:[],target:"",activity:_r,activityState:"",idea:null,ideaText:"",meter:xi,meterKey:"",zzz:$i,tint:1};return ut.set(E,cs),cs}const ln=new Map;for(const L of[...t.children])if(L instanceof _t&&L.geometry===i&&!L.userData.overhead&&!Array.isArray(L.material)&&!L.material.transparent){const P=ln.get(L.material)||[];P.push(L),ln.set(L.material,P)}for(const[L,P]of ln){if(P.length<3)continue;const ne=new Dg(i,L,P.length);P.forEach((j,Q)=>{j.updateMatrix(),ne.setMatrixAt(Q,j.matrix),t.remove(j)}),ne.instanceMatrix.needsUpdate=!0,ne.computeBoundingSphere(),t.add(ne)}const Rt=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new O(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new O(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new O(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new O(-6.3,1.25,7.2),radius:3.1}];let en=0;const un={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function dn(L,P){const ne=Math.max(0,Math.min(.05,L-en));en=L,vt.rotation.y=L*(P.replay||P.running?.025:.006),ke.forEach((R,H)=>{R.visible=H<P.agents.length*4,R.position.y=.15+H%5*.11+Math.sin(L*.8+H)*.025});const j=new Set(P.agents.map(R=>R.id));for(const[R,H]of ut)if(!j.has(R)){if(t.remove(H.group,H.sign,H.activity,H.meter,H.zzz),H.meter.material.map?.dispose(),H.meter.material.dispose(),H.zzz.material.dispose(),H.idea){t.remove(H.idea),H.idea.geometry.dispose();const te=H.idea.material;te.map?.dispose(),te.dispose()}H.activity.material.map?.dispose(),H.activity.material.dispose(),H.group.traverse(te=>{te instanceof _t&&te.geometry!==i&&te.geometry.dispose()});for(const te of H.group.userData.ownedMaterials)te.dispose();for(const te of H.group.userData.ownedTextures||[])te?.dispose();H.sign.geometry.dispose();const I=H.sign.material;I.map?.dispose(),I.dispose(),ut.delete(R)}P.agents.forEach((R,H)=>{let I=ut.get(R.id);I||(I=xt(R.position?.x??(H%3-1)*.6,R.position?.z??10.4+Math.floor(H/3)*.4,0,R.name,R.stationId,R.id));const te=R.id.startsWith("worker-")?Number(R.id.match(/\d+$/)?.[0]||1)-1:H%4,ce=sl(R.stationId,te),K=`${R.stationId}:${te}`;I.target!==K&&(I.target=K,I.station=R.stationId,I.path=Za(I.group.position,ce,un,n)),R.position&&(I.group.position.set(R.position.x,0,R.position.z),I.path=[]);const Z=wh(R.boredom,P.reducedMotion),le=I.path[0];if(le){const oe=le.x-I.group.position.x,he=le.z-I.group.position.z,De=Math.hypot(oe,he);if(De<.07)I.path.shift();else{const fe=Math.min(De,ne*1.8*Z.walk);I.group.position.x+=oe/De*fe,I.group.position.z+=he/De*fe,I.group.rotation.y=P.reducedMotion?Math.atan2(oe,he):Ut(I.group.rotation.y,Math.atan2(oe,he),Math.max(.02,ne*6*Z.turn))}}else I.group.rotation.y=R.position?.heading??(R.stationId==="culture"?Math.atan2(Fr.x-I.group.position.x,Fr.z-I.group.position.z):Math.PI);I.sign.position.set(I.group.position.x,2.28,I.group.position.z),I.sign.lookAt(e.position),I.activity.position.set(I.group.position.x,2.85,I.group.position.z);const C=!!le||!!R.position?.moving,ee=`${R.boredom==null?"-":Math.round(R.boredom)}:${R.regime||""}`;I.meterKey!==ee&&(I.meterKey=ee,lt(I.meter,R.boredom,Yr(R.regime).label)),I.meter.position.set(I.group.position.x,2.5,I.group.position.z),I.group.position.y=C?Math.abs(Math.sin(L*Z.bobHz+H))*Z.bob:0,I.group.rotation.x=Z.slump,I.zzz.visible=Z.zzz&&!C,I.zzz.position.set(I.group.position.x+.32,1.95+(P.reducedMotion?0:(L*.35+H*.3)%1*.35),I.group.position.z),I.zzz.material.opacity=P.reducedMotion?.9:1-(L*.35+H*.3)%1*.6,Math.abs(I.tint-Z.saturation)>.02&&(I.tint=Z.saturation,I.group.traverse(oe=>{if(oe instanceof _t&&oe.material instanceof Wa&&oe.material.userData.baseColor){const he=oe.material.userData.baseColor,De=he.r*.3+he.g*.59+he.b*.11;oe.material.color.setRGB(De+(he.r-De)*Z.saturation,De+(he.g-De)*Z.saturation,De+(he.b-De)*Z.saturation)}})),I.activity.visible=R.state!=="idle"&&!(R.stationId==="culture"&&R.discussionBrief);const W=R.discussionBrief||"",ge=W?`${R.name}:${W}:${(R.discussionPeers||[]).join(",")}`:"";if(I.ideaText!==ge){if(I.idea){t.remove(I.idea),I.idea.geometry.dispose();const oe=I.idea.material;oe.map?.dispose(),oe.dispose(),I.idea=null}I.ideaText=ge,W&&(I.idea=z(R.name,W,R.discussionPeers||[]),I.idea.name="recorded-discussion-bubble",t.add(I.idea))}if(I.idea&&(I.idea.visible=zt>=.98&&R.stationId==="culture"&&!R.position?.moving&&(!!R.discussionBrief||R.state==="thinking"||R.state==="reviewing"),I.idea.position.set(I.group.position.x,3.05,I.group.position.z),I.idea.lookAt(e.position)),I.activityState!==R.state){I.activityState=R.state;const oe=document.createElement("canvas");oe.width=128,oe.height=128;const he=oe.getContext("2d");he.font="80px sans-serif",he.textAlign="center",he.textBaseline="middle",he.fillText(R.state==="thinking"?"💡":R.state==="working"?"🫧":"📈",64,64),I.activity.material.map?.dispose(),I.activity.material.map=new ji(oe),I.activity.material.needsUpdate=!0}const me=(P.replay||P.running)&&(R.state==="working"||R.state==="thinking");I.arm.rotation.x=le||R.position?.moving?Math.sin(L*5+H)*.12:me?Math.sin(L*1.8+H)*.08:0,I.head.rotation.y=Math.sin(L*(Z.level==="frenetic"?.9:.32)+H)*(Z.level==="frenetic"?.12:.055),I.head.rotation.x=(me&&!le?.12:0)+Z.droop,I.light.scale.setScalar(me?1+Math.sin(L*2)*.12:1)}),e.updateMatrixWorld();const Q=[],E=230,v=86.25;for(const R of ut.values())if(R.idea?.visible){const H=R.idea.position.clone(),I=H.clone().applyMatrix4(e.matrixWorldInverse);if(I.z>=0){R.idea.visible=!1;continue}const te=H.project(e);if(Math.abs(te.x)>1.15||Math.abs(te.y)>1.15){R.idea.visible=!1;continue}let ce=Mn.clamp((te.x+1)*innerWidth/2,90+E/2,innerWidth-E/2-16),K=(1-te.y)*innerHeight/2;for(let le=0;le<12&&Q.some(C=>Math.abs(ce-C.x)<E+10&&Math.abs(K-C.y)<v+8);le++)K-=v+8,K<110&&(K=155,ce=Math.min(innerWidth-E/2-16,ce+E+12));Q.push({x:ce,y:K}),R.idea.position.set(ce/innerWidth*2-1,1-K/innerHeight*2,te.z).unproject(e),R.idea.quaternion.copy(e.quaternion);const Z=2*-I.z*Math.tan(Mn.degToRad(e.fov/2))/innerHeight;R.idea.scale.setScalar(E*Z/2.7),R.idea.renderOrder=10}}const k=new Hn;t.add(k);const fn=new Set([...ut.values()].flatMap(L=>[L.group,L.sign,L.activity,L.meter,L.zzz]));for(const L of[...t.children])L!==k&&!fn.has(L)&&k.add(L);function mt(L){zt=Mn.clamp(L,0,1);const P=JS(zt,ut.size);k.scale.setScalar(P.room),[...ut.values()].forEach((ne,j)=>{const Q=P.agents[j]??1,E=Q<.88?Q/.88*1.08:1.08-(Q-.88)/.12*.08;ne.group.scale.setScalar(E),ne.sign.scale.setScalar(E),ne.activity.scale.set(.8*E,.8*E,1),ne.meter.scale.set(.86*E,.215*E,1),ne.zzz.scale.set(.5*E,.5*E,1)})}return{scene:t,camera:e,colliders:n,stations:Rt,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:dn,grow:mt,setOverview:L=>{X.visible=!0},agentPositions:()=>[...ut.values()].map(L=>({id:L.id,position:L.group.position.clone()})),exposure:1}}const ey=!0;function Th(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function ol(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Pd(t,e="|"){return t.map(n=>Lh(n)).join(e)}function cl(t,e){return typeof e=="bigint"?e.toString():e}class ty{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function Hl(t){return new ty(t)}function ny(t){return t==null}function Gl(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function iy(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function mr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function Ah(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function gi(t){return Ah(t._zod.def)??t._zod.def.shape}function Rh(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return mr(this,e,i),i},enumerable:!0,configurable:!0})}function Ch(t,e,n){e in t?mr(t,e,n):t[e]=n}function dr(t,e,n,i){const r=gi(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?Rh(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):Ch(t,s,i?i(a.value,s):a.value))}}function ry(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?Rh(t,n,()=>e[n]):Ch(t,n,i.value))}}function yn(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function sy(t){return JSON.stringify(t)}function ay(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const Ph="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function uo(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const oy=Hl(()=>{if(Yn.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function qs(t){if(uo(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(uo(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function Ih(t){return qs(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const cy=new Set(["string","number","symbol"]);function wo(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function zi(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Fe(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function Lh(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function ly(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const Nh={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},uy={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function dy(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return dr(s,t,To(t,e)),zi(t,yn(n,{shape:s,checks:[]}))}function To(t,e){const n=gi(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function fy(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(To(t,e)),a={};return dr(a,t,Reflect.ownKeys(gi(t)).filter(o=>!s.has(o))),zi(t,yn(n,{shape:a,checks:[]}))}function hy(t,e){if(!qs(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=gi(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return zi(t,yn(t._zod.def,{shape:Dh(t,e)}))}function Dh(t,e){const n={};return dr(n,t,Reflect.ownKeys(gi(t))),ry(n,e),n}function py(t,e){if(!qs(e))throw new Error("Invalid input to safeExtend: expected a plain object");return zi(t,yn(t._zod.def,{shape:Dh(t,e)}))}function my(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};dr(n,t,Reflect.ownKeys(gi(t))),dr(n,e,Reflect.ownKeys(gi(e)));const i=yn(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return zi(t,i)}function Id(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(To(e,n)):void 0,c={};return dr(c,e,Reflect.ownKeys(gi(e)),t&&((l,u)=>o&&!o.has(u)?l:new t({type:"optional",innerType:l}))),zi(e,yn(e._zod.def,{shape:c,checks:[]}))}function gy(t,e,n){const i=n?new Set(To(e,n)):void 0,r={};return dr(r,e,Reflect.ownKeys(gi(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),zi(e,yn(e._zod.def,{shape:r}))}function di(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function _y(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function Uh(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function Ms(t){return typeof t=="string"?t:t?.message}function Ld(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function ll(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function rs(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:Ms(t.inst?._zod.def?.error?.(t))??Ms(s?.(t))??Ms(e?.error?.(t))??Ms(n.customError?.(t))??Ms(n.localeError?.(t))??"Invalid input",o={};for(const c of Object.keys(t))c==="inst"||c==="schema"||c==="continue"||c==="input"||c==="__proto__"||(o[c]=t[c]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const vy=/[\uD800-\uDBFF]/;function Vl(t){const e=t.length;if(!vy.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function Wl(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function xy(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function Ys(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function Sy(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):yy(t,n,i.value)}}function Oi(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function Oh(t,e,n){return Oi(t,e,n,!1)}function Fh(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return Oi(this,n,i(this))},set(r){Oi(this,n,r)}})}return e}function yy(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:Oi(this,e,n.bind(this))},set(i){Oi(this,e,i)}})}function My(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let oc,Ai=!1;const by={configurable:!0,get(){Ai=!0}};function ft(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&oc!==t._zod){oc=void 0;return}oc=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,by);const r=Ai;Ai=!1;try{const s=n(this);return Ai?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Ai=Ai||r,s}catch(s){throw delete this[e],Ai=Ai||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function Ey(t,e,n,i){const r=My(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const wy="~constantCatch";function Ty(t){const e=()=>t;return e[wy]=!0,e}var Nd;const cc={value:void 0,enumerable:!1};let Dd="captureStackTrace"in Error?Error:null;function Ay(t){const e=Dd;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return Dd=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function ae(t,e,n,i){const r={};function s(f){this.def=f,this.constr=h,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function c(f,d){if(f._zod){if(f._zod.traits.has(t))return}else{cc.value=new s(d);try{Object.defineProperty(f,"_zod",cc)}finally{cc.value=void 0}}if(f._zod.traits.add(t),e(f,d),o){const x=Object.getPrototypeOf(f),p=f._zod.constr.prototype;let m=x;for(;m&&m!==p;)m=Object.getPrototypeOf(m);const S=m??x;o.has(S)||(o.add(S),Sy(S,a))}const g=h.prototype;for(const x in g)Object.prototype.hasOwnProperty.call(g,x)&&(x in f||(f[x]=g[x].bind(f)))}const l=i?.Parent??Object;class u extends l{}Object.defineProperty(u,"name",{value:t});function h(f){const d=i?.Parent?Ay(u):this;c(d,f);const g=d._zod.deferred;if(g){for(const p of g)p();d._zod.deferred=void 0}const x=globalThis.__zod_globalConfig?.postProcessor;return x&&x(d),d}return Object.defineProperty(h,"init",{value:c}),Object.defineProperty(h,Symbol.hasInstance,{value:f=>i?.Parent&&f instanceof i.Parent?!0:f?._zod?.traits?.has(t)}),Object.defineProperty(h,"name",{value:t}),h}class rr extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class kh extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(Nd=globalThis).__zod_globalConfig??(Nd.__zod_globalConfig={});const Yn=globalThis.__zod_globalConfig;function Bi(t){return t&&Object.assign(Yn,t),Yn}function Ry(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,cl,2)),t.message}function Cy(t){this._zod.message=t}const Py={get:Ry,set:Cy,enumerable:!0,configurable:!0},lc={value:void 0,enumerable:!1},Ud=new WeakSet([Object.prototype,Error.prototype]),Iy=(t,e)=>{t.name="$ZodError",lc.value=e,Object.defineProperty(t,"issues",lc),lc.value=void 0,Object.defineProperty(t,"message",Py);const n=Object.getPrototypeOf(t);Ud.has(n)||(Ud.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},Ly=ae("$ZodError",Iy);function Ny(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function Dy(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?Ny(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function Uy(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let c=n,l=0;for(;l<o.length;){const u=o[l],h=l===o.length-1;if(u==="_errors"){h&&c._errors.push(e(a)),l++;continue}Object.prototype.hasOwnProperty.call(c,u)||Object.defineProperty(c,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const f=c[u];h&&f._errors.push(e(a)),c=f,l++}}}};return i(t),n}function Ao(t,e){return{callee:e?.callee??t,Err:e?.Err}}const Xl=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new rr;if(o.issues.length){const c=new(s?.Err??t)(o.issues.map(l=>rs(l,a,Bi())));throw Ph(c,s?.callee??e),c}return o.value};return e},Zl=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const c=new(s?.Err??t)(o.issues.map(l=>rs(l,a,Bi())));throw Ph(c,s?.callee??e),c}return o.value};return e},ql=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new rr;return s.issues.length?zh(t,s.issues,r):{success:!0,data:s.value}};function zh(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>rs(r,n,Bi()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const Yl=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?zh(t,s.issues,r):{success:!0,data:s.value}},Oy=Symbol.for("zod.compile.invalid"),Fy=Symbol.for("zod.compile.fallback"),ky=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==Oy)return!0;if(i.definite===!0&&n===void 0)return!1}return zy(t,e,n)});function zy(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[Fy]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new rr;return s.issues.length===0}const By=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},$y=t=>{const e=Xl(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,Ao(n,a))};return n},Hy=t=>{const e=Xl(t),n=(i,r,s,a)=>e(i,r,s,Ao(n,a));return n},Gy=t=>{const e=Zl(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,Ao(n,a))};return n},Vy=t=>{const e=Zl(t),n=async(i,r,s,a)=>await e(i,r,s,Ao(n,a));return n},Wy=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return ql(t)(e,n,r)},Xy=t=>(e,n,i)=>ql(t)(e,n,i),Zy=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Yl(t)(e,n,r)},qy=t=>async(e,n,i)=>Yl(t)(e,n,i),Yy=/^[cC][0-9a-z]{6,}$/,Ky=/^[0-9a-z]+$/,Jy=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,jy=/^[0-9a-vA-V]{20}$/,Qy=/^[A-Za-z0-9]{27}$/,eM=/^[a-zA-Z0-9_-]{21}$/;function tM(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const nM=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,iM=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,Od=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,rM=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,sM="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function aM(){return new RegExp(sM,"u")}const oM=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,cM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,lM=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,uM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,dM=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,fM=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,hM=/^https?$/,pM=/^\+[1-9]\d{6,14}$/,Bh="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function mM(t){return new RegExp(`^${t}$`)}const gM=mM(Bh);function ul(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function _M(t){return new RegExp(`^${ul(t)}$`)}function vM(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${ul({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${ul({precision:t.precision})}`:n;return new RegExp(`^${Bh}T(?:${i})$`)}const xM=/^[\s\S]{0,}$/,SM=/^-?\d+(?:\.\d+)?$/,yM=/^[^A-Z]*$/,MM=/^[^a-z]*$/,gn=ae("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),Kl=t=>{const e=t.value;return!ny(e)&&e.length!==void 0},fo={number:"number",bigint:"bigint",object:"date"},$h=ae("$ZodCheckLessThan",(t,e)=>{gn.init(t,e);const n=fo[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:fo[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Hh=ae("$ZodCheckGreaterThan",(t,e)=>{gn.init(t,e);const n=fo[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:fo[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),bM=ae("$ZodCheckMultipleOf",(t,e)=>{gn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):iy(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),EM=ae("$ZodCheckNumberFormat",(t,e)=>{gn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=Nh[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),wM=ae("$ZodCheckMaxLength",(t,e)=>{var n;gn.init(t,e),(n=t._zod.def).when??(n.when=Kl),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?Vl(r):s)<=e.maximum)return;const o=Wl(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),TM=ae("$ZodCheckMinLength",(t,e)=>{var n;gn.init(t,e),(n=t._zod.def).when??(n.when=Kl),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?Vl(r):s)>=e.minimum)return;const o=Wl(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),AM=ae("$ZodCheckLengthEquals",(t,e)=>{var n;gn.init(t,e),(n=t._zod.def).when??(n.when=Kl),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?Vl(r):s;if(a===e.length)return;const o=Wl(r),c=a>e.length;i.issues.push({origin:o,...c?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),Ro=ae("$ZodCheckStringFormat",(t,e)=>{var n,i;gn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),RM=ae("$ZodCheckRegex",(t,e)=>{Ro.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),CM=ae("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=yM),Ro.init(t,e)}),PM=ae("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=MM),Ro.init(t,e)}),IM=ae("$ZodCheckIncludes",(t,e)=>{gn.init(t,e);const n=wo(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),LM=ae("$ZodCheckStartsWith",(t,e)=>{gn.init(t,e);const n=new RegExp(`^${wo(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),NM=ae("$ZodCheckEndsWith",(t,e)=>{gn.init(t,e);const n=new RegExp(`.*${wo(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),DM=ae("$ZodCheckOverwrite",(t,e)=>{gn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class UM{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const OM={major:4,minor:6,patch:7},Nt=ae("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=OM;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,c,l)=>{if(o.memo)return o;let u=di(o),h;for(const f of c){if(f._zod.def.when){if(_y(o)||!f._zod.def.when(o))continue}else if(u)continue;const d=o.issues.length,g=f._zod.check(o);if(g instanceof Promise&&l?.async===!1)throw new rr;if(h||g instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await g,o.issues.length!==d&&(ll(o.issues,d,t),u||(u=di(o,d)))});else{if(o.issues.length===d)continue;ll(o.issues,d,t),u||(u=di(o,d))}}return h?h.then(()=>o):o},a=(o,c,l)=>{if(di(o))return o.aborted=!0,o;const u=s(c,r,l);if(u instanceof Promise){if(l.async===!1)throw new rr;return u.then(h=>t._zod.parse(h,l))}return t._zod.parse(u,l)};t._zod.run=(o,c)=>{if(c.skipChecks)return t._zod.parse(o,c);if(c.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...c,skipChecks:!0});return u instanceof Promise?u.then(h=>a(h,o,c)):a(u,o,c)}const l=t._zod.parse(o,c);if(l instanceof Promise){if(c.async===!1)throw new rr;return l.then(u=>s(u,r,c))}return s(l,r,c)}}},{get"~standard"(){return Oh(this,"~standard",Vh(this))},set"~standard"(t){Oi(this,"~standard",t)}}),Gh=(t,e)=>t.issues.length?{issues:t.issues.map(n=>rs(n,e,Bi()))}:{value:t.value};async function FM(t,e){const n={async:!0};return Gh(await t._zod.run({value:e,issues:[]},n),n)}function Vh(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return Gh(i,n)}catch{}return FM(t,e)},vendor:"zod",version:1}}const Jl=ae("$ZodString",(t,e)=>{Nt.init(t,e),t._zod.pattern=e.pattern??xM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),yt=ae("$ZodStringFormat",(t,e)=>{Ro.init(t,e),Jl.init(t,e)}),kM=ae("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=iM),yt.init(t,e)}),zM=ae("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=Od(i))}else e.pattern??(e.pattern=Od());yt.init(t,e)}),BM=ae("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=rM),yt.init(t,e)}),Wh=1,ho=2;function Xh(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function $M(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?Xh(t)||ho:HM(t,e)}function HM(t,e){if(!e.normalize&&e.protocol?.source===hM.source&&!/^https?:\/\//i.test(t))return Wh;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??ho}return new URL(t)}catch{return ho}}const GM=/[\t\n\r]/g;function Fd(t){return t.replace(GM,"")}function VM(t,e){return e.lastIndex=0,e.test(t.hostname)}function WM(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const XM=ae("$ZodURL",(t,e)=>{yt.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=$M(i,e);if(r===Wh){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===ho){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=Fd(i);return}e.hostname&&!VM(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!WM(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:Fd(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),ZM=ae("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=aM()),yt.init(t,e)}),qM=ae("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?eM:tM(e.length)),yt.init(t,e)}),YM=ae("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=Yy),yt.init(t,e)}),KM=ae("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=Ky),yt.init(t,e)}),JM=ae("$ZodULID",(t,e)=>{e.pattern??(e.pattern=Jy),yt.init(t,e)}),jM=ae("$ZodXID",(t,e)=>{e.pattern??(e.pattern=jy),yt.init(t,e)}),QM=ae("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=Qy),yt.init(t,e)}),eb=ae("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=vM(e)),yt.init(t,e)}),tb=ae("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=gM),yt.init(t,e)}),nb=ae("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=_M(e)),yt.init(t,e)}),ib=ae("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=nM),yt.init(t,e)}),rb=ae("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=oM),yt.init(t,e)}),sb=/^[0-9a-fA-F:.]+$/;function Zh(t){return sb.test(t)?Xh(`http://[${t}]`):!1}const ab=ae("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=cM),yt.init(t,e),t._zod.check=n=>{Zh(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),ob=ae("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=lM),yt.init(t,e)});function cb(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:Zh(n)}const lb=ae("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=uM),yt.init(t,e),t._zod.check=n=>{cb(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function qh(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const Yh=/^[0-9a-zA-Z+/]*={0,2}$/,ub=ae("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Yh),yt.init(t,e),t._zod.check=n=>{qh(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),jl=/^[A-Za-z0-9_-]*$/;function db(t){if(!jl.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return qh(n)}const fb=ae("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=jl),yt.init(t,e),t._zod.check=n=>{db(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),hb=ae("$ZodE164",(t,e)=>{e.pattern??(e.pattern=pM),yt.init(t,e)});function pb(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const mb=ae("$ZodJWT",(t,e)=>{yt.init(t,e),t._zod.check=n=>{pb(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),Kh=ae("$ZodNumber",(t,e)=>{Nt.init(t,e),t._zod.pattern=SM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),gb=ae("$ZodNumberFormat",(t,e)=>{EM.init(t,e),Kh.init(t,e)}),_b=ae("$ZodUnknown",(t,e)=>{Nt.init(t,e),t._zod.parse=n=>n}),vb=ae("$ZodNever",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function xb(t,e){const n=Ld(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[c,l]of Ld(t._zod.def.checks))if(o>c&&l._zod.def.when(s)){const u=s.issues.length;return l._zod.check(s),s.issues[u].continue=!1,ll(s.issues,u,t),s}}return r(s,a)}}const Sb=t=>Array.isArray(t)?t.length:-1;function kd(t,e,n){t.issues.length&&e.issues.push(...Uh(n,t.issues)),e.value[n]=t.value}const yb=ae("$ZodArray",(t,e)=>{Nt.init(t,e);const n=Yn.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let c=0;c<s.length;c++){const l=s[c],u=e.element._zod.run({value:l,issues:[]},r);if(u instanceof Promise)a.push(u.then(h=>kd(h,i,c)));else if(kd(u,i,c),o&&u.issues.length!==0&&di(u))break}return a.length?Promise.all(a).then(()=>i):i},xb(t,Sb)});function po(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...Uh(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const Mb=[];function Jh(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:Mb,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=ly(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function jh(t,e,n,i,r,s,a){const o=[],c=r.keySet,l=r.catchall._zod,u=l.def.type,h=l.optin,f=l.optout;let d=0;for(const g in e){if(a&&n.issues.length!==d){if(di(n,d))break;d=n.issues.length}if(c.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const x=l.run({value:e[g],issues:[]},i);x instanceof Promise?t.push(x.then(p=>po(p,n,g,e,h,f))):po(x,n,g,e,h,f)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const bb=ae("$ZodObject",(t,e)=>{Nt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const l=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),l.raw=u,u};l.raw=i,Object.defineProperty(e,"shape",{get:l})}const r=Hl(()=>Jh(e));ft(t,"propValues",l=>{const u=l.def.shape,h={};for(const f in u){const d=u[f]._zod;if(d.values){Object.prototype.hasOwnProperty.call(h,f)||mr(h,f,new Set);for(const g of d.values)h[f].add(g);d.optin!==void 0&&h[f].add(void 0)}}return h});const s=uo,a=e.catchall;let o;const c=Yn.memoizer;c?.attach(t),t._zod.parse=(l,u)=>{o??(o=r.value);const h=l.value;if(!s(h))return l.issues.push({expected:"object",code:"invalid_type",input:h,inst:t}),l;l.value=c?c.alloc(t,l,{},u):{};const f=[],d=o.shape,g=u?.abortEarly;let x=l.issues.length;for(const p of o.allKeys){if(g&&l.issues.length!==x){if(di(l,x))break;x=l.issues.length}if(p==="__proto__")continue;const m=d[p],S=m._zod.optin,w=m._zod.optout,y=m._zod.run({value:h[p],issues:[]},u);y instanceof Promise?f.push(y.then(A=>po(A,l,p,h,S,w))):po(y,l,p,h,S,w)}return a?jh(f,h,l,u,r.value,t,g===!0):f.length?Promise.all(f).then(()=>l):l}}),Eb=ae("$ZodObjectJIT",(t,e)=>{bb.init(t,e);const n=t._zod.parse,i=Hl(()=>Jh(e)),r=Yn.memoizer,s=d=>{const g=i.value,x=g.symbolKeys,p=new UM(["payload","ctx"],{shape:d,inst:t,memo:r,syms:x}),m=A=>`shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`,S=(A,T)=>`
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
          }`;p.write("const input = payload.value;");const w=Object.create(null);let y=0;for(const A of g.allKeys)w[A]=`key_${y++}`;p.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const A of g.allKeys){if(A==="__proto__")continue;const T=w[A],_=typeof A=="symbol"?`syms[${x.indexOf(A)}]`:sy(A),M=`${_} in input`,z=d[A],N=z?._zod?.optin,F=N!==void 0,B=z?._zod?.optout==="optional";if(p.write(`const ${T} = ${m(_)};`),F&&B){const Y=N==="optional"?`${T}_present`:`${T}.value !== undefined || ${T}_present`;p.write(`
        const ${T}_present = ${M};
        if (!${T}.issues.length || ${T}_present) {
          if (${T}.issues.length) {${S(T,_)}
          }

          if (${Y}) {
            newResult[${_}] = ${T}.value;
          }
        }

      `)}else F?(p.write(`
        if (${T}.issues.length) {${S(T,_)}
        }
      `),N==="defaulted"?p.write(`newResult[${_}] = ${T}.value;`):p.write(`
        if (${T}.value !== undefined || ${M}) {
          newResult[${_}] = ${T}.value;
        }
      `)):p.write(`
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

      `)}return p.write("payload.value = newResult;"),p.write("return payload;"),p.compile()};let a;const o=uo,c=!Yn.jitless,u=c&&oy.value,h=e.catchall;let f;t._zod.parse=(d,g)=>{f??(f=i.value);const x=d.value;return o(x)?c&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),d=a(d,g),h?jh([],x,d,g,f,t,g?.abortEarly===!0):d):n(d,g):(d.issues.push({expected:"object",code:"invalid_type",input:x,inst:t}),d)}});function zd(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!di(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>rs(a,i,Bi())))}),e)}const wb=ae("$ZodUnion",(t,e)=>{Nt.init(t,e),ft(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),ft(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),ft(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),ft(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>Gl(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const c=o._zod.run({value:i.value,issues:[]},r);if(c instanceof Promise)a.push(c),s=!0;else{if(c.issues.length===0)return c;a.push(c)}}return s?Promise.all(a).then(o=>zd(o,i,t,r)):zd(a,i,t,r)}}),Tb=ae("$ZodIntersection",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([c,l])=>Bd(n,c,l)):Bd(n,s,a)}});function dl(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(qs(t)&&qs(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=dl(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=dl(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function Bd(t,e,n){const i=new Map;let r;const s=new Map,a=(l,u)=>{let h;if(l.code==="unrecognized_keys"&&!l.path?.length)r??(r=l),h=l.keys;else if(l.code==="invalid_key"&&l.origin==="record"&&l.path?.length===1){const f=String(l.path[0]);s.has(f)||s.set(f,l),h=[f]}else return!1;for(const f of h)i.has(f)||i.set(f,{}),i.get(f)[u]=!0;return!0};for(const l of e.issues)a(l,"l")||t.issues.push(l);for(const l of n.issues)a(l,"r")||t.issues.push(l);const o=[...i].filter(([,l])=>l.l&&l.r).map(([l])=>l);if(o.length){const l=r?o.filter(u=>r.keys.includes(u)):[];l.length&&t.issues.push({...r,keys:l});for(const u of o)!l.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const c=dl(e.value,n.value);if(!c.valid){if(di(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(c.mergeErrorPath)}`)}return t.value=c.data,t}const Ab=ae("$ZodEnum",(t,e)=>{Nt.init(t,e);const n=ol(e.entries),i=new Set(n);t._zod.values=i,ft(t,"pattern",r=>{const s=ol(r.def.entries).filter(a=>cy.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>wo(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),Rb=ae("$ZodTransform",(t,e)=>{Nt.init(t,e),t._zod.optin="optional",Yn.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new kh(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new rr;return n.value=r,n}});function $d(t,e){return t.value=e.issues.length?void 0:e.value,t}const Qh=ae("$ZodOptional",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${Gl(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>$d(n,s)):$d(n,r)}return e.innerType._zod.run(n,i)}}),Cb=ae("$ZodExactOptional",(t,e)=>{Qh.init(t,e),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),Pb=ae("$ZodNullable",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${Gl(i.source)}|null)$`):void 0}),ft(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),Ib=ae("$ZodDefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>Hd(s,e)):Hd(r,e)}});function Hd(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const Lb=ae("$ZodPrefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),Nb=ae("$ZodNonOptional",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>Gd(s,t)):Gd(r,t)}});function Gd(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function Vd(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>rs(r,i,Bi()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const Db=ae("$ZodCatch",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>Vd(n,s,e,i)):Vd(n,r,e,i)}}),Ub=ae("$ZodPipe",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>n.def.in._zod.values),ft(t,"optin",n=>n.def.in._zod.optin),ft(t,"optout",n=>n.def.out._zod.optout),ft(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>Na(a,e.in,i)):Na(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>Na(s,e.out,i)):Na(r,e.out,i)}});function Na(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const Ob=ae("$ZodReadonly",(t,e)=>{Nt.init(t,e),ft(t,"propValues",n=>n.def.innerType._zod.propValues),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"optin",n=>n.def.innerType?._zod?.optin),ft(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(Wd):Wd(r)}});function Wd(t){return t.memo||(t.value=Object.freeze(t.value)),t}const Fb=ae("$ZodCustom",(t,e)=>{gn.init(t,e),Nt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>Xd(s,n,i,t));Xd(r,n,i,t)}});function Xd(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Ys(r))}}class kb extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const fl="~memo",Zd=[];function ep(t){return t!==null&&typeof t=="object"}function uc(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const tp=new WeakMap,Rs=0,qa=1,Os=2;function Ya(t,e,n){const i=tp.get(t);if(i!==void 0)return i?Os:Rs;if(e.has(t))return Os;e.add(t);let r=Rs;const s=u=>{if(r!==Os&&u?._zod){const h=Ya(u,e);h>r&&(r=h)}},a=(u,h)=>{let f=Rs;for(const d of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,d);if(!g.enumerable)continue;const x=g.get?qa:g.value?._zod?Ya(g.value,e):Rs;x>f&&(f=x)}return f},o=u=>{u>r&&(r=u)},c=t._zod.def;switch(c.type){case"object":{const u=Ah(c);o(u?a(u):qa),s(c.catchall);break}case"array":s(c.element);break;case"tuple":for(const u of c.items)s(u);s(c.rest);break;case"record":case"map":s(c.keyType),s(c.valueType);break;case"set":s(c.valueType);break;case"union":for(const u of c.options)s(u);break;case"intersection":s(c.left),s(c.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(c.innerType);break;case"pipe":s(c.in),s(c.out);break;case"function":s(c.input),s(c.output);break;case"lazy":{const u=c._cachedInner??void 0;o(u?Ya(u,e):qa);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in c){const h=Object.getOwnPropertyDescriptor(c,u);if(!h||h.get)continue;const f=h.value;if(!(!f||typeof f!="object")){if(f._zod)s(f);else if(Array.isArray(f))for(const d of f)s(d)}}}return e.delete(t),zb(t,r)}function zb(t,e){return e!==qa&&tp.set(t,e===Os),e}function Bb(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let Da;const Ua=[],$b={alloc(t,e,n){const i=Da;if(!i)return n;Da=void 0;const r={value:n,issues:null};return i.set(e.value,r),Ua.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&Gb(s,r.value))throw new kb;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(c,l)=>{if(n===void 0){const m=Ya(t,new Set);if(m===Rs)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(c,l);m===Os||i?n=!0:i=!0}const u=c.value;if(!ep(u))return a(c,l);let h=l[fl];h||(h={buckets:new WeakMap,backEdges:void 0},l[fl]=h);let f;r===l?f=s:(f=Bb(h,t),r=l,s=f);const d=f.get(u);if(d)return c.value=d.value,d.issues?d.issues.length&&c.issues.push(...uc(d.issues)):(c.memo=!0,h.backEdges??(h.backEdges=new WeakSet),h.backEdges.add(d.value)),c;Da=f;const g=Ua.length,x=a(c,l);Da=void 0;const p=Ua.length>g?Ua.pop():void 0;return x instanceof Promise?x.then(m=>(p&&(p.issues=m.issues.length?uc(m.issues):Zd),m)):(p&&(p.issues=x.issues.length?uc(x.issues):Zd),x)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function Hb(){return $b}function Gb(t,e){const n=t[fl]?.backEdges;return n!==void 0&&ep(e)&&n.has(e)}const Vb=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=xy(s.input),c=r(o,s.input);return`Invalid input: expected ${a}, received ${c}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${Lh(s.values[0])}`:`Invalid option: expected one of ${Pd(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${Pd(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function Wb(){return{localeError:Vb()}}var qd;class Xb{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function Zb(){return new Xb}(qd=globalThis).__zod_globalRegistry??(qd.__zod_globalRegistry=Zb());const Cs=globalThis.__zod_globalRegistry;function np(t){return t.checks&&(t.checks=[...t.checks]),t}function qb(t,e){return new t(np({type:"string",...Fe(e)}))}function Yb(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function Kb(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function Jb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function jb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function Qb(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function eE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function tE(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function nE(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function iE(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function rE(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function sE(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function aE(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function oE(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function cE(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function lE(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function uE(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function dE(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function fE(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function hE(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function pE(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function mE(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function gE(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function _E(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function vE(t,e){return new t({type:"string",format:"date",check:"string_format",...Fe(e)})}function xE(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function SE(t,e){return new t({type:"string",format:"duration",check:"string_format",...Fe(e)})}function yE(t,e){return new t(np({type:"number",checks:[],...Fe(e)}))}function ME(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function bE(t){return new t({type:"unknown"})}function EE(t,e){return new t({type:"never",...Fe(e)})}function Yd(t,e){return new $h({check:"less_than",...Fe(e),value:t,inclusive:!1})}function dc(t,e){return new $h({check:"less_than",...Fe(e),value:t,inclusive:!0})}function Kd(t,e){return new Hh({check:"greater_than",...Fe(e),value:t,inclusive:!1})}function fc(t,e){return new Hh({check:"greater_than",...Fe(e),value:t,inclusive:!0})}function Jd(t,e){return new bM({check:"multiple_of",...Fe(e),value:t})}function ip(t,e){return new wM({check:"max_length",...Fe(e),maximum:t})}function mo(t,e){return new TM({check:"min_length",...Fe(e),minimum:t})}function rp(t,e){return new AM({check:"length_equals",...Fe(e),length:t})}function wE(t,e){return new RM({check:"string_format",format:"regex",...Fe(e),pattern:t})}function TE(t){return new CM({check:"string_format",format:"lowercase",...Fe(t)})}function AE(t){return new PM({check:"string_format",format:"uppercase",...Fe(t)})}function RE(t,e){return new IM({check:"string_format",format:"includes",...Fe(e),includes:t})}function CE(t,e){return new LM({check:"string_format",format:"starts_with",...Fe(e),prefix:t})}function PE(t,e){return new NM({check:"string_format",format:"ends_with",...Fe(e),suffix:t})}function ss(t){return new DM({check:"overwrite",tx:t})}function IE(t){return ss(e=>e.normalize(t))}function LE(){return ss(t=>t.trim())}function NE(){return ss(t=>t.toLowerCase())}function DE(){return ss(t=>t.toUpperCase())}function UE(){return ss(t=>ay(t))}function OE(t,e,n){return new t({type:"array",element:e,...Fe(n)})}function FE(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Fe(n)})}function kE(t,e){const n=zE(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(Ys(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(Ys(s))}},t(i.value,i)),e);return n}function zE(t,e){const n=new gn({check:"custom",...Fe(e)});return n._zod.check=t,n}function Fs(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&mr(t,i,n[i]);return t}function sp(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??Cs,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function as(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function Zt(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const f=a.schema,d=e.processors[r.type];if(!d)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);d(t,e,f,u)}const h=t._zod.parent;h&&(a.ref||(a.ref=h),Zt(h,e,u),e.seen.get(h).isParent=!0)}const c=e.metadataRegistry.get(t);return c&&Fs(a.schema,c),e.io==="input"&&rn(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function jd(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function ap(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const c=i.get(o);if(c&&c!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const h=t.external.registry.get(a[0])?.id,f=t.external.uri??(g=>g);if(h)return{ref:f(h)};const d=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=d,{defId:d,ref:`${f("__shared")}#/${o}/${jd(d)}`}}const c="#",l=`${c}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:c};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:l+jd(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:c,defId:l}=r(a);o.def={...o.schema},l&&(o.defId=l);const u=o.schema;for(const h in u)delete u[h];u.$ref=c};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const l=t.external.registry.get(a[0])?.id;if(e!==a[0]&&l){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function op(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;op(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const cp=new Set(["type","properties","required","additionalProperties"]),Qd=["oneOf","anyOf"];function ef(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function hl(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!cp.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const l of e){const u=l.properties?.[a]??ef(l);u!=null&&(o.some(h=>JSON.stringify(h)===JSON.stringify(u))||o.push(u))}const c=o.length===1?o[0]:hl(o)??{allOf:o};mr(n,a,c)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=ef(a);o&&!s.some(c=>JSON.stringify(c)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function BE(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of cp)if(r in t)return;const n=e.filter(r=>Qd.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=hl(e);else{const r=n[0],s=Qd.find(c=>Array.isArray(r[c]));if(Object.keys(r).length!==1)return;const a=e.filter(c=>c!==r),o=r[s].map(c=>hl([...a,c]));if(o.some(c=>!c))return;i={[s]:o}}i&&(delete t.allOf,Fs(t,i))}function lp(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const c=t.seen.get(o);if(c.ref===null)return;const l=c.def??c.schema,u={...l},h=c.ref;if(c.ref=null,h){i(h);const d=t.seen.get(h),g=d.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(l.allOf=l.allOf??[],l.allOf.push(g)):Fs(l,g),Fs(l,u),o._zod.parent===h)for(const p in l)p==="$ref"||p==="allOf"||p in u||delete l[p];if(g.$ref&&d.def)for(const p in l)p==="$ref"||p==="allOf"||p in d.def&&JSON.stringify(l[p])===JSON.stringify(d.def[p])&&delete l[p]}const f=o._zod.parent;if(f&&f!==h){i(f);const d=t.seen.get(f);if(d?.schema.$ref&&(l.$ref=d.schema.$ref,d.def))for(const g in l)g==="$ref"||g==="allOf"||g in d.def&&JSON.stringify(l[g])===JSON.stringify(d.def[g])&&delete l[g]}t.override({zodSchema:o,jsonSchema:l,path:c.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())op(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const c of t.seen.values())for(const l of[c.schema,c.def]){const u=l?.allOf;if(!Array.isArray(u))continue;const h=o.get(u);h?h.push(l):o.set(u,[l])}for(const c of t.intersections)for(const l of o.get(c)??[])BE(l)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}Fs(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const c=o[1];c.def&&c.defId&&(c.def.id===c.defId&&delete c.def.id,mr(a,c.defId,c.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:go(e,"input",t.processors),output:go(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function rn(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return rn(i.element,n);if(i.type==="set")return rn(i.valueType,n);if(i.type==="lazy")return rn(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return rn(i.innerType,n);if(i.type==="intersection")return rn(i.left,n)||rn(i.right,n);if(i.type==="record"||i.type==="map")return rn(i.keyType,n)||rn(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:rn(i.in,n)||rn(i.out,n);if(i.type==="object"){for(const r in i.shape)if(rn(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(rn(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(rn(r,n))return!0;return!!(i.rest&&rn(i.rest,n))}return!1}const $E=(t,e={})=>n=>{const i=sp({...n,processors:e});return Zt(t,i),ap(i,t),lp(i,t)},go=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=sp({...r??{},target:s,io:e,processors:n});return Zt(t,a),ap(a,t),lp(a,t)},Kr=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},Jr=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},tf=(t,e)=>{Kr(t,"minimum",e),Jr(t,"maximum",e)},up=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},dp=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},fp=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},hp=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},nf=(t,e)=>Kr(t,"minimum",e.minimum),rf=(t,e)=>Jr(t,"maximum",e.maximum),sf=t=>(e,n)=>{hp(e,n.format);const[i,r]=t[n.format];Kr(e,"minimum",i),Jr(e,"maximum",r)},HE={greater_than:(t,e)=>Kr(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>Jr(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>up(t,e.value),number_format:sf(Nh),bigint_format:sf(uy),min_length:nf,max_length:rf,length_equals:(t,e)=>tf(t,e.length),min_size:nf,max_size:rf,size_equals:(t,e)=>tf(t,e.size),string_format:(t,e)=>{hp(t,e.format),e.pattern&&dp(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>fp(t,e.mime)};function Wn(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)HE[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&Kr(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&Kr(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&Jr(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&Jr(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&up(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&fp(e,r.mime);for(const s of r.patterns??[])dp(e,s);return e}const GE={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},VE=new Map([[Yh,dM],[jl,fM]]),WE=t=>VE.get(t)??t,XE=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:c,contentEncoding:l,laxFormat:u}=Wn(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=GE[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),l&&(r.contentEncoding=l),c&&c.size>0){const h=[...c].map(WE);h.length===1?r.pattern=h[0].source:h.length>1&&(r.allOf=[...h.map(f=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:f.source}))])}},ZE=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:c,exclusiveMinimum:l,isInt:u}=Wn(t);r.type=u?"integer":"number";const h=typeof l=="number"&&l>=(s??Number.NEGATIVE_INFINITY),f=typeof c=="number"&&c<=(a??Number.POSITIVE_INFINITY),d=e.target==="draft-04"||e.target==="openapi-3.0";if(h?d?(r.minimum=l,r.exclusiveMinimum=!0):r.exclusiveMinimum=l:typeof s=="number"&&(r.minimum=s),f?d?(r.maximum=c,r.exclusiveMaximum=!0):r.exclusiveMaximum=c:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const m of o)Number.isFinite(m)&&m!==0?g.add(Math.abs(m)):as(t,e,r,i,`A multipleOf divisor of ${m} cannot be represented in JSON Schema`);const[x,...p]=g;x!==void 0&&(r.multipleOf=x),p.length&&(r.allOf=[...r.allOf??[],...p.map(m=>({multipleOf:m}))])}},qE=(t,e,n,i)=>{n.not={}},YE=(t,e,n,i)=>{},KE=(t,e,n,i)=>{const r=t._zod.def,s=ol(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},JE=(t,e,n,i)=>{as(t,e,n,i,"Custom types cannot be represented in JSON Schema")},jE=(t,e,n,i)=>{as(t,e,n,i,"Transforms cannot be represented in JSON Schema")},QE=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=Wn(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=Zt(s.element,e,{...i,path:[...i.path,"items"]})};function pl(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?pl(e.out):e.type==="catch"?pl(e.innerType):t._zod.optin}const ew=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&as(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const l in a)mr(r.properties,l,Zt(a[l],e,{...i,path:[...i.path,"properties",l]}));const c=[];for(const l of Object.keys(a)){const u=s.shape[l];(e.io==="input"?pl(u)===void 0:u._zod.optout===void 0)&&c.push(l)}c.length>0&&(r.required=c),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=Zt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},tw=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,c)=>Zt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",c]}));s?n.oneOf=a:n.anyOf=a},nw=(t,e,n,i)=>{const r=t._zod.def,s=Zt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=Zt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=l=>"allOf"in l&&Object.keys(l).length===1,c=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=c,e.intersections.push(c)},iw=(t,e,n,i)=>{const r=t._zod.def,s=Zt(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},rw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Ql=Symbol();function pp(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,c)=>typeof c!="bigint"?c:(s=!0,null));return s?(as(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),Ql):JSON.parse(a)}const sw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=pp(r.defaultValue,t,e,n,i);a!==Ql&&(n.default=a)},aw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=pp(r.defaultValue,t,e,n,i);a!==Ql&&(n._prefault=a)},ow=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{as(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},cw=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;Zt(a,e,i);const o=e.seen.get(t);o.ref=a},lw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},mp=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},af=new WeakSet([Object.prototype,Error.prototype]);function Oa(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const uw=(t,e)=>{Ly.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);af.has(n)||(af.add(n),Oa(n,"format",i=>r=>Uy(i,r)),Oa(n,"flatten",i=>r=>Dy(i,r)),Oa(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,cl,2)}),Oa(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,cl,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Rn=ae("ZodError",uw,void 0,{Parent:Error}),dw=Xl(Rn),fw=Zl(Rn),hw=ql(Rn),pw=Yl(Rn),mw=$y(Rn),gw=Hy(Rn),_w=Gy(Rn),vw=Vy(Rn),xw=Wy(Rn),Sw=Xy(Rn),yw=Zy(Rn),Mw=qy(Rn);function bw(){Yn.localeError||Bi(Wb())}function eu(){Yn.memoizer||Bi({memoizer:Hb()})}const Dt=ae("ZodType",(t,e)=>(bw(),Nt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(yn(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return zi(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(vT(t,e))},superRefine(t,e){return this.check(xT(t,e))},overwrite(t){return this.check(ss(t))},optional(){return lf(this)},exactOptional(){return sT(this)},nullable(){return uf(this)},nullish(){return lf(uf(this))},nonoptional(t){return dT(this,t)},array(){return Or(this)},or(t){return eT([this,t])},and(t){return nT(this,t)},transform(t){return df(this,rT(t))},default(t){return cT(this,t)},prefault(t){return uT(this,t)},catch(t){return hT(this,t)},pipe(t){return df(this,t)},readonly(){return gT(this)},describe(t){const e=this.clone();return Cs.add(e,{description:t}),e},meta(...t){if(t.length===0)return Cs.get(this);const e=this.clone();return Cs.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return Oh(this,"~standard",{...Vh(this),jsonSchema:{input:go(this,"input"),output:go(this,"output")}})},set"~standard"(t){Oi(this,"~standard",t)},parse:function t(e,n){return dw(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await fw(this,e,n,{callee:t})},safeParse(t,e){return hw(this,t,e)},async safeParseAsync(t,e){return pw(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){Oi(this,"spa",t)},validate(t,e){return ky(this,t,e)},validateAsync(t,e){return By(this,t,e)},encode:function t(e,n){return mw(this,e,n,{callee:t})},decode:function t(e,n){return gw(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await _w(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await vw(this,e,n,{callee:t})},safeEncode(t,e){return xw(this,t,e)},safeDecode(t,e){return Sw(this,t,e)},async safeEncodeAsync(t,e){return yw(this,t,e)},async safeDecodeAsync(t,e){return Mw(this,t,e)},toJSONSchema(t){return $E(this,{})(t)},get description(){return Cs.get(this)?.description},get _def(){return this._zod.def}}),gp=ae("_ZodString",(t,e)=>{Jl.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>XE(t,n,i)},Fh({format:t=>Wn(t).format??null,minLength:t=>Wn(t).minimum??null,maxLength:t=>Wn(t).maximum??null},{regex(...t){return this.check(wE(...t))},includes(...t){return this.check(RE(...t))},startsWith(...t){return this.check(CE(...t))},endsWith(...t){return this.check(PE(...t))},min(...t){return this.check(mo(...t))},max(...t){return this.check(ip(...t))},length(...t){return this.check(rp(...t))},nonempty(...t){return this.check(mo(1,...t))},lowercase(t){return this.check(TE(t))},uppercase(t){return this.check(AE(t))},trim(){return this.check(LE())},normalize(...t){return this.check(IE(...t))},toLowerCase(){return this.check(NE())},toUpperCase(){return this.check(DE())},slugify(){return this.check(UE())}})),Ew=ae("ZodString",(t,e)=>{Jl.init(t,e),gp.init(t,e)},{email(t){return this.check(Yb(Cw,t))},url(t){return this.check(tE(Iw,t))},jwt(t){return this.check(gE(Xw,t))},emoji(t){return this.check(nE(Lw,t))},guid(t){return this.check(Kb(Pw,t))},uuid(t){return this.check(Jb(Fa,t))},uuidv4(t){return this.check(jb(Fa,t))},uuidv6(t){return this.check(Qb(Fa,t))},uuidv7(t){return this.check(eE(Fa,t))},nanoid(t){return this.check(iE(Nw,t))},cuid(t){return this.check(rE(Dw,t))},cuid2(t){return this.check(sE(Uw,t))},ulid(t){return this.check(aE(Ow,t))},base64(t){return this.check(hE(Gw,t))},base64url(t){return this.check(pE(Vw,t))},xid(t){return this.check(oE(Fw,t))},ksuid(t){return this.check(cE(kw,t))},ipv4(t){return this.check(lE(zw,t))},ipv6(t){return this.check(uE(Bw,t))},cidrv4(t){return this.check(dE($w,t))},cidrv6(t){return this.check(fE(Hw,t))},e164(t){return this.check(mE(Ww,t))},datetime(t){return this.check(_E(ww,t))},date(t){return this.check(vE(Tw,t))},time(t){return this.check(xE(Aw,t))},duration(t){return this.check(SE(Rw,t))}});function rt(t){return qb(Ew,t)}const wt=ae("ZodStringFormat",(t,e)=>{yt.init(t,e),gp.init(t,e)}),ww=ae("ZodISODateTime",(t,e)=>{eb.init(t,e),wt.init(t,e)}),Tw=ae("ZodISODate",(t,e)=>{tb.init(t,e),wt.init(t,e)}),Aw=ae("ZodISOTime",(t,e)=>{nb.init(t,e),wt.init(t,e)}),Rw=ae("ZodISODuration",(t,e)=>{ib.init(t,e),wt.init(t,e)}),Cw=ae("ZodEmail",(t,e)=>{BM.init(t,e),wt.init(t,e)}),Pw=ae("ZodGUID",(t,e)=>{kM.init(t,e),wt.init(t,e)}),Fa=ae("ZodUUID",(t,e)=>{zM.init(t,e),wt.init(t,e)}),Iw=ae("ZodURL",(t,e)=>{XM.init(t,e),wt.init(t,e)}),Lw=ae("ZodEmoji",(t,e)=>{ZM.init(t,e),wt.init(t,e)}),Nw=ae("ZodNanoID",(t,e)=>{qM.init(t,e),wt.init(t,e)}),Dw=ae("ZodCUID",(t,e)=>{YM.init(t,e),wt.init(t,e)}),Uw=ae("ZodCUID2",(t,e)=>{KM.init(t,e),wt.init(t,e)}),Ow=ae("ZodULID",(t,e)=>{JM.init(t,e),wt.init(t,e)}),Fw=ae("ZodXID",(t,e)=>{jM.init(t,e),wt.init(t,e)}),kw=ae("ZodKSUID",(t,e)=>{QM.init(t,e),wt.init(t,e)}),zw=ae("ZodIPv4",(t,e)=>{rb.init(t,e),wt.init(t,e)}),Bw=ae("ZodIPv6",(t,e)=>{ab.init(t,e),wt.init(t,e)}),$w=ae("ZodCIDRv4",(t,e)=>{ob.init(t,e),wt.init(t,e)}),Hw=ae("ZodCIDRv6",(t,e)=>{lb.init(t,e),wt.init(t,e)}),Gw=ae("ZodBase64",(t,e)=>{ub.init(t,e),wt.init(t,e)}),Vw=ae("ZodBase64URL",(t,e)=>{fb.init(t,e),wt.init(t,e)}),Ww=ae("ZodE164",(t,e)=>{hb.init(t,e),wt.init(t,e)}),Xw=ae("ZodJWT",(t,e)=>{mb.init(t,e),wt.init(t,e)}),_p=ae("ZodNumber",(t,e)=>{Kh.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ZE(t,n,i,r),t.isFinite=!0},Fh({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=Wn(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=Wn(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=Wn(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>Wn(t).format??null},{gt(t,e){return this.check(Kd(t,e))},gte(t,e){return this.check(fc(t,e))},min(t,e){return this.check(fc(t,e))},lt(t,e){return this.check(Yd(t,e))},lte(t,e){return this.check(dc(t,e))},max(t,e){return this.check(dc(t,e))},int(t){return this.check(of(t))},safe(t){return this.check(of(t))},positive(t){return this.check(Kd(0,t))},nonnegative(t){return this.check(fc(0,t))},negative(t){return this.check(Yd(0,t))},nonpositive(t){return this.check(dc(0,t))},multipleOf(t,e){return this.check(Jd(t,e))},step(t,e){return this.check(Jd(t,e))},finite(){return this}}));function hn(t){return yE(_p,t)}const Zw=ae("ZodNumberFormat",(t,e)=>{gb.init(t,e),_p.init(t,e)});function of(t){return ME(Zw,t)}const qw=ae("ZodUnknown",(t,e)=>{_b.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>YE()});function cf(){return bE(qw)}const Yw=ae("ZodNever",(t,e)=>{vb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>qE(t,n,i)});function Kw(t){return EE(Yw,t)}const Jw=ae("ZodArray",(t,e)=>{eu(),yb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>QE(t,n,i,r),t.element=e.element},{min(t,e){return this.check(mo(t,e))},nonempty(t){return this.check(mo(1,t))},max(t,e){return this.check(ip(t,e))},length(t,e){return this.check(rp(t,e))},unwrap(){return this.element}});function Or(t,e){return OE(Jw,t,e)}const jw=ae("ZodObject",(t,e)=>{eu(),Eb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ew(t,n,i,r),Ey(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return nr(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(yn(this._zod.def,{catchall:t}))},passthrough(){return this.clone(yn(this._zod.def,{catchall:cf()}))},loose(){return this.clone(yn(this._zod.def,{catchall:cf()}))},strict(){return this.clone(yn(this._zod.def,{catchall:Kw()}))},strip(){return this.clone(yn(this._zod.def,{catchall:void 0}))},extend(t){return hy(this,t)},safeExtend(t){return py(this,t)},merge(t){return my(this,t)},pick(t){return dy(this,t)},omit(t){return fy(this,t)},partial(...t){return Id(vp,this,t[0])},exactPartial(...t){return Id(xp,this,t[0],"exactPartial")},required(...t){return gy(Sp,this,t[0])}});function ci(t,e){const n={type:"object",shape:t??{},...Fe(e)};return new jw(n)}const Qw=ae("ZodUnion",(t,e)=>{wb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>tw(t,n,i,r),t.options=e.options});function eT(t,e){return new Qw({type:"union",options:t,...Fe(e)})}const tT=ae("ZodIntersection",(t,e)=>{Tb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>nw(t,n,i,r)});function nT(t,e){return new tT({type:"intersection",left:t,right:e})}const ml=ae("ZodEnum",(t,e)=>{Ab.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(i,r,s)=>KE(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new ml({...e,checks:[],...Fe(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new ml({...e,checks:[],...Fe(r),entries:s})}});function nr(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new ml({type:"enum",entries:n,...Fe(e)})}const iT=ae("ZodTransform",(t,e)=>{eu(),Rb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>jE(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new kh(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(Ys(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(Ys(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function rT(t){return new iT({type:"transform",transform:t})}const vp=ae("ZodOptional",(t,e)=>{Qh.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>mp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function lf(t){return new vp({type:"optional",innerType:t})}const xp=ae("ZodExactOptional",(t,e)=>{Cb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>mp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function sT(t){return new xp({type:"optional",innerType:t})}const aT=ae("ZodNullable",(t,e)=>{Pb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>iw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function uf(t){return new aT({type:"nullable",innerType:t})}const oT=ae("ZodDefault",(t,e)=>{Ib.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>sw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function cT(t,e){return new oT({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():Ih(e)}})}const lT=ae("ZodPrefault",(t,e)=>{Lb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>aw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function uT(t,e){return new lT({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():Ih(e)}})}const Sp=ae("ZodNonOptional",(t,e)=>{Nb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>rw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function dT(t,e){return new Sp({type:"nonoptional",innerType:t,...Fe(e)})}const fT=ae("ZodCatch",(t,e)=>{Db.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>ow(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function hT(t,e){return new fT({type:"catch",innerType:t,catchValue:typeof e=="function"?e:Ty(e)})}const pT=ae("ZodPipe",(t,e)=>{Ub.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>cw(t,n,i,r),t.in=e.in,t.out=e.out});function df(t,e){return new pT({type:"pipe",in:t,out:e})}const mT=ae("ZodReadonly",(t,e)=>{Ob.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>lw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function gT(t){return new mT({type:"readonly",innerType:t})}const _T=ae("ZodCustom",(t,e)=>{Fb.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>JE(t,n,i,r)});function vT(t,e={}){return FE(_T,t,e)}function xT(t,e){return kE(t,e)}const ST=ci({id:rt(),name:rt(),role:rt(),state:nr(["idle","thinking","working","reviewing"]),stationId:nr(["culture","analyzer","explorer","notebook"]),boredom:hn().min(0).max(100).nullable(),boredomSpectrum:ci({position:hn().min(0).max(1),color:rt(),regime:rt()}).optional()});ci({runId:rt(),lastSequence:hn().int().nonnegative(),status:nr(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:hn(),title:rt().optional(),config:ci({mode:nr(["tinker_modal","recorded"]),arm:nr(["A","B","C","D","full"]),rounds:hn(),task:rt().optional(),seed:hn().nullable(),model:rt().nullable()}),sourceCommit:rt(),progress:hn().min(0).max(1),round:hn(),boredom:hn(),regime:rt(),value:hn().nullable(),reference:hn().nullable(),agents:Or(ST),findings:Or(ci({agent:rt().optional(),role:rt(),message:rt(),round:hn().optional(),memoryId:rt().optional()})),results:Or(ci({agent:rt(),round:hn(),kind:rt(),status:rt(),value:hn().nullable(),commit:rt().nullable().optional(),description:rt(),sources:Or(rt()).optional()})),sources:Or(ci({id:rt().nullable(),title:rt().nullable(),url:rt().nullable(),query_id:rt().nullable()})),error:rt().nullable(),metric:ci({name:rt(),unit:rt(),direction:nr(["minimize","maximize"])}),provenance:ci({llm:rt(),gpu:rt(),exa:rt(),memory:rt(),execution:rt().optional()})});async function yp(t,e){{const n=Th(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const hc=(t,e)=>t.filter(e).at(-1),jr=(t,e)=>t.filter(n=>n.tick<=e),_e=t=>typeof t=="string"&&t.trim()?t.trim():null,St=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Ni=t=>typeof t=="boolean"?t:null;function Ks(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const gl=t=>new Map(t.map(e=>[String(e.id),e]));function ff(t){const e=_e(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:_e(n.idea)||_e(n.text)||e}:{text:e}}catch{return{text:e}}}function Js(t,e,n){if(!t)return null;const i=jr(t.events,n).filter(y=>y.refs?.experiment_id===e);if(!i.length)return null;const r=gl(Ks(t,"experiments")).get(e)||{},s=i.find(y=>y.type==="experiment.started"),a=hc(i,y=>y.type==="experiment.finished"),o=hc(i,y=>y.type==="gate.checked"),c=hc(i,y=>y.type==="verdict.issued"),l=i.find(y=>y.refs?.study_id),u=_e(r.hypothesis_id)||_e(s?.refs?.hypothesis_id),h=u?jr(t.events,n).find(y=>y.type==="hypothesis.proposed"&&y.refs?.hypothesis_id===u):void 0,f=h?gl(Ks(t,"hypotheses")).get(u)||{}:null,d=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(d.reasons)&&d.reasons.length>0||typeof d.pass=="boolean"||St(d.attempts)>0,x=o?.payload||{},p=[...Array.isArray(x.reasons)?x.reasons:[],...a&&Array.isArray(d.reasons)?d.reasons:[]].map(String),m=t.events.some(y=>y.type==="verdict.issued"&&y.refs?.experiment_id===e),S=c||a&&!m?r.verdict:null,w=c?.payload||{};return{id:e,agentId:_e(r.agent_id)||s?.agentId||i[0].agentId||null,round:St(r.round)??St(i[0].round),kind:_e(r.kind),commit:_e(r.commit)||_e(x.candidate_commit),role:_e(r.role)||_e(s?.payload?.role),description:_e(r.description)||_e(s?.payload?.description)||_e(s?.message),idea:f?{text:ff(f.text||h?.payload?.text).text,rationale:_e(f.rationale)||_e(h?.payload?.rationale)||_e(ff(f.text||h?.payload?.text).rationale),predictedDelta:St(f.predicted_delta)??St(r.predicted_delta),sources:(Array.isArray(f.source_ids)?f.source_ids:[]).map(String)}:null,descriptor:r.descriptor||x.descriptor||null,gate:o||a&&g?{pass:Ni(x.pass)??Ni(d.pass),reasons:[...new Set(p)],attempts:St(d.attempts),text:_e(x.text)||_e(o?.message),priorArt:(Array.isArray(x.prior_art)?x.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:_e(a.payload?.status)||_e(r.status),metric:St(a.payload?.metric_value)??St(r.metric_value),reward:St(a.payload?.reward),text:_e(a.payload?.text)||_e(a.message),tick:a.tick}:null,verdict:c||S?{by:_e(S?.by_agent_id)||c?.agentId||null,verdict:_e(w.verdict)||_e(S?.verdict),why:_e(w.why)||_e(S?.why),tick:c?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([y,A])=>typeof A=="string"&&(a||y==="diff"))),logTail:a?_e(r.log_tail):null,studyId:_e(r.study_id)||_e(l?.refs?.study_id),timeline:i.map(y=>({tick:y.tick,type:y.type,text:_e(y.payload?.text)||_e(y.message)||y.type}))}}function yT(t,e){return[...new Set(jr(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function tu(t,e){if(!t)return[];const n=jr(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(yT(t,e)),s=Ks(t,"experiments").filter(a=>r.has(String(a.id)));return Ks(t,"sources").flatMap(a=>{const o=String(a.id),c=i.get(o),l=St(a.tick);if(!c&&(l==null||l>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(_e).filter(Boolean):[],h=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(f=>r.has(f)),...s.filter(f=>Array.isArray(f.source_ids)&&f.source_ids.includes(o)).map(f=>String(f.id))])];return[{id:o,title:_e(a.title)||_e(c?.payload?.summary)||_e(a.url)||o,url:_e(a.url)||_e(c?.payload?.url),highlight:u[0]||_e(a.highlight)||_e(a.extract)||_e(c?.payload?.text),agentId:_e(a.agent_id)||c?.agentId||null,tick:c?.tick??l,citedBy:h}]})}const MT=t=>Array.isArray(t)?t.map(e=>({rho:St(e?.rho),p:St(e?.p),n:St(e?.n)})):[],hf=t=>({rho:St(t.rho),p:St(t.p),n:St(t.n),halves:MT(t.halves),significant:Ni(t.significant),replicated:Ni(t.replicated),confirmed:Ni(t.confirmed)});function _l(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(_l);if(typeof t=="object"){const e=t,n=_e(e.text)||_e(e.why)||_e(e.reason)||_e(e.verdict);return n?[[_e(e.by)||_e(e.judge)||_e(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>_l(r).map(s=>`${i}: ${s}`))}return[String(t)]}function pf(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Ni(e.available)??!0,score:St(e.score),rejected:Ni(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const c=o&&typeof o=="object"?o:{};return[a,{laugh:St(c.laugh),think:St(c.think),reason:_e(c.reason),model:_e(c.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:_e(a.title)||"",url:_e(a.url)||"",snippet:_e(a.snippet)||""})),priorWorkAvailable:Ni(e.prior_work_available)??!1}}function nu(t,e){if(!t)return[];const n=jr(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=gl(Ks(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),c=i.get(o)||{},l=s.payload||{};if(s.type==="study.registered"){const h=c.dataset&&typeof c.dataset=="object"?c.dataset:{};r.set(o,{id:o,agentId:_e(c.agent_id)||s.agentId||null,experimentId:_e(c.experiment_id)||_e(s.refs?.experiment_id),round:St(c.round)??St(s.round),field:_e(l.field)||_e(c.field),question:_e(l.question)||_e(c.question),hypothesis:_e(c.hypothesis),mechanism:_e(c.mechanism),dataset:{url:_e(h.url),x:_e(l.x)||_e(h.x),y:_e(l.y)||_e(h.y),xLevel:_e(h.x_level),yLevel:_e(h.y_level),id:_e(c.dataset_id)},predictedRho:St(l.predicted_rho)??St(c.predicted_rho),citations:(Array.isArray(c.citations)?c.citations:[]).map(String),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...hf({...c,...l,halves:l.halves??c.halves,significant:l.significant??c.significant}),headline:_e(l.headline)||_e(c.headline),rejected:_e(l.rejected),text:_e(l.text)||_e(s.message)},u.committee=pf(l.committee??c.committee)):s.type==="study.replicated"?u.replications.push(hf(l)):s.type==="award.issued"&&(u.award={award:_e(l.award),score:St(l.score),rejected:_e(l.rejected),headline:_e(l.headline),verdicts:_l(l.verdicts??c.committee?.verdicts),text:_e(l.text)||_e(s.message)},u.committee=pf(l)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function Mp(t,e,n,i=40){return jr(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:_e(s.kind),text:_e(s.text)||_e(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const bT=(t,e=3)=>t==null?"—":(t>0?"+":"")+t.toFixed(e),vl=t=>t==null?"—":t<.001?"<0.001":t.toFixed(3),mf={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},pc=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function ks(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const Ti=t=>typeof t=="string"?t.trim():"";function bp(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},c=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const l=Ti(o.regime);if(!l)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",h=s.get(u);s.set(u,l),c&&h!==l&&mf[l]&&r.push({tick:a.tick,kind:"regime",title:mf[l],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(c)if(a.type==="discovery.made"){const l=pc(o.metric_value),u=pc(o.previous_best),h=Ti(o.title),f=l==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${ks(l)}${u==null?"":` (was ${ks(u)})`}`,d=pc(o.reward);r.push({tick:a.tick,kind:"best",title:l==null?"New discovery!":"New best!",detail:[f||(d==null?"":`reward ${ks(d)}`),h].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:Ti(o.award)||Ti(o.prize)||"Award issued",detail:[Ti(o.title)||Ti(o.headline),Ti(o.citation)||Ti(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function ET(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}function Ep(t){const e=t?.provenance,n=[];if(e?.exa==="off"?n.push("Exa off"):(e?.exa==="live"||e?.exa==="on")&&n.push("Exa on"),e?.memory_backend==="pastdev"?n.push("past.dev memory"):e?.memory_backend==="local"&&n.push("local memory"),e?.llm==="fake"||e?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:n};const i=typeof e?.llm=="string"&&e.llm!=="fake"?ET(e.llm):"";return i?t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:n}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="stopped"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${i} run`,tone:"live",chips:n}:{label:"Finished real run",tone:"finished",chips:n}:{label:"Unverified recording",tone:"unknown",chips:n}}const gf=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],ai=t=>typeof t=="string"?t:"";function wT(t){const e=gf(t?.entities?.sources),n=new Map(e.map(o=>[ai(o.url),o]).filter(([o])=>o)),i=gf(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(c=>{const l=ai(c),u=n.get(l);return{study:ai(o.question)||ai(o.headline)||ai(o.id),url:l,sourceId:u?String(u.id??u.source_id??""):"",title:u?ai(u.title):""}})),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(ai(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&/search|exa/.test(ai(o.payload?.kind))).length,memoryRecalls:s,pastdev:a}}function wp(t){const e=nu(t,Number.MAX_SAFE_INTEGER),n=bp(t?.events||[],-1,Number.MAX_SAFE_INTEGER).filter(s=>s.kind==="award"),i=e.filter(s=>s.result?.confirmed===!0||s.result?.replicated===!0||s.replications.some(a=>a.confirmed===!0||a.replicated===!0)).length,r=ai(t?.manifest?.proxy_note);return{studies:e.length,passed:i,awards:n.map(s=>[s.title,s.detail].filter(Boolean).join(" · ")),proxyNote:r}}function TT(t,e,n,i=wp(null),r=null){const s=r?.provenance,a=Ep(r),o=t.tools.map(g=>{let x=g.name,p=g.detail,m="";if(g.kind==="llm"){const S=s?.llm==="fake"||s?.llm_mode==="fake",w=typeof s?.llm=="string"?s.llm:"",y=w&&w!=="fake"&&w.split("/").filter(Boolean).at(-1)||"";S?(x=g.fakeName||g.name,p=g.fakeDetail||g.detail,m=g.fakeSuffix||""):y?(x=s?.llm_mode==="tinker"&&g.tinkerName||g.name,p=(s?.llm_mode==="tinker"&&g.tinkerDetail||g.detail).replace(/\{model\}/g,/kimi/i.test(w)?"Kimi":y)):(p=g.unverifiedDetail||g.detail,m=g.unknownSuffix||"")}else if(g.kind==="exa"){const S=s?.exa;m=S==="off"?g.offSuffix||"":S==="live"||S==="on"?"":g.unknownSuffix||""}else g.kind==="memory"&&(m=s?.memory_backend==="pastdev"?"":s?.memory_backend==="local"?g.localSuffix||"":s?.memory_backend==="off"?g.offSuffix||"":g.unknownSuffix||"");return`<li><b>${n(x)}</b> ${n(p)}${m?` <span class="intro-provenance-note">${n(m)}</span>`:""}</li>`}).join(""),c=`<div class="provenance-badge intro-provenance" data-tone="${a.tone}" role="status" aria-label="${n(a.label)}"><span class="provenance-badge-label">${n(a.label)}</span></div>`,l=e.citations.slice(0,12).map(g=>`<li><span>${n(g.study)}</span> ${g.sourceId?`<button class="chip" data-source="${n(g.sourceId)}">${n(t.labels.source)} ${n(g.title||g.url)}</button>`:`${/^https?:\/\//i.test(g.url)?`<a href="${n(g.url)}" target="_blank" rel="noopener noreferrer">${n(g.url)}</a>`:`<code>${n(g.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join(""),u=`<strong>${i.passed}</strong> ${n(t.results.passedCount)}`,f=`<p>${`<strong>${i.studies}</strong> ${n(t.results.studyCount)}`} · ${u}</p>${i.studies?"":`<p>${n(t.results.noStudies)}</p>`}`,d=i.awards.length?`<ul>${i.awards.map(g=>`<li>${n(g==="Award issued"?t.results.awardFallback:g)}</li>`).join("")}</ul>`:`<p>${n(t.results.noAwards)}</p>`;return`<div class="intro-card">${c}<h1>${n(t.replay.title)}</h1><p class="intro-subline">${n(t.replay.subline)}</p><button id="intro-start" class="intro-start">${n(t.replay.button)}</button><a id="intro-results-link" class="intro-qualifier" href="#intro-real-results">${n(t.replay.qualifier)}</a>
<details class="intro-about"><summary>${n(t.sections.about)}</summary><div class="intro-sections"><details class="intro-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.title)} · ${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details>
<details class="intro-section"><summary>${n(t.sections.tools)}</summary><ul class="intro-tools">${o}</ul></details>
<details class="intro-section"><summary>${n(t.sections.authors)}</summary><p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details>
<details class="intro-section"><summary>${n(t.sections.boredom)}</summary><h2>${n(t.boredom.title)}</h2>${t.boredom.paragraphs.map(g=>`<p>${n(g)}</p>`).join("")}<p class="muted">${n(t.boredom.source)}</p></details>
<details class="intro-section intro-trail"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${l?`<ul class="intro-cites">${l}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details></div></details>
<details id="intro-real-results" class="intro-real-results" hidden><summary>${n(t.sections.results)}</summary>${f}<p><strong>${i.awards.length}</strong> ${n(t.results.awardCount)}</p>${d}${i.proxyNote?`<p><b>${n(t.results.proxyNote)}:</b> ${n(i.proxyNote)}</p>`:`<p class="muted">${n(t.results.noProxy)}</p>`}</details></div>`}const AT={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Built in one weekend at the SF AI Research Hack (Nov 14–15, hosted by Iterate): an artificial scientist swarm that notices when it is bored and changes approach."},RT=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; every citation links to its Exa result.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],CT={placeholder:!0,names:["[AUTHORS — names to come]"]},PT={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},IT={title:"This year the Ig Nobel research prize was discovered early by a phenomenal breakthrough in artificial scientist swarms.",subline:"The secret: making AI less boring.",button:"Watch the swarm",qualifier:"tongue-in-cheek headline · see the real results"},LT={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa",results:"The real results"},NT={source:"Exa result:",missingExa:"no Exa result in this recording",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},DT={studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"award.issued entries",awardFallback:"Award issued",proxyNote:"Proxy note",noStudies:"No Ig Nobel study registrations appear in this recording.",noAwards:"No award.issued entries appear in this recording.",noProxy:"No proxy note is present in this recording."},UT={event:AT,tools:RT,authors:CT,boredom:PT,replay:IT,sections:LT,labels:NT,results:DT};function OT(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function FT(t){return t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${Tp(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function kT(t,e){return!!t.live||e<t.totalTicks}function Co(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function zT(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function BT(t,e){return t.filter(n=>n.tick<=e)}function $T(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const Tp=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function HT(t){const e=t.publish_errors;return Array.isArray(e)?e.filter(n=>n.kind!=="recovered").length:typeof e=="number"?e:0}function GT(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}function VT(t){const e=t.stale?`LIVE RUN STALLED${t.lastUpdateTs?" · NO UPDATES SINCE "+Tp(t.lastUpdateTs):""}`:t.live?"FOLLOWING LIVE SWARM":"SWARM RUN · FINISHED",n=HT(t);return n?`${e} · ${n} PUBLISH ERROR${n===1?"":"S"}`:e}const _f=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function WT(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const c=[...n[a]||[]],l=new Map(c.map((u,h)=>[_f(u),h]));for(const u of o){const h=l.get(_f(u));h===void 0?c.push(u):c[h]=u}n[a]=c}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function XT(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return WT(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const vf={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function ZT(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function xf(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Sf={B:"BIO",C:"CHEM",P:"PHYSICS"};function qT(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=ZT(t.name);if(vf[n])return{initial:r,familyKey:"S",familyLabel:vf[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:xf(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const l=xf(a);return{initial:r,familyKey:l,familyLabel:Sf[l]||a.toUpperCase(),staff:!1,color:i}}const c=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:c,familyLabel:Sf[c]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const YT={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function iu(t){return t?YT[t]||t.replaceAll("_"," ").toLowerCase():""}function Ap(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const KT={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function Rp(t){return KT[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function JT(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function Cp(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!JT(e)}function jT(t,e,n=110){const i=[Rp(t.type),e].filter(Boolean).join(" · ");if(!Cp(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i} — ${r.length>n?r.slice(0,n-1)+"…":r}`}function QT(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const bs=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function Pp(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=bs(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=bs(a.mechanism)||i.mechanism,i.method=bs(a.method)||i.method),i.role=bs(s.role)||i.role}else r.type==="study.registered"&&(i.field=bs(s.field)||i.field)}return i}function Ip(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const yf={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function eA(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:yf[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:yf[i]?.[1]||"",names:r}))}function tA(t,e){return e-t<=1}function nA(t){return t.live?t.totalTicks:0}function iA(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function Lp(t,e,n){return!!t?.live&&n&&tA(e,t.totalTicks)}function Np(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function rA(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(Lp(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=Np(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function $r(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function sA(t,e,n,i=!0){const r=c=>typeof c=="number"&&Number.isFinite(c)?c:null,s=t.filter(c=>(c.tick??0)<=n).map(c=>({id:c.id,tick:c.tick??0,raw:r(c.value),value:i?r(c.value):null,outcome:$r(c.status,c.kind),agent:c.agent,description:c.description,status:c.status})),a=[],o=[];for(const c of e){if(c.tick>n||c.tick<0)continue;const l=c.snapshot.value;if(l==null||!Number.isFinite(l))continue;const u=a.at(-1);(!u||u[1]!==l)&&(u&&o.push([c.tick,l]),a.push([c.tick,l]))}return{points:s,best:a,newBest:o}}const $n={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},Es=t=>String(Number(t.toPrecision(4)));function aA(t,e,n,i){const r=[...t.points.map(M=>M.value),...t.best.map(M=>M[1])].filter(M=>M!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,c=52,l=560,u=16,h=132,f=150,d=Math.max(1,n),g=a===s?s-o/2:s,x=a===s?o:a-s,p=M=>c+Math.min(1,M/d)*(l-c),m=M=>h-(M-g)/x*(h-u),S=t.best.map(([M,z],N)=>`${N?"H":"M"}${p(M).toFixed(1)} ${N?`V${m(z).toFixed(1)}`:m(z).toFixed(1)}`).join(""),w=t.best.length?`<path class="best-line" d="${S}H${p(d).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",y=M=>{const z=p(M.tick).toFixed(1),N=`${i(M.agent)} · ${i(M.status)} · ${M.raw==null?"no score":Es(M.raw)} · ${i(M.description)}`,F=`<title>${N}</title>`,B=M.id?` data-experiment="${i(M.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${N}"`:"";if(M.value==null&&M.outcome!=="crashed")return`<circle class="pt ${M.outcome}"${B} cx="${z}" cy="${f}" r="${M.outcome==="discarded"?3.5:4.5}" fill="${M.outcome==="discarded"?"none":$n[M.outcome]}" stroke="${$n[M.outcome]}" stroke-width="1.6">${F}</circle>`;if(M.value==null)return`<g class="pt crashed"${B}>${F}<path d="M${+z-4} ${f-4}l8 8m0 -8l-8 8" stroke="${$n.crashed}" stroke-width="2"/></g>`;const Y=m(M.value).toFixed(1);return M.outcome==="crashed"?`<g class="pt crashed"${B}>${F}<path d="M${+z-4} ${+Y-4}l8 8m0 -8l-8 8" stroke="${$n.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${M.outcome}"${B} cx="${z}" cy="${Y}" r="${M.outcome==="discarded"?3.5:4.5}" fill="${M.outcome==="discarded"?"none":$n[M.outcome]}" stroke="${$n[M.outcome]}" stroke-width="1.6">${F}</circle>`},A=t.newBest.map(([M,z])=>`<path class="new-best" d="M${p(M).toFixed(1)} ${(m(z)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${Es(z)} at tick ${M}</title></path>`).join(""),T=e.direction==="maximize"?"↑ better":"↓ better",_=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${c} ${u-4}V${h+4}H${l}" fill="none" stroke="#79918b"/><text x="${c-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${Es(a)}</text><text x="${c-6}" y="${h}" text-anchor="end" fill="#b9cac2" font-size="9">${Es(s)}</text><text x="${c-6}" y="${f+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(M=>M.value==null&&M.raw!=null)?"other measure":"no score"}</text><path d="M${c} ${f}H${l}" stroke="#ffffff14" stroke-dasharray="3 4"/>${w}${t.points.map(y).join("")}${A}${_?`<text x="${l}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${Es(_[1])}</text>`:""}<text x="${c}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${T}</text><g font-size="9" fill="#b9cac2" transform="translate(${c} 186)"><circle cx="0" cy="-3" r="4" fill="${$n.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${$n.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${$n.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${$n.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}const oA={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel prize hunt"};function Mf(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function cA(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function Dp(t){return t.task_title||oA[cA(t)]||t.title}function xl(t){if(!t?.name)return"";const e=t.name.replaceAll("_"," ");return t.direction==="maximize"?`${e} ↑ higher is better`:`${e} ↓ lower is better`}function ru(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${Mf(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${Mf(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function lA(t){const e=t.publish_errors;return Array.isArray(e)?e.length:typeof e=="number"?e:0}function uA(t){const e=lA(t);return e?`${e} publish error${e===1?"":"s"}`:""}function dA(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function fA(t){const e=ru(t),n=t.sample===!1?GT({...t,stale:e.status==="stale",live:e.status==="live"}):"",i=Dp(t),r=i===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[n+i,r,t.sample===!1&&e.status==="stopped"?e.label.toLowerCase():"",t.sample===!1?dA(t):""].filter(Boolean).join(" · ")}function hA(t,e){const n=[["Live now",t.filter(r=>r.sample===!1&&r.live)],["Swarm runs",t.filter(r=>r.sample===!1&&!r.live)],["Recorded samples",t.filter(r=>r.sample!==!1)]],i=r=>`<option value="${e(r.id)}">${e(fA(r))}</option>`;return n.filter(([,r])=>r.length).map(([r,s])=>`<optgroup label="${r}">${s.map(i).join("")}</optgroup>`).join("")}function Up(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function Op(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function Sl(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function pA(t,e,n){const i=Up(t),r=[],s=new Map,a=new Set,o=new Set,c=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let l=0;const u=new Set,h=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),f=.25,d=f*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=h;g+=f){for(;l<c.length&&c[l].tick<=g;){const p=c[l++];if(p.type==="experiment.started"){p.agentId&&(a.add(p.agentId),o.add(p.agentId));continue}if(p.type==="experiment.finished"){p.agentId&&o.delete(p.agentId);continue}for(const m of[p.agentId,...p.payload?.to_agent_ids||[],p.refs?.to_agent_id].filter(Boolean)){u.add(m);const S=s.get(m);S&&!S.table&&(S.pending=!0)}}const x=Co(t.frames,g)?.snapshot.agents||[];Op(x,g,i).forEach(p=>{const m=x.findIndex(y=>y.id===p.id);let S=s.get(p.id);if(!S){S={p:{...rl(m),atTable:u.has(p.id)},path:[],leg:0,dwell:u.has(p.id)?2.5:0,pending:!1,table:u.has(p.id),lab:!1},s.set(p.id,S);return}if(a.delete(p.id)&&(S.lab=!0,S.table=!1,S.dwell=0,S.p.atTable=!1,S.p.atLab=!1,S.path=Za(S.p,sl(Sl({...p,activity:"experimenting"}),m),e,n)),S.lab&&!S.path.length&&!S.p.atLab&&(S.p.atLab=!0,S.dwell=4),S.dwell>0){S.dwell=Math.max(0,S.dwell-d),S.p.atTable=S.table;return}if(S.lab&&S.p.atLab){if(o.has(p.id))return;S.lab=!1,S.p.atLab=!1}if(S.p.atTable=!1,!S.path.length){S.table&&(S.table=!1,S.pending=!1,S.leg=0);const A=[sl(Sl({...p,activity:"experimenting"}),m),{x:2.7+m%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(S.leg>=A.length&&S.pending)S.table=!0,S.path=Za(S.p,rl(m),e,n);else{const T=A[S.leg%A.length];S.leg++,S.path=Za(S.p,T,e,n)}}let w=d*2.1;for(;S.path.length&&w>0;){const y=S.path[0],A=Math.hypot(y.x-S.p.x,y.z-S.p.z);A<=w?(S.p.x=y.x,S.p.z=y.z,w-=A,S.path.shift()):(S.p.x+=(y.x-S.p.x)/A*w,S.p.z+=(y.z-S.p.z)/A*w,w=0)}!S.path.length&&S.lab&&(S.p.atLab=!0,S.dwell=4),!S.path.length&&S.table&&(S.dwell=3,S.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([p,m])=>[p,{...m.p}]))})}return r}function mA(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function gA(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const c=o.payload?.text||o.message||"";if(!c.trim())continue;const l=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:mA(i(c)),peers:l.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const nt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",mc=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Hr=t=>String(Number(t.toPrecision(4))),sn=(t,e=140)=>t.length>e?t.slice(0,e-1)+"…":t,Fp=t=>Array.isArray(t)?t.map(e=>nt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function Po(t,e){const n=t.payload||{},i=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const r=nt(n.why)||nt(n.reason);return n.accepted===!0?`Critic approved${r?`: ${sn(r)}`:": the rerun reproduced the score"}`:n.accepted===!1?`Critic rejected${r?`: ${sn(r)}`:": score didn't reproduce on rerun"}`:nt(n.text)}case"gate.checked":{const r=Fp(n.reasons);if(n.pass===!1)return`Novelty gate blocked: ${r.length?sn(r.join("; ")):"too close to an earlier idea"}`;const s=Array.isArray(n.prior_art)?n.prior_art.length:0;return n.pass===!0?`Novelty gate passed: the idea is new enough${s?` (checked against ${s} prior source${s===1?"":"s"})`:""}`:nt(n.text)}case"experiment.started":return`Testing: ${sn(nt(n.description)||nt(n.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const r=mc(n.metric_value),s=nt(n.status).toLowerCase(),a=r==null?"":` ${i} ${Hr(r)}`,o=e.best==null?"":` (best ${Hr(e.best)})`;return/crash|error|fail|timeout/.test(s)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(s)&&!/not_/.test(s)?`Kept:${a||" result"} beats the previous best`:r==null&&s?`${/reject|invalid|block/.test(s)?"Rejected before scoring":"Not scored"}${nt(n.text)?`: ${sn(nt(n.text))}`:""}`:s?`Discarded:${a} didn't beat the best${o}`:nt(n.text)}case"agent.assigned":{const r=nt(n.role);return r?`Conductor assigned ${r}${nt(n.rationale)?`: ${sn(nt(n.rationale))}`:""}`:nt(n.text)}case"round.started":{const r=Yr(nt(n.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${r?` · ${r}`:""}${nt(n.rationale)?`: ${sn(nt(n.rationale))}`:""}`}case"boredom.measured":{const r=mc(n.B),s=Yr(nt(n.regime)).label;return r==null?nt(n.text):`Boredom ${Math.round(r*100)}%${s?` · ${s}`:""}${r>.6?": repeating itself, ready to switch approach":r<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${sn(nt(n.text))}`;case"question.asked":{const r=nt(n.kind);return`${r==="recall"?"Recalling memory":r==="search"||r==="exa"?"Searching the literature":"Asking"}: ${sn(nt(n.text))}`}case"observation.received":return`Read: ${sn(nt(n.text)||nt(n.summary))}`;case"message.sent":{const r=nt(n.to_agent_id)||nt(t.refs?.to_agent_id);return`${r?`To ${e.name(r)}`:"Message"}: ${sn(nt(n.text))}`}case"study.registered":return`Pre-registered: ${sn(nt(n.question)||nt(n.text))}`;case"study.result":return sn(nt(n.text)||nt(n.headline));case"discovery.made":{const r=mc(n.metric_value);return`New best${r==null?"":`: ${i} ${Hr(r)}`}${nt(n.title)?` · ${sn(nt(n.title),80)}`:""}`}default:return""}}function su(t,e,n,i,r){const s=(t?.events||[]).filter(d=>d.tick<=i&&d.agentId===e),a=s.filter(d=>d.type==="experiment.started"&&d.refs?.experiment_id).at(-1),o=s.filter(d=>d.type==="gate.checked").at(-1),c=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,l=a&&!c?Js(t,String(a.refs.experiment_id),i):null,u=l&&(t?.events||[]).filter(d=>d.tick<=i&&d.type==="verdict.issued"&&d.refs?.experiment_id===l.id).at(-1),f=[...s,...u&&u.agentId!==e?[u]:[]].sort((d,g)=>d.tick-g.tick).map(d=>({tick:d.tick,why:Po(d,r)})).filter(d=>d.why).slice(-6).reverse();return{activity:iu(n),latest:s.at(-1)||null,blocked:c,experiment:l,sources:tu(t,i).filter(d=>d.agentId===e).slice(-3).reverse(),feed:f}}function kp(t,e,n){const i=e.esc,r=t.experiment,s=(g,x)=>x?`<div class="now-row"><b>${g}</b><div>${x}</div></div>`:"",a=t.latest?`${i(t.activity||"working")} · <span class="muted">${i(Po(t.latest,e)||t.latest.type)}</span>`:i(t.activity||"Not active yet"),o=r?`${i(r.idea?.text||r.description||"")}${r.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${r.idea.predictedDelta>0?"+":""}${Hr(r.idea.predictedDelta)}</span>`:""}${r.descriptor?.mechanism?` <span class="pill">${i(String(r.descriptor.mechanism).replaceAll("_"," "))}${r.descriptor.method?` / ${i(String(r.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",c=t.sources.map(g=>`<button class="chip" data-source="${i(g.id)}">${i(sn(g.title,60))}</button>`).join(""),l=t.blocked?`<span class="pill bad">blocked</span> ${i(Fp(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:r?.gate?`<span class="pill ${r.gate.pass?"ok":"bad"}">${r.gate.pass?"passed":r.gate.pass===!1?"blocked":"checked"}</span> ${i(r.gate.reasons.length?r.gate.reasons.join("; "):r.gate.pass?"The idea is new enough to try.":"")}`:r?'<span class="muted">Not checked yet</span>':"",u=r?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(r.verdict.verdict||"")&&!/not_/i.test(r.verdict.verdict||"")?"ok":"bad"}">${i(r.verdict.verdict||"verdict")}</span> ${i(r.verdict.why||"")}`:r?.result?'<span class="muted">Waiting for the critic</span>':"",h=n?.name.replaceAll("_"," ")||"score",f=n?.direction==="maximize"?"higher":"lower",d=r?.result?`<span class="pill">${i(r.result.status||"done")}</span> ${r.result.metric==null?"":`${i(h)} ${Hr(r.result.metric)}`}${e.best==null?"":` · best so far ${Hr(e.best)} (${f} is better)`}`:r?'<span class="muted">Still running</span>':"";return`<div class="now-card">${s("Doing",a)}${s("Idea",o)}${s("Read",c)}${s("Gate",l)}${s("Score",d)}${s("Critic",u)}${r?`<button class="inspect-link" data-experiment="${i(r.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${t.feed.map(g=>`<li><span>${g.tick}</span>${i(g.why)}</li>`).join("")}</ol>`:""}</div>`}const _A=t=>t&&/^https?:\/\//i.test(t)?t:null,Ka=(t,e,n)=>_A(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),Ja=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,zp=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,ws=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function vA(t,e,n){const i=e.esc,r=d=>`<p class="muted">${d}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${bT(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([d,g])=>`${d}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${Ja(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(d=>`<li>${i(d)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),c=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"—")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),l=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),h=`${u.length?`<div class="artifact-links">${u.map(([d,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(d)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${ws("Idea",s+a,!!(t.idea||t.description))}${ws("Gate",o,!!t.gate)}${ws("Score",c,!!t.result)}${ws("Critic",l,!!t.verdict)}${ws("Artifacts",h,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${Bp(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(d=>`<li><span>t${d.tick}</span> <b>${i(d.type)}</b> ${i(d.text)}</li>`).join("")}</ul></details>`}function xA(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${Ka(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(Hp(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(Gp(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>zp(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const Gr=t=>t==null?"—":t.toFixed(3),SA=t=>`rho ${Gr(t.rho)}, p ${vl(t.p)}, n ${t.n??"—"}`;function yA(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${Gr(t)}, observed rho ${Gr(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function MA(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function Bp(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(l,u)=>l?`${n(l)}${u?` = <b>${n(u)}</b>`:""}`:"—",a=r?.halves.length?`<div class="halves">${r.halves.map((l,u)=>`<span>Half ${u+1}: rho ${Gr(l.rho)}, p ${vl(l.p)}, n ${l.n??"—"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',o=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(l=>`<li>${SA(l)} ${Ja(l.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",c=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([l,u])=>`<li>Judge ${n(l)} · laugh ${u.laugh??"—"} / think ${u.think??"—"}${u.reason?`: ${n(u.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(l=>`<li>${Ka(e,l.url,l.title||l.url)}${l.snippet?`<p class="muted">${n(l.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(l=>`<li>${n(l)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head">${MA(t,e)}<span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?Ka(e,i.url,Hp(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"—")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${Gr(t.predictedRho)} → observed <b>${Gr(r?.rho??null)}</b>${r?` · p ${vl(r.p)} · n ${r.n??"—"}`:""}${yA(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?a:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${Ja(r.significant,"significant","not significant")} ${Ja(r.replicated,"replicated","not replicated")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${o}${c}<div class="chips">${t.experimentId?zp(e,t.experimentId):""}${t.citations.map(l=>`<span class="chip">${Ka(e,l,Gp(l.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function bA(t,e){return t.length?`<div class="card-grid">${t.map(n=>Bp(n,e)).join("")}</div>`:""}function $p(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function Hp(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function Gp(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function EA(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const wA={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function TA(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=Ip(Pp(r,e.id,i),e.family||""),a={name:t.agentName||(h=>h===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=su(n,e.id,e.activity||e.state,i,a),c=wh(e.boredom).level,l=o.experiment,u=o.blocked?Po(o.blocked,a):"";return{name:e.name,role:s||Ap(e.role)||"Scientist",mood:{level:c,label:wA[c]||null,boredomPct:e.boredom==null?null:ur(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:l?.idea?.text||l?.description||null,predicted:u?null:l?.idea?.predictedDelta??null}}function AA(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(ks(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const ja=t=>typeof t=="number"&&Number.isFinite(t),bf=t=>Math.max(0,Math.min(1,t));function RA(t){return t==null?"best —":`best ${ks(t)}`}function CA(t,e,n,i,r,s){const a=x=>x.agent===e||x.agent===n||x.agentId===e,o=t.filter(x=>a(x)&&$r(x.status,x.kind)!=="baseline").slice().sort((x,p)=>(x.tick??0)-(p.tick??0)),c=o.map(x=>x.value).filter(ja),l=i.name==="replicated_findings"?"maximize":i.direction,u=c.length?l==="maximize"?Math.max(...c):Math.min(...c):null,h=t.filter(x=>$r(x.status,x.kind)!=="baseline").map(x=>x.value).filter(ja),f=h.length?l==="maximize"?Math.min(...h):Math.max(...h):null;let d=null;if(u!=null&&r!=null){if(u===r)d=1;else if(s!=null){const x=r-s;d=x===0?0:bf((u-s)/x)}else if(f!=null){const x=r-f;d=x===0?1:bf(l==="maximize"?(u-f)/x:(f-u)/x)}}const g={kept:0,discarded:0,crashed:0};for(const x of o){const p=$r(x.status,x.kind);p!=="baseline"&&g[p]++}return{best:u,progress:d,...g,spark:o.map(x=>x.value).filter(ja).slice(-12)}}function PA(t,e,n){const i=t.filter(ja);if(i.length<2||e<=0||n<=0)return"";const r=Math.min(...i),s=Math.max(...i),a=s-r;return i.map((o,c)=>`${c?"L":"M"}${(c*e/(i.length-1)).toFixed(2)} ${(a?n-(o-r)/a*n:n/2).toFixed(2)}`).join("")}const de=t=>document.getElementById(t),_o=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Ue=t=>_o(js(String(t??""))),Qr=de("console"),It=de("conversation"),au=de("guide"),Di=de("inspector");let Ke,Tt,sr,Ee=null,et=null,Vp=[],Ne=0,At=!1,jt=!1,Wp=1,Vr=null,ou="",si="",Lt="",fi=!1,bn=!1,Pi="",Kn="",Ef=0,vo=!1,zs=!1,wf=0,es="",xn=0,li=0,Ps=!1,ka={x:0,y:0},tr=null,Tf,Af,ar=0,Xp=new Map;const yl=XS();function js(t){return $T(t,Xp)}function Zp(){const t=Ep(Ee?.manifest),e=de("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${Ue(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${Ue(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}Zp();function IA(t){Xp=new Map(Object.entries(t.manifest.aliasMap||{}))}let qp=new Map,Qa=[];const pn=new Set;function cu(t){return qT(t,Ee?.manifest.agents?.find(e=>e.agent_id===t.id))}function Yp(t){const e=cu(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${Ue(e.initial)}</span>`}function Kp(t){const e=cu(t),n=Ee&&!e.staff?Ip(Pp(Ee.events,t.id,Ne),e.familyLabel):"";return[e.familyLabel,e.staff?"":n||(t.role!==t.type?Ap(t.role):""),t.standby?"standing by":iu(t.activity||t.state)].filter(Boolean).map(i=>_o(i)).join(" · ")}function Jp(t){if(cu(t).staff)return"";const e=t.boredom==null?null:ur(t.boredom),n=Yr(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${Ue(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":$l(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}">${Ue(n.label)}</em>`:""}</span>`}function LA(){const t=eA(Ee?.manifest.agents||[]);de("whos-who").hidden=!t.length,de("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${_o(e.title)}<small>${Ue(e.names.join(", "))}</small></dt><dd>${_o(e.does)}</dd>`).join("")}</dl>`:""}function Is(){return Ee?.manifest.live?"Published":"Recorded"}function Io(){return Lp(Ee?.manifest,Ne,At)}function Rf(t,e){const n=os(t.agentId,"");if(t.kind==="regime"){uu(`${t.title}${n?` · ${n}`:""} — ${t.detail}`);return}const i=de("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${Ue(t.title)}</strong><p>${Ue([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(Af),Af=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function lu(){if(Ee){if(Ne>ar){const t=bp(Ee.events,ar,Ne,Ee.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?Rf(e.at(-1),e.length-1):t.length&&Rf(t.at(-1),0)}ar=Ne}}function Jn(){return Op(et?.agents||[],Ne,qp)}function uu(t){de("toast").textContent=t,de("toast").hidden=!1,clearTimeout(Tf),Tf=setTimeout(()=>de("toast").hidden=!0,4e3)}function _i(){document.exitPointerLock?.(),pn.clear()}function oi(){return Qr.open||au.open||Di.open||Vr!==null}function gr(){Vr&&(de(Vr).hidden=!0),Vr=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false"))}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=Vr!==e;_i(),gr(),n&&(Vr=e,de(e).hidden=!1,t.setAttribute("aria-expanded","true"))};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=gr;function na(t){if(jt=t,Lt="",fi=!1,bn=!1,Pi="",Kn="",_i(),Ke.setOverview?.(!t),de("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){At=!1,Ke.camera.position.set(0,1.69,9.5);const e=new On().setFromQuaternion(Ke.camera.quaternion,"YXZ");xn=e.y,li=e.x}else{const e=Ke.camera.quaternion.clone();sr.reset(),Ke.camera.quaternion.copy(e),sr.syncFromCamera()}vi(),jp()}function vi(){if(Ee){const r=Ee.manifest,s=FT(r),a=ru(r);de("overview-eyebrow").textContent=s.eyebrow,de("run-callout").textContent=s.callout,de("replay-kicker").textContent=s.kicker,de("connection").textContent=r.sample===!1?a.status==="live"&&!Io()?"LIVE SWARM · VIEWING THE PAST":VT({...r,stale:a.status==="stale"}):r.description?.includes("mock")?"RECORDED SAMPLE · MOCK PRIOR-ART":"RECORDED REPLAY",NA()}const t=rA(Ee?.manifest,Ne,At,Ee?.events||[]);de("go-live").hidden=t.hidden,de("go-live").textContent=t.label,de("go-live").classList.toggle("at-edge",t.atEdge),de("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),de("play").textContent=At?"Ⅱ Pause":"▶ Play",de("play").setAttribute("aria-label",At?"Pause":"Play"),de("camera-mode").textContent=jt?"Lab view ↗":"Walk inside ↗",de("camera-mode").disabled=!Ee||At,de("timeline").value=String(Ne),de("tick-label").textContent=`Tick ${Math.floor(Ne)} / ${Ee?.manifest.totalTicks||0}`,de("timeline").setAttribute("aria-valuetext",`Tick ${Math.floor(Ne)} of ${Ee?.manifest.totalTicks||0}`);const e=Ee&&Co(Ee.events,Ne),n=de("activity-caption"),i=e?.refs?.experiment_id;n.textContent=e?js(jT({...e,message:Po(e,Qs())||e.message},os(e.agentId,""))):"The run begins here",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function NA(){if(!Ee)return;const t=Ee.manifest,e=ru(t),n=Yr(et?.regime),i=t.time?.rounds||et?.config.rounds||0,r=uA(t);de("run-meta").innerHTML=[`<span class="status-chip" data-status="${e.status}" title="${Ue(e.detail)}">${Ue(e.label)}</span>`,`<span class="meta-task">${Ue(Dp(t))}</span>`,xl(t.metric||et?.metric)?`<span>${Ue(xl(t.metric||et?.metric))}</span>`:"",t.proxy_note?`<span class="proxy-chip" title="Benchmark caveat from the task definition">Proxy: ${Ue(t.proxy_note)}</span>`:"",et?.round?`<span>Round ${et.round}${i?` / ${i}`:""}</span>`:"",n.label&&t.sample===!1?`<span class="regime-chip" data-tone="${n.tone}" title="Swarm boredom ${Math.round(ur(et?.boredom||0))}%">${Ue(n.label)} · ${Math.round(ur(et?.boredom||0))}%</span>`:"",e.status==="stale"?`<span class="warn-chip">${Ue(e.detail)}</span>`:"",r?`<span class="warn-chip">${Ue(r)}</span>`:""].filter(Boolean).join("")}function Fi(t){Ee&&(Ne=Math.max(0,Math.min(Ee.manifest.totalTicks,t)),et=Co(Ee.frames,Ne)?.snapshot||null,vi(),du(),Qr.open&&gu(),It.open&&_u(),Di.open&&sm())}function du(){de("agent-count").textContent=`${Jn().length} AGENTS`,de("agent-list").innerHTML=QT(et?.agents||[],Jn()).map(t=>`<button class="agent-row" data-agent="${Ue(t.id)}"${t.standby?' disabled data-standby="true"':""}>${Yp(t)}<span><strong>${Ue(t.name)}</strong><small>${Kp(t)}</small>${Jp(t)}</span><i></i></button>`).join("")||'<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>',de("run-label").textContent=et?`ROUND ${et.round}${et.config.rounds?` / ${et.config.rounds}`:""} · BEST ${et.metric.name.replaceAll("_"," ")} ${et.value==null?"—":et.value.toFixed(4)} · ${xl(et.metric).split(" ").slice(-3).join(" ")}`:"Waiting for the first events from the artificial scientist swarm",jp()}function jp(){const t=de("status-strip");if(!Ee||!et||jt||document.body.classList.contains("prestart")){t.hidden=!0,t.innerHTML="";return}const e=Jn(),n=et.results,i=et.metric,r=n.filter(c=>$r(c.status,c.kind)!=="baseline"&&typeof c.value=="number"&&Number.isFinite(c.value)),s=i.name==="replicated_findings"?"maximize":i.direction,a=r.length?s==="maximize"?Math.max(...r.map(c=>c.value)):Math.min(...r.map(c=>c.value)):et.value,o=n.find(c=>$r(c.status,c.kind)==="baseline"&&typeof c.value=="number")?.value??null;t.innerHTML=e.map(c=>{const l=CA(n,c.id,c.name,i,a,o),u=l.progress==null?0:Math.round(l.progress*100),h=iu(c.activity||c.state)||"waiting",f=RA(l.best);return`<button class="status-tile" data-agent="${Ue(c.id)}" aria-label="Focus ${Ue(c.name)}: ${Ue(f)}, ${l.kept} kept, ${l.discarded} discarded, ${l.crashed} crashed"><span class="status-tile-head"><strong>${Ue(c.name)}</strong><span class="tile-activity">${Ue(h)}</span></span>${Jp(c)}<span class="tile-progress" role="meter" aria-label="${Ue(c.name)} progress toward run best" aria-valuemin="0" aria-valuemax="100"${l.progress==null?"":` aria-valuenow="${u}"`}><i style="width:${u}%"></i></span><span class="tile-results"><b>${Ue(f)}</b><span class="kept" title="Kept">✓ ${l.kept}</span><span class="discarded" title="Discarded">○ ${l.discarded}</span><span class="crashed" title="Crashed">× ${l.crashed}</span></span><svg class="tile-spark" viewBox="0 0 80 24" aria-label="Recent results"><path d="${PA(l.spark,80,20)}"/></svg></button>`}).join(""),t.hidden=!e.length,fu()}function fu(){const t=document.querySelector(".replay-bar");t&&document.documentElement.style.setProperty("--status-strip-bottom",`${Math.max(0,innerHeight-t.getBoundingClientRect().top+8)}px`)}const Cf=document.querySelector(".replay-bar");Cf&&new ResizeObserver(fu).observe(Cf);window.addEventListener("resize",fu);function DA(){const t=de("proximity");if(!Lt){t.hidden=!0;return}const e=Jn().find(i=>i.id===Lt);if(!e){t.hidden=!0;return}const n=`${Lt}|${Math.floor(Ne)}|${bn}`;if(n!==Kn){const i=TA({agent:e,recording:Ee,tick:Ne,metric:et?.metric,best:et?.value??null,agentName:os});if(t.innerHTML=AA(i,bn,Ue),bn){const r=su(Ee,e.id,e.activity||e.state,Ne,Qs()),s=t.querySelector("[data-bubble-now]");s&&(s.innerHTML=kp(r,{...Qs(),esc:Ue},et?.metric))}Kn=n}t.hidden=!1,UA()}function UA(){const t=de("proximity");if(t.hidden)return;const e=Ke.agentPositions?.().find(c=>c.id===Lt);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new O(0,2.35,0));if(Ke.camera.updateMatrixWorld(),n.clone().applyMatrix4(Ke.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(Ke.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12;t.style.visibility="visible",t.style.left=`${Mn.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o))}px`,t.style.top=`${Mn.clamp(s-a.height-22,o,Math.max(o,innerHeight-a.height-o))}px`}function Qp(t){Lt=t,fi=!0,bn=!1,Pi="",Kn="",pu("scientist")}function OA(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function hu(){const t=jS(OA());if(!t){es="done",de("coach-mark").hidden=!0;return}es=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?"Tap a scientist":"Drag to scrub";de("coach-mark").dataset.coach=t,de("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,de("coach-mark").hidden=!1}function pu(t){es===t&&(es="",de("coach-mark").hidden=!0,hu())}function mu(){vo||(vo=!0,document.body.classList.remove("prestart"),de("prestart").hidden=!0,de("intro").hidden=!0,Ee&&(Ee.manifest.live?Fi(Ee.manifest.totalTicks):Ne>=Ee.manifest.totalTicks&&Fi(0),At=!0,ar=Ne),vi(),du(),Tt.domElement.focus(),Jn().length&&hu())}function em(){zs&&(zs=!1,Ke.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",em,{capture:!0});window.addEventListener("keydown",em,{capture:!0});de("start-swarm").onclick=mu;de("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&pu(es)};function FA(){if(!Ee||!et)return"<p>No measurements yet.</p>";const t=Ee.manifest.swarm==="ignobel"&&et.metric.name==="replicated_findings";return aA(sA(et.results,Ee.frames,Ne,!t),et.metric,Ne,Ue)}function tm(t){const e=[t.effectSize==null?"":`Effect ${Ue(t.effectSize)}`,t.pValue==null?"":`p = ${Ue(t.pValue)}`,t.reward==null?"":`Reward ${Ue(t.reward)}`].filter(Boolean);return e.length?e.join("<br>"):Ue(t.value??"—")}function gu(){const t=et;if(!t){de("console-content").innerHTML="<h2>No evidence yet.</h2>";return}de("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(Ne)}. Every candidate is plotted: kept, discarded and crashed, with the confirmed best so far. Later results stay hidden until playback reaches them.</p>${Ee?.manifest.proxy_note?`<p class="proxy-note"><b>About this benchmark:</b> ${Ue(Ee.manifest.proxy_note)}</p>`:""}${FA()}<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th>MEASUREMENT</th></tr></thead><tbody>${t.results.slice().reverse().map(e=>`<tr${e.id?` class="inspectable" data-experiment="${Ue(e.id)}" tabindex="0"`:""}><td>${e.round}</td><td>${Ue(e.agent)}</td><td>${Ue(e.status)}<br>${Ue(e.description)}</td><td>${tm(e)}</td></tr>`).join("")}</tbody></table></div><h3>${Is()} findings</h3>${t.findings.filter(e=>!/swarm_B|per_agent_B|boredom/i.test(e.message)).slice().reverse().map(e=>`<div class="finding"><b>${Ue(Jn().find(n=>n.id===e.agent)?.name||e.role)}</b><span>${Ue(e.message)}</span></div>`).join("")||"<p>No findings yet.</p>"}${kA()}`}function kA(){const t=nu(Ee,Ne),e=tu(Ee,Ne),n=Mp(rm(),Ne);return`${t.length?`<h3>Ig Nobel studies</h3>${bA(t,Bs())}`:""}${n.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${$p(n,Bs())}</div>`:""}${e.length||zA("sources")?`<h3>Research sources</h3>${xA(e,Bs())}`:""}`}let on="now";function Qs(){return{name:t=>os(t),metric:et?.metric,best:et?.value??null}}function _u(){const t=Jn().find(y=>y.id===ou);if(!t){It.close();return}const e=Ee?BT(Ee.events,Ne).filter(y=>y.agentId===t.id||y.type==="message.sent"&&(y.payload?.to_agent_id===t.id||y.payload?.to_agent_ids?.includes(t.id))):[],n=on==="idea"?/hypothesis|propos|question|idea/:on==="result"?/experiment|observ|discover|reward|evaluat/:on==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=Cp,r=e.filter(y=>n.test(y.type)&&i(y.message)).slice(-1),s=on==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=on==="result"&&t.lastResult?`<blockquote>${Ue(t.lastResult.description)}<br>${Ue(t.lastResult.status)} · ${tm(t.lastResult)}<cite>${Is()} result · available by tick ${Math.floor(Ne)}</cite></blockquote>`:"",o=on==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",c=t.boredom==null?null:ur(t.boredom),l=Ee?YS(Ee.events,t.id,Ne):null,u=Yr(l?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),h=qS(l?.components||t.boredomDetail?.components),f=Mp(rm(),Ne,t.id),d=on==="result"||on==="doing"?t.lastResult?.id&&Js(Ee,t.lastResult.id,Ne)?t.lastResult.id:t.focus?.experiment_id&&Js(Ee,t.focus.experiment_id,Ne)?t.focus.experiment_id:null:null,g=d?`<button class="inspect-link" data-experiment="${Ue(d)}">Inspect experiment →</button>`:"",x=!!Ee?.manifest.live,p=Io(),m=Ee?Np(Ee.events,Ne):0,S=x?p?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(Ne)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(Ne)}${m?` · ${m} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(Ne)}.`,w=y=>y.type==="message.sent"&&y.agentId!==t.id?`Message from ${Ue(os(y.agentId,"")||"a colleague")}`:`${x?"Published":"Recorded"} ${Ue(Rp(y.type).toLowerCase())}`;de("conversation-tag").textContent=x?p?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",de("conversation-content").innerHTML=`<div class="conversation-person">${Yp(t)}<div><h2>${Ue(t.name)}</h2><p>${Kp(t)}</p></div></div><div class="conversation-questions">${[["now","Now"],["doing","What are you doing?"],["idea","Tell me about your idea"],["result","What did you find?"],["notes","Your research notes"],...f.length?[["talk","Conversation"]]:[]].map(([y,A])=>`<button data-topic="${y}" aria-pressed="${on===y}">${A}</button>`).join("")}</div><div class="speech-bubble${on==="talk"||on==="now"?" history":""}">${on==="now"?kp(su(Ee,t.id,t.activity||t.state,Ne,Qs()),{...Qs(),esc:Ue},et?.metric):on==="talk"?$p(f,Bs(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${Ue(o)}<cite>${Is()} proposal · available by tick ${Math.floor(Ne)}</cite></blockquote>`:r.length?r.map(y=>`<blockquote>${Ue(y.message)}<cite>${w(y)} · tick ${y.tick}</cite></blockquote>`).join(""):s?`<blockquote>${Ue(s)}<cite>${Is()} excerpt · through tick ${Math.floor(Ne)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${Is().toUpperCase()} BOREDOM</span><strong style="color:${c==null?"inherit":$l(c)}">${c==null?"Not measured":Math.round(c)+"%"}</strong></div>${c==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${Ue(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${c}"><i style="left:${c}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||h.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${Ue(u.label)}</span>`:""}${h.length?`<div class="boredom-components" aria-label="Boredom components">${h.map(y=>`<div><span>${Ue(y.label)}</span><i style="--v:${y.value}%"></i><b>${y.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${S}</p>`}function nm(t){if(Lt="",fi=!1,bn=!1,Kn="",Io()||(At=!1),ou=t,on="now",_i(),gr(),vi(),_u(),Jn().some(e=>e.id===t)){const e=Ke.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new O(0,2.1,0));if(Ke.camera.lookAt(n),jt||sr.focus(n),jt){const i=new On().setFromQuaternion(Ke.camera.quaternion,"YXZ");xn=i.y,li=i.x}}It.open||It.show(),im(),It.querySelector("button")?.focus()}}function im(){if(!It.open)return;const t=Ke.agentPositions?.().find(l=>l.id===ou);if(!t){It.style.visibility="hidden";return}const e=t.position.clone().add(new O(0,2.35,0));if(Ke.camera.updateMatrixWorld(),e.clone().applyMatrix4(Ke.camera.matrixWorldInverse).z>=0){It.style.visibility="hidden";return}It.style.visibility="visible",e.project(Ke.camera);const i=(e.x+1)/2*innerWidth,r=(1-e.y)/2*innerHeight,s=It.getBoundingClientRect(),a=12,o=Mn.clamp(i-s.width/2,a,Math.max(a,innerWidth-s.width-a)),c=Mn.clamp(r-s.height-24,80,Math.max(80,innerHeight-s.height-190));It.style.left=`${o}px`,It.style.top=`${c}px`,It.style.setProperty("--speech-tail",`${Mn.clamp(i-o,20,s.width-20)}px`)}de("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(on=e,_u())};de("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&nm(e)};function rm(){return Ee?.events||[]}function zA(t){const e=Ee?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function os(t,e){return t?(et?.agents||Ee?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||Ee?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function Bs(){const t=Ee?.manifest.id||"";return{esc:Ue,name:os,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return Th(n)},experimentLabel:e=>{const n=Js(Ee,e,Ne);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let xo=null;function sm(){if(!xo)return;const t=Js(Ee,xo,Ne);de("inspector-content").innerHTML=t?vA(t,Bs(),t.studyId?nu(Ee,Ne).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function BA(t){_i(),gr(),It.close();const e=tu(Ee,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>Ne&&(At=!1,Fi(e)),gu(),Qr.open||Qr.showModal();const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function am(t){At=!1,vi(),_i(),xo=t,sm(),Di.open||Di.showModal(),Di.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target.closest?.("[data-source]")?.dataset.source;if(e){BA(e);return}const n=t.target.closest?.("[data-experiment]")?.dataset.experiment;n&&(t.preventDefault(),am(n))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),am(e.dataset.experiment))});function So(){Lt&&(bn=!0,Kn="")}function om(){Lt&&(Pi=Lt),Lt="",fi=!1,bn=!1,Kn="",de("proximity").hidden=!0}de("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){om();return}if(n?.hasAttribute("data-bubble-more")){Lt&&nm(Lt);return}if(n?.hasAttribute("data-bubble-expand")){So();return}bn||So()});de("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");if(!e)return;const n=e.dataset.agent,i=Ke.agentPositions?.().find(s=>s.id===n);if(!i)return;const r=i.position.clone().add(new O(0,2.1,0));Ke.camera.lookAt(r),sr.focus(r),Qp(n)});Di.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);de("close-inspector").onclick=()=>Di.close();Di.addEventListener("close",()=>{xo=null});de("close-conversation").onclick=()=>{It.close(),Tt.domElement.focus()};de("close-console").onclick=()=>Qr.close();de("close-guide").onclick=()=>au.close();de("open-console").onclick=()=>{_i(),gr(),gu(),Qr.showModal()};de("open-guide").onclick=()=>{_i(),gr(),au.showModal()};de("play").onclick=()=>{Ee&&(At||(It.close(),!Ee.manifest.live&&Ne>=Ee.manifest.totalTicks&&Fi(0),jt&&na(!1)),At=!At,vi())};de("camera-mode").onclick=()=>na(!jt);de("collapse-bar").onclick=()=>{const t=document.body.classList.toggle("bar-collapsed");de("collapse-bar").setAttribute("aria-expanded",String(!t)),de("collapse-bar").textContent=t?"▴":"▾",de("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel")};de("timeline").oninput=()=>{At=!1,Fi(Number(de("timeline").value)),ar=Ne,pu("scrub")};de("go-live").onclick=()=>{Ee?.manifest.live&&(It.close(),jt&&na(!1),At=!0,Fi(Ee.manifest.totalTicks),lu())};de("pace").onchange=()=>{Wp=Number(de("pace").value)};function $A(t){qp=Up(t),Qa=pA(t,Ke.bounds,Ke.colliders)}function HA(){const t=Co(Qa,Ne);if(!t)return new Map;if(Ne<=0)return t.positions;const e=Qa[Qa.indexOf(t)+1];if(!e)return t.positions;const n=(Ne-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function cm(t,e=!1){const n=++Ef;e||(At=!1,de("connection").textContent="LOADING RUN");try{const i=await XT(yp,t,Vp.find(c=>c.id===t)?.contentVersion||"2",Ee);if(n!==Ef)return;const r=Ne,s=Io();Ee=i,Zp(),IA(i),i.frames.sort((c,l)=>c.tick-l.tick),i.events.sort((c,l)=>c.tick-l.tick),$A(i),LA(),de("timeline").max=String(i.manifest.totalTicks),de("timeline").disabled=!1,de("play").disabled=!1,de("replay-title").textContent=js(i.manifest.title),de("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),de("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),de("timeline-markers").innerHTML=i.events.filter(c=>/experiment.finished|discovery|study.completed|award/.test(c.type)).map(c=>`<i${/discovery|award/.test(c.type)?' class="best"':""} style="left:${c.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),de("run-picker").value=t,e||na(!1);const a=e?iA(r,i.manifest,s):nA(i.manifest);e||(At=vo,ar=a),Fi(a),e&&s?lu():e||(ar=Ne),vi(),ey&&!e&&(sessionStorage.getItem("intro-seen")?mu():(sessionStorage.setItem("intro-seen","1"),GA()));const o=new URL(location.href);o.searchParams.set("recording",t),o.searchParams.delete("run"),history.replaceState(null,"",o)}catch(i){de("connection").textContent="ARCHIVE UNAVAILABLE",uu(i.message)}}async function lm(){try{const t=OT(await yp("/recordings"));if(Vp=t,de("run-picker").innerHTML=hA(t,Ue)||"<option>No artificial scientist swarm recordings available</option>",Ee)de("run-picker").value=Ee.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await cm(t.find(n=>n.id===e)?.id||t[0].id)}else t.length||(de("connection").textContent="NO SWARM RECORDINGS",de("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){de("connection").textContent="ARCHIVE UNAVAILABLE",de("replay-title").textContent="Archive unavailable",uu(t.message)}}de("refresh-runs").onclick=()=>lm();de("run-picker").onchange=()=>cm(de("run-picker").value);function GA(){de("intro").innerHTML=TT(UT,wT(Ee),Ue,wp(Ee),Ee?.manifest),de("prestart").hidden=!0,de("intro").hidden=!1,de("intro-start").onclick=mu,de("intro-results-link").onclick=t=>{t.preventDefault();const e=de("intro-real-results");e.hidden=!1,e.open=!0,e.scrollIntoView({behavior:yl?"auto":"smooth",block:"center"})}}de("refresh-runs").hidden=!0,document.body.classList.add("static-site");function Pf(t,e){const i=Ke.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||Ke.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),pn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>pn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(bn){bn=!1,Kn="";return}if(fi||Lt){om(),_i();return}It.close(),gr(),_i()}if(!(oi()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Lt){t.preventDefault(),So();return}t.code==="Enter"&&Lt&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),So()),["KeyW","KeyA","KeyS","KeyD",...jt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault(),pn.add(t.code)}});window.addEventListener("keyup",t=>pn.delete(t.code));window.addEventListener("blur",()=>{pn.clear(),Ps=!1,tr=null,At=!1,vi()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);n=s,At&&Ee&&(Ne=zT(Ne,a,Wp,Ee.manifest.totalTicks,Ee.manifest.tickDurationMs),kT(Ee.manifest,Ne)||(At=!1),Math.floor(Ne)!==i?(Fi(Ne),i=Math.floor(Ne),lu()):vi());const o=Ke.camera;if(!jt&&!oi()&&!It.open&&sr.update(a,pn),jt&&!oi()){({yaw:xn,pitch:li}=Eh(xn,li,a,pn));const d=Number(pn.has("KeyW"))-Number(pn.has("KeyS")),g=Number(pn.has("KeyD"))-Number(pn.has("KeyA"));if(d||g){const x=(pn.has("ShiftLeft")||pn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(d,g),p=(-Math.sin(xn)*d+Math.cos(xn)*g)*x,m=(-Math.cos(xn)*d-Math.sin(xn)*g)*x;Pf(o.position.x+p,o.position.z)||(o.position.x+=p),Pf(o.position.x,o.position.z+m)||(o.position.z+=m)}o.rotation.set(li,xn,0,"YXZ")}const c=HA(),l=Jn(),u=gA(Ee?.events||[],Ne,l,js,100);if(Ke.update(Ne*(Ee?.manifest.tickDurationMs||700)/1e3,{progress:et?.progress||0,boredom:0,running:At,replay:!0,reducedMotion:yl,agents:l.map(d=>({...d,boredom:d.boredom==null?null:ur(d.boredom),regime:d.boredomSpectrum?.regime,state:c.get(d.id)?.atLab?"working":d.state,stationId:c.get(d.id)?.atTable?"culture":Sl({...d,state:"working",activity:"experimenting"}),discussionBrief:c.get(d.id)?.atTable?u.get(d.id)?.brief:void 0,discussionPeers:u.get(d.id)?.peers,ideaBrief:GS(js(d.lastIdea||d.lastQuestion||d.lastObservation||"")),position:c.get(d.id)}))}),vo&&!es&&l.length&&hu(),zs){const d=(s-wf)/(yl?300:2200);Ke.grow?.(Math.min(1,d)),d>=1&&(zs=!1,document.body.classList.remove("world-growing"))}const h=si;if(jt&&!oi()){o.getWorldDirection(r),r.y=0,r.normalize();const d=(Ke.agentPositions?.()||[]).map(g=>{const x=g.position.clone().sub(o.position);x.y=0;const p=x.length();return{id:g.id,distance:p,facing:p?x.normalize().dot(r):1}});si=EA(d,si)}else si="";Pi&&si!==Pi&&(Pi="");const f=fi?Lt:si===Pi?"":si;f!==Lt&&(Lt=f,bn=!1,Kn=""),h!==si&&!fi&&si&&(Pi=""),DA(),Tt.render(Ke.scene,o),im()};Ke=QS(),wf=performance.now(),zs=!0,document.body.classList.add("world-growing"),Ke.grow?.(0),Tt=new $S({antialias:!0,powerPreference:"high-performance"}),Tt.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),Tt.setSize(innerWidth,innerHeight),Tt.toneMapping=bl,Tt.toneMappingExposure=Ke.exposure??1,Tt.outputColorSpace=Ot,de("world").appendChild(Tt.domElement),Tt.domElement.tabIndex=0,Tt.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),Ke.camera.rotation.order="YXZ",sr=new HS(Ke.camera),na(!1),Tt.domElement.onclick=()=>{if(jt&&!oi()&&!It.open&&!fi)try{Tt.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},Tt.domElement.onpointerdown=s=>{oi()||(Ps=!0,ka={x:s.clientX,y:s.clientY},tr={x:s.clientX,y:s.clientY,canvas:s.target===Tt.domElement},jt||Tt.domElement.setPointerCapture(s.pointerId))},Tt.domElement.onpointermove=s=>{if(!Ps||document.pointerLockElement||oi())return;const a=s.clientX-ka.x,o=s.clientY-ka.y;jt?{yaw:xn,pitch:li}=il(xn,li,a,o):sr.dragBy(a,o),ka={x:s.clientX,y:s.clientY}},Tt.domElement.onpointercancel=()=>{Ps=!1,tr=null},window.addEventListener("pointerup",s=>{if(tr?.canvas&&Math.hypot(s.clientX-tr.x,s.clientY-tr.y)<8&&s.target===Tt.domElement&&!oi()){const a=Ke.camera;a.updateMatrixWorld();let o=null;for(const c of Ke.agentPositions?.()||[]){if(!Jn().some(g=>g.id===c.id))continue;const l=c.position.clone().add(new O(0,2.35,0));if(l.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;l.project(a);const h=(l.x+1)*innerWidth/2,f=(1-l.y)*innerHeight/2,d=Math.hypot(s.clientX-h,s.clientY-f);d<48&&(!o||d<o.distance)&&(o={id:c.id,distance:d})}o?Qp(o.id):(Lt="",fi=!1,bn=!1,Kn="")}tr=null,Ps=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&jt&&!oi()&&({yaw:xn,pitch:li}=il(xn,li,s.movementX,s.movementY))});const e=()=>{Ke.camera.aspect=innerWidth/innerHeight,Ke.camera.updateProjectionMatrix(),Tt.setSize(innerWidth,innerHeight)};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new O;du(),t(),de("loading").classList.add("loaded"),setTimeout(()=>de("loading").hidden=!0,380),lm()}catch(t){console.error(t),de("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
