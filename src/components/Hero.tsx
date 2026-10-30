import { Torn } from './Decor';
import SuspectMosaic from './SuspectMosaic';
import { events } from '../data/events';
import { sources } from '../data/sources';
import { markers } from '../data/markers';
import { go } from '../lib';

const tags = ['Conteúdo real', 'Fontes verificáveis', 'Datas conferidas', 'Divergências expostas', 'Respeito às vítimas'];

export default function Hero() {
  return (
    <section id="topo">
      <div className="hero">
        <div className="hero-in">
          <div className="hero-head">
            <p className="kicker mono"><b>DOSSIÊ INVESTIGATIVO Nº 001</b> · SÃO PAULO · 1998</p>
            <h1>Maníaco do Parque, a <em>investigação</em> que marcou São Paulo</h1>
          </div>
          <SuspectMosaic />
          <div className="hero-foot">
            <p className="lead">Uma reconstrução documental de um caso criminal brasileiro, dos acontecimentos à investigação e ao processo judicial.</p>
            <div className="cta">
              <button className="btn" onClick={() => go('mapa')}>Explorar o dossiê</button>
              <button className="btn ghost" onClick={() => go('linha-do-tempo')}>Ver linha do tempo</button>
            </div>
            <p className="warn mono">⚠ Este dossiê trata de crimes reais e pode conter descrições sensíveis. Não há imagens explícitas.</p>
          </div>
        </div>
      </div>
      <div className="band">
        <div className="marquee" aria-hidden><div>{[...tags, ...tags, ...tags].map((t, i) => <span key={i}>{t.toUpperCase()} <i>|</i></span>)}</div></div>
        <Torn color="#C52D3A" under="#E7E2DA" />
      </div>
      <dl className="stats">
        <div><dt className="mono">Eventos catalogados</dt><dd>{events.length}</dd></div>
        <div><dt className="mono">Fontes consultadas</dt><dd>{sources.length}</dd></div>
        <div><dt className="mono">Locais mapeados</dt><dd>{markers.length}</dd></div>
      </dl>
    </section>
  );
}
