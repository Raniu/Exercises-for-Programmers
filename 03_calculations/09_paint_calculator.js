//Node.js ver 18.x
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    let width = await getNumber('please enter a width in meters ')
    let height = await getNumber('please enter a height in meters ')

    const literPerSquared = 9
    const area = width * height
    console.log(
        `You will need to purchase ${Math.ceil(area/literPerSquared)} liters of paint to cover ${area} square meters`
    );

    console.log();
    const radius = await getNumber('please enter a radius in meters ')
    const circleArea = Math.ceil((Math.PI * radius * radius)*1000)/1000
    console.log(
        `You will need to purchase ${Math.ceil(circleArea/literPerSquared)} liters of paint to cover ${circleArea} square meters`
    );

    console.log()
    console.log('upper width : w1, down width: w2, left height: h1, right height: h2');
    const w1 = await getNumber('w1: ');
    const w2 = await getNumber('w2: ');
    const h1 = await getNumber('h1: ');
    const h2 = await getNumber('h2: ');

    const lArea = w1 * h1 + ((w2-w1) * h2);
    console.log(
        `You will need to purchase ${Math.ceil(lArea/literPerSquared)} liters of paint to cover ${lArea} square meters`
    );
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

