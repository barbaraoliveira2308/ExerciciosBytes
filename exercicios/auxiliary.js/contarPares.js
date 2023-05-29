
function contaParesDoArray(array) {
    // Caso base: array vazio
    if (array.length === 0) {
      return 0;
    }
    
   
    const primeiroElementoPar = array[0] % 2 === 0;
    
  
    if (primeiroElementoPar) {
  
      return 1 + contaParesDoArray(array.slice(1));
    } else {
     
      return contaParesDoArray(array.slice(1));
    }
  }