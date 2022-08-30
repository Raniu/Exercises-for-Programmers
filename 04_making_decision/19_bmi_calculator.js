const rd = require('../util/util-question');

(async () => {
    let weight = await rd.getNumber('What is your weight(pound)? ')
    let height = await rd.getNumber('What is your height(inch)? ')

    let bmi = Math.round(((weight/(height * height))*703) * 10) / 10

    console.log(`Your BMI is ${bmi}.`)
    if(bmi < 18.5){
        console.log(`You are underweight. You should see your doctor`);
    } else if (bmi >= 18.5 && bmi <= 25){
        console.log(`You are within the ideal weight range.`)
    } else if(bmi > 25){
        console.log(`You are overweight. You should see your doctor`);
    }
    rd.close();
})()





