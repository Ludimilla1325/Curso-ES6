/*
export const sum = 10;
export const othersum = 10 + 10;

export function random (){
    return Math.random();
}

export const array = [1,2,3,4,5]
export const obj = {id:1}

//MANEIRA DIFERENTE DE FAZER


const sum = 10;
const othersum = 10 + 10;

function random (){
    return Math.random();
}

const array = [1,2,3,4,5]
const obj = {id:1}

export {
 sum,
 othersum,
 random,
 array,
 obj   
}
*/

//PODEMOS CRIAR ALIAS COM O 'AS' PARA TRANSFERIR COM OUTRO NOME,
 /*
 export {
 sum as awesomesun,

 ->  module.js

 import {
     awesomesun
 }

 console.log(awesomesun)


//USAMOS DEFAULT SEMPRE QUE O CODE QUE ESTÁ É COMO UM MAIN FUNCTION, 
export default function mainFunction (){
    console.log('something')
}
*/

//Usando um Object -MANEIRA RECOMENDADA(COM DEFAULT)
const api = {
    name: 'api',
    showName(){
        console.log('My name')
    }
}
export default api;