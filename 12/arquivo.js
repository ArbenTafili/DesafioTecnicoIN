console.log("Desafio 12:");

function encontrarElementoUnico(arr) {
  let resultado = 0;
  for (let i = 0; i < arr.length; i++) {
    resultado ^= arr[i];
  }
  return resultado;
}

let quantidade = parseInt(prompt("Quantos números você deseja inserir?"));
let numeros = [];
for (let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
  numeros.push(numero);
}
let elementoUnico = encontrarElementoUnico(numeros);
alert(`O elemento único é: ${elementoUnico}`);