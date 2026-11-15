import {createHash} from 'node:crypto';
import {copyFile, mkdir, readFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const metadataPath = path.join(root, 'public', 'captures', 'manifest.json');
const capturedVideoPath = path.join(root, 'public', 'captures', 'lab-speedup.mp4');
const outputPath = path.join(root, 'out', 'demo.mp4');

if (!existsSync(metadataPath)) {
  throw new Error('Run npm run capture first; capture metadata is missing.');
}
const metadata = JSON.parse(await readFile(metadataPath, 'utf8'));
await mkdir(path.dirname(outputPath), {recursive: true});

const videoHash = createHash('sha256')
  .update(await readFile(capturedVideoPath))
  .digest('hex')
  .slice(0, 12);
const labVideoPath = `captures/lab-speedup-${videoHash}.mp4`;
await copyFile(capturedVideoPath, path.join(root, 'public', labVideoPath));

const remotion = path.join(root, 'node_modules', '.bin', 'remotion');
const props = JSON.stringify({
  speedFactor: metadata.speedFactor,
  captions: metadata.captions,
  labVideoPath
});
const result = spawnSync(
  remotion,
  [
    'render',
    'src/index.tsx',
    'Demo',
    outputPath,
    '--codec',
    'h264',
    '--crf',
    '22',
    '--pixel-format',
    'yuv420p',
    '--props',
    props,
    '--concurrency',
    '4'
  ],
  {cwd: root, stdio: 'inherit'}
);
if (result.error) throw result.error;
if (result.status !== 0) {
  throw new Error(`Remotion render exited with status ${result.status}`);
}
console.log(`Rendered ${outputPath}`);
