console.log("Desafio 7:");

let frase = prompt("Digite uma frase para verificar se é um palíndromo:");

frase = frase.replace(/\s/g, "").toLowerCase();

let fraseInvertida = frase.split("").reverse().join("");

if (frase === fraseInvertida) {
  alert("A frase é um palíndromo!");
} else {
  alert("A frase não é um palíndromo.");
}