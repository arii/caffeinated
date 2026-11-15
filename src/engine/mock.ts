import { createRun, step } from '../simulation.js';
import type { ExperimentManifest, ResearchAdapter, ResearchEvent } from './contract';
export class DemoAdapter implements ResearchAdapter {
  private listeners=new Set<(event:ResearchEvent)=>void>();
  private timer:ReturnType<typeof setInterval>|null=null;
  private seq=0; private runId=''; private clock=0;
  private run=createRun(); private memoryCount=0;
  subscribe(fn:(event:ResearchEvent)=>void){this.listeners.add(fn);return()=>{this.listeners.delete(fn);};}
  private emit(type:ResearchEvent['type'],payload:unknown){
    const e={version:1,runId:this.runId,eventId:`${this.runId}-${this.seq}`,sequence:this.seq++,time:this.clock,type,payload} as ResearchEvent;
    for(const fn of this.listeners)fn(e);
  }
  start(experiment:ExperimentManifest){
    this.pause();this.run=createRun();this.seq=0;this.clock=0;this.memoryCount=0;this.runId=crypto.randomUUID();
    this.emit('run.started',{experiment});
    this.emit('agent.updated',{id:'agent-1',name:'Ada',role:'Scientist',state:'working',stationId:'culture',boredom:0});
    this.emit('agent.updated',{id:'agent-2',name:'Lin',role:'Analyst',state:'thinking',stationId:'analyzer',boredom:0});
    this.timer=setInterval(()=>this.advance(),1100);this.advance();
  }
  private advance(){
    step(this.run);this.clock+=1;
    this.emit('experiment.progress',{progress:this.run.experiments.length/this.run.budget,value:this.run.best,boredom:this.run.meter});
    for(const finding of this.run.memory.slice(this.memoryCount) as {role:string;message:string}[])this.emit('finding.written',{role:finding.role,message:finding.message});
    this.memoryCount=this.run.memory.length;
    this.emit('agent.updated',{id:'agent-3',name:'Sol',role:'Explorer',state:this.run.pivoted?'working':this.run.meter>40?'thinking':'idle',stationId:'explorer',boredom:this.run.meter});
    if(this.run.finished){this.pause();this.emit('run.completed',{value:this.run.best});}
  }
  pause(){if(this.timer)clearInterval(this.timer);this.timer=null;}
  dispose(){this.pause();this.listeners.clear();}
}
export const demoManifest:ExperimentManifest={id:'demo-two-basin',title:'Exploration policy comparison',domain:'Synthetic demonstration',metric:{name:'Growth score',unit:'score',direction:'maximize'},stationId:'culture',datasetRef:'synthetic-two-basin-v1'};
