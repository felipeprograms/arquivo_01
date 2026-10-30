import { lazy, Suspense, useState } from 'react';
import { markers } from '../data/markers';
import { events } from '../data/events';
import { chapters } from '../data/chapters';
import { SectionHead, ImageSlot } from './ui';
import { people } from '../data/people';
import { go } from '../lib';

const Globe = lazy(() => import('./Globe'));
const FlatMap = lazy(() => import('./FlatMap'));
type View = 'globo' | 'plano' | 'lista';
const kindLabel = { evento: 'Acontecimento', investigacao: 'Investigação', localizacao: 'Localização de vítimas', marco: 'Marco da investigação', institucional: 'Institucional' };

export default function MapSection({ selected, onSelect, onEvent, onPerson }: { selected: string | null; onSelect: (id: string | null) => void; onEvent: (id: string) => void; onPerson: (id: string) => void }) {
  const [view, setView] = useState<View>(() => (window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'lista' : 'globo'));
  const [failed, setFailed] = useState(false);
  const m = markers.find(x => x.id === selected) || null;
  const related = m ? events.filter(e => e.markerId === m.id) : [];
  const who = m ? (m.personIds ?? []).map(id => people.find(p => p.id === id)!).filter(Boolean) : [];
  const ch = m ? chapters.find(c => c.id === m.chapter) : null;

  return (
    <section id="mapa" className="section">
      <SectionHead num="05" kicker="Mapa investigativo" title={<>Onde cada fato <em>é documentado</em></>}>
        Use o globo 3D, o mapa plano ou a lista. Os pontos são áreas e municípios públicos — não endereços residenciais — e cada um indica sua limitação.
      </SectionHead>
      <div className="seg" role="tablist" aria-label="Modo de visualização">
        {(['globo', 'plano', 'lista'] as View[]).map(v => (
          <button key={v} role="tab" aria-selected={view === v} className={view === v ? 'on' : ''} onClick={() => setView(v)}>
            {v === 'globo' ? 'Globo 3D' : v === 'plano' ? 'Mapa plano' : 'Lista simplificada'}
          </button>
        ))}
      </div>
      <div className="map-grid">
        <div className="map-stage">
          {view === 'globo' && !failed && <Suspense fallback={<p className="state mono">Carregando globo…</p>}><Globe markers={markers} selectedId={selected} onSelect={onSelect} onFail={() => { setFailed(true); setView('lista'); }} /></Suspense>}
          {view === 'plano' && <Suspense fallback={<p className="state mono">Carregando mapa…</p>}><FlatMap markers={markers} selectedId={selected} onSelect={onSelect} /></Suspense>}
          {view === 'lista' && (
            <div className="state-list">
              {failed && <p className="state mono">Seu dispositivo não suporta WebGL. Exibindo a versão simplificada.</p>}
              <p className="mono dim">Versão sem gráficos pesados: selecione um local.</p>
            </div>
          )}
        </div>
        <aside className="map-side" aria-live="polite">
          <ul className="marker-list">
            {markers.map(mk => (
              <li key={mk.id}><button className={selected === mk.id ? 'on' : ''} onClick={() => onSelect(mk.id)}><i /> <span>{mk.name}</span><small className="mono">{kindLabel[mk.kind]}</small></button></li>
            ))}
          </ul>
          {m ? (
            <article className="panel">
              <p className="kicker mono">{kindLabel[m.kind]} · {m.period}</p>
              <h3>{m.name}</h3>
              <p>{m.description}</p>
              <p className="limit"><b className="mono">LIMITAÇÃO</b> {m.limitation}</p>
              {related.length > 0 && <div><b className="mono">EVENTOS</b><ul className="rel">{related.map(e => <li key={e.id}><button onClick={() => onEvent(e.id)}>{e.dateLabel} — {e.title}</button></li>)}</ul></div>}
              {who.length > 0 && (
                <div className="map-people">
                  <b className="mono">{who[0].role === 'vitima' ? 'VÍTIMAS LIGADAS A ESTE LOCAL' : 'INVESTIGADO'}</b>
                  {who.map(p => (
                    <button key={p.id} className="mp-card" onClick={() => onPerson(p.id)}>
                      <ImageSlot id={p.id} kind="person" label={p.name} ratio="1/1" className="mp-photo" />
                      <span className="mp-info">
                        <b>{p.name}</b>
                        {p.tagline && <i>{p.tagline}</i>}
                        {p.profile?.approach[0] && <small>{p.profile.approach[0]}</small>}
                        {p.profile?.found[0] && <small>{p.profile.found[0]}</small>}
                        {!p.profile && <small>{p.summary}</small>}
                        <em className="mono">Ver perfil completo →</em>
                      </span>
                    </button>
                  ))}
                </div>
              )}
              {ch && <button className="btn ghost" onClick={() => go(ch.id)}>Ir ao capítulo {ch.num} — {ch.title}</button>}
            </article>
          ) : <p className="panel dim">Selecione um marcador no mapa ou na lista para ver data, descrição, pessoas ligadas ao local e limitações.</p>}
        </aside>
      </div>
    </section>
  );
}
