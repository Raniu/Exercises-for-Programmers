const rd = require('../util/util-question');

(async () => {
    const orderAmount = await rd.getNumber(`what is the order amount? `);
    const state = await rd.question('What is the state? ');

    let result ='';
    let subtotal = orderAmount.toFixed(2)
    const tax = getTax(subtotal, state);

    if(state.toUpperCase() === 'WI'){
        result += `The subtotal is ${subtotal} \n The tax is $${tax} \n`
    }
    result += `The total is ${(orderAmount + tax).toFixed(2)}`
    console.log(result)

    rd.close();
})()

function getTax(subtotal, state) {
    let taxWI = 0.55;

    switch(state.toUpperCase()) {
        case 'WI':
            taxWI = 0.55
            break;
    }
    return taxWI
}




