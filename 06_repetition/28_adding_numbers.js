const rd = require('../util/util-question');

(async () => {
    let addTimes = parseInt(await rd.getNumber('How many times do you want to be add? '))

    let result = 0
    for(let i = 0; i < addTimes; i++) {
        let number = await rd.question('Enter the number: ');
        if (!isNaN(number)) {
            result += +number;
        }
    }
    console.log(`The total is ${result}`)


    rd.close();
})();

