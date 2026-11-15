import * as THREE from 'three';
import './style.css';
import { createWorld as realistic } from './variants/realistic';
import { createWorld as cartoon } from './variants/cartoon';
import { createWorld as foundation } from './variants/foundation';
import { createWorld as hybrid } from './variants/hybrid';
import { DemoAdapter, demoManifest } from './engine/mock';
import { ResearchEventSchema, type ResearchEvent } from './engine/contract';
import { initialState, reduceEvent, type ResearchState } from './engine/state';
import type { LabWorld, Station, StationId } from './engine/types';
const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const consoleDialog=$<HTMLDialogElement>('console'), guide=$<HTMLDialogElement>('guide');
const styles={
  realistic:{factory:realistic,name:'Daylight',label:'REALISTIC LAB',description:'A contemporary working laboratory.\nDaylight, glass, and material detail.',notes:'A grounded, contemporary lab with daylight windows, wet-lab instruments, human research agents, and carefully proportioned work surfaces. Best when the experience should feel close to a real facility.'},
  cartoon:{factory:cartoon,name:'Wonderworks',label:'CARTOON LAB',description:'Big ideas. A little delightful chaos.\nA lab with personality.',notes:'A cobalt, coral, and yellow idea factory with rounded equipment and expressive robot researchers. Best when character and immediate visual storytelling are the priority.'},
  foundation:{factory:foundation,name:'Fieldwork',label:'MODULAR FOUNDATION',description:'A warm precision workshop.\nBuilt for the next experiment.',notes:'An architectural research commons with ash, ivory, and ink accents. Modular bays give each agent and experiment a clear home. An alternative foundation for multiple scientific domains and an expanding agent team.'},
  hybrid:{factory:hybrid,name:'Lab Environment',label:'DAYLIGHT × FIELDWORK',description:'Real instruments. Warm architecture.\nA shared home for research agents.',notes:'A blend of studies 01 and 03: contemporary scientific equipment, human researchers, continuous terrazzo flooring, a clean plaster ceiling, modular work bays, a shared field table, and a dataset library.'},
};
type StyleId=keyof typeof styles;
let world:LabWorld, renderer:THREE.WebGLRenderer, currentStyle:StyleId='hybrid';
let state:ResearchState=initialState(), entered=false, near:Station|null=null;
let yaw=0,pitch=0,drag=false,lastPointer:{x:number;y:number}|null=null;
let toastTimer:ReturnType<typeof setTimeout>, panel:'research'|'notes'|StationId='research';
const pressed=new Set<string>(), events:ResearchEvent[]=[];
const adapter=new DemoAdapter();
function toast(text:string){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,4200);}
function unlock(){if(document.pointerLockElement)document.exitPointerLock();pressed.clear();}
function lock(){if(!entered||consoleDialog.open||guide.open)return;try{renderer.domElement.requestPointerLock?.()?.catch(()=>{});}catch{/* Drag/arrow fallback. */}}
function renderHUD(){
  $('agent-list').innerHTML=state.agents.map(a=>`<div class="agent-row" data-active="${a.state!=='idle'}"><div class="agent-avatar">${a.name.slice(0,1)}</div><div><strong>${a.name} <span style="color:#879da5;font-size:8px">/ ${a.role}</span></strong><small>${a.state==='idle'?'Ready at station':a.state==='working'?'Working at station':a.state==='thinking'?'Reviewing hypothesis':'Reviewing results'}</small></div><i></i></div>`).join('');
  $('run-progress').textContent=`${Math.round(state.progress*100).toString().padStart(2,'0')}%`;
  $('progress-fill').style.width=`${state.progress*100}%`;
  $('progress-label').textContent=state.progress===1?'Demonstration complete':state.running?'Experiment in progress':state.progress>0?'Demonstration paused':'Awaiting experiment';
  $('run-demo').innerHTML=state.running?'Ⅱ Pause demonstration':'<span class="play-icon">▶</span> '+(state.progress>0&&state.progress<1?'Restart demonstration':'Run demonstration');
}
adapter.subscribe(raw=>{
  const parsed=ResearchEventSchema.safeParse(raw);if(!parsed.success){toast('An invalid research event was rejected.');return;}
  state=reduceEvent(state,parsed.data);events.push(parsed.data);renderHUD();if(consoleDialog.open)renderPanel();
  if(raw.type==='finding.written'&&raw.payload.role==='Explorer')toast('Explorer changed direction using a shared finding.');
});
function toggleRun(){if(state.running){adapter.pause();state={...state,running:false};renderHUD();if(consoleDialog.open)renderPanel();}else adapter.start(demoManifest);}
function exportEvents(){const url=URL.createObjectURL(new Blob([JSON.stringify({engine:'biolab-v0.3',adapter:'synthetic-demo',style:currentStyle,manifest:demoManifest,events,state},null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`biolab-${currentStyle}-run.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);}
function escapeText(value:string){return value.replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));}
function renderPanel(){
  $('console-tag').textContent=panel==='notes'?'DESIGN STUDY / '+styles[currentStyle].label:'RESEARCH / '+(panel==='research'?'CONSOLE':panel.toUpperCase());
  let html='';
  if(panel==='notes'){
    html=`<h2>${styles[currentStyle].name}</h2><p>${styles[currentStyle].notes}</p><h3>One common engine</h3><p>All four studies share first-person controls, collision handling, station interactions, validated research events, and the same demo adapter. Switching rooms preserves research state.</p><p class="callout">Choose the environment you want to develop further. Each has a continuous floor surface, accessible station fronts, and embodied researchers working at the benches.</p>`;
  }else{
    const station=world.stations.find(s=>s.id===panel);
    html=`<h2>${station?.name||'The next experiment'}</h2><p>${panel==='notebook'?'A shared record of hypotheses, observations, and changes in direction.':panel==='analyzer'?'Inspect measurements with their original units and improvement direction.':panel==='explorer'?'Observe how repetition and stalled progress change the next research decision.':'Run the same synthetic demonstration in any environment. Every room is connected through a shared research interface.'}</p>`;
    html+=`<div class="stat-grid"><div><label>PROGRESS</label><b>${Math.round(state.progress*100)}%</b></div><div><label>BOREDOM</label><b>${state.boredom}%</b></div><div><label>BEST SCORE</label><b>${state.value===null?'—':state.value.toFixed(3)}</b></div></div>`;
    html+=`<div class="artifact">Experiment: ${state.experiment?.title||demoManifest.title}</div><div class="artifact">Domain: ${demoManifest.domain} · Metric: ${demoManifest.metric.name} · Higher is better</div>`;
    if(panel==='culture'||panel==='research')html+='<p>Scientific adapters can supply parameter controls, concentration fields, cell snapshots, plots, or dataset artifacts. This demonstration exercises the event connection using the existing synthetic search model.</p>';
    html+='<h3>Shared findings</h3>'+(state.findings.length?state.findings.slice().reverse().map(f=>`<div class="finding"><b>${escapeText(f.role)}</b><span>${escapeText(f.message)}</span></div>`).join(''):'<p>No observations yet. Start a demonstration to see researchers at work.</p>');
    html+=`<div class="console-actions"><button data-action="run">${state.running?'Pause demonstration':state.progress>0?'Restart demonstration':'Start demonstration'}</button><button data-action="export" class="secondary">Export event log ↓</button></div><p class="callout">SYNTHETIC DEMO · The alternate search region is predefined. These scores illustrate integration and are not biological measurements. NPC activity represents simulated research roles.</p>`;
  }
  $('console-content').innerHTML=html;
}
function openPanel(which:typeof panel){unlock();panel=which;renderPanel();if(!consoleDialog.open)consoleDialog.showModal();}
function disposeWorld(old:LabWorld){if(old.dispose){old.dispose();old.scene.clear();return;}const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),textures=new Set<THREE.Texture>();old.scene.traverse(o=>{const m=o as THREE.Mesh;if(m.geometry)geometries.add(m.geometry);if(m.material)for(const mat of Array.isArray(m.material)?m.material:[m.material]){materials.add(mat);for(const value of Object.values(mat))if(value instanceof THREE.Texture)textures.add(value);}});textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());old.scene.clear();}
function switchStyle(id:StyleId){
  unlock();near=null;$('proximity').hidden=true;
  const next=styles[id].factory();if(world)disposeWorld(world);world=next;currentStyle=id;
  world.camera.aspect=innerWidth/innerHeight;world.camera.updateProjectionMatrix();world.camera.rotation.order='YXZ';
  const euler=new THREE.Euler().setFromQuaternion(world.camera.quaternion,'YXZ');yaw=euler.y;pitch=euler.x;
  renderer.toneMappingExposure=world.exposure??1;
  document.title=`${styles[id].name} / BioLab`;$('style-name').textContent=styles[id].name;$('style-description').innerHTML=styles[id].description.replace('\n','<br>');
  $('style-index').textContent=`STUDY ${Object.keys(styles).indexOf(id)+1<10?'0':''}${Object.keys(styles).indexOf(id)+1} / ${styles[id].label}`;
  document.querySelectorAll<HTMLElement>('[data-style]').forEach(b=>{b.classList.toggle('active',b.dataset.style===id);b.setAttribute('aria-pressed',String(b.dataset.style===id));});
  const url=new URL(location.href);url.searchParams.set('style',id);history.replaceState(null,'',url);
  if(consoleDialog.open)renderPanel();
}
function blocked(x:number,z:number){const r=.34,b=world.bounds;if(x<b.minX+r||x>b.maxX-r||z<b.minZ+r||z>b.maxZ-r)return true;return world.colliders.some(c=>x>c.minX-r&&x<c.maxX+r&&z>c.minZ-r&&z<c.maxZ+r);}
function faceStation(id:StationId){const s=world.stations.find(s=>s.id===id);if(!s)return;yaw=Math.atan2(-(s.position.x-world.camera.position.x),-(s.position.z-world.camera.position.z));pitch=0;toast(`Facing ${s.name}. Walk closer and press E.`);}
$('enter').onclick=()=>{entered=true;$('entry').hidden=true;$('crosshair').hidden=false;document.body.classList.add('playing');lock();};
$('open-guide').onclick=()=>{unlock();guide.showModal();};$('close-guide').onclick=()=>guide.close();
$('open-notes').onclick=()=>openPanel('notes');$('open-console').onclick=()=>openPanel('research');$('close-console').onclick=()=>consoleDialog.close();
$('run-demo').onclick=toggleRun;$('station-interact').onclick=()=>{if(near)openPanel(near.id);};
$('console-content').onclick=e=>{const action=(e.target as HTMLElement).closest<HTMLElement>('[data-action]')?.dataset.action;if(action==='run')toggleRun();if(action==='export')exportEvents();};
for(const b of document.querySelectorAll<HTMLElement>('[data-style]'))b.onclick=()=>switchStyle(b.dataset.style as StyleId);
for(const b of document.querySelectorAll<HTMLElement>('[data-move]')){b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);pressed.add(b.dataset.move!);});for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,()=>pressed.delete(b.dataset.move!));}
window.addEventListener('keydown',e=>{if(consoleDialog.open||guide.open||!entered)return;if(['KeyW','KeyA','KeyS','KeyD','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Space'].includes(e.code))e.preventDefault();pressed.add(e.code);if(e.repeat)return;if(e.code==='KeyE'){if(near)openPanel(near.id);else toast('Approach a station, or use 1–4 to face one.');}if(/^Digit[1-4]$/.test(e.code))faceStation((['culture','analyzer','explorer','notebook'] as StationId[])[Number(e.code.slice(-1))-1]);});
window.addEventListener('keyup',e=>pressed.delete(e.code));window.addEventListener('blur',()=>{pressed.clear();drag=false;});
try{
  renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=false;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.outputColorSpace=THREE.SRGBColorSpace;
  $('world').appendChild(renderer.domElement);renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Laboratory viewport: WASD to move, arrow keys to look, E to interact');
  const requested=new URLSearchParams(location.search).get('style');switchStyle(requested&&requested in styles?requested as StyleId:'hybrid');
  renderer.domElement.addEventListener('click',()=>lock());
  renderer.domElement.addEventListener('pointerdown',e=>{if(!entered||document.pointerLockElement)return;drag=true;lastPointer={x:e.clientX,y:e.clientY};renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(!drag||!lastPointer||document.pointerLockElement)return;yaw-=(e.clientX-lastPointer.x)*.003;pitch=THREE.MathUtils.clamp(pitch-(e.clientY-lastPointer.y)*.003,-1.2,1.2);lastPointer={x:e.clientX,y:e.clientY};});
  for(const type of ['pointerup','pointercancel'])renderer.domElement.addEventListener(type,()=>{drag=false;lastPointer=null;});
  document.addEventListener('mousemove',e=>{if(document.pointerLockElement===renderer.domElement&&entered&&!consoleDialog.open&&!guide.open){yaw-=e.movementX*.0022;pitch=THREE.MathUtils.clamp(pitch-e.movementY*.0022,-1.2,1.2);}});
  window.addEventListener('resize',()=>{world.camera.aspect=innerWidth/innerHeight;world.camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
  let previous=performance.now(),time=0,proximityTime=0;const direction=new THREE.Vector3();
  function frame(){requestAnimationFrame(frame);const now=performance.now(),dt=Math.min((now-previous)/1000,.05);previous=now;time+=dt;proximityTime+=dt;
    const camera=world.camera,modal=consoleDialog.open||guide.open;
    if(entered&&!modal){if(pressed.has('ArrowLeft'))yaw+=dt*1.5;if(pressed.has('ArrowRight'))yaw-=dt*1.5;if(pressed.has('ArrowUp'))pitch=Math.min(1.2,pitch+dt);if(pressed.has('ArrowDown'))pitch=Math.max(-1.2,pitch-dt);
      const forward=Number(pressed.has('KeyW'))-Number(pressed.has('KeyS')),side=Number(pressed.has('KeyD'))-Number(pressed.has('KeyA'));
      if(forward||side){const speed=(pressed.has('ShiftLeft')?5.6:3.5)*dt/Math.hypot(forward,side),dx=(-Math.sin(yaw)*forward+Math.cos(yaw)*side)*speed,dz=(-Math.cos(yaw)*forward-Math.sin(yaw)*side)*speed;if(!blocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;if(!blocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;}
    }
    camera.rotation.set(pitch,yaw,0,'YXZ');world.update(time,state);
    if(proximityTime>.12){proximityTime=0;near=null;let closest=Infinity;camera.getWorldDirection(direction);direction.y=0;direction.normalize();
      for(const station of world.stations){const delta=station.position.clone().sub(camera.position);delta.y=0;const distance=delta.length();if(distance<station.radius&&distance<closest&&delta.normalize().dot(direction)>.05){near=station;closest=distance;}}
      $('proximity').hidden=!near||!entered||modal;if(near){$('station-name').textContent=near.name;$('station-description').textContent=near.description;}
    }
    renderer.render(world.scene,camera);
  }
  renderHUD();frame();$('loading').hidden=true;
}catch(error){console.error(error);$('loading').innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL. Enable hardware acceleration and refresh, or try a supported desktop browser.</p></div>';}
