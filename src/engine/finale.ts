import {frameAt,type Recording} from './replay.ts';
import {outcomeOf} from './scoreChart.ts';
import {isIgnobelRecording,recordingProxyNote} from './proxyNote.ts';

export interface WilsonInterval{low:number;high:number}
export function wilson(k:number,n:number,z=1.96):WilsonInterval|null{
 if(!Number.isFinite(k)||!Number.isFinite(n)||n<=0||k<0||k>n)return null;
 const p=k/n,z2=z*z,denominator=1+z2/n,center=(p+z2/(2*n))/denominator,margin=z*Math.sqrt((p*(1-p)+z2/(4*n))/n)/denominator;
 return {low:Math.max(0,center-margin),high:Math.min(1,center+margin)};
}

type Result=Record<string,unknown>&{value?:number|null;status?:string;kind?:string;agent?:string;description?:string;commit?:string;tick?:number};
type HeldOutScore={score:number|null;k:number|null;fraction:string|null;wilson:WilsonInterval|null;loss:number|null;commit:string|null};
export interface FinaleSummary{
 status:'stopped'|'finished';
 metric:string;
 direction:'minimize'|'maximize';
 baseline:number|null;
 best:number|null;
 delta:number|null;
 winner:{commit:string|null;description:string;agent:string}|null;
 totals:{kept:number;discarded:number;crashed:number};
 heldOut:{n:number;baseline:HeldOutScore;best:HeldOutScore;proxyNote:string;referenceNote:string}|null;
 proxyNote:string;
 referenceNote:string;
}

const finite=(value:unknown):value is number=>typeof value==='number'&&Number.isFinite(value);
const shortCommit=(value:unknown)=>typeof value==='string'&&value?value.slice(0,7):null;
export function improvementText(delta:number|null,format:(value:number)=>string=String){
 if(delta==null)return '';
 if(delta===0)return 'no change';
 return `${delta>0?'improved by':'worsened by'} ${format(Math.abs(delta))}`;
}
function heldScore(value:Record<string,unknown>|undefined,n:number):HeldOutScore{
 const score=finite(value?.score)?value.score:null,items=score==null?null:score*n,k=items!=null&&Math.abs(items-Math.round(items))<=1e-6?Math.round(items):null;
 return {score,k,fraction:k==null?null:`${k}/${n}`,wilson:k==null?null:wilson(k,n),loss:finite(value?.loss)?value.loss:null,commit:shortCommit(value?.commit)};
}

export function finaleReached(recording:Recording|null,tick:number){
 if(!recording)return false;
 if(recording.events.some(event=>event.type==='run.finished'&&event.tick<=tick))return true;
 return ['finished','completed','stopped'].includes(recording.manifest.status||'')&&tick>=recording.manifest.totalTicks;
}

export function finaleSummary(recording:Recording|null,tick:number):FinaleSummary|null{
 if(!recording)return null;
 const {manifest}=recording,snapshot=frameAt(recording.frames,tick)?.snapshot;
 const results=(snapshot?.results||[]) as Result[];
 const direction=manifest.metric?.direction==='maximize'||snapshot?.metric.direction==='maximize'?'maximize':'minimize';
 const metric=manifest.metric?.label||snapshot?.metric.name||manifest.metric?.name||'result';
 const baselineRow=results.find(row=>outcomeOf(String(row.status||''),String(row.kind||''))==='baseline');
 const kept=results.filter(row=>outcomeOf(String(row.status||''),String(row.kind||''))==='kept');
 const bestRow=kept.length?kept.reduce((best,row)=>direction==='maximize'?(finite(row.value)&&(!finite(best.value)||row.value>best.value)?row:best):(finite(row.value)&&(!finite(best.value)||row.value<best.value)?row:best)):baselineRow;
 const baseline=finite(baselineRow?.value)?baselineRow.value:null,best=finite(bestRow?.value)?bestRow.value:null;
 const delta=baseline==null||best==null?null:direction==='maximize'?best-baseline:baseline-best;
 const totals={kept:0,discarded:0,crashed:0};
 for(const row of results){const outcome=outcomeOf(String(row.status||''),String(row.kind||''));if(outcome!=='baseline')totals[outcome]++;}
 const proxyNote=recordingProxyNote(manifest,recording)||'',held=manifest.held_out_test,n=held&&finite(held.n_items)?held.n_items:0;
 const heldOut=held&&n>0?{n,baseline:heldScore(held.baseline,n),best:heldScore(held.best,n),proxyNote:isIgnobelRecording(manifest,recording)?proxyNote:held.proxy_note||proxyNote,referenceNote:held.reference_note||manifest.reference_note||''}:null;
 return {
  status:manifest.status==='stopped'?'stopped':'finished',metric,direction,baseline,best,delta,
  winner:kept.length&&bestRow?{commit:shortCommit(bestRow.commit),description:String(bestRow.description||''),agent:String(bestRow.agent||'')}:null,
  totals,heldOut,proxyNote:heldOut?.proxyNote||proxyNote,referenceNote:heldOut?.referenceNote||manifest.reference_note||''
 };
}
