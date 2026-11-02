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
  'p-elizangela': { ...imprensa, alt: 'Elizângela Francisco da Silva' },
  'p-patricia-casa': { ...imprensa, alt: 'Patrícia Gonçalves Marinho, em casa' },
  'author-crianca-2': { ...imprensa, alt: 'Francisco de Assis Pereira, criança' },
  'author-crianca-familia': { ...imprensa, alt: 'Criança ao lado de uma mulher, foto de família' },
  'author-mae-menino': { ...imprensa, alt: 'Mulher e menino, foto de família' },
  'author-jovens': { ...imprensa, alt: 'Francisco com outro jovem, em foto antiga' },
  'author-carteira-1983': { ...imprensa, alt: 'Carteira de estudante de 1983 com a foto de Francisco' },
  'author-juventude': { ...imprensa, alt: 'Francisco jovem, antes dos crimes' },
  'author-retrato-amarelo': { ...imprensa, alt: 'Francisco de Assis Pereira, 1998' },
  'author-captura-1998': { ...imprensa, alt: 'Foto policial de Francisco de Assis Pereira, 1998' },
  'author-preso-1998': { ...imprensa, alt: 'Francisco de Assis Pereira conduzido algemado por policiais, 1998' },
  'author-coletiva': { ...imprensa, alt: 'Francisco de Assis Pereira em entrevista coletiva, 1998' },
  'author-entrevista-1998': { ...imprensa, alt: 'Francisco de Assis Pereira em depoimento, 1998' },
  'author-prisao-livro': { ...imprensa, alt: 'Francisco de Assis Pereira na prisão' },
  'author-prisao-sentado': { ...imprensa, alt: 'Francisco de Assis Pereira na prisão' },
  'author-prisao-blusa': { ...imprensa, alt: 'Francisco de Assis Pereira na prisão' },
  'author-hoje-cela': { ...imprensa, alt: 'Francisco de Assis Pereira, imagem recente' },
  'author-retrato-barba': { ...imprensa, alt: 'Francisco de Assis Pereira, retrato recente' },
  'vest-pericia': { ...imprensa, alt: 'Perícia no local dos crimes, Parque do Estado' },
  'vest-escavacao': { ...imprensa, alt: 'Escavação feita pela polícia no parque' },
  'vest-ossada': { ...imprensa, alt: 'Restos mortais registrados pela perícia' },
  'vest-pertences': { ...imprensa, alt: 'Pertences recolhidos como evidência' },
  'vest-inquerito': { ...imprensa, alt: 'Recorte de reportagem nos autos do inquérito' },
  'hero-atual': { ...imprensa, alt: 'Francisco de Assis Pereira, foto de identificação recente' },
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
