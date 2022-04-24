class Employee { 
    constructor(name, position, id, email,) {
        this.name = name;
        this.position = position;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name
    }
    getPosition() {
        return this.position
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    generateHTML() {
        return `<div>${this.name}</div>`
    }
}

module.exports = Employee;

