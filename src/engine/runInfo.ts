import type {RecordingManifest} from './replay.ts';
export type RunStatus='live'|'stale'|'stopped'|'finished'|'sample';
const TASK_TITLES:Record<string,string>={hadamard19:'Hadamard 19×19 max determinant',bixbench_mini:'BixBench mini · bioinformatics Q&A',playworld_mini:'PlayWorld mini · world model',ignobel:'Ig Nobel prize hunt'};
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
export function metricLabel(metric?:{name?:string;direction?:string;unit?:string}){if(!metric?.name)return '';const name=metric.name.replaceAll('_',' ');return metric.direction==='maximize'?`${name} ↑ higher is better`:`${name} ↓ lower is better`;}
/** Live recordings degrade to "stale" when the producer stops publishing (heartbeat or server flag). */
export function runStatus(m:RecordingManifest,now=Date.now(),staleMs=90_000):{status:RunStatus;label:string;detail:string}{
 if(m.sample!==false)return {status:'sample',label:'RECORDED SAMPLE',detail:'Bundled recording'};
 const beat=Date.parse(m.heartbeat_ts||m.updated_at||'');
 const quiet=Number.isFinite(beat)?now-beat:NaN;
 if(m.live||m.status==='stale'){
  if(m.stale||m.status==='stale'||quiet>staleMs)return {status:'stale',label:'LIVE · NO RECENT UPDATES',detail:Number.isFinite(quiet)?`Last update ${ago(quiet)} ago`:'The swarm stopped publishing'};
  return {status:'live',label:'● LIVE',detail:Number.isFinite(quiet)?`Updated ${ago(quiet)} ago`:'Following the running swarm'};
 }
 const status=String(m.status||'finished');
 if(['finished','completed'].includes(status))return {status:'finished',label:'FINISHED',detail:'Complete swarm run'};
 return {status:'stopped',label:status.toUpperCase(),detail:'The run ended before finishing'};
}
function publishErrorCount(m:RecordingManifest){const e=m.publish_errors;return Array.isArray(e)?e.length:typeof e==='number'?e:0;}
export function publishWarning(m:RecordingManifest){const n=publishErrorCount(m);return n?`${n} publish error${n===1?'':'s'}`:'';}
function started(m:RecordingManifest){const t=Date.parse(m.time?.ts_start||'');return Number.isFinite(t)?new Date(t).toLocaleString('en-US',{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit',hour12:false}):'';}
export function pickerLabel(m:RecordingManifest){
 const status=runStatus(m);
 const prefix=status.status==='live'?'● LIVE · ':status.status==='stale'?'◌ STALE · ':m.sample===false?'SWARM · ':'';
 const title=taskTitle(m),extra=title===m.title?'':(m.title||'').split(' · ').slice(2).join(' · ');
 return [prefix+title,extra,m.sample===false&&status.status==='stopped'?status.label.toLowerCase():'',m.sample===false?started(m):''].filter(Boolean).join(' · ');
}
/** Grouped picker markup, in the sortedRecordings order. */
export function pickerOptions(items:RecordingManifest[],esc:(v:unknown)=>string){
 const groups:[string,RecordingManifest[]][]=[['Live now',items.filter(m=>m.sample===false&&m.live)],['Swarm runs',items.filter(m=>m.sample===false&&!m.live)],['Recorded samples',items.filter(m=>m.sample!==false)]];
 const option=(m:RecordingManifest)=>`<option value="${esc(m.id)}">${esc(pickerLabel(m))}</option>`;
 return groups.filter(([,rows])=>rows.length).map(([label,rows])=>`<optgroup label="${label}">${rows.map(option).join('')}</optgroup>`).join('');
}
