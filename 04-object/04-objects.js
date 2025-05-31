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

// Destructuring
// const age = person.age
// const name = person.name
// const languages = person.languages

/*
const name = 'Petr'

const {age, name: firstName = 'Test', languages} = person

console.log(languages, age, firstName)
*/

/*
for (let key in person) {
    if (person.hasOwnProperty(key)) {
     console.log(person[key])
    }
}
*/

/*
Object.keys(person).forEach((key) => {
    console.log(person[key])
})
*/

const logger = {
    keys() {
        console.log('Object keys:', Object.keys(this))
    },

    keysAndValues() {
        Object.keys(this).forEach((key) => {
        console.log('Key:', key)
        console.log('Value', this[key])
      })
    },
}

const bound = logger.keys.bind(person)
bound()
