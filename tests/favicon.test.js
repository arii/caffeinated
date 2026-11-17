import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
test('Lab, About and graph use the shared robot favicon and touch icon',()=>{
 for(const path of ['index.html','docs/about.html','scripts/knowledge_graph.html','docs/knowledge-graph.html']){
  const html=readFileSync(new URL(`../${path}`,import.meta.url),'utf8');
  assert.match(html,/<link rel="icon" type="image\/svg\+xml" href="[^\"]*robot\.svg">/);
  assert.match(html,/<link rel="apple-touch-icon" href="[^\"]*apple-touch-icon\.png">/);
 }
 assert.match(readFileSync(new URL('../public/robot.svg',import.meta.url),'utf8'),/viewBox="0 0 64 64"/);
 assert.equal(readFileSync(new URL('../public/apple-touch-icon.png',import.meta.url)).subarray(1,4).toString(),'PNG');
});
