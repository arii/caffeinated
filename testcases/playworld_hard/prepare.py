"""Write the 500 public training episodes (seeds 0-499) to data/train.jsonl."""

import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent

(HERE / "data").mkdir(exist_ok=True)
subprocess.run([sys.executable, "env.py", "--make-public-data"], cwd=HERE, check=True)
