import { images } from '../data/images';
import { MosaicPortrait, tornClip } from './Decor';

// Três recortes sem fundo e sem borda, emendados e escalonados (1 à esquerda, 2 mais baixa no meio, 3 mais alta à direita).
const shots = [
  { key: 'cut-retrato', cls: 'f-1', label: 'Retrato falado · 1998' },
  { key: 'cut-preso', cls: 'f-2', label: 'Na prisão · 1998' },
  { key: 'cut-hoje', cls: 'f-3', label: 'Atualmente' }
];

export default function SuspectMosaic() {
  return (
    <figure className="suspect">
      <div className="suspect-stage">
        <div className="suspect-bg bg-red" style={{ clipPath: tornClip(3) }} />
        <div className="suspect-bg bg-paper" style={{ clipPath: tornClip(9) }} />
        <div className="stagger">
          {shots.map(s => {
            const img = images[s.key];
            return (
              <a key={s.key} className={`cutout stag ${s.cls}`} href="#autor" aria-label={`${s.label} — ver seção do autor`}>
                {img ? <img src={img.src} alt={img.alt} loading="eager" /> : <MosaicPortrait seed={s.key} />}
                <span className="mono">{s.label}</span>
              </a>
            );
          })}
        </div>
      </div>
      <figcaption>
        <b>Francisco de Assis Pereira</b>
        <small className="mono">Investigado e condenado · conhecido como “Maníaco do Parque”</small>
      </figcaption>
    </figure>
  );
}
