import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import ts from 'typescript';

const source=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8');
function harness(rows=[],recording=null,query=''){
 const elements=new Map(),attached=[],errors=[];
 const context={recording,recordingManifests:[],URLSearchParams,location:{href:`http://localhost/${query}`},URL,
  request:async()=>rows,esc:String,toast:message=>errors.push(message),
  attachRecording:async id=>attached.push(id),
  $:id=>{if(!elements.has(id))elements.set(id,{});return elements.get(id);}};
 runInNewContext(ts.transpile(source.split('\n').find(line=>line.startsWith('async function loadRecordings'))),context);
 return {context,elements,attached,errors};
}
test('polling attaches the first recording after an empty archive becomes populated',async()=>{
 const rows=[],h=harness(rows);
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,[]);
 rows.push({id:'new-run',title:'New run'});
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,['new-run']);
});
test('first discovered recording uses the requested selection when present',async()=>{
 const h=harness([{id:'first',title:'First'},{id:'selected',title:'Selected'}],null,'?recording=selected');
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,['selected']);
});
test('archive refresh leaves an attached recording selected without reattaching',async()=>{
 const h=harness([{id:'new',title:'New'},{id:'current',title:'Current'}],{manifest:{id:'current'}});
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,[]);
 assert.equal(h.elements.get('run-picker').value,'current');
});
test('archive request failure reports the error without attaching a recording',async()=>{
 const h=harness();h.context.request=async()=>{throw new Error('offline');};
 await h.context.loadRecordings();
 assert.deepEqual(h.attached,[]);
 assert.deepEqual(h.errors,['offline']);
 assert.equal(h.elements.get('connection').textContent,'ARCHIVE UNAVAILABLE');
});
