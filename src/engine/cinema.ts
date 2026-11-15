/** Cinema (Director) Mode: a deterministic, compressed highlight cut of one real recording. */
import type {ReplayEvent} from './replay';

export const CINEMA_DURATION=72;
export type CinemaPhase='hook'|'trap'|'snap'|'breakthrough'|'proof';
export const CINEMA_PHASES:readonly {phase:CinemaPhase;start:number;caption:string}[]=[
 {phase:'hook',start:0,caption:'AI researchers get stuck.'},
 {phase:'trap',start:8,caption:'Local tweaks. Rising boredom.'},
 {phase:'snap',start:22,caption:'Boredom triggers real scouting.'},
 {phase:'breakthrough',start:40,caption:'Verified breakthrough.'},
 {phase:'proof',start:58,caption:'Artificial Scientist Swarms.'},
];
export interface CinemaAgent{id:string;name:string;bored:boolean}
export interface CinemaPlan{
 keys:[number,number][];weights:Map<number,number>;
 snapTick:number;snapAgent:string;foundedTick:number;boredAgents:string[];
 discoveries:{tick:number;agentId:string;reward:number}[];breakthroughAgent:string;
 replicated:number[];boredom:{tick:number;agentId:string;value:number;regime:string;round:number}[];
 papers:{tick:number;agentId:string;title:string;tool:string}[];shares:{tick:number;agentId:string}[];
 verdict?:{tick:number;agentId:string;label:string};startTick:number;endTick:number;
}
const num=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)?v:null;
const quiet=new Set(['llm.called','agent.assigned']);

/** Picks the recorded beats (stagnation, first B>=0.70 snap, replicated discoveries) and maps them onto the cut. */
export function cinemaPlan(events:readonly ReplayEvent[],agents:readonly CinemaAgent[],totalTicks:number):CinemaPlan|null{
 const sorted=[...events].sort((a,b)=>a.tick-b.tick);
 const boredom=sorted.filter(e=>e.type==='boredom.measured'&&num(e.payload?.B)!=null).map(e=>({tick:e.tick,agentId:e.agentId||'',value:num(e.payload?.B)!,regime:String(e.payload?.regime||''),round:e.round??0}));
 const snap=boredom.find(b=>b.regime==='BOREDOM_SNAP'&&b.value>=.7)||boredom.find(b=>b.regime==='BOREDOM_SNAP');
 const discoveries=sorted.filter(e=>e.type==='discovery.made').map(e=>({tick:e.tick,agentId:e.agentId||'',reward:num(e.payload?.reward)??0}));
 if(!snap||!discoveries.some(d=>d.tick>snap.tick))return null;
 const after=discoveries.filter(d=>d.tick>snap.tick),best=after.reduce((a,b)=>b.reward>a.reward?b:a,after[0]);
 const replicated=sorted.filter(e=>e.type==='experiment.finished'&&e.payload?.status==='replicated').map(e=>e.tick);
 const startTick=Math.max(0,(boredom[0]?.tick??0)-2);
 const nextRound=boredom.find(b=>b.tick>snap.tick&&b.round>(snap.round||0))?.tick??snap.tick+60;
 const firstStudy=sorted.find(e=>e.tick>nextRound&&e.type==='experiment.finished')?.tick??best.tick-10;
 const verdicts=sorted.filter(e=>e.type==='verdict.issued'&&e.tick>=best.tick);
 const top=verdicts.find(v=>/candidate|award|winner/i.test(String(v.payload?.verdict||'')));
 const endTick=Math.min(totalTicks,Math.max(best.tick+4,verdicts.at(-1)?.tick??best.tick+12));
 const boredAgents=agents.filter(a=>a.bored).map(a=>a.id);
 const foundedTick=sorted.find(e=>e.type==='agent.assigned'&&boredAgents.includes(e.agentId||'')&&e.tick>=snap.tick)?.tick??snap.tick+1;
 const papers=sorted.filter(e=>e.type==='observation.received'&&e.tick>snap.tick&&e.tick<nextRound&&['sources','snap'].includes(String(e.payload?.kind||''))&&e.message&&e.message!=='(untitled)')
  .map(e=>({tick:e.tick,agentId:e.agentId||'',title:String(e.message).split(';')[0].trim(),tool:String(e.payload?.tool||(e.payload?.kind==='snap'?'snap search':'literature'))}));
 const shares=sorted.filter(e=>e.type==='items.shared'&&e.tick>snap.tick&&e.tick<nextRound).map(e=>({tick:e.tick,agentId:e.agentId||''}));
 const lastScout=Math.max(snap.tick+10,...papers.map(p=>p.tick),...shares.map(s=>s.tick));
 const keys:[number,number][]=[[0,startTick],[8,startTick+(snap.tick-startTick)*.4],[21,snap.tick-3],[25,snap.tick+1],[36,Math.min(lastScout+1,nextRound-1)],[40,Math.max(nextRound,firstStudy-6)],[50,best.tick],[56,endTick],[CINEMA_DURATION,endTick]];
 for(let i=1;i<keys.length;i++)keys[i][1]=Math.max(keys[i][1],keys[i-1][1]);
 const weights=new Map<number,number>();
 for(const e of sorted)if(!quiet.has(e.type))weights.set(Math.floor(e.tick),Math.min(3,(weights.get(Math.floor(e.tick))||0)+1));
 return {keys,weights,snapTick:snap.tick,snapAgent:snap.agentId,foundedTick,boredAgents,discoveries,breakthroughAgent:best.agentId,replicated,boredom,papers,shares,
  verdict:top?{tick:top.tick,agentId:top.agentId||'',label:String(top.payload?.verdict)}:undefined,startTick,endTick};
}

/** Within each beat, idle ticks get little screen time and eventful ticks get more. */
export function cinemaTickAt(plan:Pick<CinemaPlan,'keys'|'weights'>,t:number){
 const keys=plan.keys,time=Math.max(0,Math.min(CINEMA_DURATION,t));
 let i=keys.findIndex((k,j)=>j<keys.length-1&&time<keys[j+1][0]);if(i<0)i=keys.length-2;
 const [t0,k0]=keys[i],[t1,k1]=keys[i+1];if(k1<=k0||t1<=t0)return k0;
 const f=(time-t0)/(t1-t0),cells:number[]=[];
 for(let k=Math.floor(k0);k<Math.ceil(k1);k++)cells.push(.35+(plan.weights.get(k)||0));
 const total=cells.reduce((a,b)=>a+b,0);let target=f*total;
 for(let c=0;c<cells.length;c++){if(target<=cells[c]){const tick=Math.floor(k0)+c+target/cells[c];return Math.max(k0,Math.min(k1,tick));}target-=cells[c];}
 return k1;
}
export function cinemaPhaseAt(t:number){let current=CINEMA_PHASES[0];for(const p of CINEMA_PHASES)if(t>=p.start)current=p;return current;}
export const easeInOutCubic=(x:number)=>{const v=Math.max(0,Math.min(1,x));return v<.5?4*v*v*v:1-Math.pow(-2*v+2,3)/2;};

/** Highest measured boredom among labs this round, eased for ~2 ticks after each measurement. */
export function cinemaBoredom(plan:Pick<CinemaPlan,'boredom'>,tick:number){
 const seen=plan.boredom.filter(b=>b.tick<=tick);if(!seen.length)return {value:0,shown:0,regime:'EXPLOIT',agentId:''};
 const round=seen.at(-1)!.round,inRound=seen.filter(b=>b.round===round),peak=inRound.reduce((a,b)=>b.value>a.value?b:a,inRound[0]);
 const previousSeen=seen.slice(0,-1),previousRound=previousSeen.at(-1)?.round,prior=previousSeen.filter(b=>b.round===previousRound);
 const before=prior.length?prior.reduce((a,b)=>b.value>a.value?b:a,prior[0]).value:0;
 const shown=before+(peak.value-before)*easeInOutCubic((tick-seen.at(-1)!.tick)/2);
 return {value:peak.value,shown,regime:peak.regime,agentId:peak.agentId};
}
export function boredomTone(value:number,regime:string){return regime==='BOREDOM_SNAP'||value>=.7?'snap':value>=.35?'amber':'cool';}
export function replicatedAt(plan:Pick<CinemaPlan,'replicated'>,tick:number){return plan.replicated.filter(t=>t<=tick).length;}

/** Minimal step line of a cumulative count; drawn only through `tick`. */
export function cinemaStepSvg(steps:readonly number[],from:number,to:number,tick:number,width=360,height=120,label=''){
 const max=Math.max(1,steps.length),x=(k:number)=>8+(Math.max(from,Math.min(to,k))-from)/Math.max(1,to-from)*(width-16),y=(n:number)=>height-10-n/max*(height-28);
 let count=0,d=`M${x(from).toFixed(1)} ${y(0).toFixed(1)}`;
 for(const s of steps){if(s>tick)break;d+=` H${x(s).toFixed(1)} V${y(++count).toFixed(1)}`;}
 d+=` H${x(Math.min(tick,to)).toFixed(1)}`;
 const grid=Array.from({length:max+1},(_,i)=>`<line x1="8" x2="${width-8}" y1="${y(i).toFixed(1)}" y2="${y(i).toFixed(1)}"/>`).join('');
 return `<svg viewBox="0 0 ${width} ${height}" class="cin-step" role="img" aria-label="${label}"><g class="grid">${grid}</g><path d="${d}"/><circle cx="${x(Math.min(tick,to)).toFixed(1)}" cy="${y(count).toFixed(1)}" r="5"/></svg>`;
}
