var agora = new Date();

var diaSem = agora.getDay();

diaSem = 8

switch(diaSem){
    case 0:
    console.log('hoje é Domingo')
    break;
    case 1:
    console.log('hoje é Segunda')
    break;
    case 2:
    console.log('hoje é Terça')
    break;
    case 3:
    console.log('hoje é Quarta')
    break;
    case 4:
    console.log('hoje é Quinta')
    break;
    case 5:
    console.log('hoje é Sexta')
    break;
    case 6:
    console.log('hoje é Sábado')
    break;
    default:
        console.log("Erro dia inválido")
        break;
}