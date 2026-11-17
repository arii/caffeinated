export function boredomMeterAttributes(value:number|null,label:string):Record<string,string|null>{
 const known=value!=null&&Number.isFinite(value);
 return {role:known?'meter':'img','aria-label':known?label:`${label}: not measured`,'aria-valuemin':known?'0':null,'aria-valuemax':known?'100':null,'aria-valuenow':known?String(Math.round(value)):null};
}
