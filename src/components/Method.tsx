import { useState } from 'react';
import { sources } from '../data/sources';
import { SectionHead, Modal } from './ui';
import { config } from '../config';

export default function Method({ onSource }: { onSource: (id: string) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <section id="fontes" className="section narrow">
      <SectionHead num="14" kicker="Fontes" title={<>Fontes <em>consultadas</em></>}>
        Última atualização: {new Date(config.lastUpdate + 'T12:00').toLocaleDateString('pt-BR')}. Toda informação do dossiê vem de material secundário listado aqui.
      </SectionHead>
      <button type="button" className="btn" onClick={() => setOpen(true)}>Ver as {sources.length} fontes</button>
      {open && (
        <Modal title="Fontes consultadas" onClose={() => setOpen(false)}>
          <h3>Fontes consultadas</h3>
          <div className="tablewrap"><table className="facts wide"><thead><tr><th className="mono">ID</th><th className="mono">Fonte</th><th className="mono">Data</th><th className="mono">Tipo</th></tr></thead>
            <tbody>{sources.map(s => <tr key={s.id}><td className="mono"><button className="chip mono" onClick={() => { setOpen(false); onSource(s.id); }}>{s.id}</button></td><td><a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a><br /><small>{s.author}</small></td><td className="mono">{s.published}</td><td>{s.kind}</td></tr>)}</tbody></table></div>
        </Modal>
      )}
    </section>
  );
}
