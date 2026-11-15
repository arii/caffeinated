import {test} from 'node:test';
import assert from 'node:assert/strict';
import {committeeOf,podium} from '../src/engine/podium.ts';

test('unscored confirmed studies stay unranked and respect the playhead',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,headline:'First question'},{id:'s2',tick:5,replicated:true,headline:'Later question'}];
 const events=[{tick:2,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}}];
 const result=podium(studies,events,3);
 assert.equal(result.status,'awaiting');assert.equal(result.tested,1);assert.equal(result.confirmed,1);
 assert.equal(result.entries[0].rank,null);assert.equal(result.entries[0].unscored,true);
});

test('registered studies stay pending until their result event is reached',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,rho:.7,p:.01,n:100,halves:[{rho:.7,p:.01,n:50}]}];
 const events=[{tick:1,type:'study.registered',refs:{study_id:'s1'}},{tick:4,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}}];
 const before=podium(studies,events,3),after=podium(studies,events,4);
 assert.equal(before.tested,1);assert.equal(before.confirmed,0);assert.equal(before.entries.length,0);
 assert.equal(after.tested,1);assert.equal(after.confirmed,1);assert.equal(after.entries[0].rho,.7);
});

test('committee adapter supports current, legacy and unavailable shapes',()=>{
 assert.equal(committeeOf({id:'s',committee:{score:.8,rejected:false}})?.score,.8);
 assert.equal(committeeOf({id:'s',graded:{committee:{score:.6,rejected:false}}})?.score,.6);
 assert.equal(committeeOf({id:'s',graded:{scores:{judgeA:.8,judgeB:.6}}})?.score,.6);
 assert.equal(committeeOf({id:'s',committee:{available:false,score:null}})?.score,null);
 assert.equal(committeeOf({id:'missing',graded:{}}),null);
});

test('rank only scored, non-rejected studies; awards are tick bounded',()=>{
 const studies=[{id:'s1',tick:1,confirmed:true,p:.01,committee:{score:.7}},{id:'s2',tick:1,confirmed:true,p:.02,committee:{score:.9}},{id:'s3',tick:1,confirmed:true,committee:{score:.99,rejected:true}}];
 const awards=[
  {tick:1,type:'study.result',refs:{study_id:'s1'},payload:{confirmed:true}},
  {tick:1,type:'study.result',refs:{study_id:'s2'},payload:{confirmed:true}},
  {tick:1,type:'study.result',refs:{study_id:'s3'},payload:{confirmed:true}},
  {tick:3,type:'award.issued',refs:{study_id:'s2'},payload:{score:.95}}
 ];
 const before=podium(studies,awards,2),after=podium(studies,awards,3);
 assert.equal(before.status,'ranked');assert.deepEqual(before.entries.map(e=>e.studyId),['s1']);
 assert.deepEqual(after.entries.map(e=>e.studyId),['s2','s1']);
 assert.equal(after.entries[0].score,.95);
 assert.equal(committeeOf({id:'s',result:{}},[{tick:3,type:'award.issued',refs:{study_id:'s'},payload:{score:.75}}])?.score,.75);
});
