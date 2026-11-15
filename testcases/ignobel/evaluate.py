"""Trusted grader for the Ig Nobel pre-registered expert-study task.

The candidate file is prereg.json: a pre-registration written by a domain
expert BEFORE any data is seen. Candidate code is never executed. The host
1. checks the registration (field, question, hypothesis, mechanism, a real
   public dataset URL, the two columns, direction, predicted effect size);
2. verifies every citation: at least MIN_CITATIONS distinct sources, each an
   Exa source id or URL from this run's research log (TASK_RESEARCH_LOG), a
   pre-vetted entry in sources.json, or a DOI that Crossref confirms exists;
3. downloads the dataset once (external.py: open-data hosts or URLs the run's
   Exa research cites), freezes it, and allows ONE registered test per dataset
   per run (later registrations on the same dataset score 0);
4. runs the registered Spearman test once: significant = p < ALPHA on all rows
   with the registered sign; replicated = the same sign with p <
   REPLICATION_ALPHA in each of the two fixed hash halves; trivial pairs fail.

loss = 1 - (replicated and significant)

Every graded study is appended to <run>/ignobel_studies.jsonl; the Ig Nobel
committee (committee.py, from ignobel/committee.py) scores the replicated
ones after the run with score_run.py.
"""

import csv
import hashlib
import json
import os
import re
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
for path in (ROOT, HERE):
    if str(path) not in sys.path:
        sys.path.insert(0, str(path))

import external
from judge_text import tokens
from stats import spearman

FIELD = re.compile(r"[a-z][a-z0-9_]{2,40}")
ALPHA = 0.005
REPLICATION_ALPHA = 0.05
MIN_N = 30
MIN_CELL = 10
MAX_WORD_OVERLAP = 0.5
MIN_CITATIONS = 2
MAX_CITATIONS = 8
MAX_TEXT = 600
TEXT_FIELDS = ("question", "hypothesis", "mechanism")
ENDPOINTS = (
    ("start", "end"),
    ("begin", "end"),
    ("onset", "offset"),
    ("min", "max"),
    ("minimum", "maximum"),
    ("lowest", "highest"),
    ("low", "high"),
    ("lower", "upper"),
    ("open", "close"),
    ("opening", "closing"),
    ("first", "last"),
    ("entry", "exit"),
    ("arrival", "departure"),
)


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


def headline(dataset, x, x_level, y, y_level, direction, pers=(None, None)):
    def phrase(variable, level, up=True, per=None):
        if level is None:
            suffix = f' per "{per["label"]}"' if per else ""
            return f'{"higher" if up else "lower"} "{variable["label"]}"{suffix}'
        return f'{"" if up else "not "}answering "{level}" to "{variable["label"]}"'

    x_phrase = phrase(x, x_level, per=pers[0])
    y_phrase = phrase(y, y_level, direction == "positive", pers[1])
    return f"In the {dataset['title']}, {x_phrase} goes with {y_phrase}"


def shared_words(dataset):
    """Words in most of a dataset's labels (e.g. Bob Ross 'painting features') say nothing about overlap."""
    counts = {}
    for variable in dataset["variables"].values():
        for word in set(tokens(variable["label"])):
            counts[word] = counts.get(word, 0) + 1
    return {word for word, count in counts.items() if count > len(dataset["variables"]) / 2}


def interval_endpoints(label_a, label_b):
    """True when two labels are the two ends of one quantity (start/end time, min/max price):
    such columns move together by construction (end = start + duration)."""
    a, b = set(tokens(label_a)), set(tokens(label_b))
    for low, high in ENDPOINTS:
        crossed = (low in a and high in b) or (high in a and low in b)
        if crossed and a - {low, high} == b - {low, high}:
            return True
    return False


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
                raise ValueError(
                    f"{axis}_level must be one of the codebook levels of {claim[axis]}"
                )
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
    if interval_endpoints(x["label"], y["label"]):
        return sides, "trivial: x and y are two ends of one quantity (related by construction)"
    common = shared_words(dataset)
    wx, wy = set(tokens(x["label"])) - common, set(tokens(y["label"])) - common
    if wx and wy and len(wx & wy) / len(wx | wy) >= MAX_WORD_OVERLAP:
        return sides, "trivial: x and y ask nearly the same question"
    return sides, None


def rate(value, row, per):
    """value divided by the row's denominator column, for a registered derived variable."""
    if value is None or per is None:
        return value
    denominator = row[per]
    return value / float(denominator) if denominator not in ("", "0") and float(denominator) else None


def association(rows, claim, sides):
    (x, x_level), (y, y_level) = sides
    pairs = [
        (
            rate(encode(x, x_level, row[claim["x"]]), row, claim.get("x_per")),
            rate(encode(y, y_level, row[claim["y"]]), row, claim.get("y_per")),
        )
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
    field = prereg.get("field")
    if not isinstance(field, str) or not FIELD.fullmatch(field):
        raise ValueError(
            "field must be a snake_case research field or subfield, "
            f"e.g. one of {sorted(fields)} or a new one such as myrmecology"
        )
    study_types = sorted({kind for kinds in fields.values() for kind in kinds})
    if prereg.get("study_type") not in study_types:
        raise ValueError(f"study_type must be one of {study_types}")
    for key in TEXT_FIELDS:
        value = prereg.get(key)
        if not isinstance(value, str) or not value.strip() or len(value) > MAX_TEXT:
            raise ValueError(f"{key} must be a non-empty string of at most {MAX_TEXT} characters")
    citations = prereg.get("citations")
    if not isinstance(citations, list) or any(
        not isinstance(c, str) or not c.strip() for c in citations
    ):
        raise ValueError("citations must be a list of Exa source ids (S<k>) or URLs")
    if len(citations) > MAX_CITATIONS:
        raise ValueError(f"at most {MAX_CITATIONS} citations")
    dataset = prereg.get("dataset")
    if not isinstance(dataset, dict) or not isinstance(dataset.get("url"), str):
        raise ValueError("dataset must be an object with a url")
    for axis in ("x", "y"):
        if not isinstance(dataset.get(axis), str) or not dataset[axis].strip():
            raise ValueError(f"dataset.{axis} must name a column")
        for extra in ("level", "per"):
            value = dataset.get(f"{axis}_{extra}")
            if value is not None and (not isinstance(value, str) or not value.strip()):
                raise ValueError(f"dataset.{axis}_{extra} must be a string or omitted")
    if prereg.get("direction") not in ("positive", "negative"):
        raise ValueError("direction must be 'positive' or 'negative'")
    predicted = prereg.get("predicted_rho")
    if (
        isinstance(predicted, bool)
        or not isinstance(predicted, (int, float))
        or not 0 < predicted <= 1
    ):
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
                try:
                    real = external.doi_title(url, task_dir)
                except Exception as error:
                    problems.append(f"{url}: DOI lookup failed ({type(error).__name__})")
                    continue
                if not real:
                    problems.append(
                        f"{url} is neither a registered DOI nor found by this run's research or in sources.json"
                    )
                    continue
        url = external.canonical_citation(url)
        if url == external.canonical_citation(dataset_url):
            problems.append("the dataset itself is not a citation")
            continue
        resolved.append(url)
    resolved = list(dict.fromkeys(resolved))
    if len(resolved) < MIN_CITATIONS:
        problems.append(
            f"needs at least {MIN_CITATIONS} distinct verified citations, got {len(resolved)}"
        )
    return resolved, problems


def column(entry, name):
    wanted = external.prepare.clean(name).casefold()
    matches = [vid for vid, v in entry["variables"].items() if v["label"].casefold() == wanted]
    if len(matches) != 1:
        labels = "; ".join(v["label"][:60] for v in entry["variables"].values())
        raise ValueError(f"column {name!r} not found; usable columns: {labels}")
    return matches[0]


def test_hash(prereg):
    test = {key: prereg["dataset"].get(key) for key in ("url", "x", "x_level", "x_per", "y", "y_level", "y_per")}
    test["direction"] = prereg["direction"]
    return hashlib.sha256(json.dumps(test, sort_keys=True).encode()).hexdigest()[:16]


def claim_registry(research_log, name, digest, predicted):
    """One registered test per dataset (keyed by content hash) per run.

    Returns (reason or None, the predicted_rho registered FIRST for this test):
    re-registering the same test after seeing its result cannot move the prediction.
    """
    if not research_log:
        return None, predicted
    path = Path(research_log).parent / "ignobel_registry.json"
    registry = json.loads(path.read_text(encoding="utf-8")) if path.is_file() else {}
    previous = registry.get(name)
    if previous is not None:
        if previous["test"] != digest:
            return (
                "dataset already used by another registered test in this run (one confirmatory test per dataset)",
                predicted,
            )
        return None, previous["predicted_rho"]
    registry[name] = {"test": digest, "predicted_rho": predicted}
    external.prepare.atomic_write(path, json.dumps(registry, indent=1, sort_keys=True) + "\n")
    return None, predicted


def registered_claim(prereg, name, entry):
    """Resolve the registered columns, levels and rates against the dataset codebook."""
    data = prereg["dataset"]
    claim = {
        "dataset": name,
        "x": column(entry, data["x"]),
        "x_level": data.get("x_level"),
        "y": column(entry, data["y"]),
        "y_level": data.get("y_level"),
        "direction": prereg["direction"],
    }
    pers = []
    for axis in ("x", "y"):
        per = data.get(f"{axis}_per")
        claim[f"{axis}_per"] = column(entry, per) if per else None
        if per and (
            entry["variables"][claim[axis]]["kind"] != "numeric"
            or entry["variables"][claim[f"{axis}_per"]]["kind"] != "numeric"
        ):
            raise ValueError(f"dataset.{axis}_per needs a numeric {axis} and a numeric denominator")
        pers.append(entry["variables"][claim[f"{axis}_per"]] if per else None)
    sides, trivial = check_claim(claim, {name: entry})
    if {claim["x_per"], claim["y_per"]} & {claim["x"], claim["y"]} or (
        claim["x_per"] and claim["x_per"] == claim["y_per"]
    ):
        trivial = trivial or "trivial: a denominator is shared or is the other variable"
    return claim, sides, trivial, pers


def preflight_source(source, task_dir=HERE, research_log=None):
    """Problems that make a registration untestable, found without running its test."""
    task_dir = Path(task_dir).resolve()
    research_log = research_log or os.environ.get("TASK_RESEARCH_LOG")
    try:
        prereg = parse_prereg(source, load_fields(task_dir))
        url = prereg["dataset"]["url"].strip()
        problems = check_citations(prereg["citations"], url, task_dir, research_log)[1]
        if problems:
            return ["citations: " + "; ".join(problems)]
        try:
            name, entry = external.ensure(url, task_dir, research_log)
        except Exception as error:
            return [f"dataset unavailable: {type(error).__name__}: {error}"]
        trivial = registered_claim(prereg, name, entry)[2]
    except (json.JSONDecodeError, ValueError, KeyError, TypeError) as error:
        return [f"invalid registration: {error}"[:MAX_TEXT]]
    return [trivial] if trivial else []


def grade_prereg(prereg, task_dir=HERE, research_log=None):
    task_dir = Path(task_dir)
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
    claim, sides, trivial, pers = registered_claim(prereg, name, entry)
    (x, x_level), (y, y_level) = sides
    rows = read_rows(task_dir / entry["file"]) + read_rows(
        task_dir / ".cache" / "replication" / f"{name}.csv"
    )
    n, rho, p, problem = association(rows, claim, sides)
    predicted = float(prereg["predicted_rho"])
    rejected = trivial or problem
    if rejected is None:
        rejected, predicted = claim_registry(
            research_log, entry.get("sha256") or name, test_hash(prereg), predicted
        )
    sign = 1 if prereg["direction"] == "positive" else -1
    significant = rejected is None and p < ALPHA and rho * sign > 0
    halves = []
    for part in (entry["file"], f".cache/replication/{name}.csv"):
        h_n, h_rho, h_p, h_problem = association(read_rows(task_dir / part), claim, sides)
        halves.append({"n": h_n, "rho": h_rho, "p": h_p, "problem": h_problem})
    replicated = all(
        h["problem"] is None and h["p"] < REPLICATION_ALPHA and h["rho"] * sign > 0 for h in halves
    )
    confirmed = significant and replicated
    graded = {
        **result,
        "headline": headline(entry, x, x_level, y, y_level, prereg["direction"], pers),
        "rejected": rejected,
        "n": n,
        "rho": rho,
        "p": p,
        "halves": halves,
        "significant": significant,
        "replicated": replicated,
        "confirmed": confirmed,
        "predicted_rho": predicted,
        "columns": sorted(
            "/".join(filter(None, (claim[axis], claim[f"{axis}_per"]))) for axis in ("x", "y")
        ),
        "sha256": entry.get("sha256", ""),
        "score": 1.0 if confirmed else 0.0,
    }
    return graded


def record_study(research_log, prereg, graded):
    """Append the full study record for post-run analysis (score_run.py runs the committee)."""
    if not research_log:
        return
    path = Path(research_log).parent / "ignobel_studies.jsonl"
    same = json.dumps({"prereg": prereg, "result": graded}, sort_keys=True)
    if path.is_file():
        for previous in path.read_text(encoding="utf-8").splitlines():
            record = json.loads(previous)
            record.pop("ts", None)
            if json.dumps(record, sort_keys=True) == same:
                return
    line = (
        json.dumps({"ts": time.time(), "prereg": prereg, "result": graded}, sort_keys=True) + "\n"
    )
    with path.open("a", encoding="utf-8") as stream:
        stream.write(line)


def evaluate_source(source, task_dir=HERE, timeout_s=None, research_log=None):
    task_dir = Path(task_dir).resolve()
    research_log = research_log or os.environ.get("TASK_RESEARCH_LOG")
    started = time.time()
    status, reason, diagnostics, graded, prereg = "crash", None, "", None, None
    try:
        prereg = parse_prereg(source, load_fields(task_dir))
        graded = grade_prereg(prereg, task_dir, research_log)
        record_study(research_log, prereg, graded)
        status = "ok"
    except (json.JSONDecodeError, ValueError, KeyError, TypeError) as error:
        reason, diagnostics = "invalid_output", f"{type(error).__name__}: {error}"
        if prereg is not None:
            record_study(
                research_log,
                prereg,
                {
                    "dataset_id": external.dataset_id(prereg["dataset"]["url"].strip()),
                    "rejected": f"invalid registration: {error}"[:MAX_TEXT],
                    "score": 0.0,
                },
            )
    except Exception as error:
        reason, diagnostics = "grader_error", f"{type(error).__name__}: {error}"
    score = graded["score"] if graded else 0.0
    loss = 1.0 - score
    out = []
    if prereg:
        out += [
            f"field: {prereg['field']} / {prereg['study_type']}",
            f"question: {prereg['question']}",
        ]
    if graded:
        out += [
            f"citations: {len(graded['citations'])} verified",
            f"dataset: {prereg['dataset']['url']} -> {graded['dataset_id']}",
        ]
        if "headline" in graded:
            first, second = graded["halves"]
            out += [
                f"registered test: {graded['headline']}",
                f"rho: {graded['rho']:.4f} (p={graded['p']:.2g}, n={graded['n']}); predicted {graded['predicted_rho']:.3f}",
                f"halves: rho {first['rho']:.4f} (p={first['p']:.2g}), rho {second['rho']:.4f} (p={second['p']:.2g})",
                f"significant: {str(graded['significant']).lower()}",
                f"replicated: {str(graded['replicated']).lower()}",
                f"confirmed: {str(graded['confirmed']).lower()}",
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
