# past.dev vs local memory: same-data retrieval comparison

Corpus: all 419 memory records written by four real Kimi swarm runs (`out-ignobel`,
`out-bixbench_mini-v2`, `out-playworld_mini`, `out-hadamard19`; see `../real-runs/`), mirrored in
`local_mirror.jsonl` and ingested into past.dev (`pastdev_ingested.json`). Probes: 40 claim records
(`picked.json`; 16 playworld, 10 bixbench, 8 ignobel, 6 hadamard19), each with one paraphrased
colleague question (`probes.json`). A probe is a hit when its target record is among the returned
sources (limit 8).

| backend | hit@1 (95% Wilson) | hit@8 (95% Wilson) | MRR | p50 / p95 latency | mean evidence tokens | API calls |
|---|---|---|---|---|---|---|
| local lexical TF-IDF | 0.30 (0.18–0.45) | 0.825 (0.68–0.91) | 0.48 | 15 / 18 ms | 692 | 0 |
| past.dev `/recall` | 0.65 (0.50–0.78) | 0.95 (0.83–0.99) | 0.77 | 562 / 723 ms | 1031 | 41 |

Cost: local is free; past.dev's API returns no price, so its cost is unreported (not estimated).

Limitations:
- **Probe questions were hand-written by the lead agent**, because Kimi paraphrasing failed
  (Tinker HTTP 402). They were written to avoid verbatim overlap with the target, which favours a
  semantic retriever over a lexical one; a stronger local baseline (local embeddings) was not run.
- n = 40 probes, one run, one retrieval limit.
- `ingest_settle_s` in `results.json` is 0.0 because ingestion happened in an earlier invocation;
  recall ran about 15 minutes after the last ingest, but settle time was not measured.

Re-run: `MEMCMP_RUNS_ROOT=<dir with out-*/memory.jsonl> PAST_API_KEY=... python compare.py`.
