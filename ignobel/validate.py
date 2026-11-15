#!/usr/bin/env python3
"""Judge validation: how often does each judge rank a real Ig Nobel winner above its paired control?

Reads data/winners.csv (id,year,title,abstract) and data/controls.csv (winner_id,year,title,abstract).
Reports per judge, split by year <= 2018, 2019-2025, and 2026. Writes validate.json next to the CSVs.

  MOCK=1 python validate.py
"""
import argparse
import csv
import json
from pathlib import Path

import committee

HERE = Path(__file__).parent


def bucket(year: int) -> str:
    if year <= 2018:
        return "<=2018"
    if year <= 2025:
        return "2019-2025"
    return "2026"


def read_pairs(winners_csv: Path, controls_csv: Path) -> list[dict]:
    with open(winners_csv, newline="", encoding="utf-8") as f:
        winners = {r["id"]: r for r in csv.DictReader(f)}
    pairs = []
    with open(controls_csv, newline="", encoding="utf-8") as f:
        for c in csv.DictReader(f):
            w = winners.get(c["winner_id"])
            if w is None:
                continue
            pairs.append({"winner": w, "control": c, "year": int(w["year"])})
    return pairs


def validate(winners_csv: Path, controls_csv: Path, seed: int = 0) -> dict:
    pairs = read_pairs(winners_csv, controls_csv)
    tally: dict[str, dict[str, list[int]]] = {}
    details = []
    for p in pairs:
        w = committee.score_study(p["winner"]["abstract"], p["winner"]["title"], seed)
        c = committee.score_study(p["control"]["abstract"], p["control"]["title"], seed)
        b = bucket(p["year"])
        row = {"winner_id": p["winner"]["id"], "year": p["year"], "bucket": b}
        for j in ("a", "b"):
            win = w[f"score_{j}"] > c[f"score_{j}"]
            tally.setdefault(j, {}).setdefault(b, []).append(int(win))
            row[f"judge_{j}"] = {"winner": w[f"score_{j}"], "control": c[f"score_{j}"], "winner_above": win}
        win_both = w["score"] > c["score"]
        tally.setdefault("combined", {}).setdefault(b, []).append(int(win_both))
        row["combined"] = {"winner": w["score"], "control": c["score"], "winner_above": win_both}
        details.append(row)
    summary = {j: {b: {"n": len(v), "winner_above_rate": round(sum(v) / len(v), 3)} for b, v in bs.items()}
               for j, bs in tally.items()}
    return {"n_pairs": len(pairs), "summary": summary, "pairs": details}


def main(argv=None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--winners", default=str(HERE / "data" / "winners.csv"))
    p.add_argument("--controls", default=str(HERE / "data" / "controls.csv"))
    p.add_argument("--out", default=str(HERE / "data" / "validate.json"))
    p.add_argument("--seed", type=int, default=0)
    args = p.parse_args(argv)
    report = validate(Path(args.winners), Path(args.controls), args.seed)
    Path(args.out).write_text(json.dumps(report, indent=1), encoding="utf-8")
    print(f"{report['n_pairs']} winner/control pairs -> {args.out}")
    print(f"{'judge':10s} {'bucket':10s} {'n':>3s}  winner ranked above control")
    for j, bs in report["summary"].items():
        for b, v in sorted(bs.items()):
            print(f"{j:10s} {b:10s} {v['n']:3d}  {v['winner_above_rate']:.0%}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
