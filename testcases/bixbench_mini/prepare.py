"""Download the 3 sampled BixBench capsules and build questions.json plus the hidden answer key.

Data comes from the public futurehouse/BixBench dataset on Hugging Face, pinned to one
dataset revision; every file is checked against its sha256 and cached in .cache/
(gitignored) so benchmark answers never get committed. evaluate.py runs this
automatically on first use.
"""

import hashlib
import io
import json
import shutil
import urllib.request
import zipfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
REVISION = "f8cc3bdcc6357c88b8c3648306522b9c422dc95a"
BASE = f"https://huggingface.co/datasets/futurehouse/BixBench/resolve/{REVISION}"
CAPSULES = {  # short_id -> (capsule uuid, data file)
    "bix-18": ("d59734d2-a3e0-462a-a5fd-c8ddc11392b8", "Swarm_1.csv"),
    "bix-19": ("8c64b1fa-fdcc-41e2-be8d-2f0c8d5faaa1", "NeuN_quantification.csv"),
    "bix-51": ("93f63fb8-b56c-4ad1-8d3b-d651e2107423", "data.xlsx"),
}
SHA256 = {
    "BixBench.jsonl": "0d1204dcdae7193a9132ced5a3502008f6b3b163debc1b65b2aa2d86cb132dc9",
    "CapsuleFolder-d59734d2-a3e0-462a-a5fd-c8ddc11392b8.zip": (
        "e4eaba8d25a8071d570c00edd33aab8b8353da1153f4ed27f45cac6048600afa"
    ),
    "CapsuleFolder-8c64b1fa-fdcc-41e2-be8d-2f0c8d5faaa1.zip": (
        "c2eeb8fcc08e8f51be5f14442a846b40fecc8b9ca41f014e55876678d6865018"
    ),
    "CapsuleFolder-93f63fb8-b56c-4ad1-8d3b-d651e2107423.zip": (
        "5ac4a82eb6aa71cfb8a283f6b6cd13da3419d9f14e9ce61db51d26a6ca98932a"
    ),
}


def verified(name, data):
    digest = hashlib.sha256(data).hexdigest()
    if digest != SHA256[name]:
        raise ValueError(f"{name}: sha256 {digest} does not match pinned {SHA256[name]}")
    return data


def fetch(name):
    cache = HERE / ".cache" / name
    if cache.exists() and hashlib.sha256(cache.read_bytes()).hexdigest() == SHA256[name]:
        return cache.read_bytes()
    with urllib.request.urlopen(f"{BASE}/{name}", timeout=60) as r:
        data = verified(name, r.read())
    cache.parent.mkdir(parents=True, exist_ok=True)
    cache.write_bytes(data)
    return data


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
            member = next(
                n
                for n in z.namelist()
                if n.startswith("CapsuleData-") and n.endswith("/" + filename)
            )
            with z.open(member) as src, open(HERE / "data" / filename, "wb") as dst:
                shutil.copyfileobj(src, dst)
    questions, key = {}, {}
    for line in fetch("BixBench.jsonl").decode().splitlines():
        r = json.loads(line)
        if r["short_id"] in CAPSULES:
            questions[r["question_id"]] = {
                "question": r["question"],
                "data": f"data/{CAPSULES[r['short_id']][1]}",
                "paper": r.get("paper"),
            }
            key[r["question_id"]] = parse_key(r)
    (HERE / "questions.json").write_text(json.dumps(questions, indent=1, ensure_ascii=False))
    (HERE / ".cache" / "answers.json").write_text(json.dumps(key, indent=1))
    print(f"prepared {len(questions)} questions")


if __name__ == "__main__":
    main()
