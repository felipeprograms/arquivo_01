import { chapters } from '../data/chapters';
import { content } from '../data/content';
import { SectionHead, SourceChips } from './ui';

export default function Chapter({ id, onSource }: { id: string; onSource: (id: string) => void }) {
  const c = chapters.find(x => x.id === id)!; const t = content[id];
  return (
    <section id={id} className="section narrow">
      <SectionHead num={c.num} kicker="Capítulo" title={c.title}>{t.lead}</SectionHead>
      <div className="prose">
        {t.paras.map((p, i) => (
          <p key={i}>{p.text} {p.sources.length > 0 ? <SourceChips ids={p.sources} onOpen={onSource} /> : <span className="chip mono warn-chip">sem fonte primária acessada</span>}</p>
        ))}
      </div>
    </section>
  );
}
