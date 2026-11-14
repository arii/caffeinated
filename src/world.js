// A little world built entirely from primitives: no models or image downloads.
export function createWorld(THREE) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#c3e5ed');
  scene.fog = new THREE.Fog('#c3e5ed', 37, 100);
  const camera = new THREE.PerspectiveCamera(67, innerWidth / innerHeight, 0.08, 140);
  camera.position.set(0, 1.75, 11.5);
  camera.lookAt(0, 2.1, -6);

  const colliders = [];
  const animated = [];
  const bubbles = [];
  const screens = [];
  const materials = {};
  const material = (name, color, extra = {}) => (materials[name] ??= new THREE.MeshStandardMaterial({ color, roughness: .72, ...extra }));
  const white = material('ceramic', '#fff4dc');
  const cream = material('warm ceramic', '#f2e8c8');
  const dark = material('graphite', '#88a893');
  const slate = material('slate', '#adc6ad');
  const steel = material('steel', '#e4c7a2', { metalness: .55, roughness: .36 });
  const mint = material('mint plastic', '#95cf9a');
  const orange = material('orange plastic', '#f2ae8c');
  const green = material('plant leaf', '#6ea96a');
  const freshGreen = material('plant leaf light', '#b2d88c');
  const soil = material('soil', '#a07a52');
  const mintGlow = material('mint emission', '#d0e8ac', { emissive: '#8cbd8a', emissiveIntensity: .2 });
  const engineGlow = material('curiosity engine emission', '#d0e8ac', { emissive: '#8cbd8a', emissiveIntensity: .2 });
  const cyanGlow = material('cyan emission', '#f6e7ba', { emissive: '#c6dcb0', emissiveIntensity: .15 });
  const amberGlow = material('amber emission', '#ffe6a8', { emissive: '#edbd77', emissiveIntensity: .18 });
  const paper = material('paper', '#fcf5da');
  const glass = new THREE.MeshPhysicalMaterial({ color: '#e4f1d8', transparent: true, opacity: .12, roughness: .08, metalness: .15, side: THREE.DoubleSide, depthWrite: false });
  const liquid = new THREE.MeshStandardMaterial({ color: '#b3d6a1', emissive: '#9fb88d', emissiveIntensity: .3, transparent: true, opacity: .32, depthWrite: false, roughness: .25 });
  const geom = new THREE.BoxGeometry(1, 1, 1);
  function box(x, y, z, w, h, d, mat, parent = scene, shadow = false) {
    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(x, y, z); mesh.scale.set(w, h, d);
    mesh.castShadow = shadow; mesh.receiveShadow = true; parent.add(mesh);
    return mesh;
  }
  function cylinder(x, y, z, radius, height, mat, parent = scene, sides = 12) {
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, height, sides), mat);
    mesh.position.set(x, y, z); mesh.receiveShadow = true; parent.add(mesh); return mesh;
  }
  function collider(x, z, w, d) { colliders.push({ minX: x - w / 2, maxX: x + w / 2, minZ: z - d / 2, maxZ: z + d / 2 }); }
  function light(x, y, z, color, intensity, distance) {
    const l = new THREE.PointLight(color, intensity, distance, 2); l.position.set(x, y, z); scene.add(l); return l;
  }
  function label(text, x, y, z, w, h, options = {}) {
    const canvas = document.createElement('canvas'); canvas.width = 1024; canvas.height = Math.round(1024 * h / w);
    const c = canvas.getContext('2d');
    c.fillStyle = options.background || '#fff1d9'; c.fillRect(0, 0, canvas.width, canvas.height);
    if (options.border) { c.strokeStyle = '#d6c69f'; c.lineWidth = 8; c.strokeRect(5, 5, canvas.width - 10, canvas.height - 10); }
    const lines = text.split('\n');
    const fontSize = Math.min(canvas.height / (lines.length + .7), canvas.width / (Math.max(...lines.map(t => t.length)) * .64));
    c.font = `700 ${fontSize}px sans-serif`; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillStyle = '#526448';
    lines.forEach((line, i) => c.fillText(line, canvas.width / 2, canvas.height / 2 + (i - (lines.length - 1) / 2) * fontSize * 1.25));
    const texture = new THREE.CanvasTexture(canvas); texture.colorSpace = THREE.SRGBColorSpace;
    const m = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m); mesh.position.set(x, y, z);
    if (options.rotation !== undefined) mesh.rotation.y = options.rotation;
    scene.add(mesh); return mesh;
  }
  function tubeBetween(a, b, radius, mat, parent = scene) {
    const va = new THREE.Vector3(...a), vb = new THREE.Vector3(...b), delta = vb.clone().sub(va);
    const mesh = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, delta.length(), 8), mat);
    mesh.position.copy(va).add(vb).multiplyScalar(.5);
    mesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), delta.normalize()); parent.add(mesh); return mesh;
  }

  // Soft daylight spills through the observatory; work lights add colored pools.
  scene.add(new THREE.HemisphereLight('#fff9e9', '#b6c9a5', 2.8));
  const sun = new THREE.DirectionalLight('#fff4da', 2.1);
  sun.position.set(-12, 22, -20); sun.castShadow = false;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -23, right: 23, top: 23, bottom: -23, near: .5, far: 65 });
  sun.shadow.bias = -.0005; sun.shadow.normalBias = .035; scene.add(sun);
  const engineLight = light(0, 4, -5, '#68ffd4', 5, 13);
  light(-9, 3.5, -4, '#5deeff', 3, 9);
  light(9, 3.5, -4, '#ffb95f', 3, 10);
  light(0, 6, 9, '#e8fff7', 6, 17);

  // One continuous floor surface: no coplanar tiles or shadow-map banding.
  const floorCanvas = document.createElement('canvas'); floorCanvas.width = 512; floorCanvas.height = 512;
  const floorContext = floorCanvas.getContext('2d');
  floorContext.fillStyle = '#f1e5c9'; floorContext.fillRect(0, 0, 512, 512);
  floorContext.fillStyle = '#eee0c1'; floorContext.fillRect(0, 0, 256, 256); floorContext.fillRect(256, 256, 256, 256);
  floorContext.strokeStyle = '#e3d5b6'; floorContext.lineWidth = 2;
  floorContext.strokeRect(1, 1, 510, 510); floorContext.strokeRect(1, 1, 255, 255); floorContext.strokeRect(257, 257, 254, 254);
  const floorTexture = new THREE.CanvasTexture(floorCanvas); floorTexture.colorSpace = THREE.SRGBColorSpace;
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping; floorTexture.repeat.set(7, 8); floorTexture.anisotropy = 8;
  const floorMaterial = new THREE.MeshBasicMaterial({ map: floorTexture });
  const floor = box(0, -.1, 0, 29, .2, 34, floorMaterial); floor.name = 'continuous-floor'; floor.receiveShadow = false;
  for (const x of [-3.2, 3.2]) {
    box(x, .012, 2.8, .055, .025, 21, mintGlow);
    box(x + (x < 0 ? -.16 : .16), .015, 2.8, .12, .027, 21, dark);
  }
  for (let z = 9; z >= -1; z -= 2) {
    const a = box(-.18, .035, z, .45, .035, .12, mintGlow); a.rotation.y = -.55;
    const b = box(.18, .035, z, .45, .035, .12, mintGlow); b.rotation.y = .55;
  }
  // Four walls: solid knee walls, huge windows, chunky structural mullions.
  box(0, .6, -16, 28.5, 1.2, .45, white);
  box(0, 7.45, -16, 28.5, 1.1, .6, dark);
  box(0, 4.0, -16.03, 27.7, 5.65, .035, glass);
  for (const x of [-14, -7, 0, 7, 14]) {
    box(x, 4, -16, .32, 8, .52, dark, scene, true);
    box(x, 3.9, -15.68, .07, 5.3, .035, cyanGlow);
  }
  box(0, 3.1, -16, 28, .1, .3, steel);
  for (const x of [-14.2, 14.2]) {
    box(x, .65, 0, .5, 1.3, 32, white);
    box(x, 7.45, 0, .65, 1.1, 33, dark);
    box(x, 4, -1, .04, 5.5, 29.5, glass);
    for (const z of [-15, -8, -1, 6, 13, 16]) box(x, 4, z, .5, 8, .32, dark, scene, true);
    box(x, 3.15, 0, .27, .1, 32, steel);
  }
  box(-9.5, 3.5, 16, 9, 7, .5, white);
  box(9.5, 3.5, 16, 9, 7, .5, white);
  box(0, 6.6, 16, 11, 2.8, .5, dark);
  box(0, 2.6, 16.15, 8.5, 5.2, .35, slate);
  box(0, 2.6, 15.9, .1, 5, .08, mintGlow);
  for (const x of [-4.45, 4.45]) box(x, 2.7, 15.6, .18, 5.4, .18, mintGlow);
  label('WELCOME TO THE GROW CLUB', 0, 5.9, 15.66, 7.7, .65, { rotation: Math.PI });

  // Open overhead steel structure avoids a flat ceiling and gives the room scale.
  for (const z of [-12, -4, 4, 12]) {
    box(0, 7.7, z, 28.6, .45, .4, dark, scene, true);
    box(0, 7.39, z, 19, .1, .15, cream);
    for (const x of [-9, 9]) {
      tubeBetween([x, 7.8, z], [x, 6.5, z], .035, steel);
      box(x, 6.4, z, 4.5, .22, .75, dark);
      box(x, 6.27, z, 4.15, .055, .5, cyanGlow);
    }
  }
  for (const x of [-11, 11]) box(x, 7.8, 0, .35, .3, 32, slate);
  // Exterior: a calm stylized forest valley with faceted mountains.
  box(0, -1.5, -20, 180, 1, 180, material('outside ground', '#b4cc92'));
  const mountainMat = material('distant mountain', '#b3c9ba');
  const mountainLight = material('distant mountain light', '#d7dbc4');
  for (let i = 0; i < 13; i++) {
    const x = -65 + i * 11;
    const mountain = new THREE.Mesh(new THREE.ConeGeometry(11 + i % 4 * 2, 18 + i % 3 * 6, 4), i % 2 ? mountainMat : mountainLight);
    mountain.position.set(x, 6, -49 - i % 3 * 9); mountain.rotation.y = .4 + i; scene.add(mountain);
  }
  const trunk = material('tree trunk', '#60786c');
  const foliage = [material('pine dark', '#8bb580'), material('pine middle', '#a8c78a'), material('pine light', '#bed59e')];
  for (let i = 0; i < 38; i++) {
    const side = i % 2 ? 1 : -1;
    const x = i < 24 ? -46 + i * 4 : side * (22 + i % 6 * 3);
    const z = i < 24 ? -26 - i % 5 * 3 : -10 + (i - 24) * 3;
    const h = 3 + i % 4;
    box(x, h / 3 - 1, z, .45, h, .45, trunk);
    for (let level = 0; level < 3; level++) {
      const p = new THREE.Mesh(new THREE.ConeGeometry(2.1 - level * .4, 3, 4), foliage[(i + level) % 3]);
      p.position.set(x, 1.2 + level * 1.5, z); p.rotation.y = Math.PI / 4; scene.add(p);
    }
  }

  // Hero specimen: angular aquarium, huge lively plant, floating orbit lights.
  const heroZ = -5.4;
  cylinder(0, .14, heroZ, 2.55, .28, dark, scene, 8);
  cylinder(0, .31, heroZ, 2.4, .1, engineGlow, scene, 8);
  cylinder(0, .56, heroZ, 2.3, .4, white, scene, 8);
  cylinder(0, .81, heroZ, 2.1, .12, dark, scene, 8);
  cylinder(0, .9, heroZ, 1.8, .1, soil, scene, 8);
  collider(0, heroZ, 4.25, 4.25);
  label('BUDDY THE SPROUT', 0, 1.01, -3.265, 2.45, .33, { color: '#b8ffda' });
  const plant = new THREE.Group(); plant.position.set(0, .98, heroZ); scene.add(plant);
  tubeBetween([0, 0, 0], [.12, 2.2, 0], .14, green, plant);
  for (let i = 0; i < 8; i++) {
    const angle = i * 2.4, height = .4 + i * .22;
    const radial = 1.1 - i * .065;
    const x = Math.cos(angle) * radial, z = Math.sin(angle) * radial;
    tubeBetween([0, height - .25, 0], [x, height + .25, z], .065, green, plant);
    const leaf = box(x, height + .3, z, .9 - i * .045, .22, .5, i % 2 ? green : freshGreen, plant, true);
    leaf.rotation.set(.15 * Math.sin(angle), -angle, .2 * Math.cos(angle));
    const vein = box(x, height + .425, z, .65 - i * .035, .025, .035, mint, plant); vein.rotation.y = -angle;
  }
  // A happy sprout friend, rather than a specimen in a cage.
  const faceInk = material('friendly ink', '#455647');
  const blush = material('peach cheeks', '#efa99a');
  box(0, 2.4, 0, 1.25, 1.05, .9, freshGreen, plant);
  for (const x of [-.26, .26]) {
    box(x, 2.49, .464, .12, .18, .035, faceInk, plant);
    box(x - .025, 2.54, .486, .035, .04, .012, white, plant);
    box(x * 1.6, 2.27, .465, .18, .08, .025, blush, plant);
  }
  box(0, 2.2, .468, .22, .055, .03, faceInk, plant);
  box(-.135, 2.25, .468, .055, .1, .03, faceInk, plant);
  box(.135, 2.25, .468, .055, .1, .03, faceInk, plant);
  const sproutLeft = box(-.3, 3.03, 0, .65, .2, .35, green, plant); sproutLeft.rotation.z = -.35;
  const sproutRight = box(.3, 3.09, 0, .65, .2, .35, green, plant); sproutRight.rotation.z = .35;
  const orbit = new THREE.Group(); orbit.position.set(0, 3.1, heroZ); scene.add(orbit);
  for (let i = 0; i < 12; i++) {
    const a = i * Math.PI / 6;
    const bit = box(Math.cos(a) * 1.7, Math.sin(a * 2) * .13, Math.sin(a) * 1.7, .1, .1, .1, engineGlow, orbit);
    bit.rotation.y = a;
  }
  animated.push({ object: orbit, type: 'orbit' });

  // Long rear display and observation bench, with a tall room identifier.
  box(0, 4.55, -14.85, 9.8, 3.1, .24, dark, scene, true);
  label('LITTLE SPROUT', 0, 5.08, -14.7, 8.75, 1.1, { color: '#e1ffea' });
  label('GROW CLUB', 0, 4.05, -14.7, 8.75, .94, { color: '#83f6ba' });
  label('SMALL EXPERIMENTS.  WILD POSSIBILITIES.', 0, 3.25, -14.69, 8.7, .33, { color: '#9cbdbe' });
  box(0, 6.2, -14.72, 9.8, .055, .12, mintGlow);
  label('07', -10.5, 5.6, -15.6, 3, 1.7, { background: '#cbded9', color: '#254a50' });
  label('GOOD THINGS\nARE GROWING', 10.5, 5.55, -15.6, 3.1, 1.3, { color: '#a9ffce' });

  function bench(x, z, width = 4.2, depth = 1.65) {
    box(x, .6, z, width - .2, 1.2, depth - .1, dark, scene, true);
    box(x, 1.22, z, width, .2, depth, white, scene, true);
    for (const dx of [-width * .33, 0, width * .33]) {
      box(x + dx, .7, z + depth / 2 - .02, width * .28, .67, .06, slate);
      box(x + dx, .88, z + depth / 2 + .025, .35, .06, .055, steel);
    }
    box(x, .12, z + depth / 2, width - .45, .07, .06, mintGlow);
    collider(x, z, width, depth);
  }
  function monitor(x, y, z, accent = mintGlow, text = 'HELLO, SPROUT!\nLET’S TRY\nSOMETHING NEW') {
    box(x, y + .05, z, .6, .07, .4, dark);
    box(x, y + .35, z, .1, .6, .1, steel);
    box(x, y + .75, z, 1.55, .95, .14, dark, scene, true);
    box(x, y + .75, z + .075, 1.39, .78, .015, accent);
    const display = label(text, x, y + .75, z + .088, 1.33, .72, { color: accent === amberGlow ? '#ffd39a' : '#8fffd0' });
    screens.push(display);
    for (let k = 0; k < 4; k++) box(x - .49 + k * .2, y + .23, z + .35, .13, .045, .11, k === 3 ? accent : steel);
  }
  function bottle(x, y, z, color, s = 1) {
    cylinder(x, y + .19 * s, z, .12 * s, .38 * s, color, scene, 8);
    cylinder(x, y + .42 * s, z, .065 * s, .1 * s, dark, scene, 8);
    box(x, y + .2 * s, z + .12 * s, .15 * s, .11 * s, .01, paper);
  }
  function smallPlant(x, y, z, s = 1) {
    box(x, y + .18 * s, z, .5 * s, .36 * s, .5 * s, white, scene, true);
    box(x, y + .37 * s, z, .43 * s, .03, .43 * s, soil);
    box(x, y + .65 * s, z, .08 * s, .55 * s, .08 * s, green);
    const l = box(x - .17 * s, y + .7 * s, z, .4 * s, .12 * s, .2 * s, freshGreen); l.rotation.z = -.3;
    const r = box(x + .17 * s, y + .9 * s, z, .4 * s, .12 * s, .2 * s, green); r.rotation.z = .3;
  }
  function chamber(x, z, hue, index) {
    cylinder(x, 1.5, z, .8, .25, dark, scene, 8);
    cylinder(x, 1.66, z, .77, .07, hue, scene, 8);
    cylinder(x, 2.7, z, .73, 2.0, glass, scene, 8);
    cylinder(x, 1.97, z, .69, .55, liquid, scene, 8);
    cylinder(x, 3.75, z, .82, .22, white, scene, 8);
    cylinder(x, 3.6, z, .76, .06, hue, scene, 8);
    for (const dx of [-.7, .7]) box(x + dx, 2.65, z, .06, 2, .08, steel);
    const organism = new THREE.Group(); organism.position.set(x, 2.45, z); scene.add(organism);
    if (index % 2) {
      for (let i = 0; i < 4; i++) {
        const cell = box(Math.sin(i * 2) * .2, i * .18 - .2, Math.cos(i * 2) * .2, .29, .29, .29, mint, organism); cell.rotation.set(i, i, 0);
      }
    } else {
      box(0, 0, 0, .1, .9, .1, green, organism);
      for (let i = 0; i < 3; i++) { const l = box(i % 2 ? .2 : -.2, i * .23 - .2, 0, .45, .13, .25, freshGreen, organism); l.rotation.z = i % 2 ? .3 : -.3; }
    }
    animated.push({ object: organism, type: 'specimen', baseY: 2.45, phase: index });
    for (let i = 0; i < 7; i++) {
      const bubble = box(x + Math.sin(i * 8.3) * .45, 2, z + Math.cos(i * 2.4) * .42, .045, .045, .045, hue);
      bubbles.push({ object: bubble, baseY: 1.8, height: 1.7, phase: (i * .147 + index * .31) % 1 });
    }
  }

  // 01 CULTURE: cyan glass incubators and a hands-on potting desk.
  bench(-9, -5.1, 6.8, 2.05);
  chamber(-11.2, -5.2, cyanGlow, 0); chamber(-9, -5.2, mintGlow, 1); chamber(-6.8, -5.2, cyanGlow, 2);
  label('01 / CULTURE', -9, 4.7, -5.15, 6.1, .72, { color: '#90ffcf', border: true });
  label('GROW SOMETHING UNEXPECTED', -9, .76, -4.03, 5.75, .3, { color: '#aecac4' });
  bench(-9, -.35, 5.5, 1.7);
  monitor(-10.3, 1.32, -.6);
  smallPlant(-8.2, 1.33, -.3, .85);
  bottle(-7.3, 1.33, -.6, orange, .8); bottle(-7.65, 1.33, -.7, mint, .75);
  box(-8.6, 1.36, .18, 1.3, .055, .45, dark);
  for (let i = 0; i < 4; i++) cylinder(-9.1 + i * .33, 1.42, .18, .12, .08, i % 2 ? mint : green, scene, 12);

  // 02 ANALYZER: a warm contrast, a voxel microscope and an enormous DNA display.
  bench(9, -3.8, 6.4, 2.2);
  box(9.8, 2.1, -4.15, 3.35, 1.6, 1.3, white, scene, true);
  box(9.8, 2.15, -3.48, 2.95, 1.15, .045, dark);
  label('LITTLE DISCOVERIES\nGROW. LEARN. REPEAT.\nYOU’RE DOING GREAT!', 9.8, 2.15, -3.447, 2.7, 1.03, { color: '#ffd18c' });
  for (let i = 0; i < 6; i++) box(8.7 + i * .43, 3, -4.15, .26, .08, .6, i < 4 ? amberGlow : slate);
  box(6.8, 1.4, -3.65, 1.15, .16, .95, dark);
  box(6.85, 1.9, -4, .25, 1, .24, white);
  const microscopeArm = box(6.85, 2.38, -3.9, .25, .6, .3, white); microscopeArm.rotation.x = -.5;
  const eyepiece = cylinder(6.85, 2.65, -3.7, .14, .6, dark); eyepiece.rotation.x = -.5;
  box(6.85, 1.72, -3.62, .75, .08, .65, steel);
  cylinder(6.85, 1.81, -3.55, .22, .05, amberGlow);
  label('02 / ANALYZER', 9, 4.7, -5.15, 6.1, .72, { color: '#ffd18c', border: true });
  label('CURIOSITY IS A SUPERPOWER', 9, .76, -2.67, 5.75, .3, { color: '#aecac4' });
  // Sculpture of a double helix, behind the analyzer.
  const helix = new THREE.Group(); helix.position.set(10.2, 1.2, -9); scene.add(helix);
  cylinder(10.2, .6, -9, 1.55, 1.2, dark, scene, 8); collider(10.2, -9, 2.7, 2.7);
  cylinder(10.2, 1.22, -9, 1.45, .08, amberGlow, scene, 8);
  for (let i = 0; i < 15; i++) {
    const y = i * .23 + .3, a = i * .53, x = Math.cos(a) * .85, z = Math.sin(a) * .85;
    box(x, y, z, .23, .23, .23, mintGlow, helix);
    box(-x, y, -z, .23, .23, .23, amberGlow, helix);
    tubeBetween([x, y, z], [-x, y, -z], .045, i % 2 ? orange : mint, helix);
  }
  animated.push({ object: helix, type: 'helix' });

  // 03 EXPLORER: a rear mission terminal, accessible around the hero chamber.
  bench(0, -12.3, 5.5, 1.7);
  monitor(0, 1.32, -12.45, cyanGlow, 'EXPEDITION MAP\n+  .  +  .  +\nNEW FRONTIERS');
  smallPlant(-1.8, 1.33, -12.3, .8);
  box(1.75, 1.42, -12.3, 1, .22, .65, dark);
  const globe = new THREE.Mesh(new THREE.IcosahedronGeometry(.43, 1), material('globe', '#69dacb', { emissive: '#298c78', emissiveIntensity: .3, flatShading: true }));
  globe.position.set(1.75, 1.98, -12.3); scene.add(globe); animated.push({ object: globe, type: 'globe' });
  label('03 / EXPLORER', 0, .75, -11.43, 4.5, .42, { color: '#a4f1ff' });

  // 04 NOTEBOOK: an approachable orange-accented desk by the entry.
  bench(-9.2, 7.15, 5.8, 2.1);
  monitor(-10.65, 1.32, 6.9, amberGlow, 'FIELD NOTES\nIDEA NO. 001\nMAKE IT GROW');
  const notebook = box(-8.8, 1.37, 7.5, 1.1, .09, .8, orange); notebook.rotation.y = -.15;
  const sheet = box(-8.78, 1.425, 7.49, .95, .025, .7, paper); sheet.rotation.y = -.15;
  for (let i = 0; i < 4; i++) { const line = box(-8.77, 1.442, 7.29 + i * .12, .6, .006, .015, slate); line.rotation.y = -.15; }
  cylinder(-7.45, 1.56, 7.05, .18, .45, cream);
  box(-7.45, 1.81, 7.05, .04, .3, .04, orange);
  bottle(-7.15, 1.33, 7.6, mint, .8);
  label('04 / NOTEBOOK', -9.2, 3.3, 6.5, 5.5, .72, { color: '#ffd18c', border: true });
  label('EVERY DISCOVERY STARTS WITH A QUESTION', -9.2, .75, 8.23, 5.15, .3, { color: '#aecac4' });

  // Seating, lockers, pinboards, and hand-placed tools make this a lived-in lab.
  for (const [x, z] of [[-9.2, 9], [8.3, -.8]]) {
    box(x, .75, z, .9, .15, .8, orange, scene, true);
    box(x, 1.2, z + .35, .9, .85, .14, dark, scene, true);
    cylinder(x, .38, z, .075, .65, steel);
    box(x, .08, z, 1.1, .1, .15, dark); box(x, .08, z, .15, .1, 1.1, dark);
    collider(x, z, .9, .8);
  }
  for (let i = 0; i < 4; i++) {
    box(10.8 + i % 2 * 1.35, 1.9, 10 + Math.floor(i / 2) * 1.5, 1.2, 3.8, 1.1, i % 2 ? white : slate, scene, true);
    box(10.8 + i % 2 * 1.35, 2, 10.565 + Math.floor(i / 2) * 1.5, .08, .5, .055, dark);
    for (let j = 0; j < 3; j++) box(10.8 + i % 2 * 1.35, 3.2 + j * .13, 10.565 + Math.floor(i / 2) * 1.5, .6, .035, .025, dark);
  }
  collider(11.5, 10.7, 3, 3);
  label('EQUIPMENT', 11.5, 4.3, 10.55, 3.2, .45, { color: '#a6c4c5' });
  box(8, 2.75, 14.4, 5.7, 3.5, .18, dark);
  label('THE CURIOSITY BOARD', 8, 4.05, 14.28, 5.1, .4, { rotation: Math.PI, color: '#bdffdc' });
  for (let i = 0; i < 6; i++) {
    const note = box(6.4 + i % 3 * 1.55, 2.2 + Math.floor(i / 3) * 1.05, 14.28, 1.05, .72, .025, i % 2 ? cream : mint);
    note.rotation.z = (i % 3 - 1) * .08;
  }
  for (const [x, z] of [[-12.2, -12], [12.4, 5], [-12.5, 12.5]]) {
    box(x, .5, z, 1.1, 1, 1.1, cream, scene, true); box(x, 1.02, z, 1, .05, 1, soil);
    box(x, 1.9, z, .15, 1.8, .15, green);
    for (let i = 0; i < 5; i++) {
      const a = i * 2.4;
      const leaf = box(x + Math.cos(a) * .45, 1.6 + i * .22, z + Math.sin(a) * .45, .9, .2, .55, i % 2 ? green : freshGreen, scene, true); leaf.rotation.y = -a;
    }
    collider(x, z, 1.15, 1.15);
  }

  // Toy-like research friends with expressive faces and a gentle wave.
  function scientist(x, z, rotation, name, skinColor, outfitColor) {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotation; scene.add(g);
    const skin = material(name + ' skin', skinColor), outfit = material(name + ' outfit', outfitColor);
    const hair = material(name + ' hair', '#8b674b'), ink = material('face ink', '#4d5145');
    const cheek = material('rosy cheeks', '#efa89d');
    box(-.19, .38, 0, .29, .6, .34, outfit, g); box(.19, .38, 0, .29, .6, .34, outfit, g);
    box(-.19, .12, .08, .34, .23, .46, cream, g); box(.19, .12, .08, .34, .23, .46, cream, g);
    box(0, 1.02, 0, .85, .78, .48, outfit, g);
    box(0, 1.06, .25, .53, .59, .025, white, g);
    box(-.52, .95, 0, .24, .63, .32, outfit, g); box(-.52, .59, .01, .23, .22, .3, skin, g);
    const wave = new THREE.Group(); wave.position.set(.48, 1.25, 0); g.add(wave);
    box(.12, .18, 0, .25, .55, .3, outfit, wave); box(.12, .52, 0, .25, .22, .3, skin, wave);
    animated.push({object:wave,type:'wave',phase:x});
    box(0, 1.77, 0, .82, .73, .7, skin, g);
    box(0, 2.16, -.03, .88, .18, .76, hair, g);
    box(-.35, 1.99, -.05, .16, .27, .7, hair, g);
    for (const eye of [-.19, .19]) {
      box(eye, 1.82, .36, .085, .13, .025, ink, g);
      box(eye - .012, 1.85, .378, .025, .03, .01, white, g);
      box(eye * 1.65, 1.67, .36, .13, .07, .02, cheek, g);
    }
    box(0, 1.6, .36, .17, .035, .025, ink, g);
    box(-.11, 1.635, .36, .04, .07, .025, ink, g); box(.11, 1.635, .36, .04, .07, .025, ink, g);
    box(.19, 1.1, .28, .15, .14, .02, orange, g);
    label('HI, I’M ' + name + '!', x, 2.8, z + .2, 2.1, .45);
    collider(x, z, 1.1, .7); animated.push({object:g,type:'scientist',phase:x});
  }
  scientist(4.1, 2.1, -.18, 'PIP', '#e5b58d', '#eab19b');
  scientist(-4.6, -2.5, .2, 'MILO', '#bc8b62', '#b4b6d5');

  // Subtle airborne motes soften the hard geometric architecture.
  const dustPositions = new Float32Array(100 * 3);
  for (let i = 0; i < 100; i++) {
    dustPositions[i * 3] = Math.sin(i * 47.1) * 13;
    dustPositions[i * 3 + 1] = .8 + (i * .173 % 1) * 5.8;
    dustPositions[i * 3 + 2] = Math.cos(i * 32.7) * 15;
  }
  const dustGeom = new THREE.BufferGeometry(); dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
  const dust = new THREE.Points(dustGeom, new THREE.PointsMaterial({ color: '#d3fff1', size: .035, transparent: true, opacity: .5, depthWrite: false })); scene.add(dust);

  const interactables = [
    { id: 'culture', name: 'Culture station', description: 'Nurture a living specimen', position: new THREE.Vector3(-9, 1.6, .8), radius: 3.2 },
    { id: 'analyzer', name: 'Genome analyzer', description: 'Discover what makes life tick', position: new THREE.Vector3(9, 1.7, -2.15), radius: 3.3 },
    { id: 'explorer', name: 'Expedition terminal', description: 'Follow your curiosity somewhere new', position: new THREE.Vector3(0, 1.7, -10.95), radius: 2.8 },
    { id: 'notebook', name: 'Field notebook', description: 'Turn a spark into an experiment', position: new THREE.Vector3(-9.2, 1.6, 8.55), radius: 3.2 },
  ];
  // A bright hovering marker identifies each interactive desk in the 3D world.
  for (const station of interactables) {
    const marker = new THREE.Mesh(new THREE.OctahedronGeometry(.16, 0), station.id === 'analyzer' || station.id === 'notebook' ? amberGlow : mintGlow);
    marker.position.copy(station.position); marker.position.y = 2.9; scene.add(marker);
    animated.push({ object: marker, type: 'marker', baseY: 2.9, phase: station.position.x });
  }

  // Hundreds of architectural blocks share a handful of GPU draw calls.
  // Keep moving specimens and translucent surfaces separate for animation/sorting.
  const movingBlocks = new Set(bubbles.map(b => b.object));
  const batches = new Map();
  for (const child of [...scene.children]) {
    if (!child.isMesh || child.geometry !== geom || child.material.transparent || child.name === 'continuous-floor' || movingBlocks.has(child)) continue;
    const key = child.material.uuid + ':' + child.castShadow;
    if (!batches.has(key)) batches.set(key, []);
    batches.get(key).push(child);
  }
  for (const members of batches.values()) {
    if (members.length < 3) continue;
    const batch = new THREE.InstancedMesh(geom, members[0].material, members.length);
    batch.castShadow = members[0].castShadow; batch.receiveShadow = true;
    members.forEach((member, i) => { member.updateMatrix(); batch.setMatrixAt(i, member.matrix); scene.remove(member); });
    batch.instanceMatrix.needsUpdate = true; batch.computeBoundingSphere(); scene.add(batch);
  }

  const engineMint = new THREE.Color('#8cbd8a');
  const engineAmber = new THREE.Color('#ffac42');
  let lastTime = 0, orbitAngle = 0;
  function update(time = 0, growth = 0, boredom = 0) {
    // Accept either a 0..1 or 0..100 simulation value.
    const g = THREE.MathUtils.clamp(Number(growth) > 1 ? Number(growth) / 100 : Number(growth) || 0, 0, 1);
    const b = THREE.MathUtils.clamp(Number(boredom) > 1 ? Number(boredom) / 100 : Number(boredom) || 0, 0, 1);
    const delta = THREE.MathUtils.clamp(time - lastTime, 0, .1); lastTime = time;
    // The little seedling grows into a canopy; idle curiosity charges amber.
    plant.scale.set(.55 + g * .5, .42 + g * .63, .55 + g * .5);
    plant.rotation.y = Math.sin(time * .28) * .035;
    const charge = THREE.MathUtils.smoothstep(b, .2, .9);
    engineGlow.emissive.copy(engineMint).lerp(engineAmber, charge);
    engineGlow.color.copy(engineGlow.emissive);
    engineGlow.emissiveIntensity = .12 + b * .18 + Math.sin(time * (1.4 + b * 3.5)) * (.15 + b * .35);
    engineLight.color.copy(engineGlow.emissive);
    engineLight.intensity = 3 + b * 3;
    orbitAngle += delta * (.13 + b * .65);
    for (const item of animated) {
      const o = item.object;
      if (item.type === 'orbit') { o.rotation.y = orbitAngle; o.position.y = 2.7 + g * .5 + Math.sin(time * (1 + b)) * (.05 + b * .1); }
      if (item.type === 'helix') o.rotation.y = time * .12;
      if (item.type === 'globe') o.rotation.y = time * .18;
      if (item.type === 'specimen') { o.rotation.y = time * .3 + item.phase; o.position.y = item.baseY + Math.sin(time * 1.2 + item.phase) * .1; }
      if (item.type === 'marker') { o.rotation.y = time; o.position.y = item.baseY + Math.sin(time * 2 + item.phase) * .12; }
      if (item.type === 'wave') o.rotation.z = -.45 + Math.sin(time * 2 + item.phase) * .18;
      if (item.type === 'scientist') o.rotation.z = Math.sin(time * .7 + item.phase) * .012;
    }
    for (const bubble of bubbles) bubble.object.position.y = bubble.baseY + ((time * .15 + bubble.phase) % 1) * bubble.height;
    dust.rotation.y = Math.sin(time * .025) * .025;
    mintGlow.emissiveIntensity = .15 + Math.sin(time * 1.4) * .03;
  }
  update(0);
  return { scene, camera, interactables, colliders, update, bounds: { minX: -13.6, maxX: 13.6, minZ: -15.4, maxZ: 15.2 } };
}
