import {copyFile, mkdir, readFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const video = path.join(root, 'out', 'demo.mp4');
const metadataPath = path.join(root, 'public', 'captures', 'manifest.json');
const output = process.env.STILLS_DIR ?? '/home/ubuntu/video-assets/stills';
const ffmpeg = process.env.FFMPEG ?? '/usr/bin/ffmpeg';
const stills = [
  ['scene-01-hook.png', 4],
  ['scene-02-hackathon.png', 11.5],
  ['scene-03-tools.png', 19.5],
  ['scene-04-authors.png', 26],
  ['scene-05-boredom.png', 34],
  ['scene-06-real-lab.png', 59],
  ['scene-07-results.png', 89],
  ['track3-results.png', 88],
  ['scene-08-ignobel.png', 107],
  ['ignobel-known-relationships.png', 110],
  ['scene-09-close.png', 117],
  ['close-frame.png', 119.5]
];

if (!existsSync(video)) throw new Error(`Rendered video not found: ${video}`);
if (!existsSync(metadataPath)) {
  throw new Error(`Capture metadata not found: ${metadataPath}`);
}
if (!existsSync(ffmpeg)) throw new Error(`ffmpeg not found: ${ffmpeg}`);
const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
const uiEvidencePath = path.join(root, metadata.uiEvidencePath);
if (!existsSync(uiEvidencePath)) {
  throw new Error(`Lab UI evidence still not found: ${uiEvidencePath}`);
}
await mkdir(output, {recursive: true});

function extractStill(filename, source, time) {
  const destination = path.join(output, filename);
  const result = spawnSync(
    ffmpeg,
    [
      '-y',
      '-ss',
      String(time),
      '-i',
      source,
      '-frames:v',
      '1',
      '-update',
      '1',
      '-vf',
      'scale=1920:1080',
      destination
    ],
    {stdio: 'inherit'}
  );
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`ffmpeg failed extracting ${filename} from ${time}s`);
  }
  console.log(destination);
}

for (const [filename, time] of stills) {
  extractStill(filename, video, time);
}
const evidenceStill = path.join(output, 'lab-provenance-badge.png');
await copyFile(uiEvidencePath, evidenceStill);
console.log(evidenceStill);
