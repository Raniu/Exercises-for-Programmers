// 다시 수정하기
const rd = require('../util/util-question');

(async () => {
    let age = await rd.getNumber(`What is your age? `);
    let pulse = await rd.question(`What is your heart rate? `);

    console.log(`Resting Pulse: ${pulse} Age: ${age}`);
    console.log(`${line('Intensity', 'Rate')}`);
    console.log(`${line('-', '-', '-')}`);

    for(let i = 55; i<=95; i++) {
        let heartRate = Math.floor((220 - age - pulse) /100 * i + pulse);
        console.log(`${line(i + '%', heartRate + ' bpm')}`);
    }
    rd.close();
})();

function line(c1, c2, space) {
    if (!space) {
        space = ' ';
    }

    return c(c1, space) + '|' + c(c2, space);
}

function c(str,pad) {
    if (str.length >= 10) {
        return str;
    }

    while (str.length !== 10) {
        str += pad;
    }

    return str;
}

