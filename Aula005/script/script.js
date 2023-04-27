function mostrar(texto){
    document.write(texto);
    pularLinha();
}

function pularLinha(){
    document.write("<br>");
}


// -> tenho que usar o else if depois do if e antes do else, possui usar else if quantas vezes eu quiser



var nomeInformado = prompt("Digite o nome");

var nomeCorreto = "Lucas";



if(nomeInformado == "Pedro"){
    console.log("O nome dele é não é Pedro");
   
}else if(nomeInformado == nomeCorreto){
    console.log("O nome dele é Lucas")

}else{
    console.log("O nome dele é outro");
}