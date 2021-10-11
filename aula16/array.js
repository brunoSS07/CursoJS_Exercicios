let num = [7,8,5,3,9,1];
//inserir valor em um ARRAY, colocar vetor, indice e o valor a ser inserido.
num[6] = 4;

console.log(` - Os valores do vetor é: ${num}`);

//porem se quiser inserir um valor sem precisar colocar a POSIÇÃO, uso o PUSH
num.push(2);

console.log(` - Valores inseridos no vetor com o PUSH: ${num}`);

//COMPRIMENTO do meu ARRAY
console.log(` - Comprimento de meu ARRAY: ${num.length}`);

//Utilizando o metodo SORT pra ordenar meu ARRAY
console.log(` - Ordenando meu array: ${num.sort()}`);

for(let i = 0; i < num.length; i++){
    console.log(`O valor na posição ${i}ª é: ${num[i]}`);
}

//Mostra a POSIÇÃO de um determinado VALOR.
let posicao = num.indexOf(6);
console.log(`posição do valor 6 é: ${posicao}`)