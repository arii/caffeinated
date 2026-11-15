import type {Recording,ReplayEvent} from './replay.ts';

export type MarkKind='idea'|'critic'|'veto'|'scout'|'memory'|'boredom'|'evaluation'|'keep'|'gate';
export interface Mark{tick:number;round:number;kind:MarkKind;label:string;why:string;eventId:string}
export interface Lane{id:string;name:string;marks:Mark[]}
export interface RoundSpan{round:number;startTick:number;endTick:number}
export interface Swimlanes{rounds:number[];lanes:Lane[];roundCloses:{round:number;tick:number}[];roundSpans:RoundSpan[]}
export interface MarkGroup{round:number;visible:Mark[];hidden:Mark[]}
export type Turn='active'|'waiting'|'done'|'idle';
const obj=(v:unknown)=>v&&typeof v==='object'?v as Record<string,unknown>:{};
const str=(v:unknown)=>typeof v==='string'?v:'';
const eventsOf=(r:Recording,tick:number)=>r.events.filter(e=>e.tick<=tick);
export function compactMarks(marks:readonly Mark[],limit=6):MarkGroup[]{
 const grouped=new Map<number,Mark[]>();for(const mark of marks){const group=grouped.get(mark.round)||[];group.push(mark);grouped.set(mark.round,group);}
 const cap=Math.max(1,Math.floor(limit));
 return [...grouped].sort(([a],[b])=>a-b).map(([round,group])=>{group.sort((a,b)=>a.tick-b.tick);return {round,visible:group.slice(0,cap),hidden:group.slice(cap)};});
}
export function roundX(spans:readonly RoundSpan[],tick:number,round?:number){
 if(!spans.length)return 0;
 let index=round==null?-1:spans.findIndex(span=>span.round===round);
 if(index<0)index=spans.findIndex(span=>tick>=span.startTick&&tick<=span.endTick);
 if(index<0)index=tick<spans[0].startTick?0:spans.length-1;
 const span=spans[index],duration=span.endTick-span.startTick,progress=duration>0?(tick-span.startTick)/duration:tick>=span.endTick?1:0;
 return index+Math.max(0,Math.min(1,progress));
}
function kindOf(e:ReplayEvent):MarkKind|null{
 if(e.type==='hypothesis.proposed')return 'idea';
 if(e.type==='llm.called'){const role=str(e.payload?.role).toLowerCase();return role.includes('scout')||role.includes('search')?'scout':role.includes('memory')?'memory':'idea';}
 if(e.type==='verdict.issued')return e.payload?.vetoed===true?'veto':'critic';
 if(e.type==='study.replicated')return 'critic';
 if(e.type==='question.asked'&&e.payload?.kind==='search'||e.type==='agent.assigned'&&e.payload?.scout===true)return 'scout';
 if(e.type==='question.asked'&&e.payload?.kind==='recall'||e.type==='observation.received'&&e.payload?.kind==='memories')return 'memory';
 if(e.type==='boredom.measured')return 'boredom';
 if(e.type==='round.started'&&['BOREDOM_SNAP','PARADIGM_BREAKOUT'].includes(str(e.payload?.regime)))return 'boredom';
 if(e.type==='experiment.finished')return e.payload?.status==='keep'?'keep':'evaluation';
 if(e.type==='discovery.made')return 'keep';
 if(e.type==='gate.checked'&&(e.payload?.pass??e.payload?.passed)===false)return 'gate';
 if(e.type==='experiment.started'&&e.payload?.kind!=='baseline')return 'idea';
 return null;
}
export function lanes(recording:Recording|null,tick:number):Swimlanes{
 if(!recording)return {rounds:[],lanes:[],roundCloses:[],roundSpans:[]};
 const allRoundOf=new Map<ReplayEvent,number>();let allRound=0;
 for(const e of recording.events){if(e.type==='round.started')allRound=Number(e.round||e.payload?.round)||allRound+1;allRoundOf.set(e,Number(e.round||e.payload?.round)||allRound);}
 const reached=eventsOf(recording,tick),roundOf=new Map<ReplayEvent,number>();let round=0;
 const maps=new Map<string,Lane>(),rounds=new Set<number>();
 for(const e of reached){if(e.type==='round.started'){round=Number(e.round||e.payload?.round)||round+1;rounds.add(round);}roundOf.set(e,Number(e.round||e.payload?.round)||round);}
 for(const e of reached){const kind=kindOf(e);if(!kind)continue;const id=str(e.agentId||e.payload?.agent_id||e.refs?.agent_id);if(!id)continue;const r=roundOf.get(e)||1;rounds.add(r);
  const name=recording.manifest.agents?.find(a=>a.agent_id===id)?.display_name||id;
  const lane=maps.get(id)||{id,name,marks:[]};const idValue=str(e.refs?.event_id)||`${e.type}:${e.tick}`;
  const label=kind==='veto'?'Veto':kind==='keep'?'New best':kind==='gate'?'Gate blocked':kind==='scout'?'Search':kind==='memory'?'Memory recall':kind==='boredom'?'Boredom shift':kind==='critic'?'Critic review':kind==='idea'?'Idea':'Evaluation';
  lane.marks.push({tick:e.tick,round:r,kind,label,why:str(e.message||e.payload?.why||e.payload?.reason),eventId:idValue});maps.set(id,lane);
 }
 const roundCloses=[...rounds].flatMap(r=>{const finished=recording.events.filter(e=>e.type==='experiment.finished'&&allRoundOf.get(e)===r),ended=recording.events.find(e=>['round.closed','round.finished','round.completed'].includes(e.type)&&allRoundOf.get(e)===r),next=recording.events.find(e=>e.type==='round.started'&&(allRoundOf.get(e)||0)>r),close=ended?.tick??finished.at(-1)?.tick??next?.tick;return close!=null&&close<=tick?[{round:r,tick:close}]:[];});
 const orderedRounds=[...rounds].sort((a,b)=>a-b),roundSpans=orderedRounds.map((r,index)=>{
  const startEvent=recording.events.find(e=>e.type==='round.started'&&allRoundOf.get(e)===r),eventsInRound=recording.events.filter(e=>allRoundOf.get(e)===r),startTick=startEvent?.tick??eventsInRound[0]?.tick??0;
  const ended=recording.events.find(e=>['round.closed','round.finished','round.completed'].includes(e.type)&&allRoundOf.get(e)===r),finished=recording.events.filter(e=>e.type==='experiment.finished'&&allRoundOf.get(e)===r).at(-1),next=orderedRounds[index+1]==null?undefined:recording.events.find(e=>e.type==='round.started'&&allRoundOf.get(e)===orderedRounds[index+1]);
  return {round:r,startTick,endTick:ended?.tick??finished?.tick??next?.tick??recording.manifest.totalTicks};
 });
 return {rounds:orderedRounds,lanes:[...maps.values()],roundCloses,roundSpans};
}
export function turns(recording:Recording|null,tick:number):Record<string,Turn>{
 if(!recording)return {};
 const events=eventsOf(recording,tick);let round=0;
 const terminal=events.some(e=>['run.finished','run.stopped'].includes(e.type))||['finished','stopped'].includes(recording.manifest.status||'')&&tick>=recording.manifest.totalTicks;
 if(terminal)return Object.fromEntries((recording.manifest.agents||[]).map(agent=>[agent.agent_id,'idle']));
 for(const e of events)if(e.type==='round.started')round=Number(e.round||e.payload?.round)||round+1;
 const current=events.filter(e=>(Number(e.round||e.payload?.round)||round)===round);
 const assigned=new Set(current.filter(e=>e.type==='agent.assigned').map(e=>str(e.agentId||e.payload?.agent_id)).filter(Boolean));
 const calls=current.filter(e=>['llm.called','hypothesis.proposed'].includes(e.type)&&str(e.agentId||e.payload?.agent_id)),assignments=current.filter(e=>e.type==='agent.assigned'&&str(e.agentId||e.payload?.agent_id));
 const lastCall=calls.at(-1),lastAssign=assignments.at(-1),activeId=lastCall&&(!lastAssign||lastCall.tick>=lastAssign.tick)?str(lastCall.agentId||lastCall.payload?.agent_id):'',waitingId=lastAssign&&(!lastCall||lastAssign.tick>lastCall.tick)?str(lastAssign.agentId||lastAssign.payload?.agent_id):'';
 const result:Record<string,Turn>={};for(const agent of recording.manifest.agents||[])result[agent.agent_id]='idle';
 for(const id of assigned){const hasCall=calls.some(e=>str(e.agentId||e.payload?.agent_id)===id),finished=current.some(e=>e.type==='experiment.finished'&&str(e.agentId||e.payload?.agent_id)===id);result[id]=id===waitingId?'waiting':id===activeId&&!finished?'active':hasCall||finished?'done':'waiting';}
 if(events.some(e=>['round.closed','round.finished','round.completed'].includes(e.type)&&(Number(e.round||e.payload?.round)||round)===round)||events.some(e=>e.type==='round.started'&&(Number(e.round||e.payload?.round)||round)>round))for(const id of assigned)result[id]='done';
 return result;
}
