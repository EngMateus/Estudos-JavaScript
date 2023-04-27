function mostrar(texto){
    document.write(texto);
    PularLinha();
}

function PularLinha(){
    document.write("<br>");
}

var arr = ["Mateus",25,"Toledo","unipar","Ciêntista da Computação"];


console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);


mostrar("Seu nome é:"+arr[0])