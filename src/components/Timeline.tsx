import { useMemo, useState } from 'react';
import { events } from '../data/events';
import { people } from '../data/people';
import { markers } from '../data/markers';
import type { EventCategory } from '../data/types';
import { SectionHead, Modal, StatusBadge } from './ui';
import { norm } from '../lib';

const cats: ('Todas' | EventCategory)[] = ['Todas', 'Acontecimento', 'Etapa investigativa', 'Informação à imprensa', 'Prisão', 'Decisão judicial'];
const periods = [['todos', 'Todos os períodos'], ['1998', '1998'], ['2026', '2026 em diante']] as const;

export function TimelineSection({ onOpen }: { onOpen: (id: string) => void }) {
  const [cat, setCat] = useState<string>('Todas'); const [per, setPer] = useState<string>('todos'); const [q, setQ] = useState('');
  const list = useMemo(() => events.filter(e => (cat === 'Todas' || e.category === cat) && (per === 'todos' || (per === '1998' ? e.date.startsWith('1998') : e.date >= '2026')) && (!q || norm(e.title + e.description).includes(norm(q)))).sort((a, b) => a.date.localeCompare(b.date)), [cat, per, q]);
  return (
    <section id="linha-do-tempo" className="section">
      <SectionHead num="04" kicker="Linha do tempo" title={<>Todos os fatos, <em>filtrados do seu jeito</em></>}>Filtre por categoria e período; toque num fato para ver detalhes e fontes. Datas aproximadas ou divergentes são sinalizadas.</SectionHead>
      <div className="filters">
        <div className="chips" role="group" aria-label="Categoria">{cats.map(c => <button key={c} className={`pill ${cat === c ? 'on' : ''}`} onClick={() => setCat(c)}>{c}</button>)}</div>
        <div className="chips" role="group" aria-label="Período">{periods.map(([v, l]) => <button key={v} className={`pill ${per === v ? 'on' : ''}`} onClick={() => setPer(v)}>{l}</button>)}</div>
        <input className="field" value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar na linha do tempo…" aria-label="Buscar na linha do tempo" />
      </div>
      <p className="mono dim">{list.length} evento(s)</p>
      <ol className="vtl">
        {list.map(e => (
          <li key={e.id}>
            <span className="d">{e.dateLabel}{e.approximate ? ' ~' : ''}</span>
            <span className="mk" aria-hidden />
            <button className="vtl-body" onClick={() => onOpen(e.id)}>
              <b>{e.title}</b>
              <span>{e.description}</span>
              <span className="vtl-meta"><span className="chip">{e.category}</span> <StatusBadge status={e.status} /></span>
            </button>
          </li>
        ))}
        {list.length === 0 && <p className="state dim">Nenhum evento para essa combinação de filtros.</p>}
      </ol>
    </section>
  );
}

export function EventModal({ id, onClose, onSource, onPerson, onMarker }: { id: string; onClose: () => void; onSource: (s: string) => void; onPerson: (p: string) => void; onMarker: (m: string) => void }) {
  const e = events.find(x => x.id === id)!;
  const mk = markers.find(m => m.id === e.markerId);
  return (
    <Modal title={e.title} onClose={onClose}>
      <p className="kicker mono">{e.dateLabel} · {e.category.toUpperCase()}</p>
      <h3>{e.title}</h3><p>{e.description}</p>
      <p><StatusBadge status={e.status} /></p>
      {e.note && <p className="limit"><b className="mono">DIVERGÊNCIA / NOTA</b> {e.note}</p>}
      <p className="dim mono">Data do acontecimento ≠ data de publicação da fonte. Fontes abaixo são secundárias.</p>
      <div className="row">
        {mk && <button className="btn ghost" onClick={() => onMarker(mk.id)}>Ver no mapa: {mk.name}</button>}
        {e.personIds?.map(pid => <button key={pid} className="btn ghost" onClick={() => onPerson(pid)}>Perfil: {people.find(p => p.id === pid)?.name}</button>)}
        <button className="btn ghost" onClick={() => navigator.clipboard?.writeText(location.origin + location.pathname + '#evento-' + e.id)}>Copiar link</button>
      </div>
    </Modal>
  );
}
