const perguntas = [
  {
    pergunta:
      "Qual é o nome do ataque usado por Goku para escapar do corpo de Ginyu?",
    respostas: [
      { opcao: "Kaioken", correto: false },
      { opcao: "Instant Transmission", correto: false },
      { opcao: "Troca de corpos reversa (Reversal Change)", correto: true }
    ]
  },
  {
    pergunta:
      "Qual foi a primeira forma de Cell que absorveu energia de Androids antes de evoluir?",
    respostas: [
      { opcao: "Forma Perfeita", correto: false },
      { opcao: "Forma Semi-Perfeita", correto: false },
      { opcao: "Forma Imperfeita", correto: true }
    ]
  },
  {
    pergunta: "Qual o nome do planeta onde Goku treinou com o Sr. Kaioh?",
    respostas: [
      { opcao: "Namekusei", correto: false },
      { opcao: "Planeta do Sr. Kaioh", correto: true },
      { opcao: "Yardrat", correto: false }
    ]
  },
  {
    pergunta:
      "Qual técnica Vegeta usou contra Majin Buu antes de se sacrificar?",
    respostas: [
      { opcao: "Final Flash", correto: false },
      { opcao: "Big Bang Attack", correto: false },
      { opcao: "Explosion Final", correto: true }
    ]
  },
  {
    pergunta:
      "Qual a raça original de Majin Buu antes de absorver outros guerreiros?",
    respostas: [
      { opcao: "Demônio", correto: false },
      { opcao: "Magin", correto: false },
      { opcao: "Ser primordial criado pelo Bibidi", correto: true }
    ]
  },
  {
    pergunta:
      "Quem foi o primeiro personagem a perceber que Cell podia se regenerar?",
    respostas: [
      { opcao: "Gohan", correto: false },
      { opcao: "Piccolo", correto: true },
      { opcao: "Goku", correto: false }
    ]
  },
  {
    pergunta: "Qual é o verdadeiro nome do Android 17?",
    respostas: [
      { opcao: "Lapis", correto: true },
      { opcao: "Jin", correto: false },
      { opcao: "Ryo", correto: false }
    ]
  },
  {
    pergunta: "Qual foi o desejo feito por Dende após a luta com Freeza?",
    respostas: [
      { opcao: "Reviver Goku", correto: false },
      {
        opcao: "Transportar todos para a Terra, exceto Goku e Freeza",
        correto: true
      },
      { opcao: "Restaurar Namekusei", correto: false }
    ]
  },
  {
    pergunta: "Quem criou a Sala do Tempo e do Espírito?",
    respostas: [
      { opcao: "Kami-Sama", correto: true },
      { opcao: "Mestre Karin", correto: false },
      { opcao: "Mr. Popo", correto: false }
    ]
  },
  {
    pergunta: "Qual é a falha do Final Flash quando usado pela primeira vez?",
    respostas: [
      { opcao: "Gasta muito Ki", correto: false },
      { opcao: "Precisa de muito tempo de carregamento", correto: true },
      { opcao: "É impreciso", correto: false }
    ]
  }
];

const perguntaElemento = document.querySelector(".pergunta");
const respostasElemento = document.querySelector(".respostas");
const progressoElemento = document.querySelector(".progresso");
const textoFinal = document.querySelector(".fim span");
const conteudo = document.querySelector(".conteudo");
const conteudoFinal = document.querySelector(".fim");

let indiceAtual = 0;
let acertos = 0;

function carregarPergunta() {
  progressoElemento.innerHTML = `${indiceAtual + 1}/${perguntas.length}`;
  const perguntaAtual = perguntas[indiceAtual];
  perguntaElemento.innerHTML = perguntaAtual.pergunta;
  respostasElemento.innerHTML = "";

  for (let i = 0; i < perguntaAtual.respostas.length; i++) {
    const resposta = perguntaAtual.respostas[i];
    const botao = document.createElement("button");
    botao.classList.add("botao-resposta");
    botao.innerText = resposta.opcao;

    botao.onclick = function () {
      if (resposta.correto) {
        acertos++;
      }

      indiceAtual++;

      if (indiceAtual < perguntas.length) {
        carregarPergunta();
      } else {
        finalizarJogo();

        // Toca o som no final
        const audio = new Audio("https://files.catbox.moe/l413bi.mp3");
        audio.play();
      }
    };

    respostasElemento.appendChild(botao);
  }
}

function finalizarJogo() {
  textoFinal.innerHTML = `Voce acertou ${acertos} de ${perguntas.length}`;
  conteudo.style.display = "none";
  conteudoFinal.style.display = "flex";
}

carregarPergunta();
