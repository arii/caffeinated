import {test} from 'node:test';
import assert from 'node:assert/strict';
import {firstScientistTick,highlightStops,highlightTickAt} from '../src/engine/highlights.ts';

test('highlight reel selects recorded moments and the actual finish',()=>{
 const recording={manifest:{totalTicks:100},events:[
  {tick:10,type:'round.started',payload:{regime:'BOREDOM_SNAP'}},
  {tick:20,type:'discovery.made'},
  {tick:30,type:'study.result',payload:{confirmed:true}},
  {tick:40,type:'verdict.issued'},
  {tick:50,type:'study.result',payload:{confirmed:true}}
 ]};
 assert.deepEqual(highlightStops(recording),[
  {tick:0,label:'Start'},
  {tick:10,label:'Boredom shift'},
  {tick:20,label:'New best'},
  {tick:30,label:'Confirmed study'},
  {tick:40,label:'Critic review'},
  {tick:100,label:'Finish'}
 ]);
});

test('static highlights begin when the first real scientist is assigned',()=>{
 const recording={manifest:{totalTicks:100},events:[
  {tick:5,type:'round.started',payload:{role:'conductor'}},
  {tick:6,type:'agent.assigned',agentId:'scientist-1',payload:{role:'divergent'}},
  {tick:7,type:'agent.assigned',agentId:'scientist-2',payload:{role:'exploit'}}
 ]};
 const start=firstScientistTick(recording),stops=highlightStops(recording,start);
 assert.equal(start,6);
 assert.equal(highlightTickAt(stops,0),6);
 assert.equal(stops[0].label,'Scientists arrive');
});

test('highlight playback pauses on source moments and reaches the real final tick',()=>{
 const stops=[{tick:0,label:'Start'},{tick:50,label:'Review'},{tick:100,label:'Finish'}];
 assert.equal(highlightTickAt(stops,0),0);
 assert.equal(highlightTickAt(stops,1_000),0);
 assert.ok(highlightTickAt(stops,20_000)>0);
 assert.equal(highlightTickAt(stops,75_000),100);
});
