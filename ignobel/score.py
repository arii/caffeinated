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
        rows.append({"study_id": p["study_id"], "round": ev.round, "agent": ev.agent, "arm": ev.arm,
                     "seed": ev.seed, "replicated": p.get("replicated"), **verdict})
    with open(out_path, "w", encoding="utf-8") as f:
        for r in rows:
            f.write(json.dumps(r, sort_keys=True) + "\n")
    return rows


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
        print(f"  {r['score']:2d}  r{r['round']} {r['study_id']:24s} A={r['score_a']} B={r['score_b']}{flag}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
