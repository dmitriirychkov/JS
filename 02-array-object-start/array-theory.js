const names = ['Дмитрий', 'Евгения', 'Ирина', 'Роман']

// names.push('Олег')
// names.unshift('Олег')

// const name = names.shift()
// const name = names.pop()
// console.log('Names: ', names, name)

// console.log(names.reverse())
// const reversed = names.toReversed()
// const letters = ['e', 'c', 'd', 'b', 'a']
// console.log(letters.toSorted())
// console.log(letters)

// console.log(names.splice(2, 1))
// console.log(names.toSpliced(0,2))
// console.log(names)

// const greateWoman = 'Ирина'
// const index = names.indexOf(greateWoman)
// console.log(index)
// const newNames = names.with(index, 'Ирина моя')
// names[index] = 'Ирина моя'
// console.log(names[index])
// console.log(names)
// console.log(newNames)

/*
const capitalNames = names.map(function(name, index) {
    if (index === 2) {
        return 'Ирина моя'
    }
    return name
})
console.log(capitalNames)
*/

// console.log(names.indexOf('Роман') !== -1)

const people = [
    {name: 'Дмитрий', budget: 4200}, 
    {name: 'Евгения', budget: 15100}, 
    {name: 'Ирина', budget: 300},
    {name: 'Роман', budget: 7520}
]

// console.log(people.indexOf({ name: 'Роман', budget: 7520}))
// let findedPerson 

// for(let person of people) {
//    if (person.budget === 7520) {
//        findedPerson = person
//    }
// } 

const finded = people.find(function(person) {
    return person.budget === 7520
})

// const finded = people.find((p) => p.budget === 7520)
console.log(finded)
