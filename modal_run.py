"""Run autoresearch experiments on Modal GPUs.

Install uv with `curl -LsSf https://astral.sh/uv/install.sh | sh`, then create
a Python 3.12 client environment with
`uv venv --python 3.12 ~/.venvs/modal && uv pip install --python ~/.venvs/modal/bin/python modal`.
Invoke Modal with `~/.venvs/modal/bin/modal`. Modal is a local tool, not a
train.py dependency.
"""

import os
import re
from pathlib import Path
import subprocess
import sys

import modal


app = modal.App("autoresearch-boredom")
GPU = os.environ.get("AUTORESEARCH_GPU", "H100")

CACHE_VOLUME = modal.Volume.from_name(
    "autoresearch-cache", create_if_missing=True
)
HF_CACHE_VOLUME = modal.Volume.from_name(
    "autoresearch-hf-cache", create_if_missing=True
)

TORCH_INDEX_URL = "https://download.pytorch.org/whl/cu128"
WORK_DIR = Path("/root/work")
SUMMARY_LINE_RE = re.compile(r"^(\w+):\s+(\S+)$")

image = (
    modal.Image.debian_slim(python_version="3.11")
    .pip_install("torch==2.9.1", index_url=TORCH_INDEX_URL)
    .pip_install(
        "kernels>=0.11.7",
        "matplotlib",
        "numpy",
        "pandas",
        "pyarrow",
        "requests",
        "rustbpe",
        "tiktoken",
    )
    .add_local_file(
        str(Path(__file__).resolve().with_name("prepare.py")),
        "/root/work/prepare.py",
    )
)


def parse_metric_value(value):
    try:
        if not any(character in value for character in ".eE"):
            return int(value)
        return float(value)
    except ValueError:
        return value


def parse_metrics(log):
    metrics = {}
    in_summary = False
    for line in log.splitlines():
        if not in_summary:
            if line.strip() == "---":
                in_summary = True
            continue
        match = SUMMARY_LINE_RE.fullmatch(line)
        if match:
            metrics[match.group(1)] = parse_metric_value(match.group(2))
    return metrics


def output_text(value):
    if value is None:
        return ""
    if isinstance(value, bytes):
        return value.decode("utf-8", errors="replace")
    return value


@app.function(
    image=image,
    cpu=8,
    timeout=60 * 60,
    volumes={"/root/.cache/autoresearch": CACHE_VOLUME},
)
def prepare(num_shards: int = 10):
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["python", "prepare.py", "--num-shards", str(num_shards)],
        cwd=WORK_DIR,
        check=True,
    )
    CACHE_VOLUME.commit()


@app.function(
    image=image,
    gpu=GPU,
    timeout=15 * 60,
    volumes={"/root/.cache/huggingface": HF_CACHE_VOLUME},
)
def train(train_src: str, label: str) -> dict:
    WORK_DIR.mkdir(parents=True, exist_ok=True)
    (WORK_DIR / "train.py").write_text(train_src, encoding="utf-8")
    timed_out = False
    try:
        try:
            process = subprocess.run(
                ["python", "train.py"],
                cwd=WORK_DIR,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                timeout=10 * 60,
                check=False,
            )
            returncode = process.returncode
            log = output_text(process.stdout)
        except subprocess.TimeoutExpired as error:
            timed_out = True
            returncode = 124
            log = output_text(error.stdout)
            if error.stderr:
                log += output_text(error.stderr)
            log += "\nTraining exceeded the 10-minute limit and was terminated.\n"
        except OSError as error:
            returncode = 127
            log = f"Unable to start training: {error}\n"
        return {
            "label": label,
            "returncode": returncode,
            "timed_out": timed_out,
            "log": log,
            "metrics": parse_metrics(log),
        }
    finally:
        HF_CACHE_VOLUME.commit()


def read_git_train_source(commit):
    return subprocess.check_output(
        ["git", "show", f"{commit}:train.py"],
        text=True,
    )


def is_successful(result):
    if not isinstance(result, dict):
        return False
    metrics = result.get("metrics", {})
    return (
        result.get("returncode") == 0
        and not result.get("timed_out")
        and "val_bpb" in metrics
        and "peak_vram_mb" in metrics
    )


def format_val_bpb(result):
    if not is_successful(result):
        return "0.000000"
    return f"{float(result['metrics']['val_bpb']):.6f}"


def format_memory_gb(result):
    if not is_successful(result):
        return "0.0"
    return f"{float(result['metrics']['peak_vram_mb']) / 1024:.1f}"


@app.local_entrypoint()
def main(commits: str = "", out_dir: str = "runs"):
    if not commits:
        train_src = Path("train.py").read_text(encoding="utf-8")
        result = train.remote(train_src=train_src, label="baseline")
        sys.stdout.write(result.get("log", ""))
        sys.stdout.flush()
        if not is_successful(result):
            raise SystemExit(1)
        return

    commit_list = [commit.strip() for commit in commits.split(",") if commit.strip()]
    output_dir = Path(out_dir)
    output_dir.mkdir(parents=True, exist_ok=True)
    results_by_commit = {}
    remote_jobs = []
    remote_labels = []

    for commit in commit_list:
        try:
            train_src = read_git_train_source(commit)
        except (OSError, subprocess.CalledProcessError) as error:
            results_by_commit[commit] = {
                "label": commit,
                "returncode": 1,
                "timed_out": False,
                "log": f"Unable to read {commit}: {error}\n",
                "metrics": {},
            }
            continue
        remote_jobs.append((train_src, commit))
        remote_labels.append(commit)

    if remote_jobs:
        remote_results = train.starmap(remote_jobs, return_exceptions=True)
        for commit, result in zip(remote_labels, remote_results):
            if isinstance(result, BaseException):
                results_by_commit[commit] = {
                    "label": commit,
                    "returncode": 1,
                    "timed_out": False,
                    "log": f"Remote training failed: {result}\n",
                    "metrics": {},
                }
            else:
                results_by_commit[commit] = result

    for commit in commit_list:
        result = results_by_commit[commit]
        (output_dir / f"{commit}.log").write_text(
            result.get("log", ""), encoding="utf-8"
        )

    print("commit\tval_bpb\tmemory_gb\tstatus")
    for commit in commit_list:
        result = results_by_commit[commit]
        status = "ok" if is_successful(result) else "crash"
        print(
            f"{commit}\t{format_val_bpb(result)}\t"
            f"{format_memory_gb(result)}\t{status}"
        )
    if any(not is_successful(result) for result in results_by_commit.values()):
        raise SystemExit(1)
