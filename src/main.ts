document.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const mark=(e.target as Element).closest?.<SVGElement>('[data-orch-tick]');if(mark){e.preventDefault();mark.dispatchEvent(new MouseEvent('click',{bubbles:true}));}});
import * as THREE from 'three';
import {LabCameraRig,mouseLook,keyboardLook} from './engine/labCamera';
import {ideaBrief} from './engine/ideaBrief';
import './style.css';
import './results.css';
import './accessibility.css';
import {createWorld} from './variants/lab';
import {request} from './engine/api';
import {STATIC_SITE,staticPath} from './engine/staticSite';
import {aboutHtml,researchTrail,researchResults,researchCommitteeScores,preCommitteeResultsHtml,type IntroConfig} from './engine/intro';
import introConfig from '../data/pages/intro.json';
import judgingCopy from '../data/pages/judging.json';
import {nextCoach} from './engine/introProgress';
import {initialRecordingId,sortedRecordings,recordingCopy,playbackContinues,recordingChanged,frameAt,advanceTick,eventsThrough,loadRecording,anonymizeExcerpt,type Recording,type RecordingManifest,type ReplayEvent} from './engine/replay';
import {boredomColor,boredomPercent,boredomComponents,regimeLabel,latestBoredom} from './engine/boredom';
import {agentIdentity,humanizeActivity,humanizeRole,eventCaption,eventLabel,teamRoster,meaningfulMessage,agentDescriptor,descriptorText,whosWho} from './engine/agentIdentity';
import {openingTick,reloadTick,following,liveButton,eventsAfter} from './engine/liveFollow';
import {prefersReducedMotion} from './engine/affect';
import {momentsBetween,formatValue,type Moment} from './engine/moments';
import {scoreSeries,scoreChartSvg,outcomeOf,type ResultRow} from './engine/scoreChart';
import {taskTitle,pickerOptions,compactDock,evidenceMetricLabel,metricValueLabel} from './engine/runInfo';
import type {RunSnapshot,Capabilities} from './engine/contract';
import {reconcileByKey} from './engine/keyed-list';
import {firstScientistTick,highlightStops,highlightTickAt,type HighlightStop} from './engine/highlights';
import type {LabWorld,AgentView} from './engine/types';
import {buildReplayPoses,type PoseFrame} from './engine/replayMotion';
import {buildReplayPresence,replayPeople,replayStation} from './engine/replayPresence';
import {discussionAt} from './engine/discussion';
import {agentNow,nowCardHtml,eventWhy} from './engine/nowCard';
import {experimentDetail,sourceCards,studyCards,dialogueThrough,pValue,type InspectEvent} from './engine/inspect';
import {experimentHtml,sourceCardsHtml,studyCardsHtml,dialogueHtml,type ViewContext} from './engine/inspectView';
import {bubbleContent,bubbleHtml,pickNear,staffStripLabel,staffStripHelp,tileBestLabel,tileGateCounts,tileGateLabel,tileMetrics,gateCountExplanation} from './engine/glance';
import {hasCreditError,provenanceBadge} from './engine/provenanceBadge';
import {isIgnobelRecording,isPreCommitteeIgnobel,recordingProxyNote} from './engine/proxyNote';
import {finaleReached,finaleSummary,improvementText} from './engine/finale';
import {podium} from './engine/podium';
import {podiumMetricHtml} from './engine/podiumView';
import {igJudgeHtml} from './engine/igJudge';
import {compactMarks,lanes,roundX,turns} from './engine/orchestration';
const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const rawEsc=(v:unknown)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const esc=(v:unknown)=>rawEsc(aliasText(String(v??'')));
const evidence=$<HTMLDialogElement>('console'),conversation=$<HTMLDialogElement>('conversation'),guide=$<HTMLDialogElement>('guide'),inspector=$<HTMLDialogElement>('inspector'),resultsDialog=$<HTMLDialogElement>('results-dialog');
let world:LabWorld,renderer:THREE.WebGLRenderer,labControls:LabCameraRig,recording:Recording|null=null,snapshot:RunSnapshot|null=null;
let recordingManifests:RecordingManifest[]=[];
let tick=0,playing=false,walking=false,pace=4,playbackMode:'highlights'|'full'=STATIC_SITE?'highlights':'full',highlightElapsed=0,highlightList:HighlightStop[]=[],currentDrawer:string|null=null,selectedAgent='',nearAgent='',bubbleAgent='',bubblePinned=false,bubbleExpanded=false,bubbleDismissedAgent='',bubbleRenderKey='',loadGeneration=0,experienceStarted=false,growActive=false,growStarted=0,coachId='',finaleAutoOpened=false;
let barManuallyToggled=false,barAutoCollapsed=false,barStateBeforeAutoCollapse=false,coachDismissCleanup:(()=>void)|null=null;
let yaw=0,pitch=0,drag=false,lastPointer={x:0,y:0},pointerStart:{x:number;y:number;canvas:boolean;pointerType:string}|null=null,toastTimer:ReturnType<typeof setTimeout>,momentTimer:ReturnType<typeof setTimeout>,coachTimer:ReturnType<typeof setTimeout>,announcedTick=0;
let displayAliases=new Map<string,string>();
let staticRecordingReady=false,staticLoaderMinimumElapsed=false,staticStartupFinished=false,autoPinTimer:ReturnType<typeof setTimeout>|null=null;
const reducedMotion=prefersReducedMotion();
function aliasText(value:string){return anonymizeExcerpt(value,displayAliases);}
function renderProvenanceBadge(){const badge=provenanceBadge(recording?.manifest,recording||undefined),el=$('provenance-badge'),aria=[badge.label,...badge.chips].join(' · '),html=`<span class="provenance-badge-label">${esc(badge.label)}</span>${badge.chips.map(chip=>`<span class="provenance-badge-chip">${esc(chip)}</span>`).join('')}`;el.dataset.tone=badge.tone;el.hidden=!recording;el.setAttribute('aria-label',aria);if(el.innerHTML!==html)el.innerHTML=html;}
renderProvenanceBadge();
/** Agents keep their manifest names; an older recording's aliasMap is the only rename. */
function prepareAliases(data:Recording){displayAliases=new Map<string,string>(Object.entries(data.manifest.aliasMap||{}));}
let presence=new Map<string,number>();
let poseFrames:PoseFrame[]=[];
const pressed=new Set<string>();
type ArchivedAgent=AgentView&{type?:string;family?:string;familySource?:string;activity?:string;nativeId?:string;boredomSpectrum?:{regime?:string};boredomDetail?:{components?:Record<string,unknown>;regime?:string};standby?:boolean;lastIdea?:string;lastRationale?:string;lastQuestion?:string;lastNote?:string;lastObservation?:string;lastMessage?:string;focus?:Record<string,string>;lastResult?:{id?:string;description:string;status:string;value:number|null;effectSize?:number|null;pValue?:number|null;reward?:number|null}};
function identityOf(a:ArchivedAgent){return agentIdentity(a,recording?.manifest.agents?.find(m=>m.agent_id===a.id));}
function avatar(a:ArchivedAgent){const id=identityOf(a);return `<span class="agent-avatar" data-family="${id.familyKey}"${id.color?` style="--agent-color:${id.color}"`:''}>${esc(id.initial)}</span>`;}
function agentLine(a:ArchivedAgent){const id=identityOf(a),d=recording&&!id.staff?descriptorText(agentDescriptor(recording.events,a.id,tick),id.familyLabel):'';return [id.familyLabel,id.staff?'':d||(a.role!==a.type?humanizeRole(a.role):''),a.standby?'standing by':humanizeActivity(a.activity||a.state)].filter(Boolean).map(v=>rawEsc(v)).join(' · ');}
/** Always-visible boredom meter for a roster row. */
function rowMeter(a:ArchivedAgent){if(identityOf(a).staff)return '';const b=a.boredom==null?null:boredomPercent(a.boredom),r=regimeLabel(a.boredomSpectrum?.regime);return `<span class="row-meter" role="meter" aria-label="${esc(a.name)} boredom" aria-valuemin="0" aria-valuemax="100"${b==null?'':` aria-valuenow="${Math.round(b)}"`}><i style="width:${b??0}%;background:${b==null?'transparent':boredomColor(b)}"></i><b>${b==null?'not measured':`bored ${Math.round(b)}%`}</b>${r.label?`<em class="regime-chip" data-tone="${r.tone}" title="${esc(r.description)}">${esc(r.label)}</em>`:''}</span>`;}
function stripMeter(a:ArchivedAgent){const b=a.boredom==null?null:boredomPercent(a.boredom);return `<span class="strip-meter" role="meter" aria-label="${esc(a.name)} boredom" aria-valuemin="0" aria-valuemax="100"${b==null?'':` aria-valuenow="${Math.round(b)}"`}><i style="width:${b??0}%;background:${b==null?'transparent':boredomColor(b)}"></i></span>`;}
function renderWhosWho(){const rows=whosWho(recording?.manifest.agents||[]);$('whos-who').hidden=!rows.length;$('whos-who').innerHTML=rows.length?`<summary>Who's who</summary><dl>${rows.map(r=>`<dt>${rawEsc(r.title)}<small>${esc(r.names.join(', '))}</small></dt><dd>${rawEsc(r.does)}</dd>`).join('')}</dl>`:'';}
/** Live runs never call their events recorded. */
function said(){return recording?.manifest.live?'Published':'Recorded';}
function isFollowing(){return following(recording?.manifest,tick,playing);}
function showMoment(m:Moment,more:number){const name=agentName(m.agentId,'');if(m.kind==='regime'){toast(`${m.title}${name?` · ${name}`:''} — ${m.detail}`);return;}const box=$('moment');box.dataset.kind=m.kind;box.innerHTML=`<span>${m.kind==='award'?'IG NOBEL COMMITTEE':'DISCOVERY · TICK '+m.tick}</span><strong>${esc(m.title)}</strong><p>${esc([name,m.detail].filter(Boolean).join(' · '))}${more?` · +${more} more`:''}</p>`;box.hidden=false;document.body.classList.add('lab-moment');clearTimeout(momentTimer);momentTimer=setTimeout(()=>{box.hidden=true;document.body.classList.remove('lab-moment');},5200);}
/** Announce moments crossed by playback or live follow; scrubbing only moves the bookmark. */
function announce(){if(!recording)return;if(tick>announcedTick){const moments=momentsBetween(recording.events,announcedTick,tick,recording.manifest.metric);const loud=moments.filter(m=>m.kind!=='regime');if(loud.length)showMoment(loud.at(-1)!,loud.length-1);else if(moments.length)showMoment(moments.at(-1)!,0);}announcedTick=tick;}
function people(){return replayPeople(snapshot?.agents as ArchivedAgent[]||[],tick,presence);}
function toast(message:string){$('toast').textContent=message;$('toast').hidden=false;clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('toast').hidden=true,4000);}
function unlock(){document.exitPointerLock?.();pressed.clear();}
function modal(){return document.querySelector('dialog[open]')!==null||currentDrawer!==null;}
function syncKeyedNodes(host:HTMLElement,nodes:HTMLElement[],selector:string){
 const current=Array.from(host.querySelectorAll<HTMLElement>(selector)),wanted=new Set(nodes);
 for(const node of current)if(!wanted.has(node))node.remove();
 if(current.length!==nodes.length||current.some((node,index)=>node!==nodes[index]))for(const node of nodes)host.appendChild(node);
}
function patchRowMeter(row:HTMLButtonElement,a:ArchivedAgent){
 const container=row.children[1] as HTMLElement,meter=container.querySelector<HTMLElement>('.row-meter');
 if(identityOf(a).staff){meter?.remove();return;}
 const b=a.boredom==null?null:boredomPercent(a.boredom);
 let target=meter;
 if(!target){
  const template=document.createElement('template');template.innerHTML=rowMeter(a);
  target=template.content.firstElementChild as HTMLElement;container.appendChild(target);
 }
 const set=(name:string,value:string)=>{if(target!.getAttribute(name)!==value)target!.setAttribute(name,value);};
 set('aria-label',`${a.name} boredom`);set('aria-valuemin','0');set('aria-valuemax','100');
 if(b==null)target.removeAttribute('aria-valuenow');else set('aria-valuenow',String(Math.round(b)));
 const bar=target.querySelector<HTMLElement>('i')!;
 if(bar.style.width!==`${b??0}%`)bar.style.width=`${b??0}%`;
 const color=b==null?'transparent':boredomColor(b);
 if(bar.style.background!==color)bar.style.background=color;
 const value=target.querySelector<HTMLElement>('b')!,label=b==null?'not measured':`bored ${Math.round(b)}%`;
 if(value.textContent!==label)value.textContent=label;
 const regime=regimeLabel(a.boredomSpectrum?.regime);
 let chip=target.querySelector<HTMLElement>('.regime-chip');
 if(!regime.label){chip?.remove();return;}
 if(!chip){chip=document.createElement('em');chip.className='regime-chip';target.appendChild(chip);}
 if(chip.dataset.tone!==regime.tone)chip.dataset.tone=regime.tone;
 if(chip.title!==regime.description)chip.title=regime.description;
 if(chip.textContent!==regime.label)chip.textContent=regime.label;
}
function createAgentRow(a:ArchivedAgent){
 const row=document.createElement('button');row.type='button';row.className='agent-row';row.dataset.agent=a.id;
 row.innerHTML=`${avatar(a)}<span><strong></strong><small></small>${rowMeter(a)}</span><i></i>`;
 return row;
}
function patchAgentRow(row:HTMLButtonElement,a:ArchivedAgent){
 row.dataset.agent=a.id;row.disabled=Boolean(a.standby);
 if(a.standby)row.dataset.standby='true';else delete row.dataset.standby;
 const id=identityOf(a),portrait=row.querySelector<HTMLElement>('.agent-avatar')!;
 if(portrait.dataset.family!==id.familyKey)portrait.dataset.family=id.familyKey;
 if(portrait.textContent!==id.initial)portrait.textContent=id.initial;
 const color=id.color||'';
 if(portrait.style.getPropertyValue('--agent-color')!==color){if(color)portrait.style.setProperty('--agent-color',color);else portrait.style.removeProperty('--agent-color');}
 const name=row.querySelector<HTMLElement>('strong')!;
 if(name.textContent!==a.name)name.textContent=a.name;
 const detail=row.querySelector<HTMLElement>('small')!,line=agentLine(a);
 if(detail.innerHTML!==line)detail.innerHTML=line;
 patchRowMeter(row,a);
}
function renderAgentList(){
 const host=$('agent-list'),roster=teamRoster(snapshot?.agents as ArchivedAgent[]||[],people());
 if(!roster.length){
  const rows=Array.from(host.querySelectorAll<HTMLElement>('.agent-row[data-agent]'));for(const row of rows)row.remove();
  if(!host.querySelector('.empty'))host.innerHTML='<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>';
  return;
 }
 host.querySelector('.empty')?.remove();
 const existing=Array.from(host.querySelectorAll<HTMLButtonElement>('.agent-row[data-agent]'));
 const rows=reconcileByKey(roster,existing,a=>a.id,row=>row.dataset.agent||'',createAgentRow,patchAgentRow);
 syncKeyedNodes(host,rows,'.agent-row[data-agent]');
}
function setBarCollapsed(collapsed:boolean){
 document.body.classList.toggle('bar-collapsed',collapsed);
 $('collapse-bar').setAttribute('aria-expanded',String(!collapsed));
 $('collapse-bar').textContent=collapsed?'▴':'▾';
 $('collapse-bar').setAttribute('aria-label',collapsed?'Expand playback panel':'Collapse playback panel');
 $('tick-label').textContent=collapsed?`Round ${snapshot?.round??1}`:`Tick ${Math.floor(tick)} / ${recording?.manifest.totalTicks||0}`;
}
function updateDockAutoCollapse(){
 const contextOpen=modal(),shouldCollapse=contextOpen||bubbleExpanded;
 document.body.classList.toggle('dock-auto-hidden',contextOpen);
 document.body.classList.toggle('context-panel-open',contextOpen);
 document.body.classList.toggle('dock-context-open',shouldCollapse);
 if(shouldCollapse&&!barAutoCollapsed){barStateBeforeAutoCollapse=document.body.classList.contains('bar-collapsed');barAutoCollapsed=true;}
 if(shouldCollapse)setBarCollapsed(true);
 else if(barAutoCollapsed){barAutoCollapsed=false;setBarCollapsed(barStateBeforeAutoCollapse);}
 $<HTMLButtonElement>('collapse-bar').disabled=shouldCollapse;
 alignStatusStrip();
}
document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('close',updateDockAutoCollapse));
function closeDrawer(){if(currentDrawer)$(currentDrawer).hidden=true;currentDrawer=null;document.querySelectorAll('[data-drawer]').forEach(b=>b.setAttribute('aria-expanded','false'));$('open-about').setAttribute('aria-expanded','false');updateDockAutoCollapse();}
for(const button of document.querySelectorAll<HTMLElement>('[data-drawer]'))button.onclick=()=>{const id=button.dataset.drawer!,open=currentDrawer!==id;unlock();closeDrawer();if(open){playing=false;renderControls();currentDrawer=id;$(id).hidden=false;button.setAttribute('aria-expanded','true');if(id==='orchestration-drawer')renderOrchestration();updateDockAutoCollapse();}};
for(const button of document.querySelectorAll<HTMLElement>('[data-close-drawer]'))button.onclick=closeDrawer;
function setWalking(value:boolean){walking=value;bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleDismissedAgent='';bubbleRenderKey='';updateDockAutoCollapse();unlock();world.setOverview?.(!value);$('crosshair').hidden=!value;document.body.classList.toggle('playing',value);if(value){playing=false;world.camera.position.set(0,1.69,9.5);const rotation=new THREE.Euler().setFromQuaternion(world.camera.quaternion,'YXZ');yaw=rotation.y;pitch=rotation.x;}else{const orientation=world.camera.quaternion.clone();labControls.reset();world.camera.quaternion.copy(orientation);labControls.syncFromCamera();}renderControls();renderStatusStrip();}
function renderControls(){
  if(recording){
   const copy=recordingCopy(recording.manifest);$('overview-eyebrow').textContent=copy.eyebrow;$('run-callout').textContent=copy.callout;
   $('replay-kicker').textContent=playing?'Replaying recorded run':'Recorded run';$('connection').hidden=STATIC_SITE;$('header-actions').hidden=false;
   $('open-results').textContent='Results';renderRunMeta();
   const value=snapshot?.boredom==null?null:Math.round(boredomPercent(snapshot.boredom)),gauge=$('boredom-gauge');
   gauge.setAttribute('aria-valuenow',String(value??0));gauge.setAttribute('aria-label',value==null?'Swarm boredom not yet measured':`Swarm boredom ${value}%`);
   gauge.querySelector<HTMLElement>('span')!.style.width=`${value??0}%`;
   gauge.dataset.tone=value==null?'unknown':value>=65?'high':value>=35?'medium':'low';
  }
 $('open-results').hidden=!recording||(!STATIC_SITE&&!(finaleAutoOpened||finaleReached(recording,tick)));
 const live=liveButton(recording?.manifest,tick,playing,recording?.events||[]);$('go-live').hidden=live.hidden;$('go-live').textContent=live.label;$('go-live').classList.toggle('at-edge',live.atEdge);$('go-live').setAttribute('aria-label',live.atEdge?'Following live':'Jump to the live edge');
 $('play').textContent=playing?'Ⅱ Pause':'▶ Play';$('play').setAttribute('aria-label',playing?'Pause':'Play');
 $('camera-mode').textContent=walking?'Lab view ↗':'Walk inside ↗';$<HTMLButtonElement>('camera-mode').disabled=!recording||playing;
 $<HTMLInputElement>('timeline').value=String(tick);$('tick-label').textContent=document.body.classList.contains('bar-collapsed')?`Round ${snapshot?.round??1}`:`Tick ${Math.floor(tick)} / ${recording?.manifest.totalTicks||0}`;
 $<HTMLInputElement>('timeline').setAttribute('aria-valuetext',`Round ${snapshot?.round??1} of ${snapshot?.config.rounds??recording?.manifest.time?.rounds??0}`);
 $<HTMLSelectElement>('replay-mode').value=playbackMode;
 const e=recording&&frameAt(recording.events,tick) as InspectEvent|undefined|null,caption=$('activity-caption'),eid=e?.refs?.experiment_id;
 caption.textContent=playing?'Replaying recorded run':e?aliasText(eventCaption({...e,message:eventWhy(e,whyContext())||e.message},agentName(e.agentId,''))):'Recorded run';
 if(eid){caption.dataset.experiment=eid;caption.title='Inspect this experiment';caption.tabIndex=0;caption.setAttribute('role','button');}else{delete caption.dataset.experiment;caption.removeAttribute('title');caption.removeAttribute('tabindex');caption.removeAttribute('role');}
}
function renderRunMeta(){
 if(!recording)return;
 const rounds=recording.manifest.time?.rounds||snapshot?.config.rounds||0,raw=String(snapshot?.regime||'').toUpperCase();
 const activity=/BOREDOM_SNAP/.test(raw)?'Bored — trying new directions':/PARADIGM_BREAKOUT/.test(raw)?'Breakout':'Refining';
 $('run-meta').innerHTML=`<span class="status-chip">${playing?'Replaying recorded run':'Recorded run'}</span><span>Round ${snapshot?.round??1}${rounds?` of ${rounds}`:''}</span><span>${activity}</span>`;
}
function seek(value:number){if(!recording)return;tick=Math.max(0,Math.min(recording.manifest.totalTicks,value));snapshot=frameAt(recording.frames,tick)?.snapshot||null;renderControls();renderHUD();if(evidence.open)renderEvidence();if(conversation.open)renderConversation();if(inspector.open)renderInspector();if(resultsDialog.open)renderResultsPanel();if(!finaleAutoOpened&&finaleReached(recording,tick)){finaleAutoOpened=true;renderResultsPanel();if(!resultsDialog.open){resultsDialog.showModal();updateDockAutoCollapse();}}}
function renderHUD(){
 $('agent-count').textContent=`${people().length} AGENTS`;
 renderAgentList();
 $('run-label').textContent=snapshot?`Round ${snapshot.round}${snapshot.config.rounds?` of ${snapshot.config.rounds}`:''}`:'Waiting for the recorded run';
 renderStatusStrip();
}
type StatusTileView={agent:ArchivedAgent;kind:'staff';label:string;help:string}|{agent:ArchivedAgent;kind:'scientist';metricText:string;metricTitle?:string;turn?:string};
function createStatusTile(item:StatusTileView){
 const tile=document.createElement('button');tile.type='button';tile.dataset.agent=item.agent.id;tile.dataset.kind=item.kind;
 if(item.kind==='staff')tile.className='status-tile status-role';
 else{tile.className='status-tile';tile.innerHTML=`<strong class="status-tile-name"></strong>${stripMeter(item.agent)}<span class="tile-metric"></span>`;}
 patchStatusTile(tile,item);return tile;
}
function patchStatusTile(tile:HTMLButtonElement,item:StatusTileView){
 const agent=item.agent;tile.dataset.agent=agent.id;if(tile.dataset.kind!==item.kind)tile.dataset.kind=item.kind;
 if(item.kind==='staff'){
  if(tile.className!=='status-tile status-role')tile.className='status-tile status-role';
  const title=item.help||agent.name,label=`Focus ${agent.name}: ${item.label}`;
  if(tile.title!==title)tile.title=title;if(tile.getAttribute('aria-label')!==label)tile.setAttribute('aria-label',label);
  if(tile.textContent!==item.label)tile.textContent=item.label;return;
 }
 if(tile.className!=='status-tile')tile.className='status-tile';
 const aria=`Focus ${agent.name}: ${item.metricText}`;
 if(tile.getAttribute('aria-label')!==aria)tile.setAttribute('aria-label',aria);
 const name=tile.querySelector<HTMLElement>('.status-tile-name')!;
 if(name.textContent!==agent.name)name.textContent=agent.name;
 const meter=tile.querySelector<HTMLElement>('.strip-meter')!;
 const boredom=agent.boredom==null?null:boredomPercent(agent.boredom);
 const meterLabel=`${agent.name} boredom`,value=boredom==null?null:String(Math.round(boredom));
 if(meter.getAttribute('aria-label')!==meterLabel)meter.setAttribute('aria-label',meterLabel);
 if(meter.getAttribute('aria-valuenow')!==(value??null)){if(value==null)meter.removeAttribute('aria-valuenow');else meter.setAttribute('aria-valuenow',value);}
 const bar=meter.querySelector<HTMLElement>('i')!,width=`${boredom??0}%`,color=boredom==null?'transparent':boredomColor(boredom);
 if(bar.style.width!==width)bar.style.width=width;if(bar.style.background!==color)bar.style.background=color;
 const metric=tile.querySelector<HTMLElement>('.tile-metric')!;
 if(metric.textContent!==item.metricText)metric.textContent=item.metricText;
 if(item.metricTitle){if(metric.title!==item.metricTitle)metric.title=item.metricTitle;}else if(metric.hasAttribute('title'))metric.removeAttribute('title');
 const labels:Record<string,string>={active:'Active turn',waiting:'Waiting',done:'Done this round'};
 let badge=tile.querySelector<HTMLElement>('.turn-badge');
 if(!item.turn){badge?.remove();return;}
 if(!badge){badge=document.createElement('small');badge.className='turn-badge';tile.appendChild(badge);}
 if(badge.dataset.turn!==item.turn)badge.dataset.turn=item.turn;
 if(badge.textContent!==labels[item.turn])badge.textContent=labels[item.turn];
}
function renderStatusStrip(){
 const strip=$('status-strip');if(!recording||!snapshot||walking||document.body.classList.contains('prestart')){strip.hidden=true;return;}
 const roster=(people() as ArchivedAgent[]).filter(a=>a.type!=='baseline'),results=snapshot.results as (ResultRow&{agentId?:string})[],metric=snapshot.metric,gateRun=isPreCommitteeIgnobel(recording.manifest,recording),scientistCount=roster.filter(a=>a.type!=='conductor'&&a.type!=='critic').length;
 const candidates=results.filter(r=>outcomeOf(r.status,r.kind)!=='baseline'&&typeof r.value==='number'&&Number.isFinite(r.value));
 const direction=metric.name==='replicated_findings'?'maximize':metric.direction;
 const runBest=candidates.length?(direction==='maximize'?Math.max(...candidates.map(r=>r.value!)):Math.min(...candidates.map(r=>r.value!))):snapshot.value;
 const baseline=results.find(r=>outcomeOf(r.status,r.kind)==='baseline'&&typeof r.value==='number')?.value??null;
 const turnLabels={active:'Active turn',waiting:'Waiting',done:'Done this round',idle:'Idle'},stateByAgent=turns(recording,tick);
 const views:StatusTileView[]=roster.map(agent=>{
  if(agent.type==='conductor'||agent.type==='critic')return {agent,kind:'staff',label:staffStripLabel(agent.type,recording!.events,tick),help:staffStripHelp(agent.type,recording!.events,tick)};
  const m=tileMetrics(results,agent.id,agent.name,metric,runBest,baseline),gateCounts=gateRun?tileGateCounts(results,agent.id,agent.name):null;
  const state=stateByAgent[agent.id];return {agent,kind:'scientist',metricText:gateCounts?tileGateLabel(gateCounts):tileBestLabel(m.best),metricTitle:gateCounts?gateCountExplanation:undefined,turn:state&&state!=='idle'?turnLabels[state]:undefined};
 });
 const existing=Array.from(strip.querySelectorAll<HTMLButtonElement>('.status-tile[data-agent]'));
 const tiles=reconcileByKey(views,existing,item=>item.agent.id,tile=>tile.dataset.agent||'',createStatusTile,patchStatusTile);
 syncKeyedNodes(strip,tiles,'.status-tile[data-agent]');
 let hint=strip.querySelector<HTMLElement>('.status-scroll-hint');
 if(scientistCount){
  if(!hint){hint=document.createElement('span');hint.className='status-scroll-hint';strip.appendChild(hint);}
  const text=`${scientistCount} scientist${scientistCount===1?'':'s'} ›`;if(hint.textContent!==text)hint.textContent=text;
  if(strip.lastElementChild!==hint)strip.appendChild(hint);
 }else hint?.remove();
 strip.hidden=!roster.length;alignStatusStrip();
}
function renderOrchestration(){
 const host=$('orchestration-content');if(!recording){host.innerHTML='<p>No run loaded.</p>';return;}
 const view=lanes(recording,tick),width=860,rowHeight=40,top=30,height=top+view.lanes.length*rowHeight+12,left=158,span=width-left-24,cellWidth=span/Math.max(1,view.rounds.length),x=(t:number,r?:number)=>left+roundX(view.roundSpans,t,r)*cellWidth;
 const colors:Record<string,string>={idea:'#e4c986',critic:'#91b4d4',veto:'#e77872',scout:'#82c5ae',memory:'#b39bdb',boredom:'#dd9b59',evaluation:'#a8b6b7',keep:'#77bb69',gate:'#e77872'};
 const lines=view.lanes.map((lane,i)=>{
  const y=top+i*rowHeight,marks=compactMarks(lane.marks).map(group=>{
   const roundIndex=Math.max(0,view.rounds.indexOf(group.round)),cellLeft=left+roundIndex*cellWidth+4,cellRight=left+(roundIndex+1)*cellWidth-4,positions=group.visible.map(mark=>x(mark.tick,mark.round));
   for(let j=1;j<positions.length;j++)positions[j]=Math.max(positions[j],positions[j-1]+8.5);
   if(positions.length){const rightOverflow=positions.at(-1)!-cellRight;if(rightOverflow>0)for(let j=0;j<positions.length;j++)positions[j]-=rightOverflow;const leftOverflow=cellLeft-positions[0];if(leftOverflow>0)for(let j=0;j<positions.length;j++)positions[j]+=leftOverflow;}
   const visible=group.visible.map((mark,index)=>`<g class="orch-mark" role="button" tabindex="0" data-orch-tick="${mark.tick}" data-orch-agent="${esc(lane.id)}" aria-label="${esc(mark.label)} by ${esc(lane.name)} at tick ${mark.tick}"><title>${esc(mark.label)}${mark.why?`: ${esc(mark.why)}`:''} · tick ${mark.tick}</title><circle cx="${positions[index]}" cy="${y}" r="${mark.kind==='veto'?5:4}" fill="${colors[mark.kind]}" class="orch-dot ${mark.kind}"/></g>`).join(''),firstHidden=group.hidden[0],overflowX=firstHidden?Math.max(cellLeft+10,Math.min(cellRight-10,x(firstHidden.tick,group.round))):0,overflow=firstHidden?`<g class="orch-overflow" role="button" tabindex="0" data-orch-tick="${firstHidden.tick}" data-orch-agent="${esc(lane.id)}" aria-label="${group.hidden.length} more events in round ${group.round}; jump to ${esc(firstHidden.label)} at tick ${firstHidden.tick}"><title>${group.hidden.length} more events in round ${group.round}</title><rect x="${overflowX-10}" y="${y+14}" width="20" height="14" rx="7"/><text x="${overflowX}" y="${y+24}" text-anchor="middle">+${group.hidden.length}</text></g>`:'';
   return `${visible}${overflow}`;
  }).join('');
  return `<text x="8" y="${y+4}" class="orch-name">${esc(lane.name)}</text><line x1="${left}" y1="${y}" x2="${width-12}" y2="${y}" class="orch-lane"/>${marks}`;
 }).join('');
 const closes=view.roundCloses.filter(c=>c.tick>0).map(c=>`<line x1="${x(c.tick,c.round)}" y1="${top-20}" x2="${x(c.tick,c.round)}" y2="${height}" class="orch-close"><title>Round ${c.round} closed</title></line>`).join('');
 const rounds=view.rounds.map((r,i)=>`<text x="${left+(i+.5)*cellWidth}" y="13" class="orch-round">Round ${r}</text>`).join('');
 const playhead=`<line x1="${x(tick)}" y1="${top-20}" x2="${x(tick)}" y2="${height}" class="orch-playhead"/>`;
 const legendTitles:Record<string,string>={breakout:'Breakout conditions assign three refining slots and one exploring slot.',boredom:'A boredom shift assigns one refining slot and three exploring slots; the novelty screen rejects close repeats.',keep:'Kept means retained as a current best; baseline is the unmodified reference.'};
 const legend=[['idea','Idea'],['scout','Search'],['memory','Memory'],['boredom','Boredom shift'],['critic','Review'],['veto','Veto'],['keep','Kept']].map(([kind,label])=>`<span${legendTitles[kind]?` title="${esc(legendTitles[kind])}"`:''}><i style="--mark:${colors[kind]}"></i>${label}</span>`).join('')+`<span class="orchestration-legend-note"><span title="${esc(legendTitles.breakout)}">Breakout</span>: 3 refine + 1 explore; <span title="${esc(legendTitles.boredom)}">Boredom shift</span>: 1 refine + 3 explore; close repeats are screened out.</span>`;
 host.innerHTML=view.lanes.length?`<div class="orchestration-scroll"><svg class="orchestration-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Orchestration lanes through tick ${Math.floor(tick)}">${rounds}${closes}${lines}${playhead}</svg></div><div class="orchestration-legend">${legend}</div><p class="orchestration-hint">Select a mark to jump to that event and focus its scientist.</p>`:'<p>No orchestration events by this moment.</p>';
}
function renderResultsPanel(){
 if(!recording){$('results-content').innerHTML='<p>No results available.</p>';return;}
 if(isIgnobelRecording(recording.manifest,recording)){
  const summary=researchResults(recording);
  const committeeScores=researchCommitteeScores(recording,tick),realAward=committeeScores.some(item=>item.score>=.5&&!item.rejected&&item.award&&!/committee/i.test(item.award));
  if(isPreCommitteeIgnobel(recording.manifest,recording)||!realAward){
   $('results-title').textContent='What the swarm found';
   $('results-content').innerHTML=igJudgeHtml((recording as {igjudge?:unknown}).igjudge,esc)+preCommitteeResultsHtml(introConfig as IntroConfig,recording,esc,summary);
   return;
  }
 }
 const resultCopy=(introConfig as IntroConfig).results,badge=provenanceBadge(recording.manifest,recording),badgeHtml=`<div class="results-provenance" data-tone="${badge.tone}"><strong>${esc(badge.label)}</strong>${badge.chips.map(chip=>`<span>${esc(chip)}</span>`).join('')}</div>`;
 if(isIgnobelRecording(recording.manifest,recording)){
  const final=finaleReached(recording,tick)||tick>=recording.manifest.totalTicks||recording.events.some(event=>['run.finished','run.stopped'].includes(event.type)&&event.tick<=tick),summary=researchResults(recording,tick),board=podium(recording.entities?.studies,recording.events,tick,final),noAwards=summary.awards.length?`<p class="podium-award-count">${esc(resultCopy.awardCount.replace('{N}',String(summary.awards.length)))}</p>`:isPreCommitteeIgnobel(recording.manifest,recording)?`<p class="podium-empty">${esc(resultCopy.noAwards)}${hasCreditError(recording.manifest,recording)?esc(resultCopy.creditErrorSuffix):''}</p>`:`<p class="podium-empty">${esc(judgingCopy.committeePending)}</p>`;
  const counts=resultCopy.countLine.replace('{N}',String(summary.registered)).replace('{M}',String(summary.confirmed)).replace('{K}',String(summary.underCurrentRules));
  const entries=board.entries.map(item=>`<li>${item.rank?`<b>#${item.rank}</b> `:''}${esc(item.headline||item.studyId)}${item.unscored?' · Unscored':` · score ${esc(item.score)}`}${item.rho!=null?` · ρ ${item.rho.toFixed(3)}`:''}${item.p!=null?` · p ${pValue(item.p)}`:''}</li>`).join('');
  $('results-title').textContent='What the swarm found';
  const entryBlock=board.status==='awaiting'&&entries?`<details class="unscored-studies"><summary>${board.confirmed} confirmed studies, unscored</summary><ul class="podium-list">${entries}</ul></details>`:entries?`<ul class="podium-list">${entries}</ul>`:'';
  const metricNote=podiumMetricHtml(recording,esc);
  $('results-content').innerHTML=`${igJudgeHtml((recording as {igjudge?:unknown}).igjudge,esc)}${preCommitteeResultsHtml(introConfig as IntroConfig,recording,esc,summary)}${badgeHtml}<h2>Ig Nobel podium</h2>${noAwards}<p class="results-count">${esc(counts)}</p>${metricNote}${entryBlock}<details class="judging-details"><summary>${esc(judgingCopy.title)}</summary><ol>${judgingCopy.steps.map(step=>`<li>${esc(step)}</li>`).join('')}</ol></details>`;
  return;
 }
 const summary=finaleSummary(recording,tick);if(!summary){$('results-content').innerHTML='<p>No results available.</p>';return;}
 const value=(v:number|null)=>v==null?'—':formatValue(v),interval=(v:{low:number;high:number}|null)=>v?`${v.low.toFixed(2)}–${v.high.toFixed(2)}`:'';
 const heldValue=(score:{fraction:string|null;score:number|null;loss:number|null})=>score.fraction||value(score.score??score.loss);
 const held=summary.heldOut?`<section class="held-out"><h3>Held-out test</h3><p>Baseline ${heldValue(summary.heldOut.baseline)} → best ${heldValue(summary.heldOut.best)}</p>${summary.heldOut.best.wilson?`<p>95% Wilson CI: ${interval(summary.heldOut.best.wilson)} (baseline ${interval(summary.heldOut.baseline.wilson)})</p>`:''}${summary.heldOut.proxyNote?`<p>${esc(summary.heldOut.proxyNote)}</p>`:''}${summary.heldOut.referenceNote?`<p>${esc(summary.heldOut.referenceNote)}</p>`:''}</section>`:'<p class="no-held-out">no held-out split for this task</p>';
 const delta=summary.delta==null?'':` · ${improvementText(summary.delta,value)}`;
 $('results-title').textContent=`RUN RESULTS · ${summary.status.toUpperCase()}`;
 $('results-content').innerHTML=`${badgeHtml}<h2>${esc(taskTitle(recording.manifest))}</h2><p class="result-metric">${esc(summary.metric)} · ${summary.direction==='maximize'?'higher is better':'lower is better'}</p><p class="result-baseline">Baseline ${value(summary.baseline)} → best dev result ${value(summary.best)}${delta}</p>${summary.winner?.commit?`<section class="result-winner"><h3>Winning change</h3><p><code>${esc(summary.winner.commit)}</code> · ${esc(summary.winner.agent)}</p><p class="result-winner-description">${esc(summary.winner.description)}</p></section>`:'<p>Baseline is the best result so far.</p>'}${held}<p class="result-totals">Kept ${summary.totals.kept} · discarded ${summary.totals.discarded} · crashed ${summary.totals.crashed}</p>${summary.proxyNote&&!summary.heldOut?.proxyNote?`<p class="proxy-note">${esc(summary.proxyNote)}</p>`:''}${summary.referenceNote&&!summary.heldOut?.referenceNote?`<p class="reference-note">${esc(summary.referenceNote)}</p>`:''}`;
}
function alignStatusStrip(){const bar=document.querySelector<HTMLElement>('.replay-bar'),strip=$('status-strip');if(!bar||!strip)return;const rect=bar.getBoundingClientRect();if(innerHeight<=500&&innerWidth>innerHeight){const sidebar=document.querySelector<HTMLElement>('.sidebar'),header=document.querySelector<HTMLElement>('header'),left=Math.max(8,(sidebar?.getBoundingClientRect().right??0)+8);strip.style.left=`${left}px`;strip.style.width=`${Math.max(0,innerWidth-left-8)}px`;strip.style.top=`${Math.max(68,(header?.getBoundingClientRect().bottom??58)+8)}px`;}else{const height=strip.getBoundingClientRect().height||56;strip.style.left=`${rect.left}px`;strip.style.width=`${rect.width}px`;strip.style.top=`${Math.max(0,rect.top-height-8)}px`;}strip.style.bottom='auto';strip.style.transform='none';}
const replayBar=document.querySelector<HTMLElement>('.replay-bar');if(replayBar)new ResizeObserver(alignStatusStrip).observe(replayBar);
window.addEventListener('resize',alignStatusStrip);
function renderBubble(){
 const element=$('proximity');
 if(!bubbleAgent){element.hidden=true;return;}
 const agent=people().find(a=>a.id===bubbleAgent) as ArchivedAgent|undefined;
 if(!agent){element.hidden=true;return;}
 const key=`${bubbleAgent}|${Math.floor(tick)}|${bubbleExpanded}`;
 if(key!==bubbleRenderKey){
  const content=bubbleContent({agent,recording,tick,metric:snapshot?.metric,best:snapshot?.value??null,agentName});
  patchChildren(element,templateChildren(bubbleHtml(content,bubbleExpanded,esc)));
  if(bubbleExpanded){const now=agentNow(recording,agent.id,agent.activity||agent.state,tick,whyContext()),nowTarget=element.querySelector<HTMLElement>('[data-bubble-now]');if(nowTarget)patchChildren(nowTarget,templateChildren(nowCardHtml(now,{...whyContext(),esc},snapshot?.metric)));}
  bubbleRenderKey=key;
 }
 element.hidden=false;
 positionBubble();
}
function templateChildren(html:string){const template=document.createElement('template');template.innerHTML=html;return template.content;}
function patchChildren(target:Element|DocumentFragment,source:DocumentFragment){
 const old=[...target.childNodes],next=[...source.childNodes];
 next.forEach((node,index)=>{
  const current=old[index];
  if(!current){target.appendChild(node.cloneNode(true));return;}
  if(current.nodeType===Node.TEXT_NODE&&node.nodeType===Node.TEXT_NODE){if(current.nodeValue!==node.nodeValue)current.nodeValue=node.nodeValue;return;}
  if(current instanceof Element&&node instanceof Element&&current.tagName===node.tagName){
   for(const attribute of [...current.attributes])if(!node.hasAttribute(attribute.name))current.removeAttribute(attribute.name);
   for(const attribute of [...node.attributes])if(current.getAttribute(attribute.name)!==attribute.value)current.setAttribute(attribute.name,attribute.value);
   patchChildren(current,toFragment(node));
   return;
  }
  target.replaceChild(node.cloneNode(true),current);
 });
 while(target.childNodes.length>next.length)if(target.lastChild)target.removeChild(target.lastChild);
}
function toFragment(element:Element){const fragment=document.createDocumentFragment();fragment.append(...[...element.childNodes].map(node=>node.cloneNode(true)));return fragment;}
function positionBubble(){
 const element=$('proximity');if(element.hidden)return;
 const person=world.agentPositions?.().find(a=>a.id===bubbleAgent);if(!person){element.hidden=true;return;}
 const point=person.position.clone().add(new THREE.Vector3(0,2.35,0));
 world.camera.updateMatrixWorld();const local=point.clone().applyMatrix4(world.camera.matrixWorldInverse);
 if(local.z>=0){element.style.visibility='hidden';return;}
 point.project(world.camera);
 const x=(point.x+1)*innerWidth/2,y=(1-point.y)*innerHeight/2,rect=element.getBoundingClientRect(),margin=12,left=THREE.MathUtils.clamp(x-rect.width/2,margin,Math.max(margin,innerWidth-rect.width-margin)),maxTop=Math.max(margin,innerHeight-rect.height-margin);
 const obstacles=[document.querySelector<HTMLElement>('header'),$('status-strip'),document.querySelector<HTMLElement>('.replay-bar'),document.querySelector<HTMLElement>('.sidebar')].filter((node):node is HTMLElement=>!!node&&!node.hidden&&getComputedStyle(node).display!=='none').map(node=>node.getBoundingClientRect()).filter(box=>box.width>0&&box.height>0);
 const candidates=[y-rect.height-22,y+22,...obstacles.flatMap(box=>[box.bottom+margin,box.top-rect.height-margin]),margin,maxTop].map(top=>THREE.MathUtils.clamp(top,margin,maxTop));
 const overlaps=(top:number,box:DOMRect)=>left<box.right&&left+rect.width>box.left&&top<box.bottom&&top+rect.height>box.top;
 const overlapArea=(top:number)=>obstacles.reduce((sum,box)=>sum+Math.max(0,Math.min(top+rect.height,box.bottom)-Math.max(top,box.top))*Math.max(0,Math.min(left+rect.width,box.right)-Math.max(left,box.left)),0);
 const safeTop=candidates.find(top=>!obstacles.some(box=>overlaps(top,box)));
 const chosen=safeTop??candidates.sort((a,b)=>overlapArea(a)-overlapArea(b))[0];
 element.style.visibility='visible';element.style.left=`${left}px`;element.style.top=`${chosen}px`;
}
function pinBubble(id:string,fromAutoPin=false){bubbleAgent=id;bubblePinned=true;bubbleExpanded=false;bubbleDismissedAgent='';bubbleRenderKey='';updateDockAutoCollapse();if(!fromAutoPin)finishCoach('scientist');}
function seenCoaches(){try{return ['scientist','scrub'].filter(id=>localStorage.getItem(`lab.coach.${id}`));}catch{return [];}}
function coachDismissed(){try{return localStorage.getItem('lab.coach.dismissed')==='1';}catch{return false;}}
function watchCoachInteractions(){
 const types=['pointerdown','keydown','touchstart'] as const,dismiss=()=>{
  clearTimeout(coachTimer);
  coachDismissCleanup?.();coachDismissCleanup=null;
  try{localStorage.setItem('lab.coach.dismissed','1');}catch{}
  coachId='done';$('coach-mark').hidden=true;
 };
 types.forEach(type=>window.addEventListener(type,dismiss,true));
 coachDismissCleanup=()=>types.forEach(type=>window.removeEventListener(type,dismiss,true));
}
function showNextCoach(){
 if(modal()||coachDismissed()){$('coach-mark').hidden=true;return;}
 const next=nextCoach(seenCoaches());
 if(next==='scientist'&&innerHeight<=500&&!document.body.classList.contains('bar-collapsed')){coachId='done';$('coach-mark').hidden=true;return;}
 if(!next){coachId='done';$('coach-mark').hidden=true;return;}
 coachId=next;try{localStorage.setItem(`lab.coach.${next}`,'1');}catch{}
 const message=next==='scientist'?(matchMedia('(pointer:fine)').matches?'Click a scientist':'Tap a scientist'):'Drag to scrub';
 $('coach-mark').dataset.coach=next;$('coach-mark').innerHTML=`<span>${message}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`;$('coach-mark').hidden=false;watchCoachInteractions();clearTimeout(coachTimer);coachTimer=setTimeout(()=>{coachDismissCleanup?.();coachDismissCleanup=null;coachId='done';$('coach-mark').hidden=true;},8000);
}
function finishCoach(id:string){if(coachId!==id)return;clearTimeout(coachTimer);coachDismissCleanup?.();coachDismissCleanup=null;coachId='';$('coach-mark').hidden=true;showNextCoach();}
function positionCoach(){
 const mark=$('coach-mark');if(mark.hidden||coachId!=='scientist')return;
 const scientist=people().find(agent=>!isSupportAgent(agent)),person=scientist&&world.agentPositions?.().find(agent=>agent.id===scientist.id);if(!person)return;
 const point=person.position.clone().add(new THREE.Vector3(0,1.6,0));point.project(world.camera);
 const x=(point.x+1)*innerWidth/2,y=(1-point.y)*innerHeight/2,rect=mark.getBoundingClientRect(),minTop=innerHeight<=500?72:80;
 const visible=(node:HTMLElement|null):node is HTMLElement=>!!node&&!node.hidden&&getComputedStyle(node).display!=='none'&&getComputedStyle(node).visibility!=='hidden';
 const obstacles=[document.querySelector<HTMLElement>('header'),$('status-strip'),document.querySelector<HTMLElement>('.replay-bar'),document.querySelector<HTMLElement>('.sidebar'),$('proximity')].filter(visible).map(node=>node.getBoundingClientRect()).filter(box=>box.width>0&&box.height>0);
 world.camera.updateMatrixWorld();
 const scientistIds=new Set((people() as ArchivedAgent[]).filter(agent=>!isSupportAgent(agent)).map(agent=>agent.id));
 for(const agent of world.agentPositions?.()||[]){
  if(!scientistIds.has(agent.id))continue;
  const projected=[-.9,.9].flatMap(px=>[.15,3.1].flatMap(py=>[-.55,.55].map(pz=>new THREE.Vector3(agent.position.x+px,agent.position.y+py,agent.position.z+pz).project(world.camera)))).filter(corner=>corner.z>=-1&&corner.z<=1);
  if(projected.length){
   const left=Math.min(...projected.map(corner=>(corner.x+1)*innerWidth/2)),right=Math.max(...projected.map(corner=>(corner.x+1)*innerWidth/2)),top=Math.min(...projected.map(corner=>(1-corner.y)*innerHeight/2)),bottom=Math.max(...projected.map(corner=>(1-corner.y)*innerHeight/2));
   if(right>0&&left<innerWidth&&bottom>0&&top<innerHeight)obstacles.push(new DOMRect(left,top,right-left,bottom-top));
  }
 }
 const desiredLeft=THREE.MathUtils.clamp(x-rect.width/2,8,Math.max(8,innerWidth-rect.width-8)),headerBottom=document.querySelector<HTMLElement>('header')?.getBoundingClientRect().bottom??minTop,desiredTop=THREE.MathUtils.clamp(headerBottom+8,minTop,Math.max(minTop,innerHeight-rect.height-12));
 const lefts=[desiredLeft,8,innerWidth-rect.width-8,...obstacles.flatMap(box=>[box.left-rect.width-8,box.right+8])].map(left=>THREE.MathUtils.clamp(left,8,Math.max(8,innerWidth-rect.width-8)));
 const tops=[desiredTop,minTop,innerHeight-rect.height-12,...obstacles.flatMap(box=>[box.top-rect.height-8,box.bottom+8])].map(top=>THREE.MathUtils.clamp(top,minTop,Math.max(minTop,innerHeight-rect.height-12)));
 const overlapArea=(left:number,top:number)=>obstacles.reduce((sum,box)=>sum+Math.max(0,Math.min(left+rect.width,box.right)-Math.max(left,box.left))*Math.max(0,Math.min(top+rect.height,box.bottom)-Math.max(top,box.top)),0);
 const candidates=lefts.flatMap(left=>tops.map(top=>({left,top,overlap:overlapArea(left,top),distance:Math.hypot(left-desiredLeft,top-desiredTop)}))).sort((a,b)=>a.overlap-b.overlap||a.distance-b.distance),chosen=candidates[0];
 mark.style.right='auto';mark.style.transform='none';mark.style.left=`${chosen.left}px`;mark.style.top=`${chosen.top}px`;mark.style.bottom='auto';
}
function startExperience(){
 if(STATIC_SITE&&!staticStartupFinished){staticRecordingReady=true;maybeStartStaticExperience();return;}
 if(experienceStarted)return;
 experienceStarted=true;document.body.classList.remove('prestart');document.body.dataset.labOpen='true';$('header-actions').hidden=false;
 if(recording){if(recording.manifest.live)seek(recording.manifest.totalTicks);else if(STATIC_SITE){playbackMode='highlights';const startTick=firstScientistTick(recording);highlightList=highlightStops(recording,startTick);highlightElapsed=0;seek(startTick);}else if(tick>=recording.manifest.totalTicks)seek(0);playing=true;announcedTick=tick;}
 if(STATIC_SITE){
  world.camera.fov=innerWidth<760?62:48;world.camera.updateProjectionMatrix();
  const poses=posesAt(),positions=(people() as ArchivedAgent[]).filter(agent=>!isSupportAgent(agent)).flatMap(agent=>{const pose=poses.get(agent.id);return pose?[new THREE.Vector3(pose.x,0,pose.z)]:[];});
  if(positions.length)frameOnSwarm(positions);
  else{world.camera.position.set(0,2.7,1.2);labControls.focus(new THREE.Vector3(0,1.3,-2));}
  setBarCollapsed(true);
 }
 renderControls();renderHUD();renderer.domElement.focus();
 if(people().length)showNextCoach();
 if(STATIC_SITE)scheduleAutoPin();
}
function maybeStartStaticExperience(){
 if(!STATIC_SITE||!staticRecordingReady||!staticLoaderMinimumElapsed||staticStartupFinished)return;
 staticStartupFinished=true;$('loading').classList.add('loaded');
 setTimeout(()=>{$('loading').hidden=true;startExperience();},380);
}
function scheduleAutoPin(){
 if(!STATIC_SITE||autoPinTimer)return;
 const events=['pointerdown','keydown','touchstart'] as const;
 const cancel=()=>{clearTimeout(autoPinTimer!);autoPinTimer=null;events.forEach(type=>document.removeEventListener(type,cancel,true));};
 events.forEach(type=>document.addEventListener(type,cancel,true));
 const tryPin=()=>{
  autoPinTimer=null;
  if(!experienceStarted||modal()){events.forEach(type=>document.removeEventListener(type,cancel,true));return;}
  const positions=new Set((world.agentPositions?.()||[]).map(person=>person.id));
  const agent=(people() as ArchivedAgent[]).find(candidate=>!isSupportAgent(candidate)&&positions.has(candidate.id));
  if(!agent){autoPinTimer=setTimeout(tryPin,300);return;}
  events.forEach(type=>document.removeEventListener(type,cancel,true));
  focusScientist(agent.id,true);
  let active=true;
  const dismiss=()=>{if(!active)return;active=false;events.forEach(type=>document.removeEventListener(type,dismiss,true));if(bubbleAgent===agent.id)dismissBubble();};
  events.forEach(type=>document.addEventListener(type,dismiss,true));
 };
 autoPinTimer=setTimeout(tryPin,3000);
}
function skipGrow(){if(!growActive)return;growActive=false;world.grow?.(1);document.body.classList.remove('world-growing');}
window.addEventListener('pointerdown',skipGrow,{capture:true});window.addEventListener('keydown',skipGrow,{capture:true});
$('coach-mark').onclick=e=>{if((e.target as Element).closest('[data-coach-dismiss]'))finishCoach(coachId);};
function graph(){if(!recording||!snapshot)return '<p>No measurements yet.</p>';const counted=recording.manifest.swarm==='ignobel'&&snapshot.metric.name==='replicated_findings';return scoreChartSvg(scoreSeries(snapshot.results as ResultRow[],recording.frames,tick,!counted),snapshot.metric,tick,esc);}
function resultMeasurement(r:{value:number|null;effectSize?:number|null;pValue?:number|null;reward?:number|null},metricName=evidenceMetricLabel(snapshot?.metric)){
 const metricValue=metricValueLabel(r.value,r.reward,metricName,formatValue);
 const fields=[r.effectSize==null?'':`Effect ${esc(r.effectSize)}`,r.pValue==null?'':`p = ${esc(r.pValue)}`,metricValue?esc(metricValue):''].filter(Boolean);
 return fields.length?fields.join('<br>'):esc(r.value??'—');
}
function renderEvidence(){
 const s=snapshot;
 if(!s){$('console-content').innerHTML='<h2>No evidence yet.</h2>';return;}
 const proxyNote=recording?recordingProxyNote(recording.manifest,recording):undefined,metricName=evidenceMetricLabel(s.metric);
 const evidenceKey='<p class="evidence-key"><span title="Kept candidates are retained when they improve the current best.">Keep</span> = retained as a current best; <span title="Baseline is the unmodified reference used for comparison.">baseline</span> = the unmodified reference.</p>';
 const renderRows=(items:typeof s.results)=>items.map(r=>{
  const statusTitle=r.kind==='baseline'?'Baseline is the unmodified reference for comparison.':String(r.status).toLowerCase()==='keep'?'Kept because this result improved the current best.':'';
  return `<tr${(r as {id?:string}).id?` class="inspectable" data-experiment="${esc((r as {id?:string}).id)}" tabindex="0"`:''}><td>${r.round}</td><td>${esc(r.agent)}</td><td><span${statusTitle?` title="${esc(statusTitle)}"`:''}>${esc(r.status)}</span><br>${esc(r.description)}</td><td>${resultMeasurement(r,metricName)}</td></tr>`;
 }).join('');
 const studies=studyCards(recording,tick),studySection=studies.length?`<h3>Ig Nobel studies</h3>${studyCardsHtml(studies,viewContext())}`:'';
 const failures=s.results.filter(r=>outcomeOf(r.status,r.kind)==='crashed'),kept=s.results.filter(r=>outcomeOf(r.status,r.kind)==='kept'),other=s.results.filter(r=>outcomeOf(r.status,r.kind)!=='crashed'&&outcomeOf(r.status,r.kind)!=='kept');
 const tableHead=`<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th title="Run metric value">${esc(metricName)}</th></tr></thead><tbody>`,tableTail='</tbody></table></div>';
 const allFindings=s.findings.filter(f=>!(/swarm_B|per_agent_B|boredom/i.test(f.message))).slice().reverse(),rawFindings=allFindings.filter(f=>f.message.trim().length>180||/^\s*[\[{]/.test(f.message)),shortFindings=allFindings.filter(f=>!rawFindings.includes(f));
 const renderFindings=(items:typeof s.findings)=>items.map(f=>`<div class="finding"><b>${esc(people().find(a=>a.id===f.agent)?.name||f.role)}</b><span>${esc(f.message)}</span></div>`).join('')||'<p>No findings yet.</p>';
 const previousContent=$('console-content'),failuresOpen=previousContent.querySelector<HTMLDetailsElement>('.evidence-failures')?.open??false,rawOpen=previousContent.querySelector<HTMLDetailsElement>('.evidence-raw')?.open??false;
 $('console-content').innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(tick)}. Kept findings and candidates appear first; failures remain available below.</p>${studySection}${evidenceKey}${proxyNote?`<p class="proxy-note"><b>About this benchmark:</b> ${esc(proxyNote)}</p>`:''}${graph()}${tableHead}${renderRows([...kept,...other])}${tableTail}${failures.length?`<details class="evidence-failures"${failuresOpen?' open':''}><summary>Failures (${failures.length})</summary>${tableHead}${renderRows(failures)}${tableTail}</details>`:''}<h3>${said()} findings</h3>${renderFindings(shortFindings)}${rawFindings.length?`<details class="evidence-raw"${rawOpen?' open':''}><summary>Full recorded findings (${rawFindings.length})</summary>${renderFindings(rawFindings)}</details>`:''}${inspectionSections(false)}`;
}
function inspectionSections(includeStudies=true){const studies=includeStudies?studyCards(recording,tick):[],sources=sourceCards(recording,tick),dialogue=dialogueThrough(events(),tick);return `${studies.length?`<h3>Ig Nobel studies</h3>${studyCardsHtml(studies,viewContext())}`:''}${dialogue.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${dialogueHtml(dialogue,viewContext())}</div>`:''}${sources.length||entityCount('sources')?`<h3>Research sources</h3>${sourceCardsHtml(sources,viewContext())}`:''}`;}
let conversationTopic='now';
function whyContext(){return {name:(id:string|null)=>agentName(id),metric:snapshot?.metric,best:snapshot?.value??null};}
function renderConversation(){const a=people().find(a=>a.id===selectedAgent);if(!a){conversation.close();return;}
 const records=recording?eventsThrough(recording.events,tick).filter(e=>e.agentId===a.id||(e.type==='message.sent'&&(e.payload?.to_agent_id===a.id||(e.payload?.to_agent_ids as string[]|undefined)?.includes(a.id)))):[];
 const pattern=conversationTopic==='idea'?/hypothesis|propos|question|idea/:conversationTopic==='result'?/experiment|observ|discover|reward|evaluat/:conversationTopic==='notes'?/diary|memory|finding|talk|shar|message/:/assign|activity|research|propos|experiment|diary|talk|observ|message|verdict/;
 const meaningful=meaningfulMessage;
 const messages=records.filter(e=>pattern.test(e.type)&&meaningful(e.message)).slice(-1);
 const fallback=conversationTopic==='doing'?[a.lastMessage,a.lastNote,a.lastObservation,a.lastIdea,a.lastQuestion].find(meaningful):undefined;
 const result=conversationTopic==='result'&&a.lastResult?`<blockquote>${esc(a.lastResult.description)}<br>${esc(a.lastResult.status)} · ${resultMeasurement(a.lastResult)}<cite>${said()} result · available by tick ${Math.floor(tick)}</cite></blockquote>`:'';
 const idea=conversationTopic==='idea'?[a.lastIdea,a.lastRationale].filter(Boolean).join('\n\n'):'';
 const boredom=a.boredom==null?null:boredomPercent(a.boredom),meter=recording?latestBoredom(recording.events,a.id,tick):null,regime=regimeLabel(meter?.regime||a.boredomSpectrum?.regime||a.boredomDetail?.regime),components=boredomComponents(meter?.components||a.boredomDetail?.components);
 const dialogue=dialogueThrough(events(),tick,a.id),experimentId=conversationTopic==='result'||conversationTopic==='doing'?(a.lastResult?.id&&experimentDetail(recording,a.lastResult.id,tick)?a.lastResult.id:a.focus?.experiment_id&&experimentDetail(recording,a.focus.experiment_id,tick)?a.focus.experiment_id:null):null;
 const inspect=experimentId?`<button class="inspect-link" data-experiment="${esc(experimentId)}">Inspect experiment →</button>`:'';
 const live=!!recording?.manifest.live,followingNow=isFollowing(),newer=recording?eventsAfter(recording.events,tick):0;
 const note=live?(followingNow?`Live excerpts from the running swarm, quoted as they are published (tick ${Math.floor(tick)}). Statements update while you talk.`:`Live run, viewing tick ${Math.floor(tick)}${newer?` · ${newer} newer events`:''}. Press ● Go live to rejoin the edge.`):`Archive excerpts, not a live conversation. Playback is paused at tick ${Math.floor(tick)}.`;
 const quoted=(e:ReplayEvent)=>e.type==='message.sent'&&e.agentId!==a.id?`Message from ${esc(agentName(e.agentId,'')||'a colleague')}`:`${live?'Published':'Recorded'} ${esc(eventLabel(e.type).toLowerCase())}`;
 $('conversation-tag').textContent=live?(followingNow?'● LIVE CONVERSATION':'LIVE RUN · EARLIER MOMENT'):'ARCHIVED CONVERSATION';
 $('conversation-content').innerHTML=`<div class="conversation-person">${avatar(a)}<div><h2>${esc(a.name)}</h2><p>${agentLine(a)}</p></div></div><div class="conversation-questions">${[['now','Now'],['doing','What are you doing?'],['idea','Tell me about your idea'],['result','What did you find?'],['notes','Your research notes'],...(dialogue.length?[['talk','Conversation']]:[])].map(([key,label])=>`<button data-topic="${key}" aria-pressed="${conversationTopic===key}">${label}</button>`).join('')}</div><div class="speech-bubble${conversationTopic==='talk'||conversationTopic==='now'?' history':''}">${conversationTopic==='now'?nowCardHtml(agentNow(recording,a.id,a.activity||a.state,tick,whyContext()),{...whyContext(),esc},snapshot?.metric):conversationTopic==='talk'?dialogueHtml(dialogue,viewContext(),a.id)||'<p>No dialogue by this moment.</p>':result?result:idea?`<blockquote>${esc(idea)}<cite>${said()} proposal · available by tick ${Math.floor(tick)}</cite></blockquote>`:messages.length?messages.map(e=>`<blockquote>${esc(e.message)}<cite>${quoted(e)} · tick ${e.tick}</cite></blockquote>`).join(''):fallback?`<blockquote>${esc(fallback)}<cite>${said()} excerpt · through tick ${Math.floor(tick)}</cite></blockquote>`:'<p>No statement on this topic by this moment.</p>'}</div>${inspect}<div class="boredom-panel"><div class="boredom-heading"><span>${said().toUpperCase()} BOREDOM</span><strong style="color:${boredom==null?'inherit':boredomColor(boredom)}">${boredom==null?'Not measured':Math.round(boredom)+'%'}</strong></div>${boredom==null?'':`<div class="boredom-spectrum" role="meter" aria-label="${esc(a.name)} boredom" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${boredom}"><i style="left:${boredom}%"></i></div><div class="spectrum-legend"><span>Engaged</span><span>Repetitive</span></div>`}${regime.label||components.length?`<div class="boredom-detail">${regime.label?`<span class="regime-chip" data-tone="${regime.tone}">${esc(regime.label)}</span>`:''}${components.length?`<div class="boredom-components" aria-label="Boredom components">${components.map(c=>`<div><span>${esc(c.label)}</span><i style="--v:${c.value}%"></i><b>${c.value}</b></div>`).join('')}</div>`:''}</div>`:''}</div><p class="archive-note">${note}</p>`;
}
function talk(id:string){bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleRenderKey='';updateDockAutoCollapse();if(!isFollowing())playing=false;selectedAgent=id;conversationTopic='now';unlock();closeDrawer();renderControls();renderConversation();if(people().some(a=>a.id===id)){const person=world.agentPositions?.().find(a=>a.id===id);if(person){const focus=person.position.clone().add(new THREE.Vector3(0,2.1,0));world.camera.lookAt(focus);if(!walking)labControls.focus(focus);if(walking){const rotation=new THREE.Euler().setFromQuaternion(world.camera.quaternion,'YXZ');yaw=rotation.y;pitch=rotation.x;}}if(!conversation.open){conversation.show();updateDockAutoCollapse();}positionConversation();conversation.querySelector<HTMLButtonElement>('button')?.focus();}}
function positionConversation(){if(!conversation.open)return;const person=world.agentPositions?.().find(a=>a.id===selectedAgent);if(!person){conversation.style.visibility='hidden';return;}const point=person.position.clone().add(new THREE.Vector3(0,2.35,0));world.camera.updateMatrixWorld();const local=point.clone().applyMatrix4(world.camera.matrixWorldInverse);if(local.z>=0){conversation.style.visibility='hidden';return;}conversation.style.visibility='visible';point.project(world.camera);const anchorX=(point.x+1)/2*innerWidth,anchorY=(1-point.y)/2*innerHeight;const rect=conversation.getBoundingClientRect(),margin=12;const left=THREE.MathUtils.clamp(anchorX-rect.width/2,margin,Math.max(margin,innerWidth-rect.width-margin));const top=THREE.MathUtils.clamp(anchorY-rect.height-24,80,Math.max(80,innerHeight-rect.height-190));conversation.style.left=`${left}px`;conversation.style.top=`${top}px`;conversation.style.setProperty('--speech-tail',`${THREE.MathUtils.clamp(anchorX-left,20,rect.width-20)}px`);}
$('conversation-content').onclick=e=>{const topic=(e.target as HTMLElement).closest<HTMLElement>('[data-topic]')?.dataset.topic;if(topic){conversationTopic=topic;renderConversation();}};
$('agent-list').onclick=e=>{const id=(e.target as HTMLElement).closest<HTMLElement>('[data-agent]')?.dataset.agent;if(id)talk(id);};
function events(){return (recording?.events||[]) as InspectEvent[];}
function entityCount(name:string){const v=recording?.entities?.[name] as unknown;return Array.isArray(v)?v.length:v&&typeof v==='object'?Object.keys(v).length:0;}
/** Display name for an agent id; `missing` replaces the 'Lab'/'Unknown researcher' wording. */
function agentName(id?:string|null,missing?:string){if(!id)return missing??'Lab';const a=(snapshot?.agents||recording?.frames.at(-1)?.snapshot.agents||[]).find(a=>a.id===id);return a?.name||recording?.manifest.agents?.find(m=>m.agent_id===id)?.display_name||(missing??'Unknown researcher');}
function viewContext():ViewContext{const rid=recording?.manifest.id||'';return {esc,name:agentName,judging:recording?.manifest.judging,artifactUrl:path=>{const p=`/recordings/${encodeURIComponent(rid)}/artifacts/${path.split('/').map(encodeURIComponent).join('/')}`;return STATIC_SITE?staticPath(p)!:`/api${p}`;},experimentLabel:id=>{const d=experimentDetail(recording,id,tick);return d?.description||d?.idea?.text||id.replace(/^experiment:/,'').slice(0,10);}};}
let inspected:string|null=null;
function renderInspector(){if(!inspected)return;const d=experimentDetail(recording,inspected,tick);$('inspector-content').innerHTML=d?experimentHtml(d,viewContext(),d.studyId?studyCards(recording,tick).find(s=>s.id===d.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>';}
function openSource(id:string){playing=false;renderControls();unlock();closeDrawer();conversation.close();const at=sourceCards(recording,Number.MAX_SAFE_INTEGER).find(s=>s.id===id)?.tick;if(at!=null&&at>tick)seek(at);renderEvidence();if(!evidence.open){evidence.showModal();updateDockAutoCollapse();}const card=[...document.querySelectorAll<HTMLElement>('[data-source-card]')].find(el=>el.dataset.sourceCard===id);if(card){card.scrollIntoView({block:'center'});card.classList.add('flash');setTimeout(()=>card.classList.remove('flash'),1600);}}
function openExperiment(id:string){playing=false;renderControls();unlock();inspected=id;renderInspector();if(!inspector.open){inspector.showModal();updateDockAutoCollapse();}inspector.querySelector<HTMLElement>('#close-inspector')?.focus();}
document.addEventListener('click',e=>{const target=e.target as Element,mark=target.closest?.<SVGElement>('[data-orch-tick]');if(mark){e.preventDefault();playing=false;const id=mark.dataset.orchAgent!,at=Number(mark.dataset.orchTick);seek(at);const person=world.agentPositions?.().find(a=>a.id===id);if(person){const focus=person.position.clone().add(new THREE.Vector3(0,2.1,0));world.camera.lookAt(focus);labControls.focus(focus);}pinBubble(id);return;}const source=target.closest?.<HTMLElement>('[data-source]')?.dataset.source;if(source){openSource(source);return;}const id=target.closest?.<HTMLElement|SVGElement>('[data-experiment]')?.dataset.experiment;if(id){e.preventDefault();openExperiment(id);}});
document.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const target=e.target as Element;if(target.matches?.('[data-experiment]:not(button):not(a)')){e.preventDefault();openExperiment((target as HTMLElement).dataset.experiment!);}});
function expandBubble(){if(!bubbleAgent)return;unlock();bubbleExpanded=true;bubbleRenderKey='';updateDockAutoCollapse();}
function dismissBubble(){if(bubbleAgent)bubbleDismissedAgent=bubbleAgent;bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleRenderKey='';$('proximity').hidden=true;updateDockAutoCollapse();}
function isSupportAgent(agent:ArchivedAgent){return [agent.type,agent.role].filter(Boolean).some(role=>['conductor','critic','host','baseline','environment','world'].includes(String(role).toLowerCase()));}
function frameOnScientist(position:THREE.Vector3,wide=false){
 const focus=position.clone().add(new THREE.Vector3(0,2.1,0)),distance=wide?(innerWidth<760?7.2:6.8):innerWidth<760?4.4:5.2,rise=wide?3.1:innerWidth<760?2.1:2.5;
 const direction=position.z>4?-1:1;
 world.camera.position.set(position.x,position.y+rise,position.z+direction*distance);
 world.camera.position.x=THREE.MathUtils.clamp(world.camera.position.x,-10,10);
 world.camera.position.y=THREE.MathUtils.clamp(world.camera.position.y,1.6,4.3);
 world.camera.position.z=THREE.MathUtils.clamp(world.camera.position.z,-12,11);
 world.camera.lookAt(focus);labControls.syncFromCamera();
}
function frameOnSwarm(positions:THREE.Vector3[]){
 const minX=Math.min(...positions.map(position=>position.x)),maxX=Math.max(...positions.map(position=>position.x)),minZ=Math.min(...positions.map(position=>position.z)),maxZ=Math.max(...positions.map(position=>position.z));
 const centerX=(minX+maxX)/2,centerZ=(minZ+maxZ)/2,spanX=maxX-minX,spanZ=maxZ-minZ,fov=THREE.MathUtils.degToRad(world.camera.fov),horizontalTangent=Math.tan(fov/2)*world.camera.aspect;
 const widthDistance=spanX/Math.max(.1,2*horizontalTangent),projectedHeight=2.6+spanZ*.26,heightDistance=projectedHeight/Math.max(.1,2*Math.tan(fov/2));
 const minDistance=innerWidth<760?8.4:7,distance=Math.max(minDistance,spanZ/2+widthDistance+1.1,heightDistance+1),focus=new THREE.Vector3(centerX,1.35,centerZ);
 world.camera.position.set(centerX,focus.y+distance*.26,centerZ+distance);world.camera.lookAt(focus);labControls.syncFromCamera();
}
function focusScientist(id:string,fromAutoPin=false){
 const person=world.agentPositions?.().find(agent=>agent.id===id);if(!person)return;
 const focus=person.position.clone().add(new THREE.Vector3(0,2.1,0));
 if(!walking){
  frameOnScientist(person.position,fromAutoPin);
 }else if(walking){
  world.camera.lookAt(focus);const rotation=new THREE.Euler().setFromQuaternion(world.camera.quaternion,'YXZ');yaw=rotation.y;pitch=rotation.x;
 }
 pinBubble(id,fromAutoPin);
}
$('proximity').addEventListener('click',e=>{const target=e.target as Element,button=target.closest?.<HTMLElement>('[data-bubble-close],[data-bubble-expand],[data-bubble-more]');if(button?.hasAttribute('data-bubble-close')){dismissBubble();return;}if(button?.hasAttribute('data-bubble-more')){if(bubbleAgent)talk(bubbleAgent);return;}if(button?.hasAttribute('data-bubble-expand')){expandBubble();return;}if(!bubbleExpanded)expandBubble();});
$('status-strip').addEventListener('click',e=>{const tile=(e.target as Element).closest?.<HTMLButtonElement>('.status-tile[data-agent]');if(tile)focusScientist(tile.dataset.agent!);});
inspector.addEventListener('toggle',async e=>{const details=e.target as HTMLDetailsElement;if(!(details instanceof HTMLDetailsElement)||!details.open||!details.dataset.artifact||details.dataset.loaded)return;details.dataset.loaded='1';const pre=details.querySelector('pre')!;try{const r=await fetch(details.dataset.artifact);if(!r.ok)throw new Error(String(r.status));const text=await r.text();pre.textContent=text.length>200000?text.slice(0,200000)+'\n… truncated':text||'(empty)';}catch{pre.textContent='This artifact was not exported with the recording.';}},true);
$('close-inspector').onclick=()=>inspector.close();inspector.addEventListener('close',()=>{inspected=null;});$('close-results').onclick=()=>resultsDialog.close();$('open-results').onclick=()=>{playing=false;renderControls();unlock();renderResultsPanel();resultsDialog.showModal();updateDockAutoCollapse();};
$('open-about').onclick=()=>{
 const opening=currentDrawer!=='about-drawer',drawer=$('about-drawer') as HTMLElement,button=$('open-about');
 unlock();closeDrawer();if(!opening)return;
 playing=false;renderControls();
 drawer.innerHTML=aboutHtml(introConfig as IntroConfig,researchTrail(recording),esc,recording?.manifest||null,recording);
 drawer.hidden=false;currentDrawer='about-drawer';drawer.querySelector<HTMLButtonElement>('[data-close-drawer]')!.onclick=closeDrawer;
 button.setAttribute('aria-expanded','true');updateDockAutoCollapse();
};
$('results-content').addEventListener('click',e=>{
 if((e.target as Element).closest('[data-open-evidence]')){resultsDialog.close();$('open-console').click();}
});
$('close-conversation').onclick=()=>{conversation.close();renderer.domElement.focus();};$('close-console').onclick=()=>evidence.close();$('close-guide').onclick=()=>guide.close();
$('open-console').onclick=()=>{playing=false;renderControls();unlock();closeDrawer();renderEvidence();evidence.showModal();updateDockAutoCollapse();};$('open-guide').onclick=()=>{playing=false;renderControls();unlock();closeDrawer();guide.showModal();updateDockAutoCollapse();};
$('play').onclick=()=>{if(!recording)return;if(!playing){conversation.close();if(!recording.manifest.live&&tick>=recording.manifest.totalTicks){const startTick=STATIC_SITE&&playbackMode==='highlights'?firstScientistTick(recording):0;highlightElapsed=0;seek(startTick);}if(walking)setWalking(false);}playing=!playing;renderControls();};
$('camera-mode').onclick=()=>setWalking(!walking);
$('collapse-bar').onclick=()=>{barManuallyToggled=true;setBarCollapsed(!document.body.classList.contains('bar-collapsed'));};
setBarCollapsed(compactDock(innerWidth,innerHeight));updateDockAutoCollapse();
window.addEventListener('resize',()=>{if(!barManuallyToggled)setBarCollapsed(compactDock(innerWidth,innerHeight));updateDockAutoCollapse();});
 $('timeline').oninput=()=>{playing=false;playbackMode='full';$<HTMLSelectElement>('replay-mode').value='full';seek(Number($<HTMLInputElement>('timeline').value));announcedTick=tick;finishCoach('scrub');};
$<HTMLSelectElement>('replay-mode').onchange=()=>{playbackMode=$<HTMLSelectElement>('replay-mode').value as 'highlights'|'full';const startTick=recording&&STATIC_SITE&&playbackMode==='highlights'?firstScientistTick(recording):0;tick=startTick;highlightElapsed=0;highlightList=recording?highlightStops(recording,startTick):[];seek(startTick);playing=!!recording;renderControls();};
$('go-live').onclick=()=>{if(!recording?.manifest.live)return;conversation.close();if(walking)setWalking(false);playing=true;seek(recording.manifest.totalTicks);announce();};
$('pace').onchange=()=>{pace=Number($<HTMLSelectElement>('pace').value);};
/** Precompute illustrative paths once, so a seek always places each person identically. */
function buildPoses(data:Recording){presence=buildReplayPresence(data);poseFrames=buildReplayPoses(data,world.bounds,world.colliders);}
function posesAt(){const before=frameAt(poseFrames,tick);if(!before)return new Map();if(tick<=0)return before.positions;const next=poseFrames[poseFrames.indexOf(before)+1];if(!next)return before.positions;const t=(tick-before.tick)/(next.tick-before.tick);return new Map([...before.positions].map(([id,p])=>{const q=next.positions.get(id)||p;const moving=Math.hypot(q.x-p.x,q.z-p.z)>.005;return[id,{atTable:p.atTable,atLab:p.atLab,x:p.x+(q.x-p.x)*t,z:p.z+(q.z-p.z)*t,heading:moving?Math.atan2(q.x-p.x,q.z-p.z):undefined,moving}];}));}
async function attachRecording(id:string,preserve=false){
 const generation=++loadGeneration;
  if(!preserve){playing=false;finaleAutoOpened=false;resultsDialog.close();$('connection').textContent='LOADING RUN';}
 try{
  const data=await loadRecording(request,id,recordingManifests.find(m=>m.id===id)?.contentVersion||'2',recording);
  if(generation!==loadGeneration)return;
  const savedTick=tick,wasFollowing=isFollowing();
  recording=data;renderProvenanceBadge();prepareAliases(data);data.frames.sort((a,b)=>a.tick-b.tick);data.events.sort((a,b)=>a.tick-b.tick);buildPoses(data);renderWhosWho();
  $<HTMLInputElement>('timeline').max=String(data.manifest.totalTicks);$<HTMLInputElement>('timeline').disabled=false;$<HTMLButtonElement>('play').disabled=false;
  $('replay-title').textContent=aliasText(taskTitle(data.manifest));
  $('overview-text').textContent=data.manifest.description||(data.manifest.live?'Research as it happens. Follow the swarm from inside the lab.':'Research as it happened. Explore the supplied recording.');
  $('provenance').textContent=data.manifest.description||(data.manifest.live?'Live swarm run':'Source recording · read-only replay');
  $('timeline-markers').innerHTML=data.events.filter(e=>/experiment.finished|discovery|study.completed|award/.test(e.type)).map(e=>`<i${/discovery|award/.test(e.type)?' class="best"':''} style="left:${e.tick/Math.max(1,data.manifest.totalTicks)*100}%"></i>`).join('');
  $<HTMLSelectElement>('run-picker').value=id;
  if(!preserve)setWalking(false);
  const target=preserve?reloadTick(savedTick,data.manifest,wasFollowing):openingTick(data.manifest);
  if(!preserve){playing=experienceStarted;announcedTick=target;}
  seek(target);if(preserve&&wasFollowing)announce();else if(!preserve)announcedTick=tick;renderControls();
  if(STATIC_SITE&&!preserve){staticRecordingReady=true;maybeStartStaticExperience();}
  else if(!preserve)startExperience();
  const url=new URL(location.href);url.searchParams.set('recording',id);url.searchParams.delete('run');history.replaceState(null,'',url);
 }catch(e){
  $('connection').textContent='ARCHIVE UNAVAILABLE';toast((e as Error).message);
  if(STATIC_SITE&&!preserve){staticRecordingReady=true;maybeStartStaticExperience();}
 }
}
async function loadRecordings(){try{const items=sortedRecordings(await request<RecordingManifest[]>('/recordings'));recordingManifests=items;$('run-picker').innerHTML=pickerOptions(items,esc)||'<option>No artificial scientist swarm recordings available</option>';if(recording)$<HTMLSelectElement>('run-picker').value=recording.manifest.id;else if(items.length){const selected=new URL(location.href).searchParams.get('recording');await attachRecording(initialRecordingId(items,selected)!);}else if(!items.length){$('connection').textContent='NO SWARM RECORDINGS';$('replay-title').textContent='No artificial scientist swarm recordings available';}}catch(e){$('connection').textContent='ARCHIVE UNAVAILABLE';$('replay-title').textContent='Archive unavailable';toast((e as Error).message);}}
$('refresh-runs').onclick=()=>loadRecordings();
async function loadLaunch(){if(STATIC_SITE)return;try{const l=(await request<Capabilities>('/health')).openaiLaunch;$('openai-launch').hidden=!l?.enabled;const b=$<HTMLButtonElement>('launch-openai');b.disabled=!l?.available||!!l?.running;b.textContent=l?.running?`Live run in progress (${l.current})`:`Start live Ig Nobel run (Sol + Luna, up to $${l?.maxCostUsd??20})`;}catch{$('openai-launch').hidden=true;}}
$('launch-openai').onclick=async()=>{if(!confirm('Start a live Sol + Luna Ig Nobel run? It calls the OpenAI API and may spend up to the server cost cap.'))return;try{const r=await request<{name:string}>('/openai-runs',{method:'POST',body:JSON.stringify({rounds:3})});toast(`Started ${r.name}; it appears in RUNS once round 1 begins.`);}catch(e){toast((e as Error).message);}loadLaunch();};
loadLaunch();if(!STATIC_SITE)setInterval(loadLaunch,10000);$('run-picker').onchange=()=>attachRecording($<HTMLSelectElement>('run-picker').value);
let polling=false;
if(STATIC_SITE){$('refresh-runs').hidden=true;document.body.classList.add('static-site');}
else setInterval(async()=>{if(polling)return;polling=true;const current=recording,generation=loadGeneration;try{await loadRecordings();const updated=recordingManifests.find(m=>m.id===current?.manifest.id);if(current&&generation===loadGeneration&&recording===current&&recordingChanged(current.manifest,updated))await attachRecording(current.manifest.id,true);}finally{polling=false;}},4000);
function blocked(x:number,z:number){const r=.34,b=world.bounds;return x<b.minX+r||x>b.maxX-r||z<b.minZ+r||z>b.maxZ-r||world.colliders.some(c=>x>c.minX-r&&x<c.maxX+r&&z>c.minZ-r&&z<c.maxZ+r);}
for(const b of document.querySelectorAll<HTMLElement>('[data-move]')){b.onpointerdown=e=>{b.setPointerCapture(e.pointerId);pressed.add(b.dataset.move!);};for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,()=>pressed.delete(b.dataset.move!));}
window.addEventListener('keydown',e=>{if(e.code==='Escape'){if(bubbleExpanded){bubbleExpanded=false;bubbleRenderKey='';updateDockAutoCollapse();return;}if(bubblePinned||bubbleAgent){dismissBubble();unlock();return;}conversation.close();closeDrawer();unlock();}if(modal()||(e.target instanceof HTMLElement&&e.target.closest('input,select,textarea,[contenteditable=true]')))return;if(e.code==='KeyE'&&!e.repeat&&bubbleAgent){e.preventDefault();expandBubble();return;}if(e.code==='Enter'&&bubbleAgent&&!(e.target instanceof HTMLElement&&e.target.closest('button,a'))){e.preventDefault();expandBubble();}if(['KeyW','KeyA','KeyS','KeyD',...(!walking?['KeyQ','KeyE']:[]),'ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.code))e.preventDefault();pressed.add(e.code);});window.addEventListener('keyup',e=>pressed.delete(e.code));window.addEventListener('blur',()=>{pressed.clear();drag=false;pointerStart=null;playing=false;renderControls();});
try{
 world=createWorld();growStarted=performance.now();growActive=true;document.body.classList.add('world-growing');world.grow?.(0);renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5));renderer.setSize(innerWidth,innerHeight);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=world.exposure??1;renderer.outputColorSpace=THREE.SRGBColorSpace;$('world').appendChild(renderer.domElement);renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Lab viewport. Pause and walk inside to meet the researchers.');world.camera.rotation.order='YXZ';
 labControls=new LabCameraRig(world.camera);
 setWalking(false);
 renderer.domElement.onclick=()=>{if(walking&&!modal()&&!conversation.open&&!bubblePinned)try{renderer.domElement.requestPointerLock?.()?.catch(()=>{});}catch{}};
renderer.domElement.onpointerdown=e=>{if(modal())return;drag=true;lastPointer={x:e.clientX,y:e.clientY};pointerStart={x:e.clientX,y:e.clientY,canvas:e.target===renderer.domElement,pointerType:e.pointerType};if(!walking)renderer.domElement.setPointerCapture(e.pointerId);};renderer.domElement.onpointermove=e=>{if(!drag||document.pointerLockElement||modal())return;const dx=e.clientX-lastPointer.x,dy=e.clientY-lastPointer.y;if(walking){({yaw,pitch}=mouseLook(yaw,pitch,dx,dy));}else labControls.dragBy(dx,dy);lastPointer={x:e.clientX,y:e.clientY};};renderer.domElement.onpointercancel=()=>{drag=false;pointerStart=null;};window.addEventListener('pointerup',e=>{if(pointerStart?.canvas&&Math.hypot(e.clientX-pointerStart.x,e.clientY-pointerStart.y)<10&&!modal()){const camera=world.camera;camera.updateMatrixWorld();let nearest:{id:string;distance:number}|null=null;for(const person of world.agentPositions?.()||[]){if(!people().some(a=>a.id===person.id))continue;const point=person.position.clone().add(new THREE.Vector3(0,2.35,0)),local=point.clone().applyMatrix4(camera.matrixWorldInverse);if(local.z>=0)continue;point.project(camera);const x=(point.x+1)*innerWidth/2,y=(1-point.y)*innerHeight/2,distance=Math.hypot(e.clientX-x,e.clientY-y),threshold=pointerStart.pointerType==='touch'?84:64;if(distance<threshold&&(!nearest||distance<nearest.distance))nearest={id:person.id,distance};}if(nearest)focusScientist(nearest.id);else{bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleRenderKey='';updateDockAutoCollapse();}}pointerStart=null;drag=false;});document.addEventListener('mousemove',e=>{if(document.pointerLockElement&&walking&&!modal()){({yaw,pitch}=mouseLook(yaw,pitch,e.movementX,e.movementY));}});
 const fit=()=>{world.camera.aspect=innerWidth/innerHeight;world.camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);};window.onresize=fit;visualViewport?.addEventListener('resize',fit);addEventListener('orientationchange',fit);
 let previous=performance.now(),lastTick=-1;const direction=new THREE.Vector3();
 function frame(){requestAnimationFrame(frame);const now=performance.now(),dt=Math.min((now-previous)/1000,.1);previous=now;
  if(playing&&recording){
   if(playbackMode==='highlights'){
    highlightElapsed+=dt*1000*4/pace;const duration=75_000*4/pace;tick=highlightTickAt(highlightList,highlightElapsed,duration);
    if(highlightElapsed>=duration){tick=recording.manifest.totalTicks;playing=false;}
   }else tick=advanceTick(tick,dt,pace,recording.manifest.totalTicks,recording.manifest.tickDurationMs);
   if(playbackMode==='full'&&!playbackContinues(recording.manifest,tick))playing=false;
   if(Math.floor(tick)!==lastTick){seek(tick);lastTick=Math.floor(tick);announce();}else renderControls();
  }
  const camera=world.camera;
  if(!walking&&!modal()&&!conversation.open)labControls.update(dt,pressed);
  if(walking&&!modal()){({yaw,pitch}=keyboardLook(yaw,pitch,dt,pressed));const forward=Number(pressed.has('KeyW'))-Number(pressed.has('KeyS')),side=Number(pressed.has('KeyD'))-Number(pressed.has('KeyA'));if(forward||side){const speed=((pressed.has('ShiftLeft')||pressed.has('ShiftRight'))?5.6:3.5)*dt/Math.hypot(forward,side),dx=(-Math.sin(yaw)*forward+Math.cos(yaw)*side)*speed,dz=(-Math.cos(yaw)*forward-Math.sin(yaw)*side)*speed;if(!blocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;if(!blocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;}camera.rotation.set(pitch,yaw,0,'YXZ');}
  const positions=posesAt(),present=people(),captions=discussionAt(recording?.events||[],tick,present,aliasText,100);world.update(tick*(recording?.manifest.tickDurationMs||700)/1000,{progress:snapshot?.progress||0,boredom:0,running:playing,replay:true,finale:finaleReached(recording,tick),reducedMotion:reducedMotion,agents:present.map(a=>({...a,boredom:a.boredom==null?null:boredomPercent(a.boredom),regime:a.boredomSpectrum?.regime,state:positions.get(a.id)?.atLab?'working':a.state,stationId:positions.get(a.id)?.atTable?'culture':replayStation({...a,state:'working',activity:'experimenting'}),discussionBrief:positions.get(a.id)?.atTable?captions.get(a.id)?.brief:undefined,discussionPeers:captions.get(a.id)?.peers,ideaBrief:ideaBrief(aliasText(a.lastIdea||a.lastQuestion||a.lastObservation||'')),position:finaleReached(recording,tick)?undefined:positions.get(a.id)}))});
  if(experienceStarted&&!coachId&&present.length&&!modal())showNextCoach();
  $('coach-mark').hidden=modal()||!coachId||coachId==='done';positionCoach();
  if(growActive){const progress=(now-growStarted)/(reducedMotion?300:STATIC_SITE?1600:2200);world.grow?.(Math.min(1,progress));if(progress>=1){growActive=false;document.body.classList.remove('world-growing');}}
  const previousNear=nearAgent;if(walking&&!modal()){camera.getWorldDirection(direction);direction.y=0;direction.normalize();const candidates=(world.agentPositions?.()||[]).map(a=>{const delta=a.position.clone().sub(camera.position);delta.y=0;const distance=delta.length();return {id:a.id,distance,facing:distance?delta.normalize().dot(direction):1};});nearAgent=pickNear(candidates,nearAgent);}else nearAgent='';
  if(bubbleDismissedAgent&&nearAgent!==bubbleDismissedAgent)bubbleDismissedAgent='';
  const visibleBubble=bubblePinned?bubbleAgent:nearAgent===bubbleDismissedAgent?'':nearAgent;
  if(visibleBubble!==bubbleAgent){bubbleAgent=visibleBubble;bubbleExpanded=false;bubbleRenderKey='';}
  if(previousNear!==nearAgent&&!bubblePinned&&nearAgent)bubbleDismissedAgent='';
  renderBubble();renderer.render(world.scene,camera);positionConversation();
 }
 renderHUD();frame();
 if(STATIC_SITE)setTimeout(()=>{staticLoaderMinimumElapsed=true;maybeStartStaticExperience();},1500);
 else{$('loading').classList.add('loaded');setTimeout(()=>$('loading').hidden=true,380);}
 loadRecordings();
}catch(error){console.error(error);$('loading').innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>';}
