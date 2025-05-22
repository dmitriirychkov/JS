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

arrow('Dmitrii', 77)



