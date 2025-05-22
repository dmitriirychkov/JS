// Function Declaration 
function greet(name) {
    console.log('Hello - ', name)
}
// Function Expression
const greet2 = function (name) {
    console.log('2 Hello - ', name)
}

greet('Dmitrii')
greet2('Dmitrii')

// console.dir(greet)

/*
setTimeout(function() {
    greet('Dmitrii2')
}, 1500)
*/

setInterval(function() {
    console.log(1)
}, 2000)




