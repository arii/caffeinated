import test from 'node:test';
import assert from 'node:assert/strict';
import {entityRows,experimentDetail,experimentIdsThrough,sourceCards,studyCards,dialogueThrough,signed,pValue} from '../src/engine/inspect.ts';
import {experimentHtml,sourceCardsHtml,studyCardHtml,dialogueHtml,awardBadge} from '../src/engine/inspectView.ts';

const X='experiment:abc123';
const recording={
 entities:{
  experiments:[{id:X,agent_id:'w1',round:2,kind:'candidate',commit:'abc1234567',description:'Adjust seed to 3',hypothesis_id:'hypothesis:1',descriptor:{method:'seed'},gate:{attempts:2,reasons:['duplicate blob']},metric_value:0.2,status:'discard',verdict:{by_agent_id:'critic',verdict:'reject',why:'Not replicated'},artifacts:{diff:'runs/abc.diff',log:'runs/abc.log'},log_tail:'loss 0.2',source_ids:['source:1']}],
  hypotheses:{'hypothesis:1':{id:'hypothesis:1',text:'Seeds matter',rationale:'Variance is high',predicted_delta:-0.01,source_ids:['source:1']}},
  sources:[{source_id:'source:1',title:'Seeds paper',url:'https://example.org/seeds',highlights:['Seeds change loss'],agent_id:'w1',cited_by:[X,'experiment:future']}],
  studies:[{id:'study:1',agent_id:'w1',experiment_id:X,field:'behavioral_economics',hypothesis:'Rare steak goes with smoking',dataset:{url:'https://example.org/d.csv',x:'steak',x_level:'Rare',y:'smoke',y_level:'Yes'},halves:[{rho:0.1,p:0.2,n:50},{rho:0.3,p:0.01,n:50}],significant:true,citations:['https://doi.org/10.1/x'],committee:{verdicts:[{by:'judge',text:'Funny and true'}]}}],
 },
 events:[
  {tick:1,type:'hypothesis.proposed',agentId:'w1',refs:{hypothesis_id:'hypothesis:1'},payload:{text:'Seeds matter'}},
  {tick:2,type:'source.retrieved',agentId:'w1',refs:{source_id:'source:1'},payload:{}},
  {tick:3,type:'experiment.started',agentId:'w1',refs:{experiment_id:X,hypothesis_id:'hypothesis:1'},payload:{role:'exploit'}},
  {tick:4,type:'gate.checked',refs:{experiment_id:X},payload:{pass:true,text:'Novelty gate passed',prior_art:['Q2']}},
  {tick:4,type:'study.registered',agentId:'w1',refs:{study_id:'study:1',experiment_id:X},payload:{question:'Steak and smoking?',predicted_rho:0.15}},
  {tick:5,type:'message.sent',agentId:'lead',refs:{to_agent_id:'w1'},payload:{kind:'assignment',text:'W1, explore seeds.',to_agent_id:'w1'}},
  {tick:6,type:'experiment.finished',agentId:'w1',refs:{experiment_id:X},payload:{status:'discard',metric_value:0.2,reward:0,text:'Result discard'}},
  {tick:6,type:'study.result',agentId:'w1',refs:{study_id:'study:1',experiment_id:X},payload:{rho:0.2,p:0.004,n:100,replicated:true,confirmed:true,headline:'Rare-steak eaters smoke'}},
  {tick:7,type:'verdict.issued',agentId:'critic',refs:{experiment_id:X},payload:{verdict:'reject',why:'Halves disagree'}},
  {tick:7,type:'study.replicated',agentId:'critic',refs:{study_id:'study:1'},payload:{rho:0.18,p:0.01,n:100,replicated:true}},
  {tick:8,type:'award.issued',refs:{study_id:'study:1'},payload:{award:'Ig Nobel Prize in Gastronomy',score:8.5,rejected:null,headline:'Steak!'}},
  {tick:9,type:'message.sent',agentId:'critic',refs:{},payload:{kind:'verdict',to_agent_ids:['w1','w2'],text:'Your study replicated.'}},
 ],
};
const ctx={esc:v=>String(v??'').replace(/[&<>"']/g,c=>`&#${c.charCodeAt(0)};`),name:id=>id?id.toUpperCase():'Lab',artifactUrl:p=>`/api/recordings/r/artifacts/${p}`};

test('entity rows accept arrays or id maps and native *_id keys',()=>{
 assert.equal(entityRows(recording,'sources')[0].id,'source:1');
 assert.equal(entityRows(recording,'hypotheses')[0].id,'hypothesis:1');
 assert.deepEqual(entityRows({events:[]},'studies'),[]);
 assert.deepEqual(entityRows({entities:{studies:[{study_id:'s'}]},events:[]},'studies').map(s=>s.id),['s']);
});

test('experiment detail is hidden before it starts and reveals lifecycle as playback reaches it',()=>{
 assert.equal(experimentDetail(recording,X,2),null);
 const started=experimentDetail(recording,X,3);
 assert.equal(started.idea.text,'Seeds matter');assert.equal(started.gate,null);assert.equal(started.result,null);assert.equal(started.verdict,null);
 assert.deepEqual(Object.keys(started.artifacts),['diff']);assert.equal(started.logTail,null);
 const gated=experimentDetail(recording,X,4);assert.equal(gated.gate.pass,true);assert.deepEqual(gated.gate.priorArt,['Q2']);assert.equal(gated.studyId,'study:1');
 assert.equal(experimentDetail(recording,X,6).verdict,null);
 const done=experimentDetail(recording,X,9);
 assert.deepEqual(done.gate.reasons,['duplicate blob']);assert.equal(done.gate.attempts,2);
 assert.deepEqual(done.result,{status:'discard',metric:0.2,reward:0,text:'Result discard',tick:6});
 assert.deepEqual(done.verdict,{by:'critic',verdict:'reject',why:'Halves disagree',tick:7});
 assert.deepEqual(done.artifacts,{diff:'runs/abc.diff',log:'runs/abc.log'});assert.equal(done.logTail,'loss 0.2');
 assert.equal(done.timeline.length,6);
 assert.deepEqual(experimentIdsThrough(recording,9),[X]);
});

test('experiment detail degrades for event-only recordings',()=>{
 const d=experimentDetail({events:[{tick:0,type:'experiment.started',agentId:'a',message:'Try X',refs:{experiment_id:'e'}}]},'e',5);
 assert.equal(d.description,'Try X');assert.equal(d.idea,null);assert.deepEqual(d.artifacts,{});
 const html=experimentHtml(d,ctx);
 assert.match(html,/No gate check by this moment/);assert.match(html,/Still running/);assert.match(html,/No diff or log exported/);
});

test('experiment drawer renders idea, gate, score, critic and artifacts',()=>{
 const html=experimentHtml(experimentDetail(recording,X,9),ctx);
 for(const text of ['Seeds matter','Variance is high','passed','duplicate blob','discard','Halves disagree','by CRITIC','/api/recordings/r/artifacts/runs/abc.diff','data-artifact','loss 0.2'])assert.ok(html.includes(text),text);
});

test('source cards show reached sources and only started citing experiments',()=>{
 assert.deepEqual(sourceCards(recording,1),[]);
 const [card]=sourceCards(recording,2);
 assert.equal(card.title,'Seeds paper');assert.equal(card.highlight,'Seeds change loss');assert.deepEqual(card.citedBy,[]);
 assert.deepEqual(sourceCards(recording,3)[0].citedBy,[X]);
 const html=sourceCardsHtml(sourceCards(recording,3),{...ctx,experimentLabel:()=>'Adjust seed'});
 assert.match(html,/href="https:\/\/example.org\/seeds"/);assert.match(html,/data-experiment="experiment:abc123"/);assert.match(html,/Adjust seed/);
 assert.match(sourceCardsHtml([],ctx),/No research sources/);
 assert.doesNotMatch(sourceCardsHtml([{...card,url:'javascript:alert(1)'}],ctx),/href=/);
});

test('study cards follow registration, result, replication and award',()=>{
 assert.deepEqual(studyCards(recording,3),[]);
 const reg=studyCards(recording,4)[0];
 assert.equal(reg.question,'Steak and smoking?');assert.equal(reg.predictedRho,0.15);assert.equal(reg.result,null);assert.equal(reg.dataset.xLevel,'Rare');
 assert.match(awardBadge(reg,ctx),/Preregistered/);
 const res=studyCards(recording,6)[0].result;
 assert.equal(res.rho,0.2);assert.equal(res.halves.length,2);assert.equal(res.significant,true);assert.equal(res.replicated,true);
 const done=studyCards(recording,9)[0];
 assert.equal(done.replications.length,1);assert.equal(done.award.score,8.5);assert.deepEqual(done.award.verdicts,['judge: Funny and true']);
 const html=studyCardHtml(done,ctx);
 for(const text of ['Ig Nobel Prize in Gastronomy','Half 2: rho 0.300','significant','replicated','Rare-steak eaters smoke','Funny and true','d.csv','0.150','0.200'])assert.ok(html.includes(text),text);
});

test('dialogue history keeps reached message.sent lines with recipients',()=>{
 assert.deepEqual(dialogueThrough(recording.events,4),[]);
 const all=dialogueThrough(recording.events,9);
 assert.deepEqual(all.map(m=>[m.from,m.to,m.kind]),[['lead',['w1'],'assignment'],['critic',['w1','w2'],'verdict']]);
 assert.equal(dialogueThrough(recording.events,9,'w2').length,1);
 assert.equal(dialogueThrough(recording.events,9,'w1',1)[0].text,'Your study replicated.');
 const html=dialogueHtml(all,ctx,'critic');
 assert.match(html,/class="bubble assignment"/);assert.match(html,/class="bubble mine verdict"/);assert.match(html,/CRITIC → W1, W2/);
 assert.equal(dialogueHtml([],ctx),'');
});

test('number formatting',()=>{assert.equal(signed(0.1234),'+0.123');assert.equal(signed(null),'—');assert.equal(pValue(0.0001),'<0.001');});

test('empty baseline gate placeholders are not shown as a gate check and rejected studies sort last',()=>{
 const r={entities:{experiments:[{id:'b',kind:'baseline',gate:{attempts:0,reasons:[]}}]},events:[{tick:0,type:'experiment.started',refs:{experiment_id:'b'}},{tick:1,type:'experiment.finished',refs:{experiment_id:'b'},payload:{status:'keep'}},
  {tick:2,type:'study.registered',refs:{study_id:'s1'},payload:{}},{tick:2,type:'study.result',refs:{study_id:'s1'},payload:{rejected:'dataset reused'}},{tick:3,type:'study.registered',refs:{study_id:'s2'},payload:{}}]};
 assert.equal(experimentDetail(r,'b',5).gate,null);
 const cards=studyCards(r,5);assert.deepEqual(cards.map(c=>c.id),['s2','s1']);
 assert.match(studyCardHtml(cards[1],ctx),/Rejected: dataset reused/);
});

test('singular source highlight is shown on the card',()=>{
 const r={entities:{sources:[{id:'s',title:'T',highlight:'Key line',tick:0}]},events:[]};
 assert.equal(sourceCards(r,0)[0].highlight,'Key line');
});

test('native hypothesis_id rows keep the experiment idea',()=>{
 const r={entities:{hypotheses:[{hypothesis_id:'h',text:'Seeds matter',rationale:'Variance'}],studies:[{study_id:'s'}]},events:[{tick:0,type:'hypothesis.proposed',refs:{hypothesis_id:'h'}},{tick:1,type:'experiment.started',refs:{experiment_id:'e',hypothesis_id:'h'}}]};
 assert.deepEqual(entityRows(r,'hypotheses').map(x=>x.id),['h']);assert.deepEqual(entityRows(r,'studies').map(x=>x.id),['s']);
 assert.equal(experimentDetail(r,'e',1).idea.rationale,'Variance');
});

test('legacy JSON proposal text is shown as the idea and rationale',()=>{
 const r={entities:{hypotheses:[{id:'h',text:'{"idea":"Use seed 43","rationale":"Seed 42 worked"}'}]},events:[{tick:0,type:'hypothesis.proposed',refs:{hypothesis_id:'h'}},{tick:1,type:'experiment.started',refs:{experiment_id:'e',hypothesis_id:'h'}}]};
 assert.deepEqual([experimentDetail(r,'e',1).idea.text,experimentDetail(r,'e',1).idea.rationale],['Use seed 43','Seed 42 worked']);
});
