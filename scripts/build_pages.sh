#!/usr/bin/env bash
# Build the replay-only GitHub Pages site into docs/ (served at https://arii.github.io/caffeinated/).
#   scripts/build_pages.sh [<viewer-dir>...]
# With viewer dirs (e.g. ~/longruns2/out-ignobel/viewer), their recordings replace data/pages/viewer first.
# Existing docs/*.md files are never touched.
set -euo pipefail
cd "$(dirname "$0")/.."
if [ -x .venv/bin/python ]; then DEFAULT_PY=.venv/bin/python; else DEFAULT_PY=python3; fi
PY=${PYTHON:-$DEFAULT_PY}
if [ "$#" -gt 0 ]; then
  rm -rf data/pages/viewer && mkdir -p data/pages/viewer
  for dir in "$@"; do
    for run in "$dir"/*/; do [ -f "$run/manifest.json" ] && cp -R "$run" data/pages/viewer/; done
  done
fi
rm -rf docs/assets docs/recordings docs/index.html docs/.nojekyll
"$PY" scripts/export_pages.py data/pages/viewer docs/recordings
npx tsc --noEmit
npx vite build --mode pages
touch docs/.nojekyll
du -sh docs
