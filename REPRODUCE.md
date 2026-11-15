# Reproducing the results

Caffeinated tests whether a deterministic, psychology-grounded boredom meter keeps AI scientist
swarms out of repetitive, low-payoff loops (see the [README](README.md#team)). Every number in
[docs/results.md](docs/results.md) and
[experiments/confirmatory/RESULTS.md](experiments/confirmatory/RESULTS.md) comes from run
artifacts committed under `experiments/` and `data/`. There are three levels of reproduction:

| Level | What it shows | Needs | Time |
|---|---|---|---|
| 1. Verify | Published numbers recompute from the committed artifacts | Docker (or Python 3.10+) | 1 min |
| 2. Regrade | Committed winning candidates still score the same in the sandbox | Docker, internet (BixBench download) | 5 min |
| 3. Rerun | New swarm runs with the same settings | Docker, `TINKER_API_KEY`, optionally `EXA_API_KEY`, `PAST_API_KEY` | hours, costs API credits |

Levels 1 and 2 are deterministic. Level 3 is not: LLM sampling differs between runs even with
`--seed`, so a rerun gives a new sample of the same experiment, not the same numbers.

## Container images

Each GitHub release publishes two images through
[.github/workflows/release.yml](.github/workflows/release.yml), and the release notes list
their digests. Pull by digest to get exactly the published environment.

| Image | Contents |
|---|---|
| `ghcr.io/arii/caffeinated:<tag>` | Reproduction environment: this repository, Python 3.12 with `requirements-dev.txt`, Node 22 with `package-lock.json`, Docker CLI |
| `ghcr.io/arii/caffeinated-testcases:<tag>` | Candidate sandbox (`testcases/Dockerfile`), Python 3.11 with the pinned scientific stack |

All base images are pinned by digest, Python packages by `uv.lock` (exported to
`requirements*.txt`) and npm packages by `package-lock.json`. To build them yourself instead:

```sh
git clone https://github.com/arii/caffeinated && cd caffeinated
docker build -t caffeinated-repro .
docker build -t caffeinated-testcases:py311-v2 -f testcases/Dockerfile testcases
```

The commands below use `caffeinated-repro`; substitute `ghcr.io/arii/caffeinated:<tag>` for a
release image. Regrading and runs look for the sandbox image under the local name
`caffeinated-testcases:py311-v2`, so retag a pulled sandbox image:
`docker tag ghcr.io/arii/caffeinated-testcases:<tag> caffeinated-testcases:py311-v2`. If it is
missing, the entry point builds it.

## 1. Verify the published numbers

```sh
docker run --rm caffeinated-repro            # same as: docker run --rm caffeinated-repro verify
```

[scripts/verify_results.py](scripts/verify_results.py) recomputes each headline number
(held-out scores and Wilson intervals, Hadamard optimum, Ig Nobel study counts, confirmatory
arm means and exact sign-flip p-values, memory hit rates, IgJudge winner) from the raw
ledgers and compares it with the published value. It prints one `ok`/`FAIL` line per check and
exits non-zero on any mismatch; `--json` gives machine-readable output. Without Docker:

```sh
python3 scripts/verify_results.py            # standard library only
```

## 2. Regrade the committed winners

```sh
mkdir -p /tmp/caffeinated-sandbox
docker run --rm \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/caffeinated-sandbox:/tmp/caffeinated-sandbox \
  caffeinated-repro regrade
```

This downloads the public BixBench capsules from
[futurehouse/BixBench](https://huggingface.co/datasets/futurehouse/BixBench), rebuilds the
dev/held-out split, and grades the nine strict-guard confirmatory winners (`train.py` at each
`heldout.json` commit) with the trusted evaluator. Candidate code runs only inside the sandbox
container (`--network none`, read-only root, all capabilities dropped, 4 GB / 1 CPU / 64 PIDs).

The reproduction container starts sandbox containers on the host daemon, which is why it needs
the socket. The sandbox bind-mounts temporary directories by path, so `/tmp/caffeinated-sandbox`
must be mounted at the same path inside and outside. Mounting the Docker socket gives the
container control of the host daemon; use a disposable VM if that matters to you.

## 3. Rerun experiments

Copy `.env.example` to `.env` and fill in the keys you need:

| Key | Used for |
|---|---|
| `TINKER_API_KEY` | Kimi K3.1 Pro through Tinker, the model used for every published run (`--llm tinker`) |
| `EXA_API_KEY` | Web research for workers (`--exa on`, Ig Nobel runs) |
| `PAST_API_KEY` | past.dev shared memory (`--memory-backend pastdev`) |

Then run `swarm.py` through the image. Every run writes `run.json` with its exact settings,
`swarm_commit`, Boredom Meter profile hash and model; copy those flags to repeat a published
run. For example the strict-guard confirmatory B arm, seed 3001:

```sh
docker run --rm --env-file .env \
  -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/caffeinated-sandbox:/tmp/caffeinated-sandbox \
  -v "$PWD/out:/workspace/caffeinated/out" \
  caffeinated-repro swarm --task bixbench_numeric --arm B --seed 3001 --rounds 12 \
    --llm tinker --exa off --literature off --memory-backend local --no-push \
    --out out/bixbench-B-3001
```

The arms, seeds and rounds of the confirmatory study are fixed in
[experiments/confirmatory/PREREGISTRATION.md](experiments/confirmatory/PREREGISTRATION.md).
After the runs, grade held-out answers with `held_out.py` and rebuild the tables with
`experiments/confirmatory/report.py`. A free smoke test needs no keys:

```sh
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/caffeinated-sandbox:/tmp/caffeinated-sandbox \
  -e EXA=off -e MEMORY_BACKEND=local \
  caffeinated-repro swarm --task hadamard19 --arm B --rounds 1 --llm fake --no-push
```

Fake-LLM runs exist to test the machinery and are never reported as results.

## Tests and the Lab viewer

```sh
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
  -v /tmp/caffeinated-sandbox:/tmp/caffeinated-sandbox caffeinated-repro check   # make check + backend tests
docker run --rm caffeinated-repro test-js                                        # npm test + npm run build
docker run --rm -p 5175:5175 caffeinated-repro lab                               # http://localhost:5175
```

## Dataset

[scripts/export_hf_dataset.py](scripts/export_hf_dataset.py) packages the committed artifacts
as a Hugging Face dataset, published at
[onasafari/caffeinated-runs](https://huggingface.co/datasets/onasafari/caffeinated-runs): a dataset card, five JSONL tables for the viewer (`runs`,
`candidates`, `ignobel_studies`, `confirmatory_heldout`, `igjudge`), byte copies of the raw
files and a `checksums.sha256`. The release workflow attaches the result to each release as
`caffeinated-dataset-<tag>.tar.gz`. To build and upload it yourself:

```sh
docker run --rm -v "$PWD/dist:/workspace/caffeinated/dist" caffeinated-repro export-dataset
hf upload <namespace>/caffeinated-runs dist/hf-dataset --repo-type dataset
```

The export refuses to run if any file looks like it contains an API key. BixBench data and the
public datasets behind the Ig Nobel studies are referenced by URL and sha256, not redistributed.

## Known limits

- BixBench scores are on a small numeric subset (7 held-out questions for `bixbench_mini`), not
  the full benchmark. Intervals are wide; see the Wilson intervals in the verifier output.
- `playworld_mini` and `playworld_hard` are synthetic proxies, not official PlayWorld or Genie 3.
- The confirmatory study was cut short by API credit limits; the deviations are listed in its
  RESULTS.md. No arm difference reached significance.
- `testcases/bixbench_numeric/prepare.py` downloads BixBench from the dataset's `main` branch;
  `bixbench_mini` pins a revision and checks sha256. If upstream changes, regrading
  `bixbench_numeric` can drift.
