// const car = {
//    model: 'Tesla',
//    year: 2025,
// }

// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)

// console.log(json)
// console.log(parsed)

async function start() {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        console.log(data)
    } catch (err) {} 
}

start()
