"""Render a run's events.jsonl as one self-contained HTML page.

    python trace.py runs/<run>            # writes runs/<run>/trace.html
"""
import argparse
import html
import json
from collections import defaultdict
from pathlib import Path

PALETTE = ["#2e7d32", "#c62828", "#1565c0", "#6a1b9a", "#ef6c00", "#00838f", "#5d4037", "#ad1457"]

CSS = """
body{font:14px/1.45 system-ui,sans-serif;margin:0;background:#fafafa;color:#222}
header{padding:16px 24px;background:#222;color:#fff}header h1{margin:0;font-size:20px}
header .sub{opacity:.75;font-size:13px}
.wrap{display:flex;gap:16px;padding:16px 24px}
nav{position:sticky;top:12px;align-self:flex-start;min-width:220px;max-width:240px}
nav label{display:block;margin:2px 0;cursor:pointer}
main{flex:1;min-width:0}
h2{margin:24px 0 8px;border-bottom:2px solid #ddd;padding-bottom:4px}
.ev{background:#fff;border-left:5px solid #999;border-radius:4px;margin:6px 0;padding:8px 12px;box-shadow:0 1px 2px #0001}
.ev .hd{font-size:12px;color:#555;margin-bottom:2px}.ev .hd b{color:#111}
.tag{display:inline-block;font-size:11px;padding:1px 6px;border-radius:8px;background:#eee;margin-right:4px}
.spawn{background:#fff8e1}.talk{background:#f3f8ff}.ok{color:#2e7d32;font-weight:600}.bad{color:#c62828;font-weight:600}
details summary{cursor:pointer;color:#1565c0;font-size:12px}
pre{white-space:pre-wrap;font-size:12px;background:#f5f5f5;padding:8px;border-radius:4px;max-height:420px;overflow:auto}
.plot svg{max-width:420px;height:auto}
table{border-collapse:collapse;font-size:13px}td,th{padding:3px 8px;border-bottom:1px solid #eee;text-align:left}
"""

JS = """
function apply(){const off=new Set([...document.querySelectorAll('nav input:not(:checked)')].map(i=>i.value));
document.querySelectorAll('.ev').forEach(e=>{e.style.display=(off.has(e.dataset.type)||off.has('a:'+e.dataset.agent))?'none':''});}
document.querySelectorAll('nav input').forEach(i=>i.addEventListener('change',apply));
"""


def esc(x) -> str:
    return html.escape(str(x))


def link(url, text=None) -> str:
    if not str(url or "").lower().startswith(("https://", "http://")):  # never emit javascript: or data: links
        return esc(text or url or "")
    return f"<a href='{esc(url)}' rel='noopener noreferrer'>{esc(text or url)}</a>"


def body(e: dict, run: Path, agents: dict) -> str:
    p, t = e["payload"], e["type"]
    if t == "idea":
        return (f"<b>{esc(p.get('title', ''))}</b> <span class=tag>{esc(p.get('kind', ''))}</span>"
                f"<div>{esc(p.get('text', ''))}</div>"
                f"<details><summary>hypothesis &amp; method</summary><p>{esc(p.get('hypothesis', ''))}</p>"
                f"<p>{esc(p.get('method', ''))}</p></details>")
    if t == "prediction":
        return f"predicts direction <b>{esc(p.get('direction'))}</b>, effect size {esc(p.get('effect_size'))}"
    if t == "boredom":
        keys = [k for k in ("repetition", "stall", "unsurprise", "known", "engagement", "frustration")
                if k in p] if "repetition" in p else ["similarity", "unsurprise", "failure"]
        trig = f" <span class=bad>trigger: {esc(p['trigger'])}</span>" if p.get("trigger") else ""
        return (f"B = <b>{esc(p.get('B'))}</b> → <b>{esc(p.get('action'))}</b>{trig} "
                + "".join(f"<span class=tag>{k} {esc(p.get(k))}</span>" for k in keys))
    if t == "talk":
        return f"→ <b>{esc(p.get('partner'))}</b> (turn {esc(p.get('turn'))})<div>{esc(p.get('text', ''))}</div>"
    if t == "snap":
        src = p.get("source") or {}
        return (f"bored; meets <b>{esc(p.get('partner'))}</b>. Inspired by: "
                f"<a href='{esc(src.get('url', '#'))}'>{esc(src.get('title') or src.get('url', 'source'))}</a>"
                f"<div><i>{esc(str(src.get('snippet', ''))[:300])}</i></div>")
    if t == "share":
        return (f"shares memories with <b>{esc(p.get('receiver'))}</b>: offered {len(p.get('offered', []))}, "
                f"kept {len(p.get('kept', []))}")
    if t == "spawn":
        why = "founds" if p.get("reason") == "founded" else f"field boredom {esc(p.get('field_B'))} →"
        return (f"{why} new daughter lab <b>{esc(p.get('daughter'))}</b> "
                f"in <b>{esc(p.get('field'))}</b><div>methods: {esc(', '.join(p.get('methods') or p.get('instruments') or []))}</div>")
    if t == "research":
        tool = p.get("tool")
        if p.get("error"):
            return f"<span class=tag>{esc(tool)}</span> {esc(p.get('query', ''))} <span class=bad>{esc(p['error'])}</span>"
        if tool == "read":
            return (f"<span class=tag>read</span> {esc(p.get('source'))} {link(p.get('url'))}: <i>{esc(p.get('question'))}</i>"
                    f"<div>{esc(p.get('notes', ''))}</div>")
        if tool == "load":
            d = p.get("dataset", {})
            return (f"<span class=tag>load</span> real dataset <b>{esc(d.get('name'))}</b>: {link(d.get('url'), d.get('title'))} "
                    f"({esc(d.get('rows'))} rows, licence {esc(d.get('license') or 'not stated')})"
                    f"<div>columns: {esc(', '.join(d.get('columns', [])))}</div>")
        rows = "".join(f"<li>{esc(x.get('id') or x.get('lead'))}: {link(x.get('url'), x.get('title'))}"
                       + (f" <small>columns: {esc(', '.join(x['columns'][:12]))}</small>" if x.get("columns") else "") + "</li>"
                       for x in p.get("results", []))
        return f"<span class=tag>{esc(tool)}</span> <i>{esc(p.get('query'))}</i><ul>{rows or '<li>nothing found</li>'}</ul>"
    if t == "experiment_request":
        rows = "".join(f"<tr><th>{esc(k.replace('_', ' '))}</th><td>{esc(p.get(k))}</td></tr>"
                       for k in ("protocol", "materials", "design", "measure", "compare", "n", "refuted_if") if p.get(k))
        pred = p.get("prediction") or {}
        return (f"<span class=tag>experiment needed</span> <b>{esc(p.get('id'))}</b>: {esc(p.get('question'))}"
                f"<div>for idea <i>{esc(p.get('title'))}</i>; predicts {esc(pred.get('direction'))} {esc(pred.get('effect_size'))}. "
                f"<span class=bad>not done yet, not a finding</span></div><table>{rows}</table>")
    if t == "experiment_result":
        if p.get("error"):
            return f"<b>{esc(p.get('request_id'))}</b>: returned measurements not accepted. <span class=bad>{esc(p['error'])}</span>"
        if p.get("provenance") == "returned":
            d = p.get("dataset", {})
            return (f"<b>{esc(p.get('request_id'))}</b> <span class=ok>performed</span> by {esc(p.get('performed_by'))} "
                    f"on {esc(p.get('performed_at'))}: real measurements loaded as dataset <b>{esc(d.get('name'))}</b> "
                    f"({esc(d.get('rows'))} rows; columns: {esc(', '.join(d.get('columns', [])))})"
                    f"<div>{esc(p.get('apparatus'))} {esc(p.get('notes'))}</div>")
        st = p.get("stats") or {}
        how = ("the analysis did not run" if not p.get("ok") else
               f"with n={esc(p.get('n'))} the predicted effect would {'' if p.get('detected') else 'not '}be detected "
               f"(effect {esc(st.get('effect_size'))}, p={esc(st.get('p'))})")
        need = f"; about {esc(p['needed_n'])} measurements needed for 80% power" if p.get("needed_n") else ""
        return (f"<b>{esc(p.get('request_id'))}</b> <span class=bad>simulated rehearsal, not evidence</span>: placeholder "
                f"measurements drawn from the lab's own prediction; {how}{need}. The experiment still needs doing."
                f"<details><summary>analysis code</summary><pre>{esc(p.get('code', ''))}</pre></details>"
                + (f"<details><summary>stderr</summary><pre>{esc(p.get('stderr'))}</pre></details>" if p.get("stderr") else ""))
    if t == "seed":
        rows = "".join(f"<li><a href='{esc(s.get('url', '#'))}'>{esc(s.get('title') or s.get('url'))}</a></li>"
                       for s in p.get("sources", []))
        return f"searched <i>{esc(p.get('query'))}</i><details><summary>{len(p.get('sources', []))} sources</summary><ul>{rows}</ul></details>"
    if t == "lesson":
        return f"<div>{esc(p.get('text', ''))}</div>"
    if t == "study_result":
        st = p.get("stats") or {}
        verdict = ("<span class=ok>replicated</span>" if p.get("replicated") else
                   "<span class=bad>did not run</span>" if not p.get("ok") else "<span class=bad>not replicated</span>")
        ev = p.get("evidence")
        proof = ""
        if ev:
            data = "; ".join(f"{link(d.get('url'), d.get('title'))} ({esc(d.get('rows'))} rows)" for d in ev.get("datasets", []))
            cites = "".join(f"<li>{esc(c['id'])}: {link(c.get('url'), c.get('title'))}</li>" for c in ev.get("citations", []))
            tag = "<span class=ok>supported by real data</span>" if ev.get("supported") else "<span class=bad>not supported</span>"
            if "traceable" in ev:
                cols = "; ".join(f"{esc(k)}: {v['share']:.0%}" + (f" from {esc(v['column'])}" if v.get("column") else "")
                                 for k, v in ev.get("trace", {}).items())
                tag += (f" — {ev['traceable']:.0%} of reported values found in the loaded data"
                        f"{' (' + cols + ')' if cols else ''}{'' if ev.get('read') else '; the code did not open a dataset'}")
            proof = f"<div>{tag}. Data: {data or 'none'}</div><details><summary>{len(ev.get('citations', []))} cited sources</summary><ul>{cites}</ul></details>"
        plot = ""
        if p.get("plot_path") and (run / p["plot_path"]).exists():
            plot = f"<div class=plot>{(run / p['plot_path']).read_text(encoding='utf-8')}</div>"
        return (f"<b>{esc(p.get('title', ''))}</b> — {verdict}"
                f"<div>effect {esc(st.get('effect_size'))}, n={esc(st.get('n'))}, p={esc(st.get('p'))}; "
                f"predicted {esc((p.get('prediction') or {}).get('direction'))} {esc((p.get('prediction') or {}).get('effect_size'))}; "
                f"{esc(st.get('reason', ''))}</div><p>{esc(p.get('abstract', ''))}</p>{proof}{plot}"
                f"<details><summary>study code</summary><pre>{esc(p.get('code', ''))}</pre></details>"
                + (f"<details><summary>stderr</summary><pre>{esc(p.get('stderr'))}</pre></details>" if p.get("stderr") else ""))
    return f"<pre>{esc(json.dumps(p, indent=1))}</pre>"


def render(run: Path) -> str:
    evs = [json.loads(l) for l in open(run / "events.jsonl", encoding="utf-8") if l.strip()]
    family: dict[str, str] = {}
    state = run / "state.json"
    if state.exists():
        for name, raw in (json.loads(state.read_text()).get("mothers") or {}).items():
            family[name] = name
            for d in raw.get("daughters", []):
                family[d] = name
    for e in evs:
        if e["type"] == "spawn":
            family[e["payload"]["daughter"]] = e["agent"]
            family.setdefault(e["agent"], e["agent"])
    groups = sorted({family.get(e["agent"], e["agent"]) for e in evs})
    color = {g: PALETTE[i % len(PALETTE)] for i, g in enumerate(groups)}
    agents = sorted({e["agent"] for e in evs}, key=lambda a: (family.get(a, a), a))
    types = sorted({e["type"] for e in evs})
    by_round = defaultdict(list)
    for e in evs:
        by_round[e["round"]].append(e)

    studies = [e for e in evs if e["type"] == "study_result"]
    summary = "".join(
        f"<tr><td>{e['round']}</td><td>{esc(e['agent'])}</td><td>{esc(e['payload'].get('title', ''))[:80]}</td>"
        f"<td>{'replicated' if e['payload'].get('replicated') else 'ran' if e['payload'].get('ok') else 'failed'}</td>"
        f"<td>{esc((e['payload'].get('stats') or {}).get('effect_size'))}</td></tr>" for e in studies)
    out = [f"<!doctype html><meta charset=utf-8><title>ignobel trace: {esc(run.name)}</title><style>{CSS}</style>",
           f"<header><h1>ignobel trace — {esc(run.name)}</h1><div class=sub>{len(evs)} events, "
           f"{sum(e.get('tokens', 0) for e in evs):,} tokens, arm {esc(evs[0]['arm'] if evs else '')}, "
           f"seed {esc(evs[0]['seed'] if evs else '')}</div></header><div class=wrap><nav><b>Event types</b>"]
    out += [f"<label><input type=checkbox checked value='{esc(t)}'> {esc(t)}</label>" for t in types]
    out.append("<br><b>Agents</b>")
    out += [f"<label style='color:{color[family.get(a, a)]}'><input type=checkbox checked value='a:{esc(a)}'> "
            f"{esc(a)} <small>({esc(family.get(a, '—'))})</small></label>" for a in agents]
    out.append(f"</nav><main><h2>Studies</h2><table><tr><th>round</th><th>agent</th><th>title</th><th>result</th>"
               f"<th>effect</th></tr>{summary}</table>")
    state_of = {e["payload"]["request_id"]: ("performed, real measurements returned" if e["payload"]["provenance"] == "returned"
                                             else "rehearsed on simulated numbers; still needs doing")
                for e in evs if e["type"] == "experiment_result" and not e["payload"].get("error")}
    needed = "".join(
        f"<tr><td>{e['round']}</td><td>{esc(e['agent'])}</td><td>{esc(e['payload']['id'])}</td>"
        f"<td>{esc(e['payload'].get('question', ''))[:140]}</td>"
        f"<td>{esc(state_of.get(e['payload']['id'], 'needs doing'))}</td></tr>"
        for e in evs if e["type"] == "experiment_request")
    if needed:
        out.append(f"<h2>Experiments needed</h2><table><tr><th>round</th><th>agent</th><th>id</th><th>question</th>"
                   f"<th>state</th></tr>{needed}</table>")
    for r in sorted(by_round):
        out.append(f"<h2>Round {r}</h2>")
        for e in by_round[r]:
            g = family.get(e["agent"], e["agent"])
            cls = "spawn" if e["type"] == "spawn" else "talk" if e["type"] == "talk" else ""
            out.append(f"<div class='ev {cls}' data-type='{esc(e['type'])}' data-agent='{esc(e['agent'])}' "
                       f"style='border-left-color:{color[g]}'><div class=hd><b>{esc(e['agent'])}</b> "
                       f"<span class=tag>{esc(g)}</span><span class=tag>{esc(e['type'])}</span>"
                       f"{esc(e.get('tokens', 0))} tok</div>{body(e, run, family)}</div>")
    out.append(f"</main></div><script>{JS}</script>")
    return "\n".join(out)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("run", type=Path, help="run directory containing events.jsonl")
    ap.add_argument("--out", type=Path, default=None)
    a = ap.parse_args()
    dest = a.out or a.run / "trace.html"
    dest.write_text(render(a.run), encoding="utf-8")
    print(f"wrote {dest}")


if __name__ == "__main__":
    main()
