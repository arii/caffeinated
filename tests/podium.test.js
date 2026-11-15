import {test} from 'node:test';
import assert from 'node:assert/strict';
import {committeeOf,podium} from '../src/engine/podium.ts';

test('unscored confirmed studies stay unranked and respect the playhead',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,headline:'First question'},{id:'s2',tick:5,replicated:true,headline:'Later question'}];
 const events=[{tick:2,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}}];
 const result=podium(studies,events,3,false);
 assert.equal(result.status,'awaiting');assert.equal(result.tested,1);assert.equal(result.confirmed,1);
 assert.equal(result.entries[0].rank,null);assert.equal(result.entries[0].unscored,true);
});

test('registered studies stay pending until their result event is reached',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,rho:.7,p:.01,n:100,halves:[{rho:.7,p:.01,n:50}]}];
 const events=[{tick:1,type:'study.registered',refs:{study_id:'s1'}},{tick:4,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}}];
 const before=podium(studies,events,3,false),after=podium(studies,events,4,false);
 assert.equal(before.tested,1);assert.equal(before.confirmed,0);assert.equal(before.entries.length,0);
 assert.equal(after.tested,1);assert.equal(after.confirmed,1);assert.equal(after.entries[0].rho,.7);
});

test('committee adapter supports current, legacy and unavailable shapes',()=>{
 assert.equal(committeeOf({id:'s',committee:{score:.8,rejected:false}},[],0,true)?.score,.8);
 assert.equal(committeeOf({id:'s',graded:{committee:{score:.6,rejected:false}}},[],0,true)?.score,.6);
 assert.equal(committeeOf({id:'s',graded:{scores:{judgeA:.8,judgeB:.6}}},[],0,true)?.score,.6);
 assert.equal(committeeOf({id:'s',committee:{available:false,score:null}},[],0,true)?.score,null);
 assert.equal(committeeOf({id:'missing',graded:{}},[],0,true),null);
});

test('rank only scored, non-rejected studies; awards are tick bounded',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,p:.01,committee:{score:.7}},{id:'s2',tick:1,confirmed:true,p:.02,committee:{score:.9}},{id:'s3',tick:1,confirmed:true,committee:{score:.99,rejected:true}}];
 const awards=[
  {tick:1,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}},
  {tick:1,type:'study.result',refs:{study_id:'s2'},payload:{confirmed:true}},
  {tick:1,type:'study.result',refs:{study_id:'s3'},payload:{confirmed:true}},
  {tick:3,type:'award.issued',refs:{study_id:'s2'},payload:{score:.95}}
 ];
 const before=podium(studies,awards,2,false),after=podium(studies,awards,3,true);
 assert.equal(before.status,'awaiting');assert.ok(before.entries.every(entry=>entry.unscored));
 assert.deepEqual(after.entries.map(e=>e.studyId),['s2','s1']);
 assert.equal(after.entries[0].score,.95);
 assert.equal(committeeOf({id:'s',result:{}},[{tick:3,type:'award.issued',refs:{study_id:'s'},payload:{score:.75}}],3,false)?.score,.75);
});

test('reached result committee scores are ranked before a later award event',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,p:.01}];
 const events=[
  {tick:10,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true,committee:{score:.8}}},
  {tick:50,type:'award.issued',refs:{study_id:'s1'},payload:{score:.9}}
 ];
 const result=podium(studies,events,20,false);
 assert.equal(result.status,'ranked');
 assert.equal(result.entries[0].score,.8);
});

test('future award data blocks entity committee scores until the event is reached',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,committee:{score:.7}}];
 const events=[
  {tick:1,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}},
  {tick:50,type:'award.issued',refs:{study_id:'s1'},payload:{score:.9}}
 ];
 const before=podium(studies,events,20,false),atAward=podium(studies,events,50,true);
 assert.equal(before.status,'awaiting');assert.equal(before.entries[0].unscored,true);
 assert.equal(atAward.status,'ranked');assert.equal(atAward.entries[0].score,.9);
});

test('entity-only committee data is available only at the final state',()=>{
 const study={id:'s1',tick:1,confirmed:true,committee:{score:.8}};
 assert.equal(committeeOf(study,[],20,false),null);
 assert.equal(committeeOf(study,[],20,true)?.score,.8);
 const events=[{tick:1,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}}];
 assert.equal(podium([study],events,20,false).entries[0].unscored,true);
 assert.equal(podium([study],events,20,true).entries[0].score,.8);
});
