/** IgJudge: the post-run single-agent Ig Nobel judge that scores every idea on six weighted criteria. */
type Row=Record<string,unknown>;
export interface IgCriterion{key:string;label:string;weight:number}
export interface IgIdea{studyId:string;agentId:string;title:string;hypothesis:string;gate:string;committee:string;scores:Record<string,{final:number|null;initial:number|null;revised:number|null;reason:string}>;total:number|null;classification:string;verdict:string;safeguards:string[];priorWork:{title:string;url:string}[];error:string;rank:number|null}
export interface IgJudgeBoard{model:string;criteria:IgCriterion[];ideas:IgIdea[];winner:IgIdea|null}
const row=(v:unknown):Row=>v&&typeof v==='object'&&!Array.isArray(v)?v as Row:{};
const text=(v:unknown)=>typeof v==='string'?v:'';
const num=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)?v:null;
const arr=(v:unknown):unknown[]=>Array.isArray(v)?v:[];
const SHORT:Record<string,string>={humor:'Humor',plausibility:'Plausible',originality:'Original',insight:'Insight',appeal:'Appeal',alignment:'Ig Nobel'};

export function igJudgeBoard(raw:unknown):IgJudgeBoard|null{
 const data=row(raw);if(data.schema!=='igjudge/v1')return null;
 const criteria=arr(data.criteria).map(row).map(c=>({key:text(c.key),label:text(c.label)||text(c.key),weight:num(c.weight)??1})).filter(c=>c.key);
 const ranks=new Map(arr(data.leaderboard).map(row).map(r=>[text(r.study_id),num(r.rank)] as const));
 const ideas=arr(data.ideas).map(row).map(i=>{
  const scores:IgIdea['scores']={};for(const [k,v] of Object.entries(row(i.scores))){const s=row(v);scores[k]={initial:num(s.initial),revised:num(s.revised),final:num(s.final),reason:text(s.reason)};}
  const id=text(i.study_id);
  return {studyId:id,agentId:text(i.agent_id),title:text(i.title)||id,hypothesis:text(i.hypothesis),gate:text(i.gate),committee:text(i.committee),scores,total:num(i.total),classification:text(i.classification),verdict:text(i.verdict),safeguards:arr(i.safeguards).map(text).filter(Boolean),priorWork:arr(i.prior_work).map(row).map(p=>({title:text(p.title),url:text(p.url)})).filter(p=>p.url),error:text(i.error),rank:ranks.get(id)??null};
 });
 if(!ideas.length)return null;
 ideas.sort((a,b)=>(a.rank??Infinity)-(b.rank??Infinity)||a.studyId.localeCompare(b.studyId));
 const winnerId=text(data.winner);
 return {model:text(data.model),criteria,ideas,winner:ideas.find(i=>i.studyId===winnerId&&i.total!=null)??null};
}

const safeUrl=(url:string)=>/^https?:\/\//i.test(url)?url:'';
export function igJudgeHtml(raw:unknown,esc:(value:unknown)=>string){
 const board=igJudgeBoard(raw);if(!board)return '';
 const fmt=(v:number|null)=>v==null?'–':String(Math.round(v*10)/10);
 const score=(idea:IgIdea,key:string)=>idea.scores[key]?.final??null;
 const w=board.winner;
 const priorNote=row(raw).prior_work_available===false?' No prior-work search was used; originality remains unverified.':'';
 const winner=w?`<div class="igjudge-winner"><span class="igjudge-trophy" aria-hidden="true">#1</span><div><p class="igjudge-kicker">Winner · ${esc(fmt(w.total))}/100</p><p class="igjudge-winner-title">${esc(w.title)}</p>${w.verdict?`<p class="igjudge-verdict">${esc(w.verdict)}</p>`:''}</div></div>`:'';
 const head=board.criteria.map(c=>`<th scope="col" title="${esc(c.label)} (×${esc(c.weight)})">${esc(SHORT[c.key]||c.label)}<small>×${esc(c.weight)}</small></th>`).join('');
 const rows=board.ideas.map(i=>`<tr class="${i===w?'igjudge-win':''}"><td>${i.rank??'–'}</td><th scope="row">${esc(i.title)}</th>${board.criteria.map(c=>`<td>${esc(fmt(score(i,c.key)))}</td>`).join('')}<td class="igjudge-total">${esc(i.error?'not scored':fmt(i.total))}</td></tr>`).join('');
 const details=board.ideas.map(i=>`<details class="igjudge-idea${i===w?' igjudge-win':''}"><summary><b>${i.rank?`#${i.rank}`:'–'}</b> ${esc(i.title)} <span class="igjudge-pill">${esc(fmt(i.total))}</span></summary>${i.error?`<p class="igjudge-error">Not scored: ${esc(i.error)}</p>`:''}<p class="igjudge-status">Gate: ${esc(i.gate||'–')} · Committee: ${esc(i.committee||'–')}</p>${i.verdict?`<p>${esc(i.verdict)}</p>`:''}<ul class="igjudge-criteria">${board.criteria.map(c=>{const s=i.scores[c.key];return s?`<li><b>${esc(c.label)}</b> ${esc(fmt(s.final))}/10 <small>(rounds ${esc(fmt(s.initial))} → ${esc(fmt(s.revised))} → ${esc(fmt(s.final))})</small>${s.reason?` — ${esc(s.reason)}`:''}</li>`:'';}).join('')}</ul>${i.safeguards.length?`<p class="igjudge-safeguards">Safeguards: ${i.safeguards.map(esc).join('; ')}</p>`:''}${i.priorWork.length?`<p class="igjudge-prior">Prior work (Exa): ${i.priorWork.slice(0,3).map(p=>safeUrl(p.url)?`<a href="${esc(safeUrl(p.url))}" target="_blank" rel="noopener">${esc(p.title||p.url)}</a>`:esc(p.title)).join(' · ')}</p>`:''}</details>`).join('');
 const scored=board.ideas.filter(i=>i.total!=null).length;
 return `<section class="igjudge" aria-labelledby="igjudge-title"><h2 id="igjudge-title">IgJudge final verdict</h2><p class="igjudge-note">Post-run final pass: one LLM judge${board.model?` (${esc(board.model)})`:''} scored all ${scored} ideas on six criteria (1–10, three internal rounds), weighted to a 10–100 total. The in-run two-judge committee is unchanged; gate/committee status is shown per idea.${esc(priorNote)}</p>${winner}<div class="igjudge-scroll" tabindex="0" role="region" aria-label="IgJudge leaderboard"><table class="igjudge-table"><thead><tr><th scope="col">#</th><th scope="col">Idea</th>${head}<th scope="col">Total</th></tr></thead><tbody>${rows}</tbody></table></div><h3>Per-idea scores and reasons</h3>${details}</section>`;
}
