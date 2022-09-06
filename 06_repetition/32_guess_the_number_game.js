// 사용자가 입력한 숫자를 모두 기록하기 - 수정필요
const rd = require('../util/util-question');

(async () => {
    while (true) {
        console.log(`Let's play Guess the number. ` )

        let level;
        while (true) {
            level = parseInt(await rd.getNumber(`Pick a difficulty level (1,2, or 3): `))
            if (level < 1 || level > 3) {
                console.log(`"${level}" is wrong level`);
            } else{
                break;
            }
        }
        let randomNumber = parseInt(Math.random()*Math.pow(10, level));// 1~10의 level승까지의 random Number
        let tryingCount = 0// 시도한 횟수
        let wrongCount = 0; //잘못 시도한 횟수

        let guessInput;
        while (true) {
            guessInput = await rd.question(`I have my number. What's your guess? `);
            tryingCount++;
            while(true){
                if(guessInput == " " || /[a-zA-Z]/.test(guessInput)) {
                    wrongCount++;
                    console.log(`"${guessInput}" is not a number, Wrong count: ${wrongCount}`)
                    break;
                }
                else if(randomNumber > guessInput || randomNumber < guessInput){
                    guessInput = await rd.question(`${randomNumber > guessInput ? 'Too row' : 'Too high '}. Guess again: `)
                    tryingCount++;
                }
                else if(guessInput == randomNumber){
                    console.log(`Success! You got it ${tryingCount} guesses! `)
                    printSuccess(tryingCount);
                    break;
                }
            }
            if(guessInput != " " && (guessInput == randomNumber)) break;
        }

        if (!(await askToRetry())) {
            console.log('good bye.');
            break;
        }

    }

    rd.close();
})();

function printSuccess(tryingCount) {
    if(tryingCount == 1){
        console.log(`You're a mind reader!`)
    } else if(tryingCount >=2 && tryingCount <=4){
        console.log(`Most impressive.`)
    } else if(tryingCount >=5 && tryingCount <=6){
        console.log(`You can do better than that.`)
    } else {
        console.log(`Better luck next time.`)
    }
}

async function askToRetry() {
    const tryAgain = await rd.question('play again? ');
    return tryAgain && tryAgain.toLowerCase() === 'y';
}