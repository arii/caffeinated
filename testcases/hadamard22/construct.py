"""Editable construction for the Hadamard order-22 task. The agent may change anything here.

Print {"matrix": [[...]]}: 22 rows of 22 entries, each the integer 1 or -1.
Baseline: random restarts plus greedy single-entry flips, scored with a float determinant.
"""

import json

import numpy as np

N = 22
RESTARTS = 4
SEED = 0
CONSTRUCTION = 0
OBJECTIVE = 0
rng = np.random.default_rng(SEED)
best, best_det = None, -1.0


def objective(matrix):
    value = abs(np.linalg.det(matrix))
    if OBJECTIVE:
        value += 1e-3 * np.abs(np.sum(matrix, axis=0)).sum()
    return value


for _ in range(RESTARTS):
    if CONSTRUCTION:
        a = np.array(
            [[1 if (j - i) % N < (N + 1) // 2 else -1 for j in range(N)] for i in range(N)]
        )
    else:
        a = rng.choice([-1, 1], size=(N, N))
    cur = objective(a)
    improved = True
    while improved:
        improved = False
        for i in range(N):
            for j in range(N):
                a[i, j] *= -1
                d = objective(a)
                if d > cur + 1e-6:
                    cur, improved = d, True
                else:
                    a[i, j] *= -1
    if cur > best_det:
        best, best_det = a.copy(), cur
print(json.dumps({"matrix": best.astype(int).tolist()}))
