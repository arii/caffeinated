# Ig Nobel Prize Winning Artificial Scientist Swarms

> Development is inactive. This repository preserves the SF AI Research Hack project built on November 14-15, 2026, including its recorded results and limitations. The [recorded replay](https://arii.github.io/caffeinated) and [demo](https://arii.github.io/caffeinated/about.html) remain available. For newer work, see [Ariel Anders' portfolio](https://arii.github.io/).

We make autoresearch swarms better by making sure they do not stay bored.

Our hypothesis is that existing AI scientist swarms get stuck because they are bored, trapped in repetitive, low-payoff loops long after returns have diminished. Artificial Scientist Swarms adds a deterministic Boredom Meter grounded in psychology so the swarm does not stay bored. Recomputed from the shared experiment ledger, it tracks stagnation, novelty deficit and overload to detect boredom and force a seeking state, moving from routine exploitation to paradigm breakout. We test this controller on known benchmarks and an Ig Nobel challenge: research that makes you laugh, then think. Agents search via Exa, share memory on past.dev, pre-register real-data tests, and can be ranked by a two-judge committee and final IgJudge.

Boredom is not laziness: it is a signal that pushes humans to explore when a routine stops paying off. Our design draws on optimal arousal and curiosity (Berlyne, 1960), the meaning and attention model (Westgate & Wilson, 2018), attentional failure (Eastwood et al., 2012), and boredom as a push toward new goals (Bench & Lench, 2013). See the [psychology basis and bibliography](boredom_meter/README.md#references); the meter is an engineering interpretation, not a measurement of subjective experience.

## Team and hackathon results

Built by Team caffeinated: Ariel Anders, Jialin Feng, Neeraj Shah and Masha Baidachna, at the SF AI Research Hack, Nov 14–15, 2026, hosted by Iterate.

- Top two teams in the AI autoresearch track.
- Second place in the past.dev sponsor challenge.
- [Live Lab replay](https://arii.github.io/caffeinated)
- [About and 85-second demo video](https://arii.github.io/caffeinated/about.html)

The submission is tagged [sf-ai-research-hack-2026](https://github.com/arii/caffeinated/tree/sf-ai-research-hack-2026) at commit `0b880e2`. Later changes are post-hackathon work. The project name is not a claim that an Ig Nobel Prize has been awarded.

## How it works

Workers propose changes, a sandbox evaluates them, and a shared append-only ledger records attempts and outcomes. Any agent can recompute the Boredom Meter from that ledger and the task profile, without an LLM opinion or network call.

```text
B = 0.45 * (1 - novelty) + 0.45 * stagnation + 0.10 * overload
```

Novelty measures distance between structured attempt descriptors. Stagnation measures time since significant improvement; overload captures failed or repetitive attempts. With default thresholds, crossing the threshold forces a regime switch out of exploitation into exploration:

- `EXPLOIT`: refine current approaches.
- `BOREDOM_SNAP` at `B >= 0.70`: redirect workers toward underexplored ideas.
- `PARADIGM_BREAKOUT` at `B >= 0.85`, with sufficient frontier stall: require a different top-level mechanism.

Warmup, hysteresis and convergence rules also apply. The novelty gate rejects near-duplicates and failed basins in exploratory regimes. A provisional new best needs critic confirmation before becoming the incumbent. Executable candidates run in a restricted Docker sandbox, not on the host; Ig Nobel studies use host-controlled preregistered tests instead of executing candidate code. See [the exact measurement and policy](docs/boredom.md).

## Results with caveats

The controller changes exploration policy deterministically. That is implemented behavior, not proof that it improves research quality.

- **Swarm comparison:** the preregistered comparison stopped early. Mean held-out accuracy was 0.26 for the meter-driven swarm, 0.24 for a single agent and 0.11 for the swarm without the meter. In the complete comparison set, selected after it finished, the order reversed: single agent 0.30, swarm without the meter 0.09, meter-driven swarm 0.06. Each used three paired runs; neither ordering is statistically significant. Grader changes, rejected valid candidates and unequal acceptance rules limit interpretation.
- **BixBench Mini:** one run improved held-out accuracy from 1/7 to 6/7 questions. The best score's Wilson 95% interval is 0.487–0.974; the baseline interval is 0.026–0.513. This is a small split, not a full BixBench result.
- **Other tasks:** the recorded Hadamard19 run reached its known optimum. Playworld Mini loss moved from 0.87225 to 0.2535 on 200 held-out synthetic episodes; this is a proxy, not the official PlayWorld benchmark.
- **Ig Nobel:** the older `out-ignobel` recording registered 21 studies, ran 13, and had 11 pass preregistered gates; 10 also pass the effect-size floor added afterward. These are known relationships in teaching datasets, not discoveries. That recording has no committee result. The default ZIP replay is a different run; [published IgJudge rankings](data/igjudge/ignobel-real-runs/results-zip.md) must not be confused with a prize award or the older run's gate counts.

See [results and limitations](docs/results.md) and [judge Q&A](docs/judge-qa.md) for per-run provenance and statistical caveats.

## past.dev challenge

past.dev stores hypotheses, results and shared lessons. Run-scoped identities and audiences isolate experiments; stable hypothesis records track changing status. The meter measures and regulates exploration, workers propose ideas, and evaluators and critics decide outcomes. Memory changes what workers can recall, not the deterministic score.

On 419 real memories and 40 hand-written probes, past.dev retrieved the target first 0.65 of the time versus 0.30 for local lexical TF-IDF; hit@8 was 0.95 versus 0.825, with median latency 562 ms versus 15 ms. Hand-written paraphrases favor semantic retrieval, and no stronger local embedding baseline was tested. These are retrieval results, not evidence of improved research outcomes. See the [comparison](experiments/memory-comparison/README.md) and [full memory design, live comparison and caveats](docs/past-dev.md).

## Run and explore

Requires Node 22.18+, Python 3.12, Git and uv.

```sh
npm ci
npm run setup
npm run dev
```

Open http://localhost:5175. The local recording API runs on port 8765. No credentials are needed for replay. The default archive is `data/replays/ignobel-real-runs.zip`; Pages exports its recordings alongside the older `out-ignobel` recording, five recordings in total. The [export script](scripts/export_pages.py) defines that merge.

Use Archive to select a recording, Play and the timeline to navigate, and the evidence panels to inspect recorded studies and sources. Movement is illustrative; scores, events and statements come from source records. Rewinding removes later state. Replay does not launch experiments or make model calls.

The backend discovers live viewer directories as well as ZIP recordings. Its read-only recording routes include listing, detail, delta updates and artifact retrieval. See [integration](docs/backend-integration.md) for `LAB_RECORDINGS_DIRS`, archive imports and endpoint payloads.

Live research requires provider credentials and the task sandbox. The [CPU quickstart](docs/autoresearch-backend.md#quickstart) covers setup and offline dry runs. The [OpenAI runner guide](docs/openai-swarm.md) documents optional paid execution; [the roadmap](docs/roadmap.md) sets the current Devin-only development direction.

## Reproduce and check

[REPRODUCE.md](REPRODUCE.md) explains artifact verification, sandbox regrading and experiment reruns. [Releases](https://github.com/arii/caffeinated/releases) publish pinned images; artifacts are also on [Hugging Face](https://huggingface.co/datasets/onasafari/caffeinated-runs).

```sh
docker run --rm ghcr.io/arii/caffeinated:v1.0.0
npm test
npm run build
make check
```

The Python checks require the development dependencies and sandbox image described in the backend guide.

## Documentation

| Guide | Contents |
| --- | --- |
| [Boredom definition](docs/boredom.md) | Exact components, thresholds, regimes and ledger representation. |
| [Boredom Meter](boredom_meter/README.md) | Psychology, bibliography, CLI, profiles and toy evidence. |
| [Architecture](docs/architecture.md) | System layers, trust boundaries, Exa and past.dev. |
| [Orchestration](docs/orchestration.md) | Agent roles, round lifecycle, gates and confirmation. |
| [Results](docs/results.md) | Recorded numbers, comparisons and limitations. |
| [Memory comparison](experiments/memory-comparison/README.md) | Same-data retrieval experiment and caveats. |
| [past.dev design](docs/past-dev.md) | Identity, audiences, memory updates and historical live comparisons. |
| [Judge Q&A](docs/judge-qa.md) | Evidence, novelty claims and hard questions. |
| [Roadmap](docs/roadmap.md) | Current constraints and proposed next experiments. |
| [Reproduction](REPRODUCE.md) | Verify numbers and regrade committed candidates. |
| [Testcases](testcases/README.md) | Tasks, baselines, scoring and sandbox setup. |
| [Research protocol](program.md) | Worker loop and regime rules. |
| [Devin replay](docs/devin-replay.md) | Convert session events to Lab recordings. |
| [CPU backend](docs/autoresearch-backend.md) | Install, run and publish a research swarm. |
| [Backend integration](docs/backend-integration.md) | Recording producers, imports and live directory publishing. |
| [Viewer contract](docs/swarm-viewer-api.md) | Recording schema, implemented endpoints and proposed API. |
| [Lab backend design](docs/lab-backend-design.md) | Replay architecture and execution boundary. |
| [Historical backend map](docs/backend.md) | Pinned implementation and formula references. |
| [OpenAI runner](docs/openai-swarm.md) | Continuous Sol/Luna execution and budget limits. |
