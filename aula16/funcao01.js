function parOuImpar(num){
    if(num % 2 == 0){
        return `Par`;
    }else{
        return `Ímpar`;
    }
}

let resp = parOuImpar(66);
console.log(`O numero 66 é: ${resp}`);

console.log("O número 35 é: " + parOuImpar(35));