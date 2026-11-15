#!/usr/bin/env node
// Frame-stepped capture of the Lab's ?cinema=1 Director Mode into artifacts/demo_cinema_v1.mp4.
// Every frame is rendered deterministically via window.__cinema.render(t), so pacing is exact at any machine speed.
import {chromium} from 'playwright';
import {spawn,execFileSync} from 'node:child_process';
import {createServer} from 'node:http';
import {cpSync,existsSync,mkdirSync,mkdtempSync,readFileSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {dirname,extname,join,resolve,sep} from 'node:path';
import {fileURLToPath} from 'node:url';

const repo=resolve(dirname(fileURLToPath(import.meta.url)),'../..');
const arg=(name,fallback)=>{const i=process.argv.indexOf(`--${name}`);return i>0?process.argv[i+1]:fallback;};
const recording=arg('recording','f8fa53cc-6afd-5e98-9596-0c7b8711e718');
const out=resolve(repo,arg('out','artifacts/demo_cinema_v1.mp4'));
const fps=Number(arg('fps','60'));
const stills=arg('stills','5,18,32,48,62').split(',').map(Number);
const onlyStills=process.argv.includes('--only-stills');
mkdirSync(dirname(out),{recursive:true});

const site=mkdtempSync(join(tmpdir(),'cinema-site-'));
execFileSync('npx',['vite','build','--mode','pages','--outDir',join(site,'caffeinated'),'--emptyOutDir','--logLevel','warn'],{cwd:repo,stdio:'inherit'});
cpSync(join(repo,'docs/recordings'),join(site,'caffeinated/recordings'),{recursive:true});
const root=resolve(site);
const types={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.gz':'application/gzip','.svg':'image/svg+xml','.png':'image/png'};
const server=createServer((req,res)=>{const requestPath=decodeURIComponent(new URL(req.url,'http://x').pathname),path=resolve(root,`.${requestPath}`);if(path!==root&&!path.startsWith(root+sep)){res.writeHead(403);res.end();return;}const file=existsSync(path)&&!requestPath.endsWith('/')?path:join(path,'index.html');
 if(!existsSync(file)){res.writeHead(404);res.end();return;}res.writeHead(200,{'Content-Type':types[extname(file)]||'application/octet-stream'});res.end(readFileSync(file));});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const url=`http://127.0.0.1:${server.address().port}/caffeinated/?cinema=1&capture=1&recording=${recording}`;

const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||undefined,args:['--use-angle=swiftshader','--enable-unsafe-swiftshader','--hide-scrollbars','--force-device-scale-factor=1','--disable-gpu-vsync']});
const page=await browser.newPage({viewport:{width:1920,height:1080},deviceScaleFactor:1});
page.on('pageerror',e=>console.error('page error:',e.message));
await page.goto(url);
await page.waitForFunction(()=>window.__cinema?.ready,null,{timeout:120000});
await page.evaluate(()=>document.fonts.ready);
const duration=await page.evaluate(()=>window.__cinema.duration);
const shoot=async(t,type='jpeg')=>{await page.evaluate(time=>window.__cinema.render(time),t);return page.screenshot(type==='png'?{type}:{type,quality:94});};

if(onlyStills){
 for(const s of stills){const file=out.replace(/\.mp4$/,`_${String(s).padStart(2,'0')}s.png`);writeFileSync(file,await shoot(s,'png'));console.log(file);}
}else{
 const ffmpeg=spawn('ffmpeg',['-y','-loglevel','error','-f','image2pipe','-framerate',String(fps),'-c:v','mjpeg','-i','-','-c:v','libx264','-preset','slow','-crf','17','-pix_fmt','yuv420p','-r',String(fps),'-movflags','+faststart',out],{stdio:['pipe','inherit','inherit']});
 const total=Math.round(duration*fps),started=Date.now();
 for(let i=0;i<total;i++){
  const frame=await shoot(i/fps);
  if(!ffmpeg.stdin.write(frame))await new Promise(r=>ffmpeg.stdin.once('drain',r));
  if(i%300===0)console.log(`frame ${i}/${total} (${((Date.now()-started)/1000).toFixed(0)}s)`);
 }
 ffmpeg.stdin.end();await new Promise((r,j)=>ffmpeg.on('close',c=>c===0?r():j(new Error(`ffmpeg exited ${c}`))));
 for(const s of stills){const file=out.replace(/\.mp4$/,`_${String(s).padStart(2,'0')}s.png`);execFileSync('ffmpeg',['-y','-loglevel','error','-ss',String(s),'-i',out,'-frames:v','1',file]);console.log(file);}
 console.log(out);
}
await browser.close();server.close();
