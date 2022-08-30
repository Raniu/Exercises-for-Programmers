// 다국어 수정
const rd = require('../util/util-question');

(async () => {
    let result;
    let inputNumber = await rd.getNumber('Please enter the number of the month: ')

    if(inputNumber && numberToNameMap.keys()){
        result = numberToNameMap.get(inputNumber)
        console.log(`The name of the month is ${result}`)
    }else {
        console.log('wrong number')
    }
    rd.close();
})()

//Switch-case문 제거
const numberToNameMap = new Map([
    [1, 'January'],
    [2, 'February'],
    [3, 'March'],
    [4, 'April'],
    [5, 'May'],
    [6, 'June'],
    [7, 'July'],
    [8, 'August'],
    [9, 'September'],
    [10, 'October'],
    [11, 'November'],
    [12, 'December'],
])
