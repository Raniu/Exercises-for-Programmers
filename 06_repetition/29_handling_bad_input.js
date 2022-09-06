const rd = require('../util/util-question');

(async () => {
    while (true) {
        const returnYear = await rd.question('what is the rate of return? ');

        let integerNumber = parseInt(returnYear);
        if(integerNumber === 0){
            console.log(`Enter only numbers. `)
            continue;
        } else if(isNaN(integerNumber)){
            console.log(`Sorry. That's not a valid input.`)
            continue;
        }
        let result = 72 / integerNumber
        console.log(`It will take ${result} years to double your initial investment.`)
        break;

    }

    rd.close();
})();
