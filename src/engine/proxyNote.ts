import {taskId} from './runInfo.ts';
import type {Recording,RecordingManifest} from './replay.ts';

type Row=Record<string,unknown>;
const row=(value:unknown):Row|null=>value&&typeof value==='object'&&!Array.isArray(value)?value as Row:null;
const rows=(value:unknown):Row[]=>Array.isArray(value)?value.filter((v):v is Row=>!!row(v)):row(value)?Object.values(value as Row).filter((v):v is Row=>!!row(v)):[];

export const PRE_COMMITTEE_NOTE='Pre-committee run: loss 0 = passed preregistered gates, 1 = failed; not committee-judged.';

export function isIgnobelRecording(manifest:RecordingManifest|null|undefined,recording:Pick<Recording,'entities'|'events'>|null|undefined){
 const description=manifest?.metric?.description||'';
 return !!manifest&&(taskId(manifest)==='ignobel'||manifest.metric?.name==='replicated_findings'||/replicated and significant/i.test(description)||rows(recording?.entities?.studies).length>0);
}

export function isPreCommitteeIgnobel(manifest:RecordingManifest|null|undefined,recording:Pick<Recording,'entities'|'events'>|null|undefined){
 if(!isIgnobelRecording(manifest,recording))return false;
 const hasCommittee=rows(recording?.entities?.studies).some(study=>
  study.committee!=null||row(study.result)?.committee!=null||row(study.graded)?.committee!=null
 );
 return !hasCommittee&&!(recording?.events||[]).some(event=>event.type==='award.issued');
}

export function recordingProxyNote(manifest:RecordingManifest|null|undefined,recording:Pick<Recording,'entities'|'events'>|null|undefined):string|undefined{
 if(isIgnobelRecording(manifest,recording)){
  if(isPreCommitteeIgnobel(manifest,recording))return PRE_COMMITTEE_NOTE;
  const metric=manifest?.metric?.description;
  if(metric)return metric.replace(/\breplicated\s+and\s+significant\b/gi,'split-half consistent and significant').replace(/\breplicated\b/gi,'passed split-half consistency').replace(/\breplication\b/gi,'split-half consistency');
 }
 return manifest?.proxy_note;
}
