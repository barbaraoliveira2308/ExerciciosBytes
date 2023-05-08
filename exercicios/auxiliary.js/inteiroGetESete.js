class Inteiro {

    #inteiro
    constructor(inteiro) {
        if (inteiro === Number(inteiro)) {
            this.#inteiro = Math.floor(inteiro)
        } else {
            this.#inteiro = 0
        }
    }

    get valor() {
        return this.#inteiro
    }
    
    set valor(nv) {
        if (Number.isNaN(Number(nv))) {
            this.#inteiro = this.#inteiro ? this.#inteiro : -1;
        } else {
            this.#inteiro = Math.floor(nv);
        }
    }
} 
