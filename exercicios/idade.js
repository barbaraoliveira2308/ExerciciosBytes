function calculaFaixaEtaria(idade){
    // escreve aqui a função
    let crianca = "Criança"
    let adolescente = "Adolescente"  
    let adulto = "Adulto"
    let senior ="Sénior"

   for(let i= 0; i < idade; i++){

     if(idade <= 11){
        return crianca
 }
 
  else if (idade > 11 && idade < 18 ){
return adolescente
  }

  else if(idade > 17 && idade < 65 ){
 return adulto
  }
    else{
        return senior
    }
    
}
}