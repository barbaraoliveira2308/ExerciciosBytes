function diaDaSemanaPorExtenso(data, lingua) {
    const diasSemana= data.getDay()
    const diasPt = [
      "Domingo",
      "Segunda-feira",
      "Terça-feira",
      "Quarta-feira",
      "Quinta-feira",
      "Sexta-feira",
      "Sábado"
    ];
  
    const diasEn = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"

    ];
      if(lingua === "pt"){
        return diasPt[diasSemana]
      }
      if(lingua === "en"){
        return diasEn[diasSemana]
      }
     
    }