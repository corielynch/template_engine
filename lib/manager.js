// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");


class Manager extends Employee {
    constructor(name, role, ID, email, office) {
      super(name, role, ID, email);
      this.office = office;
    }
    getRole(){
      return ("Manager");
    }

    getOfficeNumber(){
      return (this.office);
    }
};

  
module.exports = Manager;            