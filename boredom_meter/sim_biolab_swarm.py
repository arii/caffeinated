#!/usr/bin/env python3
"""Scripted 3-agent swarm on the Little Sprout synthetic two-basin landscape.

Not a biological model. Compares a greedy swarm against the same swarm obeying
the meter (status -> suggest -> gate) with identical seeds and budgets.
"""
import argparse
import math
import random
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).parent))
import meter

CENTERS = {
    "toxicity": (0.25, 0.25),
    "nutrient_limitation": (0.70, 0.30),
    "oxygen_limitation": (0.30, 0.70),
    "co_limitation": (0.75, 0.80),
}


def response(n, o, seed):
    local = 0.49 * math.exp(-((n - 0.28) ** 2 / 0.055 + (o - 0.24) ** 2 / 0.07))
    glob = 0.82 * math.exp(-((n - 0.76) ** 2 / 0.065 + (o - 0.81) ** 2 / 0.06))
    noise = math.sin(n * 71 + o * 37 + seed * 13) * 0.006
    return max(0.0, min(1.0, 0.12 + local + glob + noise))


def clip(x):
    return max(0.0, min(1.0, x))


def run(seed, boredom, budget=36, agents=("scientist", "analyst", "explorer")):
    profile = meter.load_profile(Path(__file__).parent / "profiles/biolab_growth.json")
    rng = random.Random(seed)
    events = []
    best = None
    for i in range(budget):
        agent = agents[i % len(agents)]
        if best is None:
            hyp, assay, (n, o) = "toxicity", "growth_curve", CENTERS["toxicity"]
        else:
            hyp, assay = best["descriptor"]["hypothesis"], best["descriptor"]["assay"]
            n, o = best["descriptor"]["params"]["nutrient"], best["descriptor"]["params"]["oxygen"]
        step = 0.04
        cand = None
        st = meter.status(profile, events) if boredom else {"regime": "EXPLOIT"}
        if st["regime"] != "EXPLOIT":
            cells = meter.suggest(profile, events, n=8)
            for c in cells:
                h, a = c["cell"].split("/")
                if st["regime"] == "PARADIGM_BREAKOUT" and best and h == best["descriptor"]["hypothesis"]:
                    continue
                cn, co = CENTERS[h]
                for _ in range(10):
                    d = {"hypothesis": h, "assay": a,
                         "params": {"nutrient": round(clip(cn + rng.gauss(0, 0.08)), 4),
                                    "oxygen": round(clip(co + rng.gauss(0, 0.08)), 4)}}
                    if meter.gate(profile, events, d)["pass"]:
                        cand = d
                        break
                if cand:
                    break
        if cand is None:
            cand = {"hypothesis": hyp, "assay": assay,
                    "params": {"nutrient": round(clip(n + rng.gauss(0, step)), 4),
                               "oxygen": round(clip(o + rng.gauss(0, step)), 4)}}
        p = cand["params"]
        score = round(response(p["nutrient"], p["oxygen"], seed), 6)
        status = "keep" if best is None or score > best["score"] else "discard"
        e = {"seq": i + 1, "agent": agent, "descriptor": cand, "status": status, "score": score}
        events.append(e)
        if status == "keep":
            best = e
    trace = meter.fold(profile, events)
    first_global = next((e["seq"] for e in events if e["score"] >= 0.8), None)
    snaps = sum(t["regime"] != "EXPLOIT" for t in trace)
    return best["score"], first_global, snaps, events, trace


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    ap.add_argument("--seeds", type=int, default=20)
    ap.add_argument("--budget", type=int, default=36)
    ap.add_argument("--show", type=int, help="print the trace for one seed")
    args = ap.parse_args()
    if args.show is not None:
        *_, events, trace = run(args.show, True, args.budget)
        for e, t in zip(events, trace):
            d = e["descriptor"]
            print(f"{e['seq']:>3} {e['agent']:<9} {d['hypothesis']}/{d['assay']:<16} "
                  f"n={d['params']['nutrient']:.2f} o={d['params']['oxygen']:.2f} y={e['score']:.3f} "
                  f"B={t['B']:.3f} {t['regime']}")
        raise SystemExit(0)
    for arm in (False, True):
        res = [run(s, arm, args.budget) for s in range(args.seeds)]
        best = sum(r[0] for r in res) / len(res)
        found = [r[1] for r in res if r[1]]
        print(f"{'boredom' if arm else 'greedy ':<8} mean_best={best:.3f} "
              f"found_global={len(found)}/{len(res)} "
              f"median_attempts_to_global={sorted(found)[len(found)//2] if found else 'n/a'} "
              f"mean_non_exploit_steps={sum(r[2] for r in res)/len(res):.1f}")
