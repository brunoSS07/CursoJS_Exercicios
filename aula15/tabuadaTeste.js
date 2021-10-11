function gerarTabuada(){
    let numTab = document.getElementById('txtnum');
    let selTab = document.getElementById('seltab');
    let txtTab = document.getElementById('txtTab');
    let num = Number(numTab.value);

    if(numTab.value.length == 0 || numTab.value.length < 0){
        alert('[ERRO] Digite um numero maior que 0 !')
    }else{
        selTab.innerHTML = '';
        txtTab.innerHTML = `Tabuada do ${num}: `

        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option');
            item.text = `${num} x ${i} = ${i * num}`;
            selTab.appendChild(item);
        }
    }
}