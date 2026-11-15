#!/usr/bin/env python3
"""Score every study in an events.jsonl after the run. Writes scores.jsonl next to it.

  MOCK=1 python score.py            # reads runs/full-s0/events.jsonl by default
"""
import argparse
import json
from pathlib import Path

import committee
import events


def score_events(events_path: str | Path, out_path: str | Path | None = None, seed: int = 0) -> list[dict]:
    events_path = Path(events_path)
    out_path = Path(out_path) if out_path else events_path.with_name("scores.jsonl")
    rows = []
    for ev in events.read(events_path):
        if ev.type != "study_result":
            continue
        p = ev.payload
        verdict = committee.score_study(p.get("abstract", ""), p.get("title", ""), seed=seed)
        row = {"study_id": p["study_id"], "round": ev.round, "agent": ev.agent, "arm": ev.arm,
               "seed": ev.seed, "replicated": p.get("replicated"), **verdict}
        if "evidence" in p:  # daughter labs: only results that held up on real data can be candidates
            row.update(title=p.get("title", ""), supported=p["evidence"]["supported"],
                       traceable=p["evidence"].get("traceable"),
                       datasets=[d["url"] for d in p["evidence"]["datasets"]],
                       citations=[c["url"] for c in p["evidence"]["citations"]])
        rows.append(row)
    with open(out_path, "w", encoding="utf-8") as f:
        for r in rows:
            f.write(json.dumps(r, sort_keys=True) + "\n")
    return rows


def candidate(rows: list[dict]) -> dict | None:
    """The community's nomination: the best-scored study that is supported by real data."""
    ok = [r for r in rows if r.get("supported") and not r["rejected"]]
    return max(ok, key=lambda r: (r["score"], r["score_a"] + r["score_b"], -r["round"], r["study_id"])) if ok else None


def main(argv=None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--events", default="runs/full-s0/events.jsonl")
    p.add_argument("--out", default=None)
    p.add_argument("--seed", type=int, default=0)
    args = p.parse_args(argv)
    rows = score_events(args.events, args.out, args.seed)
    out = args.out or str(Path(args.events).with_name("scores.jsonl"))
    print(f"scored {len(rows)} studies -> {out}")
    for r in sorted(rows, key=lambda r: -r["score"]):
        flag = " REJECTED" if r["rejected"] else ""
        if r.get("traceable") is not None:
            flag += f" traceable={r['traceable']:.0%}"
        if r.get("supported") is False:
            flag += " (not supported by real data)"
        print(f"  {r['score']:2d}  r{r['round']} {r['study_id']:24s} A={r['score_a']} B={r['score_b']}{flag}")
    best = candidate(rows)
    if best:
        print(f"Ig Nobel candidate: {best['title']} ({best['agent']}, {best['study_id']}, score {best['score']})\n"
              f"  data: {', '.join(best['datasets'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
