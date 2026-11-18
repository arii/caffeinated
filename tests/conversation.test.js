import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext} from 'node:vm';
import ts from 'typescript';
import * as THREE from 'three';
import {conversationQuestions,conversationPlacement,scientistHint} from '../src/engine/conversation.ts';
test('short labels retain descriptive accessible questions and touch devices get a tap hint',()=>{
 assert.deepEqual(conversationQuestions.slice(0,5).map(q=>q[1]),['Now','Current task','Core idea','Findings','Notes']);
 assert.ok(conversationQuestions.every(q=>q[2].length>=q[1].length));
 assert.equal(scientistHint(true),'Tap a scientist');assert.equal(scientistHint(false),'Click a scientist');
});
test('short landscape lets DOING scroll away instead of covering research steps',()=>{
 const css=readFileSync(new URL('../src/accessibility.css',import.meta.url),'utf8');
 assert.match(css,/@media\(max-height:500px\) and \(orientation:landscape\)\{[^@]*\.conversation-doing\{position:static\}/);
 assert.match(css,/@media\(max-height:350px\) and \(orientation:landscape\)\{[^@]*\.conversation-person\{padding-top:0;min-height:44px\}/);
});
test('selection ring follows only the inspected robot and clears on close or absent selection',()=>{
 const source=readFileSync(new URL('../src/main.ts',import.meta.url),'utf8');
 const context={THREE,selectionRing:null,selectedAgent:'scientist',conversation:{open:true},world:{scene:new THREE.Scene(),camera:new THREE.PerspectiveCamera(),agentPositions:()=>[{id:'scientist',position:new THREE.Vector3(2,0,3)}]}};
 runInNewContext(ts.transpile(source.slice(source.indexOf('function updateSelectionRing(){'),source.indexOf('function blocked('))),context);
 context.updateSelectionRing();assert.ok(context.selectionRing.visible);assert.equal(context.selectionRing.position.x,2);assert.equal(context.selectionRing.children.length,2);
 context.conversation.open=false;context.updateSelectionRing();assert.equal(context.selectionRing.visible,false);
 context.conversation.open=true;context.selectedAgent='missing';context.updateSelectionRing();assert.equal(context.selectionRing.visible,false);assert.equal(context.world.scene.children.length,1);
});
test('popup fits below header actions and opposite its scientist, including short landscape',()=>{
 for(const [width,height] of [[667,375],[844,390],[1440,900]])for(const x of [width*.3,width*.7]){
  const p=conversationPlacement(width,height,62,{right:92,bottom:367},x,280);
  assert.ok(p.top>=74);assert.ok(p.left>=106);assert.ok(p.left+p.width<=width-12);
  assert.ok(x<p.left||x>p.left+p.width);
 }
 const p=conversationPlacement(390,844,60,{right:382,bottom:126},195,430);
 assert.deepEqual(p,{left:8,width:374,top:402});
});
