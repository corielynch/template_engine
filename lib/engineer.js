// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee.js");

class Engineer extends Employee {
  constructor(name, role, ID, email, github) {
    super(name, role, ID, email);
    this.github = github;
  }
  getRole(){
    return ("Engineer");
  }

  getGithub(){
    return (this.github);
  }
}


module.exports = Engineer;
