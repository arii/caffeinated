import {test} from 'node:test';
import assert from 'node:assert/strict';
import {showReplayIntro} from '../src/engine/replayIntro.ts';
function setup(canPlay){
 const dialog={open:false,showModal(){this.open=true},close(){this.open=false}},play={},dismiss={};let starts=0;
 showReplayIntro(dialog,play,dismiss,canPlay,()=>{assert.equal(dialog.open,false);starts++});
 return {dialog,play,dismiss,starts:()=>starts};
}
test('the introduction opens before playback and Play closes it before starting the replay',()=>{
 const h=setup(true);assert.equal(h.dialog.open,true);assert.equal(h.starts(),0);h.play.onclick();assert.equal(h.starts(),1);
});
test('dismissing the introduction leaves playback paused',()=>{
 const h=setup(true);h.dismiss.onclick();assert.equal(h.dialog.open,false);assert.equal(h.starts(),0);
});
test('an empty or failed archive cannot start a replay but its introduction is dismissible',()=>{
 const h=setup(false);assert.equal(h.play.disabled,true);h.play.onclick();assert.equal(h.starts(),0);h.dismiss.onclick();assert.equal(h.dialog.open,false);
});
