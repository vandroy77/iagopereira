const json = require("./faturamento.json");

function listaAcimaDeZero() {
  let lista = [];
  for (let i = 0; i < json.length; i++) {
    if (json[i].valor > 0) {
      lista.push(json[i].valor);
    }
  }
  return lista;
}

const FaturamentoDiario = () => {
  const lista = listaAcimaDeZero();
  const maior = Math.max(...lista);
  const menor = Math.min(...lista);

  console.log(`maior: ${maior}
  menor: ${menor}`);
  return maior, menor;
};

FaturamentoDiario();
