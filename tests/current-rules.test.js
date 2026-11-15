import {test} from 'node:test';
import assert from 'node:assert/strict';
import {currentRules,currentRuleThresholds} from '../src/engine/currentRules.ts';
import {studyCards} from '../src/engine/inspect.ts';
import {studyCardHtml} from '../src/engine/inspectView.ts';

const splitRule='split-half consistency (both halves p < 0.05, same direction, |ρ| ≥ 0.1)';
const card=(overrides={})=>({rho:.2,p:.004,halves:[{rho:.15,p:.02},{rho:.18,p:.02}],...overrides});

test('current rules grade every half against direction and strict thresholds',()=>{
 assert.deepEqual(currentRules(card()),{pass:true,failures:[]});
 assert.deepEqual(currentRules(card({rho:.0698})),{pass:false,failures:['|ρ| ≥ 0.1']});
 assert.ok(currentRules(card({p:.005})).failures.includes('p < 0.005'));
 assert.ok(currentRules(card({halves:[{rho:.15,p:.02}]})).failures.includes(splitRule));
 assert.ok(currentRules(card({halves:[{rho:.15,p:.05},{rho:.18,p:.02}]})).failures.includes(splitRule));
 assert.ok(currentRules(card({halves:[{rho:.15,p:.02},{rho:.08,p:.02}]})).failures.includes(splitRule));
 assert.ok(currentRules(card({halves:[{rho:.15,p:.02,problem:'invalid input'},{rho:.18,p:.02}]})).failures.includes(splitRule));
 assert.ok(currentRules(card({direction:'positive',halves:[{rho:-.15,p:.02},{rho:.18,p:.02}]})).failures.includes(splitRule));
 assert.deepEqual(currentRules(card({direction:'negative',rho:-.2,halves:[{rho:-.15,p:.02},{rho:-.18,p:.02}]})),{pass:true,failures:[]});
});

test('manifest judging thresholds override current-rule defaults',()=>{
 assert.deepEqual(currentRuleThresholds({min_effect_rho:.2,alpha:.01,replication_alpha:.1}),{minRho:.2,alpha:.01,splitAlpha:.1});
 assert.deepEqual(currentRuleThresholds({}),{minRho:.1,alpha:.005,splitAlpha:.05});
});

test('confirmed recorded studies show badges for each failed current rule',()=>{
 const recording={events:[
  {tick:1,type:'study.registered',refs:{study_id:'study:2'},payload:{question:'Matrix labels'}},
  {tick:2,type:'study.result',refs:{study_id:'study:2'},payload:{rho:.0698,p:.001,n:78559,halves:[{rho:.078,p:.01,n:39280},{rho:.061,p:.001,n:39279}],confirmed:true,replicated:true}}
 ],entities:{studies:[{id:'study:2',field:'street_science',direction:'positive',question:'Matrix labels',dataset:{}}]}};
 const study=studyCards(recording,2)[0],html=studyCardHtml(study,{esc:value=>String(value??''),name:id=>id||'Lab',artifactUrl:()=>''});
 assert.equal(study.direction,'positive');
 assert.match(html,/Confirmed/);
 assert.match(html,/Fails current \|ρ\| ≥ 0\.1 rule/);
 assert.match(html,/Fails current split-half consistency \(both halves p < 0\.05, same direction, \|ρ\| ≥ 0\.1\) rule/);
 assert.equal((html.match(/Fails current/g)||[]).length,2);
});

test('study-card grading retains a half problem from the recording',()=>{
 const recording={events:[
  {tick:1,type:'study.registered',refs:{study_id:'study:3'}},
  {tick:2,type:'study.result',refs:{study_id:'study:3'},payload:{rho:.2,p:.001,halves:[{rho:.15,p:.02,problem:'invalid rows'},{rho:.18,p:.02}],confirmed:true}}
 ],entities:{studies:[{id:'study:3',direction:'positive'}]}};
 const study=studyCards(recording,2)[0];
 assert.equal(study.result.halves[0].problem,'invalid rows');
 assert.ok(currentRules({...study.result,direction:study.direction||undefined}).failures.includes(splitRule));
});
