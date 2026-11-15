import {findPath} from './navigation.ts';
import {stationGoal,discussionGoal} from './labLayout.ts';
import {buildReplayPresence,replayPeople,replayStation,type RecordedAgent} from './replayPresence.ts';
import {frameAt,type Recording} from './replay.ts';
import type {Collider} from './types.ts';
export interface ReplayPose{x:number;z:number;atTable?:boolean;atLab?:boolean}
export interface PoseFrame{tick:number;positions:Map<string,ReplayPose>}
/** Illustrative patrols use replay time, so pause and rewind remain deterministic.
 * Recorded messages invite brief table visits; thinking alone never parks a robot.
 */
export function buildReplayPoses(data:Recording,bounds:Collider,colliders:Collider[]):PoseFrame[]{
 const presence=buildReplayPresence(data),frames:PoseFrame[]=[];
 const workers=new Map<string,{p:ReplayPose;path:{x:number;z:number}[];leg:number;dwell:number;pending:boolean;table:boolean;lab:boolean}>();
 const experiments=new Set<string>(),running=new Set<string>();
 const events=data.events.filter(e=>['message.sent','experiment.started','experiment.finished'].includes(e.type));let eventIndex=0;
 const invitations=new Set<string>();
 const end=Math.max(0,data.manifest.totalTicks,data.frames.at(-1)?.tick||0),step=.25,seconds=step*(data.manifest.tickDurationMs||700)/1000;
 if((data.frames[0]?.tick??0)<0)frames.push({tick:-1,positions:new Map()});
 for(let tick=0;tick<=end;tick+=step){
  while(eventIndex<events.length&&events[eventIndex].tick<=tick){
   const e=events[eventIndex++] as typeof events[number]&{payload?:{to_agent_ids?:string[]};refs?:{to_agent_id?:string}};
   if(e.type==='experiment.started'){if(e.agentId){experiments.add(e.agentId);running.add(e.agentId);}continue;}
   if(e.type==='experiment.finished'){if(e.agentId)running.delete(e.agentId);continue;}
   for(const id of [e.agentId,...e.payload?.to_agent_ids||[],e.refs?.to_agent_id].filter(Boolean) as string[]){invitations.add(id);const w=workers.get(id);if(w&&!w.table)w.pending=true;}
  }
  const agents=frameAt(data.frames,tick)?.snapshot.agents as RecordedAgent[]||[];
  replayPeople(agents,tick,presence).forEach(a=>{
   const slot=agents.findIndex(other=>other.id===a.id);
   let w=workers.get(a.id);
   if(!w){w={p:{...discussionGoal(slot),atTable:invitations.has(a.id)},path:[],leg:0,dwell:invitations.has(a.id)?2.5:0,pending:false,table:invitations.has(a.id),lab:false};workers.set(a.id,w);return;}
   if(experiments.delete(a.id)){
    w.lab=true;w.table=false;w.dwell=0;w.p.atTable=false;w.p.atLab=false;
    w.path=findPath(w.p,stationGoal(replayStation({...a,state:'working',activity:'experimenting'}),slot),bounds,colliders);
   }
   if(w.lab&&!w.path.length&&!w.p.atLab){w.p.atLab=true;w.dwell=4;}
   if(w.dwell>0){w.dwell=Math.max(0,w.dwell-seconds);w.p.atTable=w.table;return;}
   if(w.lab&&w.p.atLab){if(running.has(a.id))return;w.lab=false;w.p.atLab=false;}
   w.p.atTable=false;
   if(!w.path.length){
    if(w.table){w.table=false;w.pending=false;w.leg=0;}
    const work=stationGoal(replayStation({...a,state:'working',activity:'experimenting'}),slot);
    // Cross the room between instruments, keeping the central display clear.
    const patrol=[work,{x:2.7+(slot%3)*.5,z:5.3},{x:7.3,z:1.2},{x:1.3,z:-7.5}];
    if(w.leg>=patrol.length&&w.pending){w.table=true;w.path=findPath(w.p,discussionGoal(slot),bounds,colliders);}
    else {const goal=patrol[w.leg%patrol.length];w.leg++;w.path=findPath(w.p,goal,bounds,colliders);}
   }
   let distance=seconds*2.1;
   while(w.path.length&&distance>0){const q=w.path[0],d=Math.hypot(q.x-w.p.x,q.z-w.p.z);if(d<=distance){w.p.x=q.x;w.p.z=q.z;distance-=d;w.path.shift();}else{w.p.x+=(q.x-w.p.x)/d*distance;w.p.z+=(q.z-w.p.z)/d*distance;distance=0;}}
   if(!w.path.length&&w.lab){w.p.atLab=true;w.dwell=4;}
   if(!w.path.length&&w.table){w.dwell=3;w.p.atTable=true;}
  });
  frames.push({tick,positions:new Map([...workers].map(([id,w])=>[id,{...w.p}]))});
 }
 return frames;
}
