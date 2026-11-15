/** Presentation only: Ari's backend owns boredom and regime decisions. */
export function boredomPercent(value:number):number{return Number.isFinite(value)?Math.max(0,Math.min(100,value)):0;}
const stops=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];
export function boredomColor(value:number):string{
  const position=boredomPercent(value)/25,index=Math.min(3,Math.floor(position)),fraction=position-index;
  return '#'+stops[index].map((channel,i)=>Math.round(channel+(stops[index+1][i]-channel)*fraction).toString(16).padStart(2,'0')).join('');
}
const REGIMES:Record<string,[string,string,string]>={EXPLOIT:['Exploiting','calm','After a significant improvement or before min_attempts: most workers refine; one explores.'],BOREDOM_SNAP:['Boredom snap','snap','B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates.'],YOKED_SNAP:['Boredom snap','snap','B ≥ 0.70: one worker refines while the others explore; the novelty gate rejects near-duplicates.'],PARADIGM_BREAKOUT:['Paradigm breakout','breakout','All workers explore; the gate requires a top-level mechanism not used recently.'],CONVERGED:['Converged','converged','The gate allows only exact reruns of the best for confirmation.'],FRUSTRATED:['Frustrated','frustrated','']};
export function regimeLabel(regime?:string):{label:string;tone:string;description:string}{if(!regime)return {label:'',tone:'calm',description:''};const known=REGIMES[regime];return known?{label:known[0],tone:known[1],description:known[2]}:{label:regime.replaceAll('_',' ').toLowerCase().replace(/^./,c=>c.toUpperCase()),tone:'calm',description:''};}
/** Published meter components as 0..100 bars, in a stable order. */
export function boredomComponents(components?:Record<string,unknown>):{key:string;label:string;value:number}[]{
  if(!components||typeof components!=='object')return [];
  return Object.entries(components).filter((e):e is [string,number]=>typeof e[1]==='number'&&Number.isFinite(e[1])).sort((a,b)=>a[0].localeCompare(b[0])).map(([key,value])=>({key,label:key.replaceAll('_',' '),value:Math.round(Math.max(0,Math.min(1,value))*100)}));
}
/** Latest published per-agent meter reading at or before the playhead. */
export function latestBoredom(events:readonly {tick:number;type:string;agentId?:string;payload?:Record<string,unknown>}[],agentId:string,tick:number):{regime?:string;components?:Record<string,unknown>}|null{
  let found:Record<string,unknown>|undefined;
  for(const e of events){if(e.tick>tick)break;if(e.type==='boredom.measured'&&e.agentId===agentId&&e.payload)found=e.payload;}
  return found?{regime:typeof found.regime==='string'?found.regime:undefined,components:found.components as Record<string,unknown>|undefined}:null;
}
