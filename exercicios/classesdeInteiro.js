class Inteiro {
    #valor
    // completa a classe
    constructor(valor) {
        if (typeof valor === "number") {
            this.#valor = Math.trunc(valor) // me da a parte inteira do valor 
        }else{
            this.#valor = 0
        }
    }
    get valor(){
        return this.#valor
    }
    set valor( novoValor){
        if( typeof novoValor === "number"){
            this.#valor = Math.trunc(novoValor)
        }

        
    }

}