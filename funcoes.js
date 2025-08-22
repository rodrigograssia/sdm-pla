// Função Declarativa
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Rodrigo"));

// Função Anônima
const soma = function(a, b) {
    return a + b;
}

function soma2(a, b){
    return a + b;
}
console.log(soma2(5,10))

function simples (){
    let a = 5;
    let b = 10;
    let c = a + b;
    console.log("O valor de c é: "+ c)
}