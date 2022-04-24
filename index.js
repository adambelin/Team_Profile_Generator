const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./src/Manager');
const Engineer = require('./src/Engineer');
const Intern = require('./src/Intern');
const Employee = require('./src/Employee');

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
            type: 'text',
            name: 'contact',
            message: 'Please provide contact information'
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
            else {
                generateHTML(createEmployees(allAnswers));
            }
        })
}

function createEmployees(allAnswers) {
    let employees = [];
    allAnswers.forEach(answer => {
        if (answer.position == 'Manager') {
            employees.push(new Manager(answer.name, answer.position, answer.id, answer.contact));
        }
        else if (answer.position == 'Engineer') {
            employees.push(new Engineer(answer.name, answer.position, answer.id, answer.contact));
        }
        else {
            employees.push(new Intern(answer.name, answer.position, answer.id, answer.contact))
        } 
    })
    return employees
}

function generateHTML(employees) {
    let html = ''
    employees.forEach(employee => {
        html += employee.generateHTML();
    });
    console.log(html)
    html= '<header>My Team</header>' + '<main>' +html+ '</main>';
    fs.writeFile('./index.html', html, err => {
        if (err) {
            console.log(err);
        }
    })
}

employeeInfo([]);



