import { SectionHead } from './ui';
import { config } from '../config';

export function Contact() {
  const mail = config.contactEmail ? `mailto:${config.contactEmail}` : '';
  return (
    <section className="section">
      <SectionHead kicker="Contribuições" title={<>Corrija, <em>complemente</em></>}>Encontrou um erro, uma data diferente ou um documento oficial? Envie com a fonte.</SectionHead>
      <div className="two">
        <article className="card"><span className="num mono">01</span><h3>Correções e fontes</h3><p>Indique a informação, a fonte e o link. Atualize os arquivos em <code className="mono">src/data</code> para publicar a correção.</p>
          {mail ? <a className="btn" href={mail + '?subject=Correção ARQUIVO 01'}>Enviar correção</a> : <p className="dim mono">Defina contactEmail em src/config.ts para ativar o botão.</p>}</article>
        <article className="card"><span className="num mono">02</span><h3>Imagens e documentos</h3><p>Fotos e documentos só entram com licença ou autorização (e, no caso de vítimas, consentimento da família). Registre em <code className="mono">src/data/images.ts</code> com crédito e licença.</p></article>
      </div>
    </section>
  );
}
export default function Footer() {
  return (
    <footer className="foot">
      <b>ARQUIVO 01</b>
      <p>Projeto documental independente. Não é veículo de notícias nem escritório de advocacia e não presta consultoria jurídica. Conteúdo baseado em fontes secundárias listadas no capítulo 12; correções são bem-vindas.</p>
      <p className="mono dim">Atualizado em {config.lastUpdate} · Mapa: OpenStreetMap / CARTO</p>
    </footer>
  );
}
