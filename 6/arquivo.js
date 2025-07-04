console.log("Desafio 6:");

function fibonacci(n) {
  if (n === 0) {
    return [0];
  } else if (n === 1) {
    return [0, 1];
  } else {
    let seq = fibonacci(n - 1);
    seq.push(seq[n - 1] + seq[n - 2]);
    return seq;
  }
}

let n = parseInt(prompt("Digite o número de termos da sequência de Fibonacci:"));
let termosFibonacci = fibonacci(n);
alert(`Os ${n} primeiros termos da sequência de Fibonacci são: ${termosFibonacci.join(", ")}`);
