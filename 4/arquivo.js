console.log("Desafio 4:");

let valorReais = parseFloat(prompt("Digite o valor em reais (R$):"));

const taxaEuro = 6.10;
const taxaDolar = 5.70;

let valorEuro = valorReais / taxaEuro;
let valorDolar = valorReais / taxaDolar;

alert(`Valor em reais: R$${valorReais.toFixed(2)}`);
alert(`Valor em euros: €${valorEuro.toFixed(2)}`);
alert(`Valor em dólares: $${valorDolar.toFixed(2)}`);