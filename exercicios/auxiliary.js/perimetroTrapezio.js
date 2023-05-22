const lado1 = Math.abs(base2 - base1) / 2; // Calcula a medida de um dos lados não paralelos
  const lado2 = Math.sqrt(lado1 * lado1 + altura * altura); // Calcula a medida do lado inclinado
  
  const perimetro = base1 + base2 + 2 * lado2; // Calcula o perímetro do trapézio
  
  return perimetro;