function contaParesDoArray(array){
    // escreve aqui a função

    let contador = 0;
    for( let i= 0; i< array.length; i++){
        if(array[i] %2 === 0){
            contador ++
        }
    }
    return contador
}