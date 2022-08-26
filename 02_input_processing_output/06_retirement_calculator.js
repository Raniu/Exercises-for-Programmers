//Node.js ver 18.x
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    let currentAge = await rl.question('What is your current age? ')
    let retireAge = await rl.question('At what age would you like to retire? ')

    let currentYear = new Date().getFullYear()
    let retireYear = currentYear + (retireAge - currentAge)

    if(currentAge > retireAge) {
        console.log(`You have already retired in ${retireYear} at the age of ${retireAge}.`)
        rl.close();
        return;
    }

    console.log(`You have ${retireAge - currentAge} years left until you can retire.`);
    console.log(`It's ${currentYear}, so you can retire in ${retireYear}.`);
    rl.close();
})()
