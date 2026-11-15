"""Exa search with disk cache and key rotation; novelty_check and obscure_source.

Every result is cached under data/seed_cache so each arm and seed starts from identical
libraries. MOCK=1 returns canned results with example.org URLs.
"""
import hashlib
import json
import os
import time
from pathlib import Path

import numpy as np
from pydantic import BaseModel

import llm

HERE = Path(__file__).parent
CACHE_DIR = Path(os.environ.get("EXA_CACHE_DIR", HERE / "data" / "seed_cache"))
MAX_CALLS = int(os.environ.get("EXA_MAX_CALLS", "500") or 0)


class Source(BaseModel):
    title: str
    url: str
    snippet: str = ""


class SearchBudgetExceeded(RuntimeError):
    pass


_keys = [k.strip() for k in os.environ.get("EXA_KEYS", "").split(",") if k.strip()]
if not _keys and os.environ.get("EXA_API_KEY"):
    _keys = [os.environ["EXA_API_KEY"]]
_state = {"key_idx": 0, "calls": 0, "latency_ms": 0}


def _next_key() -> str:
    if not _keys:
        raise RuntimeError("set EXA_KEYS (comma-separated) or EXA_API_KEY, or run with MOCK=1")
    k = _keys[_state["key_idx"] % len(_keys)]
    _state["key_idx"] += 1
    return k


def _cache_file(query: str, n: int) -> Path:
    h = hashlib.sha256(f"{query}|{n}".encode("utf-8")).hexdigest()[:24]
    return CACHE_DIR / f"{h}.json"


def _mock_results(query: str, n: int) -> list[Source]:
    h = hashlib.sha256(query.encode("utf-8")).hexdigest()[:12]
    kinds = ["A field study of", "Notes toward a theory of", "An overlooked 1987 report on",
             "Replication attempt:", "Letter to the editor concerning"]
    return [Source(title=f"{kinds[i % len(kinds)]} {query}",
                   url=f"https://example.org/mock/{h}/{i}",
                   snippet=f"Mock summary {i} about {query}. Findings were modest and oddly specific.")
            for i in range(n)]


def search(query: str, n: int = 5) -> list[Source]:
    """Return up to n sources for `query`, from cache when possible."""
    f = _cache_file(query, n)
    if f.exists():
        return [Source(**d) for d in json.loads(f.read_text(encoding="utf-8"))]
    if llm.MOCK:
        results = _mock_results(query, n)
    else:
        if MAX_CALLS and _state["calls"] >= MAX_CALLS:
            raise SearchBudgetExceeded(f"EXA_MAX_CALLS={MAX_CALLS} reached")
        from exa_py import Exa
        t0 = time.monotonic()
        resp = Exa(api_key=_next_key()).search_and_contents(query, num_results=n, highlights={"max_characters": 400})
        _state["calls"] += 1
        _state["latency_ms"] = int((time.monotonic() - t0) * 1000)
        results = [Source(title=r.title or "(untitled)", url=r.url,
                          snippet=" ".join(getattr(r, "highlights", None) or [])[:400]) for r in resp.results]
    f.parent.mkdir(parents=True, exist_ok=True)
    f.write_text(json.dumps([s.model_dump() for s in results], indent=0), encoding="utf-8")
    return results


def last_latency_ms() -> int:
    return _state["latency_ms"]


def novelty_check(idea_text: str, n: int = 5) -> dict:
    """1 - max cosine between the idea and what search returns for it. Includes source URLs."""
    sources = search(idea_text, n)
    if not sources:
        return {"score": 1.0, "novel": True, "sources": []}
    embs = llm.embed([idea_text] + [f"{s.title}. {s.snippet}" for s in sources])
    sims = [llm.cosine(embs[0], e) for e in embs[1:]]
    score = round(float(1.0 - max(sims)), 4)
    return {"score": score, "novel": score > 0.5,
            "sources": [{"title": s.title, "url": s.url, "similarity": round(sim, 4)} for s, sim in zip(sources, sims)]}


def obscure_source(topic: str, n: int = 5) -> Source:
    """The least relevant hit for an 'obscure study about <topic>' query."""
    results = search(f"obscure little-known study {topic}", n)
    return results[-1] if results else Source(title="nothing found", url="", snippet="")
