import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {researchTrail,introHtml} from '../src/engine/intro.ts';
const esc=v=>String(v??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'})[c]);
const config=JSON.parse(readFileSync(new URL('../data/pages/intro.json',import.meta.url),'utf8'));
test('intro follows the requested order and keeps authors as a visible placeholder',()=>{
 const html=introHtml(config,researchTrail(null),esc);
 const at=s=>html.indexOf(s);
 assert.ok(at('SF AI Research Hack')<at('Tools we used')&&at('Tools we used')<at('Authors')&&at('Authors')<at('Why a boredom meter?')&&at('Why a boredom meter?')<at('How we use Exa / past.dev'));
 for(const t of ['Tinker','Exa','past.dev','Devin'])assert.match(html,new RegExp(t));
 assert.match(html,/class="placeholder"/);
});
test('each Ig Nobel citation links back to the Exa source card it came from',()=>{
 const r={events:[{tick:1,type:'question.asked',payload:{kind:'search'}},{tick:2,type:'question.asked',payload:{kind:'recall',backend:'pastdev'}}],entities:{sources:[{id:'S1',title:'Steak and risk',url:'https://doi.org/10.1/x'}],studies:[{id:'study:1',question:'Steak?',citations:['https://doi.org/10.1/x','https://doi.org/10.2/y']}]}};
 const t=researchTrail(r);
 assert.deepEqual(t.citations.map(c=>c.sourceId),['S1','']);
 assert.equal(t.exaSearches,1);assert.equal(t.memoryRecalls,1);assert.equal(t.pastdev,true);
 const html=introHtml(config,t,esc);
 assert.match(html,/data-source="S1">Exa result: Steak and risk/);
 assert.match(html,/no Exa result in this recording/);
});
