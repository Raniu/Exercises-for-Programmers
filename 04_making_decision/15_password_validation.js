// password 입력시 안보이게 - backspace?
const rd = require('../util/util-question');
const bcrypt = require('bcrypt');
const  readlineSync = require('readline-sync');

(async () => {
    const inputUserName = await rd.question('what is the user name: ');
    const inputPassword = await readlineSync.question('what is the password: ', {
        hideEchoBack: true // The typed text on screen is hidden by `*` (default).
    });
    validateUser(inputUserName,inputPassword)
    rd.close();
})();

const storedUser = (() => {
    const userName = 'username';
    const password = 'password';
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);

    return {userName: userName, password: { hash }};
})();

function validateUser(userName, inputPassword) {
    let passwordCompare = bcrypt.compareSync(inputPassword, storedUser.password.hash)
    if(storedUser.userName === userName && passwordCompare){
        console.log('Welcome')
    } else if(storedUser.userName !== userName && passwordCompare){
        console.log('That username is incorrect.');
    } else {
        console.log('That password is incorrect.');
    }
}