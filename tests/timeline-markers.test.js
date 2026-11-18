import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {gunzipSync} from 'node:zlib';
import {timelineMarkers} from '../src/engine/timelineMarkers.ts';
test('timeline markers describe real round transitions and key event types',()=>{
 const markers=timelineMarkers([{type:'round.started',tick:10,round:2},{type:'experiment.finished',tick:20},{type:'discovery.made',tick:30},{type:'agent.assigned',tick:5}],100);
 assert.deepEqual(markers.map(m=>m.label),['Round 2 starts · tick 10','Experiment finished · tick 20','New best · tick 30']);
 assert.deepEqual(markers.map(m=>m.percent),[10,20,30]);assert.equal(markers[2].best,true);
 assert.deepEqual(timelineMarkers([],100),[]);assert.deepEqual(timelineMarkers([{type:'round.started',tick:1}],0),[]);
 assert.deepEqual(timelineMarkers([{type:'discovery.made',tick:NaN},{type:'award',tick:-1},{type:'award',tick:101}],100),[]);
});
test('real replay round transitions come from frames when no round events were published',()=>{
 const recording=JSON.parse(gunzipSync(readFileSync(new URL('../docs/recordings/f8fa53cc-6afd-5e98-9596-0c7b8711e718.json.gz',import.meta.url))));
 const markers=timelineMarkers(recording.events,recording.manifest.totalTicks,recording.frames);
 assert.deepEqual(markers.filter(m=>m.label.startsWith('Round')).map(m=>m.label),['Round 1 starts · tick 70','Round 2 starts · tick 110','Round 3 starts · tick 146','Round 4 starts · tick 229']);
 assert.equal(timelineMarkers([{type:'round.started',tick:2,round:1}],10,[{tick:3,snapshot:{round:1}},{tick:4,snapshot:{round:1}}]).length,1);
});
test('expanded dock labels and inspector camera guards stay explicit',()=>{
 const html=readFileSync(new URL('../index.html',import.meta.url),'utf8'),main=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8');
 assert.match(html,/Timeline marks: round starts and recorded key events/);assert.match(html,/title="Collapse playback panel"/);assert.match(html,/<span>Less<\/span>/);
 assert.match(main,/experienceStarted&&!CINEMA&&!walking&&!conversation.open/);assert.match(main,/portraitFocusId\|\|walking\|\|conversation.open\|\|modal\(\)/);
});
