# Replaying Devin sessions in the Lab

`scripts/devin_to_recording.py` turns the event history of a Devin session, and of the child
sessions it started, into a `swarm-viewer/v1` recording. The Lab, `backend/replay.py` and
`scripts/build_pages.sh` read it like any `swarm.py` run. This is the replay path for the
Devin-worker experiments in `docs/roadmap.md`; it makes no model or provider calls.

## 1. Export the events

Session events are only reachable through Devin's own tools, so a Devin session does the export.
Paste the script below into the `scripted_tools` tool, with `ROOT` set to the session to export.
It walks `child_session_ids`, pages through `devin_session_events` and keeps only the fields the
converter reads, so emails, user IDs and rich content are dropped.

```python
import json, re

ROOT = "devin-..."
OUT = "/home/ubuntu/devin_export.json"
KEEP = {
    "message",
    "username",
    "command",
    "process_id",
    "exit_code",
    "output_trunc",
    "file_updates",
    "file_path",
    "lines_added",
    "lines_removed",
    "pr_data",
    "pull_number",
    "title",
    "html_url",
    "body",
    "check_run_data",
    "id",
    "name",
    "head_sha",
    "conclusion",
    "url",
    "branch",
    "timestamp",
}


def prune(v):
    if isinstance(v, dict):
        return {k: prune(x) for k, x in v.items() if k in KEEP}
    return [prune(x) for x in v] if isinstance(v, list) else v


def parse(text):
    out, dec = [], json.JSONDecoder()
    for block in text.split("\n--- event-")[1:]:
        i = block.find("\n  contents: ")
        contents = dec.raw_decode(block[i + 13 :])[0] if i >= 0 else {}
        out.append(
            {
                "event_id": "event-" + block.split(" ---", 1)[0],
                "type": re.search(r"\n  type: (\S+)", block).group(1),
                "created_at": contents.get("timestamp")
                or re.search(r"\n  created_at: (.+)", block).group(1).strip(),
                "contents": prune(contents),
            }
        )
    return out


def field(text, name):
    m = re.search(rf"\n  {name}: (.+)", text)
    return m.group(1).strip() if m else None


sessions, queue = [], [(ROOT, None)]
while queue:
    sid, parent = queue.pop(0)
    info = await tools.devin_session_interact(action="get", session_id=sid)
    block = re.search(r"child_session_ids.*?(?=\n  \w+:|\Z)", info, re.S)
    children = re.findall(r"[0-9a-f]{32}", block.group(0)) if block else []
    events, offset = [], 0
    while batch := parse(
        await tools.devin_session_events(
            action="details", session_id=sid, offset=offset, limit=50, max_content_length=4000
        )
    ):
        events += batch
        offset += len(batch)
    sid = "devin-" + sid.removeprefix("devin-")
    sessions.append(
        {
            "session_id": sid,
            "parent_session_id": parent,
            "title": field(info, "title"),
            "status": field(info, "status"),
            "created_at": field(info, "created_at"),
            "events": events,
        }
    )
    queue += [(c, sid) for c in children]
open(OUT, "w").write(
    json.dumps(
        {
            "schema": "devin-session-export/v1",
            "root_session_id": "devin-" + ROOT.removeprefix("devin-"),
            "sessions": sessions,
        }
    )
)
print(OUT, [(s["session_id"], len(s["events"])) for s in sessions])
```

Check the export before committing or publishing it: shell output and Devin's thoughts are kept
(first output line only, thoughts in full) and can contain paths or text that should stay private.

## 2. Convert

```bash
python scripts/devin_to_recording.py /home/ubuntu/devin_export.json --dest data/pages/viewer
```

The run ID is derived from the root session ID and every event ID from the session and event IDs,
so converting the same export twice gives byte-identical files.

## 3. View

Start the Lab with `LAB_RECORDINGS_DIRS=<dest> npm run dev`, or rebuild Pages with
`scripts/build_pages.sh` to publish recordings placed under `data/pages/viewer`.

## Mapping

| Devin event | `swarm-viewer/v1` event |
| --- | --- |
| first user message of the root session | `run.started`, `round.started`, `message.sent` (user to root) |
| later user message to the root session | `round.started` and `message.sent`; each request is one round |
| first message to a child session | `agent.assigned` and `message.sent` (parent to child) |
| `devin_message` | `message.sent` to the user, or to the parent for a child session |
| `devin_thoughts` | `diary.written` (kind `rationale`) |
| `shell_process_started` / `_completed` | `question.asked` (kind `command`) / `observation.received` with the exit code and first output line |
| `multi_edit_result`, `git_push` | `memory.written` (type `edit` or `commit`) |
| `pr_created` | `hypothesis.proposed` |
| `check_run_created` / `_completed` | `experiment.started` / `experiment.finished`; success is `keep`, skipped or neutral is `discard`, anything else is `crash` |
| `ack_pr_merged` | `verdict.issued` (verdict `merged`) |
| end of the export | `run.finished` |

Agents are the user (`world`), the root session (`conductor` when it has child sessions,
otherwise `worker`) and each child session (`worker`).
Other event types, including MCP tool calls, file reads and progress updates, are skipped.
Experiments have no metric value and the recording has no Boredom Meter regimes: a Devin session
has no task metric of its own. A Devin-worker run that is scored in the sandbox should log its
scores and regimes through the swarm ledger instead.
