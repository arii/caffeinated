#!/usr/bin/env bash
# One bounded local batch. No API keys, paid search, hosted judging, or Git pushes.
set -euo pipefail
cd "$(dirname "$0")/.."
export OLLAMA_HOST=http://127.0.0.1:11434
export EXA=off MEMORY_BACKEND=local
exec .venv/bin/python swarm.py \
  --task hadamard21 --arm B --rounds 1 --workers 8 \
  --llm ollama --model qwen3:4b --supervisor-model qwen3:8b \
  --critic-model qwen3:8b --worker-tokens 600 --supervisor-tokens 4096 \
  --ollama-context 8192 --exa off --literature off --memory-backend local \
  --no-push --out "${OLLAMA_RUN_OUT:-experiments/ollama-demo}"
