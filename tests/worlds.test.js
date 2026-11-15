import {test} from 'node:test';import assert from 'node:assert/strict';
import {createWorld} from '../src/variants/lab.ts';
globalThis.innerWidth=1280;globalThis.innerHeight=800;
globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},strokeRect(){},fillText(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},arc(){},fill(){}})})};
test('Lab Environment: all stations are reachable and backend roster can change',()=>{
  const create=createWorld;
  const w=create(),r=.34,spacing=.4;
  const blocked=(x,z)=>x<w.bounds.minX+r||x>w.bounds.maxX-r||z<w.bounds.minZ+r||z>w.bounds.maxZ-r||w.colliders.some(c=>x>c.minX-r&&x<c.maxX+r&&z>c.minZ-r&&z<c.maxZ+r);
  assert.equal(blocked(w.camera.position.x,w.camera.position.z),false,'spawn must be walkable');
  const queue=[[w.camera.position.x,w.camera.position.z]],seen=new Set(['0,0']);
  for(let i=0;i<queue.length;i++){
    const [x,z]=queue[i];for(const [dx,dz]of [[spacing,0],[-spacing,0],[0,spacing],[0,-spacing]]){
      const nx=x+dx,nz=z+dz,key=`${Math.round((nx-w.camera.position.x)/spacing)},${Math.round((nz-w.camera.position.z)/spacing)}`;
      if(!seen.has(key)&&!blocked(nx,nz)){seen.add(key);queue.push([nx,nz]);}
    }
  }
  assert.deepEqual(w.stations.map(s=>s.id).sort(),['analyzer','culture','explorer','notebook']);
  for(const s of w.stations)assert.ok(queue.some(([x,z])=>Math.hypot(x-s.position.x,z-s.position.z)<s.radius-.1),`${s.id} needs an accessible interaction approach`);
  const empty={running:false,progress:0,boredom:0,agents:[]};
  w.update(0,empty);
  const agents=Array.from({length:6},(_,i)=>({id:`worker-${i}`,name:`Worker ${i}`,role:'worker',state:'working',stationId:['culture','analyzer','explorer','notebook'][i%4],boredom:40}));
  for(let i=1;i<300;i++)w.update(i/20,{...empty,running:true,agents});
  w.update(16,empty);
  w.scene.traverse(o=>{assert.ok(Number.isFinite(o.position.x)&&Number.isFinite(o.position.y)&&Number.isFinite(o.position.z));});
  w.dispose?.();
});
