"""Export a finished swarm run to the swarm-viewer/v1 static layout.

See docs/swarm-viewer-api.md. Reads autoresearch output dirs (ledger.jsonl,
assignments.jsonl, ...) or an ignobel run dir (events.jsonl) and writes
manifest.json, timeline.json, events.ndjson, keyframes/ and entities/.
Read-only on the source dir; output is deterministic for the same input.
"""

import argparse
import bisect
import csv
import json
import os
import shutil
import tempfile
import uuid
from pathlib import Path
from types import SimpleNamespace

import live_publish
from boredom_meter import meter

SCHEMA = "swarm-viewer/v1"
NS_CAFFEINATED = uuid.UUID("6f1c3d2e-5b7a-4c1e-9a43-0c0ffee00001")
KEYFRAME_EVERY = 250
RECENT_EVENTS = 20
PHASES = {
    "autoresearch": (
        "assign",
        "research",
        "propose",
        "gate",
        "evaluate",
        "critic",
        "status",
        "finish",
    ),
    "ignobel": ("seed", "boredom", "talk", "share", "snap", "propose", "study", "diary"),
}
ENTITY_KINDS = (
    "questions",
    "observations",
    "hypotheses",
    "experiments",
    "rewards",
    "diary",
    "memory",
    "sources",
    "llm_calls",
    "discoveries",
)
STATIONS = {
    "assigned": "notebook",
    "searching": "explorer",
    "recalling": "notebook",
    "proposing": "notebook",
    "gating": "analyzer",
    "evaluating": "culture",
    "reviewing": "analyzer",
    "talking": "partner",
    "sharing": "partner",
    "snapping": "explorer",
    "writing": "notebook",
    "idle": "home",
}
EVENT_ACTIVITY = {
    "agent.assigned": "assigned",
    "question.asked": "searching",
    "observation.received": "searching",
    "hypothesis.proposed": "proposing",
    "gate.checked": "gating",
    "experiment.started": "evaluating",
    "experiment.finished": "reviewing",
    "verdict.issued": "reviewing",
    "message.sent": "talking",
    "items.shared": "sharing",
    "diary.written": "writing",
    "memory.written": "writing",
}


def uid(namespace, name):
    return str(uuid.uuid5(uuid.UUID(str(namespace)), str(name)))


def read_jsonl(path):
    rows = []
    if not path.exists():
        return rows
    for line_no, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        if not line.strip():
            continue
        try:
            rows.append((line_no, json.loads(line)))
        except json.JSONDecodeError:
            continue  # a live run may leave a partial last line
    return rows


def read_tsv(path):
    if not path.exists():
        return []
    with path.open(encoding="utf-8", newline="") as stream:
        return list(csv.DictReader(stream, delimiter="\t"))


def number(value):
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


class Run:
    """Collects raw events, then orders them and assigns tick/event ids."""

    def __init__(self, swarm, run_id):
        self.swarm = swarm
        self.run_id = run_id
        self.phase_rank = {phase: rank for rank, phase in enumerate(PHASES[swarm])}
        if swarm == "autoresearch":
            self.phase_rank["propose"] = self.phase_rank["research"]
        self.raw = []
        self.entities = {kind: {} for kind in ENTITY_KINDS}
        self.agents = {}

    def agent(self, native, agent_type, label=None):
        if native not in self.agents:
            self.agents[native] = {
                "agent_id": uid(self.run_id, native),
                "native_id": native,
                "type": agent_type,
                "label": label or native,
            }
        return self.agents[native]["agent_id"]

    def agent_id(self, native):
        return self.agents[native]["agent_id"] if native in self.agents else None

    def emit(
        self, kind, *, round_, phase, ts, agent, file, line, native_type, payload, refs=None, sub=0
    ):
        self.raw.append(
            {
                "key": (round_, self.phase_rank[phase], ts or "", file, line, sub),
                "type": kind,
                "round": round_,
                "phase": phase,
                "ts": ts,
                "agent_id": self.agent_id(agent) if agent else None,
                "refs": refs or {},
                "source": {"file": file, "line": line, "native_type": native_type, "sub": sub},
                "payload": payload,
            }
        )

    def put(self, kind, entity_id, entity):
        self.entities[kind][entity_id] = {"id": entity_id, **entity}
        return entity_id

    def finalize(self):
        self.raw.sort(key=lambda event: event["key"])
        events = []
        for tick, raw in enumerate(self.raw):
            src = raw["source"]
            events.append(
                {
                    "schema": SCHEMA,
                    "run_id": self.run_id,
                    "event_id": uid(
                        self.run_id, f"{src['file']}:{src['line']}:{src['sub']}:{raw['type']}"
                    ),
                    "tick": tick,
                    "round": raw["round"],
                    "phase": raw["phase"],
                    "ts": raw["ts"],
                    "type": raw["type"],
                    "agent_id": raw["agent_id"],
                    "refs": raw["refs"],
                    "source": {key: src[key] for key in ("file", "line", "native_type")},
                    "payload": raw["payload"],
                }
            )
        tick_of = {}
        for event in events:
            for ref in event["refs"].values():
                if isinstance(ref, str):
                    tick_of.setdefault(ref, event["tick"])
        for table in self.entities.values():
            for entity_id, entity in table.items():
                if "tick" in entity and entity["tick"] is None:
                    entity["tick"] = tick_of.get(entity_id)
        return events


def round_of_ts(starts, ts):
    """Round whose assignment timestamp is the latest at or before ts."""
    if not ts or not starts:
        return 0
    index = bisect.bisect_right([start for start, _ in starts], ts) - 1
    return starts[index][1] if index >= 0 else 0


def reward_for(metric, reference, status, direction="minimize"):
    if status in {"crash", "reject"} or metric is None or reference is None:
        return 0.0
    delta = reference - metric if direction == "minimize" else metric - reference
    if reference == 0:
        return round(delta * 100, 6)
    return round(delta / abs(reference) * 100, 6)


# ---------------------------------------------------------------- autoresearch


def _load_profile(out_dir, assignments, run_artifact):
    expected_hash = run_artifact.get("profile_sha256") or next(
        (record.get("profile_sha256") for _, record in assignments if record.get("profile_sha256")),
        None,
    )
    profile_path = run_artifact.get("profile_path")
    candidates = []
    if profile_path:
        profile_path = Path(profile_path)
        if not profile_path.is_absolute():
            profile_path = Path(out_dir) / profile_path
        candidates.append(profile_path)
    candidates.extend(sorted((Path(__file__).parent / "testcases").glob("*/boredom_profile.json")))
    for path in candidates:
        if path.is_file():
            profile = meter.load_profile(path)
            if expected_hash is None or profile["_hash"] == expected_hash:
                return profile
    if expected_hash is not None:
        raise ValueError(f"no boredom profile matches logged profile_sha256 {expected_hash}")
    raise ValueError(f"no boredom profile available for {out_dir}")


def _recompute_boredom(out_dir, assignments, ledger, run_artifact):
    profile = _load_profile(out_dir, assignments, run_artifact)
    logged_hashes = [run_artifact.get("profile_sha256")]
    logged_hashes.extend(record.get("profile_sha256") for _, record in assignments)
    if any(value and value != profile["_hash"] for value in logged_hashes):
        raise ValueError("boredom profile sha256 differs from logged profile_sha256")
    ordered = [record for _, record in sorted(ledger, key=lambda item: item[1].get("seq", item[0]))]
    prefixes = {meter.sha(ordered[:index]): ordered[:index] for index in range(len(ordered) + 1)}
    computed = {}
    for _, assignment in assignments:
        expected = assignment.get("ledger_sha256")
        prefix = prefixes.get(expected) if expected else None
        if expected and prefix is None:
            raise ValueError(
                f"ledger prefix does not match assignment round {assignment.get('round')}"
            )
        if prefix is None:
            round_ = assignment.get("round", 0)
            prefix = [row for row in ordered if row.get("round", 0) < round_]
        for agent in assignment.get("roles", {}):
            value = meter.status(profile, prefix, agent=agent)
            logged = (assignment.get("per_agent_boredom") or {}).get(agent)
            if isinstance(logged, dict):
                for key, actual in value.items():
                    previous = logged.get(key)
                    if isinstance(previous, (int, float)) and isinstance(actual, (int, float)):
                        if abs(float(previous) - float(actual)) > 1e-9:
                            raise ValueError(
                                f"per_agent_boredom mismatch for {agent} round "
                                f"{assignment.get('round')} field {key}"
                            )
                    elif previous is not None and key in logged and previous != actual:
                        raise ValueError(
                            f"per_agent_boredom mismatch for {agent} round "
                            f"{assignment.get('round')} field {key}"
                        )
            computed[(assignment.get("round"), agent)] = value
    return profile, computed


def export_autoresearch(out_dir, arm=None, title=None, final=True, status=None):
    out_dir = Path(out_dir)
    watermark = live_publish.watermark()
    frontier_path = out_dir / "viewer_frontier.json"
    frontier = (
        json.loads(frontier_path.read_text()) if not final and frontier_path.exists() else None
    )
    assignments = read_jsonl(out_dir / "assignments.jsonl")
    ledger = read_jsonl(out_dir / "ledger.jsonl")
    boredom_log = read_jsonl(out_dir / "boredom_log.jsonl")
    research = read_jsonl(out_dir / "research_log.jsonl")
    memory_items = read_jsonl(out_dir / "memory.jsonl")
    memory_log = read_jsonl(out_dir / "memory_log.jsonl")
    llm_log = read_jsonl(out_dir / "llm_log.jsonl")
    critic_rows = read_tsv(out_dir / "critic.tsv")
    native_run = (out_dir / "run_id").read_text().strip() if (out_dir / "run_id").exists() else ""
    run_artifact_path = out_dir / "run.json"
    run_artifact = (
        json.loads(run_artifact_path.read_text(encoding="utf-8"))
        if run_artifact_path.exists()
        else {}
    )
    profile, recomputed_boredom = _recompute_boredom(out_dir, assignments, ledger, run_artifact)

    if arm is None:
        arm = next(
            (
                item.get("metadata", {}).get("arm")
                for _, item in memory_items
                if item.get("metadata", {}).get("arm")
            ),
            "B",
        )
    all_ts = sorted(
        record["ts"]
        for rows in (assignments, boredom_log, research, memory_log, llm_log)
        for _, record in rows
        if record.get("ts")
    )
    first_ts = all_ts[0] if all_ts else native_run
    run_id = uid(NS_CAFFEINATED, f"autoresearch:{arm}:{out_dir.name}:{first_ts}")
    run = Run("autoresearch", run_id)
    run.agent("conductor", "conductor", "Conductor")
    run.agent("baseline", "baseline", "Baseline")
    workers = sorted(
        {agent for _, record in assignments for agent in record.get("roles", {})}
        | {record["agent"] for _, record in ledger if record.get("kind") == "candidate"}
    )
    for worker in workers:
        run.agent(worker, "worker", worker.replace("worker-", "Worker "))
    run.agent("critic", "critic", "Critic")

    starts = sorted(
        (record["ts"], record["round"]) for _, record in assignments if record.get("ts")
    )
    status_ts = sorted(
        record["ts"]
        for _, record in boredom_log
        if record.get("type") == "status" and record.get("ts")
    )

    run.emit(
        "run.started",
        round_=0,
        phase="assign",
        ts=all_ts[0] if all_ts else None,
        agent="conductor",
        file="run_id",
        line=1,
        native_type="run",
        payload={"native_run_id": native_run, "arm": arm},
    )

    # Rounds, roles and per-agent boredom.
    for line, record in assignments:
        round_, ts = record["round"], record.get("ts")
        run.emit(
            "round.started",
            round_=round_,
            phase="assign",
            ts=ts,
            agent="conductor",
            file="assignments.jsonl",
            line=line,
            native_type="assignment",
            payload={
                "regime": record.get("regime"),
                "swarm_B": record.get("swarm_B"),
                "rationale": record.get("rationale"),
                "profile_sha256": record.get("profile_sha256"),
            },
        )
        for sub, (agent, role) in enumerate(sorted(record.get("roles", {}).items()), 1):
            run.emit(
                "agent.assigned",
                round_=round_,
                phase="assign",
                ts=ts,
                agent=agent,
                file="assignments.jsonl",
                line=line,
                native_type="assignment",
                sub=sub,
                payload={
                    "role": role,
                    "scout": agent in record.get("scouts", []),
                    "rationale": record.get("rationale"),
                },
            )
            status = (record.get("per_agent_boredom") or {}).get(agent)
            if not status:
                status = recomputed_boredom.get((round_, agent), {})
            components = {
                key: value
                for key, value in status.items()
                if key
                in {
                    "novelty",
                    "stagnation",
                    "overload",
                    "fail_rate",
                    "trivial_rate",
                    "diversity",
                    "frustration",
                }
            }
            run.emit(
                "boredom.measured",
                round_=round_,
                phase="assign",
                ts=ts,
                agent=agent,
                file="assignments.jsonl",
                line=line,
                native_type="assignment",
                sub=100 + sub,
                payload={
                    "B": status.get("B"),
                    "regime": status.get("regime") or record.get("regime"),
                    "components": components,
                    "shadow": arm == "A",
                },
            )

    # Swarm-level meter status and novelty gates.
    gate_ts = {}
    ledger_commits = {row.get("commit") for _, row in ledger if row.get("commit")}
    for line, record in boredom_log:
        ts = record.get("ts")
        round_ = round_of_ts(starts, ts)
        if record.get("type") == "status":
            run.emit(
                "boredom.measured",
                round_=round_,
                phase="status",
                ts=ts,
                agent=None,
                file="boredom_log.jsonl",
                line=line,
                native_type="status",
                payload={
                    "scope": "swarm",
                    "B": record.get("B"),
                    "regime": record.get("regime"),
                    "frontier_stall": record.get("frontier_stall"),
                    "frustration": record.get("frustration"),
                    "best_metric": record.get("best_loss"),
                    "directive": record.get("directive"),
                    "shadow": arm == "A",
                },
            )
        elif record.get("type") == "gate":
            commit = record.get("candidate_commit")
            if commit:
                gate_ts.setdefault(commit, ts)
            run.emit(
                "gate.checked",
                round_=round_,
                phase="gate",
                ts=ts,
                agent=record.get("agent"),
                file="boredom_log.jsonl",
                line=line,
                native_type="gate",
                refs={"experiment_id": f"experiment:{commit}"} if commit in ledger_commits else {},
                payload={
                    "pass": record.get("pass"),
                    "candidate_commit": commit,
                    "grounded": record.get("grounded"),
                    "min_recent_dist": record.get("min_recent_dist"),
                    "min_failed_dist": record.get("min_failed_dist"),
                    "prior_art": record.get("prior_art"),
                    "lead": record.get("lead"),
                    "descriptor": record.get("descriptor"),
                },
            )

    # Exa research: queries are questions, sources/extracts are observations.
    query_agent = {}
    for line, record in research:
        ts, round_ = record.get("ts"), round_of_ts(starts, record.get("ts"))
        if record.get("type") == "query":
            qid = f"question:{record['id']}"
            agent = record.get("agent") if record.get("agent") in run.agents else None
            query_agent[record["id"]] = agent
            kind = {"prior_art": "prior_art"}.get(record.get("purpose"), "search")
            run.put(
                "questions",
                qid,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": kind,
                    "text": record.get("query"),
                    "tick": None,
                    "round": round_,
                    "purpose": record.get("purpose"),
                    "answered_by": [],
                },
            )
            run.emit(
                "question.asked",
                round_=round_,
                phase="research",
                ts=ts,
                agent=agent,
                file="research_log.jsonl",
                line=line,
                native_type="query",
                refs={"question_id": qid},
                payload={
                    "kind": kind,
                    "text": record.get("query"),
                    "n_results": record.get("n_results"),
                    "cost": record.get("cost"),
                },
            )
        elif record.get("type") == "source":
            sid = f"source:{record['id']}"
            qid = f"question:{record.get('query_id')}"
            run.put(
                "sources",
                sid,
                {
                    "title": record.get("title"),
                    "url": record.get("url"),
                    "published": record.get("published"),
                    "highlights": record.get("highlights", []),
                    "query_id": qid,
                    "extract": None,
                    "cited_by": [],
                },
            )
            oid = f"observation:{record['id']}"
            agent = query_agent.get(record.get("query_id"))
            run.put(
                "observations",
                oid,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": "sources",
                    "summary": record.get("title"),
                    "refs": [sid],
                    "question_id": qid,
                    "tick": None,
                    "round": round_,
                },
            )
            if qid in run.entities["questions"]:
                run.entities["questions"][qid]["answered_by"].append(oid)
            run.emit(
                "observation.received",
                round_=round_,
                phase="research",
                ts=ts,
                agent=agent,
                file="research_log.jsonl",
                line=line,
                native_type="source",
                refs={"observation_id": oid, "source_id": sid, "question_id": qid},
                payload={
                    "kind": "sources",
                    "summary": record.get("title"),
                    "url": record.get("url"),
                },
            )
        elif record.get("type") == "extract":
            sid = f"source:{record.get('source_id')}"
            if sid in run.entities["sources"]:
                run.entities["sources"][sid]["extract"] = record.get("summary")

    # past.dev recalls: the query is a question, the hits are an observation.
    for line, record in memory_log:
        if record.get("type") != "recall":
            continue
        ts = record.get("ts")
        round_ = round_of_ts(starts, ts)
        native = record.get("agent")
        agent = native if native in run.agents else None
        qid, oid = f"question:recall-{line}", f"observation:recall-{line}"
        hits = [f"memory:{source_id}" for source_id in record.get("source_ids", [])]
        run.put(
            "questions",
            qid,
            {
                "agent_id": run.agent_id(agent),
                "kind": "recall",
                "text": record.get("query"),
                "tick": None,
                "round": round_,
                "answered_by": [oid],
                "attribution": "logged" if agent else "unknown",
            },
        )
        run.put(
            "observations",
            oid,
            {
                "agent_id": run.agent_id(agent),
                "kind": "memories",
                "summary": f"{record.get('n_results', 0)} memories from "
                f"{', '.join(record.get('authors', [])) or 'nobody'}",
                "refs": hits,
                "question_id": qid,
                "tick": None,
                "round": round_,
            },
        )
        common = {
            "round_": round_,
            "phase": "research",
            "ts": ts,
            "agent": agent,
            "file": "memory_log.jsonl",
            "line": line,
            "native_type": "recall",
        }
        run.emit(
            "question.asked",
            **common,
            refs={"question_id": qid},
            payload={
                "kind": "recall",
                "text": record.get("query"),
                "backend": record.get("backend"),
            },
        )
        run.emit(
            "observation.received",
            **common,
            sub=1,
            refs={"observation_id": oid, "question_id": qid},
            payload={
                "kind": "memories",
                "n_results": record.get("n_results"),
                "authors": record.get("authors", []),
                "memory_ids": hits,
            },
        )
        for hit in hits:
            if hit in run.entities["memory"]:
                run.entities["memory"][hit]["recalled_by"].append(run.agent_id(agent))

    # Shared memory writes; claims are hypotheses, lessons are diary entries.
    claims = {}
    phase_for = {
        "lead": "research",
        "claim": "propose",
        "result": "critic",
        "verdict": "critic",
        "lesson": "critic",
        "assignment": "assign",
    }
    for line, item in memory_items:
        meta = item.get("metadata", {})
        label = meta.get("type") or (item.get("label") or "note").split(" by ")[0]
        author = item.get("author")
        agent = author if author in run.agents else ("conductor" if label == "assignment" else None)
        round_ = (
            meta.get("round")
            if isinstance(meta.get("round"), int)
            else round_of_ts(starts, item.get("logged_at") or item.get("timestamp"))
        )
        mid = f"memory:{item.get('sourceId') or item.get('id') or line}"  # recalls report sourceId
        ts = item.get("logged_at") or item.get("timestamp")
        run.put(
            "memory",
            mid,
            {
                "native_id": item.get("id"),
                "author_agent_id": run.agent_id(agent),
                "author": author,
                "type": label,
                "text": item.get("content"),
                "scope": item.get("audience") or "swarm",
                "tick": None,
                "round": round_,
                "metadata": meta,
                "recalled_by": [],
            },
        )
        phase = phase_for.get(label, "critic")
        common = {
            "round_": round_,
            "phase": phase,
            "ts": ts,
            "agent": agent,
            "file": "memory.jsonl",
            "line": line,
            "native_type": label,
        }
        run.emit(
            "memory.written",
            **common,
            refs={"memory_id": mid},
            payload={"type": label, "excerpt": (item.get("content") or "")[:240]},
        )
        if label == "claim":
            hid = f"hypothesis:{meta.get('commit') or line}"
            claims[(author, round_)] = hid
            run.put(
                "hypotheses",
                hid,
                {
                    "agent_id": run.agent_id(agent),
                    "round": round_,
                    "text": meta.get("idea") or item.get("content"),
                    "rationale": meta.get("rationale"),
                    "descriptor": meta.get("descriptor"),
                    "predicted_delta": meta.get("predicted_delta"),
                    "lead_id": meta.get("lead_id") or meta.get("lead"),
                    "source_ids": meta.get("source_ids") or meta.get("sources") or [],
                    "memory_id": mid,
                    "tick": None,
                },
            )
            run.emit(
                "hypothesis.proposed",
                **common,
                sub=1,
                refs={"hypothesis_id": hid, "memory_id": mid},
                payload={"text": run.entities["hypotheses"][hid]["text"]},
            )
        if label in {"claim", "lesson"}:
            did = f"diary:{line}"
            kind = "rationale" if label == "claim" else "critic_lesson"
            run.put(
                "diary",
                did,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": kind,
                    "round": round_,
                    "text": meta.get("rationale") or item.get("content"),
                    "tick": None,
                    "refs": [mid],
                },
            )
            run.emit(
                "diary.written",
                **common,
                sub=2,
                refs={"diary_id": did},
                payload={"kind": kind, "excerpt": (run.entities["diary"][did]["text"] or "")[:240]},
            )

    # LLM calls: metadata only in events; prompts live in the entity.
    for line, record in llm_log:
        role = (record.get("role") or "").upper()
        native = record.get("agent")
        agent = native if native in run.agents else ("critic" if role == "CRITIC" else None)
        phase = (
            "research" if role.startswith("SCOUT") else "critic" if role == "CRITIC" else "propose"
        )
        ts = record.get("ts")
        round_ = (
            record.get("round") if isinstance(record.get("round"), int) else round_of_ts(starts, ts)
        )
        cid = f"llm_call:{line}"
        usage = record.get("usage") or {}
        reasoning = [
            attempt.get("reasoning")
            for attempt in record.get("attempts", [])
            if attempt.get("reasoning")
        ]
        run.put(
            "llm_calls",
            cid,
            {
                "agent_id": run.agent_id(agent),
                "role": role,
                "model": record.get("model"),
                "prompt_sha": record.get("prompt_sha"),
                "prompt": record.get("prompt"),
                "response": record.get("response"),
                "reasoning": record.get("reasoning") or ("\n\n".join(reasoning) or None),
                "usage": usage,
                "latency_ms": record.get("latency_ms"),
                "round": round_,
                "tick": None,
            },
        )
        run.emit(
            "llm.called",
            round_=round_,
            phase=phase,
            ts=ts,
            agent=agent,
            file="llm_log.jsonl",
            line=line,
            native_type=role,
            refs={"llm_call_id": cid},
            payload={
                "role": role,
                "model": record.get("model"),
                "prompt_sha": record.get("prompt_sha"),
                "tokens": usage.get("total_tokens"),
                "latency_ms": record.get("latency_ms"),
            },
        )

    # Ledger: experiments, rewards, verdicts, discoveries.
    critic_why = {(row.get("round"), row.get("commit")): row for row in critic_rows}
    best = None
    confirmed = None
    experiments_by_commit = {}
    for line, row in sorted(ledger, key=lambda item: item[1].get("seq", item[0])):
        kind = row.get("kind")
        round_ = row.get("round") or 0
        commit = row.get("commit")
        if kind in {"candidate", "baseline"}:
            agent = row.get("agent") if row.get("agent") in run.agents else "baseline"
            eid = f"experiment:{commit or 'seq-' + str(row.get('seq'))}"
            experiments_by_commit[commit] = eid
            metric = number(row.get("score"))
            ledger_status = row.get("status")
            status = "discard" if ledger_status == "duplicate" else ledger_status
            gate_reasons = list(row.get("gate_reasons") or [])
            if ledger_status == "duplicate" and not any(
                "duplicate" in reason.lower() for reason in gate_reasons
            ):
                gate_reasons.append(
                    f"duplicate: duplicate of {row.get('duplicate_of') or 'unknown'}"
                )
            started = row.get("ts") or gate_ts.get(commit)
            finished_ts = row.get("ts")
            if not finished_ts and started:
                index = bisect.bisect_right(status_ts, started)
                finished_ts = status_ts[index] if index < len(status_ts) else None
            reference = best
            value = reward_for(metric, reference, status) if kind == "candidate" else 0.0
            rid = f"reward:{row.get('seq')}"
            hid = claims.get((row.get("agent"), round_))
            run.put(
                "rewards",
                rid,
                {
                    "agent_id": run.agent_id(agent),
                    "experiment_id": eid,
                    "value": value,
                    "metric_value": metric,
                    "reference": reference,
                    "status": status,
                    "round": round_,
                    "tick": None,
                },
            )
            run.put(
                "experiments",
                eid,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": kind,
                    "round": round_,
                    "seq": row.get("seq"),
                    "commit": commit,
                    "parent_commit": None,
                    "description": row.get("description"),
                    "descriptor": row.get("descriptor"),
                    "role": row.get("role"),
                    "regime_label": row.get("regime_label"),
                    "status": status,
                    "metric_value": metric,
                    "replicate_score": row.get("replicate_score"),
                    "predicted_delta": row.get("predicted_delta"),
                    "lead": row.get("lead"),
                    "source_ids": [f"source:{s}" for s in row.get("sources") or []],
                    "hypothesis_id": hid,
                    "gate": {
                        "reasons": gate_reasons,
                        "attempts": len(row.get("gate_attempts") or []),
                    },
                    "verdict": None,
                    "reward_id": rid,
                    "artifacts": {"log": f"runs/{commit}.log"} if commit else {},
                    "start_tick": None,
                    "end_tick": None,
                    "tick": None,
                },
            )
            for source in row.get("sources") or []:
                if f"source:{source}" in run.entities["sources"]:
                    run.entities["sources"][f"source:{source}"]["cited_by"].append(eid)
            common = {
                "round_": round_,
                "phase": "evaluate",
                "agent": agent,
                "file": "ledger.jsonl",
                "line": line,
                "native_type": kind,
            }
            run.emit(
                "experiment.started",
                **common,
                ts=started,
                refs={"experiment_id": eid, **({"hypothesis_id": hid} if hid else {})},
                payload={"description": row.get("description"), "role": row.get("role")},
            )
            run.emit(
                "experiment.finished",
                **common,
                ts=finished_ts,
                sub=1,
                refs={"experiment_id": eid, "reward_id": rid},
                payload={"status": status, "metric_value": metric, "reward": value},
            )
            if status == "keep" and metric is not None and (best is None or metric < best):
                best = metric
            if kind == "baseline" and metric is not None:
                confirmed = {"metric_value": metric, "experiment_id": eid, "agent": "baseline"}
        elif kind == "critic":
            eid = experiments_by_commit.get(commit, f"experiment:{commit}")
            accepted = bool(row.get("accepted"))
            info = critic_why.get((str(round_), commit), {})
            verdict = {
                "verdict": row.get("verdict"),
                "accepted": accepted,
                "replicate_score": row.get("replicate_score"),
                "why": info.get("why"),
            }
            if eid in run.entities["experiments"]:
                run.entities["experiments"][eid]["verdict"] = verdict
            common = {
                "round_": round_,
                "phase": "critic",
                "ts": row.get("ts"),
                "agent": "critic",
                "file": "ledger.jsonl",
                "line": line,
                "native_type": "critic",
            }
            run.emit("verdict.issued", **common, refs={"experiment_id": eid}, payload=verdict)
            experiment = run.entities["experiments"].get(eid)
            metric = experiment and experiment["metric_value"]
            second = number(row.get("score"))
            if metric is not None and second is not None:
                metric = (metric + second) / 2  # swarm.py confirms best on the two-seed mean
            if (
                accepted
                and metric is not None
                and (confirmed is None or metric < confirmed["metric_value"])
            ):
                previous = confirmed["metric_value"] if confirmed else None
                xid = f"discovery:{commit}"
                run.put(
                    "discoveries",
                    xid,
                    {
                        "agent_id": experiment["agent_id"],
                        "experiment_id": eid,
                        "round": round_,
                        "metric_value": metric,
                        "previous_best": previous,
                        "improvement": None if previous is None else round(previous - metric, 6),
                        "lineage": {
                            "hypothesis_id": experiment["hypothesis_id"],
                            "lead": experiment["lead"],
                            "source_ids": experiment["source_ids"],
                        },
                        "title": experiment["description"],
                        "tick": None,
                    },
                )
                run.emit(
                    "discovery.made",
                    **common,
                    sub=1,
                    refs={"discovery_id": xid, "experiment_id": eid},
                    payload={
                        "metric_value": metric,
                        "previous_best": previous,
                        "title": experiment["description"],
                    },
                )
                confirmed = {
                    "metric_value": metric,
                    "experiment_id": eid,
                    "agent": next(
                        n for n, a in run.agents.items() if a["agent_id"] == experiment["agent_id"]
                    ),
                }

    last_round = max([r for _, r in starts] + [0])
    final_status = status or run_artifact.get("status", "finished")
    final_status = final_status if final_status in {"finished", "stopped"} else "finished"
    if final:
        run.emit(
            "run.finished",
            round_=last_round,
            phase="finish",
            ts=all_ts[-1] if all_ts else None,
            agent="conductor",
            file="~end",
            line=0,
            native_type="run",
            payload={
                "status": final_status,
                "best_metric": confirmed and confirmed["metric_value"],
            },
        )
    baseline = next(
        (number(r.get("score")) for _, r in ledger if r.get("kind") == "baseline"), None
    )
    manifest_extra = {
        "title": title or f"autoresearch · {out_dir.name}",
        "arm": {
            "id": arm,
            "label": "boredom meter on" if arm == "B" else "meter shadow only",
            "boredom_enabled": arm != "A",
            "policy": "boredom_meter",
        },
        "metric": {"name": "loss", "unit": "", "direction": "minimize"},
        "boredom": {
            "scale": [0, 1],
            "thresholds": {
                **profile["thresholds"],
                "eps": profile["eps"],
                "accept_margin": profile.get("accept_margin", 0.0),
            },
            "regimes": ["EXPLOIT", "BOREDOM_SNAP", "PARADIGM_BREAKOUT", "CONVERGED"],
        },
        "provenance": {
            "llm": next((r.get("model") for _, r in llm_log if r.get("model")), "unknown"),
            "exa": "live" if any(not r.get("disabled") for _, r in research) else "off",
            "memory_backend": next((r.get("backend") for _, r in memory_log), "unknown"),
            "command": run_artifact.get("command", ""),
            "swarm_commit": run_artifact.get("swarm_commit", ""),
            "native_run_id": native_run,
        },
        "baseline": baseline,
        "profile": profile,
        "status": final_status if final else "running",
        "live": not final,
        "converged": bool(run_artifact.get("converged", False)),
    }
    if (
        not final
        and frontier is not None
        and run_artifact.get("status") not in {"finished", "stopped"}
    ):
        boundary = (frontier["round"], run.phase_rank[frontier["phase"]])

        # Worker logs are stamped at append, not before network calls. The shared
        # writer lock drains older writes before the two-second watermark is read.
        # Gate/ledger events still wait for final outcomes and references.
        def stable(event):
            if event["round"] == frontier["round"] and frontier["phase"] in {"assign", "research"}:
                if event["phase"] in {"research", "propose"}:
                    return bool(event["ts"]) and event["ts"] < watermark
                return event["phase"] == "assign"
            return event["key"][:2] <= boundary

        run.raw = [event for event in run.raw if stable(event)]
        run.live_round = (
            frontier["round"] if frontier["phase"] != "finish" else frontier["round"] + 1
        )
    return run, manifest_extra


# ---------------------------------------------------------------- ignobel


def export_ignobel(out_dir, title=None):
    out_dir = Path(out_dir)
    rows = read_jsonl(out_dir / "events.jsonl")
    if not rows:
        raise SystemExit(f"no events.jsonl in {out_dir}")
    first = rows[0][1]
    arm, seed = first.get("arm", "full"), first.get("seed", 0)
    run_id = uid(NS_CAFFEINATED, f"ignobel:{arm}:{out_dir.name}:{seed}")
    run = Run("ignobel", run_id)
    statisticians = {
        r["payload"].get("requester") for _, r in rows if r.get("type") == "measurement_request"
    }
    names = (
        {r["agent"] for _, r in rows if r.get("agent")}
        | statisticians
        | {
            r["payload"].get(key)
            for _, r in rows
            for key in ("partner", "receiver")
            if r.get("type") in {"talk", "share"}
        }
    )
    for name in sorted(n for n in names if isinstance(n, str) and n and n != "world"):
        run.agent(name, "statistician" if name in statisticians else "researcher", name.title())
    run.agent("world", "world", "World")
    phase_for = {
        "seed": "seed",
        "boredom": "boredom",
        "talk": "talk",
        "share": "share",
        "snap": "snap",
        "idea": "propose",
        "prediction": "propose",
        "measurement_request": "study",
        "study_result": "study",
        "lesson": "diary",
    }
    best = {}
    for line, event in rows:
        kind, agent, round_ = event.get("type"), event.get("agent"), event.get("round", 0)
        agent = agent if agent in run.agents else "world"
        payload = event.get("payload") or {}
        common = {
            "round_": round_,
            "phase": phase_for.get(kind, "diary"),
            "ts": None,
            "agent": agent,
            "file": "events.jsonl",
            "line": line,
            "native_type": kind,
        }
        if kind in {"seed", "snap"}:
            qid, oid = f"question:{line}", f"observation:{line}"
            urls = payload.get("source_urls") or payload.get("urls") or []
            sources = []
            for url in urls:
                sid = f"source:{url}"
                sources.append(sid)
                run.entities["sources"].setdefault(
                    sid, {"id": sid, "title": url, "url": url, "query_id": qid, "cited_by": []}
                )
            text = payload.get("query") or payload.get("text") or payload.get("topic") or kind
            run.put(
                "questions",
                qid,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": "search",
                    "text": text,
                    "round": round_,
                    "tick": None,
                    "answered_by": [oid],
                },
            )
            run.put(
                "observations",
                oid,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": "snap" if kind == "snap" else "sources",
                    "summary": text,
                    "refs": sources,
                    "question_id": qid,
                    "round": round_,
                    "tick": None,
                },
            )
            run.emit(
                "question.asked",
                **common,
                refs={"question_id": qid},
                payload={"kind": "search", "text": text},
            )
            run.emit(
                "observation.received",
                **common,
                sub=1,
                refs={"observation_id": oid},
                payload={
                    "kind": "snap" if kind == "snap" else "sources",
                    "summary": text,
                    "partner": payload.get("partner"),
                },
            )
        elif kind == "idea":
            hid = f"hypothesis:{payload.get('idea_id', line)}"
            run.put(
                "hypotheses",
                hid,
                {
                    "agent_id": run.agent_id(agent),
                    "round": round_,
                    "text": payload.get("text"),
                    "kind": payload.get("kind"),
                    "descriptor": payload.get("descriptor"),
                    "source_ids": [f"source:{u}" for u in payload.get("source_urls", [])],
                    "novelty": payload.get("novelty"),
                    "partner": payload.get("partner"),
                    "prediction": None,
                    "tick": None,
                },
            )
            run.emit(
                "hypothesis.proposed",
                **common,
                refs={"hypothesis_id": hid},
                payload={"text": payload.get("text"), "kind": payload.get("kind")},
            )
        elif kind == "prediction":
            hid = f"hypothesis:{payload.get('idea_id')}"
            if hid in run.entities["hypotheses"]:
                run.entities["hypotheses"][hid]["prediction"] = {
                    "direction": payload.get("direction"),
                    "effect_size": payload.get("effect_size"),
                }
        elif kind == "boredom":
            components = {
                k: payload[k]
                for k in (
                    "similarity",
                    "self_repeat",
                    "ext_familiar",
                    "unsurprise",
                    "stall",
                    "frustration",
                )
                if k in payload
            }
            run.emit(
                "agent.assigned", **common, payload={"role": payload.get("action"), "scout": False}
            )
            run.emit(
                "boredom.measured",
                **common,
                sub=1,
                payload={
                    "B": payload.get("B"),
                    "regime": payload.get("regime"),
                    "components": components,
                    "shadow": arm != "full",
                },
            )
        elif kind == "talk":
            partner = payload.get("partner")
            run.emit(
                "message.sent",
                **common,
                refs={"to_agent_id": run.agent_id(partner)} if partner in run.agents else {},
                payload={"turn": payload.get("turn"), "text": payload.get("text")},
            )
        elif kind == "share":
            receiver = payload.get("receiver")
            run.emit(
                "items.shared",
                **common,
                refs={"to_agent_id": run.agent_id(receiver)} if receiver in run.agents else {},
                payload={"offered": payload.get("offered"), "kept": payload.get("kept")},
            )
        elif kind == "measurement_request":
            oid = f"observation:{line}"
            run.put(
                "observations",
                oid,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": "measurement",
                    "summary": f"{payload.get('instrument')} n={payload.get('n')}",
                    "refs": [],
                    "round": round_,
                    "tick": None,
                    "requester": payload.get("requester"),
                },
            )
            run.emit(
                "observation.received",
                **common,
                refs={"observation_id": oid},
                payload={
                    "kind": "measurement",
                    "instrument": payload.get("instrument"),
                    "n": payload.get("n"),
                    "budget_left": payload.get("budget_left"),
                },
            )
        elif kind == "study_result":
            eid = f"experiment:{payload.get('study_id', line)}"
            hid = f"hypothesis:{payload.get('idea_id')}"
            stats = payload.get("stats") or {}
            prediction = payload.get("prediction") or {}
            gap = study_gap(prediction, stats.get("effect_size"), stats.get("direction"))
            replicated = bool(payload.get("replicated"))
            status = (
                "failed"
                if not payload.get("ok")
                else ("replicated" if replicated else "not_replicated")
            )
            value = round(1 - gap, 6) if replicated else 0.0
            rid = f"reward:{payload.get('study_id', line)}"
            run.put(
                "rewards",
                rid,
                {
                    "agent_id": run.agent_id(agent),
                    "experiment_id": eid,
                    "value": value,
                    "metric_value": stats.get("p"),
                    "reference": None,
                    "status": status,
                    "gap": gap,
                    "round": round_,
                    "tick": None,
                },
            )
            run.put(
                "experiments",
                eid,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": "study",
                    "round": round_,
                    "status": status,
                    "hypothesis_id": hid if hid in run.entities["hypotheses"] else None,
                    "description": payload.get("title") or payload.get("abstract"),
                    "abstract": payload.get("abstract"),
                    "stats": stats,
                    "prediction": prediction,
                    "novelty": payload.get("novelty"),
                    "metric_value": stats.get("p"),
                    "reward_id": rid,
                    "verdict": None,
                    "artifacts": {"plot": payload["plot_path"]} if payload.get("plot_path") else {},
                    "stderr": payload.get("stderr"),
                    "tick": None,
                },
            )
            run.emit(
                "experiment.started",
                **common,
                refs={"experiment_id": eid},
                payload={"title": payload.get("title")},
            )
            run.emit(
                "experiment.finished",
                **common,
                sub=1,
                refs={"experiment_id": eid, "reward_id": rid},
                payload={
                    "status": status,
                    "p": stats.get("p"),
                    "effect_size": stats.get("effect_size"),
                    "reward": value,
                },
            )
            if replicated and value > best.get(agent, -1):
                best[agent] = value
                xid = f"discovery:{payload.get('study_id', line)}"
                run.put(
                    "discoveries",
                    xid,
                    {
                        "agent_id": run.agent_id(agent),
                        "experiment_id": eid,
                        "round": round_,
                        "metric_value": value,
                        "title": payload.get("title"),
                        "lineage": {"hypothesis_id": hid},
                        "tick": None,
                    },
                )
                run.emit(
                    "discovery.made",
                    **common,
                    sub=2,
                    refs={"discovery_id": xid, "experiment_id": eid},
                    payload={"title": payload.get("title"), "reward": value},
                )
        elif kind == "lesson":
            did = f"diary:{line}"
            run.put(
                "diary",
                did,
                {
                    "agent_id": run.agent_id(agent),
                    "kind": "lesson",
                    "round": round_,
                    "text": payload.get("text"),
                    "refs": [],
                    "tick": None,
                },
            )
            run.emit(
                "diary.written",
                **common,
                refs={"diary_id": did},
                payload={"kind": "lesson", "excerpt": (payload.get("text") or "")[:240]},
            )
    manifest_extra = {
        "title": title or f"ignobel · {arm} · seed {seed}",
        "arm": {"id": arm, "label": arm, "boredom_enabled": arm == "full", "policy": arm},
        "metric": {"name": "replicated_findings", "unit": "", "direction": "maximize"},
        "boredom": {
            "scale": [0, 1],
            "thresholds": {},
            "regimes": ["EXPLOIT", "BOREDOM_SNAP", "PARADIGM_BREAKOUT", "FRUSTRATED", "CONVERGED"],
        },
        "provenance": {
            "llm": "see prompts/",
            "exa": "see events",
            "memory_backend": "ignobel memory",
            "command": "",
            "swarm_commit": "",
        },
        "baseline": None,
    }
    return run, manifest_extra


def study_gap(prediction, effect, direction):
    """Same as ignobel.boredom.gap: 0 = prediction exact, 1 = wrong direction."""
    if effect is None or direction is None or direction != prediction.get("direction"):
        return 1.0
    p, a = abs(prediction.get("effect_size") or 0), abs(effect)
    return 0.0 if p + a == 0 else float(min(abs(p - a) / (p + a), 1.0))


# ---------------------------------------------------------------- reducer


def initial_world(run, manifest):
    agents = {}
    for identity in run.agents.values():
        agents[identity["agent_id"]] = {
            "agent_id": identity["agent_id"],
            "type": identity["type"],
            "role": None,
            "scout": False,
            "activity": "idle",
            "station": "home",
            "since_tick": 0,
            "boredom": None,
            "focus": {},
            "last_observation_id": None,
            "last_question_id": None,
            "last_reward": None,
            "diary_head": None,
            "counters": {
                "experiments": 0,
                "keeps": 0,
                "questions": 0,
                "observations": 0,
                "memory_writes": 0,
                "tokens": 0,
            },
        }
    return {
        "run_id": run.run_id,
        "tick": -1,
        "round": 0,
        "phase": None,
        "ts": None,
        "swarm": {
            "B": None,
            "regime": None,
            "frontier_stall": None,
            "best": None,
            "baseline": manifest.get("baseline"),
        },
        "agents": agents,
        "in_flight": {"experiment_ids": [], "conversations": []},
        "totals": {
            "experiments": 0,
            "discoveries": 0,
            "questions": 0,
            "sources": 0,
            "memory_items": 0,
            "tokens": 0,
        },
        "discovery_ids": [],
        "recent_events": [],
    }


def apply(world, event, entities):
    world.update(tick=event["tick"], round=event["round"], phase=event["phase"])
    if event["ts"]:
        world["ts"] = event["ts"]
    world["recent_events"] = (world["recent_events"] + [event])[-RECENT_EVENTS:]
    kind, refs, payload = event["type"], event["refs"], event["payload"]
    agent = world["agents"].get(event["agent_id"])
    if kind == "round.started":
        world["swarm"]["regime"] = payload.get("regime") or world["swarm"]["regime"]
        if payload.get("swarm_B") is not None:
            world["swarm"]["B"] = payload["swarm_B"]
        for state in world["agents"].values():
            state["activity"], state["station"], state["since_tick"] = "idle", "home", event["tick"]
        world["in_flight"]["conversations"] = []
    elif kind == "boredom.measured" and payload.get("scope") == "swarm":
        world["swarm"].update(
            B=payload.get("B"),
            regime=payload.get("regime"),
            frontier_stall=payload.get("frontier_stall"),
        )
    elif kind == "question.asked":
        world["totals"]["questions"] += 1
    elif kind == "observation.received" and payload.get("kind") == "sources":
        world["totals"]["sources"] += 1
    elif kind == "memory.written":
        world["totals"]["memory_items"] += 1
    elif kind == "llm.called":
        world["totals"]["tokens"] += payload.get("tokens") or 0
    elif kind == "experiment.started":
        world["totals"]["experiments"] += 1
        world["in_flight"]["experiment_ids"].append(refs["experiment_id"])
    elif kind == "experiment.finished":
        flight = world["in_flight"]["experiment_ids"]
        if refs["experiment_id"] in flight:
            flight.remove(refs["experiment_id"])
    elif kind == "discovery.made":
        world["totals"]["discoveries"] += 1
        world["discovery_ids"].append(refs["discovery_id"])
        discovery = entities["discoveries"][refs["discovery_id"]]
        world["swarm"]["best"] = {
            "metric_value": discovery["metric_value"],
            "experiment_id": discovery["experiment_id"],
            "agent_id": discovery["agent_id"],
            "tick": event["tick"],
        }
    elif kind == "message.sent" and event["agent_id"] and refs.get("to_agent_id"):
        world["in_flight"]["conversations"].append([event["agent_id"], refs["to_agent_id"]])
    if agent is None:
        return world
    activity = EVENT_ACTIVITY.get(kind)
    if kind == "question.asked" and payload.get("kind") == "recall":
        activity = "recalling"
    if kind == "observation.received" and payload.get("kind") == "snap":
        activity = "snapping"
    if activity and activity != agent["activity"]:
        agent.update(activity=activity, station=STATIONS[activity], since_tick=event["tick"])
    counters = agent["counters"]
    if kind == "agent.assigned":
        agent["role"], agent["scout"] = payload.get("role"), bool(payload.get("scout"))
    elif kind == "boredom.measured":
        agent["boredom"] = {
            "B": payload.get("B"),
            "regime": payload.get("regime"),
            "components": payload.get("components", {}),
            "shadow": bool(payload.get("shadow")),
            "measured_tick": event["tick"],
        }
    elif kind == "question.asked":
        agent["last_question_id"] = refs.get("question_id")
        agent["focus"]["question_id"] = refs.get("question_id")
        counters["questions"] += 1
    elif kind == "observation.received":
        agent["last_observation_id"] = refs.get("observation_id")
        counters["observations"] += 1
    elif kind == "hypothesis.proposed":
        agent["focus"]["hypothesis_id"] = refs["hypothesis_id"]
    elif kind == "experiment.started":
        agent["focus"]["experiment_id"] = refs["experiment_id"]
        counters["experiments"] += 1
    elif kind == "experiment.finished":
        reward = entities["rewards"].get(refs.get("reward_id"))
        if reward:
            agent["last_reward"] = {
                "reward_id": reward["id"],
                "value": reward["value"],
                "status": reward["status"],
                "metric_value": reward["metric_value"],
                "experiment_id": reward["experiment_id"],
                "tick": event["tick"],
            }
            if reward["status"] in {"keep", "replicated"}:
                counters["keeps"] += 1
    elif kind == "diary.written":
        agent["diary_head"] = {"diary_id": refs["diary_id"], "excerpt": payload.get("excerpt", "")}
    elif kind == "memory.written":
        counters["memory_writes"] += 1
    elif kind == "llm.called":
        counters["tokens"] += payload.get("tokens") or 0
    elif kind == "message.sent" and refs.get("to_agent_id"):
        agent["focus"]["partner_agent_id"] = refs["to_agent_id"]
    return world


def snapshot(world):
    result = json.loads(json.dumps({**world, "agents": list(world["agents"].values())}))
    for agent in result["agents"]:
        if agent["activity"] == "evaluating":
            agent["activity"] = "training"
    return result


# ---------------------------------------------------------------- output


def build(run, extra):
    events = run.finalize()
    for event in events:
        for ref_key in ("experiment_id",):
            entity = run.entities["experiments"].get(event["refs"].get(ref_key))
            if entity is None:
                continue
            if event["type"] == "experiment.started":
                entity["start_tick"] = event["tick"]
            elif event["type"] == "experiment.finished":
                entity["end_tick"] = event["tick"]
    ts_values = [event["ts"] for event in events if event["ts"]]
    manifest = {
        "schema": SCHEMA,
        "run_id": run.run_id,
        "swarm": run.swarm,
        "title": extra["title"],
        "status": extra.get("status", "finished"),
        "live": extra.get("live", False),
        "converged": bool(extra.get("converged", False)),
        "arm": extra["arm"],
        "metric": extra["metric"],
        "boredom": extra["boredom"],
        "time": {
            "ticks": len(events),
            "rounds": max((e["round"] for e in events), default=0),
            "ts_start": min(ts_values) if ts_values else None,
            "ts_end": max(ts_values) if ts_values else None,
        },
        "agents": list(run.agents.values()),
        "provenance": {**extra["provenance"], "artifacts": {}},
    }
    world = initial_world(run, extra)
    keyframes, rounds, markers = {}, [], []
    series = {
        "swarm_B": [],
        "best": [],
        "agent_B": {a["agent_id"]: [] for a in run.agents.values()},
    }
    last_keyframe = -KEYFRAME_EVERY
    for index, event in enumerate(events):
        if not rounds or rounds[-1]["round"] != event["round"]:
            rounds.append(
                {
                    "round": event["round"],
                    "tick_start": event["tick"],
                    "tick_end": event["tick"],
                    "ts_start": event["ts"],
                    "regime": None,
                }
            )
        rounds[-1]["tick_end"] = event["tick"]
        before_regime = world["swarm"]["regime"]
        apply(world, event, run.entities)
        if event["type"] == "round.started":
            rounds[-1]["regime"] = event["payload"].get("regime")
        if world["swarm"]["regime"] != before_regime and before_regime is not None:
            markers.append(
                {
                    "tick": event["tick"],
                    "kind": "regime_change",
                    "label": f"{before_regime} → {world['swarm']['regime']}",
                }
            )
        if event["type"] == "discovery.made":
            markers.append(
                {
                    "tick": event["tick"],
                    "kind": "discovery",
                    "ref": event["refs"]["discovery_id"],
                    "label": event["payload"].get("title"),
                }
            )
        if event["type"] == "experiment.finished" and event["payload"].get("status") in {
            "crash",
            "failed",
        }:
            markers.append(
                {"tick": event["tick"], "kind": "crash", "ref": event["refs"]["experiment_id"]}
            )
        if event["type"] == "verdict.issued":
            markers.append(
                {
                    "tick": event["tick"],
                    "kind": "verdict",
                    "ref": event["refs"]["experiment_id"],
                    "label": event["payload"].get("verdict"),
                }
            )
        if event["type"] == "boredom.measured":
            if event["payload"].get("scope") == "swarm" or (event["agent_id"] is None):
                series["swarm_B"].append([event["tick"], event["payload"].get("B")])
            else:
                series["agent_B"][event["agent_id"]].append(
                    [event["tick"], event["payload"].get("B")]
                )
        if event["type"] == "round.started" and event["payload"].get("swarm_B") is not None:
            series["swarm_B"].append([event["tick"], event["payload"]["swarm_B"]])
        if event["type"] == "discovery.made":
            series["best"].append([event["tick"], event["payload"].get("metric_value")])
        next_event = events[index + 1] if index + 1 < len(events) else None
        round_end = event["type"] != "run.finished" and (
            next_event is None
            or next_event["round"] != event["round"]
            or next_event["type"] == "run.finished"
        )
        if event["round"] >= getattr(run, "live_round", float("inf")):
            round_end = False
        if round_end or event["tick"] - last_keyframe >= KEYFRAME_EVERY:
            keyframes[event["tick"]] = snapshot(world)
            last_keyframe = event["tick"]
    timeline = {
        "run_id": run.run_id,
        "ticks": len(events),
        "rounds": rounds,
        "markers": markers,
        "series": series,
        "keyframes": sorted(keyframes),
    }
    return manifest, timeline, events, keyframes


def world_at(events, run_manifest, entities, tick, keyframes=None):
    """Seek: nearest keyframe at or before tick, then replay events."""
    keyframes = keyframes or {}
    base = max((k for k in keyframes if k <= tick), default=None)
    if base is None:
        run = SimpleNamespace(
            run_id=run_manifest["run_id"],
            agents={a["native_id"]: a for a in run_manifest["agents"]},
        )
        world = initial_world(run, {"baseline": run_manifest.get("baseline")})
        start = 0
    else:
        frame = json.loads(json.dumps(keyframes[base]))
        world = {**frame, "agents": {a["agent_id"]: a for a in frame["agents"]}}
        start = base + 1
    for event in events[start : tick + 1]:
        apply(world, event, entities)
    return snapshot(world)


def write(dest, manifest, timeline, events, keyframes, entities):
    run_dir = Path(dest) / manifest["run_id"]
    (run_dir / "keyframes").mkdir(parents=True, exist_ok=True)
    (run_dir / "entities").mkdir(parents=True, exist_ok=True)

    def dump(path, value):
        path.write_text(
            json.dumps(value, indent=1, sort_keys=True, ensure_ascii=False) + "\n", encoding="utf-8"
        )

    dump(run_dir / "manifest.json", manifest)
    dump(run_dir / "timeline.json", timeline)
    with (run_dir / "events.ndjson").open("w", encoding="utf-8") as stream:
        for event in events:
            stream.write(json.dumps(event, sort_keys=True, ensure_ascii=False) + "\n")
    for tick, frame in keyframes.items():
        dump(run_dir / "keyframes" / f"{tick}.json", frame)
    for kind, table in entities.items():
        dump(run_dir / "entities" / f"{kind}.json", [table[key] for key in sorted(table)])
    index_path = Path(dest) / "index.json"
    index = (
        json.loads(index_path.read_text())
        if index_path.exists()
        else {"schema": SCHEMA, "runs": []}
    )
    summary = {
        key: manifest[key] for key in ("run_id", "swarm", "title", "status", "live", "arm", "time")
    }
    summary["agents"] = len(manifest["agents"])
    summary["discoveries"] = len(entities["discoveries"])
    index["runs"] = sorted(
        [r for r in index["runs"] if r["run_id"] != manifest["run_id"]] + [summary],
        key=lambda r: r["title"],
    )
    dump(index_path, index)
    return run_dir


def _copy_artifacts(out_dir, run_dir, entities):
    source_root = Path(out_dir).resolve()
    for entity in entities["experiments"].values():
        for relative in (entity.get("artifacts") or {}).values():
            relative = Path(str(relative))
            if relative.is_absolute() or ".." in relative.parts:
                continue
            source = (source_root / relative).resolve()
            if source_root not in source.parents or not source.is_file():
                continue
            target = run_dir / "artifacts" / relative
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(source, target)


def export(out_dir, dest, swarm=None, arm=None, title=None, final=True, status=None):
    out_dir = Path(out_dir)
    swarm = swarm or ("ignobel" if (out_dir / "events.jsonl").exists() else "autoresearch")
    if swarm == "ignobel":
        run, extra = export_ignobel(out_dir, title)
    else:
        run, extra = export_autoresearch(out_dir, arm, title, final, status)
    manifest, timeline, events, keyframes = build(run, extra)
    run_dir = write(dest, manifest, timeline, events, keyframes, run.entities)
    _copy_artifacts(out_dir, run_dir, run.entities)
    return run_dir


class PublishConflict(RuntimeError):
    pass


def _atomic_write(path, data):
    path = Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    temp_path = None
    try:
        with tempfile.NamedTemporaryFile(
            dir=path.parent, prefix=f".{path.name}.", delete=False
        ) as stream:
            temp_path = Path(stream.name)
            stream.write(data)
            stream.flush()
            os.fsync(stream.fileno())
        os.replace(temp_path, path)
    finally:
        if temp_path is not None and temp_path.exists():
            temp_path.unlink()


def publish(out_dir, dest, *, final=False, status=None):
    out_dir, dest = Path(out_dir), Path(dest)
    final_status = status if status in {"finished", "stopped"} else "finished"
    with tempfile.TemporaryDirectory(prefix="swarm-viewer-export-") as temp:
        fresh_root = Path(temp) / "export"
        fresh_dir = export(out_dir, fresh_root, final=final, status=final_status)
        run_id = fresh_dir.name
        target = dest / run_id
        fresh_events = (fresh_dir / "events.ndjson").read_bytes()
        current_path = target / "events.ndjson"
        current_events = current_path.read_bytes() if current_path.exists() else b""
        if not fresh_events.startswith(current_events):
            raise PublishConflict(f"published events are not a prefix for run {run_id}")

        fresh_keyframes = fresh_dir / "keyframes"
        keyframe_writes = []
        if (target / "keyframes").exists():
            for current in (target / "keyframes").glob("*.json"):
                replacement = fresh_keyframes / current.name
                if not replacement.exists() or current.read_bytes() != replacement.read_bytes():
                    raise PublishConflict(f"published keyframe changed: {current.name}")
        for frame in fresh_keyframes.glob("*.json"):
            current = target / "keyframes" / frame.name
            if not current.exists():
                keyframe_writes.append((current, frame.read_bytes()))

        index_path = dest / "index.json"
        if index_path.exists():
            index = json.loads(index_path.read_text(encoding="utf-8"))
        else:
            index = {"schema": SCHEMA, "runs": []}
        fresh_index = json.loads((fresh_root / "index.json").read_text(encoding="utf-8"))
        summary = next(item for item in fresh_index["runs"] if item["run_id"] == run_id)
        index["runs"] = sorted(
            [item for item in index.get("runs", []) if item.get("run_id") != run_id] + [summary],
            key=lambda item: item["title"],
        )
        index_data = (
            json.dumps(index, indent=1, sort_keys=True, ensure_ascii=False) + "\n"
        ).encode()

        target.mkdir(parents=True, exist_ok=True)
        with current_path.open("ab") as stream:
            stream.write(fresh_events[len(current_events) :])
            stream.flush()
            os.fsync(stream.fileno())
        for path, data in keyframe_writes:
            _atomic_write(path, data)
        for source in (fresh_dir / "entities").glob("*.json"):
            _atomic_write(target / "entities" / source.name, source.read_bytes())
        for source in (
            (fresh_dir / "artifacts").rglob("*") if (fresh_dir / "artifacts").exists() else ()
        ):
            if source.is_file():
                _atomic_write(
                    target / "artifacts" / source.relative_to(fresh_dir / "artifacts"),
                    source.read_bytes(),
                )
        for name in ("manifest.json", "timeline.json"):
            _atomic_write(target / name, (fresh_dir / name).read_bytes())
        _atomic_write(index_path, index_data)
        return target


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("run_dirs", nargs="+", type=Path, help="swarm --out dir or ignobel run dir")
    parser.add_argument("--dest", type=Path, default=Path("lab/data/runs"))
    parser.add_argument("--swarm", choices=("autoresearch", "ignobel"))
    parser.add_argument("--arm", help="autoresearch arm label (default: from memory.jsonl, else B)")
    parser.add_argument("--title")
    args = parser.parse_args(argv)
    for run_dir in args.run_dirs:
        path = export(run_dir, args.dest, args.swarm, args.arm, args.title)
        print(path)


if __name__ == "__main__":
    main()
