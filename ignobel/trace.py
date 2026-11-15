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
        return (f"B = <b>{esc(p.get('B'))}</b> → <b>{esc(p.get('action'))}</b> "
                f"<span class=tag>similarity {esc(p.get('similarity'))}</span>"
                f"<span class=tag>unsurprise {esc(p.get('unsurprise'))}</span>"
                f"<span class=tag>failure {esc(p.get('failure'))}</span>")
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
                f"in <b>{esc(p.get('field'))}</b><div>instruments: {esc(', '.join(p.get('instruments', [])))}</div>")
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
        plot = ""
        if p.get("plot_path") and (run / p["plot_path"]).exists():
            plot = f"<div class=plot>{(run / p['plot_path']).read_text(encoding='utf-8')}</div>"
        return (f"<b>{esc(p.get('title', ''))}</b> — {verdict}"
                f"<div>effect {esc(st.get('effect_size'))}, n={esc(st.get('n'))}, p={esc(st.get('p'))}; "
                f"predicted {esc((p.get('prediction') or {}).get('direction'))} {esc((p.get('prediction') or {}).get('effect_size'))}; "
                f"{esc(st.get('reason', ''))}</div><p>{esc(p.get('abstract', ''))}</p>{plot}"
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
