import {signed,pValue,type ExperimentDetail,type SourceCard,type StudyCard,type StudyCheck,type DialogueLine} from './inspect.ts';

export interface ViewContext{esc:(v:unknown)=>string;name:(id:string|null)=>string;artifactUrl:(path:string)=>string;experimentLabel?:(id:string)=>string}
const url=(v:string|null)=>v&&/^https?:\/\//i.test(v)?v:null;
const link=(c:ViewContext,href:string|null,label:unknown)=>url(href)?`<a href="${c.esc(href)}" target="_blank" rel="noopener noreferrer">${c.esc(label)}</a>`:c.esc(label);
const state=(v:boolean|null,yes:string,no:string)=>v==null?'<span class="pill">not recorded</span>':`<span class="pill ${v?'ok':'bad'}">${v?yes:no}</span>`;
const experimentButton=(c:ViewContext,id:string)=>`<button class="chip" data-experiment="${c.esc(id)}">${c.esc(c.experimentLabel?.(id)||id.replace(/^experiment:/,'').slice(0,10))}</button>`;
const step=(label:string,body:string,done:boolean)=>`<li class="${done?'done':'pending'}"><b>${label}</b><div>${body}</div></li>`;

export function experimentHtml(d:ExperimentDetail,c:ViewContext,study?:StudyCard|null){
 const e=c.esc,muted=(t:string)=>`<p class="muted">${t}</p>`;
 const idea=d.idea?.text||d.description?`<p>${e(d.idea?.text||d.description)}</p>${d.idea?.rationale?`<p class="muted">${e(d.idea.rationale)}</p>`:''}${d.idea?.predictedDelta!=null?`<p class="muted">Predicted change ${signed(d.idea.predictedDelta,4)}</p>`:''}`:muted('No idea text recorded.');
 const descriptor=d.descriptor?`<p class="muted">${e(Object.entries(d.descriptor).map(([k,v])=>`${k}: ${typeof v==='object'?JSON.stringify(v):v}`).join(' · '))}</p>`:'';
 const gate=d.gate?`<p>${state(d.gate.pass,'passed','blocked')} ${e(d.gate.text||'')}${d.gate.attempts!=null?` <span class="muted">· ${d.gate.attempts} attempt${d.gate.attempts===1?'':'s'}</span>`:''}</p>${d.gate.reasons.length?`<ul>${d.gate.reasons.map(r=>`<li>${e(r)}</li>`).join('')}</ul>`:''}${d.gate.priorArt.length?`<p class="muted">Prior art ${e(d.gate.priorArt.join(', '))}</p>`:''}`:muted('No gate check recorded by this moment.');
 const score=d.result?`<p><span class="pill">${e(d.result.status||'unknown')}</span> Metric <b>${e(d.result.metric??'—')}</b>${d.result.reward!=null?` · reward ${e(d.result.reward)}`:''}</p>${d.result.text?`<p class="muted">${e(d.result.text)}</p>`:''}`:muted('Still running at this moment.');
 const verdict=d.verdict?`<p><span class="pill">${e(d.verdict.verdict||'reviewed')}</span> ${d.verdict.by?`by ${e(c.name(d.verdict.by))}`:''}</p>${d.verdict.why?`<p>${e(d.verdict.why)}</p>`:''}`:muted(d.result?'No critic verdict recorded.':'Awaiting result.');
 const art=Object.entries(d.artifacts),artifacts=`${art.length?`<div class="artifact-links">${art.map(([k,p])=>`<a href="${e(c.artifactUrl(p))}" target="_blank" rel="noopener">${e(k)} ↗</a>`).join('')}</div>`:''}${d.artifacts.diff?`<details data-artifact="${e(c.artifactUrl(d.artifacts.diff))}"><summary>Show code diff</summary><pre class="artifact-text">Loading…</pre></details>`:''}${d.logTail?`<details${d.artifacts.diff?'':' open'}><summary>Log tail</summary><pre class="artifact-text">${e(d.logTail)}</pre></details>`:''}`||muted('No diff or log exported for this experiment.');
 const head=`<p class="inspector-kicker">${e(d.kind||'experiment')}${d.round!=null?` · round ${d.round}`:''}${d.role?` · ${e(d.role)}`:''}</p><h2>${e(d.description||d.idea?.text||d.id)}</h2><p class="muted">${e(c.name(d.agentId))}${d.commit?` · <code>${e(d.commit.slice(0,10))}</code>`:''}</p>`;
 return `${head}<ol class="lifecycle">${step('Idea',idea+descriptor,!!(d.idea||d.description))}${step('Gate',gate,!!d.gate)}${step('Score',score,!!d.result)}${step('Critic',verdict,!!d.verdict)}${step('Artifacts',artifacts,art.length>0||!!d.logTail)}</ol>${study?`<h3>Study</h3>${studyCardHtml(study,c)}`:''}<details class="timeline-list"><summary>Recorded events (${d.timeline.length})</summary><ul>${d.timeline.map(t=>`<li><span>t${t.tick}</span> <b>${e(t.type)}</b> ${e(t.text)}</li>`).join('')}</ul></details>`;
}

export function sourceCardsHtml(cards:SourceCard[],c:ViewContext){
 if(!cards.length)return '<p class="muted">No research sources were retrieved by this moment.</p>';
 return `<div class="card-grid">${cards.slice().reverse().map(s=>`<article class="inspect-card source-card"><h4>${link(c,s.url,s.title)}</h4>${s.url?`<p class="muted source-host">${c.esc(hostOf(s.url))}</p>`:''}${s.highlight?`<blockquote>${c.esc(clip(s.highlight,320))}</blockquote>`:''}<p class="muted">Found by ${c.esc(c.name(s.agentId))} · tick ${s.tick}</p><div class="chips">${s.citedBy.length?`<span class="muted">Cited by</span> ${s.citedBy.map(id=>experimentButton(c,id)).join('')}`:'<span class="muted">Not cited by an experiment yet</span>'}</div></article>`).join('')}</div>`;
}

const rho=(v:number|null)=>v==null?'—':v.toFixed(3);
const checkLine=(r:StudyCheck)=>`rho ${rho(r.rho)}, p ${pValue(r.p)}, n ${r.n??'—'}`;
export function rhoBar(predicted:number|null,observed:number|null){
 const pos=(v:number)=>Math.max(0,Math.min(100,(v+1)*50));
 return `<div class="rho-bar" role="img" aria-label="Predicted rho ${rho(predicted)}, observed rho ${rho(observed)}"><i class="zero"></i>${predicted==null?'':`<i class="predicted" style="left:${pos(predicted)}%"></i>`}${observed==null?'':`<i class="observed" style="left:${pos(observed)}%"></i>`}</div>`;
}
export function awardBadge(s:StudyCard,c:ViewContext){
 if(s.award)return s.award.rejected?`<span class="badge rejected">Committee rejected</span>`:`<span class="badge award">🏆 ${c.esc(s.award.award||'Ig Nobel')}${s.award.score!=null?` · ${s.award.score}`:''}</span>`;
 if(s.result?.rejected)return '<span class="badge rejected">Rejected</span>';
 if(!s.result)return '<span class="badge">Preregistered</span>';
 return s.result.confirmed?'<span class="badge ok">Confirmed</span>':'<span class="badge">Not confirmed</span>';
}
export function studyCardHtml(s:StudyCard,c:ViewContext){
 const e=c.esc,d=s.dataset,r=s.result,variable=(v:string|null,l:string|null)=>v?`${e(v)}${l?` = <b>${e(l)}</b>`:''}`:'—';
 const halves=r?.halves.length?`<div class="halves">${r.halves.map((h,i)=>`<span>Half ${i+1}: rho ${rho(h.rho)}, p ${pValue(h.p)}, n ${h.n??'—'}</span>`).join('')}</div>`:'<p class="muted">Half-sample split not recorded.</p>';
 const reps=s.replications.length?`<p class="muted">Critic replications</p><ul>${s.replications.map(x=>`<li>${checkLine(x)} ${state(x.replicated,'replicated','did not replicate')}</li>`).join('')}</ul>`:'';
 const committee=s.committee?`<div class="committee"><b>Committee${s.committee.score!=null?` · score ${s.committee.score.toFixed(2)}`:''}</b>${!s.committee.available?`<p class="muted">Unavailable for this run.</p>`:''}${s.committee.rejected?`<p class="muted">Rejected: targets a group.</p>`:''}${Object.entries(s.committee.judges).length?`<ul>${Object.entries(s.committee.judges).map(([name,j])=>`<li>Judge ${e(name)} · laugh ${j.laugh??'—'} / think ${j.think??'—'}${j.reason?`: ${e(j.reason)}`:''}</li>`).join('')}</ul>`:''}${s.committee.priorWorkAvailable?`<p class="muted">Prior work</p>${s.committee.priorWork.length?`<ul>${s.committee.priorWork.map(item=>`<li>${link(c,item.url,item.title||item.url)}${item.snippet?`<p class="muted">${e(item.snippet)}</p>`:''}</li>`).join('')}</ul>`:'<p class="muted">No results found.</p>'}`:'<p class="muted">Prior-work search unavailable.</p>'}</div>`:s.award?`<div class="committee"><b>Committee</b>${s.award.headline?`<p>${e(s.award.headline)}</p>`:''}${s.award.rejected?`<p class="muted">Rejected: ${e(s.award.rejected)}</p>`:''}${s.award.verdicts.length?`<ul>${s.award.verdicts.map(v=>`<li>${e(v)}</li>`).join('')}</ul>`:''}${!s.award.headline&&!s.award.verdicts.length&&s.award.text?`<p>${e(s.award.text)}</p>`:''}</div>`:'';
 return `<article class="inspect-card study-card"><div class="study-head">${awardBadge(s,c)}<span class="muted">${e((s.field||'study').replace(/_/g,' '))} · ${e(c.name(s.agentId))}</span></div><h4>${e(s.question||s.hypothesis||s.id)}</h4>${s.hypothesis&&s.question?`<p class="muted">${e(s.hypothesis)}</p>`:''}
<dl><dt>Dataset</dt><dd>${d.url?link(c,d.url,hostOf(d.url)+' · '+(d.url.split('/').at(-1)||'')):e(d.id||'—')}<br>X: ${variable(d.x,d.xLevel)}<br>Y: ${variable(d.y,d.yLevel)}</dd>
<dt>Correlation</dt><dd>Predicted ${rho(s.predictedRho)} → observed <b>${rho(r?.rho??null)}</b>${r?` · p ${pValue(r.p)} · n ${r.n??'—'}`:''}${rhoBar(s.predictedRho,r?.rho??null)}</dd>
<dt>Two halves</dt><dd>${r?halves:'<p class="muted">Awaiting analysis.</p>'}</dd>
<dt>Checks</dt><dd>${r?`${state(r.significant,'significant','not significant')} ${state(r.replicated,'replicated','not replicated')}`:'<span class="pill">pending</span>'}</dd></dl>
${r?.rejected?`<p class="muted">Rejected: ${e(r.rejected)}</p>`:r?.headline?`<p class="headline">${e(r.headline)}</p>`:''}${reps}${committee}<div class="chips">${s.experimentId?experimentButton(c,s.experimentId):''}${s.citations.map(u=>`<span class="chip">${link(c,u,clip(u.replace(/^https?:\/\/(doi\.org\/)?/,''),32))}</span>`).join('')}</div></article>`;
}
export function studyCardsHtml(cards:StudyCard[],c:ViewContext){return cards.length?`<div class="card-grid">${cards.map(s=>studyCardHtml(s,c)).join('')}</div>`:'';}

export function dialogueHtml(lines:DialogueLine[],c:ViewContext,selfId?:string){
 if(!lines.length)return '';
 return `<ol class="dialogue">${lines.map(m=>`<li class="bubble${selfId&&m.from===selfId?' mine':''}${m.kind?` ${c.esc(m.kind)}`:''}"><cite>${c.esc(c.name(m.from))}${m.to.length?` → ${c.esc(m.to.map(id=>c.name(id)).join(', '))}`:''} · tick ${m.tick}${m.kind?` · ${c.esc(m.kind)}`:''}</cite><p>${c.esc(m.text)}</p></li>`).join('')}</ol>`;
}

function hostOf(u:string){try{return new URL(u).hostname.replace(/^www\./,'');}catch{return u;}}
function clip(s:string,n:number){return s.length>n?s.slice(0,n-1)+'…':s;}
