import { config } from '../config';
import { equipe } from '../data/equipe';

export default function Footer() {
  return (
    <>
      <section className="team" aria-label="Equipe">
        <p className="mono">Equipe</p>
        <ul>{equipe.map(n => <li key={n}>{n}</li>)}</ul>
      </section>
      <footer className="foot">
        <b>ARQUIVO 01</b>
        <p>Projeto documental independente. Não é veículo de notícias nem escritório de advocacia e não presta consultoria jurídica. Conteúdo baseado em fontes secundárias listadas no capítulo Fontes.</p>
        <p className="mono dim">Atualizado em {config.lastUpdate} · Mapa: OpenStreetMap / CARTO</p>
        <div className="devcard">
          <span className="mono">Desenvolvido por</span>
          <b>Felipe Fernandes <em>· dev</em></b>
          <a href="https://instagram.com/felipeprograms" target="_blank" rel="noopener noreferrer" aria-label="Instagram @felipeprograms">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" /></svg>
            @felipeprograms
          </a>
          <small>Contatos via direct</small>
        </div>
      </footer>
    </>
  );
}
