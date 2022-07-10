'use strict';

let myPromise = new Promise((resolve, reject) => {
    let user = {
        name: 'Hernan',
        email: 'hernan@gmail.com'
    }

    setTimeout(() => {
        resolve(user)
        // reject('We had an error')
    }, 3000)
})

let getAdditionalDetails = user => {
    return new Promise((resolve, reject) => {
        document.getElementById('output').innerHTML = `${user.name} - ${user.email}`

        user.favoriteColor = 'Red'

        setTimeout(() => {
            resolve(user)
        }, 3000)
    })
}

myPromise
    .then(getAdditionalDetails)
    .then((user) => document.getElementById('output').innerHTML = `${user.name} - ${user.email} - ${user.favoriteColor}`)
    .catch((error) => document.getElementById('output').innerHTML = error)

document.getElementById('output').innerHTML = 'Waiting for the promise response.'
