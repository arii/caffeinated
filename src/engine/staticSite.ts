/** The GitHub Pages build has no backend: it reads the exported catalog and recordings from recordings/. */
export const STATIC_SITE=import.meta.env?.MODE==='pages';
export function staticPath(path:string,base=import.meta.env?.BASE_URL||'/'){
  const clean=path.split('?')[0];
  if(clean==='/recordings')return `${base}recordings/index.json`;
  const m=/^\/recordings\/([^/]+)$/.exec(clean);if(m)return `${base}recordings/${m[1]}.json.gz`;
  const a=/^\/recordings\/([^/]+)\/artifacts\/(.+)$/.exec(clean);if(a)return `${base}recordings/${a[1]}/artifacts/${a[2]}`;
  return null;
}
