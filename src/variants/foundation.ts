import * as THREE from 'three';
import type { LabWorld, LabState, StationId } from '../engine/types';

/** Option C — Atelier: a warm, modular observatory for computational research. */
export function createWorld(): LabWorld {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#d8e1df');
  scene.fog = new THREE.Fog('#d8e1df', 37, 90);
  const camera = new THREE.PerspectiveCamera(67, innerWidth / innerHeight, .08, 100);
  camera.position.set(0, 1.7, 8.8);
  camera.lookAt(0, 1.9, -6);
  const colliders: LabWorld['colliders'] = [];
  const addCollider = (x: number, z: number, w: number, d: number) => colliders.push({ minX: x-w/2, maxX: x+w/2, minZ: z-d/2, maxZ: z+d/2 });
  const materials: THREE.Material[] = [];
  const textures: THREE.Texture[] = [];
  const mat = (color: string, options: THREE.MeshStandardMaterialParameters = {}) => {
    const m = new THREE.MeshStandardMaterial({ color, roughness: .78, ...options }); materials.push(m); return m;
  };
  const ivory = mat('#f0ecdf'), chalk = mat('#dedecf'), ink = mat('#283e47'), linen = mat('#cfc9b7');
  const sage = mat('#9eac91'), clay = mat('#bd795e'), brass = mat('#bda276', { metalness: .25, roughness: .55 });
  const wood = mat('#bc9670'), darkWood = mat('#82664e'), white = mat('#f7f3e8');
  const glow = mat('#d9e7e0', { emissive: '#8bb4a7', emissiveIntensity: .35 });
  const glass = mat('#cdded7', { transparent:true, opacity:.11, depthWrite:false, side:THREE.DoubleSide, roughness:.12, metalness:.1 });
  const boxGeometry = new THREE.BoxGeometry(1,1,1);
  const box = (x:number,y:number,z:number,w:number,h:number,d:number,m:THREE.Material,parent:THREE.Object3D=scene) => {
    const mesh = new THREE.Mesh(boxGeometry,m); mesh.position.set(x,y,z); mesh.scale.set(w,h,d); parent.add(mesh); return mesh;
  };
  const cyl = (x:number,y:number,z:number,r:number,h:number,m:THREE.Material,parent:THREE.Object3D=scene,segments=20) => {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,segments),m); mesh.position.set(x,y,z); parent.add(mesh); return mesh;
  };
  function label(text:string,x:number,y:number,z:number,w:number,h:number,options:{background?:string;color?:string;rotation?:number;font?:number}={}) {
    const canvas=document.createElement('canvas'); canvas.width=1024; canvas.height=Math.round(1024*h/w);
    const ctx=canvas.getContext('2d')!;
    ctx.fillStyle=options.background||'#f0ecdf';ctx.fillRect(0,0,canvas.width,canvas.height);
    const lines=text.split('\n'); const longest=Math.max(...lines.map(l=>l.length));
    const size=Math.min(canvas.height/(lines.length+1),canvas.width/(longest*.64));
    ctx.font=`${options.font||500} ${size}px sans-serif`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillStyle=options.color||'#344951';
    lines.forEach((line,i)=>ctx.fillText(line,canvas.width/2,canvas.height/2+(i-(lines.length-1)/2)*size*1.3));
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;textures.push(tex);
    const m=new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide});materials.push(m);
    const panel=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);panel.position.set(x,y,z);panel.rotation.y=options.rotation||0;scene.add(panel);return panel;
  }
  scene.add(new THREE.HemisphereLight('#fff4df','#a4a99d',2.25));
  const sunlight=new THREE.DirectionalLight('#fff0d6',2.1);sunlight.position.set(8,14,-9);scene.add(sunlight);
  const bounce=new THREE.PointLight('#e0f0ef',15,22,2);bounce.position.set(-6,4,2);scene.add(bounce);

  // One floor, with a baked low-contrast terrazzo pattern instead of overlapping geometry.
  const tile=document.createElement('canvas');tile.width=512;tile.height=512;const floorCtx=tile.getContext('2d')!;
  floorCtx.fillStyle='#d7d0bd';floorCtx.fillRect(0,0,512,512);
  for(let i=0;i<350;i++) { const x=(i*137.73)%512,y=(i*83.17)%512;floorCtx.fillStyle=['#c9c3b2','#e8e1d0','#bcb5a2'][i%3];floorCtx.fillRect(x,y,1.5+i%3,1+i%2); }
  floorCtx.strokeStyle='#c9c1ad';floorCtx.lineWidth=1;floorCtx.strokeRect(0,0,512,512);
  const floorTex=new THREE.CanvasTexture(tile);floorTex.colorSpace=THREE.SRGBColorSpace;floorTex.wrapS=floorTex.wrapT=THREE.RepeatWrapping;floorTex.repeat.set(9,10);floorTex.anisotropy=8;textures.push(floorTex);
  const floorMat=new THREE.MeshStandardMaterial({map:floorTex,roughness:.92});materials.push(floorMat);
  box(0,-.12,0,21,.24,24,floorMat);
  // Raised inset path strips have physical depth separation from the floor.
  for(const x of [-2.7,2.7])box(x,.014,2.6,.025,.025,12.6,brass);

  // Thick ash frames, quiet plaster, acoustic ceiling and a full-height window wall.
  box(0,1.3,-11.7,21,2.6,.4,ivory);box(0,5.7,-11.7,21,1.4,.5,ivory);
  box(-10.2,3,0,.35,6,23.7,ivory);
  box(10.2,.55,0,.35,1.1,23.7,ivory);box(10.2,5.9,0,.4,.8,23.7,ivory);
  box(10.21,3.3,0,.035,4.4,23,glass);
  for(const z of [-10,-6,-2,2,6,10])box(10.05,3.2,z,.26,6.4,.23,wood);
  for(const x of [-8,-4,0,4,8]) { box(x,3.8,-11.5,.24,2.5,.3,wood);box(x,3.8,-11.46,3.6,2.3,.025,glass); }
  box(0,6.6,0,21,.2,24,ivory);
  for(let i=0;i<18;i++)box(-9.7+i*1.14,6.35,0,.14,.32,23.5,wood);
  for(const z of [-7,0,7]) { box(0,5.8,z,16,.09,.12,ink);for(const x of [-6,0,6]) { cyl(x,5.63,z,.15,.3,ink);cyl(x,5.47,z,.12,.02,glow); } }
  box(0,2.7,11.8,21,5.4,.35,ivory);
  box(0,2.1,11.55,3.3,4.2,.18,wood);box(.02,2.1,11.43,2.95,3.9,.04,glass);
  label('ATELIER / RESEARCH COMMONS',0,5.05,-11.44,12,1.05,{background:'#f0ecdf',color:'#344951',font:600});
  label('Observe carefully.  Explore generously.',0,4.25,-11.42,9,.5,{color:'#7b897d'});
  label('FIELD STATION 03',-9.96,4.6,7.5,4,.6,{rotation:Math.PI/2,color:'#8c725c'});

  // A distant landscape gives daylight depth without a distracting skybox.
  box(27,-.6,0,36,.4,100,sage);
  const hillMat=mat('#bdcdbd');
  for(let i=0;i<9;i++) { const hill=new THREE.Mesh(new THREE.SphereGeometry(8+i%3,12,6),hillMat);hill.scale.y=.35;hill.position.set(27+i%3*8,-.5,-35+i*9);scene.add(hill); }
  for(let i=0;i<15;i++) { const x=16+(i%4)*4,z=-28+i*4.4;box(x,2,z,.22,4,.22,darkWood);const crown=new THREE.Mesh(new THREE.SphereGeometry(1.5+i%3*.25,7,5),sage);crown.position.set(x,4.5,z);crown.scale.y=1.25;scene.add(crown); }

  // Modular benches intentionally share physical proportions and attachment points.
  function desk(x:number,z:number,w:number,d:number,accent:THREE.Material) {
    box(x,.58,z,w-.12,1.16,d-.1,ivory);box(x,1.22,z,w,.16,d,wood);
    box(x,.09,z,w-.1,.12,d-.1,ink);
    for(let i=0;i<3;i++) { const dx=x-w*.32+i*w*.32;box(dx,.66,z+d/2+.005,w*.28,.73,.045,accent);box(dx,.88,z+d/2+.035,.3,.035,.035,brass); }
    addCollider(x,z,w,d);
  }
  function monitor(x:number,z:number,text:string,accent='#a4c4b6') {
    box(x,1.34,z,.65,.06,.45,ink);box(x,1.65,z,.06,.6,.07,brass);box(x,2.1,z,1.65,1.02,.1,ink);
    label(text,x,2.1,z+.057,1.5,.87,{background:'#263b45',color:accent,font:500});
    box(x,1.34,z+.55,1,.04,.36,linen);
    for(let i=0;i<5;i++)box(x-.32+i*.16,1.365,z+.55,.11,.009,.24,chalk);
  }
  function sampleTray(x:number,z:number) {
    box(x,1.34,z,1.15,.055,.7,linen);
    for(let i=0;i<6;i++) {cyl(x-.36+i%3*.36,1.53,z-.18+Math.floor(i/3)*.36,.09,.33,white);cyl(x-.36+i%3*.36,1.71,z-.18+Math.floor(i/3)*.36,.095,.04,i%2?sage:clay);}
  }
  function taskLamp(x:number,z:number) {
    cyl(x,1.34,z,.15,.05,ink);box(x,1.82,z,.035,.95,.035,brass);box(x+.19,2.28,z,.4,.04,.06,brass);const shade=cyl(x+.4,2.22,z,.19,.16,ivory);shade.rotation.z=-.22;
  }
  function stool(x:number,z:number) {
    cyl(x,.81,z,.43,.13,clay);for(const dx of [-.26,.26])for(const dz of [-.26,.26])box(x+dx,.4,z+dz,.05,.8,.05,darkWood);addCollider(x,z,.8,.8);
  }
  // Left bay: material and diffusion experiments.
  desk(-6.65,-2,5.6,1.65,sage);monitor(-7.9,-2.25,'01  /  EXPERIMENTS\nFIELD DIFFUSION\nREADY FOR A QUESTION');sampleTray(-5.9,-2);taskLamp(-4.45,-2.35);
  const cultureCase=box(-5.05,1.75,-2.15,.7,.8,.7,glass);box(-5.05,1.36,-2.15,.8,.08,.8,ivory);cyl(-5.05,1.42,-2.15,.27,.04,clay);
  label('01  /  EXPERIMENT BAY',-6.65,3.65,-2.8,5.6,.65,{background:'#dbe1d2',color:'#4a6256',font:600});
  // Right bay: data and analysis, with a microscope and reference slides.
  desk(6.65,-3.1,5.6,1.65,linen);monitor(7.8,-3.35,'02  /  ANALYSIS\nMEASURE. COMPARE.\nKEEP THE EVIDENCE.','#d6c599');taskLamp(4.4,-3.5);
  box(5.35,1.38,-3.1,.8,.12,.6,ink);box(5.37,1.8,-3.35,.15,.85,.16,ivory);const scope=box(5.37,2.12,-3.16,.18,.7,.2,ink);scope.rotation.x=-.45;box(5.35,1.65,-3.0,.6,.05,.45,brass);
  sampleTray(6.4,-3.1);label('02  /  ANALYSIS BAY',6.65,3.65,-3.9,5.6,.65,{background:'#e6ddc8',color:'#6c624c',font:600});
  // Rear station: expedition planning and policy review.
  desk(0,-9.3,5,1.5,linen);monitor(0,-9.5,'03  /  EXPLORATION\nNEW DIRECTION\nA BETTER QUESTION','#bacad9');taskLamp(1.9,-9.4);
  label('03  /  EXPLORER',0,2.92,-10.1,4.2,.45,{color:'#6d7c85'});
  // Entry library, designed to remain easy to find from anywhere in the room.
  desk(-6.65,5.5,5.6,1.5,clay);monitor(-7.7,5.3,'04  /  SHARED MEMORY\nMETHODS + FINDINGS\nEVERY IDEA LEAVES A TRACE','#ddbba4');
  const book=box(-5.3,1.36,5.65,1,.09,.7,clay);book.rotation.y=-.2;const page=box(-5.3,1.415,5.65,.9,.02,.6,white);page.rotation.y=-.2;taskLamp(-4.4,5.4);
  label('04  /  RESEARCH LIBRARY',-6.65,3.65,4.7,5.6,.65,{background:'#e5c5b5',color:'#6d5142',font:600});
  for(const x of [-8.5,8.5]) {box(x,2.1,-10.9,2.1,4.2,.7,wood);for(let y=.7;y<4;y+=1.05){box(x,y,-10.45,2,.06,1,ivory);for(let i=0;i<5;i++)box(x-.7+i*.33,y+.35,-10.62,.22,.6,.38,[sage,linen,clay,ivory,ink][i]);}addCollider(x,-10.6,2.1,1.1);}
  stool(-7.1,.2);stool(7,-.8);

  // A domain-neutral field table: movable particles over a gridded sampling surface.
  cyl(0,.18,-3.2,1.9,.36,darkWood);cyl(0,.56,-3.2,1.75,.4,ivory);cyl(0,.79,-3.2,1.68,.07,brass);cyl(0,.85,-3.2,1.58,.05,ink);
  addCollider(0,-3.2,3.8,3.8);
  label('PHENOMENA / LIVE FIELD',0,.55,-1.425,2.4,.25,{background:'#f0ecdf',color:'#657e77'});
  const field=new THREE.Group();field.position.set(0,.95,-3.2);scene.add(field);
  const particles: THREE.Mesh[]=[];
  const particleMats=[mat('#adc7b0',{emissive:'#527c65',emissiveIntensity:.1}),mat('#d9ac8b'),mat('#9eb9ce')];
  for(let i=0;i<30;i++) {const p=new THREE.Mesh(new THREE.SphereGeometry(.055+i%3*.015,8,6),particleMats[i%3]);p.position.set(Math.sin(i*9.3)*1.1,.2+(i*.31%1)*1.3,Math.cos(i*7.2)*1.1);field.add(p);particles.push(p);}
  // Suspended display ring gives the room a central landmark without obstructing movement.
  const halo=new THREE.Mesh(new THREE.TorusGeometry(2.2,.035,6,64),brass);halo.rotation.x=Math.PI/2;halo.position.set(0,4.5,-3.2);scene.add(halo);
  for(const x of [-1.8,1.8])box(x,5.45,-3.2,.02,1.9,.02,brass);

  // Soft embodied assistants; hands work at the bench rather than standing as decoration.
  type Worker = { group:THREE.Group; hand:THREE.Group; head:THREE.Group; station:StationId; phase:number; led:THREE.MeshStandardMaterial };
  const workers: Worker[]=[];
  function worker(x:number,z:number,rotation:number,station:StationId,name:string,accent:THREE.Material,phase:number) {
    const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=rotation;scene.add(g);
    const led=mat('#c2d7cb',{emissive:'#7ca995',emissiveIntensity:.2});
    for(const dx of [-.16,.16]){box(dx,.35,0,.2,.6,.25,ink,g);box(dx,.08,.04,.24,.13,.35,linen,g);}
    const torso=box(0,.97,0,.66,.67,.36,accent,g);torso.rotation.z=.015;
    box(0,1.18,.19,.44,.035,.025,ivory,g);box(.2,1.04,.198,.12,.15,.018,led,g);
    box(-.4,.95,0,.17,.54,.2,accent,g);
    const hand=new THREE.Group();hand.position.set(.34,1.16,0);g.add(hand);
    const forearm=box(.11,-.06,.16,.16,.18,.48,accent,hand);forearm.rotation.x=.12;box(.11,-.07,.43,.17,.13,.14,linen,hand);
    const head=new THREE.Group();head.position.set(0,1.58,0);g.add(head);
    const face=new THREE.Mesh(new THREE.SphereGeometry(.265,16,12),ivory);face.scale.set(1,.98,.85);head.add(face);
    const visor=box(0,0,.211,.34,.105,.035,ink,head);
    for(const dx of [-.095,.095])box(dx,.005,.233,.035,.025,.01,led,head);
    box(0,-.105,.211,.08,.015,.01,wood,head);
    label(name,x,2.18,z+.15,1.2,.25,{background:'#f0ecdf',color:'#77887e',font:500});
    addCollider(x,z,.85,.75);workers.push({group:g,hand,head,station,phase,led});
  }
  worker(-5.5,-.5,Math.PI,'culture','NOVA / EXPERIMENTS',sage,0);
  worker(5.6,-1.65,Math.PI,'analyzer','IRIS / ANALYSIS',linen,2);
  worker(-1.25,-7.65,Math.PI,'explorer','FINCH / EXPLORER',clay,4);
  // A quiet lounge and specimen shelf make this a place people can work in.
  box(7.6,.45,6.9,3.3,.9,1.5,linen);box(7.6,1.1,7.55,3.3,1,.25,sage);for(const x of [5.9,9.3])box(x,.75,6.9,.2,.9,1.5,wood);addCollider(7.6,7,3.6,1.8);
  cyl(5.4,.52,5.7,.65,1.04,ivory);addCollider(5.4,5.7,1.3,1.3);
  const leafMat=mat('#7e9b76');
  for(const [x,z] of [[-9,9],[9,-8]]) {cyl(x,.38,z,.4,.76,clay);cyl(x,.78,z,.35,.05,darkWood);box(x,1.4,z,.045,1.3,.045,darkWood);for(let j=0;j<6;j++){const leaf=new THREE.Mesh(new THREE.SphereGeometry(.3,8,5),leafMat);leaf.scale.set(1.4,.2,.65);leaf.rotation.z=j%2?.45:-.45;leaf.position.set(x+(j%2?.2:-.2),1.1+j*.14,z);scene.add(leaf);}addCollider(x,z,.9,.9);}

  // Batch only top-level static opaque blocks; moving worker parts retain their hierarchy.
  const batches=new Map<string,THREE.Mesh[]>();
  for(const child of [...scene.children])if(child instanceof THREE.Mesh&&child.geometry===boxGeometry&&!Array.isArray(child.material)&&!child.material.transparent){const key=child.material.uuid;if(!batches.has(key))batches.set(key,[]);batches.get(key)!.push(child);}
  for(const meshes of batches.values())if(meshes.length>3){const batch=new THREE.InstancedMesh(boxGeometry,meshes[0].material,meshes.length);meshes.forEach((m,i)=>{m.updateMatrix();batch.setMatrixAt(i,m.matrix);scene.remove(m);});batch.computeBoundingSphere();scene.add(batch);}
  const stations:LabWorld['stations']=[
    {id:'culture',name:'Experiment bay',description:'Configure a model, inspect a live field',position:new THREE.Vector3(-6.6,1.7,-.65),radius:3},
    {id:'analyzer',name:'Analysis bay',description:'Measurements, plots, and comparisons',position:new THREE.Vector3(6.6,1.7,-1.7),radius:3},
    {id:'explorer',name:'Exploration desk',description:'Hypotheses, scheduling, and agent policies',position:new THREE.Vector3(0,1.7,-7.9),radius:3},
    {id:'notebook',name:'Research library',description:'Datasets, shared findings, and provenance',position:new THREE.Vector3(-6.6,1.7,6.8),radius:3},
  ];
  function update(time:number,state:LabState){
    const progress=THREE.MathUtils.clamp(state.progress>1?state.progress/100:state.progress,0,1);
    const boredom=THREE.MathUtils.clamp(state.boredom>1?state.boredom/100:state.boredom,0,1);
    particles.forEach((p,i)=>{p.position.y=.18+(i*.31%1)*(1+progress*.8)+Math.sin(time*.7+i)*.035;p.scale.setScalar(.8+progress*.5);});
    field.rotation.y=time*(state.running?.035:.008);
    for(const w of workers){const agent=state.agents.find(a=>a.stationId===w.station);const active=agent?agent.state==='working'||agent.state==='thinking':state.running;
      w.hand.rotation.x=active?Math.sin(time*2.4+w.phase)*.1:Math.sin(time*.7+w.phase)*.025;
      w.head.rotation.y=Math.sin(time*(active?.55:.25)+w.phase)*.12;w.group.rotation.z=Math.sin(time*.65+w.phase)*.008;
      w.led.emissiveIntensity=active?.45+Math.sin(time*1.6+w.phase)*.12:.08;
      w.head.rotation.z=active?boredom*Math.sin(time*.4+w.phase)*.06:0;
    }
    cultureCase.rotation.y=Math.sin(time*.12)*.01;
  }
  return {scene,camera,colliders,bounds:{minX:-9.85,maxX:9.85,minZ:-11.1,maxZ:11.1},stations,update,exposure:1.05,dispose(){scene.traverse(o=>{if(o instanceof THREE.Mesh)o.geometry.dispose();});materials.forEach(m=>m.dispose());textures.forEach(t=>t.dispose());}};
}
