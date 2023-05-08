class Inteiro {
    #valor;
  
    constructor(valor) {
      this.#setValor(valor);
    }
  
    #setValor(valor) {
      const novoValor = parseInt(valor);
      this.#valor = isNaN(novoValor) ? 0 : novoValor;
    }
  
    get valor() {
      return this.#valor;
    }
  
    set valor(novoValor) {
      if (!isNaN(parseInt(novoValor))) {
        this.#setValor(novoValor);
      }
    }
  }
  