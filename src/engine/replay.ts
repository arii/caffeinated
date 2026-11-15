import type {RunSnapshot} from './contract';
export interface PublishIssue{ts?:string|null;kind:string;final?:boolean;message:string}
export interface RecordingManifest{id:string;live?:boolean;sample?:boolean;status?:string;swarm?:string;task?:string;task_title?:string;stale?:boolean;liveness?:'live'|'stale'|'ended';lastUpdateTs?:string|null;staleAfterSeconds?:number|null;heartbeat_ts?:string;updated_at?:string;publish_errors?:PublishIssue[]|number;metric?:{name:string;unit?:string;direction:string};provenance?:{command?:string[]|string;llm?:string};time?:{ts_start?:string;ts_end?:string;rounds?:number};contentVersion?:string;title:string;totalTicks:number;tickDurationMs?:number;description?:string;agents?:{agent_id:string;native_id?:string;display_name:string;original_display_name?:string;originalDisplayName?:string;type?:string;field?:string;family?:string;familySource?:string;color?:string}[];aliasMap?:Record<string,string>}
export function sortedRecordings(items:RecordingManifest[]){const rank=(m:RecordingManifest)=>m.sample===false?(m.live?0:1):2;const started=(m:RecordingManifest)=>Date.parse(m.time?.ts_start||'')||0;return [...items].sort((a,b)=>rank(a)-rank(b)||started(b)-started(a)||a.id.localeCompare(b.id));}
export function recordingCopy(m:RecordingManifest){if(m.sample===false&&m.stale)return {eyebrow:'RESEARCH / STALLED SWARM',kicker:'◌ STALLED RUN',callout:`This swarm run stopped publishing before it finished${m.lastUpdateTs?` (last update ${clockTime(m.lastUpdateTs)})`:''}. It may have been killed; everything it published is shown below.`};return m.sample===false?{eyebrow:m.live?'RESEARCH / LIVE SWARM':'RESEARCH / SWARM RUN',kicker:m.live?'● LIVE SWARM':'● SWARM RUN · FINISHED',callout:m.live?'Following a live swarm run. Experiments and model calls run in the external swarm process; this lab shows its events as they are published.':'Swarm run · finished. Scrub or replay everything it published; experiments and model calls are described by the run provenance.'}:{eyebrow:'RESEARCH / RECORDED REPLAY',kicker:'● RECORDED REPLAY',callout:'This is a temporary replay of supplied recordings. No experiments or model calls run here.'};}
export interface ReplayEvent{tick:number;type:string;agentId?:string;message?:string;round?:number;payload?:Record<string,unknown>;refs?:Record<string,unknown>}
export interface Recording{manifest:RecordingManifest;frames:{tick:number;snapshot:RunSnapshot}[];events:ReplayEvent[];entities?:Record<string,unknown[]>}
export function recordingChanged(current:RecordingManifest,updated?:RecordingManifest){return !!(current.live||current.stale)&&updated?.id===current.id&&updated.contentVersion!==current.contentVersion;}
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
const clockTime=(ts:string)=>{const d=new Date(ts);return Number.isNaN(d.getTime())?ts:d.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});};
/** Publish failures, ignoring recovered conflicts. */
export function publishErrorCount(m:Pick<RecordingManifest,'publish_errors'>){const e=m.publish_errors;return Array.isArray(e)?e.filter(i=>i.kind!=='recovered').length:typeof e==='number'?e:0;}
export function recordingPrefix(m:RecordingManifest){return m.stale?'◌ STALLED · ':m.live?'● LIVE · ':'SWARM · ';}
export function swarmConnectionLabel(m:RecordingManifest){
 const base=m.stale?`LIVE RUN STALLED${m.lastUpdateTs?' · NO UPDATES SINCE '+clockTime(m.lastUpdateTs):''}`:m.live?'FOLLOWING LIVE SWARM':'SWARM RUN · FINISHED';
 const errors=publishErrorCount(m);
 return errors?`${base} · ${errors} PUBLISH ERROR${errors===1?'':'S'}`:base;
}
export type RecordingDelta=({kind:'full'}&Recording)|{kind:'unchanged';manifest:RecordingManifest}|{kind:'delta';since:number;manifest:RecordingManifest;frames:Recording['frames'];progressScale?:number;patches?:{tick:number;snapshot:Partial<RunSnapshot>}[];events:ReplayEvent[];entities?:Record<string,unknown[]>};
const entityKey=(row:unknown)=>{if(!row||typeof row!=='object')return undefined;const r=row as Record<string,unknown>;return r.id??Object.entries(r).find(([k])=>k.endsWith('_id')&&k!=='agent_id')?.[1];};
/** Frames from delta.since replace the client's; earlier ones are rescaled to progressScale and patched; later events append; entity rows upsert by id. */
export function mergeRecordingDelta(current:Recording,delta:RecordingDelta):Recording{
 if(delta.kind==='full'){const {kind:_kind,...full}=delta;return full;}
 if(delta.kind==='unchanged')return {...current,manifest:delta.manifest};
 const entities:Record<string,unknown[]>={...current.entities};
 for(const [name,rows] of Object.entries(delta.entities||{})){
  const merged=[...(entities[name]||[])],index=new Map(merged.map((row,i)=>[entityKey(row),i]));
  for(const row of rows){const at=index.get(entityKey(row));if(at===undefined)merged.push(row);else merged[at]=row;}
  entities[name]=merged;
 }
 const patches=new Map((delta.patches||[]).map(p=>[p.tick,p.snapshot]));
 const scale=delta.progressScale;
 const kept=current.frames.filter(f=>f.tick<delta.since).map(f=>{const patch=patches.get(f.tick);return patch||scale?{...f,snapshot:{...f.snapshot,...(scale?{progress:Math.max(0,f.tick)/scale}:{}),...patch}}:f;});
 return {...current,manifest:delta.manifest,frames:[...kept,...delta.frames],events:[...current.events.filter(e=>e.tick<=delta.since),...delta.events],entities};
}
/** A live recording already on screen fetches only what changed since its contentVersion. */
export async function loadRecording(get:<T>(path:string)=>Promise<T>,id:string,version:string,current:Recording|null):Promise<Recording>{
 const path=`/recordings/${encodeURIComponent(id)}`,base=current?.manifest.id===id?current.manifest.contentVersion:undefined;
 if(current&&base&&base!==version){try{return mergeRecordingDelta(current,await get<RecordingDelta>(`${path}/delta?base=${encodeURIComponent(base)}`));}catch{/* fall back to the full recording */}}
 return get<Recording>(`${path}?v=${encodeURIComponent(version)}`);
}
