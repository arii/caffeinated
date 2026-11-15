import type {Recording,ReplayEvent} from './replay.ts';

export interface HighlightStop{tick:number;label:string}

export function firstScientistTick(recording:Pick<Recording,'events'>):number{
 const event=recording.events.find(item=>{
  if(item.type!=='agent.assigned')return false;
  const role=String(item.payload?.role||'').toLowerCase();
  return !['conductor','critic','host','baseline','environment','world'].includes(role);
 });
 return event?.tick??0;
}

export function highlightStops(recording:Pick<Recording,'manifest'|'events'>,startTick=0):HighlightStop[]{
 const events=recording.events,stops:HighlightStop[]=[{tick:0,label:'Start'}];
 if(startTick>0){stops[0]={tick:startTick,label:'Scientists arrive'};}
 const first=(label:string,predicate:(event:ReplayEvent)=>boolean)=>{
  const event=events.find(item=>item.tick>=startTick&&predicate(item));
  if(event)stops.push({tick:event.tick,label});
 };
 first('Boredom shift',event=>['round.started','boredom.measured'].includes(event.type)&&/snap|breakout/i.test(String(event.payload?.regime||'')));
 first('New best',event=>event.type==='discovery.made');
 first('Confirmed study',event=>event.type==='study.result'&&(event.payload?.confirmed===true||event.payload?.replicated===true));
 first('Critic review',event=>event.type==='verdict.issued'||/critic\.(veto|rejected)/i.test(event.type));
 stops.push({tick:recording.manifest.totalTicks,label:'Finish'});
 const unique=[...new Map(stops.sort((a,b)=>a.tick-b.tick).map(stop=>[stop.tick,stop])).values()];
 return unique.length>1?unique:[{tick:0,label:'Start'},{tick:recording.manifest.totalTicks,label:'Finish'}];
}

export function highlightTickAt(stops:readonly HighlightStop[],elapsedMs:number,durationMs=75_000):number{
 if(!stops.length)return 0;
 if(stops.length===1)return stops[0].tick;
 if(elapsedMs>=durationMs)return stops.at(-1)!.tick;
 const dwell=Math.min(2_000,durationMs/stops.length/2),transition=(durationMs-dwell*stops.length)/(stops.length-1);
 let cursor=0;
 for(let i=0;i<stops.length;i++){
  if(elapsedMs<cursor+dwell)return stops[i].tick;
  cursor+=dwell;
  if(i<stops.length-1){
   if(elapsedMs<cursor+transition){const t=(elapsedMs-cursor)/transition,eased=t*t*(3-2*t);return stops[i].tick+(stops[i+1].tick-stops[i].tick)*eased;}
   cursor+=transition;
  }
 }
 return stops.at(-1)!.tick;
}
