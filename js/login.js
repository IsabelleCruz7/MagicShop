
function validarLogin(){

    var un = document.getElementById("un").value;
    var pass = document.getElementById("pass").value;

    var usernameOk = un.length >= 6 && un.length <= 20? true : false;
    var passOk = pass.length >= 4 && pass.length <= 10? true : false;
    
    if(passOk && usernameOk){
        
        
           window.location.href = 'TelaUsuarioLogado.html';
       
    }

    if(!usernameOk){
        alert('Nome de usuario inválido!');
    }
 
    if(!passOk){
        alert('Senha inválida');
    }

   
}

function voltarHome(){
    window.location.href = 'index.html';
}
