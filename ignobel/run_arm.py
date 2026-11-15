#!/usr/bin/env python3
"""Run one arm.

  MOCK=1 python run_arm.py --arm full --agents 4 --rounds 3 --seed 0 --out runs/mock

yoked_random needs the paired full run (same seed and agents) first; by default it reads
<out>/../full-s<seed>/events.jsonl, or pass --yoke-from PATH.
"""
import argparse
import asyncio
import collections
import os
import shutil
from pathlib import Path

import agents
import config
import events
import llm
import policy
from world import World

ARMS = {
    "full":          {"policy": "boredom", "memory": "local",  "exchange": True},
    "yoked_random":  {"policy": "yoked",   "memory": "local",  "exchange": True},
    "single":        {"policy": "never",   "memory": "local",  "exchange": False, "agents": 1},
    "shared_memory": {"policy": "boredom", "memory": "shared", "exchange": False},
    "no_exchange":   {"policy": "boredom", "memory": "local",  "exchange": False},
}


def read_yoke(path: str | Path, seed: int, n_agents: int) -> dict[int, int]:
    """Per-round snap counts (snaps and breakouts) from the paired full run."""
    path = Path(path)
    if not path.exists():
        raise FileNotFoundError(f"yoked_random needs the paired full run first: {path} not found")
    evs = list(events.read(path))
    names = {e.agent for e in evs if e.type == "boredom"}
    if any(e.arm != "full" or e.seed != seed for e in evs) or len(names) != n_agents:
        raise ValueError(f"{path} is not a full-arm run with seed {seed} and {n_agents} agents")
    return dict(collections.Counter(e.round for e in evs if e.type == "snap"))


def build_world(arm: str, n_agents: int, seed: int, out: str | Path, cfg: dict | None = None,
                memory_backend: str | None = None, yoke_from: str | Path | None = None) -> World:
    cfg = cfg or config.load()
    spec = ARMS[arm]
    n = spec.get("agents", n_agents)
    specs = agents.load_specs(n=n)
    yoke = None
    if spec["policy"] == "yoked":
        yoke = read_yoke(yoke_from or Path(out).parent / f"full-s{seed}" / "events.jsonl", seed, n)
        pol = policy.never_policy
    elif spec["policy"] == "boredom":
        pol = policy.boredom_policy
    else:
        pol = policy.never_policy
    backend = spec["memory"]
    if backend == "local" and (memory_backend or os.environ.get("MEMORY_BACKEND")) == "pastdev":
        backend = "pastdev"
    return World(arm, seed, specs, pol, backend, spec["exchange"], out, cfg, yoke=yoke)


def main(argv=None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--arm", choices=sorted(ARMS), default="full")
    p.add_argument("--agents", type=int, default=4)
    p.add_argument("--rounds", type=int, default=3)
    p.add_argument("--seed", type=int, default=0)
    p.add_argument("--out", default=None, help="default runs/<arm>-s<seed>")
    p.add_argument("--resume", action="store_true", help="continue from state.json in --out")
    p.add_argument("--yoke-from", default=None, help="yoked_random: the paired full run's events.jsonl")
    args = p.parse_args(argv)

    out = Path(args.out or f"runs/{args.arm}-s{args.seed}")
    if not args.resume and out.exists():
        shutil.rmtree(out)  # a fresh run always starts from nothing, so same seed => same file
    out.mkdir(parents=True, exist_ok=True)
    llm.set_prompt_log(out / "prompts.jsonl")

    world = build_world(args.arm, args.agents, args.seed, out, yoke_from=args.yoke_from)
    if args.resume and world.load_state():
        print(f"resuming after round {world.round_done}")
    asyncio.run(world.run(args.rounds))

    counts = collections.Counter(e.type for e in events.read(out / "events.jsonl"))
    print(f"wrote {out / 'events.jsonl'} ({sum(counts.values())} events, {llm.usage['tokens']} tokens)")
    for t in sorted(events.EVENT_TYPES):
        print(f"  {t:20s} {counts.get(t, 0)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
