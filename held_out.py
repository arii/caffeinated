"""Grade baseline and best accepted commits once on a benchmark's held-out split."""

import argparse
import json
import subprocess
from datetime import datetime, timezone
from pathlib import Path

from testcases import sandbox

ROOT = Path(__file__).resolve().parent
TESTCASES = ROOT / "testcases"


def _git_show(repo, commit, target):
    result = subprocess.run(
        ["git", "-C", str(repo), "show", f"{commit}:{target}"],
        capture_output=True,
        text=True,
        check=False,
    )
    if result.returncode:
        raise RuntimeError(f"cannot read {commit}:{target}: {result.stderr.strip()}")
    return result.stdout


def _reference_source(task_name, task_dir, config):
    if task_name != "playworld_mini":
        return None
    for edit in config.get("fake_edits", []):
        idea = edit.get("idea", "").lower().replace("-", " ")
        if "8 frame memory" not in idea:
            continue
        source = (task_dir / config["editable"]).read_text(encoding="utf-8")
        if edit["old"] not in source:
            return None
        return source.replace(edit["old"], edit["new"], 1)
    return None


def held_out_test(task_name, out_dir) -> dict:
    out_dir = Path(out_dir).resolve()
    task_dir = TESTCASES / task_name
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    if not config.get("held_out_test"):
        raise ValueError(f"task {task_name!r} has no held-out test split")
    artifact_path = out_dir / "held_out_test.json"
    if artifact_path.exists():
        result = json.loads(artifact_path.read_text(encoding="utf-8"))
        if result.get("task") != task_name or result.get("split") != "test":
            raise ValueError(f"existing held-out result does not match task {task_name!r}")
        return result
    run = json.loads((out_dir / "run.json").read_text(encoding="utf-8"))
    checkpoint = json.loads((out_dir / "resume_checkpoint.json").read_text(encoding="utf-8"))
    repo = Path(run["repo"]).resolve()
    target = f"testcases/{task_name}/{config['editable']}"
    baseline_commit = run["swarm_commit"]
    best_commit = checkpoint["best_commit"]
    dev_loss = checkpoint["best_val"]

    def evaluate(commit):
        source = _git_show(repo, commit, target)
        return sandbox.evaluate_task(task_dir, source, split="test")

    baseline_result = evaluate(baseline_commit)
    best_result = baseline_result if best_commit == baseline_commit else evaluate(best_commit)
    reference = _reference_source(task_name, task_dir, config)
    reference_result = (
        sandbox.evaluate_task(task_dir, reference, split="test") if reference is not None else None
    )
    result = {
        "task": task_name,
        "split": "test",
        "n_items": baseline_result.get("n_items", 0),
        "baseline": {
            "commit": baseline_commit,
            "loss": baseline_result.get("loss"),
            "score": baseline_result.get("score"),
            "status": baseline_result.get("status", "crash"),
        },
        "best": {
            "commit": best_commit,
            "loss": best_result.get("loss"),
            "score": best_result.get("score"),
            "status": best_result.get("status", "crash"),
            "dev_loss": dev_loss,
        },
        "reference_test_loss": (
            reference_result["loss"]
            if reference_result is not None and reference_result.get("status") == "ok"
            else None
        ),
        "proxy_note": config.get("proxy_note", ""),
        "evaluated_at": datetime.now(timezone.utc).isoformat().replace("+00:00", "Z"),
    }
    artifact_path.write_text(json.dumps(result, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    return result


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--task", required=True)
    parser.add_argument("--run", required=True, type=Path, help="swarm output directory")
    args = parser.parse_args(argv)
    try:
        result = held_out_test(args.task, args.run)
    except Exception as error:
        parser.exit(2, f"held_out.py: {type(error).__name__}: {error}\n")
    print(
        f"held-out test written to {args.run / 'held_out_test.json'} "
        f"(reference_test_loss={result['reference_test_loss']})"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
