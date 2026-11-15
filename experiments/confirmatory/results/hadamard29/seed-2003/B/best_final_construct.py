"""Border a Paley type-II Hadamard matrix of order 28."""

import json

import numpy as np


def character(x):
    if x == 0:
        return 0
    return 1 if pow(x, 6, 13) == 1 else -1


# A symmetric conference matrix of order 14, followed by Paley type II.
c = np.zeros((14, 14), dtype=int)
c[0, 1:] = 1
c[1:, 0] = 1
for x in range(13):
    for y in range(13):
        c[x + 1, y + 1] = character(y - x)
eye = np.eye(14, dtype=int)
a, b = c + eye, c - eye
h = np.block([[a, b], [b, -a]])
assert np.array_equal(h @ h.T, 28 * np.eye(28, dtype=int))

# The Schur complement is -1-(b^T H^T c)/28.  Maximize the bilinear
# form by exact coordinate ascent over each sign vector.
rng = np.random.default_rng(0)
best_q = -1
best_b = best_c = None
for restart in range(128):
    cvec = np.ones(28, dtype=int) if restart == 0 else rng.choice([-1, 1], size=28)
    for _ in range(100):
        bvec = np.where(h.T @ cvec >= 0, 1, -1)
        new_c = np.where(h @ bvec >= 0, 1, -1)
        if np.array_equal(new_c, cvec):
            break
        cvec = new_c
    qvalue = int(bvec @ h.T @ cvec)
    if qvalue > best_q:
        best_q, best_b, best_c = qvalue, bvec.copy(), cvec.copy()

matrix = np.empty((29, 29), dtype=int)
matrix[0, 0] = -1
matrix[0, 1:] = best_b
matrix[1:, 0] = best_c
matrix[1:, 1:] = h
print(json.dumps({"matrix": matrix.tolist()}))
