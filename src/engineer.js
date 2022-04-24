const Employee = require('./Employee');

class Engineer extends Employee { 
    constructor(name, position, id, email, github) {
        super(name, position, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    generateHTML() {
        return `<div>Enginner:${this.name}</div>`
    }
}

module.exports = Engineer;