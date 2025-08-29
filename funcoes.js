/*
// declarativa 
function exibirIdade(idade) {
    return `A idade é: ${idade}`
}
console.log(exibirIdade(20))

// anonima
const altura = function(altura) {
    return altura;
}
console.log("Sua altura é: " + altura(1.85) + "M")

// arrow function
const descobrirCurso = (curso) => curso;    
console.log(descobrirCurso("Análise e Desenvolvimento de Sistemas"))


function exibir (){
    console.log(`Sua idade é ${exibirIdade(20)}. Sua altura é ${altura(30)}M. Seu curso é ${descobrirCurso("ADS")}`)
}
exibir(exibirIdade, altura, descobrirCurso)
*/

// Função Declarativa
function saudacao(nome) {
    return `Olá, ${nome}!`;
}
console.log(saudacao("Rodrigo"));
console.log(saudacao("Camila"));
console.log(saudacao("João"));

// Função Anônima
const soma = function(a, b) {
    return a + b;
}
console.log(soma(15,5))
console.log(soma(-10,10))

function soma2(a, b){
    return a + b;
}
console.log(soma2(5,10))


// simples
function simples (){
    let a = 5;
    let b = 10;
    let c = a + b;
    console.log("O valor de c é: "+ c)
}

// Arrow function
const multiplicar = (a,b) => a * b;
console.log(multiplicar(2,15))
console.log(multiplicar(1,5))

function multiplicarDeclarativa (a, b) {
    return a * b;
}

// 
function cumprimentar(nome = "Rodrigo"){
    return `Olá, ${nome}! Como você está? `
}

//auto-invocada
(function(){
    console.log("Função auto-invocada");
})();

// função de callback
function processar(valor, callback){
    const resultado = callback(valor);
    console.log(`Resultado: ${resultado}`);
}

// funçao assincrona
async function processarAsync(valor, callback) {
    const resultado = await callback(valor);
        console.log(`Resultado: ${resultado}`);
}