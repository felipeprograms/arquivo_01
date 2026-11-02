import { cronologia } from '../data/cronologia';
import { images } from '../data/images';
import { events } from '../data/events';
import { people } from '../data/people';
import { markers } from '../data/markers';
import { SectionHead, Modal, StatusBadge } from './ui';

export function TimelineSection({ onOpen, onSource }: { onOpen: (id: string) => void; onSource: (id: string) => void }) {
  return (
    <section id="linha-do-tempo" className="section">
      <SectionHead num="06" kicker="Linha do tempo" title={<>Ordem <em>cronológica</em></>}>Toque em um fato para ver detalhes, fontes e divergências.</SectionHead>
      <div className="crono">
        <ol className="crono-list">
          {cronologia.map(c => (
            <li key={c.id}>
              {c.head && <p className="crono-group">{c.head}</p>}
              <i className="crono-dot" aria-hidden />
              {c.date && <b className="crono-date">{c.date}</b>}
              <button type="button" className="crono-text" onClick={() => c.eventId && onOpen(c.eventId)}>{c.text}</button>
              {c.photos && (
                <div className={`crono-photos ${c.wide ? 'is-wide' : ''}`}>
                  {c.photos.map(k => images[k] && <img key={k} src={images[k]!.src} alt={images[k]!.alt} loading="lazy" />)}
                </div>
              )}
            </li>
          ))}
        </ol>
        <footer className="crono-foot"><button type="button" className="chip mono" onClick={() => onSource('S24')}>Fonte: G1 · infográfico de 23/08/2018</button></footer>
      </div>
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
