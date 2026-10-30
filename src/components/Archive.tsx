import { useMemo, useState } from 'react';
import { sources } from '../data/sources';
import { SectionHead, Modal, ImageSlot } from './ui';
import { events } from '../data/events';
import { norm } from '../lib';

const rel = { oficial: 'Fonte oficial (texto legal)', imprensa: 'Imprensa', colaborativa: 'Enciclopédia colaborativa', blog: 'Blog / podcast (baixa confiabilidade)' };

export function ArchiveSection({ onOpen }: { onOpen: (id: string) => void }) {
  const [r, setR] = useState('todas'); const [q, setQ] = useState('');
  const list = useMemo(() => sources.filter(s => (r === 'todas' || s.reliability === r) && (!q || norm(s.title + s.author + s.supports).includes(norm(q)))), [r, q]);
  return (
    <section id="evidencias" className="section">
      <SectionHead num="10" kicker="Evidências e documentos" title={<>Arquivo <em>documental</em></>}>
        Nenhum documento judicial ou policial original foi localizado online. O arquivo abaixo reúne as reportagens e publicações efetivamente consultadas; cada item é um material secundário.
      </SectionHead>
      <div className="filters">
        <div className="chips" role="group" aria-label="Tipo de fonte">{[['todas', 'Todas'], ['oficial', 'Oficiais'], ['imprensa', 'Imprensa'], ['colaborativa', 'Colaborativas'], ['blog', 'Blogs e podcasts']].map(([v, l]) => <button key={v} className={`pill ${r === v ? 'on' : ''}`} onClick={() => setR(v)}>{l}</button>)}</div>
        <input className="field" value={q} onChange={e => setQ(e.target.value)} placeholder="Buscar documentos…" aria-label="Buscar documentos" />
      </div>
      <div className="grid docs">
        {list.map(s => (
          <button key={s.id} className="doc" onClick={() => onOpen(s.id)}>
            <div className="doc-thumb"><ImageSlot id={s.id} kind="doc" doc={{ outlet: s.author, title: s.title, meta: `${s.id} · ${s.published}` }} label={s.author} ratio="4/3" /></div>
            <span className="mono tag">{s.id} · {s.kind}</span>
            <b>{s.title}</b><small className="mono">{s.author} · {s.published}</small>
          </button>
        ))}
        {list.length === 0 && <p className="state dim">Nenhum documento encontrado.</p>}
      </div>
    </section>
  );
}

export function SourceModal({ id, onClose, onEvent }: { id: string; onClose: () => void; onEvent: (e: string) => void }) {
  const s = sources.find(x => x.id === id)!;
  const used = events.filter(e => e.sourceIds.includes(id));
  return (
    <Modal title={s.title} onClose={onClose}>
      <p className="kicker mono">{s.id} · {s.kind.toUpperCase()}</p>
      <h3>{s.title}</h3>
      <table className="facts"><tbody>
        <tr><th className="mono">Autor/instituição</th><td>{s.author}</td></tr>
        <tr><th className="mono">Publicação</th><td>{s.published}</td></tr>
        <tr><th className="mono">Acesso</th><td>{new Date(s.accessed + 'T12:00').toLocaleDateString('pt-BR')}</td></tr>
        <tr><th className="mono">Confiabilidade</th><td>{rel[s.reliability]}</td></tr>
        <tr><th className="mono">Ajuda a documentar</th><td>{s.supports}</td></tr>
      </tbody></table>
      <p className="limit"><b className="mono">NOTA</b> Material secundário. Não é reprodução de documento oficial.</p>
      {used.length > 0 && <ul className="rel">{used.map(e => <li key={e.id}><button onClick={() => onEvent(e.id)}>{e.dateLabel} — {e.title}</button></li>)}</ul>}
      <a className="btn" href={s.url} target="_blank" rel="noopener noreferrer">Abrir fonte original ↗</a>
    </Modal>
  );
}
