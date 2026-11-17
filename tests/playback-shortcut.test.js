import {test} from 'node:test';
import assert from 'node:assert/strict';
import {DEFAULT_PACE,playbackShortcut} from '../src/engine/playbackShortcut.ts';
function setup(overrides={}){let toggles=0,prevented=0;const event={code:'Space',target:null,preventDefault(){prevented++},...overrides};return {event,toggle:()=>toggles++,result:()=>[toggles,prevented]};}
test('Space toggles once and prevents page scrolling, including without a target',()=>{
 const h=setup();playbackShortcut(h.event,false,h.toggle);assert.deepEqual(h.result(),[1,1]);assert.equal(DEFAULT_PACE,1);
});
test('controls, nested editable content, handled keys, modifiers and modal contexts keep their own Space behavior',()=>{
 for(const selector of ['input','select','textarea','button','a','[contenteditable]:not([contenteditable=false])','[role=button]']){
  const h=setup({target:{closest:query=>{assert.ok(query.includes(selector));return {};}}});playbackShortcut(h.event,false,h.toggle);assert.deepEqual(h.result(),[0,0]);
 }
 for(const overrides of [{repeat:true},{defaultPrevented:true},{altKey:true},{ctrlKey:true},{metaKey:true},{shiftKey:true},{code:'Enter'}]){const h=setup(overrides);playbackShortcut(h.event,false,h.toggle);assert.deepEqual(h.result(),[0,0]);}
 const h=setup();playbackShortcut(h.event,true,h.toggle);assert.deepEqual(h.result(),[0,0]);
});
