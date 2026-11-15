#!/usr/bin/env bash
# Live Ig Nobel hunt: one Sol supervisor, eight Luna labs, Sol judges, one shared USD ceiling.
set -euo pipefail
cd "$(dirname "$0")/.."
# Backend-only credential. Never use a VITE_ prefix or pass it to the browser.
# Launcher-provided limits win over the local file, so it cannot raise the spending ceiling.
launch_env=()
for name in OPENAI_MAX_COST_USD OPENAI_RUN_ROUNDS OPENAI_RUN_OUT; do
  if [[ -n "${!name+x}" ]]; then launch_env+=("$name=${!name}"); fi
done
if [[ -f .env.openai.local ]]; then
  set -a
  source .env.openai.local
  set +a
fi
if ((${#launch_env[@]})); then export "${launch_env[@]}"; fi
: "${OPENAI_API_KEY:?Set OPENAI_API_KEY or .env.openai.local}"
export MEMORY_BACKEND=local
export IGNOBEL_JUDGE_BASE_URL=https://api.openai.com/v1 IGNOBEL_JUDGE_API_KEY_ENV=OPENAI_API_KEY
export IGNOBEL_JUDGE_A_MODEL="${IGNOBEL_JUDGE_A_MODEL:-gpt-6.1-sol}"
export IGNOBEL_JUDGE_B_MODEL="${IGNOBEL_JUDGE_B_MODEL:-gpt-6-sol}"
research=(--exa off --literature keyless)
if [[ -n "${EXA_API_KEY:-}" ]]; then research=(--exa on); fi
exec .venv/bin/python swarm.py \
  --task ignobel --arm B --rounds "${OPENAI_RUN_ROUNDS:-5}" --workers 8 \
  --llm openai --model gpt-6-luna --supervisor-model gpt-6.1-sol \
  --critic-model gpt-6-luna --worker-tokens 1200 --supervisor-tokens 4096 \
  --max-cost-usd "${OPENAI_MAX_COST_USD:-20}" "${research[@]}" --memory-backend local \
  --no-push --out "${OPENAI_RUN_OUT:-experiments/openai-ignobel}"
