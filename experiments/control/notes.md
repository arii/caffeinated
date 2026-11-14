# Control arm notes (program.md only)

Stopped early at 25 of 40 runs (budget cut by the user). There were no crashes, so no crash logs are included.
The branch is `autoresearch-nov14-control`, because `autoresearch/nov14-control` cannot be created while the `autoresearch` branch exists.

Kept changes, in order:
- TOTAL_BATCH_SIZE 2**19 -> 2**18: 0.995814 -> 0.986898. This gave twice as many steps, and was the biggest win.
- MATRIX_LR 0.04 -> 0.03 -> 0.025: 0.986775, then 0.986739. These gains are within noise.
- ASPECT_RATIO 64 -> 80 (dim 640): 0.983012
- short sliding window = context/4, down from /2: 0.978532 (best)

Things that hurt:
- depth 10 or depth 6
- warmdown 0.7 or 0.35
- batch 2**17
- softcap 30
- head_dim 64
- adam beta1 0.9
- final lr frac 0.1
- aspect 96

Warmup 0.03 was neutral to slightly helpful.

Runs 1-10 only: best was 50622de at 0.986775, with 2 kept.
