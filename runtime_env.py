"""Load the project's simple KEY=value environment file without executing shell code."""

import os
import re
import shlex
from pathlib import Path


def load_local_env(path, environ=None):
    """Load missing variables only; support export, quoted values and comments.

    Values are literal: no shell commands, variable expansion or multiline syntax.
    The caller supplies an explicit path so the working directory cannot redirect it.
    """
    path = Path(path)
    target = os.environ if environ is None else environ
    if not path.is_file():
        return
    for number, raw in enumerate(path.read_text(encoding="utf-8-sig").splitlines(), 1):
        line = raw.strip()
        if not line or line.startswith("#"):
            continue
        if line.startswith("export "):
            line = line[7:].lstrip()
        key, separator, value = line.partition("=")
        key, value = key.strip(), value.strip()
        if not separator or not re.fullmatch(r"[A-Za-z_][A-Za-z0-9_]*", key):
            raise ValueError(f"Invalid environment assignment at line {number}")
        if value.startswith(("'", '"')):
            try:
                parts = shlex.split(value, comments=True, posix=True)
            except ValueError:
                raise ValueError(f"Invalid quoted environment value at line {number}") from None
            if len(parts) != 1:
                raise ValueError(f"Invalid quoted environment value at line {number}")
            value = parts[0]
        else:
            value = re.split(r"\s+#", value, maxsplit=1)[0].rstrip()
        target.setdefault(key, value)
