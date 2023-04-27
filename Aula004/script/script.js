// Operadores Condicionais 

// -> são instruções que podem determinar o fluxo de uma aplicação
// -> Amplamente usados, deixam os softwares dinamicos
// -> if,else if, else


function mostrar(texto){
    document.write(texto);
    pularLinha();
}

function pularLinha(){
    document.write("<br>");
}


var idadeInformada = Number(prompt("Digite sua idade"));
var idadeCorreta = 18;



if(idadeInformada==idadeCorreta ||
    idadeInformada<=29){
    mostrar("Parabéns, você está apto a fazer sua carteira de habilitação");
}
    else if (idadeInformada>=30 && idadeInformada<=59){
    mostrar("Está demorando muito em fazer sua carteira, caso precise ver algum valor promocional, entre em contato com a gente pelo telefone (45)9 9943-7905");
}
    else{
    mostrar("Não é possivel fazer sua carteira de habilitação, pois sua idade apresenta restrição no sistema do Detran");
}