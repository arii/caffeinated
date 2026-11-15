import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {recordingCopy,swarmConnectionLabel,recordingPrefix} from '../src/engine/replay.ts';
import {runStatus,pickerLabel} from '../src/engine/runInfo.ts';

const REPLAY=/replay|recorded|read-only/i;
const now=Date.parse('2026-01-01T00:10:00Z');
const live={id:'l',title:'autoresearch · ignobel',sample:false,live:true,heartbeat_ts:'2026-01-01T00:09:50Z'};
test('live runs never describe themselves as a replay or recording',()=>{
 assert.doesNotMatch(JSON.stringify(recordingCopy(live)),REPLAY);
 assert.doesNotMatch(swarmConnectionLabel(live),REPLAY);
 assert.doesNotMatch(runStatus(live,now).label+runStatus(live,now).detail,REPLAY);
 assert.equal(recordingPrefix(live),'● LIVE · ');
});
test('finished, stalled and sample runs each get distinct copy',()=>{
 const finished={...live,live:false,status:'finished'},stale={...live,live:false,stale:true};
 assert.equal(recordingCopy(finished).kicker,'● SWARM RUN · FINISHED');
 assert.equal(swarmConnectionLabel(finished),'SWARM RUN · FINISHED');
 assert.equal(recordingCopy(stale).kicker,'◌ STALLED RUN');
 assert.doesNotMatch(recordingCopy(stale).callout,/replaying/);
 assert.equal(runStatus(stale,now).label,'◌ STALLED RUN');
 assert.match(pickerLabel(stale),/^◌ STALLED · /);
 assert.equal(recordingCopy({sample:true}).kicker,'● RECORDED REPLAY');
});
test('a heartbeat gone quiet marks a live run as stalled in the picker',()=>{
 assert.match(pickerLabel({...live,heartbeat_ts:'2020-01-01T00:00:00Z'}),/^◌ STALLED · /);
});
test('static lab shell copy carries no replay or recording wording',()=>{
 const html=readFileSync(new URL('../index.html',import.meta.url),'utf8').replace(/<script[\s\S]*?<\/script>/g,'');
 const visible=html.replace(/<[^>]+>/g,' ');
 assert.doesNotMatch(visible,REPLAY);
});
test('the first-run shell and empty states name the artificial scientist swarm',()=>{
 const html=readFileSync(new URL('../index.html',import.meta.url),'utf8'),app=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8');
 assert.match(html,/<title>Artificial Scientist Swarm/);
 assert.match(html,/<meta name="description" content="[^"]*artificial scientist swarm/i);
 assert.match(html,/An artificial scientist swarm at work/);
 assert.match(app,/No artificial scientists are active in the artificial scientist swarm/);
 assert.match(app,/Waiting for the first events from the artificial scientist swarm/);
 assert.match(app,/No artificial scientist swarm recordings available/);
});
