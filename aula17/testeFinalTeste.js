let num = document.getElementById('txtnum');
let lista = document.querySelector('select#seltab');
let resp = document.querySelector('div#resp');
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true;
    }else{
        return false;
    }
}

function inLista(n, val){
    if((val.indexOf(Number(n)) != -1)){
        return true;
    }else{
        return false;
    }
}

function guardarValores(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value));
        let item = document.createElement('option');
        item.text = `valor ${num.value} adicionado`;
        lista.appendChild(item);
        resp.innerHTML='';
    }else{
        alert('OPS! Por favor verifique se é um numero ou se já está na lista!');
    }
    num.value = '';
    num.focus();
}

function finalizar(){
    if(valores == 0){
        alert('OPS! Por favor adicione valores antes de finalizar!')
    }else{
        let total = valores.length;
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;

        for(let pos in valores){
            soma += valores[pos];
            if(valores[pos] > maior){
                maior = valores[pos];
            }
            if(valores[pos] < menor){
                menor = valores[pos];
            }
        }

        resp.innerHTML += `<p>total de numeros: ${total}</p>`;
        resp.innerHTML += `<p>Maior numero digitado: ${maior}</p>`;
        resp.innerHTML += `<p>Menor numero digitado: ${menor}</p>`;
        resp.innerHTML += `<p>Soma dos numeros digitado: ${soma}</p>`;
    }
}