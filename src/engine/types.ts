import type * as THREE from 'three';
export type StationId='culture'|'analyzer'|'explorer'|'notebook';
export interface Collider{minX:number;maxX:number;minZ:number;maxZ:number}
export interface Station{id:StationId;name:string;description:string;position:THREE.Vector3;radius:number}
export interface AgentView{id:string;name:string;role:string;state:'idle'|'thinking'|'working'|'reviewing';stationId:StationId;boredom:number|null;ideaBrief?:string;discussionBrief?:string;discussionPeers?:string[];position?:{x:number;z:number;heading?:number;moving?:boolean}}
export interface LabState{progress:number;boredom:number;running:boolean;replay?:boolean;agents:AgentView[]}
export interface LabWorld{scene:THREE.Scene;camera:THREE.PerspectiveCamera;colliders:Collider[];bounds:Collider;stations:Station[];update:(time:number,state:LabState)=>void;dispose?:()=>void;exposure?:number;setOverview?:(overview:boolean)=>void;agentPositions?:()=>{id:string;position:THREE.Vector3}[]}
