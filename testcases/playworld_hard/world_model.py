"""Editable world model for the PlayWorld mini task. The agent may change anything here.

predict(context_frames, context_actions, future_actions) -> list of predicted 5x5 frames,
one per future action. Frames are lists of ints: 0 floor, 1 wall, 2 switch, 3 lamp off,
4 lamp on, 5 agent (always the centre), 6 out of bounds. Public examples with the same
format (plus future_frames) are in data/train.jsonl. Do not import env.py.
Baseline: the world never changes, so repeat the last context frame.
"""


def predict(context_frames, context_actions, future_actions):
    last = context_frames[-1]
    return [[row[:] for row in last] for _ in future_actions]
