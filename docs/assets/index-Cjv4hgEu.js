(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();const Vc="187",Ym=0,qu=1,Km=2,eo=1,jm=2,Os=3,xr=0,cn=1,In=2,Yr=0,Hs=1,Yu=2,Ku=3,ju=4,Jm=5,Zr=100,Qm=101,eg=102,tg=103,ng=104,ig=200,rg=201,sg=202,ag=203,ah=204,oh=205,og=206,lg=207,cg=208,ug=209,dg=210,fg=211,hg=212,pg=213,mg=214,Bl=0,$l=1,Hl=2,js=3,Gl=4,Vl=5,Wl=6,Xl=7,lh=0,gg=1,_g=2,xi=0,ch=1,uh=2,dh=3,Wc=4,fh=5,hh=6,ph=7,mh=300,ns=301,Js=302,el=303,tl=304,vo=1e3,gi=1001,Zl=1002,Xt=1003,vg=1004,Sa=1005,vn=1006,nl=1007,Bi=1008,Mn=1009,gh=1010,_h=1011,Qs=1012,Xc=1013,ei=1014,zn=1015,ti=1016,Zc=1017,qc=1018,is=1020,vh=35902,xh=35899,yh=1021,Sh=1022,Kn=1023,Wi=1026,$i=1027,Yc=1028,Kc=1029,yr=1030,jc=1031,Jc=1033,to=33776,no=33777,io=33778,ro=33779,ql=35840,Yl=35841,Kl=35842,jl=35843,Jl=36196,Ql=37492,ec=37496,tc=37488,nc=37489,xo=37490,ic=37491,rc=37808,sc=37809,ac=37810,oc=37811,lc=37812,cc=37813,uc=37814,dc=37815,fc=37816,hc=37817,pc=37818,mc=37819,gc=37820,_c=37821,vc=36492,xc=36494,yc=36495,Sc=36283,bc=36284,yo=36285,Mc=36286,xg=3200,Ec=0,yg=1,ki="",Ot="srgb",So="srgb-linear",bo="linear",dt="srgb",il=7680,Sg=519,bg=512,Mg=513,Eg=514,bh=515,wg=516,Tg=517,Mh=518,Eh=519,wh=35044,Ju="300 es",Bn=2e3,ea=2001;function Ag(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Mo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Rg(){const t=Mo("canvas");return t.style.display="block",t}const Qu={};function Eo(...t){const e="THREE."+t.shift();console.log(e,...t)}function Th(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Be(...t){t=Th(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function at(...t){t=Th(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Kr(...t){const e=t.join(" ");e in Qu||(Qu[e]=!0,Be(...t))}function Cg(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Pg={[Bl]:Bl,[Hl]:Wl,[Gl]:Gl,[js]:Vl,[$l]:$l,[Wl]:Hl,[Xl]:Xl,[Vl]:js};class Mr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let ed=1234567;const Gs=Math.PI/180,ta=180/Math.PI;function qi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function Qc(t,e){return(t%e+e)%e}function Ig(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function Lg(t,e,n){return t!==e?(n-t)/(e-t):0}function Vs(t,e,n){return(1-n)*t+n*e}function Ng(t,e,n,i){return Vs(t,e,1-Math.exp(-n*i))}function Dg(t,e=1){return e-Math.abs(Qc(t,e*2)-e)}function Ug(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function Og(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function Fg(t,e){return t+Math.floor(Math.random()*(e-t+1))}function kg(t,e){return t+Math.random()*(e-t)}function zg(t){return t*(.5-Math.random())}function Bg(t){t!==void 0&&(ed=t);let e=ed+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function $g(t){return t*Gs}function Hg(t){return t*ta}function Gg(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function Vg(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ah(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function Wg(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),h=s((e-i)/2),d=a((e-i)/2),f=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*h,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*h,o*c);break;case"ZXZ":t.set(l*h,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*f,o*c);break;case"YXY":t.set(l*f,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*f,o*u,o*c);break;default:Be("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ho(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function eu(t,e){if(e.constructor===Float32Array)return t;const n=Ho(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function tu(t,e){if(e.constructor===Float32Array)return t;const n=Ho(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const wn={DEG2RAD:Gs,RAD2DEG:ta,generateUUID:qi,clamp:je,euclideanModulo:Qc,mapLinear:Ig,inverseLerp:Lg,lerp:Vs,damp:Ng,pingpong:Dg,smoothstep:Ug,smootherstep:Og,randInt:Fg,randFloat:kg,randFloatSpread:zg,seededRandom:Bg,degToRad:$g,radToDeg:Hg,isPowerOfTwo:Gg,ceilPowerOfTwo:Vg,floorPowerOfTwo:Ah,setQuaternionFromProperEuler:Wg,normalize:tu,denormalize:eu},Hu=class Hu{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hu.prototype.isVector2=!0;let We=Hu;class us{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3],d=s[a+0],f=s[a+1],g=s[a+2],v=s[a+3];if(h!==v||l!==d||c!==f||u!==g){let m=l*d+c*f+u*g+h*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){const y=Math.acos(m),w=Math.sin(y);p=Math.sin(p*y)/w,o=Math.sin(o*y)/w,l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+v*o}else{l=l*p+d*o,c=c*p+f*o,u=u*p+g*o,h=h*p+v*o;const y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[a],d=s[a+1],f=s[a+2],g=s[a+3];return e[n]=o*g+u*h+l*f-c*d,e[n+1]=l*g+u*d+c*h-o*f,e[n+2]=c*g+u*f+o*d-l*h,e[n+3]=u*g-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),h=o(s/2),d=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"YXZ":this._x=d*u*h+c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"ZXY":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h-d*f*g;break;case"ZYX":this._x=d*u*h-c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h+d*f*g;break;case"YZX":this._x=d*u*h+c*f*g,this._y=c*f*h+d*u*g,this._z=c*u*g-d*f*h,this._w=c*u*h-d*f*g;break;case"XZY":this._x=d*u*h-c*f*g,this._y=c*f*h-d*u*g,this._z=c*u*g+d*f*h,this._w=c*u*h+d*f*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>h){const f=2*Math.sqrt(1+i-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-i-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Gu=class Gu{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(td.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(td.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*u,this.y=i+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return rl.copy(this).projectOnVector(e),this.sub(rl)}reflect(e){return this.sub(rl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Gu.prototype.isVector3=!0;let O=Gu;const rl=new O,td=new us,Vu=class Vu{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],f=i[5],g=i[8],v=r[0],m=r[3],p=r[6],y=r[1],w=r[4],S=r[7],A=r[2],T=r[5],_=r[8];return s[0]=a*v+o*y+l*A,s[3]=a*m+o*w+l*T,s[6]=a*p+o*S+l*_,s[1]=c*v+u*y+h*A,s[4]=c*m+u*w+h*T,s[7]=c*p+u*S+h*_,s[2]=d*v+f*y+g*A,s[5]=d*m+f*w+g*T,s[8]=d*p+f*S+g*_,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,g=n*h+i*d+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*i)*v,e[2]=(o*i-r*a)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-o*n)*v,e[6]=f*v,e[7]=(i*l-c*n)*v,e[8]=(a*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return Kr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(sl.makeScale(e,n)),this}rotate(e){return Kr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(sl.makeRotation(-e)),this}translate(e,n){return Kr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(sl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vu.prototype.isMatrix3=!0;let Ge=Vu;const sl=new Ge,nd=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),id=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Xg(){const t={enabled:!0,workingColorSpace:So,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===dt&&(r.r=yi(r.r),r.g=yi(r.g),r.b=yi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===dt&&(r.r=jr(r.r),r.g=jr(r.g),r.b=jr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?bo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[So]:{primaries:e,whitePoint:i,transfer:bo,toXYZ:nd,fromXYZ:id,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:i,transfer:dt,toXYZ:nd,fromXYZ:id,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),t}const et=Xg();function yi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function jr(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Pr;class Zg{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Pr===void 0&&(Pr=Mo("canvas")),Pr.width=e.width,Pr.height=e.height;const r=Pr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Pr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Mo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=yi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(yi(n[i]/255)*255):n[i]=yi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qg=0;class nu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qg++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(al(r[a].image)):s.push(al(r[a]))}else s=al(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function al(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Zg.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Yg=0;const ol=new O;class en extends Mr{constructor(e=en.DEFAULT_IMAGE,n=en.DEFAULT_MAPPING,i=gi,r=gi,s=vn,a=Bi,o=Kn,l=Mn,c=en.DEFAULT_ANISOTROPY,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yg++}),this.uuid=qi(),this.name="",this.source=new nu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ol).x}get height(){return this.source.getSize(ol).y}get depth(){return this.source.getSize(ol).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vo:e.x=e.x-Math.floor(e.x);break;case gi:e.x=e.x<0?0:1;break;case Zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vo:e.y=e.y-Math.floor(e.y);break;case gi:e.y=e.y<0?0:1;break;case Zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=mh;en.DEFAULT_ANISOTROPY=1;const Wu=class Wu{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(c+1)/2,S=(f+1)/2,A=(p+1)/2,T=(u+d)/4,_=(h+v)/4,b=(g+m)/4;return w>S&&w>A?w<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(w),r=T/i,s=_/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=b/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=_/s,r=b/s),this.set(i,r,s,n),this}let y=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wu.prototype.isVector4=!0;let Et=Wu;class Kg extends Mr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Et(0,0,e,n),this.scissorTest=!1,this.viewport=new Et(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new en({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:vn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new nu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Kg{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Rh extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jg extends en{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xt,this.minFilter=Xt,this.wrapR=gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const $o=class $o{constructor(e,n,i,r,s,a,o,l,c,u,h,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,h,d,f,g,v,m)}set(e,n,i,r,s,a,o,l,c,u,h,d,f,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $o().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Ir.setFromMatrixColumn(e,0).length(),s=1/Ir.setFromMatrixColumn(e,1).length(),a=1/Ir.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,g=o*u,v=o*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=f+g*c,n[5]=d-v*c,n[9]=-o*l,n[2]=v-d*c,n[6]=g+f*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,g=c*u,v=c*h;n[0]=d+v*o,n[4]=g*o-f,n[8]=a*c,n[1]=a*h,n[5]=a*u,n[9]=-o,n[2]=f*o-g,n[6]=v+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,g=c*u,v=c*h;n[0]=d-v*o,n[4]=-a*h,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*u,n[9]=v-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,g=o*u,v=o*h;n[0]=l*u,n[4]=g*c-f,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=f*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=v-d*h,n[8]=g*h+f,n[1]=h,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=f*h+g,n[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,g=o*l,v=o*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+v,n[5]=a*u,n[9]=f*h-g,n[2]=g*h-f,n[6]=o*u,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Qg)}lookAt(e,n,i){const r=this.elements;return yn.subVectors(e,n),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ri.crossVectors(i,yn),Ri.lengthSq()===0&&(Math.abs(i.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ri.crossVectors(i,yn)),Ri.normalize(),ba.crossVectors(yn,Ri),r[0]=Ri.x,r[4]=ba.x,r[8]=yn.x,r[1]=Ri.y,r[5]=ba.y,r[9]=yn.y,r[2]=Ri.z,r[6]=ba.z,r[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],y=i[3],w=i[7],S=i[11],A=i[15],T=r[0],_=r[4],b=r[8],z=r[12],I=r[1],F=r[5],B=r[9],$=r[13],N=r[2],W=r[6],ie=r[10],X=r[14],he=r[3],K=r[7],ae=r[11],de=r[15];return s[0]=a*T+o*I+l*N+c*he,s[4]=a*_+o*F+l*W+c*K,s[8]=a*b+o*B+l*ie+c*ae,s[12]=a*z+o*$+l*X+c*de,s[1]=u*T+h*I+d*N+f*he,s[5]=u*_+h*F+d*W+f*K,s[9]=u*b+h*B+d*ie+f*ae,s[13]=u*z+h*$+d*X+f*de,s[2]=g*T+v*I+m*N+p*he,s[6]=g*_+v*F+m*W+p*K,s[10]=g*b+v*B+m*ie+p*ae,s[14]=g*z+v*$+m*X+p*de,s[3]=y*T+w*I+S*N+A*he,s[7]=y*_+w*F+S*W+A*K,s[11]=y*b+w*B+S*ie+A*ae,s[15]=y*z+w*$+S*X+A*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],y=l*f-c*d,w=o*f-c*h,S=o*d-l*h,A=a*f-c*u,T=a*d-l*u,_=a*h-o*u;return n*(v*y-m*w+p*S)-i*(g*y-m*A+p*T)+r*(g*w-v*A+p*_)-s*(g*S-v*T+m*_)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],y=n*o-i*a,w=n*l-r*a,S=n*c-s*a,A=i*l-r*o,T=i*c-s*o,_=r*c-s*l,b=u*v-h*g,z=u*m-d*g,I=u*p-f*g,F=h*m-d*v,B=h*p-f*v,$=d*p-f*m,N=y*$-w*B+S*F+A*I-T*z+_*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/N;return e[0]=(o*$-l*B+c*F)*W,e[1]=(r*B-i*$-s*F)*W,e[2]=(v*_-m*T+p*A)*W,e[3]=(d*T-h*_-f*A)*W,e[4]=(l*I-a*$-c*z)*W,e[5]=(n*$-r*I+s*z)*W,e[6]=(m*S-g*_-p*w)*W,e[7]=(u*_-d*S+f*w)*W,e[8]=(a*B-o*I+c*b)*W,e[9]=(i*I-n*B-s*b)*W,e[10]=(g*T-v*S+p*y)*W,e[11]=(h*S-u*T-f*y)*W,e[12]=(o*z-a*F-l*b)*W,e[13]=(n*F-i*z+r*b)*W,e[14]=(v*w-g*A-m*y)*W,e[15]=(u*A-h*w+d*y)*W,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,g=s*h,v=a*u,m=a*h,p=o*h,y=l*c,w=l*u,S=l*h,A=i.x,T=i.y,_=i.z;return r[0]=(1-(v+p))*A,r[1]=(f+S)*A,r[2]=(g-w)*A,r[3]=0,r[4]=(f-S)*T,r[5]=(1-(d+p))*T,r[6]=(m+y)*T,r[7]=0,r[8]=(g+w)*_,r[9]=(m-y)*_,r[10]=(1-(d+v))*_,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Ir.set(r[0],r[1],r[2]).length();const o=Ir.set(r[4],r[5],r[6]).length(),l=Ir.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Un.copy(this);const c=1/a,u=1/o,h=1/l;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,n.setFromRotationMatrix(Un),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Bn,l=!1){const c=this.elements,u=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),f=(i+r)/(i-r);let g,v;if(l)g=s/(a-s),v=a*s/(a-s);else if(o===Bn)g=-(a+s)/(a-s),v=-2*a*s/(a-s);else if(o===ea)g=-a/(a-s),v=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Bn,l=!1){const c=this.elements,u=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),f=-(i+r)/(i-r);let g,v;if(l)g=1/(a-s),v=a/(a-s);else if(o===Bn)g=-2/(a-s),v=-(a+s)/(a-s);else if(o===ea)g=-1/(a-s),v=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};$o.prototype.isMatrix4=!0;let pt=$o;const Ir=new O,Un=new pt,Jg=new O(0,0,0),Qg=new O(1,1,1),Ri=new O,ba=new O,yn=new O,rd=new pt,sd=new us;class $n{constructor(e=0,n=0,i=0,r=$n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(n){case"XYZ":this._y=Math.asin(je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return rd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return sd.setFromEuler(this),this.setFromQuaternion(sd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$n.DEFAULT_ORDER="XYZ";class Ch{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e0=0;const ad=new O,Lr=new us,oi=new pt,Ma=new O,ys=new O,t0=new O,n0=new us,od=new O(1,0,0),ld=new O(0,1,0),cd=new O(0,0,1),ud={type:"added"},i0={type:"removed"},Nr={type:"childadded",child:null},ll={type:"childremoved",child:null};class Ht extends Mr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new O,n=new $n,i=new us,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ge}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ch,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,n){return Lr.setFromAxisAngle(e,n),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(od,e)}rotateY(e){return this.rotateOnAxis(ld,e)}rotateZ(e){return this.rotateOnAxis(cd,e)}translateOnAxis(e,n){return ad.copy(e).applyQuaternion(this.quaternion),this.position.add(ad.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(od,e)}translateY(e){return this.translateOnAxis(ld,e)}translateZ(e){return this.translateOnAxis(cd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ma.copy(e):Ma.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ys,Ma,this.up):oi.lookAt(Ma,ys,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(oi),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ud),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(i0),ll.child=e,this.dispatchEvent(ll),ll.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ud),Nr.child=e,this.dispatchEvent(Nr),Nr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,t0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,n0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qn extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r0={type:"move"};class cl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(r0)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new qn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ci={h:0,s:0,l:0},Ea={h:0,s:0,l:0};function ul(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=Qc(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=ul(a,s,e+1/3),this.g=ul(a,s,e),this.b=ul(a,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=Ot){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ot){const i=Ph[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}copyLinearToSRGB(e){return this.r=jr(e.r),this.g=jr(e.g),this.b=jr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return et.workingToColorSpace(jt.copy(this),e),Math.round(je(jt.r*255,0,255))*65536+Math.round(je(jt.g*255,0,255))*256+Math.round(je(jt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Ot){et.workingToColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==Ot?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ci),this.setHSL(Ci.h+e,Ci.s+n,Ci.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ci),e.getHSL(Ea);const i=Vs(Ci.h,Ea.h,n),r=Vs(Ci.s,Ea.s,n),s=Vs(Ci.l,Ea.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Ze;Ze.NAMES=Ph;class iu{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Ze(e),this.near=n,this.far=i}clone(){return new iu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class s0 extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $n,this.environmentIntensity=1,this.environmentRotation=new $n,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const On=new O,li=new O,dl=new O,ci=new O,Dr=new O,Ur=new O,dd=new O,fl=new O,hl=new O,pl=new O,ml=new Et,gl=new Et,_l=new Et;class Ln{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),li.subVectors(i,n),dl.subVectors(e,n);const a=On.dot(On),o=On.dot(li),l=On.dot(dl),c=li.dot(li),u=li.dot(dl),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,n),gl.fromBufferAttribute(e,i),_l.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(ml,s.x),a.addScaledVector(gl,s.y),a.addScaledVector(_l,s.z),a}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),li.subVectors(e,n),On.cross(li).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),li.subVectors(this.a,this.b),On.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ln.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Ln.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Ln.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Ln.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ln.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Dr.subVectors(r,i),Ur.subVectors(s,i),fl.subVectors(e,i);const l=Dr.dot(fl),c=Ur.dot(fl);if(l<=0&&c<=0)return n.copy(i);hl.subVectors(e,r);const u=Dr.dot(hl),h=Ur.dot(hl);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(Dr,a);pl.subVectors(e,s);const f=Dr.dot(pl),g=Ur.dot(pl);if(g>=0&&f<=g)return n.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Ur,o);const m=u*g-f*h;if(m<=0&&h-u>=0&&f-g>=0)return dd.subVectors(s,r),o=(h-u)/(h-u+(f-g)),n.copy(r).addScaledVector(dd,o);const p=1/(m+v+d);return a=v*p,o=d*p,n.copy(i).addScaledVector(Dr,a).addScaledVector(Ur,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Er{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Fn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Fn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Fn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Fn):Fn.fromBufferAttribute(s,a),Fn.applyMatrix4(e.matrixWorld),this.expandByPoint(Fn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wa.copy(i.boundingBox)),wa.applyMatrix4(e.matrixWorld),this.union(wa)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fn),Fn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Ta.subVectors(this.max,Ss),Or.subVectors(e.a,Ss),Fr.subVectors(e.b,Ss),kr.subVectors(e.c,Ss),Pi.subVectors(Fr,Or),Ii.subVectors(kr,Fr),rr.subVectors(Or,kr);let n=[0,-Pi.z,Pi.y,0,-Ii.z,Ii.y,0,-rr.z,rr.y,Pi.z,0,-Pi.x,Ii.z,0,-Ii.x,rr.z,0,-rr.x,-Pi.y,Pi.x,0,-Ii.y,Ii.x,0,-rr.y,rr.x,0];return!vl(n,Or,Fr,kr,Ta)||(n=[1,0,0,0,1,0,0,0,1],!vl(n,Or,Fr,kr,Ta))?!1:(Aa.crossVectors(Pi,Ii),n=[Aa.x,Aa.y,Aa.z],vl(n,Or,Fr,kr,Ta))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ui=[new O,new O,new O,new O,new O,new O,new O,new O],Fn=new O,wa=new Er,Or=new O,Fr=new O,kr=new O,Pi=new O,Ii=new O,rr=new O,Ss=new O,Ta=new O,Aa=new O,sr=new O;function vl(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){sr.fromArray(t,s);const o=r.x*Math.abs(sr.x)+r.y*Math.abs(sr.y)+r.z*Math.abs(sr.z),l=e.dot(sr),c=n.dot(sr),u=i.dot(sr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Pt=new O,Ra=new We;let a0=0;class Si extends Mr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a0++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=wh,this.updateRanges=[],this.gpuType=zn,this.version=0,this._normalizationScale=e!==void 0?Ho(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ra.fromBufferAttribute(this,n),Ra.applyMatrix3(e),this.setXY(n,Ra.x,Ra.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix3(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyMatrix4(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.applyNormalMatrix(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Pt.fromBufferAttribute(this,n),Pt.transformDirection(e),this.setXYZ(n,Pt.x,Pt.y,Pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):eu(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):tu(e,this.array)}}class Ih extends Si{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Lh extends Si{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Gt extends Si{constructor(e,n,i){super(new Float32Array(e),n,i)}}const o0=new Er,bs=new O,xl=new O;class fa{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):o0.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);const n=bs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(xl)),this.expandByPoint(bs.copy(e.center).sub(xl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let l0=0;const An=new pt,yl=new Ht,zr=new O,Sn=new Er,Ms=new Er,$t=new O;class Gn extends Mr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:l0++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ag(e)?Lh:Ih)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return yl.lookAt(e),yl.updateMatrix(),this.applyMatrix4(yl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zr).negate(),this.translate(zr.x,zr.y,zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Er);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(Sn.min,Ms.min),Sn.expandByPoint($t),$t.addVectors(Sn.max,Ms.max),Sn.expandByPoint($t)):(Sn.expandByPoint(Ms.min),Sn.expandByPoint(Ms.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)$t.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared($t));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)$t.fromBufferAttribute(o,c),l&&(zr.fromBufferAttribute(e,c),$t.add(zr)),r=Math.max(r,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Si(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let z=0;z<i.count;z++)o[z]=new O,l[z]=new O;const u=new O,h=new O,d=new O,f=new We,g=new We,v=new We,m=new O,p=new O;function y(z,I,F){c[z]=c[I]=c[F]=1,u.fromBufferAttribute(i,z),h.fromBufferAttribute(i,I),d.fromBufferAttribute(i,F),f.fromBufferAttribute(s,z),g.fromBufferAttribute(s,I),v.fromBufferAttribute(s,F),h.sub(u),d.sub(u),g.sub(f),v.sub(f);const B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(m.copy(h).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(B),p.copy(d).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(B),o[z].add(m),o[I].add(m),o[F].add(m),l[z].add(p),l[I].add(p),l[F].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let z=0,I=w.length;z<I;++z){const F=w[z],B=F.start,$=F.count;for(let N=B,W=B+$;N<W;N+=3)y(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new O,A=new O,T=new O,_=new O;function b(z){T.fromBufferAttribute(r,z),_.copy(T);const I=o[z];S.copy(I),S.sub(T.multiplyScalar(T.dot(I))).normalize(),A.crossVectors(_,I);const B=A.dot(l[z])<0?-1:1;a.setXYZW(z,S.x,S.y,S.z,B)}for(let z=0,I=i.count;z<I;++z)c[z]&&b(z);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Si(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,a=new O,o=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=n.count;d<f;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)$t.fromBufferAttribute(e,n),$t.normalize(),e.setXYZ(n,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[f++]}return new Si(d,u,h)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,i);l.push(f)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class c0{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=wh,this.updateRanges=[],this.version=0,this.uuid=qi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=fd(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=fd(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function fd(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=qi()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const rn=new O;class wo{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Ho(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyMatrix4(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.applyNormalMatrix(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)rn.fromBufferAttribute(this,n),rn.transformDirection(e),this.setXYZ(n,rn.x,rn.y,rn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Eo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Si(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new wo(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Eo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):eu(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):tu(e,this.data.array)}}const Sl=new O,u0=new O,d0=new Ge;class Oi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Sl.subVectors(i,n).cross(u0.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Sl),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||d0.getNormalMatrix(e),r=this.coplanarPoint(Sl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let f0=0;class ds extends Mr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Hs,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ah,this.blendDst=oh,this.blendEquation=Zr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=il,this.stencilZFail=il,this.stencilZPass=il,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Oi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new We().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class so extends ds{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Br;const Es=new O,$r=new O,Hr=new O,Gr=new We,ws=new We,Nh=new pt,Ca=new O,Ts=new O,Pa=new O,hd=new We,bl=new We,pd=new We;class Ml extends Ht{constructor(e=new so){if(super(),this.isSprite=!0,this.type="Sprite",Br===void 0){Br=new Gn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new c0(n,5);Br.setIndex([0,1,2,0,2,3]),Br.setAttribute("position",new wo(i,3,0,!1)),Br.setAttribute("uv",new wo(i,2,3,!1))}this.geometry=Br,this.material=e,this.center=new We(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&at('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),$r.setFromMatrixScale(this.matrixWorld),Nh.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Hr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&$r.multiplyScalar(-Hr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;Ia(Ca.set(-.5,-.5,0),Hr,a,$r,r,s),Ia(Ts.set(.5,-.5,0),Hr,a,$r,r,s),Ia(Pa.set(.5,.5,0),Hr,a,$r,r,s),hd.set(0,0),bl.set(1,0),pd.set(1,1);let o=e.ray.intersectTriangle(Ca,Ts,Pa,!1,Es);if(o===null&&(Ia(Ts.set(-.5,.5,0),Hr,a,$r,r,s),bl.set(0,1),o=e.ray.intersectTriangle(Ca,Pa,Ts,!1,Es),o===null))return;const l=e.ray.origin.distanceTo(Es);l<e.near||l>e.far||n.push({distance:l,point:Es.clone(),uv:Ln.getInterpolation(Es,Ca,Ts,Pa,hd,bl,pd,new We),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function Ia(t,e,n,i,r,s){Gr.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(ws.x=s*Gr.x-r*Gr.y,ws.y=r*Gr.x+s*Gr.y):ws.copy(Gr),t.copy(e),t.x+=ws.x,t.y+=ws.y,t.applyMatrix4(Nh)}const di=new O,El=new O,La=new O,Na=new O;class h0{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,di)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=di.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(di.copy(this.origin).addScaledVector(this.direction,n),di.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){El.copy(e).add(n).multiplyScalar(.5),La.copy(n).sub(e).normalize(),Na.copy(this.origin).sub(El);const s=e.distanceTo(n)*.5,a=-this.direction.dot(La),o=Na.dot(this.direction),l=-Na.dot(La),c=Na.lengthSq(),u=Math.abs(1-a*a);let h,d,f,g;if(u>0)if(h=a*l-o,d=a*o-l,g=s*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(El).addScaledVector(La,d),f}intersectSphere(e,n){if(e.radius<0)return null;di.subVectors(e.center,this.origin);const i=di.dot(this.direction),r=di.dot(di)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,di)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,h=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=n.x-a.x,v=n.y-a.y,m=n.z-a.z,p=i.x-a.x,y=i.y-a.y,w=i.z-a.z,S=Math.abs(l),A=Math.abs(c),T=Math.abs(u);let _,b,z,I,F,B,$,N,W,ie,X,he;if(S>=A&&S>=T?(z=l,B=h,W=g,he=p,l>=0?(_=c,b=u,I=d,F=f,$=v,N=m,ie=y,X=w):(_=u,b=c,I=f,F=d,$=m,N=v,ie=w,X=y)):A>=T?(z=c,B=d,W=v,he=y,c>=0?(_=u,b=l,I=f,F=h,$=m,N=g,ie=w,X=p):(_=l,b=u,I=h,F=f,$=g,N=m,ie=p,X=w)):(z=u,B=f,W=m,he=w,u>=0?(_=l,b=c,I=h,F=d,$=g,N=v,ie=p,X=y):(_=c,b=l,I=d,F=h,$=v,N=g,ie=y,X=p)),z===0)return null;const K=_/z,ae=b/z,de=1/z,Ie=I-K*B,$e=F-ae*B,re=$-K*W,xe=N-ae*W,Re=ie-K*he,Oe=X-ae*he,Ee=Re*xe-Oe*re,He=Ie*Oe-$e*Re,vt=re*$e-xe*Ie;if(r){if(Ee<0||He<0||vt<0)return null}else if((Ee<0||He<0||vt<0)&&(Ee>0||He>0||vt>0))return null;const ke=Ee+He+vt;if(ke===0)return null;const ot=de*(Ee*B+He*W+vt*he);return(ke>0?ot<0:ot>0)?null:this.at(ot/ke,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ur extends ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.combine=lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const md=new pt,ar=new h0,Da=new fa,gd=new O,Ua=new O,Oa=new O,Fa=new O,wl=new O,ka=new O,_d=new O,za=new O;class _t extends Ht{constructor(e=new Gn,n=new ur){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){ka.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(wl.fromBufferAttribute(h,e),a?ka.addScaledVector(wl,u):ka.addScaledVector(wl.sub(n),u))}n.add(ka)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),ar.copy(e.ray).recast(e.near),!(Da.containsPoint(ar.origin)===!1&&(ar.intersectSphere(Da,gd)===null||ar.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(s).invert(),ar.copy(e.ray).applyMatrix4(md),!(i.boundingBox!==null&&ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=w;S<A;S+=3){const T=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);r=Ba(this,p,e,i,c,u,h,T,_,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=o.getX(m),w=o.getX(m+1),S=o.getX(m+2);r=Ba(this,a,e,i,c,u,h,y,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=a[m.materialIndex],y=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let S=y,A=w;S<A;S+=3){const T=S,_=S+1,b=S+2;r=Ba(this,p,e,i,c,u,h,T,_,b),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const y=m,w=m+1,S=m+2;r=Ba(this,a,e,i,c,u,h,y,w,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function p0(t,e,n,i,r,s,a,o){let l;if(e.side===cn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===xr,o),l===null)return null;za.copy(o),za.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(za);return c<n.near||c>n.far?null:{distance:c,point:za.clone(),object:t}}function Ba(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ua),t.getVertexPosition(l,Oa),t.getVertexPosition(c,Fa);const u=p0(t,e,n,i,Ua,Oa,Fa,_d);if(u){const h=new O;Ln.getBarycoord(_d,Ua,Oa,Fa,h),r&&(u.uv=Ln.getInterpolatedAttribute(r,o,l,c,h,new We)),s&&(u.uv1=Ln.getInterpolatedAttribute(s,o,l,c,h,new We)),a&&(u.normal=Ln.getInterpolatedAttribute(a,o,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new O,materialIndex:0};Ln.getNormal(Ua,Oa,Fa,d.normal),u.face=d,u.barycoord=h}return u}class Dh extends en{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Xt,u=Xt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vd extends Si{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Vr=new pt,xd=new pt,$a=[],yd=new Er,m0=new pt,As=new _t,Rs=new fa;class g0 extends _t{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new vd(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,m0)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Vr),yd.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(yd)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new fa),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Vr),Rs.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(Rs)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(As.geometry=this.geometry,As.material=this.material,As.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rs.copy(this.boundingSphere),Rs.applyMatrix4(i),e.ray.intersectsSphere(Rs)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Vr),xd.multiplyMatrices(i,Vr),As.matrixWorld=xd,As.raycast(e,$a);for(let a=0,o=$a.length;a<o;a++){const l=$a[a];l.instanceId=s,l.object=this,n.push(l)}$a.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new vd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Dh(new Float32Array(r*this.count),r,this.count,Yc,zn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const or=new fa,_0=new We(.5,.5),Ha=new O;class na{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,s=new Oi,a=new Oi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],g=s[8],v=s[9],m=s[10],p=s[11],y=s[12],w=s[13],S=s[14],A=s[15];if(r[0].setComponents(c-a,f-u,p-g,A-y).normalize(),r[1].setComponents(c+a,f+u,p+g,A+y).normalize(),r[2].setComponents(c+o,f+h,p+v,A+w).normalize(),r[3].setComponents(c-o,f-h,p-v,A-w).normalize(),i)r[4].setComponents(l,d,m,S).normalize(),r[5].setComponents(c-l,f-d,p-m,A-S).normalize();else if(r[4].setComponents(c-l,f-d,p-m,A-S).normalize(),n===Bn)r[5].setComponents(c+l,f+d,p+m,A+S).normalize();else if(n===ea)r[5].setComponents(l,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(or)}intersectsSprite(e){or.center.set(0,0,0);const n=_0.distanceTo(e.center);return or.radius=.7071067811865476+n,or.applyMatrix4(e.matrixWorld),this.intersectsSphere(or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ha.x=r.normal.x>0?e.max.x:e.min.x,Ha.y=r.normal.y>0?e.max.y:e.min.y,Ha.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ha)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const Sd=new pt;class ru{constructor(){this.coordinateSystem=Bn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];Sd.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new na),i[r].setFromProjectionMatrix(Sd,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new na),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new ru().copy(this)}}class Uh extends en{constructor(e=[],n=ns,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lr extends en{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends en{constructor(e,n,i=ei,r,s,a,o=Xt,l=Xt,c,u=Wi,h=1){if(u!==Wi&&u!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new nu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Oh extends rs{constructor(e,n=ei,i=ns,r,s,a=Xt,o=Xt,l,c=Wi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fh extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wr extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2));function g(v,m,p,y,w,S,A,T,_,b,z){const I=S/_,F=A/b,B=S/2,$=A/2,N=T/2,W=_+1,ie=b+1;let X=0,he=0;const K=new O;for(let ae=0;ae<ie;ae++){const de=ae*F-$;for(let Ie=0;Ie<W;Ie++){const $e=Ie*I-B;K[v]=$e*y,K[m]=de*w,K[p]=N,c.push(K.x,K.y,K.z),K[v]=0,K[m]=0,K[p]=T>0?1:-1,u.push(K.x,K.y,K.z),h.push(Ie/_),h.push(1-ae/b),X+=1}}for(let ae=0;ae<b;ae++)for(let de=0;de<_;de++){const Ie=d+de+W*ae,$e=d+de+W*(ae+1),re=d+(de+1)+W*(ae+1),xe=d+(de+1)+W*ae;l.push(Ie,$e,xe),l.push($e,re,xe),he+=6}o.addGroup(f,he,z),f+=he,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ia extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let g=0;const v=[],m=i/2;let p=0;y(),a===!1&&(e>0&&w(!0),n>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new Gt(h,3)),this.setAttribute("normal",new Gt(d,3)),this.setAttribute("uv",new Gt(f,2));function y(){const S=new O,A=new O;let T=0;const _=(n-e)/i;for(let b=0;b<=s;b++){const z=[],I=b/s,F=I*(n-e)+e;for(let B=0;B<=r;B++){const $=B/r,N=$*l+o,W=Math.sin(N),ie=Math.cos(N);A.x=F*W,A.y=-I*i+m,A.z=F*ie,h.push(A.x,A.y,A.z),S.set(W,_,ie).normalize(),d.push(S.x,S.y,S.z),f.push($,1-I),z.push(g++)}v.push(z)}for(let b=0;b<r;b++)for(let z=0;z<s;z++){const I=v[z][b],F=v[z+1][b],B=v[z+1][b+1],$=v[z][b+1];(e>0||z!==0)&&(u.push(I,F,$),T+=3),(n>0||z!==s-1)&&(u.push(F,B,$),T+=3)}c.addGroup(p,T,0),p+=T}function w(S){const A=g,T=new We,_=new O;let b=0;const z=S===!0?e:n,I=S===!0?1:-1;for(let B=1;B<=r;B++)h.push(0,m*I,0),d.push(0,I,0),f.push(.5,.5),g++;const F=g;for(let B=0;B<=r;B++){const N=B/r*l+o,W=Math.cos(N),ie=Math.sin(N);_.x=z*ie,_.y=m*I,_.z=z*W,h.push(_.x,_.y,_.z),d.push(0,I,0),T.x=W*.5+.5,T.y=ie*.5*I+.5,f.push(T.x,T.y),g++}for(let B=0;B<r;B++){const $=A+B,N=F+B;S===!0?u.push(N,N+1,$):u.push(N+1,N,$),b+=3}c.addGroup(p,b,S===!0?1:2),p+=b}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class su extends ia{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new su(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class pr extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=n/l,f=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const y=p*d-a;for(let w=0;w<c;w++){const S=w*h-s;g.push(S,-y,0),v.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<o;y++){const w=y+c*p,S=y+c*(p+1),A=y+1+c*(p+1),T=y+1+c*p;f.push(w,S,T),f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pr(e.width,e.height,e.widthSegments,e.heightSegments)}}class au extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new O,d=new O,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){const y=[],w=p/i,S=a+w*o,A=e*Math.cos(S),T=Math.sqrt(e*e-A*A);let _=0;p===0&&a===0?_=.5/n:p===i&&l===Math.PI&&(_=-.5/n);for(let b=0;b<=n;b++){const z=b/n,I=r+z*s;h.x=-T*Math.cos(I),h.y=A,h.z=T*Math.sin(I),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(z+_,1-w),y.push(c++)}u.push(y)}for(let p=0;p<i;p++)for(let y=0;y<n;y++){const w=u[p][y+1],S=u[p][y],A=u[p+1][y],T=u[p+1][y+1];(p!==0||a>0)&&f.push(w,S,T),(p!==i-1||l<Math.PI)&&f.push(S,A,T)}this.setIndex(f),this.setAttribute("position",new Gt(g,3)),this.setAttribute("normal",new Gt(v,3)),this.setAttribute("uv",new Gt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ws extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],h=[],d=new O,f=new O,g=new O;for(let v=0;v<=i;v++){const m=a+v/i*o;for(let p=0;p<=r;p++){const y=p/r*s;f.x=(e+n*Math.cos(m))*Math.cos(y),f.y=(e+n*Math.cos(m))*Math.sin(y),f.z=n*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(y),d.y=e*Math.sin(y),g.subVectors(f,d).normalize(),u.push(g.x,g.y,g.z),h.push(p/r),h.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=r;m++){const p=(r+1)*v+m-1,y=(r+1)*(v-1)+m-1,w=(r+1)*(v-1)+m,S=(r+1)*v+m;l.push(p,y,S),l.push(y,w,S)}this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(u,3)),this.setAttribute("uv",new Gt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ws(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ss(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(bd(r))r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(bd(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function on(t){const e={};for(let n=0;n<t.length;n++){const i=ss(t[n]);for(const r in i)e[r]=i[r]}return e}function bd(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function v0(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function kh(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const x0={clone:ss,merge:on};var y0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sr extends ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y0,this.fragmentShader=S0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ss(e.uniforms),this.uniformsGroups=v0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new Ze().setHex(r.value);break;case"v2":this.uniforms[i].value=new We().fromArray(r.value);break;case"v3":this.uniforms[i].value=new O().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Et().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ge().fromArray(r.value);break;case"m4":this.uniforms[i].value=new pt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class b0 extends Sr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ao extends ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ec,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $n,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class M0 extends ao{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new We(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return je(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Kr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Kr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class E0 extends ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class w0 extends ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zh extends Ht{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class T0 extends zh{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const Tl=new pt,Md=new O,Ed=new O;class A0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Mn,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;Md.setFromMatrixPosition(e.matrixWorld),n.position.copy(Md),Ed.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ed),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){Tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Tl,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===ea||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(Tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ga=new O,Va=new us,Wn=new O;class Bh extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=Bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ga,Va,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Ga,Va,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ga,Va,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Li=new O,wd=new We,Td=new We;class kn extends Bh{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ta*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ta*2*Math.atan(Math.tan(Gs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Li.x,Li.y).multiplyScalar(-e/Li.z),Li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Li.x,Li.y).multiplyScalar(-e/Li.z)}getViewSize(e,n){return this.getViewBounds(e,wd,Td),n.subVectors(Td,wd)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Gs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class $h extends Bh{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class R0 extends A0{constructor(){super(new $h(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ad extends zh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new R0}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const Wr=-90,Xr=1;class wc extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Wr,Xr,e,n);r.layers=this.layers,this.add(r);const s=new kn(Wr,Xr,e,n);s.layers=this.layers,this.add(s);const a=new kn(Wr,Xr,e,n);a.layers=this.layers,this.add(a);const o=new kn(Wr,Xr,e,n);o.layers=this.layers,this.add(o);const l=new kn(Wr,Xr,e,n);l.layers=this.layers,this.add(l);const c=new kn(Wr,Xr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Bn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(h,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class C0 extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Rd(t,e,n,i){const r=P0(i);switch(n){case yh:return t*e;case Yc:return t*e/r.components*r.byteLength;case Kc:return t*e/r.components*r.byteLength;case yr:return t*e*2/r.components*r.byteLength;case jc:return t*e*2/r.components*r.byteLength;case Sh:return t*e*3/r.components*r.byteLength;case Kn:return t*e*4/r.components*r.byteLength;case Jc:return t*e*4/r.components*r.byteLength;case to:case no:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case io:case ro:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Yl:case jl:return Math.max(t,16)*Math.max(e,8)/4;case ql:case Kl:return Math.max(t,8)*Math.max(e,8)/2;case Jl:case Ql:case tc:case nc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ec:case xo:case ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case rc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case sc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ac:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case oc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case lc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case cc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case uc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case dc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case fc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case hc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case pc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case mc:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case gc:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case _c:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vc:case xc:case yc:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Sc:case bc:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yo:case Mc:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function P0(t){switch(t){case Mn:case gh:return{byteLength:1,components:1};case Qs:case _h:case ti:return{byteLength:2,components:1};case Zc:case qc:return{byteLength:2,components:4};case ei:case Xc:case zn:return{byteLength:4,components:1};case vh:case xh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function Hh(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function I0(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=t.SHORT;else if(c instanceof Uint32Array)f=t.UNSIGNED_INT;else if(c instanceof Int32Array)f=t.INT;else if(c instanceof Int8Array)f=t.BYTE;else if(c instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,u);else{h.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<h.length;f++){const g=h[d],v=h[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let f=0,g=h.length;f<g;f++){const v=h[f];t.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var L0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N0=`#ifdef USE_ALPHAHASH
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
#endif`,D0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,U0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,k0=`#ifdef USE_AOMAP
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
#endif`,z0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B0=`#ifdef USE_BATCHING
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
#endif`,$0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,W0=`#ifdef USE_IRIDESCENCE
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
#endif`,X0=`#ifdef USE_BUMPMAP
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
#endif`,Z0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,j0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,J0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Q0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,e_=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,t_=`#define PI 3.141592653589793
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
} // validated`,n_=`vec3 transformedNormal = objectNormal;
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
#endif`,i_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,a_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_="gl_FragColor = linearToOutputTexel( gl_FragColor );",l_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c_=`#ifdef USE_ENVMAP
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
#endif`,u_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,d_=`#ifdef USE_ENVMAP
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
#endif`,f_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,h_=`#ifdef USE_ENVMAP
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
#endif`,p_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,__=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_=`#ifdef USE_GRADIENTMAP
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
}`,x_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,b_=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,M_=`#ifdef USE_ENVMAP
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
#endif`,E_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R_=`PhysicalMaterial material;
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
#endif`,C_=`uniform sampler2D dfgLUT;
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
}`,P_=`
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
#endif`,I_=`#if defined( RE_IndirectDiffuse )
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
#endif`,L_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N_=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,D_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,U_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,O_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,k_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,z_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,B_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$_=`#if defined( USE_POINTS_UV )
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
#endif`,H_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,G_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,V_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_=`#if defined( USE_MORPHCOLORS )
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
#endif`,X_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z_=`#ifdef USE_MORPHTARGETS
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
#endif`,q_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,j_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ev=`#ifdef USE_NORMALMAP
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
#endif`,tv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,av=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ov=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gv=`float getShadowMask() {
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
}`,_v=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vv=`#ifdef USE_SKINNING
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
#endif`,xv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yv=`#ifdef USE_SKINNING
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
#endif`,Sv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ev=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wv=`#ifdef USE_TRANSMISSION
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
#endif`,Tv=`#ifdef USE_TRANSMISSION
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
#endif`,Av=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lv=`uniform sampler2D t2D;
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
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dv=`uniform float backgroundBlurriness;
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
}`,Uv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ov=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fv=`#include <common>
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
}`,kv=`#if DEPTH_PACKING == 3200
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
}`,zv=`#define DISTANCE
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
}`,Bv=`#define DISTANCE
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
}`,$v=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gv=`uniform float scale;
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
}`,Vv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,Xv=`uniform vec3 diffuse;
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
}`,Zv=`#define LAMBERT
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
}`,qv=`#define LAMBERT
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
}`,Yv=`#define MATCAP
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
}`,Kv=`#define MATCAP
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
}`,jv=`#define NORMAL
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
}`,Jv=`#define NORMAL
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
}`,Qv=`#define PHONG
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
}`,ex=`#define PHONG
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
}`,tx=`#define STANDARD
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
}`,nx=`#define STANDARD
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
}`,ix=`#define TOON
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
}`,rx=`#define TOON
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
}`,sx=`uniform float size;
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#include <common>
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
}`,lx=`uniform vec3 color;
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
}`,cx=`uniform float rotation;
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
}`,ux=`uniform vec3 diffuse;
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
}`,Xe={alphahash_fragment:L0,alphahash_pars_fragment:N0,alphamap_fragment:D0,alphamap_pars_fragment:U0,alphatest_fragment:O0,alphatest_pars_fragment:F0,aomap_fragment:k0,aomap_pars_fragment:z0,batching_pars_vertex:B0,batching_vertex:$0,begin_vertex:H0,beginnormal_vertex:G0,bsdfs:V0,iridescence_fragment:W0,bumpmap_pars_fragment:X0,clipping_planes_fragment:Z0,clipping_planes_pars_fragment:q0,clipping_planes_pars_vertex:Y0,clipping_planes_vertex:K0,color_fragment:j0,color_pars_fragment:J0,color_pars_vertex:Q0,color_vertex:e_,common:t_,defaultnormal_vertex:n_,displacementmap_pars_vertex:i_,displacementmap_vertex:r_,emissivemap_fragment:s_,emissivemap_pars_fragment:a_,colorspace_fragment:o_,colorspace_pars_fragment:l_,envmap_fragment:c_,envmap_common_pars_fragment:u_,envmap_pars_fragment:d_,envmap_pars_vertex:f_,envmap_physical_pars_fragment:M_,envmap_vertex:h_,fog_vertex:p_,fog_pars_vertex:m_,fog_fragment:g_,fog_pars_fragment:__,gradientmap_pars_fragment:v_,lightmap_pars_fragment:x_,lights_lambert_fragment:y_,lights_lambert_pars_fragment:S_,lights_pars_begin:b_,lights_toon_fragment:E_,lights_toon_pars_fragment:w_,lights_phong_fragment:T_,lights_phong_pars_fragment:A_,lights_physical_fragment:R_,lights_physical_pars_fragment:C_,lights_fragment_begin:P_,lights_fragment_maps:I_,lights_fragment_end:L_,lightprobes_pars_fragment:N_,logdepthbuf_fragment:D_,logdepthbuf_pars_fragment:U_,logdepthbuf_pars_vertex:O_,logdepthbuf_vertex:F_,map_fragment:k_,map_pars_fragment:z_,map_particle_fragment:B_,map_particle_pars_fragment:$_,metalnessmap_fragment:H_,metalnessmap_pars_fragment:G_,morphinstance_vertex:V_,morphcolor_vertex:W_,morphnormal_vertex:X_,morphtarget_pars_vertex:Z_,morphtarget_vertex:q_,normal_fragment_begin:Y_,normal_fragment_maps:K_,normal_pars_fragment:j_,normal_pars_vertex:J_,normal_vertex:Q_,normalmap_pars_fragment:ev,clearcoat_normal_fragment_begin:tv,clearcoat_normal_fragment_maps:nv,clearcoat_pars_fragment:iv,iridescence_pars_fragment:rv,opaque_fragment:sv,packing:av,premultiplied_alpha_fragment:ov,project_vertex:lv,dithering_fragment:cv,dithering_pars_fragment:uv,roughnessmap_fragment:dv,roughnessmap_pars_fragment:fv,shadowmap_pars_fragment:hv,shadowmap_pars_vertex:pv,shadowmap_vertex:mv,shadowmask_pars_fragment:gv,skinbase_vertex:_v,skinning_pars_vertex:vv,skinning_vertex:xv,skinnormal_vertex:yv,specularmap_fragment:Sv,specularmap_pars_fragment:bv,tonemapping_fragment:Mv,tonemapping_pars_fragment:Ev,transmission_fragment:wv,transmission_pars_fragment:Tv,uv_pars_fragment:Av,uv_pars_vertex:Rv,uv_vertex:Cv,worldpos_vertex:Pv,background_vert:Iv,background_frag:Lv,backgroundCube_vert:Nv,backgroundCube_frag:Dv,cube_vert:Uv,cube_frag:Ov,depth_vert:Fv,depth_frag:kv,distance_vert:zv,distance_frag:Bv,equirect_vert:$v,equirect_frag:Hv,linedashed_vert:Gv,linedashed_frag:Vv,meshbasic_vert:Wv,meshbasic_frag:Xv,meshlambert_vert:Zv,meshlambert_frag:qv,meshmatcap_vert:Yv,meshmatcap_frag:Kv,meshnormal_vert:jv,meshnormal_frag:Jv,meshphong_vert:Qv,meshphong_frag:ex,meshphysical_vert:tx,meshphysical_frag:nx,meshtoon_vert:ix,meshtoon_frag:rx,points_vert:sx,points_frag:ax,shadow_vert:ox,shadow_frag:lx,sprite_vert:cx,sprite_frag:ux},we={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Yn={basic:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.fog]),vertexShader:Xe.meshbasic_vert,fragmentShader:Xe.meshbasic_frag},lambert:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Xe.meshlambert_vert,fragmentShader:Xe.meshlambert_frag},phong:{uniforms:on([we.common,we.specularmap,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.fog,we.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphong_vert,fragmentShader:Xe.meshphong_frag},standard:{uniforms:on([we.common,we.envmap,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.roughnessmap,we.metalnessmap,we.fog,we.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag},toon:{uniforms:on([we.common,we.aomap,we.lightmap,we.emissivemap,we.bumpmap,we.normalmap,we.displacementmap,we.gradientmap,we.fog,we.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Xe.meshtoon_vert,fragmentShader:Xe.meshtoon_frag},matcap:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,we.fog,{matcap:{value:null}}]),vertexShader:Xe.meshmatcap_vert,fragmentShader:Xe.meshmatcap_frag},points:{uniforms:on([we.points,we.fog]),vertexShader:Xe.points_vert,fragmentShader:Xe.points_frag},dashed:{uniforms:on([we.common,we.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xe.linedashed_vert,fragmentShader:Xe.linedashed_frag},depth:{uniforms:on([we.common,we.displacementmap]),vertexShader:Xe.depth_vert,fragmentShader:Xe.depth_frag},normal:{uniforms:on([we.common,we.bumpmap,we.normalmap,we.displacementmap,{opacity:{value:1}}]),vertexShader:Xe.meshnormal_vert,fragmentShader:Xe.meshnormal_frag},sprite:{uniforms:on([we.sprite,we.fog]),vertexShader:Xe.sprite_vert,fragmentShader:Xe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xe.background_vert,fragmentShader:Xe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:Xe.backgroundCube_vert,fragmentShader:Xe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xe.cube_vert,fragmentShader:Xe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xe.equirect_vert,fragmentShader:Xe.equirect_frag},distance:{uniforms:on([we.common,we.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xe.distance_vert,fragmentShader:Xe.distance_frag},shadow:{uniforms:on([we.lights,we.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Xe.shadow_vert,fragmentShader:Xe.shadow_frag}};Yn.physical={uniforms:on([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ge},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:Xe.meshphysical_vert,fragmentShader:Xe.meshphysical_frag};const Wa={r:0,b:0,g:0},dx=new pt,Gh=new Ge;Gh.set(-1,0,0,0,1,0,0,0,1);function fx(t,e,n,i,r,s){const a=new Ze(0);let o=r===!0?0:1,l,c,u=null,h=0,d=null;function f(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){const S=y.backgroundBlurriness>0;w=e.get(w,S)}return w}function g(y){let w=!1;const S=f(y);S===null?m(a,o):S&&S.isColor&&(m(S,1),w=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(y,w){const S=f(w);S&&S.isCubeTexture?(c===void 0&&(c=new _t(new wr(1,1,1),new Sr({name:"BackgroundCubeMaterial",uniforms:ss(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,T,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dx.makeRotationFromEuler(w.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Gh),c.material.toneMapped=et.getTransfer(S.colorSpace)!==dt,(u!==S||h!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=S,h=S.version,d=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new _t(new pr(2,2),new Sr({name:"BackgroundMaterial",uniforms:ss(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=et.getTransfer(S.colorSpace)!==dt,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||h!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=S,h=S.version,d=t.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,w){y.getRGB(Wa,kh(t)),n.buffers.color.setClear(Wa.r,Wa.g,Wa.b,w,s)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:g,addToRenderList:v,dispose:p}}function hx(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(F,B,$,N,W){let ie=!1;const X=h(F,N,$,B);s!==X&&(s=X,c(s.object)),ie=f(F,N,$,W),ie&&g(F,N,$,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(ie||a)&&(a=!1,S(F,B,$,N),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(F){return t.bindVertexArray(F)}function u(F){return t.deleteVertexArray(F)}function h(F,B,$,N){const W=N.wireframe===!0;let ie=i[B.id];ie===void 0&&(ie={},i[B.id]=ie);const X=F.isInstancedMesh===!0?F.id:0;let he=ie[X];he===void 0&&(he={},ie[X]=he);let K=he[$.id];K===void 0&&(K={},he[$.id]=K);let ae=K[W];return ae===void 0&&(ae=d(l()),K[W]=ae),ae}function d(F){const B=[],$=[],N=[];for(let W=0;W<n;W++)B[W]=0,$[W]=0,N[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:$,attributeDivisors:N,object:F,attributes:{},index:null}}function f(F,B,$,N){const W=s.attributes,ie=B.attributes;let X=0;const he=$.getAttributes();for(const K in he)if(he[K].location>=0){const de=W[K];let Ie=ie[K];if(Ie===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(Ie=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(Ie=F.instanceColor)),de===void 0||de.attribute!==Ie||Ie&&de.data!==Ie.data)return!0;X++}return s.attributesNum!==X||s.index!==N}function g(F,B,$,N){const W={},ie=B.attributes;let X=0;const he=$.getAttributes();for(const K in he)if(he[K].location>=0){let de=ie[K];de===void 0&&(K==="instanceMatrix"&&F.instanceMatrix&&(de=F.instanceMatrix),K==="instanceColor"&&F.instanceColor&&(de=F.instanceColor));const Ie={};Ie.attribute=de,de&&de.data&&(Ie.data=de.data),W[K]=Ie,X++}s.attributes=W,s.attributesNum=X,s.index=N}function v(){const F=s.newAttributes;for(let B=0,$=F.length;B<$;B++)F[B]=0}function m(F){p(F,0)}function p(F,B){const $=s.newAttributes,N=s.enabledAttributes,W=s.attributeDivisors;$[F]=1,N[F]===0&&(t.enableVertexAttribArray(F),N[F]=1),W[F]!==B&&(t.vertexAttribDivisor(F,B),W[F]=B)}function y(){const F=s.newAttributes,B=s.enabledAttributes;for(let $=0,N=B.length;$<N;$++)B[$]!==F[$]&&(t.disableVertexAttribArray($),B[$]=0)}function w(F,B,$,N,W,ie,X){X===!0?t.vertexAttribIPointer(F,B,$,W,ie):t.vertexAttribPointer(F,B,$,N,W,ie)}function S(F,B,$,N){v();const W=N.attributes,ie=$.getAttributes(),X=B.defaultAttributeValues;for(const he in ie){const K=ie[he];if(K.location>=0){let ae=W[he];if(ae===void 0&&(he==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),he==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor)),ae!==void 0){const de=ae.normalized,Ie=ae.itemSize,$e=e.get(ae);if($e===void 0)continue;const re=$e.buffer,xe=$e.type,Re=$e.bytesPerElement,Oe=xe===t.INT||xe===t.UNSIGNED_INT||ae.gpuType===Xc;if(ae.isInterleavedBufferAttribute){const Ee=ae.data,He=Ee.isInterleavedBuffer===!0?Ee.stride:Ee.itemSize,vt=ae.offset;if(Ee.isInstancedInterleavedBuffer||Ee.isInstancedBufferAttribute){for(let ke=0;ke<K.locationSize;ke++)p(K.location+ke,Ee.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let ke=0;ke<K.locationSize;ke++)m(K.location+ke);t.bindBuffer(t.ARRAY_BUFFER,re);for(let ke=0;ke<K.locationSize;ke++)w(K.location+ke,Ie/K.locationSize,xe,de,He*Re,(vt+Ie/K.locationSize*ke)*Re,Oe)}else{if(ae.isInstancedBufferAttribute){for(let Ee=0;Ee<K.locationSize;Ee++)p(K.location+Ee,ae.meshPerAttribute);F.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let Ee=0;Ee<K.locationSize;Ee++)m(K.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,re);for(let Ee=0;Ee<K.locationSize;Ee++)w(K.location+Ee,Ie/K.locationSize,xe,de,Ie*Re,Ie/K.locationSize*Ee*Re,Oe)}}else if(X!==void 0){const de=X[he];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(K.location,de);break;case 3:t.vertexAttrib3fv(K.location,de);break;case 4:t.vertexAttrib4fv(K.location,de);break;default:t.vertexAttrib1fv(K.location,de)}}}}y()}function A(){z();for(const F in i){const B=i[F];for(const $ in B){const N=B[$];for(const W in N){const ie=N[W];for(const X in ie)u(ie[X].object),delete ie[X];delete N[W]}}delete i[F]}}function T(F){if(i[F.id]===void 0)return;const B=i[F.id];for(const $ in B){const N=B[$];for(const W in N){const ie=N[W];for(const X in ie)u(ie[X].object),delete ie[X];delete N[W]}}delete i[F.id]}function _(F){for(const B in i){const $=i[B];for(const N in $){const W=$[N];if(W[F.id]===void 0)continue;const ie=W[F.id];for(const X in ie)u(ie[X].object),delete ie[X];delete W[F.id]}}}function b(F){for(const B in i){const $=i[B],N=F.isInstancedMesh===!0?F.id:0,W=$[N];if(W!==void 0){for(const ie in W){const X=W[ie];for(const he in X)u(X[he].object),delete X[he];delete W[ie]}delete $[N],Object.keys($).length===0&&delete i[B]}}}function z(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:z,resetDefaultState:I,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function px(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let f=0;f<u;f++)d+=c[f];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function mx(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(_){return!(_!==Kn&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){const b=_===ti&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Mn&&_!==zn&&!b&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Be("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&h===!1;n.reversedDepthBuffer===!0&&h===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&h===!0&&Be("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),y=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),w=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:S,maxSamples:A,samples:T}}function gx(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Oi,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||i!==0||r;return r=d,i=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,f){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,p=t.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const y=s?0:i,w=y*4;let S=p.clippingState||null;l.value=S,S=u(g,d,w,f);for(let A=0;A!==w;++A)S[A]=n[A];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,f,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,S=f;w!==v;++w,S+=4)a.copy(h[w]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}class ou extends Jn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Uh(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wr(5,5,5),s=new Sr({name:"CubemapFromEquirect",uniforms:ss(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Yr});s.uniforms.tEquirect.value=n;const a=new _t(r,s),o=n.minFilter;return n.minFilter===Bi&&(n.minFilter=vn),new wc(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Cd=256,_x=3,vx=20,Vh=256,Wh=16,xx=3,yx=new O,Sx=new Ze;class To{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new wc(1,10,null),this._boxMesh=new _t(new wr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=yx}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const h=l.autoClear,d=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,v=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,v===null&&(e.background=l.getClearColor(Sx));const m=new wc(i,r,u);return m.position.copy(o),m.update(l,e),l.autoClear=h,l.autoClearColor=d,l.autoClearDepth=f,l.autoClearStencil=g,e.background=v,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ld(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Cd,Ah(e))}_fromTexture(e,n){e.mapping===ns||e.mapping===Js?this._setSize(e.image.length===0?Cd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=Pd(e,!1,!1),i=Math.log2(e)-_x;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=Pd(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===ns||e.mapping===Js?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ld()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Id()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=bx(),this._integrationMaterial=Mx());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Wh);for(let a=0;a<=i;a++){const o=To.lodToRoughness(a,i);if(a>i-xx)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(Vh*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Ex());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function Pd(t,e,n){return new ou(t,{minFilter:Bi,generateMipmaps:e,type:ti,colorSpace:So,depthBuffer:n})}function ha(t,e,n){return new Sr({name:t,uniforms:e,vertexShader:Xe.cube_vert,fragmentShader:n,side:cn,blending:Yr,depthTest:!1,depthWrite:!1})}function bx(){return ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Vh}u

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
	`)}function Mx(){return ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Wh}},`

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
	`)}function Ex(){return ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${vx}
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
	`)}function Id(){return ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ld(){return ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function wx(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===el||f===tl)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const v=new ou(g.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",c),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const f=d.mapping,g=f===el||f===tl,v=f===ns||f===Js;if(g||v){let m=n.get(d);const p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new To(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{const y=d.image;return g&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new To(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,f){return f===el?d.mapping=ns:f===tl&&(d.mapping=Js),d}function l(d){let f=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function c(d){const f=d.target;f.removeEventListener("dispose",c);const g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Tx(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Kr("WebGLRenderer: "+i+" extension not supported."),r}}}function Ax(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const v=s.get(g);v&&(e.remove(v),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(g,v){return r[v.id]!==void 0||(v.addEventListener("dispose",o),r[v.id]=new WeakRef(v),a.register(v,v.id,v),n.memory.geometries++),v}function u(g){const v=g.attributes;for(const m in v)e.update(v[m],t.ARRAY_BUFFER)}function h(g){const v=g.index,m=g.attributes.position;let p=0;if(m===void 0)return;const y=v!==null?v.array.length:m.array.length/3-1,w=m.count>=65535?Lh:Ih,S=new w(Math.ceil(y/3)*6,1),A=S.array;if(v!==null){const _=v.array;p=v.version;for(let b=0,z=0;b<y;b+=3){const I=_[b+0],F=_[b+1],B=_[b+2];A[z++]=I,A[z++]=F,A[z++]=F,A[z++]=B,A[z++]=B,A[z++]=I}}else{p=m.version;for(let _=0,b=0;_<y;_+=3){const z=_+0,I=_+1,F=_+2;A[b++]=z,A[b++]=I,A[b++]=I,A[b++]=F,A[b++]=F,A[b++]=z}}S.version=p;const T=s.get(g);T&&e.remove(T),s.set(g,S)}function d(g){const v=s.get(g);if(v){const m=g.index;m!==null&&v.version<m.version&&h(g)}else h(g);return s.get(g)}function f(){for(const g in r){const v=r[g].deref();v!==void 0&&l(v)}}return{get:c,update:u,getWireframeAttribute:d,dispose:f}}function Rx(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,d){t.drawElements(i,d,s,h*a),n.update(d,i,1)}function c(h,d,f){f!==0&&(t.drawElementsInstanced(i,d,s,h*a,f),n.update(d,i,f))}function u(h,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,h,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];n.update(v,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Cx(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Px(t,e,n){const i=new WeakMap,r=new Et;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==h){let I=function(){b.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var f=I;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],y=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let S=0;g===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let A=o.attributes.position.count*S,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const _=new Float32Array(A*T*4*h),b=new Rh(_,A,T,h);b.type=zn,b.needsUpdate=!0;const z=S*4;for(let F=0;F<h;F++){const B=p[F],$=y[F],N=w[F],W=A*T*4*F;for(let ie=0;ie<B.count;ie++){const X=ie*z;g===!0&&(r.fromBufferAttribute(B,ie),_[W+X+0]=r.x,_[W+X+1]=r.y,_[W+X+2]=r.z,_[W+X+3]=0),v===!0&&(r.fromBufferAttribute($,ie),_[W+X+4]=r.x,_[W+X+5]=r.y,_[W+X+6]=r.z,_[W+X+7]=0),m===!0&&(r.fromBufferAttribute(N,ie),_[W+X+8]=r.x,_[W+X+9]=r.y,_[W+X+10]=r.z,_[W+X+11]=N.itemSize===4?r.w:1)}}d={count:h,texture:b,size:new We(A,T)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Ix(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const Lx={[ch]:"LINEAR_TONE_MAPPING",[uh]:"REINHARD_TONE_MAPPING",[dh]:"CINEON_TONE_MAPPING",[Wc]:"ACES_FILMIC_TONE_MAPPING",[hh]:"AGX_TONE_MAPPING",[ph]:"NEUTRAL_TONE_MAPPING",[fh]:"CUSTOM_TONE_MAPPING"};function Nx(t,e,n,i,r,s){const a=new Jn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Gn;u.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const h=new b0({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _t(u,h),f=new $h(-1,1,1,-1,0,1);let g=null,v=null,m=!1,p,y=null,w=[],S=!1;this.setSize=function(A,T){a.setSize(A,T),o!==null&&o.setSize(A,T),l!==null&&l.setSize(A,T);for(let _=0;_<w.length;_++){const b=w[_];b.setSize&&b.setSize(A,T)}},this.setEffects=function(A){w=A,S=w.length>0&&w[0].isRenderPass===!0;const T=a.width,_=a.height;w.length>0&&o===null&&(o=new Jn(T,_,{type:ti,depthBuffer:!1,stencilBuffer:!1}),l=new Jn(T,_,{type:ti,depthBuffer:!1,stencilBuffer:!1}));const b=r===!0&&w.some(z=>z.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new rs(T,_),s===!0&&(c.format=$i,c.type=is)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let z=0;z<w.length;z++){const I=w[z];I.setSize&&I.setSize(T,_),b&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(A,T){if(m||A.toneMapping===xi&&w.length===0)return!1;if(y=T,T!==null){const _=T.width,b=T.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&A.setRenderTarget(a),p=A.toneMapping,A.toneMapping=xi,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=p,m=!0;let _=a,b=o;for(let z=0;z<w.length;z++){const I=w[z];I.enabled!==!1&&(I.render(A,b,_,T),I.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(g!==A.outputColorSpace||v!==A.toneMapping){g=A.outputColorSpace,v=A.toneMapping,h.defines={},et.getTransfer(g)===dt&&(h.defines.SRGB_TRANSFER="");const z=Lx[v];z&&(h.defines[z]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(y),A.render(d,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),h.dispose()}}const Xh=new en,Zh=new rs(1,1),qh=new Oh(1),Yh=new Rh,Kh=new jg,jh=new Uh,Nd=[],Dd=[],Ud=new Float32Array(16),Od=new Float32Array(9),Fd=new Float32Array(4);function fs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Nd[r];if(s===void 0&&(s=new Float32Array(r),Nd[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function kt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Go(t,e){let n=Dd[e];n===void 0&&(n=new Int32Array(e),Dd[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Dx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Ux(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),kt(n,e)}}function Ox(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),kt(n,e)}}function Fx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),kt(n,e)}}function kx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Fd.set(i),t.uniformMatrix2fv(this.addr,!1,Fd),kt(n,i)}}function zx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Od.set(i),t.uniformMatrix3fv(this.addr,!1,Od),kt(n,i)}}function Bx(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),kt(n,e)}else{if(Ft(n,i))return;Ud.set(i),t.uniformMatrix4fv(this.addr,!1,Ud),kt(n,i)}}function $x(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Hx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),kt(n,e)}}function Gx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),kt(n,e)}}function Vx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),kt(n,e)}}function Wx(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Xx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),kt(n,e)}}function Zx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),kt(n,e)}}function qx(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),kt(n,e)}}function Vo(t){return t.version===0&&(t.compareFunction=Eh,t.needsUpdate=!0),t}function Yx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Vo(Zh):s=Xh,n.setTexture2D(e||s,r)}function Kx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kh,r)}function jx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Vo(qh):s=jh,n.setTextureCube(e||s,r)}function Jx(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yh,r)}function Qx(t){switch(t){case 5126:return Dx;case 35664:return Ux;case 35665:return Ox;case 35666:return Fx;case 35674:return kx;case 35675:return zx;case 35676:return Bx;case 5124:case 35670:return $x;case 35667:case 35671:return Hx;case 35668:case 35672:return Gx;case 35669:case 35673:return Vx;case 5125:return Wx;case 36294:return Xx;case 36295:return Zx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Kx;case 35680:case 36300:case 36308:case 36293:return jx;case 36289:case 36303:case 36311:case 36292:return Jx}}function ey(t,e){t.uniform1fv(this.addr,e)}function ty(t,e){const n=fs(e,this.size,2);t.uniform2fv(this.addr,n)}function ny(t,e){const n=fs(e,this.size,3);t.uniform3fv(this.addr,n)}function iy(t,e){const n=fs(e,this.size,4);t.uniform4fv(this.addr,n)}function ry(t,e){const n=fs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function sy(t,e){const n=fs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function ay(t,e){const n=fs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function oy(t,e){t.uniform1iv(this.addr,e)}function ly(t,e){t.uniform2iv(this.addr,e)}function cy(t,e){t.uniform3iv(this.addr,e)}function uy(t,e){t.uniform4iv(this.addr,e)}function dy(t,e){t.uniform1uiv(this.addr,e)}function fy(t,e){t.uniform2uiv(this.addr,e)}function hy(t,e){t.uniform3uiv(this.addr,e)}function py(t,e){t.uniform4uiv(this.addr,e)}function my(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Vo(Zh):a=Xh;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function gy(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Kh,s[a])}function _y(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Vo(qh):a=jh;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function vy(t,e,n){const i=this.cache,r=e.length,s=Go(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Yh,s[a])}function xy(t){switch(t){case 5126:return ey;case 35664:return ty;case 35665:return ny;case 35666:return iy;case 35674:return ry;case 35675:return sy;case 35676:return ay;case 5124:case 35670:return oy;case 35667:case 35671:return ly;case 35668:case 35672:return cy;case 35669:case 35673:return uy;case 5125:return dy;case 36294:return fy;case 36295:return hy;case 36296:return py;case 35678:case 36198:case 36298:case 36306:case 35682:return my;case 35679:case 36299:case 36307:return gy;case 35680:case 36300:case 36308:case 36293:return _y;case 36289:case 36303:case 36311:case 36292:return vy}}class yy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Qx(n.type)}}class Sy{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=xy(n.type)}}class by{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function kd(t,e){t.seq.push(e),t.map[e.id]=e}function My(t,e,n){const i=t.name,r=i.length;for(Al.lastIndex=0;;){const s=Al.exec(i),a=Al.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){kd(n,c===void 0?new yy(o,t,e):new Sy(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new by(o),kd(n,h)),n=h}}}class oo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);My(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function zd(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Ey=37297;let wy=0;function Ty(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Bd=new Ge;function Ay(t){et._getMatrix(Bd,et.workingColorSpace,t);const e=`mat3( ${Bd.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case bo:return[e,"LinearTransferOETF"];case dt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function $d(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Ty(t.getShaderSource(e),o)}else return s}function Ry(t,e){const n=Ay(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cy={[ch]:"Linear",[uh]:"Reinhard",[dh]:"Cineon",[Wc]:"ACESFilmic",[hh]:"AgX",[ph]:"Neutral",[fh]:"Custom"};function Py(t,e){const n=Cy[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xa=new O;function Iy(){et.getLuminanceCoefficients(Xa);const t=Xa.x.toFixed(4),e=Xa.y.toFixed(4),n=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ly(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function Ny(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Dy(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Fs(t){return t!==""}function Hd(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Gd(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tc(t){return t.replace(Uy,Oy)}function Oy(t,e){const n=Xe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Tc(n)}const Fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(t){return t.replace(Fy,ky)}function ky(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Wd(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const zy={[eo]:"SHADOWMAP_TYPE_PCF",[Os]:"SHADOWMAP_TYPE_VSM"};function By(t){return zy[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const $y={[Js]:"ENVMAP_MODE_REFRACTION"};function Hy(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":$y[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Gy={[lh]:"ENVMAP_BLENDING_MULTIPLY",[gg]:"ENVMAP_BLENDING_MIX",[_g]:"ENVMAP_BLENDING_ADD"};function Vy(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Gy[t.combine]||"ENVMAP_BLENDING_NONE"}function Wy(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=By(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=Hy(n),h=Vy(n),d=Ly(n),f=Ny(s),g=r.createProgram();let v,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Fs).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Fs).join(`
`),m.length>0&&(m+=`
`)):(v=[Wd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),m=[Wd(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==xi?"#define TONE_MAPPING":"",n.toneMapping!==xi?Xe.tonemapping_pars_fragment:"",n.toneMapping!==xi?Py("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Xe.colorspace_pars_fragment,Ry("linearToOutputTexel",n.outputColorSpace),Iy(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Tc(a),a=Hd(a,n),a=Gd(a,n),o=Tc(o),o=Hd(o,n),o=Gd(o,n),a=Vd(a),o=Vd(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",n.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=p+v+a,w=p+m+o,S=zd(r,r.VERTEX_SHADER,y),A=zd(r,r.FRAGMENT_SHADER,w);r.attachShader(g,S),r.attachShader(g,A),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function T(I){if(t.debug.checkShaderErrors){const F=r.getProgramInfoLog(g)||"",B=r.getShaderInfoLog(S)||"",$=r.getShaderInfoLog(A)||"",N=F.trim(),W=B.trim(),ie=$.trim();let X=!0,he=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(X=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,S,A);else{const K=$d(r,S,"vertex"),ae=$d(r,A,"fragment");at("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+N+`
`+K+`
`+ae)}else N!==""?Be("WebGLProgram: Program Info Log:",N):(W===""||ie==="")&&(he=!1);he&&(I.diagnostics={runnable:X,programLog:N,vertexShader:{log:W,prefix:v},fragmentShader:{log:ie,prefix:m}})}r.deleteShader(S),r.deleteShader(A),_=new oo(r,g),b=Dy(r,g)}let _;this.getUniforms=function(){return _===void 0&&T(this),_};let b;this.getAttributes=function(){return b===void 0&&T(this),b};let z=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=r.getProgramParameter(g,Ey)),z},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=wy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=A,this}let Xy=0;class Zy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new qy(e),n.set(e,i)),i}}class qy{constructor(e){this.id=Xy++,this.code=e,this.usedTimes=0}}function Yy(t){return t===yr||t===xo||t===yo}function Ky(t,e,n,i,r,s){const a=new Ch,o=new Zy,l=new Set,c=[],u=new Map,h=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,b,z,I,F,B){const $=I.fog,N=F.geometry,W=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,ie=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,X=e.get(_.envMap||W,ie),he=d[_.type];let K=i.precision;_.precision!==null&&(K=i.getMaxPrecision(_.precision),K!==_.precision&&Be("WebGLProgram.getParameters:",_.precision,"not supported, using",K,"instead."));const ae=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,de=ae!==void 0?ae.length:0;let Ie=0;N.morphAttributes.position!==void 0&&(Ie=1),N.morphAttributes.normal!==void 0&&(Ie=2),N.morphAttributes.color!==void 0&&(Ie=3);let $e,re,xe,Re;if(he){const Se=Yn[he];$e=Se.vertexShader,re=Se.fragmentShader}else{$e=_.vertexShader,re=_.fragmentShader;const Se=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,Se,st),xe=Se.id,Re=st.id}const Oe=t.getRenderTarget(),Ee=t.state.buffers.depth.getReversed(),He=F.isInstancedMesh===!0,vt=F.isBatchedMesh===!0,ke=!!_.map,ot=!!_.matcap,ct=!!X,Ye=ct&&X.isPMREMTexture===!0,Ut=!!_.aoMap,ut=!!_.lightMap,zt=!!_.bumpMap&&_.wireframe===!1,xt=!!_.normalMap,un=!!_.displacementMap,Rt=!!_.emissiveMap,tn=!!_.metalnessMap,dn=!!_.roughnessMap,fn=_.anisotropy>0,k=_.clearcoat>0,hn=_.diffuseRoughness>0,mt=_.dispersion>0,D=_.retroreflectivity>0,P=_.iridescence>0,te=_.sheen>0,j=_.transmission>0,ee=fn&&!!_.anisotropyMap,E=k&&!!_.clearcoatMap,x=k&&!!_.clearcoatNormalMap,R=k&&!!_.clearcoatRoughnessMap,G=hn&&!!_.diffuseRoughnessMap,L=P&&!!_.iridescenceMap,ne=P&&!!_.iridescenceThicknessMap,ue=te&&!!_.sheenColorMap,Y=te&&!!_.sheenRoughnessMap,Q=!!_.specularMap,fe=!!_.specularColorMap,C=!!_.specularIntensityMap,J=j&&!!_.transmissionMap,Z=j&&!!_.thicknessMap,ge=!!_.gradientMap,pe=!!_.alphaMap,me=_.alphaTest>0,ye=!!_.alphaHash,De=!!_.extensions;let oe=xi;_.toneMapped&&(Oe===null||Oe.isXRRenderTarget===!0)&&(oe=t.toneMapping);const Ce=Ye?X.isCompressedCubeTexture?X.image[0].mipmaps:X.mipmaps:null,ze={shaderID:he,shaderType:_.type,shaderName:_.name,vertexShader:$e,fragmentShader:re,defines:_.defines,customVertexShaderID:xe,customFragmentShaderID:Re,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:K,batching:vt,batchingColor:vt&&F._colorsTexture!==null,instancing:He,instancingColor:He&&F.instanceColor!==null,instancingMorph:He&&F.morphTexture!==null,outputColorSpace:Oe===null?t.outputColorSpace:Oe.isXRRenderTarget===!0?Oe.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:ot,envMap:ct,envMapMode:ct&&X.mapping,envMapPMREM:Ye,envMapMaxLod:Ye?Ce.length-1:null,envMapSize:Ye?Ce[0].width:null,aoMap:Ut,lightMap:ut,bumpMap:zt,normalMap:xt,displacementMap:un,emissiveMap:Rt,normalMapObjectSpace:xt&&_.normalMapType===yg,normalMapTangentSpace:xt&&_.normalMapType===Ec,packedNormalMap:xt&&_.normalMapType===Ec&&Yy(_.normalMap.format),metalnessMap:tn,roughnessMap:dn,anisotropy:fn,anisotropyMap:ee,clearcoat:k,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:R,diffuseRoughness:hn,diffuseRoughnessMap:G,dispersion:mt,retroreflection:D,iridescence:P,iridescenceMap:L,iridescenceThicknessMap:ne,sheen:te,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:Q,specularColorMap:fe,specularIntensityMap:C,transmission:j,transmissionMap:J,thicknessMap:Z,gradientMap:ge,opaque:_.transparent===!1&&_.blending===Hs&&_.alphaToCoverage===!1,alphaMap:pe,alphaTest:me,alphaHash:ye,combine:_.combine,mapUv:ke&&f(_.map.channel),aoMapUv:Ut&&f(_.aoMap.channel),lightMapUv:ut&&f(_.lightMap.channel),bumpMapUv:zt&&f(_.bumpMap.channel),normalMapUv:xt&&f(_.normalMap.channel),displacementMapUv:un&&f(_.displacementMap.channel),emissiveMapUv:Rt&&f(_.emissiveMap.channel),metalnessMapUv:tn&&f(_.metalnessMap.channel),roughnessMapUv:dn&&f(_.roughnessMap.channel),anisotropyMapUv:ee&&f(_.anisotropyMap.channel),clearcoatMapUv:E&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:R&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:G&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:L&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:Q&&f(_.specularMap.channel),specularColorMapUv:fe&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:J&&f(_.transmissionMap.channel),thicknessMapUv:Z&&f(_.thicknessMap.channel),alphaMapUv:pe&&f(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(xt||fn),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!N.attributes.uv&&(ke||pe),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&xt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Ee,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ie,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:B.filter(Se=>Se.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:oe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===dt,decodeVideoTextureEmissive:Rt&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===dt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===In,flipSided:_.side===cn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:De&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&_.extensions.multiDraw===!0||vt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function v(_){const b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(const z in _.defines)b.push(z),b.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(m(b,_),p(b,_),b.push(t.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function m(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function p(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){const b=d[_.type];let z;if(b){const I=Yn[b];z=x0.clone(I.uniforms)}else z=_.uniforms;return z}function w(_,b){let z=u.get(b);return z!==void 0?++z.usedTimes:(z=new Wy(t,b,_,r),c.push(z),u.set(b,z)),z}function S(_){if(--_.usedTimes===0){const b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:y,acquireProgram:w,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:T}}function jy(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Jy(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Xd(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Zd(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let y=t[e];return y===void 0?(y={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},t[e]=y):(y.id=d.id,y.object=d,y.geometry=f,y.material=g,y.materialVariant=a(d),y.groupOrder=v,y.renderOrder=d.renderOrder,y.z=m,y.group=p),e++,y}function l(d,f,g,v,m,p,y){y.reversedDepth===!0&&(m=-m);const w=o(d,f,g,v,m,p);g.transmission>0?i.push(w):g.transparent===!0?r.push(w):n.push(w)}function c(d,f,g,v,m,p){const y=o(d,f,g,v,m,p);g.transmission>0?i.unshift(y):g.transparent===!0?r.unshift(y):n.unshift(y)}function u(d,f){n.length>1&&n.sort(d||Jy),i.length>1&&i.sort(f||Xd),r.length>1&&r.sort(f||Xd)}function h(){for(let d=e,f=t.length;d<f;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:u}}function Qy(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Zd,t.set(i,[a])):r>=s.length?(a=new Zd,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function eS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new O,color:new Ze};break;case"SpotLight":n={position:new O,direction:new O,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function tS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let nS=0;function iS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function rS(t){const e=new eS,n=tS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new pt,a=new pt;function o(c){let u=0,h=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,y=0,w=0,S=0,A=0,T=0,_=0,b=0,z=0,I=0;c.sort(iS);for(let B=0,$=c.length;B<$;B++){const N=c[B],W=N.color,ie=N.intensity,X=N.distance;let he=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===yr?he=N.shadow.map.texture:he=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=W.r*ie,h+=W.g*ie,d+=W.b*ie;else if(N.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(N.sh.coefficients[K],ie);I++}else if(N.isSunLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ae=N.shadow,de=n.get(N);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize.copy(ae.mapSize).multiply(ae.getFrameExtents()),i.sunShadow[g]=de,i.sunShadowMap[g]=he;const Ie=ae.getViewportCount();for(let $e=0;$e<Ie;$e++)i.sunShadowMatrix[v+$e]=ae.getMatrix($e),i.sunShadowCascade[v+$e]=ae._cascadeData[$e];v+=Ie,g++}i.sun[f]=K,f++}else if(N.isDirectionalLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const ae=N.shadow,de=n.get(N);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,i.directionalShadow[m]=de,i.directionalShadowMap[m]=he,i.directionalShadowMatrix[m]=N.shadow.matrix,A++}i.directional[m]=K,m++}else if(N.isSpotLight){const K=e.get(N);K.position.setFromMatrixPosition(N.matrixWorld),K.color.copy(W).multiplyScalar(ie),K.distance=X,K.coneCos=Math.cos(N.angle),K.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),K.decay=N.decay,i.spot[y]=K;const ae=N.shadow;if(N.map&&(i.spotLightMap[b]=N.map,b++,ae.updateMatrices(N),N.castShadow&&z++),i.spotLightMatrix[y]=ae.matrix,N.castShadow){const de=n.get(N);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,i.spotShadow[y]=de,i.spotShadowMap[y]=he,_++}y++}else if(N.isRectAreaLight){const K=e.get(N);K.color.copy(W).multiplyScalar(ie),K.halfWidth.set(N.width*.5,0,0),K.halfHeight.set(0,N.height*.5,0),i.rectArea[w]=K,w++}else if(N.isPointLight){const K=e.get(N);if(K.color.copy(N.color).multiplyScalar(N.intensity),K.distance=N.distance,K.decay=N.decay,N.castShadow){const ae=N.shadow,de=n.get(N);de.shadowIntensity=ae.intensity,de.shadowBias=ae.bias,de.shadowNormalBias=ae.normalBias,de.shadowRadius=ae.radius,de.shadowMapSize=ae.mapSize,de.shadowCameraNear=ae.camera.near,de.shadowCameraFar=ae.camera.far,i.pointShadow[p]=de,i.pointShadowMap[p]=he,i.pointShadowMatrix[p]=N.shadow.matrix,T++}i.point[p]=K,p++}else if(N.isHemisphereLight){const K=e.get(N);K.skyColor.copy(N.color).multiplyScalar(ie),K.groundColor.copy(N.groundColor).multiplyScalar(ie),i.hemi[S]=K,S++}}w>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=we.LTC_FLOAT_1,i.rectAreaLTC2=we.LTC_FLOAT_2):(i.rectAreaLTC1=we.LTC_HALF_1,i.rectAreaLTC2=we.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.sunLength!==f||F.directionalLength!==m||F.pointLength!==p||F.spotLength!==y||F.rectAreaLength!==w||F.hemiLength!==S||F.numSunShadows!==g||F.numDirectionalShadows!==A||F.numPointShadows!==T||F.numSpotShadows!==_||F.numSpotMaps!==b||F.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=m,i.spot.length=y,i.rectArea.length=w,i.point.length=p,i.hemi.length=S,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+b-z,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=z,i.numLightProbes=I,F.sunLength=f,F.directionalLength=m,F.pointLength=p,F.spotLength=y,F.rectAreaLength=w,F.hemiLength=S,F.numSunShadows=g,F.numDirectionalShadows=A,F.numPointShadows=T,F.numSpotShadows=_,F.numSpotMaps=b,F.numLightProbes=I,i.version=nS++)}function l(c,u){let h=0,d=0,f=0,g=0,v=0,m=0;const p=u.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){const S=c[y];if(S.isSunLight){const A=i.sun[h];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),h++}else if(S.isDirectionalLight){const A=i.directional[d];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),d++}else if(S.isSpotLight){const A=i.spot[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const A=i.rectArea[v];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const A=i.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(p),f++}else if(S.isHemisphereLight){const A=i.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function qd(t){const e=new rS(t),n=[],i=[],r=[];function s(h){u.camera=h,n.length=0,i.length=0,r.length=0}function a(h){h.isLightProbeGrid?r.push(h):n.push(h)}function o(h){i.push(h)}function l(){e.setup(n),r.sort((h,d)=>h.priority-d.priority||h.id-d.id)}function c(h){e.setupView(n,h)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function sS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new qd(t),e.set(r,[o])):s>=a.length?(o=new qd(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const aS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oS=`uniform sampler2D shadow_pass;
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
}`,lS=[new O(1,0,0),new O(-1,0,0),new O(0,1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1)],cS=[new O(0,-1,0),new O(0,-1,0),new O(0,0,1),new O(0,0,-1),new O(0,-1,0),new O(0,-1,0)],Yd=new pt,Cs=new O,Rl=new O;function uS(t,e,n){let i=new na;const r=new We,s=new We,a=new Et,o=new E0,l=new w0,c={},u=n.maxTextureSize,h={[xr]:cn,[cn]:xr,[In]:In},d=new Sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:aS,fragmentShader:oS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=eo;let p=this.type;this.render=function(T,_,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;this.type===jm&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=eo);const z=t.getRenderTarget(),I=t.getActiveCubeFace(),F=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Yr),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const $=p!==this.type;$&&_.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(W=>W.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,W=T.length;N<W;N++){const ie=T[N],X=ie.shadow;if(X===void 0){Be("WebGLShadowMap:",ie,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;r.copy(X.mapSize);const he=X.getFrameExtents();r.multiply(he),s.copy(X.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/he.x),r.x=s.x*he.x,X.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/he.y),r.y=s.y*he.y,X.mapSize.y=s.y));const K=t.state.buffers.depth.getReversed();if(X.camera._reversedDepth=K,X.map===null||$===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Os){if(ie.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new Jn(r.x,r.y,{format:yr,type:ti,minFilter:vn,magFilter:vn,generateMipmaps:!1}),X.map.texture.name=ie.name+".shadowMap",X.map.depthTexture=new rs(r.x,r.y,zn),X.map.depthTexture.name=ie.name+".shadowMapDepth",X.map.depthTexture.format=Wi,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt}else ie.isPointLight?(X.map=new ou(r.x),X.map.depthTexture=new Oh(r.x,ei)):(X.map=new Jn(r.x,r.y),X.map.depthTexture=new rs(r.x,r.y,ei)),X.map.depthTexture.name=ie.name+".shadowMap",X.map.depthTexture.format=Wi,this.type===eo?(X.map.depthTexture.compareFunction=K?Mh:bh,X.map.depthTexture.minFilter=vn,X.map.depthTexture.magFilter=vn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=Xt,X.map.depthTexture.magFilter=Xt);X.camera.updateProjectionMatrix()}X.map.isWebGLCubeRenderTarget!==!0&&(X.map.width!==r.x||X.map.height!==r.y)&&X.map.setSize(r.x,r.y);const ae=X.map.isWebGLCubeRenderTarget?6:X.getViewportCount();ie.isPointLight!==!0&&X.updateMatrices(ie,b);const de=(X.camera.layers.mask&4294967294)!==0?X.camera.layers:b.layers;for(let Ie=0;Ie<ae;Ie++){const $e=X.getCamera(Ie);if(ie.isPointLight){const re=X.camera,xe=X.matrix,Re=ie.distance||re.far;Re!==re.far&&(re.far=Re,re.updateProjectionMatrix()),Cs.setFromMatrixPosition(ie.matrixWorld),re.position.copy(Cs),Rl.copy(re.position),Rl.add(lS[Ie]),re.up.copy(cS[Ie]),re.lookAt(Rl),re.updateMatrixWorld(),xe.makeTranslation(-Cs.x,-Cs.y,-Cs.z),Yd.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),X._frustum.setFromProjectionMatrix(Yd,re.coordinateSystem,re.reversedDepth)}if(X.map.isWebGLCubeRenderTarget)t.setRenderTarget(X.map,Ie),t.clear();else{Ie===0&&(t.setRenderTarget(X.map),t.clear());const re=X.getViewport(Ie);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),B.viewport(a)}i=X.getFrustum(Ie),S(_,b,$e,ie,de,this.type)}X.isPointLightShadow!==!0&&this.type===Os&&y(X,b),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(z,I,F)};function y(T,_){const b=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new Jn(r.x,r.y,{format:yr,type:ti}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(_,null,b,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(_,null,b,f,v,null)}function w(T,_,b,z){let I=null;const F=b.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(F!==void 0)I=F;else if(I=b.isPointLight===!0?l:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){const B=I.uuid,$=_.uuid;let N=c[B];N===void 0&&(N={},c[B]=N);let W=N[$];W===void 0&&(W=I.clone(),N[$]=W,_.addEventListener("dispose",A)),I=W}if(I.visible=_.visible,I.wireframe=_.wireframe,z===Os?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:h[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,b.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const B=t.properties.get(I);B.light=b}return I}function S(T,_,b,z,I,F){if(T.visible===!1)return;if(T.layers.test(I)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&F===Os)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,T.matrixWorld);const N=e.update(T),W=T.material;if(Array.isArray(W)){const ie=N.groups;for(let X=0,he=ie.length;X<he;X++){const K=ie[X],ae=W[K.materialIndex];if(ae&&ae.visible){const de=w(T,ae,z,F);T.onBeforeShadow(t,T,_,b,N,de,K),t.renderBufferDirect(b,null,N,de,T,K),T.onAfterShadow(t,T,_,b,N,de,K)}}}else if(W.visible){const ie=w(T,W,z,F);T.onBeforeShadow(t,T,_,b,N,ie,null),t.renderBufferDirect(b,null,N,ie,T,null),T.onAfterShadow(t,T,_,b,N,ie,null)}}const $=T.children;for(let N=0,W=$.length;N<W;N++)S($[N],_,b,z,I,F)}function A(T){T.target.removeEventListener("dispose",A);for(const b in c){const z=c[b],I=T.target.uuid;I in z&&(z[I].dispose(),delete z[I])}}}function dS(t,e){function n(){let C=!1;const J=new Et;let Z=null;const ge=new Et(0,0,0,0);return{setMask:function(pe){Z!==pe&&!C&&(t.colorMask(pe,pe,pe,pe),Z=pe)},setLocked:function(pe){C=pe},setClear:function(pe,me,ye,De,oe){oe===!0&&(pe*=De,me*=De,ye*=De),J.set(pe,me,ye,De),ge.equals(J)===!1&&(t.clearColor(pe,me,ye,De),ge.copy(J))},reset:function(){C=!1,Z=null,ge.set(-1,0,0,0)}}}function i(){let C=!1,J=!1,Z=null,ge=null,pe=null;return{setReversed:function(me){if(J!==me){const ye=e.get("EXT_clip_control");me?ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.ZERO_TO_ONE_EXT):ye.clipControlEXT(ye.LOWER_LEFT_EXT,ye.NEGATIVE_ONE_TO_ONE_EXT),J=me;const De=pe;pe=null,this.setClear(De)}},getReversed:function(){return J},setTest:function(me){me?Ee(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(me){Z!==me&&!C&&(t.depthMask(me),Z=me)},setFunc:function(me){if(J&&(me=Pg[me]),ge!==me){switch(me){case Bl:t.depthFunc(t.NEVER);break;case $l:t.depthFunc(t.ALWAYS);break;case Hl:t.depthFunc(t.LESS);break;case js:t.depthFunc(t.LEQUAL);break;case Gl:t.depthFunc(t.EQUAL);break;case Vl:t.depthFunc(t.GEQUAL);break;case Wl:t.depthFunc(t.GREATER);break;case Xl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ge=me}},setLocked:function(me){C=me},setClear:function(me){pe!==me&&(pe=me,J&&(me=1-me),t.clearDepth(me))},reset:function(){C=!1,Z=null,ge=null,pe=null,J=!1}}}function r(){let C=!1,J=null,Z=null,ge=null,pe=null,me=null,ye=null,De=null,oe=null;return{setTest:function(Ce){C||(Ce?Ee(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(Ce){J!==Ce&&!C&&(t.stencilMask(Ce),J=Ce)},setFunc:function(Ce,ze,Se){(Z!==Ce||ge!==ze||pe!==Se)&&(t.stencilFunc(Ce,ze,Se),Z=Ce,ge=ze,pe=Se)},setOp:function(Ce,ze,Se){(me!==Ce||ye!==ze||De!==Se)&&(t.stencilOp(Ce,ze,Se),me=Ce,ye=ze,De=Se)},setLocked:function(Ce){C=Ce},setClear:function(Ce){oe!==Ce&&(t.clearStencil(Ce),oe=Ce)},reset:function(){C=!1,J=null,Z=null,ge=null,pe=null,me=null,ye=null,De=null,oe=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},h={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,w=null,S=null,A=null,T=null,_=null,b=new Ze(0,0,0),z=0,I=!1,F=null,B=null,$=null,N=null,W=null;const ie=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,he=0;const K=t.getParameter(t.VERSION);K.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=he>=1):K.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=he>=2);let ae=null,de={};const Ie=t.getParameter(t.SCISSOR_BOX),$e=t.getParameter(t.VIEWPORT),re=new Et().fromArray(Ie),xe=new Et().fromArray($e);function Re(C,J,Z,ge){const pe=new Uint8Array(4),me=t.createTexture();t.bindTexture(C,me),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ye=0;ye<Z;ye++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(J,0,t.RGBA,1,1,ge,0,t.RGBA,t.UNSIGNED_BYTE,pe):t.texImage2D(J+ye,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,pe);return me}const Oe={};Oe[t.TEXTURE_2D]=Re(t.TEXTURE_2D,t.TEXTURE_2D,1),Oe[t.TEXTURE_CUBE_MAP]=Re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Oe[t.TEXTURE_2D_ARRAY]=Re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Oe[t.TEXTURE_3D]=Re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Ee(t.DEPTH_TEST),a.setFunc(js),zt(!1),xt(qu),Ee(t.CULL_FACE),Ut(Yr);function Ee(C){u[C]!==!0&&(t.enable(C),u[C]=!0)}function He(C){u[C]!==!1&&(t.disable(C),u[C]=!1)}function vt(C,J){return d[C]!==J?(t.bindFramebuffer(C,J),d[C]=J,C===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=J),C===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=J),!0):!1}function ke(C,J){let Z=g,ge=!1;if(C){Z=f.get(J),Z===void 0&&(Z=[],f.set(J,Z));const pe=C.textures;if(Z.length!==pe.length||Z[0]!==t.COLOR_ATTACHMENT0){for(let me=0,ye=pe.length;me<ye;me++)Z[me]=t.COLOR_ATTACHMENT0+me;Z.length=pe.length,ge=!0}}else Z[0]!==t.BACK&&(Z[0]=t.BACK,ge=!0);ge&&t.drawBuffers(Z)}function ot(C){return v!==C?(t.useProgram(C),v=C,!0):!1}const ct={[Zr]:t.FUNC_ADD,[Qm]:t.FUNC_SUBTRACT,[eg]:t.FUNC_REVERSE_SUBTRACT};ct[tg]=t.MIN,ct[ng]=t.MAX;const Ye={[ig]:t.ZERO,[rg]:t.ONE,[sg]:t.SRC_COLOR,[ah]:t.SRC_ALPHA,[dg]:t.SRC_ALPHA_SATURATE,[cg]:t.DST_COLOR,[og]:t.DST_ALPHA,[ag]:t.ONE_MINUS_SRC_COLOR,[oh]:t.ONE_MINUS_SRC_ALPHA,[ug]:t.ONE_MINUS_DST_COLOR,[lg]:t.ONE_MINUS_DST_ALPHA,[fg]:t.CONSTANT_COLOR,[hg]:t.ONE_MINUS_CONSTANT_COLOR,[pg]:t.CONSTANT_ALPHA,[mg]:t.ONE_MINUS_CONSTANT_ALPHA};function Ut(C,J,Z,ge,pe,me,ye,De,oe,Ce){if(C===Yr){m===!0&&(He(t.BLEND),m=!1);return}if(m===!1&&(Ee(t.BLEND),m=!0),C!==Jm){if(C!==p||Ce!==I){if((y!==Zr||A!==Zr)&&(t.blendEquation(t.FUNC_ADD),y=Zr,A=Zr),Ce)switch(C){case Hs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFunc(t.ONE,t.ONE);break;case Ku:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case ju:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:at("WebGLState: Invalid blending: ",C);break}else switch(C){case Hs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Yu:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Ku:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",C);break}w=null,S=null,T=null,_=null,b.set(0,0,0),z=0,p=C,I=Ce}return}pe=pe||J,me=me||Z,ye=ye||ge,(J!==y||pe!==A)&&(t.blendEquationSeparate(ct[J],ct[pe]),y=J,A=pe),(Z!==w||ge!==S||me!==T||ye!==_)&&(t.blendFuncSeparate(Ye[Z],Ye[ge],Ye[me],Ye[ye]),w=Z,S=ge,T=me,_=ye),(De.equals(b)===!1||oe!==z)&&(t.blendColor(De.r,De.g,De.b,oe),b.copy(De),z=oe),p=C,I=!1}function ut(C,J){C.side===In?He(t.CULL_FACE):Ee(t.CULL_FACE);let Z=C.side===cn;J&&(Z=!Z),zt(Z),C.blending===Hs&&C.transparent===!1?Ut(Yr):Ut(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),s.setMask(C.colorWrite);const ge=C.stencilWrite;o.setTest(ge),ge&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),Rt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?Ee(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function zt(C){F!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),F=C)}function xt(C){C!==Ym?(Ee(t.CULL_FACE),C!==B&&(C===qu?t.cullFace(t.BACK):C===Km?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),B=C}function un(C){C!==$&&(X&&t.lineWidth(C),$=C)}function Rt(C,J,Z){C?(Ee(t.POLYGON_OFFSET_FILL),(N!==J||W!==Z)&&(N=J,W=Z,a.getReversed()&&(J=-J,Z=-Z),t.polygonOffset(J,Z))):He(t.POLYGON_OFFSET_FILL)}function tn(C){C?Ee(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function dn(C){C===void 0&&(C=t.TEXTURE0+ie-1),ae!==C&&(t.activeTexture(C),ae=C)}function fn(C,J,Z){Z===void 0&&(ae===null?Z=t.TEXTURE0+ie-1:Z=ae);let ge=de[Z];ge===void 0&&(ge={type:void 0,texture:void 0},de[Z]=ge),(ge.type!==C||ge.texture!==J)&&(ae!==Z&&(t.activeTexture(Z),ae=Z),t.bindTexture(C,J||Oe[C]),ge.type=C,ge.texture=J)}function k(){const C=de[ae];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function hn(){try{t.compressedTexImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function mt(){try{t.compressedTexImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function D(){try{t.texSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function P(){try{t.texSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function te(){try{t.compressedTexSubImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function j(){try{t.compressedTexSubImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function ee(){try{t.texStorage2D(...arguments)}catch(C){at("WebGLState:",C)}}function E(){try{t.texStorage3D(...arguments)}catch(C){at("WebGLState:",C)}}function x(){try{t.texImage2D(...arguments)}catch(C){at("WebGLState:",C)}}function R(){try{t.texImage3D(...arguments)}catch(C){at("WebGLState:",C)}}function G(C){return h[C]!==void 0?h[C]:t.getParameter(C)}function L(C,J){h[C]!==J&&(t.pixelStorei(C,J),h[C]=J)}function ne(C){re.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function ue(C){xe.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),xe.copy(C))}function Y(C,J){let Z=c.get(J);Z===void 0&&(Z=new WeakMap,c.set(J,Z));let ge=Z.get(C);ge===void 0&&(ge=t.getUniformBlockIndex(J,C.name),t.uniformBlockBinding(J,ge,ge),Z.set(C,ge))}function Q(C,J,Z){const pe=c.get(J).get(C);l[pe]!==Z&&(t.bindBufferBase(t.UNIFORM_BUFFER,pe,Z),l[pe]=Z)}function fe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},h={},ae=null,de={},d={},l={},f=new WeakMap,g=[],v=null,m=!1,p=null,y=null,w=null,S=null,A=null,T=null,_=null,b=new Ze(0,0,0),z=0,I=!1,F=null,B=null,$=null,N=null,W=null,re.set(0,0,t.canvas.width,t.canvas.height),xe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Ee,disable:He,bindFramebuffer:vt,drawBuffers:ke,useProgram:ot,setBlending:Ut,setMaterial:ut,setFlipSided:zt,setCullFace:xt,setLineWidth:un,setPolygonOffset:Rt,setScissorTest:tn,activeTexture:dn,bindTexture:fn,unbindTexture:k,compressedTexImage2D:hn,compressedTexImage3D:mt,texImage2D:x,texImage3D:R,pixelStorei:L,getParameter:G,updateUBOMapping:Y,uniformBlockBinding:Q,texStorage2D:ee,texStorage3D:E,texSubImage2D:D,texSubImage3D:P,compressedTexSubImage2D:te,compressedTexSubImage3D:j,scissor:ne,viewport:ue,reset:fe}}function fS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new We,u=new WeakMap,h=new Set;let d;const f=new WeakMap,g=new Set,v=new FinalizationRegistry(E=>g.delete(E));let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(E,x){return m?new OffscreenCanvas(E,x):Mo("canvas")}function y(E,x,R){let G=1;const L=ee(E);if((L.width>R||L.height>R)&&(G=R/Math.max(L.width,L.height)),G<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const ne=Math.floor(G*L.width),ue=Math.floor(G*L.height);d===void 0&&(d=p(ne,ue));const Y=x?p(ne,ue):d;return Y.width=ne,Y.height=ue,Y.getContext("2d").drawImage(E,0,0,ne,ue),Be("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+ne+"x"+ue+")."),Y}else return"data"in E&&Be("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),E;return E}function w(E){return E.generateMipmaps}function S(E){t.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?t.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(E,x,R,G,L,ne=!1){if(E!==null){if(t[E]!==void 0)return t[E];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let ue;G&&(ue=e.get("EXT_texture_norm16"),ue||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===t.RED&&(R===t.FLOAT&&(Y=t.R32F),R===t.HALF_FLOAT&&(Y=t.R16F),R===t.UNSIGNED_BYTE&&(Y=t.R8),R===t.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),R===t.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),x===t.RED_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.R8UI),R===t.UNSIGNED_SHORT&&(Y=t.R16UI),R===t.UNSIGNED_INT&&(Y=t.R32UI),R===t.BYTE&&(Y=t.R8I),R===t.SHORT&&(Y=t.R16I),R===t.INT&&(Y=t.R32I)),x===t.RG&&(R===t.FLOAT&&(Y=t.RG32F),R===t.HALF_FLOAT&&(Y=t.RG16F),R===t.UNSIGNED_BYTE&&(Y=t.RG8),R===t.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),R===t.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.RG8UI),R===t.UNSIGNED_SHORT&&(Y=t.RG16UI),R===t.UNSIGNED_INT&&(Y=t.RG32UI),R===t.BYTE&&(Y=t.RG8I),R===t.SHORT&&(Y=t.RG16I),R===t.INT&&(Y=t.RG32I)),x===t.RGB_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),R===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),R===t.UNSIGNED_INT&&(Y=t.RGB32UI),R===t.BYTE&&(Y=t.RGB8I),R===t.SHORT&&(Y=t.RGB16I),R===t.INT&&(Y=t.RGB32I)),x===t.RGBA_INTEGER&&(R===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),R===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),R===t.UNSIGNED_INT&&(Y=t.RGBA32UI),R===t.BYTE&&(Y=t.RGBA8I),R===t.SHORT&&(Y=t.RGBA16I),R===t.INT&&(Y=t.RGBA32I)),x===t.RGB&&(R===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),R===t.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),R===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),R===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),x===t.RGBA){const Q=ne?bo:et.getTransfer(L);R===t.FLOAT&&(Y=t.RGBA32F),R===t.HALF_FLOAT&&(Y=t.RGBA16F),R===t.UNSIGNED_BYTE&&(Y=Q===dt?t.SRGB8_ALPHA8:t.RGBA8),R===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),R===t.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),R===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),R===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(E,x){let R;return E?x===null||x===ei||x===is?R=t.DEPTH24_STENCIL8:x===zn?R=t.DEPTH32F_STENCIL8:x===Qs&&(R=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===ei||x===is?R=t.DEPTH_COMPONENT24:x===zn?R=t.DEPTH_COMPONENT32F:x===Qs&&(R=t.DEPTH_COMPONENT16),R}function b(E,x){return w(E)===!0||E.isFramebufferTexture&&E.minFilter!==Xt&&E.minFilter!==vn?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function z(E){const x=new WeakRef(E);i.get(E).__ref=x,g.add(x),v.register(E,x,x)}function I(E){const x=i.get(E).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function F(E){$(E.target)}function B(E){N(E.target)}function $(E){E.removeEventListener("dispose",F),I(E),ie(E),E.isVideoTexture&&u.delete(E),E.isHTMLTexture&&h.delete(E)}function N(E){E.removeEventListener("dispose",B),I(E),he(E)}function W(){for(const E of g){const x=E.deref();x!==void 0&&(x.isRenderTarget===!0?N(x):$(x))}g.clear(),h.clear()}function ie(E){const x=i.get(E);if(x.__webglInit===void 0)return;const R=E.source,G=f.get(R);if(G){const L=G[x.__cacheKey];L.usedTimes--,L.usedTimes===0&&X(E),Object.keys(G).length===0&&f.delete(R)}i.remove(E)}function X(E){const x=i.get(E);t.deleteTexture(x.__webglTexture);const R=E.source,G=f.get(R);delete G[x.__cacheKey],a.memory.textures--}function he(E){const x=i.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();const R=E.depthTexture;if(R&&R.renderTarget===E&&$(R),E.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(x.__webglFramebuffer[L]))for(let ne=0;ne<x.__webglFramebuffer[L].length;ne++)t.deleteFramebuffer(x.__webglFramebuffer[L][ne]);else t.deleteFramebuffer(x.__webglFramebuffer[L]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[L])}else{if(Array.isArray(x.__webglFramebuffer))for(let L=0;L<x.__webglFramebuffer.length;L++)t.deleteFramebuffer(x.__webglFramebuffer[L]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let L=0;L<x.__webglColorRenderbuffer.length;L++)x.__webglColorRenderbuffer[L]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[L]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=E.textures;for(let L=0,ne=G.length;L<ne;L++){const ue=i.get(G[L]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(G[L])}i.remove(E)}let K=0;function ae(){K=0}function de(){return K}function Ie(E){K=E}function $e(){const E=K;return E>=r.maxTextures&&Be("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+r.maxTextures),K+=1,E}function re(E){const x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function xe(E,x){const R=i.get(E);if(E.isVideoTexture&&te(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&R.__version!==E.version){const G=E.image;if(G===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{ut(R,E,x);return}}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,R.__webglTexture,t.TEXTURE0+x)}function Re(E,x){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,x);return}else E.isExternalTexture&&(R.__webglTexture=E.sourceTexture?E.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,R.__webglTexture,t.TEXTURE0+x)}function Oe(E,x){const R=i.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&R.__version!==E.version){ut(R,E,x);return}n.bindTexture(t.TEXTURE_3D,R.__webglTexture,t.TEXTURE0+x)}function Ee(E,x){const R=i.get(E);if(E.version>0&&R.__version!==E.version){zt(R,E,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+x)}const He={[vo]:t.REPEAT,[gi]:t.CLAMP_TO_EDGE,[Zl]:t.MIRRORED_REPEAT},vt={[Xt]:t.NEAREST,[vg]:t.NEAREST_MIPMAP_NEAREST,[Sa]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[nl]:t.LINEAR_MIPMAP_NEAREST,[Bi]:t.LINEAR_MIPMAP_LINEAR},ke={[bg]:t.NEVER,[Eh]:t.ALWAYS,[Mg]:t.LESS,[bh]:t.LEQUAL,[Eg]:t.EQUAL,[Mh]:t.GEQUAL,[wg]:t.GREATER,[Tg]:t.NOTEQUAL};function ot(E,x){if(x.type===zn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===vn||x.magFilter===nl||x.magFilter===Sa||x.magFilter===Bi||x.minFilter===vn||x.minFilter===nl||x.minFilter===Sa||x.minFilter===Bi)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(E,t.TEXTURE_WRAP_S,He[x.wrapS]),t.texParameteri(E,t.TEXTURE_WRAP_T,He[x.wrapT]),(E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY)&&t.texParameteri(E,t.TEXTURE_WRAP_R,He[x.wrapR]),t.texParameteri(E,t.TEXTURE_MAG_FILTER,vt[x.magFilter]),t.texParameteri(E,t.TEXTURE_MIN_FILTER,vt[x.minFilter]),x.compareFunction&&(t.texParameteri(E,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(E,t.TEXTURE_COMPARE_FUNC,ke[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Xt||x.minFilter!==Sa&&x.minFilter!==Bi||x.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const R=e.get("EXT_texture_filter_anisotropic");t.texParameterf(E,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ct(E,x){let R=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",F),z(x));const G=x.source;let L=f.get(G);L===void 0&&(L={},f.set(G,L));const ne=re(x);if(ne!==E.__cacheKey){L[ne]===void 0&&(L[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,R=!0),L[ne].usedTimes++;const ue=L[E.__cacheKey];ue!==void 0&&(L[E.__cacheKey].usedTimes--,ue.usedTimes===0&&X(x)),E.__cacheKey=ne,E.__webglTexture=L[ne].texture}return R}function Ye(E,x,R){return Math.floor(Math.floor(E/R)/x)}function Ut(E,x,R,G){const ne=E.updateRanges;if(ne.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,R,G,x.data);else{ne.sort((C,J)=>C.start-J.start);let ue=0;for(let C=1;C<ne.length;C++){const J=ne[ue],Z=ne[C],ge=J.start+J.count,pe=Ye(Z.start,x.width,4),me=Ye(J.start,x.width,4);Z.start<=ge+1&&pe===me&&Ye(Z.start+Z.count-1,x.width,4)===pe?J.count=Math.max(J.count,Z.start+Z.count-J.start):(++ue,ne[ue]=Z)}ne.length=ue+1;const Y=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),fe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let C=0,J=ne.length;C<J;C++){const Z=ne[C],ge=Math.floor(Z.start/4),pe=Math.ceil(Z.count/4),me=ge%x.width,ye=Math.floor(ge/x.width),De=pe,oe=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,me),n.pixelStorei(t.UNPACK_SKIP_ROWS,ye),n.texSubImage2D(t.TEXTURE_2D,0,me,ye,De,oe,R,G,x.data)}E.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,fe)}}function ut(E,x,R){let G=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(G=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(G=t.TEXTURE_3D);const L=ct(E,x),ne=x.source;n.bindTexture(G,E.__webglTexture,t.TEXTURE0+R);const ue=i.get(ne);if(ne.version!==ue.__version||L===!0){if(n.activeTexture(t.TEXTURE0+R),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const oe=et.getPrimaries(et.workingColorSpace),Ce=x.colorSpace===ki?null:et.getPrimaries(x.colorSpace),ze=x.colorSpace===ki||oe===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=y(x.image,!1,r.maxTextureSize);Q=j(x,Q);const fe=s.convert(x.format,x.colorSpace),C=s.convert(x.type);let J=T(x.internalFormat,fe,C,x.normalized,x.colorSpace,x.isVideoTexture);ot(G,x);let Z;const ge=x.mipmaps,pe=x.isVideoTexture!==!0,me=ue.__version===void 0||L===!0,ye=ne.dataReady,De=b(x,Q);if(x.isDepthTexture)J=_(x.format===$i,x.type),me&&(pe?n.texStorage2D(t.TEXTURE_2D,1,J,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,J,Q.width,Q.height,0,fe,C,null));else if(x.isDataTexture)if(ge.length>0){pe&&me&&n.texStorage2D(t.TEXTURE_2D,De,J,ge[0].width,ge[0].height);for(let oe=0,Ce=ge.length;oe<Ce;oe++)Z=ge[oe],pe?ye&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,C,Z.data):n.texImage2D(t.TEXTURE_2D,oe,J,Z.width,Z.height,0,fe,C,Z.data);x.generateMipmaps=!1}else pe?(me&&n.texStorage2D(t.TEXTURE_2D,De,J,Q.width,Q.height),ye&&Ut(x,Q,fe,C)):n.texImage2D(t.TEXTURE_2D,0,J,Q.width,Q.height,0,fe,C,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){pe&&me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,J,ge[0].width,ge[0].height,Q.depth);for(let oe=0,Ce=ge.length;oe<Ce;oe++)if(Z=ge[oe],x.format!==Kn)if(fe!==null)if(pe){if(ye)if(x.layerUpdates.size>0){const ze=Rd(Z.width,Z.height,x.format,x.type);for(const Se of x.layerUpdates){const st=Z.data.subarray(Se*ze/Z.data.BYTES_PER_ELEMENT,(Se+1)*ze/Z.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,Se,Z.width,Z.height,1,fe,st)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,Q.depth,fe,Z.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,oe,J,Z.width,Z.height,Q.depth,0,Z.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?ye&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,oe,0,0,0,Z.width,Z.height,Q.depth,fe,C,Z.data):n.texImage3D(t.TEXTURE_2D_ARRAY,oe,J,Z.width,Z.height,Q.depth,0,fe,C,Z.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{pe&&me&&n.texStorage2D(t.TEXTURE_2D,De,J,ge[0].width,ge[0].height);for(let oe=0,Ce=ge.length;oe<Ce;oe++)Z=ge[oe],x.format!==Kn?fe!==null?pe?ye&&n.compressedTexSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,Z.data):n.compressedTexImage2D(t.TEXTURE_2D,oe,J,Z.width,Z.height,0,Z.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?ye&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,Z.width,Z.height,fe,C,Z.data):n.texImage2D(t.TEXTURE_2D,oe,J,Z.width,Z.height,0,fe,C,Z.data)}else if(x.isDataArrayTexture)if(pe){if(me&&n.texStorage3D(t.TEXTURE_2D_ARRAY,De,J,Q.width,Q.height,Q.depth),ye)if(x.layerUpdates.size>0){const oe=Rd(Q.width,Q.height,x.format,x.type);for(const Ce of x.layerUpdates){const ze=Q.data.subarray(Ce*oe/Q.data.BYTES_PER_ELEMENT,(Ce+1)*oe/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ce,Q.width,Q.height,1,fe,C,ze)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,fe,C,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,J,Q.width,Q.height,Q.depth,0,fe,C,Q.data);else if(x.isData3DTexture)pe?(me&&n.texStorage3D(t.TEXTURE_3D,De,J,Q.width,Q.height,Q.depth),ye&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,fe,C,Q.data)):n.texImage3D(t.TEXTURE_3D,0,J,Q.width,Q.height,Q.depth,0,fe,C,Q.data);else if(x.isFramebufferTexture){if(me)if(pe)n.texStorage2D(t.TEXTURE_2D,De,J,Q.width,Q.height);else{let oe=Q.width,Ce=Q.height;for(let ze=0;ze<De;ze++)n.texImage2D(t.TEXTURE_2D,ze,J,oe,Ce,0,fe,C,null),oe>>=1,Ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const oe=t.canvas;if(oe.hasAttribute("layoutsubtree")||oe.setAttribute("layoutsubtree","true"),Q.parentNode!==oe){oe.appendChild(Q),h.add(x),oe.onpaint=Ce=>{const ze=Ce.changedElements;for(const Se of h)ze.includes(Se.image)&&(Se.needsUpdate=!0)},oe.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ze=t.RGBA,Se=t.RGBA,st=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ze,Se,st,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ge.length>0){if(pe&&me){const oe=ee(ge[0]);n.texStorage2D(t.TEXTURE_2D,De,J,oe.width,oe.height)}for(let oe=0,Ce=ge.length;oe<Ce;oe++)Z=ge[oe],pe?ye&&n.texSubImage2D(t.TEXTURE_2D,oe,0,0,fe,C,Z):n.texImage2D(t.TEXTURE_2D,oe,J,fe,C,Z);x.generateMipmaps=!1}else if(pe){if(me){const oe=ee(Q);n.texStorage2D(t.TEXTURE_2D,De,J,oe.width,oe.height)}ye&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,fe,C,Q)}else n.texImage2D(t.TEXTURE_2D,0,J,fe,C,Q);w(x)&&x.mipmapsAutoUpdate===!0&&S(G),ue.__version=ne.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function zt(E,x,R){if(x.image.length!==6)return;const G=ct(E,x),L=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,E.__webglTexture,t.TEXTURE0+R);const ne=i.get(L);if(L.version!==ne.__version||G===!0){n.activeTexture(t.TEXTURE0+R);const ue=et.getPrimaries(et.workingColorSpace),Y=x.colorSpace===ki?null:et.getPrimaries(x.colorSpace),Q=x.colorSpace===ki||ue===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const fe=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,J=[];for(let Se=0;Se<6;Se++)!fe&&!C?J[Se]=y(x.image[Se],!0,r.maxCubemapSize):J[Se]=C?x.image[Se].image:x.image[Se],J[Se]=j(x,J[Se]);const Z=J[0],ge=s.convert(x.format,x.colorSpace),pe=s.convert(x.type);let me=T(x.internalFormat,ge,pe,x.normalized,x.colorSpace);const ye=x.isVideoTexture!==!0,De=ne.__version===void 0||G===!0,oe=L.dataReady;let Ce=b(x,Z);ot(t.TEXTURE_CUBE_MAP,x);let ze;if(x.isDepthTexture){if(me=_(x.format===$i,x.type),De)if(ye)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,me,Z.width,Z.height);else for(let Se=0;Se<6;Se++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,me,Z.width,Z.height,0,ge,pe,null)}else if(fe){ye&&De&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,me,Z.width,Z.height);for(let Se=0;Se<6;Se++){ze=J[Se].mipmaps;for(let st=0;st<ze.length;st++){const bt=ze[st];x.format!==Kn?ge!==null?ye?oe&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,0,0,bt.width,bt.height,ge,bt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,me,bt.width,bt.height,0,bt.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ye?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,0,0,bt.width,bt.height,ge,pe,bt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st,me,bt.width,bt.height,0,ge,pe,bt.data)}}}else{if(ze=x.mipmaps,ye&&De){ze.length>0&&Ce++;const Se=ee(J[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ce,me,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(C){ye?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,J[Se].width,J[Se].height,ge,pe,J[Se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,me,J[Se].width,J[Se].height,0,ge,pe,J[Se].data);for(let st=0;st<ze.length;st++){const Vn=ze[st].image[Se].image;ye?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,0,0,Vn.width,Vn.height,ge,pe,Vn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,me,Vn.width,Vn.height,0,ge,pe,Vn.data)}}else{ye?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ge,pe,J[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,me,ge,pe,J[Se]);for(let st=0;st<ze.length;st++){const bt=ze[st];ye?oe&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,0,0,ge,pe,bt.image[Se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,st+1,me,ge,pe,bt.image[Se])}}}w(x)&&x.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),ne.__version=L.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function xt(E,x,R,G,L,ne){const ue=s.convert(R.format,R.colorSpace),Y=s.convert(R.type),Q=T(R.internalFormat,ue,Y,R.normalized,R.colorSpace),fe=i.get(x),C=i.get(R);if(C.__renderTarget=x,!fe.__hasExternalTextures){const J=Math.max(1,x.width>>ne),Z=Math.max(1,x.height>>ne);L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?n.texImage3D(L,ne,Q,J,Z,x.depth,0,ue,Y,null):n.texImage2D(L,ne,Q,J,Z,0,ue,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,E),P(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,G,L,C.__webglTexture,0,D(x)):(L===t.TEXTURE_2D||L>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,G,L,C.__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function un(E,x,R){if(t.bindRenderbuffer(t.RENDERBUFFER,E),x.depthBuffer){const G=x.depthTexture,L=G&&G.isDepthTexture?G.type:null,ne=_(x.stencilBuffer,L),ue=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;P(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(x),ne,x.width,x.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(x),ne,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ne,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,E)}else{const G=x.textures;for(let L=0;L<G.length;L++){const ne=G[L],ue=s.convert(ne.format,ne.colorSpace),Y=s.convert(ne.type),Q=T(ne.internalFormat,ue,Y,ne.normalized,ne.colorSpace);P(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(x),Q,x.width,x.height):R?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(x),Q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Rt(E,x,R){const G=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const L=i.get(x.depthTexture);L.__renderTarget=x;const ne=G?x.depthTexture.image[0]:x.depthTexture.image;(!L.__webglTexture||ne.width!==x.width||ne.height!==x.height)&&(ne.width=x.width,ne.height=x.height,x.depthTexture.needsUpdate=!0),G?Ee(x.depthTexture,0):xe(x.depthTexture,0);const ue=L.__webglTexture,Y=D(x),Q=G?t.TEXTURE_CUBE_MAP_POSITIVE_X+R:t.TEXTURE_2D,fe=x.depthTexture.format===$i?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Wi)P(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Q,ue,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Q,ue,0);else if(x.depthTexture.format===$i)P(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,fe,Q,ue,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,fe,Q,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function tn(E){const x=i.get(E),R=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){const G=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),G){const L=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,G.removeEventListener("dispose",L)};G.addEventListener("dispose",L),x.__depthDisposeCallback=L}x.__boundDepthTexture=G}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(R)for(let G=0;G<6;G++)Rt(x.__webglFramebuffer[G],E,G);else E.texture.mipmaps.length>0?Rt(x.__webglFramebuffer[0],E,0):Rt(x.__webglFramebuffer,E,0);else if(R){x.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[G]),x.__webglDepthbuffer[G]===void 0)x.__webglDepthbuffer[G]=t.createRenderbuffer(),un(x.__webglDepthbuffer[G],E,!1);else{const L=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer[G];t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,ne)}}else if(E.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),un(x.__webglDepthbuffer,E,!1);else{const L=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ne=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ne),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,ne)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function dn(E,x,R){const G=i.get(E);x!==void 0&&xt(G.__webglFramebuffer,E,E.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),R!==void 0&&tn(E)}function fn(E){const x=E.texture,R=i.get(E),G=i.get(x);E.addEventListener("dispose",B),z(E);const L=E.textures,ne=E.isWebGLCubeRenderTarget===!0,ue=L.length>1;if(ue||(G.__webglTexture===void 0&&(G.__webglTexture=t.createTexture()),G.__version=x.version,a.memory.textures++),ne){R.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){R.__webglFramebuffer[Y]=[];for(let Q=0;Q<x.mipmaps.length;Q++)R.__webglFramebuffer[Y][Q]=t.createFramebuffer()}else R.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(x.mipmaps.length>0){R.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)R.__webglFramebuffer[Y]=t.createFramebuffer()}else R.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Y=0,Q=L.length;Y<Q;Y++){const fe=i.get(L[Y]);fe.__webglTexture===void 0&&(fe.__webglTexture=t.createTexture(),a.memory.textures++)}if(E.samples>0&&P(E)===!1){R.__webglMultisampledFramebuffer=t.createFramebuffer(),R.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let Y=0;Y<L.length;Y++){const Q=L[Y];R.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,R.__webglColorRenderbuffer[Y]);const fe=s.convert(Q.format,Q.colorSpace),C=s.convert(Q.type),J=T(Q.internalFormat,fe,C,Q.normalized,Q.colorSpace,E.isXRRenderTarget===!0),Z=D(E);t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,R.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),E.depthBuffer&&(R.__webglDepthRenderbuffer=t.createRenderbuffer(),un(R.__webglDepthRenderbuffer,E,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,G.__webglTexture),ot(t.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)xt(R.__webglFramebuffer[Y][Q],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Q);else xt(R.__webglFramebuffer[Y],E,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);w(x)?S(t.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let Y=0,Q=L.length;Y<Q;Y++){const fe=L[Y],C=i.get(fe);let J=t.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(J=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(J,C.__webglTexture),ot(J,fe),xt(R.__webglFramebuffer,E,fe,t.COLOR_ATTACHMENT0+Y,J,0),w(fe)&&S(J)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(Y=E.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,G.__webglTexture),ot(Y,x),x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)xt(R.__webglFramebuffer[Q],E,x,t.COLOR_ATTACHMENT0,Y,Q);else xt(R.__webglFramebuffer,E,x,t.COLOR_ATTACHMENT0,Y,0);w(x)?S(Y):x.mipmaps.length>0&&t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}E.depthBuffer&&tn(E)}function k(E){const x=E.textures;for(let R=0,G=x.length;R<G;R++){const L=x[R];if(w(L)&&L.mipmapsAutoUpdate===!0){const ne=A(E),ue=i.get(L).__webglTexture;n.bindTexture(ne,ue),S(ne),n.unbindTexture()}}}const hn=[];function mt(E){if(E.samples>0){if(P(E)===!1){const x=E.textures,R=E.width,G=E.height;let L=t.COLOR_BUFFER_BIT;const ne=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(E),Y=x.length>1;if(Y)for(let fe=0;fe<x.length;fe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(L|=t.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(L|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const C=i.get(x[fe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,R,G,0,0,R,G,L,t.NEAREST),l===!0&&(hn.length=0,hn.push(t.COLOR_ATTACHMENT0+fe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&hn.push(ne),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,hn))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let fe=0;fe<x.length;fe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[fe]);const C=i.get(x[fe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&l){const x=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function D(E){return Math.min(r.maxSamples,E.samples)}function P(E){const x=i.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function te(E){const x=a.render.frame;u.get(E)!==x&&(u.set(E,x),E.update())}function j(E,x){const R=E.colorSpace,G=E.format,L=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||R!==So&&R!==ki&&(et.getTransfer(R)===dt?(G!==Kn||L!==Mn)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",R)),x}function ee(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=$e,this.resetTextureUnits=ae,this.getTextureUnits=de,this.setTextureUnits=Ie,this.setTexture2D=xe,this.setTexture2DArray=Re,this.setTexture3D=Oe,this.setTextureCube=Ee,this.rebindTextures=dn,this.setupRenderTarget=fn,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=tn,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=P,this.dispose=W}function hS(t,e){function n(i,r=ki){let s;const a=et.getTransfer(r);if(i===Mn)return t.UNSIGNED_BYTE;if(i===Zc)return t.UNSIGNED_SHORT_4_4_4_4;if(i===qc)return t.UNSIGNED_SHORT_5_5_5_1;if(i===vh)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===xh)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===gh)return t.BYTE;if(i===_h)return t.SHORT;if(i===Qs)return t.UNSIGNED_SHORT;if(i===Xc)return t.INT;if(i===ei)return t.UNSIGNED_INT;if(i===zn)return t.FLOAT;if(i===ti)return t.HALF_FLOAT;if(i===yh)return t.ALPHA;if(i===Sh)return t.RGB;if(i===Kn)return t.RGBA;if(i===Wi)return t.DEPTH_COMPONENT;if(i===$i)return t.DEPTH_STENCIL;if(i===Yc)return t.RED;if(i===Kc)return t.RED_INTEGER;if(i===yr)return t.RG;if(i===jc)return t.RG_INTEGER;if(i===Jc)return t.RGBA_INTEGER;if(i===to||i===no||i===io||i===ro)if(a===dt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===to)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===to)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===ql||i===Yl||i===Kl||i===jl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===jl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Ql||i===ec||i===tc||i===nc||i===xo||i===ic)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Jl||i===Ql)return a===dt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===ec)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===tc)return s.COMPRESSED_R11_EAC;if(i===nc)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xo)return s.COMPRESSED_RG11_EAC;if(i===ic)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===rc||i===sc||i===ac||i===oc||i===lc||i===cc||i===uc||i===dc||i===fc||i===hc||i===pc||i===mc||i===gc||i===_c)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===rc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===sc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ac)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===lc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===cc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===uc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===dc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===fc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===hc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===pc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===mc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===gc)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===_c)return a===dt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vc||i===xc||i===yc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vc)return a===dt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===xc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===yc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Sc||i===bc||i===yo||i===Mc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Sc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===bc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===is?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const pS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mS=`
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

}`;class gS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Fh(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Sr({vertexShader:pS,fragmentShader:mS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new pr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _S extends Mr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,g=null;const v=typeof XRWebGLBinding<"u",m=new gS,p={},y=n.getContextAttributes();let w=null,S=null;const A=[],T=[],_=new We;let b=null,z=null;const I=new kn;I.viewport=new Et;const F=new kn;F.viewport=new Et;const B=[I,F],$=new C0;let N=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let xe=A[re];return xe===void 0&&(xe=new cl,A[re]=xe),xe.getTargetRaySpace()},this.getControllerGrip=function(re){let xe=A[re];return xe===void 0&&(xe=new cl,A[re]=xe),xe.getGripSpace()},this.getHand=function(re){let xe=A[re];return xe===void 0&&(xe=new cl,A[re]=xe),xe.getHandSpace()};function ie(re){const xe=T.indexOf(re.inputSource);if(xe===-1)return;const Re=A[xe];Re!==void 0&&(Re.update(re.inputSource,re.frame,c||a),Re.dispatchEvent({type:re.type,data:re.inputSource}))}function X(){r.removeEventListener("select",ie),r.removeEventListener("selectstart",ie),r.removeEventListener("selectend",ie),r.removeEventListener("squeeze",ie),r.removeEventListener("squeezestart",ie),r.removeEventListener("squeezeend",ie),r.removeEventListener("end",X),r.removeEventListener("inputsourceschange",he);for(let re=0;re<A.length;re++){const xe=T[re];xe!==null&&(T[re]=null,A[re].disconnect(xe))}N=null,W=null,m.reset();for(const re in p)delete p[re];if(e.setRenderTarget(w),f=null,d=null,h=null,r=null,S=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(b),e.setSize(_.width,_.height,!1),z!==null){const re=z.camera;re.fov=z.fov,re.zoom=z.zoom,re.updateProjectionMatrix(),z=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){s=re,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){o=re,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(re){c=re},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&v&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(re){if(r=re,r!==null){if(w=e.getRenderTarget(),r.addEventListener("select",ie),r.addEventListener("selectstart",ie),r.addEventListener("selectend",ie),r.addEventListener("squeeze",ie),r.addEventListener("squeezestart",ie),r.addEventListener("squeezeend",ie),r.addEventListener("end",X),r.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await n.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Re=null,Oe=null,Ee=null;y.depth&&(Ee=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Re=y.stencil?$i:Wi,Oe=y.stencil?is:ei);const He={colorFormat:n.RGBA8,depthFormat:Ee,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(He),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new Jn(d.textureWidth,d.textureHeight,{format:Kn,type:Mn,depthTexture:new rs(d.textureWidth,d.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,Re),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Re={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,n,Re),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Jn(f.framebufferWidth,f.framebufferHeight,{format:Kn,type:Mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function he(re){for(let xe=0;xe<re.removed.length;xe++){const Re=re.removed[xe],Oe=T.indexOf(Re);Oe>=0&&(T[Oe]=null,A[Oe].disconnect(Re))}for(let xe=0;xe<re.added.length;xe++){const Re=re.added[xe];let Oe=T.indexOf(Re);if(Oe===-1){for(let He=0;He<A.length;He++)if(He>=T.length){T.push(Re),Oe=He;break}else if(T[He]===null){T[He]=Re,Oe=He;break}if(Oe===-1)break}const Ee=A[Oe];Ee&&Ee.connect(Re)}}function K(re,xe){xe===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(xe.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(r===null)return;let xe=re.near,Re=re.far;m.texture!==null&&(m.depthNear>0&&(xe=m.depthNear),m.depthFar>0&&(Re=m.depthFar)),$.near=F.near=I.near=xe,$.far=F.far=I.far=Re,(N!==$.near||W!==$.far)&&(r.updateRenderState({depthNear:$.near,depthFar:$.far}),N=$.near,W=$.far),$.layers.mask=re.layers.mask|6,I.layers.mask=$.layers.mask&-5,F.layers.mask=$.layers.mask&-3;const Oe=re.parent,Ee=$.cameras;K($,Oe);for(let He=0;He<Ee.length;He++)K(Ee[He],Oe);$.projectionMatrix.copy(I.projectionMatrix),$.projectionMatrixInverse.copy(I.projectionMatrixInverse),z===null&&re.isPerspectiveCamera&&(z={camera:re,fov:re.fov,zoom:re.zoom}),ae(re,$,Oe)};function ae(re,xe,Re){Re===null?re.matrix.copy(xe.matrixWorld):(re.matrix.copy(Re.matrixWorld),re.matrix.invert(),re.matrix.multiply(xe.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(xe.projectionMatrix),re.projectionMatrixInverse.copy(xe.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ta*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(re){l=re,d!==null&&(d.fixedFoveation=re),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=re)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh($)},this.getCameraTexture=function(re){return p[re]};let de=null;function Ie(re,xe){if(u=xe.getViewerPose(c||a),g=xe,u!==null){const Re=u.views;f!==null&&(e.setRenderTargetFramebuffer(S,f.framebuffer),e.setRenderTarget(S));let Oe=!1;Re.length!==$.cameras.length&&($.cameras.length=0,Oe=!0);for(let ke=0;ke<Re.length;ke++){const ot=Re[ke];let ct=null;if(f!==null)ct=f.getViewport(ot);else{const Ut=h.getViewSubImage(d,ot);ct=Ut.viewport,ke===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(S))}let Ye=B[ke];Ye===void 0&&(Ye=new kn,Ye.layers.enable(ke),Ye.viewport=new Et,B[ke]=Ye),Ye.matrix.fromArray(ot.transform.matrix),Ye.matrix.decompose(Ye.position,Ye.quaternion,Ye.scale),Ye.projectionMatrix.fromArray(ot.projectionMatrix),Ye.projectionMatrixInverse.copy(Ye.projectionMatrix).invert(),Ye.viewport.set(ct.x,ct.y,ct.width,ct.height),ke===0&&($.matrix.copy(Ye.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Oe===!0&&$.cameras.push(Ye)}const Ee=r.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){h=i.getBinding();const ke=h.getDepthInformation(Re[0]);ke&&ke.isValid&&ke.texture&&m.init(ke,r.renderState)}if(Ee&&Ee.includes("camera-access")&&v){e.state.unbindTexture(),h=i.getBinding();for(let ke=0;ke<Re.length;ke++){const ot=Re[ke].camera;if(ot){let ct=p[ot];ct||(ct=new Fh,p[ot]=ct);const Ye=h.getCameraImage(ot);ct.sourceTexture=Ye}}}}for(let Re=0;Re<A.length;Re++){const Oe=T[Re],Ee=A[Re];Oe!==null&&Ee!==void 0&&Ee.update(Oe,xe,c||a)}de&&de(re,xe),xe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:xe}),g=null}const $e=new Hh;$e.setAnimationLoop(Ie),this.setAnimationLoop=function(re){de=re},this.dispose=function(){}}}const vS=new pt,Jh=new Ge;Jh.set(-1,0,0,0,1,0,0,0,1);function xS(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,kh(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,y,w,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,y,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const y=e.get(p),w=y.envMap,S=y.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(vS.makeRotationFromEuler(S)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Jh),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,y,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*y,m.scale.value=w*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,y){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const y=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yS(t,e,n,i){let r={},s={};function a(y,w){const S=w.program;i.uniformBlockBinding(y,S,r[y.id])}function o(y,w){let S=r[y.id];S===void 0&&(g(y),S=l(y),r[y.id]=S,y.addEventListener("dispose",m));const A=w.program;i.updateUBOMapping(y,A);const T=e.render.frame;s[y.id]!==T&&(c(y),s[y.id]=T)}function l(y){const w=t.createBuffer(),S=y.__size,A=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,w),t.bufferData(t.UNIFORM_BUFFER,S,A),t.bindBuffer(t.UNIFORM_BUFFER,null),w}function c(y){const w=r[y.id],S=y.uniforms,A=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let T=0,_=S.length;T<_;T++){const b=S[T];if(Array.isArray(b))for(let z=0,I=b.length;z<I;z++)u(b[z],T,z,A);else u(b,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(y,w,S,A){if(d(y,w,S,A)===!0){const T=y.__offset,_=y.value;if(Array.isArray(_)){let b=0;for(let z=0;z<_.length;z++){const I=_[z],F=v(I,!0);h(I,y.__data,b),b+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else h(_,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,y.__data)}}function h(y,w,S){typeof y=="number"||typeof y=="boolean"?w[S]=y:y.isMatrix3?(w[S]=y.elements[0],w[S+1]=y.elements[1],w[S+2]=y.elements[2],w[S+3]=0,w[S+4]=y.elements[3],w[S+5]=y.elements[4],w[S+6]=y.elements[5],w[S+7]=0,w[S+8]=y.elements[6],w[S+9]=y.elements[7],w[S+10]=y.elements[8],w[S+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-S),S):y.toArray(w,S)}function d(y,w,S,A){const T=y.value,_=w+"_"+S;if(Array.isArray(T)){A[_]===void 0&&(A[_]=[]);const b=A[_];let z=!1;for(let I=0;I<T.length;I++)f(T[I],b,I)===!0&&(z=!0);return z}return f(T,A,_)}function f(y,w,S){if(w[S]===void 0)return typeof y=="number"||typeof y=="boolean"?w[S]=y:ArrayBuffer.isView(y)?w[S]=y.slice():w[S]=y.clone(),!0;{const A=w[S];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return w[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function g(y){const w=y.uniforms;let S=0;const A=16;for(let _=0,b=w.length;_<b;_++){const z=Array.isArray(w[_])?w[_]:[w[_]];for(let I=0,F=z.length;I<F;I++){const B=z[I],$=Array.isArray(B.value)?B.value:[B.value],N=Array.isArray(w[_])||Array.isArray(B.value);let W=S;for(let X=0,he=$.length;X<he;X++){const K=$[X],ae=v(K,N),de=S%A,Ie=de%ae.boundary,$e=de+Ie;S+=Ie,$e!==0&&A-$e<ae.storage&&(S+=A-$e),X===0&&(W=S),S+=ae.storage}const ie=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new ie((S-W)/Float32Array.BYTES_PER_ELEMENT),B.__offset=W}}const T=S%A;return T>0&&(S+=A-T),y.__size=S,y.__cache={},this}function v(y,w){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(y){const w=y.target;w.removeEventListener("dispose",m),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function p(){for(const y in r)t.deleteBuffer(r[y]);r={},s={}}return{bind:a,update:o,dispose:p}}const SS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Xn=null;function bS(){return Xn===null&&(Xn=new Dh(SS,16,16,yr,ti),Xn.name="DFG_LUT",Xn.minFilter=vn,Xn.magFilter=vn,Xn.wrapS=gi,Xn.wrapT=gi,Xn.generateMipmaps=!1,Xn.needsUpdate=!0),Xn}class MS{constructor(e={}){const{canvas:n=Rg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Mn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const v=f,m=new Set([Jc,jc,Kc]),p=new Set([Mn,ei,Qs,is,Zc,qc]),y=new Uint32Array(4),w=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const _=[],b=[];let z=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let F=!1,B=null,$=null,N=null,W=null;this._outputColorSpace=Ot;let ie=0,X=0,he=null,K=-1,ae=null;const de=new Et,Ie=new Et;let $e=null;const re=new Ze(0);let xe=0,Re=n.width,Oe=n.height,Ee=1,He=null,vt=null;const ke=new Et(0,0,Re,Oe),ot=new Et(0,0,Re,Oe);let ct=!1;const Ye=new na,Ut=new ru;let ut=!1,zt=!1;const xt=new pt,un=new O,Rt=new Et,tn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dn=!1;function fn(){return he===null?Ee:1}let k=i;function hn(M,U){return n.getContext(M,U)}let mt,D,P,te,j,ee,E,x,R,G,L,ne,ue,Y,Q,fe,C,J,Z,ge,pe,me,ye;try{const M={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vc}`),n.addEventListener("webglcontextlost",Ce,!1),n.addEventListener("webglcontextrestored",ze,!1),n.addEventListener("webglcontextcreationerror",Se,!1),k===null){const U="webgl2";if(k=hn(U,M),k===null)throw hn(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}De()}catch(M){throw n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),at("WebGLRenderer: "+M.message),M}function De(){mt=new Tx(k),mt.init(),pe=new hS(k,mt),D=new mx(k,mt,e,pe),P=new dS(k,mt),D.reversedDepthBuffer&&d&&P.buffers.depth.setReversed(!0),$=k.createFramebuffer(),N=k.createFramebuffer(),W=k.createFramebuffer(),te=new Cx(k),j=new jy,ee=new fS(k,mt,P,j,D,pe,te),E=new wx(I),x=new I0(k),me=new hx(k,x),R=new Ax(k,x,te,me),G=new Ix(k,R,x,me,te),J=new Px(k,D,ee),Q=new gx(j),L=new Ky(I,E,mt,D,me,Q),ne=new xS(I,j),ue=new Qy,Y=new sS(mt),C=new fx(I,E,P,G,g,l),fe=new uS(I,G,D),ye=new yS(k,te,D,P),Z=new px(k,mt,te),ge=new Rx(k,mt,te),te.programs=L.programs,I.capabilities=D,I.extensions=mt,I.properties=j,I.renderLists=ue,I.shadowMap=fe,I.state=P,I.info=te}v!==Mn&&(z=new Nx(v,n.width,n.height,o,r,s));const oe=new _S(I,k);this.xr=oe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const M=mt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=mt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(M){M!==void 0&&(Ee=M,this.setSize(Re,Oe,!1))},this.getSize=function(M){return M.set(Re,Oe)},this.setSize=function(M,U,q=!0){if(oe.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Re=M,Oe=U,n.width=Math.floor(M*Ee),n.height=Math.floor(U*Ee),q===!0&&(n.style.width=M+"px",n.style.height=U+"px"),z!==null&&z.setSize(n.width,n.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Re*Ee,Oe*Ee).floor()},this.setDrawingBufferSize=function(M,U,q){Re=M,Oe=U,Ee=q,n.width=Math.floor(M*q),n.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===Mn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}z.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(de)},this.getViewport=function(M){return M.copy(ke)},this.setViewport=function(M,U,q,H){M.isVector4?ke.set(M.x,M.y,M.z,M.w):ke.set(M,U,q,H),P.viewport(de.copy(ke).multiplyScalar(fn()).round())},this.getScissor=function(M){return M.copy(ot)},this.setScissor=function(M,U,q,H){M.isVector4?ot.set(M.x,M.y,M.z,M.w):ot.set(M,U,q,H),P.scissor(Ie.copy(ot).multiplyScalar(fn()).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(M){P.setScissorTest(ct=M)},this.setOpaqueSort=function(M){He=M},this.setTransparentSort=function(M){vt=M},this.getClearColor=function(M){return M.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let H=0;if(M){let V=!1;if(he!==null){const Me=he.texture.format;V=m.has(Me)}if(V){const Me=he.texture.type,Pe=p.has(Me),be=C.getClearColor(),Te=C.getClearAlpha(),Ue=be.r,Ve=be.g,Je=be.b;Pe?(y[0]=Ue,y[1]=Ve,y[2]=Je,y[3]=Te,k.clearBufferuiv(k.COLOR,0,y)):(w[0]=Ue,w[1]=Ve,w[2]=Je,w[3]=Te,k.clearBufferiv(k.COLOR,0,w))}else H|=k.COLOR_BUFFER_BIT}U&&(H|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&k.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),B=M},this.dispose=function(){n.removeEventListener("webglcontextlost",Ce,!1),n.removeEventListener("webglcontextrestored",ze,!1),n.removeEventListener("webglcontextcreationerror",Se,!1),C.dispose(),ue.dispose(),Y.dispose(),ee.dispose(),j.dispose(),E.dispose(),G.dispose(),R.dispose(),me.dispose(),ye.dispose(),L.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",_s),oe.removeEventListener("sessionend",Ke),Vt.stop()};function Ce(M){M.preventDefault(),Eo("WebGLRenderer: Context Lost."),F=!0}function ze(){Eo("WebGLRenderer: Context Restored."),F=!1;const M=te.autoReset,U=fe.enabled,q=fe.autoUpdate,H=fe.needsUpdate,V=fe.type;De(),te.autoReset=M,fe.enabled=U,fe.autoUpdate=q,fe.needsUpdate=H,fe.type=V}function Se(M){at("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function st(M){const U=M.target;U.removeEventListener("dispose",st),bt(U)}function bt(M){Vn(M),j.remove(M)}function Vn(M){const U=j.get(M).programs;U!==void 0&&(U.forEach(function(q){L.releaseProgram(q)}),M.isShaderMaterial&&L.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,H,V,Me){U===null&&(U=tn);const Pe=V.isMesh&&V.matrixWorld.determinantAffine()<0,be=Xm(M,U,q,H,V);P.setMaterial(H,Pe);let Te=q.index,Ue=1;if(H.wireframe===!0){if(Te=R.getWireframeAttribute(q),Te===void 0)return;Ue=2}const Ve=q.drawRange,Je=q.attributes.position;let Le=Ve.start*Ue,Qe=(Ve.start+Ve.count)*Ue;Me!==null&&(Le=Math.max(Le,Me.start*Ue),Qe=Math.min(Qe,(Me.start+Me.count)*Ue)),Te!==null?(Le=Math.max(Le,0),Qe=Math.min(Qe,Te.count)):Je!=null&&(Le=Math.max(Le,0),Qe=Math.min(Qe,Je.count));const Ct=Qe-Le;if(Ct<0||Ct===1/0)return;me.setup(V,H,be,q,Te);let gt,ht=Z;if(Te!==null&&(gt=x.get(Te),ht=ge,ht.setIndex(gt)),V.isMesh)H.wireframe===!0?(P.setLineWidth(H.wireframeLinewidth*fn()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(V.isLine){let qt=H.linewidth;qt===void 0&&(qt=1),P.setLineWidth(qt*fn()),V.isLineSegments?ht.setMode(k.LINES):V.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else V.isPoints?ht.setMode(k.POINTS):V.isSprite&&ht.setMode(k.TRIANGLES);if(V.isBatchedMesh)if(mt.get("WEBGL_multi_draw"))ht.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const qt=V._multiDrawStarts,Ne=V._multiDrawCounts,nn=V._multiDrawCount,lt=Te?x.get(Te).bytesPerElement:1,nr=j.get(H).currentProgram.getUniforms();for(let Yt=0;Yt<nn;Yt++)nr.setValue(k,"_gl_DrawID",Yt),ht.render(qt[Yt]/lt,Ne[Yt])}else if(V.isInstancedMesh)ht.renderInstances(Le,Ct,V.count);else if(q.isInstancedBufferGeometry){const qt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Ne=Math.min(q.instanceCount,qt);ht.renderInstances(Le,Ct,Ne)}else ht.render(Le,Ct)};function Cr(M,U,q,H){B!==null&&M.isNodeMaterial&&B.setObject(H,M),ut===!0&&Q.setState(M,q,!1),M.transparent===!0&&M.side===In&&M.forceSinglePass===!1?(M.side=cn,M.needsUpdate=!0,er(M,U,H),M.side=xr,M.needsUpdate=!0,er(M,U,H),M.side=In):er(M,U,H)}this.compile=function(M,U,q=null){q===null&&(q=M),B!==null&&B.renderStart(M,U,q),T=Y.get(q),T.init(U),b.push(T),q.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),M!==q&&M.traverseVisible(function(V){V.isLight&&V.layers.test(U.layers)&&(T.pushLight(V),V.castShadow&&T.pushShadow(V))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),zt=this.localClippingEnabled,ut=Q.init(this.clippingPlanes,zt),ut===!0&&Q.setGlobalState(this.clippingPlanes,U),B!==null&&fe.render(T.state.shadowsArray,q,U);const H=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let Pe=0;Pe<Me.length;Pe++){const be=Me[Pe];Cr(be,q,U,V),H.add(be)}else Cr(Me,q,U,V),H.add(Me)}),T=b.pop(),B!==null&&B.renderEnd(),H},this.compileAsync=function(M,U,q=null){const H=this.compile(M,U,q);return new Promise(V=>{function Me(){if(H.forEach(function(Pe){const Te=j.get(Pe).currentProgram;(Te===void 0||Te.isReady())&&H.delete(Pe)}),H.size===0){V(M);return}setTimeout(Me,10)}mt.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Ti=null;function ji(M){Ti&&Ti(M)}function _s(){Vt.stop()}function Ke(){Vt.start()}const Vt=new Hh;Vt.setAnimationLoop(ji),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(M){Ti=M,oe.setAnimationLoop(M),M===null?Vt.stop():Vt.start()},oe.addEventListener("sessionstart",_s),oe.addEventListener("sessionend",Ke),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;B!==null&&B.renderStart(M,U);const q=oe.enabled===!0&&oe.isPresenting===!0,H=z!==null&&(he===null||q)&&z.begin(I,he);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(z===null||z.isCompositing()===!1)&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),M.isScene===!0&&M.onBeforeRender(I,M,U,he),T=Y.get(M,b.length),T.init(U),T.state.textureUnits=ee.getTextureUnits(),b.push(T),xt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?Ut.setFromArrayCamera(U):Ye.setFromProjectionMatrix(xt,Bn,U.reversedDepth),zt=this.localClippingEnabled,ut=Q.init(this.clippingPlanes,zt),A=ue.get(M,_.length),A.init(),_.push(A),this.info.render.frame++,oe.enabled===!0&&oe.isPresenting===!0){const Pe=I.xr.getDepthSensingMesh();Pe!==null&&Ji(Pe,U,-1/0,I.sortObjects)}Ji(M,U,0,I.sortObjects),A.finish(),B!==null&&B.updateLights(T.state.lightsArray),I.sortObjects===!0&&A.sort(He,vt),dn=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,dn&&C.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),ut===!0&&Q.beginShadows();const V=T.state.shadowsArray;if(fe.render(V,M,U),ut===!0&&Q.endShadows(),(H&&z.hasRenderPass())===!1){const Pe=A.opaque,be=A.transmissive;if(T.setupLights(),U.isArrayCamera){const Te=U.cameras;if(be.length>0)for(let Ue=0,Ve=Te.length;Ue<Ve;Ue++){const Je=Te[Ue];vs(Pe,be,M,Je)}dn&&C.render(M);for(let Ue=0,Ve=Te.length;Ue<Ve;Ue++){const Je=Te[Ue];si(A,M,Je,Je.viewport)}}else be.length>0&&vs(Pe,be,M,U),dn&&C.render(M),si(A,M,U)}he!==null&&X===0&&(ee.updateMultisampleRenderTarget(he),ee.updateRenderTargetMipmap(he)),H&&z.end(I),M.isScene===!0&&M.onAfterRender(I,M,U),me.resetDefaultState(),K=-1,ae=null,b.pop(),b.length>0?(T=b[b.length-1],ee.setTextureUnits(T.state.textureUnits),ut===!0&&Q.setGlobalState(I.clippingPlanes,T.state.camera)):T=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,B!==null&&B.renderEnd()};function Ji(M,U,q,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)T.pushLight(M),M.castShadow&&T.pushShadow(M);else if(M.isSprite){const Pe=U.isArrayCamera?Ut:Ye;if(!M.frustumCulled||M.intersectsFrustum(Pe)){H&&Rt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);const be=G.update(M),Te=M.material;Te.visible&&A.push(M,be,Te,q,Rt.z,null,U)}}else if(M.isMesh||M.isLine||M.isPoints){const Pe=U.isArrayCamera?Ut:Ye;if(!M.frustumCulled||M.intersectsFrustum(Pe)){const be=G.update(M),Te=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Rt.copy(M.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Rt.copy(be.boundingSphere.center)),Rt.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(Te)){const Ue=be.groups;for(let Ve=0,Je=Ue.length;Ve<Je;Ve++){const Le=Ue[Ve],Qe=Te[Le.materialIndex];Qe&&Qe.visible&&A.push(M,be,Qe,q,Rt.z,Le,U)}}else Te.visible&&A.push(M,be,Te,q,Rt.z,null,U)}}}const Me=M.children;for(let Pe=0,be=Me.length;Pe<be;Pe++)Ji(Me[Pe],U,q,H)}function si(M,U,q,H){const{opaque:V,transmissive:Me,transparent:Pe}=M;T.setupLightsView(q),ut===!0&&Q.setGlobalState(I.clippingPlanes,q),H&&P.viewport(de.copy(H)),V.length>0&&Qi(V,U,q),Me.length>0&&Qi(Me,U,q),Pe.length>0&&Qi(Pe,U,q),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function vs(M,U,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[H.id]===void 0){const Le=mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[H.id]=new Jn(1,1,{generateMipmaps:!0,type:Le?ti:Mn,minFilter:Bi,samples:Math.max(4,D.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Me=T.state.transmissionRenderTarget[H.id],Pe=H.viewport||de;Me.setSize(Pe.z*I.transmissionResolutionScale,Pe.w*I.transmissionResolutionScale);const be=I.getRenderTarget(),Te=I.getActiveCubeFace(),Ue=I.getActiveMipmapLevel();I.setRenderTarget(Me),I.getClearColor(re),xe=I.getClearAlpha(),xe<1&&I.setClearColor(16777215,.5),I.clear(),dn&&C.render(q);const Ve=I.toneMapping;I.toneMapping=xi;const Je=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),T.setupLightsView(H),ut===!0&&Q.setGlobalState(I.clippingPlanes,H),Qi(M,q,H),ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me),mt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let Qe=0,Ct=U.length;Qe<Ct;Qe++){const gt=U[Qe],{object:ht,geometry:qt,material:Ne,group:nn}=gt;if(Ne.side===In&&ht.layers.test(H.layers)){const lt=Ne.side;Ne.side=cn,Ne.needsUpdate=!0,_a(ht,q,H,qt,Ne,nn),Ne.side=lt,Ne.needsUpdate=!0,Le=!0}}Le===!0&&(ee.updateMultisampleRenderTarget(Me),ee.updateRenderTargetMipmap(Me))}I.setRenderTarget(be,Te,Ue),I.setClearColor(re,xe),Je!==void 0&&(H.viewport=Je),I.toneMapping=Ve}function Qi(M,U,q){const H=U.isScene===!0?U.overrideMaterial:null;for(let V=0,Me=M.length;V<Me;V++){const Pe=M[V],{object:be,geometry:Te,group:Ue}=Pe;let Ve=Pe.material;Ve.allowOverride===!0&&H!==null&&(Ve=H),be.layers.test(q.layers)&&_a(be,U,q,Te,Ve,Ue)}}function _a(M,U,q,H,V,Me){B!==null&&V.isNodeMaterial&&B.setObject(M,V),M.onBeforeRender(I,U,q,H,V,Me),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(I,U,q,H,M,Me),V.transparent===!0&&V.side===In&&V.forceSinglePass===!1?(V.side=cn,V.needsUpdate=!0,I.renderBufferDirect(q,U,H,V,M,Me),V.side=xr,V.needsUpdate=!0,I.renderBufferDirect(q,U,H,V,M,Me),V.side=In):I.renderBufferDirect(q,U,H,V,M,Me),M.onAfterRender(I,U,q,H,V,Me)}function va(M){let U=0;for(const q of M)q.texture!==null&&U++;return U}function er(M,U,q){U.isScene!==!0&&(U=tn);const H=j.get(M),V=T.state.lights,Me=T.state.shadowsArray,Pe=V.state.version,be=L.getParameters(M,V.state,Me,U,q,T.state.lightProbeGridArray),Te=L.getProgramCacheKey(be);let Ue=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;const Ve=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=E.get(M.envMap||H.environment,Ve),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ue===void 0&&(M.addEventListener("dispose",st),Ue=new Map,H.programs=Ue,H.programVariants=new Map);let Je=Ue.get(Te);if(Je!==void 0){if(H.currentProgram===Je&&H.lightsStateVersion===Pe)return xs(M,be),Je}else be.uniforms=L.getUniforms(M),B!==null&&M.isNodeMaterial&&B.build(M,q,be),M.onBeforeCompile(be,I),Je=L.acquireProgram(be,Te),Ue.set(Te,Je),H.uniforms=be.uniforms;const Le=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=Q.uniform),xs(M,be),H.needsLights=qm(M),H.lightsStateVersion=Pe,H.needsLights&&(Le.ambientLightColor.value=V.state.ambient,Le.lightProbe.value=V.state.probe,Le.sunLights.value=V.state.sun,Le.sunLightShadows.value=V.state.sunShadow,Le.directionalLights.value=V.state.directional,Le.directionalLightShadows.value=V.state.directionalShadow,Le.spotLights.value=V.state.spot,Le.spotLightShadows.value=V.state.spotShadow,Le.rectAreaLights.value=V.state.rectArea,Le.ltc_1.value=V.state.rectAreaLTC1,Le.ltc_2.value=V.state.rectAreaLTC2,Le.pointLights.value=V.state.point,Le.pointLightShadows.value=V.state.pointShadow,Le.hemisphereLights.value=V.state.hemi,Le.sunShadowMatrix.value=V.state.sunShadowMatrix,Le.sunShadowCascade.value=V.state.sunShadowCascade,Le.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Le.spotLightMatrix.value=V.state.spotLightMatrix,Le.spotLightMap.value=V.state.spotLightMap,Le.pointShadowMatrix.value=V.state.pointShadowMatrix),H.numLightProbeGrids=va(T.state.lightProbeGridArray),H.currentProgram=Je,H.uniformsList=null,Je}function xa(M,U,q,H,V){const Me=j.get(M),Pe=Me.currentProgram.id+","+H+","+V;let be=Me.programVariants.get(Pe);return be===void 0?(be=er(M,U,q),Me.programVariants.set(Pe,be)):(Me.currentProgram=be,Me.uniformsList=null,Me.outputColorSpace=H,Me.toneMapping=V),be}function tr(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=oo.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function xs(M,U){const q=j.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Xm(M,U,q,H,V){U.isScene!==!0&&(U=tn),ee.resetTextureUnits();const Me=U.fog,Pe=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,be=he===null?I.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:et.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Ue=E.get(H.envMap||Pe,Te),Ve=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Je=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Le=!!q.morphAttributes.position,Qe=!!q.morphAttributes.normal,Ct=!!q.morphAttributes.color;let gt=xi;H.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(gt=I.toneMapping);const ht=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,qt=ht!==void 0?ht.length:0,Ne=j.get(H),nn=T.state.lights;if(ut===!0&&(zt===!0||M!==ae)){const Mt=M===ae&&H.id===K;Q.setState(H,M,Mt)}let lt=!1,nr=!1;H.version===Ne.__version?Ne.needsLights&&Ne.lightsStateVersion!==nn.state.version||V.isBatchedMesh&&Ne.batching===!1||!V.isBatchedMesh&&Ne.batching===!0||V.isBatchedMesh&&Ne.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Ne.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Ne.instancing===!1||!V.isInstancedMesh&&Ne.instancing===!0||V.isSkinnedMesh&&Ne.skinning===!1||!V.isSkinnedMesh&&Ne.skinning===!0||V.isInstancedMesh&&Ne.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ne.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ne.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ne.instancingMorph===!1&&V.morphTexture!==null||Ne.envMap!==Ue||H.fog===!0&&Ne.fog!==Me||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==Q.numPlanes||Ne.numIntersection!==Q.numIntersection)||Ne.vertexAlphas!==Ve||Ne.vertexTangents!==Je||Ne.morphTargets!==Le||Ne.morphNormals!==Qe||Ne.morphColors!==Ct||Ne.morphTargetsCount!==qt||Ne.numLightProbeGrids!==va(T.state.lightProbeGridArray)?lt=!0:(Ne.outputColorSpace!==be||Ne.toneMapping!==gt)&&(nr=!0):(lt=!0,Ne.__version=H.version);let Yt=Ne.currentProgram;(lt===!0||nr===!0)&&(Yt=nr===!0?xa(H,U,V,be,gt):er(H,U,V),B&&H.isNodeMaterial&&B.onUpdateProgram(H,Yt,Ne));let ya=!1,Ai=!1,ir=!1;const it=Yt.getUniforms(),Wt=Ne.uniforms;if(P.useProgram(Yt.program)&&(ya=!0,Ai=!0,ir=!0),H.id!==K&&(K=H.id,Ai=!0),ya||ae!==M){P.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),it.setValue(k,"projectionMatrix",M.projectionMatrix),it.setValue(k,"viewMatrix",M.matrixWorldInverse);const Bt=it.map.cameraPosition;Bt!==void 0&&Bt.setValue(k,un.setFromMatrixPosition(M.matrixWorld)),D.logarithmicDepthBuffer&&it.setValue(k,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(k,"isOrthographic",M.isOrthographicCamera===!0),ae!==M&&(ae=M,Ai=!0,ir=!0)}if(Ne.needsLights&&(nn.state.sunShadowMap.length>0&&it.setValue(k,"sunShadowMap",nn.state.sunShadowMap,ee),nn.state.directionalShadowMap.length>0&&it.setValue(k,"directionalShadowMap",nn.state.directionalShadowMap,ee),nn.state.spotShadowMap.length>0&&it.setValue(k,"spotShadowMap",nn.state.spotShadowMap,ee),nn.state.pointShadowMap.length>0&&it.setValue(k,"pointShadowMap",nn.state.pointShadowMap,ee)),V.isSkinnedMesh){it.setOptional(k,V,"bindMatrix"),it.setOptional(k,V,"bindMatrixInverse");const Mt=V.skeleton;Mt&&(Mt.boneTexture===null&&Mt.computeBoneTexture(),it.setValue(k,"boneTexture",Mt.boneTexture,ee))}V.isBatchedMesh&&(it.setOptional(k,V,"batchingTexture"),it.setValue(k,"batchingTexture",V._matricesTexture,ee),it.setOptional(k,V,"batchingIdTexture"),it.setValue(k,"batchingIdTexture",V._indirectTexture,ee),it.setOptional(k,V,"batchingColorTexture"),V._colorsTexture!==null&&it.setValue(k,"batchingColorTexture",V._colorsTexture,ee));const Dn=q.morphAttributes;if((Dn.position!==void 0||Dn.normal!==void 0||Dn.color!==void 0)&&J.update(V,q,Yt),(Ai||Ne.receiveShadow!==V.receiveShadow)&&(Ne.receiveShadow=V.receiveShadow,it.setValue(k,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(Wt.envMapIntensity.value=U.environmentIntensity),Wt.dfgLUT!==void 0&&(Wt.dfgLUT.value=bS()),Ai){if(it.setValue(k,"toneMappingExposure",I.toneMappingExposure),Ne.needsLights&&Zm(Wt,ir),Me&&H.fog===!0&&ne.refreshFogUniforms(Wt,Me),ne.refreshMaterialUniforms(Wt,H,Ee,Oe,T.state.transmissionRenderTarget[M.id]),Ne.needsLights&&Ne.numLightProbeGrids>0){const Mt=S;let Bt=0;for(const ai of T.state.lightProbeGridArray)ai.texture!==null&&(Mt.textures[Bt]=ai.texture,Mt.min[Bt]=ai.boundingBox.min,Mt.max[Bt]=ai.boundingBox.max,Mt.resolution[Bt]=ai.resolution,Bt++);for(const ai in Mt)Mt[ai].length=Bt;Wt.probesSH.value=Mt.textures,Wt.probesMin.value=Mt.min,Wt.probesMax.value=Mt.max,Wt.probesResolution.value=Mt.resolution}oo.upload(k,tr(Ne),Wt,ee)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(oo.upload(k,tr(Ne),Wt,ee),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(k,"center",V.center),it.setValue(k,"modelViewMatrix",V.modelViewMatrix),it.setValue(k,"normalMatrix",V.normalMatrix),it.setValue(k,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const Mt=H.uniformsGroups;for(let Bt=0,ai=Mt.length;Bt<ai;Bt++){const Zu=Mt[Bt];ye.update(Zu,Yt),ye.bind(Zu,Yt)}}return Yt}function Zm(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function qm(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return ie},this.getActiveMipmapLevel=function(){return X},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(M,U,q){const H=j.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),j.get(M.texture).__webglTexture=U,j.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){const q=j.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){he=M,ie=U,X=q;let H=null,V=!1,Me=!1;if(M){const be=j.get(M);if(be.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(k.FRAMEBUFFER,be.__webglFramebuffer),de.copy(M.viewport),Ie.copy(M.scissor),$e=M.scissorTest,P.viewport(de),P.scissor(Ie),P.setScissorTest($e),K=-1;return}else if(be.__webglFramebuffer===void 0)ee.setupRenderTarget(M);else if(be.__hasExternalTextures)ee.rebindTextures(M,j.get(M.texture).__webglTexture,j.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ve=M.depthTexture;if(be.__boundDepthTexture!==Ve){if(Ve!==null&&j.has(Ve)&&(M.width!==Ve.image.width||M.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(M)}}const Te=M.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Me=!0);const Ue=j.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ue[U])?H=Ue[U][q]:H=Ue[U],V=!0):M.samples>0&&ee.useMultisampledRTT(M)===!1?H=j.get(M).__webglMultisampledFramebuffer:Array.isArray(Ue)?H=Ue[q]:H=Ue,de.copy(M.viewport),Ie.copy(M.scissor),$e=M.scissorTest}else de.copy(ke).multiplyScalar(Ee).floor(),Ie.copy(ot).multiplyScalar(Ee).floor(),$e=ct;if(q!==0&&(H=$),P.bindFramebuffer(k.FRAMEBUFFER,H)&&P.drawBuffers(M,H),P.viewport(de),P.scissor(Ie),P.setScissorTest($e),V){const be=j.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,q)}else if(Me){const be=U;for(let Te=0;Te<M.textures.length;Te++){const Ue=j.get(M.textures[Te]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Te,Ue.__webglTexture,q,be)}}else if(M!==null&&q!==0){const be=j.get(M.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,be.__webglTexture,q)}K=-1};function Xu(M){const U=j.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=D.textureFormatReadable(M.format),U.__typeReadable=D.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,H,V,Me,Pe,be=0){if(!(M&&M.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Te=Te[Pe],Array.isArray(Te)&&(Te=Te[0])),Te){P.bindFramebuffer(k.FRAMEBUFFER,Te);try{const Ue=M.textures[be],Ve=Ue.format,Je=Ue.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);const Le=Xu(Ue);if(Le.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&q>=0&&q<=M.height-V&&k.readPixels(U,q,H,V,pe.convert(Ve),pe.convert(Je),Me)}finally{const Ue=he!==null?j.get(he).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,H,V,Me,Pe,be=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Pe!==void 0&&(Te=Te[Pe],Array.isArray(Te)&&(Te=Te[0])),Te)if(U>=0&&U<=M.width-H&&q>=0&&q<=M.height-V){P.bindFramebuffer(k.FRAMEBUFFER,Te);const Ue=M.textures[be],Ve=Ue.format,Je=Ue.type;M.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+be);const Le=Xu(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Qe=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.bufferData(k.PIXEL_PACK_BUFFER,Me.byteLength,k.STREAM_READ),k.readPixels(U,q,H,V,pe.convert(Ve),pe.convert(Je),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Ct=he!==null?j.get(he).__webglFramebuffer:null;P.bindFramebuffer(k.FRAMEBUFFER,Ct);const gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Cg(k,gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Qe),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Me),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Qe),k.deleteSync(gt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){const H=Math.pow(2,-q),V=Math.floor(M.image.width*H),Me=Math.floor(M.image.height*H),Pe=U!==null?U.x:0,be=U!==null?U.y:0;ee.setTexture2D(M,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,Pe,be,V,Me),P.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,H=null,V=0,Me=0){let Pe,be,Te,Ue,Ve,Je,Le,Qe,Ct;const gt=M.isCompressedTexture?M.mipmaps[Me]:M.image;if(q!==null)Pe=q.max.x-q.min.x,be=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Ue=q.min.x,Ve=q.min.y,Je=q.isBox3?q.min.z:0;else{const it=Math.pow(2,-V);Pe=Math.floor(gt.width*it),be=Math.floor(gt.height*it),M.isDataArrayTexture?Te=gt.depth:M.isData3DTexture?Te=Math.floor(gt.depth*it):Te=1,Ue=0,Ve=0,Je=0}H!==null?(Le=H.x,Qe=H.y,Ct=H.z):(Le=0,Qe=0,Ct=0);const ht=pe.convert(U.format),qt=pe.convert(U.type);let Ne;U.isData3DTexture?(ee.setTexture3D(U,0),Ne=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(ee.setTexture2DArray(U,0),Ne=k.TEXTURE_2D_ARRAY):(ee.setTexture2D(U,0),Ne=k.TEXTURE_2D),P.activeTexture(k.TEXTURE0),P.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const nn=P.getParameter(k.UNPACK_ROW_LENGTH),lt=P.getParameter(k.UNPACK_IMAGE_HEIGHT),nr=P.getParameter(k.UNPACK_SKIP_PIXELS),Yt=P.getParameter(k.UNPACK_SKIP_ROWS),ya=P.getParameter(k.UNPACK_SKIP_IMAGES);P.pixelStorei(k.UNPACK_ROW_LENGTH,gt.width),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,gt.height),P.pixelStorei(k.UNPACK_SKIP_PIXELS,Ue),P.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),P.pixelStorei(k.UNPACK_SKIP_IMAGES,Je);const Ai=M.isDataArrayTexture||M.isData3DTexture,ir=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){const it=j.get(M),Wt=j.get(U),Dn=j.get(it.__renderTarget),Mt=j.get(Wt.__renderTarget);P.bindFramebuffer(k.READ_FRAMEBUFFER,Dn.__webglFramebuffer),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let Bt=0;Bt<Te;Bt++)Ai&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(M).__webglTexture,V,Je+Bt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(U).__webglTexture,Me,Ct+Bt)),k.blitFramebuffer(Ue,Ve,Ue+Pe,Ve+be,Le,Qe,Le+Pe,Qe+be,k.DEPTH_BUFFER_BIT,k.NEAREST);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||j.has(M)){const it=j.get(M),Wt=j.get(U);P.bindFramebuffer(k.READ_FRAMEBUFFER,N),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,W);for(let Dn=0;Dn<Te;Dn++)Ai?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,it.__webglTexture,V,Je+Dn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,it.__webglTexture,V),ir?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Wt.__webglTexture,Me,Ct+Dn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Wt.__webglTexture,Me),V!==0?k.blitFramebuffer(Ue,Ve,Ue+Pe,Ve+be,Le,Qe,Le+Pe,Qe+be,k.COLOR_BUFFER_BIT,k.NEAREST):ir?k.copyTexSubImage3D(Ne,Me,Le,Qe,Ct+Dn,Ue,Ve,Pe,be):k.copyTexSubImage2D(Ne,Me,Le,Qe,Ue,Ve,Pe,be);P.bindFramebuffer(k.READ_FRAMEBUFFER,null),P.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else ir?M.isDataTexture||M.isData3DTexture?k.texSubImage3D(Ne,Me,Le,Qe,Ct,Pe,be,Te,ht,qt,gt.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Ne,Me,Le,Qe,Ct,Pe,be,Te,ht,gt.data):k.texSubImage3D(Ne,Me,Le,Qe,Ct,Pe,be,Te,ht,qt,gt):M.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Me,Le,Qe,Pe,be,ht,qt,gt.data):M.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Me,Le,Qe,gt.width,gt.height,ht,gt.data):k.texSubImage2D(k.TEXTURE_2D,Me,Le,Qe,Pe,be,ht,qt,gt);P.pixelStorei(k.UNPACK_ROW_LENGTH,nn),P.pixelStorei(k.UNPACK_IMAGE_HEIGHT,lt),P.pixelStorei(k.UNPACK_SKIP_PIXELS,nr),P.pixelStorei(k.UNPACK_SKIP_ROWS,Yt),P.pixelStorei(k.UNPACK_SKIP_IMAGES,ya),Me===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&k.generateMipmap(Ne),P.unbindTexture()},this.initRenderTarget=function(M){j.get(M).__webglFramebuffer===void 0&&ee.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ee.setTextureCube(M,0):M.isData3DTexture?ee.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ee.setTexture2DArray(M,0):ee.setTexture2D(M,0),P.unbindTexture()},this.resetState=function(){ie=0,X=0,he=null,P.reset(),me.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const Kd=.003,Ao=1.2;function Ac(t,e,n,i){return{yaw:t-n*Kd,pitch:wn.clamp(e-i*Kd,-Ao,Ao)}}function Qh(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:wn.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-Ao,Ao)}}class ES{yaw=0;pitch=0;freeMode=!1;anchor=new O;freePos=new O;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new O(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new $n().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,Ac(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,Qh(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new O;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new O(-i.z,0,i.x),s=new O;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=wn.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=wn.clamp(this.freePos.y,1.1,4.4),this.freePos.z=wn.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function wS(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}const Ps=new O;function Rn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;Ps.copy(e),Ps[i]=0,Ps.normalize();const c=.5*a/(a+o),u=1-Ps.angleTo(t)/l;return Math.sign(Ps[n])===1?u*c:o/(a+o)+c+c*(1-u)}class lu extends wr{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new O,c=new O,u=new O(e,n,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,g=h.length/6,v=new O,m=.5/a;for(let p=0,y=0;p<h.length;p+=3,y+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*m,c.y-=Math.sign(c.y)*m,c.z-=Math.sign(c.z)*m,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*s,h[p+1]=u.y*Math.sign(l.y)+c.y*s,h[p+2]=u.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/g)){case 0:v.set(1,0,0),f[y+0]=Rn(v,c,"z","y",s,i),f[y+1]=1-Rn(v,c,"y","z",s,n);break;case 1:v.set(-1,0,0),f[y+0]=1-Rn(v,c,"z","y",s,i),f[y+1]=1-Rn(v,c,"y","z",s,n);break;case 2:v.set(0,1,0),f[y+0]=1-Rn(v,c,"x","z",s,e),f[y+1]=Rn(v,c,"z","x",s,i);break;case 3:v.set(0,-1,0),f[y+0]=1-Rn(v,c,"x","z",s,e),f[y+1]=1-Rn(v,c,"z","x",s,i);break;case 4:v.set(0,0,1),f[y+0]=1-Rn(v,c,"x","y",s,e),f[y+1]=1-Rn(v,c,"y","x",s,n);break;case 5:v.set(0,0,-1),f[y+0]=Rn(v,c,"x","y",s,e),f[y+1]=1-Rn(v,c,"y","x",s,n);break}}static fromJSON(e){return new lu(e.width,e.height,e.depth,e.segments,e.radius)}}const jd=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function TS(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return jd[e%jd.length]}function lo(t,e,n,i){const a=(h,d)=>h<n.minX+.2||h>n.maxX-.2||d<n.minZ+.2||d>n.maxZ-.2||i.some(f=>h>f.minX-.2&&h<f.maxX+.2&&d>f.minZ-.2&&d<f.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],l=new Set(["0,0"]);let c=-1;for(let h=0;h<o.length&&h<12e3;h++){const d=o[h];if(Math.hypot(d.x-e.x,d.z-e.z)<.48){c=h;break}for(const[f,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const v=d.x+f,m=d.z+g,p=`${Math.round((v-t.x)/.45)},${Math.round((m-t.z)/.45)}`;!l.has(p)&&!a(v,m)&&(l.add(p),o.push({x:v,z:m,parent:h}))}}if(c<0)return[];const u=[];for(let h=c;h>=0;h=o[h].parent)u.push({x:o[h].x,z:o[h].z});return u.reverse().slice(1)}const Fi={x:-7.8,z:-4.6},AS=[0,4,8,2,6,10,1,5,9,3,7,11];function Rc(t=0){const e=-Math.PI/2+AS[(t%12+12)%12]*Math.PI/6;return{x:Fi.x+Math.cos(e)*2.15,z:Fi.z+Math.sin(e)*2.15}}function Cc(t,e=0){if(t==="culture")return Rc(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const cr=(t,e,n)=>t+(e-t)*n;function ep(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=cr(1.35,.5,n),s=cr(2.2,.6,n),a=e?0:n<.35?cr(.06,0,n/.35):0,o=cr(9,4,n),l=n>.45?cr(0,.42,(n-.45)/.55):0,c=n>.55?cr(0,.12,(n-.55)/.45):0,u=n>.5?cr(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:l,slump:c,saturation:u,zzz:n>=.8}}function RS(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Xi(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const Jd=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function Wo(t){const e=Xi(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+Jd[n].map((r,s)=>Math.round(r+(Jd[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const CS={EXPLOIT:["Exploiting","calm"],BOREDOM_SNAP:["Boredom snap","snap"],YOKED_SNAP:["Boredom snap","snap"],PARADIGM_BREAKOUT:["Paradigm breakout","breakout"],CONVERGED:["Converged","converged"],FRUSTRATED:["Frustrated","frustrated"]};function as(t){if(!t)return{label:"",tone:"calm"};const e=CS[t];return e?{label:e[0],tone:e[1]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm"}}function PS(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function IS(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const Pc=t=>Math.max(0,Math.min(1,t)),LS=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,Qd=t=>{const e=Pc(t);return e===0||e===1?e:Pc(LS(e))};function NS(t,e){const n=Pc(t),i=Math.max(0,Math.floor(e)),r=Qd(n/.4),s=Array.from({length:i},(a,o)=>{const l=.4+o*.6/Math.max(1,i),c=.6/Math.max(1,i);return Qd((n-l)/c)});return{room:r,agents:s}}function DS(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function US(){const t=new s0;t.background=new Ze("#e4edf3"),t.fog=new iu("#e4edf3",34,90);const e=new kn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new wr(1,1,1),r=(D,P=.68,te=0)=>new ao({color:D,roughness:P,metalness:te}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),l=r("#b1bec5",.32,.65),c=r("#c8d3d6"),u=r("#a8b5a1"),h=r("#b4a38c",.8),d=r("#928572");r("#18252a",.38);const f=r("#f9f4e6"),g=r("#3e8493"),v=r("#d2a468"),m=new M0({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:In}),p=new ur({color:"#fff6dd"}),y=new ur({color:"#80b7ab"}),w=(D,P,te,j,ee,E,x,R=t)=>{const G=new _t(i,x);return G.position.set(D,P,te),G.scale.set(j,ee,E),R.add(G),G},S=(D,P,te,j,ee,E,x=t,R=20)=>{const G=new _t(new ia(j,j,ee,R),E);return G.position.set(D,P,te),x.add(G),G},A=(D,P,te,j,ee,E=t)=>{const x=new _t(new au(j,16,12),ee);return x.position.set(D,P,te),E.add(x),x},T=(D,P,te,j)=>n.push({minX:D-te/2,maxX:D+te/2,minZ:P-j/2,maxZ:P+j/2}),_=(D,P,te,j,ee=t)=>{const E=P.clone().sub(D),x=new _t(new ia(te,te,E.length(),12),j);return x.position.copy(D).add(P).multiplyScalar(.5),x.quaternion.setFromUnitVectors(new O(0,1,0),E.normalize()),ee.add(x),x},b=(D,P,te,j,ee,E,x="#f5f4ec",R="#425859",G=0)=>{const L=document.createElement("canvas");L.width=1024,L.height=Math.max(64,Math.round(1024*E/ee));const ne=L.getContext("2d");ne.fillStyle=x,ne.fillRect(0,0,L.width,L.height);const ue=D.split(`
`),Y=Math.min(L.height/(ue.length+1),L.width/(Math.max(...ue.map(J=>J.length))*.62));ne.fillStyle=R,ne.textAlign="center",ne.textBaseline="middle",ne.font=`500 ${Y}px sans-serif`,ue.forEach((J,Z)=>ne.fillText(J,512,L.height/2+(Z-(ue.length-1)/2)*Y*1.3));const Q=new lr(L);Q.colorSpace=Ot;const fe=new ur({map:Q,side:In}),C=new _t(new pr(ee,E),fe);return C.position.set(P,te,j),C.rotation.y=G,t.add(C),C},z=(D,P,te)=>{const j=document.createElement("canvas");j.width=960,j.height=360;const ee=j.getContext("2d");ee.fillStyle="#fff9ea",ee.strokeStyle="#b6c9c4",ee.lineWidth=4,ee.beginPath(),ee.roundRect(4,4,952,310,30),ee.fill(),ee.stroke(),ee.beginPath(),ee.moveTo(450,313),ee.lineTo(480,352),ee.lineTo(510,313),ee.fill(),ee.textAlign="left",ee.fillStyle="#35716c",ee.font="bold 38px sans-serif",ee.fillText(D.toUpperCase(),34,48),ee.fillStyle="#263b41",ee.font="48px sans-serif";const E=P.replace(/\s+/g," ").trim().split(" "),x=[];let R="";for(const L of E){const ne=R?R+" "+L:L;ee.measureText(ne).width>875&&R?(x.push(R),R=L):R=ne}R&&x.push(R),x.slice(0,3).forEach((L,ne)=>{let ue=L;ne===2&&x.length>3&&(ue=ue.replace(/.{0,3}$/,"…")),ee.fillText(ue,34,110+ne*53)}),ee.fillStyle="#6c817c",ee.font="32px sans-serif",ee.fillText(te.length?"WITH "+te.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const G=new lr(j);return G.colorSpace=Ot,new _t(new pr(2.7,1.0125),new ur({map:G,transparent:!0,side:In,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new T0("#f5faff","#9caeb8",2.15));const I=new Ad("#ffffff",2.2);I.position.set(-8,11,3),t.add(I);const F=new Ad("#d0e9fa",.85);F.position.set(8,5,-8),t.add(F);const B=document.createElement("canvas");B.width=512,B.height=512;const $=B.getContext("2d");$.fillStyle="#d9e2e6",$.fillRect(0,0,512,512);for(let D=0;D<1700;D++){const P=Math.sin(D*41.77)*.5+.5,te=Math.sin(D*19.31+5)*.5+.5;$.fillStyle=D%3?"#ecf0f1":"#c3d0d6",$.fillRect(P*512,te*512,1+D%3,1+D%2)}const N=new lr(B);N.colorSpace=Ot,N.wrapS=N.wrapT=vo,N.repeat.set(8,9),N.anisotropy=8,w(0,-.12,0,24,.24,28,new ao({map:N,roughness:.85})),w(0,2.5,-13.5,24,5,.3,s),w(11.75,2.5,0,.3,5,27,s),w(0,.43,-13.27,23.5,.86,.12,h),w(11.53,.43,0,.12,.86,26.5,h),w(0,.08,-13.1,23.5,.16,.06,o),w(11.38,.08,0,.06,.16,26.5,o);const W=w(0,4.9,0,24,.16,28,s);W.userData.overhead=!0;for(const D of[-12,-6,0,6,12])w(-11.6,2.5,D,.22,5,.14,s);w(-11.6,.55,0,.3,1.1,27,s),w(-11.6,4.65,0,.3,.7,27,s),w(-11.68,2.75,0,.025,3.5,27,m);for(const D of[1.12,3.8])w(-11.4,D,0,.12,.07,27,l);w(-7.9,2.25,12.7,7.5,4.5,.14,s),w(7.9,2.25,12.7,7.5,4.5,.14,s);for(const D of[-3.9,3.9])w(D,2.25,12.65,.12,4.5,.18,l);w(0,2.25,12.8,7.7,4.5,.025,m),b("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,"#f1ecdf","#425859",Math.PI);for(const D of[-8,-1,6]){w(0,4.35,D,20,.08,.07,o);for(const P of[-7,0,7])S(P,4.18,D,.13,.22,o),S(P,4.06,D,.1,.025,p)}const ie=new _t(new Ws(1.8,.025,8,64),d);ie.rotation.x=Math.PI/2,ie.position.set(0,3.9,.5),t.add(ie);for(const D of[-1.6,1.6])_(new O(D,3.9,.5),new O(D,4.84,.5),.012,l);w(-28,-.65,-2,45,1,70,r("#b0bf9d"));const X=r("#98af91"),he=r("#897e69");for(let D=0;D<14;D++){const P=-17-D%3*3,te=-25+D*4.1;S(P,1.3,te,.12,3,he);const j=A(P,3,te,1.25+D%3*.2,X);j.scale.y=1.45}function K(D,P){S(D,.32,P,.34,.64,s),S(D,.66,P,.29,.04,d);for(let te=0;te<6;te++){const j=te*2.4;_(new O(D,.65,P),new O(D+Math.cos(j)*.25,1.5+te%3*.18,P+Math.sin(j)*.25),.025,u),A(D+Math.cos(j)*.3,1.3+te%3*.18,P+Math.sin(j)*.3,.16,u).scale.set(.55,2,.8)}T(D,P,.8,.8)}K(-10.3,8.4),K(-10.3,-10.8),K(10.3,10.8);function ae(D,P,te,j){w(D,.1,P,te-.17,.2,j-.12,o),w(D,.51,P,te,.78,j,c),w(D,.94,P,te+.08,.08,j+.08,o);const ee=Math.round(te/.85);for(let E=0;E<ee;E++){const x=D-te/2+(E+.5)*te/ee;w(x,.53,P+j/2+.009,te/ee-.025,.7,.018,a),w(x,.77,P+j/2+.028,.29,.025,.035,l)}T(D,P,te+.12,j+.12)}function de(D,P,te,j="#8ab9ad"){w(D,1,P,.48,.035,.3,l),w(D,1.22,P,.055,.4,.055,l),w(D,1.53,P,.94,.59,.055,o),b(te+`
—  RESEARCH IN PROGRESS  —`,D,1.53,P+.032,.86,.51,"#203137",j),w(D,1.01,P+.36,.65,.035,.2,s);for(let ee=0;ee<5;ee++)w(D-.25+ee*.12,1.031,P+.36,.07,.007,.11,l)}function Ie(D,P,te){w(D,1.02,P,.56,.09,.3,u);for(let j=0;j<5;j++)S(D-.22+j*.11,1.16,P,.031,.25,a,t,10),S(D-.22+j*.11,1.3,P,.038,.025,te,t,10)}function $e(D,P){const te=new qn;te.position.set(D,1,P),t.add(te);const j=w(0,.045,0,.58,.09,.55,a,te);j.rotation.y=-.1;const ee=w(0,.36,-.15,.14,.62,.16,a,te);ee.rotation.x=-.15;const E=w(0,.61,-.03,.18,.15,.37,a,te);E.rotation.x=-.2;const x=S(0,.67,.1,.07,.27,o,te);x.rotation.x=-.38,S(0,.47,.1,.065,.18,l,te),w(0,.23,.08,.4,.04,.35,o,te),S(0,.11,.08,.12,.04,p,te),A(.13,.32,-.11,.065,o,te)}function re(D,P){w(D,1.01,P,.35,.025,.22,l),w(D,1.25,P,.025,.45,.025,l),w(D,1.46,P,.35,.035,.05,s);for(let te=0;te<3;te++){const j=D-.12+te*.12;S(j,1.28,P,.026,.32,a,t,12),S(j,1.08,P,.007,.12,l,t,8),S(j,1.46,P,.035,.035,te%2?g:v,t,12)}}const xe=Fi.x,Re=Fi.z;S(xe,.43,Re,.18,.78,l),S(xe,.88,Re,1.38,.12,h),S(xe,.95,Re,1.31,.025,a),T(xe,Re,2.8,2.8);for(let D=0;D<12;D++){const P=D*Math.PI/6,te=xe+Math.sin(P)*2.15,j=Re+Math.cos(P)*2.15;S(te,.36,j,.29,.07,l),S(te,.18,j,.035,.32,l);const ee=S(te,.43,j,.31,.09,D%3===0?r("#dfabc5"):u);ee.userData.discussionSeat=!0;const E=w(xe+Math.sin(P)*.87,.979,Re+Math.cos(P)*.87,.28,.015,.21,f);E.rotation.y=-P}S(xe,.99,Re,.19,.025,v),b("01   IDEATION ROUNDTABLE",xe,2.65,-7.2,4.7,.38),b("SHARED QUESTIONS / GROUP DISCUSSION",xe,2.29,-7.19,4.7,.22,"#f5f4ec","#6b817d"),ae(5.4,-2.8,6.2,1.7);const Oe=w(5.6,1.44,-2.85,1.08,.88,.3,v);Oe.rotation.x=-.12,w(5.6,1.65,-2.666,.81,.25,.035,o),b("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const Ee=S(5.6,1.3,-2.64,.16,.07,o);Ee.rotation.x=Math.PI/2;const He=w(5.64,1.36,-2.59,.025,.11,.025,s);He.rotation.z=-.5;for(const[D,P]of[[5.28,g],[5.88,v]])A(D,1.1,-2.64,.045,o),_(new O(D,1.1,-2.61),new O(D+.35,1.03,-2.1),.018,P),_(new O(D+.35,1.03,-2.1),new O(D+.9,1.04,-2.17),.018,P);w(7.2,1.01,-2.8,.95,.055,.68,u);for(let D=0;D<4;D++)w(6.9+D*.19,1.08,-2.8,.1,.09,.18,o),w(6.9+D*.19,1.04,-2.8,.02,.018,.57,l);de(3.3,-3.08,"PHYSICS / MEASUREMENTS"),b("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.25,"#fafaf6","#425859"),ae(.2,-10.6,5.8,1.5),de(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let D=0;D<5;D++){const P=.25+D*.43,te=-10.55+D%2*.19,j=[g,v,u][D%3];S(P,1.16,te,.13,.35,m),S(P,1.09,te,.115,.19,j),S(P,1.4,te,.055,.15,m),S(P,1.49,te,.065,.045,o)}Ie(2.2,-10.9,g),re(.1,-11.05),b("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.32),b("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8,"#f1ecdf","#3e5c59"),b("A WORKING LAB. A SHARED UNDERSTANDING.",.15,3.22,-13.31,7.4,.24,"#f1ecdf","#84958c");for(let D=0;D<5;D++)w(-2.2+D*1.12,2.68,-13.29,.85,.06,.02,D%2?u:h);ae(-7.3,5.4,4.8,1.45),de(-8.6,5.18,"BIOLOGY / CELL CULTURES"),$e(-7.15,5.32);for(let D=0;D<3;D++){const P=-6.25+D*.43,te=5.5+D%2*.3;S(P,1.025,te,.18,.055,m),S(P,1.045,te,.16,.015,u);for(let j=0;j<5;j++){const ee=j*2.4,E=A(P+Math.cos(ee)*.1,1.065,te+Math.sin(ee)*.1,.035,D%2?v:g);E.scale.y=.35}}Ie(-5.55,5.15,g),b("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.25,"#fafaf6","#425859");for(const D of[-9.9,-7.9,-5.9])w(10.75,1.22,D,1.4,2.4,1.5,a),w(10.02,1.22,D,.035,2.18,1.35,c),w(9.98,1.35,D+.42,.035,.43,.035,l),T(10.75,D,1.5,1.6);b("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,"#f1ecdf","#667d74",-Math.PI/2),ae(9.3,7.2,3.7,1.35),w(9.5,.99,7.1,.8,.025,.6,l),w(9.5,1.008,7.1,.63,.015,.46,o),_(new O(9.5,1,6.8),new O(9.5,1.5,6.8),.025,l),_(new O(9.5,1.5,6.8),new O(9.5,1.5,7.05),.025,l),b("WASH / RESET",9.3,.65,7.89,2.9,.22,"#fafaf6","#425859");for(const[D,P]of[[3.7,-.5],[-7.5,7.7]]){S(D,.66,P,.32,.12,u),S(D,.34,P,.045,.56,l);for(let te=0;te<4;te++){const j=te*Math.PI/2;_(new O(D,.12,P),new O(D+Math.cos(j)*.37,.08,P+Math.sin(j)*.37),.025,l)}T(D,P,.7,.7)}S(0,.13,.5,1.85,.26,d),S(0,.52,.5,1.7,.55,h),S(0,.84,.5,1.84,.1,a),S(0,.9,.5,1.62,.035,o),T(0,.5,3.7,3.7),b("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,2.5,.23,"#f1ecdf","#536b68");const vt=new qn;vt.position.set(0,.95,.5),t.add(vt);const ke=[];for(let D=0;D<36;D++){const P=D*2.39996,te=Math.sqrt(D/36)*1.35,j=A(Math.cos(P)*te,.15+D%5*.11,Math.sin(P)*te,.045+D%3*.014,D%4===0?v:u,vt);ke.push(j)}for(const D of[-1.45,1.45])for(const P of[-1.1,2.1])S(D,1.03,P,.018,.22,l);const ot=[u,h,g,f,v];for(const D of[-6.2,6.2]){for(const P of[D-.9,D+.9])w(P,1.75,-12.7,.1,3.5,.5,h);for(const P of[.25,1.25,2.25,3.25]){w(D,P,-12.7,1.9,.075,.6,h);for(let te=0;te<6;te++)w(D-.7+te*.27,P+.3,-12.7,.17,.5-te%3*.06,.32,ot[te%5])}T(D,-12.7,2.05,.75)}b("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),b("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function ct(D,P,te){const j=document.createElement("canvas");j.width=256,j.height=64;const ee=j.getContext("2d");ee.fillStyle="rgba(23,35,44,.86)",ee.beginPath(),ee.roundRect(4,6,248,52,14),ee.fill(),ee.fillStyle="#ffffff26",ee.beginPath(),ee.roundRect(16,38,224,10,5),ee.fill(),P!=null&&(ee.fillStyle=Wo(P),ee.beginPath(),ee.roundRect(16,38,Math.max(10,224*P/100),10,5),ee.fill()),ee.fillStyle="#f4f0e4",ee.font="600 21px sans-serif",ee.textBaseline="middle",ee.fillText(P==null?"Boredom —":`Bored ${Math.round(P)}%`,18,22),te&&(ee.textAlign="right",ee.fillStyle="#ddc270",ee.font="600 15px sans-serif",ee.fillText(te.toUpperCase(),238,22));const E=D.material;E.map?.dispose(),E.map=new lr(j),E.map.colorSpace=Ot,E.needsUpdate=!0}const Ye=(()=>{const D=document.createElement("canvas");D.width=128,D.height=128;const P=D.getContext("2d");P.fillStyle="#e9e4f4",P.strokeStyle="#31434b",P.lineWidth=6,P.font="700 40px sans-serif";for(const[j,ee,E,x]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])P.font=`700 ${x}px sans-serif`,P.fillStyle="#31434b",P.fillText(j,ee+3,E+3),P.fillStyle="#e9e4f4",P.fillText(j,ee,E);const te=new lr(D);return te.colorSpace=Ot,te})(),Ut=(D,P,te)=>{const j=Math.atan2(Math.sin(P-D),Math.cos(P-D));return Math.abs(j)<te?P:D+Math.sign(j)*te},ut=new Map;let zt=1;function xt(D,P,te,j,ee,E){const x=new qn;x.position.set(D,0,P),x.rotation.y=te,t.add(x);const R=TS(E),G=r(R.shell,.62),L=r("#293b42",.8),ne=r(R.accent,.48),ue=r(R.trim,.57),Y=new ur({color:"#263b41",side:cn}),Q=j.startsWith("B")?u:j.startsWith("C")?v:g,fe=(Ke,Vt,Ji,si,vs,Qi,_a,va=x,er=.055)=>{const xa=new lu(si,vs,Qi,3,Math.min(er,si/3,vs/3,Qi/3)),tr=new _t(xa,_a);tr.position.set(Ke,Vt,Ji),va.add(tr);const xs=new _t(xa,Y);return xs.scale.setScalar(1.055),tr.add(xs),tr};for(const Ke of[-.13,.13])fe(Ke,.42,0,.16,.4,.18,G),A(Ke,.19,.055,.12,ne,x).scale.set(.95,.68,1.4);fe(0,.99,0,.54,.61,.35,G,x,.1),fe(0,.72,0,.57,.13,.37,G,x,.06),w(0,.98,.184,.012,.45,.012,L,x);const C=w(-.105,1.21,.19,.16,.07,.025,G,x);C.rotation.z=-.55;const J=w(.105,1.21,.19,.16,.07,.025,G,x);J.rotation.z=.55,S(0,1.36,0,.09,.12,ne,x);const Z=new qn;if(Z.position.set(0,1.64,0),x.add(Z),R.head==="round"){const Ke=A(0,0,0,.265,G,Z);Ke.scale.set(1.21,1,.92);const Vt=new _t(Ke.geometry,Y);Vt.scale.setScalar(1.055),Ke.add(Vt)}else fe(0,0,0,.59,R.ears==="compact"?.44:.49,.45,G,Z,R.head==="monitor"?.055:.13);const ge=R.head==="monitor";ge&&fe(0,-.005,.232,.49,.36,.025,L,Z,.06);for(const Ke of[-1,1]){const Vt=S(Ke*.335,0,0,.125,.09,ne,Z);Vt.rotation.z=Math.PI/2;const Ji=S(Ke*.389,0,0,R.ears==="compact"?.06:.085,.025,ue,Z);if(Ji.rotation.z=Math.PI/2,R.ears==="ring"){const si=new _t(new Ws(.125,.012,6,24),L);si.rotation.y=Math.PI/2,si.position.set(Ke*.385,0,0),Z.add(si)}}const pe=R.antenna==="pair"?[-.17,.17]:[R.antenna==="offset-right"?.15:R.antenna==="offset-left"?-.16:0];for(const Ke of pe)_(new O(Ke,.23,0),new O(Ke+(R.antenna==="offset-right"?.045:0),.39,0),.018,L,Z),A(Ke+(R.antenna==="offset-right"?.045:0),.4,0,.047,ue,Z);const me=document.createElement("canvas");me.width=256,me.height=200;const ye=me.getContext("2d"),De=ge?"#fff8e4":"#263b41";ye.fillStyle=De,ye.strokeStyle=De,ye.lineWidth=12,ye.lineCap="round";for(const Ke of[82,174])ye.beginPath(),R.eyes==="happy"?(ye.arc(Ke,79,15,Math.PI,Math.PI*2),ye.stroke()):(ye.ellipse(Ke,76,10,17,0,0,Math.PI*2),ye.fill());ye.fillStyle="#f29b40";for(const Ke of[52,204])ye.beginPath(),ye.ellipse(Ke,112,13,8,0,0,Math.PI*2),ye.fill();ye.fillStyle="#263b41",ye.beginPath(),ye.ellipse(128,123,24,28,0,0,Math.PI),ye.closePath(),ye.fill(),ye.fillStyle="#f18540",ye.beginPath(),ye.ellipse(128,137,13,9,0,0,Math.PI*2),ye.fill();const oe=new lr(me);oe.colorSpace=Ot;const Ce=new ur({map:oe,transparent:!0,depthWrite:!1}),ze=new _t(new pr(.49,.38),Ce);ze.position.set(0,-.01,.255),Z.add(ze);const Se=new qn;if(Se.position.set(.32,1.22,0),x.add(Se),fe(0,-.12,0,.16,.29,.19,G,Se,.065),A(0,-.28,.07,.085,ne,Se),fe(0,-.29,.16,.13,.12,.2,G,Se,.05),A(0,-.29,.28,.092,ne,Se),fe(-.32,1.04,0,.16,.36,.19,G,x,.07),A(-.32,.84,.06,.09,ne,x),R.prop==="magnifier"){const Ke=new _t(new Ws(.1,.018,8,24),ne);Ke.position.set(.32,1.05,.4),x.add(Ke),_(new O(.32,.96,.4),new O(.32,.84,.4),.022,L,x);const Vt=S(.32,1.05,.4,.084,.008,m,x);Vt.rotation.x=Math.PI/2}else if(R.prop==="clipboard"){fe(-.31,.96,.23,.22,.29,.035,ue,x,.025),w(-.31,.97,.253,.17,.22,.008,f,x);for(let Ke=0;Ke<3;Ke++)w(-.31,.92+Ke*.05,.261,.11,.012,.005,ne,x)}else{S(-.31,.97,.17,.028,.15,ne,x);const Ke=new _t(new su(.078,.15,16),ue);Ke.position.set(-.31,.86,.17),x.add(Ke)}const st=A(-.17,1.22,.19,.018,y,x);st.name="agent-status-led";const bt=b(j,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(bt),x.add(bt),w(.12,.93,.19,.2,.045,.015,Q,x);const Vn=b(j.toUpperCase(),D,2.07,P+.16,.58,.18,"#f4f8fa","#31434b");x.userData.ownedMaterials=[G,L,ne,ue,Y,Ce,bt.material],x.userData.ownedTextures=[oe,bt.material.map];const Cr=new Ml(new so({transparent:!0,depthTest:!1}));Cr.scale.set(.8,.8,1),t.add(Cr);const Ti=new Ml(new so({transparent:!0,depthTest:!1}));Ti.scale.set(.86,.215,1),Ti.name="boredom-meter",t.add(Ti);const ji=new Ml(new so({map:Ye,transparent:!0,depthTest:!1}));ji.scale.set(.5,.5,1),ji.name="boredom-zzz",ji.visible=!1,t.add(ji);for(const Ke of[G,L,ne,ue])Ke.userData.baseColor=Ke.color.clone();const _s={id:E,station:ee,head:Z,arm:Se,light:st,group:x,sign:Vn,path:[],target:"",activity:Cr,activityState:"",idea:null,ideaText:"",meter:Ti,meterKey:"",zzz:ji,tint:1};return ut.set(E,_s),_s}const un=new Map;for(const D of[...t.children])if(D instanceof _t&&D.geometry===i&&!D.userData.overhead&&!Array.isArray(D.material)&&!D.material.transparent){const P=un.get(D.material)||[];P.push(D),un.set(D.material,P)}for(const[D,P]of un){if(P.length<3)continue;const te=new g0(i,D,P.length);P.forEach((j,ee)=>{j.updateMatrix(),te.setMatrixAt(ee,j.matrix),t.remove(j)}),te.instanceMatrix.needsUpdate=!0,te.computeBoundingSphere(),t.add(te)}const Rt=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new O(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new O(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new O(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new O(-6.3,1.25,7.2),radius:3.1}];let tn=0;const dn={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function fn(D,P){const te=Math.max(0,Math.min(.05,D-tn));tn=D,vt.rotation.y=D*(P.replay||P.running?.025:.006),ke.forEach((R,G)=>{R.visible=G<P.agents.length*4,R.position.y=.15+G%5*.11+Math.sin(D*.8+G)*.025});const j=new Set(P.agents.map(R=>R.id));for(const[R,G]of ut)if(!j.has(R)){if(t.remove(G.group,G.sign,G.activity,G.meter,G.zzz),G.meter.material.map?.dispose(),G.meter.material.dispose(),G.zzz.material.dispose(),G.idea){t.remove(G.idea),G.idea.geometry.dispose();const ne=G.idea.material;ne.map?.dispose(),ne.dispose()}G.activity.material.map?.dispose(),G.activity.material.dispose(),G.group.traverse(ne=>{ne instanceof _t&&ne.geometry!==i&&ne.geometry.dispose()});for(const ne of G.group.userData.ownedMaterials)ne.dispose();for(const ne of G.group.userData.ownedTextures||[])ne?.dispose();G.sign.geometry.dispose();const L=G.sign.material;L.map?.dispose(),L.dispose(),ut.delete(R)}P.agents.forEach((R,G)=>{let L=ut.get(R.id);L||(L=xt(R.position?.x??(G%3-1)*.6,R.position?.z??10.4+Math.floor(G/3)*.4,0,R.name,R.stationId,R.id));const ne=R.id.startsWith("worker-")?Number(R.id.match(/\d+$/)?.[0]||1)-1:G%4,ue=P.finale===!0,Y=G/Math.max(1,P.agents.length)*Math.PI*2,Q=ue?new O(Fi.x+Math.cos(Y)*2.35,0,Fi.z+Math.sin(Y)*2.35):Cc(R.stationId,ne),fe=ue?`finale:${G}`:`${R.stationId}:${ne}`;L.target!==fe&&(L.target=fe,L.station=R.stationId,L.path=lo(L.group.position,Q,dn,n)),R.position&&!ue&&(L.group.position.set(R.position.x,0,R.position.z),L.path=[]);const C=ep(R.boredom,P.reducedMotion),J=L.path[0];if(J){const De=J.x-L.group.position.x,oe=J.z-L.group.position.z,Ce=Math.hypot(De,oe);if(Ce<.07)L.path.shift();else{const ze=Math.min(Ce,te*1.8*C.walk);L.group.position.x+=De/Ce*ze,L.group.position.z+=oe/Ce*ze,L.group.rotation.y=P.reducedMotion?Math.atan2(De,oe):Ut(L.group.rotation.y,Math.atan2(De,oe),Math.max(.02,te*6*C.turn))}}else L.group.rotation.y=R.position?.heading??(R.stationId==="culture"?Math.atan2(Fi.x-L.group.position.x,Fi.z-L.group.position.z):Math.PI);L.sign.position.set(L.group.position.x,2.28,L.group.position.z),L.sign.lookAt(e.position),L.activity.position.set(L.group.position.x,2.85,L.group.position.z);const Z=!!J||!!R.position?.moving,ge=`${R.boredom==null?"-":Math.round(R.boredom)}:${R.regime||""}`;L.meterKey!==ge&&(L.meterKey=ge,ct(L.meter,R.boredom,as(R.regime).label)),L.meter.position.set(L.group.position.x,2.5,L.group.position.z),L.group.position.y=ue?P.reducedMotion?0:.12+Math.abs(Math.sin(D*3+G))*.18:Z?Math.abs(Math.sin(D*C.bobHz+G))*C.bob:0,ue&&!P.reducedMotion&&(L.group.rotation.y+=te*.35),L.group.rotation.x=C.slump,L.zzz.visible=C.zzz&&!Z,L.zzz.position.set(L.group.position.x+.32,1.95+(P.reducedMotion?0:(D*.35+G*.3)%1*.35),L.group.position.z),L.zzz.material.opacity=P.reducedMotion?.9:1-(D*.35+G*.3)%1*.6,Math.abs(L.tint-C.saturation)>.02&&(L.tint=C.saturation,L.group.traverse(De=>{if(De instanceof _t&&De.material instanceof ao&&De.material.userData.baseColor){const oe=De.material.userData.baseColor,Ce=oe.r*.3+oe.g*.59+oe.b*.11;De.material.color.setRGB(Ce+(oe.r-Ce)*C.saturation,Ce+(oe.g-Ce)*C.saturation,Ce+(oe.b-Ce)*C.saturation)}})),L.activity.visible=R.state!=="idle"&&!(R.stationId==="culture"&&R.discussionBrief);const pe=R.discussionBrief||"",me=pe?`${R.name}:${pe}:${(R.discussionPeers||[]).join(",")}`:"";if(L.ideaText!==me){if(L.idea){t.remove(L.idea),L.idea.geometry.dispose();const De=L.idea.material;De.map?.dispose(),De.dispose(),L.idea=null}L.ideaText=me,pe&&(L.idea=z(R.name,pe,R.discussionPeers||[]),L.idea.name="recorded-discussion-bubble",t.add(L.idea))}if(L.idea&&(L.idea.visible=zt>=.98&&R.stationId==="culture"&&!R.position?.moving&&(!!R.discussionBrief||R.state==="thinking"||R.state==="reviewing"),L.idea.position.set(L.group.position.x,3.05,L.group.position.z),L.idea.lookAt(e.position)),L.activityState!==R.state){L.activityState=R.state;const De=document.createElement("canvas");De.width=128,De.height=128;const oe=De.getContext("2d");oe.font="80px sans-serif",oe.textAlign="center",oe.textBaseline="middle",oe.fillText(R.state==="thinking"?"💡":R.state==="working"?"🫧":"📈",64,64),L.activity.material.map?.dispose(),L.activity.material.map=new lr(De),L.activity.material.needsUpdate=!0}const ye=(P.replay||P.running)&&(R.state==="working"||R.state==="thinking");L.arm.rotation.x=J||R.position?.moving?Math.sin(D*5+G)*.12:ye?Math.sin(D*1.8+G)*.08:0,L.head.rotation.y=Math.sin(D*(C.level==="frenetic"?.9:.32)+G)*(C.level==="frenetic"?.12:.055),L.head.rotation.x=(ye&&!J?.12:0)+C.droop,L.light.scale.setScalar(ye?1+Math.sin(D*2)*.12:1)}),e.updateMatrixWorld();const ee=[],E=230,x=86.25;for(const R of ut.values())if(R.idea?.visible){const G=R.idea.position.clone(),L=G.clone().applyMatrix4(e.matrixWorldInverse);if(L.z>=0){R.idea.visible=!1;continue}const ne=G.project(e);if(Math.abs(ne.x)>1.15||Math.abs(ne.y)>1.15){R.idea.visible=!1;continue}let ue=wn.clamp((ne.x+1)*innerWidth/2,90+E/2,innerWidth-E/2-16),Y=(1-ne.y)*innerHeight/2;for(let fe=0;fe<12&&ee.some(C=>Math.abs(ue-C.x)<E+10&&Math.abs(Y-C.y)<x+8);fe++)Y-=x+8,Y<110&&(Y=155,ue=Math.min(innerWidth-E/2-16,ue+E+12));ee.push({x:ue,y:Y}),R.idea.position.set(ue/innerWidth*2-1,1-Y/innerHeight*2,ne.z).unproject(e),R.idea.quaternion.copy(e.quaternion);const Q=2*-L.z*Math.tan(wn.degToRad(e.fov/2))/innerHeight;R.idea.scale.setScalar(E*Q/2.7),R.idea.renderOrder=10}}const k=new qn;t.add(k);const hn=new Set([...ut.values()].flatMap(D=>[D.group,D.sign,D.activity,D.meter,D.zzz]));for(const D of[...t.children])D!==k&&!hn.has(D)&&k.add(D);function mt(D){zt=wn.clamp(D,0,1);const P=NS(zt,ut.size);k.scale.setScalar(P.room),[...ut.values()].forEach((te,j)=>{const ee=P.agents[j]??1,E=ee<.88?ee/.88*1.08:1.08-(ee-.88)/.12*.08;te.group.scale.setScalar(E),te.sign.scale.setScalar(E),te.activity.scale.set(.8*E,.8*E,1),te.meter.scale.set(.86*E,.215*E,1),te.zzz.scale.set(.5*E,.5*E,1)})}return{scene:t,camera:e,colliders:n,stations:Rt,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:fn,grow:mt,setOverview:D=>{W.visible=!0},agentPositions:()=>[...ut.values()].map(D=>({id:D.id,position:D.group.position.clone()})),exposure:1}}const OS=!0;function tp(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function Ic(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function ef(t,e="|"){return t.map(n=>op(n)).join(e)}function Lc(t,e){return typeof e=="bigint"?e.toString():e}class FS{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function cu(t){return new FS(t)}function kS(t){return t==null}function uu(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function zS(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function Tr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function np(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function Mi(t){return np(t._zod.def)??t._zod.def.shape}function ip(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return Tr(this,e,i),i},enumerable:!0,configurable:!0})}function rp(t,e,n){e in t?Tr(t,e,n):t[e]=n}function br(t,e,n,i){const r=Mi(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?ip(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):rp(t,s,i?i(a.value,s):a.value))}}function BS(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?ip(t,n,()=>e[n]):rp(t,n,i.value))}}function En(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function $S(t){return JSON.stringify(t)}function HS(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const sp="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function Ro(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const GS=cu(()=>{if(ni.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function ra(t){if(Ro(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(Ro(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function ap(t){return ra(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const VS=new Set(["string","number","symbol"]);function Xo(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function Yi(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Fe(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function op(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function WS(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const lp={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},XS={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function ZS(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return br(s,t,Zo(t,e)),Yi(t,En(n,{shape:s,checks:[]}))}function Zo(t,e){const n=Mi(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function qS(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(Zo(t,e)),a={};return br(a,t,Reflect.ownKeys(Mi(t)).filter(o=>!s.has(o))),Yi(t,En(n,{shape:a,checks:[]}))}function YS(t,e){if(!ra(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=Mi(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return Yi(t,En(t._zod.def,{shape:cp(t,e)}))}function cp(t,e){const n={};return br(n,t,Reflect.ownKeys(Mi(t))),BS(n,e),n}function KS(t,e){if(!ra(e))throw new Error("Invalid input to safeExtend: expected a plain object");return Yi(t,En(t._zod.def,{shape:cp(t,e)}))}function jS(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};br(n,t,Reflect.ownKeys(Mi(t))),br(n,e,Reflect.ownKeys(Mi(e)));const i=En(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return Yi(t,i)}function tf(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(Zo(e,n)):void 0,l={};return br(l,e,Reflect.ownKeys(Mi(e)),t&&((c,u)=>o&&!o.has(u)?c:new t({type:"optional",innerType:c}))),Yi(e,En(e._zod.def,{shape:l,checks:[]}))}function JS(t,e,n){const i=n?new Set(Zo(e,n)):void 0,r={};return br(r,e,Reflect.ownKeys(Mi(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),Yi(e,En(e._zod.def,{shape:r}))}function _i(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function QS(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function up(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function Is(t){return typeof t=="string"?t:t?.message}function nf(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function Nc(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function hs(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:Is(t.inst?._zod.def?.error?.(t))??Is(s?.(t))??Is(e?.error?.(t))??Is(n.customError?.(t))??Is(n.localeError?.(t))??"Invalid input",o={};for(const l of Object.keys(t))l==="inst"||l==="schema"||l==="continue"||l==="input"||l==="__proto__"||(o[l]=t[l]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const eb=/[\uD800-\uDBFF]/;function du(t){const e=t.length;if(!eb.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function fu(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function tb(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function sa(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function nb(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):ib(t,n,i.value)}}function Zi(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function dp(t,e,n){return Zi(t,e,n,!1)}function fp(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return Zi(this,n,i(this))},set(r){Zi(this,n,r)}})}return e}function ib(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:Zi(this,e,n.bind(this))},set(i){Zi(this,e,i)}})}function rb(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let Cl,Ui=!1;const sb={configurable:!0,get(){Ui=!0}};function ft(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&Cl!==t._zod){Cl=void 0;return}Cl=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,sb);const r=Ui;Ui=!1;try{const s=n(this);return Ui?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Ui=Ui||r,s}catch(s){throw delete this[e],Ui=Ui||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function ab(t,e,n,i){const r=rb(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const ob="~constantCatch";function lb(t){const e=()=>t;return e[ob]=!0,e}var rf;const Pl={value:void 0,enumerable:!1};let sf="captureStackTrace"in Error?Error:null;function cb(t){const e=sf;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return sf=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function le(t,e,n,i){const r={};function s(d){this.def=d,this.constr=h,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function l(d,f){if(d._zod){if(d._zod.traits.has(t))return}else{Pl.value=new s(f);try{Object.defineProperty(d,"_zod",Pl)}finally{Pl.value=void 0}}if(d._zod.traits.add(t),e(d,f),o){const v=Object.getPrototypeOf(d),m=d._zod.constr.prototype;let p=v;for(;p&&p!==m;)p=Object.getPrototypeOf(p);const y=p??v;o.has(y)||(o.add(y),nb(y,a))}const g=h.prototype;for(const v in g)Object.prototype.hasOwnProperty.call(g,v)&&(v in d||(d[v]=g[v].bind(d)))}const c=i?.Parent??Object;class u extends c{}Object.defineProperty(u,"name",{value:t});function h(d){const f=i?.Parent?cb(u):this;l(f,d);const g=f._zod.deferred;if(g){for(const m of g)m();f._zod.deferred=void 0}const v=globalThis.__zod_globalConfig?.postProcessor;return v&&v(f),f}return Object.defineProperty(h,"init",{value:l}),Object.defineProperty(h,Symbol.hasInstance,{value:d=>i?.Parent&&d instanceof i.Parent?!0:d?._zod?.traits?.has(t)}),Object.defineProperty(h,"name",{value:t}),h}class mr extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class hp extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(rf=globalThis).__zod_globalConfig??(rf.__zod_globalConfig={});const ni=globalThis.__zod_globalConfig;function Ki(t){return t&&Object.assign(ni,t),ni}function ub(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,Lc,2)),t.message}function db(t){this._zod.message=t}const fb={get:ub,set:db,enumerable:!0,configurable:!0},Il={value:void 0,enumerable:!1},af=new WeakSet([Object.prototype,Error.prototype]),hb=(t,e)=>{t.name="$ZodError",Il.value=e,Object.defineProperty(t,"issues",Il),Il.value=void 0,Object.defineProperty(t,"message",fb);const n=Object.getPrototypeOf(t);af.has(n)||(af.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},pb=le("$ZodError",hb);function mb(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function gb(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?mb(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function _b(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let l=n,c=0;for(;c<o.length;){const u=o[c],h=c===o.length-1;if(u==="_errors"){h&&l._errors.push(e(a)),c++;continue}Object.prototype.hasOwnProperty.call(l,u)||Object.defineProperty(l,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const d=l[u];h&&d._errors.push(e(a)),l=d,c++}}}};return i(t),n}function qo(t,e){return{callee:e?.callee??t,Err:e?.Err}}const hu=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new mr;if(o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>hs(c,a,Ki())));throw sp(l,s?.callee??e),l}return o.value};return e},pu=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>hs(c,a,Ki())));throw sp(l,s?.callee??e),l}return o.value};return e},mu=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new mr;return s.issues.length?pp(t,s.issues,r):{success:!0,data:s.value}};function pp(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>hs(r,n,Ki()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const gu=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?pp(t,s.issues,r):{success:!0,data:s.value}},vb=Symbol.for("zod.compile.invalid"),xb=Symbol.for("zod.compile.fallback"),yb=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==vb)return!0;if(i.definite===!0&&n===void 0)return!1}return Sb(t,e,n)});function Sb(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[xb]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new mr;return s.issues.length===0}const bb=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},Mb=t=>{const e=hu(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,qo(n,a))};return n},Eb=t=>{const e=hu(t),n=(i,r,s,a)=>e(i,r,s,qo(n,a));return n},wb=t=>{const e=pu(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,qo(n,a))};return n},Tb=t=>{const e=pu(t),n=async(i,r,s,a)=>await e(i,r,s,qo(n,a));return n},Ab=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return mu(t)(e,n,r)},Rb=t=>(e,n,i)=>mu(t)(e,n,i),Cb=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return gu(t)(e,n,r)},Pb=t=>async(e,n,i)=>gu(t)(e,n,i),Ib=/^[cC][0-9a-z]{6,}$/,Lb=/^[0-9a-z]+$/,Nb=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,Db=/^[0-9a-vA-V]{20}$/,Ub=/^[A-Za-z0-9]{27}$/,Ob=/^[a-zA-Z0-9_-]{21}$/;function Fb(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const kb=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,zb=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,of=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,Bb=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,$b="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function Hb(){return new RegExp($b,"u")}const Gb=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Vb=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,Wb=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,Xb=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,Zb=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,qb=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,Yb=/^https?$/,Kb=/^\+[1-9]\d{6,14}$/,mp="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function jb(t){return new RegExp(`^${t}$`)}const Jb=jb(mp);function Dc(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function Qb(t){return new RegExp(`^${Dc(t)}$`)}function eM(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${Dc({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${Dc({precision:t.precision})}`:n;return new RegExp(`^${mp}T(?:${i})$`)}const tM=/^[\s\S]{0,}$/,nM=/^-?\d+(?:\.\d+)?$/,iM=/^[^A-Z]*$/,rM=/^[^a-z]*$/,xn=le("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),_u=t=>{const e=t.value;return!kS(e)&&e.length!==void 0},Co={number:"number",bigint:"bigint",object:"date"},gp=le("$ZodCheckLessThan",(t,e)=>{xn.init(t,e);const n=Co[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:Co[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),_p=le("$ZodCheckGreaterThan",(t,e)=>{xn.init(t,e);const n=Co[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:Co[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),sM=le("$ZodCheckMultipleOf",(t,e)=>{xn.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):zS(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),aM=le("$ZodCheckNumberFormat",(t,e)=>{xn.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=lp[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),oM=le("$ZodCheckMaxLength",(t,e)=>{var n;xn.init(t,e),(n=t._zod.def).when??(n.when=_u),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?du(r):s)<=e.maximum)return;const o=fu(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),lM=le("$ZodCheckMinLength",(t,e)=>{var n;xn.init(t,e),(n=t._zod.def).when??(n.when=_u),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?du(r):s)>=e.minimum)return;const o=fu(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),cM=le("$ZodCheckLengthEquals",(t,e)=>{var n;xn.init(t,e),(n=t._zod.def).when??(n.when=_u),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?du(r):s;if(a===e.length)return;const o=fu(r),l=a>e.length;i.issues.push({origin:o,...l?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),Yo=le("$ZodCheckStringFormat",(t,e)=>{var n,i;xn.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),uM=le("$ZodCheckRegex",(t,e)=>{Yo.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),dM=le("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=iM),Yo.init(t,e)}),fM=le("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=rM),Yo.init(t,e)}),hM=le("$ZodCheckIncludes",(t,e)=>{xn.init(t,e);const n=Xo(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),pM=le("$ZodCheckStartsWith",(t,e)=>{xn.init(t,e);const n=new RegExp(`^${Xo(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),mM=le("$ZodCheckEndsWith",(t,e)=>{xn.init(t,e);const n=new RegExp(`.*${Xo(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),gM=le("$ZodCheckOverwrite",(t,e)=>{xn.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class _M{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const vM={major:4,minor:6,patch:7},Nt=le("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=vM;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,l,c)=>{if(o.memo)return o;let u=_i(o),h;for(const d of l){if(d._zod.def.when){if(QS(o)||!d._zod.def.when(o))continue}else if(u)continue;const f=o.issues.length,g=d._zod.check(o);if(g instanceof Promise&&c?.async===!1)throw new mr;if(h||g instanceof Promise)h=(h??Promise.resolve()).then(async()=>{await g,o.issues.length!==f&&(Nc(o.issues,f,t),u||(u=_i(o,f)))});else{if(o.issues.length===f)continue;Nc(o.issues,f,t),u||(u=_i(o,f))}}return h?h.then(()=>o):o},a=(o,l,c)=>{if(_i(o))return o.aborted=!0,o;const u=s(l,r,c);if(u instanceof Promise){if(c.async===!1)throw new mr;return u.then(h=>t._zod.parse(h,c))}return t._zod.parse(u,c)};t._zod.run=(o,l)=>{if(l.skipChecks)return t._zod.parse(o,l);if(l.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...l,skipChecks:!0});return u instanceof Promise?u.then(h=>a(h,o,l)):a(u,o,l)}const c=t._zod.parse(o,l);if(c instanceof Promise){if(l.async===!1)throw new mr;return c.then(u=>s(u,r,l))}return s(c,r,l)}}},{get"~standard"(){return dp(this,"~standard",xp(this))},set"~standard"(t){Zi(this,"~standard",t)}}),vp=(t,e)=>t.issues.length?{issues:t.issues.map(n=>hs(n,e,Ki()))}:{value:t.value};async function xM(t,e){const n={async:!0};return vp(await t._zod.run({value:e,issues:[]},n),n)}function xp(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return vp(i,n)}catch{}return xM(t,e)},vendor:"zod",version:1}}const vu=le("$ZodString",(t,e)=>{Nt.init(t,e),t._zod.pattern=e.pattern??tM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),St=le("$ZodStringFormat",(t,e)=>{Yo.init(t,e),vu.init(t,e)}),yM=le("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=zb),St.init(t,e)}),SM=le("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=of(i))}else e.pattern??(e.pattern=of());St.init(t,e)}),bM=le("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=Bb),St.init(t,e)}),yp=1,Po=2;function Sp(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function MM(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?Sp(t)||Po:EM(t,e)}function EM(t,e){if(!e.normalize&&e.protocol?.source===Yb.source&&!/^https?:\/\//i.test(t))return yp;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??Po}return new URL(t)}catch{return Po}}const wM=/[\t\n\r]/g;function lf(t){return t.replace(wM,"")}function TM(t,e){return e.lastIndex=0,e.test(t.hostname)}function AM(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const RM=le("$ZodURL",(t,e)=>{St.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=MM(i,e);if(r===yp){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===Po){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=lf(i);return}e.hostname&&!TM(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!AM(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:lf(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),CM=le("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=Hb()),St.init(t,e)}),PM=le("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?Ob:Fb(e.length)),St.init(t,e)}),IM=le("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=Ib),St.init(t,e)}),LM=le("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=Lb),St.init(t,e)}),NM=le("$ZodULID",(t,e)=>{e.pattern??(e.pattern=Nb),St.init(t,e)}),DM=le("$ZodXID",(t,e)=>{e.pattern??(e.pattern=Db),St.init(t,e)}),UM=le("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=Ub),St.init(t,e)}),OM=le("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=eM(e)),St.init(t,e)}),FM=le("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=Jb),St.init(t,e)}),kM=le("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=Qb(e)),St.init(t,e)}),zM=le("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=kb),St.init(t,e)}),BM=le("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=Gb),St.init(t,e)}),$M=/^[0-9a-fA-F:.]+$/;function bp(t){return $M.test(t)?Sp(`http://[${t}]`):!1}const HM=le("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=Vb),St.init(t,e),t._zod.check=n=>{bp(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),GM=le("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=Wb),St.init(t,e)});function VM(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:bp(n)}const WM=le("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=Xb),St.init(t,e),t._zod.check=n=>{VM(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function Mp(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const Ep=/^[0-9a-zA-Z+/]*={0,2}$/,XM=le("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Ep),St.init(t,e),t._zod.check=n=>{Mp(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),xu=/^[A-Za-z0-9_-]*$/;function ZM(t){if(!xu.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return Mp(n)}const qM=le("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=xu),St.init(t,e),t._zod.check=n=>{ZM(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),YM=le("$ZodE164",(t,e)=>{e.pattern??(e.pattern=Kb),St.init(t,e)});function KM(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const jM=le("$ZodJWT",(t,e)=>{St.init(t,e),t._zod.check=n=>{KM(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),wp=le("$ZodNumber",(t,e)=>{Nt.init(t,e),t._zod.pattern=nM,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),JM=le("$ZodNumberFormat",(t,e)=>{aM.init(t,e),wp.init(t,e)}),QM=le("$ZodUnknown",(t,e)=>{Nt.init(t,e),t._zod.parse=n=>n}),eE=le("$ZodNever",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function tE(t,e){const n=nf(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[l,c]of nf(t._zod.def.checks))if(o>l&&c._zod.def.when(s)){const u=s.issues.length;return c._zod.check(s),s.issues[u].continue=!1,Nc(s.issues,u,t),s}}return r(s,a)}}const nE=t=>Array.isArray(t)?t.length:-1;function cf(t,e,n){t.issues.length&&e.issues.push(...up(n,t.issues)),e.value[n]=t.value}const iE=le("$ZodArray",(t,e)=>{Nt.init(t,e);const n=ni.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let l=0;l<s.length;l++){const c=s[l],u=e.element._zod.run({value:c,issues:[]},r);if(u instanceof Promise)a.push(u.then(h=>cf(h,i,l)));else if(cf(u,i,l),o&&u.issues.length!==0&&_i(u))break}return a.length?Promise.all(a).then(()=>i):i},tE(t,nE)});function Io(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...up(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const rE=[];function Tp(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:rE,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=WS(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function Ap(t,e,n,i,r,s,a){const o=[],l=r.keySet,c=r.catchall._zod,u=c.def.type,h=c.optin,d=c.optout;let f=0;for(const g in e){if(a&&n.issues.length!==f){if(_i(n,f))break;f=n.issues.length}if(l.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const v=c.run({value:e[g],issues:[]},i);v instanceof Promise?t.push(v.then(m=>Io(m,n,g,e,h,d))):Io(v,n,g,e,h,d)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const sE=le("$ZodObject",(t,e)=>{Nt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const c=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),c.raw=u,u};c.raw=i,Object.defineProperty(e,"shape",{get:c})}const r=cu(()=>Tp(e));ft(t,"propValues",c=>{const u=c.def.shape,h={};for(const d in u){const f=u[d]._zod;if(f.values){Object.prototype.hasOwnProperty.call(h,d)||Tr(h,d,new Set);for(const g of f.values)h[d].add(g);f.optin!==void 0&&h[d].add(void 0)}}return h});const s=Ro,a=e.catchall;let o;const l=ni.memoizer;l?.attach(t),t._zod.parse=(c,u)=>{o??(o=r.value);const h=c.value;if(!s(h))return c.issues.push({expected:"object",code:"invalid_type",input:h,inst:t}),c;c.value=l?l.alloc(t,c,{},u):{};const d=[],f=o.shape,g=u?.abortEarly;let v=c.issues.length;for(const m of o.allKeys){if(g&&c.issues.length!==v){if(_i(c,v))break;v=c.issues.length}if(m==="__proto__")continue;const p=f[m],y=p._zod.optin,w=p._zod.optout,S=p._zod.run({value:h[m],issues:[]},u);S instanceof Promise?d.push(S.then(A=>Io(A,c,m,h,y,w))):Io(S,c,m,h,y,w)}return a?Ap(d,h,c,u,r.value,t,g===!0):d.length?Promise.all(d).then(()=>c):c}}),aE=le("$ZodObjectJIT",(t,e)=>{sE.init(t,e);const n=t._zod.parse,i=cu(()=>Tp(e)),r=ni.memoizer,s=f=>{const g=i.value,v=g.symbolKeys,m=new _M(["payload","ctx"],{shape:f,inst:t,memo:r,syms:v}),p=A=>`shape[${A}]._zod.run({ value: input[${A}], issues: [] }, ctx)`,y=(A,T)=>`
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
          }`;m.write("const input = payload.value;");const w=Object.create(null);let S=0;for(const A of g.allKeys)w[A]=`key_${S++}`;m.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const A of g.allKeys){if(A==="__proto__")continue;const T=w[A],_=typeof A=="symbol"?`syms[${v.indexOf(A)}]`:$S(A),b=`${_} in input`,z=f[A],I=z?._zod?.optin,F=I!==void 0,B=z?._zod?.optout==="optional";if(m.write(`const ${T} = ${p(_)};`),F&&B){const $=I==="optional"?`${T}_present`:`${T}.value !== undefined || ${T}_present`;m.write(`
        const ${T}_present = ${b};
        if (!${T}.issues.length || ${T}_present) {
          if (${T}.issues.length) {${y(T,_)}
          }

          if (${$}) {
            newResult[${_}] = ${T}.value;
          }
        }

      `)}else F?(m.write(`
        if (${T}.issues.length) {${y(T,_)}
        }
      `),I==="defaulted"?m.write(`newResult[${_}] = ${T}.value;`):m.write(`
        if (${T}.value !== undefined || ${b}) {
          newResult[${_}] = ${T}.value;
        }
      `)):m.write(`
        const ${T}_present = ${b};
        if (${T}.issues.length) {${y(T,_)}
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

      `)}return m.write("payload.value = newResult;"),m.write("return payload;"),m.compile()};let a;const o=Ro,l=!ni.jitless,u=l&&GS.value,h=e.catchall;let d;t._zod.parse=(f,g)=>{d??(d=i.value);const v=f.value;return o(v)?l&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),f=a(f,g),h?Ap([],v,f,g,d,t,g?.abortEarly===!0):f):n(f,g):(f.issues.push({expected:"object",code:"invalid_type",input:v,inst:t}),f)}});function uf(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!_i(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>hs(a,i,Ki())))}),e)}const oE=le("$ZodUnion",(t,e)=>{Nt.init(t,e),ft(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),ft(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),ft(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),ft(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>uu(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const l=o._zod.run({value:i.value,issues:[]},r);if(l instanceof Promise)a.push(l),s=!0;else{if(l.issues.length===0)return l;a.push(l)}}return s?Promise.all(a).then(o=>uf(o,i,t,r)):uf(a,i,t,r)}}),lE=le("$ZodIntersection",(t,e)=>{Nt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([l,c])=>df(n,l,c)):df(n,s,a)}});function Uc(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(ra(t)&&ra(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=Uc(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=Uc(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function df(t,e,n){const i=new Map;let r;const s=new Map,a=(c,u)=>{let h;if(c.code==="unrecognized_keys"&&!c.path?.length)r??(r=c),h=c.keys;else if(c.code==="invalid_key"&&c.origin==="record"&&c.path?.length===1){const d=String(c.path[0]);s.has(d)||s.set(d,c),h=[d]}else return!1;for(const d of h)i.has(d)||i.set(d,{}),i.get(d)[u]=!0;return!0};for(const c of e.issues)a(c,"l")||t.issues.push(c);for(const c of n.issues)a(c,"r")||t.issues.push(c);const o=[...i].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(o.length){const c=r?o.filter(u=>r.keys.includes(u)):[];c.length&&t.issues.push({...r,keys:c});for(const u of o)!c.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const l=Uc(e.value,n.value);if(!l.valid){if(_i(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)}return t.value=l.data,t}const cE=le("$ZodEnum",(t,e)=>{Nt.init(t,e);const n=Ic(e.entries),i=new Set(n);t._zod.values=i,ft(t,"pattern",r=>{const s=Ic(r.def.entries).filter(a=>VS.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>Xo(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),uE=le("$ZodTransform",(t,e)=>{Nt.init(t,e),t._zod.optin="optional",ni.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new hp(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new mr;return n.value=r,n}});function ff(t,e){return t.value=e.issues.length?void 0:e.value,t}const Rp=le("$ZodOptional",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${uu(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>ff(n,s)):ff(n,r)}return e.innerType._zod.run(n,i)}}),dE=le("$ZodExactOptional",(t,e)=>{Rp.init(t,e),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),fE=le("$ZodNullable",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${uu(i.source)}|null)$`):void 0}),ft(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),hE=le("$ZodDefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>hf(s,e)):hf(r,e)}});function hf(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const pE=le("$ZodPrefault",(t,e)=>{Nt.init(t,e),t._zod.optin="defaulted",ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),mE=le("$ZodNonOptional",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>pf(s,t)):pf(r,t)}});function pf(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function mf(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>hs(r,i,Ki()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const gE=le("$ZodCatch",(t,e)=>{Nt.init(t,e),ft(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),ft(t,"optout",n=>n.def.innerType._zod.optout),ft(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>mf(n,s,e,i)):mf(n,r,e,i)}}),_E=le("$ZodPipe",(t,e)=>{Nt.init(t,e),ft(t,"values",n=>n.def.in._zod.values),ft(t,"optin",n=>n.def.in._zod.optin),ft(t,"optout",n=>n.def.out._zod.optout),ft(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>Za(a,e.in,i)):Za(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>Za(s,e.out,i)):Za(r,e.out,i)}});function Za(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const vE=le("$ZodReadonly",(t,e)=>{Nt.init(t,e),ft(t,"propValues",n=>n.def.innerType._zod.propValues),ft(t,"values",n=>n.def.innerType._zod.values),ft(t,"optin",n=>n.def.innerType?._zod?.optin),ft(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(gf):gf(r)}});function gf(t){return t.memo||(t.value=Object.freeze(t.value)),t}const xE=le("$ZodCustom",(t,e)=>{xn.init(t,e),Nt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>_f(s,n,i,t));_f(r,n,i,t)}});function _f(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(sa(r))}}class yE extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const Oc="~memo",vf=[];function Cp(t){return t!==null&&typeof t=="object"}function Ll(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const Pp=new WeakMap,ks=0,co=1,Xs=2;function uo(t,e,n){const i=Pp.get(t);if(i!==void 0)return i?Xs:ks;if(e.has(t))return Xs;e.add(t);let r=ks;const s=u=>{if(r!==Xs&&u?._zod){const h=uo(u,e);h>r&&(r=h)}},a=(u,h)=>{let d=ks;for(const f of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,f);if(!g.enumerable)continue;const v=g.get?co:g.value?._zod?uo(g.value,e):ks;v>d&&(d=v)}return d},o=u=>{u>r&&(r=u)},l=t._zod.def;switch(l.type){case"object":{const u=np(l);o(u?a(u):co),s(l.catchall);break}case"array":s(l.element);break;case"tuple":for(const u of l.items)s(u);s(l.rest);break;case"record":case"map":s(l.keyType),s(l.valueType);break;case"set":s(l.valueType);break;case"union":for(const u of l.options)s(u);break;case"intersection":s(l.left),s(l.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(l.innerType);break;case"pipe":s(l.in),s(l.out);break;case"function":s(l.input),s(l.output);break;case"lazy":{const u=l._cachedInner??void 0;o(u?uo(u,e):co);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in l){const h=Object.getOwnPropertyDescriptor(l,u);if(!h||h.get)continue;const d=h.value;if(!(!d||typeof d!="object")){if(d._zod)s(d);else if(Array.isArray(d))for(const f of d)s(f)}}}return e.delete(t),SE(t,r)}function SE(t,e){return e!==co&&Pp.set(t,e===Xs),e}function bE(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let qa;const Ya=[],ME={alloc(t,e,n){const i=qa;if(!i)return n;qa=void 0;const r={value:n,issues:null};return i.set(e.value,r),Ya.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&wE(s,r.value))throw new yE;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(l,c)=>{if(n===void 0){const p=uo(t,new Set);if(p===ks)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(l,c);p===Xs||i?n=!0:i=!0}const u=l.value;if(!Cp(u))return a(l,c);let h=c[Oc];h||(h={buckets:new WeakMap,backEdges:void 0},c[Oc]=h);let d;r===c?d=s:(d=bE(h,t),r=c,s=d);const f=d.get(u);if(f)return l.value=f.value,f.issues?f.issues.length&&l.issues.push(...Ll(f.issues)):(l.memo=!0,h.backEdges??(h.backEdges=new WeakSet),h.backEdges.add(f.value)),l;qa=d;const g=Ya.length,v=a(l,c);qa=void 0;const m=Ya.length>g?Ya.pop():void 0;return v instanceof Promise?v.then(p=>(m&&(m.issues=p.issues.length?Ll(p.issues):vf),p)):(m&&(m.issues=v.issues.length?Ll(v.issues):vf),v)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function EE(){return ME}function wE(t,e){const n=t[Oc]?.backEdges;return n!==void 0&&Cp(e)&&n.has(e)}const TE=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=tb(s.input),l=r(o,s.input);return`Invalid input: expected ${a}, received ${l}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${op(s.values[0])}`:`Invalid option: expected one of ${ef(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${ef(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function AE(){return{localeError:TE()}}var xf;class RE{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function CE(){return new RE}(xf=globalThis).__zod_globalRegistry??(xf.__zod_globalRegistry=CE());const zs=globalThis.__zod_globalRegistry;function Ip(t){return t.checks&&(t.checks=[...t.checks]),t}function PE(t,e){return new t(Ip({type:"string",...Fe(e)}))}function IE(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function LE(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function NE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function DE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function UE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function OE(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function FE(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function kE(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function zE(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function BE(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function $E(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function HE(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function GE(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function VE(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function WE(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function XE(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function ZE(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function qE(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function YE(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function KE(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function jE(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function JE(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function QE(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function ew(t,e){return new t({type:"string",format:"date",check:"string_format",...Fe(e)})}function tw(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function nw(t,e){return new t({type:"string",format:"duration",check:"string_format",...Fe(e)})}function iw(t,e){return new t(Ip({type:"number",checks:[],...Fe(e)}))}function rw(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function sw(t){return new t({type:"unknown"})}function aw(t,e){return new t({type:"never",...Fe(e)})}function yf(t,e){return new gp({check:"less_than",...Fe(e),value:t,inclusive:!1})}function Nl(t,e){return new gp({check:"less_than",...Fe(e),value:t,inclusive:!0})}function Sf(t,e){return new _p({check:"greater_than",...Fe(e),value:t,inclusive:!1})}function Dl(t,e){return new _p({check:"greater_than",...Fe(e),value:t,inclusive:!0})}function bf(t,e){return new sM({check:"multiple_of",...Fe(e),value:t})}function Lp(t,e){return new oM({check:"max_length",...Fe(e),maximum:t})}function Lo(t,e){return new lM({check:"min_length",...Fe(e),minimum:t})}function Np(t,e){return new cM({check:"length_equals",...Fe(e),length:t})}function ow(t,e){return new uM({check:"string_format",format:"regex",...Fe(e),pattern:t})}function lw(t){return new dM({check:"string_format",format:"lowercase",...Fe(t)})}function cw(t){return new fM({check:"string_format",format:"uppercase",...Fe(t)})}function uw(t,e){return new hM({check:"string_format",format:"includes",...Fe(e),includes:t})}function dw(t,e){return new pM({check:"string_format",format:"starts_with",...Fe(e),prefix:t})}function fw(t,e){return new mM({check:"string_format",format:"ends_with",...Fe(e),suffix:t})}function ps(t){return new gM({check:"overwrite",tx:t})}function hw(t){return ps(e=>e.normalize(t))}function pw(){return ps(t=>t.trim())}function mw(){return ps(t=>t.toLowerCase())}function gw(){return ps(t=>t.toUpperCase())}function _w(){return ps(t=>HS(t))}function vw(t,e,n){return new t({type:"array",element:e,...Fe(n)})}function xw(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Fe(n)})}function yw(t,e){const n=Sw(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(sa(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(sa(s))}},t(i.value,i)),e);return n}function Sw(t,e){const n=new xn({check:"custom",...Fe(e)});return n._zod.check=t,n}function Zs(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Tr(t,i,n[i]);return t}function Dp(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??zs,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function ms(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function Zt(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const d=a.schema,f=e.processors[r.type];if(!f)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);f(t,e,d,u)}const h=t._zod.parent;h&&(a.ref||(a.ref=h),Zt(h,e,u),e.seen.get(h).isParent=!0)}const l=e.metadataRegistry.get(t);return l&&Zs(a.schema,l),e.io==="input"&&sn(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function Mf(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function Up(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const l=i.get(o);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const h=t.external.registry.get(a[0])?.id,d=t.external.uri??(g=>g);if(h)return{ref:d(h)};const f=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=f,{defId:f,ref:`${d("__shared")}#/${o}/${Mf(f)}`}}const l="#",c=`${l}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:l};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:c+Mf(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:l,defId:c}=r(a);o.def={...o.schema},c&&(o.defId=c);const u=o.schema;for(const h in u)delete u[h];u.$ref=l};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const c=t.external.registry.get(a[0])?.id;if(e!==a[0]&&c){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function Op(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;Op(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const Fp=new Set(["type","properties","required","additionalProperties"]),Ef=["oneOf","anyOf"];function wf(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function Fc(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!Fp.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const c of e){const u=c.properties?.[a]??wf(c);u!=null&&(o.some(h=>JSON.stringify(h)===JSON.stringify(u))||o.push(u))}const l=o.length===1?o[0]:Fc(o)??{allOf:o};Tr(n,a,l)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=wf(a);o&&!s.some(l=>JSON.stringify(l)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function bw(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of Fp)if(r in t)return;const n=e.filter(r=>Ef.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=Fc(e);else{const r=n[0],s=Ef.find(l=>Array.isArray(r[l]));if(Object.keys(r).length!==1)return;const a=e.filter(l=>l!==r),o=r[s].map(l=>Fc([...a,l]));if(o.some(l=>!l))return;i={[s]:o}}i&&(delete t.allOf,Zs(t,i))}function kp(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const l=t.seen.get(o);if(l.ref===null)return;const c=l.def??l.schema,u={...c},h=l.ref;if(l.ref=null,h){i(h);const f=t.seen.get(h),g=f.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(g)):Zs(c,g),Zs(c,u),o._zod.parent===h)for(const m in c)m==="$ref"||m==="allOf"||m in u||delete c[m];if(g.$ref&&f.def)for(const m in c)m==="$ref"||m==="allOf"||m in f.def&&JSON.stringify(c[m])===JSON.stringify(f.def[m])&&delete c[m]}const d=o._zod.parent;if(d&&d!==h){i(d);const f=t.seen.get(d);if(f?.schema.$ref&&(c.$ref=f.schema.$ref,f.def))for(const g in c)g==="$ref"||g==="allOf"||g in f.def&&JSON.stringify(c[g])===JSON.stringify(f.def[g])&&delete c[g]}t.override({zodSchema:o,jsonSchema:c,path:l.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())Op(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const l of t.seen.values())for(const c of[l.schema,l.def]){const u=c?.allOf;if(!Array.isArray(u))continue;const h=o.get(u);h?h.push(c):o.set(u,[c])}for(const l of t.intersections)for(const c of o.get(l)??[])bw(c)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}Zs(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const l=o[1];l.def&&l.defId&&(l.def.id===l.defId&&delete l.def.id,Tr(a,l.defId,l.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:No(e,"input",t.processors),output:No(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function sn(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return sn(i.element,n);if(i.type==="set")return sn(i.valueType,n);if(i.type==="lazy")return sn(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return sn(i.innerType,n);if(i.type==="intersection")return sn(i.left,n)||sn(i.right,n);if(i.type==="record"||i.type==="map")return sn(i.keyType,n)||sn(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:sn(i.in,n)||sn(i.out,n);if(i.type==="object"){for(const r in i.shape)if(sn(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(sn(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(sn(r,n))return!0;return!!(i.rest&&sn(i.rest,n))}return!1}const Mw=(t,e={})=>n=>{const i=Dp({...n,processors:e});return Zt(t,i),Up(i,t),kp(i,t)},No=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=Dp({...r??{},target:s,io:e,processors:n});return Zt(t,a),Up(a,t),kp(a,t)},os=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},ls=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},Tf=(t,e)=>{os(t,"minimum",e),ls(t,"maximum",e)},zp=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},Bp=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},$p=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},Hp=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},Af=(t,e)=>os(t,"minimum",e.minimum),Rf=(t,e)=>ls(t,"maximum",e.maximum),Cf=t=>(e,n)=>{Hp(e,n.format);const[i,r]=t[n.format];os(e,"minimum",i),ls(e,"maximum",r)},Ew={greater_than:(t,e)=>os(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>ls(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>zp(t,e.value),number_format:Cf(lp),bigint_format:Cf(XS),min_length:Af,max_length:Rf,length_equals:(t,e)=>Tf(t,e.length),min_size:Af,max_size:Rf,size_equals:(t,e)=>Tf(t,e.size),string_format:(t,e)=>{Hp(t,e.format),e.pattern&&Bp(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>$p(t,e.mime)};function jn(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)Ew[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&os(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&os(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&ls(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&ls(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&zp(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&$p(e,r.mime);for(const s of r.patterns??[])Bp(e,s);return e}const ww={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},Tw=new Map([[Ep,Zb],[xu,qb]]),Aw=t=>Tw.get(t)??t,Rw=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:l,contentEncoding:c,laxFormat:u}=jn(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=ww[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),c&&(r.contentEncoding=c),l&&l.size>0){const h=[...l].map(Aw);h.length===1?r.pattern=h[0].source:h.length>1&&(r.allOf=[...h.map(d=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:d.source}))])}},Cw=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:l,exclusiveMinimum:c,isInt:u}=jn(t);r.type=u?"integer":"number";const h=typeof c=="number"&&c>=(s??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(a??Number.POSITIVE_INFINITY),f=e.target==="draft-04"||e.target==="openapi-3.0";if(h?f?(r.minimum=c,r.exclusiveMinimum=!0):r.exclusiveMinimum=c:typeof s=="number"&&(r.minimum=s),d?f?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const p of o)Number.isFinite(p)&&p!==0?g.add(Math.abs(p)):ms(t,e,r,i,`A multipleOf divisor of ${p} cannot be represented in JSON Schema`);const[v,...m]=g;v!==void 0&&(r.multipleOf=v),m.length&&(r.allOf=[...r.allOf??[],...m.map(p=>({multipleOf:p}))])}},Pw=(t,e,n,i)=>{n.not={}},Iw=(t,e,n,i)=>{},Lw=(t,e,n,i)=>{const r=t._zod.def,s=Ic(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},Nw=(t,e,n,i)=>{ms(t,e,n,i,"Custom types cannot be represented in JSON Schema")},Dw=(t,e,n,i)=>{ms(t,e,n,i,"Transforms cannot be represented in JSON Schema")},Uw=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=jn(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=Zt(s.element,e,{...i,path:[...i.path,"items"]})};function kc(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?kc(e.out):e.type==="catch"?kc(e.innerType):t._zod.optin}const Ow=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&ms(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const c in a)Tr(r.properties,c,Zt(a[c],e,{...i,path:[...i.path,"properties",c]}));const l=[];for(const c of Object.keys(a)){const u=s.shape[c];(e.io==="input"?kc(u)===void 0:u._zod.optout===void 0)&&l.push(c)}l.length>0&&(r.required=l),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=Zt(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},Fw=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,l)=>Zt(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",l]}));s?n.oneOf=a:n.anyOf=a},kw=(t,e,n,i)=>{const r=t._zod.def,s=Zt(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=Zt(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=c=>"allOf"in c&&Object.keys(c).length===1,l=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=l,e.intersections.push(l)},zw=(t,e,n,i)=>{const r=t._zod.def,s=Zt(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},Bw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},yu=Symbol();function Gp(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,l)=>typeof l!="bigint"?l:(s=!0,null));return s?(ms(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),yu):JSON.parse(a)}const $w=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=Gp(r.defaultValue,t,e,n,i);a!==yu&&(n.default=a)},Hw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=Gp(r.defaultValue,t,e,n,i);a!==yu&&(n._prefault=a)},Gw=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{ms(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},Vw=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;Zt(a,e,i);const o=e.seen.get(t);o.ref=a},Ww=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},Vp=(t,e,n,i)=>{const r=t._zod.def;Zt(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Pf=new WeakSet([Object.prototype,Error.prototype]);function Ka(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const Xw=(t,e)=>{pb.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);Pf.has(n)||(Pf.add(n),Ka(n,"format",i=>r=>_b(i,r)),Ka(n,"flatten",i=>r=>gb(i,r)),Ka(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,Lc,2)}),Ka(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,Lc,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Nn=le("ZodError",Xw,void 0,{Parent:Error}),Zw=hu(Nn),qw=pu(Nn),Yw=mu(Nn),Kw=gu(Nn),jw=Mb(Nn),Jw=Eb(Nn),Qw=wb(Nn),eT=Tb(Nn),tT=Ab(Nn),nT=Rb(Nn),iT=Cb(Nn),rT=Pb(Nn);function sT(){ni.localeError||Ki(AE())}function Su(){ni.memoizer||Ki({memoizer:EE()})}const Dt=le("ZodType",(t,e)=>(sT(),Nt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(En(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return Yi(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(eA(t,e))},superRefine(t,e){return this.check(tA(t,e))},overwrite(t){return this.check(ps(t))},optional(){return Nf(this)},exactOptional(){return $T(this)},nullable(){return Df(this)},nullish(){return Nf(Df(this))},nonoptional(t){return ZT(this,t)},array(){return qr(this)},or(t){return OT([this,t])},and(t){return kT(this,t)},transform(t){return Uf(this,BT(t))},default(t){return VT(this,t)},prefault(t){return XT(this,t)},catch(t){return YT(this,t)},pipe(t){return Uf(this,t)},readonly(){return JT(this)},describe(t){const e=this.clone();return zs.add(e,{description:t}),e},meta(...t){if(t.length===0)return zs.get(this);const e=this.clone();return zs.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return dp(this,"~standard",{...xp(this),jsonSchema:{input:No(this,"input"),output:No(this,"output")}})},set"~standard"(t){Zi(this,"~standard",t)},parse:function t(e,n){return Zw(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await qw(this,e,n,{callee:t})},safeParse(t,e){return Yw(this,t,e)},async safeParseAsync(t,e){return Kw(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){Zi(this,"spa",t)},validate(t,e){return yb(this,t,e)},validateAsync(t,e){return bb(this,t,e)},encode:function t(e,n){return jw(this,e,n,{callee:t})},decode:function t(e,n){return Jw(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await Qw(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await eT(this,e,n,{callee:t})},safeEncode(t,e){return tT(this,t,e)},safeDecode(t,e){return nT(this,t,e)},async safeEncodeAsync(t,e){return iT(this,t,e)},async safeDecodeAsync(t,e){return rT(this,t,e)},toJSONSchema(t){return Mw(this,{})(t)},get description(){return zs.get(this)?.description},get _def(){return this._zod.def}}),Wp=le("_ZodString",(t,e)=>{vu.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Rw(t,n,i)},fp({format:t=>jn(t).format??null,minLength:t=>jn(t).minimum??null,maxLength:t=>jn(t).maximum??null},{regex(...t){return this.check(ow(...t))},includes(...t){return this.check(uw(...t))},startsWith(...t){return this.check(dw(...t))},endsWith(...t){return this.check(fw(...t))},min(...t){return this.check(Lo(...t))},max(...t){return this.check(Lp(...t))},length(...t){return this.check(Np(...t))},nonempty(...t){return this.check(Lo(1,...t))},lowercase(t){return this.check(lw(t))},uppercase(t){return this.check(cw(t))},trim(){return this.check(pw())},normalize(...t){return this.check(hw(...t))},toLowerCase(){return this.check(mw())},toUpperCase(){return this.check(gw())},slugify(){return this.check(_w())}})),aT=le("ZodString",(t,e)=>{vu.init(t,e),Wp.init(t,e)},{email(t){return this.check(IE(dT,t))},url(t){return this.check(FE(hT,t))},jwt(t){return this.check(JE(RT,t))},emoji(t){return this.check(kE(pT,t))},guid(t){return this.check(LE(fT,t))},uuid(t){return this.check(NE(ja,t))},uuidv4(t){return this.check(DE(ja,t))},uuidv6(t){return this.check(UE(ja,t))},uuidv7(t){return this.check(OE(ja,t))},nanoid(t){return this.check(zE(mT,t))},cuid(t){return this.check(BE(gT,t))},cuid2(t){return this.check($E(_T,t))},ulid(t){return this.check(HE(vT,t))},base64(t){return this.check(YE(wT,t))},base64url(t){return this.check(KE(TT,t))},xid(t){return this.check(GE(xT,t))},ksuid(t){return this.check(VE(yT,t))},ipv4(t){return this.check(WE(ST,t))},ipv6(t){return this.check(XE(bT,t))},cidrv4(t){return this.check(ZE(MT,t))},cidrv6(t){return this.check(qE(ET,t))},e164(t){return this.check(jE(AT,t))},datetime(t){return this.check(QE(oT,t))},date(t){return this.check(ew(lT,t))},time(t){return this.check(tw(cT,t))},duration(t){return this.check(nw(uT,t))}});function rt(t){return PE(aT,t)}const wt=le("ZodStringFormat",(t,e)=>{St.init(t,e),Wp.init(t,e)}),oT=le("ZodISODateTime",(t,e)=>{OM.init(t,e),wt.init(t,e)}),lT=le("ZodISODate",(t,e)=>{FM.init(t,e),wt.init(t,e)}),cT=le("ZodISOTime",(t,e)=>{kM.init(t,e),wt.init(t,e)}),uT=le("ZodISODuration",(t,e)=>{zM.init(t,e),wt.init(t,e)}),dT=le("ZodEmail",(t,e)=>{bM.init(t,e),wt.init(t,e)}),fT=le("ZodGUID",(t,e)=>{yM.init(t,e),wt.init(t,e)}),ja=le("ZodUUID",(t,e)=>{SM.init(t,e),wt.init(t,e)}),hT=le("ZodURL",(t,e)=>{RM.init(t,e),wt.init(t,e)}),pT=le("ZodEmoji",(t,e)=>{CM.init(t,e),wt.init(t,e)}),mT=le("ZodNanoID",(t,e)=>{PM.init(t,e),wt.init(t,e)}),gT=le("ZodCUID",(t,e)=>{IM.init(t,e),wt.init(t,e)}),_T=le("ZodCUID2",(t,e)=>{LM.init(t,e),wt.init(t,e)}),vT=le("ZodULID",(t,e)=>{NM.init(t,e),wt.init(t,e)}),xT=le("ZodXID",(t,e)=>{DM.init(t,e),wt.init(t,e)}),yT=le("ZodKSUID",(t,e)=>{UM.init(t,e),wt.init(t,e)}),ST=le("ZodIPv4",(t,e)=>{BM.init(t,e),wt.init(t,e)}),bT=le("ZodIPv6",(t,e)=>{HM.init(t,e),wt.init(t,e)}),MT=le("ZodCIDRv4",(t,e)=>{GM.init(t,e),wt.init(t,e)}),ET=le("ZodCIDRv6",(t,e)=>{WM.init(t,e),wt.init(t,e)}),wT=le("ZodBase64",(t,e)=>{XM.init(t,e),wt.init(t,e)}),TT=le("ZodBase64URL",(t,e)=>{qM.init(t,e),wt.init(t,e)}),AT=le("ZodE164",(t,e)=>{YM.init(t,e),wt.init(t,e)}),RT=le("ZodJWT",(t,e)=>{jM.init(t,e),wt.init(t,e)}),Xp=le("ZodNumber",(t,e)=>{wp.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Cw(t,n,i,r),t.isFinite=!0},fp({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=jn(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=jn(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=jn(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>jn(t).format??null},{gt(t,e){return this.check(Sf(t,e))},gte(t,e){return this.check(Dl(t,e))},min(t,e){return this.check(Dl(t,e))},lt(t,e){return this.check(yf(t,e))},lte(t,e){return this.check(Nl(t,e))},max(t,e){return this.check(Nl(t,e))},int(t){return this.check(If(t))},safe(t){return this.check(If(t))},positive(t){return this.check(Sf(0,t))},nonnegative(t){return this.check(Dl(0,t))},negative(t){return this.check(yf(0,t))},nonpositive(t){return this.check(Nl(0,t))},multipleOf(t,e){return this.check(bf(t,e))},step(t,e){return this.check(bf(t,e))},finite(){return this}}));function pn(t){return iw(Xp,t)}const CT=le("ZodNumberFormat",(t,e)=>{JM.init(t,e),Xp.init(t,e)});function If(t){return rw(CT,t)}const PT=le("ZodUnknown",(t,e)=>{QM.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Iw()});function Lf(){return sw(PT)}const IT=le("ZodNever",(t,e)=>{eE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Pw(t,n,i)});function LT(t){return aw(IT,t)}const NT=le("ZodArray",(t,e)=>{Su(),iE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Uw(t,n,i,r),t.element=e.element},{min(t,e){return this.check(Lo(t,e))},nonempty(t){return this.check(Lo(1,t))},max(t,e){return this.check(Lp(t,e))},length(t,e){return this.check(Np(t,e))},unwrap(){return this.element}});function qr(t,e){return vw(NT,t,e)}const DT=le("ZodObject",(t,e)=>{Su(),aE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Ow(t,n,i,r),ab(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return hr(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(En(this._zod.def,{catchall:t}))},passthrough(){return this.clone(En(this._zod.def,{catchall:Lf()}))},loose(){return this.clone(En(this._zod.def,{catchall:Lf()}))},strict(){return this.clone(En(this._zod.def,{catchall:LT()}))},strip(){return this.clone(En(this._zod.def,{catchall:void 0}))},extend(t){return YS(this,t)},safeExtend(t){return KS(this,t)},merge(t){return jS(this,t)},pick(t){return ZS(this,t)},omit(t){return qS(this,t)},partial(...t){return tf(Zp,this,t[0])},exactPartial(...t){return tf(qp,this,t[0],"exactPartial")},required(...t){return JS(Yp,this,t[0])}});function hi(t,e){const n={type:"object",shape:t??{},...Fe(e)};return new DT(n)}const UT=le("ZodUnion",(t,e)=>{oE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Fw(t,n,i,r),t.options=e.options});function OT(t,e){return new UT({type:"union",options:t,...Fe(e)})}const FT=le("ZodIntersection",(t,e)=>{lE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>kw(t,n,i,r)});function kT(t,e){return new FT({type:"intersection",left:t,right:e})}const zc=le("ZodEnum",(t,e)=>{cE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(i,r,s)=>Lw(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new zc({...e,checks:[],...Fe(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new zc({...e,checks:[],...Fe(r),entries:s})}});function hr(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new zc({type:"enum",entries:n,...Fe(e)})}const zT=le("ZodTransform",(t,e)=>{Su(),uE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Dw(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new hp(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(sa(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(sa(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function BT(t){return new zT({type:"transform",transform:t})}const Zp=le("ZodOptional",(t,e)=>{Rp.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Vp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Nf(t){return new Zp({type:"optional",innerType:t})}const qp=le("ZodExactOptional",(t,e)=>{dE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Vp(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function $T(t){return new qp({type:"optional",innerType:t})}const HT=le("ZodNullable",(t,e)=>{fE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>zw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Df(t){return new HT({type:"nullable",innerType:t})}const GT=le("ZodDefault",(t,e)=>{hE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>$w(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function VT(t,e){return new GT({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():ap(e)}})}const WT=le("ZodPrefault",(t,e)=>{pE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Hw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function XT(t,e){return new WT({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():ap(e)}})}const Yp=le("ZodNonOptional",(t,e)=>{mE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Bw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function ZT(t,e){return new Yp({type:"nonoptional",innerType:t,...Fe(e)})}const qT=le("ZodCatch",(t,e)=>{gE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Gw(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function YT(t,e){return new qT({type:"catch",innerType:t,catchValue:typeof e=="function"?e:lb(e)})}const KT=le("ZodPipe",(t,e)=>{_E.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Vw(t,n,i,r),t.in=e.in,t.out=e.out});function Uf(t,e){return new KT({type:"pipe",in:t,out:e})}const jT=le("ZodReadonly",(t,e)=>{vE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Ww(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function JT(t){return new jT({type:"readonly",innerType:t})}const QT=le("ZodCustom",(t,e)=>{xE.init(t,e),Dt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>Nw(t,n,i,r)});function eA(t,e={}){return xw(QT,t,e)}function tA(t,e){return yw(t,e)}const nA=hi({id:rt(),name:rt(),role:rt(),state:hr(["idle","thinking","working","reviewing"]),stationId:hr(["culture","analyzer","explorer","notebook"]),boredom:pn().min(0).max(100).nullable(),boredomSpectrum:hi({position:pn().min(0).max(1),color:rt(),regime:rt()}).optional()});hi({runId:rt(),lastSequence:pn().int().nonnegative(),status:hr(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:pn(),title:rt().optional(),config:hi({mode:hr(["tinker_modal","recorded"]),arm:hr(["A","B","C","D","full"]),rounds:pn(),task:rt().optional(),seed:pn().nullable(),model:rt().nullable()}),sourceCommit:rt(),progress:pn().min(0).max(1),round:pn(),boredom:pn(),regime:rt(),value:pn().nullable(),reference:pn().nullable(),agents:qr(nA),findings:qr(hi({agent:rt().optional(),role:rt(),message:rt(),round:pn().optional(),memoryId:rt().optional()})),results:qr(hi({agent:rt(),round:pn(),kind:rt(),status:rt(),value:pn().nullable(),commit:rt().nullable().optional(),description:rt(),sources:qr(rt()).optional()})),sources:qr(hi({id:rt().nullable(),title:rt().nullable(),url:rt().nullable(),query_id:rt().nullable()})),error:rt().nullable(),metric:hi({name:rt(),unit:rt(),direction:hr(["minimize","maximize"])}),provenance:hi({llm:rt(),gpu:rt(),exa:rt(),memory:rt(),execution:rt().optional()})});async function Kp(t,e){{const n=tp(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const Ul=(t,e)=>t.filter(e).at(-1),cs=(t,e)=>t.filter(n=>n.tick<=e),ve=t=>typeof t=="string"&&t.trim()?t.trim():null,yt=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Gi=t=>typeof t=="boolean"?t:null;function aa(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const Bc=t=>new Map(t.map(e=>[String(e.id),e]));function Of(t){const e=ve(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:ve(n.idea)||ve(n.text)||e}:{text:e}}catch{return{text:e}}}function oa(t,e,n){if(!t)return null;const i=cs(t.events,n).filter(S=>S.refs?.experiment_id===e);if(!i.length)return null;const r=Bc(aa(t,"experiments")).get(e)||{},s=i.find(S=>S.type==="experiment.started"),a=Ul(i,S=>S.type==="experiment.finished"),o=Ul(i,S=>S.type==="gate.checked"),l=Ul(i,S=>S.type==="verdict.issued"),c=i.find(S=>S.refs?.study_id),u=ve(r.hypothesis_id)||ve(s?.refs?.hypothesis_id),h=u?cs(t.events,n).find(S=>S.type==="hypothesis.proposed"&&S.refs?.hypothesis_id===u):void 0,d=h?Bc(aa(t,"hypotheses")).get(u)||{}:null,f=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(f.reasons)&&f.reasons.length>0||typeof f.pass=="boolean"||yt(f.attempts)>0,v=o?.payload||{},m=[...Array.isArray(v.reasons)?v.reasons:[],...a&&Array.isArray(f.reasons)?f.reasons:[]].map(String),p=t.events.some(S=>S.type==="verdict.issued"&&S.refs?.experiment_id===e),y=l||a&&!p?r.verdict:null,w=l?.payload||{};return{id:e,agentId:ve(r.agent_id)||s?.agentId||i[0].agentId||null,round:yt(r.round)??yt(i[0].round),kind:ve(r.kind),commit:ve(r.commit)||ve(v.candidate_commit),role:ve(r.role)||ve(s?.payload?.role),description:ve(r.description)||ve(s?.payload?.description)||ve(s?.message),idea:d?{text:Of(d.text||h?.payload?.text).text,rationale:ve(d.rationale)||ve(h?.payload?.rationale)||ve(Of(d.text||h?.payload?.text).rationale),predictedDelta:yt(d.predicted_delta)??yt(r.predicted_delta),sources:(Array.isArray(d.source_ids)?d.source_ids:[]).map(String)}:null,descriptor:r.descriptor||v.descriptor||null,gate:o||a&&g?{pass:Gi(v.pass)??Gi(f.pass),reasons:[...new Set(m)],attempts:yt(f.attempts),text:ve(v.text)||ve(o?.message),priorArt:(Array.isArray(v.prior_art)?v.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:ve(a.payload?.status)||ve(r.status),metric:yt(a.payload?.metric_value)??yt(r.metric_value),reward:yt(a.payload?.reward),text:ve(a.payload?.text)||ve(a.message),tick:a.tick}:null,verdict:l||y?{by:ve(y?.by_agent_id)||l?.agentId||null,verdict:ve(w.verdict)||ve(y?.verdict),why:ve(w.why)||ve(y?.why),tick:l?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([S,A])=>typeof A=="string"&&(a||S==="diff"))),logTail:a?ve(r.log_tail):null,studyId:ve(r.study_id)||ve(c?.refs?.study_id),timeline:i.map(S=>({tick:S.tick,type:S.type,text:ve(S.payload?.text)||ve(S.message)||S.type}))}}function iA(t,e){return[...new Set(cs(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function bu(t,e){if(!t)return[];const n=cs(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(iA(t,e)),s=aa(t,"experiments").filter(a=>r.has(String(a.id)));return aa(t,"sources").flatMap(a=>{const o=String(a.id),l=i.get(o),c=yt(a.tick);if(!l&&(c==null||c>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(ve).filter(Boolean):[],h=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(d=>r.has(d)),...s.filter(d=>Array.isArray(d.source_ids)&&d.source_ids.includes(o)).map(d=>String(d.id))])];return[{id:o,title:ve(a.title)||ve(l?.payload?.summary)||ve(a.url)||o,url:ve(a.url)||ve(l?.payload?.url),highlight:u[0]||ve(a.highlight)||ve(a.extract)||ve(l?.payload?.text),agentId:ve(a.agent_id)||l?.agentId||null,tick:l?.tick??c,citedBy:h}]})}const rA=t=>Array.isArray(t)?t.map(e=>({rho:yt(e?.rho),p:yt(e?.p),n:yt(e?.n),problem:e?.problem})):[],Ff=t=>({rho:yt(t.rho),p:yt(t.p),n:yt(t.n),halves:rA(t.halves),significant:Gi(t.significant),replicated:Gi(t.replicated),confirmed:Gi(t.confirmed)});function $c(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap($c);if(typeof t=="object"){const e=t,n=ve(e.text)||ve(e.why)||ve(e.reason)||ve(e.verdict);return n?[[ve(e.by)||ve(e.judge)||ve(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>$c(r).map(s=>`${i}: ${s}`))}return[String(t)]}function kf(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Gi(e.available)??!0,score:yt(e.score),rejected:Gi(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const l=o&&typeof o=="object"?o:{};return[a,{laugh:yt(l.laugh),think:yt(l.think),reason:ve(l.reason),model:ve(l.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:ve(a.title)||"",url:ve(a.url)||"",snippet:ve(a.snippet)||""})),priorWorkAvailable:Gi(e.prior_work_available)??!1}}function Mu(t,e){if(!t)return[];const n=cs(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=Bc(aa(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),l=i.get(o)||{},c=s.payload||{};if(s.type==="study.registered"){const h=l.dataset&&typeof l.dataset=="object"?l.dataset:{};r.set(o,{id:o,agentId:ve(l.agent_id)||s.agentId||null,experimentId:ve(l.experiment_id)||ve(s.refs?.experiment_id),round:yt(l.round)??yt(s.round),field:ve(c.field)||ve(l.field),direction:ve(l.direction),question:ve(c.question)||ve(l.question),hypothesis:ve(l.hypothesis),mechanism:ve(l.mechanism),dataset:{url:ve(h.url),x:ve(c.x)||ve(h.x),y:ve(c.y)||ve(h.y),xLevel:ve(h.x_level),yLevel:ve(h.y_level),id:ve(l.dataset_id)},predictedRho:yt(c.predicted_rho)??yt(l.predicted_rho),citations:(Array.isArray(l.citations)?l.citations:[]).map(String),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...Ff({...l,...c,halves:c.halves??l.halves,significant:c.significant??l.significant}),headline:ve(c.headline)||ve(l.headline),rejected:ve(c.rejected),text:ve(c.text)||ve(s.message)},u.committee=kf(c.committee??l.committee)):s.type==="study.replicated"?u.replications.push(Ff(c)):s.type==="award.issued"&&(u.award={award:ve(c.award),score:yt(c.score),rejected:ve(c.rejected),headline:ve(c.headline),verdicts:$c(c.verdicts??l.committee?.verdicts),text:ve(c.text)||ve(s.message)},u.committee=kf(c)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function jp(t,e,n,i=40){return cs(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:ve(s.kind),text:ve(s.text)||ve(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const sA=(t,e=3)=>t==null?"—":(t>0?"+":"")+t.toFixed(e),Do=t=>t==null?"—":t<1e-300?"<1e-300":String(Number(t.toPrecision(2))),zf={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},Ol=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function Jr(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const Ni=t=>typeof t=="string"?t.trim():"";function Jp(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},l=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const c=Ni(o.regime);if(!c)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",h=s.get(u);s.set(u,c),l&&h!==c&&zf[c]&&r.push({tick:a.tick,kind:"regime",title:zf[c],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(l)if(a.type==="discovery.made"){const c=Ol(o.metric_value),u=Ol(o.previous_best),h=Ni(o.title),d=c==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${Jr(c)}${u==null?"":` (was ${Jr(u)})`}`,f=Ol(o.reward);r.push({tick:a.tick,kind:"best",title:c==null?"New discovery!":"New best!",detail:[d||(f==null?"":`reward ${Jr(f)}`),h].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:Ni(o.award)||Ni(o.prize)||"Award issued",detail:[Ni(o.title)||Ni(o.headline),Ni(o.citation)||Ni(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function aA(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}const oA=/\b(?:402|credit|billing|payment|quota)\b/i;function Eu(t,e){const n=i=>typeof i=="string"&&oA.test(i.replace(/https?:\/\/\S+/gi," "));return Array.isArray(t.publish_errors)&&t.publish_errors.some(i=>n(i.kind)||n(i.message))?!0:(e?.events||[]).some(i=>(i.type==="run.finished"||i.type==="run.stopped")&&(n(i.message)||["text","error","reason","detail","message"].some(r=>n(i.payload?.[r]))))}function lA(t){const e=t.provenance?.command,i=(Array.isArray(e)?e.join(" "):typeof e=="string"?e:"").match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1],r=Number(i);return Number.isFinite(r)&&r>0?r:void 0}function cA(t,e){const n=(e?.events||[]).flatMap(o=>[o.round,o.payload?.round]).filter(o=>typeof o=="number"&&Number.isFinite(o)),i=Math.max(t.time?.rounds||0,...n),r=t.requestedRounds||t.requested_rounds||t.rounds||t.run?.rounds||lA(t),s=i?` (${i}${r?`/${r}`:""} rounds)`:"",a=Eu(t,e)?" · Tinker credit ran out":"";return`Stopped real run${s}${a}`}function wu(t,e){const n=t?.provenance,i=[];if(n?.exa==="off"?i.push("Exa off"):(n?.exa==="live"||n?.exa==="on")&&i.push("Exa on"),n?.memory_backend==="pastdev"?i.push("past.dev memory"):n?.memory_backend==="local"&&i.push("local memory"),n?.llm==="fake"||n?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:i};const r=typeof n?.llm=="string"&&n.llm!=="fake"?aA(n.llm):"";return r?t?.status==="stopped"?{label:cA(t,e),tone:"stopped",chips:i}:t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:i}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${r} run`,tone:"live",chips:i}:{label:"Finished real run",tone:"finished",chips:i}:{label:"Unverified recording",tone:"unknown",chips:i}}function uA(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function dA(t){return t.sample===!1&&t.status==="stopped"?{eyebrow:"RESEARCH / SWARM RUN",kicker:"● SWARM RUN · STOPPED",callout:"Swarm run · stopped. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${Qp(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function fA(t,e){return!!t.live||e<t.totalTicks}function pa(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function hA(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function pA(t,e){return t.filter(n=>n.tick<=e)}function mA(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const Qp=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function gA(t){const e=t.publish_errors;return Array.isArray(e)?e.filter(n=>n.kind!=="recovered").length:typeof e=="number"?e:0}function _A(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}function vA(t){const e=t.status==="stopped"?"● SWARM RUN · STOPPED":t.stale?`LIVE RUN STALLED${t.lastUpdateTs?" · NO UPDATES SINCE "+Qp(t.lastUpdateTs):""}`:t.live?"FOLLOWING LIVE SWARM":"SWARM RUN · FINISHED",n=gA(t);return n?`${e} · ${n} PUBLISH ERROR${n===1?"":"S"}`:e}const Bf=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function xA(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const l=[...n[a]||[]],c=new Map(l.map((u,h)=>[Bf(u),h]));for(const u of o){const h=c.get(Bf(u));h===void 0?l.push(u):l[h]=u}n[a]=l}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function yA(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return xA(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const SA={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel prize hunt"};function $f(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function em(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function tm(t){return t.task_title||SA[em(t)]||t.title}function nm(t){if(!t?.name)return"";const e=t.name.replaceAll("_"," ");return t.direction==="maximize"?`${e} ↑ higher is better`:`${e} ↓ lower is better`}function Tu(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};if(t.status==="stopped")return{status:"stopped",label:"STOPPED",detail:"The run ended before finishing"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${$f(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${$f(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function bA(t){const e=t.publish_errors;return Array.isArray(e)?e.length:typeof e=="number"?e:0}function MA(t){const e=bA(t);return e?`${e} publish error${e===1?"":"s"}`:""}function EA(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function wA(t){const e=Tu(t),n=t.sample===!1?_A({...t,stale:e.status==="stale",live:e.status==="live"}):"",i=tm(t),r=i===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[n+i,r,t.sample===!1&&e.status==="stopped"?e.label.toLowerCase():"",t.sample===!1?EA(t):""].filter(Boolean).join(" · ")}function TA(t,e){const n=[["Live now",t.filter(r=>r.sample===!1&&r.live)],["Swarm runs",t.filter(r=>r.sample===!1&&!r.live)],["Recorded samples",t.filter(r=>r.sample!==!1)]],i=r=>`<option value="${e(r.id)}">${e(wA(r))}</option>`;return n.filter(([,r])=>r.length).map(([r,s])=>`<optgroup label="${r}">${s.map(i).join("")}</optgroup>`).join("")}const qs=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:null,im=t=>Array.isArray(t)?t.filter(e=>!!qs(e)):qs(t)?Object.values(t).filter(e=>!!qs(e)):[],AA="Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.";function Ar(t,e){const n=t?.metric?.description||"";return!!t&&(em(t)==="ignobel"||t.metric?.name==="replicated_findings"||/replicated and significant/i.test(n)||im(e?.entities?.studies).length>0)}function Ko(t,e){return Ar(t,e)?!im(e?.entities?.studies).some(i=>i.committee!=null||qs(i.result)?.committee!=null||qs(i.graded)?.committee!=null)&&!(e?.events||[]).some(i=>i.type==="award.issued"):!1}function ma(t,e){if(Ar(t,e)){if(Ko(t,e))return AA;const n=t?.metric?.description;if(n)return n.replace(/\breplicated\s+and\s+significant\b/gi,"split-half consistent and significant").replace(/\breplicated\b/gi,"passed split-half consistency").replace(/\breplication\b/gi,"split-half consistency")}return t?.proxy_note}const fo={minRho:.1,alpha:.005,splitAlpha:.05},dr=t=>typeof t=="number"&&Number.isFinite(t),Fl=t=>dr(t)?t:void 0,Ja=t=>String(t);function rm(t){const e=t&&typeof t=="object"?t:{};return{minRho:Fl(e.minRho??e.min_rho??e.min_effect_rho)??fo.minRho,alpha:Fl(e.alpha??e.p_alpha??e.significance_alpha)??fo.alpha,splitAlpha:Fl(e.splitAlpha??e.split_alpha??e.replication_alpha)??fo.splitAlpha}}function sm(t,e={}){const n={...fo,...e},i=[],r=t?.rho,s=t?.p,a=t?.direction==="positive"?1:t?.direction==="negative"?-1:dr(r)?Math.sign(r):0,o=t?.halves;return(!dr(r)||r*a<n.minRho)&&i.push(`|ρ| ≥ ${Ja(n.minRho)}`),(!dr(s)||s>=n.alpha)&&i.push(`p < ${Ja(n.alpha)}`),dr(r)&&o&&o.length>=2&&o.every(c=>{const u=c?.rho,h=c?.p;return dr(u)&&dr(h)&&h<n.splitAlpha&&u*a>=n.minRho&&!c.problem})||i.push(`split-half consistency (both halves p < ${Ja(n.splitAlpha)}, same direction, |ρ| ≥ ${Ja(n.minRho)})`),{pass:i.length===0,failures:i}}const Hf=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Di=t=>typeof t=="string"?t:"";function RA(t){const e=Hf(t?.entities?.sources),n=new Map(e.map(o=>[Di(o.url),o]).filter(([o])=>o)),i=Hf(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(l=>{const c=Di(l),u=n.get(c);return{study:Di(o.question)||Di(o.headline)||Di(o.id),url:c,sourceId:u?String(u.id??u.source_id??""):"",title:u?Di(u.title):""}})),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(Di(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&/search|exa/.test(Di(o.payload?.kind))).length,memoryRecalls:s,pastdev:a}}function Au(t,e=Number.MAX_SAFE_INTEGER){const n=Mu(t,e),i=Jp(t?.events||[],-1,e).filter(o=>o.kind==="award"),r=n.filter(o=>o.result?.confirmed===!0||o.result?.replicated===!0||o.replications.some(l=>l.confirmed===!0||l.replicated===!0)),s=r.filter(o=>sm(o.result?{...o.result,direction:o.direction||void 0}:null,rm(t?.manifest?.judging)).pass).length,a=ma(t?.manifest,t)||"";return{studies:n.length,registered:n.length,confirmed:r.length,underCurrentRules:s,passed:r.length,awards:i.map(o=>[o.title,o.detail].filter(Boolean).join(" · ")),proxyNote:a,isIgnobel:Ar(t?.manifest,t),preCommittee:Ko(t?.manifest,t)}}function CA(t,e,n,i=Au(null),r=null,s=null){const a=r?.provenance,o=wu(r,s||void 0),l=t.tools.map(p=>{let y=p.name,w=p.detail,S="";if(p.kind==="llm"){const A=a?.llm==="fake"||a?.llm_mode==="fake",T=typeof a?.llm=="string"?a.llm:"",_=T&&T!=="fake"&&T.split("/").filter(Boolean).at(-1)||"";A?(y=p.fakeName||p.name,w=p.fakeDetail||p.detail,S=p.fakeSuffix||""):_?(y=a?.llm_mode==="tinker"&&p.tinkerName||p.name,w=(a?.llm_mode==="tinker"&&p.tinkerDetail||p.detail).replace(/\{model\}/g,/kimi/i.test(T)?"Kimi":_)):(w=p.unverifiedDetail||p.detail,S=p.unknownSuffix||"")}else if(p.kind==="exa"){const A=a?.exa;S=A==="off"?p.offSuffix||"":A==="live"||A==="on"?"":p.unknownSuffix||""}else p.kind==="memory"&&(S=a?.memory_backend==="pastdev"?"":a?.memory_backend==="local"?p.localSuffix||"":a?.memory_backend==="off"?p.offSuffix||"":p.unknownSuffix||"");return`<li><b>${n(y)}</b> ${n(w)}${S?` <span class="intro-provenance-note">${n(S)}</span>`:""}</li>`}).join(""),c=`<div class="provenance-badge intro-provenance" data-tone="${o.tone}" role="status" aria-label="${n(o.label)}"><span class="provenance-badge-label">${n(o.label)}</span></div>`,u=e.citations.slice(0,12).map(p=>`<li><span>${n(p.study)}</span> ${p.sourceId?`<button class="chip" data-source="${n(p.sourceId)}">${n(t.labels.source)} ${n(p.title||p.url)}</button>`:`${/^https?:\/\//i.test(p.url)?`<a href="${n(p.url)}" target="_blank" rel="noopener noreferrer">${n(p.url)}</a>`:`<code>${n(p.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join(""),h=(p,y)=>p.replace(/\{([^}]+)\}/g,(w,S)=>String(y[S]??"")),d=i.studies?`<p>${n(h(t.results.countLine,{N:i.registered,M:i.confirmed,K:i.underCurrentRules}))}</p>`:`<p>${n(t.results.noStudies)}</p>`,f=i.isIgnobel&&i.studies?`<p class="intro-result-line">${n(h(t.results.factualLine,{N:i.registered,K:i.underCurrentRules,committeeSuffix:i.preCommittee?t.results.noCommitteeSuffix:""}))}</p>`:"",g=i.isIgnobel?i.awards.length?`<p>${n(h(t.results.awardCount,{N:i.awards.length}))}</p><ul>${i.awards.map(p=>`<li>${n(p==="Award issued"?t.results.awardFallback:p)}</li>`).join("")}</ul>`:`<p>${n(t.results.noAwards)}${r&&Eu(r,s)?n(t.results.creditErrorSuffix):""}</p>`:"",v=`<p class="track3-note"><a href="${n(t.results.memoryComparisonUrl)}" target="_blank" rel="noopener noreferrer">${n(t.results.memoryComparisonLine)}</a></p>`,m=`<p class="track3-note">${n(t.results.bixbenchLine)}</p>`;return`<div class="intro-card">${c}<h1>${n(t.replay.title)}</h1><p class="intro-subline">${n(t.replay.subline)}</p>${f}<button id="intro-start" class="intro-start">${n(t.replay.button)}</button><a id="intro-results-link" class="intro-results-button" href="#intro-real-results">${n(t.replay.resultsButton)}</a><a id="intro-qualifier" class="intro-qualifier" href="#intro-real-results">${n(t.replay.qualifier)}</a>
<details id="intro-about" class="intro-about"><summary>${n(t.sections.about)}</summary><div class="intro-sections"><details class="intro-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.title)} · ${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details>
<details class="intro-section"><summary>${n(t.sections.tools)}</summary><ul class="intro-tools">${l}</ul></details>
<details class="intro-section"><summary>${n(t.sections.authors)}</summary><p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details>
<details class="intro-section"><summary>${n(t.sections.boredom)}</summary><h2>${n(t.boredom.title)}</h2>${t.boredom.paragraphs.map(p=>`<p>${n(p)}</p>`).join("")}<p class="muted">${n(t.boredom.source)}</p></details>
<details class="intro-section intro-trail"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${u?`<ul class="intro-cites">${u}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details></div></details>
<details id="intro-real-results" class="intro-real-results" hidden><summary>${n(t.sections.results)}</summary>${d}${g}<p class="track3-note">${n(t.results.track3Line)}</p>${v}${m}${i.proxyNote?`<p><b>${n(t.results.proxyNote)}:</b> ${n(i.proxyNote)}</p>`:`<p class="muted">${n(t.results.noProxy)}</p>`}</details></div>`}const PA={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Built in one weekend at the SF AI Research Hack (Nov 14–15, hosted by Iterate): an artificial scientist swarm that notices when it is bored and changes approach."},IA=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],LA={placeholder:!0,names:["[AUTHORS — names to come]"]},NA={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},DA={title:"This year the Ig Nobel research prize was discovered early by a phenomenal breakthrough in artificial scientist swarms.",subline:"The secret: making AI less boring.",button:"Watch the swarm",qualifier:"tongue-in-cheek headline",resultsButton:"See the real results"},UA={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa",results:"The real results"},OA={source:"Exa result:",missingExa:"no Exa result in this recording",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},FA={studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"Prizes awarded: {N}",awardFallback:"Award issued",creditErrorSuffix:" (Tinker credit ran out)",proxyNote:"Metric / proxy",noStudies:"No Ig Nobel study registrations appear in this recording.",noAwards:"No prizes awarded yet — this run stopped before committee judging.",noProxy:"No proxy note is present in this recording.",factualLine:"Real result so far: {K} of {N} preregistered tests held up{committeeSuffix}",noCommitteeSuffix:"; no committee score yet",countLine:"{N} registered · {M} confirmed ({K} under current rules)",track3Line:"Track 3 check: a single agent scored higher on held-out than the boredom swarm, but the ordering depends on a grader fix made after the winners were known; exploratory.",memoryComparisonLine:"past.dev vs local memory on 419 real memories: hit@1 0.65 vs 0.30, 562 ms vs 15 ms (hand-written probes)",memoryComparisonUrl:"https://github.com/arii/caffeinated/blob/main/experiments/memory-comparison/README.md",bixbenchLine:"BixBench held-out: baseline 1/7 → swarm best 6/7 (one run; 95% CI 0.49–0.97)"},am={event:PA,tools:IA,authors:LA,boredom:NA,replay:DA,sections:UA,labels:OA,results:FA},kA="How it's judged",zA="Committee data exists, but no prizes were issued in this recording.",BA=["Preregister the study before looking at the data.","Use a real, public dataset.","Pass the gates: |ρ| ≥ 0.1 and p < 0.005.","Pass split-half consistency: both halves p < 0.05 and in the same direction.","Check prior work with Exa.","Two independent non-Kimi judges (gpt-oss-120b and Qwen3.5-397B) score each study; the final score is the lower judge.","Reject any study that targets a group of people."],kl={title:kA,committeePending:zA,steps:BA},Gf={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function $A(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function Vf(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Wf={B:"BIO",C:"CHEM",P:"PHYSICS"};function HA(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=$A(t.name);if(Gf[n])return{initial:r,familyKey:"S",familyLabel:Gf[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:Vf(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const c=Vf(a);return{initial:r,familyKey:c,familyLabel:Wf[c]||a.toUpperCase(),staff:!1,color:i}}const l=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:l,familyLabel:Wf[l]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const GA={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function om(t){return t?GA[t]||t.replaceAll("_"," ").toLowerCase():""}function lm(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const VA={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function cm(t){return VA[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function WA(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function um(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!WA(e)}function XA(t,e,n=110){const i=[cm(t.type),e].filter(Boolean).join(" · ");if(!um(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i} — ${r.length>n?r.slice(0,n-1)+"…":r}`}function ZA(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const Ls=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function dm(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=Ls(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=Ls(a.mechanism)||i.mechanism,i.method=Ls(a.method)||i.method),i.role=Ls(s.role)||i.role}else r.type==="study.registered"&&(i.field=Ls(s.field)||i.field)}return i}function fm(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const Xf={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function qA(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:Xf[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:Xf[i]?.[1]||"",names:r}))}function YA(t,e){return e-t<=1}function KA(t){return t.live?t.totalTicks:0}function jA(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function hm(t,e,n){return!!t?.live&&n&&YA(e,t.totalTicks)}function pm(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function JA(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(hm(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=pm(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function Qn(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function QA(t,e,n,i=!0){const r=l=>typeof l=="number"&&Number.isFinite(l)?l:null,s=t.filter(l=>(l.tick??0)<=n).map(l=>({id:l.id,tick:l.tick??0,raw:r(l.value),value:i?r(l.value):null,outcome:Qn(l.status,l.kind),agent:l.agent,description:l.description,status:l.status})),a=[],o=[];for(const l of e){if(l.tick>n||l.tick<0)continue;const c=l.snapshot.value;if(c==null||!Number.isFinite(c))continue;const u=a.at(-1);(!u||u[1]!==c)&&(u&&o.push([l.tick,c]),a.push([l.tick,c]))}return{points:s,best:a,newBest:o}}const Zn={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},Ns=t=>String(Number(t.toPrecision(4)));function e1(t,e,n,i){const r=[...t.points.map(b=>b.value),...t.best.map(b=>b[1])].filter(b=>b!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,l=52,c=560,u=16,h=132,d=150,f=Math.max(1,n),g=a===s?s-o/2:s,v=a===s?o:a-s,m=b=>l+Math.min(1,b/f)*(c-l),p=b=>h-(b-g)/v*(h-u),y=t.best.map(([b,z],I)=>`${I?"H":"M"}${m(b).toFixed(1)} ${I?`V${p(z).toFixed(1)}`:p(z).toFixed(1)}`).join(""),w=t.best.length?`<path class="best-line" d="${y}H${m(f).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",S=b=>{const z=m(b.tick).toFixed(1),I=`${i(b.agent)} · ${i(b.status)} · ${b.raw==null?"no score":Ns(b.raw)} · ${i(b.description)}`,F=`<title>${I}</title>`,B=b.id?` data-experiment="${i(b.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${I}"`:"";if(b.value==null&&b.outcome!=="crashed")return`<circle class="pt ${b.outcome}"${B} cx="${z}" cy="${d}" r="${b.outcome==="discarded"?3.5:4.5}" fill="${b.outcome==="discarded"?"none":Zn[b.outcome]}" stroke="${Zn[b.outcome]}" stroke-width="1.6">${F}</circle>`;if(b.value==null)return`<g class="pt crashed"${B}>${F}<path d="M${+z-4} ${d-4}l8 8m0 -8l-8 8" stroke="${Zn.crashed}" stroke-width="2"/></g>`;const $=p(b.value).toFixed(1);return b.outcome==="crashed"?`<g class="pt crashed"${B}>${F}<path d="M${+z-4} ${+$-4}l8 8m0 -8l-8 8" stroke="${Zn.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${b.outcome}"${B} cx="${z}" cy="${$}" r="${b.outcome==="discarded"?3.5:4.5}" fill="${b.outcome==="discarded"?"none":Zn[b.outcome]}" stroke="${Zn[b.outcome]}" stroke-width="1.6">${F}</circle>`},A=t.newBest.map(([b,z])=>`<path class="new-best" d="M${m(b).toFixed(1)} ${(p(z)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${Ns(z)} at tick ${b}</title></path>`).join(""),T=e.direction==="maximize"?"↑ better":"↓ better",_=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${l} ${u-4}V${h+4}H${c}" fill="none" stroke="#79918b"/><text x="${l-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${Ns(a)}</text><text x="${l-6}" y="${h}" text-anchor="end" fill="#b9cac2" font-size="9">${Ns(s)}</text><text x="${l-6}" y="${d+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(b=>b.value==null&&b.raw!=null)?"other measure":"no score"}</text><path d="M${l} ${d}H${c}" stroke="#ffffff14" stroke-dasharray="3 4"/>${w}${t.points.map(S).join("")}${A}${_?`<text x="${c}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${Ns(_[1])}</text>`:""}<text x="${l}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${T}</text><g font-size="9" fill="#b9cac2" transform="translate(${l} 186)"><circle cx="0" cy="-3" r="4" fill="${Zn.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${Zn.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${Zn.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${Zn.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}function mm(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function gm(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function Hc(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function t1(t,e,n){const i=mm(t),r=[],s=new Map,a=new Set,o=new Set,l=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let c=0;const u=new Set,h=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),d=.25,f=d*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=h;g+=d){for(;c<l.length&&l[c].tick<=g;){const m=l[c++];if(m.type==="experiment.started"){m.agentId&&(a.add(m.agentId),o.add(m.agentId));continue}if(m.type==="experiment.finished"){m.agentId&&o.delete(m.agentId);continue}for(const p of[m.agentId,...m.payload?.to_agent_ids||[],m.refs?.to_agent_id].filter(Boolean)){u.add(p);const y=s.get(p);y&&!y.table&&(y.pending=!0)}}const v=pa(t.frames,g)?.snapshot.agents||[];gm(v,g,i).forEach(m=>{const p=v.findIndex(S=>S.id===m.id);let y=s.get(m.id);if(!y){y={p:{...Rc(p),atTable:u.has(m.id)},path:[],leg:0,dwell:u.has(m.id)?2.5:0,pending:!1,table:u.has(m.id),lab:!1},s.set(m.id,y);return}if(a.delete(m.id)&&(y.lab=!0,y.table=!1,y.dwell=0,y.p.atTable=!1,y.p.atLab=!1,y.path=lo(y.p,Cc(Hc({...m,activity:"experimenting"}),p),e,n)),y.lab&&!y.path.length&&!y.p.atLab&&(y.p.atLab=!0,y.dwell=4),y.dwell>0){y.dwell=Math.max(0,y.dwell-f),y.p.atTable=y.table;return}if(y.lab&&y.p.atLab){if(o.has(m.id))return;y.lab=!1,y.p.atLab=!1}if(y.p.atTable=!1,!y.path.length){y.table&&(y.table=!1,y.pending=!1,y.leg=0);const A=[Cc(Hc({...m,activity:"experimenting"}),p),{x:2.7+p%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(y.leg>=A.length&&y.pending)y.table=!0,y.path=lo(y.p,Rc(p),e,n);else{const T=A[y.leg%A.length];y.leg++,y.path=lo(y.p,T,e,n)}}let w=f*2.1;for(;y.path.length&&w>0;){const S=y.path[0],A=Math.hypot(S.x-y.p.x,S.z-y.p.z);A<=w?(y.p.x=S.x,y.p.z=S.z,w-=A,y.path.shift()):(y.p.x+=(S.x-y.p.x)/A*w,y.p.z+=(S.z-y.p.z)/A*w,w=0)}!y.path.length&&y.lab&&(y.p.atLab=!0,y.dwell=4),!y.path.length&&y.table&&(y.dwell=3,y.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([m,p])=>[m,{...p.p}]))})}return r}function n1(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function i1(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const l=o.payload?.text||o.message||"";if(!l.trim())continue;const c=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:n1(i(l)),peers:c.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const nt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",zl=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Qr=t=>String(Number(t.toPrecision(4))),an=(t,e=140)=>t.length>e?t.slice(0,e-1)+"…":t,_m=t=>Array.isArray(t)?t.map(e=>nt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function jo(t,e){const n=t.payload||{},i=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const r=nt(n.why)||nt(n.reason);return n.accepted===!0?`Critic approved${r?`: ${an(r)}`:": the rerun reproduced the score"}`:n.accepted===!1?`Critic rejected${r?`: ${an(r)}`:": score didn't reproduce on rerun"}`:nt(n.text)}case"gate.checked":{const r=_m(n.reasons);if(n.pass===!1)return`Novelty gate blocked: ${r.length?an(r.join("; ")):"too close to an earlier idea"}`;const s=Array.isArray(n.prior_art)?n.prior_art.length:0;return n.pass===!0?`Novelty gate passed: the idea is new enough${s?` (checked against ${s} prior source${s===1?"":"s"})`:""}`:nt(n.text)}case"experiment.started":return`Testing: ${an(nt(n.description)||nt(n.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const r=zl(n.metric_value),s=nt(n.status).toLowerCase(),a=r==null?"":` ${i} ${Qr(r)}`,o=e.best==null?"":` (best ${Qr(e.best)})`;return/crash|error|fail|timeout/.test(s)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(s)&&!/not_/.test(s)?`Kept:${a||" result"} beats the previous best`:r==null&&s?`${/reject|invalid|block/.test(s)?"Rejected before scoring":"Not scored"}${nt(n.text)?`: ${an(nt(n.text))}`:""}`:s?`Discarded:${a} didn't beat the best${o}`:nt(n.text)}case"agent.assigned":{const r=nt(n.role);return r?`Conductor assigned ${r}${nt(n.rationale)?`: ${an(nt(n.rationale))}`:""}`:nt(n.text)}case"round.started":{const r=as(nt(n.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${r?` · ${r}`:""}${nt(n.rationale)?`: ${an(nt(n.rationale))}`:""}`}case"boredom.measured":{const r=zl(n.B),s=as(nt(n.regime)).label;return r==null?nt(n.text):`Boredom ${Math.round(r*100)}%${s?` · ${s}`:""}${r>.6?": repeating itself, ready to switch approach":r<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${an(nt(n.text))}`;case"question.asked":{const r=nt(n.kind);return`${r==="recall"?"Recalling memory":r==="search"||r==="exa"?"Searching the literature":"Asking"}: ${an(nt(n.text))}`}case"observation.received":return`Read: ${an(nt(n.text)||nt(n.summary))}`;case"message.sent":{const r=nt(n.to_agent_id)||nt(t.refs?.to_agent_id);return`${r?`To ${e.name(r)}`:"Message"}: ${an(nt(n.text))}`}case"study.registered":return`Pre-registered: ${an(nt(n.question)||nt(n.text))}`;case"study.result":return an(nt(n.text)||nt(n.headline));case"discovery.made":{const r=zl(n.metric_value);return`New best${r==null?"":`: ${i} ${Qr(r)}`}${nt(n.title)?` · ${an(nt(n.title),80)}`:""}`}default:return""}}function Ru(t,e,n,i,r){const s=(t?.events||[]).filter(f=>f.tick<=i&&f.agentId===e),a=s.filter(f=>f.type==="experiment.started"&&f.refs?.experiment_id).at(-1),o=s.filter(f=>f.type==="gate.checked").at(-1),l=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,c=a&&!l?oa(t,String(a.refs.experiment_id),i):null,u=c&&(t?.events||[]).filter(f=>f.tick<=i&&f.type==="verdict.issued"&&f.refs?.experiment_id===c.id).at(-1),d=[...s,...u&&u.agentId!==e?[u]:[]].sort((f,g)=>f.tick-g.tick).map(f=>({tick:f.tick,why:jo(f,r)})).filter(f=>f.why).slice(-6).reverse();return{activity:om(n),latest:s.at(-1)||null,blocked:l,experiment:c,sources:bu(t,i).filter(f=>f.agentId===e).slice(-3).reverse(),feed:d}}function vm(t,e,n){const i=e.esc,r=t.experiment,s=(g,v)=>v?`<div class="now-row"><b>${g}</b><div>${v}</div></div>`:"",a=t.latest?`${i(t.activity||"working")} · <span class="muted">${i(jo(t.latest,e)||t.latest.type)}</span>`:i(t.activity||"Not active yet"),o=r?`${i(r.idea?.text||r.description||"")}${r.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${r.idea.predictedDelta>0?"+":""}${Qr(r.idea.predictedDelta)}</span>`:""}${r.descriptor?.mechanism?` <span class="pill">${i(String(r.descriptor.mechanism).replaceAll("_"," "))}${r.descriptor.method?` / ${i(String(r.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",l=t.sources.map(g=>`<button class="chip" data-source="${i(g.id)}">${i(an(g.title,60))}</button>`).join(""),c=t.blocked?`<span class="pill bad">blocked</span> ${i(_m(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:r?.gate?`<span class="pill ${r.gate.pass?"ok":"bad"}">${r.gate.pass?"passed":r.gate.pass===!1?"blocked":"checked"}</span> ${i(r.gate.reasons.length?r.gate.reasons.join("; "):r.gate.pass?"The idea is new enough to try.":"")}`:r?'<span class="muted">Not checked yet</span>':"",u=r?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(r.verdict.verdict||"")&&!/not_/i.test(r.verdict.verdict||"")?"ok":"bad"}">${i(r.verdict.verdict||"verdict")}</span> ${i(r.verdict.why||"")}`:r?.result?'<span class="muted">Waiting for the critic</span>':"",h=n?.name.replaceAll("_"," ")||"score",d=n?.direction==="maximize"?"higher":"lower",f=r?.result?`<span class="pill">${i(r.result.status||"done")}</span> ${r.result.metric==null?"":`${i(h)} ${Qr(r.result.metric)}`}${e.best==null?"":` · best so far ${Qr(e.best)} (${d} is better)`}`:r?'<span class="muted">Still running</span>':"";return`<div class="now-card">${s("Doing",a)}${s("Idea",o)}${s("Read",l)}${s("Gate",c)}${s("Score",f)}${s("Critic",u)}${r?`<button class="inspect-link" data-experiment="${i(r.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${t.feed.map(g=>`<li><span>${g.tick}</span>${i(g.why)}</li>`).join("")}</ol>`:""}</div>`}const r1=t=>t&&/^https?:\/\//i.test(t)?t:null,ho=(t,e,n)=>r1(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),po=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,xm=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,Ds=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function s1(t,e,n){const i=e.esc,r=f=>`<p class="muted">${f}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${sA(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([f,g])=>`${f}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${po(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(f=>`<li>${i(f)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),l=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"—")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),c=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),h=`${u.length?`<div class="artifact-links">${u.map(([f,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(f)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${Ds("Idea",s+a,!!(t.idea||t.description))}${Ds("Gate",o,!!t.gate)}${Ds("Score",l,!!t.result)}${Ds("Critic",c,!!t.verdict)}${Ds("Artifacts",h,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${ym(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(f=>`<li><span>t${f.tick}</span> <b>${i(f.type)}</b> ${i(f.text)}</li>`).join("")}</ul></details>`}function a1(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${ho(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(bm(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(Mm(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>xm(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const es=t=>t==null?"—":t.toFixed(3),o1=t=>`rho ${es(t.rho)}, p ${Do(t.p)}, n ${t.n??"—"}`;function l1(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${es(t)}, observed rho ${es(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function c1(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function ym(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(h,d)=>h?`${n(h)}${d?` = <b>${n(d)}</b>`:""}`:"—",o=(r?.confirmed?sm({...r,direction:t.direction||void 0},rm(e.judging)).failures:[]).map(h=>`<span class="badge current-rule-failure">Fails current ${n(h)} rule</span>`).join(""),l=r?.halves.length?`<div class="halves">${r.halves.map((h,d)=>`<span>Half ${d+1}: rho ${es(h.rho)}, p ${Do(h.p)}, n ${h.n??"—"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',c=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(h=>`<li>${o1(h)} ${po(h.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",u=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([h,d])=>`<li>Judge ${n(h)} · laugh ${d.laugh??"—"} / think ${d.think??"—"}${d.reason?`: ${n(d.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(h=>`<li>${ho(e,h.url,h.title||h.url)}${h.snippet?`<p class="muted">${n(h.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(h=>`<li>${n(h)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head"><div class="study-badges">${c1(t,e)}${o}</div><span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?ho(e,i.url,bm(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"—")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${es(t.predictedRho)} → observed <b>${es(r?.rho??null)}</b>${r?` · p ${Do(r.p)} · n ${r.n??"—"}`:""}${l1(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?l:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${po(r.significant,"significant","not significant")} ${po(r.replicated,"replicated","not replicated")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${c}${u}<div class="chips">${t.experimentId?xm(e,t.experimentId):""}${t.citations.map(h=>`<span class="chip">${ho(e,h,Mm(h.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function u1(t,e){return t.length?`<div class="card-grid">${t.map(n=>ym(n,e)).join("")}</div>`:""}function Sm(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function bm(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function Mm(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function d1(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const f1={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function h1(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=fm(dm(r,e.id,i),e.family||""),a={name:t.agentName||(h=>h===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=Ru(n,e.id,e.activity||e.state,i,a),l=ep(e.boredom).level,c=o.experiment,u=o.blocked?jo(o.blocked,a):"";return{name:e.name,role:s||lm(e.role)||"Scientist",mood:{level:l,label:f1[l]||null,boredomPct:e.boredom==null?null:Xi(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:c?.idea?.text||c?.description||null,predicted:u?null:c?.idea?.predictedDelta??null}}function p1(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(Jr(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const mo=t=>typeof t=="number"&&Number.isFinite(t),Zf=t=>Math.max(0,Math.min(1,t));function m1(t,e,n){const i=s=>s.agent===e||s.agent===n||s.agentId===e,r=t.filter(s=>i(s)&&Qn(s.status,s.kind)!=="baseline"&&mo(s.value));return{confirmed:r.filter(s=>s.value===0).length,tested:r.length}}function g1(t){return`${t.confirmed} gate-confirmed / ${t.tested} tested`}function _1(t,e,n){const i=e.filter(r=>r.tick<=n);if(t==="conductor"){const r=i.filter(a=>a.type==="round.started").reduce((a,o)=>!a||o.tick>=a.tick?o:a,void 0),s=r?.payload?.regime;return typeof s=="string"?`Conductor · assigning ${s}`:"Conductor · awaiting assignment"}if(t==="critic"){const r=i.filter(s=>s.type==="verdict.issued").length;return`Critic · ${r} review${r===1?"":"s"}`}return""}function v1(t){return t==null?"best —":`best ${Jr(t)}`}function x1(t,e,n,i,r,s){const a=v=>v.agent===e||v.agent===n||v.agentId===e,o=t.filter(v=>a(v)&&Qn(v.status,v.kind)!=="baseline").slice().sort((v,m)=>(v.tick??0)-(m.tick??0)),l=o.map(v=>v.value).filter(mo),c=i.name==="replicated_findings"?"maximize":i.direction,u=l.length?c==="maximize"?Math.max(...l):Math.min(...l):null,h=t.filter(v=>Qn(v.status,v.kind)!=="baseline").map(v=>v.value).filter(mo),d=h.length?c==="maximize"?Math.min(...h):Math.max(...h):null;let f=null;if(u!=null&&r!=null){if(u===r)f=1;else if(s!=null){const v=r-s;f=v===0?0:Zf((u-s)/v)}else if(d!=null){const v=Math.abs(r-d);f=v===0?1:Zf(c==="maximize"?(u-d)/v:(d-u)/v)}}const g={kept:0,discarded:0,crashed:0};for(const v of o){const m=Qn(v.status,v.kind);m!=="baseline"&&g[m]++}return{best:u,progress:f,...g,spark:o.map(v=>v.value).filter(mo).slice(-12)}}function y1(t,e,n=1.96){if(!Number.isFinite(t)||!Number.isFinite(e)||e<=0||t<0||t>e)return null;const i=t/e,r=n*n,s=1+r/e,a=(i+r/(2*e))/s,o=n*Math.sqrt((i*(1-i)+r/(4*e))/e)/s;return{low:Math.max(0,a-o),high:Math.min(1,a+o)}}const pi=t=>typeof t=="number"&&Number.isFinite(t),Em=t=>typeof t=="string"&&t?t.slice(0,7):null;function S1(t,e=String){return t==null?"":t===0?"no change":`${t>0?"improved by":"worsened by"} ${e(Math.abs(t))}`}function qf(t,e){const n=pi(t?.score)?t.score:null,i=n==null?null:n*e,r=i!=null&&Math.abs(i-Math.round(i))<=1e-6?Math.round(i):null;return{score:n,k:r,fraction:r==null?null:`${r}/${e}`,wilson:r==null?null:y1(r,e),loss:pi(t?.loss)?t.loss:null,commit:Em(t?.commit)}}function la(t,e){return t?t.events.some(n=>n.type==="run.finished"&&n.tick<=e)?!0:["finished","completed","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks:!1}function b1(t,e){if(!t)return null;const{manifest:n}=t,i=pa(t.frames,e)?.snapshot,r=i?.results||[],s=n.metric?.direction==="maximize"||i?.metric.direction==="maximize"?"maximize":"minimize",a=n.metric?.label||i?.metric.name||n.metric?.name||"result",o=r.find(y=>Qn(String(y.status||""),String(y.kind||""))==="baseline"),l=r.filter(y=>Qn(String(y.status||""),String(y.kind||""))==="kept"),c=l.length?l.reduce((y,w)=>s==="maximize"?pi(w.value)&&(!pi(y.value)||w.value>y.value)?w:y:pi(w.value)&&(!pi(y.value)||w.value<y.value)?w:y):o,u=pi(o?.value)?o.value:null,h=pi(c?.value)?c.value:null,d=u==null||h==null?null:s==="maximize"?h-u:u-h,f={kept:0,discarded:0,crashed:0};for(const y of r){const w=Qn(String(y.status||""),String(y.kind||""));w!=="baseline"&&f[w]++}const g=ma(n,t)||"",v=n.held_out_test,m=v&&pi(v.n_items)?v.n_items:0,p=v&&m>0?{n:m,baseline:qf(v.baseline,m),best:qf(v.best,m),proxyNote:Ar(n,t)?g:v.proxy_note||g,referenceNote:v.reference_note||n.reference_note||""}:null;return{status:n.status==="stopped"?"stopped":"finished",metric:a,direction:s,baseline:u,best:h,delta:d,winner:l.length&&c?{commit:Em(c.commit),description:String(c.description||""),agent:String(c.agent||"")}:null,totals:f,heldOut:p,proxyNote:p?.proxyNote||g,referenceNote:p?.referenceNote||n.reference_note||""}}const gn=t=>t&&typeof t=="object"?t:{},go=t=>typeof t=="number"&&Number.isFinite(t),Jo=t=>Array.isArray(t)?t.map(gn):t&&typeof t=="object"?Object.values(t).map(gn):[],Yf=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],_n=t=>typeof t=="string"?t:"",Jt=t=>go(t)?t:null,Hi=t=>_n(t.id||t.study_id||t.studyId),Cu=t=>_n(t.refs?.study_id||t.refs?.studyId||t.payload?.study_id||t.payload?.studyId);function Kf(t){const e=gn(t);return(Array.isArray(t)?t.map(gn):Object.entries(e).map(([i,r])=>({id:i,...gn(r)}))).map(i=>({id:_n(i.id)||"judge",model:_n(i.model),laugh:Jt(i.laugh),think:Jt(i.think),reason:_n(i.reason)}))}const M1=["award.issued","study.result","study.replicated","study.completed"],jf=t=>["available","rejected","score","scores","judges","verdicts","prior_work","priorWork","prior_work_available"].some(e=>t[e]!=null);function E1(t){const e=gn(t.payload),n=gn(e.committee??e.award);return jf(n)?n:jf(e)?e:null}function w1(t,e,n,i){const r=e.filter(m=>M1.includes(m.type)&&Cu(m)===Hi(t)).map(m=>({event:m,payload:E1(m)})).filter(m=>m.payload!==null),s=r.filter(m=>m.event.tick<=n).sort((m,p)=>m.event.tick-p.event.tick).at(-1);if(!s&&(r.length||!i))return null;const a=gn(t.graded),o=[t.committee,a.committee,gn(t.result).committee].map(gn).find(m=>Object.keys(m).length>0),l=gn(s?.payload??o),c=Yf(a.scores).map(m=>{const p=gn(m);return Jt(p.score??p.value??m)}).filter(go);if(!Object.keys(l).length&&(a.available!=null||a.rejected!=null||a.scores!=null||a.verdicts!=null||a.score!=null||a.prior_work!=null)&&Object.assign(l,{available:a.available,rejected:a.rejected,scores:a.scores,verdicts:a.verdicts,score:c.length?Math.min(...c):a.score,prior_work:a.prior_work}),!Object.keys(l).length)return null;if(l.available===!1)return{score:null,rejected:l.rejected===!0,judges:Kf(l.judges??l.verdicts),priorWork:null};const u=Kf(l.judges??l.verdicts??l.per_judge),h=u.map(m=>m.laugh==null||m.think==null?null:Math.min(m.laugh,m.think)/10).filter(go),d=Yf(l.scores).map(m=>{const p=gn(m);return Jt(p.score??p.value??m)}).filter(go),f=Jt(l.score)??(d.length?Math.min(...d):null)??(h.length?Math.min(...h):null),g=Jo(l.prior_work??l.priorWork),v=g.map(m=>({url:_n(m.url),title:_n(m.title)||void 0})).filter(m=>m.url);return{score:f,rejected:l.rejected===!0,judges:u,priorWork:g.length||l.prior_work_available===!0?{count:g.length,links:v}:null}}function Us(t,e){const n=Hi(t),i=e.filter(a=>Cu(a)===n),r=i.filter(a=>a.type==="study.registered").sort((a,o)=>a.tick-o.tick)[0],s=i.filter(a=>["study.result","study.replicated","study.completed"].includes(a.type)).sort((a,o)=>a.tick-o.tick)[0];return r?.tick??Jt(t.registered_tick)??Jt(t.tick)??s?.tick??0}function T1(t,e){return e.filter(n=>Cu(n)===Hi(t)&&["study.result","study.replicated","study.completed"].includes(n.type)).sort((n,i)=>n.tick-i.tick)[0]?.tick??null}const A1=t=>{const e=gn(t.result),n=_n(t.status||e.status).toLowerCase();return t.confirmed===!0||t.replicated===!0||e.confirmed===!0||e.replicated===!0||n==="confirmed"||n==="replicated"||Jo(t.replications).some(i=>i.confirmed===!0||i.replicated===!0||["confirmed","replicated"].includes(_n(i.status).toLowerCase()))};function R1(t,e,n,i){const r=Jo(t).filter(c=>Us(c,e)<=n),s=r.filter(c=>{const u=T1(c,e);return u!=null&&u<=n&&A1(c)}),a=s.map(c=>({study:c,committee:w1(c,e,n,i)})).filter(c=>c.study.rejected!==!0&&!c.committee?.rejected),o=a.filter(c=>c.committee?.score!=null);if(o.length){const c=o.sort((u,h)=>h.committee.score-u.committee.score||(Jt(u.study.p)??1/0)-(Jt(h.study.p)??1/0)||Us(u.study,e)-Us(h.study,e)||Hi(u.study).localeCompare(Hi(h.study))).slice(0,3);return{status:"ranked",tested:r.length,confirmed:s.length,entries:c.map((u,h)=>Jf(u.study,u.committee,h+1))}}const l=a.sort((c,u)=>Us(c.study,e)-Us(u.study,e)||Hi(c.study).localeCompare(Hi(u.study)));return{status:l.length?"awaiting":"none",tested:r.length,confirmed:s.length,entries:l.map(c=>Jf(c.study,c.committee,null))}}function Jf(t,e,n){const i=Jo(t.halves);return{studyId:Hi(t),headline:_n(t.headline)||_n(t.question),hypothesis:_n(t.hypothesis)||_n(t.mechanism),agentId:_n(t.agent_id),tick:Jt(t.tick)??0,p:Jt(t.p),rho:Jt(t.rho),n:Jt(t.n),halves:i.map(r=>({rho:Jt(r.rho),n:Jt(r.n),p:Jt(r.p)})),rank:n,score:e?.score??null,unscored:e?.score==null,committee:e}}function C1(t,e){const n=ma(t.manifest,t);return n?`<p class="metric-description">${e(n)}</p>`:""}const Pn=t=>typeof t=="string"?t:"",wm=(t,e)=>t.events.filter(n=>n.tick<=e);function P1(t,e=6){const n=new Map;for(const r of t){const s=n.get(r.round)||[];s.push(r),n.set(r.round,s)}const i=Math.max(1,Math.floor(e));return[...n].sort(([r],[s])=>r-s).map(([r,s])=>(s.sort((a,o)=>a.tick-o.tick),{round:r,visible:s.slice(0,i),hidden:s.slice(i)}))}function I1(t,e,n){if(!t.length)return 0;let i=n==null?-1:t.findIndex(o=>o.round===n);i<0&&(i=t.findIndex(o=>e>=o.startTick&&e<=o.endTick)),i<0&&(i=e<t[0].startTick?0:t.length-1);const r=t[i],s=r.endTick-r.startTick,a=s>0?(e-r.startTick)/s:e>=r.endTick?1:0;return i+Math.max(0,Math.min(1,a))}function L1(t){if(t.type==="hypothesis.proposed")return"idea";if(t.type==="llm.called"){const e=Pn(t.payload?.role).toLowerCase();return e.includes("scout")||e.includes("search")?"scout":e.includes("memory")?"memory":"idea"}return t.type==="verdict.issued"?t.payload?.vetoed===!0?"veto":"critic":t.type==="study.replicated"?"critic":t.type==="question.asked"&&t.payload?.kind==="search"||t.type==="agent.assigned"&&t.payload?.scout===!0?"scout":t.type==="question.asked"&&t.payload?.kind==="recall"||t.type==="observation.received"&&t.payload?.kind==="memories"?"memory":t.type==="boredom.measured"||t.type==="round.started"&&["BOREDOM_SNAP","PARADIGM_BREAKOUT"].includes(Pn(t.payload?.regime))?"boredom":t.type==="experiment.finished"?t.payload?.status==="keep"?"keep":"evaluation":t.type==="discovery.made"?"keep":t.type==="gate.checked"&&(t.payload?.pass??t.payload?.passed)===!1?"gate":t.type==="experiment.started"&&t.payload?.kind!=="baseline"?"idea":null}function N1(t,e){if(!t)return{rounds:[],lanes:[],roundCloses:[],roundSpans:[]};const n=new Map;let i=0;for(const d of t.events)d.type==="round.started"&&(i=Number(d.round||d.payload?.round)||i+1),n.set(d,Number(d.round||d.payload?.round)||i);const r=wm(t,e),s=new Map;let a=0;const o=new Map,l=new Set;for(const d of r)d.type==="round.started"&&(a=Number(d.round||d.payload?.round)||a+1,l.add(a)),s.set(d,Number(d.round||d.payload?.round)||a);for(const d of r){const f=L1(d);if(!f)continue;const g=Pn(d.agentId||d.payload?.agent_id||d.refs?.agent_id);if(!g)continue;const v=s.get(d)||1;l.add(v);const m=t.manifest.agents?.find(S=>S.agent_id===g)?.display_name||g,p=o.get(g)||{id:g,name:m,marks:[]},y=Pn(d.refs?.event_id)||`${d.type}:${d.tick}`,w=f==="veto"?"Veto":f==="keep"?"New best":f==="gate"?"Gate blocked":f==="scout"?"Search":f==="memory"?"Memory recall":f==="boredom"?"Boredom shift":f==="critic"?"Critic review":f==="idea"?"Idea":"Evaluation";p.marks.push({tick:d.tick,round:v,kind:f,label:w,why:Pn(d.message||d.payload?.why||d.payload?.reason),eventId:y}),o.set(g,p)}const c=[...l].flatMap(d=>{const f=t.events.filter(p=>p.type==="experiment.finished"&&n.get(p)===d),g=t.events.find(p=>["round.closed","round.finished","round.completed"].includes(p.type)&&n.get(p)===d),v=t.events.find(p=>p.type==="round.started"&&(n.get(p)||0)>d),m=g?.tick??f.at(-1)?.tick??v?.tick;return m!=null&&m<=e?[{round:d,tick:m}]:[]}),u=[...l].sort((d,f)=>d-f),h=u.map((d,f)=>{const g=t.events.find(S=>S.type==="round.started"&&n.get(S)===d),v=t.events.filter(S=>n.get(S)===d),m=g?.tick??v[0]?.tick??0,p=t.events.find(S=>["round.closed","round.finished","round.completed"].includes(S.type)&&n.get(S)===d),y=t.events.filter(S=>S.type==="experiment.finished"&&n.get(S)===d).at(-1),w=u[f+1]==null?void 0:t.events.find(S=>S.type==="round.started"&&n.get(S)===u[f+1]);return{round:d,startTick:m,endTick:p?.tick??y?.tick??w?.tick??t.manifest.totalTicks}});return{rounds:u,lanes:[...o.values()],roundCloses:c,roundSpans:h}}function D1(t,e){if(!t)return{};const n=wm(t,e);let i=0;if(n.some(g=>["run.finished","run.stopped"].includes(g.type))||["finished","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks)return Object.fromEntries((t.manifest.agents||[]).map(g=>[g.agent_id,"idle"]));for(const g of n)g.type==="round.started"&&(i=Number(g.round||g.payload?.round)||i+1);const s=n.filter(g=>(Number(g.round||g.payload?.round)||i)===i),a=new Set(s.filter(g=>g.type==="agent.assigned").map(g=>Pn(g.agentId||g.payload?.agent_id)).filter(Boolean)),o=s.filter(g=>["llm.called","hypothesis.proposed"].includes(g.type)&&Pn(g.agentId||g.payload?.agent_id)),l=s.filter(g=>g.type==="agent.assigned"&&Pn(g.agentId||g.payload?.agent_id)),c=o.at(-1),u=l.at(-1),h=c&&(!u||c.tick>=u.tick)?Pn(c.agentId||c.payload?.agent_id):"",d=u&&(!c||u.tick>c.tick)?Pn(u.agentId||u.payload?.agent_id):"",f={};for(const g of t.manifest.agents||[])f[g.agent_id]="idle";for(const g of a){const v=o.some(p=>Pn(p.agentId||p.payload?.agent_id)===g),m=s.some(p=>p.type==="experiment.finished"&&Pn(p.agentId||p.payload?.agent_id)===g);f[g]=g===d?"waiting":g===h&&!m?"active":v||m?"done":"waiting"}if(n.some(g=>["round.closed","round.finished","round.completed"].includes(g.type)&&(Number(g.round||g.payload?.round)||i)===i)||n.some(g=>g.type==="round.started"&&(Number(g.round||g.payload?.round)||i)>i))for(const g of a)f[g]="done";return f}document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target.closest?.("[data-orch-tick]");e&&(t.preventDefault(),e.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});const se=t=>document.getElementById(t),Uo=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),_e=t=>Uo(ua(String(t??""))),ca=se("console"),It=se("conversation"),Tm=se("guide"),gr=se("inspector"),ts=se("results-dialog");let qe,At,Vi,ce=null,tt=null,Am=[],Ae=0,Tt=!1,Qt=!1,Rm=1,_r=null,Pu="",fi="",Lt="",vi=!1,Tn=!1,zi="",ii="",Qf=0,Oo=!1,Ys=!1,eh=0,bi="",Fo=!1,bn=0,mi=0,Bs=!1,Qa={x:0,y:0},fr=null,th,nh,vr=0,Cm=new Map;const ko=RS();function ua(t){return mA(t,Cm)}function Pm(){const t=wu(ce?.manifest,ce||void 0),e=se("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${_e(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${_e(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}Pm();function U1(t){Cm=new Map(Object.entries(t.manifest.aliasMap||{}))}let Im=new Map,_o=[];const mn=new Set;function Iu(t){return HA(t,ce?.manifest.agents?.find(e=>e.agent_id===t.id))}function Lm(t){const e=Iu(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${_e(e.initial)}</span>`}function Nm(t){const e=Iu(t),n=ce&&!e.staff?fm(dm(ce.events,t.id,Ae),e.familyLabel):"";return[e.familyLabel,e.staff?"":n||(t.role!==t.type?lm(t.role):""),t.standby?"standing by":om(t.activity||t.state)].filter(Boolean).map(i=>Uo(i)).join(" · ")}function O1(t){if(Iu(t).staff)return"";const e=t.boredom==null?null:Xi(t.boredom),n=as(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${_e(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Wo(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}">${_e(n.label)}</em>`:""}</span>`}function F1(t){const e=t.boredom==null?null:Xi(t.boredom);return`<span class="strip-meter" role="meter" aria-label="${_e(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":Wo(e)}"></i></span>`}function k1(){const t=qA(ce?.manifest.agents||[]);se("whos-who").hidden=!t.length,se("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${Uo(e.title)}<small>${_e(e.names.join(", "))}</small></dt><dd>${Uo(e.does)}</dd>`).join("")}</dl>`:""}function $s(){return ce?.manifest.live?"Published":"Recorded"}function Qo(){return hm(ce?.manifest,Ae,Tt)}function ih(t,e){const n=gs(t.agentId,"");if(t.kind==="regime"){Nu(`${t.title}${n?` · ${n}`:""} — ${t.detail}`);return}const i=se("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${_e(t.title)}</strong><p>${_e([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(nh),nh=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function Lu(){if(ce){if(Ae>vr){const t=Jp(ce.events,vr,Ae,ce.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?ih(e.at(-1),e.length-1):t.length&&ih(t.at(-1),0)}vr=Ae}}function ri(){return gm(tt?.agents||[],Ae,Im)}function Nu(t){se("toast").textContent=t,se("toast").hidden=!1,clearTimeout(th),th=setTimeout(()=>se("toast").hidden=!0,4e3)}function Hn(){document.exitPointerLock?.(),mn.clear()}function Cn(){return document.querySelector("dialog[open]")!==null||_r!==null}function Rr(){_r&&(se(_r).hidden=!0),_r=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false"))}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=_r!==e;Hn(),Rr(),n&&(_r=e,se(e).hidden=!1,t.setAttribute("aria-expanded","true"),e==="orchestration-drawer"&&Um())};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=Rr;function ga(t){if(Qt=t,Lt="",vi=!1,Tn=!1,zi="",ii="",Hn(),qe.setOverview?.(!t),se("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){Tt=!1,qe.camera.position.set(0,1.69,9.5);const e=new $n().setFromQuaternion(qe.camera.quaternion,"YXZ");bn=e.y,mi=e.x}else{const e=qe.camera.quaternion.clone();Vi.reset(),qe.camera.quaternion.copy(e),Vi.syncFromCamera()}wi(),Dm()}function wi(){if(ce){const r=ce.manifest,s=dA(r),a=Tu(r);se("overview-eyebrow").textContent=s.eyebrow,se("run-callout").textContent=s.callout,se("replay-kicker").textContent=s.kicker,se("connection").textContent=r.sample===!1?a.status==="live"&&!Qo()?"LIVE SWARM · VIEWING THE PAST":vA({...r,stale:a.status==="stale"}):r.description?.includes("mock")?"RECORDED SAMPLE · MOCK PRIOR-ART":"RECORDED REPLAY",se("open-results").textContent=Ar(r,ce)?"Podium":"Results",z1()}se("open-results").hidden=!ce||!(Fo||la(ce,Ae));const t=JA(ce?.manifest,Ae,Tt,ce?.events||[]);se("go-live").hidden=t.hidden,se("go-live").textContent=t.label,se("go-live").classList.toggle("at-edge",t.atEdge),se("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),se("play").textContent=Tt?"Ⅱ Pause":"▶ Play",se("play").setAttribute("aria-label",Tt?"Pause":"Play"),se("camera-mode").textContent=Qt?"Lab view ↗":"Walk inside ↗",se("camera-mode").disabled=!ce||Tt,se("timeline").value=String(Ae),se("tick-label").textContent=`Tick ${Math.floor(Ae)} / ${ce?.manifest.totalTicks||0}`,se("timeline").setAttribute("aria-valuetext",`Tick ${Math.floor(Ae)} of ${ce?.manifest.totalTicks||0}`);const e=ce&&pa(ce.events,Ae),n=se("activity-caption"),i=e?.refs?.experiment_id;n.textContent=e?ua(XA({...e,message:jo(e,da())||e.message},gs(e.agentId,""))):"The run begins here",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function z1(){if(!ce)return;const t=ce.manifest,e=Tu(t),n=as(tt?.regime),i=t.time?.rounds||tt?.config.rounds||0,r=MA(t),s=ma(t,ce),a=nm(t.metric||tt?.metric),o=Ar(t,ce)?a.replace(/\breplication\b/gi,"split-half consistency").replace(/\breplicated\b/gi,"split-half consistent"):a;se("run-meta").innerHTML=[`<span class="status-chip" data-status="${e.status}" title="${_e(e.detail)}">${_e(e.label)}</span>`,`<span class="meta-task">${_e(tm(t))}</span>`,o?`<span>${_e(o)}</span>`:"",s?`<span class="proxy-chip" title="Benchmark caveat for this recording">Proxy: ${_e(s)}</span>`:"",tt?.round?`<span>Round ${tt.round}${i?` / ${i}`:""}</span>`:"",n.label&&t.sample===!1?`<span class="regime-chip" data-tone="${n.tone}" title="Swarm boredom ${Math.round(Xi(tt?.boredom||0))}%">${_e(n.label)} · ${Math.round(Xi(tt?.boredom||0))}%</span>`:"",e.status==="stale"?`<span class="warn-chip">${_e(e.detail)}</span>`:"",r?`<span class="warn-chip">${_e(r)}</span>`:""].filter(Boolean).join("")}function Ei(t){ce&&(Ae=Math.max(0,Math.min(ce.manifest.totalTicks,t)),tt=pa(ce.frames,Ae)?.snapshot||null,wi(),Du(),ca.open&&Bu(),It.open&&$u(),gr.open&&$m(),ts.open&&Gc(),!Fo&&la(ce,Ae)&&(Fo=!0,Gc(),ts.open||ts.showModal()))}function Du(){se("agent-count").textContent=`${ri().length} AGENTS`,se("agent-list").innerHTML=ZA(tt?.agents||[],ri()).map(t=>`<button class="agent-row" data-agent="${_e(t.id)}"${t.standby?' disabled data-standby="true"':""}>${Lm(t)}<span><strong>${_e(t.name)}</strong><small>${Nm(t)}</small>${O1(t)}</span><i></i></button>`).join("")||'<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>',se("run-label").textContent=tt?`ROUND ${tt.round}${tt.config.rounds?` / ${tt.config.rounds}`:""} · BEST ${tt.metric.name.replaceAll("_"," ")} ${tt.value==null?"—":tt.value.toFixed(4)} · ${nm(tt.metric).split(" ").slice(-3).join(" ")}`:"Waiting for the first events from the artificial scientist swarm",Dm(),_r==="orchestration-drawer"&&Um()}function Dm(){const t=se("status-strip");if(!ce||!tt||Qt||document.body.classList.contains("prestart")){t.hidden=!0,t.innerHTML="";return}const e=ri().filter(d=>d.type!=="baseline"),n=tt.results,i=tt.metric,r=Ko(ce.manifest,ce),s=e.filter(d=>d.type!=="conductor"&&d.type!=="critic").length,a=n.filter(d=>Qn(d.status,d.kind)!=="baseline"&&typeof d.value=="number"&&Number.isFinite(d.value)),o=i.name==="replicated_findings"?"maximize":i.direction,l=a.length?o==="maximize"?Math.max(...a.map(d=>d.value)):Math.min(...a.map(d=>d.value)):tt.value,c=n.find(d=>Qn(d.status,d.kind)==="baseline"&&typeof d.value=="number")?.value??null;t.innerHTML=e.map(d=>{if(d.type==="conductor"||d.type==="critic"){const v=_1(d.type,ce.events,Ae);return`<button class="status-tile status-role" data-agent="${_e(d.id)}" title="${_e(d.name)}" aria-label="Focus ${_e(d.name)}: ${_e(v)}">${_e(v)}</button>`}const f=x1(n,d.id,d.name,i,l,c),g=r?g1(m1(n,d.id,d.name)):v1(f.best);return`<button class="status-tile" data-agent="${_e(d.id)}" aria-label="Focus ${_e(d.name)}: ${_e(g)}"><strong class="status-tile-name">${_e(d.name)}</strong>${F1(d)}<span class="tile-metric">${_e(g)}</span></button>`}).join("")+(s?`<span class="status-scroll-hint">${s} scientist${s===1?"":"s"} ›</span>`:""),t.hidden=!e.length;const u={active:"Active turn",waiting:"Waiting",done:"Done this round",idle:"Idle"},h=D1(ce,Ae);t.querySelectorAll(".status-tile[data-agent]:not(.status-role)").forEach(d=>{const f=h[d.dataset.agent||""];f&&f!=="idle"&&d.insertAdjacentHTML("beforeend",`<small class="turn-badge" data-turn="${f}">${u[f]}</small>`)}),Uu()}function Um(){const t=se("orchestration-content");if(!ce){t.innerHTML="<p>No run loaded.</p>";return}const e=N1(ce,Ae),n=860,i=40,r=30,s=r+e.lanes.length*i+12,a=158,o=n-a-24,l=o/Math.max(1,e.rounds.length),c=(m,p)=>a+I1(e.roundSpans,m,p)*l,u={idea:"#e4c986",critic:"#91b4d4",veto:"#e77872",scout:"#82c5ae",memory:"#b39bdb",boredom:"#dd9b59",evaluation:"#a8b6b7",keep:"#77bb69",gate:"#e77872"},h=e.lanes.map((m,p)=>{const y=r+p*i,w=P1(m.marks).map(S=>{const A=Math.max(0,e.rounds.indexOf(S.round)),T=a+A*l+4,_=a+(A+1)*l-4,b=S.visible.map($=>c($.tick,$.round));for(let $=1;$<b.length;$++)b[$]=Math.max(b[$],b[$-1]+8.5);if(b.length){const $=b.at(-1)-_;if($>0)for(let W=0;W<b.length;W++)b[W]-=$;const N=T-b[0];if(N>0)for(let W=0;W<b.length;W++)b[W]+=N}const z=S.visible.map(($,N)=>`<g class="orch-mark" role="button" tabindex="0" data-orch-tick="${$.tick}" data-orch-agent="${_e(m.id)}" aria-label="${_e($.label)} by ${_e(m.name)} at tick ${$.tick}"><title>${_e($.label)}${$.why?`: ${_e($.why)}`:""} · tick ${$.tick}</title><circle cx="${b[N]}" cy="${y}" r="${$.kind==="veto"?5:4}" fill="${u[$.kind]}" class="orch-dot ${$.kind}"/></g>`).join(""),I=S.hidden[0],F=I?Math.max(T+10,Math.min(_-10,c(I.tick,S.round))):0,B=I?`<g class="orch-overflow" role="button" tabindex="0" data-orch-tick="${I.tick}" data-orch-agent="${_e(m.id)}" aria-label="${S.hidden.length} more events in round ${S.round}; jump to ${_e(I.label)} at tick ${I.tick}"><title>${S.hidden.length} more events in round ${S.round}</title><rect x="${F-10}" y="${y+14}" width="20" height="14" rx="7"/><text x="${F}" y="${y+24}" text-anchor="middle">+${S.hidden.length}</text></g>`:"";return`${z}${B}`}).join("");return`<text x="8" y="${y+4}" class="orch-name">${_e(m.name)}</text><line x1="${a}" y1="${y}" x2="${n-12}" y2="${y}" class="orch-lane"/>${w}`}).join(""),d=e.roundCloses.filter(m=>m.tick>0).map(m=>`<line x1="${c(m.tick,m.round)}" y1="${r-20}" x2="${c(m.tick,m.round)}" y2="${s}" class="orch-close"><title>Round ${m.round} closed</title></line>`).join(""),f=e.rounds.map((m,p)=>`<text x="${a+(p+.5)*l}" y="13" class="orch-round">Round ${m}</text>`).join(""),g=`<line x1="${c(Ae)}" y1="${r-20}" x2="${c(Ae)}" y2="${s}" class="orch-playhead"/>`,v=[["idea","Idea"],["scout","Search"],["memory","Memory"],["boredom","Boredom shift"],["critic","Review"],["veto","Veto"],["keep","Kept"]].map(([m,p])=>`<span><i style="--mark:${u[m]}"></i>${p}</span>`).join("");t.innerHTML=e.lanes.length?`<div class="orchestration-scroll"><svg class="orchestration-svg" viewBox="0 0 ${n} ${s}" role="img" aria-label="Orchestration lanes through tick ${Math.floor(Ae)}">${f}${d}${h}${g}</svg></div><div class="orchestration-legend">${v}</div><p class="orchestration-hint">Select a mark to jump to that event and focus its scientist.</p>`:"<p>No orchestration events by this moment.</p>"}function Gc(){if(!ce){se("results-content").innerHTML="<p>No results available.</p>";return}const t=am.results,e=wu(ce.manifest,ce),n=`<div class="results-provenance" data-tone="${e.tone}"><strong>${_e(e.label)}</strong>${e.chips.map(c=>`<span>${_e(c)}</span>`).join("")}</div>`;if(Ar(ce.manifest,ce)){const c=la(ce,Ae)||Ae>=ce.manifest.totalTicks||ce.events.some(p=>["run.finished","run.stopped"].includes(p.type)&&p.tick<=Ae),u=Au(ce,Ae),h=R1(ce.entities?.studies,ce.events,Ae,c),d=u.awards.length?`<p class="podium-award-count">${_e(t.awardCount.replace("{N}",String(u.awards.length)))}</p>`:Ko(ce.manifest,ce)?`<p class="podium-empty">${_e(t.noAwards)}${Eu(ce.manifest,ce)?_e(t.creditErrorSuffix):""}</p>`:`<p class="podium-empty">${_e(kl.committeePending)}</p>`,f=t.countLine.replace("{N}",String(u.registered)).replace("{M}",String(u.confirmed)).replace("{K}",String(u.underCurrentRules)),g=h.entries.map(p=>`<li>${p.rank?`<b>#${p.rank}</b> `:""}${_e(p.headline||p.studyId)}${p.unscored?" · Unscored":` · score ${_e(p.score)}`}${p.rho!=null?` · ρ ${p.rho.toFixed(3)}`:""}${p.p!=null?` · p ${Do(p.p)}`:""}</li>`).join("");se("results-title").textContent="IG NOBEL RESULTS";const v=h.status==="awaiting"&&g?`<details class="unscored-studies"><summary>${h.confirmed} confirmed studies, unscored</summary><ul class="podium-list">${g}</ul></details>`:g?`<ul class="podium-list">${g}</ul>`:"",m=C1(ce,_e);se("results-content").innerHTML=`${n}<h2>Ig Nobel podium</h2>${d}<p class="results-count">${_e(f)}</p>${m}${v}<details class="judging-details"><summary>${_e(kl.title)}</summary><ol>${kl.steps.map(p=>`<li>${_e(p)}</li>`).join("")}</ol></details>`;return}const i=b1(ce,Ae);if(!i){se("results-content").innerHTML="<p>No results available.</p>";return}const r=c=>c==null?"—":Jr(c),s=c=>c?`${c.low.toFixed(2)}–${c.high.toFixed(2)}`:"",a=c=>c.fraction||r(c.score??c.loss),o=i.heldOut?`<section class="held-out"><h3>Held-out test</h3><p>Baseline ${a(i.heldOut.baseline)} → best ${a(i.heldOut.best)}</p>${i.heldOut.best.wilson?`<p>95% Wilson CI: ${s(i.heldOut.best.wilson)} (baseline ${s(i.heldOut.baseline.wilson)})</p>`:""}${i.heldOut.proxyNote?`<p>${_e(i.heldOut.proxyNote)}</p>`:""}${i.heldOut.referenceNote?`<p>${_e(i.heldOut.referenceNote)}</p>`:""}</section>`:'<p class="no-held-out">no held-out split for this task</p>',l=i.delta==null?"":` · ${S1(i.delta,r)}`;se("results-title").textContent=`RUN RESULTS · ${i.status.toUpperCase()}`,se("results-content").innerHTML=`${n}<h2>${_e(ce.manifest.title)}</h2><p class="result-metric">${_e(i.metric)} · ${i.direction==="maximize"?"higher is better":"lower is better"}</p><p class="result-baseline">Baseline ${r(i.baseline)} → best dev result ${r(i.best)}${l}</p>${i.winner?.commit?`<section class="result-winner"><h3>Winning change</h3><p><code>${_e(i.winner.commit)}</code> · ${_e(i.winner.agent)}</p><p class="result-winner-description">${_e(i.winner.description)}</p></section>`:"<p>Baseline is the best result so far.</p>"}${o}<p class="result-totals">Kept ${i.totals.kept} · discarded ${i.totals.discarded} · crashed ${i.totals.crashed}</p>${i.proxyNote&&!i.heldOut?.proxyNote?`<p class="proxy-note">${_e(i.proxyNote)}</p>`:""}${i.referenceNote&&!i.heldOut?.referenceNote?`<p class="reference-note">${_e(i.referenceNote)}</p>`:""}`}function Uu(){const t=document.querySelector(".replay-bar"),e=se("status-strip");if(!t||!e)return;const n=t.getBoundingClientRect();e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.top=`${Math.max(0,n.top-52)}px`,e.style.bottom="auto",e.style.transform="none"}const rh=document.querySelector(".replay-bar");rh&&new ResizeObserver(Uu).observe(rh);window.addEventListener("resize",Uu);function B1(){const t=se("proximity");if(!Lt){t.hidden=!0;return}const e=ri().find(i=>i.id===Lt);if(!e){t.hidden=!0;return}const n=`${Lt}|${Math.floor(Ae)}|${Tn}`;if(n!==ii){const i=h1({agent:e,recording:ce,tick:Ae,metric:tt?.metric,best:tt?.value??null,agentName:gs});if(t.innerHTML=p1(i,Tn,_e),Tn){const r=Ru(ce,e.id,e.activity||e.state,Ae,da()),s=t.querySelector("[data-bubble-now]");s&&(s.innerHTML=vm(r,{...da(),esc:_e},tt?.metric))}ii=n}t.hidden=!1,$1()}function $1(){const t=se("proximity");if(t.hidden)return;const e=qe.agentPositions?.().find(l=>l.id===Lt);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new O(0,2.35,0));if(qe.camera.updateMatrixWorld(),n.clone().applyMatrix4(qe.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(qe.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12;t.style.visibility="visible",t.style.left=`${wn.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o))}px`,t.style.top=`${wn.clamp(s-a.height-22,o,Math.max(o,innerHeight-a.height-o))}px`}function Ou(t){Lt=t,vi=!0,Tn=!1,zi="",ii="",ku("scientist")}function H1(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function Fu(){if(Cn()){se("coach-mark").hidden=!0;return}const t=DS(H1());if(t==="scientist"&&innerHeight<=500&&!document.body.classList.contains("bar-collapsed")){bi="done",se("coach-mark").hidden=!0;return}if(!t){bi="done",se("coach-mark").hidden=!0;return}bi=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?"Tap a scientist":"Drag to scrub";se("coach-mark").dataset.coach=t,se("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,se("coach-mark").hidden=!1}function ku(t){bi===t&&(bi="",se("coach-mark").hidden=!0,Fu())}function zu(){Oo||(Oo=!0,document.body.classList.remove("prestart"),se("prestart").hidden=!0,se("intro").hidden=!0,ce&&(ce.manifest.live?Ei(ce.manifest.totalTicks):Ae>=ce.manifest.totalTicks&&Ei(0),Tt=!0,vr=Ae),wi(),Du(),At.domElement.focus(),ri().length&&Fu())}function Om(){Ys&&(Ys=!1,qe.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",Om,{capture:!0});window.addEventListener("keydown",Om,{capture:!0});se("start-swarm").onclick=zu;se("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&ku(bi)};function G1(){if(!ce||!tt)return"<p>No measurements yet.</p>";const t=ce.manifest.swarm==="ignobel"&&tt.metric.name==="replicated_findings";return e1(QA(tt.results,ce.frames,Ae,!t),tt.metric,Ae,_e)}function Fm(t){const e=[t.effectSize==null?"":`Effect ${_e(t.effectSize)}`,t.pValue==null?"":`p = ${_e(t.pValue)}`,t.reward==null?"":`Reward ${_e(t.reward)}`].filter(Boolean);return e.length?e.join("<br>"):_e(t.value??"—")}function Bu(){const t=tt;if(!t){se("console-content").innerHTML="<h2>No evidence yet.</h2>";return}const e=ce?ma(ce.manifest,ce):void 0;se("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(Ae)}. Every candidate is plotted: kept, discarded and crashed, with the confirmed best so far. Later results stay hidden until playback reaches them.</p>${e?`<p class="proxy-note"><b>About this benchmark:</b> ${_e(e)}</p>`:""}${G1()}<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th>MEASUREMENT</th></tr></thead><tbody>${t.results.slice().reverse().map(n=>`<tr${n.id?` class="inspectable" data-experiment="${_e(n.id)}" tabindex="0"`:""}><td>${n.round}</td><td>${_e(n.agent)}</td><td>${_e(n.status)}<br>${_e(n.description)}</td><td>${Fm(n)}</td></tr>`).join("")}</tbody></table></div><h3>${$s()} findings</h3>${t.findings.filter(n=>!/swarm_B|per_agent_B|boredom/i.test(n.message)).slice().reverse().map(n=>`<div class="finding"><b>${_e(ri().find(i=>i.id===n.agent)?.name||n.role)}</b><span>${_e(n.message)}</span></div>`).join("")||"<p>No findings yet.</p>"}${V1()}`}function V1(){const t=Mu(ce,Ae),e=bu(ce,Ae),n=jp(Bm(),Ae);return`${t.length?`<h3>Ig Nobel studies</h3>${u1(t,Ks())}`:""}${n.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${Sm(n,Ks())}</div>`:""}${e.length||W1("sources")?`<h3>Research sources</h3>${a1(e,Ks())}`:""}`}let ln="now";function da(){return{name:t=>gs(t),metric:tt?.metric,best:tt?.value??null}}function $u(){const t=ri().find(S=>S.id===Pu);if(!t){It.close();return}const e=ce?pA(ce.events,Ae).filter(S=>S.agentId===t.id||S.type==="message.sent"&&(S.payload?.to_agent_id===t.id||S.payload?.to_agent_ids?.includes(t.id))):[],n=ln==="idea"?/hypothesis|propos|question|idea/:ln==="result"?/experiment|observ|discover|reward|evaluat/:ln==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=um,r=e.filter(S=>n.test(S.type)&&i(S.message)).slice(-1),s=ln==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=ln==="result"&&t.lastResult?`<blockquote>${_e(t.lastResult.description)}<br>${_e(t.lastResult.status)} · ${Fm(t.lastResult)}<cite>${$s()} result · available by tick ${Math.floor(Ae)}</cite></blockquote>`:"",o=ln==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",l=t.boredom==null?null:Xi(t.boredom),c=ce?IS(ce.events,t.id,Ae):null,u=as(c?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),h=PS(c?.components||t.boredomDetail?.components),d=jp(Bm(),Ae,t.id),f=ln==="result"||ln==="doing"?t.lastResult?.id&&oa(ce,t.lastResult.id,Ae)?t.lastResult.id:t.focus?.experiment_id&&oa(ce,t.focus.experiment_id,Ae)?t.focus.experiment_id:null:null,g=f?`<button class="inspect-link" data-experiment="${_e(f)}">Inspect experiment →</button>`:"",v=!!ce?.manifest.live,m=Qo(),p=ce?pm(ce.events,Ae):0,y=v?m?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(Ae)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(Ae)}${p?` · ${p} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(Ae)}.`,w=S=>S.type==="message.sent"&&S.agentId!==t.id?`Message from ${_e(gs(S.agentId,"")||"a colleague")}`:`${v?"Published":"Recorded"} ${_e(cm(S.type).toLowerCase())}`;se("conversation-tag").textContent=v?m?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",se("conversation-content").innerHTML=`<div class="conversation-person">${Lm(t)}<div><h2>${_e(t.name)}</h2><p>${Nm(t)}</p></div></div><div class="conversation-questions">${[["now","Now"],["doing","What are you doing?"],["idea","Tell me about your idea"],["result","What did you find?"],["notes","Your research notes"],...d.length?[["talk","Conversation"]]:[]].map(([S,A])=>`<button data-topic="${S}" aria-pressed="${ln===S}">${A}</button>`).join("")}</div><div class="speech-bubble${ln==="talk"||ln==="now"?" history":""}">${ln==="now"?vm(Ru(ce,t.id,t.activity||t.state,Ae,da()),{...da(),esc:_e},tt?.metric):ln==="talk"?Sm(d,Ks(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${_e(o)}<cite>${$s()} proposal · available by tick ${Math.floor(Ae)}</cite></blockquote>`:r.length?r.map(S=>`<blockquote>${_e(S.message)}<cite>${w(S)} · tick ${S.tick}</cite></blockquote>`).join(""):s?`<blockquote>${_e(s)}<cite>${$s()} excerpt · through tick ${Math.floor(Ae)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${$s().toUpperCase()} BOREDOM</span><strong style="color:${l==null?"inherit":Wo(l)}">${l==null?"Not measured":Math.round(l)+"%"}</strong></div>${l==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${_e(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i style="left:${l}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||h.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${_e(u.label)}</span>`:""}${h.length?`<div class="boredom-components" aria-label="Boredom components">${h.map(S=>`<div><span>${_e(S.label)}</span><i style="--v:${S.value}%"></i><b>${S.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${y}</p>`}function km(t){if(Lt="",vi=!1,Tn=!1,ii="",Qo()||(Tt=!1),Pu=t,ln="now",Hn(),Rr(),wi(),$u(),ri().some(e=>e.id===t)){const e=qe.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new O(0,2.1,0));if(qe.camera.lookAt(n),Qt||Vi.focus(n),Qt){const i=new $n().setFromQuaternion(qe.camera.quaternion,"YXZ");bn=i.y,mi=i.x}}It.open||It.show(),zm(),It.querySelector("button")?.focus()}}function zm(){if(!It.open)return;const t=qe.agentPositions?.().find(c=>c.id===Pu);if(!t){It.style.visibility="hidden";return}const e=t.position.clone().add(new O(0,2.35,0));if(qe.camera.updateMatrixWorld(),e.clone().applyMatrix4(qe.camera.matrixWorldInverse).z>=0){It.style.visibility="hidden";return}It.style.visibility="visible",e.project(qe.camera);const i=(e.x+1)/2*innerWidth,r=(1-e.y)/2*innerHeight,s=It.getBoundingClientRect(),a=12,o=wn.clamp(i-s.width/2,a,Math.max(a,innerWidth-s.width-a)),l=wn.clamp(r-s.height-24,80,Math.max(80,innerHeight-s.height-190));It.style.left=`${o}px`,It.style.top=`${l}px`,It.style.setProperty("--speech-tail",`${wn.clamp(i-o,20,s.width-20)}px`)}se("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(ln=e,$u())};se("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&km(e)};function Bm(){return ce?.events||[]}function W1(t){const e=ce?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function gs(t,e){return t?(tt?.agents||ce?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||ce?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function Ks(){const t=ce?.manifest.id||"";return{esc:_e,name:gs,judging:ce?.manifest.judging,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return tp(n)},experimentLabel:e=>{const n=oa(ce,e,Ae);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let zo=null;function $m(){if(!zo)return;const t=oa(ce,zo,Ae);se("inspector-content").innerHTML=t?s1(t,Ks(),t.studyId?Mu(ce,Ae).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function X1(t){Hn(),Rr(),It.close();const e=bu(ce,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>Ae&&(Tt=!1,Ei(e)),Bu(),ca.open||ca.showModal();const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function Hm(t){Tt=!1,wi(),Hn(),zo=t,$m(),gr.open||gr.showModal(),gr.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-orch-tick]");if(n){t.preventDefault(),Tt=!1;const s=n.dataset.orchAgent,a=Number(n.dataset.orchTick);Ei(a);const o=qe.agentPositions?.().find(l=>l.id===s);if(o){const l=o.position.clone().add(new O(0,2.1,0));qe.camera.lookAt(l),Vi.focus(l)}Ou(s);return}const i=e.closest?.("[data-source]")?.dataset.source;if(i){X1(i);return}const r=e.closest?.("[data-experiment]")?.dataset.experiment;r&&(t.preventDefault(),Hm(r))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),Hm(e.dataset.experiment))});function Bo(){Lt&&(Hn(),Tn=!0,ii="")}function Gm(){Lt&&(zi=Lt),Lt="",vi=!1,Tn=!1,ii="",se("proximity").hidden=!0}se("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){Gm();return}if(n?.hasAttribute("data-bubble-more")){Lt&&km(Lt);return}if(n?.hasAttribute("data-bubble-expand")){Bo();return}Tn||Bo()});se("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");if(!e)return;const n=e.dataset.agent,i=qe.agentPositions?.().find(s=>s.id===n);if(!i)return;const r=i.position.clone().add(new O(0,2.1,0));qe.camera.lookAt(r),Vi.focus(r),Ou(n)});gr.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);se("close-inspector").onclick=()=>gr.close();gr.addEventListener("close",()=>{zo=null});se("close-results").onclick=()=>ts.close();se("open-results").onclick=()=>{Hn(),Gc(),ts.showModal()};se("close-conversation").onclick=()=>{It.close(),At.domElement.focus()};se("close-console").onclick=()=>ca.close();se("close-guide").onclick=()=>Tm.close();se("open-console").onclick=()=>{Hn(),Rr(),Bu(),ca.showModal()};se("open-guide").onclick=()=>{Hn(),Rr(),Tm.showModal()};se("play").onclick=()=>{ce&&(Tt||(It.close(),!ce.manifest.live&&Ae>=ce.manifest.totalTicks&&Ei(0),Qt&&ga(!1)),Tt=!Tt,wi())};se("camera-mode").onclick=()=>ga(!Qt);se("collapse-bar").onclick=()=>{const t=document.body.classList.toggle("bar-collapsed");se("collapse-bar").setAttribute("aria-expanded",String(!t)),se("collapse-bar").textContent=t?"▴":"▾",se("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel")};se("timeline").oninput=()=>{Tt=!1,Ei(Number(se("timeline").value)),vr=Ae,ku("scrub")};se("go-live").onclick=()=>{ce?.manifest.live&&(It.close(),Qt&&ga(!1),Tt=!0,Ei(ce.manifest.totalTicks),Lu())};se("pace").onchange=()=>{Rm=Number(se("pace").value)};function Z1(t){Im=mm(t),_o=t1(t,qe.bounds,qe.colliders)}function q1(){const t=pa(_o,Ae);if(!t)return new Map;if(Ae<=0)return t.positions;const e=_o[_o.indexOf(t)+1];if(!e)return t.positions;const n=(Ae-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function Vm(t,e=!1){const n=++Qf;e||(Tt=!1,Fo=!1,ts.close(),se("connection").textContent="LOADING RUN");try{const i=await yA(Kp,t,Am.find(l=>l.id===t)?.contentVersion||"2",ce);if(n!==Qf)return;const r=Ae,s=Qo();ce=i,Pm(),U1(i),i.frames.sort((l,c)=>l.tick-c.tick),i.events.sort((l,c)=>l.tick-c.tick),Z1(i),k1(),se("timeline").max=String(i.manifest.totalTicks),se("timeline").disabled=!1,se("play").disabled=!1,se("replay-title").textContent=ua(i.manifest.title),se("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),se("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),se("timeline-markers").innerHTML=i.events.filter(l=>/experiment.finished|discovery|study.completed|award/.test(l.type)).map(l=>`<i${/discovery|award/.test(l.type)?' class="best"':""} style="left:${l.tick/Math.max(1,i.manifest.totalTicks)*100}%"></i>`).join(""),se("run-picker").value=t,e||ga(!1);const a=e?jA(r,i.manifest,s):KA(i.manifest);e||(Tt=Oo,vr=a),Ei(a),e&&s?Lu():e||(vr=Ae),wi(),OS&&!e&&(sessionStorage.getItem("intro-seen")?zu():(sessionStorage.setItem("intro-seen","1"),Y1()));const o=new URL(location.href);o.searchParams.set("recording",t),o.searchParams.delete("run"),history.replaceState(null,"",o)}catch(i){se("connection").textContent="ARCHIVE UNAVAILABLE",Nu(i.message)}}async function Wm(){try{const t=uA(await Kp("/recordings"));if(Am=t,se("run-picker").innerHTML=TA(t,_e)||"<option>No artificial scientist swarm recordings available</option>",ce)se("run-picker").value=ce.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await Vm(t.find(n=>n.id===e)?.id||t[0].id)}else t.length||(se("connection").textContent="NO SWARM RECORDINGS",se("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){se("connection").textContent="ARCHIVE UNAVAILABLE",se("replay-title").textContent="Archive unavailable",Nu(t.message)}}se("refresh-runs").onclick=()=>Wm();se("run-picker").onchange=()=>Vm(se("run-picker").value);function Y1(){se("intro").innerHTML=CA(am,RA(ce),_e,Au(ce),ce?.manifest,ce),se("prestart").hidden=!0,se("intro").hidden=!1,se("intro-start").onclick=zu,se("intro-results-link").onclick=t=>{t.preventDefault();const e=se("intro-about"),n=se("intro-real-results");e.open=!0,n.hidden=!1,n.open=!0,n.scrollIntoView({behavior:ko?"auto":"smooth",block:"center"})},se("intro-qualifier").onclick=t=>{t.preventDefault();const e=se("intro-about"),n=se("intro-real-results");e.open=!0,n.hidden=!1,n.open=!0,n.scrollIntoView({behavior:ko?"auto":"smooth",block:"center"})}}se("refresh-runs").hidden=!0,document.body.classList.add("static-site");function sh(t,e){const i=qe.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||qe.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),mn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>mn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(Tn){Tn=!1,ii="";return}if(vi||Lt){Gm(),Hn();return}It.close(),Rr(),Hn()}if(!(Cn()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Lt){t.preventDefault(),Bo();return}t.code==="Enter"&&Lt&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),Bo()),["KeyW","KeyA","KeyS","KeyD",...Qt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&t.preventDefault(),mn.add(t.code)}});window.addEventListener("keyup",t=>mn.delete(t.code));window.addEventListener("blur",()=>{mn.clear(),Bs=!1,fr=null,Tt=!1,wi()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);n=s,Tt&&ce&&(Ae=hA(Ae,a,Rm,ce.manifest.totalTicks,ce.manifest.tickDurationMs),fA(ce.manifest,Ae)||(Tt=!1),Math.floor(Ae)!==i?(Ei(Ae),i=Math.floor(Ae),Lu()):wi());const o=qe.camera;if(!Qt&&!Cn()&&!It.open&&Vi.update(a,mn),Qt&&!Cn()){({yaw:bn,pitch:mi}=Qh(bn,mi,a,mn));const f=Number(mn.has("KeyW"))-Number(mn.has("KeyS")),g=Number(mn.has("KeyD"))-Number(mn.has("KeyA"));if(f||g){const v=(mn.has("ShiftLeft")||mn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(f,g),m=(-Math.sin(bn)*f+Math.cos(bn)*g)*v,p=(-Math.cos(bn)*f-Math.sin(bn)*g)*v;sh(o.position.x+m,o.position.z)||(o.position.x+=m),sh(o.position.x,o.position.z+p)||(o.position.z+=p)}o.rotation.set(mi,bn,0,"YXZ")}const l=q1(),c=ri(),u=i1(ce?.events||[],Ae,c,ua,100);if(qe.update(Ae*(ce?.manifest.tickDurationMs||700)/1e3,{progress:tt?.progress||0,boredom:0,running:Tt,replay:!0,finale:la(ce,Ae),reducedMotion:ko,agents:c.map(f=>({...f,boredom:f.boredom==null?null:Xi(f.boredom),regime:f.boredomSpectrum?.regime,state:l.get(f.id)?.atLab?"working":f.state,stationId:l.get(f.id)?.atTable?"culture":Hc({...f,state:"working",activity:"experimenting"}),discussionBrief:l.get(f.id)?.atTable?u.get(f.id)?.brief:void 0,discussionPeers:u.get(f.id)?.peers,ideaBrief:wS(ua(f.lastIdea||f.lastQuestion||f.lastObservation||"")),position:la(ce,Ae)?void 0:l.get(f.id)}))}),Oo&&!bi&&c.length&&!Cn()&&Fu(),se("coach-mark").hidden=Cn()||!bi||bi==="done",Ys){const f=(s-eh)/(ko?300:2200);qe.grow?.(Math.min(1,f)),f>=1&&(Ys=!1,document.body.classList.remove("world-growing"))}const h=fi;if(Qt&&!Cn()){o.getWorldDirection(r),r.y=0,r.normalize();const f=(qe.agentPositions?.()||[]).map(g=>{const v=g.position.clone().sub(o.position);v.y=0;const m=v.length();return{id:g.id,distance:m,facing:m?v.normalize().dot(r):1}});fi=d1(f,fi)}else fi="";zi&&fi!==zi&&(zi="");const d=vi?Lt:fi===zi?"":fi;d!==Lt&&(Lt=d,Tn=!1,ii=""),h!==fi&&!vi&&fi&&(zi=""),B1(),At.render(qe.scene,o),zm()};qe=US(),eh=performance.now(),Ys=!0,document.body.classList.add("world-growing"),qe.grow?.(0),At=new MS({antialias:!0,powerPreference:"high-performance"}),At.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),At.setSize(innerWidth,innerHeight),At.toneMapping=Wc,At.toneMappingExposure=qe.exposure??1,At.outputColorSpace=Ot,se("world").appendChild(At.domElement),At.domElement.tabIndex=0,At.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),qe.camera.rotation.order="YXZ",Vi=new ES(qe.camera),ga(!1),At.domElement.onclick=()=>{if(Qt&&!Cn()&&!It.open&&!vi)try{At.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},At.domElement.onpointerdown=s=>{Cn()||(Bs=!0,Qa={x:s.clientX,y:s.clientY},fr={x:s.clientX,y:s.clientY,canvas:s.target===At.domElement},Qt||At.domElement.setPointerCapture(s.pointerId))},At.domElement.onpointermove=s=>{if(!Bs||document.pointerLockElement||Cn())return;const a=s.clientX-Qa.x,o=s.clientY-Qa.y;Qt?{yaw:bn,pitch:mi}=Ac(bn,mi,a,o):Vi.dragBy(a,o),Qa={x:s.clientX,y:s.clientY}},At.domElement.onpointercancel=()=>{Bs=!1,fr=null},window.addEventListener("pointerup",s=>{if(fr?.canvas&&Math.hypot(s.clientX-fr.x,s.clientY-fr.y)<8&&s.target===At.domElement&&!Cn()){const a=qe.camera;a.updateMatrixWorld();let o=null;for(const l of qe.agentPositions?.()||[]){if(!ri().some(g=>g.id===l.id))continue;const c=l.position.clone().add(new O(0,2.35,0));if(c.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;c.project(a);const h=(c.x+1)*innerWidth/2,d=(1-c.y)*innerHeight/2,f=Math.hypot(s.clientX-h,s.clientY-d);f<48&&(!o||f<o.distance)&&(o={id:l.id,distance:f})}o?Ou(o.id):(Lt="",vi=!1,Tn=!1,ii="")}fr=null,Bs=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&Qt&&!Cn()&&({yaw:bn,pitch:mi}=Ac(bn,mi,s.movementX,s.movementY))});const e=()=>{qe.camera.aspect=innerWidth/innerHeight,qe.camera.updateProjectionMatrix(),At.setSize(innerWidth,innerHeight)};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new O;Du(),t(),se("loading").classList.add("loaded"),setTimeout(()=>se("loading").hidden=!0,380),Wm()}catch(t){console.error(t),se("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
