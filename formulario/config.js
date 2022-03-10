
var action = document.getElementById('action')


function validarFormulario(){

    var nome = document.getElementById('nome').value
    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    

   if(nome != '' && email != '' && senha != '') {
       alert('usuario cadastrado com sucesso')
   } else{
       alert('Preencha todos os dados')
   }
}


action.addEventListener('click', validarFormulario)