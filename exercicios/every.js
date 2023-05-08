function eUmaMatriz(valor){
    // Escreve aqui o teu código

   if(Array.isArray(valor)){
       return valor.every(ele=> Array.isArray(ele))
   }else{
       return false
   }
  
}