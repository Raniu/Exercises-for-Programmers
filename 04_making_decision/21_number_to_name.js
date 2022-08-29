const rd = require('../util/util-question');

(async () => {
    let result;
    let inputNumber = await rd.getNumber('Please enter the number of the month: ')

    if(inputNumber && numberToNameDic[inputNumber]){
        result = numberToNameDic[inputNumber]
        console.log(`The name of the month is ${result}`)
    } else {
        console.log('wrong number')
    }
    rd.close();
})()

const numberToNameDic = {
    '1' : 'Jan',
    '2' : 'Feb',
    '3' : 'Mar',
    '4' : 'Apr',
    '5' : 'May',
    '6' : 'Jun',
    '7' : 'Jul',
    '8' : 'Aug',
    '9' : 'Sep',
    '10' : 'Oct',
    '11' : 'Nov',
    '12' : 'Dec'
}
