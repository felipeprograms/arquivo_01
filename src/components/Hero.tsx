import { Torn } from './Decor';
import HeroPortrait from './HeroPortrait';
import { go } from '../lib';

const tags = ['Direitos fundamentais', 'Conflito constitucional', 'Decisão do tribunal', 'Conflito entre gerações', 'Curso processual'];

export default function Hero() {
  return (
    <section id="topo">
      <div className="hero">
        <div className="hero-in">
          <div className="hero-copy">
            <p className="kicker mono"><b>DOSSIÊ INVESTIGATIVO Nº 001</b> · SÃO PAULO · 1998</p>
            <h1>Maníaco do Parque, a <em>investigação</em> que marcou São Paulo</h1>
            <p className="lead">Uma reconstrução documental de um caso criminal brasileiro, dos acontecimentos à investigação e ao processo judicial.</p>
            <div className="cta">
              <button className="btn" onClick={() => go('mapa')}>Explorar o dossiê</button>
              <button className="btn ghost" onClick={() => go('linha-do-tempo')}>Ver linha do tempo</button>
            </div>
            <p className="warn mono">⚠ Este dossiê trata de crimes reais e pode conter descrições sensíveis. Não há imagens explícitas.</p>
          </div>
          <HeroPortrait />
        </div>
      </div>
      <div className="band">
        <div className="marquee" aria-hidden><div>{[...tags, ...tags, ...tags].map((t, i) => <span key={i}>{t.toUpperCase()} <i>|</i></span>)}</div></div>
        <Torn color="#C52D3A" under="#E7E2DA" />
      </div>
    </section>
  );
}
