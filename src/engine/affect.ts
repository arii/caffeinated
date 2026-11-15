/** How boredom (0..100 at the playhead) shows in an avatar's body language. Presentation only. */
export interface Affect{level:'frenetic'|'engaged'|'bored'|'drowsy'|'unknown';walk:number;turn:number;bob:number;bobHz:number;droop:number;slump:number;saturation:number;zzz:boolean}
const lerp=(a:number,b:number,t:number)=>a+(b-a)*t;
export function affect(boredom:number|null|undefined,reducedMotion=false):Affect{
 if(boredom==null||!Number.isFinite(boredom))return {level:'unknown',walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:false};
 const b=Math.max(0,Math.min(100,boredom))/100;
 const level=b<.2?'frenetic':b<.55?'engaged':b<.8?'bored':'drowsy';
 const walk=lerp(1.35,.5,b),turn=lerp(2.2,.6,b);
 const bob=reducedMotion?0:b<.35?lerp(.06,0,b/.35):0,bobHz=lerp(9,4,b);
 const droop=b>.45?lerp(0,.42,(b-.45)/.55):0,slump=b>.55?lerp(0,.12,(b-.55)/.45):0;
 const saturation=b>.5?lerp(1,.42,(b-.5)/.5):1;
 return {level,walk,turn,bob,bobHz,droop,slump,saturation,zzz:b>=.8};
}
export function prefersReducedMotion(){return typeof matchMedia==='function'&&matchMedia('(prefers-reduced-motion: reduce)').matches;}
