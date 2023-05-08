function validaSubsequente(array, subarray) {
    // Escreve aqui a função

    let subsequente = 0
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === subarray[subsequente]) {
            subsequente++
        }
    }

    if(subsequente === subarray.length){
        return true
    }else{
        return false
    }

    
}
