import type {Recording} from './replay.ts';
import {studyCards} from './inspect.ts';
import {momentsBetween} from './moments.ts';
import {hasCreditError,provenanceBadge} from './provenanceBadge.ts';
import {isIgnobelRecording,isPreCommitteeIgnobel,recordingProxyNote} from './proxyNote.ts';
import {currentRules,currentRuleThresholds} from './currentRules.ts';
import {igJudgeBoard} from './igJudge.ts';

type Row=Record<string,unknown>;
const rows=(v:unknown):Row[]=>Array.isArray(v)?v as Row[]:v&&typeof v==='object'?Object.values(v as Row) as Row[]:[];
const str=(v:unknown)=>typeof v==='string'?v:'';
type Arm='B'|'S'|'A';

export interface IntroConfig{
 event:{title:string;dates:string;host:string;summary:string};
 tools:{kind?:'llm'|'exa'|'memory';name:string;detail:string;tinkerName?:string;tinkerDetail?:string;fakeName?:string;fakeDetail?:string;fakeSuffix?:string;offSuffix?:string;localSuffix?:string;unknownSuffix?:string;unverifiedDetail?:string}[];
 authors:{placeholder?:boolean;project?:string;team?:string;names:string[]};
 boredom:{title:string;paragraphs:string[];source:string};
 sections:{about:string;event:string;tools:string;authors:string;boredom:string;trail:string};
 labels:{source:string;missingExa:string;recording:string;searches:string;sources:string;recalls:string;pastdev:string;localMemory:string;noCitations:string};
 results:{
  citations?:{runId:string;studyId:string;category:string;text:string;note:string}[];
  proxyNote:string;noProxy:string;studyCount:string;passedCount:string;awardCount:string;awardFallback:string;creditErrorSuffix:string;noAwards:string;factualLine:string;noCommitteeSuffix:string;countLine:string;track3Line:string;memoryComparisonUrl:string;track3Url:string;bixbenchUrl:string;
  charts:{
   toolsCaption:string;sourceCaption:string;funnelCaption:string;
   bixbench:{baseline:{correct:number;total:number;ci:[number,number]};best:{correct:number;total:number;ci:[number,number]};caption:string};
   track3:{groups:{label:string;values:{arm:Arm;value:number}[]}[];legend:{arm:Arm;label:string}[];caption:string};
   memory:{pastdev:{hitAt1:number;hitAt8:number;medianLatencyMs:number};local:{hitAt1:number;hitAt8:number;medianLatencyMs:number};memories:number;probes:number;caption:string};
  };
 };
}

export function researchTrail(r:Pick<Recording,'entities'|'events'>|null){
 const sources=rows(r?.entities?.sources),byUrl=new Map(sources.map(s=>[str(s.url),s]).filter(([u])=>u) as [string,Row][]);
 const citations=rows(r?.entities?.studies).flatMap(st=>(Array.isArray(st.citations)?st.citations:[]).map(c=>{const url=str(c),s=byUrl.get(url);return {study:str(st.question)||str(st.headline)||str(st.id),url,sourceId:s?String(s.id??s.source_id??''):'',title:s?str(s.title):''};})).sort((a,b)=>Number(Boolean(b.sourceId))-Number(Boolean(a.sourceId)));
 const ev=r?.events||[],memory=ev.filter(e=>e.type==='question.asked'&&(e.payload as Row|undefined)?.kind==='recall').length,pastdev=ev.some(e=>/past/i.test(str((e.payload as Row|undefined)?.backend)));
 return {citations,sources:sources.length,exaSearches:ev.filter(e=>e.type==='question.asked'&&(e.payload as Row|undefined)?.kind==='search').length,memoryRecalls:memory,pastdev};
}

export function researchToolUsage(r:Pick<Recording,'entities'|'events'>|null){
 const events=r?.events||[];
 return {
  exaSearches:events.filter(e=>e.type==='question.asked'&&(e.payload as Row|undefined)?.kind==='search').length,
  sourceCards:rows(r?.entities?.sources).length,
  pastdevRecalls:events.filter(e=>e.type==='question.asked'&&(e.payload as Row|undefined)?.kind==='recall'&&(e.payload as Row|undefined)?.backend==='pastdev').length,
  memoryWrites:events.filter(e=>e.type==='memory.written').length
 };
}

export function researchResults(r:Recording|null,tick=Number.MAX_SAFE_INTEGER){
 const cards=studyCards(r,tick),awards=momentsBetween(r?.events||[],-1,tick).filter(m=>m.kind==='award');
 const ran=new Set(cards.filter(s=>s.result&&s.result.rejected==null&&s.result.p!=null&&Number.isFinite(s.result.p)).map(s=>s.id)).size;
 const confirmed=cards.filter(s=>s.result?.confirmed===true||s.result?.replicated===true||s.replications.some(x=>x.confirmed===true||x.replicated===true));
 const underCurrentRules=confirmed.filter(s=>currentRules(s.result?{...s.result,direction:s.direction||undefined}:null,currentRuleThresholds(r?.manifest?.judging)).pass).length;
 const proxyNote=recordingProxyNote(r?.manifest,r)||'';
 return {studies:cards.length,registered:cards.length,ran,confirmed:confirmed.length,underCurrentRules,passed:confirmed.length,awards:awards.map(a=>[a.title,a.detail].filter(Boolean).join(' · ')),proxyNote,isIgnobel:isIgnobelRecording(r?.manifest,r),preCommittee:isPreCommitteeIgnobel(r?.manifest,r)};
}


export interface ResultFinalist{id:string;question:string;dataset:string;rho:number;lab:string}
function datasetName(url:string|null,id:string|null){
 if(!url)return id||'Dataset';
 try{
  const parts=new URL(url).pathname.split('/').filter(Boolean),last=parts.at(-1),name=last==='content'?parts.at(-2):last;
  return decodeURIComponent(name||id||'Dataset').replace(/\.[^.]+$/,'').replaceAll('_',' ').replaceAll('-',' ');
 }catch{return id||url;}
}
export function researchFinalists(r:Recording|null):ResultFinalist[]{
 if(!r)return [];
 const thresholds=currentRuleThresholds(r.manifest?.judging);
 return studyCards(r,Number.MAX_SAFE_INTEGER).flatMap(card=>{
  const result=card.result,rho=result?.rho;
  const preregistered=result?.confirmed===true||result?.replicated===true||card.replications.some(row=>row.confirmed===true||row.replicated===true);
  if(!preregistered||card.priorArtPass===false||rho==null||Math.abs(rho)<.1||!currentRules(result?{...result,direction:card.direction||undefined}:null,thresholds).pass)return [];
  const lab=r.manifest.agents?.find(agent=>agent.agent_id===card.agentId)?.display_name||r.frames.flatMap(frame=>frame.snapshot.agents||[]).find(agent=>agent.id===card.agentId)?.name||card.field?.replaceAll('_',' ')||'Research lab';
  return [{id:card.id,question:card.question||card.hypothesis||card.id,dataset:datasetName(card.dataset.url,card.dataset.id),rho,lab}];
 }).sort((a,b)=>Math.abs(b.rho)-Math.abs(a.rho));
}
export interface CommitteeScoreRow{id:string;headline:string;score:number;rejected:boolean;award:string|null;judgeModels:string[]}
export function researchCommitteeScores(r:Recording|null,tick=Number.MAX_SAFE_INTEGER):CommitteeScoreRow[]{
 if(!r)return [];
 return studyCards(r,tick).flatMap(card=>{
  const score=card.award?.score??card.committee?.score;
  if(score==null||!Number.isFinite(score))return [];
  const judgeModels=[...new Set(Object.values(card.committee?.judges||{}).map(judge=>judge.model).filter((model):model is string=>!!model))];
  return [{id:card.id,headline:card.award?.headline||card.question||card.hypothesis||card.id,score,rejected:card.committee?.rejected===true,award:card.award?.award||null,judgeModels}];
 }).sort((a,b)=>b.score-a.score||a.id.localeCompare(b.id));
}

function externalLink(url:string,label:string,esc:(v:unknown)=>string){
 return /^https?:\/\//i.test(url)?`<a href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>`:esc(label);
}

export function aboutHtml(c:IntroConfig,trail:ReturnType<typeof researchTrail>,esc:(v:unknown)=>string,manifest:Recording['manifest']|null=null,recording:Recording|null=null){
 const provenance=manifest?.provenance,badge=provenanceBadge(manifest,recording||undefined);
 const toolItems=c.tools.map(t=>{
  let name=t.name,detail=t.detail,suffix='';
  if(t.kind==='llm'){
   const fake=provenance?.llm==='fake'||provenance?.llm_mode==='fake',llm=typeof provenance?.llm==='string'?provenance.llm:'',model=llm&&llm!=='fake'?llm.split('/').filter(Boolean).at(-1)||'':'';
   if(fake){name=t.fakeName||t.name;detail=t.fakeDetail||t.detail;suffix=t.fakeSuffix||'';}
   else if(model){name=provenance?.llm_mode==='tinker'?t.tinkerName||t.name:t.name;detail=(provenance?.llm_mode==='tinker'?t.tinkerDetail||t.detail:t.detail).replace(/\{model\}/g,/kimi/i.test(llm)?'Kimi':model);}
   else{detail=t.unverifiedDetail||t.detail;suffix=t.unknownSuffix||'';}
  }else if(t.kind==='exa')suffix=provenance?.exa==='off'?t.offSuffix||'':provenance?.exa==='live'||provenance?.exa==='on'?'':t.unknownSuffix||'';
  else if(t.kind==='memory')suffix=provenance?.memory_backend==='pastdev'?'':provenance?.memory_backend==='local'?t.localSuffix||'':provenance?.memory_backend==='off'?t.offSuffix||'':t.unknownSuffix||'';
  return `<li><b>${esc(name)}</b> ${esc(detail)}${suffix?` <span class="about-provenance-note">${esc(suffix)}</span>`:''}</li>`;
 }).join('');
 const badgeHtml=`<div class="provenance-badge about-provenance" data-tone="${badge.tone}" role="status" aria-label="${esc(badge.label)}"><span class="provenance-badge-label">${esc(badge.label)}</span></div>`;
 const cites=trail.citations.slice(0,12).map(x=>`<li><span>${esc(x.study)}</span> ${x.sourceId?`<button class="chip" data-source="${esc(x.sourceId)}">${esc(c.labels.source)} ${esc(x.title||x.url)}</button>`:`${/^https?:\/\//i.test(x.url)?`<a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.url)}</a>`:`<code>${esc(x.url)}</code>`} <em>${esc(c.labels.missingExa)}</em>`}</li>`).join('');
 return `<div class="about-heading"><h2>${esc(c.sections.about.replace(/\s*▾$/,''))}</h2><button class="drawer-close" data-close-drawer aria-label="Close About">✕</button></div><div class="about-body" tabindex="0" role="region" aria-label="About this research lab"><h3>${esc(c.event.title)}</h3>${badgeHtml}<a class="about-video-link" href="https://arii.github.io/caffeinated/about.html" target="_blank" rel="noopener noreferrer">▶ Watch the 85-second demo</a><p class="about-credit">Built by <a href="https://arii.github.io" target="_blank" rel="noopener noreferrer">Ariel Anders</a>, Jialin Feng, Neeraj Shah and Masha Baidachna · <a href="https://github.com/arii/caffeinated" target="_blank" rel="noopener noreferrer">GitHub</a></p><details class="about-section"><summary>${esc(c.sections.event)}</summary><p class="eyebrow">${esc(c.event.dates)} · ${esc(c.event.host)}</p><p>${esc(c.event.summary)}</p></details><details class="about-section"><summary>${esc(c.sections.tools)}</summary><ul class="about-tools">${toolItems}</ul></details><details class="about-section"><summary>${esc(c.sections.authors)}</summary>${c.authors.project?`<h3>${esc(c.authors.project)}</h3>`:''}${c.authors.team?`<p class="eyebrow">${esc(c.authors.team)}</p>`:''}<p class="${c.authors.placeholder?'placeholder':''}">${esc(c.authors.names.join(', '))}</p></details><details class="about-section"><summary>${esc(c.sections.boredom)}</summary><h3>${esc(c.boredom.title)}</h3>${c.boredom.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}<p class="muted">${externalLink(c.boredom.source,c.boredom.source,esc)}</p></details><details class="about-section"><summary>${esc(c.sections.trail)}</summary><p>${esc(c.labels.recording)}: ${trail.exaSearches} ${esc(c.labels.searches)}, ${trail.sources} ${esc(c.labels.sources)}, ${trail.memoryRecalls} ${esc(c.labels.recalls)} ${esc(trail.pastdev?c.labels.pastdev:c.labels.localMemory)}.</p>${cites?`<ul class="about-cites">${cites}</ul>`:`<p class="muted">${esc(c.labels.noCitations)}</p>`}</details></div>`;
}

const armColors:Record<Arm,string>={B:'#e3cba3',S:'#99c6b3',A:'#91a9d1'};
const fmt=(v:number)=>String(Number(v.toFixed(3)));
function toolUseHtml(c:IntroConfig,usage:ReturnType<typeof researchToolUsage>,esc:(v:unknown)=>string){
 const tiles=[
  ['EXA',usage.exaSearches,'searches',''],
  ['EXA',usage.sourceCards,'source cards',c.results.charts.sourceCaption],
  ['past.dev',usage.pastdevRecalls,'recalls',''],
  ['MEMORY',usage.memoryWrites,'memories written','']
 ];
 return `<section class="tool-use"><div class="visual-heading"><h2>Tools used in this run</h2></div><div class="tool-use-grid">${tiles.map(([name,count,label,note])=>`<div class="tool-use-tile"><span class="tool-wordmark">${esc(name)}</span><strong>${count}</strong><span>${esc(label)}</span>${note?`<small>${esc(note)}</small>`:''}</div>`).join('')}</div><p class="chart-caption">${esc(c.results.charts.toolsCaption)}</p><button class="see-sources" type="button" data-open-evidence>See sources</button></section>`;
}

function finalistHtml(c:IntroConfig,r:Recording,esc:(v:unknown)=>string){
 const finalists=researchFinalists(r);
 return `<section class="finalists"><h2>Finalists: awaiting committee judging</h2><div class="finalist-grid">${finalists.map(item=>`<article class="finalist-card"><h3 title="${esc(item.question)}">${esc(item.question)}</h3><div class="finalist-meta"><span>${esc(item.dataset)}</span><span>Lab · ${esc(item.lab)}</span></div><div class="finalist-rho"><svg viewBox="0 0 180 14" role="img" aria-label="Absolute correlation ${Math.abs(item.rho).toFixed(3)}"><rect x="0" y="4" width="170" height="6" rx="3" fill="#ffffff25"/><rect x="0" y="4" width="${Math.max(1,Math.abs(item.rho)*170).toFixed(1)}" height="6" rx="3" fill="#e3cba3"/></svg><span>ρ ${item.rho.toFixed(3)}</span></div></article>`).join('')}</div>${finalists.length?'':'<p>No studies passed both filters.</p>'}</section>`;
}
function committeeResultsHtml(r:Recording,esc:(v:unknown)=>string){
 const rows=researchCommitteeScores(r),noAward=rows.length>0&&rows.every(item=>item.score<.5);
 if(!rows.length)return '';
 return `<section class="finalists committee-results"><h2>${noAward?'Committee verdict: no award':'Committee scores'}</h2><ol class="committee-score-list">${rows.map((item,index)=>`<li class="committee-score-row"><div class="committee-score-heading"><span>${index+1}</span><strong>${esc(item.headline)}</strong><b>${item.score.toFixed(2)}</b></div><div class="committee-score-track" role="img" aria-label="Committee score ${item.score.toFixed(2)} out of 1"><i style="width:${Math.max(0,Math.min(1,item.score))*100}%"></i></div>${item.judgeModels.length?`<small>Judges · ${item.judgeModels.map(esc).join(' · ')}</small>`:''}</li>`).join('')}</ol></section>`;
}

function funnelSvg(results:ReturnType<typeof researchResults>,esc:(v:unknown)=>string){
 const rows:[string,number][]=[['Registered',results.registered],['Tests run',results.ran],['Passed gates',results.confirmed],['Post-hoc floor',results.underCurrentRules]],max=Math.max(1,...rows.map(row=>row[1]));
 return `<svg class="chart-svg" viewBox="0 0 360 126" role="img" aria-label="Ig Nobel study counts">${rows.map(([label,count],i)=>{const y=20+i*29,width=Math.max(2,Number(count)/max*164);return `<text x="4" y="${y+4}" class="chart-label">${esc(label)}</text><rect x="150" y="${y-7}" width="164" height="13" rx="4" class="chart-track"/><rect x="150" y="${y-7}" width="${width.toFixed(1)}" height="13" rx="4" class="chart-bar"/><text x="320" y="${y+4}" class="chart-value">${count}</text>`;}).join('')}</svg>`;
}

function bixbenchSvg(c:IntroConfig,esc:(v:unknown)=>string){
 const {baseline,best}=c.results.charts.bixbench,scale=210,left=112,rows=[{label:'Baseline',score:baseline,y:30,color:'#99c6b3'},{label:'Swarm best',score:best,y:72,color:'#e3cba3'}];
 return `<svg class="chart-svg" viewBox="0 0 380 104" role="img" aria-label="BixBench held-out score with 95 percent confidence intervals">${rows.map(({label,score,y,color})=>{const value=score.correct/score.total,low=left+score.ci[0]*scale,high=left+score.ci[1]*scale;return `<text x="4" y="${y+4}" class="chart-label">${esc(label)}</text><rect x="${left}" y="${y-7}" width="${scale}" height="13" rx="4" class="chart-track"/><rect x="${left}" y="${y-7}" width="${(value*scale).toFixed(1)}" height="13" rx="4" fill="${color}"/><line x1="${low}" y1="${y-13}" x2="${high}" y2="${y-13}" class="chart-whisker"/><line x1="${low}" y1="${y-17}" x2="${low}" y2="${y-9}" class="chart-whisker"/><line x1="${high}" y1="${y-17}" x2="${high}" y2="${y-9}" class="chart-whisker"/><text x="328" y="${y+4}" class="chart-value">${score.correct}/${score.total}</text>`;}).join('')}</svg>`;
}

function track3Svg(c:IntroConfig,esc:(v:unknown)=>string){
 const {groups}=c.results.charts.track3,scale=132/.32;
 return `<svg class="chart-svg" viewBox="0 0 430 164" role="img" aria-label="Track 3 grouped bars: preregistered stopped early, and complete set picked after">${groups.map((group,g)=>{const x=g?220:6,title=group.label.includes('(')?group.label.slice(0,group.label.indexOf('(')).trim():group.label,qualifier=group.label.includes('(')?group.label.slice(group.label.indexOf('(')):'';return `<text x="${x}" y="16" class="chart-group">${esc(title)}</text><text x="${x}" y="32" class="chart-group">${esc(qualifier)}</text>${group.values.map((entry,i)=>{const y=58+i*31;return `<text x="${x}" y="${y+3}" class="chart-label">${esc(entry.arm)}</text><rect x="${x+17}" y="${y-8}" width="132" height="12" rx="4" class="chart-track"/><rect x="${x+17}" y="${y-8}" width="${(entry.value*scale).toFixed(1)}" height="12" rx="4" fill="${armColors[entry.arm]}"/><text x="${x+155}" y="${y+3}" class="chart-value">${entry.value.toFixed(3)}</text>`;}).join('')}`;}).join('')}</svg>`;
}

function memorySvg(c:IntroConfig,esc:(v:unknown)=>string){
 const {pastdev,local}=c.results.charts.memory,rows=[{label:'Hit@1',a:pastdev.hitAt1,b:local.hitAt1,y:30},{label:'Hit@8',a:pastdev.hitAt8,b:local.hitAt8,y:66}],latency=[{label:'past.dev',value:pastdev.medianLatencyMs,color:'#99c6b3'},{label:'Local',value:local.medianLatencyMs,color:'#e3cba3'}];
 const hitRows=rows.map(({label,a,b,y})=>`<text x="4" y="${y+4}" class="chart-label">${esc(label)}</text><text x="60" y="${y-2}" class="chart-mini-label">past.dev</text><rect x="126" y="${y-12}" width="${(a*150).toFixed(1)}" height="10" rx="3" fill="#99c6b3"/><text x="282" y="${y-3}" class="chart-value">${fmt(a)}</text><text x="60" y="${y+12}" class="chart-mini-label">Local</text><rect x="126" y="${y+2}" width="${(b*150).toFixed(1)}" height="10" rx="3" fill="#e3cba3"/><text x="282" y="${y+11}" class="chart-value">${fmt(b)}</text>`).join('');
 const latencyRows=latency.map((item,i)=>{const y=137+i*20;return `<text x="60" y="${y+3}" class="chart-mini-label">${esc(item.label)}</text><rect x="126" y="${y-7}" width="${Math.max(2,item.value/600*150).toFixed(1)}" height="10" rx="3" fill="${item.color}"/><text x="282" y="${y+2}" class="chart-value">${item.value} ms</text>`;}).join('');
 return `<svg class="chart-svg" viewBox="0 0 380 178" role="img" aria-label="Past.dev and local memory retrieval comparison">${hitRows}<line x1="4" y1="100" x2="365" y2="100" class="chart-divider"/><text x="4" y="119" class="chart-label">Median latency</text>${latencyRows}</svg>`;
}

function resultCitationHtml(c:IntroConfig,r:Recording,esc:(v:unknown)=>string){
 const finalist=researchFinalists(r)[0];
 const citation=c.results.citations?.find(item=>item.runId===r.manifest.id&&item.studyId===finalist?.id);
 if(!citation||!finalist)return '';
 return `<section class="result-citation" aria-label="Research result in one sentence"><div class="eyebrow">${esc(citation.category)} · Research citation</div><p class="result-citation-line">${esc(citation.text)}</p><p class="chart-caption">${esc(finalist.dataset)} · ρ ${finalist.rho.toFixed(3)}. ${esc(citation.note)}</p></section>`;
}

export function preCommitteeResultsHtml(c:IntroConfig,r:Recording,esc:(v:unknown)=>string,summary=researchResults(r),finalRankingsShown=false){
 if(finalRankingsShown&&igJudgeBoard(r.igjudge)?.ideas.some(idea=>idea.total!=null&&!idea.error)){
  const committee=committeeResultsHtml(r,esc);
  return `${toolUseHtml(c,researchToolUsage(r),esc)}${committee||'<section class="committee-results"><h2>In-run committee data</h2><p>No in-run committee scores were recorded. Final rankings use the post-run final judge scores.</p></section>'}`;
 }
 if(r.manifest.continuous){
  const verdict=committeeResultsHtml(r,esc)||finalistHtml(c,r,esc);
  return `${verdict}<section class="result-chart"><h2>This session's studies</h2>${funnelSvg(summary,esc)}<p>${summary.registered} registered · ${summary.ran} tested · ${summary.confirmed} confirmed</p></section><p class="metric-note">${esc(r.manifest.metric?.description||summary.proxyNote||c.results.noProxy)}</p>`;
 }

 const charts=c.results.charts,tools=researchToolUsage(r),finalistSection=committeeResultsHtml(r,esc)||finalistHtml(c,r,esc),funnel=`<section class="result-chart"><h2>Ig Nobel test funnel</h2>${funnelSvg(summary,esc)}<p class="chart-caption">${esc(charts.funnelCaption)}</p></section>`;
 const bixbench=`<section class="result-chart"><h2>BixBench held-out</h2>${bixbenchSvg(c,esc)}<p class="chart-caption">${esc(charts.bixbench.caption)}</p></section>`;
 const track3=`<section class="result-chart"><h2>Track 3 · three-arm comparison</h2>${track3Svg(c,esc)}<div class="chart-legend">${charts.track3.legend.map(item=>`<span><i style="background:${armColors[item.arm]}"></i>${esc(item.arm)} = ${esc(item.label)}</span>`).join('')}</div><p class="chart-caption">${esc(charts.track3.caption)}</p></section>`;
 const memory=`<section class="result-chart"><h2>Memory retrieval</h2>${memorySvg(c,esc)}<p class="chart-caption">${esc(charts.memory.caption)}</p></section>`;
 const counts=charts.funnelCaption?c.results.factualLine.replace('{N}',String(summary.registered)).replace('{R}',String(summary.ran)).replace('{C}',String(summary.confirmed)).replace('{K}',String(summary.underCurrentRules)).replace('{committeeSuffix}',summary.preCommittee?c.results.noCommitteeSuffix:''):'';
 const metric=r.manifest.metric?.description||summary.proxyNote||c.results.noProxy;
 const links=[externalLink(c.results.memoryComparisonUrl,'Memory comparison details',esc),externalLink(c.results.track3Url,'Track 3 results and caveats',esc),externalLink(c.results.bixbenchUrl,'BixBench held-out artifact',esc)];
 return `${resultCitationHtml(c,r,esc)}${toolUseHtml(c,tools,esc)}${finalistSection}${funnel}${bixbench}${track3}${memory}<details class="results-details"><summary>Details</summary><p>${esc(counts)}</p><p>${esc(c.results.track3Line)}</p><p class="metric-note"><strong>${esc(c.results.proxyNote)}:</strong> ${esc(metric)}</p><ul class="detail-links">${links.map(link=>`<li>${link}</li>`).join('')}</ul></details>`;
}
