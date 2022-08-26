//Node.js ver 18.x
const readline = require('readline/promises');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let promptFunction = async () => {
    let quote = await rl.question('What is the quote? ');
    let speaker = await rl.question('Who said it? ');
    console.log(`${speaker} says "${quote}"`);
    rl.close();
}

promptFunction();


/* Node.js ver 16.x LTS
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('What is the quote? ');
rl.prompt();

const promise = new Promise((resolve) => {
    rl.on('line', function (input){
        resolve(input);
    })
})

promise.then(quote => {
    rl.setPrompt('Who said it? ');
    rl.prompt();

    let promise2 = new Promise(resolve => {
        rl.on('line', function (writer){
            resolve([quote, writer]);
        });
    })
    promise2.then(result => {
        console.log(result[1] + ' says, "' + result[0] + '"');
        rl.close();
    })
})

*/