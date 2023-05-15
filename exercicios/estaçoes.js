function calculaEstacaoDoAno(dia, mes) {
    const estacoes = [
      { nome: "Primavera", inicio: { mes: 3, dia: 21 }, fim: { mes: 6, dia: 20 } },
      { nome: "Verão", inicio: { mes: 6, dia: 21 }, fim: { mes: 9, dia: 20 } },
      { nome: "Outono", inicio: { mes: 9, dia: 21 }, fim: { mes: 12, dia: 20 } },
      { nome: "Inverno", inicio: { mes: 12, dia: 21 }, fim: { mes: 3, dia: 20 } }
    ];
  
    if (dia < 1 || dia > 31) {
      return "Por favor, insira um dia entre 1 e 31.";
    }
  
    if (mes < 1 || mes > 12) {
      return "Por favor, insira um mês entre 1 e 12.";
    }
  
    const estacaoAtual = estacoes.find(estacao => {
      if (mes === estacao.inicio.mes && dia >= estacao.inicio.dia) {
        return true;
      }
      if (mes === estacao.fim.mes && dia <= estacao.fim.dia) {
        return true;
      }
      if (mes > estacao.inicio.mes && mes < estacao.fim.mes) {
        return true;
      }
      return false;
    });
  
    return estacaoAtual ? estacaoAtual.nome : "Estação não encontrada.";
  }