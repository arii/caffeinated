# Local supervisor and execution workers

This experimental branch starts from `origin/main` at d70630b plus the newer
`agent/devin/llm-waste` change (4b26fc6). It includes the local replay startup fix,
clean header, and an Ig Nobel-style result citation for the historical recording.
That recording still reports no prize; the citation is not a winner claim.

## Run a bounded trial

Install the repo dependencies and CPU sandbox as described in README, then:

```sh
ollama pull qwen3:4b
ollama pull qwen3:8b
docker build -t caffeinated-testcases:py311-v2 -f testcases/Dockerfile testcases
bash scripts/run_ollama_demo.sh
```

The trial uses one offline Hadamard21 math benchmark round to measure local
execution. It is new model-generated work, not an Ig Nobel run or fake replay.
Eight worker identities share Qwen3 4B. Qwen3 8B plans the batch and reviews
candidates. Calls are sequential (one active generation), not eight simultaneous
model instances. `--workers` supports 1-12; the default for existing commands stays 4.

The supervisor receives the task, current source, and one shared-memory recall.
It assigns a concrete, distinct instruction per worker. Workers receive compact
execution prompts, with thinking disabled, and at most two calls per round
(execution plus one repair). The supervisor gets one planning call per round,
with thinking enabled. Requested Ollama generation caps are 600 worker tokens and 4096 supervisor tokens.
Reasoning is also recorded as a character count; do not interpret a missing
reasoning-token counter as zero supervisor reasoning. Context is 8192 tokens. Truncated output is rejected rather
than applied. Large tasks may need a larger context or smaller task inputs.

This is a fixed-size, supervised team; autonomous spawning/retirement is not
implemented. Existing boredom gates, sandbox checks, and independent repeated
candidate evaluation remain active. More workers increase queue length, not GPU
throughput. Bad plans and unsupported edits can fail; a completed run is not proof
of a scientific improvement.

`--llm ollama` uses only a loopback HTTP endpoint (OLLAMA_HOST, default
http://127.0.0.1:11434), with no API credential. It never calls the hosted post-run
committee and automatically disables Git pushes. The demo explicitly disables Exa
and literature search and uses local memory. Other commands may enable research
or past.dev explicitly; those services are separate from local model inference.

Artifacts are in `experiments/ollama-demo/`: `supervisor_plans.jsonl`, `llm_log.jsonl`
(model, latency, usage, reasoning-character count and token caps), `results.tsv`,
and `viewer/`. Repeated trials should set OLLAMA_RUN_OUT to a fresh directory.
For exact continuation use `swarm.py --resume ...`; worker/model/token settings
are stored and cannot be silently changed on resume.

## Watch it

Start the lab API with both recording roots if the research and UI run from the
same checkout:

```sh
LAB_RECORDINGS_DIRS="$PWD/data/pages/viewer:$PWD/experiments/ollama-demo/viewer" npm run dev
```

Select the new run in Runs. The historical Ig Nobel recording stays available.
Keep the model API private; teammates need a separately shared lab/backend URL.

## Verified local trial — November 15, 2026

On an Apple M4 / 24 GB, `experiments/ollama-demo-v2` completed one Hadamard21
round with eight Qwen3 4B workers and a Qwen3 8B supervisor. The first pilot was
stopped after invalid responses; the second used constrained JSON output and
explicit descriptor vocabulary.

- One supervisor request: 175.8 seconds; reasoning enabled (7,115 recorded characters).
- Eight worker requests: median 10.7 seconds, 109-121 reported output tokens each;
  all had thinking disabled and zero returned reasoning characters.
- Seven candidates finished evaluation; one candidate failed with invalid Python.
- None beat the baseline loss of 0.202360. No improvement was accepted and no critic
  model call was needed. This demonstrates local execution, not research superiority.
- No Exa search, past.dev request, hosted model call, or Git push was made by the run.
- The planner suggested some ineffective changes and one worker's prose misdescribed
  its actual patch. Judge results by evaluated patches and metrics, not agent captions.

The viewer run ID is `e0660da4-49c2-5a89-af44-31e4374a7e63`. This completed run is
available at port 5178 alongside the historical Ig Nobel replay. The local output
folders are ignored by Git; reproduce with the launcher or explicitly export them.

Validation: 157 frontend tests, 7 local-mode tests, 22 research-fix tests, 10 Tinker
regression tests, 18 setup/resume tests, and 11 exporter tests passed, plus Ruff
and the TypeScript/Vite build. macOS path-sensitive setup tests used a resolved TMPDIR.
