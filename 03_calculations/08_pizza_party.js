//Node.js ver 18.x
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    let people = await getNumber('How many people? ');
    let pizza = await getNumber('How many pizzas do you have? ')
    let pizzaPieces = await getNumberEven('How many pieces are in a pizza? ')

    console.log(`${people} people with ${pizza} pizzas `);
    console.log(`Each person gets ${pizzaQuotient(people, pizza, pizzaPieces)} pieces of pizza.`)
    console.log(`There are ${pizzaRemainder(people, pizza, pizzaPieces)} leftover pizza`)
    rl.close();
})()

async function getNumber(input) {
    let number;
    while (true) {
        number = await rl.question(input);
        if(!isNaN(number) && number > 0) {
            return parseInt(number);
        }
    }
}

async function getNumberEven(input) {
    let number;
    while (true) {
        number = await rl.question(input);
        if(!isNaN(number) && number > 0 && (number%2===0)) {
            return parseInt(number);
            break;
        }
    }
}

function pizzaQuotient (people, pizza, pizzaPieces) {
    let quotient = Math.trunc((people * pizza) / pizzaPieces);
    return quotient;
}

function pizzaRemainder (people, pizza, pizzaPieces) {
    let remainder = ((people * pizza) % pizzaPieces);
    return remainder;
}