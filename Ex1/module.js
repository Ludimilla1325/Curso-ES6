/*import {
    sum, 
    othersum, 
    random,
    array,
    obj
} from './module1.js'

console.log(sum)
console.log(othersum)
console.log(random)
console.log(array)
console.log(obj)

 //PODEMOS MUDAR O NOME AQUI NO MAIN TAMBÉM COMO POR EXEMPLO


import {
    sum as mylittlesunshine,
}

console.log(mylittlesunshine)


// QUANDO TIVERMOS UM DOCUMENTO INTEIRO PARA SER IMPORTADO, PODE FAZER DESSA MANEIRA

import * as nomecomoquerimportar from './module1.js';

const nomecomoquerimportar = require('module1') 

console.log(nomecomoquerimportar.sum)
console.log(nomecomoquerimportar.othersum)
console.log(nomecomoquerimportar.random)
console.log(nomecomoquerimportar.array)
console.log(nomecomoquerimportar.obj) 

// ao colocar default no module1, tiramos o {}
import mainFunction from './module1.js'

mainFunction()
*/

//MANEIRA RECOMENDADA
import api from './module1.js'

console.log(api.showName())