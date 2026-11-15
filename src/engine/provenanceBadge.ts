import type {Recording,RecordingManifest} from './replay.ts';

export type ProvenanceTone='fake'|'live'|'stalled'|'finished'|'stopped'|'unknown';
export interface ProvenanceBadge{label:string;tone:ProvenanceTone;chips:string[]}

function shortModel(value:string){
 if(/kimi/i.test(value))return 'Kimi';
 return value.split('/').filter(Boolean).at(-1)||'';
}

const creditError=/\b(?:402|credit|billing|payment|quota)\b/i;
function hasCreditError(manifest:RecordingManifest,recording?:Pick<Recording,'events'>|null){
 const mentions=(value:unknown)=>typeof value==='string'&&creditError.test(value.replace(/https?:\/\/\S+/gi,' '));
 if(Array.isArray(manifest.publish_errors)&&manifest.publish_errors.some(issue=>mentions(issue.kind)||mentions(issue.message)))return true;
 return (recording?.events||[]).some(event=>
  (event.type==='run.finished'||event.type==='run.stopped')&&(
   mentions(event.message)||['text','error','reason','detail','message'].some(key=>mentions(event.payload?.[key]))
  )
 );
}
function commandRounds(manifest:RecordingManifest){
 const command=manifest.provenance?.command;
 const raw=Array.isArray(command)?command.join(' '):typeof command==='string'?command:'';
 const value=raw.match(/(?:^|\s)--rounds(?:=|\s+)["']?(\d+)/)?.[1];
 const parsed=Number(value);
 return Number.isFinite(parsed)&&parsed>0?parsed:undefined;
}
function stoppedLabel(manifest:RecordingManifest,recording?:Pick<Recording,'events'>|null){
 const eventRounds=(recording?.events||[]).flatMap(event=>[event.round,event.payload?.round]).filter((value):value is number=>typeof value==='number'&&Number.isFinite(value));
 const actual=Math.max(manifest.time?.rounds||0,...eventRounds);
 const requested=manifest.requestedRounds||manifest.requested_rounds||manifest.rounds||manifest.run?.rounds||commandRounds(manifest);
 const rounds=actual?` (${actual}${requested?`/${requested}`:''} rounds)`:'';
 const credit=hasCreditError(manifest,recording)?' · Tinker credit ran out':'';
 return `Stopped real run${rounds}${credit}`;
}

export function provenanceBadge(manifest:RecordingManifest|null|undefined,recording?:Pick<Recording,'events'>|null):ProvenanceBadge{
 const provenance=manifest?.provenance;
 const chips:string[]=[];
 if(provenance?.exa==='off')chips.push('Exa off');
 else if(provenance?.exa==='live'||provenance?.exa==='on')chips.push('Exa on');
 if(provenance?.memory_backend==='pastdev')chips.push('past.dev memory');
 else if(provenance?.memory_backend==='local')chips.push('local memory');
 if(provenance?.llm==='fake'||provenance?.llm_mode==='fake')return {label:'Fake-LLM sample (plumbing demo, not research)',tone:'fake',chips};
 const model=typeof provenance?.llm==='string'&&provenance.llm!=='fake'?shortModel(provenance.llm):'';
 if(!model)return {label:'Unverified recording',tone:'unknown',chips};
 if(manifest?.status==='stopped')return {label:stoppedLabel(manifest,recording),tone:'stopped',chips};
 const stale=manifest?.stale===true||manifest?.liveness==='stale'||manifest?.status==='stale'||manifest?.status==='stalled';
 if(stale)return {label:'Stalled real run',tone:'stalled',chips};
 const ended=manifest?.status==='completed'||manifest?.status==='finished'||manifest?.status==='ended'||manifest?.status==='interrupted';
 const live=!ended&&(manifest?.live===true||manifest?.liveness==='live'||manifest?.status==='running'||manifest?.status==='live');
 return live?{label:`Live ${model} run`,tone:'live',chips}:{label:'Finished real run',tone:'finished',chips};
}
