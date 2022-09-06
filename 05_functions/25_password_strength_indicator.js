// 수정 필요 -> 문지열을 반환해서는 안된다?!?
const rd = require('../util/util-question');

(async () => {
    const password = await rd.question('Enter password: ');

    console.log(`The password '${password}' is a ${passwordValidator(password)} password.`)
    rd.close();
})();

function passwordValidator(password){
    const pattern1 = /[0-9]/; //숫자
    const pattern2 = /[a-zA-Z]/; //영어
    const pattern3 = /[~!@#\#$%<>^&*]/; //특수문자

    const validation = ['very weak', 'weak', 'strong', 'very strong']

    if((password.length<8) && (pattern1.test(password))){
        return validation[0]
    }
    else if((password.length<8) && (pattern2.test(password))){
        return validation[1]
    }
    else if((password.length>=8) && (pattern2.test(password) && pattern1.test(password)) && !(pattern3.test(password))){
        return validation[2]
    }
    else if((password.length>=8) && ((pattern2.test(password)) && (pattern1.test(password)) && (pattern3.test(password)))){
        return validation[3]
    }
}