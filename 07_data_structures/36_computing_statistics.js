const rd = require('../util/util-question');

(async () => {
    let numberList = []
    let inputNumber
    let avg;
    let min;
    let max;

    while(true) {
        inputNumber = await rd.question(`Enter a number: `)
        // 입력 받은 값이 숫자이면 배열에 push
        if(!isNaN(inputNumber)) {
            numberList.push(parseFloat(inputNumber))
        } else if(inputNumber === 'done') break;
    }


    const sum = numberList.reduce((a,b) => (a + b)); // 합계 구하기
    avg = sum / numberList.length // 평균값 구하기

    min = Math.min.apply(Math, numberList) //최댓값 구하기
    max = Math.max.apply(Math, numberList) //최솟값 구하기

    // 표준편차 : 평균의 차 -> 제곱 -> 제곱한 것들 더하기 -> 평균내기 -> 루트
    let standardDeviation = Math.sqrt(numberList.map((x) => (x - avg)).map((x) => x*x).reduce((x,y) => x + y)/(numberList.length))

    console.log(`Numbers: ${numberList}`)
    console.log(`the average is ${avg}.`);
    console.log(`the minimum is ${min}.`);
    console.log(`the maximum is ${max}`);
    console.log(`the standard deviation is ${standardDeviation.toFixed(2)}`);


    rd.close()
})()

