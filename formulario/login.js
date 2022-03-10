var action = document.getElementById('action')


function validarFormulario(){

    var email = document.getElementById('email').value
    var senha = document.getElementById('senha').value
    

   if( email != '' && senha != '') {
       alert(`Bem Vindo ${email} é bom te ver de novo aqui`)
   } else{
       alert('Preencha todos os dados')
   }
}


action.addEventListener('click', validarFormulario)