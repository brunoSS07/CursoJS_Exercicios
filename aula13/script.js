function verificar(){
    var agora = new Date();
    var anoAtual = agora.getFullYear();
    var anoNasc = document.getElementById('txtano');
    var resp = document.querySelector('div#resp');

    //criar um elemento a partir do js
    var img = document.createElement('img');
    //atribuir id pro meu elemento
    img.setAttribute('id', 'foto');

    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        window.alert("ERRO! Verifique novamente seus dados.")
    }else{
        window.alert("Dados preenchidos corretamente!")
        var sexo = document.getElementsByName('radsex');
        var respostaIdade = Number(anoAtual - anoNasc.value);
        var genero ='';
        if(sexo[0].checked){
            genero = "Homem";
            if(respostaIdade >= 0 && respostaIdade < 10){
                //criança
                img.setAttribute('src', 'imagens/bbHomem.png')
            }else if(respostaIdade < 18){
               // adolescente
               img.setAttribute('src', 'imagens/AdoleHomem.png')
            }else if(respostaIdade < 50){
                //adulto
                img.setAttribute('src', 'imagens/AduHomem.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/idosoHomem.png')
            }
        }else if(sexo[1].checked){
            genero = "Mulher";
            if(respostaIdade >= 0 && respostaIdade < 10){
                //criança
                img.setAttribute('src', 'imagens/bbMulher.png')
            }else if(respostaIdade < 18){
               // adolescente
               img.setAttribute('src', 'imagens/AdoleMulher.png')
            }else if(respostaIdade < 50){
                //adulto
                img.setAttribute('src', 'imagens/AduMulher.png')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/IdodoMulher.png')
            }
        }
        resp.innerHTML = `Sua idade é de ${respostaIdade} anos e você é ${genero}.`;
        //atribuir na div com id resp minha img
        resp.appendChild(img);

    }
}