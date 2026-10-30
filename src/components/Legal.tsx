import { SectionHead, StatusBadge } from './ui';

const rows = [
  ['Investigação', 'Conduzida pela polícia de São Paulo; há citação de delegado do DHPP. Documentos do inquérito não foram acessados.', 'fonte-unica', []],
  ['Prisão', 'Preso em 4 de agosto de 1998, em Itaqui (RS). Prisão preventiva pedida pelo caso de Selma, segundo a Gazeta SP.', 'confirmado', ['S02', 'S11']],
  ['Condenação', 'Condenado por homicídio, estupro, atentado violento ao pudor e ocultação de cadáver. A soma mais recente noticiada é de 285 anos, 11 meses e 10 dias.', 'divergente', ['S04', 'S05']],
  ['Teto de cumprimento', 'Limite de 30 anos pela lei vigente à época. O Canaltech menciona mudança para 40 anos em 2019; a aplicação ao caso não foi verificada.', 'divergente', ['S11', 'S13', 'S02']],
  ['Situação em 26/10/2026', 'Preso na Penitenciária de Iaras (SP), segundo a imprensa. Término previsto em agosto de 2028. MP-SP abriu procedimento sobre internação compulsória; segundo as reportagens, não há decisão judicial.', 'confirmado', ['S03', 'S04', 'S05', 'S06']],
  ['Rebelião de 2000', 'Foi dado como morto numa rebelião de presos em dezembro de 2000; após desencontros, a direção da prisão confirmou que estava vivo, jurado de morte por outros presos.', 'fonte-unica', []],
  ['Declarações do condenado', 'Diz considerar-se uma “pessoa normal”, afirma estar vivo por causa da fé e atribui o passado a “uma coisa maligna” (declarações dele, não verificadas). Segundo a fonte, Jussara, que o conheceu por carta, se dedica a resolver seus problemas jurídicos.', 'fonte-unica', []],
  ['Cumprimento da pena', 'Passou por várias penitenciárias do interior de São Paulo desde 2001 e está na Penitenciária Orlando Brando Filinto, em Iaras, desde 22 de maio de 2009.', 'fonte-unica', []],
  ['Memória pública', 'Pesquisa do IBOPE para o Ministério Público (2004): o caso foi o mais lembrado pelos brasileiros (76%); os assassinatos em série foram o crime mais lembrado entre 2006 e 2007.', 'fonte-unica', []]
] as const;

const penas = [['TecMundo', '260 anos', 'S12'], ['Band', 'mais de 280 anos', 'S13'], ['Gazeta SP', '284 anos', 'S01'], ['NC News', '285 anos, 11 meses e 10 dias', 'S04'], ['Aventuras na História', '285 anos e 11 meses', 'S05']];

export default function Legal({ onSource }: { onSource: (id: string) => void }) {
  return (
    <section id="processo" className="section">
      <SectionHead num="11" kicker="Processo judicial" title={<>Suspeita, acusação, condenação e <em>situação atual</em></>}>
        Cada etapa é tratada separadamente. Não foi localizado o número do processo, nem identificados os magistrados e as datas das sentenças em fontes verificáveis — por isso não são informados.
      </SectionHead>
      <div className="stack">
        {rows.map(([t, d, s, src]) => (
          <article className="row-card" key={t}><b className="mono">{t}</b><p>{d}</p><div><StatusBadge status={s} /></div></article>
        ))}
      </div>
      <h3 className="sub">Divergência sobre a pena total</h3>
      <div className="tablewrap"><table className="facts wide"><tbody>{penas.map(([a, b, s]) => <tr key={a}><th className="mono">{a}</th><td>{b}</td></tr>)}</tbody></table></div>
      <p className="dim">A diferença pode refletir atualizações, arredondamentos ou erros. Sem a sentença original, este dossiê adota a soma mais recente como referência e sinaliza as demais.</p>
    </section>
  );
}
