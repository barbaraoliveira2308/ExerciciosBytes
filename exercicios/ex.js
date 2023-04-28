    const jogo= [
     ["", "", ""],
     ["", "", ""],
     ["", "", ""],
    ]

function adicionarJogada(jogo, simbolo, linha, coluna) {
    let novoTabuleiro= jogo.tabuleiro.map (linhaTabuleiro =>[...linhaTabuleiro]);


if(novoTabuleiro[linha][coluna] === ""){
    novoTabuleiro[linha][coluna] = simbolo;
}
return { tabuleiro: novoTabuleiro };

function obterJogadasPossiveis(jogo) {
const obterJogadasPossiveis = [];
for (let linha = 0; linha < jogo.tabuleiro.length; linha++) {
    for (let coluna = 0; coluna < jogo.tabuleiro.length; [linhas].length coluna++) {
        if (jogo.tabuleiro[linha][coluna] === " ") {
           obterJogadasPossiveis.push ({linha, coluna});
           //return obterJogadasPossiveis(jogo).length ===0|| verifivarVencedor(jogo) !== 0
        } 
    }
} 
return JogadasPossiveis;
}

function verificarVencedor(jogo) {
    const simbolos = [ "x", "0"];
    for(let i = 0; i < simbolos.length; i++) {
        const s = simbolos[i];
        for(let linha = 0; linha < 3; linha++) {
            if (
                jogo.tabuleiro[linha][0]=== s &&
                jogo.tabuleiro[linha][1]=== s &&
                jogo.tabuleiro[linha][2]=== s
            ) {
                return true;
            }
        }
        for (let coluna = 0; coluna < 3; coluna++){
            if(
                jogo.tabuleiro[0][coluna]=== s &&
                jogo.tabuleiro[1][coluna] === s &&
                jogo.tabuleiro [2][2] === s
            ) {
                return true;
        
            }
            if(
                jogo.tabuleiro[0][2] === s &&
                jogo.tabuleiro[1][1]=== s &&
                jogo.tabuleiro[2][0] === s
            ){
                return true;
                }
            }
    }
            return false;
        }
        function verificarFimDoJogo(jogo) {
            for (let linha = 0; linha < 3; coluna++){
                for (let coluna = 0; coluna < 3; coluna++){
                if(jogo.tabuleiro[lina][coluna]===" "){
                    return false;
                }

            }
            
        }
        return true;
    }
}