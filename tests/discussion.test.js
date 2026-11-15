import {test} from 'node:test';
import assert from 'node:assert/strict';
import {discussionAt,shortMessage} from '../src/engine/discussion.ts';

test('speech preserves source words and shortens at a word boundary',()=>{
 assert.equal(shortMessage('  We\n should check the cells. '),'We should check the cells.');
 assert.equal(shortMessage('We should compare the cells before making conclusions.',30),'We should compare the cells…');
});
test('discussion shows only reached messages, addressed present peers, and expires',()=>{
 const agents=[{id:'bio',name:'B1'},{id:'chem',name:'C1'}];
 const events=[{tick:2,type:'message.sent',agentId:'bio',message:'Chemistry, check these cells.',payload:{to_agent_ids:['chem','chem','future']},refs:{to_agent_id:'chem'}},{tick:7,type:'message.sent',agentId:'bio',message:'Later conclusion.'}];
 assert.equal(discussionAt(events,1,agents).size,0);
 assert.deepEqual(discussionAt(events,2,agents,s=>s.replace('Chemistry','C1')).get('bio'),{brief:'C1, check these cells.',peers:['C1']});
 assert.equal(discussionAt(events,7,agents).get('bio').brief,'Later conclusion.');
 assert.equal(discussionAt(events,26,agents).size,0);
 assert.equal(discussionAt(events,2,agents).get('bio').brief,'Chemistry, check these cells.');
});
