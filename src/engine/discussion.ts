import type {ReplayEvent} from './replay.ts';

type MessageEvent=ReplayEvent&{payload?:{to_agent_ids?:string[];text?:string};refs?:{to_agent_id?:string}};
export interface DiscussionCaption{brief:string;peers:string[]}

/** A literal, shortened archive excerpt; never synthetic dialogue. */
export function shortMessage(text:string,limit=110):string{
 const clean=text.replace(/\s+/g,' ').trim();
 if(clean.length<=limit)return clean;
 const prefix=clean.slice(0,limit-1),space=prefix.lastIndexOf(' ');
 return prefix.slice(0,space>limit*.6?space:prefix.length).replace(/[ ,;:—-]+$/,'')+'…';
}

/** Expiring speech, derived only from messages already reached by playback. */
export function discussionAt(events:readonly MessageEvent[],tick:number,agents:readonly {id:string;name:string}[],alias:(text:string)=>string=(s=>s),lifetime=18):Map<string,DiscussionCaption>{
 const names=new Map(agents.map(a=>[a.id,a.name])),captions=new Map<string,DiscussionCaption>();
 for(const event of events){
  if(event.tick>tick||event.tick<tick-lifetime||event.type!=='message.sent'||!event.agentId||!names.has(event.agentId))continue;
  const text=event.payload?.text||event.message||'';
  if(!text.trim())continue;
  const recipients=[...new Set([...(event.payload?.to_agent_ids||[]),...(event.refs?.to_agent_id?[event.refs.to_agent_id]:[])])];
  captions.set(event.agentId,{brief:shortMessage(alias(text)),peers:recipients.filter(id=>id!==event.agentId&&names.has(id)).map(id=>names.get(id)!)});
 }
 return captions;
}
