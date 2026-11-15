import {test} from 'node:test';
import assert from 'node:assert/strict';
import {finaleReached,finaleSummary,wilson} from '../src/engine/finale.ts';

const run=(direction,baseline,best,held_out_test=null)=>({
 manifest:{id:'r',title:'run',totalTicks:10,status:'finished',metric:{name:'loss',label:'loss',direction},held_out_test},
 events:[{tick:10,type:'run.finished'}],
 frames:[{tick:10,snapshot:{metric:{name:'loss',direction},results:[
  {kind:'baseline',status:'baseline',value:baseline,agent:'Base',description:'baseline'},
  ...(best==null?[]:[{kind:'candidate',status:'keep',value:best,agent:'Worker 1',description:'Change seed',commit:'1234567890'}]),
  {kind:'candidate',status:'discard',value:0.8,agent:'Worker 2',description:'Discard'},
  {kind:'candidate',status:'crash',value:null,agent:'Worker 3',description:'Crash'}
 ]}}]
});

test('Wilson score interval reports the BixBench 6/7 range',()=>{
 const interval=wilson(6,7);
 assert.ok(interval);
 assert.ok(Math.abs(interval.low-.49)<.01);
 assert.ok(Math.abs(interval.high-.97)<.01);
});

test('finale summary computes direction-aware improvement and winner details',()=>{
 const min=finaleSummary(run('minimize',.7,.2),10),max=finaleSummary(run('maximize',.2,.7),10);
 assert.ok(Math.abs((min?.delta??0)-.5)<1e-9);assert.ok(Math.abs((max?.delta??0)-.5)<1e-9);
 assert.deepEqual(min?.winner,{commit:'1234567',description:'Change seed',agent:'Worker 1'});
 assert.deepEqual(min?.totals,{kept:1,discarded:1,crashed:1});
});

test('held-out accuracy shows fractions and Wilson intervals',()=>{
 const held={n_items:7,baseline:{score:1/7,loss:6/7},best:{score:6/7,loss:1/7},proxy_note:'subset only',reference_note:'full benchmark'};
 const summary=finaleSummary(run('minimize',.8,.2,held),10);
 assert.equal(summary?.heldOut?.baseline.fraction,'1/7');
 assert.equal(summary?.heldOut?.best.fraction,'6/7');
 assert.equal(summary?.heldOut?.proxyNote,'subset only');
 assert.equal(summary?.heldOut?.referenceNote,'full benchmark');
});

test('no-keeps uses baseline as best and absent held-out data stays absent',()=>{
 const summary=finaleSummary(run('minimize',.4,null),10);
 assert.equal(summary?.best,.4);
 assert.equal(summary?.winner,null);
 assert.equal(summary?.heldOut,null);
});

test('finale becomes visible at completion or a finished/stopped recording end',()=>{
 const recording=run('minimize',.7,.2);
 assert.equal(finaleReached(recording,9),false);
 assert.equal(finaleReached(recording,10),true);
 const stopped=run('minimize',.7,.2);stopped.events=[];stopped.manifest.status='stopped';
 assert.equal(finaleReached(stopped,9),false);
 assert.equal(finaleReached(stopped,10),true);
});
