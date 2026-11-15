/** DOM + camera + lighting layer for `?cinema=1`. All state is a pure function of cinema time `t`. */
import * as THREE from 'three';
import {CAPTION_SECONDS,CINEMA_DURATION,CINEMA_PHASES,cinemaPhaseAt,cinemaPlan,cinemaTickAt,cinemaBoredom,boredomTone,replicatedAt,cinemaStepSvg,easeInOutCubic,type CinemaAgent,type CinemaPhase,type CinemaPlan} from './cinema';
import type {Recording} from './replay';
import type {LabWorld} from './types';
import proof from '../../data/pages/cinema.json';
import intro from '../../data/pages/intro.json';

export interface CinemaHost{world:LabWorld;renderer:THREE.WebGLRenderer;recording:Recording;seek(tick:number):void;updateWorld(seconds:number):void}
type Pose={pos:THREE.Vector3;look:THREE.Vector3};
const esc=(v:unknown)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const clip=(s:string,n:number)=>s.length>n?`${s.slice(0,n-1).trimEnd()}…`:s;
const pulse=(dt:number,len:number)=>dt<0?0:dt<.25?dt/.25:Math.exp(-(dt-.25)/len);
const center=new THREE.Vector3(0,.7,-1.4);
const T=Object.fromEntries(CINEMA_PHASES.map(x=>[x.phase,x.start])) as Record<CinemaPhase,number>;

export function createCinema(host:CinemaHost){
 const {world,renderer,recording}=host,camera=world.camera;
 const agents:CinemaAgent[]=(recording.manifest.agents||[]).map(a=>({id:String(a.agent_id),name:String(a.display_name||a.label||''),bored:(a as {founded_because?:string}).founded_because==='bored'}));
 const plan=cinemaPlan(recording.events,agents,recording.manifest.totalTicks);
 if(!plan)return null;
 const p:CinemaPlan=plan,name=(id:string)=>agents.find(a=>a.id===id)?.name||'Lab';
 const timeOf=(tick:number)=>{for(let t=0;t<=CINEMA_DURATION;t+=1/60)if(cinemaTickAt(p,t)>=tick)return t;return CINEMA_DURATION;};
 const snapT=timeOf(p.snapTick),foundedT=timeOf(p.foundedTick),bestT=timeOf(p.discoveries.find(d=>d.agentId===p.breakthroughAgent&&d.tick>p.snapTick)!.tick);
 const discoveryTs=p.discoveries.filter(d=>d.tick>p.snapTick).map(d=>({t:timeOf(d.tick),best:d.agentId===p.breakthroughAgent,agentId:d.agentId}));
 const verdictT=p.verdict?timeOf(p.verdict.tick):CINEMA_DURATION;
 const root=document.createElement('div');root.id='cinema';root.setAttribute('aria-hidden','true');
 const replicatedAfter=p.replicated.filter(t=>t>p.snapTick).length;
 root.innerHTML=`<div class="cin-glow"></div><div class="cin-crimson"></div><svg class="cin-links" viewBox="0 0 1920 1080" preserveAspectRatio="none"></svg><div class="cin-tags"></div>
 <div class="cin-brand"><b>${esc(intro.authors.project)}</b><span>Real run · Ig Nobel task</span></div>
 <div class="cin-telemetry"><div class="cin-meter"><div class="row"><span class="lbl">Boredom</span><b class="val">0.00</b><i class="chip">EXPLOIT</i></div><div class="bar"><span></span><em style="left:70%"></em></div></div>
 <div class="cin-score"><div class="row"><span class="lbl">Replicated findings</span><b class="val">0</b></div><div class="chart"></div></div></div>
 <div class="cin-papers"></div>
 <div class="cin-burst"><b>New best</b><span>Replicated on both halves</span></div>
 <div class="cin-proof"><div class="credit"><b>${esc(intro.authors.project)}</b><span>${intro.authors.names.map(esc).join(' · ')}</span></div><div class="kicker">This run</div><div class="stats">
  <div><b>${Math.max(...p.boredom.map(b=>b.value)).toFixed(2)}</b><span>boredom at snap</span></div>
  <div><b>${p.boredAgents.length}</b><span>labs founded by boredom</span></div>
  <div><b>${replicatedAfter}</b><span>replicated after the snap</span></div>
  <div><b>${p.verdict?1:0}</b><span>${esc(p.verdict?.label||'award candidate')}</span></div></div>
  <div class="kicker">${esc(proof.pilot.title)}</div><div class="pilot">${proof.pilot.rows.map(r=>`<div><span>${esc(r.task)}</span><b>${esc(r.result)}</b></div>`).join('')}</div>
  <p class="note">${esc(proof.pilot.note)}</p><div class="repo">${esc(proof.repo)}</div></div>
 <div class="cin-caption"><span></span></div>`;
 document.body.appendChild(root);
 const q=<T extends Element=HTMLElement>(s:string)=>root.querySelector(s) as T;
 const glowLight=new THREE.PointLight('#ffc451',0,26,1);world.scene.add(glowLight);
 const baseExposure=world.exposure??1;
 const positions=()=>new Map((world.agentPositions?.()||[]).map(a=>[a.id,a.position]));
 const centroid=(ids:string[],at:Map<string,THREE.Vector3>)=>{const pts=ids.map(id=>at.get(id)).filter(Boolean) as THREE.Vector3[];if(!pts.length)return center.clone();return pts.reduce((s,v)=>s.add(v),new THREE.Vector3()).multiplyScalar(1/pts.length);};
 const clampRoom=(v:THREE.Vector3)=>{v.x=THREE.MathUtils.clamp(v.x,-10.6,10.6);v.y=THREE.MathUtils.clamp(v.y,1.2,4.35);v.z=THREE.MathUtils.clamp(v.z,-12,11.4);return v;};
 const orbit=(t:number,radius=10.2,height=4.25):Pose=>{const a=.42-t*.012;return {pos:clampRoom(new THREE.Vector3(center.x+Math.sin(a)*radius,height,center.z+Math.cos(a)*radius)),look:center.clone()};};
 const focusOn=(target:THREE.Vector3,t:number,dist:number,lift:number):Pose=>{const from=orbit(t).pos,dir=from.clone().sub(target);dir.y=0;dir.normalize().applyAxisAngle(new THREE.Vector3(0,1,0),.18);const look=target.clone().add(new THREE.Vector3(0,1.05,0));return {pos:clampRoom(look.clone().add(dir.multiplyScalar(dist)).add(new THREE.Vector3(0,lift,0))),look};};
 const poseFor=(phase:CinemaPhase,t:number,at:Map<string,THREE.Vector3>):Pose=>{
  if(phase==='hook'||phase==='trap')return orbit(t);
  if(phase==='snap'){const ids=t<foundedT+1||!p.boredAgents.length?[p.snapAgent]:p.boredAgents;return focusOn(centroid(ids,at),t,5.2-Math.min(1.2,(t-T.snap)*.06),1.5);}
  if(phase==='breakthrough'){const target=centroid([p.breakthroughAgent],at),near=focusOn(target,t,5.6,2.2),k=easeInOutCubic((t-bestT+.4)/5),back=near.pos.clone().sub(near.look).setY(0).normalize();return {pos:clampRoom(near.pos.clone().add(back.multiplyScalar(k*3.4)).setY(Math.min(3.7,near.pos.y+k*.3))),look:near.look.clone().lerp(center.clone().setY(2),k*.4)};}
  return orbit(t,10.4,4.3);
 };
 const project=(v:THREE.Vector3)=>{const s=v.clone().project(camera);return {x:(s.x+1)/2*1920,y:(1-s.y)/2*1080,visible:s.z<1&&Math.abs(s.x)<1.05&&Math.abs(s.y)<1.05};};
 let lastHtml={papers:'',tags:'',links:'',chart:'',hook:''};
 function render(time:number){
  const t=Math.max(0,Math.min(CINEMA_DURATION,time)),tick=cinemaTickAt(p,t),phase=cinemaPhaseAt(t);
  host.seek(tick);host.updateWorld(t);
  world.scene.traverse(o=>{if((o as THREE.Sprite).isSprite)o.visible=false;});
  const at=positions(),idx=CINEMA_PHASES.findIndex(x=>x.phase===phase.phase),blend=easeInOutCubic((t-phase.start)/2.6);
  let pose=poseFor(phase.phase,t,at);
  if(idx>0&&blend<1){const prev=poseFor(CINEMA_PHASES[idx-1].phase,t,at);pose={pos:prev.pos.lerp(pose.pos,blend),look:prev.look.lerp(pose.look,blend)};}
  camera.position.copy(pose.pos);camera.lookAt(pose.look);camera.updateMatrixWorld();
  const crimson=Math.max(pulse(t-snapT,1.6),phase.phase==='snap'||(phase.phase==='trap'&&t>snapT)?.32:0)*(phase.phase==='breakthrough'?Math.max(0,1-(t-T.breakthrough)/2):1);
  let gold=0;for(const d of discoveryTs)gold=Math.max(gold,pulse(t-d.t,d.best?2.4:1.3)*(d.best?1:.65));
  if(t>bestT&&phase.phase!=='proof')gold=Math.max(gold,.7);if(phase.phase==='proof')gold=Math.max(gold,.7*Math.max(0,1-(t-T.proof)/3));
  const glowAt=centroid([p.breakthroughAgent],at);glowLight.position.set(glowAt.x,3.2,glowAt.z);glowLight.intensity=gold*14;
  renderer.toneMappingExposure=baseExposure*(1+gold*.22-crimson*.12);
  root.style.setProperty('--gold',gold.toFixed(3));root.style.setProperty('--crimson',crimson.toFixed(3));
  root.dataset.phase=phase.phase;
  const b=cinemaBoredom(p,tick),tone=boredomTone(b.shown,b.regime);
  q('.cin-meter').dataset.tone=tone;q('.cin-meter .val').textContent=b.shown.toFixed(2);q('.cin-meter .chip').textContent=b.regime||'EXPLOIT';q<HTMLElement>('.cin-meter .bar span').style.width=`${Math.round(b.shown*100)}%`;
  const count=replicatedAt(p,tick);q('.cin-score .val').textContent=String(count);q('.cin-score').dataset.gold=String(count>p.replicated.filter(r=>r<=p.snapTick).length);
  const chart=cinemaStepSvg(p.replicated,p.startTick,p.endTick,tick,400,118,'Replicated findings');if(chart!==lastHtml.chart){q('.cin-score .chart').innerHTML=chart;lastHtml.chart=chart;}
  const cap=q('.cin-caption'),capIn=Math.min(1,(t-phase.start-.25)/.5),next=CINEMA_PHASES[idx+1],capOut=phase.phase==='proof'?1:Math.min(1,(phase.start+CAPTION_SECONDS-t)/.4,next?(next.start-t-.15)/.4:1);
  cap.style.opacity=String(Math.max(0,Math.min(capIn,capOut)));q('.cin-caption span').textContent=phase.caption;
  const shown=phase.phase==='snap'?p.papers.filter(x=>x.tick<=tick).slice(-3):[];
  const papers=shown.map(x=>`<div class="paper"><i>${esc(x.tool==='seed'?'literature':x.tool)}</i><b>${esc(clip(x.title,54))}</b><span>${esc(name(x.agentId))}</span></div>`).join('');
  if(papers!==lastHtml.papers){q('.cin-papers').innerHTML=papers;lastHtml.papers=papers;}
  const tags:string[]=[],links:string[]=[],placed:{x:number;y:number}[]=[];
  const tag=(id:string,text:string,cls:string)=>{const v=at.get(id);if(!v)return;const s=project(v.clone().add(new THREE.Vector3(0,2.05,0)));if(!s.visible)return;let y=s.y;while(placed.some(o=>Math.abs(o.x-s.x)<300&&Math.abs(o.y-y)<46))y-=48;placed.push({x:s.x,y});tags.push(`<div class="tag ${cls}" style="left:${s.x.toFixed(0)}px;top:${y.toFixed(0)}px">${esc(text)}</div>`);};
  if(t>=snapT-.2&&t<36)tag(p.snapAgent,`${name(p.snapAgent)} · B ${Math.max(...p.boredom.filter(x=>x.agentId===p.snapAgent&&x.tick<=tick).map(x=>x.value),0).toFixed(2)}`,'snap');
  if(t>=foundedT&&t<T.breakthrough)for(const id of p.boredAgents)tag(id,`${name(id)} · new lab`,'founded');
  const bursting=discoveryTs.some(e=>t>=e.t&&t<e.t+3.2);
  for(const d of discoveryTs)if(!bursting&&t>=d.t+3.2&&t<(d.best?T.proof:d.t+4.6)&&phase.phase==='breakthrough')tag(d.agentId,d.best&&t>=verdictT?`${name(d.agentId)} · ${p.verdict?.label}`:`${name(d.agentId)} · replicated`,'gold');
  for(const share of p.shares){const st=timeOf(share.tick);if(t>=st&&t<st+3.2&&phase.phase==='snap'){const others=p.shares.filter(s=>s!==share).map(s=>s.agentId),a=at.get(share.agentId),b2=others.map(id=>at.get(id)).find(Boolean);if(a&&b2){const s1=project(a.clone().add(new THREE.Vector3(0,1.2,0))),s2=project(b2.clone().add(new THREE.Vector3(0,1.2,0)));links.push(`<path class="memory" d="M${s1.x.toFixed(0)} ${s1.y.toFixed(0)} Q${((s1.x+s2.x)/2).toFixed(0)} ${(Math.min(s1.y,s2.y)-120).toFixed(0)} ${s2.x.toFixed(0)} ${s2.y.toFixed(0)}"/>`);if(share===p.shares[0])tags.push(`<div class="tag memory" style="left:${((s1.x+s2.x)/2).toFixed(0)}px;top:${(Math.min(s1.y,s2.y)-80).toFixed(0)}px">shared memory</div>`);}}}
  if(shown.length){const latest=shown.at(-1)!,v=at.get(latest.agentId);if(v){const s=project(v.clone().add(new THREE.Vector3(0,1.3,0)));links.push(`<path class="scout" d="M${s.x.toFixed(0)} ${s.y.toFixed(0)} L470 ${(330+(shown.length-1)*118).toFixed(0)}"/>`);}}
  const tagHtml=tags.join(''),linkHtml=links.join('');
  if(tagHtml!==lastHtml.tags){q('.cin-tags').innerHTML=tagHtml;lastHtml.tags=tagHtml;}
  if(linkHtml!==lastHtml.links){q('.cin-links').innerHTML=linkHtml;lastHtml.links=linkHtml;}
  const burstT=discoveryTs.filter(d=>t>=d.t).at(-1),burst=q('.cin-burst');
  burst.style.opacity=burstT&&phase.phase==='breakthrough'?String(Math.max(0,1-Math.max(0,t-burstT.t-2.6)/.6)):'0';burst.style.setProperty('--k',burstT?String(Math.min(1,(t-burstT.t)/.35)):'0');
  renderer.render(world.scene,camera);
 }
 return {render,plan:p,duration:CINEMA_DURATION};
}
