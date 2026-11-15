import type {ReplayEvent} from './replay.ts';

type Row=Record<string,unknown>;
export interface Committee{score:number|null;rejected:boolean;judges:{id:string;model:string;laugh:number|null;think:number|null;reason:string}[];priorWork:{count:number;links:{url:string;title?:string}[]}|null}
export interface PodiumEntry{studyId:string;headline:string;hypothesis:string;agentId:string;tick:number;p:number|null;rho:number|null;n:number|null;halves:{rho:number|null;n:number|null;p:number|null}[];rank:number|null;score:number|null;unscored:boolean;committee:Committee|null}
export interface PodiumResult{status:'ranked'|'awaiting'|'none';tested:number;confirmed:number;entries:PodiumEntry[]}
const row=(v:unknown):Row=>v&&typeof v==='object'?v as Row:{};
const finite=(v:unknown):v is number=>typeof v==='number'&&Number.isFinite(v);
const list=(v:unknown):Row[]=>Array.isArray(v)?v.map(row):v&&typeof v==='object'?Object.values(v as Row).map(row):[];
const values=(v:unknown):unknown[]=>Array.isArray(v)?v:v&&typeof v==='object'?Object.values(v as Row):[];
const text=(v:unknown)=>typeof v==='string'?v:'';
const number=(v:unknown)=>finite(v)?v:null;
const idOf=(s:Row)=>text(s.id||s.study_id||s.studyId);
const studyId=(e:ReplayEvent)=>text(e.refs?.study_id||e.refs?.studyId||e.payload?.study_id||e.payload?.studyId);
function judgeRows(value:unknown){
 const src=row(value),source:Row[]=Array.isArray(value)?value.map(row):Object.entries(src).map(([id,v])=>({id,...row(v)}));
 return source.map(j=>({id:text(j.id)||'judge',model:text(j.model),laugh:number(j.laugh),think:number(j.think),reason:text(j.reason)}));
}
const committeeEventTypes=['award.issued','study.result','study.replicated','study.completed'];
const hasCommitteeFields=(value:Row)=>['available','rejected','score','scores','judges','verdicts','prior_work','priorWork','prior_work_available'].some(key=>value[key]!=null);
function committeePayload(event:ReplayEvent){
 const payload=row(event.payload),nested=row(payload.committee??payload.award);
 if(hasCommitteeFields(nested))return nested;
 return hasCommitteeFields(payload)?payload:null;
}
export function committeeOf(study:Row,events:readonly ReplayEvent[],tick:number,final:boolean):Committee|null{
 const eventScores=events.filter(e=>committeeEventTypes.includes(e.type)&&studyId(e)===idOf(study)).map(e=>({event:e,payload:committeePayload(e)})).filter((item):item is {event:ReplayEvent;payload:Row}=>item.payload!==null);
 const reached=eventScores.filter(item=>item.event.tick<=tick).sort((a,b)=>a.event.tick-b.event.tick).at(-1);
 if(!reached&&(eventScores.length||!final))return null;
 const graded=row(study.graded);
 const entityCommittee=[study.committee,graded.committee,row(study.result).committee].map(row).find(candidate=>Object.keys(candidate).length>0);
 const raw=row(reached?.payload??entityCommittee);
 const legacyNumeric=values(graded.scores).map(s=>{const r=row(s);return number(r.score??r.value??s);}).filter(finite);
 if(!Object.keys(raw).length&&(graded.available!=null||graded.rejected!=null||graded.scores!=null||graded.verdicts!=null||graded.score!=null||graded.prior_work!=null))Object.assign(raw,{available:graded.available,rejected:graded.rejected,scores:graded.scores,verdicts:graded.verdicts,score:legacyNumeric.length?Math.min(...legacyNumeric):graded.score,prior_work:graded.prior_work});
 if(!Object.keys(raw).length)return null;
 if(raw.available===false)return {score:null,rejected:raw.rejected===true,judges:judgeRows(raw.judges??raw.verdicts),priorWork:null};
 const judges=judgeRows(raw.judges??raw.verdicts??raw.per_judge);
 const judgeScores=judges.map(j=>j.laugh==null||j.think==null?null:Math.min(j.laugh,j.think)/10).filter(finite);
 const rawScores=values(raw.scores).map(s=>{const r=row(s);return number(r.score??r.value??s);}).filter(finite);
 const score=number(raw.score)??(rawScores.length?Math.min(...rawScores):null)??(judgeScores.length?Math.min(...judgeScores):null);
 const prior=list(raw.prior_work??raw.priorWork),links=prior.map(p=>({url:text(p.url),title:text(p.title)||undefined})).filter(p=>p.url);
 return {score,rejected:raw.rejected===true,judges,priorWork:prior.length||raw.prior_work_available===true?{count:prior.length,links}:null};
}
function visibleTick(study:Row,events:readonly ReplayEvent[]){
 const id=idOf(study),rows=events.filter(e=>studyId(e)===id),registered=rows.filter(e=>e.type==='study.registered').sort((a,b)=>a.tick-b.tick)[0],result=rows.filter(e=>['study.result','study.replicated','study.completed'].includes(e.type)).sort((a,b)=>a.tick-b.tick)[0];
 return registered?.tick??number(study.registered_tick)??number(study.tick)??result?.tick??0;
}
function resultTick(study:Row,events:readonly ReplayEvent[]){
 return events.filter(e=>studyId(e)===idOf(study)&&['study.result','study.replicated','study.completed'].includes(e.type)).sort((a,b)=>a.tick-b.tick)[0]?.tick??null;
}
const confirmed=(s:Row)=>{const result=row(s.result),status=text(s.status||result.status).toLowerCase();return s.confirmed===true||s.replicated===true||result.confirmed===true||result.replicated===true||status==='confirmed'||status==='replicated'||list(s.replications).some(r=>r.confirmed===true||r.replicated===true||['confirmed','replicated'].includes(text(r.status).toLowerCase()));};
export function podium(studies:unknown,awardEvents:readonly ReplayEvent[],tick:number,final:boolean):PodiumResult{
 const visible=list(studies).filter(s=>visibleTick(s,awardEvents)<=tick);
 const confirmedRows=visible.filter(s=>{const resolved=resultTick(s,awardEvents);return resolved!=null&&resolved<=tick&&confirmed(s);});
 const eligible=confirmedRows.map(s=>({study:s,committee:committeeOf(s,awardEvents,tick,final)})).filter(x=>x.study.rejected!==true&&!x.committee?.rejected);
 const scored=eligible.filter(x=>x.committee?.score!=null);
 if(scored.length){
  const ranked=scored.sort((a,b)=>(b.committee!.score!-a.committee!.score!)||(number(a.study.p)??Infinity)-(number(b.study.p)??Infinity)||visibleTick(a.study,awardEvents)-visibleTick(b.study,awardEvents)||idOf(a.study).localeCompare(idOf(b.study))).slice(0,3);
  return {status:'ranked',tested:visible.length,confirmed:confirmedRows.length,entries:ranked.map((x,i)=>entry(x.study,x.committee,i+1))};
 }
 const unscored=eligible.sort((a,b)=>visibleTick(a.study,awardEvents)-visibleTick(b.study,awardEvents)||idOf(a.study).localeCompare(idOf(b.study)));
 return {status:unscored.length?'awaiting':'none',tested:visible.length,confirmed:confirmedRows.length,entries:unscored.map(x=>entry(x.study,x.committee,null))};
}
function entry(s:Row,c:Committee|null,rank:number|null):PodiumEntry{
 const halves=list(s.halves);
 return {studyId:idOf(s),headline:text(s.headline)||text(s.question),hypothesis:text(s.hypothesis)||text(s.mechanism),agentId:text(s.agent_id),tick:number(s.tick)??0,p:number(s.p),rho:number(s.rho),n:number(s.n),halves:halves.map(h=>({rho:number(h.rho),n:number(h.n),p:number(h.p)})),rank,score:c?.score??null,unscored:c?.score==null,committee:c};
}
