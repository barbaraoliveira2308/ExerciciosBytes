/* function formataString(string){
    let str= ""
     
    for (let i= 0; i< string.length; i++){
        let letra = string[i]
        if (letra === letra.toUpperCase()){
            str += letra.toLowerCase()
        }else if(letra === letra.toLowerCase()){
            str += letra.toUpperCase()
        }
        
        }
        return str
    } */

function arraySemN(n, array) {
    // escreve aqui a função

    return array.filter(element => element !== n)
}

console.log(arraySemN(3, [1, 2, 3, 4]));    



