import type {RecordingManifest,ReplayEvent} from './replay.ts';
type Edge=Pick<RecordingManifest,'live'|'totalTicks'>;
export function atLiveEdge(tick:number,totalTicks:number){return totalTicks-tick<=1;}
/** Live runs open at the newest published tick; archives open at the start. */
export function openingTick(m:Edge){return m.live?m.totalTicks:0;}
/** After a live reload, followers move to the new edge; anyone scrubbed back keeps their moment. */
export function reloadTick(tick:number,next:Edge,following:boolean){return following&&next.live?next.totalTicks:Math.min(tick,next.totalTicks);}
export function following(m:Edge|undefined,tick:number,playing:boolean){return !!m?.live&&playing&&atLiveEdge(tick,m.totalTicks);}
export function eventsAfter(events:readonly ReplayEvent[],tick:number){let n=0;for(const e of events)if(e.tick>tick)n++;return n;}
export function liveButton(m:Edge|undefined,tick:number,playing:boolean,events:readonly ReplayEvent[]){
 if(!m?.live)return {hidden:true,atEdge:false,label:'● LIVE'};
 if(following(m,tick,playing))return {hidden:false,atEdge:true,label:'● LIVE'};
 const n=eventsAfter(events,tick);
 return {hidden:false,atEdge:false,label:n?`● Go live · ${n} new`:'● Go live'};
}
