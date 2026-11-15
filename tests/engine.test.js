import {test} from 'node:test';
import assert from 'node:assert/strict';
import {SnapshotSchema} from '../src/engine/contract.ts';
import {acceptSnapshot} from '../src/engine/state.ts';
const snapshot={runId:'one',lastSequence:3,status:'running',createdAt:1,config:{mode:'tinker_modal',arm:'B',rounds:1,seed:42,model:null},sourceCommit:'abc',progress:0,round:1,boredom:20,regime:'EXPLOIT',value:null,reference:null,agents:[],findings:[],results:[],sources:[],error:null,metric:{name:'Task loss',unit:'',direction:'minimize'},provenance:{llm:'tinker',gpu:'modal',exa:'off',memory:'local'}};
test('snapshot contract rejects invalid lifecycle and measurements',()=>{
 assert.ok(SnapshotSchema.safeParse(snapshot).success);
 for(const patch of [{status:'invented'},{progress:1.1},{value:NaN},{agents:[{id:'x'}]}])assert.equal(SnapshotSchema.safeParse({...snapshot,...patch}).success,false);
});
test('recorded snapshots accept every native swarm arm',()=>{
 for(const arm of ['A','B','C','D'])assert.ok(SnapshotSchema.safeParse({...snapshot,config:{...snapshot.config,mode:'recorded',arm}}).success);
});
test('reconnect ignores stale snapshots but permits explicit run selection',()=>{
 assert.equal(acceptSnapshot(snapshot,{...snapshot,lastSequence:2}),snapshot);
 const newer={...snapshot,lastSequence:4};assert.equal(acceptSnapshot(snapshot,newer),newer);
 const selected={...snapshot,runId:'two',lastSequence:0};assert.equal(acceptSnapshot(snapshot,selected),selected);
});
test('backend snapshot is compatible with frontend contract',async()=>{
 // Optional live contract verification when the local server is running.
 let r;try{r=await fetch('http://127.0.0.1:8765/api/runs');}catch{return;}
 if(r.ok)for(const s of await r.json())SnapshotSchema.parse(s);
});

test('boredom spectrum is continuous and clamps display values',async()=>{
 const {boredomColor,boredomPercent}=await import('../src/engine/boredom.ts');
 assert.equal(boredomColor(0),'#5ebcc2');assert.equal(boredomColor(100),'#c76a7d');
 assert.equal(boredomPercent(-2),0);assert.equal(boredomPercent(200),100);assert.equal(boredomPercent(NaN),0);
 assert.notEqual(boredomColor(51),boredomColor(52));
});
