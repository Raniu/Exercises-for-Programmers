const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function question(input) {
    return await rl.question(input);
}

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

function close() {
    rl.close()
}

module.exports = { question, getNumber, close };