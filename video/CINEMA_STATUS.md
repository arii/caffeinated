# Cinema Mode (`?cinema=1`) — work in progress

Branch: `devin/1794773716-cinema-mode`. Paused at the user's request before the full MP4 render finished.

## Done
- `src/engine/cinema.ts`: pure timeline model. Builds the beat plan from a real recording (needs a `BOREDOM_SNAP` followed by a `discovery.made`), compresses idle ticks into a 72 s cut, gives the phase/caption, boredom state, and the replicated-findings step chart. Covered by `tests/cinema.test.js`.
- `src/engine/cinemaView.ts`: Director overlay + camera. Eased orbit (hook/trap), focus on the snapping agent and the boredom-founded labs (snap), close-up then pull-back with golden point light and exposure bloom (breakthrough), proof card. In-world sprites (chat bubbles, per-agent meters) are hidden because they overlapped.
- `src/cinema.css`: hides every viewer panel/drawer; keeps only the canvas and the overlay.
- `src/main.ts`: `?cinema=1` switches on Director Mode (live loop); `?cinema=1&capture=1` exposes `window.__cinema.render(t)` for frame-exact capture. Normal mode is unchanged.
- `data/pages/cinema.json`: proof-card pilot results, taken from `experiments/confirmatory/RESULTS.md` (no significant boredom benefit; no invented stats).
- `video/scripts/cinema.mjs`: builds the Pages site, serves it, steps 60 fps frames through Playwright, pipes them to FFmpeg, and extracts the 5, 18, 32, 48, and 62 s stills.

Checks run: `npm run build` exit 0, `npm test` 164/164 pass, `npx tsc --noEmit` clean.

## Source run (Ig Nobel task)
`docs/recordings/f8fa53cc-6afd-5e98-9596-0c7b8711e718.json.gz` has 297 ticks. Thouless reaches B=0.73 at `BOREDOM_SNAP` (tick 151). Mason and Bagnold are assigned after the snap and run OpenAlex and dataset scouting. `items.shared` fires at ticks 197–198. Replicated discoveries happen at ticks 271, 275, and 279 (Mason's reward is 0.969), and the verdict at tick 297 is "Ig Nobel candidate".
Cinema seconds map to ticks like this: 0→69, 8→102, 21→148, 25→152, 36→217, 40→261, 50→279, 56→297, then the proof card runs until 72.

## To resume
```sh
source ~/.nvm/nvm.sh && (cd video && npm ci)
cd video && CHROME_PATH=$(which google-chrome) node scripts/cinema.mjs              # full MP4 + stills
cd video && CHROME_PATH=$(which google-chrome) node scripts/cinema.mjs --only-stills --stills 5,18,32,48,62   # quick look
```
Output goes to `artifacts/demo_cinema_v1.mp4` and `artifacts/demo_cinema_v1_XXs.png`. The SwiftShader render runs slowly, with a full 4320-frame cut expected to take tens of minutes.
Live preview: run `npm run dev:frontend`, then open `/?cinema=1&recording=f8fa53cc-6afd-5e98-9596-0c7b8711e718`.

## Open items
- Render the final MP4, then check it with `ffprobe` and `ls -lh`. It should be about 72 s at 1920×1080 with a nonzero bitrate.
- Review the stills again after the last CSS fixes. Those fixes made the telemetry and paper cards opaque, moved the "New best" burst up, and darkened the top gradient behind the brand.
- Breakthrough camera: the pull-back can still pass close to the central research table or other robots. Consider higher or farther poses.
- The storyboard asked for a 55–65 s highlight arc. The cut is currently 56 s of arc plus 16 s of proof card (`CINEMA_DURATION=72`).
- Optional: sound design, and a `demo_social_hook.mp4` flash-forward cut.
- Check the live `?cinema=1` view on a phone viewport. The layout targets 1920×1080.
