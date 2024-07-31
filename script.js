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
        afirmação:"parece que você se enganou, o Vaticano é o menor país do mundo e o maior é a Rússia",
      },
      {
     texto: "Vaticano e Rússia",
        afirmação:"resposta certa, parabéns!",
          }
        ]
    },
    {
        enunciado: "Quantas casas decimais tem o número pi?",
    alternativas:[
  {
     texto: "Milhares",
    afirmação:"resposta certa, você é muito inteligente",
  },
  }
     texto: "Infinitas",
  afirmação:"Vocẽ errou, a quantidade de casas decimais do número pi é muito grande mas existe um fim",
       },
     ]
  },
  {
    enunciado: "Atualmente, quantos elementos químicos a tabela periodica possui?",
    alternativas:[
      {
      texto: "122",
        afirmação:"parece que você se enganou",
  },
  }
      texto: "118",
    afirmação:"resposta certa, parabéns!",
      }
    ]
  },
  {
    enunciado: "O que a palavra legend significa em português?",
    alternativas:[
    {
      texto: "Lenda",
      afirmação:"resposta certa, parabéns",
  },
  }
      texto: "Legenda",
      afirmação:"vocẽ se enganou, resposta errada",
      }
    ]
 },
 {
    enunciado: "Em que período da pré-história o fogo foi descoberto?",
    alternativas:[
      {
      texto: "Neolítico"
        afirmação:"você errou, é bom estudar um pouco mais de história",
  },
  }
      texto: "Paleolítico",
        afirmação:"parabéns, resposta certa",
       }
    [
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
            const afirmacoes = opcaoSelecionada.afirmacoes; mudar para opcaoSelecionada.afirmação
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
