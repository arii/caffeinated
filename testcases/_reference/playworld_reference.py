"""Reference world models for the PlayWorld mini task: map-based models with a memory window.

memory=None remembers everything; memory=8 forgets map cells not seen in the last 8 frames
(the stand-in "closed" record). Run this file to recompute the reference scores.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent.parent / "playworld_mini"))
import evaluate

FLOOR, WALL, SWITCH, LAMP_OFF, LAMP_ON, AGENT, OOB = range(7)
MOVES = {0: (-1, 0), 1: (1, 0), 2: (0, -1), 3: (0, 1)}
BLOCKING = (WALL, LAMP_OFF, LAMP_ON, OOB)


def make_predict(memory=None):
    def predict(context_frames, context_actions, future_actions):
        cells, pos = {}, (0, 0)

        def see(frame, t):
            for i in range(5):
                for j in range(5):
                    if (i, j) != (2, 2):
                        cells[(pos[0] + i - 2, pos[1] + j - 2)] = (frame[i][j], t)

        def lookup(p, t):
            v = cells.get(p)
            return v[0] if v and (memory is None or t - v[1] <= memory) else FLOOR

        def move(a, t):
            nonlocal pos
            target = (pos[0] + MOVES[a][0], pos[1] + MOVES[a][1])
            cell = lookup(target, t)
            if cell in BLOCKING:
                return
            pos = target
            if cell == SWITCH:
                for p, (c, seen) in list(cells.items()):
                    if c in (LAMP_OFF, LAMP_ON):
                        cells[p] = (LAMP_ON if c == LAMP_OFF else LAMP_OFF, seen)

        see(context_frames[0], 0)
        for t, a in enumerate(context_actions, 1):
            move(a, t)
            see(context_frames[t], t)
        out, t = [], len(context_actions)
        for a in future_actions:
            t += 1
            move(a, t)
            frame = [[AGENT if (i, j) == (2, 2) else lookup((pos[0] + i - 2, pos[1] + j - 2), t) for j in range(5)] for i in range(5)]
            see(frame, t)
            out.append(frame)
        return out

    return predict


if __name__ == "__main__":
    print("open baseline (copy last frame):", round(evaluate.evaluate(lambda f, a, fa: [f[-1]] * len(fa)), 4))
    for m in (1, 2, 4, 8, None):
        print(f"map model, memory={m}:", round(evaluate.evaluate(make_predict(m)), 4))
