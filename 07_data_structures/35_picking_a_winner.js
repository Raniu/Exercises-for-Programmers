// Enter a name은 두번이상 반복 안되게 수정하기
const rd = require('../util/util-question');

(async () => {
    let names = []
    while(true) {
        let name  = await rd.question(`Enter a name: `)
        names.push(name);
        let newArray;

        if (!name || name === '' || newArray) {
            let newNameArray  = names.filter(String)
            let winner = Math.floor(Math.random() * newNameArray.length);
            let winnerName = names[winner];

            newArray = newNameArray.filter(function(f) { return f !== winnerName})
            console.log(`The winner is... ${winnerName}`);
            console.log('participants--------------');
            newArray.forEach(name => console.log(name));

            // console.log(newArray.length)
        }
    }
    rd.close();
})();
