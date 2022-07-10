'use strict';

// const user = {
//     name: 'Hernán',
//     email: 'hmreumann@hotmail.com'
// };

// const nameString = name => `${name} (${user.email})`;

// document.getElementById('output').innerHTML = nameString('Hernán');

let output = document.getElementById('output')

// const users = [
//     {
//         name: 'Lua',
//         email: 'lua@gmail.com',
//     },
//     {
//         name: 'Lisa',
//         email: 'lisa@gmail.com',
//     }
// ];

// let names = [];

// users.forEach(user => names.push(user.name))

// output.innerHTML = names.join(', ');

// document.getElementById('btn').addEventListener('click', () => {
//     const buttonId = () => event.target.getAttribute('id')

//     document.getElementById('output').innerHTML = `The buttons id is: ${buttonId()}`
// })

class Item{
    static maxQuantity = 10
    static getText(){
        return `Something interesting to be said`
    }

    constructor(name, category){
        this.name = name
        this.category = category
    }

    getDetails(){
        return `${this.name} - ${this.category} `
    }
}


class PurchasedItem extends Item {
    constructor(name, category, price){
        super(name, category)
        this.price = price
    }

    getDetailsWithPrice(){
        return `${this.name} - ${this.category} - $${this.price}`
    }

    static getPurchasedItems(){
        return `3 / ${super.maxQuantity}`
    }
}

let purchasedItem = new PurchasedItem('Cofee', 'Drinks', 1.95);

output.innerHTML = purchasedItem.getDetailsWithPrice() + ` - ${PurchasedItem.getPurchasedItems()}` + ` - ${Item.getText()}`;
