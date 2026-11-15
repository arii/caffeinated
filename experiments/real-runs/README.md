# Real run artifacts

Artifacts from the overnight real runs (Kimi K3.1 Pro via Tinker) that
`docs/results.md` cites. Each directory is copied from that run's `--out` directory.
Large logs are gzipped (`llm_log`, `research_log`, `memory`). Worktrees, the
resume checkpoint and caches are omitted. `cost.json` is the output of
`python scripts/run_cost.py <run_dir>`.

| Dir | Task | Notes |
|---|---|---|
| `ignobel/` | `ignobel` | 15 rounds requested, stopped after 13 (`run.json` status `stopped`). Exa on, past.dev memory, pre-committee scoring (loss = 1 − confirmed). |
| `bixbench_mini-v2/` | `bixbench_mini` | Exa/literature off. Dev feedback only. `held_out_test.json` is the single held-out grading of the final best. |
| `playworld_mini/` | `playworld_mini` | Synthetic proxy, not official PlayWorld/Genie 3. `held_out_test.json` uses test seeds 300000–300199. |
| `hadamard19/` | `hadamard19` | Reaches the known optimum (loss 0). It is a ceiling, not a record. |

Recompute the headline numbers from these files:
`results.tsv` (per-candidate dev loss and status), `held_out_test.json`
(held-out score), and `ignobel_studies.jsonl` (`result.confirmed`, `rho`, `p`, `replicated`).
