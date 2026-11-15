import type {ReplayEvent,Recording} from './replay.ts';

type Row=Record<string,any>;
export type InspectEvent=ReplayEvent&{round?:number;refs?:Record<string,any>;payload?:Record<string,any>};
type Source={entities?:Recording['entities'];events:InspectEvent[]};

const last=<T>(items:T[],ok:(item:T)=>boolean)=>items.filter(ok).at(-1);
const reached=(events:InspectEvent[],tick:number)=>events.filter(e=>e.tick<=tick);
const text=(v:unknown)=>typeof v==='string'&&v.trim()?v.trim():null;
const num=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)?v:null;
const bool=(v:unknown)=>typeof v==='boolean'?v:null;

export function entityRows(recording:Source|null|undefined,name:string,key=`${name.replace(/ies$/,'y').replace(/ses$/,'sis').replace(/([^i])s$/,'$1')}_id`):Row[]{
 const raw=recording?.entities?.[name] as unknown;const rows=Array.isArray(raw)?raw:raw&&typeof raw==='object'?Object.values(raw):[];
 return rows.filter((r):r is Row=>!!r&&typeof r==='object').map(r=>({...r,id:r.id??r[key]})).filter(r=>r.id!=null);
}
const byId=(rows:Row[])=>new Map(rows.map(r=>[String(r.id),r]));

/** Older recordings store the whole proposal JSON as hypothesis text. */
function proposal(v:unknown):Row{const t=text(v);if(!t?.startsWith('{'))return {text:t};try{const r=JSON.parse(t);return r&&typeof r==='object'?{...r,text:text(r.idea)||text(r.text)||t}:{text:t};}catch{return {text:t};}}

export function experimentIdForCommit(commit:string|null|undefined){return commit?`experiment:${commit}`:null;}

export interface ExperimentDetail{id:string;agentId:string|null;round:number|null;kind:string|null;commit:string|null;role:string|null;description:string|null;
 idea:{text:string|null;rationale:string|null;predictedDelta:number|null;sources:string[]}|null;descriptor:Row|null;
 gate:{pass:boolean|null;reasons:string[];attempts:number|null;text:string|null;priorArt:string[];tick:number}|null;
 result:{status:string|null;metric:number|null;reward:number|null;text:string|null;tick:number}|null;
 verdict:{by:string|null;verdict:string|null;why:string|null;tick:number}|null;
 artifacts:Record<string,string>;logTail:string|null;studyId:string|null;timeline:{tick:number;type:string;text:string}[]}

export function experimentDetail(recording:Source|null|undefined,id:string,tick:number):ExperimentDetail|null{
 if(!recording)return null;const own=reached(recording.events,tick).filter(e=>e.refs?.experiment_id===id);if(!own.length)return null;
 const entity=byId(entityRows(recording,'experiments')).get(id)||{};const started=own.find(e=>e.type==='experiment.started');
 const finished=last(own,e=>e.type==='experiment.finished');const gateEvent=last(own,e=>e.type==='gate.checked');
 const verdictEvent=last(own,e=>e.type==='verdict.issued'),studyEvent=own.find(e=>e.refs?.study_id);
 const hid=text(entity.hypothesis_id)||text(started?.refs?.hypothesis_id),hypothesisEvent=hid?reached(recording.events,tick).find(e=>e.type==='hypothesis.proposed'&&e.refs?.hypothesis_id===hid):undefined;
 const hypothesis=hypothesisEvent?byId(entityRows(recording,'hypotheses')).get(hid!)||{}:null;
 const gate=entity.gate&&typeof entity.gate==='object'?entity.gate:{},gateRecorded=Array.isArray(gate.reasons)&&gate.reasons.length>0||typeof gate.pass==='boolean'||num(gate.attempts)!>0;const gp=gateEvent?.payload||{};
 const reasons=[...(Array.isArray(gp.reasons)?gp.reasons:[]),...(finished&&Array.isArray(gate.reasons)?gate.reasons:[])].map(String);
 const verdictLater=recording.events.some(e=>e.type==='verdict.issued'&&e.refs?.experiment_id===id),verdict=verdictEvent||finished&&!verdictLater?entity.verdict:null;const vp=verdictEvent?.payload||{};
 return {id,agentId:text(entity.agent_id)||started?.agentId||own[0].agentId||null,round:num(entity.round)??num(own[0].round),kind:text(entity.kind),commit:text(entity.commit)||text(gp.candidate_commit),role:text(entity.role)||text(started?.payload?.role),
  description:text(entity.description)||text(started?.payload?.description)||text(started?.message),
  idea:hypothesis?{text:proposal(hypothesis.text||hypothesisEvent?.payload?.text).text,rationale:text(hypothesis.rationale)||text(hypothesisEvent?.payload?.rationale)||text(proposal(hypothesis.text||hypothesisEvent?.payload?.text).rationale),predictedDelta:num(hypothesis.predicted_delta)??num(entity.predicted_delta),sources:(Array.isArray(hypothesis.source_ids)?hypothesis.source_ids:[]).map(String)}:null,
  descriptor:(entity.descriptor||gp.descriptor||null) as Row|null,
  gate:gateEvent||finished&&gateRecorded?{pass:bool(gp.pass)??bool(gate.pass),reasons:[...new Set(reasons)],attempts:num(gate.attempts),text:text(gp.text)||text(gateEvent?.message),priorArt:(Array.isArray(gp.prior_art)?gp.prior_art:[]).map(String),tick:gateEvent?.tick??finished!.tick}:null,
  result:finished?{status:text(finished.payload?.status)||text(entity.status),metric:num(finished.payload?.metric_value)??num(entity.metric_value),reward:num(finished.payload?.reward),text:text(finished.payload?.text)||text(finished.message),tick:finished.tick}:null,
  verdict:verdictEvent||verdict?{by:text(verdict?.by_agent_id)||verdictEvent?.agentId||null,verdict:text(vp.verdict)||text(verdict?.verdict),why:text(vp.why)||text(verdict?.why),tick:verdictEvent?.tick??finished!.tick}:null,
  artifacts:Object.fromEntries(Object.entries(entity.artifacts&&typeof entity.artifacts==='object'?entity.artifacts:{}).filter(([k,v])=>typeof v==='string'&&(finished||k==='diff'))) as Record<string,string>,
  logTail:finished?text(entity.log_tail):null,studyId:text(entity.study_id)||text(studyEvent?.refs?.study_id),
  timeline:own.map(e=>({tick:e.tick,type:e.type,text:text(e.payload?.text)||text(e.message)||e.type}))};
}

export function experimentIdsThrough(recording:Source|null|undefined,tick:number){return [...new Set(reached(recording?.events||[],tick).filter(e=>e.type==='experiment.started'&&e.refs?.experiment_id).map(e=>String(e.refs!.experiment_id)))];}

export interface SourceCard{id:string;title:string;url:string|null;highlight:string|null;agentId:string|null;tick:number;citedBy:string[]}
export function sourceCards(recording:Source|null|undefined,tick:number):SourceCard[]{
 if(!recording)return [];const events=reached(recording.events,tick),seen=new Map<string,InspectEvent>();
 for(const e of events){const sid=e.refs?.source_id;if(sid&&!seen.has(sid))seen.set(String(sid),e);}
 const started=new Set(experimentIdsThrough(recording,tick)),experiments=entityRows(recording,'experiments').filter(x=>started.has(String(x.id)));
 return entityRows(recording,'sources').flatMap(s=>{const id=String(s.id),e=seen.get(id),t=num(s.tick);if(!e&&(t==null||t>tick))return [];
  const highlights=Array.isArray(s.highlights)?s.highlights.map(text).filter(Boolean):[];
  const citedBy=[...new Set([...(Array.isArray(s.cited_by)?s.cited_by.map(String):[]).filter(x=>started.has(x)),...experiments.filter(x=>Array.isArray(x.source_ids)&&x.source_ids.includes(id)).map(x=>String(x.id))])];
  return [{id,title:text(s.title)||text(e?.payload?.summary)||text(s.url)||id,url:text(s.url)||text(e?.payload?.url),highlight:(highlights[0] as string|undefined)||text(s.highlight)||text(s.extract)||text(e?.payload?.text),agentId:text(s.agent_id)||e?.agentId||null,tick:e?.tick??t!,citedBy}];});
}

export interface StudyCheck{rho:number|null;p:number|null;n:number|null;halves:{rho:number|null;p:number|null;n:number|null}[];significant:boolean|null;replicated:boolean|null;confirmed:boolean|null}
export interface StudyJudge{laugh:number|null;think:number|null;reason:string|null;model:string|null}
export interface PriorWork{title:string;url:string;snippet:string}
export interface StudyCommittee{available:boolean;score:number|null;rejected:boolean;judges:Record<string,StudyJudge>;priorWork:PriorWork[];priorWorkAvailable:boolean}
export interface StudyCard{id:string;agentId:string|null;experimentId:string|null;round:number|null;field:string|null;question:string|null;hypothesis:string|null;mechanism:string|null;
 dataset:{url:string|null;x:string|null;y:string|null;xLevel:string|null;yLevel:string|null;id:string|null};predictedRho:number|null;result:(StudyCheck&{headline:string|null;rejected:string|null;text:string|null})|null;
 citations:string[];replications:StudyCheck[];committee:StudyCommittee|null;award:{award:string|null;score:number|null;rejected:string|null;headline:string|null;verdicts:string[];text:string|null}|null;registeredTick:number}

const halves=(v:unknown)=>Array.isArray(v)?v.map(h=>({rho:num(h?.rho),p:num(h?.p),n:num(h?.n)})):[];
const check=(r:Row):StudyCheck=>({rho:num(r.rho),p:num(r.p),n:num(r.n),halves:halves(r.halves),significant:bool(r.significant),replicated:bool(r.replicated),confirmed:bool(r.confirmed)});
function verdictLines(v:unknown):string[]{
 if(!v)return [];if(typeof v==='string')return [v];if(Array.isArray(v))return v.flatMap(verdictLines);
 if(typeof v==='object'){const r=v as Row,line=text(r.text)||text(r.why)||text(r.reason)||text(r.verdict);if(line)return [[text(r.by)||text(r.judge)||text(r.name),line].filter(Boolean).join(': ')];return Object.entries(r).flatMap(([k,x])=>verdictLines(x).map(l=>`${k}: ${l}`));}
 return [String(v)];
}
function committeeSummary(v:unknown):StudyCommittee|null{
 if(!v||typeof v!=='object')return null;const c=v as Row;
 const hasJudges=!!c.judges&&typeof c.judges==='object'&&!Array.isArray(c.judges)&&Object.keys(c.judges).length>0;
 const prior=Array.isArray(c.prior_work)?c.prior_work:[],hasPriorWork=prior.length>0;
 if(c.available!==false&&!hasJudges&&!hasPriorWork&&c.prior_work_available!==true)return null;
 const judges=c.judges&&typeof c.judges==='object'?c.judges:{};
 return {available:bool(c.available)??true,score:num(c.score),rejected:bool(c.rejected)??false,
  judges:Object.fromEntries(Object.entries(judges).map(([name,value])=>{const j=value&&typeof value==='object'?value as Row:{};return [name,{laugh:num(j.laugh),think:num(j.think),reason:text(j.reason),model:text(j.model)}];})),
  priorWork:prior.filter(x=>x&&typeof x==='object').map(x=>({title:text(x.title)||'',url:text(x.url)||'',snippet:text(x.snippet)||''})),
  priorWorkAvailable:bool(c.prior_work_available)??false};
}

export function studyCards(recording:Source|null|undefined,tick:number):StudyCard[]{
 if(!recording)return [];const events=reached(recording.events,tick).filter(e=>/^study\.|^award\.issued$/.test(e.type)),entities=byId(entityRows(recording,'studies')),cards=new Map<string,StudyCard>();
 for(const e of events){const sid=e.refs?.study_id;if(!sid)continue;const id=String(sid),s=entities.get(id)||{},p=e.payload||{};
  if(e.type==='study.registered'){const d=s.dataset&&typeof s.dataset==='object'?s.dataset:{};cards.set(id,{id,agentId:text(s.agent_id)||e.agentId||null,experimentId:text(s.experiment_id)||text(e.refs?.experiment_id),round:num(s.round)??num(e.round),field:text(p.field)||text(s.field),question:text(p.question)||text(s.question),hypothesis:text(s.hypothesis),mechanism:text(s.mechanism),
   dataset:{url:text(d.url),x:text(p.x)||text(d.x),y:text(p.y)||text(d.y),xLevel:text(d.x_level),yLevel:text(d.y_level),id:text(s.dataset_id)},predictedRho:num(p.predicted_rho)??num(s.predicted_rho),citations:(Array.isArray(s.citations)?s.citations:[]).map(String),result:null,replications:[],committee:null,award:null,registeredTick:e.tick});continue;}
  const card=cards.get(id);if(!card)continue;
  if(e.type==='study.result'){card.result={...check({...s,...p,halves:p.halves??s.halves,significant:p.significant??s.significant}),headline:text(p.headline)||text(s.headline),rejected:text(p.rejected),text:text(p.text)||text(e.message)};card.committee=committeeSummary(p.committee??s.committee);}
  else if(e.type==='study.replicated')card.replications.push(check(p));
  else if(e.type==='award.issued'){card.award={award:text(p.award),score:num(p.score),rejected:text(p.rejected),headline:text(p.headline),verdicts:verdictLines(p.verdicts??s.committee?.verdicts),text:text(p.text)||text(e.message)};card.committee=committeeSummary(p);}
 }
 return [...cards.values()].reverse().sort((a,b)=>Number(!!a.result?.rejected)-Number(!!b.result?.rejected));
}

export interface DialogueLine{tick:number;from:string|null;to:string[];kind:string|null;text:string}
export function dialogueThrough(events:InspectEvent[],tick:number,agentId?:string,limit=40):DialogueLine[]{
 return reached(events,tick).filter(e=>e.type==='message.sent').map(e=>{const p=e.payload||{},to=[...new Set([...(Array.isArray(p.to_agent_ids)?p.to_agent_ids:[]),p.to_agent_id,e.refs?.to_agent_id].filter(Boolean).map(String))];
  return {tick:e.tick,from:e.agentId||null,to,kind:text(p.kind),text:text(p.text)||text(e.message)||''};}).filter(m=>m.text&&(!agentId||m.from===agentId||m.to.includes(agentId))).slice(-limit);
}

export const signed=(v:number|null,d=3)=>v==null?'—':(v>0?'+':'')+v.toFixed(d);
export const pValue=(v:number|null)=>v==null?'—':v<0.001?'<0.001':v.toFixed(3);
