const arrayDeValores = [1,1,2,1,3]

Map(3){
    1 => 3
    2 =>1
    3 => 1
}
arrayDeValores.reduce((mapaDeOcorrencia, elemento))=>{
    if(mapaDeOcorrencias.has(elemento)){
        return new Map ([
            ...mapaDeOcorrencia,
        ])
    }else{return new map([
        ...mapaDeOcorrencia, 
        [elemento, 1]
    ])}
}, new Map([])
