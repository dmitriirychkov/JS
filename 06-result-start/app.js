const car = {
    model: 'Tesla',
    year: 2025,
}

const json = JSON.stringify(car)
const parsed = JSON.parse(json)

console.log(json)
console.log(parsed)
