import {test} from 'node:test';
import assert from 'node:assert/strict';
import {compactDock,evidenceMetricLabel,metricValueLabel,taskTitle} from '../src/engine/runInfo.ts';
import {formatValue} from '../src/engine/moments.ts';

test('compact playback dock starts at the requested viewport limits',()=>{
 assert.equal(compactDock(700,800),true);
 assert.equal(compactDock(701,800),false);
 assert.equal(compactDock(900,500),true);
 assert.equal(compactDock(900,501),false);
});

test('user-facing Ig Nobel run title omits the output directory suffix',()=>{
 assert.equal(taskTitle({title:'Ig Nobel Prize hunt · out-ignobel',provenance:{command:['swarm.py','--task','ignobel']}}),'Ig Nobel Prize hunt');
});

test('evidence metric labels follow the metric direction',()=>{
 assert.equal(evidenceMetricLabel({name:'reward',direction:'maximize'}),'Reward');
 assert.equal(evidenceMetricLabel({name:'elapsed_time',direction:'minimize'}),'Loss');
});

test('metric values use the result value before the auxiliary reward',()=>{
 const label=metricValueLabel(0,100,'Loss',formatValue);
 assert.match(label,/Loss 0/);
 assert.doesNotMatch(label,/Loss 100/);
 assert.equal(metricValueLabel(null,100,'Loss',formatValue),'Reward 100');
 assert.equal(metricValueLabel(undefined,100,'Loss',formatValue),'');
});
