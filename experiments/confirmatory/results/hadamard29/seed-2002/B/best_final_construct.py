"""Editable construction for the Hadamard order-29 task. The agent may change anything here.

Print {"matrix": [[...]]}: 29 rows of 29 entries, each the integer 1 or -1.
Baseline: random restarts plus greedy single-entry flips, scored with a float determinant.
"""

import json

import numpy as np

N = 29
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
def bordered_two_circulant(bits):
    first_a = bits[:14]
    first_b = bits[14:]
    block_a = np.array([[first_a[(j - i) % 14] for j in range(14)] for i in range(14)])
    block_b = np.array([[first_b[(j - i) % 14] for j in range(14)] for i in range(14)])
    candidate = np.ones((N, N), dtype=float)
    candidate[1:15, 1:15] = block_a
    candidate[1:15, 15:29] = block_b
    candidate[15:29, 1:15] = block_b
    candidate[15:29, 15:29] = block_a
    return candidate


block_rng = np.random.default_rng(37)
for _ in range(8):
    bits = block_rng.choice([-1, 1], size=28)
    candidate = bordered_two_circulant(bits)
    cur = objective(candidate)
    improved = True
    while improved:
        improved = False
        for k in range(28):
            bits[k] *= -1
            candidate = bordered_two_circulant(bits)
            value = objective(candidate)
            if value > cur + 1e-6:
                cur, improved = value, True
            else:
                bits[k] *= -1
    candidate = bordered_two_circulant(bits)
    if cur > best_det:
        best, best_det = candidate.copy(), cur

# Paley-Hadamard order 28 over GF(27), followed by exact border-spin ascent.
def gf_add(a, b):
    result = 0
    place = 1
    for _ in range(3):
        result += ((a % 3 + b % 3) % 3) * place
        a //= 3
        b //= 3
        place *= 3
    return result


def gf_neg(a):
    result = 0
    place = 1
    for _ in range(3):
        result += ((-a % 3) % 3) * place
        a //= 3
        place *= 3
    return result


def gf_mul(a, b):
    aa = [a % 3, (a // 3) % 3, a // 9]
    bb = [b % 3, (b // 3) % 3, b // 9]
    c = [aa[0] * bb[0], aa[0] * bb[1] + aa[1] * bb[0],
         aa[0] * bb[2] + aa[1] * bb[1] + aa[2] * bb[0],
         aa[1] * bb[2] + aa[2] * bb[1], aa[2] * bb[2]]
    return (c[0] + 2 * c[3]) % 3 + 3 * ((c[1] + c[3] + 2 * c[4]) % 3) + 9 * ((c[2] + c[4]) % 3)


residues = {gf_mul(a, a) for a in range(1, 27)}
paley_q = np.zeros((27, 27), dtype=int)
for i in range(27):
    for j in range(27):
        difference = gf_add(j, gf_neg(i))
        paley_q[i, j] = 0 if difference == 0 else (1 if difference in residues else -1)
hadamard = np.ones((28, 28), dtype=int)
hadamard[1:, 1:] = paley_q - np.eye(27, dtype=int)

border_rng = np.random.default_rng(29028)
for _ in range(256):
    y = border_rng.choice([-1, 1], size=28)
    for _ in range(80):
        z = hadamard.T @ y
        x = np.where(z >= 0, -1, 1)
        w = hadamard @ x
        q_value = int(y @ w)
        current_value = abs(28 - q_value)
        flip = -1
        for j in range(28):
            trial_q = q_value - 2 * int(y[j]) * int(w[j])
            trial_value = abs(28 - trial_q)
            if trial_value > current_value:
                current_value = trial_value
                flip = j
        if flip < 0:
            break
        y[flip] *= -1
    z = hadamard.T @ y
    x = np.where(z >= 0, -1, 1)
    candidate = np.ones((N, N), dtype=float)
    candidate[0, 1:] = x
    candidate[1:, 0] = y
    candidate[1:, 1:] = hadamard
    cur = objective(candidate)
    if cur > best_det:
        best, best_det = candidate.copy(), cur

print(json.dumps({"matrix": best.astype(int).tolist()}))
