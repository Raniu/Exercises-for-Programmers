//Node.js ver 18.x
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

let promptMadLibs = async () => {
    let noun = await rl.question('Enter a noun: ');
    let verb = await rl.question('Enter a verb: ');
    let adjective = await rl.question('Enter an adjective: ');
    let adverb = await rl.question('Enter an adverb: ');
    console.log(`Do you ${noun} your ${verb} ${adjective} ${adverb}? That's hilarious!`);
    rl.close();
}

promptMadLibs().then(r => r);