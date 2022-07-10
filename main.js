'use strict';

async function init(){
    const time = Date.now()

    const userPromise = getUserData()
    const messagePromise = getWelcomeMessage()

    document.getElementById('output').innerHTML = `0: init`
    const user = await userPromise
    document.getElementById('output').innerHTML += `<br> ${Date.now() - time}: ${user.name} - ${user.email}`
    const message = await messagePromise
    document.getElementById('output').innerHTML += `<br> ${Date.now() - time}: ${message}`
}

function getUserData(){
    return new Promise((resolve, reject) => {
        let user = {
            name: 'Hernán',
            email: 'hmreumann@hotmail.com'
        }

        setTimeout(() => {
            resolve(user)
        }, 2000)
    })
}

function getWelcomeMessage()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Welcome to our async program!!')
        }, 2000)
    })
}

init()
