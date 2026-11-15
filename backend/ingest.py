"""Translate native autoresearch artifacts without inventing research results."""

import json
import math
from pathlib import Path


def number(value):
    try:
        value = float(value)
    except (ValueError, TypeError):
        return None
    return value if math.isfinite(value) else None


def agent(agent_id, role, state="idle", boredom=0):
    station = (
        "notebook"
        if agent_id == "conductor"
        else "analyzer"
        if agent_id == "critic"
        else "explorer"
        if role in {"divergent", "scout"}
        else "culture"
    )
    return {
        "id": agent_id,
        "name": agent_id.replace("-", " ").title(),
        "role": role,
        "state": state,
        "stationId": station,
        "boredom": min(100, max(0, boredom)),
    }


def records(path):
    if not path.is_file():
        return []
    out = []
    # Ignore an incomplete trailing write until the next poll.
    lines = path.read_text(encoding="utf-8", errors="replace").splitlines(keepends=True)
    for i, line in enumerate(lines):
        if not line.endswith("\n"):
            continue
        try:
            out.append((i, json.loads(line)))
        except json.JSONDecodeError:
            continue
    return out


def ingest(store, run_id, directory, redact=lambda s: s):
    root = Path(directory)
    for filename in [
        "runtime.jsonl",
        "assignments.jsonl",
        "boredom_log.jsonl",
        "ledger.jsonl",
        "llm_log.jsonl",
        "memory.jsonl",
        "research_log.jsonl",
    ]:
        for index, record in records(root / filename):
            events = []
            if filename == "runtime.jsonl":
                kind = record.get("type")
                payload = record.get("payload", {})
                if kind in {"agent.updated", "finding.written"}:
                    events.append((kind, payload))
            elif filename == "assignments.jsonl":
                b = (number(record.get("swarm_B")) or 0) * 100
                events.append(
                    (
                        "round.assigned",
                        {"round": record["round"], "boredom": b, "regime": record["regime"]},
                    )
                )
                for worker, role in record.get("roles", {}).items():
                    events.append(
                        (
                            "agent.updated",
                            agent(
                                worker,
                                role,
                                "working",
                                (number(record.get("per_agent_B", {}).get(worker)) or 0) * 100,
                            ),
                        )
                    )
                events.append(
                    (
                        "finding.written",
                        {
                            "agent": "conductor",
                            "role": "Conductor",
                            "message": record.get("rationale", ""),
                            "round": record["round"],
                        },
                    )
                )
            elif filename == "boredom_log.jsonl" and record.get("type", "status") == "status":
                events.append(
                    (
                        "meter.updated",
                        {
                            "boredom": (number(record.get("B")) or 0) * 100,
                            "regime": record.get("regime", "EXPLOIT"),
                        },
                    )
                )
            elif filename == "ledger.jsonl":
                events.append(
                    (
                        "experiment.result",
                        {
                            "agent": record.get("agent", "conductor"),
                            "round": record.get("round", 0),
                            "kind": record.get("kind", "candidate"),
                            "status": record.get("status", "unknown"),
                            "value": number(record.get("score")),
                            "commit": record.get("commit"),
                            "description": record.get("description", ""),
                            "sources": record.get("sources", []),
                        },
                    )
                )
            elif filename == "llm_log.jsonl":
                response = record.get("response") or {}
                if isinstance(response, dict):
                    text = response.get("idea") or response.get("why") or response.get("recipe")
                    if text:
                        events.append(
                            (
                                "finding.written",
                                {
                                    "agent": record.get("agent", ""),
                                    "role": record.get("role", "Researcher"),
                                    "message": str(text)[:2500],
                                    "round": record.get("round", 0),
                                },
                            )
                        )
            elif filename == "memory.jsonl":
                # Retain shared memory authorship and its native identifier.
                text = record.get("content")
                if text:
                    events.append(
                        (
                            "finding.written",
                            {
                                "agent": record.get("author", ""),
                                "role": "Memory",
                                "message": str(text)[:3000],
                                "memoryId": str(record.get("id", "")),
                            },
                        )
                    )
            elif filename == "research_log.jsonl" and record.get("type") == "source":
                events.append(
                    ("source.found", {k: record.get(k) for k in ["id", "title", "url", "query_id"]})
                )
            for n, (kind, payload) in enumerate(events):
                safe = json.loads(redact(json.dumps(payload)))
                store.append(run_id, f"{filename}:{index}:{n}", kind, safe)

    # Use the upstream meter for each agent; color is presentation metadata only.
    ledger = root / "ledger.jsonl"
    config = store.get(run_id)["config"]
    workspace = root.parent / "workspace"
    profile_path = (
        workspace / "testcases" / config["task"] / "boredom_profile.json"
        if config["mode"] == "tinker_cpu"
        else workspace / "boredom_meter" / "profiles" / "autoresearch_llm.json"
    )
    if ledger.is_file() and profile_path.is_file():
        import hashlib

        from boredom import descriptor_meter as meter

        profile = meter.load_profile(profile_path)
        native = sorted((record for _, record in records(ledger)), key=lambda record: record["seq"])
        digest = hashlib.sha256(json.dumps(native, sort_keys=True).encode()).hexdigest()
        for a in store.get(run_id)["agents"]:
            status = meter.status(profile, native, agent=a["id"])
            position = min(1, max(0, status["B"]))
            payload = {
                "id": a["id"],
                "boredom": position * 100,
                "boredomSpectrum": {
                    "position": position,
                    "color": spectrum_color(position),
                    "regime": status["regime"],
                },
            }
            store.append(run_id, f"meter:{digest}:{a['id']}", "agent.boredom", payload)


def spectrum_color(position):
    stops = [(94, 188, 194), (146, 188, 152), (221, 194, 112), (218, 144, 97), (199, 106, 125)]
    scaled = min(1, max(0, position)) * 4
    index = min(3, int(scaled))
    fraction = scaled - index
    return "#" + "".join(
        f"{int(a + (b - a) * fraction + 0.5):02x}" for a, b in zip(stops[index], stops[index + 1])
    )
