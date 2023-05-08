function diaDaSemanaPorExtensoBilingue(data, lingua){
    // escreve aqui a função
  const diasSemanaPt = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sábado"
  ];

  const diasSemanaEn = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];

  let indexLingua = lingua === "pt" ? 0 : 1;
  let diasSemana = indexLingua === 0 ? diasSemanaPt : diasSemanaEn;

  const diaDaSemana = diasSemana[data.getDay()];

  return diaDaSemana;
}
