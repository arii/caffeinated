"""Read-only adapter from swarm-viewer/v1 bundles to time-indexed lab snapshots.

The source's sparse keyframes are kept as source artifacts, never trusted as a
starting state. Every frame is folded from the native event prefix instead.
"""

import hashlib
import json
import logging
import os
import posixpath
import re
import shlex
import time
import zipfile
from copy import deepcopy
from datetime import datetime, timezone
from pathlib import Path

from backend.ingest import number, spectrum_color

STALE_ERROR = "The swarm stopped publishing before it finished."
COLLECTIONS = (
    "experiments",
    "llm_calls",
    "memory",
    "sources",
    "questions",
    "observations",
    "discoveries",
    "rewards",
    "diary",
    "hypotheses",
    "studies",
)
ACTIVITY = {
    "agent.assigned": ("assigned", "working", "notebook"),
    "hypothesis.proposed": ("proposing", "thinking", "notebook"),
    "gate.checked": ("gated", "reviewing", "analyzer"),
    "experiment.started": ("training", "working", "culture"),
    "experiment.finished": ("reviewing", "reviewing", "analyzer"),
    "verdict.issued": ("reviewing", "reviewing", "analyzer"),
    "message.sent": ("talking", "working", "notebook"),
    "items.shared": ("sharing", "working", "notebook"),
    "diary.written": ("writing_diary", "working", "notebook"),
    "memory.written": ("writing_diary", "working", "notebook"),
    "llm.called": ("thinking", "thinking", "notebook"),
}


def entity_map(rows):
    return {
        row.get("id")
        or next((row[k] for k in row if k.endswith("_id") and k != "agent_id"), None): row
        for row in rows
    }


def event_message(event):
    p = event.get("payload", {})
    return str(
        p.get("text")
        or p.get("summary")
        or p.get("title")
        or p.get("why")
        or p.get("rationale")
        or p.get("excerpt")
        or event["type"].replace(".", " · ")
    )[:3000]


TESTCASES = Path(__file__).resolve().parents[1] / "testcases"


def task_proxy_note(manifest):
    """The task's honest benchmark caveat (testcases/<task>/task.json proxy_note), if known."""
    command = (manifest.get("provenance") or {}).get("command") or []
    parts = command.split() if isinstance(command, str) else list(command)
    task = manifest.get("task") or ""
    for i, part in enumerate(parts):
        if part == "--task" and i + 1 < len(parts):
            task = parts[i + 1]
        elif str(part).startswith("--task="):
            task = str(part).split("=", 1)[1]
    if not task and "ig nobel" in str(manifest.get("title", "")).lower():
        task = "ignobel"
    path = TESTCASES / str(task) / "task.json"
    if not task or "/" in str(task) or not path.is_file():
        return ""
    try:
        return str(json.loads(path.read_text()).get("proxy_note") or "")
    except (OSError, ValueError):
        return ""


def build_recording(native_manifest, native_events, entities, sample=True, stale=False):
    """Pure deterministic fold. Entity lookups never import late verdicts/results.

    stale marks a run whose manifest still says running but whose writer stopped
    publishing; it is replayed as stopped instead of live.
    """
    manifest = deepcopy(native_manifest)
    if manifest.get("schema") != "swarm-viewer/v1":
        raise ValueError("Unsupported recording schema")
    events = []
    seen_ids = set()
    seen_ticks = set()
    for event in sorted(native_events, key=lambda e: e["tick"]):
        tick = event["tick"]
        if not isinstance(tick, int) or tick < 0:
            raise ValueError("Invalid recording tick")
        if event.get("run_id") != manifest["run_id"]:
            raise ValueError("Mixed recording IDs")
        if event["event_id"] in seen_ids:
            continue
        if tick in seen_ticks:
            raise ValueError("Duplicate recording tick")
        seen_ids.add(event["event_id"])
        seen_ticks.add(tick)
        events.append({**event, "agentId": event.get("agent_id"), "message": event_message(event)})
    last_tick = max((e["tick"] for e in events), default=0)
    finished = any(e["type"] == "run.finished" and e["tick"] == last_tick for e in events)
    live = (manifest.get("status") in {"running", "live"} or bool(manifest.get("live"))) and not (
        stale or finished
    )
    manifest.update(
        {
            "id": manifest["run_id"],
            "totalTicks": last_tick,
            "tickDurationMs": 700,
            "live": live,
            "stale": stale,
            "liveness": "stale" if stale else "live" if live else "ended",
            "publish_errors": publish_issues(manifest.get("publish_errors")),
        }
    )
    provenance = manifest.get("provenance", {})
    manifest["sample"] = sample
    llm = provenance.get("llm_mode") or provenance.get("llm", "unknown")
    try:
        command = provenance.get("command", [])
        if isinstance(command, str):
            command = shlex.split(command)
        provider = next(
            (
                part.split("=", 1)[1] if "=" in part else command[i + 1]
                for i, part in enumerate(command)
                if part == "--llm" or part.startswith("--llm=")
            ),
            None,
        )
        if provider and not provenance.get("llm_mode"):
            llm = provider
    except (ValueError, IndexError):
        pass
    note = task_proxy_note(manifest)
    if note:
        manifest.setdefault("proxy_note", note)
    manifest["description"] = (
        (
            "Recorded offline run · fake LLM (scripted agents)"
            if llm == "fake"
            else "Recorded research · no live model calls"
        )
        if sample
        else ("Stalled swarm run" if stale else "Live swarm run" if live else "Swarm run")
        + " · "
        + (
            "fake LLM"
            if llm == "fake"
            else f"{llm} model calls"
            if llm != "unknown"
            else "unknown LLM provenance"
        )
    )
    created = manifest.get("time", {}).get("ts_start")
    created_at = (
        datetime.fromisoformat(created.replace("Z", "+00:00")).timestamp() if created else 0
    )
    agents = []
    human_index = 0
    for identity in manifest.get("agents", []):
        original = (
            identity.get("display_name")
            or identity.get("label")
            or identity.get("native_id", identity["agent_id"])
        )
        identity["original_display_name"] = original
        identity["display_name"] = original
        if identity.get("type") not in {"baseline", "world"}:
            field = str(identity.get("family") or identity.get("field") or "").lower()
            prefix = (
                "B"
                if field in {"b", "bio", "biology"}
                else "C"
                if field in {"c", "chem", "chemistry"}
                else "P"
                if field in {"p", "physics"}
                else ["B", "C", "P"][human_index % 3]
            )
            identity["familySource"] = (
                "recorded"
                if field in {"b", "bio", "biology", "c", "chem", "chemistry", "p", "physics"}
                else "display assignment"
            )
            identity["family"] = {"B": "Bio", "C": "Chem", "P": "Physics"}[prefix]
            human_index += 1
        identity["label"] = identity["display_name"]
    for identity in manifest.get("agents", []):
        kind = identity.get("type", "worker")
        agents.append(
            {
                "id": identity["agent_id"],
                "nativeId": identity.get("native_id", ""),
                "name": identity.get("display_name")
                or identity.get("label")
                or identity.get("native_id", identity["agent_id"]),
                "family": identity.get("family"),
                "familySource": identity.get("familySource"),
                "type": kind,
                "role": kind,
                "state": "idle",
                "activity": "idle",
                "stationId": "notebook",
                "sinceTick": -1,
                "boredom": None,
                "focus": {},
                "counters": {
                    "experiments": 0,
                    "keeps": 0,
                    "questions": 0,
                    "observations": 0,
                    "memory_writes": 0,
                    "tokens": 0,
                },
            }
        )
    by_id = {a["id"]: a for a in agents}
    s = {
        "runId": manifest["run_id"],
        "title": manifest.get("title", "Research recording"),
        "lastSequence": 0,
        "status": "running",
        "createdAt": created_at,
        "config": {
            "mode": "recorded",
            "task": manifest.get("swarm", ""),
            "arm": manifest.get("arm", {}).get("id", "unknown"),
            "rounds": manifest.get("time", {}).get("rounds", 0),
            "seed": None,
            "model": provenance.get("llm") or None,
        },
        "sourceCommit": provenance.get("swarm_commit") or "",
        "progress": 0,
        "round": 0,
        "tick": -1,
        "phase": "setup",
        "boredom": 0,
        "regime": "EXPLOIT",
        "value": None,
        "reference": None,
        "agents": agents,
        "findings": [],
        "results": [],
        "sources": [],
        "error": None,
        "metric": manifest["metric"],
        "provenance": {
            "llm": provenance.get("llm", "unknown"),
            "gpu": provenance.get("gpu", "unknown"),
            "exa": provenance.get("exa", "unknown"),
            "memory": provenance.get("memory_backend", "unknown"),
            "execution": "recorded",
        },
        "discoveries": [],
    }
    maps = {name: entity_map(rows) for name, rows in entities.items()}
    result_by_id = {}
    accepted = set()
    frames = [{"tick": -1, "snapshot": deepcopy(s)}]

    def best(value):
        if value is None:
            return
        if s["value"] is None:
            s["value"] = value
        else:
            s["value"] = (min if s["metric"]["direction"] == "minimize" else max)(s["value"], value)

    for event in events:
        kind = event["type"]
        tick = event["tick"]
        p = event.get("payload", {})
        refs = event.get("refs", {})
        aid = event.get("agent_id")
        a = by_id.get(aid)
        s["tick"] = tick
        s["lastSequence"] = tick + 1
        s["round"] = event.get("round", s["round"])
        s["phase"] = event.get("phase", "")
        s["progress"] = tick / max(1, last_tick + int(live))
        if a:
            if kind in ACTIVITY:
                a["sinceTick"] = tick
                a["activity"], a["state"], a["stationId"] = ACTIVITY[kind]
            for key in ["question_id", "hypothesis_id", "experiment_id"]:
                if key in refs:
                    a["focus"][key] = refs[key]
        if kind == "round.started":
            for field, source in [("regime", "regime"), ("boredom", "swarm_B")]:
                if source in p:
                    s[field] = p[source] * 100 if field == "boredom" else p[source]
        elif kind == "agent.assigned" and a:
            a["role"] = p.get("role") or a["type"]
            a["scout"] = bool(p.get("scout"))
        elif kind == "boredom.measured":
            value = number(p.get("B"))
            if value is not None:
                value = min(1, max(0, value))
                regime = p.get("regime", "EXPLOIT")
                if a:
                    a["boredom"] = value * 100
                    a["boredomSpectrum"] = {
                        "position": value,
                        "color": spectrum_color(value),
                        "regime": regime,
                    }
                    a["boredomDetail"] = {**p, "measured_tick": tick}
                else:
                    s["boredom"] = value * 100
                    s["regime"] = regime
        elif kind == "question.asked" and a:
            a["sinceTick"] = tick
            a["activity"] = "recalling" if p.get("kind") == "recall" else "researching"
            a["state"] = "thinking"
            a["stationId"] = "notebook" if p.get("kind") == "recall" else "explorer"
            a["counters"]["questions"] += 1
            a["lastQuestion"] = event["message"]
        elif kind == "observation.received":
            if a:
                a["counters"]["observations"] += 1
                a["lastObservation"] = event["message"]
            sid = refs.get("source_id")
            if sid:
                source = maps.get("sources", {}).get(sid, {})
                s["sources"] = (
                    s["sources"]
                    + [
                        {
                            "id": sid,
                            "title": p.get("summary") or source.get("title"),
                            "url": p.get("url") or source.get("url"),
                            "query_id": refs.get("question_id"),
                        }
                    ]
                )[-8:]
        elif kind == "hypothesis.proposed" and a:
            a["lastIdea"] = event["message"]
        elif kind == "experiment.finished":
            eid = refs.get("experiment_id")
            entity = maps.get("experiments", {}).get(eid, {})
            # Only use outcome fields when this experiment actually finishes.
            value = number(p.get("metric_value"))
            if value is None:
                value = number(entity.get("metric_value"))
            row = {
                "id": eid,
                "agent": a["name"] if a else aid or "Unknown",
                "agentId": aid,
                "round": event.get("round", 0),
                "tick": tick,
                "kind": entity.get("kind", "candidate"),
                "status": p.get("status", "unknown"),
                "value": value,
                "commit": entity.get("commit"),
                "description": entity.get("description") or p.get("title") or "",
                "sources": entity.get("source_ids", []),
                "effectSize": number(p.get("effect_size")),
                "pValue": number(p.get("p")),
                "reward": number(p.get("reward")),
                "study": entity.get("study"),
            }
            result_by_id[eid] = row
            s["results"].append(row)
            if a:
                a["lastResult"] = row
                a["counters"]["experiments"] += 1
                a["counters"]["keeps"] += int(row["status"] in {"keep", "replicated"})
            if row["kind"] == "baseline":
                s["reference"] = value
                best(value)
            elif eid in accepted:
                best(value)
        elif kind == "verdict.issued" and p.get("accepted"):
            eid = refs.get("experiment_id")
            accepted.add(eid)
            if eid in result_by_id:
                best(result_by_id[eid]["value"])
        elif kind == "discovery.made":
            discovery = {**p, "tick": tick, "agentId": aid, **refs}
            s["discoveries"].append(discovery)
            best(number(p.get("metric_value")))
        elif kind == "memory.written" and a:
            a["counters"]["memory_writes"] += 1
        elif kind in {"message.sent", "items.shared"} and a:
            partner = p.get("to_agent_id")
            if partner:
                a["focus"]["partner_agent_id"] = partner
            if partner in by_id:
                a["stationId"] = by_id[partner]["stationId"]
            if p.get("text"):
                a["lastMessage"] = str(p["text"])[:3000]
        elif kind == "llm.called" and a:
            call = maps.get("llm_calls", {}).get(refs.get("llm_call_id"), {})
            response = call.get("response", {})
            if isinstance(response, dict):
                idea = response.get("idea") or response.get("why")
                if idea:
                    a["lastIdea"] = str(idea)[:3000]
                    a["lastMessage"] = a["lastIdea"]
                if response.get("rationale"):
                    a["lastRationale"] = str(response["rationale"])[:3000]
            tokens = p.get("tokens", 0)
            a["counters"]["tokens"] += int(
                tokens
                if isinstance(tokens, (int, float))
                else sum(tokens.values())
                if isinstance(tokens, dict)
                else 0
            )
        if kind in {
            "memory.written",
            "diary.written",
            "hypothesis.proposed",
            "verdict.issued",
            "discovery.made",
            "question.asked",
            "observation.received",
        }:
            message = event["message"]
            if kind in {"memory.written", "diary.written"}:
                collection = "memory" if kind == "memory.written" else "diary"
                key = "memory_id" if kind == "memory.written" else "diary_id"
                entity = maps.get(collection, {}).get(refs.get(key), {})
                # The item exists at this event. Later-mutated attribution is not copied.
                message = str(entity.get("text") or entity.get("content") or message)[:3000]
                if a:
                    a["lastNote"] = message
            if a:
                a["lastMessage"] = message
            s["findings"] = (
                s["findings"]
                + [
                    {
                        "agent": a["id"] if a else aid or "",
                        "role": kind.split(".")[0].title(),
                        "message": message,
                        "round": event.get("round", 0),
                        "tick": tick,
                        "type": kind,
                    }
                ]
            )[-8:]
        if stale and tick == last_tick and kind != "run.finished":
            s["status"] = "stopped"
            s["error"] = STALE_ERROR
            for item in agents:
                item["state"] = "idle"
                item["activity"] = "idle"
        elif kind == "run.finished" or (tick == last_tick and not live):
            status = manifest.get("status", "completed")
            if status in {"running", "live"}:
                # run.finished is published before the manifest is rewritten.
                status = (p.get("status") if kind == "run.finished" else None) or "completed"
            s["status"] = "completed" if status == "finished" else status
            s["progress"] = 1
            for item in agents:
                item["state"] = "idle"
                item["activity"] = "idle"
        frames.append({"tick": tick, "snapshot": deepcopy(s)})
    if stale and not events:
        frames[-1]["snapshot"].update(status="stopped", error=STALE_ERROR)
    return {"manifest": manifest, "frames": frames, "events": events, "entities": entities}


STALE_AFTER_SECONDS = 300
HEARTBEAT_FIELDS = ("heartbeat_ts", "heartbeat_interval_s")
PUBLISH_LOG = "viewer_publish_log.jsonl"
VERSIONS_KEPT = 4
# Later patterns win on duplicate run IDs: a resumed run in the live conductor beats the
# copy that swarm.py moved aside to conductor.stale-<time>/ when an earlier run was killed.
DISCOVERY_PATTERNS = (
    ".swarm_worktrees/*/conductor.stale-*/experiments/*/viewer",
    ".swarm_worktrees/*/conductor/experiments/*/viewer",
    "experiments/*/viewer",
)


def parse_ts(value):
    if not isinstance(value, str) or not value:
        return None
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=timezone.utc)
    return parsed.timestamp()


def iso(ts):
    if ts is None:
        return None
    return (
        datetime.fromtimestamp(ts, timezone.utc)
        .isoformat(timespec="seconds")
        .replace("+00:00", "Z")
    )


def publish_issues(value):
    """Normalize manifest.publish_errors (docs/swarm-viewer-api.md PublishIssue) to at most 20 rows."""
    if not isinstance(value, list):
        return []
    issues = []
    for row in value[-20:]:
        if isinstance(row, dict):
            issues.append(
                {
                    "ts": row.get("ts"),
                    "kind": str(row.get("kind") or row.get("error") or "error"),
                    "final": bool(row.get("final")),
                    "message": str(row.get("message", ""))[:500],
                }
            )
        elif isinstance(row, str):
            issues.append({"ts": None, "kind": "error", "final": False, "message": row[:500]})
    return issues


def read_publish_log(path):
    rows = []
    try:
        lines = path.read_text(encoding="utf-8", errors="replace").splitlines()
    except OSError:
        return rows
    for line in lines:
        try:
            row = json.loads(line)
        except ValueError:
            continue
        if isinstance(row, dict):
            rows.append(row)
    return publish_issues(rows)


def last_event_ts(path):
    """Newest event ts and whether the last event is run.finished, from the file's tail."""
    try:
        with path.open("rb") as stream:
            stream.seek(0, os.SEEK_END)
            stream.seek(max(0, stream.tell() - 65536))
            tail = stream.read()
    except OSError:
        return None, False
    newest, finished = None, False
    for line in tail.splitlines():
        try:
            event = json.loads(line)
        except ValueError:
            continue
        if not isinstance(event, dict):
            continue
        finished = event.get("type") == "run.finished"
        ts = parse_ts(event.get("ts"))
        if ts is not None:
            newest = ts if newest is None else max(newest, ts)
    return newest, finished


def liveness(manifest, path, now, stale_after=None):
    """Whether a manifest that still claims to be running has stopped publishing.

    The newest of heartbeat_ts or the newest event ts is the last sign of life; file mtimes are the
    fallback for exports without timestamps. Heartbeat writers are judged on their own interval.
    """
    running = manifest.get("status") in {"running", "live"} or bool(manifest.get("live"))
    heartbeat = parse_ts(manifest.get("heartbeat_ts"))
    newest, finished = last_event_ts(path / "events.ndjson")
    running = running and not finished
    signs = [ts for ts in (heartbeat, newest) if ts is not None]
    if not signs:
        for name in ("events.ndjson", "manifest.json"):
            try:
                signs.append((path / name).stat().st_mtime)
            except OSError:
                continue
    updated = max(signs) if signs else None
    if stale_after is None:
        interval = number(manifest.get("heartbeat_interval_s"))
        stale_after = (
            max(30.0, 3 * interval) if heartbeat is not None and interval else STALE_AFTER_SECONDS
        )
    stale = bool(running and updated is not None and now - updated > stale_after)
    return {"lastUpdateTs": iso(updated), "staleAfterSeconds": stale_after}, stale


def entity_delta(previous, current):
    changed = {}
    for name, rows in current.items():
        before = entity_map(previous.get(name, []))
        fresh = [row for key, row in entity_map(rows).items() if before.get(key) != row]
        if fresh:
            changed[name] = fresh
    return changed


ARTIFACT_MAX_BYTES = 2_000_000


class RecordingCatalog:
    """Recordings from a sample archive plus swarm viewer directories.

    repo_root enables discovery of swarm output inside a checkout (DISCOVERY_PATTERNS); leave it
    None for a catalog that only reads the archive and the explicit directories.
    """

    def __init__(self, archive, directories=(), repo_root=None, stale_after=None, clock=time.time):
        self.archive = Path(archive)
        self.manifests = {}
        self.cache = {}
        self.directories = [Path(p).absolute() for p in directories]
        self.repo_root = Path(repo_root) if repo_root is not None else None
        self.stale_after = stale_after
        self.clock = clock
        self.directory_runs = {}
        self.directory_cache = {}
        self.content_version = ""
        if not self.archive.is_file():
            return
        self.content_version = hashlib.sha256(self.archive.read_bytes()).hexdigest()[:16] + "-v2"
        with zipfile.ZipFile(self.archive) as z:
            if sum(i.file_size for i in z.infolist()) > 50_000_000:
                raise ValueError("Recording archive too large")
            for name in z.namelist():
                if re.fullmatch(r"runs/[a-zA-Z0-9-]+/manifest.json", name):
                    m = json.loads(z.read(name))
                    rid = m["run_id"]
                    if name != f"runs/{rid}/manifest.json":
                        raise ValueError("Invalid manifest path")
                    self.manifests[rid] = m

    def _roots(self):
        found = []
        if self.repo_root is not None:
            for pattern in DISCOVERY_PATTERNS:
                found.extend(sorted(self.repo_root.glob(pattern)))
        explicit = set(self.directories)
        return (
            list(dict.fromkeys(root for root in found if root not in explicit)) + self.directories
        )

    def _signature(self, path):
        signature = []
        size = 0
        for base, children, names in os.walk(path, followlinks=False):
            if any((Path(base) / n).is_symlink() for n in children + names):
                raise ValueError("Symlink in recording")
            for name in sorted(names):
                file = Path(base) / name
                stat = file.stat()
                size += stat.st_size
                if size > 50_000_000:
                    raise ValueError("Recording too large")
                if file == path / "manifest.json":
                    continue
                signature.append(
                    (
                        file.relative_to(path).as_posix(),
                        stat.st_size,
                        hashlib.sha256(file.read_bytes()).hexdigest(),
                    )
                )
        return signature

    def _inspect(self, path):
        signature = self._signature(path)
        info = {"lastUpdateTs": None, "staleAfterSeconds": None}
        stale = False
        try:
            manifest = json.loads((path / "manifest.json").read_text())
        except (OSError, ValueError):
            manifest = None
        if isinstance(manifest, dict):
            # Heartbeat refreshes alone must not invalidate the cached recording.
            content = {k: v for k, v in manifest.items() if k not in HEARTBEAT_FIELDS}
            signature.append(
                (
                    "manifest.json",
                    hashlib.sha256(json.dumps(content, sort_keys=True).encode()).hexdigest(),
                )
            )
            log = path.parent.parent / PUBLISH_LOG
            if "publish_errors" not in manifest and log.is_file():
                content = log.read_bytes()
                signature.append((PUBLISH_LOG, len(content), hashlib.sha256(content).hexdigest()))
            info, stale = liveness(manifest, path, self.clock(), self.stale_after)
        else:
            stat = (path / "manifest.json").stat()
            signature.append(("manifest.json", stat.st_size, stat.st_mtime_ns))
        version = (
            hashlib.sha256(json.dumps(sorted(signature)).encode()).hexdigest()[:16]
            + ("-stale" if stale else "")
            + "-v4"
        )
        return version, {**info, "stale": stale}

    def _scan(self):
        runs = {}
        for root in self._roots():
            if root.is_symlink():
                continue
            if not root.is_dir():
                continue
            for parent, dirs, files in os.walk(root, followlinks=False):
                path = Path(parent)
                dirs[:] = (
                    sorted(d for d in dirs if not (path / d).is_symlink())
                    if len(path.relative_to(root).parts) < 5
                    else []
                )
                if "manifest.json" not in files:
                    continue
                rid = path.name
                if not re.fullmatch(r"[a-zA-Z0-9-]+", rid):
                    continue
                try:
                    version, info = self._inspect(path)
                    runs[rid] = (path, version, info)
                except (OSError, ValueError) as exc:
                    logging.warning("Skipping recording %s: %s", path, exc)
        self.directory_runs = runs
        kept = {}
        for key in reversed(list(self.directory_cache)):
            rid = key[0]
            if rid in runs and (
                key[1] == runs[rid][1] or sum(k[0] == rid for k in kept) < VERSIONS_KEPT
            ):
                kept[key] = self.directory_cache[key]
        self.directory_cache = dict(reversed(list(kept.items())))

    def _directory_get(self, rid):
        path, version, info = self.directory_runs[rid]
        key = (rid, version)
        if key not in self.directory_cache:
            manifest = json.loads((path / "manifest.json").read_text())
            if manifest["run_id"] != rid:
                raise ValueError("Invalid manifest path")
            if "publish_errors" not in manifest:
                manifest["publish_errors"] = read_publish_log(path.parent.parent / PUBLISH_LOG)
            events = []
            event_path = path / "events.ndjson"
            for line in event_path.read_text().splitlines() if event_path.exists() else []:
                if not line.strip():
                    continue
                try:
                    event = json.loads(line)
                except ValueError:
                    event = None
                if isinstance(event, dict):
                    events.append(event)
                else:
                    logging.warning("Skipping partial event in %s", path)
            entities = {}
            for name in COLLECTIONS:
                file = path / "entities" / f"{name}.json"
                if file.exists():
                    try:
                        entities[name] = json.loads(file.read_text())
                    except ValueError:
                        logging.warning("Skipping partial entity file %s", file)
            recording = build_recording(
                manifest, events, entities, sample=False, stale=info["stale"]
            )
            recording["manifest"]["contentVersion"] = version
            self.directory_cache[key] = recording
        recording = self.directory_cache[key]
        recording["manifest"].update(
            lastUpdateTs=info["lastUpdateTs"], staleAfterSeconds=info["staleAfterSeconds"]
        )
        return recording

    def get(self, rid):
        self._scan()
        return self._get(rid)

    def delta(self, rid, base):
        """What a client holding contentVersion base needs to reach the current recording.

        kind is 'unchanged', 'delta' (frames from tick since onward replace the client's, earlier
        frames get progress tick / progressScale and then the snapshot keys in patches, events after since are appended, entity rows
        are upserted by id) or 'full'.
        """
        current = self.get(rid)
        manifest = current["manifest"]
        if base and base == manifest.get("contentVersion"):
            return {"kind": "unchanged", "manifest": manifest}
        previous = self.directory_cache.get((rid, base)) if rid in self.directory_runs else None
        if previous is None or not self._appendable(previous, current):
            return {"kind": "full", **current}
        since = previous["frames"][-1]["tick"]
        # Live progress is tick / scale, so a longer run rescales every earlier frame.
        scale = max(1, manifest["totalTicks"] + int(bool(manifest.get("live"))))
        before = {f["tick"]: f["snapshot"] for f in previous["frames"] if f["tick"] < since}
        patches = []
        for frame in current["frames"]:
            old = before.get(frame["tick"])
            if old is None:
                continue
            old = {**old, "progress": max(0, frame["tick"]) / scale}
            changed = {k: v for k, v in frame["snapshot"].items() if old.get(k) != v}
            if changed:
                patches.append({"tick": frame["tick"], "snapshot": changed})
        return {
            "kind": "delta",
            "base": base,
            "since": since,
            "manifest": manifest,
            "frames": [f for f in current["frames"] if f["tick"] >= since],
            "progressScale": scale,
            "patches": patches,
            "events": [e for e in current["events"] if e["tick"] > since],
            "entities": entity_delta(previous.get("entities", {}), current.get("entities", {})),
        }

    @staticmethod
    def _appendable(previous, current):
        # A resumed run can truncate events.ndjson and republish; any rewrite needs a full load.
        old, new = previous["events"], current["events"]
        if len(old) > len(new) or any(a != b for a, b in zip(old, new)):
            return False
        before, after = previous.get("entities", {}), current.get("entities", {})
        if any(
            not entity_map(after.get(name, [])).keys() >= entity_map(rows).keys()
            for name, rows in before.items()
        ):
            return False
        keys = ("agents", "metric", "run_id", "swarm")
        return all(previous["manifest"].get(k) == current["manifest"].get(k) for k in keys)

    def _get(self, rid):
        if rid in self.directory_runs:
            try:
                return self._directory_get(rid)
            except (OSError, ValueError, KeyError, TypeError, AttributeError, OverflowError) as exc:
                logging.warning("Skipping recording %s: %s", rid, exc)
                if rid not in self.manifests:
                    raise KeyError(rid) from exc
        if rid not in self.manifests:
            raise KeyError(rid)
        if rid not in self.cache:
            with zipfile.ZipFile(self.archive) as z:
                prefix = f"runs/{rid}/"
                events = [
                    json.loads(x)
                    for x in z.read(prefix + "events.ndjson").decode().splitlines()
                    if x.strip()
                ]
                entities = {
                    k: json.loads(z.read(prefix + "entities/" + k + ".json"))
                    for k in COLLECTIONS
                    if prefix + "entities/" + k + ".json" in z.namelist()
                }
            self.cache[rid] = build_recording(self.manifests[rid], events, entities)
            self.cache[rid]["manifest"]["contentVersion"] = self.content_version
        return self.cache[rid]

    def artifact(self, rid, relative):
        """Exported artifact bytes, confined to the recording's artifacts/ folder; None if absent.

        Raises ValueError when the artifact exceeds ARTIFACT_MAX_BYTES.
        """
        self._scan()
        if rid in self.directory_runs:
            root = (self.directory_runs[rid][0] / "artifacts").resolve()
            try:
                path = (root / relative).resolve()
            except (OSError, RuntimeError, ValueError):
                return None
            if not path.is_relative_to(root) or not path.is_file():
                return None
            if path.stat().st_size > ARTIFACT_MAX_BYTES:
                raise ValueError("Artifact too large")
            return path.read_bytes()
        if rid not in self.manifests:
            return None
        name = posixpath.normpath(relative)
        if (
            not relative
            or "\x00" in relative
            or "\\" in relative
            or name.startswith(("/", ".."))
            or ".." in name.split("/")
        ):
            return None
        with zipfile.ZipFile(self.archive) as z:
            try:
                info = z.getinfo(f"runs/{rid}/artifacts/{name}")
            except KeyError:
                return None
            if info.is_dir():
                return None
            if info.file_size > ARTIFACT_MAX_BYTES:
                raise ValueError("Artifact too large")
            return z.read(info)

    def list(self):
        self._scan()
        items = []
        for rid in sorted(self.manifests.keys() | self.directory_runs.keys()):
            try:
                items.append(self._get(rid)["manifest"])
            except KeyError:
                continue
        return items
