const rd = require('../util/util-question');

(async () => {
    let choice = await question();
    let choiceAnswer = await choiceQuestion(choice)
    console.log(`${choiceAnswer}.`)
    rd.close();
})()

function FahrenheitToCelsius(Fahrenheit) {
    return 'The temperature in Celsius is ' + ((Fahrenheit - 32) * 5) / 9
}

function CelsiusToFahrenheit(Celsius) {
    return 'The temperature in Fahrenheit is ' + ((Celsius * 9) / 5) + 32
}

async function question() {
    const quest = [
        'Press C to convert from Fahrenheit to Celsius.',
        'Press F to convert from Celsius to Fahrenheit.',
        'Your choice: '
    ]
    return await rd.question(quest.join('\n'))
}

async function choiceQuestion(choice) {
    let finalChoice = choice.toUpperCase()
    let answer = ""
    let input = ""
    switch (finalChoice) {
        case 'C':
            input = await rd.getNumber(`Please enter the temperature in Celsius: `)
            answer =  FahrenheitToCelsius(input)
            break;
        case 'F':
            input = await rd.getNumber(`Please enter the temperature in Fahrenheit: `)
            answer = CelsiusToFahrenheit(input)
            break;
    }
    return answer
}







