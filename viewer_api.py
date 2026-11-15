"""Read-only FastAPI service for swarm-viewer/v1 exports.

Serves the directory written by export_viewer.py (index.json plus one folder
per run) under /api/v1, as specified in docs/swarm-viewer-api.md. GET only:
the server never runs a swarm and holds no credentials.
"""
import argparse
import asyncio
import hashlib
import json
import threading
from pathlib import Path

from fastapi import APIRouter, FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, JSONResponse, Response, StreamingResponse

import export_viewer

COLLECTIONS = ("questions", "observations", "hypotheses", "experiments", "rewards", "diary", "memory",
               "llm_calls")
KINDS = {kind.rstrip("s"): kind for kind in COLLECTIONS + ("sources", "discoveries")}
KINDS.update(diary="diary", discovery="discoveries", memory="memory", entry="diary")
TIMELINE_FIELDS = ("prompt", "response", "reasoning")
HEARTBEAT_SECONDS = 15
POLL_SECONDS = 1.0


def error(status, code, **extra):
    raise HTTPException(status, {"error": code, **extra})


class RunData:
    """One exported run, loaded once and reloaded if events.ndjson changes."""

    def __init__(self, directory):
        self.dir = directory
        self.stamp = None
        self.load()

    def changed(self):
        stat = (self.dir / "events.ndjson").stat()
        return (stat.st_mtime_ns, stat.st_size) != self.stamp

    def load(self):
        """Read everything first and swap it in at once, so a half-written export keeps the old state."""
        stat = (self.dir / "events.ndjson").stat()
        read = lambda name: json.loads((self.dir / name).read_text(encoding="utf-8"))
        manifest = read("manifest.json")
        timeline = read("timeline.json")
        events = [json.loads(line) for line in
                  (self.dir / "events.ndjson").read_text(encoding="utf-8").splitlines() if line.strip()]
        entities = {}
        for path in sorted((self.dir / "entities").glob("*.json")):
            entities[path.stem] = {entity["id"]: entity for entity in json.loads(path.read_text())}
        for kind in COLLECTIONS + ("sources", "discoveries"):
            entities.setdefault(kind, {})
        entity_tick = {}
        for event in events:
            for ref in event["refs"].values():
                entity_tick.setdefault(ref, event["tick"])
        stamp = (stat.st_mtime_ns, stat.st_size)
        self.manifest, self.timeline, self.events, self.entities = manifest, timeline, events, entities
        self.keyframes = {tick: None for tick in timeline.get("keyframes", [])}
        self.agents = {a["agent_id"]: a for a in manifest["agents"]}
        self.entity_tick = entity_tick
        self.etag_base = hashlib.sha1(repr(stamp).encode()).hexdigest()[:16]
        self.stamp = stamp

    @property
    def last_tick(self):
        return len(self.events) - 1

    def tick_of(self, entity):
        for key in ("tick", "start_tick"):
            if entity.get(key) is not None:
                return entity[key]
        return self.entity_tick.get(entity["id"])

    def keyframe(self, tick):
        if self.keyframes.get(tick) is None:
            self.keyframes[tick] = json.loads((self.dir / "keyframes" / f"{tick}.json").read_text())
        return self.keyframes[tick]

    def world(self, tick):
        if tick in self.keyframes:
            return self.keyframe(tick)
        base = max((k for k in self.keyframes if k <= tick), default=None)
        frames = {base: self.keyframe(base)} if base is not None else {}
        return export_viewer.world_at(self.events, self.manifest, self.entities, tick, frames)

    def resolve(self, tick=None, round_=None, ts=None):
        """Turn the spec's time selectors (tick | round | ts) into one tick; default = last tick."""
        if self.last_tick < 0:
            error(416, "tick_out_of_range", ticks=0)
        if tick is not None:
            if not 0 <= tick <= self.last_tick:
                error(416, "tick_out_of_range", ticks=len(self.events))
            return tick
        if round_ is not None:
            ends = [r["tick_end"] for r in self.timeline["rounds"] if r["round"] == round_]
            if not ends:
                error(416, "tick_out_of_range", ticks=len(self.events))
            return ends[0]
        if ts is not None:
            stamped = [e["tick"] for e in self.events if e["ts"] and e["ts"] <= ts]
            if not stamped:
                error(416, "tick_out_of_range", ticks=len(self.events))
            return stamped[-1]
        return self.last_tick

    def for_agent(self, kind, agent_id):
        key = "author_agent_id" if kind == "memory" else "agent_id"
        return [e for e in self.entities[kind].values() if e.get(key) == agent_id]

    def until(self, items, until=None, before=None):
        out = []
        for item in items:
            tick = self.tick_of(item)
            if until is not None and (tick is None or tick > until):
                continue
            if before is not None and (tick is None or tick >= before):
                continue
            out.append(item)
        return sorted(out, key=lambda e: (self.tick_of(e) if self.tick_of(e) is not None else -1, e["id"]))


class Store:
    def __init__(self, data_dir):
        self.data_dir = Path(data_dir)
        self.runs = {}
        self.lock = threading.Lock()

    def index(self):
        path = self.data_dir / "index.json"
        if not path.exists():
            return []
        return json.loads(path.read_text(encoding="utf-8"))["runs"]

    def get(self, run_id):
        directory = self.data_dir / run_id
        if "/" in run_id or ".." in run_id or not (directory / "manifest.json").is_file():
            error(404, "unknown_run")
        with self.lock:
            run = self.runs.get(run_id)
            if run is None:
                run = self.runs[run_id] = RunData(directory)
            elif run.changed():
                try:
                    run.load()
                except (OSError, ValueError, KeyError):
                    pass  # export still being written: serve the previous state, retry next request
            return run


def without_bodies(entity):
    return {k: v for k, v in entity.items() if k not in TIMELINE_FIELDS}


def cached(request, run, payload):
    """JSON with an ETag; completed runs are immutable so clients may cache forever."""
    body = json.dumps(payload, sort_keys=True, ensure_ascii=False).encode("utf-8")
    etag = f'"{run.etag_base}-{hashlib.sha1(body).hexdigest()[:16]}"' if run else None
    headers = {}
    if etag:
        headers["ETag"] = etag
        if run.manifest.get("status") == "completed" and not run.manifest.get("live"):
            headers["Cache-Control"] = "public, max-age=31536000, immutable"
        if request.headers.get("if-none-match") == etag:
            return Response(status_code=304, headers=headers)
    return Response(body, media_type="application/json", headers=headers)


def create_router(store):
    router = APIRouter(prefix="/api/v1")

    @router.get("/runs")
    def runs(request: Request):
        return cached(request, None, store.index())

    @router.get("/runs/{run_id}")
    def manifest(run_id: str, request: Request):
        run = store.get(run_id)
        return cached(request, run, run.manifest)

    @router.get("/runs/{run_id}/timeline")
    def timeline(run_id: str, request: Request):
        run = store.get(run_id)
        return cached(request, run, run.timeline)

    @router.get("/runs/{run_id}/world")
    def world(run_id: str, request: Request, tick: int | None = None, round: int | None = None,
              ts: str | None = None):
        run = store.get(run_id)
        return cached(request, run, run.world(run.resolve(tick, round, ts)))

    @router.get("/runs/{run_id}/events")
    def events(run_id: str, request: Request, after: int = -1, until: int | None = None,
               agent_id: str | None = None, type: str | None = None, limit: int = 500):
        run = store.get(run_id)
        limit = max(1, min(limit, 5000))
        stop = run.last_tick if until is None else min(until, run.last_tick)
        selected, next_after = [], None
        for event in run.events[max(after + 1, 0):stop + 1]:
            if agent_id and event["agent_id"] != agent_id:
                continue
            if type and event["type"] != type and not event["type"].startswith(type.rstrip("*")):
                continue
            if len(selected) == limit:
                next_after = selected[-1]["tick"]
                break
            selected.append(event)
        if "application/x-ndjson" in request.headers.get("accept", ""):
            body = "".join(json.dumps(e, sort_keys=True, ensure_ascii=False) + "\n" for e in selected)
            return Response(body, media_type="application/x-ndjson")
        return cached(request, run, {"events": selected, "next_after": next_after})

    @router.get("/runs/{run_id}/agents/{agent_id}")
    def agent(run_id: str, agent_id: str, request: Request, tick: int | None = None,
              round: int | None = None, ts: str | None = None):
        run = store.get(run_id)
        identity = run.agents.get(agent_id)
        if identity is None:
            error(404, "unknown_agent")
        at = run.resolve(tick, round, ts)
        state = next(a for a in run.world(at)["agents"] if a["agent_id"] == agent_id)
        ents = run.entities
        focus = state.get("focus") or {}
        current = {
            "question": ents["questions"].get(state.get("last_question_id") or focus.get("question_id")),
            "observation": ents["observations"].get(state.get("last_observation_id")),
            "hypothesis": ents["hypotheses"].get(focus.get("hypothesis_id")),
            "experiment": ents["experiments"].get(focus.get("experiment_id")),
            "diary": ents["diary"].get((state.get("diary_head") or {}).get("diary_id")),
        }
        recent = {kind: run.until(run.for_agent(kind, agent_id), at)[-5:][::-1]
                  for kind in ("questions", "observations", "diary", "rewards")}
        b_series = run.timeline["series"]["agent_B"].get(agent_id, [])
        history = {
            "B": [point for point in b_series if point[0] <= at],
            "reward": [[run.tick_of(r), r["value"]] for r in run.until(run.for_agent("rewards", agent_id), at)],
            "roles": [[e["tick"], e["payload"].get("role")] for e in run.events[:at + 1]
                      if e["type"] == "agent.assigned" and e["agent_id"] == agent_id],
        }
        return cached(request, run, {
            "identity": identity, "tick": at, "state": state,
            "current": {k: v for k, v in current.items() if v is not None},
            "recent": recent, "history": history,
        })

    @router.get("/runs/{run_id}/agents/{agent_id}/{collection}")
    def agent_collection(run_id: str, agent_id: str, collection: str, request: Request,
                         until: int | None = None, before: int | None = None, limit: int = 50):
        run = store.get(run_id)
        if agent_id not in run.agents:
            error(404, "unknown_agent")
        if collection not in COLLECTIONS:
            error(404, "unknown_collection", collections=list(COLLECTIONS))
        items = run.until(run.for_agent(collection, agent_id), until, before)[::-1][:max(1, min(limit, 500))]
        if collection == "llm_calls":
            items = [without_bodies(item) for item in items]
        return cached(request, run, items)

    @router.get("/runs/{run_id}/ledger")
    def ledger(run_id: str, request: Request, until: int | None = None, agent_id: str | None = None,
               status: str | None = None):
        run = store.get(run_id)
        items = run.until(run.entities["experiments"].values(), until)
        items = [e for e in items if (not agent_id or e.get("agent_id") == agent_id)
                 and (not status or e.get("status") == status)]
        return cached(request, run, items)

    @router.get("/runs/{run_id}/discoveries")
    def discoveries(run_id: str, request: Request, until: int | None = None):
        run = store.get(run_id)
        return cached(request, run, run.until(run.entities["discoveries"].values(), until))

    @router.get("/runs/{run_id}/entities/{kind}/{entity_id:path}")
    def entity(run_id: str, kind: str, entity_id: str, request: Request):
        run = store.get(run_id)
        table = run.entities.get(KINDS.get(kind, kind))
        if table is None:
            error(404, "unknown_entity")
        found = table.get(entity_id) or table.get(f"{kind}:{entity_id}")
        if found is None:
            error(404, "unknown_entity")
        return cached(request, run, {**found, "tick": run.tick_of(found)})

    @router.get("/runs/{run_id}/artifacts/{path:path}")
    def artifact(run_id: str, path: str):
        run = store.get(run_id)
        root = (run.dir / "artifacts").resolve()
        target = (root / path).resolve()
        if root not in target.parents or not target.is_file():
            error(404, "unknown_artifact")
        return FileResponse(target, media_type="text/plain; charset=utf-8")

    @router.get("/runs/{run_id}/stream")
    async def stream(run_id: str, request: Request, after: int = -1):
        run = store.get(run_id)
        last_id = request.headers.get("last-event-id")
        cursor = int(last_id) if last_id and last_id.lstrip("-").isdigit() else after

        async def feed():
            nonlocal cursor
            idle = 0.0
            while not await request.is_disconnected():
                current = store.get(run_id)
                fresh = current.events[cursor + 1:]
                for event in fresh:
                    data = json.dumps(event, sort_keys=True, ensure_ascii=False)
                    yield f"event: swarm-event\nid: {event['tick']}\ndata: {data}\n\n"
                    cursor = event["tick"]
                done = current.manifest.get("status") != "running" and not current.manifest.get("live")
                if fresh or done or idle >= HEARTBEAT_SECONDS:
                    status = {"status": current.manifest.get("status"), "ticks": len(current.events)}
                    yield f"event: run.status\ndata: {json.dumps(status)}\n\n"
                    idle = 0.0
                if done:
                    return
                await asyncio.sleep(POLL_SECONDS)
                idle += POLL_SECONDS

        return StreamingResponse(feed(), media_type="text/event-stream",
                                 headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"})

    return router


def create_app(data_dir="lab/data/runs"):
    app = FastAPI(title="swarm-viewer/v1", version="1", docs_url="/api/v1/docs",
                  openapi_url="/api/v1/openapi.json")
    app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["GET"], allow_headers=["*"])

    @app.exception_handler(HTTPException)
    async def json_errors(request, exc):
        detail = exc.detail if isinstance(exc.detail, dict) else {"error": str(exc.detail)}
        return JSONResponse(detail, status_code=exc.status_code)

    app.include_router(create_router(Store(data_dir)))
    return app


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--data", type=Path, default=Path("lab/data/runs"), help="export_viewer.py --dest dir")
    parser.add_argument("--export", type=Path, nargs="*", default=[], help="run dirs to export first")
    parser.add_argument("--host", default="127.0.0.1")
    parser.add_argument("--port", type=int, default=8000)
    args = parser.parse_args(argv)
    for run_dir in args.export:
        export_viewer.export(run_dir, args.data)
    import uvicorn
    uvicorn.run(create_app(args.data), host=args.host, port=args.port)


if __name__ == "__main__":
    main()
