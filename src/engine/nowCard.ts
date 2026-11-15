import {experimentDetail,sourceCards,type InspectEvent,type ExperimentDetail,type SourceCard} from './inspect.ts';
import {regimeLabel} from './boredom.ts';
import {humanizeActivity} from './agentIdentity.ts';
import type {Recording} from './replay.ts';

type Source={entities?:Recording['entities'];events:InspectEvent[]};
export interface WhyContext{name:(id:string|null)=>string;metric?:{name:string;direction:string};best?:number|null}
const text=(v:unknown)=>typeof v==='string'&&v.trim()?v.replace(/\s+/g,' ').trim():'';
const num=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)?v:null;
const fmt=(v:number)=>String(Number(v.toPrecision(4)));
const clip=(v:string,n=140)=>v.length>n?v.slice(0,n-1)+'…':v;
const list=(v:unknown)=>Array.isArray(v)?v.map(x=>text(typeof x==='string'?x:(x as {reason?:string})?.reason||JSON.stringify(x))).filter(Boolean):[];

/** One plain-language line saying why this event happened or what it means. */
export function eventWhy(e:InspectEvent,c:WhyContext):string{
 const p=e.payload||{},metric=c.metric?.name.replaceAll('_',' ')||'score';
 switch(e.type){
  case 'verdict.issued':{const why=text(p.why)||text(p.reason);return p.accepted===true?`Critic approved${why?`: ${clip(why)}`:': the rerun reproduced the score'}`:p.accepted===false?`Critic rejected${why?`: ${clip(why)}`:": score didn't reproduce on rerun"}`:text(p.text);}
  case 'gate.checked':{const reasons=list(p.reasons);if(p.pass===false)return `Novelty gate blocked: ${reasons.length?clip(reasons.join('; ')):'too close to an earlier idea'}`;const prior=Array.isArray(p.prior_art)?p.prior_art.length:0;return p.pass===true?`Novelty gate passed: the idea is new enough${prior?` (checked against ${prior} prior source${prior===1?'':'s'})`:''}`:text(p.text);}
  case 'experiment.started':return `Testing: ${clip(text(p.description)||text(p.text).replace(/^Testing:\s*/,'')||'a new candidate')}`;
  case 'experiment.finished':{const v=num(p.metric_value),status=text(p.status).toLowerCase(),score=v==null?'':` ${metric} ${fmt(v)}`,best=c.best==null?'':` (best ${fmt(c.best)})`;
   if(/crash|error|fail|timeout/.test(status))return 'Crashed: the experiment failed to run';
   if(/keep|replicated|accept/.test(status)&&!/not_/.test(status))return `Kept:${score||' result'} beats the previous best`;
   return status?`Discarded:${score} didn't beat the best${best}`:text(p.text);}
  case 'agent.assigned':{const role=text(p.role);return role?`Conductor assigned ${role}${text(p.rationale)?`: ${clip(text(p.rationale))}`:''}`:text(p.text);}
  case 'round.started':{const r=regimeLabel(text(p.regime)).label;return `${e.round?`Round ${e.round} begins`:'New round'}${r?` · ${r}`:''}${text(p.rationale)?`: ${clip(text(p.rationale))}`:''}`;}
  case 'boredom.measured':{const b=num(p.B);const r=regimeLabel(text(p.regime)).label;return b==null?text(p.text):`Boredom ${Math.round(b*100)}%${r?` · ${r}`:''}${b>.6?': repeating itself, ready to switch approach':b<.2?': still finding new things':''}`;}
  case 'hypothesis.proposed':return `Idea: ${clip(text(p.text))}`;
  case 'question.asked':{const kind=text(p.kind);return `${kind==='recall'?'Recalling memory':kind==='search'||kind==='exa'?'Searching the literature':'Asking'}: ${clip(text(p.text))}`;}
  case 'observation.received':return `Read: ${clip(text(p.text)||text(p.summary))}`;
  case 'message.sent':{const to=text(p.to_agent_id)||text(e.refs?.to_agent_id);return `${to?`To ${c.name(to)}`:'Message'}: ${clip(text(p.text))}`;}
  case 'study.registered':return `Pre-registered: ${clip(text(p.question)||text(p.text))}`;
  case 'study.result':return clip(text(p.text)||text(p.headline));
  case 'discovery.made':{const v=num(p.metric_value);return `New best${v==null?'':`: ${metric} ${fmt(v)}`}${text(p.title)?` · ${clip(text(p.title),80)}`:''}`;}
  default:return '';
 }
}

export interface AgentNow{activity:string;latest:InspectEvent|null;experiment:ExperimentDetail|null;sources:SourceCard[];feed:{tick:number;why:string}[]}
/** Everything the run has said about one agent by this tick. */
export function agentNow(recording:Source|null|undefined,agentId:string,activity:string|undefined,tick:number,c:WhyContext):AgentNow{
 const own=(recording?.events||[]).filter(e=>e.tick<=tick&&e.agentId===agentId);
 const started=own.filter(e=>e.type==='experiment.started'&&e.refs?.experiment_id).at(-1);
 const experiment=started?experimentDetail(recording,String(started.refs!.experiment_id),tick):null;
 const verdict=experiment&&(recording?.events||[]).filter(e=>e.tick<=tick&&e.type==='verdict.issued'&&e.refs?.experiment_id===experiment.id).at(-1);
 const feedEvents=[...own,...(verdict&&verdict.agentId!==agentId?[verdict]:[])].sort((a,b)=>a.tick-b.tick);
 const feed=feedEvents.map(e=>({tick:e.tick,why:eventWhy(e,c)})).filter(f=>f.why).slice(-6).reverse();
 return {activity:humanizeActivity(activity),latest:own.at(-1)||null,experiment,sources:sourceCards(recording,tick).filter(s=>s.agentId===agentId).slice(-3).reverse(),feed};
}

export function nowCardHtml(n:AgentNow,c:WhyContext&{esc:(v:unknown)=>string},metric?:{name:string;direction:string}){
 const e=c.esc,x=n.experiment,row=(label:string,body:string)=>body?`<div class="now-row"><b>${label}</b><div>${body}</div></div>`:'';
 const doing=n.latest?`${e(n.activity||'working')} · <span class="muted">${e(eventWhy(n.latest,c)||n.latest.type)}</span>`:e(n.activity||'Not active yet');
 const idea=x?`${e(x.idea?.text||x.description||'')}${x.idea?.predictedDelta!=null?` <span class="pill">predicted Δ ${x.idea.predictedDelta>0?'+':''}${fmt(x.idea.predictedDelta)}</span>`:''}${x.descriptor?.mechanism?` <span class="pill">${e(String(x.descriptor.mechanism).replaceAll('_',' '))}${x.descriptor.method?` / ${e(String(x.descriptor.method).replaceAll('_',' '))}`:''}</span>`:''}`:'';
 const sources=n.sources.map(s=>`<button class="chip" data-source="${e(s.id)}">${e(clip(s.title,60))}</button>`).join('');
 const gate=x?.gate?`<span class="pill ${x.gate.pass?'ok':'bad'}">${x.gate.pass?'passed':x.gate.pass===false?'blocked':'checked'}</span> ${e(x.gate.reasons.length?x.gate.reasons.join('; '):x.gate.pass?'The idea is new enough to try.':'')}`:x?'<span class="muted">Not checked yet</span>':'';
 const verdict=x?.verdict?`<span class="pill ${/replicat|accept|approv/i.test(x.verdict.verdict||'')&&!/not_/i.test(x.verdict.verdict||'')?'ok':'bad'}">${e(x.verdict.verdict||'verdict')}</span> ${e(x.verdict.why||'')}`:x?.result?'<span class="muted">Waiting for the critic</span>':'';
 const m=metric?.name.replaceAll('_',' ')||'score',better=metric?.direction==='maximize'?'higher':'lower';
 const score=x?.result?`<span class="pill">${e(x.result.status||'done')}</span> ${x.result.metric==null?'':`${e(m)} ${fmt(x.result.metric)}`}${c.best==null?'':` · best so far ${fmt(c.best)} (${better} is better)`}`:x?'<span class="muted">Still running</span>':'';
 return `<div class="now-card">${row('Doing',doing)}${row('Idea',idea)}${row('Read',sources)}${row('Gate',gate)}${row('Score',score)}${row('Critic',verdict)}${x?`<button class="inspect-link" data-experiment="${e(x.id)}">Inspect experiment →</button>`:''}${n.feed.length?`<h4>Why, step by step</h4><ol class="why-feed">${n.feed.map(f=>`<li><span>${f.tick}</span>${e(f.why)}</li>`).join('')}</ol>`:''}</div>`;
}
