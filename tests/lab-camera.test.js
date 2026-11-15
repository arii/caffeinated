import {test} from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {LabCameraRig,mouseLook,keyboardLook,MAX_LOOK_PITCH} from '../src/engine/labCamera.ts';
const direction=camera=>camera.getWorldDirection(new THREE.Vector3());
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-9,`${a} != ${b}`);

test('lab drag and ground mouse look turn right and down with identical angles',()=>{
 const camera=new THREE.PerspectiveCamera(),rig=new LabCameraRig(camera);
 const initial={yaw:rig.yaw,pitch:rig.pitch};
 rig.dragBy(100,50);rig.update(0,new Set());
 const ground=mouseLook(initial.yaw,initial.pitch,100,50);
 const walking=new THREE.PerspectiveCamera();walking.rotation.set(ground.pitch,ground.yaw,0,'YXZ');
 assert.ok(direction(camera).x>0);assert.ok(rig.pitch<initial.pitch);
 close(direction(camera).distanceTo(direction(walking)),0);
});

test('mouse and arrow look share pitch limits and directional conventions',()=>{
 const right=mouseLook(0,0,100,0),arrow=keyboardLook(0,0,.2,new Set(['ArrowRight']));
 close(right.yaw,arrow.yaw);
 close(mouseLook(0,0,0,-1e6).pitch,MAX_LOOK_PITCH);
 close(keyboardLook(0,0,10,new Set(['ArrowDown'])).pitch,-MAX_LOOK_PITCH);
});

test('lab WASD stays relative to current mouse heading including first frame',()=>{
 for(const [key,x,z] of [['KeyW',-1,0],['KeyS',1,0],['KeyA',0,1],['KeyD',0,-1]]){
  const camera=new THREE.PerspectiveCamera(),rig=new LabCameraRig(camera);
  camera.position.set(0,2,0);camera.rotation.set(0,0,0,'YXZ');rig.syncFromCamera();
  rig.dragBy(-Math.PI/2/.003,0);rig.update(.1,new Set([key]));
  close(camera.position.x,x*.35);close(camera.position.z,z*.35);
 }
});

test('adopting an existing view preserves position and heading without a frame jump',()=>{
 const camera=new THREE.PerspectiveCamera(),rig=new LabCameraRig(camera);
 camera.position.set(2,1.69,3);camera.rotation.set(.2,.7,0,'YXZ');
 const position=camera.position.clone(),heading=direction(camera);
 rig.syncFromCamera();rig.update(.1,new Set());
 close(camera.position.distanceTo(position),0);close(direction(camera).distanceTo(heading),0);
});
