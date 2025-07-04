console.log("Desafio 2:");

let continuar = true;

while (continuar) {
  let numeroValido = false;
  let numero;

  while (!numeroValido) {
    numero  = parseInt(prompt("Digite um número inteiro positivo:"));
    if (numero >= 0) {
      numeroValido = true;
    } else {
      alert("Erro: digite um número inteiro positivo.");
    }
  }

  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  alert(`O fatorial de ${numero} é: ${resultado}`);

  let resposta = prompt("Deseja calcular outro fatorial? (S/N)");
  if (resposta== "s"|| resposta == "S") {
    alert("Continuando o programa...");
    continue;
  }else if (!resposta || resposta == "n" || resposta == "N") {
    continuar = false;
    alert("Programa encerrado.");
  }else {
    alert("Opção inválida. Programa encerrado.");
    continuar = false;
  }
}