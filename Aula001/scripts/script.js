
function mostrar(texto){
    document.write(texto);
    PularLinha();
}

function PularLinha(){
    document.write("<br>");
}

var confirmacao = confirm("Deseja continuar em nosso site?");

var idade1 = Number(prompt("Digite sua idade"));



mostrar(`A sua idade é de ${idade1}`);

mostrar(confirmacao);



