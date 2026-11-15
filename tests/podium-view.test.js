import {test} from 'node:test';
import assert from 'node:assert/strict';
import {podiumMetricHtml} from '../src/engine/podiumView.ts';

test('pre-committee podium HTML uses only the recording explainer',()=>{
 const recording={manifest:{title:'Ig Nobel Prize hunt · out-ignobel',proxy_note:'Current task caveat.',metric:{name:'loss',direction:'minimize',description:'1 - (replicated and significant): 0 = the study replicated, 1 = it did not'}},entities:{studies:[{id:'study:1'}]},events:[]};
 const html=podiumMetricHtml(recording,String);
 assert.match(html,/Pre-committee run/);
 assert.doesNotMatch(html,/replicated/i);
});
