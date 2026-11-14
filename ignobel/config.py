"""Load config.yaml once. Keep this tiny."""
from pathlib import Path

import yaml

HERE = Path(__file__).parent
_cache: dict = {}


def load(path: Path | None = None) -> dict:
    """Return the config dict; reads the file on first call."""
    key = str(path or HERE / "config.yaml")
    if key not in _cache:
        with open(key, encoding="utf-8") as f:
            _cache[key] = yaml.safe_load(f) or {}
    return _cache[key]
