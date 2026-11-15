import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {researchTrail,researchResults,introHtml} from '../src/engine/intro.ts';
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
 assert.match(html,/no Exa result in this recording/);
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
  {tick:2,type:'study.result',refs:{study_id:'study:1'},payload:{replicated:true,confirmed:true}},
  {tick:3,type:'award.issued',refs:{study_id:'study:1'},payload:{award:'Ig Nobel',headline:'A playful award'}}
 ]};
 const results=researchResults(r),html=introHtml(config,researchTrail(r),esc,results,r.manifest);
 assert.deepEqual(results,{studies:1,registered:1,confirmed:1,underCurrentRules:0,passed:1,awards:['Ig Nobel · A playful award'],proxyNote:'Synthetic benchmark, not a clinical trial.',isIgnobel:true,preCommittee:false});
 assert.match(html,/Real result so far: 0 of 1 preregistered tests held up/);
 assert.match(html,/<p>1 registered · 1 confirmed \(0 under current rules\)<\/p>/);
 assert.match(html,/<p>Prizes awarded: 1<\/p>/);
 assert.doesNotMatch(html,/award\.issued/);
 assert.match(html,/<p class="track3-note">BixBench held-out: baseline 1\/7 → swarm best 6\/7 \(one run; 95% CI 0\.49–0\.97\)<\/p>/);
 assert.match(html,/Synthetic benchmark, not a clinical trial\./);
 assert.match(html,/Track 3 check: a single agent scored higher on held-out than the boredom swarm, but the ordering depends on a grader fix made after the winners were known; exploratory\./);
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
 assert.match(html,/No prizes awarded yet — this run stopped before committee judging\./);
 assert.doesNotMatch(html,/Prizes awarded:/);
 assert.match(html,/No proxy note is present in this recording\./);
});
test('credit exhaustion is appended to the no-prizes line only for an explicit credit error',()=>{
 const ordinary={manifest:{id:'ordinary',totalTicks:0},entities:{},events:[]};
 const ordinaryHtml=introHtml(config,researchTrail(ordinary),esc,researchResults(ordinary),ordinary.manifest,ordinary);
 assert.match(ordinaryHtml,/No prizes awarded yet — this run stopped before committee judging\./);
 assert.doesNotMatch(ordinaryHtml,/Tinker credit ran out/);
 const stopped={manifest:{id:'stopped',status:'stopped',totalTicks:1},entities:{},events:[{tick:1,type:'run.stopped',payload:{text:'Tinker credit exhausted after a billing error'}}]};
 const stoppedHtml=introHtml(config,researchTrail(stopped),esc,researchResults(stopped),stopped.manifest,stopped);
 assert.match(stoppedHtml,/No prizes awarded yet — this run stopped before committee judging\. \(Tinker credit ran out\)/);
});
