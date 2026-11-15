"""Frozen hidden simulator for the PlayWorld hard task. world_model.py must not import it.

An 11x11 walled room with 12 random interior walls, two switches and two lamps. Each switch
toggles one lamp; which switch drives which lamp is hidden and differs per world. The agent
sees a 5x5 egocentric window. Context is 16 random actions; the 24-action horizon first walks
back over the last 8 context moves (revisits) and then takes 16 fresh random actions into
cells the context may never have shown.
"""

import json
import random
import sys

N, R = 11, 2
FLOOR, WALL, SWITCH, LAMP_OFF, LAMP_ON, AGENT, OOB = range(7)
MOVES = {0: (-1, 0), 1: (1, 0), 2: (0, -1), 3: (0, 1)}  # up, down, left, right
INVERSE = {0: 1, 1: 0, 2: 3, 3: 2}
CONTEXT, REVISIT, FRESH = 16, 8, 16
BLOCKING = (WALL, LAMP_OFF, LAMP_ON, OOB)


def make_world(rng):
    g = [
        [WALL if r in (0, N - 1) or c in (0, N - 1) else FLOOR for c in range(N)] for r in range(N)
    ]
    interior = [(r, c) for r in range(1, N - 1) for c in range(1, N - 1)]
    rng.shuffle(interior)
    for r, c in interior[:12]:
        g[r][c] = WALL
    switches, lamps, start = interior[12:14], interior[14:16], interior[16]
    for r, c in switches:
        g[r][c] = SWITCH
    for r, c in lamps:
        g[r][c] = LAMP_OFF
    if rng.random() < 0.5:
        lamps = lamps[::-1]
    return {"grid": g, "pos": start, "wiring": dict(zip(switches, lamps))}


def step(w, a):
    dr, dc = MOVES[a]
    r, c = w["pos"][0] + dr, w["pos"][1] + dc
    cell = w["grid"][r][c]
    if cell in BLOCKING:
        return
    w["pos"] = (r, c)
    if cell == SWITCH:
        lr, lc = w["wiring"][(r, c)]
        w["grid"][lr][lc] = LAMP_ON if w["grid"][lr][lc] == LAMP_OFF else LAMP_OFF


def observe(w):
    pr, pc = w["pos"]
    view = []
    for dr in range(-R, R + 1):
        row = []
        for dc in range(-R, R + 1):
            r, c = pr + dr, pc + dc
            row.append(
                AGENT if dr == dc == 0 else (w["grid"][r][c] if 0 <= r < N and 0 <= c < N else OOB)
            )
        view.append(row)
    return view


def episode(seed):
    rng = random.Random(seed)
    w = make_world(rng)
    ctx_actions = [rng.randrange(4) for _ in range(CONTEXT)]
    fut_actions = [INVERSE[a] for a in reversed(ctx_actions[-REVISIT:])]
    fut_actions += [rng.randrange(4) for _ in range(FRESH)]
    frames = [observe(w)]
    for a in ctx_actions + fut_actions:
        step(w, a)
        frames.append(observe(w))
    return {
        "context_frames": frames[: CONTEXT + 1],
        "context_actions": ctx_actions,
        "future_actions": fut_actions,
        "future_frames": frames[CONTEXT + 1 :],
    }


if __name__ == "__main__" and sys.argv[1:] == ["--make-public-data"]:
    with open("data/train.jsonl", "w") as f:
        for seed in range(500):
            f.write(json.dumps(episode(seed)) + "\n")
