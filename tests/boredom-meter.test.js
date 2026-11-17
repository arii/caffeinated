import {test} from 'node:test';
import assert from 'node:assert/strict';
import {boredomMeterAttributes} from '../src/engine/boredomMeter.ts';

test('known boredom exposes a rounded meter value including a real zero',()=>{
 for(const [value,expected] of [[0,'0'],[56.7,'57'],[100,'100']]){
  assert.deepEqual(boredomMeterAttributes(value,'Scientist boredom'),{role:'meter','aria-label':'Scientist boredom','aria-valuemin':'0','aria-valuemax':'100','aria-valuenow':expected});
 }
});

test('unknown and invalid boredom are named as unmeasured without numeric ARIA',()=>{
 for(const value of [null,NaN,Infinity]){
  assert.deepEqual(boredomMeterAttributes(value,'Swarm boredom'),{role:'img','aria-label':'Swarm boredom: not measured','aria-valuemin':null,'aria-valuemax':null,'aria-valuenow':null});
 }
});
