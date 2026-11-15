# ignobel/data

Input files for the simulated research community. There are two kinds: the private datasets
that agents study during a run, and the winner/control pairs that `validate.py` uses to check
the judging committee after a run.

## Agent datasets

Each agent in `agents.yaml` can own one private CSV. The agent never reads the file directly.
Study code calls `instrument(name, where=None, offset=0, limit=None)` from `lab_runtime.py`, which
maps the instrument name to one column, returns that column's values as floats, and spends one
unit of the agent's `budget_per_round` per call. Values that don't parse as numbers are skipped.
The sandbox only sees a copy of the owning agent's file.

| file | agent | field | rows | columns | instruments (name -> column) |
|---|---|---|---|---|---|
| `quill_coffee.csv` | quill | behavioral economics | 80 | `hour, cups, task_minutes, mood, weekday` | `cups_per_hour` -> `cups`, `task_minutes` -> `task_minutes`, `mood_rating` -> `mood` |
| `oyelaran_birds.csv` | oyelaran | acoustic ecology | 80 | `site, decibels, song_count, traffic, hour` | `noise_level` -> `decibels`, `song_rate` -> `song_count`, `traffic_count` -> `traffic` |
| `ikeda_toast.csv` | ikeda | food physics | 80 | `toast_id, drop_height_cm, butter_side_down, rotation, crumb_density` | `drop_outcome` -> `butter_side_down`, `crumb_density` -> `crumb_density`, `rotation_angle` -> `rotation` |

`volkov` (statistics) has `dataset: null`. It has no instruments and contributes methods only.

Columns that aren't mapped to an instrument (for example `hour`, `weekday`, `site`,
`drop_height_cm`) can still be used to filter rows through `where`, e.g.
`instrument("song_rate", where={"site": "A"})`.

### Adding an agent dataset

1. Put a CSV with a header row in this folder. Keep instrument columns numeric.
2. In `agents.yaml`, set the agent's `dataset: data/<file>.csv` and list each instrument as
   `{name, column, description}`. `column` must match the header exactly.
3. Run `MOCK=1 pytest -q` from `ignobel/` to check nothing else broke.

## Committee validation pairs

`validate.py` scores each real Ig Nobel winner against a matched control (same year and field)
and reports how often the committee ranks the winner higher, bucketed by year
(`<=2018`, `2019-2025`, `2026`).

| file | columns | joined on |
|---|---|---|
| `winners.csv` | `id, year, title, abstract` | `id` |
| `controls.csv` | `winner_id, year, title, abstract` | `winner_id` -> `winners.id` |

Both files currently hold **placeholder rows** (abstracts start with "Example placeholder").
Replace them with real abstracts before trusting `validate.py` numbers. A control row whose
`winner_id` has no match in `winners.csv` is skipped.

## seed_cache/

Real Exa search results are cached here by `search.py` and committed, so every arm and seed starts
from the same libraries. Mock mode never writes to this folder.
