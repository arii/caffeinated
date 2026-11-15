import {test} from 'node:test';
import assert from 'node:assert/strict';
import {topIdeas,finalPodiumHtml,recordingPodiumHtml} from '../src/engine/finalPodium.ts';
import {mergeRecordingDelta,recordingChanged} from '../src/engine/replay.ts';
const esc=v=>String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const idea=(id,score,extra={})=>({id,title:id,description:`Hypothesis ${id}`,score,...extra});
test('top three uses supplied ranks, falling back to descending scores without recalculating them',()=>{
 const ideas=[idea('low',2),idea('high',95),idea('ranked',50,{rank:1}),idea('mid',40),idea('failed',100,{error:'failed'}),idea('missing',null),idea('invalid',NaN)];
 assert.deepEqual(topIdeas(ideas).map(i=>i.id),['ranked','high','mid']);
 assert.equal(ideas[0].id,'low');
});
test('ties remain stable and zero and negative scores remain valid',()=>{
 assert.deepEqual(topIdeas([idea('a',0),idea('b',0),idea('c',-1),idea('d',-2)]).map(i=>i.id),['a','b','c']);
});
test('cards expose full descriptions and exact final scores with safe native disclosures',()=>{
 const html=finalPodiumHtml([idea('<winner>',87.125,{description:'<script>bad</script>',verdict:'judge <verdict>'}),idea('second',70),idea('third',60),idea('fourth',50)],esc);
 assert.equal((html.match(/<details /g)||[]).length,3);
 assert.match(html,/Ig Nobel Prize winner/);
 assert.match(html,/Final score: 87.125/);
 assert.match(html,/&lt;script&gt;bad&lt;\/script&gt;/);
 assert.doesNotMatch(html,/<script>|fourth/);
});
test('pending and short results never invent winners or missing places',()=>{
 assert.match(finalPodiumHtml([],esc),/Awaiting final judge scores/);
 assert.doesNotMatch(finalPodiumHtml([],esc),/Prize winner/);
 const html=finalPodiumHtml([idea('only',0)],esc);
 assert.match(html,/Only 1 scored idea is available/);
 assert.doesNotMatch(html,/Second place|Third place/);
});
const artifact={schema:'igjudge/v1',ideas:[{study_id:'a',title:'A',hypothesis:'The full idea',total:10}],leaderboard:[{study_id:'a',rank:1}]};
const recording={manifest:{id:'r',status:'finished',totalTicks:10},frames:[],events:[],igjudge:artifact};
test('replay hides final results until the finale, and live uses the same component',()=>{
 assert.equal(recordingPodiumHtml(recording,9,esc),'');
 assert.match(recordingPodiumHtml(recording,10,esc),/The full idea/);
 const live={...recording,manifest:{...recording.manifest,status:'running',live:true},events:[]};
 assert.equal(recordingPodiumHtml(live,10,esc),'');
 live.events=[{type:'run.finished',tick:10}];
 assert.equal(recordingPodiumHtml(live,10,esc),recordingPodiumHtml(recording,10,esc));
});
test('late judge scores can arrive through a live delta',()=>{
 const pending={...recording,igjudge:undefined};
 assert.match(recordingPodiumHtml(pending,10,esc),/Awaiting/);
 const delta={kind:'delta',since:10,manifest:recording.manifest,frames:[],events:[],igjudge:artifact};
 const updated=mergeRecordingDelta(pending,delta);
 assert.match(recordingPodiumHtml(updated,10,esc),/Prize winner/);
 const {igjudge,...withoutJudge}=delta;
 assert.equal(mergeRecordingDelta(updated,withoutJudge).igjudge,artifact);
});

test('finished recordings refresh when post-run judging changes their content version',()=>{
 const current={...recording.manifest,live:false,contentVersion:'before-judging'};
 assert.equal(recordingChanged(current,{...current,contentVersion:'after-judging'}),true);
 assert.equal(recordingChanged(current,current),false);
});
