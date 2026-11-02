import { sources } from '../data/sources';
import { Modal } from './ui';
import { events } from '../data/events';

const rel = { oficial: 'Fonte oficial (texto legal)', imprensa: 'Imprensa', blog: 'Blog / podcast (baixa confiabilidade)' };

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
