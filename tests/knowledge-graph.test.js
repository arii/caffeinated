import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {runInNewContext,runInContext} from 'node:vm';

const template=readFileSync(new URL('../scripts/knowledge_graph.html',import.meta.url),'utf8');
const graph={summary:{},nodes:[{id:'a',kind:'agent',label:'Scientist'},{id:'s',kind:'study',label:'Study',rank:1}],edges:[{source:'a',target:'s',kind:'proposed'}],journey:{}};
class Element{
 constructor(tag='div'){this.tag=tag;this.children=[];this.style={};this.attributes={};this.handlers={};}
 appendChild(child){this.children.push(child);}
 setAttribute(key,value){this.attributes[key]=String(value);}
 addEventListener(name,handler){this.handlers[name]=handler;}
 querySelector(tag){return this.querySelectorAll(tag)[0]||null;}
 querySelectorAll(tag){return this.children.flatMap(child=>[...(child.tag===tag?[child]:[]),...child.querySelectorAll(tag)]);}
 getBoundingClientRect(){return {width:390,height:460};}
}
function render(reducedMotion,data=graph){
 const elements=Object.fromEntries(['title','stats','legend','filters','g','q','fit','side'].map(id=>[id,new Element()]));
 const calls={frames:0,timers:0};
 const context={document:{getElementById:id=>elements[id],createElementNS:(_,tag)=>new Element(tag)},window:{addEventListener(){}},location:{hash:''},matchMedia:()=>({matches:reducedMotion}),requestAnimationFrame:()=>calls.frames++,setTimeout:()=>calls.timers++};
 runInNewContext(template.match(/<script>([\s\S]*)<\/script>/)[1].replace('__GRAPH__',JSON.stringify(data)),context);
 return {context,elements,calls};
}

test('reduced-motion graph settles and paints synchronously without animation or timers',()=>{
 const {context,elements,calls}=render(true);
 assert.deepEqual(calls,{frames:0,timers:0});
 assert.ok(runInContext('heat<=0.01&&fitted',context));
 const nodes=elements.g.children[0].querySelectorAll('g');
 assert.ok(nodes.every(node=>node.attributes.transform));
 const scale=runInContext('view.k',context);
 assert.ok(elements.g.querySelectorAll('text').every(label=>parseFloat(label.style.fontSize)*scale>=11-1e-9));
 elements.q.handlers.input({target:{value:'scientist'}});
 assert.ok(runInContext('heat<=0.01',context));
 assert.deepEqual(calls,{frames:0,timers:0});
});

test('normal graph keeps its animation and delayed fit',()=>{
 const {calls}=render(false);
 assert.deepEqual(calls,{frames:1,timers:1});
});

test('reduced-motion graph handles an empty visible layout without animation',()=>{
 const {calls,context}=render(true,{...graph,nodes:[],edges:[]});
 assert.deepEqual(calls,{frames:0,timers:0});
 assert.ok(runInContext('heat<=0.01',context));
});
