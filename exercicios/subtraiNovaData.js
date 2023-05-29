function subtraiHoras(data, horas) {
    // escreve aqui a função

console.log(data.valueOf())

 let novaData= data.valueOf()
 let novaHora = horas* 60 * 60 *1000
 
return new Date(novaData - novaHora)
}