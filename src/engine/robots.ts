export interface RobotAppearance{
 head:'rounded'|'round'|'monitor';
 eyes:'oval'|'happy';
 antenna:'center'|'offset-right'|'offset-left'|'pair';
 ears:'disc'|'compact'|'ring';
 prop:'magnifier'|'clipboard'|'flask';
 shell:string; accent:string; trim:string;
}
/** Reusable appearance set; only identity chooses the variant, never timeline or roster order. */
export const ROBOT_APPEARANCES:readonly RobotAppearance[]=[
 {head:'rounded',eyes:'oval',antenna:'center',ears:'disc',prop:'magnifier',shell:'#fff7df',accent:'#1987c1',trim:'#f69a3d'},
 {head:'monitor',eyes:'happy',antenna:'center',ears:'disc',prop:'clipboard',shell:'#fce3ef',accent:'#d45e9b',trim:'#8745a8'},
 {head:'round',eyes:'oval',antenna:'offset-right',ears:'disc',prop:'flask',shell:'#e2f2ea',accent:'#398f86',trim:'#efbc56'},
 {head:'rounded',eyes:'happy',antenna:'pair',ears:'compact',prop:'magnifier',shell:'#e5eaf9',accent:'#6965b4',trim:'#e690aa'},
 {head:'monitor',eyes:'oval',antenna:'pair',ears:'disc',prop:'clipboard',shell:'#fff0d4',accent:'#cc8337',trim:'#328ea5'},
 {head:'round',eyes:'happy',antenna:'offset-left',ears:'ring',prop:'flask',shell:'#f9dfed',accent:'#dc75a9',trim:'#6c95bc'},
];
export function robotAppearance(id:string):RobotAppearance{
 const hash=[...id].reduce((n,c)=>(n*31+c.charCodeAt(0))>>>0,0);
 return ROBOT_APPEARANCES[hash%ROBOT_APPEARANCES.length];
}
