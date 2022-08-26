
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const principalAsked = await rl.question('select input principal (amount / goal) ')

    const principal = await getNumber(`What is the principal ${principalAsked}? `);
    const interestRate = await getNumber(`What is the rate: `);
    const period = await getNumber(`What is the number of years: `);
    const compound = await getNumber(`What is the number of times the interest is compounded per year: `);

    if(principalAsked === 'amount'){
        console.log(`${principal} invested at ${interestRate}% for ${period} years compounded ${compound} times per year is $${calcCompoundedInterest(principal, interestRate, period, compound)}`)
    } else if(principalAsked === 'goal'){
        console.log(`If your goal principal and interest is ${principal} for ${period} years compounded ${compound} times per year, you should invest $${calcPrincipal(principal, interestRate, period, compound)}`)
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

function calcCompoundedInterest(principal, interestRate, period, compound){
    return Math.ceil((principal * Math.pow(( 1 + ((interestRate / 100) / compound)), (compound * period))) * 100) / 100
}

function calcPrincipal(goalPrincipalInterest, interestRate, period, compound){
    return Math.ceil((goalPrincipalInterest / Math.pow((1+((interestRate / 100) / compound)),(compound * period))) * 100) / 100
}