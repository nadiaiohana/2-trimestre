const caixaPrincipal=document.querySelector(".caixa-principal");
const caixaPerguntas=document.querySelector(".caixa-pergunta");
const caixaAlternativas=document.querySelector(".caixa-alternativas");
const caixaResultado=document.querySelector(".caixa-resultado");
const textoResultado=document.querySelector(".texto-resultado");

const perguntas=[
  {
  enunciado: "Qual o menor e o maior país do mundo?",
    alternativas:[
      {
      texto: "Mônaco e Canadá",
        afirmação:"afirmativa",
      },
      {
     texto: "Vaticano e Rússia",
        afirmação:"afirmativa",
          }
        ]
      }
    { 
        enunciado: "Quantas casas decimais tem o número pi?",
    alternativas:[
  {
     texto: "Milhares",
    afirmação:"afirmativa",
  },
  }
     texto: "Infinitas",
  afirmação:"afirmativa",
   },
  ]
    enunciado: "Atualmente, quantos elementos químicos a tabela periodica possui?",
    alternativas:[
      {
      texto: "122",
        afirmação:"afirmativa",
  },
  }
      texto: "118",
    afirmação:"afirmativa",
  },
  ]
    enunciado: "O que a palavra legend significa em português?",
    alternativas:[
    {
      texto: "Lenda",
      afirmação:"afirmativa",
  },
  }
      texto: "Legenda",
      afirmação:"afirmativa",
  },
  ]
    enunciado: "Em que período da pré-história o fogo foi descoberto?",
    alternativas:[
      {
      texto: "Neolítico",
        afirmação:"afirmativa",
  },
  }
      texto: "Paleolítico",
        afirmação:"afirmativa",
  },
  ];

let atual = 0;
let perguntaAtual;
let historiaFinal = ""; 

function mostraPergunta() {
     if(atual >= perguntas.length){
        mostraResultado();
        return;
    }  
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas() {
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
            const afirmacoes = opcaoSelecionada.afirmacoes; mudar para opcaoSelecionada.afirmacao
            historiaFinal = += afirmacoes + " "; 
            atual++;
            mostraPergunta();
      }

function mostraResultado(){
    caixaPerguntas.textContent = "pelas suas respostas você me parece uma pessoa muito inteligente"
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent ="";
}

mostraPergunta();
