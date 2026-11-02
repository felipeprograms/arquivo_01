// Cronologia no formato do infográfico do G1 (S24, 23/08/2018), com dados conferidos pelos autores.
// `eventId` abre o detalhe (fontes, divergências); `photos` são chaves de src/assets/images/.
export interface CronoItem { id: string; date: string; text: string; eventId?: string; photos?: string[]; wide?: boolean; head?: string; }

export const cronologia: CronoItem[] = [
  { id: 'c1', date: 'De janeiro a agosto de 1998', text: 'Mulheres desaparecem em São Paulo', eventId: 'e-jan-ago', photos: ['p-patricia', 'p-selma', 'p-rosa', 'p-raquel', 'p-isadora', 'p-elizangela'] },
  { id: 'c2', date: 'Julho', text: 'Corpos das mulheres desaparecidas são encontrados no Parque do Estado, na Zona Sul da capital', eventId: 'e-corpos-julho', photos: ['vest-pericia'], wide: true },
  { id: 'c3', date: 'Julho', text: 'Polícia investiga ação de um serial killer na cidade e divulga o retrato falado do suspeito', eventId: 'e-retrato', photos: ['p-francisco-retrato'] },
  { id: 'c4', date: 'Julho', text: 'Mulheres estupradas no Parque do Estado contaram à polícia ter sido estupradas por um patinador que conheceram no Parque do Ibirapuera, que depois foi identificado como o motoboy Francisco de Assis Pereira, de 30 anos', eventId: 'e-patinador' },
  { id: 'c5', date: '4 de agosto', text: 'Após ter a foto divulgada como procurado, uma denúncia anônima leva à prisão de Francisco em Itaqui, no Rio Grande do Sul, onde estava escondido', eventId: 'e-prisao', photos: ['author-captura-1998'] },
  { id: 'c6', date: '5 de agosto', text: 'De volta a São Paulo foi apresentado à imprensa e negou os crimes', eventId: 'e-imprensa-5ago', photos: ['author-coletiva'], wide: true },
  { id: 'c7', date: '2001', head: 'Foram ao menos quatro julgamentos:', text: '1º julgamento: foi condenado a 16 anos de prisão pelo assassinato de Rosa Alves Neta. Francisco confessou o crime', eventId: 'e-julg-1' },
  { id: 'c8', date: '2002', text: '2º julgamento: condenado a 107 anos de prisão por estupro, roubo e atentado violento ao pudor contra 9 mulheres. O réu negou os crimes', eventId: 'e-julg-2' },
  { id: 'c9', date: '', text: '3º julgamento: condenado a 24 anos e 6 meses de prisão por assassinato, estelionato e ocultação de cadáver contra Isadora Fraenkel', eventId: 'e-julg-3' },
  { id: 'c10', date: '', text: '4º julgamento: condenado a 121 anos, 8 meses e 20 dias de prisão pelo assassinato, ocultação de cadáver e atentado violento ao pudor contra 5 mulheres: Raquel Mota Rodrigues, Selma Ferreira Queiroz, Patrícia Gonçalves Marinho e duas desconhecidas', eventId: 'e-julg-4', photos: ['author-preso-1998'], wide: true },
  { id: 'c11', date: '2018', text: 'A pena total de Francisco é de 285 anos, 11 meses e 10 dias por homicídios, estupros e roubos contra 16 vítimas. Ele cumpre pena na Penitenciária de Iaras, no interior paulista. Em 2018, ele completa 20 anos preso', eventId: 'e-pena-2018' },
  { id: 'c12', date: 'Setembro de 2026', text: 'O Ministério Público de São Paulo abre procedimento sobre a saúde mental do condenado e avalia pedir internação compulsória. Segundo as reportagens, não há decisão judicial', eventId: 'e-mp-2026' },
  { id: 'c13', date: '2028', text: 'Em 2028, Francisco deverá ser solto por ter cumprido 30 anos preso. Pela lei, ninguém pode ficar detido mais que três décadas', eventId: 'e-fim-pena' }
];
