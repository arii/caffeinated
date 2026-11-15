/** Presentation only: Ari's backend owns boredom and regime decisions. */
export function boredomPercent(value:number):number{return Number.isFinite(value)?Math.max(0,Math.min(100,value)):0;}
const stops=[[94,188,194],[146,188,152],[221,194,112],[218,144,97],[199,106,125]];
export function boredomColor(value:number):string{
  const position=boredomPercent(value)/25,index=Math.min(3,Math.floor(position)),fraction=position-index;
  return '#'+stops[index].map((channel,i)=>Math.round(channel+(stops[index+1][i]-channel)*fraction).toString(16).padStart(2,'0')).join('');
}
