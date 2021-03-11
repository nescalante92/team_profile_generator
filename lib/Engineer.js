// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require('./Employee');

//Engineer inherits from Employee
class Engineer extends Employee {
    constructor(name, email, id, role, gitHub) {
        super(name,email,id,role)
        this.gitHub = gitHub;
    }
    getGitHub() {
        return this.gitHub;
    }
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;


