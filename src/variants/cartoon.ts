import * as THREE from 'three';
import type { LabWorld, LabState, Collider, Station, StationId } from '../engine/types';

/** A tactile, candy-coloured research clubhouse with rounded robot coworkers. */
export function createWorld(): LabWorld {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#b9e6f4');
  scene.fog = new THREE.Fog('#b9e6f4', 35, 75);
  const camera = new THREE.PerspectiveCamera(67, innerWidth / innerHeight, .08, 110);
  camera.position.set(0, 1.7, 10.4); camera.lookAt(0, 2.05, -4);
  const colliders: Collider[] = [];
  const animated: { group: THREE.Object3D; type: string; baseY?: number; phase: number; station?: StationId }[] = [];
  const materials: Record<string, THREE.MeshToonMaterial> = {};
  const gradient = new THREE.DataTexture(new Uint8Array([105, 170, 224, 255]), 4, 1, THREE.RedFormat);
  gradient.minFilter = gradient.magFilter = THREE.NearestFilter; gradient.needsUpdate = true;
  const mat = (color: string) => materials[color] ||= new THREE.MeshToonMaterial({ color, gradientMap: gradient });
  const blue = mat('#486bc9'), navy = mat('#344879'), sky = mat('#9ecce7'), coral = mat('#f7786b');
  const yellow = mat('#ffd15c'), cream = mat('#fff2d4'), purple = mat('#a48bd2'), teal = mat('#68c2c0');
  const white = mat('#fffaf0'), ink = mat('#33436d'), orange = mat('#f7aa58');
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  function box(x: number,y: number,z: number,w: number,h: number,d: number,m: THREE.Material,p: THREE.Object3D=scene) {
    const o=new THREE.Mesh(boxGeometry,m);o.position.set(x,y,z);o.scale.set(w,h,d);p.add(o);return o;
  }
  function rounded(x: number,y: number,z: number,w: number,h: number,d: number,r: number,m: THREE.Material,p: THREE.Object3D=scene) {
    r=Math.min(r,w/2-.001,h/2-.001,d/2-.001);
    const s=new THREE.Shape(), hw=w/2-r,hh=h/2-r;
    s.moveTo(-hw,-hh-r);s.lineTo(hw,-hh-r);s.quadraticCurveTo(hw+r,-hh-r,hw+r,-hh);s.lineTo(hw+r,hh);s.quadraticCurveTo(hw+r,hh+r,hw,hh+r);s.lineTo(-hw,hh+r);s.quadraticCurveTo(-hw-r,hh+r,-hw-r,hh);s.lineTo(-hw-r,-hh);s.quadraticCurveTo(-hw-r,-hh-r,-hw,-hh-r);
    const geo=new THREE.ExtrudeGeometry(s,{depth:d-2*r,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:r*.45,bevelThickness:r,curveSegments:4});
    geo.translate(0,0,-d/2+r);
    const o=new THREE.Mesh(geo,m);o.position.set(x,y,z);p.add(o);return o;
  }
  function sphere(x:number,y:number,z:number,r:number,m:THREE.Material,p:THREE.Object3D=scene){const o=new THREE.Mesh(new THREE.SphereGeometry(r,16,10),m);o.position.set(x,y,z);p.add(o);return o;}
  function cyl(x:number,y:number,z:number,r:number,h:number,m:THREE.Material,p:THREE.Object3D=scene){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,20),m);o.position.set(x,y,z);p.add(o);return o;}
  function torus(x:number,y:number,z:number,r:number,t:number,m:THREE.Material,p:THREE.Object3D=scene,arc=Math.PI*2){const o=new THREE.Mesh(new THREE.TorusGeometry(r,t,6,48,arc),m);o.position.set(x,y,z);p.add(o);return o;}
  function collider(x:number,z:number,w:number,d:number){colliders.push({minX:x-w/2,maxX:x+w/2,minZ:z-d/2,maxZ:z+d/2});}
  function sign(text:string,x:number,y:number,z:number,w:number,h:number,bg='#fff2d4',fg='#344879',rotation=0){
    const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=Math.max(64,Math.round(1024*h/w));
    const ctx=canvas.getContext('2d')!;ctx.fillStyle=bg;ctx.fillRect(0,0,canvas.width,canvas.height);ctx.fillStyle=fg;ctx.textAlign='center';ctx.textBaseline='middle';
    const lines=text.split('\n'),size=Math.min(canvas.height/(lines.length+1),canvas.width/(Math.max(...lines.map(s=>s.length))*.65));ctx.font=`800 ${size}px sans-serif`;
    lines.forEach((line,i)=>ctx.fillText(line,canvas.width/2,canvas.height/2+(i-(lines.length-1)/2)*size*1.25));
    const tex=new THREE.CanvasTexture(canvas);tex.colorSpace=THREE.SRGBColorSpace;
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:tex,side:THREE.DoubleSide}));mesh.position.set(x,y,z);mesh.rotation.y=rotation;scene.add(mesh);return mesh;
  }
  scene.add(new THREE.HemisphereLight('#fff8e7','#a1afdd',1.65));
  const sun=new THREE.DirectionalLight('#fff3d7',2);sun.position.set(-10,18,10);scene.add(sun);
  const fill=new THREE.DirectionalLight('#d8eafa',1);fill.position.set(12,8,-8);scene.add(fill);

  // A single solid floor and a single baked pattern, never overlapping tiles.
  const fc=document.createElement('canvas');fc.width=1024;fc.height=1024;const f=fc.getContext('2d')!;
  f.fillStyle='#f3e9d5';f.fillRect(0,0,1024,1024);
  f.fillStyle='#e9dfd0';for(let x=20;x<1024;x+=64)for(let y=20;y<1024;y+=64){f.beginPath();f.arc(x,y,2,0,Math.PI*2);f.fill();}
  f.lineWidth=8;f.strokeStyle='#ded8e9';f.beginPath();f.arc(512,390,180,0,Math.PI*2);f.stroke();
  f.strokeStyle='#f6bc9b';f.lineWidth=22;f.beginPath();f.moveTo(512,1024);f.lineTo(512,560);f.stroke();
  const ft=new THREE.CanvasTexture(fc);ft.colorSpace=THREE.SRGBColorSpace;ft.anisotropy=8;
  const floor=box(0,-.12,0,25,.24,29,new THREE.MeshBasicMaterial({map:ft}));floor.name='continuous-floor';
  // Thick cobalt architecture with cream infill and yellow structural arches.
  box(0,3.8,-14,25,7.6,.35,blue);
  box(-12.4,3.8,0,.35,7.6,28,sky);box(12.4,3.8,0,.35,7.6,28,sky);
  box(0,7.65,0,25,.25,29,cream);
  for(const z of [-11,-3,5,13]){box(0,7.2,z,25,.4,.3,blue);box(0,6.98,z,12,.1,.44,yellow);}
  for(const x of [-11.9,11.9])for(const z of [-10,-2,6])rounded(x,3.4,z,.5,6.8,.7,.2,yellow);
  for(const x of [-12.18,12.18]){
    for(const z of [-8,2,10]){
      const g=new THREE.Group();g.position.set(x,4,z);g.rotation.y=x<0?Math.PI/2:-Math.PI/2;scene.add(g);
      rounded(0,0,0,4.3,3,.25,.28,cream,g);rounded(0,0,.15,3.9,2.65,.15,.2,sky,g);
      // Graphic sky, fluffy clouds and distant blue hills beyond each porthole.
      sphere(-.9,.5,.28,.42,white,g);sphere(-.45,.55,.3,.56,white,g);sphere(0,.47,.3,.35,white,g);
      sphere(1.2,.75,.28,.38,yellow,g);box(0,-1,.3,3.9,.25,.04,teal,g);
      box(0,0,.4,.09,2.7,.1,cream,g);
    }
  }
  // A huge sunny arch frames the back wall, like the doorway of an animation set.
  const arch=torus(0,3.4,-13.65,3.5,.22,yellow,scene,Math.PI);arch.rotation.z=0;
  cyl(-3.5,1.7,-13.65,.22,3.4,yellow);cyl(3.5,1.7,-13.65,.22,3.4,yellow);
  rounded(0,4.9,-13.4,10.5,1.5,.3,.18,coral);
  sign('THE IDEA FACTORY',0,4.9,-13.2,9.7,1,'#f7786b','#fffaf0');
  sign('SMALL QUESTIONS. BIG POSSIBILITIES.',0,3.75,-13.6,8,.5,'#486bc9','#fff2d4');
  sign('WELCOME, CURIOUS MINDS',0,6.45,13.6,9,.6,'#fff2d4','#486bc9',Math.PI);

  // Central "idea engine": an open, colourful tabletop sculpture, not a cage.
  cyl(0,.15,-3,2.2,.3,blue);cyl(0,.37,-3,2.05,.18,yellow);cyl(0,.72,-3,1.85,.52,cream);cyl(0,1.01,-3,1.9,.1,coral);collider(0,-3,4.1,4.1);
  const sculpture=new THREE.Group();sculpture.position.set(0,1.2,-3);scene.add(sculpture);
  const stem=cyl(0,.9,0,.17,1.8,blue,sculpture);
  sphere(0,1.95,0,.65,coral,sculpture);
  torus(0,1.95,0,1.2,.08,yellow,sculpture).rotation.x=.8;
  torus(0,1.95,0,1.35,.06,teal,sculpture).rotation.x=-.7;
  for(let i=0;i<6;i++){const a=i*Math.PI/3;sphere(Math.cos(a)*1.15,1.95+Math.sin(a)*.65,Math.sin(a)*.8,.15,[blue,purple,yellow][i%3],sculpture);}
  sign('THE CURIOSITY MACHINE',0,.62,-.89,3.2,.4);
  animated.push({group:sculpture,type:'sculpture',phase:0});

  function desk(x:number,z:number,color:THREE.Material){
    rounded(x,.66,z,5.2,1.25,1.7,.2,color);rounded(x,1.35,z,5.6,.2,1.95,.08,cream);
    for(const dx of [-1.65,0,1.65]){rounded(x+dx,.72,z+.88,1.3,.65,.04,.01,white);box(x+dx,.8,z+.925,.35,.06,.07,yellow);}
    collider(x,z,5.6,1.95);
  }
  function monitor(x:number,z:number,text:string,color:THREE.Material=blue){
    cyl(x,1.45,z,.38,.12,color);rounded(x,1.75,z,.12,.6,.15,.04,color);
    rounded(x,2.2,z,1.65,1.12,.27,.1,color);sign(text,x,2.2,z+.15,1.4,.85,'#fff8df','#486bc9');
    rounded(x,1.5,z+.55,1.35,.12,.48,.04,yellow);
  }
  function vial(x:number,z:number,color:THREE.Material){cyl(x,1.7,z,.12,.55,color);sphere(x,1.98,z,.12,color);cyl(x,2.03,z,.14,.1,blue);}
  // Growth atelier: bubble domes, sample rack and oversized pipette.
  desk(-8,-3,teal);monitor(-9.45,-3.15,'GROW / LEARN\nTRY AGAIN',teal);
  const domeMat=new THREE.MeshPhysicalMaterial({color:'#b9edee',roughness:.15,transparent:true,opacity:.19,depthWrite:false,side:THREE.DoubleSide});
  cyl(-7.15,1.55,-3,.65,.2,blue);sphere(-7.15,2.1,-3,.68,domeMat);sphere(-7.15,2,-3,.24,coral);sphere(-7.45,2.25,-3,.15,yellow);sphere(-6.85,2.2,-3,.16,purple);
  for(let i=0;i<4;i++)vial(-8.5+i*.33,-2.5,[coral,yellow,purple,teal][i]);
  rounded(-8,4.15,-3.65,5.8,.85,.18,.08,teal);sign('01 / GROW STUDIO',-8,4.15,-3.54,5.4,.62,'#68c2c0','#fffaf0');
  // Analysis atelier: a large friendly microscope and a graph board.
  desk(8,-3,coral);monitor(9.4,-3.15,'OH! THAT’S\nINTERESTING',coral);
  rounded(6.8,1.5,-3,1.3,.18,1,.06,blue);rounded(6.65,2.05,-3.25,.25,1.1,.25,.1,yellow);
  const arm=rounded(6.75,2.65,-3.1,.3,.75,.3,.1,yellow);arm.rotation.x=-.45;
  const lens=cyl(6.75,2.95,-2.9,.2,.65,blue);lens.rotation.x=-.45;
  cyl(6.8,1.69,-2.85,.3,.1,purple);rounded(6.8,1.92,-2.95,1,.1,.8,.03,cream);
  rounded(8,4.15,-3.65,5.8,.85,.18,.08,coral);sign('02 / DISCOVERY DESK',8,4.15,-3.54,5.4,.62,'#f7786b','#fffaf0');
  // Explorer terminal and its giant question-mark sculpture.
  desk(0,-10.5,purple);monitor(-1,-10.5,'WHAT IF…?\nNEW DIRECTIONS',purple);
  const question=new THREE.Group();question.position.set(1.7,1.6,-10.5);scene.add(question);
  const qArc=torus(0,.75,0,.35,.12,yellow,question,Math.PI*1.4);qArc.rotation.z=-.7;
  rounded(.12,.3,0,.18,.45,.2,.05,yellow,question);sphere(.12,-.1,0,.12,yellow,question);
  sign('03 / WHAT-IF WORKSHOP',0,.77,-9.49,4.6,.42);
  // Memory nook is a coral reading desk, with oversized notebooks and pencils.
  desk(-8,7,blue);monitor(-9.4,6.85,'GOOD IDEAS\nLIVE HERE',blue);
  for(let i=0;i<3;i++){const book=rounded(-7.2,1.52+i*.15,7.1,1.4,.13,.9,.03,[coral,purple,yellow][i]);book.rotation.y=(i-1)*.15;}
  cyl(-6.3,1.7,6.9,.23,.6,yellow);for(let i=0;i<3;i++){const pencil=cyl(-6.45+i*.14,2.15,6.9,.035,.8,[blue,coral,teal][i]);pencil.rotation.z=(i-1)*.15;}
  sign('04 / MEMORY NOOK',-8,3.4,6.4,5,.62,'#486bc9','#fff2d4');
  // A comfortable lounge and big friendly wall decorations.
  rounded(9,.65,8,4.5,1.1,1.8,.3,purple);rounded(9,1.3,8.6,4.5,1.4,.4,.18,purple);
  for(const x of [6.9,11.1])rounded(x,1.05,8,.4,1.1,1.8,.15,yellow);collider(9,8,4.8,2);
  sign('IDEAS NEED\nA LITTLE ROOM',9,3.9,12.8,4,1.4,'#fff2d4','#486bc9');
  for(const [x,z] of [[-10.7,-10.5],[10.7,-10.5],[11,3]]){
    cyl(x,.45,z,.52,.9,coral);cyl(x,1.25,z,.07,1.5,teal);
    for(let i=0;i<4;i++){const a=i*2.4;sphere(x+Math.cos(a)*.35,1.65+i*.25,z+Math.sin(a)*.35,.4,[teal,yellow,purple][i%3]);}collider(x,z,1.1,1.1);
  }

  function robot(x:number,z:number,color:THREE.Material,name:string,station:StationId){
    const g=new THREE.Group();g.position.set(x,0,z);scene.add(g);
    // Shoe-like feet, a chunky torso, and a very expressive rounded face.
    for(const dx of [-.23,.23]){rounded(dx,.13,.08,.36,.22,.55,.08,blue,g);cyl(dx,.5,0,.1,.6,yellow,g);}
    rounded(0,1.02,0,.85,.74,.58,.16,color,g);rounded(0,1.05,.31,.45,.32,.05,.02,cream,g);
    sphere(0,1.47,0,.14,yellow,g);rounded(0,1.94,0,1.1,.85,.72,.19,color,g);
    rounded(0,1.95,.4,.88,.55,.08,.03,cream,g);
    for(const dx of [-.22,.22]){sphere(dx,2.02,.46,.085,ink,g);sphere(dx-.024,2.05,.525,.022,white,g);sphere(dx*1.45,1.86,.46,.07,coral,g);}
    const smile=torus(0,1.89,.47,.135,.026,ink,g,Math.PI);smile.rotation.z=Math.PI;
    cyl(0,2.48,0,.035,.3,blue,g);sphere(0,2.67,0,.095,yellow,g);
    for(const dx of [-.6,.6]){sphere(dx,1.25,0,.16,yellow,g);const arm=new THREE.Group();arm.position.set(dx,1.25,0);g.add(arm);rounded(0,-.25,.12,.22,.5,.24,.08,color,arm);sphere(0,-.55,.22,.14,yellow,arm);animated.push({group:arm,type:'arm',phase:dx+x,station});}
    sign(name.toUpperCase(),x,2.95,z+.15,1.8,.38,'#fff2d4','#486bc9');
    collider(x,z,1.35,.9);animated.push({group:g,type:'robot',phase:x,station});
  }
  robot(-5.6,-.35,teal,'Cleo / culture','culture');robot(5.6,-.35,coral,'Axel / analyst','analyzer');robot(2.8,-8.3,purple,'Nova / explorer','explorer');

  const stations:Station[]=[
    {id:'culture',name:'Grow studio',description:'Set up an experiment',position:new THREE.Vector3(-8,1.6,-1.5),radius:3},
    {id:'analyzer',name:'Discovery desk',description:'Inspect measurements and results',position:new THREE.Vector3(8,1.6,-1.5),radius:3},
    {id:'explorer',name:'What-if workshop',description:'Follow a new hypothesis',position:new THREE.Vector3(0,1.6,-9),radius:3},
    {id:'notebook',name:'Memory nook',description:'Read the team’s shared findings',position:new THREE.Vector3(-8,1.6,8.5),radius:3}
  ];
  for(const s of stations){const marker=sphere(s.position.x,3.2,s.position.z,.13,yellow);animated.push({group:marker,type:'marker',baseY:3.2,phase:s.position.x});}

  // Instance repeated unanimated boxes to keep the toy set light on the GPU.
  const groups=new Map<THREE.Material,THREE.Mesh[]>();
  for(const o of [...scene.children])if(o instanceof THREE.Mesh&&o.geometry===boxGeometry&&o.name!=='continuous-floor'&&!(o.material as THREE.Material).transparent){const m=o.material as THREE.Material;if(!groups.has(m))groups.set(m,[]);groups.get(m)!.push(o);}
  for(const [m,meshes]of groups){if(meshes.length<3)continue;const batch=new THREE.InstancedMesh(boxGeometry,m,meshes.length);meshes.forEach((o,i)=>{o.updateMatrix();batch.setMatrixAt(i,o.matrix);scene.remove(o);});batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere();scene.add(batch);}
  function update(time:number,state:LabState){
    const progress=THREE.MathUtils.clamp(state.progress,0,1), boredom=THREE.MathUtils.clamp(state.boredom>1?state.boredom/100:state.boredom,0,1);
    for(const a of animated){
      if(a.type==='sculpture'){a.group.rotation.y=time*(.1+boredom*.2);a.group.scale.setScalar(.85+progress*.15);}
      if(a.type==='marker')a.group.position.y=(a.baseY||3.2)+Math.sin(time*2+a.phase)*.1;
      if(a.type==='robot'){a.group.rotation.y=Math.sin(time*.6+a.phase)*.05;a.group.position.y=Math.sin(time*1.5+a.phase)*.018;}
      if(a.type==='arm'){const active=state.running||state.agents.some(agent=>agent.stationId===a.station&&agent.state==='working');a.group.rotation.x=active?-.8+Math.sin(time*3+a.phase)*.2:Math.sin(time+a.phase)*.04;}
    }
  }
  return {scene,camera,colliders,bounds:{minX:-11.8,maxX:11.8,minZ:-13.3,maxZ:13.4},stations,update,exposure:1.02};
}
