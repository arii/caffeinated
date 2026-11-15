"""Editable construction for the Hadamard order-29 task. The agent may change anything here.

Print {"matrix": [[...]]}: 29 rows of 29 entries, each the integer 1 or -1.
Baseline: random restarts plus greedy single-entry flips, scored with a float determinant.
"""

import json
import math
import time

import numpy as np

N = 29
RESTARTS = 4
SEED = 2904
TIME_LIMIT = 20.0
rng = np.random.default_rng(SEED)
deadline = time.monotonic() + TIME_LIMIT
best = None
best_logdet = -math.inf


def state(matrix):
    sign, logdet = np.linalg.slogdet(matrix)
    return float(logdet), np.linalg.inv(matrix)


def descend(a, logdet, inverse):
    improved = True
    while improved and time.monotonic() < deadline:
        improved = False
        for i in range(N):
            for j in range(N):
                ratio = 1.0 - 2.0 * a[i, j] * inverse[j, i]
                gain = math.log(abs(ratio)) if ratio != 0.0 else -math.inf
                if gain > 1e-12:
                    delta = -2.0 * a[i, j]
                    inverse -= (delta / ratio) * np.outer(inverse[:, i], inverse[j, :])
                    a[i, j] *= -1
                    logdet += gain
                    improved = True
    return logdet, inverse


for _ in range(RESTARTS):
    a = rng.choice([-1, 1], size=(N, N)).astype(float)
    logdet, inverse = state(a)
    logdet, inverse = descend(a, logdet, inverse)
    if logdet > best_logdet:
        best, best_logdet = a.copy(), logdet

# Border a Paley-Hadamard matrix of order 28.  For A=[[H,u],[v^T,a]],
# the optimal border signs give |det(A)| = 28^14 * (1 + L(u)/28),
# where L(u) = sum(abs(H.T @ u)).
elements = [(x, y, z) for x in range(3) for y in range(3) for z in range(3)]
element_index = {e: i for i, e in enumerate(elements)}


def gf_sub(x, y):
    return tuple((x[k] - y[k]) % 3 for k in range(3))


def gf_mul(x, y):
    p = [0] * 5
    for i in range(3):
        for j in range(3):
            p[i + j] = (p[i + j] + x[i] * y[j]) % 3
    # In F3[x]/(x^3+2x+1), x^3 = x + 2.
    for k in (4, 3):
        c = p[k]
        p[k - 2] = (p[k - 2] + c) % 3
        p[k - 3] = (p[k - 3] + 2 * c) % 3
    return tuple(p[:3])


squares = {gf_mul(e, e) for e in elements[1:]}
q = np.empty((27, 27), dtype=float)
for i, x in enumerate(elements):
    for j, y in enumerate(elements):
        d = gf_sub(x, y)
        q[i, j] = 0.0 if d == (0, 0, 0) else (1.0 if d in squares else -1.0)
h = np.empty((28, 28), dtype=float)
h[0, 0] = 1.0
h[0, 1:] = -1.0
h[1:, 0] = 1.0
h[1:, 1:] = q + np.eye(27)

border_rng = np.random.default_rng(27029)
starts = [np.ones(28), np.where(np.arange(28) % 2 == 0, 1.0, -1.0)]
starts.extend(border_rng.choice([-1.0, 1.0], size=28) for _ in range(32))
bordered = None
bordered_logdet = -math.inf
for initial_u in starts:
    u = initial_u.copy()
    for _ in range(200):
        w = h.T @ u
        current_l = float(np.abs(w).sum())
        flipped_w = w[None, :] - 2.0 * u[:, None] * h
        values = np.abs(flipped_w).sum(axis=1)
        k = int(np.argmax(values))
        if values[k] <= current_l + 1e-9:
            break
        u[k] *= -1.0
    w = h.T @ u
    ell = float(np.abs(w).sum())
    candidate_logdet = 14.0 * math.log(28.0) + math.log1p(ell / 28.0)
    if candidate_logdet > bordered_logdet:
        v = np.where(w >= 0.0, 1.0, -1.0)
        corner = -1.0 if float(v @ w) >= 0.0 else 1.0
        candidate = np.empty((N, N), dtype=float)
        candidate[:28, :28] = h
        candidate[:28, 28] = u
        candidate[28, :28] = v
        candidate[28, 28] = corner
        bordered = candidate
        bordered_logdet = candidate_logdet

if bordered_logdet > best_logdet:
    best, best_logdet = bordered, bordered_logdet

# Escape single-flip optima with best-admissible-move tabu search.
a = best.copy()
current_logdet, inverse = state(a)
tabu_until = np.zeros((N, N), dtype=np.int64)
iteration = 0
last_improvement = 0
while time.monotonic() < deadline:
    iteration += 1
    chosen = None
    chosen_gain = -math.inf
    chosen_ratio = 0.0
    for i in range(N):
        for j in range(N):
            ratio = 1.0 - 2.0 * a[i, j] * inverse[j, i]
            if ratio == 0.0 or not math.isfinite(ratio):
                continue
            gain = math.log(abs(ratio))
            aspirational = current_logdet + gain > best_logdet + 1e-12
            if tabu_until[i, j] > iteration and not aspirational:
                continue
            if gain > chosen_gain:
                chosen = (i, j)
                chosen_gain = gain
                chosen_ratio = ratio
    if chosen is None:
        tabu_until.fill(0)
        continue
    i, j = chosen
    delta = -2.0 * a[i, j]
    inverse -= (delta / chosen_ratio) * np.outer(inverse[:, i], inverse[j, :])
    a[i, j] *= -1
    current_logdet += chosen_gain
    tabu_until[i, j] = iteration + 23 + int(rng.integers(9))
    if current_logdet > best_logdet + 1e-12:
        best, best_logdet = a.copy(), current_logdet
        last_improvement = iteration
    if iteration % 128 == 0:
        current_logdet, inverse = state(a)
    if iteration - last_improvement >= 6000:
        a = best.copy()
        current_logdet, inverse = state(a)
        tabu_until.fill(0)
        last_improvement = iteration

print(json.dumps({"matrix": best.astype(int).tolist()}))
