export interface CurrentRuleThresholds{minRho:number;alpha:number;splitAlpha:number}
export interface CurrentRuleStudy{rho:number|null;p:number|null;halves?:readonly {rho:number|null;p:number|null}[]}

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
 const thresholds={...defaults,...t},failures:string[]=[],rho=study?.rho,p=study?.p,heldOut=study?.halves?.[1];
 if(!finite(rho)||Math.abs(rho)<thresholds.minRho)failures.push(`|ρ| ≥ ${label(thresholds.minRho)}`);
 if(!finite(p)||p>=thresholds.alpha)failures.push(`p < ${label(thresholds.alpha)}`);
 if(!finite(rho)||!finite(heldOut?.rho)||!finite(heldOut?.p)||heldOut.p>=thresholds.splitAlpha||Math.sign(heldOut.rho)!==Math.sign(rho))
  failures.push(`split-half consistency (held-out replication half p < ${label(thresholds.splitAlpha)})`);
 return {pass:failures.length===0,failures};
}
