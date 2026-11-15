/** A short source-derived label, without generating new research claims. */
export function ideaBrief(text:string|undefined):string{
 if(!text)return '';
 const clean=text.replace(/\[[^\]]*\]/g,' ').replace(/\b\d[\w.-]*/g,' ').replace(/https?:\/\/\S+/g,' ');
 const words=clean.match(/[A-Za-z][A-Za-z'-]*/g)||[];
 const skip=new Set(['a','an','the','and','of','to','for','with','from','in','on','by','is','are','can','could','would','should','why','how','what','does','do','we','i','our','my','this','that','using','use','raise','lower','increase','reduce','replace','add','remove','extend','test','compare','evaluate','improve','refine','explore','find','measure']);
 const useful=words.filter(w=>!skip.has(w.toLowerCase()));
 const phrase=useful.slice(0,2).join(' ');
 return phrase?phrase[0].toUpperCase()+phrase.slice(1):'';
}
