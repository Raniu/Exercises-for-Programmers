// 센트 기준으로 올림처리?
// 별도의 API를 적용하여 현재의 업데이트 된 환율을 적용하는 프로그램 만들기 수정
const readlinePromises = require('readline/promises');

const rl = readlinePromises.createInterface({
    input: process.stdin,
    output: process.stdout
});

(async () => {
    const amountFrom = await getNumber(`How many Euros are you exchanging? `);
    const rateFrom = await getNumber(`What is the exchanging rate? `);

    console.log(
        `${amountFrom} Euros at an exchange rate of ${rateFrom} is`
        , `\n${exchange(amountFrom, rateFrom)} dollars`
    );
    rl.close();
})()

async function getNumber(input) {
    let number;

    while (true) {
        number = await rl.question(input);
        if(!isNaN(number) && number > 0) {
            return parseFloat(number);
            break;
        }
    }
}

function exchange(amountFrom, rateFrom){
    const rateTo = 100
    return ((amountFrom * rateFrom) / rateTo).toFixed(2);
}