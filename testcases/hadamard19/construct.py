"""Editable construction for the Hadamard order-19 task. The agent may change anything here.

Print {"matrix": [[...]]}: 19 rows of 19 entries, each the integer 1 or -1.
Baseline: random restarts plus greedy single-entry flips, scored with a float determinant.
"""
import json
import numpy as np

N = 19
RESTARTS = 4
SEED = 0
rng = np.random.default_rng(SEED)
best, best_det = None, -1.0
for _ in range(RESTARTS):
    a = rng.choice([-1, 1], size=(N, N))
    cur = abs(np.linalg.det(a))
    improved = True
    while improved:
        improved = False
        for i in range(N):
            for j in range(N):
                a[i, j] *= -1
                d = abs(np.linalg.det(a))
                if d > cur + 1e-6:
                    cur, improved = d, True
                else:
                    a[i, j] *= -1
    if cur > best_det:
        best, best_det = a.copy(), cur
print(json.dumps({"matrix": best.astype(int).tolist()}))
