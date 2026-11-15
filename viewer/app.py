import asyncio
from datetime import datetime, timezone
import hashlib
import json
import mimetypes
import os
import time
from pathlib import Path

from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, Response, StreamingResponse

import export_viewer


COLLECTIONS = {
    "questions": "questions",
    "observations": "observations",
    "hypotheses": "hypotheses",
    "experiments": "experiments",
    "rewards": "rewards",
    "diary": "diary",
    "memory": "memory",
    "llm_calls": "llm_calls",
}
ENTITY_ALIASES = {
    "question": "questions", "observation": "observations", "hypothesis": "hypotheses",
    "experiment": "experiments", "reward": "rewards", "llm_call": "llm_calls",
    "discovery": "discoveries", "source": "sources",
}


def _parse_instant(value):
    if not isinstance(value, str):
        return None
    try:
        parsed = datetime.fromisoformat(value[:-1] + "+00:00" if value.endswith("Z") else value)
    except ValueError:
        return None
    if parsed.tzinfo is None:
        return None
    return parsed.astimezone(timezone.utc)


def _read_events(path):
    if not path.exists():
        return []
    data = path.read_bytes()
    lines = data.splitlines(keepends=True)
    if lines and not lines[-1].endswith(b"\n"):
        lines.pop()
    events = []
    for line in lines:
        try:
            events.append(json.loads(line))
        except (UnicodeDecodeError, json.JSONDecodeError):
            continue
    return events


def _read_entities(run_dir):
    result = {}
    for path in (run_dir / "entities").glob("*.json"):
        try:
            rows = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue
        result[path.stem] = {row["id"]: row for row in rows if isinstance(row, dict) and row.get("id")}
    return result


def create_app(data_dir=None, *, poll_interval=0.1, heartbeat_interval=15):
    root = Path(data_dir or os.environ.get("VIEWER_DATA", "lab/data/runs")).resolve()
    app = FastAPI(title="Swarm Viewer API", version="1.0")
    app.state.data_dir = root
    app.state.poll_interval = poll_interval
    app.state.heartbeat_interval = heartbeat_interval
    app.add_middleware(
        CORSMiddleware,
        allow_origin_regex=r"^http://(localhost|127\.0\.0\.1)(:\d+)?$",
        allow_methods=["GET"],
        allow_headers=["*"],
    )

    @app.exception_handler(HTTPException)
    async def api_errors(request, error):
        if isinstance(error.detail, dict):
            return JSONResponse(status_code=error.status_code, content=error.detail, headers=error.headers)
        return JSONResponse(status_code=error.status_code, content={"detail": error.detail}, headers=error.headers)

    def get_run(run_id):
        if not run_id or Path(run_id).name != run_id or run_id in {".", ".."}:
            raise HTTPException(404, {"error": "unknown_run"})
        path = (root / run_id).resolve()
        if path.parent != root or not (path / "manifest.json").is_file():
            raise HTTPException(404, {"error": "unknown_run"})
        return path

    def manifest_for(run_dir):
        try:
            return json.loads((run_dir / "manifest.json").read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            raise HTTPException(404, {"error": "unknown_run"}) from None

    def cached_json(request, value, source_paths=(), run_dir=None):
        body = json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":")).encode("utf-8")
        headers = {}
        if run_dir is not None:
            manifest = manifest_for(run_dir)
            terminal = manifest.get("status") in {"finished", "stopped"}
            if terminal:
                etag = '"' + hashlib.sha256(body).hexdigest() + '"'
                headers["Cache-Control"] = "public, max-age=31536000, immutable"
            else:
                stats = []
                for path in source_paths:
                    try:
                        stat = Path(path).stat()
                        stats.append((stat.st_mtime_ns, stat.st_size))
                    except OSError:
                        pass
                stamp = max((item[0] for item in stats), default=0)
                size = sum(item[1] for item in stats)
                digest = hashlib.sha256(body).hexdigest()[:16]
                etag = f'W/"{stamp:x}-{size:x}-{digest}"'
                headers["Cache-Control"] = "no-cache"
        else:
            try:
                stat = next(iter(source_paths)).stat()
                etag = f'W/"{stat.st_mtime_ns:x}-{stat.st_size:x}"'
            except (StopIteration, OSError):
                etag = '"' + hashlib.sha256(body).hexdigest() + '"'
            headers["Cache-Control"] = "no-cache"
        headers["ETag"] = etag
        if request.headers.get("if-none-match") == etag:
            return Response(status_code=304, headers=headers)
        return Response(body, media_type="application/json", headers=headers)

    def selector_tick(run_dir, manifest, selector):
        timeline_path = run_dir / "timeline.json"
        try:
            timeline = json.loads(timeline_path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            timeline = {"rounds": [], "keyframes": []}
        ticks = int(manifest.get("time", {}).get("ticks", 0))
        if selector is None or selector == "":
            tick = ticks - 1
        elif selector.isdigit() or (selector.startswith("-") and selector[1:].isdigit()):
            tick = int(selector)
        elif selector.startswith("tick="):
            try:
                tick = int(selector[5:])
            except ValueError:
                tick = -1
        elif selector.startswith("round="):
            try:
                round_number = int(selector[6:])
            except ValueError:
                round_number = -1
            round_ = next((item for item in timeline.get("rounds", [])
                           if item.get("round") == round_number), None)
            tick = round_.get("tick_end", -1) if round_ else -1
        elif selector.startswith("ts="):
            target = selector[3:]
            target_instant = _parse_instant(target)
            if target_instant is None:
                raise HTTPException(416, {"error": "tick_out_of_range", "ticks": ticks})
            events = _read_events(run_dir / "events.ndjson")
            tick = max((event["tick"] for event in events
                        if _parse_instant(event.get("ts")) is not None
                        and _parse_instant(event.get("ts")) <= target_instant), default=-1)
        else:
            tick = -1
        if tick < 0 or tick >= ticks:
            raise HTTPException(416, {"error": "tick_out_of_range", "ticks": ticks})
        return tick, timeline

    def world_for(run_dir, manifest, selector):
        tick, timeline = selector_tick(run_dir, manifest, selector)
        events = _read_events(run_dir / "events.ndjson")
        keyframes = {}
        for frame_tick in timeline.get("keyframes", []):
            if frame_tick <= tick:
                path = run_dir / "keyframes" / f"{frame_tick}.json"
                if path.is_file():
                    keyframes[frame_tick] = json.loads(path.read_text(encoding="utf-8"))
        world = export_viewer.world_at(events, manifest, _read_entities(run_dir), tick, keyframes)
        return world, tick

    def response_sources(run_dir, *names):
        return [run_dir / name for name in names]

    @app.get("/api/v1/runs")
    async def runs(request: Request):
        index_path = root / "index.json"
        try:
            index = json.loads(index_path.read_text(encoding="utf-8"))
            values = index.get("runs", [])
        except (OSError, json.JSONDecodeError):
            values = []
        return cached_json(request, values, [index_path])

    @app.get("/api/v1/runs/{run_id}")
    async def run_detail(run_id: str, request: Request):
        run_dir = get_run(run_id)
        value = manifest_for(run_dir)
        return cached_json(request, value, response_sources(run_dir, "manifest.json"), run_dir)

    @app.get("/api/v1/runs/{run_id}/timeline")
    async def timeline(run_id: str, request: Request):
        run_dir = get_run(run_id)
        try:
            value = json.loads((run_dir / "timeline.json").read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            raise HTTPException(404, {"error": "unknown_entity"}) from None
        return cached_json(request, value, response_sources(run_dir, "timeline.json"), run_dir)

    @app.get("/api/v1/runs/{run_id}/world")
    async def world(run_id: str, request: Request, at: str | None = None):
        run_dir = get_run(run_id)
        manifest = manifest_for(run_dir)
        value, _ = world_for(run_dir, manifest, at)
        return cached_json(request, value, response_sources(run_dir, "events.ndjson", "timeline.json"),
                           run_dir)

    @app.get("/api/v1/runs/{run_id}/events")
    async def events(
        run_id: str, request: Request, after: int = -1, until: int | None = None,
        agent_id: str | None = None, type: str | None = None, limit: int = 500,
    ):
        run_dir = get_run(run_id)
        if limit < 1:
            raise HTTPException(416, {"error": "tick_out_of_range",
                                      "ticks": manifest_for(run_dir).get("time", {}).get("ticks", 0)}) from None
        values = [event for event in _read_events(run_dir / "events.ndjson")
                  if event["tick"] > after and (until is None or event["tick"] <= until)
                  and (agent_id is None or event.get("agent_id") == agent_id)
                  and (type is None or event.get("type") == type)]
        page = values[:min(limit, 5000)]
        next_after = page[-1]["tick"] if len(values) > len(page) and page else None
        if "application/x-ndjson" in request.headers.get("accept", ""):
            body = b"".join((json.dumps(item, sort_keys=True, ensure_ascii=False) + "\n").encode()
                            for item in page)
            cached = cached_json(request, {"events": page, "next_after": next_after},
                                 response_sources(run_dir, "events.ndjson"), run_dir)
            if cached.status_code == 304:
                return cached
            headers = dict(cached.headers)
            headers.pop("content-type", None)
            headers.pop("content-length", None)
            return Response(body, media_type="application/x-ndjson", headers=headers)
        return cached_json(request, {"events": page, "next_after": next_after},
                           response_sources(run_dir, "events.ndjson"), run_dir)

    @app.get("/api/v1/runs/{run_id}/agents/{agent_id}")
    async def agent_detail(run_id: str, agent_id: str, request: Request, at: str | None = None):
        run_dir = get_run(run_id)
        manifest = manifest_for(run_dir)
        identity = next((item for item in manifest.get("agents", [])
                         if item.get("agent_id") == agent_id or item.get("native_id") == agent_id), None)
        if identity is None:
            raise HTTPException(404, {"error": "unknown_agent"})
        world, tick = world_for(run_dir, manifest, at)
        state = next(item for item in world["agents"] if item["agent_id"] == identity["agent_id"])
        entities = _read_entities(run_dir)
        def recent(kind):
            return sorted((item for item in entities.get(kind, {}).values()
                           if item.get("agent_id") == identity["agent_id"]
                           and (item.get("tick") is None or item.get("tick") <= tick)),
                          key=lambda item: item.get("tick") or -1, reverse=True)
        latest = {name: recent(kind) for name, kind in (
            ("question", "questions"), ("observation", "observations"),
            ("hypothesis", "hypotheses"), ("experiment", "experiments"), ("diary", "diary"),
        )}
        events_for_agent = [event for event in _read_events(run_dir / "events.ndjson")
                            if event.get("agent_id") == identity["agent_id"] and event["tick"] <= tick]
        value = {
            "identity": {"agent_id": identity["agent_id"], "native_id": identity["native_id"],
                         "display_name": identity.get("label", identity["native_id"]),
                         "type": identity.get("type")},
            "state": state,
            "current": {key: items[0] for key, items in latest.items() if items},
            "recent": {
                "questions": latest["question"][:5], "observations": latest["observation"][:5],
                "diary": latest["diary"][:5],
                "rewards": sorted((item for item in entities.get("rewards", {}).values()
                                   if item.get("agent_id") == identity["agent_id"]
                                   and (item.get("tick") is None or item.get("tick") <= tick)),
                                  key=lambda item: item.get("tick") or -1, reverse=True)[:5],
            },
            "history": {
                "B": [[e["tick"], e["payload"].get("B")] for e in events_for_agent
                      if e["type"] == "boredom.measured"],
                "reward": [[item.get("tick"), item.get("value")] for item in recent("rewards")],
                "roles": [[e["tick"], e["payload"].get("role")] for e in events_for_agent
                          if e["type"] == "agent.assigned"],
            },
        }
        return cached_json(request, value, response_sources(run_dir, "events.ndjson"), run_dir)

    @app.get("/api/v1/runs/{run_id}/agents/{agent_id}/{collection}")
    async def agent_collection(
        run_id: str, agent_id: str, collection: str, request: Request,
        until: int | None = None, limit: int = 100, before: int | None = None,
    ):
        run_dir = get_run(run_id)
        manifest = manifest_for(run_dir)
        identity = next((item for item in manifest.get("agents", [])
                         if item.get("agent_id") == agent_id or item.get("native_id") == agent_id), None)
        if identity is None:
            raise HTTPException(404, {"error": "unknown_agent"})
        kind = COLLECTIONS.get(collection)
        if kind is None:
            raise HTTPException(404, {"error": "unknown_entity"})
        values = list(_read_entities(run_dir).get(kind, {}).values())
        cutoff = until if until is not None else manifest.get("time", {}).get("ticks", 0) - 1
        values = [item for item in values if item.get("agent_id") == identity["agent_id"]
                  and (item.get("tick") is None or item.get("tick") <= cutoff)
                  and (before is None or item.get("tick") is None or item.get("tick") < before)]
        values.sort(key=lambda item: item.get("tick") if item.get("tick") is not None else -1, reverse=True)
        return cached_json(request, values[:max(1, min(limit, 1000))],
                           response_sources(run_dir, f"entities/{kind}.json"), run_dir)

    @app.get("/api/v1/runs/{run_id}/ledger")
    async def ledger(
        run_id: str, request: Request, until: int | None = None,
        agent_id: str | None = None, status: str | None = None,
    ):
        run_dir = get_run(run_id)
        manifest = manifest_for(run_dir)
        entities = _read_entities(run_dir).get("experiments", {}).values()
        roster = {item["agent_id"]: item["native_id"] for item in manifest.get("agents", [])}
        values = [item for item in entities
                  if (until is None or (item.get("end_tick") or item.get("start_tick") or 0) <= until)
                  and (agent_id is None or item.get("agent_id") == agent_id
                       or roster.get(item.get("agent_id")) == agent_id)
                  and (status is None or item.get("status") == status)]
        values.sort(key=lambda item: item.get("start_tick") or -1)
        return cached_json(request, values, response_sources(run_dir, "entities/experiments.json"), run_dir)

    @app.get("/api/v1/runs/{run_id}/discoveries")
    async def discoveries(run_id: str, request: Request, until: int | None = None):
        run_dir = get_run(run_id)
        values = list(_read_entities(run_dir).get("discoveries", {}).values())
        if until is not None:
            values = [item for item in values if item.get("tick") is None or item.get("tick") <= until]
        values.sort(key=lambda item: item.get("tick") or -1)
        return cached_json(request, values, response_sources(run_dir, "entities/discoveries.json"), run_dir)

    @app.get("/api/v1/runs/{run_id}/entities/{kind}/{entity_id}")
    async def entity(run_id: str, kind: str, entity_id: str, request: Request):
        run_dir = get_run(run_id)
        kind = ENTITY_ALIASES.get(kind, kind)
        value = _read_entities(run_dir).get(kind, {}).get(entity_id)
        if value is None:
            raise HTTPException(404, {"error": "unknown_entity"})
        return cached_json(request, {**value, "native": value.get("native")},
                           response_sources(run_dir, f"entities/{kind}.json"), run_dir)

    @app.get("/api/v1/runs/{run_id}/artifacts/{artifact_path:path}")
    async def artifact(run_id: str, artifact_path: str, request: Request):
        run_dir = get_run(run_id)
        artifact_root = (run_dir / "artifacts").resolve()
        target = (artifact_root / artifact_path).resolve()
        if (run_dir not in artifact_root.parents or Path(artifact_path).is_absolute()
                or ".." in Path(artifact_path).parts
                or target == artifact_root or artifact_root not in target.parents or not target.is_file()):
            raise HTTPException(404, {"error": "unknown_entity"})
        data = target.read_bytes()
        manifest = manifest_for(run_dir)
        headers = {}
        if manifest.get("status") in {"finished", "stopped"}:
            headers["ETag"] = '"' + hashlib.sha256(data).hexdigest() + '"'
            headers["Cache-Control"] = "public, max-age=31536000, immutable"
        else:
            stat = target.stat()
            headers["ETag"] = f'W/"{stat.st_mtime_ns:x}-{stat.st_size:x}"'
            headers["Cache-Control"] = "no-cache"
        if request.headers.get("if-none-match") == headers["ETag"]:
            return Response(status_code=304, headers=headers)
        return Response(data, media_type=mimetypes.guess_type(target.name)[0] or "application/octet-stream",
                        headers=headers)

    @app.get("/api/v1/runs/{run_id}/stream")
    async def stream(run_id: str, request: Request, after: int | None = None):
        run_dir = get_run(run_id)
        header_id = request.headers.get("last-event-id")
        try:
            last_tick = int(header_id) if header_id is not None else (after if after is not None else -1)
        except ValueError:
            raise HTTPException(416, {"error": "tick_out_of_range",
                                      "ticks": manifest_for(run_dir).get("time", {}).get("ticks", 0)}) from None

        async def generate():
            cursor = last_tick
            heartbeat = time.monotonic()
            event_path = run_dir / "events.ndjson"
            offset = 0
            pending = b""
            inode = None
            last_size = 0
            while not await request.is_disconnected():
                try:
                    stat = event_path.stat()
                    if stat.st_size < last_size or (inode is not None and stat.st_ino != inode):
                        offset, pending = 0, b""
                    inode = stat.st_ino
                    last_size = stat.st_size
                    if stat.st_size > offset:
                        with event_path.open("rb") as stream:
                            stream.seek(offset)
                            chunk = stream.read()
                        offset += len(chunk)
                        lines = (pending + chunk).split(b"\n")
                        pending = lines.pop()
                        for line in lines:
                            if not line:
                                continue
                            try:
                                event = json.loads(line)
                            except (UnicodeDecodeError, json.JSONDecodeError):
                                continue
                            if event["tick"] <= cursor:
                                continue
                            cursor = event["tick"]
                            data = json.dumps(event, ensure_ascii=False, separators=(",", ":"))
                            yield f"event: swarm-event\nid: {cursor}\ndata: {data}\n\n"
                except FileNotFoundError:
                    pass
                manifest = manifest_for(run_dir)
                if manifest.get("status") in {"finished", "stopped"}:
                    yield "event: run.status\ndata: " + json.dumps({"status": manifest["status"]}) + "\n\n"
                    return
                now = time.monotonic()
                if now - heartbeat >= heartbeat_interval:
                    heartbeat = now
                    yield "event: run.status\ndata: " + json.dumps({"status": "running"}) + "\n\n"
                await asyncio.sleep(poll_interval)

        return StreamingResponse(generate(), media_type="text/event-stream",
                                 headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    return app


app = create_app()
