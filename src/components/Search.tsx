import { useEffect, useMemo, useRef, useState } from 'react';
import { chapters } from '../data/chapters';
import { events } from '../data/events';
import { people } from '../data/people';
import { sources } from '../data/sources';
import { content } from '../data/content';
import { norm } from '../lib';

export interface Hit { type: 'capitulo' | 'evento' | 'pessoa' | 'fonte'; id: string; title: string; hint: string; }
const index: (Hit & { hay: string })[] = [
  ...chapters.map(c => ({ type: 'capitulo' as const, id: c.id, title: c.title, hint: 'Capítulo ' + c.num, hay: norm(c.title + ' ' + (content[c.id]?.lead ?? '') + ' ' + (content[c.id]?.paras.map(p => p.text).join(' ') ?? '')) })),
  ...events.map(e => ({ type: 'evento' as const, id: e.id, title: e.title, hint: e.dateLabel, hay: norm(e.title + ' ' + e.description + ' ' + e.dateLabel) })),
  ...people.map(p => ({ type: 'pessoa' as const, id: p.id, title: p.name, hint: p.role === 'vitima' ? 'Vítima' : 'Investigado', hay: norm(p.name + ' ' + p.summary) })),
  ...sources.map(s => ({ type: 'fonte' as const, id: s.id, title: s.title, hint: s.author, hay: norm(s.title + ' ' + s.author + ' ' + s.supports) }))
];

export default function Search({ onPick, onClose }: { onPick: (h: Hit) => void; onClose: () => void }) {
  const [q, setQ] = useState('');
  const inp = useRef<HTMLInputElement>(null);
  useEffect(() => { inp.current?.focus(); const k = (e: KeyboardEvent) => e.key === 'Escape' && onClose(); addEventListener('keydown', k); return () => removeEventListener('keydown', k); }, [onClose]);
  const res = useMemo(() => { const n = norm(q.trim()); return n.length < 2 ? [] : index.filter(i => i.hay.includes(n)).slice(0, 20); }, [q]);
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal search" role="dialog" aria-modal="true" aria-label="Pesquisar no dossiê" onClick={e => e.stopPropagation()}>
        <input ref={inp} value={q} onChange={e => setQ(e.target.value)} placeholder="Pesquisar capítulos, eventos, pessoas e fontes…" aria-label="Pesquisar" />
        <ul>
          {res.map(r => <li key={r.type + r.id}><button onClick={() => onPick(r)}><span className="mono tag">{r.type}</span><b>{r.title}</b><small className="mono">{r.hint}</small></button></li>)}
          {q.trim().length >= 2 && res.length === 0 && <li className="dim state">Nenhum resultado para "{q}".</li>}
        </ul>
      </div>
    </div>
  );
}
