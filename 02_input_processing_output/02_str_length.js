const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.setPrompt('What is the input string? ');
rl.prompt();

rl.on('line', function(str){
    if(str.length > 0){
        console.log(`${str} has ${str.length} characters`);
        rl.close();
    }
    else{
        console.log('please enter a string');
    }
    rl.prompt()
});

rl.on('close', function() {
    process.exit();
});
