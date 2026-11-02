import { useState } from 'react';
import { authorSections } from '../data/author';
import { authorMedia, authorVideos } from '../data/media';
import { letters, lettersIntro, lettersNote } from '../data/letters';
import { pessoal } from '../data/analise';
import { SectionHead, StatusBadge, Modal } from './ui';
import { Gallery, VideoCarousel } from './Media';
import Condenacoes from './Condenacoes';

const topics = authorSections.filter(s => s.blocks.length > 0);
const galleries = authorSections.filter(s => s.media);

export default function Author({ onOpen }: { onSource: (id: string) => void; onOpen: (id: string) => void }) {
  const [cartas, setCartas] = useState(false);
  const [open, setOpen] = useState<string | null>(null);
  const cur = topics.find(t => t.id === open) || null;
  return (
    <section id="autor" className="section">
      <SectionHead num="04" kicker="Quem é o autor dos crimes" title={<>O autor do <em>crime</em></>} />
      <div className="author-panel">
        <aside className="ap-info card">
          <p className="kicker mono">{pessoal.title}</p>
          <table className="facts"><tbody>{pessoal.facts.map(x => <tr key={x.label}><th className="mono">{x.label}</th><td>{x.value}{x.status && <><br /><StatusBadge status={x.status} /></>}</td></tr>)}</tbody></table>
          <Condenacoes compact />
          <button className="btn ghost" onClick={() => onOpen('p-francisco')}>Abrir ficha completa</button>
        </aside>
        <div className="ap-more">
          <p className="kicker mono">{pessoal.more.title}</p>
          <p className="dim">{pessoal.more.hint}</p>
          <div className="ap-cards">
            {topics.map((t, i) => (
              <button key={t.id} type="button" className="ap-card" onClick={() => setOpen(t.id)}>
                <span className="mono ap-n">{String(i + 1).padStart(2, '0')}</span>
                <b>{t.title}</b>
                <span className="ap-go" aria-hidden>→</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="subsecs">
        {galleries.map(s => (
          <article key={s.id} id={`autor-${s.id}`} className="subsec">
            <h3>{s.title}</h3>
            {s.media && <Gallery items={authorMedia[s.media]} />}
            {s.id === 'infancia' && <VideoCarousel items={authorVideos} />}
          </article>
        ))}
      </div>

      <div className="tabs" role="tablist">
        <button role="tab" aria-selected={cartas} className={`tab ${cartas ? 'on' : ''}`} onClick={() => setCartas(!cartas)}>Cartas recebidas {cartas ? '−' : '+'}</button>
      </div>
      {cartas && (
        <div className="letters" role="tabpanel">
          <p className="dim">{lettersIntro}</p>
          {letters.map((l, k) => <blockquote key={k}>“{l}”</blockquote>)}
          <p className="dim">{lettersNote}</p>
        </div>
      )}

      {cur && (
        <Modal title={cur.title} onClose={() => setOpen(null)}>
          <h3>{cur.title}</h3>
          {cur.blocks.map((b, i) => <p key={i}>{b.text}</p>)}
          {cur.note && <p className="limit"><b className="mono">NOTA</b> {cur.note}</p>}
        </Modal>
      )}
    </section>
  );
}
