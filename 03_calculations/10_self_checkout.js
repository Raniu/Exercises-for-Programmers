//Node.js ver 18.x
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    let items = [];
    let index = 0;
    while(true) {
        let price = await rl.question(`Price of item ${index+1} : `)
        if(price === ''){
            break;
        }
        let quantity = await getNumber(`Quantity of item ${index+1} : `)
        if(quantity === ''){
            break;
        }
        items.push({price, quantity})
        index++;
    }

    const subtotal = calcSubtotal(items)
    const tax = calcTax(subtotal)
    const total = calcTotal(subtotal, tax)

    printConsole(subtotal, tax, total)

    rl.close();
})()

async function getNumber(input) {
    let number;

    while (true) {
        number = await rl.question(input);
        if(!isNaN(number) && number > 0) {
            return parseFloat(number);
            break;
        }
    }
}

function calcSubtotal(items){
    let subtotal = 0
    for(let i = 0; i < items.length; i++) {
        subtotal += Math.round((items[i].price * items[i].quantity) * 100) / 100
    }
    return subtotal
}

function calcTax(subtotal){
    const taxRate = 5.5 / 100
    return Math.round((subtotal * taxRate) * 100) / 100
}

function calcTotal(subtotal, tax){
    return subtotal + tax;
}

// 출력
function printConsole(subtotal, tax, total){
    console.log(`Subtotal: $${subtotal.toFixed(2)}`)
    console.log(`Tax: $${tax}`)
    console.log(`Total: $${total}`)
}