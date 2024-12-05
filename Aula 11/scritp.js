

//  buscando id , evento click 
$('#buscar').on('click', function () {
    //fazendo a requisição ///GEt para a api 
$.ajax({

    url: 'https://reqres.in/api/users', // endpoint da API
    type: 'GET', //tipo de requisição GET
    success: function (response) {
        // limpa a lista de usuario antes exibir os novos dados 
        $('#usuarios-lista').empty()

        // Percorre a lista de usuarios e exibe os dados 
        response.data.forEach(function (usuario) {
            // cria um item da lista para cada usuario

            const listaItem = $('<li>').text (
                `${usuario.first_name} ${usuario.last_name}`
            )

            // adiciona o item na lsita 
            $('#usuarios-lista').append(listaItem)
          })
        },
                error: function (error) {
               // exibe um mensagem de erro se a requisição falhar 
               $(`#usuarios-lista`).html(`<li> Erro ao carregar os dados.</li>`)
}
})
})
