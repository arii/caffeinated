import type {Recording,ReplayEvent} from './replay.ts';
import type {AgentView,StationId} from './types.ts';
export type RecordedAgent=AgentView&{type?:string;family?:string;activity?:string;sinceTick?:number};
type SourceEvent=ReplayEvent&{agent_id?:string;payload?:{to_agent_ids?:string[];to_agent_id?:string};refs?:{to_agent_id?:string}};
/** Manifest membership is not presence: only the event prefix can summon a robot. */
export function buildReplayPresence(data:Recording):Map<string,number>{
 const first=new Map<string,number>();
 const mark=(id:string|undefined,tick:number)=>{if(id&&(!first.has(id)||tick<first.get(id)!))first.set(id,tick);};
 for(const raw of data.events){const e=raw as SourceEvent;if(e.tick<0)continue;mark(e.agentId||e.agent_id,e.tick);
  if(e.type==='message.sent'||e.type==='items.shared'){
   for(const id of e.payload?.to_agent_ids||[])mark(id,e.tick);
   mark(e.payload?.to_agent_id,e.tick);mark(e.refs?.to_agent_id,e.tick);
  }
 }
 // Snapshot-only archives still have causal activity, never infer from final metadata.
 for(const f of data.frames)for(const a of f.snapshot.agents as RecordedAgent[]){if(f.tick>=0&&a.state!=='idle')mark(a.id,f.tick);}
 return first;
}
export function replayPeople<T extends RecordedAgent>(agents:readonly T[],tick:number,presence:ReadonlyMap<string,number>):T[]{return agents.filter(a=>a.type!=='world'&&a.type!=='baseline'&&(presence.get(a.id)??Infinity)<=tick);}
export function replayStation(a:RecordedAgent):StationId{
 // Recorded experiment execution belongs to a discipline. Thinking and discussion
 // share the roundtable regardless of the archive adapter's generic station IDs.
 if(['talking','sharing'].includes(a.activity||''))return 'culture';
 const family=(a.family||'').toLowerCase();
 if(family==='physics'||/^P\d+$/.test(a.name))return 'analyzer';
 if(family==='chem'||family==='chemistry'||/^C\d+$/.test(a.name))return 'explorer';
 if(family==='bio'||family==='biology'||/^B\d+$/.test(a.name))return 'notebook';
 return a.stationId;
}
