import { useEffect, useState } from 'react';
import { reducedMotion } from '../lib';

// Botão fixo (canto inferior direito) que leva ao topo da página.
export default function ToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 500);
    on(); addEventListener('scroll', on, { passive: true });
    return () => removeEventListener('scroll', on);
  }, []);
  return (
    <button className={`to-top ${show ? 'show' : ''}`} aria-label="Voltar ao topo" tabIndex={show ? 0 : -1}
      onClick={() => { window.scrollTo({ top: 0, behavior: reducedMotion() ? 'auto' : 'smooth' }); history.replaceState(null, '', location.pathname); }}>
      ↑
    </button>
  );
}
