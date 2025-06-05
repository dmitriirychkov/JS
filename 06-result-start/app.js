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
let USERS = []

filter.addEventListener('input', (event) => {
  const value = event.target.value.toLowerCase()
  const filteredUsers = USERS.filter((user) => {
    // Разделяем имя и фамилию
    const [firstName, lastName] = user.name.split(' ').map(part => part.toLowerCase())
    // Проверяем, есть ли введенное значение в имени или фамилии
    return firstName.includes(value) || (lastName && lastName.includes(value))
  })
  render(filteredUsers)
})

async function start() {
  list.innerHTML = 'Loading...'
  try {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()
    setTimeout(() => {
      USERS = data
      render(data)
    }, 2000)
  } catch (err) {
    list.style.color = 'red'
    list.innerHTML = err.message
  }
}

function render(users = []) {
  if (users.length === 0) {
    list.innerHTML = 'No matched users!'
  } else {
    const html = users.map(toHTML).join('')
    list.innerHTML = html
  }
}

function toHTML(user) {
  return `
    <li>${user.name}</li>
  `
}

start()
