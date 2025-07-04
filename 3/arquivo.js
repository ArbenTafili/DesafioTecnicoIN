console.log("Desafio 3:");

function verificarIdades() {
  const anoAtual = parseInt(prompt("Digite o ano atual:"));
  let quantidadePessoas = parseInt(prompt("Quantas pessoas você deseja verificar?"));
  const anosNascimento = [];
  for (let i = 0; i < quantidadePessoas; i++) {
    let ano = parseInt(prompt(`Digite o ano de nascimento da pessoa ${i + 1}:`));
    anosNascimento.push(ano);
  }
  for (let i = 0; i < anosNascimento.length; i++) {
    const idade = anoAtual - anosNascimento[i];
    const categoria = idade >= 18 ? "maior" : "menor";
    alert(`Pessoa ${i + 1}: ${categoria} de idade`);
  }
}
verificarIdades();