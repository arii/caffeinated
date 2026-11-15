import { defineConfig } from 'vite';
export default defineConfig({server:{host:'127.0.0.1',port:5175,strictPort:true,proxy:{'/api':{target:'http://127.0.0.1:8765',changeOrigin:true}},watch:{ignored:['**/.lab_data/**','**/.swarm_worktrees/**','**/.venv/**']}},preview:{host:'127.0.0.1',port:4175,proxy:{'/api':'http://127.0.0.1:8765'}}});
