import {test} from 'node:test';
import assert from 'node:assert/strict';
import {igJudgeBoard,igJudgeHtml} from '../src/engine/igJudge.ts';

const criteria=[['humor',2],['plausibility',2],['originality',1.5],['insight',2],['appeal',1],['alignment',1.5]].map(([key,weight])=>({key,label:key,weight}));
const scores=v=>Object.fromEntries(criteria.map(c=>[c.key,{initial:v,revised:v,final:v,reason:`r${v}`}]));
const artifact={schema:'igjudge/v1',model:'m',criteria,ideas:[
 {study_id:'s1',title:'Low idea',gate:'passed',committee:'not judged',scores:scores(4),total:40,classification:'Weak',safeguards:[],prior_work:[]},
 {study_id:'s2',title:'Top <idea>',gate:'pending',committee:'not judged',scores:scores(8),total:80,classification:'Strong',verdict:'Laugh then think',safeguards:['none'],prior_work:[{title:'Paper',url:'https://x.org'},{title:'bad',url:'javascript:alert(1)'}]},
 {study_id:'s3',title:'Broken',scores:{},total:null,error:'parse failed'}],
 leaderboard:[{rank:1,study_id:'s2',total:80},{rank:2,study_id:'s1',total:40}],winner:'s2'};

test('board orders by leaderboard rank and names the winner',()=>{
 const b=igJudgeBoard(artifact);
 assert.deepEqual(b.ideas.map(i=>i.studyId),['s2','s1','s3']);
 assert.equal(b.winner.studyId,'s2');
 assert.equal(igJudgeBoard({schema:'other'}),null);
});

test('html shows every idea, six scores, highlights the winner and escapes text',()=>{
 const esc=v=>String(v).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
 const html=igJudgeHtml(artifact,esc);
 assert.match(html,/IgJudge final verdict/);
 assert.match(html,/Winner · 80\/100 · Strong/);
 assert.match(html,/Top &lt;idea&gt;/);
 assert.doesNotMatch(html,/<idea>/);
 assert.equal((html.match(/<tr class="igjudge-win">/g)||[]).length,1);
 assert.match(html,/not scored/);
 assert.doesNotMatch(html,/javascript:/);
 assert.equal(igJudgeHtml(undefined,esc),'');
});
