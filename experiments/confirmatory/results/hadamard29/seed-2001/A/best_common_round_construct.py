"""Editable construction for the Hadamard order-29 task. The agent may change anything here.

Print {"matrix": [[...]]}: 29 rows of 29 entries, each the integer 1 or -1.
Baseline: random restarts plus greedy single-entry flips, scored with a float determinant.
"""

import json

import numpy as np

N = 29
RESTARTS = 4
KICKS = 12
SEED = 0
rng = np.random.default_rng(SEED)
best, best_det = None, -np.inf


def descend(a):
    cur = np.linalg.slogdet(a)[1]
    while True:
        inv = np.linalg.inv(a)
        improved = False
        for i in range(N):
            for j in range(N):
                ratio = 1.0 - 2.0 * a[i, j] * inv[j, i]
                if abs(ratio) > 1.0 + 1e-12:
                    inv += (2.0 * a[i, j] / ratio) * np.outer(inv[:, i], inv[j, :])
                    a[i, j] *= -1
                    cur += np.log(abs(ratio))
                    improved = True
        if not improved:
            return cur


for _ in range(RESTARTS):
    a = rng.choice([-1, 1], size=(N, N))
    cur = descend(a)
    local, local_det = a.copy(), cur
    if cur > best_det:
        best, best_det = a.copy(), cur
    for _ in range(KICKS):
        a = local.copy()
        for flat in rng.choice(N * N, size=3, replace=False):
            i, j = divmod(int(flat), N)
            a[i, j] *= -1
        cur = descend(a)
        if cur > best_det:
            best, best_det = a.copy(), cur

# Bordered Paley candidate: H is a normalized Hadamard matrix of order 28.
def gf_add(x, y):
    return tuple((x[k] + y[k]) % 3 for k in range(3))


def gf_mul(x, y):
    d = [0] * 5
    for i in range(3):
        for j in range(3):
            d[i + j] += x[i] * y[j]
    # x^3 = x + 2 and x^4 = x^2 + 2*x modulo x^3+2*x+1.
    return ((d[0] + 2 * d[3]) % 3,
            (d[1] + d[3] + 2 * d[4]) % 3,
            (d[2] + d[4]) % 3)


elements = [(i % 3, (i // 3) % 3, i // 9) for i in range(27)]
squares = {gf_mul(x, x) for x in elements if x != (0, 0, 0)}

def chi(x):
    if x == (0, 0, 0):
        return 0
    return 1 if x in squares else -1


q = np.empty((27, 27), dtype=int)
for i, x in enumerate(elements):
    for j, y in enumerate(elements):
        q[i, j] = chi(gf_add(y, tuple(-z % 3 for z in x)))
conference = np.zeros((28, 28), dtype=int)
conference[0, 1:] = 1
conference[1:, 0] = -1
conference[1:, 1:] = q
h = conference + np.eye(28, dtype=int)
h = h * h[:, :1]
h = h * h[:1, :]
assert np.array_equal(h @ h.T, 28 * np.eye(28, dtype=int))

paley_rng = np.random.default_rng(202503)
best_t = -1
best_border = None


def stabilize(v):
    v = v.astype(int, copy=True)
    for _ in range(60):
        u = np.where(h.T @ v >= 0, 1, -1)
        new_v = np.where(h @ u >= 0, 1, -1)
        if np.array_equal(new_v, v):
            break
        v = new_v
    t = int(u @ (h.T @ v))
    return abs(t), u, v


def consider(v):
    global best_t, best_border
    value, u, stable_v = stabilize(v)
    if value > best_t:
        best_t = value
        best_border = (u.copy(), stable_v.copy())


if best is not None:
    consider(best[1:, 0])
for _ in range(4096):
    consider(paley_rng.choice([-1, 1], size=28))
for _ in range(2048):
    v = best_border[1].copy()
    count = int(paley_rng.integers(1, 5))
    for coordinate in paley_rng.choice(28, size=count, replace=False):
        v[coordinate] *= -1
    consider(v)

u, v = best_border
t = int(u @ (h.T @ v))
paley = np.empty((N, N), dtype=int)
paley[0, 0] = 1 if t >= 0 else -1
paley[0, 1:] = u
paley[1:, 0] = v
paley[1:, 1:] = h
paley_det = 14.0 * np.log(28.0) + np.log1p(best_t / 28.0)
if paley_det > best_det:
    best, best_det = paley, paley_det

# Refine the selected matrix with coordinated pairs of entry flips.  The
# determinant lemma evaluates each proposal without a full determinant.
import random


def improve_singles(a):
    inverse = np.linalg.inv(a)
    while True:
        moved = False
        for i in range(N):
            for j in range(N):
                ratio = 1.0 - 2.0 * a[i, j] * inverse[j, i]
                if ratio > 1.0 + 1e-10:
                    a[i, j] *= -1
                    inverse = np.linalg.inv(a)
                    moved = True
                    break
            if moved:
                break
        if not moved:
            return inverse


def exact_abs_det(a):
    # Fraction-free Bareiss elimination gives an exact integer determinant.
    work = [[int(x) for x in row] for row in a]
    previous = 1
    for k in range(N - 1):
        pivot = next((r for r in range(k, N) if work[r][k] != 0), None)
        if pivot is None:
            return 0
        if pivot != k:
            work[k], work[pivot] = work[pivot], work[k]
        pivot_value = work[k][k]
        for i in range(k + 1, N):
            for j in range(k + 1, N):
                work[i][j] = (work[i][j] * pivot_value
                              - work[i][k] * work[k][j]) // previous
            work[i][k] = 0
        previous = pivot_value
    return abs(work[-1][-1])


incumbent = best.astype(int, copy=True)
candidate = incumbent.copy()
inverse = improve_singles(candidate)
pair_rng = random.Random(2906)
accepted_pairs = 0
for _ in range(200000):
    if accepted_pairs >= 8:
        break
    first, second = pair_rng.sample(range(N * N), 2)
    i, j = divmod(first, N)
    k, l = divmod(second, N)
    left = np.zeros((N, 2))
    right = np.zeros((N, 2))
    left[i, 0] = -2.0 * candidate[i, j]
    left[k, 1] = -2.0 * candidate[k, l]
    right[j, 0] = 1.0
    right[l, 1] = 1.0
    ratio = np.linalg.det(np.eye(2) + right.T @ inverse @ left)
    if ratio > 1.0 + 1e-10:
        candidate[i, j] *= -1
        candidate[k, l] *= -1
        accepted_pairs += 1
        inverse = improve_singles(candidate)

if exact_abs_det(candidate) > exact_abs_det(incumbent):
    best = candidate

print(json.dumps({"matrix": best.astype(int).tolist()}))
