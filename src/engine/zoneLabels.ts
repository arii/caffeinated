import * as THREE from 'three';
export const ZONE_BACKGROUND='#172c35',ZONE_TEXT='#f4f3ec';
export function zoneLabelView(camera:THREE.PerspectiveCamera,position:THREE.Vector3,normal:THREE.Vector3,textHeight:number,viewportHeight:number){
 const toCamera=camera.position.clone().sub(position),depth=toCamera.clone().negate().dot(camera.getWorldDirection(new THREE.Vector3()));
 if(toCamera.length()<2.5||normal.dot(toCamera)<=0||depth<=0||textHeight<=0||viewportHeight<=0)return {visible:false,scale:1};
 const pixels=textHeight*viewportHeight/(2*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*depth),scale=Math.max(1,12/pixels);
 return {visible:scale<=1.8,scale:Math.min(1.8,scale)};
}
