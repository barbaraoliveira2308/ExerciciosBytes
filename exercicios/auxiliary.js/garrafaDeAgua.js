class GarrafaDeAgua {
    #capacidade;
    #quantidade;
    #aberta;

    constructor(capacidade) {
        this.#capacidade = capacidade;
        this.#quantidade = 0;
        this.#aberta = false;
        //
    }
    beber() {
        if (this.#aberta) {
            if (this.#quantidade === 0) {
                return "A garrafa está vazia"
            }
            if (this.#quantidade < 200) {
                ;
                this.#quantidade = 0;
            } else {
                this.#quantidade -= 200;
            }
            return "Você bebeu 200 ml de água";
        } else {
            return "A garrafa está fechada";
        }
    }

        encher(quantidade) {
            if (this.#aberta) {
                this.#quantidade = Math.min(this.#capacidade, this.#quantidade + quantidade)
                return "A garrafa foi enchida.";
            } else {
                return "A garrafa está fechada"
            }
        }
        abrirFechar() {
            this.#aberta = !this.aberta;
            if (this.#aberta) {
                return "A garrafa foi aberta."
            } else {
                return "A garrafa foi fechada.";
            }
        }

    get quantidade() {
            return this.#quantidade;
        }
    get aberta() {
            return this.#aberta;
        }
    get capacidade() {
            return this.#capacidade;
        }
    }