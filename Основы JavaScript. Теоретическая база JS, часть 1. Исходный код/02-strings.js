const name = 'Dmitrii'
const age = 37

function getAge() {
    return age
}

// const old = 'Hello my name is ' + name + ' and my age is' + age
const output = `Hello my name is ${name} and my age is ${getAge() > 18 ? 'Cant drive' : `Can't drive`}`

console.log(output)
