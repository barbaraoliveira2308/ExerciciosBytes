function numeroTrilingue(n, lingua) {//(n) representa a chave, lingua representa o valor do array 
    // Escreve aqui o teu código
    const numeros = new Map([

    [0 , ["zero","zero","zéro"]], // 0 é a chave // zero o valor do array 
    [1, ["um","one","un"]],
    [2, ["dois","two","deux"]],
    [3, ["três","three","trois"]],
    
    [4, ["quatro","four","quatre"]],
    [5, ["cinco","five","cinq"]],
    [6, ["seis","six","six"]],
    [7, ["sete","seven","sept"]],
    [8, ["oito","eight","huit"]],
    [9, ["nove","nine","neuf"]],
    [10,["dez","ten","dix"]]
]);
    console.log(numeros.get(n))// usa  o get para encontrar o valor da chave 
    
    let indexLingua = ["pt","eng","fr"].indexOf(lingua) // usa o index para encontrar um valor especifico dentro do array 

    return numeros.get(n)[indexLingua]; 
} 

