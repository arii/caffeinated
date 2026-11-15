import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
const root = process.cwd();
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml' };
const server = http.createServer(async (req, res) => {
  let path;
  try { path = resolve(root, '.' + decodeURIComponent(new URL(req.url, 'http://localhost').pathname)); }
  catch { res.writeHead(400).end('Invalid path'); return; }
  if (path !== root && !path.startsWith(root + sep)) { res.writeHead(403).end(); return; }
  try {
    const file = path === root ? resolve(root, 'index.html') : path;
    if (!['.html', '.js', '.css', '.svg'].includes(extname(file))) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', types[extname(file)]);
    res.end(await readFile(file));
  } catch { res.writeHead(404).end('Not found'); }
});
server.listen(Number(process.env.PORT || 5173), '127.0.0.1', () => console.log(`BioLab ready at http://localhost:${server.address().port}`));
