import type {Collider} from './types';
/** Grid path for cosmetic agent movement, using the same solid geometry as the player. */
export function findPath(start:{x:number;z:number},goal:{x:number;z:number},bounds:Collider,colliders:Collider[]):{x:number;z:number}[]{
  const step=.45,r=.2;
  const blocked=(x:number,z:number)=>x<bounds.minX+r||x>bounds.maxX-r||z<bounds.minZ+r||z>bounds.maxZ-r||colliders.some(c=>x>c.minX-r&&x<c.maxX+r&&z>c.minZ-r&&z<c.maxZ+r);
  const nodes=[{x:start.x,z:start.z,parent:-1}],seen=new Set(['0,0']);let found=-1;
  for(let i=0;i<nodes.length&&i<12000;i++){
    const n=nodes[i];if(Math.hypot(n.x-goal.x,n.z-goal.z)<.48){found=i;break;}
    for(const [dx,dz]of [[step,0],[-step,0],[0,step],[0,-step]]){const x=n.x+dx,z=n.z+dz,key=`${Math.round((x-start.x)/step)},${Math.round((z-start.z)/step)}`;if(!seen.has(key)&&!blocked(x,z)){seen.add(key);nodes.push({x,z,parent:i});}}
  }
  if(found<0)return [];
  const path=[];for(let i=found;i>=0;i=nodes[i].parent)path.push({x:nodes[i].x,z:nodes[i].z});return path.reverse().slice(1);
}
