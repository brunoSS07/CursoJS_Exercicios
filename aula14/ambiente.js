console.log("Tudo bem? ");
var i = 0;
//Essa estrutura testa primeiro e executa depois.
while(i <6){
    console.log(`posição ${i+1}ª Tudo bem?`);
    i++;
} 

i = 0;
//Estrutura de reptição executa primerio e testa no final.
do{
    console.log(`Posição ${i+1}ª Tudo bem?`);
    i++;
}while(i < 6);

i = 0;
for(i = 0; i < 6; i++){
    console.log(`Posição ${i+1}ª Tudo bem?`);
}