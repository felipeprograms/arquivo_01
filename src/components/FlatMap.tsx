import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import type { MapMarker } from '../data/types';
import { config } from '../config';

export default function FlatMap({ markers, selectedId, onSelect }: { markers: MapMarker[]; selectedId: string | null; onSelect: (id: string) => void }) {
  const host = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const layers = useRef<Record<string, L.CircleMarker>>({});
  const [err, setErr] = useState(false);
  const sel = useRef(onSelect); sel.current = onSelect;

  useEffect(() => {
    if (!host.current) return;
    const m = L.map(host.current, { zoomControl: true, attributionControl: true }).setView([-23.6, -46.62], 10);
    const tiles = L.tileLayer(config.tileUrl, { attribution: config.tileAttribution, maxZoom: 18, subdomains: 'abcd' }).addTo(m);
    tiles.on('tileerror', () => setErr(true)); tiles.on('tileload', () => setErr(false));
    markers.forEach(mk => {
      const c = L.circleMarker([mk.lat, mk.lng], { radius: 9, color: '#E34B56', weight: 2, fillColor: '#C52D3A', fillOpacity: 0.85 }).addTo(m);
      c.bindTooltip(mk.name); c.on('click', () => sel.current(mk.id));
      c.getElement()?.setAttribute('aria-label', mk.name);
      layers.current[mk.id] = c;
    });
    map.current = m;
    setTimeout(() => m.invalidateSize(), 100);
    return () => { m.remove(); map.current = null; layers.current = {}; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    Object.entries(layers.current).forEach(([id, c]) => c.setStyle({ radius: id === selectedId ? 13 : 9, fillColor: id === selectedId ? '#F3F4F6' : '#C52D3A' }));
    const mk = markers.find(x => x.id === selectedId);
    if (mk && map.current) map.current.flyTo([mk.lat, mk.lng], mk.precision === 'municipio' && mk.id !== 'm-sp' ? 9 : 12, { duration: 1 });
  }, [selectedId, markers]);

  return (
    <div className="flat-wrap">
      <div ref={host} className="flat-host" />
      {err && <p className="map-err mono">Não foi possível carregar os blocos do mapa (verifique a conexão). Os marcadores continuam disponíveis na lista.</p>}
    </div>
  );
}
