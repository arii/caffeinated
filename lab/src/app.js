import * as THREE from 'three';
import { createWorld } from './world.js';
import { createRun, step, exportExperiment } from './simulation.js';
const $ = id => document.getElementById(id);
let run = createRun(), baseline = createRun({ boredom:false });
let auto = null, started = false, near = null, selectedStation = 'culture', toastTimer;
const keys = new Set();
const terminal = $('terminal'), guide = $('help-dialog');
let world, renderer, camera, yaw = 0, pitch = 0, drag = false, lastPointer = null;
function toast(message) { $('toast').textContent = message; $('toast').hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(()=>$('toast').hidden=true,4200); }
function unlock() { if (document.pointerLockElement) document.exitPointerLock(); keys.clear(); }
function lock() {
  if (!started || terminal.open || guide.open) return;
  try { renderer.domElement.requestPointerLock?.()?.catch(()=>{}); } catch { /* Drag and arrow controls remain available. */ }
}
function advance() {
  if (run.finished) return;
  step(run); step(baseline);
  const last = run.experiments.at(-1);
  if (last.pivot) toast('NEW HYPOTHESIS · Explorer used the Analyst’s finding to change direction.');
  if (run.finished) { clearInterval(auto); auto=null; toast('RESEARCH COMPLETE · Curiosity found a new growth region. Open the notebook to inspect your run.'); }
  updateHUD(); if (terminal.open) renderTerminal(terminal.dataset.station);
}
function toggleAuto() {
  if (auto) { clearInterval(auto); auto=null; }
  else if (!run.finished) { advance(); if (!run.finished) auto=setInterval(advance,1600); }
  if (terminal.open) renderTerminal(terminal.dataset.station);
}
function reset() {
  clearInterval(auto); auto=null; run=createRun(); baseline=createRun({boredom:false});
  updateHUD(); if(terminal.open) renderTerminal(terminal.dataset.station); toast('Fresh culture prepared. Seed 42 · 24 experiments.');
}
function exportRun() {
  const url=URL.createObjectURL(new Blob([JSON.stringify(exportExperiment(run,baseline),null,2)],{type:'application/json'}));
  const a=document.createElement('a'); a.href=url; a.download='biolab-seed-42.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}
function chart() {
  const x=i=>28+i/run.budget*540, y=v=>140-v*120;
  const path=arm=>arm.experiments.map((e,i)=>`${i?'L':'M'}${x(e.id)},${y(e.best)}`).join(' ');
  const grid=[0,.25,.5,.75,1].map(v=>`<line x1="28" x2="568" y1="${y(v)}" y2="${y(v)}" stroke="#b9dab51b" stroke-dasharray="3 4"/><text x="18" y="${y(v)+3}" text-anchor="end" fill="#90b39c" font-size="8">${v}</text>`).join('');
  const pivot=run.experiments.find(e=>e.pivot);
  return `<div class="chart-legend"><span>Curiosity ${run.best.toFixed(3)}</span><span>Baseline ${baseline.best.toFixed(3)}</span></div><div class="terminal-chart"><svg viewBox="0 0 580 160" role="img" aria-label="Best synthetic growth: curiosity ${run.best.toFixed(3)}, baseline ${baseline.best.toFixed(3)}">${grid}${pivot?`<line x1="${x(pivot.id)}" x2="${x(pivot.id)}" y1="18" y2="140" stroke="#d5bb81" stroke-dasharray="3 4"/>`:''}<path d="${path(baseline)}" fill="none" stroke="#749b96" stroke-width="2" stroke-dasharray="5 4"/><path d="${path(run)}" fill="none" stroke="#c0e9a8" stroke-width="2.5"/><text x="28" y="156" fill="#90b39c" font-size="7">EXPERIMENT 1</text><text x="568" y="156" fill="#90b39c" text-anchor="end" font-size="7">24</text></svg></div>`;
}
const titles={culture:'Buddy’s grow station',analyzer:'The Analyst’s bench',explorer:'Curiosity engine',notebook:'Shared research memory'};
function stats() {
  return `<div class="terminal-stats"><div class="terminal-stat"><label>BEST GROWTH</label><strong>${run.best.toFixed(3)}</strong></div><div class="terminal-stat"><label>BOREDOM</label><strong>${run.meter}<small>%</small></strong></div><div class="terminal-stat"><label>EXPERIMENTS</label><strong>${run.experiments.length}<small> / 24</small></strong></div></div>`;
}
function notebook() {
  return run.memory.length ? run.memory.slice().reverse().map(m=>`<div class="memory-item"><small>EXP ${m.experiment}</small><strong>${m.role}</strong><span>${m.message}</span></div>`).join('') : '<p>The notebook is empty. Run your first experiment in the culture chamber.</p>';
}
function buttons(actions) { return `<div class="terminal-buttons">${actions.map(([action,label,secondary])=>`<button data-action="${action}" class="${secondary?'secondary':''}" ${['step','auto'].includes(action)&&run.finished?'disabled':''}>${label}</button>`).join('')}</div>`; }
function renderTerminal(id) {
  terminal.dataset.station=id; $('terminal-tag').textContent=`GROW CLUB / ${id.toUpperCase()}`;
  let html=`<h2>${titles[id]}</h2>`;
  if(id==='culture') {
    html+='<p>Adjust a synthetic culture’s resources. Each experiment advances both researchers with the same budget. Watch what happens when local refinement gets repetitive.</p>'+stats()+chart();
    html+=buttons([['step','Run one experiment →'],['auto',auto?'Pause research':'Start auto research',true]]);
  } else if(id==='analyzer') {
    const e=run.experiments.at(-1);
    html+=`<p>${run.meter>=65?'Repeated local experiments are yielding little improvement. The boredom signal is high.':e?'The Analyst compares each result with the best score so far, then publishes findings to shared memory.':'No results yet. Visit the culture chamber to begin.'}</p>`+stats()+chart();
    if(e)html+=`<p class="model-note">Latest sample · nutrient ${e.nutrient.toFixed(3)} / oxygen ${e.oxygen.toFixed(3)} · improvement ${e.gain.toFixed(3)} · local repetition ${(e.repetition*100).toFixed(0)}%</p>`;
  } else if(id==='explorer') {
    html+=`<p>${run.pivoted?'The Explorer read the plateau finding and moved the research loop to an unvisited region. The new hypothesis is being refined.':'Curiosity is a signal to explore. When boredom crosses 65, the Explorer reads the shared plateau finding and redirects the next experiment.'}</p>`+stats();
    html+=`<p class="model-note">${run.pivoted?'DIRECTION CHANGED · Alternate resource region unlocked.':'EXPLORATION RULE · 55% repetition + 45% low gain. The next experiment switches regions once the smoothed score reaches 65.'}</p>`+notebook();
    html+=buttons([['step',run.pivoted?'Refine new hypothesis →':'Run next experiment →'],['auto',auto?'Pause research':'Let the lab run',true]]);
  } else {
    html+='<p>A shared trail of hypotheses, observations, and changes in direction. The Explorer reads the Analyst’s finding before switching regions.</p>'+notebook()+chart();
    html+=`<div class="table-scroll"><table><thead><tr><th>EXP</th><th>REGION</th><th>GROWTH</th><th>BOREDOM</th></tr></thead><tbody>${run.experiments.slice().reverse().map(e=>`<tr><td>${e.id}</td><td>${e.pivot?'↗ New hypothesis':e.basin}</td><td>${e.value.toFixed(3)}</td><td>${e.boredom}%</td></tr>`).join('')}</tbody></table></div>`;
    html+=buttons([['export','Export run ↓'],['reset','Reset experiment',true]]);
    html+='<p class="model-note">Seed 42 · Scripted policies on a synthetic two-peak landscape. The alternate region is predefined. This demo does not establish a real scientific result.</p>';
  }
  $('terminal-content').innerHTML=html;
}
function openTerminal(id) {
  unlock(); renderTerminal(id); if(!terminal.open)terminal.showModal();
}
function updateHUD() {
  const count=run.experiments.length;
  $('growth').innerHTML=`${count?run.best.toFixed(3):'—'}<small> / 1.00</small>`;
  $('meter-value').textContent=`${run.meter.toString().padStart(2,'0')}%`; $('meter-fill').style.width=`${run.meter}%`;
  $('meter-fill').style.background=run.meter>=65?'#f0c68a':'#b3dcb0';
  $('baseline-best').textContent=count?baseline.best.toFixed(3):'—';
  $('delta').textContent=count?`+${((run.best-baseline.best)*100).toFixed(1)} POINTS`:'PAIRED RUN';
  $('experiment-count').textContent=`${count} / 24 EXPERIMENTS`;
  $('mission-progress').style.width=`${count/24*100}%`;
  $('mission-state').textContent=run.finished?'COMPLETE':run.pivoted?'NEW DIRECTION':count?'RESEARCH ACTIVE':started?'EXPLORE THE LAB':'AWAITING RESEARCHER';
  $('mission-text').textContent=run.finished?'Breakthrough logged. Compare both runs and export your findings from the notebook.':run.pivoted?'A new question changed the outcome. Refine the alternate hypothesis and compare the baseline.':count?'Keep testing. Repetition builds boredom; curiosity opens a new direction.':started?'Say hello to Pip and Milo! Visit the grow station and press E to help Buddy grow.':'Step inside. Grow a culture, find the plateau, and give curiosity a chance.';
}
function orient(id) {
  const station=world.interactables.find(s=>s.id===id); if(!station)return;
  selectedStation=id; document.querySelectorAll('[data-station]').forEach(b=>b.classList.toggle('selected',b.dataset.station===id));
  const dx=station.position.x-camera.position.x, dz=station.position.z-camera.position.z;
  yaw=Math.atan2(-dx,-dz); pitch=0;
  toast(`Facing ${station.name}. Walk toward the station and press E.`);
}
function interact() { if(near)openTerminal(near.id); else toast('Move closer to a research station. Use 1–4 to face a station.'); }
$('enter').onclick=()=>{started=true;document.body.classList.add('playing');$('entrance').hidden=true;$('crosshair').hidden=false;updateHUD();lock();};
$('notebook').onclick=()=>openTerminal('notebook'); $('help').onclick=()=>{unlock();guide.showModal();};
$('close-help').onclick=()=>guide.close(); $('close-terminal').onclick=()=>terminal.close();
$('interact').onclick=interact;
$('terminal-content').onclick=e=>{const b=e.target.closest('[data-action]'); if(!b)return; ({step:advance,auto:toggleAuto,reset,export:exportRun})[b.dataset.action]?.();};
for(const b of document.querySelectorAll('[data-station]'))b.onclick=()=>{if(!started){toast('Enter the laboratory to explore.');return;}orient(b.dataset.station);};
for(const b of document.querySelectorAll('[data-move]')) {
  b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(b.dataset.move);});
  for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,()=>keys.delete(b.dataset.move));
}
window.addEventListener('keydown',e=>{
  if(terminal.open||guide.open||!started)return;
  if(['KeyW','KeyA','KeyS','KeyD','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Space'].includes(e.code))e.preventDefault();
  keys.add(e.code); if(e.repeat)return;
  if(e.code==='KeyE')interact();
  if(/^Digit[1-4]$/.test(e.code))orient(['culture','analyzer','explorer','notebook'][Number(e.code.slice(-1))-1]);
});
window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{keys.clear();drag=false;});
document.addEventListener('mousemove',e=>{if(document.pointerLockElement===renderer?.domElement&&started&&!terminal.open&&!guide.open){yaw-=e.movementX*.0023;pitch-=e.movementY*.0023;pitch=THREE.MathUtils.clamp(pitch,-1.2,1.2);}});
function blocked(x,z) {
  const bounds=world.bounds||{minX:-15,maxX:15,minZ:-15,maxZ:15}, radius=.35;
  if(x<bounds.minX+radius||x>bounds.maxX-radius||z<bounds.minZ+radius||z>bounds.maxZ-radius)return true;
  return (world.colliders||[]).some(b=>x>b.minX-radius&&x<b.maxX+radius&&z>b.minZ-radius&&z<b.maxZ+radius);
}
try {
  world=createWorld(THREE);camera=world.camera;
  renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);
  renderer.shadowMap.enabled=false;renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  $('world').appendChild(renderer.domElement);
  camera.rotation.order='YXZ'; const initial=new THREE.Euler().setFromQuaternion(camera.quaternion,'YXZ');yaw=initial.y;pitch=initial.x;
  renderer.domElement.addEventListener('click',()=>{if(!drag)lock();});
  renderer.domElement.addEventListener('pointerdown',e=>{if(!started||document.pointerLockElement)return;drag=true;lastPointer={x:e.clientX,y:e.clientY};renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(!drag||!lastPointer||document.pointerLockElement)return; yaw-=(e.clientX-lastPointer.x)*.004; pitch=THREE.MathUtils.clamp(pitch-(e.clientY-lastPointer.y)*.004,-1.2,1.2);lastPointer={x:e.clientX,y:e.clientY};});
  renderer.domElement.addEventListener('pointerup',()=>{drag=false;lastPointer=null;});
  renderer.domElement.addEventListener('pointercancel',()=>{drag=false;lastPointer=null;});
  window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
  // A chunky first-person lab sleeve and sample vial ground the player in the world.
  const hand=new THREE.Group();
  const sleeve=new THREE.Mesh(new THREE.BoxGeometry(.18,.29,.37),new THREE.MeshStandardMaterial({color:0xe4eee4,roughness:.9}));sleeve.position.set(.31,-.37,-.49);sleeve.rotation.x=-.25;hand.add(sleeve);
  const palm=new THREE.Mesh(new THREE.BoxGeometry(.14,.14,.15),new THREE.MeshStandardMaterial({color:0xc99874}));palm.position.set(.31,-.24,-.66);hand.add(palm);
  const vial=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.21,6),new THREE.MeshStandardMaterial({color:0xa0eab5,emissive:0x376e48,emissiveIntensity:.4,metalness:.15,roughness:.25}));vial.position.set(.31,-.19,-.7);hand.add(vial);
  const cap=new THREE.Mesh(new THREE.CylinderGeometry(.052,.052,.045,6),new THREE.MeshStandardMaterial({color:0xf2d38e}));cap.position.set(.31,-.065,-.7);hand.add(cap);camera.add(hand);world.scene.add(camera);
  let previousFrame=performance.now();let elapsed=0, proximityClock=0;
  const direction=new THREE.Vector3();
  function frame() {
    requestAnimationFrame(frame);const now=performance.now();const dt=Math.min((now-previousFrame)/1000,.05);previousFrame=now;elapsed+=dt;proximityClock+=dt;
    const modal=terminal.open||guide.open;
    let moving=false;
    if(started&&!modal){
      if(keys.has('ArrowLeft'))yaw+=dt*1.6;if(keys.has('ArrowRight'))yaw-=dt*1.6;
      if(keys.has('ArrowUp'))pitch=Math.min(1.2,pitch+dt);if(keys.has('ArrowDown'))pitch=Math.max(-1.2,pitch-dt);
      const forward=Number(keys.has('KeyW'))-Number(keys.has('KeyS')), side=Number(keys.has('KeyD'))-Number(keys.has('KeyA'));
      if(forward||side){moving=true;const speed=(keys.has('ShiftLeft')||keys.has('ShiftRight')?5.7:3.6)*dt/Math.hypot(forward,side);
        const dx=(-Math.sin(yaw)*forward+Math.cos(yaw)*side)*speed, dz=(-Math.cos(yaw)*forward-Math.sin(yaw)*side)*speed;
        if(!blocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;
        if(!blocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;
      }
    }
    camera.rotation.set(pitch,yaw,0,'YXZ');hand.visible=started&&!modal;hand.position.y=moving?Math.sin(elapsed*10)*.012:Math.sin(elapsed*1.6)*.004;
    world.update(elapsed,run.experiments.at(-1)?.value||.2,run.meter);
    if(proximityClock>.12){proximityClock=0;near=null;let distance=Infinity;camera.getWorldDirection(direction);
      for(const station of world.interactables){const delta=station.position.clone().sub(camera.position);delta.y=0;const d=delta.length();const dot=delta.clone().normalize().dot(new THREE.Vector3(direction.x,0,direction.z).normalize());if(d<(station.radius||3.8)&&d<distance&&dot>.1){near=station;distance=d;}}
      $('station-label').hidden=!near||!started||modal;
      if(near){$('station-name').textContent=near.name;$('station-type').textContent=near.description||'RESEARCH STATION';}
    }
    renderer.render(world.scene,camera);
  }
  frame();$('loading').hidden=true;updateHUD();
} catch(error) {
  console.error(error);$('loading').hidden=true;
  const el=document.createElement('div');el.className='error-card';el.innerHTML='<h2>The lab could not start.</h2><p>This world needs WebGL. Try opening it in a browser with hardware acceleration enabled, then refresh.</p>';document.body.appendChild(el);
}
