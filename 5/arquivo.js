console.log("Desafio 5:");

let numero = parseInt(prompt("Digite um número inteiro:"));

if (numero % 3 === 0 && numero % 5 === 0) {
  alert("fizzbuzz");
} else if (numero % 3 === 0) {
  alert("fizz");
} else if (numero % 5 === 0) {
  alert("buzz");
} else {
}