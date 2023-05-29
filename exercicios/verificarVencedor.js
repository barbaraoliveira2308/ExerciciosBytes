function verificarVencedor(jogo) {
    const tabuleiro = jogo.tabuleiro;
  
    // Verificar linhas
    for (let i = 0; i < tabuleiro.length; i++) {
      const linha = tabuleiro[i].join("");
      if (linha === "XXX") {
        return "X";
      } else if (linha === "OOO") {
        return "O";
      }
    }
  
    // Verificar colunas
    for (let i = 0; i < tabuleiro.length; i++) {
      const coluna = tabuleiro.map((linha) => linha[i]).join("");
      if (coluna === "XXX") {
        return "X";
      } else if (coluna === "OOO") {
        return "O";
      }
    }
  
    // Verificar diagonais
    const diagonal1 = tabuleiro[0][0] + tabuleiro[1][1] + tabuleiro[2][2];
    const diagonal2 = tabuleiro[0][2] + tabuleiro[1][1] + tabuleiro[2][0];
    if (diagonal1 === "XXX" || diagonal2 === "XXX") {
      return "X";
    } else if (diagonal1 === "OOO" || diagonal2 === "OOO") {
      return "O";
    }
  
    return undefined;
  }
  