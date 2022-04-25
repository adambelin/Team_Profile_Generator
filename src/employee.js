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
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile Generator</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        </head>
        <body>
            <header class="bg-danger text-light text-center pt-3">
                <h1>My Team</h1>
            </header>`
    }
}

module.exports = Employee;

