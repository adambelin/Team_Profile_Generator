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
        return `<div class="row">
        <div class="card col-lg-4">
            <div class="card-body">
                <h3 class="card-title">${this.name}</h3>
                    <p class="card-text">
                        <ul>
                            <li>
                                ID: ${this.id}
                            </li>
                            <li>
                                Email: ${this.email}
                            </li>
                            <li>
                                Office Number: ${this.officeNumber}
                            </li>
                        </ul>
                    </p>
            </div>
        </div>
    </div>`
    }
}

module.exports = Manager;