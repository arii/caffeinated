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
 assert.match(html,/This year's Ig Nobel research prize was discovered early/);
 assert.match(html,/The secret: making AI less boring\./);
 assert.match(html,/tongue-in-cheek headline · see the real results/);
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
 assert.doesNotMatch(html,/Kimi|Thinking Machines/);
});
test('each Ig Nobel citation links back to the Exa source card it came from',()=>{
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
 assert.deepEqual(results,{studies:1,passed:1,awards:['Ig Nobel · A playful award'],proxyNote:'Synthetic benchmark, not a clinical trial.'});
 assert.match(html,/<strong>1<\/strong> Ig Nobel studies · <strong>1<\/strong> passed/);
 assert.match(html,/<strong>1<\/strong> award\.issued entries/);
 assert.match(html,/Synthetic benchmark, not a clinical trial\./);
 assert.doesNotMatch(html,/<details id="intro-real-results"[^>]* open/);
});
test('empty recordings do not invent study, award, or proxy results',()=>{
 const r={manifest:{totalTicks:0},entities:{},events:[]},html=introHtml(config,researchTrail(r),esc,researchResults(r));
 assert.match(html,/No Ig Nobel study registrations appear in this recording\./);
 assert.match(html,/No award\.issued entries appear in this recording\./);
 assert.match(html,/No proxy note is present in this recording\./);
});
