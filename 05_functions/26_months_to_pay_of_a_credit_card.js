// 수정 필요 -> 문지열을 반환해서는 안된다?!?
const rd = require('../util/util-question');

(async () => {
    const balance = await rd.getNumber('What is your balance? ');
    const apr = await rd.getNumber(
        'what is the APR on the card (as a percent)? '
    );
    const monthlyPayment = await rd.getNumber(
        'what is the monthly payment you can make? '
    );

    const months = calculateMonthsUntilPaidOff(balance, apr, monthlyPayment);

    console.log(`it will take you ${months} months to pay off this card.`);

    rd.close();
})();

function calculateMonthsUntilPaidOff(balance, apr, monthlyPayment){
    const monthlyAPR = apr / 100 / 12;
    const result =
        (-1 * Math.log(1 - (monthlyAPR * balance) / monthlyPayment)) /
        Math.log(1 + monthlyAPR);

    return Math.ceil(result);
}
