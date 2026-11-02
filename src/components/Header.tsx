import { useEffect, useState } from 'react';
import { chapters } from '../data/chapters';
import { go } from '../lib';



const top = [['um-minuto', 'O caso em um minuto'], ['ficha', 'Ficha rápida'], ['visao-geral', 'Visão geral'], ['autor', 'O autor do crime'], ['vitimas', 'Quem foram elas'], ['linha-do-tempo', 'Ordem cronológica'], ['mapa', 'Mapa'], ['vestigios', 'Vestígios'], ['processo', 'Processo'], ['decisao', 'Decisão do tribunal'], ['conflito', 'Conflito constitucional'], ['direitos', 'Direitos fundamentais'], ['repercussao', 'Repercussões'], ['fontes', 'Fontes']];

export default function Header({ onSearch }: { onSearch: () => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const [prog, setProg] = useState(0);
  useEffect(() => {
    const onScroll = () => { const h = document.documentElement; setProg(h.scrollTop / Math.max(1, h.scrollHeight - h.clientHeight)); };
    onScroll(); addEventListener('scroll', onScroll, { passive: true });
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -55% 0px' });
    chapters.forEach(c => { const el = document.getElementById(c.id); el && io.observe(el); });
    return () => { removeEventListener('scroll', onScroll); io.disconnect(); };
  }, []);
  const nav = (id: string) => { setOpen(false); go(id); };
  return (
    <>
      <header className="top">
        <div className="top-in">
          <a className="brand" href="#topo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0 }); history.replaceState(null, '', location.pathname); }}>
            <span className="brand-mark mono">01</span><span><b>ARQUIVO 01</b><small className="mono">MANÍACO DO PARQUE</small></span>
          </a>
          <nav className="top-nav" aria-label="Navegação principal">
            {top.map(([id, l]) => <a key={id} href={'#' + id} className={active === id ? 'on' : ''} onClick={e => { e.preventDefault(); nav(id); }}>{l}</a>)}
          </nav>
          <div className="top-act">
            <button className="icon-btn" onClick={onSearch} aria-label="Pesquisar no dossiê">Buscar <kbd className="mono">/</kbd></button>
            <button className="icon-btn" aria-expanded={open} aria-controls="drawer" onClick={() => setOpen(!open)}>Capítulos</button>
          </div>
        </div>
        <div className="progress" style={{ transform: `scaleX(${prog})` }} aria-hidden />
      </header>
      {open && <div className="drawer-back" onClick={() => setOpen(false)} />}
      <nav id="drawer" className={`drawer ${open ? 'open' : ''}`} aria-label="Capítulos do dossiê" aria-hidden={!open}>
        <p className="mono dim">{chapters.length} CAPÍTULOS</p>
        <ol>{chapters.map(c => <li key={c.id}><a href={'#' + c.id} tabIndex={open ? 0 : -1} className={active === c.id ? 'on' : ''} onClick={e => { e.preventDefault(); nav(c.id); }}><span className="mono">{c.num}</span>{c.title}</a></li>)}</ol>
      </nav>
    </>
  );
}
