import {igJudgeBoard} from './igJudge.ts';
import {finaleReached} from './finale.ts';
import type {Recording} from './replay.ts';

/** The judge owns the ranking and score scale. Replay and live callers share this contract. */
export interface FinalIdea {
 id:string; title:string; description:string; score:number|null; rank?:number|null;
 verdict?:string; error?:string;
}
export function topIdeas(ideas:readonly FinalIdea[]):FinalIdea[]{
 return ideas.filter(i=>!i.error&&i.score!=null&&Number.isFinite(i.score))
  .map((idea,index)=>({idea,index}))
  .sort((a,b)=>{
   const rank=(i:FinalIdea)=>i.rank!=null&&Number.isFinite(i.rank)&&i.rank>0?i.rank:Infinity;
   return rank(a.idea)-rank(b.idea)||(b.idea.score!-a.idea.score!)||a.index-b.index;
  }).slice(0,3).map(({idea})=>idea);
}
export function finalPodiumHtml(ideas:readonly FinalIdea[],esc:(value:unknown)=>string):string{
 const top=topIdeas(ideas);
 if(!top.length)return '<section class="final-podium"><h2>Ig Nobel podium</h2><p role="status">Awaiting final judge scores. The podium will appear when judging is complete.</p></section>';
 const cards=top.map((idea,index)=>`<details class="podium-place podium-place-${index+1}"><summary><span class="podium-medal">${index+1}</span><span class="podium-label">${index===0?'Ig Nobel Prize winner':index===1?'Second place':'Third place'}</span><strong class="podium-title">${esc(idea.title||idea.id)}</strong><span class="podium-score">${esc(idea.score)}<small>Final score</small></span><span class="podium-inspect">Inspect idea</span></summary><div class="podium-description"><p>${esc(idea.description||'No additional idea description was supplied.')}</p>${idea.verdict?`<p>${esc(idea.verdict)}</p>`:''}<p><strong>Final score: ${esc(idea.score)}</strong></p><small>Idea ${esc(idea.id)}</small></div></details>`).join('');
 return `<section class="final-podium" aria-label="Final top three ideas"><h2>Ig Nobel podium</h2><p>Final judge ranking · Select an idea to explore its details.</p>${top.length<3?`<p>Only ${top.length} scored ${top.length===1?'idea is':'ideas are'} available.</p>`:''}<div class="podium-places">${cards}</div></section>`;
}
/** Adapter for the current judge artifact; no judging criteria are recomputed here. */
export function recordingPodiumHtml(recording:Recording,tick:number,esc:(value:unknown)=>string):string{
 if(!finaleReached(recording,tick))return '';
 const board=igJudgeBoard(recording.igjudge);
 return finalPodiumHtml(board?.ideas.map(i=>({id:i.studyId,title:i.title,description:i.hypothesis,score:i.total,rank:i.rank,verdict:i.verdict,error:i.error}))??[],esc);
}
