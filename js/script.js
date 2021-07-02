function cadUser(){
    var nome = document.getElementById('nome_cad').value;
    var cpf = document.getElementById('cpf_cad').value;
    var endereco = document.getElementById('end_cad').value;
    var cidade = document.getElementById('cid_cad').value;
    var estado = document.getElementById('est_cad').value;
    var pais = document.getElementById('pais_cad').value;
    var email = document.getElementById('email_cad').value;
    var user = document.getElementById('user_cad').value;
    var senha = document.getElementById('senha_cad').value;
    var conf_senha = document.getElementById('conf_senha_cad').value;

    if (nome == "" || cpf == "" || endereco == "" || cidade == "" || estado == "" || pais == "" 
    || email == "" || user == "") {
        alert("Insira os dados corretamente!");
    } else if(validar_cpf()){
        
    } else if (senha.length <= "6" || senha == "") {
        alert("Senha muito curta.");
    } else if (senha != conf_senha) {
        alert("As senhas não correspondem.");
    } else {  
        alert("Nome:" + nome + "\nCPF:" + cpf + "\nEndereço" + endereco + "\nCidade:" + cidade + "\nEstado:" + estado +
        "\nPais:" + pais + "\nEmail:" + email + "Username:" + user + "\nSenha:" + senha + 
        "\nCadastro realizado com sucesso!");
    }

    function validar_cpf() {
        if(cpf == ""){
            alert("CPF inválido.");
        } else if(cpf == "11" ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999"){
            alert("CPF inválido.");
        } 
    
        add = 0;
        for (i=0; i < 9; i ++){
            add += parseInt(cpf.charAt(i)) * (10-i);
        }
        dig1 = (add*10)%11;
        add = 0;	
        for (i = 0; i < 10; i ++){		
            add += parseInt(cpf.charAt(i)) * (11-i);
        }
        dig2 = (add*10)%11;
        if(cpf.charAt("9") != dig1 && cpf.charAt("10") != dig2){
            alert("CPF inválido.");
        }
    }

    // if(senha.length <= 8){
    //     if(senha === 0){
    //         alert("Peencha os dados corretamente.")
    //     }
    // }else{
    //     if(cpf.length <= 14){
    //         if(cpf == "000.000.000-00" || 
    //         cpf == "111.111.111-11" ||
    //         cpf == "222.222.222-22" ||
    //         cpf == "333.333.333-33" ||
    //         cpf == "444.444.444-44" ||
    //         cpf == "555.555.555-55" ||
    //         cpf == "666.666.666-66" ||
    //         cpf == "777.777.777-77" ||
    //         cpf == "888.888.888-88" ||
    //         cpf == "999.999.999-99"){
    //             alert("Preencha os dados corretamente.")
    //         }
    //     } 
    // }
}