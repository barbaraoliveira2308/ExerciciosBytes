function trimestresDoAno(t) {
    // escreve aqui a função
    let primeiroTrimestre = "Janeiro, Fevereiro, Março"
    let segundoTrimestre = "Abril, Maio, Junho"
    let terceiroTrimestre = "Julho, Agosto, Setembro"
    let quartoTrimestre = "Outubro, Novembro, Dezembro"

    switch (t) {
        case 1:
            return primeiroTrimestre
        case 2:
            return segundoTrimestre
        case 3:
            return terceiroTrimestre
        case 4:
            return quartoTrimestre

    default: 
        return"Número inválido. Por favor insira um número entre 1 e 4."
    
    }
}
console.log(trimestresDoAno(3))