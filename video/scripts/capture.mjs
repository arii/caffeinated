import {spawn} from 'node:child_process';
import {mkdir, rename, writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {chromium} from 'playwright';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const captures = path.join(root, 'public', 'captures');
const serverUrl = new URL(
  process.env.LAB_URL ?? 'http://localhost:8932/caffeinated/'
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
  return proximityVisible();
}

async function scrubTo(tick) {
  await page.locator('#timeline').evaluate((element, value) => {
    const slider = element;
    slider.value = String(value);
    slider.dispatchEvent(new Event('input', {bubbles: true}));
  }, tick);
}

async function assertCoachHidden(target, phase) {
  const hidden = await target.locator('#coach-mark').evaluate((element) => element.hidden);
  if (!hidden) {
    throw new Error(`The coach mark is covering content ${phase}.`);
  }
}

async function startWithoutCoach(target) {
  await target.evaluate(() => localStorage.setItem('lab.coach.dismissed', '1'));
  await target.locator('#intro-start').click();
  await target.waitForFunction(
    () => document.querySelector('#intro')?.hidden === true
  );
  await assertCoachHidden(target, 'after the intro');
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
let recordingTitle = '';
try {
  const pageUrl = new URL(serverUrl);
  pageUrl.searchParams.set('recording', recording.id);
  await page.goto(pageUrl.toString(), {waitUntil: 'domcontentloaded'});
  await page.locator('#intro-start').waitFor({state: 'visible', timeout: 90_000});
  const title = await page.locator('#replay-title').innerText();
  if (!/ig nobel prize hunt/i.test(title) || /out-ignobel/i.test(title)) {
    throw new Error(`Lab loaded the wrong recording: ${title}`);
  }
  recordingTitle = title.replace(/\s+/g, ' ').trim();
  const introText = await page.locator('#intro').innerText();
  if (!introText.includes('Satire') || !introText.includes('No prize has been awarded')) {
    throw new Error(`The Lab intro is missing its satire or no-prize disclosure: ${introText}`);
  }
  events.recordingLoadedAt = elapsed();
  events.recordingTitle = recordingTitle;
  await page.waitForTimeout(10_000);
  await page.screenshot({
    path: path.join(captures, 'lab-intro-satire.png')
  });
  events.introScreenshotAt = elapsed();
  await page.locator('#intro-results-link').click();
  await page.locator('#intro-real-results[open]').waitFor({state: 'visible'});
  const introResultsText = (await page.locator('#intro-real-results').innerText())
    .replace(/\s+/g, ' ')
    .trim();
  if (!introResultsText.includes('No prizes awarded yet')) {
    throw new Error(`The intro results omit the pre-committee no-prize state: ${introResultsText}`);
  }
  events.introResultsText = introResultsText;
  events.introResultsOpenedAt = elapsed();
  await page.waitForTimeout(4_000);
  await startWithoutCoach(page);
  events.introDismissedAt = elapsed();
  await page.locator('#pace').selectOption('1');
  const initialTick = Number(await page.locator('#timeline').inputValue());
  events.playbackStartedAt = elapsed();
  await page.waitForFunction(
    (tick) => Number(document.querySelector('#timeline')?.value ?? 0) > tick,
    initialTick,
    {timeout: 15_000}
  );
  await assertCoachHidden(page, 'during replay');

  await waitUntil(walkAtSeconds);
  await page.locator('#play').click();
  events.pausedForWalkAt = elapsed();
  await scrubTo(100);
  await page.waitForFunction(
    () =>
      Array.from(document.querySelectorAll('#status-strip .status-role'))
        .map((element) => element.textContent ?? '')
        .some((label) => label.includes('Critic')),
    {timeout: 10_000}
  );
  const statusTiles = page.locator('#status-strip .status-tile[data-agent]');
  const statusTileTexts = await statusTiles.allInnerTexts();
  const scientistIndex = statusTileTexts.findIndex(
    (text) => /Lab/i.test(text) && !/(Conductor|Critic)/i.test(text)
  );
  if (scientistIndex < 0) {
    throw new Error(`No scientist role tile was available: ${statusTileTexts.join(' · ')}`);
  }
  events.scientistTile = statusTileTexts[scientistIndex].replace(/\s+/g, ' ').trim();
  await statusTiles.nth(scientistIndex).click();
  await page.locator('#camera-mode').click();
  events.walkStartedAt = elapsed();
  const foundScientist = await walkUntilNearScientist();
  if (!foundScientist) {
    throw new Error('The real Lab capture did not show a scientist proximity bubble.');
  }
  events.proximityShownAt = elapsed();
  const cameraMode = await page.locator('#camera-mode').innerText();
  if (!cameraMode.includes('Lab view')) {
    throw new Error(`Scientist framing left walking mode: ${cameraMode}`);
  }
  const proximityText = (await page.locator('#proximity').innerText()).replace(/\s+/g, ' ').trim();
  if (/(Program Office|Conductor)/i.test(proximityText)) {
    throw new Error(`The proximity bubble targeted the conductor, not a scientist: ${proximityText}`);
  }
  events.proximityText = proximityText;

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
  await page.locator('[data-drawer="orchestration-drawer"]').click();
  const swimlane = page.locator('#orchestration-content .orchestration-svg');
  await swimlane.waitFor({state: 'visible', timeout: 10_000});
  const swimlaneCount = await swimlane.locator('.orch-lane').count();
  if (!swimlaneCount) {
    throw new Error('The Lab orchestration swimlane contained no lanes.');
  }
  events.swimlaneShownAt = elapsed();
  events.swimlaneLaneCount = swimlaneCount;
  await page.screenshot({
    path: path.join(captures, 'lab-swimlane.png')
  });
  await page.waitForTimeout(9_000);
  await page.locator('#orchestration-drawer [data-close-drawer]').click();
  await assertCoachHidden(page, 'after closing the swimlane');
  await waitUntil(captureSeconds * 0.84);
  await scrubTo(Math.floor(maxTick * 0.96));
  events.nearEndScrubbedAt = elapsed();
  events.nearEndTick = Math.floor(maxTick * 0.96);
  await scrubTo(maxTick);
  const resultsDialog = page.locator('#results-dialog');
  await resultsDialog.waitFor({state: 'visible', timeout: 10_000});
  const resultsContent = page.locator('#results-content');
  const noPrizeLine = await resultsContent.locator('.podium-empty').innerText();
  if (!noPrizeLine.includes('No prizes awarded yet')) {
    throw new Error(`The final podium state is not the pre-committee empty state: ${noPrizeLine}`);
  }
  const judgingDetails = resultsContent.locator('.judging-details');
  const judgingTitle = await judgingDetails.locator('summary').innerText();
  if (judgingTitle !== "How it's judged") {
    throw new Error(`Unexpected judging sheet title: ${judgingTitle}`);
  }
  await judgingDetails.locator('summary').click();
  await page.waitForFunction(
    () => document.querySelector('#results-content .judging-details')?.open === true
  );
  const judgingStepCount = await judgingDetails.locator('li').count();
  if (!judgingStepCount) {
    throw new Error('The judging sheet contains no explanation steps.');
  }
  await resultsDialog.evaluate((element) => {
    element.scrollTop = 0;
  });
  events.podiumShownAt = elapsed();
  events.podiumNoPrizeLine = noPrizeLine;
  events.judgingStepCount = judgingStepCount;
  await assertCoachHidden(page, 'over the final podium');
  await page.screenshot({
    path: path.join(captures, 'lab-podium-empty.png')
  });
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

  const evidenceContext = await browser.newContext({
    viewport: {width, height},
    deviceScaleFactor: 1
  });
  try {
    const evidencePage = await evidenceContext.newPage();
    const evidenceUrl = new URL(serverUrl);
    evidenceUrl.searchParams.set('recording', recording.id);
    await evidencePage.goto(evidenceUrl.toString(), {waitUntil: 'domcontentloaded'});
    await evidencePage.locator('#intro-start').waitFor({state: 'visible', timeout: 90_000});
    const evidenceTitle = await evidencePage.locator('#replay-title').innerText();
    if (!/ig nobel prize hunt/i.test(evidenceTitle) || /out-ignobel/i.test(evidenceTitle)) {
      throw new Error(`The evidence Lab title is not human-readable: ${evidenceTitle}`);
    }
    await startWithoutCoach(evidencePage);
    const evidenceInitialTick = Number(await evidencePage.locator('#timeline').inputValue());
    await evidencePage.waitForFunction(
      (tick) => Number(document.querySelector('#timeline')?.value ?? 0) > tick,
      evidenceInitialTick,
      {timeout: 15_000}
    );
    await evidencePage.locator('#play').click();
    await evidencePage.locator('#timeline').evaluate((element) => {
      const slider = element;
      slider.value = '100';
      slider.dispatchEvent(new Event('input', {bubbles: true}));
    });
    await evidencePage.waitForFunction(
      () =>
        Array.from(document.querySelectorAll('#status-strip .status-role'))
          .map((element) => element.textContent ?? '')
          .some((label) => label.includes('Critic')),
      undefined,
      {timeout: 15_000}
    );
    const uiEvidence = await evidencePage.evaluate(() => ({
      provenance:
        document.querySelector('#provenance-badge')?.textContent?.trim() ?? '',
      title: document.querySelector('#replay-title')?.textContent?.trim() ?? '',
      runMeta: document.querySelector('#run-meta')?.textContent?.trim() ?? '',
      roleChips: Array.from(
        document.querySelectorAll('#status-strip .status-role')
      ).map((element) => element.textContent?.trim() ?? ''),
      scientistTiles: Array.from(
        document.querySelectorAll('#status-strip .status-tile-name')
      ).map((element) => element.textContent?.trim() ?? '')
    }));
    if (!uiEvidence.provenance.startsWith('Stopped real run (13/15 rounds)')) {
      throw new Error(`Unexpected Lab provenance badge: ${uiEvidence.provenance}`);
    }
    if (!/ig nobel prize hunt/i.test(uiEvidence.title) || /out-ignobel/i.test(uiEvidence.title)) {
      throw new Error(`Unexpected human Lab title: ${uiEvidence.title}`);
    }
    if (
      !uiEvidence.runMeta.includes('Pre-committee run:') ||
      uiEvidence.runMeta.includes('committee-scored in-run')
    ) {
      throw new Error(`Unexpected Lab run note: ${uiEvidence.runMeta}`);
    }
    if (
      !uiEvidence.roleChips.some((label) => label.includes('Conductor')) ||
      !uiEvidence.roleChips.some((label) => label.includes('Critic')) ||
      uiEvidence.scientistTiles.some((name) => name === 'Program Office')
    ) {
      throw new Error(`Unexpected Lab role chips: ${uiEvidence.roleChips.join(' | ')}`);
    }
    await assertCoachHidden(evidencePage, 'in the provenance still');
    await evidencePage.screenshot({
      path: path.join(captures, 'lab-ui-evidence.png')
    });
    events.uiEvidenceTick = 100;
    events.uiEvidence = uiEvidence;
    console.log(`Lab UI evidence screenshot: ${path.join(captures, 'lab-ui-evidence.png')}`);
  } finally {
    await evidenceContext.close();
  }
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
  recordingTitle,
  sourceUrl: pageUrlForManifest(serverUrl, recording.id),
  rawCapture: 'public/captures/lab-real.webm',
  speedClip: 'public/captures/lab-speedup.mp4',
  captureDurationSeconds,
  sceneDurationSeconds: sceneSeconds,
  speedFactor,
  events,
  introEvidencePath: 'public/captures/lab-intro-satire.png',
  podiumEvidencePath: 'public/captures/lab-podium-empty.png',
  swimlaneEvidencePath: 'public/captures/lab-swimlane.png',
  uiEvidencePath: 'public/captures/lab-ui-evidence.png',
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
