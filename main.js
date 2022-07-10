'use strict';

let fruit = new Map();

fruit.set(1, 'Apple')
fruit.set(2, 'Orange')
fruit.set(3, 'Banana')

let output = document.getElementById('output')

fruit.delete(2)

fruit.forEach(item => {
    output.innerHTML += `<br> ${item}`
})
