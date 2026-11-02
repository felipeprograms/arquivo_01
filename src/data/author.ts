// Conteúdo da seção "Autor do crime". Cada parágrafo traz as fontes que o sustentam.
// Falas do próprio autor e de seus advogados são autodeclarações: não são fatos verificados.
export interface AuthorBlock { text: string; sources: string[]; }
export interface AuthorSection { id: string; title: string; blocks: AuthorBlock[]; note?: string; media?: 'infancia' | 'identificacao'; }

export const authorSections: AuthorSection[] = [
  { id: 'identificacao', title: 'Identificação', media: 'identificacao', blocks: [] },
  { id: 'infancia', title: 'Infância e criação', media: 'infancia', blocks: [] },
  { id: 'familia', title: 'Família e relacionamentos', blocks: [
    { text: 'Além da mãe, do avô e de pelo menos dois irmãos citados por Campbell, as fontes consultadas não detalham o núcleo familiar. O dossiê não identifica parentes pelo nome.', sources: ['S17'] },
    { text: 'Na prisão, casou-se com uma admiradora que conheceu por carta; o casal se separou depois, e a ex-noiva relatou estranheza em suas ações e personalidade. Há citação também de Jussara, que o conheceu por carta e se dedica a resolver seus problemas jurídicos.', sources: [] },
    { text: 'Segundo a advogada Caroline Landim, ele ficou mais de dez anos sem receber visitas e pediu transferência para uma unidade mais próxima da família (declaração da defensora).', sources: ['S20'] }
  ] },
  { id: 'vida-adulta', title: 'Vida adulta antes de 1998', blocks: [
    { text: 'Trabalhava como motoboy numa empresa próxima à delegacia que investigava os casos. Antes de ser ligado aos crimes, foi chamado ao DHPP por causa de uma folha de cheque em nome de Isadora Fraenkel, usada na compra de um capacete. Alegou que ela consentira e foi liberado.', sources: [] },
    { text: 'Há ainda relatos pessoais anteriores (relações e episódios de violência contra uma companheira) sem confirmação em fonte primária. O dossiê não os detalha.', sources: [] }
  ] },
  { id: 'saude-mental', title: 'Saúde mental e diagnóstico', blocks: [
    { text: 'Não há laudo psiquiátrico público acessível, e as fontes consultadas não informam diagnóstico formal.', sources: [] },
    { text: 'A advogada Caroline Landim afirma que o último laudo, feito à época do crime, apontou transtorno de personalidade antissocial, condição que, segundo ela, não tem cura e nunca teve acompanhamento. É declaração da defensora, não um documento verificado.', sources: ['S20'] },
    { text: 'Psicopatia, termo popular, não é um diagnóstico oficial nas classificações médicas (CID e DSM); costuma ser avaliada por escalas como a PCL-R. Nenhuma fonte consultada informa que ele tenha sido avaliado assim. Portanto, o dossiê não afirma que ele seja “psicopata”.', sources: [] },
    { text: 'O psiquiatra forense Guido Palomba afirma, no documentário “Investigação Criminal”, que assassinos em série costumam ter padrões de vítima, o que pode refletir “um imaginário pessoal”. Em setembro de 2018, o Ministério Público pediu novo exame de sanidade mental; o debate atual está no capítulo sobre o processo judicial.', sources: ['S18'] }
  ] },
  { id: 'reconhecimento', title: 'Como ele se reconheceu como assassino', blocks: [
    { text: 'Em depoimentos gravados à polícia, em 1998, e exibidos no documentário “Maníaco do Parque: A História Não Contada” (Prime Video), ele disse ter “um ser dentro de mim” que convencia as mulheres a ir ao parque, e que torcia para que elas não aceitassem: “O que vinha na minha mente era que elas não viessem comigo.”', sources: ['S19'] },
    { text: 'Diante do delegado do DHPP, confessou os crimes e indicou onde estavam os corpos. O número varia: 10 mortes e 23 ataques, segundo a imprensa; 10, segundo o Metrópoles; 11, segundo o g1 citado pela Aventuras na História.', sources: ['S19', 'S18'] },
    { text: 'Hoje diz considerar-se uma “pessoa normal”, atribui o passado a “uma coisa maligna” e afirma estar vivo por causa da fé. A advogada diz que ele tenta demonstrar mudança, o que, para ela, é comum em casos como o dele. São autodeclarações, sem avaliação pericial pública.', sources: ['S20'] }
  ] },
  { id: 'escolha', title: 'Como escolhia as vítimas', blocks: [
    { text: 'Atuava sobretudo no metrô, perto da Estação Jabaquara, observando mulheres sozinhas. Segundo o delegado Sérgio Luís Alves, ele dizia ser fácil perceber quando uma mulher tinha algum problema, como quando ficava de “cabecinha baixa”.', sources: ['S18'] },
    { text: 'Era extrovertido e hábil em conversar: deixava as jovens falarem dos próprios problemas, em geral em relacionamentos, e usava essas informações para ganhar a confiança delas.', sources: [] }
  ] },
  { id: 'atracao', title: 'Como as atraía', blocks: [
    { text: 'Apresentava-se como caça-talentos ou agente de modelos e prometia carreira de modelo fotográfica, trabalho em propaganda de uma grande empresa de cosméticos e bom cachê. Convidava as jovens para uma sessão de fotos num ambiente ecológico: o Parque do Estado.', sources: ['S18'] },
    { text: 'No interrogatório, disse que bastava falar o que elas queriam ouvir. Segundo a imprensa, o que mais impressionou as autoridades foi como um homem desarmado convencia mulheres a subir na garupa de uma moto e ir a um matagal com alguém que tinham acabado de conhecer.', sources: [] },
    { text: 'Em ao menos uma abordagem, deixou um cartão com o nome “Jean” e o telefone da empresa onde trabalhava, o que ajudou a polícia a chegar a ele.', sources: [] }
  ] },
  { id: 'ato-final', title: 'Do convencimento ao ato final', note: 'Este dossiê não descreve a violência: o foco é o padrão e a investigação, sem expor as vítimas.', blocks: [
    { text: 'No parque, segundo o delegado Sérgio Luís Alves, ele passava a ameaçar as vítimas, mudando o tom da abordagem: o convite amistoso dava lugar à intimidação.', sources: ['S18'] },
    { text: 'Nos perfis em que a fonte informa a causa da morte (Selma e Patrícia), as jovens morreram por estrangulamento. Os corpos foram deixados em áreas de mata do parque e levaram de um dia a mais de três meses para ser encontrados.', sources: [] },
    { text: 'A condenação inclui homicídio, estupro, atentado violento ao pudor e ocultação de cadáver.', sources: ['S02', 'S04', 'S11'] }
  ] }
];
