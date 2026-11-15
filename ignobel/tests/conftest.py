import os
import sys
from pathlib import Path

os.environ.setdefault("MOCK", "1")
ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))


def _docker_running() -> bool:
    import shutil
    import subprocess
    docker = shutil.which("docker")
    return bool(docker) and subprocess.run([docker, "info"], capture_output=True).returncode == 0


import pytest  # noqa: E402

requires_sandbox = pytest.mark.skipif(not _docker_running(), reason="studies run only in the Docker sandbox")
