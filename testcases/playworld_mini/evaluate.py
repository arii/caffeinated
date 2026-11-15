"""Frozen scorer for the PlayWorld mini task. Do not edit.

Proxy for PlayWorld-style world-model evaluation: given 10 context frames and actions,
world_model.predict must roll out the next 20 frames from actions alone. The horizon
walks back over the context path and replays it, so scoring rewards spatial memory and
persistent object state (the lamp). Score = fraction of predicted frames that are exactly
right, over 200 held-out episodes.

Reference points (scored by this file's REFERENCE models, see _reference/):
  open baseline  = copy the last frame          (stands in for Matrix-Game 3.0)
  record to beat = map model, 8-frame memory    (stands in for closed Genie 3)
  full-memory map model scores ~0.72, so the record is beatable
"""
import importlib.util, re, sys, time
from pathlib import Path

HERE = Path(__file__).resolve().parent
sys.path.insert(0, str(HERE))
import env  # noqa: E402

EVAL_SEEDS = range(100_000, 100_200)
RECORD = 0.3598  # score of the 8-frame-memory reference model; recompute with _reference/playworld_reference.py


def load_model():
    src = (HERE / "world_model.py").read_text()
    if re.search(r"^\s*(import|from)\s+env\b|import_module\(|spec_from_file_location\(", src, re.M):
        raise RuntimeError("world_model.py must not use the hidden simulator")
    spec = importlib.util.spec_from_file_location("world_model", HERE / "world_model.py")
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def evaluate(predict):
    hits = total = 0
    for seed in EVAL_SEEDS:
        ep = env.episode(seed)
        try:
            pred = predict(ep["context_frames"], ep["context_actions"], ep["future_actions"])
        except Exception:
            pred = []
        for i, truth in enumerate(ep["future_frames"]):
            hits += i < len(pred) and pred[i] == truth
            total += 1
    return hits / total


def main():
    t0 = time.time()
    try:
        score = evaluate(load_model().predict)
    except Exception as e:
        print(f"error: {type(e).__name__}: {e}", file=sys.stderr)
        score = 0.0
    print(f"score: {score:.6f}")
    print(f"loss: {1 - score:.6f}")
    print(f"record: {RECORD:.6f}")
    print(f"beats_record: {str(score > RECORD).lower()}")
    print(f"seconds: {time.time() - t0:.1f}")


if __name__ == "__main__":
    main()
