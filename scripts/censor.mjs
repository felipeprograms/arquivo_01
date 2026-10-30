// Gera versões com mosaico + leve desfoque sobre o rosto.
// Uso: coloque as fotos originais em /originals (nome = chave, ex.: p-selma.jpg) e rode `npm run censor`.
// Caixa do rosto (frações da imagem) opcional em originals/faces.json: { "p-selma": { "x": .3, "y": .1, "w": .4, "h": .35 } }
// As versões censuradas vão para src/assets/images. Publique SOMENTE essa pasta, nunca /originals.
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const IN = 'originals', OUT = 'src/assets/images';
const facesFile = path.join(IN, 'faces.json');
const faces = fs.existsSync(facesFile) ? JSON.parse(fs.readFileSync(facesFile, 'utf8')) : {};
fs.mkdirSync(OUT, { recursive: true });

const files = fs.readdirSync(IN).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
if (!files.length) console.log('Nenhuma imagem em /originals.');

for (const f of files) {
  const key = path.parse(f).name;
  const base = await sharp(path.join(IN, f)).rotate().toBuffer();
  const { width: W, height: H } = await sharp(base).metadata();
  const b = faces[key] ?? { x: 0.25, y: 0.06, w: 0.5, h: 0.45 };
  const left = Math.max(0, Math.round(b.x * W)), top = Math.max(0, Math.round(b.y * H));
  const w = Math.min(W - left, Math.round(b.w * W)), h = Math.min(H - top, Math.round(b.h * H));
  const block = Math.max(8, Math.round(w / 9));
  const patch = await sharp(base).extract({ left, top, width: w, height: h })
    .resize(Math.max(1, Math.round(w / block)), Math.max(1, Math.round(h / block)), { kernel: 'nearest' })
    .resize(w, h, { kernel: 'nearest' }).blur(2).toBuffer();
  await sharp(base).composite([{ input: patch, left, top }]).jpeg({ quality: 86 }).toFile(path.join(OUT, key + '.jpg'));
  console.log(`✔ ${f} → ${OUT}/${key}.jpg (rosto: ${left},${top} ${w}x${h})`);
}
