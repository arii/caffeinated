# Swarm protocol

Four workers propose one `train.py` change per round. The conductor records
assignments and candidates in a locked descriptor-meter ledger, applies the
gate before GPU runs, then confirms a provisional best with seed 43. Arms with
Exa enabled run at least one research scout every round, including EXPLOIT.
SNAP and BREAKOUT retain their meter-driven scout allocation; EXPLOIT uses one
divergent scout. Arm A always allocates three exploit workers and one divergent
slot, which scouts when Exa is enabled. Arms with Exa disabled have no scouts.
The result ledger generates
`results.tsv`; assignments, claims, research, memory, LLM calls, run logs, and
critic outcomes are saved alongside it.

Set `OPENAI_API_KEY` and `OPENAI_MODEL` (or pass `--model`) for the real LLM.
Arms A, B, and C use past.dev with one shared `PAST_API_KEY` by default, with
`PAST_API_KEY_<ARM>` overrides available; each arm has a separate audience.
Arm D uses a shared local memory mirror. Arm A is the meter-disabled comparison
and omits the critic LLM, while keeping the same prior-art and memory protocol
as the other arms. Exa and prior-art are enabled by default for A, B, and D; C
remains off.

Run an arm from the repository root:

```sh
python3 swarm.py --arm A
python3 swarm.py --arm B
python3 swarm.py --arm C
python3 swarm.py --arm D
```

Each real run uses Modal H100 bursts and writes to
`experiments/swarm_<arm>/` on its `swarm-<arm>-<date>` branch. To exercise the
protocol offline, use `--llm fake --gpu fake --no-push` with
`MEMORY_BACKEND=local EXA=off`; fake GPU scores are deterministic and never
push a branch or tag. Use `--llm queue` to write prompts under
`<out>/llm_queue`; `python3 swarm_queue.py list --queue-dir <out>/llm_queue`
shows pending calls, and `show`/`answer` inspect and respond to a call. Queue
mode needs no OpenAI API key; `--queue-timeout` defaults to 3600 seconds.

## Mini benchmarks

`python3 swarm.py --task {hadamard19,bixbench_mini,playworld_mini}` runs the same
loop on a small local task instead of `train.py` on Modal. See `testcases/README.md`.

## Tinker (no OpenAI key or fine-tuning)

Use Python 3.11+ in a separate environment: the training project's PyTorch 2.9.1
pin is older than the native chat renderer requires. For CPU-only orchestration:

```sh
python3.12 -m venv ~/.venvs/tinker
. ~/.venvs/tinker/bin/activate
python3 -m pip install 'torch==2.10.0+cpu' --index-url https://download.pytorch.org/whl/cpu
python3 -m pip install 'tinker==0.39.0' 'tml-renderers==0.4.1'
# Set TINKER_API_KEY securely in the environment; do not put it in a script/log.
export TINKER_MODEL='moonshotai/Kimi-K3.1-Pro:peft:262144'
MEMORY_BACKEND=local EXA=off python3 swarm.py --arm B --rounds 1 --llm tinker --gpu fake --no-push --out /tmp/tinker_smoke
```

`--model` overrides `TINKER_MODEL`; `OPENAI_MODEL` is not used in Tinker mode.
The [OpenAI-compatible endpoint](https://tinker-docs.thinkingmachines.ai/tinker/compatible-apis/openai/)
requires a `tinker://` sampler checkpoint. Instead, this adapter uses the
[SDK SamplingClient](https://tinker-docs.thinkingmachines.ai/tinker/api-reference/samplingclient/)
with `create_sampling_client(base_model=...)`. No training client, optimizer,
checkpoint creation, or checkpoint storage is needed. The `:peft:262144` suffix
is the catalog's extended-context model ID, not a user-trained checkpoint.

**Selection:** Kimi K3.1 Pro is the strongest coding-oriented chat choice based
on its [published model card](https://huggingface.co/moonshotai/Kimi-K3.1-Pro):
SWE Marathon 51.7 vs GLM-5.3 42.5 and DeepSeek-V4.1-Flash-1017 40.0. These are
vendor-reported, harness-dependent results, not a swarm-specific comparison.
For these small JSON edits we use its native `KimiK31Pro.low()` renderer,
temperature 0.3, and an 8192-token output ceiling (including reasoning), rather
than the max-effort setting used in those benchmarks. The native renderer
separates final content from reasoning and needs no HF credentials or remote
tokenizer code. Other models use the SDK tokenizer's HF chat template; models
without a usable chat template/tokenizer need their own native renderer.

The SDK does not request JSON mode. The adapter accepts the first JSON object
from final text (including Markdown fences), retries malformed JSON **once**
with the parse error appended to the original prompt, and fails if still
invalid. Proposal validation/edit repair remains the swarm's responsibility.
`llm_log.jsonl` retains the original prompt SHA, parsed response, latency, model
ID, and usage. `attempts` records final text, latency, token counts, and any parse
error per sample. Top-level usage sums both attempts, counting rendered input
tokens and all generated tokens, including reasoning. Replay still matches the
original prompt SHA and requires neither the SDK nor credentials.

### Available models

The authenticated `get_server_capabilities()` catalog on 2026-11-14 returned
the following IDs (each listed suffix denotes an additional ID):

| Base ID | Additional suffixes |
| --- | --- |
| `Qwen/Qwen3-8B` | — |
| `Qwen/Qwen3.5-35B-A3B-Base` | — |
| `Qwen/Qwen3.5-397B-A17B` | `:peft:262144` |
| `Qwen/Qwen3.5-4B` | `:peft:262144` |
| `Qwen/Qwen3.5-9B` | — |
| `Qwen/Qwen3.5-9B-Base` | — |
| `Qwen/Qwen3.6-35B-A3B` | `:peft:262144` |
| `Qwen/Qwen3.8-27B` | `:peft:262144` |
| `deepseek-ai/DeepSeek-V4.1-Flash-1017:peft:262144` | — |
| `deepseek-ai/DeepSeek-V4.1-Flash:peft:262144` | — |
| `moonshotai/Kimi-K2.6` | `:peft:131072` |
| `moonshotai/Kimi-K3.1-Pro:peft:262144` | — |
| `nvidia/NVIDIA-Nemotron-3-Super-120B-A12B-BF16` | `:peft:262144` |
| `nvidia/NVIDIA-Nemotron-3-Ultra-550B-A55B-BF16` | `:peft:262144` |
| `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` | `:peft:262144` |
| `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` | `:peft:262144` |
| `openai/gpt-oss-120b` | `:peft:131072` |
| `openai/gpt-oss-20b` | — |
| `thinkingmachines/Inkling` | `:peft:262144`, `:peft:262144:sampling-nvfp4` |
| `thinkingmachines/Inkling-2-Small` | `:peft:262144` |
| `thinkingmachines/Inkling-Small` | `:peft:262144`, `:peft:262144:sampling-nvfp4` |
| `zai-org/GLM-5.3-Flash:peft:262144` | — |
| `zai-org/GLM-5.3:peft:262144` | — |

Refresh the live catalog without creating a training session:

```sh
python3 - <<'PY'
import tinker
for model in tinker.RestClient().get_server_capabilities().result().supported_models:
    print(model.model_name)
PY
```

[Published Kimi K3.1 Pro prices](https://tinker-docs.thinkingmachines.ai/tinker/models/models_and_pricing/)
are $6/M input tokens ($1.20/M cached) and $25/M sampled tokens. A conservative
LLM-only ten-round estimate is `10 * (6 * input_tokens + 25 * output_tokens) / 1e6`
using a representative round's aggregate logged usage. This ignores cache
discounts and excludes Modal GPUs, Exa, and memory charges; extra scouts,
repairs, and larger later-round histories increase usage.
