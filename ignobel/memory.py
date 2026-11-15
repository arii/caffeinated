"""Private per-agent memory, a shared store for the control arm, a past.dev backend, and share().

Protocol: write(item), search(query, k). Nothing is shared automatically.
"""
import json
import os
import queue
import threading
import time
from datetime import datetime, timezone
from typing import Literal, Protocol
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import quote
from urllib.request import Request, urlopen

import numpy as np
from pydantic import BaseModel, Field

import llm

Kind = Literal["idea", "hypothesis", "prediction", "result", "failure", "library"]


class Item(BaseModel):
    id: str
    kind: Kind
    text: str
    source_agent: str
    meta: dict = Field(default_factory=dict)
    embedding: list[float] | None = None


class Memory(Protocol):
    def write(self, item: Item) -> None: ...
    def search(self, query: str, k: int) -> list[Item]: ...


class LocalMemory:
    """In-process store with embedding search."""

    def __init__(self):
        self.items: list[Item] = []

    def write(self, item: Item) -> None:
        if item.embedding is None:
            item.embedding = llm.embed([item.text])[0].tolist()
        self.items.append(item)

    def search(self, query: str, k: int) -> list[Item]:
        if not self.items or k <= 0:
            return []
        q = llm.embed([query])[0]
        mat = np.array([it.embedding for it in self.items])
        sims = mat @ q
        order = np.argsort(-sims, kind="stable")[:k]
        return [self.items[i] for i in order]

    def centroid(self) -> np.ndarray:
        if not self.items:
            return np.zeros(llm.embed_dim())
        return np.mean([it.embedding for it in self.items], axis=0)

    def to_state(self) -> dict:
        return {"items": [it.model_dump() for it in self.items]}

    def load_state(self, st: dict) -> None:
        self.items = [Item(**d) for d in st["items"]]


class SharedMemory(LocalMemory):
    """One store handed to every agent (control arm). Items keep their source_agent tag."""


API_BASE = os.environ.get("PAST_BASE_URL", "https://api.past.dev").rstrip("/") + "/api/v1"
REMOTE_KINDS = {"idea", "hypothesis", "result", "failure"}  # papers stay in the lab's local library


def _api(method: str, path: str, body: dict | None = None, key: str | None = None) -> dict:
    data = None if body is None else json.dumps(body).encode("utf-8")
    for attempt in range(4):
        req = Request(API_BASE + path, data=data, method=method,
                      headers={"Authorization": f"Bearer {key}", "Content-Type": "application/json",
                               "Accept": "application/json"})
        try:
            with urlopen(req, timeout=60) as resp:
                raw = resp.read().decode("utf-8")
                return json.loads(raw) if raw else {}
        except HTTPError as e:
            if e.code not in (429, 500, 502, 503, 504) or attempt == 3:
                raise RuntimeError(f"past.dev {method} {path}: HTTP {e.code} {e.read()[:300]!r}") from e
        except URLError:
            if attempt == 3:
                raise
        time.sleep(2 ** attempt)
    return {}


def _now() -> str:
    return datetime.now(timezone.utc).isoformat().replace("+00:00", "Z")


class PastDevRun:
    """One run's past.dev project state: identities, audiences, a background writer, a log.

    Every lab is an identity with a private audience and an inbox audience that only it (and the
    run's deck observer) can read. Labs never share an audience: another lab's findings reach a lab
    only when share() writes them into its inbox. The outsider identity can read none of them.
    A hypothesis keeps one source id; its study result is a new version of the same id, so
    past.dev answers "what is the current status" and keeps the proposal as superseded history.
    """

    def __init__(self, tag: str, out_dir: str | Path, api_key: str | None = None):
        self.tag, self.key = tag, api_key or os.environ.get("PAST_API_KEY")
        if not self.key:
            raise RuntimeError("PAST_API_KEY is required for the pastdev memory backend")
        self.log_path = Path(out_dir) / "pastdev_log.jsonl"
        self.labs: set[str] = set()
        self.authors: dict[str, str] = {}
        self.pending: dict[str, str] = {}  # source id -> ingestion id still processing
        self.latest: dict[str, str] = {}   # stable source id -> its newest ingestion id
        self.queue: queue.Queue = queue.Queue()
        self.lock = threading.Lock()
        for name, traits in (("deck", {"deck": tag}), ("outsider", {"outsider": tag})):
            _api("PUT", f"/identities/{quote(self.ident(name))}", {"traits": traits}, self.key)
        threading.Thread(target=self._writer, daemon=True).start()

    def ident(self, name: str) -> str:
        return f"fam-{self.tag}-{name}"

    def audience(self, kind: str, lab: str) -> str:
        return f"fam-{self.tag}-{kind}-{lab}"

    def source_id(self, item_id: str) -> str:
        return f"fam-{self.tag}-{item_id}"

    def _log(self, rec: dict) -> None:
        with self.lock, self.log_path.open("a", encoding="utf-8") as f:
            f.write(json.dumps({"ts": _now(), **rec}) + "\n")

    def ensure_lab(self, lab: str) -> None:
        if lab in self.labs:
            return
        lab_key = f"{self.tag}-{lab}"
        _api("PUT", f"/identities/{quote(self.ident(lab))}", {"traits": {"lab_key": lab_key}}, self.key)
        rule = {"match": "any", "conditions": [
            {"trait": "lab_key", "operator": "is", "values": [lab_key]},
            {"trait": "deck", "operator": "is", "values": [self.tag]}]}
        for kind in ("private", "inbox"):
            slug = self.audience(kind, lab)
            _api("PUT", f"/audiences/{quote(slug)}", {"kind": "rule", "name": slug, "rule": rule}, self.key)
        self.labs.add(lab)
        self._log({"type": "identity", "lab": lab, "identity": self.ident(lab)})

    def write(self, item: Item, reader: str, inbox: bool) -> None:
        """Queue one data point. reader is the lab whose audience holds it; the author is item.source_agent."""
        self.ensure_lab(reader)
        self.ensure_lab(item.source_agent)
        sid = self.source_id(item.id)
        self.authors[sid] = item.source_agent
        with self.lock:
            self.pending[sid] = "queued"
        self.queue.put({"id": sid, "identity": self.ident(item.source_agent),
                        "audience": self.audience("inbox" if inbox else "private", reader),
                        "label": f"{item.kind} by {item.source_agent}"[:120], "content": item.text,
                        "timestamp": _now(), "metadata": {"kind": item.kind, **_flat(item.meta)}})

    def _status(self, ingestion_id: str) -> str:
        return str(_api("GET", f"/ingest/{ingestion_id}", None, self.key).get("status"))

    def _writer(self) -> None:
        while True:
            try:
                payload = self.queue.get(timeout=10)
            except queue.Empty:
                self._poll()
                continue
            try:
                prev = self.latest.get(payload["id"])
                deadline = time.monotonic() + 900
                while prev and time.monotonic() < deadline and self._status(prev) not in ("completed", "failed"):
                    time.sleep(5)  # a new version of a stable id goes out after the one it supersedes
                started = time.monotonic()
                resp = _api("POST", "/ingest", payload, self.key)
                ing = str(resp.get("ingestionId") or "")
                with self.lock:
                    self.latest[payload["id"]] = ing
                    self.pending[payload["id"]] = ing
                self._log({"type": "write", "id": payload["id"], "identity": payload["identity"],
                           "audience": payload["audience"], "label": payload["label"], "ingestionId": ing,
                           "superseding": bool(prev), "ms": round((time.monotonic() - started) * 1000)})
            except Exception as e:  # a failed write must not stop the run; it is logged
                self._log({"type": "write_error", "id": payload["id"], "error": str(e)[:300]})
                with self.lock:
                    self.pending.pop(payload["id"], None)
            finally:
                self.queue.task_done()

    def _poll(self) -> None:
        with self.lock:
            waiting = [(sid, ing) for sid, ing in self.pending.items() if ing and ing != "queued"]
        for sid, ing in waiting:
            try:
                status = self._status(ing)
            except Exception:
                continue
            if status in ("completed", "failed"):
                with self.lock:
                    if self.pending.get(sid) == ing:
                        self.pending.pop(sid)
                self._log({"type": "settled", "id": sid, "status": status})

    def is_pending(self, item_id: str) -> bool:
        with self.lock:
            return self.source_id(item_id) in self.pending

    def recall(self, reader: str, query: str, k: int, at: str | None = None) -> list[dict]:
        body = {"query": query, "identity": self.ident(reader), "limit": k}
        if at:
            body["queryTimestamp"] = at
        started = time.monotonic()
        try:
            resp = _api("POST", "/recall", body, self.key)
        except Exception as e:
            self._log({"type": "recall_error", "reader": reader, "error": str(e)[:300]})
            return []
        out = []
        for r in resp.get("results") or []:
            sources = r.get("sources") or []
            sids = [str(s.get("sourceId")) for s in sources if s.get("sourceId")]
            out.append({"content": r.get("content") or "", "occurredAt": r.get("occurredAt"),
                        "supersededAt": (r.get("artifact") or {}).get("supersededAt"),
                        "sourceIds": sids, "authors": sorted({self.authors.get(s, "?") for s in sids}),
                        "excerpts": [x for s in sources for x in (s.get("excerpts") or [])][:2]})
        self._log({"type": "recall", "reader": reader, "query": query[:200], "at": at,
                   "ms": round((time.monotonic() - started) * 1000), "n": len(out),
                   "authors": sorted({a for r in out for a in r["authors"]}),
                   "superseded": sum(1 for r in out if r["supersededAt"]),
                   "pending": (resp.get("pending") or {}).get("ingestions") if isinstance(resp.get("pending"), dict) else None})
        return out

    def flush(self, settle_s: float = 600) -> None:
        self.queue.join()
        deadline = time.monotonic() + settle_s
        while time.monotonic() < deadline:
            self._poll()
            with self.lock:
                if not self.pending:
                    return
            time.sleep(10)


def _flat(meta: dict) -> dict:
    return {k: v for k, v in meta.items() if isinstance(v, (str, int, float, bool))}


class PastDevMemory(LocalMemory):
    """A lab's memory in past.dev. The local copy keeps the lab's private paper library and covers
    its own notes until past.dev has ingested them; everything else is recalled from past.dev as
    this lab's identity, so it returns only this lab's own notes and what others shared into its inbox."""

    def __init__(self, identity: str, run: PastDevRun):
        super().__init__()
        self.identity, self.run = identity, run
        run.ensure_lab(identity)

    def write(self, item: Item) -> None:
        if item.kind == "hypothesis":  # stable id: the local copy keeps only the newest version
            self.items = [it for it in self.items if it.id != item.id]
        super().write(item)
        shared = "shared_from" in item.meta
        if shared or item.kind in REMOTE_KINDS:
            self.run.write(item, self.identity, inbox=shared)

    def search(self, query: str, k: int) -> list[Item]:
        if k <= 0:
            return []
        remote = self.run.recall(self.identity, query, k)
        texts = [r["content"] for r in remote]
        embs = llm.embed(texts) if texts else []
        found = [Item(id=(r["sourceIds"] or [f"{self.identity}-recall-{i}"])[0], kind="library", text=r["content"],
                      source_agent=r["authors"][0] if len(r["authors"]) == 1 else "past.dev",
                      meta={"recall": True, "superseded_at": r["supersededAt"], "occurred_at": r["occurredAt"]},
                      embedding=embs[i].tolist()) for i, r in enumerate(remote)]
        # Local: the private library, plus own notes past.dev has not finished ingesting.
        local = [it for it in super().search(query, len(self.items))
                 if (it.kind == "library" and "shared_from" not in it.meta) or self.run.is_pending(it.id)]
        seen, out = set(), []
        for it in [x for pair in zip(found, local) for x in pair] + found[len(local):] + local[len(found):]:
            if it.text not in seen:
                seen.add(it.text)
                out.append(it)
        return out[:k]


def make_memory(backend: str, identity: str, shared: LocalMemory | None = None,
                pastdev: PastDevRun | None = None) -> LocalMemory:
    if backend == "shared":
        assert shared is not None
        return shared
    if backend == "pastdev":
        assert pastdev is not None
        return PastDevMemory(identity, pastdev)
    return LocalMemory()


def share(sender: str, sender_mem: LocalMemory, receiver: str, receiver_mem: LocalMemory,
          topic: str, max_items: int = 3, keep_similarity: float = 0.95) -> dict:
    """Sender offers up to `max_items` items matching the receiver's topic; receiver keeps the new ones.

    Returns {offered: [ids], kept: [ids]}; the caller emits the share event.
    """
    offered = sender_mem.search(topic, max_items)
    kept = []
    for it in offered:
        if it.embedding is None:
            it.embedding = llm.embed([it.text])[0].tolist()
        emb = np.array(it.embedding)
        nearest = receiver_mem.search(it.text, 1)
        near_emb = None
        if nearest:
            near_emb = nearest[0].embedding
            if near_emb is None:
                near_emb = llm.embed([nearest[0].text])[0].tolist()
        if near_emb is not None and llm.cosine(emb, np.array(near_emb)) >= keep_similarity:
            continue
        copy = Item(id=f"{receiver}-from-{sender}-{len(receiver_mem.items) + 1}", kind=it.kind,
                    text=it.text, source_agent=sender,
                    meta={**it.meta, "shared_from": sender, "original_id": it.id}, embedding=it.embedding)
        receiver_mem.write(copy)
        kept.append(copy.id)
    return {"offered": [it.id for it in offered], "kept": kept}
