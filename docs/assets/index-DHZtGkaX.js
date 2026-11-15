(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Yc="187",sg=0,Qu=1,ag=2,so=1,og=2,Fs=3,br=0,un=1,Ln=2,Jr=0,Gs=1,ed=2,td=3,nd=4,lg=5,Kr=100,cg=101,ug=102,dg=103,fg=104,hg=200,pg=201,mg=202,gg=203,dh=204,fh=205,_g=206,vg=207,xg=208,yg=209,Sg=210,bg=211,Mg=212,Eg=213,wg=214,Wl=0,Xl=1,Zl=2,Qs=3,ql=4,Yl=5,Kl=6,jl=7,hh=0,Tg=1,Ag=2,Si=0,ph=1,mh=2,gh=3,Kc=4,_h=5,vh=6,xh=7,yh=300,rs=301,ea=302,sl=303,al=304,Mo=1e3,vi=1001,Jl=1002,Zt=1003,Rg=1004,wa=1005,xn=1006,ol=1007,$i=1008,Tn=1009,Sh=1010,bh=1011,ta=1012,jc=1013,ni=1014,Bn=1015,ii=1016,Jc=1017,Qc=1018,ss=1020,Mh=35902,Eh=35899,wh=1021,Th=1022,jn=1023,Xi=1026,Hi=1027,eu=1028,tu=1029,Mr=1030,nu=1031,iu=1033,ao=33776,oo=33777,lo=33778,co=33779,Ql=35840,ec=35841,tc=35842,nc=35843,ic=36196,rc=37492,sc=37496,ac=37488,oc=37489,Eo=37490,lc=37491,cc=37808,uc=37809,dc=37810,fc=37811,hc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Sc=37820,bc=37821,Mc=36492,Ec=36494,wc=36495,Tc=36283,Ac=36284,wo=36285,Rc=36286,Cg=3200,Cc=0,Pg=1,zi="",Ot="srgb",To="srgb-linear",Ao="linear",dt="srgb",ll=7680,Ig=519,Lg=512,Ng=513,Dg=514,Ah=515,Ug=516,Og=517,Rh=518,Ch=519,Ph=35044,id="300 es",$n=2e3,na=2001;function Fg(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ro(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function kg(){const t=Ro("canvas");return t.style.display="block",t}const rd={};function Co(...t){const e="THREE."+t.shift();console.log(e,...t)}function Ih(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=Ih(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=Ih(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Qr(...t){const e=t.join(" ");e in rd||(rd[e]=!0,Be(...t))}function zg(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Bg={[Wl]:Wl,[Zl]:Kl,[ql]:ql,[Qs]:Yl,[Xl]:Xl,[Kl]:Zl,[jl]:jl,[Yl]:Qs};class Tr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sd=1234567;const Vs=Math.PI/180,ia=180/Math.PI;function Ki(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[t&255]+jt[t>>8&255]+jt[t>>16&255]+jt[t>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[n&63|128]+jt[n>>8&255]+"-"+jt[n>>16&255]+jt[n>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Je(t,e,n){return Math.max(e,Math.min(n,t))}function ru(t,e){return(t%e+e)%e}function $g(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Hg(t,e,n){return t!==e?(n-t)/(e-t):0}function Ws(t,e,n){return(1-n)*t+n*e}function Gg(t,e,n,i){return Ws(t,e,1-Math.exp(-n*i))}function Vg(t,e=1){return e-Math.abs(ru(t,e*2)-e)}function Wg(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Xg(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Zg(t,e){return t+Math.floor(Math.random()*(e-t+1))}function qg(t,e){return t+Math.random()*(e-t)}function Yg(t){return t*(.5-Math.random())}function Kg(t){t!==void 0&&(sd=t);let e=sd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jg(t){return t*Vs}function Jg(t){return t*ia}function Qg(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function e0(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Lh(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function t0(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*h,o*c);break;case"YXY":t.set(l*h,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*h,o*u,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Zo(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function su(t,e){if(e.constructor===Float32Array)return t;const n=Zo(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function au(t,e){if(e.constructor===Float32Array)return t;const n=Zo(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Rn={DEG2RAD:Vs,RAD2DEG:ia,generateUUID:Ki,clamp:Je,euclideanModulo:ru,mapLinear:$g,inverseLerp:Hg,lerp:Ws,damp:Gg,pingpong:Vg,smoothstep:Wg,smootherstep:Xg,randInt:Zg,randFloat:qg,randFloatSpread:Yg,seededRandom:Kg,degToRad:jg,radToDeg:Jg,isPowerOfTwo:Qg,ceilPowerOfTwo:e0,floorPowerOfTwo:Lh,setQuaternionFromProperEuler:t0,normalize:au,denormalize:su},Zu=class Zu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Zu.prototype.isVector2=!0;let We=Zu;class ds{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],g=s[a+2],x=s[a+3];if(f!==x||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*x;m<0&&(d=-d,h=-h,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){const _=Math.acos(m),w=Math.sin(_);p=Math.sin(p*_)/w,o=Math.sin(o*_)/w,l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+x*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+x*o;const _=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=_,c*=_,u*=_,f*=_}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-o*h,e[n+2]=c*g+u*h+o*d-l*f,e[n+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const qu=class qu{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ad.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cl.copy(this).projectOnVector(e),this.sub(cl)}reflect(e){return this.sub(cl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};qu.prototype.isVector3=!0;let F=qu;const cl=new F,ad=new ds,Yu=class Yu{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],x=r[0],m=r[3],p=r[6],_=r[1],w=r[4],S=r[7],T=r[2],A=r[5],v=r[8];return s[0]=a*x+o*_+l*T,s[3]=a*m+o*w+l*A,s[6]=a*p+o*S+l*v,s[1]=c*x+u*_+f*T,s[4]=c*m+u*w+f*A,s[7]=c*p+u*S+f*v,s[2]=d*x+h*_+g*T,s[5]=d*m+h*w+g*A,s[8]=d*p+h*S+g*v,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=f*x,e[1]=(r*c-u*i)*x,e[2]=(o*i-r*a)*x,e[3]=d*x,e[4]=(u*n-r*l)*x,e[5]=(r*s-o*n)*x,e[6]=h*x,e[7]=(i*l-c*n)*x,e[8]=(a*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Qr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ul.makeScale(e,n)),this}rotate(e){return Qr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ul.makeRotation(-e)),this}translate(e,n){return Qr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ul.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Yu.prototype.isMatrix3=!0;let Ge=Yu;const ul=new Ge,od=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ld=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n0(){const t={enabled:!0,workingColorSpace:To,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=es(r.r),r.g=es(r.g),r.b=es(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===zi?Ao:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[To]:{primaries:e,whitePoint:i,transfer:Ao,toXYZ:od,fromXYZ:ld,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:od,fromXYZ:ld,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),t}const tt=n0();function bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Nr;class i0{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Nr===void 0&&(Nr=Ro("canvas")),Nr.width=e.width,Nr.height=e.height;const r=Nr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Nr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ro("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=bi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bi(n[i]/255)*255):n[i]=bi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r0=0;class ou{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:r0++}),this.uuid=Ki(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(dl(r[a].image)):s.push(dl(r[a]))}else s=dl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function dl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?i0.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let s0=0;const fl=new F;class tn extends Tr{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=vi,r=vi,s=xn,a=$i,o=jn,l=Tn,c=tn.DEFAULT_ANISOTROPY,u=zi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s0++}),this.uuid=Ki(),this.name="",this.source=new ou(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(fl).x}get height(){return this.source.getSize(fl).y}get depth(){return this.source.getSize(fl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mo:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Jl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mo:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Jl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=yh;tn.DEFAULT_ANISOTROPY=1;const Ku=class Ku{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],x=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,S=(h+1)/2,T=(p+1)/2,A=(u+d)/4,v=(f+x)/4,b=(g+m)/4;return w>S&&w>T?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=A/i,s=v/i):S>T?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=b/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=v/s,r=b/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(d-u)*(d-u));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(f-x)/_,this.z=(d-u)/_,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Je(this.x,e.x,n.x),this.y=Je(this.y,e.y,n.y),this.z=Je(this.z,e.z,n.z),this.w=Je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Je(this.x,e,n),this.y=Je(this.y,e,n),this.z=Je(this.z,e,n),this.w=Je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ku.prototype.isVector4=!0;let Et=Ku;class a0 extends Tr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new tn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new ou(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends a0{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Nh extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o0 extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Xo=class Xo{constructor(e,n,i,r,s,a,o,l,c,u,f,d,h,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,x,m)}set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,x,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xo().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Dr.setFromMatrixColumn(e,0).length(),s=1/Dr.setFromMatrixColumn(e,1).length(),a=1/Dr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,x=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-x*c,n[9]=-o*l,n[2]=x-d*c,n[6]=g+h*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d+x*o,n[4]=g*o-h,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=x+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,x=c*f;n[0]=d-x*o,n[4]=-a*f,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=x-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,x=o*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+x,n[1]=l*f,n[5]=x*c+d,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,x=o*c;n[0]=l*u,n[4]=x-d*f,n[8]=g*f+h,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,x=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+x,n[5]=a*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=o*u,n[10]=x*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l0,e,c0)}lookAt(e,n,i){const r=this.elements;return bn.subVectors(e,n),bn.lengthSq()===0&&(bn.z=1),bn.normalize(),Ci.crossVectors(i,bn),Ci.lengthSq()===0&&(Math.abs(i.z)===1?bn.x+=1e-4:bn.z+=1e-4,bn.normalize(),Ci.crossVectors(i,bn)),Ci.normalize(),Ta.crossVectors(bn,Ci),r[0]=Ci.x,r[4]=Ta.x,r[8]=bn.x,r[1]=Ci.y,r[5]=Ta.y,r[9]=bn.y,r[2]=Ci.z,r[6]=Ta.z,r[10]=bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],x=i[6],m=i[10],p=i[14],_=i[3],w=i[7],S=i[11],T=i[15],A=r[0],v=r[4],b=r[8],k=r[12],N=r[1],O=r[5],B=r[9],Z=r[13],P=r[2],W=r[6],Q=r[10],V=r[14],pe=r[3],K=r[7],ae=r[11],de=r[15];return s[0]=a*A+o*N+l*P+c*pe,s[4]=a*v+o*O+l*W+c*K,s[8]=a*b+o*B+l*Q+c*ae,s[12]=a*k+o*Z+l*V+c*de,s[1]=u*A+f*N+d*P+h*pe,s[5]=u*v+f*O+d*W+h*K,s[9]=u*b+f*B+d*Q+h*ae,s[13]=u*k+f*Z+d*V+h*de,s[2]=g*A+x*N+m*P+p*pe,s[6]=g*v+x*O+m*W+p*K,s[10]=g*b+x*B+m*Q+p*ae,s[14]=g*k+x*Z+m*V+p*de,s[3]=_*A+w*N+S*P+T*pe,s[7]=_*v+w*O+S*W+T*K,s[11]=_*b+w*B+S*Q+T*ae,s[15]=_*k+w*Z+S*V+T*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],x=e[7],m=e[11],p=e[15],_=l*h-c*d,w=o*h-c*f,S=o*d-l*f,T=a*h-c*u,A=a*d-l*u,v=a*f-o*u;return n*(x*_-m*w+p*S)-i*(g*_-m*T+p*A)+r*(g*w-x*T+p*v)-s*(g*S-x*A+m*v)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],x=e[13],m=e[14],p=e[15],_=n*o-i*a,w=n*l-r*a,S=n*c-s*a,T=i*l-r*o,A=i*c-s*o,v=r*c-s*l,b=u*x-f*g,k=u*m-d*g,N=u*p-h*g,O=f*m-d*x,B=f*p-h*x,Z=d*p-h*m,P=_*Z-w*B+S*O+T*N-A*k+v*b;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/P;return e[0]=(o*Z-l*B+c*O)*W,e[1]=(r*B-i*Z-s*O)*W,e[2]=(x*v-m*A+p*T)*W,e[3]=(d*A-f*v-h*T)*W,e[4]=(l*N-a*Z-c*k)*W,e[5]=(n*Z-r*N+s*k)*W,e[6]=(m*S-g*v-p*w)*W,e[7]=(u*v-d*S+h*w)*W,e[8]=(a*B-o*N+c*b)*W,e[9]=(i*N-n*B-s*b)*W,e[10]=(g*A-x*S+p*_)*W,e[11]=(f*S-u*A-h*_)*W,e[12]=(o*k-a*O-l*b)*W,e[13]=(n*O-i*k+r*b)*W,e[14]=(x*w-g*T-m*_)*W,e[15]=(u*T-f*w+d*_)*W,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,x=a*u,m=a*f,p=o*f,_=l*c,w=l*u,S=l*f,T=i.x,A=i.y,v=i.z;return r[0]=(1-(x+p))*T,r[1]=(h+S)*T,r[2]=(g-w)*T,r[3]=0,r[4]=(h-S)*A,r[5]=(1-(d+p))*A,r[6]=(m+_)*A,r[7]=0,r[8]=(g+w)*v,r[9]=(m-_)*v,r[10]=(1-(d+x))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Dr.set(r[0],r[1],r[2]).length();const o=Dr.set(r[4],r[5],r[6]).length(),l=Dr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),On.copy(this);const c=1/a,u=1/o,f=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=u,On.elements[5]*=u,On.elements[6]*=u,On.elements[8]*=f,On.elements[9]*=f,On.elements[10]*=f,n.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=$n,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,x;if(l)g=s/(a-s),x=a*s/(a-s);else if(o===$n)g=-(a+s)/(a-s),x=-2*a*s/(a-s);else if(o===na)g=-a/(a-s),x=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=$n,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,x;if(l)g=1/(a-s),x=a/(a-s);else if(o===$n)g=-2/(a-s),x=-(a+s)/(a-s);else if(o===na)g=-1/(a-s),x=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Xo.prototype.isMatrix4=!0;let pt=Xo;const Dr=new F,On=new pt,l0=new F(0,0,0),c0=new F(1,1,1),Ci=new F,Ta=new F,bn=new F,cd=new pt,ud=new ds;class Hn{constructor(e=0,n=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return cd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(cd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ud.setFromEuler(this),this.setFromQuaternion(ud,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Dh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u0=0;const dd=new F,Ur=new ds,ci=new pt,Aa=new F,Ss=new F,d0=new F,f0=new ds,fd=new F(1,0,0),hd=new F(0,1,0),pd=new F(0,0,1),md={type:"added"},h0={type:"removed"},Or={type:"childadded",child:null},hl={type:"childremoved",child:null};class Gt extends Tr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new F,n=new Hn,i=new ds,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.multiply(Ur),this}rotateOnWorldAxis(e,n){return Ur.setFromAxisAngle(e,n),this.quaternion.premultiply(Ur),this}rotateX(e){return this.rotateOnAxis(fd,e)}rotateY(e){return this.rotateOnAxis(hd,e)}rotateZ(e){return this.rotateOnAxis(pd,e)}translateOnAxis(e,n){return dd.copy(e).applyQuaternion(this.quaternion),this.position.add(dd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(fd,e)}translateY(e){return this.translateOnAxis(hd,e)}translateZ(e){return this.translateOnAxis(pd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Aa.copy(e):Aa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Ss.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ss,Aa,this.up):ci.lookAt(Aa,Ss,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Ur.setFromRotationMatrix(ci),this.quaternion.premultiply(Ur.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(md),Or.child=e,this.dispatchEvent(Or),Or.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(h0),hl.child=e,this.dispatchEvent(hl),hl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(md),Or.child=e,this.dispatchEvent(Or),Or.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,e,d0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ss,f0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gt.DEFAULT_UP=new F(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Yn extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p0={type:"move"};class pl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),p=this._getHandJoint(c,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pi={h:0,s:0,l:0},Ra={h:0,s:0,l:0};function ml(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=tt.workingColorSpace){return this.r=e,this.g=n,this.b=i,tt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=tt.workingColorSpace){if(e=ru(e,1),n=Je(n,0,1),i=Je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ml(a,s,e+1/3),this.g=ml(a,s,e),this.b=ml(a,s,e-1/3)}return tt.colorSpaceToWorking(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=Uh[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return tt.workingToColorSpace(Jt.copy(this),e),Math.round(Je(Jt.r*255,0,255))*65536+Math.round(Je(Jt.g*255,0,255))*256+Math.round(Je(Jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=tt.workingColorSpace){tt.workingToColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=tt.workingColorSpace){return tt.workingToColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=Ot){tt.workingToColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Pi),this.setHSL(Pi.h+e,Pi.s+n,Pi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Pi),e.getHSL(Ra);const i=Ws(Pi.h,Ra.h,n),r=Ws(Pi.s,Ra.s,n),s=Ws(Pi.l,Ra.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new Ze;Ze.NAMES=Uh;class lu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=n,this.far=i}clone(){return new lu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class m0 extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Fn=new F,ui=new F,gl=new F,di=new F,Fr=new F,kr=new F,gd=new F,_l=new F,vl=new F,xl=new F,yl=new Et,Sl=new Et,bl=new Et;class Nn{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Fn.subVectors(e,n),r.cross(Fn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Fn.subVectors(r,n),ui.subVectors(i,n),gl.subVectors(e,n);const a=Fn.dot(Fn),o=Fn.dot(ui),l=Fn.dot(gl),c=ui.dot(ui),u=ui.dot(gl),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,di)===null?!1:di.x>=0&&di.y>=0&&di.x+di.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,di)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,di.x),l.addScaledVector(a,di.y),l.addScaledVector(o,di.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return yl.setScalar(0),Sl.setScalar(0),bl.setScalar(0),yl.fromBufferAttribute(e,n),Sl.fromBufferAttribute(e,i),bl.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(yl,s.x),a.addScaledVector(Sl,s.y),a.addScaledVector(bl,s.z),a}static isFrontFacing(e,n,i,r){return Fn.subVectors(i,n),ui.subVectors(e,n),Fn.cross(ui).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Fn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Nn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Nn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Nn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Nn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Nn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Fr.subVectors(r,i),kr.subVectors(s,i),_l.subVectors(e,i);const l=Fr.dot(_l),c=kr.dot(_l);if(l<=0&&c<=0)return n.copy(i);vl.subVectors(e,r);const u=Fr.dot(vl),f=kr.dot(vl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(Fr,a);xl.subVectors(e,s);const h=Fr.dot(xl),g=kr.dot(xl);if(g>=0&&h<=g)return n.copy(s);const x=h*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(kr,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return gd.subVectors(s,r),o=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(gd,o);const p=1/(m+x+d);return a=x*p,o=d*p,n.copy(i).addScaledVector(Fr,a).addScaledVector(kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Ar{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,kn):kn.fromBufferAttribute(s,a),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bs),Pa.subVectors(this.max,bs),zr.subVectors(e.a,bs),Br.subVectors(e.b,bs),$r.subVectors(e.c,bs),Ii.subVectors(Br,zr),Li.subVectors($r,Br),ar.subVectors(zr,$r);let n=[0,-Ii.z,Ii.y,0,-Li.z,Li.y,0,-ar.z,ar.y,Ii.z,0,-Ii.x,Li.z,0,-Li.x,ar.z,0,-ar.x,-Ii.y,Ii.x,0,-Li.y,Li.x,0,-ar.y,ar.x,0];return!Ml(n,zr,Br,$r,Pa)||(n=[1,0,0,0,1,0,0,0,1],!Ml(n,zr,Br,$r,Pa))?!1:(Ia.crossVectors(Ii,Li),n=[Ia.x,Ia.y,Ia.z],Ml(n,zr,Br,$r,Pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const fi=[new F,new F,new F,new F,new F,new F,new F,new F],kn=new F,Ca=new Ar,zr=new F,Br=new F,$r=new F,Ii=new F,Li=new F,ar=new F,bs=new F,Pa=new F,Ia=new F,or=new F;function Ml(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){or.fromArray(t,s);const o=r.x*Math.abs(or.x)+r.y*Math.abs(or.y)+r.z*Math.abs(or.z),l=e.dot(or),c=n.dot(or),u=i.dot(or);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pt=new F,La=new We;let g0=0;class Mi extends Tr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ph,this.updateRanges=[],this.gpuType=Bn,this.version=0,this._normalizationScale=e!==void 0?Zo(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)La.fromBufferAttribute(this,n),La.applyMatrix3(e),this.setXY(n,La.x,La.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):su(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):au(e,this.array)}}class Oh extends Mi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Fh extends Mi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Vt extends Mi{constructor(e,n,i){super(new Float32Array(e),n,i)}}const _0=new Ar,Ms=new F,El=new F;class ma{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ms.subVectors(e,this.center);const n=Ms.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Ms,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ms.copy(e.center).add(El)),this.expandByPoint(Ms.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let v0=0;const Cn=new pt,wl=new Gt,Hr=new F,Mn=new Ar,Es=new Ar,Ht=new F;class Vn extends Tr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:v0++}),this.uuid=Ki(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Fg(e)?Fh:Oh)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Cn.makeRotationFromQuaternion(e),this.applyMatrix4(Cn),this}rotateX(e){return Cn.makeRotationX(e),this.applyMatrix4(Cn),this}rotateY(e){return Cn.makeRotationY(e),this.applyMatrix4(Cn),this}rotateZ(e){return Cn.makeRotationZ(e),this.applyMatrix4(Cn),this}translate(e,n,i){return Cn.makeTranslation(e,n,i),this.applyMatrix4(Cn),this}scale(e,n,i){return Cn.makeScale(e,n,i),this.applyMatrix4(Cn),this}lookAt(e){return wl.lookAt(e),wl.updateMatrix(),this.applyMatrix4(wl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Vt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ar);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Ht.addVectors(Mn.min,Es.min),Mn.expandByPoint(Ht),Ht.addVectors(Mn.max,Es.max),Mn.expandByPoint(Ht)):(Mn.expandByPoint(Es.min),Mn.expandByPoint(Es.max))}Mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ht.fromBufferAttribute(o,c),l&&(Hr.fromBufferAttribute(e,c),Ht.add(Hr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Mi(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new F,l[k]=new F;const u=new F,f=new F,d=new F,h=new We,g=new We,x=new We,m=new F,p=new F;function _(k,N,O){c[k]=c[N]=c[O]=1,u.fromBufferAttribute(i,k),f.fromBufferAttribute(i,N),d.fromBufferAttribute(i,O),h.fromBufferAttribute(s,k),g.fromBufferAttribute(s,N),x.fromBufferAttribute(s,O),f.sub(u),d.sub(u),g.sub(h),x.sub(h);const B=1/(g.x*x.y-x.x*g.y);isFinite(B)&&(m.copy(f).multiplyScalar(x.y).addScaledVector(d,-g.y).multiplyScalar(B),p.copy(d).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(B),o[k].add(m),o[N].add(m),o[O].add(m),l[k].add(p),l[N].add(p),l[O].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let k=0,N=w.length;k<N;++k){const O=w[k],B=O.start,Z=O.count;for(let P=B,W=B+Z;P<W;P+=3)_(e.getX(P+0),e.getX(P+1),e.getX(P+2))}const S=new F,T=new F,A=new F,v=new F;function b(k){A.fromBufferAttribute(r,k),v.copy(A);const N=o[k];S.copy(N),S.sub(A.multiplyScalar(A.dot(N))).normalize(),T.crossVectors(v,N);const B=T.dot(l[k])<0?-1:1;a.setXYZW(k,S.x,S.y,S.z,B)}for(let k=0,N=i.count;k<N;++k)c[k]&&b(k);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,u=new F,f=new F;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),a.fromBufferAttribute(n,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?h=l[x]*o.data.stride+o.offset:h=l[x]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Mi(d,u,f)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class x0{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Ph,this.updateRanges=[],this.version=0,this.uuid=Ki()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=_d(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=_d(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function _d(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Ki()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const sn=new F;class Po{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Zo(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Co("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Mi(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Po(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Co("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):su(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):au(e,this.data.array)}}const Tl=new F,y0=new F,S0=new Ge;class Fi{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Tl.subVectors(i,n).cross(y0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Tl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||S0.getNormalMatrix(e),r=this.coplanarPoint(Tl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let b0=0;class fs extends Tr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:b0++}),this.uuid=Ki(),this.name="",this.type="Material",this.blending=Gs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=fh,this.blendEquation=Kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ll,this.stencilZFail=ll,this.stencilZPass=ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Fi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class uo extends fs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Gr;const ws=new F,Vr=new F,Wr=new F,Xr=new We,Ts=new We,kh=new pt,Na=new F,As=new F,Da=new F,vd=new We,Al=new We,xd=new We;class Rl extends Gt{constructor(e=new uo){if(super(),this.isSprite=!0,this.type="Sprite",Gr===void 0){Gr=new Vn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new x0(n,5);Gr.setIndex([0,1,2,0,2,3]),Gr.setAttribute("position",new Po(i,3,0,!1)),Gr.setAttribute("uv",new Po(i,2,3,!1))}this.geometry=Gr,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),kh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Wr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Wr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ua(Na.set(-.5,-.5,0),Wr,a,Vr,r,s),Ua(As.set(.5,-.5,0),Wr,a,Vr,r,s),Ua(Da.set(.5,.5,0),Wr,a,Vr,r,s),vd.set(0,0),Al.set(1,0),xd.set(1,1);let o=e.ray.intersectTriangle(Na,As,Da,!1,ws);if(o===null&&(Ua(As.set(-.5,.5,0),Wr,a,Vr,r,s),Al.set(0,1),o=e.ray.intersectTriangle(Na,Da,As,!1,ws),o===null))return;const l=e.ray.origin.distanceTo(ws);l<e.near||l>e.far||n.push({distance:l,point:ws.clone(),uv:Nn.getInterpolation(ws,Na,As,Da,vd,Al,xd,new We),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function Ua(t,e,n,i,r,s){Xr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Ts.x=s*Xr.x-r*Xr.y,Ts.y=r*Xr.x+s*Xr.y):Ts.copy(Xr),t.copy(e),t.x+=Ts.x,t.y+=Ts.y,t.applyMatrix4(kh)}const hi=new F,Cl=new F,Oa=new F,Fa=new F;class M0{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Cl.copy(e).add(n).multiplyScalar(.5),Oa.copy(n).sub(e).normalize(),Fa.copy(this.origin).sub(Cl);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Oa),o=Fa.dot(this.direction),l=-Fa.dot(Oa),c=Fa.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const x=1/u;f*=x,d*=x,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Cl).addScaledVector(Oa,d),h}intersectSphere(e,n){if(e.radius<0)return null;hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,g=n.x-a.x,x=n.y-a.y,m=n.z-a.z,p=i.x-a.x,_=i.y-a.y,w=i.z-a.z,S=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let v,b,k,N,O,B,Z,P,W,Q,V,pe;if(S>=T&&S>=A?(k=l,B=f,W=g,pe=p,l>=0?(v=c,b=u,N=d,O=h,Z=x,P=m,Q=_,V=w):(v=u,b=c,N=h,O=d,Z=m,P=x,Q=w,V=_)):T>=A?(k=c,B=d,W=x,pe=_,c>=0?(v=u,b=l,N=h,O=f,Z=m,P=g,Q=w,V=p):(v=l,b=u,N=f,O=h,Z=g,P=m,Q=p,V=w)):(k=u,B=h,W=m,pe=w,u>=0?(v=l,b=c,N=f,O=d,Z=g,P=x,Q=p,V=_):(v=c,b=l,N=d,O=f,Z=x,P=g,Q=_,V=p)),k===0)return null;const K=v/k,ae=b/k,de=1/k,Ie=N-K*B,$e=O-ae*B,se=Z-K*W,xe=P-ae*W,Re=Q-K*pe,Oe=V-ae*pe,Ee=Re*xe-Oe*se,He=Ie*Oe-$e*Re,vt=se*$e-xe*Ie;if(r){if(Ee<0||He<0||vt<0)return null}else if((Ee<0||He<0||vt<0)&&(Ee>0||He>0||vt>0))return null;const ke=Ee+He+vt;if(ke===0)return null;const ot=de*(Ee*B+He*W+vt*pe);return(ke>0?ot<0:ot>0)?null:this.at(ot/ke,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fr extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const yd=new pt,lr=new M0,ka=new ma,Sd=new F,za=new F,Ba=new F,$a=new F,Pl=new F,Ha=new F,bd=new F,Ga=new F;class _t extends Gt{constructor(e=new Vn,n=new fr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Ha.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Pl.fromBufferAttribute(f,e),a?Ha.addScaledVector(Pl,u):Ha.addScaledVector(Pl.sub(n),u))}n.add(Ha)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),lr.copy(e.ray).recast(e.near),!(ka.containsPoint(lr.origin)===!1&&(lr.intersectSphere(ka,Sd)===null||lr.origin.distanceToSquared(Sd)>(e.far-e.near)**2))&&(yd.copy(s).invert(),lr.copy(e.ray).applyMatrix4(yd),!(i.boundingBox!==null&&lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,lr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,h.start),w=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,T=w;S<T;S+=3){const A=o.getX(S),v=o.getX(S+1),b=o.getX(S+2);r=Va(this,p,e,i,c,u,f,A,v,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(o.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const _=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);r=Va(this,a,e,i,c,u,f,_,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=a[m.materialIndex],_=Math.max(m.start,h.start),w=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=_,T=w;S<T;S+=3){const A=S,v=S+1,b=S+2;r=Va(this,p,e,i,c,u,f,A,v,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),x=Math.min(l.count,h.start+h.count);for(let m=g,p=x;m<p;m+=3){const _=m,w=m+1,S=m+2;r=Va(this,a,e,i,c,u,f,_,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function E0(t,e,n,i,r,s,a,o){let l;if(e.side===un?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===br,o),l===null)return null;Ga.copy(o),Ga.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ga);return c<n.near||c>n.far?null:{distance:c,point:Ga.clone(),object:t}}function Va(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,za),t.getVertexPosition(l,Ba),t.getVertexPosition(c,$a);const u=E0(t,e,n,i,za,Ba,$a,bd);if(u){const f=new F;Nn.getBarycoord(bd,za,Ba,$a,f),r&&(u.uv=Nn.getInterpolatedAttribute(r,o,l,c,f,new We)),s&&(u.uv1=Nn.getInterpolatedAttribute(s,o,l,c,f,new We)),a&&(u.normal=Nn.getInterpolatedAttribute(a,o,l,c,f,new F),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new F,materialIndex:0};Nn.getNormal(za,Ba,$a,d.normal),u.face=d,u.barycoord=f}return u}class zh extends tn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Zt,u=Zt,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Md extends Mi{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Zr=new pt,Ed=new pt,Wa=[],wd=new Ar,w0=new pt,Rs=new _t,Cs=new ma;class T0 extends _t{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Md(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,w0)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Ar),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Zr),wd.copy(e.boundingBox).applyMatrix4(Zr),this.boundingBox.union(wd)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new ma),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Zr),Cs.copy(e.boundingSphere).applyMatrix4(Zr),this.boundingSphere.union(Cs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cs.copy(this.boundingSphere),Cs.applyMatrix4(i),e.ray.intersectsSphere(Cs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Zr),Ed.multiplyMatrices(i,Zr),Rs.matrixWorld=Ed,Rs.raycast(e,Wa);for(let a=0,o=Wa.length;a<o;a++){const l=Wa[a];l.instanceId=s,l.object=this,n.push(l)}Wa.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Md(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new zh(new Float32Array(r*this.count),r,this.count,eu,Bn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cr=new ma,A0=new We(.5,.5),Xa=new F;class ra{constructor(e=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi,a=new Fi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=$n,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],x=s[9],m=s[10],p=s[11],_=s[12],w=s[13],S=s[14],T=s[15];if(r[0].setComponents(c-a,h-u,p-g,T-_).normalize(),r[1].setComponents(c+a,h+u,p+g,T+_).normalize(),r[2].setComponents(c+o,h+f,p+x,T+w).normalize(),r[3].setComponents(c-o,h-f,p-x,T-w).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,h-d,p-m,T-S).normalize();else if(r[4].setComponents(c-l,h-d,p-m,T-S).normalize(),n===$n)r[5].setComponents(c+l,h+d,p+m,T+S).normalize();else if(n===na)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cr)}intersectsSprite(e){cr.center.set(0,0,0);const n=A0.distanceTo(e.center);return cr.radius=.7071067811865476+n,cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Xa.x=r.normal.x>0?e.max.x:e.min.x,Xa.y=r.normal.y>0?e.max.y:e.min.y,Xa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Xa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Td=new pt;class cu{constructor(){this.coordinateSystem=$n,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Td.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new ra),i[r].setFromProjectionMatrix(Td,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new ra),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new cu().copy(this)}}class Bh extends tn{constructor(e=[],n=rs,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ur extends tn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class as extends tn{constructor(e,n,i=ni,r,s,a,o=Zt,l=Zt,c,u=Xi,f=1){if(u!==Xi&&u!==Hi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ou(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class $h extends as{constructor(e,n=ni,i=rs,r,s,a=Zt,o=Zt,l,c=Xi){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hh extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rr extends Vn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2));function g(x,m,p,_,w,S,T,A,v,b,k){const N=S/v,O=T/b,B=S/2,Z=T/2,P=A/2,W=v+1,Q=b+1;let V=0,pe=0;const K=new F;for(let ae=0;ae<Q;ae++){const de=ae*O-Z;for(let Ie=0;Ie<W;Ie++){const $e=Ie*N-B;K[x]=$e*_,K[m]=de*w,K[p]=P,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[p]=A>0?1:-1,u.push(K.x,K.y,K.z),f.push(Ie/v),f.push(1-ae/b),V+=1}}for(let ae=0;ae<b;ae++)for(let de=0;de<v;de++){const Ie=d+de+W*ae,$e=d+de+W*(ae+1),se=d+(de+1)+W*(ae+1),xe=d+(de+1)+W*ae;l.push(Ie,$e,xe),l.push($e,se,xe),pe+=6}o.addGroup(h,pe,k),h+=pe,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class sa extends Vn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const x=[],m=i/2;let p=0;_(),a===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Vt(f,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(h,2));function _(){const S=new F,T=new F;let A=0;const v=(n-e)/i;for(let b=0;b<=s;b++){const k=[],N=b/s,O=N*(n-e)+e;for(let B=0;B<=r;B++){const Z=B/r,P=Z*l+o,W=Math.sin(P),Q=Math.cos(P);T.x=O*W,T.y=-N*i+m,T.z=O*Q,f.push(T.x,T.y,T.z),S.set(W,v,Q).normalize(),d.push(S.x,S.y,S.z),h.push(Z,1-N),k.push(g++)}x.push(k)}for(let b=0;b<r;b++)for(let k=0;k<s;k++){const N=x[k][b],O=x[k+1][b],B=x[k+1][b+1],Z=x[k][b+1];(e>0||k!==0)&&(u.push(N,O,Z),A+=3),(n>0||k!==s-1)&&(u.push(O,B,Z),A+=3)}c.addGroup(p,A,0),p+=A}function w(S){const T=g,A=new We,v=new F;let b=0;const k=S===!0?e:n,N=S===!0?1:-1;for(let B=1;B<=r;B++)f.push(0,m*N,0),d.push(0,N,0),h.push(.5,.5),g++;const O=g;for(let B=0;B<=r;B++){const P=B/r*l+o,W=Math.cos(P),Q=Math.sin(P);v.x=k*Q,v.y=m*N,v.z=k*W,f.push(v.x,v.y,v.z),d.push(0,N,0),A.x=W*.5+.5,A.y=Q*.5*N+.5,h.push(A.x,A.y),g++}for(let B=0;B<r;B++){const Z=T+B,P=O+B;S===!0?u.push(P,P+1,Z):u.push(P+1,P,Z),b+=3}c.addGroup(p,b,S===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uu extends sa{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new uu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class gr extends Vn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,h=[],g=[],x=[],m=[];for(let p=0;p<u;p++){const _=p*d-a;for(let w=0;w<c;w++){const S=w*f-s;g.push(S,-_,0),x.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<o;_++){const w=_+c*p,S=_+c*(p+1),T=_+1+c*(p+1),A=_+1+c*p;h.push(w,S,A),h.push(S,T,A)}this.setIndex(h),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gr(e.width,e.height,e.widthSegments,e.heightSegments)}}class du extends Vn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new F,d=new F,h=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const _=[],w=p/i,S=a+w*o,T=e*Math.cos(S),A=Math.sqrt(e*e-T*T);let v=0;p===0&&a===0?v=.5/n:p===i&&l===Math.PI&&(v=-.5/n);for(let b=0;b<=n;b++){const k=b/n,N=r+k*s;f.x=-A*Math.cos(N),f.y=T,f.z=A*Math.sin(N),g.push(f.x,f.y,f.z),d.copy(f).normalize(),x.push(d.x,d.y,d.z),m.push(k+v,1-w),_.push(c++)}u.push(_)}for(let p=0;p<i;p++)for(let _=0;_<n;_++){const w=u[p][_+1],S=u[p][_],T=u[p+1][_],A=u[p+1][_+1];(p!==0||a>0)&&h.push(w,S,A),(p!==i-1||l<Math.PI)&&h.push(S,T,A)}this.setIndex(h),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(x,3)),this.setAttribute("uv",new Vt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new du(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xs extends Vn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],f=[],d=new F,h=new F,g=new F;for(let x=0;x<=i;x++){const m=a+x/i*o;for(let p=0;p<=r;p++){const _=p/r*s;h.x=(e+n*Math.cos(m))*Math.cos(_),h.y=(e+n*Math.cos(m))*Math.sin(_),h.z=n*Math.sin(m),c.push(h.x,h.y,h.z),d.x=e*Math.cos(_),d.y=e*Math.sin(_),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(p/r),f.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=r;m++){const p=(r+1)*x+m-1,_=(r+1)*(x-1)+m-1,w=(r+1)*(x-1)+m,S=(r+1)*x+m;l.push(p,_,S),l.push(_,w,S)}this.setIndex(l),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(u,3)),this.setAttribute("uv",new Vt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Ad(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Ad(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function ln(t){const e={};for(let n=0;n<t.length;n++){const i=os(t[n]);for(const r in i)e[r]=i[r]}return e}function Ad(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function R0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const C0={clone:os,merge:ln};var P0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,I0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Er extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=P0,this.fragmentShader=I0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=os(e.uniforms),this.uniformsGroups=R0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new We().fromArray(r.value);break;case"v3":this.uniforms[i].value=new F().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class L0 extends Er{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class fo extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cc,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class N0 extends fo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Qr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Qr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class D0 extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Cg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U0 extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Vh extends Gt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class O0 extends Vh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Il=new pt,Rd=new F,Cd=new F;class F0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ra,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Rd.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rd),Cd.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Cd),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Il,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===na||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Il)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Za=new F,qa=new ds,Xn=new F;class Wh extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=$n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Za,qa,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,qa,Xn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Za,qa,Xn),Xn.x===1&&Xn.y===1&&Xn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Za,qa,Xn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ni=new F,Pd=new We,Id=new We;class zn extends Wh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Vs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan(Vs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z),Ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ni.x,Ni.y).multiplyScalar(-e/Ni.z)}getViewSize(e,n){return this.getViewBounds(e,Pd,Id),n.subVectors(Id,Pd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Vs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Xh extends Wh{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class k0 extends F0{constructor(){super(new Xh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ld extends Vh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new k0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const qr=-90,Yr=1;class Pc extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new zn(qr,Yr,e,n);r.layers=this.layers,this.add(r);const s=new zn(qr,Yr,e,n);s.layers=this.layers,this.add(s);const a=new zn(qr,Yr,e,n);a.layers=this.layers,this.add(a);const o=new zn(qr,Yr,e,n);o.layers=this.layers,this.add(o);const l=new zn(qr,Yr,e,n);l.layers=this.layers,this.add(l);const c=new zn(qr,Yr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===na)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=x,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class z0 extends zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Nd(t,e,n,i){const r=B0(i);switch(n){case wh:return t*e;case eu:return t*e/r.components*r.byteLength;case tu:return t*e/r.components*r.byteLength;case Mr:return t*e*2/r.components*r.byteLength;case nu:return t*e*2/r.components*r.byteLength;case Th:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case iu:return t*e*4/r.components*r.byteLength;case ao:case oo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case lo:case co:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ec:case nc:return Math.max(t,16)*Math.max(e,8)/4;case Ql:case tc:return Math.max(t,8)*Math.max(e,8)/2;case ic:case rc:case ac:case oc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sc:case Eo:case lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case dc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bc:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Mc:case Ec:case wc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Tc:case Ac:return Math.ceil(t/4)*Math.ceil(e/4)*8;case wo:case Rc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function B0(t){switch(t){case Tn:case Sh:return{byteLength:1,components:1};case ta:case bh:case ii:return{byteLength:2,components:1};case Jc:case Qc:return{byteLength:2,components:4};case ni:case jc:case Bn:return{byteLength:4,components:1};case Mh:case Eh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yc}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yc);function Zh(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $0(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],x=f[h];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,f[d]=x)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const x=f[h];t.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var H0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G0=`#ifdef USE_ALPHAHASH
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
#endif`,V0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Z0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q0=`#ifdef USE_AOMAP
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
#endif`,Y0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K0=`#ifdef USE_BATCHING
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
#endif`,j0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Q0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t_=`#ifdef USE_IRIDESCENCE
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
#endif`,n_=`#ifdef USE_BUMPMAP
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
#endif`,i_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,r_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,s_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,a_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,o_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,l_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,c_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,u_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,d_=`#define PI 3.141592653589793
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
} // validated`,f_=`vec3 transformedNormal = objectNormal;
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
#endif`,h_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,p_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,m_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,g_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,__="gl_FragColor = linearToOutputTexel( gl_FragColor );",v_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,x_=`#ifdef USE_ENVMAP
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
#endif`,y_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,S_=`#ifdef USE_ENVMAP
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
#endif`,b_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,M_=`#ifdef USE_ENVMAP
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
#endif`,E_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,w_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,T_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,A_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,R_=`#ifdef USE_GRADIENTMAP
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
}`,C_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,P_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,L_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,N_=`#ifdef USE_ENVMAP
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
#endif`,D_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,U_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,F_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k_=`PhysicalMaterial material;
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
#endif`,z_=`uniform sampler2D dfgLUT;
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
}`,B_=`
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
#endif`,$_=`#if defined( RE_IndirectDiffuse )
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
#endif`,H_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,G_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,V_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,W_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,X_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,q_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Y_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,j_=`#if defined( USE_POINTS_UV )
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
#endif`,J_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ev=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tv=`#if defined( USE_MORPHCOLORS )
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
#endif`,nv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iv=`#ifdef USE_MORPHTARGETS
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
#endif`,rv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,av=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uv=`#ifdef USE_NORMALMAP
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
#endif`,dv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_v=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,bv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ev=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tv=`float getShadowMask() {
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
}`,Av=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rv=`#ifdef USE_SKINNING
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
#endif`,Cv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pv=`#ifdef USE_SKINNING
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
#endif`,Iv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Uv=`#ifdef USE_TRANSMISSION
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
#endif`,Ov=`#ifdef USE_TRANSMISSION
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
#endif`,Fv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $v=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hv=`uniform sampler2D t2D;
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
}`,Gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vv=`uniform float backgroundBlurriness;
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
}`,Wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zv=`#include <common>
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
}`,qv=`#if DEPTH_PACKING == 3200
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
}`,Yv=`#define DISTANCE
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
}`,Kv=`#define DISTANCE
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`uniform float scale;
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
}`,ex=`uniform vec3 diffuse;
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
}`,tx=`#include <common>
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
}`,nx=`uniform vec3 diffuse;
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
}`,ix=`#define LAMBERT
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
}`,rx=`#define LAMBERT
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
}`,sx=`#define MATCAP
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
}`,ax=`#define MATCAP
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
}`,ox=`#define NORMAL
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
}`,lx=`#define NORMAL
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
}`,cx=`#define PHONG
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
}`,ux=`#define PHONG
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
}`,dx=`#define STANDARD
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
}`,fx=`#define STANDARD
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
}`,hx=`#define TOON
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
}`,px=`#define TOON
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
}`,mx=`uniform float size;
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
}`,gx=`uniform vec3 diffuse;
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
}`,_x=`#include <common>
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
}`,vx=`uniform vec3 color;
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
}`,xx=`uniform float rotation;
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
}`,yx=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:H0,alphahash_pars_fragment:G0,alphamap_fragment:V0,alphamap_pars_fragment:W0,alphatest_fragment:X0,alphatest_pars_fragment:Z0,aomap_fragment:q0,aomap_pars_fragment:Y0,batching_pars_vertex:K0,batching_vertex:j0,begin_vertex:J0,beginnormal_vertex:Q0,bsdfs:e_,iridescence_fragment:t_,bumpmap_pars_fragment:n_,clipping_planes_fragment:i_,clipping_planes_pars_fragment:r_,clipping_planes_pars_vertex:s_,clipping_planes_vertex:a_,color_fragment:o_,color_pars_fragment:l_,color_pars_vertex:c_,color_vertex:u_,common:d_,defaultnormal_vertex:f_,displacementmap_pars_vertex:h_,displacementmap_vertex:p_,emissivemap_fragment:m_,emissivemap_pars_fragment:g_,colorspace_fragment:__,colorspace_pars_fragment:v_,envmap_fragment:x_,envmap_common_pars_fragment:y_,envmap_pars_fragment:S_,envmap_pars_vertex:b_,envmap_physical_pars_fragment:N_,envmap_vertex:M_,fog_vertex:E_,fog_pars_vertex:w_,fog_fragment:T_,fog_pars_fragment:A_,gradientmap_pars_fragment:R_,lightmap_pars_fragment:C_,lights_lambert_fragment:P_,lights_lambert_pars_fragment:I_,lights_pars_begin:L_,lights_toon_fragment:D_,lights_toon_pars_fragment:U_,lights_phong_fragment:O_,lights_phong_pars_fragment:F_,lights_physical_fragment:k_,lights_physical_pars_fragment:z_,lights_fragment_begin:B_,lights_fragment_maps:$_,lights_fragment_end:H_,lightprobes_pars_fragment:G_,logdepthbuf_fragment:V_,logdepthbuf_pars_fragment:W_,logdepthbuf_pars_vertex:X_,logdepthbuf_vertex:Z_,map_fragment:q_,map_pars_fragment:Y_,map_particle_fragment:K_,map_particle_pars_fragment:j_,metalnessmap_fragment:J_,metalnessmap_pars_fragment:Q_,morphinstance_vertex:ev,morphcolor_vertex:tv,morphnormal_vertex:nv,morphtarget_pars_vertex:iv,morphtarget_vertex:rv,normal_fragment_begin:sv,normal_fragment_maps:av,normal_pars_fragment:ov,normal_pars_vertex:lv,normal_vertex:cv,normalmap_pars_fragment:uv,clearcoat_normal_fragment_begin:dv,clearcoat_normal_fragment_maps:fv,clearcoat_pars_fragment:hv,iridescence_pars_fragment:pv,opaque_fragment:mv,packing:gv,premultiplied_alpha_fragment:_v,project_vertex:vv,dithering_fragment:xv,dithering_pars_fragment:yv,roughnessmap_fragment:Sv,roughnessmap_pars_fragment:bv,shadowmap_pars_fragment:Mv,shadowmap_pars_vertex:Ev,shadowmap_vertex:wv,shadowmask_pars_fragment:Tv,skinbase_vertex:Av,skinning_pars_vertex:Rv,skinning_vertex:Cv,skinnormal_vertex:Pv,specularmap_fragment:Iv,specularmap_pars_fragment:Lv,tonemapping_fragment:Nv,tonemapping_pars_fragment:Dv,transmission_fragment:Uv,transmission_pars_fragment:Ov,uv_pars_fragment:Fv,uv_pars_vertex:kv,uv_vertex:zv,worldpos_vertex:Bv,background_vert:$v,background_frag:Hv,backgroundCube_vert:Gv,backgroundCube_frag:Vv,cube_vert:Wv,cube_frag:Xv,depth_vert:Zv,depth_frag:qv,distance_vert:Yv,distance_frag:Kv,equirect_vert:jv,equirect_frag:Jv,linedashed_vert:Qv,linedashed_frag:ex,meshbasic_vert:tx,meshbasic_frag:nx,meshlambert_vert:ix,meshlambert_frag:rx,meshmatcap_vert:sx,meshmatcap_frag:ax,meshnormal_vert:ox,meshnormal_frag:lx,meshphong_vert:cx,meshphong_frag:ux,meshphysical_vert:dx,meshphysical_frag:fx,meshtoon_vert:hx,meshtoon_frag:px,points_vert:mx,points_frag:gx,shadow_vert:_x,shadow_frag:vx,sprite_vert:xx,sprite_frag:yx},we={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Kn={basic:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:ln([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:ln([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:ln([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:ln([we.points,we.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:ln([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:ln([we.common,we.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:ln([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:ln([we.sprite,we.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:ln([we.common,we.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:ln([we.lights,we.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Kn.physical={uniforms:ln([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Ya={r:0,b:0,g:0},Sx=new pt,qh=new Ge;qh.set(-1,0,0,0,1,0,0,0,1);function bx(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function h(_){let w=_.isScene===!0?_.background:null;if(w&&w.isTexture){const S=_.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(_){let w=!1;const S=h(_);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function x(_,w){const S=h(w);S&&S.isCubeTexture?(c===void 0&&(c=new _t(new Rr(1,1,1),new Er({name:"BackgroundCubeMaterial",uniforms:os(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Sx.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qh),c.material.toneMapped=tt.getTransfer(S.colorSpace)!==dt,(u!==S||f!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _t(new gr(2,2),new Er({name:"BackgroundMaterial",uniforms:os(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=tt.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,d=t.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function m(_,w){_.getRGB(Ya,Gh(t)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,w=1){a.set(_),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(_){o=_,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Mx(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(O,B,Z,P,W){let Q=!1;const V=f(O,P,Z,B);s!==V&&(s=V,c(s.object)),Q=h(O,P,Z,W),Q&&g(O,P,Z,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,S(O,B,Z,P),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(O){return t.bindVertexArray(O)}function u(O){return t.deleteVertexArray(O)}function f(O,B,Z,P){const W=P.wireframe===!0;let Q=i[B.id];Q===void 0&&(Q={},i[B.id]=Q);const V=O.isInstancedMesh===!0?O.id:0;let pe=Q[V];pe===void 0&&(pe={},Q[V]=pe);let K=pe[Z.id];K===void 0&&(K={},pe[Z.id]=K);let ae=K[W];return ae===void 0&&(ae=d(l()),K[W]=ae),ae}function d(O){const B=[],Z=[],P=[];for(let W=0;W<n;W++)B[W]=0,Z[W]=0,P[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:Z,attributeDivisors:P,object:O,attributes:{},index:null}}function h(O,B,Z,P){const W=s.attributes,Q=B.attributes;let V=0;const pe=Z.getAttributes();for(const K in pe)if(pe[K].location>=0){const de=W[K];let Ie=Q[K];if(Ie===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(Ie=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(Ie=O.instanceColor)),de===void 0||de.attribute!==Ie||Ie&&de.data!==Ie.data)return!0;V++}return s.attributesNum!==V||s.index!==P}function g(O,B,Z,P){const W={},Q=B.attributes;let V=0;const pe=Z.getAttributes();for(const K in pe)if(pe[K].location>=0){let de=Q[K];de===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(de=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(de=O.instanceColor));const Ie={};Ie.attribute=de,de&&de.data&&(Ie.data=de.data),W[K]=Ie,V++}s.attributes=W,s.attributesNum=V,s.index=P}function x(){const O=s.newAttributes;for(let B=0,Z=O.length;B<Z;B++)O[B]=0}function m(O){p(O,0)}function p(O,B){const Z=s.newAttributes,P=s.enabledAttributes,W=s.attributeDivisors;Z[O]=1,P[O]===0&&(t.enableVertexAttribArray(O),P[O]=1),W[O]!==B&&(t.vertexAttribDivisor(O,B),W[O]=B)}function _(){const O=s.newAttributes,B=s.enabledAttributes;for(let Z=0,P=B.length;Z<P;Z++)B[Z]!==O[Z]&&(t.disableVertexAttribArray(Z),B[Z]=0)}function w(O,B,Z,P,W,Q,V){V===!0?t.vertexAttribIPointer(O,B,Z,W,Q):t.vertexAttribPointer(O,B,Z,P,W,Q)}function S(O,B,Z,P){x();const W=P.attributes,Q=Z.getAttributes(),V=B.defaultAttributeValues;for(const pe in Q){const K=Q[pe];if(K.location>=0){let ae=W[pe];if(ae===void 0&&(pe==="instanceMatrix"&&O.instanceMatrix&&(ae=O.instanceMatrix),pe==="instanceColor"&&O.instanceColor&&(ae=O.instanceColor)),ae!==void 0){const de=ae.normalized,Ie=ae.itemSize,$e=e.get(ae);if($e===void 0)continue;const se=$e.buffer,xe=$e.type,Re=$e.bytesPerElement,Oe=xe===t.INT||xe===t.UNSIGNED_INT||ae.gpuType===jc;if(ae.isInterleavedBufferAttribute){const Ee=ae.data,He=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,vt=ae.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let ke=0;ke<K.locationSize;ke++)p(K.location+ke,Ee.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ke=0;ke<K.locationSize;ke++)m(K.location+ke);t.bindBuffer(t.ARRAY_BUFFER,se);for(let ke=0;ke<K.locationSize;ke++)w(K.location+ke,Ie/K.locationSize,xe,de,He*Re,(vt+Ie/K.locationSize*ke)*Re,Oe)}else{if(ae.isInstancedBufferAttribute){for(let Ee=0;Ee<K.locationSize;Ee++)p(K.location+Ee,ae.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)m(K.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,se);for(let Ee=0;Ee<K.locationSize;Ee++)w(K.location+Ee,Ie/K.locationSize,xe,de,Ie*Re,Ie/K.locationSize*Ee*Re,Oe)}}else if(V!==void 0){const de=V[pe];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(K.location,de);break;case 3:t.vertexAttrib3fv(K.location,de);break;case 4:t.vertexAttrib4fv(K.location,de);break;default:t.vertexAttrib1fv(K.location,de)}}}}_()}function T(){k();for(const O in i){const B=i[O];for(const Z in B){const P=B[Z];for(const W in P){const Q=P[W];for(const V in Q)u(Q[V].object),delete Q[V];delete P[W]}}delete i[O]}}function A(O){if(i[O.id]===void 0)return;const B=i[O.id];for(const Z in B){const P=B[Z];for(const W in P){const Q=P[W];for(const V in Q)u(Q[V].object),delete Q[V];delete P[W]}}delete i[O.id]}function v(O){for(const B in i){const Z=i[B];for(const P in Z){const W=Z[P];if(W[O.id]===void 0)continue;const Q=W[O.id];for(const V in Q)u(Q[V].object),delete Q[V];delete W[O.id]}}}function b(O){for(const B in i){const Z=i[B],P=O.isInstancedMesh===!0?O.id:0,W=Z[P];if(W!==void 0){for(const Q in W){const V=W[Q];for(const pe in V)u(V[pe].object),delete V[pe];delete W[Q]}delete Z[P],Object.keys(Z).length===0&&delete i[B]}}}function k(){N(),a=!0,s!==r&&(s=r,c(s.object))}function N(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:N,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:b,releaseStatesOfProgram:v,initAttributes:x,enableAttribute:m,disableUnusedAttributes:_}}function Ex(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function wx(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==jn&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(v){const b=v===ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==Tn&&v!==Bn&&!b&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:w,maxFragmentUniforms:S,maxSamples:T,samples:A}}function Tx(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Fi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const _=s?0:i,w=_*4;let S=p.clippingState||null;l.value=S,S=u(g,d,w,h);for(let T=0;T!==w;++T)S[T]=n[T];p.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const x=f!==null?f.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const p=h+x*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=h;w!==x;++w,S+=4)a.copy(f[w]).applyMatrix4(_,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}class fu extends Qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Bh(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Rr(5,5,5),s=new Er({name:"CubemapFromEquirect",uniforms:os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:un,blending:Jr});s.uniforms.tEquirect.value=n;const a=new _t(r,s),o=n.minFilter;return n.minFilter===$i&&(n.minFilter=xn),new Pc(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Dd=256,Ax=3,Rx=20,Yh=256,Kh=16,Cx=3,Px=new F,Ix=new Ze;class Io{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Pc(1,10,null),this._boxMesh=new _t(new Rr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Px}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(Ix));const m=new Pc(i,r,u);return m.position.copy(o),m.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=g,e.background=x,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Dd,Lh(e))}_fromTexture(e,n){e.mapping===rs||e.mapping===ea?this._setSize(e.image.length===0?Dd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Ud(e,!1,!1),i=Math.log2(e)-Ax;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Ud(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===rs||e.mapping===ea?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fd()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Od()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Lx(),this._integrationMaterial=Nx());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Kh);for(let a=0;a<=i;a++){const o=Io.lodToRoughness(a,i);if(a>i-Cx)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Yh*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Dx());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Ud(t,e,n){return new fu(t,{minFilter:$i,generateMipmaps:e,type:ii,colorSpace:To,depthBuffer:n})}function ga(t,e,n){return new Er({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:n,side:un,blending:Jr,depthTest:!1,depthWrite:!1})}function Lx(){return ga("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Yh}u

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
	`)}function Nx(){return ga("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Kh}},`

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
	`)}function Dx(){return ga("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Rx}
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
	`)}function Od(){return ga("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Fd(){return ga("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ux(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===sl||h===al)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const x=new fu(g.height);return x.fromEquirectangularTexture(t,d),e.set(d,x),d.addEventListener("dispose",c),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,g=h===sl||h===al,x=h===rs||h===ea;if(g||x){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Io(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const _=d.image;return g&&_&&_.height>0||x&&_&&l(_)?(i===null&&(i=new Io(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,h){return h===sl?d.mapping=rs:h===al&&(d.mapping=ea),d}function l(d){let h=0;const g=6;for(let x=0;x<g;x++)d[x]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Ox(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Qr("WebGLRenderer: "+i+" extension not supported."),r}}}function Fx(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const x=s.get(g);x&&(e.remove(x),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(g,x){return r[x.id]!==void 0||(x.addEventListener("dispose",o),r[x.id]=new WeakRef(x),a.register(x,x.id,x),n.memory.geometries++),x}function u(g){const x=g.attributes;for(const m in x)e.update(x[m],t.ARRAY_BUFFER)}function f(g){const x=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const _=x!==null?x.array.length:m.array.length/3-1,w=m.count>=65535?Fh:Oh,S=new w(Math.ceil(_/3)*6,1),T=S.array;if(x!==null){const v=x.array;p=x.version;for(let b=0,k=0;b<_;b+=3){const N=v[b+0],O=v[b+1],B=v[b+2];T[k++]=N,T[k++]=O,T[k++]=O,T[k++]=B,T[k++]=B,T[k++]=N}}else{p=m.version;for(let v=0,b=0;v<_;v+=3){const k=v+0,N=v+1,O=v+2;T[b++]=k,T[b++]=N,T[b++]=N,T[b++]=O,T[b++]=O,T[b++]=k}}S.version=p;const A=s.get(g);A&&e.remove(A),s.set(g,S)}function d(g){const x=s.get(g);if(x){const m=g.index;m!==null&&x.version<m.version&&f(g)}else f(g);return s.get(g)}function h(){for(const g in r){const x=r[g].deref();x!==void 0&&l(x)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function kx(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,s,f*a,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let x=0;for(let m=0;m<h;m++)x+=d[m];n.update(x,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function zx(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Bx(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let N=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",N)};var h=N;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),m===!0&&(S=3);let T=o.attributes.position.count*S,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const v=new Float32Array(T*A*4*f),b=new Nh(v,T,A,f);b.type=Bn,b.needsUpdate=!0;const k=S*4;for(let O=0;O<f;O++){const B=p[O],Z=_[O],P=w[O],W=T*A*4*O;for(let Q=0;Q<B.count;Q++){const V=Q*k;g===!0&&(r.fromBufferAttribute(B,Q),v[W+V+0]=r.x,v[W+V+1]=r.y,v[W+V+2]=r.z,v[W+V+3]=0),x===!0&&(r.fromBufferAttribute(Z,Q),v[W+V+4]=r.x,v[W+V+5]=r.y,v[W+V+6]=r.z,v[W+V+7]=0),m===!0&&(r.fromBufferAttribute(P,Q),v[W+V+8]=r.x,v[W+V+9]=r.y,v[W+V+10]=r.z,v[W+V+11]=P.itemSize===4?r.w:1)}}d={count:f,texture:b,size:new We(T,A)},i.set(o,d),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const x=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function $x(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const Hx={[ph]:"LINEAR_TONE_MAPPING",[mh]:"REINHARD_TONE_MAPPING",[gh]:"CINEON_TONE_MAPPING",[Kc]:"ACES_FILMIC_TONE_MAPPING",[vh]:"AGX_TONE_MAPPING",[xh]:"NEUTRAL_TONE_MAPPING",[_h]:"CUSTOM_TONE_MAPPING"};function Gx(t,e,n,i,r,s){const a=new Qn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Vn;u.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Vt([0,2,0,0,2,0],2));const f=new L0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _t(u,f),h=new Xh(-1,1,1,-1,0,1);let g=null,x=null,m=!1,p,_=null,w=[],S=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let v=0;v<w.length;v++){const b=w[v];b.setSize&&b.setSize(T,A)}},this.setEffects=function(T){w=T,S=w.length>0&&w[0].isRenderPass===!0;const A=a.width,v=a.height;w.length>0&&o===null&&(o=new Qn(A,v,{type:ii,depthBuffer:!1,stencilBuffer:!1}),l=new Qn(A,v,{type:ii,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&w.some(k=>k.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new as(A,v),s===!0&&(c.format=Hi,c.type=ss)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let k=0;k<w.length;k++){const N=w[k];N.setSize&&N.setSize(A,v),b&&N.needsDepthTexture===!0&&N.setDepthTexture&&N.setDepthTexture(c)}},this.begin=function(T,A){if(m||T.toneMapping===Si&&w.length===0)return!1;if(_=A,A!==null){const v=A.width,b=A.height;(a.width!==v||a.height!==b)&&this.setSize(v,b)}return S===!1&&T.setRenderTarget(a),p=T.toneMapping,T.toneMapping=Si,!0},this.hasRenderPass=function(){return S},this.end=function(T,A){T.toneMapping=p,m=!0;let v=a,b=o;for(let k=0;k<w.length;k++){const N=w[k];N.enabled!==!1&&(N.render(T,b,v,A),N.needsSwap!==!1&&(v=b,b=b===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,f.defines={},tt.getTransfer(g)===dt&&(f.defines.SRGB_TRANSFER="");const k=Hx[x];k&&(f.defines[k]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=v.texture,T.setRenderTarget(_),T.render(d,h),_=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const jh=new tn,Jh=new as(1,1),Qh=new $h(1),ep=new Nh,tp=new o0,np=new Bh,kd=[],zd=[],Bd=new Float32Array(16),$d=new Float32Array(9),Hd=new Float32Array(4);function hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=kd[r];if(s===void 0&&(s=new Float32Array(r),kd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qo(t,e){let n=zd[e];n===void 0&&(n=new Int32Array(e),zd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Vx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Wx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function Xx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function Zx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function qx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Hd.set(i),t.uniformMatrix2fv(this.addr,!1,Hd),kt(n,i)}}function Yx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;$d.set(i),t.uniformMatrix3fv(this.addr,!1,$d),kt(n,i)}}function Kx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Bd.set(i),t.uniformMatrix4fv(this.addr,!1,Bd),kt(n,i)}}function jx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Jx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Qx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function ey(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function ty(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function ny(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function iy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function ry(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Yo(t){return t.version===0&&(t.compareFunction=Ch,t.needsUpdate=!0),t}function sy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Yo(Jh):s=jh,n.setTexture2D(e||s,r)}function ay(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||tp,r)}function oy(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Yo(Qh):s=np,n.setTextureCube(e||s,r)}function ly(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||ep,r)}function cy(t){switch(t){case 5126:return Vx;case 35664:return Wx;case 35665:return Xx;case 35666:return Zx;case 35674:return qx;case 35675:return Yx;case 35676:return Kx;case 5124:case 35670:return jx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ey;case 5125:return ty;case 36294:return ny;case 36295:return iy;case 36296:return ry;case 35678:case 36198:case 36298:case 36306:case 35682:return sy;case 35679:case 36299:case 36307:return ay;case 35680:case 36300:case 36308:case 36293:return oy;case 36289:case 36303:case 36311:case 36292:return ly}}function uy(t,e){t.uniform1fv(this.addr,e)}function dy(t,e){const n=hs(e,this.size,2);t.uniform2fv(this.addr,n)}function fy(t,e){const n=hs(e,this.size,3);t.uniform3fv(this.addr,n)}function hy(t,e){const n=hs(e,this.size,4);t.uniform4fv(this.addr,n)}function py(t,e){const n=hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function my(t,e){const n=hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function gy(t,e){const n=hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _y(t,e){t.uniform1iv(this.addr,e)}function vy(t,e){t.uniform2iv(this.addr,e)}function xy(t,e){t.uniform3iv(this.addr,e)}function yy(t,e){t.uniform4iv(this.addr,e)}function Sy(t,e){t.uniform1uiv(this.addr,e)}function by(t,e){t.uniform2uiv(this.addr,e)}function My(t,e){t.uniform3uiv(this.addr,e)}function Ey(t,e){t.uniform4uiv(this.addr,e)}function wy(t,e,n){const i=this.cache,r=e.length,s=qo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Yo(Jh):a=jh;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Ty(t,e,n){const i=this.cache,r=e.length,s=qo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||tp,s[a])}function Ay(t,e,n){const i=this.cache,r=e.length,s=qo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Yo(Qh):a=np;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function Ry(t,e,n){const i=this.cache,r=e.length,s=qo(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||ep,s[a])}function Cy(t){switch(t){case 5126:return uy;case 35664:return dy;case 35665:return fy;case 35666:return hy;case 35674:return py;case 35675:return my;case 35676:return gy;case 5124:case 35670:return _y;case 35667:case 35671:return vy;case 35668:case 35672:return xy;case 35669:case 35673:return yy;case 5125:return Sy;case 36294:return by;case 36295:return My;case 36296:return Ey;case 35678:case 36198:case 36298:case 36306:case 35682:return wy;case 35679:case 36299:case 36307:return Ty;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}class Py{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=cy(n.type)}}class Iy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Cy(n.type)}}class Ly{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Ll=/(\w+)(\])?(\[|\.)?/g;function Gd(t,e){t.seq.push(e),t.map[e.id]=e}function Ny(t,e,n){const i=t.name,r=i.length;for(Ll.lastIndex=0;;){const s=Ll.exec(i),a=Ll.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Gd(n,c===void 0?new Py(o,t,e):new Iy(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Ly(o),Gd(n,f)),n=f}}}class ho{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Ny(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Vd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Dy=37297;let Uy=0;function Oy(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Wd=new Ge;function Fy(t){tt._getMatrix(Wd,tt.workingColorSpace,t);const e=`mat3( ${Wd.elements.map(n=>n.toFixed(4))} )`;switch(tt.getTransfer(t)){case Ao:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Xd(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Oy(t.getShaderSource(e),o)}else return s}function ky(t,e){const n=Fy(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const zy={[ph]:"Linear",[mh]:"Reinhard",[gh]:"Cineon",[Kc]:"ACESFilmic",[vh]:"AgX",[xh]:"Neutral",[_h]:"Custom"};function By(t,e){const n=zy[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ka=new F;function $y(){tt.getLuminanceCoefficients(Ka);const t=Ka.x.toFixed(4),e=Ka.y.toFixed(4),n=Ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hy(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function Gy(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Vy(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ks(t){return t!==""}function Zd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function qd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(t){return t.replace(Wy,Xy)}function Xy(t,e){const n=Xe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Ic(n)}const Zy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(t){return t.replace(Zy,qy)}function qy(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const Yy={[so]:"SHADOWMAP_TYPE_PCF",[Fs]:"SHADOWMAP_TYPE_VSM"};function Ky(t){return Yy[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const jy={[ea]:"ENVMAP_MODE_REFRACTION"};function Jy(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":jy[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Qy={[hh]:"ENVMAP_BLENDING_MULTIPLY",[Tg]:"ENVMAP_BLENDING_MIX",[Ag]:"ENVMAP_BLENDING_ADD"};function eS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Qy[t.combine]||"ENVMAP_BLENDING_NONE"}function tS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=Ky(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Jy(n),f=eS(n),d=Hy(n),h=Gy(s),g=r.createProgram();let x,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(ks).join(`
`),x.length>0&&(x+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(ks).join(`
`),m.length>0&&(m+=`
`)):(x=[Kd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),m=[Kd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Si?"#define TONE_MAPPING":"",n.toneMapping!==Si?Xe.tonemapping_pars_fragment:"",n.toneMapping!==Si?By("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,ky("linearToOutputTexel",n.outputColorSpace),$y(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ks).join(`
`)),a=Ic(a),a=Zd(a,n),a=qd(a,n),o=Ic(o),o=Zd(o,n),o=qd(o,n),a=Yd(a),o=Yd(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,m=["#define varying in",n.glslVersion===id?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===id?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=p+x+a,w=p+m+o,S=Vd(r,r.VERTEX_SHADER,_),T=Vd(r,r.FRAGMENT_SHADER,w);r.attachShader(g,S),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(N){if(t.debug.checkShaderErrors){const O=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(S)||"",Z=r.getShaderInfoLog(T)||"",P=O.trim(),W=B.trim(),Q=Z.trim();let V=!0,pe=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,S,T);else{const K=Xd(r,S,"vertex"),ae=Xd(r,T,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+P+`
`+K+`
`+ae)}else P!==""?Be("WebGLProgram: Program Info Log:",P):(W===""||Q==="")&&(pe=!1);pe&&(N.diagnostics={runnable:V,programLog:P,vertexShader:{log:W,prefix:x},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(S),r.deleteShader(T),v=new ho(r,g),b=Vy(r,g)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(g,Dy)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Uy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=T,this}let nS=0;class iS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rS(e),n.set(e,i)),i}}class rS{constructor(e){this.id=nS++,this.code=e,this.usedTimes=0}}function sS(t){return t===Mr||t===Eo||t===wo}function aS(t,e,n,i,r,s){const a=new Dh,o=new iS,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,b,k,N,O,B){const Z=N.fog,P=O.geometry,W=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?N.environment:null,Q=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,V=e.get(v.envMap||W,Q),pe=d[v.type];let K=i.precision;v.precision!==null&&(K=i.getMaxPrecision(v.precision),K!==v.precision&&Be("WebGLProgram.getParameters:",v.precision,"not supported, using",K,"instead."));const ae=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,de=ae!==void 0?ae.length:0;let Ie=0;P.morphAttributes.position!==void 0&&(Ie=1),P.morphAttributes.normal!==void 0&&(Ie=2),P.morphAttributes.color!==void 0&&(Ie=3);let $e,se,xe,Re;if(pe){const Se=Kn[pe];$e=Se.vertexShader,se=Se.fragmentShader}else{$e=v.vertexShader,se=v.fragmentShader;const Se=o.getVertexShaderStage(v),st=o.getFragmentShaderStage(v);o.update(v,Se,st),xe=Se.id,Re=st.id}const Oe=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),He=O.isInstancedMesh===!0,vt=O.isBatchedMesh===!0,ke=!!v.map,ot=!!v.matcap,ct=!!V,Ye=ct&&V.isPMREMTexture===!0,Ut=!!v.aoMap,ut=!!v.lightMap,Bt=!!v.bumpMap&&v.wireframe===!1,xt=!!v.normalMap,dn=!!v.displacementMap,Rt=!!v.emissiveMap,nn=!!v.metalnessMap,fn=!!v.roughnessMap,hn=v.anisotropy>0,z=v.clearcoat>0,pn=v.diffuseRoughness>0,mt=v.dispersion>0,D=v.retroreflectivity>0,I=v.iridescence>0,ne=v.sheen>0,j=v.transmission>0,te=hn&&!!v.anisotropyMap,E=z&&!!v.clearcoatMap,y=z&&!!v.clearcoatNormalMap,R=z&&!!v.clearcoatRoughnessMap,H=pn&&!!v.diffuseRoughnessMap,L=I&&!!v.iridescenceMap,ie=I&&!!v.iridescenceThicknessMap,ue=ne&&!!v.sheenColorMap,Y=ne&&!!v.sheenRoughnessMap,ee=!!v.specularMap,fe=!!v.specularColorMap,C=!!v.specularIntensityMap,J=j&&!!v.transmissionMap,X=j&&!!v.thicknessMap,_e=!!v.gradientMap,me=!!v.alphaMap,ge=v.alphaTest>0,ye=!!v.alphaHash,De=!!v.extensions;let le=Si;v.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(le=t.toneMapping);const Ce=Ye?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,ze={shaderID:pe,shaderType:v.type,shaderName:v.name,vertexShader:$e,fragmentShader:se,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:Re,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:K,batching:vt,batchingColor:vt&&O._colorsTexture!==null,instancing:He,instancingColor:He&&O.instanceColor!==null,instancingMorph:He&&O.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ke,matcap:ot,envMap:ct,envMapMode:ct&&V.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ce.length-1:null,envMapSize:Ye?Ce[0].width:null,aoMap:Ut,lightMap:ut,bumpMap:Bt,normalMap:xt,displacementMap:dn,emissiveMap:Rt,normalMapObjectSpace:xt&&v.normalMapType===Pg,normalMapTangentSpace:xt&&v.normalMapType===Cc,packedNormalMap:xt&&v.normalMapType===Cc&&sS(v.normalMap.format),metalnessMap:nn,roughnessMap:fn,anisotropy:hn,anisotropyMap:te,clearcoat:z,clearcoatMap:E,clearcoatNormalMap:y,clearcoatRoughnessMap:R,diffuseRoughness:pn,diffuseRoughnessMap:H,dispersion:mt,retroreflection:D,iridescence:I,iridescenceMap:L,iridescenceThicknessMap:ie,sheen:ne,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:ee,specularColorMap:fe,specularIntensityMap:C,transmission:j,transmissionMap:J,thicknessMap:X,gradientMap:_e,opaque:v.transparent===!1&&v.blending===Gs&&v.alphaToCoverage===!1,alphaMap:me,alphaTest:ge,alphaHash:ye,combine:v.combine,mapUv:ke&&h(v.map.channel),aoMapUv:Ut&&h(v.aoMap.channel),lightMapUv:ut&&h(v.lightMap.channel),bumpMapUv:Bt&&h(v.bumpMap.channel),normalMapUv:xt&&h(v.normalMap.channel),displacementMapUv:dn&&h(v.displacementMap.channel),emissiveMapUv:Rt&&h(v.emissiveMap.channel),metalnessMapUv:nn&&h(v.metalnessMap.channel),roughnessMapUv:fn&&h(v.roughnessMap.channel),anisotropyMapUv:te&&h(v.anisotropyMap.channel),clearcoatMapUv:E&&h(v.clearcoatMap.channel),clearcoatNormalMapUv:y&&h(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&h(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:H&&h(v.diffuseRoughnessMap.channel),iridescenceMapUv:L&&h(v.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&h(v.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&h(v.sheenColorMap.channel),sheenRoughnessMapUv:Y&&h(v.sheenRoughnessMap.channel),specularMapUv:ee&&h(v.specularMap.channel),specularColorMapUv:fe&&h(v.specularColorMap.channel),specularIntensityMapUv:C&&h(v.specularIntensityMap.channel),transmissionMapUv:J&&h(v.transmissionMap.channel),thicknessMapUv:X&&h(v.thicknessMap.channel),alphaMapUv:me&&h(v.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(xt||hn),vertexNormals:!!P.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(ke||me),fog:!!Z,useFog:v.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||P.attributes.normal===void 0&&xt===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ie,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:le,decodeVideoTexture:ke&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===dt,decodeVideoTextureEmissive:Rt&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===dt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===un,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:De&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&v.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function x(v){const b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(const k in v.defines)b.push(k),b.push(v.defines[k]);return v.isRawShaderMaterial===!1&&(m(b,v),p(b,v),b.push(t.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function m(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapPMREM),v.push(b.envMapMaxLod),v.push(b.envMapSize),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.diffuseRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.numSunLights),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numSunLightShadows),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.numLightProbeGrids),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function p(v,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function _(v){const b=d[v.type];let k;if(b){const N=Kn[b];k=C0.clone(N.uniforms)}else k=v.uniforms;return k}function w(v,b){let k=u.get(b);return k!==void 0?++k.usedTimes:(k=new tS(t,b,v,r),c.push(k),u.set(b,k)),k}function S(v){if(--v.usedTimes===0){const b=c.indexOf(v);c[b]=c[c.length-1],c.pop(),u.delete(v.cacheKey),v.destroy()}}function T(v){o.remove(v)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:_,acquireProgram:w,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:A}}function oS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function lS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function jd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Jd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,g,x,m,p){let _=t[e];return _===void 0?(_={id:d.id,object:d,geometry:h,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},t[e]=_):(_.id=d.id,_.object=d,_.geometry=h,_.material=g,_.materialVariant=a(d),_.groupOrder=x,_.renderOrder=d.renderOrder,_.z=m,_.group=p),e++,_}function l(d,h,g,x,m,p,_){_.reversedDepth===!0&&(m=-m);const w=o(d,h,g,x,m,p);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):n.push(w)}function c(d,h,g,x,m,p){const _=o(d,h,g,x,m,p);g.transmission>0?i.unshift(_):g.transparent===!0?r.unshift(_):n.unshift(_)}function u(d,h){n.length>1&&n.sort(d||lS),i.length>1&&i.sort(h||jd),r.length>1&&r.sort(h||jd)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function cS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Jd,t.set(i,[a])):r>=s.length?(a=new Jd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function uS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new Ze};break;case"SpotLight":n={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function dS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fS=0;function hS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function pS(t){const e=new uS,n=dS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new pt,a=new pt;function o(c){let u=0,f=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let h=0,g=0,x=0,m=0,p=0,_=0,w=0,S=0,T=0,A=0,v=0,b=0,k=0,N=0;c.sort(hS);for(let B=0,Z=c.length;B<Z;B++){const P=c[B],W=P.color,Q=P.intensity,V=P.distance;let pe=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Mr?pe=P.shadow.map.texture:pe=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)u+=W.r*Q,f+=W.g*Q,d+=W.b*Q;else if(P.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(P.sh.coefficients[K],Q);N++}else if(P.isSunLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ae=P.shadow,de=n.get(P);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),i.sunShadow[g]=de,i.sunShadowMap[g]=pe;const Ie=ae.getViewportCount();for(let $e=0;$e<Ie;$e++)i.sunShadowMatrix[x+$e]=ae.getMatrix($e),i.sunShadowCascade[x+$e]=ae._cascadeData[$e];x+=Ie,g++}i.sun[h]=K,h++}else if(P.isDirectionalLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ae=P.shadow,de=n.get(P);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,i.directionalShadow[m]=de,i.directionalShadowMap[m]=pe,i.directionalShadowMatrix[m]=P.shadow.matrix,T++}i.directional[m]=K,m++}else if(P.isSpotLight){const K=e.get(P);K.position.setFromMatrixPosition(P.matrixWorld),K.color.copy(W).multiplyScalar(Q),K.distance=V,K.coneCos=Math.cos(P.angle),K.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),K.decay=P.decay,i.spot[_]=K;const ae=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,ae.updateMatrices(P),P.castShadow&&k++),i.spotLightMatrix[_]=ae.matrix,P.castShadow){const de=n.get(P);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,i.spotShadow[_]=de,i.spotShadowMap[_]=pe,v++}_++}else if(P.isRectAreaLight){const K=e.get(P);K.color.copy(W).multiplyScalar(Q),K.halfWidth.set(P.width*.5,0,0),K.halfHeight.set(0,P.height*.5,0),i.rectArea[w]=K,w++}else if(P.isPointLight){const K=e.get(P);if(K.color.copy(P.color).multiplyScalar(P.intensity),K.distance=P.distance,K.decay=P.decay,P.castShadow){const ae=P.shadow,de=n.get(P);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,de.shadowCameraNear=ae.camera.near,de.shadowCameraFar=ae.camera.far,i.pointShadow[p]=de,i.pointShadowMap[p]=pe,i.pointShadowMatrix[p]=P.shadow.matrix,A++}i.point[p]=K,p++}else if(P.isHemisphereLight){const K=e.get(P);K.skyColor.copy(P.color).multiplyScalar(Q),K.groundColor.copy(P.groundColor).multiplyScalar(Q),i.hemi[S]=K,S++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const O=i.hash;(O.sunLength!==h||O.directionalLength!==m||O.pointLength!==p||O.spotLength!==_||O.rectAreaLength!==w||O.hemiLength!==S||O.numSunShadows!==g||O.numDirectionalShadows!==T||O.numPointShadows!==A||O.numSpotShadows!==v||O.numSpotMaps!==b||O.numLightProbes!==N)&&(i.sun.length=h,i.directional.length=m,i.spot.length=_,i.rectArea.length=w,i.point.length=p,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+b-k,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=N,O.sunLength=h,O.directionalLength=m,O.pointLength=p,O.spotLength=_,O.rectAreaLength=w,O.hemiLength=S,O.numSunShadows=g,O.numDirectionalShadows=T,O.numPointShadows=A,O.numSpotShadows=v,O.numSpotMaps=b,O.numLightProbes=N,i.version=fS++)}function l(c,u){let f=0,d=0,h=0,g=0,x=0,m=0;const p=u.matrixWorldInverse;for(let _=0,w=c.length;_<w;_++){const S=c[_];if(S.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),f++}else if(S.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),d++}else if(S.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),T.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const T=i.rectArea[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const T=i.hemi[m];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Qd(t){const e=new pS(t),n=[],i=[],r=[];function s(f){u.camera=f,n.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):n.push(f)}function o(f){i.push(f)}function l(){e.setup(n),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function mS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Qd(t),e.set(r,[o])):s>=a.length?(o=new Qd(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const gS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,_S=`uniform sampler2D shadow_pass;
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
}`,vS=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],xS=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ef=new pt,Ps=new F,Nl=new F;function yS(t,e,n){let i=new ra;const r=new We,s=new We,a=new Et,o=new D0,l=new U0,c={},u=n.maxTextureSize,f={[br]:un,[un]:br,[Ln]:Ln},d=new Er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:gS,fragmentShader:_S}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Vn;g.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=so;let p=this.type;this.render=function(A,v,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;this.type===og&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=so);const k=t.getRenderTarget(),N=t.getActiveCubeFace(),O=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Jr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const Z=p!==this.type;Z&&v.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(W=>W.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,W=A.length;P<W;P++){const Q=A[P],V=Q.shadow;if(V===void 0){Be("WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);const pe=V.getFrameExtents();r.multiply(pe),s.copy(V.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/pe.x),r.x=s.x*pe.x,V.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/pe.y),r.y=s.y*pe.y,V.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=K,V.map===null||Z===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Fs){if(Q.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Qn(r.x,r.y,{format:Mr,type:ii,minFilter:xn,magFilter:xn,generateMipmaps:!1}),V.map.texture.name=Q.name+".shadowMap",V.map.depthTexture=new as(r.x,r.y,Bn),V.map.depthTexture.name=Q.name+".shadowMapDepth",V.map.depthTexture.format=Xi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Zt,V.map.depthTexture.magFilter=Zt}else Q.isPointLight?(V.map=new fu(r.x),V.map.depthTexture=new $h(r.x,ni)):(V.map=new Qn(r.x,r.y),V.map.depthTexture=new as(r.x,r.y,ni)),V.map.depthTexture.name=Q.name+".shadowMap",V.map.depthTexture.format=Xi,this.type===so?(V.map.depthTexture.compareFunction=K?Rh:Ah,V.map.depthTexture.minFilter=xn,V.map.depthTexture.magFilter=xn):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Zt,V.map.depthTexture.magFilter=Zt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==r.x||V.map.height!==r.y)&&V.map.setSize(r.x,r.y);const ae=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();Q.isPointLight!==!0&&V.updateMatrices(Q,b);const de=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:b.layers;for(let Ie=0;Ie<ae;Ie++){const $e=V.getCamera(Ie);if(Q.isPointLight){const se=V.camera,xe=V.matrix,Re=Q.distance||se.far;Re!==se.far&&(se.far=Re,se.updateProjectionMatrix()),Ps.setFromMatrixPosition(Q.matrixWorld),se.position.copy(Ps),Nl.copy(se.position),Nl.add(vS[Ie]),se.up.copy(xS[Ie]),se.lookAt(Nl),se.updateMatrixWorld(),xe.makeTranslation(-Ps.x,-Ps.y,-Ps.z),ef.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),V._frustum.setFromProjectionMatrix(ef,se.coordinateSystem,se.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,Ie),t.clear();else{Ie===0&&(t.setRenderTarget(V.map),t.clear());const se=V.getViewport(Ie);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),B.viewport(a)}i=V.getFrustum(Ie),S(v,b,$e,Q,de,this.type)}V.isPointLightShadow!==!0&&this.type===Fs&&_(V,b),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(k,N,O)};function _(A,v){const b=e.update(x);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Qn(r.x,r.y,{format:Mr,type:ii}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(v,null,b,d,x,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(v,null,b,h,x,null)}function w(A,v,b,k){let N=null;const O=b.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(O!==void 0)N=O;else if(N=b.isPointLight===!0?l:o,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const B=N.uuid,Z=v.uuid;let P=c[B];P===void 0&&(P={},c[B]=P);let W=P[Z];W===void 0&&(W=N.clone(),P[Z]=W,v.addEventListener("dispose",T)),N=W}if(N.visible=v.visible,N.wireframe=v.wireframe,k===Fs?N.side=v.shadowSide!==null?v.shadowSide:v.side:N.side=v.shadowSide!==null?v.shadowSide:f[v.side],N.alphaMap=v.alphaMap,N.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,N.map=v.map,N.clipShadows=v.clipShadows,N.clippingPlanes=v.clippingPlanes,N.clipIntersection=v.clipIntersection,N.displacementMap=v.displacementMap,N.displacementScale=v.displacementScale,N.displacementBias=v.displacementBias,N.wireframeLinewidth=v.wireframeLinewidth,N.linewidth=v.linewidth,b.isPointLight===!0&&N.isMeshDistanceMaterial===!0){const B=t.properties.get(N);B.light=b}return N}function S(A,v,b,k,N,O){if(A.visible===!1)return;if(A.layers.test(N)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&O===Fs)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,A.matrixWorld);const P=e.update(A),W=A.material;if(Array.isArray(W)){const Q=P.groups;for(let V=0,pe=Q.length;V<pe;V++){const K=Q[V],ae=W[K.materialIndex];if(ae&&ae.visible){const de=w(A,ae,k,O);A.onBeforeShadow(t,A,v,b,P,de,K),t.renderBufferDirect(b,null,P,de,A,K),A.onAfterShadow(t,A,v,b,P,de,K)}}}else if(W.visible){const Q=w(A,W,k,O);A.onBeforeShadow(t,A,v,b,P,Q,null),t.renderBufferDirect(b,null,P,Q,A,null),A.onAfterShadow(t,A,v,b,P,Q,null)}}const Z=A.children;for(let P=0,W=Z.length;P<W;P++)S(Z[P],v,b,k,N,O)}function T(A){A.target.removeEventListener("dispose",T);for(const b in c){const k=c[b],N=A.target.uuid;N in k&&(k[N].dispose(),delete k[N])}}}function SS(t,e){function n(){let C=!1;const J=new Et;let X=null;const _e=new Et(0,0,0,0);return{setMask:function(me){X!==me&&!C&&(t.colorMask(me,me,me,me),X=me)},setLocked:function(me){C=me},setClear:function(me,ge,ye,De,le){le===!0&&(me*=De,ge*=De,ye*=De),J.set(me,ge,ye,De),_e.equals(J)===!1&&(t.clearColor(me,ge,ye,De),_e.copy(J))},reset:function(){C=!1,X=null,_e.set(-1,0,0,0)}}}function i(){let C=!1,J=!1,X=null,_e=null,me=null;return{setReversed:function(ge){if(J!==ge){const ye=e.get("EXT_clip_control");ge?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),J=ge;const De=me;me=null,this.setClear(De)}},getReversed:function(){return J},setTest:function(ge){ge?Ee(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(ge){X!==ge&&!C&&(t.depthMask(ge),X=ge)},setFunc:function(ge){if(J&&(ge=Bg[ge]),_e!==ge){switch(ge){case Wl:t.depthFunc(t.NEVER);break;case Xl:t.depthFunc(t.ALWAYS);break;case Zl:t.depthFunc(t.LESS);break;case Qs:t.depthFunc(t.LEQUAL);break;case ql:t.depthFunc(t.EQUAL);break;case Yl:t.depthFunc(t.GEQUAL);break;case Kl:t.depthFunc(t.GREATER);break;case jl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=ge}},setLocked:function(ge){C=ge},setClear:function(ge){me!==ge&&(me=ge,J&&(ge=1-ge),t.clearDepth(ge))},reset:function(){C=!1,X=null,_e=null,me=null,J=!1}}}function r(){let C=!1,J=null,X=null,_e=null,me=null,ge=null,ye=null,De=null,le=null;return{setTest:function(Ce){C||(Ce?Ee(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(Ce){J!==Ce&&!C&&(t.stencilMask(Ce),J=Ce)},setFunc:function(Ce,ze,Se){(X!==Ce||_e!==ze||me!==Se)&&(t.stencilFunc(Ce,ze,Se),X=Ce,_e=ze,me=Se)},setOp:function(Ce,ze,Se){(ge!==Ce||ye!==ze||De!==Se)&&(t.stencilOp(Ce,ze,Se),ge=Ce,ye=ze,De=Se)},setLocked:function(Ce){C=Ce},setClear:function(Ce){le!==Ce&&(t.clearStencil(Ce),le=Ce)},reset:function(){C=!1,J=null,X=null,_e=null,me=null,ge=null,ye=null,De=null,le=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],x=null,m=!1,p=null,_=null,w=null,S=null,T=null,A=null,v=null,b=new Ze(0,0,0),k=0,N=!1,O=null,B=null,Z=null,P=null,W=null;const Q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,pe=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(K)[1]),V=pe>=1):K.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),V=pe>=2);let ae=null,de={};const Ie=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),se=new Et().fromArray(Ie),xe=new Et().fromArray($e);function Re(C,J,X,_e){const me=new Uint8Array(4),ge=t.createTexture();t.bindTexture(C,ge),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<X;ye++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(J,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,me):t.texImage2D(J+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,me);return ge}const Oe={};Oe[t.TEXTURE_2D]=Re(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=Re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=Re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=Re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(t.DEPTH_TEST),a.setFunc(Qs),Bt(!1),xt(Qu),Ee(t.CULL_FACE),Ut(Jr);function Ee(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function He(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function vt(C,J){return d[C]!==J?(t.bindFramebuffer(C,J),d[C]=J,C===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=J),C===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=J),!0):!1}function ke(C,J){let X=g,_e=!1;if(C){X=h.get(J),X===void 0&&(X=[],h.set(J,X));const me=C.textures;if(X.length!==me.length||X[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,ye=me.length;ge<ye;ge++)X[ge]=t.COLOR_ATTACHMENT0+ge;X.length=me.length,_e=!0}}else X[0]!==t.BACK&&(X[0]=t.BACK,_e=!0);_e&&t.drawBuffers(X)}function ot(C){return x!==C?(t.useProgram(C),x=C,!0):!1}const ct={[Kr]:t.FUNC_ADD,[cg]:t.FUNC_SUBTRACT,[ug]:t.FUNC_REVERSE_SUBTRACT};ct[dg]=t.MIN,ct[fg]=t.MAX;const Ye={[hg]:t.ZERO,[pg]:t.ONE,[mg]:t.SRC_COLOR,[dh]:t.SRC_ALPHA,[Sg]:t.SRC_ALPHA_SATURATE,[xg]:t.DST_COLOR,[_g]:t.DST_ALPHA,[gg]:t.ONE_MINUS_SRC_COLOR,[fh]:t.ONE_MINUS_SRC_ALPHA,[yg]:t.ONE_MINUS_DST_COLOR,[vg]:t.ONE_MINUS_DST_ALPHA,[bg]:t.CONSTANT_COLOR,[Mg]:t.ONE_MINUS_CONSTANT_COLOR,[Eg]:t.CONSTANT_ALPHA,[wg]:t.ONE_MINUS_CONSTANT_ALPHA};function Ut(C,J,X,_e,me,ge,ye,De,le,Ce){if(C===Jr){m===!0&&(He(t.BLEND),m=!1);return}if(m===!1&&(Ee(t.BLEND),m=!0),C!==lg){if(C!==p||Ce!==N){if((_!==Kr||T!==Kr)&&(t.blendEquation(t.FUNC_ADD),_=Kr,T=Kr),Ce)switch(C){case Gs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ed:t.blendFunc(t.ONE,t.ONE);break;case td:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case nd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",C);break}else switch(C){case Gs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case ed:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case td:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case nd:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",C);break}w=null,S=null,A=null,v=null,b.set(0,0,0),k=0,p=C,N=Ce}return}me=me||J,ge=ge||X,ye=ye||_e,(J!==_||me!==T)&&(t.blendEquationSeparate(ct[J],ct[me]),_=J,T=me),(X!==w||_e!==S||ge!==A||ye!==v)&&(t.blendFuncSeparate(Ye[X],Ye[_e],Ye[ge],Ye[ye]),w=X,S=_e,A=ge,v=ye),(De.equals(b)===!1||le!==k)&&(t.blendColor(De.r,De.g,De.b,le),b.copy(De),k=le),p=C,N=!1}function ut(C,J){C.side===Ln?He(t.CULL_FACE):Ee(t.CULL_FACE);let X=C.side===un;J&&(X=!X),Bt(X),C.blending===Gs&&C.transparent===!1?Ut(Jr):Ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const _e=C.stencilWrite;o.setTest(_e),_e&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Rt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(C){O!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),O=C)}function xt(C){C!==sg?(Ee(t.CULL_FACE),C!==B&&(C===Qu?t.cullFace(t.BACK):C===ag?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),B=C}function dn(C){C!==Z&&(V&&t.lineWidth(C),Z=C)}function Rt(C,J,X){C?(Ee(t.POLYGON_OFFSET_FILL),(P!==J||W!==X)&&(P=J,W=X,a.getReversed()&&(J=-J,X=-X),t.polygonOffset(J,X))):He(t.POLYGON_OFFSET_FILL)}function nn(C){C?Ee(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function fn(C){C===void 0&&(C=t.TEXTURE0+Q-1),ae!==C&&(t.activeTexture(C),ae=C)}function hn(C,J,X){X===void 0&&(ae===null?X=t.TEXTURE0+Q-1:X=ae);let _e=de[X];_e===void 0&&(_e={type:void 0,texture:void 0},de[X]=_e),(_e.type!==C||_e.texture!==J)&&(ae!==X&&(t.activeTexture(X),ae=X),t.bindTexture(C,J||Oe[C]),_e.type=C,_e.texture=J)}function z(){const C=de[ae];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function pn(){try{t.compressedTexImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function mt(){try{t.compressedTexImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function D(){try{t.texSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function I(){try{t.texSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function ne(){try{t.compressedTexSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function te(){try{t.texStorage2D(...arguments)}catch(C){at("WebGLState:",C)}}function E(){try{t.texStorage3D(...arguments)}catch(C){at("WebGLState:",C)}}function y(){try{t.texImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function R(){try{t.texImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function H(C){return f[C]!==void 0?f[C]:t.getParameter(C)}function L(C,J){f[C]!==J&&(t.pixelStorei(C,J),f[C]=J)}function ie(C){se.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),se.copy(C))}function ue(C){xe.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),xe.copy(C))}function Y(C,J){let X=c.get(J);X===void 0&&(X=new WeakMap,c.set(J,X));let _e=X.get(C);_e===void 0&&(_e=t.getUniformBlockIndex(J,C.name),t.uniformBlockBinding(J,_e,_e),X.set(C,_e))}function ee(C,J,X){const me=c.get(J).get(C);l[me]!==X&&(t.bindBufferBase(t.UNIFORM_BUFFER,me,X),l[me]=X)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},ae=null,de={},d={},l={},h=new WeakMap,g=[],x=null,m=!1,p=null,_=null,w=null,S=null,T=null,A=null,v=null,b=new Ze(0,0,0),k=0,N=!1,O=null,B=null,Z=null,P=null,W=null,se.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Ee,disable:He,bindFramebuffer:vt,drawBuffers:ke,useProgram:ot,setBlending:Ut,setMaterial:ut,setFlipSided:Bt,setCullFace:xt,setLineWidth:dn,setPolygonOffset:Rt,setScissorTest:nn,activeTexture:fn,bindTexture:hn,unbindTexture:z,compressedTexImage2D:pn,compressedTexImage3D:mt,texImage2D:y,texImage3D:R,pixelStorei:L,getParameter:H,updateUBOMapping:Y,uniformBlockBinding:ee,texStorage2D:te,texStorage3D:E,texSubImage2D:D,texSubImage3D:I,compressedTexSubImage2D:ne,compressedTexSubImage3D:j,scissor:ie,viewport:ue,reset:fe}}function bS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,f=new Set;let d;const h=new WeakMap,g=new Set,x=new FinalizationRegistry(E=>g.delete(E));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,y){return m?new OffscreenCanvas(E,y):Ro("canvas")}function _(E,y,R){let H=1;const L=te(E);if((L.width>R||L.height>R)&&(H=R/Math.max(L.width,L.height)),H<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ie=Math.floor(H*L.width),ue=Math.floor(H*L.height);d===void 0&&(d=p(ie,ue));const Y=y?p(ie,ue):d;return Y.width=ie,Y.height=ue,Y.getContext("2d").drawImage(E,0,0,ie,ue),Be("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ie+"x"+ue+")."),Y}else return"data"in E&&Be("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),E;return E}function w(E){return E.generateMipmaps}function S(E){t.generateMipmap(E)}function T(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(E,y,R,H,L,ie=!1){if(E!==null){if(t[E]!==void 0)return t[E];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;H&&(ue=e.get("EXT_texture_norm16"),ue||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=y;if(y===t.RED&&(R===t.FLOAT&&(Y=t.R32F),R===t.HALF_FLOAT&&(Y=t.R16F),R===t.UNSIGNED_BYTE&&(Y=t.R8),R===t.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),R===t.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),y===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.R8UI),R===t.UNSIGNED_SHORT&&(Y=t.R16UI),R===t.UNSIGNED_INT&&(Y=t.R32UI),R===t.BYTE&&(Y=t.R8I),R===t.SHORT&&(Y=t.R16I),R===t.INT&&(Y=t.R32I)),y===t.RG&&(R===t.FLOAT&&(Y=t.RG32F),R===t.HALF_FLOAT&&(Y=t.RG16F),R===t.UNSIGNED_BYTE&&(Y=t.RG8),R===t.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),R===t.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),y===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.RG8UI),R===t.UNSIGNED_SHORT&&(Y=t.RG16UI),R===t.UNSIGNED_INT&&(Y=t.RG32UI),R===t.BYTE&&(Y=t.RG8I),R===t.SHORT&&(Y=t.RG16I),R===t.INT&&(Y=t.RG32I)),y===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),R===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),R===t.UNSIGNED_INT&&(Y=t.RGB32UI),R===t.BYTE&&(Y=t.RGB8I),R===t.SHORT&&(Y=t.RGB16I),R===t.INT&&(Y=t.RGB32I)),y===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),R===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),R===t.UNSIGNED_INT&&(Y=t.RGBA32UI),R===t.BYTE&&(Y=t.RGBA8I),R===t.SHORT&&(Y=t.RGBA16I),R===t.INT&&(Y=t.RGBA32I)),y===t.RGB&&(R===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),R===t.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),R===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),R===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),y===t.RGBA){const ee=ie?Ao:tt.getTransfer(L);R===t.FLOAT&&(Y=t.RGBA32F),R===t.HALF_FLOAT&&(Y=t.RGBA16F),R===t.UNSIGNED_BYTE&&(Y=ee===dt?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),R===t.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),R===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function v(E,y){let R;return E?y===null||y===ni||y===ss?R=t.DEPTH24_STENCIL8:y===Bn?R=t.DEPTH32F_STENCIL8:y===ta&&(R=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ni||y===ss?R=t.DEPTH_COMPONENT24:y===Bn?R=t.DEPTH_COMPONENT32F:y===ta&&(R=t.DEPTH_COMPONENT16),R}function b(E,y){return w(E)===!0||E.isFramebufferTexture&&E.minFilter!==Zt&&E.minFilter!==xn?Math.log2(Math.max(y.width,y.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?y.mipmaps.length:1}function k(E){const y=new WeakRef(E);i.get(E).__ref=y,g.add(y),x.register(E,y,y)}function N(E){const y=i.get(E).__ref;y!==void 0&&(g.delete(y),x.unregister(y))}function O(E){Z(E.target)}function B(E){P(E.target)}function Z(E){E.removeEventListener("dispose",O),N(E),Q(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&f.delete(E)}function P(E){E.removeEventListener("dispose",B),N(E),pe(E)}function W(){for(const E of g){const y=E.deref();y!==void 0&&(y.isRenderTarget===!0?P(y):Z(y))}g.clear(),f.clear()}function Q(E){const y=i.get(E);if(y.__webglInit===void 0)return;const R=E.source,H=h.get(R);if(H){const L=H[y.__cacheKey];L.usedTimes--,L.usedTimes===0&&V(E),Object.keys(H).length===0&&h.delete(R)}i.remove(E)}function V(E){const y=i.get(E);t.deleteTexture(y.__webglTexture);const R=E.source,H=h.get(R);delete H[y.__cacheKey],a.memory.textures--}function pe(E){const y=i.get(E);y.__depthDisposeCallback&&y.__depthDisposeCallback();const R=E.depthTexture;if(R&&R.renderTarget===E&&Z(R),E.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(y.__webglFramebuffer[L]))for(let ie=0;ie<y.__webglFramebuffer[L].length;ie++)t.deleteFramebuffer(y.__webglFramebuffer[L][ie]);else t.deleteFramebuffer(y.__webglFramebuffer[L]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[L])}else{if(Array.isArray(y.__webglFramebuffer))for(let L=0;L<y.__webglFramebuffer.length;L++)t.deleteFramebuffer(y.__webglFramebuffer[L]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let L=0;L<y.__webglColorRenderbuffer.length;L++)y.__webglColorRenderbuffer[L]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[L]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=E.textures;for(let L=0,ie=H.length;L<ie;L++){const ue=i.get(H[L]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(H[L])}i.remove(E)}let K=0;function ae(){K=0}function de(){return K}function Ie(E){K=E}function $e(){const E=K;return E>=r.maxTextures&&Be("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),K+=1,E}function se(E){const y=[];return y.push(E.wrapS),y.push(E.wrapT),y.push(E.wrapR||0),y.push(E.magFilter),y.push(E.minFilter),y.push(E.anisotropy),y.push(E.internalFormat),y.push(E.format),y.push(E.type),y.push(E.generateMipmaps),y.push(E.mipmapsAutoUpdate),y.push(E.premultiplyAlpha),y.push(E.flipY),y.push(E.unpackAlignment),y.push(E.colorSpace),y.join()}function xe(E,y){const R=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&R.__version!==E.version){const H=E.image;if(H===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(H.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(R,E,y);return}}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+y)}function Re(E,y){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,y);return}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+y)}function Oe(E,y){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,y);return}n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+y)}function Ee(E,y){const R=i.get(E);if(E.version>0&&R.__version!==E.version){Bt(R,E,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+y)}const He={[Mo]:t.REPEAT,[vi]:t.CLAMP_TO_EDGE,[Jl]:t.MIRRORED_REPEAT},vt={[Zt]:t.NEAREST,[Rg]:t.NEAREST_MIPMAP_NEAREST,[wa]:t.NEAREST_MIPMAP_LINEAR,[xn]:t.LINEAR,[ol]:t.LINEAR_MIPMAP_NEAREST,[$i]:t.LINEAR_MIPMAP_LINEAR},ke={[Lg]:t.NEVER,[Ch]:t.ALWAYS,[Ng]:t.LESS,[Ah]:t.LEQUAL,[Dg]:t.EQUAL,[Rh]:t.GEQUAL,[Ug]:t.GREATER,[Og]:t.NOTEQUAL};function ot(E,y){if(y.type===Bn&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===xn||y.magFilter===ol||y.magFilter===wa||y.magFilter===$i||y.minFilter===xn||y.minFilter===ol||y.minFilter===wa||y.minFilter===$i)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,He[y.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,He[y.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,He[y.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,vt[y.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,vt[y.minFilter]),y.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ke[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Zt||y.minFilter!==wa&&y.minFilter!==$i||y.type===Bn&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function ct(E,y){let R=!1;E.__webglInit===void 0&&(E.__webglInit=!0,y.addEventListener("dispose",O),k(y));const H=y.source;let L=h.get(H);L===void 0&&(L={},h.set(H,L));const ie=se(y);if(ie!==E.__cacheKey){L[ie]===void 0&&(L[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,R=!0),L[ie].usedTimes++;const ue=L[E.__cacheKey];ue!==void 0&&(L[E.__cacheKey].usedTimes--,ue.usedTimes===0&&V(y)),E.__cacheKey=ie,E.__webglTexture=L[ie].texture}return R}function Ye(E,y,R){return Math.floor(Math.floor(E/R)/y)}function Ut(E,y,R,H){const ie=E.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,R,H,y.data);else{ie.sort((C,J)=>C.start-J.start);let ue=0;for(let C=1;C<ie.length;C++){const J=ie[ue],X=ie[C],_e=J.start+J.count,me=Ye(X.start,y.width,4),ge=Ye(J.start,y.width,4);X.start<=_e+1&&me===ge&&Ye(X.start+X.count-1,y.width,4)===me?J.count=Math.max(J.count,X.start+X.count-J.start):(++ue,ie[ue]=X)}ie.length=ue+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let C=0,J=ie.length;C<J;C++){const X=ie[C],_e=Math.floor(X.start/4),me=Math.ceil(X.count/4),ge=_e%y.width,ye=Math.floor(_e/y.width),De=me,le=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,ye),n.texSubImage2D(t.TEXTURE_2D,0,ge,ye,De,le,R,H,y.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function ut(E,y,R){let H=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(H=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(H=t.TEXTURE_3D);const L=ct(E,y),ie=y.source;n.bindTexture(H,E.__webglTexture,t.TEXTURE0+R);const ue=i.get(ie);if(ie.version!==ue.__version||L===!0){if(n.activeTexture(t.TEXTURE0+R),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const le=tt.getPrimaries(tt.workingColorSpace),Ce=y.colorSpace===zi?null:tt.getPrimaries(y.colorSpace),ze=y.colorSpace===zi||le===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=_(y.image,!1,r.maxTextureSize);ee=j(y,ee);const fe=s.convert(y.format,y.colorSpace),C=s.convert(y.type);let J=A(y.internalFormat,fe,C,y.normalized,y.colorSpace,y.isVideoTexture);ot(H,y);let X;const _e=y.mipmaps,me=y.isVideoTexture!==!0,ge=ue.__version===void 0||L===!0,ye=ie.dataReady,De=b(y,ee);if(y.isDepthTexture)J=v(y.format===Hi,y.type),ge&&(me?n.texStorage2D(t.TEXTURE_2D,1,J,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,J,ee.width,ee.height,0,fe,C,null));else if(y.isDataTexture)if(_e.length>0){me&&ge&&n.texStorage2D(t.TEXTURE_2D,De,J,_e[0].width,_e[0].height);for(let le=0,Ce=_e.length;le<Ce;le++)X=_e[le],me?ye&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,X.width,X.height,fe,C,X.data):n.texImage2D(t.TEXTURE_2D,le,J,X.width,X.height,0,fe,C,X.data);y.generateMipmaps=!1}else me?(ge&&n.texStorage2D(t.TEXTURE_2D,De,J,ee.width,ee.height),ye&&Ut(y,ee,fe,C)):n.texImage2D(t.TEXTURE_2D,0,J,ee.width,ee.height,0,fe,C,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){me&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,J,_e[0].width,_e[0].height,ee.depth);for(let le=0,Ce=_e.length;le<Ce;le++)if(X=_e[le],y.format!==jn)if(fe!==null)if(me){if(ye)if(y.layerUpdates.size>0){const ze=Nd(X.width,X.height,y.format,y.type);for(const Se of y.layerUpdates){const st=X.data.subarray(Se*ze/X.data.BYTES_PER_ELEMENT,(Se+1)*ze/X.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Se,X.width,X.height,1,fe,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,ee.depth,fe,X.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,J,X.width,X.height,ee.depth,0,X.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else me?ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,X.width,X.height,ee.depth,fe,C,X.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,J,X.width,X.height,ee.depth,0,fe,C,X.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{me&&ge&&n.texStorage2D(t.TEXTURE_2D,De,J,_e[0].width,_e[0].height);for(let le=0,Ce=_e.length;le<Ce;le++)X=_e[le],y.format!==jn?fe!==null?me?ye&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,X.width,X.height,fe,X.data):n.compressedTexImage2D(t.TEXTURE_2D,le,J,X.width,X.height,0,X.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):me?ye&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,X.width,X.height,fe,C,X.data):n.texImage2D(t.TEXTURE_2D,le,J,X.width,X.height,0,fe,C,X.data)}else if(y.isDataArrayTexture)if(me){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,J,ee.width,ee.height,ee.depth),ye)if(y.layerUpdates.size>0){const le=Nd(ee.width,ee.height,y.format,y.type);for(const Ce of y.layerUpdates){const ze=ee.data.subarray(Ce*le/ee.data.BYTES_PER_ELEMENT,(Ce+1)*le/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ce,ee.width,ee.height,1,fe,C,ze)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,fe,C,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,J,ee.width,ee.height,ee.depth,0,fe,C,ee.data);else if(y.isData3DTexture)me?(ge&&n.texStorage3D(t.TEXTURE_3D,De,J,ee.width,ee.height,ee.depth),ye&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,fe,C,ee.data)):n.texImage3D(t.TEXTURE_3D,0,J,ee.width,ee.height,ee.depth,0,fe,C,ee.data);else if(y.isFramebufferTexture){if(ge)if(me)n.texStorage2D(t.TEXTURE_2D,De,J,ee.width,ee.height);else{let le=ee.width,Ce=ee.height;for(let ze=0;ze<De;ze++)n.texImage2D(t.TEXTURE_2D,ze,J,le,Ce,0,fe,C,null),le>>=1,Ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in t){const le=t.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ee.parentNode!==le){le.appendChild(ee),f.add(y),le.onpaint=Ce=>{const ze=Ce.changedElements;for(const Se of f)ze.includes(Se.image)&&(Se.needsUpdate=!0)},le.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const ze=t.RGBA,Se=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ze,Se,st,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(_e.length>0){if(me&&ge){const le=te(_e[0]);n.texStorage2D(t.TEXTURE_2D,De,J,le.width,le.height)}for(let le=0,Ce=_e.length;le<Ce;le++)X=_e[le],me?ye&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,fe,C,X):n.texImage2D(t.TEXTURE_2D,le,J,fe,C,X);y.generateMipmaps=!1}else if(me){if(ge){const le=te(ee);n.texStorage2D(t.TEXTURE_2D,De,J,le.width,le.height)}ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,C,ee)}else n.texImage2D(t.TEXTURE_2D,0,J,fe,C,ee);w(y)&&y.mipmapsAutoUpdate===!0&&S(H),ue.__version=ie.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function Bt(E,y,R){if(y.image.length!==6)return;const H=ct(E,y),L=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+R);const ie=i.get(L);if(L.version!==ie.__version||H===!0){n.activeTexture(t.TEXTURE0+R);const ue=tt.getPrimaries(tt.workingColorSpace),Y=y.colorSpace===zi?null:tt.getPrimaries(y.colorSpace),ee=y.colorSpace===zi||ue===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const fe=y.isCompressedTexture||y.image[0].isCompressedTexture,C=y.image[0]&&y.image[0].isDataTexture,J=[];for(let Se=0;Se<6;Se++)!fe&&!C?J[Se]=_(y.image[Se],!0,r.maxCubemapSize):J[Se]=C?y.image[Se].image:y.image[Se],J[Se]=j(y,J[Se]);const X=J[0],_e=s.convert(y.format,y.colorSpace),me=s.convert(y.type);let ge=A(y.internalFormat,_e,me,y.normalized,y.colorSpace);const ye=y.isVideoTexture!==!0,De=ie.__version===void 0||H===!0,le=L.dataReady;let Ce=b(y,X);ot(t.TEXTURE_CUBE_MAP,y);let ze;if(y.isDepthTexture){if(ge=v(y.format===Hi,y.type),De)if(ye)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ge,X.width,X.height);else for(let Se=0;Se<6;Se++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ge,X.width,X.height,0,_e,me,null)}else if(fe){ye&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,ge,X.width,X.height);for(let Se=0;Se<6;Se++){ze=J[Se].mipmaps;for(let st=0;st<ze.length;st++){const bt=ze[st];y.format!==jn?_e!==null?ye?le&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,0,0,bt.width,bt.height,_e,bt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,ge,bt.width,bt.height,0,bt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,0,0,bt.width,bt.height,_e,me,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,ge,bt.width,bt.height,0,_e,me,bt.data)}}}else{if(ze=y.mipmaps,ye&&De){ze.length>0&&Ce++;const Se=te(J[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,ge,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(C){ye?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,J[Se].width,J[Se].height,_e,me,J[Se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ge,J[Se].width,J[Se].height,0,_e,me,J[Se].data);for(let st=0;st<ze.length;st++){const Wn=ze[st].image[Se].image;ye?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,0,0,Wn.width,Wn.height,_e,me,Wn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,ge,Wn.width,Wn.height,0,_e,me,Wn.data)}}else{ye?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,_e,me,J[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ge,_e,me,J[Se]);for(let st=0;st<ze.length;st++){const bt=ze[st];ye?le&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,0,0,_e,me,bt.image[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,ge,_e,me,bt.image[Se])}}}w(y)&&y.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),ie.__version=L.version,y.onUpdate&&y.onUpdate(y)}E.__version=y.version}function xt(E,y,R,H,L,ie){const ue=s.convert(R.format,R.colorSpace),Y=s.convert(R.type),ee=A(R.internalFormat,ue,Y,R.normalized,R.colorSpace),fe=i.get(y),C=i.get(R);if(C.__renderTarget=y,!fe.__hasExternalTextures){const J=Math.max(1,y.width>>ie),X=Math.max(1,y.height>>ie);L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?n.texImage3D(L,ie,ee,J,X,y.depth,0,ue,Y,null):n.texImage2D(L,ie,ee,J,X,0,ue,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),I(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,H,L,C.__webglTexture,0,D(y)):(L===t.TEXTURE_2D||L>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,H,L,C.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function dn(E,y,R){if(t.bindRenderbuffer(t.RENDERBUFFER,E),y.depthBuffer){const H=y.depthTexture,L=H&&H.isDepthTexture?H.type:null,ie=v(y.stencilBuffer,L),ue=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;I(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),ie,y.width,y.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),ie,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ie,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,E)}else{const H=y.textures;for(let L=0;L<H.length;L++){const ie=H[L],ue=s.convert(ie.format,ie.colorSpace),Y=s.convert(ie.type),ee=A(ie.internalFormat,ue,Y,ie.normalized,ie.colorSpace);I(y)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),ee,y.width,y.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),ee,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,ee,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Rt(E,y,R){const H=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const L=i.get(y.depthTexture);L.__renderTarget=y;const ie=H?y.depthTexture.image[0]:y.depthTexture.image;(!L.__webglTexture||ie.width!==y.width||ie.height!==y.height)&&(ie.width=y.width,ie.height=y.height,y.depthTexture.needsUpdate=!0),H?Ee(y.depthTexture,0):xe(y.depthTexture,0);const ue=L.__webglTexture,Y=D(y),ee=H?t.TEXTURE_CUBE_MAP_POSITIVE_X+R:t.TEXTURE_2D,fe=y.depthTexture.format===Hi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===Xi)I(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ee,ue,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ee,ue,0);else if(y.depthTexture.format===Hi)I(y)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,ee,ue,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function nn(E){const y=i.get(E),R=E.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==E.depthTexture){const H=E.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),H){const L=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,H.removeEventListener("dispose",L)};H.addEventListener("dispose",L),y.__depthDisposeCallback=L}y.__boundDepthTexture=H}if(E.depthTexture&&!y.__autoAllocateDepthBuffer)if(R)for(let H=0;H<6;H++)Rt(y.__webglFramebuffer[H],E,H);else E.texture.mipmaps.length>0?Rt(y.__webglFramebuffer[0],E,0):Rt(y.__webglFramebuffer,E,0);else if(R){y.__webglDepthbuffer=[];for(let H=0;H<6;H++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[H]),y.__webglDepthbuffer[H]===void 0)y.__webglDepthbuffer[H]=t.createRenderbuffer(),dn(y.__webglDepthbuffer[H],E,!1);else{const L=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer[H];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,ie)}}else if(E.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),dn(y.__webglDepthbuffer,E,!1);else{const L=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,ie)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function fn(E,y,R){const H=i.get(E);y!==void 0&&xt(H.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&nn(E)}function hn(E){const y=E.texture,R=i.get(E),H=i.get(y);E.addEventListener("dispose",B),k(E);const L=E.textures,ie=E.isWebGLCubeRenderTarget===!0,ue=L.length>1;if(ue||(H.__webglTexture===void 0&&(H.__webglTexture=t.createTexture()),H.__version=y.version,a.memory.textures++),ie){R.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0){R.__webglFramebuffer[Y]=[];for(let ee=0;ee<y.mipmaps.length;ee++)R.__webglFramebuffer[Y][ee]=t.createFramebuffer()}else R.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(y.mipmaps.length>0){R.__webglFramebuffer=[];for(let Y=0;Y<y.mipmaps.length;Y++)R.__webglFramebuffer[Y]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Y=0,ee=L.length;Y<ee;Y++){const fe=i.get(L[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(E.samples>0&&I(E)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let Y=0;Y<L.length;Y++){const ee=L[Y];R.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[Y]);const fe=s.convert(ee.format,ee.colorSpace),C=s.convert(ee.type),J=A(ee.internalFormat,fe,C,ee.normalized,ee.colorSpace,E.isXRRenderTarget===!0),X=D(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,X,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,R.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),dn(R.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,H.__webglTexture),ot(t.TEXTURE_CUBE_MAP,y);for(let Y=0;Y<6;Y++)if(y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)xt(R.__webglFramebuffer[Y][ee],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ee);else xt(R.__webglFramebuffer[Y],E,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(y)?S(t.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let Y=0,ee=L.length;Y<ee;Y++){const fe=L[Y],C=i.get(fe);let J=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,C.__webglTexture),ot(J,fe),xt(R.__webglFramebuffer,E,fe,t.COLOR_ATTACHMENT0+Y,J,0),w(fe)&&S(J)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,H.__webglTexture),ot(Y,y),y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)xt(R.__webglFramebuffer[ee],E,y,t.COLOR_ATTACHMENT0,Y,ee);else xt(R.__webglFramebuffer,E,y,t.COLOR_ATTACHMENT0,Y,0);w(y)?S(Y):y.mipmaps.length>0&&t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),n.unbindTexture()}E.depthBuffer&&nn(E)}function z(E){const y=E.textures;for(let R=0,H=y.length;R<H;R++){const L=y[R];if(w(L)&&L.mipmapsAutoUpdate===!0){const ie=T(E),ue=i.get(L).__webglTexture;n.bindTexture(ie,ue),S(ie),n.unbindTexture()}}}const pn=[];function mt(E){if(E.samples>0){if(I(E)===!1){const y=E.textures,R=E.width,H=E.height;let L=t.COLOR_BUFFER_BIT;const ie=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(E),Y=y.length>1;if(Y)for(let fe=0;fe<y.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<y.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(L|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(L|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const C=i.get(y[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,R,H,0,0,R,H,L,t.NEAREST),l===!0&&(pn.length=0,pn.push(t.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&pn.push(ie),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,pn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<y.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const C=i.get(y[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const y=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function D(E){return Math.min(r.maxSamples,E.samples)}function I(E){const y=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ne(E){const y=a.render.frame;u.get(E)!==y&&(u.set(E,y),E.update())}function j(E,y){const R=E.colorSpace,H=E.format,L=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||R!==To&&R!==zi&&(tt.getTransfer(R)===dt?(H!==jn||L!==Tn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",R)),y}function te(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$e,this.resetTextureUnits=ae,this.getTextureUnits=de,this.setTextureUnits=Ie,this.setTexture2D=xe,this.setTexture2DArray=Re,this.setTexture3D=Oe,this.setTextureCube=Ee,this.rebindTextures=fn,this.setupRenderTarget=hn,this.updateRenderTargetMipmap=z,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=nn,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=I,this.dispose=W}function MS(t,e){function n(i,r=zi){let s;const a=tt.getTransfer(r);if(i===Tn)return t.UNSIGNED_BYTE;if(i===Jc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Qc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Mh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Eh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sh)return t.BYTE;if(i===bh)return t.SHORT;if(i===ta)return t.UNSIGNED_SHORT;if(i===jc)return t.INT;if(i===ni)return t.UNSIGNED_INT;if(i===Bn)return t.FLOAT;if(i===ii)return t.HALF_FLOAT;if(i===wh)return t.ALPHA;if(i===Th)return t.RGB;if(i===jn)return t.RGBA;if(i===Xi)return t.DEPTH_COMPONENT;if(i===Hi)return t.DEPTH_STENCIL;if(i===eu)return t.RED;if(i===tu)return t.RED_INTEGER;if(i===Mr)return t.RG;if(i===nu)return t.RG_INTEGER;if(i===iu)return t.RGBA_INTEGER;if(i===ao||i===oo||i===lo||i===co)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ao)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ao)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===oo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===lo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===co)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ql||i===ec||i===tc||i===nc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===tc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ic||i===rc||i===sc||i===ac||i===oc||i===Eo||i===lc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ic||i===rc)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===sc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===ac)return s.COMPRESSED_R11_EAC;if(i===oc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Eo)return s.COMPRESSED_RG11_EAC;if(i===lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cc||i===uc||i===dc||i===fc||i===hc||i===pc||i===mc||i===gc||i===_c||i===vc||i===xc||i===yc||i===Sc||i===bc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===cc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===uc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===dc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===hc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===mc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===gc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===_c)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===yc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Mc||i===Ec||i===wc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Mc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Tc||i===Ac||i===wo||i===Rc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Tc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===wo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ss?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const ES=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wS=`
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

}`;class TS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Hh(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Er({vertexShader:ES,fragmentShader:wS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AS extends Tr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const x=typeof XRWebGLBinding<"u",m=new TS,p={},_=n.getContextAttributes();let w=null,S=null;const T=[],A=[],v=new We;let b=null,k=null;const N=new zn;N.viewport=new Et;const O=new zn;O.viewport=new Et;const B=[N,O],Z=new z0;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let xe=T[se];return xe===void 0&&(xe=new pl,T[se]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(se){let xe=T[se];return xe===void 0&&(xe=new pl,T[se]=xe),xe.getGripSpace()},this.getHand=function(se){let xe=T[se];return xe===void 0&&(xe=new pl,T[se]=xe),xe.getHandSpace()};function Q(se){const xe=A.indexOf(se.inputSource);if(xe===-1)return;const Re=T[xe];Re!==void 0&&(Re.update(se.inputSource,se.frame,c||a),Re.dispatchEvent({type:se.type,data:se.inputSource}))}function V(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",pe);for(let se=0;se<T.length;se++){const xe=A[se];xe!==null&&(A[se]=null,T[se].disconnect(xe))}P=null,W=null,m.reset();for(const se in p)delete p[se];if(e.setRenderTarget(w),h=null,d=null,f=null,r=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(v.width,v.height,!1),k!==null){const se=k.camera;se.fov=k.fov,se.zoom=k.zoom,se.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",V),r.addEventListener("inputsourceschange",pe),_.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(v),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Oe=null,Ee=null;_.depth&&(Ee=_.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=_.stencil?Hi:Xi,Oe=_.stencil?ss:ni);const He={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(He),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Qn(d.textureWidth,d.textureHeight,{format:jn,type:Tn,depthTexture:new as(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Re),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),S=new Qn(h.framebufferWidth,h.framebufferHeight,{format:jn,type:Tn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function pe(se){for(let xe=0;xe<se.removed.length;xe++){const Re=se.removed[xe],Oe=A.indexOf(Re);Oe>=0&&(A[Oe]=null,T[Oe].disconnect(Re))}for(let xe=0;xe<se.added.length;xe++){const Re=se.added[xe];let Oe=A.indexOf(Re);if(Oe===-1){for(let He=0;He<T.length;He++)if(He>=A.length){A.push(Re),Oe=He;break}else if(A[He]===null){A[He]=Re,Oe=He;break}if(Oe===-1)break}const Ee=T[Oe];Ee&&Ee.connect(Re)}}function K(se,xe){xe===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(xe.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let xe=se.near,Re=se.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),Z.near=O.near=N.near=xe,Z.far=O.far=N.far=Re,(P!==Z.near||W!==Z.far)&&(r.updateRenderState({depthNear:Z.near,depthFar:Z.far}),P=Z.near,W=Z.far),Z.layers.mask=se.layers.mask|6,N.layers.mask=Z.layers.mask&-5,O.layers.mask=Z.layers.mask&-3;const Oe=se.parent,Ee=Z.cameras;K(Z,Oe);for(let He=0;He<Ee.length;He++)K(Ee[He],Oe);Z.projectionMatrix.copy(N.projectionMatrix),Z.projectionMatrixInverse.copy(N.projectionMatrixInverse),k===null&&se.isPerspectiveCamera&&(k={camera:se,fov:se.fov,zoom:se.zoom}),ae(se,Z,Oe)};function ae(se,xe,Re){Re===null?se.matrix.copy(xe.matrixWorld):(se.matrix.copy(Re.matrixWorld),se.matrix.invert(),se.matrix.multiply(xe.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(xe.projectionMatrix),se.projectionMatrixInverse.copy(xe.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=ia*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Z)},this.getCameraTexture=function(se){return p[se]};let de=null;function Ie(se,xe){if(u=xe.getViewerPose(c||a),g=xe,u!==null){const Re=u.views;h!==null&&(e.setRenderTargetFramebuffer(S,h.framebuffer),e.setRenderTarget(S));let Oe=!1;Re.length!==Z.cameras.length&&(Z.cameras.length=0,Oe=!0);for(let ke=0;ke<Re.length;ke++){const ot=Re[ke];let ct=null;if(h!==null)ct=h.getViewport(ot);else{const Ut=f.getViewSubImage(d,ot);ct=Ut.viewport,ke===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(S))}let Ye=B[ke];Ye===void 0&&(Ye=new zn,Ye.layers.enable(ke),Ye.viewport=new Et,B[ke]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ct.x,ct.y,ct.width,ct.height),ke===0&&(Z.matrix.copy(Ye.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Oe===!0&&Z.cameras.push(Ye)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){f=i.getBinding();const ke=f.getDepthInformation(Re[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,r.renderState)}if(Ee&&Ee.includes("camera-access")&&x){e.state.unbindTexture(),f=i.getBinding();for(let ke=0;ke<Re.length;ke++){const ot=Re[ke].camera;if(ot){let ct=p[ot];ct||(ct=new Hh,p[ot]=ct);const Ye=f.getCameraImage(ot);ct.sourceTexture=Ye}}}}for(let Re=0;Re<T.length;Re++){const Oe=A[Re],Ee=T[Re];Oe!==null&&Ee!==void 0&&Ee.update(Oe,xe,c||a)}de&&de(se,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const $e=new Zh;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(se){de=se},this.dispose=function(){}}}const RS=new pt,ip=new Ge;ip.set(-1,0,0,0,1,0,0,0,1);function CS(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gh(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,_,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),x(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,_,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===un&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===un&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=e.get(p),w=_.envMap,S=_.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(RS.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ip),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,_){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===un&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const _=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function PS(t,e,n,i){let r={},s={};function a(_,w){const S=w.program;i.uniformBlockBinding(_,S,r[_.id])}function o(_,w){let S=r[_.id];S===void 0&&(g(_),S=l(_),r[_.id]=S,_.addEventListener("dispose",m));const T=w.program;i.updateUBOMapping(_,T);const A=e.render.frame;s[_.id]!==A&&(c(_),s[_.id]=A)}function l(_){const w=t.createBuffer(),S=_.__size,T=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,S,T),t.bindBuffer(t.UNIFORM_BUFFER,null),w}function c(_){const w=r[_.id],S=_.uniforms,T=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let A=0,v=S.length;A<v;A++){const b=S[A];if(Array.isArray(b))for(let k=0,N=b.length;k<N;k++)u(b[k],A,k,T);else u(b,A,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(_,w,S,T){if(d(_,w,S,T)===!0){const A=_.__offset,v=_.value;if(Array.isArray(v)){let b=0;for(let k=0;k<v.length;k++){const N=v[k],O=x(N,!0);f(N,_.__data,b),b+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(v,_.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,_.__data)}}function f(_,w,S){typeof _=="number"||typeof _=="boolean"?w[S]=_:_.isMatrix3?(w[S]=_.elements[0],w[S+1]=_.elements[1],w[S+2]=_.elements[2],w[S+3]=0,w[S+4]=_.elements[3],w[S+5]=_.elements[4],w[S+6]=_.elements[5],w[S+7]=0,w[S+8]=_.elements[6],w[S+9]=_.elements[7],w[S+10]=_.elements[8],w[S+11]=0):ArrayBuffer.isView(_)?w.set(_.subarray(0,w.length-S),S):_.toArray(w,S)}function d(_,w,S,T){const A=_.value,v=w+"_"+S;if(Array.isArray(A)){T[v]===void 0&&(T[v]=[]);const b=T[v];let k=!1;for(let N=0;N<A.length;N++)h(A[N],b,N)===!0&&(k=!0);return k}return h(A,T,v)}function h(_,w,S){if(w[S]===void 0)return typeof _=="number"||typeof _=="boolean"?w[S]=_:ArrayBuffer.isView(_)?w[S]=_.slice():w[S]=_.clone(),!0;{const T=w[S];if(typeof _=="number"||typeof _=="boolean"){if(T!==_)return w[S]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(T.equals(_)===!1)return T.copy(_),!0}}return!1}function g(_){const w=_.uniforms;let S=0;const T=16;for(let v=0,b=w.length;v<b;v++){const k=Array.isArray(w[v])?w[v]:[w[v]];for(let N=0,O=k.length;N<O;N++){const B=k[N],Z=Array.isArray(B.value)?B.value:[B.value],P=Array.isArray(w[v])||Array.isArray(B.value);let W=S;for(let V=0,pe=Z.length;V<pe;V++){const K=Z[V],ae=x(K,P),de=S%T,Ie=de%ae.boundary,$e=de+Ie;S+=Ie,$e!==0&&T-$e<ae.storage&&(S+=T-$e),V===0&&(W=S),S+=ae.storage}const Q=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new Q((S-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}const A=S%T;return A>0&&(S+=T-A),_.__size=S,_.__cache={},this}function x(_,w){const S={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(S.boundary=4,S.storage=4):_.isVector2?(S.boundary=8,S.storage=8):_.isVector3||_.isColor?(S.boundary=16,S.storage=12):_.isVector4?(S.boundary=16,S.storage=16):_.isMatrix3?(S.boundary=16,S.storage=48):_.isMatrix4?(S.boundary=16,S.storage=64):_.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(S.boundary=16,S.storage=_.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",_),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(_){const w=_.target;w.removeEventListener("dispose",m),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const _ in r)t.deleteBuffer(r[_]);r={},s={}}return{bind:a,update:o,dispose:p}}const IS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Zn=null;function LS(){return Zn===null&&(Zn=new zh(IS,16,16,Mr,ii),Zn.name="DFG_LUT",Zn.minFilter=xn,Zn.magFilter=xn,Zn.wrapS=vi,Zn.wrapT=vi,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}class NS{constructor(e={}){const{canvas:n=kg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=Tn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const x=h,m=new Set([iu,nu,tu]),p=new Set([Tn,ni,ta,ss,Jc,Qc]),_=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let T=null,A=null;const v=[],b=[];let k=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let O=!1,B=null,Z=null,P=null,W=null;this._outputColorSpace=Ot;let Q=0,V=0,pe=null,K=-1,ae=null;const de=new Et,Ie=new Et;let $e=null;const se=new Ze(0);let xe=0,Re=n.width,Oe=n.height,Ee=1,He=null,vt=null;const ke=new Et(0,0,Re,Oe),ot=new Et(0,0,Re,Oe);let ct=!1;const Ye=new ra,Ut=new cu;let ut=!1,Bt=!1;const xt=new pt,dn=new F,Rt=new Et,nn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let fn=!1;function hn(){return pe===null?Ee:1}let z=i;function pn(M,U){return n.getContext(M,U)}let mt,D,I,ne,j,te,E,y,R,H,L,ie,ue,Y,ee,fe,C,J,X,_e,me,ge,ye;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Yc}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Se,!1),z===null){const U="webgl2";if(z=pn(U,M),z===null)throw pn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(M){throw n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),at("WebGLRenderer: "+M.message),M}function De(){mt=new Ox(z),mt.init(),me=new MS(z,mt),D=new wx(z,mt,e,me),I=new SS(z,mt),D.reversedDepthBuffer&&d&&I.buffers.depth.setReversed(!0),Z=z.createFramebuffer(),P=z.createFramebuffer(),W=z.createFramebuffer(),ne=new zx(z),j=new oS,te=new bS(z,mt,I,j,D,me,ne),E=new Ux(N),y=new $0(z),ge=new Mx(z,y),R=new Fx(z,y,ne,ge),H=new $x(z,R,y,ge,ne),J=new Bx(z,D,te),ee=new Tx(j),L=new aS(N,E,mt,D,ge,ee),ie=new CS(N,j),ue=new cS,Y=new mS(mt),C=new bx(N,E,I,H,g,l),fe=new yS(N,H,D),ye=new PS(z,ne,D,I),X=new Ex(z,mt,ne),_e=new kx(z,mt,ne),ne.programs=L.programs,N.capabilities=D,N.extensions=mt,N.properties=j,N.renderLists=ue,N.shadowMap=fe,N.state=I,N.info=ne}x!==Tn&&(k=new Gx(x,n.width,n.height,o,r,s));const le=new AS(N,z);this.xr=le,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const M=mt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=mt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(M){M!==void 0&&(Ee=M,this.setSize(Re,Oe,!1))},this.getSize=function(M){return M.set(Re,Oe)},this.setSize=function(M,U,q=!0){if(le.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=M,Oe=U,n.width=Math.floor(M*Ee),n.height=Math.floor(U*Ee),q===!0&&(n.style.width=M+"px",n.style.height=U+"px"),k!==null&&k.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Re*Ee,Oe*Ee).floor()},this.setDrawingBufferSize=function(M,U,q){Re=M,Oe=U,Ee=q,n.width=Math.floor(M*q),n.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(x===Tn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(de)},this.getViewport=function(M){return M.copy(ke)},this.setViewport=function(M,U,q,$){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,U,q,$),I.viewport(de.copy(ke).multiplyScalar(hn()).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,U,q,$){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,U,q,$),I.scissor(Ie.copy(ot).multiplyScalar(hn()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(M){I.setScissorTest(ct=M)},this.setOpaqueSort=function(M){He=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let $=0;if(M){let G=!1;if(pe!==null){const Me=pe.texture.format;G=m.has(Me)}if(G){const Me=pe.texture.type,Pe=p.has(Me),be=C.getClearColor(),Ae=C.getClearAlpha(),Ue=be.r,Ve=be.g,Qe=be.b;Pe?(_[0]=Ue,_[1]=Ve,_[2]=Qe,_[3]=Ae,z.clearBufferuiv(z.COLOR,0,_)):(w[0]=Ue,w[1]=Ve,w[2]=Qe,w[3]=Ae,z.clearBufferiv(z.COLOR,0,w))}else $|=z.COLOR_BUFFER_BIT}U&&($|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),C.dispose(),ue.dispose(),Y.dispose(),te.dispose(),j.dispose(),E.dispose(),H.dispose(),R.dispose(),ge.dispose(),ye.dispose(),L.dispose(),le.dispose(),le.removeEventListener("sessionstart",vs),le.removeEventListener("sessionend",je),Wt.stop()};function Ce(M){M.preventDefault(),Co("WebGLRenderer: Context Lost."),O=!0}function ze(){Co("WebGLRenderer: Context Restored."),O=!1;const M=ne.autoReset,U=fe.enabled,q=fe.autoUpdate,$=fe.needsUpdate,G=fe.type;De(),ne.autoReset=M,fe.enabled=U,fe.autoUpdate=q,fe.needsUpdate=$,fe.type=G}function Se(M){at("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){const U=M.target;U.removeEventListener("dispose",st),bt(U)}function bt(M){Wn(M),j.remove(M)}function Wn(M){const U=j.get(M).programs;U!==void 0&&(U.forEach(function(q){L.releaseProgram(q)}),M.isShaderMaterial&&L.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,$,G,Me){U===null&&(U=nn);const Pe=G.isMesh&&G.matrixWorld.determinantAffine()<0,be=ng(M,U,q,$,G);I.setMaterial($,Pe);let Ae=q.index,Ue=1;if($.wireframe===!0){if(Ae=R.getWireframeAttribute(q),Ae===void 0)return;Ue=2}const Ve=q.drawRange,Qe=q.attributes.position;let Le=Ve.start*Ue,et=(Ve.start+Ve.count)*Ue;Me!==null&&(Le=Math.max(Le,Me.start*Ue),et=Math.min(et,(Me.start+Me.count)*Ue)),Ae!==null?(Le=Math.max(Le,0),et=Math.min(et,Ae.count)):Qe!=null&&(Le=Math.max(Le,0),et=Math.min(et,Qe.count));const Ct=et-Le;if(Ct<0||Ct===1/0)return;ge.setup(G,$,be,q,Ae);let gt,ht=X;if(Ae!==null&&(gt=y.get(Ae),ht=_e,ht.setIndex(gt)),G.isMesh)$.wireframe===!0?(I.setLineWidth($.wireframeLinewidth*hn()),ht.setMode(z.LINES)):ht.setMode(z.TRIANGLES);else if(G.isLine){let Yt=$.linewidth;Yt===void 0&&(Yt=1),I.setLineWidth(Yt*hn()),G.isLineSegments?ht.setMode(z.LINES):G.isLineLoop?ht.setMode(z.LINE_LOOP):ht.setMode(z.LINE_STRIP)}else G.isPoints?ht.setMode(z.POINTS):G.isSprite&&ht.setMode(z.TRIANGLES);if(G.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ht.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Yt=G._multiDrawStarts,Ne=G._multiDrawCounts,rn=G._multiDrawCount,lt=Ae?y.get(Ae).bytesPerElement:1,rr=j.get($).currentProgram.getUniforms();for(let Kt=0;Kt<rn;Kt++)rr.setValue(z,"_gl_DrawID",Kt),ht.render(Yt[Kt]/lt,Ne[Kt])}else if(G.isInstancedMesh)ht.renderInstances(Le,Ct,G.count);else if(q.isInstancedBufferGeometry){const Yt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ne=Math.min(q.instanceCount,Yt);ht.renderInstances(Le,Ct,Ne)}else ht.render(Le,Ct)};function Lr(M,U,q,$){B!==null&&M.isNodeMaterial&&B.setObject($,M),ut===!0&&ee.setState(M,q,!1),M.transparent===!0&&M.side===Ln&&M.forceSinglePass===!1?(M.side=un,M.needsUpdate=!0,nr(M,U,$),M.side=br,M.needsUpdate=!0,nr(M,U,$),M.side=Ln):nr(M,U,$)}this.compile=function(M,U,q=null){q===null&&(q=M),B!==null&&B.renderStart(M,U,q),A=Y.get(q),A.init(U),b.push(A),q.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),M!==q&&M.traverseVisible(function(G){G.isLight&&G.layers.test(U.layers)&&(A.pushLight(G),G.castShadow&&A.pushShadow(G))}),A.setupLights(),B!==null&&B.updateLights(A.state.lightsArray),Bt=this.localClippingEnabled,ut=ee.init(this.clippingPlanes,Bt),ut===!0&&ee.setGlobalState(this.clippingPlanes,U),B!==null&&fe.render(A.state.shadowsArray,q,U);const $=new Set;return M.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const Me=G.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const be=Me[Pe];Lr(be,q,U,G),$.add(be)}else Lr(Me,q,U,G),$.add(Me)}),A=b.pop(),B!==null&&B.renderEnd(),$},this.compileAsync=function(M,U,q=null){const $=this.compile(M,U,q);return new Promise(G=>{function Me(){if($.forEach(function(Pe){const Ae=j.get(Pe).currentProgram;(Ae===void 0||Ae.isReady())&&$.delete(Pe)}),$.size===0){G(M);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ai=null;function Qi(M){Ai&&Ai(M)}function vs(){Wt.stop()}function je(){Wt.start()}const Wt=new Zh;Wt.setAnimationLoop(Qi),typeof self<"u"&&Wt.setContext(self),this.setAnimationLoop=function(M){Ai=M,le.setAnimationLoop(M),M===null?Wt.stop():Wt.start()},le.addEventListener("sessionstart",vs),le.addEventListener("sessionend",je),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;B!==null&&B.renderStart(M,U);const q=le.enabled===!0&&le.isPresenting===!0,$=k!==null&&(pe===null||q)&&k.begin(N,pe);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(le.cameraAutoUpdate===!0&&le.updateCamera(U),U=le.getCamera()),M.isScene===!0&&M.onBeforeRender(N,M,U,pe),A=Y.get(M,b.length),A.init(U),A.state.textureUnits=te.getTextureUnits(),b.push(A),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ut.setFromArrayCamera(U):Ye.setFromProjectionMatrix(xt,$n,U.reversedDepth),Bt=this.localClippingEnabled,ut=ee.init(this.clippingPlanes,Bt),T=ue.get(M,v.length),T.init(),v.push(T),this.info.render.frame++,le.enabled===!0&&le.isPresenting===!0){const Pe=N.xr.getDepthSensingMesh();Pe!==null&&er(Pe,U,-1/0,N.sortObjects)}er(M,U,0,N.sortObjects),T.finish(),B!==null&&B.updateLights(A.state.lightsArray),N.sortObjects===!0&&T.sort(He,vt),fn=le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1,fn&&C.addToRenderList(T,M),this.info.autoReset===!0&&this.info.reset(),ut===!0&&ee.beginShadows();const G=A.state.shadowsArray;if(fe.render(G,M,U),ut===!0&&ee.endShadows(),($&&k.hasRenderPass())===!1){const Pe=T.opaque,be=T.transmissive;if(A.setupLights(),U.isArrayCamera){const Ae=U.cameras;if(be.length>0)for(let Ue=0,Ve=Ae.length;Ue<Ve;Ue++){const Qe=Ae[Ue];xs(Pe,be,M,Qe)}fn&&C.render(M);for(let Ue=0,Ve=Ae.length;Ue<Ve;Ue++){const Qe=Ae[Ue];oi(T,M,Qe,Qe.viewport)}}else be.length>0&&xs(Pe,be,M,U),fn&&C.render(M),oi(T,M,U)}pe!==null&&V===0&&(te.updateMultisampleRenderTarget(pe),te.updateRenderTargetMipmap(pe)),$&&k.end(N),M.isScene===!0&&M.onAfterRender(N,M,U),ge.resetDefaultState(),K=-1,ae=null,b.pop(),b.length>0?(A=b[b.length-1],te.setTextureUnits(A.state.textureUnits),ut===!0&&ee.setGlobalState(N.clippingPlanes,A.state.camera)):A=null,v.pop(),v.length>0?T=v[v.length-1]:T=null,B!==null&&B.renderEnd()};function er(M,U,q,$){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){const Pe=U.isArrayCamera?Ut:Ye;if(!M.frustumCulled||M.intersectsFrustum(Pe)){$&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);const be=H.update(M),Ae=M.material;Ae.visible&&T.push(M,be,Ae,q,Rt.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){const Pe=U.isArrayCamera?Ut:Ye;if(!M.frustumCulled||M.intersectsFrustum(Pe)){const be=H.update(M),Ae=M.material;if($&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Rt.copy(be.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(Ae)){const Ue=be.groups;for(let Ve=0,Qe=Ue.length;Ve<Qe;Ve++){const Le=Ue[Ve],et=Ae[Le.materialIndex];et&&et.visible&&T.push(M,be,et,q,Rt.z,Le,U)}}else Ae.visible&&T.push(M,be,Ae,q,Rt.z,null,U)}}}const Me=M.children;for(let Pe=0,be=Me.length;Pe<be;Pe++)er(Me[Pe],U,q,$)}function oi(M,U,q,$){const{opaque:G,transmissive:Me,transparent:Pe}=M;A.setupLightsView(q),ut===!0&&ee.setGlobalState(N.clippingPlanes,q),$&&I.viewport(de.copy($)),G.length>0&&tr(G,U,q),Me.length>0&&tr(Me,U,q),Pe.length>0&&tr(Pe,U,q),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function xs(M,U,q,$){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[$.id]===void 0){const Le=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[$.id]=new Qn(1,1,{generateMipmaps:!0,type:Le?ii:Tn,minFilter:$i,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}const Me=A.state.transmissionRenderTarget[$.id],Pe=$.viewport||de;Me.setSize(Pe.z*N.transmissionResolutionScale,Pe.w*N.transmissionResolutionScale);const be=N.getRenderTarget(),Ae=N.getActiveCubeFace(),Ue=N.getActiveMipmapLevel();N.setRenderTarget(Me),N.getClearColor(se),xe=N.getClearAlpha(),xe<1&&N.setClearColor(16777215,.5),N.clear(),fn&&C.render(q);const Ve=N.toneMapping;N.toneMapping=Si;const Qe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),A.setupLightsView($),ut===!0&&ee.setGlobalState(N.clippingPlanes,$),tr(M,q,$),te.updateMultisampleRenderTarget(Me),te.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let et=0,Ct=U.length;et<Ct;et++){const gt=U[et],{object:ht,geometry:Yt,material:Ne,group:rn}=gt;if(Ne.side===Ln&&ht.layers.test($.layers)){const lt=Ne.side;Ne.side=un,Ne.needsUpdate=!0,Sa(ht,q,$,Yt,Ne,rn),Ne.side=lt,Ne.needsUpdate=!0,Le=!0}}Le===!0&&(te.updateMultisampleRenderTarget(Me),te.updateRenderTargetMipmap(Me))}N.setRenderTarget(be,Ae,Ue),N.setClearColor(se,xe),Qe!==void 0&&($.viewport=Qe),N.toneMapping=Ve}function tr(M,U,q){const $=U.isScene===!0?U.overrideMaterial:null;for(let G=0,Me=M.length;G<Me;G++){const Pe=M[G],{object:be,geometry:Ae,group:Ue}=Pe;let Ve=Pe.material;Ve.allowOverride===!0&&$!==null&&(Ve=$),be.layers.test(q.layers)&&Sa(be,U,q,Ae,Ve,Ue)}}function Sa(M,U,q,$,G,Me){B!==null&&G.isNodeMaterial&&B.setObject(M,G),M.onBeforeRender(N,U,q,$,G,Me),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),G.onBeforeRender(N,U,q,$,M,Me),G.transparent===!0&&G.side===Ln&&G.forceSinglePass===!1?(G.side=un,G.needsUpdate=!0,N.renderBufferDirect(q,U,$,G,M,Me),G.side=br,G.needsUpdate=!0,N.renderBufferDirect(q,U,$,G,M,Me),G.side=Ln):N.renderBufferDirect(q,U,$,G,M,Me),M.onAfterRender(N,U,q,$,G,Me)}function ba(M){let U=0;for(const q of M)q.texture!==null&&U++;return U}function nr(M,U,q){U.isScene!==!0&&(U=nn);const $=j.get(M),G=A.state.lights,Me=A.state.shadowsArray,Pe=G.state.version,be=L.getParameters(M,G.state,Me,U,q,A.state.lightProbeGridArray),Ae=L.getProgramCacheKey(be);let Ue=$.programs;$.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,$.fog=U.fog;const Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;$.envMap=E.get(M.envMap||$.environment,Ve),$.envMapRotation=$.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",st),Ue=new Map,$.programs=Ue,$.programVariants=new Map);let Qe=Ue.get(Ae);if(Qe!==void 0){if($.currentProgram===Qe&&$.lightsStateVersion===Pe)return ys(M,be),Qe}else be.uniforms=L.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,q,be),M.onBeforeCompile(be,N),Qe=L.acquireProgram(be,Ae),Ue.set(Ae,Qe),$.uniforms=be.uniforms;const Le=$.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=ee.uniform),ys(M,be),$.needsLights=rg(M),$.lightsStateVersion=Pe,$.needsLights&&(Le.ambientLightColor.value=G.state.ambient,Le.lightProbe.value=G.state.probe,Le.sunLights.value=G.state.sun,Le.sunLightShadows.value=G.state.sunShadow,Le.directionalLights.value=G.state.directional,Le.directionalLightShadows.value=G.state.directionalShadow,Le.spotLights.value=G.state.spot,Le.spotLightShadows.value=G.state.spotShadow,Le.rectAreaLights.value=G.state.rectArea,Le.ltc_1.value=G.state.rectAreaLTC1,Le.ltc_2.value=G.state.rectAreaLTC2,Le.pointLights.value=G.state.point,Le.pointLightShadows.value=G.state.pointShadow,Le.hemisphereLights.value=G.state.hemi,Le.sunShadowMatrix.value=G.state.sunShadowMatrix,Le.sunShadowCascade.value=G.state.sunShadowCascade,Le.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Le.spotLightMatrix.value=G.state.spotLightMatrix,Le.spotLightMap.value=G.state.spotLightMap,Le.pointShadowMatrix.value=G.state.pointShadowMatrix),$.numLightProbeGrids=ba(A.state.lightProbeGridArray),$.currentProgram=Qe,$.uniformsList=null,Qe}function Ma(M,U,q,$,G){const Me=j.get(M),Pe=Me.currentProgram.id+","+$+","+G;let be=Me.programVariants.get(Pe);return be===void 0?(be=nr(M,U,q),Me.programVariants.set(Pe,be)):(Me.currentProgram=be,Me.uniformsList=null,Me.outputColorSpace=$,Me.toneMapping=G),be}function ir(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=ho.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ys(M,U){const q=j.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function ng(M,U,q,$,G){U.isScene!==!0&&(U=nn),te.resetTextureUnits();const Me=U.fog,Pe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?U.environment:null,be=pe===null?N.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:tt.workingColorSpace,Ae=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ue=E.get($.envMap||Pe,Ae),Ve=$.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Qe=!!q.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Le=!!q.morphAttributes.position,et=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color;let gt=Si;$.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(gt=N.toneMapping);const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Yt=ht!==void 0?ht.length:0,Ne=j.get($),rn=A.state.lights;if(ut===!0&&(Bt===!0||M!==ae)){const Mt=M===ae&&$.id===K;ee.setState($,M,Mt)}let lt=!1,rr=!1;$.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==rn.state.version||G.isBatchedMesh&&Ne.batching===!1||!G.isBatchedMesh&&Ne.batching===!0||G.isBatchedMesh&&Ne.batchingColor===!0&&G._colorsTexture===null||G.isBatchedMesh&&Ne.batchingColor===!1&&G._colorsTexture!==null||G.isInstancedMesh&&Ne.instancing===!1||!G.isInstancedMesh&&Ne.instancing===!0||G.isSkinnedMesh&&Ne.skinning===!1||!G.isSkinnedMesh&&Ne.skinning===!0||G.isInstancedMesh&&Ne.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ne.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ne.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ne.instancingMorph===!1&&G.morphTexture!==null||Ne.envMap!==Ue||$.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ee.numPlanes||Ne.numIntersection!==ee.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Qe||Ne.morphTargets!==Le||Ne.morphNormals!==et||Ne.morphColors!==Ct||Ne.morphTargetsCount!==Yt||Ne.numLightProbeGrids!==ba(A.state.lightProbeGridArray)?lt=!0:(Ne.outputColorSpace!==be||Ne.toneMapping!==gt)&&(rr=!0):(lt=!0,Ne.__version=$.version);let Kt=Ne.currentProgram;(lt===!0||rr===!0)&&(Kt=rr===!0?Ma($,U,G,be,gt):nr($,U,G),B&&$.isNodeMaterial&&B.onUpdateProgram($,Kt,Ne));let Ea=!1,Ri=!1,sr=!1;const it=Kt.getUniforms(),Xt=Ne.uniforms;if(I.useProgram(Kt.program)&&(Ea=!0,Ri=!0,sr=!0),$.id!==K&&(K=$.id,Ri=!0),Ea||ae!==M){I.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),it.setValue(z,"projectionMatrix",M.projectionMatrix),it.setValue(z,"viewMatrix",M.matrixWorldInverse);const $t=it.map.cameraPosition;$t!==void 0&&$t.setValue(z,dn.setFromMatrixPosition(M.matrixWorld)),D.logarithmicDepthBuffer&&it.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&it.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),ae!==M&&(ae=M,Ri=!0,sr=!0)}if(Ne.needsLights&&(rn.state.sunShadowMap.length>0&&it.setValue(z,"sunShadowMap",rn.state.sunShadowMap,te),rn.state.directionalShadowMap.length>0&&it.setValue(z,"directionalShadowMap",rn.state.directionalShadowMap,te),rn.state.spotShadowMap.length>0&&it.setValue(z,"spotShadowMap",rn.state.spotShadowMap,te),rn.state.pointShadowMap.length>0&&it.setValue(z,"pointShadowMap",rn.state.pointShadowMap,te)),G.isSkinnedMesh){it.setOptional(z,G,"bindMatrix"),it.setOptional(z,G,"bindMatrixInverse");const Mt=G.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),it.setValue(z,"boneTexture",Mt.boneTexture,te))}G.isBatchedMesh&&(it.setOptional(z,G,"batchingTexture"),it.setValue(z,"batchingTexture",G._matricesTexture,te),it.setOptional(z,G,"batchingIdTexture"),it.setValue(z,"batchingIdTexture",G._indirectTexture,te),it.setOptional(z,G,"batchingColorTexture"),G._colorsTexture!==null&&it.setValue(z,"batchingColorTexture",G._colorsTexture,te));const Un=q.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&J.update(G,q,Kt),(Ri||Ne.receiveShadow!==G.receiveShadow)&&(Ne.receiveShadow=G.receiveShadow,it.setValue(z,"receiveShadow",G.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&U.environment!==null&&(Xt.envMapIntensity.value=U.environmentIntensity),Xt.dfgLUT!==void 0&&(Xt.dfgLUT.value=LS()),Ri){if(it.setValue(z,"toneMappingExposure",N.toneMappingExposure),Ne.needsLights&&ig(Xt,sr),Me&&$.fog===!0&&ie.refreshFogUniforms(Xt,Me),ie.refreshMaterialUniforms(Xt,$,Ee,Oe,A.state.transmissionRenderTarget[M.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){const Mt=S;let $t=0;for(const li of A.state.lightProbeGridArray)li.texture!==null&&(Mt.textures[$t]=li.texture,Mt.min[$t]=li.boundingBox.min,Mt.max[$t]=li.boundingBox.max,Mt.resolution[$t]=li.resolution,$t++);for(const li in Mt)Mt[li].length=$t;Xt.probesSH.value=Mt.textures,Xt.probesMin.value=Mt.min,Xt.probesMax.value=Mt.max,Xt.probesResolution.value=Mt.resolution}ho.upload(z,ir(Ne),Xt,te)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ho.upload(z,ir(Ne),Xt,te),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&it.setValue(z,"center",G.center),it.setValue(z,"modelViewMatrix",G.modelViewMatrix),it.setValue(z,"normalMatrix",G.normalMatrix),it.setValue(z,"modelMatrix",G.matrixWorld),$.uniformsGroups!==void 0){const Mt=$.uniformsGroups;for(let $t=0,li=Mt.length;$t<li;$t++){const Ju=Mt[$t];ye.update(Ju,Kt),ye.bind(Ju,Kt)}}return Kt}function ig(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function rg(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return pe},this.setRenderTargetTextures=function(M,U,q){const $=j.get(M);$.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),j.get(M.texture).__webglTexture=U,j.get(M.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:q,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const q=j.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){pe=M,Q=U,V=q;let $=null,G=!1,Me=!1;if(M){const be=j.get(M);if(be.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),de.copy(M.viewport),Ie.copy(M.scissor),$e=M.scissorTest,I.viewport(de),I.scissor(Ie),I.setScissorTest($e),K=-1;return}else if(be.__webglFramebuffer===void 0)te.setupRenderTarget(M);else if(be.__hasExternalTextures)te.rebindTextures(M,j.get(M.texture).__webglTexture,j.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(be.__boundDepthTexture!==Ve){if(Ve!==null&&j.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(M)}}const Ae=M.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(Me=!0);const Ue=j.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?$=Ue[U][q]:$=Ue[U],G=!0):M.samples>0&&te.useMultisampledRTT(M)===!1?$=j.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?$=Ue[q]:$=Ue,de.copy(M.viewport),Ie.copy(M.scissor),$e=M.scissorTest}else de.copy(ke).multiplyScalar(Ee).floor(),Ie.copy(ot).multiplyScalar(Ee).floor(),$e=ct;if(q!==0&&($=Z),I.bindFramebuffer(z.FRAMEBUFFER,$)&&I.drawBuffers(M,$),I.viewport(de),I.scissor(Ie),I.setScissorTest($e),G){const be=j.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,q)}else if(Me){const be=U;for(let Ae=0;Ae<M.textures.length;Ae++){const Ue=j.get(M.textures[Ae]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ae,Ue.__webglTexture,q,be)}}else if(M!==null&&q!==0){const be=j.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,q)}K=-1};function ju(M){const U=j.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=D.textureFormatReadable(M.format),U.__typeReadable=D.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,$,G,Me,Pe,be=0){if(!(M&&M.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ae=Ae[Pe],Array.isArray(Ae)&&(Ae=Ae[0])),Ae){I.bindFramebuffer(z.FRAMEBUFFER,Ae);try{const Ue=M.textures[be],Ve=Ue.format,Qe=Ue.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const Le=ju(Ue);if(Le.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-$&&q>=0&&q<=M.height-G&&z.readPixels(U,q,$,G,me.convert(Ve),me.convert(Qe),Me)}finally{const Ue=pe!==null?j.get(pe).__webglFramebuffer:null;I.bindFramebuffer(z.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,$,G,Me,Pe,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Ae=Ae[Pe],Array.isArray(Ae)&&(Ae=Ae[0])),Ae)if(U>=0&&U<=M.width-$&&q>=0&&q<=M.height-G){I.bindFramebuffer(z.FRAMEBUFFER,Ae);const Ue=M.textures[be],Ve=Ue.format,Qe=Ue.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const Le=ju(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.bufferData(z.PIXEL_PACK_BUFFER,Me.byteLength,z.STREAM_READ),z.readPixels(U,q,$,G,me.convert(Ve),me.convert(Qe),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Ct=pe!==null?j.get(pe).__webglFramebuffer:null;I.bindFramebuffer(z.FRAMEBUFFER,Ct);const gt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await zg(z,gt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,et),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Me),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(et),z.deleteSync(gt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){const $=Math.pow(2,-q),G=Math.floor(M.image.width*$),Me=Math.floor(M.image.height*$),Pe=U!==null?U.x:0,be=U!==null?U.y:0;te.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,q,0,0,Pe,be,G,Me),I.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,$=null,G=0,Me=0){let Pe,be,Ae,Ue,Ve,Qe,Le,et,Ct;const gt=M.isCompressedTexture?M.mipmaps[Me]:M.image;if(q!==null)Pe=q.max.x-q.min.x,be=q.max.y-q.min.y,Ae=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,Ve=q.min.y,Qe=q.isBox3?q.min.z:0;else{const it=Math.pow(2,-G);Pe=Math.floor(gt.width*it),be=Math.floor(gt.height*it),M.isDataArrayTexture?Ae=gt.depth:M.isData3DTexture?Ae=Math.floor(gt.depth*it):Ae=1,Ue=0,Ve=0,Qe=0}$!==null?(Le=$.x,et=$.y,Ct=$.z):(Le=0,et=0,Ct=0);const ht=me.convert(U.format),Yt=me.convert(U.type);let Ne;U.isData3DTexture?(te.setTexture3D(U,0),Ne=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(te.setTexture2DArray(U,0),Ne=z.TEXTURE_2D_ARRAY):(te.setTexture2D(U,0),Ne=z.TEXTURE_2D),I.activeTexture(z.TEXTURE0),I.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);const rn=I.getParameter(z.UNPACK_ROW_LENGTH),lt=I.getParameter(z.UNPACK_IMAGE_HEIGHT),rr=I.getParameter(z.UNPACK_SKIP_PIXELS),Kt=I.getParameter(z.UNPACK_SKIP_ROWS),Ea=I.getParameter(z.UNPACK_SKIP_IMAGES);I.pixelStorei(z.UNPACK_ROW_LENGTH,gt.width),I.pixelStorei(z.UNPACK_IMAGE_HEIGHT,gt.height),I.pixelStorei(z.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(z.UNPACK_SKIP_ROWS,Ve),I.pixelStorei(z.UNPACK_SKIP_IMAGES,Qe);const Ri=M.isDataArrayTexture||M.isData3DTexture,sr=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const it=j.get(M),Xt=j.get(U),Un=j.get(it.__renderTarget),Mt=j.get(Xt.__renderTarget);I.bindFramebuffer(z.READ_FRAMEBUFFER,Un.__webglFramebuffer),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let $t=0;$t<Ae;$t++)Ri&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(M).__webglTexture,G,Qe+$t),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,j.get(U).__webglTexture,Me,Ct+$t)),z.blitFramebuffer(Ue,Ve,Ue+Pe,Ve+be,Le,et,Le+Pe,et+be,z.DEPTH_BUFFER_BIT,z.NEAREST);I.bindFramebuffer(z.READ_FRAMEBUFFER,null),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(G!==0||M.isRenderTargetTexture||j.has(M)){const it=j.get(M),Xt=j.get(U);I.bindFramebuffer(z.READ_FRAMEBUFFER,P),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,W);for(let Un=0;Un<Ae;Un++)Ri?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,it.__webglTexture,G,Qe+Un):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,it.__webglTexture,G),sr?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xt.__webglTexture,Me,Ct+Un):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Xt.__webglTexture,Me),G!==0?z.blitFramebuffer(Ue,Ve,Ue+Pe,Ve+be,Le,et,Le+Pe,et+be,z.COLOR_BUFFER_BIT,z.NEAREST):sr?z.copyTexSubImage3D(Ne,Me,Le,et,Ct+Un,Ue,Ve,Pe,be):z.copyTexSubImage2D(Ne,Me,Le,et,Ue,Ve,Pe,be);I.bindFramebuffer(z.READ_FRAMEBUFFER,null),I.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else sr?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(Ne,Me,Le,et,Ct,Pe,be,Ae,ht,Yt,gt.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Ne,Me,Le,et,Ct,Pe,be,Ae,ht,gt.data):z.texSubImage3D(Ne,Me,Le,et,Ct,Pe,be,Ae,ht,Yt,gt):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Me,Le,et,Pe,be,ht,Yt,gt.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Me,Le,et,gt.width,gt.height,ht,gt.data):z.texSubImage2D(z.TEXTURE_2D,Me,Le,et,Pe,be,ht,Yt,gt);I.pixelStorei(z.UNPACK_ROW_LENGTH,rn),I.pixelStorei(z.UNPACK_IMAGE_HEIGHT,lt),I.pixelStorei(z.UNPACK_SKIP_PIXELS,rr),I.pixelStorei(z.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(z.UNPACK_SKIP_IMAGES,Ea),Me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&z.generateMipmap(Ne),I.unbindTexture()},this.initRenderTarget=function(M){j.get(M).__webglFramebuffer===void 0&&te.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?te.setTextureCube(M,0):M.isData3DTexture?te.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?te.setTexture2DArray(M,0):te.setTexture2D(M,0),I.unbindTexture()},this.resetState=function(){Q=0,V=0,pe=null,I.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),n.unpackColorSpace=tt._getUnpackColorSpace()}}const tf=.003,Lo=1.2;function Lc(t,e,n,i){return{yaw:t-n*tf,pitch:Rn.clamp(e-i*tf,-Lo,Lo)}}function rp(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:Rn.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-Lo,Lo)}}class DS{yaw=0;pitch=0;freeMode=!1;anchor=new F;freePos=new F;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new F(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new Hn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,Lc(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,rp(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new F;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new F(-i.z,0,i.x),s=new F;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=Rn.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=Rn.clamp(this.freePos.y,1.1,4.4),this.freePos.z=Rn.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function US(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}const Is=new F;function Pn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Is.copy(e),Is[i]=0,Is.normalize();const c=.5*a/(a+o),u=1-Is.angleTo(t)/l;return Math.sign(Is[n])===1?u*c:o/(a+o)+c+c*(1-u)}class hu extends Rr{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new F,c=new F,u=new F(e,n,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,g=f.length/6,x=new F,m=.5/a;for(let p=0,_=0;p<f.length;p+=3,_+=2)switch(l.fromArray(f,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),f[p+0]=u.x*Math.sign(l.x)+c.x*s,f[p+1]=u.y*Math.sign(l.y)+c.y*s,f[p+2]=u.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:x.set(1,0,0),h[_+0]=Pn(x,c,"z","y",s,i),h[_+1]=1-Pn(x,c,"y","z",s,n);break;case 1:x.set(-1,0,0),h[_+0]=1-Pn(x,c,"z","y",s,i),h[_+1]=1-Pn(x,c,"y","z",s,n);break;case 2:x.set(0,1,0),h[_+0]=1-Pn(x,c,"x","z",s,e),h[_+1]=Pn(x,c,"z","x",s,i);break;case 3:x.set(0,-1,0),h[_+0]=1-Pn(x,c,"x","z",s,e),h[_+1]=1-Pn(x,c,"z","x",s,i);break;case 4:x.set(0,0,1),h[_+0]=1-Pn(x,c,"x","y",s,e),h[_+1]=1-Pn(x,c,"y","x",s,n);break;case 5:x.set(0,0,-1),h[_+0]=Pn(x,c,"x","y",s,e),h[_+1]=1-Pn(x,c,"y","x",s,n);break}}static fromJSON(e){return new hu(e.width,e.height,e.depth,e.segments,e.radius)}}const nf=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function OS(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return nf[e%nf.length]}function po(t,e,n,i){const a=(f,d)=>f<n.minX+.2||f>n.maxX-.2||d<n.minZ+.2||d>n.maxZ-.2||i.some(h=>f>h.minX-.2&&f<h.maxX+.2&&d>h.minZ-.2&&d<h.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],l=new Set(["0,0"]);let c=-1;for(let f=0;f<o.length&&f<12e3;f++){const d=o[f];if(Math.hypot(d.x-e.x,d.z-e.z)<.48){c=f;break}for(const[h,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const x=d.x+h,m=d.z+g,p=`${Math.round((x-t.x)/.45)},${Math.round((m-t.z)/.45)}`;!l.has(p)&&!a(x,m)&&(l.add(p),o.push({x,z:m,parent:f}))}}if(c<0)return[];const u=[];for(let f=c;f>=0;f=o[f].parent)u.push({x:o[f].x,z:o[f].z});return u.reverse().slice(1)}const ki={x:-7.8,z:-4.6},FS=[0,4,8,2,6,10,1,5,9,3,7,11];function Nc(t=0){const e=-Math.PI/2+FS[(t%12+12)%12]*Math.PI/6;return{x:ki.x+Math.cos(e)*2.15,z:ki.z+Math.sin(e)*2.15}}function Dc(t,e=0){if(t==="culture")return Nc(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const dr=(t,e,n)=>t+(e-t)*n;function sp(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=dr(1.35,.5,n),s=dr(2.2,.6,n),a=e?0:n<.35?dr(.06,0,n/.35):0,o=dr(9,4,n),l=n>.45?dr(0,.42,(n-.45)/.55):0,c=n>.55?dr(0,.12,(n-.55)/.45):0,u=n>.5?dr(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:l,slump:c,saturation:u,zzz:n>=.8}}function kS(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Zi(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const rf=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function Ko(t){const e=Zi(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+rf[n].map((r,s)=>Math.round(r+(rf[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const zS={EXPLOIT:["Exploiting","calm","After a significant improvement or before min_attempts: 3 exploit + 1 divergent."],BOREDOM_SNAP:["Boredom snap","snap","B ≥ 0.70: 1 exploit + 3 divergent; the novelty gate rejects near-duplicates."],YOKED_SNAP:["Boredom snap","snap","B ≥ 0.70: 1 exploit + 3 divergent; the novelty gate rejects near-duplicates."],PARADIGM_BREAKOUT:["Paradigm breakout","breakout","4 divergent slots; the gate requires a top-level mechanism not used recently."],CONVERGED:["Converged","converged","The gate allows only exact reruns of the best for confirmation."],FRUSTRATED:["Frustrated","frustrated",""]};function qi(t){if(!t)return{label:"",tone:"calm",description:""};const e=zS[t];return e?{label:e[0],tone:e[1],description:e[2]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm",description:""}}function BS(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function $S(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const Uc=t=>Math.max(0,Math.min(1,t)),HS=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,sf=t=>{const e=Uc(t);return e===0||e===1?e:Uc(HS(e))};function GS(t,e){const n=Uc(t),i=Math.max(0,Math.floor(e)),r=sf(n/.4),s=Array.from({length:i},(a,o)=>{const l=.4+o*.6/Math.max(1,i),c=.6/Math.max(1,i);return sf((n-l)/c)});return{room:r,agents:s}}function VS(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function WS(){const t=new m0;t.background=new Ze("#e4edf3"),t.fog=new lu("#e4edf3",34,90);const e=new zn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new Rr(1,1,1),r=(D,I=.68,ne=0)=>new fo({color:D,roughness:I,metalness:ne}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),l=r("#b1bec5",.32,.65),c=r("#c8d3d6"),u=r("#a8b5a1"),f=r("#b4a38c",.8),d=r("#928572");r("#18252a",.38);const h=r("#f9f4e6"),g=r("#3e8493"),x=r("#d2a468"),m=new N0({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:Ln}),p=new fr({color:"#fff6dd"}),_=new fr({color:"#80b7ab"}),w=(D,I,ne,j,te,E,y,R=t)=>{const H=new _t(i,y);return H.position.set(D,I,ne),H.scale.set(j,te,E),R.add(H),H},S=(D,I,ne,j,te,E,y=t,R=20)=>{const H=new _t(new sa(j,j,te,R),E);return H.position.set(D,I,ne),y.add(H),H},T=(D,I,ne,j,te,E=t)=>{const y=new _t(new du(j,16,12),te);return y.position.set(D,I,ne),E.add(y),y},A=(D,I,ne,j)=>n.push({minX:D-ne/2,maxX:D+ne/2,minZ:I-j/2,maxZ:I+j/2}),v=(D,I,ne,j,te=t)=>{const E=I.clone().sub(D),y=new _t(new sa(ne,ne,E.length(),12),j);return y.position.copy(D).add(I).multiplyScalar(.5),y.quaternion.setFromUnitVectors(new F(0,1,0),E.normalize()),te.add(y),y},b=(D,I,ne,j,te,E,y="#f5f4ec",R="#425859",H=0)=>{const L=document.createElement("canvas");L.width=1024,L.height=Math.max(64,Math.round(1024*E/te));const ie=L.getContext("2d");ie.fillStyle=y,ie.fillRect(0,0,L.width,L.height);const ue=D.split(`
`),Y=Math.min(L.height/(ue.length+1),L.width/(Math.max(...ue.map(J=>J.length))*.62));ie.fillStyle=R,ie.textAlign="center",ie.textBaseline="middle",ie.font=`500 ${Y}px sans-serif`,ue.forEach((J,X)=>ie.fillText(J,512,L.height/2+(X-(ue.length-1)/2)*Y*1.3));const ee=new ur(L);ee.colorSpace=Ot;const fe=new fr({map:ee,side:Ln}),C=new _t(new gr(te,E),fe);return C.position.set(I,ne,j),C.rotation.y=H,t.add(C),C},k=(D,I,ne)=>{const j=document.createElement("canvas");j.width=960,j.height=360;const te=j.getContext("2d");te.fillStyle="#fff9ea",te.strokeStyle="#b6c9c4",te.lineWidth=4,te.beginPath(),te.roundRect(4,4,952,310,30),te.fill(),te.stroke(),te.beginPath(),te.moveTo(450,313),te.lineTo(480,352),te.lineTo(510,313),te.fill(),te.textAlign="left",te.fillStyle="#35716c",te.font="bold 38px sans-serif",te.fillText(D.toUpperCase(),34,48),te.fillStyle="#263b41",te.font="48px sans-serif";const E=I.replace(/\s+/g," ").trim().split(" "),y=[];let R="";for(const L of E){const ie=R?R+" "+L:L;te.measureText(ie).width>875&&R?(y.push(R),R=L):R=ie}R&&y.push(R),y.slice(0,3).forEach((L,ie)=>{let ue=L;ie===2&&y.length>3&&(ue=ue.replace(/.{0,3}$/,"…")),te.fillText(ue,34,110+ie*53)}),te.fillStyle="#6c817c",te.font="32px sans-serif",te.fillText(ne.length?"WITH "+ne.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const H=new ur(j);return H.colorSpace=Ot,new _t(new gr(2.7,1.0125),new fr({map:H,transparent:!0,side:Ln,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new O0("#f5faff","#9caeb8",2.15));const N=new Ld("#ffffff",2.2);N.position.set(-8,11,3),t.add(N);const O=new Ld("#d0e9fa",.85);O.position.set(8,5,-8),t.add(O);const B=document.createElement("canvas");B.width=512,B.height=512;const Z=B.getContext("2d");Z.fillStyle="#d9e2e6",Z.fillRect(0,0,512,512);for(let D=0;D<1700;D++){const I=Math.sin(D*41.77)*.5+.5,ne=Math.sin(D*19.31+5)*.5+.5;Z.fillStyle=D%3?"#ecf0f1":"#c3d0d6",Z.fillRect(I*512,ne*512,1+D%3,1+D%2)}const P=new ur(B);P.colorSpace=Ot,P.wrapS=P.wrapT=Mo,P.repeat.set(8,9),P.anisotropy=8,w(0,-.12,0,24,.24,28,new fo({map:P,roughness:.85})),w(0,2.5,-13.5,24,5,.3,s),w(11.75,2.5,0,.3,5,27,s),w(0,.43,-13.27,23.5,.86,.12,f),w(11.53,.43,0,.12,.86,26.5,f),w(0,.08,-13.1,23.5,.16,.06,o),w(11.38,.08,0,.06,.16,26.5,o);const W=w(0,4.9,0,24,.16,28,s);W.userData.overhead=!0;for(const D of[-12,-6,0,6,12])w(-11.6,2.5,D,.22,5,.14,s);w(-11.6,.55,0,.3,1.1,27,s),w(-11.6,4.65,0,.3,.7,27,s),w(-11.68,2.75,0,.025,3.5,27,m);for(const D of[1.12,3.8])w(-11.4,D,0,.12,.07,27,l);w(-7.9,2.25,12.7,7.5,4.5,.14,s),w(7.9,2.25,12.7,7.5,4.5,.14,s);for(const D of[-3.9,3.9])w(D,2.25,12.65,.12,4.5,.18,l);w(0,2.25,12.8,7.7,4.5,.025,m),b("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const D of[-8,-1,6]){w(0,4.35,D,20,.08,.07,o);for(const I of[-7,0,7])S(I,4.18,D,.13,.22,o),S(I,4.06,D,.1,.025,p)}const Q=new _t(new Xs(1.8,.025,8,64),d);Q.rotation.x=Math.PI/2,Q.position.set(0,3.9,.5),t.add(Q);for(const D of[-1.6,1.6])v(new F(D,3.9,.5),new F(D,4.84,.5),.012,l);w(-28,-.65,-2,45,1,70,r("#b0bf9d"));const V=r("#98af91"),pe=r("#897e69");for(let D=0;D<14;D++){const I=-17-D%3*3,ne=-25+D*4.1;S(I,1.3,ne,.12,3,pe);const j=T(I,3,ne,1.25+D%3*.2,V);j.scale.y=1.45}function K(D,I){S(D,.32,I,.34,.64,s),S(D,.66,I,.29,.04,d);for(let ne=0;ne<6;ne++){const j=ne*2.4;v(new F(D,.65,I),new F(D+Math.cos(j)*.25,1.5+ne%3*.18,I+Math.sin(j)*.25),.025,u),T(D+Math.cos(j)*.3,1.3+ne%3*.18,I+Math.sin(j)*.3,.16,u).scale.set(.55,2,.8)}A(D,I,.8,.8)}K(-10.3,8.4),K(-10.3,-10.8),K(10.3,10.8);function ae(D,I,ne,j){w(D,.1,I,ne-.17,.2,j-.12,o),w(D,.51,I,ne,.78,j,c),w(D,.94,I,ne+.08,.08,j+.08,o);const te=Math.round(ne/.85);for(let E=0;E<te;E++){const y=D-ne/2+(E+.5)*ne/te;w(y,.53,I+j/2+.009,ne/te-.025,.7,.018,a),w(y,.77,I+j/2+.028,.29,.025,.035,l)}A(D,I,ne+.12,j+.12)}function de(D,I,ne,j="#8ab9ad"){w(D,1,I,.48,.035,.3,l),w(D,1.22,I,.055,.4,.055,l),w(D,1.53,I,.94,.59,.055,o),b(ne+`
—  RESEARCH IN PROGRESS  —`,D,1.53,I+.032,.86,.51,"#203137",j),w(D,1.01,I+.36,.65,.035,.2,s);for(let te=0;te<5;te++)w(D-.25+te*.12,1.031,I+.36,.07,.007,.11,l)}function Ie(D,I,ne){w(D,1.02,I,.56,.09,.3,u);for(let j=0;j<5;j++)S(D-.22+j*.11,1.16,I,.031,.25,a,t,10),S(D-.22+j*.11,1.3,I,.038,.025,ne,t,10)}function $e(D,I){const ne=new Yn;ne.position.set(D,1,I),t.add(ne);const j=w(0,.045,0,.58,.09,.55,a,ne);j.rotation.y=-.1;const te=w(0,.36,-.15,.14,.62,.16,a,ne);te.rotation.x=-.15;const E=w(0,.61,-.03,.18,.15,.37,a,ne);E.rotation.x=-.2;const y=S(0,.67,.1,.07,.27,o,ne);y.rotation.x=-.38,S(0,.47,.1,.065,.18,l,ne),w(0,.23,.08,.4,.04,.35,o,ne),S(0,.11,.08,.12,.04,p,ne),T(.13,.32,-.11,.065,o,ne)}function se(D,I){w(D,1.01,I,.35,.025,.22,l),w(D,1.25,I,.025,.45,.025,l),w(D,1.46,I,.35,.035,.05,s);for(let ne=0;ne<3;ne++){const j=D-.12+ne*.12;S(j,1.28,I,.026,.32,a,t,12),S(j,1.08,I,.007,.12,l,t,8),S(j,1.46,I,.035,.035,ne%2?g:x,t,12)}}const xe=ki.x,Re=ki.z;S(xe,.43,Re,.18,.78,l),S(xe,.88,Re,1.38,.12,f),S(xe,.95,Re,1.31,.025,a),A(xe,Re,2.8,2.8);for(let D=0;D<12;D++){const I=D*Math.PI/6,ne=xe+Math.sin(I)*2.15,j=Re+Math.cos(I)*2.15;S(ne,.36,j,.29,.07,l),S(ne,.18,j,.035,.32,l);const te=S(ne,.43,j,.31,.09,D%3===0?r("#dfabc5"):u);te.userData.discussionSeat=!0;const E=w(xe+Math.sin(I)*.87,.979,Re+Math.cos(I)*.87,.28,.015,.21,h);E.rotation.y=-I}S(xe,.99,Re,.19,.025,x),b("01   IDEATION ROUNDTABLE",xe,2.65,-7.2,4.7,.38),b("SHARED QUESTIONS / GROUP DISCUSSION",xe,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),ae(5.4,-2.8,6.2,1.7);const Oe=w(5.6,1.44,-2.85,1.08,.88,.3,x);Oe.rotation.x=-.12,w(5.6,1.65,-2.666,.81,.25,.035,o),b("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const Ee=S(5.6,1.3,-2.64,.16,.07,o);Ee.rotation.x=Math.PI/2;const He=w(5.64,1.36,-2.59,.025,.11,.025,s);He.rotation.z=-.5;for(const[D,I]of[[5.28,g],[5.88,x]])T(D,1.1,-2.64,.045,o),v(new F(D,1.1,-2.61),new F(D+.35,1.03,-2.1),.018,I),v(new F(D+.35,1.03,-2.1),new F(D+.9,1.04,-2.17),.018,I);w(7.2,1.01,-2.8,.95,.055,.68,u);for(let D=0;D<4;D++)w(6.9+D*.19,1.08,-2.8,.1,.09,.18,o),w(6.9+D*.19,1.04,-2.8,.02,.018,.57,l);de(3.3,-3.08,"PHYSICS / MEASUREMENTS"),b("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),ae(.2,-10.6,5.8,1.5),de(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let D=0;D<5;D++){const I=.25+D*.43,ne=-10.55+D%2*.19,j=[g,x,u][D%3];S(I,1.16,ne,.13,.35,m),S(I,1.09,ne,.115,.19,j),S(I,1.4,ne,.055,.15,m),S(I,1.49,ne,.065,.045,o)}Ie(2.2,-10.9,g),se(.1,-11.05),b("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),b("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),b("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let D=0;D<5;D++)w(-2.2+D*1.12,2.68,-13.29,.85,.06,.02,D%2?u:f);ae(-7.3,5.4,4.8,1.45),de(-8.6,5.18,"BIOLOGY / CELL CULTURES"),$e(-7.15,5.32);for(let D=0;D<3;D++){const I=-6.25+D*.43,ne=5.5+D%2*.3;S(I,1.025,ne,.18,.055,m),S(I,1.045,ne,.16,.015,u);for(let j=0;j<5;j++){const te=j*2.4,E=T(I+Math.cos(te)*.1,1.065,ne+Math.sin(te)*.1,.035,D%2?x:g);E.scale.y=.35}}Ie(-5.55,5.15,g),b("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const D of[-9.9,-7.9,-5.9])w(10.75,1.22,D,1.4,2.4,1.5,a),w(10.02,1.22,D,.035,2.18,1.35,c),w(9.98,1.35,D+.42,.035,.43,.035,l),A(10.75,D,1.5,1.6);b("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),ae(9.3,7.2,3.7,1.35),w(9.5,.99,7.1,.8,.025,.6,l),w(9.5,1.008,7.1,.63,.015,.46,o),v(new F(9.5,1,6.8),new F(9.5,1.5,6.8),.025,l),v(new F(9.5,1.5,6.8),new F(9.5,1.5,7.05),.025,l),b("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[D,I]of[[3.7,-.5],[-7.5,7.7]]){S(D,.66,I,.32,.12,u),S(D,.34,I,.045,.56,l);for(let ne=0;ne<4;ne++){const j=ne*Math.PI/2;v(new F(D,.12,I),new F(D+Math.cos(j)*.37,.08,I+Math.sin(j)*.37),.025,l)}A(D,I,.7,.7)}S(0,.13,.5,1.85,.26,d),S(0,.52,.5,1.7,.55,f),S(0,.84,.5,1.84,.1,a),S(0,.9,.5,1.62,.035,o),A(0,.5,3.7,3.7),b("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const vt=new Yn;vt.position.set(0,.95,.5),t.add(vt);const ke=[];for(let D=0;D<36;D++){const I=D*2.39996,ne=Math.sqrt(D/36)*1.35,j=T(Math.cos(I)*ne,.15+D%5*.11,Math.sin(I)*ne,.045+D%3*.014,D%4===0?x:u,vt);ke.push(j)}for(const D of[-1.45,1.45])for(const I of[-1.1,2.1])S(D,1.03,I,.018,.22,l);const ot=[u,f,g,h,x];for(const D of[-6.2,6.2]){for(const I of[D-.9,D+.9])w(I,1.75,-12.7,.1,3.5,.5,f);for(const I of[.25,1.25,2.25,3.25]){w(D,I,-12.7,1.9,.075,.6,f);for(let ne=0;ne<6;ne++)w(D-.7+ne*.27,I+.3,-12.7,.17,.5-ne%3*.06,.32,ot[ne%5])}A(D,-12.7,2.05,.75)}b("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),b("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function ct(D,I,ne){const j=document.createElement("canvas");j.width=256,j.height=64;const te=j.getContext("2d");te.fillStyle="rgba(23,35,44,.86)",te.beginPath(),te.roundRect(4,6,248,52,14),te.fill(),te.fillStyle="#ffffff26",te.beginPath(),te.roundRect(16,38,224,10,5),te.fill(),I!=null&&(te.fillStyle=Ko(I),te.beginPath(),te.roundRect(16,38,Math.max(10,224*I/100),10,5),te.fill()),te.fillStyle="#f4f0e4",te.font="600 21px sans-serif",te.textBaseline="middle",te.fillText(I==null?"Boredom —":`Bored ${Math.round(I)}%`,18,22),ne&&(te.textAlign="right",te.fillStyle="#ddc270",te.font="600 15px sans-serif",te.fillText(ne.toUpperCase(),238,22));const E=D.material;E.map?.dispose(),E.map=new ur(j),E.map.colorSpace=Ot,E.needsUpdate=!0}const Ye=(()=>{const D=document.createElement("canvas");D.width=128,D.height=128;const I=D.getContext("2d");I.fillStyle="#e9e4f4",I.strokeStyle="#31434b",I.lineWidth=6,I.font="700 40px sans-serif";for(const[j,te,E,y]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])I.font=`700 ${y}px sans-serif`,I.fillStyle="#31434b",I.fillText(j,te+3,E+3),I.fillStyle="#e9e4f4",I.fillText(j,te,E);const ne=new ur(D);return ne.colorSpace=Ot,ne})(),Ut=(D,I,ne)=>{const j=Math.atan2(Math.sin(I-D),Math.cos(I-D));return Math.abs(j)<ne?I:D+Math.sign(j)*ne},ut=new Map;let Bt=1;function xt(D,I,ne,j,te,E){const y=new Yn;y.position.set(D,0,I),y.rotation.y=ne,t.add(y);const R=OS(E),H=r(R.shell,.62),L=r("#293b42",.8),ie=r(R.accent,.48),ue=r(R.trim,.57),Y=new fr({color:"#263b41",side:un}),ee=j.startsWith("B")?u:j.startsWith("C")?x:g,fe=(je,Wt,er,oi,xs,tr,Sa,ba=y,nr=.055)=>{const Ma=new hu(oi,xs,tr,3,Math.min(nr,oi/3,xs/3,tr/3)),ir=new _t(Ma,Sa);ir.position.set(je,Wt,er),ba.add(ir);const ys=new _t(Ma,Y);return ys.scale.setScalar(1.055),ir.add(ys),ir};for(const je of[-.13,.13])fe(je,.42,0,.16,.4,.18,H),T(je,.19,.055,.12,ie,y).scale.set(.95,.68,1.4);fe(0,.99,0,.54,.61,.35,H,y,.1),fe(0,.72,0,.57,.13,.37,H,y,.06),w(0,.98,.184,.012,.45,.012,L,y);const C=w(-.105,1.21,.19,.16,.07,.025,H,y);C.rotation.z=-.55;const J=w(.105,1.21,.19,.16,.07,.025,H,y);J.rotation.z=.55,S(0,1.36,0,.09,.12,ie,y);const X=new Yn;if(X.position.set(0,1.64,0),y.add(X),R.head==="round"){const je=T(0,0,0,.265,H,X);je.scale.set(1.21,1,.92);const Wt=new _t(je.geometry,Y);Wt.scale.setScalar(1.055),je.add(Wt)}else fe(0,0,0,.59,R.ears==="compact"?.44:.49,.45,H,X,R.head==="monitor"?.055:.13);const _e=R.head==="monitor";_e&&fe(0,-.005,.232,.49,.36,.025,L,X,.06);for(const je of[-1,1]){const Wt=S(je*.335,0,0,.125,.09,ie,X);Wt.rotation.z=Math.PI/2;const er=S(je*.389,0,0,R.ears==="compact"?.06:.085,.025,ue,X);if(er.rotation.z=Math.PI/2,R.ears==="ring"){const oi=new _t(new Xs(.125,.012,6,24),L);oi.rotation.y=Math.PI/2,oi.position.set(je*.385,0,0),X.add(oi)}}const me=R.antenna==="pair"?[-.17,.17]:[R.antenna==="offset-right"?.15:R.antenna==="offset-left"?-.16:0];for(const je of me)v(new F(je,.23,0),new F(je+(R.antenna==="offset-right"?.045:0),.39,0),.018,L,X),T(je+(R.antenna==="offset-right"?.045:0),.4,0,.047,ue,X);const ge=document.createElement("canvas");ge.width=256,ge.height=200;const ye=ge.getContext("2d"),De=_e?"#fff8e4":"#263b41";ye.fillStyle=De,ye.strokeStyle=De,ye.lineWidth=12,ye.lineCap="round";for(const je of[82,174])ye.beginPath(),R.eyes==="happy"?(ye.arc(je,79,15,Math.PI,Math.PI*2),ye.stroke()):(ye.ellipse(je,76,10,17,0,0,Math.PI*2),ye.fill());ye.fillStyle="#f29b40";for(const je of[52,204])ye.beginPath(),ye.ellipse(je,112,13,8,0,0,Math.PI*2),ye.fill();ye.fillStyle="#263b41",ye.beginPath(),ye.ellipse(128,123,24,28,0,0,Math.PI),ye.closePath(),ye.fill(),ye.fillStyle="#f18540",ye.beginPath(),ye.ellipse(128,137,13,9,0,0,Math.PI*2),ye.fill();const le=new ur(ge);le.colorSpace=Ot;const Ce=new fr({map:le,transparent:!0,depthWrite:!1}),ze=new _t(new gr(.49,.38),Ce);ze.position.set(0,-.01,.255),X.add(ze);const Se=new Yn;if(Se.position.set(.32,1.22,0),y.add(Se),fe(0,-.12,0,.16,.29,.19,H,Se,.065),T(0,-.28,.07,.085,ie,Se),fe(0,-.29,.16,.13,.12,.2,H,Se,.05),T(0,-.29,.28,.092,ie,Se),fe(-.32,1.04,0,.16,.36,.19,H,y,.07),T(-.32,.84,.06,.09,ie,y),R.prop==="magnifier"){const je=new _t(new Xs(.1,.018,8,24),ie);je.position.set(.32,1.05,.4),y.add(je),v(new F(.32,.96,.4),new F(.32,.84,.4),.022,L,y);const Wt=S(.32,1.05,.4,.084,.008,m,y);Wt.rotation.x=Math.PI/2}else if(R.prop==="clipboard"){fe(-.31,.96,.23,.22,.29,.035,ue,y,.025),w(-.31,.97,.253,.17,.22,.008,h,y);for(let je=0;je<3;je++)w(-.31,.92+je*.05,.261,.11,.012,.005,ie,y)}else{S(-.31,.97,.17,.028,.15,ie,y);const je=new _t(new uu(.078,.15,16),ue);je.position.set(-.31,.86,.17),y.add(je)}const st=T(-.17,1.22,.19,.018,_,y);st.name="agent-status-led";const bt=b(j,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(bt),y.add(bt),w(.12,.93,.19,.2,.045,.015,ee,y);const Wn=b(j.toUpperCase(),D,2.07,I+.16,.58,.18,"#f4f8fa","#31434b");y.userData.ownedMaterials=[H,L,ie,ue,Y,Ce,bt.material],y.userData.ownedTextures=[le,bt.material.map];const Lr=new Rl(new uo({transparent:!0,depthTest:!1}));Lr.scale.set(.8,.8,1),t.add(Lr);const Ai=new Rl(new uo({transparent:!0,depthTest:!1}));Ai.scale.set(.86,.215,1),Ai.name="boredom-meter",t.add(Ai);const Qi=new Rl(new uo({map:Ye,transparent:!0,depthTest:!1}));Qi.scale.set(.5,.5,1),Qi.name="boredom-zzz",Qi.visible=!1,t.add(Qi);for(const je of[H,L,ie,ue])je.userData.baseColor=je.color.clone();const vs={id:E,station:te,head:X,arm:Se,light:st,group:y,sign:Wn,path:[],target:"",activity:Lr,activityState:"",idea:null,ideaText:"",meter:Ai,meterKey:"",zzz:Qi,tint:1};return ut.set(E,vs),vs}const dn=new Map;for(const D of[...t.children])if(D instanceof _t&&D.geometry===i&&!D.userData.overhead&&!Array.isArray(D.material)&&!D.material.transparent){const I=dn.get(D.material)||[];I.push(D),dn.set(D.material,I)}for(const[D,I]of dn){if(I.length<3)continue;const ne=new T0(i,D,I.length);I.forEach((j,te)=>{j.updateMatrix(),ne.setMatrixAt(te,j.matrix),t.remove(j)}),ne.instanceMatrix.needsUpdate=!0,ne.computeBoundingSphere(),t.add(ne)}const Rt=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new F(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new F(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new F(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new F(-6.3,1.25,7.2),radius:3.1}];let nn=0;const fn={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function hn(D,I){const ne=Math.max(0,Math.min(.05,D-nn));nn=D,vt.rotation.y=D*(I.replay||I.running?.025:.006),ke.forEach((R,H)=>{R.visible=H<I.agents.length*4,R.position.y=.15+H%5*.11+Math.sin(D*.8+H)*.025});const j=new Set(I.agents.map(R=>R.id));for(const[R,H]of ut)if(!j.has(R)){if(t.remove(H.group,H.sign,H.activity,H.meter,H.zzz),H.meter.material.map?.dispose(),H.meter.material.dispose(),H.zzz.material.dispose(),H.idea){t.remove(H.idea),H.idea.geometry.dispose();const ie=H.idea.material;ie.map?.dispose(),ie.dispose()}H.activity.material.map?.dispose(),H.activity.material.dispose(),H.group.traverse(ie=>{ie instanceof _t&&ie.geometry!==i&&ie.geometry.dispose()});for(const ie of H.group.userData.ownedMaterials)ie.dispose();for(const ie of H.group.userData.ownedTextures||[])ie?.dispose();H.sign.geometry.dispose();const L=H.sign.material;L.map?.dispose(),L.dispose(),ut.delete(R)}I.agents.forEach((R,H)=>{let L=ut.get(R.id);L||(L=xt(R.position?.x??(H%3-1)*.6,R.position?.z??10.4+Math.floor(H/3)*.4,0,R.name,R.stationId,R.id));const ie=R.id.startsWith("worker-")?Number(R.id.match(/\d+$/)?.[0]||1)-1:H%4,ue=I.finale===!0,Y=H/Math.max(1,I.agents.length)*Math.PI*2,ee=ue?new F(ki.x+Math.cos(Y)*2.35,0,ki.z+Math.sin(Y)*2.35):Dc(R.stationId,ie),fe=ue?`finale:${H}`:`${R.stationId}:${ie}`;L.target!==fe&&(L.target=fe,L.station=R.stationId,L.path=po(L.group.position,ee,fn,n)),R.position&&!ue&&(L.group.position.set(R.position.x,0,R.position.z),L.path=[]);const C=sp(R.boredom,I.reducedMotion),J=L.path[0];if(J){const De=J.x-L.group.position.x,le=J.z-L.group.position.z,Ce=Math.hypot(De,le);if(Ce<.07)L.path.shift();else{const ze=Math.min(Ce,ne*1.8*C.walk);L.group.position.x+=De/Ce*ze,L.group.position.z+=le/Ce*ze,L.group.rotation.y=I.reducedMotion?Math.atan2(De,le):Ut(L.group.rotation.y,Math.atan2(De,le),Math.max(.02,ne*6*C.turn))}}else L.group.rotation.y=R.position?.heading??(R.stationId==="culture"?Math.atan2(ki.x-L.group.position.x,ki.z-L.group.position.z):Math.PI);L.sign.position.set(L.group.position.x,2.28,L.group.position.z),L.sign.lookAt(e.position),L.activity.position.set(L.group.position.x,2.85,L.group.position.z);const X=!!J||!!R.position?.moving,_e=`${R.boredom==null?"-":Math.round(R.boredom)}:${R.regime||""}`;L.meterKey!==_e&&(L.meterKey=_e,ct(L.meter,R.boredom,qi(R.regime).label)),L.meter.position.set(L.group.position.x,2.5,L.group.position.z),L.group.position.y=ue?I.reducedMotion?0:.12+Math.abs(Math.sin(D*3+H))*.18:X?Math.abs(Math.sin(D*C.bobHz+H))*C.bob:0,ue&&!I.reducedMotion&&(L.group.rotation.y+=ne*.35),L.group.rotation.x=C.slump,L.zzz.visible=C.zzz&&!X,L.zzz.position.set(L.group.position.x+.32,1.95+(I.reducedMotion?0:(D*.35+H*.3)%1*.35),L.group.position.z),L.zzz.material.opacity=I.reducedMotion?.9:1-(D*.35+H*.3)%1*.6,Math.abs(L.tint-C.saturation)>.02&&(L.tint=C.saturation,L.group.traverse(De=>{if(De instanceof _t&&De.material instanceof fo&&De.material.userData.baseColor){const le=De.material.userData.baseColor,Ce=le.r*.3+le.g*.59+le.b*.11;De.material.color.setRGB(Ce+(le.r-Ce)*C.saturation,Ce+(le.g-Ce)*C.saturation,Ce+(le.b-Ce)*C.saturation)}})),L.activity.visible=R.state!=="idle"&&!(R.stationId==="culture"&&R.discussionBrief);const me=R.discussionBrief||"",ge=me?`${R.name}:${me}:${(R.discussionPeers||[]).join(",")}`:"";if(L.ideaText!==ge){if(L.idea){t.remove(L.idea),L.idea.geometry.dispose();const De=L.idea.material;De.map?.dispose(),De.dispose(),L.idea=null}L.ideaText=ge,me&&(L.idea=k(R.name,me,R.discussionPeers||[]),L.idea.name="recorded-discussion-bubble",t.add(L.idea))}if(L.idea&&(L.idea.visible=Bt>=.98&&R.stationId==="culture"&&!R.position?.moving&&(!!R.discussionBrief||R.state==="thinking"||R.state==="reviewing"),L.idea.position.set(L.group.position.x,3.05,L.group.position.z),L.idea.lookAt(e.position)),L.activityState!==R.state){L.activityState=R.state;const De=document.createElement("canvas");De.width=128,De.height=128;const le=De.getContext("2d");le.font="80px sans-serif",le.textAlign="center",le.textBaseline="middle",le.fillText(R.state==="thinking"?"💡":R.state==="working"?"🫧":"📈",64,64),L.activity.material.map?.dispose(),L.activity.material.map=new ur(De),L.activity.material.needsUpdate=!0}const ye=(I.replay||I.running)&&(R.state==="working"||R.state==="thinking");L.arm.rotation.x=J||R.position?.moving?Math.sin(D*5+H)*.12:ye?Math.sin(D*1.8+H)*.08:0,L.head.rotation.y=Math.sin(D*(C.level==="frenetic"?.9:.32)+H)*(C.level==="frenetic"?.12:.055),L.head.rotation.x=(ye&&!J?.12:0)+C.droop,L.light.scale.setScalar(ye?1+Math.sin(D*2)*.12:1)}),e.updateMatrixWorld();const te=[],E=230,y=86.25;for(const R of ut.values())if(R.idea?.visible){const H=R.idea.position.clone(),L=H.clone().applyMatrix4(e.matrixWorldInverse);if(L.z>=0){R.idea.visible=!1;continue}const ie=H.project(e);if(Math.abs(ie.x)>1.15||Math.abs(ie.y)>1.15){R.idea.visible=!1;continue}let ue=Rn.clamp((ie.x+1)*innerWidth/2,90+E/2,innerWidth-E/2-16),Y=(1-ie.y)*innerHeight/2;for(let fe=0;fe<12&&te.some(C=>Math.abs(ue-C.x)<E+10&&Math.abs(Y-C.y)<y+8);fe++)Y-=y+8,Y<110&&(Y=155,ue=Math.min(innerWidth-E/2-16,ue+E+12));te.push({x:ue,y:Y}),R.idea.position.set(ue/innerWidth*2-1,1-Y/innerHeight*2,ie.z).unproject(e),R.idea.quaternion.copy(e.quaternion);const ee=2*-L.z*Math.tan(Rn.degToRad(e.fov/2))/innerHeight;R.idea.scale.setScalar(E*ee/2.7),R.idea.renderOrder=10}}const z=new Yn;t.add(z);const pn=new Set([...ut.values()].flatMap(D=>[D.group,D.sign,D.activity,D.meter,D.zzz]));for(const D of[...t.children])D!==z&&!pn.has(D)&&z.add(D);function mt(D){Bt=Rn.clamp(D,0,1);const I=GS(Bt,ut.size);z.scale.setScalar(I.room),[...ut.values()].forEach((ne,j)=>{const te=I.agents[j]??1,E=te<.88?te/.88*1.08:1.08-(te-.88)/.12*.08;ne.group.scale.setScalar(E),ne.sign.scale.setScalar(E),ne.activity.scale.set(.8*E,.8*E,1),ne.meter.scale.set(.86*E,.215*E,1),ne.zzz.scale.set(.5*E,.5*E,1)})}return{scene:t,camera:e,colliders:n,stations:Rt,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:hn,grow:mt,setOverview:D=>{W.visible=!0},agentPositions:()=>[...ut.values()].map(D=>({id:D.id,position:D.group.position.clone()})),exposure:1}}const XS=!0;function ap(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function Oc(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function af(t,e="|"){return t.map(n=>fp(n)).join(e)}function Fc(t,e){return typeof e=="bigint"?e.toString():e}class ZS{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function pu(t){return new ZS(t)}function qS(t){return t==null}function mu(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function YS(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function Cr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function op(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function Ei(t){return op(t._zod.def)??t._zod.def.shape}function lp(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return Cr(this,e,i),i},enumerable:!0,configurable:!0})}function cp(t,e,n){e in t?Cr(t,e,n):t[e]=n}function wr(t,e,n,i){const r=Ei(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?lp(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):cp(t,s,i?i(a.value,s):a.value))}}function KS(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?lp(t,n,()=>e[n]):cp(t,n,i.value))}}function An(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function jS(t){return JSON.stringify(t)}function JS(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const up="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function No(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const QS=pu(()=>{if(ri.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function aa(t){if(No(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(No(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function dp(t){return aa(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const eb=new Set(["string","number","symbol"]);function jo(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ji(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Fe(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function fp(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function tb(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const hp={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},nb={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function ib(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return wr(s,t,Jo(t,e)),ji(t,An(n,{shape:s,checks:[]}))}function Jo(t,e){const n=Ei(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function rb(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(Jo(t,e)),a={};return wr(a,t,Reflect.ownKeys(Ei(t)).filter(o=>!s.has(o))),ji(t,An(n,{shape:a,checks:[]}))}function sb(t,e){if(!aa(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=Ei(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return ji(t,An(t._zod.def,{shape:pp(t,e)}))}function pp(t,e){const n={};return wr(n,t,Reflect.ownKeys(Ei(t))),KS(n,e),n}function ab(t,e){if(!aa(e))throw new Error("Invalid input to safeExtend: expected a plain object");return ji(t,An(t._zod.def,{shape:pp(t,e)}))}function ob(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};wr(n,t,Reflect.ownKeys(Ei(t))),wr(n,e,Reflect.ownKeys(Ei(e)));const i=An(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return ji(t,i)}function of(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(Jo(e,n)):void 0,l={};return wr(l,e,Reflect.ownKeys(Ei(e)),t&&((c,u)=>o&&!o.has(u)?c:new t({type:"optional",innerType:c}))),ji(e,An(e._zod.def,{shape:l,checks:[]}))}function lb(t,e,n){const i=n?new Set(Jo(e,n)):void 0,r={};return wr(r,e,Reflect.ownKeys(Ei(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),ji(e,An(e._zod.def,{shape:r}))}function xi(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function cb(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function mp(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function Ls(t){return typeof t=="string"?t:t?.message}function lf(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function kc(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function ps(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:Ls(t.inst?._zod.def?.error?.(t))??Ls(s?.(t))??Ls(e?.error?.(t))??Ls(n.customError?.(t))??Ls(n.localeError?.(t))??"Invalid input",o={};for(const l of Object.keys(t))l==="inst"||l==="schema"||l==="continue"||l==="input"||l==="__proto__"||(o[l]=t[l]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const ub=/[\uD800-\uDBFF]/;function gu(t){const e=t.length;if(!ub.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function _u(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function db(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function oa(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function fb(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):hb(t,n,i.value)}}function Yi(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function gp(t,e,n){return Yi(t,e,n,!1)}function _p(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return Yi(this,n,i(this))},set(r){Yi(this,n,r)}})}return e}function hb(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:Yi(this,e,n.bind(this))},set(i){Yi(this,e,i)}})}function pb(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let Dl,Oi=!1;const mb={configurable:!0,get(){Oi=!0}};function ft(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&Dl!==t._zod){Dl=void 0;return}Dl=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,mb);const r=Oi;Oi=!1;try{const s=n(this);return Oi?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Oi=Oi||r,s}catch(s){throw delete this[e],Oi=Oi||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function gb(t,e,n,i){const r=pb(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const _b="~constantCatch";function vb(t){const e=()=>t;return e[_b]=!0,e}var cf;const Ul={value:void 0,enumerable:!1};let uf="captureStackTrace"in Error?Error:null;function xb(t){const e=uf;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return uf=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function ce(t,e,n,i){const r={};function s(d){this.def=d,this.constr=f,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function l(d,h){if(d._zod){if(d._zod.traits.has(t))return}else{Ul.value=new s(h);try{Object.defineProperty(d,"_zod",Ul)}finally{Ul.value=void 0}}if(d._zod.traits.add(t),e(d,h),o){const x=Object.getPrototypeOf(d),m=d._zod.constr.prototype;let p=x;for(;p&&p!==m;)p=Object.getPrototypeOf(p);const _=p??x;o.has(_)||(o.add(_),fb(_,a))}const g=f.prototype;for(const x in g)Object.prototype.hasOwnProperty.call(g,x)&&(x in d||(d[x]=g[x].bind(d)))}const c=i?.Parent??Object;class u extends c{}Object.defineProperty(u,"name",{value:t});function f(d){const h=i?.Parent?xb(u):this;l(h,d);const g=h._zod.deferred;if(g){for(const m of g)m();h._zod.deferred=void 0}const x=globalThis.__zod_globalConfig?.postProcessor;return x&&x(h),h}return Object.defineProperty(f,"init",{value:l}),Object.defineProperty(f,Symbol.hasInstance,{value:d=>i?.Parent&&d instanceof i.Parent?!0:d?._zod?.traits?.has(t)}),Object.defineProperty(f,"name",{value:t}),f}class _r extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class vp extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(cf=globalThis).__zod_globalConfig??(cf.__zod_globalConfig={});const ri=globalThis.__zod_globalConfig;function Ji(t){return t&&Object.assign(ri,t),ri}function yb(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,Fc,2)),t.message}function Sb(t){this._zod.message=t}const bb={get:yb,set:Sb,enumerable:!0,configurable:!0},Ol={value:void 0,enumerable:!1},df=new WeakSet([Object.prototype,Error.prototype]),Mb=(t,e)=>{t.name="$ZodError",Ol.value=e,Object.defineProperty(t,"issues",Ol),Ol.value=void 0,Object.defineProperty(t,"message",bb);const n=Object.getPrototypeOf(t);df.has(n)||(df.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},Eb=ce("$ZodError",Mb);function wb(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function Tb(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?wb(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function Ab(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let l=n,c=0;for(;c<o.length;){const u=o[c],f=c===o.length-1;if(u==="_errors"){f&&l._errors.push(e(a)),c++;continue}Object.prototype.hasOwnProperty.call(l,u)||Object.defineProperty(l,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const d=l[u];f&&d._errors.push(e(a)),l=d,c++}}}};return i(t),n}function Qo(t,e){return{callee:e?.callee??t,Err:e?.Err}}const vu=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new _r;if(o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>ps(c,a,Ji())));throw up(l,s?.callee??e),l}return o.value};return e},xu=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>ps(c,a,Ji())));throw up(l,s?.callee??e),l}return o.value};return e},yu=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new _r;return s.issues.length?xp(t,s.issues,r):{success:!0,data:s.value}};function xp(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>ps(r,n,Ji()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const Su=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?xp(t,s.issues,r):{success:!0,data:s.value}},Rb=Symbol.for("zod.compile.invalid"),Cb=Symbol.for("zod.compile.fallback"),Pb=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==Rb)return!0;if(i.definite===!0&&n===void 0)return!1}return Ib(t,e,n)});function Ib(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[Cb]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new _r;return s.issues.length===0}const Lb=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},Nb=t=>{const e=vu(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,Qo(n,a))};return n},Db=t=>{const e=vu(t),n=(i,r,s,a)=>e(i,r,s,Qo(n,a));return n},Ub=t=>{const e=xu(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,Qo(n,a))};return n},Ob=t=>{const e=xu(t),n=async(i,r,s,a)=>await e(i,r,s,Qo(n,a));return n},Fb=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return yu(t)(e,n,r)},kb=t=>(e,n,i)=>yu(t)(e,n,i),zb=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return Su(t)(e,n,r)},Bb=t=>async(e,n,i)=>Su(t)(e,n,i),$b=/^[cC][0-9a-z]{6,}$/,Hb=/^[0-9a-z]+$/,Gb=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,Vb=/^[0-9a-vA-V]{20}$/,Wb=/^[A-Za-z0-9]{27}$/,Xb=/^[a-zA-Z0-9_-]{21}$/;function Zb(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const qb=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,Yb=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,ff=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Kb=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,jb="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function Jb(){return new RegExp(jb,"u")}const Qb=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,eM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,tM=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,nM=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,iM=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,rM=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,sM=/^https?$/,aM=/^\+[1-9]\d{6,14}$/,yp="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function oM(t){return new RegExp(`^${t}$`)}const lM=oM(yp);function zc(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function cM(t){return new RegExp(`^${zc(t)}$`)}function uM(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${zc({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${zc({precision:t.precision})}`:n;return new RegExp(`^${yp}T(?:${i})$`)}const dM=/^[\s\S]{0,}$/,fM=/^-?\d+(?:\.\d+)?$/,hM=/^[^A-Z]*$/,pM=/^[^a-z]*$/,Sn=ce("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),bu=t=>{const e=t.value;return!qS(e)&&e.length!==void 0},Do={number:"number",bigint:"bigint",object:"date"},Sp=ce("$ZodCheckLessThan",(t,e)=>{Sn.init(t,e);const n=Do[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:Do[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),bp=ce("$ZodCheckGreaterThan",(t,e)=>{Sn.init(t,e);const n=Do[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:Do[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),mM=ce("$ZodCheckMultipleOf",(t,e)=>{Sn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):YS(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),gM=ce("$ZodCheckNumberFormat",(t,e)=>{Sn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=hp[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),_M=ce("$ZodCheckMaxLength",(t,e)=>{var n;Sn.init(t,e),(n=t._zod.def).when??(n.when=bu),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?gu(r):s)<=e.maximum)return;const o=_u(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),vM=ce("$ZodCheckMinLength",(t,e)=>{var n;Sn.init(t,e),(n=t._zod.def).when??(n.when=bu),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?gu(r):s)>=e.minimum)return;const o=_u(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),xM=ce("$ZodCheckLengthEquals",(t,e)=>{var n;Sn.init(t,e),(n=t._zod.def).when??(n.when=bu),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?gu(r):s;if(a===e.length)return;const o=_u(r),l=a>e.length;i.issues.push({origin:o,...l?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),el=ce("$ZodCheckStringFormat",(t,e)=>{var n,i;Sn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),yM=ce("$ZodCheckRegex",(t,e)=>{el.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),SM=ce("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=hM),el.init(t,e)}),bM=ce("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=pM),el.init(t,e)}),MM=ce("$ZodCheckIncludes",(t,e)=>{Sn.init(t,e);const n=jo(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),EM=ce("$ZodCheckStartsWith",(t,e)=>{Sn.init(t,e);const n=new RegExp(`^${jo(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),wM=ce("$ZodCheckEndsWith",(t,e)=>{Sn.init(t,e);const n=new RegExp(`.*${jo(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),TM=ce("$ZodCheckOverwrite",(t,e)=>{Sn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class AM{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const RM={major:4,minor:6,patch:7},Nt=ce("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=RM;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,l,c)=>{if(o.memo)return o;let u=xi(o),f;for(const d of l){if(d._zod.def.when){if(cb(o)||!d._zod.def.when(o))continue}else if(u)continue;const h=o.issues.length,g=d._zod.check(o);if(g instanceof Promise&&c?.async===!1)throw new _r;if(f||g instanceof Promise)f=(f??Promise.resolve()).then(async()=>{await g,o.issues.length!==h&&(kc(o.issues,h,t),u||(u=xi(o,h)))});else{if(o.issues.length===h)continue;kc(o.issues,h,t),u||(u=xi(o,h))}}return f?f.then(()=>o):o},a=(o,l,c)=>{if(xi(o))return o.aborted=!0,o;const u=s(l,r,c);if(u instanceof Promise){if(c.async===!1)throw new _r;return u.then(f=>t._zod.parse(f,c))}return t._zod.parse(u,c)};t._zod.run=(o,l)=>{if(l.skipChecks)return t._zod.parse(o,l);if(l.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...l,skipChecks:!0});return u instanceof Promise?u.then(f=>a(f,o,l)):a(u,o,l)}const c=t._zod.parse(o,l);if(c instanceof Promise){if(l.async===!1)throw new _r;return c.then(u=>s(u,r,l))}return s(c,r,l)}}},{get"~standard"(){return gp(this,"~standard",Ep(this))},set"~standard"(t){Yi(this,"~standard",t)}}),Mp=(t,e)=>t.issues.length?{issues:t.issues.map(n=>ps(n,e,Ji()))}:{value:t.value};async function CM(t,e){const n={async:!0};return Mp(await t._zod.run({value:e,issues:[]},n),n)}function Ep(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return Mp(i,n)}catch{}return CM(t,e)},vendor:"zod",version:1}}const Mu=ce("$ZodString",(t,e)=>{Nt.init(t,e),t._zod.pattern=e.pattern??dM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),St=ce("$ZodStringFormat",(t,e)=>{el.init(t,e),Mu.init(t,e)}),PM=ce("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=Yb),St.init(t,e)}),IM=ce("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=ff(i))}else e.pattern??(e.pattern=ff());St.init(t,e)}),LM=ce("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=Kb),St.init(t,e)}),wp=1,Uo=2;function Tp(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function NM(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?Tp(t)||Uo:DM(t,e)}function DM(t,e){if(!e.normalize&&e.protocol?.source===sM.source&&!/^https?:\/\//i.test(t))return wp;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??Uo}return new URL(t)}catch{return Uo}}const UM=/[\t\n\r]/g;function hf(t){return t.replace(UM,"")}function OM(t,e){return e.lastIndex=0,e.test(t.hostname)}function FM(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const kM=ce("$ZodURL",(t,e)=>{St.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=NM(i,e);if(r===wp){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===Uo){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=hf(i);return}e.hostname&&!OM(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!FM(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:hf(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),zM=ce("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=Jb()),St.init(t,e)}),BM=ce("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?Xb:Zb(e.length)),St.init(t,e)}),$M=ce("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=$b),St.init(t,e)}),HM=ce("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=Hb),St.init(t,e)}),GM=ce("$ZodULID",(t,e)=>{e.pattern??(e.pattern=Gb),St.init(t,e)}),VM=ce("$ZodXID",(t,e)=>{e.pattern??(e.pattern=Vb),St.init(t,e)}),WM=ce("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=Wb),St.init(t,e)}),XM=ce("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=uM(e)),St.init(t,e)}),ZM=ce("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=lM),St.init(t,e)}),qM=ce("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=cM(e)),St.init(t,e)}),YM=ce("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=qb),St.init(t,e)}),KM=ce("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=Qb),St.init(t,e)}),jM=/^[0-9a-fA-F:.]+$/;function Ap(t){return jM.test(t)?Tp(`http://[${t}]`):!1}const JM=ce("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=eM),St.init(t,e),t._zod.check=n=>{Ap(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),QM=ce("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=tM),St.init(t,e)});function eE(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:Ap(n)}const tE=ce("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=nM),St.init(t,e),t._zod.check=n=>{eE(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function Rp(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const Cp=/^[0-9a-zA-Z+/]*={0,2}$/,nE=ce("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Cp),St.init(t,e),t._zod.check=n=>{Rp(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),Eu=/^[A-Za-z0-9_-]*$/;function iE(t){if(!Eu.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return Rp(n)}const rE=ce("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=Eu),St.init(t,e),t._zod.check=n=>{iE(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),sE=ce("$ZodE164",(t,e)=>{e.pattern??(e.pattern=aM),St.init(t,e)});function aE(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const oE=ce("$ZodJWT",(t,e)=>{St.init(t,e),t._zod.check=n=>{aE(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),Pp=ce("$ZodNumber",(t,e)=>{Nt.init(t,e),t._zod.pattern=fM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),lE=ce("$ZodNumberFormat",(t,e)=>{gM.init(t,e),Pp.init(t,e)}),cE=ce("$ZodUnknown",(t,e)=>{Nt.init(t,e),t._zod.parse=n=>n}),uE=ce("$ZodNever",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function dE(t,e){const n=lf(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[l,c]of lf(t._zod.def.checks))if(o>l&&c._zod.def.when(s)){const u=s.issues.length;return c._zod.check(s),s.issues[u].continue=!1,kc(s.issues,u,t),s}}return r(s,a)}}const fE=t=>Array.isArray(t)?t.length:-1;function pf(t,e,n){t.issues.length&&e.issues.push(...mp(n,t.issues)),e.value[n]=t.value}const hE=ce("$ZodArray",(t,e)=>{Nt.init(t,e);const n=ri.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let l=0;l<s.length;l++){const c=s[l],u=e.element._zod.run({value:c,issues:[]},r);if(u instanceof Promise)a.push(u.then(f=>pf(f,i,l)));else if(pf(u,i,l),o&&u.issues.length!==0&&xi(u))break}return a.length?Promise.all(a).then(()=>i):i},dE(t,fE)});function Oo(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...mp(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const pE=[];function Ip(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:pE,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=tb(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function Lp(t,e,n,i,r,s,a){const o=[],l=r.keySet,c=r.catchall._zod,u=c.def.type,f=c.optin,d=c.optout;let h=0;for(const g in e){if(a&&n.issues.length!==h){if(xi(n,h))break;h=n.issues.length}if(l.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const x=c.run({value:e[g],issues:[]},i);x instanceof Promise?t.push(x.then(m=>Oo(m,n,g,e,f,d))):Oo(x,n,g,e,f,d)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const mE=ce("$ZodObject",(t,e)=>{Nt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const c=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),c.raw=u,u};c.raw=i,Object.defineProperty(e,"shape",{get:c})}const r=pu(()=>Ip(e));ft(t,"propValues",c=>{const u=c.def.shape,f={};for(const d in u){const h=u[d]._zod;if(h.values){Object.prototype.hasOwnProperty.call(f,d)||Cr(f,d,new Set);for(const g of h.values)f[d].add(g);h.optin!==void 0&&f[d].add(void 0)}}return f});const s=No,a=e.catchall;let o;const l=ri.memoizer;l?.attach(t),t._zod.parse=(c,u)=>{o??(o=r.value);const f=c.value;if(!s(f))return c.issues.push({expected:"object",code:"invalid_type",input:f,inst:t}),c;c.value=l?l.alloc(t,c,{},u):{};const d=[],h=o.shape,g=u?.abortEarly;let x=c.issues.length;for(const m of o.allKeys){if(g&&c.issues.length!==x){if(xi(c,x))break;x=c.issues.length}if(m==="__proto__")continue;const p=h[m],_=p._zod.optin,w=p._zod.optout,S=p._zod.run({value:f[m],issues:[]},u);S instanceof Promise?d.push(S.then(T=>Oo(T,c,m,f,_,w))):Oo(S,c,m,f,_,w)}return a?Lp(d,f,c,u,r.value,t,g===!0):d.length?Promise.all(d).then(()=>c):c}}),gE=ce("$ZodObjectJIT",(t,e)=>{mE.init(t,e);const n=t._zod.parse,i=pu(()=>Ip(e)),r=ri.memoizer,s=h=>{const g=i.value,x=g.symbolKeys,m=new AM(["payload","ctx"],{shape:h,inst:t,memo:r,syms:x}),p=T=>`shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`,_=(T,A)=>`
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
          }`;m.write("const input = payload.value;");const w=Object.create(null);let S=0;for(const T of g.allKeys)w[T]=`key_${S++}`;m.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const T of g.allKeys){if(T==="__proto__")continue;const A=w[T],v=typeof T=="symbol"?`syms[${x.indexOf(T)}]`:jS(T),b=`${v} in input`,k=h[T],N=k?._zod?.optin,O=N!==void 0,B=k?._zod?.optout==="optional";if(m.write(`const ${A} = ${p(v)};`),O&&B){const Z=N==="optional"?`${A}_present`:`${A}.value !== undefined || ${A}_present`;m.write(`
        const ${A}_present = ${b};
        if (!${A}.issues.length || ${A}_present) {
          if (${A}.issues.length) {${_(A,v)}
          }

          if (${Z}) {
            newResult[${v}] = ${A}.value;
          }
        }

      `)}else O?(m.write(`
        if (${A}.issues.length) {${_(A,v)}
        }
      `),N==="defaulted"?m.write(`newResult[${v}] = ${A}.value;`):m.write(`
        if (${A}.value !== undefined || ${b}) {
          newResult[${v}] = ${A}.value;
        }
      `)):m.write(`
        const ${A}_present = ${b};
        if (${A}.issues.length) {${_(A,v)}
        }
        if (!${A}_present && !${A}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${v}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${A}_present) {
          newResult[${v}] = ${A}.value;
        }

      `)}return m.write("payload.value = newResult;"),m.write("return payload;"),m.compile()};let a;const o=No,l=!ri.jitless,u=l&&QS.value,f=e.catchall;let d;t._zod.parse=(h,g)=>{d??(d=i.value);const x=h.value;return o(x)?l&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),h=a(h,g),f?Lp([],x,h,g,d,t,g?.abortEarly===!0):h):n(h,g):(h.issues.push({expected:"object",code:"invalid_type",input:x,inst:t}),h)}});function mf(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!xi(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>ps(a,i,Ji())))}),e)}const _E=ce("$ZodUnion",(t,e)=>{Nt.init(t,e),ft(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),ft(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),ft(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),ft(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>mu(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const l=o._zod.run({value:i.value,issues:[]},r);if(l instanceof Promise)a.push(l),s=!0;else{if(l.issues.length===0)return l;a.push(l)}}return s?Promise.all(a).then(o=>mf(o,i,t,r)):mf(a,i,t,r)}}),vE=ce("$ZodIntersection",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([l,c])=>gf(n,l,c)):gf(n,s,a)}});function Bc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(aa(t)&&aa(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=Bc(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=Bc(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function gf(t,e,n){const i=new Map;let r;const s=new Map,a=(c,u)=>{let f;if(c.code==="unrecognized_keys"&&!c.path?.length)r??(r=c),f=c.keys;else if(c.code==="invalid_key"&&c.origin==="record"&&c.path?.length===1){const d=String(c.path[0]);s.has(d)||s.set(d,c),f=[d]}else return!1;for(const d of f)i.has(d)||i.set(d,{}),i.get(d)[u]=!0;return!0};for(const c of e.issues)a(c,"l")||t.issues.push(c);for(const c of n.issues)a(c,"r")||t.issues.push(c);const o=[...i].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(o.length){const c=r?o.filter(u=>r.keys.includes(u)):[];c.length&&t.issues.push({...r,keys:c});for(const u of o)!c.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const l=Bc(e.value,n.value);if(!l.valid){if(xi(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)}return t.value=l.data,t}const xE=ce("$ZodEnum",(t,e)=>{Nt.init(t,e);const n=Oc(e.entries),i=new Set(n);t._zod.values=i,ft(t,"pattern",r=>{const s=Oc(r.def.entries).filter(a=>eb.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>jo(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),yE=ce("$ZodTransform",(t,e)=>{Nt.init(t,e),t._zod.optin="optional",ri.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new vp(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new _r;return n.value=r,n}});function _f(t,e){return t.value=e.issues.length?void 0:e.value,t}const Np=ce("$ZodOptional",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${mu(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>_f(n,s)):_f(n,r)}return e.innerType._zod.run(n,i)}}),SE=ce("$ZodExactOptional",(t,e)=>{Np.init(t,e),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),bE=ce("$ZodNullable",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${mu(i.source)}|null)$`):void 0}),ft(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),ME=ce("$ZodDefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>vf(s,e)):vf(r,e)}});function vf(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const EE=ce("$ZodPrefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),wE=ce("$ZodNonOptional",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>xf(s,t)):xf(r,t)}});function xf(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function yf(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>ps(r,i,Ji()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const TE=ce("$ZodCatch",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>yf(n,s,e,i)):yf(n,r,e,i)}}),AE=ce("$ZodPipe",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>n.def.in._zod.values),ft(t,"optin",n=>n.def.in._zod.optin),ft(t,"optout",n=>n.def.out._zod.optout),ft(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>ja(a,e.in,i)):ja(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>ja(s,e.out,i)):ja(r,e.out,i)}});function ja(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const RE=ce("$ZodReadonly",(t,e)=>{Nt.init(t,e),ft(t,"propValues",n=>n.def.innerType._zod.propValues),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"optin",n=>n.def.innerType?._zod?.optin),ft(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(Sf):Sf(r)}});function Sf(t){return t.memo||(t.value=Object.freeze(t.value)),t}const CE=ce("$ZodCustom",(t,e)=>{Sn.init(t,e),Nt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>bf(s,n,i,t));bf(r,n,i,t)}});function bf(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(oa(r))}}class PE extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const $c="~memo",Mf=[];function Dp(t){return t!==null&&typeof t=="object"}function Fl(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const Up=new WeakMap,zs=0,mo=1,Zs=2;function go(t,e,n){const i=Up.get(t);if(i!==void 0)return i?Zs:zs;if(e.has(t))return Zs;e.add(t);let r=zs;const s=u=>{if(r!==Zs&&u?._zod){const f=go(u,e);f>r&&(r=f)}},a=(u,f)=>{let d=zs;for(const h of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,h);if(!g.enumerable)continue;const x=g.get?mo:g.value?._zod?go(g.value,e):zs;x>d&&(d=x)}return d},o=u=>{u>r&&(r=u)},l=t._zod.def;switch(l.type){case"object":{const u=op(l);o(u?a(u):mo),s(l.catchall);break}case"array":s(l.element);break;case"tuple":for(const u of l.items)s(u);s(l.rest);break;case"record":case"map":s(l.keyType),s(l.valueType);break;case"set":s(l.valueType);break;case"union":for(const u of l.options)s(u);break;case"intersection":s(l.left),s(l.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(l.innerType);break;case"pipe":s(l.in),s(l.out);break;case"function":s(l.input),s(l.output);break;case"lazy":{const u=l._cachedInner??void 0;o(u?go(u,e):mo);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in l){const f=Object.getOwnPropertyDescriptor(l,u);if(!f||f.get)continue;const d=f.value;if(!(!d||typeof d!="object")){if(d._zod)s(d);else if(Array.isArray(d))for(const h of d)s(h)}}}return e.delete(t),IE(t,r)}function IE(t,e){return e!==mo&&Up.set(t,e===Zs),e}function LE(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let Ja;const Qa=[],NE={alloc(t,e,n){const i=Ja;if(!i)return n;Ja=void 0;const r={value:n,issues:null};return i.set(e.value,r),Qa.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&UE(s,r.value))throw new PE;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(l,c)=>{if(n===void 0){const p=go(t,new Set);if(p===zs)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(l,c);p===Zs||i?n=!0:i=!0}const u=l.value;if(!Dp(u))return a(l,c);let f=c[$c];f||(f={buckets:new WeakMap,backEdges:void 0},c[$c]=f);let d;r===c?d=s:(d=LE(f,t),r=c,s=d);const h=d.get(u);if(h)return l.value=h.value,h.issues?h.issues.length&&l.issues.push(...Fl(h.issues)):(l.memo=!0,f.backEdges??(f.backEdges=new WeakSet),f.backEdges.add(h.value)),l;Ja=d;const g=Qa.length,x=a(l,c);Ja=void 0;const m=Qa.length>g?Qa.pop():void 0;return x instanceof Promise?x.then(p=>(m&&(m.issues=p.issues.length?Fl(p.issues):Mf),p)):(m&&(m.issues=x.issues.length?Fl(x.issues):Mf),x)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function DE(){return NE}function UE(t,e){const n=t[$c]?.backEdges;return n!==void 0&&Dp(e)&&n.has(e)}const OE=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=db(s.input),l=r(o,s.input);return`Invalid input: expected ${a}, received ${l}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${fp(s.values[0])}`:`Invalid option: expected one of ${af(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${af(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function FE(){return{localeError:OE()}}var Ef;class kE{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function zE(){return new kE}(Ef=globalThis).__zod_globalRegistry??(Ef.__zod_globalRegistry=zE());const Bs=globalThis.__zod_globalRegistry;function Op(t){return t.checks&&(t.checks=[...t.checks]),t}function BE(t,e){return new t(Op({type:"string",...Fe(e)}))}function $E(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function HE(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function GE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function VE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function WE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function XE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function ZE(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function qE(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function YE(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function KE(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function jE(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function JE(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function QE(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function ew(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function tw(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function nw(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function iw(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function rw(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function sw(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function aw(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function ow(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function lw(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function cw(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function uw(t,e){return new t({type:"string",format:"date",check:"string_format",...Fe(e)})}function dw(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function fw(t,e){return new t({type:"string",format:"duration",check:"string_format",...Fe(e)})}function hw(t,e){return new t(Op({type:"number",checks:[],...Fe(e)}))}function pw(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function mw(t){return new t({type:"unknown"})}function gw(t,e){return new t({type:"never",...Fe(e)})}function wf(t,e){return new Sp({check:"less_than",...Fe(e),value:t,inclusive:!1})}function kl(t,e){return new Sp({check:"less_than",...Fe(e),value:t,inclusive:!0})}function Tf(t,e){return new bp({check:"greater_than",...Fe(e),value:t,inclusive:!1})}function zl(t,e){return new bp({check:"greater_than",...Fe(e),value:t,inclusive:!0})}function Af(t,e){return new mM({check:"multiple_of",...Fe(e),value:t})}function Fp(t,e){return new _M({check:"max_length",...Fe(e),maximum:t})}function Fo(t,e){return new vM({check:"min_length",...Fe(e),minimum:t})}function kp(t,e){return new xM({check:"length_equals",...Fe(e),length:t})}function _w(t,e){return new yM({check:"string_format",format:"regex",...Fe(e),pattern:t})}function vw(t){return new SM({check:"string_format",format:"lowercase",...Fe(t)})}function xw(t){return new bM({check:"string_format",format:"uppercase",...Fe(t)})}function yw(t,e){return new MM({check:"string_format",format:"includes",...Fe(e),includes:t})}function Sw(t,e){return new EM({check:"string_format",format:"starts_with",...Fe(e),prefix:t})}function bw(t,e){return new wM({check:"string_format",format:"ends_with",...Fe(e),suffix:t})}function ms(t){return new TM({check:"overwrite",tx:t})}function Mw(t){return ms(e=>e.normalize(t))}function Ew(){return ms(t=>t.trim())}function ww(){return ms(t=>t.toLowerCase())}function Tw(){return ms(t=>t.toUpperCase())}function Aw(){return ms(t=>JS(t))}function Rw(t,e,n){return new t({type:"array",element:e,...Fe(n)})}function Cw(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Fe(n)})}function Pw(t,e){const n=Iw(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(oa(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(oa(s))}},t(i.value,i)),e);return n}function Iw(t,e){const n=new Sn({check:"custom",...Fe(e)});return n._zod.check=t,n}function qs(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Cr(t,i,n[i]);return t}function zp(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??Bs,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function gs(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function qt(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const d=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(t,e,d,u)}const f=t._zod.parent;f&&(a.ref||(a.ref=f),qt(f,e,u),e.seen.get(f).isParent=!0)}const l=e.metadataRegistry.get(t);return l&&qs(a.schema,l),e.io==="input"&&an(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function Rf(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function Bp(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const l=i.get(o);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const f=t.external.registry.get(a[0])?.id,d=t.external.uri??(g=>g);if(f)return{ref:d(f)};const h=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=h,{defId:h,ref:`${d("__shared")}#/${o}/${Rf(h)}`}}const l="#",c=`${l}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:l};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:c+Rf(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:l,defId:c}=r(a);o.def={...o.schema},c&&(o.defId=c);const u=o.schema;for(const f in u)delete u[f];u.$ref=l};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const c=t.external.registry.get(a[0])?.id;if(e!==a[0]&&c){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function $p(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;$p(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const Hp=new Set(["type","properties","required","additionalProperties"]),Cf=["oneOf","anyOf"];function Pf(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function Hc(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!Hp.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const c of e){const u=c.properties?.[a]??Pf(c);u!=null&&(o.some(f=>JSON.stringify(f)===JSON.stringify(u))||o.push(u))}const l=o.length===1?o[0]:Hc(o)??{allOf:o};Cr(n,a,l)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=Pf(a);o&&!s.some(l=>JSON.stringify(l)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function Lw(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of Hp)if(r in t)return;const n=e.filter(r=>Cf.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=Hc(e);else{const r=n[0],s=Cf.find(l=>Array.isArray(r[l]));if(Object.keys(r).length!==1)return;const a=e.filter(l=>l!==r),o=r[s].map(l=>Hc([...a,l]));if(o.some(l=>!l))return;i={[s]:o}}i&&(delete t.allOf,qs(t,i))}function Gp(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const l=t.seen.get(o);if(l.ref===null)return;const c=l.def??l.schema,u={...c},f=l.ref;if(l.ref=null,f){i(f);const h=t.seen.get(f),g=h.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(g)):qs(c,g),qs(c,u),o._zod.parent===f)for(const m in c)m==="$ref"||m==="allOf"||m in u||delete c[m];if(g.$ref&&h.def)for(const m in c)m==="$ref"||m==="allOf"||m in h.def&&JSON.stringify(c[m])===JSON.stringify(h.def[m])&&delete c[m]}const d=o._zod.parent;if(d&&d!==f){i(d);const h=t.seen.get(d);if(h?.schema.$ref&&(c.$ref=h.schema.$ref,h.def))for(const g in c)g==="$ref"||g==="allOf"||g in h.def&&JSON.stringify(c[g])===JSON.stringify(h.def[g])&&delete c[g]}t.override({zodSchema:o,jsonSchema:c,path:l.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())$p(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const l of t.seen.values())for(const c of[l.schema,l.def]){const u=c?.allOf;if(!Array.isArray(u))continue;const f=o.get(u);f?f.push(c):o.set(u,[c])}for(const l of t.intersections)for(const c of o.get(l)??[])Lw(c)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}qs(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const l=o[1];l.def&&l.defId&&(l.def.id===l.defId&&delete l.def.id,Cr(a,l.defId,l.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:ko(e,"input",t.processors),output:ko(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function an(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return an(i.element,n);if(i.type==="set")return an(i.valueType,n);if(i.type==="lazy")return an(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return an(i.innerType,n);if(i.type==="intersection")return an(i.left,n)||an(i.right,n);if(i.type==="record"||i.type==="map")return an(i.keyType,n)||an(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:an(i.in,n)||an(i.out,n);if(i.type==="object"){for(const r in i.shape)if(an(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(an(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(an(r,n))return!0;return!!(i.rest&&an(i.rest,n))}return!1}const Nw=(t,e={})=>n=>{const i=zp({...n,processors:e});return qt(t,i),Bp(i,t),Gp(i,t)},ko=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=zp({...r??{},target:s,io:e,processors:n});return qt(t,a),Bp(a,t),Gp(a,t)},ls=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},cs=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},If=(t,e)=>{ls(t,"minimum",e),cs(t,"maximum",e)},Vp=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},Wp=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},Xp=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},Zp=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},Lf=(t,e)=>ls(t,"minimum",e.minimum),Nf=(t,e)=>cs(t,"maximum",e.maximum),Df=t=>(e,n)=>{Zp(e,n.format);const[i,r]=t[n.format];ls(e,"minimum",i),cs(e,"maximum",r)},Dw={greater_than:(t,e)=>ls(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>cs(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>Vp(t,e.value),number_format:Df(hp),bigint_format:Df(nb),min_length:Lf,max_length:Nf,length_equals:(t,e)=>If(t,e.length),min_size:Lf,max_size:Nf,size_equals:(t,e)=>If(t,e.size),string_format:(t,e)=>{Zp(t,e.format),e.pattern&&Wp(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>Xp(t,e.mime)};function Jn(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)Dw[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&ls(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&ls(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&cs(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&cs(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&Vp(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&Xp(e,r.mime);for(const s of r.patterns??[])Wp(e,s);return e}const Uw={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Ow=new Map([[Cp,iM],[Eu,rM]]),Fw=t=>Ow.get(t)??t,kw=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:l,contentEncoding:c,laxFormat:u}=Jn(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=Uw[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),c&&(r.contentEncoding=c),l&&l.size>0){const f=[...l].map(Fw);f.length===1?r.pattern=f[0].source:f.length>1&&(r.allOf=[...f.map(d=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:d.source}))])}},zw=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:l,exclusiveMinimum:c,isInt:u}=Jn(t);r.type=u?"integer":"number";const f=typeof c=="number"&&c>=(s??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(a??Number.POSITIVE_INFINITY),h=e.target==="draft-04"||e.target==="openapi-3.0";if(f?h?(r.minimum=c,r.exclusiveMinimum=!0):r.exclusiveMinimum=c:typeof s=="number"&&(r.minimum=s),d?h?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const p of o)Number.isFinite(p)&&p!==0?g.add(Math.abs(p)):gs(t,e,r,i,`A multipleOf divisor of ${p} cannot be represented in JSON Schema`);const[x,...m]=g;x!==void 0&&(r.multipleOf=x),m.length&&(r.allOf=[...r.allOf??[],...m.map(p=>({multipleOf:p}))])}},Bw=(t,e,n,i)=>{n.not={}},$w=(t,e,n,i)=>{},Hw=(t,e,n,i)=>{const r=t._zod.def,s=Oc(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},Gw=(t,e,n,i)=>{gs(t,e,n,i,"Custom types cannot be represented in JSON Schema")},Vw=(t,e,n,i)=>{gs(t,e,n,i,"Transforms cannot be represented in JSON Schema")},Ww=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=Jn(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=qt(s.element,e,{...i,path:[...i.path,"items"]})};function Gc(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?Gc(e.out):e.type==="catch"?Gc(e.innerType):t._zod.optin}const Xw=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&gs(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const c in a)Cr(r.properties,c,qt(a[c],e,{...i,path:[...i.path,"properties",c]}));const l=[];for(const c of Object.keys(a)){const u=s.shape[c];(e.io==="input"?Gc(u)===void 0:u._zod.optout===void 0)&&l.push(c)}l.length>0&&(r.required=l),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=qt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},Zw=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,l)=>qt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",l]}));s?n.oneOf=a:n.anyOf=a},qw=(t,e,n,i)=>{const r=t._zod.def,s=qt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=qt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=c=>"allOf"in c&&Object.keys(c).length===1,l=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=l,e.intersections.push(l)},Yw=(t,e,n,i)=>{const r=t._zod.def,s=qt(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},Kw=(t,e,n,i)=>{const r=t._zod.def;qt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},wu=Symbol();function qp(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,l)=>typeof l!="bigint"?l:(s=!0,null));return s?(gs(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),wu):JSON.parse(a)}const jw=(t,e,n,i)=>{const r=t._zod.def;qt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=qp(r.defaultValue,t,e,n,i);a!==wu&&(n.default=a)},Jw=(t,e,n,i)=>{const r=t._zod.def;qt(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=qp(r.defaultValue,t,e,n,i);a!==wu&&(n._prefault=a)},Qw=(t,e,n,i)=>{const r=t._zod.def;qt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{gs(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},eT=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;qt(a,e,i);const o=e.seen.get(t);o.ref=a},tT=(t,e,n,i)=>{const r=t._zod.def;qt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},Yp=(t,e,n,i)=>{const r=t._zod.def;qt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Uf=new WeakSet([Object.prototype,Error.prototype]);function eo(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const nT=(t,e)=>{Eb.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);Uf.has(n)||(Uf.add(n),eo(n,"format",i=>r=>Ab(i,r)),eo(n,"flatten",i=>r=>Tb(i,r)),eo(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,Fc,2)}),eo(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,Fc,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Dn=ce("ZodError",nT,void 0,{Parent:Error}),iT=vu(Dn),rT=xu(Dn),sT=yu(Dn),aT=Su(Dn),oT=Nb(Dn),lT=Db(Dn),cT=Ub(Dn),uT=Ob(Dn),dT=Fb(Dn),fT=kb(Dn),hT=zb(Dn),pT=Bb(Dn);function mT(){ri.localeError||Ji(FE())}function Tu(){ri.memoizer||Ji({memoizer:DE()})}const Dt=ce("ZodType",(t,e)=>(mT(),Nt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(An(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return ji(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(uA(t,e))},superRefine(t,e){return this.check(dA(t,e))},overwrite(t){return this.check(ms(t))},optional(){return kf(this)},exactOptional(){return jT(this)},nullable(){return zf(this)},nullish(){return kf(zf(this))},nonoptional(t){return iA(this,t)},array(){return jr(this)},or(t){return XT([this,t])},and(t){return qT(this,t)},transform(t){return Bf(this,KT(t))},default(t){return eA(this,t)},prefault(t){return nA(this,t)},catch(t){return sA(this,t)},pipe(t){return Bf(this,t)},readonly(){return lA(this)},describe(t){const e=this.clone();return Bs.add(e,{description:t}),e},meta(...t){if(t.length===0)return Bs.get(this);const e=this.clone();return Bs.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return gp(this,"~standard",{...Ep(this),jsonSchema:{input:ko(this,"input"),output:ko(this,"output")}})},set"~standard"(t){Yi(this,"~standard",t)},parse:function t(e,n){return iT(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await rT(this,e,n,{callee:t})},safeParse(t,e){return sT(this,t,e)},async safeParseAsync(t,e){return aT(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){Yi(this,"spa",t)},validate(t,e){return Pb(this,t,e)},validateAsync(t,e){return Lb(this,t,e)},encode:function t(e,n){return oT(this,e,n,{callee:t})},decode:function t(e,n){return lT(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await cT(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await uT(this,e,n,{callee:t})},safeEncode(t,e){return dT(this,t,e)},safeDecode(t,e){return fT(this,t,e)},async safeEncodeAsync(t,e){return hT(this,t,e)},async safeDecodeAsync(t,e){return pT(this,t,e)},toJSONSchema(t){return Nw(this,{})(t)},get description(){return Bs.get(this)?.description},get _def(){return this._zod.def}}),Kp=ce("_ZodString",(t,e)=>{Mu.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>kw(t,n,i)},_p({format:t=>Jn(t).format??null,minLength:t=>Jn(t).minimum??null,maxLength:t=>Jn(t).maximum??null},{regex(...t){return this.check(_w(...t))},includes(...t){return this.check(yw(...t))},startsWith(...t){return this.check(Sw(...t))},endsWith(...t){return this.check(bw(...t))},min(...t){return this.check(Fo(...t))},max(...t){return this.check(Fp(...t))},length(...t){return this.check(kp(...t))},nonempty(...t){return this.check(Fo(1,...t))},lowercase(t){return this.check(vw(t))},uppercase(t){return this.check(xw(t))},trim(){return this.check(Ew())},normalize(...t){return this.check(Mw(...t))},toLowerCase(){return this.check(ww())},toUpperCase(){return this.check(Tw())},slugify(){return this.check(Aw())}})),gT=ce("ZodString",(t,e)=>{Mu.init(t,e),Kp.init(t,e)},{email(t){return this.check($E(ST,t))},url(t){return this.check(ZE(MT,t))},jwt(t){return this.check(lw(kT,t))},emoji(t){return this.check(qE(ET,t))},guid(t){return this.check(HE(bT,t))},uuid(t){return this.check(GE(to,t))},uuidv4(t){return this.check(VE(to,t))},uuidv6(t){return this.check(WE(to,t))},uuidv7(t){return this.check(XE(to,t))},nanoid(t){return this.check(YE(wT,t))},cuid(t){return this.check(KE(TT,t))},cuid2(t){return this.check(jE(AT,t))},ulid(t){return this.check(JE(RT,t))},base64(t){return this.check(sw(UT,t))},base64url(t){return this.check(aw(OT,t))},xid(t){return this.check(QE(CT,t))},ksuid(t){return this.check(ew(PT,t))},ipv4(t){return this.check(tw(IT,t))},ipv6(t){return this.check(nw(LT,t))},cidrv4(t){return this.check(iw(NT,t))},cidrv6(t){return this.check(rw(DT,t))},e164(t){return this.check(ow(FT,t))},datetime(t){return this.check(cw(_T,t))},date(t){return this.check(uw(vT,t))},time(t){return this.check(dw(xT,t))},duration(t){return this.check(fw(yT,t))}});function rt(t){return BE(gT,t)}const wt=ce("ZodStringFormat",(t,e)=>{St.init(t,e),Kp.init(t,e)}),_T=ce("ZodISODateTime",(t,e)=>{XM.init(t,e),wt.init(t,e)}),vT=ce("ZodISODate",(t,e)=>{ZM.init(t,e),wt.init(t,e)}),xT=ce("ZodISOTime",(t,e)=>{qM.init(t,e),wt.init(t,e)}),yT=ce("ZodISODuration",(t,e)=>{YM.init(t,e),wt.init(t,e)}),ST=ce("ZodEmail",(t,e)=>{LM.init(t,e),wt.init(t,e)}),bT=ce("ZodGUID",(t,e)=>{PM.init(t,e),wt.init(t,e)}),to=ce("ZodUUID",(t,e)=>{IM.init(t,e),wt.init(t,e)}),MT=ce("ZodURL",(t,e)=>{kM.init(t,e),wt.init(t,e)}),ET=ce("ZodEmoji",(t,e)=>{zM.init(t,e),wt.init(t,e)}),wT=ce("ZodNanoID",(t,e)=>{BM.init(t,e),wt.init(t,e)}),TT=ce("ZodCUID",(t,e)=>{$M.init(t,e),wt.init(t,e)}),AT=ce("ZodCUID2",(t,e)=>{HM.init(t,e),wt.init(t,e)}),RT=ce("ZodULID",(t,e)=>{GM.init(t,e),wt.init(t,e)}),CT=ce("ZodXID",(t,e)=>{VM.init(t,e),wt.init(t,e)}),PT=ce("ZodKSUID",(t,e)=>{WM.init(t,e),wt.init(t,e)}),IT=ce("ZodIPv4",(t,e)=>{KM.init(t,e),wt.init(t,e)}),LT=ce("ZodIPv6",(t,e)=>{JM.init(t,e),wt.init(t,e)}),NT=ce("ZodCIDRv4",(t,e)=>{QM.init(t,e),wt.init(t,e)}),DT=ce("ZodCIDRv6",(t,e)=>{tE.init(t,e),wt.init(t,e)}),UT=ce("ZodBase64",(t,e)=>{nE.init(t,e),wt.init(t,e)}),OT=ce("ZodBase64URL",(t,e)=>{rE.init(t,e),wt.init(t,e)}),FT=ce("ZodE164",(t,e)=>{sE.init(t,e),wt.init(t,e)}),kT=ce("ZodJWT",(t,e)=>{oE.init(t,e),wt.init(t,e)}),jp=ce("ZodNumber",(t,e)=>{Pp.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>zw(t,n,i,r),t.isFinite=!0},_p({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=Jn(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=Jn(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=Jn(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>Jn(t).format??null},{gt(t,e){return this.check(Tf(t,e))},gte(t,e){return this.check(zl(t,e))},min(t,e){return this.check(zl(t,e))},lt(t,e){return this.check(wf(t,e))},lte(t,e){return this.check(kl(t,e))},max(t,e){return this.check(kl(t,e))},int(t){return this.check(Of(t))},safe(t){return this.check(Of(t))},positive(t){return this.check(Tf(0,t))},nonnegative(t){return this.check(zl(0,t))},negative(t){return this.check(wf(0,t))},nonpositive(t){return this.check(kl(0,t))},multipleOf(t,e){return this.check(Af(t,e))},step(t,e){return this.check(Af(t,e))},finite(){return this}}));function mn(t){return hw(jp,t)}const zT=ce("ZodNumberFormat",(t,e)=>{lE.init(t,e),jp.init(t,e)});function Of(t){return pw(zT,t)}const BT=ce("ZodUnknown",(t,e)=>{cE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>$w()});function Ff(){return mw(BT)}const $T=ce("ZodNever",(t,e)=>{uE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Bw(t,n,i)});function HT(t){return gw($T,t)}const GT=ce("ZodArray",(t,e)=>{Tu(),hE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Ww(t,n,i,r),t.element=e.element},{min(t,e){return this.check(Fo(t,e))},nonempty(t){return this.check(Fo(1,t))},max(t,e){return this.check(Fp(t,e))},length(t,e){return this.check(kp(t,e))},unwrap(){return this.element}});function jr(t,e){return Rw(GT,t,e)}const VT=ce("ZodObject",(t,e)=>{Tu(),gE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Xw(t,n,i,r),gb(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return mr(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(An(this._zod.def,{catchall:t}))},passthrough(){return this.clone(An(this._zod.def,{catchall:Ff()}))},loose(){return this.clone(An(this._zod.def,{catchall:Ff()}))},strict(){return this.clone(An(this._zod.def,{catchall:HT()}))},strip(){return this.clone(An(this._zod.def,{catchall:void 0}))},extend(t){return sb(this,t)},safeExtend(t){return ab(this,t)},merge(t){return ob(this,t)},pick(t){return ib(this,t)},omit(t){return rb(this,t)},partial(...t){return of(Jp,this,t[0])},exactPartial(...t){return of(Qp,this,t[0],"exactPartial")},required(...t){return lb(em,this,t[0])}});function mi(t,e){const n={type:"object",shape:t??{},...Fe(e)};return new VT(n)}const WT=ce("ZodUnion",(t,e)=>{_E.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Zw(t,n,i,r),t.options=e.options});function XT(t,e){return new WT({type:"union",options:t,...Fe(e)})}const ZT=ce("ZodIntersection",(t,e)=>{vE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>qw(t,n,i,r)});function qT(t,e){return new ZT({type:"intersection",left:t,right:e})}const Vc=ce("ZodEnum",(t,e)=>{xE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(i,r,s)=>Hw(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new Vc({...e,checks:[],...Fe(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new Vc({...e,checks:[],...Fe(r),entries:s})}});function mr(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new Vc({type:"enum",entries:n,...Fe(e)})}const YT=ce("ZodTransform",(t,e)=>{Tu(),yE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Vw(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new vp(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(oa(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(oa(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function KT(t){return new YT({type:"transform",transform:t})}const Jp=ce("ZodOptional",(t,e)=>{Np.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Yp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function kf(t){return new Jp({type:"optional",innerType:t})}const Qp=ce("ZodExactOptional",(t,e)=>{SE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Yp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function jT(t){return new Qp({type:"optional",innerType:t})}const JT=ce("ZodNullable",(t,e)=>{bE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Yw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function zf(t){return new JT({type:"nullable",innerType:t})}const QT=ce("ZodDefault",(t,e)=>{ME.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>jw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function eA(t,e){return new QT({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():dp(e)}})}const tA=ce("ZodPrefault",(t,e)=>{EE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Jw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function nA(t,e){return new tA({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():dp(e)}})}const em=ce("ZodNonOptional",(t,e)=>{wE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Kw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function iA(t,e){return new em({type:"nonoptional",innerType:t,...Fe(e)})}const rA=ce("ZodCatch",(t,e)=>{TE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Qw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function sA(t,e){return new rA({type:"catch",innerType:t,catchValue:typeof e=="function"?e:vb(e)})}const aA=ce("ZodPipe",(t,e)=>{AE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>eT(t,n,i,r),t.in=e.in,t.out=e.out});function Bf(t,e){return new aA({type:"pipe",in:t,out:e})}const oA=ce("ZodReadonly",(t,e)=>{RE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>tT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function lA(t){return new oA({type:"readonly",innerType:t})}const cA=ce("ZodCustom",(t,e)=>{CE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Gw(t,n,i,r)});function uA(t,e={}){return Cw(cA,t,e)}function dA(t,e){return Pw(t,e)}const fA=mi({id:rt(),name:rt(),role:rt(),state:mr(["idle","thinking","working","reviewing"]),stationId:mr(["culture","analyzer","explorer","notebook"]),boredom:mn().min(0).max(100).nullable(),boredomSpectrum:mi({position:mn().min(0).max(1),color:rt(),regime:rt()}).optional()});mi({runId:rt(),lastSequence:mn().int().nonnegative(),status:mr(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:mn(),title:rt().optional(),config:mi({mode:mr(["tinker_modal","recorded"]),arm:mr(["A","B","C","D","full"]),rounds:mn(),task:rt().optional(),seed:mn().nullable(),model:rt().nullable()}),sourceCommit:rt(),progress:mn().min(0).max(1),round:mn(),boredom:mn(),regime:rt(),value:mn().nullable(),reference:mn().nullable(),agents:jr(fA),findings:jr(mi({agent:rt().optional(),role:rt(),message:rt(),round:mn().optional(),memoryId:rt().optional()})),results:jr(mi({agent:rt(),round:mn(),kind:rt(),status:rt(),value:mn().nullable(),commit:rt().nullable().optional(),description:rt(),sources:jr(rt()).optional()})),sources:jr(mi({id:rt().nullable(),title:rt().nullable(),url:rt().nullable(),query_id:rt().nullable()})),error:rt().nullable(),metric:mi({name:rt(),unit:rt(),direction:mr(["minimize","maximize"])}),provenance:mi({llm:rt(),gpu:rt(),exa:rt(),memory:rt(),execution:rt().optional()})});async function tm(t,e){{const n=ap(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const Bl=(t,e)=>t.filter(e).at(-1),us=(t,e)=>t.filter(n=>n.tick<=e),ve=t=>typeof t=="string"&&t.trim()?t.trim():null,yt=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Vi=t=>typeof t=="boolean"?t:null;function la(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const Wc=t=>new Map(t.map(e=>[String(e.id),e]));function $f(t){const e=ve(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:ve(n.idea)||ve(n.text)||e}:{text:e}}catch{return{text:e}}}function ca(t,e,n){if(!t)return null;const i=us(t.events,n).filter(S=>S.refs?.experiment_id===e);if(!i.length)return null;const r=Wc(la(t,"experiments")).get(e)||{},s=i.find(S=>S.type==="experiment.started"),a=Bl(i,S=>S.type==="experiment.finished"),o=Bl(i,S=>S.type==="gate.checked"),l=Bl(i,S=>S.type==="verdict.issued"),c=i.find(S=>S.refs?.study_id),u=ve(r.hypothesis_id)||ve(s?.refs?.hypothesis_id),f=u?us(t.events,n).find(S=>S.type==="hypothesis.proposed"&&S.refs?.hypothesis_id===u):void 0,d=f?Wc(la(t,"hypotheses")).get(u)||{}:null,h=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(h.reasons)&&h.reasons.length>0||typeof h.pass=="boolean"||yt(h.attempts)>0,x=o?.payload||{},m=[...Array.isArray(x.reasons)?x.reasons:[],...a&&Array.isArray(h.reasons)?h.reasons:[]].map(String),p=t.events.some(S=>S.type==="verdict.issued"&&S.refs?.experiment_id===e),_=l||a&&!p?r.verdict:null,w=l?.payload||{};return{id:e,agentId:ve(r.agent_id)||s?.agentId||i[0].agentId||null,round:yt(r.round)??yt(i[0].round),kind:ve(r.kind),commit:ve(r.commit)||ve(x.candidate_commit),role:ve(r.role)||ve(s?.payload?.role),description:ve(r.description)||ve(s?.payload?.description)||ve(s?.message),idea:d?{text:$f(d.text||f?.payload?.text).text,rationale:ve(d.rationale)||ve(f?.payload?.rationale)||ve($f(d.text||f?.payload?.text).rationale),predictedDelta:yt(d.predicted_delta)??yt(r.predicted_delta),sources:(Array.isArray(d.source_ids)?d.source_ids:[]).map(String)}:null,descriptor:r.descriptor||x.descriptor||null,gate:o||a&&g?{pass:Vi(x.pass)??Vi(h.pass),reasons:[...new Set(m)],attempts:yt(h.attempts),text:ve(x.text)||ve(o?.message),priorArt:(Array.isArray(x.prior_art)?x.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:ve(a.payload?.status)||ve(r.status),metric:yt(a.payload?.metric_value)??yt(r.metric_value),reward:yt(a.payload?.reward),text:ve(a.payload?.text)||ve(a.message),tick:a.tick}:null,verdict:l||_?{by:ve(_?.by_agent_id)||l?.agentId||null,verdict:ve(w.verdict)||ve(_?.verdict),why:ve(w.why)||ve(_?.why),tick:l?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([S,T])=>typeof T=="string"&&(a||S==="diff"))),logTail:a?ve(r.log_tail):null,studyId:ve(r.study_id)||ve(c?.refs?.study_id),timeline:i.map(S=>({tick:S.tick,type:S.type,text:ve(S.payload?.text)||ve(S.message)||S.type}))}}function hA(t,e){return[...new Set(us(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function Au(t,e){if(!t)return[];const n=us(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(hA(t,e)),s=la(t,"experiments").filter(a=>r.has(String(a.id)));return la(t,"sources").flatMap(a=>{const o=String(a.id),l=i.get(o),c=yt(a.tick);if(!l&&(c==null||c>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(ve).filter(Boolean):[],f=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(d=>r.has(d)),...s.filter(d=>Array.isArray(d.source_ids)&&d.source_ids.includes(o)).map(d=>String(d.id))])];return[{id:o,title:ve(a.title)||ve(l?.payload?.summary)||ve(a.url)||o,url:ve(a.url)||ve(l?.payload?.url),highlight:u[0]||ve(a.highlight)||ve(a.extract)||ve(l?.payload?.text),agentId:ve(a.agent_id)||l?.agentId||null,tick:l?.tick??c,citedBy:f}]})}const pA=t=>Array.isArray(t)?t.map(e=>({rho:yt(e?.rho),p:yt(e?.p),n:yt(e?.n),problem:e?.problem})):[],Hf=t=>({rho:yt(t.rho),p:yt(t.p),n:yt(t.n),halves:pA(t.halves),significant:Vi(t.significant),replicated:Vi(t.replicated),confirmed:Vi(t.confirmed)});function Xc(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(Xc);if(typeof t=="object"){const e=t,n=ve(e.text)||ve(e.why)||ve(e.reason)||ve(e.verdict);return n?[[ve(e.by)||ve(e.judge)||ve(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>Xc(r).map(s=>`${i}: ${s}`))}return[String(t)]}function Gf(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Vi(e.available)??!0,score:yt(e.score),rejected:Vi(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const l=o&&typeof o=="object"?o:{};return[a,{laugh:yt(l.laugh),think:yt(l.think),reason:ve(l.reason),model:ve(l.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:ve(a.title)||"",url:ve(a.url)||"",snippet:ve(a.snippet)||""})),priorWorkAvailable:Vi(e.prior_work_available)??!1}}function Ru(t,e){if(!t)return[];const n=us(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=Wc(la(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),l=i.get(o)||{},c=s.payload||{};if(s.type==="study.registered"){const f=l.dataset&&typeof l.dataset=="object"?l.dataset:{};r.set(o,{id:o,agentId:ve(l.agent_id)||s.agentId||null,experimentId:ve(l.experiment_id)||ve(s.refs?.experiment_id),round:yt(l.round)??yt(s.round),field:ve(c.field)||ve(l.field),direction:ve(l.direction),question:ve(c.question)||ve(l.question),hypothesis:ve(l.hypothesis),mechanism:ve(l.mechanism),dataset:{url:ve(f.url),x:ve(c.x)||ve(f.x),y:ve(c.y)||ve(f.y),xLevel:ve(f.x_level),yLevel:ve(f.y_level),id:ve(l.dataset_id)},predictedRho:yt(c.predicted_rho)??yt(l.predicted_rho),citations:(Array.isArray(l.citations)?l.citations:[]).map(String),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...Hf({...l,...c,halves:c.halves??l.halves,significant:c.significant??l.significant}),headline:ve(c.headline)||ve(l.headline),rejected:ve(c.rejected),text:ve(c.text)||ve(s.message)},u.committee=Gf(c.committee??l.committee)):s.type==="study.replicated"?u.replications.push(Hf(c)):s.type==="award.issued"&&(u.award={award:ve(c.award),score:yt(c.score),rejected:ve(c.rejected),headline:ve(c.headline),verdicts:Xc(c.verdicts??l.committee?.verdicts),text:ve(c.text)||ve(s.message)},u.committee=Gf(c)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function nm(t,e,n,i=40){return us(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:ve(s.kind),text:ve(s.text)||ve(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const mA=(t,e=3)=>t==null?"—":(t>0?"+":"")+t.toFixed(e),zo=t=>t==null?"—":t<1e-300?"<1e-300":String(Number(t.toPrecision(2))),Vf={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},$l=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function vr(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const Di=t=>typeof t=="string"?t.trim():"";function im(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},l=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const c=Di(o.regime);if(!c)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",f=s.get(u);s.set(u,c),l&&f!==c&&Vf[c]&&r.push({tick:a.tick,kind:"regime",title:Vf[c],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(l)if(a.type==="discovery.made"){const c=$l(o.metric_value),u=$l(o.previous_best),f=Di(o.title),d=c==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${vr(c)}${u==null?"":` (was ${vr(u)})`}`,h=$l(o.reward);r.push({tick:a.tick,kind:"best",title:c==null?"New discovery!":"New best!",detail:[d||(h==null?"":`reward ${vr(h)}`),f].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:Di(o.award)||Di(o.prize)||"Award issued",detail:[Di(o.title)||Di(o.headline),Di(o.citation)||Di(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function gA(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}const _A=/\b(?:402|credit|billing|payment|quota)\b/i;function Cu(t,e){const n=i=>typeof i=="string"&&_A.test(i.replace(/https?:\/\/\S+/gi," "));return Array.isArray(t.publish_errors)&&t.publish_errors.some(i=>n(i.kind)||n(i.message))?!0:(e?.events||[]).some(i=>(i.type==="run.finished"||i.type==="run.stopped")&&(n(i.message)||["text","error","reason","detail","message"].some(r=>n(i.payload?.[r]))))}function vA(t){const e=t.provenance?.command,i=(Array.isArray(e)?e.join(" "):typeof e=="string"?e:"").match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1],r=Number(i);return Number.isFinite(r)&&r>0?r:void 0}function xA(t,e){const n=(e?.events||[]).flatMap(o=>[o.round,o.payload?.round]).filter(o=>typeof o=="number"&&Number.isFinite(o)),i=Math.max(t.time?.rounds||0,...n),r=t.requestedRounds||t.requested_rounds||t.rounds||t.run?.rounds||vA(t),s=i?` (${i}${r?`/${r}`:""} rounds)`:"",a=Cu(t,e)?" · Tinker credit ran out":"";return`Stopped real run${s}${a}`}function Pu(t,e){const n=t?.provenance,i=[];if(n?.exa==="off"?i.push("Exa off"):(n?.exa==="live"||n?.exa==="on")&&i.push("Exa on"),n?.memory_backend==="pastdev"?i.push("past.dev memory"):n?.memory_backend==="local"&&i.push("local memory"),n?.llm==="fake"||n?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:i};const r=typeof n?.llm=="string"&&n.llm!=="fake"?gA(n.llm):"";return r?t?.status==="stopped"?{label:xA(t,e),tone:"stopped",chips:i}:t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:i}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${r} run`,tone:"live",chips:i}:{label:"Finished real run",tone:"finished",chips:i}:{label:"Unverified recording",tone:"unknown",chips:i}}function yA(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function SA(t){return t.sample===!1&&t.status==="stopped"?{eyebrow:"RESEARCH / SWARM RUN",kicker:"● SWARM RUN · STOPPED",callout:"Swarm run · stopped. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${rm(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function bA(t,e){return!!t.live||e<t.totalTicks}function _a(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function MA(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function EA(t,e){return t.filter(n=>n.tick<=e)}function wA(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const rm=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function TA(t){const e=t.publish_errors;return Array.isArray(e)?e.filter(n=>n.kind!=="recovered").length:typeof e=="number"?e:0}function AA(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}function RA(t){const e=t.status==="stopped"?"● SWARM RUN · STOPPED":t.stale?`LIVE RUN STALLED${t.lastUpdateTs?" · NO UPDATES SINCE "+rm(t.lastUpdateTs):""}`:t.live?"FOLLOWING LIVE SWARM":"SWARM RUN · FINISHED",n=TA(t);return n?`${e} · ${n} PUBLISH ERROR${n===1?"":"S"}`:e}const Wf=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function CA(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const l=[...n[a]||[]],c=new Map(l.map((u,f)=>[Wf(u),f]));for(const u of o){const f=c.get(Wf(u));f===void 0?l.push(u):l[f]=u}n[a]=l}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function PA(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return CA(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const IA={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel Prize hunt"};function Xf(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function sm(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function tl(t){return t.task_title||IA[sm(t)]||t.title}function am(t,e){return t<=700||e<=500}function om(t){if(!t?.name)return"";const e=t.name.replaceAll("_"," ");return t.direction==="maximize"?`${e} ↑ higher is better`:`${e} ↓ lower is better`}function lm(t){return t?.direction==="minimize"?"Loss":t?.name?t.name.replaceAll("_"," ").replace(/^./,e=>e.toUpperCase()):"Metric"}function LA(t,e,n,i){return typeof t=="number"&&Number.isFinite(t)?`${n} ${i(t)}`:t===null&&typeof e=="number"&&Number.isFinite(e)?`Reward ${i(e)}`:""}function Iu(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};if(t.status==="stopped")return{status:"stopped",label:"STOPPED",detail:"The run ended before finishing"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${Xf(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${Xf(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function NA(t){const e=t.publish_errors;return Array.isArray(e)?e.length:typeof e=="number"?e:0}function DA(t){const e=NA(t);return e?`${e} publish error${e===1?"":"s"}`:""}function UA(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function OA(t){const e=Iu(t),n=t.sample===!1?AA({...t,stale:e.status==="stale",live:e.status==="live"}):"",i=tl(t),r=i===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[n+i,r,t.sample===!1&&e.status==="stopped"?e.label.toLowerCase():"",t.sample===!1?UA(t):""].filter(Boolean).join(" · ")}function FA(t,e){const n=[["Live now",t.filter(r=>r.sample===!1&&r.live)],["Swarm runs",t.filter(r=>r.sample===!1&&!r.live)],["Recorded samples",t.filter(r=>r.sample!==!1)]],i=r=>`<option value="${e(r.id)}">${e(OA(r))}</option>`;return n.filter(([,r])=>r.length).map(([r,s])=>`<optgroup label="${r}">${s.map(i).join("")}</optgroup>`).join("")}const Ys=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:null,cm=t=>Array.isArray(t)?t.filter(e=>!!Ys(e)):Ys(t)?Object.values(t).filter(e=>!!Ys(e)):[],kA="Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.";function Pr(t,e){const n=t?.metric?.description||"";return!!t&&(sm(t)==="ignobel"||t.metric?.name==="replicated_findings"||/replicated and significant/i.test(n)||cm(e?.entities?.studies).length>0)}function va(t,e){return Pr(t,e)?!cm(e?.entities?.studies).some(i=>i.committee!=null||Ys(i.result)?.committee!=null||Ys(i.graded)?.committee!=null)&&!(e?.events||[]).some(i=>i.type==="award.issued"):!1}function xa(t,e){if(Pr(t,e)){if(va(t,e))return kA;const n=t?.metric?.description;if(n)return n.replace(/\breplicated\s+and\s+significant\b/gi,"split-half consistent and significant").replace(/\breplicated\b/gi,"passed split-half consistency").replace(/\breplication\b/gi,"split-half consistency")}return t?.proxy_note}const _o={minRho:.1,alpha:.005,splitAlpha:.05},hr=t=>typeof t=="number"&&Number.isFinite(t),Hl=t=>hr(t)?t:void 0,no=t=>String(t);function um(t){const e=t&&typeof t=="object"?t:{};return{minRho:Hl(e.minRho??e.min_rho??e.min_effect_rho)??_o.minRho,alpha:Hl(e.alpha??e.p_alpha??e.significance_alpha)??_o.alpha,splitAlpha:Hl(e.splitAlpha??e.split_alpha??e.replication_alpha)??_o.splitAlpha}}function dm(t,e={}){const n={..._o,...e},i=[],r=t?.rho,s=t?.p,a=t?.direction==="positive"?1:t?.direction==="negative"?-1:hr(r)?Math.sign(r):0,o=t?.halves;return(!hr(r)||r*a<n.minRho)&&i.push(`|ρ| ≥ ${no(n.minRho)}`),(!hr(s)||s>=n.alpha)&&i.push(`p < ${no(n.alpha)}`),hr(r)&&o&&o.length>=2&&o.every(c=>{const u=c?.rho,f=c?.p;return hr(u)&&hr(f)&&f<n.splitAlpha&&u*a>=n.minRho&&!c.problem})||i.push(`split-half consistency (both halves p < ${no(n.splitAlpha)}, same direction, |ρ| ≥ ${no(n.minRho)})`),{pass:i.length===0,failures:i}}const Zf=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Ui=t=>typeof t=="string"?t:"";function zA(t){const e=Zf(t?.entities?.sources),n=new Map(e.map(o=>[Ui(o.url),o]).filter(([o])=>o)),i=Zf(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(l=>{const c=Ui(l),u=n.get(c);return{study:Ui(o.question)||Ui(o.headline)||Ui(o.id),url:c,sourceId:u?String(u.id??u.source_id??""):"",title:u?Ui(u.title):""}})).sort((o,l)=>+!!l.sourceId-+!!o.sourceId),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(Ui(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&/search|exa/.test(Ui(o.payload?.kind))).length,memoryRecalls:s,pastdev:a}}function Lu(t,e=Number.MAX_SAFE_INTEGER){const n=Ru(t,e),i=im(t?.events||[],-1,e).filter(l=>l.kind==="award"),r=new Set(n.filter(l=>l.result&&l.result.rejected==null&&l.result.p!=null&&Number.isFinite(l.result.p)).map(l=>l.id)).size,s=n.filter(l=>l.result?.confirmed===!0||l.result?.replicated===!0||l.replications.some(c=>c.confirmed===!0||c.replicated===!0)),a=s.filter(l=>dm(l.result?{...l.result,direction:l.direction||void 0}:null,um(t?.manifest?.judging)).pass).length,o=xa(t?.manifest,t)||"";return{studies:n.length,registered:n.length,ran:r,confirmed:s.length,underCurrentRules:a,passed:s.length,awards:i.map(l=>[l.title,l.detail].filter(Boolean).join(" · ")),proxyNote:o,isIgnobel:Pr(t?.manifest,t),preCommittee:va(t?.manifest,t)}}function BA(t){return Lu(t,Number.MAX_SAFE_INTEGER)}function $A(t,e,n,i=Lu(null),r=null,s=null){const a=r?.provenance,o=Pu(r,s||void 0),l=t.tools.map(_=>{let w=_.name,S=_.detail,T="";if(_.kind==="llm"){const A=a?.llm==="fake"||a?.llm_mode==="fake",v=typeof a?.llm=="string"?a.llm:"",b=v&&v!=="fake"&&v.split("/").filter(Boolean).at(-1)||"";A?(w=_.fakeName||_.name,S=_.fakeDetail||_.detail,T=_.fakeSuffix||""):b?(w=a?.llm_mode==="tinker"&&_.tinkerName||_.name,S=(a?.llm_mode==="tinker"&&_.tinkerDetail||_.detail).replace(/\{model\}/g,/kimi/i.test(v)?"Kimi":b)):(S=_.unverifiedDetail||_.detail,T=_.unknownSuffix||"")}else if(_.kind==="exa"){const A=a?.exa;T=A==="off"?_.offSuffix||"":A==="live"||A==="on"?"":_.unknownSuffix||""}else _.kind==="memory"&&(T=a?.memory_backend==="pastdev"?"":a?.memory_backend==="local"?_.localSuffix||"":a?.memory_backend==="off"?_.offSuffix||"":_.unknownSuffix||"");return`<li><b>${n(w)}</b> ${n(S)}${T?` <span class="intro-provenance-note">${n(T)}</span>`:""}</li>`}).join(""),c=`<div class="provenance-badge intro-provenance" data-tone="${o.tone}" role="status" aria-label="${n(o.label)}"><span class="provenance-badge-label">${n(o.label)}</span></div>`,u=e.citations.slice(0,12).map(_=>`<li><span>${n(_.study)}</span> ${_.sourceId?`<button class="chip" data-source="${n(_.sourceId)}">${n(t.labels.source)} ${n(_.title||_.url)}</button>`:`${/^https?:\/\//i.test(_.url)?`<a href="${n(_.url)}" target="_blank" rel="noopener noreferrer">${n(_.url)}</a>`:`<code>${n(_.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join(""),f=(_,w)=>_.replace(/\{([^}]+)\}/g,(S,T)=>String(w[T]??"")),d=i.studies?`<p>${n(f(t.results.countLine,{N:i.registered,M:i.confirmed,K:i.underCurrentRules}))}</p>`:`<p>${n(t.results.noStudies)}</p>`,h=i.isIgnobel&&i.studies?`<p class="intro-result-line">${n(f(t.results.factualLine,{N:i.registered,R:i.ran,C:i.confirmed,K:i.underCurrentRules,committeeSuffix:i.preCommittee?t.results.noCommitteeSuffix:""}))}</p>`:"",g=i.isIgnobel&&!i.awards.length?`<p class="intro-prize-disclaimer">${n(t.results.noPrizeDisclaimer)}</p>`:"",x=i.isIgnobel?i.awards.length?`<p>${n(f(t.results.awardCount,{N:i.awards.length}))}</p><ul>${i.awards.map(_=>`<li>${n(_==="Award issued"?t.results.awardFallback:_)}</li>`).join("")}</ul>`:`<p>${n(t.results.noAwards)}${r&&Cu(r,s)?n(t.results.creditErrorSuffix):""}</p>`:"",m=`<p class="track3-note"><a href="${n(t.results.memoryComparisonUrl)}" target="_blank" rel="noopener noreferrer">${n(t.results.memoryComparisonLine)}</a></p>`,p=`<p class="track3-note">${n(t.results.bixbenchLine)}</p>`;return`<div class="intro-card">${c}<h1><span class="satire-badge">Satire</span> ${n(t.replay.title)}</h1>${g}<p class="intro-subline">${n(t.replay.subline)}</p>${h}<button id="intro-start" class="intro-start">${n(t.replay.button)}</button><a id="intro-results-link" class="intro-results-button" href="#intro-real-results">${n(t.replay.resultsButton)}</a><a id="intro-qualifier" class="intro-qualifier" href="#intro-real-results">${n(t.replay.qualifier)}</a>
<details id="intro-about" class="intro-about"><summary>${n(t.sections.about)}</summary><div class="intro-sections"><details class="intro-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.title)} · ${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details>
<details class="intro-section"><summary>${n(t.sections.tools)}</summary><ul class="intro-tools">${l}</ul></details>
<details class="intro-section"><summary>${n(t.sections.authors)}</summary><p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details>
<details class="intro-section"><summary>${n(t.sections.boredom)}</summary><h2>${n(t.boredom.title)}</h2>${t.boredom.paragraphs.map(_=>`<p>${n(_)}</p>`).join("")}<p class="muted">${n(t.boredom.source)}</p></details>
<details class="intro-section intro-trail"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${u?`<ul class="intro-cites">${u}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details></div></details>
<details id="intro-real-results" class="intro-real-results" hidden><summary>${n(t.sections.results)}</summary>${d}${x}<p class="track3-note">${n(t.results.track3Line)}</p>${m}${p}${i.proxyNote?`<p><b>${n(t.results.proxyNote)}:</b> ${n(i.proxyNote)}</p>`:`<p class="muted">${n(t.results.noProxy)}</p>`}</details></div>`}const HA={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Built in one weekend at the SF AI Research Hack (Nov 14–15, hosted by Iterate): an artificial scientist swarm that notices when it is bored and changes approach."},GA=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],VA={placeholder:!0,names:["[AUTHORS — names to come]"]},WA={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},XA={title:"This year the Ig Nobel research prize was discovered early by a phenomenal breakthrough in artificial scientist swarms.",subline:"The secret: making AI less boring.",button:"Watch the swarm",qualifier:"tongue-in-cheek headline",resultsButton:"See the real results"},ZA={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa",results:"The real results"},qA={source:"Exa result:",missingExa:"results not kept as source cards",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},YA={studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"Prizes awarded: {N}",awardFallback:"Award issued",creditErrorSuffix:" (Tinker credit ran out)",proxyNote:"Metric / proxy",noStudies:"No Ig Nobel study registrations appear in this recording.",noAwards:"No prizes awarded yet — this run stopped before committee judging.",noProxy:"No proxy note is present in this recording.",factualLine:"Real result so far: {C} of {R} tests that ran passed their preregistered gates; {K} also pass the |ρ| ≥ 0.1 floor added after the run ({N} registered){committeeSuffix}",noPrizeDisclaimer:"No prize has been awarded. The swarm found known relationships in public teaching datasets, not discoveries.",noCommitteeSuffix:"; no committee score yet",countLine:"{N} registered · {M} confirmed ({K} under the post-hoc |ρ| ≥ 0.1 floor)",track3Line:"Track 3 check (exploratory, 3 runs each): preregistered primary (guard2, stopped early, guarded) B 0.26 > S 0.24 > A 0.11; complete strict-guard set, picked after it finished, S 0.30 > A 0.09 > B 0.06. B leads S on mean only because S scored 0 on run 3001, where the guard rejected its candidate for the known integer-loop-bound false positive (unguarded 0.333); S beats B on the other two runs.",memoryComparisonLine:"past.dev vs local memory on 419 real memories: hit@1 0.65 vs 0.30, 562 ms vs 15 ms (hand-written probes)",memoryComparisonUrl:"https://github.com/arii/caffeinated/blob/agent/devin/overnight/experiments/memory-comparison/README.md",bixbenchLine:"BixBench held-out: baseline 1/7 → swarm best 6/7 (one run; 95% CI 0.49–0.97)"},fm={event:HA,tools:GA,authors:VA,boredom:WA,replay:XA,sections:ZA,labels:qA,results:YA},KA="How it's judged",jA="Committee data exists, but no prizes were issued in this recording.",JA=["Preregister the study before looking at the data.","Use a real, public dataset.","Pass the gates: |ρ| ≥ 0.1 and p < 0.005.","Pass split-half consistency: both halves p < 0.05 and in the same direction.","Check prior work with Exa.","Two independent non-Kimi judges (gpt-oss-120b and Qwen3.5-397B) score each study; the final score is the lower judge.","Reject any study that targets a group of people."],Gl={title:KA,committeePending:jA,steps:JA},qf={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function QA(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function Yf(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Kf={B:"BIO",C:"CHEM",P:"PHYSICS"};function e1(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=QA(t.name);if(qf[n])return{initial:r,familyKey:"S",familyLabel:qf[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:Yf(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const c=Yf(a);return{initial:r,familyKey:c,familyLabel:Kf[c]||a.toUpperCase(),staff:!1,color:i}}const l=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:l,familyLabel:Kf[l]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const t1={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function hm(t){return t?t1[t]||t.replaceAll("_"," ").toLowerCase():""}function pm(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const n1={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function mm(t){return n1[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function i1(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function gm(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!i1(e)}function r1(t,e,n=110){const i=[mm(t.type),e].filter(Boolean).join(" · ");if(!gm(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i} — ${r.length>n?r.slice(0,n-1)+"…":r}`}function s1(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const Ns=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function _m(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=Ns(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=Ns(a.mechanism)||i.mechanism,i.method=Ns(a.method)||i.method),i.role=Ns(s.role)||i.role}else r.type==="study.registered"&&(i.field=Ns(s.field)||i.field)}return i}function vm(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const jf={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function a1(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:jf[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:jf[i]?.[1]||"",names:r}))}function o1(t,e){return e-t<=1}function l1(t){return t.live?t.totalTicks:0}function c1(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function xm(t,e,n){return!!t?.live&&n&&o1(e,t.totalTicks)}function ym(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function u1(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(xm(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=ym(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function ei(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function d1(t,e,n,i=!0){const r=l=>typeof l=="number"&&Number.isFinite(l)?l:null,s=t.filter(l=>(l.tick??0)<=n).map(l=>({id:l.id,tick:l.tick??0,raw:r(l.value),value:i?r(l.value):null,outcome:ei(l.status,l.kind),agent:l.agent,description:l.description,status:l.status})),a=[],o=[];for(const l of e){if(l.tick>n||l.tick<0)continue;const c=l.snapshot.value;if(c==null||!Number.isFinite(c))continue;const u=a.at(-1);(!u||u[1]!==c)&&(u&&o.push([l.tick,c]),a.push([l.tick,c]))}return{points:s,best:a,newBest:o}}const qn={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},Ds=t=>String(Number(t.toPrecision(4)));function f1(t,e,n,i){const r=[...t.points.map(b=>b.value),...t.best.map(b=>b[1])].filter(b=>b!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,l=52,c=560,u=16,f=132,d=150,h=Math.max(1,n),g=a===s?s-o/2:s,x=a===s?o:a-s,m=b=>l+Math.min(1,b/h)*(c-l),p=b=>f-(b-g)/x*(f-u),_=t.best.map(([b,k],N)=>`${N?"H":"M"}${m(b).toFixed(1)} ${N?`V${p(k).toFixed(1)}`:p(k).toFixed(1)}`).join(""),w=t.best.length?`<path class="best-line" d="${_}H${m(h).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",S=b=>{const k=m(b.tick).toFixed(1),N=`${i(b.agent)} · ${i(b.status)} · ${b.raw==null?"no score":Ds(b.raw)} · ${i(b.description)}`,O=`<title>${N}</title>`,B=b.id?` data-experiment="${i(b.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${N}"`:"";if(b.value==null&&b.outcome!=="crashed")return`<circle class="pt ${b.outcome}"${B} cx="${k}" cy="${d}" r="${b.outcome==="discarded"?3.5:4.5}" fill="${b.outcome==="discarded"?"none":qn[b.outcome]}" stroke="${qn[b.outcome]}" stroke-width="1.6">${O}</circle>`;if(b.value==null)return`<g class="pt crashed"${B}>${O}<path d="M${+k-4} ${d-4}l8 8m0 -8l-8 8" stroke="${qn.crashed}" stroke-width="2"/></g>`;const Z=p(b.value).toFixed(1);return b.outcome==="crashed"?`<g class="pt crashed"${B}>${O}<path d="M${+k-4} ${+Z-4}l8 8m0 -8l-8 8" stroke="${qn.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${b.outcome}"${B} cx="${k}" cy="${Z}" r="${b.outcome==="discarded"?3.5:4.5}" fill="${b.outcome==="discarded"?"none":qn[b.outcome]}" stroke="${qn[b.outcome]}" stroke-width="1.6">${O}</circle>`},T=t.newBest.map(([b,k])=>`<path class="new-best" d="M${m(b).toFixed(1)} ${(p(k)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${Ds(k)} at tick ${b}</title></path>`).join(""),A=e.direction==="maximize"?"↑ better":"↓ better",v=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${l} ${u-4}V${f+4}H${c}" fill="none" stroke="#79918b"/><text x="${l-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${Ds(a)}</text><text x="${l-6}" y="${f}" text-anchor="end" fill="#b9cac2" font-size="9">${Ds(s)}</text><text x="${l-6}" y="${d+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(b=>b.value==null&&b.raw!=null)?"other measure":"no score"}</text><path d="M${l} ${d}H${c}" stroke="#ffffff14" stroke-dasharray="3 4"/>${w}${t.points.map(S).join("")}${T}${v?`<text x="${c}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${Ds(v[1])}</text>`:""}<text x="${l}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${A}</text><g font-size="9" fill="#b9cac2" transform="translate(${l} 186)"><circle cx="0" cy="-3" r="4" fill="${qn.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${qn.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${qn.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${qn.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}function Sm(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function bm(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function Zc(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function h1(t,e,n){const i=Sm(t),r=[],s=new Map,a=new Set,o=new Set,l=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let c=0;const u=new Set,f=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),d=.25,h=d*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=f;g+=d){for(;c<l.length&&l[c].tick<=g;){const m=l[c++];if(m.type==="experiment.started"){m.agentId&&(a.add(m.agentId),o.add(m.agentId));continue}if(m.type==="experiment.finished"){m.agentId&&o.delete(m.agentId);continue}for(const p of[m.agentId,...m.payload?.to_agent_ids||[],m.refs?.to_agent_id].filter(Boolean)){u.add(p);const _=s.get(p);_&&!_.table&&(_.pending=!0)}}const x=_a(t.frames,g)?.snapshot.agents||[];bm(x,g,i).forEach(m=>{const p=x.findIndex(S=>S.id===m.id);let _=s.get(m.id);if(!_){_={p:{...Nc(p),atTable:u.has(m.id)},path:[],leg:0,dwell:u.has(m.id)?2.5:0,pending:!1,table:u.has(m.id),lab:!1},s.set(m.id,_);return}if(a.delete(m.id)&&(_.lab=!0,_.table=!1,_.dwell=0,_.p.atTable=!1,_.p.atLab=!1,_.path=po(_.p,Dc(Zc({...m,activity:"experimenting"}),p),e,n)),_.lab&&!_.path.length&&!_.p.atLab&&(_.p.atLab=!0,_.dwell=4),_.dwell>0){_.dwell=Math.max(0,_.dwell-h),_.p.atTable=_.table;return}if(_.lab&&_.p.atLab){if(o.has(m.id))return;_.lab=!1,_.p.atLab=!1}if(_.p.atTable=!1,!_.path.length){_.table&&(_.table=!1,_.pending=!1,_.leg=0);const T=[Dc(Zc({...m,activity:"experimenting"}),p),{x:2.7+p%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(_.leg>=T.length&&_.pending)_.table=!0,_.path=po(_.p,Nc(p),e,n);else{const A=T[_.leg%T.length];_.leg++,_.path=po(_.p,A,e,n)}}let w=h*2.1;for(;_.path.length&&w>0;){const S=_.path[0],T=Math.hypot(S.x-_.p.x,S.z-_.p.z);T<=w?(_.p.x=S.x,_.p.z=S.z,w-=T,_.path.shift()):(_.p.x+=(S.x-_.p.x)/T*w,_.p.z+=(S.z-_.p.z)/T*w,w=0)}!_.path.length&&_.lab&&(_.p.atLab=!0,_.dwell=4),!_.path.length&&_.table&&(_.dwell=3,_.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([m,p])=>[m,{...p.p}]))})}return r}function p1(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function m1(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const l=o.payload?.text||o.message||"";if(!l.trim())continue;const c=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:p1(i(l)),peers:c.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const nt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",Vl=t=>typeof t=="number"&&Number.isFinite(t)?t:null,ts=t=>String(Number(t.toPrecision(4))),on=(t,e=140)=>t.length>e?t.slice(0,e-1)+"…":t,Mm=t=>Array.isArray(t)?t.map(e=>nt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function nl(t,e){const n=t.payload||{},i=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const r=nt(n.why)||nt(n.reason);return n.accepted===!0?`Critic approved${r?`: ${on(r)}`:": the rerun reproduced the score"}`:n.accepted===!1?`Critic rejected${r?`: ${on(r)}`:": score didn't reproduce on rerun"}`:nt(n.text)}case"gate.checked":{const r=Mm(n.reasons);if(n.pass===!1)return`Novelty gate blocked: ${r.length?on(r.join("; ")):"too close to an earlier idea"}`;const s=Array.isArray(n.prior_art)?n.prior_art.length:0;return n.pass===!0?`Novelty gate passed: the idea is new enough${s?` (checked against ${s} prior source${s===1?"":"s"})`:""}`:nt(n.text)}case"experiment.started":return`Testing: ${on(nt(n.description)||nt(n.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const r=Vl(n.metric_value),s=nt(n.status).toLowerCase(),a=r==null?"":` ${i} ${ts(r)}`,o=e.best==null?"":` (best ${ts(e.best)})`;return/crash|error|fail|timeout/.test(s)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(s)&&!/not_/.test(s)?`Kept:${a||" result"} beats the previous best`:r==null&&s?`${/reject|invalid|block/.test(s)?"Rejected before scoring":"Not scored"}${nt(n.text)?`: ${on(nt(n.text))}`:""}`:s?`Discarded:${a} didn't beat the best${o}`:nt(n.text)}case"agent.assigned":{const r=nt(n.role);return r?`Conductor assigned ${r}${nt(n.rationale)?`: ${on(nt(n.rationale))}`:""}`:nt(n.text)}case"round.started":{const r=qi(nt(n.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${r?` · ${r}`:""}${nt(n.rationale)?`: ${on(nt(n.rationale))}`:""}`}case"boredom.measured":{const r=Vl(n.B),s=qi(nt(n.regime)).label;return r==null?nt(n.text):`Boredom ${Math.round(r*100)}%${s?` · ${s}`:""}${r>.6?": repeating itself, ready to switch approach":r<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${on(nt(n.text))}`;case"question.asked":{const r=nt(n.kind);return`${r==="recall"?"Recalling memory":r==="search"||r==="exa"?"Searching the literature":"Asking"}: ${on(nt(n.text))}`}case"observation.received":return`Read: ${on(nt(n.text)||nt(n.summary))}`;case"message.sent":{const r=nt(n.to_agent_id)||nt(t.refs?.to_agent_id);return`${r?`To ${e.name(r)}`:"Message"}: ${on(nt(n.text))}`}case"study.registered":return`Pre-registered: ${on(nt(n.question)||nt(n.text))}`;case"study.result":return on(nt(n.text)||nt(n.headline));case"discovery.made":{const r=Vl(n.metric_value);return`New best${r==null?"":`: ${i} ${ts(r)}`}${nt(n.title)?` · ${on(nt(n.title),80)}`:""}`}default:return""}}function Nu(t,e,n,i,r){const s=(t?.events||[]).filter(h=>h.tick<=i&&h.agentId===e),a=s.filter(h=>h.type==="experiment.started"&&h.refs?.experiment_id).at(-1),o=s.filter(h=>h.type==="gate.checked").at(-1),l=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,c=a&&!l?ca(t,String(a.refs.experiment_id),i):null,u=c&&(t?.events||[]).filter(h=>h.tick<=i&&h.type==="verdict.issued"&&h.refs?.experiment_id===c.id).at(-1),d=[...s,...u&&u.agentId!==e?[u]:[]].sort((h,g)=>h.tick-g.tick).map(h=>({tick:h.tick,why:nl(h,r)})).filter(h=>h.why).slice(-6).reverse();return{activity:hm(n),latest:s.at(-1)||null,blocked:l,experiment:c,sources:Au(t,i).filter(h=>h.agentId===e).slice(-3).reverse(),feed:d}}function Em(t,e,n){const i=e.esc,r=t.experiment,s=(g,x)=>x?`<div class="now-row"><b>${g}</b><div>${x}</div></div>`:"",a=t.latest?`${i(t.activity||"working")} · <span class="muted">${i(nl(t.latest,e)||t.latest.type)}</span>`:i(t.activity||"Not active yet"),o=r?`${i(r.idea?.text||r.description||"")}${r.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${r.idea.predictedDelta>0?"+":""}${ts(r.idea.predictedDelta)}</span>`:""}${r.descriptor?.mechanism?` <span class="pill">${i(String(r.descriptor.mechanism).replaceAll("_"," "))}${r.descriptor.method?` / ${i(String(r.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",l=t.sources.map(g=>`<button class="chip" data-source="${i(g.id)}">${i(on(g.title,60))}</button>`).join(""),c=t.blocked?`<span class="pill bad">blocked</span> ${i(Mm(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:r?.gate?`<span class="pill ${r.gate.pass?"ok":"bad"}">${r.gate.pass?"passed":r.gate.pass===!1?"blocked":"checked"}</span> ${i(r.gate.reasons.length?r.gate.reasons.join("; "):r.gate.pass?"The idea is new enough to try.":"")}`:r?'<span class="muted">Not checked yet</span>':"",u=r?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(r.verdict.verdict||"")&&!/not_/i.test(r.verdict.verdict||"")?"ok":"bad"}">${i(r.verdict.verdict||"verdict")}</span> ${i(r.verdict.why||"")}`:r?.result?'<span class="muted">Waiting for the critic</span>':"",f=n?.name.replaceAll("_"," ")||"score",d=n?.direction==="maximize"?"higher":"lower",h=r?.result?`<span class="pill">${i(r.result.status||"done")}</span> ${r.result.metric==null?"":`${i(f)} ${ts(r.result.metric)}`}${e.best==null?"":` · best so far ${ts(e.best)} (${d} is better)`}`:r?'<span class="muted">Still running</span>':"";return`<div class="now-card">${s("Doing",a)}${s("Idea",o)}${s("Read",l)}${s("Gate",c)}${s("Score",h)}${s("Critic",u)}${r?`<button class="inspect-link" data-experiment="${i(r.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${t.feed.map(g=>`<li><span>${g.tick}</span>${i(g.why)}</li>`).join("")}</ol>`:""}</div>`}const g1=t=>t&&/^https?:\/\//i.test(t)?t:null,vo=(t,e,n)=>g1(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),xo=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,wm=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,Us=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function _1(t,e,n){const i=e.esc,r=h=>`<p class="muted">${h}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${mA(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([h,g])=>`${h}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${xo(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(h=>`<li>${i(h)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),l=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"—")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),c=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),f=`${u.length?`<div class="artifact-links">${u.map(([h,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(h)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${Us("Idea",s+a,!!(t.idea||t.description))}${Us("Gate",o,!!t.gate)}${Us("Score",l,!!t.result)}${Us("Critic",c,!!t.verdict)}${Us("Artifacts",f,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${Tm(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(h=>`<li><span>t${h.tick}</span> <b>${i(h.type)}</b> ${i(h.text)}</li>`).join("")}</ul></details>`}function v1(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${vo(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(Rm(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(Cm(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>wm(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const ns=t=>t==null?"—":t.toFixed(3),x1=t=>`rho ${ns(t.rho)}, p ${zo(t.p)}, n ${t.n??"—"}`;function y1(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${ns(t)}, observed rho ${ns(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function S1(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function Tm(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(f,d)=>f?`${n(f)}${d?` = <b>${n(d)}</b>`:""}`:"—",o=(r?.confirmed?dm({...r,direction:t.direction||void 0},um(e.judging)).failures:[]).map(f=>`<span class="badge current-rule-failure">Fails current ${n(f)} rule</span>`).join(""),l=r?.halves.length?`<div class="halves">${r.halves.map((f,d)=>`<span>Half ${d+1}: rho ${ns(f.rho)}, p ${zo(f.p)}, n ${f.n??"—"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',c=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(f=>`<li>${x1(f)} ${xo(f.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",u=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([f,d])=>`<li>Judge ${n(f)} · laugh ${d.laugh??"—"} / think ${d.think??"—"}${d.reason?`: ${n(d.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(f=>`<li>${vo(e,f.url,f.title||f.url)}${f.snippet?`<p class="muted">${n(f.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(f=>`<li>${n(f)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head"><div class="study-badges">${S1(t,e)}${o}</div><span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?vo(e,i.url,Rm(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"—")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${ns(t.predictedRho)} → observed <b>${ns(r?.rho??null)}</b>${r?` · p ${zo(r.p)} · n ${r.n??"—"}`:""}${y1(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?l:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${xo(r.significant,"significant","not significant")}, ${xo(r.replicated,"split-half consistent","not split-half consistent")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${c}${u}<div class="chips">${t.experimentId?wm(e,t.experimentId):""}${t.citations.map(f=>`<span class="chip">${vo(e,f,Cm(f.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function b1(t,e){return t.length?`<div class="card-grid">${t.map(n=>Tm(n,e)).join("")}</div>`:""}function Am(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function Rm(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function Cm(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function M1(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const E1={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function w1(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=vm(_m(r,e.id,i),e.family||""),a={name:t.agentName||(f=>f===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=Nu(n,e.id,e.activity||e.state,i,a),l=sp(e.boredom).level,c=o.experiment,u=o.blocked?nl(o.blocked,a):"";return{name:e.name,role:s||pm(e.role)||"Scientist",mood:{level:l,label:E1[l]||null,boredomPct:e.boredom==null?null:Zi(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:c?.idea?.text||c?.description||null,predicted:u?null:c?.idea?.predictedDelta??null}}function T1(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(vr(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const yo=t=>typeof t=="number"&&Number.isFinite(t),Jf=t=>Math.max(0,Math.min(1,t)),Pm="Zero loss passed the preregistered gates; tested counts finite candidate results.";function A1(t,e,n){const i=s=>s.agent===e||s.agent===n||s.agentId===e,r=t.filter(s=>i(s)&&ei(s.status,s.kind)!=="baseline"&&yo(s.value));return{confirmed:r.filter(s=>s.value===0).length,tested:r.length}}function R1(t){return`${t.confirmed} gate-confirmed / ${t.tested} tested`}function C1(t,e,n){const i=e.filter(r=>r.tick<=n);if(t==="conductor"){const r=i.filter(a=>a.type==="round.started").reduce((a,o)=>!a||o.tick>=a.tick?o:a,void 0),s=r?.payload?.regime;return typeof s=="string"?`Conductor · assigning ${qi(s).label}`:"Conductor · awaiting assignment"}if(t==="critic"){const r=i.filter(s=>s.type==="verdict.issued").length;return`Critic · ${r} review${r===1?"":"s"}`}return""}function P1(t,e,n){if(t!=="conductor")return"";const i=e.filter(s=>s.tick<=n&&s.type==="round.started").reduce((s,a)=>!s||a.tick>=s.tick?a:s,void 0),r=i?.payload?.regime;return typeof r=="string"?qi(r).description:""}function I1(t){return t==null?"best —":`best ${vr(t)}`}function L1(t,e,n,i,r,s){const a=x=>x.agent===e||x.agent===n||x.agentId===e,o=t.filter(x=>a(x)&&ei(x.status,x.kind)!=="baseline").slice().sort((x,m)=>(x.tick??0)-(m.tick??0)),l=o.map(x=>x.value).filter(yo),c=i.name==="replicated_findings"?"maximize":i.direction,u=l.length?c==="maximize"?Math.max(...l):Math.min(...l):null,f=t.filter(x=>ei(x.status,x.kind)!=="baseline").map(x=>x.value).filter(yo),d=f.length?c==="maximize"?Math.min(...f):Math.max(...f):null;let h=null;if(u!=null&&r!=null){if(u===r)h=1;else if(s!=null){const x=r-s;h=x===0?0:Jf((u-s)/x)}else if(d!=null){const x=Math.abs(r-d);h=x===0?1:Jf(c==="maximize"?(u-d)/x:(d-u)/x)}}const g={kept:0,discarded:0,crashed:0};for(const x of o){const m=ei(x.status,x.kind);m!=="baseline"&&g[m]++}return{best:u,progress:h,...g,spark:o.map(x=>x.value).filter(yo).slice(-12)}}function N1(t,e,n=1.96){if(!Number.isFinite(t)||!Number.isFinite(e)||e<=0||t<0||t>e)return null;const i=t/e,r=n*n,s=1+r/e,a=(i+r/(2*e))/s,o=n*Math.sqrt((i*(1-i)+r/(4*e))/e)/s;return{low:Math.max(0,a-o),high:Math.min(1,a+o)}}const gi=t=>typeof t=="number"&&Number.isFinite(t),Im=t=>typeof t=="string"&&t?t.slice(0,7):null;function D1(t,e=String){return t==null?"":t===0?"no change":`${t>0?"improved by":"worsened by"} ${e(Math.abs(t))}`}function Qf(t,e){const n=gi(t?.score)?t.score:null,i=n==null?null:n*e,r=i!=null&&Math.abs(i-Math.round(i))<=1e-6?Math.round(i):null;return{score:n,k:r,fraction:r==null?null:`${r}/${e}`,wilson:r==null?null:N1(r,e),loss:gi(t?.loss)?t.loss:null,commit:Im(t?.commit)}}function ua(t,e){return t?t.events.some(n=>n.type==="run.finished"&&n.tick<=e)?!0:["finished","completed","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks:!1}function U1(t,e){if(!t)return null;const{manifest:n}=t,i=_a(t.frames,e)?.snapshot,r=i?.results||[],s=n.metric?.direction==="maximize"||i?.metric.direction==="maximize"?"maximize":"minimize",a=n.metric?.label||i?.metric.name||n.metric?.name||"result",o=r.find(_=>ei(String(_.status||""),String(_.kind||""))==="baseline"),l=r.filter(_=>ei(String(_.status||""),String(_.kind||""))==="kept"),c=l.length?l.reduce((_,w)=>s==="maximize"?gi(w.value)&&(!gi(_.value)||w.value>_.value)?w:_:gi(w.value)&&(!gi(_.value)||w.value<_.value)?w:_):o,u=gi(o?.value)?o.value:null,f=gi(c?.value)?c.value:null,d=u==null||f==null?null:s==="maximize"?f-u:u-f,h={kept:0,discarded:0,crashed:0};for(const _ of r){const w=ei(String(_.status||""),String(_.kind||""));w!=="baseline"&&h[w]++}const g=xa(n,t)||"",x=n.held_out_test,m=x&&gi(x.n_items)?x.n_items:0,p=x&&m>0?{n:m,baseline:Qf(x.baseline,m),best:Qf(x.best,m),proxyNote:Pr(n,t)?g:x.proxy_note||g,referenceNote:x.reference_note||n.reference_note||""}:null;return{status:n.status==="stopped"?"stopped":"finished",metric:a,direction:s,baseline:u,best:f,delta:d,winner:l.length&&c?{commit:Im(c.commit),description:String(c.description||""),agent:String(c.agent||"")}:null,totals:h,heldOut:p,proxyNote:p?.proxyNote||g,referenceNote:p?.referenceNote||n.reference_note||""}}const _n=t=>t&&typeof t=="object"?t:{},So=t=>typeof t=="number"&&Number.isFinite(t),il=t=>Array.isArray(t)?t.map(_n):t&&typeof t=="object"?Object.values(t).map(_n):[],eh=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],vn=t=>typeof t=="string"?t:"",Qt=t=>So(t)?t:null,Gi=t=>vn(t.id||t.study_id||t.studyId),Du=t=>vn(t.refs?.study_id||t.refs?.studyId||t.payload?.study_id||t.payload?.studyId),O1=["score","scores","judges","verdicts"],Lm=t=>Object.keys(t).length>0,Nm=t=>O1.some(e=>t[e]!=null);function th(t){const e=_n(t);return(Array.isArray(t)?t.map(_n):Object.entries(e).map(([i,r])=>({id:i,..._n(r)}))).map(i=>({id:vn(i.id)||"judge",model:vn(i.model),laugh:Qt(i.laugh),think:Qt(i.think),reason:vn(i.reason)}))}const F1=["award.issued","study.result","study.replicated","study.completed"];function k1(t){const e=_n(t.payload),n=[e.committee,e.award].map(_n).find(Lm);return n||(Nm(e)?e:null)}function z1(t,e,n,i){const r=e.filter(m=>F1.includes(m.type)&&Du(m)===Gi(t)).map(m=>({event:m,payload:k1(m)})).filter(m=>m.payload!==null),s=r.filter(m=>m.event.tick<=n).sort((m,p)=>m.event.tick-p.event.tick).at(-1);if(!s&&(r.length||!i))return null;const a=_n(t.graded),o=[t.committee,a.committee,_n(t.result).committee].map(_n).find(Lm),l=_n(s?.payload??o),c=eh(a.scores).map(m=>{const p=_n(m);return Qt(p.score??p.value??m)}).filter(So);if(!Object.keys(l).length&&Nm(a)&&Object.assign(l,{available:a.available,rejected:a.rejected,scores:a.scores,verdicts:a.verdicts,score:c.length?Math.min(...c):a.score,prior_work:a.prior_work}),!Object.keys(l).length)return null;if(l.available===!1)return{score:null,rejected:l.rejected===!0,judges:th(l.judges??l.verdicts),priorWork:null};const u=th(l.judges??l.verdicts??l.per_judge),f=u.map(m=>m.laugh==null||m.think==null?null:Math.min(m.laugh,m.think)/10).filter(So),d=eh(l.scores).map(m=>{const p=_n(m);return Qt(p.score??p.value??m)}).filter(So),h=Qt(l.score)??(d.length?Math.min(...d):null)??(f.length?Math.min(...f):null),g=il(l.prior_work??l.priorWork),x=g.map(m=>({url:vn(m.url),title:vn(m.title)||void 0})).filter(m=>m.url);return{score:h,rejected:l.rejected===!0,judges:u,priorWork:g.length||l.prior_work_available===!0?{count:g.length,links:x}:null}}function Os(t,e){const n=Gi(t),i=e.filter(a=>Du(a)===n),r=i.filter(a=>a.type==="study.registered").sort((a,o)=>a.tick-o.tick)[0],s=i.filter(a=>["study.result","study.replicated","study.completed"].includes(a.type)).sort((a,o)=>a.tick-o.tick)[0];return r?.tick??Qt(t.registered_tick)??Qt(t.tick)??s?.tick??0}function B1(t,e){return e.filter(n=>Du(n)===Gi(t)&&["study.result","study.replicated","study.completed"].includes(n.type)).sort((n,i)=>n.tick-i.tick)[0]?.tick??null}const $1=t=>{const e=_n(t.result),n=vn(t.status||e.status).toLowerCase();return t.confirmed===!0||t.replicated===!0||e.confirmed===!0||e.replicated===!0||n==="confirmed"||n==="replicated"||il(t.replications).some(i=>i.confirmed===!0||i.replicated===!0||["confirmed","replicated"].includes(vn(i.status).toLowerCase()))};function H1(t,e,n,i){const r=il(t).filter(c=>Os(c,e)<=n),s=r.filter(c=>{const u=B1(c,e);return u!=null&&u<=n&&$1(c)}),a=s.map(c=>({study:c,committee:z1(c,e,n,i)})).filter(c=>c.study.rejected!==!0&&!c.committee?.rejected),o=a.filter(c=>c.committee?.score!=null);if(o.length){const c=o.sort((u,f)=>f.committee.score-u.committee.score||(Qt(u.study.p)??1/0)-(Qt(f.study.p)??1/0)||Os(u.study,e)-Os(f.study,e)||Gi(u.study).localeCompare(Gi(f.study))).slice(0,3);return{status:"ranked",tested:r.length,confirmed:s.length,entries:c.map((u,f)=>nh(u.study,u.committee,f+1))}}const l=a.sort((c,u)=>Os(c.study,e)-Os(u.study,e)||Gi(c.study).localeCompare(Gi(u.study)));return{status:l.length?"awaiting":"none",tested:r.length,confirmed:s.length,entries:l.map(c=>nh(c.study,c.committee,null))}}function nh(t,e,n){const i=il(t.halves);return{studyId:Gi(t),headline:vn(t.headline)||vn(t.question),hypothesis:vn(t.hypothesis)||vn(t.mechanism),agentId:vn(t.agent_id),tick:Qt(t.tick)??0,p:Qt(t.p),rho:Qt(t.rho),n:Qt(t.n),halves:i.map(r=>({rho:Qt(r.rho),n:Qt(r.n),p:Qt(r.p)})),rank:n,score:e?.score??null,unscored:e?.score==null,committee:e}}function G1(t,e){const n=xa(t.manifest,t);return n?`<p class="metric-description">${e(n)}</p>`:""}const In=t=>typeof t=="string"?t:"",Dm=(t,e)=>t.events.filter(n=>n.tick<=e);function V1(t,e=6){const n=new Map;for(const r of t){const s=n.get(r.round)||[];s.push(r),n.set(r.round,s)}const i=Math.max(1,Math.floor(e));return[...n].sort(([r],[s])=>r-s).map(([r,s])=>(s.sort((a,o)=>a.tick-o.tick),{round:r,visible:s.slice(0,i),hidden:s.slice(i)}))}function W1(t,e,n){if(!t.length)return 0;let i=n==null?-1:t.findIndex(o=>o.round===n);i<0&&(i=t.findIndex(o=>e>=o.startTick&&e<=o.endTick)),i<0&&(i=e<t[0].startTick?0:t.length-1);const r=t[i],s=r.endTick-r.startTick,a=s>0?(e-r.startTick)/s:e>=r.endTick?1:0;return i+Math.max(0,Math.min(1,a))}function X1(t){if(t.type==="hypothesis.proposed")return"idea";if(t.type==="llm.called"){const e=In(t.payload?.role).toLowerCase();return e.includes("scout")||e.includes("search")?"scout":e.includes("memory")?"memory":"idea"}return t.type==="verdict.issued"?t.payload?.vetoed===!0?"veto":"critic":t.type==="study.replicated"?"critic":t.type==="question.asked"&&t.payload?.kind==="search"||t.type==="agent.assigned"&&t.payload?.scout===!0?"scout":t.type==="question.asked"&&t.payload?.kind==="recall"||t.type==="observation.received"&&t.payload?.kind==="memories"?"memory":t.type==="boredom.measured"||t.type==="round.started"&&["BOREDOM_SNAP","PARADIGM_BREAKOUT"].includes(In(t.payload?.regime))?"boredom":t.type==="experiment.finished"?t.payload?.status==="keep"?"keep":"evaluation":t.type==="discovery.made"?"keep":t.type==="gate.checked"&&(t.payload?.pass??t.payload?.passed)===!1?"gate":t.type==="experiment.started"&&t.payload?.kind!=="baseline"?"idea":null}function Z1(t,e){if(!t)return{rounds:[],lanes:[],roundCloses:[],roundSpans:[]};const n=new Map;let i=0;for(const d of t.events)d.type==="round.started"&&(i=Number(d.round||d.payload?.round)||i+1),n.set(d,Number(d.round||d.payload?.round)||i);const r=Dm(t,e),s=new Map;let a=0;const o=new Map,l=new Set;for(const d of r)d.type==="round.started"&&(a=Number(d.round||d.payload?.round)||a+1,l.add(a)),s.set(d,Number(d.round||d.payload?.round)||a);for(const d of r){const h=X1(d);if(!h)continue;const g=In(d.agentId||d.payload?.agent_id||d.refs?.agent_id);if(!g)continue;const x=s.get(d)||1;l.add(x);const m=t.manifest.agents?.find(S=>S.agent_id===g)?.display_name||g,p=o.get(g)||{id:g,name:m,marks:[]},_=In(d.refs?.event_id)||`${d.type}:${d.tick}`,w=h==="veto"?"Veto":h==="keep"?"New best":h==="gate"?"Gate blocked":h==="scout"?"Search":h==="memory"?"Memory recall":h==="boredom"?"Boredom shift":h==="critic"?"Critic review":h==="idea"?"Idea":"Evaluation";p.marks.push({tick:d.tick,round:x,kind:h,label:w,why:In(d.message||d.payload?.why||d.payload?.reason),eventId:_}),o.set(g,p)}const c=[...l].flatMap(d=>{const h=t.events.filter(p=>p.type==="experiment.finished"&&n.get(p)===d),g=t.events.find(p=>["round.closed","round.finished","round.completed"].includes(p.type)&&n.get(p)===d),x=t.events.find(p=>p.type==="round.started"&&(n.get(p)||0)>d),m=g?.tick??h.at(-1)?.tick??x?.tick;return m!=null&&m<=e?[{round:d,tick:m}]:[]}),u=[...l].sort((d,h)=>d-h),f=u.map((d,h)=>{const g=t.events.find(S=>S.type==="round.started"&&n.get(S)===d),x=t.events.filter(S=>n.get(S)===d),m=g?.tick??x[0]?.tick??0,p=t.events.find(S=>["round.closed","round.finished","round.completed"].includes(S.type)&&n.get(S)===d),_=t.events.filter(S=>S.type==="experiment.finished"&&n.get(S)===d).at(-1),w=u[h+1]==null?void 0:t.events.find(S=>S.type==="round.started"&&n.get(S)===u[h+1]);return{round:d,startTick:m,endTick:p?.tick??_?.tick??w?.tick??t.manifest.totalTicks}});return{rounds:u,lanes:[...o.values()],roundCloses:c,roundSpans:f}}function q1(t,e){if(!t)return{};const n=Dm(t,e);let i=0;if(n.some(g=>["run.finished","run.stopped"].includes(g.type))||["finished","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks)return Object.fromEntries((t.manifest.agents||[]).map(g=>[g.agent_id,"idle"]));for(const g of n)g.type==="round.started"&&(i=Number(g.round||g.payload?.round)||i+1);const s=n.filter(g=>(Number(g.round||g.payload?.round)||i)===i),a=new Set(s.filter(g=>g.type==="agent.assigned").map(g=>In(g.agentId||g.payload?.agent_id)).filter(Boolean)),o=s.filter(g=>["llm.called","hypothesis.proposed"].includes(g.type)&&In(g.agentId||g.payload?.agent_id)),l=s.filter(g=>g.type==="agent.assigned"&&In(g.agentId||g.payload?.agent_id)),c=o.at(-1),u=l.at(-1),f=c&&(!u||c.tick>=u.tick)?In(c.agentId||c.payload?.agent_id):"",d=u&&(!c||u.tick>c.tick)?In(u.agentId||u.payload?.agent_id):"",h={};for(const g of t.manifest.agents||[])h[g.agent_id]="idle";for(const g of a){const x=o.some(p=>In(p.agentId||p.payload?.agent_id)===g),m=s.some(p=>p.type==="experiment.finished"&&In(p.agentId||p.payload?.agent_id)===g);h[g]=g===d?"waiting":g===f&&!m?"active":x||m?"done":"waiting"}if(n.some(g=>["round.closed","round.finished","round.completed"].includes(g.type)&&(Number(g.round||g.payload?.round)||i)===i)||n.some(g=>g.type==="round.started"&&(Number(g.round||g.payload?.round)||i)>i))for(const g of a)h[g]="done";return h}document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target.closest?.("[data-orch-tick]");e&&(t.preventDefault(),e.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});const re=t=>document.getElementById(t),Bo=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),he=t=>Bo(fa(String(t??""))),da=re("console"),It=re("conversation"),Um=re("guide"),xr=re("inspector"),is=re("results-dialog");let qe,At,Wi,oe=null,Ke=null,Om=[],Te=0,Tt=!1,en=!1,Fm=1,yr=null,Uu="",pi="",Lt="",yi=!1,yn=!1,Bi="",si="",ih=0,$o=!1,Ks=!1,rh=0,ti="",Ho=!1,km=!1,io=!1,sh=!1,js=null,En=0,_i=0,$s=!1,ro={x:0,y:0},pr=null,ah,oh,Sr=0,zm=new Map;const Go=kS();function fa(t){return wA(t,zm)}function Bm(){const t=Pu(oe?.manifest,oe||void 0),e=re("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${he(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${he(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}Bm();function Y1(t){zm=new Map(Object.entries(t.manifest.aliasMap||{}))}let $m=new Map,bo=[];const gn=new Set;function Ou(t){return e1(t,oe?.manifest.agents?.find(e=>e.agent_id===t.id))}function Hm(t){const e=Ou(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${he(e.initial)}</span>`}function Gm(t){const e=Ou(t),n=oe&&!e.staff?vm(_m(oe.events,t.id,Te),e.familyLabel):"";return[e.familyLabel,e.staff?"":n||(t.role!==t.type?pm(t.role):""),t.standby?"standing by":hm(t.activity||t.state)].filter(Boolean).map(i=>Bo(i)).join(" · ")}function K1(t){if(Ou(t).staff)return"";const e=t.boredom==null?null:Zi(t.boredom),n=qi(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${he(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Ko(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}" title="${he(n.description)}">${he(n.label)}</em>`:""}</span>`}function j1(t){const e=t.boredom==null?null:Zi(t.boredom);return`<span class="strip-meter" role="meter" aria-label="${he(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Ko(e)}"></i></span>`}function J1(){const t=a1(oe?.manifest.agents||[]);re("whos-who").hidden=!t.length,re("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${Bo(e.title)}<small>${he(e.names.join(", "))}</small></dt><dd>${Bo(e.does)}</dd>`).join("")}</dl>`:""}function Hs(){return oe?.manifest.live?"Published":"Recorded"}function rl(){return xm(oe?.manifest,Te,Tt)}function lh(t,e){const n=_s(t.agentId,"");if(t.kind==="regime"){ku(`${t.title}${n?` · ${n}`:""} — ${t.detail}`);return}const i=re("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${he(t.title)}</strong><p>${he([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(oh),oh=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function Fu(){if(oe){if(Te>Sr){const t=im(oe.events,Sr,Te,oe.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?lh(e.at(-1),e.length-1):t.length&&lh(t.at(-1),0)}Sr=Te}}function ai(){return bm(Ke?.agents||[],Te,$m)}function ku(t){re("toast").textContent=t,re("toast").hidden=!1,clearTimeout(ah),ah=setTimeout(()=>re("toast").hidden=!0,4e3)}function Gn(){document.exitPointerLock?.(),gn.clear()}function wn(){return document.querySelector("dialog[open]")!==null||yr!==null}function ha(t){document.body.classList.toggle("bar-collapsed",t),re("collapse-bar").setAttribute("aria-expanded",String(!t)),re("collapse-bar").textContent=t?"▴":"▾",re("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel"),re("tick-label").textContent=t?`Round ${Ke?.round??1}`:`Tick ${Math.floor(Te)} / ${oe?.manifest.totalTicks||0}`}function zt(){const t=wn(),e=t||yn;document.body.classList.toggle("dock-auto-hidden",t),e&&!io&&(sh=document.body.classList.contains("bar-collapsed"),io=!0),e?ha(!0):io&&(io=!1,ha(sh)),re("collapse-bar").disabled=e}document.querySelectorAll("dialog").forEach(t=>t.addEventListener("close",zt));function Ir(){yr&&(re(yr).hidden=!0),yr=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false")),zt()}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=yr!==e;Gn(),Ir(),n&&(yr=e,re(e).hidden=!1,t.setAttribute("aria-expanded","true"),e==="orchestration-drawer"&&Wm(),zt())};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=Ir;function ya(t){if(en=t,Lt="",yi=!1,yn=!1,Bi="",si="",zt(),Gn(),qe.setOverview?.(!t),re("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){Tt=!1,qe.camera.position.set(0,1.69,9.5);const e=new Hn().setFromQuaternion(qe.camera.quaternion,"YXZ");En=e.y,_i=e.x}else{const e=qe.camera.quaternion.clone();Wi.reset(),qe.camera.quaternion.copy(e),Wi.syncFromCamera()}Ti(),Vm()}function Ti(){if(oe){const r=oe.manifest,s=SA(r),a=Iu(r);re("overview-eyebrow").textContent=s.eyebrow,re("run-callout").textContent=s.callout,re("replay-kicker").textContent=s.kicker,re("connection").textContent=r.sample===!1?a.status==="live"&&!rl()?"LIVE SWARM · VIEWING THE PAST":RA({...r,stale:a.status==="stale"}):r.description?.includes("mock")?"RECORDED SAMPLE · MOCK PRIOR-ART":"RECORDED REPLAY",re("open-results").textContent=Pr(r,oe)?"Podium":"Results",Q1()}re("open-results").hidden=!oe||!(Ho||ua(oe,Te));const t=u1(oe?.manifest,Te,Tt,oe?.events||[]);re("go-live").hidden=t.hidden,re("go-live").textContent=t.label,re("go-live").classList.toggle("at-edge",t.atEdge),re("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),re("play").textContent=Tt?"Ⅱ Pause":"▶ Play",re("play").setAttribute("aria-label",Tt?"Pause":"Play"),re("camera-mode").textContent=en?"Lab view ↗":"Walk inside ↗",re("camera-mode").disabled=!oe||Tt,re("timeline").value=String(Te),re("tick-label").textContent=document.body.classList.contains("bar-collapsed")?`Round ${Ke?.round??1}`:`Tick ${Math.floor(Te)} / ${oe?.manifest.totalTicks||0}`,re("timeline").setAttribute("aria-valuetext",`Tick ${Math.floor(Te)} of ${oe?.manifest.totalTicks||0}`);const e=oe&&_a(oe.events,Te),n=re("activity-caption"),i=e?.refs?.experiment_id;n.textContent=e?fa(r1({...e,message:nl(e,pa())||e.message},_s(e.agentId,""))):"The run begins here",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function Q1(){if(!oe)return;const t=oe.manifest,e=Iu(t),n=qi(Ke?.regime),i=t.time?.rounds||Ke?.config.rounds||0,r=DA(t),s=xa(t,oe),a=va(t,oe),o=om(t.metric||Ke?.metric),l=Pr(t,oe)?o.replace(/\breplication\b/gi,"split-half consistency").replace(/\breplicated\b/gi,"split-half consistent"):o,c=n.label&&t.sample===!1?`<span class="regime-chip" data-tone="${n.tone}" title="${he(n.description||`Swarm boredom ${Math.round(Zi(Ke?.boredom||0))}%`)}">${he(n.label)} · ${Math.round(Zi(Ke?.boredom||0))}%</span>`:"",u=n.description&&t.sample===!1?`<span class="regime-explanation">${he(n.description)}</span>`:"",f=a?`<span class="gate-explanation" title="${he(Pm)}">Zero loss = preregistered gates passed.</span>`:"";re("run-meta").innerHTML=[`<span class="status-chip" data-status="${e.status}" title="${he(e.detail)}">${he(e.label)}</span>`,`<span class="meta-task">${he(tl(t))}</span>`,l?`<span>${he(l)}</span>`:"",s?`<span class="proxy-chip" title="Benchmark caveat for this recording">Proxy: ${he(s)}</span>`:"",Ke?.round?`<span>Round ${Ke.round}${i?` / ${i}`:""}</span>`:"",c,u,f,e.status==="stale"?`<span class="warn-chip">${he(e.detail)}</span>`:"",r?`<span class="warn-chip">${he(r)}</span>`:""].filter(Boolean).join("")}function wi(t){oe&&(Te=Math.max(0,Math.min(oe.manifest.totalTicks,t)),Ke=_a(oe.frames,Te)?.snapshot||null,Ti(),zu(),da.open&&Wu(),It.open&&Xu(),xr.open&&jm(),is.open&&qc(),!Ho&&ua(oe,Te)&&(Ho=!0,qc(),is.open||(is.showModal(),zt())))}function zu(){re("agent-count").textContent=`${ai().length} AGENTS`,re("agent-list").innerHTML=s1(Ke?.agents||[],ai()).map(t=>`<button class="agent-row" data-agent="${he(t.id)}"${t.standby?' disabled data-standby="true"':""}>${Hm(t)}<span><strong>${he(t.name)}</strong><small>${Gm(t)}</small>${K1(t)}</span><i></i></button>`).join("")||'<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>',re("run-label").textContent=Ke?`ROUND ${Ke.round}${Ke.config.rounds?` / ${Ke.config.rounds}`:""} · BEST ${Ke.metric.name.replaceAll("_"," ")} ${Ke.value==null?"—":Ke.value.toFixed(4)} · ${om(Ke.metric).split(" ").slice(-3).join(" ")}`:"Waiting for the first events from the artificial scientist swarm",Vm(),yr==="orchestration-drawer"&&Wm()}function Vm(){const t=re("status-strip");if(!oe||!Ke||en||document.body.classList.contains("prestart")){t.hidden=!0,t.innerHTML="";return}const e=ai().filter(d=>d.type!=="baseline"),n=Ke.results,i=Ke.metric,r=va(oe.manifest,oe),s=e.filter(d=>d.type!=="conductor"&&d.type!=="critic").length,a=n.filter(d=>ei(d.status,d.kind)!=="baseline"&&typeof d.value=="number"&&Number.isFinite(d.value)),o=i.name==="replicated_findings"?"maximize":i.direction,l=a.length?o==="maximize"?Math.max(...a.map(d=>d.value)):Math.min(...a.map(d=>d.value)):Ke.value,c=n.find(d=>ei(d.status,d.kind)==="baseline"&&typeof d.value=="number")?.value??null;t.innerHTML=e.map(d=>{if(d.type==="conductor"||d.type==="critic"){const m=C1(d.type,oe.events,Te),p=P1(d.type,oe.events,Te);return`<button class="status-tile status-role" data-agent="${he(d.id)}" title="${he(p||d.name)}" aria-label="Focus ${he(d.name)}: ${he(m)}">${he(m)}</button>`}const h=L1(n,d.id,d.name,i,l,c),g=r?A1(n,d.id,d.name):null,x=g?R1(g):I1(h.best);return`<button class="status-tile" data-agent="${he(d.id)}" aria-label="Focus ${he(d.name)}: ${he(x)}"><strong class="status-tile-name">${he(d.name)}</strong>${j1(d)}<span class="tile-metric"${g?` title="${he(Pm)}"`:""}>${he(x)}</span></button>`}).join("")+(s?`<span class="status-scroll-hint">${s} scientist${s===1?"":"s"} ›</span>`:""),t.hidden=!e.length;const u={active:"Active turn",waiting:"Waiting",done:"Done this round",idle:"Idle"},f=q1(oe,Te);t.querySelectorAll(".status-tile[data-agent]:not(.status-role)").forEach(d=>{const h=f[d.dataset.agent||""];h&&h!=="idle"&&d.insertAdjacentHTML("beforeend",`<small class="turn-badge" data-turn="${h}">${u[h]}</small>`)}),Bu()}function Wm(){const t=re("orchestration-content");if(!oe){t.innerHTML="<p>No run loaded.</p>";return}const e=Z1(oe,Te),n=860,i=40,r=30,s=r+e.lanes.length*i+12,a=158,o=n-a-24,l=o/Math.max(1,e.rounds.length),c=(p,_)=>a+W1(e.roundSpans,p,_)*l,u={idea:"#e4c986",critic:"#91b4d4",veto:"#e77872",scout:"#82c5ae",memory:"#b39bdb",boredom:"#dd9b59",evaluation:"#a8b6b7",keep:"#77bb69",gate:"#e77872"},f=e.lanes.map((p,_)=>{const w=r+_*i,S=V1(p.marks).map(T=>{const A=Math.max(0,e.rounds.indexOf(T.round)),v=a+A*l+4,b=a+(A+1)*l-4,k=T.visible.map(P=>c(P.tick,P.round));for(let P=1;P<k.length;P++)k[P]=Math.max(k[P],k[P-1]+8.5);if(k.length){const P=k.at(-1)-b;if(P>0)for(let Q=0;Q<k.length;Q++)k[Q]-=P;const W=v-k[0];if(W>0)for(let Q=0;Q<k.length;Q++)k[Q]+=W}const N=T.visible.map((P,W)=>`<g class="orch-mark" role="button" tabindex="0" data-orch-tick="${P.tick}" data-orch-agent="${he(p.id)}" aria-label="${he(P.label)} by ${he(p.name)} at tick ${P.tick}"><title>${he(P.label)}${P.why?`: ${he(P.why)}`:""} · tick ${P.tick}</title><circle cx="${k[W]}" cy="${w}" r="${P.kind==="veto"?5:4}" fill="${u[P.kind]}" class="orch-dot ${P.kind}"/></g>`).join(""),O=T.hidden[0],B=O?Math.max(v+10,Math.min(b-10,c(O.tick,T.round))):0,Z=O?`<g class="orch-overflow" role="button" tabindex="0" data-orch-tick="${O.tick}" data-orch-agent="${he(p.id)}" aria-label="${T.hidden.length} more events in round ${T.round}; jump to ${he(O.label)} at tick ${O.tick}"><title>${T.hidden.length} more events in round ${T.round}</title><rect x="${B-10}" y="${w+14}" width="20" height="14" rx="7"/><text x="${B}" y="${w+24}" text-anchor="middle">+${T.hidden.length}</text></g>`:"";return`${N}${Z}`}).join("");return`<text x="8" y="${w+4}" class="orch-name">${he(p.name)}</text><line x1="${a}" y1="${w}" x2="${n-12}" y2="${w}" class="orch-lane"/>${S}`}).join(""),d=e.roundCloses.filter(p=>p.tick>0).map(p=>`<line x1="${c(p.tick,p.round)}" y1="${r-20}" x2="${c(p.tick,p.round)}" y2="${s}" class="orch-close"><title>Round ${p.round} closed</title></line>`).join(""),h=e.rounds.map((p,_)=>`<text x="${a+(_+.5)*l}" y="13" class="orch-round">Round ${p}</text>`).join(""),g=`<line x1="${c(Te)}" y1="${r-20}" x2="${c(Te)}" y2="${s}" class="orch-playhead"/>`,x={boredom:"BOREDOM_SNAP at B ≥ 0.70 assigns one exploit and three divergent workers; the novelty gate rejects near-duplicates.",keep:"Kept means retained as a current best; baseline is the unmodified reference."},m=[["idea","Idea"],["scout","Search"],["memory","Memory"],["boredom","Boredom shift"],["critic","Review"],["veto","Veto"],["keep","Kept"]].map(([p,_])=>`<span${x[p]?` title="${he(x[p])}"`:""}><i style="--mark:${u[p]}"></i>${_}</span>`).join("")+`<span class="orchestration-legend-note"><span title="EXPLOIT assigns three exploit slots and one divergent slot.">EXPLOITING</span>: 3 exploit + 1 divergent; <span title="${he(x.boredom)}">BOREDOM_SNAP</span>: 1 exploit + 3 divergent; <span title="SNAP's novelty gate rejects divergent ideas that near-duplicate recent attempts.">SNAP slots</span>: divergent ideas are checked against near-duplicates.</span>`;t.innerHTML=e.lanes.length?`<div class="orchestration-scroll"><svg class="orchestration-svg" viewBox="0 0 ${n} ${s}" role="img" aria-label="Orchestration lanes through tick ${Math.floor(Te)}">${h}${d}${f}${g}</svg></div><div class="orchestration-legend">${m}</div><p class="orchestration-hint">Select a mark to jump to that event and focus its scientist.</p>`:"<p>No orchestration events by this moment.</p>"}function qc(){if(!oe){re("results-content").innerHTML="<p>No results available.</p>";return}const t=fm.results,e=Pu(oe.manifest,oe),n=`<div class="results-provenance" data-tone="${e.tone}"><strong>${he(e.label)}</strong>${e.chips.map(c=>`<span>${he(c)}</span>`).join("")}</div>`;if(Pr(oe.manifest,oe)){const c=ua(oe,Te)||Te>=oe.manifest.totalTicks||oe.events.some(p=>["run.finished","run.stopped"].includes(p.type)&&p.tick<=Te),u=Lu(oe,Te),f=H1(oe.entities?.studies,oe.events,Te,c),d=u.awards.length?`<p class="podium-award-count">${he(t.awardCount.replace("{N}",String(u.awards.length)))}</p>`:va(oe.manifest,oe)?`<p class="podium-empty">${he(t.noAwards)}${Cu(oe.manifest,oe)?he(t.creditErrorSuffix):""}</p>`:`<p class="podium-empty">${he(Gl.committeePending)}</p>`,h=t.countLine.replace("{N}",String(u.registered)).replace("{M}",String(u.confirmed)).replace("{K}",String(u.underCurrentRules)),g=f.entries.map(p=>`<li>${p.rank?`<b>#${p.rank}</b> `:""}${he(p.headline||p.studyId)}${p.unscored?" · Unscored":` · score ${he(p.score)}`}${p.rho!=null?` · ρ ${p.rho.toFixed(3)}`:""}${p.p!=null?` · p ${zo(p.p)}`:""}</li>`).join("");re("results-title").textContent="IG NOBEL RESULTS";const x=f.status==="awaiting"&&g?`<details class="unscored-studies"><summary>${f.confirmed} confirmed studies, unscored</summary><ul class="podium-list">${g}</ul></details>`:g?`<ul class="podium-list">${g}</ul>`:"",m=G1(oe,he);re("results-content").innerHTML=`${n}<h2>Ig Nobel podium</h2>${d}<p class="results-count">${he(h)}</p>${m}${x}<details class="judging-details"><summary>${he(Gl.title)}</summary><ol>${Gl.steps.map(p=>`<li>${he(p)}</li>`).join("")}</ol></details>`;return}const i=U1(oe,Te);if(!i){re("results-content").innerHTML="<p>No results available.</p>";return}const r=c=>c==null?"—":vr(c),s=c=>c?`${c.low.toFixed(2)}–${c.high.toFixed(2)}`:"",a=c=>c.fraction||r(c.score??c.loss),o=i.heldOut?`<section class="held-out"><h3>Held-out test</h3><p>Baseline ${a(i.heldOut.baseline)} → best ${a(i.heldOut.best)}</p>${i.heldOut.best.wilson?`<p>95% Wilson CI: ${s(i.heldOut.best.wilson)} (baseline ${s(i.heldOut.baseline.wilson)})</p>`:""}${i.heldOut.proxyNote?`<p>${he(i.heldOut.proxyNote)}</p>`:""}${i.heldOut.referenceNote?`<p>${he(i.heldOut.referenceNote)}</p>`:""}</section>`:'<p class="no-held-out">no held-out split for this task</p>',l=i.delta==null?"":` · ${D1(i.delta,r)}`;re("results-title").textContent=`RUN RESULTS · ${i.status.toUpperCase()}`,re("results-content").innerHTML=`${n}<h2>${he(tl(oe.manifest))}</h2><p class="result-metric">${he(i.metric)} · ${i.direction==="maximize"?"higher is better":"lower is better"}</p><p class="result-baseline">Baseline ${r(i.baseline)} → best dev result ${r(i.best)}${l}</p>${i.winner?.commit?`<section class="result-winner"><h3>Winning change</h3><p><code>${he(i.winner.commit)}</code> · ${he(i.winner.agent)}</p><p class="result-winner-description">${he(i.winner.description)}</p></section>`:"<p>Baseline is the best result so far.</p>"}${o}<p class="result-totals">Kept ${i.totals.kept} · discarded ${i.totals.discarded} · crashed ${i.totals.crashed}</p>${i.proxyNote&&!i.heldOut?.proxyNote?`<p class="proxy-note">${he(i.proxyNote)}</p>`:""}${i.referenceNote&&!i.heldOut?.referenceNote?`<p class="reference-note">${he(i.referenceNote)}</p>`:""}`}function Bu(){const t=document.querySelector(".replay-bar"),e=re("status-strip");if(!t||!e)return;const n=t.getBoundingClientRect();if(innerHeight<=500&&innerWidth>innerHeight){const i=document.querySelector(".sidebar"),r=Math.max(8,(i?.getBoundingClientRect().right??0)+8);e.style.left=`${r}px`,e.style.width=`${Math.max(0,n.left-r-8)}px`,e.style.top="58px"}else e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.top=`${Math.max(0,n.top-52)}px`;e.style.bottom="auto",e.style.transform="none"}const ch=document.querySelector(".replay-bar");ch&&new ResizeObserver(Bu).observe(ch);window.addEventListener("resize",Bu);function eR(){const t=re("proximity");if(!Lt){t.hidden=!0;return}const e=ai().find(i=>i.id===Lt);if(!e){t.hidden=!0;return}const n=`${Lt}|${Math.floor(Te)}|${yn}`;if(n!==si){const i=w1({agent:e,recording:oe,tick:Te,metric:Ke?.metric,best:Ke?.value??null,agentName:_s});if(t.innerHTML=T1(i,yn,he),yn){const r=Nu(oe,e.id,e.activity||e.state,Te,pa()),s=t.querySelector("[data-bubble-now]");s&&(s.innerHTML=Em(r,{...pa(),esc:he},Ke?.metric))}si=n}t.hidden=!1,tR()}function tR(){const t=re("proximity");if(t.hidden)return;const e=qe.agentPositions?.().find(l=>l.id===Lt);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new F(0,2.35,0));if(qe.camera.updateMatrixWorld(),n.clone().applyMatrix4(qe.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(qe.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12;t.style.visibility="visible",t.style.left=`${Rn.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o))}px`,t.style.top=`${Rn.clamp(s-a.height-22,o,Math.max(o,innerHeight-a.height-o))}px`}function $u(t){Lt=t,yi=!0,yn=!1,Bi="",si="",zt(),Gu("scientist")}function nR(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function iR(){try{return localStorage.getItem("lab.coach.dismissed")==="1"}catch{return!1}}function rR(){const t=["pointerdown","keydown","touchstart"],e=()=>{js?.(),js=null;try{localStorage.setItem("lab.coach.dismissed","1")}catch{}ti="done",re("coach-mark").hidden=!0};t.forEach(n=>window.addEventListener(n,e,!0)),js=()=>t.forEach(n=>window.removeEventListener(n,e,!0))}function Hu(){if(wn()||iR()){re("coach-mark").hidden=!0;return}const t=VS(nR());if(t==="scientist"&&innerHeight<=500&&!document.body.classList.contains("bar-collapsed")){ti="done",re("coach-mark").hidden=!0;return}if(!t){ti="done",re("coach-mark").hidden=!0;return}ti=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?"Tap a scientist":"Drag to scrub";re("coach-mark").dataset.coach=t,re("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,re("coach-mark").hidden=!1,rR()}function Gu(t){ti===t&&(js?.(),js=null,ti="",re("coach-mark").hidden=!0,Hu())}function Vu(){$o||($o=!0,document.body.classList.remove("prestart"),re("prestart").hidden=!0,re("intro").hidden=!0,oe&&(oe.manifest.live?wi(oe.manifest.totalTicks):Te>=oe.manifest.totalTicks&&wi(0),Tt=!0,Sr=Te),Ti(),zu(),At.domElement.focus(),ai().length&&Hu())}function Xm(){Ks&&(Ks=!1,qe.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",Xm,{capture:!0});window.addEventListener("keydown",Xm,{capture:!0});re("start-swarm").onclick=Vu;re("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&Gu(ti)};function sR(){if(!oe||!Ke)return"<p>No measurements yet.</p>";const t=oe.manifest.swarm==="ignobel"&&Ke.metric.name==="replicated_findings";return f1(d1(Ke.results,oe.frames,Te,!t),Ke.metric,Te,he)}function Zm(t,e=lm(Ke?.metric)){const n=LA(t.value,t.reward,e,vr),i=[t.effectSize==null?"":`Effect ${he(t.effectSize)}`,t.pValue==null?"":`p = ${he(t.pValue)}`,n?he(n):""].filter(Boolean);return i.length?i.join("<br>"):he(t.value??"—")}function Wu(){const t=Ke;if(!t){re("console-content").innerHTML="<h2>No evidence yet.</h2>";return}const e=oe?xa(oe.manifest,oe):void 0,n=lm(t.metric),i='<p class="evidence-key"><span title="Kept candidates are retained when they improve the current best.">Keep</span> = retained as a current best; <span title="Baseline is the unmodified reference used for comparison.">baseline</span> = the unmodified reference.</p>',r=t.results.slice().reverse().map(s=>{const a=s.kind==="baseline"?"Baseline is the unmodified reference for comparison.":String(s.status).toLowerCase()==="keep"?"Kept because this result improved the current best.":"";return`<tr${s.id?` class="inspectable" data-experiment="${he(s.id)}" tabindex="0"`:""}><td>${s.round}</td><td>${he(s.agent)}</td><td><span${a?` title="${he(a)}"`:""}>${he(s.status)}</span><br>${he(s.description)}</td><td>${Zm(s,n)}</td></tr>`}).join("");re("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(Te)}. Every candidate is plotted: kept, discarded and crashed, with the confirmed best so far. Later results stay hidden until playback reaches them.</p>${i}${e?`<p class="proxy-note"><b>About this benchmark:</b> ${he(e)}</p>`:""}${sR()}<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th title="Run metric value">${he(n)}</th></tr></thead><tbody>${r}</tbody></table></div><h3>${Hs()} findings</h3>${t.findings.filter(s=>!/swarm_B|per_agent_B|boredom/i.test(s.message)).slice().reverse().map(s=>`<div class="finding"><b>${he(ai().find(a=>a.id===s.agent)?.name||s.role)}</b><span>${he(s.message)}</span></div>`).join("")||"<p>No findings yet.</p>"}${aR()}`}function aR(){const t=Ru(oe,Te),e=Au(oe,Te),n=nm(Km(),Te);return`${t.length?`<h3>Ig Nobel studies</h3>${b1(t,Js())}`:""}${n.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${Am(n,Js())}</div>`:""}${e.length||oR("sources")?`<h3>Research sources</h3>${v1(e,Js())}`:""}`}let cn="now";function pa(){return{name:t=>_s(t),metric:Ke?.metric,best:Ke?.value??null}}function Xu(){const t=ai().find(S=>S.id===Uu);if(!t){It.close();return}const e=oe?EA(oe.events,Te).filter(S=>S.agentId===t.id||S.type==="message.sent"&&(S.payload?.to_agent_id===t.id||S.payload?.to_agent_ids?.includes(t.id))):[],n=cn==="idea"?/hypothesis|propos|question|idea/:cn==="result"?/experiment|observ|discover|reward|evaluat/:cn==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=gm,r=e.filter(S=>n.test(S.type)&&i(S.message)).slice(-1),s=cn==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=cn==="result"&&t.lastResult?`<blockquote>${he(t.lastResult.description)}<br>${he(t.lastResult.status)} · ${Zm(t.lastResult)}<cite>${Hs()} result · available by tick ${Math.floor(Te)}</cite></blockquote>`:"",o=cn==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",l=t.boredom==null?null:Zi(t.boredom),c=oe?$S(oe.events,t.id,Te):null,u=qi(c?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),f=BS(c?.components||t.boredomDetail?.components),d=nm(Km(),Te,t.id),h=cn==="result"||cn==="doing"?t.lastResult?.id&&ca(oe,t.lastResult.id,Te)?t.lastResult.id:t.focus?.experiment_id&&ca(oe,t.focus.experiment_id,Te)?t.focus.experiment_id:null:null,g=h?`<button class="inspect-link" data-experiment="${he(h)}">Inspect experiment →</button>`:"",x=!!oe?.manifest.live,m=rl(),p=oe?ym(oe.events,Te):0,_=x?m?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(Te)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(Te)}${p?` · ${p} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(Te)}.`,w=S=>S.type==="message.sent"&&S.agentId!==t.id?`Message from ${he(_s(S.agentId,"")||"a colleague")}`:`${x?"Published":"Recorded"} ${he(mm(S.type).toLowerCase())}`;re("conversation-tag").textContent=x?m?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",re("conversation-content").innerHTML=`<div class="conversation-person">${Hm(t)}<div><h2>${he(t.name)}</h2><p>${Gm(t)}</p></div></div><div class="conversation-questions">${[["now","Now"],["doing","What are you doing?"],["idea","Tell me about your idea"],["result","What did you find?"],["notes","Your research notes"],...d.length?[["talk","Conversation"]]:[]].map(([S,T])=>`<button data-topic="${S}" aria-pressed="${cn===S}">${T}</button>`).join("")}</div><div class="speech-bubble${cn==="talk"||cn==="now"?" history":""}">${cn==="now"?Em(Nu(oe,t.id,t.activity||t.state,Te,pa()),{...pa(),esc:he},Ke?.metric):cn==="talk"?Am(d,Js(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${he(o)}<cite>${Hs()} proposal · available by tick ${Math.floor(Te)}</cite></blockquote>`:r.length?r.map(S=>`<blockquote>${he(S.message)}<cite>${w(S)} · tick ${S.tick}</cite></blockquote>`).join(""):s?`<blockquote>${he(s)}<cite>${Hs()} excerpt · through tick ${Math.floor(Te)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${Hs().toUpperCase()} BOREDOM</span><strong style="color:${l==null?"inherit":Ko(l)}">${l==null?"Not measured":Math.round(l)+"%"}</strong></div>${l==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${he(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i style="left:${l}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||f.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${he(u.label)}</span>`:""}${f.length?`<div class="boredom-components" aria-label="Boredom components">${f.map(S=>`<div><span>${he(S.label)}</span><i style="--v:${S.value}%"></i><b>${S.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${_}</p>`}function qm(t){if(Lt="",yi=!1,yn=!1,si="",zt(),rl()||(Tt=!1),Uu=t,cn="now",Gn(),Ir(),Ti(),Xu(),ai().some(e=>e.id===t)){const e=qe.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new F(0,2.1,0));if(qe.camera.lookAt(n),en||Wi.focus(n),en){const i=new Hn().setFromQuaternion(qe.camera.quaternion,"YXZ");En=i.y,_i=i.x}}It.open||(It.show(),zt()),Ym(),It.querySelector("button")?.focus()}}function Ym(){if(!It.open)return;const t=qe.agentPositions?.().find(c=>c.id===Uu);if(!t){It.style.visibility="hidden";return}const e=t.position.clone().add(new F(0,2.35,0));if(qe.camera.updateMatrixWorld(),e.clone().applyMatrix4(qe.camera.matrixWorldInverse).z>=0){It.style.visibility="hidden";return}It.style.visibility="visible",e.project(qe.camera);const i=(e.x+1)/2*innerWidth,r=(1-e.y)/2*innerHeight,s=It.getBoundingClientRect(),a=12,o=Rn.clamp(i-s.width/2,a,Math.max(a,innerWidth-s.width-a)),l=Rn.clamp(r-s.height-24,80,Math.max(80,innerHeight-s.height-190));It.style.left=`${o}px`,It.style.top=`${l}px`,It.style.setProperty("--speech-tail",`${Rn.clamp(i-o,20,s.width-20)}px`)}re("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(cn=e,Xu())};re("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&qm(e)};function Km(){return oe?.events||[]}function oR(t){const e=oe?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function _s(t,e){return t?(Ke?.agents||oe?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||oe?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function Js(){const t=oe?.manifest.id||"";return{esc:he,name:_s,judging:oe?.manifest.judging,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return ap(n)},experimentLabel:e=>{const n=ca(oe,e,Te);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let Vo=null;function jm(){if(!Vo)return;const t=ca(oe,Vo,Te);re("inspector-content").innerHTML=t?_1(t,Js(),t.studyId?Ru(oe,Te).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function lR(t){Gn(),Ir(),It.close();const e=Au(oe,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>Te&&(Tt=!1,wi(e)),Wu(),da.open||(da.showModal(),zt());const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function Jm(t){Tt=!1,Ti(),Gn(),Vo=t,jm(),xr.open||(xr.showModal(),zt()),xr.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-orch-tick]");if(n){t.preventDefault(),Tt=!1;const s=n.dataset.orchAgent,a=Number(n.dataset.orchTick);wi(a);const o=qe.agentPositions?.().find(l=>l.id===s);if(o){const l=o.position.clone().add(new F(0,2.1,0));qe.camera.lookAt(l),Wi.focus(l)}$u(s);return}const i=e.closest?.("[data-source]")?.dataset.source;if(i){lR(i);return}const r=e.closest?.("[data-experiment]")?.dataset.experiment;r&&(t.preventDefault(),Jm(r))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),Jm(e.dataset.experiment))});function Wo(){Lt&&(Gn(),yn=!0,si="",zt())}function Qm(){Lt&&(Bi=Lt),Lt="",yi=!1,yn=!1,si="",re("proximity").hidden=!0,zt()}re("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){Qm();return}if(n?.hasAttribute("data-bubble-more")){Lt&&qm(Lt);return}if(n?.hasAttribute("data-bubble-expand")){Wo();return}yn||Wo()});re("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");if(!e)return;const n=e.dataset.agent,i=qe.agentPositions?.().find(s=>s.id===n);if(!i)return;const r=i.position.clone().add(new F(0,2.1,0));qe.camera.lookAt(r),Wi.focus(r),$u(n)});xr.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);re("close-inspector").onclick=()=>xr.close();xr.addEventListener("close",()=>{Vo=null});re("close-results").onclick=()=>is.close();re("open-results").onclick=()=>{Gn(),qc(),is.showModal(),zt()};re("close-conversation").onclick=()=>{It.close(),At.domElement.focus()};re("close-console").onclick=()=>da.close();re("close-guide").onclick=()=>Um.close();re("open-console").onclick=()=>{Gn(),Ir(),Wu(),da.showModal(),zt()};re("open-guide").onclick=()=>{Gn(),Ir(),Um.showModal(),zt()};re("play").onclick=()=>{oe&&(Tt||(It.close(),!oe.manifest.live&&Te>=oe.manifest.totalTicks&&wi(0),en&&ya(!1)),Tt=!Tt,Ti())};re("camera-mode").onclick=()=>ya(!en);re("collapse-bar").onclick=()=>{km=!0,ha(!document.body.classList.contains("bar-collapsed"))};ha(am(innerWidth,innerHeight));zt();window.addEventListener("resize",()=>{km||ha(am(innerWidth,innerHeight)),zt()});re("timeline").oninput=()=>{Tt=!1,wi(Number(re("timeline").value)),Sr=Te,Gu("scrub")};re("go-live").onclick=()=>{oe?.manifest.live&&(It.close(),en&&ya(!1),Tt=!0,wi(oe.manifest.totalTicks),Fu())};re("pace").onchange=()=>{Fm=Number(re("pace").value)};function cR(t){$m=Sm(t),bo=h1(t,qe.bounds,qe.colliders)}function uR(){const t=_a(bo,Te);if(!t)return new Map;if(Te<=0)return t.positions;const e=bo[bo.indexOf(t)+1];if(!e)return t.positions;const n=(Te-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function eg(t,e=!1){const n=++ih;e||(Tt=!1,Ho=!1,is.close(),re("connection").textContent="LOADING RUN");try{const i=await PA(tm,t,Om.find(l=>l.id===t)?.contentVersion||"2",oe);if(n!==ih)return;const r=Te,s=rl();oe=i,Bm(),Y1(i),i.frames.sort((l,c)=>l.tick-c.tick),i.events.sort((l,c)=>l.tick-c.tick),cR(i),J1(),re("timeline").max=String(i.manifest.totalTicks),re("timeline").disabled=!1,re("play").disabled=!1,re("replay-title").textContent=fa(tl(i.manifest)),re("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),re("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),re("timeline-markers").innerHTML=i.events.filter(l=>/experiment.finished|discovery|study.completed|award/.test(l.type)).map(l=>`<i${/discovery|award/.test(l.type)?' class="best"':""} style="left:${l.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),re("run-picker").value=t,e||ya(!1);const a=e?c1(r,i.manifest,s):l1(i.manifest);e||(Tt=$o,Sr=a),wi(a),e&&s?Fu():e||(Sr=Te),Ti(),XS&&!e&&(sessionStorage.getItem("intro-seen")?Vu():(sessionStorage.setItem("intro-seen","1"),dR()));const o=new URL(location.href);o.searchParams.set("recording",t),o.searchParams.delete("run"),history.replaceState(null,"",o)}catch(i){re("connection").textContent="ARCHIVE UNAVAILABLE",ku(i.message)}}async function tg(){try{const t=yA(await tm("/recordings"));if(Om=t,re("run-picker").innerHTML=FA(t,he)||"<option>No artificial scientist swarm recordings available</option>",oe)re("run-picker").value=oe.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await eg(t.find(n=>n.id===e)?.id||t[0].id)}else t.length||(re("connection").textContent="NO SWARM RECORDINGS",re("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){re("connection").textContent="ARCHIVE UNAVAILABLE",re("replay-title").textContent="Archive unavailable",ku(t.message)}}re("refresh-runs").onclick=()=>tg();re("run-picker").onchange=()=>eg(re("run-picker").value);function dR(){re("intro").innerHTML=$A(fm,zA(oe),he,BA(oe),oe?.manifest,oe),re("prestart").hidden=!0,re("intro").hidden=!1,re("intro-start").onclick=Vu,re("intro-results-link").onclick=t=>{t.preventDefault();const e=re("intro-about"),n=re("intro-real-results");e.open=!0,n.hidden=!1,n.open=!0,n.scrollIntoView({behavior:Go?"auto":"smooth",block:"center"})},re("intro-qualifier").onclick=t=>{t.preventDefault();const e=re("intro-about"),n=re("intro-real-results");e.open=!0,n.hidden=!1,n.open=!0,n.scrollIntoView({behavior:Go?"auto":"smooth",block:"center"})}}re("refresh-runs").hidden=!0,document.body.classList.add("static-site");function uh(t,e){const i=qe.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||qe.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),gn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>gn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(yn){yn=!1,si="",zt();return}if(yi||Lt){Qm(),Gn();return}It.close(),Ir(),Gn()}if(!(wn()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Lt){t.preventDefault(),Wo();return}t.code==="Enter"&&Lt&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),Wo()),["KeyW","KeyA","KeyS","KeyD",...en?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault(),gn.add(t.code)}});window.addEventListener("keyup",t=>gn.delete(t.code));window.addEventListener("blur",()=>{gn.clear(),$s=!1,pr=null,Tt=!1,Ti()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);n=s,Tt&&oe&&(Te=MA(Te,a,Fm,oe.manifest.totalTicks,oe.manifest.tickDurationMs),bA(oe.manifest,Te)||(Tt=!1),Math.floor(Te)!==i?(wi(Te),i=Math.floor(Te),Fu()):Ti());const o=qe.camera;if(!en&&!wn()&&!It.open&&Wi.update(a,gn),en&&!wn()){({yaw:En,pitch:_i}=rp(En,_i,a,gn));const h=Number(gn.has("KeyW"))-Number(gn.has("KeyS")),g=Number(gn.has("KeyD"))-Number(gn.has("KeyA"));if(h||g){const x=(gn.has("ShiftLeft")||gn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(h,g),m=(-Math.sin(En)*h+Math.cos(En)*g)*x,p=(-Math.cos(En)*h-Math.sin(En)*g)*x;uh(o.position.x+m,o.position.z)||(o.position.x+=m),uh(o.position.x,o.position.z+p)||(o.position.z+=p)}o.rotation.set(_i,En,0,"YXZ")}const l=uR(),c=ai(),u=m1(oe?.events||[],Te,c,fa,100);if(qe.update(Te*(oe?.manifest.tickDurationMs||700)/1e3,{progress:Ke?.progress||0,boredom:0,running:Tt,replay:!0,finale:ua(oe,Te),reducedMotion:Go,agents:c.map(h=>({...h,boredom:h.boredom==null?null:Zi(h.boredom),regime:h.boredomSpectrum?.regime,state:l.get(h.id)?.atLab?"working":h.state,stationId:l.get(h.id)?.atTable?"culture":Zc({...h,state:"working",activity:"experimenting"}),discussionBrief:l.get(h.id)?.atTable?u.get(h.id)?.brief:void 0,discussionPeers:u.get(h.id)?.peers,ideaBrief:US(fa(h.lastIdea||h.lastQuestion||h.lastObservation||"")),position:ua(oe,Te)?void 0:l.get(h.id)}))}),$o&&!ti&&c.length&&!wn()&&Hu(),re("coach-mark").hidden=wn()||!ti||ti==="done",Ks){const h=(s-rh)/(Go?300:2200);qe.grow?.(Math.min(1,h)),h>=1&&(Ks=!1,document.body.classList.remove("world-growing"))}const f=pi;if(en&&!wn()){o.getWorldDirection(r),r.y=0,r.normalize();const h=(qe.agentPositions?.()||[]).map(g=>{const x=g.position.clone().sub(o.position);x.y=0;const m=x.length();return{id:g.id,distance:m,facing:m?x.normalize().dot(r):1}});pi=M1(h,pi)}else pi="";Bi&&pi!==Bi&&(Bi="");const d=yi?Lt:pi===Bi?"":pi;d!==Lt&&(Lt=d,yn=!1,si=""),f!==pi&&!yi&&pi&&(Bi=""),eR(),At.render(qe.scene,o),Ym()};qe=WS(),rh=performance.now(),Ks=!0,document.body.classList.add("world-growing"),qe.grow?.(0),At=new NS({antialias:!0,powerPreference:"high-performance"}),At.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),At.setSize(innerWidth,innerHeight),At.toneMapping=Kc,At.toneMappingExposure=qe.exposure??1,At.outputColorSpace=Ot,re("world").appendChild(At.domElement),At.domElement.tabIndex=0,At.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),qe.camera.rotation.order="YXZ",Wi=new DS(qe.camera),ya(!1),At.domElement.onclick=()=>{if(en&&!wn()&&!It.open&&!yi)try{At.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},At.domElement.onpointerdown=s=>{wn()||($s=!0,ro={x:s.clientX,y:s.clientY},pr={x:s.clientX,y:s.clientY,canvas:s.target===At.domElement},en||At.domElement.setPointerCapture(s.pointerId))},At.domElement.onpointermove=s=>{if(!$s||document.pointerLockElement||wn())return;const a=s.clientX-ro.x,o=s.clientY-ro.y;en?{yaw:En,pitch:_i}=Lc(En,_i,a,o):Wi.dragBy(a,o),ro={x:s.clientX,y:s.clientY}},At.domElement.onpointercancel=()=>{$s=!1,pr=null},window.addEventListener("pointerup",s=>{if(pr?.canvas&&Math.hypot(s.clientX-pr.x,s.clientY-pr.y)<8&&s.target===At.domElement&&!wn()){const a=qe.camera;a.updateMatrixWorld();let o=null;for(const l of qe.agentPositions?.()||[]){if(!ai().some(g=>g.id===l.id))continue;const c=l.position.clone().add(new F(0,2.35,0));if(c.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;c.project(a);const f=(c.x+1)*innerWidth/2,d=(1-c.y)*innerHeight/2,h=Math.hypot(s.clientX-f,s.clientY-d);h<48&&(!o||h<o.distance)&&(o={id:l.id,distance:h})}o?$u(o.id):(Lt="",yi=!1,yn=!1,si="",zt())}pr=null,$s=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&en&&!wn()&&({yaw:En,pitch:_i}=Lc(En,_i,s.movementX,s.movementY))});const e=()=>{qe.camera.aspect=innerWidth/innerHeight,qe.camera.updateProjectionMatrix(),At.setSize(innerWidth,innerHeight)};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new F;zu(),t(),re("loading").classList.add("loaded"),setTimeout(()=>re("loading").hidden=!0,380),tg()}catch(t){console.error(t),re("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
