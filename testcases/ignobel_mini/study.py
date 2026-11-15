"""Ig Nobel study: find a real, replicable, laugh-then-think association.

Inputs (read-only): codebook.json and data/<dataset>.csv, the discovery half of
real FiveThirtyEight survey data. Print ONE JSON claim as the last stdout line:
  {"dataset": ..., "x": "vNN", "x_level": ..., "y": "vNN", "y_level": ...,
   "direction": "positive" | "negative", "title": "optional headline"}
x_level / y_level are required for categorical variables (the claim compares
respondents giving that answer vs. everyone else) and omitted for numeric ones.
The grader re-tests the claim on a hidden replication half.
"""

import csv
import json
import math

CODEBOOK = json.load(open("codebook.json", encoding="utf-8"))


def rows(dataset):
    with open(CODEBOOK[dataset]["file"], encoding="utf-8", newline="") as stream:
        return list(csv.DictReader(stream))


def encode(dataset, vid, level, value):
    if value == "":
        return None
    if CODEBOOK[dataset]["variables"][vid]["kind"] == "numeric":
        return float(value)
    return 1.0 if value == level else 0.0


def ranks(values):
    order = sorted(range(len(values)), key=values.__getitem__)
    result = [0.0] * len(values)
    i = 0
    while i < len(order):
        j = i
        while j + 1 < len(order) and values[order[j + 1]] == values[order[i]]:
            j += 1
        for k in range(i, j + 1):
            result[order[k]] = (i + j) / 2 + 1
        i = j + 1
    return result


def spearman(xs, ys):
    rx, ry = ranks(xs), ranks(ys)
    n = len(rx)
    mx, my = sum(rx) / n, sum(ry) / n
    sxy = sum((a - mx) * (b - my) for a, b in zip(rx, ry))
    sxx = sum((a - mx) ** 2 for a in rx)
    syy = sum((b - my) ** 2 for b in ry)
    return sxy / math.sqrt(sxx * syy) if sxx and syy else 0.0


def test(claim):
    data = rows(claim["dataset"])
    pairs = [
        (
            encode(claim["dataset"], claim["x"], claim.get("x_level"), row[claim["x"]]),
            encode(claim["dataset"], claim["y"], claim.get("y_level"), row[claim["y"]]),
        )
        for row in data
    ]
    pairs = [(a, b) for a, b in pairs if a is not None and b is not None]
    return spearman([a for a, _ in pairs], [b for _, b in pairs]), len(pairs)


DATASET = "thanksgiving"
X, X_LEVEL = "v06", "Yes"
Y, Y_LEVEL = "v04", "Bread-based"

claim = {"dataset": DATASET, "x": X, "x_level": X_LEVEL, "y": Y, "y_level": Y_LEVEL}
rho, n = test(claim)
claim["direction"] = "positive" if rho >= 0 else "negative"
print(json.dumps({"discovery_rho": round(rho, 4), "n": n}))
print(json.dumps(claim))
