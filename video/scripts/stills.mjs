import {mkdir} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const video = path.join(root, 'out', 'demo.mp4');
const output = process.env.STILLS_DIR ?? '/home/ubuntu/video-assets/stills';
const ffmpeg = process.env.FFMPEG ?? '/usr/bin/ffmpeg';
const stills = [
  ['scene-01-hook.png', 4],
  ['scene-02-hackathon.png', 12],
  ['scene-03-tools.png', 21],
  ['scene-04-authors.png', 28.5],
  ['scene-05-boredom.png', 37.5],
  ['scene-06-real-lab.png', 63],
  ['scene-07-results.png', 91],
  ['scene-08-ignobel.png', 107],
  ['scene-09-close.png', 117]
];

if (!existsSync(video)) throw new Error(`Rendered video not found: ${video}`);
if (!existsSync(ffmpeg)) throw new Error(`ffmpeg not found: ${ffmpeg}`);
await mkdir(output, {recursive: true});

for (const [filename, time] of stills) {
  const destination = path.join(output, filename);
  const result = spawnSync(
    ffmpeg,
    [
      '-y',
      '-ss',
      String(time),
      '-i',
      video,
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
    throw new Error(`ffmpeg failed extracting ${filename} at ${time}s`);
  }
  console.log(destination);
}
