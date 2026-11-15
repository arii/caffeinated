"""Reference for ignobel_mini: brute-force scan of the DISCOVERY half only.

Scores every non-trivial pair (up to 12 levels per categorical variable) on the
discovery rows, keeps pairs with discovery p < 1e-4, ranks them by
min(1, |rho|/0.2) * ignobel_likeness, and grades the top pick with the trusted
grader (which re-tests it on the hidden replication half). The resulting loss
is RECORD_LOSS in evaluate.py.
"""

import itertools
from pathlib import Path
import sys

TASK = Path(__file__).resolve().parents[1] / "ignobel_mini"
sys.path.insert(0, str(TASK))

import evaluate as E


def options(variables):
    for vid, variable in variables.items():
        if variable["kind"] == "numeric":
            yield vid, None
        else:
            for level in variable["levels"][:12]:
                yield vid, level


def main():
    codebook, judge = E.load_codebook(TASK), E.load_judge(TASK)
    best = None
    for name, dataset in codebook.items():
        discovery = E.read_rows(TASK / dataset["file"])
        for (x, xl), (y, yl) in itertools.combinations(list(options(dataset["variables"])), 2):
            claim = {"dataset": name, "x": x, "y": y, "direction": "positive"}
            if xl is not None:
                claim["x_level"] = xl
            if yl is not None:
                claim["y_level"] = yl
            sides, trivial = E.check_claim(claim, codebook)
            if trivial:
                continue
            _, rho, p, problem = E.association(discovery, claim, sides)
            if problem or p >= 1e-4:
                continue
            text = f"{E.side_text(*sides[0])} {E.side_text(*sides[1])}"
            value = min(1.0, abs(rho) / E.RHO_FULL) * E.likeness(text, judge)
            if best is None or value > best[0]:
                claim["direction"] = "positive" if rho > 0 else "negative"
                best = (value, claim)
    graded = E.score_claim(best[1], TASK, codebook, judge)
    print(best[1])
    print(graded["headline"])
    print(f"discovery value {best[0]:.4f}; replication rho {graded['rho_replication']:.4f} "
          f"p {graded['p_replication']:.2g}; loss {1 - graded['score']:.4f}")


if __name__ == "__main__":
    main()
