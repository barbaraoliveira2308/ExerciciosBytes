function calculaEstacaoDoAno(dia, mes){
    // escreve aqui a função
    // Primavera - 21 de Março a 20 de Junho
    // Verão - 21 de Junho a 20 de Setembro
    // Outono - 21 de Setembro a 20 de Dezembro
    // Inverno - 21 de Dezembro a 20 de Março

    
const meses30= [4, 6, 9, 11]
if((dia < 1 || dia > 31)){
    return "Por favor introduza um dia entre 1 e 31." 
}

if((mes < 1 || mes > 12)){
    return "Por favor introduza um mês entre 1 e 12."
}
if(mes === 2 && dia > 28 ){
    return "Por favor introduza um dia entre 1 e 28."
}
    if (mes === meses30 && (dia < 1 || dia > 30)) {
      return "Por favor introduza um dia entre 1 e 30."
    }
    
    if((mes === 3 && dia >=21) || (mes === 4) || (mes=== 5) || (mes === 6 && dia <=20)){
        return "Primavera"
    }
    if((mes=== 6 && dia>= 21 )|| (mes===7)||(mes===8)||(mes === 9 && dia<=20)){
        return "Verão"

    }
    if((mes === 9 && dia >=21)||(mes === 10)||(mes === 11)|| (mes === 12 && dia <=20)){
        return "Outono"
    }
    if((mes=== 12 && dia >=21 ) || (mes === 1)|| (mes===2 ) ||(mes === 3 && dia <=20)){
        return "Inverno"
    }

}
