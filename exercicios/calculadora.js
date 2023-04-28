
// let calc = new Calculadora()
// calc.somar(3, 1) //calc
//     .somar(7)
// console.log(Calculadora)



    // somar(a, b) {//chamar um metodo 
    //     if (b === undefined) { // se b for igua indefinido
    //         this.ultimoResultado = this.ultimoResultado + a // retorna ultimoresultado enquanto ele for ultimoresultado - que a 


    //         this.historico.push(`${this.ultimoResultado - a} + ${a} = ${this.ultimoResultado}`)// 
    //         return this;
    //     } else {
    //         this.ultimoResultado = this.ultimoResultado + a
    //         this.historico.push(`${a} + ${b} = ${this.ultimoResultado}`)// 
    //         return this;

    //     }

    // }


    // subtrair(a, b) {
    //     if (b === undefined) {
    //         (this.ultimoResultado = this.ultimoResultado - a)
    //             `${this.ultimoResultado - a} - ${a} = ${this.ultimoResultado}`
    //         return this;

    //     } else {
    //         (ultimoResultado = ultimoResultado - a)
    //             `${a} ${b} = ${this.ultimoResultado}`
    //         return this;
    //     }
    // }

    // dividir(a, b) {
    //     if (b === undefined) {
    //         (ultimoResultado = ultimoResultado / a)
    //             `${a} ${b} = ${this.ultimoResultado}`
    //         return this;
    //     } else {
    //         (ultimoResultado = ultimoResultado / a)
    //             `${a} ${b} = ${this.ultimoResultado}`
    //         return this;
    //     }
    // }

    // multiplicar(a, b) {
    //     if (b === undefined) {
    //         (ultimoResultado = ultimoResultado / a)
    //             `${a} ${b}= ${this.ultimoResultado}`
    //         return this;
    //     }

    // }


    class Calculadora {
        constructor() {
            this.historico = [];
            this.ultimoResultado = 0;
    
        }
    
        somar(a, b) {
            let esquerda = a
            let direita = b
    
            if (b === undefined) {
                esquerda = this.ultimoResultado
                direita = a
            }
    
            const res = BigInt(esquerda) + BigInt(direita)
            this.ultimoResultado = res
            this.historico.push(`${esquerda} + ${direita} = ${res}`)
    
            return this
        }
    
        subtrair(a, b) {
            let esquerda = a
            let direita = b
    
            if (b === undefined) {
                esquerda = this.ultimoResultado
                direita = a
            }
    
            const res = BigInt(esquerda) - BigInt(direita)
            this.ultimoResultado = res
            this.historico.push(`${esquerda} - ${direita} = ${res}`)
    
            return this
        }
        dividir(a, b) {
            let esquerda = a
            let direita = b
    
            if (b === undefined) {
                esquerda = this.ultimoResultado
                direita = a
            }
    
            const res = BigInt(esquerda) / BigInt(direita)
            this.ultimoResultado = res
            this.historico.push(`${esquerda} / ${direita} = ${res}`)
    
            return this
        }
    
        multiplicar(a, b) {
            let esquerda = a
            let direita = b
    
            if (b === undefined) {
                esquerda = this.ultimoResultado
                direita = a
            }
    
            const res = BigInt(esquerda) * BigInt(direita)
            this.ultimoResultado = res
            this.historico.push(`${esquerda} * ${direita} = ${res}`)
    
            return this
    
        }
        limparHistorico() {
    
            this.historico = []
            this.ultimoResultado = 0n
            return this
        }
    
        obterResultado() {
            return BigInt(this.ultimoResultado)
        }
    
        toJSON() {
            return {
                historico: this.historico,
                ultimoResultado: this.ultimoResultado.toString()
            }
        }
    
    
        toString() {
            if (this.historico.length === 0) {
                return "Calculadora Limpa"
            } else {
                let resposta = `=== Histórico da Calculadora ===
    ${criaLista(this.historico)}
    === Fim do Histórico ===
    Foram realizadas ${this.historico.length} operações
    Último Resultado: ${this.ultimoResultado}`
                return resposta
            }
            function criaLista(historico) {
                let lista = ''
                for (let i = 0; i < historico.length; i++) {
                    lista += (i + 1) + ". " + historico[i]
                    if (i < historico.length - 1) {
                        lista += '\n'
                    }
                }
                return lista
            }
        }
    }