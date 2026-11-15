import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';
import type { LabWorld, LabState, Collider } from '../engine/types';
import {robotAppearance} from '../engine/robots.ts';
import {findPath} from '../engine/navigation.ts';

/** Lab Environment: Daylight instruments and cheerful robot researchers in a warm modular commons. */
export function createWorld(): LabWorld {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#e4edf3');
  scene.fog = new THREE.Fog('#e4edf3', 34, 90);
  const camera = new THREE.PerspectiveCamera(66, innerWidth / innerHeight, .08, 110);
  camera.position.set(0, 1.69, 9.5); camera.lookAt(0, 1.8, -3);
  const colliders: Collider[] = [];
  const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
  const mat = (color: string, roughness = .68, metalness = 0) => new THREE.MeshStandardMaterial({ color, roughness, metalness });
  const ivory = mat('#f2f6f7'), porcelain = mat('#fafcfc', .37), charcoal = mat('#31434b', .42), steel = mat('#b1bec5', .32, .65);
  const cabinetry = mat('#c8d3d6'), sage = mat('#a8b5a1'), wood = mat('#b4a38c', .8), darkWood = mat('#928572');
  const black = mat('#18252a', .38), paper = mat('#f9f4e6'), blue = mat('#3e8493'), amber = mat('#d2a468');
  const glass = new THREE.MeshPhysicalMaterial({color:'#c6dfdc',transparent:true,opacity:.14,roughness:.12,metalness:.08,depthWrite:false,side:THREE.DoubleSide});
  const lightMaterial = new THREE.MeshBasicMaterial({color:'#fff6dd'});
  const led = new THREE.MeshBasicMaterial({color:'#80b7ab'});
  const animated: {object: THREE.Object3D; kind:string; phase:number}[] = [];
  const box = (x:number,y:number,z:number,w:number,h:number,d:number,m:THREE.Material,parent:THREE.Object3D=scene) => {
    const mesh = new THREE.Mesh(boxGeometry,m); mesh.position.set(x,y,z);mesh.scale.set(w,h,d); parent.add(mesh);return mesh;
  };
  const cylinder = (x:number,y:number,z:number,r:number,h:number,m:THREE.Material,parent:THREE.Object3D=scene,n=20) => {
    const mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,n),m);mesh.position.set(x,y,z);parent.add(mesh);return mesh;
  };
  const sphere = (x:number,y:number,z:number,r:number,m:THREE.Material,parent:THREE.Object3D=scene) => {
    const mesh=new THREE.Mesh(new THREE.SphereGeometry(r,16,12),m);mesh.position.set(x,y,z);parent.add(mesh);return mesh;
  };
  const collider=(x:number,z:number,w:number,d:number)=>colliders.push({minX:x-w/2,maxX:x+w/2,minZ:z-d/2,maxZ:z+d/2});
  const line = (a:THREE.Vector3,b:THREE.Vector3,r:number,m:THREE.Material,parent:THREE.Object3D=scene) => {
    const v=b.clone().sub(a), mesh=new THREE.Mesh(new THREE.CylinderGeometry(r,r,v.length(),12),m);mesh.position.copy(a).add(b).multiplyScalar(.5);mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());parent.add(mesh);return mesh;
  };
  const label=(text:string,x:number,y:number,z:number,w:number,h:number,background='#f5f4ec',color='#425859',rotation=0)=>{
    const canvas=document.createElement('canvas'); canvas.width=1024;canvas.height=Math.max(64,Math.round(1024*h/w));
    const ctx=canvas.getContext('2d')!;ctx.fillStyle=background;ctx.fillRect(0,0,canvas.width,canvas.height);
    const lines=text.split('\n'); const size=Math.min(canvas.height/(lines.length+1),canvas.width/(Math.max(...lines.map(t=>t.length))*.62));
    ctx.fillStyle=color;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`500 ${size}px sans-serif`;
    lines.forEach((s,i)=>ctx.fillText(s,512,canvas.height/2+(i-(lines.length-1)/2)*size*1.3));
    const texture=new THREE.CanvasTexture(canvas);texture.colorSpace=THREE.SRGBColorSpace;
    const m=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide});
    const mesh=new THREE.Mesh(new THREE.PlaneGeometry(w,h),m);mesh.position.set(x,y,z);mesh.rotation.y=rotation;scene.add(mesh);return mesh;
  };
  scene.add(new THREE.HemisphereLight('#f5faff','#9caeb8',2.15));
  const sun=new THREE.DirectionalLight('#ffffff',2.2);sun.position.set(-8,11,3);scene.add(sun);
  const fill=new THREE.DirectionalLight('#d0e9fa',.85);fill.position.set(8,5,-8);scene.add(fill);

  // A single floor slab with a seamless terrazzo texture; no overlapping tiles.
  const floorCanvas=document.createElement('canvas');floorCanvas.width=512;floorCanvas.height=512;
  const fc=floorCanvas.getContext('2d')!;fc.fillStyle='#d9e2e6';fc.fillRect(0,0,512,512);
  for(let i=0;i<1700;i++){const a=Math.sin(i*41.77)*.5+.5,b=Math.sin(i*19.31+5)*.5+.5;fc.fillStyle=i%3?'#ecf0f1':'#c3d0d6';fc.fillRect(a*512,b*512,1+(i%3),1+(i%2));}
  const floorTexture=new THREE.CanvasTexture(floorCanvas);floorTexture.colorSpace=THREE.SRGBColorSpace;floorTexture.wrapS=floorTexture.wrapT=THREE.RepeatWrapping;floorTexture.repeat.set(8,9);floorTexture.anisotropy=8;
  box(0,-.12,0,24,.24,28,new THREE.MeshStandardMaterial({map:floorTexture,roughness:.85}));
  // Wall architecture: warm plaster and continuous oak service dado.
  box(0,2.5,-13.5,24,5,.3,ivory);box(11.75,2.5,0,.3,5,27,ivory);
  box(0,.43,-13.27,23.5,.86,.12,wood);box(11.53,.43,0,.12,.86,26.5,wood);
  box(0,.08,-13.1,23.5,.16,.06,charcoal);box(11.38,.08,0,.06,.16,26.5,charcoal);
  const roof=box(0,4.9,0,24,.16,28,ivory);roof.userData.overhead=true;
  // Left daylight facade. Pale mullions make the room airy rather than industrial.
  for(const z of [-12,-6,0,6,12])box(-11.6,2.5,z,.22,5,.14,ivory);
  box(-11.6,.55,0,.3,1.1,27,ivory);box(-11.6,4.65,0,.3,.7,27,ivory);
  box(-11.68,2.75,0,.025,3.5,27,glass);
  for(const y of [1.12,3.8])box(-11.4,y,0,.12,.07,27,steel);
  // A translucent acoustic screen on the entry side.
  box(-7.9,2.25,12.7,7.5,4.5,.14,ivory);box(7.9,2.25,12.7,7.5,4.5,.14,ivory);
  for(const x of [-3.9,3.9])box(x,2.25,12.65,.12,4.5,.18,steel);
  box(0,2.25,12.8,7.7,4.5,.025,glass);
  label('LAB ENVIRONMENT / RESEARCH COMMONS',0,4.1,12.55,6.6,.38,'#f1ecdf','#425859',Math.PI);
  // Clear plaster ceiling with restrained task-light rails.
  for(const z of [-8,-1,6]) {
    box(0,4.35,z,20,.08,.07,charcoal);
    for(const x of [-7,0,7]) {
      cylinder(x,4.18,z,.13,.22,charcoal);
      cylinder(x,4.06,z,.1,.025,lightMaterial);
    }
  }
  const pendant=new THREE.Mesh(new THREE.TorusGeometry(1.8,.025,8,64),darkWood);
  pendant.rotation.x=Math.PI/2;pendant.position.set(0,3.9,.5);scene.add(pendant);
  for(const x of [-1.6,1.6])line(new THREE.Vector3(x,3.9,.5),new THREE.Vector3(x,4.84,.5),.012,steel);
  // Garden outside, low rolling landscape, no ominous landscape silhouettes.
  box(-28,-.65,-2,45,1,70,mat('#b0bf9d'));
  const treeLeaf=mat('#98af91'),trunk=mat('#897e69');
  for(let i=0;i<14;i++){
    const x=-17-(i%3)*3,z=-25+i*4.1; cylinder(x,1.3,z,.12,3,trunk);const crown=sphere(x,3,z,1.25+(i%3)*.2,treeLeaf);crown.scale.y=1.45;
  }
  // A shallow planted daylight ledge.
  function pot(x:number,z:number){
    cylinder(x,.32,z,.34,.64,ivory);cylinder(x,.66,z,.29,.04,darkWood);
    for(let i=0;i<6;i++){const a=i*2.4;line(new THREE.Vector3(x,.65,z),new THREE.Vector3(x+Math.cos(a)*.25,1.5+(i%3)*.18,z+Math.sin(a)*.25),.025,sage);const leaf=sphere(x+Math.cos(a)*.3,1.3+(i%3)*.18,z+Math.sin(a)*.3,.16,sage);leaf.scale.set(.55,2,.8);}
    collider(x,z,.8,.8);
  }
  pot(-10.3,8.4);pot(-10.3,-10.8);pot(10.3,10.8);

  // Cabinetry uses a recessed plinth and inset handles for plausible scale.
  function bench(x:number,z:number,w:number,d:number){
    box(x,.1,z,w-.17,.2,d-.12,charcoal);box(x,.51,z,w,.78,d,cabinetry);box(x,.94,z,w+.08,.08,d+.08,charcoal);
    const n=Math.round(w/.85);
    for(let i=0;i<n;i++){
      const xx=x-w/2+(i+.5)*w/n;
      box(xx,.53,z+d/2+.009,w/n-.025,.7,.018,porcelain);
      box(xx,.77,z+d/2+.028,.29,.025,.035,steel);
    }
    collider(x,z,w+.12,d+.12);
  }
  function monitor(x:number,z:number,heading:string,accent='#8ab9ad'){
    box(x,1.0,z,.48,.035,.3,steel);box(x,1.22,z,.055,.4,.055,steel);
    box(x,1.53,z,.94,.59,.055,charcoal);
    label(heading+'\n—  RESEARCH IN PROGRESS  —',x,1.53,z+.032,.86,.51,'#203137',accent);
    box(x,1.01,z+.36,.65,.035,.2,ivory);
    for(let i=0;i<5;i++)box(x-.25+i*.12,1.031,z+.36,.07,.007,.11,steel);
  }
  function rack(x:number,z:number,color:THREE.Material){
    box(x,1.02,z,.56,.09,.3,sage);
    for(let i=0;i<5;i++){
      cylinder(x-.22+i*.11,1.16,z,.031,.25,porcelain,scene,10);
      cylinder(x-.22+i*.11,1.3,z,.038,.025,color,scene,10);
    }
  }
  function microscope(x:number,z:number){
    const g=new THREE.Group();g.position.set(x,1,z);scene.add(g);
    const base=box(0,.045,0,.58,.09,.55,porcelain,g);base.rotation.y=-.1;
    const back=box(0,.36,-.15,.14,.62,.16,porcelain,g);back.rotation.x=-.15;
    const arm=box(0,.61,-.03,.18,.15,.37,porcelain,g);arm.rotation.x=-.2;
    const optics=cylinder(0,.67,.1,.07,.27,charcoal,g);optics.rotation.x=-.38;
    cylinder(0,.47,.1,.065,.18,steel,g);box(0,.23,.08,.4,.04,.35,charcoal,g);
    cylinder(0,.11,.08,.12,.04,lightMaterial,g);sphere(.13,.32,-.11,.065,charcoal,g);
  }
  function pipetteStand(x:number,z:number){
    box(x,1.01,z,.35,.025,.22,steel);box(x,1.25,z,.025,.45,.025,steel);box(x,1.46,z,.35,.035,.05,ivory);
    for(let i=0;i<3;i++){const xx=x-.12+i*.12;cylinder(xx,1.28,z,.026,.32,porcelain,scene,12);cylinder(xx,1.08,z,.007,.12,steel,scene,8);cylinder(xx,1.46,z,.035,.035,i%2?blue:amber,scene,12);}
  }
  function bottle(x:number,z:number,color:THREE.Material){cylinder(x,1.1,z,.075,.23,color);cylinder(x,1.24,z,.044,.07,ivory);box(x,1.1,z+.074,.09,.1,.004,paper);}
  // Left wall wet lab with an accessible inner face.
  bench(-8.0,-4.6,5.4,1.45);monitor(-9.6,-4.8,'CULTURE / 01');microscope(-7.7,-4.65);rack(-6.2,-4.45,blue);pipetteStand(-6.3,-4.95);
  label('01   CULTURE & MICROSCOPY',-8.0,2.2,-5.37,5.35,.32);
  bottle(-8.65,-4.7,amber);bottle(-8.9,-4.7,blue);
  // Scientific instruments on the central island, leaving the full x=0 aisle clear.
  bench(5.4,-2.8,6.2,1.7);
  box(5.6,1.47,-3.03,1.62,.98,.95,porcelain);box(5.6,1.5,-2.54,1.23,.57,.035,charcoal);
  label('ANALYSIS\nSAMPLE READY',5.6,1.5,-2.517,1.08,.45,'#273c43','#a6c8bb');
  box(5.6,1.97,-3.03,1.4,.04,.6,ivory);cylinder(5.6,1.99,-3.03,.24,.03,steel);
  monitor(3.3,-3.08,'ANALYSIS / 02');rack(7.75,-2.5,amber);pipetteStand(7.7,-3.2);
  label('02   ANALYSIS',5.4,.62,-1.935,4.2,.24,'#fafaf6','#425859');
  // Rear exploration wall: incubator and compute nook, not a spaceship console.
  bench(.2,-10.6,5.8,1.5);monitor(-1.5,-10.8,'EXPERIMENT PLANNER');
  box(1.65,1.67,-10.83,1.32,1.34,1.05,porcelain);box(1.65,1.72,-10.29,1.04,1.02,.025,glass);
  for(const y of [1.29,1.61,1.93])box(1.65,y,-10.61,.98,.027,.63,steel);
  for(const x of [1.37,1.9])for(const y of [1.35,1.67,1.99]){cylinder(x,y,-10.55,.14,.06,ivory);cylinder(x,y+.04,-10.55,.13,.02,sage);}
  box(2.35,1.8,-10.25,.04,.38,.05,steel);
  label('03   EXPERIMENT DESIGN',.2,2.65,-11.4,5.65,.32);
  // Rear feature graphic and material sample panels.
  label('LAB ENVIRONMENT',.15,3.82,-13.32,7.4,.8,'#f1ecdf','#3e5c59');
  label('A WORKING LAB. A SHARED UNDERSTANDING.',.15,3.22,-13.31,7.4,.24,'#f1ecdf','#84958c');
  for(let i=0;i<5;i++)box(-2.2+i*1.12,2.68,-13.29,.85,.06,.02,i%2?sage:wood);
  // A notebook desk near the entrance, visibly different from the wet lab.
  bench(-7.3,5.4,4.8,1.45);monitor(-8.6,5.18,'SHARED NOTEBOOK');
  const notebook=box(-6.9,1.005,5.65,.56,.035,.42,darkWood);notebook.rotation.y=.15;
  const sheet=box(-6.9,1.029,5.65,.52,.014,.38,paper);sheet.rotation.y=.15;
  cylinder(-5.65,1.13,5.25,.075,.27,ivory);box(-5.65,1.31,5.25,.015,.2,.015,wood);
  label('04   SHARED RESEARCH',-7.3,.65,6.145,3.7,.22,'#fafaf6','#425859');
  // Tall storage, sink, and wall details.
  for(const z of [-9.9,-7.9,-5.9]){box(10.75,1.22,z,1.4,2.4,1.5,porcelain);box(10.02,1.22,z,.035,2.18,1.35,cabinetry);box(9.98,1.35,z+.42,.035,.43,.035,steel);collider(10.75,z,1.5,1.6);}
  label('SAMPLE STORAGE',10.0,2.7,-7.9,3.6,.26,'#f1ecdf','#667d74',-Math.PI/2);
  bench(9.3,7.2,3.7,1.35);box(9.5,.99,7.1,.8,.025,.6,steel);box(9.5,1.008,7.1,.63,.015,.46,charcoal);
  line(new THREE.Vector3(9.5,1.0,6.8),new THREE.Vector3(9.5,1.5,6.8),.025,steel);line(new THREE.Vector3(9.5,1.5,6.8),new THREE.Vector3(9.5,1.5,7.05),.025,steel);
  label('WASH / RESET',9.3,.65,7.89,2.9,.22,'#fafaf6','#425859');
  // Steel stools, with soft sage upholstery.
  for(const [x,z] of [[-7.8,-2.8],[3.7,-.5],[-7.5,7.3]]){
    cylinder(x,.66,z,.32,.12,sage);cylinder(x,.34,z,.045,.56,steel);
    for(let i=0;i<4;i++){const a=i*Math.PI/2;line(new THREE.Vector3(x,.12,z),new THREE.Vector3(x+Math.cos(a)*.37,.08,z+Math.sin(a)*.37),.025,steel);}
    collider(x,z,.7,.7);
  }

  // A domain-neutral field table gives live experiments a common spatial home.
  cylinder(0,.13,.5,1.85,.26,darkWood);cylinder(0,.52,.5,1.7,.55,wood);
  cylinder(0,.84,.5,1.84,.1,porcelain);cylinder(0,.9,.5,1.62,.035,charcoal);
  collider(0,.5,3.7,3.7);
  label('RECORDED RESEARCH / AGENT ACTIVITY',0,.64,2.23,2.5,.23,'#f1ecdf','#536b68');
  const field=new THREE.Group();field.position.set(0,.95,.5);scene.add(field);
  const fieldPoints:THREE.Mesh[]=[];
  for(let i=0;i<36;i++) {
    const angle=i*2.39996,r=Math.sqrt(i/36)*1.35;
    const point=sphere(Math.cos(angle)*r,.15+(i%5)*.11,Math.sin(angle)*r,.045+(i%3)*.014,i%4===0?amber:sage,field);
    fieldPoints.push(point);
  }
  for(const x of [-1.45,1.45])for(const z of [-1.1,2.1])cylinder(x,1.03,z,.018,.22,steel);
  // Open ash shelves for datasets, notebooks, and small scientific artifacts.
  const bookColors=[sage,wood,blue,paper,amber];
  for(const x of [-6.2,6.2]) {
    for(const xx of [x-.9,x+.9])box(xx,1.75,-12.7,.1,3.5,.5,wood);
    for(const y of [.25,1.25,2.25,3.25]) {
      box(x,y,-12.7,1.9,.075,.6,wood);
      for(let i=0;i<6;i++)box(x-.7+i*.27,y+.3,-12.7,.17,.5-(i%3)*.06,.32,bookColors[i%5]);
    }
    collider(x,-12.7,2.05,.75);
  }
  label('DATASETS / SHARED KNOWLEDGE',-6.2,3.62,-12.36,2.9,.22);
  label('MODELS / REFERENCE LIBRARY',6.2,3.62,-12.36,2.9,.22);

  // Working agent avatars: cheerful cartoon robots, with hands reaching the tools.
  type Worker={id:string;station:string;head:THREE.Group;arm:THREE.Group;light:THREE.Mesh;group:THREE.Group;sign:THREE.Mesh;path:{x:number;z:number}[];target:string;activity:THREE.Sprite;activityState:string};
  const workers=new Map<string,Worker>();
  function researcher(x:number,z:number,rotation:number,name:string,station:string,id:string){
    const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=rotation;scene.add(g);
    // Six deterministic toy-robot variations, inspired by the supplied happy researcher reference.
    const appearance=robotAppearance(id);
    const shell=mat('#fff7df',.62),joints=mat('#293b42',.8),robotBlue=mat('#1987c1',.48),orange=mat('#f69a3d',.57);
    const outline=new THREE.MeshBasicMaterial({color:'#263b41',side:THREE.BackSide});
    const accent=name.startsWith('B')?sage:name.startsWith('C')?amber:blue;
    const rounded=(x:number,y:number,z:number,w:number,h:number,d:number,m:THREE.Material,parent:THREE.Object3D=g,r=.055)=>{
      const geometry=new RoundedBoxGeometry(w,h,d,3,Math.min(r,w/3,h/3,d/3));const mesh=new THREE.Mesh(geometry,m);mesh.position.set(x,y,z);parent.add(mesh);
      const edge=new THREE.Mesh(geometry,outline);edge.scale.setScalar(1.055);mesh.add(edge);return mesh;
    };
    for(const xx of [-.13,.13]){
      rounded(xx,.42,0,.16,.40,.18,shell);
      const boot=sphere(xx,.19,.055,.12,robotBlue,g);boot.scale.set(.95,.68,1.4);
    }
    rounded(0,.99,0,.54,.61,.35,shell,g,.1);
    rounded(0,.72,0,.57,.13,.37,shell,g,.06);
    box(0,.98,.184,.012,.45,.012,joints,g);
    const lapelL=box(-.105,1.21,.19,.16,.07,.025,shell,g);lapelL.rotation.z=-.55;
    const lapelR=box(.105,1.21,.19,.16,.07,.025,shell,g);lapelR.rotation.z=.55;
    cylinder(0,1.36,0,.09,.12,robotBlue,g);
    const head=new THREE.Group();head.position.set(0,1.64,0);g.add(head);
    if(appearance.head==='round'){const dome=sphere(0,0,0,.265,shell,head);dome.scale.set(1.21,1,.92);const edge=new THREE.Mesh(dome.geometry,outline);edge.scale.setScalar(1.055);dome.add(edge);}
    else rounded(0,0,0,.59,appearance.ears==='compact'?.44:.49,.45,shell,head,appearance.head==='monitor'?.055:.13);
    const monitor=appearance.head==='monitor';
    if(monitor)rounded(0,-.005,.232,.49,.36,.025,joints,head,.06);
    for(const side of [-1,1]){
      const ear=cylinder(side*.335,0,0,.125,.09,robotBlue,head);ear.rotation.z=Math.PI/2;
      const cap=cylinder(side*.389,0,0,appearance.ears==='compact'?.06:.085,.025,orange,head);cap.rotation.z=Math.PI/2;
      if(appearance.ears==='ring'){const outer=new THREE.Mesh(new THREE.TorusGeometry(.125,.012,6,24),joints);outer.rotation.y=Math.PI/2;outer.position.set(side*.385,0,0);head.add(outer);}
    }
    const antennaXs=appearance.antenna==='pair'?[-.17,.17]:[appearance.antenna==='offset-right'?.15:appearance.antenna==='offset-left'?-.16:0];
    for(const ax of antennaXs){line(new THREE.Vector3(ax,.23,0),new THREE.Vector3(ax+(appearance.antenna==='offset-right'?.045:0),.39,0),.018,joints,head);sphere(ax+(appearance.antenna==='offset-right'?.045:0),.40,0,.047,orange,head);}
    const faceCanvas=document.createElement('canvas');faceCanvas.width=256;faceCanvas.height=200;const faceContext=faceCanvas.getContext('2d')!;
    const ink=monitor?'#fff8e4':'#263b41';faceContext.fillStyle=ink;faceContext.strokeStyle=ink;faceContext.lineWidth=12;faceContext.lineCap='round';
    for(const x of [82,174]){faceContext.beginPath();if(appearance.eyes==='happy'){faceContext.arc(x,79,15,Math.PI,Math.PI*2);faceContext.stroke();}else{faceContext.ellipse(x,76,10,17,0,0,Math.PI*2);faceContext.fill();}}
    faceContext.fillStyle='#f29b40';for(const x of [52,204]){faceContext.beginPath();faceContext.ellipse(x,112,13,8,0,0,Math.PI*2);faceContext.fill();}
    faceContext.fillStyle='#263b41';faceContext.beginPath();faceContext.ellipse(128,123,24,28,0,0,Math.PI);faceContext.closePath();faceContext.fill();
    faceContext.fillStyle='#f18540';faceContext.beginPath();faceContext.ellipse(128,137,13,9,0,0,Math.PI*2);faceContext.fill();
    const faceTexture=new THREE.CanvasTexture(faceCanvas);faceTexture.colorSpace=THREE.SRGBColorSpace;
    const faceMaterial=new THREE.MeshBasicMaterial({map:faceTexture,transparent:true,depthWrite:false});const face=new THREE.Mesh(new THREE.PlaneGeometry(.49,.38),faceMaterial);face.position.set(0,-.01,.255);head.add(face);
    const arm=new THREE.Group();arm.position.set(.32,1.22,0);g.add(arm);
    rounded(0,-.12,0,.16,.29,.19,shell,arm,.065);sphere(0,-.28,.07,.085,robotBlue,arm);
    rounded(0,-.29,.16,.13,.12,.20,shell,arm,.05);sphere(0,-.29,.28,.092,robotBlue,arm);
    rounded(-.32,1.04,0,.16,.36,.19,shell,g,.07);sphere(-.32,.84,.06,.09,robotBlue,g);
    // Small interchangeable scientific accessories keep the silhouettes playful.
    if(appearance.prop==='magnifier'){const lens=new THREE.Mesh(new THREE.TorusGeometry(.10,.018,8,24),robotBlue);lens.position.set(.32,1.05,.40);g.add(lens);line(new THREE.Vector3(.32,.96,.40),new THREE.Vector3(.32,.84,.40),.022,joints,g);const glassLens=cylinder(.32,1.05,.40,.084,.008,glass,g);glassLens.rotation.x=Math.PI/2;}
    else if(appearance.prop==='clipboard'){rounded(-.31,.96,.23,.22,.29,.035,orange,g,.025);box(-.31,.97,.253,.17,.22,.008,paper,g);for(let j=0;j<3;j++)box(-.31,.92+j*.05,.261,.11,.012,.005,robotBlue,g);}
    else {cylinder(-.31,.97,.17,.028,.15,robotBlue,g);const flask=new THREE.Mesh(new THREE.ConeGeometry(.078,.15,16),orange);flask.position.set(-.31,.86,.17);g.add(flask);}
    const light=sphere(-.17,1.22,.19,.018,led,g);light.name='agent-status-led';
    const badge=label(name,.12,1.04,.19,.22,.14,'#fff7df','#31434b');scene.remove(badge);g.add(badge);
    box(.12,.93,.19,.20,.045,.015,accent,g);
    const sign=label(name.toUpperCase(),x,2.07,z+.16,.58,.18,'#f4f8fa','#31434b');
    g.userData.ownedMaterials=[shell,joints,robotBlue,orange,outline,faceMaterial,badge.material];g.userData.ownedTextures=[faceTexture,(badge.material as THREE.MeshBasicMaterial).map];
    const activity=new THREE.Sprite(new THREE.SpriteMaterial({transparent:true,depthTest:false}));activity.scale.set(.8,.8,1);scene.add(activity);
    const worker:Worker={id,station,head,arm,light,group:g,sign,path:[],target:'',activity,activityState:''};workers.set(id,worker);return worker;
  }
  // Static architectural boxes are instanced by material, greatly reducing draws.
  const batches=new Map<THREE.Material,THREE.Mesh[]>();
  for(const child of [...scene.children])if(child instanceof THREE.Mesh&&child.geometry===boxGeometry&&!child.userData.overhead&&!Array.isArray(child.material)&&!child.material.transparent){
    const arr=batches.get(child.material)||[];arr.push(child);batches.set(child.material,arr);
  }
  for(const [m,members]of batches){if(members.length<3)continue;const batch=new THREE.InstancedMesh(boxGeometry,m,members.length);members.forEach((mesh,i)=>{mesh.updateMatrix();batch.setMatrixAt(i,mesh.matrix);scene.remove(mesh);});batch.instanceMatrix.needsUpdate=true;batch.computeBoundingSphere();scene.add(batch);}
  const stations=[
    {id:'culture' as const,name:'Culture & microscopy',description:'Inspect samples and run an experiment',position:new THREE.Vector3(-6.9,1.25,-2.1),radius:3.1},
    {id:'analyzer' as const,name:'Analysis station',description:'Review measurements and compare outcomes',position:new THREE.Vector3(4.6,1.25,-.8),radius:3.1},
    {id:'explorer' as const,name:'Experiment design',description:'Explore a different hypothesis',position:new THREE.Vector3(.2,1.25,-8.8),radius:3.1},
    {id:'notebook' as const,name:'Shared research desk',description:'Read what the research agents learned',position:new THREE.Vector3(-6.3,1.25,7.2),radius:3.1},
  ];
  let lastTime=0;
  const bounds={minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05};
  function update(time:number,state:LabState){
    const dt=Math.max(0,Math.min(.05,time-lastTime));lastTime=time;
    field.rotation.y=time*(state.replay||state.running?.025:.006);
    fieldPoints.forEach((p,i)=>{p.visible=i<state.agents.length*4;p.position.y=.15+(i%5)*.11+Math.sin(time*.8+i)*.025;});
    const ids=new Set(state.agents.map(a=>a.id));
    for(const [id,w]of workers)if(!ids.has(id)){
      scene.remove(w.group,w.sign,w.activity);w.activity.material.map?.dispose();w.activity.material.dispose();w.group.traverse(o=>{if(o instanceof THREE.Mesh&&o.geometry!==boxGeometry)o.geometry.dispose();});
      for(const m of w.group.userData.ownedMaterials as THREE.Material[])m.dispose();for(const t of w.group.userData.ownedTextures||[])t?.dispose();
      w.sign.geometry.dispose();const m=w.sign.material as THREE.MeshBasicMaterial;m.map?.dispose();m.dispose();workers.delete(id);
    }
    state.agents.forEach((a,index)=>{
      let w=workers.get(a.id);
      if(!w)w=researcher(a.position?.x??(index%3-1)*.6,a.position?.z??10.4+Math.floor(index/3)*.4,0,a.name,a.stationId,a.id);
      const slot=a.id.startsWith('worker-')?Number(a.id.match(/\d+$/)?.[0]||1)-1:index%4;
      const goal=a.stationId==='culture'?{x:-9+slot*.85,z:-3.45}:a.stationId==='analyzer'?{x:5.5,z:-1.15}:a.stationId==='notebook'?{x:-6.3,z:6.8}:{x:-.9+slot*.55,z:-9.25};
      const target=`${a.stationId}:${slot}`;
      if(w.target!==target){w.target=target;w.station=a.stationId;w.path=findPath(w.group.position,goal,bounds,colliders);}
      if(a.position){w.group.position.set(a.position.x,0,a.position.z);w.path=[];}
      const next=w.path[0];
      if(next){const dx=next.x-w.group.position.x,dz=next.z-w.group.position.z,d=Math.hypot(dx,dz);if(d<.07)w.path.shift();else{const speed=Math.min(d,dt*1.8);w.group.position.x+=dx/d*speed;w.group.position.z+=dz/d*speed;w.group.rotation.y=Math.atan2(dx,dz);}}
      else w.group.rotation.y=state.replay&&time===0?0:a.position?.heading??0;
      w.sign.position.set(w.group.position.x,2.28,w.group.position.z);w.sign.lookAt(camera.position);
      w.activity.position.set(w.group.position.x,2.85,w.group.position.z);
      w.activity.visible=a.state!=='idle';
      if(w.activityState!==a.state){w.activityState=a.state;const canvas=document.createElement('canvas');canvas.width=128;canvas.height=128;const ctx=canvas.getContext('2d')!;ctx.font='80px sans-serif';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(a.state==='thinking'?'💡':a.state==='working'?'🫧':'📈',64,64);w.activity.material.map?.dispose();w.activity.material.map=new THREE.CanvasTexture(canvas);w.activity.material.needsUpdate=true;}
      const working=(state.replay||state.running)&&(a.state==='working'||a.state==='thinking');
      w.arm.rotation.x=next||a.position?.moving?Math.sin(time*5+index)*.12:working?Math.sin(time*1.8+index)*.08:0;
      w.head.rotation.y=Math.sin(time*.32+index)*.055;w.head.rotation.x=working&&!next?.12:0;
      w.light.scale.setScalar(working?1+Math.sin(time*2)*.12:1);
    });
  }

  return {scene,camera,colliders,stations,bounds:{minX:-11.15,maxX:11.15,minZ:-12.8,maxZ:12.05},update,setOverview:(_overview:boolean)=>{roof.visible=true;},agentPositions:()=>[...workers.values()].map(w=>({id:w.id,position:w.group.position.clone()})),exposure:1.0};
}
