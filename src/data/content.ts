// Texto editorial dos capítulos. Cada parágrafo traz as fontes que o sustentam.
export interface Para { text: string; sources: string[]; }
export const content: Record<string, { lead: string; paras: Para[] }> = {
  'visao-geral': {
    lead: 'Em 1998, uma série de assassinatos de mulheres jovens, com corpos encontrados no Parque do Estado, na zona sul de São Paulo, mobilizou polícia e imprensa. Esta é uma reconstrução documental, baseada em fontes secundárias.',
    paras: [
      { text: 'Os crimes ocorreram em 1998, segundo as fontes consultadas, e tiveram como cenário o Parque Estadual Fontes do Ipiranga, entre São Paulo e Diadema.', sources: ['S01', 'S11'] },
      { text: 'Francisco de Assis Pereira foi preso em 4 de agosto de 1998 em Itaqui (RS) e condenado por homicídio, estupro, atentado violento ao pudor e ocultação de cadáver.', sources: ['S02', 'S04', 'S11'] },
      { text: 'O número de vítimas varia nas fontes: algumas citam sete mortes pelas quais houve condenação; outras, 11 mortes atribuídas a ele, incluindo as que confessou. Este dossiê não adota um número único.', sources: ['S14', 'S13', 'S01'] }
    ]
  },
  'contexto': {
    lead: 'Contexto geográfico e temporal verificado nas fontes.',
    paras: [
      { text: 'O Parque do Estado é uma das maiores áreas verdes da capital paulista, na zona sul, na divisa com Diadema.', sources: ['S11', 'S01'] },
      { text: 'Segundo a imprensa, os achados de corpos ganharam repercussão em julho de 1998, quando seis corpos foram localizados no parque.', sources: ['S01', 'S11'] },
      { text: 'Informações sobre o contexto social da cidade e sobre a cobertura da imprensa na época dependem de arquivos de jornais (Folha, Estadão, O Globo) que não foram consultados. Ver "Fontes e metodologia".', sources: [] }
    ]
  },
  'abordagens': {
    lead: 'Padrão de abordagem descrito pela imprensa, sem detalhamento de violência.',
    paras: [
      { text: 'Segundo a imprensa, o investigado se apresentava como caça-talentos ou agente de modelos e convidava jovens para sessões de fotos no parque.', sources: ['S11', 'S07'] },
      { text: 'Reportagens afirmam que as vítimas tinham até 24 anos e eram, em geral, mulheres de baixa renda.', sources: ['S11', 'S12'] },
      { text: 'Este dossiê não reproduz detalhes das agressões. Motivações psicológicas não são tratadas aqui por falta de laudos acessíveis.', sources: [] }
    ]
  },
  'investigacao': {
    lead: 'A investigação, conforme descrita em reportagens. Documentos policiais originais não foram acessados.',
    paras: [
      { text: 'Após a localização dos corpos, a polícia reuniu relatos de sobreviventes de ataques. Segundo a imprensa, a imagem do suspeito foi divulgada e ele foi reconhecido por vítimas.', sources: ['S11', 'S12'] },
      { text: 'Há divergência sobre o tempo entre o retrato falado e a prisão: uma fonte fala em 23 dias, outra em cerca de 20 dias de fuga.', sources: ['S12', 'S02'] },
      { text: 'Após a prisão, segundo a Gazeta SP, o depoimento durou 72 horas; reportagens relatam confissão parcial e indicação do local de restos mortais de Selma.', sources: ['S01', 'S12'] }
    ]
  },
  'prisao': {
    lead: 'A prisão ocorreu no oeste do Rio Grande do Sul, a mais de 700 km de Porto Alegre, segundo a imprensa.',
    paras: [
      { text: 'Data mais citada: 4 de agosto de 1998, em Itaqui (RS), município na fronteira com a Argentina.', sources: ['S02', 'S11'] },
      { text: 'Segundo reportagens, o reconhecimento partiu de um pescador. Detalhes operacionais não foram confirmados em fonte oficial. A distância citada vem do TecMundo.', sources: ['S01', 'S12'] }
    ]
  },
  'repercussao': {
    lead: 'Repercussão pública documentada em reportagens recentes.',
    paras: [
      { text: 'O caso voltou à pauta em 2024, com a estreia de um filme no Prime Video, e novamente em 2026 com o debate sobre a possível soltura em 2028.', sources: ['S12', 'S04'] },
      { text: 'A cobertura da época (1998) e o tratamento dado pela imprensa não foram analisados por falta de acesso a arquivos primários.', sources: [] }
    ]
  }
};
