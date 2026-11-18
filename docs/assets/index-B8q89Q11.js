(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function p0(t,e,n=[]){if(!Number.isFinite(e)||e<=0)return[];const i=[],r=new Set;for(const s of n){const a=s.snapshot.round;a>0&&Number.isFinite(a)&&!r.has(a)&&(r.add(a),t.some(o=>o.type==="round.started"&&(o.round??o.payload?.round)===a)||i.push({tick:s.tick,type:"round.started",round:a}))}return[...t,...i].filter(s=>Number.isFinite(s.tick)&&s.tick>=0&&s.tick<=e&&/^(round.started|experiment.finished|discovery.made|study.completed|award(?:\..*)?)$/.test(s.type)).sort((s,a)=>s.tick-a.tick).map(s=>({percent:s.tick/e*100,best:/discovery|award/.test(s.type),label:`${s.type==="round.started"?`Round ${s.round??s.payload?.round??"?"} starts`:s.type==="experiment.finished"?"Experiment finished":s.type==="discovery.made"?"New best":s.type==="study.completed"?"Study completed":"Award"} · tick ${s.tick}`}))}const m0=[["now","Now","What is happening now?"],["doing","Current task","What are you doing?"],["idea","Core idea","Tell me about your idea"],["result","Findings","What did you find?"],["notes","Notes","Your research notes"],["talk","Dialogue","Recorded conversations with other scientists"]];function g0(t){return t?"Tap a scientist":"Click a scientist"}function _0(t,e,n,i,r,s){const a=t<e&&t<=750,o=12,l=Math.max(n+o,a?i.bottom+14:0),c=a?8:i.right+14;if(a)return{left:c,width:t-16,top:Math.max(l,e-o-s)};const u=t-o-r-32,f=r-32-c,d=u>=f,h=Math.min(380,Math.max(220,d?u:f),t-o-c);return{left:d?t-o-h:c,width:h,top:l}}const ku="187",v0=0,Hd=1,x0=2,Lo=1,y0=2,fa=3,sr=0,vn=1,zn=2,fs=0,va=1,Gd=2,Vd=3,Wd=4,b0=5,us=100,S0=101,M0=102,E0=103,w0=104,T0=200,A0=201,R0=202,C0=203,up=204,dp=205,P0=206,I0=207,L0=208,N0=209,D0=210,U0=211,k0=212,O0=213,F0=214,wc=0,Tc=1,Ac=2,Ta=3,Rc=4,Cc=5,Pc=6,Ic=7,fp=0,z0=1,B0=2,Ci=0,hp=1,pp=2,mp=3,Ou=4,gp=5,_p=6,vp=7,xp=300,ys=301,Aa=302,Ol=303,Fl=304,Ko=1e3,Ti=1001,Lc=1002,rn=1003,$0=1004,Ya=1005,Mn=1006,zl=1007,Ji=1008,In=1009,yp=1010,bp=1011,Ra=1012,Fu=1013,hi=1014,Jn=1015,pi=1016,zu=1017,Bu=1018,bs=1020,Sp=35902,Mp=35899,Ep=1021,wp=1022,ci=1023,ar=1026,Qi=1027,$u=1028,Hu=1029,Ur=1030,Gu=1031,Vu=1033,No=33776,Do=33777,Uo=33778,ko=33779,Nc=35840,Dc=35841,Uc=35842,kc=35843,Oc=36196,Fc=37492,zc=37496,Bc=37488,$c=37489,Jo=37490,Hc=37491,Gc=37808,Vc=37809,Wc=37810,Xc=37811,Zc=37812,qc=37813,jc=37814,Yc=37815,Kc=37816,Jc=37817,Qc=37818,eu=37819,tu=37820,nu=37821,iu=36492,ru=36494,su=36495,au=36283,ou=36284,Qo=36285,lu=36286,H0=3200,cu=0,G0=1,Yi="",Wt="srgb",el="srgb-linear",tl="linear",pt="srgb",Bl=7680,V0=519,W0=512,X0=513,Z0=514,Tp=515,q0=516,j0=517,Ap=518,Rp=519,Cp=35044,Xd="300 es",Qn=2e3,Ca=2001;function Y0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function nl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function K0(){const t=nl("canvas");return t.style.display="block",t}const Zd={};function il(...t){const e="THREE."+t.shift();console.log(e,...t)}function Pp(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ge(...t){t=Pp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=Pp(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function hs(...t){const e=t.join(" ");e in Zd||(Zd[e]=!0,Ge(...t))}function J0(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const Q0={[wc]:wc,[Ac]:Pc,[Rc]:Rc,[Ta]:Cc,[Tc]:Tc,[Pc]:Ac,[Ic]:Ic,[Cc]:Ta};class zr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let qd=1234567;const xa=Math.PI/180,Pa=180/Math.PI;function cr(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ln[t&255]+ln[t>>8&255]+ln[t>>16&255]+ln[t>>24&255]+"-"+ln[e&255]+ln[e>>8&255]+"-"+ln[e>>16&15|64]+ln[e>>24&255]+"-"+ln[n&63|128]+ln[n>>8&255]+"-"+ln[n>>16&255]+ln[n>>24&255]+ln[i&255]+ln[i>>8&255]+ln[i>>16&255]+ln[i>>24&255]).toLowerCase()}function Qe(t,e,n){return Math.max(e,Math.min(n,t))}function Wu(t,e){return(t%e+e)%e}function e_(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function t_(t,e,n){return t!==e?(n-t)/(e-t):0}function ya(t,e,n){return(1-n)*t+n*e}function n_(t,e,n,i){return ya(t,e,1-Math.exp(-n*i))}function i_(t,e=1){return e-Math.abs(Wu(t,e*2)-e)}function r_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function s_(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function a_(t,e){return t+Math.floor(Math.random()*(e-t+1))}function o_(t,e){return t+Math.random()*(e-t)}function l_(t){return t*(.5-Math.random())}function c_(t){t!==void 0&&(qd=t);let e=qd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function u_(t){return t*xa}function d_(t){return t*Pa}function f_(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function h_(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Ip(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function p_(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),u=a((e+i)/2),f=s((e-i)/2),d=a((e-i)/2),h=s((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(o*u,l*f,l*d,o*c);break;case"YZY":t.set(l*d,o*u,l*f,o*c);break;case"ZXZ":t.set(l*f,l*d,o*u,o*c);break;case"XZX":t.set(o*u,l*g,l*h,o*c);break;case"YXY":t.set(l*h,o*u,l*g,o*c);break;case"ZYZ":t.set(l*g,l*h,o*u,o*c);break;default:Ge("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ml(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Xu(t,e){if(e.constructor===Float32Array)return t;const n=Ml(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Zu(t,e){if(e.constructor===Float32Array)return t;const n=Ml(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const Et={DEG2RAD:xa,RAD2DEG:Pa,generateUUID:cr,clamp:Qe,euclideanModulo:Wu,mapLinear:e_,inverseLerp:t_,lerp:ya,damp:n_,pingpong:i_,smoothstep:r_,smootherstep:s_,randInt:a_,randFloat:o_,randFloatSpread:l_,seededRandom:c_,degToRad:u_,radToDeg:d_,isPowerOfTwo:f_,ceilPowerOfTwo:h_,floorPowerOfTwo:Ip,setQuaternionFromProperEuler:p_,normalize:Zu,denormalize:Xu},kd=class kd{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kd.prototype.isVector2=!0;let Xe=kd;class Ns{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3],d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(f!==_||l!==d||c!==h||u!==g){let p=l*d+c*h+u*g+f*_;p<0&&(d=-d,h=-h,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){const v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,l=l*m+d*o,c=c*m+h*o,u=u*m+g*o,f=f*m+_*o}else{l=l*m+d*o,c=c*m+h*o,u=u*m+g*o,f=f*m+_*o;const v=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=v,c*=v,u*=v,f*=v}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[n]=o*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-o*h,e[n+2]=c*g+u*h+o*d-l*f,e[n+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:Ge("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-r)*h}else if(i>o&&i>f){const h=2*Math.sqrt(1+i-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-i-f);this._w=(s-c)/h,this._x=(r+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-o);this._w=(a-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,n=Math.sin(n*c)/u,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Od=class Od{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),u=2*(o*n-s*r),f=2*(s*i-a*n);return this.x=n+l*c+a*f-o*u,this.y=i+l*u+o*c-s*f,this.z=r+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return $l.copy(this).projectOnVector(e),this.sub($l)}reflect(e){return this.sub($l.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Od.prototype.isVector3=!0;let D=Od;const $l=new D,jd=new Ns,Fd=class Fd{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],_=r[0],p=r[3],m=r[6],v=r[1],S=r[4],b=r[7],T=r[2],A=r[5],y=r[8];return s[0]=a*_+o*v+l*T,s[3]=a*p+o*S+l*A,s[6]=a*m+o*b+l*y,s[1]=c*_+u*v+f*T,s[4]=c*p+u*S+f*A,s[7]=c*m+u*b+f*y,s[2]=d*_+h*v+g*T,s[5]=d*p+h*S+g*A,s[8]=d*m+h*b+g*y,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return n*a*u-n*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(r*c-u*i)*_,e[2]=(o*i-r*a)*_,e[3]=d*_,e[4]=(u*n-r*l)*_,e[5]=(r*s-o*n)*_,e[6]=h*_,e[7]=(i*l-c*n)*_,e[8]=(a*n-i*s)*_,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return hs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Hl.makeScale(e,n)),this}rotate(e){return hs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Hl.makeRotation(-e)),this}translate(e,n){return hs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Hl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fd.prototype.isMatrix3=!0;let Ve=Fd;const Hl=new Ve,Yd=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kd=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function m_(){const t={enabled:!0,workingColorSpace:el,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(r.r=Pi(r.r),r.g=Pi(r.g),r.b=Pi(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(r.r=ps(r.r),r.g=ps(r.g),r.b=ps(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?tl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[el]:{primaries:e,whitePoint:i,transfer:tl,toXYZ:Yd,fromXYZ:Kd,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:pt,toXYZ:Yd,fromXYZ:Kd,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),t}const ct=m_();function Pi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Wr;class g_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Wr===void 0&&(Wr=nl("canvas")),Wr.width=e.width,Wr.height=e.height;const r=Wr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Wr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=nl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Pi(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Pi(n[i]/255)*255):n[i]=Pi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ge("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let __=0;class qu{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:__++}),this.uuid=cr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gl(r[a].image)):s.push(Gl(r[a]))}else s=Gl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?g_.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ge("Texture: Unable to serialize Texture."),{})}let v_=0;const Vl=new D;class hn extends zr{constructor(e=hn.DEFAULT_IMAGE,n=hn.DEFAULT_MAPPING,i=Ti,r=Ti,s=Mn,a=Ji,o=ci,l=In,c=hn.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:v_++}),this.uuid=cr(),this.name="",this.source=new qu(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Vl).x}get height(){return this.source.getSize(Vl).y}get depth(){return this.source.getSize(Vl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ge(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ko:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case Lc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ko:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case Lc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=xp;hn.DEFAULT_ANISOTROPY=1;const zd=class zd{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+h+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(c+1)/2,b=(h+1)/2,T=(m+1)/2,A=(u+d)/4,y=(f+_)/4,E=(g+p)/4;return S>b&&S>T?S<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(S),r=A/i,s=y/i):b>T?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=A/r,s=E/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=y/s,r=E/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-g)*(p-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(f-_)/v,this.z=(d-u)/v,this.w=Math.acos((c+h+m-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Qe(this.x,e.x,n.x),this.y=Qe(this.y,e.y,n.y),this.z=Qe(this.z,e.z,n.z),this.w=Qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Qe(this.x,e,n),this.y=Qe(this.y,e,n),this.z=Qe(this.z,e,n),this.w=Qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zd.prototype.isVector4=!0;let Pt=zd;class x_ extends zr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Pt(0,0,e,n),this.scissorTest=!1,this.viewport=new Pt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new hn({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new qu(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends x_{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Lp extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class y_ extends hn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=rn,this.minFilter=rn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Sl=class Sl{constructor(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,p)}set(e,n,i,r,s,a,o,l,c,u,f,d,h,g,_,p){const m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=f,m[14]=d,m[3]=h,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Sl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),a=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-_*c,n[9]=-o*l,n[2]=_-d*c,n[6]=g+h*c,n[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d+_*o,n[4]=g*o-h,n[8]=a*c,n[1]=a*f,n[5]=a*u,n[9]=-o,n[2]=h*o-g,n[6]=_+d*o,n[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;n[0]=d-_*o,n[4]=-a*f,n[8]=g+h*o,n[1]=h+g*o,n[5]=a*u,n[9]=_-d*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+_,n[1]=l*f,n[5]=_*c+d,n[9]=h*c-g,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=_-d*f,n[8]=g*f+h,n[1]=f,n[5]=a*u,n[9]=-o*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+_,n[5]=a*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=o*u,n[10]=_*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(b_,e,S_)}lookAt(e,n,i){const r=this.elements;return Rn.subVectors(e,n),Rn.lengthSq()===0&&(Rn.z=1),Rn.normalize(),Fi.crossVectors(i,Rn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Rn.x+=1e-4:Rn.z+=1e-4,Rn.normalize(),Fi.crossVectors(i,Rn)),Fi.normalize(),Ka.crossVectors(Rn,Fi),r[0]=Fi.x,r[4]=Ka.x,r[8]=Rn.x,r[1]=Fi.y,r[5]=Ka.y,r[9]=Rn.y,r[2]=Fi.z,r[6]=Ka.z,r[10]=Rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],_=i[6],p=i[10],m=i[14],v=i[3],S=i[7],b=i[11],T=i[15],A=r[0],y=r[4],E=r[8],k=r[12],I=r[1],R=r[5],H=r[9],B=r[13],C=r[2],W=r[6],X=r[10],G=r[14],ue=r[3],ne=r[7],oe=r[11],de=r[15];return s[0]=a*A+o*I+l*C+c*ue,s[4]=a*y+o*R+l*W+c*ne,s[8]=a*E+o*H+l*X+c*oe,s[12]=a*k+o*B+l*G+c*de,s[1]=u*A+f*I+d*C+h*ue,s[5]=u*y+f*R+d*W+h*ne,s[9]=u*E+f*H+d*X+h*oe,s[13]=u*k+f*B+d*G+h*de,s[2]=g*A+_*I+p*C+m*ue,s[6]=g*y+_*R+p*W+m*ne,s[10]=g*E+_*H+p*X+m*oe,s[14]=g*k+_*B+p*G+m*de,s[3]=v*A+S*I+b*C+T*ue,s[7]=v*y+S*R+b*W+T*ne,s[11]=v*E+S*H+b*X+T*oe,s[15]=v*k+S*B+b*G+T*de,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*h-c*d,S=o*h-c*f,b=o*d-l*f,T=a*h-c*u,A=a*d-l*u,y=a*f-o*u;return n*(_*v-p*S+m*b)-i*(g*v-p*T+m*A)+r*(g*S-_*T+m*y)-s*(g*b-_*A+p*y)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return n*(a*u-o*c)-i*(s*u-o*l)+r*(s*c-a*l)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=n*o-i*a,S=n*l-r*a,b=n*c-s*a,T=i*l-r*o,A=i*c-s*o,y=r*c-s*l,E=u*_-f*g,k=u*p-d*g,I=u*m-h*g,R=f*p-d*_,H=f*m-h*_,B=d*m-h*p,C=v*B-S*H+b*R+T*I-A*k+y*E;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/C;return e[0]=(o*B-l*H+c*R)*W,e[1]=(r*H-i*B-s*R)*W,e[2]=(_*y-p*A+m*T)*W,e[3]=(d*A-f*y-h*T)*W,e[4]=(l*I-a*B-c*k)*W,e[5]=(n*B-r*I+s*k)*W,e[6]=(p*b-g*y-m*S)*W,e[7]=(u*y-d*b+h*S)*W,e[8]=(a*H-o*I+c*E)*W,e[9]=(i*I-n*H-s*E)*W,e[10]=(g*A-_*b+m*v)*W,e[11]=(f*b-u*A-h*v)*W,e[12]=(o*k-a*R-l*E)*W,e[13]=(n*R-i*k+r*E)*W,e[14]=(_*S-g*T-p*v)*W,e[15]=(u*T-f*S+d*v)*W,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,p=a*f,m=o*f,v=l*c,S=l*u,b=l*f,T=i.x,A=i.y,y=i.z;return r[0]=(1-(_+m))*T,r[1]=(h+b)*T,r[2]=(g-S)*T,r[3]=0,r[4]=(h-b)*A,r[5]=(1-(d+m))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(g+S)*y,r[9]=(p-v)*y,r[10]=(1-(d+_))*y,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Xr.set(r[0],r[1],r[2]).length();const o=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),qn.copy(this);const c=1/a,u=1/o,f=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=u,qn.elements[5]*=u,qn.elements[6]*=u,qn.elements[8]*=f,qn.elements[9]*=f,qn.elements[10]*=f,n.setFromRotationMatrix(qn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=Qn,l=!1){const c=this.elements,u=2*s/(n-e),f=2*s/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===Qn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ca)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Qn,l=!1){const c=this.elements,u=2/(n-e),f=2/(i-r),d=-(n+e)/(n-e),h=-(i+r)/(i-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===Qn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ca)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Sl.prototype.isMatrix4=!0;let xt=Sl;const Xr=new D,qn=new xt,b_=new D(0,0,0),S_=new D(1,1,1),Fi=new D,Ka=new D,Rn=new D,Jd=new xt,Qd=new Ns;class Hn{constructor(e=0,n=0,i=0,r=Hn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Qe(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:Ge("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Jd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jd,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Qd.setFromEuler(this),this.setFromQuaternion(Qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Hn.DEFAULT_ORDER="XYZ";class Np{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let M_=0;const ef=new D,Zr=new Ns,xi=new xt,Ja=new D,Zs=new D,E_=new D,w_=new Ns,tf=new D(1,0,0),nf=new D(0,1,0),rf=new D(0,0,1),sf={type:"added"},T_={type:"removed"},qr={type:"childadded",child:null},Wl={type:"childremoved",child:null};class Qt extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=cr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new D,n=new Hn,i=new Ns,r=new D(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new Ve}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Np,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(tf,e)}rotateY(e){return this.rotateOnAxis(nf,e)}rotateZ(e){return this.rotateOnAxis(rf,e)}translateOnAxis(e,n){return ef.copy(e).applyQuaternion(this.quaternion),this.position.add(ef.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tf,e)}translateY(e){return this.translateOnAxis(nf,e)}translateZ(e){return this.translateOnAxis(rf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ja.copy(e):Ja.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(Zs,Ja,this.up):xi.lookAt(Ja,Zs,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(xi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sf),qr.child=e,this.dispatchEvent(qr),qr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(T_),Wl.child=e,this.dispatchEvent(Wl),Wl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sf),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,E_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,w_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Qt.DEFAULT_UP=new D(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Kn extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const A_={type:"move"};class Xl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=n.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(A_)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Kn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Dp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Qa={h:0,s:0,l:0};function Zl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=Wu(e,1),n=Qe(n,0,1),i=Qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Zl(a,s,e+1/3),this.g=Zl(a,s,e),this.b=Zl(a,s,e-1/3)}return ct.colorSpaceToWorking(this,r),this}setStyle(e,n=Wt){function i(s){s!==void 0&&parseFloat(s)<1&&Ge("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ge("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ge("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wt){const i=Dp[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ge("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=ps(e.r),this.g=ps(e.g),this.b=ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ct.workingToColorSpace(cn.copy(this),e),Math.round(Qe(cn.r*255,0,255))*65536+Math.round(Qe(cn.g*255,0,255))*256+Math.round(Qe(cn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.workingToColorSpace(cn.copy(this),n);const i=cn.r,r=cn.g,s=cn.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ct.workingColorSpace){return ct.workingToColorSpace(cn.copy(this),n),e.r=cn.r,e.g=cn.g,e.b=cn.b,e}getStyle(e=Wt){ct.workingToColorSpace(cn.copy(this),e);const n=cn.r,i=cn.g,r=cn.b;return e!==Wt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Qa);const i=ya(zi.h,Qa.h,n),r=ya(zi.s,Qa.s,n),s=ya(zi.l,Qa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const cn=new je;je.NAMES=Dp;class ju{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new je(e),this.near=n,this.far=i}clone(){return new ju(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class R_ extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Hn,this.environmentIntensity=1,this.environmentRotation=new Hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const jn=new D,yi=new D,ql=new D,bi=new D,jr=new D,Yr=new D,af=new D,jl=new D,Yl=new D,Kl=new D,Jl=new Pt,Ql=new Pt,ec=new Pt;class Bn{constructor(e=new D,n=new D,i=new D){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),jn.subVectors(e,n),r.cross(jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){jn.subVectors(r,n),yi.subVectors(i,n),ql.subVectors(e,n);const a=jn.dot(jn),o=jn.dot(yi),l=jn.dot(ql),c=yi.dot(yi),u=yi.dot(ql),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Jl.setScalar(0),Ql.setScalar(0),ec.setScalar(0),Jl.fromBufferAttribute(e,n),Ql.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Jl,s.x),a.addScaledVector(Ql,s.y),a.addScaledVector(ec,s.z),a}static isFrontFacing(e,n,i,r){return jn.subVectors(i,n),yi.subVectors(e,n),jn.cross(yi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jn.subVectors(this.c,this.b),yi.subVectors(this.a,this.b),jn.cross(yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Bn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Bn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;jr.subVectors(r,i),Yr.subVectors(s,i),jl.subVectors(e,i);const l=jr.dot(jl),c=Yr.dot(jl);if(l<=0&&c<=0)return n.copy(i);Yl.subVectors(e,r);const u=jr.dot(Yl),f=Yr.dot(Yl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0&&l-u>0)return a=l/(l-u),n.copy(i).addScaledVector(jr,a);Kl.subVectors(e,s);const h=jr.dot(Kl),g=Yr.dot(Kl);if(g>=0&&h<=g)return n.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),n.copy(i).addScaledVector(Yr,o);const p=u*g-h*f;if(p<=0&&f-u>=0&&h-g>=0)return af.subVectors(s,r),o=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(af,o);const m=1/(p+_+d);return a=_*m,o=d*m,n.copy(i).addScaledVector(jr,a).addScaledVector(Yr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Br{constructor(e=new D(1/0,1/0,1/0),n=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Yn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Yn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Yn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yn):Yn.fromBufferAttribute(s,a),Yn.applyMatrix4(e.matrixWorld),this.expandByPoint(Yn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),eo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),eo.copy(i.boundingBox)),eo.applyMatrix4(e.matrixWorld),this.union(eo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yn),Yn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qs),to.subVectors(this.max,qs),Kr.subVectors(e.a,qs),Jr.subVectors(e.b,qs),Qr.subVectors(e.c,qs),Bi.subVectors(Jr,Kr),$i.subVectors(Qr,Jr),_r.subVectors(Kr,Qr);let n=[0,-Bi.z,Bi.y,0,-$i.z,$i.y,0,-_r.z,_r.y,Bi.z,0,-Bi.x,$i.z,0,-$i.x,_r.z,0,-_r.x,-Bi.y,Bi.x,0,-$i.y,$i.x,0,-_r.y,_r.x,0];return!tc(n,Kr,Jr,Qr,to)||(n=[1,0,0,0,1,0,0,0,1],!tc(n,Kr,Jr,Qr,to))?!1:(no.crossVectors(Bi,$i),n=[no.x,no.y,no.z],tc(n,Kr,Jr,Qr,to))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Si=[new D,new D,new D,new D,new D,new D,new D,new D],Yn=new D,eo=new Br,Kr=new D,Jr=new D,Qr=new D,Bi=new D,$i=new D,_r=new D,qs=new D,to=new D,no=new D,vr=new D;function tc(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){vr.fromArray(t,s);const o=r.x*Math.abs(vr.x)+r.y*Math.abs(vr.y)+r.z*Math.abs(vr.z),l=e.dot(vr),c=n.dot(vr),u=i.dot(vr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Gt=new D,io=new Xe;let C_=0;class Ii extends zr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:C_++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cp,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?Ml(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)io.fromBufferAttribute(this,n),io.applyMatrix3(e),this.setXY(n,io.x,io.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix3(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyMatrix4(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.applyNormalMatrix(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Gt.fromBufferAttribute(this,n),Gt.transformDirection(e),this.setXYZ(n,Gt.x,Gt.y,Gt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Xu(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Zu(e,this.array)}}class Up extends Ii{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class kp extends Ii{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ft extends Ii{constructor(e,n,i){super(new Float32Array(e),n,i)}}const P_=new Br,js=new D,nc=new D;class $a{constructor(e=new D,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):P_.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;js.subVectors(e,this.center);const n=js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(js.copy(e.center).add(nc)),this.expandByPoint(js.copy(e.center).sub(nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let I_=0;const Un=new xt,ic=new Qt,es=new D,Cn=new Br,Ys=new Br,Jt=new D;class Gn extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:I_++}),this.uuid=cr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Y0(e)?kp:Up)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return ic.lookAt(e),ic.updateMatrix(),this.applyMatrix4(ic.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ge("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Cn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Cn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Cn.min),this.boundingBox.expandByPoint(Cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const i=this.boundingSphere.center;if(Cn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Jt.addVectors(Cn.min,Ys.min),Cn.expandByPoint(Jt),Jt.addVectors(Cn.max,Ys.max),Cn.expandByPoint(Jt)):(Cn.expandByPoint(Ys.min),Cn.expandByPoint(Ys.max))}Cn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Jt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Jt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Jt.fromBufferAttribute(o,c),l&&(es.fromBufferAttribute(e,c),Jt.add(es)),r=Math.max(r,i.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Ii(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],l=[],c=new Uint8Array(i.count);for(let k=0;k<i.count;k++)o[k]=new D,l[k]=new D;const u=new D,f=new D,d=new D,h=new Xe,g=new Xe,_=new Xe,p=new D,m=new D;function v(k,I,R){c[k]=c[I]=c[R]=1,u.fromBufferAttribute(i,k),f.fromBufferAttribute(i,I),d.fromBufferAttribute(i,R),h.fromBufferAttribute(s,k),g.fromBufferAttribute(s,I),_.fromBufferAttribute(s,R),f.sub(u),d.sub(u),g.sub(h),_.sub(h);const H=1/(g.x*_.y-_.x*g.y);isFinite(H)&&(p.copy(f).multiplyScalar(_.y).addScaledVector(d,-g.y).multiplyScalar(H),m.copy(d).multiplyScalar(g.x).addScaledVector(f,-_.x).multiplyScalar(H),o[k].add(p),o[I].add(p),o[R].add(p),l[k].add(m),l[I].add(m),l[R].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let k=0,I=S.length;k<I;++k){const R=S[k],H=R.start,B=R.count;for(let C=H,W=H+B;C<W;C+=3)v(e.getX(C+0),e.getX(C+1),e.getX(C+2))}const b=new D,T=new D,A=new D,y=new D;function E(k){A.fromBufferAttribute(r,k),y.copy(A);const I=o[k];b.copy(I),b.sub(A.multiplyScalar(A.dot(I))).normalize(),T.crossVectors(y,I);const H=T.dot(l[k])<0?-1:1;a.setXYZW(k,b.x,b.y,b.z,H)}for(let k=0,I=i.count;k<I;++k)c[k]&&E(k);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new Ii(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,f=new D;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,_),a.fromBufferAttribute(n,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Jt.fromBufferAttribute(e,n),Jt.normalize(),e.setXYZ(n,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let m=0;m<u;m++)d[g++]=c[h++]}return new Ii(d,u,f)}if(this.index===null)return Ge("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Gn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class L_{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Cp,this.updateRanges=[],this.version=0,this.uuid=cr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=of(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);const i=new this.array.constructor(e.arrayBuffers[n]),r=new this.constructor(i,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});const n=of(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));const i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}}function of(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=cr()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}const mn=new D;class rl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r,this._normalizationScale=e!==void 0?Ml(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyMatrix4(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.applyNormalMatrix(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)mn.fromBufferAttribute(this,n),mn.transformDirection(e),this.setXYZ(n,mn.x,mn.y,mn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){il("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Ii(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){il("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Xu(e,this.data.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):Zu(e,this.data.array)}}const rc=new D,N_=new D,D_=new Ve;class Zi{constructor(e=new D(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=rc.subVectors(i,n).cross(N_.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(rc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||D_.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let U_=0;class Ds extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:U_++}),this.uuid=cr(),this.name="",this.type="Material",this.blending=va,this.side=sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=up,this.blendDst=dp,this.blendEquation=us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=V0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bl,this.stencilZFail=Bl,this.stencilZPass=Bl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ge(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ge(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new je().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Xe().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Xe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Oo extends Ds{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ts;const Ks=new D,ns=new D,is=new D,rs=new Xe,Js=new Xe,Op=new xt,ro=new D,Qs=new D,so=new D,lf=new Xe,sc=new Xe,cf=new Xe;class ac extends Qt{constructor(e=new Oo){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Gn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new L_(n,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new rl(i,3,0,!1)),ts.setAttribute("uv",new rl(i,2,3,!1))}this.geometry=ts,this.material=e,this.center=new Xe(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,n){e.camera===null&&ft('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Op.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;ao(ro.set(-.5,-.5,0),is,a,ns,r,s),ao(Qs.set(.5,-.5,0),is,a,ns,r,s),ao(so.set(.5,.5,0),is,a,ns,r,s),lf.set(0,0),sc.set(1,0),cf.set(1,1);let o=e.ray.intersectTriangle(ro,Qs,so,!1,Ks);if(o===null&&(ao(Qs.set(-.5,.5,0),is,a,ns,r,s),sc.set(0,1),o=e.ray.intersectTriangle(ro,so,Qs,!1,Ks),o===null))return;const l=e.ray.origin.distanceTo(Ks);l<e.near||l>e.far||n.push({distance:l,point:Ks.clone(),uv:Bn.getInterpolation(Ks,ro,Qs,so,lf,sc,cf,new Xe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){const n=super.toJSON(e);return n.object.center=this.center.toArray(),n}}function ao(t,e,n,i,r,s){rs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Js.x=s*rs.x-r*rs.y,Js.y=r*rs.x+s*rs.y):Js.copy(rs),t.copy(e),t.x+=Js.x,t.y+=Js.y,t.applyMatrix4(Op)}const Mi=new D,oc=new D,oo=new D,lo=new D;class k_{constructor(e=new D,n=new D(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){oc.copy(e).add(n).multiplyScalar(.5),oo.copy(n).sub(e).normalize(),lo.copy(this.origin).sub(oc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(oo),o=lo.dot(this.direction),l=-lo.dot(oo),c=lo.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(oc).addScaledVector(oo,d),h}intersectSphere(e,n){if(e.radius<0)return null;Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,f=e.x-a.x,d=e.y-a.y,h=e.z-a.z,g=n.x-a.x,_=n.y-a.y,p=n.z-a.z,m=i.x-a.x,v=i.y-a.y,S=i.z-a.z,b=Math.abs(l),T=Math.abs(c),A=Math.abs(u);let y,E,k,I,R,H,B,C,W,X,G,ue;if(b>=T&&b>=A?(k=l,H=f,W=g,ue=m,l>=0?(y=c,E=u,I=d,R=h,B=_,C=p,X=v,G=S):(y=u,E=c,I=h,R=d,B=p,C=_,X=S,G=v)):T>=A?(k=c,H=d,W=_,ue=v,c>=0?(y=u,E=l,I=h,R=f,B=p,C=g,X=S,G=m):(y=l,E=u,I=f,R=h,B=g,C=p,X=m,G=S)):(k=u,H=h,W=p,ue=S,u>=0?(y=l,E=c,I=f,R=d,B=g,C=_,X=m,G=v):(y=c,E=l,I=d,R=f,B=_,C=g,X=v,G=m)),k===0)return null;const ne=y/k,oe=E/k,de=1/k,Ae=I-ne*H,Be=R-oe*H,se=B-ne*W,Se=C-oe*W,Pe=X-ne*ue,Le=G-oe*ue,xe=Pe*Se-Le*se,He=Ae*Le-Be*Pe,St=se*Be-Se*Ae;if(r){if(xe<0||He<0||St<0)return null}else if((xe<0||He<0||St<0)&&(xe>0||He>0||St>0))return null;const ze=xe+He+St;if(ze===0)return null;const Ye=de*(xe*H+He*W+St*ue);return(ze>0?Ye<0:Ye>0)?null:this.at(Ye/ze,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qi extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.combine=fp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const uf=new xt,xr=new k_,co=new $a,df=new D,uo=new D,fo=new D,ho=new D,lc=new D,po=new D,ff=new D,mo=new D;class _t extends Qt{constructor(e=new Gn,n=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(lc.fromBufferAttribute(f,e),a?po.addScaledVector(lc,u):po.addScaledVector(lc.sub(n),u))}n.add(po)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),co.copy(i.boundingSphere),co.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(co.containsPoint(xr.origin)===!1&&(xr.intersectSphere(co,df)===null||xr.origin.distanceToSquared(df)>(e.far-e.near)**2))&&(uf.copy(s).invert(),xr.copy(e.ray).applyMatrix4(uf),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],v=Math.max(p.start,h.start),S=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let b=v,T=S;b<T;b+=3){const A=o.getX(b),y=o.getX(b+1),E=o.getX(b+2);r=go(this,m,e,i,c,u,f,A,y,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),S=o.getX(p+1),b=o.getX(p+2);r=go(this,a,e,i,c,u,f,v,S,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const p=d[g],m=a[p.materialIndex],v=Math.max(p.start,h.start),S=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let b=v,T=S;b<T;b+=3){const A=b,y=b+1,E=b+2;r=go(this,m,e,i,c,u,f,A,y,E),r&&(r.faceIndex=Math.floor(b/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let p=g,m=_;p<m;p+=3){const v=p,S=p+1,b=p+2;r=go(this,a,e,i,c,u,f,v,S,b),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function O_(t,e,n,i,r,s,a,o){let l;if(e.side===vn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===sr,o),l===null)return null;mo.copy(o),mo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(mo);return c<n.near||c>n.far?null:{distance:c,point:mo.clone(),object:t}}function go(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,uo),t.getVertexPosition(l,fo),t.getVertexPosition(c,ho);const u=O_(t,e,n,i,uo,fo,ho,ff);if(u){const f=new D;Bn.getBarycoord(ff,uo,fo,ho,f),r&&(u.uv=Bn.getInterpolatedAttribute(r,o,l,c,f,new Xe)),s&&(u.uv1=Bn.getInterpolatedAttribute(s,o,l,c,f,new Xe)),a&&(u.normal=Bn.getInterpolatedAttribute(a,o,l,c,f,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Bn.getNormal(uo,fo,ho,d.normal),u.face=d,u.barycoord=f}return u}class Fp extends hn{constructor(e=null,n=1,i=1,r,s,a,o,l,c=rn,u=rn,f,d){super(null,a,o,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hf extends Ii{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ss=new xt,pf=new xt,_o=[],mf=new Br,F_=new xt,ea=new _t,ta=new $a;class z_ extends _t{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new hf(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,F_)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Br),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ss),mf.copy(e.boundingBox).applyMatrix4(ss),this.boundingBox.union(mf)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new $a),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,ss),ta.copy(e.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(ta)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(ea.geometry=this.geometry,ea.material=this.material,ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ta.copy(this.boundingSphere),ta.applyMatrix4(i),e.ray.intersectsSphere(ta)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ss),pf.multiplyMatrices(i,ss),ea.matrixWorld=pf,ea.raycast(e,_o);for(let a=0,o=_o.length;a<o;a++){const l=_o[a];l.instanceId=s,l.object=this,n.push(l)}_o.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new hf(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Fp(new Float32Array(r*this.count),r,this.count,$u,Jn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;return s[l]=o,s.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yr=new $a,B_=new Xe(.5,.5),vo=new D;class Ia{constructor(e=new Zi,n=new Zi,i=new Zi,r=new Zi,s=new Zi,a=new Zi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Qn,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],p=s[10],m=s[11],v=s[12],S=s[13],b=s[14],T=s[15];if(r[0].setComponents(c-a,h-u,m-g,T-v).normalize(),r[1].setComponents(c+a,h+u,m+g,T+v).normalize(),r[2].setComponents(c+o,h+f,m+_,T+S).normalize(),r[3].setComponents(c-o,h-f,m-_,T-S).normalize(),i)r[4].setComponents(l,d,p,b).normalize(),r[5].setComponents(c-l,h-d,m-p,T-b).normalize();else if(r[4].setComponents(c-l,h-d,m-p,T-b).normalize(),n===Qn)r[5].setComponents(c+l,h+d,m+p,T+b).normalize();else if(n===Ca)r[5].setComponents(l,d,p,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),yr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(yr)}intersectsSprite(e){yr.center.set(0,0,0);const n=B_.distanceTo(e.center);return yr.radius=.7071067811865476+n,yr.applyMatrix4(e.matrixWorld),this.intersectsSphere(yr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(vo.x=r.normal.x>0?e.max.x:e.min.x,vo.y=r.normal.y>0?e.max.y:e.min.y,vo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(vo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const gf=new xt;class Yu{constructor(){this.coordinateSystem=Qn,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];gf.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new Ia),i[r].setFromProjectionMatrix(gf,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new Ia),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new Yu().copy(this)}}class zp extends hn{constructor(e=[],n=ys,i,r,s,a,o,l,c,u){super(e,n,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class br extends hn{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ss extends hn{constructor(e,n,i=hi,r,s,a,o=rn,l=rn,c,u=ar,f=1){if(u!==ar&&u!==Qi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:f};super(d,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Bp extends Ss{constructor(e,n=hi,i=ys,r,s,a=rn,o=rn,l,c=ar){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,n,i,r,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $p extends hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $r extends Gn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,a,s,0),g("z","y","x",1,-1,i,n,-e,a,s,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2));function g(_,p,m,v,S,b,T,A,y,E,k){const I=b/y,R=T/E,H=b/2,B=T/2,C=A/2,W=y+1,X=E+1;let G=0,ue=0;const ne=new D;for(let oe=0;oe<X;oe++){const de=oe*R-B;for(let Ae=0;Ae<W;Ae++){const Be=Ae*I-H;ne[_]=Be*v,ne[p]=de*S,ne[m]=C,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[m]=A>0?1:-1,u.push(ne.x,ne.y,ne.z),f.push(Ae/y),f.push(1-oe/E),G+=1}}for(let oe=0;oe<E;oe++)for(let de=0;de<y;de++){const Ae=d+de+W*oe,Be=d+de+W*(oe+1),se=d+(de+1)+W*(oe+1),Se=d+(de+1)+W*oe;l.push(Ae,Be,Se),l.push(Be,se,Se),ue+=6}o.addGroup(h,ue,k),h+=ue,d+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class La extends Gn{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],d=[],h=[];let g=0;const _=[],p=i/2;let m=0;v(),a===!1&&(e>0&&S(!0),n>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ft(f,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(h,2));function v(){const b=new D,T=new D;let A=0;const y=(n-e)/i;for(let E=0;E<=s;E++){const k=[],I=E/s,R=I*(n-e)+e;for(let H=0;H<=r;H++){const B=H/r,C=B*l+o,W=Math.sin(C),X=Math.cos(C);T.x=R*W,T.y=-I*i+p,T.z=R*X,f.push(T.x,T.y,T.z),b.set(W,y,X).normalize(),d.push(b.x,b.y,b.z),h.push(B,1-I),k.push(g++)}_.push(k)}for(let E=0;E<r;E++)for(let k=0;k<s;k++){const I=_[k][E],R=_[k+1][E],H=_[k+1][E+1],B=_[k][E+1];(e>0||k!==0)&&(u.push(I,R,B),A+=3),(n>0||k!==s-1)&&(u.push(R,H,B),A+=3)}c.addGroup(m,A,0),m+=A}function S(b){const T=g,A=new Xe,y=new D;let E=0;const k=b===!0?e:n,I=b===!0?1:-1;for(let H=1;H<=r;H++)f.push(0,p*I,0),d.push(0,I,0),h.push(.5,.5),g++;const R=g;for(let H=0;H<=r;H++){const C=H/r*l+o,W=Math.cos(C),X=Math.sin(C);y.x=k*X,y.y=p*I,y.z=k*W,f.push(y.x,y.y,y.z),d.push(0,I,0),A.x=W*.5+.5,A.y=X*.5*I+.5,h.push(A.x,A.y),g++}for(let H=0;H<r;H++){const B=T+H,C=R+H;b===!0?u.push(C,C+1,B):u.push(C+1,C,B),E+=3}c.addGroup(m,E,b===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new La(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ku extends La{constructor(e=1,n=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,n,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new Ku(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends Gn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,d=n/l,h=[],g=[],_=[],p=[];for(let m=0;m<u;m++){const v=m*d-a;for(let S=0;S<c;S++){const b=S*f-s;g.push(b,-v,0),_.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const S=v+c*m,b=v+c*(m+1),T=v+1+c*(m+1),A=v+1+c*m;h.push(S,b,A),h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Cr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ju extends Gn{constructor(e=.5,n=1,i=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:a},i=Math.max(3,i),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let f=e;const d=(n-e)/r,h=new D,g=new Xe;for(let _=0;_<=r;_++){for(let p=0;p<=i;p++){const m=s+p/i*a;h.x=f*Math.cos(m),h.y=f*Math.sin(m),l.push(h.x,h.y,h.z),c.push(0,0,1),g.x=(h.x/n+1)/2,g.y=(h.y/n+1)/2,u.push(g.x,g.y)}f+=d}for(let _=0;_<r;_++){const p=_*(i+1);for(let m=0;m<i;m++){const v=m+p,S=v,b=v+i+1,T=v+i+2,A=v+1;o.push(S,b,A),o.push(b,T,A)}}this.setIndex(o),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ju(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Qu extends Gn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new D,d=new D,h=[],g=[],_=[],p=[];for(let m=0;m<=i;m++){const v=[],S=m/i,b=a+S*o,T=e*Math.cos(b),A=Math.sqrt(e*e-T*T);let y=0;m===0&&a===0?y=.5/n:m===i&&l===Math.PI&&(y=-.5/n);for(let E=0;E<=n;E++){const k=E/n,I=r+k*s;f.x=-A*Math.cos(I),f.y=T,f.z=A*Math.sin(I),g.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),p.push(k+y,1-S),v.push(c++)}u.push(v)}for(let m=0;m<i;m++)for(let v=0;v<n;v++){const S=u[m][v+1],b=u[m][v],T=u[m+1][v],A=u[m+1][v+1];(m!==0||a>0)&&h.push(S,b,A),(m!==i-1||l<Math.PI)&&h.push(b,T,A)}this.setIndex(h),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ba extends Gn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],f=[],d=new D,h=new D,g=new D;for(let _=0;_<=i;_++){const p=a+_/i*o;for(let m=0;m<=r;m++){const v=m/r*s;h.x=(e+n*Math.cos(p))*Math.cos(v),h.y=(e+n*Math.cos(p))*Math.sin(v),h.z=n*Math.sin(p),c.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(h,d).normalize(),u.push(g.x,g.y,g.z),f.push(m/r),f.push(_/i)}}for(let _=1;_<=i;_++)for(let p=1;p<=r;p++){const m=(r+1)*_+p-1,v=(r+1)*(_-1)+p-1,S=(r+1)*(_-1)+p,b=(r+1)*_+p;l.push(m,v,b),l.push(v,S,b)}this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(u,3)),this.setAttribute("uv",new Ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ba(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Ms(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(_f(r))r.isRenderTargetTexture?(Ge("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(_f(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=Ms(t[n]);for(const r in i)e[r]=i[r]}return e}function _f(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $_(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Hp(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const H_={clone:Ms,merge:_n};var G_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,V_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=G_,this.fragmentShader=V_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=$_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new je().setHex(r.value);break;case"v2":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"v3":this.uniforms[i].value=new D().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Pt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Ve().fromArray(r.value);break;case"m4":this.uniforms[i].value=new xt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class W_ extends kr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fo extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cu,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class X_ extends Fo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){hs('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Z_ extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class q_ extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class ed extends Qt{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}class j_ extends ed{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}toJSON(e){const n=super.toJSON(e);return n.object.groundColor=this.groundColor.getHex(),n}}const cc=new xt,vf=new D,xf=new D;class Gp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;vf.setFromMatrixPosition(e.matrixWorld),n.position.copy(vf),xf.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(xf),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){cc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(cc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,l=r?r.x/s.x:0,c=r?r.y/s.y:0;e.coordinateSystem===Ca||e.reversedDepth?n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),n.multiply(cc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xo=new D,yo=new Ns,ii=new D;class Vp extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=Qn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xo,yo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,yo,ii.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(xo,yo,ii),ii.x===1&&ii.y===1&&ii.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xo,yo,ii.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new D,yf=new Xe,bf=new Xe;class Fn extends Vp{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(xa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(xa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,yf,bf),n.subVectors(bf,yf)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(xa*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Y_ extends Gp{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0}}class K_ extends ed{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Y_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Wp extends Vp{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class J_ extends Gp{constructor(){super(new Wp(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sf extends ed{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Qt.DEFAULT_UP),this.updateMatrix(),this.target=new Qt,this.shadow=new J_}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}const as=-90,os=1;class uu extends Qt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Fn(as,os,e,n);r.layers=this.layers,this.add(r);const s=new Fn(as,os,e,n);s.layers=this.layers,this.add(s);const a=new Fn(as,os,e,n);a.layers=this.layers,this.add(a);const o=new Fn(as,os,e,n);o.layers=this.layers,this.add(o);const l=new Fn(as,os,e,n);l.layers=this.layers,this.add(l);const c=new Fn(as,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Qn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.mipmapsAutoUpdate=_,e.setRenderTarget(i,5,r),p&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Q_ extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}function Mf(t,e,n,i){const r=ev(i);switch(n){case Ep:return t*e;case $u:return t*e/r.components*r.byteLength;case Hu:return t*e/r.components*r.byteLength;case Ur:return t*e*2/r.components*r.byteLength;case Gu:return t*e*2/r.components*r.byteLength;case wp:return t*e*3/r.components*r.byteLength;case ci:return t*e*4/r.components*r.byteLength;case Vu:return t*e*4/r.components*r.byteLength;case No:case Do:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Uo:case ko:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Dc:case kc:return Math.max(t,16)*Math.max(e,8)/4;case Nc:case Uc:return Math.max(t,8)*Math.max(e,8)/2;case Oc:case Fc:case Bc:case $c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zc:case Jo:case Hc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Wc:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Zc:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case qc:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jc:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Kc:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Jc:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Qc:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case eu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case tu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case nu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case iu:case ru:case su:return Math.ceil(t/4)*Math.ceil(e/4)*16;case au:case ou:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Qo:case lu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function ev(t){switch(t){case In:case yp:return{byteLength:1,components:1};case Ra:case bp:case pi:return{byteLength:2,components:1};case zu:case Bu:return{byteLength:2,components:4};case hi:case Fu:case Jn:return{byteLength:4,components:1};case Sp:case Mp:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ku}}));typeof window<"u"&&(window.__THREE__?Ge("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ku);function Xp(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function tv(t){const e=new WeakMap;function n(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=t.HALF_FLOAT:h=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=t.SHORT;else if(c instanceof Uint32Array)h=t.UNSIGNED_INT;else if(c instanceof Int32Array)h=t.INT;else if(c instanceof Int8Array)h=t.BYTE;else if(c instanceof Uint8Array)h=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function i(o,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,o),f.length===0)t.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];t.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var nv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iv=`#ifdef USE_ALPHAHASH
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
#endif`,rv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,av=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ov=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lv=`#ifdef USE_AOMAP
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
#endif`,cv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uv=`#ifdef USE_BATCHING
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
#endif`,dv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mv=`#ifdef USE_IRIDESCENCE
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
#endif`,gv=`#ifdef USE_BUMPMAP
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
#endif`,_v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Sv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Mv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Ev=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,wv=`#define PI 3.141592653589793
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
} // validated`,Tv=`vec3 transformedNormal = objectNormal;
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
#endif`,Av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Lv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nv=`#ifdef USE_ENVMAP
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
#endif`,Dv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Uv=`#ifdef USE_ENVMAP
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
#endif`,kv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
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
#endif`,Fv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hv=`#ifdef USE_GRADIENTMAP
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
}`,Gv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Wv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xv=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Zv=`#ifdef USE_ENVMAP
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
#endif`,qv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Yv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Kv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Jv=`PhysicalMaterial material;
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
#endif`,Qv=`uniform sampler2D dfgLUT;
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
}`,ex=`
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
#endif`,tx=`#if defined( RE_IndirectDiffuse )
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
#endif`,nx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ix=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,rx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ax=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,cx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ux=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,dx=`#if defined( USE_POINTS_UV )
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
#endif`,fx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,px=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mx=`#if defined( USE_MORPHCOLORS )
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
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_x=`#ifdef USE_MORPHTARGETS
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
#endif`,vx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Sx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Ex=`#ifdef USE_NORMALMAP
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
#endif`,wx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Tx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ax=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Cx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Px=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ix=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ux=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ox=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Fx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Bx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
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
#endif`,Gx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Vx=`#ifdef USE_SKINNING
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
#endif`,Wx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,Yx=`#ifdef USE_TRANSMISSION
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
#endif`,Kx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ey=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ty=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ny=`uniform sampler2D t2D;
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
}`,iy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ry=`uniform float backgroundBlurriness;
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
}`,sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ay=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oy=`#include <common>
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
}`,ly=`#if DEPTH_PACKING == 3200
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
}`,cy=`#define DISTANCE
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
}`,uy=`#define DISTANCE
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
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hy=`uniform float scale;
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
}`,py=`uniform vec3 diffuse;
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
}`,my=`#include <common>
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
}`,gy=`uniform vec3 diffuse;
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
}`,_y=`#define LAMBERT
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
}`,vy=`#define LAMBERT
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
}`,xy=`#define MATCAP
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
}`,yy=`#define MATCAP
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
}`,by=`#define NORMAL
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
}`,Sy=`#define NORMAL
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
}`,My=`#define PHONG
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
}`,Ey=`#define PHONG
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
}`,wy=`#define STANDARD
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
}`,Ty=`#define STANDARD
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
}`,Ay=`#define TOON
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
}`,Ry=`#define TOON
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
}`,Cy=`uniform float size;
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
}`,Py=`uniform vec3 diffuse;
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
}`,Iy=`#include <common>
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
}`,Ly=`uniform vec3 color;
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
}`,Ny=`uniform float rotation;
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
}`,Dy=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:nv,alphahash_pars_fragment:iv,alphamap_fragment:rv,alphamap_pars_fragment:sv,alphatest_fragment:av,alphatest_pars_fragment:ov,aomap_fragment:lv,aomap_pars_fragment:cv,batching_pars_vertex:uv,batching_vertex:dv,begin_vertex:fv,beginnormal_vertex:hv,bsdfs:pv,iridescence_fragment:mv,bumpmap_pars_fragment:gv,clipping_planes_fragment:_v,clipping_planes_pars_fragment:vv,clipping_planes_pars_vertex:xv,clipping_planes_vertex:yv,color_fragment:bv,color_pars_fragment:Sv,color_pars_vertex:Mv,color_vertex:Ev,common:wv,defaultnormal_vertex:Tv,displacementmap_pars_vertex:Av,displacementmap_vertex:Rv,emissivemap_fragment:Cv,emissivemap_pars_fragment:Pv,colorspace_fragment:Iv,colorspace_pars_fragment:Lv,envmap_fragment:Nv,envmap_common_pars_fragment:Dv,envmap_pars_fragment:Uv,envmap_pars_vertex:kv,envmap_physical_pars_fragment:Zv,envmap_vertex:Ov,fog_vertex:Fv,fog_pars_vertex:zv,fog_fragment:Bv,fog_pars_fragment:$v,gradientmap_pars_fragment:Hv,lightmap_pars_fragment:Gv,lights_lambert_fragment:Vv,lights_lambert_pars_fragment:Wv,lights_pars_begin:Xv,lights_toon_fragment:qv,lights_toon_pars_fragment:jv,lights_phong_fragment:Yv,lights_phong_pars_fragment:Kv,lights_physical_fragment:Jv,lights_physical_pars_fragment:Qv,lights_fragment_begin:ex,lights_fragment_maps:tx,lights_fragment_end:nx,lightprobes_pars_fragment:ix,logdepthbuf_fragment:rx,logdepthbuf_pars_fragment:sx,logdepthbuf_pars_vertex:ax,logdepthbuf_vertex:ox,map_fragment:lx,map_pars_fragment:cx,map_particle_fragment:ux,map_particle_pars_fragment:dx,metalnessmap_fragment:fx,metalnessmap_pars_fragment:hx,morphinstance_vertex:px,morphcolor_vertex:mx,morphnormal_vertex:gx,morphtarget_pars_vertex:_x,morphtarget_vertex:vx,normal_fragment_begin:xx,normal_fragment_maps:yx,normal_pars_fragment:bx,normal_pars_vertex:Sx,normal_vertex:Mx,normalmap_pars_fragment:Ex,clearcoat_normal_fragment_begin:wx,clearcoat_normal_fragment_maps:Tx,clearcoat_pars_fragment:Ax,iridescence_pars_fragment:Rx,opaque_fragment:Cx,packing:Px,premultiplied_alpha_fragment:Ix,project_vertex:Lx,dithering_fragment:Nx,dithering_pars_fragment:Dx,roughnessmap_fragment:Ux,roughnessmap_pars_fragment:kx,shadowmap_pars_fragment:Ox,shadowmap_pars_vertex:Fx,shadowmap_vertex:zx,shadowmask_pars_fragment:Bx,skinbase_vertex:$x,skinning_pars_vertex:Hx,skinning_vertex:Gx,skinnormal_vertex:Vx,specularmap_fragment:Wx,specularmap_pars_fragment:Xx,tonemapping_fragment:Zx,tonemapping_pars_fragment:qx,transmission_fragment:jx,transmission_pars_fragment:Yx,uv_pars_fragment:Kx,uv_pars_vertex:Jx,uv_vertex:Qx,worldpos_vertex:ey,background_vert:ty,background_frag:ny,backgroundCube_vert:iy,backgroundCube_frag:ry,cube_vert:sy,cube_frag:ay,depth_vert:oy,depth_frag:ly,distance_vert:cy,distance_frag:uy,equirect_vert:dy,equirect_frag:fy,linedashed_vert:hy,linedashed_frag:py,meshbasic_vert:my,meshbasic_frag:gy,meshlambert_vert:_y,meshlambert_frag:vy,meshmatcap_vert:xy,meshmatcap_frag:yy,meshnormal_vert:by,meshnormal_frag:Sy,meshphong_vert:My,meshphong_frag:Ey,meshphysical_vert:wy,meshphysical_frag:Ty,meshtoon_vert:Ay,meshtoon_frag:Ry,points_vert:Cy,points_frag:Py,shadow_vert:Iy,shadow_frag:Ly,sprite_vert:Ny,sprite_frag:Dy},Re={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},li={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new je(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distance:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distance_vert,fragmentShader:qe.distance_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};li.physical={uniforms:_n([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ve},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const bo={r:0,b:0,g:0},Uy=new xt,Zp=new Ve;Zp.set(-1,0,0,0,1,0,0,0,1);function ky(t,e,n,i,r,s){const a=new je(0);let o=r===!0?0:1,l,c,u=null,f=0,d=null;function h(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){const b=v.backgroundBlurriness>0;S=e.get(S,b)}return S}function g(v){let S=!1;const b=h(v);b===null?p(a,o):b&&b.isColor&&(p(b,1),S=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function _(v,S){const b=h(S);b&&b.isCubeTexture?(c===void 0&&(c=new _t(new $r(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:Ms(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,y){this.matrixWorld.copyPosition(y.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=b,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Uy.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zp),c.material.toneMapped=ct.getTransfer(b.colorSpace)!==pt,(u!==b||f!==b.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,u=b,f=b.version,d=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new _t(new Cr(2,2),new kr({name:"BackgroundMaterial",uniforms:Ms(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ct.getTransfer(b.colorSpace)!==pt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||f!==b.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,u=b,f=b.version,d=t.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(bo,Hp(t)),n.buffers.color.setClear(bo.r,bo.g,bo.b,S,s)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:m}}function Oy(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(R,H,B,C,W){let X=!1;const G=f(R,C,B,H);s!==G&&(s=G,c(s.object)),X=h(R,C,B,W),X&&g(R,C,B,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,b(R,H,B,C),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(R){return t.bindVertexArray(R)}function u(R){return t.deleteVertexArray(R)}function f(R,H,B,C){const W=C.wireframe===!0;let X=i[H.id];X===void 0&&(X={},i[H.id]=X);const G=R.isInstancedMesh===!0?R.id:0;let ue=X[G];ue===void 0&&(ue={},X[G]=ue);let ne=ue[B.id];ne===void 0&&(ne={},ue[B.id]=ne);let oe=ne[W];return oe===void 0&&(oe=d(l()),ne[W]=oe),oe}function d(R){const H=[],B=[],C=[];for(let W=0;W<n;W++)H[W]=0,B[W]=0,C[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:B,attributeDivisors:C,object:R,attributes:{},index:null}}function h(R,H,B,C){const W=s.attributes,X=H.attributes;let G=0;const ue=B.getAttributes();for(const ne in ue)if(ue[ne].location>=0){const de=W[ne];let Ae=X[ne];if(Ae===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(Ae=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(Ae=R.instanceColor)),de===void 0||de.attribute!==Ae||Ae&&de.data!==Ae.data)return!0;G++}return s.attributesNum!==G||s.index!==C}function g(R,H,B,C){const W={},X=H.attributes;let G=0;const ue=B.getAttributes();for(const ne in ue)if(ue[ne].location>=0){let de=X[ne];de===void 0&&(ne==="instanceMatrix"&&R.instanceMatrix&&(de=R.instanceMatrix),ne==="instanceColor"&&R.instanceColor&&(de=R.instanceColor));const Ae={};Ae.attribute=de,de&&de.data&&(Ae.data=de.data),W[ne]=Ae,G++}s.attributes=W,s.attributesNum=G,s.index=C}function _(){const R=s.newAttributes;for(let H=0,B=R.length;H<B;H++)R[H]=0}function p(R){m(R,0)}function m(R,H){const B=s.newAttributes,C=s.enabledAttributes,W=s.attributeDivisors;B[R]=1,C[R]===0&&(t.enableVertexAttribArray(R),C[R]=1),W[R]!==H&&(t.vertexAttribDivisor(R,H),W[R]=H)}function v(){const R=s.newAttributes,H=s.enabledAttributes;for(let B=0,C=H.length;B<C;B++)H[B]!==R[B]&&(t.disableVertexAttribArray(B),H[B]=0)}function S(R,H,B,C,W,X,G){G===!0?t.vertexAttribIPointer(R,H,B,W,X):t.vertexAttribPointer(R,H,B,C,W,X)}function b(R,H,B,C){_();const W=C.attributes,X=B.getAttributes(),G=H.defaultAttributeValues;for(const ue in X){const ne=X[ue];if(ne.location>=0){let oe=W[ue];if(oe===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const de=oe.normalized,Ae=oe.itemSize,Be=e.get(oe);if(Be===void 0)continue;const se=Be.buffer,Se=Be.type,Pe=Be.bytesPerElement,Le=Se===t.INT||Se===t.UNSIGNED_INT||oe.gpuType===Fu;if(oe.isInterleavedBufferAttribute){const xe=oe.data,He=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,St=oe.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let ze=0;ze<ne.locationSize;ze++)m(ne.location+ze,xe.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<ne.locationSize;ze++)p(ne.location+ze);t.bindBuffer(t.ARRAY_BUFFER,se);for(let ze=0;ze<ne.locationSize;ze++)S(ne.location+ze,Ae/ne.locationSize,Se,de,He*Pe,(St+Ae/ne.locationSize*ze)*Pe,Le)}else{if(oe.isInstancedBufferAttribute){for(let xe=0;xe<ne.locationSize;xe++)m(ne.location+xe,oe.meshPerAttribute);R.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let xe=0;xe<ne.locationSize;xe++)p(ne.location+xe);t.bindBuffer(t.ARRAY_BUFFER,se);for(let xe=0;xe<ne.locationSize;xe++)S(ne.location+xe,Ae/ne.locationSize,Se,de,Ae*Pe,Ae/ne.locationSize*xe*Pe,Le)}}else if(G!==void 0){const de=G[ue];if(de!==void 0)switch(de.length){case 2:t.vertexAttrib2fv(ne.location,de);break;case 3:t.vertexAttrib3fv(ne.location,de);break;case 4:t.vertexAttrib4fv(ne.location,de);break;default:t.vertexAttrib1fv(ne.location,de)}}}}v()}function T(){k();for(const R in i){const H=i[R];for(const B in H){const C=H[B];for(const W in C){const X=C[W];for(const G in X)u(X[G].object),delete X[G];delete C[W]}}delete i[R]}}function A(R){if(i[R.id]===void 0)return;const H=i[R.id];for(const B in H){const C=H[B];for(const W in C){const X=C[W];for(const G in X)u(X[G].object),delete X[G];delete C[W]}}delete i[R.id]}function y(R){for(const H in i){const B=i[H];for(const C in B){const W=B[C];if(W[R.id]===void 0)continue;const X=W[R.id];for(const G in X)u(X[G].object),delete X[G];delete W[R.id]}}}function E(R){for(const H in i){const B=i[H],C=R.isInstancedMesh===!0?R.id:0,W=B[C];if(W!==void 0){for(const X in W){const G=W[X];for(const ue in G)u(G[ue].object),delete G[ue];delete W[X]}delete B[C],Object.keys(B).length===0&&delete i[H]}}}function k(){I(),a=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:k,resetDefaultState:I,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:E,releaseStatesOfProgram:y,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Fy(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,u){u!==0&&(t.drawArraysInstanced(i,l,c,u),n.update(c,i,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,u);let d=0;for(let h=0;h<u;h++)d+=c[h];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function zy(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(y){return!(y!==ci&&i.convert(y)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(y){const E=y===pi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(y!==In&&y!==Jn&&!E&&i.convert(y)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function l(y){if(y==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(Ge("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&f===!1;n.reversedDepthBuffer===!0&&f===!1&&Ge("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&f===!0&&Ge("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:b,maxSamples:T,samples:A}}function By(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Zi,o=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,p=f.clipShadows,m=t.get(f);if(!r||g===null||g.length===0||s&&!p)s?u(null):c();else{const v=s?0:i,S=v*4;let b=m.clippingState||null;l.value=b,b=u(g,d,S,h);for(let T=0;T!==S;++T)b[T]=n[T];m.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=h+_*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,b=h;S!==_;++S,b+=4)a.copy(f[S]).applyMatrix4(v,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}class td extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zp(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $r(5,5,5),s=new kr({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:vn,blending:fs});s.uniforms.tEquirect.value=n;const a=new _t(r,s),o=n.minFilter;return n.minFilter===Ji&&(n.minFilter=Mn),new uu(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Ef=256,$y=3,Hy=20,qp=256,jp=16,Gy=3,Vy=new D,Wy=new je;class sl{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new uu(1,10,null),this._boxMesh=new _t(new $r(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=Vy}=s,l=this._renderer;this._setSize(a);const c=this._allocateTarget(),u=this._getSourceTarget(!0);n>0&&(u.texture.mipmapsAutoUpdate=!1);const f=l.autoClear,d=l.autoClearColor,h=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(Wy));const p=new uu(i,r,u);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=d,l.autoClearDepth=h,l.autoClearStencil=g,e.background=_,n>0&&(u.texture.mipmapsAutoUpdate=!0,this._blur(c,n)),this._applyPMREM(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Ef,Ip(e))}_fromTexture(e,n){e.mapping===ys||e.mapping===Aa?this._setSize(e.image.length===0?Ef:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=wf(e,!1,!1),i=Math.log2(e)-$y;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=wf(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===ys||e.mapping===Aa?(this._cubemapMaterial===null&&(this._cubemapMaterial=Af()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Tf()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Xy(),this._integrationMaterial=Zy());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/jp);for(let a=0;a<=i;a++){const o=sl.lodToRoughness(a,i);if(a>i-Gy)s.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{const l=o>0?Math.log2(n)+.5*Math.log2(6/(qp*Math.pow(o,4)))+.5:0;r.roughness.value=o,r.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=qy());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function wf(t,e,n){return new td(t,{minFilter:Ji,generateMipmaps:e,type:pi,colorSpace:el,depthBuffer:n})}function Ha(t,e,n){return new kr({name:t,uniforms:e,vertexShader:qe.cube_vert,fragmentShader:n,side:vn,blending:fs,depthTest:!1,depthWrite:!1})}function Xy(){return Ha("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${qp}u

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
	`)}function Zy(){return Ha("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jp}},`

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
	`)}function qy(){return Ha("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Hy}
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
	`)}function Tf(){return Ha("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Af(){return Ha("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function jy(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,h=!1){return d==null?null:h?a(d):s(d)}function s(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ol||h===Fl)if(e.has(d)){const g=e.get(d).texture;return o(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const _=new td(g.height);return _.fromEquirectangularTexture(t,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){const h=d.mapping,g=h===Ol||h===Fl,_=h===ys||h===Aa;if(g||_){let p=n.get(d);const m=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==m)return i===null&&(i=new sl(t)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),p.texture;if(p!==void 0)return p.texture;{const v=d.image;return g&&v&&v.height>0||_&&v&&l(v)?(i===null&&(i=new sl(t)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,n.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,h){return h===Ol?d.mapping=ys:h===Fl&&(d.mapping=Aa),d}function l(d){let h=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&h++;return h===g}function c(d){const h=d.target;h.removeEventListener("dispose",c);const g=e.get(h);g!==void 0&&(e.delete(h),g.dispose())}function u(d){const h=d.target;h.removeEventListener("dispose",u);const g=n.get(h);g!==void 0&&(n.delete(h),g.dispose())}function f(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function Yy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&hs("WebGLRenderer: "+i+" extension not supported."),r}}}function Ky(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(g=>delete r[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(const p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete r[g.id],a.unregister(g);const _=s.get(g);_&&(e.remove(_),s.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function c(g,_){return r[_.id]!==void 0||(_.addEventListener("dispose",o),r[_.id]=new WeakRef(_),a.register(_,_.id,_),n.memory.geometries++),_}function u(g){const _=g.attributes;for(const p in _)e.update(_[p],t.ARRAY_BUFFER)}function f(g){const _=g.index,p=g.attributes.position;let m=0;if(p===void 0)return;const v=_!==null?_.array.length:p.array.length/3-1,S=p.count>=65535?kp:Up,b=new S(Math.ceil(v/3)*6,1),T=b.array;if(_!==null){const y=_.array;m=_.version;for(let E=0,k=0;E<v;E+=3){const I=y[E+0],R=y[E+1],H=y[E+2];T[k++]=I,T[k++]=R,T[k++]=R,T[k++]=H,T[k++]=H,T[k++]=I}}else{m=p.version;for(let y=0,E=0;y<v;y+=3){const k=y+0,I=y+1,R=y+2;T[E++]=k,T[E++]=I,T[E++]=I,T[E++]=R,T[E++]=R,T[E++]=k}}b.version=m;const A=s.get(g);A&&e.remove(A),s.set(g,b)}function d(g){const _=s.get(g);if(_){const p=g.index;p!==null&&_.version<p.version&&f(g)}else f(g);return s.get(g)}function h(){for(const g in r){const _=r[g].deref();_!==void 0&&l(_)}}return{get:c,update:u,getWireframeAttribute:d,dispose:h}}function Jy(t,e,n){let i;function r(f){i=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,d){t.drawElements(i,d,s,f*a),n.update(d,i,1)}function c(f,d,h){h!==0&&(t.drawElementsInstanced(i,d,s,f*a,h),n.update(d,i,h))}function u(f,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,f,0,h);let _=0;for(let p=0;p<h;p++)_+=d[p];n.update(_,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Qy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function eb(t,e,n){const i=new WeakMap,r=new Pt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=i.get(o);if(d===void 0||d.count!==f){let I=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",I)};var h=I;d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],v=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let b=0;g===!0&&(b=1),_===!0&&(b=2),p===!0&&(b=3);let T=o.attributes.position.count*b,A=1;T>e.maxTextureSize&&(A=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const y=new Float32Array(T*A*4*f),E=new Lp(y,T,A,f);E.type=Jn,E.needsUpdate=!0;const k=b*4;for(let R=0;R<f;R++){const H=m[R],B=v[R],C=S[R],W=T*A*4*R;for(let X=0;X<H.count;X++){const G=X*k;g===!0&&(r.fromBufferAttribute(H,X),y[W+G+0]=r.x,y[W+G+1]=r.y,y[W+G+2]=r.z,y[W+G+3]=0),_===!0&&(r.fromBufferAttribute(B,X),y[W+G+4]=r.x,y[W+G+5]=r.y,y[W+G+6]=r.z,y[W+G+7]=0),p===!0&&(r.fromBufferAttribute(C,X),y[W+G+8]=r.x,y[W+G+9]=r.y,y[W+G+10]=r.z,y[W+G+11]=C.itemSize===4?r.w:1)}}d={count:f,texture:E,size:new Xe(T,A)},i.set(o,d),o.addEventListener("dispose",I)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let p=0;p<c.length;p++)g+=c[p];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",_),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function tb(t,e,n,i,r){let s=new WeakMap;function a(c){const u=r.render.frame,f=c.geometry,d=e.get(c,f);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const h=c.skeleton;s.get(h)!==u&&(h.update(),s.set(h,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),i.releaseStatesOfObject(u),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:a,dispose:o}}const nb={[hp]:"LINEAR_TONE_MAPPING",[pp]:"REINHARD_TONE_MAPPING",[mp]:"CINEON_TONE_MAPPING",[Ou]:"ACES_FILMIC_TONE_MAPPING",[_p]:"AGX_TONE_MAPPING",[vp]:"NEUTRAL_TONE_MAPPING",[gp]:"CUSTOM_TONE_MAPPING"};function ib(t,e,n,i,r,s){const a=new fi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null,c=null;const u=new Gn;u.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const f=new W_({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new _t(u,f),h=new Wp(-1,1,1,-1,0,1);let g=null,_=null,p=!1,m,v=null,S=[],b=!1;this.setSize=function(T,A){a.setSize(T,A),o!==null&&o.setSize(T,A),l!==null&&l.setSize(T,A);for(let y=0;y<S.length;y++){const E=S[y];E.setSize&&E.setSize(T,A)}},this.setEffects=function(T){S=T,b=S.length>0&&S[0].isRenderPass===!0;const A=a.width,y=a.height;S.length>0&&o===null&&(o=new fi(A,y,{type:pi,depthBuffer:!1,stencilBuffer:!1}),l=new fi(A,y,{type:pi,depthBuffer:!1,stencilBuffer:!1}));const E=r===!0&&S.some(k=>k.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Ss(A,y),s===!0&&(c.format=Qi,c.type=bs)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let k=0;k<S.length;k++){const I=S[k];I.setSize&&I.setSize(A,y),E&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(c)}},this.begin=function(T,A){if(p||T.toneMapping===Ci&&S.length===0)return!1;if(v=A,A!==null){const y=A.width,E=A.height;(a.width!==y||a.height!==E)&&this.setSize(y,E)}return b===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Ci,!0},this.hasRenderPass=function(){return b},this.end=function(T,A){T.toneMapping=m,p=!0;let y=a,E=o;for(let k=0;k<S.length;k++){const I=S[k];I.enabled!==!1&&(I.render(T,E,y,A),I.needsSwap!==!1&&(y=E,E=E===o?l:o))}if(g!==T.outputColorSpace||_!==T.toneMapping){g=T.outputColorSpace,_=T.toneMapping,f.defines={},ct.getTransfer(g)===pt&&(f.defines.SRGB_TRANSFER="");const k=nb[_];k&&(f.defines[k]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=y.texture,T.setRenderTarget(v),T.render(d,h),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),u.dispose(),f.dispose()}}const Yp=new hn,Kp=new Ss(1,1),Jp=new Bp(1),Qp=new Lp,em=new y_,tm=new zp,Rf=[],Cf=[],Pf=new Float32Array(16),If=new Float32Array(9),Lf=new Float32Array(4);function Us(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Rf[r];if(s===void 0&&(s=new Float32Array(r),Rf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function qt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function El(t,e){let n=Cf[e];n===void 0&&(n=new Int32Array(e),Cf[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function rb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function sb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function ab(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(qt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function ob(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function lb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;Lf.set(i),t.uniformMatrix2fv(this.addr,!1,Lf),jt(n,i)}}function cb(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;If.set(i),t.uniformMatrix3fv(this.addr,!1,If),jt(n,i)}}function ub(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(qt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(qt(n,i))return;Pf.set(i),t.uniformMatrix4fv(this.addr,!1,Pf),jt(n,i)}}function db(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function fb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function hb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function pb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function mb(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function gb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(qt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function _b(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(qt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function vb(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(qt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function wl(t){return t.version===0&&(t.compareFunction=Rp,t.needsUpdate=!0),t}function xb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=wl(Kp):s=Yp,n.setTexture2D(e||s,r)}function yb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||em,r)}function bb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=wl(Jp):s=tm,n.setTextureCube(e||s,r)}function Sb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Qp,r)}function Mb(t){switch(t){case 5126:return rb;case 35664:return sb;case 35665:return ab;case 35666:return ob;case 35674:return lb;case 35675:return cb;case 35676:return ub;case 5124:case 35670:return db;case 35667:case 35671:return fb;case 35668:case 35672:return hb;case 35669:case 35673:return pb;case 5125:return mb;case 36294:return gb;case 36295:return _b;case 36296:return vb;case 35678:case 36198:case 36298:case 36306:case 35682:return xb;case 35679:case 36299:case 36307:return yb;case 35680:case 36300:case 36308:case 36293:return bb;case 36289:case 36303:case 36311:case 36292:return Sb}}function Eb(t,e){t.uniform1fv(this.addr,e)}function wb(t,e){const n=Us(e,this.size,2);t.uniform2fv(this.addr,n)}function Tb(t,e){const n=Us(e,this.size,3);t.uniform3fv(this.addr,n)}function Ab(t,e){const n=Us(e,this.size,4);t.uniform4fv(this.addr,n)}function Rb(t,e){const n=Us(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Cb(t,e){const n=Us(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Pb(t,e){const n=Us(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function Ib(t,e){t.uniform1iv(this.addr,e)}function Lb(t,e){t.uniform2iv(this.addr,e)}function Nb(t,e){t.uniform3iv(this.addr,e)}function Db(t,e){t.uniform4iv(this.addr,e)}function Ub(t,e){t.uniform1uiv(this.addr,e)}function kb(t,e){t.uniform2uiv(this.addr,e)}function Ob(t,e){t.uniform3uiv(this.addr,e)}function Fb(t,e){t.uniform4uiv(this.addr,e)}function zb(t,e,n){const i=this.cache,r=e.length,s=El(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=wl(Kp):a=Yp;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Bb(t,e,n){const i=this.cache,r=e.length,s=El(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||em,s[a])}function $b(t,e,n){const i=this.cache,r=e.length,s=El(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=wl(Jp):a=tm;for(let o=0;o!==r;++o)n.setTextureCube(e[o]||a,s[o])}function Hb(t,e,n){const i=this.cache,r=e.length,s=El(n,r);qt(i,s)||(t.uniform1iv(this.addr,s),jt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Qp,s[a])}function Gb(t){switch(t){case 5126:return Eb;case 35664:return wb;case 35665:return Tb;case 35666:return Ab;case 35674:return Rb;case 35675:return Cb;case 35676:return Pb;case 5124:case 35670:return Ib;case 35667:case 35671:return Lb;case 35668:case 35672:return Nb;case 35669:case 35673:return Db;case 5125:return Ub;case 36294:return kb;case 36295:return Ob;case 36296:return Fb;case 35678:case 36198:case 36298:case 36306:case 35682:return zb;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return $b;case 36289:case 36303:case 36311:case 36292:return Hb}}class Vb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Mb(n.type)}}class Wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Gb(n.type)}}class Xb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const uc=/(\w+)(\])?(\[|\.)?/g;function Nf(t,e){t.seq.push(e),t.map[e.id]=e}function Zb(t,e,n){const i=t.name,r=i.length;for(uc.lastIndex=0;;){const s=uc.exec(i),a=uc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Nf(n,c===void 0?new Vb(o,t,e):new Wb(o,t,e));break}else{let f=n.map[o];f===void 0&&(f=new Xb(o),Nf(n,f)),n=f}}}class zo{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);Zb(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Df(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const qb=37297;let jb=0;function Yb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Uf=new Ve;function Kb(t){ct._getMatrix(Uf,ct.workingColorSpace,t);const e=`mat3( ${Uf.elements.map(n=>n.toFixed(4))} )`;switch(ct.getTransfer(t)){case tl:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Ge("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function kf(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+Yb(t.getShaderSource(e),o)}else return s}function Jb(t,e){const n=Kb(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Qb={[hp]:"Linear",[pp]:"Reinhard",[mp]:"Cineon",[Ou]:"ACESFilmic",[_p]:"AgX",[vp]:"Neutral",[gp]:"Custom"};function eS(t,e){const n=Qb[e];return n===void 0?(Ge("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const So=new D;function tS(){ct.getLuminanceCoefficients(So);const t=So.x.toFixed(4),e=So.y.toFixed(4),n=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nS(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function iS(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function rS(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ha(t){return t!==""}function Of(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Ff(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sS=/^[ \t]*#include +<([\w\d./]+)>/gm;function du(t){return t.replace(sS,aS)}function aS(t,e){const n=qe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return du(n)}const oS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zf(t){return t.replace(oS,lS)}function lS(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Bf(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const cS={[Lo]:"SHADOWMAP_TYPE_PCF",[fa]:"SHADOWMAP_TYPE_VSM"};function uS(t){return cS[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const dS={[Aa]:"ENVMAP_MODE_REFRACTION"};function fS(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":dS[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const hS={[fp]:"ENVMAP_BLENDING_MULTIPLY",[z0]:"ENVMAP_BLENDING_MIX",[B0]:"ENVMAP_BLENDING_ADD"};function pS(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":hS[t.combine]||"ENVMAP_BLENDING_NONE"}function mS(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=uS(n),c=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",u=fS(n),f=pS(n),d=nS(n),h=iS(s),g=r.createProgram();let _,p,m=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(ha).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(_=[Bf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[Bf(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,h,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?qe.tonemapping_pars_fragment:"",n.toneMapping!==Ci?eS("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,Jb("linearToOutputTexel",n.outputColorSpace),tS(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ha).join(`
`)),a=du(a),a=Of(a,n),a=Ff(a,n),o=du(o),o=Of(o,n),o=Ff(o,n),a=zf(a),o=zf(o),n.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",n.glslVersion===Xd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Xd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const v=m+_+a,S=m+p+o,b=Df(r,r.VERTEX_SHADER,v),T=Df(r,r.FRAGMENT_SHADER,S);r.attachShader(g,b),r.attachShader(g,T),n.index0AttributeName!==void 0?r.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g);function A(I){if(t.debug.checkShaderErrors){const R=r.getProgramInfoLog(g)||"",H=r.getShaderInfoLog(b)||"",B=r.getShaderInfoLog(T)||"",C=R.trim(),W=H.trim(),X=B.trim();let G=!0,ue=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,g,b,T);else{const ne=kf(r,b,"vertex"),oe=kf(r,T,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+C+`
`+ne+`
`+oe)}else C!==""?Ge("WebGLProgram: Program Info Log:",C):(W===""||X==="")&&(ue=!1);ue&&(I.diagnostics={runnable:G,programLog:C,vertexShader:{log:W,prefix:_},fragmentShader:{log:X,prefix:p}})}r.deleteShader(b),r.deleteShader(T),y=new zo(r,g),E=rS(r,g)}let y;this.getUniforms=function(){return y===void 0&&A(this),y};let E;this.getAttributes=function(){return E===void 0&&A(this),E};let k=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=r.getProgramParameter(g,qb)),k},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=jb++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=T,this}let gS=0;class _S{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new vS(e),n.set(e,i)),i}}class vS{constructor(e){this.id=gS++,this.code=e,this.usedTimes=0}}function xS(t){return t===Ur||t===Jo||t===Qo}function yS(t,e,n,i,r,s){const a=new Np,o=new _S,l=new Set,c=[],u=new Map,f=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,E,k,I,R,H){const B=I.fog,C=R.geometry,W=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,X=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,G=e.get(y.envMap||W,X),ue=d[y.type];let ne=i.precision;y.precision!==null&&(ne=i.getMaxPrecision(y.precision),ne!==y.precision&&Ge("WebGLProgram.getParameters:",y.precision,"not supported, using",ne,"instead."));const oe=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,de=oe!==void 0?oe.length:0;let Ae=0;C.morphAttributes.position!==void 0&&(Ae=1),C.morphAttributes.normal!==void 0&&(Ae=2),C.morphAttributes.color!==void 0&&(Ae=3);let Be,se,Se,Pe;if(ue){const _e=li[ue];Be=_e.vertexShader,se=_e.fragmentShader}else{Be=y.vertexShader,se=y.fragmentShader;const _e=o.getVertexShaderStage(y),ot=o.getFragmentShaderStage(y);o.update(y,_e,ot),Se=_e.id,Pe=ot.id}const Le=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),He=R.isInstancedMesh===!0,St=R.isBatchedMesh===!0,ze=!!y.map,Ye=!!y.matcap,ut=!!G,Ze=ut&&G.isPMREMTexture===!0,Rt=!!y.aoMap,wt=!!y.lightMap,$t=!!y.bumpMap&&y.wireframe===!1,rt=!!y.normalMap,Yt=!!y.displacementMap,Tt=!!y.emissiveMap,Dt=!!y.metalnessMap,tn=!!y.roughnessMap,Ie=y.anisotropy>0,F=y.clearcoat>0,Ut=y.diffuseRoughness>0,st=y.dispersion>0,at=y.retroreflectivity>0,pe=y.iridescence>0,N=y.sheen>0,z=y.transmission>0,Y=Ie&&!!y.anisotropyMap,M=F&&!!y.clearcoatMap,x=F&&!!y.clearcoatNormalMap,U=F&&!!y.clearcoatRoughnessMap,K=Ut&&!!y.diffuseRoughnessMap,L=pe&&!!y.iridescenceMap,J=pe&&!!y.iridescenceThicknessMap,$=N&&!!y.sheenColorMap,V=N&&!!y.sheenRoughnessMap,Q=!!y.specularMap,he=!!y.specularColorMap,P=!!y.specularIntensityMap,ie=z&&!!y.transmissionMap,q=z&&!!y.thicknessMap,me=!!y.gradientMap,fe=!!y.alphaMap,ge=y.alphaTest>0,Ne=!!y.alphaHash,$e=!!y.extensions;let ae=Ci;y.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(ae=t.toneMapping);const Te=Ze?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ce={shaderID:ue,shaderType:y.type,shaderName:y.name,vertexShader:Be,fragmentShader:se,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:Pe,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:ne,batching:St,batchingColor:St&&R._colorsTexture!==null,instancing:He,instancingColor:He&&R.instanceColor!==null,instancingMorph:He&&R.morphTexture!==null,outputColorSpace:Le===null?t.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:ct.workingColorSpace,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:Ye,envMap:ut,envMapMode:ut&&G.mapping,envMapPMREM:Ze,envMapMaxLod:Ze?Te.length-1:null,envMapSize:Ze?Te[0].width:null,aoMap:Rt,lightMap:wt,bumpMap:$t,normalMap:rt,displacementMap:Yt,emissiveMap:Tt,normalMapObjectSpace:rt&&y.normalMapType===G0,normalMapTangentSpace:rt&&y.normalMapType===cu,packedNormalMap:rt&&y.normalMapType===cu&&xS(y.normalMap.format),metalnessMap:Dt,roughnessMap:tn,anisotropy:Ie,anisotropyMap:Y,clearcoat:F,clearcoatMap:M,clearcoatNormalMap:x,clearcoatRoughnessMap:U,diffuseRoughness:Ut,diffuseRoughnessMap:K,dispersion:st,retroreflection:at,iridescence:pe,iridescenceMap:L,iridescenceThicknessMap:J,sheen:N,sheenColorMap:$,sheenRoughnessMap:V,specularMap:Q,specularColorMap:he,specularIntensityMap:P,transmission:z,transmissionMap:ie,thicknessMap:q,gradientMap:me,opaque:y.transparent===!1&&y.blending===va&&y.alphaToCoverage===!1,alphaMap:fe,alphaTest:ge,alphaHash:Ne,combine:y.combine,mapUv:ze&&h(y.map.channel),aoMapUv:Rt&&h(y.aoMap.channel),lightMapUv:wt&&h(y.lightMap.channel),bumpMapUv:$t&&h(y.bumpMap.channel),normalMapUv:rt&&h(y.normalMap.channel),displacementMapUv:Yt&&h(y.displacementMap.channel),emissiveMapUv:Tt&&h(y.emissiveMap.channel),metalnessMapUv:Dt&&h(y.metalnessMap.channel),roughnessMapUv:tn&&h(y.roughnessMap.channel),anisotropyMapUv:Y&&h(y.anisotropyMap.channel),clearcoatMapUv:M&&h(y.clearcoatMap.channel),clearcoatNormalMapUv:x&&h(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:U&&h(y.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:K&&h(y.diffuseRoughnessMap.channel),iridescenceMapUv:L&&h(y.iridescenceMap.channel),iridescenceThicknessMapUv:J&&h(y.iridescenceThicknessMap.channel),sheenColorMapUv:$&&h(y.sheenColorMap.channel),sheenRoughnessMapUv:V&&h(y.sheenRoughnessMap.channel),specularMapUv:Q&&h(y.specularMap.channel),specularColorMapUv:he&&h(y.specularColorMap.channel),specularIntensityMapUv:P&&h(y.specularIntensityMap.channel),transmissionMapUv:ie&&h(y.transmissionMap.channel),thicknessMapUv:q&&h(y.thicknessMap.channel),alphaMapUv:fe&&h(y.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(rt||Ie),vertexNormals:!!C.attributes.normal,vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!C.attributes.uv&&(ze||fe),fog:!!B,useFog:y.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||C.attributes.normal===void 0&&rt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:xe,skinning:R.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Ae,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:H.filter(_e=>_e.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:ae,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===pt,decodeVideoTextureEmissive:Tt&&y.emissiveMap.isVideoTexture===!0&&ct.getTransfer(y.emissiveMap.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===zn,flipSided:y.side===vn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$e&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($e&&y.extensions.multiDraw===!0||St)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ce.vertexUv1s=l.has(1),ce.vertexUv2s=l.has(2),ce.vertexUv3s=l.has(3),l.clear(),ce}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)E.push(k),E.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(p(E,y),m(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function p(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapPMREM),y.push(E.envMapMaxLod),y.push(E.envMapSize),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.diffuseRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.numSunLights),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numSunLightShadows),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.numLightProbeGrids),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function m(y,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),y.push(a.mask)}function v(y){const E=d[y.type];let k;if(E){const I=li[E];k=H_.clone(I.uniforms)}else k=y.uniforms;return k}function S(y,E){let k=u.get(E);return k!==void 0?++k.usedTimes:(k=new mS(t,E,y,r),c.push(k),u.set(E,k)),k}function b(y){if(--y.usedTimes===0){const E=c.indexOf(y);c[E]=c[c.length-1],c.pop(),u.delete(y.cacheKey),y.destroy()}}function T(y){o.remove(y)}function A(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:T,programs:c,dispose:A}}function bS(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function SS(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function $f(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Hf(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let h=0;return d.isInstancedMesh&&(h+=2),d.isSkinnedMesh&&(h+=1),h}function o(d,h,g,_,p,m){let v=t[e];return v===void 0?(v={id:d.id,object:d,geometry:h,material:g,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:m},t[e]=v):(v.id=d.id,v.object=d,v.geometry=h,v.material=g,v.materialVariant=a(d),v.groupOrder=_,v.renderOrder=d.renderOrder,v.z=p,v.group=m),e++,v}function l(d,h,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);const S=o(d,h,g,_,p,m);g.transmission>0?i.push(S):g.transparent===!0?r.push(S):n.push(S)}function c(d,h,g,_,p,m){const v=o(d,h,g,_,p,m);g.transmission>0?i.unshift(v):g.transparent===!0?r.unshift(v):n.unshift(v)}function u(d,h){n.length>1&&n.sort(d||SS),i.length>1&&i.sort(h||$f),r.length>1&&r.sort(h||$f)}function f(){for(let d=e,h=t.length;d<h;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:u}}function MS(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Hf,t.set(i,[a])):r>=s.length?(a=new Hf,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ES(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new D,color:new je};break;case"SpotLight":n={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return t[e.id]=n,n}}}function wS(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let TS=0;function AS(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function RS(t){const e=new ES,n=wS(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new D);const r=new D,s=new xt,a=new xt;function o(c){let u=0,f=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let h=0,g=0,_=0,p=0,m=0,v=0,S=0,b=0,T=0,A=0,y=0,E=0,k=0,I=0;c.sort(AS);for(let H=0,B=c.length;H<B;H++){const C=c[H],W=C.color,X=C.intensity,G=C.distance;let ue=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ur?ue=C.shadow.map.texture:ue=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)u+=W.r*X,f+=W.g*X,d+=W.b*X;else if(C.isLightProbe){for(let ne=0;ne<9;ne++)i.probe[ne].addScaledVector(C.sh.coefficients[ne],X);I++}else if(C.isSunLight){const ne=e.get(C);if(ne.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const oe=C.shadow,de=n.get(C);de.shadowIntensity=oe.intensity,de.shadowBias=oe.bias,de.shadowNormalBias=oe.normalBias,de.shadowRadius=oe.radius,de.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),i.sunShadow[g]=de,i.sunShadowMap[g]=ue;const Ae=oe.getViewportCount();for(let Be=0;Be<Ae;Be++)i.sunShadowMatrix[_+Be]=oe.getMatrix(Be),i.sunShadowCascade[_+Be]=oe._cascadeData[Be];_+=Ae,g++}i.sun[h]=ne,h++}else if(C.isDirectionalLight){const ne=e.get(C);if(ne.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const oe=C.shadow,de=n.get(C);de.shadowIntensity=oe.intensity,de.shadowBias=oe.bias,de.shadowNormalBias=oe.normalBias,de.shadowRadius=oe.radius,de.shadowMapSize=oe.mapSize,i.directionalShadow[p]=de,i.directionalShadowMap[p]=ue,i.directionalShadowMatrix[p]=C.shadow.matrix,T++}i.directional[p]=ne,p++}else if(C.isSpotLight){const ne=e.get(C);ne.position.setFromMatrixPosition(C.matrixWorld),ne.color.copy(W).multiplyScalar(X),ne.distance=G,ne.coneCos=Math.cos(C.angle),ne.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),ne.decay=C.decay,i.spot[v]=ne;const oe=C.shadow;if(C.map&&(i.spotLightMap[E]=C.map,E++,oe.updateMatrices(C),C.castShadow&&k++),i.spotLightMatrix[v]=oe.matrix,C.castShadow){const de=n.get(C);de.shadowIntensity=oe.intensity,de.shadowBias=oe.bias,de.shadowNormalBias=oe.normalBias,de.shadowRadius=oe.radius,de.shadowMapSize=oe.mapSize,i.spotShadow[v]=de,i.spotShadowMap[v]=ue,y++}v++}else if(C.isRectAreaLight){const ne=e.get(C);ne.color.copy(W).multiplyScalar(X),ne.halfWidth.set(C.width*.5,0,0),ne.halfHeight.set(0,C.height*.5,0),i.rectArea[S]=ne,S++}else if(C.isPointLight){const ne=e.get(C);if(ne.color.copy(C.color).multiplyScalar(C.intensity),ne.distance=C.distance,ne.decay=C.decay,C.castShadow){const oe=C.shadow,de=n.get(C);de.shadowIntensity=oe.intensity,de.shadowBias=oe.bias,de.shadowNormalBias=oe.normalBias,de.shadowRadius=oe.radius,de.shadowMapSize=oe.mapSize,de.shadowCameraNear=oe.camera.near,de.shadowCameraFar=oe.camera.far,i.pointShadow[m]=de,i.pointShadowMap[m]=ue,i.pointShadowMatrix[m]=C.shadow.matrix,A++}i.point[m]=ne,m++}else if(C.isHemisphereLight){const ne=e.get(C);ne.skyColor.copy(C.color).multiplyScalar(X),ne.groundColor.copy(C.groundColor).multiplyScalar(X),i.hemi[b]=ne,b++}}S>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=d;const R=i.hash;(R.sunLength!==h||R.directionalLength!==p||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==S||R.hemiLength!==b||R.numSunShadows!==g||R.numDirectionalShadows!==T||R.numPointShadows!==A||R.numSpotShadows!==y||R.numSpotMaps!==E||R.numLightProbes!==I)&&(i.sun.length=h,i.directional.length=p,i.spot.length=v,i.rectArea.length=S,i.point.length=m,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=_,i.sunShadowCascade.length=_,i.directionalShadow.length=T,i.directionalShadowMap.length=T,i.directionalShadowMatrix.length=T,i.pointShadow.length=A,i.pointShadowMap.length=A,i.pointShadowMatrix.length=A,i.spotShadow.length=y,i.spotShadowMap.length=y,i.spotLightMatrix.length=y+E-k,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=I,R.sunLength=h,R.directionalLength=p,R.pointLength=m,R.spotLength=v,R.rectAreaLength=S,R.hemiLength=b,R.numSunShadows=g,R.numDirectionalShadows=T,R.numPointShadows=A,R.numSpotShadows=y,R.numSpotMaps=E,R.numLightProbes=I,i.version=TS++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0,p=0;const m=u.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){const b=c[v];if(b.isSunLight){const T=i.sun[f];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),f++}else if(b.isDirectionalLight){const T=i.directional[d];T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),d++}else if(b.isSpotLight){const T=i.spot[g];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(m),g++}else if(b.isRectAreaLight){const T=i.rectArea[_];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),a.identity(),s.copy(b.matrixWorld),s.premultiply(m),a.extractRotation(s),T.halfWidth.set(b.width*.5,0,0),T.halfHeight.set(0,b.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),_++}else if(b.isPointLight){const T=i.point[h];T.position.setFromMatrixPosition(b.matrixWorld),T.position.applyMatrix4(m),h++}else if(b.isHemisphereLight){const T=i.hemi[p];T.direction.setFromMatrixPosition(b.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:i}}function Gf(t){const e=new RS(t),n=[],i=[],r=[];function s(f){u.camera=f,n.length=0,i.length=0,r.length=0}function a(f){f.isLightProbeGrid?r.push(f):n.push(f)}function o(f){i.push(f)}function l(){e.setup(n),r.sort((f,d)=>f.priority-d.priority||f.id-d.id)}function c(f){e.setupView(n,f)}const u={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:u,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function CS(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Gf(t),e.set(r,[o])):s>=a.length?(o=new Gf(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const PS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,IS=`uniform sampler2D shadow_pass;
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
}`,LS=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],NS=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Vf=new xt,na=new D,dc=new D;function DS(t,e,n){let i=new Ia;const r=new Xe,s=new Xe,a=new Pt,o=new Z_,l=new q_,c={},u=n.maxTextureSize,f={[sr]:vn,[vn]:sr,[zn]:zn},d=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:PS,fragmentShader:IS}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new Gn;g.setAttribute("position",new Ii(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new _t(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Lo;let m=this.type;this.render=function(A,y,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;this.type===y0&&(Ge("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Lo);const k=t.getRenderTarget(),I=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),H=t.state;H.setBlending(fs),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=m!==this.type;B&&y.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(W=>W.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,W=A.length;C<W;C++){const X=A[C],G=X.shadow;if(G===void 0){Ge("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;r.copy(G.mapSize);const ue=G.getFrameExtents();r.multiply(ue),s.copy(G.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/ue.x),r.x=s.x*ue.x,G.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/ue.y),r.y=s.y*ue.y,G.mapSize.y=s.y));const ne=t.state.buffers.depth.getReversed();if(G.camera._reversedDepth=ne,G.map===null||B===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===fa){if(X.isPointLight){Ge("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new fi(r.x,r.y,{format:Ur,type:pi,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Ss(r.x,r.y,Jn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=ar,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn}else X.isPointLight?(G.map=new td(r.x),G.map.depthTexture=new Bp(r.x,hi)):(G.map=new fi(r.x,r.y),G.map.depthTexture=new Ss(r.x,r.y,hi)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=ar,this.type===Lo?(G.map.depthTexture.compareFunction=ne?Ap:Tp,G.map.depthTexture.minFilter=Mn,G.map.depthTexture.magFilter=Mn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=rn,G.map.depthTexture.magFilter=rn);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==r.x||G.map.height!==r.y)&&G.map.setSize(r.x,r.y);const oe=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,E);const de=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:E.layers;for(let Ae=0;Ae<oe;Ae++){const Be=G.getCamera(Ae);if(X.isPointLight){const se=G.camera,Se=G.matrix,Pe=X.distance||se.far;Pe!==se.far&&(se.far=Pe,se.updateProjectionMatrix()),na.setFromMatrixPosition(X.matrixWorld),se.position.copy(na),dc.copy(se.position),dc.add(LS[Ae]),se.up.copy(NS[Ae]),se.lookAt(dc),se.updateMatrixWorld(),Se.makeTranslation(-na.x,-na.y,-na.z),Vf.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Vf,se.coordinateSystem,se.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)t.setRenderTarget(G.map,Ae),t.clear();else{Ae===0&&(t.setRenderTarget(G.map),t.clear());const se=G.getViewport(Ae);a.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),H.viewport(a)}i=G.getFrustum(Ae),b(y,E,Be,X,de,this.type)}G.isPointLightShadow!==!0&&this.type===fa&&v(G,E),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,t.setRenderTarget(k,I,R)};function v(A,y){const E=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new fi(r.x,r.y,{format:Ur,type:pi}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value.set(A.map.width,A.map.height),d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(y,null,E,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(y,null,E,h,_,null)}function S(A,y,E,k){let I=null;const R=E.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(R!==void 0)I=R;else if(I=E.isPointLight===!0?l:o,t.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0||y.alphaToCoverage===!0){const H=I.uuid,B=y.uuid;let C=c[H];C===void 0&&(C={},c[H]=C);let W=C[B];W===void 0&&(W=I.clone(),C[B]=W,y.addEventListener("dispose",T)),I=W}if(I.visible=y.visible,I.wireframe=y.wireframe,k===fa?I.side=y.shadowSide!==null?y.shadowSide:y.side:I.side=y.shadowSide!==null?y.shadowSide:f[y.side],I.alphaMap=y.alphaMap,I.alphaTest=y.alphaToCoverage===!0?.5:y.alphaTest,I.map=y.map,I.clipShadows=y.clipShadows,I.clippingPlanes=y.clippingPlanes,I.clipIntersection=y.clipIntersection,I.displacementMap=y.displacementMap,I.displacementScale=y.displacementScale,I.displacementBias=y.displacementBias,I.wireframeLinewidth=y.wireframeLinewidth,I.linewidth=y.linewidth,E.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const H=t.properties.get(I);H.light=E}return I}function b(A,y,E,k,I,R){if(A.visible===!1)return;if(A.layers.test(I)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&R===fa)&&(!A.frustumCulled||A.intersectsFrustum(i))){A.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,A.matrixWorld);const C=e.update(A),W=A.material;if(Array.isArray(W)){const X=C.groups;for(let G=0,ue=X.length;G<ue;G++){const ne=X[G],oe=W[ne.materialIndex];if(oe&&oe.visible){const de=S(A,oe,k,R);A.onBeforeShadow(t,A,y,E,C,de,ne),t.renderBufferDirect(E,null,C,de,A,ne),A.onAfterShadow(t,A,y,E,C,de,ne)}}}else if(W.visible){const X=S(A,W,k,R);A.onBeforeShadow(t,A,y,E,C,X,null),t.renderBufferDirect(E,null,C,X,A,null),A.onAfterShadow(t,A,y,E,C,X,null)}}const B=A.children;for(let C=0,W=B.length;C<W;C++)b(B[C],y,E,k,I,R)}function T(A){A.target.removeEventListener("dispose",T);for(const E in c){const k=c[E],I=A.target.uuid;I in k&&(k[I].dispose(),delete k[I])}}}function US(t,e){function n(){let P=!1;const ie=new Pt;let q=null;const me=new Pt(0,0,0,0);return{setMask:function(fe){q!==fe&&!P&&(t.colorMask(fe,fe,fe,fe),q=fe)},setLocked:function(fe){P=fe},setClear:function(fe,ge,Ne,$e,ae){ae===!0&&(fe*=$e,ge*=$e,Ne*=$e),ie.set(fe,ge,Ne,$e),me.equals(ie)===!1&&(t.clearColor(fe,ge,Ne,$e),me.copy(ie))},reset:function(){P=!1,q=null,me.set(-1,0,0,0)}}}function i(){let P=!1,ie=!1,q=null,me=null,fe=null;return{setReversed:function(ge){if(ie!==ge){const Ne=e.get("EXT_clip_control");ge?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT),ie=ge;const $e=fe;fe=null,this.setClear($e)}},getReversed:function(){return ie},setTest:function(ge){ge?xe(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(ge){q!==ge&&!P&&(t.depthMask(ge),q=ge)},setFunc:function(ge){if(ie&&(ge=Q0[ge]),me!==ge){switch(ge){case wc:t.depthFunc(t.NEVER);break;case Tc:t.depthFunc(t.ALWAYS);break;case Ac:t.depthFunc(t.LESS);break;case Ta:t.depthFunc(t.LEQUAL);break;case Rc:t.depthFunc(t.EQUAL);break;case Cc:t.depthFunc(t.GEQUAL);break;case Pc:t.depthFunc(t.GREATER);break;case Ic:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}me=ge}},setLocked:function(ge){P=ge},setClear:function(ge){fe!==ge&&(fe=ge,ie&&(ge=1-ge),t.clearDepth(ge))},reset:function(){P=!1,q=null,me=null,fe=null,ie=!1}}}function r(){let P=!1,ie=null,q=null,me=null,fe=null,ge=null,Ne=null,$e=null,ae=null;return{setTest:function(Te){P||(Te?xe(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(Te){ie!==Te&&!P&&(t.stencilMask(Te),ie=Te)},setFunc:function(Te,ce,_e){(q!==Te||me!==ce||fe!==_e)&&(t.stencilFunc(Te,ce,_e),q=Te,me=ce,fe=_e)},setOp:function(Te,ce,_e){(ge!==Te||Ne!==ce||$e!==_e)&&(t.stencilOp(Te,ce,_e),ge=Te,Ne=ce,$e=_e)},setLocked:function(Te){P=Te},setClear:function(Te){ae!==Te&&(t.clearStencil(Te),ae=Te)},reset:function(){P=!1,ie=null,q=null,me=null,fe=null,ge=null,Ne=null,$e=null,ae=null}}}const s=new n,a=new i,o=new r;let l={};const c=new WeakMap;let u={},f={},d={},h=new WeakMap,g=[],_=null,p=!1,m=null,v=null,S=null,b=null,T=null,A=null,y=null,E=new je(0,0,0),k=0,I=!1,R=null,H=null,B=null,C=null,W=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ue=0;const ne=t.getParameter(t.VERSION);ne.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(ne)[1]),G=ue>=1):ne.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),G=ue>=2);let oe=null,de={};const Ae=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),se=new Pt().fromArray(Ae),Se=new Pt().fromArray(Be);function Pe(P,ie,q,me){const fe=new Uint8Array(4),ge=t.createTexture();t.bindTexture(P,ge),t.texParameteri(P,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(P,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<q;Ne++)P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY?t.texImage3D(ie,0,t.RGBA,1,1,me,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ie+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return ge}const Le={};Le[t.TEXTURE_2D]=Pe(t.TEXTURE_2D,t.TEXTURE_2D,1),Le[t.TEXTURE_CUBE_MAP]=Pe(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Le[t.TEXTURE_2D_ARRAY]=Pe(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Le[t.TEXTURE_3D]=Pe(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(t.DEPTH_TEST),a.setFunc(Ta),$t(!1),rt(Hd),xe(t.CULL_FACE),Rt(fs);function xe(P){u[P]!==!0&&(t.enable(P),u[P]=!0)}function He(P){u[P]!==!1&&(t.disable(P),u[P]=!1)}function St(P,ie){return d[P]!==ie?(t.bindFramebuffer(P,ie),d[P]=ie,P===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=ie),P===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=ie),!0):!1}function ze(P,ie){let q=g,me=!1;if(P){q=h.get(ie),q===void 0&&(q=[],h.set(ie,q));const fe=P.textures;if(q.length!==fe.length||q[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,Ne=fe.length;ge<Ne;ge++)q[ge]=t.COLOR_ATTACHMENT0+ge;q.length=fe.length,me=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,me=!0);me&&t.drawBuffers(q)}function Ye(P){return _!==P?(t.useProgram(P),_=P,!0):!1}const ut={[us]:t.FUNC_ADD,[S0]:t.FUNC_SUBTRACT,[M0]:t.FUNC_REVERSE_SUBTRACT};ut[E0]=t.MIN,ut[w0]=t.MAX;const Ze={[T0]:t.ZERO,[A0]:t.ONE,[R0]:t.SRC_COLOR,[up]:t.SRC_ALPHA,[D0]:t.SRC_ALPHA_SATURATE,[L0]:t.DST_COLOR,[P0]:t.DST_ALPHA,[C0]:t.ONE_MINUS_SRC_COLOR,[dp]:t.ONE_MINUS_SRC_ALPHA,[N0]:t.ONE_MINUS_DST_COLOR,[I0]:t.ONE_MINUS_DST_ALPHA,[U0]:t.CONSTANT_COLOR,[k0]:t.ONE_MINUS_CONSTANT_COLOR,[O0]:t.CONSTANT_ALPHA,[F0]:t.ONE_MINUS_CONSTANT_ALPHA};function Rt(P,ie,q,me,fe,ge,Ne,$e,ae,Te){if(P===fs){p===!0&&(He(t.BLEND),p=!1);return}if(p===!1&&(xe(t.BLEND),p=!0),P!==b0){if(P!==m||Te!==I){if((v!==us||T!==us)&&(t.blendEquation(t.FUNC_ADD),v=us,T=us),Te)switch(P){case va:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gd:t.blendFunc(t.ONE,t.ONE);break;case Vd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Wd:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",P);break}else switch(P){case va:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Gd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Vd:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wd:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",P);break}S=null,b=null,A=null,y=null,E.set(0,0,0),k=0,m=P,I=Te}return}fe=fe||ie,ge=ge||q,Ne=Ne||me,(ie!==v||fe!==T)&&(t.blendEquationSeparate(ut[ie],ut[fe]),v=ie,T=fe),(q!==S||me!==b||ge!==A||Ne!==y)&&(t.blendFuncSeparate(Ze[q],Ze[me],Ze[ge],Ze[Ne]),S=q,b=me,A=ge,y=Ne),($e.equals(E)===!1||ae!==k)&&(t.blendColor($e.r,$e.g,$e.b,ae),E.copy($e),k=ae),m=P,I=!1}function wt(P,ie){P.side===zn?He(t.CULL_FACE):xe(t.CULL_FACE);let q=P.side===vn;ie&&(q=!q),$t(q),P.blending===va&&P.transparent===!1?Rt(fs):Rt(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),s.setMask(P.colorWrite);const me=P.stencilWrite;o.setTest(me),me&&(o.setMask(P.stencilWriteMask),o.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),o.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Tt(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function $t(P){R!==P&&(P?t.frontFace(t.CW):t.frontFace(t.CCW),R=P)}function rt(P){P!==v0?(xe(t.CULL_FACE),P!==H&&(P===Hd?t.cullFace(t.BACK):P===x0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),H=P}function Yt(P){P!==B&&(G&&t.lineWidth(P),B=P)}function Tt(P,ie,q){P?(xe(t.POLYGON_OFFSET_FILL),(C!==ie||W!==q)&&(C=ie,W=q,a.getReversed()&&(ie=-ie,q=-q),t.polygonOffset(ie,q))):He(t.POLYGON_OFFSET_FILL)}function Dt(P){P?xe(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function tn(P){P===void 0&&(P=t.TEXTURE0+X-1),oe!==P&&(t.activeTexture(P),oe=P)}function Ie(P,ie,q){q===void 0&&(oe===null?q=t.TEXTURE0+X-1:q=oe);let me=de[q];me===void 0&&(me={type:void 0,texture:void 0},de[q]=me),(me.type!==P||me.texture!==ie)&&(oe!==q&&(t.activeTexture(q),oe=q),t.bindTexture(P,ie||Le[P]),me.type=P,me.texture=ie)}function F(){const P=de[oe];P!==void 0&&P.type!==void 0&&(t.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function Ut(){try{t.compressedTexImage2D(...arguments)}catch(P){ft("WebGLState:",P)}}function st(){try{t.compressedTexImage3D(...arguments)}catch(P){ft("WebGLState:",P)}}function at(){try{t.texSubImage2D(...arguments)}catch(P){ft("WebGLState:",P)}}function pe(){try{t.texSubImage3D(...arguments)}catch(P){ft("WebGLState:",P)}}function N(){try{t.compressedTexSubImage2D(...arguments)}catch(P){ft("WebGLState:",P)}}function z(){try{t.compressedTexSubImage3D(...arguments)}catch(P){ft("WebGLState:",P)}}function Y(){try{t.texStorage2D(...arguments)}catch(P){ft("WebGLState:",P)}}function M(){try{t.texStorage3D(...arguments)}catch(P){ft("WebGLState:",P)}}function x(){try{t.texImage2D(...arguments)}catch(P){ft("WebGLState:",P)}}function U(){try{t.texImage3D(...arguments)}catch(P){ft("WebGLState:",P)}}function K(P){return f[P]!==void 0?f[P]:t.getParameter(P)}function L(P,ie){f[P]!==ie&&(t.pixelStorei(P,ie),f[P]=ie)}function J(P){se.equals(P)===!1&&(t.scissor(P.x,P.y,P.z,P.w),se.copy(P))}function $(P){Se.equals(P)===!1&&(t.viewport(P.x,P.y,P.z,P.w),Se.copy(P))}function V(P,ie){let q=c.get(ie);q===void 0&&(q=new WeakMap,c.set(ie,q));let me=q.get(P);me===void 0&&(me=t.getUniformBlockIndex(ie,P.name),t.uniformBlockBinding(ie,me,me),q.set(P,me))}function Q(P,ie,q){const fe=c.get(ie).get(P);l[fe]!==q&&(t.bindBufferBase(t.UNIFORM_BUFFER,fe,q),l[fe]=q)}function he(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),u={},f={},oe=null,de={},d={},l={},h=new WeakMap,g=[],_=null,p=!1,m=null,v=null,S=null,b=null,T=null,A=null,y=null,E=new je(0,0,0),k=0,I=!1,R=null,H=null,B=null,C=null,W=null,se.set(0,0,t.canvas.width,t.canvas.height),Se.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:xe,disable:He,bindFramebuffer:St,drawBuffers:ze,useProgram:Ye,setBlending:Rt,setMaterial:wt,setFlipSided:$t,setCullFace:rt,setLineWidth:Yt,setPolygonOffset:Tt,setScissorTest:Dt,activeTexture:tn,bindTexture:Ie,unbindTexture:F,compressedTexImage2D:Ut,compressedTexImage3D:st,texImage2D:x,texImage3D:U,pixelStorei:L,getParameter:K,updateUBOMapping:V,uniformBlockBinding:Q,texStorage2D:Y,texStorage3D:M,texSubImage2D:at,texSubImage3D:pe,compressedTexSubImage2D:N,compressedTexSubImage3D:z,scissor:J,viewport:$,reset:he}}function kS(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,u=new WeakMap,f=new Set;let d;const h=new WeakMap,g=new Set,_=new FinalizationRegistry(M=>g.delete(M));let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(M,x){return p?new OffscreenCanvas(M,x):nl("canvas")}function v(M,x,U){let K=1;const L=Y(M);if((L.width>U||L.height>U)&&(K=U/Math.max(L.width,L.height)),K<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const J=Math.floor(K*L.width),$=Math.floor(K*L.height);d===void 0&&(d=m(J,$));const V=x?m(J,$):d;return V.width=J,V.height=$,V.getContext("2d").drawImage(M,0,0,J,$),Ge("WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+J+"x"+$+")."),V}else return"data"in M&&Ge("WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),M;return M}function S(M){return M.generateMipmaps}function b(M){t.generateMipmap(M)}function T(M){return M.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:M.isWebGL3DRenderTarget?t.TEXTURE_3D:M.isWebGLArrayRenderTarget||M.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function A(M,x,U,K,L,J=!1){if(M!==null){if(t[M]!==void 0)return t[M];Ge("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let $;K&&($=e.get("EXT_texture_norm16"),$||Ge("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let V=x;if(x===t.RED&&(U===t.FLOAT&&(V=t.R32F),U===t.HALF_FLOAT&&(V=t.R16F),U===t.UNSIGNED_BYTE&&(V=t.R8),U===t.UNSIGNED_SHORT&&$&&(V=$.R16_EXT),U===t.SHORT&&$&&(V=$.R16_SNORM_EXT)),x===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.R8UI),U===t.UNSIGNED_SHORT&&(V=t.R16UI),U===t.UNSIGNED_INT&&(V=t.R32UI),U===t.BYTE&&(V=t.R8I),U===t.SHORT&&(V=t.R16I),U===t.INT&&(V=t.R32I)),x===t.RG&&(U===t.FLOAT&&(V=t.RG32F),U===t.HALF_FLOAT&&(V=t.RG16F),U===t.UNSIGNED_BYTE&&(V=t.RG8),U===t.UNSIGNED_SHORT&&$&&(V=$.RG16_EXT),U===t.SHORT&&$&&(V=$.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RG8UI),U===t.UNSIGNED_SHORT&&(V=t.RG16UI),U===t.UNSIGNED_INT&&(V=t.RG32UI),U===t.BYTE&&(V=t.RG8I),U===t.SHORT&&(V=t.RG16I),U===t.INT&&(V=t.RG32I)),x===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGB8UI),U===t.UNSIGNED_SHORT&&(V=t.RGB16UI),U===t.UNSIGNED_INT&&(V=t.RGB32UI),U===t.BYTE&&(V=t.RGB8I),U===t.SHORT&&(V=t.RGB16I),U===t.INT&&(V=t.RGB32I)),x===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(V=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(V=t.RGBA16UI),U===t.UNSIGNED_INT&&(V=t.RGBA32UI),U===t.BYTE&&(V=t.RGBA8I),U===t.SHORT&&(V=t.RGBA16I),U===t.INT&&(V=t.RGBA32I)),x===t.RGB&&(U===t.UNSIGNED_SHORT&&$&&(V=$.RGB16_EXT),U===t.SHORT&&$&&(V=$.RGB16_SNORM_EXT),U===t.UNSIGNED_INT_5_9_9_9_REV&&(V=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(V=t.R11F_G11F_B10F)),x===t.RGBA){const Q=J?tl:ct.getTransfer(L);U===t.FLOAT&&(V=t.RGBA32F),U===t.HALF_FLOAT&&(V=t.RGBA16F),U===t.UNSIGNED_BYTE&&(V=Q===pt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT&&$&&(V=$.RGBA16_EXT),U===t.SHORT&&$&&(V=$.RGBA16_SNORM_EXT),U===t.UNSIGNED_SHORT_4_4_4_4&&(V=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(V=t.RGB5_A1)}return(V===t.R16F||V===t.R32F||V===t.RG16F||V===t.RG32F||V===t.RGBA16F||V===t.RGBA32F)&&e.get("EXT_color_buffer_float"),V}function y(M,x){let U;return M?x===null||x===hi||x===bs?U=t.DEPTH24_STENCIL8:x===Jn?U=t.DEPTH32F_STENCIL8:x===Ra&&(U=t.DEPTH24_STENCIL8,Ge("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===hi||x===bs?U=t.DEPTH_COMPONENT24:x===Jn?U=t.DEPTH_COMPONENT32F:x===Ra&&(U=t.DEPTH_COMPONENT16),U}function E(M,x){return S(M)===!0||M.isFramebufferTexture&&M.minFilter!==rn&&M.minFilter!==Mn?Math.log2(Math.max(x.width,x.height))+1:M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?x.mipmaps.length:1}function k(M){const x=new WeakRef(M);i.get(M).__ref=x,g.add(x),_.register(M,x,x)}function I(M){const x=i.get(M).__ref;x!==void 0&&(g.delete(x),_.unregister(x))}function R(M){B(M.target)}function H(M){C(M.target)}function B(M){M.removeEventListener("dispose",R),I(M),X(M),M.isVideoTexture&&u.delete(M),M.isHTMLTexture&&f.delete(M)}function C(M){M.removeEventListener("dispose",H),I(M),ue(M)}function W(){for(const M of g){const x=M.deref();x!==void 0&&(x.isRenderTarget===!0?C(x):B(x))}g.clear(),f.clear()}function X(M){const x=i.get(M);if(x.__webglInit===void 0)return;const U=M.source,K=h.get(U);if(K){const L=K[x.__cacheKey];L.usedTimes--,L.usedTimes===0&&G(M),Object.keys(K).length===0&&h.delete(U)}i.remove(M)}function G(M){const x=i.get(M);t.deleteTexture(x.__webglTexture);const U=M.source,K=h.get(U);delete K[x.__cacheKey],a.memory.textures--}function ue(M){const x=i.get(M);x.__depthDisposeCallback&&x.__depthDisposeCallback();const U=M.depthTexture;if(U&&U.renderTarget===M&&B(U),M.isWebGLCubeRenderTarget)for(let L=0;L<6;L++){if(Array.isArray(x.__webglFramebuffer[L]))for(let J=0;J<x.__webglFramebuffer[L].length;J++)t.deleteFramebuffer(x.__webglFramebuffer[L][J]);else t.deleteFramebuffer(x.__webglFramebuffer[L]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[L])}else{if(Array.isArray(x.__webglFramebuffer))for(let L=0;L<x.__webglFramebuffer.length;L++)t.deleteFramebuffer(x.__webglFramebuffer[L]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let L=0;L<x.__webglColorRenderbuffer.length;L++)x.__webglColorRenderbuffer[L]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[L]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const K=M.textures;for(let L=0,J=K.length;L<J;L++){const $=i.get(K[L]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),a.memory.textures--),i.remove(K[L])}i.remove(M)}let ne=0;function oe(){ne=0}function de(){return ne}function Ae(M){ne=M}function Be(){const M=ne;return M>=r.maxTextures&&Ge("WebGLTextures: Trying to use "+(M+1)+" texture units while this GPU supports only "+r.maxTextures),ne+=1,M}function se(M){const x=[];return x.push(M.wrapS),x.push(M.wrapT),x.push(M.wrapR||0),x.push(M.magFilter),x.push(M.minFilter),x.push(M.anisotropy),x.push(M.internalFormat),x.push(M.format),x.push(M.type),x.push(M.generateMipmaps),x.push(M.mipmapsAutoUpdate),x.push(M.premultiplyAlpha),x.push(M.flipY),x.push(M.unpackAlignment),x.push(M.colorSpace),x.join()}function Se(M,x){const U=i.get(M);if(M.isVideoTexture&&N(M),M.isRenderTargetTexture===!1&&M.isExternalTexture!==!0&&M.version>0&&U.__version!==M.version){const K=M.image;if(K===null)Ge("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ge("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(U,M,x);return}}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+x)}function Pe(M,x){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){wt(U,M,x);return}else M.isExternalTexture&&(U.__webglTexture=M.sourceTexture?M.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+x)}function Le(M,x){const U=i.get(M);if(M.isRenderTargetTexture===!1&&M.version>0&&U.__version!==M.version){wt(U,M,x);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+x)}function xe(M,x){const U=i.get(M);if(M.version>0&&U.__version!==M.version){$t(U,M,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+x)}const He={[Ko]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[Lc]:t.MIRRORED_REPEAT},St={[rn]:t.NEAREST,[$0]:t.NEAREST_MIPMAP_NEAREST,[Ya]:t.NEAREST_MIPMAP_LINEAR,[Mn]:t.LINEAR,[zl]:t.LINEAR_MIPMAP_NEAREST,[Ji]:t.LINEAR_MIPMAP_LINEAR},ze={[W0]:t.NEVER,[Rp]:t.ALWAYS,[X0]:t.LESS,[Tp]:t.LEQUAL,[Z0]:t.EQUAL,[Ap]:t.GEQUAL,[q0]:t.GREATER,[j0]:t.NOTEQUAL};function Ye(M,x){if(x.type===Jn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Mn||x.magFilter===zl||x.magFilter===Ya||x.magFilter===Ji||x.minFilter===Mn||x.minFilter===zl||x.minFilter===Ya||x.minFilter===Ji)&&Ge("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(M,t.TEXTURE_WRAP_S,He[x.wrapS]),t.texParameteri(M,t.TEXTURE_WRAP_T,He[x.wrapT]),(M===t.TEXTURE_3D||M===t.TEXTURE_2D_ARRAY)&&t.texParameteri(M,t.TEXTURE_WRAP_R,He[x.wrapR]),t.texParameteri(M,t.TEXTURE_MAG_FILTER,St[x.magFilter]),t.texParameteri(M,t.TEXTURE_MIN_FILTER,St[x.minFilter]),x.compareFunction&&(t.texParameteri(M,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(M,t.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===rn||x.minFilter!==Ya&&x.minFilter!==Ji||x.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(M,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function ut(M,x){let U=!1;M.__webglInit===void 0&&(M.__webglInit=!0,x.addEventListener("dispose",R),k(x));const K=x.source;let L=h.get(K);L===void 0&&(L={},h.set(K,L));const J=se(x);if(J!==M.__cacheKey){L[J]===void 0&&(L[J]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,U=!0),L[J].usedTimes++;const $=L[M.__cacheKey];$!==void 0&&(L[M.__cacheKey].usedTimes--,$.usedTimes===0&&G(x)),M.__cacheKey=J,M.__webglTexture=L[J].texture}return U}function Ze(M,x,U){return Math.floor(Math.floor(M/U)/x)}function Rt(M,x,U,K){const J=M.updateRanges;if(J.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,U,K,x.data);else{J.sort((P,ie)=>P.start-ie.start);let $=0;for(let P=1;P<J.length;P++){const ie=J[$],q=J[P],me=ie.start+ie.count,fe=Ze(q.start,x.width,4),ge=Ze(ie.start,x.width,4);q.start<=me+1&&fe===ge&&Ze(q.start+q.count-1,x.width,4)===fe?ie.count=Math.max(ie.count,q.start+q.count-ie.start):(++$,J[$]=q)}J.length=$+1;const V=n.getParameter(t.UNPACK_ROW_LENGTH),Q=n.getParameter(t.UNPACK_SKIP_PIXELS),he=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let P=0,ie=J.length;P<ie;P++){const q=J[P],me=Math.floor(q.start/4),fe=Math.ceil(q.count/4),ge=me%x.width,Ne=Math.floor(me/x.width),$e=fe,ae=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ne),n.texSubImage2D(t.TEXTURE_2D,0,ge,Ne,$e,ae,U,K,x.data)}M.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,V),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Q),n.pixelStorei(t.UNPACK_SKIP_ROWS,he)}}function wt(M,x,U){let K=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=t.TEXTURE_3D);const L=ut(M,x),J=x.source;n.bindTexture(K,M.__webglTexture,t.TEXTURE0+U);const $=i.get(J);if(J.version!==$.__version||L===!0){if(n.activeTexture(t.TEXTURE0+U),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){const ae=ct.getPrimaries(ct.workingColorSpace),Te=x.colorSpace===Yi?null:ct.getPrimaries(x.colorSpace),ce=x.colorSpace===Yi||ae===Te?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let Q=v(x.image,!1,r.maxTextureSize);Q=z(x,Q);const he=s.convert(x.format,x.colorSpace),P=s.convert(x.type);let ie=A(x.internalFormat,he,P,x.normalized,x.colorSpace,x.isVideoTexture);Ye(K,x);let q;const me=x.mipmaps,fe=x.isVideoTexture!==!0,ge=$.__version===void 0||L===!0,Ne=J.dataReady,$e=E(x,Q);if(x.isDepthTexture)ie=y(x.format===Qi,x.type),ge&&(fe?n.texStorage2D(t.TEXTURE_2D,1,ie,Q.width,Q.height):n.texImage2D(t.TEXTURE_2D,0,ie,Q.width,Q.height,0,he,P,null));else if(x.isDataTexture)if(me.length>0){fe&&ge&&n.texStorage2D(t.TEXTURE_2D,$e,ie,me[0].width,me[0].height);for(let ae=0,Te=me.length;ae<Te;ae++)q=me[ae],fe?Ne&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,q.width,q.height,he,P,q.data):n.texImage2D(t.TEXTURE_2D,ae,ie,q.width,q.height,0,he,P,q.data);x.generateMipmaps=!1}else fe?(ge&&n.texStorage2D(t.TEXTURE_2D,$e,ie,Q.width,Q.height),Ne&&Rt(x,Q,he,P)):n.texImage2D(t.TEXTURE_2D,0,ie,Q.width,Q.height,0,he,P,Q.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){fe&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$e,ie,me[0].width,me[0].height,Q.depth);for(let ae=0,Te=me.length;ae<Te;ae++)if(q=me[ae],x.format!==ci)if(he!==null)if(fe){if(Ne)if(x.layerUpdates.size>0){const ce=Mf(q.width,q.height,x.format,x.type);for(const _e of x.layerUpdates){const ot=q.data.subarray(_e*ce/q.data.BYTES_PER_ELEMENT,(_e+1)*ce/q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,_e,q.width,q.height,1,he,ot)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,q.width,q.height,Q.depth,he,q.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,ie,q.width,q.height,Q.depth,0,q.data,0,0);else Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?Ne&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,q.width,q.height,Q.depth,he,P,q.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,ie,q.width,q.height,Q.depth,0,he,P,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{fe&&ge&&n.texStorage2D(t.TEXTURE_2D,$e,ie,me[0].width,me[0].height);for(let ae=0,Te=me.length;ae<Te;ae++)q=me[ae],x.format!==ci?he!==null?fe?Ne&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,q.width,q.height,he,q.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,ie,q.width,q.height,0,q.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?Ne&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,q.width,q.height,he,P,q.data):n.texImage2D(t.TEXTURE_2D,ae,ie,q.width,q.height,0,he,P,q.data)}else if(x.isDataArrayTexture)if(fe){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,$e,ie,Q.width,Q.height,Q.depth),Ne)if(x.layerUpdates.size>0){const ae=Mf(Q.width,Q.height,x.format,x.type);for(const Te of x.layerUpdates){const ce=Q.data.subarray(Te*ae/Q.data.BYTES_PER_ELEMENT,(Te+1)*ae/Q.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Te,Q.width,Q.height,1,he,P,ce)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,P,Q.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ie,Q.width,Q.height,Q.depth,0,he,P,Q.data);else if(x.isData3DTexture)fe?(ge&&n.texStorage3D(t.TEXTURE_3D,$e,ie,Q.width,Q.height,Q.depth),Ne&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,P,Q.data)):n.texImage3D(t.TEXTURE_3D,0,ie,Q.width,Q.height,Q.depth,0,he,P,Q.data);else if(x.isFramebufferTexture){if(ge)if(fe)n.texStorage2D(t.TEXTURE_2D,$e,ie,Q.width,Q.height);else{let ae=Q.width,Te=Q.height;for(let ce=0;ce<$e;ce++)n.texImage2D(t.TEXTURE_2D,ce,ie,ae,Te,0,he,P,null),ae>>=1,Te>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){const ae=t.canvas;if(ae.hasAttribute("layoutsubtree")||ae.setAttribute("layoutsubtree","true"),Q.parentNode!==ae){ae.appendChild(Q),f.add(x),ae.onpaint=Te=>{const ce=Te.changedElements;for(const _e of f)ce.includes(_e.image)&&(_e.needsUpdate=!0)},ae.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,Q);else{const ce=t.RGBA,_e=t.RGBA,ot=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,ce,_e,ot,Q)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(me.length>0){if(fe&&ge){const ae=Y(me[0]);n.texStorage2D(t.TEXTURE_2D,$e,ie,ae.width,ae.height)}for(let ae=0,Te=me.length;ae<Te;ae++)q=me[ae],fe?Ne&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,he,P,q):n.texImage2D(t.TEXTURE_2D,ae,ie,he,P,q);x.generateMipmaps=!1}else if(fe){if(ge){const ae=Y(Q);n.texStorage2D(t.TEXTURE_2D,$e,ie,ae.width,ae.height)}Ne&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,he,P,Q)}else n.texImage2D(t.TEXTURE_2D,0,ie,he,P,Q);S(x)&&x.mipmapsAutoUpdate===!0&&b(K),$.__version=J.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function $t(M,x,U){if(x.image.length!==6)return;const K=ut(M,x),L=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,M.__webglTexture,t.TEXTURE0+U);const J=i.get(L);if(L.version!==J.__version||K===!0){n.activeTexture(t.TEXTURE0+U);const $=ct.getPrimaries(ct.workingColorSpace),V=x.colorSpace===Yi?null:ct.getPrimaries(x.colorSpace),Q=x.colorSpace===Yi||$===V?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Q);const he=x.isCompressedTexture||x.image[0].isCompressedTexture,P=x.image[0]&&x.image[0].isDataTexture,ie=[];for(let _e=0;_e<6;_e++)!he&&!P?ie[_e]=v(x.image[_e],!0,r.maxCubemapSize):ie[_e]=P?x.image[_e].image:x.image[_e],ie[_e]=z(x,ie[_e]);const q=ie[0],me=s.convert(x.format,x.colorSpace),fe=s.convert(x.type);let ge=A(x.internalFormat,me,fe,x.normalized,x.colorSpace);const Ne=x.isVideoTexture!==!0,$e=J.__version===void 0||K===!0,ae=L.dataReady;let Te=E(x,q);Ye(t.TEXTURE_CUBE_MAP,x);let ce;if(x.isDepthTexture){if(ge=y(x.format===Qi,x.type),$e)if(Ne)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ge,q.width,q.height);else for(let _e=0;_e<6;_e++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ge,q.width,q.height,0,me,fe,null)}else if(he){Ne&&$e&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,ge,q.width,q.height);for(let _e=0;_e<6;_e++){ce=ie[_e].mipmaps;for(let ot=0;ot<ce.length;ot++){const yt=ce[ot];x.format!==ci?me!==null?Ne?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,0,0,yt.width,yt.height,me,yt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,ge,yt.width,yt.height,0,yt.data):Ge("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,0,0,yt.width,yt.height,me,fe,yt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot,ge,yt.width,yt.height,0,me,fe,yt.data)}}}else{if(ce=x.mipmaps,Ne&&$e){ce.length>0&&Te++;const _e=Y(ie[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Te,ge,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(P){Ne?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,ie[_e].width,ie[_e].height,me,fe,ie[_e].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ge,ie[_e].width,ie[_e].height,0,me,fe,ie[_e].data);for(let ot=0;ot<ce.length;ot++){const Wn=ce[ot].image[_e].image;Ne?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,0,0,Wn.width,Wn.height,me,fe,Wn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,ge,Wn.width,Wn.height,0,me,fe,Wn.data)}}else{Ne?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,me,fe,ie[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ge,me,fe,ie[_e]);for(let ot=0;ot<ce.length;ot++){const yt=ce[ot];Ne?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,0,0,me,fe,yt.image[_e]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+_e,ot+1,ge,me,fe,yt.image[_e])}}}S(x)&&x.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),J.__version=L.version,x.onUpdate&&x.onUpdate(x)}M.__version=x.version}function rt(M,x,U,K,L,J){const $=s.convert(U.format,U.colorSpace),V=s.convert(U.type),Q=A(U.internalFormat,$,V,U.normalized,U.colorSpace),he=i.get(x),P=i.get(U);if(P.__renderTarget=x,!he.__hasExternalTextures){const ie=Math.max(1,x.width>>J),q=Math.max(1,x.height>>J);L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY?n.texImage3D(L,J,Q,ie,q,x.depth,0,$,V,null):n.texImage2D(L,J,Q,ie,q,0,$,V,null)}n.bindFramebuffer(t.FRAMEBUFFER,M),pe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,L,P.__webglTexture,0,at(x)):(L===t.TEXTURE_2D||L>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,L,P.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Yt(M,x,U){if(t.bindRenderbuffer(t.RENDERBUFFER,M),x.depthBuffer){const K=x.depthTexture,L=K&&K.isDepthTexture?K.type:null,J=y(x.stencilBuffer,L),$=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(x),J,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(x),J,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,J,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,M)}else{const K=x.textures;for(let L=0;L<K.length;L++){const J=K[L],$=s.convert(J.format,J.colorSpace),V=s.convert(J.type),Q=A(J.internalFormat,$,V,J.normalized,J.colorSpace);pe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,at(x),Q,x.width,x.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,at(x),Q,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,Q,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Tt(M,x,U){const K=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,M),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const L=i.get(x.depthTexture);L.__renderTarget=x;const J=K?x.depthTexture.image[0]:x.depthTexture.image;(!L.__webglTexture||J.width!==x.width||J.height!==x.height)&&(J.width=x.width,J.height=x.height,x.depthTexture.needsUpdate=!0),K?xe(x.depthTexture,0):Se(x.depthTexture,0);const $=L.__webglTexture,V=at(x),Q=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,he=x.depthTexture.format===Qi?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===ar)pe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,Q,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,he,Q,$,0);else if(x.depthTexture.format===Qi)pe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,he,Q,$,0,V):t.framebufferTexture2D(t.FRAMEBUFFER,he,Q,$,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Dt(M){const x=i.get(M),U=M.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==M.depthTexture){const K=M.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const L=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",L)};K.addEventListener("dispose",L),x.__depthDisposeCallback=L}x.__boundDepthTexture=K}if(M.depthTexture&&!x.__autoAllocateDepthBuffer)if(U)for(let K=0;K<6;K++)Tt(x.__webglFramebuffer[K],M,K);else M.texture.mipmaps.length>0?Tt(x.__webglFramebuffer[0],M,0):Tt(x.__webglFramebuffer,M,0);else if(U){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=t.createRenderbuffer(),Yt(x.__webglDepthbuffer[K],M,!1);else{const L=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,J)}}else if(M.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Yt(x.__webglDepthbuffer,M,!1);else{const L=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,L,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function tn(M,x,U){const K=i.get(M);x!==void 0&&rt(K.__webglFramebuffer,M,M.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Dt(M)}function Ie(M){const x=M.texture,U=i.get(M),K=i.get(x);M.addEventListener("dispose",H),k(M);const L=M.textures,J=M.isWebGLCubeRenderTarget===!0,$=L.length>1;if($||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=x.version,a.memory.textures++),J){U.__webglFramebuffer=[];for(let V=0;V<6;V++)if(x.mipmaps.length>0){U.__webglFramebuffer[V]=[];for(let Q=0;Q<x.mipmaps.length;Q++)U.__webglFramebuffer[V][Q]=t.createFramebuffer()}else U.__webglFramebuffer[V]=t.createFramebuffer()}else{if(x.mipmaps.length>0){U.__webglFramebuffer=[];for(let V=0;V<x.mipmaps.length;V++)U.__webglFramebuffer[V]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if($)for(let V=0,Q=L.length;V<Q;V++){const he=i.get(L[V]);he.__webglTexture===void 0&&(he.__webglTexture=t.createTexture(),a.memory.textures++)}if(M.samples>0&&pe(M)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let V=0;V<L.length;V++){const Q=L[V];U.__webglColorRenderbuffer[V]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[V]);const he=s.convert(Q.format,Q.colorSpace),P=s.convert(Q.type),ie=A(Q.internalFormat,he,P,Q.normalized,Q.colorSpace,M.isXRRenderTarget===!0),q=at(M);t.renderbufferStorageMultisample(t.RENDERBUFFER,q,ie,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+V,t.RENDERBUFFER,U.__webglColorRenderbuffer[V])}t.bindRenderbuffer(t.RENDERBUFFER,null),M.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Yt(U.__webglDepthRenderbuffer,M,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Ye(t.TEXTURE_CUBE_MAP,x);for(let V=0;V<6;V++)if(x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)rt(U.__webglFramebuffer[V][Q],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,Q);else rt(U.__webglFramebuffer[V],M,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+V,0);S(x)?b(t.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}else if($){for(let V=0,Q=L.length;V<Q;V++){const he=L[V],P=i.get(he);let ie=t.TEXTURE_2D;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(ie=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ie,P.__webglTexture),Ye(ie,he),rt(U.__webglFramebuffer,M,he,t.COLOR_ATTACHMENT0+V,ie,0),S(he)&&b(ie)}n.unbindTexture()}else{let V=t.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(V=M.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(V,K.__webglTexture),Ye(V,x),x.mipmaps.length>0)for(let Q=0;Q<x.mipmaps.length;Q++)rt(U.__webglFramebuffer[Q],M,x,t.COLOR_ATTACHMENT0,V,Q);else rt(U.__webglFramebuffer,M,x,t.COLOR_ATTACHMENT0,V,0);S(x)?b(V):x.mipmaps.length>0&&t.texParameteri(V,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}M.depthBuffer&&Dt(M)}function F(M){const x=M.textures;for(let U=0,K=x.length;U<K;U++){const L=x[U];if(S(L)&&L.mipmapsAutoUpdate===!0){const J=T(M),$=i.get(L).__webglTexture;n.bindTexture(J,$),b(J),n.unbindTexture()}}}const Ut=[];function st(M){if(M.samples>0){if(pe(M)===!1){const x=M.textures,U=M.width,K=M.height;let L=t.COLOR_BUFFER_BIT;const J=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=i.get(M),V=x.length>1;if(V)for(let he=0;he<x.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,$.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,$.__webglMultisampledFramebuffer),M.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,$.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,$.__webglFramebuffer);for(let he=0;he<x.length;he++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(L|=t.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(L|=t.STENCIL_BUFFER_BIT)),V){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,$.__webglColorRenderbuffer[he]);const P=i.get(x[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,P,0)}t.blitFramebuffer(0,0,U,K,0,0,U,K,L,t.NEAREST),l===!0&&(Ut.length=0,Ut.push(t.COLOR_ATTACHMENT0+he),M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&Ut.push(J),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ut))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),V)for(let he=0;he<x.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,$.__webglColorRenderbuffer[he]);const P=i.get(x[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,$.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,P,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,$.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.storeMultisampledDepthBuffer===!1&&l){const x=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function at(M){return Math.min(r.maxSamples,M.samples)}function pe(M){const x=i.get(M);return M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function N(M){const x=a.render.frame;u.get(M)!==x&&(u.set(M,x),M.update())}function z(M,x){const U=M.colorSpace,K=M.format,L=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||U!==el&&U!==Yi&&(ct.getTransfer(U)===pt?(K!==ci||L!==In)&&Ge("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",U)),x}function Y(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(c.width=M.naturalWidth||M.width,c.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(c.width=M.displayWidth,c.height=M.displayHeight):(c.width=M.width,c.height=M.height),c}this.allocateTextureUnit=Be,this.resetTextureUnits=oe,this.getTextureUnits=de,this.setTextureUnits=Ae,this.setTexture2D=Se,this.setTexture2DArray=Pe,this.setTexture3D=Le,this.setTextureCube=xe,this.rebindTextures=tn,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=st,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=pe,this.dispose=W}function OS(t,e){function n(i,r=Yi){let s;const a=ct.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===zu)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bu)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Sp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mp)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===yp)return t.BYTE;if(i===bp)return t.SHORT;if(i===Ra)return t.UNSIGNED_SHORT;if(i===Fu)return t.INT;if(i===hi)return t.UNSIGNED_INT;if(i===Jn)return t.FLOAT;if(i===pi)return t.HALF_FLOAT;if(i===Ep)return t.ALPHA;if(i===wp)return t.RGB;if(i===ci)return t.RGBA;if(i===ar)return t.DEPTH_COMPONENT;if(i===Qi)return t.DEPTH_STENCIL;if(i===$u)return t.RED;if(i===Hu)return t.RED_INTEGER;if(i===Ur)return t.RG;if(i===Gu)return t.RG_INTEGER;if(i===Vu)return t.RGBA_INTEGER;if(i===No||i===Do||i===Uo||i===ko)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===No)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===No)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nc||i===Dc||i===Uc||i===kc)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Dc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===kc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Oc||i===Fc||i===zc||i===Bc||i===$c||i===Jo||i===Hc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Oc||i===Fc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Bc)return s.COMPRESSED_R11_EAC;if(i===$c)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Jo)return s.COMPRESSED_RG11_EAC;if(i===Hc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Gc||i===Vc||i===Wc||i===Xc||i===Zc||i===qc||i===jc||i===Yc||i===Kc||i===Jc||i===Qc||i===eu||i===tu||i===nu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Yc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Jc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===eu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===tu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===nu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===iu||i===ru||i===su)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===iu)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ru)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===su)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===au||i===ou||i===Qo||i===lu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===au)return s.COMPRESSED_RED_RGTC1_EXT;if(i===ou)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qo)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===lu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===bs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zS=`
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

}`;class BS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new $p(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new kr({vertexShader:FS,fragmentShader:zS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new _t(new Cr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $S extends zr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",p=new BS,m={},v=n.getContextAttributes();let S=null,b=null;const T=[],A=[],y=new Xe;let E=null,k=null;const I=new Fn;I.viewport=new Pt;const R=new Fn;R.viewport=new Pt;const H=[I,R],B=new Q_;let C=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(se){let Se=T[se];return Se===void 0&&(Se=new Xl,T[se]=Se),Se.getTargetRaySpace()},this.getControllerGrip=function(se){let Se=T[se];return Se===void 0&&(Se=new Xl,T[se]=Se),Se.getGripSpace()},this.getHand=function(se){let Se=T[se];return Se===void 0&&(Se=new Xl,T[se]=Se),Se.getHandSpace()};function X(se){const Se=A.indexOf(se.inputSource);if(Se===-1)return;const Pe=T[Se];Pe!==void 0&&(Pe.update(se.inputSource,se.frame,c||a),Pe.dispatchEvent({type:se.type,data:se.inputSource}))}function G(){r.removeEventListener("select",X),r.removeEventListener("selectstart",X),r.removeEventListener("selectend",X),r.removeEventListener("squeeze",X),r.removeEventListener("squeezestart",X),r.removeEventListener("squeezeend",X),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",ue);for(let se=0;se<T.length;se++){const Se=A[se];Se!==null&&(A[se]=null,T[se].disconnect(Se))}C=null,W=null,p.reset();for(const se in m)delete m[se];if(e.setRenderTarget(S),h=null,d=null,f=null,r=null,b=null,Be.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(y.width,y.height,!1),k!==null){const se=k.camera;se.fov=k.fov,se.zoom=k.zoom,se.updateProjectionMatrix(),k=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(se){s=se,i.isPresenting===!0&&Ge("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(se){o=se,i.isPresenting===!0&&Ge("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(se){c=se},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(r,n)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(se){if(r=se,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",X),r.addEventListener("selectstart",X),r.addEventListener("selectend",X),r.addEventListener("squeeze",X),r.addEventListener("squeezestart",X),r.addEventListener("squeezeend",X),r.addEventListener("end",G),r.addEventListener("inputsourceschange",ue),v.xrCompatible!==!0&&await n.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(y),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Le=null,xe=null;v.depth&&(xe=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Pe=v.stencil?Qi:ar,Le=v.stencil?bs:hi);const He={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(He),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new fi(d.textureWidth,d.textureHeight,{format:ci,type:In,depthTexture:new Ss(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const Pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,Pe),r.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),b=new fi(h.framebufferWidth,h.framebufferHeight,{format:ci,type:In,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Be.setContext(r),Be.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ue(se){for(let Se=0;Se<se.removed.length;Se++){const Pe=se.removed[Se],Le=A.indexOf(Pe);Le>=0&&(A[Le]=null,T[Le].disconnect(Pe))}for(let Se=0;Se<se.added.length;Se++){const Pe=se.added[Se];let Le=A.indexOf(Pe);if(Le===-1){for(let He=0;He<T.length;He++)if(He>=A.length){A.push(Pe),Le=He;break}else if(A[He]===null){A[He]=Pe,Le=He;break}if(Le===-1)break}const xe=T[Le];xe&&xe.connect(Pe)}}function ne(se,Se){Se===null?se.matrixWorld.copy(se.matrix):se.matrixWorld.multiplyMatrices(Se.matrixWorld,se.matrix),se.matrixWorldInverse.copy(se.matrixWorld).invert()}this.updateCamera=function(se){if(r===null)return;let Se=se.near,Pe=se.far;p.texture!==null&&(p.depthNear>0&&(Se=p.depthNear),p.depthFar>0&&(Pe=p.depthFar)),B.near=R.near=I.near=Se,B.far=R.far=I.far=Pe,(C!==B.near||W!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),C=B.near,W=B.far),B.layers.mask=se.layers.mask|6,I.layers.mask=B.layers.mask&-5,R.layers.mask=B.layers.mask&-3;const Le=se.parent,xe=B.cameras;ne(B,Le);for(let He=0;He<xe.length;He++)ne(xe[He],Le);B.projectionMatrix.copy(I.projectionMatrix),B.projectionMatrixInverse.copy(I.projectionMatrixInverse),k===null&&se.isPerspectiveCamera&&(k={camera:se,fov:se.fov,zoom:se.zoom}),oe(se,B,Le)};function oe(se,Se,Pe){Pe===null?se.matrix.copy(Se.matrixWorld):(se.matrix.copy(Pe.matrixWorld),se.matrix.invert(),se.matrix.multiply(Se.matrixWorld)),se.matrix.decompose(se.position,se.quaternion,se.scale),se.updateMatrixWorld(!0),se.projectionMatrix.copy(Se.projectionMatrix),se.projectionMatrixInverse.copy(Se.projectionMatrixInverse),se.isPerspectiveCamera&&(se.fov=Pa*2*Math.atan(1/se.projectionMatrix.elements[5]),se.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(se){l=se,d!==null&&(d.fixedFoveation=se),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=se)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(B)},this.getCameraTexture=function(se){return m[se]};let de=null;function Ae(se,Se){if(u=Se.getViewerPose(c||a),g=Se,u!==null){const Pe=u.views;h!==null&&(e.setRenderTargetFramebuffer(b,h.framebuffer),e.setRenderTarget(b));let Le=!1;Pe.length!==B.cameras.length&&(B.cameras.length=0,Le=!0);for(let ze=0;ze<Pe.length;ze++){const Ye=Pe[ze];let ut=null;if(h!==null)ut=h.getViewport(Ye);else{const Rt=f.getViewSubImage(d,Ye);ut=Rt.viewport,ze===0&&(e.setRenderTargetTextures(b,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(b))}let Ze=H[ze];Ze===void 0&&(Ze=new Fn,Ze.layers.enable(ze),Ze.viewport=new Pt,H[ze]=Ze),Ze.matrix.fromArray(Ye.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Ye.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ut.x,ut.y,ut.width,ut.height),ze===0&&(B.matrix.copy(Ze.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Le===!0&&B.cameras.push(Ze)}const xe=r.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){f=i.getBinding();const ze=f.getDepthInformation(Pe[0]);ze&&ze.isValid&&ze.texture&&p.init(ze,r.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),f=i.getBinding();for(let ze=0;ze<Pe.length;ze++){const Ye=Pe[ze].camera;if(Ye){let ut=m[Ye];ut||(ut=new $p,m[Ye]=ut);const Ze=f.getCameraImage(Ye);ut.sourceTexture=Ze}}}}for(let Pe=0;Pe<T.length;Pe++){const Le=A[Pe],xe=T[Pe];Le!==null&&xe!==void 0&&xe.update(Le,Se,c||a)}de&&de(se,Se),Se.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Se}),g=null}const Be=new Xp;Be.setAnimationLoop(Ae),this.setAnimationLoop=function(se){de=se},this.dispose=function(){}}}const HS=new xt,nm=new Ve;nm.set(-1,0,0,0,1,0,0,0,1);function GS(t,e){function n(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Hp(t)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,v,S,b){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?s(p,m):m.isMeshLambertMaterial?(s(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(s(p,m),f(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(s(p,m),d(p,m),m.isMeshPhysicalMaterial&&h(p,m,b)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),_(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,n(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,n(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,n(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,n(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=e.get(m),S=v.envMap,b=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(HS.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(nm),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,n(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,n(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,n(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function d(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,n(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VS(t,e,n,i){let r={},s={};function a(v,S){const b=S.program;i.uniformBlockBinding(v,b,r[v.id])}function o(v,S){let b=r[v.id];b===void 0&&(g(v),b=l(v),r[v.id]=b,v.addEventListener("dispose",p));const T=S.program;i.updateUBOMapping(v,T);const A=e.render.frame;s[v.id]!==A&&(c(v),s[v.id]=A)}function l(v){const S=t.createBuffer(),b=v.__size,T=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,T),t.bindBuffer(t.UNIFORM_BUFFER,null),S}function c(v){const S=r[v.id],b=v.uniforms,T=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let A=0,y=b.length;A<y;A++){const E=b[A];if(Array.isArray(E))for(let k=0,I=E.length;k<I;k++)u(E[k],A,k,T);else u(E,A,0,T)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(v,S,b,T){if(d(v,S,b,T)===!0){const A=v.__offset,y=v.value;if(Array.isArray(y)){let E=0;for(let k=0;k<y.length;k++){const I=y[k],R=_(I,!0);f(I,v.__data,E),E+=R.storage/Float32Array.BYTES_PER_ELEMENT}}else f(y,v.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,A,v.__data)}}function f(v,S,b){typeof v=="number"||typeof v=="boolean"?S[b]=v:v.isMatrix3?(S[b]=v.elements[0],S[b+1]=v.elements[1],S[b+2]=v.elements[2],S[b+3]=0,S[b+4]=v.elements[3],S[b+5]=v.elements[4],S[b+6]=v.elements[5],S[b+7]=0,S[b+8]=v.elements[6],S[b+9]=v.elements[7],S[b+10]=v.elements[8],S[b+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-b),b):v.toArray(S,b)}function d(v,S,b,T){const A=v.value,y=S+"_"+b;if(Array.isArray(A)){T[y]===void 0&&(T[y]=[]);const E=T[y];let k=!1;for(let I=0;I<A.length;I++)h(A[I],E,I)===!0&&(k=!0);return k}return h(A,T,y)}function h(v,S,b){if(S[b]===void 0)return typeof v=="number"||typeof v=="boolean"?S[b]=v:ArrayBuffer.isView(v)?S[b]=v.slice():S[b]=v.clone(),!0;{const T=S[b];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[b]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function g(v){const S=v.uniforms;let b=0;const T=16;for(let y=0,E=S.length;y<E;y++){const k=Array.isArray(S[y])?S[y]:[S[y]];for(let I=0,R=k.length;I<R;I++){const H=k[I],B=Array.isArray(H.value)?H.value:[H.value],C=Array.isArray(S[y])||Array.isArray(H.value);let W=b;for(let G=0,ue=B.length;G<ue;G++){const ne=B[G],oe=_(ne,C),de=b%T,Ae=de%oe.boundary,Be=de+Ae;b+=Ae,Be!==0&&T-Be<oe.storage&&(b+=T-Be),G===0&&(W=b),b+=oe.storage}const X=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new X((b-W)/Float32Array.BYTES_PER_ELEMENT),H.__offset=W}}const A=b%T;return A>0&&(b+=T-A),v.__size=b,v.__cache={},this}function _(v,S){const b={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(b.boundary=4,b.storage=4):v.isVector2?(b.boundary=8,b.storage=8):v.isVector3||v.isColor?(b.boundary=16,b.storage=12):v.isVector4?(b.boundary=16,b.storage=16):v.isMatrix3?(b.boundary=16,b.storage=48):v.isMatrix4?(b.boundary=16,b.storage=64):v.isTexture?Ge("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(b.boundary=16,b.storage=v.byteLength):Ge("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function p(v){const S=v.target;S.removeEventListener("dispose",p),t.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function m(){for(const v in r)t.deleteBuffer(r[v]);r={},s={}}return{bind:a,update:o,dispose:m}}const WS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ri=null;function XS(){return ri===null&&(ri=new Fp(WS,16,16,Ur,pi),ri.name="DFG_LUT",ri.minFilter=Mn,ri.magFilter=Mn,ri.wrapS=Ti,ri.wrapT=Ti,ri.generateMipmaps=!1,ri.needsUpdate=!0),ri}class ZS{constructor(e={}){const{canvas:n=K0(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=In}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;const _=h,p=new Set([Vu,Gu,Hu]),m=new Set([In,hi,Ra,bs,zu,Bu]),v=new Uint32Array(4),S=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]};let T=null,A=null;const y=[],E=[];let k=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const I=this;let R=!1,H=null,B=null,C=null,W=null;this._outputColorSpace=Wt;let X=0,G=0,ue=null,ne=-1,oe=null;const de=new Pt,Ae=new Pt;let Be=null;const se=new je(0);let Se=0,Pe=n.width,Le=n.height,xe=1,He=null,St=null;const ze=new Pt(0,0,Pe,Le),Ye=new Pt(0,0,Pe,Le);let ut=!1;const Ze=new Ia,Rt=new Yu;let wt=!1,$t=!1;const rt=new xt,Yt=new D,Tt=new Pt,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tn=!1;function Ie(){return ue===null?xe:1}let F=i;function Ut(w,O){return n.getContext(w,O)}let st,at,pe,N,z,Y,M,x,U,K,L,J,$,V,Q,he,P,ie,q,me,fe,ge,Ne;try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${ku}`),n.addEventListener("webglcontextlost",Te,!1),n.addEventListener("webglcontextrestored",ce,!1),n.addEventListener("webglcontextcreationerror",_e,!1),F===null){const O="webgl2";if(F=Ut(O,w),F===null)throw Ut(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}$e()}catch(w){throw n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),ft("WebGLRenderer: "+w.message),w}function $e(){st=new Yy(F),st.init(),fe=new OS(F,st),at=new zy(F,st,e,fe),pe=new US(F,st),at.reversedDepthBuffer&&d&&pe.buffers.depth.setReversed(!0),B=F.createFramebuffer(),C=F.createFramebuffer(),W=F.createFramebuffer(),N=new Qy(F),z=new bS,Y=new kS(F,st,pe,z,at,fe,N),M=new jy(I),x=new tv(F),ge=new Oy(F,x),U=new Ky(F,x,N,ge),K=new tb(F,U,x,ge,N),ie=new eb(F,at,Y),Q=new By(z),L=new yS(I,M,st,at,ge,Q),J=new GS(I,z),$=new MS,V=new CS(st),P=new ky(I,M,pe,K,g,l),he=new DS(I,K,at),Ne=new VS(F,N,at,pe),q=new Fy(F,st,N),me=new Jy(F,st,N),N.programs=L.programs,I.capabilities=at,I.extensions=st,I.properties=z,I.renderLists=$,I.shadowMap=he,I.state=pe,I.info=N}_!==In&&(k=new ib(_,n.width,n.height,o,r,s));const ae=new $S(I,F);this.xr=ae,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const w=st.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=st.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(w){w!==void 0&&(xe=w,this.setSize(Pe,Le,!1))},this.getSize=function(w){return w.set(Pe,Le)},this.setSize=function(w,O,te=!0){if(ae.isPresenting){Ge("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=w,Le=O,n.width=Math.floor(w*xe),n.height=Math.floor(O*xe),te===!0&&(n.style.width=w+"px",n.style.height=O+"px"),k!==null&&k.setSize(n.width,n.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(Pe*xe,Le*xe).floor()},this.setDrawingBufferSize=function(w,O,te){Pe=w,Le=O,xe=te,n.width=Math.floor(w*te),n.height=Math.floor(O*te),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(_===In){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){Ge("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}k.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(de)},this.getViewport=function(w){return w.copy(ze)},this.setViewport=function(w,O,te,Z){w.isVector4?ze.set(w.x,w.y,w.z,w.w):ze.set(w,O,te,Z),pe.viewport(de.copy(ze).multiplyScalar(Ie()).round())},this.getScissor=function(w){return w.copy(Ye)},this.setScissor=function(w,O,te,Z){w.isVector4?Ye.set(w.x,w.y,w.z,w.w):Ye.set(w,O,te,Z),pe.scissor(Ae.copy(Ye).multiplyScalar(Ie()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(w){pe.setScissorTest(ut=w)},this.setOpaqueSort=function(w){He=w},this.setTransparentSort=function(w){St=w},this.getClearColor=function(w){return w.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor(...arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,te=!0){let Z=0;if(w){let j=!1;if(ue!==null){const be=ue.texture.format;j=p.has(be)}if(j){const be=ue.texture.type,De=m.has(be),ye=P.getClearColor(),Ce=P.getClearAlpha(),Oe=ye.r,We=ye.g,et=ye.b;De?(v[0]=Oe,v[1]=We,v[2]=et,v[3]=Ce,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=Oe,S[1]=We,S[2]=et,S[3]=Ce,F.clearBufferiv(F.COLOR,0,S))}else Z|=F.COLOR_BUFFER_BIT}O&&(Z|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&(Z|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Z!==0&&F.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),H=w},this.dispose=function(){n.removeEventListener("webglcontextlost",Te,!1),n.removeEventListener("webglcontextrestored",ce,!1),n.removeEventListener("webglcontextcreationerror",_e,!1),P.dispose(),$.dispose(),V.dispose(),Y.dispose(),z.dispose(),M.dispose(),K.dispose(),U.dispose(),ge.dispose(),Ne.dispose(),L.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",hr),ae.removeEventListener("sessionend",ki),ni.stop()};function Te(w){w.preventDefault(),il("WebGLRenderer: Context Lost."),R=!0}function ce(){il("WebGLRenderer: Context Restored."),R=!1;const w=N.autoReset,O=he.enabled,te=he.autoUpdate,Z=he.needsUpdate,j=he.type;$e(),N.autoReset=w,he.enabled=O,he.autoUpdate=te,he.needsUpdate=Z,he.type=j}function _e(w){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function ot(w){const O=w.target;O.removeEventListener("dispose",ot),yt(O)}function yt(w){Wn(w),z.remove(w)}function Wn(w){const O=z.get(w).programs;O!==void 0&&(O.forEach(function(te){L.releaseProgram(te)}),w.isShaderMaterial&&L.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,te,Z,j,be){O===null&&(O=Dt);const De=j.isMesh&&j.matrixWorld.determinantAffine()<0,ye=Vr(w,O,te,Z,j);pe.setMaterial(Z,De);let Ce=te.index,Oe=1;if(Z.wireframe===!0){if(Ce=U.getWireframeAttribute(te),Ce===void 0)return;Oe=2}const We=te.drawRange,et=te.attributes.position;let Ue=We.start*Oe,tt=(We.start+We.count)*Oe;be!==null&&(Ue=Math.max(Ue,be.start*Oe),tt=Math.min(tt,(be.start+be.count)*Oe)),Ce!==null?(Ue=Math.max(Ue,0),tt=Math.min(tt,Ce.count)):et!=null&&(Ue=Math.max(Ue,0),tt=Math.min(tt,et.count));const Ht=tt-Ue;if(Ht<0||Ht===1/0)return;ge.setup(j,Z,ye,te,Ce);let bt,gt=q;if(Ce!==null&&(bt=x.get(Ce),gt=me,gt.setIndex(bt)),j.isMesh)Z.wireframe===!0?(pe.setLineWidth(Z.wireframeLinewidth*Ie()),gt.setMode(F.LINES)):gt.setMode(F.TRIANGLES);else if(j.isLine){let an=Z.linewidth;an===void 0&&(an=1),pe.setLineWidth(an*Ie()),j.isLineSegments?gt.setMode(F.LINES):j.isLineLoop?gt.setMode(F.LINE_LOOP):gt.setMode(F.LINE_STRIP)}else j.isPoints?gt.setMode(F.POINTS):j.isSprite&&gt.setMode(F.TRIANGLES);if(j.isBatchedMesh)if(st.get("WEBGL_multi_draw"))gt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const an=j._multiDrawStarts,ke=j._multiDrawCounts,pn=j._multiDrawCount,ht=Ce?x.get(Ce).bytesPerElement:1,mr=z.get(Z).currentProgram.getUniforms();for(let on=0;on<pn;on++)mr.setValue(F,"_gl_DrawID",on),gt.render(an[on]/ht,ke[on])}else if(j.isInstancedMesh)gt.renderInstances(Ue,Ht,j.count);else if(te.isInstancedBufferGeometry){const an=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,ke=Math.min(te.instanceCount,an);gt.renderInstances(Ue,Ht,ke)}else gt.render(Ue,Ht)};function fr(w,O,te,Z){H!==null&&w.isNodeMaterial&&H.setObject(Z,w),wt===!0&&Q.setState(w,te,!1),w.transparent===!0&&w.side===zn&&w.forceSinglePass===!1?(w.side=vn,w.needsUpdate=!0,pr(w,O,Z),w.side=sr,w.needsUpdate=!0,pr(w,O,Z),w.side=zn):pr(w,O,Z)}this.compile=function(w,O,te=null){te===null&&(te=w),H!==null&&H.renderStart(w,O,te),A=V.get(te),A.init(O),E.push(A),te.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),w!==te&&w.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(A.pushLight(j),j.castShadow&&A.pushShadow(j))}),A.setupLights(),H!==null&&H.updateLights(A.state.lightsArray),$t=this.localClippingEnabled,wt=Q.init(this.clippingPlanes,$t),wt===!0&&Q.setGlobalState(this.clippingPlanes,O),H!==null&&he.render(A.state.shadowsArray,te,O);const Z=new Set;return w.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const be=j.material;if(be)if(Array.isArray(be))for(let De=0;De<be.length;De++){const ye=be[De];fr(ye,te,O,j),Z.add(ye)}else fr(be,te,O,j),Z.add(be)}),A=E.pop(),H!==null&&H.renderEnd(),Z},this.compileAsync=function(w,O,te=null){const Z=this.compile(w,O,te);return new Promise(j=>{function be(){if(Z.forEach(function(De){const Ce=z.get(De).currentProgram;(Ce===void 0||Ce.isReady())&&Z.delete(De)}),Z.size===0){j(w);return}setTimeout(be,10)}st.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let Hs=null;function Gs(w){Hs&&Hs(w)}function hr(){ni.stop()}function ki(){ni.start()}const ni=new Xp;ni.setAnimationLoop(Gs),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(w){Hs=w,ae.setAnimationLoop(w),w===null?ni.stop():ni.start()},ae.addEventListener("sessionstart",hr),ae.addEventListener("sessionend",ki),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;H!==null&&H.renderStart(w,O);const te=ae.enabled===!0&&ae.isPresenting===!0,Z=k!==null&&(ue===null||te)&&k.begin(I,ue);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(k===null||k.isCompositing()===!1)&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(O),O=ae.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,O,ue),A=V.get(w,E.length),A.init(O),A.state.textureUnits=Y.getTextureUnits(),E.push(A),rt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),O.isArrayCamera?Rt.setFromArrayCamera(O):Ze.setFromProjectionMatrix(rt,Qn,O.reversedDepth),$t=this.localClippingEnabled,wt=Q.init(this.clippingPlanes,$t),T=$.get(w,y.length),T.init(),y.push(T),this.info.render.frame++,ae.enabled===!0&&ae.isPresenting===!0){const De=I.xr.getDepthSensingMesh();De!==null&&Ke(De,O,-1/0,I.sortObjects)}Ke(w,O,0,I.sortObjects),T.finish(),H!==null&&H.updateLights(A.state.lightsArray),I.sortObjects===!0&&T.sort(He,St),tn=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,tn&&P.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),wt===!0&&Q.beginShadows();const j=A.state.shadowsArray;if(he.render(j,w,O),wt===!0&&Q.endShadows(),(Z&&k.hasRenderPass())===!1){const De=T.opaque,ye=T.transmissive;if(A.setupLights(),O.isArrayCamera){const Ce=O.cameras;if(ye.length>0)for(let Oe=0,We=Ce.length;Oe<We;Oe++){const et=Ce[Oe];Gr(De,ye,w,et)}tn&&P.render(w);for(let Oe=0,We=Ce.length;Oe<We;Oe++){const et=Ce[Oe];Dn(T,w,et,et.viewport)}}else ye.length>0&&Gr(De,ye,w,O),tn&&P.render(w),Dn(T,w,O)}ue!==null&&G===0&&(Y.updateMultisampleRenderTarget(ue),Y.updateRenderTargetMipmap(ue)),Z&&k.end(I),w.isScene===!0&&w.onAfterRender(I,w,O),ge.resetDefaultState(),ne=-1,oe=null,E.pop(),E.length>0?(A=E[E.length-1],Y.setTextureUnits(A.state.textureUnits),wt===!0&&Q.setGlobalState(I.clippingPlanes,A.state.camera)):A=null,y.pop(),y.length>0?T=y[y.length-1]:T=null,H!==null&&H.renderEnd()};function Ke(w,O,te,Z){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)te=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)A.pushLight(w),w.castShadow&&A.pushShadow(w);else if(w.isSprite){const De=O.isArrayCamera?Rt:Ze;if(!w.frustumCulled||w.intersectsFrustum(De)){Z&&Tt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(rt);const ye=K.update(w),Ce=w.material;Ce.visible&&T.push(w,ye,Ce,te,Tt.z,null,O)}}else if(w.isMesh||w.isLine||w.isPoints){const De=O.isArrayCamera?Rt:Ze;if(!w.frustumCulled||w.intersectsFrustum(De)){const ye=K.update(w),Ce=w.material;if(Z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Tt.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Tt.copy(ye.boundingSphere.center)),Tt.applyMatrix4(w.matrixWorld).applyMatrix4(rt)),Array.isArray(Ce)){const Oe=ye.groups;for(let We=0,et=Oe.length;We<et;We++){const Ue=Oe[We],tt=Ce[Ue.materialIndex];tt&&tt.visible&&T.push(w,ye,tt,te,Tt.z,Ue,O)}}else Ce.visible&&T.push(w,ye,Ce,te,Tt.z,null,O)}}}const be=w.children;for(let De=0,ye=be.length;De<ye;De++)Ke(be[De],O,te,Z)}function Dn(w,O,te,Z){const{opaque:j,transmissive:be,transparent:De}=w;A.setupLightsView(te),wt===!0&&Q.setGlobalState(I.clippingPlanes,te),Z&&pe.viewport(de.copy(Z)),j.length>0&&Xn(j,O,te),be.length>0&&Xn(be,O,te),De.length>0&&Xn(De,O,te),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Gr(w,O,te,Z){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[Z.id]===void 0){const Ue=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[Z.id]=new fi(1,1,{generateMipmaps:!0,type:Ue?pi:In,minFilter:Ji,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const be=A.state.transmissionRenderTarget[Z.id],De=Z.viewport||de;be.setSize(De.z*I.transmissionResolutionScale,De.w*I.transmissionResolutionScale);const ye=I.getRenderTarget(),Ce=I.getActiveCubeFace(),Oe=I.getActiveMipmapLevel();I.setRenderTarget(be),I.getClearColor(se),Se=I.getClearAlpha(),Se<1&&I.setClearColor(16777215,.5),I.clear(),tn&&P.render(te);const We=I.toneMapping;I.toneMapping=Ci;const et=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),A.setupLightsView(Z),wt===!0&&Q.setGlobalState(I.clippingPlanes,Z),Xn(w,te,Z),Y.updateMultisampleRenderTarget(be),Y.updateRenderTargetMipmap(be),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let tt=0,Ht=O.length;tt<Ht;tt++){const bt=O[tt],{object:gt,geometry:an,material:ke,group:pn}=bt;if(ke.side===zn&&gt.layers.test(Z.layers)){const ht=ke.side;ke.side=vn,ke.needsUpdate=!0,Vs(gt,te,Z,an,ke,pn),ke.side=ht,ke.needsUpdate=!0,Ue=!0}}Ue===!0&&(Y.updateMultisampleRenderTarget(be),Y.updateRenderTargetMipmap(be))}I.setRenderTarget(ye,Ce,Oe),I.setClearColor(se,Se),et!==void 0&&(Z.viewport=et),I.toneMapping=We}function Xn(w,O,te){const Z=O.isScene===!0?O.overrideMaterial:null;for(let j=0,be=w.length;j<be;j++){const De=w[j],{object:ye,geometry:Ce,group:Oe}=De;let We=De.material;We.allowOverride===!0&&Z!==null&&(We=Z),ye.layers.test(te.layers)&&Vs(ye,O,te,Ce,We,Oe)}}function Vs(w,O,te,Z,j,be){H!==null&&j.isNodeMaterial&&H.setObject(w,j),w.onBeforeRender(I,O,te,Z,j,be),w.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),j.onBeforeRender(I,O,te,Z,w,be),j.transparent===!0&&j.side===zn&&j.forceSinglePass===!1?(j.side=vn,j.needsUpdate=!0,I.renderBufferDirect(te,O,Z,j,w,be),j.side=sr,j.needsUpdate=!0,I.renderBufferDirect(te,O,Z,j,w,be),j.side=zn):I.renderBufferDirect(te,O,Z,j,w,be),w.onAfterRender(I,O,te,Z,j,be)}function Ws(w){let O=0;for(const te of w)te.texture!==null&&O++;return O}function pr(w,O,te){O.isScene!==!0&&(O=Dt);const Z=z.get(w),j=A.state.lights,be=A.state.shadowsArray,De=j.state.version,ye=L.getParameters(w,j.state,be,O,te,A.state.lightProbeGridArray),Ce=L.getProgramCacheKey(ye);let Oe=Z.programs;Z.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,Z.fog=O.fog;const We=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;Z.envMap=M.get(w.envMap||Z.environment,We),Z.envMapRotation=Z.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",ot),Oe=new Map,Z.programs=Oe,Z.programVariants=new Map);let et=Oe.get(Ce);if(et!==void 0){if(Z.currentProgram===et&&Z.lightsStateVersion===De)return Xs(w,ye),et}else ye.uniforms=L.getUniforms(w),H!==null&&w.isNodeMaterial&&H.build(w,te,ye),w.onBeforeCompile(ye,I),et=L.acquireProgram(ye,Ce),Oe.set(Ce,et),Z.uniforms=ye.uniforms;const Ue=Z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=Q.uniform),Xs(w,ye),Z.needsLights=h0(w),Z.lightsStateVersion=De,Z.needsLights&&(Ue.ambientLightColor.value=j.state.ambient,Ue.lightProbe.value=j.state.probe,Ue.sunLights.value=j.state.sun,Ue.sunLightShadows.value=j.state.sunShadow,Ue.directionalLights.value=j.state.directional,Ue.directionalLightShadows.value=j.state.directionalShadow,Ue.spotLights.value=j.state.spot,Ue.spotLightShadows.value=j.state.spotShadow,Ue.rectAreaLights.value=j.state.rectArea,Ue.ltc_1.value=j.state.rectAreaLTC1,Ue.ltc_2.value=j.state.rectAreaLTC2,Ue.pointLights.value=j.state.point,Ue.pointLightShadows.value=j.state.pointShadow,Ue.hemisphereLights.value=j.state.hemi,Ue.sunShadowMatrix.value=j.state.sunShadowMatrix,Ue.sunShadowCascade.value=j.state.sunShadowCascade,Ue.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ue.spotLightMatrix.value=j.state.spotLightMatrix,Ue.spotLightMap.value=j.state.spotLightMap,Ue.pointShadowMatrix.value=j.state.pointShadowMatrix),Z.numLightProbeGrids=Ws(A.state.lightProbeGridArray),Z.currentProgram=et,Z.uniformsList=null,et}function kl(w,O,te,Z,j){const be=z.get(w),De=be.currentProgram.id+","+Z+","+j;let ye=be.programVariants.get(De);return ye===void 0?(ye=pr(w,O,te),be.programVariants.set(De,ye)):(be.currentProgram=ye,be.uniformsList=null,be.outputColorSpace=Z,be.toneMapping=j),ye}function Za(w){if(w.uniformsList===null){const O=w.currentProgram.getUniforms();w.uniformsList=zo.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function Xs(w,O){const te=z.get(w);te.outputColorSpace=O.outputColorSpace,te.batching=O.batching,te.batchingColor=O.batchingColor,te.instancing=O.instancing,te.instancingColor=O.instancingColor,te.instancingMorph=O.instancingMorph,te.skinning=O.skinning,te.morphTargets=O.morphTargets,te.morphNormals=O.morphNormals,te.morphColors=O.morphColors,te.morphTargetsCount=O.morphTargetsCount,te.numClippingPlanes=O.numClippingPlanes,te.numIntersection=O.numClipIntersection,te.vertexAlphas=O.vertexAlphas,te.vertexTangents=O.vertexTangents,te.toneMapping=O.toneMapping}function Vr(w,O,te,Z,j){O.isScene!==!0&&(O=Dt),Y.resetTextureUnits();const be=O.fog,De=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial?O.environment:null,ye=ue===null?I.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:ct.workingColorSpace,Ce=Z.isMeshStandardMaterial||Z.isMeshLambertMaterial&&!Z.envMap||Z.isMeshPhongMaterial&&!Z.envMap,Oe=M.get(Z.envMap||De,Ce),We=Z.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,et=!!te.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Ue=!!te.morphAttributes.position,tt=!!te.morphAttributes.normal,Ht=!!te.morphAttributes.color;let bt=Ci;Z.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(bt=I.toneMapping);const gt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,an=gt!==void 0?gt.length:0,ke=z.get(Z),pn=A.state.lights;if(wt===!0&&($t===!0||w!==oe)){const Ct=w===oe&&Z.id===ne;Q.setState(Z,w,Ct)}let ht=!1,mr=!1;Z.version===ke.__version?ke.needsLights&&ke.lightsStateVersion!==pn.state.version||j.isBatchedMesh&&ke.batching===!1||!j.isBatchedMesh&&ke.batching===!0||j.isBatchedMesh&&ke.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&ke.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&ke.instancing===!1||!j.isInstancedMesh&&ke.instancing===!0||j.isSkinnedMesh&&ke.skinning===!1||!j.isSkinnedMesh&&ke.skinning===!0||j.isInstancedMesh&&ke.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&ke.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&ke.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&ke.instancingMorph===!1&&j.morphTexture!==null||ke.envMap!==Oe||Z.fog===!0&&ke.fog!==be||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Q.numPlanes||ke.numIntersection!==Q.numIntersection)||ke.vertexAlphas!==We||ke.vertexTangents!==et||ke.morphTargets!==Ue||ke.morphNormals!==tt||ke.morphColors!==Ht||ke.morphTargetsCount!==an||ke.numLightProbeGrids!==Ws(A.state.lightProbeGridArray)?ht=!0:(ke.outputColorSpace!==ye||ke.toneMapping!==bt)&&(mr=!0):(ht=!0,ke.__version=Z.version);let on=ke.currentProgram;(ht===!0||mr===!0)&&(on=mr===!0?kl(Z,O,j,ye,bt):pr(Z,O,j),H&&Z.isNodeMaterial&&H.onUpdateProgram(Z,on,ke));let ja=!1,Oi=!1,gr=!1;const dt=on.getUniforms(),nn=ke.uniforms;if(pe.useProgram(on.program)&&(ja=!0,Oi=!0,gr=!0),Z.id!==ne&&(ne=Z.id,Oi=!0),ja||oe!==w){pe.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),dt.setValue(F,"projectionMatrix",w.projectionMatrix),dt.setValue(F,"viewMatrix",w.matrixWorldInverse);const Kt=dt.map.cameraPosition;Kt!==void 0&&Kt.setValue(F,Yt.setFromMatrixPosition(w.matrixWorld)),at.logarithmicDepthBuffer&&dt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&dt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),oe!==w&&(oe=w,Oi=!0,gr=!0)}if(ke.needsLights&&(pn.state.sunShadowMap.length>0&&dt.setValue(F,"sunShadowMap",pn.state.sunShadowMap,Y),pn.state.directionalShadowMap.length>0&&dt.setValue(F,"directionalShadowMap",pn.state.directionalShadowMap,Y),pn.state.spotShadowMap.length>0&&dt.setValue(F,"spotShadowMap",pn.state.spotShadowMap,Y),pn.state.pointShadowMap.length>0&&dt.setValue(F,"pointShadowMap",pn.state.pointShadowMap,Y)),j.isSkinnedMesh){dt.setOptional(F,j,"bindMatrix"),dt.setOptional(F,j,"bindMatrixInverse");const Ct=j.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),dt.setValue(F,"boneTexture",Ct.boneTexture,Y))}j.isBatchedMesh&&(dt.setOptional(F,j,"batchingTexture"),dt.setValue(F,"batchingTexture",j._matricesTexture,Y),dt.setOptional(F,j,"batchingIdTexture"),dt.setValue(F,"batchingIdTexture",j._indirectTexture,Y),dt.setOptional(F,j,"batchingColorTexture"),j._colorsTexture!==null&&dt.setValue(F,"batchingColorTexture",j._colorsTexture,Y));const Zn=te.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&ie.update(j,te,on),(Oi||ke.receiveShadow!==j.receiveShadow)&&(ke.receiveShadow=j.receiveShadow,dt.setValue(F,"receiveShadow",j.receiveShadow)),(Z.isMeshStandardMaterial||Z.isMeshLambertMaterial||Z.isMeshPhongMaterial)&&Z.envMap===null&&O.environment!==null&&(nn.envMapIntensity.value=O.environmentIntensity),nn.dfgLUT!==void 0&&(nn.dfgLUT.value=XS()),Oi){if(dt.setValue(F,"toneMappingExposure",I.toneMappingExposure),ke.needsLights&&qa(nn,gr),be&&Z.fog===!0&&J.refreshFogUniforms(nn,be),J.refreshMaterialUniforms(nn,Z,xe,Le,A.state.transmissionRenderTarget[w.id]),ke.needsLights&&ke.numLightProbeGrids>0){const Ct=b;let Kt=0;for(const vi of A.state.lightProbeGridArray)vi.texture!==null&&(Ct.textures[Kt]=vi.texture,Ct.min[Kt]=vi.boundingBox.min,Ct.max[Kt]=vi.boundingBox.max,Ct.resolution[Kt]=vi.resolution,Kt++);for(const vi in Ct)Ct[vi].length=Kt;nn.probesSH.value=Ct.textures,nn.probesMin.value=Ct.min,nn.probesMax.value=Ct.max,nn.probesResolution.value=Ct.resolution}zo.upload(F,Za(ke),nn,Y)}if(Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(zo.upload(F,Za(ke),nn,Y),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&dt.setValue(F,"center",j.center),dt.setValue(F,"modelViewMatrix",j.modelViewMatrix),dt.setValue(F,"normalMatrix",j.normalMatrix),dt.setValue(F,"modelMatrix",j.matrixWorld),Z.uniformsGroups!==void 0){const Ct=Z.uniformsGroups;for(let Kt=0,vi=Ct.length;Kt<vi;Kt++){const $d=Ct[Kt];Ne.update($d,on),Ne.bind($d,on)}}return on}function qa(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.sunLights.needsUpdate=O,w.sunLightShadows.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function h0(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ue},this.setRenderTargetTextures=function(w,O,te){const Z=z.get(w);Z.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),z.get(w.texture).__webglTexture=O,z.get(w.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:te,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){const te=z.get(w);te.__webglFramebuffer=O,te.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(w,O=0,te=0){ue=w,X=O,G=te;let Z=null,j=!1,be=!1;if(w){const ye=z.get(w);if(ye.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(F.FRAMEBUFFER,ye.__webglFramebuffer),de.copy(w.viewport),Ae.copy(w.scissor),Be=w.scissorTest,pe.viewport(de),pe.scissor(Ae),pe.setScissorTest(Be),ne=-1;return}else if(ye.__webglFramebuffer===void 0)Y.setupRenderTarget(w);else if(ye.__hasExternalTextures)Y.rebindTextures(w,z.get(w.texture).__webglTexture,z.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const We=w.depthTexture;if(ye.__boundDepthTexture!==We){if(We!==null&&z.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(w)}}const Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);const Oe=z.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?Z=Oe[O][te]:Z=Oe[O],j=!0):w.samples>0&&Y.useMultisampledRTT(w)===!1?Z=z.get(w).__webglMultisampledFramebuffer:Array.isArray(Oe)?Z=Oe[te]:Z=Oe,de.copy(w.viewport),Ae.copy(w.scissor),Be=w.scissorTest}else de.copy(ze).multiplyScalar(xe).floor(),Ae.copy(Ye).multiplyScalar(xe).floor(),Be=ut;if(te!==0&&(Z=B),pe.bindFramebuffer(F.FRAMEBUFFER,Z)&&pe.drawBuffers(w,Z),pe.viewport(de),pe.scissor(Ae),pe.setScissorTest(Be),j){const ye=z.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,ye.__webglTexture,te)}else if(be){const ye=O;for(let Ce=0;Ce<w.textures.length;Ce++){const Oe=z.get(w.textures[Ce]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+Ce,Oe.__webglTexture,te,ye)}}else if(w!==null&&te!==0){const ye=z.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ye.__webglTexture,te)}ne=-1};function Bd(w){const O=z.get(w);return(O.__readFormat!==w.format||O.__readType!==w.type)&&(O.__readFormat=w.format,O.__readType=w.type,O.__formatReadable=at.textureFormatReadable(w.format),O.__typeReadable=at.textureTypeReadable(w.type)),O}this.readRenderTargetPixels=function(w,O,te,Z,j,be,De,ye=0){if(!(w&&w.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ce=Ce[De],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){pe.bindFramebuffer(F.FRAMEBUFFER,Ce);try{const Oe=w.textures[ye],We=Oe.format,et=Oe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);const Ue=Bd(Oe);if(Ue.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-Z&&te>=0&&te<=w.height-j&&F.readPixels(O,te,Z,j,fe.convert(We),fe.convert(et),be)}finally{const Oe=ue!==null?z.get(ue).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(w,O,te,Z,j,be,De,ye=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=z.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ce=Ce[De],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(O>=0&&O<=w.width-Z&&te>=0&&te<=w.height-j){pe.bindFramebuffer(F.FRAMEBUFFER,Ce);const Oe=w.textures[ye],We=Oe.format,et=Oe.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ye);const Ue=Bd(Oe);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.bufferData(F.PIXEL_PACK_BUFFER,be.byteLength,F.STREAM_READ),F.readPixels(O,te,Z,j,fe.convert(We),fe.convert(et),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);const Ht=ue!==null?z.get(ue).__webglFramebuffer:null;pe.bindFramebuffer(F.FRAMEBUFFER,Ht);const bt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await J0(F,bt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,be),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(tt),F.deleteSync(bt),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,te=0){const Z=Math.pow(2,-te),j=Math.floor(w.image.width*Z),be=Math.floor(w.image.height*Z),De=O!==null?O.x:0,ye=O!==null?O.y:0;Y.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,te,0,0,De,ye,j,be),pe.unbindTexture()},this.copyTextureToTexture=function(w,O,te=null,Z=null,j=0,be=0){let De,ye,Ce,Oe,We,et,Ue,tt,Ht;const bt=w.isCompressedTexture?w.mipmaps[be]:w.image;if(te!==null)De=te.max.x-te.min.x,ye=te.max.y-te.min.y,Ce=te.isBox3?te.max.z-te.min.z:1,Oe=te.min.x,We=te.min.y,et=te.isBox3?te.min.z:0;else{const dt=Math.pow(2,-j);De=Math.floor(bt.width*dt),ye=Math.floor(bt.height*dt),w.isDataArrayTexture?Ce=bt.depth:w.isData3DTexture?Ce=Math.floor(bt.depth*dt):Ce=1,Oe=0,We=0,et=0}Z!==null?(Ue=Z.x,tt=Z.y,Ht=Z.z):(Ue=0,tt=0,Ht=0);const gt=fe.convert(O.format),an=fe.convert(O.type);let ke;O.isData3DTexture?(Y.setTexture3D(O,0),ke=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Y.setTexture2DArray(O,0),ke=F.TEXTURE_2D_ARRAY):(Y.setTexture2D(O,0),ke=F.TEXTURE_2D),pe.activeTexture(F.TEXTURE0),pe.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),pe.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),pe.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);const pn=pe.getParameter(F.UNPACK_ROW_LENGTH),ht=pe.getParameter(F.UNPACK_IMAGE_HEIGHT),mr=pe.getParameter(F.UNPACK_SKIP_PIXELS),on=pe.getParameter(F.UNPACK_SKIP_ROWS),ja=pe.getParameter(F.UNPACK_SKIP_IMAGES);pe.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),pe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),pe.pixelStorei(F.UNPACK_SKIP_PIXELS,Oe),pe.pixelStorei(F.UNPACK_SKIP_ROWS,We),pe.pixelStorei(F.UNPACK_SKIP_IMAGES,et);const Oi=w.isDataArrayTexture||w.isData3DTexture,gr=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){const dt=z.get(w),nn=z.get(O),Zn=z.get(dt.__renderTarget),Ct=z.get(nn.__renderTarget);pe.bindFramebuffer(F.READ_FRAMEBUFFER,Zn.__webglFramebuffer),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Kt=0;Kt<Ce;Kt++)Oi&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(w).__webglTexture,j,et+Kt),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,z.get(O).__webglTexture,be,Ht+Kt)),F.blitFramebuffer(Oe,We,Oe+De,We+ye,Ue,tt,Ue+De,tt+ye,F.DEPTH_BUFFER_BIT,F.NEAREST);pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(j!==0||w.isRenderTargetTexture||z.has(w)){const dt=z.get(w),nn=z.get(O);pe.bindFramebuffer(F.READ_FRAMEBUFFER,C),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,W);for(let Zn=0;Zn<Ce;Zn++)Oi?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,dt.__webglTexture,j,et+Zn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,dt.__webglTexture,j),gr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,nn.__webglTexture,be,Ht+Zn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,nn.__webglTexture,be),j!==0?F.blitFramebuffer(Oe,We,Oe+De,We+ye,Ue,tt,Ue+De,tt+ye,F.COLOR_BUFFER_BIT,F.NEAREST):gr?F.copyTexSubImage3D(ke,be,Ue,tt,Ht+Zn,Oe,We,De,ye):F.copyTexSubImage2D(ke,be,Ue,tt,Oe,We,De,ye);pe.bindFramebuffer(F.READ_FRAMEBUFFER,null),pe.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else gr?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(ke,be,Ue,tt,Ht,De,ye,Ce,gt,an,bt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(ke,be,Ue,tt,Ht,De,ye,Ce,gt,bt.data):F.texSubImage3D(ke,be,Ue,tt,Ht,De,ye,Ce,gt,an,bt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,be,Ue,tt,De,ye,gt,an,bt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,be,Ue,tt,bt.width,bt.height,gt,bt.data):F.texSubImage2D(F.TEXTURE_2D,be,Ue,tt,De,ye,gt,an,bt);pe.pixelStorei(F.UNPACK_ROW_LENGTH,pn),pe.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ht),pe.pixelStorei(F.UNPACK_SKIP_PIXELS,mr),pe.pixelStorei(F.UNPACK_SKIP_ROWS,on),pe.pixelStorei(F.UNPACK_SKIP_IMAGES,ja),be===0&&O.generateMipmaps===!0&&O.mipmapsAutoUpdate===!0&&F.generateMipmap(ke),pe.unbindTexture()},this.initRenderTarget=function(w){z.get(w).__webglFramebuffer===void 0&&Y.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Y.setTextureCube(w,0):w.isData3DTexture?Y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Y.setTexture2DArray(w,0):Y.setTexture2D(w,0),pe.unbindTexture()},this.resetState=function(){X=0,G=0,ue=null,pe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),n.unpackColorSpace=ct._getUnpackColorSpace()}}const Wf=.003,al=1.2;function qS(t,e,n){const i=Math.tan(Et.degToRad(n/2))*Math.max(.2,e),r=Math.max(3.8,1.15/(i*.8)),s=t.z>4?-1:1;return{position:new D(Et.clamp(t.x,-10,10),3.6,Et.clamp(t.z+s*r,-11.5,11.5)),target:t.clone().add(new D(0,1.35,0))}}function fu(t,e,n,i){return{yaw:t-n*Wf,pitch:Et.clamp(e-i*Wf,-al,al)}}function im(t,e,n,i){return{yaw:t+(Number(i.has("ArrowLeft"))-Number(i.has("ArrowRight")))*n*1.5,pitch:Et.clamp(e+(Number(i.has("ArrowUp"))-Number(i.has("ArrowDown")))*n,-al,al)}}class jS{yaw=0;pitch=0;freeMode=!1;anchor=new D;freePos=new D;camera;constructor(e){this.camera=e,this.reset()}reset(){this.camera.position.set(0,4.35,10.5),this.anchor.copy(this.camera.position),this.freePos.copy(this.anchor),this.freeMode=!1,this.focus(new D(-2.8,.85,-4.5))}focus(e){this.camera.lookAt(e),this.syncFromCamera()}syncFromCamera(){const e=new Hn().setFromQuaternion(this.camera.quaternion,"YXZ");this.yaw=e.y,this.pitch=e.x,this.anchor.copy(this.camera.position),this.freePos.copy(this.camera.position),this.freeMode=!1}dragBy(e,n){Object.assign(this,fu(this.yaw,this.pitch,e,n))}update(e,n){Object.assign(this,im(this.yaw,this.pitch,e,n)),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ");const i=new D;this.camera.getWorldDirection(i),i.y=0,i.normalize();const r=new D(-i.z,0,i.x),s=new D;n.has("KeyW")&&s.add(i),n.has("KeyS")&&s.sub(i),n.has("KeyA")&&s.sub(r),n.has("KeyD")&&s.add(r),n.has("KeyQ")&&(s.y-=1),n.has("KeyE")&&(s.y+=1),s.lengthSq()>0&&(this.freeMode||(this.freeMode=!0,this.freePos.copy(this.camera.position)),this.freePos.add(s.normalize().multiplyScalar((n.has("ShiftLeft")||n.has("ShiftRight")?5.6:3.5)*e)),this.freePos.x=Et.clamp(this.freePos.x,-10.9,10.9),this.freePos.y=Et.clamp(this.freePos.y,1.1,4.4),this.freePos.z=Et.clamp(this.freePos.z,-12.3,11.7)),this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,e*(this.freeMode?10:4)))}}function YS(t){if(!t)return"";const n=t.replace(/\[[^\]]*\]/g," ").replace(/\b\d[\w.-]*/g," ").replace(/https?:\/\/\S+/g," ").match(/[A-Za-z][A-Za-z'-]*/g)||[],i=new Set(["a","an","the","and","of","to","for","with","from","in","on","by","is","are","can","could","would","should","why","how","what","does","do","we","i","our","my","this","that","using","use","raise","lower","increase","reduce","replace","add","remove","extend","test","compare","evaluate","improve","refine","explore","find","measure"]),s=n.filter(a=>!i.has(a.toLowerCase())).slice(0,2).join(" ");return s?s[0].toUpperCase()+s.slice(1):""}function KS(t,e,n,i,r){e.disabled=!i,e.onclick=()=>{i&&(t.close(),r())},n.onclick=()=>t.close(),t.showModal()}const JS=1;function QS(t,e,n){const i=t.target;t.code!=="Space"||t.defaultPrevented||t.repeat||t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||e||i?.closest?.("input,select,textarea,button,a,[contenteditable]:not([contenteditable=false]),[role=button]")||(t.preventDefault(),n())}const Tr=64,ms=[{phase:"hook",start:0,caption:"AI researchers get stuck."},{phase:"trap",start:6,caption:"Local tweaks. Rising boredom."},{phase:"snap",start:20,caption:"Boredom triggers real scouting."},{phase:"breakthrough",start:36,caption:"Verified breakthrough."},{phase:"proof",start:54,caption:"Artificial Scientist Swarms."}],eM=2.8,fc=t=>typeof t=="number"&&Number.isFinite(t)?t:null,tM=new Set(["llm.called","agent.assigned"]);function nM(t,e,n){const i=[...t].sort((R,H)=>R.tick-H.tick),r=i.filter(R=>R.type==="boredom.measured"&&fc(R.payload?.B)!=null).map(R=>({tick:R.tick,agentId:R.agentId||"",value:fc(R.payload?.B),regime:String(R.payload?.regime||""),round:R.round??0})),s=r.find(R=>R.regime==="BOREDOM_SNAP"&&R.value>=.7)||r.find(R=>R.regime==="BOREDOM_SNAP"),a=i.filter(R=>R.type==="discovery.made").map(R=>({tick:R.tick,agentId:R.agentId||"",reward:fc(R.payload?.reward)??0}));if(!s||!a.some(R=>R.tick>s.tick))return null;const o=a.filter(R=>R.tick>s.tick),l=o.reduce((R,H)=>H.reward>R.reward?H:R,o[0]),c=i.filter(R=>R.type==="experiment.finished"&&R.payload?.status==="replicated").map(R=>R.tick),u=Math.max(0,(r[0]?.tick??0)-2),f=r.find(R=>R.tick>s.tick&&R.round>(s.round||0))?.tick??null,d=f==null?null:i.find(R=>R.tick>f&&R.type==="experiment.finished")?.tick??l.tick-10,h=i.filter(R=>R.type==="verdict.issued"&&R.tick>=l.tick),g=h.find(R=>/candidate|award|winner/i.test(String(R.payload?.verdict||""))),_=Math.min(n,Math.max(l.tick+4,h.at(-1)?.tick??l.tick+12)),p=e.filter(R=>R.bored).map(R=>R.id),m=i.find(R=>R.type==="agent.assigned"&&p.includes(R.agentId||"")&&R.tick>=s.tick)?.tick??s.tick+1,v=f??l.tick,S=i.filter(R=>R.type==="observation.received"&&R.tick>s.tick&&R.tick<v&&["sources","snap"].includes(String(R.payload?.kind||""))&&R.message&&R.message!=="(untitled)").map(R=>({tick:R.tick,agentId:R.agentId||"",title:String(R.message).split(";")[0].trim(),tool:String(R.payload?.tool||(R.payload?.kind==="snap"?"snap search":"literature"))})),b=i.filter(R=>R.type==="items.shared"&&R.tick>s.tick&&R.tick<v).map(R=>({tick:R.tick,agentId:R.agentId||""})),T=R=>Math.min(l.tick-1,Math.max(s.tick+1,Math.min(n,R))),A=T(Math.max(s.tick+10,...S.map(R=>R.tick),...b.map(R=>R.tick))),y=f==null?l.tick-1:T(f),E=d==null?l.tick-16:d-6,k=[[0,0],[6,Math.min(n,u)],[19,Math.min(n,s.tick-3)],[23,Math.min(l.tick,n,s.tick+1)],[32,T(Math.min(A+1,(y??l.tick)-1))],[36,T(Math.max(f==null?s.tick+1:y,E))],[46,l.tick],[52,_],[Tr,_]];for(let R=1;R<k.length;R++)k[R][1]=Math.max(k[R][1],k[R-1][1]);const I=new Map;for(const R of i)tM.has(R.type)||I.set(Math.floor(R.tick),Math.min(3,(I.get(Math.floor(R.tick))||0)+1));return{keys:k,weights:I,snapTick:s.tick,snapAgent:s.agentId,foundedTick:m,boredAgents:p,discoveries:a,breakthroughAgent:l.agentId,bestTick:l.tick,replicated:c,boredom:r,papers:S,shares:b,verdict:g?{tick:g.tick,agentId:g.agentId||"",label:String(g.payload?.verdict)}:void 0,startTick:u,endTick:_}}function Xf(t,e){const n=t.keys,i=Math.max(0,Math.min(Tr,e));let r=n.findIndex((h,g)=>g<n.length-1&&i<n[g+1][0]);r<0&&(r=n.length-2);const[s,a]=n[r],[o,l]=n[r+1];if(l<=a||o<=s)return a;const c=(i-s)/(o-s),u=[];for(let h=Math.floor(a);h<Math.ceil(l);h++)u.push(.35+(t.weights.get(h)||0));const f=u.reduce((h,g)=>h+g,0);let d=c*f;for(let h=0;h<u.length;h++){if(d<=u[h]){const g=Math.floor(a)+h+d/u[h];return Math.max(a,Math.min(l,g))}d-=u[h]}return l}function iM(t){let e=ms[0];for(const n of ms)t>=n.start&&(e=n);return e}const hu=t=>{const e=Math.max(0,Math.min(1,t));return e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2};function rM(t,e){const n=t.boredom.filter(f=>f.tick<=e);if(!n.length)return{value:0,shown:0,regime:"EXPLOIT",agentId:""};const i=n.at(-1).round,r=n.filter(f=>f.round===i),s=r.reduce((f,d)=>d.value>f.value?d:f,r[0]),a=n.slice(0,-1),o=a.at(-1)?.round,l=a.filter(f=>f.round===o),c=l.length?l.reduce((f,d)=>d.value>f.value?d:f,l[0]).value:0,u=c+(s.value-c)*hu((e-n.at(-1).tick)/2);return{value:s.value,shown:u,regime:s.regime,agentId:s.agentId}}function sM(t,e){return e==="BOREDOM_SNAP"||t>=.7?"snap":t>=.35?"amber":"cool"}function aM(t,e){return t.replicated.filter(n=>n<=e).length}function oM(t,e,n,i,r=360,s=120,a=""){const o=Math.max(1,t.length),l=h=>8+(Math.max(e,Math.min(n,h))-e)/Math.max(1,n-e)*(r-16),c=h=>s-10-h/o*(s-28);let u=0,f=`M${l(e).toFixed(1)} ${c(0).toFixed(1)}`;for(const h of t){if(h>i)break;f+=` H${l(h).toFixed(1)} V${c(++u).toFixed(1)}`}f+=` H${l(Math.min(i,n)).toFixed(1)}`;const d=Array.from({length:o+1},(h,g)=>`<line x1="8" x2="${r-8}" y1="${c(g).toFixed(1)}" y2="${c(g).toFixed(1)}"/>`).join("");return`<svg viewBox="0 0 ${r} ${s}" class="cin-step" role="img" aria-label="${a}"><g class="grid">${d}</g><path d="${f}"/><circle cx="${l(Math.min(i,n)).toFixed(1)}" cy="${c(u).toFixed(1)}" r="5"/></svg>`}const lM="github.com/arii/caffeinated",cM={title:"Pilot A/B · control vs boredom",rows:[{task:"hadamard19",result:"Tie"},{task:"bixbench_mini",result:"Control 2 of 3"},{task:"playworld_mini",result:"Within noise"},{task:"ignobel",result:"Control confirmed more"}],note:"3 runs per task · no significant boredom benefit yet"},Mo={repo:lM,pilot:cM},uM={title:"SF AI Research Hack",dates:"Nov 14–15",host:"Iterate",summary:"Our hypothesis is that existing AI scientist swarms get stuck because they are bored, trapped in repetitive, low-payoff loops long after returns have diminished. Artificial Scientist Swarms adds a deterministic Boredom Meter grounded in psychology so the swarm does not stay bored. Recomputed from the shared experiment ledger, it tracks stagnation, novelty deficit and overload to detect boredom and force a seeking state, moving from routine exploitation to paradigm breakout. We test this controller on known benchmarks and an Ig Nobel challenge: research that makes you laugh, then think. Agents search via Exa, share memory on past.dev, pre-register real-data tests, and can be ranked by a two-judge committee and final IgJudge."},dM=[{kind:"llm",name:"Language model",tinkerName:"Tinker",detail:"{model} powers the researchers' language-model calls.",tinkerDetail:"{model} runs through Tinker, the researchers' language-model provider.",fakeName:"LLM",fakeDetail:"A simulated model drives the researchers for this plumbing demo.",fakeSuffix:"(fake LLM in this recording)",unverifiedDetail:"A language model helps researchers plan and evaluate ideas.",unknownSuffix:"(model not verified in this recording)"},{kind:"exa",name:"Exa",detail:"Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{kind:"memory",name:"past.dev",detail:"Shared memory helps agents recall earlier attempts and share what they learn.",localSuffix:"(local memory in this recording)",offSuffix:"(off in this recording)",unknownSuffix:"(not verified in this recording)"},{name:"Devin",detail:"Built and tested the swarm, the Lab and this site alongside the team."}],fM={project:"Ig Nobel Prize Winning Artificial Scientist Swarms",team:"Team caffeinated",names:["Ariel Anders","Jialin Feng","Neeraj Shah","Masha Baidachna"]},hM={title:"Why a boredom meter?",paragraphs:["In psychology, boredom is not laziness. It is the signal that a routine has stopped paying off and that it is time to look for something new (Westgate & Wilson 2018; Eastwood et al. 2012; Bench & Lench 2013).","Caffeinated turns that signal into a measured quantity B between 0 and 1 that steers the swarm. B is high when recent attempts mean the same thing as earlier ones, when nothing has significantly improved for a while, and when attempts keep failing or repeating.","It is never an LLM opinion: B is a deterministic function of the experiment ledger, so any agent can recompute any other agent's boredom and check it. It combines novelty, stagnation and overload (B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload)."],source:"Summarized from docs/boredom.md"},pM={about:"About this project ▾",event:"Hack",tools:"Tools",authors:"Authors",boredom:"Boredom",trail:"Exa"},mM={source:"Exa result:",missingExa:"results not kept as source cards",recording:"This recording",searches:"literature searches",sources:"Exa source cards",recalls:"shared-memory recalls via",pastdev:"past.dev",localMemory:"local memory",noCitations:"No study citations in this recording yet."},gM={citations:[{runId:"50bbe2bb-0a86-50d9-9ef8-be8aa5fa3929",studyId:"study:14",category:"Transport",text:"Kitchen Physics Lab: for confirming that heavier cars get fewer city miles per gallon.",note:"Strongest absolute correlation among eligible studies; not a prize award."}],proxyNote:"Metric / proxy",noProxy:"No proxy note is present in this recording.",studyCount:"Ig Nobel studies",passedCount:"passed",awardCount:"Prizes awarded: {N}",awardFallback:"Award issued",creditErrorSuffix:" (Tinker credit ran out)",noAwards:"No prizes awarded yet: this run stopped before committee judging.",factualLine:"Real result so far: {C} of {R} tests that ran passed their preregistered gates; {K} also pass the |ρ| ≥ 0.1 floor added after the run ({N} registered){committeeSuffix}",noCommitteeSuffix:"; no committee score yet",countLine:"{N} registered · {M} confirmed ({K} under the post-hoc |ρ| ≥ 0.1 floor)",track3Line:"Track 3 check (exploratory, 3 runs each): preregistered primary (guard2, stopped early, guarded) B 0.26 > S 0.24 > A 0.11; complete strict-guard set, picked after it finished, S 0.30 > A 0.09 > B 0.06. B leads S on mean only because S scored 0 on run 3001, where the guard rejected its candidate for the known integer-loop-bound false positive (unguarded 0.333); S beats B on the other two runs.",memoryComparisonUrl:"https://github.com/arii/caffeinated/blob/sf-ai-research-hack-2026/experiments/memory-comparison/README.md",track3Url:"https://github.com/arii/caffeinated/blob/sf-ai-research-hack-2026/experiments/confirmatory/RESULTS.md",bixbenchUrl:"https://github.com/arii/caffeinated/blob/sf-ai-research-hack-2026/experiments/real-runs/bixbench_mini-v2/held_out_test.json",charts:{toolsCaption:"Calls recorded in this run (Kimi + Exa + past.dev)",sourceCaption:"Source cards; some papers repeat.",funnelCaption:"Known relationships in teaching datasets, not discoveries.",bixbench:{baseline:{correct:1,total:7,ci:[.03,.51]},best:{correct:6,total:7,ci:[.49,.97]},caption:"7 held-out questions, one run."},track3:{groups:[{label:"Preregistered (stopped early)",values:[{arm:"B",value:.259},{arm:"S",value:.241},{arm:"A",value:.111}]},{label:"Complete set (picked after)",values:[{arm:"S",value:.296},{arm:"A",value:.093},{arm:"B",value:.056}]}],legend:[{arm:"B",label:"boredom swarm"},{arm:"S",label:"single agent"},{arm:"A",label:"meter off"}],caption:"3 runs each: neither ordering is significant."},memory:{pastdev:{hitAt1:.65,hitAt8:.95,medianLatencyMs:562},local:{hitAt1:.3,hitAt8:.825,medianLatencyMs:15},memories:419,probes:40,caption:"419 real memories, 40 hand-written probes."}}},Pr={event:uM,tools:dM,authors:fM,boredom:hM,sections:pM,labels:mM,results:gM},Pn=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),_M=(t,e)=>t.length>e?`${t.slice(0,e-1).trimEnd()}…`:t,Zf=(t,e)=>t<0?0:t<.25?t/.25:Math.exp(-(t-.25)/e),ia=new D(0,.7,-1.4),ra=Object.fromEntries(ms.map(t=>[t.phase,t.start]));function vM(t){const{world:e,renderer:n,recording:i}=t,r=e.camera,s=(i.manifest.agents||[]).map(B=>({id:String(B.agent_id),name:String(B.display_name||B.label||""),bored:B.founded_because==="bored"})),a=nM(i.events,s,i.manifest.totalTicks);if(!a)return null;const o=a,l=B=>s.find(C=>C.id===B)?.name||"Lab",c=B=>{for(let C=0;C<=Tr;C+=1/60)if(Xf(o,C)>=B)return C;return Tr},u=c(o.snapTick),f=c(o.foundedTick),d=c(o.bestTick),h=o.discoveries.filter(B=>B.tick>o.snapTick).map(B=>({t:c(B.tick),best:B.tick===o.bestTick,agentId:B.agentId})),g=o.verdict?c(o.verdict.tick):Tr,_=document.createElement("div");_.id="cinema",_.setAttribute("aria-hidden","true");const p=o.replicated.filter(B=>B>o.snapTick).length;_.innerHTML=`<div class="cin-glow"></div><div class="cin-crimson"></div><svg class="cin-links" viewBox="0 0 1920 1080" preserveAspectRatio="none"></svg><div class="cin-tags"></div>
 <div class="cin-brand"><b>${Pn(Pr.authors.project)}</b><span>Real run · Ig Nobel task</span></div>
 <div class="cin-telemetry"><div class="cin-meter"><div class="row"><span class="lbl">Boredom</span><b class="val">0.00</b><i class="chip">EXPLOIT</i></div><div class="bar"><span></span><em style="left:70%"></em></div></div>
 <div class="cin-score"><div class="row"><span class="lbl">Replicated findings</span><b class="val">0</b></div><div class="chart"></div></div></div>
 <div class="cin-papers"></div>
 <div class="cin-burst"><b>New best</b><span>Replicated on both halves</span></div>
 <div class="cin-proof"><div class="credit"><b>${Pn(Pr.authors.project)}</b><span>${Pr.authors.names.map(Pn).join(" · ")}</span></div><div class="kicker">This run</div><div class="stats">
  <div><b>${Math.max(...o.boredom.map(B=>B.value)).toFixed(2)}</b><span>boredom at snap</span></div>
  <div><b>${o.boredAgents.length}</b><span>labs founded by boredom</span></div>
  <div><b>${p}</b><span>replicated after the snap</span></div>
  <div><b>${o.verdict?1:0}</b><span>${Pn(o.verdict?.label||"award candidate")}</span></div></div>
  <div class="kicker">${Pn(Mo.pilot.title)}</div><div class="pilot">${Mo.pilot.rows.map(B=>`<div><span>${Pn(B.task)}</span><b>${Pn(B.result)}</b></div>`).join("")}</div>
  <p class="note">${Pn(Mo.pilot.note)}</p><div class="repo">${Pn(Mo.repo)}</div></div>
 <div class="cin-caption"><span></span></div>`,document.body.appendChild(_);const m=B=>_.querySelector(B),v=new K_("#ffc451",0,26,1);e.scene.add(v);const S=e.exposure??1,b=()=>new Map((e.agentPositions?.()||[]).map(B=>[B.id,B.position])),T=(B,C)=>{const W=B.map(X=>C.get(X)).filter(Boolean);return W.length?W.reduce((X,G)=>X.add(G),new D).multiplyScalar(1/W.length):ia.clone()},A=B=>(B.x=Et.clamp(B.x,-10.6,10.6),B.y=Et.clamp(B.y,1.2,4.35),B.z=Et.clamp(B.z,-12,11.4),B),y=(B,C=10.2,W=4.25)=>{const X=.42-B*.012;return{pos:A(new D(ia.x+Math.sin(X)*C,W,ia.z+Math.cos(X)*C)),look:ia.clone()}},E=(B,C,W,X)=>{const G=y(C).pos,ue=G.clone().sub(B);ue.y=0,ue.normalize().applyAxisAngle(new D(0,1,0),.18);const ne=B.clone().add(new D(0,1.05,0));return{pos:A(ne.clone().add(ue.multiplyScalar(W)).add(new D(0,X,0))),look:ne}},k=(B,C,W)=>{if(B==="hook"||B==="trap")return y(C);if(B==="snap"){const X=C<f+1||!o.boredAgents.length?[o.snapAgent]:o.boredAgents;return E(T(X,W),C,5.2-Math.min(1.2,(C-ra.snap)*.06),1.5)}if(B==="breakthrough"){const X=T([o.breakthroughAgent],W),G=E(X,C,5.6,2.2),ue=hu((C-d+.4)/5),ne=G.pos.clone().sub(G.look).setY(0).normalize();return{pos:A(G.pos.clone().add(ne.multiplyScalar(ue*3.4)).setY(Math.min(3.7,G.pos.y+ue*.3))),look:G.look.clone().lerp(ia.clone().setY(2),ue*.4)}}return y(C,10.4,4.3)},I=B=>{const C=B.clone().project(r);return{x:(C.x+1)/2*1920,y:(1-C.y)/2*1080,visible:C.z<1&&Math.abs(C.x)<1.05&&Math.abs(C.y)<1.05}};let R={papers:"",tags:"",links:"",chart:""};function H(B){const C=Math.max(0,Math.min(Tr,B)),W=Xf(o,C),X=iM(C);t.seek(W),t.updateWorld(C),e.scene.traverse(Ie=>{Ie.isSprite&&(Ie.visible=!1)});const G=b(),ue=ms.findIndex(Ie=>Ie.phase===X.phase),ne=hu((C-X.start)/2.6);let oe=k(X.phase,C,G);if(ue>0&&ne<1){const Ie=k(ms[ue-1].phase,C,G);oe={pos:Ie.pos.lerp(oe.pos,ne),look:Ie.look.lerp(oe.look,ne)}}r.position.copy(oe.pos),r.lookAt(oe.look),r.updateMatrixWorld();const de=Math.max(Zf(C-u,1.6),X.phase==="snap"||X.phase==="trap"&&C>u?.32:0)*(X.phase==="breakthrough"?Math.max(0,1-(C-ra.breakthrough)/2):1);let Ae=0;for(const Ie of h)Ae=Math.max(Ae,Zf(C-Ie.t,Ie.best?2.4:1.3)*(Ie.best?1:.65));C>d&&X.phase!=="proof"&&(Ae=Math.max(Ae,.7)),X.phase==="proof"&&(Ae=Math.max(Ae,.7*Math.max(0,1-(C-ra.proof)/3)));const Be=T([o.breakthroughAgent],G);v.position.set(Be.x,3.2,Be.z),v.intensity=Ae*14,n.toneMappingExposure=S*(1+Ae*.22-de*.12),_.style.setProperty("--gold",Ae.toFixed(3)),_.style.setProperty("--crimson",de.toFixed(3)),_.dataset.phase=X.phase;const se=rM(o,W),Se=sM(se.shown,se.regime);m(".cin-meter").dataset.tone=Se,m(".cin-meter .val").textContent=se.shown.toFixed(2),m(".cin-meter .chip").textContent=se.regime||"EXPLOIT",m(".cin-meter .bar span").style.width=`${Math.round(se.shown*100)}%`;const Pe=aM(o,W);m(".cin-score .val").textContent=String(Pe),m(".cin-score").dataset.gold=String(Pe>o.replicated.filter(Ie=>Ie<=o.snapTick).length);const Le=oM(o.replicated,o.startTick,o.endTick,W,400,118,"Replicated findings");Le!==R.chart&&(m(".cin-score .chart").innerHTML=Le,R.chart=Le);const xe=m(".cin-caption"),He=Math.min(1,(C-X.start-.25)/.5),St=ms[ue+1],ze=X.phase==="proof"?1:Math.min(1,(X.start+eM-C)/.4,St?(St.start-C-.15)/.4:1);xe.style.opacity=String(Math.max(0,Math.min(He,ze))),m(".cin-caption span").textContent=X.caption;const Ye=X.phase==="snap"?o.papers.filter(Ie=>Ie.tick<=W).slice(-3):[],ut=Ye.map(Ie=>`<div class="paper"><i>${Pn(Ie.tool==="seed"?"literature":Ie.tool)}</i><b>${Pn(_M(Ie.title,54))}</b><span>${Pn(l(Ie.agentId))}</span></div>`).join("");ut!==R.papers&&(m(".cin-papers").innerHTML=ut,R.papers=ut);const Ze=[],Rt=[],wt=[],$t=(Ie,F,Ut)=>{const st=G.get(Ie);if(!st)return;const at=I(st.clone().add(new D(0,2.05,0)));if(!at.visible)return;let pe=at.y;for(;wt.some(N=>Math.abs(N.x-at.x)<300&&Math.abs(N.y-pe)<46);)pe-=48;wt.push({x:at.x,y:pe}),Ze.push(`<div class="tag ${Ut}" style="left:${at.x.toFixed(0)}px;top:${pe.toFixed(0)}px">${Pn(F)}</div>`)};if(C>=u-.2&&C<36&&$t(o.snapAgent,`${l(o.snapAgent)} · B ${Math.max(...o.boredom.filter(Ie=>Ie.agentId===o.snapAgent&&Ie.tick<=W).map(Ie=>Ie.value),0).toFixed(2)}`,"snap"),C>=f&&C<ra.breakthrough)for(const Ie of o.boredAgents)$t(Ie,`${l(Ie)} · new lab`,"founded");const rt=h.some(Ie=>C>=Ie.t&&C<Ie.t+3.2);for(const Ie of h)!rt&&C>=Ie.t+3.2&&C<(Ie.best?ra.proof:Ie.t+4.6)&&X.phase==="breakthrough"&&$t(Ie.agentId,Ie.best&&C>=g?`${l(Ie.agentId)} · ${o.verdict?.label}`:`${l(Ie.agentId)} · replicated`,"gold");for(const Ie of o.shares){const F=c(Ie.tick);if(C>=F&&C<F+3.2&&X.phase==="snap"){const Ut=o.shares.filter(pe=>pe!==Ie).map(pe=>pe.agentId),st=G.get(Ie.agentId),at=Ut.map(pe=>G.get(pe)).find(Boolean);if(st&&at){const pe=I(st.clone().add(new D(0,1.2,0))),N=I(at.clone().add(new D(0,1.2,0)));Rt.push(`<path class="memory" d="M${pe.x.toFixed(0)} ${pe.y.toFixed(0)} Q${((pe.x+N.x)/2).toFixed(0)} ${(Math.min(pe.y,N.y)-120).toFixed(0)} ${N.x.toFixed(0)} ${N.y.toFixed(0)}"/>`),Ie===o.shares[0]&&Ze.push(`<div class="tag memory" style="left:${((pe.x+N.x)/2).toFixed(0)}px;top:${(Math.min(pe.y,N.y)-80).toFixed(0)}px">shared memory</div>`)}}}if(Ye.length){const Ie=Ye.at(-1),F=G.get(Ie.agentId);if(F){const Ut=I(F.clone().add(new D(0,1.3,0)));Rt.push(`<path class="scout" d="M${Ut.x.toFixed(0)} ${Ut.y.toFixed(0)} L470 ${(330+(Ye.length-1)*118).toFixed(0)}"/>`)}}const Yt=Ze.join(""),Tt=Rt.join("");Yt!==R.tags&&(m(".cin-tags").innerHTML=Yt,R.tags=Yt),Tt!==R.links&&(m(".cin-links").innerHTML=Tt,R.links=Tt);const Dt=h.filter(Ie=>C>=Ie.t).at(-1),tn=m(".cin-burst");tn.style.opacity=Dt&&X.phase==="breakthrough"?String(Math.max(0,1-Math.max(0,C-Dt.t-2.6)/.6)):"0",tn.style.setProperty("--k",Dt?String(Math.min(1,(C-Dt.t)/.35)):"0"),n.render(e.scene,r)}return{render:H,plan:o,duration:Tr}}const xM="#172c35",yM="#f4f3ec";function bM(t,e,n,i,r){const s=t.position.clone().sub(e),a=s.clone().negate().dot(t.getWorldDirection(new D));if(s.length()<2.5||n.dot(s)<=0||a<=0||i<=0||r<=0)return{visible:!1,scale:1};const o=i*r/(2*Math.tan(Et.degToRad(t.fov/2))*a),l=Math.max(1,12/o);return{visible:l<=1.8,scale:Math.min(1.8,l)}}const sa=new D;function kn(t,e,n,i,r,s){const a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;sa.copy(e),sa[i]=0,sa.normalize();const c=.5*a/(a+o),u=1-sa.angleTo(t)/l;return Math.sign(sa[n])===1?u*c:o/(a+o)+c+c*(1-u)}class nd extends $r{constructor(e=1,n=1,i=1,r=2,s=.1){const a=r*2+1;if(s=Math.min(e/2,n/2,i/2,s),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:n,depth:i,segments:r,radius:s},a===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const l=new D,c=new D,u=new D(e,n,i).divideScalar(2).subScalar(s),f=this.attributes.position.array,d=this.attributes.normal.array,h=this.attributes.uv.array,g=f.length/6,_=new D,p=.5/a;for(let m=0,v=0;m<f.length;m+=3,v+=2)switch(l.fromArray(f,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),f[m+0]=u.x*Math.sign(l.x)+c.x*s,f[m+1]=u.y*Math.sign(l.y)+c.y*s,f[m+2]=u.z*Math.sign(l.z)+c.z*s,d[m+0]=c.x,d[m+1]=c.y,d[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),h[v+0]=kn(_,c,"z","y",s,i),h[v+1]=1-kn(_,c,"y","z",s,n);break;case 1:_.set(-1,0,0),h[v+0]=1-kn(_,c,"z","y",s,i),h[v+1]=1-kn(_,c,"y","z",s,n);break;case 2:_.set(0,1,0),h[v+0]=1-kn(_,c,"x","z",s,e),h[v+1]=kn(_,c,"z","x",s,i);break;case 3:_.set(0,-1,0),h[v+0]=1-kn(_,c,"x","z",s,e),h[v+1]=1-kn(_,c,"z","x",s,i);break;case 4:_.set(0,0,1),h[v+0]=1-kn(_,c,"x","y",s,e),h[v+1]=1-kn(_,c,"y","x",s,n);break;case 5:_.set(0,0,-1),h[v+0]=kn(_,c,"x","y",s,e),h[v+1]=1-kn(_,c,"y","x",s,n);break}}static fromJSON(e){return new nd(e.width,e.height,e.depth,e.segments,e.radius)}}const qf=[{head:"rounded",eyes:"oval",antenna:"center",ears:"disc",prop:"magnifier",shell:"#fff7df",accent:"#1987c1",trim:"#f69a3d"},{head:"monitor",eyes:"happy",antenna:"center",ears:"disc",prop:"clipboard",shell:"#fce3ef",accent:"#d45e9b",trim:"#8745a8"},{head:"round",eyes:"oval",antenna:"offset-right",ears:"disc",prop:"flask",shell:"#e2f2ea",accent:"#398f86",trim:"#efbc56"},{head:"rounded",eyes:"happy",antenna:"pair",ears:"compact",prop:"magnifier",shell:"#e5eaf9",accent:"#6965b4",trim:"#e690aa"},{head:"monitor",eyes:"oval",antenna:"pair",ears:"disc",prop:"clipboard",shell:"#fff0d4",accent:"#cc8337",trim:"#328ea5"},{head:"round",eyes:"happy",antenna:"offset-left",ears:"ring",prop:"flask",shell:"#f9dfed",accent:"#dc75a9",trim:"#6c95bc"}];function rm(t){const e=[...t].reduce((n,i)=>n*31+i.charCodeAt(0)>>>0,0);return qf[e%qf.length]}function Bo(t,e,n,i){const a=(f,d)=>f<n.minX+.2||f>n.maxX-.2||d<n.minZ+.2||d>n.maxZ-.2||i.some(h=>f>h.minX-.2&&f<h.maxX+.2&&d>h.minZ-.2&&d<h.maxZ+.2),o=[{x:t.x,z:t.z,parent:-1}],l=new Set(["0,0"]);let c=-1;for(let f=0;f<o.length&&f<12e3;f++){const d=o[f];if(Math.hypot(d.x-e.x,d.z-e.z)<.48){c=f;break}for(const[h,g]of[[.45,0],[-.45,0],[0,.45],[0,-.45]]){const _=d.x+h,p=d.z+g,m=`${Math.round((_-t.x)/.45)},${Math.round((p-t.z)/.45)}`;!l.has(m)&&!a(_,p)&&(l.add(m),o.push({x:_,z:p,parent:f}))}}if(c<0)return[];const u=[];for(let f=c;f>=0;f=o[f].parent)u.push({x:o[f].x,z:o[f].z});return u.reverse().slice(1)}const ji={x:-7.8,z:-4.6},SM=[0,4,8,2,6,10,1,5,9,3,7,11];function pu(t=0){const e=-Math.PI/2+SM[(t%12+12)%12]*Math.PI/6;return{x:ji.x+Math.cos(e)*2.15,z:ji.z+Math.sin(e)*2.15}}function mu(t,e=0){if(t==="culture")return pu(e);const n=(e%4-1.5)*.8;return t==="analyzer"?{x:5.4+n,z:-1.25}:t==="explorer"?{x:.2+n,z:-9.2}:{x:-7.3+n,z:6.8}}const Sr=(t,e,n)=>t+(e-t)*n;function sm(t,e=!1){if(t==null||!Number.isFinite(t))return{level:"unknown",walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:!1};const n=Math.max(0,Math.min(100,t))/100,i=n<.2?"frenetic":n<.55?"engaged":n<.8?"bored":"drowsy",r=Sr(1.35,.5,n),s=Sr(2.2,.6,n),a=e?0:n<.35?Sr(.06,0,n/.35):0,o=Sr(9,4,n),l=n>.45?Sr(0,.42,(n-.45)/.55):0,c=n>.55?Sr(0,.12,(n-.55)/.45):0,u=n>.5?Sr(1,.42,(n-.5)/.5):1;return{level:i,walk:r,turn:s,bob:a,bobHz:o,droop:l,slump:c,saturation:u,zzz:n>=.8}}function MM(){return typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches}function Ui(t){return Number.isFinite(t)?Math.max(0,Math.min(100,t)):0}const jf=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];function ks(t){const e=Ui(t)/25,n=Math.min(3,Math.floor(e)),i=e-n;return"#"+jf[n].map((r,s)=>Math.round(r+(jf[n+1][s]-r)*i).toString(16).padStart(2,"0")).join("")}const EM={EXPLOIT:["Exploiting","calm","After a significant improvement or before min_attempts: most workers refine; one explores."],BOREDOM_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],YOKED_SNAP:["Boredom snap","snap","B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates."],PARADIGM_BREAKOUT:["Paradigm breakout","breakout","All workers explore; the gate requires a top-level mechanism not used recently."],CONVERGED:["Converged","converged","The gate allows only exact reruns of the best for confirmation."],FRUSTRATED:["Frustrated","frustrated",""]};function Or(t){if(!t)return{label:"",tone:"calm",description:""};const e=EM[t];return e?{label:e[0],tone:e[1],description:e[2]}:{label:t.replaceAll("_"," ").toLowerCase().replace(/^./,n=>n.toUpperCase()),tone:"calm",description:""}}function wM(t){return!t||typeof t!="object"?[]:Object.entries(t).filter(e=>typeof e[1]=="number"&&Number.isFinite(e[1])).sort((e,n)=>e[0].localeCompare(n[0])).map(([e,n])=>({key:e,label:e.replaceAll("_"," "),value:Math.round(Math.max(0,Math.min(1,n))*100)}))}function TM(t,e,n){let i;for(const r of t){if(r.tick>n)break;r.type==="boredom.measured"&&r.agentId===e&&r.payload&&(i=r.payload)}return i?{regime:typeof i.regime=="string"?i.regime:void 0,components:i.components}:null}const gu=t=>Math.max(0,Math.min(1,t)),AM=t=>1+(1.70158+1)*(t-1)**3+1.70158*(t-1)**2,Yf=t=>{const e=gu(t);return e===0||e===1?e:gu(AM(e))};function RM(t,e){const n=gu(t),i=Math.max(0,Math.floor(e)),r=Yf(n/.4),s=Array.from({length:i},(a,o)=>{const l=.4+o*.6/Math.max(1,i),c=.6/Math.max(1,i);return Yf((n-l)/c)});return{room:r,agents:s}}function CM(t){const e=n=>Array.isArray(t)?t.includes(n):t.has(n);return e("scientist")?e("scrub")?null:"scrub":"scientist"}function PM(){const t=new R_;t.background=new je("#e4edf3"),t.fog=new ju("#e4edf3",34,90);const e=new Fn(66,innerWidth/innerHeight,.08,110);e.position.set(0,1.69,9.5),e.lookAt(0,1.8,-3);const n=[],i=new $r(1,1,1),r=(N,z=.68,Y=0)=>new Fo({color:N,roughness:z,metalness:Y}),s=r("#f2f6f7"),a=r("#fafcfc",.37),o=r("#31434b",.42),l=r("#b1bec5",.32,.65),c=r("#c8d3d6"),u=r("#a8b5a1"),f=r("#b4a38c",.8),d=r("#928572");r("#18252a",.38);const h=r("#f9f4e6"),g=r("#3e8493"),_=r("#d2a468"),p=new X_({color:"#c6dfdc",transparent:!0,opacity:.14,roughness:.12,metalness:.08,depthWrite:!1,side:zn}),m=new qi({color:"#fff6dd"}),v=new qi({color:"#80b7ab"}),S=(N,z,Y,M,x,U,K,L=t)=>{const J=new _t(i,K);return J.position.set(N,z,Y),J.scale.set(M,x,U),L.add(J),J},b=(N,z,Y,M,x,U,K=t,L=20)=>{const J=new _t(new La(M,M,x,L),U);return J.position.set(N,z,Y),K.add(J),J},T=(N,z,Y,M,x,U=t)=>{const K=new _t(new Qu(M,16,12),x);return K.position.set(N,z,Y),U.add(K),K},A=(N,z,Y,M)=>n.push({minX:N-Y/2,maxX:N+Y/2,minZ:z-M/2,maxZ:z+M/2}),y=(N,z,Y,M,x=t)=>{const U=z.clone().sub(N),K=new _t(new La(Y,Y,U.length(),12),M);return K.position.copy(N).add(z).multiplyScalar(.5),K.quaternion.setFromUnitVectors(new D(0,1,0),U.normalize()),x.add(K),K},E=(N,z,Y,M,x,U,K="#f5f4ec",L="#425859",J=0)=>{const $=document.createElement("canvas");$.width=1024,$.height=Math.max(64,Math.round(1024*U/x));const V=$.getContext("2d");V.fillStyle=K,V.fillRect(0,0,$.width,$.height);const Q=N.split(`
`),he=Math.min($.height/(Q.length+1),$.width/(Math.max(...Q.map(me=>me.length))*.62));V.fillStyle=L,V.textAlign="center",V.textBaseline="middle",V.font=`500 ${he}px sans-serif`,Q.forEach((me,fe)=>V.fillText(me,512,$.height/2+(fe-(Q.length-1)/2)*he*1.3));const P=new br($);P.colorSpace=Wt;const ie=new qi({map:P,side:sr,toneMapped:!1,fog:!1}),q=new _t(new Cr(x,U),ie);return q.position.set(z,Y,M),q.rotation.y=J,q.userData.textHeight=he*x/1024,q.userData.label=N,t.add(q),q},k=[],I=(N,z,Y,M,x,U,K=0)=>{const L=E(N,z,Y,M,x,U,xM,yM,K);return L.name="zone-label",k.push(L),L},R=(N,z,Y)=>{const M=document.createElement("canvas");M.width=960,M.height=360;const x=M.getContext("2d");x.fillStyle="#fff9ea",x.strokeStyle="#b6c9c4",x.lineWidth=4,x.beginPath(),x.roundRect(4,4,952,310,30),x.fill(),x.stroke(),x.beginPath(),x.moveTo(450,313),x.lineTo(480,352),x.lineTo(510,313),x.fill(),x.textAlign="left",x.fillStyle="#35716c",x.font="bold 38px sans-serif",x.fillText(N.toUpperCase(),34,48),x.fillStyle="#263b41",x.font="48px sans-serif";const U=z.replace(/\s+/g," ").trim().split(" "),K=[];let L="";for(const $ of U){const V=L?L+" "+$:$;x.measureText(V).width>875&&L?(K.push(L),L=$):L=V}L&&K.push(L),K.slice(0,3).forEach(($,V)=>{let Q=$;V===2&&K.length>3&&(Q=Q.replace(/.{0,3}$/,"…")),x.fillText(Q,34,110+V*53)}),x.fillStyle="#6c817c",x.font="32px sans-serif",x.fillText(Y.length?"WITH "+Y.join(" · ").slice(0,62):"RECORDED RESEARCH DISCUSSION",34,280);const J=new br(M);return J.colorSpace=Wt,new _t(new Cr(2.7,1.0125),new qi({map:J,transparent:!0,side:zn,depthWrite:!1,depthTest:!1,toneMapped:!1}))};t.add(new j_("#f5faff","#9caeb8",2.15));const H=new Sf("#ffffff",2.2);H.position.set(-8,11,3),t.add(H);const B=new Sf("#d0e9fa",.85);B.position.set(8,5,-8),t.add(B);const C=document.createElement("canvas");C.width=512,C.height=512;const W=C.getContext("2d");W.fillStyle="#d9e2e6",W.fillRect(0,0,512,512);for(let N=0;N<1700;N++){const z=Math.sin(N*41.77)*.5+.5,Y=Math.sin(N*19.31+5)*.5+.5;W.fillStyle=N%3?"#ecf0f1":"#c3d0d6",W.fillRect(z*512,Y*512,1+N%3,1+N%2)}const X=new br(C);X.colorSpace=Wt,X.wrapS=X.wrapT=Ko,X.repeat.set(8,9),X.anisotropy=8,S(0,-.12,0,24,.24,28,new Fo({map:X,roughness:.85})),S(0,2.5,-13.5,24,5,.3,s),S(11.75,2.5,0,.3,5,27,s),S(0,.43,-13.27,23.5,.86,.12,f),S(11.53,.43,0,.12,.86,26.5,f),S(0,.08,-13.1,23.5,.16,.06,o),S(11.38,.08,0,.06,.16,26.5,o);const G=S(0,4.9,0,24,.16,28,s);G.userData.overhead=!0;for(const N of[-12,-6,0,6,12])S(-11.6,2.5,N,.22,5,.14,s);S(-11.6,.55,0,.3,1.1,27,s),S(-11.6,4.65,0,.3,.7,27,s),S(-11.68,2.75,0,.025,3.5,27,p);for(const N of[1.12,3.8])S(-11.4,N,0,.12,.07,27,l);S(-7.9,2.25,12.7,7.5,4.5,.14,s),S(7.9,2.25,12.7,7.5,4.5,.14,s);for(const N of[-3.9,3.9])S(N,2.25,12.65,.12,4.5,.18,l);S(0,2.25,12.8,7.7,4.5,.025,p),I("LAB ENVIRONMENT / RESEARCH COMMONS",0,4.1,12.55,6.6,.38,Math.PI);for(const N of[-8,-1,6]){S(0,4.35,N,20,.08,.07,o);for(const z of[-7,0,7])b(z,4.18,N,.13,.22,o),b(z,4.06,N,.1,.025,m)}const ue=new _t(new ba(1.8,.025,8,64),d);ue.rotation.x=Math.PI/2,ue.position.set(0,3.9,.5),t.add(ue);for(const N of[-1.6,1.6])y(new D(N,3.9,.5),new D(N,4.84,.5),.012,l);S(-28,-.65,-2,45,1,70,r("#b0bf9d"));const ne=r("#98af91"),oe=r("#897e69");for(let N=0;N<14;N++){const z=-17-N%3*3,Y=-25+N*4.1;b(z,1.3,Y,.12,3,oe);const M=T(z,3,Y,1.25+N%3*.2,ne);M.scale.y=1.45}function de(N,z){b(N,.32,z,.34,.64,s),b(N,.66,z,.29,.04,d);for(let Y=0;Y<6;Y++){const M=Y*2.4;y(new D(N,.65,z),new D(N+Math.cos(M)*.25,1.5+Y%3*.18,z+Math.sin(M)*.25),.025,u),T(N+Math.cos(M)*.3,1.3+Y%3*.18,z+Math.sin(M)*.3,.16,u).scale.set(.55,2,.8)}A(N,z,.8,.8)}de(-10.3,8.4),de(-10.3,-10.8),de(10.3,10.8);function Ae(N,z,Y,M){S(N,.1,z,Y-.17,.2,M-.12,o),S(N,.51,z,Y,.78,M,c),S(N,.94,z,Y+.08,.08,M+.08,o);const x=Math.round(Y/.85);for(let U=0;U<x;U++){const K=N-Y/2+(U+.5)*Y/x;S(K,.53,z+M/2+.009,Y/x-.025,.7,.018,a),S(K,.77,z+M/2+.028,.29,.025,.035,l)}A(N,z,Y+.12,M+.12)}function Be(N,z,Y,M="#8ab9ad"){S(N,1,z,.48,.035,.3,l),S(N,1.22,z,.055,.4,.055,l),S(N,1.53,z,.94,.59,.055,o),E(Y+`
RESEARCH IN PROGRESS`,N,1.53,z+.032,.86,.51,"#203137",M),S(N,1.01,z+.36,.65,.035,.2,s);for(let x=0;x<5;x++)S(N-.25+x*.12,1.031,z+.36,.07,.007,.11,l)}function se(N,z,Y){S(N,1.02,z,.56,.09,.3,u);for(let M=0;M<5;M++)b(N-.22+M*.11,1.16,z,.031,.25,a,t,10),b(N-.22+M*.11,1.3,z,.038,.025,Y,t,10)}function Se(N,z){const Y=new Kn;Y.position.set(N,1,z),t.add(Y);const M=S(0,.045,0,.58,.09,.55,a,Y);M.rotation.y=-.1;const x=S(0,.36,-.15,.14,.62,.16,a,Y);x.rotation.x=-.15;const U=S(0,.61,-.03,.18,.15,.37,a,Y);U.rotation.x=-.2;const K=b(0,.67,.1,.07,.27,o,Y);K.rotation.x=-.38,b(0,.47,.1,.065,.18,l,Y),S(0,.23,.08,.4,.04,.35,o,Y),b(0,.11,.08,.12,.04,m,Y),T(.13,.32,-.11,.065,o,Y)}function Pe(N,z){S(N,1.01,z,.35,.025,.22,l),S(N,1.25,z,.025,.45,.025,l),S(N,1.46,z,.35,.035,.05,s);for(let Y=0;Y<3;Y++){const M=N-.12+Y*.12;b(M,1.28,z,.026,.32,a,t,12),b(M,1.08,z,.007,.12,l,t,8),b(M,1.46,z,.035,.035,Y%2?g:_,t,12)}}const Le=ji.x,xe=ji.z;b(Le,.43,xe,.18,.78,l),b(Le,.88,xe,1.38,.12,f),b(Le,.95,xe,1.31,.025,a),A(Le,xe,2.8,2.8);for(let N=0;N<12;N++){const z=N*Math.PI/6,Y=Le+Math.sin(z)*2.15,M=xe+Math.cos(z)*2.15;b(Y,.36,M,.29,.07,l),b(Y,.18,M,.035,.32,l);const x=b(Y,.43,M,.31,.09,N%3===0?r("#dfabc5"):u);x.userData.discussionSeat=!0;const U=S(Le+Math.sin(z)*.87,.979,xe+Math.cos(z)*.87,.28,.015,.21,h);U.rotation.y=-z}b(Le,.99,xe,.19,.025,_),I("01   IDEATION ROUNDTABLE",Le,2.65,-7.2,4.7,.5),Ae(5.4,-2.8,6.2,1.7);const He=S(5.6,1.44,-2.85,1.08,.88,.3,_);He.rotation.x=-.12,S(5.6,1.65,-2.666,.81,.25,.035,o),E("12.48 V",5.6,1.65,-2.642,.71,.19,"#c6dfc9","#263e37");const St=b(5.6,1.3,-2.64,.16,.07,o);St.rotation.x=Math.PI/2;const ze=S(5.64,1.36,-2.59,.025,.11,.025,s);ze.rotation.z=-.5;for(const[N,z]of[[5.28,g],[5.88,_]])T(N,1.1,-2.64,.045,o),y(new D(N,1.1,-2.61),new D(N+.35,1.03,-2.1),.018,z),y(new D(N+.35,1.03,-2.1),new D(N+.9,1.04,-2.17),.018,z);S(7.2,1.01,-2.8,.95,.055,.68,u);for(let N=0;N<4;N++)S(6.9+N*.19,1.08,-2.8,.1,.09,.18,o),S(6.9+N*.19,1.04,-2.8,.02,.018,.57,l);Be(3.3,-3.08,"PHYSICS / MEASUREMENTS"),I("02   PHYSICS / ELECTRICAL BENCH",5.4,.62,-1.935,4.7,.5),Ae(.2,-10.6,5.8,1.5),Be(-1.5,-10.8,"CHEMISTRY / REACTIONS");for(let N=0;N<5;N++){const z=.25+N*.43,Y=-10.55+N%2*.19,M=[g,_,u][N%3];b(z,1.16,Y,.13,.35,p),b(z,1.09,Y,.115,.19,M),b(z,1.4,Y,.055,.15,p),b(z,1.49,Y,.065,.045,o)}se(2.2,-10.9,g),Pe(.1,-11.05),I("03   CHEMISTRY / REAGENT LAB",.2,2.65,-11.4,5.65,.5),I("LAB ENVIRONMENT",.15,3.82,-13.32,7.4,.8);for(let N=0;N<5;N++)S(-2.2+N*1.12,2.68,-13.29,.85,.06,.02,N%2?u:f);Ae(-7.3,5.4,4.8,1.45),Be(-8.6,5.18,"BIOLOGY / CELL CULTURES"),Se(-7.15,5.32);for(let N=0;N<3;N++){const z=-6.25+N*.43,Y=5.5+N%2*.3;b(z,1.025,Y,.18,.055,p),b(z,1.045,Y,.16,.015,u);for(let M=0;M<5;M++){const x=M*2.4,U=T(z+Math.cos(x)*.1,1.065,Y+Math.sin(x)*.1,.035,N%2?_:g);U.scale.y=.35}}se(-5.55,5.15,g),I("04   BIOLOGY / CELLS & CULTURES",-7.3,.65,6.145,4.3,.5);for(const N of[-9.9,-7.9,-5.9])S(10.75,1.22,N,1.4,2.4,1.5,a),S(10.02,1.22,N,.035,2.18,1.35,c),S(9.98,1.35,N+.42,.035,.43,.035,l),A(10.75,N,1.5,1.6);I("SAMPLE STORAGE",10,2.7,-7.9,3.6,.26,-Math.PI/2),Ae(9.3,7.2,3.7,1.35),S(9.5,.99,7.1,.8,.025,.6,l),S(9.5,1.008,7.1,.63,.015,.46,o),y(new D(9.5,1,6.8),new D(9.5,1.5,6.8),.025,l),y(new D(9.5,1.5,6.8),new D(9.5,1.5,7.05),.025,l),I("WASH / RESET",9.3,.65,7.89,2.9,.22);for(const[N,z]of[[3.7,-.5],[-7.5,7.7]]){b(N,.66,z,.32,.12,u),b(N,.34,z,.045,.56,l);for(let Y=0;Y<4;Y++){const M=Y*Math.PI/2;y(new D(N,.12,z),new D(N+Math.cos(M)*.37,.08,z+Math.sin(M)*.37),.025,l)}A(N,z,.7,.7)}b(0,.13,.5,1.85,.26,d),b(0,.52,.5,1.7,.55,f),b(0,.84,.5,1.84,.1,a),b(0,.9,.5,1.62,.035,o),A(0,.5,3.7,3.7),I("RECORDED RESEARCH / AGENT ACTIVITY",0,.64,2.23,3.8,.5);const Ye=new Kn;Ye.position.set(0,.95,.5),t.add(Ye);const ut=[];for(let N=0;N<36;N++){const z=N*2.39996,Y=Math.sqrt(N/36)*1.35,M=T(Math.cos(z)*Y,.15+N%5*.11,Math.sin(z)*Y,.045+N%3*.014,N%4===0?_:u,Ye);ut.push(M)}for(const N of[-1.45,1.45])for(const z of[-1.1,2.1])b(N,1.03,z,.018,.22,l);const Ze=[u,f,g,h,_];for(const N of[-6.2,6.2]){for(const z of[N-.9,N+.9])S(z,1.75,-12.7,.1,3.5,.5,f);for(const z of[.25,1.25,2.25,3.25]){S(N,z,-12.7,1.9,.075,.6,f);for(let Y=0;Y<6;Y++)S(N-.7+Y*.27,z+.3,-12.7,.17,.5-Y%3*.06,.32,Ze[Y%5])}A(N,-12.7,2.05,.75)}I("DATASETS / SHARED KNOWLEDGE",-6.2,3.62,-12.36,2.9,.22),I("MODELS / REFERENCE LIBRARY",6.2,3.62,-12.36,2.9,.22);function Rt(N,z,Y){const M=document.createElement("canvas");M.width=256,M.height=64;const x=M.getContext("2d");x.fillStyle="rgba(23,35,44,.86)",x.beginPath(),x.roundRect(4,6,248,52,14),x.fill(),x.fillStyle="#ffffff26",x.beginPath(),x.roundRect(16,38,224,10,5),x.fill(),z!=null&&(x.fillStyle=ks(z),x.beginPath(),x.roundRect(16,38,Math.max(10,224*z/100),10,5),x.fill()),x.fillStyle="#f4f0e4",x.font="600 21px sans-serif",x.textBaseline="middle",x.fillText(z==null?"Boredom n/a":`Bored ${Math.round(z)}%`,18,22),Y&&(x.textAlign="right",x.fillStyle="#ddc270",x.font="600 15px sans-serif",x.fillText(Y.toUpperCase(),238,22));const U=N.material;U.map?.dispose(),U.map=new br(M),U.map.colorSpace=Wt,U.needsUpdate=!0}const wt=(()=>{const N=document.createElement("canvas");N.width=128,N.height=128;const z=N.getContext("2d");z.fillStyle="#e9e4f4",z.strokeStyle="#31434b",z.lineWidth=6,z.font="700 40px sans-serif";for(const[M,x,U,K]of[["z",30,98,30],["z",58,70,40],["Z",86,38,52]])z.font=`700 ${K}px sans-serif`,z.fillStyle="#31434b",z.fillText(M,x+3,U+3),z.fillStyle="#e9e4f4",z.fillText(M,x,U);const Y=new br(N);return Y.colorSpace=Wt,Y})(),$t=(N,z,Y)=>{const M=Math.atan2(Math.sin(z-N),Math.cos(z-N));return Math.abs(M)<Y?z:N+Math.sign(M)*Y},rt=new Map;let Yt=1;function Tt(N,z,Y,M,x,U){const K=new Kn;K.position.set(N,0,z),K.rotation.y=Y,t.add(K);const L=rm(U),J=r(L.shell,.62),$=r("#293b42",.8),V=r(L.accent,.48),Q=r(L.trim,.57),he=new qi({color:"#263b41",side:vn}),P=M.startsWith("B")?u:M.startsWith("C")?_:g,ie=(Ke,Dn,Gr,Xn,Vs,Ws,pr,kl=K,Za=.055)=>{const Xs=new nd(Xn,Vs,Ws,3,Math.min(Za,Xn/3,Vs/3,Ws/3)),Vr=new _t(Xs,pr);Vr.position.set(Ke,Dn,Gr),kl.add(Vr);const qa=new _t(Xs,he);return qa.scale.setScalar(1.055),Vr.add(qa),Vr};for(const Ke of[-.13,.13])ie(Ke,.42,0,.16,.4,.18,J),T(Ke,.19,.055,.12,V,K).scale.set(.95,.68,1.4);ie(0,.99,0,.54,.61,.35,J,K,.1),ie(0,.72,0,.57,.13,.37,J,K,.06),S(0,.98,.184,.012,.45,.012,$,K);const q=S(-.105,1.21,.19,.16,.07,.025,J,K);q.rotation.z=-.55;const me=S(.105,1.21,.19,.16,.07,.025,J,K);me.rotation.z=.55,b(0,1.36,0,.09,.12,V,K);const fe=new Kn;if(fe.position.set(0,1.64,0),K.add(fe),L.head==="round"){const Ke=T(0,0,0,.265,J,fe);Ke.scale.set(1.21,1,.92);const Dn=new _t(Ke.geometry,he);Dn.scale.setScalar(1.055),Ke.add(Dn)}else ie(0,0,0,.59,L.ears==="compact"?.44:.49,.45,J,fe,L.head==="monitor"?.055:.13);const ge=L.head==="monitor";ge&&ie(0,-.005,.232,.49,.36,.025,$,fe,.06);for(const Ke of[-1,1]){const Dn=b(Ke*.335,0,0,.125,.09,V,fe);Dn.rotation.z=Math.PI/2;const Gr=b(Ke*.389,0,0,L.ears==="compact"?.06:.085,.025,Q,fe);if(Gr.rotation.z=Math.PI/2,L.ears==="ring"){const Xn=new _t(new ba(.125,.012,6,24),$);Xn.rotation.y=Math.PI/2,Xn.position.set(Ke*.385,0,0),fe.add(Xn)}}const Ne=L.antenna==="pair"?[-.17,.17]:[L.antenna==="offset-right"?.15:L.antenna==="offset-left"?-.16:0];for(const Ke of Ne)y(new D(Ke,.23,0),new D(Ke+(L.antenna==="offset-right"?.045:0),.39,0),.018,$,fe),T(Ke+(L.antenna==="offset-right"?.045:0),.4,0,.047,Q,fe);const $e=document.createElement("canvas");$e.width=256,$e.height=200;const ae=$e.getContext("2d"),Te=ge?"#fff8e4":"#263b41";ae.fillStyle=Te,ae.strokeStyle=Te,ae.lineWidth=12,ae.lineCap="round";for(const Ke of[82,174])ae.beginPath(),L.eyes==="happy"?(ae.arc(Ke,79,15,Math.PI,Math.PI*2),ae.stroke()):(ae.ellipse(Ke,76,10,17,0,0,Math.PI*2),ae.fill());ae.fillStyle="#f29b40";for(const Ke of[52,204])ae.beginPath(),ae.ellipse(Ke,112,13,8,0,0,Math.PI*2),ae.fill();ae.fillStyle="#263b41",ae.beginPath(),ae.ellipse(128,123,24,28,0,0,Math.PI),ae.closePath(),ae.fill(),ae.fillStyle="#f18540",ae.beginPath(),ae.ellipse(128,137,13,9,0,0,Math.PI*2),ae.fill();const ce=new br($e);ce.colorSpace=Wt;const _e=new qi({map:ce,transparent:!0,depthWrite:!1}),ot=new _t(new Cr(.49,.38),_e);ot.position.set(0,-.01,.255),fe.add(ot);const yt=new Kn;if(yt.position.set(.32,1.22,0),K.add(yt),ie(0,-.12,0,.16,.29,.19,J,yt,.065),T(0,-.28,.07,.085,V,yt),ie(0,-.29,.16,.13,.12,.2,J,yt,.05),T(0,-.29,.28,.092,V,yt),ie(-.32,1.04,0,.16,.36,.19,J,K,.07),T(-.32,.84,.06,.09,V,K),L.prop==="magnifier"){const Ke=new _t(new ba(.1,.018,8,24),V);Ke.position.set(.32,1.05,.4),K.add(Ke),y(new D(.32,.96,.4),new D(.32,.84,.4),.022,$,K);const Dn=b(.32,1.05,.4,.084,.008,p,K);Dn.rotation.x=Math.PI/2}else if(L.prop==="clipboard"){ie(-.31,.96,.23,.22,.29,.035,Q,K,.025),S(-.31,.97,.253,.17,.22,.008,h,K);for(let Ke=0;Ke<3;Ke++)S(-.31,.92+Ke*.05,.261,.11,.012,.005,V,K)}else{b(-.31,.97,.17,.028,.15,V,K);const Ke=new _t(new Ku(.078,.15,16),Q);Ke.position.set(-.31,.86,.17),K.add(Ke)}const Wn=T(-.17,1.22,.19,.018,v,K);Wn.name="agent-status-led";const fr=E(M,.12,1.04,.19,.22,.14,"#fff7df","#31434b");t.remove(fr),K.add(fr),S(.12,.93,.19,.2,.045,.015,P,K);const Hs=E(M.toUpperCase(),N,2.07,z+.16,.58,.18,"#f4f8fa","#31434b");K.userData.ownedMaterials=[J,$,V,Q,he,_e,fr.material],K.userData.ownedTextures=[ce,fr.material.map];const Gs=new ac(new Oo({transparent:!0,depthTest:!1}));Gs.scale.set(.8,.8,1),t.add(Gs);const hr=new ac(new Oo({transparent:!0,depthTest:!1}));hr.scale.set(.86,.215,1),hr.name="boredom-meter",t.add(hr);const ki=new ac(new Oo({map:wt,transparent:!0,depthTest:!1}));ki.scale.set(.5,.5,1),ki.name="boredom-zzz",ki.visible=!1,t.add(ki);for(const Ke of[J,$,V,Q])Ke.userData.baseColor=Ke.color.clone();const ni={id:U,station:x,head:fe,arm:yt,light:Wn,group:K,sign:Hs,path:[],target:"",activity:Gs,activityState:"",idea:null,ideaText:"",meter:hr,meterKey:"",zzz:ki,tint:1};return rt.set(U,ni),ni}const Dt=new Map;for(const N of[...t.children])if(N instanceof _t&&N.geometry===i&&!N.userData.overhead&&!Array.isArray(N.material)&&!N.material.transparent){const z=Dt.get(N.material)||[];z.push(N),Dt.set(N.material,z)}for(const[N,z]of Dt){if(z.length<3)continue;const Y=new z_(i,N,z.length);z.forEach((M,x)=>{M.updateMatrix(),Y.setMatrixAt(x,M.matrix),t.remove(M)}),Y.instanceMatrix.needsUpdate=!0,Y.computeBoundingSphere(),t.add(Y)}const tn=[{id:"culture",name:"Ideation roundtable",description:"See researchers discuss their shared questions",position:new D(-7.8,1.25,-4.6),radius:3.1},{id:"analyzer",name:"Physics bench",description:"Measure circuits with the multimeter",position:new D(4.6,1.25,-.8),radius:3.1},{id:"explorer",name:"Chemistry lab",description:"Explore reactions and reagent experiments",position:new D(.2,1.25,-8.8),radius:3.1},{id:"notebook",name:"Biology lab",description:"Inspect cells and cultures",position:new D(-6.3,1.25,7.2),radius:3.1}];let Ie=0;const F={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};function Ut(N,z){const Y=Math.max(0,Math.min(.05,N-Ie));Ie=N;for(const L of k){const J=new D(0,0,1).applyQuaternion(L.quaternion),$=bM(e,L.position,J,L.userData.textHeight,innerHeight);L.visible=$.visible,L.scale.set($.scale,$.scale,1)}Ye.rotation.y=N*(z.replay||z.running?.025:.006),ut.forEach((L,J)=>{L.visible=J<z.agents.length*4,L.position.y=.15+J%5*.11+Math.sin(N*.8+J)*.025});const M=new Set(z.agents.map(L=>L.id));for(const[L,J]of rt)if(!M.has(L)){if(t.remove(J.group,J.sign,J.activity,J.meter,J.zzz),J.meter.material.map?.dispose(),J.meter.material.dispose(),J.zzz.material.dispose(),J.idea){t.remove(J.idea),J.idea.geometry.dispose();const V=J.idea.material;V.map?.dispose(),V.dispose()}J.activity.material.map?.dispose(),J.activity.material.dispose(),J.group.traverse(V=>{V instanceof _t&&V.geometry!==i&&V.geometry.dispose()});for(const V of J.group.userData.ownedMaterials)V.dispose();for(const V of J.group.userData.ownedTextures||[])V?.dispose();J.sign.geometry.dispose();const $=J.sign.material;$.map?.dispose(),$.dispose(),rt.delete(L)}z.agents.forEach((L,J)=>{let $=rt.get(L.id);$||($=Tt(L.position?.x??(J%3-1)*.6,L.position?.z??10.4+Math.floor(J/3)*.4,0,L.name,L.stationId,L.id));const V=L.id.startsWith("worker-")?Number(L.id.match(/\d+$/)?.[0]||1)-1:J%4,Q=z.finale===!0,he=J/Math.max(1,z.agents.length)*Math.PI*2,P=Q?new D(ji.x+Math.cos(he)*2.35,0,ji.z+Math.sin(he)*2.35):mu(L.stationId,V),ie=Q?`finale:${J}`:`${L.stationId}:${V}`;$.target!==ie&&($.target=ie,$.station=L.stationId,$.path=Bo($.group.position,P,F,n)),L.position&&!Q&&($.group.position.set(L.position.x,0,L.position.z),$.path=[]);const q=sm(L.boredom,z.reducedMotion),me=$.path[0];if(me){const Te=me.x-$.group.position.x,ce=me.z-$.group.position.z,_e=Math.hypot(Te,ce);if(_e<.07)$.path.shift();else{const ot=Math.min(_e,Y*1.8*q.walk);$.group.position.x+=Te/_e*ot,$.group.position.z+=ce/_e*ot,$.group.rotation.y=z.reducedMotion?Math.atan2(Te,ce):$t($.group.rotation.y,Math.atan2(Te,ce),Math.max(.02,Y*6*q.turn))}}else $.group.rotation.y=L.position?.heading??(L.stationId==="culture"?Math.atan2(ji.x-$.group.position.x,ji.z-$.group.position.z):Math.PI);$.sign.position.set($.group.position.x,2.28,$.group.position.z),$.sign.lookAt(e.position),$.activity.position.set($.group.position.x,2.85,$.group.position.z);const fe=!!me||!!L.position?.moving,ge=`${L.boredom==null?"-":Math.round(L.boredom)}:${L.regime||""}`;$.meter.visible=L.boredom!=null&&Number.isFinite(L.boredom),$.meter.visible&&$.meterKey!==ge&&($.meterKey=ge,Rt($.meter,L.boredom,Or(L.regime).label)),$.meter.position.set($.group.position.x,2.5,$.group.position.z),$.group.position.y=Q?z.reducedMotion?0:.12+Math.abs(Math.sin(N*3+J))*.18:fe?Math.abs(Math.sin(N*q.bobHz+J))*q.bob:0,Q&&!z.reducedMotion&&($.group.rotation.y+=Y*.35),$.group.rotation.x=q.slump,$.zzz.visible=q.zzz&&!fe,$.zzz.position.set($.group.position.x+.32,1.95+(z.reducedMotion?0:(N*.35+J*.3)%1*.35),$.group.position.z),$.zzz.material.opacity=z.reducedMotion?.9:1-(N*.35+J*.3)%1*.6,Math.abs($.tint-q.saturation)>.02&&($.tint=q.saturation,$.group.traverse(Te=>{if(Te instanceof _t&&Te.material instanceof Fo&&Te.material.userData.baseColor){const ce=Te.material.userData.baseColor,_e=ce.r*.3+ce.g*.59+ce.b*.11;Te.material.color.setRGB(_e+(ce.r-_e)*q.saturation,_e+(ce.g-_e)*q.saturation,_e+(ce.b-_e)*q.saturation)}})),$.activity.visible=L.state!=="idle"&&!(L.stationId==="culture"&&L.discussionBrief);const Ne=L.discussionBrief||"",$e=Ne?`${L.name}:${Ne}:${(L.discussionPeers||[]).join(",")}`:"";if($.ideaText!==$e){if($.idea){t.remove($.idea),$.idea.geometry.dispose();const Te=$.idea.material;Te.map?.dispose(),Te.dispose(),$.idea=null}$.ideaText=$e,Ne&&($.idea=R(L.name,Ne,L.discussionPeers||[]),$.idea.name="recorded-discussion-bubble",t.add($.idea))}if($.idea&&($.idea.visible=Yt>=.98&&L.stationId==="culture"&&!L.position?.moving&&(!!L.discussionBrief||L.state==="thinking"||L.state==="reviewing"),$.idea.position.set($.group.position.x,3.05,$.group.position.z),$.idea.lookAt(e.position)),$.activityState!==L.state){$.activityState=L.state;const Te=document.createElement("canvas");Te.width=128,Te.height=128;const ce=Te.getContext("2d");ce.strokeStyle="#31434b",ce.fillStyle="#f4f0e4",ce.lineWidth=7,ce.lineCap="round",ce.lineJoin="round",L.state==="thinking"?(ce.beginPath(),ce.moveTo(64,19),ce.lineTo(64,30),ce.moveTo(37,31),ce.lineTo(44,39),ce.moveTo(91,31),ce.lineTo(84,39),ce.stroke(),ce.beginPath(),ce.arc(64,57,25,Math.PI,Math.PI*2),ce.lineTo(82,75),ce.lineTo(46,75),ce.closePath(),ce.fill(),ce.stroke(),ce.beginPath(),ce.moveTo(50,88),ce.lineTo(78,88),ce.moveTo(54,99),ce.lineTo(74,99),ce.stroke()):L.state==="working"?(ce.beginPath(),ce.arc(48,48,26,0,Math.PI*2),ce.arc(80,76,18,0,Math.PI*2),ce.stroke(),ce.beginPath(),ce.moveTo(31,68),ce.lineTo(22,91),ce.lineTo(49,82),ce.moveTo(76,96),ce.lineTo(70,108),ce.lineTo(87,99),ce.stroke()):(ce.beginPath(),ce.moveTo(23,104),ce.lineTo(105,104),ce.moveTo(35,99),ce.lineTo(35,76),ce.lineTo(51,76),ce.lineTo(51,99),ce.moveTo(61,99),ce.lineTo(61,55),ce.lineTo(77,55),ce.lineTo(77,99),ce.moveTo(87,99),ce.lineTo(87,30),ce.lineTo(103,30),ce.lineTo(103,99),ce.stroke()),$.activity.material.map?.dispose(),$.activity.material.map=new br(Te),$.activity.material.map.colorSpace=Wt,$.activity.material.needsUpdate=!0}const ae=(z.replay||z.running)&&(L.state==="working"||L.state==="thinking");$.arm.rotation.x=me||L.position?.moving?Math.sin(N*5+J)*.12:ae?Math.sin(N*1.8+J)*.08:0,$.head.rotation.y=Math.sin(N*(q.level==="frenetic"?.9:.32)+J)*(q.level==="frenetic"?.12:.055),$.head.rotation.x=(ae&&!me?.12:0)+q.droop,$.light.scale.setScalar(ae?1+Math.sin(N*2)*.12:1)}),e.updateMatrixWorld();const x=[],U=230,K=86.25;for(const L of rt.values())if(L.idea?.visible){const J=L.idea.position.clone(),$=J.clone().applyMatrix4(e.matrixWorldInverse);if($.z>=0){L.idea.visible=!1;continue}const V=J.project(e);if(Math.abs(V.x)>1.15||Math.abs(V.y)>1.15){L.idea.visible=!1;continue}let Q=Et.clamp((V.x+1)*innerWidth/2,90+U/2,innerWidth-U/2-16),he=(1-V.y)*innerHeight/2;for(let ie=0;ie<12&&x.some(q=>Math.abs(Q-q.x)<U+10&&Math.abs(he-q.y)<K+8);ie++)he-=K+8,he<110&&(he=155,Q=Math.min(innerWidth-U/2-16,Q+U+12));x.push({x:Q,y:he}),L.idea.position.set(Q/innerWidth*2-1,1-he/innerHeight*2,V.z).unproject(e),L.idea.quaternion.copy(e.quaternion);const P=2*-$.z*Math.tan(Et.degToRad(e.fov/2))/innerHeight;L.idea.scale.setScalar(U*P/2.7),L.idea.renderOrder=10}}const st=new Kn;t.add(st);const at=new Set([...rt.values()].flatMap(N=>[N.group,N.sign,N.activity,N.meter,N.zzz]));for(const N of[...t.children])N!==st&&!at.has(N)&&st.add(N);function pe(N){Yt=Et.clamp(N,0,1);const z=RM(Yt,rt.size);st.scale.setScalar(z.room),[...rt.values()].forEach((Y,M)=>{const x=z.agents[M]??1,U=x<.88?x/.88*1.08:1.08-(x-.88)/.12*.08;Y.group.scale.setScalar(U),Y.sign.scale.setScalar(U),Y.activity.scale.set(.8*U,.8*U,1),Y.meter.scale.set(.86*U,.215*U,1),Y.zzz.scale.set(.5*U,.5*U,1)})}return{scene:t,camera:e,colliders:n,stations:tn,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update:Ut,grow:pe,setOverview:N=>{G.visible=!0},agentPositions:()=>[...rt.values()].map(N=>({id:N.id,position:N.group.position.clone()})),exposure:1}}const ui=!0;function am(t,e="/caffeinated/"){const n=t.split("?")[0];if(n==="/recordings")return`${e}recordings/index.json`;const i=/^\/recordings\/([^/]+)$/.exec(n);if(i)return`${e}recordings/${i[1]}.json.gz`;const r=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(n);return r?`${e}recordings/${r[1]}/artifacts/${r[2]}`:null}function _u(t){const e=Object.values(t).filter(i=>typeof i=="number");return Object.entries(t).filter(([i,r])=>e.indexOf(+i)===-1).map(([i,r])=>r)}function Kf(t,e="|"){return t.map(n=>fm(n)).join(e)}function vu(t,e){return typeof e=="bigint"?e.toString():e}class IM{constructor(e){this._getter=e,this._value=void 0}get value(){const e=this._getter;return e!==void 0&&(this._value=e(),this._getter=void 0),this._value}}function id(t){return new IM(t)}function LM(t){return t==null}function rd(t){const e=t.startsWith("^")?1:0,n=t.endsWith("$")?t.length-1:t.length;return t.slice(e,n)}function NM(t,e){const n=t/e,i=Math.round(n),r=4*Number.EPSILON*Math.max(Math.abs(n),1);return Math.abs(n-i)<r?0:n-i}function Hr(t,e,n){Object.defineProperty(t,e,{value:n,writable:!0,enumerable:!0,configurable:!0})}function om(t){const e=Object.getOwnPropertyDescriptor(t,"shape");return e?.get?e.get.raw:e?.value}function Di(t){return om(t._zod.def)??t._zod.def.shape}function lm(t,e,n){Object.defineProperty(t,e,{get(){const i=n();return Hr(this,e,i),i},enumerable:!0,configurable:!0})}function cm(t,e,n){e in t?Hr(t,e,n):t[e]=n}function Fr(t,e,n,i){const r=Di(e);for(const s of n){const a=Object.getOwnPropertyDescriptor(r,s);a.enumerable&&(a.get?lm(t,s,()=>{const o=e._zod.def.shape[s];return i?i(o,s):o}):cm(t,s,i?i(a.value,s):a.value))}}function DM(t,e){for(const n of Reflect.ownKeys(e)){const i=Object.getOwnPropertyDescriptor(e,n);i.enumerable&&(i.get?lm(t,n,()=>e[n]):cm(t,n,i.value))}}function Ln(...t){const e={};for(const n of t){const i=Object.getOwnPropertyDescriptors(n);Object.assign(e,i)}return Object.defineProperties({},e)}function UM(t){return JSON.stringify(t)}function kM(t){return t.toLowerCase().trim().replace(/[^\w\s-]/g,"").replace(/[\s_-]+/g,"-").replace(/^-+|-+$/g,"")}const um="captureStackTrace"in Error?Error.captureStackTrace:(...t)=>{};function ol(t){return typeof t=="object"&&t!==null&&!Array.isArray(t)}const OM=id(()=>{if(mi.jitless||typeof navigator<"u"&&navigator?.userAgent?.includes("Cloudflare"))return!1;try{const t=Function;return new t(""),!0}catch{return!1}});function Na(t){if(ol(t)===!1)return!1;const e=t.constructor;if(e===void 0||typeof e!="function")return!0;const n=e.prototype;return!(ol(n)===!1||Object.prototype.hasOwnProperty.call(n,"isPrototypeOf")===!1)}function dm(t){return Na(t)?{...t}:Array.isArray(t)?[...t]:t instanceof Map?new Map(t):t instanceof Set?new Set(t):t}const FM=new Set(["string","number","symbol"]);function Tl(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ur(t,e,n){const i=new t._zod.constr(e??t._zod.def);return(!e||n?.parent)&&(i._zod.parent=t),i}function Fe(t){const e=t;if(!e)return{};if(typeof e=="string")return{error:()=>e};if(e?.message!==void 0){if(e?.error!==void 0)throw new Error("Cannot specify both `message` and `error` params");e.error=e.message}return delete e.message,typeof e.error=="string"?{...e,error:()=>e.error}:e}function fm(t){return typeof t=="bigint"?t.toString()+"n":typeof t=="string"?`"${t}"`:`${t}`}function zM(t){return Object.keys(t).filter(e=>t[e]._zod.optin!==void 0&&t[e]._zod.optout==="optional")}const hm={safeint:[Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],int32:[-2147483648,2147483647],uint32:[0,4294967295],float32:[-34028234663852886e22,34028234663852886e22],float64:[-Number.MAX_VALUE,Number.MAX_VALUE]},BM={int64:[BigInt("-9223372036854775808"),BigInt("9223372036854775807")],uint64:[BigInt(0),BigInt("18446744073709551615")]};function $M(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".pick() cannot be used on object schemas containing refinements");const s={};return Fr(s,t,Al(t,e)),ur(t,Ln(n,{shape:s,checks:[]}))}function Al(t,e){const n=Di(t),i=[];for(const r of Reflect.ownKeys(e)){if(!Object.getOwnPropertyDescriptor(n,r)?.enumerable)throw new Error(`Unrecognized key: "${String(r)}"`);e[r]&&i.push(r)}return i}function HM(t,e){const n=t._zod.def,i=n.checks;if(i&&i.length>0)throw new Error(".omit() cannot be used on object schemas containing refinements");const s=new Set(Al(t,e)),a={};return Fr(a,t,Reflect.ownKeys(Di(t)).filter(o=>!s.has(o))),ur(t,Ln(n,{shape:a,checks:[]}))}function GM(t,e){if(!Na(e))throw new Error("Invalid input to extend: expected a plain object");const n=t._zod.def.checks;if(n&&n.length>0){const r=Di(t);for(const s of Reflect.ownKeys(e))if(Object.getOwnPropertyDescriptor(r,s)!==void 0)throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.")}return ur(t,Ln(t._zod.def,{shape:pm(t,e)}))}function pm(t,e){const n={};return Fr(n,t,Reflect.ownKeys(Di(t))),DM(n,e),n}function VM(t,e){if(!Na(e))throw new Error("Invalid input to safeExtend: expected a plain object");return ur(t,Ln(t._zod.def,{shape:pm(t,e)}))}function WM(t,e){if(!e?._zod?.def)throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");if(t._zod.def.checks?.length)throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");const n={};Fr(n,t,Reflect.ownKeys(Di(t))),Fr(n,e,Reflect.ownKeys(Di(e)));const i=Ln(t._zod.def,{shape:n,get catchall(){return e._zod.def.catchall},checks:e._zod.def.checks??[]});return ur(t,i)}function Jf(t,e,n,i="partial"){const s=e._zod.def.checks;if(s&&s.length>0)throw new Error(`.${i}() cannot be used on object schemas containing refinements`);const o=n?new Set(Al(e,n)):void 0,l={};return Fr(l,e,Reflect.ownKeys(Di(e)),t&&((c,u)=>o&&!o.has(u)?c:new t({type:"optional",innerType:c}))),ur(e,Ln(e._zod.def,{shape:l,checks:[]}))}function XM(t,e,n){const i=n?new Set(Al(e,n)):void 0,r={};return Fr(r,e,Reflect.ownKeys(Di(e)),(s,a)=>i&&!i.has(a)?s:new t({type:"nonoptional",innerType:s})),ur(e,Ln(e._zod.def,{shape:r}))}function Ai(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue!==!0)return!0;return!1}function ZM(t,e=0){if(t.aborted===!0)return!0;for(let n=e;n<t.issues.length;n++)if(t.issues[n]?.continue===!1)return!0;return!1}function mm(t,e){return e.map(n=>{var i;return(i=n).path??(i.path=[]),n.path.unshift(t),n})}function aa(t){return typeof t=="string"?t:t?.message}function Qf(t){const e=[];for(const n of t??[]){const i=n._zod.def;if(!/_(length|size)$|_equals$/.test(i.check))break;const r=i.maximum??i.length??i.size;r>=0&&e.push([r,n])}return e}function xu(t,e,n){var i;for(let r=e;r<t.length;r++)(i=t[r]).schema??(i.schema=n)}function Os(t,e,n){var i;const r=t.inst?._zod?.traits;r?.has("$ZodType")&&(r.has("$ZodCheck")?(i=t).schema??(i.schema=t.inst):t.schema=t.inst);const s=t.schema!==t.inst?t.schema?._zod.def?.error:void 0,a=t.message?t.message:aa(t.inst?._zod.def?.error?.(t))??aa(s?.(t))??aa(e?.error?.(t))??aa(n.customError?.(t))??aa(n.localeError?.(t))??"Invalid input",o={};for(const l of Object.keys(t))l==="inst"||l==="schema"||l==="continue"||l==="input"||l==="__proto__"||(o[l]=t[l]);return o.path??(o.path=[]),o.message=a,e?.reportInput&&(o.input=t.input),o}const qM=/[\uD800-\uDBFF]/;function sd(t){const e=t.length;if(!qM.test(t))return e;let n=e;for(let i=0;i<e-1;i++)(t.charCodeAt(i)&64512)===55296&&(t.charCodeAt(i+1)&64512)===56320&&(n--,i++);return n}function ad(t){return Array.isArray(t)?"array":typeof t=="string"?"string":"unknown"}function jM(t){const e=typeof t;switch(e){case"number":return Number.isNaN(t)?"nan":"number";case"object":{if(t===null)return"null";if(Array.isArray(t))return"array";const n=t;if(n&&Object.getPrototypeOf(n)!==Object.prototype&&"constructor"in n&&n.constructor)return n.constructor.name}}return e}function Da(...t){const[e,n,i]=t;return typeof e=="string"?{message:e,code:"custom",input:n,inst:i}:{...e}}function YM(t,e){for(const n in e){const i=Object.getOwnPropertyDescriptor(e,n);i.get?Object.defineProperty(t,n,{...i,enumerable:!1}):KM(t,n,i.value)}}function or(t,e,n,i=!0){return Object.defineProperty(t,e,{configurable:!0,writable:!0,enumerable:i,value:n}),n}function gm(t,e,n){return or(t,e,n,!1)}function _m(t,e){for(const n in t){const i=t[n];Object.defineProperty(e,n,{configurable:!0,enumerable:!0,get(){return or(this,n,i(this))},set(r){or(this,n,r)}})}return e}function KM(t,e,n){Object.defineProperty(t,e,{configurable:!0,get(){return this==null?n:or(this,e,n.bind(this))},set(i){or(this,e,i)}})}function JM(t,e){const n=Object.getPrototypeOf(t);return e in n?void 0:n}let hc,Vi=!1;const QM={configurable:!0,get(){Vi=!0}};function mt(t,e,n){const i=Object.getPrototypeOf(t._zod);if(e in i&&hc!==t._zod){hc=void 0;return}hc=t._zod,Object.defineProperty(i,e,{configurable:!0,get(){Object.defineProperty(this,e,QM);const r=Vi;Vi=!1;try{const s=n(this);return Vi?delete this[e]:Object.defineProperty(this,e,{configurable:!0,writable:!0,value:s}),Vi=Vi||r,s}catch(s){throw delete this[e],Vi=Vi||r,s}},set(r){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:r})}})}function eE(t,e,n,i){const r=JM(t,e);r&&Object.defineProperty(r,e,{configurable:!0,get(){const s={configurable:!0,writable:!0,enumerable:i,value:void 0};return Object.defineProperty(this,e,s),s.value=n(this),Object.defineProperty(this,e,s),s.value},set(s){Object.defineProperty(this,e,{configurable:!0,writable:!0,enumerable:i,value:s})}})}const tE="~constantCatch";function nE(t){const e=()=>t;return e[tE]=!0,e}var eh;const pc={value:void 0,enumerable:!1};let th="captureStackTrace"in Error?Error:null;function iE(t){const e=th;if(e){const n=e.stackTraceLimit;if(typeof n=="number"){try{e.stackTraceLimit=0}catch{return th=null,new t}try{return new t}finally{e.stackTraceLimit=n}}}return new t}function le(t,e,n,i){const r={};function s(d){this.def=d,this.constr=f,this.traits=new Set}s.prototype=r;const a=n,o=a&&new WeakSet;function l(d,h){if(d._zod){if(d._zod.traits.has(t))return}else{pc.value=new s(h);try{Object.defineProperty(d,"_zod",pc)}finally{pc.value=void 0}}if(d._zod.traits.add(t),e(d,h),o){const _=Object.getPrototypeOf(d),p=d._zod.constr.prototype;let m=_;for(;m&&m!==p;)m=Object.getPrototypeOf(m);const v=m??_;o.has(v)||(o.add(v),YM(v,a))}const g=f.prototype;for(const _ in g)Object.prototype.hasOwnProperty.call(g,_)&&(_ in d||(d[_]=g[_].bind(d)))}const c=i?.Parent??Object;class u extends c{}Object.defineProperty(u,"name",{value:t});function f(d){const h=i?.Parent?iE(u):this;l(h,d);const g=h._zod.deferred;if(g){for(const p of g)p();h._zod.deferred=void 0}const _=globalThis.__zod_globalConfig?.postProcessor;return _&&_(h),h}return Object.defineProperty(f,"init",{value:l}),Object.defineProperty(f,Symbol.hasInstance,{value:d=>i?.Parent&&d instanceof i.Parent?!0:d?._zod?.traits?.has(t)}),Object.defineProperty(f,"name",{value:t}),f}class Ir extends Error{constructor(){super("Encountered Promise during synchronous parse. Use .parseAsync() instead.")}}class vm extends Error{constructor(e){super(`Encountered unidirectional transform during encode: ${e}`),this.name="ZodEncodeError"}}(eh=globalThis).__zod_globalConfig??(eh.__zod_globalConfig={});const mi=globalThis.__zod_globalConfig;function dr(t){return t&&Object.assign(mi,t),mi}function rE(){const t=this._zod;return t.message??(t.message=JSON.stringify(t.def,vu,2)),t.message}function sE(t){this._zod.message=t}const aE={get:rE,set:sE,enumerable:!0,configurable:!0},mc={value:void 0,enumerable:!1},nh=new WeakSet([Object.prototype,Error.prototype]),oE=(t,e)=>{t.name="$ZodError",mc.value=e,Object.defineProperty(t,"issues",mc),mc.value=void 0,Object.defineProperty(t,"message",aE);const n=Object.getPrototypeOf(t);nh.has(n)||(nh.add(n),Object.defineProperty(n,"toString",{configurable:!0,enumerable:!1,get(){const i=()=>this.message;return Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,"toString",{value:i,configurable:!0,writable:!0})}}))},lE=le("$ZodError",oE);function cE(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)||(e==="__proto__"?Object.defineProperty(t,e,{value:n(),writable:!0,enumerable:!0,configurable:!0}):t[e]=n()),t[e]}function uE(t,e=n=>n.message){const n={},i=[];for(const r of t.issues)r.path.length>0?cE(n,r.path[0],()=>[]).push(e(r)):i.push(e(r));return{formErrors:i,fieldErrors:n}}function dE(t,e=n=>n.message){const n={_errors:[]},i=(r,s=[])=>{for(const a of r.issues)if(a.code==="invalid_union"&&a.errors.length)a.errors.map(o=>i({issues:o},[...s,...a.path]));else if(a.code==="invalid_key")i({issues:a.issues},[...s,...a.path]);else if(a.code==="invalid_element")i({issues:a.issues},[...s,...a.path]);else{const o=[...s,...a.path];if(o.length===0)n._errors.push(e(a));else{let l=n,c=0;for(;c<o.length;){const u=o[c],f=c===o.length-1;if(u==="_errors"){f&&l._errors.push(e(a)),c++;continue}Object.prototype.hasOwnProperty.call(l,u)||Object.defineProperty(l,u,{value:{_errors:[]},enumerable:!0,writable:!0,configurable:!0});const d=l[u];f&&d._errors.push(e(a)),l=d,c++}}}};return i(t),n}function Rl(t,e){return{callee:e?.callee??t,Err:e?.Err}}const od=t=>{const e=(n,i,r,s)=>{const a=r?{...r,async:!1}:{async:!1},o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise)throw new Ir;if(o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>Os(c,a,dr())));throw um(l,s?.callee??e),l}return o.value};return e},ld=t=>{const e=async(n,i,r,s)=>{const a=r?{...r,async:!0}:{async:!0};let o=n._zod.run({value:i,issues:[]},a);if(o instanceof Promise&&(o=await o),o.issues.length){const l=new(s?.Err??t)(o.issues.map(c=>Os(c,a,dr())));throw um(l,s?.callee??e),l}return o.value};return e},cd=t=>(e,n,i)=>{const r=i?{...i,async:!1}:{async:!1},s=e._zod.run({value:n,issues:[]},r);if(s instanceof Promise)throw new Ir;return s.issues.length?xm(t,s.issues,r):{success:!0,data:s.value}};function xm(t,e,n){let i;return{success:!1,get error(){return i||(i=new t(e.map(r=>Os(r,n,dr()))),e=void 0,n=void 0),i},set error(r){i=r,e=void 0,n=void 0}}}const ud=t=>async(e,n,i)=>{const r=i?{...i,async:!0}:{async:!0};let s=e._zod.run({value:n,issues:[]},r);return s instanceof Promise&&(s=await s),s.issues.length?xm(t,s.issues,r):{success:!0,data:s.value}},fE=Symbol.for("zod.compile.invalid"),hE=Symbol.for("zod.compile.fallback"),pE=((t,e,n)=>{const i=t._zod.bag.validator;if(i!==void 0){if(i(e)!==fE)return!0;if(i.definite===!0&&n===void 0)return!1}return mE(t,e,n)});function mE(t,e,n){const i=n?{...n,async:!1,abortEarly:!0}:{async:!1,abortEarly:!0},r=t._zod.bag.fallbackRun;let s;if(r?(i[hE]=!0,s=r({value:e,issues:[]},i)):s=t._zod.run({value:e,issues:[]},i),s instanceof Promise)throw new Ir;return s.issues.length===0}const gE=async(t,e,n)=>{const i=n?{...n,async:!0,abortEarly:!0}:{async:!0,abortEarly:!0};let r=t._zod.run({value:e,issues:[]},i);return r instanceof Promise&&(r=await r),r.issues.length===0},_E=t=>{const e=od(t),n=(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return e(i,r,o,Rl(n,a))};return n},vE=t=>{const e=od(t),n=(i,r,s,a)=>e(i,r,s,Rl(n,a));return n},xE=t=>{const e=ld(t),n=async(i,r,s,a)=>{const o=s?{...s,direction:"backward"}:{direction:"backward"};return await e(i,r,o,Rl(n,a))};return n},yE=t=>{const e=ld(t),n=async(i,r,s,a)=>await e(i,r,s,Rl(n,a));return n},bE=t=>(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return cd(t)(e,n,r)},SE=t=>(e,n,i)=>cd(t)(e,n,i),ME=t=>async(e,n,i)=>{const r=i?{...i,direction:"backward"}:{direction:"backward"};return ud(t)(e,n,r)},EE=t=>async(e,n,i)=>ud(t)(e,n,i),wE=/^[cC][0-9a-z]{6,}$/,TE=/^[0-9a-z]+$/,AE=/^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,RE=/^[0-9a-vA-V]{20}$/,CE=/^[A-Za-z0-9]{27}$/,PE=/^[a-zA-Z0-9_-]{21}$/;function IE(t){return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`)}const LE=/^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,NE=/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,ih=t=>t?new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`):/^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,DE=/^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,UE="^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";function kE(){return new RegExp(UE,"u")}const OE=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,FE=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,zE=/^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,BE=/^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,$E=/^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,HE=/^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/,GE=/^https?$/,VE=/^\+[1-9]\d{6,14}$/,ym="(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";function WE(t){return new RegExp(`^${t}$`)}const XE=WE(ym);function yu(t){const e="(?:[01]\\d|2[0-3]):[0-5]\\d";return typeof t.precision=="number"?t.precision===-1?`${e}`:t.precision===0?`${e}:[0-5]\\d`:`${e}:[0-5]\\d\\.\\d{${t.precision}}`:t.seconds?`${e}:[0-5]\\d(?:\\.\\d+)?`:`${e}(?::[0-5]\\d(?:\\.\\d+)?)?`}function ZE(t){return new RegExp(`^${yu(t)}$`)}function qE(t){const e=["Z"];t.offset&&e.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");const n=`${yu({precision:t.precision,seconds:!0})}(?:${e.join("|")})`,i=t.local?`${n}|${yu({precision:t.precision})}`:n;return new RegExp(`^${ym}T(?:${i})$`)}const jE=/^[\s\S]{0,}$/,YE=/^-?\d+(?:\.\d+)?$/,KE=/^(?:true|false)$/i,JE=/^[^A-Z]*$/,QE=/^[^a-z]*$/,An=le("$ZodCheck",(t,e)=>{var n;t._zod??(t._zod={}),t._zod.def=e,(n=t._zod).onattach??(n.onattach=[])}),dd=t=>{const e=t.value;return!LM(e)&&e.length!==void 0},ll={number:"number",bigint:"bigint",object:"date"},bm=le("$ZodCheckLessThan",(t,e)=>{An.init(t,e);const n=ll[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value<=e.value:i.value<e.value)||i.issues.push({origin:ll[typeof i.value]??n,code:"too_big",maximum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),Sm=le("$ZodCheckGreaterThan",(t,e)=>{An.init(t,e);const n=ll[typeof e.value];t._zod.check=i=>{(e.inclusive?i.value>=e.value:i.value>e.value)||i.issues.push({origin:ll[typeof i.value]??n,code:"too_small",minimum:typeof e.value=="object"?e.value.getTime():e.value,input:i.value,inclusive:e.inclusive,inst:t,continue:!e.abort})}}),ew=le("$ZodCheckMultipleOf",(t,e)=>{An.init(t,e),t._zod.check=n=>{if(typeof n.value!=typeof e.value)throw new Error("Cannot mix number and bigint in multiple_of check.");(typeof n.value=="bigint"?e.value!==BigInt(0)&&n.value%e.value===BigInt(0):NM(n.value,e.value)===0)||n.issues.push({origin:typeof n.value,code:"not_multiple_of",divisor:e.value,input:n.value,inst:t,continue:!e.abort})}}),tw=le("$ZodCheckNumberFormat",(t,e)=>{An.init(t,e),e.format=e.format||"float64";const n=e.format?.includes("int"),i=n?"int":"number",[r,s]=hm[e.format];t._zod.check=a=>{const o=a.value;if(n){if(!Number.isInteger(o)){a.issues.push({expected:i,format:e.format,code:"invalid_type",continue:!1,input:o,inst:t});return}if(!Number.isSafeInteger(o)){o>0?a.issues.push({input:o,code:"too_big",maximum:Number.MAX_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort}):a.issues.push({input:o,code:"too_small",minimum:Number.MIN_SAFE_INTEGER,note:"Integers must be within the safe integer range.",inst:t,origin:i,inclusive:!0,continue:!e.abort});return}}o<r&&a.issues.push({origin:"number",input:o,code:"too_small",minimum:r,inclusive:!0,inst:t,continue:!e.abort}),o>s&&a.issues.push({origin:"number",input:o,code:"too_big",maximum:s,inclusive:!0,inst:t,continue:!e.abort})}}),nw=le("$ZodCheckMaxLength",(t,e)=>{var n;An.init(t,e),(n=t._zod.def).when??(n.when=dd),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>e.maximum?sd(r):s)<=e.maximum)return;const o=ad(r);i.issues.push({origin:o,code:"too_big",maximum:e.maximum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),iw=le("$ZodCheckMinLength",(t,e)=>{var n;An.init(t,e),(n=t._zod.def).when??(n.when=dd),t._zod.check=i=>{const r=i.value,s=r.length;if((typeof r=="string"&&s>=e.minimum&&s<e.minimum*2?sd(r):s)>=e.minimum)return;const o=ad(r);i.issues.push({origin:o,code:"too_small",minimum:e.minimum,inclusive:!0,input:r,inst:t,continue:!e.abort})}}),rw=le("$ZodCheckLengthEquals",(t,e)=>{var n;An.init(t,e),(n=t._zod.def).when??(n.when=dd),t._zod.check=i=>{const r=i.value,s=r.length,a=typeof r=="string"&&s>=e.length&&s<=e.length*2?sd(r):s;if(a===e.length)return;const o=ad(r),l=a>e.length;i.issues.push({origin:o,...l?{code:"too_big",maximum:e.length}:{code:"too_small",minimum:e.length},inclusive:!0,exact:!0,input:i.value,inst:t,continue:!e.abort})}}),Cl=le("$ZodCheckStringFormat",(t,e)=>{var n,i;An.init(t,e),e.pattern?(n=t._zod).check??(n.check=r=>{e.pattern.lastIndex=0,!e.pattern.test(r.value)&&r.issues.push({origin:"string",code:"invalid_format",format:e.format,input:r.value,...e.pattern?{pattern:e.pattern.toString()}:{},inst:t,continue:!e.abort})}):(i=t._zod).check??(i.check=()=>{})}),sw=le("$ZodCheckRegex",(t,e)=>{Cl.init(t,e),t._zod.check=n=>{e.pattern.lastIndex=0,!e.pattern.test(n.value)&&n.issues.push({origin:"string",code:"invalid_format",format:"regex",input:n.value,pattern:e.pattern.toString(),inst:t,continue:!e.abort})}}),aw=le("$ZodCheckLowerCase",(t,e)=>{e.pattern??(e.pattern=JE),Cl.init(t,e)}),ow=le("$ZodCheckUpperCase",(t,e)=>{e.pattern??(e.pattern=QE),Cl.init(t,e)}),lw=le("$ZodCheckIncludes",(t,e)=>{An.init(t,e);const n=Tl(e.includes),i=new RegExp(typeof e.position=="number"?`^.{${e.position},}${n}`:n);e.pattern=i,t._zod.check=r=>{r.value.includes(e.includes,e.position)||r.issues.push({origin:"string",code:"invalid_format",format:"includes",includes:e.includes,input:r.value,inst:t,continue:!e.abort})}}),cw=le("$ZodCheckStartsWith",(t,e)=>{An.init(t,e);const n=new RegExp(`^${Tl(e.prefix)}.*`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.startsWith(e.prefix)||i.issues.push({origin:"string",code:"invalid_format",format:"starts_with",prefix:e.prefix,input:i.value,inst:t,continue:!e.abort})}}),uw=le("$ZodCheckEndsWith",(t,e)=>{An.init(t,e);const n=new RegExp(`.*${Tl(e.suffix)}$`);e.pattern??(e.pattern=n),t._zod.check=i=>{i.value.endsWith(e.suffix)||i.issues.push({origin:"string",code:"invalid_format",format:"ends_with",suffix:e.suffix,input:i.value,inst:t,continue:!e.abort})}}),dw=le("$ZodCheckOverwrite",(t,e)=>{An.init(t,e),t._zod.check=n=>{n.value=e.tx(n.value)}});class fw{constructor(e=[],n={}){this.content=[],this.indent=0,this.args=e,this.closed=n}indented(e){this.indent+=1;try{e(this)}finally{this.indent-=1}}write(e){if(typeof e=="function"){e(this,{execution:"sync"}),e(this,{execution:"async"});return}const i=e.split(`
`).filter(a=>a),r=Math.min(...i.map(a=>a.length-a.trimStart().length)),s=i.map(a=>a.slice(r)).map(a=>" ".repeat(this.indent*2)+a);for(const a of s)this.content.push(a)}compile(){const e=Function,n=this?.content??[""];return new e(...Object.keys(this.closed),`return function (${this.args.join(", ")}) {
${n.join(`
`)}
};`)(...Object.values(this.closed))}}const hw={major:4,minor:6,patch:7},zt=le("$ZodType",(t,e)=>{var n;t??(t={}),t._zod.def=e,t._zod.bag=t._zod.bag||{},t._zod.version=hw;const i=t._zod.def.checks,r=t._zod.traits.has("$ZodCheck")?[t,...i??[]]:i?.length?[...i]:[];for(const s of r)for(const a of s._zod.onattach)a(t);if(r.length===0)(n=t._zod).deferred??(n.deferred=[]),t._zod.deferred?.push(()=>{t._zod.run=t._zod.parse});else{const s=(o,l,c)=>{if(o.memo)return o;let u=Ai(o),f;for(const d of l){if(d._zod.def.when){if(ZM(o)||!d._zod.def.when(o))continue}else if(u)continue;const h=o.issues.length,g=d._zod.check(o);if(g instanceof Promise&&c?.async===!1)throw new Ir;if(f||g instanceof Promise)f=(f??Promise.resolve()).then(async()=>{await g,o.issues.length!==h&&(xu(o.issues,h,t),u||(u=Ai(o,h)))});else{if(o.issues.length===h)continue;xu(o.issues,h,t),u||(u=Ai(o,h))}}return f?f.then(()=>o):o},a=(o,l,c)=>{if(Ai(o))return o.aborted=!0,o;const u=s(l,r,c);if(u instanceof Promise){if(c.async===!1)throw new Ir;return u.then(f=>t._zod.parse(f,c))}return t._zod.parse(u,c)};t._zod.run=(o,l)=>{if(l.skipChecks)return t._zod.parse(o,l);if(l.direction==="backward"){const u=t._zod.parse({value:o.value,issues:[]},{...l,skipChecks:!0});return u instanceof Promise?u.then(f=>a(f,o,l)):a(u,o,l)}const c=t._zod.parse(o,l);if(c instanceof Promise){if(l.async===!1)throw new Ir;return c.then(u=>s(u,r,l))}return s(c,r,l)}}},{get"~standard"(){return gm(this,"~standard",Em(this))},set"~standard"(t){or(this,"~standard",t)}}),Mm=(t,e)=>t.issues.length?{issues:t.issues.map(n=>Os(n,e,dr()))}:{value:t.value};async function pw(t,e){const n={async:!0};return Mm(await t._zod.run({value:e,issues:[]},n),n)}function Em(t){return{validate:e=>{const n={async:!1};try{const i=t._zod.run({value:e,issues:[]},n);if(!(i instanceof Promise))return Mm(i,n)}catch{}return pw(t,e)},vendor:"zod",version:1}}const fd=le("$ZodString",(t,e)=>{zt.init(t,e),t._zod.pattern=e.pattern??jE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=String(n.value)}catch{}return typeof n.value=="string"||n.issues.push({expected:"string",code:"invalid_type",input:n.value,inst:t}),n}}),At=le("$ZodStringFormat",(t,e)=>{Cl.init(t,e),fd.init(t,e)}),mw=le("$ZodGUID",(t,e)=>{e.pattern??(e.pattern=NE),At.init(t,e)}),gw=le("$ZodUUID",(t,e)=>{if(e.version){const i={v1:1,v2:2,v3:3,v4:4,v5:5,v6:6,v7:7,v8:8}[e.version];if(i===void 0)throw new Error(`Invalid UUID version: "${e.version}"`);e.pattern??(e.pattern=ih(i))}else e.pattern??(e.pattern=ih());At.init(t,e)}),_w=le("$ZodEmail",(t,e)=>{e.pattern??(e.pattern=DE),At.init(t,e)}),wm=1,cl=2;function Tm(t){try{return typeof URL<"u"&&typeof URL.canParse=="function"?URL.canParse(t):(new URL(t),!0)}catch{return!1}}function vw(t,e){return!("normalize"in e)&&!("hostname"in e)&&!("protocol"in e)?Tm(t)||cl:xw(t,e)}function xw(t,e){if(!e.normalize&&e.protocol?.source===GE.source&&!/^https?:\/\//i.test(t))return wm;try{if(typeof URL<"u"){const n=URL;if(typeof n.parse=="function")return n.parse(t)??cl}return new URL(t)}catch{return cl}}const yw=/[\t\n\r]/g;function rh(t){return t.replace(yw,"")}function bw(t,e){return e.lastIndex=0,e.test(t.hostname)}function Sw(t,e){return e.lastIndex=0,e.test(t.protocol.endsWith(":")?t.protocol.slice(0,-1):t.protocol)}const Mw=le("$ZodURL",(t,e)=>{At.init(t,e),t._zod.check=n=>{try{const i=n.value.trim(),r=vw(i,e);if(r===wm){n.issues.push({code:"invalid_format",format:"url",note:"Invalid URL format",input:n.value,inst:t,continue:!e.abort});return}if(r===cl){n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort});return}if(r===!0){n.value=rh(i);return}e.hostname&&!bw(r,e.hostname)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid hostname",pattern:e.hostname.source,input:n.value,inst:t,continue:!e.abort}),e.protocol&&!Sw(r,e.protocol)&&n.issues.push({code:"invalid_format",format:"url",note:"Invalid protocol",pattern:e.protocol.source,input:n.value,inst:t,continue:!e.abort}),n.value=e.normalize?r.href:rh(i);return}catch{n.issues.push({code:"invalid_format",format:"url",input:n.value,inst:t,continue:!e.abort})}}}),Ew=le("$ZodEmoji",(t,e)=>{e.pattern??(e.pattern=kE()),At.init(t,e)}),ww=le("$ZodNanoID",(t,e)=>{if(e.length!==void 0&&(!Number.isInteger(e.length)||e.length<1))throw new Error(`Invalid nanoid length: ${e.length}`);e.pattern??(e.pattern=e.length===void 0?PE:IE(e.length)),At.init(t,e)}),Tw=le("$ZodCUID",(t,e)=>{e.pattern??(e.pattern=wE),At.init(t,e)}),Aw=le("$ZodCUID2",(t,e)=>{e.pattern??(e.pattern=TE),At.init(t,e)}),Rw=le("$ZodULID",(t,e)=>{e.pattern??(e.pattern=AE),At.init(t,e)}),Cw=le("$ZodXID",(t,e)=>{e.pattern??(e.pattern=RE),At.init(t,e)}),Pw=le("$ZodKSUID",(t,e)=>{e.pattern??(e.pattern=CE),At.init(t,e)}),Iw=le("$ZodISODateTime",(t,e)=>{e.pattern??(e.pattern=qE(e)),At.init(t,e)}),Lw=le("$ZodISODate",(t,e)=>{e.pattern??(e.pattern=XE),At.init(t,e)}),Nw=le("$ZodISOTime",(t,e)=>{e.pattern??(e.pattern=ZE(e)),At.init(t,e)}),Dw=le("$ZodISODuration",(t,e)=>{e.pattern??(e.pattern=LE),At.init(t,e)}),Uw=le("$ZodIPv4",(t,e)=>{e.pattern??(e.pattern=OE),At.init(t,e)}),kw=/^[0-9a-fA-F:.]+$/;function Am(t){return kw.test(t)?Tm(`http://[${t}]`):!1}const Ow=le("$ZodIPv6",(t,e)=>{e.pattern??(e.pattern=FE),At.init(t,e),t._zod.check=n=>{Am(n.value)||n.issues.push({code:"invalid_format",format:"ipv6",input:n.value,inst:t,continue:!e.abort})}}),Fw=le("$ZodCIDRv4",(t,e)=>{e.pattern??(e.pattern=zE),At.init(t,e)});function zw(t){const e=t.split("/");if(e.length!==2)return!1;const[n,i]=e;if(!i)return!1;const r=Number(i);return`${r}`!==i||r<0||r>128?!1:Am(n)}const Bw=le("$ZodCIDRv6",(t,e)=>{e.pattern??(e.pattern=BE),At.init(t,e),t._zod.check=n=>{zw(n.value)||n.issues.push({code:"invalid_format",format:"cidrv6",input:n.value,inst:t,continue:!e.abort})}});function Rm(t){if(t==="")return!0;if(/\s/.test(t)||t.length%4!==0)return!1;try{return atob(t),!0}catch{return!1}}const Cm=/^[0-9a-zA-Z+/]*={0,2}$/,$w=le("$ZodBase64",(t,e)=>{e.pattern??(e.pattern=Cm),At.init(t,e),t._zod.check=n=>{Rm(n.value)||n.issues.push({code:"invalid_format",format:"base64",input:n.value,inst:t,continue:!e.abort})}}),hd=/^[A-Za-z0-9_-]*$/;function Hw(t){if(!hd.test(t))return!1;const e=t.replace(/[-_]/g,i=>i==="-"?"+":"/"),n=e.padEnd(Math.ceil(e.length/4)*4,"=");return Rm(n)}const Gw=le("$ZodBase64URL",(t,e)=>{e.pattern??(e.pattern=hd),At.init(t,e),t._zod.check=n=>{Hw(n.value)||n.issues.push({code:"invalid_format",format:"base64url",input:n.value,inst:t,continue:!e.abort})}}),Vw=le("$ZodE164",(t,e)=>{e.pattern??(e.pattern=VE),At.init(t,e)});function Ww(t,e=null){try{const n=t.split(".");if(n.length!==3)return!1;const[i]=n;if(!i)return!1;const r=JSON.parse(atob(i));return!("typ"in r&&r?.typ!=="JWT"||!r.alg||e&&(!("alg"in r)||r.alg!==e))}catch{return!1}}const Xw=le("$ZodJWT",(t,e)=>{At.init(t,e),t._zod.check=n=>{Ww(n.value,e.alg)||n.issues.push({code:"invalid_format",format:"jwt",input:n.value,inst:t,continue:!e.abort})}}),Pm=le("$ZodNumber",(t,e)=>{zt.init(t,e),t._zod.pattern=YE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=Number(n.value)}catch{}const r=n.value;if(typeof r=="number"&&!Number.isNaN(r)&&Number.isFinite(r))return n;const s=typeof r=="number"?Number.isNaN(r)?"NaN":Number.isFinite(r)?void 0:String(r):void 0;return n.issues.push({expected:"number",code:"invalid_type",input:r,inst:t,...s?{received:s}:{}}),n}}),Zw=le("$ZodNumberFormat",(t,e)=>{tw.init(t,e),Pm.init(t,e)}),qw=le("$ZodBoolean",(t,e)=>{zt.init(t,e),t._zod.pattern=KE,t._zod.parse=(n,i)=>{if(e.coerce)try{n.value=!!n.value}catch{}const r=n.value;return typeof r=="boolean"||n.issues.push({expected:"boolean",code:"invalid_type",input:r,inst:t}),n}}),jw=le("$ZodUnknown",(t,e)=>{zt.init(t,e),t._zod.parse=n=>n}),Yw=le("$ZodNever",(t,e)=>{zt.init(t,e),t._zod.parse=(n,i)=>(n.issues.push({expected:"never",code:"invalid_type",input:n.value,inst:t}),n)});function Kw(t,e){const n=Qf(t._zod.def.checks);if(!n.length)return;const i=Math.min(...n.map(s=>s[0])),r=t._zod.parse;t._zod.parse=(s,a)=>{const o=e(s.value);if(o>i&&!a?.skipChecks&&a?.direction!=="backward"){for(const[l,c]of Qf(t._zod.def.checks))if(o>l&&c._zod.def.when(s)){const u=s.issues.length;return c._zod.check(s),s.issues[u].continue=!1,xu(s.issues,u,t),s}}return r(s,a)}}const Jw=t=>Array.isArray(t)?t.length:-1;function sh(t,e,n){t.issues.length&&e.issues.push(...mm(n,t.issues)),e.value[n]=t.value}const Qw=le("$ZodArray",(t,e)=>{zt.init(t,e);const n=mi.memoizer;n?.attach(t),t._zod.parse=(i,r)=>{const s=i.value;if(!Array.isArray(s))return i.issues.push({expected:"array",code:"invalid_type",input:s,inst:t}),i;i.value=n?n.alloc(t,i,Array(s.length),r):Array(s.length);const a=[],o=r?.abortEarly;for(let l=0;l<s.length;l++){const c=s[l],u=e.element._zod.run({value:c,issues:[]},r);if(u instanceof Promise)a.push(u.then(f=>sh(f,i,l)));else if(sh(u,i,l),o&&u.issues.length!==0&&Ai(u))break}return a.length?Promise.all(a).then(()=>i):i},Kw(t,Jw)});function ul(t,e,n,i,r,s){const a=n in i,o=s==="optional";if(!(!a&&o&&r==="optional")){if(t.issues.length){if(r!==void 0&&o&&!a)return;e.issues.push(...mm(n,t.issues))}if(!a&&r===void 0){t.issues.length||e.issues.push({code:"invalid_type",expected:"nonoptional",input:void 0,path:[n]});return}t.value===void 0?(a||r==="defaulted"&&!o)&&(e.value[n]=void 0):e.value[n]=t.value}}const e1=[];function Im(t){const e=Object.keys(t.shape),n=Object.getOwnPropertySymbols(t.shape),i=n.length?n:e1,r=i.length?[...e,...i]:e;for(const a of r)if(!t.shape?.[a]?._zod?.traits?.has("$ZodType"))throw new Error(`Invalid element at key "${String(a)}": expected a Zod schema`);const s=zM(t.shape);return{...t,allKeys:r,symbolKeys:i,keySet:new Set(e),numKeys:e.length,optionalKeys:new Set(s)}}function Lm(t,e,n,i,r,s,a){const o=[],l=r.keySet,c=r.catchall._zod,u=c.def.type,f=c.optin,d=c.optout;let h=0;for(const g in e){if(a&&n.issues.length!==h){if(Ai(n,h))break;h=n.issues.length}if(l.has(g))continue;if(g==="__proto__"){u==="never"&&o.push(g);continue}if(u==="never"){o.push(g);continue}const _=c.run({value:e[g],issues:[]},i);_ instanceof Promise?t.push(_.then(p=>ul(p,n,g,e,f,d))):ul(_,n,g,e,f,d)}return o.length&&n.issues.push({code:"unrecognized_keys",keys:o,input:e,inst:s,continue:!0}),t.length?Promise.all(t).then(()=>n):n}const t1=le("$ZodObject",(t,e)=>{zt.init(t,e);const n=Object.getOwnPropertyDescriptor(e,"shape"),i=n?.get?n.get.raw:e.shape??{};if(i){const c=()=>{const u={...i};return Object.defineProperty(e,"shape",{value:u}),c.raw=u,u};c.raw=i,Object.defineProperty(e,"shape",{get:c})}const r=id(()=>Im(e));mt(t,"propValues",c=>{const u=c.def.shape,f={};for(const d in u){const h=u[d]._zod;if(h.values){Object.prototype.hasOwnProperty.call(f,d)||Hr(f,d,new Set);for(const g of h.values)f[d].add(g);h.optin!==void 0&&f[d].add(void 0)}}return f});const s=ol,a=e.catchall;let o;const l=mi.memoizer;l?.attach(t),t._zod.parse=(c,u)=>{o??(o=r.value);const f=c.value;if(!s(f))return c.issues.push({expected:"object",code:"invalid_type",input:f,inst:t}),c;c.value=l?l.alloc(t,c,{},u):{};const d=[],h=o.shape,g=u?.abortEarly;let _=c.issues.length;for(const p of o.allKeys){if(g&&c.issues.length!==_){if(Ai(c,_))break;_=c.issues.length}if(p==="__proto__")continue;const m=h[p],v=m._zod.optin,S=m._zod.optout,b=m._zod.run({value:f[p],issues:[]},u);b instanceof Promise?d.push(b.then(T=>ul(T,c,p,f,v,S))):ul(b,c,p,f,v,S)}return a?Lm(d,f,c,u,r.value,t,g===!0):d.length?Promise.all(d).then(()=>c):c}}),n1=le("$ZodObjectJIT",(t,e)=>{t1.init(t,e);const n=t._zod.parse,i=id(()=>Im(e)),r=mi.memoizer,s=h=>{const g=i.value,_=g.symbolKeys,p=new fw(["payload","ctx"],{shape:h,inst:t,memo:r,syms:_}),m=T=>`shape[${T}]._zod.run({ value: input[${T}], issues: [] }, ctx)`,v=(T,A)=>`
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
          }`;p.write("const input = payload.value;");const S=Object.create(null);let b=0;for(const T of g.allKeys)S[T]=`key_${b++}`;p.write(r?"const newResult = memo.alloc(inst, payload, {}, ctx);":"const newResult = {};");for(const T of g.allKeys){if(T==="__proto__")continue;const A=S[T],y=typeof T=="symbol"?`syms[${_.indexOf(T)}]`:UM(T),E=`${y} in input`,k=h[T],I=k?._zod?.optin,R=I!==void 0,H=k?._zod?.optout==="optional";if(p.write(`const ${A} = ${m(y)};`),R&&H){const B=I==="optional"?`${A}_present`:`${A}.value !== undefined || ${A}_present`;p.write(`
        const ${A}_present = ${E};
        if (!${A}.issues.length || ${A}_present) {
          if (${A}.issues.length) {${v(A,y)}
          }

          if (${B}) {
            newResult[${y}] = ${A}.value;
          }
        }

      `)}else R?(p.write(`
        if (${A}.issues.length) {${v(A,y)}
        }
      `),I==="defaulted"?p.write(`newResult[${y}] = ${A}.value;`):p.write(`
        if (${A}.value !== undefined || ${E}) {
          newResult[${y}] = ${A}.value;
        }
      `)):p.write(`
        const ${A}_present = ${E};
        if (${A}.issues.length) {${v(A,y)}
        }
        if (!${A}_present && !${A}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${y}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${A}_present) {
          newResult[${y}] = ${A}.value;
        }

      `)}return p.write("payload.value = newResult;"),p.write("return payload;"),p.compile()};let a;const o=ol,l=!mi.jitless,u=l&&OM.value,f=e.catchall;let d;t._zod.parse=(h,g)=>{d??(d=i.value);const _=h.value;return o(_)?l&&u&&g?.async===!1&&g.jitless!==!0?(a||(a=s(e.shape)),h=a(h,g),f?Lm([],_,h,g,d,t,g?.abortEarly===!0):h):n(h,g):(h.issues.push({expected:"object",code:"invalid_type",input:_,inst:t}),h)}});function ah(t,e,n,i){for(const s of t)if(s.issues.length===0)return e.value=s.value,e;const r=t.filter(s=>!Ai(s));return r.length===1?(e.value=r[0].value,r[0]):(e.issues.push({code:"invalid_union",input:e.value,inst:n,errors:t.map(s=>s.issues.map(a=>Os(a,i,dr())))}),e)}const i1=le("$ZodUnion",(t,e)=>{zt.init(t,e),mt(t,"optin",i=>i.def.options.some(r=>r._zod.optin==="defaulted")?"defaulted":i.def.options.some(r=>r._zod.optin!==void 0)?"optional":void 0),mt(t,"optout",i=>i.def.options.some(r=>r._zod.optout==="optional")?"optional":void 0),mt(t,"values",i=>{if(i.def.options.every(r=>r._zod.values))return new Set(i.def.options.flatMap(r=>Array.from(r._zod.values)))}),mt(t,"pattern",i=>{if(i.def.options.every(r=>r._zod.pattern)){const r=i.def.options.map(s=>s._zod.pattern);return new RegExp(`^(${r.map(s=>rd(s.source)).join("|")})$`)}});const n=e.options.length===1?e.options[0]._zod.run:null;t._zod.parse=(i,r)=>{if(n)return n(i,r);let s=!1;const a=[];for(const o of e.options){const l=o._zod.run({value:i.value,issues:[]},r);if(l instanceof Promise)a.push(l),s=!0;else{if(l.issues.length===0)return l;a.push(l)}}return s?Promise.all(a).then(o=>ah(o,i,t,r)):ah(a,i,t,r)}}),r1=le("$ZodIntersection",(t,e)=>{zt.init(t,e),t._zod.parse=(n,i)=>{const r=n.value,s=e.left._zod.run({value:r,issues:[]},i),a=e.right._zod.run({value:r,issues:[]},i);return s instanceof Promise||a instanceof Promise?Promise.all([s,a]).then(([l,c])=>oh(n,l,c)):oh(n,s,a)}});function bu(t,e){if(t===e)return{valid:!0,data:t};if(t instanceof Date&&e instanceof Date&&+t==+e)return{valid:!0,data:t};if(Na(t)&&Na(e)){const n=Object.keys(e),i=Object.keys(t).filter(s=>n.indexOf(s)!==-1),r={...t,...e};Object.prototype.hasOwnProperty.call(r,"__proto__")&&delete r.__proto__;for(const s of i){if(s==="__proto__")continue;const a=bu(t[s],e[s]);if(!a.valid)return{valid:!1,mergeErrorPath:[s,...a.mergeErrorPath]};r[s]=a.data}return{valid:!0,data:r}}if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return{valid:!1,mergeErrorPath:[]};const n=[];for(let i=0;i<t.length;i++){const r=t[i],s=e[i],a=bu(r,s);if(!a.valid)return{valid:!1,mergeErrorPath:[i,...a.mergeErrorPath]};n.push(a.data)}return{valid:!0,data:n}}return{valid:!1,mergeErrorPath:[]}}function oh(t,e,n){const i=new Map;let r;const s=new Map,a=(c,u)=>{let f;if(c.code==="unrecognized_keys"&&!c.path?.length)r??(r=c),f=c.keys;else if(c.code==="invalid_key"&&c.origin==="record"&&c.path?.length===1){const d=String(c.path[0]);s.has(d)||s.set(d,c),f=[d]}else return!1;for(const d of f)i.has(d)||i.set(d,{}),i.get(d)[u]=!0;return!0};for(const c of e.issues)a(c,"l")||t.issues.push(c);for(const c of n.issues)a(c,"r")||t.issues.push(c);const o=[...i].filter(([,c])=>c.l&&c.r).map(([c])=>c);if(o.length){const c=r?o.filter(u=>r.keys.includes(u)):[];c.length&&t.issues.push({...r,keys:c});for(const u of o)!c.includes(u)&&s.has(u)&&t.issues.push(s.get(u))}const l=bu(e.value,n.value);if(!l.valid){if(Ai(t))return t;throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(l.mergeErrorPath)}`)}return t.value=l.data,t}const s1=le("$ZodEnum",(t,e)=>{zt.init(t,e);const n=_u(e.entries),i=new Set(n);t._zod.values=i,mt(t,"pattern",r=>{const s=_u(r.def.entries).filter(a=>FM.has(typeof a));return new RegExp(s.length?`^(${s.map(a=>Tl(a.toString())).join("|")})$`:"^[^\\s\\S]$")}),t._zod.parse=(r,s)=>{const a=r.value;return i.has(a)||r.issues.push({code:"invalid_value",values:n,input:a,inst:t}),r}}),a1=le("$ZodTransform",(t,e)=>{zt.init(t,e),t._zod.optin="optional",mi.memoizer?.guard(t),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new vm(t.constructor.name);const r=e.transform(n.value,n);if(i.async)return(r instanceof Promise?r:Promise.resolve(r)).then(a=>(n.value=a,n));if(r instanceof Promise)throw new Ir;return n.value=r,n}});function lh(t,e){return t.value=e.issues.length?void 0:e.value,t}const Nm=le("$ZodOptional",(t,e)=>{zt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),t._zod.optout="optional",mt(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i,void 0]):void 0}),mt(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${rd(i.source)})?$`):void 0}),t._zod.parse=(n,i)=>{if(n.value===void 0){if(e.innerType._zod.optin!=="defaulted")return n;const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>lh(n,s)):lh(n,r)}return e.innerType._zod.run(n,i)}}),o1=le("$ZodExactOptional",(t,e)=>{Nm.init(t,e),mt(t,"values",n=>n.def.innerType._zod.values),mt(t,"pattern",n=>n.def.innerType._zod.pattern),t._zod.parse=(n,i)=>e.innerType._zod.run(n,i)}),l1=le("$ZodNullable",(t,e)=>{zt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin),mt(t,"optout",n=>n.def.innerType._zod.optout),mt(t,"pattern",n=>{const i=n.def.innerType._zod.pattern;return i?new RegExp(`^(${rd(i.source)}|null)$`):void 0}),mt(t,"values",n=>n.def.innerType._zod.values?new Set([...n.def.innerType._zod.values,null]):void 0),t._zod.parse=(n,i)=>n.value===null?n:e.innerType._zod.run(n,i)}),c1=le("$ZodDefault",(t,e)=>{zt.init(t,e),t._zod.optin="defaulted",mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);if(n.value===void 0)return n.value=e.defaultValue,n;const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>ch(s,e)):ch(r,e)}});function ch(t,e){return t.value===void 0&&(t.value=e.defaultValue),t}const u1=le("$ZodPrefault",(t,e)=>{zt.init(t,e),t._zod.optin="defaulted",mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>(i.direction==="backward"||n.value===void 0&&(n.value=e.defaultValue),e.innerType._zod.run(n,i))}),d1=le("$ZodNonOptional",(t,e)=>{zt.init(t,e),mt(t,"values",n=>{const i=n.def.innerType._zod.values;return i?new Set([...i].filter(r=>r!==void 0)):void 0}),t._zod.parse=(n,i)=>{const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(s=>uh(s,t)):uh(r,t)}});function uh(t,e){return!t.issues.length&&t.value===void 0&&t.issues.push({code:"invalid_type",expected:"nonoptional",input:t.value,inst:e}),t}function dh(t,e,n,i){return e.issues.length?(t.value=n.catchValue({...e,value:t.value,error:{issues:e.issues.map(r=>Os(r,i,dr()))},input:t.value}),t):(t.value=e.value,e.memo&&(t.memo=!0),t)}const f1=le("$ZodCatch",(t,e)=>{zt.init(t,e),mt(t,"optin",n=>n.def.innerType._zod.optin==="defaulted"?"defaulted":"optional"),mt(t,"optout",n=>n.def.innerType._zod.optout),mt(t,"values",n=>n.def.innerType._zod.values),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run({value:n.value,issues:[]},i);return r instanceof Promise?r.then(s=>dh(n,s,e,i)):dh(n,r,e,i)}}),h1=le("$ZodPipe",(t,e)=>{zt.init(t,e),mt(t,"values",n=>n.def.in._zod.values),mt(t,"optin",n=>n.def.in._zod.optin),mt(t,"optout",n=>n.def.out._zod.optout),mt(t,"propValues",n=>n.def.in._zod.propValues),t._zod.parse=(n,i)=>{if(i.direction==="backward"){const s=e.out._zod.run(n,i);return s instanceof Promise?s.then(a=>Eo(a,e.in,i)):Eo(s,e.in,i)}const r=e.in._zod.run(n,i);return r instanceof Promise?r.then(s=>Eo(s,e.out,i)):Eo(r,e.out,i)}});function Eo(t,e,n){return t.issues.some(i=>i.code!=="unrecognized_keys")?(t.aborted=!0,t):e._zod.run({value:t.value,issues:t.issues},n)}const p1=le("$ZodReadonly",(t,e)=>{zt.init(t,e),mt(t,"propValues",n=>n.def.innerType._zod.propValues),mt(t,"values",n=>n.def.innerType._zod.values),mt(t,"optin",n=>n.def.innerType?._zod?.optin),mt(t,"optout",n=>n.def.innerType?._zod?.optout),t._zod.parse=(n,i)=>{if(i.direction==="backward")return e.innerType._zod.run(n,i);const r=e.innerType._zod.run(n,i);return r instanceof Promise?r.then(fh):fh(r)}});function fh(t){return t.memo||(t.value=Object.freeze(t.value)),t}const m1=le("$ZodCustom",(t,e)=>{An.init(t,e),zt.init(t,e),t._zod.parse=(n,i)=>n,t._zod.check=n=>{const i=n.value,r=e.fn(i);if(r instanceof Promise)return r.then(s=>hh(s,n,i,t));hh(r,n,i,t)}});function hh(t,e,n,i){if(!t){const r={code:"custom",input:n,inst:i,path:[...i._zod.def.path??[]],continue:!i._zod.def.abort};i._zod.def.params&&(r.params=i._zod.def.params),e.issues.push(Da(r))}}class g1 extends Error{constructor(){super("Cannot parse a reference cycle that closes through a transform"),this.name="ZodCyclicError"}}const Su="~memo",ph=[];function Dm(t){return t!==null&&typeof t=="object"}function gc(t){return t.map(e=>e.path?{...e,path:e.path.slice()}:{...e})}const Um=new WeakMap,pa=0,$o=1,Sa=2;function Ho(t,e,n){const i=Um.get(t);if(i!==void 0)return i?Sa:pa;if(e.has(t))return Sa;e.add(t);let r=pa;const s=u=>{if(r!==Sa&&u?._zod){const f=Ho(u,e);f>r&&(r=f)}},a=(u,f)=>{let d=pa;for(const h of Reflect.ownKeys(u)){const g=Object.getOwnPropertyDescriptor(u,h);if(!g.enumerable)continue;const _=g.get?$o:g.value?._zod?Ho(g.value,e):pa;_>d&&(d=_)}return d},o=u=>{u>r&&(r=u)},l=t._zod.def;switch(l.type){case"object":{const u=om(l);o(u?a(u):$o),s(l.catchall);break}case"array":s(l.element);break;case"tuple":for(const u of l.items)s(u);s(l.rest);break;case"record":case"map":s(l.keyType),s(l.valueType);break;case"set":s(l.valueType);break;case"union":for(const u of l.options)s(u);break;case"intersection":s(l.left),s(l.right);break;case"optional":case"nullable":case"default":case"prefault":case"catch":case"readonly":case"nonoptional":case"promise":case"success":s(l.innerType);break;case"pipe":s(l.in),s(l.out);break;case"function":s(l.input),s(l.output);break;case"lazy":{const u=l._cachedInner??void 0;o(u?Ho(u,e):$o);break}case"template_literal":case"string":case"number":case"int":case"boolean":case"bigint":case"symbol":case"undefined":case"null":case"void":case"never":case"any":case"unknown":case"date":case"nan":case"enum":case"literal":case"file":case"transform":case"custom":break;default:for(const u in l){const f=Object.getOwnPropertyDescriptor(l,u);if(!f||f.get)continue;const d=f.value;if(!(!d||typeof d!="object")){if(d._zod)s(d);else if(Array.isArray(d))for(const h of d)s(h)}}}return e.delete(t),_1(t,r)}function _1(t,e){return e!==$o&&Um.set(t,e===Sa),e}function v1(t,e){let n=t.buckets.get(e);return n||(n=new WeakMap,t.buckets.set(e,n)),n}let wo;const To=[],x1={alloc(t,e,n){const i=wo;if(!i)return n;wo=void 0;const r={value:n,issues:null};return i.set(e.value,r),To.push(r),n},guard(t){var e;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const n=t._zod.parse,i=(r,s)=>{if(s.direction!=="backward"&&b1(s,r.value))throw new g1;return n(r,s)};t._zod.parse=i,t._zod.run===n&&(t._zod.run=i)})},attach(t){var e;let n,i=!1,r,s;(e=t._zod).deferred??(e.deferred=[]),t._zod.deferred.push(()=>{const a=t._zod.parse,o=(l,c)=>{if(n===void 0){const m=Ho(t,new Set);if(m===pa)return t._zod.parse=a,t._zod.run===o&&(t._zod.run=a),a(l,c);m===Sa||i?n=!0:i=!0}const u=l.value;if(!Dm(u))return a(l,c);let f=c[Su];f||(f={buckets:new WeakMap,backEdges:void 0},c[Su]=f);let d;r===c?d=s:(d=v1(f,t),r=c,s=d);const h=d.get(u);if(h)return l.value=h.value,h.issues?h.issues.length&&l.issues.push(...gc(h.issues)):(l.memo=!0,f.backEdges??(f.backEdges=new WeakSet),f.backEdges.add(h.value)),l;wo=d;const g=To.length,_=a(l,c);wo=void 0;const p=To.length>g?To.pop():void 0;return _ instanceof Promise?_.then(m=>(p&&(p.issues=m.issues.length?gc(m.issues):ph),m)):(p&&(p.issues=_.issues.length?gc(_.issues):ph),_)};t._zod.parse=o,t._zod.run===a&&(t._zod.run=o)})}};function y1(){return x1}function b1(t,e){const n=t[Su]?.backEdges;return n!==void 0&&Dm(e)&&n.has(e)}const S1=()=>{const t={string:{unit:"characters",verb:"to have"},file:{unit:"bytes",verb:"to have"},array:{unit:"items",verb:"to have"},set:{unit:"items",verb:"to have"},map:{unit:"entries",verb:"to have"}};function e(s){return t[s]??null}const n={regex:"input",email:"email address",url:"URL",emoji:"emoji",uuid:"UUID",uuidv4:"UUIDv4",uuidv6:"UUIDv6",nanoid:"nanoid",guid:"GUID",cuid:"cuid",cuid2:"cuid2",ulid:"ULID",xid:"XID",ksuid:"KSUID",datetime:"ISO datetime",date:"ISO date",time:"ISO time",duration:"ISO duration",ipv4:"IPv4 address",ipv6:"IPv6 address",mac:"MAC address",cidrv4:"IPv4 range",cidrv6:"IPv6 range",base64:"base64-encoded string",base64url:"base64url-encoded string",json_string:"JSON string",e164:"E.164 number",currency_code:"currency code",credit_card:"credit card number",iban:"IBAN",jwt:"JWT",template_literal:"input"},i={nan:"NaN"};function r(s,a){return s==="number"&&typeof a=="number"&&!Number.isFinite(a)?String(a):i[s]??s}return s=>{switch(s.code){case"invalid_type":{const a=r(s.expected),o=jM(s.input),l=r(o,s.input);return`Invalid input: expected ${a}, received ${l}`}case"invalid_value":return s.values.length===1?`Invalid input: expected ${fm(s.values[0])}`:`Invalid option: expected one of ${Kf(s.values,"|")}`;case"too_big":{const a=s.exact?"exactly ":s.inclusive?"<=":"<",o=e(s.origin);return o?`Too big: expected ${s.origin??"value"} to have ${a}${s.maximum.toString()} ${o.unit??"elements"}`:`Too big: expected ${s.origin??"value"} to be ${a}${s.maximum.toString()}`}case"too_small":{const a=s.exact?"exactly ":s.inclusive?">=":">",o=e(s.origin);return o?`Too small: expected ${s.origin} to have ${a}${s.minimum.toString()} ${o.unit}`:`Too small: expected ${s.origin} to be ${a}${s.minimum.toString()}`}case"invalid_format":{const a=s;return a.format==="starts_with"?`Invalid string: must start with "${a.prefix}"`:a.format==="ends_with"?`Invalid string: must end with "${a.suffix}"`:a.format==="includes"?`Invalid string: must include "${a.includes}"`:a.format==="regex"?`Invalid string: must match pattern ${a.pattern}`:`Invalid ${n[a.format]??s.format}`}case"not_multiple_of":return`Invalid number: must be a multiple of ${s.divisor}`;case"unrecognized_keys":return`Unrecognized key${s.keys.length>1?"s":""}: ${Kf(s.keys,", ")}`;case"invalid_key":return`Invalid key in ${s.origin}`;case"invalid_union":return s.options&&Array.isArray(s.options)&&s.options.length>0?`Invalid discriminator value. Expected ${s.options.map(o=>`'${o}'`).join(" | ")}`:s.inclusive===!1?"Invalid input: more than one option matched":"Invalid input";case"invalid_element":return`Invalid value in ${s.origin}`;default:return"Invalid input"}}};function M1(){return{localeError:S1()}}var mh;class E1{constructor(){this._map=new WeakMap,this._idmap=new Map}add(e,...n){const i=n[0];return this._map.set(e,i),i&&typeof i=="object"&&"id"in i&&this._idmap.set(i.id,e),this}clear(){return this._map=new WeakMap,this._idmap=new Map,this}remove(e){const n=this._map.get(e);return n&&typeof n=="object"&&"id"in n&&this._idmap.delete(n.id),this._map.delete(e),this}get(e){const n=e._zod.parent;if(n){const i={...this.get(n)??{}};delete i.id;const r={...i,...this._map.get(e)};return Object.keys(r).length?r:void 0}return this._map.get(e)}has(e){return this._map.has(e)}}function w1(){return new E1}(mh=globalThis).__zod_globalRegistry??(mh.__zod_globalRegistry=w1());const ma=globalThis.__zod_globalRegistry;function km(t){return t.checks&&(t.checks=[...t.checks]),t}function T1(t,e){return new t(km({type:"string",...Fe(e)}))}function A1(t,e){return new t({type:"string",format:"email",check:"string_format",abort:!1,...Fe(e)})}function R1(t,e){return new t({type:"string",format:"guid",check:"string_format",abort:!1,...Fe(e)})}function C1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,...Fe(e)})}function P1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v4",...Fe(e)})}function I1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v6",...Fe(e)})}function L1(t,e){return new t({type:"string",format:"uuid",check:"string_format",abort:!1,version:"v7",...Fe(e)})}function N1(t,e){return new t({type:"string",format:"url",check:"string_format",abort:!1,...Fe(e)})}function D1(t,e){return new t({type:"string",format:"emoji",check:"string_format",abort:!1,...Fe(e)})}function U1(t,e){return new t({type:"string",format:"nanoid",check:"string_format",abort:!1,...Fe(e)})}function k1(t,e){return new t({type:"string",format:"cuid",check:"string_format",abort:!1,...Fe(e)})}function O1(t,e){return new t({type:"string",format:"cuid2",check:"string_format",abort:!1,...Fe(e)})}function F1(t,e){return new t({type:"string",format:"ulid",check:"string_format",abort:!1,...Fe(e)})}function z1(t,e){return new t({type:"string",format:"xid",check:"string_format",abort:!1,...Fe(e)})}function B1(t,e){return new t({type:"string",format:"ksuid",check:"string_format",abort:!1,...Fe(e)})}function $1(t,e){return new t({type:"string",format:"ipv4",check:"string_format",abort:!1,...Fe(e)})}function H1(t,e){return new t({type:"string",format:"ipv6",check:"string_format",abort:!1,...Fe(e)})}function G1(t,e){return new t({type:"string",format:"cidrv4",check:"string_format",abort:!1,...Fe(e)})}function V1(t,e){return new t({type:"string",format:"cidrv6",check:"string_format",abort:!1,...Fe(e)})}function W1(t,e){return new t({type:"string",format:"base64",check:"string_format",abort:!1,...Fe(e)})}function X1(t,e){return new t({type:"string",format:"base64url",check:"string_format",abort:!1,...Fe(e)})}function Z1(t,e){return new t({type:"string",format:"e164",check:"string_format",abort:!1,...Fe(e)})}function q1(t,e){return new t({type:"string",format:"jwt",check:"string_format",abort:!1,...Fe(e)})}function j1(t,e){return new t({type:"string",format:"datetime",check:"string_format",offset:!1,local:!1,precision:null,...Fe(e)})}function Y1(t,e){return new t({type:"string",format:"date",check:"string_format",...Fe(e)})}function K1(t,e){return new t({type:"string",format:"time",check:"string_format",precision:null,...Fe(e)})}function J1(t,e){return new t({type:"string",format:"duration",check:"string_format",...Fe(e)})}function Q1(t,e){return new t(km({type:"number",checks:[],...Fe(e)}))}function eT(t,e){return new t({type:"number",check:"number_format",abort:!1,format:"safeint",...Fe(e)})}function tT(t,e){return new t({type:"boolean",...Fe(e)})}function nT(t){return new t({type:"unknown"})}function iT(t,e){return new t({type:"never",...Fe(e)})}function gh(t,e){return new bm({check:"less_than",...Fe(e),value:t,inclusive:!1})}function _c(t,e){return new bm({check:"less_than",...Fe(e),value:t,inclusive:!0})}function _h(t,e){return new Sm({check:"greater_than",...Fe(e),value:t,inclusive:!1})}function vc(t,e){return new Sm({check:"greater_than",...Fe(e),value:t,inclusive:!0})}function vh(t,e){return new ew({check:"multiple_of",...Fe(e),value:t})}function Om(t,e){return new nw({check:"max_length",...Fe(e),maximum:t})}function dl(t,e){return new iw({check:"min_length",...Fe(e),minimum:t})}function Fm(t,e){return new rw({check:"length_equals",...Fe(e),length:t})}function rT(t,e){return new sw({check:"string_format",format:"regex",...Fe(e),pattern:t})}function sT(t){return new aw({check:"string_format",format:"lowercase",...Fe(t)})}function aT(t){return new ow({check:"string_format",format:"uppercase",...Fe(t)})}function oT(t,e){return new lw({check:"string_format",format:"includes",...Fe(e),includes:t})}function lT(t,e){return new cw({check:"string_format",format:"starts_with",...Fe(e),prefix:t})}function cT(t,e){return new uw({check:"string_format",format:"ends_with",...Fe(e),suffix:t})}function Fs(t){return new dw({check:"overwrite",tx:t})}function uT(t){return Fs(e=>e.normalize(t))}function dT(){return Fs(t=>t.trim())}function fT(){return Fs(t=>t.toLowerCase())}function hT(){return Fs(t=>t.toUpperCase())}function pT(){return Fs(t=>kM(t))}function mT(t,e,n){return new t({type:"array",element:e,...Fe(n)})}function gT(t,e,n){return new t({type:"custom",check:"custom",fn:e,...Fe(n)})}function _T(t,e){const n=vT(i=>(i.addIssue=r=>{if(typeof r=="string")i.issues.push(Da(r,i.value,n._zod.def));else{const s=r;s.fatal&&(s.continue=!1),s.code??(s.code="custom"),"input"in s||(s.input=i.value),s.inst??(s.inst=n),s.continue??(s.continue=!n._zod.def.abort),i.issues.push(Da(s))}},t(i.value,i)),e);return n}function vT(t,e){const n=new An({check:"custom",...Fe(e)});return n._zod.check=t,n}function Ma(t,...e){for(const n of e)for(const i of Reflect.ownKeys(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hr(t,i,n[i]);return t}function zm(t){let e=t?.target??"draft-2020-12";return e==="draft-4"&&(e="draft-04"),e==="draft-7"&&(e="draft-07"),{processors:t.processors??{},metadataRegistry:t?.metadata??ma,target:e,unrepresentable:t?.unrepresentable??"throw",override:t?.override??(()=>{}),io:t?.io??"output",counter:0,seen:new Map,sharedDefsExtractedFor:void 0,sharedEmitDoneFor:void 0,cycles:t?.cycles??"ref",reused:t?.reused??"inline",intersections:[],deferred:[],external:t?.external??void 0}}function zs(t,e,n,i,r){const s=typeof e.unrepresentable=="function"?e.unrepresentable({zodSchema:t,path:i.path,message:r}):e.unrepresentable;if(s==="any")return!1;if(s===void 0||s==="throw")throw new Error(r);return Object.assign(n,s),!0}function sn(t,e,n={path:[],schemaPath:[]}){var i;const r=t._zod.def,s=e.seen.get(t);if(s)return s.count++,n.schemaPath.includes(t)&&(s.cycle=n.path),s.schema;const a={schema:{},count:1,cycle:void 0,path:n.path};e.seen.set(t,a),e.sharedDefsExtractedFor=void 0,e.sharedEmitDoneFor=void 0;const o=t._zod.toJSONSchema?.();if(o)a.schema=o;else{const u={...n,schemaPath:[...n.schemaPath,t],path:n.path};if(t._zod.processJSONSchema)t._zod.processJSONSchema(e,a.schema,u);else{const d=a.schema,h=e.processors[r.type];if(!h)throw new Error(`[toJSONSchema]: Non-representable type encountered: ${r.type}`);h(t,e,d,u)}const f=t._zod.parent;f&&(a.ref||(a.ref=f),sn(f,e,u),e.seen.get(f).isParent=!0)}const l=e.metadataRegistry.get(t);return l&&Ma(a.schema,l),e.io==="input"&&gn(t)&&(delete a.schema.examples,delete a.schema.default),e.io==="input"&&"_prefault"in a.schema&&((i=a.schema).default??(i.default=a.schema._prefault)),delete a.schema._prefault,e.seen.get(t).schema}function xh(t){return t.replace(/~/g,"~0").replace(/\//g,"~1")}function Bm(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");if(t.external&&t.sharedDefsExtractedFor===t.external)return;const i=new Map;for(const a of t.seen.entries()){const o=t.metadataRegistry.get(a[0])?.id;if(o){const l=i.get(o);if(l&&l!==a[0])throw new Error(`Duplicate schema id "${o}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);i.set(o,a[0])}}const r=a=>{const o=t.target==="draft-2020-12"?"$defs":"definitions";if(t.external){const f=t.external.registry.get(a[0])?.id,d=t.external.uri??(g=>g);if(f)return{ref:d(f)};const h=a[1].defId??a[1].schema.id??`schema${t.counter++}`;return a[1].defId=h,{defId:h,ref:`${d("__shared")}#/${o}/${xh(h)}`}}const l="#",c=`${l}/${o}/`;if(a[1]===n&&!a[1].schema.id)return{ref:l};const u=a[1].schema.id??`__schema${t.counter++}`;return{defId:u,ref:c+xh(u)}},s=a=>{if(a[1].schema.$ref)return;const o=a[1],{ref:l,defId:c}=r(a);o.def={...o.schema},c&&(o.defId=c);const u=o.schema;for(const f in u)delete u[f];u.$ref=l};if(t.cycles==="throw")for(const a of t.seen.entries()){const o=a[1];if(o.cycle)throw new Error(`Cycle detected: #/${o.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`)}for(const a of t.seen.entries()){const o=a[1];if(e===a[0]){s(a);continue}if(t.external){const c=t.external.registry.get(a[0])?.id;if(e!==a[0]&&c){s(a);continue}}if(t.metadataRegistry.get(a[0])?.id){s(a);continue}if(o.cycle){s(a);continue}o.count>1&&t.reused==="ref"&&s(a)}t.external&&(t.sharedDefsExtractedFor=t.external)}function $m(t){const e=t.anyOf;if(!Array.isArray(e)||e.length===0||t.type!==void 0)return;const n=[];for(const i of e){if(!i||typeof i!="object")return;$m(i);const r=Object.keys(i);if(r.length!==1||r[0]!=="type")return;const s=i.type;for(const a of Array.isArray(s)?s:[s]){if(typeof a!="string")return;n.includes(a)||n.push(a)}}delete t.anyOf,t.type=n.length===1?n[0]:n}const Hm=new Set(["type","properties","required","additionalProperties"]),yh=["oneOf","anyOf"];function bh(t){const e=t.additionalProperties;return e===void 0||e===!1||typeof e!="object"||e===null?null:Object.keys(e).length?e:null}function Mu(t){const e=[];for(const s of t){if(typeof s!="object"||s.type!=="object")return null;for(const a in s)if(!Hm.has(a))return null;e.push(s)}const n={},i=new Set;for(const s of e){for(const a in s.properties){if(Object.prototype.hasOwnProperty.call(n,a))continue;const o=[];for(const c of e){const u=c.properties?.[a]??bh(c);u!=null&&(o.some(f=>JSON.stringify(f)===JSON.stringify(u))||o.push(u))}const l=o.length===1?o[0]:Mu(o)??{allOf:o};Hr(n,a,l)}for(const a of s.required??[])i.add(a)}const r={type:"object",properties:n};if(i.size&&(r.required=[...i]),e.every(s=>s.additionalProperties===!1))r.additionalProperties=!1;else{const s=[];for(const a of e){const o=bh(a);o&&!s.some(l=>JSON.stringify(l)===JSON.stringify(o))&&s.push(o)}s.length===1?r.additionalProperties=s[0]:s.length>1&&(r.additionalProperties={allOf:s})}return r}function xT(t){const e=t.allOf;if(!Array.isArray(e)||e.length<2)return;for(const r of Hm)if(r in t)return;const n=e.filter(r=>yh.some(s=>Array.isArray(r[s])));let i=null;if(!n.length)i=Mu(e);else{const r=n[0],s=yh.find(l=>Array.isArray(r[l]));if(Object.keys(r).length!==1)return;const a=e.filter(l=>l!==r),o=r[s].map(l=>Mu([...a,l]));if(o.some(l=>!l))return;i={[s]:o}}i&&(delete t.allOf,Ma(t,i))}function Gm(t,e){const n=t.seen.get(e);if(!n)throw new Error("Unprocessed schema. This is a bug in Zod.");const i=o=>{const l=t.seen.get(o);if(l.ref===null)return;const c=l.def??l.schema,u={...c},f=l.ref;if(l.ref=null,f){i(f);const h=t.seen.get(f),g=h.schema;if(g.$ref&&(t.target==="draft-07"||t.target==="draft-04"||t.target==="openapi-3.0")?(c.allOf=c.allOf??[],c.allOf.push(g)):Ma(c,g),Ma(c,u),o._zod.parent===f)for(const p in c)p==="$ref"||p==="allOf"||p in u||delete c[p];if(g.$ref&&h.def)for(const p in c)p==="$ref"||p==="allOf"||p in h.def&&JSON.stringify(c[p])===JSON.stringify(h.def[p])&&delete c[p]}const d=o._zod.parent;if(d&&d!==f){i(d);const h=t.seen.get(d);if(h?.schema.$ref&&(c.$ref=h.schema.$ref,h.def))for(const g in c)g==="$ref"||g==="allOf"||g in h.def&&JSON.stringify(c[g])===JSON.stringify(h.def[g])&&delete c[g]}t.override({zodSchema:o,jsonSchema:c,path:l.path??[]})};if(!t.external||t.sharedEmitDoneFor!==t.external){for(const o of[...t.seen.entries()].reverse())i(o[0]);if(t.target!=="openapi-3.0")for(const o of t.seen.entries())$m(o[1].def??o[1].schema);for(const o of t.deferred)o();if(t.intersections.length){const o=new Map;for(const l of t.seen.values())for(const c of[l.schema,l.def]){const u=c?.allOf;if(!Array.isArray(u))continue;const f=o.get(u);f?f.push(c):o.set(u,[c])}for(const l of t.intersections)for(const c of o.get(l)??[])xT(c)}}const r={};if(t.target==="draft-2020-12"?r.$schema="https://json-schema.org/draft/2020-12/schema":t.target==="draft-07"?r.$schema="http://json-schema.org/draft-07/schema#":t.target==="draft-04"?r.$schema="http://json-schema.org/draft-04/schema#":t.target,t.external?.uri){const o=t.external.registry.get(e)?.id;if(!o)throw new Error("Schema is missing an `id` property");r.$id=t.external.uri(o)}Ma(r,n.defId?n.schema:n.def??n.schema);const s=t.metadataRegistry.get(e)?.id;s!==void 0&&r.id===s&&delete r.id;const a=t.external?.defs??{};if(!t.external||t.sharedEmitDoneFor!==t.external)for(const o of t.seen.entries()){const l=o[1];l.def&&l.defId&&(l.def.id===l.defId&&delete l.def.id,Hr(a,l.defId,l.def))}t.external&&(t.sharedEmitDoneFor=t.external),t.external||Object.keys(a).length>0&&(t.target==="draft-2020-12"?r.$defs=a:r.definitions=a);try{const o=JSON.parse(JSON.stringify(r));return Object.defineProperty(o,"~standard",{value:{...e["~standard"],jsonSchema:{input:fl(e,"input",t.processors),output:fl(e,"output",t.processors)}},enumerable:!1,writable:!1}),o}catch{throw new Error("Error converting schema to JSON.")}}function gn(t,e){const n=e??{seen:new Set};if(n.seen.has(t))return!1;n.seen.add(t);const i=t._zod.def;if(i.type==="transform")return!0;if(i.type==="array")return gn(i.element,n);if(i.type==="set")return gn(i.valueType,n);if(i.type==="lazy")return gn(i.getter(),n);if(i.type==="promise"||i.type==="optional"||i.type==="nonoptional"||i.type==="nullable"||i.type==="readonly"||i.type==="default"||i.type==="prefault"||i.type==="catch")return gn(i.innerType,n);if(i.type==="intersection")return gn(i.left,n)||gn(i.right,n);if(i.type==="record"||i.type==="map")return gn(i.keyType,n)||gn(i.valueType,n);if(i.type==="pipe")return t._zod.traits.has("$ZodCodec")?!0:gn(i.in,n)||gn(i.out,n);if(i.type==="object"){for(const r in i.shape)if(gn(i.shape[r],n))return!0;return!1}if(i.type==="union"){for(const r of i.options)if(gn(r,n))return!0;return!1}if(i.type==="tuple"){for(const r of i.items)if(gn(r,n))return!0;return!!(i.rest&&gn(i.rest,n))}return!1}const yT=(t,e={})=>n=>{const i=zm({...n,processors:e});return sn(t,i),Bm(i,t),Gm(i,t)},fl=(t,e,n={})=>i=>{const{libraryOptions:r,target:s}=i??{},a=zm({...r??{},target:s,io:e,processors:n});return sn(t,a),Bm(a,t),Gm(a,t)},Es=(t,e,n)=>{(t[e]===void 0||n>t[e])&&(t[e]=n)},ws=(t,e,n)=>{(t[e]===void 0||n<t[e])&&(t[e]=n)},Sh=(t,e)=>{Es(t,"minimum",e),ws(t,"maximum",e)},Vm=(t,e)=>{t.multipleOf??(t.multipleOf=[]),t.multipleOf.includes(e)||t.multipleOf.push(e)},Wm=(t,e)=>{t.patterns??(t.patterns=new Set),t.patterns.add(e)},Xm=(t,e)=>{t.mime=t.mime?t.mime.filter(n=>e.includes(n)):[...e]},Zm=(t,e)=>{t.format=e,e.includes("int")&&(t.isInt=!0)},Mh=(t,e)=>Es(t,"minimum",e.minimum),Eh=(t,e)=>ws(t,"maximum",e.maximum),wh=t=>(e,n)=>{Zm(e,n.format);const[i,r]=t[n.format];Es(e,"minimum",i),ws(e,"maximum",r)},bT={greater_than:(t,e)=>Es(t,e.inclusive?"minimum":"exclusiveMinimum",e.value),less_than:(t,e)=>ws(t,e.inclusive?"maximum":"exclusiveMaximum",e.value),multiple_of:(t,e)=>Vm(t,e.value),number_format:wh(hm),bigint_format:wh(BM),min_length:Mh,max_length:Eh,length_equals:(t,e)=>Sh(t,e.length),min_size:Mh,max_size:Eh,size_equals:(t,e)=>Sh(t,e.size),string_format:(t,e)=>{Zm(t,e.format),e.pattern&&Wm(t,e.pattern),(e.format==="base64"||e.format==="base64url")&&(t.contentEncoding=e.format),(e.local||e.precision===-1)&&(t.laxFormat=!0)},mime_type:(t,e)=>Xm(t,e.mime)};function di(t){const e={},n=t._zod.def,i=t._zod.traits.has("$ZodCheck")?[t,...n.checks??[]]:n.checks??[];for(const s of i)bT[s._zod.def.check]?.(e,s._zod.def);const r=t._zod.bag;r.minimum!==void 0&&Es(e,"minimum",r.minimum),r.exclusiveMinimum!==void 0&&Es(e,"exclusiveMinimum",r.exclusiveMinimum),r.maximum!==void 0&&ws(e,"maximum",r.maximum),r.exclusiveMaximum!==void 0&&ws(e,"exclusiveMaximum",r.exclusiveMaximum),r.multipleOf!==void 0&&Vm(e,r.multipleOf),r.format!==void 0&&(e.format??(e.format=r.format),r.format.includes("int")&&(e.isInt=!0)),r.mime&&Xm(e,r.mime);for(const s of r.patterns??[])Wm(e,s);return e}const ST={guid:"uuid",url:"uri",datetime:"date-time",json_string:"json-string",regex:""},MT=new Map([[Cm,$E],[hd,HE]]),ET=t=>MT.get(t)??t,wT=(t,e,n,i)=>{const r=n;r.type="string";const{minimum:s,maximum:a,format:o,patterns:l,contentEncoding:c,laxFormat:u}=di(t);if(typeof s=="number"&&(r.minLength=s),typeof a=="number"&&(r.maxLength=a),o&&(r.format=ST[o]??o,r.format===""&&delete r.format,(o==="time"||u)&&delete r.format),c&&(r.contentEncoding=c),l&&l.size>0){const f=[...l].map(ET);f.length===1?r.pattern=f[0].source:f.length>1&&(r.allOf=[...f.map(d=>({...e.target==="draft-07"||e.target==="draft-04"||e.target==="openapi-3.0"?{type:"string"}:{},pattern:d.source}))])}},TT=(t,e,n,i)=>{const r=n,{minimum:s,maximum:a,multipleOf:o,exclusiveMaximum:l,exclusiveMinimum:c,isInt:u}=di(t);r.type=u?"integer":"number";const f=typeof c=="number"&&c>=(s??Number.NEGATIVE_INFINITY),d=typeof l=="number"&&l<=(a??Number.POSITIVE_INFINITY),h=e.target==="draft-04"||e.target==="openapi-3.0";if(f?h?(r.minimum=c,r.exclusiveMinimum=!0):r.exclusiveMinimum=c:typeof s=="number"&&(r.minimum=s),d?h?(r.maximum=l,r.exclusiveMaximum=!0):r.exclusiveMaximum=l:typeof a=="number"&&(r.maximum=a),o){const g=new Set;for(const m of o)Number.isFinite(m)&&m!==0?g.add(Math.abs(m)):zs(t,e,r,i,`A multipleOf divisor of ${m} cannot be represented in JSON Schema`);const[_,...p]=g;_!==void 0&&(r.multipleOf=_),p.length&&(r.allOf=[...r.allOf??[],...p.map(m=>({multipleOf:m}))])}},AT=(t,e,n,i)=>{n.type="boolean"},RT=(t,e,n,i)=>{n.not={}},CT=(t,e,n,i)=>{},PT=(t,e,n,i)=>{const r=t._zod.def,s=_u(r.entries);if(s.length===0){n.not={};return}s.every(a=>typeof a=="number")&&(n.type="number"),s.every(a=>typeof a=="string")&&(n.type="string"),n.enum=s},IT=(t,e,n,i)=>{zs(t,e,n,i,"Custom types cannot be represented in JSON Schema")},LT=(t,e,n,i)=>{zs(t,e,n,i,"Transforms cannot be represented in JSON Schema")},NT=(t,e,n,i)=>{const r=n,s=t._zod.def,{minimum:a,maximum:o}=di(t);typeof a=="number"&&(r.minItems=a),typeof o=="number"&&(r.maxItems=o),r.type="array",r.items=sn(s.element,e,{...i,path:[...i.path,"items"]})};function Eu(t){const e=t._zod.def;return e.type==="pipe"&&e.in._zod.traits.has("$ZodTransform")?Eu(e.out):e.type==="catch"?Eu(e.innerType):t._zod.optin}const DT=(t,e,n,i)=>{const r=n,s=t._zod.def,a=s.shape;if(Object.getOwnPropertySymbols(a).length&&zs(t,e,r,i,"Symbol keys cannot be represented in JSON Schema"))return;r.type="object",r.properties={};for(const c in a)Hr(r.properties,c,sn(a[c],e,{...i,path:[...i.path,"properties",c]}));const l=[];for(const c of Object.keys(a)){const u=s.shape[c];(e.io==="input"?Eu(u)===void 0:u._zod.optout===void 0)&&l.push(c)}l.length>0&&(r.required=l),s.catchall?._zod.def.type==="never"?r.additionalProperties=!1:s.catchall?s.catchall&&(r.additionalProperties=sn(s.catchall,e,{...i,path:[...i.path,"additionalProperties"]})):e.io==="output"&&(r.additionalProperties=!1)},UT=(t,e,n,i)=>{const r=t._zod.def,s=r.inclusive===!1,a=r.options.map((o,l)=>sn(o,e,{...i,path:[...i.path,s?"oneOf":"anyOf",l]}));s?n.oneOf=a:n.anyOf=a},kT=(t,e,n,i)=>{const r=t._zod.def,s=sn(r.left,e,{...i,path:[...i.path,"allOf",0]}),a=sn(r.right,e,{...i,path:[...i.path,"allOf",1]}),o=c=>"allOf"in c&&Object.keys(c).length===1,l=[...o(s)?s.allOf:[s],...o(a)?a.allOf:[a]];n.allOf=l,e.intersections.push(l)},OT=(t,e,n,i)=>{const r=t._zod.def,s=sn(r.innerType,e,i),a=e.seen.get(t);e.target==="openapi-3.0"?(a.ref=r.innerType,n.nullable=!0):n.anyOf=[s,{type:"null"}]},FT=(t,e,n,i)=>{const r=t._zod.def;sn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},pd=Symbol();function qm(t,e,n,i,r){let s=!1;const a=JSON.stringify(t,(o,l)=>typeof l!="bigint"?l:(s=!0,null));return s?(zs(e,n,i,r,"BigInt defaults cannot be represented in JSON Schema"),pd):JSON.parse(a)}const zT=(t,e,n,i)=>{const r=t._zod.def;sn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;const a=qm(r.defaultValue,t,e,n,i);a!==pd&&(n.default=a)},BT=(t,e,n,i)=>{const r=t._zod.def;sn(r.innerType,e,i);const s=e.seen.get(t);if(s.ref=r.innerType,e.io!=="input")return;const a=qm(r.defaultValue,t,e,n,i);a!==pd&&(n._prefault=a)},$T=(t,e,n,i)=>{const r=t._zod.def;sn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType;let a;try{a=r.catchValue(void 0)}catch{zs(t,e,n,i,"Dynamic catch values are not supported in JSON Schema");return}n.default=a},HT=(t,e,n,i)=>{const r=t._zod.def,s=r.in._zod.traits.has("$ZodTransform"),a=e.io==="input"?s?r.out:r.in:r.out;sn(a,e,i);const o=e.seen.get(t);o.ref=a},GT=(t,e,n,i)=>{const r=t._zod.def;sn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType,n.readOnly=!0},jm=(t,e,n,i)=>{const r=t._zod.def;sn(r.innerType,e,i);const s=e.seen.get(t);s.ref=r.innerType},Th=new WeakSet([Object.prototype,Error.prototype]);function Ao(t,e,n){Object.defineProperty(t,e,{configurable:!0,enumerable:!1,get(){const i=n(this);return Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0}),i},set(i){Object.defineProperty(this,e,{value:i,configurable:!0,writable:!0})}})}const VT=(t,e)=>{lE.init(t,e),t.name="ZodError";const n=Object.getPrototypeOf(t);Th.has(n)||(Th.add(n),Ao(n,"format",i=>r=>dE(i,r)),Ao(n,"flatten",i=>r=>uE(i,r)),Ao(n,"addIssue",i=>r=>{i.issues.push(r),i.message=JSON.stringify(i.issues,vu,2)}),Ao(n,"addIssues",i=>r=>{i.issues.push(...r),i.message=JSON.stringify(i.issues,vu,2)}),Object.defineProperty(n,"isEmpty",{configurable:!0,enumerable:!1,get(){return this.issues.length===0}}))},Vn=le("ZodError",VT,void 0,{Parent:Error}),WT=od(Vn),XT=ld(Vn),ZT=cd(Vn),qT=ud(Vn),jT=_E(Vn),YT=vE(Vn),KT=xE(Vn),JT=yE(Vn),QT=bE(Vn),eA=SE(Vn),tA=ME(Vn),nA=EE(Vn);function iA(){mi.localeError||dr(M1())}function md(){mi.memoizer||dr({memoizer:y1()})}const Bt=le("ZodType",(t,e)=>(iA(),zt.init(t,e),t.def=e,t.type=e.type,t),{check(...t){const e=this.def;return this.clone(Ln(e,{checks:[...e.checks??[],...t.map(n=>typeof n=="function"?{_zod:{check:n,def:{check:"custom"},onattach:[]}}:n)]}),{parent:!0})},with(...t){return this.check(...t)},clone(t,e){return ur(this,t,e)},brand(){return this},register(t,e){return t.add(this,e),this},refine(t,e){return this.check(eR(t,e))},superRefine(t,e){return this.check(tR(t,e))},overwrite(t){return this.check(Fs(t))},optional(){return Ch(this)},exactOptional(){return $A(this)},nullable(){return Ph(this)},nullish(){return Ch(Ph(this))},nonoptional(t){return ZA(this,t)},array(){return ds(this)},or(t){return kA([this,t])},and(t){return FA(this,t)},transform(t){return Ih(this,BA(t))},default(t){return VA(this,t)},prefault(t){return XA(this,t)},catch(t){return jA(this,t)},pipe(t){return Ih(this,t)},readonly(){return JA(this)},describe(t){const e=this.clone();return ma.add(e,{description:t}),e},meta(...t){if(t.length===0)return ma.get(this);const e=this.clone();return ma.add(e,t[0]),e},isOptional(){return this.safeParse(void 0).success},isNullable(){return this.safeParse(null).success},apply(t,...e){return e.length===0?t(this):t(this,...e)},get"~standard"(){return gm(this,"~standard",{...Em(this),jsonSchema:{input:fl(this,"input"),output:fl(this,"output")}})},set"~standard"(t){or(this,"~standard",t)},parse:function t(e,n){return WT(this,e,n,{callee:t})},parseAsync:async function t(e,n){return await XT(this,e,n,{callee:t})},safeParse(t,e){return ZT(this,t,e)},async safeParseAsync(t,e){return qT(this,t,e)},get spa(){return this?.safeParseAsync},set spa(t){or(this,"spa",t)},validate(t,e){return pE(this,t,e)},validateAsync(t,e){return gE(this,t,e)},encode:function t(e,n){return jT(this,e,n,{callee:t})},decode:function t(e,n){return YT(this,e,n,{callee:t})},encodeAsync:async function t(e,n){return await KT(this,e,n,{callee:t})},decodeAsync:async function t(e,n){return await JT(this,e,n,{callee:t})},safeEncode(t,e){return QT(this,t,e)},safeDecode(t,e){return eA(this,t,e)},async safeEncodeAsync(t,e){return tA(this,t,e)},async safeDecodeAsync(t,e){return nA(this,t,e)},toJSONSchema(t){return yT(this,{})(t)},get description(){return ma.get(this)?.description},get _def(){return this._zod.def}}),Ym=le("_ZodString",(t,e)=>{fd.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>wT(t,n,i)},_m({format:t=>di(t).format??null,minLength:t=>di(t).minimum??null,maxLength:t=>di(t).maximum??null},{regex(...t){return this.check(rT(...t))},includes(...t){return this.check(oT(...t))},startsWith(...t){return this.check(lT(...t))},endsWith(...t){return this.check(cT(...t))},min(...t){return this.check(dl(...t))},max(...t){return this.check(Om(...t))},length(...t){return this.check(Fm(...t))},nonempty(...t){return this.check(dl(1,...t))},lowercase(t){return this.check(sT(t))},uppercase(t){return this.check(aT(t))},trim(){return this.check(dT())},normalize(...t){return this.check(uT(...t))},toLowerCase(){return this.check(fT())},toUpperCase(){return this.check(hT())},slugify(){return this.check(pT())}})),rA=le("ZodString",(t,e)=>{fd.init(t,e),Ym.init(t,e)},{email(t){return this.check(A1(cA,t))},url(t){return this.check(N1(dA,t))},jwt(t){return this.check(q1(TA,t))},emoji(t){return this.check(D1(fA,t))},guid(t){return this.check(R1(uA,t))},uuid(t){return this.check(C1(Ro,t))},uuidv4(t){return this.check(P1(Ro,t))},uuidv6(t){return this.check(I1(Ro,t))},uuidv7(t){return this.check(L1(Ro,t))},nanoid(t){return this.check(U1(hA,t))},cuid(t){return this.check(k1(pA,t))},cuid2(t){return this.check(O1(mA,t))},ulid(t){return this.check(F1(gA,t))},base64(t){return this.check(W1(MA,t))},base64url(t){return this.check(X1(EA,t))},xid(t){return this.check(z1(_A,t))},ksuid(t){return this.check(B1(vA,t))},ipv4(t){return this.check($1(xA,t))},ipv6(t){return this.check(H1(yA,t))},cidrv4(t){return this.check(G1(bA,t))},cidrv6(t){return this.check(V1(SA,t))},e164(t){return this.check(Z1(wA,t))},datetime(t){return this.check(j1(sA,t))},date(t){return this.check(Y1(aA,t))},time(t){return this.check(K1(oA,t))},duration(t){return this.check(J1(lA,t))}});function Je(t){return T1(rA,t)}const It=le("ZodStringFormat",(t,e)=>{At.init(t,e),Ym.init(t,e)}),sA=le("ZodISODateTime",(t,e)=>{Iw.init(t,e),It.init(t,e)}),aA=le("ZodISODate",(t,e)=>{Lw.init(t,e),It.init(t,e)}),oA=le("ZodISOTime",(t,e)=>{Nw.init(t,e),It.init(t,e)}),lA=le("ZodISODuration",(t,e)=>{Dw.init(t,e),It.init(t,e)}),cA=le("ZodEmail",(t,e)=>{_w.init(t,e),It.init(t,e)}),uA=le("ZodGUID",(t,e)=>{mw.init(t,e),It.init(t,e)}),Ro=le("ZodUUID",(t,e)=>{gw.init(t,e),It.init(t,e)}),dA=le("ZodURL",(t,e)=>{Mw.init(t,e),It.init(t,e)}),fA=le("ZodEmoji",(t,e)=>{Ew.init(t,e),It.init(t,e)}),hA=le("ZodNanoID",(t,e)=>{ww.init(t,e),It.init(t,e)}),pA=le("ZodCUID",(t,e)=>{Tw.init(t,e),It.init(t,e)}),mA=le("ZodCUID2",(t,e)=>{Aw.init(t,e),It.init(t,e)}),gA=le("ZodULID",(t,e)=>{Rw.init(t,e),It.init(t,e)}),_A=le("ZodXID",(t,e)=>{Cw.init(t,e),It.init(t,e)}),vA=le("ZodKSUID",(t,e)=>{Pw.init(t,e),It.init(t,e)}),xA=le("ZodIPv4",(t,e)=>{Uw.init(t,e),It.init(t,e)}),yA=le("ZodIPv6",(t,e)=>{Ow.init(t,e),It.init(t,e)}),bA=le("ZodCIDRv4",(t,e)=>{Fw.init(t,e),It.init(t,e)}),SA=le("ZodCIDRv6",(t,e)=>{Bw.init(t,e),It.init(t,e)}),MA=le("ZodBase64",(t,e)=>{$w.init(t,e),It.init(t,e)}),EA=le("ZodBase64URL",(t,e)=>{Gw.init(t,e),It.init(t,e)}),wA=le("ZodE164",(t,e)=>{Vw.init(t,e),It.init(t,e)}),TA=le("ZodJWT",(t,e)=>{Xw.init(t,e),It.init(t,e)}),Km=le("ZodNumber",(t,e)=>{Pm.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>TT(t,n,i,r),t.isFinite=!0},_m({minValue:t=>{const{minimum:e,exclusiveMinimum:n}=di(t);return Math.max(e??Number.NEGATIVE_INFINITY,n??Number.NEGATIVE_INFINITY)},maxValue:t=>{const{maximum:e,exclusiveMaximum:n}=di(t);return Math.min(e??Number.POSITIVE_INFINITY,n??Number.POSITIVE_INFINITY)},isInt:t=>{const{isInt:e,multipleOf:n}=di(t);return!!e||!!n?.some(Number.isSafeInteger)},format:t=>di(t).format??null},{gt(t,e){return this.check(_h(t,e))},gte(t,e){return this.check(vc(t,e))},min(t,e){return this.check(vc(t,e))},lt(t,e){return this.check(gh(t,e))},lte(t,e){return this.check(_c(t,e))},max(t,e){return this.check(_c(t,e))},int(t){return this.check(Ah(t))},safe(t){return this.check(Ah(t))},positive(t){return this.check(_h(0,t))},nonnegative(t){return this.check(vc(0,t))},negative(t){return this.check(gh(0,t))},nonpositive(t){return this.check(_c(0,t))},multipleOf(t,e){return this.check(vh(t,e))},step(t,e){return this.check(vh(t,e))},finite(){return this}}));function Vt(t){return Q1(Km,t)}const AA=le("ZodNumberFormat",(t,e)=>{Zw.init(t,e),Km.init(t,e)});function Ah(t){return eT(AA,t)}const RA=le("ZodBoolean",(t,e)=>{qw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>AT(t,n,i)});function CA(t){return tT(RA,t)}const PA=le("ZodUnknown",(t,e)=>{jw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>CT()});function Rh(){return nT(PA)}const IA=le("ZodNever",(t,e)=>{Yw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>RT(t,n,i)});function LA(t){return iT(IA,t)}const NA=le("ZodArray",(t,e)=>{md(),Qw.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>NT(t,n,i,r),t.element=e.element},{min(t,e){return this.check(dl(t,e))},nonempty(t){return this.check(dl(1,t))},max(t,e){return this.check(Om(t,e))},length(t,e){return this.check(Fm(t,e))},unwrap(){return this.element}});function ds(t,e){return mT(NA,t,e)}const DA=le("ZodObject",(t,e)=>{md(),n1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>DT(t,n,i,r),eE(t,"shape",n=>n._zod.def.shape,!1)},{keyof(){return Ar(Object.keys(this._zod.def.shape))},catchall(t){return this.clone(Ln(this._zod.def,{catchall:t}))},passthrough(){return this.clone(Ln(this._zod.def,{catchall:Rh()}))},loose(){return this.clone(Ln(this._zod.def,{catchall:Rh()}))},strict(){return this.clone(Ln(this._zod.def,{catchall:LA()}))},strip(){return this.clone(Ln(this._zod.def,{catchall:void 0}))},extend(t){return GM(this,t)},safeExtend(t){return VM(this,t)},merge(t){return WM(this,t)},pick(t){return $M(this,t)},omit(t){return HM(this,t)},partial(...t){return Jf(Jm,this,t[0])},exactPartial(...t){return Jf(Qm,this,t[0],"exactPartial")},required(...t){return XM(eg,this,t[0])}});function ai(t,e){const n={type:"object",shape:t??{},...Fe(e)};return new DA(n)}const UA=le("ZodUnion",(t,e)=>{i1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>UT(t,n,i,r),t.options=e.options});function kA(t,e){return new UA({type:"union",options:t,...Fe(e)})}const OA=le("ZodIntersection",(t,e)=>{r1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>kT(t,n,i,r)});function FA(t,e){return new OA({type:"intersection",left:t,right:e})}const wu=le("ZodEnum",(t,e)=>{s1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(i,r,s)=>PT(t,i,r),t.enum=e.entries,t.options=[...t._zod.values];const n=new Set(Object.keys(e.entries));t.extract=(i,r)=>{const s={};for(const a of i)if(n.has(a))s[a]=e.entries[a];else throw new Error(`Key ${a} not found in enum`);return new wu({...e,checks:[],...Fe(r),entries:s})},t.exclude=(i,r)=>{const s={...e.entries};for(const a of i)if(n.has(a))delete s[a];else throw new Error(`Key ${a} not found in enum`);return new wu({...e,checks:[],...Fe(r),entries:s})}});function Ar(t,e){const n=Array.isArray(t)?Object.fromEntries(t.map(i=>[i,i])):t;return new wu({type:"enum",entries:n,...Fe(e)})}const zA=le("ZodTransform",(t,e)=>{md(),a1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>LT(t,n,i,r),t._zod.parse=(n,i)=>{if(i.direction==="backward")throw new vm(t.constructor.name);n.addIssue=s=>{if(typeof s=="string")n.issues.push(Da(s,n.value,e));else{const a=s;a.fatal&&(a.continue=!1),a.code??(a.code="custom"),"input"in a||(a.input=n.value),a.inst??(a.inst=t),n.issues.push(Da(a))}};const r=e.transform(n.value,n);return r instanceof Promise?r.then(s=>(n.value=s,n)):(n.value=r,n)}});function BA(t){return new zA({type:"transform",transform:t})}const Jm=le("ZodOptional",(t,e)=>{Nm.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>jm(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Ch(t){return new Jm({type:"optional",innerType:t})}const Qm=le("ZodExactOptional",(t,e)=>{o1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>jm(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function $A(t){return new Qm({type:"optional",innerType:t})}const HA=le("ZodNullable",(t,e)=>{l1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>OT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function Ph(t){return new HA({type:"nullable",innerType:t})}const GA=le("ZodDefault",(t,e)=>{c1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>zT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeDefault=t.unwrap});function VA(t,e){return new GA({type:"default",innerType:t,get defaultValue(){return typeof e=="function"?e():dm(e)}})}const WA=le("ZodPrefault",(t,e)=>{u1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>BT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function XA(t,e){return new WA({type:"prefault",innerType:t,get defaultValue(){return typeof e=="function"?e():dm(e)}})}const eg=le("ZodNonOptional",(t,e)=>{d1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>FT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function ZA(t,e){return new eg({type:"nonoptional",innerType:t,...Fe(e)})}const qA=le("ZodCatch",(t,e)=>{f1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>$T(t,n,i,r),t.unwrap=()=>t._zod.def.innerType,t.removeCatch=t.unwrap});function jA(t,e){return new qA({type:"catch",innerType:t,catchValue:typeof e=="function"?e:nE(e)})}const YA=le("ZodPipe",(t,e)=>{h1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>HT(t,n,i,r),t.in=e.in,t.out=e.out});function Ih(t,e){return new YA({type:"pipe",in:t,out:e})}const KA=le("ZodReadonly",(t,e)=>{p1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>GT(t,n,i,r),t.unwrap=()=>t._zod.def.innerType});function JA(t){return new KA({type:"readonly",innerType:t})}const QA=le("ZodCustom",(t,e)=>{m1.init(t,e),Bt.init(t,e),t._zod.processJSONSchema=(n,i,r)=>IT(t,n,i,r)});function eR(t,e={}){return gT(QA,t,e)}function tR(t,e){return _T(t,e)}const nR=ai({id:Je(),name:Je(),role:Je(),state:Ar(["idle","thinking","working","reviewing"]),stationId:Ar(["culture","analyzer","explorer","notebook"]),boredom:Vt().min(0).max(100).nullable(),boredomSpectrum:ai({position:Vt().min(0).max(1),color:Je(),regime:Je()}).optional()}),iR=ai({field:Je().nullable(),question:Je(),test:Je().nullable(),rho:Vt().nullable(),p:Vt().nullable(),n:Vt().nullable(),replicated:CA(),rejected:Je().nullable(),error:Je().nullable()});ai({runId:Je(),lastSequence:Vt().int().nonnegative(),status:Ar(["queued","starting","running","stopping","completed","failed","stopped","interrupted"]),createdAt:Vt(),title:Je().optional(),config:ai({mode:Ar(["tinker_modal","recorded"]),arm:Ar(["A","B","C","D","full"]),rounds:Vt(),task:Je().optional(),seed:Vt().nullable(),model:Je().nullable()}),sourceCommit:Je(),progress:Vt().min(0).max(1),round:Vt(),boredom:Vt(),regime:Je(),value:Vt().nullable(),reference:Vt().nullable(),agents:ds(nR),findings:ds(ai({agent:Je().optional(),role:Je(),message:Je(),round:Vt().optional(),memoryId:Je().optional()})),results:ds(ai({agent:Je(),round:Vt(),kind:Je(),status:Je(),value:Vt().nullable(),commit:Je().nullable().optional(),description:Je(),sources:ds(Je()).optional(),effectSize:Vt().nullable().optional(),pValue:Vt().nullable().optional(),reward:Vt().nullable().optional(),study:iR.nullable().optional()})),sources:ds(ai({id:Je().nullable(),title:Je().nullable(),url:Je().nullable(),query_id:Je().nullable()})),error:Je().nullable(),metric:ai({name:Je(),unit:Je(),direction:Ar(["minimize","maximize"])}),provenance:ai({llm:Je(),gpu:Je(),exa:Je(),memory:Je(),execution:Je().optional()})});async function hl(t,e){{const n=am(t);if(!n)throw new Error("Not available in the static replay");const i=await fetch(n);if(!i.ok)throw new Error(`Request failed (${i.status})`);if(n.endsWith(".json.gz")){if(!i.body)throw new Error("Compressed recording body is unavailable");return new Response(i.body.pipeThrough(new DecompressionStream("gzip"))).json()}return i.json()}}const xc=(t,e)=>t.filter(e).at(-1),Ts=(t,e)=>t.filter(n=>n.tick<=e),ve=t=>typeof t=="string"&&t.trim()?t.trim():null,Mt=t=>typeof t=="number"&&Number.isFinite(t)?t:null,Li=t=>typeof t=="boolean"?t:null;function Ua(t,e,n=`${e.replace(/ies$/,"y").replace(/ses$/,"sis").replace(/([^i])s$/,"$1")}_id`){const i=t?.entities?.[e];return(Array.isArray(i)?i:i&&typeof i=="object"?Object.values(i):[]).filter(s=>!!s&&typeof s=="object").map(s=>({...s,id:s.id??s[n]})).filter(s=>s.id!=null)}const Tu=t=>new Map(t.map(e=>[String(e.id),e]));function Lh(t){const e=ve(t);if(!e?.startsWith("{"))return{text:e};try{const n=JSON.parse(e);return n&&typeof n=="object"?{...n,text:ve(n.idea)||ve(n.text)||e}:{text:e}}catch{return{text:e}}}function ka(t,e,n){if(!t)return null;const i=Ts(t.events,n).filter(b=>b.refs?.experiment_id===e);if(!i.length)return null;const r=Tu(Ua(t,"experiments")).get(e)||{},s=i.find(b=>b.type==="experiment.started"),a=xc(i,b=>b.type==="experiment.finished"),o=xc(i,b=>b.type==="gate.checked"),l=xc(i,b=>b.type==="verdict.issued"),c=i.find(b=>b.refs?.study_id),u=ve(r.hypothesis_id)||ve(s?.refs?.hypothesis_id),f=u?Ts(t.events,n).find(b=>b.type==="hypothesis.proposed"&&b.refs?.hypothesis_id===u):void 0,d=f?Tu(Ua(t,"hypotheses")).get(u)||{}:null,h=r.gate&&typeof r.gate=="object"?r.gate:{},g=Array.isArray(h.reasons)&&h.reasons.length>0||typeof h.pass=="boolean"||Mt(h.attempts)>0,_=o?.payload||{},p=[...Array.isArray(_.reasons)?_.reasons:[],...a&&Array.isArray(h.reasons)?h.reasons:[]].map(String),m=t.events.some(b=>b.type==="verdict.issued"&&b.refs?.experiment_id===e),v=l||a&&!m?r.verdict:null,S=l?.payload||{};return{id:e,agentId:ve(r.agent_id)||s?.agentId||i[0].agentId||null,round:Mt(r.round)??Mt(i[0].round),kind:ve(r.kind),commit:ve(r.commit)||ve(_.candidate_commit),role:ve(r.role)||ve(s?.payload?.role),description:ve(r.description)||ve(s?.payload?.description)||ve(s?.message),idea:d?{text:Lh(d.text||f?.payload?.text).text,rationale:ve(d.rationale)||ve(f?.payload?.rationale)||ve(Lh(d.text||f?.payload?.text).rationale),predictedDelta:Mt(d.predicted_delta)??Mt(r.predicted_delta),sources:(Array.isArray(d.source_ids)?d.source_ids:[]).map(String)}:null,descriptor:r.descriptor||_.descriptor||null,gate:o||a&&g?{pass:Li(_.pass)??Li(h.pass),reasons:[...new Set(p)],attempts:Mt(h.attempts),text:ve(_.text)||ve(o?.message),priorArt:(Array.isArray(_.prior_art)?_.prior_art:[]).map(String),tick:o?.tick??a.tick}:null,result:a?{status:ve(a.payload?.status)||ve(r.status),metric:Mt(a.payload?.metric_value)??Mt(r.metric_value),reward:Mt(a.payload?.reward),text:ve(a.payload?.text)||ve(a.message),tick:a.tick}:null,verdict:l||v?{by:ve(v?.by_agent_id)||l?.agentId||null,verdict:ve(S.verdict)||ve(v?.verdict),why:ve(S.why)||ve(v?.why),tick:l?.tick??a.tick}:null,artifacts:Object.fromEntries(Object.entries(r.artifacts&&typeof r.artifacts=="object"?r.artifacts:{}).filter(([b,T])=>typeof T=="string"&&(a||b==="diff"))),logTail:a?ve(r.log_tail):null,studyId:ve(r.study_id)||ve(c?.refs?.study_id),timeline:i.map(b=>({tick:b.tick,type:b.type,text:ve(b.payload?.text)||ve(b.message)||b.type}))}}function rR(t,e){return[...new Set(Ts(t?.events||[],e).filter(n=>n.type==="experiment.started"&&n.refs?.experiment_id).map(n=>String(n.refs.experiment_id)))]}function gd(t,e){if(!t)return[];const n=Ts(t.events,e),i=new Map;for(const a of n){const o=a.refs?.source_id;o&&!i.has(o)&&i.set(String(o),a)}const r=new Set(rR(t,e)),s=Ua(t,"experiments").filter(a=>r.has(String(a.id)));return Ua(t,"sources").flatMap(a=>{const o=String(a.id),l=i.get(o),c=Mt(a.tick);if(!l&&(c==null||c>e))return[];const u=Array.isArray(a.highlights)?a.highlights.map(ve).filter(Boolean):[],f=[...new Set([...(Array.isArray(a.cited_by)?a.cited_by.map(String):[]).filter(d=>r.has(d)),...s.filter(d=>Array.isArray(d.source_ids)&&d.source_ids.includes(o)).map(d=>String(d.id))])];return[{id:o,title:ve(a.title)||ve(l?.payload?.summary)||ve(a.url)||o,url:ve(a.url)||ve(l?.payload?.url),highlight:u[0]||ve(a.highlight)||ve(a.extract)||ve(l?.payload?.text),agentId:ve(a.agent_id)||l?.agentId||null,tick:l?.tick??c,citedBy:f}]})}const sR=t=>Array.isArray(t)?t.map(e=>({rho:Mt(e?.rho),p:Mt(e?.p),n:Mt(e?.n),problem:e?.problem})):[],Nh=t=>({rho:Mt(t.rho),p:Mt(t.p),n:Mt(t.n),halves:sR(t.halves),significant:Li(t.significant),replicated:Li(t.replicated),confirmed:Li(t.confirmed)});function Au(t){if(!t)return[];if(typeof t=="string")return[t];if(Array.isArray(t))return t.flatMap(Au);if(typeof t=="object"){const e=t,n=ve(e.text)||ve(e.why)||ve(e.reason)||ve(e.verdict);return n?[[ve(e.by)||ve(e.judge)||ve(e.name),n].filter(Boolean).join(": ")]:Object.entries(e).flatMap(([i,r])=>Au(r).map(s=>`${i}: ${s}`))}return[String(t)]}function Dh(t){if(!t||typeof t!="object")return null;const e=t,n=!!e.judges&&typeof e.judges=="object"&&!Array.isArray(e.judges)&&Object.keys(e.judges).length>0,i=Array.isArray(e.prior_work)?e.prior_work:[],r=i.length>0;if(e.available!==!1&&!n&&!r&&e.prior_work_available!==!0)return null;const s=e.judges&&typeof e.judges=="object"?e.judges:{};return{available:Li(e.available)??!0,score:Mt(e.score),rejected:Li(e.rejected)??!1,judges:Object.fromEntries(Object.entries(s).map(([a,o])=>{const l=o&&typeof o=="object"?o:{};return[a,{laugh:Mt(l.laugh),think:Mt(l.think),reason:ve(l.reason),model:ve(l.model)}]})),priorWork:i.filter(a=>a&&typeof a=="object").map(a=>({title:ve(a.title)||"",url:ve(a.url)||"",snippet:ve(a.snippet)||""})),priorWorkAvailable:Li(e.prior_work_available)??!1}}function Bs(t,e){if(!t)return[];const n=Ts(t.events,e).filter(s=>/^study\.|^award\.issued$/.test(s.type)),i=Tu(Ua(t,"studies")),r=new Map;for(const s of n){const a=s.refs?.study_id;if(!a)continue;const o=String(a),l=i.get(o)||{},c=s.payload||{};if(s.type==="study.registered"){const f=l.dataset&&typeof l.dataset=="object"?l.dataset:{};r.set(o,{id:o,agentId:ve(l.agent_id)||s.agentId||null,experimentId:ve(l.experiment_id)||ve(s.refs?.experiment_id),round:Mt(l.round)??Mt(s.round),field:ve(c.field)||ve(l.field),direction:ve(l.direction),question:ve(c.question)||ve(l.question),hypothesis:ve(l.hypothesis),mechanism:ve(l.mechanism),dataset:{url:ve(f.url),x:ve(c.x)||ve(f.x),y:ve(c.y)||ve(f.y),xLevel:ve(f.x_level),yLevel:ve(f.y_level),id:ve(l.dataset_id)},predictedRho:Mt(c.predicted_rho)??Mt(l.predicted_rho),citations:(Array.isArray(l.citations)?l.citations:[]).map(String),novelty:Mt(l.novelty),priorArtPass:Li(l.prior_art_pass),result:null,replications:[],committee:null,award:null,registeredTick:s.tick});continue}const u=r.get(o);u&&(s.type==="study.result"?(u.result={...Nh({...l,...c,halves:c.halves??l.halves,significant:c.significant??l.significant}),headline:ve(c.headline)||ve(l.headline),rejected:ve(c.rejected),text:ve(c.text)||ve(s.message)},u.committee=Dh(c.committee??l.committee)):s.type==="study.replicated"?u.replications.push(Nh(c)):s.type==="award.issued"&&(u.award={award:ve(c.award),score:Mt(c.score),rejected:ve(c.rejected),headline:ve(c.headline),verdicts:Au(c.verdicts??l.committee?.verdicts),text:ve(c.text)||ve(s.message)},u.committee=Dh(c)))}return[...r.values()].reverse().sort((s,a)=>+!!s.result?.rejected-+!!a.result?.rejected)}function tg(t,e,n,i=40){return Ts(t,e).filter(r=>r.type==="message.sent").map(r=>{const s=r.payload||{},a=[...new Set([...Array.isArray(s.to_agent_ids)?s.to_agent_ids:[],s.to_agent_id,r.refs?.to_agent_id].filter(Boolean).map(String))];return{tick:r.tick,from:r.agentId||null,to:a,kind:ve(s.kind),text:ve(s.text)||ve(r.message)||""}}).filter(r=>r.text&&(!n||r.from===n||r.to.includes(n))).slice(-i)}const aR=(t,e=3)=>t==null?"–":(t>0?"+":"")+t.toFixed(e),pl=t=>t==null?"–":t<1e-300?"<1e-300":String(Number(t.toPrecision(2))),Uh={BOREDOM_SNAP:"Boredom snap",PARADIGM_BREAKOUT:"Paradigm breakout",YOKED_SNAP:"Boredom snap"},yc=t=>typeof t=="number"&&Number.isFinite(t)?t:null;function Lr(t){return Math.abs(t)>=1e3?t.toFixed(0):String(Number(t.toPrecision(4)))}const Gi=t=>typeof t=="string"?t.trim():"";function ng(t,e,n,i){const r=[],s=new Map;for(const a of t){if(a.tick>n)break;const o=a.payload||{},l=a.tick>e;if(a.type==="round.started"||a.type==="boredom.measured"){const c=Gi(o.regime);if(!c)continue;const u=a.type==="round.started"?"swarm":a.agentId||"swarm",f=s.get(u);s.set(u,c),l&&f!==c&&Uh[c]&&r.push({tick:a.tick,kind:"regime",title:Uh[c],detail:u==="swarm"?"The whole swarm switches approach":"A researcher switches approach",agentId:u==="swarm"?void 0:u});continue}if(l)if(a.type==="discovery.made"){const c=yc(o.metric_value),u=yc(o.previous_best),f=Gi(o.title),d=c==null?"":`${i?.name?i.name.replaceAll("_"," ")+" ":""}${Lr(c)}${u==null?"":` (was ${Lr(u)})`}`,h=yc(o.reward);r.push({tick:a.tick,kind:"best",title:c==null?"New discovery!":"New best!",detail:[d||(h==null?"":`reward ${Lr(h)}`),f].filter(Boolean).join(" · "),agentId:a.agentId})}else a.type==="award.issued"&&r.push({tick:a.tick,kind:"award",title:Gi(o.award)||Gi(o.prize)||"Award issued",detail:[Gi(o.title)||Gi(o.headline),Gi(o.citation)||Gi(o.text)].filter(Boolean).join(" · ").slice(0,240),agentId:a.agentId})}return r}function oR(t){return/kimi/i.test(t)?"Kimi":t.split("/").filter(Boolean).at(-1)||""}const lR=/\b(?:402|credit|billing|payment|quota)\b/i;function ig(t,e){const n=i=>typeof i=="string"&&lR.test(i.replace(/https?:\/\/\S+/gi," "));return Array.isArray(t.publish_errors)&&t.publish_errors.some(i=>n(i.kind)||n(i.message))?!0:(e?.events||[]).some(i=>(i.type==="run.finished"||i.type==="run.stopped")&&(n(i.message)||["text","error","reason","detail","message"].some(r=>n(i.payload?.[r]))))}function cR(t){const e=t.provenance?.command,i=(Array.isArray(e)?e.join(" "):typeof e=="string"?e:"").match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1],r=Number(i);return Number.isFinite(r)&&r>0?r:void 0}function uR(t,e){const n=(e?.events||[]).flatMap(o=>[o.round,o.payload?.round]).filter(o=>typeof o=="number"&&Number.isFinite(o)),i=Math.max(t.time?.rounds||0,...n),r=t.requestedRounds||t.requested_rounds||t.rounds||t.run?.rounds||cR(t),s=i?` (${i}${r?`/${r}`:""} rounds)`:"",a=ig(t,e)?" · Tinker credit ran out":"";return`Stopped real run${s}${a}`}function _d(t,e){const n=t?.provenance,i=[];if(n?.exa==="off"?i.push("Exa off"):(n?.exa==="live"||n?.exa==="on")&&i.push("Exa on"),n?.memory_backend==="pastdev"?i.push("past.dev memory"):n?.memory_backend==="local"&&i.push("local memory"),n?.llm==="fake"||n?.llm_mode==="fake")return{label:"Fake-LLM sample (plumbing demo, not research)",tone:"fake",chips:i};const r=typeof n?.llm=="string"&&n.llm!=="fake"?oR(n.llm):"";return r?t?.status==="stopped"?{label:uR(t,e),tone:"stopped",chips:i}:t?.stale===!0||t?.liveness==="stale"||t?.status==="stale"||t?.status==="stalled"?{label:"Stalled real run",tone:"stalled",chips:i}:!(t?.status==="completed"||t?.status==="finished"||t?.status==="ended"||t?.status==="interrupted")&&(t?.live===!0||t?.liveness==="live"||t?.status==="running"||t?.status==="live")?{label:`Live ${r} run`,tone:"live",chips:i}:{label:"Finished real run",tone:"finished",chips:i}:{label:"Unverified recording",tone:"unknown",chips:i}}const dR="f8fa53cc-6afd-5e98-9596-0c7b8711e718";function fR(t,e){const n=t.find(r=>r.id===e);if(n)return n.id;const i=e?t.filter(r=>r.id.startsWith(e)):[];return(i.length===1?i[0].id:void 0)||t.find(r=>r.id===dR)?.id||t[0]?.id}function hR(t){const e=i=>i.sample===!1?i.live?0:1:2,n=i=>Date.parse(i.time?.ts_start||"")||0;return[...t].sort((i,r)=>e(i)-e(r)||n(r)-n(i)||i.id.localeCompare(r.id))}function pR(t){return t.sample===!1&&t.status==="stopped"?{eyebrow:"RESEARCH / SWARM RUN",kicker:"● SWARM RUN · STOPPED",callout:"Swarm run · stopped. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:t.sample===!1&&t.stale?{eyebrow:"RESEARCH / STALLED SWARM",kicker:"◌ STALLED RUN",callout:`This swarm run stopped publishing before it finished${t.lastUpdateTs?` (last update ${xR(t.lastUpdateTs)})`:""}. It may have been killed; everything it published is shown below.`}:t.sample===!1?{eyebrow:t.live?"RESEARCH / LIVE SWARM":"RESEARCH / SWARM RUN",kicker:t.live?"● LIVE SWARM":"● SWARM RUN · FINISHED",callout:t.live?"Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.":"Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance."}:{eyebrow:"RESEARCH / RECORDED REPLAY",kicker:"● RECORDED REPLAY",callout:"This is a temporary replay of supplied recordings. No experiments or model calls run here."}}function mR(t,e){return!!t.live||e<t.totalTicks}function Ga(t,e){let n=0,i=t.length-1,r=-1;for(;n<=i;){const s=n+i>>>1;t[s].tick<=e?(r=s,n=s+1):i=s-1}return r<0?void 0:t[r]}function gR(t,e,n,i,r=1e3){return Math.max(0,Math.min(i,t+e*n*1e3/Math.max(1,r)))}function _R(t,e){return t.filter(n=>n.tick<=e)}function vR(t,e){let n=t;for(const[i,r]of[...e].sort((s,a)=>a[0].length-s[0].length)){const s=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");n=n.replace(new RegExp(`(?<![a-zA-Z0-9_])${s}(?![a-zA-Z0-9_])`,"gi"),r)}return n}const xR=t=>{const e=new Date(t);return Number.isNaN(e.getTime())?t:e.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})};function yR(t){return t.stale?"◌ STALLED · ":t.live?"● LIVE · ":"SWARM · "}const kh=t=>{if(!t||typeof t!="object")return;const e=t;return e.id??Object.entries(e).find(([n])=>n.endsWith("_id")&&n!=="agent_id")?.[1]};function bR(t,e){if(e.kind==="full"){const{kind:a,...o}=e;return o}if(e.kind==="unchanged")return{...t,manifest:e.manifest};const n={...t.entities};for(const[a,o]of Object.entries(e.entities||{})){const l=[...n[a]||[]],c=new Map(l.map((u,f)=>[kh(u),f]));for(const u of o){const f=c.get(kh(u));f===void 0?l.push(u):l[f]=u}n[a]=l}const i=new Map((e.patches||[]).map(a=>[a.tick,a.snapshot])),r=e.progressScale,s=t.frames.filter(a=>a.tick<e.since).map(a=>{const o=i.get(a.tick);return o||r?{...a,snapshot:{...a.snapshot,...r?{progress:Math.max(0,a.tick)/r}:{},...o}}:a});return{...t,..."igjudge"in e?{igjudge:e.igjudge}:{},manifest:e.manifest,frames:[...s,...e.frames],events:[...t.events.filter(a=>a.tick<=e.since),...e.events],entities:n}}async function SR(t,e,n,i){const r=`/recordings/${encodeURIComponent(e)}`,s=i?.manifest.id===e?i.manifest.contentVersion:void 0;if(i&&s&&s!==n)try{return bR(i,await t(`${r}/delta?base=${encodeURIComponent(s)}`))}catch{}return t(`${r}?v=${encodeURIComponent(n)}`)}const MR={hadamard19:"Hadamard 19×19 max determinant",bixbench_mini:"BixBench mini · bioinformatics Q&A",playworld_mini:"PlayWorld mini · world model",ignobel:"Ig Nobel Prize hunt"};function Oh(t){const e=Math.max(0,Math.round(t/1e3));return e<90?`${e}s`:e<5400?`${Math.round(e/60)}m`:`${Math.round(e/3600)}h`}function rg(t){if(t.task)return t.task;const e=t.provenance?.command,n=Array.isArray(e)?e:typeof e=="string"?e.split(/\s+/):[],i=n.findIndex(s=>s==="--task"||s.startsWith("--task="));if(i>=0){const s=n[i].includes("=")?n[i].split("=")[1]:n[i+1];if(s)return s}const r=(t.title||"").split(" · ");return r[0]==="autoresearch"&&r[1]?r[1]:t.swarm==="ignobel"||/ig ?nobel/i.test(t.title||"")?"ignobel":""}function Pl(t){return t.task_title||MR[rg(t)]||t.title}function sg(t,e){return!0}function ag(t){return t?.direction==="minimize"?"Loss":t?.name?t.name.replaceAll("_"," ").replace(/^./,e=>e.toUpperCase()):"Metric"}function ER(t,e,n,i){return typeof t=="number"&&Number.isFinite(t)?`${n} ${i(t)}`:t===null&&typeof e=="number"&&Number.isFinite(e)?`Reward ${i(e)}`:""}function og(t,e=Date.now(),n=9e4){if(t.sample!==!1)return{status:"sample",label:"RECORDED SAMPLE",detail:"Bundled recording"};if(t.status==="stopped")return{status:"stopped",label:"STOPPED",detail:"The run ended before finishing"};const i=Date.parse(t.heartbeat_ts||t.updated_at||""),r=Number.isFinite(i)?e-i:NaN;if(t.live||t.stale||t.status==="stale")return t.stale||t.status==="stale"||r>n?{status:"stale",label:"◌ STALLED RUN",detail:Number.isFinite(r)?`Last update ${Oh(r)} ago`:"The swarm stopped publishing"}:{status:"live",label:"● LIVE",detail:Number.isFinite(r)?`Updated ${Oh(r)} ago`:"Following the running swarm"};const s=String(t.status||"finished");return["finished","completed"].includes(s)?{status:"finished",label:"FINISHED",detail:"Complete swarm run"}:{status:"stopped",label:s.toUpperCase(),detail:"The run ended before finishing"}}function wR(t){const e=Date.parse(t.time?.ts_start||"");return Number.isFinite(e)?new Date(e).toLocaleString("en-US",{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!1}):""}function TR(t){return[t.time?.rounds,t.run?.rounds,t.rounds].find(e=>typeof e=="number"&&Number.isFinite(e)&&e>=0)}function lg(t){const e=TR(t);return e===void 0?"":`${e} round${e===1?"":"s"}`}function AR(t){const e=og(t),n=e.status==="sample"||/\btest run\b/i.test(t.title||"")?"Test recording":e.status==="finished"?"Finished":e.status==="live"?"Live":e.status==="stale"?"Stalled":"Stopped";return[Pl(t)||t.description,[lg(t),n].filter(Boolean).join(" · ")].filter(Boolean).join(`
`)}function RR(t,e){const n=og(t);if(e!==void 0){const a=new Date(t.time?.ts_start||""),o=Number.isFinite(a.getTime())?a.toLocaleDateString("en-US",{month:"short",day:"numeric",timeZone:"UTC"}):"",l=/\btest run\b/i.test(t.title||"")?"Test":{sample:"Test",stopped:"Stopped",live:"Live",stale:"Stalled",finished:""}[n.status];return[`Run ${e}`,lg(t),o,l].filter(Boolean).join(" · ")}const i=t.sample===!1?yR({...t,stale:n.status==="stale",live:n.status==="live"}):"",r=Pl(t),s=r===t.title?"":(t.title||"").split(" · ").slice(2).join(" · ");return[i+r,s,t.sample===!1&&n.status==="stopped"?n.label.toLowerCase():"",t.sample===!1?wR(t):""].filter(Boolean).join(" · ")}function CR(t,e,n=!1){const i=[["Live now",t.filter(s=>s.sample===!1&&s.live)],["Swarm runs",t.filter(s=>s.sample===!1&&!s.live)],["Recorded samples",t.filter(s=>s.sample!==!1)]],r=s=>`<option value="${e(s.id)}">${e(RR(s,n?t.indexOf(s)+1:void 0))}</option>`;return i.filter(([,s])=>s.length).map(([s,a])=>`<optgroup label="${s}">${a.map(r).join("")}</optgroup>`).join("")}const Ea=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:null,cg=t=>Array.isArray(t)?t.filter(e=>!!Ea(e)):Ea(t)?Object.values(t).filter(e=>!!Ea(e)):[],PR="Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.";function As(t,e){const n=t?.metric?.description||"";return!!t&&(rg(t)==="ignobel"||t.metric?.name==="replicated_findings"||/replicated and significant/i.test(n)||cg(e?.entities?.studies).length>0)}function Oa(t,e){return As(t,e)?!cg(e?.entities?.studies).some(i=>i.committee!=null||Ea(i.result)?.committee!=null||Ea(i.graded)?.committee!=null)&&!(e?.events||[]).some(i=>i.type==="award.issued"):!1}function Il(t,e){if(As(t,e)){if(Oa(t,e))return PR;const n=t?.metric?.description;if(n)return n.replace(/\breplicated\s+and\s+significant\b/gi,"split-half consistent and significant").replace(/\breplicated\b/gi,"passed split-half consistency").replace(/\breplication\b/gi,"split-half consistency")}return t?.proxy_note}const Go={minRho:.1,alpha:.005,splitAlpha:.05},wr=t=>typeof t=="number"&&Number.isFinite(t),bc=t=>wr(t)?t:void 0,Co=t=>String(t);function vd(t){const e=t&&typeof t=="object"?t:{};return{minRho:bc(e.minRho??e.min_rho??e.min_effect_rho)??Go.minRho,alpha:bc(e.alpha??e.p_alpha??e.significance_alpha)??Go.alpha,splitAlpha:bc(e.splitAlpha??e.split_alpha??e.replication_alpha)??Go.splitAlpha}}function xd(t,e={}){const n={...Go,...e},i=[],r=t?.rho,s=t?.p,a=t?.direction==="positive"?1:t?.direction==="negative"?-1:wr(r)?Math.sign(r):0,o=t?.halves;return(!wr(r)||r*a<n.minRho)&&i.push(`|ρ| ≥ ${Co(n.minRho)}`),(!wr(s)||s>=n.alpha)&&i.push(`p < ${Co(n.alpha)}`),wr(r)&&o&&o.length>=2&&o.every(c=>{const u=c?.rho,f=c?.p;return wr(u)&&wr(f)&&f<n.splitAlpha&&u*a>=n.minRho&&!c.problem})||i.push(`split-half consistency (both halves p < ${Co(n.splitAlpha)}, same direction, |ρ| ≥ ${Co(n.minRho)})`),{pass:i.length===0,failures:i}}const Wi=t=>t&&typeof t=="object"&&!Array.isArray(t)?t:{},Xt=t=>typeof t=="string"?t:"",ls=t=>typeof t=="number"&&Number.isFinite(t)?t:null,oa=t=>Array.isArray(t)?t:[],IR={humor:"Humor",plausibility:"Plausible",originality:"Original",insight:"Insight",appeal:"Appeal",alignment:"Ig Nobel"};function yd(t){const e=Wi(t);if(e.schema!=="igjudge/v1")return null;const n=oa(e.criteria).map(Wi).map(a=>({key:Xt(a.key),label:Xt(a.label)||Xt(a.key),weight:ls(a.weight)??1})).filter(a=>a.key),i=new Map(oa(e.leaderboard).map(Wi).map(a=>[Xt(a.study_id),ls(a.rank)])),r=oa(e.ideas).map(Wi).map(a=>{const o={};for(const[c,u]of Object.entries(Wi(a.scores))){const f=Wi(u);o[c]={initial:ls(f.initial),revised:ls(f.revised),final:ls(f.final),reason:Xt(f.reason)}}const l=Xt(a.study_id);return{studyId:l,agentId:Xt(a.agent_id),title:Xt(a.title)||l,hypothesis:Xt(a.hypothesis),gate:Xt(a.gate),committee:Xt(a.committee),scores:o,total:ls(a.total),classification:Xt(a.classification),verdict:Xt(a.verdict),safeguards:oa(a.safeguards).map(Xt).filter(Boolean),priorWork:oa(a.prior_work).map(Wi).map(c=>({title:Xt(c.title),url:Xt(c.url)})).filter(c=>c.url),error:Xt(a.error),rank:i.get(l)??null}});if(!r.length)return null;r.sort((a,o)=>(a.rank??1/0)-(o.rank??1/0)||a.studyId.localeCompare(o.studyId));const s=Xt(e.winner);return{model:Xt(e.model),criteria:n,ideas:r,winner:r.find(a=>a.studyId===s&&a.total!=null)??null}}const Fh=t=>/^https?:\/\//i.test(t)?t:"";function LR(t,e){const n=yd(t);if(!n)return"";const i=d=>d==null?"–":String(Math.round(d*10)/10),r=(d,h)=>d.scores[h]?.final??null,s=n.winner,a=Wi(t).prior_work_available===!1?" No prior-work search was used; originality remains unverified.":"",o=s?`<div class="igjudge-winner"><span class="igjudge-trophy" aria-hidden="true">#1</span><div><p class="igjudge-kicker">Winner · ${e(i(s.total))}/100</p><p class="igjudge-winner-title">${e(s.title)}</p>${s.verdict?`<p class="igjudge-verdict">${e(s.verdict)}</p>`:""}</div></div>`:"",l=n.criteria.map(d=>`<th scope="col" title="${e(d.label)} (×${e(d.weight)})">${e(IR[d.key]||d.label)}<small>×${e(d.weight)}</small></th>`).join(""),c=n.ideas.map(d=>`<tr class="${d===s?"igjudge-win":""}"><td>${d.rank??"–"}</td><th scope="row">${e(d.title)}</th>${n.criteria.map(h=>`<td>${e(i(r(d,h.key)))}</td>`).join("")}<td class="igjudge-total">${e(d.error?"not scored":i(d.total))}</td></tr>`).join(""),u=n.ideas.map(d=>`<details class="igjudge-idea${d===s?" igjudge-win":""}"><summary><b>${d.rank?`#${d.rank}`:"–"}</b> ${e(d.title)} <span class="igjudge-pill">${e(i(d.total))}</span></summary>${d.error?`<p class="igjudge-error">Not scored: ${e(d.error)}</p>`:""}<p class="igjudge-status">Gate: ${e(d.gate||"–")} · Committee: ${e(d.committee||"–")}</p>${d.verdict?`<p>${e(d.verdict)}</p>`:""}<ul class="igjudge-criteria">${n.criteria.map(h=>{const g=d.scores[h.key];return g?`<li><b>${e(h.label)}</b> ${e(i(g.final))}/10 <small>(rounds ${e(i(g.initial))} → ${e(i(g.revised))} → ${e(i(g.final))})</small>${g.reason?`: ${e(g.reason)}`:""}</li>`:""}).join("")}</ul>${d.safeguards.length?`<p class="igjudge-safeguards">Safeguards: ${d.safeguards.map(e).join("; ")}</p>`:""}${d.priorWork.length?`<p class="igjudge-prior">Prior work (Exa): ${d.priorWork.slice(0,3).map(h=>Fh(h.url)?`<a href="${e(Fh(h.url))}" target="_blank" rel="noopener">${e(h.title||h.url)}</a>`:e(h.title)).join(" · ")}</p>`:""}</details>`).join(""),f=n.ideas.filter(d=>d.total!=null).length;return`<section class="igjudge" aria-labelledby="igjudge-title"><h2 id="igjudge-title">IgJudge final verdict</h2><p class="igjudge-note">Post-run final pass: one LLM judge${n.model?` (${e(n.model)})`:""} scored all ${f} ideas on six criteria (1–10, three internal rounds), weighted to a 10–100 total. The in-run two-judge committee is unchanged; gate/committee status is shown per idea.${e(a)}</p>${o}<div class="igjudge-scroll" tabindex="0" role="region" aria-label="IgJudge leaderboard"><table class="igjudge-table"><thead><tr><th scope="col">#</th><th scope="col">Idea</th>${l}<th scope="col">Total</th></tr></thead><tbody>${c}</tbody></table></div><h3>Per-idea scores and reasons</h3>${u}</section>`}const Ru=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Mr=t=>typeof t=="string"?t:"";function NR(t){const e=Ru(t?.entities?.sources),n=new Map(e.map(o=>[Mr(o.url),o]).filter(([o])=>o)),i=Ru(t?.entities?.studies).flatMap(o=>(Array.isArray(o.citations)?o.citations:[]).map(l=>{const c=Mr(l),u=n.get(c);return{study:Mr(o.question)||Mr(o.headline)||Mr(o.id),url:c,sourceId:u?String(u.id??u.source_id??""):"",title:u?Mr(u.title):""}})).sort((o,l)=>+!!l.sourceId-+!!o.sourceId),r=t?.events||[],s=r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="recall").length,a=r.some(o=>/past/i.test(Mr(o.payload?.backend)));return{citations:i,sources:e.length,exaSearches:r.filter(o=>o.type==="question.asked"&&o.payload?.kind==="search").length,memoryRecalls:s,pastdev:a}}function zh(t){const e=t?.events||[];return{exaSearches:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="search").length,sourceCards:Ru(t?.entities?.sources).length,pastdevRecalls:e.filter(n=>n.type==="question.asked"&&n.payload?.kind==="recall"&&n.payload?.backend==="pastdev").length,memoryWrites:e.filter(n=>n.type==="memory.written").length}}function Cu(t,e=Number.MAX_SAFE_INTEGER){const n=Bs(t,e),i=ng(t?.events||[],-1,e).filter(l=>l.kind==="award"),r=new Set(n.filter(l=>l.result&&l.result.rejected==null&&l.result.p!=null&&Number.isFinite(l.result.p)).map(l=>l.id)).size,s=n.filter(l=>l.result?.confirmed===!0||l.result?.replicated===!0||l.replications.some(c=>c.confirmed===!0||c.replicated===!0)),a=s.filter(l=>xd(l.result?{...l.result,direction:l.direction||void 0}:null,vd(t?.manifest?.judging)).pass).length,o=Il(t?.manifest,t)||"";return{studies:n.length,registered:n.length,ran:r,confirmed:s.length,underCurrentRules:a,passed:s.length,awards:i.map(l=>[l.title,l.detail].filter(Boolean).join(" · ")),proxyNote:o,isIgnobel:As(t?.manifest,t),preCommittee:Oa(t?.manifest,t)}}function DR(t,e){if(!t)return e||"Dataset";try{const n=new URL(t).pathname.split("/").filter(Boolean),i=n.at(-1),r=i==="content"?n.at(-2):i;return decodeURIComponent(r||e||"Dataset").replace(/\.[^.]+$/,"").replaceAll("_"," ").replaceAll("-"," ")}catch{return e||t}}function ug(t){if(!t)return[];const e=vd(t.manifest?.judging);return Bs(t,Number.MAX_SAFE_INTEGER).flatMap(n=>{const i=n.result,r=i?.rho;if(!(i?.confirmed===!0||i?.replicated===!0||n.replications.some(o=>o.confirmed===!0||o.replicated===!0))||n.priorArtPass===!1||r==null||Math.abs(r)<.1||!xd(i?{...i,direction:n.direction||void 0}:null,e).pass)return[];const a=t.manifest.agents?.find(o=>o.agent_id===n.agentId)?.display_name||t.frames.flatMap(o=>o.snapshot.agents||[]).find(o=>o.id===n.agentId)?.name||n.field?.replaceAll("_"," ")||"Research lab";return[{id:n.id,question:n.question||n.hypothesis||n.id,dataset:DR(n.dataset.url,n.dataset.id),rho:r,lab:a}]}).sort((n,i)=>Math.abs(i.rho)-Math.abs(n.rho))}function dg(t,e=Number.MAX_SAFE_INTEGER){return t?Bs(t,e).flatMap(n=>{const i=n.award?.score??n.committee?.score;if(i==null||!Number.isFinite(i))return[];const r=[...new Set(Object.values(n.committee?.judges||{}).map(s=>s.model).filter(s=>!!s))];return[{id:n.id,headline:n.award?.headline||n.question||n.hypothesis||n.id,score:i,rejected:n.committee?.rejected===!0,award:n.award?.award||null,judgeModels:r}]}).sort((n,i)=>i.score-n.score||n.id.localeCompare(i.id)):[]}function Vo(t,e,n){return/^https?:\/\//i.test(t)?`<a href="${n(t)}" target="_blank" rel="noopener noreferrer">${n(e)}</a>`:n(e)}function UR(t,e,n,i=null,r=null){const s=i?.provenance,a=_d(i,r||void 0),o=t.tools.map(u=>{let f=u.name,d=u.detail,h="";if(u.kind==="llm"){const g=s?.llm==="fake"||s?.llm_mode==="fake",_=typeof s?.llm=="string"?s.llm:"",p=_&&_!=="fake"&&_.split("/").filter(Boolean).at(-1)||"";g?(f=u.fakeName||u.name,d=u.fakeDetail||u.detail,h=u.fakeSuffix||""):p?(f=s?.llm_mode==="tinker"&&u.tinkerName||u.name,d=(s?.llm_mode==="tinker"&&u.tinkerDetail||u.detail).replace(/\{model\}/g,/kimi/i.test(_)?"Kimi":p)):(d=u.unverifiedDetail||u.detail,h=u.unknownSuffix||"")}else u.kind==="exa"?h=s?.exa==="off"?u.offSuffix||"":s?.exa==="live"||s?.exa==="on"?"":u.unknownSuffix||"":u.kind==="memory"&&(h=s?.memory_backend==="pastdev"?"":s?.memory_backend==="local"?u.localSuffix||"":s?.memory_backend==="off"?u.offSuffix||"":u.unknownSuffix||"");return`<li><b>${n(f)}</b> ${n(d)}${h?` <span class="about-provenance-note">${n(h)}</span>`:""}</li>`}).join(""),l=`<div class="provenance-badge about-provenance" data-tone="${a.tone}" role="status" aria-label="${n(a.label)}"><span class="provenance-badge-label">${n(a.label)}</span></div>`,c=e.citations.slice(0,12).map(u=>`<li><span>${n(u.study)}</span> ${u.sourceId?`<button class="chip" data-source="${n(u.sourceId)}">${n(t.labels.source)} ${n(u.title||u.url)}</button>`:`${/^https?:\/\//i.test(u.url)?`<a href="${n(u.url)}" target="_blank" rel="noopener noreferrer">${n(u.url)}</a>`:`<code>${n(u.url)}</code>`} <em>${n(t.labels.missingExa)}</em>`}</li>`).join("");return`<div class="about-heading"><h2>${n(t.sections.about.replace(/\s*▾$/,""))}</h2><button class="drawer-close" data-close-drawer aria-label="Close About">✕</button></div><div class="about-body" tabindex="0" role="region" aria-label="About this research lab"><h3>${n(t.event.title)}</h3>${l}<a class="about-video-link" href="https://arii.github.io/caffeinated/about.html" target="_blank" rel="noopener noreferrer">▶ Watch the 85-second demo</a><p class="about-credit">Built by <a href="https://arii.github.io" target="_blank" rel="noopener noreferrer">Ariel Anders</a>, Jialin Feng, Neeraj Shah and Masha Baidachna · <a href="https://github.com/arii/caffeinated" target="_blank" rel="noopener noreferrer">GitHub</a></p><details class="about-section"><summary>${n(t.sections.event)}</summary><p class="eyebrow">${n(t.event.dates)} · ${n(t.event.host)}</p><p>${n(t.event.summary)}</p></details><details class="about-section"><summary>${n(t.sections.tools)}</summary><ul class="about-tools">${o}</ul></details><details class="about-section"><summary>${n(t.sections.authors)}</summary>${t.authors.project?`<h3>${n(t.authors.project)}</h3>`:""}${t.authors.team?`<p class="eyebrow">${n(t.authors.team)}</p>`:""}<p class="${t.authors.placeholder?"placeholder":""}">${n(t.authors.names.join(", "))}</p></details><details class="about-section"><summary>${n(t.sections.boredom)}</summary><h3>${n(t.boredom.title)}</h3>${t.boredom.paragraphs.map(u=>`<p>${n(u)}</p>`).join("")}<p class="muted">${Vo(t.boredom.source,t.boredom.source,n)}</p></details><details class="about-section"><summary>${n(t.sections.trail)}</summary><p>${n(t.labels.recording)}: ${e.exaSearches} ${n(t.labels.searches)}, ${e.sources} ${n(t.labels.sources)}, ${e.memoryRecalls} ${n(t.labels.recalls)} ${n(e.pastdev?t.labels.pastdev:t.labels.localMemory)}.</p>${c?`<ul class="about-cites">${c}</ul>`:`<p class="muted">${n(t.labels.noCitations)}</p>`}</details></div>`}const fg={B:"#e3cba3",S:"#99c6b3",A:"#91a9d1"},Bh=t=>String(Number(t.toFixed(3)));function $h(t,e,n){return`<section class="tool-use"><div class="visual-heading"><h2>Tools used in this run</h2></div><div class="tool-use-grid">${[["EXA",e.exaSearches,"searches",""],["EXA",e.sourceCards,"source cards",t.results.charts.sourceCaption],["past.dev",e.pastdevRecalls,"recalls",""],["MEMORY",e.memoryWrites,"memories written",""]].map(([r,s,a,o])=>`<div class="tool-use-tile"><span class="tool-wordmark">${n(r)}</span><strong>${s}</strong><span>${n(a)}</span>${o?`<small>${n(o)}</small>`:""}</div>`).join("")}</div><p class="chart-caption">${n(t.results.charts.toolsCaption)}</p><button class="see-sources" type="button" data-open-evidence>See sources</button></section>`}function Hh(t,e,n){const i=ug(e);return`<section class="finalists"><h2>Finalists: awaiting committee judging</h2><div class="finalist-grid">${i.map(r=>`<article class="finalist-card"><h3 title="${n(r.question)}">${n(r.question)}</h3><div class="finalist-meta"><span>${n(r.dataset)}</span><span>Lab · ${n(r.lab)}</span></div><div class="finalist-rho"><svg viewBox="0 0 180 14" role="img" aria-label="Absolute correlation ${Math.abs(r.rho).toFixed(3)}"><rect x="0" y="4" width="170" height="6" rx="3" fill="#ffffff25"/><rect x="0" y="4" width="${Math.max(1,Math.abs(r.rho)*170).toFixed(1)}" height="6" rx="3" fill="#e3cba3"/></svg><span>ρ ${r.rho.toFixed(3)}</span></div></article>`).join("")}</div>${i.length?"":"<p>No studies passed both filters.</p>"}</section>`}function Sc(t,e){const n=dg(t),i=n.length>0&&n.every(r=>r.score<.5);return n.length?`<section class="finalists committee-results"><h2>${i?"Committee verdict: no award":"Committee scores"}</h2><ol class="committee-score-list">${n.map((r,s)=>`<li class="committee-score-row"><div class="committee-score-heading"><span>${s+1}</span><strong>${e(r.headline)}</strong><b>${r.score.toFixed(2)}</b></div><div class="committee-score-track" role="img" aria-label="Committee score ${r.score.toFixed(2)} out of 1"><i style="width:${Math.max(0,Math.min(1,r.score))*100}%"></i></div>${r.judgeModels.length?`<small>Judges · ${r.judgeModels.map(e).join(" · ")}</small>`:""}</li>`).join("")}</ol></section>`:""}function Gh(t,e){const n=[["Registered",t.registered],["Tests run",t.ran],["Passed gates",t.confirmed],["Post-hoc floor",t.underCurrentRules]],i=Math.max(1,...n.map(r=>r[1]));return`<svg class="chart-svg" viewBox="0 0 360 126" role="img" aria-label="Ig Nobel study counts">${n.map(([r,s],a)=>{const o=20+a*29,l=Math.max(2,Number(s)/i*164);return`<text x="4" y="${o+4}" class="chart-label">${e(r)}</text><rect x="150" y="${o-7}" width="164" height="13" rx="4" class="chart-track"/><rect x="150" y="${o-7}" width="${l.toFixed(1)}" height="13" rx="4" class="chart-bar"/><text x="320" y="${o+4}" class="chart-value">${s}</text>`}).join("")}</svg>`}function kR(t,e){const{baseline:n,best:i}=t.results.charts.bixbench,r=210,s=112;return`<svg class="chart-svg" viewBox="0 0 380 104" role="img" aria-label="BixBench held-out score with 95 percent confidence intervals">${[{label:"Baseline",score:n,y:30,color:"#99c6b3"},{label:"Swarm best",score:i,y:72,color:"#e3cba3"}].map(({label:o,score:l,y:c,color:u})=>{const f=l.correct/l.total,d=s+l.ci[0]*r,h=s+l.ci[1]*r;return`<text x="4" y="${c+4}" class="chart-label">${e(o)}</text><rect x="${s}" y="${c-7}" width="${r}" height="13" rx="4" class="chart-track"/><rect x="${s}" y="${c-7}" width="${(f*r).toFixed(1)}" height="13" rx="4" fill="${u}"/><line x1="${d}" y1="${c-13}" x2="${h}" y2="${c-13}" class="chart-whisker"/><line x1="${d}" y1="${c-17}" x2="${d}" y2="${c-9}" class="chart-whisker"/><line x1="${h}" y1="${c-17}" x2="${h}" y2="${c-9}" class="chart-whisker"/><text x="328" y="${c+4}" class="chart-value">${l.correct}/${l.total}</text>`}).join("")}</svg>`}function OR(t,e){const{groups:n}=t.results.charts.track3,i=132/.32;return`<svg class="chart-svg" viewBox="0 0 430 164" role="img" aria-label="Track 3 grouped bars: preregistered stopped early, and complete set picked after">${n.map((r,s)=>{const a=s?220:6,o=r.label.includes("(")?r.label.slice(0,r.label.indexOf("(")).trim():r.label,l=r.label.includes("(")?r.label.slice(r.label.indexOf("(")):"";return`<text x="${a}" y="16" class="chart-group">${e(o)}</text><text x="${a}" y="32" class="chart-group">${e(l)}</text>${r.values.map((c,u)=>{const f=58+u*31;return`<text x="${a}" y="${f+3}" class="chart-label">${e(c.arm)}</text><rect x="${a+17}" y="${f-8}" width="132" height="12" rx="4" class="chart-track"/><rect x="${a+17}" y="${f-8}" width="${(c.value*i).toFixed(1)}" height="12" rx="4" fill="${fg[c.arm]}"/><text x="${a+155}" y="${f+3}" class="chart-value">${c.value.toFixed(3)}</text>`}).join("")}`}).join("")}</svg>`}function FR(t,e){const{pastdev:n,local:i}=t.results.charts.memory,r=[{label:"Hit@1",a:n.hitAt1,b:i.hitAt1,y:30},{label:"Hit@8",a:n.hitAt8,b:i.hitAt8,y:66}],s=[{label:"past.dev",value:n.medianLatencyMs,color:"#99c6b3"},{label:"Local",value:i.medianLatencyMs,color:"#e3cba3"}],a=r.map(({label:l,a:c,b:u,y:f})=>`<text x="4" y="${f+4}" class="chart-label">${e(l)}</text><text x="60" y="${f-2}" class="chart-mini-label">past.dev</text><rect x="126" y="${f-12}" width="${(c*150).toFixed(1)}" height="10" rx="3" fill="#99c6b3"/><text x="282" y="${f-3}" class="chart-value">${Bh(c)}</text><text x="60" y="${f+12}" class="chart-mini-label">Local</text><rect x="126" y="${f+2}" width="${(u*150).toFixed(1)}" height="10" rx="3" fill="#e3cba3"/><text x="282" y="${f+11}" class="chart-value">${Bh(u)}</text>`).join(""),o=s.map((l,c)=>{const u=137+c*20;return`<text x="60" y="${u+3}" class="chart-mini-label">${e(l.label)}</text><rect x="126" y="${u-7}" width="${Math.max(2,l.value/600*150).toFixed(1)}" height="10" rx="3" fill="${l.color}"/><text x="282" y="${u+2}" class="chart-value">${l.value} ms</text>`}).join("");return`<svg class="chart-svg" viewBox="0 0 380 178" role="img" aria-label="Past.dev and local memory retrieval comparison">${a}<line x1="4" y1="100" x2="365" y2="100" class="chart-divider"/><text x="4" y="119" class="chart-label">Median latency</text>${o}</svg>`}function zR(t,e,n){const i=ug(e)[0],r=t.results.citations?.find(s=>s.runId===e.manifest.id&&s.studyId===i?.id);return!r||!i?"":`<section class="result-citation" aria-label="Research result in one sentence"><div class="eyebrow">${n(r.category)} · Research citation</div><p class="result-citation-line">${n(r.text)}</p><p class="chart-caption">${n(i.dataset)} · ρ ${i.rho.toFixed(3)}. ${n(r.note)}</p></section>`}function Vh(t,e,n,i=Cu(e),r=!1){if(r&&yd(e.igjudge)?.ideas.some(_=>_.total!=null&&!_.error)){const _=Sc(e,n);return`${$h(t,zh(e),n)}${_||'<section class="committee-results"><h2>In-run committee data</h2><p>No in-run committee scores were recorded. Final rankings use the post-run final judge scores.</p></section>'}`}if(e.manifest.continuous)return`${Sc(e,n)||Hh(t,e,n)}<section class="result-chart"><h2>This session's studies</h2>${Gh(i,n)}<p>${i.registered} registered · ${i.ran} tested · ${i.confirmed} confirmed</p></section><p class="metric-note">${n(e.manifest.metric?.description||i.proxyNote||t.results.noProxy)}</p>`;const s=t.results.charts,a=zh(e),o=Sc(e,n)||Hh(t,e,n),l=`<section class="result-chart"><h2>Ig Nobel test funnel</h2>${Gh(i,n)}<p class="chart-caption">${n(s.funnelCaption)}</p></section>`,c=`<section class="result-chart"><h2>BixBench held-out</h2>${kR(t,n)}<p class="chart-caption">${n(s.bixbench.caption)}</p></section>`,u=`<section class="result-chart"><h2>Track 3 · three-arm comparison</h2>${OR(t,n)}<div class="chart-legend">${s.track3.legend.map(_=>`<span><i style="background:${fg[_.arm]}"></i>${n(_.arm)} = ${n(_.label)}</span>`).join("")}</div><p class="chart-caption">${n(s.track3.caption)}</p></section>`,f=`<section class="result-chart"><h2>Memory retrieval</h2>${FR(t,n)}<p class="chart-caption">${n(s.memory.caption)}</p></section>`,d=s.funnelCaption?t.results.factualLine.replace("{N}",String(i.registered)).replace("{R}",String(i.ran)).replace("{C}",String(i.confirmed)).replace("{K}",String(i.underCurrentRules)).replace("{committeeSuffix}",i.preCommittee?t.results.noCommitteeSuffix:""):"",h=e.manifest.metric?.description||i.proxyNote||t.results.noProxy,g=[Vo(t.results.memoryComparisonUrl,"Memory comparison details",n),Vo(t.results.track3Url,"Track 3 results and caveats",n),Vo(t.results.bixbenchUrl,"BixBench held-out artifact",n)];return`${zR(t,e,n)}${$h(t,a,n)}${o}${l}${c}${u}${f}<details class="results-details"><summary>Details</summary><p>${n(d)}</p><p>${n(t.results.track3Line)}</p><p class="metric-note"><strong>${n(t.results.proxyNote)}:</strong> ${n(h)}</p><ul class="detail-links">${g.map(_=>`<li>${_}</li>`).join("")}</ul></details>`}const BR="How it's judged",$R="Committee data exists, but no prizes were issued in this recording.",HR=["Preregister the study before looking at the data.","Use a real, public dataset.","Pass the gates: |ρ| ≥ 0.1 and p < 0.005.","Pass split-half consistency: both halves p < 0.05 and in the same direction.","Check prior work with Exa.","Two independent non-Kimi judges (gpt-oss-120b and Qwen3.5-397B) score each study; the final score is the lower judge.","Reject any study that targets a group of people."],Mc={title:BR,committeePending:$R,steps:HR},GR="/caffeinated/assets/follow-qr-Bv-E2P9c.png";function VR(t,e){const n=t!=null&&Number.isFinite(t);return{role:n?"meter":"img","aria-label":n?e:`${e}: not measured`,"aria-valuemin":n?"0":null,"aria-valuemax":n?"100":null,"aria-valuenow":n?String(Math.round(t)):null}}const Wh={conductor:"STAFF · CONDUCTOR",critic:"STAFF · CRITIC",baseline:"REFERENCE · BASELINE",world:"ENVIRONMENT"};function WR(t){const e=t.trim(),n=/^([A-Za-z])[A-Za-z]*[\s-]+(\d+)$/.exec(e);if(n)return(n[1]+n[2]).toUpperCase();if(/^[BCP]\d+$/.test(e))return e[0];const i=e.split(/\s+/).filter(r=>/^[A-Za-z]/.test(r)&&!/^(lab|the|of|and|&)$/i.test(r));return(i.length>1?i[0][0]+i[1][0]:e[0]||"?").toUpperCase()}function Xh(t){const e=t.toLowerCase();return/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(e)?"B":/^c$|chem|food|econ|psych|mind/.test(e)?"C":/^p$|phys|acoust|mechan/.test(e)?"P":"R"}const Zh={B:"BIO",C:"CHEM",P:"PHYSICS"};function XR(t,e){const n=t.type||e?.type||"",i=e?.color&&/^#[0-9a-f]{3,8}$/i.test(e.color)?e.color:void 0,r=WR(t.name);if(Wh[n])return{initial:r,familyKey:"S",familyLabel:Wh[n],staff:!0,color:i};const s=(e?.field||"").trim();if(s)return{initial:r,familyKey:Xh(s),familyLabel:s.replaceAll("_"," ").toUpperCase(),staff:!1,color:i};const a=t.family||e?.family||"",o=t.familySource||e?.familySource;if(a&&o!=="display assignment"){const c=Xh(a);return{initial:r,familyKey:c,familyLabel:Zh[c]||a.toUpperCase(),staff:!1,color:i}}const l=/^[BCP]\d+$/.test(t.name)?t.name[0]:"R";return{initial:r,familyKey:l,familyLabel:Zh[l]||(n?n.replaceAll("_"," ").toUpperCase():"RESEARCH"),staff:!1,color:i}}const ZR={idle:"idle",assigned:"taking an assignment",researching:"searching the literature",recalling:"recalling shared memory",proposing:"proposing an idea",gated:"checking the novelty gate",training:"running an experiment",reviewing:"reviewing results",talking:"in discussion",sharing:"sharing findings",snapping:"switching approach",writing_diary:"writing notes",thinking:"thinking",working:"working"};function bd(t){return t?ZR[t]||t.replaceAll("_"," ").toLowerCase():""}function hg(t){if(!t)return"";const e=t.replaceAll("_"," ").toLowerCase();return e[0].toUpperCase()+e.slice(1)}const qR={"run.started":"Run started","run.finished":"Run finished","round.started":"New round","agent.assigned":"Assignment","boredom.measured":"Boredom measured","question.asked":"Question asked","observation.received":"Observation","hypothesis.proposed":"Idea proposed","gate.checked":"Novelty gate","experiment.started":"Experiment started","experiment.finished":"Experiment finished","verdict.issued":"Critic verdict","discovery.made":"New best","memory.written":"Memory saved","diary.written":"Notes written","llm.called":"Model call","message.sent":"Message","items.shared":"Shared findings","study.registered":"Study registered","study.result":"Study result","award.issued":"Award"};function pg(t){return qR[t]||t.replaceAll("."," ").replaceAll("_"," ").replace(/^./,e=>e.toUpperCase())}function jR(t){if(!/^[[{]/.test(t))return!1;try{return typeof JSON.parse(t)=="object"}catch{return/^\{\s*"|^\[\s*[{["]/.test(t)}}function mg(t){const e=t?.trim()||"";return!!e&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(e)&&!jR(e)}function YR(t,e,n=110){const i=[pg(t.type),e].filter(Boolean).join(" · ");if(!mg(t.message))return i;const r=t.message.replace(/\s+/g," ").trim();return`${i}: ${r.length>n?r.slice(0,n-1)+"…":r}`}function KR(t,e){const n=new Set(e.map(i=>i.id));return[...e,...t.filter(i=>!n.has(i.id)&&(i.type==="conductor"||i.type==="critic")).map(i=>({...i,standby:!0}))]}const la=t=>typeof t=="string"&&t.trim()?t.trim():void 0;function gg(t,e,n){const i={};for(const r of t){if(r.tick>n)break;if(r.agentId!==e)continue;const s=r.payload||{};if(r.type==="agent.assigned")i.role=la(s.role)||i.role;else if(r.type==="gate.checked"||r.type==="hypothesis.proposed"||r.type==="experiment.started"){const a=s.descriptor;a&&(i.mechanism=la(a.mechanism)||i.mechanism,i.method=la(a.method)||i.method),i.role=la(s.role)||i.role}else r.type==="study.registered"&&(i.field=la(s.field)||i.field)}return i}function _g(t,e=""){const n=r=>r?.replaceAll("_"," "),i=[n(t.mechanism),n(t.method)].filter(r=>r&&r.toLowerCase()!==e.toLowerCase()).join(" / ");return[n(t.role),i].filter(Boolean).join(" · ")}const qh={conductor:["Conductor","Reads the swarm's boredom each round and assigns every worker a role (exploit or divergent)."],worker:["Worker","Proposes an idea, checks it against the novelty gate, then runs the experiment."],scout:["Scout","Searches the literature and shares leads with the workers."],critic:["Critic","Re-runs promising results and approves or rejects them."],baseline:["Baseline","Runs the unmodified reference, so every score has a yardstick."],world:["Environment","The simulated world the experiments run in."]};function JR(t){const e=["conductor","worker","scout","critic","baseline","world"],n=new Map;for(const i of t){const r=i.type||"worker";n.set(r,[...n.get(r)||[],i.display_name||i.label||r])}return[...n].sort((i,r)=>(e.indexOf(i[0])+1||99)-(e.indexOf(r[0])+1||99)).map(([i,r])=>({type:i,title:qh[i]?.[0]||i.replaceAll("_"," ").replace(/^./,s=>s.toUpperCase()),does:qh[i]?.[1]||"",names:r}))}function QR(t,e){return e-t<=1}function eC(t){return t.live?t.totalTicks:0}function tC(t,e,n){return n&&e.live?e.totalTicks:Math.min(t,e.totalTicks)}function vg(t,e,n){return!!t?.live&&n&&QR(e,t.totalTicks)}function xg(t,e){let n=0;for(const i of t)i.tick>e&&n++;return n}function nC(t,e,n,i){if(!t?.live)return{hidden:!0,atEdge:!1,label:"● LIVE"};if(vg(t,e,n))return{hidden:!1,atEdge:!0,label:"● LIVE"};const r=xg(i,e);return{hidden:!1,atEdge:!1,label:r?`● Go live · ${r} new`:"● Go live"}}function En(t,e){if(e==="baseline")return"baseline";const n=t.toLowerCase();return/keep|kept|accept|replicated|confirmed/.test(n)&&!/not_?replicated/.test(n)?"kept":/crash|error|fail|timeout|reject|invalid/.test(n)?"crashed":"discarded"}function iC(t,e,n,i=!0){const r=l=>typeof l=="number"&&Number.isFinite(l)?l:null,s=t.filter(l=>(l.tick??0)<=n).map(l=>({id:l.id,tick:l.tick??0,raw:r(l.value),value:i?r(l.value):null,outcome:En(l.status,l.kind),agent:l.agent,description:l.description,status:l.status})),a=[],o=[];for(const l of e){if(l.tick>n||l.tick<0)continue;const c=l.snapshot.value;if(c==null||!Number.isFinite(c))continue;const u=a.at(-1);(!u||u[1]!==c)&&(u&&o.push([l.tick,c]),a.push([l.tick,c]))}return{points:s,best:a,newBest:o}}const si={baseline:"#5ebcc2",kept:"#92bc98",discarded:"#b5bfc2",crashed:"#c76a7d"},ca=t=>String(Number(t.toPrecision(4)));function rC(t,e,n,i){const r=[...t.points.map(E=>E.value),...t.best.map(E=>E[1])].filter(E=>E!=null);if(!t.points.length&&!t.best.length)return"<p>No measurements yet.</p>";const s=r.length?Math.min(...r):0,a=r.length?Math.max(...r):1,o=a-s||Math.abs(a)||1,l=52,c=560,u=16,f=132,d=150,h=Math.max(1,n),g=a===s?s-o/2:s,_=a===s?o:a-s,p=E=>l+Math.min(1,E/h)*(c-l),m=E=>f-(E-g)/_*(f-u),v=t.best.map(([E,k],I)=>`${I?"H":"M"}${p(E).toFixed(1)} ${I?`V${m(k).toFixed(1)}`:m(k).toFixed(1)}`).join(""),S=t.best.length?`<path class="best-line" d="${v}H${p(h).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:"",b=E=>{const k=p(E.tick).toFixed(1),I=`${i(E.agent)} · ${i(E.status)} · ${E.raw==null?"no score":ca(E.raw)} · ${i(E.description)}`,R=`<title>${I}</title>`,H=E.id?` data-experiment="${i(E.id)}" tabindex="0" role="button" aria-label="Inspect experiment: ${I}"`:"";if(E.value==null&&E.outcome!=="crashed")return`<circle class="pt ${E.outcome}"${H} cx="${k}" cy="${d}" r="${E.outcome==="discarded"?3.5:4.5}" fill="${E.outcome==="discarded"?"none":si[E.outcome]}" stroke="${si[E.outcome]}" stroke-width="1.6">${R}</circle>`;if(E.value==null)return`<g class="pt crashed"${H}>${R}<path d="M${+k-4} ${d-4}l8 8m0 -8l-8 8" stroke="${si.crashed}" stroke-width="2"/></g>`;const B=m(E.value).toFixed(1);return E.outcome==="crashed"?`<g class="pt crashed"${H}>${R}<path d="M${+k-4} ${+B-4}l8 8m0 -8l-8 8" stroke="${si.crashed}" stroke-width="2"/></g>`:`<circle class="pt ${E.outcome}"${H} cx="${k}" cy="${B}" r="${E.outcome==="discarded"?3.5:4.5}" fill="${E.outcome==="discarded"?"none":si[E.outcome]}" stroke="${si[E.outcome]}" stroke-width="1.6">${R}</circle>`},T=t.newBest.map(([E,k])=>`<path class="new-best" d="M${p(E).toFixed(1)} ${(m(k)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${ca(k)} at tick ${E}</title></path>`).join(""),A=e.direction==="maximize"?"↑ better":"↓ better",y=t.best.at(-1);return`<svg class="result-chart score-chart" viewBox="0 0 580 192" role="group" aria-label="${i(e.name)} for every candidate through tick ${Math.floor(n)}; ${t.points.length} candidates, ${t.newBest.length} new bests"><path d="M${l} ${u-4}V${f+4}H${c}" fill="none" stroke="#79918b"/><text x="${l-6}" y="${u+4}" text-anchor="end" fill="#b9cac2" font-size="9">${ca(a)}</text><text x="${l-6}" y="${f}" text-anchor="end" fill="#b9cac2" font-size="9">${ca(s)}</text><text x="${l-6}" y="${d+3}" text-anchor="end" fill="#c76a7d" font-size="8">${t.points.some(E=>E.value==null&&E.raw!=null)?"other measure":"no score"}</text><path d="M${l} ${d}H${c}" stroke="#ffffff14" stroke-dasharray="3 4"/>${S}${t.points.map(b).join("")}${T}${y?`<text x="${c}" y="${u-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${ca(y[1])}</text>`:""}<text x="${l}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(n)} · ${i(e.name.replaceAll("_"," "))} ${A}</text><g font-size="9" fill="#b9cac2" transform="translate(${l} 186)"><circle cx="0" cy="-3" r="4" fill="${si.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${si.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${si.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${si.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`}function yg(t,e,n,i,r,s){const a=new Map(e.map(o=>[i(o),o]));return t.map(o=>{const l=n(o),c=a.get(l)||r(o);return a.delete(l),s(c,o),c})}function Sd(t){return t.events.find(n=>{if(n.type!=="agent.assigned")return!1;const i=String(n.payload?.role||"").toLowerCase();return!["conductor","critic","host","baseline","environment","world"].includes(i)})?.tick??0}function bg(t,e=0){const n=t.events,i=[{tick:0,label:"Start"}];e>0&&(i[0]={tick:e,label:"Scientists arrive"});const r=(a,o)=>{const l=n.find(c=>c.tick>=e&&o(c));l&&i.push({tick:l.tick,label:a})};r("Boredom shift",a=>["round.started","boredom.measured"].includes(a.type)&&/snap|breakout/i.test(String(a.payload?.regime||""))),r("New best",a=>a.type==="discovery.made"),r("Confirmed study",a=>a.type==="study.result"&&(a.payload?.confirmed===!0||a.payload?.replicated===!0)),r("Critic review",a=>a.type==="verdict.issued"||/critic\.(veto|rejected)/i.test(a.type)),i.push({tick:t.manifest.totalTicks,label:"Finish"});const s=[...new Map(i.sort((a,o)=>a.tick-o.tick).map(a=>[a.tick,a])).values()];return s.length>1?s:[{tick:0,label:"Start"},{tick:t.manifest.totalTicks,label:"Finish"}]}function sC(t,e,n=75e3){if(!t.length)return 0;if(t.length===1)return t[0].tick;if(e>=n)return t.at(-1).tick;const i=Math.min(2e3,n/t.length/2),r=(n-i*t.length)/(t.length-1);let s=0;for(let a=0;a<t.length;a++){if(e<s+i)return t[a].tick;if(s+=i,a<t.length-1){if(e<s+r){const o=(e-s)/r,l=o*o*(3-2*o);return t[a].tick+(t[a+1].tick-t[a].tick)*l}s+=r}}return t.at(-1).tick}function Sg(t){const e=new Map,n=(i,r)=>{i&&(!e.has(i)||r<e.get(i))&&e.set(i,r)};for(const i of t.events){const r=i;if(!(r.tick<0)&&(n(r.agentId||r.agent_id,r.tick),r.type==="message.sent"||r.type==="items.shared")){for(const s of r.payload?.to_agent_ids||[])n(s,r.tick);n(r.payload?.to_agent_id,r.tick),n(r.refs?.to_agent_id,r.tick)}}for(const i of t.frames)for(const r of i.snapshot.agents)i.tick>=0&&r.state!=="idle"&&n(r.id,i.tick);return e}function Mg(t,e,n){return t.filter(i=>i.type!=="world"&&i.type!=="baseline"&&(n.get(i.id)??1/0)<=e)}function Pu(t){if(["talking","sharing"].includes(t.activity||""))return"culture";const e=(t.family||"").toLowerCase();return e==="physics"||/^P\d+$/.test(t.name)?"analyzer":e==="chem"||e==="chemistry"||/^C\d+$/.test(t.name)?"explorer":e==="bio"||e==="biology"||/^B\d+$/.test(t.name)?"notebook":t.stationId}function aC(t,e,n){const i=Sg(t),r=[],s=new Map,a=new Set,o=new Set,l=t.events.filter(g=>["message.sent","experiment.started","experiment.finished"].includes(g.type));let c=0;const u=new Set,f=Math.max(0,t.manifest.totalTicks,t.frames.at(-1)?.tick||0),d=.25,h=d*(t.manifest.tickDurationMs||700)/1e3;(t.frames[0]?.tick??0)<0&&r.push({tick:-1,positions:new Map});for(let g=0;g<=f;g+=d){for(;c<l.length&&l[c].tick<=g;){const p=l[c++];if(p.type==="experiment.started"){p.agentId&&(a.add(p.agentId),o.add(p.agentId));continue}if(p.type==="experiment.finished"){p.agentId&&o.delete(p.agentId);continue}for(const m of[p.agentId,...p.payload?.to_agent_ids||[],p.refs?.to_agent_id].filter(Boolean)){u.add(m);const v=s.get(m);v&&!v.table&&(v.pending=!0)}}const _=Ga(t.frames,g)?.snapshot.agents||[];Mg(_,g,i).forEach(p=>{const m=_.findIndex(b=>b.id===p.id);let v=s.get(p.id);if(!v){v={p:{...pu(m),atTable:u.has(p.id)},path:[],leg:0,dwell:u.has(p.id)?2.5:0,pending:!1,table:u.has(p.id),lab:!1},s.set(p.id,v);return}if(a.delete(p.id)&&(v.lab=!0,v.table=!1,v.dwell=0,v.p.atTable=!1,v.p.atLab=!1,v.path=Bo(v.p,mu(Pu({...p,activity:"experimenting"}),m),e,n)),v.lab&&!v.path.length&&!v.p.atLab&&(v.p.atLab=!0,v.dwell=4),v.dwell>0){v.dwell=Math.max(0,v.dwell-h),v.p.atTable=v.table;return}if(v.lab&&v.p.atLab){if(o.has(p.id))return;v.lab=!1,v.p.atLab=!1}if(v.p.atTable=!1,!v.path.length){v.table&&(v.table=!1,v.pending=!1,v.leg=0);const T=[mu(Pu({...p,activity:"experimenting"}),m),{x:2.7+m%3*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];if(v.leg>=T.length&&v.pending)v.table=!0,v.path=Bo(v.p,pu(m),e,n);else{const A=T[v.leg%T.length];v.leg++,v.path=Bo(v.p,A,e,n)}}let S=h*2.1;for(;v.path.length&&S>0;){const b=v.path[0],T=Math.hypot(b.x-v.p.x,b.z-v.p.z);T<=S?(v.p.x=b.x,v.p.z=b.z,S-=T,v.path.shift()):(v.p.x+=(b.x-v.p.x)/T*S,v.p.z+=(b.z-v.p.z)/T*S,S=0)}!v.path.length&&v.lab&&(v.p.atLab=!0,v.dwell=4),!v.path.length&&v.table&&(v.dwell=3,v.p.atTable=!0)}),r.push({tick:g,positions:new Map([...s].map(([p,m])=>[p,{...m.p}]))})}return r}function oC(t,e=110){const n=t.replace(/\s+/g," ").trim();if(n.length<=e)return n;const i=n.slice(0,e-1),r=i.lastIndexOf(" ");return i.slice(0,r>e*.6?r:i.length).replace(/[ ,;:—-]+$/,"")+"…"}function lC(t,e,n,i=(s=>s),r=18){const s=new Map(n.map(o=>[o.id,o.name])),a=new Map;for(const o of t){if(o.tick>e||o.tick<e-r||o.type!=="message.sent"||!o.agentId||!s.has(o.agentId))continue;const l=o.payload?.text||o.message||"";if(!l.trim())continue;const c=[...new Set([...o.payload?.to_agent_ids||[],...o.refs?.to_agent_id?[o.refs.to_agent_id]:[]])];a.set(o.agentId,{brief:oC(i(l)),peers:c.filter(u=>u!==o.agentId&&s.has(u)).map(u=>s.get(u))})}return a}const lt=t=>typeof t=="string"&&t.trim()?t.replace(/\s+/g," ").trim():"",Ec=t=>typeof t=="number"&&Number.isFinite(t)?t:null,gs=t=>String(Number(t.toPrecision(4))),Eg=(t,e=140)=>{if(t.length<=e)return t;const n=t.slice(0,e).search(/\s+\S*$/);return n>0?t.slice(0,n)+"…":t},wg=t=>Array.isArray(t)?t.map(e=>lt(typeof e=="string"?e:e?.reason||JSON.stringify(e))).filter(Boolean):[];function ml(t,e,n=!1){const i=(a,o=140)=>n?a:Eg(a,o),r=t.payload||{},s=e.metric?.name.replaceAll("_"," ")||"score";switch(t.type){case"verdict.issued":{const a=lt(r.why)||lt(r.reason);return r.accepted===!0?`Critic approved${a?`: ${i(a)}`:": the rerun reproduced the score"}`:r.accepted===!1?`Critic rejected${a?`: ${i(a)}`:": score didn't reproduce on rerun"}`:lt(r.text)}case"gate.checked":{const a=wg(r.reasons);if(r.pass===!1)return`Novelty gate blocked: ${a.length?i(a.join("; ")):"too close to an earlier idea"}`;const o=Array.isArray(r.prior_art)?r.prior_art.length:0;return r.pass===!0?`Novelty gate passed: the idea is new enough${o?` (checked against ${o} prior source${o===1?"":"s"})`:""}`:lt(r.text)}case"experiment.started":return`Testing: ${i(lt(r.description)||lt(r.text).replace(/^Testing:\s*/,"")||"a new candidate")}`;case"experiment.finished":{const a=Ec(r.metric_value),o=lt(r.status).toLowerCase(),l=a==null?"":` ${s} ${gs(a)}`,c=e.best==null?"":` (best ${gs(e.best)})`;return/crash|error|fail|timeout/.test(o)?"Crashed: the experiment failed to run":/keep|replicated|accept/.test(o)&&!/not_/.test(o)?`Kept:${l||" result"} beats the previous best`:a==null&&o?`${/reject|invalid|block/.test(o)?"Rejected before scoring":"Not scored"}${lt(r.text)?`: ${i(lt(r.text))}`:""}`:o?`Discarded:${l} didn't beat the best${c}`:lt(r.text)}case"agent.assigned":{const a=lt(r.role);return a?`Conductor assigned ${a}${lt(r.rationale)?`: ${i(lt(r.rationale))}`:""}`:lt(r.text)}case"round.started":{const a=Or(lt(r.regime)).label;return`${t.round?`Round ${t.round} begins`:"New round"}${a?` · ${a}`:""}${lt(r.rationale)?`: ${i(lt(r.rationale))}`:""}`}case"boredom.measured":{const a=Ec(r.B),o=Or(lt(r.regime)).label;return a==null?lt(r.text):`Boredom ${Math.round(a*100)}%${o?` · ${o}`:""}${a>.6?": repeating itself, ready to switch approach":a<.2?": still finding new things":""}`}case"hypothesis.proposed":return`Idea: ${i(lt(r.text))}`;case"question.asked":{const a=lt(r.kind);return`${a==="recall"?"Recalling memory":a==="read"?"Reading the source":/^(search|dataset_search|exa)$/.test(a)?"Searching the literature":"Asking"}: ${i(lt(r.text))}`}case"observation.received":return`Read: ${i(lt(r.text)||lt(r.summary))}`;case"message.sent":{const a=lt(r.to_agent_id)||lt(t.refs?.to_agent_id);return`${a?`To ${e.name(a)}`:"Message"}: ${i(lt(r.text))}`}case"study.registered":return`Pre-registered: ${i(lt(r.question)||lt(r.text))}`;case"study.result":return i(lt(r.text)||lt(r.headline));case"discovery.made":{const a=Ec(r.metric_value);return`New best${a==null?"":`: ${s} ${gs(a)}`}${lt(r.title)?` · ${i(lt(r.title),80)}`:""}`}default:return""}}function Md(t,e,n,i,r){const s=(t?.events||[]).filter(h=>h.tick<=i&&h.agentId===e),a=s.filter(h=>h.type==="experiment.started"&&h.refs?.experiment_id).at(-1),o=s.filter(h=>h.type==="gate.checked").at(-1),l=o&&o.payload?.pass===!1&&(!a||o.tick>a.tick)?o:null,c=a&&!l?ka(t,String(a.refs.experiment_id),i):null,u=c&&(t?.events||[]).filter(h=>h.tick<=i&&h.type==="verdict.issued"&&h.refs?.experiment_id===c.id).at(-1),d=[...s,...u&&u.agentId!==e?[u]:[]].sort((h,g)=>h.tick-g.tick).map(h=>({tick:h.tick,why:ml(h,r),full:ml(h,r,!0),kind:h.type==="observation.received"||h.type==="question.asked"&&h.payload?.kind==="read"?"Read":h.type==="question.asked"&&/^(search|dataset_search|exa)$/.test(lt(h.payload?.kind))?"Search":void 0})).filter(h=>h.why).slice(-6).reverse();return{activity:bd(n),latest:s.at(-1)||null,blocked:l,experiment:c,sources:gd(t,i).filter(h=>h.agentId===e).slice(-3).reverse(),feed:d}}function Tg(t,e,n,i=!0){const r=e.esc,s=t.experiment,a=(_,p)=>p?`<div class="now-row"><b>${_}</b><div>${p}</div></div>`:"",o=r(t.activity||"Not active yet"),l=s?`${r(s.idea?.text||s.description||"")}${s.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${s.idea.predictedDelta>0?"+":""}${gs(s.idea.predictedDelta)}</span>`:""}${s.descriptor?.mechanism?` <span class="pill">${r(String(s.descriptor.mechanism).replaceAll("_"," "))}${s.descriptor.method?` / ${r(String(s.descriptor.method).replaceAll("_"," "))}`:""}</span>`:""}`:"",c=t.sources.map(_=>`<button class="chip" data-source="${r(_.id)}" title="${r(_.title)}">${r(Eg(_.title,60))}</button>`).join(""),u=t.blocked?`<span class="pill bad">blocked</span> ${r(wg(t.blocked.payload?.reasons).join("; ")||"Too close to an earlier idea.")}`:s?.gate?`<span class="pill ${s.gate.pass?"ok":"bad"}">${s.gate.pass?"passed":s.gate.pass===!1?"blocked":"checked"}</span> ${r(s.gate.reasons.length?s.gate.reasons.join("; "):s.gate.pass?"The idea is new enough to try.":"")}`:s?'<span class="muted">Not checked yet</span>':"",f=s?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(s.verdict.verdict||"")&&!/not_/i.test(s.verdict.verdict||"")?"ok":"bad"}">${r(s.verdict.verdict||"verdict")}</span> ${r(s.verdict.why||"")}`:s?.result?'<span class="muted">Waiting for the critic</span>':"",d=n?.name.replaceAll("_"," ")||"score",h=n?.direction==="maximize"?"higher":"lower",g=s?.result?`<span class="pill">${r(s.result.status||"done")}</span> ${s.result.metric==null?"":`${r(d)} ${gs(s.result.metric)}`}${e.best==null?"":` · best so far ${gs(e.best)} (${h} is better)`}`:s?'<span class="muted">Still running</span>':"";return`<div class="now-card">${i?a("Doing",o):""}${a("Idea",l)}${a("Read",c)}${a("Gate",u)}${a("Score",g)}${a("Critic",f)}${s?`<button class="inspect-link" data-experiment="${r(s.id)}">Inspect experiment →</button>`:""}${t.feed.length?`<h3>Why, step by step</h3><ol class="why-feed">${t.feed.map(_=>`<li title="${r(_.full||_.why)}">${_.kind?`<span class="step-kind" data-kind="${_.kind}">${_.kind}</span>`:""}${r(_.why)}</li>`).join("")}</ol>`:""}</div>`}const cC=t=>t&&/^https?:\/\//i.test(t)?t:null,Wo=(t,e,n)=>cC(e)?`<a href="${t.esc(e)}" target="_blank" rel="noopener noreferrer">${t.esc(n)}</a>`:t.esc(n),Xo=(t,e,n)=>t==null?'<span class="pill">not logged</span>':`<span class="pill ${t?"ok":"bad"}">${t?e:n}</span>`,Ag=(t,e)=>`<button class="chip" data-experiment="${t.esc(e)}">${t.esc(t.experimentLabel?.(e)||e.replace(/^experiment:/,"").slice(0,10))}</button>`,ua=(t,e,n)=>`<li class="${n?"done":"pending"}"><b>${t}</b><div>${e}</div></li>`;function uC(t,e,n){const i=e.esc,r=h=>`<p class="muted">${h}</p>`,s=t.idea?.text||t.description?`<p>${i(t.idea?.text||t.description)}</p>${t.idea?.rationale?`<p class="muted">${i(t.idea.rationale)}</p>`:""}${t.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${aR(t.idea.predictedDelta,4)}</p>`:""}`:r("No idea text logged."),a=t.descriptor?`<p class="muted">${i(Object.entries(t.descriptor).map(([h,g])=>`${h}: ${typeof g=="object"?JSON.stringify(g):g}`).join(" · "))}</p>`:"",o=t.gate?`<p>${Xo(t.gate.pass,"passed","blocked")} ${i(t.gate.text||"")}${t.gate.attempts!=null?` <span class="muted">· ${t.gate.attempts} attempt${t.gate.attempts===1?"":"s"}</span>`:""}</p>${t.gate.reasons.length?`<ul>${t.gate.reasons.map(h=>`<li>${i(h)}</li>`).join("")}</ul>`:""}${t.gate.priorArt.length?`<p class="muted">Prior art ${i(t.gate.priorArt.join(", "))}</p>`:""}`:r("No gate check by this moment."),l=t.result?`<p><span class="pill">${i(t.result.status||"unknown")}</span> Metric <b>${i(t.result.metric??"–")}</b>${t.result.reward!=null?` · reward ${i(t.result.reward)}`:""}</p>${t.result.text?`<p class="muted">${i(t.result.text)}</p>`:""}`:r("Still running at this moment."),c=t.verdict?`<p><span class="pill">${i(t.verdict.verdict||"reviewed")}</span> ${t.verdict.by?`by ${i(e.name(t.verdict.by))}`:""}</p>${t.verdict.why?`<p>${i(t.verdict.why)}</p>`:""}`:r(t.result?"No critic verdict yet.":"Awaiting result."),u=Object.entries(t.artifacts),f=`${u.length?`<div class="artifact-links">${u.map(([h,g])=>`<a href="${i(e.artifactUrl(g))}" target="_blank" rel="noopener">${i(h)} ↗</a>`).join("")}</div>`:""}${t.artifacts.diff?`<details data-artifact="${i(e.artifactUrl(t.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:""}${t.logTail?`<details${t.artifacts.diff?"":" open"}><summary>Log tail</summary><pre class="artifact-text">${i(t.logTail)}</pre></details>`:""}`||r("No diff or log exported for this experiment.");return`${`<p class="inspector-kicker">${i(t.kind||"experiment")}${t.round!=null?` · round ${t.round}`:""}${t.role?` · ${i(t.role)}`:""}</p><h2>${i(t.description||t.idea?.text||t.id)}</h2><p class="muted">${i(e.name(t.agentId))}${t.commit?` · <code>${i(t.commit.slice(0,10))}</code>`:""}</p>`}<ol class="lifecycle">${ua("Idea",s+a,!!(t.idea||t.description))}${ua("Gate",o,!!t.gate)}${ua("Score",l,!!t.result)}${ua("Critic",c,!!t.verdict)}${ua("Artifacts",f,u.length>0||!!t.logTail)}</ol>${n?`<h3>Study</h3>${Rg(n,e)}`:""}<details class="timeline-list"><summary>Logged events (${t.timeline.length})</summary><ul>${t.timeline.map(h=>`<li><span>t${h.tick}</span> <b>${i(h.type)}</b> ${i(h.text)}</li>`).join("")}</ul></details>`}function dC(t,e){return t.length?`<div class="card-grid">${t.slice().reverse().map(n=>`<article class="inspect-card source-card" data-source-card="${e.esc(n.id)}"><h4>${Wo(e,n.url,n.title)}</h4>${n.url?`<p class="muted source-host">${e.esc(Ig(n.url))}</p>`:""}${n.highlight?`<blockquote>${e.esc(Lg(n.highlight,320))}</blockquote>`:""}<p class="muted">Found by ${e.esc(e.name(n.agentId))} · tick ${n.tick}</p><div class="chips">${n.citedBy.length?`<span class="muted">Cited by</span> ${n.citedBy.map(i=>Ag(e,i)).join("")}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join("")}</div>`:'<p class="muted">No research sources were retrieved by this moment.</p>'}const _s=t=>t==null?"–":t.toFixed(3),fC=t=>`rho ${_s(t.rho)}, p ${pl(t.p)}, n ${t.n??"–"}`;function hC(t,e){const n=i=>Math.max(0,Math.min(100,(i+1)*50));return`<div class="rho-bar" role="img" aria-label="Predicted rho ${_s(t)}, observed rho ${_s(e)}"><i class="zero"></i>${t==null?"":`<i class="predicted" style="left:${n(t)}%"></i>`}${e==null?"":`<i class="observed" style="left:${n(e)}%"></i>`}</div>`}function pC(t,e){return t.award?t.award.rejected?'<span class="badge rejected">Committee rejected</span>':`<span class="badge award">🏆 ${e.esc(t.award.award||"Ig Nobel")}${t.award.score!=null?` · ${t.award.score}`:""}</span>`:t.result?.rejected?'<span class="badge rejected">Rejected</span>':t.result?t.result.confirmed&&t.priorArtPass===!1?`<span class="badge" title="Replicated, but the novelty critic matched it to prior work, so it was not accepted.">Confirmed · not accepted: prior art${t.novelty!=null?` (novelty ${t.novelty.toFixed(2)})`:""}</span>`:t.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>':'<span class="badge">Preregistered</span>'}function Rg(t,e){const n=e.esc,i=t.dataset,r=t.result,s=(f,d)=>f?`${n(f)}${d?` = <b>${n(d)}</b>`:""}`:"–",o=(r?.confirmed?xd({...r,direction:t.direction||void 0},vd(e.judging)).failures:[]).map(f=>`<span class="badge current-rule-failure">Fails current ${n(f)} rule</span>`).join(""),l=r?.halves.length?`<div class="halves">${r.halves.map((f,d)=>`<span>Half ${d+1}: rho ${_s(f.rho)}, p ${pl(f.p)}, n ${f.n??"–"}</span>`).join("")}</div>`:'<p class="muted">Half-sample split not logged.</p>',c=t.replications.length?`<p class="muted">Critic replications</p><ul>${t.replications.map(f=>`<li>${fC(f)} ${Xo(f.replicated,"replicated","did not replicate")}</li>`).join("")}</ul>`:"",u=t.committee?`<div class="committee"><b>Committee${t.committee.score!=null?` · score ${t.committee.score.toFixed(2)}`:""}</b>${t.committee.available?"":'<p class="muted">Unavailable for this run.</p>'}${t.committee.rejected?'<p class="muted">Rejected: targets a group.</p>':""}${Object.entries(t.committee.judges).length?`<ul>${Object.entries(t.committee.judges).map(([f,d])=>`<li>Judge ${n(f)} · laugh ${d.laugh??"–"} / think ${d.think??"–"}${d.reason?`: ${n(d.reason)}`:""}</li>`).join("")}</ul>`:""}${t.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${t.committee.priorWork.length?`<ul>${t.committee.priorWork.map(f=>`<li>${Wo(e,f.url,f.title||f.url)}${f.snippet?`<p class="muted">${n(f.snippet)}</p>`:""}</li>`).join("")}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:t.award?`<div class="committee"><b>Committee</b>${t.award.headline?`<p>${n(t.award.headline)}</p>`:""}${t.award.rejected?`<p class="muted">Rejected: ${n(t.award.rejected)}</p>`:""}${t.award.verdicts.length?`<ul>${t.award.verdicts.map(f=>`<li>${n(f)}</li>`).join("")}</ul>`:""}${!t.award.headline&&!t.award.verdicts.length&&t.award.text?`<p>${n(t.award.text)}</p>`:""}</div>`:"";return`<article class="inspect-card study-card"><div class="study-head"><div class="study-badges">${pC(t,e)}${o}</div><span class="muted">${n((t.field||"study").replace(/_/g," "))} · ${n(e.name(t.agentId))}</span></div><h4>${n(t.question||t.hypothesis||t.id)}</h4>${t.hypothesis&&t.question?`<p class="muted">${n(t.hypothesis)}</p>`:""}
<dl><dt>Dataset</dt><dd>${i.url?Wo(e,i.url,Ig(i.url)+" · "+(i.url.split("/").at(-1)||"")):n(i.id||"–")}<br>X: ${s(i.x,i.xLevel)}<br>Y: ${s(i.y,i.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${_s(t.predictedRho)} → observed <b>${_s(r?.rho??null)}</b>${r?` · p ${pl(r.p)} · n ${r.n??"–"}`:""}${hC(t.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?l:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${Xo(r.significant,"significant","not significant")}, ${Xo(r.replicated,"split-half consistent","not split-half consistent")}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${n(r.rejected)}</p>`:r?.headline?`<p class="headline">${n(r.headline)}</p>`:""}${c}${u}<div class="chips">${t.experimentId?Ag(e,t.experimentId):""}${t.citations.map(f=>`<span class="chip">${Wo(e,f,Lg(f.replace(/^https?:\/\/(doi\.org\/)?/,""),32))}</span>`).join("")}</div></article>`}function Cg(t,e){return t.length?`<div class="card-grid">${t.map(n=>Rg(n,e)).join("")}</div>`:""}function Pg(t,e,n){return t.length?`<ol class="dialogue">${t.map(i=>`<li class="bubble${n&&i.from===n?" mine":""}${i.kind?` ${e.esc(i.kind)}`:""}"><cite>${e.esc(e.name(i.from))}${i.to.length?` → ${e.esc(i.to.map(r=>e.name(r)).join(", "))}`:""} · tick ${i.tick}${i.kind?` · ${e.esc(i.kind)}`:""}</cite><p>${e.esc(i.text)}</p></li>`).join("")}</ol>`:""}function Ig(t){try{return new URL(t).hostname.replace(/^www\./,"")}catch{return t}}function Lg(t,e){return t.length>e?t.slice(0,e-1)+"…":t}function mC(t,e,n={distance:3,facing:.35},i={distance:3.6,facing:.2}){return t.find(a=>a.id===e&&a.distance<i.distance&&a.facing>i.facing)?e:t.filter(a=>a.distance<n.distance&&a.facing>n.facing).sort((a,o)=>a.distance-o.distance)[0]?.id||""}const gC={frenetic:"Frenetic",engaged:"Engaged",bored:"Bored",drowsy:"Drowsy"};function _C(t){const{agent:e,recording:n,tick:i}=t,r=n?.events||[],s=_g(gg(r,e.id,i),e.family||""),a={name:t.agentName||(f=>f===e.id?e.name:"Scientist"),metric:t.metric,best:t.best},o=Md(n,e.id,e.activity||e.state,i,a),l=sm(e.boredom).level,c=o.experiment,u=o.blocked?ml(o.blocked,a):"";return{name:e.name,role:s||hg(e.role)||"Scientist",mood:{level:l,label:gC[l]||null,boredomPct:e.boredom==null?null:Ui(e.boredom)},activity:u||o.activity||"Not active yet",idea:u?null:c?.idea?.text||c?.description||null,predicted:u?null:c?.idea?.predictedDelta??null}}function vC(t,e,n){const i=[t.mood.label,t.mood.boredomPct==null?null:`bored ${Math.round(t.mood.boredomPct)}%`].filter(Boolean).join(" · "),r=t.idea?`<p class="bubble-idea">${n(t.idea)}${t.predicted==null?"":` <span class="pill">predicted Δ ${t.predicted>0?"+":""}${n(Lr(t.predicted))}</span>`}</p>`:"";return`<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${n(t.name)}</strong><span class="bubble-role">${n(t.role)}</span>${i?`<span class="bubble-mood">${n(i)}</span>`:""}<p class="bubble-activity">${n(t.activity)}</p>${r}${e?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`}const Zo=t=>typeof t=="number"&&Number.isFinite(t),jh=t=>Math.max(0,Math.min(1,t)),xC="Passed means zero loss on the preregistered checks; test totals exclude the baseline and missing results.";function yC(t,e,n){const i=s=>s.agent===e||s.agent===n||s.agentId===e,r=t.filter(s=>i(s)&&En(s.status,s.kind)!=="baseline"&&Zo(s.value));return{confirmed:r.filter(s=>s.value===0).length,tested:r.length}}function bC(t){return`${t.confirmed} of ${t.tested} tests passed`}function SC(t,e,n){const i=e.filter(r=>r.tick<=n);if(t==="conductor"){const r=i.filter(l=>l.type==="round.started").reduce((l,c)=>!l||c.tick>=l.tick?c:l,void 0),s=r?.payload?.regime;if(typeof s!="string")return"Conductor · awaiting assignment";const a=s.toUpperCase();return`Conductor · ${/BOREDOM_SNAP|EXPLORE|DIVERG/.test(a)?"Bored: trying new directions":/BREAKOUT|NOVEL/.test(a)?"Breakout":"Refining"}`}if(t==="critic"){const r=i.filter(s=>s.type==="verdict.issued").length;return`Critic · ${r} review${r===1?"":"s"}`}return""}function MC(t,e,n){if(t!=="conductor")return"";const i=e.filter(s=>s.tick<=n&&s.type==="round.started").reduce((s,a)=>!s||a.tick>=s.tick?a:s,void 0),r=i?.payload?.regime;return typeof r=="string"?Or(r).description:""}function EC(t){return t==null?"best n/a":`best ${Lr(t)}`}function wC(t,e,n,i,r,s){const a=_=>_.agent===e||_.agent===n||_.agentId===e,o=t.filter(_=>a(_)&&En(_.status,_.kind)!=="baseline").slice().sort((_,p)=>(_.tick??0)-(p.tick??0)),l=o.map(_=>_.value).filter(Zo),c=i.name==="replicated_findings"?"maximize":i.direction,u=l.length?c==="maximize"?Math.max(...l):Math.min(...l):null,f=t.filter(_=>En(_.status,_.kind)!=="baseline").map(_=>_.value).filter(Zo),d=f.length?c==="maximize"?Math.min(...f):Math.max(...f):null;let h=null;if(u!=null&&r!=null){if(u===r)h=1;else if(s!=null){const _=r-s;h=_===0?0:jh((u-s)/_)}else if(d!=null){const _=Math.abs(r-d);h=_===0?1:jh(c==="maximize"?(u-d)/_:(d-u)/_)}}const g={kept:0,discarded:0,crashed:0};for(const _ of o){const p=En(_.status,_.kind);p!=="baseline"&&g[p]++}return{best:u,progress:h,...g,spark:o.map(_=>_.value).filter(Zo).slice(-12)}}function TC(t,e,n=1.96){if(!Number.isFinite(t)||!Number.isFinite(e)||e<=0||t<0||t>e)return null;const i=t/e,r=n*n,s=1+r/e,a=(i+r/(2*e))/s,o=n*Math.sqrt((i*(1-i)+r/(4*e))/e)/s;return{low:Math.max(0,a-o),high:Math.min(1,a+o)}}const wi=t=>typeof t=="number"&&Number.isFinite(t),Ng=t=>typeof t=="string"&&t?t.slice(0,7):null;function AC(t,e=String){return t==null?"":t===0?"no change":`${t>0?"improved by":"worsened by"} ${e(Math.abs(t))}`}function Yh(t,e){const n=wi(t?.score)?t.score:null,i=n==null?null:n*e,r=i!=null&&Math.abs(i-Math.round(i))<=1e-6?Math.round(i):null;return{score:n,k:r,fraction:r==null?null:`${r}/${e}`,wilson:r==null?null:TC(r,e),loss:wi(t?.loss)?t.loss:null,commit:Ng(t?.commit)}}function Rs(t,e){return t?t.events.some(n=>n.type==="run.finished"&&n.tick<=e)?!0:["finished","completed","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks:!1}function RC(t,e){if(!t)return null;const{manifest:n}=t,i=Ga(t.frames,e)?.snapshot,r=i?.results||[],s=n.metric?.direction==="maximize"||i?.metric.direction==="maximize"?"maximize":"minimize",a=n.metric?.label||i?.metric.name||n.metric?.name||"result",o=r.find(v=>En(String(v.status||""),String(v.kind||""))==="baseline"),l=r.filter(v=>En(String(v.status||""),String(v.kind||""))==="kept"),c=l.length?l.reduce((v,S)=>s==="maximize"?wi(S.value)&&(!wi(v.value)||S.value>v.value)?S:v:wi(S.value)&&(!wi(v.value)||S.value<v.value)?S:v):o,u=wi(o?.value)?o.value:null,f=wi(c?.value)?c.value:null,d=u==null||f==null?null:s==="maximize"?f-u:u-f,h={kept:0,discarded:0,crashed:0};for(const v of r){const S=En(String(v.status||""),String(v.kind||""));S!=="baseline"&&h[S]++}const g=Il(n,t)||"",_=n.held_out_test,p=_&&wi(_.n_items)?_.n_items:0,m=_&&p>0?{n:p,baseline:Yh(_.baseline,p),best:Yh(_.best,p),proxyNote:As(n,t)?g:_.proxy_note||g,referenceNote:_.reference_note||n.reference_note||""}:null;return{status:n.status==="stopped"?"stopped":"finished",metric:a,direction:s,baseline:u,best:f,delta:d,winner:l.length&&c?{commit:Ng(c.commit),description:String(c.description||""),agent:String(c.agent||"")}:null,totals:h,heldOut:m,proxyNote:m?.proxyNote||g,referenceNote:m?.referenceNote||n.reference_note||""}}const bn=t=>t&&typeof t=="object"?t:{},qo=t=>typeof t=="number"&&Number.isFinite(t),Ll=t=>Array.isArray(t)?t.map(bn):t&&typeof t=="object"?Object.values(t).map(bn):[],Kh=t=>Array.isArray(t)?t:t&&typeof t=="object"?Object.values(t):[],Sn=t=>typeof t=="string"?t:"",fn=t=>qo(t)?t:null,er=t=>Sn(t.id||t.study_id||t.studyId),Ed=t=>Sn(t.refs?.study_id||t.refs?.studyId||t.payload?.study_id||t.payload?.studyId),CC=["score","scores","judges","verdicts"],Dg=t=>Object.keys(t).length>0,Ug=t=>CC.some(e=>t[e]!=null);function Jh(t){const e=bn(t);return(Array.isArray(t)?t.map(bn):Object.entries(e).map(([i,r])=>({id:i,...bn(r)}))).map(i=>({id:Sn(i.id)||"judge",model:Sn(i.model),laugh:fn(i.laugh),think:fn(i.think),reason:Sn(i.reason)}))}const PC=["award.issued","study.result","study.replicated","study.completed"];function IC(t){const e=bn(t.payload),n=[e.committee,e.award].map(bn).find(Dg);return n||(Ug(e)?e:null)}function LC(t,e,n,i){const r=e.filter(p=>PC.includes(p.type)&&Ed(p)===er(t)).map(p=>({event:p,payload:IC(p)})).filter(p=>p.payload!==null),s=r.filter(p=>p.event.tick<=n).sort((p,m)=>p.event.tick-m.event.tick).at(-1);if(!s&&(r.length||!i))return null;const a=bn(t.graded),o=[t.committee,a.committee,bn(t.result).committee].map(bn).find(Dg),l=bn(s?.payload??o),c=Kh(a.scores).map(p=>{const m=bn(p);return fn(m.score??m.value??p)}).filter(qo);if(!Object.keys(l).length&&Ug(a)&&Object.assign(l,{available:a.available,rejected:a.rejected,scores:a.scores,verdicts:a.verdicts,score:c.length?Math.min(...c):a.score,prior_work:a.prior_work}),!Object.keys(l).length)return null;if(l.available===!1)return{score:null,rejected:l.rejected===!0,judges:Jh(l.judges??l.verdicts),priorWork:null};const u=Jh(l.judges??l.verdicts??l.per_judge),f=u.map(p=>p.laugh==null||p.think==null?null:Math.min(p.laugh,p.think)/10).filter(qo),d=Kh(l.scores).map(p=>{const m=bn(p);return fn(m.score??m.value??p)}).filter(qo),h=fn(l.score)??(d.length?Math.min(...d):null)??(f.length?Math.min(...f):null),g=Ll(l.prior_work??l.priorWork),_=g.map(p=>({url:Sn(p.url),title:Sn(p.title)||void 0})).filter(p=>p.url);return{score:h,rejected:l.rejected===!0,judges:u,priorWork:g.length||l.prior_work_available===!0?{count:g.length,links:_}:null}}function da(t,e){const n=er(t),i=e.filter(a=>Ed(a)===n),r=i.filter(a=>a.type==="study.registered").sort((a,o)=>a.tick-o.tick)[0],s=i.filter(a=>["study.result","study.replicated","study.completed"].includes(a.type)).sort((a,o)=>a.tick-o.tick)[0];return r?.tick??fn(t.registered_tick)??fn(t.tick)??s?.tick??0}function NC(t,e){return e.filter(n=>Ed(n)===er(t)&&["study.result","study.replicated","study.completed"].includes(n.type)).sort((n,i)=>n.tick-i.tick)[0]?.tick??null}const DC=t=>{const e=bn(t.result),n=Sn(t.status||e.status).toLowerCase();return t.confirmed===!0||t.replicated===!0||e.confirmed===!0||e.replicated===!0||n==="confirmed"||n==="replicated"||Ll(t.replications).some(i=>i.confirmed===!0||i.replicated===!0||["confirmed","replicated"].includes(Sn(i.status).toLowerCase()))};function UC(t,e,n,i){const r=Ll(t).filter(c=>da(c,e)<=n),s=r.filter(c=>{const u=NC(c,e);return u!=null&&u<=n&&DC(c)}),a=s.map(c=>({study:c,committee:LC(c,e,n,i)})).filter(c=>c.study.rejected!==!0&&!c.committee?.rejected),o=a.filter(c=>c.committee?.score!=null);if(o.length){const c=o.sort((u,f)=>f.committee.score-u.committee.score||(fn(u.study.p)??1/0)-(fn(f.study.p)??1/0)||da(u.study,e)-da(f.study,e)||er(u.study).localeCompare(er(f.study))).slice(0,3);return{status:"ranked",tested:r.length,confirmed:s.length,entries:c.map((u,f)=>Qh(u.study,u.committee,f+1))}}const l=a.sort((c,u)=>da(c.study,e)-da(u.study,e)||er(c.study).localeCompare(er(u.study)));return{status:l.length?"awaiting":"none",tested:r.length,confirmed:s.length,entries:l.map(c=>Qh(c.study,c.committee,null))}}function Qh(t,e,n){const i=Ll(t.halves);return{studyId:er(t),headline:Sn(t.headline)||Sn(t.question),hypothesis:Sn(t.hypothesis)||Sn(t.mechanism),agentId:Sn(t.agent_id),tick:fn(t.tick)??0,p:fn(t.p),rho:fn(t.rho),n:fn(t.n),halves:i.map(r=>({rho:fn(r.rho),n:fn(r.n),p:fn(r.p)})),rank:n,score:e?.score??null,unscored:e?.score==null,committee:e}}function kC(t,e){const n=Il(t.manifest,t);return n?`<p class="metric-description">${e(n)}</p>`:""}function OC(t){const e=rm(t),n=e.head==="monitor"?"#fff8e4":"#263b41",i=e.head==="round"?`<ellipse cx="70" cy="49" rx="33" ry="26" fill="${e.shell}"/>`:`<rect x="37" y="24" width="66" height="50" rx="${e.head==="monitor"?7:17}" fill="${e.shell}"/>`,r=e.antenna==="pair"?[53,87]:[e.antenna==="offset-right"?87:e.antenna==="offset-left"?53:70],s=[58,82].map(o=>e.eyes==="happy"?`<path d="M${o-5} 47q5-8 10 0" fill="none" stroke="${n}" stroke-width="3" stroke-linecap="round"/>`:`<ellipse cx="${o}" cy="46" rx="3.5" ry="5" fill="${n}"/>`).join(""),a=e.prop==="magnifier"?`<circle cx="112" cy="99" r="12" fill="#bce7ef88" stroke="${e.accent}" stroke-width="5"/><path d="M106 109l-7 14" stroke="#263b41" stroke-width="5"/>`:e.prop==="clipboard"?`<rect x="19" y="89" width="25" height="34" rx="3" fill="${e.trim}"/><rect x="23" y="94" width="17" height="24" fill="#fff8e4"/><path d="M26 100h11m-11 6h11m-11 6h8" stroke="${e.accent}" stroke-width="2"/>`:`<path d="M28 92h10v15l10 16H18l10-16Z" fill="${e.trim}" stroke="#263b41" stroke-width="2"/><path d="M28 92h10" stroke="${e.accent}" stroke-width="4"/>`;return`<svg class="podium-agent" viewBox="0 0 140 162" aria-hidden="true" focusable="false"><ellipse cx="70" cy="155" rx="39" ry="5" fill="#0003"/><g stroke="#263b41" stroke-width="2"><path d="M54 127v20m32-20v20" stroke="${e.shell}" stroke-width="14"/><rect x="43" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="75" y="145" width="24" height="10" rx="5" fill="${e.accent}"/><rect x="42" y="81" width="56" height="51" rx="12" fill="${e.shell}"/><path d="M70 88v41" stroke-width="1"/><path d="M42 90l-8 25m64-25 8 23" stroke="${e.shell}" stroke-width="12"/><circle cx="33" cy="116" r="7" fill="${e.accent}"/><circle cx="106" cy="114" r="7" fill="${e.accent}"/><rect x="61" y="71" width="18" height="11" rx="3" fill="${e.accent}"/><circle cx="34" cy="49" r="10" fill="${e.accent}"/><circle cx="106" cy="49" r="10" fill="${e.accent}"/>${r.map(o=>`<path d="M${o} 25V12"/><circle cx="${o}" cy="10" r="5" fill="${e.trim}"/>`).join("")}${i}</g>${e.head==="monitor"?'<rect x="43" y="31" width="54" height="36" rx="6" fill="#263b41"/>':""}${s}<path d="M62 56q8 12 16 0" fill="none" stroke="${n}" stroke-width="2.5" stroke-linecap="round"/><circle cx="49" cy="56" r="3" fill="${e.trim}"/><circle cx="91" cy="56" r="3" fill="${e.trim}"/><rect x="77" y="96" width="14" height="10" rx="2" fill="${e.accent}"/><circle cx="52" cy="93" r="3" fill="${e.trim}"/>${a}</svg>`}function FC(t){return t.filter(e=>!e.error&&e.score!=null&&Number.isFinite(e.score)).map((e,n)=>({idea:e,index:n})).sort((e,n)=>{const i=r=>r.rank!=null&&Number.isFinite(r.rank)&&r.rank>0?r.rank:1/0;return i(e.idea)-i(n.idea)||n.idea.score-e.idea.score||e.index-n.index}).slice(0,3).map(({idea:e})=>e)}function zC(t,e){const n=FC(t);if(!n.length)return'<section class="final-podium"><h2>Ig Nobel podium</h2><p role="status">Awaiting final judge scores. The podium will appear when judging is complete.</p></section>';const i=n.map((r,s)=>`<details class="podium-place podium-place-${s+1}"><summary><span class="podium-stage"><span class="podium-contestant">${r.agent?`${OC(r.agent.id)}<span class="podium-agent-name">${e(r.agent.name)}</span>`:'<span class="podium-agent-unknown">Agent not recorded</span>'}</span><span class="podium-step"><span class="podium-medal">${s+1}</span><span class="podium-score">${e(r.score)}<small>Final judge score</small></span></span></span><span class="podium-idea-label"><span class="podium-label">${s===0?"Ig Nobel Prize winner":s===1?"Second place":"Third place"}</span><strong class="podium-title">${e(r.title||r.id)}</strong><span class="podium-inspect">Inspect idea <span aria-hidden="true">↗</span></span></span></summary><div class="podium-description">${r.agent?`<p class="podium-author">Researcher: ${e(r.agent.name)}</p>`:""}<p>${e(r.description||"No additional idea description was supplied.")}</p>${r.verdict?`<p>${e(r.verdict)}</p>`:""}<p><strong>Final score: ${e(r.score)}</strong></p><small>Idea ${e(r.id)}</small></div></details>`).join("");return`<section class="final-podium" aria-label="Final top three ideas"><h2>Ig Nobel podium</h2><p>Final judge ranking · Select an idea to explore its details.</p>${n.length<3?`<p>Only ${n.length} scored ${n.length===1?"idea is":"ideas are"} available.</p>`:""}<div class="podium-places">${i}</div></section>`}function BC(t){return yd(t.igjudge)?.ideas.filter(n=>n.rank!=null).map(n=>{const i=t.entities?.studies?.find(l=>{const c=l;return(c.id??c.study_id)===n.studyId}),r=n.agentId||(typeof i?.agent_id=="string"?i.agent_id:""),s=t.manifest.agents?.find(l=>l.agent_id===r||l.native_id===r),a=t.frames.at(-1)?.snapshot.agents.find(l=>l.id===r),o=r?{id:s?.agent_id||r,name:s?.display_name||a?.name||r}:void 0;return{id:n.studyId,title:n.title,description:n.hypothesis,score:n.total,rank:n.rank,verdict:n.verdict,error:n.error,agent:o}})??[]}function $C(t,e,n){return Rs(t,e)?zC(BC(t),n):""}const On=t=>typeof t=="string"?t:"",kg=(t,e)=>t.events.filter(n=>n.tick<=e);function HC(t,e=6){const n=new Map;for(const r of t){const s=n.get(r.round)||[];s.push(r),n.set(r.round,s)}const i=Math.max(1,Math.floor(e));return[...n].sort(([r],[s])=>r-s).map(([r,s])=>(s.sort((a,o)=>a.tick-o.tick),{round:r,visible:s.slice(0,i),hidden:s.slice(i)}))}function GC(t,e,n){if(!t.length)return 0;let i=n==null?-1:t.findIndex(o=>o.round===n);i<0&&(i=t.findIndex(o=>e>=o.startTick&&e<=o.endTick)),i<0&&(i=e<t[0].startTick?0:t.length-1);const r=t[i],s=r.endTick-r.startTick,a=s>0?(e-r.startTick)/s:e>=r.endTick?1:0;return i+Math.max(0,Math.min(1,a))}function VC(t){if(t.type==="hypothesis.proposed")return"idea";if(t.type==="llm.called"){const e=On(t.payload?.role).toLowerCase();return e.includes("scout")||e.includes("search")?"scout":e.includes("memory")?"memory":"idea"}return t.type==="verdict.issued"?t.payload?.vetoed===!0?"veto":"critic":t.type==="study.replicated"?"critic":t.type==="question.asked"&&t.payload?.kind==="search"||t.type==="agent.assigned"&&t.payload?.scout===!0?"scout":t.type==="question.asked"&&t.payload?.kind==="recall"||t.type==="observation.received"&&t.payload?.kind==="memories"?"memory":t.type==="boredom.measured"||t.type==="round.started"&&["BOREDOM_SNAP","PARADIGM_BREAKOUT"].includes(On(t.payload?.regime))?"boredom":t.type==="experiment.finished"?t.payload?.status==="keep"?"keep":"evaluation":t.type==="discovery.made"?"keep":t.type==="gate.checked"&&(t.payload?.pass??t.payload?.passed)===!1?"gate":t.type==="experiment.started"&&t.payload?.kind!=="baseline"?"idea":null}function WC(t,e){if(!t)return{rounds:[],lanes:[],roundCloses:[],roundSpans:[]};const n=new Map;let i=0;for(const d of t.events)d.type==="round.started"&&(i=Number(d.round||d.payload?.round)||i+1),n.set(d,Number(d.round||d.payload?.round)||i);const r=kg(t,e),s=new Map;let a=0;const o=new Map,l=new Set;for(const d of r)d.type==="round.started"&&(a=Number(d.round||d.payload?.round)||a+1,l.add(a)),s.set(d,Number(d.round||d.payload?.round)||a);for(const d of r){const h=VC(d);if(!h)continue;const g=On(d.agentId||d.payload?.agent_id||d.refs?.agent_id);if(!g)continue;const _=s.get(d)||1;l.add(_);const p=t.manifest.agents?.find(b=>b.agent_id===g)?.display_name||g,m=o.get(g)||{id:g,name:p,marks:[]},v=On(d.refs?.event_id)||`${d.type}:${d.tick}`,S=h==="veto"?"Veto":h==="keep"?"New best":h==="gate"?"Gate blocked":h==="scout"?"Search":h==="memory"?"Memory recall":h==="boredom"?"Boredom shift":h==="critic"?"Critic review":h==="idea"?"Idea":"Evaluation";m.marks.push({tick:d.tick,round:_,kind:h,label:S,why:On(d.message||d.payload?.why||d.payload?.reason),eventId:v}),o.set(g,m)}const c=[...l].flatMap(d=>{const h=t.events.filter(m=>m.type==="experiment.finished"&&n.get(m)===d),g=t.events.find(m=>["round.closed","round.finished","round.completed"].includes(m.type)&&n.get(m)===d),_=t.events.find(m=>m.type==="round.started"&&(n.get(m)||0)>d),p=g?.tick??h.at(-1)?.tick??_?.tick;return p!=null&&p<=e?[{round:d,tick:p}]:[]}),u=[...l].sort((d,h)=>d-h),f=u.map((d,h)=>{const g=t.events.find(b=>b.type==="round.started"&&n.get(b)===d),_=t.events.filter(b=>n.get(b)===d),p=g?.tick??_[0]?.tick??0,m=t.events.find(b=>["round.closed","round.finished","round.completed"].includes(b.type)&&n.get(b)===d),v=t.events.filter(b=>b.type==="experiment.finished"&&n.get(b)===d).at(-1),S=u[h+1]==null?void 0:t.events.find(b=>b.type==="round.started"&&n.get(b)===u[h+1]);return{round:d,startTick:p,endTick:m?.tick??v?.tick??S?.tick??t.manifest.totalTicks}});return{rounds:u,lanes:[...o.values()],roundCloses:c,roundSpans:f}}function XC(t,e){if(!t)return{};const n=kg(t,e);let i=0;if(n.some(g=>["run.finished","run.stopped"].includes(g.type))||["finished","stopped"].includes(t.manifest.status||"")&&e>=t.manifest.totalTicks)return Object.fromEntries((t.manifest.agents||[]).map(g=>[g.agent_id,"idle"]));for(const g of n)g.type==="round.started"&&(i=Number(g.round||g.payload?.round)||i+1);const s=n.filter(g=>(Number(g.round||g.payload?.round)||i)===i),a=new Set(s.filter(g=>g.type==="agent.assigned").map(g=>On(g.agentId||g.payload?.agent_id)).filter(Boolean)),o=s.filter(g=>["llm.called","hypothesis.proposed"].includes(g.type)&&On(g.agentId||g.payload?.agent_id)),l=s.filter(g=>g.type==="agent.assigned"&&On(g.agentId||g.payload?.agent_id)),c=o.at(-1),u=l.at(-1),f=c&&(!u||c.tick>=u.tick)?On(c.agentId||c.payload?.agent_id):"",d=u&&(!c||u.tick>c.tick)?On(u.agentId||u.payload?.agent_id):"",h={};for(const g of t.manifest.agents||[])h[g.agent_id]="idle";for(const g of a){const _=o.some(m=>On(m.agentId||m.payload?.agent_id)===g),p=s.some(m=>m.type==="experiment.finished"&&On(m.agentId||m.payload?.agent_id)===g);h[g]=g===d?"waiting":g===f&&!p?"active":_||p?"done":"waiting"}if(n.some(g=>["round.closed","round.finished","round.completed"].includes(g.type)&&(Number(g.round||g.payload?.round)||i)===i)||n.some(g=>g.type==="round.started"&&(Number(g.round||g.payload?.round)||i)>i))for(const g of a)h[g]="done";return h}document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target.closest?.("[data-orch-tick]");e&&(t.preventDefault(),e.dispatchEvent(new MouseEvent("click",{bubbles:!0})))});const ee=t=>document.getElementById(t),Fa=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]),Me=t=>Fa(za(String(t??""))),Cs=ee("console"),vt=ee("conversation"),wd=ee("guide"),rr=ee("inspector"),tr=ee("results-dialog");let we,Lt,ei,re=null,nt=null,Og=[],Er=null,nr="",Ee=0,it=!1,kt=!1,jo=JS,lr="highlights",vs=0,Td=[],Ni=null,Nl="",Ei="",Ot="",Ri=!1,Tn=!1,Ki="",gi="",ep=0,Ps=!1,wa=!1,tp=0,$n="",Iu=!1,Fg=!1,Po=!1,np=!1,Nr=null,xn=0,oi=0,ga=!1,Io={x:0,y:0},Xi=null,ip,rp,gl,Dr=0,zg=new Map,_l=!1,Bg=!1,Lu=!1,cs=null;const Nu=MM(),$g=new URLSearchParams(location.search);let wn=$g.get("cinema")==="1";const ZC=wn&&$g.get("capture")==="1";let Rr=null,Hg=0;wn&&document.body.classList.add("cinema");function za(t){return vR(t,zg)}function Gg(){const t=_d(re?.manifest,re||void 0),e=ee("provenance-badge"),n=[t.label,...t.chips].join(" · "),i=`<span class="provenance-badge-label">${Me(t.label)}</span>${t.chips.map(r=>`<span class="provenance-badge-chip">${Me(r)}</span>`).join("")}`;e.dataset.tone=t.tone,e.hidden=!re,e.setAttribute("aria-label",n),e.innerHTML!==i&&(e.innerHTML=i)}Gg();function qC(t){zg=new Map(Object.entries(t.manifest.aliasMap||{}))}let Vg=new Map,Yo=[];const yn=new Set;function Va(t){return XR(t,re?.manifest.agents?.find(e=>e.agent_id===t.id))}function Wg(t){const e=Va(t);return`<span class="agent-avatar" data-family="${e.familyKey}"${e.color?` style="--agent-color:${e.color}"`:""}>${Me(e.initial)}</span>`}function Xg(t,e=!0){const n=Va(t),i=re&&!n.staff?_g(gg(re.events,t.id,Ee),n.familyLabel):"";return[n.familyLabel,n.staff?"":i||(t.role!==t.type?hg(t.role):""),e?t.standby?"standing by":bd(t.activity||t.state):""].filter(Boolean).map(r=>Fa(r)).join(" · ")}function Zg(t){if(Va(t).staff)return"";const e=t.boredom==null?null:Ui(t.boredom),n=Or(t.boredomSpectrum?.regime);return`<span class="row-meter" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100"${e==null?"":` aria-valuenow="${Math.round(e)}"`}><i style="width:${e??0}%;background:${e==null?"transparent":ks(e)}"></i><b>${e==null?"not measured":`bored ${Math.round(e)}%`}</b>${n.label?`<em class="regime-chip" data-tone="${n.tone}" title="${Me(n.description)}">${Me(n.label)}</em>`:""}</span>`}function jC(t){const e=t.boredom==null?null:Ui(t.boredom);return`<span class="strip-meter"><i style="width:${e??0}%;background:${e==null?"transparent":ks(e)}"></i></span>`}function qg(t,e,n){for(const[i,r]of Object.entries(VR(e,n)))r==null?t.removeAttribute(i):t.getAttribute(i)!==r&&t.setAttribute(i,r)}function YC(){const t=JR(re?.manifest.agents||[]);ee("whos-who").hidden=!t.length,ee("whos-who").innerHTML=t.length?`<summary>Who's who</summary><dl>${t.map(e=>`<dt>${Fa(e.title)}<small>${Me(e.names.join(", "))}</small></dt><dd>${Fa(e.does)}</dd>`).join("")}</dl>`:""}function _a(){return re?.manifest.live?"Published":"Recorded"}function Ad(){return vg(re?.manifest,Ee,it)}function sp(t,e){const n=$s(t.agentId,"");if(t.kind==="regime"){ir(`${t.title}${n?` · ${n}`:""}: ${t.detail}`);return}const i=ee("moment");i.dataset.kind=t.kind,i.innerHTML=`<span>${t.kind==="award"?"IG NOBEL COMMITTEE":"DISCOVERY · TICK "+t.tick}</span><strong>${Me(t.title)}</strong><p>${Me([n,t.detail].filter(Boolean).join(" · "))}${e?` · +${e} more`:""}</p>`,i.hidden=!1,document.body.classList.add("lab-moment"),clearTimeout(rp),rp=setTimeout(()=>{i.hidden=!0,document.body.classList.remove("lab-moment")},5200)}function Rd(){if(re){if(Ee>Dr){const t=ng(re.events,Dr,Ee,re.manifest.metric),e=t.filter(n=>n.kind!=="regime");e.length?sp(e.at(-1),e.length-1):t.length&&sp(t.at(-1),0)}Dr=Ee}}function en(){return Mg(nt?.agents||[],Ee,Vg)}function ir(t){ee("toast").textContent=t,ee("toast").hidden=!1,clearTimeout(ip),ip=setTimeout(()=>ee("toast").hidden=!0,4e3)}function Nn(){document.exitPointerLock?.(),yn.clear()}function dn(){return document.querySelector("dialog[open]")!==null||Ni!==null}function jg(t,e,n){const i=Array.from(t.querySelectorAll(n)),r=new Set(e);for(const s of i)r.has(s)||s.remove();if(i.length!==e.length||i.some((s,a)=>s!==e[a]))for(const s of e)t.appendChild(s)}function KC(t,e){const n=t.children[1],i=n.querySelector(".row-meter");if(Va(e).staff){i?.remove();return}const r=e.boredom==null?null:Ui(e.boredom);let s=i;if(!s){const h=document.createElement("template");h.innerHTML=Zg(e),s=h.content.firstElementChild,n.appendChild(s)}const a=(h,g)=>{s.getAttribute(h)!==g&&s.setAttribute(h,g)};a("aria-label",`${e.name} boredom`),a("aria-valuemin","0"),a("aria-valuemax","100"),r==null?s.removeAttribute("aria-valuenow"):a("aria-valuenow",String(Math.round(r)));const o=s.querySelector("i");o.style.width!==`${r??0}%`&&(o.style.width=`${r??0}%`);const l=r==null?"transparent":ks(r);o.style.background!==l&&(o.style.background=l);const c=s.querySelector("b"),u=r==null?"not measured":`bored ${Math.round(r)}%`;c.textContent!==u&&(c.textContent=u);const f=Or(e.boredomSpectrum?.regime);let d=s.querySelector(".regime-chip");if(!f.label){d?.remove();return}d||(d=document.createElement("em"),d.className="regime-chip",s.appendChild(d)),d.dataset.tone!==f.tone&&(d.dataset.tone=f.tone),d.title!==f.description&&(d.title=f.description),d.textContent!==f.label&&(d.textContent=f.label)}function JC(t){const e=document.createElement("button");return e.type="button",e.className="agent-row",e.dataset.agent=t.id,e.innerHTML=`${Wg(t)}<span><strong></strong><small></small>${Zg(t)}</span><i></i>`,e}function QC(t,e){t.dataset.agent=e.id,t.disabled=!!e.standby,e.standby?t.dataset.standby="true":delete t.dataset.standby;const n=Va(e),i=t.querySelector(".agent-avatar");i.dataset.family!==n.familyKey&&(i.dataset.family=n.familyKey),i.textContent!==n.initial&&(i.textContent=n.initial);const r=n.color||"";i.style.getPropertyValue("--agent-color")!==r&&(r?i.style.setProperty("--agent-color",r):i.style.removeProperty("--agent-color"));const s=t.querySelector("strong");s.textContent!==e.name&&(s.textContent=e.name);const a=t.querySelector("small"),o=Xg(e);a.innerHTML!==o&&(a.innerHTML=o),KC(t,e)}function e2(){const t=ee("agent-list"),e=KR(nt?.agents||[],en());if(!e.length){const r=Array.from(t.querySelectorAll(".agent-row[data-agent]"));for(const s of r)s.remove();t.querySelector(".empty")||(t.innerHTML='<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>');return}t.querySelector(".empty")?.remove();const n=Array.from(t.querySelectorAll(".agent-row[data-agent]")),i=yg(e,n,r=>r.id,r=>r.dataset.agent||"",JC,QC);jg(t,i,".agent-row[data-agent]")}function Is(t){document.body.classList.toggle("bar-collapsed",t),ee("collapse-bar").setAttribute("aria-expanded",String(!t)),ee("collapse-bar").innerHTML=`<span aria-hidden="true">${t?"▴":"▾"}</span><span>${t?"More":"Less"}</span>`,ee("collapse-bar").title=t?"Expand playback panel":"Collapse playback panel",ee("collapse-bar").setAttribute("aria-label",t?"Expand playback panel":"Collapse playback panel"),ee("tick-label").textContent=t?re?.manifest.continuous?"Continuous session":`Round ${nt?.round??1}`:`Round ${nt?.round??0} · tick ${Math.floor(Ee)} / ${re?.manifest.totalTicks||0}`}function t2(){const t=Cs.open||rr.open?"open-console":wd.open?"open-guide":vt.open?"team-drawer":Ni;document.querySelectorAll(".sidebar button").forEach(e=>e.setAttribute("aria-pressed",String((e.dataset.drawer||e.id)===t)))}function Nt(){t2();const t=dn(),e=t||Tn;document.body.classList.toggle("dock-auto-hidden",t),document.body.classList.toggle("context-panel-open",t),document.body.classList.toggle("dock-context-open",e),e&&!Po&&(np=document.body.classList.contains("bar-collapsed"),Po=!0),e?Is(!0):Po&&(Po=!1,Is(np)),ee("collapse-bar").disabled=e,Dl()}document.querySelectorAll("dialog").forEach(t=>t.addEventListener("close",Nt));function _i(){Ni&&(ee(Ni).hidden=!0),Ni=null,document.querySelectorAll("[data-drawer]").forEach(t=>t.setAttribute("aria-expanded","false")),ee("open-about").setAttribute("aria-expanded","false"),Nt()}for(const t of document.querySelectorAll("[data-drawer]"))t.onclick=()=>{const e=t.dataset.drawer,n=Ni!==e;Nn(),vt.close(),_i(),n&&(it=!1,Zt(),Ni=e,ee(e).hidden=!1,t.setAttribute("aria-expanded","true"),e==="orchestration-drawer"&&r2(),Nt())};for(const t of document.querySelectorAll("[data-close-drawer]"))t.onclick=_i;function Wa(t){if(kt=t,Ot="",Ri=!1,Tn=!1,Ki="",gi="",Nt(),Nn(),we.setOverview?.(!t),ee("crosshair").hidden=!t,document.body.classList.toggle("playing",t),t){it=!1,we.camera.position.set(0,1.69,9.5);const e=new Hn().setFromQuaternion(we.camera.quaternion,"YXZ");xn=e.y,oi=e.x}else{const e=we.camera.quaternion.clone();ei.reset(),we.camera.quaternion.copy(e),ei.syncFromCamera()}Zt(),Kg()}function Zt(){if(re){const r=pR(re.manifest);ee("overview-eyebrow").textContent=r.eyebrow,ee("run-callout").textContent=r.callout,ee("replay-kicker").textContent=it?"Replaying recorded run":"Recorded run",ee("connection").hidden=ui,ee("header-actions").hidden=!1,ee("open-results").textContent="Results",n2();const s=nt?.boredom==null?null:Math.round(Ui(nt.boredom)),a=ee("boredom-gauge");qg(a,s,"Swarm boredom"),a.querySelector("span").style.width=`${s??0}%`,a.dataset.tone=s==null?"unknown":s>=65?"high":s>=35?"medium":"low",a.title=s==null?"Swarm boredom: not measured":`Swarm boredom: ${s}%`}ee("open-results").hidden=!re||!ui;const t=nC(re?.manifest,Ee,it,re?.events||[]);ee("go-live").hidden=t.hidden,ee("go-live").textContent=t.label,ee("go-live").classList.toggle("at-edge",t.atEdge),ee("go-live").setAttribute("aria-label",t.atEdge?"Following live":"Jump to the live edge"),ee("play").textContent=it?"Ⅱ Pause":"▶ Play",ee("play").setAttribute("aria-label",it?"Pause":"Play"),ee("camera-mode").textContent=kt?"Lab view ↗":"Walk inside ↗",ee("camera-mode").disabled=!re||it,ee("timeline").value=String(Ee),ee("tick-label").textContent=document.body.classList.contains("bar-collapsed")?re?.manifest.continuous?"Continuous session":`Round ${nt?.round??1}`:`Round ${nt?.round??0} · tick ${Math.floor(Ee)} / ${re?.manifest.totalTicks||0}`,ee("timeline").setAttribute("aria-valuetext",`Round ${nt?.round??1} of ${nt?.config.rounds??re?.manifest.time?.rounds??0}`),ee("replay-mode").value=lr;const e=re&&Ga(re.events,Ee),n=ee("activity-caption"),i=e?.refs?.experiment_id;n.textContent=it?"Replaying recorded run":e?za(YR({...e,message:ml(e,Ba())||e.message},$s(e.agentId,""))):"Recorded run",i?(n.dataset.experiment=i,n.title="Inspect this experiment",n.tabIndex=0,n.setAttribute("role","button")):(delete n.dataset.experiment,n.removeAttribute("title"),n.removeAttribute("tabindex"),n.removeAttribute("role"))}function n2(){if(ee("selected-run-summary").textContent=re?AR(re.manifest):"",!re)return;const t=re.manifest.time?.rounds||nt?.config.rounds||0,e=String(nt?.regime||"").toUpperCase(),n=/BOREDOM_SNAP/.test(e)?"Bored: trying new directions":/PARADIGM_BREAKOUT/.test(e)?"Breakout":"Refining";ee("run-meta").innerHTML=`<span class="status-chip">${it?"Replaying recorded run":"Recorded run"}</span><span>${re.manifest.continuous?"Continuous session":`Round ${nt?.round??1}${t?` of ${t}`:""}`}</span><span>${n}</span>`}function ti(t){re&&(Ee=Math.max(0,Math.min(re.manifest.totalTicks,t)),nt=Ga(re.frames,Ee)?.snapshot||null,Zt(),Cd(),Cs.open&&Ld(),vt.open&&Nd(),rr.open&&s0(),tr.open&&Du(),!wn&&!Iu&&Rs(re,Ee)&&(Iu=!0,Du(),tr.open||(tr.showModal(),tr.scrollTop=0,Nt())))}function Cd(){ee("agent-count").textContent=`${en().length} AGENTS`,e2(),ee("run-label").textContent=nt?re?.manifest.continuous?"Continuous session":`Round ${nt.round}${nt.config.rounds?` of ${nt.config.rounds}`:""}`:"Waiting for the recorded run",Kg()}function i2(t){const e=document.createElement("button");return e.type="button",e.dataset.agent=t.agent.id,e.dataset.kind=t.kind,t.kind==="staff"?e.className="status-tile status-role":(e.className="status-tile",e.innerHTML=`<strong class="status-tile-name"></strong>${jC(t.agent)}<span class="tile-metric"></span>`),Yg(e,t),e}function Yg(t,e){const n=e.agent;if(t.dataset.agent=n.id,t.dataset.kind!==e.kind&&(t.dataset.kind=e.kind),e.kind==="staff"){t.className!=="status-tile status-role"&&(t.className="status-tile status-role");const h=e.help||n.name,g=`Focus ${n.name}: ${e.label}`;t.title!==h&&(t.title=h),t.getAttribute("aria-label")!==g&&t.setAttribute("aria-label",g),t.textContent!==e.label&&(t.textContent=e.label);return}t.className!=="status-tile"&&(t.className="status-tile");const i=`Focus ${n.name}: ${e.metricText}`;t.getAttribute("aria-label")!==i&&t.setAttribute("aria-label",i);const r=t.querySelector(".status-tile-name");r.textContent!==n.name&&(r.textContent=n.name);const s=t.querySelector(".strip-meter"),a=n.boredom==null?null:Ui(n.boredom);qg(s,a,`${n.name} boredom`);const o=s.querySelector("i"),l=`${a??0}%`,c=a==null?"transparent":ks(a);o.style.width!==l&&(o.style.width=l),o.style.background!==c&&(o.style.background=c);const u=t.querySelector(".tile-metric");u.textContent!==e.metricText&&(u.textContent=e.metricText),e.metricTitle?u.title!==e.metricTitle&&(u.title=e.metricTitle):u.hasAttribute("title")&&u.removeAttribute("title");const f={active:"Active turn",waiting:"Waiting",done:"Done this round"};let d=t.querySelector(".turn-badge");if(!e.turn){d?.remove();return}d||(d=document.createElement("small"),d.className="turn-badge",t.appendChild(d)),d.dataset.turn!==e.turn&&(d.dataset.turn=e.turn),d.textContent!==f[e.turn]&&(d.textContent=f[e.turn])}function Kg(){const t=ee("status-strip");if(!re||!nt||kt||document.body.classList.contains("prestart")){t.hidden=!0;return}const e=en().filter(p=>p.type!=="baseline"),n=nt.results,i=nt.metric,r=Oa(re.manifest,re),s=e.filter(p=>p.type!=="conductor"&&p.type!=="critic").length,a=n.filter(p=>En(p.status,p.kind)!=="baseline"&&typeof p.value=="number"&&Number.isFinite(p.value)),o=i.name==="replicated_findings"?"maximize":i.direction,l=a.length?o==="maximize"?Math.max(...a.map(p=>p.value)):Math.min(...a.map(p=>p.value)):nt.value,c=n.find(p=>En(p.status,p.kind)==="baseline"&&typeof p.value=="number")?.value??null,u={active:"Active turn",waiting:"Waiting",done:"Done this round",idle:"Idle"},f=XC(re,Ee),d=e.map(p=>{if(p.type==="conductor"||p.type==="critic")return{agent:p,kind:"staff",label:SC(p.type,re.events,Ee),help:MC(p.type,re.events,Ee)};const m=wC(n,p.id,p.name,i,l,c),v=r?yC(n,p.id,p.name):null,S=f[p.id];return{agent:p,kind:"scientist",metricText:v?bC(v):EC(m.best),metricTitle:v?xC:void 0,turn:S&&S!=="idle"?u[S]:void 0}}),h=Array.from(t.querySelectorAll(".status-tile[data-agent]")),g=yg(d,h,p=>p.agent.id,p=>p.dataset.agent||"",i2,Yg);jg(t,g,".status-tile[data-agent]");let _=t.querySelector(".status-scroll-hint");s?(_||(_=document.createElement("span"),_.className="status-scroll-hint",_.setAttribute("aria-hidden","true"),t.appendChild(_)),_.textContent!=="›"&&(_.textContent="›"),t.lastElementChild!==_&&t.appendChild(_)):_?.remove(),t.hidden=!e.length,Dl()}function r2(){const t=ee("orchestration-content");if(!re){t.innerHTML="<p>No run loaded.</p>";return}const e=WC(re,Ee),n=860,i=40,r=30,s=r+e.lanes.length*i+12,a=158,o=n-a-24,l=o/Math.max(1,e.rounds.length),c=(m,v)=>a+GC(e.roundSpans,m,v)*l,u={idea:"#e4c986",critic:"#91b4d4",veto:"#e77872",scout:"#82c5ae",memory:"#b39bdb",boredom:"#dd9b59",evaluation:"#a8b6b7",keep:"#77bb69",gate:"#e77872"},f=e.lanes.map((m,v)=>{const S=r+v*i,b=HC(m.marks).map(T=>{const A=Math.max(0,e.rounds.indexOf(T.round)),y=a+A*l+4,E=a+(A+1)*l-4,k=T.visible.map(C=>c(C.tick,C.round));for(let C=1;C<k.length;C++)k[C]=Math.max(k[C],k[C-1]+8.5);if(k.length){const C=k.at(-1)-E;if(C>0)for(let X=0;X<k.length;X++)k[X]-=C;const W=y-k[0];if(W>0)for(let X=0;X<k.length;X++)k[X]+=W}const I=T.visible.map((C,W)=>`<g class="orch-mark" role="button" tabindex="0" data-orch-tick="${C.tick}" data-orch-agent="${Me(m.id)}" aria-label="${Me(C.label)} by ${Me(m.name)} at tick ${C.tick}"><title>${Me(C.label)}${C.why?`: ${Me(C.why)}`:""} · tick ${C.tick}</title><circle cx="${k[W]}" cy="${S}" r="${C.kind==="veto"?5:4}" fill="${u[C.kind]}" class="orch-dot ${C.kind}"/></g>`).join(""),R=T.hidden[0],H=R?Math.max(y+10,Math.min(E-10,c(R.tick,T.round))):0,B=R?`<g class="orch-overflow" role="button" tabindex="0" data-orch-tick="${R.tick}" data-orch-agent="${Me(m.id)}" aria-label="${T.hidden.length} more events in round ${T.round}; jump to ${Me(R.label)} at tick ${R.tick}"><title>${T.hidden.length} more events in round ${T.round}</title><rect x="${H-10}" y="${S+14}" width="20" height="14" rx="7"/><text x="${H}" y="${S+24}" text-anchor="middle">+${T.hidden.length}</text></g>`:"";return`${I}${B}`}).join("");return`<text x="8" y="${S+4}" class="orch-name">${Me(m.name)}</text><line x1="${a}" y1="${S}" x2="${n-12}" y2="${S}" class="orch-lane"/>${b}`}).join(""),d=e.roundCloses.filter(m=>m.tick>0).map(m=>`<line x1="${c(m.tick,m.round)}" y1="${r-20}" x2="${c(m.tick,m.round)}" y2="${s}" class="orch-close"><title>Round ${m.round} closed</title></line>`).join(""),h=e.rounds.map((m,v)=>`<text x="${a+(v+.5)*l}" y="13" class="orch-round">${re?.manifest.continuous?"Session":`Round ${m}`}</text>`).join(""),g=`<line x1="${c(Ee)}" y1="${r-20}" x2="${c(Ee)}" y2="${s}" class="orch-playhead"/>`,_={breakout:"Breakout conditions assign three refining slots and one exploring slot.",boredom:"A boredom shift assigns one refining slot and three exploring slots; the novelty screen rejects close repeats.",keep:"Kept means retained as a current best; baseline is the unmodified reference."},p=[["idea","Idea"],["scout","Search"],["memory","Memory"],["boredom","Boredom shift"],["critic","Review"],["veto","Veto"],["keep","Kept"]].map(([m,v])=>`<span${_[m]?` title="${Me(_[m])}"`:""}><i style="--mark:${u[m]}"></i>${v}</span>`).join("")+`<span class="orchestration-legend-note"><span title="${Me(_.breakout)}">Breakout</span>: 3 refine + 1 explore; <span title="${Me(_.boredom)}">Boredom shift</span>: 1 refine + 3 explore; close repeats are screened out.</span>`;t.innerHTML=e.lanes.length?`<div class="orchestration-scroll"><svg class="orchestration-svg" viewBox="0 0 ${n} ${s}" role="img" aria-label="Orchestration lanes through tick ${Math.floor(Ee)}">${h}${d}${f}${g}</svg></div><div class="orchestration-legend">${p}</div><p class="orchestration-hint">Select a mark to jump to that event and focus its scientist.</p>`:"<p>No orchestration events by this moment.</p>"}function Du(){if(!re){ee("results-content").innerHTML="<p>No results available.</p>";return}const t=Rs(re,Ee)?$C(re,Ee,Me)+LR(re.igjudge,Me):"";if(As(re.manifest,re)){const u=Cu(re),f=dg(re,Ee),d=f.some(h=>h.score>=.5&&!h.rejected&&h.award&&!/committee/i.test(h.award));if(Oa(re.manifest,re)||!d){ee("results-title").textContent="What the swarm found",ee("results-content").innerHTML=t+Vh(Pr,re,Me,u,!!t);return}}const e=Pr.results,n=_d(re.manifest,re),i=`<div class="results-provenance" data-tone="${n.tone}"><strong>${Me(n.label)}</strong>${n.chips.map(u=>`<span>${Me(u)}</span>`).join("")}</div>`;if(As(re.manifest,re)){const u=Rs(re,Ee)||Ee>=re.manifest.totalTicks||re.events.some(v=>["run.finished","run.stopped"].includes(v.type)&&v.tick<=Ee),f=Cu(re,Ee),d=UC(re.entities?.studies,re.events,Ee,u),h=f.awards.length?`<p class="podium-award-count">${Me(e.awardCount.replace("{N}",String(f.awards.length)))}</p>`:Oa(re.manifest,re)?`<p class="podium-empty">${Me(e.noAwards)}${ig(re.manifest,re)?Me(e.creditErrorSuffix):""}</p>`:`<p class="podium-empty">${Me(Mc.committeePending)}</p>`,g=e.countLine.replace("{N}",String(f.registered)).replace("{M}",String(f.confirmed)).replace("{K}",String(f.underCurrentRules)),_=d.entries.map(v=>`<li>${v.rank?`<b>#${v.rank}</b> `:""}${Me(v.headline||v.studyId)}${v.unscored?" · Unscored":` · score ${Me(v.score)}`}${v.rho!=null?` · ρ ${v.rho.toFixed(3)}`:""}${v.p!=null?` · p ${pl(v.p)}`:""}</li>`).join("");ee("results-title").textContent="What the swarm found";const p=d.status==="awaiting"&&_?`<details class="unscored-studies"><summary>${d.confirmed} confirmed studies, unscored</summary><ul class="podium-list">${_}</ul></details>`:_?`<ul class="podium-list">${_}</ul>`:"",m=kC(re,Me);ee("results-content").innerHTML=`${t}${Vh(Pr,re,Me,f,!!t)}${i}<h2>In-run committee results</h2>${h}<p class="results-count">${Me(g)}</p>${m}${p}<details class="judging-details"><summary>${Me(Mc.title)}</summary><ol>${Mc.steps.map(v=>`<li>${Me(v)}</li>`).join("")}</ol></details>`;return}const r=RC(re,Ee);if(!r){ee("results-content").innerHTML="<p>No results available.</p>";return}const s=u=>u==null?"–":Lr(u),a=u=>u?`${u.low.toFixed(2)}–${u.high.toFixed(2)}`:"",o=u=>u.fraction||s(u.score??u.loss),l=r.heldOut?`<section class="held-out"><h3>Held-out test</h3><p>Baseline ${o(r.heldOut.baseline)} → best ${o(r.heldOut.best)}</p>${r.heldOut.best.wilson?`<p>95% Wilson CI: ${a(r.heldOut.best.wilson)} (baseline ${a(r.heldOut.baseline.wilson)})</p>`:""}${r.heldOut.proxyNote?`<p>${Me(r.heldOut.proxyNote)}</p>`:""}${r.heldOut.referenceNote?`<p>${Me(r.heldOut.referenceNote)}</p>`:""}</section>`:'<p class="no-held-out">no held-out split for this task</p>',c=r.delta==null?"":` · ${AC(r.delta,s)}`;ee("results-title").textContent=`RUN RESULTS · ${r.status.toUpperCase()}`,ee("results-content").innerHTML=`${i}<h2>${Me(Pl(re.manifest))}</h2><p class="result-metric">${Me(r.metric)} · ${r.direction==="maximize"?"higher is better":"lower is better"}</p><p class="result-baseline">Baseline ${s(r.baseline)} → best dev result ${s(r.best)}${c}</p>${r.winner?.commit?`<section class="result-winner"><h3>Winning change</h3><p><code>${Me(r.winner.commit)}</code> · ${Me(r.winner.agent)}</p><p class="result-winner-description">${Me(r.winner.description)}</p></section>`:"<p>Baseline is the best result so far.</p>"}${l}<p class="result-totals">Kept ${r.totals.kept} · discarded ${r.totals.discarded} · crashed ${r.totals.crashed}</p>${r.proxyNote&&!r.heldOut?.proxyNote?`<p class="proxy-note">${Me(r.proxyNote)}</p>`:""}${r.referenceNote&&!r.heldOut?.referenceNote?`<p class="reference-note">${Me(r.referenceNote)}</p>`:""}`}function Jg(){const t=ee("status-strip");t.dataset.scrollable=String(t.scrollWidth>t.clientWidth+1&&t.scrollLeft+t.clientWidth<t.scrollWidth-1)}function Dl(){const t=document.querySelector(".replay-bar"),e=ee("status-strip");if(!t||!e)return;const n=t.getBoundingClientRect();if(innerHeight<=500&&innerWidth>innerHeight){const i=document.querySelector(".sidebar"),r=document.querySelector("header"),s=Math.max(8,(i?.getBoundingClientRect().right??0)+8);e.style.left=`${s}px`,e.style.width=`${Math.max(0,innerWidth-s-8)}px`,e.style.top=`${Math.max(68,(r?.getBoundingClientRect().bottom??58)+8)}px`}else{const i=e.getBoundingClientRect().height||56;e.style.left=`${n.left}px`,e.style.width=`${n.width}px`,e.style.top=`${Math.max(0,n.top-i-8)}px`}e.style.bottom="auto",e.style.transform="none",Jg()}ee("status-strip").addEventListener("scroll",Jg,{passive:!0});ee("replay-intro").addEventListener("close",()=>{ee("play").focus(),Nt()});const ap=document.querySelector(".replay-bar");ap&&new ResizeObserver(Dl).observe(ap);window.addEventListener("resize",Dl);function s2(){const t=ee("proximity");if(!Ot){t.hidden=!0;return}const e=en().find(i=>i.id===Ot);if(!e){t.hidden=!0;return}const n=`${Ot}|${Math.floor(Ee)}|${Tn}`;if(n!==gi){const i=_C({agent:e,recording:re,tick:Ee,metric:nt?.metric,best:nt?.value??null,agentName:$s});if(Uu(t,op(vC(i,Tn,Me))),Tn){const r=Md(re,e.id,e.activity||e.state,Ee,Ba()),s=t.querySelector("[data-bubble-now]");s&&Uu(s,op(Tg(r,{...Ba(),esc:Me},nt?.metric)))}gi=n}t.hidden=!1,o2()}function op(t){const e=document.createElement("template");return e.innerHTML=t,e.content}function Uu(t,e){const n=[...t.childNodes],i=[...e.childNodes];for(i.forEach((r,s)=>{const a=n[s];if(!a){t.appendChild(r.cloneNode(!0));return}if(a.nodeType===Node.TEXT_NODE&&r.nodeType===Node.TEXT_NODE){a.nodeValue!==r.nodeValue&&(a.nodeValue=r.nodeValue);return}if(a instanceof Element&&r instanceof Element&&a.tagName===r.tagName){for(const o of[...a.attributes])r.hasAttribute(o.name)||a.removeAttribute(o.name);for(const o of[...r.attributes])a.getAttribute(o.name)!==o.value&&a.setAttribute(o.name,o.value);Uu(a,a2(r));return}t.replaceChild(r.cloneNode(!0),a)});t.childNodes.length>i.length;)t.lastChild&&t.removeChild(t.lastChild)}function a2(t){const e=document.createDocumentFragment();return e.append(...[...t.childNodes].map(n=>n.cloneNode(!0))),e}function o2(){const t=ee("proximity");if(t.hidden)return;const e=we.agentPositions?.().find(p=>p.id===Ot);if(!e){t.hidden=!0;return}const n=e.position.clone().add(new D(0,2.35,0));if(we.camera.updateMatrixWorld(),n.clone().applyMatrix4(we.camera.matrixWorldInverse).z>=0){t.style.visibility="hidden";return}n.project(we.camera);const r=(n.x+1)*innerWidth/2,s=(1-n.y)*innerHeight/2,a=t.getBoundingClientRect(),o=12,l=Et.clamp(r-a.width/2,o,Math.max(o,innerWidth-a.width-o)),c=Math.max(o,innerHeight-a.height-o),u=[document.querySelector("header"),ee("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar")].filter(p=>!!p&&!p.hidden&&getComputedStyle(p).display!=="none").map(p=>p.getBoundingClientRect()).filter(p=>p.width>0&&p.height>0),f=[s-a.height-22,s+22,...u.flatMap(p=>[p.bottom+o,p.top-a.height-o]),o,c].map(p=>Et.clamp(p,o,c)),d=(p,m)=>l<m.right&&l+a.width>m.left&&p<m.bottom&&p+a.height>m.top,h=p=>u.reduce((m,v)=>m+Math.max(0,Math.min(p+a.height,v.bottom)-Math.max(p,v.top))*Math.max(0,Math.min(l+a.width,v.right)-Math.max(l,v.left)),0),_=f.find(p=>!u.some(m=>d(p,m)))??f.sort((p,m)=>h(p)-h(m))[0];t.style.visibility="visible",t.style.left=`${l}px`,t.style.top=`${_}px`}function Qg(t,e=!1){Ot=t,Ri=!0,Tn=!1,Ki="",gi="",Nt(),e||Pd("scientist")}function l2(){try{return["scientist","scrub"].filter(t=>localStorage.getItem(`lab.coach.${t}`))}catch{return[]}}function c2(){try{return localStorage.getItem("lab.coach.dismissed")==="1"}catch{return!1}}function u2(){const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(gl),Nr?.(),Nr=null;try{localStorage.setItem("lab.coach.dismissed","1")}catch{}$n="done",ee("coach-mark").hidden=!0};t.forEach(n=>window.addEventListener(n,e,!0)),Nr=()=>t.forEach(n=>window.removeEventListener(n,e,!0))}function vl(){if(dn()||c2()){ee("coach-mark").hidden=!0;return}const t=CM(l2());if(t==="scientist"&&innerHeight<=500&&!document.body.classList.contains("bar-collapsed")){$n="done",ee("coach-mark").hidden=!0;return}if(!t){$n="done",ee("coach-mark").hidden=!0;return}$n=t;try{localStorage.setItem(`lab.coach.${t}`,"1")}catch{}const e=t==="scientist"?g0(matchMedia("(any-pointer:coarse)").matches):"Drag to scrub";ee("coach-mark").dataset.coach=t,ee("coach-mark").innerHTML=`<span>${e}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`,ee("coach-mark").hidden=!1,u2(),clearTimeout(gl),gl=setTimeout(()=>{Nr?.(),Nr=null,$n="done",ee("coach-mark").hidden=!0},8e3)}function Pd(t){$n===t&&(clearTimeout(gl),Nr?.(),Nr=null,$n="",ee("coach-mark").hidden=!0,vl())}function d2(){const t=ee("coach-mark");if(t.hidden||$n!=="scientist")return;const e=en().find(v=>!Ls(v)),n=e&&we.agentPositions?.().find(v=>v.id===e.id);if(!n)return;const i=n.position.clone().add(new D(0,1.6,0));i.project(we.camera);const r=(i.x+1)*innerWidth/2;(1-i.y)*innerHeight/2;const s=t.getBoundingClientRect(),a=innerHeight<=500?72:80,o=v=>!!v&&!v.hidden&&getComputedStyle(v).display!=="none"&&getComputedStyle(v).visibility!=="hidden",l=[document.querySelector("header"),ee("status-strip"),document.querySelector(".replay-bar"),document.querySelector(".sidebar"),ee("proximity")].filter(o).map(v=>v.getBoundingClientRect()).filter(v=>v.width>0&&v.height>0);we.camera.updateMatrixWorld();const c=new Set(en().filter(v=>!Ls(v)).map(v=>v.id));for(const v of we.agentPositions?.()||[]){if(!c.has(v.id))continue;const S=[-.9,.9].flatMap(b=>[.15,3.1].flatMap(T=>[-.55,.55].map(A=>new D(v.position.x+b,v.position.y+T,v.position.z+A).project(we.camera)))).filter(b=>b.z>=-1&&b.z<=1);if(S.length){const b=Math.min(...S.map(E=>(E.x+1)*innerWidth/2)),T=Math.max(...S.map(E=>(E.x+1)*innerWidth/2)),A=Math.min(...S.map(E=>(1-E.y)*innerHeight/2)),y=Math.max(...S.map(E=>(1-E.y)*innerHeight/2));T>0&&b<innerWidth&&y>0&&A<innerHeight&&l.push(new DOMRect(b,A,T-b,y-A))}}const u=Et.clamp(r-s.width/2,8,Math.max(8,innerWidth-s.width-8)),f=document.querySelector("header")?.getBoundingClientRect().bottom??a,d=Et.clamp(f+8,a,Math.max(a,innerHeight-s.height-12)),h=[u,8,innerWidth-s.width-8,...l.flatMap(v=>[v.left-s.width-8,v.right+8])].map(v=>Et.clamp(v,8,Math.max(8,innerWidth-s.width-8))),g=[d,a,innerHeight-s.height-12,...l.flatMap(v=>[v.top-s.height-8,v.bottom+8])].map(v=>Et.clamp(v,a,Math.max(a,innerHeight-s.height-12))),_=(v,S)=>l.reduce((b,T)=>b+Math.max(0,Math.min(v+s.width,T.right)-Math.max(v,T.left))*Math.max(0,Math.min(S+s.height,T.bottom)-Math.max(S,T.top)),0),p=h.flatMap(v=>g.map(S=>({left:v,top:S,overlap:_(v,S),distance:Math.hypot(v-u,S-d)}))).sort((v,S)=>v.overlap-S.overlap||v.distance-S.distance),m=p[0];t.style.right="auto",t.style.transform="none",t.style.left=`${m.left}px`,t.style.top=`${m.top}px`,t.style.bottom="auto"}function e0(){if(!Lu){_l=!0,xl();return}if(!Ps&&(Ps=!0,document.body.classList.remove("prestart"),document.body.dataset.labOpen="true",ee("header-actions").hidden=!1,!(wn&&re&&(f2(),wn)))){if(re){if(re.manifest.live)ti(re.manifest.totalTicks);else{lr="highlights";const t=Sd(re);Td=bg(re,t),vs=0,ti(t)}it=!0,Dr=Ee}{we.camera.fov=innerWidth<760?62:48,we.camera.updateProjectionMatrix();const t=Xa(),e=en().filter(n=>!Ls(n)).flatMap(n=>{const i=t.get(n.id);return i?[new D(i.x,0,i.z)]:[]});e.length?o0(e):(we.camera.position.set(0,2.7,1.2),ei.focus(new D(0,1.3,-2))),Is(!0)}if(Zt(),Cd(),Lt.domElement.focus(),!wn){it=!1,Zt(),KS(ee("replay-intro"),ee("intro-play"),ee("dismiss-replay-intro"),!!re,()=>{it=!0,Zt(),en().length&&vl(),lp()});return}en().length&&vl(),lp()}}function xl(){!_l||!Bg||Lu||(Lu=!0,ee("loading").classList.add("loaded"),setTimeout(()=>{ee("loading").hidden=!0,e0()},380))}function lp(){if(cs||we.camera.aspect<.85)return;const t=["pointerdown","keydown","touchstart"],e=()=>{clearTimeout(cs),cs=null,t.forEach(i=>document.removeEventListener(i,e,!0))};t.forEach(i=>document.addEventListener(i,e,!0));const n=()=>{if(cs=null,!Ps||dn()){t.forEach(o=>document.removeEventListener(o,e,!0));return}const i=new Set((we.agentPositions?.()||[]).map(o=>o.id)),r=en().find(o=>!Ls(o)&&i.has(o.id));if(!r){cs=setTimeout(n,300);return}t.forEach(o=>document.removeEventListener(o,e,!0)),Ud(r.id,!0);let s=!0;const a=()=>{s&&(s=!1,t.forEach(o=>document.removeEventListener(o,a,!0)),Ot===r.id&&Dd())};t.forEach(o=>document.addEventListener(o,a,!0))};cs=setTimeout(n,3e3)}function f2(){if(Rr=vM({world:we,renderer:Lt,recording:re,seek:ti,updateWorld:f0}),!Rr){ir("Cinema mode needs a run with a boredom snap followed by a discovery."),document.body.classList.remove("cinema"),wn=!1;return}it=!1,Id(),ee("loading").hidden=!0,we.camera.fov=46,we.camera.updateProjectionMatrix(),Hg=performance.now(),window.__cinema={ready:!0,duration:Rr.duration,render:t=>Rr.render(t)}}function Id(){wa&&(wa=!1,we.grow?.(1),document.body.classList.remove("world-growing"))}window.addEventListener("pointerdown",Id,{capture:!0});window.addEventListener("keydown",Id,{capture:!0});ee("coach-mark").onclick=t=>{t.target.closest("[data-coach-dismiss]")&&Pd($n)};function h2(){if(!re||!nt)return"<p>No measurements yet.</p>";const t=re.manifest.swarm==="ignobel"&&nt.metric.name==="replicated_findings";return rC(iC(nt.results,re.frames,Ee,!t),nt.metric,Ee,Me)}function t0(t,e=ag(nt?.metric)){const n=ER(t.value,t.reward,e,Lr),i=[t.effectSize==null?"":`Effect ${Me(t.effectSize)}`,t.pValue==null?"":`p = ${Me(t.pValue)}`,n?Me(n):""].filter(Boolean);return i.length?i.join("<br>"):Me(t.value??"–")}function Ld(){const t=nt;if(!t){ee("console-content").innerHTML="<h2>No evidence yet.</h2>";return}const e=re?Il(re.manifest,re):void 0,n=ag(t.metric),i='<p class="evidence-key"><span title="Kept candidates are retained when they improve the current best.">Keep</span> = retained as a current best; <span title="Baseline is the unmodified reference used for comparison.">baseline</span> = the unmodified reference.</p>',r=S=>S.map(b=>{const T=b.kind==="baseline"?"Baseline is the unmodified reference for comparison.":String(b.status).toLowerCase()==="keep"?"Kept because this result improved the current best.":"";return`<tr${b.id?` class="inspectable" data-experiment="${Me(b.id)}" tabindex="0"`:""}><td>${b.round}</td><td>${Me(b.agent)}</td><td><span${T?` title="${Me(T)}"`:""}>${Me(b.status)}</span><br>${Me(b.description)}</td><td>${t0(b,n)}</td></tr>`}).join(""),s=Bs(re,Ee),a=s.length?`<h3>Ig Nobel studies</h3>${Cg(s,xs())}`:"",o=t.results.filter(S=>En(S.status,S.kind)==="crashed"),l=t.results.filter(S=>En(S.status,S.kind)==="kept"),c=t.results.filter(S=>En(S.status,S.kind)!=="crashed"&&En(S.status,S.kind)!=="kept"),u=`<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th title="Run metric value">${Me(n)}</th></tr></thead><tbody>`,f="</tbody></table></div>",d=t.findings.filter(S=>!/swarm_B|per_agent_B|boredom/i.test(S.message)).slice().reverse(),h=d.filter(S=>S.message.trim().length>180||/^\s*[\[{]/.test(S.message)),g=d.filter(S=>!h.includes(S)),_=S=>S.map(b=>`<div class="finding"><b>${Me(en().find(T=>T.id===b.agent)?.name||b.role)}</b><span>${Me(b.message)}</span></div>`).join("")||"<p>No findings yet.</p>",p=ee("console-content"),m=p.querySelector(".evidence-failures")?.open??!1,v=p.querySelector(".evidence-raw")?.open??!1;ee("console-content").innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(Ee)}. Kept findings and candidates appear first; failures remain available below.</p>${a}${i}${e?`<p class="proxy-note"><b>About this benchmark:</b> ${Me(e)}</p>`:""}${h2()}${u}${r([...l,...c])}${f}${o.length?`<details class="evidence-failures"${m?" open":""}><summary>Failures (${o.length})</summary>${u}${r(o)}${f}</details>`:""}<h3>${_a()} findings</h3>${_(g)}${h.length?`<details class="evidence-raw"${v?" open":""}><summary>Full recorded findings (${h.length})</summary>${_(h)}</details>`:""}${p2(!1)}`}function p2(t=!0){const e=t?Bs(re,Ee):[],n=gd(re,Ee),i=tg(r0(),Ee);return`${e.length?`<h3>Ig Nobel studies</h3>${Cg(e,xs())}`:""}${i.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll" role="region" aria-label="Recorded lab dialogue" tabindex="0">${Pg(i,xs())}</div>`:""}${n.length||m2("sources")?`<h3>Research sources</h3>${dC(n,xs())}`:""}`}let un="now";function Ba(){return{name:t=>$s(t),metric:nt?.metric,best:nt?.value??null}}function Nd(){const t=en().find(b=>b.id===Nl);if(!t){vt.close();return}const e=re?_R(re.events,Ee).filter(b=>b.agentId===t.id||b.type==="message.sent"&&(b.payload?.to_agent_id===t.id||b.payload?.to_agent_ids?.includes(t.id))):[],n=un==="idea"?/hypothesis|propos|question|idea/:un==="result"?/experiment|observ|discover|reward|evaluat/:un==="notes"?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/,i=mg,r=e.filter(b=>n.test(b.type)&&i(b.message)).slice(-1),s=un==="doing"?[t.lastMessage,t.lastNote,t.lastObservation,t.lastIdea,t.lastQuestion].find(i):void 0,a=un==="result"&&t.lastResult?`<blockquote>${Me(t.lastResult.description)}<br>${Me(t.lastResult.status)} · ${t0(t.lastResult)}<cite>${_a()} result · available by tick ${Math.floor(Ee)}</cite></blockquote>`:"",o=un==="idea"?[t.lastIdea,t.lastRationale].filter(Boolean).join(`

`):"",l=t.boredom==null?null:Ui(t.boredom),c=re?TM(re.events,t.id,Ee):null,u=Or(c?.regime||t.boredomSpectrum?.regime||t.boredomDetail?.regime),f=wM(c?.components||t.boredomDetail?.components),d=tg(r0(),Ee,t.id),h=un==="result"||un==="doing"?t.lastResult?.id&&ka(re,t.lastResult.id,Ee)?t.lastResult.id:t.focus?.experiment_id&&ka(re,t.focus.experiment_id,Ee)?t.focus.experiment_id:null:null,g=h?`<button class="inspect-link" data-experiment="${Me(h)}">Inspect experiment →</button>`:"",_=!!re?.manifest.live,p=Ad(),m=re?xg(re.events,Ee):0,v=_?p?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(Ee)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(Ee)}${m?` · ${m} newer events`:""}. Press ● Go live to rejoin the edge.`:`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(Ee)}.`,S=b=>b.type==="message.sent"&&b.agentId!==t.id?`Message from ${Me($s(b.agentId,"")||"a colleague")}`:`${_?"Published":"Recorded"} ${Me(pg(b.type).toLowerCase())}`;ee("conversation-tag").textContent=_?p?"● LIVE CONVERSATION":"LIVE RUN · EARLIER MOMENT":"ARCHIVED CONVERSATION",ee("conversation-content").innerHTML=`<div class="conversation-header"><div class="conversation-person">${Wg(t)}<div><h2>${Me(t.name)}</h2><p>${Xg(t,!1)}</p></div></div><div class="conversation-questions">${m0.filter(([b])=>b!=="talk"||d.length).map(([b,T,A])=>`<button data-topic="${b}" aria-label="${A}" aria-pressed="${un===b}">${T}</button>`).join("")}</div></div><div class="conversation-body" tabindex="0" role="region" aria-label="Scientist research notes">${un==="now"?`<div class="conversation-doing"><b>Doing</b><span>${Me(bd(t.activity||t.state)||"Not active yet")}</span></div>`:""}<div class="speech-bubble${un==="talk"||un==="now"?" history":""}">${un==="now"?Tg(Md(re,t.id,t.activity||t.state,Ee,Ba()),{...Ba(),esc:Me},nt?.metric,!1):un==="talk"?Pg(d,xs(),t.id)||"<p>No dialogue by this moment.</p>":a||(o?`<blockquote>${Me(o)}<cite>${_a()} proposal · available by tick ${Math.floor(Ee)}</cite></blockquote>`:r.length?r.map(b=>`<blockquote>${Me(b.message)}<cite>${S(b)} · tick ${b.tick}</cite></blockquote>`).join(""):s?`<blockquote>${Me(s)}<cite>${_a()} excerpt · through tick ${Math.floor(Ee)}</cite></blockquote>`:"<p>No statement on this topic by this moment.</p>")}</div>${g}<div class="boredom-panel"><div class="boredom-heading"><span>${_a().toUpperCase()} BOREDOM</span><strong style="color:${l==null?"inherit":ks(l)}">${l==null?"Not measured":Math.round(l)+"%"}</strong></div>${l==null?"":`<div class="boredom-spectrum" role="meter" aria-label="${Me(t.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${l}"><i style="left:${l}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${u.label||f.length?`<div class="boredom-detail">${u.label?`<span class="regime-chip" data-tone="${u.tone}">${Me(u.label)}</span>`:""}${f.length?`<div class="boredom-components" aria-label="Boredom components">${f.map(b=>`<div><span>${Me(b.label)}</span><i style="--v:${b.value}%"></i><b>${b.value}</b></div>`).join("")}</div>`:""}</div>`:""}</div><p class="archive-note">${v}</p></div>`}function n0(t){if(Ot="",Ri=!1,Tn=!1,gi="",Nt(),Ad()||(it=!1),Nl=t,un="now",Nn(),_i(),Zt(),Nd(),en().some(e=>e.id===t)){const e=we.agentPositions?.().find(n=>n.id===t);if(e){const n=e.position.clone().add(new D(0,innerWidth<innerHeight?.4:2.1,0));if(we.camera.lookAt(n),kt||ei.focus(n),kt){const i=new Hn().setFromQuaternion(we.camera.quaternion,"YXZ");xn=i.y,oi=i.x}}vt.open||(vt.show(),Nt()),i0(),vt.querySelector("button")?.focus()}}function i0(){if(!vt.open)return;const t=we.agentPositions?.().find(a=>a.id===Nl);if(!t){vt.style.visibility="hidden";return}const e=t.position.clone().add(new D(0,2.35,0));if(we.camera.updateMatrixWorld(),e.clone().applyMatrix4(we.camera.matrixWorldInverse).z>=0){vt.style.visibility="hidden";return}vt.style.visibility="visible",e.project(we.camera);const i=document.querySelector(".sidebar").getBoundingClientRect(),r=document.querySelector("header").getBoundingClientRect(),s=_0(innerWidth,innerHeight,r.bottom,i,(e.x+1)/2*innerWidth,vt.getBoundingClientRect().height);vt.style.width=`${s.width}px`,vt.style.setProperty("--conversation-width",`${s.width}px`),vt.style.left=`${s.left}px`,vt.style.top=`${s.top}px`}ee("conversation-content").onclick=t=>{const e=t.target.closest("[data-topic]")?.dataset.topic;e&&(un=e,Nd())};ee("agent-list").onclick=t=>{const e=t.target.closest("[data-agent]")?.dataset.agent;e&&n0(e)};function r0(){return re?.events||[]}function m2(t){const e=re?.entities?.[t];return Array.isArray(e)?e.length:e&&typeof e=="object"?Object.keys(e).length:0}function $s(t,e){return t?(nt?.agents||re?.frames.at(-1)?.snapshot.agents||[]).find(i=>i.id===t)?.name||re?.manifest.agents?.find(i=>i.agent_id===t)?.display_name||(e??"Unknown researcher"):e??"Lab"}function xs(){const t=re?.manifest.id||"";return{esc:Me,name:$s,judging:re?.manifest.judging,artifactUrl:e=>{const n=`/recordings/${encodeURIComponent(t)}/artifacts/${e.split("/").map(encodeURIComponent).join("/")}`;return am(n)},experimentLabel:e=>{const n=ka(re,e,Ee);return n?.description||n?.idea?.text||e.replace(/^experiment:/,"").slice(0,10)}}}let yl=null;function s0(){if(!yl)return;const t=ka(re,yl,Ee);ee("inspector-content").innerHTML=t?uC(t,xs(),t.studyId?Bs(re,Ee).find(e=>e.id===t.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>'}function g2(t){it=!1,Zt(),Nn(),_i(),vt.close();const e=gd(re,Number.MAX_SAFE_INTEGER).find(i=>i.id===t)?.tick;e!=null&&e>Ee&&ti(e),Ld(),Cs.open||(Cs.showModal(),Nt());const n=[...document.querySelectorAll("[data-source-card]")].find(i=>i.dataset.sourceCard===t);n&&(n.scrollIntoView({block:"center"}),n.classList.add("flash"),setTimeout(()=>n.classList.remove("flash"),1600))}function a0(t){it=!1,Zt(),Nn(),yl=t,s0(),rr.open||(rr.showModal(),Nt()),rr.querySelector("#close-inspector")?.focus()}document.addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-orch-tick]");if(n){t.preventDefault(),it=!1;const s=n.dataset.orchAgent,a=Number(n.dataset.orchTick);ti(a);const o=we.agentPositions?.().find(l=>l.id===s);if(o){const l=o.position.clone().add(new D(0,2.1,0));we.camera.lookAt(l),ei.focus(l)}Qg(s);return}const i=e.closest?.("[data-source]")?.dataset.source;if(i){g2(i);return}const r=e.closest?.("[data-experiment]")?.dataset.experiment;r&&(t.preventDefault(),a0(r))});document.addEventListener("keydown",t=>{if(t.key!=="Enter"&&t.key!==" ")return;const e=t.target;e.matches?.("[data-experiment]:not(button):not(a)")&&(t.preventDefault(),a0(e.dataset.experiment))});function bl(){Ot&&(Nn(),Tn=!0,gi="",Nt())}function Dd(){Ot&&(Ki=Ot),Ot="",Ri=!1,Tn=!1,gi="",ee("proximity").hidden=!0,Nt()}function Ls(t){return[t.type,t.role].filter(Boolean).some(e=>["conductor","critic","host","baseline","environment","world"].includes(String(e).toLowerCase()))}function _2(t,e=!1){const n=t.clone().add(new D(0,2.1,0)),i=e?innerWidth<760?7.2:6.8:innerWidth<760?4.4:5.2,r=e?3.1:innerWidth<760?2.1:2.5,s=t.z>4?-1:1;we.camera.position.set(t.x,t.y+r,t.z+s*i),we.camera.position.x=Et.clamp(we.camera.position.x,-10,10),we.camera.position.y=Et.clamp(we.camera.position.y,1.6,4.3),we.camera.position.z=Et.clamp(we.camera.position.z,-12,11),we.camera.lookAt(n),ei.syncFromCamera()}function Ul(t=1){if(we.camera.aspect>=.85||!nr||kt||vt.open||dn())return;const e=Xa();if(!e.has(nr)){const r=en().find(s=>!Ls(s)&&e.has(s.id));if(!r)return;nr=r.id}const n=e.get(nr),i=qS(new D(n.x,0,n.z),we.camera.aspect,we.camera.fov);we.camera.position.lerp(i.position,t),ei.focus(i.target)}function o0(t){if(we.camera.aspect<.85){const m=Xa(),v=en().find(S=>!Ls(S)&&m.has(S.id));if(v){nr=v.id,Ul();return}}const e=Math.min(...t.map(m=>m.x)),n=Math.max(...t.map(m=>m.x)),i=Math.min(...t.map(m=>m.z)),r=Math.max(...t.map(m=>m.z)),s=(e+n)/2,a=(i+r)/2,o=n-e,l=r-i,c=Et.degToRad(we.camera.fov),u=Math.tan(c/2)*we.camera.aspect,f=o/Math.max(.1,2*u),d=2.6+l*.26,h=d/Math.max(.1,2*Math.tan(c/2)),g=innerWidth<760?8.4:7,_=Math.max(g,l/2+f+1.1,h+1),p=new D(s,1.35,a);we.camera.position.set(s,p.y+_*.26,a+_),we.camera.lookAt(p),ei.syncFromCamera()}function Ud(t,e=!1){const n=we.agentPositions?.().find(r=>r.id===t);if(!n)return;const i=n.position.clone().add(new D(0,2.1,0));if(!kt)we.camera.aspect<.85?(nr=t,Ul()):_2(n.position,e);else if(kt){we.camera.lookAt(i);const r=new Hn().setFromQuaternion(we.camera.quaternion,"YXZ");xn=r.y,oi=r.x}Qg(t,e)}ee("proximity").addEventListener("click",t=>{const e=t.target,n=e.closest?.("[data-bubble-close],[data-bubble-expand],[data-bubble-more]");if(n?.hasAttribute("data-bubble-close")){Dd();return}if(n?.hasAttribute("data-bubble-more")){Ot&&n0(Ot);return}if(n?.hasAttribute("data-bubble-expand")){bl();return}Tn||bl()});ee("status-strip").addEventListener("click",t=>{const e=t.target.closest?.(".status-tile[data-agent]");e&&Ud(e.dataset.agent)});rr.addEventListener("toggle",async t=>{const e=t.target;if(!(e instanceof HTMLDetailsElement)||!e.open||!e.dataset.artifact||e.dataset.loaded)return;e.dataset.loaded="1";const n=e.querySelector("pre");try{const i=await fetch(e.dataset.artifact);if(!i.ok)throw new Error(String(i.status));const r=await i.text();n.textContent=r.length>2e5?r.slice(0,2e5)+`
… truncated`:r||"(empty)"}catch{n.textContent="This artifact was not exported with the recording."}},!0);ee("close-inspector").onclick=()=>rr.close();rr.addEventListener("close",()=>{yl=null});ee("close-results").onclick=()=>tr.close();ee("open-results").onclick=()=>{it=!1,Zt(),Nn(),Du(),tr.showModal(),Nt()};ee("open-about").onclick=()=>{const t=Ni!=="about-drawer",e=ee("about-drawer"),n=ee("open-about");Nn(),vt.close(),_i(),t&&(it=!1,Zt(),e.innerHTML=UR(Pr,NR(re),Me,re?.manifest||null,re),e.hidden=!1,e.scrollTop=0,e.querySelector(".about-body").scrollTop=0,Ni="about-drawer",e.querySelector("[data-close-drawer]").onclick=_i,n.setAttribute("aria-expanded","true"),Nt())};ee("results-content").addEventListener("click",t=>{t.target.closest("[data-open-evidence]")&&(tr.close(),ee("open-console").click())});ee("close-conversation").onclick=()=>{vt.close(),Lt.domElement.focus()};ee("close-console").onclick=()=>Cs.close();ee("close-guide").onclick=()=>wd.close();const l0=ee("qr-dialog");ee("qr-image").src=GR;ee("close-qr").onclick=()=>l0.close();ee("open-qr").onclick=()=>{it=!1,Zt(),Nn(),_i(),l0.showModal(),Nt()};ee("open-console").onclick=()=>{it=!1,Zt(),Nn(),_i(),Ld(),Cs.showModal(),Nt()};ee("open-guide").onclick=()=>{it=!1,Zt(),Nn(),_i(),wd.showModal(),Nt()};ee("play").onclick=()=>{if(re){if(!it){if(vt.close(),!re.manifest.live&&Ee>=re.manifest.totalTicks){const t=lr==="highlights"?Sd(re):0;vs=0,ti(t)}kt&&Wa(!1)}it=!it,Zt()}};ee("camera-mode").onclick=()=>Wa(!kt);ee("collapse-bar").onclick=()=>{Fg=!0,Is(!document.body.classList.contains("bar-collapsed"))};Is(sg());Nt();window.addEventListener("resize",()=>{Fg||Is(sg()),Nt()});ee("timeline").oninput=()=>{it=!1,lr="full",ee("replay-mode").value="full",ti(Number(ee("timeline").value)),Ul(),Dr=Ee,Pd("scrub")};ee("replay-mode").onchange=()=>{lr=ee("replay-mode").value;const t=re&&ui&&lr==="highlights"?Sd(re):0;Ee=t,vs=0,Td=re?bg(re,t):[],ti(t),it=!!re,Zt()};ee("go-live").onclick=()=>{re?.manifest.live&&(vt.close(),kt&&Wa(!1),it=!0,ti(re.manifest.totalTicks),Rd())};ee("pace").onchange=()=>{jo=Number(ee("pace").value)};window.addEventListener("keydown",t=>QS(t,dn()||!re||kt,()=>{ee("play").click()}));function v2(t){Vg=Sg(t),Yo=aC(t,we.bounds,we.colliders)}function Xa(){const t=Ga(Yo,Ee);if(!t)return new Map;if(Ee<=0)return t.positions;const e=Yo[Yo.indexOf(t)+1];if(!e)return t.positions;const n=(Ee-t.tick)/(e.tick-t.tick);return new Map([...t.positions].map(([i,r])=>{const s=e.positions.get(i)||r,a=Math.hypot(s.x-r.x,s.z-r.z)>.005;return[i,{atTable:r.atTable,atLab:r.atLab,x:r.x+(s.x-r.x)*n,z:r.z+(s.z-r.z)*n,heading:a?Math.atan2(s.x-r.x,s.z-r.z):void 0,moving:a}]}))}async function c0(t,e=!1){const n=++ep;e||(it=!1,Iu=!1,tr.close(),ee("connection").textContent="LOADING RUN");try{const i=await SR(hl,t,Og.find(o=>o.id===t)?.contentVersion||"2",re);if(n!==ep)return;const r=Ee,s=Ad();re=i,Gg(),qC(i),i.frames.sort((o,l)=>o.tick-l.tick),i.events.sort((o,l)=>o.tick-l.tick),v2(i),YC(),ee("timeline").max=String(i.manifest.totalTicks),ee("timeline").disabled=!1,ee("play").disabled=!1,ee("replay-title").textContent=za(Pl(i.manifest)),ee("overview-text").textContent=i.manifest.description||(i.manifest.live?"Research as it happens. Follow the swarm from inside the lab.":"Research as it happened. Explore the supplied recording."),ee("provenance").textContent=i.manifest.description||(i.manifest.live?"Live swarm run":"Source recording · read-only replay"),ee("timeline-markers").innerHTML=p0(i.events,i.manifest.totalTicks,i.frames).map(o=>`<i${o.best?' class="best"':""} title="${Fa(o.label)}" style="left:${o.percent}%"></i>`).join(""),ee("run-picker").value=t,e||Wa(!1);const a=e?tC(r,i.manifest,s):eC(i.manifest);e||(it=Ps,Dr=a),ti(a),e&&s?Rd():e||(Dr=Ee),Zt(),ui&&!e?(_l=!0,xl()):e||e0()}catch(i){ee("connection").textContent="ARCHIVE UNAVAILABLE",ir(i.message),e||(_l=!0,xl())}}async function u0(){try{const t=hR(await hl("/recordings"));if(Og=t,ee("run-picker").innerHTML=CR(t,Me,ui)||"<option>No artificial scientist swarm recordings available</option>",re)ee("run-picker").value=re.manifest.id;else if(t.length){const e=new URL(location.href).searchParams.get("recording");await c0(fR(t,e))}else t.length||(ee("connection").textContent="NO SWARM RECORDINGS",ee("replay-title").textContent="No artificial scientist swarm recordings available")}catch(t){ee("connection").textContent="ARCHIVE UNAVAILABLE",ee("replay-title").textContent="Archive unavailable",ir(t.message)}}ee("refresh-runs").onclick=()=>u0();async function d0(){}ee("launch-openai").onclick=async()=>{if(ee("launch-openai").dataset.running==="true"){try{await hl("/openai-runs/stop",{method:"POST"}),ir("Stopping: current work will finish; no new work will start.")}catch(t){ir(t.message)}return}if(confirm("Start a live Sol + Luna Ig Nobel run? It calls the OpenAI API and may spend up to the server cost cap.")){try{const t=await hl("/openai-runs",{method:"POST",body:JSON.stringify({minutes:30})});ir(`Started ${t.name}; it appears in RUNS as workers start.`)}catch(t){ir(t.message)}d0()}};d0();ee("run-picker").onchange=()=>c0(ee("run-picker").value);ee("refresh-runs").hidden=!0,document.body.classList.add("static-site");function f0(t){x2();const e=Xa(),n=en(),i=lC(re?.events||[],Ee,n,za,100);we.update(t,{progress:nt?.progress||0,boredom:0,running:it||wn,replay:!0,finale:Rs(re,Ee),reducedMotion:Nu,agents:n.map(r=>({...r,boredom:r.boredom==null?null:Ui(r.boredom),regime:r.boredomSpectrum?.regime,state:e.get(r.id)?.atLab?"working":r.state,stationId:e.get(r.id)?.atTable?"culture":Pu({...r,activity:"experimenting"}),discussionBrief:!wn&&e.get(r.id)?.atTable?i.get(r.id)?.brief:void 0,discussionPeers:i.get(r.id)?.peers,ideaBrief:wn?void 0:YS(za(r.lastIdea||r.lastQuestion||r.lastObservation||"")),position:Rs(re,Ee)?void 0:e.get(r.id)}))})}function x2(){if(!Er){Er=new Kn;for(const[e,n,i]of[[.49,.65,"#172c35"],[.52,.61,"#f3d98b"]]){const r=new _t(new Ju(e,n,48),new qi({color:i,side:zn,depthTest:!1}));r.renderOrder=12,Er.add(r)}we.scene.add(Er)}const t=vt.open?we.agentPositions?.().find(e=>e.id===Nl):null;Er.visible=!!t,t&&(Er.position.set(t.position.x,t.position.y+1.65,t.position.z),Er.lookAt(we.camera.position))}function cp(t,e){const i=we.bounds;return t<i.minX+.34||t>i.maxX-.34||e<i.minZ+.34||e>i.maxZ-.34||we.colliders.some(r=>t>r.minX-.34&&t<r.maxX+.34&&e>r.minZ-.34&&e<r.maxZ+.34)}for(const t of document.querySelectorAll("[data-move]")){t.onpointerdown=e=>{t.setPointerCapture(e.pointerId),yn.add(t.dataset.move)};for(const e of["pointerup","pointercancel","lostpointercapture"])t.addEventListener(e,()=>yn.delete(t.dataset.move))}window.addEventListener("keydown",t=>{if(t.code==="Escape"){if(Tn){Tn=!1,gi="",Nt();return}if(Ri||Ot){Dd(),Nn();return}vt.close(),_i(),Nn()}if(!(dn()||t.target instanceof HTMLElement&&t.target.closest("input,select,textarea,[contenteditable=true]"))){if(t.code==="KeyE"&&!t.repeat&&Ot){t.preventDefault(),bl();return}t.code==="Enter"&&Ot&&!(t.target instanceof HTMLElement&&t.target.closest("button,a"))&&(t.preventDefault(),bl()),["KeyW","KeyA","KeyS","KeyD",...kt?[]:["KeyQ","KeyE"],"ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(t.code)&&(nr="",t.preventDefault()),yn.add(t.code)}});window.addEventListener("keyup",t=>yn.delete(t.code));window.addEventListener("blur",()=>{yn.clear(),ga=!1,Xi=null,it=!1,Zt()});try{let t=function(){requestAnimationFrame(t);const s=performance.now(),a=Math.min((s-n)/1e3,.1);if(n=s,wn){Rr?ZC||Rr.render((s-Hg)/1e3%Rr.duration):Lt.render(we.scene,we.camera);return}if(it&&re){if(lr==="highlights"){vs+=a*1e3*4/jo;const u=75e3*4/jo;Ee=sC(Td,vs,u),vs>=u&&(Ee=re.manifest.totalTicks,it=!1)}else Ee=gR(Ee,a,jo,re.manifest.totalTicks,re.manifest.tickDurationMs);lr==="full"&&!mR(re.manifest,Ee)&&(it=!1),Math.floor(Ee)!==i?(ti(Ee),i=Math.floor(Ee),Rd()):Zt()}const o=we.camera;if(!kt&&!dn()&&!vt.open&&(Ul(Nu?1:Math.min(1,a*5)),ei.update(a,yn)),kt&&!dn()){({yaw:xn,pitch:oi}=im(xn,oi,a,yn));const u=Number(yn.has("KeyW"))-Number(yn.has("KeyS")),f=Number(yn.has("KeyD"))-Number(yn.has("KeyA"));if(u||f){const d=(yn.has("ShiftLeft")||yn.has("ShiftRight")?5.6:3.5)*a/Math.hypot(u,f),h=(-Math.sin(xn)*u+Math.cos(xn)*f)*d,g=(-Math.cos(xn)*u-Math.sin(xn)*f)*d;cp(o.position.x+h,o.position.z)||(o.position.x+=h),cp(o.position.x,o.position.z+g)||(o.position.z+=g)}o.rotation.set(oi,xn,0,"YXZ")}if(f0(Ee*(re?.manifest.tickDurationMs||700)/1e3),Ps&&!$n&&en().length&&!dn()&&vl(),ee("coach-mark").hidden=dn()||!$n||$n==="done",d2(),wa){const u=(s-tp)/(Nu?300:ui?1600:2200);we.grow?.(Math.min(1,u)),u>=1&&(wa=!1,document.body.classList.remove("world-growing"))}const l=Ei;if(kt&&!dn()){o.getWorldDirection(r),r.y=0,r.normalize();const u=(we.agentPositions?.()||[]).map(f=>{const d=f.position.clone().sub(o.position);d.y=0;const h=d.length();return{id:f.id,distance:h,facing:h?d.normalize().dot(r):1}});Ei=mC(u,Ei)}else Ei="";Ki&&Ei!==Ki&&(Ki="");const c=Ri?Ot:Ei===Ki?"":Ei;c!==Ot&&(Ot=c,Tn=!1,gi=""),l!==Ei&&!Ri&&Ei&&(Ki=""),s2(),Lt.render(we.scene,o),i0()};we=PM(),tp=performance.now(),wa=!0,document.body.classList.add("world-growing"),we.grow?.(0),Lt=new ZS({antialias:!0,powerPreference:"high-performance",preserveDrawingBuffer:wn}),Lt.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5)),Lt.setSize(innerWidth,innerHeight),Lt.toneMapping=Ou,Lt.toneMappingExposure=we.exposure??1,Lt.outputColorSpace=Wt,ee("world").appendChild(Lt.domElement),Lt.domElement.tabIndex=0,Lt.domElement.setAttribute("aria-label","Lab viewport. Pause and walk inside to meet the researchers."),we.camera.rotation.order="YXZ",ei=new jS(we.camera),Wa(!1),Lt.domElement.onclick=()=>{if(kt&&!dn()&&!vt.open&&!Ri)try{Lt.domElement.requestPointerLock?.()?.catch(()=>{})}catch{}},Lt.domElement.onpointerdown=s=>{dn()||(ga=!0,Io={x:s.clientX,y:s.clientY},Xi={x:s.clientX,y:s.clientY,canvas:s.target===Lt.domElement,pointerType:s.pointerType},kt||Lt.domElement.setPointerCapture(s.pointerId))},Lt.domElement.onpointermove=s=>{if(!ga||document.pointerLockElement||dn())return;const a=s.clientX-Io.x,o=s.clientY-Io.y;kt?{yaw:xn,pitch:oi}=fu(xn,oi,a,o):(nr="",ei.dragBy(a,o)),Io={x:s.clientX,y:s.clientY}},Lt.domElement.onpointercancel=()=>{ga=!1,Xi=null},window.addEventListener("pointerup",s=>{if(Xi?.canvas&&Math.hypot(s.clientX-Xi.x,s.clientY-Xi.y)<10&&!dn()){const a=we.camera;a.updateMatrixWorld();let o=null;for(const l of we.agentPositions?.()||[]){if(!en().some(_=>_.id===l.id))continue;const c=l.position.clone().add(new D(0,2.35,0));if(c.clone().applyMatrix4(a.matrixWorldInverse).z>=0)continue;c.project(a);const f=(c.x+1)*innerWidth/2,d=(1-c.y)*innerHeight/2,h=Math.hypot(s.clientX-f,s.clientY-d),g=Xi.pointerType==="touch"?84:64;h<g&&(!o||h<o.distance)&&(o={id:l.id,distance:h})}o?Ud(o.id):(Ot="",Ri=!1,Tn=!1,gi="",Nt())}Xi=null,ga=!1}),document.addEventListener("mousemove",s=>{document.pointerLockElement&&kt&&!dn()&&({yaw:xn,pitch:oi}=fu(xn,oi,s.movementX,s.movementY))});const e=()=>{if(we.camera.aspect=innerWidth/innerHeight,ui&&!wn&&(we.camera.fov=innerWidth<760?62:48),we.camera.updateProjectionMatrix(),Lt.setSize(innerWidth,innerHeight),ui&&Ps&&!wn&&!kt&&!vt.open){const s=[...Xa().values()].map(a=>new D(a.x,0,a.z));s.length&&o0(s)}};window.onresize=e,visualViewport?.addEventListener("resize",e),addEventListener("orientationchange",e);let n=performance.now(),i=-1;const r=new D;Cd(),t(),ui&&setTimeout(()=>{Bg=!0,xl()},1500),u0()}catch(t){console.error(t),ee("loading").innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>'}
