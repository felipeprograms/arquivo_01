import { rights, rightsLabel } from '../data/rights';
import { SectionHead } from './ui';
import Geracoes from './Geracoes';

const [vit, con] = rights;
const lists = [
  { id: 'vitimas', kicker: 'Direitos violados e garantidos', title: 'Às vítimas', intro: vit.intro, items: vit.items.filter(i => i.state !== 'debate').map(i => ({ ...i, who: '' })) },
  { id: 'condenado', kicker: 'Direitos garantidos', title: 'Ao condenado', intro: con.intro, items: con.items.filter(i => i.state !== 'debate').map(i => ({ ...i, who: '' })) },
  { id: 'debate', kicker: 'Sem violação comprovada', title: 'Em debate', intro: 'Pontos que a Constituição protege, mas cuja violação não está comprovada nas fontes do dossiê: ficam em discussão.', items: [...vit.items.filter(i => i.state === 'debate').map(i => ({ ...i, who: 'vítimas' })), ...con.items.filter(i => i.state === 'debate').map(i => ({ ...i, who: 'condenado' }))] }
];

export default function Rights({ onSource }: { onSource: (id: string) => void }) {
  return (
    <section id="direitos" className="section">
      <SectionHead num="12" kicker="Constituição Federal de 1988" title={<>Direitos <em>fundamentais</em></>}>
        Quais direitos foram violados e quais a Constituição garante a todos os envolvidos: vítimas e condenado.
      </SectionHead>
      <Geracoes />
      <h3 className="sub">Direitos violados, garantidos e em debate</h3>
      <div className="rights-legend" aria-label="Legenda">{(Object.keys(rightsLabel) as (keyof typeof rightsLabel)[]).map(k => <span key={k} className={`rbadge r-${k}`}>{rightsLabel[k]}</span>)}</div>
      <div className="rights-grid">
        {lists.map(g => (
          <article key={g.id} className={`card rcard rc-${g.id}`}>
            <p className="kicker mono">{g.kicker}</p>
            <h3>{g.title}</h3>
            <p className="dim">{g.intro}</p>
            <ul className="rlist">
              {g.items.map(i => (
                <li key={g.id + i.title} className={`r-${i.state}`}>
                  <span className="mono art">{i.art}{i.who ? ` · ${i.who}` : ''}</span>
                  <b>{i.title}</b>
                  <p>{i.text}</p>
                  <span className={`rbadge r-${i.state}`}>{rightsLabel[i.state]}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="dim">Obs.: o art. 5º, LXXVIII (duração razoável do processo) foi incluído em 2004 e não se aplica ao período inicial do caso.</p>
    </section>
  );
}
