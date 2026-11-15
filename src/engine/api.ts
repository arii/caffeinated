import {STATIC_SITE,staticPath} from './staticSite.ts';
import {SnapshotSchema,type RunSnapshot,type Capabilities,type RunConfig} from './contract';
export async function request<T>(path:string,options?:RequestInit):Promise<T>{
  if(STATIC_SITE){const file=staticPath(path);if(!file)throw new Error('Not available in the static replay');const r=await fetch(file);if(!r.ok)throw new Error(`Request failed (${r.status})`);if(file.endsWith('.json.gz')){if(!r.body)throw new Error('Compressed recording body is unavailable');return new Response(r.body.pipeThrough(new DecompressionStream('gzip'))).json();}return r.json();}
  const r=await fetch('/api'+path,{...options,headers:{'Content-Type':'application/json',...options?.headers}});
  if(!r.ok){let message=`Request failed (${r.status})`;try{const e=await r.json();message=typeof e.detail==='string'?e.detail:message;}catch{}throw new Error(message);}return r.json();
}
export class ResearchClient{
  private stream:EventSource|null=null;
  private generation=0;
  constructor(private onSnapshot:(snapshot:RunSnapshot)=>void,private onConnection:(connected:boolean)=>void){}
  async health(){return request<Capabilities>('/health');}
  async list(){return request<RunSnapshot[]>('/runs');}
  async attach(id:string){
    const generation=++this.generation;
    this.stream?.close();this.stream=null;
    const s=SnapshotSchema.parse(await request<RunSnapshot>(`/runs/${encodeURIComponent(id)}`));if(generation!==this.generation)return;this.onSnapshot(s);
    this.stream=new EventSource(`/api/runs/${encodeURIComponent(id)}/events?after=${s.lastSequence}`);
    this.stream.onopen=()=>this.onConnection(true);
    this.stream.addEventListener('snapshot',e=>{if(generation!==this.generation)return;try{const parsed=SnapshotSchema.safeParse(JSON.parse((e as MessageEvent).data));if(parsed.success)this.onSnapshot(parsed.data);else this.onConnection(false);}catch{this.onConnection(false);}});
    this.stream.onerror=()=>this.onConnection(false);
  }
  async start(config:RunConfig){const s=SnapshotSchema.parse(await request<RunSnapshot>('/runs',{method:'POST',body:JSON.stringify(config)}));await this.attach(s.runId);return s;}
  async stop(id:string){return request<RunSnapshot>(`/runs/${id}/stop`,{method:'POST'});}
  dispose(){this.generation++;this.stream?.close();}
}
