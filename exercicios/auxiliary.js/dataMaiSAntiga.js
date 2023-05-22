if (dates.length === 0) {
    return null; // Retorna null se o array estiver vazio
  }
  
  return new Date(Math.min(...dates.map(date => new Date(date))))