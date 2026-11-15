import {findPath} from './navigation.ts';
import type {Recording} from './replay.ts';
import type {AgentView,Collider} from './types.ts';
export interface PoseFrame{tick:number;positions:Map<string,{x:number;z:number}>}
/** Illustrative motion starts only after that researcher's first recorded activity. */
export function buildReplayPoses(data:Recording,bounds:Collider,colliders:Collider[]):PoseFrame[]{
 const current=new Map<string,{x:number;z:number}>(),paths=new Map<string,{target:string;points:{x:number;z:number}[]}>(),started=new Set<string>(),frames:PoseFrame[]=[];
 let previousTick=0;
 for(const frame of data.frames){
  const dt=Math.max(0,frame.tick-Math.max(0,previousTick))*(data.manifest.tickDurationMs||700)/1000;previousTick=frame.tick;
  (frame.snapshot.agents as (AgentView&{type?:string})[]).filter(a=>a.type!=='baseline'&&a.type!=='world').forEach((a,i)=>{
   let p=current.get(a.id);if(!p){p={x:(i%5-2)*.75,z:4.8+Math.floor(i/5)*.7};current.set(a.id,p);}
   if(!started.has(a.id)){if(a.state==='idle')return;started.add(a.id);}
   const slot=i%4;
   const goal=a.stationId==='culture'?{x:-9+slot*.85,z:-3.45}:a.stationId==='analyzer'?{x:3.1+slot*.8,z:-1.4}:a.stationId==='notebook'?{x:-8.5+slot*.8,z:6.5}:{x:-1.3+slot*.8,z:-9.25};
   let path=paths.get(a.id)||{target:'',points:[]},distance=dt*1.8;
   // Advance the previous assignment before adopting this tick's new assignment.
   while(path.points.length&&distance>0){const q=path.points[0],d=Math.hypot(q.x-p.x,q.z-p.z);if(d<=distance){p.x=q.x;p.z=q.z;distance-=d;path.points.shift();}else{p.x+=(q.x-p.x)/d*distance;p.z+=(q.z-p.z)/d*distance;distance=0;}}
   if(path.target!==a.stationId){path={target:a.stationId,points:findPath(p,goal,bounds,colliders)};paths.set(a.id,path);}
  });
  frames.push({tick:frame.tick,positions:new Map([...current].map(([id,p])=>[id,{...p}]))});
 }
 return frames;
}
