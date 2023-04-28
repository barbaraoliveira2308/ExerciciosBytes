function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função 
     if ( valor1 === valor2){
    "Por favor introduza dois valores diferentes."
     }

    let valores = 0
for (let i =Math.min(valor1, valor2); i <= Math.max(valor1, valor2); i++){
    if(i % 2 === 0 ){
        valores++
    }
  


}
return valores
}