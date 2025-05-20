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

// BigInt
// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 9532232323n)
// console.log(-42n)
// console.log(42.42n) // error
// console.log(10n -4) // error
// console.log(parseInt(10n) - 4)
// console.log(10n - BigInt(4))
// console.log(5n / 2n)
// console.log(5 / 2)

// Math
// console.log(Math.E)
// console.log(Math.PI)

const myNum = 4.9

// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 3))
// console.log(Math.abs(-42))
// console.log(Math.max(2, 5, 42, 199, 0))
// console.log(Math.min(2, 5, 42, 199, 0))
console.log(Math.floor(myNum))
console.log(Math.ceil(myNum))
console.log(Math.round(myNum))
console.log(Math.trunc(myNum))
console.log(Math.random())
