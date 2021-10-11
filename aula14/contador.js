function contador(){
    let inicio = window.document.getElementById('inicio');
    let fim = window.document.getElementById('fim');
    let cont =  window.document.getElementById('cont');
    let resp = document.getElementById('resp')

    //Verificando se um dos campos estão vazio.
    if(inicio.value.length == 0 || fim.value.length == 0 || cont.value.length == 0){
        window.alert('ERRO faltam dados!')
    }else{
        resp.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let c = Number(cont.value);
        let res = '';

        //Condição caso coloquem 0 no campo do contador
        if(c <= 0){
            alert('ERRO no campo contador, será iniciado com 1');
            c = 1;
        }

        if(i < f){
            //contagem crescente
            while(i <= f){
                res = res + '\u{1F449}' + i ;
                i = i + c;
            }
        }else{
            //contagem decrescente
            while(i >= f){
                res = res + ' '+ i;
                i = i - c; 
            }
        }

        resp.innerHTML = resp.innerHTML + res;
        resp.innerHTML = resp.innerHTML + `\u{1F3C1}`
    }
}