import {test} from 'node:test';
import assert from 'node:assert/strict';
import {PerspectiveCamera,Vector3} from 'three';
import {zoneLabelView,ZONE_BACKGROUND,ZONE_TEXT} from '../src/engine/zoneLabels.ts';
test('zone text is light on a stable dark backing',()=>{
 const lum=c=>c.match(/../g).map(v=>parseInt(v,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
 assert.ok((lum(ZONE_TEXT.slice(1))+.05)/(lum(ZONE_BACKGROUND.slice(1))+.05)>4.5);
});
test('zone signs hide behind the camera, on their reverse, when too close or unreadably distant',()=>{
 const camera=new PerspectiveCamera(48,1.6,.1,100),position=new Vector3(),normal=new Vector3(0,0,1);
 for(const [z,visible] of [[8,true],[1,false],[-8,false],[90,false]]){
  camera.position.set(0,0,z);camera.lookAt(position);const view=zoneLabelView(camera,position,normal,.25,900);assert.equal(view.visible,visible);
  if(visible)assert.ok(.25*view.scale*900/(2*Math.tan(48*Math.PI/360)*z)>=12);
 }
 camera.position.set(0,0,8);camera.lookAt(0,0,20);assert.equal(zoneLabelView(camera,position,normal,.25,900).visible,false);
 camera.lookAt(position);assert.equal(zoneLabelView(camera,position,normal,0,900).visible,false);assert.equal(zoneLabelView(camera,position,normal,.25,0).visible,false);
});
