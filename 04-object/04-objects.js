const person = {
    name: 'Dmitrii',
    age: 37,
    isYoutuber: false,
    languages: ['ru', 'en'],
    address: {
        city: 'Yekaterinburg',
        street: 'Parina'
    },
    'complex key': 'complex',
    ['key_' + 21 * 2]: 'computed value',
    greet() {
        console.log('Greet from person')
    },
    arrow: () => {
        console.log('Person Arrow')
    },
    info() {
        console.log(this)
        console.log('Person name', this.name)
    }
}

console.log(person)
person.info()


