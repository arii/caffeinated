import {test} from 'node:test';
import assert from 'node:assert/strict';
import {PRE_COMMITTEE_NOTE,isPreCommitteeIgnobel,recordingProxyNote} from '../src/engine/proxyNote.ts';

const metricNote='1 - (replicated and significant): 0 = the study replicated, 1 = it did not';
const splitHalfMetricNote='1 - (split-half consistent and significant): 0 = the study passed split-half consistency, 1 = it did not';
const manifest={title:'Ig Nobel Prize hunt · out-ignobel',proxy_note:'Current task caveat.',metric:{name:'loss',direction:'minimize',description:metricNote}};
const oldRun={entities:{studies:[{id:'study:1',committee:null,result:{committee:null},graded:{committee:null}}]},events:[{type:'study.result'}]};

test('pre-committee Ig Nobel playback chips use only the run explainer',()=>{
 assert.equal(isPreCommitteeIgnobel(manifest,oldRun),true);
 assert.equal(recordingProxyNote(manifest,oldRun),PRE_COMMITTEE_NOTE);
});

test('committee Ig Nobel playback chips reword replication as split-half consistency',()=>{
 for(const study of [
  {committee:{available:false}},
  {result:{committee:{available:true}}},
  {graded:{committee:{score:.5}}}
 ])assert.equal(recordingProxyNote(manifest,{entities:{studies:[study]},events:[]}),splitHalfMetricNote);
 assert.equal(recordingProxyNote(manifest,{entities:{studies:[]},events:[{type:'award.issued'}]}),splitHalfMetricNote);
 assert.doesNotMatch(recordingProxyNote(manifest,{entities:{studies:[{committee:{available:true}}]},events:[]}),/replicat/i);
});

test('non-Ig-Nobel recordings keep their manifest proxy note unchanged',()=>{
 const noStudiesRun={entities:{},events:[]};
 assert.equal(recordingProxyNote({title:'Hadamard run',proxy_note:'verbatim'},noStudiesRun),'verbatim');
 assert.equal(recordingProxyNote({title:'Hadamard run'},noStudiesRun),undefined);
});

test('pre-committee Ig Nobel runs use the recording note, never the current task caveat',()=>{
 assert.equal(recordingProxyNote({title:'Ig Nobel Prize hunt · out-ignobel',proxy_note:'Current task caveat.'},oldRun),PRE_COMMITTEE_NOTE);
});

test('Ig Nobel recordings can be recognized from their registered study entities',()=>{
 assert.equal(recordingProxyNote({title:'Autoresearch',proxy_note:'Current task caveat.'},oldRun),PRE_COMMITTEE_NOTE);
});
