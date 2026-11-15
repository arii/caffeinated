"""Trusted grader for the Ig Nobel discovery task on real FiveThirtyEight survey data.

The candidate (study.py) sees only the discovery half of each dataset and prints
one claim. The host then
1. rejects trivial claims (same variable, same question group, near-identical
   wording, or demographics-only pairs);
2. re-tests the claimed association on the hidden replication half
   (Spearman rho, two-sided p < ALPHA, sign must match the claimed direction);
3. scores the codebook wording of the two variables (never the candidate's own
   text) with a frozen Ig Nobel-likeness judge trained on real Ig Nobel prize
   rationales and winning-paper titles vs. ordinary OpenAlex paper titles.

score = replicated * min(1, |rho_replication| / RHO_FULL) * ignobel_likeness
loss  = 1 - score
"""

import csv
import json
import math
from pathlib import Path
import sys
import time

ROOT = Path(__file__).resolve().parents[2]
HERE = Path(__file__).resolve().parent
for path in (ROOT, HERE):
    if str(path) not in sys.path:
        sys.path.insert(0, str(path))

from testcases import sandbox
from judge_text import likeness, tokens
from stats import spearman

TIMEOUT_S = 120
ALPHA = 0.01
RHO_FULL = 0.2
MIN_N = 30
MIN_CELL = 10
MAX_WORD_OVERLAP = 0.5
RECORD_LOSS = 0.3721
CANDIDATE_INPUTS = ("codebook.json", "codebook.txt", "data")


def load_judge(task_dir=HERE):
    return json.loads((Path(task_dir) / "judge.json").read_text(encoding="utf-8"))


def load_codebook(task_dir=HERE):
    return json.loads((Path(task_dir) / "codebook.json").read_text(encoding="utf-8"))


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
    def phrase(variable, level):
        if level is None:
            return f'higher "{variable["label"]}"'
        return f'answering "{level}" to "{variable["label"]}"'

    more = "more" if direction == "positive" else "less"
    return f"In the {dataset['title']}, {phrase(x, x_level)} goes with {more} {phrase(y, y_level)}"


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


def score_claim(claim, task_dir=HERE, codebook=None, judge=None, replication=None):
    """Grade a claim dict against the hidden replication half. Raises ValueError if malformed."""
    task_dir = Path(task_dir)
    codebook = codebook or load_codebook(task_dir)
    judge = judge or load_judge(task_dir)
    sides, trivial = check_claim(claim, codebook)
    dataset = codebook[claim["dataset"]]
    (x, x_level), (y, y_level) = sides
    funny = likeness(f"{side_text(x, x_level)} {side_text(y, y_level)}", judge)
    if replication is None:
        replication = read_rows(task_dir / ".cache" / "replication" / f"{claim['dataset']}.csv")
    discovery = read_rows(task_dir / dataset["file"])
    _, rho_d, p_d, _ = association(discovery, claim, sides)
    n, rho, p, problem = association(replication, claim, sides)
    sign = 1 if claim["direction"] == "positive" else -1
    replicated = trivial is None and problem is None and p < ALPHA and rho * sign > 0
    strength = min(1.0, abs(rho) / RHO_FULL)
    score = strength * funny if replicated else 0.0
    return {
        "headline": headline(dataset, x, x_level, y, y_level, claim["direction"]),
        "rejected": trivial or problem,
        "n_replication": n,
        "rho_discovery": rho_d,
        "p_discovery": p_d,
        "rho_replication": rho,
        "p_replication": p,
        "replicated": replicated,
        "strength": strength,
        "ignobel_likeness": funny,
        "score": score,
    }


def evaluate_source(source, task_dir=HERE, timeout_s=None):
    task_dir = Path(task_dir).resolve()
    started = time.time()
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    status, reason, diagnostics, candidate_stderr = "crash", None, "", ""
    network_isolated = False
    graded = None
    try:
        sandbox.prepare_task(
            task_dir,
            config.get("context_files", []),
            required_files=("codebook.json", ".cache/replication/thanksgiving.csv"),
        )
        run = sandbox.run_candidate(
            task_dir,
            config["editable"],
            source,
            context_files=CANDIDATE_INPUTS,
            timeout_s=TIMEOUT_S if timeout_s is None else timeout_s,
        )
        network_isolated = run.network_isolated
        candidate_stderr = run.stderr
        failure = sandbox.candidate_failure(run)
        if failure:
            reason, diagnostics = failure
        else:
            try:
                lines = [line for line in run.stdout.splitlines() if line.strip()]
                if not lines:
                    raise ValueError("study.py printed nothing")
                graded = score_claim(json.loads(lines[-1]), task_dir)
            except (json.JSONDecodeError, ValueError, KeyError, TypeError) as error:
                reason, diagnostics = "invalid_output", f"{type(error).__name__}: {error}"
            else:
                status = "ok"
    except sandbox.SandboxUnavailable as error:
        reason, diagnostics = "sandbox_unavailable", str(error)
    except Exception as error:
        reason, diagnostics = "grader_error", f"{type(error).__name__}: {error}"

    score = graded["score"] if graded else 0.0
    loss = 1.0 - score
    out = []
    if graded:
        out += [
            f"claim: {graded['headline']}",
            f"rejected: {graded['rejected'] or 'no'}",
            f"rho_discovery: {graded['rho_discovery']:.4f} (p={graded['p_discovery']:.2g})",
            f"rho_replication: {graded['rho_replication']:.4f} (p={graded['p_replication']:.2g}, n={graded['n_replication']})",
            f"replicated: {str(graded['replicated']).lower()}",
            f"ignobel_likeness: {graded['ignobel_likeness']:.4f}",
        ]
    out += [
        f"score: {score:.6f}",
        f"loss: {loss:.6f}",
        f"record: {RECORD_LOSS:.6f}",
        f"beats_reference: {str(loss < RECORD_LOSS).lower()}",
        f"proxy_note: {config.get('proxy_note', '')}",
        f"network_isolated: {str(network_isolated).lower()}",
        f"seconds: {time.time() - started:.1f}",
    ]
    stderr = "" if status == "ok" else f"error: {reason}: {diagnostics}\n"
    if candidate_stderr:
        stderr += candidate_stderr if candidate_stderr.endswith("\n") else candidate_stderr + "\n"
    return {
        "score": score,
        "loss": loss if status == "ok" else None,
        "status": status,
        "reason": reason,
        "stdout": "\n".join(out) + "\n",
        "stderr": stderr,
        "network_isolated": network_isolated,
    }


def main():
    config = json.loads((HERE / "task.json").read_text(encoding="utf-8"))
    result = evaluate_source((HERE / config["editable"]).read_text(encoding="utf-8"))
    sys.stdout.write(result["stdout"])
    sys.stderr.write(result["stderr"])


if __name__ == "__main__":
    main()
