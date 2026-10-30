import { sources } from '../data/sources';
import { SectionHead } from './ui';
import { config } from '../config';

const limits = [
  'Não foram acessados documentos primários: inquérito, denúncia, sentença, acórdãos, números processuais, laudos.',
  'Não foram consultados os arquivos de jornais da época (Folha, Estadão, O Globo) nem o Museu da Polícia Civil.',
  'Datas vêm de reportagens e enciclopédias colaborativas; quando divergem, o dossiê mostra as duas.',
  'O número de vítimas varia por fonte (7 condenações por morte × 11 mortes atribuídas); não foi adotado um número único.',
  'Faltam as datas de sentenças, juízes, promotores e câmaras responsáveis.',
  'As fotografias vêm de reportagens na internet, com origem e licença a confirmar; uso educacional autorizado pelos autores do trabalho. Imagens de documentos não estão incluídas.'
];

export default function Method({ onSource }: { onSource: (id: string) => void }) {
  return (
    <section id="fontes" className="section">
      <SectionHead num="14" kicker="Fontes e metodologia" title={<>Como este dossiê foi <em>construído</em></>}>
        Última atualização: {new Date(config.lastUpdate + 'T12:00').toLocaleDateString('pt-BR')}.
      </SectionHead>
      <div className="two">
        <article className="card"><p className="kicker mono">Critérios</p><h3>Como as fontes foram escolhidas</h3>
          <ul className="plus"><li>Prioridade a veículos de imprensa identificáveis e datados.</li><li>Cada afirmação traz o ID da fonte que a sustenta.</li><li>Rótulos: confirmado em mais de uma fonte, fonte única ou fontes divergem.</li><li>Blogs e enciclopédias colaborativas servem só para corroborar ou registrar divergência.</li></ul></article>
        <article className="card"><p className="kicker mono">Limitações</p><h3>O que ainda falta verificar</h3><ul className="plus">{limits.map(l => <li key={l}>{l}</li>)}</ul></article>
      </div>
      <div className="tablewrap"><table className="facts wide"><thead><tr><th className="mono">ID</th><th className="mono">Fonte</th><th className="mono">Data</th><th className="mono">Tipo</th><th className="mono">Acesso</th></tr></thead>
        <tbody>{sources.map(s => <tr key={s.id}><td className="mono"><button className="chip mono" onClick={() => onSource(s.id)}>{s.id}</button></td><td><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a><br /><small>{s.author}</small></td><td className="mono">{s.published}</td><td>{s.kind}</td><td className="mono">{s.accessed}</td></tr>)}</tbody></table></div>
    </section>
  );
}
