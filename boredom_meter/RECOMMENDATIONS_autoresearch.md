# Recommendations for the autoresearch branches

Status as of 2026-11-14. Every number below can be regenerated with the commands in [Reproduce](#reproduce).

## Branch inventory

| Branch | What it is | Recommendation |
|---|---|---|
| `autoresearch` | The integration branch: karpathy/autoresearch import, plus `boredom.py` (diff-Jaccard meter and gate), `research.py` (Exa grounding), `memory.py` (past.dev), `analyze.py`, and `program_boredom.md`. 21 tests pass. | Keep this as the single development line. Port the deterministic meter into it (see step 1 below). Don't merge it into `main`: `main` is the hackathon repo shared with Little Sprout. |
| `autoresearch-nov14-control` | Control arm: `program.md` only. 25 runs, best `0.978532` (`b9ef13c`). | Freeze it as an experiment record. Tag it (for example `exp/nov14-control`) and stop committing to it. |
| `autoresearch-nov14-boredom` | Boredom arm on the older `boredom.py`, without grounding or memory. 10 runs, best `0.980406` (`61e49f8`). The protocol changed during the run: runs 6–10 were a 5-wide EXPLOIT burst. | Freeze and tag it (`exp/nov14-boredom`). Treat it as a pilot, not as evidence for or against the meter (see below). |
| `devin/1794689752-autoresearch` | Just the upstream import. Its tree is identical to `d0ae7a4`, the base of `autoresearch` (tree `04fa7a1`). | Delete it as a redundant duplicate (I'll only delete with your OK). |

## What the Nov 14 arms do and don't show

1. **The boredom arm never left EXPLOIT, so it didn't test the meter.** The old meter's B peaked at `0.25`. Replaying the arm through the new meter peaks at `0.364` (run 9). The arm kept finding real improvements (5 kept runs out of 10), so stagnation never built up. With `patience = 5`, neither meter can fire before about run 11. A 10-run budget can't exercise the meter.
2. **The control arm is where the meter would have acted.** On a replay of the control arm:
   - the old `boredom.py` reaches SNAP only at run 12 (`B = 0.721`), then drops back to EXPLOIT;
   - the new meter holds SNAP for runs 12–16 and re-enters at run 26.

   Runs 12–16 are the stretch where the control agent re-tuned optimizer knobs: `matrix lr 0.025`, `embedding lr 0.4`, `unembedding lr 0.006`, `weight decay 0.1`, `head dim 64`. The agent then broke out by itself at run 17 (`aspect ratio 80`, a real gain). So the meter would have sent it toward a different mechanism about 5 runs earlier. Whether that would have helped is untested.
3. **Comparing the arms is confounded.** At 10 runs the boredom arm was ahead (`0.980406` vs `0.986775`). But both arms ran the same EXPLOIT protocol, with no meter intervention, and the agents simply chose different first moves (window and depth vs matrix LR). With one run per arm and no measured noise floor, this difference can't be credited to the meter.
4. **Two weaknesses in the old meter show in the data:**
   - **Overload is pinned at 0.6–1.0.** It treats diffs of two lines or fewer as "trivial", and almost every knob change is one or two lines. So overload adds a near-constant 0.06–0.10 to B and carries no information.
   - **Novelty stays at 0.8–1.0.** Changing a different constant gives different 3-shingles, so `matrix lr` → `unembedding lr` → `weight decay` reads as novel. The new meter scores these as the same mechanism (`optimizer`) with different methods, so novelty falls to about 0.45.

## Recommendations

### 1. Replace the scoring in `boredom.py`; keep its CLI and the protocol

Keep `boredom.py status` and `boredom.py gate --commit HEAD` working exactly as `program_boredom.md` describes. Swap the internals:

- **Descriptor per attempt.** The agent declares what it's changing in a commit trailer that the gate already parses alongside `Source:`:
  ```
  [SNAP] replace ReLU^2 with SwiGLU MLP

  Descriptor: architecture/mlp
  Source: S3
  ```
  `status` builds the ledger from `results.tsv` plus these trailers, then calls `meter.status(...)` with `profiles/autoresearch_llm.json`. The keyword classifier in `replay_autoresearch.py` is only for back-filling old runs.
- **Gate:**
  - the near-duplicate check becomes `meter.gate` (descriptor distance against the recent window and failed basins);
  - the `diff_lines < min_lines` rule is dropped, since it penalizes legitimate one-line architecture swaps;
  - Exa grounding and past.dev recall stay as **gate preconditions** in SNAP/BREAKOUT, outside the score. This keeps B deterministic while still requiring research when the agent is bored.
- **Record hashes.** Write `ledger_sha256` and `profile_sha256` into `boredom_log.jsonl`, so `analyze.py` and the judges can verify each recorded B.
- **Port the tests.** Carry `boredom_meter/tests/test_meter.py` over, and keep the existing `tests/test_boredom.py` contract tests (CLI exit codes, REJECT reasons).

### 2. Measure the noise floor before the next A/B

`eps` is set to `0.0005` in the old meter and `0.001` in the new profile, but neither is measured. Run the unmodified baseline 3× on Modal (about 20 GPU-minutes) and set `eps` to about 2× the observed spread of `val_bpb`. Without this, "significant improvement", and so stagnation, isn't well defined. The control arm's `matrix lr 0.025` keep (`Δ = 0.000036`) is almost certainly noise.

### 3. Run a fair A/B (nov15)

- Use the same budget for both arms: at least 30 runs each, because the meter can't act before about run 11.
- Make the meter the only difference: both arms use `program_boredom.md`, and the control sets `BOREDOM_DISABLED=1` (already supported by `is_disabled()`). This removes differences in prompt wording and run tagging.
- Freeze the protocol for the whole run. No mid-run changes like the nov14 5-wide burst. If bursts are part of the treatment, give both arms the same burst policy.
- Report best-so-far at fixed run counts (10/20/30), the number of distinct mechanisms tried, and the runs spent in each regime. Don't report only the final best. `analyze.py --max-runs` already supports truncation.
- If budget allows, run 2 seeds per arm. One pair can't separate the meter's effect from luck in the agent's first moves.

### 4. Make bursts and multiple agents safe

Parallel burst candidates currently append rows to an untracked `results.tsv` with no lock, so their order depends on who writes first. Route result logging through `meter.py submit` (file lock, monotonic `seq`, `agent` field per burst candidate) and generate `results.tsv` from the ledger. Every agent reading the same ledger prefix then gets the same B.

### 5. Add a stop or converged condition

Once the frontier stops moving and every mechanism in the vocabulary has been tried, the meter keeps pushing exploration until the budget runs out. Add a deterministic `CONVERGED` regime, for example: `frontier_stall ≥ 3·patience` and all top-level cells visited. Under that regime the agent switches to confirmation runs (re-running the best commit) instead of new ideas.

## Proposed order

1. Tag the two nov14 arms and delete `devin/1794689752-autoresearch` (with your OK).
2. On a branch off `autoresearch`, port the meter (step 1). Update `analyze.py` to use the new descriptors (it imports `jaccard_distance` and `parse_train_diff` from `boredom.py`).
3. Run the 3× baseline to set `eps` (step 2).
4. Run the nov15 A/B (step 3).

## Reproduce

```bash
git show origin/autoresearch-nov14-control:experiments/control/results.tsv > /tmp/control.tsv
git show origin/autoresearch-nov14-boredom:experiments/boredom/results.tsv > /tmp/boredom.tsv
python3 boredom_meter/replay_autoresearch.py /tmp/control.tsv   # new meter
python3 boredom_meter/replay_autoresearch.py /tmp/boredom.tsv
# old meter: in a worktree of origin/autoresearch, copy a results.tsv prefix and run
#   python3 boredom.py status --json
```
