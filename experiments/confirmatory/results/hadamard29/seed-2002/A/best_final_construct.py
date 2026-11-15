"""Bordered Paley-Hadamard construction with exact coordinate-ascent border optimization."""

import json
import math
import random

Q_ORDER = 27
H_ORDER = 28
RESTARTS = 256

# GF(27) = F3[x]/(x^3 + 2x + 1), hence x^3 = x + 2.
elements = [(a, b, c) for c in range(3) for b in range(3) for a in range(3)]
index = {a: i for i, a in enumerate(elements)}


def field_add(x, y):
    return tuple((x[k] + y[k]) % 3 for k in range(3))


def field_neg(x):
    return tuple((-v) % 3 for v in x)


def field_mul(x, y):
    conv = [0] * 5
    for i in range(3):
        for j in range(3):
            conv[i + j] += x[i] * y[j]
    # x^4 = x^2 + 2x and x^3 = x + 2.
    conv[2] += conv[4]
    conv[1] += 2 * conv[4]
    conv[1] += conv[3]
    conv[0] += 2 * conv[3]
    return tuple(v % 3 for v in conv[:3])


squares = {index[field_mul(x, x)] for x in elements if x != (0, 0, 0)}
q = []
for x in elements:
    row = []
    for y in elements:
        difference = field_add(y, field_neg(x))
        if difference == (0, 0, 0):
            row.append(0)
        else:
            row.append(1 if index[difference] in squares else -1)
    q.append(row)

h = [[1] * H_ORDER]
for i in range(Q_ORDER):
    h.append([1] + [q[i][j] - (1 if i == j else 0) for j in range(Q_ORDER)])

# Fail loudly rather than emitting a matrix from an invalid finite-field construction.
for i in range(H_ORDER):
    for j in range(H_ORDER):
        dot = sum(h[i][k] * h[j][k] for k in range(H_ORDER))
        assert dot == (H_ORDER if i == j else 0)


def products(c):
    return [sum(h[k][j] * c[k] for k in range(H_ORDER)) for j in range(H_ORDER)]


def optimize(c):
    s = products(c)
    value = sum(abs(v) for v in s)
    sweep = 0
    changed = True
    while changed:
        changed = False
        order = range(H_ORDER) if sweep % 2 == 0 else range(H_ORDER - 1, -1, -1)
        for i in order:
            old = c[i]
            delta = [-2 * old * h[i][j] for j in range(H_ORDER)]
            flipped_value = sum(abs(s[j] + delta[j]) for j in range(H_ORDER))
            if flipped_value > value:
                c[i] = -old
                s = [s[j] + delta[j] for j in range(H_ORDER)]
                value = flipped_value
                changed = True
        sweep += 1
    return value, c, s


rng = random.Random(29)
best_value = -1
best_c = None
best_s = None
starts = [[1] * H_ORDER]
starts.extend([[rng.choice((-1, 1)) for _ in range(H_ORDER)] for _ in range(RESTARTS)])
for start in starts:
    value, c, s = optimize(start)
    if value > best_value:
        best_value, best_c, best_s = value, c, s

last_row = [1 if v >= 0 else -1 for v in best_s]
matrix = [h[i] + [best_c[i]] for i in range(H_ORDER)] + [last_row + [1]]
def inverse(a):
    n = len(a)
    aug = [
        [float(v) for v in a[i]] + [1.0 if i == j else 0.0 for j in range(n)]
        for i in range(n)
    ]
    for col in range(n):
        pivot = max(range(col, n), key=lambda r: abs(aug[r][col]))
        assert abs(aug[pivot][col]) > 1e-12
        aug[col], aug[pivot] = aug[pivot], aug[col]
        scale = aug[col][col]
        aug[col] = [v / scale for v in aug[col]]
        for r in range(n):
            if r != col:
                factor = aug[r][col]
                if factor:
                    aug[r] = [aug[r][k] - factor * aug[col][k] for k in range(2 * n)]
    return [row[n:] for row in aug]


# A sign flip is a rank-one update, so its determinant ratio is available
# from one inverse entry.  Optimize all entries, not just the border.
for _ in range(256):
    inv = inverse(matrix)
    best_ratio = 1.0 + 1e-10
    best_move = None
    for i in range(29):
        for j in range(29):
            ratio = 1.0 - 2.0 * matrix[i][j] * inv[j][i]
            if abs(ratio) > best_ratio:
                best_ratio = abs(ratio)
                best_move = (i, j)
    if best_move is None:
        break
    i, j = best_move
    matrix[i][j] = -matrix[i][j]

# Deterministic tabu search can cross determinant barriers that greedy flips cannot.
best_matrix = [row[:] for row in matrix]
tabu_until = [[0] * 29 for _ in range(29)]
current_log_ratio = 0.0
best_log_ratio = 0.0
for step in range(1, 1025):
    inv = inverse(matrix)
    move = None
    move_ratio = -1.0
    for i in range(29):
        for j in range(29):
            ratio = abs(1.0 - 2.0 * matrix[i][j] * inv[j][i])
            if ratio <= 1e-15:
                continue
            aspirational = current_log_ratio + math.log(ratio) > best_log_ratio + 1e-12
            if tabu_until[i][j] >= step and not aspirational:
                continue
            if ratio > move_ratio:
                move_ratio = ratio
                move = (i, j)
    if move is None:
        break
    i, j = move
    matrix[i][j] = -matrix[i][j]
    tabu_until[i][j] = step + 23
    current_log_ratio += math.log(move_ratio)
    if current_log_ratio > best_log_ratio + 1e-12:
        best_log_ratio = current_log_ratio
        best_matrix = [row[:] for row in matrix]

matrix = best_matrix
print(json.dumps({"matrix": matrix}))
