#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
# Backend-only credential. Never use a VITE_ prefix or pass it to the browser.
if [[ -f .env.openai.local ]]; then
  set -a
  source .env.openai.local
  set +a
fi
: "${OPENAI_API_KEY:?Set OPENAI_API_KEY or .env.openai.local}"
export EXA=off MEMORY_BACKEND=local
exec .venv/bin/python swarm.py \
  --task hadamard21 --arm B --rounds 1 --workers 8 \
  --llm openai --model gpt-6-luna --supervisor-model gpt-6.1-sol \
  --critic-model gpt-6-luna --worker-tokens 1200 --supervisor-tokens 4096 \
  --max-cost-usd 1 --exa off --literature off --memory-backend local \
  --no-push --out "${OPENAI_RUN_OUT:-experiments/openai-demo}"
