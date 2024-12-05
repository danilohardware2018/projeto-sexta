// Inicializa variáveis do jogo
let num = Math.floor(Math.random() * 100) + 1;
let vidas = 7;

// Seleciona elementos do DOM
const form = document.getElementById('guess-form');
const input = document.getElementById('guess-input');
const message = document.getElementById('message');
const livesCount = document.getElementById('lives-count');


// Função para verificar o chute
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Evita recarregar a página

  const chute = parseInt(input.value);

  if (isNaN(chute) || chute < 1 || chute > 100) {
    message.textContent = 'Por favor, digite um número válido entre 1 e 100.';
    return;
  }

  if (chute === num) {
    message.textContent = 'Parabéns! Você acertou!';
    message.style.color = 'green';
    form.querySelector('button').disabled = true; // Desabilita o botão após vencer
  } else {
    vidas--;
    livesCount.textContent = vidas;

    if (vidas === 0) {
      message.textContent = `Acabaram suas chances! O número era ${num}.`;
      message.style.color = 'red';
      form.querySelector('button').disabled = true;
    } else {
      if (chute > num) {
        message.textContent = `Dica: Escolha um número menor. Você ainda tem ${vidas} chance(s).`;
      } else {
        message.textContent = `Dica: Escolha um número maior. Você ainda tem ${vidas} chance(s).`;
      }
      message.style.color = 'blue';
    }
  }

  input.value = ''; // Limpa o campo de entrada
});