function converteHacker(string) {
    // Escreve aqui o teu código
 let str= new Map ([
 ["a", '4'],
 ["A", '4'],
 ["e", '3'],
 ["E", '3'],
 ["i", '1'],
 ["I", '1'],
 ["o", '0'],
 ["O", '0'],
 ["s", '5'],
 ["S", '5'],

 ]);

 let newStr = ''

 for (let i= 0; i < string.length; i++){// cria um loop para que seja percorrida toda a minha string 
   if(str.has(string[i])){ //
       newStr += str.get(string[i]) 
   } else { 
        newStr += string[i]
       
   }
 }

 return newStr

}

string = 'fffffff'