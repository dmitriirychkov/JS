const person = {
    name: 'Dmitrii',
    age: 37,
    isYoutuber: false,
    languages: ['ru', 'en'],
    address: {
        city: 'Yekaterinburg',
        street: 'Parina'
    },
    'complex key': 'complex value',
    ['key_' + 21 * 2]: 'computed value',
    greet() {
        console.log('Greet from person', this)
    },
    arrow: () => {
        console.log('Person Arrow', this)
    },
    info() {
        console.log('Person name', this.name)
    }
}

/*
console.log(person.address)
const addressKey = 'address'
console.log(person['address'])
console.log(person['complex key'])

person.age++
person.languages.push('de')
console.log(person.languages)
*/

// person.address = undefined
// delete person.address
// console.log(person)

const age = person.age
const name = person.name
const languages = person.languages

console.log(languages, age, name)


