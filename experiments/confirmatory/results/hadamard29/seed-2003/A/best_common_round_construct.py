"""Bordered Paley-Hadamard construction for order 29."""

import json

import numpy as np

Q_ORDER = 27
H_ORDER = 28
RESTARTS = 512

# GF(27) = GF(3)[t] / (t^3 + 2*t + 1), with elements encoded in base 3.
coefficients = [((a // 1) % 3, (a // 3) % 3, (a // 9) % 3) for a in range(Q_ORDER)]


def gf_multiply(a, b):
    ca, cb = coefficients[a], coefficients[b]
    product = [0] * 5
    for i in range(3):
        for j in range(3):
            product[i + j] = (product[i + j] + ca[i] * cb[j]) % 3
    for degree in (4, 3):
        c = product[degree]
        if c:
            product[degree] = 0
            product[degree - 2] = (product[degree - 2] + c) % 3
            product[degree - 3] = (product[degree - 3] + 2 * c) % 3
    return product[0] + 3 * product[1] + 9 * product[2]


def gf_subtract(a, b):
    ca, cb = coefficients[a], coefficients[b]
    c = [(ca[i] - cb[i]) % 3 for i in range(3)]
    return c[0] + 3 * c[1] + 9 * c[2]


squares = {gf_multiply(a, a) for a in range(1, Q_ORDER)}
character = [0] + [1 if a in squares else -1 for a in range(1, Q_ORDER)]
paley_q = np.array(
    [[character[gf_subtract(j, i)] for j in range(Q_ORDER)] for i in range(Q_ORDER)],
    dtype=np.int64,
)

# For q = 3 (mod 4), this is a Hadamard matrix of order q+1.
h = np.ones((H_ORDER, H_ORDER), dtype=np.int64)
h[1:, 1:] = paley_q - np.eye(Q_ORDER, dtype=np.int64)
assert np.array_equal(h @ h.T, H_ORDER * np.eye(H_ORDER, dtype=np.int64))

rng = np.random.default_rng(29028)
best_score = -1
best_x = best_y = None


def signs(values):
    return np.where(values >= 0, 1, -1).astype(np.int64)


for restart in range(RESTARTS):
    y = np.ones(H_ORDER, dtype=np.int64) if restart == 0 else signs(rng.normal(size=H_ORDER))

    while True:
        # Coordinate ascent for S = x^T H^T y.
        for _ in range(100):
            x = signs(h.T @ y)
            new_y = signs(h @ x)
            if np.array_equal(new_y, y):
                break
            y = new_y

        # Best-improving pair flips include moves unavailable to coordinate ascent.
        u = h.T @ y
        v = h @ x
        dx = -2 * x * u
        dy = -2 * y * v
        best_delta = 0
        best_move = None
        for i in range(H_ORDER):
            for j in range(i + 1, H_ORDER):
                delta = int(dx[i] + dx[j])
                if delta > best_delta:
                    best_delta, best_move = delta, (0, i, j)
                delta = int(dy[i] + dy[j])
                if delta > best_delta:
                    best_delta, best_move = delta, (1, i, j)
            for j in range(H_ORDER):
                delta = int(dx[i] + dy[j] + 4 * x[i] * y[j] * h[j, i])
                if delta > best_delta:
                    best_delta, best_move = delta, (2, i, j)
        if best_move is None:
            break
        kind, i, j = best_move
        if kind == 0:
            x[i] *= -1
            x[j] *= -1
        elif kind == 1:
            y[i] *= -1
            y[j] *= -1
        else:
            x[i] *= -1
            y[j] *= -1

    score = int(x @ (h.T @ y))
    if score > best_score:
        best_score = score
        best_x, best_y = x.copy(), y.copy()

# det([[1,x^T],[y,-H]]) = 28^13 * (28 + x^T H^T y).
a = np.empty((29, 29), dtype=np.int64)
a[0, 0] = 1
a[0, 1:] = best_x
a[1:, 0] = best_y
a[1:, 1:] = -h
print(json.dumps({"matrix": a.tolist()}))
