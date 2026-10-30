import { config } from '../config';

export default function Footer() {
  return (
    <footer className="foot">
      <b>ARQUIVO 01</b>
      <p>Projeto documental independente. Não é veículo de notícias nem escritório de advocacia e não presta consultoria jurídica. Conteúdo baseado em fontes secundárias listadas no capítulo Fontes e metodologia.</p>
      <p className="mono dim">Atualizado em {config.lastUpdate} · Mapa: OpenStreetMap / CARTO</p>
    </footer>
  );
}
