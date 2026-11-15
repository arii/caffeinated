"""Seed every agent's private library from its seed queries before round 0."""
import search
from memory import Item


def seed_libraries(agents, log, cfg: dict, round: int = 0, bib=None) -> None:
    """With `bib` (families roster) every seed source also gets an S id in the run's research log."""
    n = int(cfg.get("seed_results_per_query", 5))
    for a in agents:
        k = 0
        for q in a.spec.seed_queries:
            sources = search.search(q, n)
            sids = {}
            if bib is not None and a.spec.family:
                recs = bib.add(a.name, "exa-seed", q, [{"title": s.title, "url": s.url, "text": s.snippet} for s in sources])
                sids = {rec["url"]: rec["id"] for rec in recs}
            for s in sources:
                k += 1
                meta = {"url": s.url, "query": q}
                if s.url in sids:
                    meta.update(sid=sids[s.url], title=s.title)
                a.memory.write(Item(id=f"{a.name}-lib{k}", kind="library", text=f"{s.title}. {s.snippet}",
                                    source_agent=a.name, meta=meta))
            log.append(round, a.name, "seed", {"query": q, "sources": [s.model_dump() for s in sources]},
                       latency_ms=search.last_latency_ms())
