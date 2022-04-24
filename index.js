const inquirer = require('inquirer');
const fs = require('fs');

function employeeInfo(employees) {
    inquirer
        .prompt ([
        {
            type: 'text',
            name: 'name',
            message: 'Please type your name'
        },
        {
            type: 'list',
            name: 'position',
            message: 'What is your position?',
            choices: ['Intern', 'Manager', 'Engineer']
        },
        {
            type: 'number',
            name: 'id',
            message: 'Input Employee ID'
        },
        {
            type: 'text',
            name: 'email',
            message: 'Please provide employee email'
        },
        {
            type: 'number',
            name: 'phone',
            message: 'Please provide office phone number'
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to search for an additional employee?'
        }
        ])
        .then((answers) => {
            let allAnswers = employees.concat([answers]);
            console.log(allAnswers);
            if (answers.addEmployee) {
                employeeInfo(allAnswers);
            }
        })
}

employeeInfo([]);

