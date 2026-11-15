import type {RunSnapshot} from './contract';
export interface RecordingManifest{id:string;live?:boolean;contentVersion?:string;title:string;totalTicks:number;tickDurationMs?:number;description?:string;agents?:{agent_id:string;native_id?:string;display_name:string;original_display_name?:string;originalDisplayName?:string}[];aliasMap?:Record<string,string>}
export interface ReplayEvent{tick:number;type:string;agentId?:string;message?:string}
export interface Recording{manifest:RecordingManifest;frames:{tick:number;snapshot:RunSnapshot}[];events:ReplayEvent[];entities?:Record<string,unknown[]>}
export function recordingChanged(current:RecordingManifest,updated?:RecordingManifest){return !!current.live&&updated?.id===current.id&&updated.contentVersion!==current.contentVersion;}
/** Binary search is deliberately stateless: rewinding must discard later knowledge. */
export function frameAt<T extends {tick:number}>(frames:readonly T[],tick:number):T|undefined{
 let low=0,high=frames.length-1,result=-1;
 while(low<=high){const mid=(low+high)>>>1;if(frames[mid].tick<=tick){result=mid;low=mid+1;}else high=mid-1;}
 return result<0?undefined:frames[result];
}
export function advanceTick(tick:number,seconds:number,pace:number,total:number,tickDurationMs=1000){return Math.max(0,Math.min(total,tick+seconds*pace*1000/Math.max(1,tickDurationMs)));}
export function eventsThrough(events:readonly ReplayEvent[],tick:number){return events.filter(e=>e.tick<=tick);}
/** Change display names only; the source archive remains untouched. */
export function anonymizeExcerpt(value:string,aliases:ReadonlyMap<string,string>){
 let text=value;
 for(const [source,alias] of [...aliases].sort((a,b)=>b[0].length-a[0].length)){
  const escaped=source.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  text=text.replace(new RegExp(`(?<![a-zA-Z0-9_])${escaped}(?![a-zA-Z0-9_])`,'gi'),alias);
 }
 return text;
}
