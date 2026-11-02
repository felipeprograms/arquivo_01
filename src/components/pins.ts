import type { MapMarker } from '../data/types';
import { people } from '../data/people';
import { images } from '../data/images';

const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
const first = (n: string) => { const w = n.split(' '); return w.length > 2 ? `${w[0]} ${w[w.length - 1]}` : n; };

// Cartões com foto, nome e idade exibidos ao lado do ponto selecionado no mapa.
export const pinsHtml = (mk: MapMarker | undefined | null) => {
  if (!mk) return '';
  const who = (mk.personIds ?? []).map(id => people.find(p => p.id === id)).filter(Boolean) as typeof people;
  if (!who.length) return '';
  return `<div class="pins">${who.map(p => {
    const img = images[p.id];
    return `<button type="button" class="pin" data-pid="${p.id}" aria-label="Abrir perfil: ${esc(p.name)}">${img ? `<img src="${img.src}" alt="${esc(p.name)}">` : '<span class="pin-ph"></span>'}<span class="pin-t"><b>${esc(first(p.name))}</b><i>${esc(p.tagline ?? '')}</i></span></button>`;
  }).join('')}</div>`;
};

export const bindPins = (el: HTMLElement, onPerson: (id: string) => void) => {
  el.addEventListener('click', e => { const b = (e.target as HTMLElement).closest('[data-pid]') as HTMLElement | null; if (b) { e.stopPropagation(); onPerson(b.dataset.pid!); } });
  el.addEventListener('pointerdown', e => e.stopPropagation());
};
