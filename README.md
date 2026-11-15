# Artificial Scientist Swarms

Artificial Scientist Swarms explores how autonomous researchers can use boredom to
decide when to refine an idea and when to try another direction. The autoresearch
backend coordinates agents that edit programs, run CPU benchmarks in Docker and keep
measured improvements. The Ig Nobel community pairs researchers and a statistician
around private datasets, conversations and simulated studies. Viewer artifacts connect
their experiments, decisions and outcomes into a replayable timeline.

## Where to start

- [Autoresearch backend and judge guide](https://github.com/arii/caffeinated/blob/autoresearch/README.md)
  on the `autoresearch` branch.
- [Ig Nobel research community](ignobel/README.md) in `ignobel/` on this branch.
- [Viewer API and data-model contract](docs/swarm-viewer-api.md), including implementation status.

## Run the Ig Nobel mock community

With Python and Docker running, from the repository root:

```sh
cd ignobel
python3 -m venv .venv
.venv/bin/python -m pip install -r requirements.txt
MOCK=1 .venv/bin/python run_arm.py --arm full --agents 4 --rounds 3 --seed 0
MOCK=1 .venv/bin/python score.py
```

The run writes `ignobel/runs/full-s0/events.jsonl`, round checkpoints and prompt logs.
The separate scoring command writes `scores.jsonl` beside the events. Open the
[community guide](ignobel/README.md) for the arms, event schema and tests.
