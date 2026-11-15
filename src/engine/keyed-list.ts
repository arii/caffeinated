export function reconcileByKey<T, E>(
 items:readonly T[],
 existing:readonly E[],
 itemKey:(item:T)=>string,
 elementKey:(element:E)=>string,
 create:(item:T)=>E,
 patch:(element:E,item:T)=>void
):E[]{
 const byKey=new Map(existing.map(element=>[elementKey(element),element]));
 return items.map(item=>{
  const key=itemKey(item),element=byKey.get(key)||create(item);
  byKey.delete(key);
  patch(element,item);
  return element;
 });
}
