import { defineConfig } from 'vite';
/** Extra hostnames (comma-separated) allowed to reach the dev server, e.g. a forwarded preview host. */
const allowedHosts=(process.env.LAB_ALLOWED_HOSTS||'').split(',').map(h=>h.trim()).filter(Boolean);
/** `--mode pages` builds the replay-only static site into docs/ for GitHub Pages (served at /caffeinated/). */
export default defineConfig(({mode})=>mode==='pages'?{base:'/caffeinated/',build:{outDir:'docs',emptyOutDir:false,assetsDir:'assets'}}:{server:{host:'127.0.0.1',port:5175,strictPort:true,allowedHosts,proxy:{'/api':{target:'http://127.0.0.1:8765',changeOrigin:true}},watch:{ignored:['**/.lab_data/**','**/.swarm_worktrees/**','**/.venv/**']}},preview:{host:'127.0.0.1',port:4175,proxy:{'/api':'http://127.0.0.1:8765'}}});
