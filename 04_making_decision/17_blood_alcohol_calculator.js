const rd = require('../util/util-question');

(async () => {
    const weight = await rd.getNumber('Weight(pound): ')
    const gender = await rd.question('Gender(m/f): ')
    const totalAlcohol = await rd.getNumber('Total Alcohol(oz): ')
    const hours = await rd.getNumber('the number of hours after drinking: ');

    const absorbRate = (gender === 'f' ? 0.6 : 0.73);

    const BAC = (((totalAlcohol * 5.14) / weight) * absorbRate - 0.015 * hours).toFixed(2);

    console.log(`Your BAC is ${BAC}`);
    console.log(BAC>=0.08 ? 'It is not legal for you to drive': 'pass')

    rd.close();
})()





