export interface AnnotationRect{left:number;right:number;top:number;bottom:number}
/** Input order is visibility priority; touching edges do not overlap. */
export function annotationVisibility(rects:readonly (AnnotationRect|null)[]):boolean[]{
 const kept:AnnotationRect[]=[];
 return rects.map(rect=>{
  if(!rect||!Object.values(rect).every(Number.isFinite)||rect.right<=rect.left||rect.bottom<=rect.top)return false;
  if(kept.some(other=>rect.left<other.right&&rect.right>other.left&&rect.top<other.bottom&&rect.bottom>other.top))return false;
  kept.push(rect);return true;
 });
}
