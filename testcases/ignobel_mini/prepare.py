"""Download real FiveThirtyEight survey microdata and split each dataset in two.

Sources are pinned to one commit of https://github.com/fivethirtyeight/data
(CC BY 4.0). Every row goes to the public discovery half (data/<dataset>.csv,
mounted for candidates) or the hidden replication half
(.cache/replication/<dataset>.csv, read only by the trusted grader) by a fixed
hash of its row number. Columns get short ids (v01, v02, ...) described in
codebook.json, plus a compact codebook.txt for agent prompts. Free-text columns
and respondent ids are dropped. evaluate.py runs this automatically on first use.
"""

import csv
import hashlib
import io
import json
import re
import urllib.request
from pathlib import Path

HERE = Path(__file__).resolve().parent
COMMIT = "4c1ff5e3aef1816ae04af63218015066e186c147"
BASE = f"https://raw.githubusercontent.com/fivethirtyeight/data/{COMMIT}"
MAX_LEVELS = 25
DROP = re.compile(r"^(RespondentID|StartDate|EndDate|page_id|name|urlslug|FIRST APPEARANCE|EPISODE|TITLE)$")
DEMOGRAPHIC = re.compile(
    r"^(Gender|Age|Household Income|Education|Location \(Census Region\)|US Region|"
    r"What is your gender\?|How much total combined money.*|How would you describe where you live\?|"
    r"Which of the following best describes your current occupation\?|"
    r"Which of the following best describes your current relationship status\?)$"
)
DATASETS = {
    "flying_etiquette": {
        "title": "FiveThirtyEight flying etiquette survey (2014)",
        "files": ["flying-etiquette-survey/flying-etiquette.csv"],
    },
    "thanksgiving": {
        "title": "FiveThirtyEight Thanksgiving dinner survey (2015)",
        "files": ["thanksgiving-2015/thanksgiving-2015-poll-data.csv"],
    },
    "steak_risk": {
        "title": "FiveThirtyEight steak and risk-taking survey (2014)",
        "files": ["steak-survey/steak-risk-survey.csv"],
    },
    "sleeping_alone": {
        "title": "FiveThirtyEight couples sleeping in separate beds survey (2014)",
        "files": ["sleeping-alone-data/sleeping-alone-data.csv"],
    },
    "star_wars": {
        "title": "FiveThirtyEight Star Wars fan survey (2014)",
        "files": ["star-wars-survey/StarWars.csv"],
    },
    "earthquake": {
        "title": "FiveThirtyEight earthquake worry survey (2015)",
        "files": ["san-andreas/earthquake_data.csv"],
    },
    "comic_characters": {
        "title": "FiveThirtyEight Marvel and DC wikia comic characters (2014)",
        "files": ["comic-characters/marvel-wikia-data.csv", "comic-characters/dc-wikia-data.csv"],
        "rename": {"Year": "YEAR"},
        "source_column": "publisher wiki",
        "fill": {"GSM": "No sexual or gender minority listed"},
        "labels": {
            "ID": "Character identity status",
            "ALIGN": "Character alignment",
            "EYE": "Character eye colour",
            "HAIR": "Character hair colour",
            "SEX": "Character sex",
            "GSM": "Character sexual or gender minority status",
            "ALIVE": "Character alive or deceased",
            "APPEARANCES": "Number of comic book appearances",
            "YEAR": "Year of first appearance",
        },
    },
    "bob_ross": {
        "title": "FiveThirtyEight elements in Bob Ross paintings, The Joy of Painting (1983-1994)",
        "files": ["bob-ross/elements-by-episode.csv"],
        "label_prefix": "Painting features: ",
    },
}


def clean(text):
    text = re.sub(r"<br\s*/?>", " ", str(text))
    text = re.sub(r"[^\x20-\x7e]", "", text)
    return re.sub(r"\s+", " ", text).strip()


def fetch(path):
    cache = HERE / ".cache" / "raw" / path.replace("/", "__")
    if not cache.exists():
        cache.parent.mkdir(parents=True, exist_ok=True)
        with urllib.request.urlopen(f"{BASE}/{path}", timeout=60) as response:
            cache.write_bytes(response.read())
    raw = cache.read_bytes()
    try:
        return raw.decode("utf-8")
    except UnicodeDecodeError:
        return raw.decode("cp1252", errors="replace")


def read_table(path, spec):
    rows = list(csv.reader(io.StringIO(fetch(path))))
    header, rows = rows[0], rows[1:]
    sub = None
    if rows and "Response" in rows[0]:
        sub, rows = rows[0], rows[1:]
    columns, last = [], None
    for index, name in enumerate(header):
        name = clean(spec.get("rename", {}).get(name, name))
        unnamed = name.startswith("Unnamed") or not name
        if not unnamed:
            last = name
        option = clean(sub[index]) if sub else ""
        if option in ("Response", ""):
            option = ""
        label = spec.get("labels", {}).get(name, name)
        if unnamed:
            label = f"{last} - {option}" if option else last
        elif option:
            label = f"{name} - {option}"
        group = last if (sub and option) or unnamed else name
        if not sub and " - " in name and "select all that apply" in name.lower():
            group = name.split(" - ")[0]
        columns.append({"source": name, "label": spec.get("label_prefix", "") + label, "group": group})
    return columns, rows


def load(spec):
    tables = []
    for path in spec["files"]:
        columns, rows = read_table(path, spec)
        if "source_column" in spec:
            columns.append({"source": spec["source_column"], "label": "Publisher wiki", "group": "Publisher wiki"})
            publisher = "Marvel" if "marvel" in path else "DC"
            rows = [row + [publisher] for row in rows]
        tables.append((columns, rows))
    names = [c["source"] for c in tables[0][0]]
    merged = []
    for columns, rows in tables:
        if [c["source"] for c in columns] == names:
            merged.extend(rows)
            continue
        position = {c["source"]: i for i, c in enumerate(columns)}
        merged.extend([row[position[n]] if position.get(n) is not None and position[n] < len(row) else "" for n in names] for row in rows)
    return tables[0][0], merged


def build(name, spec):
    columns, rows = load(spec)
    keep, variables = [], {}
    groups = {}
    for index, column in enumerate(columns):
        if DROP.match(column["source"]):
            continue
        fill = spec.get("fill", {}).get(column["source"])
        values = [clean(row[index]) if index < len(row) else "" for row in rows]
        if fill:
            values = [v or fill for v in values]
        present = [v for v in values if v]
        if not present:
            continue
        numeric = all(re.fullmatch(r"-?\d+(\.\d+)?", v) for v in present)
        distinct = sorted(set(present))
        if not numeric and len(distinct) > MAX_LEVELS:
            continue
        if column["source"].endswith("Other (please specify)") and len(distinct) > 2:
            continue
        groups.setdefault(column["group"], []).append(len(keep))
        keep.append((index, column, values, numeric, distinct))
    table = []
    for position, (index, column, values, numeric, distinct) in enumerate(keep):
        vid = f"v{position + 1:02d}"
        members = groups[column["group"]]
        checkbox = len(members) > 1 or "select all that apply" in column["group"].lower()
        if checkbox and not numeric and len(distinct) == 1:
            if len(members) > 1:
                answered = [any(keep[m][2][r] for m in members) for r in range(len(rows))]
            else:
                neighbours = [keep[i][2] for i in (position - 1, position + 1) if 0 <= i < len(keep)]
                answered = [any(n[r] for n in neighbours) for r in range(len(rows))]
            values = [v or ("(not selected)" if answered[r] else "") for r, v in enumerate(values)]
            distinct = sorted(set(v for v in values if v))
        variables[vid] = {
            "label": column["label"],
            "group": column["group"],
            "kind": "numeric" if numeric else "categorical",
            "demographic": bool(DEMOGRAPHIC.match(column["source"])),
        }
        if not numeric:
            variables[vid]["levels"] = distinct
        table.append(values)
    discovery, replication = [], []
    for r in range(len(rows)):
        record = [table[c][r] for c in range(len(table))]
        if not any(record):
            continue
        bucket = int(hashlib.sha256(f"{name}:{r}".encode()).hexdigest(), 16) % 2
        (discovery if bucket == 0 else replication).append(record)
    header = list(variables)
    for path, part in ((HERE / "data" / f"{name}.csv", discovery), (HERE / ".cache" / "replication" / f"{name}.csv", replication)):
        path.parent.mkdir(parents=True, exist_ok=True)
        with path.open("w", newline="", encoding="utf-8") as stream:
            writer = csv.writer(stream)
            writer.writerow(header)
            writer.writerows(part)
    return {
        "title": spec["title"],
        "source": [f"{BASE}/{p}" for p in spec["files"]],
        "license": "CC BY 4.0",
        "file": f"data/{name}.csv",
        "n_discovery": len(discovery),
        "variables": variables,
    }


def codebook_text(codebook):
    lines = [
        "Codebook: real FiveThirtyEight survey data (CC BY 4.0). Each dataset's discovery half is data/<dataset>.csv;",
        "header = variable ids. Blank cell = missing. [D] = demographic, g= shared question group.",
    ]
    for name, dataset in codebook.items():
        lines.append(f"\n## {name}: {dataset['title']} ({dataset['n_discovery']} discovery rows)")
        for vid, var in dataset["variables"].items():
            levels = "numeric" if var["kind"] == "numeric" else " | ".join(var["levels"])
            if len(levels) > 160:
                levels = levels[:157] + "..."
            flag = " [D]" if var["demographic"] else ""
            group = f" g={var['group'][:40]}" if var["group"] != var["label"] and not var["label"].startswith("Painting") else ""
            lines.append(f"{vid}{flag}: {var['label'][:150]}{group} :: {levels}")
    return "\n".join(lines) + "\n"


def main():
    codebook = {name: build(name, spec) for name, spec in DATASETS.items()}
    (HERE / "codebook.json").write_text(json.dumps(codebook, indent=1) + "\n", encoding="utf-8")
    (HERE / "codebook.txt").write_text(codebook_text(codebook), encoding="utf-8")
    print(f"prepared {len(codebook)} datasets, {sum(len(d['variables']) for d in codebook.values())} variables")


if __name__ == "__main__":
    main()
