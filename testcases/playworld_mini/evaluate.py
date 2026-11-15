"""Trusted grader for the synthetic Playworld proxy."""

import json
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from testcases import sandbox

HERE = Path(__file__).resolve().parent
if str(HERE) not in sys.path:
    sys.path.insert(0, str(HERE))
import env

EVAL_SEEDS = range(100_000, 100_200)
TEST_SEEDS = range(300_000, 300_200)
RECORD = 0.3598
TIMEOUT_S = 120


def valid_frame(frame):
    return (
        isinstance(frame, list)
        and len(frame) == 5
        and all(
            isinstance(row, list)
            and len(row) == 5
            and all(type(value) is int and 0 <= value <= 6 for value in row)
            for row in frame
        )
    )


def evaluate_source(source, task_dir=HERE, timeout_s=None, split="dev"):
    if split not in {"dev", "test"}:
        raise ValueError(f"unknown split: {split}")
    task_dir = Path(task_dir).resolve()
    started = time.time()
    score = 0.0
    status = "crash"
    reason = None
    network_isolated = False
    diagnostics = ""
    candidate_stderr = ""
    episodes = []
    try:
        config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
        sandbox.prepare_task(task_dir, config.get("context_files", []))
        seeds = EVAL_SEEDS if split == "dev" else TEST_SEEDS
        episodes = [env.episode(seed) for seed in seeds]
        inputs = [
            {
                "context_frames": episode["context_frames"],
                "context_actions": episode["context_actions"],
                "future_actions": episode["future_actions"],
            }
            for episode in episodes
        ]
        run = sandbox.run_candidate(
            task_dir,
            "world_model.py",
            source,
            context_files=config.get("context_files", []),
            trusted_files=("run_candidate.py",),
            inputs=inputs,
            output_file="predictions.json",
            command=["python", "-E", "-s", "/work/run_candidate.py"],
            timeout_s=TIMEOUT_S if timeout_s is None else timeout_s,
        )
        network_isolated = run.network_isolated
        candidate_stderr = run.stderr
        failure = sandbox.candidate_failure(run)
        if failure:
            reason, diagnostics = failure
        else:
            try:
                predictions = json.loads((run.output or b"").decode("utf-8"))
                if not isinstance(predictions, list) or len(predictions) != len(episodes):
                    raise ValueError(f"predictions must contain {len(episodes)} episodes")
            except (UnicodeDecodeError, json.JSONDecodeError, ValueError) as error:
                reason = "invalid_output"
                diagnostics = f"{type(error).__name__}: {error}"
            else:
                hits = 0
                total = 0
                for episode, prediction in zip(episodes, predictions):
                    if not isinstance(prediction, list):
                        prediction = []
                    for index, truth in enumerate(episode["future_frames"]):
                        hits += (
                            index < len(prediction)
                            and valid_frame(prediction[index])
                            and prediction[index] == truth
                        )
                        total += 1
                score = hits / total if total else 0.0
                status = "ok"
    except sandbox.SandboxUnavailable as error:
        reason = "sandbox_unavailable"
        diagnostics = str(error)
    except Exception as error:
        reason = "grader_error"
        diagnostics = f"{type(error).__name__}: {error}"

    loss = 1 - score
    config = json.loads((task_dir / "task.json").read_text(encoding="utf-8"))
    lines = [
        f"split: {split}",
        f"n_items: {len(episodes)}",
        f"score: {score:.6f}",
        f"loss: {loss:.6f}",
        f"record: {RECORD:.6f}",
        f"proxy_note: {config.get('proxy_note', '')}",
        f"network_isolated: {str(network_isolated).lower()}",
        f"seconds: {time.time() - started:.1f}",
    ]
    stderr = ""
    if status != "ok":
        stderr = f"error: {reason}: {diagnostics}\n"
    if candidate_stderr:
        stderr += candidate_stderr
        if not stderr.endswith("\n"):
            stderr += "\n"
    return {
        "score": score,
        "loss": loss,
        "split": split,
        "n_items": len(episodes),
        "status": status,
        "reason": reason,
        "stdout": "\n".join(lines) + "\n",
        "stderr": stderr,
        "network_isolated": network_isolated,
    }


def main():
    source = (HERE / "world_model.py").read_text(encoding="utf-8")
    result = evaluate_source(source)
    sys.stdout.write(result["stdout"])
    sys.stderr.write(result["stderr"])


if __name__ == "__main__":
    main()
