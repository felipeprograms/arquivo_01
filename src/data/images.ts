// Imagens do dossiê: basta colocar o arquivo em src/assets/images/ com o nome da chave.
// Chaves: hero-1, hero-2, hero-3, p-francisco, p-patricia, p-elizangela, p-rosa, p-selma e IDs de fonte (S01…S15).
// Use `npm run censor` para gerar versões com mosaico + leve desfoque no rosto a partir de /originals.
export interface ImageInfo { src: string; alt: string; credit: string; license: string; sourceUrl?: string; }
interface Credit { alt?: string; credit: string; license: string; sourceUrl?: string; }

// Preencha crédito e licença de cada imagem adicionada.
// Fotos coletadas em reportagens na internet (origem exata a confirmar). Uso autorizado pelos autores do trabalho; `npm run censor` (mosaico no rosto) continua disponível, se necessário.
const imprensa = { credit: 'Reprodução de reportagem (origem a confirmar)', license: 'Direitos de terceiros · uso educacional autorizado pelos autores' };
const credits: Record<string, Credit> = {
  'p-patricia': { ...imprensa, alt: 'Patrícia Gonçalves Marinho' },
  'p-selma': { ...imprensa, alt: 'Selma Ferreira Queiroz' },
  'p-rosa': { ...imprensa, alt: 'Rosa Alves Neta' },
  'p-raquel': { ...imprensa, alt: 'Raquel Mota Rodrigues' },
  'p-isadora': { ...imprensa, alt: 'Isadora Fraenkel' },
  'author-destaque': { ...imprensa, alt: 'Francisco de Assis Pereira' },
  'author-crianca': { ...imprensa, alt: 'Francisco de Assis Pereira ainda criança' },
  'survivor-licia': { ...imprensa, alt: 'Lícia Lopes dos Santos, sobrevivente, em entrevista ao documentário' },
  'author-mae': { ...imprensa, alt: 'Mãe de Francisco de Assis Pereira, em entrevista' },
  'cut-retrato': { ...imprensa, alt: 'Retrato falado do suspeito divulgado durante a investigação (recorte)' },
  'cut-preso': { ...imprensa, alt: 'Francisco de Assis Pereira na ocasião da prisão, 1998 (recorte)' },
  'cut-hoje': { ...imprensa, alt: 'Francisco de Assis Pereira em entrevista recente (recorte)' },
  'p-francisco': { ...imprensa, alt: 'Francisco de Assis Pereira na ocasião da prisão, 1998' },
  'p-francisco-retrato': { ...imprensa, alt: 'Retrato falado do suspeito divulgado durante a investigação' },
  'p-francisco-hoje': { ...imprensa, alt: 'Francisco de Assis Pereira em entrevista recente' },
};

const found = import.meta.glob('../assets/images/*.{jpg,jpeg,png,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;
export const images: Record<string, ImageInfo | undefined> = Object.fromEntries(
  Object.entries(found).map(([path, url]) => {
    const key = path.split('/').pop()!.replace(/\.[^.]+$/, ''); const c = credits[key];
    return [key, { src: url, alt: c?.alt ?? `Imagem ${key} `, credit: c?.credit ?? 'crédito a informar', license: c?.license ?? 'licença a confirmar', sourceUrl: c?.sourceUrl }];
  })
);
