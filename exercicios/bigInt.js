function arrayFromBigInt(bigInt){
    


    let numero = String(bigInt).split("").map(ele =>  Number(ele))
    return numero
}
