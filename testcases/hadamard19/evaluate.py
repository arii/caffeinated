"""Frozen scorer for the Hadamard order-19 task. Do not edit.

Same rules as EinsteinArena's hadamard-det-51 verifier, at a size small enough
to score in milliseconds: construct.py prints {"matrix": [[...19 x 19 of +/-1...]]},
the determinant is computed exactly with fraction-free Bareiss elimination, and
the score is log10|det|. Order 19 is 3 mod 4 like hadamard-det-51; its known
maximum is 2^18 * 3411968 (OEIS A003432), so the target is to match it, not beat it.
"""
import json, math, subprocess, sys, time
from pathlib import Path

HERE = Path(__file__).resolve().parent
N = 19
RECORD_DET = 2 ** 18 * 3411968  # known maximal determinant of order 19 (OEIS A003432)
TIMEOUT_S = 60


def bareiss_det(m):
    a = [row[:] for row in m]
    n, sign, prev = len(a), 1, 1
    for k in range(n - 1):
        if a[k][k] == 0:
            swap = next((i for i in range(k + 1, n) if a[i][k] != 0), None)
            if swap is None:
                return 0
            a[k], a[swap] = a[swap], a[k]
            sign = -sign
        for i in range(k + 1, n):
            for j in range(k + 1, n):
                a[i][j] = (a[i][j] * a[k][k] - a[i][k] * a[k][j]) // prev
        prev = a[k][k]
    return sign * a[-1][-1]


def validate(m):
    if not isinstance(m, list) or len(m) != N or any(not isinstance(r, list) or len(r) != N for r in m):
        raise ValueError(f"matrix must be {N}x{N}")
    if any(type(x) is not int or x not in (-1, 1) for r in m for x in r):
        raise ValueError("entries must be the integers 1 or -1")


def main():
    t0 = time.time()
    det = 0
    try:
        out = subprocess.run([sys.executable, "construct.py"], cwd=HERE, capture_output=True, text=True, timeout=TIMEOUT_S)
        matrix = json.loads(out.stdout)["matrix"]
        validate(matrix)
        det = abs(bareiss_det(matrix))
    except Exception as e:
        print(f"error: {type(e).__name__}: {e}", file=sys.stderr)
    score = math.log10(det) if det else 0.0
    record = math.log10(RECORD_DET)
    print(f"det: {det}")
    print(f"score: {score:.6f}")
    print(f"loss: {record - score:.6f}")
    print(f"record: {record:.6f}")
    print(f"beats_record: {str(det > RECORD_DET).lower()}")
    print(f"matches_record: {str(det == RECORD_DET).lower()}")
    print(f"seconds: {time.time() - t0:.1f}")


if __name__ == "__main__":
    main()
