function verificarIdade(){
    var agora = new Date();
    var anoAtual = agora.getFullYear();
    var anoNasc = document.getElementById('txtano');
    var resp = window.document.querySelector('div#resp')

    var img = document.createElement('img');
    img.setAttribute('id','foto');

    if(anoNasc.value.length == 0 || anoNasc.value > anoAtual){
        alert('[ERRO] digite novamente o ano de nascimento!')
    }else{
        alert('Dados preenchidos corretamente.')
        let sexPessoa = document.getElementsByName('radsex');
        var idade = Number(anoAtual - anoNasc.value);
        var genero = '';
        if(sexPessoa[0].checked){
            genero = 'Homem';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/bbHomem.png')
            }else if(idade < 16){
                img.setAttribute('src','imagens/AdoleHomem.png')
            }else if(idade < 50){
                img.setAttribute('src','imagens/AduHomem.png')
            }else{
                img.setAttribute('src','imagens/idosoHomem.png')
            }
        }else if(sexo[1].checked){
            genero = 'Mulher';
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','imagens/bbMulher.png')
            }else if(idade < 16){
                img.setAttribute('src','imagens/AdoleMulher.png')
            }else if(idade < 50){
                img.setAttribute('src','imagens/AduMulher.png')
            }else{
                img.setAttribute('src','imagens/IdodoMulher.png')
            }
        }
        resp.innerHTML = `Sua idade é de ${idade} anos e você é ${genero}`;
        //inserindo a imagem da pessoa na tela
        resp.appendChild(img);
    }

}