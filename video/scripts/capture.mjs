import {spawn} from 'node:child_process';
import {mkdir, rename, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const captures = path.join(root, 'public', 'captures');
const serverUrl = new URL(
  process.env.LAB_URL ?? 'http://localhost:8931/caffeinated/'
);
const captureSeconds = Number(process.env.CAPTURE_SECONDS ?? 270);
const walkAtSeconds = Number(
  process.env.WALK_AT_SECONDS ?? Math.min(48, captureSeconds * 0.18)
);
const sceneSeconds = 38;
const width = 1920;
const height = 1080;
const ffmpeg = process.env.FFMPEG ?? '/usr/bin/ffmpeg';
const ffprobe = process.env.FFPROBE ?? '/usr/bin/ffprobe';
const chromePath = process.env.CHROME_PATH ?? '/home/ubuntu/.local/bin/google-chrome';

if (!Number.isFinite(captureSeconds) || captureSeconds < 45) {
  throw new Error('CAPTURE_SECONDS must be at least 45 for the real Lab sequence.');
}
if (!Number.isFinite(walkAtSeconds) || walkAtSeconds <= 0 || walkAtSeconds >= captureSeconds) {
  throw new Error('WALK_AT_SECONDS must fall inside the capture.');
}
if (!existsSync(ffmpeg) || !existsSync(ffprobe)) {
  throw new Error('ffmpeg and ffprobe must be available; expected /usr/bin/ffmpeg.');
}

await mkdir(captures, {recursive: true});

const catalogUrl = new URL('recordings/index.json', serverUrl);
const catalogResponse = await fetch(catalogUrl);
if (!catalogResponse.ok) {
  throw new Error(
    `Lab recording catalog unavailable (${catalogResponse.status}) at ${catalogUrl}`
  );
}
const catalog = await catalogResponse.json();
const recording = catalog.find(
  (item) =>
    item.sample === false &&
    String(item.title ?? '').includes('out-ignobel')
);
if (!recording) {
  throw new Error('The real out-ignobel recording was not found in the Lab catalog.');
}

const browser = await chromium.launch({
  headless: true,
  ...(existsSync(chromePath) ? {executablePath: chromePath} : {}),
  args: [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--enable-webgl',
    '--ignore-gpu-blocklist',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--enable-unsafe-swiftshader'
  ]
});
const context = await browser.newContext({
  viewport: {width, height},
  deviceScaleFactor: 1,
  recordVideo: {
    dir: captures,
    size: {width, height}
  }
});
const page = await context.newPage();
const startedAt = performance.now();
const elapsed = () => (performance.now() - startedAt) / 1000;
const events = {};
const errors = [];
page.on('pageerror', (error) => errors.push(error.message));

async function waitUntil(seconds) {
  const remaining = seconds - elapsed();
  if (remaining > 0) await page.waitForTimeout(remaining * 1000);
}

async function proximityVisible() {
  return page.locator('#proximity').evaluate((element) => !element.hidden);
}

async function walkUntilNearScientist() {
  const walk = async (key, milliseconds) => {
    await page.keyboard.down(key);
    await page.waitForTimeout(milliseconds);
    await page.keyboard.up(key);
    await page.waitForTimeout(180);
  };
  for (let index = 0; index < 12; index += 1) {
    await walk('KeyW', 520);
    if (await proximityVisible()) return true;
  }
  for (const [key, milliseconds] of [
    ['ArrowLeft', 600],
    ['KeyW', 1800],
    ['KeyA', 1100],
    ['KeyW', 1800],
    ['ArrowRight', 900],
    ['KeyW', 1800]
  ]) {
    await walk(key, milliseconds);
    if (await proximityVisible()) return true;
  }
  if (await proximityVisible()) return true;

  await page.locator('[data-drawer="team-drawer"]').click();
  const scientist = page.locator('#agent-list .agent-row:not([disabled])').nth(1);
  await scientist.waitFor({state: 'visible', timeout: 10_000});
  await scientist.click();
  await page.locator('#conversation[open]').waitFor({state: 'visible', timeout: 10_000});
  await page.locator('#close-conversation').click();
  await page.locator('#conversation[open]').waitFor({state: 'detached', timeout: 10_000});
  for (let index = 0; index < 12; index += 1) {
    await walk('KeyW', 520);
    if (await proximityVisible()) return true;
  }
  return proximityVisible();
}

async function scrubTo(tick) {
  await page.locator('#timeline').evaluate((element, value) => {
    const slider = element;
    slider.value = String(value);
    slider.dispatchEvent(new Event('input', {bubbles: true}));
  }, tick);
}

function probeDuration(file) {
  return new Promise((resolve, reject) => {
    const child = spawn(
      ffprobe,
      ['-v', 'error', '-show_entries', 'format=duration', '-of', 'json', file],
      {stdio: ['ignore', 'pipe', 'inherit']}
    );
    let output = '';
    child.stdout.setEncoding('utf8');
    child.stdout.on('data', (part) => {
      output += part;
    });
    child.on('error', reject);
    child.on('close', (code) => {
      if (code !== 0) {
        reject(new Error(`ffprobe exited with status ${code}`));
        return;
      }
      try {
        resolve(Number(JSON.parse(output).format.duration));
      } catch (error) {
        reject(error);
      }
    });
  });
}

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const child = spawn(ffmpeg, args, {stdio: 'inherit'});
    child.on('error', reject);
    child.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`ffmpeg exited with status ${code}`));
    });
  });
}

let rawPath;
try {
  const pageUrl = new URL(serverUrl);
  pageUrl.searchParams.set('recording', recording.id);
  await page.goto(pageUrl.toString(), {waitUntil: 'domcontentloaded'});
  await page.locator('#intro-start').waitFor({state: 'visible', timeout: 90_000});
  const title = await page.locator('#replay-title').innerText();
  if (!title.includes('out-ignobel')) {
    throw new Error(`Lab loaded the wrong recording: ${title}`);
  }
  events.recordingLoadedAt = elapsed();
  await page.locator('#intro-start').click();
  events.introDismissedAt = elapsed();
  await page.locator('#pace').selectOption('1');
  const initialTick = Number(await page.locator('#timeline').inputValue());
  events.playbackStartedAt = elapsed();
  await page.waitForFunction(
    (tick) => Number(document.querySelector('#timeline')?.value ?? 0) > tick,
    initialTick,
    {timeout: 15_000}
  );

  await waitUntil(walkAtSeconds);
  await page.locator('#play').click();
  events.pausedForWalkAt = elapsed();
  await page.locator('#camera-mode').click();
  events.walkStartedAt = elapsed();
  const foundScientist = await walkUntilNearScientist();
  if (!foundScientist) {
    throw new Error('The real Lab capture did not show a scientist proximity bubble.');
  }
  events.proximityShownAt = elapsed();
  await page.locator('#proximity [data-bubble-expand]').click();
  await page.locator('#proximity [data-bubble-more]').click();
  await page.locator('#conversation[open]').waitFor({state: 'visible', timeout: 10_000});
  events.cardOpenedAt = elapsed();
  await page.waitForTimeout(2500);
  await page.locator('#close-conversation').click();
  await page.locator('#conversation[open]').waitFor({state: 'detached', timeout: 10_000});
  events.cardClosedAt = elapsed();
  await page.locator('#play').click();
  events.playbackResumedAt = elapsed();
  await page.waitForTimeout(1500);

  const maxTick = Number(await page.locator('#timeline').getAttribute('max'));
  const snapTick = Math.min(477, maxTick);
  await waitUntil(captureSeconds * 0.72);
  await scrubTo(snapTick);
  events.boredomSnapScrubbedAt = elapsed();
  events.boredomSnapTick = snapTick;
  const runMeta = await page.locator('#run-meta').innerText();
  if (!/SNAP/i.test(runMeta)) {
    throw new Error(`Scrubbing to tick ${snapTick} did not show the real BOREDOM_SNAP state.`);
  }
  await waitUntil(captureSeconds * 0.84);
  await scrubTo(Math.floor(maxTick * 0.96));
  events.nearEndScrubbedAt = elapsed();
  events.nearEndTick = Math.floor(maxTick * 0.96);
  await waitUntil(captureSeconds);
  await page.waitForTimeout(500);

  const video = page.video();
  await context.close();
  rawPath = await video.path();
  const rawOutput = path.join(captures, 'lab-real.webm');
  if (path.resolve(rawPath) !== path.resolve(rawOutput)) {
    await rename(rawPath, rawOutput);
  }
  rawPath = rawOutput;
} catch (error) {
  await context.close().catch(() => {});
  await browser.close().catch(() => {});
  throw error;
}
await browser.close();

if (errors.length) {
  console.error(`Browser page errors: ${errors.join(' | ')}`);
}

const captureDurationSeconds = await probeDuration(rawPath);
const speedFactor = captureDurationSeconds / sceneSeconds;
const speedClip = path.join(captures, 'lab-speedup.mp4');
await runFfmpeg([
  '-y',
  '-i',
  rawPath,
  '-an',
  '-vf',
  `setpts=(PTS-STARTPTS)/${speedFactor.toFixed(10)}`,
  '-t',
  String(sceneSeconds),
  '-r',
  '30',
  '-vsync',
  'cfr',
  '-c:v',
  'libx264',
  '-preset',
  'fast',
  '-crf',
  '19',
  '-pix_fmt',
  'yuv420p',
  '-movflags',
  '+faststart',
  speedClip
]);

const sceneSecondsAt = (captureTime) => captureTime / speedFactor;
const captions = [
  {
    text: 'Each scientist proposes, runs and gates a real study',
    fromSeconds: sceneSecondsAt(events.playbackStartedAt + 7),
    toSeconds: sceneSecondsAt(events.playbackStartedAt + 29)
  },
  {
    text: "Walk up to a scientist to see what they're doing",
    fromSeconds: sceneSecondsAt(Math.max(events.walkStartedAt + 1, events.proximityShownAt - 8)),
    toSeconds: sceneSecondsAt(events.proximityShownAt + 14)
  },
  {
    text: 'Boredom rises → the swarm snaps to new directions',
    fromSeconds: sceneSecondsAt(events.boredomSnapScrubbedAt + 1),
    toSeconds: sceneSecondsAt(events.boredomSnapScrubbedAt + 20)
  }
];
const metadata = {
  recordingId: recording.id,
  recordingTitle: recording.title,
  sourceUrl: pageUrlForManifest(serverUrl, recording.id),
  rawCapture: 'public/captures/lab-real.webm',
  speedClip: 'public/captures/lab-speedup.mp4',
  captureDurationSeconds,
  sceneDurationSeconds: sceneSeconds,
  speedFactor,
  events,
  captions
};
await writeFile(
  path.join(captures, 'manifest.json'),
  `${JSON.stringify(metadata, null, 2)}\n`
);
console.log(
  `Captured ${captureDurationSeconds.toFixed(3)}s of the real Lab recording; ` +
    `ffmpeg setpts speed factor ${speedFactor.toFixed(6)}× → ${sceneSeconds}s.`
);
console.log(`Raw browser capture: ${rawPath}`);
console.log(`Speed-adjusted clip: ${speedClip}`);

function pageUrlForManifest(base, id) {
  const url = new URL(base);
  url.searchParams.set('recording', id);
  return url.toString();
}
