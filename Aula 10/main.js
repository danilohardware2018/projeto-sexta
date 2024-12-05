// https://cdnjs.com/libraries/jquery

// document.getElementById("titulo")
$('#titulo').css('color', 'red')

// function mudar() {
//   $('#resultado').text('Você clicou no botão!')
// }

const mudar = ()=> $('#resultado').text('Você clicou no botão!')
let botao = $('#meuBotao')
botao.on('click', mudar)

// Quando o botão for clicado
$('#carregarDados').on('click', function () {
  // Fazendo a requisição AJAX para uma API pública
  $.ajax({
    url: 'https://jsonplaceholder.typicode.com/users', // API de exemplo
    type: 'GET', // Método HTTP
    success: function (resposta) {
      // Limpa a lista antes de popular
      $('#listaUsuarios').empty()

      // Itera sobre os dados recebidos e adiciona na lista
      resposta.forEach(function (usuario) {
        $('#listaUsuarios').append(
          `<li>${usuario.name} - ${usuario.email}</li>`
        )
      })
    },
    error: function (erro) {
      // Caso ocorra um erro
      console.error('Erro ao carregar os dados:', erro)
      alert('Não foi possível carregar os dados.')
    }
  })
})