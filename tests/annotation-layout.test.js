import {test} from 'node:test';
import assert from 'node:assert/strict';
import {annotationVisibility} from '../src/engine/annotationLayout.ts';
const rect=(left,top,right,bottom)=>({left,top,right,bottom});
test('keeps separated annotations and touching edges in priority order',()=>{
 assert.deepEqual(annotationVisibility([rect(0,0,10,10),rect(10,0,20,10),rect(0,12,10,20)]),[true,true,true]);
});
test('hides overlaps with kept annotations, not annotations already hidden',()=>{
 assert.deepEqual(annotationVisibility([rect(0,0,10,10),rect(8,0,18,10),rect(12,0,22,10),rect(2,2,4,4)]),[true,false,true,false]);
});
test('recomputes visibility when annotations move apart',()=>{
 assert.deepEqual(annotationVisibility([rect(0,0,10,10),rect(5,5,15,15)]),[true,false]);
 assert.deepEqual(annotationVisibility([rect(0,0,10,10),rect(15,15,25,25)]),[true,true]);
});
test('handles empty, offscreen and invalid rectangles',()=>{
 assert.deepEqual(annotationVisibility([]),[]);
 assert.deepEqual(annotationVisibility([null,rect(0,0,0,1),rect(0,0,1,-1),rect(0,0,Infinity,1),rect(0,0,1,1)]),[false,false,false,false,true]);
});
