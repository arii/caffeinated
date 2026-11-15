import type { ResearchEvent, ExperimentManifest } from './contract';
import type { AgentView, LabState } from './types';
export interface ResearchState extends LabState {
  runId: string | null; lastSequence: number; value: number | null;
  experiment: ExperimentManifest | null; findings: { role: string; message: string; sourceRef?: string }[];
}
export function initialState(): ResearchState {
  return { elapsed:0, progress:0, boredom:0, running:false, runId:null,lastSequence:-1,value:null,experiment:null,findings:[],agents:[
    {id:'agent-1',name:'Ada',role:'Scientist',state:'idle',stationId:'culture',boredom:0},
    {id:'agent-2',name:'Lin',role:'Analyst',state:'idle',stationId:'analyzer',boredom:0},
    {id:'agent-3',name:'Sol',role:'Explorer',state:'idle',stationId:'explorer',boredom:0},
  ] };
}
export function reduceEvent(state:ResearchState,event:ResearchEvent):ResearchState {
  if (event.type==='run.started') {
    if (state.runId===event.runId && event.sequence<=state.lastSequence) return state;
    return {...initialState(),runId:event.runId,lastSequence:event.sequence,running:true,experiment:event.payload.experiment};
  }
  if(event.runId!==state.runId||event.sequence<=state.lastSequence)return state;
  const next={...state,lastSequence:event.sequence,elapsed:event.time};
  switch(event.type){
    case 'agent.updated': return {...next,agents:next.agents.map(a=>a.id===event.payload.id?event.payload as AgentView:a)};
    case 'experiment.progress': return {...next,...event.payload};
    case 'finding.written': return {...next,findings:[...next.findings,event.payload]};
    case 'run.completed': return {...next,running:false,progress:1,value:event.payload.value,agents:next.agents.map(a=>({...a,state:'reviewing'}))};
  }
}
