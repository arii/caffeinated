#!/usr/bin/env python3
"""Deterministic, domain-pluggable Boredom Meter for agent swarms.

B is a pure function of (ledger prefix, profile). No clocks, network, LLMs or
embeddings are read on the scoring path, so any agent can recompute and verify
another agent's score from the same ledger bytes.
"""

import argparse
import fcntl
import hashlib
import json
import math
from pathlib import Path
import sys

REGIMES = ("EXPLOIT", "BOREDOM_SNAP", "PARADIGM_BREAKOUT", "CONVERGED")
ROUND = 6


def canonical(obj):
    return json.dumps(obj, sort_keys=True, separators=(",", ":"), ensure_ascii=False)


def sha(obj):
    return hashlib.sha256(canonical(obj).encode("utf-8")).hexdigest()


def r(x):
    return None if x is None else round(float(x), ROUND)


def load_profile(path):
    profile = json.loads(Path(path).read_text(encoding="utf-8"))
    profile.setdefault("k", 5)
    profile.setdefault("knn", 3)
    profile.setdefault("patience", 5)
    profile.setdefault("frontier_statuses", ["keep"])
    profile.setdefault("eps", 0.0)
    profile.setdefault("weights", [0.45, 0.45, 0.10])
    profile.setdefault("thresholds", {"snap": 0.70, "breakout": 0.85, "exit": 0.55})
    profile.setdefault("min_attempts", 3)
    profile.setdefault("trivial_distance", 0.05)
    profile.setdefault("fail_statuses", ["crash", "invalid", "qc_fail"])
    profile.setdefault("attempt_statuses", ["keep", "discard", "crash"])
    profile.setdefault("required_mechanisms", list(profile.get("vocab") or {}))
    profile.setdefault("gate", {"snap_min_distance": 0.35, "failed_min_distance": 0.25})
    profile["_hash"] = sha({k: v for k, v in profile.items() if not k.startswith("_")})
    return profile


def read_ledger(path):
    path = Path(path)
    if not path.exists():
        return []
    events = []
    for n, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if line.strip():
            try:
                events.append(json.loads(line))
            except json.JSONDecodeError as error:
                raise ValueError(f"invalid JSON in {path} line {n}") from error
    return sorted(events, key=lambda e: e["seq"])


def validate_descriptor(profile, descriptor):
    levels = profile["levels"]
    vocab = profile.get("vocab")
    for level in levels:
        if level not in descriptor:
            raise ValueError(f"descriptor missing level '{level}'")
    if vocab:
        node = vocab
        for level in levels:
            value = descriptor[level]
            if isinstance(node, dict):
                if value not in node:
                    raise ValueError(f"{level}='{value}' not in profile vocab {sorted(node)}")
                node = node[value]
            elif isinstance(node, list):
                if value not in node:
                    raise ValueError(f"{level}='{value}' not in profile vocab {node}")
                node = None
    for name, value in (descriptor.get("params") or {}).items():
        spec = profile.get("params", {}).get(name)
        if spec is None:
            raise ValueError(f"param '{name}' not declared in profile")
        if not isinstance(value, (int, float)) or not math.isfinite(value):
            raise ValueError(f"param '{name}' must be a finite number")


def param_distance(profile, a, b):
    specs = profile.get("params", {})
    names = sorted(set(a) | set(b))
    if not names:
        return 0.0
    total = 0.0
    for name in names:
        if name not in a or name not in b:
            total += 1.0
            continue
        spec = specs[name]
        x, y = a[name], b[name]
        if spec.get("scale") == "ratio":
            x, y = max(abs(x), 1e-12), max(abs(y), 1e-12)
            total += min(abs(math.log(x / y)) / math.log(spec["ratio"]), 1.0)
            continue
        lo, hi = spec["min"], spec["max"]
        if spec.get("scale") == "log":
            lo, hi, x, y = (math.log10(max(v, 1e-300)) for v in (lo, hi, x, y))
        span = (hi - lo) or 1.0
        total += min(abs(x - y) / span, 1.0)
    return total / len(names)


def distance(profile, a, b):
    """Hierarchical descriptor distance in [0, 1]."""
    weights = profile["level_weights"]
    for level, weight in zip(profile["levels"], weights):
        if a[level] != b[level]:
            return weight
    residual = profile.get("params_weight", weights[-1] / 2)
    return round(residual * param_distance(profile, a.get("params") or {}, b.get("params") or {}), 9)


def sparseness(profile, d, archive):
    """Lehman & Stanley novelty: mean distance to the knn nearest archive members."""
    if not archive:
        return 1.0
    dists = sorted(distance(profile, d, other) for other in archive)
    near = dists[: profile["knn"]]
    return sum(near) / len(near)


def is_better(profile, x, y, margin=0.0):
    if profile.get("direction", "max") == "max":
        return x > y + margin
    return x < y - margin


def score_ok(profile, e):
    s = e.get("score")
    return (
        e.get("status") in profile.get("frontier_statuses", ["keep"])
        and isinstance(s, (int, float))
        and math.isfinite(s)
    )


def simpson(cells):
    if not cells:
        return 0.0
    counts = {}
    for c in cells:
        counts[c] = counts.get(c, 0) + 1
    n = len(cells)
    return 1.0 - sum(v * v for v in counts.values()) / (n * n)


def attempt_events(profile, events):
    return (e for e in events
            if e.get("status") in profile["attempt_statuses"] and e.get("kind") != "critic")


def fold(profile, events, agent=None):
    """Replay the ledger once, returning per-event metrics and final state."""
    k, patience = profile["k"], profile["patience"]
    eps = profile["eps"]
    th = profile["thresholds"]
    w1, w2, w3 = profile["weights"]
    head = profile["levels"][0]
    archive = []
    best = best_sig = None
    best_seq = None
    streak = stall = 0
    agent_streak = {}
    novelty_hist, trivial_hist, fail_hist, cell_hist = [], [], [], []
    regime = "EXPLOIT"
    trace = []
    required_cells = set(profile["required_mechanisms"])
    for e in attempt_events(profile, events):
        d = e["descriptor"]
        nov = sparseness(profile, d, archive)
        nearest = min((distance(profile, d, o) for o in archive), default=1.0)
        archive.append(d)
        failed = e.get("status") in profile["fail_statuses"]
        improved_sig = False
        if score_ok(profile, e):
            s = float(e["score"])
            if best is None or is_better(profile, s, best):
                best, best_seq, stall = s, e["seq"], 0
            else:
                stall += 1
            if best_sig is None or is_better(profile, s, best_sig, eps):
                best_sig, improved_sig = s, True
        else:
            stall += 1
        ea = e.get("agent", "")
        if improved_sig:
            streak = 0
            agent_streak = {a: 0 for a in agent_streak}
            agent_streak[ea] = 0
        else:
            streak += 1
            agent_streak[ea] = agent_streak.get(ea, 0) + 1
        if agent is None or ea == agent:
            novelty_hist.append(nov)
            trivial_hist.append(nearest < profile["trivial_distance"])
            fail_hist.append(failed)
            cell_hist.append(d[head])
        win_nov = novelty_hist[-k:]
        novelty = sum(win_nov) / len(win_nov) if win_nov else 1.0
        s_streak = streak if agent is None else agent_streak.get(agent, 0)
        stagnation = min(s_streak / patience, 1.0)
        win_fail, win_triv = fail_hist[-k:], trivial_hist[-k:]
        fail_rate = sum(win_fail) / len(win_fail) if win_fail else 0.0
        trivial_rate = sum(win_triv) / len(win_triv) if win_triv else 0.0
        overload = max(fail_rate, trivial_rate)
        B = min(max(w1 * (1 - novelty) + w2 * stagnation + w3 * overload, 0.0), 1.0)
        B = round(B, 9)
        n = len(archive)
        coverage_complete = required_cells.issubset(set(cell_hist))
        if improved_sig:
            regime = "EXPLOIT"
        elif regime == "CONVERGED":
            regime = "CONVERGED"
        elif stall >= 3 * patience and coverage_complete:
            regime = "CONVERGED"
        elif n < profile["min_attempts"]:
            regime = "EXPLOIT"
        elif B >= th["breakout"] and stall >= patience:
            regime = "PARADIGM_BREAKOUT"
        elif B >= th["snap"]:
            regime = "PARADIGM_BREAKOUT" if regime == "PARADIGM_BREAKOUT" else "BOREDOM_SNAP"
        elif regime != "EXPLOIT" and B >= th["exit"]:
            pass
        else:
            regime = "EXPLOIT"
        trace.append({
            "seq": e["seq"], "agent": ea, "B": r(B), "regime": regime,
            "novelty": r(novelty), "stagnation": r(stagnation), "overload": r(overload),
            "fail_rate": r(fail_rate), "trivial_rate": r(trivial_rate),
            "diversity": r(simpson(cell_hist[-k:])), "frontier_stall": stall,
            "best": r(best), "best_seq": best_seq,
        })
    return trace


def status(profile, events, agent=None, at=None):
    if at is not None:
        events = [e for e in events if e["seq"] <= at]
    trace = fold(profile, events, agent)
    last = trace[-1] if trace else {
        "seq": 0, "B": 0.0, "regime": "EXPLOIT", "novelty": 1.0, "stagnation": 0.0,
        "overload": 0.0, "fail_rate": 0.0, "trivial_rate": 0.0, "diversity": 0.0,
        "frontier_stall": 0, "best": None, "best_seq": None,
    }
    out = {k: v for k, v in last.items() if k != "agent"}
    out.update({
        "scope": agent or "swarm", "n_attempts": len(trace),
        "ledger_sha256": sha(events), "profile_sha256": profile["_hash"],
        "directive": profile.get("directives", {}).get(out["regime"], ""),
    })
    return out


def cell_key(profile, d, depth):
    return "/".join(str(d[level]) for level in profile["levels"][:depth])


def all_cells(profile, depth):
    def walk(node, prefix, level):
        if level == depth:
            yield prefix
            return
        items = sorted(node) if isinstance(node, (dict, list)) else []
        for key in items:
            child = node[key] if isinstance(node, dict) else None
            yield from walk(child, prefix + [key], level + 1)
    return ["/".join(c) for c in walk(profile.get("vocab") or {}, [], 0)]


def suggest(profile, events, n=5, depth=None):
    """Least-visited descriptor cells, failures counted against a cell; deterministic order."""
    depth = depth or min(2, len(profile["levels"]))
    visits, fails, best = {}, {}, {}
    for e in attempt_events(profile, events):
        c = cell_key(profile, e["descriptor"], depth)
        visits[c] = visits.get(c, 0) + 1
        if e.get("status") in profile["fail_statuses"]:
            fails[c] = fails.get(c, 0) + 1
        if score_ok(profile, e) and (c not in best or is_better(profile, e["score"], best[c])):
            best[c] = e["score"]
    cells = sorted(set(all_cells(profile, depth)) | set(visits))
    ranked = sorted(cells, key=lambda c: (visits.get(c, 0), fails.get(c, 0), c))
    return [{"cell": c, "visits": visits.get(c, 0), "fails": fails.get(c, 0), "best": best.get(c)} for c in ranked[:n]]


def gate(profile, events, descriptor, agent=None, sources=None, role=None):
    validate_descriptor(profile, descriptor)
    st = status(profile, events, agent)
    attempts = list(attempt_events(profile, events))
    archive = [e["descriptor"] for e in attempts]
    failed = [e["descriptor"] for e in attempts if e.get("status") in profile["fail_statuses"]
              or e.get("status") == "discard"]
    recent = archive[-profile["k"]:]
    min_recent = min((distance(profile, descriptor, o) for o in recent), default=None)
    min_failed = min((distance(profile, descriptor, o) for o in failed), default=None)
    g = profile["gate"]
    reasons = []
    if st["regime"] == "CONVERGED":
        best_event = next(
            (event for event in attempts if event.get("seq") == st["best_seq"]),
            None,
        )
        if best_event is None or distance(
            profile, descriptor, best_event["descriptor"]
        ) != 0:
            reasons.append("converged: confirmation runs only")
        if g.get("require_sources") and not sources:
            reasons.append("ungrounded: cite at least one research source id")
    elif st["regime"] != "EXPLOIT":
        if role != "exploit" and min_recent is not None and min_recent < g["snap_min_distance"]:
            reasons.append(f"near-duplicate of a recent attempt ({min_recent:.3f} < {g['snap_min_distance']})")
        if min_failed is not None and min_failed < g["failed_min_distance"]:
            reasons.append(f"too close to a failed/discarded attempt ({min_failed:.3f} < {g['failed_min_distance']})")
        if g.get("require_sources") and not sources:
            reasons.append("ungrounded: cite at least one research source id")
    if st["regime"] == "PARADIGM_BREAKOUT":
        head = profile["levels"][0]
        if any(o[head] == descriptor[head] for o in recent):
            reasons.append(f"BREAKOUT requires a {head} not used in the last {profile['k']} attempts")
    return {"pass": not reasons, "regime": st["regime"], "B": st["B"], "min_recent_distance": r(min_recent),
            "min_failed_distance": r(min_failed), "reasons": reasons,
            "ledger_sha256": st["ledger_sha256"], "profile_sha256": st["profile_sha256"]}


def submit(profile, ledger_path, event):
    validate_descriptor(profile, event["descriptor"])
    if event.get("status") is None:
        raise ValueError("status is required")
    path = Path(ledger_path)
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a+", encoding="utf-8") as fh:
        fcntl.flock(fh, fcntl.LOCK_EX)
        fh.seek(0)
        seqs = [json.loads(l)["seq"] for l in fh.read().splitlines() if l.strip()]
        event = {**event, "seq": max(seqs, default=0) + 1}
        fh.seek(0, 2)
        fh.write(canonical(event) + "\n")
        fh.flush()
        fcntl.flock(fh, fcntl.LOCK_UN)
    return event


def main(argv=None):
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--profile", required=True)
    p.add_argument("--ledger", required=True)
    sub = p.add_subparsers(dest="cmd", required=True)
    s = sub.add_parser("submit", help="append one attempt (JSON on stdin or --event)")
    s.add_argument("--event")
    st = sub.add_parser("status")
    st.add_argument("--agent")
    st.add_argument("--at", type=int, help="score the ledger prefix up to this seq")
    g = sub.add_parser("gate")
    g.add_argument("--descriptor", required=True, help="JSON descriptor of the candidate")
    g.add_argument("--agent")
    g.add_argument("--sources", default="")
    sg = sub.add_parser("suggest")
    sg.add_argument("--n", type=int, default=5)
    sg.add_argument("--depth", type=int)
    tr = sub.add_parser("trace")
    tr.add_argument("--agent")
    args = p.parse_args(argv)
    try:
        profile = load_profile(args.profile)
        if args.cmd == "submit":
            event = json.loads(args.event if args.event else sys.stdin.read())
            out = submit(profile, args.ledger, event)
        else:
            events = read_ledger(args.ledger)
            if args.cmd == "status":
                out = status(profile, events, args.agent, args.at)
            elif args.cmd == "gate":
                srcs = [x for x in args.sources.split(",") if x]
                out = gate(profile, events, json.loads(args.descriptor), args.agent, srcs)
            elif args.cmd == "suggest":
                out = suggest(profile, events, args.n, args.depth)
            else:
                out = fold(profile, events, args.agent)
    except (OSError, ValueError, KeyError) as error:
        print(canonical({"error": str(error)}))
        return 2
    print(canonical(out))
    if args.cmd == "gate" and not out["pass"]:
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
