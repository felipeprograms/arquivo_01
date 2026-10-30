import { useCallback, useEffect, useState } from 'react';
import ToTop from './components/ToTop';
import Header from './components/Header';
import Hero from './components/Hero';
import { Featured, About } from './components/Intro';
import Chapter from './components/Chapter';
import { VictimsSection, PersonModal } from './components/People';
import Author from './components/Author';
import MapSection from './components/MapSection';
import { TimelineSection, EventModal } from './components/Timeline';
import { ArchiveSection, SourceModal } from './components/Archive';
import Legal from './components/Legal';
import Rights from './components/Rights';
import Method from './components/Method';
import Footer from './components/Footer';
import Search, { type Hit } from './components/Search';
import { go } from './lib';
import { events } from './data/events';
import { people } from './data/people';
import { sources } from './data/sources';
import { markers } from './data/markers';
const valid = (t: string, id: string) => (t === 'evento' ? events : t === 'pessoa' ? people : sources).some(x => x.id === id);

type Open = { type: 'evento' | 'pessoa' | 'fonte'; id: string } | null;

export default function App() {
  const [open, setOpen] = useState<Open>(null);
  const [marker, setMarker] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);

  const show = useCallback((type: 'evento' | 'pessoa' | 'fonte', id: string) => { setOpen({ type, id }); history.replaceState(null, '', `#${type}-${id}`); }, []);
  const close = useCallback(() => { setOpen(null); history.replaceState(null, '', location.pathname); }, []);
  const selectMarker = useCallback((id: string | null) => setMarker(id), []);
  const toMarker = useCallback((id: string) => { setOpen(null); setMarker(id); go('mapa'); }, []);

  useEffect(() => {
    const read = () => {
      const h = location.hash.slice(1); const m = h.match(/^(evento|pessoa|fonte)-(.+)$/);
      if (m) { if (valid(m[1], m[2])) setOpen({ type: m[1] as 'evento', id: m[2] }); }
      else if (h.startsWith('local-')) { if (markers.some(x => x.id === h.slice(6))) { setMarker(h.slice(6)); setTimeout(() => go('mapa'), 50); } }
      else if (h) setTimeout(() => document.getElementById(h)?.scrollIntoView(), 50);
    };
    read(); addEventListener('hashchange', read);
    const key = (e: KeyboardEvent) => { if (e.key === '/' && !(e.target instanceof HTMLInputElement)) { e.preventDefault(); setSearching(true); } };
    addEventListener('keydown', key);
    return () => { removeEventListener('hashchange', read); removeEventListener('keydown', key); };
  }, []);

  const pick = (h: Hit) => { setSearching(false); if (h.type === 'capitulo') go(h.id); else show(h.type === 'evento' ? 'evento' : h.type === 'pessoa' ? 'pessoa' : 'fonte', h.id); };
  const onSource = (id: string) => show('fonte', id);

  return (
    <>
      <a href="#visao-geral" className="skip">Pular para o conteúdo</a>
      <Header onSearch={() => setSearching(true)} />
      <main>
        <Hero />
        <Featured />
        <About />
        <Chapter id="visao-geral" onSource={onSource} />
        <Chapter id="contexto" onSource={onSource} />
        <Author onSource={onSource} onOpen={id => show('pessoa', id)} />
        <TimelineSection onOpen={id => show('evento', id)} />
        <MapSection selected={marker} onSelect={selectMarker} onEvent={id => show('evento', id)} onPerson={id => show('pessoa', id)} />
        <VictimsSection onOpen={id => show('pessoa', id)} onSource={onSource} />
        <Chapter id="abordagens" onSource={onSource} />
        <Chapter id="investigacao" onSource={onSource} />
        <Chapter id="prisao" onSource={onSource} />
        <ArchiveSection onOpen={id => show('fonte', id)} />
        <Legal onSource={onSource} />
        <Chapter id="repercussao" onSource={onSource} />
        <Rights onSource={onSource} />
        <Method onSource={onSource} />
      </main>
      <Footer />
      <ToTop />
      {open?.type === 'evento' && <EventModal id={open.id} onClose={close} onSource={onSource} onPerson={id => show('pessoa', id)} onMarker={toMarker} />}
      {open?.type === 'pessoa' && <PersonModal id={open.id} onClose={close} onSource={onSource} onEvent={id => show('evento', id)} />}
      {open?.type === 'fonte' && <SourceModal id={open.id} onClose={close} onEvent={id => show('evento', id)} />}
      {searching && <Search onPick={pick} onClose={() => setSearching(false)} />}
    </>
  );
}
