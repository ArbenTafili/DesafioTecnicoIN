console.log("Desafio 10:");

let fila = [];

function exibirMenu() {
  let menu = "Menu de opções:\n";
  menu += "1 - Novo Cliente\n";
  menu += "2 - Atender Cliente\n";
  menu += "3 - Sair\n";
  if (fila.length > 0) {
    menu += "\nClientes na fila:\n";
    fila.forEach((cliente, index) => {
      menu += `${index + 1}º ${cliente}\n`;
    });
  } else {
    menu += "\nNão há clientes na fila.\n";
  }
  let opcao = parseInt(prompt(menu));
  switch (opcao) {
    case 1:
      novoCliente();
      break;
    case 2:
      atenderCliente();
      break;
    case 3:
      alert("Programa encerrado.");
      break;
    default:
      alert("Opção inválida! Tente novamente.");
      exibirMenu();
      break;
  }
}

function novoCliente() {
  let nome = prompt("Digite o nome do novo cliente:");
  fila.push(nome);
  alert(`${nome} foi adicionado à fila.`);
  exibirMenu();
}

function atenderCliente() {
  if (fila.length > 0) {
    let clienteAtendido = fila.shift();
    alert(`Atendendo: ${clienteAtendido}`);
  } else {
    alert("Não há clientes na fila para atender.");
  }
  exibirMenu();
}

exibirMenu();
