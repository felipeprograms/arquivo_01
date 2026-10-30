import { useRef } from 'react';
import { tornClip } from './Decor';
import { Gallery } from './Media';
import { survivor } from '../data/survivor';
import { people } from '../data/people';
import { events } from '../data/events';
import { SectionHead, ImageSlot, Modal, SourceChips, StatusBadge } from './ui';

const colors = ['#2f4fd8', '#b3202c', '#6b3fc2', '#c4710f', '#16825b', '#c23b86'];
const NA = 'Não consta nas fontes consultadas.';

export function VictimsSection({ onOpen, onSource }: { onOpen: (id: string) => void; onSource: (id: string) => void }) {
  const rail = useRef<HTMLDivElement>(null);
  const victims = people.filter(p => p.role === 'vitima');
  return (
    <section id="vitimas" className="section">
      <div className="paper-sheet">
        <div className="ps-bg ps-red" style={{ clipPath: tornClip(3) }} />
        <div className="ps-bg ps-paper" style={{ clipPath: tornClip(9) }} />
        <div className="ps-in">
          <SectionHead num="06" kicker="As vítimas e suas histórias" title={<>Quem foram <em>elas</em></>}>
            Perfis com informações publicamente documentadas. Toque em um nome para ver identificação, biografia, abordagem, morte e localização do corpo. Lacunas são indicadas, nunca preenchidas com suposições.
          </SectionHead>
          <div className="pcarousel">
            <button className="parrow left" aria-label="Anterior" onClick={() => rail.current?.scrollBy({ left: -300, behavior: 'smooth' })}>‹</button>
            <div className="prail" ref={rail} tabIndex={0} aria-label="Vítimas">
              {victims.map((p, n) => (
                <button key={p.id} className="pcard" style={{ ['--c' as string]: colors[n % colors.length] }} onClick={() => onOpen(p.id)}>
                  <ImageSlot id={p.id} kind="person" label={p.name} ratio="4/5" />
                  <span className="lab">Vítima</span>
                  <span className="bar" />
                  <b>{p.name}</b>
                  {p.tagline && <i>{p.tagline}</i>}
                </button>
              ))}
            </div>
            <button className="parrow right" aria-label="Próxima" onClick={() => rail.current?.scrollBy({ left: 300, behavior: 'smooth' })}>›</button>
          </div>
        </div>
      </div>
      <article id="sobrevivente" className="subsec survivor">
        <p className="kicker mono">Sobrevivente</p>
        <h3>{survivor.name}</h3>
        <Gallery items={[survivor.photo]} />
        <p className="lead">{survivor.intro}</p>
        {survivor.blocks.map(b => (
          <div key={b.h} className="bio"><b className="mono">{b.h.toUpperCase()}</b>{b.p.map((t, k) => <p key={k}>{t.text} <SourceChips ids={t.sources} onOpen={onSource} /></p>)}</div>
        ))}
        <p className="limit"><b className="mono">NOTA</b> {survivor.note}</p>
      </article>
    </section>
  );
}

export function PersonModal({ id, onClose, onSource, onEvent }: { id: string; onClose: () => void; onSource: (s: string) => void; onEvent: (e: string) => void }) {
  const p = people.find(x => x.id === id)!;
  return (
    <Modal title={p.name} onClose={onClose}>
      <div className="modal-split">
        <div className="modal-photos">
          {!p.gallery && <ImageSlot id={p.id} kind="person" label={p.name} ratio="4/5" />}
          {p.gallery?.map(g => <div key={g.id} className="photo-extra"><ImageSlot id={g.id} kind="person" label={g.label} ratio="4/5" /><small className="mono">{g.label}</small></div>)}
        </div>
        <div>
          <p className="kicker mono">{p.role === 'vitima' ? 'VÍTIMA' : 'INVESTIGADO / CONDENADO'}</p>
          <h3>{p.name}</h3><p>{p.summary}</p>
          {p.profile && <VictimProfile p={p} onSource={onSource} />}
          <b className="mono">DADOS E CONFIABILIDADE</b>
          <table className="facts"><tbody>{p.facts.map(f => <tr key={f.label}><th className="mono">{f.label}</th><td>{f.value}<br /><StatusBadge status={f.status} /> <SourceChips ids={f.sourceIds} onOpen={onSource} /></td></tr>)}</tbody></table>
          {p.limitation && <p className="limit"><b className="mono">LIMITAÇÃO</b> {p.limitation}</p>}
          {p.eventIds.length > 0 && <b className="mono">NA LINHA DO TEMPO</b>}
          <ul className="rel">{p.eventIds.map(e => { const ev = events.find(x => x.id === e)!; return <li key={e}><button onClick={() => onEvent(e)}>{ev.dateLabel} — {ev.title}</button></li>; })}</ul>
        </div>
      </div>
    </Modal>
  );
}

function VictimProfile({ p, onSource }: { p: typeof people[number]; onSource: (s: string) => void }) {
  const f = p.profile!;
  const now = f.ageThen == null ? 'não informada' : `cerca de ${f.ageThen + 28} anos (estimativa a partir da idade em 1998; sem data de nascimento)`;
  const list = (a: string[]) => (a.length ? a : [NA]).map((t, k) => <p key={k}>{t}</p>);
  return (
    <div className="vprofile">
      <section><h4 className="mono">1 · IDENTIFICAÇÃO</h4>
        <table className="facts"><tbody>
          <tr><th className="mono">Nome completo</th><td>{f.fullName}</td></tr>
          <tr><th className="mono">Idade na época</th><td>{f.ageThen == null ? 'Não informada' : `${f.ageThen} anos`}</td></tr>
          <tr><th className="mono">Idade que teria hoje</th><td>{now}</td></tr>
          <tr><th className="mono">Ocupação</th><td>{f.occupation}</td></tr>
        </tbody></table></section>
      {p.bio && <section><h4 className="mono">2 · BIOGRAFIA</h4>{p.bio.flatMap(s => s.p).map((t, k) => <p key={k}>{t}</p>)}{p.bioSources && <p className="mono">FONTE <SourceChips ids={p.bioSources} onOpen={onSource} /></p>}</section>}
      <section><h4 className="mono">3 · COMO FOI ABORDADA</h4>{list(f.approach)}</section>
      <section><h4 className="mono">4 · COMO MORREU</h4>{list(f.death)}</section>
      <section><h4 className="mono">5 · DEPOIS DA MORTE</h4>{list(f.post)}</section>
      <section><h4 className="mono">6 · QUANTO TEMPO ATÉ ENCONTRAREM O CORPO</h4>{list(f.found)}</section>
    </div>
  );
}
