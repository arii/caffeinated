import {test} from 'node:test';
import assert from 'node:assert/strict';
import {compactDock,evidenceMetricLabel,metricValueLabel,taskTitle,pickerLabel,pickerOptions,selectedRunSummary} from '../src/engine/runInfo.ts';
import {formatValue} from '../src/engine/moments.ts';
import {readFileSync} from 'node:fs';

test('playback dock starts compact at desktop and mobile sizes',()=>{
 assert.equal(compactDock(700,800),true);
 assert.equal(compactDock(1440,900),true);
 assert.equal(compactDock(900,500),true);
 assert.equal(compactDock(1920,1080),true);
});

test('user-facing Ig Nobel run title omits the output directory suffix',()=>{
 assert.equal(taskTitle({title:'Ig Nobel Prize hunt · out-ignobel',provenance:{command:['swarm.py','--task','ignobel']}}),'Ig Nobel Prize hunt');
});

test('evidence metric labels follow the metric direction',()=>{
 assert.equal(evidenceMetricLabel({name:'reward',direction:'maximize'}),'Reward');
 assert.equal(evidenceMetricLabel({name:'elapsed_time',direction:'minimize'}),'Loss');
});

test('metric values use the result value before the auxiliary reward',()=>{
 const label=metricValueLabel(0,100,'Loss',formatValue);
 assert.match(label,/Loss 0/);
 assert.doesNotMatch(label,/Loss 100/);
 assert.equal(metricValueLabel(null,100,'Loss',formatValue),'Reward 100');
 assert.equal(metricValueLabel(undefined,100,'Loss',formatValue),'');
});

test('run options use manifest rounds and UTC date, with clean status suffixes',()=>{
 const m={id:'real',sample:false,status:'finished',title:'Ig Nobel hunt',time:{rounds:4,ts_start:'2026-11-15T23:00:00Z'}};
 assert.equal(pickerLabel(m,1),'Run 1 · 4 rounds · Nov 15');
 assert.equal(pickerLabel({...m,status:'stopped'},2),'Run 2 · 4 rounds · Nov 15 · Stopped');
 assert.equal(pickerLabel({...m,sample:true},3),'Run 3 · 4 rounds · Nov 15 · Test');
 assert.equal(pickerLabel({...m,title:'Real research · test run'},3),'Run 3 · 4 rounds · Nov 15 · Test');
 assert.equal(pickerLabel({...m,time:{rounds:1,ts_start:'invalid'}},4),'Run 4 · 1 round');
 assert.equal(pickerLabel({...m,time:{rounds:NaN},rounds:2},5),'Run 5 · 2 rounds');
 assert.equal(pickerLabel({...m,time:{}},6),'Run 6');
 assert.match(pickerOptions([m,{...m,id:'other',status:'stopped'}],String,true),/Run 2 · 4 rounds · Nov 15 · Stopped/);
 assert.equal(pickerOptions([],String),'');
});
test('selected run summary uses the question/title, measured rounds and status without inventing missing data',()=>{
 const m={id:'real',title:'Why do grains separate?',sample:false,status:'stopped',time:{rounds:4}};
 assert.equal(selectedRunSummary(m),'Why do grains separate?\n4 rounds · Stopped');
 assert.equal(selectedRunSummary({...m,title:'',description:'Why do grains separate?'}),'Why do grains separate?\n4 rounds · Stopped');
 assert.equal(selectedRunSummary({...m,time:{rounds:Infinity},title:''}),'Stopped');
});
test('real run names distinguish labels and summaries without output paths or duplicate round counts',()=>{
 const manifests=JSON.parse(readFileSync(new URL('../docs/recordings/index.json',import.meta.url),'utf8'));
 for(const name of ['new boredom formula','traceability rule']){
  const m=manifests.find(m=>m.title.includes(name)),label=pickerLabel(m,1),summary=selectedRunSummary(m);
  assert.match(label,new RegExp(name,'i'));assert.match(summary,new RegExp(name,'i'));
  assert.equal(label.match(/\d+ rounds/g).length,1);assert.doesNotMatch(label,/real research|\(|out-/i);
 }
 const four=manifests.filter(m=>m.time?.rounds===4);
 assert.equal(four.length,2);assert.notEqual(pickerLabel(four[0],1),pickerLabel(four[1],1));assert.notEqual(selectedRunSummary(four[0]),selectedRunSummary(four[1]));
 assert.doesNotMatch(pickerLabel(manifests.find(m=>m.title.includes('out-')),1),/out-/);
 assert.doesNotMatch(pickerLabel(manifests.find(m=>m.title.includes('test run')),1),/Test run/);
 assert.equal(pickerLabel({title:'',sample:false},1),'Run 1');
 assert.match(pickerLabel({title:'A special recording',task_title:'Research',sample:false},1),/A special recording/);
});
