const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-pergunta");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
  {
    enunciado:"Qual o menor e o maior país do mundo?",
    alternativas:[
      "Mônaco e Canadá",
      "Vaticano e Rússia",
    ]
  }
  {
    enunciado:"Quantas casas decimais tem o número pi?",
    alternativas:[
      "Milhares",
      "Infinitas",
    ]
  }
  {
    enunciado:"Atualmente, quantos elementos químicos a tabela periodica possui?",
    alternativas:[
      "122",
      "118",
    ]
  }
  {
    enunciado:"O que a palavra legend significa em português?",
    alternativas:[
      "Lenda",
      "Legenda",
    ]
  }
  {
    enunciado:"Em que período da pré-história o fogo foi descoberto?",
    alternativas:[
      "Neolítico",
      "Paleolítico",
    ]
  }
];

let atual=0
let perguntaAtual;

fuction mostraPerguntas(){
  perguntaAtual=perguntas[atual];
  caixaPerguntas.textContent=perguntaAtual.enunciado;
  mostraAlternativas();
}

function mostraAlternativa(){
  for(const alternativa of perguntaAtual.alternativa){
  const botaoAlternativas=document.createElement("button");
  botaoAlternativas.textContent=alternativa;
  caixaAlternativas.appendCheld(botaoAlternativas);
  }
}

mostraPergunta();







