const Employee = require('./Employee');

class Intern extends Employee { 
    constructor(name, position, id, email, school) {
        super(name, position, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    generateHTML() {
        return `<div>Intern:${this.name}</div>`
    }
}

module.exports = Intern;