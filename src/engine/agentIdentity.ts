export interface ManifestAgent{agent_id:string;type?:string;field?:string;family?:string;familySource?:string;display_name?:string;color?:string;role?:string}
export interface IdentityInput{id:string;name:string;role?:string;type?:string;family?:string;familySource?:string}
export interface Identity{initial:string;familyKey:'B'|'C'|'P'|'S'|'R';familyLabel:string;staff:boolean;color?:string}
const STAFF:Record<string,string>={conductor:'STAFF · CONDUCTOR',critic:'STAFF · CRITIC'};
function keyFor(field:string):Identity['familyKey']{const f=field.toLowerCase();if(/^b$|bio|medic|sleep|animal|ecolog|neuro/.test(f))return 'B';if(/^c$|chem|food|econ|psych|mind/.test(f))return 'C';if(/^p$|phys|acoust|mechan/.test(f))return 'P';return 'R';}
const LABELS:Record<string,string>={B:'BIO',C:'CHEM',P:'PHYSICS'};
/** Manifest fields win; the B/C/P name prefix is only the display-assignment fallback. */
export function agentIdentity(a:IdentityInput,m?:ManifestAgent):Identity{
 const type=a.type||m?.type||'',color=m?.color&&/^#[0-9a-f]{3,8}$/i.test(m.color)?m.color:undefined,initial=(a.name.trim()[0]||'?').toUpperCase();
 if(STAFF[type])return {initial,familyKey:'S',familyLabel:STAFF[type],staff:true,color};
 const field=(m?.field||'').trim();
 if(field)return {initial,familyKey:keyFor(field),familyLabel:field.replaceAll('_',' ').toUpperCase(),staff:false,color};
 const family=a.family||m?.family||'',source=a.familySource||m?.familySource;
 if(family&&source!=='display assignment'){const k=keyFor(family);return {initial,familyKey:k,familyLabel:LABELS[k]||family.toUpperCase(),staff:false,color};}
 const prefix=/^[BCP]\d+$/.test(a.name)?a.name[0]:family?keyFor(family):'R';
 return {initial,familyKey:prefix as Identity['familyKey'],familyLabel:LABELS[prefix]||'RESEARCH',staff:false,color};
}
const ACTIVITIES:Record<string,string>={idle:'idle',assigned:'taking an assignment',researching:'searching the literature',recalling:'recalling shared memory',proposing:'proposing an idea',gated:'checking the novelty gate',training:'running an experiment',reviewing:'reviewing results',talking:'in discussion',sharing:'sharing findings',snapping:'switching approach',writing_diary:'writing notes',thinking:'thinking',working:'working'};
export function humanizeActivity(token?:string){if(!token)return '';return ACTIVITIES[token]||token.replaceAll('_',' ').toLowerCase();}
export function humanizeRole(role?:string){if(!role)return '';const r=role.replaceAll('_',' ').toLowerCase();return r[0].toUpperCase()+r.slice(1);}
const EVENTS:Record<string,string>={'run.started':'Run started','run.finished':'Run finished','round.started':'New round','agent.assigned':'Assignment','boredom.measured':'Boredom measured','question.asked':'Question asked','observation.received':'Observation','hypothesis.proposed':'Idea proposed','gate.checked':'Novelty gate','experiment.started':'Experiment started','experiment.finished':'Experiment finished','verdict.issued':'Critic verdict','discovery.made':'New best','memory.written':'Memory saved','diary.written':'Notes written','llm.called':'Model call','message.sent':'Message','items.shared':'Shared findings','study.registered':'Study registered','study.result':'Study result','award.issued':'Award'};
export function eventLabel(type:string){return EVENTS[type]||type.replaceAll('.',' ').replaceAll('_',' ').replace(/^./,c=>c.toUpperCase());}
/** Placeholder messages (the event type itself) are not worth quoting. */
function isJson(t:string){if(!/^[[{]/.test(t))return false;try{return typeof JSON.parse(t)==='object';}catch{return /^\{\s*"|^\[\s*[{["]/.test(t);}}
export function meaningfulMessage(text?:string){const t=text?.trim()||'';return !!t&&!/^[a-z_]+(?: · [a-z_]+)+$/i.test(t)&&!isJson(t);}
export function eventCaption(e:{type:string;message?:string},agentName?:string,max=110){
 const head=[eventLabel(e.type),agentName].filter(Boolean).join(' · ');
 if(!meaningfulMessage(e.message))return head;
 const body=e.message!.replace(/\s+/g,' ').trim();
 return `${head} — ${body.length>max?body.slice(0,max-1)+'…':body}`;
}
/** Present researchers plus staff (conductor, critic) who have not acted yet, shown on standby. */
export function teamRoster<T extends {id:string;type?:string}>(agents:readonly T[],present:readonly T[]):(T&{standby?:boolean})[]{
 const ids=new Set(present.map(a=>a.id));
 return [...present,...agents.filter(a=>!ids.has(a.id)&&(a.type==='conductor'||a.type==='critic')).map(a=>({...a,standby:true}))];
}
