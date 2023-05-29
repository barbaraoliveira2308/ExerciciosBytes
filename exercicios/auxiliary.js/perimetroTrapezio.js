function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
  const lado1 = Math.abs(comprimentoMaior - comprimentoMenor) / 2;
  const lado2 = Math.sqrt(lado1 * lado1 + altura * altura);
  const perimetro = comprimentoMaior + comprimentoMenor + 2 * lado2;
  return perimetro;
}
