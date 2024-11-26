// Primitive

// 7 types: String,Number,Undefined,Symbol,BigInt,Null,Boolean

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id===anotherId);

const bifNumber = 3455796089673957594n

//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name: "Sushree",
    age: 28,
}

const myFunction = function(){
    console.log(("Hello World"));
    
}
//console.log(typeof bigNumber);
//console.log(typeof myFunction);
//console.log(typeof anotherId);


// https://262.ecma-international.org/5.1/#sec-11.4.3

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

let myYoutubename = "aglimpseofsushree"
let anothername = myYoutubename
anothername = "Sushree"

//console.log(myYoutubename);
//console.log(anothername); 

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "sushree@google.com"
console.log(userOne.email);
console.log(userTwo.email);









