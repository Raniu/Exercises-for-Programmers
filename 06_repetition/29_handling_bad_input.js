const rd = require('../util/util-question');

(async () => {
    const num = await ru.question('what is the rate of return? ');
    if(isNaN(num))
    rd.close();
})();



