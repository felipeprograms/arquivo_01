import { SectionHead, StatusBadge } from './ui';

const rows = [
  ['Investigação', 'Conduzida pela polícia de São Paulo; há citação de delegado do DHPP. Documentos do inquérito não foram acessados.', 'fonte-unica', []],
  ['Prisão', 'Preso em 4 de agosto de 1998, em Itaqui (RS). Prisão preventiva pedida pelo caso de Selma, segundo a Gazeta SP.', 'confirmado', ['S02', 'S11']],
  ['Rebelião de 2000', 'Foi dado como morto numa rebelião de presos em dezembro de 2000; após desencontros, a direção da prisão confirmou que estava vivo, jurado de morte por outros presos.', 'fonte-unica', []],
  ['Cumprimento da pena', 'Passou por várias penitenciárias do interior de São Paulo desde 2001 e está na Penitenciária Orlando Brando Filinto, em Iaras, desde 22 de maio de 2009.', 'fonte-unica', []],
  ['Memória pública', 'Pesquisa do IBOPE para o Ministério Público (2004): o caso foi o mais lembrado pelos brasileiros (76%); os assassinatos em série foram o crime mais lembrado entre 2006 e 2007.', 'fonte-unica', []]
] as const;

export default function Legal({ onSource }: { onSource: (id: string) => void }) {
  return (
    <section id="processo" className="section">
      <SectionHead num="09" kicker="Processo judicial" title={<>Suspeita, acusação, condenação e <em>situação atual</em></>}></SectionHead>
      <div className="stack">
        {rows.map(([t, d, s, src]) => (
          <article className="row-card" key={t}><b className="mono">{t}</b><p>{d}</p><div><StatusBadge status={s} /></div></article>
        ))}
      </div>
    </section>
  );
}
