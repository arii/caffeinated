import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {entityRows} from '../src/engine/inspect.ts';
import {researchCommitteeScores,researchFinalists,researchResults,researchToolUsage,preCommitteeResultsHtml} from '../src/engine/intro.ts';

const config=JSON.parse(readFileSync(new URL('../data/pages/intro.json',import.meta.url),'utf8'));
const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const catalog=JSON.parse(readFileSync(new URL('../docs/recordings/index.json',import.meta.url),'utf8'));
const entry=catalog.find(item=>item.id==='50bbe2bb-0a86-50d9-9ef8-be8aa5fa3929');
assert.ok(entry,'committed Ig Nobel recording is present');
const recording=JSON.parse(gunzipSync(readFileSync(new URL(`../docs/recordings/${entry.id}.json.gz`,import.meta.url))));

test('Ig Nobel results count distinct studies without counting the critic rerun',()=>{
 const summary=researchResults(recording);
 assert.equal(summary.registered,21);
 assert.equal(summary.ran,13);
 assert.equal(summary.confirmed,11);
 assert.equal(summary.underCurrentRules,10);
 assert.equal(recording.events.filter(event=>event.type==='study.replicated').length,1);
});

test('a replicated study the novelty critic matched to prior art is not a finalist',()=>{
 const copy=structuredClone(recording),rows=entityRows(copy,'studies'),raw=copy.entities.studies;
 const target=(Array.isArray(raw)?raw:Object.values(raw)).find(row=>(row.id??row.study_id)==='study:14');
 assert.ok(rows.length&&target);target.prior_art_pass=false;
 const ids=researchFinalists(copy).map(item=>item.id);
 assert.ok(!ids.includes('study:14'));assert.ok(ids.includes('study:11'));
});

test('recorded tool usage is computed from events and source cards',()=>{
 assert.deepEqual(researchToolUsage(recording),{exaSearches:119,sourceCards:357,pastdevRecalls:157,memoryWrites:123});
});

test('the real run shows ten ranked finalists and the recorded no-award committee verdict',()=>{
 const finalists=researchFinalists(recording),ids=finalists.map(item=>item.id);
 assert.equal(finalists.length,10);
 assert.equal(new Set(ids).size,10);
 assert.deepEqual(ids,['study:14','study:11','study:13','study:16','study:9','study:17','study:15','study:3','study:22','study:10']);
 assert.ok(finalists.every((item,index)=>index===0||Math.abs(finalists[index-1].rho)>=Math.abs(item.rho)));
 assert.ok(finalists.every(item=>item.lab&&item.dataset&&Math.abs(item.rho)>=.1));
 const html=preCommitteeResultsHtml(config,recording,esc);
 assert.ok(html.indexOf('Tools used in this run')<html.indexOf('Committee verdict: no award'));
 assert.doesNotMatch(html,/Finalists — awaiting committee judging/);
 assert.equal(researchCommitteeScores(recording).length,11);
 assert.match(html,/openai\/gpt-oss-20b/);assert.match(html,/minimaxai\/minimax-m3\.1-flash/);
 assert.match(html,/119/);assert.match(html,/357/);assert.match(html,/157/);assert.match(html,/123/);
 assert.match(html,/Source cards; some papers repeat\./);
 assert.match(html,/data-open-evidence[^>]*>See sources/);
 assert.doesNotMatch(html,/\b(?:winner|runner-up|gold|silver|bronze|podium)\b/i);
});

test('committee scores replace the pending section with a ranked no-award chart',()=>{
 const studies=['first','second'].map((id,index)=>({id:`study:${id}`,agent_id:`agent:${id}`,dataset:{url:`https://example.org/${id}.csv`}}));
 const events=studies.flatMap((study,index)=>[
  {tick:1,type:'study.registered',refs:{study_id:study.id},payload:{question:`Question ${index+1}?`}},
  {tick:2,type:'study.result',refs:{study_id:study.id},payload:{confirmed:true,rho:.2,p:.01,n:100}},
  {tick:3,type:'award.issued',refs:{study_id:study.id},payload:{award:'Ig Nobel committee',score:index?0.1:0.2,rejected:false,headline:`Finalist ${index+1}`,judges:{a:{model:'openai/gpt-oss-20b'},b:{model:'minimaxai/minimax-m3.1-flash'}}}}
 ]);
 const judged={manifest:{...recording.manifest},frames:[],entities:{studies},events};
 const scores=researchCommitteeScores(judged),html=preCommitteeResultsHtml(config,judged,esc);
 assert.deepEqual(scores.map(item=>item.score),[.2,.1]);
 assert.match(html,/Committee verdict: no award/);
 assert.doesNotMatch(html,/Finalists — awaiting committee judging|Ig Nobel podium|winner|runner-up|gold|silver|bronze/i);
 assert.match(html,/openai\/gpt-oss-20b/);assert.match(html,/minimaxai\/minimax-m3\.1-flash/);
});

test('the compact first screen and static assets contain no satire intro copy',()=>{
 const files=['../index.html','../data/pages/intro.json','../docs/index.html'].map(path=>readFileSync(new URL(path,import.meta.url),'utf8')).join('\n');
 const app=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8'),engine=readFileSync(new URL('../src/engine/intro.ts',import.meta.url),'utf8');
 assert.doesNotMatch(files,/satire|tongue-in-cheek|cheeky|the secret: making ai less boring|joke headline/i);
 assert.doesNotMatch(`${app}\n${engine}`,/start-swarm|showIntro|introHtml|introResults/);
 assert.doesNotMatch(files,/id="intro"/);
 assert.match(files,/id="open-results"/);
 assert.match(files,/id="open-about"/);
});

 test('ending citation is grounded in this recording and does not leak into another run',()=>{
 const html=preCommitteeResultsHtml(config,recording,esc);
 assert.match(html,/Kitchen Physics Lab — for confirming that heavier cars get fewer city miles per gallon/);
 assert.ok(html.indexOf('Research result in one sentence')<html.indexOf('Tools used in this run'));
 assert.match(html,/Committee verdict: no award/);
 const other={...recording,manifest:{...recording.manifest,id:'another-run'}};
 assert.doesNotMatch(preCommitteeResultsHtml(config,other,esc),/Research result in one sentence/);
});


test('continuous results show this session without unrelated historical benchmarks',()=>{
 const live=structuredClone(recording);live.manifest.continuous=true;
 const html=preCommitteeResultsHtml(config,live,esc);
 assert.match(html,/This session's studies/);
 assert.doesNotMatch(html,/BixBench held-out|Track 3|Memory retrieval|Kimi/);
});

test('About panel names the project, team and authors instead of a placeholder',()=>{
 assert.equal(config.authors.placeholder,undefined);
 assert.equal(config.authors.project,'Ig Nobel Prize Winning Artificial Scientist Swarms');
 assert.equal(config.authors.team,'Team caffeinated');
 assert.deepEqual(config.authors.names,['Ariel Anders','Jialin Feng','Neeraj Shah','Masha Baidachna']);
});
