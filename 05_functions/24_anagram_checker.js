const rd = require('../util/util-question');

(async () => {
    console.log("enter two strings and i'll tell you if they are anagrams: ");
    const string1 = await rd.question(`Enter the first string: `);
    const string2 = await rd.question(`Enter the second string: `);


    isAnagram(string1, string2)
    console.log(`"${string1}" and "${string2}" are ${isAnagram(string1, string2) ? '' : 'not '}anagrams.`)
    rd.close();
})();

function isAnagram(string1, string2) {

    if(string1.length !== string2.length){
        console.log('Invalid Input');
        return;
    }

    let str1 = string1.split('').sort().join(' ');
    let str2 = string2.split('').sort().join(' ');

    return str1 === str2;
}