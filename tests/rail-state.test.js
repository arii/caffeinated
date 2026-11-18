import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import ts from 'typescript';
const source=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8');
test('rail selection follows drawers, scientist inspector, evidence and Guide, and clears when closed',()=>{
 const buttons=['overview-drawer','team-drawer','runs-drawer','orchestration-drawer','open-console','open-guide'].map(key=>({id:key,dataset:key.endsWith('drawer')?{drawer:key}:{},setAttribute(name,value){this[name]=value}}));
 const context={evidence:{open:false},inspector:{open:false},guide:{open:false},conversation:{open:false},currentDrawer:null,document:{querySelectorAll:()=>buttons}};
 const fn=source.slice(source.indexOf('function updateRailState(){'),source.indexOf('function updateDockAutoCollapse(){'));
 runInNewContext(ts.transpile(fn),context);
 const active=()=>{context.updateRailState();return buttons.filter(b=>b['aria-pressed']==='true').map(b=>b.id)};
 assert.deepEqual(active(),[]);
 for(const id of ['overview-drawer','team-drawer','runs-drawer','orchestration-drawer']){context.currentDrawer=id;assert.deepEqual(active(),[id]);}
 context.currentDrawer=null;context.conversation.open=true;assert.deepEqual(active(),['team-drawer']);context.conversation.open=false;
 context.evidence.open=true;assert.deepEqual(active(),['open-console']);context.evidence.open=false;
 context.guide.open=true;assert.deepEqual(active(),['open-guide']);context.guide.open=false;assert.deepEqual(active(),[]);
});
