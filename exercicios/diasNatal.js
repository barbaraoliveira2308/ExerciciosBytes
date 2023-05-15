function diasAteNatal(dia, mes) {
    if (mes < 1 || mes > 12) {
      return "Por favor introduza um mês entre 1 e 12.";
    }
  
    if (dia < 1 || dia > 31) {
      return "Por favor introduza um dia entre 1 e 31.";
    }
  
    if ([4, 6, 9, 11].includes(mes) && dia > 30) {
      return "Por favor introduza um dia entre 1 e 30.";
    }
  
    if (mes === 2 && dia > 28) {
      return "Por favor introduza um dia entre 1 e 28.";
    }
  
    if (mes === 12 && dia === 25) {
      return "Hoje é Natal!";
    }
  
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const dataNatal = new Date(anoAtual, 11, 25);
  
    const dataInserida = new Date(anoAtual, mes - 1, dia);
  
    if (dataInserida > dataNatal) {
      dataNatal.setFullYear(anoAtual + 1);
    }
  
    const umDiaEmMilissegundos = 24 * 60 * 60 * 1000;
    const diasRestantes = Math.round(
      (dataNatal - dataInserida) / umDiaEmMilissegundos
    );
  
    return `Faltam ${diasRestantes} dias até ao Natal.`;
  }
  
  // Exemplos de uso:
  console.log(diasAteNatal(10, 5));
  console.log(diasAteNatal(25, 12));
  console.log(diasAteNatal(32, 6));
  