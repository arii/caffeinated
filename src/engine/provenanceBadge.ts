import type {RecordingManifest} from './replay.ts';

export type ProvenanceTone='fake'|'live'|'stalled'|'finished'|'unknown';
export interface ProvenanceBadge{label:string;tone:ProvenanceTone;chips:string[]}

function shortModel(value:string){
 if(/kimi/i.test(value))return 'Kimi';
 return value.split('/').filter(Boolean).at(-1)||'';
}

export function provenanceBadge(manifest:RecordingManifest|null|undefined):ProvenanceBadge{
 const provenance=manifest?.provenance;
 const chips:string[]=[];
 if(provenance?.exa==='off')chips.push('Exa off');
 else if(provenance?.exa==='live'||provenance?.exa==='on')chips.push('Exa on');
 if(provenance?.memory_backend==='pastdev')chips.push('past.dev memory');
 else if(provenance?.memory_backend==='local')chips.push('local memory');
 if(provenance?.llm==='fake'||provenance?.llm_mode==='fake')return {label:'Fake-LLM sample (plumbing demo, not research)',tone:'fake',chips};
 const model=typeof provenance?.llm==='string'&&provenance.llm!=='fake'?shortModel(provenance.llm):'';
 if(!model)return {label:'Unverified recording',tone:'unknown',chips};
 const stale=manifest?.stale===true||manifest?.liveness==='stale'||manifest?.status==='stale'||manifest?.status==='stalled';
 if(stale)return {label:'Stalled real run',tone:'stalled',chips};
 const ended=manifest?.status==='completed'||manifest?.status==='finished'||manifest?.status==='stopped'||manifest?.status==='ended'||manifest?.status==='interrupted';
 const live=!ended&&(manifest?.live===true||manifest?.liveness==='live'||manifest?.status==='running'||manifest?.status==='live');
 return live?{label:`Live ${model} run`,tone:'live',chips}:{label:'Finished real run',tone:'finished',chips};
}
