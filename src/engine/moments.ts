import type {ReplayEvent} from './replay.ts';
export interface Moment{tick:number;kind:'best'|'award'|'regime';title:string;detail:string;agentId?:string}
const LOUD_REGIMES:Record<string,string>={BOREDOM_SNAP:'Boredom snap',PARADIGM_BREAKOUT:'Paradigm breakout',YOKED_SNAP:'Boredom snap'};
const num=(v:unknown)=>typeof v==='number'&&Number.isFinite(v)?v:null;
export function formatValue(v:number){return Math.abs(v)>=1000?v.toFixed(0):String(Number(v.toPrecision(4)));}
const text=(v:unknown)=>typeof v==='string'?v.trim():'';
/** Moments with from < tick <= to. Regime moments fire only on a change into a snap or breakout. */
export function momentsBetween(events:readonly ReplayEvent[],from:number,to:number,metric?:{name?:string}):Moment[]{
 const out:Moment[]=[],regimes=new Map<string,string>();
 for(const e of events){
  if(e.tick>to)break;
  const p=(e.payload||{}) as Record<string,unknown>,fresh=e.tick>from;
  if(e.type==='round.started'||e.type==='boredom.measured'){
   const regime=text(p.regime);if(!regime)continue;
   const scope=e.type==='round.started'?'swarm':e.agentId||'swarm',before=regimes.get(scope);regimes.set(scope,regime);
   if(fresh&&before!==regime&&LOUD_REGIMES[regime])out.push({tick:e.tick,kind:'regime',title:LOUD_REGIMES[regime],detail:scope==='swarm'?'The whole swarm switches approach':'A researcher switches approach',agentId:scope==='swarm'?undefined:scope});
   continue;
  }
  if(!fresh)continue;
  if(e.type==='discovery.made'){
   const value=num(p.metric_value),previous=num(p.previous_best),title=text(p.title);
   const score=value==null?'':`${metric?.name?metric.name.replaceAll('_',' ')+' ':''}${formatValue(value)}${previous==null?'':` (was ${formatValue(previous)})`}`;
   const reward=num(p.reward);
   out.push({tick:e.tick,kind:'best',title:value==null?'New discovery!':'New best!',detail:[score||(reward==null?'':`reward ${formatValue(reward)}`),title].filter(Boolean).join(' · '),agentId:e.agentId});
  }else if(e.type==='award.issued'){
   out.push({tick:e.tick,kind:'award',title:text(p.award)||text(p.prize)||'Award issued',detail:[text(p.title)||text(p.headline),text(p.citation)||text(p.text)].filter(Boolean).join(' · ').slice(0,240),agentId:e.agentId});
  }
 }
 return out;
}
