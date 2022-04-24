const Employee = require('./Employee');

class Manager extends Employee { 
    constructor(name, position, id, email, officeNumber) {
        super(name, position, id, email);
        this.officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    generateHTML() {
        return `<div>Manager:${this.name}</div>`
    }
}

module.exports = Manager;