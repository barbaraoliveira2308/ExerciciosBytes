function dataPorExtenso(data) {
    const diasSemana = [
      "domingo",
      "segunda-feira",
      "terça-feira",
      "quarta-feira",
      "quinta-feira",
      "sexta-feira",
      "sábado"
    ];
  
    const meses = [
      "janeiro",
      "fevereiro",
      "março",
      "abril",
      "maio",
      "junho",
      "julho",
      "agosto",
      "setembro",
      "outubro",
      "novembro",
      "dezembro"
    ];
  
    const diaSemana = diasSemana[data.getDay()];
    const dia = data.getDate();
    const mes = meses[data.getMonth()];
    const ano = data.getFullYear();
  
    const dataExtenso = `${diaSemana}, ${dia} de ${mes} de ${ano}`;
  
    return dataExtenso;
  }
  
  console.log(dataPorExtenso(new Date(2022, 3, 4))); // segunda-feira, 4 de abril de 2022
  