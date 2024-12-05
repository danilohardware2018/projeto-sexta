


// Dados do quiz
const questions = [
    {
      question: "Qual linguagem é usada para estilizar páginas web?", // O texto da pergunta.
      options: ["HTML", "CSS", "JavaScript", "Python"], //Um array com as alternativas disponíveis.
      answer: "CSS", //A resposta correta (deve ser uma das alternativas).
    },
    {
      question: "Qual linguagem é usada para manipular o DOM?",
      options: ["CSS", "Python", "JavaScript", "C++"],
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
  
  // Elementos do DOM
  const quizContainer = document.getElementById("quiz"); // Onde as perguntas e opções são exibidas.
  const resultContainer = document.getElementById("result"); //Onde o resultado final será exibido após o quiz.
  
  // Variáveis de controle
  let currentQuestionIndex = 0; //Indica qual pergunta está sendo exibida no momento
  let score = 0; //Armazena a pontuação (quantas perguntas foram respondidas corretamente).
  
  // Função para carregar uma pergunta
  function loadQuestion() {
    // Limpa o container
    quizContainer.innerHTML = ""; //aqui está limpando 
  
    // Verifica se há mais perguntas
    if (currentQuestionIndex >= questions.length) { //se não for negativo 
      showResult();
      return;
    }
  
    // Carrega a pergunta atual
    const questionObj = questions[currentQuestionIndex];
  
    // Adiciona a pergunta ao container
    const questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.textContent = questionObj.question;
    quizContainer.appendChild(questionElement);
  
    // Adiciona as opções
    const optionsContainer = document.createElement("div");
    optionsContainer.className = "options";
    questionObj.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.onclick = () => checkAnswer(option);
      optionsContainer.appendChild(button);
    });
    quizContainer.appendChild(optionsContainer);
  }
  
  // Função para verificar a resposta
  function checkAnswer(selectedOption) {
    const questionObj = questions[currentQuestionIndex];
    if (selectedOption === questionObj.answer) {
      score++;
    }
    currentQuestionIndex++;
    loadQuestion();
  }
  
  // Função para mostrar o resultado final
  function showResult() {
    quizContainer.innerHTML = "";
    resultContainer.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
  }
  
  // Inicia o quiz
  loadQuestion();
  
  function restartPage() {
    location.reload();
    
  }
  