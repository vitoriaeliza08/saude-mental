const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "1- Como você lida com o estresse?",
        alternativas: [
            {
                texto: "a) Praticando exercícios físicos / ou ocupando com outra coisa.",
                afirmacao: "Você entende que cuidar do corpo e da mente é essencial para o bem-estar."
            },
            {
                texto: "b) Tento ignorar e seguir em frente.",
                afirmacao: "Você pode estar ignorando o estresse ou não sabe como lidar com ele."
            }
        ]
    },
    {
        enunciado: "2- Qual sua abordagem para emoções negativas? ",
        alternativas: [
            {
                texto: "a) Converso com amigos, familiares ou procuro ajuda proissional.",
                afirmacao: "Você valoriza o apoio emocional e acredita na importância de compartilhar."
            },
            {
                texto: "b) Guardo pra mim e evito falar sobre isso.",
                afirmacao: "Você prefere lidar com seus sentimenos de forma mais rservada."
            }
        ]
    },
    {
        enunciado: "3- Como é sua rotina de sono?",
        alternativas: [
            {
                texto: "a) Tenho um horário ",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "",
        alternativas: [
            {
                texto: "",
                afirmacao: ""
            },
            {
                texto: "",
                afirmacao: ""
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
