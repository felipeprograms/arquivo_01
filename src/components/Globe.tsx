import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { mesh } from 'topojson-client';
import worldRaw from 'world-atlas/countries-110m.json';
import type { MapMarker } from '../data/types';
import { reducedMotion } from '../lib';

const world = worldRaw as any;
const R = 1;
export const ll = (lat: number, lon: number, r = R) => {
  const phi = THREE.MathUtils.degToRad(90 - lat), th = THREE.MathUtils.degToRad(lon + 180);
  return new THREE.Vector3(-r * Math.sin(phi) * Math.cos(th), r * Math.cos(phi), r * Math.sin(phi) * Math.sin(th));
};
export const webglOk = () => { try { const c = document.createElement('canvas'); return !!(c.getContext('webgl2') || c.getContext('webgl')); } catch { return false; } };

interface Props { markers: MapMarker[]; selectedId: string | null; onSelect: (id: string) => void; onFail: () => void; }

export default function Globe({ markers, selectedId, onSelect, onFail }: Props) {
  const host = useRef<HTMLDivElement>(null);
  const api = useRef<{ fly: (lat: number, lng: number, d: number, ms?: number) => void; mark: (id: string | null) => void } | null>(null);
  const selRef = useRef(onSelect); selRef.current = onSelect;

  useEffect(() => {
    const el = host.current; if (!el) return;
    if (!webglOk()) { onFail(); return; }
    let renderer: THREE.WebGLRenderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch { onFail(); return; }
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    el.appendChild(renderer.domElement);
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.01, 100);
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enablePan = false; controls.enableDamping = true; controls.minDistance = 1.12; controls.maxDistance = 6; controls.rotateSpeed = 0.6;

    scene.add(new THREE.AmbientLight(0x8899aa, 0.7));
    const sun = new THREE.DirectionalLight(0xffffff, 1.4); sun.position.set(-3, 2, 4); scene.add(sun);
    const globe = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 96), new THREE.MeshStandardMaterial({ color: 0x111b27, roughness: 0.95, metalness: 0.05 }));
    scene.add(globe);

    const lineFrom = (lines: number[][][], color: number, opacity: number) => {
      const pts: THREE.Vector3[] = [];
      lines.forEach(l => { for (let i = 0; i < l.length - 1; i++) { pts.push(ll(l[i][1], l[i][0], R + 0.001), ll(l[i + 1][1], l[i + 1][0], R + 0.001)); } });
      return new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), new THREE.LineBasicMaterial({ color, transparent: true, opacity }));
    };
    const borders = mesh(world, world.objects.countries) as any;
    scene.add(lineFrom(borders.coordinates, 0x5a6b82, 0.75));
    const grat: number[][][] = [];
    for (let lat = -60; lat <= 60; lat += 30) grat.push(Array.from({ length: 121 }, (_, i) => [i * 3 - 180, lat]));
    for (let lon = -180; lon < 180; lon += 30) grat.push(Array.from({ length: 61 }, (_, i) => [lon, i * 3 - 90]));
    scene.add(lineFrom(grat, 0x243142, 0.5));

    const atm = new THREE.Mesh(new THREE.SphereGeometry(R * 1.1, 64, 64), new THREE.ShaderMaterial({
      transparent: true, side: THREE.BackSide, blending: THREE.AdditiveBlending, depthWrite: false,
      vertexShader: 'varying vec3 n; void main(){ n = normalize(normalMatrix*normal); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} ',
      fragmentShader: 'varying vec3 n; void main(){ float i = pow(0.62 - dot(n, vec3(0.,0.,1.)), 3.0); gl_FragColor = vec4(0.35,0.5,0.75,1.0)*i*0.9; }'
    }));
    scene.add(atm);

    // Região metropolitana de São Paulo (destaque aproximado)
    const sp = new THREE.Mesh(new THREE.CircleGeometry(0.018, 40), new THREE.MeshBasicMaterial({ color: 0xc52d3a, transparent: true, opacity: 0.35, side: THREE.DoubleSide }));
    const spPos = ll(-23.55, -46.63, R + 0.002); sp.position.copy(spPos); sp.lookAt(spPos.clone().multiplyScalar(2)); scene.add(sp);

    const dots: Record<string, THREE.Mesh> = {};
    const group = new THREE.Group(); scene.add(group);
    markers.forEach(m => {
      const d = new THREE.Mesh(new THREE.SphereGeometry(0.011, 16, 16), new THREE.MeshBasicMaterial({ color: m.kind === 'institucional' ? 0xf3f4f6 : 0xe34b56 }));
      d.position.copy(ll(m.lat, m.lng, R + 0.008)); d.userData.id = m.id; group.add(d); dots[m.id] = d;
    });

    let tween: { a: THREE.Vector3; b: THREE.Vector3; da: number; db: number; t0: number; ms: number } | null = null;
    const place = (dir: THREE.Vector3, dist: number) => { camera.position.copy(dir.clone().normalize().multiplyScalar(dist)); camera.lookAt(0, 0, 0); };
    const fly = (lat: number, lng: number, dist: number, ms = 2200) => {
      const b = ll(lat, lng).normalize();
      if (reducedMotion()) { place(b, dist); return; }
      tween = { a: camera.position.clone().normalize(), b, da: camera.position.length(), db: dist, t0: performance.now(), ms };
    };
    api.current = {
      fly,
      mark: id => Object.entries(dots).forEach(([k, d]) => { const s = k === id ? 1.9 : 1; d.scale.setScalar(s); (d.material as THREE.MeshBasicMaterial).color.set(k === id ? 0xffffff : markers.find(m => m.id === k)?.kind === 'institucional' ? 0xf3f4f6 : 0xe34b56); })
    };

    // Abertura: visão global → América do Sul → Brasil → São Paulo
    place(ll(10, -10), 4.4);
    if (reducedMotion()) place(ll(-23.55, -46.63), 1.8); else setTimeout(() => fly(-23.55, -46.63, 1.8, 4200), 300);

    const ray = new THREE.Raycaster(); const mouse = new THREE.Vector2(); let down = { x: 0, y: 0 };
    const cv = renderer.domElement;
    const pd = (e: PointerEvent) => { down = { x: e.clientX, y: e.clientY }; tween = null; };
    const pu = (e: PointerEvent) => {
      if (Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5) return;
      const r = cv.getBoundingClientRect();
      mouse.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
      ray.setFromCamera(mouse, camera);
      const hit = ray.intersectObjects(group.children, false)[0];
      if (hit) selRef.current(hit.object.userData.id);
    };
    cv.addEventListener('pointerdown', pd); cv.addEventListener('pointerup', pu);

    const resize = () => { const w = el.clientWidth, h = el.clientHeight; renderer.setSize(w, h); camera.aspect = w / h; camera.updateProjectionMatrix(); };
    const ro = new ResizeObserver(resize); ro.observe(el); resize();

    let raf = 0;
    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (tween) {
        const k = Math.min(1, (now - tween.t0) / tween.ms); const e = k < 0.5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2;
        place(tween.a.clone().lerp(tween.b, e), tween.da + (tween.db - tween.da) * e);
        if (k >= 1) tween = null;
      }
      controls.update(); renderer.render(scene, camera);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf); ro.disconnect(); cv.removeEventListener('pointerdown', pd); cv.removeEventListener('pointerup', pu);
      controls.dispose(); scene.traverse(o => { const m = o as THREE.Mesh; m.geometry?.dispose(); const mt = m.material as THREE.Material | undefined; mt?.dispose?.(); });
      renderer.dispose(); renderer.domElement.remove(); api.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    api.current?.mark(selectedId);
    const m = markers.find(x => x.id === selectedId);
    if (m) api.current?.fly(m.lat, m.lng, m.id === 'm-itaqui' || m.id === 'm-iaras' ? 1.5 : 1.25, 1800);
  }, [selectedId, markers]);

  return <div ref={host} className="globe-host" aria-label="Globo 3D interativo. Arraste para girar, role para aproximar. Use a lista de locais para navegar por teclado." />;
}
