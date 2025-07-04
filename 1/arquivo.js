console.log("Desafio 1:");

let a = parseFloat(prompt("Digite o valor de A:"));
let b = parseFloat(prompt("Digite o valor de B:"));
let c = parseFloat(prompt("Digite o valor de C:"));

alert(`Valores digitados:\n A = ${a}, B = ${b}, C = ${c}`);

let delta = (b**2) - (4*a*c);
alert(`Δ = ${delta}`);

if (delta > 0) {
  let x1 = (-b + Math.sqrt(delta)) / (2 * a);
  let x2 = (-b - Math.sqrt(delta)) / (2 * a);
  alert(`A equação possui duas raízes reais e distintas, são elas: x1 = ${x1}, x2 = ${x2}`);
} else if (delta === 0) {
  let x1 = -b / (2 * a);
  alert(`A equação possui uma raiz real (raiz dupla), que é: x = ${x1}`);
} else {
  alert(`A equação não possui raízes reais.`);
}