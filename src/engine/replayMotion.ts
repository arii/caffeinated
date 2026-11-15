import {findPath} from './navigation.ts';
import {stationGoal,discussionGoal} from './labLayout.ts';
import {buildReplayPresence,replayPeople,replayStation,type RecordedAgent} from './replayPresence.ts';
import type {Recording} from './replay.ts';
import type {Collider} from './types.ts';
export interface PoseFrame{tick:number;positions:Map<string,{x:number;z:number}>}
/** Causal illustrative motion: no robot exists before its recorded summons. */
export function buildReplayPoses(data:Recording,bounds:Collider,colliders:Collider[]):PoseFrame[]{
 const presence=buildReplayPresence(data),current=new Map<string,{x:number;z:number}>(),paths=new Map<string,{target:string;points:{x:number;z:number}[]}>(),frames:PoseFrame[]=[];
 let previousTick=0;
 for(const frame of data.frames){
  const dt=Math.max(0,frame.tick-Math.max(0,previousTick))*(data.manifest.tickDurationMs||700)/1000;previousTick=frame.tick;
  const agents=frame.snapshot.agents as RecordedAgent[];
  replayPeople(agents,frame.tick,presence).forEach(a=>{
   const slot=agents.findIndex(other=>other.id===a.id);let p=current.get(a.id);
   if(!p){p=discussionGoal(slot);current.set(a.id,p);}
   const station=replayStation(a),goal=stationGoal(station,slot);
   let path=paths.get(a.id)||{target:'',points:[]},distance=dt*1.8;
   // Advance the previous assignment before adopting this tick's new assignment.
   while(path.points.length&&distance>0){const q=path.points[0],d=Math.hypot(q.x-p.x,q.z-p.z);if(d<=distance){p.x=q.x;p.z=q.z;distance-=d;path.points.shift();}else{p.x+=(q.x-p.x)/d*distance;p.z+=(q.z-p.z)/d*distance;distance=0;}}
   if(path.target!==station){path={target:station,points:findPath(p,goal,bounds,colliders)};paths.set(a.id,path);}
  });
  frames.push({tick:frame.tick,positions:new Map([...current].map(([id,p])=>[id,{...p}]))});
 }
 return frames;
}
