import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {researchTrail,researchResults,introResults,introHtml} from '../src/engine/intro.ts';
const esc=v=>String(v??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const config=JSON.parse(readFileSync(new URL('../data/pages/intro.json',import.meta.url),'utf8'));
test('intro follows the requested order and keeps its secondary sections collapsed',()=>{
 const manifest={id:'live',title:'Live run',totalTicks:0,live:true,provenance:{llm:'moonshot/Kimi-K2',llm_mode:'tinker',exa:'live',memory_backend:'pastdev'}};
 const html=introHtml(config,researchTrail(null),esc,researchResults(null),manifest);
 const at=s=>html.indexOf(s);
 assert.ok(at('<summary>About this project ▾</summary>')<at('<summary>Hack</summary>'));
 assert.ok(at('<summary>Hack</summary>')<at('<summary>Tools</summary>')&&at('<summary>Tools</summary>')<at('<summary>Authors</summary>')&&at('<summary>Authors</summary>')<at('<summary>Boredom</summary>')&&at('<summary>Boredom</summary>')<at('<summary>Exa</summary>'));
 for(const t of ['Tinker','Exa','past.dev','Devin'])assert.match(html,new RegExp(t));
 assert.match(html,/class="placeholder"/);
 assert.match(html,/This year the Ig Nobel research prize was discovered early by a phenomenal breakthrough in artificial scientist swarms\./);
 assert.match(html,/<h1><span class="satire-badge">Satire<\/span> This year the Ig Nobel research prize/);
 assert.match(html,/The secret: making AI less boring\./);
 assert.match(html,/tongue-in-cheek headline/);
 assert.match(html,/id="intro-results-link" class="intro-results-button" href="#intro-real-results">See the real results<\/a>/);
 assert.match(html,/id="intro-qualifier" class="intro-qualifier" href="#intro-real-results"/);
 assert.match(html,/<details id="intro-about" class="intro-about"/);
 assert.match(html,/Live Kimi run/);
 assert.match(html,/Kimi runs through Tinker/);
 assert.doesNotMatch(html,/off in this recording|not verified in this recording/);
 assert.match(html,/id="intro-real-results"/);
 assert.doesNotMatch(html,/<details[^>]*\sopen(?:\s|>)/);
});
test('intro tool claims follow fake, Exa and memory provenance',()=>{
 const manifest={id:'fake',title:'Fake sample',totalTicks:0,live:true,provenance:{llm_mode:'fake',exa:'off',memory_backend:'local'}};
 const html=introHtml(config,researchTrail(null),esc,researchResults(null),manifest);
 assert.match(html,/Fake-LLM sample \(plumbing demo, not research\)/);
 assert.match(html,/\(fake LLM in this recording\)/);
 assert.match(html,/\(off in this recording\)/);
 assert.match(html,/\(local memory in this recording\)/);
 assert.ok(html.includes('Searches prior work and public datasets when enabled; each source card links to the Exa result it came from.'));
 assert.doesNotMatch(html,/Kimi|Thinking Machines/);
});
test('study citations link to matching Exa source cards when available',()=>{
 const r={events:[{tick:1,type:'question.asked',payload:{kind:'search'}},{tick:2,type:'question.asked',payload:{kind:'recall',backend:'pastdev'}}],entities:{sources:[{id:'S1',title:'Steak and risk',url:'https://doi.org/10.1/x'}],studies:[{id:'study:1',question:'Steak?',citations:['https://doi.org/10.1/x','https://doi.org/10.2/y']}]}};
 const t=researchTrail(r);
 assert.deepEqual(t.citations.map(c=>c.sourceId),['S1','']);
 assert.equal(t.exaSearches,1);assert.equal(t.memoryRecalls,1);assert.equal(t.pastdev,true);
 const html=introHtml(config,t,esc);
 assert.match(html,/data-source="S1">Exa result: Steak and risk/);
 assert.match(html,/results not kept as source cards/);
});
test('citations with Exa source cards appear before uncaptured citations',()=>{
 const r={events:[],entities:{sources:[{id:'S1',title:'Steak and risk',url:'https://doi.org/10.1/x'}],studies:[{id:'study:1',question:'Steak?',citations:['https://doi.org/10.2/y','https://doi.org/10.1/x']}]}};
 assert.deepEqual(researchTrail(r).citations.map(c=>c.sourceId),['S1','']);
});
test('only http(s) citations become links',()=>{
 const html=introHtml(config,researchTrail({events:[],entities:{studies:[{id:'s',question:'Q',citations:['javascript:alert(1)','https://ok.example/x']}]}}),esc);
 assert.doesNotMatch(html,/href="javascript:/);
 assert.match(html,/<code>javascript:alert\(1\)<\/code>/);
 assert.match(html,/href="https:\/\/ok.example\/x"/);
});
test('real results report recorded studies, passed findings, award entries, and proxy notes honestly',()=>{
 const r={manifest:{totalTicks:6,proxy_note:'Synthetic benchmark, not a clinical trial.'},entities:{studies:[{id:'study:1',question:'Does it work?'}]},events:[
  {tick:1,type:'study.registered',refs:{study_id:'study:1'},payload:{question:'Does it work?'}},
  {tick:2,type:'study.result',refs:{study_id:'study:1'},payload:{replicated:true,confirmed:true,p:.01}},
  {tick:3,type:'award.issued',refs:{study_id:'study:1'},payload:{award:'Ig Nobel',headline:'A playful award'}}
 ]};
 const results=researchResults(r),html=introHtml(config,researchTrail(r),esc,results,r.manifest);
 assert.deepEqual(results,{studies:1,registered:1,ran:1,confirmed:1,underCurrentRules:0,passed:1,awards:['Ig Nobel · A playful award'],proxyNote:'Synthetic benchmark, not a clinical trial.',isIgnobel:true,preCommittee:false});
 assert.match(html,/Real result so far: 0 of 1 preregistered tests that ran held up \(1 registered\)/);
 assert.match(html,/<p>1 registered · 1 confirmed \(0 under current rules\)<\/p>/);
 assert.match(html,/<p>Prizes awarded: 1<\/p>/);
 assert.doesNotMatch(html,/award\.issued/);
 assert.match(html,/<p class="track3-note">BixBench held-out: baseline 1\/7 → swarm best 6\/7 \(one run; 95% CI 0\.49–0\.97\)<\/p>/);
 assert.match(html,/Synthetic benchmark, not a clinical trial\./);
 assert.match(html,/Track 3 check \(exploratory, 3 runs each\): the preregistered set, stopped early, ranks boredom swarm 0\.26 &gt; single agent 0\.24 &gt; no meter 0\.11; the complete set, picked after it finished, ranks single agent 0\.30 &gt; no meter 0\.09 &gt; boredom swarm 0\.06\. Neither ordering is significant\./);
 assert.doesNotMatch(html,/beat the boredom swarm|3\/3 seeds/);
 assert.match(html,/<p class="track3-note"><a href="https:\/\/github\.com\/arii\/caffeinated\/blob\/main\/experiments\/memory-comparison\/README\.md" target="_blank" rel="noopener noreferrer">past\.dev vs local memory on 419 real memories: hit@1 0\.65 vs 0\.30, 562 ms vs 15 ms \(hand-written probes\)<\/a><\/p>/);
 assert.doesNotMatch(html,/<details id="intro-real-results"[^>]* open/);
});
test('real results replace a current Ig Nobel proxy note for pre-committee recordings',()=>{
 const r={manifest:{title:'Ig Nobel Prize hunt · out-ignobel',proxy_note:'Current task caveat.'},entities:{studies:[{id:'study:1',committee:null}]},events:[]};
 const results=researchResults(r);
 assert.equal(results.proxyNote,'Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.');
});
test('empty recordings do not invent study, award, or proxy results',()=>{
 const r={manifest:{totalTicks:0},entities:{},events:[]},html=introHtml(config,researchTrail(r),esc,researchResults(r));
 assert.match(html,/No Ig Nobel study registrations appear in this recording\./);
 assert.doesNotMatch(html,/No prizes awarded yet — this run stopped before committee judging\./);
 assert.doesNotMatch(html,/Prizes awarded:/);
 assert.match(html,/No proxy note is present in this recording\./);
});
test('credit exhaustion is appended to the no-prizes line only for an explicit credit error',()=>{
 const ordinary={manifest:{id:'ordinary',metric:{name:'replicated_findings',description:'replicated and significant'},totalTicks:0},entities:{studies:[{id:'s1'}]},events:[]};
 const ordinaryHtml=introHtml(config,researchTrail(ordinary),esc,researchResults(ordinary),ordinary.manifest,ordinary);
 assert.match(ordinaryHtml,/No prizes awarded yet — this run stopped before committee judging\./);
 assert.doesNotMatch(ordinaryHtml,/Tinker credit ran out/);
 const stopped={manifest:{id:'stopped',status:'stopped',totalTicks:1,metric:{name:'replicated_findings',description:'replicated and significant'}},entities:{studies:[{id:'study:1'}]},events:[{tick:1,type:'run.stopped',payload:{text:'Tinker credit exhausted after a billing error'}}]};
 const stoppedHtml=introHtml(config,researchTrail(stopped),esc,researchResults(stopped),stopped.manifest,stopped);
 assert.match(stoppedHtml,/No prizes awarded yet — this run stopped before committee judging\. \(Tinker credit ran out\)/);
});
test('BixBench results omit the Ig Nobel award fallback',()=>{
 const run={manifest:{id:'bixbench-mini',totalTicks:0,metric:{name:'accuracy',direction:'maximize'}},entities:{},events:[]};
 const html=introHtml(config,researchTrail(run),esc,researchResults(run),run.manifest,run);
 assert.doesNotMatch(html,/No prizes awarded yet|Prizes awarded:/);
 assert.doesNotMatch(html,/No prize has been awarded\./);
});
test('satire disclosure appears only for Ig Nobel with no reached award',()=>{
 const run={manifest:{title:'Ig Nobel Prize hunt',metric:{name:'replicated_findings'},totalTicks:5},entities:{studies:[]},events:[{tick:5,type:'award.issued',refs:{study_id:'study:1'},payload:{score:.9}}]};
 const before=introHtml(config,researchTrail(run),esc,researchResults(run,4),run.manifest,run);
 const after=introHtml(config,researchTrail(run),esc,researchResults(run,5),run.manifest,run);
 assert.match(before,/No prize has been awarded\. The swarm found known relationships in public teaching datasets, not discoveries\./);
 assert.doesNotMatch(after,/No prize has been awarded\. The swarm found known relationships/);
});
test('Ig Nobel factual line counts accepted finite-p results as ran and registered separately',()=>{
 const studies=Array.from({length:21},(_,i)=>({id:`study:${i+1}`,direction:'positive'}));
 const events=studies.flatMap((study,i)=>{
  const registered={tick:1,type:'study.registered',refs:{study_id:study.id},payload:{question:`Question ${i+1}`}};
  const payload=i>=13?{rejected:'dataset unavailable'}:{rho:.2,p:i<10?.001:.1,n:100,confirmed:true,replicated:true,halves:[{rho:.2,p:.01,n:50},{rho:.2,p:.02,n:50}]};
  return [registered,{tick:2,type:'study.result',refs:{study_id:study.id},payload}];
 });
 const run={manifest:{task:'ignobel',totalTicks:2},entities:{studies},events};
 assert.equal(researchResults(run,0).ran,0);
 const results=introResults(run),html=introHtml(config,researchTrail(run),esc,results,run.manifest,run);
 assert.equal(results.registered,21);assert.equal(results.ran,13);assert.equal(results.underCurrentRules,10);
 assert.match(html,/Real result so far: 10 of 13 preregistered tests that ran held up \(21 registered\); no committee score yet/);
});
