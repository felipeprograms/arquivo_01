// Mídias que dependem de arquivos ou links fornecidos pelos autores do trabalho.
// FOTOS: coloque o arquivo em src/assets/images/ com o nome da chave (ex.: author-crianca.jpg) e preencha crédito em images.ts.
// VÍDEOS: cole o link do YouTube (ou o caminho de um .mp4 em public/videos/) no campo url.
export interface MediaItem { key: string; caption: string; }
export interface VideoItem { id: string; title: string; url: string; }

export const authorMedia: Record<'infancia' | 'identificacao', MediaItem[]> = {
  infancia: [
    { key: 'author-crianca', caption: 'Francisco ainda criança (imagem divulgada em reportagem)' },
    { key: 'author-mae', caption: 'Mãe (imagem de reportagem)' }
  ],
  identificacao: [
    { key: 'author-destaque', caption: 'Francisco de Assis Pereira' }
  ]
};

export const authorVideos: VideoItem[] = [
  { id: 'v-1', title: 'Reportagem em vídeo 1', url: 'https://youtu.be/GjZeSKr8JLM' },
  { id: 'v-2', title: 'Reportagem em vídeo 2', url: 'https://youtu.be/4_SbaY_IEFI' }
];
