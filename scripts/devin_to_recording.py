"""Convert an export of Devin session events into a swarm-viewer/v1 recording.

The input is a `devin-session-export/v1` JSON file (see docs/devin-replay.md): a root session,
its child sessions, and each session's raw events. The output is a run directory that the Lab,
`backend.replay` and `scripts/build_pages.sh` read like any swarm.py recording. The conversion
is offline and deterministic: the same export always gives byte-identical files.

  python scripts/devin_to_recording.py export.json --dest data/pages/viewer
"""

import argparse
import json
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT))
from export_viewer import NS_CAFFEINATED, SCHEMA, uid, write  # noqa: E402

EXPORT_SCHEMA = "devin-session-export/v1"
TEXT_LIMIT = 3000
USER = "user"
CI_STATUS = {"success": "keep", "skipped": "discard", "neutral": "discard"}
COLLECTIONS = ("diary", "discoveries", "experiments", "hypotheses", "memory", "observations")
COLLECTIONS += ("questions",)


def clip(text, limit=TEXT_LIMIT):
    text = " ".join(str(text or "").split())
    return text if len(text) <= limit else text[: limit - 1] + "…"


def iso(value):
    if not value:
        return None
    text = re.sub(
        r"(\.\d{6})\d+", r"\1", str(value).replace("Z", "+00:00").replace(" UTC", "+00:00")
    )
    ts = datetime.fromisoformat(text)
    if ts.tzinfo is None:
        ts = ts.replace(tzinfo=timezone.utc)
    return ts.astimezone(timezone.utc).isoformat(timespec="microseconds").replace("+00:00", "Z")


def ordered_sessions(export):
    sessions = {s["session_id"]: s for s in export["sessions"]}
    root = export.get("root_session_id") or next(
        s["session_id"] for s in export["sessions"] if s.get("parent_session_id") not in sessions
    )
    if root not in sessions:
        raise ValueError(f"root session {root} is not in the export")
    order, stack = [], [root]
    while stack:
        sid = stack.pop(0)
        order.append(sessions[sid])
        stack += sorted(
            (s["session_id"] for s in export["sessions"] if s.get("parent_session_id") == sid),
            key=lambda c: (iso(sessions[c].get("created_at")) or "", c),
        )
    return order


def convert(export):
    if export.get("schema") != EXPORT_SCHEMA:
        raise ValueError(f"expected schema {EXPORT_SCHEMA}")
    sessions = ordered_sessions(export)
    root = sessions[0]
    run_id = uid(NS_CAFFEINATED, f"devin:{root['session_id']}")
    parent = {s["session_id"]: s.get("parent_session_id") for s in sessions[1:]}

    def agent_of(native):
        return uid(run_id, native)

    username = next(
        (
            e["contents"].get("username")
            for s in sessions
            for e in s.get("events", [])
            if e.get("type") == "initial_user_message" and e.get("contents", {}).get("username")
        ),
        "User",
    )
    agents = [{"agent_id": agent_of(USER), "native_id": USER, "display_name": username}]
    agents[0]["type"] = "world"
    for i, s in enumerate(sessions):
        name = clip(s.get("title"), 60) or f"Devin {s['session_id'][-6:]}"
        agents.append(
            {
                "agent_id": agent_of(s["session_id"]),
                "native_id": s["session_id"],
                "display_name": name,
                "type": "conductor" if i == 0 and len(sessions) > 1 else "worker",
                "named": bool(s.get("title")),
            }
        )

    raw = sorted(
        (
            (iso(e.get("created_at") or e.get("contents", {}).get("timestamp")) or "", i, n, s, e)
            for i, s in enumerate(sessions)
            for n, e in enumerate(s.get("events", []))
        ),
        key=lambda row: row[:3],
    )
    events, rounds, markers = [], [], []
    entities = {name: {} for name in COLLECTIONS}
    state = {"round": 0, "started": False}
    check_owner = {}

    def emit(s, e, sub, kind, agent, phase, payload, refs=None):
        native = s["session_id"]
        events.append(
            {
                "schema": SCHEMA,
                "run_id": run_id,
                "event_id": uid(run_id, f"{native}:{e['event_id']}:{sub}"),
                "tick": len(events),
                "round": state["round"],
                "phase": phase,
                "ts": iso(e.get("created_at")),
                "type": kind,
                "agent_id": agent,
                "refs": refs or {},
                "source": {"file": native, "line": e["_line"], "native_type": e["type"]},
                "payload": payload,
            }
        )
        return events[-1]

    def entity(collection, key, row):
        entities[collection][key] = {
            **row,
            "tick": len(events),
            "round": state["round"],
        }

    for _, _, line, s, e in raw:
        e = {**e, "_line": line + 1}
        c = e.get("contents") or {}
        kind, native = e.get("type"), s["session_id"]
        me = agent_of(native)
        boss = agent_of(parent[native]) if native in parent else agent_of(USER)
        message = clip(c.get("message"))
        if kind in {"initial_user_message", "user_message"} and native not in parent:
            if state["started"]:
                state["round"] += 1
                rounds[-1]["tick_end"] = len(events) - 1
            else:
                emit(
                    s,
                    e,
                    "run",
                    "run.started",
                    me,
                    "assign",
                    {"text": f"Session: {agents[1]['display_name']}"},
                )
                state["started"] = True
            rounds.append(
                {
                    "round": state["round"],
                    "tick_start": len(events),
                    "ts_start": iso(e.get("created_at")),
                }
            )
            emit(
                s,
                e,
                "round",
                "round.started",
                None,
                "assign",
                {"text": f"Request {state['round'] + 1}"},
            )
            emit(
                s,
                e,
                "msg",
                "message.sent",
                agent_of(USER),
                "talk",
                {"text": message, "to_agent_id": me},
                {"to_agent_id": me},
            )
        elif kind in {"initial_user_message", "user_message"}:
            if kind == "initial_user_message":
                emit(
                    s,
                    e,
                    "assign",
                    "agent.assigned",
                    me,
                    "assign",
                    {
                        "role": "worker",
                        "rationale": message,
                        "text": f"Assigned: {clip(message, 200)}",
                    },
                )
            emit(
                s,
                e,
                "msg",
                "message.sent",
                boss,
                "talk",
                {"text": message, "to_agent_id": me},
                {"to_agent_id": me},
            )
        elif kind == "devin_message":
            emit(
                s,
                e,
                "msg",
                "message.sent",
                me,
                "talk",
                {"text": message, "to_agent_id": boss},
                {"to_agent_id": boss},
            )
        elif kind == "devin_thoughts":
            key = f"diary:{e['event_id']}"
            entity(
                "diary",
                key,
                {"diary_id": key, "agent_id": me, "kind": "rationale", "text": message, "refs": []},
            )
            emit(
                s,
                e,
                "diary",
                "diary.written",
                me,
                "propose",
                {"kind": "rationale", "text": message},
                {"diary_id": key},
            )
        elif kind == "shell_process_started":
            key = f"question:{c.get('process_id') or e['event_id']}"
            text = clip(c.get("command"), 500)
            entity(
                "questions",
                key,
                {
                    "question_id": key,
                    "agent_id": me,
                    "kind": "command",
                    "text": text,
                    "answered_by": [],
                },
            )
            emit(
                s,
                e,
                "cmd",
                "question.asked",
                me,
                "research",
                {"kind": "command", "text": f"$ {text}"},
                {"question_id": key},
            )
        elif kind == "shell_process_completed":
            qid = f"question:{c.get('process_id') or e['event_id']}"
            key = f"observation:{e['event_id']}"
            first = next(
                (ln for ln in str(c.get("output_trunc") or "").splitlines() if ln.strip()), ""
            )
            summary = clip(f"exit {c.get('exit_code', '?')}: {first}", 300)
            entity(
                "observations",
                key,
                {
                    "observation_id": key,
                    "agent_id": me,
                    "kind": "result",
                    "summary": summary,
                    "refs": [],
                    "question_id": qid,
                },
            )
            if qid in entities["questions"]:
                entities["questions"][qid]["answered_by"].append(key)
            emit(
                s,
                e,
                "out",
                "observation.received",
                me,
                "research",
                {"kind": "result", "summary": summary},
                {"observation_id": key, "question_id": qid},
            )
        elif kind == "multi_edit_result":
            for n, update in enumerate(c.get("file_updates") or []):
                path = Path(str(update.get("file_path") or "?")).name
                text = f"Edited {path} (+{update.get('lines_added', 0)} −{update.get('lines_removed', 0)})"
                key = f"memory:{e['event_id']}:{n}"
                entity(
                    "memory",
                    key,
                    {
                        "memory_id": key,
                        "author_agent_id": me,
                        "type": "edit",
                        "text": text,
                        "source_ids": [],
                        "scope": "private",
                        "recalled_by": [],
                    },
                )
                emit(
                    s,
                    e,
                    f"edit{n}",
                    "memory.written",
                    me,
                    "propose",
                    {"type": "edit", "text": text},
                    {"memory_id": key},
                )
        elif kind == "git_push":
            sha = str(c.get("head_sha") or "")[:7]
            text = clip(f"Pushed {c.get('branch') or 'branch'} at {sha}", 300)
            key = f"memory:{e['event_id']}"
            entity(
                "memory",
                key,
                {
                    "memory_id": key,
                    "author_agent_id": me,
                    "type": "commit",
                    "text": text,
                    "source_ids": [],
                    "scope": "private",
                    "recalled_by": [],
                },
            )
            emit(
                s,
                e,
                "push",
                "memory.written",
                me,
                "propose",
                {"type": "commit", "text": text},
                {"memory_id": key},
            )
        elif kind == "pr_created":
            pr = c.get("pr_data") or {}
            key = f"hypothesis:pr:{pr.get('html_url') or e['event_id']}"
            text = clip(f"PR #{pr.get('pull_number')}: {pr.get('title')}", 300)
            entity(
                "hypotheses",
                key,
                {
                    "hypothesis_id": key,
                    "agent_id": me,
                    "text": text,
                    "rationale": clip(pr.get("body"), 1000),
                    "source_ids": [],
                },
            )
            emit(
                s,
                e,
                "pr",
                "hypothesis.proposed",
                me,
                "gate",
                {"text": text, "url": pr.get("html_url")},
                {"hypothesis_id": key},
            )
        elif kind in {"check_run_created", "check_run_completed"}:
            run = c.get("check_run_data") or {}
            key = f"experiment:check:{run.get('id') or e['event_id']}"
            check_owner.setdefault(key, me)
            row = entities["experiments"].get(key) or {
                "experiment_id": key,
                "agent_id": me,
                "kind": "ci",
                "tick_started": len(events),
                "description": clip(run.get("name") or "CI check", 200),
                "commit": run.get("head_sha"),
                "metric_value": None,
                "status": "pending",
                "artifacts": {},
                "log_tail": None,
                "reward": None,
            }
            if kind == "check_run_created":
                entities["experiments"][key] = {**row, "round": state["round"]}
                emit(
                    s,
                    e,
                    "ci",
                    "experiment.started",
                    me,
                    "evaluate",
                    {"text": f"CI started: {row['description']}"},
                    {"experiment_id": key},
                )
                continue
            status = CI_STATUS.get(run.get("conclusion"), "crash")
            row = {
                **row,
                "status": status,
                "tick_finished": len(events),
                "url": run.get("html_url"),
            }
            row.setdefault("round", state["round"])
            entities["experiments"][key] = row
            if status == "crash":
                markers.append({"kind": "crash", "ref": key, "tick": len(events)})
            emit(
                s,
                e,
                "ci",
                "experiment.finished",
                check_owner[key],
                "evaluate",
                {
                    "status": status,
                    "title": row["description"],
                    "text": f"CI {run.get('conclusion') or 'finished'}: {row['description']}",
                },
                {"experiment_id": key},
            )
        elif kind == "ack_pr_merged":
            url = c.get("url") or ""
            markers.append({"kind": "verdict", "label": "merged", "ref": url, "tick": len(events)})
            emit(
                s,
                e,
                "merged",
                "verdict.issued",
                me,
                "critic",
                {"verdict": "merged", "accepted": True, "why": url, "text": f"Merged: {url}"},
                {"hypothesis_id": f"hypothesis:pr:{url}"},
            )
    if not events:
        raise ValueError("export has no convertible events")
    last = raw[-1]
    emit(
        last[3],
        {**last[4], "_line": last[2] + 1},
        "end",
        "run.finished",
        agent_of(root["session_id"]),
        "finish",
        {"status": "finished", "text": "Session export ends"},
    )
    rounds[-1]["tick_end"] = len(events) - 1
    for row in rounds:
        row["regime"] = None
    manifest = {
        "schema": SCHEMA,
        "run_id": run_id,
        "swarm": "devin",
        "title": f"Devin session · {agents[1]['display_name']}",
        "status": "finished",
        "live": False,
        "arm": {
            "id": "devin",
            "label": "Devin sessions",
            "boredom_enabled": False,
            "policy": "none",
        },
        "metric": {
            "name": "ci_checks",
            "unit": "",
            "direction": "maximize",
            "label": "CI checks",
            "description": "Devin session replay: experiments are CI check runs; there is no task metric",
        },
        "publish_errors": [],
        "boredom": {"scale": [0, 1], "thresholds": {}, "regimes": []},
        "time": {
            "ticks": len(events),
            "rounds": len(rounds),
            "ts_start": events[0]["ts"],
            "ts_end": events[-1]["ts"],
        },
        "agents": agents,
        "provenance": {
            "llm": "devin",
            "llm_mode": "devin",
            "gpu": "none",
            "exa": "off",
            "memory_backend": "none",
            "research": "off",
            "command": "scripts/devin_to_recording.py",
            "swarm_commit": "",
            "artifacts": {},
            "devin_sessions": [s["session_id"] for s in sessions],
        },
    }
    timeline = {"keyframes": [], "markers": markers, "rounds": rounds}
    return manifest, timeline, events, entities


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("export", type=Path)
    parser.add_argument("--dest", type=Path, required=True)
    args = parser.parse_args(argv)
    manifest, timeline, events, entities = convert(json.loads(args.export.read_text()))
    print(write(args.dest, manifest, timeline, events, {}, entities))


if __name__ == "__main__":
    main()
