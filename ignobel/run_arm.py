#!/usr/bin/env python3
"""Run one arm.

  MOCK=1 python run_arm.py --arm full --agents 4 --rounds 3 --seed 0 --out runs/mock
"""
import argparse
import asyncio
import collections
import os
import shutil
from functools import partial
from pathlib import Path

import agents
import config
import events
import families
import llm
import policy
from world import World

ARMS = {
    "full":          {"policy": "boredom", "memory": "local",  "exchange": True},
    "random_snap":   {"policy": "random",  "memory": "local",  "exchange": True},
    "single":        {"policy": "never",   "memory": "local",  "exchange": False, "agents": 1, "spawn": False},
    "shared_memory": {"policy": "boredom", "memory": "shared", "exchange": False},
    "no_exchange":   {"policy": "boredom", "memory": "local",  "exchange": False},
}


def build_world(arm: str, n_agents: int | None, seed: int, out: str | Path, cfg: dict | None = None,
                memory_backend: str | None = None, roster: str | None = None) -> World:
    """roster: families (mothers spawn daughter labs, families.yaml) or flat (agents.yaml); default from config."""
    cfg = cfg or config.load()
    spec = ARMS[arm]
    n = spec.get("agents", n_agents)
    roster = roster or cfg.get("roster", "flat")
    mothers = None
    if roster == "families":
        mothers = families.load()
        specs = families.initial_specs(mothers, Path(out) / "data", seed, n)
    elif roster == "flat":
        specs = agents.load_specs(n=n or 4)
    else:
        raise ValueError(f"roster must be families or flat, not {roster!r}")
    if spec["policy"] == "boredom":
        pol = partial(policy.boredom_policy, threshold=float(cfg.get("boredom_threshold", 0.5)))
    elif spec["policy"] == "random":
        pol = partial(policy.random_policy, snap_prob=float(cfg.get("random_snap_prob", 0.3)))
    else:
        pol = policy.never_policy
    backend = spec["memory"]
    if backend == "local" and (memory_backend or os.environ.get("MEMORY_BACKEND")) == "pastdev":
        backend = "pastdev"
    return World(arm, seed, specs, pol, backend, spec["exchange"], out, cfg,
                 mothers=mothers, spawn=spec.get("spawn", True))


def main(argv=None) -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--arm", choices=sorted(ARMS), default="full")
    p.add_argument("--agents", type=int, default=None,
                   help="starting agents (default: every daughter in families.yaml, or 4 for --roster flat)")
    p.add_argument("--roster", choices=["families", "flat"], default=None, help="default: config.yaml roster")
    p.add_argument("--rounds", type=int, default=3)
    p.add_argument("--seed", type=int, default=0)
    p.add_argument("--out", default=None, help="default runs/<arm>-s<seed>")
    p.add_argument("--resume", action="store_true", help="continue from state.json in --out")
    args = p.parse_args(argv)

    out = Path(args.out or f"runs/{args.arm}-s{args.seed}")
    if not args.resume and out.exists():
        shutil.rmtree(out)  # a fresh run always starts from nothing, so same seed => same file
    out.mkdir(parents=True, exist_ok=True)
    llm.set_prompt_log(out / "prompts.jsonl")

    world = build_world(args.arm, args.agents, args.seed, out, roster=args.roster)
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
