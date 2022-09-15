const rd = require('../util/util-question');

(async () => {
    const replies = [
        'Yes',
        'No',
        'Maybe',
        'Ask again later'
    ]

    await rd.question(`What's your question? `);
    console.log(replies[Math.floor(Math.random() * 10) % 4])

    rd.close();
})();
