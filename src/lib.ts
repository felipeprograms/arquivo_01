import { sources } from './data/sources';
export const norm = (s: string) => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
export const srcById = (id: string) => sources.find(s => s.id === id);
export const statusLabel = { confirmado: 'Confirmado em mais de uma fonte', 'fonte-unica': 'Fonte única', divergente: 'Fontes divergem' } as const;
export const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
export const go = (id: string) => {
  const el = document.getElementById(id);
  if (el) { el.scrollIntoView({ behavior: reducedMotion() ? 'auto' : 'smooth', block: 'start' }); history.replaceState(null, '', '#' + id); }
};
