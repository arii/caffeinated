import {test} from 'node:test';
import assert from 'node:assert/strict';
import {reconcileByKey} from '../src/engine/keyed-list.ts';

test('keyed status tiles keep their node identity across frame updates',()=>{
 const create=item=>({key:item.id,label:''});
 const patch=(node,item)=>{node.label=item.label;};
 const first=reconcileByKey([{id:'scientist-1',label:'Round 1'}],[],item=>item.id,node=>node.key,create,patch);
 const tile=first[0];
 const second=reconcileByKey([{id:'scientist-1',label:'Round 2'}],first,item=>item.id,node=>node.key,create,patch);
 assert.strictEqual(second[0],tile);
 assert.equal(tile.label,'Round 2');
});
