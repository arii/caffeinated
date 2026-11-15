import json
import sqlite3
import threading
import time
from pathlib import Path

ACTIVE = {"queued", "starting", "running", "stopping"}


def initial_snapshot(run_id, config, commit):
    cpu = config["mode"] == "tinker_cpu"
    return {
        "runId": run_id,
        "lastSequence": 0,
        "status": "queued",
        "createdAt": time.time(),
        "config": config,
        "sourceCommit": commit,
        "progress": 0,
        "round": 0,
        "boredom": 0,
        "regime": "EXPLOIT",
        "value": None,
        "reference": None,
        "agents": [],
        "findings": [],
        "results": [],
        "sources": [],
        "error": None,
        "metric": {
            "name": "Task loss" if cpu else "val_bpb",
            "unit": "" if cpu else "bits/byte",
            "direction": "minimize",
        },
        "provenance": {
            "llm": "tinker",
            "gpu": "cpu-docker" if cpu else "modal",
            "exa": "off",
            "memory": "local",
        },
    }


def apply(snapshot, kind, payload):
    s = snapshot
    if kind == "run.status":
        s["status"] = payload["status"]
        s["error"] = payload.get("error")
        if s["status"] == "completed":
            s["progress"] = 1
        if s["status"] not in ACTIVE:
            s["agents"] = [
                {**a, "state": "reviewing" if s["status"] == "completed" else "idle"}
                for a in s["agents"]
            ]
    elif kind == "run.metadata":
        s.update(payload)
    elif kind == "agent.updated":
        previous = next((a for a in s["agents"] if a["id"] == payload["id"]), {})
        if "boredomSpectrum" in previous:
            payload = {
                **payload,
                "boredom": previous["boredom"],
                "boredomSpectrum": previous["boredomSpectrum"],
            }
        s["agents"] = [a for a in s["agents"] if a["id"] != payload["id"]] + [payload]
        s["agents"].sort(key=lambda a: a["id"])
    elif kind == "agent.boredom":
        for a in s["agents"]:
            if a["id"] == payload["id"]:
                a["boredom"] = payload["boredom"]
                a["boredomSpectrum"] = payload["boredomSpectrum"]
    elif kind == "round.assigned":
        s["round"] = payload["round"]
        s["boredom"] = payload["boredom"]
        s["regime"] = payload["regime"]
        s["progress"] = min(
            0.95, max(s["progress"], (payload["round"] - 1) / s["config"]["rounds"])
        )
    elif kind == "meter.updated":
        s["boredom"] = payload["boredom"]
        s["regime"] = payload["regime"]
    elif kind == "experiment.result":
        s["results"] = (s["results"] + [payload])[-150:]
        value = payload.get("value")
        if payload["kind"] == "baseline":
            s["reference"] = value
        elif payload.get("status") == "keep" and value is not None:
            s["value"] = value if s["value"] is None else min(s["value"], value)
    elif kind == "finding.written":
        s["findings"] = (s["findings"] + [payload])[-150:]
    elif kind == "source.found":
        s["sources"] = (s["sources"] + [payload])[-100:]
    return s


class Store:
    def __init__(self, path):
        self.path = Path(path)
        self.path.parent.mkdir(parents=True, exist_ok=True)
        self.lock = threading.RLock()
        with self.connect() as db:
            db.executescript("""PRAGMA journal_mode=WAL;
            CREATE TABLE IF NOT EXISTS runs(id TEXT PRIMARY KEY,snapshot TEXT NOT NULL);
            CREATE TABLE IF NOT EXISTS events(run_id TEXT,seq INTEGER,source TEXT,type TEXT,payload TEXT,created REAL,
            PRIMARY KEY(run_id,seq),UNIQUE(run_id,source));""")

    def connect(self):
        db = sqlite3.connect(self.path, timeout=20)
        db.row_factory = sqlite3.Row
        return db

    def create(self, run_id, config, commit):
        s = initial_snapshot(run_id, config, commit)
        with self.lock, self.connect() as db:
            db.execute("INSERT INTO runs VALUES (?,?)", (run_id, json.dumps(s)))
        return s

    def get(self, run_id):
        with self.connect() as db:
            row = db.execute("SELECT snapshot FROM runs WHERE id=?", (run_id,)).fetchone()
        return json.loads(row[0]) if row else None

    def list(self):
        with self.connect() as db:
            rows = db.execute("SELECT snapshot FROM runs ORDER BY rowid DESC LIMIT 100").fetchall()
        return [json.loads(r[0]) for r in rows]

    def append(self, run_id, source, kind, payload):
        with self.lock, self.connect() as db:
            db.execute("BEGIN IMMEDIATE")
            if db.execute(
                "SELECT 1 FROM events WHERE run_id=? AND source=?", (run_id, source)
            ).fetchone():
                return False
            row = db.execute("SELECT snapshot FROM runs WHERE id=?", (run_id,)).fetchone()
            if row is None:
                raise KeyError(run_id)
            s = json.loads(row[0])
            seq = s["lastSequence"] + 1
            s = apply(s, kind, payload)
            s["lastSequence"] = seq
            db.execute(
                "INSERT INTO events VALUES (?,?,?,?,?,?)",
                (run_id, seq, source, kind, json.dumps(payload), time.time()),
            )
            db.execute("UPDATE runs SET snapshot=? WHERE id=?", (json.dumps(s), run_id))
        return True

    def events(self, run_id, after=0):
        with self.connect() as db:
            rows = db.execute(
                "SELECT * FROM events WHERE run_id=? AND seq>? ORDER BY seq", (run_id, after)
            ).fetchall()
        return [
            {
                "runId": r["run_id"],
                "sequence": r["seq"],
                "sourceRef": r["source"],
                "type": r["type"],
                "payload": json.loads(r["payload"]),
                "time": r["created"],
            }
            for r in rows
        ]
