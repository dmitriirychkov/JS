// const car = {
//    model: 'Tesla',
//    year: 2025,
// }

// const json = JSON.stringify(car)
// const parsed = JSON.parse(json)

// console.log(json)
// console.log(parsed)

const list = document.querySelector('#list')
const filter = document.querySelector('#filter')

filter.addEventListener('input', () => {
    console.log('input')
})

async function start() {
    list.innerHTML = 'Loading ...'
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await resp.json()
        setTimeout(() => {
            render(data)
        }, 2000)
    } catch (err) {
        list.computedStyleMap.color = 'red'
        list.innerHTML = err.message 
    } 
}

function render(users = []) {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
}

function toHTML(user) {
    return `
        <li class="list-group-item">${user.name}</li>
    `
} 

start()
