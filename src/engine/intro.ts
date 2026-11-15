import type {Recording} from './replay.ts';
import {studyCards} from './inspect.ts';
import {momentsBetween} from './moments.ts';
import {provenanceBadge} from './provenanceBadge.ts';

export interface IntroConfig{
 event:{title:string;dates:string;host:string;summary:string};
 tools:{kind?:'llm'|'exa'|'memory';name:string;detail:string;tinkerName?:string;tinkerDetail?:string;fakeName?:string;fakeDetail?:string;fakeSuffix?:string;offSuffix?:string;localSuffix?:string;unknownSuffix?:string;unverifiedDetail?:string}[];
 authors:{placeholder?:boolean;names:string[]};
 boredom:{title:string;paragraphs:string[];source:string};
 replay:{title:string;subline:string;button:string;qualifier:string};
 sections:{event:string;tools:string;authors:string;boredom:string;trail:string;results:string};
 labels:{source:string;missingExa:string;recording:string;searches:string;sources:string;recalls:string;pastdev:string;localMemory:string;noCitations:string};
 results:{studyCount:string;passedCount:string;awardCount:string;awardFallback:string;proxyNote:string;noStudies:string;noAwards:string;noProxy:string};
}
type Row=Record<string,unknown>;
const rows=(v:unknown):Row[]=>Array.isArray(v)?v as Row[]:v&&typeof v==='object'?Object.values(v as Row) as Row[]:[];
const str=(v:unknown)=>typeof v==='string'?v:'';
/** Each study citation paired with the Exa source card it came from (matched by URL), plus past.dev memory traffic. */
export function researchTrail(r:Pick<Recording,'entities'|'events'>|null){
 const sources=rows(r?.entities?.sources),byUrl=new Map(sources.map(s=>[str(s.url),s]).filter(([u])=>u) as [string,Row][]);
 const citations=rows(r?.entities?.studies).flatMap(st=>(Array.isArray(st.citations)?st.citations:[]).map(c=>{const url=str(c),s=byUrl.get(url);return {study:str(st.question)||str(st.headline)||str(st.id),url,sourceId:s?String(s.id??s.source_id??''):'',title:s?str(s.title):''};}));
 const ev=r?.events||[],memory=ev.filter(e=>e.type==='question.asked'&&(e.payload as Row|undefined)?.kind==='recall').length,pastdev=ev.some(e=>/past/i.test(str((e.payload as Row|undefined)?.backend)));
 return {citations,sources:sources.length,exaSearches:ev.filter(e=>e.type==='question.asked'&&/search|exa/.test(str((e.payload as Row|undefined)?.kind))).length,memoryRecalls:memory,pastdev};
}

export function researchResults(r:Recording|null){
 const cards=studyCards(r,Number.MAX_SAFE_INTEGER),awards=momentsBetween(r?.events||[],-1,Number.MAX_SAFE_INTEGER).filter(m=>m.kind==='award');
 const passed=cards.filter(s=>s.result?.confirmed===true||s.result?.replicated===true||s.replications.some(x=>x.confirmed===true||x.replicated===true)).length;
 const proxyNote=str((r?.manifest as Recording['manifest']&{proxy_note?:unknown}|undefined)?.proxy_note);
 return {studies:cards.length,passed,awards:awards.map(a=>[a.title,a.detail].filter(Boolean).join(' · ')),proxyNote};
}

export function introHtml(c:IntroConfig,trail:ReturnType<typeof researchTrail>,esc:(v:unknown)=>string,results=researchResults(null),manifest:Recording['manifest']|null=null){
 const provenance=manifest?.provenance,badge=provenanceBadge(manifest);
 const toolItems=c.tools.map(t=>{
  let name=t.name,detail=t.detail,suffix='';
  if(t.kind==='llm'){
   const fake=provenance?.llm==='fake'||provenance?.llm_mode==='fake';
   const llm=typeof provenance?.llm==='string'?provenance.llm:'';
   const model=llm&&llm!=='fake'?llm.split('/').filter(Boolean).at(-1)||'':'';
   if(fake){name=t.fakeName||t.name;detail=t.fakeDetail||t.detail;suffix=t.fakeSuffix||'';}
   else if(model){name=provenance?.llm_mode==='tinker'?t.tinkerName||t.name:t.name;detail=(provenance?.llm_mode==='tinker'?t.tinkerDetail||t.detail:t.detail).replace(/\{model\}/g,/kimi/i.test(llm)?'Kimi':model);}
   else{detail=t.unverifiedDetail||t.detail;suffix=t.unknownSuffix||'';}
  }else if(t.kind==='exa'){
   const exa=provenance?.exa;
   suffix=exa==='off'?t.offSuffix||'':exa==='live'||exa==='on'?'':t.unknownSuffix||'';
  }else if(t.kind==='memory')suffix=provenance?.memory_backend==='pastdev'?'':provenance?.memory_backend==='local'?t.localSuffix||'':provenance?.memory_backend==='off'?t.offSuffix||'':t.unknownSuffix||'';
  return `<li><b>${esc(name)}</b> ${esc(detail)}${suffix?` <span class="intro-provenance-note">${esc(suffix)}</span>`:''}</li>`;
 }).join('');
 const badgeHtml=`<div class="provenance-badge intro-provenance" data-tone="${badge.tone}" role="status" aria-label="${esc(badge.label)}"><span class="provenance-badge-label">${esc(badge.label)}</span></div>`;
 const cites=trail.citations.slice(0,12).map(x=>`<li><span>${esc(x.study)}</span> ${x.sourceId?`<button class="chip" data-source="${esc(x.sourceId)}">${esc(c.labels.source)} ${esc(x.title||x.url)}</button>`:`${/^https?:\/\//i.test(x.url)?`<a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.url)}</a>`:`<code>${esc(x.url)}</code>`} <em>${esc(c.labels.missingExa)}</em>`}</li>`).join('');
 const passed=`<strong>${results.passed}</strong> ${esc(c.results.passedCount)}`;
 const studyTotal=`<strong>${results.studies}</strong> ${esc(c.results.studyCount)}`;
 const studySummary=`<p>${studyTotal} · ${passed}</p>${results.studies?'':`<p>${esc(c.results.noStudies)}</p>`}`;
 const awards=results.awards.length?`<ul>${results.awards.map(a=>`<li>${esc(a==='Award issued'?c.results.awardFallback:a)}</li>`).join('')}</ul>`:`<p>${esc(c.results.noAwards)}</p>`;
 return `<div class="intro-card">${badgeHtml}<h1>${esc(c.replay.title)}</h1><p class="intro-subline">${esc(c.replay.subline)}</p><button id="intro-start" class="intro-start">${esc(c.replay.button)}</button><a id="intro-results-link" class="intro-qualifier" href="#intro-real-results">${esc(c.replay.qualifier)}</a>
<div class="intro-sections"><details class="intro-section"><summary>${esc(c.sections.event)}</summary><p class="eyebrow">${esc(c.event.title)} · ${esc(c.event.dates)} · ${esc(c.event.host)}</p><p>${esc(c.event.summary)}</p></details>
<details class="intro-section"><summary>${esc(c.sections.tools)}</summary><ul class="intro-tools">${toolItems}</ul></details>
<details class="intro-section"><summary>${esc(c.sections.authors)}</summary><p class="${c.authors.placeholder?'placeholder':''}">${esc(c.authors.names.join(', '))}</p></details>
<details class="intro-section"><summary>${esc(c.sections.boredom)}</summary><h2>${esc(c.boredom.title)}</h2>${c.boredom.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}<p class="muted">${esc(c.boredom.source)}</p></details>
<details class="intro-section intro-trail"><summary>${esc(c.sections.trail)}</summary><p>${esc(c.labels.recording)}: ${trail.exaSearches} ${esc(c.labels.searches)}, ${trail.sources} ${esc(c.labels.sources)}, ${trail.memoryRecalls} ${esc(c.labels.recalls)} ${esc(trail.pastdev?c.labels.pastdev:c.labels.localMemory)}.</p>${cites?`<ul class="intro-cites">${cites}</ul>`:`<p class="muted">${esc(c.labels.noCitations)}</p>`}</details></div>
<details id="intro-real-results" class="intro-real-results" hidden><summary>${esc(c.sections.results)}</summary>${studySummary}<p><strong>${results.awards.length}</strong> ${esc(c.results.awardCount)}</p>${awards}${results.proxyNote?`<p><b>${esc(c.results.proxyNote)}:</b> ${esc(results.proxyNote)}</p>`:`<p class="muted">${esc(c.results.noProxy)}</p>`}</details></div>`;
}
