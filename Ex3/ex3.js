/*const products = [
    {name:'Iphone',price:200},
    {name:'Motorola',price:70},
    {name:'Samsung',price:150},
    {name:'Sony',price:98},
    {name:'Windows pone',price:10}
 ];

 let template = '';
 
 products.forEach(function(product){

function discount(product){
    if (product.price<100) {
    return `<span>On sale !!</span>`
    }
}


    template =+ `
    <div class="product">
        <h1> ${product.name}</h1>
        ${discount()}
        <strong>Price: $ ${product.price} </strong>
     </div>
     `
 });

 document.body.insertAdjacentHTML ("afterbegin", template)
 

 const numbers = [1,2,3,4,5];
 const otherArray = numbers.map(function(number){
     return number * 10
 })
 console.log(otherArray)

 const users = [
{user:'Martin'},
{user:'Mari'},
{user:'ludi'},
 ];

 const listOfUsers =  users.map(function(user){
     return user.listOfUsers
 })

     listOfUsers.forEach(function(name){
     const select = document.querySelector('select')
     select.insertAdjacentHTML("afterbegin",`<option value ="${name}">${name}</option>`) 
    });


    
    const paintings = [
        {name:'Mona lisa',width:200,height:200},
        {name:'The scream',width:400,height:600},
        {name:'The last supper',width:600,height:700}
     ]

const otheryArray = paintings.map(function(painting){
    return ` The ${painting.name} is ${painting.width} x ${painting.height}`
})

console.log(otheryArray)
  
  const cars = [
    {name:'Ford',price:200},
    {name:'Nissan',price:400},
    {name:'Nissan',price:600}
 ] 

 const otherArray = cars.map(function(car){
    return `${car.name} is ${car.price * 5} reais `
 })

 console.log (otherArray)


const products =[
    {name: 'ipad', category: 'devices', number: 20},
    {name: 'Sony 3d', category: 'TV', number: 0},
    {name: 'E256', category: 'Blender', number: 3},
    {name: 'Super Vision', category: 'TV', number: 7},
    {name: 'iphone 7', category: 'phone', number: 40},
];

const result = products.filter(function(product){
    return product.category === 'TV' && product.number > 0
})

console.log(result)


const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];

 const result = channels.filter(function(channel){
     return channel.premium === true
 })
 console.log(result)
 

const channels = [
    {name:'HBO',premium:true},
    {name:'LIFE',premium:false},
    {name:'Max',premium:true},
    {name:'Cooking channel',premium:false},
    {name:'WOBI',premium:false}
 ];
 const user = {
    name:'Francis',
    premium:true,
    premiumChannels:function(){
        const $this = this;
        return channels.filter(function(channel){
            return channel.premium === true && $this.premium
    })
    },

    channels:function(){
        return channels.filter(function(channel){
            return channel.premium === false;
        })
    }
 }
 console.log(user.premiumChannels())

 console.log(user.channels())


 const brands = [
     {name:'Apple', id: 1},
     {name:'HP', id: 2},
     {name:'Samsung', id: 3},
     {name:'Samsunge', id: 4},
 ];

 const result = brands.find(function(brand){
     return brand.name === 'Samsung'
 })

 console.log(result)

  const cars= 
  {brand:"Ford", price:500, available:2, type:'Sport car'},
  {brand:"Ford", price:200, available:5, type:'Wagon'},
  {brand:"Ford", price:300, available:4, type:'Sport car'},
  {brand:"Ford", price:100, available:0, type:'Urban'},
];

function getResults(price,type){
    return cars.find(function(car){
        return car.rpice < price
        && car.available > 0
        && car.type === type
    })
}
//Essa parte deve estar no HTML
document.querySelector('.search').addEventListener("click", function(){
    let price  = parseInt(document.querySelector('#price').value)
    let type = document.querySelector('#type').value

    let Results = getResults(price,type)

    if (resulst){
        console.log(`Found ${results.brand} for $ ${results.price}')

    } else {
        console.log(`sorry, not car for you`)
    }
})


  const students = [
      {name:"Ludi", grade:10},
      {name:"Eliza", grade:4},
      {name:"Josh", grade:7},
  ]

  let allStudentsPassedTheCourse = students.some(function(student){
      return student.grade >= 6
  })
  console.log(allStudentsPassedTheCourse)

const previous = 200;
const current = [        
    {expense: 'Violin', amount:200},
    {expense: 'Guitar', amount:100},
    {expense: 'Violão', amount:100},
]
 const results = current.reduce(function(sum, expense){
     return sum + expense.amount
 },previous)

 console.log(results)


  const users = [
      {name: "Ludi", lastname:"Lopes", age:18},
      {name: "Isa", lastname:"Lopes", age:18},
      {name: "Mari", lastname:"Lopes", age:18},
  ]
  const name = users.reduce(function(start,user){
      start.push(user.name)
      return start;
  },[])
  console.log(name)
   

  const trips = [
    {to:'Brazil',distance:1000},
    {to:'Chine',distance: 2500},
    {to:'India',distance: 3000}
 ]
 const user =  trips.reduce(function(start,trip){
    return start + trip.distance
 },0)
 console.log(user)


const computers = [
    {type:'Laptop',price:124, os:'Windows'},
    {type:'Desk',price:124, os:'Mac'},
    {type:'Desk',price:124, os:'Windows'},
    {type:'Laptop',price:124, os:'Mac'},
    {type:'Laptop',price:124, os:'Windows'},
 ];
let brand = computers.reduce(function(start, item){
  
    return item.os ==='Mac' ? {mac:start.mac +1, windows:start.windows} :
    {mac:start.mac, windows:start.windows + 1 } 

 return 

let brand= computers.reduce(function(start,item){
    if (item.os === 'Mac'){
        return {mac:start.mac +1, windows:start.windows}
    } else{
        return {mac:start.mac, windows:start.windows + 1 }    }
}

},{mac:0, windows:0})

console.log(brand)


 const names = ["Jane","Thomas", "James"];
 for (let name of names){
     console.log(name)
 }

 const numbers= [10,20,30,40,50];
 let total = 0;

 for (let number of numbers){
     total += number
 }
 console.log(total)


 const value = (name,age) => {
     return `Meu nome é ${name} e tenho ${age} anos`
 }
 console.log(value("Vilmar",54))
 

  const value = (x,y) => x + y;
  console.log(value(1,2))


  const car ={
      brands: ['Food', 'Audi', 'BWW'],
      category: 'Sport car',
      message: function (){
          return this.brands.map((brand) => {
              console.log(`${brand} is a ${this.category}`)
          })
      }
  }

   car.message();

  const names= ["James","Ron","Lisa","Tommy"];
  let  randomName = items => items[Math.floor(Math.random()*items.length)]
  
  let randomNumber = (maxNumber,minNumber) => Math.floor(Math.random() * maxNumber) + minNumber;
  

console.log(`${randomName (names)} magic number is ${randomNumber(5,2)}`)

const request = (url,data) => {
    $.ajax({method:'post',url,data})
}
request('http:// request.com',{car:ford})

 

 
 const createCharacter = (name, powers) => {
     return {
         name, 
         powers,
         getFriends(){
             return 'Luis Lane'
         },
         getEnemies(){
             return 'Skeletor'
         }
     }
 }

 const characterObj = createCharacter('Superman', 'Fly');
 console.log (characterObj)
 console.log(characterObj.getFriends())



const name = "Francis";
const lastname = "Jones"
let age = 23;
let createObject = (name,lastname,age) => {
    return { name, lastname, age,}
}
console.log(createObject(name,lastname,age))


 function randomBrand(){
     const brands =['ford','nissan','bmw']
     return brands [Math.floor(Math.random() * brands.lenght)]
 }
 function cars(brand = randomBrand()){
     console.log (`My brand is ${brand}`)
 }

 cars()

 
// REST OPERATOR

function greeting(name = 'user'){
    return `Hello ${name}`;
 }
 console.log(greeting())
 

 function args (...args){
     console.log(arguments[0])
 }
 args ("Val 1", "Val 2", "Val 3")


 function hey(){
     console.log('hey')
 }
  function args (...args){
      console.log(`My name is ${args[0]}, I am ${args[1]}, my eyes are ${args[2]}`)
  }
  args("Hendi", "28", "black")

// SPREAD OPERATOR

const brands =["Ford", "Nissan"];
const otherBrand = ["Audi", "BMW"];

const newArray = [...brands, ...otherBrand, 'Other brand'];

console.log(newArray)


//EXERCICIO 208 - DUAS MANEIRAS DE RESOLVER

function totalDistance(...distances){
    let total = 0;
    distances.forEach(distance =>{
        total += distance
    })
    return total;
 }
 console.log(totalDistance(200,100,200))




 //SEGUNDA MANEIRA

 function totalDistance(...distances){
     return distances.reduce((store, distance)  => {
         return store + distance
     },0)
    }
    console.log(totalDistance(200,100,200))


//211 
   function showItems(arg1,...arg2){
    let arr = [...arg1,...arg2];
    console.log(arr)
 }
 showItems(["dogs","cats"],"turtles","sharks");


   //CLASS 2
 class Car {
     constructor(){
         this.status = 'New';
         this.wheels= 4;
         this.avail = () => {
             console.log('Available')
         }
     }
 }

 const car = new Car();
 const ford = new Car ();

 ford.color= 'red'

 console.log(car)


 //CLASS 3
 class Car {
     constructor (options){
         this.status = options.status;
         this.wheels = options.wheels;
         this.avail = options.avail;
     }
 }
 const car = new Car ({
     status : 'New',
     wheels:4,
     avail:() => {console.log('avail')}
 })
 console.log(car)

 //CLASS 4
 class Car {
    constructor(){
        this.status = 'New';
        this.wheels= 4;
        this.avail = () => {
            console.log('Available')
        }
    }
}
class Ford extends Car { //É para fazer um link entre ambas classes
    constructor(){
        super(); //É como se tivesse copiando a coisas da class CAR
    }
}
const car = new Car();
const ford = new Car ();

ford.color= 'red'

console.log(ford)


 //DESTRUCTURING

 const user = {
     name: "Francis",
     lastname: "Jones",
     age:25
 };

 const message = ({name,lastname,age},salute) => { //quando usa {} e passa os elementos, está dizendo para acessar o user object e pegar tudo que está dentro 
     console.log(`My name is ${name} ${lastname}, age ${age}, ${salute}`)
 }
message (user, 'Obrigada')


 //DESTRUCTURING 2
 const cars = [
     'camaro',
     'nova',
     'A4'
 ];

 const [camaro,...rest] =  cars;

 console.log(rest)

  
 //DESTRUCTURING 3
  const users = [
      {name: "Ludi", lastname:"ramos"},
      {name:"Josh", lastname:"Ramos"}
  ];

  const [{lastname}] = users;
  console.log(lastname)

  // outro exemplo

const users = {
    names: ['francis', 'martha', 'ray']
}
const {names: [name1, name2]} =  users; 
console.log(name2)

 
//DESTRUCTURING 4

function createCar({type, brand, model, color, year}){

}

const car = {
    brand: "ford",
    model: "focus",
    color: "red",
    year: "2015",
    type:"fast"
}
createCar(car)



let promise = new Promise ((resolved,rejected) =>{
    setTimeout(()=>{
        resolved(); //poderia dar como rejected
    },5000)
})
promise
.then(() => console.log('finished'))
.then(()=> console.log('finished2')) //usado para quando tem o resolved
.catch (()=> console.log ('damn')) // isso é usado para quando tem o reject

//PROMISES AND FECTH 3
const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch (url)
.then (response => response.json ())
.then(data => console.log(data))
.catch (error => console.log('didnt connect', error))


// PROMISES AND FETCH 4
const url = 'https://jsonplaceholder.typicode.com/posts/1'

fetch (url,{
    method: 'POST',
    headers: {
        'Content-Type' : 'application/json' 
    },
    body: JSON.stringify({title: 'title'}),
    mode: 'cors',

})
.then (response => response.json ())
.then(data => console.log(data))
.catch (error => console.log('didnt connect', error))


//224- Strings and numbers

console.log("food".repeat( 3*10 )) // aqui irá repetir tantas vezes q quiser

const word = "camera";
console.log(word.startsWith("cam")) // irá perguntar se começa com cam e o resultado dará true
console.log(word.endsWith("era")) //pergunta se termina com era,
console.log(word.endsWith("me", 4)) //irá checar se a palavra me existe nos primeiros 4 caracteres
console.log(word.includes("ame")) //irá checar se o ame está incluso na palavra
console.log(word.includes("ame",2)) //o resultado dará false pq ame não esta nos primeiros 2 caracteres
console.log(word.includes("me",2)) //Dará true porque está checando os ultimos carateres que não seja os dois primeiros e essa palavra existe


//NUMBERS HELPERS - checa se o numero passado é um numero safe
console.log(Number.isSafeInteger(200)) //true
console.log(Number.isSafeInteger(0.2345)) //false
console.log(Number.isSafeInteger(0,2345)) // true


//PARA VER SE OS NÚMEROS SÃO INTEIROS
console.log(Number.isInteger(200)) //true
console.log(Number.isInteger(0.1)) //false

//PARA ARRENDONDAR para baixo NÚMEROS
console.log(Math.trunc(0.1)) //0
console.log(Math.trunc(-0.1)) // -0
console.log(Math.trunc(42.9)) //42
*/

//MODULES
