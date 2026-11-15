import * as THREE from 'three';
/** Adapted from history-in-3D/src/engine/controls.js (CameraRig).
 * Drag rotates at the current vantage; WASD detaches into smooth free movement.
 * Distances and height bounds are scaled for an indoor laboratory.
 */
export class LabCameraRig{
 yaw=0;pitch=0;freeMode=false;
 private baseYaw=0;private basePitch=0;
 private anchor=new THREE.Vector3();private freePos=new THREE.Vector3();
 private camera:THREE.PerspectiveCamera;
 constructor(camera:THREE.PerspectiveCamera){this.camera=camera;this.reset();}
 reset(){this.camera.position.set(0,4.35,10.5);this.anchor.copy(this.camera.position);this.freePos.copy(this.anchor);this.freeMode=false;this.focus(new THREE.Vector3(0,1.15,-4.5));}
 focus(point:THREE.Vector3){
  const dir=point.clone().sub(this.camera.position);
  this.baseYaw=Math.atan2(dir.x,dir.z);this.basePitch=Math.atan2(dir.y,Math.hypot(dir.x,dir.z));
  this.yaw=0;this.pitch=0;this.anchor.copy(this.camera.position);this.freePos.copy(this.camera.position);this.camera.lookAt(point);
 }
 dragBy(dx:number,dy:number){this.yaw+=dx*.0032;this.pitch=THREE.MathUtils.clamp(this.pitch+dy*.0028,-1.2,1.25);}
 update(dt:number,keys:ReadonlySet<string>){
  const forward=new THREE.Vector3();this.camera.getWorldDirection(forward);forward.y=0;forward.normalize();
  const right=new THREE.Vector3(forward.z,0,-forward.x),move=new THREE.Vector3();
  if(keys.has('KeyW'))move.add(forward);if(keys.has('KeyS'))move.sub(forward);
  if(keys.has('KeyA'))move.add(right);if(keys.has('KeyD'))move.sub(right);
  if(keys.has('KeyQ'))move.y-=1;if(keys.has('KeyE'))move.y+=1;
  if(move.lengthSq()>0){
   if(!this.freeMode){this.freeMode=true;this.freePos.copy(this.camera.position);}
   this.freePos.add(move.normalize().multiplyScalar((keys.has('ShiftLeft')||keys.has('ShiftRight')?5.6:3.5)*dt));
   this.freePos.x=THREE.MathUtils.clamp(this.freePos.x,-10.9,10.9);this.freePos.y=THREE.MathUtils.clamp(this.freePos.y,1.1,4.4);this.freePos.z=THREE.MathUtils.clamp(this.freePos.z,-12.3,11.7);
  }
  this.camera.position.lerp(this.freeMode?this.freePos:this.anchor,Math.min(1,dt*(this.freeMode?10:4)));
  const yaw=this.baseYaw+this.yaw,pitch=THREE.MathUtils.clamp(this.basePitch+this.pitch,-1.3,1.3);
  this.camera.lookAt(this.camera.position.clone().add(new THREE.Vector3(Math.sin(yaw)*Math.cos(pitch),Math.sin(pitch),Math.cos(yaw)*Math.cos(pitch))));
 }
}
