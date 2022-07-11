'use strict';

let output = document.getElementById('output')

// let fruit = new Map();

// fruit.set(1, 'Apple')
// fruit.set(2, 'Orange')
// fruit.set(3, 'Banana')


// fruit.delete(2)

// fruit.forEach(item => {
//     output.innerHTML += `<br> ${item}`
// })

const users = new Map();

const hernanObject = {
    name: 'Hernán',
    email: 'hmreumann@hotmail.com'
}

users.set(hernanObject, function(user) {
    output.innerHTML += `${user.name} - ${user.email} <br>`
})

users.set({
    name: 'Jose',
    email: 'jose@hotmail.com'
}, function(user) {
    output.innerHTML += `${user.email} - ${user.name} <br>`
})

users.forEach((value, key) => { value(key) })

let hasHernanObject = users.has(hernanObject)
console.log('has Hernan Object: ', hasHernanObject)

// Set only contain values
// There can only be one exact same value
const fruit = new Set();

fruit.add('Banana')
fruit.add('Apple')
fruit.add('Apple')
fruit.add('Apple')
fruit.add('Orange')

fruit.forEach(value => output.innerHTML += `<br> ${value}`)
