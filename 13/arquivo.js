console.log("Desafio 13:");

let time = [];

function adicionarJogador() {
  let nome = prompt("Digite o nome do jogador:");
  let idade = parseInt(prompt("Digite a idade do jogador:"));
  let posicao = prompt("Digite a posição do jogador:");
  let pontuacao = parseInt(prompt("Digite a pontuação do jogador:"));
  let jogador = {
    nome: nome,
    idade: idade,
    posicao: posicao,
    pontuacao: pontuacao,
  };
  time.push(jogador);
  alert(`${nome} foi adicionado ao time.`);
}

function buscarPorPosicao() {
  let posicaoBuscada = prompt("Digite a posição para buscar:");
  let jogadoresPosicao = time.filter(jogador => jogador.posicao.toLowerCase() === posicaoBuscada.toLowerCase());
  if (jogadoresPosicao.length > 0) {
    jogadoresPosicao.forEach(jogador => {
      alert(`Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`);
    });
  } else {
    alert(`Não há jogadores na posição ${posicaoBuscada}.`);
  }
}

function listarTime() {
  if (time.length === 0) {
    alert("Nenhum jogador foi cadastrado ainda.");
  } else {
    alert("Jogadores no time:");
    time.forEach(jogador => {
      alert(`Nome: ${jogador.nome}, Idade: ${jogador.idade}, Posição: ${jogador.posicao}, Pontuação: ${jogador.pontuacao}`);
    });
  }
}

function calcularPontuacaoMedia() {
  if (time.length === 0) {
    alert("Nenhum jogador foi cadastrado ainda.");
  } else {
    let somaPontuacao = time.reduce((total, jogador) => total + jogador.pontuacao, 0);
    let media = somaPontuacao / time.length;
    alert(`A pontuação média do time é: ${media.toFixed(2)}`);
  }
}

function exibirMenu() {
  let opcao;
  do {
    opcao = parseInt(prompt(`Menu:
    1 - Adicionar jogador
    2 - Buscar por posição
    3 - Listar time
    4 - Calcular pontuação média
    5 - Sair`));
    switch(opcao) {
      case 1:
        adicionarJogador();
        break;
      case 2:
        buscarPorPosicao();
        break;
      case 3:
        listarTime();
        break;
      case 4:
        calcularPontuacaoMedia();
        break;
      case 5:
        alert("Programa encerrado.");
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  } while(opcao !== 5);
}

exibirMenu();
