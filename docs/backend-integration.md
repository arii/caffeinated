# Plugging research experiments into Lab Environment

The backend team owns experiment execution, Tinker calls, tools, scheduling, evaluation, and acceptance decisions. The lab is a read-only consumer of recorded research. It turns ordered events into replayable robot activity, idea captions, conversations, and evidence graphs.

The quickest integration is to point the lab at a swarm's live `swarm-viewer/v1` directory. No ZIP, restart, frontend change, or Tinker key is required. The replay UI polls live recordings; there is no experiment-upload endpoint or interactive LLM chat endpoint.

## 1. Publish a live directory (recommended)

Run the swarm in its own clone: it creates branches and worktrees. For example:

```sh
git clone /path/to/caffeinated /tmp/swarm-research
cd /tmp/swarm-research
python swarm.py --task hadamard19 --rounds 1 --llm fake --exa off --memory-backend local --no-push --out "$HOME/swarm-demo"
```

The CPU evaluator needs the image built with `docker build -t caffeinated-testcases:py311-v2 -f testcases/Dockerfile testcases`. Fake mode makes no model calls. Omit `--llm fake` and configure your provider for real research.

## 2. Connect the lab without a ZIP or restart

From the lab repository root:

```sh
LAB_RECORDINGS_DIRS="$HOME/swarm-demo/viewer" npm run dev
# Or start only the API:
LAB_RECORDINGS_DIRS="$HOME/swarm-demo/viewer" npm run dev:backend
```

Both commands inherit the environment; `LAB_PYTHON` can select another Python executable. On Unix separate multiple roots with `:` (the platform's `os.pathsep`). The real publisher layout is `<viewer-dest>/<run-id>/manifest.json`, not `<viewer-dest>/runs/<run-id>`. Both layouts work. You can also point at an out directory or a folder of outs: discovery descends at most five directory levels. Symlink descendants are not followed, run IDs must be alphanumeric/hyphen, and each run is capped at 50 MB.

The API rescans file metadata on every list/get, fingerprints relative paths, sizes and nanosecond mtimes, and reuses unchanged recordings. Partial NDJSON lines and malformed entity files are skipped with warnings; incomplete/invalid runs are omitted until readable. Source manifests with running/live status (or live=true) stay live, without a fabricated completed final frame. The browser refreshes the picker every four seconds, even while viewing finished recordings or an empty archive. Only a selected live recording reloads when changed, at the current tick.

ZIP imports still work exactly as before:

```sh
LAB_RECORDINGS_ZIP=/absolute/path/to/backend-export.zip npm run dev
```

ZIPs contain `runs/<id>/manifest.json`, `events.ndjson` and optional `entities/*.json`. The default sample ZIP remains enabled alongside directories. Directory runs win ID collisions (later configured directories win each other); if a directory run is invalid, a ZIP copy remains available. ZIPs are cached at startup, so replacing a ZIP still requires an API restart. Directory changes do not.

Inspect these endpoints during integration:

| Endpoint | What the frontend consumes |
| --- | --- |
| `GET /api/recordings` | Manifests with `id`, `title`, `totalTicks`, `tickDurationMs`, `contentVersion`, and normalized display identities |
| `GET /api/recordings/{id}?v={contentVersion}` | `{manifest, frames, events, entities}` |

Each frame is `{tick, snapshot}`. Snapshots follow `src/engine/contract.ts` and carry normalized agent state and evidence. Events retain the native fields and add `agentId` and a display `message`. `totalTicks` is the **last tick**, not the event count. The initial frame is tick `-1`; `lastSequence` is `tick + 1` thereafter. Playback duration currently defaults to 700 ms per tick before the user-selected pace multiplier.

The API supports gzip, ETag revalidation, and versioned bundle requests. It binds to loopback for development. Default `POST /api/runs` returns 409: the replay branch does not dispatch research.

## 3. Minimal source example

These values are illustrative contract data, not experimental findings. Replace them with actual producer records. Save the following three blocks as the manifest, NDJSON event file, and entity collections described below.

### manifest.json

```json
{
  "schema": "swarm-viewer/v1",
  "run_id": "b6d982f2-9404-4669-86ee-26d347736c21",
  "swarm": "autoresearch",
  "title": "Mixing speed and foam height",
  "status": "completed",
  "live": false,
  "arm": {"id": "B", "label": "boredom meter on", "boredom_enabled": true, "policy": "boredom_meter"},
  "metric": {"name": "loss", "unit": "", "direction": "minimize"},
  "time": {"ticks": 7, "rounds": 1, "ts_start": null, "ts_end": null},
  "agents": [
    {"agent_id": "agent-001", "native_id": "worker-1", "type": "worker", "family": "chem"}
  ],
  "provenance": {"llm": "your-configured-model", "gpu": "none", "exa": "off", "memory_backend": "your-backend", "swarm_commit": ""}
}
```

### events.ndjson

One complete JSON object per line; no enclosing array:

```ndjson
{"schema":"swarm-viewer/v1","run_id":"b6d982f2-9404-4669-86ee-26d347736c21","event_id":"event-0","tick":0,"round":1,"phase":"assign","ts":null,"type":"agent.assigned","agent_id":"agent-001","refs":{},"payload":{"role":"RUN_STUDY","scout":false}}
{"schema":"swarm-viewer/v1","run_id":"b6d982f2-9404-4669-86ee-26d347736c21","event_id":"event-1","tick":1,"round":1,"phase":"boredom","ts":null,"type":"boredom.measured","agent_id":"agent-001","refs":{},"payload":{"B":0.22,"regime":"EXPLOIT","shadow":false}}
{"schema":"swarm-viewer/v1","run_id":"b6d982f2-9404-4669-86ee-26d347736c21","event_id":"event-2","tick":2,"round":1,"phase":"propose","ts":null,"type":"hypothesis.proposed","agent_id":"agent-001","refs":{"hypothesis_id":"hypothesis:foam-1"},"payload":{"text":"Mixing speed changes foam height."}}
{"schema":"swarm-viewer/v1","run_id":"b6d982f2-9404-4669-86ee-26d347736c21","event_id":"event-3","tick":3,"round":1,"phase":"study","ts":null,"type":"experiment.started","agent_id":"agent-001","refs":{"experiment_id":"experiment:foam-1"},"payload":{"title":"Measure foam height at two mixing speeds"}}
{"schema":"swarm-viewer/v1","run_id":"b6d982f2-9404-4669-86ee-26d347736c21","event_id":"event-4","tick":4,"round":1,"phase":"study","ts":null,"type":"experiment.finished","agent_id":"agent-001","refs":{"experiment_id":"experiment:foam-1"},"payload":{"status":"replicated","effect_size":0.4,"p":0.01,"reward":0.6}}
{"schema":"swarm-viewer/v1","run_id":"b6d982f2-9404-4669-86ee-26d347736c21","event_id":"event-5","tick":5,"round":1,"phase":"diary","ts":null,"type":"diary.written","agent_id":"agent-001","refs":{"diary_id":"diary:foam-1"},"payload":{"excerpt":"Repeat with a different vessel before generalizing."}}
{"schema":"swarm-viewer/v1","run_id":"b6d982f2-9404-4669-86ee-26d347736c21","event_id":"event-6","tick":6,"round":1,"phase":"status","ts":null,"type":"run.finished","agent_id":null,"refs":{},"payload":{"status":"completed"}}
```

### Entity collections

This block groups two files for readability. Write each array to `entities/<key>.json`:

```json
{
  "experiments": [
    {"id":"experiment:foam-1","agent_id":"agent-001","kind":"study","description":"Measure foam height at two mixing speeds","hypothesis_id":"hypothesis:foam-1","source_ids":[]}
  ],
  "diary": [
    {"id":"diary:foam-1","agent_id":"agent-001","tick":5,"round":1,"text":"Repeat with a different vessel before generalizing."}
  ]
}
```

This produces C1, a “Mixing speed” lightbulb caption at tick 2, experiment activity at tick 3, one split-half-consistent finding at tick 4, and the research note at tick 5. At earlier ticks, later measurements and notes remain absent. Boredom appears only when the user interacts with C1.

## 4. Map backend events to the lab

| Producer event | Important payload/reference | Lab behavior |
| --- | --- | --- |
| `agent.assigned` | `role`, `scout` | Assignment activity at the notebook station |
| `question.asked` | `kind`, `text` | Research/lightbulb at Explorer; recall goes to Notebook |
| `hypothesis.proposed` | `text`, optional `refs.hypothesis_id` | Idea/lightbulb, short caption, conversation topic |
| `llm.called` | `refs.llm_call_id` → `llm_calls[].id`; entity `response.idea`/`why`/`rationale` | Logged proposal and rationale become available at this tick |
| `boredom.measured` | `B` on **0–1**, `regime`; set `agent_id` | Per-agent JSON and interaction-only spectrum; null actor means swarm state |
| `experiment.started` | `refs.experiment_id` | Bubble/experiment activity at Culture |
| `experiment.finished` | Same reference; `status`, `metric_value`, optional `effect_size`, `p`, `reward` | Evaluation activity, ledger row, named measurements |
| `verdict.issued` | Same reference; `accepted: true`, `why` | Confirms candidate best for autoresearch-style scalar objectives |
| `discovery.made` | `metric_value`, `title`, entity references | Timeline marker and confirmed-best update for autoresearch |
| `diary.written` / `memory.written` | `excerpt`, matching `diary_id` / `memory_id`; entity `text` | Source-backed conversation notes |
| `message.sent` / `items.shared` | `to_agent_id`, optional `text` | Conversation/sharing activity |
| `run.finished` | Manifest's terminal status must agree | Ends replay activity |

For an autoresearch-style scalar objective, supply a baseline experiment entity with `kind: "baseline"`. Its finished value becomes the reference. A candidate marked `keep` is provisional until its accepted verdict or confirmed discovery event; keep this distinction in the exporter.

Every `swarm.py --task` (including `ignobel`) exports `swarm: "autoresearch"` with metric `loss`, minimize. Effect size, p-value and reward are distinct fields. A new aggregate objective needs an explicit reducer rule in `backend/replay.py`; changing a metric label alone is insufficient. Scalar best comparisons already honor `minimize`/`maximize`.

## 5. Identity, clocks, and evidence

- Keep run IDs, agent IDs, entity IDs, and event IDs stable across re-exports. Event IDs deduplicate; distinct events must not share a tick. Use increasing integer ticks starting at 0. Live directories tolerate partial writes and become visible as soon as their manifest and event prefix can be folded.
- Every event's `run_id` must match its manifest. All references must join to the corresponding entity `id`. Preserve actor attribution so the correct robot receives an idea, measurement, or note.
- Set agent `family` to `bio`/`biology`, `chem`/`chemistry`, or `physics` (B/C/P also accepted). The viewer assigns B1/C1/P1 display aliases; original IDs remain unchanged. If family is missing, the current fallback is a display assignment. Agent types `baseline` and `world` remain data-only pseudo-agents.
- The frontend snapshot contract accepts native swarm arm IDs `A`, `B`, `C`, `D`, and Ig Nobel's `full`.
- Preserve real source timestamps where available and use null when missing. Ticks index replay knowledge; playback pace and robot movement are visual, not scientific simulation time.
- Record observations, hypotheses, and notes when they become available. Avoid resolving early UI state from later-mutated final entity fields. Unknown boredom stays null until measured; original per-agent B is normalized to 0–100 for display.
- `llm_calls` may contain the logged final response and concise rationale. Prompts are optional. Omit credentials and unlogged/private reasoning. The viewer never calls a model to fill gaps in recordings.
- Plot-path references alone do not display scientific images in the current UI. Scalar evidence graphs and effect-size/p-value/reward fields are supported; new scientific artifacts need a typed frontend adapter.

## 6. Validate before handoff

With the recording API pointed at your ZIP:

```sh
npm run test:backend
npm test
npm run build
```

`npm test` validates every frame returned by the currently running recording API against the frontend snapshot contract when that API is available. The backend suite also tests the included sample bundle; it is not a comprehensive schema validator for arbitrary producer data.

For a direct fold check from the repo root:

```python
from backend.replay import RecordingCatalog

catalog = RecordingCatalog('/absolute/path/to/backend-export.zip')
for manifest in catalog.list():
    recording = catalog.get(manifest['id'])
    assert recording['manifest']['live'] or recording['frames'][-1]['snapshot']['status'] in {'completed', 'stopped'}
    print(manifest['title'], len(recording['events']), manifest['totalTicks'])
```

In the browser, check Archive selection, a first proposal/lightbulb, an experiment/evaluation, a conversation with measured boredom, an earlier seek with those later details absent, and playback while moving the camera.

## Ownership and files

| Owner / component | Responsibility |
| --- | --- |
| Backend team | Run experiments and Tinker jobs, produce truthful ordered events/entities, define scientific metrics and acceptance |
| `backend/replay.py` | Normalize source records, compute time-indexed snapshots, map identities and activities |
| `backend/app.py` | Serve merged directory and ZIP recordings through read-only endpoints |
| `src/engine/replay.ts`, `replayMotion.ts` | Playback clock, seeking, illustrative paths |
| `src/variants/lab.ts` | Robot/world rendering; consumes state, never schedules experiments |
| `src/main.ts` | Archive selection, cameras, interactions, evidence presentation |

For the broader proposed producer model, see [swarm-viewer-api.md](swarm-viewer-api.md). It includes future `/api/v1` endpoints; this branch currently implements the two `/api/recordings` endpoints described above.
