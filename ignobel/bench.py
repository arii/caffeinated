"""The bench: where an experiment a daughter lab asked for gets done.

A daughter whose idea no public dataset can answer files an experiment request. No real lab is
connected yet, so there are two ways a request moves on:

- `simulate`: a stand-in bench draws placeholder measurements from the requester's own prediction.
  The daughter rehearses her analysis on them, which shows whether the protocol and the analysis
  work and roughly how many measurements she would need. It says nothing about nature: a simulated
  result is never evidence and never a candidate.
- `collect`: real measurements that somebody performed and returned (a CSV plus a note saying who
  did it and when) become a dataset of hers, checked like any public dataset.
"""
import csv
import hashlib
import json
import math
import random
import re
from pathlib import Path
from statistics import NormalDist

import sources

DESIGNS = ("two_group", "corr")
FIELDS = ("question", "protocol", "materials", "measure", "compare", "refuted_if")
MIN_N, MAX_N = 2 * sources.MIN_ROWS, 2000  # enough rows for each group to be a usable column


def clean_request(step: dict) -> dict:
    """An experiment request from a daughter's research step. Raises ValueError if it says too little."""
    req = {k: sources._clean(step.get(k))[:600] for k in FIELDS}
    if not req["question"] or not req["protocol"]:
        raise ValueError("an experiment request needs a question and a protocol")
    design = str(step.get("design", "")).strip().lower()
    req["design"] = design if design in DESIGNS else "two_group"
    try:
        n = int(float(step.get("n", 40)))
    except (TypeError, ValueError):
        n = 40
    req["n"] = max(MIN_N, min(MAX_N, n))
    return req


def needed_n(design: str, effect: float, alpha: float = 0.05, power: float = 0.8) -> int | None:
    """Measurements needed for one test to detect `effect` (Cohen's d or Pearson r) with the given power."""
    z = NormalDist().inv_cdf(1 - alpha / 2) + NormalDist().inv_cdf(power)
    effect = abs(effect)
    if effect < 1e-6:
        return None
    if design == "corr":
        return math.ceil((z / math.atanh(min(effect, 0.999))) ** 2 + 3)
    return 2 * math.ceil(2 * (z / effect) ** 2)


def _columns(req: dict) -> tuple[str, str, list[str]]:
    taken: set[str] = {"group"}
    measure = sources._snake(req["measure"] or "outcome", taken)
    if req["design"] == "corr":
        return measure, sources._snake(req["compare"] or "factor", taken), []
    labels = [s.strip()[:30] for s in re.split(r"\s+(?:vs\.?|versus)\s+|[,;/]", req["compare"]) if s.strip()]
    return measure, "group", labels if len(labels) == 2 and labels[0] != labels[1] else ["a", "b"]


def _record(req: dict, dest: Path, header: list[str], rows: list[list], **extra) -> dict:
    cols, clean = sources.profile(header, [[str(c) for c in r] for r in rows])
    dest.parent.mkdir(parents=True, exist_ok=True)
    with open(dest, "w", newline="", encoding="utf-8") as f:
        w = csv.writer(f)
        w.writerow([c["name"] for c in cols])
        w.writerows(clean)
    return {"id": f"experiment:{req['id']}", "title": req["question"][:120], "url": "", "license": "",
            "rows": len(clean), "columns": cols, "sha256": hashlib.sha256(dest.read_bytes()).hexdigest()[:16], **extra}


def simulate(req: dict, seed: int, dest: Path) -> dict:
    """Placeholder measurements for `req`, drawn from its own prediction in standard units. Not evidence."""
    pred = req["prediction"]
    eff = float(pred["effect_size"]) * (1 if pred["direction"] == "+" else -1)
    rng = random.Random(int(hashlib.sha256(f"{seed}|{req['id']}".encode()).hexdigest()[:8], 16))
    measure, other, labels = _columns(req)
    if req["design"] == "corr":
        r = max(-0.95, min(0.95, eff))
        rows = []
        for _ in range(req["n"]):
            x = rng.gauss(0, 1)
            rows.append([round(x, 4), round(r * x + math.sqrt(1 - r * r) * rng.gauss(0, 1), 4)])
        header = [other, measure]
    else:
        half = req["n"] // 2
        rows = [[labels[0], round(rng.gauss(eff, 1), 4)] for _ in range(half)]
        rows += [[labels[1], round(rng.gauss(0, 1), 4)] for _ in range(req["n"] - half)]
        header = [other, measure]
    return _record(req, dest, header, rows, provenance="simulated")


def collect(req: dict, inbox: Path, dest: Path) -> dict | None:
    """Real measurements returned for `req`: <inbox>/<id>.csv with <inbox>/<id>.json saying who performed
    the experiment and when ({performed_by, performed_at, apparatus?, notes?, url?, license?}).
    None while nothing has come back; ResearchError if the return is unusable."""
    data, note = inbox / f"{req['id']}.csv", inbox / f"{req['id']}.json"
    if not data.is_file():
        return None
    try:
        meta = json.loads(note.read_text(encoding="utf-8"))
        who, when = sources._clean(meta["performed_by"]), sources._clean(meta["performed_at"])
    except (OSError, ValueError, KeyError, TypeError) as e:
        raise sources.ResearchError(f"returned measurements need a {note.name} with performed_by and performed_at") from e
    if not who or not when:
        raise sources.ResearchError("performed_by and performed_at must not be empty")
    header, rows = sources._table(data.read_bytes()[:sources.MAX_FILE_BYTES])
    rec = _record(req, dest, header, rows[:sources.MAX_ROWS], provenance="returned", performed_by=who[:120],
                  performed_at=when[:40], apparatus=sources._clean(meta.get("apparatus"))[:300],
                  notes=sources._clean(meta.get("notes"))[:300])
    url = str(meta.get("url") or "")
    rec.update(url=url if url.lower().startswith(("https://", "http://")) else "",
               license=sources._clean(meta.get("license"))[:60])
    return rec
