# Demo video spec (lead-authored; implement exactly)

Format: 1920x1080, 30 fps, ~120 s, Remotion 4 (stable), project in `video/` at repo root
(own package.json; do NOT add remotion deps to the root package.json). Output: `video/out/demo.mp4`
(H.264, < 50 MB). Do NOT commit the mp4 or raw captures; commit only the Remotion source plus a
`video/README.md` describing how to capture and render.

Visual style: reuse the Lab palette (dark slate #1b2a33 background, cream #e8d3ad accent,
font: whatever the Lab uses: check src/ CSS). Clean, large type, ≤ 12 words on screen at once.
No voiceover. Optional soft music: none (skip audio entirely).

Facts are fixed; do not change numbers or wording meaning. Pull authors/tools/event/boredom text
from `video/src/intro.json`, kept in sync with the repository's `data/pages/intro.json`.

## Scenes
1. 0–8 s · Hook. Keep the satirical headline visibly labeled as satire, then "The secret: making
   AI less boring." The truthful disclosure must remain visible with the headline.
2. 8–16 s · Hackathon. "SF AI Research Hack · Nov 14–15 · hosted by Iterate". Sub: "Built in
   one weekend: an artificial scientist swarm that notices when it is bored."
3. 16–26 s · Tools (one card each, staggered): "Thinking Machines Tinker — Kimi K3.1 Pro runs
   every researcher" · "Exa — searches prior work and public datasets" · "past.dev — shared
   memory across the swarm" · "Devin — built and tested the swarm, Lab and site".
4. 26–31 s · Authors from intro.json `authors.names`.
5. 31–44 s · Boredom inspiration. Line 1: "In psychology, boredom isn't laziness — it's the
   signal that a routine has stopped paying off." (Westgate & Wilson 2018; Eastwood et al. 2012).
   Line 2: "We turned it into a number that steers the swarm:" then formula
   "B = 0.45·(1 − novelty) + 0.45·stagnation + 0.10·overload". Line 3: "Deterministic from the
   ledger — any agent can recompute it."
6. 44–82 s · Live demo (screen capture of the Lab). Capture the real committed Ig Nobel recording
   from this repository's built `docs/` Pages site with `video/scripts/capture.mjs`; the script
   serves those docs locally by default. Do not use an external or synthetic recording. Capture a
   real-time Playwright session, including the satire/no-prize intro, the 1× replay, the
   orchestration swimlane, a real scientist proximity bubble, and the empty pre-committee
   podium/“How it's judged” sheet. Speed it up with ffmpeg to fit 38 s. Keep the large, legible
   corner badge at least 40 px: "{N}× speed · replay of a real run (Kimi + Exa + past.dev)", with
   N computed from capture duration divided by the 38-second Lab scene. Lower-third captions:
   "Each scientist proposes, runs and gates a real study" · "Boredom rises → the swarm snaps to
   new directions" · "Walk up to a scientist to see what they're doing".
7. 82–100 s · Held-out results (cards with full-contrast caveats at least 60% of the headline size):
   - "BixBench (7 held-out questions): baseline 1/7 → swarm best 6/7" caveat "one run; 95% CI
     0.49–0.97".
   - "Track 3 check — held-out accuracy, higher is better." State both orderings: "preregistered
     primary (stopped early): boredom swarm 0.26 · single agent 0.24 · without meter 0.11" and
     "complete set, picked after it finished: single agent 0.30 · without meter 0.09 · boredom
     swarm 0.06". Caveat: "3 runs each, not significant; complete-set order depends on a grader
     fix made after winners were known". Keep the earlier-grader values.
   - "Playworld proxy: loss 0.87 → 0.25 on 200 held-out episodes" caveat "synthetic proxy, not
     official PlayWorld".
8. 100–114 s · Ig Nobel. "21 registered, 13 run, 11 passed the preregistered gates, 10 also pass
   the |ρ| ≥ 0.1 floor added after the run." Explain that the ρ = 0.07 x/y coordinate study is
   the failure case and its critic rerun is a second confirmed row, not a separate test. Label the
   results as known relationships in public teaching datasets — not discoveries. Then four real
   gate-passing findings as cards:
   "Heavier mammals sleep less (msleep, ρ = −0.53)" · "Students with wider hands are taller
   (survey, ρ = 0.65)" · "Hotter ovens, steeper chocolate-cake break angle (cake, ρ = 0.36)" ·
   "Beer-loving countries also drink more wine (drinks, ρ = 0.72)". Then: "Mostly true — but
   not surprising. So we added an Ig Nobel committee score (laugh × think, two non-Kimi judges)."
   State clearly that no committee score has been run yet.
9. 114–120 s · Close. "Artificial Scientist Swarm" + "github.com/arii/caffeinated" +
   "Every number shown comes from committed real-run artifacts. The committee score has not been
   run yet."
