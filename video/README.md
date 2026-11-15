# Artificial Scientist Swarm demo video

This is a 120-second, silent Remotion 4 composition at 1920×1080 and 30 fps.
The text and numbers follow `/home/ubuntu/video-assets/VIDEO_SPEC.md`.

The project embeds the requested Lab intro data at `src/intro.json`, copied
from `/home/ubuntu/wt-lab39/data/pages/intro.json`. Event details, tool names,
author names, and the boredom formula/citations are read from that embedded
JSON at composition build time; scene copy remains bounded by the video spec.

## Capture and render

Use Node 24. The capture command visits the real static Lab at
`http://localhost:8932/caffeinated/`, selects the committed `out-ignobel`
recording from its real recording catalog, and records a 1920×1080 Chromium
session with Playwright. It does not synthesize or replace the Lab UI. Serve
the merged Pages site from `/home/ubuntu/wt-video/docs/` at the
`/caffeinated/` base path:

```sh
mkdir -p /home/ubuntu/pages-final-capture
ln -s /home/ubuntu/wt-video/docs /home/ubuntu/pages-final-capture/caffeinated
python3 -m http.server 8932 --directory /home/ubuntu/pages-final-capture
```

Install the isolated video dependencies once, then run the documented
one-command capture and one-command render:

```sh
npm ci
npm run capture
npm run render
```

`npm run capture` records for 270 real-time seconds at the Lab's 1× pace,
checks the human title, and holds the intro long enough to show the Satire
badge and no-prize disclaimer before opening its real-results section. Coach
marks are dismissed before playback. The tour includes the orchestration
swimlane, selects a scientist from the role strip and walks toward them until
the real proximity bubble appears, scrubs to the recorded `BOREDOM_SNAP`
moment, then opens the pre-committee podium and “How it's judged” sheet at the
run's end. It keeps the raw browser recording under `public/captures/` and
uses ffmpeg's `setpts` filter to fit the capture into the 38-second Lab scene.
The speed factor is computed as `ffprobe(capture duration) / 38`; the
persistent overlay uses that measured factor rather than a preset multiplier.
Set `LAB_URL` to use another local Pages server, `CHROME_PATH` to choose
another local Chrome binary, and `CAPTURE_SECONDS` only if a different real
capture duration is required.

`npm run render` creates `out/demo.mp4` as H.264 with no audio. `npm run stills`
extracts PNGs at the midpoint of each of the nine scenes into
`/home/ubuntu/video-assets/stills/`, plus real-browser stills of the intro,
swimlane, empty podium/judging sheet, and the provenance badge, pre-committee
note and role chips. The MP4, raw capture, speed-adjusted capture, evidence
screenshots and generated metadata are ignored by Git.
