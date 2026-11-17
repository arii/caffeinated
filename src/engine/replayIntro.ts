export function showReplayIntro(dialog:HTMLDialogElement,play:HTMLButtonElement,dismiss:HTMLButtonElement,canPlay:boolean,onPlay:()=>void){
 play.disabled=!canPlay;
 play.onclick=()=>{if(!canPlay)return;dialog.close();onPlay();};
 dismiss.onclick=()=>dialog.close();
 dialog.showModal();
}
