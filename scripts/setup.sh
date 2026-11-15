#!/bin/sh
# Install the lock-generated development requirements, including Tinker/viewer.
set -eu

project_root=$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)
cd "$project_root"
python_command=${PYTHON:-python3.12}
uv_command=${UV:-uv}

if command -v "$uv_command" >/dev/null 2>&1; then
    if [ ! -x .venv/bin/python ]; then
        "$uv_command" venv --python "$python_command" --seed .venv
    fi
    "$uv_command" pip install --python .venv/bin/python -r requirements-dev.txt
    "$uv_command" pip check --python .venv/bin/python
else
    "$python_command" -m venv .venv
    .venv/bin/python -m pip install -r requirements-dev.txt
    .venv/bin/python -m pip check
fi

printf '%s\n' 'Ready: . .venv/bin/activate'
