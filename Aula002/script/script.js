
function mostrar(texto){
    document.write(texto)
    pularLinha();
}


function pularLinha(){
    document.write("<br>");
}

var obj = {
    nome:"Mateus",
    idade:20,
    profissao:"Ciêntista da computação",

};

// cada comando abaixo eu resgato a informação especifica que eu quero dentro do meu objeto

// typeof uso para descobrir qual é o tipo da minha var 

console.log(obj);
console.log(obj.idade);
console.log(obj.nome);
console.log(obj.profissao);
console.log(typeof(obj));

mostrar(`O nome dele é ${obj.nome} e ele possui ${obj.idade} anos de idade e atualmente ele trabalha como ${obj.profissao}`);

