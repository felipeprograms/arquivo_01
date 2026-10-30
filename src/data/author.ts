// Conteúdo da seção "Autor do crime". Cada parágrafo traz as fontes que o sustentam.
// Falas do próprio autor e de seus advogados são autodeclarações: não são fatos verificados.
export interface AuthorBlock { text: string; sources: string[]; }
export interface AuthorSection { id: string; title: string; blocks: AuthorBlock[]; note?: string; media?: 'infancia' | 'identificacao'; }

export const authorSections: AuthorSection[] = [
  { id: 'identificacao', title: 'Identificação', media: 'identificacao', blocks: [
    { text: 'Francisco de Assis Pereira nasceu em 29 de novembro de 1967, em São José do Rio Preto (SP), segundo registros publicados sobre o caso; a Gazeta SP indica 1968, em Guaraci (SP). Era motoboy em 1998, ano dos crimes.', sources: ['S08', 'S01'] },
    { text: 'Foi preso em 4 de agosto de 1998 em Itaqui (RS) e condenado por homicídio, estupro, atentado violento ao pudor e ocultação de cadáver. Hoje tem cerca de 58 anos e cumpre pena na Penitenciária de Iaras (SP).', sources: ['S02', 'S04', 'S11'] }
  ] },
  { id: 'infancia', title: 'Infância e criação', media: 'infancia', blocks: [
    { text: 'Os relatos sobre a infância vêm sobretudo do jornalista Ullisses Campbell, autor de livro sobre o caso. Segundo ele, durante a gravidez a mãe teria ouvido de um avô, adepto do satanismo, que gerava “um bebê do diabo” e, por isso, passou a negligenciá-lo. Ela se mudou de São José do Rio Preto para São Paulo com dois dos filhos e deixou Francisco com o avô.', sources: ['S17'] },
    { text: 'Para Campbell, assassinos em série “não nascem do dia para a noite” e a negligência familiar na infância está na origem da personalidade criminosa. É a tese do autor, não um fato verificado pela reportagem.', sources: ['S17'] },
    { text: 'Há registro da versão de que uma tia materna teria abusado dele na infância; a tia contestou e negou, em 1998. O dossiê não adota essa versão como explicação dos crimes: a maioria das pessoas que sofrem negligência ou abuso não comete crimes.', sources: ['S08'] }
  ] },
  { id: 'familia', title: 'Família e relacionamentos', blocks: [
    { text: 'Além da mãe, do avô e de pelo menos dois irmãos citados por Campbell, as fontes consultadas não detalham o núcleo familiar. O dossiê não identifica parentes pelo nome.', sources: ['S17'] },
    { text: 'Na prisão, casou-se com uma admiradora que conheceu por carta; o casal se separou depois, e a ex-noiva relatou estranheza em suas ações e personalidade. Registros citam também Jussara, que o conheceu por carta e se dedica a resolver seus problemas jurídicos.', sources: ['S08'] },
    { text: 'Segundo a advogada Caroline Landim, ele ficou mais de dez anos sem receber visitas e pediu transferência para uma unidade mais próxima da família (declaração da defensora).', sources: ['S20'] }
  ] },
  { id: 'vida-adulta', title: 'Vida adulta antes de 1998', blocks: [
    { text: 'Trabalhava como motoboy numa empresa próxima à delegacia que investigava os casos. Antes de ser ligado aos crimes, foi chamado ao DHPP por causa de uma folha de cheque em nome de Isadora Fraenkel, usada na compra de um capacete. Alegou que ela consentira e foi liberado.', sources: ['S08'] },
    { text: 'Há ainda relatos pessoais anteriores (relações e episódios de violência contra uma companheira) sem confirmação em fonte primária. O dossiê não os detalha.', sources: ['S08'] }
  ] },
  { id: 'saude-mental', title: 'Saúde mental e diagnóstico', blocks: [
    { text: 'Não há laudo psiquiátrico público acessível, e as fontes consultadas não informam diagnóstico formal.', sources: ['S08'] },
    { text: 'A advogada Caroline Landim afirma que o último laudo, feito à época do crime, apontou transtorno de personalidade antissocial, condição que, segundo ela, não tem cura e nunca teve acompanhamento. É declaração da defensora, não um documento verificado.', sources: ['S20'] },
    { text: 'Psicopatia, termo popular, não é um diagnóstico oficial nas classificações médicas (CID e DSM); costuma ser avaliada por escalas como a PCL-R. Nenhuma fonte consultada informa que ele tenha sido avaliado assim. Portanto, o dossiê não afirma que ele seja “psicopata”.', sources: [] },
    { text: 'O psiquiatra forense Guido Palomba afirma, no documentário “Investigação Criminal”, que assassinos em série costumam ter padrões de vítima, o que pode refletir “um imaginário pessoal”. Em setembro de 2018, o Ministério Público pediu novo exame de sanidade mental; o debate atual está no capítulo sobre o processo judicial.', sources: ['S18', 'S08'] }
  ] },
  { id: 'reconhecimento', title: 'Como ele se reconheceu como assassino', blocks: [
    { text: 'Em depoimentos gravados à polícia, em 1998, e exibidos no documentário “Maníaco do Parque: A História Não Contada” (Prime Video), ele disse ter “um ser dentro de mim” que convencia as mulheres a ir ao parque, e que torcia para que elas não aceitassem: “O que vinha na minha mente era que elas não viessem comigo.”', sources: ['S19'] },
    { text: 'Diante do delegado do DHPP, confessou os crimes e indicou onde estavam os corpos. O número varia: 10 mortes e 23 ataques, segundo registros publicados sobre o caso; 10, segundo o Metrópoles; 11, segundo o g1 citado pela Aventuras na História.', sources: ['S08', 'S19', 'S18'] },
    { text: 'Hoje diz considerar-se uma “pessoa normal”, atribui o passado a “uma coisa maligna” e afirma estar vivo por causa da fé. A advogada diz que ele tenta demonstrar mudança, o que, para ela, é comum em casos como o dele. São autodeclarações, sem avaliação pericial pública.', sources: ['S08', 'S20'] }
  ] },
  { id: 'escolha', title: 'Como escolhia as vítimas', blocks: [
    { text: 'Atuava sobretudo no metrô, perto da Estação Jabaquara, observando mulheres sozinhas. Segundo o delegado Sérgio Luís Alves, ele dizia ser fácil perceber quando uma mulher tinha algum problema, como quando ficava de “cabecinha baixa”.', sources: ['S18', 'S08'] },
    { text: 'Era extrovertido e hábil em conversar: deixava as jovens falarem dos próprios problemas, em geral em relacionamentos, e usava essas informações para ganhar a confiança delas.', sources: ['S08'] }
  ] },
  { id: 'atracao', title: 'Como as atraía', blocks: [
    { text: 'Apresentava-se como caça-talentos ou agente de modelos e prometia carreira de modelo fotográfica, trabalho em propaganda de uma grande empresa de cosméticos e bom cachê. Convidava as jovens para uma sessão de fotos num ambiente ecológico: o Parque do Estado.', sources: ['S18', 'S08'] },
    { text: 'No interrogatório, disse que bastava falar o que elas queriam ouvir. Segundo registros publicados sobre o caso, o que mais impressionou as autoridades foi como um homem desarmado convencia mulheres a subir na garupa de uma moto e ir a um matagal com alguém que tinham acabado de conhecer.', sources: ['S08'] },
    { text: 'Em ao menos uma abordagem, deixou um cartão com o nome “Jean” e o telefone da empresa onde trabalhava, o que ajudou a polícia a chegar a ele.', sources: ['S08'] }
  ] },
  { id: 'ato-final', title: 'Do convencimento ao ato final', note: 'Este dossiê não descreve a violência: o foco é o padrão e a investigação, sem expor as vítimas.', blocks: [
    { text: 'No parque, segundo o delegado Sérgio Luís Alves, ele passava a ameaçar as vítimas, mudando o tom da abordagem: o convite amistoso dava lugar à intimidação.', sources: ['S18'] },
    { text: 'Nos perfis em que a fonte informa a causa da morte (Selma e Patrícia), as jovens morreram por estrangulamento. Os corpos foram deixados em áreas de mata do parque e levaram de um dia a mais de três meses para ser encontrados.', sources: ['S08'] },
    { text: 'A condenação inclui homicídio, estupro, atentado violento ao pudor e ocultação de cadáver.', sources: ['S02', 'S04', 'S11'] }
  ] }
];
