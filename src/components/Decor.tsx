import type { CSSProperties } from 'react';
import { images } from '../data/images';

function rng(seed: number) { let s = seed % 2147483647 || 1; return () => { s = (s * 16807) % 2147483647; return s / 2147483647; }; }
export const hash = (str: string) => { let h = 7; for (const c of str) h = (h * 31 + c.charCodeAt(0)) % 2147483647; return h || 1; };

/** Polígono "papel rasgado" para clip-path */
export function tornClip(seed: number): string {
  const r = rng(seed); const p: string[] = [];
  for (let x = 0; x <= 100; x += 4) p.push(`${x}% ${(r() * 3).toFixed(1)}%`);
  for (let y = 4; y <= 100; y += 6) p.push(`${(100 - r() * 3).toFixed(1)}% ${y}%`);
  for (let x = 100; x >= 0; x -= 4) p.push(`${x}% ${(100 - r() * 3).toFixed(1)}%`);
  for (let y = 96; y >= 4; y -= 6) p.push(`${(r() * 3).toFixed(1)}% ${y}%`);
  return `polygon(${p.join(',')})`;
}

/** Borda rasgada em SVG (faixa vermelha sobre fundo escuro, com sobra de papel por baixo) */
export function Torn({ color, under, flip = false }: { color: string; under: string; flip?: boolean }) {
  const mk = (seed: number, off: number) => {
    const r = rng(seed); const pts: string[] = [];
    for (let x = 0; x <= 1200; x += 9) pts.push(`${x} ${(6 + r() * 14 + off).toFixed(1)}`);
    return 'M0 0 L' + pts.join(' L') + ' L1200 0 Z';
  };
  return (
    <svg className={`torn ${flip ? 'torn-bot' : 'torn-top'}`} viewBox="0 0 1200 44" preserveAspectRatio="none" aria-hidden>
      <path d={mk(11, 8)} fill={under} /><path d={mk(5, 0)} fill={color} />
    </svg>
  );
}

/** Retrato em mosaico: silhueta anônima, neutra, com blocos e leve desfoque (não representa ninguém) */
export function MosaicPortrait({ seed }: { seed: string }) {
  const r = rng(hash(seed)); const id = 'bl' + hash(seed); const cells: JSX.Element[] = [];
  const hairDark = 12 + Math.floor(r() * 14);
  for (let j = 0; j < 20; j++) for (let i = 0; i < 16; i++) {
    const cx = i * 10 + 5, cy = j * 10 + 5;
    const head = ((cx - 80) / 38) ** 2 + ((cy - 68) / 48) ** 2 <= 1;
    const neck = cx >= 64 && cx <= 96 && cy >= 100 && cy <= 140;
    const body = ((cx - 80) / 80) ** 2 + ((cy - 215) / 85) ** 2 <= 1;
    const v = r() * 7;
    let fill = `hsl(215 25% ${12 + v / 2}%)`;
    if (body) fill = `hsl(215 14% ${30 + v}%)`;
    if (head || neck) fill = cy < 42 && head ? `hsl(215 12% ${hairDark + v}%)` : `hsl(215 10% ${54 + v}%)`;
    cells.push(<rect key={`${i}-${j}`} x={i * 10} y={j * 10} width="10.4" height="10.4" fill={fill} />);
  }
  return (
    <svg viewBox="0 0 160 200" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Retrato reservado, rosto oculto por mosaico">
      <defs><filter id={id}><feGaussianBlur stdDeviation="0.9" /></filter></defs>
      <g filter={`url(#${id})`} shapeRendering="crispEdges">{cells}</g>
    </svg>
  );
}

/** Capa tipográfica de documento: NÃO é reprodução do documento */
export function NewsCover({ outlet, title, meta }: { outlet: string; title: string; meta: string }) {
  const r = rng(hash(outlet + title));
  return (
    <div className="cover">
      <b>{outlet}</b><hr />
      <div className="lines">{Array.from({ length: 7 }, (_, i) => <i key={i} style={{ width: `${55 + r() * 45}%` }} />)}</div>
      <p>{title}</p>
      <small className="mono">{meta}</small>
      <em className="mono">CAPA TIPOGRÁFICA · NÃO É O DOCUMENTO</em>
    </div>
  );
}

export function Asterisk({ size = 96, style }: { size?: number; style?: CSSProperties }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} aria-hidden>
      <g fill="#C52D3A">{[0, 60, 120].map(a => <rect key={a} x="40" y="2" width="20" height="96" rx="3" transform={`rotate(${a} 50 50)`} />)}</g>
    </svg>
  );
}

function Skyline() {
  const r = rng(42); let x = 0; const bs: JSX.Element[] = [];
  while (x < 400) { const w = 18 + r() * 26, h = 40 + r() * 90; bs.push(<rect key={x} x={x} y={150 - h} width={w} height={h} />); x += w + 2; }
  return <svg className="skyline" viewBox="0 0 400 150" preserveAspectRatio="xMidYMax slice" aria-hidden><g fill="#0d0d0f">{bs}</g></svg>;
}

/** Colagem do hero (estrutura inspirada no Hub Criminal; elementos próprios) */
export function Collage() {
  const slots = [
    { key: 'hero-1', style: { left: '6%', top: '22%', width: '33%', transform: 'rotate(-5deg)' } },
    { key: 'hero-2', style: { left: '33%', top: '12%', width: '34%', transform: 'rotate(2deg)', zIndex: 3 } },
    { key: 'hero-3', style: { left: '60%', top: '24%', width: '32%', transform: 'rotate(6deg)' } }
  ];
  return (
    <div className="collage-art" aria-label="Colagem ilustrativa: papel rasgado, silhuetas com rosto oculto e horizonte urbano">
      <div className="cut cut-red" style={{ clipPath: tornClip(3) }} />
      <div className="cut cut-news" style={{ clipPath: tornClip(9) }}>{Array.from({ length: 9 }, (_, i) => <i key={i} style={{ width: `${60 + ((i * 37) % 40)}%` }} />)}</div>
      <Skyline />
      {slots.map(s => (
        <div key={s.key} className="sticker" style={s.style as CSSProperties}>
          {images[s.key] ? <img src={images[s.key]!.src} alt={images[s.key]!.alt} /> : <MosaicPortrait seed={s.key} />}
        </div>
      ))}
      <Asterisk size={110} style={{ position: 'absolute', left: '-2%', bottom: '2%', zIndex: 5 }} />
      <div className="stamp mono">DOSSIÊ<br />Nº 001</div>
      <div className="tag-pin mono">SÃO PAULO · 1998</div>
    </div>
  );
}
