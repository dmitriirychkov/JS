// const now = new Date()

// const start = new Date(1000 * 60 * 60 * 24 * 365)


// const date = new Date(1988, 4, 3, 12, 42, 12)

// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getMilliseconds())

// now.setFullYear(2055)

// console.log(now.toDateString())
// console.log(now.toTimeString())
// console.log(now.toLocaleDateString())
// console.log(now.toLocaleTimeString())

//=======

let mode = 'time'
const output = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

output.textContent = new Date()

setInterval(() => {
    output.textContent = format(mode)
}, 1000)

// Pure Function
function format(formatMode) {
    const now = new Date()

    switch (formatMode) {
        case 'time':
            return now.toLocaleTimeString()
        case 'date':
            return now.toLocaleTimeString()
        case 'full':
            return now.toLocaleTimeString() + ' ' + now.toLocaleString()
        default:
            return now.toLocaleTimeString()
    }
}
