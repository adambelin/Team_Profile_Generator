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
                                Github: <a href="https://github.com/${this.github}">${this.github}</a>
                            </li>
                        </ul>
                    </p>
            </div>
        </div>
    </div>`
    }
}

module.exports = Engineer;

