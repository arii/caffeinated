"""Seed every agent's private library from its seed queries before round 0."""
import search
from memory import Item


def seed_libraries(agents, log, cfg: dict) -> None:
    n = int(cfg.get("seed_results_per_query", 5))
    for a in agents:
        k = 0
        for q in a.spec.seed_queries:
            sources = search.search(q, n)
            for s in sources:
                k += 1
                a.memory.write(Item(id=f"{a.name}-lib{k}", kind="library", text=f"{s.title}. {s.snippet}",
                                    source_agent=a.name, meta={"url": s.url, "query": q}))
            log.append(0, a.name, "seed", {"query": q, "sources": [s.model_dump() for s in sources]},
                       latency_ms=search.last_latency_ms())
