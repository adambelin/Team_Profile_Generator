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
                                School: ${this.school}
                            </li>
                        </ul>
                    </p>
            </div>
        </div>
    </div>`
    }
}

module.exports = Intern;