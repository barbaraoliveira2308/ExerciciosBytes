class Ventoinha {
    #ligada;
    #intensidade;

    constructor() {
        this.#intensidade = 5;
        this.#ligada = false;
    }
    get ligada() {
        return this.#ligada
    }
    get intensidade() {
        return this.#intensidade
    }
    aumentarIntensidade() {
        if (this.#intensidade < 10) {
            this.#intensidade ++;
        }
       
    }
    diminuirIntensidade() {
        if (this.#intensidade > 1) {
            this.#intensidade --;
        }
    }
    ligarDesligar() {
        this.#ligada = !this.#ligada;
    }

}
