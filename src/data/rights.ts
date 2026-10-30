// Direitos fundamentais à luz da Constituição Federal de 1988 (fonte: S16).
// Leitura didática dos autores — não é parecer jurídico. Só se afirma violação quando o fato consta nas fontes do dossiê.
export type RightState = 'violado' | 'garantido' | 'debate';
export interface Right { art: string; title: string; text: string; state: RightState; }
export interface RightsGroup { id: string; who: string; kicker: string; intro: string; items: Right[]; }

export const rightsLabel: Record<RightState, string> = {
  violado: 'Violado (conforme os fatos documentados)',
  garantido: 'Garantido pela Constituição',
  debate: 'Em debate / sem violação comprovada'
};

export const rights: RightsGroup[] = [
  {
    id: 'vitimas', who: 'Às vítimas', kicker: 'Direitos violados e direitos garantidos',
    intro: 'As jovens foram mortas e sofreram violência sexual, segundo as condenações noticiadas. Sob a Constituição, isso atinge o núcleo dos direitos fundamentais.',
    items: [
      { art: 'Art. 5º, caput', title: 'Direito à vida', text: 'Inviolável. Foi suprimido pelos homicídios pelos quais o autor foi condenado.', state: 'violado' },
      { art: 'Art. 1º, III', title: 'Dignidade da pessoa humana', text: 'Fundamento da República. Atingida pela violência, pela instrumentalização das vítimas e pela ocultação dos corpos.', state: 'violado' },
      { art: 'Art. 5º, III', title: 'Integridade física e psíquica', text: 'Ninguém será submetido a tortura nem a tratamento desumano ou degradante. A violência sexual e física descrita nas condenações o contraria.', state: 'violado' },
      { art: 'Art. 5º, caput e XV', title: 'Liberdade e locomoção', text: 'As abordagens, segundo a imprensa, usavam engano (falsa proposta de trabalho como modelo) para levar as jovens ao parque, comprometendo a livre decisão sobre onde ir.', state: 'violado' },
      { art: 'Art. 5º, X', title: 'Intimidade, honra e imagem', text: 'Protege também a memória e a família. Exige cuidado com a exposição das vítimas: este dossiê oculta rostos e evita detalhes das agressões.', state: 'debate' },
      { art: 'Arts. 5º, caput, 6º e 144', title: 'Segurança', text: 'A segurança é direito e dever do Estado. O dossiê não apura responsabilidade estatal; apenas registra que a proteção não impediu os crimes.', state: 'debate' },
      { art: 'Art. 5º, XXXV', title: 'Acesso à Justiça', text: 'A lei não excluirá da apreciação do Judiciário lesão ou ameaça a direito. Garantiu que os crimes fossem processados e julgados.', state: 'garantido' },
      { art: 'Art. 129, I', title: 'Ação penal pública', text: 'Cabe ao Ministério Público promover, privativamente, a ação penal pública em nome das vítimas e da sociedade.', state: 'garantido' },
      { art: 'Art. 245', title: 'Assistência a herdeiros e dependentes', text: 'A lei disporá sobre assistência do Poder Público a herdeiros e dependentes carentes de vítimas de crime doloso. Não há informação, nas fontes, sobre sua aplicação neste caso.', state: 'garantido' },
      { art: 'Art. 5º, I', title: 'Igualdade entre homens e mulheres', text: 'Reportagens descrevem vítimas mulheres, em geral jovens e de baixa renda; o princípio da igualdade impõe proteção efetiva e igual.', state: 'garantido' }
    ]
  },
  {
    id: 'condenado', who: 'Ao condenado', kicker: 'Direitos garantidos e pontos em debate',
    intro: 'A Constituição protege também quem é acusado e condenado, mesmo por crimes gravíssimos: é o que distingue Justiça de vingança. As fontes consultadas não documentam violação de seus direitos; há, porém, pontos de atenção.',
    items: [
      { art: 'Art. 5º, LXI a LXIV', title: 'Regras da prisão', text: 'Prisão só em flagrante ou por ordem escrita de autoridade judicial; comunicação ao juiz; direito ao silêncio e à assistência de advogado. Os detalhes da prisão em Itaqui (RS) não foram verificados em fonte oficial.', state: 'garantido' },
      { art: 'Art. 5º, LIV e LV', title: 'Devido processo, contraditório e ampla defesa', text: 'Ninguém é privado da liberdade sem devido processo legal. O processo e a defesa não foram acessados; o dossiê não afirma irregularidades.', state: 'garantido' },
      { art: 'Art. 5º, XXXVII e LIII', title: 'Juiz natural', text: 'Veda tribunal de exceção; ninguém é processado nem sentenciado senão pela autoridade competente.', state: 'garantido' },
      { art: 'Art. 5º, XLVII, a e b', title: 'Vedação da pena de morte e da prisão perpétua', text: 'A soma de ~285 anos não é cumprida integralmente: o limite de 30 anos (Código Penal) se relaciona à proibição de penas de caráter perpétuo.', state: 'garantido' },
      { art: 'Art. 5º, XL', title: 'Irretroatividade da lei penal mais gravosa', text: 'Reportagens citam mudança do teto para 40 anos em 2019. Pela irretroatividade, lei mais severa não alcança fatos anteriores; a aplicação ao caso não foi verificada.', state: 'debate' },
      { art: 'Art. 5º, XLVI', title: 'Individualização da pena', text: 'A pena deve ser individualizada pelo juiz, o que sustenta as condenações separadas por crime.', state: 'garantido' },
      { art: 'Art. 5º, XLVIII e XLIX', title: 'Integridade física e moral do preso', text: 'O preso conserva o direito ao respeito à sua integridade física e moral, e a pena é cumprida em estabelecimento adequado. As condições da custódia em Iaras (SP) não foram analisadas.', state: 'garantido' },
      { art: 'Art. 5º, LIV; art. 5º, XLVII, b', title: 'Internação compulsória após o fim da pena', text: 'O MP-SP abriu procedimento sobre a saúde mental do condenado (2026). Sem decisão judicial, não há violação; qualquer restrição de liberdade exige devido processo e não pode virar pena perpétua disfarçada.', state: 'debate' },
      { art: 'Art. 5º, X e IX; art. 220', title: 'Imagem do preso × liberdade de imprensa', text: 'A divulgação de fotos de presos concilia liberdade de imprensa e direito à imagem. Por prudência, este dossiê oculta também o rosto do condenado.', state: 'debate' },
      { art: 'Art. 5º, LVII', title: 'Presunção de inocência', text: 'Vale até o trânsito em julgado. A cobertura da imprensa em 1998 não foi analisada nas fontes disponíveis.', state: 'debate' },
      { art: 'Art. 5º, XLIII', title: 'Crimes hediondos', text: 'A Constituição determina tratamento mais rigoroso (inafiançabilidade, sem graça ou anistia) — rigor permitido, sem suprimir as garantias acima.', state: 'garantido' }
    ]
  }
];
