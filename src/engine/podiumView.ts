import type {Recording} from './replay.ts';
import {recordingProxyNote} from './proxyNote.ts';

export function podiumMetricHtml(recording:Recording,esc:(value:unknown)=>string){
 const note=recordingProxyNote(recording.manifest,recording);
 return note?`<p class="metric-description">${esc(note)}</p>`:'';
}
