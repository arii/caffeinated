import {spawn} from 'node:child_process';
import {existsSync} from 'node:fs';
const python=process.env.LAB_PYTHON || '.venv/bin/python';
if(!existsSync(python)){console.error('Run npm run setup first, or set LAB_PYTHON to your backend Python executable.');process.exit(1);}
const api=spawn(python,['-m','uvicorn','backend.app:create_app','--factory','--host','127.0.0.1','--port','8765','--timeout-graceful-shutdown','2'],{stdio:'inherit'});
const frontend=spawn(process.execPath,['node_modules/vite/bin/vite.js'],{stdio:'inherit'});
let closing=false;function close(code=0){if(closing)return;closing=true;api.kill('SIGTERM');frontend.kill('SIGTERM');process.exitCode=code;}
api.on('exit',code=>close(code||0));frontend.on('exit',code=>close(code||0));for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>close());

for(const child of [api,frontend])child.on('error',error=>{console.error(error.message);close(1);});
