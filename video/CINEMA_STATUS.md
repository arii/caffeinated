# Cinema Mode (`?cinema=1`)

Branch: `devin/1794773716-cinema-mode`. Replay-first 64 s cut (user feedback: less text, replay almost end to end).

## Done
- `src/engine/cinema.ts`: pure timeline model. Builds the beat plan from a real recording (needs a `BOREDOM_SNAP` followed by a `discovery.made`), compresses idle ticks into a 64 s cut that replays the run from tick 0, gives the phase/caption, boredom state, and the replicated-findings step chart. Covered by `tests/cinema.test.js`.
- `src/engine/cinemaView.ts`: Director overlay + camera. Eased orbit (hook/trap), focus on the snapping agent and the boredom-founded labs (snap), close-up then pull-back with golden point light and exposure bloom (breakthrough), proof card. Captions flash for ~2.8 s (`CAPTION_SECONDS`) then fade, except the final title. In-world sprites (chat bubbles, per-agent meters) are hidden because they overlapped.
- `src/cinema.css`: hides every viewer panel/drawer; keeps only the canvas and the overlay.
- `src/main.ts`: `?cinema=1` switches on Director Mode (live loop); `?cinema=1&capture=1` exposes `window.__cinema.render(t)` for frame-exact capture. Normal mode is unchanged.
- `data/pages/cinema.json`: proof-card pilot results, taken from `experiments/confirmatory/RESULTS.md` (no significant boredom benefit; no invented stats).
- `video/scripts/cinema.mjs`: builds the Pages site, serves it, steps 60 fps frames through Playwright, pipes them to FFmpeg, and extracts the 5, 18, 32, 48, and 62 s stills.

Checks run: `npm run build` exit 0, `npm test` 164/164 pass, `npx tsc --noEmit` clean.

## Source run (Ig Nobel task)
`docs/recordings/f8fa53cc-6afd-5e98-9596-0c7b8711e718.json.gz` has 297 ticks. Thouless reaches B=0.73 at `BOREDOM_SNAP` (tick 151). Mason and Bagnold are assigned after the snap and run OpenAlex and dataset scouting. `items.shared` fires at ticks 197–198. Replicated discoveries happen at ticks 271, 275, and 279 (Mason's reward is 0.969), and the verdict at tick 297 is "Ig Nobel candidate".
Cinema seconds map to ticks like this: 0→0, 6→start of measured boredom, 19→snap−3, 23→snap+1, 32→end of scouting, 36→post-snap study, 46→best discovery (279), 52→verdict (297), then the proof card runs until 64. Phases: hook 0, trap 6, snap 20, breakthrough 36, proof 54.

## To resume
```sh
source ~/.nvm/nvm.sh && (cd video && npm ci)
cd video && CHROME_PATH=$(which google-chrome) node scripts/cinema.mjs              # full MP4 + stills
cd video && CHROME_PATH=$(which google-chrome) node scripts/cinema.mjs --only-stills --stills 5,18,32,48,62   # quick look
```
Output goes to `artifacts/demo_cinema_v1.mp4` and `artifacts/demo_cinema_v1_XXs.png`. The SwiftShader render runs slowly, with a full 4320-frame cut expected to take tens of minutes.
Live preview: run `npm run dev:frontend`, then open `/?cinema=1&recording=f8fa53cc-6afd-5e98-9596-0c7b8711e718`.

## Open items
- Optional: sound design, and a `demo_social_hook.mp4` flash-forward cut.
- Check the live `?cinema=1` view on a phone viewport. The layout targets 1920×1080.
- The SwiftShader render is slow (a full 3840-frame cut takes tens of minutes).
