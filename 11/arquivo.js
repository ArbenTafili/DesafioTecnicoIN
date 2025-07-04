console.log("Desafio 11:");

let quantidade = parseInt(prompt("Quantos números você deseja inserir no vetor?"));
let vetor = [];
let contagem = 0;

for (let i = 0; i < quantidade; i++) {
  let numero = parseInt(prompt(`Digite o número ${i + 1}:`));
  vetor.push(numero);
}

for (let i = 1; i < vetor.length; i++) {
  if (vetor[i] > vetor[i - 1]) {
    contagem++;
  }
}

alert(`Existem ${contagem} números em ordem crescente no vetor.`);