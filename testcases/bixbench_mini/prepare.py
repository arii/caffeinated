"""Download the 3 sampled BixBench capsules and build questions.json plus the hidden answer key.

Data comes from the public futurehouse/BixBench dataset on Hugging Face and is cached in
.cache/ (gitignored) so benchmark answers never get committed. evaluate.py runs this
automatically on first use.
"""
import io, json, shutil, urllib.request, zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
BASE = "https://huggingface.co/datasets/futurehouse/BixBench/resolve/main"
CAPSULES = {  # short_id -> (capsule uuid, data file)
    "bix-18": ("d59734d2-a3e0-462a-a5fd-c8ddc11392b8", "Swarm_1.csv"),
    "bix-19": ("8c64b1fa-fdcc-41e2-be8d-2f0c8d5faaa1", "NeuN_quantification.csv"),
    "bix-51": ("93f63fb8-b56c-4ad1-8d3b-d651e2107423", "data.xlsx"),
}


def fetch(name):
    cache = HERE / ".cache" / name
    if not cache.exists():
        cache.parent.mkdir(parents=True, exist_ok=True)
        with urllib.request.urlopen(f"{BASE}/{name}", timeout=60) as r:
            cache.write_bytes(r.read())
    return cache.read_bytes()


def parse_key(record):
    ideal = record["ideal"].strip()
    if record["eval_mode"] == "range_verifier":
        lo, hi = sorted(float(v) for v in ideal.strip("() ").split(","))
        return {"mode": "range", "lo": lo, "hi": hi}
    return {"mode": "exact", "value": float(ideal.split()[0])}


def main():
    (HERE / "data").mkdir(exist_ok=True)
    for uuid, filename in CAPSULES.values():
        with zipfile.ZipFile(io.BytesIO(fetch(f"CapsuleFolder-{uuid}.zip"))) as z:
            member = next(n for n in z.namelist() if n.startswith("CapsuleData-") and n.endswith("/" + filename))
            with z.open(member) as src, open(HERE / "data" / filename, "wb") as dst:
                shutil.copyfileobj(src, dst)
    questions, key = {}, {}
    for line in fetch("BixBench.jsonl").decode().splitlines():
        r = json.loads(line)
        if r["short_id"] in CAPSULES:
            questions[r["question_id"]] = {"question": r["question"], "data": f"data/{CAPSULES[r['short_id']][1]}", "paper": r.get("paper")}
            key[r["question_id"]] = parse_key(r)
    (HERE / "questions.json").write_text(json.dumps(questions, indent=1, ensure_ascii=False))
    (HERE / ".cache" / "answers.json").write_text(json.dumps(key, indent=1))
    print(f"prepared {len(questions)} questions")


if __name__ == "__main__":
    main()
