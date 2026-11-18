export const DEFAULT_PACE=1;
export function playbackShortcut(event:KeyboardEvent,blocked:boolean,toggle:()=>void){
 const target=event.target as Element|null;
 if(event.code!=='Space'||event.defaultPrevented||event.repeat||event.altKey||event.ctrlKey||event.metaKey||event.shiftKey||blocked||target?.closest?.('input,select,textarea,button,a,summary,[contenteditable]:not([contenteditable=false]),[role=button]'))return;
 event.preventDefault();toggle();
}
