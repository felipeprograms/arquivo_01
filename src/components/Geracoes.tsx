import { geracoes } from '../data/analise';

export default function Geracoes() {
  const p = geracoes.perspectiva;
  return (
    <div className="geracoes" id="geracoes">
      <p className="kicker mono">{geracoes.kicker}</p>
      <h3 className="sub">{geracoes.title}</h3>
      <p className="dim">{geracoes.lead}</p>
      <div className="gen-grid">
        {geracoes.cards.map(c => (
          <article key={c.n} className="card gen">
            <span className="gen-n">{c.n}</span>
            <p className="kicker mono">{c.era}</p>
            <h4>{c.name}</h4>
            <p className="mono gen-link">{c.link}</p>
            <p>{c.p}</p>
            <p className="gen-caso">{c.caso}</p>
          </article>
        ))}
      </div>

      <article className="persp">
        <p className="kicker mono">Perspectiva histórica e gerações de direitos</p>
        <h3 className="sub">{p.title}</h3>
        <p>{p.lead}</p>

        <ol className="moments">
          {p.momentos.map(m => (
            <li key={m.n} className="moment">
              <span className="moment-n">{m.n}</span>
              <div>
                <p className="mono moment-g">{m.ger}</p>
                <h4>{m.h}</h4>
                <p>{m.p}</p>
                <p className="mono moment-art">{m.art}</p>
              </div>
            </li>
          ))}
        </ol>

        <h4 className="persp-h">{p.matrizTitle}</h4>
        <div className="tablewrap"><table className="matriz"><thead><tr><th className="mono">Geração</th><th className="mono">Valor</th><th className="mono">Quem invoca</th><th className="mono">Argumento</th><th className="mono">Limite</th></tr></thead>
          <tbody>{p.matriz.map(r => <tr key={r.g}><td className="matriz-g">{r.g}</td><td><b>{r.valor}</b></td><td>{r.quem}</td><td>{r.arg}</td><td>{r.limite}</td></tr>)}</tbody></table></div>

        <h4 className="persp-h">{p.ladosTitle}</h4>
        <div className="lados">{p.lados.map(l => <div key={l.h} className="lado"><b>{l.h}</b><p>{l.p}</p></div>)}</div>

        <h4 className="persp-h">{p.linhaTitle}</h4>
        <ol className="hist">{p.linha.map(l => <li key={l.ano}><b className="mono">{l.ano}</b><span>{l.t}</span></li>)}</ol>
        <p className="dim">{p.linhaNote}</p>

        <div className="persp-end">
          <div><h4>Conflito entre gerações</h4><p>{p.conflito}</p></div>
          <div><h4>Visão teórica</h4><p>{p.visao}</p></div>
        </div>
      </article>
    </div>
  );
}
