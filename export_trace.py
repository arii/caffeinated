#!/usr/bin/env python3
"""Export autoresearch arms as a Little Sprout lab replay trace (caffeinated-trace/v1).

Reads swarm artifacts (ledger.jsonl, assignments.jsonl, research_log.jsonl,
memory.jsonl, memory_log.jsonl, boredom_log.jsonl, critic.tsv) or, for older
single-agent arms, results.tsv + boredom_log.jsonl. See lab/data/SCHEMA.md.

    python3 export_trace.py --arm B=experiments/swarm_B --arm A=experiments/swarm_A \
        -o lab/data/swarm.trace.json
    python3 export_trace.py --arm boredom=origin/autoresearch-nov14-boredom:experiments/boredom ...
    python3 export_trace.py ... --watch 15     # rewrite after every change (live mode)
"""

import argparse
import csv
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import time

SCHEMA = "caffeinated-trace/v1"
ROOT = Path(__file__).resolve().parent
THRESHOLDS = {"snap": 70, "breakout": 85}
REGIME_SHORT = {
    "EXPLOIT": "EXPLOIT",
    "BOREDOM_SNAP": "SNAP",
    "PARADIGM_BREAKOUT": "BREAKOUT",
    "CONVERGED": "CONVERGED",
}
ARTIFACTS = (
    "ledger.jsonl", "results.tsv", "assignments.jsonl", "boredom_log.jsonl",
    "research_log.jsonl", "memory.jsonl", "memory_log.jsonl", "critic.tsv", "run.json",
)
HIGHLIGHT_CHARS = 280


class ArmSource:
    """A directory on disk, or `<git-ref>:<path>` read with `git show`."""

    def __init__(self, location, repo=ROOT):
        self.location = location
        self.repo = repo
        path = Path(location)
        self.ref = None
        if not path.is_dir() and ":" in location:
            self.ref, self.path = location.split(":", 1)
        else:
            self.path = path

    def read(self, name):
        if self.ref:
            result = subprocess.run(
                ["git", "-C", str(self.repo), "show", f"{self.ref}:{self.path}/{name}"],
                capture_output=True, text=True,
            )
            return result.stdout if result.returncode == 0 else None
        file = Path(self.path) / name
        return file.read_text(encoding="utf-8") if file.is_file() else None

    def jsonl(self, name):
        text = self.read(name) or ""
        return [json.loads(line) for line in text.splitlines() if line.strip()]

    def tsv(self, name):
        text = self.read(name)
        return list(csv.DictReader(text.splitlines(), delimiter="\t")) if text else []

    def digests(self):
        out = {}
        for name in ARTIFACTS:
            text = self.read(name)
            if text is not None:
                out[name] = hashlib.sha256(text.encode("utf-8")).hexdigest()[:16]
        return out


def as_float(value):
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    return number if number > 0 else None


def short(commit):
    return (commit or "")[:7]


def score_of(best, baseline):
    if best is None or not baseline:
        return 0.0
    return round(max(0.0, (baseline - best) / baseline * 100), 3)


def round_for(ts, starts):
    """Round whose assignment was written most recently before `ts`."""
    current = starts[0][1] if starts else 0
    for start_ts, round_num in starts:
        if ts and start_ts <= ts:
            current = round_num
    return current


def fake_gpu_score(commit):
    digest = int(hashlib.sha256(commit.encode("utf-8")).hexdigest(), 16)
    return round(0.975 + 0.025 * digest / ((1 << 256) - 1), 6)


def detect_gpu(rows):
    scored = [r for r in rows if r.get("kind") == "candidate" and r.get("score") is not None]
    if scored and all(abs(fake_gpu_score(r["commit"]) - r["score"]) < 1e-9 for r in scored):
        return "fake"
    return "modal" if scored else "unknown"


def detect_exa(research):
    queries = [r for r in research if r.get("type") == "query"]
    if not queries:
        return "none"
    if all(r.get("disabled") for r in queries):
        return "off"
    return "replay" if all(r.get("replay") for r in queries) else "live"


def memory_message(item, sources=None):
    meta = item.get("metadata") or {}
    kind = meta.get("type") or item.get("label", "").split(" ")[0]
    content = item.get("content") or ""
    if kind in ("lead", "assignment", "claim"):
        try:
            body = json.loads(content)
        except ValueError:
            body = {}
        if kind == "lead":
            cited = ", ".join(
                f"{sid} \u201c{(sources or {}).get(sid, {}).get('title') or 'untitled'}\u201d"
                for sid in body.get("source_ids", []))
            return f"Lead from {cited}: {body.get('recipe', '')} ({body.get('claimed_effect', '')})"
        if kind == "assignment":
            return f"{REGIME_SHORT.get(body.get('regime'), body.get('regime'))} at B={body.get('swarm_B', 0):.2f}: {body.get('rationale', '')}"
        if kind == "claim":
            return f"Testing: {body.get('description') or body.get('idea') or content[:160]}"
    first = [line for line in content.splitlines() if line.strip()]
    if kind == "result" and len(first) >= 3:
        return f"{first[1]} → {first[2]}"
    return " ".join(first)[:240]


def export_swarm_arm(name, source):
    ledger = source.jsonl("ledger.jsonl")
    assignments = source.jsonl("assignments.jsonl")
    boredom_log = source.jsonl("boredom_log.jsonl")
    research = source.jsonl("research_log.jsonl")
    memory_items = source.jsonl("memory.jsonl")
    memory_log = source.jsonl("memory_log.jsonl")
    run_info = json.loads(source.read("run.json") or "{}")

    statuses = [r for r in boredom_log if r.get("type", "status") == "status"]
    disabled = bool(statuses) and all(r.get("disabled") for r in statuses)
    rounds = {}
    for a in assignments:
        rounds[a["round"]] = {
            "round": a["round"],
            "regime": REGIME_SHORT.get(a.get("regime"), a.get("regime")),
            "boredom": round(100 * float(a.get("swarm_B", 0))),
            "agent_boredom": {k: round(100 * float(v)) for k, v in sorted(a.get("per_agent_B", {}).items())},
            "roles": dict(sorted(a.get("roles", {}).items())),
            "scouts": list(a.get("scouts", [])),
            "rationale": a.get("rationale", ""),
        }
    starts = sorted((a["ts"], a["round"]) for a in assignments if a.get("ts"))

    # Exa: queries and the sources they returned.
    sources, queries = {}, {}
    for r in research:
        if r.get("type") == "query":
            queries[r["id"]] = {
                "id": r["id"], "agent": r.get("agent"), "purpose": r.get("purpose"),
                "query": r.get("query"), "regime": REGIME_SHORT.get(r.get("regime"), r.get("regime")),
                "round": round_for(r.get("ts"), starts), "n_results": r.get("n_results", 0),
                "disabled": bool(r.get("disabled")), "source_ids": [],
            }
        elif r.get("type") == "source":
            sources[r["id"]] = {
                "id": r["id"], "title": r.get("title") or "", "url": r.get("url") or "",
                "published": (r.get("published") or "")[:10], "query_id": r.get("query_id"),
                "agent": r.get("agent"),
                "highlight": " ".join(" ".join(r.get("highlights") or []).split())[:HIGHLIGHT_CHARS],
                "cited_by": [],
            }
            if r.get("query_id") in queries:
                queries[r["query_id"]]["source_ids"].append(r["id"])
        elif r.get("type") == "extract" and r.get("source_id") in sources:
            sources[r["source_id"]]["extract"] = (r.get("summary") or "")[:600]

    leads = {}
    for item in memory_items:
        if (item.get("metadata") or {}).get("type") == "lead":
            leads[item["id"]] = {"id": item["id"], "author": item.get("author"),
                                 "source_ids": (item.get("metadata") or {}).get("source_ids", [])}

    events = [r for r in ledger if r.get("kind") in ("baseline", "candidate", "critic")]
    baseline = next((as_float(r.get("score")) for r in events if r.get("kind") == "baseline"), None)
    if baseline is None and events:
        baseline = as_float(events[0].get("score"))
    has_critic = any(r.get("kind") == "critic" for r in events)
    best, best_commit, prev_regime = baseline, None, "EXPLOIT"
    seen_rounds, experiments, by_commit = set(), [], {}
    for index, r in enumerate(events, start=1):
        value = as_float(r.get("score"))
        kind = r.get("kind")
        confirmed = kind == "baseline" or (kind == "critic" and r.get("accepted")) or (
            not has_critic and r.get("status") == "keep")
        if confirmed and value is not None and (best is None or value <= best):
            best, best_commit = value, short(r.get("commit"))
        info = rounds.get(r.get("round"), {})
        regime = info.get("regime", "EXPLOIT")
        first_of_round = r.get("round") not in seen_rounds
        seen_rounds.add(r.get("round"))
        pivot = bool(first_of_round and regime != prev_regime and regime in ("SNAP", "BREAKOUT"))
        if first_of_round:
            prev_regime = regime
        lead_id = r.get("lead")
        lead = leads.get(lead_id) or ({"id": lead_id, "author": None, "source_ids": []} if lead_id else None)
        cited = [s for s in r.get("sources", []) if s in sources]
        for s in cited:
            if r.get("agent") not in sources[s]["cited_by"]:
                sources[s]["cited_by"].append(r.get("agent"))
        exp = {
            "id": index, "seq": r.get("seq"), "round": r.get("round"), "agent": r.get("agent"),
            "role": "critic" if kind == "critic" else ("baseline" if kind == "baseline" else
                    "scout" if r.get("agent") in info.get("scouts", []) else r.get("role") or "exploit"),
            "kind": kind, "commit": short(r.get("commit")), "val_bpb": value,
            "best_val_bpb": best, "score": score_of(best, baseline), "status": r.get("status"),
            "description": r.get("description", ""), "boredom": info.get("boredom", 0),
            "agent_boredom": info.get("agent_boredom", {}).get(r.get("agent")),
            "regime": regime, "pivot": pivot, "sources": cited,
            "lead": lead, "verdict": r.get("verdict"),
            "gate_reasons": r.get("gate_reasons") or [],
        }
        experiments.append(exp)
        by_commit.setdefault(exp["commit"], exp["id"])

    first_in_round = {}
    last_in_round = {}
    for e in experiments:
        first_in_round.setdefault(e["round"], e["id"])
        last_in_round[e["round"]] = e["id"]

    # Who read what: a recall is attributed to the author of the next memory write
    # (every swarm role recalls immediately before it writes its claim/lead/verdict).
    recalled_by = {}
    pending = []
    for entry in memory_log:
        if entry.get("type") == "recall":
            pending.append(entry)
        elif entry.get("type") == "write":
            for recall in pending:
                for source_id in recall.get("source_ids", []):
                    recalled_by.setdefault(source_id, set()).add(entry.get("agent"))
            pending = []

    reused_by = {}
    for e in experiments:
        if e["lead"] and e["lead"].get("author") and e["lead"]["author"] != e["agent"] and e["kind"] == "candidate":
            reused_by.setdefault(e["lead"]["id"], []).append({"agent": e["agent"], "experiment": e["id"]})

    memory = []
    for item in memory_items:
        meta = item.get("metadata") or {}
        kind = meta.get("type") or item.get("label", "").split(" ")[0]
        round_num = meta.get("round")
        if kind == "result" and meta.get("kind") != "critic":
            at = by_commit.get(short(meta.get("commit")), first_in_round.get(round_num, 1))
        elif kind in ("verdict", "lesson") or (kind == "result" and meta.get("kind") == "critic"):
            at = last_in_round.get(round_num, len(experiments))
        else:
            at = first_in_round.get(round_num, 1)
        author = item.get("author")
        readers = sorted(a for a in recalled_by.get(item["id"], ()) if a and a != author)
        memory.append({
            "id": item["id"], "experiment": at, "round": round_num, "agent": author,
            "type": kind, "message": memory_message(item, sources),
            "source_ids": meta.get("source_ids") or meta.get("sources") or [],
            "pastdev_source_id": item.get("sourceId"),
            "recalled_by": readers, "reused_by": reused_by.get(item["id"], []),
        })
    memory.sort(key=lambda m: (m["experiment"], m["round"] or 0))

    agents = sorted({e["agent"] for e in experiments if e["agent"] not in ("baseline",)})
    cited_ids = {s for e in experiments for s in e["sources"]} | {
        s for lead in leads.values() for s in lead["source_ids"]}
    summary = {
        "experiments": len(experiments),
        "rounds": len(rounds),
        "baseline_val_bpb": baseline,
        "best_val_bpb": best,
        "best_commit": best_commit,
        "score": score_of(best, baseline),
        "pivots": sum(e["pivot"] for e in experiments),
        "max_boredom": max([r["boredom"] for r in rounds.values()] or [0]),
        "exa_queries": sum(not q["disabled"] for q in queries.values()),
        "exa_sources": len(sources),
        "exa_sources_cited": len(cited_ids & set(sources)),
        "scout_leads": len(leads),
        "memory_writes": len(memory),
        "memory_recalls": sum(e.get("type") == "recall" for e in memory_log),
        "cross_agent_reuse": sum(len(v) for v in reused_by.values()),
    }
    return {
        "arm": name,
        "label": f"Arm {name}" + (" · meter off (control)" if disabled else " · boredom meter on"),
        "boredom_enabled": not disabled,
        "budget": len(experiments),
        "provenance": {
            "format": "swarm",
            "llm": run_info.get("llm") or "unknown",
            "gpu": run_info.get("gpu") or detect_gpu(ledger),
            "exa": detect_exa(research),
            "memory_backend": run_info.get("memory_backend") or next(
                (e.get("backend") for e in memory_log if e.get("backend")), "none"),
            "command": run_info.get("command"),
            "note": run_info.get("note"),
            "artifacts": source.digests(),
        },
        "agents": agents,
        "rounds": [rounds[k] for k in sorted(rounds)],
        "experiments": experiments,
        "memory": memory,
        "research": sorted(queries.values(), key=lambda q: int(q["id"].lstrip("Q") or 0)),
        "sources": dict(sorted(sources.items(), key=lambda kv: int(kv[0].lstrip("S") or 0))),
        "summary": summary,
    }


def export_results_arm(name, source):
    """Older single-agent arms: one row per experiment in results.tsv."""
    rows = source.tsv("results.tsv")
    statuses = [r for r in source.jsonl("boredom_log.jsonl")
                if r.get("type", r.get("kind", "status")) == "status" and "B" in r]
    if not rows:
        raise ValueError(f"{source.location}: no ledger.jsonl or results.tsv")
    baseline = as_float(rows[0]["val_bpb"])
    best, best_commit, prev, experiments, memory = baseline, short(rows[0]["commit"]), "EXPLOIT", [], []
    for i, r in enumerate(rows, start=1):
        value = as_float(r["val_bpb"])
        if value is not None and r["status"] == "keep" and value <= best:
            best, best_commit = value, short(r["commit"])
        status = statuses[min(i, len(statuses)) - 1] if statuses else {}
        regime = REGIME_SHORT.get(status.get("regime"), status.get("regime") or "EXPLOIT")
        pivot = regime != prev and regime in ("SNAP", "BREAKOUT")
        boredom = round(100 * float(status.get("B", 0.0)))
        experiments.append({
            "id": i, "seq": i, "round": i, "agent": "worker-1",
            "role": "baseline" if i == 1 else "exploit", "kind": "baseline" if i == 1 else "candidate",
            "commit": short(r["commit"]), "val_bpb": value, "best_val_bpb": best,
            "score": score_of(best, baseline), "status": r["status"], "description": r["description"],
            "boredom": boredom, "agent_boredom": boredom, "regime": regime, "pivot": pivot,
            "sources": [], "lead": None, "verdict": None, "gate_reasons": [],
        })
        if pivot:
            memory.append({"id": f"pivot-{i}", "experiment": i, "round": i, "agent": "conductor",
                           "type": "assignment", "message": f"B={boredom / 100:.2f}: entered {regime}",
                           "source_ids": [], "pastdev_source_id": None, "recalled_by": [], "reused_by": []})
        prev = regime
    return {
        "arm": name,
        "label": f"Arm {name}" + (" · boredom log" if statuses else " · no meter log"),
        "boredom_enabled": bool(statuses),
        "budget": len(experiments),
        "provenance": {"format": "results.tsv", "llm": "agent", "gpu": "unknown", "exa": "none",
                       "memory_backend": "none", "command": None, "note": None,
                       "artifacts": source.digests()},
        "agents": ["worker-1"],
        "rounds": [],
        "experiments": experiments,
        "memory": memory,
        "research": [],
        "sources": {},
        "summary": {
            "experiments": len(experiments), "rounds": len(experiments), "baseline_val_bpb": baseline,
            "best_val_bpb": best, "best_commit": best_commit, "score": score_of(best, baseline),
            "pivots": sum(e["pivot"] for e in experiments),
            "max_boredom": max(e["boredom"] for e in experiments), "exa_queries": 0,
            "exa_sources": 0, "exa_sources_cited": 0, "scout_leads": 0,
            "memory_writes": len(memory), "memory_recalls": 0, "cross_agent_reuse": 0,
        },
    }


def export_arm(name, location):
    source = ArmSource(location)
    if source.read("ledger.jsonl") is not None:
        return export_swarm_arm(name, source)
    return export_results_arm(name, source)


def agent_roster(arms):
    names = sorted({a for arm in arms for a in arm["agents"]} - {"critic"})
    roster = [{"id": "conductor", "role": "Conductor"}]
    roster += [{"id": n, "role": "Worker"} for n in names]
    if any("critic" in arm["agents"] for arm in arms):
        roster.append({"id": "critic", "role": "Critic"})
    return roster


def build_trace(arm_specs, title=None):
    arms = [export_arm(name, location) for name, location in arm_specs]
    arms.sort(key=lambda a: (not a["boredom_enabled"], a["arm"]))
    return {
        "schema": SCHEMA,
        "title": title or " vs ".join(a["label"] for a in arms),
        "metric": {"name": "val_bpb", "direction": "min"},
        "thresholds": dict(THRESHOLDS),
        "agents": agent_roster(arms),
        "arms": arms,
    }


def validate_trace(trace):
    """Return a list of problems; empty means the trace satisfies caffeinated-trace/v1."""
    problems = []
    for key in ("schema", "metric", "thresholds", "agents", "arms"):
        if key not in trace:
            problems.append(f"missing {key}")
    if trace.get("schema") != SCHEMA:
        problems.append(f"schema is {trace.get('schema')!r}")
    for arm in trace.get("arms", []):
        exps = arm.get("experiments", [])
        label = arm.get("arm")
        if [e["id"] for e in exps] != list(range(1, len(exps) + 1)):
            problems.append(f"{label}: experiment ids are not 1..n")
        bests = [e["best_val_bpb"] for e in exps if e["best_val_bpb"] is not None]
        if any(b > a + 1e-12 for a, b in zip(bests, bests[1:])):
            problems.append(f"{label}: best_val_bpb is not monotone")
        if arm.get("budget") != len(exps):
            problems.append(f"{label}: budget != experiment count")
        for e in exps:
            if not 0 <= e["boredom"] <= 100:
                problems.append(f"{label}: boredom out of range at {e['id']}")
            for s in e["sources"]:
                if s not in arm.get("sources", {}):
                    problems.append(f"{label}: experiment {e['id']} cites unknown source {s}")
        for m in arm.get("memory", []):
            if not 1 <= m["experiment"] <= max(len(exps), 1):
                problems.append(f"{label}: memory {m['id']} points outside the run")
            for r in m["reused_by"]:
                if r["agent"] == m["agent"]:
                    problems.append(f"{label}: memory {m['id']} reused by its own author")
    return problems


def write_trace(trace, output):
    output = Path(output)
    output.parent.mkdir(parents=True, exist_ok=True)
    text = json.dumps(trace, indent=1, ensure_ascii=False) + "\n"
    tmp = output.with_suffix(output.suffix + ".tmp")
    tmp.write_text(text, encoding="utf-8")
    tmp.replace(output)
    return text


def parse_arm(spec):
    name, sep, location = spec.partition("=")
    if not sep or not name or not location:
        raise argparse.ArgumentTypeError("use NAME=DIR or NAME=GITREF:PATH")
    return name, location


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--arm", action="append", type=parse_arm, required=True)
    parser.add_argument("-o", "--output", default="lab/data/swarm.trace.json")
    parser.add_argument("--title")
    parser.add_argument("--watch", type=float, metavar="SECONDS",
                        help="keep rewriting the trace whenever the artifacts change")
    args = parser.parse_args(argv)
    last = None
    while True:
        trace = build_trace(args.arm, args.title)
        problems = validate_trace(trace)
        if problems:
            print("\n".join(problems), file=sys.stderr)
            if not args.watch:
                return 1
        text = json.dumps(trace, sort_keys=True)
        if text != last:
            write_trace(trace, args.output)
            last = text
            for arm in trace["arms"]:
                s = arm["summary"]
                print(f"{arm['arm']}: {s['experiments']} experiments, best {s['best_val_bpb']} "
                      f"(+{s['score']}%), max boredom {s['max_boredom']}, pivots {s['pivots']}, "
                      f"exa sources {s['exa_sources']}, cross-agent reuse {s['cross_agent_reuse']}")
            print(f"wrote {args.output}")
        if not args.watch:
            return 0
        time.sleep(args.watch)


if __name__ == "__main__":
    sys.exit(main())
