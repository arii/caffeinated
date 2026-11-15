"""Replication check for a study result.

check(result, n_studies_on_dataset): split-half replication plus a significance threshold
of alpha divided by the number of studies that agent has run on that dataset.
"""
import math
import random

import numpy as np

MIN_PER_HALF = 3


def _norm_sf(z: float) -> float:
    return 0.5 * math.erfc(z / math.sqrt(2))


def two_group(a, b) -> tuple[float, float]:
    """Cohen's d and a Welch-t p-value (normal approximation)."""
    a, b = np.asarray(a, float), np.asarray(b, float)
    if len(a) < 2 or len(b) < 2:
        return 0.0, 1.0
    va, vb = a.var(ddof=1), b.var(ddof=1)
    pooled = math.sqrt(((len(a) - 1) * va + (len(b) - 1) * vb) / (len(a) + len(b) - 2)) or 1e-9
    d = float((a.mean() - b.mean()) / pooled)
    se = math.sqrt(va / len(a) + vb / len(b)) or 1e-9
    t = (a.mean() - b.mean()) / se
    return d, 2 * _norm_sf(abs(t))


def corr(x, y) -> tuple[float, float]:
    """Pearson r and p-value (t approximation)."""
    x, y = np.asarray(x, float), np.asarray(y, float)
    n = min(len(x), len(y))
    if n < 3:
        return 0.0, 1.0
    x, y = x[:n], y[:n]
    if x.std() == 0 or y.std() == 0:
        return 0.0, 1.0
    r = float(np.corrcoef(x, y)[0, 1])
    r = max(min(r, 0.999999), -0.999999)
    t = r * math.sqrt((n - 2) / (1 - r * r))
    return r, 2 * _norm_sf(abs(t))


def effect(result: dict) -> tuple[float, float, int]:
    """(effect_size, p, n) for a raw @@RESULT dict."""
    if result["kind"] == "two_group":
        d, p = two_group(result["group_a"], result["group_b"])
        return d, p, len(result["group_a"]) + len(result["group_b"])
    r, p = corr(result["x"], result["y"])
    return r, p, min(len(result["x"]), len(result["y"]))


def split_half(result: dict, seed: int = 0) -> list[dict]:
    """Shuffle once, split in two, return the two half results."""
    rng = random.Random(seed)
    if result["kind"] == "two_group":
        a, b = list(result["group_a"]), list(result["group_b"])
        rng.shuffle(a)
        rng.shuffle(b)
        ha, hb = len(a) // 2, len(b) // 2
        return [{"kind": "two_group", "group_a": a[:ha], "group_b": b[:hb]},
                {"kind": "two_group", "group_a": a[ha:], "group_b": b[hb:]}]
    pairs = list(zip(result["x"], result["y"]))
    rng.shuffle(pairs)
    h = len(pairs) // 2
    return [{"kind": "corr", "x": [p[0] for p in part], "y": [p[1] for p in part]}
            for part in (pairs[:h], pairs[h:])]


def check(result: dict | None, n_studies_on_dataset: int, alpha: float = 0.05, seed: int = 0) -> dict:
    """Verdict dict: replicated, effect_size, direction, p, alpha_eff, halves, n, reason."""
    alpha_eff = alpha / max(1, n_studies_on_dataset)
    if not result:
        return {"replicated": False, "effect_size": None, "direction": None, "p": None,
                "alpha_eff": alpha_eff, "halves": [], "n": 0, "reason": "no result"}
    eff, p, n = effect(result)
    direction = "+" if eff >= 0 else "-"
    halves = []
    for half in split_half(result, seed):
        size = (len(half["group_a"]) if half["kind"] == "two_group" else len(half["x"]))
        halves.append(effect(half)[0] if size >= MIN_PER_HALF else None)
    out = {"replicated": False, "effect_size": round(eff, 4), "direction": direction, "p": round(p, 6),
           "alpha_eff": alpha_eff, "halves": [None if h is None else round(h, 4) for h in halves], "n": n}
    if any(h is None for h in halves):
        out["reason"] = "too few observations for split-half"
    elif p > alpha_eff:
        out["reason"] = f"p={p:.3g} above alpha/{n_studies_on_dataset}={alpha_eff:.3g}"
    elif not all((h >= 0) == (eff >= 0) and h != 0 for h in halves):
        out["reason"] = "halves disagree in sign"
    else:
        out["replicated"] = True
        out["reason"] = "both halves agree and p below threshold"
    return out
