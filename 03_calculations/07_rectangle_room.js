//Node.js ver 18.x
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const selection = await rl.question('select input unit (feet / meter) ')

    let length = await getNumber(`What is the length of the room in ${selection}? `)
    let width = await getNumber(`What is the width of the room in ${selection}? `)

    let area = length * width;

    if(selection === 'feet'){
        consolePrint(length, width, area, feetToMeter(area), selection, 'meter')
    } else if(selection === 'meter'){
        consolePrint(length, width, area, meterToFeet(area), selection, 'feet')
    }

    rl.close();
})()

async function getNumber(input) {
    let number;
    while (true) {
        number = await rl.question(input);
        if(!isNaN(number) && number > 0) {
            return parseInt(number);
            break;
        }
    }
}

const feetToMeterRate = 0.09290304;

function feetToMeter(area) {
    // 소수점 이하 3자리만 추출하기 위해 반올림하기 전에 1000을 숫자로 곱합니다. 마지막으로 소수점 이하 3자리까지 구하기 위해 숫자를 1000으로 나눕니다.
    return Math.round((area * feetToMeterRate) * 1000) / 1000;
}

function meterToFeet(area){
    return Math.round(area / feetToMeterRate * 1000) / 1000;
}

function consolePrint(length, width, area, result, selection, toSelection){
    console.log(`You entered dimensions of ${length} ${selection} by ${width} ${selection}`);
    console.log('The area is');
    console.log(`${area} square ${selection}`);
    console.log(`${result} square ${toSelection}s`);
}