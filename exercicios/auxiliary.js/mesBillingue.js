function mesPorExtensoBilingue(data, lingua){
    // escreve aqui a função

const mesesPt = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  const mesesEn = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let indexLingua = lingua === "pt" ? 0 : 1;
  let meses = indexLingua === 0 ? mesesPt : mesesEn;

  const mes = meses[data.getMonth()];

  return mes;
}
