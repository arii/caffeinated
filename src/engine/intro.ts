import type {Recording} from './replay.ts';
export interface IntroConfig{event:{title:string;dates:string;host:string;summary:string};tools:{name:string;detail:string}[];authors:{placeholder?:boolean;names:string[]};boredom:{title:string;paragraphs:string[];source:string};replay:{title:string;button:string}}
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
export function introHtml(c:IntroConfig,trail:ReturnType<typeof researchTrail>,esc:(v:unknown)=>string){
 const cites=trail.citations.slice(0,12).map(x=>`<li><span>${esc(x.study)}</span> ${x.sourceId?`<button class="chip" data-source="${esc(x.sourceId)}">Exa result: ${esc(x.title||x.url)}</button>`:`${/^https?:\/\//i.test(x.url)?`<a href="${esc(x.url)}" target="_blank" rel="noopener noreferrer">${esc(x.url)}</a>`:`<code>${esc(x.url)}</code>`} <em>no Exa result in this recording</em>`}</li>`).join('');
 return `<div class="intro-card"><p class="eyebrow">${esc(c.event.title)} · ${esc(c.event.dates)} · ${esc(c.event.host)}</p><h1>${esc(c.replay.title)}</h1><p>${esc(c.event.summary)}</p>
<section><h2>Tools we used</h2><ul class="intro-tools">${c.tools.map(t=>`<li><b>${esc(t.name)}</b> ${esc(t.detail)}</li>`).join('')}</ul></section>
<section><h2>Authors</h2><p class="${c.authors.placeholder?'placeholder':''}">${esc(c.authors.names.join(', '))}</p></section>
<section><h2>${esc(c.boredom.title)}</h2>${c.boredom.paragraphs.map(p=>`<p>${esc(p)}</p>`).join('')}<p class="muted">${esc(c.boredom.source)}</p></section>
<details class="intro-trail"><summary>How we use Exa / past.dev</summary><p>This run: ${trail.exaSearches} literature searches, ${trail.sources} Exa source cards, ${trail.memoryRecalls} shared-memory recalls${trail.pastdev?' (past.dev)':' (local memory backend)'}.</p>${cites?`<ul class="intro-cites">${cites}</ul>`:'<p class="muted">No study citations in this recording yet.</p>'}</details>
<button id="intro-start" class="intro-start">${esc(c.replay.button)} →</button></div>`;
}
