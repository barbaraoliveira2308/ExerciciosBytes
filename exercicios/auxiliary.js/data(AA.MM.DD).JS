function formataData(data) {
    // escreve aqui a função
    const novaData = new Date(data)
    const dia = novaData.getDate().toString().padStart(2, "0");
 const mes = (novaData.getMonth() + 1).toString().padStart(2, "0");
    const ano = novaData.getFullYear().toString();
    return `${mes}-${dia}-${ano}`;


} 