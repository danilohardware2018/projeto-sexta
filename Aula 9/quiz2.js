// Dados no quiz

const questions = [
{
    question: "Qual linguagem é usada para ultilizar páginas web?", // O texto da pergunta.
    options: ["Html","CSS","JavaScript","Python"], // um array com as alternativas disponíveis.
    answer: "CSS", // A resposta correta ( deve ser umas das alternativas). 
},
{
    question: "Qual linguagem é usada para manipular o Dom?",
    options: ["CSS","Python","Javascript","c++"],
    answer: "JavaScript",
},
{
    question: "O que significa HTML?",
    options: [
        "Hyper Trainer Marking Language",
        "Hyper Text Markup Language",
        "Hyper Text Manipulation Language",
        "Home Tool Markup Language"
    ],
    answer: "Hyper Text Markup Language",
},
];

//elementos do Dom 

const quizContainer = document.getElementById("quiz"); // onde as perguntas e opções são exibidas.
const resulContainer = document.getElementById("result"); // onde o resultado final será exibido apos o quiz.

//variáveis de controle 
let currentQuestionIndex = 0; //indica qual pergunta está sendo exibida no momento 
let score = 0; //armazena a pontuação 

//função que carrega uma pergunta 
function loadQuestion() {
    // limpa o container
    quizContainer.innerHTML =""; // aqui está limpando

    //veficar se há mais perguntas
    if(currentQuestionIndex >= questions.length) { // se não for negativo 
        showResult();
        return;
    }


    //carrega a pergunta atual 
    const questionObj = questions[currentQuestionIndex];

    //adiciona a  pergunta ao container
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.textContent = questionObj.question;
    quizContainer.appendChild(questionElement);

    //adiciona as opções 

    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";
    questionObj.options.forEach((Option) => {
        const button = document.createElement("button");
        button.textContent = Option;
        button.onclick = () => checkAnswer(Option);
        optionsContainer.appendChild(button);
    });
    quizContainer.appendChild(optionsContainer);
}

// função para veificar a resposta 

function checkAnswer(selectedOption) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedOption === questionObj.answer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

//função para mostrar o resultado final 
function showResult(){
    quizContainer.innerHTML = "";
    resulContainer.textContent = `você acertou ${score} de ${questions.length} pergunta!`;
}

// Inicia o quiz 
loadQuestion();

function restarPage(){
    location.reload();
}