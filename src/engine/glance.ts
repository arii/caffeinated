import {affect} from './affect.ts';
import {boredomPercent} from './boredom.ts';
import {agentDescriptor,descriptorText,humanizeActivity,humanizeRole} from './agentIdentity.ts';
import {agentNow,eventWhy,type WhyContext} from './nowCard.ts';
import {formatValue} from './moments.ts';
import {outcomeOf,type ResultRow} from './scoreChart.ts';
import type {Recording,ReplayEvent} from './replay.ts';

export interface NearCandidate{id:string;distance:number;facing:number}
export interface NearThreshold{distance:number;facing:number}
export function pickNear(candidates:readonly NearCandidate[],current:string,enter:NearThreshold={distance:3,facing:.35},exit:NearThreshold={distance:3.6,facing:.2}):string{
 const held=candidates.find(c=>c.id===current&&c.distance<exit.distance&&c.facing>exit.facing);
 if(held)return current;
 const next=candidates.filter(c=>c.distance<enter.distance&&c.facing>enter.facing).sort((a,b)=>a.distance-b.distance)[0];
 return next?.id||'';
}

export interface BubbleAgent{id:string;name:string;role?:string;type?:string;family?:string;activity?:string;state?:string;boredom:number|null;boredomSpectrum?:{regime?:string}}
export interface BubbleContent{name:string;role:string;mood:{level:string;label:string|null;boredomPct:number|null};activity:string;idea:string|null;predicted:number|null}
const moodLabels:Record<string,string>={frenetic:'Frenetic',engaged:'Engaged',bored:'Bored',drowsy:'Drowsy'};
export function bubbleContent(input:{agent:BubbleAgent;recording:Recording|null;tick:number;metric?:{name:string;direction:string};best?:number|null;agentName?:(id:string|null)=>string}):BubbleContent{
 const {agent,recording,tick}=input,events=(recording?.events||[]) as ReplayEvent[];
 const descriptor=descriptorText(agentDescriptor(events,agent.id,tick),agent.family||'');
 const context:WhyContext={name:input.agentName||((id)=>id===agent.id?agent.name:'Scientist'),metric:input.metric,best:input.best};
 const now=agentNow(recording,agent.id,agent.activity||agent.state,tick,context);
 const level=affect(agent.boredom).level,experiment=now.experiment;
 const blockedReason=now.blocked?eventWhy(now.blocked,context):'';
 return {
  name:agent.name,
  role:descriptor||humanizeRole(agent.role)||'Scientist',
  mood:{level,label:moodLabels[level]||null,boredomPct:agent.boredom==null?null:boredomPercent(agent.boredom)},
  activity:blockedReason||now.activity||'Not active yet',
  idea:blockedReason?null:experiment?.idea?.text||experiment?.description||null,
  predicted:blockedReason?null:experiment?.idea?.predictedDelta??null
 };
}

export function bubbleHtml(content:BubbleContent,expanded:boolean,esc:(v:unknown)=>string):string{
 const mood=[content.mood.label,content.mood.boredomPct==null?null:`bored ${Math.round(content.mood.boredomPct)}%`].filter(Boolean).join(' · ');
 const idea=content.idea?`<p class="bubble-idea">${esc(content.idea)}${content.predicted==null?'':` <span class="pill">predicted Δ ${content.predicted>0?'+':''}${esc(formatValue(content.predicted))}</span>`}</p>`:'';
 return `<div class="bubble-card"><div class="bubble-heading"><span>SCIENTIST</span><button class="bubble-close" data-bubble-close aria-label="Close scientist card">×</button></div><strong class="bubble-name">${esc(content.name)}</strong><span class="bubble-role">${esc(content.role)}</span>${mood?`<span class="bubble-mood">${esc(mood)}</span>`:''}<p class="bubble-activity">${esc(content.activity)}</p>${idea}${expanded?'<div class="bubble-now" data-bubble-now></div><button class="bubble-more" data-bubble-more>More…</button>':'<button class="bubble-expand" data-bubble-expand><kbd>E</kbd> Meet this scientist</button>'}</div>`;
}

export interface GlanceResult extends ResultRow{agentId?:string}
const finite=(value:unknown):value is number=>typeof value==='number'&&Number.isFinite(value);
const clamp=(value:number)=>Math.max(0,Math.min(1,value));
export interface TileMetric{best:number|null;progress:number|null;kept:number;discarded:number;crashed:number;spark:number[]}
export interface GateCounts{confirmed:number;tested:number}
export function tileGateCounts(results:readonly GlanceResult[],agentId:string,agentName:string):GateCounts{
 const matching=(r:GlanceResult)=>r.agent===agentId||r.agent===agentName||r.agentId===agentId;
 const rows=results.filter(r=>matching(r)&&outcomeOf(r.status,r.kind)!=='baseline'&&finite(r.value));
 return {confirmed:rows.filter(r=>r.value===0).length,tested:rows.length};
}
export function tileGateLabel(counts:GateCounts){return `${counts.confirmed} gate-confirmed / ${counts.tested} tested`;}
export function staffStripLabel(type:string,events:readonly ReplayEvent[],tick:number){
 const reached=events.filter(e=>e.tick<=tick);
 if(type==='conductor'){
  const round=reached.filter(e=>e.type==='round.started').reduce<ReplayEvent|undefined>((latest,event)=>!latest||event.tick>=latest.tick?event:latest,undefined),regime=round?.payload?.regime;
  return typeof regime==='string'?`Conductor · assigning ${regime}`:'Conductor · awaiting assignment';
 }
 if(type==='critic'){
  const reviews=reached.filter(e=>e.type==='verdict.issued').length;
  return `Critic · ${reviews} review${reviews===1?'':'s'}`;
 }
 return '';
}
export function tileBestLabel(best:number|null){return best==null?'best —':`best ${formatValue(best)}`;}
export function tileMetrics(results:readonly GlanceResult[],agentId:string,agentName:string,metric:{name:string;direction:string},runBest:number|null,baseline:number|null):TileMetric{
 const matching=(r:GlanceResult)=>r.agent===agentId||r.agent===agentName||r.agentId===agentId;
 const rows=results.filter(r=>matching(r)&&outcomeOf(r.status,r.kind)!=='baseline').slice().sort((a,b)=>(a.tick??0)-(b.tick??0));
 const values=rows.map(r=>r.value).filter(finite),direction=metric.name==='replicated_findings'?'maximize':metric.direction;
 const best=values.length?(direction==='maximize'?Math.max(...values):Math.min(...values)):null;
 const allValues=results.filter(r=>outcomeOf(r.status,r.kind)!=='baseline').map(r=>r.value).filter(finite);
 const worst=allValues.length?(direction==='maximize'?Math.min(...allValues):Math.max(...allValues)):null;
 let progress:number|null=null;
 if(best!=null&&runBest!=null){
  if(best===runBest)progress=1;
  else if(baseline!=null){
   const span=runBest-baseline;
   progress=span===0?0:clamp((best-baseline)/span);
  }else if(worst!=null){
   const span=Math.abs(runBest-worst);
   progress=span===0?1:clamp(direction==='maximize'?(best-worst)/span:(worst-best)/span);
  }
 }
 const counts={kept:0,discarded:0,crashed:0};
 for(const row of rows){const outcome=outcomeOf(row.status,row.kind);if(outcome!=='baseline')counts[outcome]++;}
 return {best,progress,...counts,spark:rows.map(r=>r.value).filter(finite).slice(-12)};
}

export function sparklinePath(values:readonly number[],width:number,height:number):string{
 const points=values.filter(finite);
 if(points.length<2||width<=0||height<=0)return '';
 const min=Math.min(...points),max=Math.max(...points),span=max-min;
 return points.map((value,index)=>`${index?'L':'M'}${(index*width/(points.length-1)).toFixed(2)} ${(span?height-(value-min)/span*height:height/2).toFixed(2)}`).join('');
}
