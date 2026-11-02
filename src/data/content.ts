// Texto editorial dos capítulos. Cada parágrafo traz as fontes que o sustentam.
export interface Para { text: string; sources: string[]; }
export const content: Record<string, { lead: string; paras: Para[] }> = {
  'visao-geral': {
    lead: 'Em 1998, uma série de assassinatos de mulheres jovens, com corpos encontrados no Parque do Estado, na zona sul de São Paulo, mobilizou polícia e imprensa. Esta é uma reconstrução documental, baseada em fontes secundárias.',
    paras: [
      { text: 'Os crimes ocorreram em 1998, segundo as fontes consultadas, e tiveram como cenário o Parque Estadual Fontes do Ipiranga, entre São Paulo e Diadema.', sources: ['S01', 'S11'] },
      { text: 'O número de vítimas varia nas fontes: algumas citam sete mortes pelas quais houve condenação; outras, 11 mortes atribuídas a ele, incluindo as que confessou. Este dossiê não adota um número único.', sources: ['S14', 'S13', 'S01'] }
    ]
  },
  'repercussao': {
    lead: 'Repercussão pública documentada em reportagens recentes.',
    paras: [
      { text: 'O caso voltou à pauta em 2024, com a estreia de um filme no Prime Video, e novamente em 2026 com o debate sobre a possível soltura em 2028.', sources: ['S12', 'S04'] },
      { text: 'O caso provocou discussões sobre segurança pública, violência sexual, vulnerabilidade das mulheres e a importância de denunciar situações suspeitas. A cobertura jornalística, os documentários e as produções audiovisuais mantêm a história presente no debate público.', sources: [] },
      { text: 'A exposição excessiva de detalhes e a transformação de criminosos em figuras de fascínio podem desviar a atenção das vítimas e das consequências reais da violência. Por isso, o dossiê prioriza fatos comprovados e respeita a memória delas.', sources: [] },
      { text: 'O legado do caso é a necessidade de investigar com rigor desaparecimentos suspeitos, de ter mecanismos eficazes de proteção às mulheres e de uma atuação policial capaz de ligar crimes semelhantes. Mais do que a trajetória de um criminoso, é a história de mulheres que tiveram a vida interrompida e de famílias afetadas pela violência.', sources: [] },
      { text: 'A cobertura da época (1998) e o tratamento dado pela imprensa não foram analisados por falta de acesso a arquivos primários.', sources: [] }
    ]
  }
};
