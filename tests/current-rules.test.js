import {test} from 'node:test';
import assert from 'node:assert/strict';
import {currentRules,currentRuleThresholds} from '../src/engine/currentRules.ts';
import {studyCards} from '../src/engine/inspect.ts';
import {studyCardHtml} from '../src/engine/inspectView.ts';

const card=(overrides={})=>({rho:.2,p:.004,halves:[{rho:.01,p:.8},{rho:.18,p:.02}],...overrides});

test('current rules use the named held-out replication half and strict thresholds',()=>{
 assert.deepEqual(currentRules(card()),{pass:true,failures:[]});
 assert.deepEqual(currentRules(card({rho:.0698})),{pass:false,failures:['|ρ| ≥ 0.1']});
 assert.ok(currentRules(card({p:.005})).failures.includes('p < 0.005'));
 assert.ok(currentRules(card({halves:[{rho:.2,p:.01},{rho:.2,p:.05}]})).failures.some(f=>f.startsWith('split-half consistency')));
 assert.ok(currentRules(card({halves:[{rho:.2,p:.01},{rho:-.2,p:.01}]})).failures.some(f=>f.startsWith('split-half consistency')));
});

test('manifest judging thresholds override current-rule defaults',()=>{
 assert.deepEqual(currentRuleThresholds({min_effect_rho:.2,alpha:.01,replication_alpha:.1}),{minRho:.2,alpha:.01,splitAlpha:.1});
 assert.deepEqual(currentRuleThresholds({}),{minRho:.1,alpha:.005,splitAlpha:.05});
});

test('confirmed recorded studies show one badge for each failed current rule',()=>{
 const recording={events:[
  {tick:1,type:'study.registered',refs:{study_id:'study:2'},payload:{question:'Matrix labels'}},
  {tick:2,type:'study.result',refs:{study_id:'study:2'},payload:{rho:.0698,p:.001,n:78559,halves:[{rho:.07,p:.01,n:39280},{rho:.0698,p:.001,n:39279}],confirmed:true,replicated:true}}
 ],entities:{studies:[{id:'study:2',field:'street_science',question:'Matrix labels',dataset:{}}]}};
 const study=studyCards(recording,2)[0],html=studyCardHtml(study,{esc:value=>String(value??''),name:id=>id||'Lab',artifactUrl:()=>''});
 assert.match(html,/Confirmed/);
 assert.match(html,/Fails current \|ρ\| ≥ 0\.1 rule/);
});
