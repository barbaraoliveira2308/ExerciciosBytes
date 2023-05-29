function diferencaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função

    let diagonal1 = 0
    let diagonal2 = 0
    for(let i = 0; i< matrizquadrada.length; i++){
       
       let linha = matrizquadrada[i]
       let valorDaDiagonalPrincipal = linha[i]
       let valorDaDiagonalSecundaria = linha[linha.length - i - 1]


        diagonal1 += valorDaDiagonalPrincipal
        diagonal2 += valorDaDiagonalSecundaria

    }
    let diferenca = diagonal1 - diagonal2

    return diferenca
}