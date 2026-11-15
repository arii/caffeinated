#!/usr/bin/env python3
"""Score every study in an events.jsonl after the run. Writes scores.jsonl next to it.

  MOCK=1 python score.py            # reads runs/full-s0/events.jsonl by default
"""
import argparse
import json
from pathlib import Path

import committee
import events
import lab

SAME_FINDING = 0.9  # two reported arrays are the same measurements if they share this much of their values


def same_finding(a: list[dict], b: list[dict]) -> bool:
    """Two studies report the same thing: array for array, the same values from the same dataset file."""
    if not a or len(a) != len(b):
        return False
    left = list(b)
    for x in a:
        twin = next((y for y in left if x["dataset"] and y["dataset"] == x["dataset"]
                     and lab.common(x["sketch"], y["sketch"]) >= SAME_FINDING), None)
        if twin is None:
            return False
        left.remove(twin)
    return True


def score_events(events_path: str | Path, out_path: str | Path | None = None, seed: int = 0) -> list[dict]:
    events_path = Path(events_path)
    out_path = Path(out_path) if out_path else events_path.with_name("scores.jsonl")
    rows = []
    first: list[tuple[list, str]] = []  # findings that already have a supported study, in the order they were made
    for ev in events.read(events_path):
        p = ev.payload
        if ev.type == "experiment_request":  # an experiment that still needs doing: a proposal, never a finding
            text = (f"Proposed experiment, not yet performed. {p['question']} Protocol: {p['protocol']} "
                    f"Predicted: {p['prediction']['direction']} {p['prediction']['effect_size']}. "
                    f"Refuted if: {p.get('refuted_if', '')}")
            rows.append({"kind": "proposal", "study_id": p["id"], "round": ev.round, "agent": ev.agent, "arm": ev.arm,
                         "seed": ev.seed, "replicated": None, "supported": False, "title": p.get("title", ""),
                         **committee.score_study(text, p.get("title", ""), seed=seed)})
            continue
        if ev.type != "study_result":
            continue
        verdict = committee.score_study(p.get("abstract", ""), p.get("title", ""), seed=seed)
        row = {"study_id": p["study_id"], "round": ev.round, "agent": ev.agent, "arm": ev.arm,
               "seed": ev.seed, "replicated": p.get("replicated"), **verdict}
        if "evidence" in p:  # daughter labs: only results that held up on real data can be candidates
            row.update(title=p.get("title", ""), supported=p["evidence"]["supported"],
                       traceable=p["evidence"].get("traceable"),
                       datasets=[d["url"] for d in p["evidence"]["datasets"]],
                       citations=[c["url"] for c in p["evidence"]["citations"]])
            if row["supported"]:  # priority: the first supported study of a finding keeps it
                finding = p["evidence"].get("finding") or []
                earlier = next((sid for f, sid in first if same_finding(finding, f)), None)
                if earlier:
                    row["preceded_by"] = earlier
                elif finding:
                    first.append((finding, row["study_id"]))
        rows.append(row)
    with open(out_path, "w", encoding="utf-8") as f:
        for r in rows:
            f.write(json.dumps(r, sort_keys=True) + "\n")
    return rows


def candidate(rows: list[dict]) -> dict | None:
    """The community's nomination: the best-scored study that is supported by real data and was first
    to its finding."""
    ok = [r for r in rows if r.get("supported") and not r.get("preceded_by") and not r["rejected"]]
    return max(ok, key=lambda r: (r["score"], r["score_a"] + r["score_b"], -r["round"], r["study_id"])) if ok else None


def main(argv=None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--events", default="runs/full-s0/events.jsonl")
    p.add_argument("--out", default=None)
    p.add_argument("--seed", type=int, default=0)
    args = p.parse_args(argv)
    rows = score_events(args.events, args.out, args.seed)
    out = args.out or str(Path(args.events).with_name("scores.jsonl"))
    proposals = [r for r in rows if r.get("kind") == "proposal"]
    print(f"scored {len(rows) - len(proposals)} studies and {len(proposals)} proposed experiments -> {out}")
    for r in sorted(proposals, key=lambda r: -r["score"]):
        print(f"  {r['score']:2d}  r{r['round']} {r['study_id']:24s} experiment needed: {r['title'][:60]}")
    for r in sorted((r for r in rows if r.get("kind") != "proposal"), key=lambda r: -r["score"]):
        flag = " REJECTED" if r["rejected"] else ""
        if r.get("traceable") is not None:
            flag += f" traceable={r['traceable']:.0%}"
        if r.get("supported") is False:
            flag += " (not supported by real data)"
        if r.get("preceded_by"):
            flag += f" (same finding as {r['preceded_by']}, which came first)"
        print(f"  {r['score']:2d}  r{r['round']} {r['study_id']:24s} A={r['score_a']} B={r['score_b']}{flag}")
    best = candidate(rows)
    if best:
        print(f"Ig Nobel candidate: {best['title']} ({best['agent']}, {best['study_id']}, score {best['score']})\n"
              f"  data: {', '.join(best['datasets'])}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
