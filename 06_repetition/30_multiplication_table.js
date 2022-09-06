const rd = require('../util/util-question');

(async () => {
    const number = await rd.getNumber('multiplication : ');
    printMultiplication(number)
    printMultiplicationTable(number)
    rd.close();
})();

function printMultiplication(number) {
    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= number; j++) {
            console.log(`${i} x ${j} = ${i * j}`);
        }
    }
}

function printMultiplicationTable(number) {
    let baseRow = [];

    for (let i = 0; i <= number; i++) {
        baseRow.push(i);
    }

    console.log('\t'  + baseRow.join('\t'));

    for (let i = 0; i < baseRow.length; i++) {
        let row = [baseRow[i]];

        for (let j = 0; j <= number; j++) {
            row.push(baseRow[i] * j);
        }
        console.log(row.join('\t'));
    }
}