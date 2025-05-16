let num = 37 // number
let firstName = 'Dmitrii' // string
const isProgrammer = true // boolean 

/* Can Do
let $ = 'test'
let $num = 37
let num$ = 37
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Eva' // bad
let myNum = 37 // good
let num42 = 10
*/

/* Restricted
let 42num = '11'
let my-num = 1
let const
*/

// firstName = 'Tomyshev'
// isProgrammer = false // error because of const

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

/*
let num2 = num + 10
console.log(num, num2)
num = num2 - num
num2 = num2 + 1
console.log(num, num2)

let num3 = (num + 10 * 2) / 3 - 1
console.log(num3)
*/

// const fullName = firstName + ' Rychkov'
// const fullName = firstName + '\n' + 'Rychkov'
// console.log(fullName)

const resultElement = document.getElementById('result')
console.log(resultElement.textContent)
resultElement.textContent = (42 - 2) / num
