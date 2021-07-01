function cadastroUsuario(){
    var nome = document.getElementById('nome_cad').value;
    var cpf = document.getElementById('cpf_cad').value;
    var endereco = document.getElementById('end_cad').value;
    var cidade = document.getElementById('cid_cad').value;
    var estado = document.getElementById('est_cad').value;
    var pais = document.getElementById('pais_cad').value;
    var email = document.getElementById('email_cad').value;
    var senha = document.getElementById('senha_cad').value;

    if(senha.length <= 8){
        if(senha === 0){
            alert("Peencha os dados corretamente.")
        }
    }else{
        if(cpf.length <= 14){
            if(cpf == "000.000.000-00" || 
            cpf == "111.111.111-11" ||
            cpf == "222.222.222-22" ||
            cpf == "333.333.333-33" ||
            cpf == "444.444.444-44" ||
            cpf == "555.555.555-55" ||
            cpf == "666.666.666-66" ||
            cpf == "777.777.777-77" ||
            cpf == "888.888.888-88" ||
            cpf == "999.999.999-99"){
                alert("Preencha os dados corretamente.")
            }
        } 
    }
}