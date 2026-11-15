# Trace schema `caffeinated-trace/v1`

`export_trace.py` (Python, repo root) writes it; `lab/src/replay.js` replays it. Extra fields are allowed. Renaming or removing a field bumps the version. Both test suites (`python3 -m unittest tests.test_export_trace`, `cd lab && npm test`) check the committed fixture `fixtures/offline_swarm.trace.json`.

```jsonc
{
  "schema": "caffeinated-trace/v1",
  "title": "…",
  "metric": { "name": "val_bpb", "direction": "min" },
  "thresholds": { "snap": 70, "breakout": 85 },            // boredom is B×100 (boredom.py cut-offs)
  "agents": [ { "id": "conductor", "role": "Conductor" }, { "id": "worker-1", "role": "Worker" }, …, { "id": "critic", "role": "Critic" } ],
  "arms": [ {
    "arm": "B", "label": "Arm B · boredom meter on", "boredom_enabled": true,
    "budget": 26,                                          // = experiments.length
    "provenance": { "format": "swarm|results.tsv", "llm": "fake|<model>", "gpu": "fake|modal", "exa": "live|replay|off|none",
                    "memory_backend": "local|pastdev|none", "command": "…", "artifacts": { "ledger.jsonl": "<sha256[:16]>", … } },
    "agents": ["critic", "worker-1", …],
    "rounds": [ { "round": 3, "regime": "SNAP", "boredom": 77, "agent_boredom": { "worker-1": 25 },
                  "roles": { "worker-1": "divergent" }, "scouts": ["worker-1"], "rationale": "…" } ],
    "experiments": [ {                                     // one per ledger event: baseline, candidate, critic
      "id": 12, "seq": 12, "round": 3, "agent": "worker-2", "role": "exploit|divergent|scout|critic|baseline",
      "kind": "baseline|candidate|critic", "commit": "2100311",
      "val_bpb": 0.993283,                                 // null for crashes / gate rejects
      "best_val_bpb": 0.977569,                            // confirmed best so far (critic-accepted in swarm arms)
      "score": 1.832,                                      // % improvement of best vs baseline (higher = better)
      "status": "keep|discard|crash|reject", "description": "[SNAP] …",
      "boredom": 77, "agent_boredom": 29, "regime": "EXPLOIT|SNAP|BREAKOUT|CONVERGED",
      "pivot": false,                                      // first event of a round that entered SNAP/BREAKOUT
      "sources": ["S34", "S25"],                           // Exa source ids cited (prior art + scout lead)
      "lead": { "id": "lead-B-3-worker-1", "author": "worker-1", "source_ids": ["S25"] },
      "verdict": null, "gate_reasons": []
    } ],
    "memory": [ {                                          // shared memory (local mirror of past.dev writes)
      "id": "lead-B-3-worker-1", "experiment": 11,         // replay step at which it appears
      "round": 3, "agent": "worker-1", "type": "lead|claim|result|verdict|lesson|assignment",
      "message": "…", "source_ids": ["S25"], "pastdev_source_id": "lead-B-3-worker-1",
      "recalled_by": ["worker-2"],                         // inferred: recall attributed to the next writer in memory_log.jsonl
      "reused_by": [ { "agent": "worker-2", "experiment": 12 } ]   // candidates that built on this lead (author ≠ reader)
    } ],
    "research": [ { "id": "Q13", "agent": "worker-2", "purpose": "prior-art|scout|extract", "query": "…",
                    "regime": "SNAP", "round": 3, "n_results": 3, "disabled": false, "source_ids": ["S34"] } ],
    "sources": { "S25": { "id": "S25", "title": "…", "url": "https://…", "published": "2025-06-02", "query_id": "Q11",
                          "agent": "worker-1", "highlight": "…", "extract": "…", "cited_by": ["worker-2"] } },
    "summary": { "experiments": 26, "best_val_bpb": 0.977569, "score": 1.832, "pivots": 2, "max_boredom": 100,
                 "exa_queries": 50, "exa_sources": 129, "exa_sources_cited": 60, "scout_leads": 7,
                 "memory_writes": 68, "memory_recalls": 79, "cross_agent_reuse": 9, … }
  } ]
}
```

Arms are ordered meter-on first. In arm A (meter disabled) `boredom` is the shadow meter: what B would have been, while the regime stays EXPLOIT.
