let sequencia = [0, 1];
let numerosFibonnaci = [];

function fibonnaci(maximo) {
  for (let i = 2; i <= maximo; i++) {
    sequencia[i] = sequencia[i - 2] + sequencia[i - 1];
    numerosFibonnaci.push(sequencia[i]);
  }
  console.log(...numerosFibonnaci);
  return numerosFibonnaci;
}

function checarSeNumeroEFibonnaci(maximo) {
  let indexDoNumero = numerosFibonnaci.findIndex((n) => n == maximo);

  if (numerosFibonnaci[indexDoNumero]) {
    console.log(`o numero ${maximo} pertence ao fibonnaci`);
    return true;
  } else {
    console.log(`o numero ${maximo} Não pertence ao fibonnaci`);
    return false;
  }
}

function resposta(valor) {
  return fibonnaci(valor), checarSeNumeroEFibonnaci(valor);
}

resposta(15);
