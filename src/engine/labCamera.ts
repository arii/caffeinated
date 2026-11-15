import * as THREE from 'three';
// Both lab and ground views use Three's YXZ camera angles.
export const LOOK_SENSITIVITY=.003;
export const MAX_LOOK_PITCH=1.2;
export function mouseLook(yaw:number,pitch:number,dx:number,dy:number){
 return {yaw:yaw-dx*LOOK_SENSITIVITY,pitch:THREE.MathUtils.clamp(pitch-dy*LOOK_SENSITIVITY,-MAX_LOOK_PITCH,MAX_LOOK_PITCH)};
}
export function keyboardLook(yaw:number,pitch:number,dt:number,keys:ReadonlySet<string>){
 return {yaw:yaw+(Number(keys.has('ArrowLeft'))-Number(keys.has('ArrowRight')))*dt*1.5,pitch:THREE.MathUtils.clamp(pitch+(Number(keys.has('ArrowUp'))-Number(keys.has('ArrowDown')))*dt,-MAX_LOOK_PITCH,MAX_LOOK_PITCH)};
}
/** Adapted from history-in-3D/src/engine/controls.js (CameraRig).
 * Drag rotates at the current vantage; WASD detaches into smooth free movement.
 * Distances and height bounds are scaled for an indoor laboratory.
 */
export class LabCameraRig{
 yaw=0;pitch=0;freeMode=false;
 private anchor=new THREE.Vector3();private freePos=new THREE.Vector3();
 private camera:THREE.PerspectiveCamera;
 constructor(camera:THREE.PerspectiveCamera){this.camera=camera;this.reset();}
 reset(){this.camera.position.set(0,4.35,10.5);this.anchor.copy(this.camera.position);this.freePos.copy(this.anchor);this.freeMode=false;this.focus(new THREE.Vector3(-2.8,.85,-4.5));}
 focus(point:THREE.Vector3){
  this.camera.lookAt(point);this.syncFromCamera();
 }
 syncFromCamera(){
  const rotation=new THREE.Euler().setFromQuaternion(this.camera.quaternion,'YXZ');
  this.yaw=rotation.y;this.pitch=rotation.x;this.anchor.copy(this.camera.position);this.freePos.copy(this.camera.position);this.freeMode=false;
 }
 dragBy(dx:number,dy:number){Object.assign(this,mouseLook(this.yaw,this.pitch,dx,dy));}
 update(dt:number,keys:ReadonlySet<string>){
  Object.assign(this,keyboardLook(this.yaw,this.pitch,dt,keys));
  this.camera.rotation.set(this.pitch,this.yaw,0,'YXZ');
  const forward=new THREE.Vector3();this.camera.getWorldDirection(forward);forward.y=0;forward.normalize();
  const right=new THREE.Vector3(-forward.z,0,forward.x),move=new THREE.Vector3();
  if(keys.has('KeyW'))move.add(forward);if(keys.has('KeyS'))move.sub(forward);
  if(keys.has('KeyA'))move.sub(right);if(keys.has('KeyD'))move.add(right);
  if(keys.has('KeyQ'))move.y-=1;if(keys.has('KeyE'))move.y+=1;
  if(move.lengthSq()>0){
   if(!this.freeMode){this.freeMode=true;this.freePos.copy(this.camera.position);}
   this.freePos.add(move.normalize().multiplyScalar((keys.has('ShiftLeft')||keys.has('ShiftRight')?5.6:3.5)*dt));
   this.freePos.x=THREE.MathUtils.clamp(this.freePos.x,-10.9,10.9);this.freePos.y=THREE.MathUtils.clamp(this.freePos.y,1.1,4.4);this.freePos.z=THREE.MathUtils.clamp(this.freePos.z,-12.3,11.7);
  }
  this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,dt*(this.freeMode?10:4)));
 }
}
