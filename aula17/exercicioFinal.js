let numero = document.getElementById('txtnum')
let lista = document.getElementById('seltab')
let resp = document.getElementById('resp')
let valores = [];

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function isLista(n, l){
    //vai verificar se esta na lista
    if((l.indexOf(Number(n)) != -1)){
        return true
    }else{
        return false
    }
}

function guardarValores(){
    if(isNumero(numero.value) && !isLista(numero.value, valores)){
        valores.push(Number(numero.value));
        let item = document.createElement('option'); //criando minhas options
        item.text = `Valor ${numero.value} adicionado`; //colocando o valor na option
        lista.appendChild(item); //inserindo a option na lista
        resp.innerHTML = ''; //apaga sempre minha resposta ao adicionar mais numeros
    }else{
        alert('Está errado')
    }
    numero.value = ''; //o campo apaga o numero ao adicionar ele na array
    numero.focus() //o cursor volta pro campo de inserir numero
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar.');
    }else{
        let total = valores.length;
        let menor = valores[0];
        let maior = valores[0];
        let soma = 0;
        let media = 0
        for(let pos in valores){
            soma += valores[pos];
            if(valores[pos] > maior){
                maior = valores[pos];
            }
            if(valores[pos] < menor){
                menor = valores[pos]
            }

        }
        media = soma / total;

        resp.innerHTML = '';
        resp.innerHTML += `<p>Ao todo temos ${total} elementos cadastrados.</p>`;
        resp.innerHTML += `<p>O menor valor é: ${menor}</p>`;
        resp.innerHTML += `<p>O maior valor é: ${maior}</p>`;
        resp.innerHTML += `<p>A soma dos valores é: ${soma}</p>`
        resp.innerHTML += `<p>A média dos valores é: ${media}</p>`
    }
}