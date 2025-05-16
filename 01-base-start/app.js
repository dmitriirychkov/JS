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
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

// console.log(resultElement.textContent)
// resultElement.textContent = (42 - 2) / num


// console.log(typeof sum)

plusBtn.onclick = function () {
    action = '+'
}

minusBtn.onclick = function () {
    action = '-'
}

function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'green'    
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    // if (actionSymbol == '+') {
    //    return num1 + num2
    // } else if (actionSymbol == '-') {
    //    return num1 - num2
    // }
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)

    // if (action == '+') {
    //    const sum = Number(input1.value) + Number(input2.value)
    //    printResult(sum)
    // } else if (action == '-') {
    //    const sum = Number(input1.value) - Number(input2.value)
    //    printResult(sum)
    // }
}
