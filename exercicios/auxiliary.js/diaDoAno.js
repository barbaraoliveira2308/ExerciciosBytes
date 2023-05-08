function diaDoAno(data) {
    // escreve aqui a função


    const primeiroDia = new Date(data.getFullYear(), 0, 1);
    const dia = Math.floor((data - primeiroDia) / (24 * 60 * 60 * 1000)) + 1;

    return dia;
} 