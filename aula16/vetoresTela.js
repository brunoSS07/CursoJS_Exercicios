let valores = [8,1,7,4,2,9]
;
console.log(valores)
//Maneira pra mostrar os VALORES em seus respectivos INDICES
for(let pos = 0; pos < valores.length; pos++){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`);
}

//Maneira simplicada pra mostrar os valores do vetor.
//para cada "posição" na variavel "num" mostre os valores na tela.
for(pos in valores){
    console.log(valores[pos]);
}