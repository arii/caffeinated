# Plugging research experiments into Lab Environment

The backend team owns experiment execution, Tinker calls, tools, scheduling, evaluation, and acceptance decisions. The lab is a read-only consumer of recorded research. It turns ordered events into replayable robot activity, idea captions, conversations, and evidence graphs.

The quickest integration is to export a `swarm-viewer/v1` ZIP and point the lab at it. No frontend change or Tinker key is required. There is currently no experiment-upload endpoint, live event subscription in the replay UI, or interactive LLM chat endpoint.

## 1. Export the bundle

Use this layout inside the ZIP, without an extra enclosing directory:

```text
runs/<run-uuid>/manifest.json
runs/<run-uuid>/events.ndjson
runs/<run-uuid>/entities/experiments.json
runs/<run-uuid>/entities/diary.json
runs/<run-uuid>/entities/llm_calls.json       # optional
runs/<run-uuid>/entities/memory.json          # optional
runs/<run-uuid>/entities/sources.json         # optional
runs/<run-uuid>/entities/questions.json      # optional
runs/<run-uuid>/entities/observations.json   # optional
runs/<run-uuid>/entities/hypotheses.json     # optional
runs/<run-uuid>/entities/rewards.json        # optional
runs/<run-uuid>/entities/discoveries.json    # optional
```

A ZIP may contain multiple `runs/<uuid>/` directories. The loader discovers manifests; `runs/index.json` is not required. Collections are **JSON arrays**, with an `id` on each entity, not ID-to-object maps. Omit unused collections or provide `[]`. The current loader caps the archive's total expanded size at 50 MB. Use alphanumeric/hyphen run IDs, preferably UUIDs.

Source events, not final snapshots, are authoritative. Keyframes and timeline files may be retained in the export but are not consumed by this adapter. Do not copy later outcomes into earlier event payloads.

From an export directory containing `runs/`, package it with:

```sh
python3 -m zipfile -c ../backend-export.zip runs
```

## 2. Connect it without replacing the sample ZIP

From the repository root:

```sh
LAB_RECORDINGS_ZIP=/absolute/path/to/backend-export.zip npm run dev
```

Or, if the frontend already runs:

```sh
LAB_RECORDINGS_ZIP=/absolute/path/to/backend-export.zip npm run dev:backend
```

Open http://localhost:5175 and choose the run in **Archive**. Restart the recording API after publishing a new ZIP; bundles are cached in memory. Reload/refresh the archive list so the browser receives the new `contentVersion`. Publish the ZIP atomically rather than writing into a file being served.

Without `LAB_RECORDINGS_ZIP`, the lab uses `data/replays/swarm-viewer-sample-runs.zip`. A missing configured ZIP produces an empty archive list. A malformed bundle needs to be fixed at the exporter; it does not trigger a fake evaluator or a model call.

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
  "swarm": "ignobel",
  "title": "Mixing speed and foam height",
  "status": "completed",
  "live": false,
  "arm": {"id": "full", "label": "Full research policy", "boredom_enabled": true, "policy": "full"},
  "metric": {"name": "replicated_findings", "unit": "findings", "direction": "maximize"},
  "time": {"ticks": 7, "rounds": 1, "ts_start": null, "ts_end": null},
  "agents": [
    {"agent_id": "agent-001", "native_id": "agent-001", "type": "researcher", "family": "chem"}
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

This produces C1, a “Mixing speed” lightbulb caption at tick 2, experiment activity at tick 3, one replicated finding at tick 4, and the research note at tick 5. At earlier ticks, later measurements and notes remain absent. Boredom appears only when the user interacts with C1.

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

The current Ig Nobel special case is `swarm: "ignobel"` with metric `replicated_findings`: unique experiments finishing with status `replicated` increase the count. Effect size, p-value, reward, and replicated-findings count are distinct fields. A new aggregate objective needs an explicit reducer rule in `backend/replay.py`; changing a metric label alone is insufficient. Scalar best comparisons already honor `minimize`/`maximize`.

## 5. Identity, clocks, and evidence

- Keep run IDs, agent IDs, entity IDs, and event IDs stable across re-exports. Event IDs deduplicate; distinct events must not share a tick. Use increasing integer ticks starting at 0. This small replay adapter loads complete recordings; publishing partial live runs needs a separate live integration.
- Every event's `run_id` must match its manifest. All references must join to the corresponding entity `id`. Preserve actor attribution so the correct robot receives an idea, measurement, or note.
- Set agent `family` to `bio`/`biology`, `chem`/`chemistry`, or `physics` (B/C/P also accepted). The viewer assigns B1/C1/P1 display aliases; original IDs remain unchanged. If family is missing, the current fallback is a display assignment. Agent types `baseline` and `world` remain data-only pseudo-agents.
- The current frontend snapshot contract accepts arm IDs `A`, `B`, and `full`. Extend `src/engine/contract.ts` deliberately if producers need another arm ID.
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
    assert recording['frames'][-1]['snapshot']['status'] == 'completed'
    print(manifest['title'], len(recording['events']), manifest['totalTicks'])
```

In the browser, check Archive selection, a first proposal/lightbulb, an experiment/evaluation, a conversation with measured boredom, an earlier seek with those later details absent, and playback while moving the camera.

## Ownership and files

| Owner / component | Responsibility |
| --- | --- |
| Backend team | Run experiments and Tinker jobs, produce truthful ordered events/entities, define scientific metrics and acceptance |
| `backend/replay.py` | Normalize source records, compute time-indexed snapshots, map identities and activities |
| `backend/app.py` | Serve selected ZIP through read-only recording endpoints |
| `src/engine/replay.ts`, `replayMotion.ts` | Playback clock, seeking, illustrative paths |
| `src/variants/lab.ts` | Robot/world rendering; consumes state, never schedules experiments |
| `src/main.ts` | Archive selection, cameras, interactions, evidence presentation |

For the broader proposed producer model, see [swarm-viewer-api.md](swarm-viewer-api.md). It includes future `/api/v1` endpoints; this branch currently implements the two `/api/recordings` endpoints described above.
