let pessoa_1 = {
  nome: 'José',
  sexo: 'M',
  peso: 69.8,
  engordar(peso) {
    this.peso += peso;
  },
  emagrecer(peso) {
    this.peso -= peso;
  },
};

let pessoa_2 = {
  nome: 'Maria',
  sexo: 'F',
  peso: 56.8,
  engordar(peso) {
    this.peso += peso;
  },
  emagrecer(peso) {
    this.peso -= peso;
  },
};

let pessoa_3 = {
  nome: 'Danilo',
  sexo: 'M',
  peso: 70.8,
  engordar(peso) {
    this.peso += peso;
  },
  emagrecer(peso) {
    this.peso -= peso;
  },
};

/*
console.log(pessoa_1)
console.log(pessoa_2)
console.log(pessoa_3)

pessoa_1.emagrecer(7)
console.log(pessoa_1)

pessoa_2.engordar(7)
console.log(pessoa_2)

pessoa_3.emagrecer(15)
console.log(pessoa_3)

*/


// Lista de pessoas usando as variáveis existentes
const pessoas = [pessoa_1, pessoa_2, pessoa_3];

// Função para renderizar os dados no DOM
function renderPessoas() {
  const app = document.getElementById('app');
  app.innerHTML = ''; // Limpa o conteúdo anterior

  pessoas.forEach((pessoa, index) => {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
      <h2>${pessoa.nome}</h2>
      <p>Sexo: ${pessoa.sexo}</p>
      <p>Peso: <span id="peso-${index}">${pessoa.peso.toFixed(1)} kg</span></p>
      <button onclick="alterarPeso(${index}, 5)">+5 kg</button>
      <button onclick="alterarPeso(${index}, -5)">-5 kg</button>
    `;

    app.appendChild(card);
  });
}

// Função para alterar o peso
function alterarPeso(index, valor) {
  const pessoa = pessoas[index];
  if (valor > 0) {
    pessoa.engordar(valor);
  } else {
    pessoa.emagrecer(-valor);
  }
  renderPessoas(); // Atualiza a exibição
}

// Inicializa o DOM
renderPessoas();

