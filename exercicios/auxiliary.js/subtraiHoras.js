function subtraiHoras(data, horas) {
    // escreve aqui a função
    const datainicial =new Date(data)
    const datasfinais = new Date(datainicial.getTime()- horas * 3600000)
    

return datasfinais
}