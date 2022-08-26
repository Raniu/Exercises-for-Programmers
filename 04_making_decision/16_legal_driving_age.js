const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const inputAge = await getNumber('What is your age? ');

    console.log(`You are ${inputAge > 16 ? '':'not '}old enough to legally drive`)

    rl.close()
})()

async function getNumber(input) {
    let number;

    while (true) {
        number = await rl.question(input);
        if(!isNaN(number) && number > 0) {
            return parseFloat(number);
            break;
        } else {
            console.log('Please enter a numeric value greater than 0 ')
        }
    }
}
