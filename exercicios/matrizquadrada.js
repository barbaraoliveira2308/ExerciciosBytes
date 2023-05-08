function diagonalDifference(matrix) {
    let diagonal1 = 0;
    let diagonal2 = 0;
  
    for (let i = 0; i < matrix.length; i++) {
      diagonal1 += matrix[i][i];
      diagonal2 += matrix[i][matrix.length - i - 1];
    }
  
    return Math.abs(diagonal1 - diagonal2);
  }