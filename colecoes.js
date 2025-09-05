// // numeros
// let numeros = [1, 2, 3, 4, 5];

// console.log("Todos os elementos: ", numeros);
// console.log("Primeiro elemento: ", numeros[0]);
// console.log("Quinto elemento: ", numeros[4]);

// // frutas
// let frutas = ["maçã", "banana", "laranja"];
// frutas.push("uva"); // adiciona "uva" ao final do array
// frutas.unshift("morango"); // adiciona "morango" ao início do array
// console.log("Todas as frutas: ", frutas)
// console.log("Segunda fruta: ", frutas[1])
// console.log("Quarta fruta: ", frutas[3])

// let misto = [15,"texto",true,null,{nome: "Rodrigo"},[1,2,3]];
// console.log(misto);
// console.log("Array misto: ", misto.length); // tamanho do array
// console.log(misto[misto.length - 1]); // último elemento do array

// frutas.pop(); // remove o último elemento
// frutas.shift(); // remove o primeiro elemento
// frutas.splice(1, 2); // remove 2 elementos a partir do índice 1 (segunda posição)

// frutas.forEach((fruta, index) => {
//     console.log(`Índice ${index}: ${fruta}`);
// });

// console.log("--------------------------------------")

// for (let i = 0; i < frutas.length; i++) {
//     console.log(`Índice ${i}: ${frutas[i]}`);
// }

// console.log("--------------------------------------")

// for (let fruta of frutas) {
//     console.log(`Fruta: ${fruta}`);
// }

// console.log("--------------------------------------")

// for (let indice in frutas) {
//     console.log(`Índice ${indice}: ${frutas[indice]}`);
// }

// console.log("--------------------------------------")

// let mapa = new Map();
// mapa.set("nome", "Rodrigo");
// mapa.set("idade", 20);
// mapa.set("altura", 1.85);

// console.log(mapa.get("nome")); // Acessa o valor associado à chave "nome"
// console.log(mapa.has("idade")); // Verifica se a chave "idade" existe
// console.log(mapa.size); // Tamanho do mapa

// mapa.delete("altura"); // Remove o par chave-valor associado à chave "altura"
// mapa.clear(); // Remove todos os pares chave-valor do mapa

// console.log("--------------------------------------")

// let conjunto = new Set([1, 2, 3, 4, 5, 6]);
// console.log(conjunto)
// conjunto.add(7);
// conjunto.delete(2);
// console.log(conjunto.has(3)); // Verifica se o valor 3 existe no conjunto
// console.log(conjunto.size); // Tamanho do conjunto
// conjunto.clear(); // Remove todos os elementos do conjunto
// conjunto.forEach((valor) => {
//     console.log(`Valor: ${valor}`);
// });

let pessoa = {
    nome: "Rodrigo",
    idade: 20,
    altura: 1.85,
    endereco: {
        rua: "Rua A",
        numero: 123
}};

console.log(pessoa.nome); // Acessa o valor da propriedade "nome"
console.log(pessoa["idade"]);
console.log(pessoa.endereco.rua); // Acessa o valor da propriedade "rua" dentro do objeto "endereco"
pessoa.idade = 21; // Modifica o valor da propriedade "idade"
pessoa.endereco.numero = 456; // Modifica o valor da propriedade "numero" dentro do objeto "endereco"
console.log(pessoa);

delete pessoa.altura; // Remove a propriedade "altura"