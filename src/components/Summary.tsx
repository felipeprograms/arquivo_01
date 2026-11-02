import { resumo, umMinuto, conflito, decisao } from '../data/analise';
import { StatusBadge, SectionHead } from './ui';
import Condenacoes from './Condenacoes';

export function OneMinute() {
  return (
    <section id="um-minuto" className="section">
      <SectionHead num="01" kicker="Para quem nunca ouviu falar do caso" title={<>O caso em <em>um minuto</em></>}>{umMinuto.lead}</SectionHead>
      <ul className="oneminute">{umMinuto.items.map(i => <li key={i.q}><b className="mono">{i.q}</b><span>{i.a}</span></li>)}</ul>
    </section>
  );
}

export default function Summary() {
  return (
    <section id="ficha" className="section">
      <SectionHead num="02" kicker={resumo.kicker} title={<>Ficha rápida <em>do processo</em></>} />
      <article className="brief">
        <dl className="brief-grid">
          {resumo.rows.map(r => (
            <div key={r.label} className={`brief-row ${r.status ? '' : 'is-empty'}`}>
              <dt className="mono">{r.label}</dt>
              <dd>{r.value}{r.status && <><br /><StatusBadge status={r.status} /></>}</dd>
            </div>
          ))}
        </dl>
        <Condenacoes />
        <p className="dim brief-note">{resumo.note}</p>
      </article>
    </section>
  );
}

export function Decisao() {
  return (
    <section id="decisao" className="section">
      <SectionHead num="10" kicker="Decisões e procedimentos" title={<>A decisão <em>do tribunal</em></>}>{decisao.lead}</SectionHead>
      <div className="stack">
        {decisao.items.map(i => <div className="row-card" key={i.t}><b className="mono">{i.t}</b><p>{i.d}</p><div><StatusBadge status={i.status} /></div></div>)}
      </div>
      <p className="limit"><b className="mono">LIMITE</b> {decisao.note}</p>
    </section>
  );
}

export function Conflito() {
  return (
    <section id="conflito" className="section">
      <SectionHead num="11" kicker="Direitos em choque" title={<>O conflito <em>constitucional</em></>}>{conflito.lead}</SectionHead>
      <div className="versus">
        {conflito.sides.map((s, k) => (
          <div key={s.h} className={`side side-${k}`}><span className="mono">{s.tag}</span><b>{s.h}</b><p>{s.p}</p></div>
        ))}
      </div>
      <p>{conflito.today}</p>
    </section>
  );
}
