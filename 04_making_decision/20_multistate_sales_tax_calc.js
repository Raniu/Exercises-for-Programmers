const rd = require('../util/util-question');

(async () => {
    let amount = await rd.getNumber(`What is the order amount? `);
    let state = await rd.question('What state do you live in? ');
    let country = await rd.question('What country do you live in? ');

    let calcTaxResult = calcTax(amount, state, country)
    let calcTotalResult = calcTotal(amount, calcTaxResult)
    let printResult = printResults(calcTaxResult, calcTotalResult, state)

    console.log(printResult);
    rd.close();
})()

function calcTax(amount, state, country) {
    const stateMap = {
        wisconsin: {
            tax: 0.055,
            country: {
                'eau claire': {
                    tax: 0.005
                },
                'dunn': {
                    tax: 0.004
                }
            }
        },
        illinois: {
            tax: 0.08
        },
        '':{
            tax: 0.0
        }
    };

    const stateName = stateMap[state.toLowerCase()]
    const countryName = stateMap[state.toLowerCase()].country[country.toLowerCase()]

    const stateTax = Math.round( (amount * stateName.tax) * 100)/100
    const countryTax = Math.round( (amount * countryName.tax) * 100)/100

    return {stateTax, countryTax}
}

function calcTotal(amount, calcTaxResult) {
    let stateTax = calcTaxResult.stateTax
    let countryTax = calcTaxResult.countryTax

    const totalTax = Math.round((stateTax + countryTax) * 100) / 100
    const total = Math.round((amount + stateTax + countryTax) * 100) / 100

    return {totalTax, total}
}

function printResults(calcTaxResult, calcTotalResult, state){
    let result = ''
    if(state.toLowerCase() === 'wisconsin' || state.toLowerCase() === 'illinois'){
        result +=
            `"The state tax is $${calcTaxResult.stateTax}."` +
            `\n"The county tax is $${calcTaxResult.countryTax}.` +
            `\n"The total tax is $${calcTotalResult.totalTax}"\n`;
    }
    result += `"The total is $${calcTotalResult.total}`;

    return result;

}