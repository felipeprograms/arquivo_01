import { images } from '../data/images';
import { Asterisk } from './Decor';

// Foto de identificação em destaque, apresentada como uma ficha de arquivo (pasta + clipe + carimbo).
export default function HeroPortrait() {
  const img = images['hero-atual'];
  return (
    <figure className="dossier">
      <Asterisk size={260} style={{ position: 'absolute', right: '-14%', top: '-8%', opacity: 0.16, zIndex: 0 }} />
      <span className="dossier-tab mono">ARQUIVO Nº 001</span>
      <div className="dossier-back" aria-hidden />
      <div className="dossier-card">
        <span className="dossier-clip" aria-hidden />
        {img && <img src={img.src} alt={img.alt} loading="eager" />}
        <span className="dossier-stamp">CONDENADO</span>
      </div>
      <span className="dossier-pin mono">SÃO PAULO · 1998</span>
      <figcaption>
        <b>Francisco de Assis Pereira</b>
        <small className="mono">Investigado e condenado · conhecido como “Maníaco do Parque”</small>
      </figcaption>
    </figure>
  );
}
