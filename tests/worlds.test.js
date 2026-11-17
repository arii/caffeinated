import {test} from 'node:test';import assert from 'node:assert/strict';
import {Box3,Vector3} from 'three';
import {ROBOT_APPEARANCES,robotAppearance} from '../src/engine/robots.ts';
import {createWorld} from '../src/variants/lab.ts';
globalThis.innerWidth=1280;globalThis.innerHeight=800;
globalThis.document={createElement:()=>{const text=[];return {width:0,height:0,text,getContext:()=>({fillRect(){},strokeRect(){},fillText(value){text.push(value);},measureText(value){return {width:value.length*18};},roundRect(){},beginPath(){},moveTo(){},lineTo(){},stroke(){},arc(){},ellipse(){},closePath(){},fill(){}})};}};
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


test('animated status lights remain tiny and stationary robots face their bench',()=>{
 const world=createWorld();
 world.update(7,{progress:.5,boredom:0,running:true,replay:true,agents:[{id:'robot-b1',name:'B1',role:'researcher',state:'working',stationId:'analyzer',boredom:null,position:{x:4,z:-1.4}}]});
 const light=world.scene.getObjectByName('agent-status-led');assert.ok(light);
 const size=new Box3().setFromObject(light).getSize(new Vector3());
 assert.ok(Math.max(size.x,size.y,size.z)<.06,'a pulsing indicator must never grow into an opaque body-sized box');
 assert.equal(light.parent.rotation.y,Math.PI,'stationary researchers should face their experiment bench');
});


test('first replay frame preserves its supplied position and heading',()=>{
 const world=createWorld();
 world.update(0,{progress:0,boredom:0,running:false,replay:true,agents:[{id:'initial-robot',name:'C1',role:'researcher',state:'thinking',stationId:'explorer',boredom:null,position:{x:-1.5,z:4.8,heading:Math.PI,moving:true}}]});
 const robot=world.scene.getObjectByName('agent-status-led').parent;
 assert.equal(robot.position.x,-1.5);assert.equal(robot.position.z,4.8);assert.equal(robot.rotation.y,Math.PI);
});


test('roundtable speech bubbles show recorded text and named discussion peers',()=>{
 const world=createWorld();
 world.update(2,{progress:.1,boredom:0,running:false,replay:true,agents:[{id:'speaker',name:'Ada',role:'researcher',state:'thinking',stationId:'culture',boredom:null,discussionBrief:'Measure the timing of each falling droplet.',discussionPeers:['Lin'],position:{x:-7.8,z:-2.45}}]});
 const bubble=world.scene.getObjectByName('recorded-discussion-bubble');
 assert.ok(bubble?.visible);
 assert.ok(bubble.material.map.image.text.includes('Measure the timing of each falling droplet.'));
 assert.ok(bubble.material.map.image.text.includes('WITH Lin'));
 const robot=world.scene.getObjectByName('agent-status-led').parent;
 assert.equal(Math.abs(robot.rotation.y),Math.PI,'discussion participants face the center');
});

test('stable robot archetypes include distinct pink researcher palettes',()=>{
 assert.ok(ROBOT_APPEARANCES.some(a=>a.shell==='#fce3ef'&&a.accent==='#d45e9b'));
 assert.ok(new Set(ROBOT_APPEARANCES.map(a=>a.shell)).size>=6);
 assert.deepEqual(robotAppearance('researcher-pink'),robotAppearance('researcher-pink'));
});
test('each avatar carries a boredom badge, and drowsy robots doze, droop and slow down',()=>{
 const world=createWorld(),base={id:'w1',name:'Worker 1',role:'worker',state:'working',stationId:'analyzer',position:{x:0,z:0,heading:0}};
 world.update(1,{progress:0,boredom:0,running:true,replay:true,agents:[{...base,boredom:92,regime:'BOREDOM_SNAP'},{...base,id:'w2',name:'Worker 2',boredom:5,position:{x:1,z:0,heading:0}}]});
 const meters=[],zzz=[];world.scene.traverse(o=>{if(o.name==='boredom-meter')meters.push(o);if(o.name==='boredom-zzz')zzz.push(o);});
 assert.equal(meters.length,2);
 assert.ok(meters.every(meter=>meter.visible));
 assert.deepEqual(zzz.map(z=>z.visible),[true,false]);
});

test('3D boredom badges are hidden until a finite measurement exists and hide again when unknown',()=>{
 const world=createWorld(),agent={id:'w1',name:'Worker 1',role:'worker',state:'working',stationId:'analyzer',position:{x:0,z:0,heading:0}};
 for(const boredom of [null,NaN,Infinity,0,65,null]){
  world.update(0,{progress:0,boredom:0,running:false,replay:true,agents:[{...agent,boredom}]});
  const meters=[];world.scene.traverse(o=>{if(o.name==='boredom-meter')meters.push(o)});
  assert.equal(meters.length,1);assert.equal(meters[0].visible,boredom!=null&&Number.isFinite(boredom));
 }
});
