"""Copied into every study sandbox. Study code may import only this and the standard library.

Reads spec.json written by lab.py: {dataset, instruments: {name: column}, budget, measurements}.
Prints '@@CALLS n' after each instrument call and '@@RESULT {...}' once at the end.
"""
import csv
import json

with open("spec.json", encoding="utf-8") as _f:
    SPEC = json.load(_f)
_calls = 0


class BudgetExceeded(RuntimeError):
    pass


def instruments() -> list[str]:
    return list(SPEC["instruments"])


def _read_column(dataset, column, where=None, offset=0, limit=None):
    with open(dataset, newline="", encoding="utf-8") as f:
        rows = list(csv.DictReader(f))
    if where:
        rows = [r for r in rows if all(str(r.get(k)) == str(v) for k, v in where.items())]
    vals = []
    for r in rows:
        try:
            vals.append(float(r[column]))
        except (KeyError, TypeError, ValueError):
            continue
    vals = vals[offset:]
    return vals[:limit] if limit else vals


def instrument(name: str, where: dict | None = None, offset: int = 0, limit: int | None = None) -> list[float]:
    """Query the agent's own dataset. Each call spends one unit of budget."""
    global _calls
    if name not in SPEC["instruments"]:
        raise KeyError(f"unknown instrument {name!r}; have {instruments()}")
    if _calls >= SPEC["budget"]:
        raise BudgetExceeded(f"budget of {SPEC['budget']} instrument calls spent")
    _calls += 1
    print(f"@@CALLS {_calls}", flush=True)
    return _read_column(SPEC["dataset"], SPEC["instruments"][name], where, offset, limit)


def measurements() -> list[list[float]]:
    """Data other labs measured for you before the study ran (statistician path)."""
    return SPEC.get("measurements", [])


def measurement(i: int) -> list[float]:
    return measurements()[i]


def report(group_a, group_b, direction: str, effect_size: float) -> None:
    print("@@RESULT " + json.dumps({"kind": "two_group", "group_a": list(map(float, group_a)),
                                    "group_b": list(map(float, group_b)), "direction": direction,
                                    "effect_size": float(effect_size)}), flush=True)


def report_corr(x, y, direction: str, effect_size: float) -> None:
    print("@@RESULT " + json.dumps({"kind": "corr", "x": list(map(float, x)), "y": list(map(float, y)),
                                    "direction": direction, "effect_size": float(effect_size)}), flush=True)
