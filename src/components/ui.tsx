import { useEffect, useRef, useState, type ReactNode } from 'react';
import { images } from '../data/images';
import { statusLabel } from '../lib';
import { MosaicPortrait, NewsCover } from './Decor';
import type { Status } from '../data/types';

export function StatusBadge({ status }: { status: Status }) {
  if (status === 'divergente') return null;
  return <span className={`badge badge-${status}`}>{statusLabel[status]}</span>;
}

export function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', key);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = prev; };
  }, [onClose]);
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={alt} onClick={onClose}>
      <img src={src} alt={alt} onClick={e => e.stopPropagation()} />
      <button className="fab-back" onClick={e => { e.stopPropagation(); onClose(); }}>← Voltar</button>
    </div>
  );
}

export function ImageSlot({ id, label, className = '', ratio = '4/5', kind = 'scene', seed, doc, zoom = false }: { id: string; label: string; className?: string; ratio?: string; kind?: 'person' | 'doc' | 'scene'; seed?: string; doc?: { outlet: string; title: string; meta: string }; zoom?: boolean }) {
  const img = images[id];
  const [big, setBig] = useState(false);
  if (img) {
    return (
      <>
        <figure className={`slot ${className}`} style={{ aspectRatio: ratio }}>
          {zoom
            ? <button type="button" className="slot-zoom" onClick={() => setBig(true)} aria-label={`Ampliar foto: ${label}`}><img src={img.src} alt={img.alt} loading="lazy" /></button>
            : <img src={img.src} alt={img.alt} loading="lazy" />}
        </figure>
        {big && <Lightbox src={img.src} alt={img.alt} onClose={() => setBig(false)} />}
      </>
    );
  }
  if (kind === 'person') {
    return (
      <div className={`slot slot-mosaic ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={`Retrato reservado: ${label}`}>
        <MosaicPortrait seed={seed ?? id} />
        <span className="veil mono">ROSTO OCULTADO · FOTO RESERVADA</span>
      </div>
    );
  }
  if (kind === 'doc' && doc) {
    return <div className={`slot slot-cover ${className}`} style={{ aspectRatio: ratio }}><NewsCover {...doc} /></div>;
  }
  return (
    <div className={`slot slot-empty ${className}`} style={{ aspectRatio: ratio }} role="img" aria-label={`Espaço reservado: ${label}`}>
      <span className="mono">IMAGEM PENDENTE</span>
      <small>{label}</small>
    </div>
  );
}

export function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const prev = document.activeElement as HTMLElement | null;
    ref.current?.focus();
    const key = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', key);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', key); document.body.style.overflow = ''; prev?.focus(); };
  }, [onClose]);
  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal" role="dialog" aria-modal="true" aria-label={title} tabIndex={-1} ref={ref} onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Fechar">×</button>
        {children}
      </div>
      <button className="fab-back modal-fab" onClick={e => { e.stopPropagation(); onClose(); }}>← Voltar ao site</button>
    </div>
  );
}

export function SectionHead({ num, kicker, title, children }: { num?: string; kicker: string; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="sec-head">
      <p className="kicker mono">{num && <b>{num}</b>} {kicker}</p>
      <h2>{title}</h2>
      {children && <p className="sec-sub">{children}</p>}
    </header>
  );
}
