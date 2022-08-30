const rd = require('../util/util-question');

(async () => {
    let num
    let numBox = []
    let max = 0
    let index = 1

    do {
        num = await rd.question(`number the ${index} number: `)
        numBox.push(num)
        index++;
    }while(!(num === '') && (num > 0) && (!isNaN(num)))

    for(let i = 0; i < numBox.length; i++) {
        if(max < numBox[i]) {
            max = numBox[i]
        }
    }

    console.log(`The largest number is ${max}.`)
    rd.close();
})()
