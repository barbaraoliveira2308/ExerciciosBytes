function calculaSigno(dia, mes) {

    const mesesComTrinta = [4, 6, 9, 11];

  if (dia < 1 || dia > 31) {
    return "Por favor introduza um dia entre 1 e 31.";
  } else if (mes < 1 || mes > 12) {
    return "Por favor introduza um mês entre 1 e 12.";
  } else if (mesesComTrinta.includes(mes) && dia > 30) {
    return "Por favor introduza um dia entre 1 e 30.";
  } else if (mes === 2 && dia > 28) {
    return "Por favor introduza um dia entre 1 e 28.";
  }

  if ((dia >= 21 && mes === 3) || (dia <= 20 && mes === 4)) {
    return "Carneiro";
  }
  if ((dia >= 21 && mes === 4) || (dia <= 20 && mes === 5)) {
    return "Touro";
  }
  if ((dia >= 21 && mes === 5) || (dia <= 20 && mes === 6)) {
    return "Gémeos";
  }
  if ((dia >= 21 && mes === 6) || (dia <= 22 && mes === 7)) {
    return "Caranguejo";
  }
  if ((dia >= 23 && mes === 7) || (dia <= 22 && mes === 8)) {
    return "Leão";
  }
  if ((dia >= 23 && mes === 8) || (dia <= 22 && mes === 9)) {
    return "Virgem";
  }
  if ((dia >= 23 && mes === 9) || (dia <= 22 && mes === 10)) {
    return "Balança";
  }
  if ((dia >= 23 && mes === 10) || (dia <= 21 && mes === 11)) {
    return "Escorpião";
  }
  if ((dia >= 22 && mes === 11) || (dia <= 21 && mes === 12)) {
    return "Sagitário";
  }
  if ((dia >= 22 && mes === 12) || (dia <= 20 && mes === 1)) {
    return "Capricórnio";
  }
  if ((dia >= 21 && mes === 1) || (dia <= 18 && mes === 2)) {
    return "Aquário";
  }
  if ((dia >= 19 && mes === 2) || (dia <= 20 && mes === 3)) {
    return "Peixes";
  }
} 
function calculaEstacaoDoAno(dia, mes) {
  // escreve aqui a função
  // Primavera - 21 de Março a 20 de Junho
  // Verão - 21 de Junho a 20 de Setembro
  // Outono - 21 de Setembro a 20 de Dezembro
  // Inverno - 21 de Dezembro a 20 de Março
  const mesesComTrinta = [4, 6, 9, 11];
  console.log(dia, mes)
  if (dia < 1 || dia > 31) {
      return "Por favor introduza um dia entre 1 e 31."

  }
  if (mes < 1 || mes > 12) {
      return "Por favor introduza um mês entre 1 e 12."

  }
  if (mesesComTrinta.includes(mes) && dia > 30)  {
      
      return "Por favor introduza um dia entre 1 e 30.";

  }
  if (mes == 2 && dia > 28) {
      return "Por favor introduza um dia entre 1 e 28.";

  }
  if ((dia >= 21 && mes >= 3) || (dia <= 20 && mes <= 6)) {
      console.log(1)
      return "Primavera"
  }
  if ((dia >= 21 && mes >= 6) || (dia <= 20 && mes <= 9)) {
      console.log(2)
      return "Verão"

  }
  if ((dia >= 21 && mes >= 9) || mes ==  || (dia <= 20 && mes <= 12)) {
      console.log(3)
      return "Outono"

  }
  if ((dia >= 21 && mes >= 12) || mes == 1 || mes == 2  || (dia <= 20 && mes <= 3)) {
      console.log(4)
      return "Inverno"
  }
}