"""Trusted grader for the Ig Nobel pre-registered expert-study task.

The candidate file is prereg.json: a pre-registration written by a domain
expert BEFORE any data is seen. Candidate code is never executed. The host
1. checks the registration (field, question, hypothesis, mechanism, a real
   public dataset URL, the two columns, direction, predicted effect size);
2. verifies every citation: at least MIN_CITATIONS distinct sources, each an
   Exa source id or URL from this run's research log (TASK_RESEARCH_LOG) or a
   pre-vetted entry in sources.json;
3. downloads the dataset once (external.py: open-data hosts or URLs the run's
   Exa research cites), freezes it, and allows ONE registered test per dataset
   per run (later registrations on the same dataset score 0);
4. runs the registered test once on all rows (Spearman rho, two-sided
   p < ALPHA, sign must match), rejecting trivial pairs;
5. scores the dataset's own column wording, never the candidate's prose, with
   a frozen Ig Nobel-likeness judge trained on real Ig Nobel prize rationales
   and winning-paper titles vs. ordinary OpenAlex paper titles.

calibration = min(|rho|, predicted) / max(|rho|, predicted)
score = confirmed * min(1, |rho| / RHO_FULL) * (0.5 + 0.5 * calibration) * ignobel_likeness
loss  = 1 - score
"""

import csv
import hashlib
import json
import math
import os
from pathlib import Path
import re
import sys
import time

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
for path in (ROOT, HERE):
    if str(path) not in sys.path:
        sys.path.insert(0, str(path))

from judge_text import likeness, tokens
from stats import spearman
import external

ALPHA = 0.005
RHO_FULL = 0.2
MIN_N = 30
MIN_CELL = 10
MAX_WORD_OVERLAP = 0.5
MIN_CITATIONS = 2
MAX_TEXT = 600
RECORD_LOSS = None
TEXT_FIELDS = ("question", "hypothesis", "mechanism")


def load_judge(task_dir=HERE):
    return json.loads((Path(task_dir) / "judge.json").read_text(encoding="utf-8"))


def load_fields(task_dir=HERE):
    profile = json.loads((Path(task_dir) / "boredom_profile.json").read_text(encoding="utf-8"))
    return {field: methods for field, methods in profile["vocab"].items() if field != "baseline"}


def read_rows(path):
    with Path(path).open(encoding="utf-8", newline="") as stream:
        return list(csv.DictReader(stream))


def encode(variable, level, value):
    if value == "":
        return None
    if variable["kind"] == "numeric":
        return float(value)
    return 1.0 if value == level else 0.0


def side_text(variable, level):
    if level is None or level in variable["label"]:
        return variable["label"]
    return f"{variable['label']} {level}"


def headline(dataset, x, x_level, y, y_level, direction):
    def phrase(variable, level, up=True):
        if level is None:
            return f'{"higher" if up else "lower"} "{variable["label"]}"'
        return f'{"" if up else "not "}answering "{level}" to "{variable["label"]}"'

    return f"In the {dataset['title']}, {phrase(x, x_level)} goes with {phrase(y, y_level, direction == 'positive')}"


def shared_words(dataset):
    """Words in most of a dataset's labels (e.g. Bob Ross 'painting features') say nothing about overlap."""
    counts = {}
    for variable in dataset["variables"].values():
        for word in set(tokens(variable["label"])):
            counts[word] = counts.get(word, 0) + 1
    return {word for word, count in counts.items() if count > len(dataset["variables"]) / 2}


def check_claim(claim, codebook):
    if not isinstance(claim, dict):
        raise ValueError("claim must be a JSON object")
    dataset = codebook.get(claim.get("dataset"))
    if dataset is None:
        raise ValueError(f"unknown dataset: {claim.get('dataset')!r}")
    if claim.get("direction") not in ("positive", "negative"):
        raise ValueError("direction must be 'positive' or 'negative'")
    sides = []
    for axis in ("x", "y"):
        variable = dataset["variables"].get(claim.get(axis))
        if variable is None:
            raise ValueError(f"unknown {axis} variable: {claim.get(axis)!r}")
        level = claim.get(f"{axis}_level")
        if variable["kind"] == "categorical":
            if level not in variable["levels"]:
                raise ValueError(f"{axis}_level must be one of the codebook levels of {claim[axis]}")
        elif level is not None:
            raise ValueError(f"{axis} is numeric; omit {axis}_level")
        sides.append((variable, level))
    (x, _), (y, _) = sides
    if claim["x"] == claim["y"]:
        return sides, "trivial: x and y are the same variable"
    if x["group"] == y["group"]:
        return sides, "trivial: x and y are options of the same survey question"
    if x["demographic"] and y["demographic"]:
        return sides, "trivial: both variables are demographics"
    common = shared_words(dataset)
    wx, wy = set(tokens(x["label"])) - common, set(tokens(y["label"])) - common
    if wx and wy and len(wx & wy) / len(wx | wy) >= MAX_WORD_OVERLAP:
        return sides, "trivial: x and y ask nearly the same question"
    return sides, None


def association(rows, claim, sides):
    (x, x_level), (y, y_level) = sides
    pairs = [
        (encode(x, x_level, row[claim["x"]]), encode(y, y_level, row[claim["y"]]))
        for row in rows
    ]
    pairs = [(a, b) for a, b in pairs if a is not None and b is not None]
    xs, ys = [a for a, _ in pairs], [b for _, b in pairs]
    for values, variable in ((xs, x), (ys, y)):
        if variable["kind"] == "categorical":
            ones = sum(values)
            if min(ones, len(values) - ones) < MIN_CELL:
                return len(pairs), 0.0, 1.0, f"fewer than {MIN_CELL} rows on one side of a level"
    if len(pairs) < MIN_N:
        return len(pairs), 0.0, 1.0, f"fewer than {MIN_N} complete rows"
    rho, p = spearman(xs, ys)
    return len(pairs), rho, p, None


def parse_prereg(source, fields):
    prereg = json.loads(source)
    if not isinstance(prereg, dict):
        raise ValueError("prereg.json must be a JSON object")
    if prereg.get("field") not in fields:
        raise ValueError(f"field must be one of {sorted(fields)}")
    if prereg.get("study_type") not in fields[prereg["field"]]:
        raise ValueError(f"study_type must be one of {fields[prereg['field']]}")
    for key in TEXT_FIELDS:
        value = prereg.get(key)
        if not isinstance(value, str) or not value.strip() or len(value) > MAX_TEXT:
            raise ValueError(f"{key} must be a non-empty string of at most {MAX_TEXT} characters")
    citations = prereg.get("citations")
    if not isinstance(citations, list) or any(not isinstance(c, str) or not c.strip() for c in citations):
        raise ValueError("citations must be a list of Exa source ids (S<k>) or URLs")
    dataset = prereg.get("dataset")
    if not isinstance(dataset, dict) or not isinstance(dataset.get("url"), str):
        raise ValueError("dataset must be an object with a url")
    for axis in ("x", "y"):
        if not isinstance(dataset.get(axis), str) or not dataset[axis].strip():
            raise ValueError(f"dataset.{axis} must name a column")
        level = dataset.get(f"{axis}_level")
        if level is not None and not isinstance(level, str):
            raise ValueError(f"dataset.{axis}_level must be a string or omitted")
    if prereg.get("direction") not in ("positive", "negative"):
        raise ValueError("direction must be 'positive' or 'negative'")
    predicted = prereg.get("predicted_rho")
    if isinstance(predicted, bool) or not isinstance(predicted, (int, float)) or not 0 < predicted <= 1:
        raise ValueError("predicted_rho must be a number in (0, 1]")
    return prereg


def research_sources(research_log):
    """(Exa source id -> url, full log text) for this run, or ({}, "") without a log."""
    path = Path(research_log) if research_log else None
    if not path or not path.is_file():
        return {}, ""
    text = path.read_text(encoding="utf-8", errors="replace")
    ids = {}
    for line in text.splitlines():
        try:
            record = json.loads(line)
        except json.JSONDecodeError:
            continue
        if isinstance(record, dict) and record.get("type") == "source" and record.get("id"):
            ids[str(record["id"])] = str(record.get("url") or "")
    return ids, text


def check_citations(citations, dataset_url, task_dir, research_log):
    vetted = json.loads((Path(task_dir) / "sources.json").read_text(encoding="utf-8"))
    vetted_urls = {source["url"] for source in vetted}
    ids, text = research_sources(research_log)
    resolved, problems = [], []
    for citation in dict.fromkeys(c.strip() for c in citations):
        if re.fullmatch(r"S\d+", citation):
            url = ids.get(citation)
            if not url:
                problems.append(f"{citation} is not a source in this run's research log")
                continue
        else:
            url = citation
            if url not in vetted_urls and not (url.startswith("https://") and url in text):
                problems.append(f"{url} was not found by this run's research or in sources.json")
                continue
        if url == dataset_url:
            problems.append("the dataset itself is not a citation")
            continue
        resolved.append(url)
    resolved = list(dict.fromkeys(resolved))
    if len(resolved) < MIN_CITATIONS:
        problems.append(f"needs at least {MIN_CITATIONS} distinct verified citations, got {len(resolved)}")
    return resolved, problems


def column(entry, name):
    wanted = external.prepare.clean(name).casefold()
    matches = [vid for vid, v in entry["variables"].items() if v["label"].casefold() == wanted]
    if len(matches) != 1:
        labels = "; ".join(v["label"][:60] for v in entry["variables"].values())
        raise ValueError(f"column {name!r} not found; usable columns: {labels}")
    return matches[0]


def test_hash(prereg):
    test = {key: prereg["dataset"].get(key) for key in ("url", "x", "x_level", "y", "y_level")}
    test["direction"] = prereg["direction"]
    return hashlib.sha256(json.dumps(test, sort_keys=True).encode()).hexdigest()[:16]


def claim_registry(research_log, name, digest):
    """One registered test per dataset per run; None if allowed, else the reason."""
    if not research_log:
        return None
    path = Path(research_log).parent / "ignobel_registry.json"
    registry = json.loads(path.read_text(encoding="utf-8")) if path.is_file() else {}
    previous = registry.get(name)
    if previous is not None and previous != digest:
        return "dataset already used by another registered test in this run (one confirmatory test per dataset)"
    registry[name] = digest
    temporary = path.with_suffix(".tmp")
    temporary.write_text(json.dumps(registry, indent=1, sort_keys=True) + "\n", encoding="utf-8")
    temporary.replace(path)
    return None


def grade_prereg(prereg, task_dir=HERE, research_log=None, judge=None):
    task_dir = Path(task_dir)
    judge = judge or load_judge(task_dir)
    url = prereg["dataset"]["url"].strip()
    citations, problems = check_citations(prereg["citations"], url, task_dir, research_log)
    result = {"citations": citations, "dataset_id": external.dataset_id(url), "rejected": None}
    if problems:
        result["rejected"] = "citations: " + "; ".join(problems)
        return {**result, "score": 0.0}
    try:
        name, entry = external.ensure(url, task_dir, research_log)
    except Exception as error:
        result["rejected"] = f"dataset unavailable: {type(error).__name__}: {error}"
        return {**result, "score": 0.0}
    data = prereg["dataset"]
    claim = {
        "dataset": name,
        "x": column(entry, data["x"]),
        "x_level": data.get("x_level"),
        "y": column(entry, data["y"]),
        "y_level": data.get("y_level"),
        "direction": prereg["direction"],
    }
    sides, trivial = check_claim(claim, {name: entry})
    (x, x_level), (y, y_level) = sides
    rows = read_rows(task_dir / entry["file"]) + read_rows(task_dir / ".cache" / "replication" / f"{name}.csv")
    n, rho, p, problem = association(rows, claim, sides)
    rejected = trivial or problem or claim_registry(research_log, name, test_hash(prereg))
    sign = 1 if prereg["direction"] == "positive" else -1
    confirmed = rejected is None and p < ALPHA and rho * sign > 0
    predicted = float(prereg["predicted_rho"])
    calibration = min(abs(rho), predicted) / max(abs(rho), predicted) if rho else 0.0
    funny = likeness(f"{side_text(x, x_level)} {side_text(y, y_level)}", judge)
    strength = min(1.0, abs(rho) / RHO_FULL)
    score = strength * (0.5 + 0.5 * calibration) * funny if confirmed else 0.0
    return {
        **result,
        "headline": headline(entry, x, x_level, y, y_level, prereg["direction"]),
        "rejected": rejected,
        "n": n,
        "rho": rho,
        "p": p,
        "predicted_rho": predicted,
        "calibration": calibration,
        "confirmed": confirmed,
        "strength": strength,
        "ignobel_likeness": funny,
        "score": score,
        "sha256": entry.get("sha256", ""),
    }


def evaluate_source(source, task_dir=HERE, timeout_s=None, research_log=None):
    task_dir = Path(task_dir).resolve()
    research_log = research_log or os.environ.get("TASK_RESEARCH_LOG")
    started = time.time()
    status, reason, diagnostics, graded, prereg = "crash", None, "", None, None
    try:
        prereg = parse_prereg(source, load_fields(task_dir))
        graded = grade_prereg(prereg, task_dir, research_log)
        status = "ok"
    except (json.JSONDecodeError, ValueError, KeyError, TypeError) as error:
        reason, diagnostics = "invalid_output", f"{type(error).__name__}: {error}"
    except Exception as error:
        reason, diagnostics = "grader_error", f"{type(error).__name__}: {error}"
    score = graded["score"] if graded else 0.0
    loss = 1.0 - score
    out = []
    if prereg:
        out += [f"field: {prereg['field']} / {prereg['study_type']}", f"question: {prereg['question']}"]
    if graded:
        out += [f"citations: {len(graded['citations'])} verified", f"dataset: {prereg['dataset']['url']} -> {graded['dataset_id']}"]
        if "headline" in graded:
            out += [
                f"registered test: {graded['headline']}",
                f"rho: {graded['rho']:.4f} (p={graded['p']:.2g}, n={graded['n']}); predicted {graded['predicted_rho']:.3f}, calibration {graded['calibration']:.3f}",
                f"confirmed: {str(graded['confirmed']).lower()}",
                f"ignobel_likeness: {graded['ignobel_likeness']:.4f}",
            ]
        out.append(f"rejected: {graded['rejected'] or 'no'}")
    out += [
        f"score: {score:.6f}",
        f"loss: {loss:.6f}",
        "candidate_executed: false",
        f"seconds: {time.time() - started:.1f}",
    ]
    return {
        "score": score,
        "loss": loss if status == "ok" else None,
        "status": status,
        "reason": reason,
        "stdout": "\n".join(out) + "\n",
        "stderr": "" if status == "ok" else f"error: {reason}: {diagnostics}\n",
        "network_isolated": True,
        "graded": graded,
    }


def main():
    source = (HERE / "prereg.json").read_text(encoding="utf-8")
    result = evaluate_source(source)
    sys.stdout.write(result["stdout"])
    sys.stderr.write(result["stderr"])
    return 0 if result["status"] == "ok" else 1


if __name__ == "__main__":
    raise SystemExit(main())
