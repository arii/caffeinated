# Lab Environment: replay and backend handoff

The Lab viewer consumes research recordings. Experiment execution and model submission belong to the research backend, not the replay clock. The chosen lab, timeline, cameras, and archived agent interactions consume recorded state and do not select or execute future research objectives.

For exact integration steps and producer payloads, see [Backend integration](backend-integration.md).

## Source and reference

- Default archive `data/replays/ignobel-real-runs.zip`, schema `swarm-viewer/v1`. Pages merges these recordings with the older `out-ignobel` recording through `scripts/export_pages.py`.
- Canonical proposal: [swarm-viewer-api.md](swarm-viewer-api.md), obtained from the team’s `agent/devin/swarm-viewer-api` branch. The ZIP itself contains no Markdown file.
- Timeline interaction reference: [History in 3D](https://github.com/mashathepotato/history-in-3D), especially `src/engine/timeline.js` and `ui.js`.

The earlier removal of sample problems is superseded by their explicit use as temporary replay inputs. They are not live experiment choices. The source ZIP stays immutable in the repository so a clean checkout can reproduce the same playback.

## Playback data flow

```text
swarm-viewer/v1 ZIP
  manifest + ordered events + entities
          ↓
backend/replay.py — pure event-prefix fold
          ↓
GET /api/recordings → available manifests
GET /api/recordings/{id} → frames + events + original entities
          ↓
frontend timeline — playhead, pace, play/pause, seeking
          ↓
selected snapshot → room, NPC activity, evidence, archived conversation
```

These endpoints bridge the proposed data model to the existing lab snapshot boundary. They are not an implementation of every proposed `/api/v1` endpoint. Future producers can supply the same manifest/event/entity format, or an adapter can consume the proposed endpoints without changing room or timeline semantics.

## Time and knowledge

A native event’s integer tick is the source clock. Render time interpolates cosmetic movement, and playback pace changes only how fast the browser traverses ticks. Pausing freezes replay poses while allowing first-person camera movement.

A snapshot at tick T includes only events through T. Source timestamps are preserved where present; missing timestamps, seeds, boredom, and source commits are not invented. Agent identities are stable and independent of avatar appearance. Baseline and World are pseudo-agents in the data and are not rendered as human researchers.

The supplied keyframe zero contains later-run state. The adapter therefore reconstructs every frame from the event prefix instead of loading those keyframes. Native final entity records remain available for audit, but the visual state and interaction text use time-gated event data. Candidate results do not become the confirmed swarm best before acceptance. Metric direction remains domain-specific; the Ig Nobel split-half-consistent-findings metric counts confirmed studies rather than treating a p-value or effect size as that aggregate.

## Interaction and cameras

The default replay camera is elevated inside the laboratory. Playback shows recorded agent activity through lightbulbs, bubbles, and evaluation symbols. Pause permits first-person exploration. Interacting with a researcher opens a speech popup above that character with source-based conversation topics and that agent’s recorded boredom; no global boredom widget is displayed.

Conversation is an archival inspection, not a new model response or a continuation of the experiment. Only logged proposals, rationale, observations, results, and notes are used. The replay does not attempt to generate or expose unlogged reasoning.

Movement between stations is illustrative and deterministic under seeking. Camera position and avatar animation never change scientific data. The central table is a visual team display, not a biological solver.

## Scope and provenance

The default service rejects live run creation. Playback and interaction require no API key and make no paid calls. The existing execution code remains in source for later integration but is not connected to the replay UI.

All archive provenance is supplied provenance, not independently rerun validation. The default ZIP contains real research recordings; the older fake Ig Nobel sample is not the default. A recording's manifest and events determine its model and source provenance. Graphs in the viewer are derived from recorded measurements, not invented plot artifacts.

Future Ig Nobel objectives should supply their own manifests, metric units/direction, identities, events, scientific artifacts, and provenance. The backend team can change experiment content while keeping replay controls and world interactions stable.

## Verification

Backend checks exercise archive folds, absence of later results at earlier ticks, recorded per-agent boredom, critic acceptance, maximize metrics, source-sample labels, cache behavior, and rejection of execution. Frontend checks cover time lookup and advance, backward seeking, snapshot compatibility, navigable stations, and unchanged character poses at the same paused tick. Browser verification checks the timeline, archive selection, pace, indoor/first-person views, evidence, and character interaction.

## Character display identity

NPCs have neutral B/C/P number labels, corresponding to Bio, Chem, and Physics. The normalized manifest retains `agent_id`, `native_id`, and `original_display_name` for source joins, and supplies `display_name`, `family`, and `familySource` for presentation. Existing recordings have no explicit family, so their groups are deterministic display assignments. Future producer-supplied families take precedence. UI excerpts replace personal-name mentions with aliases; original JSON stays intact. Pseudo-agents remain Reference/Environment records and are not rendered as people.

## Lab-view camera and idea captions

Lab-view movement adapts `history-in-3D/src/engine/controls.js`: drag applies in-place yaw/pitch offsets, WASD detaches into smooth free movement, and Q/E changes height. Movement is scaled and bounded to the lab interior. The camera remains independent of replay time; walking mode retains its existing first-person controls. Lightbulbs carry two-word labels extracted from the agent’s already-recorded idea or question. No model call or future knowledge is used to create these captions.
