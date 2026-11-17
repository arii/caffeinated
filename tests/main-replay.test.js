import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import ts from 'typescript';
import {initialRecordingId,sortedRecordings} from '../src/engine/replay.ts';
import {pickerOptions} from '../src/engine/runInfo.ts';

const source=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8');
function harness(rows=[],recording=null,query=''){
 const elements=new Map(),attached=[],errors=[];
 const context={recording,recordingManifests:[],initialRecordingId,sortedRecordings,pickerOptions,URLSearchParams,location:{href:`http://localhost/${query}`},URL,
  request:async()=>rows,esc:String,toast:message=>errors.push(message),
  attachRecording:async id=>attached.push(id),
  $:id=>{if(!elements.has(id))elements.set(id,{});return elements.get(id);}};
 runInNewContext(ts.transpile(source.split('\n').find(line=>line.startsWith('async function loadRecordings'))),context);
 return {context,elements,attached,errors};
}
test('polling attaches the first recording after an empty archive becomes populated',async()=>{
 const rows=[],h=harness(rows);
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,[]);
 rows.push({id:'new-run',title:'New run'});
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,['new-run']);
});
test('first discovered recording uses the requested selection when present',async()=>{
 const h=harness([{id:'first',title:'First'},{id:'selected',title:'Selected'}],null,'?recording=selected');
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,['selected']);
});
test('first discovered recording resolves a unique shared prefix without rewriting the location',async()=>{
 const h=harness([{id:'first',title:'First'},{id:'selected-full-id',title:'Selected'}],null,'?recording=selected');
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,['selected-full-id']);
 assert.equal(h.context.location.href,'http://localhost/?recording=selected');
});
test('default selection falls back to newest live swarm when the default ZIP run is absent',async()=>{
 const h=harness([{id:'sample',title:'Sample',sample:true},{id:'older',title:'Older',sample:false,live:true,time:{ts_start:'2025-01-01'}},{id:'newest',title:'Newest',sample:false,live:true,time:{ts_start:'2026-01-01'}}]);
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,['newest']);
 assert.match(h.elements.get('run-picker').innerHTML,/● LIVE · Newest/);
 assert.equal(h.context.recordingManifests[0].id,'newest');
});
test('archive refresh leaves an attached recording selected without reattaching',async()=>{
 const h=harness([{id:'new',title:'New'},{id:'current',title:'Current'}],{manifest:{id:'current'}});
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,[]);
 assert.equal(h.elements.get('run-picker').value,'current');
});
test('archive request failure reports the error without attaching a recording',async()=>{
 const h=harness();h.context.request=async()=>{throw new Error('offline');};
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,[]);
 assert.deepEqual(h.errors,['offline']);
 assert.equal(h.elements.get('connection').textContent,'ARCHIVE UNAVAILABLE');
});
function playHarness(live,tick,totalTicks=10){
 const button={},seeks=[];
 const context={recording:{manifest:{live,totalTicks}},STATIC_SITE:false,playbackMode:'full',tick,playing:false,walking:false,
  conversation:{close(){}},seek:value=>{seeks.push(value);context.tick=value;},
  setWalking(){},renderControls(){},$:()=>button};
 runInNewContext(ts.transpile(source.split('\n').find(line=>line.startsWith("$('play').onclick"))),context);
 return {context,seeks,click:()=>button.onclick()};
}
test('resuming paused live playback waits at the end without rewinding',()=>{
 for(const total of [0,10]){
  const h=playHarness(true,total,total);
  h.click();assert.equal(h.context.playing,true);assert.deepEqual(h.seeks,[]);
  assert.equal(h.context.tick,total);
  h.click();assert.equal(h.context.playing,false);
  h.click();assert.equal(h.context.playing,true);assert.deepEqual(h.seeks,[]);
 }
});
test('resuming finished playback rewinds only when at the end',()=>{
 const end=playHarness(false,10);end.click();
 assert.deepEqual(end.seeks,[0]);assert.equal(end.context.playing,true);
 const middle=playHarness(false,5);middle.click();
 assert.deepEqual(middle.seeks,[]);assert.equal(middle.context.tick,5);
});
test('play is a no-op when no recording is attached',()=>{
 const h=playHarness(true,0);h.context.recording=null;h.click();
 assert.equal(h.context.playing,false);assert.deepEqual(h.seeks,[]);
});

test('finale opens results once; closing with X returns to agents without reopening on refresh',()=>{
 const elements=new Map();let opens=0;
 const context={recording:{manifest:{totalTicks:10}},tick:0,snapshot:null,finaleAutoOpened:false,CINEMA:false,inspected:null,playing:false,
  frameAt:()=>({snapshot:{}}),finaleReached:(_recording,tick)=>tick>=10,
  renderControls(){},renderHUD(){},renderEvidence(){},renderConversation(){},renderInspector(){},renderResultsPanel(){},updateDockAutoCollapse(){},unlock(){},
  evidence:{open:false},conversation:{open:false},inspector:{open:false,close(){},addEventListener(){}},
  resultsDialog:{open:false,scrollTop:500,showModal(){this.open=true;opens++;},close(){this.open=false;}},
  $:id=>{if(!elements.has(id))elements.set(id,{});return elements.get(id);}};
 runInNewContext(ts.transpile(source.split('\n').find(line=>line.startsWith('function seek('))),context);
 runInNewContext(ts.transpile(source.split('\n').find(line=>line.startsWith("$('close-inspector').onclick"))),context);
 context.seek(9);assert.equal(opens,0);
 context.seek(10);assert.equal(opens,1);assert.equal(context.resultsDialog.open,true);
 assert.equal(context.resultsDialog.scrollTop,0);
 elements.get('close-results').onclick();assert.equal(context.resultsDialog.open,false);
 context.seek(10);assert.equal(opens,1);assert.equal(context.resultsDialog.open,false);
 elements.get('open-results').onclick();assert.equal(opens,2);assert.equal(context.resultsDialog.open,true);
});
