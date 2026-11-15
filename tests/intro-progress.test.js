import {test} from 'node:test';
import assert from 'node:assert/strict';
import {growSchedule,nextCoach} from '../src/engine/introProgress.ts';

test('grow schedule reveals the room before scientists, in order, and clamps its endpoints',()=>{
 const start=growSchedule(0,3),middle=growSchedule(.6,3),end=growSchedule(1,3);
 assert.deepEqual(start,{room:0,agents:[0,0,0]});
 assert.equal(middle.room,1);
 assert.ok(middle.agents[0]>0);
 assert.equal(middle.agents[2],0);
 assert.deepEqual(end,{room:1,agents:[1,1,1]});
 assert.deepEqual(growSchedule(-1,2),{room:0,agents:[0,0]});
 assert.deepEqual(growSchedule(2,2),{room:1,agents:[1,1]});
 assert.deepEqual(growSchedule(.5,0),{room:1,agents:[]});
 for(const t of [-1,0,.15,.4,.6,.9,1,2]){
  const schedule=growSchedule(t,5);
  assert.ok(schedule.room>=0&&schedule.room<=1);
  assert.ok(schedule.agents.every(value=>value>=0&&value<=1));
 }
});

test('coach marks are selected once in their intended order',()=>{
 assert.equal(nextCoach([]),'scientist');
 assert.equal(nextCoach(['scientist']),'scrub');
 assert.equal(nextCoach(new Set(['scientist','scrub'])),null);
});
