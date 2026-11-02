// Textos analíticos do dossiê (resumo executivo, conflito constitucional, decisões, impacto e gerações de direitos).
// Só entra o que consta nas demais seções. Campos sem fonte pública verificável ficam marcados como "não localizado".
import type { Status } from './types';

export const resumo = {
  kicker: 'Resumo executivo',
  title: 'Ficha rápida do processo',
  rows: [
    { label: 'Tribunal', value: 'Tribunal do Júri de São Paulo: ao menos quatro julgamentos (2001 e 2002); o último, em 24/07/2002, no 1º Tribunal do Júri.', status: 'fonte-unica' as Status },
    { label: 'Tema central', value: 'Responsabilização penal por homicídio, estupro, atentado violento ao pudor e ocultação de cadáver; limite de 30 anos de cumprimento e debate atual sobre internação compulsória após o fim da pena.', status: 'confirmado' as Status },
    { label: 'Situação atual', value: 'Preso na Penitenciária de Iaras (SP); término previsto em agosto de 2028.', status: 'confirmado' as Status }
  ],
  note: 'Campo vazio significa falta de fonte: o dossiê não preenche com suposições.'
};

// Condenações por julgamento, segundo o G1 (S24). A pena é fixada por julgamento, e cada um reúne crimes e vítimas.
export const condenacoes = {
  title: 'Condenações',
  crimes: ['Homicídio (assassinato)', 'Estupro', 'Atentado violento ao pudor', 'Roubo', 'Estelionato', 'Ocultação de cadáver'],
  crimesNote: 'O G1 informa ao menos quatro julgamentos. A pena é fixada por julgamento e reúne mais de um crime; as fontes não separam os anos de cada crime.',
  julgamentos: [
    { label: '1º julgamento · 2001', anos: '16 anos', crimes: ['Homicídio'], detalhe: 'Pela morte de Rosa Alves Neta. Ele confessou.' },
    { label: '2º julgamento · 2002', anos: '107 anos', crimes: ['Estupro', 'Roubo', 'Atentado violento ao pudor'], detalhe: 'Contra 9 mulheres. O réu negou os crimes.' },
    { label: '3º julgamento · 2002', anos: '24 anos e 6 meses', crimes: ['Homicídio', 'Estelionato', 'Ocultação de cadáver'], detalhe: 'Contra Isadora Fraenkel.' },
    { label: '4º julgamento · 24/07/2002', anos: '121 anos, 8 meses e 20 dias', crimes: ['Homicídio', 'Ocultação de cadáver', 'Atentado violento ao pudor'], detalhe: 'Contra 5 mulheres: Raquel Mota Rodrigues, Selma Ferreira Queiroz, Patrícia Gonçalves Marinho e duas desconhecidas.' }
  ],
  soma: '269 anos, 2 meses e 20 dias',
  somaNote: 'Pena total segundo o G1, por homicídios, estupros e roubos contra 16 vítimas. Pelo limite legal, ele cumpre no máximo 30 anos.',
  total: '285 anos, 11 meses e 10 dias',
  sources: ['S24', 'S22', 'S23']
};

export const umMinuto = {
  title: 'O caso em 1 minuto',
  lead: 'Para quem nunca ouviu falar do caso: quem, o quê, quando e onde.',
  items: [
    { q: 'Quem', a: 'Francisco de Assis Pereira, motoboy, conhecido pela imprensa como “Maníaco do Parque”.' },
    { q: 'O quê', a: 'Abordava jovens com a falsa promessa de uma carreira de modelo e as levava a uma área de mata, onde foram violentadas e mortas. O dossiê não detalha a violência.' },
    { q: 'Quando', a: 'Em 1998. Preso em 4 de agosto daquele ano, em Itaqui (RS).' },
    { q: 'Onde', a: 'Parque do Estado, na zona sul de São Paulo, na divisa com Diadema. As abordagens ocorriam sobretudo no metrô, perto da Estação Jabaquara.' },
    { q: 'Desfecho', a: 'Condenado por homicídio, estupro, atentado violento ao pudor e ocultação de cadáver. Cumpre pena em Iaras (SP); o término está previsto para agosto de 2028.' }
  ]
};

export const conflito = {
  title: 'O conflito constitucional',
  lead: 'Que direito fundamental estava na balança?',
  sides: [
    { tag: 'De um lado', h: 'Proteção das vítimas e da sociedade', p: 'Direito à vida, dignidade, integridade e segurança (art. 5º, caput; art. 1º, III; art. 144) e o dever do Estado de investigar, processar e punir crimes graves.' },
    { tag: 'Do outro', h: 'Garantias de quem é acusado e condenado', p: 'Devido processo legal e ampla defesa (art. 5º, LIV e LV), proibição de pena de caráter perpétuo (art. 5º, XLVII, b) e liberdade ao fim da pena cumprida.' }
  ],
  today: 'Hoje, o ponto de tensão é o fim da pena, previsto para 2028. O Ministério Público de São Paulo abriu procedimento sobre a saúde mental do condenado (internação compulsória). Segundo as reportagens, não há decisão judicial: qualquer restrição de liberdade depende de decisão fundamentada.'
};

export const decisao = {
  title: 'A decisão do tribunal',
  lead: 'Não há acórdão de tribunal superior sobre o caso localizado nas fontes. O que consta são estas decisões e procedimentos:',
  items: [
    { t: 'Quatro julgamentos (2001–2002)', d: 'O Júri de São Paulo condenou o autor em ao menos quatro julgamentos; o último, em 24/07/2002, o condenou a 121 anos, 8 meses e 20 dias em regime integralmente fechado. Os anos de cada julgamento estão na ficha acima.', status: 'fonte-unica' as Status },
    { t: 'Limite de 30 anos', d: 'Pelo limite legal da época, as penas são unificadas e o cumprimento não passa de 30 anos. Isso explica o término previsto em 2028 e se liga à proibição constitucional de pena perpétua.', status: 'divergente' as Status },
    { t: 'Procedimento do MP-SP (2026)', d: 'Procedimento sobre internação compulsória após o fim da pena. Não há decisão judicial determinando internação.', status: 'confirmado' as Status }
  ],
  note: 'Votos e argumentos de cada decisão não podem ser descritos sem a íntegra da sentença, que não foi acessada.'
};

export const impacto = {
  title: 'Impacto prático',
  lead: 'O que o caso mostra na vida real.',
  groups: [
    { h: 'Para advogados, delegados e juízes', items: ['O limite de cumprimento da pena pesa mais do que a soma das condenações.', 'Prisão, processo e execução da pena seguem regras constitucionais mesmo em crimes gravíssimos.', 'Restringir a liberdade após o fim da pena exige decisão judicial fundamentada.', 'Em crimes em série, ligar casos e ouvir sobreviventes e testemunhas foi decisivo.'] },
    { h: 'Para os cidadãos', items: ['O caso mostra por que denunciar desaparecimentos e abordagens suspeitas importa.', 'A memória das vítimas deve vir antes da curiosidade pelo autor.', 'A soltura prevista para 2028 coloca em debate saúde mental no cárcere e segurança coletiva.'] }
  ]
};

export const geracoes = {
  kicker: 'Fundamentação teórica',
  title: 'As gerações de direitos no direito criminal',
  lead: 'A origem de cada geração de direitos ajuda a entender qual valor está em jogo no Processo Penal.',
  cards: [
    { n: '1ª', name: 'Liberdade', era: 'Do Absolutismo ao Estado de Direito', link: 'Ligada à defesa do réu', p: 'Os direitos de primeira geração surgiram para limitar o poder arbitrário do Estado sobre o indivíduo. No âmbito penal, a máxima expressão são o habeas corpus, a presunção de inocência, o devido processo legal e o direito à não autoincriminação.', caso: 'No caso: o teto de 30 anos e a exigência de decisão judicial para novas restrições.' },
    { n: '2ª', name: 'Igualdade', era: 'Direitos sociais e culturais', link: 'Ligada à defensoria e ao sistema prisional', p: 'A igualdade formal não basta no processo penal. O Estado precisa garantir assistência jurídica gratuita a quem não pode pagar (Defensoria Pública) e assegurar a dignidade humana no cumprimento da pena.', caso: 'No caso: saúde e acompanhamento no cárcere. A defensora afirma que ele nunca teve acompanhamento (declaração dela, não verificada).' },
    { n: '3ª', name: 'Fraternidade', era: 'Direitos coletivos e difusos', link: 'Ligada à tutela penal coletiva e ao impacto social', p: 'Crimes ambientais, financeiros ou de colarinho branco atingem a coletividade inteira. Exigem do Estado uma resposta que proteja o bem comum sem atropelar as garantias individuais de primeira geração.', caso: 'No caso: segurança pública e proteção das mulheres como interesse de toda a sociedade.' }
  ],
  perspectiva: {
    title: 'Conflito entre gerações de direitos',
    lead: 'Nenhuma geração de direitos vale sozinha. No caso do Maníaco do Parque, as três se encontram e se chocam em três momentos: o julgamento, o cumprimento da pena e o fim da pena.',
    momentos: [
      { n: '1', h: 'O julgamento (1998–2002)', ger: '1ª geração em primeiro plano', p: 'O Estado acusou, e o acusado manteve o direito de se defender. Contraditório, ampla defesa, juiz natural (Tribunal do Júri, no caso dos crimes dolosos contra a vida) e presunção de inocência até o trânsito em julgado são garantias de 1ª geração: limitam o poder de punir. As condenações em júri, em ao menos quatro julgamentos, mostram o sistema funcionando: o Estado puniu sem abrir mão do processo.', art: 'Art. 5º, XXXVIII, LIII, LIV, LV e LVII' },
      { n: '2', h: 'O cumprimento da pena (2002 em diante)', ger: '2ª geração entra em cena', p: 'Quem está preso continua titular de direitos sociais: saúde, assistência jurídica e integridade física e moral. A defensora afirma que ele nunca teve acompanhamento psicológico e ficou mais de dez anos sem visitas (declarações dela, não verificadas). Se isso for confirmado, a pena cumprida sem tratamento seria um problema de 2ª geração, que também pesa na segurança de todos: quem sai sem acompanhamento é um risco coletivo.', art: 'Art. 5º, XLIX; arts. 6º e 196' },
      { n: '3', h: 'O fim da pena (agosto de 2028)', ger: '1ª geração × 3ª geração', p: 'É aqui que o choque é maior. A liberdade de quem cumpriu a pena (e a proibição de pena perpétua) é de 1ª geração. A segurança pública e a proteção das mulheres são interesses coletivos, de 3ª geração. O Ministério Público de São Paulo abriu procedimento sobre internação compulsória, e a Lei 10.216/2001 prevê a internação compulsória apenas por decisão da Justiça. Qualquer restrição exige decisão judicial fundamentada, e o fato de a pena ter acabado não elimina o debate.', art: 'Art. 5º, caput, XLVII, b; art. 144; Lei 10.216/2001, art. 6º' }
    ],
    matrizTitle: 'Matriz do conflito',
    matriz: [
      { g: '1ª', valor: 'Liberdade individual', quem: 'Defesa e condenado', arg: 'Pena não pode ser perpétua; cumprida a pena, a liberdade volta a ser a regra.', limite: 'Não impede decisão judicial fundamentada baseada em outro fundamento legal.' },
      { g: '2ª', valor: 'Saúde e dignidade no cárcere', quem: 'Defesa, sistema de Justiça e sociedade', arg: 'O condenado tem direito a tratamento e acompanhamento; sem eles, o risco de reincidência aumenta.', limite: 'Não há laudo público: o debate depende de avaliação pericial.' },
      { g: '3ª', valor: 'Segurança e proteção coletivas', quem: 'Ministério Público e sociedade', arg: 'Mulheres e a coletividade têm direito à segurança; o Estado deve evitar novos crimes.', limite: 'Não autoriza, por si só, restringir liberdade sem processo e decisão judicial.' }
    ],
    ladosTitle: 'Os argumentos de cada lado',
    lados: [
      { h: 'Defesa e garantismo', p: 'A Constituição proíbe pena de caráter perpétuo. Reter alguém depois de cumprida a pena, sem nova condenação, seria uma pena disfarçada. O Estado teve 30 anos para tratar e avaliar o condenado e não pode transferir à liberdade dele o custo dessa omissão.' },
      { h: 'Ministério Público e proteção social', p: 'A internação compulsória não é pena, e sim medida de saúde, prevista em lei para quem apresenta transtorno mental e risco. Se houver indícios de que ele pode voltar a ferir, o Estado tem o dever de proteger a sociedade e as mulheres, e a Justiça é quem decide.' },
      { h: 'Proporcionalidade (o juiz)', p: 'Cabe ao juiz pesar os valores: adequação (a medida protege?), necessidade (há outra menos gravosa?) e proporcionalidade em sentido estrito (o ganho em segurança compensa a restrição?). Sem laudo atualizado e sem decisão, nenhum dos lados está provado.' }
    ],
    linhaTitle: 'Como o direito chegou até aqui',
    linha: [
      { ano: '1988', t: 'Constituição Federal: dignidade da pessoa humana (art. 1º, III), garantias do processo penal (art. 5º) e tratamento mais rigoroso para crimes hediondos (art. 5º, XLIII).' },
      { ano: '1990', t: 'Lei dos Crimes Hediondos (Lei 8.072): homicídio qualificado, estupro e atentado violento ao pudor entram no rol; a lei previa regime integralmente fechado.' },
      { ano: '1998–2002', t: 'Prisão, quatro julgamentos pelo Júri e pena total noticiada de 285 anos, 11 meses e 10 dias, com limite de cumprimento de 30 anos.' },
      { ano: '2001', t: 'Lei 10.216 (reforma psiquiátrica): internação voluntária, involuntária e compulsória (esta última, determinada pela Justiça).' },
      { ano: '2006', t: 'O STF declara inconstitucional o regime integralmente fechado para crimes hediondos (HC 82.959).' },
      { ano: '2019–2020', t: 'Lei 13.964 eleva de 30 para 40 anos o limite de cumprimento; pela irretroatividade, não alcança fatos anteriores à lei.' },
      { ano: '2026', t: 'MP-SP abre procedimento sobre internação compulsória, a menos de dois anos do fim previsto da pena. Não há decisão judicial.' }
    ],
    linhaNote: 'Esta linha reúne dados da Constituição e da legislação, e não de reportagens sobre o caso.',
    debateTitle: 'Para discutir em sala',
    debate: [
      'Cumprida a pena, o Estado pode manter alguém privado de liberdade por razões de saúde mental e segurança?',
      'A falta de tratamento durante a pena é um problema só do condenado ou de toda a sociedade?',
      'Como proteger as mulheres sem abrir mão das garantias de quem é acusado?',
      'Quem deve decidir: juiz, perito ou o Ministério Público?'
    ],
    conflito: 'O caso confronta uma garantia individual de 1ª geração (liberdade ao fim da pena cumprida, proibição de pena perpétua) com um interesse coletivo de 3ª geração (segurança pública e proteção das mulheres), com a saúde do preso (2ª geração) no meio.',
    visao: 'Nenhuma decisão judicial resolveu esse conflito até agora. Pela leitura do dossiê, o teto de 30 anos reforça os direitos de 1ª geração; a segurança pública é um valor legítimo, mas não pode anular, por si só, as liberdades individuais sem decisão fundamentada.'
  }
};

export const pessoal = {
  title: 'Informações pessoais',
  facts: [
    { label: 'Nome', value: 'Francisco de Assis Pereira', status: null as Status | null },
    { label: 'Conhecido como', value: '“Maníaco do Parque”', status: null as Status | null },
    { label: 'Nascimento', value: '29 de novembro de 1967, Guaraci (SP)', status: 'confirmado' as Status | null },
    { label: 'Ocupação em 1998', value: 'Motoboy', status: 'confirmado' as Status | null },
    { label: 'Preso em', value: '4 de agosto de 1998, Itaqui (RS)', status: 'confirmado' as Status | null },
    { label: 'Cumpre pena em', value: 'Penitenciária de Iaras (SP)', status: 'confirmado' as Status | null }
  ],
  more: { title: 'Aprofunde', hint: 'Toque em um tema para abrir.' }
};
