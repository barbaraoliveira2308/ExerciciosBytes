class Calculadora {
    constructor() {
      this.historico = [];
    }
  
    somar(a, b) {
      const resultado = a + b;
      const operacao = {
        operacao: "soma",
        a: a,
        b: b,
        resultado: resultado
      };
      this.historico.push(operacao);
      return resultado;
    }
  
    subtrair(a, b) {
      const resultado = a - b;
      const operacao = {
        operacao: "subtração",
        a: a,
        b: b,
        resultado: resultado
      };
      this.historico.push(operacao);
      return resultado;
    }
  
    multiplicar(a, b) {
      const resultado = a * b;
      const operacao = {
        operacao: "multiplicação",
        a: a,
        b: b,
        resultado: resultado
      };
      this.historico.push(operacao);
      return resultado;
    }
  
    dividir(a, b) {
      const resultado = a / b;
      const operacao = {
        operacao: "divisão",
        a: a,
        b: b,
        resultado: resultado
      };
      this.historico.push(operacao);
      return resultado;
    }
  
    lerHistorico(operacao) {
      if (operacao) {
        return this.historico.filter(item => item.operacao === operacao);
      } else {
        return this.historico;
      }
    }
  }
  