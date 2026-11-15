import {test} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync,readFileSync} from 'node:fs';
import {staticPath} from '../src/engine/staticSite.ts';
test('the static site maps API paths onto exported files under the Pages base',()=>{
 assert.equal(staticPath('/recordings','/caffeinated/'),'/caffeinated/recordings/index.json');
 assert.equal(staticPath('/recordings/abc?v=1','/caffeinated/'),'/caffeinated/recordings/abc.json');
 assert.equal(staticPath('/recordings/abc/artifacts/runs/x.diff','/caffeinated/'),'/caffeinated/recordings/abc/artifacts/runs/x.diff');
 assert.equal(staticPath('/recordings/abc/delta?base=1','/caffeinated/'),null);
 assert.equal(staticPath('/runs','/caffeinated/'),null);
});
test('the committed Pages build is replay-only, bundled, and never live',{skip:!existsSync(new URL('../docs/recordings/index.json',import.meta.url))},()=>{
 const items=JSON.parse(readFileSync(new URL('../docs/recordings/index.json',import.meta.url),'utf8'));
 assert.ok(items.length>=1);
 for(const m of items){assert.equal(m.live,false);assert.equal(m.sample,false);assert.ok(existsSync(new URL(`../docs/recordings/${m.id}.json`,import.meta.url)));}
 assert.ok(existsSync(new URL('../docs/.nojekyll',import.meta.url)));
 assert.match(readFileSync(new URL('../docs/index.html',import.meta.url),'utf8'),/\/caffeinated\/assets\//);
});
