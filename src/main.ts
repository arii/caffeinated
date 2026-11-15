import * as THREE from 'three';
import './style.css';
import {createWorld} from './variants/lab';
import {ResearchClient,request} from './engine/api';
import {acceptSnapshot} from './engine/state';
import {boredomColor,boredomPercent} from './engine/boredom';
import type {RunSnapshot,RunConfig,Capabilities} from './engine/contract';
import type {LabWorld,Station,StationId} from './engine/types';
const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const consoleDialog=$<HTMLDialogElement>('console'),configure=$<HTMLDialogElement>('configure'),guide=$<HTMLDialogElement>('guide');
let world:LabWorld,renderer:THREE.WebGLRenderer,snapshot:RunSnapshot|null=null,capabilities:Capabilities|null=null;
let connected=false,entered=false,near:Station|null=null,panel:StationId|'research'='research';
let yaw=0,pitch=0,drag=false,lastPointer:{x:number;y:number}|null=null,toastTimer:ReturnType<typeof setTimeout>;
const pressed=new Set<string>(),active=new Set(['queued','starting','running','stopping']);
const esc=(value:unknown)=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
function toast(text:string){$('toast').textContent=text;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,4500);}
function unlock(){if(document.pointerLockElement)document.exitPointerLock();pressed.clear();}
function modal(){return consoleDialog.open||guide.open||configure.open;}
function lock(){if(!entered||modal())return;try{renderer.domElement.requestPointerLock?.()?.catch(()=>{});}catch{}}
const client=new ResearchClient(s=>{
  const previous=snapshot;snapshot=acceptSnapshot(snapshot,s);renderHUD();if(consoleDialog.open)renderPanel();
  if(previous?.runId===s.runId&&previous.status!==s.status&&!active.has(s.status))toast(`Run ${s.status}${s.error?': '+s.error:''}`);
},value=>{connected=value;renderHUD();});
function renderHUD(){
  $('connection').innerHTML=`<i class="${connected?'online':''}"></i> ${connected?'BACKEND CONNECTED':'BACKEND OFFLINE'}`;
  const s=snapshot;
  $('agent-count').textContent=`${s?.agents.length||0} AGENTS`;
  $('agent-list').innerHTML=s?.agents.length?s.agents.map(a=>`<button class="agent-row" data-agent="${esc(a.id)}" data-active="${a.state==='thinking'||a.state==='working'}"><span class="agent-avatar">${esc(a.name.slice(0,1))}</span><span><strong>${esc(a.name)}</strong><small>${esc(a.role)} · ${esc(a.state)}</small></span><i></i></button>`).join(''):'<p class="empty">Start a run to bring the research team into the lab.</p>';
  const boredom=s?boredomPercent(s.boredom):null;
  $('boredom-value').textContent=boredom==null?'—':`${Math.round(boredom)}%`;
  $('boredom-value').style.color=boredom==null?'':boredomColor(boredom);
  $('boredom-marker').hidden=boredom==null;$('boredom-marker').style.left=`${boredom||0}%`;
  $('boredom-spectrum').setAttribute('aria-valuetext',boredom==null?'No run selected':`${Math.round(boredom)} percent · ${s!.regime.replaceAll('_',' ').toLowerCase()}`);
  if(boredom!=null)$('boredom-spectrum').setAttribute('aria-valuenow',String(boredom));else $('boredom-spectrum').removeAttribute('aria-valuenow');
  $('boredom-regime').textContent=s?s.regime.replaceAll('_',' '):'Waiting for a run';
  $('run-progress').textContent=s?`${Math.round(s.progress*100)}%`:'—';$('progress-fill').style.width=`${(s?.progress||0)*100}%`;
  $('progress-label').textContent=s?`${s.status} · round ${s.round}/${s.config.rounds}`:'No active run';
  $('metric-name').textContent=s?.metric.name||'Metric';$('metric-value').textContent=s?.value==null?'—':s.value.toFixed(6);
  $('run-label').textContent=s?`${s.config.mode==='offline'?'OFFLINE PROTOCOL':s.provenance.gpu==='fake'?'TINKER / PROTOCOL EVALUATION':'TINKER / MODAL TRAINING'} · ${s.status.toUpperCase()}`:connected?'Connected · ready for research':'Start backend with npm run dev';
  $('provenance').innerHTML=s?`${esc(s.provenance.llm.toUpperCase())} MODEL · ${esc(s.provenance.gpu.toUpperCase())} EVALUATOR<br><span>${esc(s.runId.slice(0,12))} · ${esc(s.sourceCommit.slice(0,7))}</span>`:'LIVE STATE · PERSISTENT HISTORY<br><span>NO RUN STARTS AUTOMATICALLY</span>';
  $<HTMLButtonElement>('new-run').disabled=!connected||!!(s&&active.has(s.status));
}
function renderPanel(){
  const s=snapshot,station=world.stations.find(s=>s.id===panel);
  $('console-tag').textContent=panel==='research'?'RUN OBSERVATORY':`STATION / ${panel.toUpperCase()}`;
  if(!s){$('console-content').innerHTML='<h2>The next question.</h2><p>The lab is waiting for a research run. Start one to follow actual agent assignments, proposals, measurements, and findings.</p><div class="console-actions"><button data-action="new">Configure a run →</button></div>';return;}
  let html=`<h2>${esc(station?.name||'Autoresearch observatory')}</h2><p>${esc(s.config.mode==='offline'?'Offline protocol check: Ari’s real orchestration, with fake LLM and GPU providers.':s.provenance.gpu==='fake'?'Tinker is producing agent reasoning. GPU scores are deterministic protocol fixtures, not training measurements.':'Tinker reasoning and Modal GPU training. Validation bits per byte are lower-is-better.')}</p>`;
  html+=`<div class="stat-grid"><div><label>STATUS / ROUND ${s.round}</label><b class="status-value">${esc(s.status)}</b></div><div><label>BOREDOM / ${esc(s.regime)}</label><b>${s.boredom.toFixed(0)}%</b></div><div><label>${esc(s.metric.name.toUpperCase())} ↓</label><b>${s.value==null?'—':s.value.toFixed(6)}</b></div></div>`;
  html+=`<div class="console-spectrum"><div class="boredom-spectrum" role="meter" aria-label="Swarm boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${boredomPercent(s.boredom)}"><i style="left:${boredomPercent(s.boredom)}%"></i></div><div class="spectrum-legend"><span>0 · Engaged</span><span>100 · Repetitive</span></div><p>Color shows the backend’s boredom score. The current regime comes from the runner’s scheduling rules.</p></div>`;
  if(s.error)html+=`<p class="error-text">${esc(s.error)}</p>`;
  if(panel==='analyzer'||panel==='culture'||panel==='research'){
    html+='<h3>Experiment ledger</h3><div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th>VALUE</th><th>CHANGE</th></tr></thead><tbody>';
    html+=s.results.slice().reverse().map(r=>`<tr><td>${r.round}</td><td>${esc(r.agent)}</td><td>${esc(r.kind==='baseline'?'reference baseline':r.status)}</td><td>${r.value==null?'—':r.value.toFixed(6)}</td><td title="${esc(r.commit)}">${esc(r.description)}</td></tr>`).join('');html+='</tbody></table></div>';
  }
  html+='<h3>Research findings & shared memory</h3>'+(s.findings.length?s.findings.slice(-30).reverse().map(f=>`<div class="finding"><b>${esc(f.agent||f.role)}</b><span>${esc(f.message)}</span></div>`).join(''):'<p>No findings recorded yet.</p>');
  if(panel==='explorer'||panel==='notebook')html+='<h3>Research sources</h3>'+(s.sources.length?s.sources.map(source=>`<div class="artifact">${esc(source.id)} · ${esc(source.title)}<br>${esc(source.url)}</div>`).join(''):'<p>Exa is disabled for these bounded local runs. No external sources have been claimed.</p>');
  html+=`<h3>Provenance</h3><div class="artifact">Run ${esc(s.runId)}<br>Source commit ${esc(s.sourceCommit)}<br>Model ${esc(s.config.model||'fake')} · Seed ${s.config.seed} · Arm ${s.config.arm}<br>Metric ${esc(s.metric.name)} (${esc(s.metric.unit)}), ${esc(s.metric.direction)}<br>Exa off · Local memory · No Git pushes</div><div class="console-actions">${active.has(s.status)?'<button class="stop" data-action="stop">Stop run</button>':'<button data-action="new">New run →</button>'}<a href="/api/runs/${s.runId}/export" download="lab-run.json">Export full history ↓</a><button class="secondary" data-action="artifacts">Run artifacts ↗</button></div><div id="artifacts"></div>`;
  $('console-content').innerHTML=html;
}
function openPanel(which:typeof panel){unlock();panel=which;renderPanel();if(!consoleDialog.open)consoleDialog.showModal();}
function modeDescription(){const selected=$<HTMLSelectElement>('mode').value;const mode=capabilities?.modes.find(m=>m.id===selected);$('mode-description').textContent=mode?.description||'Backend unavailable';$<HTMLInputElement>('model').disabled=selected==='offline';}
async function setupRun(){
  unlock();consoleDialog.close();$('run-error').textContent='';
  try{capabilities=await client.health();connected=true;renderHUD();
    $('mode').innerHTML=capabilities.modes.map(m=>`<option value="${m.id}" ${m.available?'':'disabled'}>${esc(m.name)}${m.available?'':' · setup required'}</option>`).join('');
    $<HTMLSelectElement>('mode').value=capabilities.modes.find(m=>m.available)?.id||'offline';
    $<HTMLInputElement>('model').value=capabilities.model;modeDescription();configure.showModal();
  }catch(e){toast((e as Error).message);}
}
async function refreshRuns(attach=false){
  try{const runs=await client.list();$('run-picker').innerHTML='<option value="">Select a run</option>'+runs.map(s=>`<option value="${s.runId}">${s.runId.slice(0,7)} · ${s.config.mode} · ${s.status}</option>`).join('');
    if(snapshot)$<HTMLSelectElement>('run-picker').value=snapshot.runId;
    if(attach&&runs.length){const requested=new URLSearchParams(location.search).get('run');await attachRun(runs.find(s=>s.runId===requested)?.runId||runs.find(s=>active.has(s.status))?.runId||runs[0].runId);}
  }catch{}
}
async function attachRun(id:string){try{await client.attach(id);const url=new URL(location.href);url.search='';url.searchParams.set('run',id);history.replaceState(null,'',url);$<HTMLSelectElement>('run-picker').value=id;}catch(e){toast((e as Error).message);}}
$('run-form').addEventListener('submit',async e=>{e.preventDefault();$<HTMLButtonElement>('submit-run').disabled=true;$('run-error').textContent='';
  const mode=$<HTMLSelectElement>('mode').value as RunConfig['mode'];const model=$<HTMLInputElement>('model').value.trim();
  try{const s=await client.start({mode,arm:$<HTMLSelectElement>('arm').value as 'A'|'B',rounds:Number($<HTMLInputElement>('rounds').value),seed:Number($<HTMLInputElement>('seed').value),...(mode==='offline'||!model?{}:{model})});configure.close();await refreshRuns();await attachRun(s.runId);toast('Research started. The team is joining the lab.');}
  catch(error){$('run-error').textContent=(error as Error).message;}finally{$<HTMLButtonElement>('submit-run').disabled=false;}
});
$('mode').onchange=modeDescription;$('new-run').onclick=setupRun;$('close-configure').onclick=()=>configure.close();
$('open-console').onclick=()=>openPanel('research');$('close-console').onclick=()=>consoleDialog.close();
$('console-content').onclick=async e=>{const action=(e.target as HTMLElement).closest<HTMLElement>('[data-action]')?.dataset.action;
  try{if(action==='new')await setupRun();if(action==='stop'&&snapshot){await client.stop(snapshot.runId);toast('Stop requested.');}if(action==='artifacts'&&snapshot){const artifacts=await request<{id:string;name:string;bytes:number}[]>(`/runs/${snapshot.runId}/artifacts`);$('artifacts').innerHTML=artifacts.map(a=>`<div class="artifact"><a href="/api/runs/${snapshot!.runId}/artifacts/${a.id.split('/').map(encodeURIComponent).join('/')}" download>${esc(a.name)} · ${a.bytes} bytes</a></div>`).join('')||'<p>No artifacts yet.</p>';}}catch(error){toast((error as Error).message);}
};
$('refresh-runs').onclick=()=>refreshRuns();$('run-picker').onchange=()=>{const id=$<HTMLSelectElement>('run-picker').value;if(id)attachRun(id);};
$('open-guide').onclick=()=>{unlock();guide.showModal();};$('close-guide').onclick=()=>guide.close();
$('agent-list').onclick=e=>{const id=(e.target as HTMLElement).closest<HTMLElement>('[data-agent]')?.dataset.agent;const a=snapshot?.agents.find(a=>a.id===id);if(a){faceStation(a.stationId);toast(`${a.name} · ${a.role} · ${a.state}`);}};
function blocked(x:number,z:number){const r=.34,b=world.bounds;if(x<b.minX+r||x>b.maxX-r||z<b.minZ+r||z>b.maxZ-r)return true;return world.colliders.some(c=>x>c.minX-r&&x<c.maxX+r&&z>c.minZ-r&&z<c.maxZ+r);}
function faceStation(id:StationId){const s=world.stations.find(s=>s.id===id);if(!s)return;yaw=Math.atan2(-(s.position.x-world.camera.position.x),-(s.position.z-world.camera.position.z));pitch=0;}
$('enter').onclick=()=>{entered=true;$('entry').hidden=true;$('crosshair').hidden=false;document.body.classList.add('playing');lock();};
$('station-interact').onclick=()=>{if(near)openPanel(near.id);};
for(const b of document.querySelectorAll<HTMLElement>('[data-move]')){b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);pressed.add(b.dataset.move!);});for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,()=>pressed.delete(b.dataset.move!));}
window.addEventListener('keydown',e=>{if(modal()||!entered)return;if(['KeyW','KeyA','KeyS','KeyD','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Space'].includes(e.code))e.preventDefault();pressed.add(e.code);if(e.repeat)return;if(e.code==='KeyE'){if(near)openPanel(near.id);else toast('Approach a station, or use 1–4 to face one.');}if(/^Digit[1-4]$/.test(e.code))faceStation((['culture','analyzer','explorer','notebook'] as StationId[])[Number(e.code.slice(-1))-1]);});
window.addEventListener('keyup',e=>pressed.delete(e.code));window.addEventListener('blur',()=>{pressed.clear();drag=false;});
try{
  world=createWorld();renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);renderer.shadowMap.enabled=false;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=world.exposure??1;renderer.outputColorSpace=THREE.SRGBColorSpace;
  $('world').appendChild(renderer.domElement);renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Laboratory viewport: WASD to move, arrow keys to look, E to interact');
  world.camera.rotation.order='YXZ';const euler=new THREE.Euler().setFromQuaternion(world.camera.quaternion,'YXZ');yaw=euler.y;pitch=euler.x;
  const url=new URL(location.href);url.searchParams.delete('style');history.replaceState(null,'',url);
  renderer.domElement.addEventListener('click',()=>lock());
  renderer.domElement.addEventListener('pointerdown',e=>{if(!entered||document.pointerLockElement)return;drag=true;lastPointer={x:e.clientX,y:e.clientY};renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(!drag||!lastPointer||document.pointerLockElement)return;yaw-=(e.clientX-lastPointer.x)*.003;pitch=THREE.MathUtils.clamp(pitch-(e.clientY-lastPointer.y)*.003,-1.2,1.2);lastPointer={x:e.clientX,y:e.clientY};});
  for(const type of ['pointerup','pointercancel'])renderer.domElement.addEventListener(type,()=>{drag=false;lastPointer=null;});
  document.addEventListener('mousemove',e=>{if(document.pointerLockElement===renderer.domElement&&entered&&!modal()){yaw-=e.movementX*.0022;pitch=THREE.MathUtils.clamp(pitch-e.movementY*.0022,-1.2,1.2);}});
  window.addEventListener('resize',()=>{world.camera.aspect=innerWidth/innerHeight;world.camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
  let previous=performance.now(),time=0,proximityTime=0;const direction=new THREE.Vector3();
  function frame(){requestAnimationFrame(frame);const now=performance.now(),dt=Math.min((now-previous)/1000,.05);previous=now;time+=dt;proximityTime+=dt;const camera=world.camera;
    if(entered&&!modal()){if(pressed.has('ArrowLeft'))yaw+=dt*1.5;if(pressed.has('ArrowRight'))yaw-=dt*1.5;if(pressed.has('ArrowUp'))pitch=Math.min(1.2,pitch+dt);if(pressed.has('ArrowDown'))pitch=Math.max(-1.2,pitch-dt);
      const forward=Number(pressed.has('KeyW'))-Number(pressed.has('KeyS')),side=Number(pressed.has('KeyD'))-Number(pressed.has('KeyA'));
      if(forward||side){const speed=(pressed.has('ShiftLeft')?5.6:3.5)*dt/Math.hypot(forward,side),dx=(-Math.sin(yaw)*forward+Math.cos(yaw)*side)*speed,dz=(-Math.cos(yaw)*forward-Math.sin(yaw)*side)*speed;if(!blocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;if(!blocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;}
    }
    camera.rotation.set(pitch,yaw,0,'YXZ');world.update(time,{progress:snapshot?.progress||0,boredom:snapshot?.boredom||0,running:!!snapshot&&active.has(snapshot.status),agents:snapshot?.agents||[]});
    if(proximityTime>.12){proximityTime=0;near=null;let closest=Infinity;camera.getWorldDirection(direction);direction.y=0;direction.normalize();for(const station of world.stations){const delta=station.position.clone().sub(camera.position);delta.y=0;const distance=delta.length();if(distance<station.radius&&distance<closest&&delta.normalize().dot(direction)>.05){near=station;closest=distance;}}$('proximity').hidden=!near||!entered||modal();if(near){$('station-name').textContent=near.name;$('station-description').textContent=near.description;}}
    renderer.render(world.scene,camera);
  }
  renderHUD();frame();$('loading').hidden=true;
}catch(error){console.error(error);$('loading').innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>';}
let initialized=false;
async function connect(){try{capabilities=await client.health();connected=true;if(!initialized){initialized=true;await refreshRuns(true);}else await refreshRuns();}catch{connected=false;}renderHUD();}
connect();setInterval(connect,5000);window.addEventListener('beforeunload',()=>client.dispose());
