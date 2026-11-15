import * as THREE from 'three';
import { createWorld } from './world.js';
import { createRun, step as stepTutorial, exportExperiment } from './simulation.js';
import { loadTrace, createReplay, step as stepReplay, findArm, controlArm, refreshReplay, sourcesSeen, reuseLinks } from './replay.js';
const $ = id => document.getElementById(id);
const params = new URLSearchParams(location.search);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
let mode = params.get('mode') === 'tutorial' ? 'tutorial' : 'replay';
let traceUrl = params.get('trace') || 'data/fixtures/offline_swarm.trace.json';
let trace = null, run = createRun(), baseline = createRun({ boredom:false });
let auto = null, started = false, near = null, selectedStation = 'culture', toastTimer;
const keys = new Set();
const terminal = $('terminal'), guide = $('help-dialog');
let world, renderer, camera, yaw = 0, pitch = 0, drag = false, lastPointer = null;
const replaying = () => mode === 'replay' && trace;
const fmt = v => v == null ? '—' : Number(v).toFixed(4);
function toast(message) { $('toast').innerHTML = message; $('toast').hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(()=>$('toast').hidden=true,4600); }
function unlock() { if (document.pointerLockElement) document.exitPointerLock(); keys.clear(); }
function lock() {
  if (!started || terminal.open || guide.open) return;
  try { renderer.domElement.requestPointerLock?.()?.catch(()=>{}); } catch { /* Drag and arrow controls remain available. */ }
}
function newRuns() {
  if (replaying()) { const primary = findArm(trace); run = createReplay(trace, primary.arm); const c = controlArm(trace, primary); baseline = c ? createReplay(trace, c.arm) : null; }
  else { run = createRun(); baseline = createRun({ boredom:false }); }
}
function replayToast() {
  const ev = run.events || [];
  const pivot = ev.find(e => e.type === 'pivot'), lead = ev.find(e => e.type === 'lead'), reuse = ev.find(e => e.type === 'reuse'), critic = ev.find(e => e.type === 'critic');
  if (pivot) return toast(`<b>${pivot.experiment.regime}</b> · swarm boredom ${pivot.experiment.boredom}% crossed ${run.threshold}%. Conductor reassigns: ${esc(pivot.round?.rationale || '')}`);
  if (lead) return toast(`<b>EXA</b> · ${esc(lead.memory.agent)} scouted “${esc(lead.source?.title || lead.memory.source_ids[0])}” and wrote a lead to shared memory.`);
  if (reuse) return toast(`<b>PAST.DEV</b> · ${esc(reuse.experiment.agent)} built on ${esc(reuse.lead.author)}’s lead (${esc(reuse.lead.source_ids.join(', '))}).`);
  if (critic) return toast(`<b>CRITIC</b> · seed-43 replication: ${esc(critic.experiment.verdict || critic.experiment.status)} at ${fmt(critic.experiment.val_bpb)} val_bpb.`);
}
function advance() {
  if (run.finished) return;
  if (replaying()) { stepReplay(run); if (baseline && !baseline.finished) stepReplay(baseline); replayToast(); }
  else { stepTutorial(run); stepTutorial(baseline); if (run.experiments.at(-1).pivot) toast('NEW HYPOTHESIS · Explorer used the Analyst’s finding to change direction.'); }
  world.syncAgents?.(replaying() ? Object.values(run.agents) : []);
  if (run.finished && !params.has('live')) { clearInterval(auto); auto=null; toast(replaying() ? `REPLAY COMPLETE · best ${fmt(run.bestValBpb)} val_bpb, ${run.pivots} pivot(s), ${reuseLinks(run).length} cross-agent memory reuses. Open the notebook.` : 'RESEARCH COMPLETE · Curiosity found a new growth region. Open the notebook to inspect your run.'); }
  updateHUD(); if (terminal.open) renderTerminal(terminal.dataset.station);
}
function toggleAuto() {
  if (auto) { clearInterval(auto); auto=null; }
  else if (!run.finished) { advance(); if (!run.finished || params.has('live')) auto=setInterval(advance, replaying() ? 1300 : 1600); }
  if (terminal.open) renderTerminal(terminal.dataset.station);
}
function reset() {
  clearInterval(auto); auto=null; newRuns(); world?.syncAgents?.(replaying() ? Object.values(run.agents) : []);
  updateHUD(); if(terminal.open) renderTerminal(terminal.dataset.station);
  toast(replaying() ? `Replay rewound · ${esc(run.arm.label)} · ${run.budget} events.` : `Fresh culture prepared. Seed 42 · ${run.budget} experiments.`);
}
function exportRun() {
  const data = replaying() ? trace : exportExperiment(run,baseline);
  const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
  const a=document.createElement('a'); a.href=url; a.download=replaying() ? traceUrl.split('/').pop() : 'biolab-seed-42.json'; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000);
}
async function setMode(next, url = traceUrl) {
  clearInterval(auto); auto = null; mode = next; traceUrl = url;
  if (mode === 'replay') {
    try { trace = await loadTrace(traceUrl); }
    catch (error) { console.error(error); toast(`Could not load ${esc(traceUrl)}: ${esc(error.message)}. Showing the tutorial.`); mode = 'tutorial'; trace = null; }
  }
  const q = new URLSearchParams(location.search); q.set('mode', mode); if (mode === 'replay') q.set('trace', traceUrl); history.replaceState(null, '', '?' + q);
  document.body.classList.toggle('replay-mode', mode === 'replay');
  $('mode-toggle').textContent = mode === 'replay' ? '▶ Replay real run' : '✳ Tutorial (synthetic)';
  $('trace-select').hidden = mode !== 'replay';
  newRuns(); world?.syncAgents?.(replaying() ? Object.values(run.agents) : []);
  renderStatic(); updateHUD(); if (terminal.open) renderTerminal(terminal.dataset.station);
}
function provenanceText() {
  if (!replaying()) return 'TUTORIAL · SYNTHETIC SIMULATION<br><small>Scripted two-basin model. Not a real result.</small>';
  const p = run.arm.provenance;
  return `REPLAY · ${esc(run.arm.label).toUpperCase()}<br><small>LLM ${esc(p.llm)} · GPU ${esc(p.gpu)} · Exa ${esc(p.exa)} · memory ${esc(p.memory_backend)}</small>`;
}
function renderStatic() {
  $('build-label').innerHTML = `<i></i> ${provenanceText()}`;
  $('mission-title').innerHTML = replaying() ? 'What did the<br>swarm really do?' : 'Little sprouts.<br>Big discoveries.';
  const names = replaying() ? ['Workers', 'Critic', 'Exa scouts', 'past.dev'] : ['Culture', 'Analyzer', 'Explorer', 'Memory'];
  document.querySelectorAll('.toolbelt button b').forEach((b, i) => b.textContent = names[i]);
  $('location-text').textContent = replaying() ? `REPLAY ${run.arm.arm}${baseline ? ' VS ' + baseline.arm.arm : ''} · ${trace.title}` : 'GROW CLUB / EVERYONE’S WELCOME';
}
const regimeColor = { EXPLOIT: '#b3dcb0', SNAP: '#f0c68a', BREAKOUT: '#f2a07b', CONVERGED: '#a9b8d8' };
function chart() {
  if (!replaying()) {
    const x=i=>28+i/run.budget*540, y=v=>140-v*120;
    const path=arm=>arm.experiments.map((e,i)=>`${i?'L':'M'}${x(e.id)},${y(e.best)}`).join(' ');
    const grid=[0,.25,.5,.75,1].map(v=>`<line x1="28" x2="568" y1="${y(v)}" y2="${y(v)}" stroke="#b9dab51b" stroke-dasharray="3 4"/><text x="18" y="${y(v)+3}" text-anchor="end" fill="#90b39c" font-size="8">${v}</text>`).join('');
    const pivot=run.experiments.find(e=>e.pivot);
    return `<div class="chart-legend"><span>Curiosity ${run.best.toFixed(3)}</span><span>Baseline ${baseline.best.toFixed(3)}</span></div><div class="terminal-chart"><svg viewBox="0 0 580 160" role="img" aria-label="Best synthetic growth: curiosity ${run.best.toFixed(3)}, baseline ${baseline.best.toFixed(3)}">${grid}${pivot?`<line x1="${x(pivot.id)}" x2="${x(pivot.id)}" y1="18" y2="140" stroke="#d5bb81" stroke-dasharray="3 4"/>`:''}<path d="${path(baseline)}" fill="none" stroke="#749b96" stroke-width="2" stroke-dasharray="5 4"/><path d="${path(run)}" fill="none" stroke="#c0e9a8" stroke-width="2.5"/><text x="28" y="156" fill="#90b39c" font-size="7">EXPERIMENT 1</text><text x="568" y="156" fill="#90b39c" text-anchor="end" font-size="7">${run.budget}</text></svg></div>`;
  }
  const arms = [run, baseline].filter(Boolean);
  const n = Math.max(...arms.map(a => a.budget), 1);
  const vals = arms.flatMap(a => a.arm.experiments.map(e => e.val_bpb)).filter(v => v != null);
  const lo = Math.min(...vals), hi = Math.max(...vals), span = Math.max(hi - lo, 1e-6);
  const x = i => 40 + (i - 1) / Math.max(n - 1, 1) * 528, y = v => 22 + (v - lo) / span * 118;
  const bands = run.arm.experiments.slice(0, run.experiments.length).map(e => e.regime !== 'EXPLOIT' ? `<rect x="${x(e.id) - 264 / n}" width="${528 / n}" y="18" height="122" fill="${regimeColor[e.regime]}" opacity=".13"/>` : '').join('');
  const path = a => a.experiments.map((e, i) => `${i ? 'L' : 'M'}${x(e.id)},${y(e.best_val_bpb)}`).join(' ');
  const dots = run.experiments.filter(e => e.val_bpb != null).map(e => `<circle cx="${x(e.id)}" cy="${y(e.val_bpb)}" r="2.6" fill="${e.kind === 'critic' ? '#ffe2a0' : e.status === 'keep' ? '#c0e9a8' : '#8fb0a5'}"><title>#${e.id} ${esc(e.agent)} ${esc(e.description)} → ${e.val_bpb}</title></circle>`).join('');
  const pivots = run.experiments.filter(e => e.pivot).map(e => `<line x1="${x(e.id)}" x2="${x(e.id)}" y1="18" y2="140" stroke="#d5bb81" stroke-dasharray="3 4"/><text x="${x(e.id) + 3}" y="26" fill="#d5bb81" font-size="7">${e.regime}</text>`).join('');
  const grid = [lo, lo + span / 2, hi].map(v => `<line x1="40" x2="568" y1="${y(v)}" y2="${y(v)}" stroke="#b9dab51b" stroke-dasharray="3 4"/><text x="36" y="${y(v) + 3}" text-anchor="end" fill="#90b39c" font-size="7">${v.toFixed(4)}</text>`).join('');
  return `<div class="chart-legend"><span>${esc(run.arm.label)} best ${fmt(run.bestValBpb)}</span>${baseline ? `<span>${esc(baseline.arm.label)} best ${fmt(baseline.bestValBpb)}</span>` : ''}</div><div class="terminal-chart"><svg viewBox="0 0 580 160" role="img" aria-label="Best val_bpb so far (lower is better)">${bands}${grid}${pivots}${baseline ? `<path d="${path(baseline)}" fill="none" stroke="#749b96" stroke-width="2" stroke-dasharray="5 4"/>` : ''}<path d="${path(run)}" fill="none" stroke="#c0e9a8" stroke-width="2.5"/>${dots}<text x="40" y="156" fill="#90b39c" font-size="7">EVENT 1 · val_bpb (lower is better) · shaded = SNAP/BREAKOUT</text><text x="568" y="156" fill="#90b39c" text-anchor="end" font-size="7">${n}</text></svg></div>`;
}
const titles={culture:'Buddy’s grow station',analyzer:'The Analyst’s bench',explorer:'Curiosity engine',notebook:'Shared research memory'};
const replayTitles={culture:'Worker bench · GPU runs',analyzer:'Critic & conductor',explorer:'Exa expedition terminal',notebook:'Shared memory · past.dev'};
function stats() {
  if (replaying()) return `<div class="terminal-stats"><div class="terminal-stat"><label>BEST VAL_BPB</label><strong>${fmt(run.bestValBpb)}</strong></div><div class="terminal-stat"><label>SWARM BOREDOM · ${esc(run.regime)}</label><strong>${run.meter}<small>%</small></strong></div><div class="terminal-stat"><label>EVENTS · ROUND ${run.round ?? '—'}</label><strong>${run.experiments.length}<small> / ${run.budget}</small></strong></div></div>`;
  return `<div class="terminal-stats"><div class="terminal-stat"><label>BEST GROWTH</label><strong>${run.best.toFixed(3)}</strong></div><div class="terminal-stat"><label>BOREDOM</label><strong>${run.meter}<small>%</small></strong></div><div class="terminal-stat"><label>EXPERIMENTS</label><strong>${run.experiments.length}<small> / ${run.budget}</small></strong></div></div>`;
}
const memTypes = new Set(['lead', 'lesson', 'verdict', 'assignment']);
function memoryRow(m) {
  const badge = m.reused_by?.length ? `<em class="reuse">REUSED BY ${esc(m.reused_by.map(r => r.agent).join(', '))}</em>` : m.recalled_by?.length ? `<em class="recall">read by ${esc(m.recalled_by.join(', '))}</em>` : '';
  return `<div class="memory-item ${m.type}"><small>EXP ${m.experiment}<br>${esc(m.type || '')}</small><strong>${esc(m.agent || m.role)}</strong><span>${esc(m.message)} ${badge}</span></div>`;
}
function notebook(all = false) {
  const items = replaying() ? run.memory.filter(m => all || memTypes.has(m.type) || m.reused_by.length) : run.memory;
  return items.length ? items.slice().reverse().map(memoryRow).join('') : '<p>The notebook is empty. Run your first experiment in the culture chamber.</p>';
}
function sourceCard(s) {
  return `<div class="source-card"><small>${esc(s.id)} · ${esc(s.published || 'undated')} · found by ${esc(s.agent)}${s.cited_by.length ? ` · cited by ${esc(s.cited_by.join(', '))}` : ''}</small><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title || s.url)}</a><span>${esc(s.highlight)}</span></div>`;
}
function rosterRows() {
  if (!replaying()) return '';
  return Object.values(run.agents).map(a => `<div class="roster-row ${esc(a.role)}"><b>${esc(a.id)}</b><span class="chip">${esc(a.role)}</span><i style="--b:${a.boredom}%"></i><small>${a.last ? `${esc(a.last.status)} ${a.last.val_bpb != null ? a.last.val_bpb.toFixed(4) : ''}` : a.id === 'conductor' ? `B ${a.boredom}%` : ''}</small></div>`).join('');
}
function buttons(actions) { return `<div class="terminal-buttons">${actions.map(([action,label,secondary])=>`<button data-action="${action}" class="${secondary?'secondary':''}" ${['step','auto'].includes(action)&&run.finished?'disabled':''}>${label}</button>`).join('')}</div>`; }
const runButtons = () => buttons([['step','Replay next event →'],['auto',auto?'Pause replay':'Auto replay',true]]);
function renderReplayTerminal(id) {
  let html = `<h2>${replayTitles[id]}</h2>`;
  if (id === 'culture') {
    const latest = run.experiments.slice(-8).reverse();
    html += `<p>Each worker proposes one <code>train.py</code> change per round and runs it on the GPU (${esc(run.arm.provenance.gpu)}). The confirmed best only moves when the critic replicates it.</p>` + stats() + chart();
    html += `<div class="table-scroll"><table><thead><tr><th>#</th><th>AGENT</th><th>ROLE</th><th>CHANGE</th><th>VAL_BPB</th><th>STATUS</th><th>LEAD</th></tr></thead><tbody>${latest.map(e => `<tr><td>${e.id}</td><td>${esc(e.agent)}</td><td>${esc(e.role)}</td><td>${esc(e.description)}<br><small>${esc(e.commit)}</small></td><td>${e.val_bpb != null ? e.val_bpb.toFixed(4) : '—'}</td><td>${esc(e.status)}</td><td>${e.lead ? esc(e.lead.id) : ''}</td></tr>`).join('')}</tbody></table></div>` + runButtons();
  } else if (id === 'analyzer') {
    const verdicts = run.experiments.filter(e => e.kind === 'critic');
    const info = run.roundInfo;
    html += `<p>The conductor reads the Boredom Meter each round. At ${run.threshold}% it SNAPs (divergent slots + Exa scouts); at ${run.breakout}% it BREAKs OUT. ${run.boredom ? '' : '<b>This arm has the meter disabled; the value shown is the shadow meter.</b>'}</p>` + stats();
    html += info ? `<p class="model-note">ROUND ${info.round} · ${esc(info.regime)} · B=${info.boredom}% · ${esc(info.rationale)}<br>${Object.entries(info.agent_boredom).map(([a, b]) => `${esc(a)} ${b}% (${esc(info.scouts.includes(a) ? 'scout' : info.roles[a])})`).join(' · ')}</p>` : '';
    html += `<h3>Critic replications</h3>${verdicts.length ? verdicts.map(e => `<div class="memory-item"><small>EXP ${e.id}</small><strong>${esc(e.verdict || e.status)}</strong><span>${esc(e.description)} → ${fmt(e.val_bpb)}</span></div>`).join('') : '<p>No candidate has reached the critic yet.</p>'}` + chart();
  } else if (id === 'explorer') {
    const scouts = run.research.filter(q => q.purpose !== 'prior-art').slice().reverse();
    const prior = run.research.filter(q => q.purpose === 'prior-art').slice(-4).reverse();
    const leadSources = [...new Set(run.memory.filter(m => m.type === 'lead').flatMap(m => m.source_ids))].map(sid => run.arm.sources[sid]).filter(Boolean);
    html += `<p>Scouts search Exa when the swarm is bored; every worker also runs a prior-art search before committing. Sources below are what Exa returned in this run (${esc(run.arm.provenance.exa)}), and which agents cited them.</p>` + stats();
    html += `<h3>Sources turned into leads (${leadSources.length})</h3>${leadSources.length ? leadSources.slice().reverse().map(sourceCard).join('') : '<p>No scout lead yet. Scouts are only assigned in SNAP/BREAKOUT.</p>'}`;
    html += `<h3>Scout queries</h3>${scouts.length ? scouts.map(q => `<div class="memory-item"><small>${esc(q.id)} · R${q.round}</small><strong>${esc(q.agent)}</strong><span>${esc(q.purpose)}: “${esc(q.query)}” → ${q.n_results} result(s)</span></div>`).join('') : '<p>None yet.</p>'}`;
    html += `<h3>Latest prior-art checks</h3>${prior.map(q => `<div class="memory-item"><small>${esc(q.id)}</small><strong>${esc(q.agent)}</strong><span>“${esc(q.query)}” → ${q.source_ids.map(sid => esc(run.arm.sources[sid]?.title || sid)).join(' · ')}</span></div>`).join('')}`;
    html += `<p class="model-note">${sourcesSeen(run).length} Exa sources seen so far · ${run.arm.summary.exa_queries} queries in the full run.</p>` + runButtons();
  } else {
    const links = reuseLinks(run);
    html += `<p>Every claim, result, lead and verdict is written to shared memory (${esc(run.arm.provenance.memory_backend)} mirror of past.dev). Highlighted: one agent building on memory another agent wrote.</p>`;
    html += `<div class="model-note reuse-box"><b>${links.length} cross-agent reuses so far</b>${links.slice(-4).reverse().map(l => `<br>${esc(l.reader)} (exp ${l.experiment}) ← ${esc(l.memory.agent)}’s ${esc(l.memory.type)} <code>${esc(l.memory.pastdev_source_id)}</code>`).join('')}</div>`;
    html += notebook() + chart();
    html += buttons([['export','Export trace ↓'],['reset','Rewind replay',true]]);
    html += `<p class="model-note">Trace <code>${esc(traceUrl)}</code> · ${esc(run.arm.provenance.command || '')}<br>Artifacts: ${Object.entries(run.arm.provenance.artifacts).map(([k, v]) => `${esc(k)} ${esc(v)}`).join(' · ')}</p>`;
  }
  return html;
}
function renderTerminal(id) {
  terminal.dataset.station=id; $('terminal-tag').textContent=`${replaying() ? 'REPLAY' : 'GROW CLUB'} / ${id.toUpperCase()}`;
  if (replaying()) { $('terminal-content').innerHTML = renderReplayTerminal(id); return; }
  let html=`<h2>${titles[id]}</h2>`;
  if(id==='culture') {
    html+='<p class="model-note">TUTORIAL · synthetic two-basin simulation. Switch to “Replay real run” for the swarm’s actual decisions.</p><p>Adjust a synthetic culture’s resources. Each experiment advances both researchers with the same budget. Watch what happens when local refinement gets repetitive.</p>'+stats()+chart();
    html+=buttons([['step','Run one experiment →'],['auto',auto?'Pause research':'Start auto research',true]]);
  } else if(id==='analyzer') {
    const e=run.experiments.at(-1);
    html+=`<p>${run.meter>=run.threshold?'Repeated local experiments are yielding little improvement. The boredom signal is high.':e?'The Analyst compares each result with the best score so far, then publishes findings to shared memory.':'No results yet. Visit the culture chamber to begin.'}</p>`+stats()+chart();
    if(e)html+=`<p class="model-note">Latest sample · nutrient ${e.nutrient.toFixed(3)} / oxygen ${e.oxygen.toFixed(3)} · improvement ${e.gain.toFixed(3)} · local repetition ${(e.repetition*100).toFixed(0)}%</p>`;
  } else if(id==='explorer') {
    html+=`<p>${run.pivoted?'The Explorer read the plateau finding and moved the research loop to an unvisited region. The new hypothesis is being refined.':`Curiosity is a signal to explore. When boredom crosses ${run.threshold}, the Explorer reads the shared plateau finding and redirects the next experiment.`}</p>`+stats();
    html+=`<p class="model-note">${run.pivoted?'DIRECTION CHANGED · Alternate resource region unlocked.':`EXPLORATION RULE · 55% repetition + 45% low gain. The next experiment switches regions once the smoothed score reaches ${run.threshold}.`}</p>`+notebook();
    html+=buttons([['step',run.pivoted?'Refine new hypothesis →':'Run next experiment →'],['auto',auto?'Pause research':'Let the lab run',true]]);
  } else {
    html+='<p>A shared trail of hypotheses, observations, and changes in direction. The Explorer reads the Analyst’s finding before switching regions.</p>'+notebook()+chart();
    html+=`<div class="table-scroll"><table><thead><tr><th>EXP</th><th>REGION</th><th>GROWTH</th><th>BOREDOM</th></tr></thead><tbody>${run.experiments.slice().reverse().map(e=>`<tr><td>${e.id}</td><td>${e.pivot?'↗ New hypothesis':e.basin}</td><td>${e.value.toFixed(3)}</td><td>${e.boredom}%</td></tr>`).join('')}</tbody></table></div>`;
    html+=buttons([['export','Export run ↓'],['reset','Reset experiment',true]]);
    html+='<p class="model-note">Seed 42 · Scripted policies on a synthetic two-peak landscape. The alternate region is predefined. This demo does not establish a real scientific result.</p>';
  }
  $('terminal-content').innerHTML=html;
}
function openTerminal(id) {
  unlock(); renderTerminal(id); if(!terminal.open)terminal.showModal();
}
function updateHUD() {
  const count=run.experiments.length, r = replaying();
  $('growth-label').textContent = r ? 'Best val_bpb' : 'Culture growth';
  $('growth').innerHTML = r ? `${count ? fmt(run.bestValBpb) : '—'}<small> ${count ? `−${run.score.toFixed(2)}%` : ''}</small>` : `${count?run.best.toFixed(3):'—'}<small> / 1.00</small>`;
  $('meter-heading').textContent = r ? `Swarm boredom · ${run.regime}${run.boredom ? '' : ' (shadow)'}` : 'Boredom meter';
  $('meter-value').textContent=`${run.meter.toString().padStart(2,'0')}%`; $('meter-fill').style.width=`${run.meter}%`;
  $('meter-fill').style.background = r ? regimeColor[run.regime] || '#b3dcb0' : run.meter>=run.threshold?'#f0c68a':'#b3dcb0';
  $('meter-mark').style.left = `${run.threshold}%`; $('meter-mark2').style.left = `${run.breakout || 101}%`; $('meter-mark2').hidden = !r;
  $('baseline-name').textContent = r ? (baseline ? `Arm ${baseline.arm.arm} (control)` : 'No control arm') : 'Baseline';
  $('baseline-best').textContent = count && baseline ? (r ? fmt(baseline.bestValBpb) : baseline.best.toFixed(3)) : '—';
  $('delta').textContent = !count || !baseline ? 'PAIRED RUN' : r ? `${run.pivots} PIVOT${run.pivots === 1 ? '' : 'S'} · ${reuseLinks(run).length} REUSE` : `+${((run.best-baseline.best)*100).toFixed(1)} POINTS`;
  $('experiment-count').textContent=`${count} / ${run.budget} ${r ? 'EVENTS' : 'EXPERIMENTS'}`;
  $('mission-progress').style.width=`${count/Math.max(run.budget,1)*100}%`;
  $('mission-state').textContent=run.finished?'COMPLETE':r ? `ROUND ${run.round ?? 0} · ${run.regime}` : run.pivoted?'NEW DIRECTION':count?'RESEARCH ACTIVE':started?'EXPLORE THE LAB':'AWAITING RESEARCHER';
  $('mission-text').textContent = r
    ? (run.finished ? 'Replay finished. Every number here comes from the exported swarm artifacts; open the notebook for provenance.' : count ? 'Watch the swarm: boredom rises, the conductor reassigns roles, scouts search Exa, and workers reuse each other’s leads.' : started ? 'This is a replay of a real swarm run. Visit the worker bench (1) and press E to start the replay.' : 'Step inside to replay what the research swarm actually did.')
    : run.finished?'Breakthrough logged. Compare both runs and export your findings from the notebook.':run.pivoted?'A new question changed the outcome. Refine the alternate hypothesis and compare the baseline.':count?'Keep testing. Repetition builds boredom; curiosity opens a new direction.':started?'Say hello to Pip and Milo! Visit the grow station and press E to help Buddy grow.':'Step inside. Grow a culture, find the plateau, and give curiosity a chance.';
  $('roster').hidden = !r; $('roster-rows').innerHTML = rosterRows();
}
function orient(id) {
  const station=world.interactables.find(s=>s.id===id); if(!station)return;
  selectedStation=id; document.querySelectorAll('[data-station]').forEach(b=>b.classList.toggle('selected',b.dataset.station===id));
  const dx=station.position.x-camera.position.x, dz=station.position.z-camera.position.z;
  yaw=Math.atan2(-dx,-dz); pitch=0;
  toast(`Facing ${station.name}. Walk toward the station and press E.`);
}
function interact() { if(near)openTerminal(near.id); else toast('Move closer to a research station. Use 1–4 to face a station.'); }
$('enter').onclick=()=>{started=true;document.body.classList.add('playing');$('entrance').hidden=true;$('crosshair').hidden=false;updateHUD();lock();};
$('notebook').onclick=()=>openTerminal('notebook'); $('help').onclick=()=>{unlock();guide.showModal();};
$('close-help').onclick=()=>guide.close(); $('close-terminal').onclick=()=>terminal.close();
$('interact').onclick=interact;
window.lab={advance,openTerminal,setMode,toggleAuto,get run(){return run;}};
$('mode-toggle').onclick=()=>setMode(mode==='replay'?'tutorial':'replay');
$('enter-tutorial').onclick=async()=>{await setMode('tutorial');$('enter').click();};
fetch('data/index.json').then(r=>r.ok?r.json():[]).then(list=>{const sel=$('trace-select');for(const t of list){const o=document.createElement('option');o.value=t.file;o.textContent=t.label;sel.appendChild(o);}if(![...sel.options].some(o=>o.value===traceUrl)){const o=document.createElement('option');o.value=traceUrl;o.textContent=traceUrl;sel.appendChild(o);}sel.value=traceUrl;sel.onchange=()=>setMode('replay',sel.value);}).catch(()=>{});

$('terminal-content').onclick=e=>{const b=e.target.closest('[data-action]'); if(!b)return; ({step:advance,auto:toggleAuto,reset,export:exportRun})[b.dataset.action]?.();};
for(const b of document.querySelectorAll('[data-station]'))b.onclick=()=>{if(!started){toast('Enter the laboratory to explore.');return;}orient(b.dataset.station);};
for(const b of document.querySelectorAll('[data-move]')) {
  b.addEventListener('pointerdown',e=>{e.preventDefault();b.setPointerCapture(e.pointerId);keys.add(b.dataset.move);});
  for(const type of ['pointerup','pointercancel','lostpointercapture'])b.addEventListener(type,()=>keys.delete(b.dataset.move));
}
window.addEventListener('keydown',e=>{
  if(terminal.open||guide.open||!started)return;
  if(['KeyW','KeyA','KeyS','KeyD','ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Space'].includes(e.code))e.preventDefault();
  keys.add(e.code); if(e.repeat)return;
  if(e.code==='KeyE')interact();
  if(/^Digit[1-4]$/.test(e.code))orient(['culture','analyzer','explorer','notebook'][Number(e.code.slice(-1))-1]);
});
window.addEventListener('keyup',e=>keys.delete(e.code));window.addEventListener('blur',()=>{keys.clear();drag=false;});
document.addEventListener('mousemove',e=>{if(document.pointerLockElement===renderer?.domElement&&started&&!terminal.open&&!guide.open){yaw-=e.movementX*.0023;pitch-=e.movementY*.0023;pitch=THREE.MathUtils.clamp(pitch,-1.2,1.2);}});
function blocked(x,z) {
  const bounds=world.bounds||{minX:-15,maxX:15,minZ:-15,maxZ:15}, radius=.35;
  if(x<bounds.minX+radius||x>bounds.maxX-radius||z<bounds.minZ+radius||z>bounds.maxZ-radius)return true;
  return (world.colliders||[]).some(b=>x>b.minX-radius&&x<b.maxX+radius&&z>b.minZ-radius&&z<b.maxZ+radius);
}
try {
  world=createWorld(THREE);camera=world.camera;
  renderer=new THREE.WebGLRenderer({antialias:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5));renderer.setSize(innerWidth,innerHeight);
  renderer.shadowMap.enabled=false;renderer.shadowMap.type=THREE.PCFShadowMap;
  renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.0;
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  $('world').appendChild(renderer.domElement);
  camera.rotation.order='YXZ'; const initial=new THREE.Euler().setFromQuaternion(camera.quaternion,'YXZ');yaw=initial.y;pitch=initial.x;
  renderer.domElement.addEventListener('click',()=>{if(!drag)lock();});
  renderer.domElement.addEventListener('pointerdown',e=>{if(!started||document.pointerLockElement)return;drag=true;lastPointer={x:e.clientX,y:e.clientY};renderer.domElement.setPointerCapture(e.pointerId);});
  renderer.domElement.addEventListener('pointermove',e=>{if(!drag||!lastPointer||document.pointerLockElement)return; yaw-=(e.clientX-lastPointer.x)*.004; pitch=THREE.MathUtils.clamp(pitch-(e.clientY-lastPointer.y)*.004,-1.2,1.2);lastPointer={x:e.clientX,y:e.clientY};});
  renderer.domElement.addEventListener('pointerup',()=>{drag=false;lastPointer=null;});
  renderer.domElement.addEventListener('pointercancel',()=>{drag=false;lastPointer=null;});
  window.addEventListener('resize',()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight);});
  // A chunky first-person lab sleeve and sample vial ground the player in the world.
  const hand=new THREE.Group();
  const sleeve=new THREE.Mesh(new THREE.BoxGeometry(.18,.29,.37),new THREE.MeshStandardMaterial({color:0xe4eee4,roughness:.9}));sleeve.position.set(.31,-.37,-.49);sleeve.rotation.x=-.25;hand.add(sleeve);
  const palm=new THREE.Mesh(new THREE.BoxGeometry(.14,.14,.15),new THREE.MeshStandardMaterial({color:0xc99874}));palm.position.set(.31,-.24,-.66);hand.add(palm);
  const vial=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.21,6),new THREE.MeshStandardMaterial({color:0xa0eab5,emissive:0x376e48,emissiveIntensity:.4,metalness:.15,roughness:.25}));vial.position.set(.31,-.19,-.7);hand.add(vial);
  const cap=new THREE.Mesh(new THREE.CylinderGeometry(.052,.052,.045,6),new THREE.MeshStandardMaterial({color:0xf2d38e}));cap.position.set(.31,-.065,-.7);hand.add(cap);camera.add(hand);world.scene.add(camera);
  let previousFrame=performance.now();let elapsed=0, proximityClock=0;
  const direction=new THREE.Vector3();
  function frame() {
    requestAnimationFrame(frame);const now=performance.now();const dt=Math.min((now-previousFrame)/1000,.05);previousFrame=now;elapsed+=dt;proximityClock+=dt;
    const modal=terminal.open||guide.open;
    let moving=false;
    if(started&&!modal){
      if(keys.has('ArrowLeft'))yaw+=dt*1.6;if(keys.has('ArrowRight'))yaw-=dt*1.6;
      if(keys.has('ArrowUp'))pitch=Math.min(1.2,pitch+dt);if(keys.has('ArrowDown'))pitch=Math.max(-1.2,pitch-dt);
      const forward=Number(keys.has('KeyW'))-Number(keys.has('KeyS')), side=Number(keys.has('KeyD'))-Number(keys.has('KeyA'));
      if(forward||side){moving=true;const speed=(keys.has('ShiftLeft')||keys.has('ShiftRight')?5.7:3.6)*dt/Math.hypot(forward,side);
        const dx=(-Math.sin(yaw)*forward+Math.cos(yaw)*side)*speed, dz=(-Math.cos(yaw)*forward-Math.sin(yaw)*side)*speed;
        if(!blocked(camera.position.x+dx,camera.position.z))camera.position.x+=dx;
        if(!blocked(camera.position.x,camera.position.z+dz))camera.position.z+=dz;
      }
    }
    camera.rotation.set(pitch,yaw,0,'YXZ');hand.visible=started&&!modal;hand.position.y=moving?Math.sin(elapsed*10)*.012:Math.sin(elapsed*1.6)*.004;
    world.update(elapsed,run.experiments.at(-1)?.value||.2,run.meter);
    if(proximityClock>.12){proximityClock=0;near=null;let distance=Infinity;camera.getWorldDirection(direction);
      for(const station of world.interactables){const delta=station.position.clone().sub(camera.position);delta.y=0;const d=delta.length();const dot=delta.clone().normalize().dot(new THREE.Vector3(direction.x,0,direction.z).normalize());if(d<(station.radius||3.8)&&d<distance&&dot>.1){near=station;distance=d;}}
      $('station-label').hidden=!near||!started||modal;
      if(near){$('station-name').textContent=near.name;$('station-type').textContent=near.description||'RESEARCH STATION';}
    }
    renderer.render(world.scene,camera);
  }
  frame();$('loading').hidden=true;
  setMode(mode).then(()=>{ if(params.has('live')) setInterval(async()=>{ if(!replaying()) return; try { const next=await loadTrace(traceUrl); trace=next; refreshReplay(run,next); if(baseline) refreshReplay(baseline,next); updateHUD(); } catch(e){ console.warn(e); } },5000); if(params.has('autoplay')){ $('enter').click(); toggleAuto(); } });
} catch(error) {
  console.error(error);$('loading').hidden=true;
  const el=document.createElement('div');el.className='error-card';el.innerHTML='<h2>The lab could not start.</h2><p>This world needs WebGL. Try opening it in a browser with hardware acceleration enabled, then refresh.</p>';document.body.appendChild(el);
}
