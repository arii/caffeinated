import {test} from 'node:test';import assert from 'node:assert/strict';
import {Box3,Vector3} from 'three';
import {createWorld} from '../src/variants/lab.ts';
globalThis.innerWidth=1280;globalThis.innerHeight=800;
globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>({fillRect(){},strokeRect(){},fillText(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},arc(){},ellipse(){},closePath(){},fill(){}})})};
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

test('paused replay freezes avatar and field poses at the same replay time',()=>{
 const world=createWorld();
 const state={progress:.5,boredom:0,running:true,replay:true,agents:[{id:'archived',name:'Archived researcher',role:'researcher',state:'working',stationId:'analyzer',boredom:null,position:{x:4,z:-1.4}}]};
 world.update(7,state);
 const transforms=()=>{const values=[];world.scene.traverse(o=>values.push([...o.position.toArray(),...o.quaternion.toArray(),...o.scale.toArray()]));return values;};
 const playing=transforms();world.update(7,{...state,running:false});
 assert.deepEqual(transforms(),playing);
});


test('animated status lights remain tiny and stationary robots face the entrance',()=>{
 const world=createWorld();
 world.update(7,{progress:.5,boredom:0,running:true,replay:true,agents:[{id:'robot-b1',name:'B1',role:'researcher',state:'working',stationId:'analyzer',boredom:null,position:{x:4,z:-1.4}}]});
 const light=world.scene.getObjectByName('agent-status-led');assert.ok(light);
 const size=new Box3().setFromObject(light).getSize(new Vector3());
 assert.ok(Math.max(size.x,size.y,size.z)<.06,'a pulsing indicator must never grow into an opaque body-sized box');
 assert.equal(light.parent.rotation.y,0,'stationary happy faces should face the entry camera');
});


test('first replay frame starts at supplied pose facing the camera, never a spawn-to-pose turn',()=>{
 const world=createWorld();
 world.update(0,{progress:0,boredom:0,running:false,replay:true,agents:[{id:'initial-robot',name:'C1',role:'researcher',state:'thinking',stationId:'explorer',boredom:null,position:{x:-1.5,z:4.8,heading:Math.PI,moving:true}}]});
 const robot=world.scene.getObjectByName('agent-status-led').parent;
 assert.equal(robot.position.x,-1.5);assert.equal(robot.position.z,4.8);assert.equal(robot.rotation.y,0);
});
