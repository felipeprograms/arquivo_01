import { useState } from 'react';
import { authorSections } from '../data/author';
import { authorMedia, authorVideos } from '../data/media';
import { letters, lettersIntro, lettersNote } from '../data/letters';
import { people } from '../data/people';
import { SectionHead, SourceChips, StatusBadge } from './ui';
import { Gallery, VideoSlot } from './Media';

export default function Author({ onSource, onOpen }: { onSource: (id: string) => void; onOpen: (id: string) => void }) {
  const [cartas, setCartas] = useState(false);
  const f = people.find(p => p.id === 'p-francisco')!;
  return (
    <section id="autor" className="section">
      <SectionHead num="03" kicker="Quem é o autor dos crimes" title={<>O autor do <em>crime</em></>}>
        Informações com finalidade documental, sem admiração ou romantização. Falas dele e de sua defesa são autodeclarações, não fatos verificados.
      </SectionHead>
      <div className="author-head">
        <p className="lead">{f.summary}</p>
        <table className="facts"><tbody>{f.facts.map(x => <tr key={x.label}><th className="mono">{x.label}</th><td>{x.value}<br /><StatusBadge status={x.status} /> <SourceChips ids={x.sourceIds} onOpen={onSource} /></td></tr>)}</tbody></table>
        <button className="btn ghost" onClick={() => onOpen('p-francisco')}>Abrir ficha completa</button>
      </div>
      <div className="subsecs">
        {authorSections.map(s => (
          <article key={s.id} id={`autor-${s.id}`} className="subsec">
            <h3>{s.title}</h3>
            {s.media && <Gallery items={authorMedia[s.media]} />}
            {s.blocks.map((b, i) => (
              <p key={i}>{b.text} {b.sources.length > 0 ? <SourceChips ids={b.sources} onOpen={onSource} /> : <span className="chip mono warn-chip">nota do dossiê</span>}</p>
            ))}
            {s.note && <p className="limit"><b className="mono">NOTA</b> {s.note}</p>}
            {s.id === 'infancia' && (
              <div className="videos">{authorVideos.map(v => <VideoSlot key={v.id} v={v} />)}</div>
            )}
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
          <p className="mono">FONTE <SourceChips ids={['S08']} onOpen={onSource} /></p>
        </div>
      )}
    </section>
  );
}
