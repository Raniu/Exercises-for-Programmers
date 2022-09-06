const rd = require('../util/util-question');

(async () => {
    console.log(`Let's play Guess the number. ` )
    const level = parseInt(await rd.getNumber(`Pick a difficulty level (1,2, or 3): `))

    if (level < 1 || level > 3) {
        console.log(`"${level}" is wrong level`);
    }


    if(level === 1) {
        let randomNumber = parseInt(Math.random() * 10 + 1);// 1~10 random Number
        let tryingcount = 0// 시도한 횟수
        let wrongCount = 0; //잘못 시도한 횟수
        let guessInput = await rd.question(`I have my number. What's your guess? `);
        tryingcount++;

        while(true) {
            if(guessInput == " " || /[a-zA-Z]/.test(guessInput)) {
                console.log(`숫자를 입력하세요`)
                wrongCount++;

            }
            else if(guessInput == randomNumber){
                console.log(`Success`)
                break;
            }
            else {
                if(randomNumber > guessInput || randomNumber < guessInput){
                    guessInput = await rd.question(
                        `${randomNumber > guessInput ? 'Too row' : 'Too high '}. Guess again: 
                    `)
                    tryingcount++;
                    continue;
                }
            }
        }
        if(tryingcount == 1){
            console.log(`You're a mind reader!`)
        } else if(tryingcount >=2 && tryingcount <=4){
            console.log(`Most impressive.`)
        } else if(tryingcount >=5 && tryingcount <=6){
            console.log(`You can do better than that.`)
        } else {
            console.log(`Better luck next time.`)
        }
    }


    rd.close();
})();
