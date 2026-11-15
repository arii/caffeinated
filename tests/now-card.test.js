import {test} from 'node:test';
import assert from 'node:assert/strict';
import {eventWhy,agentNow,nowCardHtml} from '../src/engine/nowCard.ts';

const esc=v=>String(v??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const c={name:id=>({w:'Worker 1',k:'Critic'})[id]||'Unknown',metric:{name:'loss',direction:'minimize'},best:0.05};
test('every event gets a plain-language why',()=>{
 assert.equal(eventWhy({tick:1,type:'verdict.issued',payload:{accepted:false}},c),"Critic rejected: score didn't reproduce on rerun");
 assert.equal(eventWhy({tick:1,type:'verdict.issued',payload:{accepted:true,why:'The second evaluation matches.'}},c),'Critic approved: The second evaluation matches.');
 assert.equal(eventWhy({tick:1,type:'gate.checked',payload:{pass:false,reasons:['too close to experiment 3']}},c),'Novelty gate blocked: too close to experiment 3');
 assert.match(eventWhy({tick:1,type:'gate.checked',payload:{pass:true,prior_art:['Q2']}},c),/passed.*1 prior source\)/);
 assert.equal(eventWhy({tick:1,type:'experiment.finished',payload:{status:'discard',metric_value:0.2}},c),"Discarded: loss 0.2 didn't beat the best (best 0.05)");
 assert.equal(eventWhy({tick:1,type:'experiment.finished',payload:{status:'keep',metric_value:0.01}},c),'Kept: loss 0.01 beats the previous best');
 assert.equal(eventWhy({tick:1,type:'experiment.finished',payload:{status:'crash'}},c),'Crashed: the experiment failed to run');
 assert.equal(eventWhy({tick:1,type:'agent.assigned',payload:{role:'divergent',rationale:'Swarm is bored.'}},c),'Conductor assigned divergent: Swarm is bored.');
 assert.equal(eventWhy({tick:1,type:'message.sent',payload:{to_agent_id:'w',text:'Try seeds'}},c),'To Worker 1: Try seeds');
 assert.match(eventWhy({tick:1,type:'boredom.measured',payload:{B:0.8,regime:'BOREDOM_SNAP'}},c),/^Boredom 80% · Boredom snap: repeating itself/);
 assert.equal(eventWhy({tick:1,type:'memory.written',payload:{}},c),'');
});
test('the Now card gathers idea, gate, score, critic and sources for the agent at the playhead',()=>{
 const id='experiment:a';
 const recording={events:[
  {tick:1,type:'hypothesis.proposed',agentId:'w',payload:{text:'Swap two rows'},refs:{hypothesis_id:'h1'}},
  {tick:2,type:'observation.received',agentId:'w',payload:{text:'Paper on tabu'},refs:{source_id:'s1'}},
  {tick:3,type:'gate.checked',agentId:'w',payload:{pass:true,descriptor:{mechanism:'search',method:'tabu'}},refs:{experiment_id:id}},
  {tick:4,type:'experiment.started',agentId:'w',payload:{description:'Swap two rows'},refs:{experiment_id:id,hypothesis_id:'h1'}},
  {tick:5,type:'experiment.finished',agentId:'w',payload:{status:'keep',metric_value:0.04},refs:{experiment_id:id}},
  {tick:6,type:'verdict.issued',agentId:'k',payload:{accepted:false,verdict:'not_replicated',why:'Rerun was worse.'},refs:{experiment_id:id}}],
  entities:{experiments:[{id,agent_id:'w',predicted_delta:-0.01,hypothesis_id:'h1'}],hypotheses:[{id:'h1',text:'Swap two rows',predicted_delta:-0.01}],sources:[{id:'s1',title:'Tabu search for Hadamard'}]}};
 const early=agentNow(recording,'w','training',4,c);
 assert.equal(early.experiment.id,id);assert.equal(early.experiment.result,null);
 assert.match(nowCardHtml(early,{...c,esc},c.metric),/Still running/);
 const late=agentNow(recording,'w','reviewing',6,c),html=nowCardHtml(late,{...c,esc},c.metric);
 assert.equal(late.sources[0].id,'s1');
 assert.match(html,/data-source="s1"/);
 assert.match(html,/predicted Δ -0\.01/);
 assert.match(html,/search \/ tabu/);
 assert.match(html,/not_replicated<\/span> Rerun was worse\./);
 assert.match(html,/best so far 0\.05 \(lower is better\)/);
 assert.match(html,/Critic rejected: Rerun was worse\./);
 assert.match(html,/data-experiment="experiment:a"/);
 assert.equal(agentNow(recording,'nobody','idle',6,c).experiment,null);
});
