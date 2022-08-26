//Node.js ver 18.x
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    let firstNumber = await getNumber('What is the first number? ')
    let secondNumber = await getNumber('what is the second number? ')
    function plus2(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
    function minus2(firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }
    function multiply2(firstNumber, secondNumber) {
        return firstNumber * secondNumber;
    }
    function divide2(firstNumber, secondNumber) {
        return firstNumber / secondNumber;
    }

    console.log(
        `${firstNumber} + ${secondNumber} = `, plus2(firstNumber, secondNumber)
        , `\n${firstNumber} - ${secondNumber} = `, minus2(firstNumber, secondNumber)
        , `\n${firstNumber} * ${secondNumber} = `, multiply2(firstNumber, secondNumber)
        , `\n${firstNumber} / ${secondNumber} = `, divide2(firstNumber, secondNumber)
    );
    rl.close();
})()

async function getNumber(input) {
    let number;

    while (true) {
        number = await rl.question(input);
        if(!isNaN(number) && number > 0) {
            return parseInt(number);
        }
    }

}