const clamp=(value:number)=>Math.max(0,Math.min(1,value));
const back=(value:number)=>{const c=1.70158;return 1+(c+1)*(value-1)**3+c*(value-1)**2;};
const ease=(value:number)=>{const progress=clamp(value);return progress===0||progress===1?progress:clamp(back(progress));};

export interface GrowSchedule{room:number;agents:number[]}

export function growSchedule(t:number,count:number):GrowSchedule{
 const progress=clamp(t),amount=Math.max(0,Math.floor(count)),room=ease(progress/.4);
 const agents=Array.from({length:amount},(_,index)=>{
  const start=.4+index*.6/Math.max(1,amount),duration=.6/Math.max(1,amount);
  return ease((progress-start)/duration);
 });
 return {room,agents};
}

export function nextCoach(seen:readonly string[]|ReadonlySet<string>):'scientist'|'scrub'|null{
 const has=(id:string)=>Array.isArray(seen)?seen.includes(id):(seen as ReadonlySet<string>).has(id);
 if(!has('scientist'))return 'scientist';
 if(!has('scrub'))return 'scrub';
 return null;
}
