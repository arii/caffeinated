import {recordingPrefix,type RecordingManifest} from './replay.ts';
export type RunStatus='live'|'stale'|'stopped'|'finished'|'sample';
const TASK_TITLES:Record<string,string>={hadamard19:'Hadamard 19×19 max determinant',bixbench_mini:'BixBench mini · bioinformatics Q&A',playworld_mini:'PlayWorld mini · world model',ignobel:'Ig Nobel Prize hunt'};
/** Seconds/minutes/hours wording for "last update" copy. */
export function ago(ms:number){const s=Math.max(0,Math.round(ms/1000));return s<90?`${s}s`:s<5400?`${Math.round(s/60)}m`:`${Math.round(s/3600)}h`;}
export function taskId(m:RecordingManifest){
 if(m.task)return m.task;
 const command=m.provenance?.command,parts=Array.isArray(command)?command:typeof command==='string'?command.split(/\s+/):[];
 const index=parts.findIndex(p=>p==='--task'||p.startsWith('--task='));
 if(index>=0){const value=parts[index].includes('=')?parts[index].split('=')[1]:parts[index+1];if(value)return value;}
 const segments=(m.title||'').split(' · ');
 if(segments[0]==='autoresearch'&&segments[1])return segments[1];
 if(m.swarm==='ignobel'||/ig ?nobel/i.test(m.title||''))return 'ignobel';
 return '';
}
export function taskTitle(m:RecordingManifest){return m.task_title||TASK_TITLES[taskId(m)]||m.title;}
export function compactDock(_width:number,_height:number){return true;}
export function metricLabel(metric?:{name?:string;direction?:string;unit?:string}){if(!metric?.name)return '';const name=metric.name.replaceAll('_',' ');return metric.direction==='maximize'?`${name} ↑ higher is better`:`${name} ↓ lower is better`;}
export function evidenceMetricLabel(metric?:{name?:string;direction?:string}){if(metric?.direction==='minimize')return 'Loss';if(!metric?.name)return 'Metric';return metric.name.replaceAll('_',' ').replace(/^./,c=>c.toUpperCase());}
export function metricValueLabel(value:unknown,reward:unknown,metricName:string,format:(value:number)=>string){if(typeof value==='number'&&Number.isFinite(value))return `${metricName} ${format(value)}`;if(value===null&&typeof reward==='number'&&Number.isFinite(reward))return `Reward ${format(reward)}`;return '';}
/** Live recordings degrade to "stale" when the producer stops publishing (heartbeat or server flag). */
export function runStatus(m:RecordingManifest,now=Date.now(),staleMs=90_000):{status:RunStatus;label:string;detail:string}{
 if(m.sample!==false)return {status:'sample',label:'RECORDED SAMPLE',detail:'Bundled recording'};
 if(m.status==='stopped')return {status:'stopped',label:'STOPPED',detail:'The run ended before finishing'};
 const beat=Date.parse(m.heartbeat_ts||m.updated_at||'');
 const quiet=Number.isFinite(beat)?now-beat:NaN;
 if(m.live||m.stale||m.status==='stale'){
  if(m.stale||m.status==='stale'||quiet>staleMs)return {status:'stale',label:'◌ STALLED RUN',detail:Number.isFinite(quiet)?`Last update ${ago(quiet)} ago`:'The swarm stopped publishing'};
  return {status:'live',label:'● LIVE',detail:Number.isFinite(quiet)?`Updated ${ago(quiet)} ago`:'Following the running swarm'};
 }
 const status=String(m.status||'finished');
 if(['finished','completed'].includes(status))return {status:'finished',label:'FINISHED',detail:'Complete swarm run'};
 return {status:'stopped',label:status.toUpperCase(),detail:'The run ended before finishing'};
}
function publishErrorCount(m:RecordingManifest){const e=m.publish_errors;return Array.isArray(e)?e.length:typeof e==='number'?e:0;}
export function publishWarning(m:RecordingManifest){const n=publishErrorCount(m);return n?`${n} publish error${n===1?'':'s'}`:'';}
function started(m:RecordingManifest){const t=Date.parse(m.time?.ts_start||'');return Number.isFinite(t)?new Date(t).toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}):'';}
function runRounds(m:RecordingManifest){return [m.time?.rounds,m.run?.rounds,m.rounds].find(n=>typeof n==='number'&&Number.isFinite(n)&&n>=0);}
function roundsLabel(m:RecordingManifest){const count=runRounds(m);return count===undefined?'':`${count} round${count===1?'':'s'}`;}
function runName(m:RecordingManifest){
 const parts=(m.title||'').split(/\s*·\s*/),names=parts.length>1?parts.slice(1):m.task_title&&m.task_title!==m.title?parts:[];
 return names.filter(p=>!/^real research$/i.test(p)&&!/^out[-_]/i.test(p)&&p!==taskId(m)).join(' · ').replace(/\([^)]*\brounds?\b[^)]*\)/gi,'').replace(/^run\s+\d+\s*[,.:\-]?\s*/i,'').trim().replace(/^test run$/i,'').replace(/^./,c=>c.toUpperCase());
}
export function selectedRunSummary(m:RecordingManifest){
 const state=runStatus(m),status=state.status==='sample'||/\btest run\b/i.test(m.title||'')?'Test recording':state.status==='finished'?'Finished':state.status==='live'?'Live':state.status==='stale'?'Stalled':'Stopped';
 return [[...new Set([taskTitle(m)||m.description,runName(m)].filter(Boolean))].join(' · '),[roundsLabel(m),status].filter(Boolean).join(' · ')].filter(Boolean).join('\n');
}
export function pickerLabel(m:RecordingManifest,index?:number){
 const status=runStatus(m);
 if(index!==undefined){
  const date=new Date(m.time?.ts_start||''),day=Number.isFinite(date.getTime())?date.toLocaleDateString('en-US',{month:'short',day:'numeric',timeZone:'UTC'}):'';
  const suffix=/\btest run\b/i.test(m.title||'')?'Test':{sample:'Test',stopped:'Stopped',live:'Live',stale:'Stalled',finished:''}[status.status];
  return [`Run ${index}`,runName(m),roundsLabel(m),day,suffix].filter(Boolean).join(' · ');
 }
 const prefix=m.sample===false?recordingPrefix({...m,stale:status.status==='stale',live:status.status==='live'}):'';
 const title=taskTitle(m),extra=title===m.title?'':(m.title||'').split(' · ').slice(2).join(' · ');
 return [prefix+title,extra,m.sample===false&&status.status==='stopped'?status.label.toLowerCase():'',m.sample===false?started(m):''].filter(Boolean).join(' · ');
}
/** Grouped picker markup, in the sortedRecordings order. */
export function pickerOptions(items:RecordingManifest[],esc:(v:unknown)=>string,compact=false){
 const groups:[string,RecordingManifest[]][]=[['Live now',items.filter(m=>m.sample===false&&m.live)],['Swarm runs',items.filter(m=>m.sample===false&&!m.live)],['Recorded samples',items.filter(m=>m.sample!==false)]];
 const option=(m:RecordingManifest)=>`<option value="${esc(m.id)}">${esc(pickerLabel(m,compact?items.indexOf(m)+1:undefined))}</option>`;
 return groups.filter(([,rows])=>rows.length).map(([label,rows])=>`<optgroup label="${label}">${rows.map(option).join('')}</optgroup>`).join('');
}
