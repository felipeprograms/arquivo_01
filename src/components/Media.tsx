import { images } from '../data/images';
import type { MediaItem, VideoItem } from '../data/media';
import { ImageSlot } from './ui';

export function Gallery({ items, ratio = '4/5' }: { items: MediaItem[]; ratio?: string }) {
  return (
    <div className={`gallery ${items.length === 1 ? 'single' : ''}`}>
      {items.map(m => (
        <figure key={m.key} className="gal-item">
          <ImageSlot id={m.key} kind="scene" label={m.caption} ratio={m.key.startsWith('cut-') ? ratio : 'auto'} className={m.key.startsWith('cut-') ? 'is-cut' : 'is-frame'} />
          <figcaption className="mono">{m.caption}{!images[m.key] ? ' · foto pendente' : ''}</figcaption>
        </figure>
      ))}
    </div>
  );
}

const yt = (u: string) => u.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/)?.[1];

export function VideoSlot({ v }: { v: VideoItem }) {
  const id = yt(v.url);
  return (
    <figure className="video-slot">
      {!v.url && <div className="video-empty mono" role="img" aria-label={`Vídeo pendente: ${v.title}`}>VÍDEO PENDENTE<small>Cole o link em src/data/media.ts</small></div>}
      {v.url && id && <iframe src={`https://www.youtube-nocookie.com/embed/${id}`} title={v.title} loading="lazy" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />}
      {v.url && !id && <video controls preload="metadata" src={v.url} />}
      <figcaption className="mono">{v.title}</figcaption>
    </figure>
  );
}
