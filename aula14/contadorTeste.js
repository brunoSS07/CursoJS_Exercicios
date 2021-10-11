function contar(){
    let inicio = document.getElementById('inicio');
    let fim = document.getElementById('fim');
    let cont = document.getElementById('cont');
    let resp = document.getElementById('resp');

    if(inicio.value.length == 0 || fim.value.length == 0 || cont.value.length == 0){
        alert('[ERRO] Digite um numero acima de 1 nos campos!')
    }else{
        resp.innerHTML = 'Contador <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let c = Number(cont.value);
        let resposta = '';

        if(i < f){
            while(i <= f){
                resposta = resposta + i;
                i = i + c;
            }
        }else if(i > f){
            while(i >= f){
                resposta = resposta - i;
                i = i - c;
            }
        }
        resp.innerHTML = resp.innerHTML + resposta;
        
    }
}