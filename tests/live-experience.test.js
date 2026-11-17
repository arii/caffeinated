import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import ts from 'typescript';
import {openingTick,reloadTick,following,liveButton,eventsAfter} from '../src/engine/liveFollow.ts';
import {momentsBetween} from '../src/engine/moments.ts';
import {outcomeOf,scoreSeries,scoreChartSvg} from '../src/engine/scoreChart.ts';
import {agentIdentity,humanizeActivity,eventCaption,teamRoster} from '../src/engine/agentIdentity.ts';
import {regimeLabel,boredomComponents} from '../src/engine/boredom.ts';
import {runStatus,taskTitle,metricLabel,publishWarning,pickerLabel,pickerOptions} from '../src/engine/runInfo.ts';

const esc=v=>String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const source=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8');

test('live runs open at the edge and archives at the start',()=>{
 assert.equal(openingTick({live:true,totalTicks:42}),42);
 assert.equal(openingTick({live:false,totalTicks:42}),0);
});
test('live reload moves followers to the new edge and keeps scrubbed viewers in place',()=>{
 assert.equal(reloadTick(42,{live:true,totalTicks:50},true),50);
 assert.equal(reloadTick(12,{live:true,totalTicks:50},false),12);
 assert.equal(reloadTick(60,{live:false,totalTicks:50},true),50);
});
test('LIVE control is hidden for archives, quiet at the edge, and counts newer events when scrubbed back',()=>{
 const events=[{tick:1,type:'a'},{tick:5,type:'b'},{tick:9,type:'c'}];
 assert.equal(liveButton({live:false,totalTicks:10},3,true,events).hidden,true);
 assert.deepEqual(liveButton({live:true,totalTicks:10},10,true,events),{hidden:false,atEdge:true,label:'● LIVE'});
 assert.deepEqual(liveButton({live:true,totalTicks:10},4,false,events),{hidden:false,atEdge:false,label:'● Go live · 2 new'});
 assert.equal(following({live:true,totalTicks:10},10,false),false);
 assert.equal(eventsAfter(events,9),0);
});
test('Go live button resumes playback at the newest tick',()=>{
 const button={},seeks=[];let announced=0;
 const context={recording:{manifest:{live:true,totalTicks:77}},tick:3,playing:false,walking:true,conversation:{close(){}},
  seek:v=>{seeks.push(v);context.tick=v;},setWalking(v){context.walking=v;},announce(){announced++;},$:()=>button};
 runInNewContext(ts.transpile(source.split('\n').find(l=>l.startsWith("$('go-live').onclick"))),context);
 button.onclick();
 assert.deepEqual(seeks,[77]);
 assert.equal(context.playing,true);
 assert.equal(context.walking,false);
 assert.equal(announced,1);
});
test('discovery.made becomes a New best! moment with the score and previous best',()=>{
 const events=[{tick:2,type:'discovery.made',agentId:'a1',payload:{metric_value:0.91,previous_best:0.5,title:'Row swap'}},{tick:8,type:'discovery.made',payload:{}}];
 const [m]=momentsBetween(events,0,5,{name:'det_ratio'});
 assert.equal(m.title,'New best!');
 assert.equal(m.kind,'best');
 assert.equal(m.agentId,'a1');
 assert.match(m.detail,/det ratio 0\.91 \(was 0\.5\) · Row swap/);
 assert.deepEqual(momentsBetween(events,5,10).map(m=>m.title),['New discovery!']);
 assert.deepEqual(momentsBetween(events,2,5),[]);
});
test('regime moments fire only on a change into a snap or breakout, and awards are announced',()=>{
 const events=[{tick:1,type:'round.started',payload:{regime:'EXPLOIT'}},{tick:3,type:'round.started',payload:{regime:'BOREDOM_SNAP'}},{tick:4,type:'round.started',payload:{regime:'BOREDOM_SNAP'}},{tick:6,type:'award.issued',payload:{award:'Ig Nobel Physics',title:'Sticky toast'}}];
 assert.deepEqual(momentsBetween(events,0,10).map(m=>[m.kind,m.title]),[['regime','Boredom snap'],['award','Ig Nobel Physics']]);
 assert.deepEqual(momentsBetween(events,3,5),[]);
});
test('score series keeps every candidate and builds a best-so-far line with new-best markers',()=>{
 assert.equal(outcomeOf('keep'),'kept');
 assert.equal(outcomeOf('discard'),'discarded');
 assert.equal(outcomeOf('crash'),'crashed');
 assert.equal(outcomeOf('not_replicated'),'discarded');
 assert.equal(outcomeOf('keep','baseline'),'baseline');
 const results=[{tick:1,value:1,status:'keep',kind:'baseline',agent:'B1',description:'base'},{tick:2,value:0.5,status:'discard',agent:'C1',description:'worse'},{tick:3,value:null,status:'crash',agent:'P1',description:'boom'},{tick:4,value:2,status:'keep',agent:'B1',description:'better'},{tick:9,value:3,status:'keep',agent:'B1',description:'future'}];
 const frames=[{tick:0,snapshot:{value:null}},{tick:1,snapshot:{value:1}},{tick:2,snapshot:{value:1}},{tick:4,snapshot:{value:2}},{tick:9,snapshot:{value:3}}];
 const s=scoreSeries(results,frames,5);
 assert.deepEqual(s.points.map(p=>p.outcome),['baseline','discarded','crashed','kept']);
 assert.deepEqual(s.best,[[1,1],[4,2]]);
 assert.deepEqual(s.newBest,[[4,2]]);
 const svg=scoreChartSvg(s,{name:'det_ratio',direction:'maximize'},5,esc);
 assert.match(svg,/<svg[^>]*role="group"/);
 assert.match(svg,/best-line/);
 assert.equal((svg.match(/class="new-best"/g)||[]).length,1);
 assert.equal((svg.match(/class="pt /g)||[]).length,4);
 assert.match(svg,/↑ better/);
 assert.doesNotMatch(svg,/NaN/);
});
test('score chart degrades without measurements and with a single flat value',()=>{
 assert.match(scoreChartSvg(scoreSeries([],[],0),{name:'loss',direction:'minimize'},0,esc),/No measurements/);
 const flat=scoreChartSvg(scoreSeries([{tick:1,value:4,status:'keep',agent:'a',description:'x'}],[{tick:1,snapshot:{value:4}}],1),{name:'loss',direction:'minimize'},1,esc);
 assert.doesNotMatch(flat,/NaN|Infinity/);
 assert.match(flat,/↓ better/);
});
test('agent identity comes from manifest fields; staff are labelled and prefixes are only a fallback',()=>{
 assert.deepEqual(agentIdentity({id:'c',name:'Mira',type:'critic'}),{initial:'M',familyKey:'S',familyLabel:'STAFF · CRITIC',staff:true,color:undefined});
 assert.equal(agentIdentity({id:'r',name:'Ada'},{agent_id:'r',field:'acoustics',color:'#aabbcc'}).familyLabel,'ACOUSTICS');
 assert.equal(agentIdentity({id:'r',name:'Ada'},{agent_id:'r',color:'red;x'}).color,undefined);
 assert.equal(agentIdentity({id:'r',name:'Charlie',family:'biology',familySource:'swarm'}).familyKey,'B');
 assert.equal(agentIdentity({id:'r',name:'Charlie',family:'C',familySource:'display assignment'}).familyLabel,'RESEARCH');
 assert.equal(agentIdentity({id:'r',name:'Peter'}).familyLabel,'RESEARCH');
 assert.equal(agentIdentity({id:'r',name:'P2'}).familyLabel,'PHYSICS');
});
test('activity and event labels are humanized and placeholder messages are not quoted',()=>{
 assert.equal(humanizeActivity('writing_diary'),'writing notes');
 assert.equal(humanizeActivity('new_thing'),'new thing');
 assert.equal(eventCaption({type:'experiment.finished',message:'experiment · finished'},'B1'),'Experiment finished · B1');
 assert.equal(eventCaption({type:'discovery.made',message:'Found a better matrix'}),'New best: Found a better matrix');
 assert.ok(eventCaption({type:'x.y',message:'a'.repeat(300)}).length<130);
 assert.equal(eventCaption({type:'discovery.made',message:'[EXPLOIT] Lengthen tabu runs'}),'New best: [EXPLOIT] Lengthen tabu runs');
 assert.equal(eventCaption({type:'x.y',message:'[1, 2]'}),'X y');
 assert.equal(eventCaption({type:'memory.written',message:'{"ledger_sha256":"abc"}'},'B1'),'Memory saved · B1');
});
test('team roster adds the critic and conductor on standby until they act',()=>{
 const all=[{id:'a',type:'researcher'},{id:'c',type:'critic'},{id:'k',type:'conductor'},{id:'z',type:'researcher'}];
 assert.deepEqual(teamRoster(all,[all[0]]).map(a=>[a.id,!!a.standby]),[['a',false],['c',true],['k',true]]);
 assert.deepEqual(teamRoster(all,[all[1]]).map(a=>a.id),['c','k']);
});
test('boredom regime chip and component bars degrade when fields are missing',()=>{
 assert.deepEqual(regimeLabel('PARADIGM_BREAKOUT'),{label:'Paradigm breakout',tone:'breakout',description:'All workers explore; the gate requires a top-level mechanism not used recently.'});
 assert.deepEqual(regimeLabel('SOMETHING_NEW'),{label:'Something new',tone:'calm',description:''});
 assert.equal(regimeLabel(undefined).label,'');
 assert.deepEqual(boredomComponents({stagnation:0.5,repetition:2,bad:'x'}),[{key:'repetition',label:'repetition',value:100},{key:'stagnation',label:'stagnation',value:50}]);
 assert.deepEqual(boredomComponents(undefined),[]);
});
test('run header shows task title, metric direction, and live/stale/stopped status',()=>{
 const now=Date.parse('2026-01-01T00:10:00Z');
 assert.equal(taskTitle({title:'autoresearch · hadamard19 · fake'}),'Hadamard 19×19 max determinant');
 assert.equal(taskTitle({title:'x',provenance:{command:['swarm.py','--task','ignobel']}}),'Ig Nobel Prize hunt');
 assert.equal(taskTitle({title:'Custom'}),'Custom');
 assert.equal(metricLabel({name:'det_ratio',direction:'maximize'}),'det ratio ↑ higher is better');
 assert.equal(metricLabel({name:'loss',direction:'minimize'}),'loss ↓ lower is better');
 assert.equal(runStatus({sample:false,live:true,heartbeat_ts:'2026-01-01T00:09:30Z'},now).status,'live');
 assert.equal(runStatus({sample:false,live:true,heartbeat_ts:'2026-01-01T00:00:00Z'},now).status,'stale');
 assert.equal(runStatus({sample:false,live:true,stale:true},now).status,'stale');
 assert.equal(runStatus({sample:false,status:'interrupted'},now).label,'INTERRUPTED');
 assert.equal(runStatus({sample:false,status:'finished'},now).status,'finished');
 assert.equal(runStatus({},now).status,'sample');
 assert.equal(publishWarning({publish_errors:[{},{}]}),'2 publish errors');
 assert.equal(publishWarning({}),'');
});
test('run picker groups live, swarm and sample recordings with task titles',()=>{
 const items=[{id:'l',title:'autoresearch · hadamard19 · fake',sample:false,live:true},{id:'s',title:'Old run',sample:false,status:'finished'},{id:'x',title:'Bundled <sample>'}];
 const html=pickerOptions(items,esc);
 assert.match(html,/<optgroup label="Live now"><option value="l">● LIVE · Hadamard 19×19 max determinant · fake<\/option>/);
 assert.match(html,/label="Swarm runs"><option value="s">SWARM · Old run/);
 assert.match(html,/Bundled &lt;sample&gt;/);
 assert.equal(pickerLabel({id:'x',title:'Plain'}),'Plain');
});
test('latest boredom reading for an agent stops at the playhead',async()=>{
 const {latestBoredom}=await import('../src/engine/boredom.ts');
 const events=[{tick:1,type:'boredom.measured',agentId:'a',payload:{regime:'EXPLOIT',components:{novelty:1}}},{tick:4,type:'boredom.measured',agentId:'a',payload:{regime:'BOREDOM_SNAP',components:{novelty:0.2}}},{tick:5,type:'boredom.measured',agentId:'b',payload:{regime:'CONVERGED'}}];
 assert.equal(latestBoredom(events,'a',3).regime,'EXPLOIT');
 assert.deepEqual(latestBoredom(events,'a',9).components,{novelty:0.2});
 assert.equal(latestBoredom(events,'c',9),null);
});
test('Ig Nobel candidates measured on another scale stay off the replication-count axis',()=>{
 const results=[{tick:2,value:0.03,status:'replicated',agent:'a',description:'Sticky toast'},{tick:3,value:0.4,status:'not_replicated',agent:'b',description:'Loud cats'}];
 const frames=[{tick:0,snapshot:{value:0}},{tick:2,snapshot:{value:1}}];
 const s=scoreSeries(results,frames,4,false);
 assert.deepEqual(s.points.map(p=>[p.value,p.raw,p.outcome]),[[null,0.03,'kept'],[null,0.4,'discarded']]);
 const svg=scoreChartSvg(s,{name:'replicated_findings',direction:'maximize'},4,esc);
 assert.match(svg,/other measure/);
 assert.match(svg,/replicated · 0\.03/);
 assert.doesNotMatch(svg,/>0\.4</);
});
test('chart points with an experiment id are keyboard-reachable inspector links',()=>{
 const results=[{id:'experiment:1',tick:1,value:1,status:'keep',agent:'B1',description:'a'},{id:'experiment:2',tick:2,value:null,status:'crash',agent:'C1',description:'b'},{tick:3,value:2,status:'discard',agent:'P1',description:'c'}];
 const svg=scoreChartSvg(scoreSeries(results,[{tick:1,snapshot:{value:1}}],3),{name:'loss',direction:'minimize'},3,esc);
 assert.equal((svg.match(/data-experiment="experiment:\d"/g)||[]).length,2);
 assert.equal((svg.match(/tabindex="0"/g)||[]).length,2);
 assert.match(svg,/<g class="pt crashed" data-experiment="experiment:2" tabindex="0" role="button"/);
});
test('Enter/Space opens any non-button inspector link, including the activity caption',()=>{
 assert.match(source,/target\.matches\?\.\('\[data-experiment\]:not\(button\):not\(a\)'\)/);
 assert.match(source,/caption\.tabIndex=0;caption\.setAttribute\('role','button'\)/);
});
test('agents keep manifest names; initials, run-derived descriptors and who-is-who come from data',async()=>{
 const {initials,agentDescriptor,descriptorText,whosWho}=await import('../src/engine/agentIdentity.ts');
 assert.equal(initials('Worker 3'),'W3');
 assert.equal(initials('Kitchen Physics Lab'),'KP');
 assert.equal(initials('Critic'),'C');
 assert.equal(agentIdentity({id:'w',name:'Worker 1',type:'worker'}).familyLabel,'WORKER');
 assert.equal(agentIdentity({id:'w',name:'Worker 1',type:'worker',family:'Chem',familySource:'display assignment'}).familyLabel,'WORKER');
 assert.equal(agentIdentity({id:'b',name:'Baseline',type:'baseline'}).familyLabel,'REFERENCE · BASELINE');
 const events=[{tick:1,type:'agent.assigned',agentId:'w',payload:{role:'exploit'}},{tick:2,type:'gate.checked',agentId:'w',payload:{descriptor:{mechanism:'food_science',method:'new_population'}}},{tick:5,type:'agent.assigned',agentId:'w',payload:{role:'divergent'}}];
 assert.deepEqual(agentDescriptor(events,'w',3),{role:'exploit',mechanism:'food_science',method:'new_population'});
 assert.equal(descriptorText(agentDescriptor(events,'w',9)),'divergent · food science / new population');
 assert.equal(descriptorText({mechanism:'acoustics',method:'reanalysis'},'ACOUSTICS'),'reanalysis');
 const legend=whosWho([{type:'critic',display_name:'Critic'},{type:'worker',display_name:'Worker 2'},{type:'conductor',display_name:'Conductor'},{type:'worker',display_name:'Worker 1'}]);
 assert.deepEqual(legend.map(r=>[r.type,r.names.join('+')]),[['conductor','Conductor'],['worker','Worker 2+Worker 1'],['critic','Critic']]);
 assert.match(legend[2].does,/re-runs/i);
 assert.doesNotMatch(readFileSync(new URL('../src/main.ts',import.meta.url),'utf8'),/\^\[BCP\]\\d\+\$/);
});
