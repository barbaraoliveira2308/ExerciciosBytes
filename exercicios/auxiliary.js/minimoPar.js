function minimoPar(array){
    return array.reduce((minPar, elem) => {
        if (minPar % 2 === 0 && minPar < elem) {
            return minPar
        } else {return elem}
    })
}