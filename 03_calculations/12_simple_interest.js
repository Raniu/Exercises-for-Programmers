
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const principal = await getNumber(`Enter the principal: `);
    const interestRate = await getNumber(`Enter the rate of interest: `);
    const period = await getNumber(`Enter the number of years: `);

    for(let year = 1; year <= period; year++) {
        console.log(`After ${year} years at ${interestRate}%, the investment will be worth $${calculateSimpleInterest(principal, interestRate, year)}`)
    }
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

function calculateSimpleInterest(principal, interestRate, period){
    return Math.ceil((principal*(1+((interestRate /100) * period ))) * 100) / 100;
}