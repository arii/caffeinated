export const conversationQuestions=[['now','Now','What is happening now?'],['doing','Current task','What are you doing?'],['idea','Core idea','Tell me about your idea'],['result','Findings','What did you find?'],['notes','Notes','Your research notes'],['talk','Dialogue','Recorded conversations with other scientists']];
export function scientistHint(coarse:boolean){return coarse?'Tap a scientist':'Click a scientist';}
export function conversationPlacement(width:number,height:number,headerBottom:number,rail:{right:number;bottom:number},anchorX:number,cardHeight:number){
 const portrait=width<height&&width<=750,margin=12,top=Math.max(headerBottom+margin,portrait?rail.bottom+14:0),left=portrait?8:rail.right+14;
 if(portrait)return {left,width:width-16,top:Math.max(top,height-margin-cardHeight)};
 const rightSpace=width-margin-anchorX-32,leftSpace=anchorX-32-left,onRight=rightSpace>=leftSpace;
 const cardWidth=Math.min(380,Math.max(220,onRight?rightSpace:leftSpace),width-margin-left);
 return {left:onRight?width-margin-cardWidth:left,width:cardWidth,top};
}
