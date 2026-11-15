import * as THREE from 'three';
import {LabCameraRig,mouseLook,keyboardLook} from './engine/labCamera';
import {ideaBrief} from './engine/ideaBrief';
import './style.css';
import {createWorld} from './variants/lab';
import {request} from './engine/api';
import {STATIC_SITE,staticPath} from './engine/staticSite';
import {introHtml,researchTrail,researchResults,type IntroConfig} from './engine/intro';
import introConfig from '../data/pages/intro.json';
import {nextCoach} from './engine/introProgress';
import {sortedRecordings,recordingCopy,swarmConnectionLabel,playbackContinues,recordingChanged,frameAt,advanceTick,eventsThrough,loadRecording,anonymizeExcerpt,type Recording,type RecordingManifest,type ReplayEvent} from './engine/replay';
import {boredomColor,boredomPercent,boredomComponents,regimeLabel,latestBoredom} from './engine/boredom';
import {agentIdentity,humanizeActivity,humanizeRole,eventCaption,eventLabel,teamRoster,meaningfulMessage,agentDescriptor,descriptorText,whosWho} from './engine/agentIdentity';
import {openingTick,reloadTick,following,liveButton,eventsAfter} from './engine/liveFollow';
import {prefersReducedMotion} from './engine/affect';
import {momentsBetween,type Moment} from './engine/moments';
import {scoreSeries,scoreChartSvg,outcomeOf,type ResultRow} from './engine/scoreChart';
import {runStatus,taskTitle,metricLabel,publishWarning,pickerOptions} from './engine/runInfo';
import type {RunSnapshot} from './engine/contract';
import type {LabWorld,AgentView} from './engine/types';
import {buildReplayPoses,type PoseFrame} from './engine/replayMotion';
import {buildReplayPresence,replayPeople,replayStation} from './engine/replayPresence';
import {discussionAt} from './engine/discussion';
import {agentNow,nowCardHtml,eventWhy} from './engine/nowCard';
import {experimentDetail,sourceCards,studyCards,dialogueThrough,type InspectEvent} from './engine/inspect';
import {experimentHtml,sourceCardsHtml,studyCardsHtml,dialogueHtml,type ViewContext} from './engine/inspectView';
import {bubbleContent,bubbleHtml,pickNear,sparklinePath,tileMetrics} from './engine/glance';
import {provenanceBadge} from './engine/provenanceBadge';
const $=<T extends HTMLElement=HTMLElement>(id:string)=>document.getElementById(id) as T;
const rawEsc=(v:unknown)=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const esc=(v:unknown)=>rawEsc(aliasText(String(v??'')));
const evidence=$<HTMLDialogElement>('console'),conversation=$<HTMLDialogElement>('conversation'),guide=$<HTMLDialogElement>('guide'),inspector=$<HTMLDialogElement>('inspector');
let world:LabWorld,renderer:THREE.WebGLRenderer,labControls:LabCameraRig,recording:Recording|null=null,snapshot:RunSnapshot|null=null;
let recordingManifests:RecordingManifest[]=[];
let tick=0,playing=false,walking=false,pace=1,currentDrawer:string|null=null,selectedAgent='',nearAgent='',bubbleAgent='',bubblePinned=false,bubbleExpanded=false,bubbleDismissedAgent='',bubbleRenderKey='',loadGeneration=0,experienceStarted=false,growActive=false,growStarted=0,coachId='';
let yaw=0,pitch=0,drag=false,lastPointer={x:0,y:0},pointerStart:{x:number;y:number;canvas:boolean}|null=null,toastTimer:ReturnType<typeof setTimeout>,momentTimer:ReturnType<typeof setTimeout>,announcedTick=0;
let displayAliases=new Map<string,string>();
const reducedMotion=prefersReducedMotion();
function aliasText(value:string){return anonymizeExcerpt(value,displayAliases);}
function renderProvenanceBadge(){const badge=provenanceBadge(recording?.manifest),el=$('provenance-badge'),aria=[badge.label,...badge.chips].join(' · '),html=`<span class="provenance-badge-label">${esc(badge.label)}</span>${badge.chips.map(chip=>`<span class="provenance-badge-chip">${esc(chip)}</span>`).join('')}`;el.dataset.tone=badge.tone;el.setAttribute('aria-label',aria);if(el.innerHTML!==html)el.innerHTML=html;}
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
function rowMeter(a:ArchivedAgent){if(identityOf(a).staff)return '';const b=a.boredom==null?null:boredomPercent(a.boredom),r=regimeLabel(a.boredomSpectrum?.regime);return `<span class="row-meter" role="meter" aria-label="${esc(a.name)} boredom" aria-valuemin="0" aria-valuemax="100"${b==null?'':` aria-valuenow="${Math.round(b)}"`}><i style="width:${b??0}%;background:${b==null?'transparent':boredomColor(b)}"></i><b>${b==null?'not measured':`bored ${Math.round(b)}%`}</b>${r.label?`<em class="regime-chip" data-tone="${r.tone}">${esc(r.label)}</em>`:''}</span>`;}
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
function modal(){return evidence.open||guide.open||inspector.open||currentDrawer!==null;}
function closeDrawer(){if(currentDrawer)$(currentDrawer).hidden=true;currentDrawer=null;document.querySelectorAll('[data-drawer]').forEach(b=>b.setAttribute('aria-expanded','false'));}
for(const button of document.querySelectorAll<HTMLElement>('[data-drawer]'))button.onclick=()=>{const id=button.dataset.drawer!,open=currentDrawer!==id;unlock();closeDrawer();if(open){currentDrawer=id;$(id).hidden=false;button.setAttribute('aria-expanded','true');}};
for(const button of document.querySelectorAll<HTMLElement>('[data-close-drawer]'))button.onclick=closeDrawer;
function setWalking(value:boolean){walking=value;bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleDismissedAgent='';bubbleRenderKey='';unlock();world.setOverview?.(!value);$('crosshair').hidden=!value;document.body.classList.toggle('playing',value);if(value){playing=false;world.camera.position.set(0,1.69,9.5);const rotation=new THREE.Euler().setFromQuaternion(world.camera.quaternion,'YXZ');yaw=rotation.y;pitch=rotation.x;}else{const orientation=world.camera.quaternion.clone();labControls.reset();world.camera.quaternion.copy(orientation);labControls.syncFromCamera();}renderControls();renderStatusStrip();}
function renderControls(){
 if(recording){const m=recording.manifest,copy=recordingCopy(m),status=runStatus(m);$('overview-eyebrow').textContent=copy.eyebrow;$('run-callout').textContent=copy.callout;$('replay-kicker').textContent=copy.kicker;$('connection').textContent=m.sample===false?(status.status==='live'&&!isFollowing()?'LIVE SWARM · VIEWING THE PAST':swarmConnectionLabel({...m,stale:status.status==='stale'})):m.description?.includes('mock')?'RECORDED SAMPLE · MOCK PRIOR-ART':'RECORDED REPLAY';renderRunMeta();}
 const live=liveButton(recording?.manifest,tick,playing,recording?.events||[]);$('go-live').hidden=live.hidden;$('go-live').textContent=live.label;$('go-live').classList.toggle('at-edge',live.atEdge);$('go-live').setAttribute('aria-label',live.atEdge?'Following live':'Jump to the live edge');
 $('play').textContent=playing?'Ⅱ Pause':'▶ Play';$('play').setAttribute('aria-label',playing?'Pause':'Play');
 $('camera-mode').textContent=walking?'Lab view ↗':'Walk inside ↗';$<HTMLButtonElement>('camera-mode').disabled=!recording||playing;
 $<HTMLInputElement>('timeline').value=String(tick);$('tick-label').textContent=`Tick ${Math.floor(tick)} / ${recording?.manifest.totalTicks||0}`;
 $<HTMLInputElement>('timeline').setAttribute('aria-valuetext',`Tick ${Math.floor(tick)} of ${recording?.manifest.totalTicks||0}`);
 const e=recording&&frameAt(recording.events,tick) as InspectEvent|undefined|null,caption=$('activity-caption'),eid=e?.refs?.experiment_id;caption.textContent=e?aliasText(eventCaption({...e,message:eventWhy(e,whyContext())||e.message},agentName(e.agentId,''))):'The run begins here';if(eid){caption.dataset.experiment=eid;caption.title='Inspect this experiment';caption.tabIndex=0;caption.setAttribute('role','button');}else{delete caption.dataset.experiment;caption.removeAttribute('title');caption.removeAttribute('tabindex');caption.removeAttribute('role');}
}
function renderRunMeta(){if(!recording)return;const m=recording.manifest,status=runStatus(m),regime=regimeLabel(snapshot?.regime),rounds=m.time?.rounds||snapshot?.config.rounds||0,warning=publishWarning(m);
 $('run-meta').innerHTML=[`<span class="status-chip" data-status="${status.status}" title="${esc(status.detail)}">${esc(status.label)}</span>`,`<span class="meta-task">${esc(taskTitle(m))}</span>`,metricLabel(m.metric||snapshot?.metric)?`<span>${esc(metricLabel(m.metric||snapshot?.metric))}</span>`:'',m.proxy_note?`<span class="proxy-chip" title="Benchmark caveat from the task definition">Proxy: ${esc(m.proxy_note)}</span>`:'',snapshot?.round?`<span>Round ${snapshot.round}${rounds?` / ${rounds}`:''}</span>`:'',regime.label&&m.sample===false?`<span class="regime-chip" data-tone="${regime.tone}" title="Swarm boredom ${Math.round(boredomPercent(snapshot?.boredom||0))}%">${esc(regime.label)} · ${Math.round(boredomPercent(snapshot?.boredom||0))}%</span>`:'',status.status==='stale'?`<span class="warn-chip">${esc(status.detail)}</span>`:'',warning?`<span class="warn-chip">${esc(warning)}</span>`:''].filter(Boolean).join('');}
function seek(value:number){if(!recording)return;tick=Math.max(0,Math.min(recording.manifest.totalTicks,value));snapshot=frameAt(recording.frames,tick)?.snapshot||null;renderControls();renderHUD();if(evidence.open)renderEvidence();if(conversation.open)renderConversation();if(inspector.open)renderInspector();}
function renderHUD(){
 $('agent-count').textContent=`${people().length} AGENTS`;
 $('agent-list').innerHTML=teamRoster(snapshot?.agents as ArchivedAgent[]||[],people()).map(a=>`<button class="agent-row" data-agent="${esc(a.id)}"${a.standby?' disabled data-standby="true"':''}>${avatar(a)}<span><strong>${esc(a.name)}</strong><small>${agentLine(a)}</small>${rowMeter(a)}</span><i></i></button>`).join('')||'<p class="empty">No artificial scientists are active in the artificial scientist swarm.</p>';
 $('run-label').textContent=snapshot?`ROUND ${snapshot.round}${snapshot.config.rounds?` / ${snapshot.config.rounds}`:''} · BEST ${snapshot.metric.name.replaceAll('_',' ')} ${snapshot.value==null?'—':snapshot.value.toFixed(4)} · ${metricLabel(snapshot.metric).split(' ').slice(-3).join(' ')}`:'Waiting for the first events from the artificial scientist swarm';
 renderStatusStrip();
}
function renderStatusStrip(){
 const strip=$('status-strip');if(!recording||!snapshot||walking||document.body.classList.contains('prestart')){strip.hidden=true;strip.innerHTML='';return;}
 const roster=people() as ArchivedAgent[],results=snapshot.results as (ResultRow&{agentId?:string})[],metric=snapshot.metric;
 const candidates=results.filter(r=>outcomeOf(r.status,r.kind)!=='baseline'&&typeof r.value==='number'&&Number.isFinite(r.value));
 const direction=metric.name==='replicated_findings'?'maximize':metric.direction;
 const runBest=candidates.length?(direction==='maximize'?Math.max(...candidates.map(r=>r.value!)):Math.min(...candidates.map(r=>r.value!))):snapshot.value;
 const baseline=results.find(r=>outcomeOf(r.status,r.kind)==='baseline'&&typeof r.value==='number')?.value??null;
 strip.innerHTML=roster.map(a=>{const m=tileMetrics(results,a.id,a.name,metric,runBest,baseline),pct=m.progress==null?0:Math.round(m.progress*100),activity=humanizeActivity(a.activity||a.state)||'waiting';
  return `<button class="status-tile" data-agent="${esc(a.id)}" aria-label="Focus ${esc(a.name)}: ${m.best==null?'no score':`best ${esc(m.best)}`}, ${m.kept} kept, ${m.discarded} discarded, ${m.crashed} crashed"><span class="status-tile-head"><strong>${esc(a.name)}</strong><span class="tile-activity">${esc(activity)}</span></span>${rowMeter(a)}<span class="tile-progress" role="meter" aria-label="${esc(a.name)} progress toward run best" aria-valuemin="0" aria-valuemax="100"${m.progress==null?'':` aria-valuenow="${pct}"`}><i style="width:${pct}%"></i></span><span class="tile-results"><b>${m.best==null?'best —':`best ${esc(m.best)}`}</b><span class="kept" title="Kept">✓ ${m.kept}</span><span class="discarded" title="Discarded">○ ${m.discarded}</span><span class="crashed" title="Crashed">× ${m.crashed}</span></span><svg class="tile-spark" viewBox="0 0 80 24" aria-label="Recent results"><path d="${sparklinePath(m.spark,80,20)}"/></svg></button>`;
 }).join('');
 strip.hidden=!roster.length;
}
function renderBubble(){
 const element=$('proximity');
 if(!bubbleAgent){element.hidden=true;return;}
 const agent=people().find(a=>a.id===bubbleAgent) as ArchivedAgent|undefined;
 if(!agent){element.hidden=true;return;}
 const key=`${bubbleAgent}|${Math.floor(tick)}|${bubbleExpanded}`;
 if(key!==bubbleRenderKey){
  const content=bubbleContent({agent,recording,tick,metric:snapshot?.metric,best:snapshot?.value??null,agentName});
  element.innerHTML=bubbleHtml(content,bubbleExpanded,esc);
  if(bubbleExpanded){const now=agentNow(recording,agent.id,agent.activity||agent.state,tick,whyContext()),nowTarget=element.querySelector<HTMLElement>('[data-bubble-now]');if(nowTarget)nowTarget.innerHTML=nowCardHtml(now,{...whyContext(),esc},snapshot?.metric);}
  bubbleRenderKey=key;
 }
 element.hidden=false;
 positionBubble();
}
function positionBubble(){
 const element=$('proximity');if(element.hidden)return;
 const person=world.agentPositions?.().find(a=>a.id===bubbleAgent);if(!person){element.hidden=true;return;}
 const point=person.position.clone().add(new THREE.Vector3(0,2.35,0));
 world.camera.updateMatrixWorld();const local=point.clone().applyMatrix4(world.camera.matrixWorldInverse);
 if(local.z>=0){element.style.visibility='hidden';return;}
 point.project(world.camera);
 const x=(point.x+1)*innerWidth/2,y=(1-point.y)*innerHeight/2,rect=element.getBoundingClientRect(),margin=12;
 element.style.visibility='visible';element.style.left=`${THREE.MathUtils.clamp(x-rect.width/2,margin,Math.max(margin,innerWidth-rect.width-margin))}px`;
 element.style.top=`${THREE.MathUtils.clamp(y-rect.height-22,margin,Math.max(margin,innerHeight-rect.height-margin))}px`;
}
function pinBubble(id:string){bubbleAgent=id;bubblePinned=true;bubbleExpanded=false;bubbleDismissedAgent='';bubbleRenderKey='';finishCoach('scientist');}
function seenCoaches(){try{return ['scientist','scrub'].filter(id=>localStorage.getItem(`lab.coach.${id}`));}catch{return [];}}
function showNextCoach(){
 const next=nextCoach(seenCoaches());
 if(!next){coachId='done';$('coach-mark').hidden=true;return;}
 coachId=next;try{localStorage.setItem(`lab.coach.${next}`,'1');}catch{}
 const message=next==='scientist'?'Tap a scientist':'Drag to scrub';
 $('coach-mark').dataset.coach=next;$('coach-mark').innerHTML=`<span>${message}</span><button type="button" data-coach-dismiss aria-label="Dismiss tip">×</button>`;$('coach-mark').hidden=false;
}
function finishCoach(id:string){if(coachId!==id)return;coachId='';$('coach-mark').hidden=true;showNextCoach();}
function startExperience(){
 if(experienceStarted)return;
 experienceStarted=true;document.body.classList.remove('prestart');$('prestart').hidden=true;$('intro').hidden=true;
 if(recording){if(recording.manifest.live)seek(recording.manifest.totalTicks);else if(tick>=recording.manifest.totalTicks)seek(0);playing=true;announcedTick=tick;}
 renderControls();renderHUD();renderer.domElement.focus();
 if(people().length)showNextCoach();
}
function skipGrow(){if(!growActive)return;growActive=false;world.grow?.(1);document.body.classList.remove('world-growing');}
window.addEventListener('pointerdown',skipGrow,{capture:true});window.addEventListener('keydown',skipGrow,{capture:true});
$('start-swarm').onclick=startExperience;
$('coach-mark').onclick=e=>{if((e.target as Element).closest('[data-coach-dismiss]'))finishCoach(coachId);};
function graph(){if(!recording||!snapshot)return '<p>No measurements yet.</p>';const counted=recording.manifest.swarm==='ignobel'&&snapshot.metric.name==='replicated_findings';return scoreChartSvg(scoreSeries(snapshot.results as ResultRow[],recording.frames,tick,!counted),snapshot.metric,tick,esc);}
function resultMeasurement(r:{value:number|null;effectSize?:number|null;pValue?:number|null;reward?:number|null}){const fields=[r.effectSize==null?'':`Effect ${esc(r.effectSize)}`,r.pValue==null?'':`p = ${esc(r.pValue)}`,r.reward==null?'':`Reward ${esc(r.reward)}`].filter(Boolean);return fields.length?fields.join('<br>'):esc(r.value??'—');}
function renderEvidence(){const s=snapshot;if(!s){$('console-content').innerHTML='<h2>No evidence yet.</h2>';return;}$('console-content').innerHTML=`<h2>The question so far.</h2><p>Source evidence through tick ${Math.floor(tick)}. Every candidate is plotted: kept, discarded and crashed, with the confirmed best so far. Later results stay hidden until playback reaches them.</p>${recording?.manifest.proxy_note?`<p class="proxy-note"><b>About this benchmark:</b> ${esc(recording.manifest.proxy_note)}</p>`:''}${graph()}<div class="table-scroll"><table><thead><tr><th>ROUND</th><th>AGENT</th><th>RESULT</th><th>MEASUREMENT</th></tr></thead><tbody>${s.results.slice().reverse().map(r=>`<tr${(r as {id?:string}).id?` class="inspectable" data-experiment="${esc((r as {id?:string}).id)}" tabindex="0"`:''}><td>${r.round}</td><td>${esc(r.agent)}</td><td>${esc(r.status)}<br>${esc(r.description)}</td><td>${resultMeasurement(r)}</td></tr>`).join('')}</tbody></table></div><h3>${said()} findings</h3>${s.findings.filter(f=>!(/swarm_B|per_agent_B|boredom/i.test(f.message))).slice().reverse().map(f=>`<div class="finding"><b>${esc(people().find(a=>a.id===f.agent)?.name||f.role)}</b><span>${esc(f.message)}</span></div>`).join('')||'<p>No findings yet.</p>'}${inspectionSections()}`;}
function inspectionSections(){const studies=studyCards(recording,tick),sources=sourceCards(recording,tick),dialogue=dialogueThrough(events(),tick);return `${studies.length?`<h3>Ig Nobel studies</h3>${studyCardsHtml(studies,viewContext())}`:''}${dialogue.length?`<h3>Lab dialogue</h3><div class="dialogue-scroll">${dialogueHtml(dialogue,viewContext())}</div>`:''}${sources.length||entityCount('sources')?`<h3>Research sources</h3>${sourceCardsHtml(sources,viewContext())}`:''}`;}
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
function talk(id:string){bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleRenderKey='';if(!isFollowing())playing=false;selectedAgent=id;conversationTopic='now';unlock();closeDrawer();renderControls();renderConversation();if(people().some(a=>a.id===id)){const person=world.agentPositions?.().find(a=>a.id===id);if(person){const focus=person.position.clone().add(new THREE.Vector3(0,2.1,0));world.camera.lookAt(focus);if(!walking)labControls.focus(focus);if(walking){const rotation=new THREE.Euler().setFromQuaternion(world.camera.quaternion,'YXZ');yaw=rotation.y;pitch=rotation.x;}}if(!conversation.open)conversation.show();positionConversation();conversation.querySelector<HTMLButtonElement>('button')?.focus();}}
function positionConversation(){if(!conversation.open)return;const person=world.agentPositions?.().find(a=>a.id===selectedAgent);if(!person){conversation.style.visibility='hidden';return;}const point=person.position.clone().add(new THREE.Vector3(0,2.35,0));world.camera.updateMatrixWorld();const local=point.clone().applyMatrix4(world.camera.matrixWorldInverse);if(local.z>=0){conversation.style.visibility='hidden';return;}conversation.style.visibility='visible';point.project(world.camera);const anchorX=(point.x+1)/2*innerWidth,anchorY=(1-point.y)/2*innerHeight;const rect=conversation.getBoundingClientRect(),margin=12;const left=THREE.MathUtils.clamp(anchorX-rect.width/2,margin,Math.max(margin,innerWidth-rect.width-margin));const top=THREE.MathUtils.clamp(anchorY-rect.height-24,80,Math.max(80,innerHeight-rect.height-190));conversation.style.left=`${left}px`;conversation.style.top=`${top}px`;conversation.style.setProperty('--speech-tail',`${THREE.MathUtils.clamp(anchorX-left,20,rect.width-20)}px`);}
$('conversation-content').onclick=e=>{const topic=(e.target as HTMLElement).closest<HTMLElement>('[data-topic]')?.dataset.topic;if(topic){conversationTopic=topic;renderConversation();}};
$('agent-list').onclick=e=>{const id=(e.target as HTMLElement).closest<HTMLElement>('[data-agent]')?.dataset.agent;if(id)talk(id);};
function events(){return (recording?.events||[]) as InspectEvent[];}
function entityCount(name:string){const v=recording?.entities?.[name] as unknown;return Array.isArray(v)?v.length:v&&typeof v==='object'?Object.keys(v).length:0;}
/** Display name for an agent id; `missing` replaces the 'Lab'/'Unknown researcher' wording. */
function agentName(id?:string|null,missing?:string){if(!id)return missing??'Lab';const a=(snapshot?.agents||recording?.frames.at(-1)?.snapshot.agents||[]).find(a=>a.id===id);return a?.name||recording?.manifest.agents?.find(m=>m.agent_id===id)?.display_name||(missing??'Unknown researcher');}
function viewContext():ViewContext{const rid=recording?.manifest.id||'';return {esc,name:agentName,artifactUrl:path=>{const p=`/recordings/${encodeURIComponent(rid)}/artifacts/${path.split('/').map(encodeURIComponent).join('/')}`;return STATIC_SITE?staticPath(p)!:`/api${p}`;},experimentLabel:id=>{const d=experimentDetail(recording,id,tick);return d?.description||d?.idea?.text||id.replace(/^experiment:/,'').slice(0,10);}};}
let inspected:string|null=null;
function renderInspector(){if(!inspected)return;const d=experimentDetail(recording,inspected,tick);$('inspector-content').innerHTML=d?experimentHtml(d,viewContext(),d.studyId?studyCards(recording,tick).find(s=>s.id===d.studyId):null):'<h2>Not started yet.</h2><p class="muted">This experiment has not started by this moment.</p>';}
function openSource(id:string){unlock();closeDrawer();conversation.close();const at=sourceCards(recording,Number.MAX_SAFE_INTEGER).find(s=>s.id===id)?.tick;if(at!=null&&at>tick){playing=false;seek(at);}renderEvidence();if(!evidence.open)evidence.showModal();const card=[...document.querySelectorAll<HTMLElement>('[data-source-card]')].find(el=>el.dataset.sourceCard===id);if(card){card.scrollIntoView({block:'center'});card.classList.add('flash');setTimeout(()=>card.classList.remove('flash'),1600);}}
function openExperiment(id:string){playing=false;renderControls();unlock();inspected=id;renderInspector();if(!inspector.open)inspector.showModal();inspector.querySelector<HTMLElement>('#close-inspector')?.focus();}
document.addEventListener('click',e=>{const source=(e.target as Element).closest?.<HTMLElement>('[data-source]')?.dataset.source;if(source){openSource(source);return;}const id=(e.target as Element).closest?.<HTMLElement|SVGElement>('[data-experiment]')?.dataset.experiment;if(id){e.preventDefault();openExperiment(id);}});
document.addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const target=e.target as Element;if(target.matches?.('[data-experiment]:not(button):not(a)')){e.preventDefault();openExperiment((target as HTMLElement).dataset.experiment!);}});
function expandBubble(){if(!bubbleAgent)return;bubbleExpanded=true;bubbleRenderKey='';}
function dismissBubble(){if(bubbleAgent)bubbleDismissedAgent=bubbleAgent;bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleRenderKey='';$('proximity').hidden=true;}
$('proximity').addEventListener('click',e=>{const target=e.target as Element,button=target.closest?.<HTMLElement>('[data-bubble-close],[data-bubble-expand],[data-bubble-more]');if(button?.hasAttribute('data-bubble-close')){dismissBubble();return;}if(button?.hasAttribute('data-bubble-more')){if(bubbleAgent)talk(bubbleAgent);return;}if(button?.hasAttribute('data-bubble-expand')){expandBubble();return;}if(!bubbleExpanded)expandBubble();});
$('status-strip').addEventListener('click',e=>{const tile=(e.target as Element).closest?.<HTMLButtonElement>('.status-tile[data-agent]');if(!tile)return;const id=tile.dataset.agent!,person=world.agentPositions?.().find(a=>a.id===id);if(!person)return;const focus=person.position.clone().add(new THREE.Vector3(0,2.1,0));world.camera.lookAt(focus);labControls.focus(focus);pinBubble(id);});
inspector.addEventListener('toggle',async e=>{const details=e.target as HTMLDetailsElement;if(!(details instanceof HTMLDetailsElement)||!details.open||!details.dataset.artifact||details.dataset.loaded)return;details.dataset.loaded='1';const pre=details.querySelector('pre')!;try{const r=await fetch(details.dataset.artifact);if(!r.ok)throw new Error(String(r.status));const text=await r.text();pre.textContent=text.length>200000?text.slice(0,200000)+'\n… truncated':text||'(empty)';}catch{pre.textContent='This artifact was not exported with the recording.';}},true);
$('close-inspector').onclick=()=>inspector.close();inspector.addEventListener('close',()=>{inspected=null;});
$('close-conversation').onclick=()=>{conversation.close();renderer.domElement.focus();};$('close-console').onclick=()=>evidence.close();$('close-guide').onclick=()=>guide.close();
$('open-console').onclick=()=>{unlock();closeDrawer();renderEvidence();evidence.showModal();};$('open-guide').onclick=()=>{unlock();closeDrawer();guide.showModal();};
$('play').onclick=()=>{if(!recording)return;if(!playing){conversation.close();if(!recording.manifest.live&&tick>=recording.manifest.totalTicks)seek(0);if(walking)setWalking(false);}playing=!playing;renderControls();};
$('camera-mode').onclick=()=>setWalking(!walking);
$('collapse-bar').onclick=()=>{const collapsed=document.body.classList.toggle('bar-collapsed');$('collapse-bar').setAttribute('aria-expanded',String(!collapsed));$('collapse-bar').textContent=collapsed?'▴':'▾';$('collapse-bar').setAttribute('aria-label',collapsed?'Expand playback panel':'Collapse playback panel');};
$('timeline').oninput=()=>{playing=false;seek(Number($<HTMLInputElement>('timeline').value));announcedTick=tick;finishCoach('scrub');};
$('go-live').onclick=()=>{if(!recording?.manifest.live)return;conversation.close();if(walking)setWalking(false);playing=true;seek(recording.manifest.totalTicks);announce();};
$('pace').onchange=()=>{pace=Number($<HTMLSelectElement>('pace').value);};
/** Precompute illustrative paths once, so a seek always places each person identically. */
function buildPoses(data:Recording){presence=buildReplayPresence(data);poseFrames=buildReplayPoses(data,world.bounds,world.colliders);}
function posesAt(){const before=frameAt(poseFrames,tick);if(!before)return new Map();if(tick<=0)return before.positions;const next=poseFrames[poseFrames.indexOf(before)+1];if(!next)return before.positions;const t=(tick-before.tick)/(next.tick-before.tick);return new Map([...before.positions].map(([id,p])=>{const q=next.positions.get(id)||p;const moving=Math.hypot(q.x-p.x,q.z-p.z)>.005;return[id,{atTable:p.atTable,atLab:p.atLab,x:p.x+(q.x-p.x)*t,z:p.z+(q.z-p.z)*t,heading:moving?Math.atan2(q.x-p.x,q.z-p.z):undefined,moving}];}));}
async function attachRecording(id:string,preserve=false){const generation=++loadGeneration;if(!preserve){playing=false;$('connection').textContent='LOADING RUN';}try{const data=await loadRecording(request,id,recordingManifests.find(m=>m.id===id)?.contentVersion||'2',recording);if(generation!==loadGeneration)return;const savedTick=tick,wasFollowing=isFollowing();recording=data;renderProvenanceBadge();prepareAliases(data);data.frames.sort((a,b)=>a.tick-b.tick);data.events.sort((a,b)=>a.tick-b.tick);buildPoses(data);renderWhosWho();$<HTMLInputElement>('timeline').max=String(data.manifest.totalTicks);$<HTMLInputElement>('timeline').disabled=false;$<HTMLButtonElement>('play').disabled=false;$('replay-title').textContent=aliasText(data.manifest.title);$('overview-text').textContent=data.manifest.description||(data.manifest.live?'Research as it happens. Follow the swarm from inside the lab.':'Research as it happened. Explore the supplied recording.');$('provenance').textContent=data.manifest.description||(data.manifest.live?'Live swarm run':'Source recording · read-only replay');$('timeline-markers').innerHTML=data.events.filter(e=>/experiment.finished|discovery|study.completed|award/.test(e.type)).map(e=>`<i${/discovery|award/.test(e.type)?' class="best"':''} style="left:${e.tick/Math.max(1,data.manifest.totalTicks)*100}%"></i>`).join('');$<HTMLSelectElement>('run-picker').value=id;if(!preserve)setWalking(false);const target=preserve?reloadTick(savedTick,data.manifest,wasFollowing):openingTick(data.manifest);if(!preserve){playing=experienceStarted;announcedTick=target;}seek(target);if(preserve&&wasFollowing)announce();else if(!preserve)announcedTick=tick;renderControls();if(STATIC_SITE&&!preserve){if(!sessionStorage.getItem('intro-seen')){sessionStorage.setItem('intro-seen','1');showIntro();}else startExperience();}const url=new URL(location.href);url.searchParams.set('recording',id);url.searchParams.delete('run');history.replaceState(null,'',url);}catch(e){$('connection').textContent='ARCHIVE UNAVAILABLE';toast((e as Error).message);}}
async function loadRecordings(){try{const items=sortedRecordings(await request<RecordingManifest[]>('/recordings'));recordingManifests=items;$('run-picker').innerHTML=pickerOptions(items,esc)||'<option>No artificial scientist swarm recordings available</option>';if(recording)$<HTMLSelectElement>('run-picker').value=recording.manifest.id;else if(items.length){const selected=new URL(location.href).searchParams.get('recording');await attachRecording(items.find(m=>m.id===selected)?.id||items[0].id);}else if(!items.length){$('connection').textContent='NO SWARM RECORDINGS';$('replay-title').textContent='No artificial scientist swarm recordings available';}}catch(e){$('connection').textContent='ARCHIVE UNAVAILABLE';$('replay-title').textContent='Archive unavailable';toast((e as Error).message);}}
$('refresh-runs').onclick=()=>loadRecordings();$('run-picker').onchange=()=>attachRecording($<HTMLSelectElement>('run-picker').value);
let polling=false;
/** Static site only: the hackathon intro sits in front of the replay until dismissed. */
function showIntro(){$('intro').innerHTML=introHtml(introConfig as IntroConfig,researchTrail(recording),esc,researchResults(recording),recording?.manifest);$('prestart').hidden=true;$('intro').hidden=false;$('intro-start').onclick=startExperience;$('intro-results-link').onclick=e=>{e.preventDefault();const results=$<HTMLDetailsElement>('intro-real-results');results.hidden=false;results.open=true;results.scrollIntoView({behavior:reducedMotion?'auto':'smooth',block:'center'});};}
if(STATIC_SITE){$('refresh-runs').hidden=true;document.body.classList.add('static-site');}
else setInterval(async()=>{if(polling)return;polling=true;const current=recording,generation=loadGeneration;try{await loadRecordings();const updated=recordingManifests.find(m=>m.id===current?.manifest.id);if(current&&generation===loadGeneration&&recording===current&&recordingChanged(current.manifest,updated))await attachRecording(current.manifest.id,true);}finally{polling=false;}},4000);
function blocked(x:number,z:number){const r=.34,b=world.bounds;return x<b.minX+r||x>b.maxX-r||z<b.minZ+r||z>b.maxZ-r||world.colliders.some(c=>x>c.minX-r&&x<c.maxX+r&&z>c.minZ-r&&z<c.maxZ+r);}
for(const b of document.querySelectorAll<HTMLElement>('[data-move]')){b.onpointerdown=e=>{b.setPointerCapture(e.pointerId);pressed.add(b.dataset.move!);};for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,()=>pressed.delete(b.dataset.move!));}
window.addEventListener('keydown',e=>{if(e.code==='Escape'){if(bubbleExpanded){bubbleExpanded=false;bubbleRenderKey='';return;}if(bubblePinned||bubbleAgent){dismissBubble();unlock();return;}conversation.close();closeDrawer();unlock();}if(modal()||(e.target instanceof HTMLElement&&e.target.closest('input,select,textarea,[contenteditable=true]')))return;if(e.code==='KeyE'&&!e.repeat&&bubbleAgent){e.preventDefault();expandBubble();return;}if(e.code==='Enter'&&bubbleAgent&&!(e.target instanceof HTMLElement&&e.target.closest('button,a'))){e.preventDefault();expandBubble();}if(['KeyW','KeyA','KeyS','KeyD',...(!walking?['KeyQ','KeyE']:[]),'ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.code))e.preventDefault();pressed.add(e.code);});window.addEventListener('keyup',e=>pressed.delete(e.code));window.addEventListener('blur',()=>{pressed.clear();drag=false;pointerStart=null;playing=false;renderControls();});
try{
 world=createWorld();growStarted=performance.now();growActive=true;document.body.classList.add('world-growing');world.grow?.(0);renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});renderer.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<760?2:1.5));renderer.setSize(innerWidth,innerHeight);renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=world.exposure??1;renderer.outputColorSpace=THREE.SRGBColorSpace;$('world').appendChild(renderer.domElement);renderer.domElement.tabIndex=0;renderer.domElement.setAttribute('aria-label','Lab viewport. Pause and walk inside to meet the researchers.');world.camera.rotation.order='YXZ';
 labControls=new LabCameraRig(world.camera);
 setWalking(false);
 renderer.domElement.onclick=()=>{if(walking&&!modal()&&!conversation.open&&!bubblePinned)try{renderer.domElement.requestPointerLock?.()?.catch(()=>{});}catch{}};
 renderer.domElement.onpointerdown=e=>{if(modal())return;drag=true;lastPointer={x:e.clientX,y:e.clientY};pointerStart={x:e.clientX,y:e.clientY,canvas:e.target===renderer.domElement};if(!walking)renderer.domElement.setPointerCapture(e.pointerId);};renderer.domElement.onpointermove=e=>{if(!drag||document.pointerLockElement||modal())return;const dx=e.clientX-lastPointer.x,dy=e.clientY-lastPointer.y;if(walking){({yaw,pitch}=mouseLook(yaw,pitch,dx,dy));}else labControls.dragBy(dx,dy);lastPointer={x:e.clientX,y:e.clientY};};renderer.domElement.onpointercancel=()=>{drag=false;pointerStart=null;};window.addEventListener('pointerup',e=>{if(pointerStart?.canvas&&Math.hypot(e.clientX-pointerStart.x,e.clientY-pointerStart.y)<8&&e.target===renderer.domElement&&!modal()){const camera=world.camera;camera.updateMatrixWorld();let nearest:{id:string;distance:number}|null=null;for(const person of world.agentPositions?.()||[]){if(!people().some(a=>a.id===person.id))continue;const point=person.position.clone().add(new THREE.Vector3(0,2.35,0)),local=point.clone().applyMatrix4(camera.matrixWorldInverse);if(local.z>=0)continue;point.project(camera);const x=(point.x+1)*innerWidth/2,y=(1-point.y)*innerHeight/2,distance=Math.hypot(e.clientX-x,e.clientY-y);if(distance<48&&(!nearest||distance<nearest.distance))nearest={id:person.id,distance};}if(nearest)pinBubble(nearest.id);else{bubbleAgent='';bubblePinned=false;bubbleExpanded=false;bubbleRenderKey='';}}pointerStart=null;drag=false;});document.addEventListener('mousemove',e=>{if(document.pointerLockElement&&walking&&!modal()){({yaw,pitch}=mouseLook(yaw,pitch,e.movementX,e.movementY));}});
 const fit=()=>{world.camera.aspect=innerWidth/innerHeight;world.camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);};window.onresize=fit;visualViewport?.addEventListener('resize',fit);addEventListener('orientationchange',fit);
 let previous=performance.now(),lastTick=-1;const direction=new THREE.Vector3();
 function frame(){requestAnimationFrame(frame);const now=performance.now(),dt=Math.min((now-previous)/1000,.1);previous=now;
  if(playing&&recording){tick=advanceTick(tick,dt,pace,recording.manifest.totalTicks,recording.manifest.tickDurationMs);if(!playbackContinues(recording.manifest,tick))playing=false;if(Math.floor(tick)!==lastTick){seek(tick);lastTick=Math.floor(tick);announce();}else renderControls();}
  const camera=world.camera;
  if(!walking&&!modal()&&!conversation.open)labControls.update(dt,pressed);
  if(walking&&!modal()){({yaw,pitch}=keyboardLook(yaw,pitch,dt,pressed));const forward=Number(pressed.has('KeyW'))-Number(pressed.has('KeyS')),side=Number(pressed.has('KeyD'))-Number(pressed.has('KeyA'));if(forward||side){const speed=((pressed.has('ShiftLeft')||pressed.has('ShiftRight'))?5.6:3.5)*dt/Math.hypot(forward,side),dx=(-Math.sin(yaw)*forward+Math.cos(yaw)*side)*speed,dz=(-Math.cos(yaw)*forward-Math.sin(yaw)*side)*speed;if(!blocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;if(!blocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;}camera.rotation.set(pitch,yaw,0,'YXZ');}
  const positions=posesAt(),present=people(),captions=discussionAt(recording?.events||[],tick,present,aliasText,100);world.update(tick*(recording?.manifest.tickDurationMs||700)/1000,{progress:snapshot?.progress||0,boredom:0,running:playing,replay:true,reducedMotion:reducedMotion,agents:present.map(a=>({...a,boredom:a.boredom==null?null:boredomPercent(a.boredom),regime:a.boredomSpectrum?.regime,state:positions.get(a.id)?.atLab?'working':a.state,stationId:positions.get(a.id)?.atTable?'culture':replayStation({...a,state:'working',activity:'experimenting'}),discussionBrief:positions.get(a.id)?.atTable?captions.get(a.id)?.brief:undefined,discussionPeers:captions.get(a.id)?.peers,ideaBrief:ideaBrief(aliasText(a.lastIdea||a.lastQuestion||a.lastObservation||'')),position:positions.get(a.id)}))});
  if(experienceStarted&&!coachId&&present.length)showNextCoach();
  if(growActive){const progress=(now-growStarted)/(reducedMotion?300:2200);world.grow?.(Math.min(1,progress));if(progress>=1){growActive=false;document.body.classList.remove('world-growing');}}
  const previousNear=nearAgent;if(walking&&!modal()){camera.getWorldDirection(direction);direction.y=0;direction.normalize();const candidates=(world.agentPositions?.()||[]).map(a=>{const delta=a.position.clone().sub(camera.position);delta.y=0;const distance=delta.length();return {id:a.id,distance,facing:distance?delta.normalize().dot(direction):1};});nearAgent=pickNear(candidates,nearAgent);}else nearAgent='';
  if(bubbleDismissedAgent&&nearAgent!==bubbleDismissedAgent)bubbleDismissedAgent='';
  const visibleBubble=bubblePinned?bubbleAgent:nearAgent===bubbleDismissedAgent?'':nearAgent;
  if(visibleBubble!==bubbleAgent){bubbleAgent=visibleBubble;bubbleExpanded=false;bubbleRenderKey='';}
  if(previousNear!==nearAgent&&!bubblePinned&&nearAgent)bubbleDismissedAgent='';
  renderBubble();renderer.render(world.scene,camera);positionConversation();
 }
 renderHUD();frame();$('loading').classList.add('loaded');setTimeout(()=>$('loading').hidden=true,380);loadRecordings();
}catch(error){console.error(error);$('loading').innerHTML='<div class="error"><h2>The laboratory could not open.</h2><p>This experience requires WebGL and hardware acceleration.</p></div>';}
