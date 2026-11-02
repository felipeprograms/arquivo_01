// Mídias que dependem de arquivos ou links fornecidos pelos autores do trabalho.
// FOTOS: coloque o arquivo em src/assets/images/ com o nome da chave (ex.: author-crianca.jpg) e preencha crédito em images.ts.
// VÍDEOS: cole o link do YouTube (ou o caminho de um .mp4 em public/videos/) no campo url.
export interface MediaItem { key: string; caption: string; }
export interface VideoItem { id: string; title: string; url: string; }

export const authorMedia: Record<'infancia' | 'identificacao', MediaItem[]> = {
  infancia: [
    { key: 'author-crianca', caption: 'Francisco ainda criança (imagem divulgada em reportagem)' },
    { key: 'author-crianca-2', caption: 'Retrato da infância (imagem divulgada em reportagem)' },
    { key: 'author-crianca-familia', caption: 'Criança ao lado de uma mulher, em foto de família (imagem de reportagem)' },
    { key: 'author-mae-menino', caption: 'Francisco e Mãe' },
    { key: 'author-mae', caption: 'Maria Helena de Souza Pereira - Mãe' },
    { key: 'author-jovens', caption: 'Francisco e irmão (Luís Carlos Pereira)' },
    { key: 'author-carteira-1983', caption: 'Carteira de estudante de 1983, aos 15 ou 16 anos (imagem de reportagem)' },
    { key: 'author-juventude', caption: 'Juventude, antes dos crimes (imagem divulgada em reportagem)' }
  ],
  identificacao: [
    { key: 'author-destaque', caption: 'Francisco de Assis Pereira' },
    { key: 'author-retrato-amarelo', caption: 'Logo após a prisão, em 1998 (imagem de reportagem)' },
    { key: 'author-captura-1998', caption: 'Foto policial da época da captura, 1998 (imagem de reportagem)' },
    { key: 'author-preso-1998', caption: 'Sendo conduzido algemado, em 1998' },
    { key: 'author-coletiva', caption: 'Durante entrevista coletiva, em 1998 (imagem de reportagem)' },
    { key: 'author-entrevista-1998', caption: 'Em depoimento, em 1998 (imagem de reportagem)' },
    { key: 'author-prisao-livro', caption: 'Na prisão, anos depois (imagem de documentário)' },
    { key: 'author-prisao-sentado', caption: 'Na prisão, anos depois (imagem de documentário)' },
    { key: 'author-prisao-blusa', caption: 'Na prisão, anos depois (imagem de documentário)' },
    { key: 'author-hoje-cela', caption: 'Imagem recente, na prisão (divulgada em reportagem)' },
    { key: 'author-retrato-barba', caption: 'Retrato recente (divulgado em reportagem)' }
  ]
};

// Vestígios da investigação (capítulo 07). Imagens sensíveis ficam desfocadas até o leitor tocar.
export interface TraceItem { key: string; caption: string; sensitive?: boolean; }
export const traces: TraceItem[] = [
  { key: 'vest-pericia', caption: 'Peritos e policiais analisam o local, na mata do Parque do Estado, em 1998' },
  { key: 'vest-escavacao', caption: 'Equipe do GARRA (Polícia Civil) durante a escavação de uma cova no parque', sensitive: true },
  { key: 'vest-ossada', caption: 'Restos mortais encontrados no parque, registrados pela perícia', sensitive: true },
  { key: 'vest-pertences', caption: 'Pertences encontrados no local (calçados e roupas), recolhidos como evidência' },
  { key: 'vest-inquerito', caption: 'Recorte de reportagem anexado aos autos (fls. 95): “motoboy é o maior suspeito”' }
];

export const authorVideos: VideoItem[] = [
  { id: 'v-1', title: 'Reportagem em vídeo 1', url: 'https://youtu.be/vXOXeRKqixQ' },
  { id: 'v-2', title: 'Reportagem em vídeo 2', url: 'https://youtu.be/ROEcqK0izMY' },
  { id: 'v-3', title: 'Reportagem em vídeo 3', url: 'https://youtu.be/UHtIwlAi_u4' },
  { id: 'v-4', title: 'Reportagem em vídeo 4', url: 'https://youtu.be/AgTt6IXu-TQ' },
  { id: 'v-5', title: 'Reportagem em vídeo 5', url: 'https://youtu.be/ODOmyDWm4b0' },
  { id: 'v-6', title: 'Reportagem em vídeo 6', url: 'https://youtu.be/GjZeSKr8JLM' },
  { id: 'v-7', title: 'Reportagem em vídeo 7', url: 'https://youtu.be/4_SbaY_IEFI' }
];
