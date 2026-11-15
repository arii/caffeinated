export interface CurrentRuleThresholds{minRho:number;alpha:number;splitAlpha:number}
export interface CurrentRuleStudy{rho:number|null;p:number|null;direction?:string;halves?:readonly {rho:number|null;p:number|null;problem?:unknown}[]}

const defaults:CurrentRuleThresholds={minRho:.1,alpha:.005,splitAlpha:.05};
const finite=(value:unknown):value is number=>typeof value==='number'&&Number.isFinite(value);
const threshold=(value:unknown)=>finite(value)?value:undefined;
const label=(value:number)=>String(value);

export function currentRuleThresholds(judging:unknown):CurrentRuleThresholds{
 const data=judging&&typeof judging==='object'?judging as Record<string,unknown>:{};
 return {
  minRho:threshold(data.minRho??data.min_rho??data.min_effect_rho)??defaults.minRho,
  alpha:threshold(data.alpha??data.p_alpha??data.significance_alpha)??defaults.alpha,
  splitAlpha:threshold(data.splitAlpha??data.split_alpha??data.replication_alpha)??defaults.splitAlpha
 };
}

export function currentRules(study:CurrentRuleStudy|null|undefined,t:Partial<CurrentRuleThresholds>={}){
 const thresholds={...defaults,...t},failures:string[]=[],rho=study?.rho,p=study?.p,sign=study?.direction==='positive'?1:study?.direction==='negative'?-1:finite(rho)?Math.sign(rho):0,halves=study?.halves;
 if(!finite(rho)||rho*sign<thresholds.minRho)failures.push(`|ρ| ≥ ${label(thresholds.minRho)}`);
 if(!finite(p)||p>=thresholds.alpha)failures.push(`p < ${label(thresholds.alpha)}`);
 const splitConsistent=finite(rho)&&!!halves&&halves.length>=2&&halves.every(half=>{
  const halfRho=half?.rho,halfP=half?.p;
  return finite(halfRho)&&finite(halfP)&&halfP<thresholds.splitAlpha&&halfRho*sign>=thresholds.minRho&&!half.problem;
 });
 if(!splitConsistent)failures.push(`split-half consistency (both halves p < ${label(thresholds.splitAlpha)}, same direction, |ρ| ≥ ${label(thresholds.minRho)})`);
 return {pass:failures.length===0,failures};
}
