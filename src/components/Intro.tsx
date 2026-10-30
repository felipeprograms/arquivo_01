import { SectionHead } from './ui';
import { go } from '../lib';
import { config } from '../config';

export function Featured() {
  return (
    <section className="section" aria-labelledby="dest">
      <SectionHead kicker="Em destaque" title={<span id="dest">Selecionado pela redação do dossiê</span>} />
      <article className="featured">
        <div>
          <p className="chips"><span className="chip">Processo judicial</span><span className="chip">Atualizado em {new Date(config.lastUpdate + 'T12:00').toLocaleDateString('pt-BR')}</span></p>
          <h3>O que há de <em>decisão</em> e o que é apenas <em>procedimento</em> sobre a situação do condenado</h3>
          <p>Em setembro de 2026, a imprensa noticiou que o Ministério Público de São Paulo abriu procedimento sobre a saúde mental do condenado, a menos de dois anos do fim previsto da pena. Segundo as reportagens, não há decisão judicial determinando internação.</p>
          <button className="btn" onClick={() => go('processo')}>Ver processo judicial</button>
        </div>
        <div className="feat-stat"><span className="mono">PREVISÃO DE TÉRMINO DA PENA</span><b>ago/2028</b><small className="mono">Fonte: TJSP via CNN Brasil · sujeita a decisões futuras</small></div>
      </article>
    </section>
  );
}

const missao = ['Reunir, em um só lugar, o que é publicamente documentado sobre o caso', 'Separar fato confirmado, informação de imprensa e divergência', 'Dar nome e humanidade às vítimas, sem expô-las', 'Mostrar os limites da pesquisa em vez de preenchê-los'];
const valores = ['Nada é inventado: sem diálogos, cenas ou conexões fabricadas', 'Sem glorificação do autor dos crimes', 'Respeito às famílias, à privacidade e aos direitos autorais', 'Linguagem séria, objetiva e respeitosa'];
export function About() {
  return (
    <section className="section">
      <SectionHead kicker="Sobre o dossiê" title={<>Propósito e <em>princípios editoriais</em></>}>Um único caso, tratado com rigor documental.</SectionHead>
      <div className="two">
        <article className="card"><p className="kicker mono">Propósito</p><h3>Compreender o caso por meio de fontes.</h3><ul className="plus">{missao.map(m => <li key={m}>{m}</li>)}</ul></article>
        <article className="card"><p className="kicker mono">Princípios</p><h3>O compromisso por trás de cada informação.</h3><ul className="plus">{valores.map(m => <li key={m}>{m}</li>)}</ul></article>
      </div>
    </section>
  );
}
