function tabuada(){
    let numero = document.getElementById('num');
    let tabuada = document.getElementById('selTab');

    if(numero.value.length == 0 ){
        alert('[ERRO] Digite um número maior que zero!')
    }else{
        let num1 = Number(numero.value);
        tabuada.innerHTML = ''
        for(var i = 1; i <= 10; i++){
            let item = document.createElement('option')
            item.text = `${num1} x ${i} = ${i * num1}`
            
            tabuada.appendChild(item);
        }
    }
 
}