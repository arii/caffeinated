import type {ReplayEvent} from './replay';
export function timelineMarkers(events:readonly ReplayEvent[],totalTicks:number,frames:readonly {tick:number;snapshot:{round:number}}[]=[]){
 if(!Number.isFinite(totalTicks)||totalTicks<=0)return [];
 const rounds:ReplayEvent[]=[],seen=new Set<number>();
 for(const frame of frames){const round=frame.snapshot.round;if(round>0&&Number.isFinite(round)&&!seen.has(round)){seen.add(round);if(!events.some(e=>e.type==='round.started'&&(e.round??e.payload?.round)===round))rounds.push({tick:frame.tick,type:'round.started',round});}}
 return [...events,...rounds].filter(e=>Number.isFinite(e.tick)&&e.tick>=0&&e.tick<=totalTicks&&/^(round.started|experiment.finished|discovery.made|study.completed|award(?:\..*)?)$/.test(e.type)).sort((a,b)=>a.tick-b.tick).map(e=>({
  percent:e.tick/totalTicks*100,
  best:/discovery|award/.test(e.type),
  label:`${e.type==='round.started'?`Round ${e.round??e.payload?.round??'?'} starts`:e.type==='experiment.finished'?'Experiment finished':e.type==='discovery.made'?'New best':e.type==='study.completed'?'Study completed':'Award'} · tick ${e.tick}`,
 }));
}
