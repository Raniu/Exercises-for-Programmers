const rd = require('../util/util-question');

(async () => {
    let nodeTree = decisionTree;
    do{
        let answer = await rd.question(nodeTree.text + '[y/n] ');

        if (answer === 'y') {
            nodeTree = nodeTree.isPositive;
        } else {
            nodeTree = nodeTree.isNegative;
        }

        if (!nodeTree.isPositive && !nodeTree.isNegative) {
            console.log(nodeTree.text);
            break;
        }
    }while(nodeTree)

    rd.close();
})();

function node(text, isPositive, isNegative) {
    return { text, isPositive, isNegative };
}

const decisionTree = node(
    'Is the car silent when you turn the key?',
    node(
        'Are the battery terminals corroded?',
        node('Clean terminals and try starting again.'),
        node('Replace cables and try again.')
    ),
    node(
        'Does the car make a clicking noise?',
        node('Replace the battery.'),
        node(
            'Does the car crank up but fail to start?',
            node('Check spark plug connections.'),
            node(
                'Does the engine start and then die?',
                node(
                    'Does your car have fuel injection?',
                    node('Check to ensure the choke is opening and closing.'),
                    node('Get it in for service.')
                )
            )
        )
    )
);