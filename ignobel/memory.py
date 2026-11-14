"""Private per-agent memory, a shared store for the control arm, a past.dev backend, and share().

Protocol: write(item), search(query, k). Nothing is shared automatically.
"""
import json
import os
import time
from datetime import datetime, timezone
from typing import Literal, Protocol
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
            return np.zeros(llm.MOCK_EMBED_DIM if llm.MOCK else 1536)
        return np.mean([it.embedding for it in self.items], axis=0)

    def to_state(self) -> dict:
        return {"items": [it.model_dump() for it in self.items]}

    def load_state(self, st: dict) -> None:
        self.items = [Item(**d) for d in st["items"]]


class SharedMemory(LocalMemory):
    """One store handed to every agent (control arm). Items keep their source_agent tag."""


class PastDevMemory(LocalMemory):
    """past.dev-backed store. Mirrors everything locally so search works offline.

    Request shapes follow the team's existing client in the autoresearch branch
    (memory.py there): bearer token, POST /api/v1/ingest and POST /api/v1/recall.
    TODO(past.dev docs): confirm field names (type/id/content/author/metadata/timestamp,
    query/identity/limit) and the recall result shape before a real run.
    TODO(past.dev docs): decide whether to poll /api/v1/ingest/{id} before recalling.
    TODO(past.dev docs): per-arm keys (PAST_API_KEY_<ARM>) if arms must stay isolated.
    """

    def __init__(self, identity: str, api_key: str | None = None, base_url: str | None = None):
        super().__init__()
        self.identity = identity
        self.api_key = api_key or os.environ.get("PAST_API_KEY")
        self.base_url = (base_url or os.environ.get("PAST_BASE_URL", "https://api.past.dev")).rstrip("/")
        self.live = bool(self.api_key) and not llm.MOCK

    def _post(self, path: str, payload: dict) -> dict:
        req = Request(f"{self.base_url}/api/v1{path}", data=json.dumps(payload).encode("utf-8"),
                      headers={"Authorization": f"Bearer {self.api_key}", "Content-Type": "application/json",
                               "Accept": "application/json"}, method="POST")
        with urlopen(req, timeout=30) as resp:
            return json.loads(resp.read().decode("utf-8"))

    def write(self, item: Item) -> None:
        super().write(item)
        if not self.live:
            return
        self._post("/ingest", {
            "type": item.kind, "id": item.id, "content": item.text, "author": item.source_agent,
            "metadata": {**item.meta, "identity": self.identity},
            "timestamp": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
        })

    def search(self, query: str, k: int) -> list[Item]:
        if not self.live:
            return super().search(query, k)
        resp = self._post("/recall", {"query": query, "identity": self.identity, "limit": k})
        out = []
        for i, r in enumerate(resp.get("results") or []):  # TODO(past.dev docs): verify shape
            text = r.get("content") or r.get("text") or json.dumps(r)
            out.append(Item(id=r.get("id") or f"{self.identity}-recall-{i}", kind="library", text=text,
                            source_agent=str(r.get("author") or "past.dev"), meta={"recall": True}))
        return out or super().search(query, k)


def make_memory(backend: str, identity: str, shared: LocalMemory | None = None) -> LocalMemory:
    if backend == "shared":
        assert shared is not None
        return shared
    if backend == "pastdev":
        return PastDevMemory(identity)
    return LocalMemory()


def share(sender: str, sender_mem: LocalMemory, receiver: str, receiver_mem: LocalMemory,
          topic: str, max_items: int = 3, keep_similarity: float = 0.95) -> dict:
    """Sender offers up to `max_items` items matching the receiver's topic; receiver keeps the new ones.

    Returns {offered: [ids], kept: [ids]}; the caller emits the share event.
    """
    offered = sender_mem.search(topic, max_items)
    kept = []
    for it in offered:
        emb = np.array(it.embedding)
        nearest = receiver_mem.search(it.text, 1)
        if nearest and llm.cosine(emb, np.array(nearest[0].embedding)) >= keep_similarity:
            continue
        copy = Item(id=f"{receiver}-from-{sender}-{len(receiver_mem.items) + 1}", kind=it.kind,
                    text=it.text, source_agent=sender,
                    meta={**it.meta, "shared_from": sender, "original_id": it.id}, embedding=it.embedding)
        receiver_mem.write(copy)
        kept.append(copy.id)
    return {"offered": [it.id for it in offered], "kept": kept}
