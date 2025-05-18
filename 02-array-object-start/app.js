// Theory

// const array = [1, 2, 3, 5, 20, 42]
// const arrayStrings = ['a', 'b', 'c', null, 12]
// const array = new Array(1, 2, 3, 5, 20, 42)

// console.log(array.length)
// console.log(array[1])
// console.log(array[array.length - 1]) // array[6 -1]
// array[0] = 'Hello!'
// console.log(array)
// array[array.length] = 'becon'

const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

/*
console.log(inputElement.value)

const notes = ['записать блок про массивы', 'рассказать теорию объектов']

function render() {
        // for (let i = 0; i < notes.length; i++) {
        //    listElement.insertAdjacentHTML('beforeend', getNotTemplate(notes[i]))
        // }

        for (let note of notes) {
            listElement.insertAdjacentHTML('beforeend', getNotTemplate(note))
        }
} 

render()

createBtn.onclick = function () {
if (inputElement.value.length === 0) {
    return
}
    // listElement.innerHTML = 
    listElement.insertAdjacentHTML(
            'beforeend', 
            getNotTemplate(inputElement.value)
            )
    inputElement.value = ''
}

function getNotTemplate(title) {
    return `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
            >
                <span>${title}</span>
                <span>
                <span class="btn btn-small btn-success">&check;</span>
                <span class="btn btn-small btn-danger">&times;</span>
                </span>
            </li>
            `
} 

Object Theory

const person = {
    firstName: 'Dmitrii',
    LastName: 'Rychkov',
    year: 1988,
    hasGirlfriend: true,
    languages: ['ru', 'en'],
    getFullName: function() {
        console.log(person.firstName + ' ' + person.LastName)
    }
}

console.log(person.year)
console.log(person['languages'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = false
person.getFullName()
*/

const notes = [
    {
    title: 'записать блок про массивы',
    completed: false,
    },
    {
    title: 'рассказать теорию объектов',
    completed: true,
    },
 ]

 function render() {
        listElement.innerHTML = ''
        for (let i = 0; i < notes.length; i++) {
            listElement.insertAdjacentHTML('beforeend', getNotTemplate(notes[i], i))
        }
}

render() 

createBtn.onclick = function () {
if (inputElement.value.length === 0) {
    return
}
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render() 
    inputElement.value = ''
}

listElement.onclick = function(event) {
    if (event.target.dataset.index) {
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type

        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'remove') {
            console.log('remove', index)
        }

        render()
    }
}

function getNotTemplate(note, index) {
    return `
            <li
                class="list-group-item d-flex justify-content-between align-items-center"
            >
                <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}" data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
                </span>
            </li>
            `
} 



