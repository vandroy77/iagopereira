const estados = [
  { Estado: "SP", faturamento: 67836.43 },
  { Estado: "RJ", faturamento: 36678.66 },
  { Estado: "MG", faturamento: 29229.88 },
  { Estado: "ES", faturamento: 27165.48 },
  { Estado: "Outros", faturamento: 19849.53 },
];

const faturamentoTotal = estados.reduce(
  (acc, valor) => acc + valor.faturamento,
  0
);

function Percentual() {
  let faturamentoEstaduaisEmPorcentagem = [];

  for (let i = 0; i < estados.length; i++) {
    let media = ((estados[i].faturamento / faturamentoTotal) * 100).toFixed(2);

    faturamentoEstaduaisEmPorcentagem.push({
      Estado: estados[i].Estado,
      faturamento: media,
    });

    console.log(`Estado: ${estados[i].Estado} - media: ${media}%`);
  }
  console.log(`Faturamento total da Distribuidora: R$ ${faturamentoTotal}`);
  return faturamentoTotal, faturamentoEstaduaisEmPorcentagem;
}
