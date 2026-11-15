import {test} from 'node:test';
import assert from 'node:assert/strict';
import {affect} from '../src/engine/affect.ts';
test('bored scientists walk slower, droop, slump, desaturate and doze; engaged ones are quick and bouncy',()=>{
 const fresh=affect(5),drowsy=affect(95),mid=affect(40);
 assert.equal(fresh.level,'frenetic');assert.equal(drowsy.level,'drowsy');assert.equal(mid.level,'engaged');assert.equal(affect(70).level,'bored');
 assert.ok(fresh.walk>1.2&&drowsy.walk<.6);
 assert.ok(fresh.turn>drowsy.turn);
 assert.ok(fresh.bob>0&&drowsy.bob===0);
 assert.ok(drowsy.droop>.35&&fresh.droop===0);
 assert.ok(drowsy.slump>0&&mid.slump===0);
 assert.ok(drowsy.saturation<.5&&fresh.saturation===1);
 assert.equal(drowsy.zzz,true);assert.equal(affect(60).zzz,false);
 for(let b=0;b<=100;b+=5){const a=affect(b),n=affect(b+5);assert.ok(n.walk<=a.walk&&n.droop>=a.droop&&n.saturation<=a.saturation,`monotone at ${b}`);}
});
test('unknown boredom is neutral and reduced motion removes bouncing',()=>{
 assert.deepEqual(affect(null),{level:'unknown',walk:1,turn:1,bob:0,bobHz:0,droop:0,slump:0,saturation:1,zzz:false});
 assert.equal(affect(5,true).bob,0);
 assert.equal(affect(5,true).walk,affect(5).walk);
 assert.equal(affect(150).level,'drowsy');
});
