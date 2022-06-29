let palavra = "hello World!";

function reverse(string) {
  let palavraInversa = "";
  for (let s = string.length - 1; s >= 0; s--) {
    console.log(string[s]);
    palavraInversa = palavraInversa + string[s];
  }
  console.log(palavraInversa);
  return palavraInversa;
}

reverse(palavra);
