import type {RunSnapshot} from './contract';
export interface RecordingManifest{id:string;live?:boolean;sample?:boolean;status?:string;swarm?:string;task?:string;task_title?:string;stale?:boolean;heartbeat_ts?:string;updated_at?:string;publish_errors?:unknown[]|number;metric?:{name:string;unit?:string;direction:string};provenance?:{command?:string[]|string;llm?:string};time?:{ts_start?:string;ts_end?:string;rounds?:number};contentVersion?:string;title:string;totalTicks:number;tickDurationMs?:number;description?:string;agents?:{agent_id:string;native_id?:string;display_name:string;original_display_name?:string;originalDisplayName?:string;type?:string;field?:string;family?:string;familySource?:string;color?:string}[];aliasMap?:Record<string,string>}
export function sortedRecordings(items:RecordingManifest[]){const rank=(m:RecordingManifest)=>m.sample===false?(m.live?0:1):2;const started=(m:RecordingManifest)=>Date.parse(m.time?.ts_start||'')||0;return [...items].sort((a,b)=>rank(a)-rank(b)||started(b)-started(a)||a.id.localeCompare(b.id));}
export function recordingCopy(m:RecordingManifest){return m.sample===false?{eyebrow:m.live?'RESEARCH / LIVE SWARM':'RESEARCH / SWARM RUN',kicker:m.live?'● LIVE SWARM':'● SWARM RUN',callout:m.live?'Following a live swarm run. Experiments and model calls run in the external swarm process; this lab displays its published events.':'Replaying a swarm run. Experiments and model calls are described by the run provenance.'}:{eyebrow:'RESEARCH / RECORDED REPLAY',kicker:'● RECORDED REPLAY',callout:'This is a temporary replay of supplied recordings. No experiments or model calls run here.'};}
export interface ReplayEvent{tick:number;type:string;agentId?:string;message?:string;round?:number;payload?:Record<string,unknown>;refs?:Record<string,unknown>}
export interface Recording{manifest:RecordingManifest;frames:{tick:number;snapshot:RunSnapshot}[];events:ReplayEvent[];entities?:Record<string,unknown[]>}
export function recordingChanged(current:RecordingManifest,updated?:RecordingManifest){return !!current.live&&updated?.id===current.id&&updated.contentVersion!==current.contentVersion;}
export function playbackContinues(manifest:Pick<RecordingManifest,'live'|'totalTicks'>,tick:number){return !!manifest.live||tick<manifest.totalTicks;}
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
