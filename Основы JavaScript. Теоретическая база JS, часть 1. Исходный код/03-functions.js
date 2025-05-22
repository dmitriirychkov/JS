// Function Declaration 
// function greet(name) {
//    console.log('Hello - ', name)
// }
// Function Expression
// const greet2 = function (name) {
//    console.log('2 Hello - ', name)
// }

// greet('Dmitrii')
// greet2('Dmitrii')

// console.dir(greet)

/*
setTimeout(function() {
    greet('Dmitrii2')
}, 1500)
*/
/*
let counter = 0
const interval = setInterval(function() {
    if  (counter === 5){
       clearInterval(interval)
    } else {
       console.log(++counter)
   }
}, 1)
*/

// Arrow Function 
function greet(name) {
    console.log('Hello - ', name)
}

const arrow = (name, age) => {
    console.log('Hello - ', name, age)
}

const arrow2 = (name) => console.log('Hello -', name)

function pow(num, exp) {
    return Math.pow(num, exp)
}

const pow2 = (num, exp) => Math.pow(num, exp)

console.log(pow2(2, 3))

// ========== Default Parameters
const sum = (a= 40, b = 2) => a + b 

console.log(sum(40, 2))
console.log(sum())



