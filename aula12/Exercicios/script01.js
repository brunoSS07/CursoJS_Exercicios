
function carregar(){
var msg = window.document.getElementById("msg");
var imagem = window.document.getElementById("imagem")
var agora = new Date()
var horario = agora.getHours();
var minutos = agora.getMinutes();

msg.innerHTML = `Agora são ${horario}:${minutos} horas.`

if(horario >= 0 && horario < 12 ){
    imagem.src = 'imagens/manhaEdi.png';
    document.body.style.background = ' #ffffcc'
}else if(horario <= 18){
    imagem.src = 'imagens/tardeEdi.png';
    document.body.style.background = '  #99ccff'
}else{
    imagem.src = 'imagens/noiteEdi.png';
    document.body.style.background =  '#6600ff'

    
}
}
