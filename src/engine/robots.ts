export interface RobotAppearance{
 head:'rounded'|'round'|'monitor';
 eyes:'oval'|'happy';
 antenna:'center'|'offset-right'|'offset-left'|'pair';
 ears:'disc'|'compact'|'ring';
 prop:'magnifier'|'clipboard'|'flask';
}
/** Reusable appearance set; only identity chooses the variant, never timeline or roster order. */
export const ROBOT_APPEARANCES:readonly RobotAppearance[]=[
 {head:'rounded',eyes:'oval',antenna:'center',ears:'disc',prop:'magnifier'},
 {head:'monitor',eyes:'happy',antenna:'center',ears:'disc',prop:'clipboard'},
 {head:'round',eyes:'oval',antenna:'offset-right',ears:'disc',prop:'flask'},
 {head:'rounded',eyes:'happy',antenna:'pair',ears:'compact',prop:'magnifier'},
 {head:'monitor',eyes:'oval',antenna:'pair',ears:'disc',prop:'clipboard'},
 {head:'round',eyes:'happy',antenna:'offset-left',ears:'ring',prop:'flask'},
];
export function robotAppearance(id:string):RobotAppearance{
 const hash=[...id].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0);
 return ROBOT_APPEARANCES[hash%ROBOT_APPEARANCES.length];
}
