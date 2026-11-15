"""Copied into every study sandbox. Study code may import only this and the standard library.

Reads spec.json written by lab.py: {dataset, instruments: {name: column}, budget, measurements,
datasets: {name: {file, columns}}}. `datasets` are real public datasets the agent loaded itself.
Prints '@@CALLS n' after each instrument call, '@@READ name' when a loaded dataset is first opened,
and '@@RESULT {...}' once at the end.
"""
import csv
import json

with open("spec.json", encoding="utf-8") as _f:
    SPEC = json.load(_f)
_calls = 0
_read = set()


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


def datasets() -> dict:
    """{dataset name: [column names]} for the real datasets this lab has loaded."""
    return {name: list(d["columns"]) for name, d in SPEC.get("datasets", {}).items()}


def _dataset(name: str) -> dict:
    if name not in SPEC.get("datasets", {}):
        raise KeyError(f"unknown dataset {name!r}; have {list(SPEC.get('datasets', {}))}")
    if name not in _read:
        _read.add(name)
        print(f"@@READ {name}", flush=True)
    return SPEC["datasets"][name]


def path(dataset: str) -> str:
    """CSV file of a loaded dataset, e.g. for pandas.read_csv."""
    return _dataset(dataset)["file"]


def _same(cell, want) -> bool:
    try:
        return float(cell) == float(want)
    except (TypeError, ValueError):
        return str(cell).strip() == str(want).strip()


def rows(dataset: str, columns, where: dict | None = None) -> list[tuple]:
    """Tuples of floats, one per data row in which every listed column is a number.

    where={'column': value} keeps only rows whose column equals value (a category or a number).
    """
    d = _dataset(dataset)
    columns = [columns] if isinstance(columns, str) else list(columns)
    if where is not None and not isinstance(where, dict):
        raise TypeError("where must be a dict like {'column': 'value'}")
    for c in columns + list(where or {}):
        if c not in d["columns"]:
            raise KeyError(f"dataset {dataset!r} has no column {c!r}; have {d['columns']}")
    out = []
    with open(d["file"], newline="", encoding="utf-8") as f:
        for r in csv.DictReader(f):
            if where and not all(_same(r.get(k), v) for k, v in where.items()):
                continue
            try:
                vals = tuple(float(r[c]) for c in columns)
            except (TypeError, ValueError):
                continue
            if all(v == v and abs(v) != float("inf") for v in vals):  # NaN and inf cells are not measurements
                out.append(vals)
    return out


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
