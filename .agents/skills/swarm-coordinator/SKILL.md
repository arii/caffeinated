---
name: swarm-coordinator
description: Operate the caffeinated autoresearch swarm (swarm.py) as its LLM. Launch runs on the mini benchmarks or train.py, answer queue-mode prompts for scouts, workers and the critic, steer by Boredom Meter regime, use Exa and past.dev correctly, and verify and report results honestly. Use when asked to run, babysit or report on a swarm run.
---

# Swarm coordinator

You are the agent that runs `swarm.py` and supplies every LLM decision through queue mode (`--llm queue`). No OpenAI key is needed. The conductor inside `swarm.py` is deterministic: it runs the Boredom Meter, assigns roles, applies the gates, evaluates candidates, keeps or reverts, and writes the ledger. **Never edit the conductor's state or artifacts by hand.** You only answer the prompts it writes.

## 0. Preconditions (check every time)

- Use a branch that has `swarm.py --task` (PR #2, `devin/1794701586-swarm-testcases`, or its successor). Run from a **separate checkout or worktree** used only for runs, because the swarm makes candidate commits.
- `EXA_API_KEY` and `PAST_API_KEY` must be set; check with `env | grep -c EXA_API_KEY`. **Never print, log, paste or commit their values.**
- `--task` mode runs generated code locally with your file permissions. The evaluator strips env vars containing KEY/TOKEN/SECRET/PASSWORD, but that is not a sandbox. Only run in a throwaway VM or container.
- Masha's lab frontend is **not** part of benchmark runs. Don't start, export to or modify `lab/` unless explicitly asked.
- `bixbench_mini` needs `pandas`, `openpyxl`, `scipy` and `statsmodels`. Its first run downloads data from Hugging Face into `testcases/bixbench_mini/.cache/`.

## 1. Launch

```sh
mkdir -p ../out
python3 swarm.py --task <hadamard19|bixbench_mini|playworld_mini> --arm B --rounds <R> \
  --llm queue --memory-backend pastdev --exa on --no-push --out ../out/<task> > ../out/<task>.log 2>&1 &
```

- Arm A = fixed 3 exploit + 1 divergent slots. Arm B = slots allocated by the Boredom Meter (the default for demos). C and D are ablations; see `program_swarm.md`.
- Only compare arms on the **same task, rounds and seed**.
- `--exa off` and `--memory-backend local|none` are ablations. Label them as such.
- Run one swarm per checkout. To stop a run, kill the `swarm.py` PID; artifacts already written stay valid.

## 2. The queue loop

```sh
python3 swarm_queue.py list   --queue-dir ../out/<task>/llm_queue
python3 swarm_queue.py show   --queue-dir ../out/<task>/llm_queue <call_id>
python3 swarm_queue.py answer --queue-dir ../out/<task>/llm_queue <call_id> <file|->   # '-' = JSON on stdin
```

Call ids look like `r<round>-<role>-<agent>-<n>`. Prompts arrive one at a time, in this order each round:
1. `scout_query`, `scout_pick`, `scout_lead` for each scout;
2. `worker_propose` for each worker, plus `worker_repair` if an edit failed to apply;
3. `critic`, once there is a provisional best.

Answer **only the role asked, as the agent named**. Read the whole prompt first. It contains the swarm B, the agent's own B, the regime directive, the current best file, memory recalls and the mechanism vocabulary.

Reply with **exactly one JSON object** matching the schema at the end of the prompt. No prose and no code fences.

| role | schema |
|---|---|
| SCOUT_QUERY | `{"paper_query": str, "code_query": str, "bottleneck": str}` |
| SCOUT_PICK | `{"source_id": "S<k>", "why": str}`, where the id must be one of those listed |
| SCOUT_LEAD | `{"recipe": str, "claimed_effect": str, "predicted_delta": float, "risk": str}` |
| WORKER_PROPOSE / WORKER_REPAIR | `{"descriptor": {"mechanism": str, "method": str, "params": {"value": float}}, "idea": str (<=80 chars), "rationale": str, "lead_id": str or null, "source_ids": [str], "predicted_delta": float, "edits": [{"old": str, "new": str}]}` |
| CRITIC | `{"verdict": "replicated" or "partial" or "contradicted" or "untested-in-source", "why": str, "lesson": null or {"basin": str, "text": str}}` |

### Rules for each role

**Scout**
- Target the stated bottleneck, with a query structurally different from what memory shows was already tried.
- Pick the source most likely to yield a change of under 40 lines in the editable file.
- Write the recipe so someone can implement it without reading the source: the exact change plus hyperparameters.
- `claimed_effect` is what the source reports, or "not reported". Never invent numbers.

**Worker**
- One idea per proposal.
- Edit **only** the task's editable file: `construct.py`, `analysis.py` or `world_model.py` (`train.py` when not using `--task`).
- Add no new dependencies and stay within the time limit stated in the prompt.
- `old` must be an exact, unique substring of the current best file. The safest choice is the whole file; see section 5.
- `mechanism` and `method` must come from the prompt's vocabulary. Set `params.value` only for a one-knob change.
- Set `lead_id` and `source_ids` **only if you actually implemented that lead**; otherwise use `"lead_id": null, "source_ids": []` (`source_ids` must always be a list). Lead reuse is a measured past.dev metric.
- `predicted_delta` is negative when you expect the loss to drop.
- Give the 4 workers in a round 4 *different* ideas.

**Critic**
- Judge the seed-42/43 pair against the previous best and against the lead's claim.
- Use `untested-in-source` when the gain didn't come from the cited source.
- Add a `lesson` with numbers when the round taught something reusable. Other agents recall lessons from memory.
- Flag fake replication. Example: `hadamard19` hard-codes `SEED=0`, so its two seeds only show determinism.

## 3. Steer by regime

Read the regime from the prompt or from `boredom_log.jsonl`.

| regime | what the conductor does | what you do |
|---|---|---|
| EXPLOIT | 3 exploit slots + 1 divergent | Exploit workers make one focused change to the best (a knob, a budget, a bug fix). The divergent worker tries a different method. |
| BOREDOM_SNAP | more scouts and divergent slots | Stop micro-tuning. Try a different *method*, grounded in the scout's Exa source, and check memory for what already failed. |
| PARADIGM_BREAKOUT | all 4 slots divergent | Change the *mechanism* or framing, e.g. a structured construction instead of local search. |
| CONVERGED | exploit slots + 1 scout | Confirmation runs only. |

Known gap: at a hard floor (loss 0) the meter can still read EXPLOIT. When the task's optimum is reached, stop the run early and report that you did.

## 4. Exa and past.dev

- The conductor calls Exa for scouts and prior-art checks. Your job is to write targeted queries and cite only the `S<k>` ids you actually used.
- past.dev is the shared memory: one agent writes lessons, leads and results, and others recall them. A write can take about 10 s to become searchable.
- Cross-agent reuse means a worker implements a scout's lead (`lead_id` set). The ledger records it.
- If either service errors, the run continues. Report the outage; don't hide it.

## 5. Practical tips

- **Pre-test candidates.** Copy the task's `evaluate.py`, its data and the current best file into a scratch directory and run it before answering. The swarm gets the same evaluator signal.
- **Never read hidden keys** to craft answers: not `testcases/bixbench_mini/.cache/answers.json`, and not the internals of `testcases/playworld_mini/env.py`.
- Get the current best file from the kept commit listed in `results.tsv`: `git show <commit>:<path>`.
- Build whole-file edits with a script, so `old` matches exactly: `json.dumps({..., "edits": [{"old": open(cur).read(), "new": open(cand).read()}]})`.

## 6. Verify and report

In `../out/<task>/`, check:
- `results.tsv`: the baseline row, each candidate's loss with keep/discard, and the critic rows.
- `ledger.jsonl`, `assignments.jsonl`, `boredom_log.jsonl`: roles and regime per round.
- `research_log.jsonl`: Exa queries, with source URLs.
- `memory.jsonl` and `memory_log.jsonl`: writes and cross-agent recalls.
- `llm_log.jsonl` and `critic.tsv`.

Re-run the final best's evaluator yourself and quote the exact loss.

The report must state:
- baseline → best, compared with the record;
- rounds run vs planned, and why the run stopped;
- the regime trajectory, the Exa sources actually used, and the lead reuses;
- negative results;
- **who the LLM was:** Devin via queue mode, an API model, or fake. Never present fake-LLM or hand-scripted runs as research results.
