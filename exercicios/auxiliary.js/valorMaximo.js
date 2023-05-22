function valorMaximoImpar(array) {
    if (array.length === 0) {
      return undefined; // Retorna undefined se o array estiver vazio
    }
  
    return array.reduce((max, current) => (current > max && current % 2 !== 0) ? current : max);
  }
  