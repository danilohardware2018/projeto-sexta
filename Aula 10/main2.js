//https://cdnjs.com/libraries/jquery

//document.getElementById("titulo").style.color = "red"; // DOM

$("#titulo").css("color","red"); // jquery

//function mudar () {
//    $('#resultado').text('você clocou no botão')
//}



//ação do botão 
const mudar = () => $('#resultado').text('você clicou no botão!')
let botao = $('#meuBotao')
botao.on('click', mudar)

//quando o botão for clicado 
$('#carregarDados').on('click', function(){
    // Fazendo a requisição AJAX para uma API pública 

    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/users', //API de exemplo
        type: 'GET', // método HTTP
        success: function (resposta){
            //limpa a lista antes do popular
            $('#listaUsuarios').empty()

            //alterar sobre  os dados recebidos e adiciona na lista 
            resposta.forEach(function (usuario) {
                $('#listaUsuarios').append(
                    `<li>${usuario.name} - ${usuario.email}</li>`
                )
            }) 
        },
        error: function (erro) {
            // caso ocorra um erro 
            console.error('Erro ao Carregar os dados:', erro)
            alert('Não foi possivel caeergar os dados.')
        }
        })
})