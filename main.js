'use strict';

let output = document.getElementById('output')

let fruits = [
    'Manzana',
    'Naranja',
    'Banana',
    'Limon',
    'Melon',
    'Cereza',
    'Frambuesa'
]

// let fruitsThatContainE = []

// fruits.forEach(function(fruit){
//     if(fruit.includes('e')){
//         fruitsThatContainE.push(fruit)
//     }
// })

let fruitsThatContainE = fruits.filter(f => f.includes('e'))

output.innerHTML = fruitsThatContainE.join(', ')

// Reduce example

let users = [
    {
        name: 'Hernán',
        email: 'hmreumann@hotmail.com',
        stars: 4
    },
    {
        name: 'Luis',
        email: 'lmreumann@hotmail.com',
        stars: 9
    },
    {
        name: 'Estefi',
        email: 'tefi@hotmail.com',
        stars: 85
    },
]

let totalStars = users.reduce((stars, user) => stars += user.stars, 0)

output.innerHTML += `<br> ${totalStars}`

// Map Example

let userEmails = users.map(u => u.email)

output.innerHTML += `<br>Emails: ${userEmails.join(', ')}`
