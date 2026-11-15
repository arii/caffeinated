import type {StationId} from './types.ts';
export const ROUNDTABLE={x:-7.8,z:-4.6,radius:1.35};
const discussionSeats=[0,4,8,2,6,10,1,5,9,3,7,11];
export function discussionGoal(slot=0){const angle=-Math.PI/2+discussionSeats[((slot%12)+12)%12]*Math.PI/6;return {x:ROUNDTABLE.x+Math.cos(angle)*2.15,z:ROUNDTABLE.z+Math.sin(angle)*2.15};}
/** Walkable south-facing work positions, shared by replay and the physical lab. */
export function stationGoal(stationId:StationId,slot=0){
 if(stationId==='culture')return discussionGoal(slot);
 const offset=(slot%4-1.5)*.8;
 if(stationId==='analyzer')return {x:5.4+offset,z:-1.25};
 if(stationId==='explorer')return {x:.2+offset,z:-9.2};
 return {x:-7.3+offset,z:6.8};
}
