# autoresearch + Boredom Meter

This is an experiment to have the LLM do its own research, with a **Boredom Meter** (`boredom.py`) acting as an exploration controller. Autonomous research loops tend to get stuck in safe local minima: endless micro-tweaks around the last working state. The Boredom Meter measures that from telemetry and tells you when to stop exploiting and go explore. You MUST obey it.

## Setup

To set up a new experiment, work with the user to:

1. **Agree on a run tag**: propose a tag based on today's date (e.g. `mar5`). The branch `autoresearch/<tag>` must not already exist — this is a fresh run.
2. **Create the branch**: `git checkout -b autoresearch/<tag>` from current master.
3. **Read the in-scope files**: The repo is small. Read these files for full context:
   - `README.md` — repository context.
   - `prepare.py` — fixed constants, data prep, tokenizer, dataloader, evaluation. Do not modify.
   - `train.py` — the file you modify. Model architecture, optimizer, training loop.
   - `boredom.py` — the Boredom Meter. Do not modify. Read its docstring and `--help`.
4. **Verify data exists**: data lives in the Modal volume `autoresearch-cache`. If a run fails because data is missing, run `modal run modal_run.py::prepare` once.
5. **Initialize results.tsv**: Create `results.tsv` with just the header row. The baseline will be recorded after the first run.
6. **Confirm and go**: Confirm setup looks good.

Once you get confirmation, kick off the experimentation.

## Experimentation

Each experiment runs on a single GPU. The training script runs for a **fixed time budget of 5 minutes** (wall clock training time, excluding startup/compilation). You launch it on a remote H100 via Modal: `modal run modal_run.py` (this ships your working-tree `train.py` to the GPU and streams the log back). Put the Modal client on your PATH first: `export PATH=~/.venvs/modal/bin:$PATH`.

**What you CAN do:**
- Modify `train.py` — this is the only file you edit. Everything is fair game: model architecture, optimizer, hyperparameters, training loop, batch size, model size, etc.

**What you CANNOT do:**
- Modify `prepare.py`. It is read-only. It contains the fixed evaluation, data loading, tokenizer, and training constants (time budget, sequence length, etc).
- Install new packages or add dependencies. You can only use what's already in `pyproject.toml`.
- Modify the evaluation harness. The `evaluate_bpb` function in `prepare.py` is the ground truth metric.

**The goal is simple: get the lowest val_bpb.** Since the time budget is fixed, you don't need to worry about training time — it's always 5 minutes. Everything is fair game: change the architecture, the optimizer, the hyperparameters, the batch size, the model size. The only constraint is that the code runs without crashing and finishes within the time budget.

**VRAM** is a soft constraint. Some increase is acceptable for meaningful val_bpb gains, but it should not blow up dramatically.

**Simplicity criterion**: All else being equal, simpler is better. A small improvement that adds ugly complexity is not worth it. Conversely, removing something and getting equal or better results is a great outcome — that's a simplification win. When evaluating whether to keep a change, weigh the complexity cost against the improvement magnitude. A 0.001 val_bpb improvement that adds 20 lines of hacky code? Probably not worth it. A 0.001 val_bpb improvement from deleting code? Definitely keep. An improvement of ~0 but much simpler code? Keep.

**The first run**: Your very first run should always be to establish the baseline, so you will run the training script as is.

## Output format

Once the script finishes it prints a summary like this:

```
---
val_bpb:          0.997900
training_seconds: 300.1
total_seconds:    325.9
peak_vram_mb:     45060.2
mfu_percent:      39.80
total_tokens_M:   499.6
num_steps:        953
num_params_M:     50.3
depth:            8
```

Note that the script is configured to always stop after 5 minutes, so depending on the computing platform of this computer the numbers might look different. You can extract the key metric from the log file:

```
grep "^val_bpb:" run.log
```

## Logging results

When an experiment is done, log it to `results.tsv` (tab-separated, NOT comma-separated — commas break in descriptions).

The TSV has a header row and 5 columns:

```
commit	val_bpb	memory_gb	status	description
```

1. git commit hash (short, 7 chars)
2. val_bpb achieved (e.g. 1.234567) — use 0.000000 for crashes
3. peak memory in GB, round to .1f (e.g. 12.3 — divide peak_vram_mb by 1024) — use 0.0 for crashes
4. status: `keep`, `discard`, or `crash`
5. short text description of what this experiment tried

Example:

```
commit	val_bpb	memory_gb	status	description
a1b2c3d	0.997900	44.0	keep	baseline
b2c3d4e	0.993200	44.2	keep	increase LR to 0.04
c3d4e5f	1.005000	44.0	discard	switch to GeLU activation
d4e5f6g	0.000000	0.0	crash	double model width (OOM)
```

## The Boredom Meter

After every logged experiment, run `python3 boredom.py status`. It reads `results.tsv` and each commit's descriptor (from its `Descriptor:` trailer, or inferred from the description), prints a boredom score B in [0, 1] and a regime, and appends a JSON record to `boredom_log.jsonl`:

- **novelty**: mean hierarchical descriptor distance to the nearest archive members (low novelty means you are repeating a mechanism or method).
- **stagnation**: frontier stall relative to the profile's patience.
- **overload**: the larger of the recent failure rate and near-duplicate descriptor rate.
- B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload.

Regimes and what you must do:

- **EXPLOIT** (B < 0.70): normal hill-climbing. Make one focused change to the current best `train.py`.
- **BOREDOM_SNAP** (0.70 ≤ B < 0.85): micro-tweaks are banned. Read the episodic memory (failed ideas) that `status` prints and do not revisit those basins. Propose an idea that is structurally different from everything in the last k attempts (a different component of the model or training loop, not another value for a knob you already turned). Strongly consider a **parallel divergent burst**: write 3 orthogonal candidates as 3 separate commits on top of the current best (each on its own temporary branch or as sibling commits), then run all at once with `modal run modal_run.py --commits <c1>,<c2>,<c3> > burst.log 2>&1`. Logs land in `runs/<commit>.log`. Log every candidate as its own row in `results.tsv`; advance the branch to the winner only if it beats the best.
- **PARADIGM_BREAKOUT** (B ≥ 0.85): the current framing is exhausted. `git reset --hard <best_commit>` first, then change the framing itself: a different architecture family or attention scheme, a different optimizer family or schedule shape, a different model shape/size trade-off for the 5-minute budget, a different batch/sequence regime. Small or medium ideas are not allowed here.
- **CONVERGED**: after the frontier stalls for 3×patience and every mechanism except `baseline` has been tried, re-run the current best descriptor as a confirmation instead of proposing a new idea. A significant improvement exits CONVERGED.

Every candidate commit must include a descriptor trailer from the profile vocabulary:

```text
baseline/none
batch/total_batch
lr_schedule/warmup | warmdown | final_lr
optimizer/matrix_lr | embed_lr | unembed_lr | adam_beta | weight_decay | family
architecture/depth | width | head_dim | mlp | norm | family
attention/window | softcap | family
data/ordering | sequence
```

Add `value=<number>` for a parameterized descriptor when applicable. For example, `Descriptor: optimizer/matrix_lr value=0.03`. In CONVERGED, the gate only allows the current best descriptor as a confirmation run.

**Novelty gate.** Before running any candidate (after `git commit`, before `modal run`), run `python3 boredom.py gate --commit HEAD`. If it prints `REJECT` (exit code 1), do not run it: amend or replace the idea with something more novel and gate it again. The scoring gate passes in EXPLOIT, but every enabled run still needs a valid `Descriptor:` trailer and configured preconditions such as prior-art. Do not fiddle with the idea just to slip past the gate; make it genuinely different.

**Decision log.** Judges must be able to follow every decision. Each `results.tsv` description must start with the regime you were in, e.g. `[SNAP] replace ReLU^2 with SwiGLU MLP`. When the regime changes, write one line in `notes.md` (untracked) saying what B was, which regime you entered, and what kind of idea you picked because of it.

## Research grounding

In BOREDOM_SNAP and PARADIGM_BREAKOUT, ground every candidate in retrieved research before running it. `research.py` uses Exa and requires the `EXA_API_KEY` environment variable. Search for the current bottleneck, derive the candidate idea from a result, and cite that result in the commit message:

```bash
python3 research.py search "<query naming the current bottleneck>"
git commit -m "[SNAP] <research-grounded change>" \
  -m "Source: S<k>" -m "Descriptor: architecture/mlp"
```

Use a `[BREAKOUT]` subject in PARADIGM_BREAKOUT. The cited `S<k>` must be an id printed by the search and present in `research_log.jsonl`; the novelty gate rejects ungrounded SNAP/BREAKOUT candidates. In `notes.md`, add one line per grounded candidate mapping its source to the change. Research is optional in EXPLOIT. At completion, copy `research_log.jsonl` into `experiments/<arm>/` alongside the arm results.

If `PRIOR_ART=required`, run `python3 research.py prior-art "<candidate idea>"` and add a `Prior-art: S<k>` trailer for a returned source, or `Prior-art: none-found Q<k>` if the search finds none. The gate checks these IDs against the research log.
This prior-art requirement remains active when `BOREDOM=off`.

## Memory

Memory defaults to local storage when `PAST_API_KEY` is absent and past.dev when it is present; `--backend` can select `none`, `local`, or `pastdev`. Before committing a candidate, run `python3 memory.py recall "<one-line description of the idea>"`. If memory shows the idea was already discarded or crashed in this or another session/arm, choose something else or note in `notes.md` why this variant differs. After logging each result to `results.tsv`, run:

```bash
python3 memory.py remember --commit <short> --val-bpb <v> --memory-gb <m> --status <status> --description "<description>"
```

At completion, copy `memory.jsonl` and `memory_log.jsonl` into `experiments/<arm>/`.

## The experiment loop

The experiment runs on a dedicated branch (e.g. `autoresearch/mar5` or `autoresearch/mar5-gpu0`).

LOOP FOREVER:

1. Look at the git state: the current branch/commit we're on
2. Run `python3 boredom.py status` and read the regime + directive.
3. Tune `train.py` with an experimental idea that obeys the regime.
4. git commit
5. Run `python3 boredom.py gate --commit HEAD`. If REJECT, go back to step 3 (amend the commit).
6. Run the experiment: `modal run modal_run.py > run.log 2>&1` (redirect everything — do NOT use tee or let output flood your context). In a burst, use `--commits` as described above.
7. Read out the results: `grep "^val_bpb:\|^peak_vram_mb:" run.log`
8. If the grep output is empty, the run crashed. Run `tail -n 50 run.log` to read the Python stack trace and attempt a fix. If you can't get things to work after more than a few attempts, give up.
9. Record the results in the tsv (NOTE: do not commit the results.tsv file, leave it untracked by git)
10. If val_bpb improved (lower), you "advance" the branch, keeping the git commit
11. If val_bpb is equal or worse, you git reset back to where you started

The idea is that you are a completely autonomous researcher trying things out. If they work, keep. If they don't, discard. And you're advancing the branch so that you can iterate. The Boredom Meter is your signal for when you are stuck: trust it over your own urge to keep making safe tweaks.

**Timeout**: Each experiment should take ~5 minutes total (+ a few seconds for startup and eval overhead). If a run exceeds 10 minutes, kill it and treat it as a failure (discard and revert).

**Crashes**: If a run crashes (OOM, or a bug, or etc.), use your judgment: If it's something dumb and easy to fix (e.g. a typo, a missing import), fix it and re-run. If the idea itself is fundamentally broken, just skip it, log "crash" as the status in the tsv, and move on.

**NEVER STOP**: Once the experiment loop has begun (after the initial setup), do NOT pause to ask the human if you should continue. Do NOT ask "should I keep going?" or "is this a good stopping point?". The human might be asleep, or gone from a computer and expects you to continue working *indefinitely* until you are manually stopped. You are autonomous. If you run out of ideas, think harder — read papers referenced in the code, re-read the in-scope files for new angles, try combining previous near-misses, try more radical architectural changes. The loop runs until the human interrupts you, period.

As an example use case, a user might leave you running while they sleep. If each experiment takes you ~5 minutes then you can run approx 12/hour, for a total of about 100 over the duration of the average human sleep. The user then wakes up to experimental results, all completed by you while they slept!
