export type Outcome='baseline'|'kept'|'discarded'|'crashed';
export interface ResultRow{tick?:number;value:number|null;status:string;kind?:string;agent:string;description:string}
export interface ScorePoint{tick:number;value:number|null;outcome:Outcome;agent:string;description:string;status:string}
export interface ScoreSeries{points:ScorePoint[];best:[number,number][];newBest:[number,number][]}
export function outcomeOf(status:string,kind?:string):Outcome{
 if(kind==='baseline')return 'baseline';
 const s=status.toLowerCase();
 if(/keep|kept|accept|replicated|confirmed/.test(s)&&!/not_?replicated/.test(s))return 'kept';
 if(/crash|error|fail|timeout|reject|invalid/.test(s))return 'crashed';
 return 'discarded';
}
/** Every candidate through the playhead, plus the confirmed best-so-far step line from frames. */
export function scoreSeries(results:readonly ResultRow[],frames:readonly {tick:number;snapshot:{value:number|null}}[],tick:number):ScoreSeries{
 const points=results.filter(r=>(r.tick??0)<=tick).map(r=>({tick:r.tick??0,value:typeof r.value==='number'&&Number.isFinite(r.value)?r.value:null,outcome:outcomeOf(r.status,r.kind),agent:r.agent,description:r.description,status:r.status}));
 const best:[number,number][]=[],newBest:[number,number][]=[];
 for(const f of frames){if(f.tick>tick||f.tick<0)continue;const v=f.snapshot.value;if(v==null||!Number.isFinite(v))continue;const last=best.at(-1);if(!last||last[1]!==v){if(last)newBest.push([f.tick,v]);best.push([f.tick,v]);}}
 return {points,best,newBest};
}
const COLORS:Record<Outcome,string>={baseline:'#5ebcc2',kept:'#92bc98',discarded:'#b5bfc2',crashed:'#c76a7d'};
const short=(v:number)=>String(Number(v.toPrecision(4)));
export function scoreChartSvg(series:ScoreSeries,metric:{name:string;direction:string},tick:number,esc:(v:unknown)=>string){
 const values=[...series.points.map(p=>p.value),...series.best.map(b=>b[1])].filter((v):v is number=>v!=null);
 if(!series.points.length&&!series.best.length)return '<p>No measurements recorded yet.</p>';
 const min=values.length?Math.min(...values):0,max=values.length?Math.max(...values):1,range=max-min||Math.abs(max)||1;
 const left=52,right=560,top=16,bottom=132,strip=150,end=Math.max(1,tick);
 const lo=max===min?min-range/2:min,span=max===min?range:max-min;
 const x=(t:number)=>left+Math.min(1,t/end)*(right-left),y=(v:number)=>bottom-(v-lo)/span*(bottom-top);
 const step=series.best.map(([t,v],i)=>`${i?'H':'M'}${x(t).toFixed(1)} ${i?`V${y(v).toFixed(1)}`:y(v).toFixed(1)}`).join('');
 const line=series.best.length?`<path class="best-line" d="${step}H${x(end).toFixed(1)}" fill="none" stroke="#dfcba5" stroke-width="2.5"/>`:'';
 const dot=(p:ScorePoint)=>{const cx=x(p.tick).toFixed(1),tip=`<title>${esc(p.agent)} · ${esc(p.status)} · ${p.value==null?'no score':short(p.value)} · ${esc(p.description)}</title>`;
  if(p.value==null)return `<g class="pt crashed">${tip}<path d="M${+cx-4} ${strip-4}l8 8m0 -8l-8 8" stroke="${COLORS.crashed}" stroke-width="2"/></g>`;
  const cy=y(p.value).toFixed(1);
  if(p.outcome==='crashed')return `<g class="pt crashed">${tip}<path d="M${+cx-4} ${+cy-4}l8 8m0 -8l-8 8" stroke="${COLORS.crashed}" stroke-width="2"/></g>`;
  return `<circle class="pt ${p.outcome}" cx="${cx}" cy="${cy}" r="${p.outcome==='discarded'?3.5:4.5}" fill="${p.outcome==='discarded'?'none':COLORS[p.outcome]}" stroke="${COLORS[p.outcome]}" stroke-width="1.6">${tip}</circle>`;};
 const stars=series.newBest.map(([t,v])=>`<path class="new-best" d="M${x(t).toFixed(1)} ${(y(v)-9).toFixed(1)}l5 9l-5 9l-5 -9z" fill="#f3d98b" stroke="#263e46"><title>New best ${short(v)} at tick ${t}</title></path>`).join('');
 const better=metric.direction==='maximize'?'↑ better':'↓ better';
 const latest=series.best.at(-1);
 return `<svg class="result-chart score-chart" viewBox="0 0 580 192" role="img" aria-label="${esc(metric.name)} for every candidate through tick ${Math.floor(tick)}; ${series.points.length} candidates, ${series.newBest.length} new bests"><path d="M${left} ${top-4}V${bottom+4}H${right}" fill="none" stroke="#79918b"/><text x="${left-6}" y="${top+4}" text-anchor="end" fill="#b9cac2" font-size="9">${short(max)}</text><text x="${left-6}" y="${bottom}" text-anchor="end" fill="#b9cac2" font-size="9">${short(min)}</text><text x="${left-6}" y="${strip+3}" text-anchor="end" fill="#c76a7d" font-size="8">no score</text><path d="M${left} ${strip}H${right}" stroke="#ffffff14" stroke-dasharray="3 4"/>${line}${series.points.map(dot).join('')}${stars}${latest?`<text x="${right}" y="${top-2}" text-anchor="end" fill="#dfcba5" font-size="11">best ${short(latest[1])}</text>`:''}<text x="${left}" y="172" fill="#b9cac2" font-size="9">Tick 0 → ${Math.floor(tick)} · ${esc(metric.name.replaceAll('_',' '))} ${better}</text><g font-size="9" fill="#b9cac2" transform="translate(${left} 186)"><circle cx="0" cy="-3" r="4" fill="${COLORS.kept}"/><text x="8" y="0">kept</text><circle cx="52" cy="-3" r="3.5" fill="none" stroke="${COLORS.discarded}" stroke-width="1.6"/><text x="60" y="0">discarded</text><path d="M126 -7l8 8m0 -8l-8 8" stroke="${COLORS.crashed}" stroke-width="2"/><text x="140" y="0">crashed / rejected</text><circle cx="238" cy="-3" r="4" fill="${COLORS.baseline}"/><text x="246" y="0">baseline</text><path d="M298 -3h16" stroke="#dfcba5" stroke-width="2.5"/><text x="320" y="0">best so far</text><path d="M392 -12l5 9l-5 9l-5 -9z" fill="#f3d98b"/><text x="402" y="0">new best</text></g></svg>`;
}
