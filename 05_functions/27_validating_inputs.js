const rd = require('../util/util-question');

(async () => {
    let firstName = await rd.question('Enter the first name: ')
    let lastName = await rd.question('Enter the last name: ')
    let zipCode = await rd.question('Enter the zip code: ')
    let employeeId = await rd.question('Enter the employee ID: ')

    let result = validateInput(firstName, lastName, employeeId, zipCode)
    let resultMessage = 'There were no errors found.'

    let allResult = ""

    if(result.length > 0){
        allResult = result
    } else {
        allResult = resultMessage
    }

    console.log(allResult)
    rd.close();
})();

function validateInput(firstName, lastName, employeeId, zipCode){
    let answer = ""
    const blank = inputs => inputs === ''
    const minLength = inputs => inputs.length > 2
    const idFormat = inputs => /[a-zA-Z]{2}-\d{4}/.test(inputs);
    const onlyNumber = inputs => /\d+/.test(inputs);

    if(blank(firstName)){
        answer += `The first name must be fill in. \n`
    } else if(!minLength(firstName)){
        answer += `"${firstName}" is not a valid first name. It's too short. \n`
    }

    if(blank(lastName)){
        answer += `The last name must be fill in. \n`
    } else if(!minLength(lastName)){
        answer += `"${lastName}" is not a valid last name. It's too short. \n`
    }

    if (!idFormat(employeeId)) {
        answer +=`"${employeeId}" is not a valid ID. \n`
    }

    if (!onlyNumber(zipCode)) {
        answer += `The ZIP code must be numberic.`
    }

    return answer
}

