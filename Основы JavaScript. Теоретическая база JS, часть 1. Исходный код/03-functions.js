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

setTimeout(function() {
    console.log('Timeout')
}, 1500)




