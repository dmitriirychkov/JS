const num = 42 // integer
const float = 42.42 // float
const pow = 10e3
const big = 1_000_000_000

/*
console.log(Number.MAX_SAFE_INTEGER)
console.log(Math.pow(2, 53) -1)
console.log(Number.MIN_SAFE_INTEGER)
console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(1/0)
console.log(Number.isFinite(1/0))
console.log(23 / undefined)
const weird = 23 / undefined
console.log(Number.isNaN(weird))
console.log(Number.isNaN(12))
*/

const strInt = '42'
const strFloat = '42.42'

// console.log(Number(strInt))
// console.log(Number(strFloat))
// console.log(Number.parseInt(strInt))
// console.log(Number.parseFloat(strFloat))
// console.log(+strInt, +strFloat)

const fixed = (0.1 + 0.2).toFixed(10)
console.log(parseFloat(fixed))
