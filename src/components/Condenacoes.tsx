import { condenacoes as c } from '../data/analise';

export default function Condenacoes({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`sentence ${compact ? 'is-compact' : ''}`}>
      <p className="mono sentence-h">{compact ? 'Condenado por' : c.title}</p>
      <ul className="trials">
        {c.julgamentos.map(j => (
          <li key={j.label}>
            <div className="trial-top"><span className="sy-l mono">{j.label}</span><b className="sy-a">{j.anos}</b></div>
            <ul className="trial-crimes">{j.crimes.map(x => <li key={x}>{x}</li>)}</ul>
            {!compact && <small>{j.detalhe}</small>}
          </li>
        ))}
      </ul>
      <p className="sentence-total"><span className="mono">Pena total (G1)</span><b>{c.total}</b></p>
      <p className="sentence-note">{c.crimesNote} {c.somaNote}</p>
    </div>
  );
}
