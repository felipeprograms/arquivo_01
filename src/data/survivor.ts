// Relato de uma sobrevivente, segundo reportagem sobre o documentário da Prime Video (S21).
// Escrito sem detalhes da violência; falas dela são o testemunho dela, não fatos verificados em documentos oficiais.
export interface SurvivorBlock { h: string; p: { text: string; sources: string[] }[]; }
export const survivor = {
  name: 'Lícia Lopes dos Santos',
  tagline: 'Sobrevivente · Diadema (SP)',
  photo: { key: 'survivor-licia', caption: 'Lícia Lopes dos Santos, em entrevista ao documentário' },
  intro: 'Lícia, que sempre morou em Diadema (SP), é uma das sobreviventes dos ataques de Francisco de Assis Pereira. Ela contou sua história no documentário lançado pela Prime Video em 1º de novembro de 2024 e lembrou como foi levada ao Parque do Estado, resistiu e conseguiu escapar.',
  blocks: [
    { h: 'O homem na escola', p: [
      { text: 'Em fevereiro de 1997, segundo o relato, Lícia fazia um curso quando um homem apareceu na escola. Ele parecia querer se matricular, mas ficava sobre uma moto, olhando as alunas, e não ia embora. As meninas se sentiram muito incomodadas.', sources: ['S21'] },
      { text: 'Naquele dia, enquanto esperava o transporte para voltar a Diadema, o homem se aproximou, mostrou uma arma e a obrigou a acompanhá-lo.', sources: ['S21'] },
      { text: 'No caminho, Lícia viu uma pessoa e tentou avisar que corria perigo: fez gestos e disse que a conhecia. Isso fez o homem esconder a arma. Quando ele se distraiu, ela pegou um ônibus e fugiu.', sources: ['S21'] }
    ] },
    { h: 'Novo ataque', p: [
      { text: 'No dia seguinte, ele voltou e conseguiu levá-la ao Parque do Estado, onde a obrigou a entrar na mata e tentou agredi-la. Quando ele se virou, Lícia viu a chance e correu. “Eu saí correndo, correndo!”, descreveu.', sources: ['S21'] }
    ] },
    { h: 'A denúncia', p: [
      { text: 'Depois do ataque, Lícia procurou a delegacia, mas encontrou um escrivão mais interessado em um jogo de futebol do que em registrar a queixa. “Será que isso não é suficiente para ele me ouvir, me dar um pouco de atenção?”, questionou. Dias depois, conseguiu registrar o caso, que foi anotado apenas como roubo consumado.', sources: ['S21'] }
    ] }
  ] as SurvivorBlock[],
  note: 'A data do relato (fevereiro de 1997) é anterior a 1998, ano dos crimes que levaram à prisão. As fontes consultadas não explicam a diferença; por isso o dossiê não altera a linha do tempo.'
};
