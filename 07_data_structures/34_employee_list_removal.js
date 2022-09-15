const rd = require('../util/util-question');
const fs = require('fs');

function getEmployeeListFromFile() {
    const employContent = fs.readFileSync(__dirname + '/employee-list','utf-8');
    return employContent.split('\n').filter(value => value && value.trim() !== '');
}

function writeEmployeeListToFile(employees) {
    fs.writeFileSync(__dirname + '/employee-list', employees.join("\n"));
}

(async () => {
    const employee = getEmployeeListFromFile()

    console.log(`There are ${ employee.length } employees: `)
    employee.forEach(employee => console.log(employee))

    const employeeToRemove  = await rd.question(`Enter an employee name to remove: `)

    employee.splice(employeeToRemove.toUpperCase(), 1)
    writeEmployeeListToFile(employee);
    const result = getEmployeeListFromFile()

    console.log(`There are ${ result.length } employees: `)
    result.forEach(result => console.log(result))

    rd.close();
})();
