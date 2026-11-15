"""Run untrusted testcase candidates in disposable, network-isolated containers."""

import importlib.util
import json
import os
import shutil
import stat
import subprocess
import sys
import tempfile
import threading
import uuid
from dataclasses import dataclass
from pathlib import Path, PurePosixPath

ROOT = Path(__file__).resolve().parents[1]
TESTCASES = Path(__file__).resolve().parent
SANDBOX_IMAGE = "caffeinated-testcases:py311-v1"
CONTAINER_PATH = "/usr/local/bin:/usr/bin:/bin"
MAX_STDOUT_BYTES = 1_000_000
MAX_STDERR_BYTES = 64_000
MAX_OUTPUT_BYTES = 8_000_000
TASK_TIMEOUTS = {
    "bixbench_mini": 120,
    "hadamard19": 60,
    "ignobel": 120,
    "playworld_mini": 120,
}
SECRET_ENV_MARKERS = ("KEY", "TOKEN", "SECRET", "PASSWORD")

if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))


class SandboxUnavailable(RuntimeError):
    """The requested Docker sandbox could not be created or cleaned up."""


@dataclass
class CandidateRun:
    stdout: str
    stderr: str
    returncode: int
    output: bytes | None = None
    timed_out: bool = False
    stdout_truncated: bool = False
    stderr_truncated: bool = False
    output_error: str | None = None
    network_isolated: bool = True


def _trusted_env():
    return {
        key: value
        for key, value in os.environ.items()
        if not any(marker in key.upper() for marker in SECRET_ENV_MARKERS)
    }


def prepare_task(task_dir, context_files, required_files=()):
    task_dir = Path(task_dir).resolve()
    missing = [name for name in (*context_files, *required_files) if not (task_dir / name).exists()]
    prepare = task_dir / "prepare.py"
    if missing and prepare.exists():
        result = subprocess.run(
            [sys.executable, "-E", "-s", "prepare.py"],
            cwd=task_dir,
            env=_trusted_env(),
            capture_output=True,
            text=True,
            timeout=300,
            check=False,
        )
        if result.returncode:
            detail = result.stderr.strip() or result.stdout.strip()
            raise RuntimeError(f"task preparation failed: {detail}")
        missing = [
            name for name in (*context_files, *required_files) if not (task_dir / name).exists()
        ]
    if missing:
        raise FileNotFoundError("missing testcase inputs: " + ", ".join(map(str, missing)))


def docker_available():
    docker = shutil.which("docker")
    if docker is None:
        return False
    try:
        result = subprocess.run(
            [docker, "info", "--format", "{{.ServerVersion}}"],
            capture_output=True,
            text=True,
            timeout=5,
            check=False,
        )
    except (OSError, subprocess.TimeoutExpired):
        return False
    return result.returncode == 0


def _safe_relative_path(value):
    path = PurePosixPath(str(value))
    if path.is_absolute() or not path.parts or any(part in ("", ".", "..") for part in path.parts):
        raise ValueError(f"unsafe testcase path: {value}")
    return Path(*path.parts)


def _copy_public_path(task_dir, candidate_dir, value):
    relative = _safe_relative_path(value)
    source = task_dir / relative
    cursor = task_dir
    for part in relative.parts:
        cursor = cursor / part
        if cursor.is_symlink():
            raise ValueError(f"testcase input is a symlink: {value}")
    resolved = source.resolve(strict=True)
    if not resolved.is_relative_to(task_dir):
        raise ValueError(f"testcase input escapes its task directory: {value}")
    target = candidate_dir / relative
    if source.is_dir():
        for path in source.rglob("*"):
            if path.is_symlink():
                raise ValueError(f"testcase input contains a symlink: {value}")
        shutil.copytree(source, target)
    elif source.is_file():
        target.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(source, target)
    else:
        raise ValueError(f"testcase input is not a regular file or directory: {value}")


def _read_limited(stream, limit, result, key):
    output = bytearray()
    truncated = False
    while True:
        chunk = stream.read(8192)
        if not chunk:
            break
        remaining = limit - len(output)
        if remaining > 0:
            output.extend(chunk[:remaining])
        if len(chunk) > remaining:
            truncated = True
    result[key] = bytes(output)
    result[key + "_truncated"] = truncated
    stream.close()


def _run_bounded(command, timeout_s):
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    captured = {}
    readers = [
        threading.Thread(
            target=_read_limited,
            args=(process.stdout, MAX_STDOUT_BYTES, captured, "stdout"),
            daemon=True,
        ),
        threading.Thread(
            target=_read_limited,
            args=(process.stderr, MAX_STDERR_BYTES, captured, "stderr"),
            daemon=True,
        ),
    ]
    for reader in readers:
        reader.start()
    timed_out = False
    try:
        process.wait(timeout=timeout_s)
    except subprocess.TimeoutExpired:
        timed_out = True
        process.kill()
        process.wait()
    for reader in readers:
        reader.join()
    return (
        captured["stdout"],
        captured["stderr"],
        process.returncode,
        timed_out,
        captured["stdout_truncated"],
        captured["stderr_truncated"],
    )


def _read_output(directory, filename):
    relative = _safe_relative_path(filename)
    path = directory / relative
    try:
        metadata = path.lstat()
    except FileNotFoundError:
        return None, f"candidate did not create /out/{relative.as_posix()}"
    if not stat.S_ISREG(metadata.st_mode):
        return None, "candidate output must be a regular file"
    if metadata.st_size > MAX_OUTPUT_BYTES:
        return None, "candidate output exceeds the size limit"
    flags = os.O_RDONLY | getattr(os, "O_NOFOLLOW", 0)
    try:
        descriptor = os.open(path, flags)
        with os.fdopen(descriptor, "rb") as stream:
            if not stat.S_ISREG(os.fstat(stream.fileno()).st_mode):
                return None, "candidate output must be a regular file"
            output = stream.read(MAX_OUTPUT_BYTES + 1)
    except OSError as error:
        return None, f"could not read candidate output: {error}"
    if len(output) > MAX_OUTPUT_BYTES:
        return None, "candidate output exceeds the size limit"
    return output, None


def _remove_container(docker, name):
    try:
        result = subprocess.run(
            [docker, "rm", "-f", name],
            capture_output=True,
            text=True,
            timeout=15,
            check=False,
        )
    except (OSError, subprocess.TimeoutExpired) as error:
        raise SandboxUnavailable(
            f"sandbox_unavailable: could not remove container: {error}"
        ) from error
    if result.returncode and "No such container" not in result.stderr:
        raise SandboxUnavailable(
            "sandbox_unavailable: could not remove container: " + result.stderr.strip()
        )


def _run_docker(candidate_dir, output_dir, command, timeout_s):
    docker = shutil.which("docker")
    if docker is None:
        raise SandboxUnavailable("sandbox_unavailable: docker is not on PATH")
    name = f"autoresearch-testcase-{uuid.uuid4().hex[:12]}"
    create = [
        docker,
        "create",
        "--name",
        name,
        "--network",
        "none",
        "--read-only",
        "--tmpfs",
        "/tmp:size=64m,mode=1777,noexec,nosuid,nodev",
        "--cap-drop",
        "ALL",
        "--security-opt",
        "no-new-privileges",
        "--memory",
        "4g",
        "--cpus",
        "1",
        "--pids-limit",
        "64",
        "--ulimit",
        "fsize=8388608:8388608",
        "--user",
        f"{os.getuid()}:{os.getgid()}",
        "--mount",
        f"type=bind,source={candidate_dir.resolve()},target=/work,readonly",
        "--mount",
        f"type=bind,source={output_dir.resolve()},target=/out",
        "--workdir",
        "/work",
        "--entrypoint",
        "/usr/bin/env",
        SANDBOX_IMAGE,
        "-i",
        f"PATH={CONTAINER_PATH}",
        "HOME=/tmp",
        "PYTHONHASHSEED=0",
        "LANG=C.UTF-8",
        *command,
    ]
    try:
        try:
            created = subprocess.run(
                create, capture_output=True, text=True, timeout=30, check=False
            )
        except (OSError, subprocess.TimeoutExpired) as error:
            raise SandboxUnavailable(
                f"sandbox_unavailable: docker could not create the sandbox: {error}"
            ) from error
        if created.returncode:
            raise SandboxUnavailable(
                "sandbox_unavailable: docker could not create the sandbox: "
                + created.stderr.strip()
            )
        (
            stdout,
            stderr,
            returncode,
            timed_out,
            stdout_truncated,
            stderr_truncated,
        ) = _run_bounded([docker, "start", "-a", name], timeout_s)
        if not timed_out:
            try:
                inspected = subprocess.run(
                    [
                        docker,
                        "inspect",
                        "--format",
                        "{{json .State}}",
                        name,
                    ],
                    capture_output=True,
                    text=True,
                    timeout=10,
                    check=False,
                )
            except (OSError, subprocess.TimeoutExpired) as error:
                raise SandboxUnavailable(
                    f"sandbox_unavailable: docker could not inspect the sandbox: {error}"
                ) from error
            if inspected.returncode:
                raise SandboxUnavailable(
                    "sandbox_unavailable: docker could not inspect the sandbox: "
                    + inspected.stderr.strip()
                )
            try:
                state = json.loads(inspected.stdout)
            except json.JSONDecodeError as error:
                raise SandboxUnavailable(
                    "sandbox_unavailable: docker returned invalid container state"
                ) from error
            if state.get("Error") or state.get("Status") != "exited":
                raise SandboxUnavailable(
                    "sandbox_unavailable: docker could not start the sandbox: "
                    + str(state.get("Error") or state.get("Status"))
                )
    except OSError as error:
        raise SandboxUnavailable(
            f"sandbox_unavailable: docker could not start the sandbox: {error}"
        ) from error
    finally:
        _remove_container(docker, name)
    return (
        stdout.decode("utf-8", errors="replace"),
        stderr.decode("utf-8", errors="replace"),
        returncode,
        timed_out,
        stdout_truncated,
        stderr_truncated,
    )


def run_candidate(
    task_dir,
    editable,
    candidate_source,
    *,
    context_files=(),
    trusted_files=(),
    inputs=None,
    output_file=None,
    command=None,
    timeout_s=120,
):
    task_dir = Path(task_dir).resolve()
    editable_path = _safe_relative_path(editable)
    with tempfile.TemporaryDirectory(prefix="autoresearch-cpu-candidate-") as tmp:
        temporary = Path(tmp)
        candidate_dir = temporary / "candidate"
        output_dir = temporary / "output"
        candidate_dir.mkdir()
        output_dir.mkdir()
        target = candidate_dir / editable_path
        target.parent.mkdir(parents=True, exist_ok=True)
        target.write_text(candidate_source, encoding="utf-8")
        copied = {editable_path.as_posix()}
        for value in (*context_files, *trusted_files):
            relative = _safe_relative_path(value)
            if relative.as_posix() not in copied:
                _copy_public_path(task_dir, candidate_dir, value)
                copied.add(relative.as_posix())
        if inputs is not None:
            (candidate_dir / "inputs.json").write_text(
                json.dumps(inputs, separators=(",", ":")),
                encoding="utf-8",
            )
        if output_file is not None:
            output_path = _safe_relative_path(output_file)
            if len(output_path.parts) != 1:
                raise ValueError("candidate output file must be at the /out root")
            output_file = output_path.as_posix()
        if command is None:
            command = ["python", "-E", "-s", f"/work/{editable_path.as_posix()}"]
        else:
            command = list(map(str, command))
        (
            stdout,
            stderr,
            returncode,
            timed_out,
            stdout_truncated,
            stderr_truncated,
        ) = _run_docker(candidate_dir, output_dir, command, timeout_s)
        entries = []
        with os.scandir(output_dir) as directory_entries:
            for entry in directory_entries:
                entries.append(entry.name)
                if len(entries) > 1:
                    break
        if entries != ([output_file] if output_file else []):
            output, output_error = None, "unexpected files in candidate output directory"
        else:
            output, output_error = (
                _read_output(output_dir, output_file) if output_file else (None, None)
            )
        return CandidateRun(
            stdout=stdout,
            stderr=stderr,
            returncode=returncode,
            output=output,
            timed_out=timed_out,
            stdout_truncated=stdout_truncated,
            stderr_truncated=stderr_truncated,
            output_error=output_error,
        )


def candidate_failure(result):
    if result.timed_out:
        return "timeout", "candidate timed out"
    if result.stdout_truncated or result.stderr_truncated:
        return "output_too_large", "candidate output exceeded the capture limit"
    if result.output_error:
        return "invalid_output", result.output_error
    if result.returncode:
        return "candidate_failed", f"candidate exited with status {result.returncode}"
    return None


def evaluate_task(task_dir, candidate_source, **kwargs):
    task_dir = Path(task_dir).resolve()
    evaluator = TESTCASES / task_dir.name / "evaluate.py"
    if task_dir.name not in TASK_TIMEOUTS or not evaluator.is_file():
        return {
            "score": 0.0,
            "loss": None,
            "status": "crash",
            "reason": "unknown_task",
            "stdout": "",
            "stderr": f"error: unknown testcase: {task_dir.name}\n",
            "network_isolated": False,
        }
    module_name = f"_autoresearch_{task_dir.name}_grader"
    spec = importlib.util.spec_from_file_location(module_name, evaluator)
    module = importlib.util.module_from_spec(spec)
    sys.modules[module_name] = module
    try:
        spec.loader.exec_module(module)
        return module.evaluate_source(candidate_source, task_dir=task_dir, **kwargs)
    except SandboxUnavailable as error:
        return {
            "score": 0.0,
            "loss": None,
            "status": "crash",
            "reason": "sandbox_unavailable",
            "stdout": "",
            "stderr": f"error: {error}\n",
            "network_isolated": False,
        }
    except Exception as error:
        return {
            "score": 0.0,
            "loss": None,
            "status": "crash",
            "reason": "grader_error",
            "stdout": "",
            "stderr": f"error: {type(error).__name__}: {error}\n",
            "network_isolated": False,
        }
    finally:
        sys.modules.pop(module_name, None)
