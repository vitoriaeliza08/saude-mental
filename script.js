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
                texto: "a) Tenho um horário regular e procuro descansar bem.",
                afirmacao: "Você busca manter uma rotina saudável e equilibrada."
            },
            {
                texto: "b) Durmo pouco e com horários irregulares.",
                afirmacao: "Você pode estar enfrentando desafios para encontrar esse equilíbrio."
            }
        ]
    },
    {
        enunciado: "4- Você se sente confortável em pedir ajuda quando precisa?",
        alternativas: [
            {
                texto: "a) Sim, sei que é importante contar com apoio.",
                afirmacao: "Você acredita que buscar apoio especializado é um passo importante."
            },
            {
                texto: "b) Não, prefiro resolver sozinho(a).",
                afirmacao: "Você pode preferir resolver questões de saúde mental por conta própria."
            }
        ]
    },
    {
        enunciado: "5- Como você lida com pensamentos negativos?",
        alternativas: [
            {
                texto: "a) Tento reestruturar meus pensamentos e buscar solução.",
                afirmacao: "Você reconhece o impacto do estresse e busca formas de enfrentá-lo."
            },
            {
                texto: "b) Fico preso(a) neles por muito tempo.",
                afirmacao: "Você pode estar ignorando o estresse ou não sabe como lidar com ele."
            }
        ]
    },
    {
        enunciado: "6- Como você se vê na sua própria jornada emocional?",
        alternativas: [
            {
                texto: "a) Estou constantemente buscando evoluir e me entender.",
                afirmacao: "Você valoriza os relacionamentos e sabe que eles são fundamentais."
            },
            {
                texto: "b) Não costumo refletir sobre isso e apenas sigo o fluxo.",
                afirmacao: "Você pode estar se isolando ou distante das pessoas ao seu redor."
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
