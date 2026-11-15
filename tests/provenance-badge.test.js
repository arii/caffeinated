import {test} from 'node:test';
import assert from 'node:assert/strict';
import {provenanceBadge} from '../src/engine/provenanceBadge.ts';

test('fake LLM provenance is identified even on a live manifest',()=>{
 const badge=provenanceBadge({id:'fake',title:'Fake',totalTicks:2,live:true,provenance:{llm:'fake',llm_mode:'fake',exa:'off',memory_backend:'local'}});
 assert.deepEqual(badge,{label:'Fake-LLM sample (plumbing demo, not research)',tone:'fake',chips:['Exa off','local memory']});
});

test('live model runs use a short model name and verified tool chips',()=>{
 const badge=provenanceBadge({id:'live',title:'Live',totalTicks:2,live:true,provenance:{llm:'moonshot/Kimi-K2',llm_mode:'tinker',exa:'live',memory_backend:'pastdev'}});
 assert.deepEqual(badge,{label:'Live Kimi run',tone:'live',chips:['Exa on','past.dev memory']});
 const other=provenanceBadge({id:'live',title:'Live',totalTicks:2,status:'running',provenance:{llm:'openai/gpt-4.1',llm_mode:'tinker'}});
 assert.equal(other.label,'Live gpt-4.1 run');
});

test('finished, stalled and unknown recordings have distinct provenance labels',()=>{
 assert.equal(provenanceBadge({id:'done',title:'Done',totalTicks:2,provenance:{llm:'openai/gpt-4.1'}}).label,'Finished real run');
 assert.equal(provenanceBadge({id:'stale',title:'Stale',totalTicks:2,live:true,stale:true,provenance:{llm:'openai/gpt-4.1'}}).label,'Stalled real run');
 assert.deepEqual(provenanceBadge({id:'unknown',title:'Unknown',totalTicks:0}),{label:'Unverified recording',tone:'unknown',chips:[]});
});
