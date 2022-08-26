const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('What is your name? ', (answer) => {
    // 입력값이 answer매개변수로 들어온다.
    console.log(`Hello, ${answer}, nice to meet you`);
    rl.close();
});