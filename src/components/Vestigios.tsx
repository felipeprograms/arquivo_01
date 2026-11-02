import { useState } from 'react';
import { traces } from '../data/media';
import { images } from '../data/images';
import { SectionHead, Lightbox } from './ui';

export default function Vestigios() {
  const [shown, setShown] = useState<Record<string, boolean>>({});
  const [big, setBig] = useState<string | null>(null);
  const allSens = traces.filter(t => t.sensitive);
  const all = allSens.every(t => shown[t.key]);
  const bigImg = big ? images[big] : null;
  return (
    <section id="vestigios" className="section">
      <SectionHead num="08" kicker="Registros da apuração" title={<>Vestígios das <em>investigações</em></>}>
        Fotografias do local, da perícia e das provas recolhidas pela polícia. Servem para documentar a investigação, não para expor as vítimas.
      </SectionHead>
      <p className="limit"><b className="mono">AVISO</b> Algumas imagens mostram restos mortais e podem ser perturbadoras. Elas ficam desfocadas até você tocar.
        <button type="button" className="btn ghost trace-all" onClick={() => setShown(Object.fromEntries(allSens.map(t => [t.key, !all])))}>{all ? 'Desfocar todas' : 'Mostrar todas'}</button>
      </p>
      <div className="traces">
        {traces.map((t, i) => {
          const img = images[t.key]; const blur = t.sensitive && !shown[t.key];
          return (
            <figure key={t.key} className={`trace ${i === 0 ? 'trace-lead' : ''}`}>
              <button type="button" className={`trace-btn ${blur ? 'is-blur' : ''}`} onClick={() => (blur ? setShown(s => ({ ...s, [t.key]: true })) : setBig(t.key))} aria-label={blur ? `Mostrar imagem sensível: ${t.caption}` : `Ampliar: ${t.caption}`}>
                {img ? <img src={img.src} alt={blur ? 'Imagem sensível desfocada' : img.alt} loading="lazy" /> : <span className="mono">IMAGEM PENDENTE</span>}
                {blur && <span className="trace-veil mono">CONTEÚDO SENSÍVEL<small>Toque para mostrar</small></span>}
              </button>
              <figcaption className="mono"><b>{String(i + 1).padStart(2, '0')}</b> {t.caption}</figcaption>
            </figure>
          );
        })}
      </div>
      {bigImg && <Lightbox src={bigImg.src} alt={bigImg.alt} onClose={() => setBig(null)} />}
    </section>
  );
}
