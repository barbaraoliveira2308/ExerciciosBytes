function contarPares(array) {
    
    if ((array.length === 0)) {
        return 0
    }

    if (array[0] % 2 === 0) {
        return 1 + contarPares(array.slice(1))// decrementa o array sem alterar o array original 
    } else {
        return 0 + contarPares(array.slice(1))
    }
    
}
let array = [1,2,3,4,5,6,7]

console.log (contarPares(array))

//contarPares ([1,2,3,4]) //2


   