// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee.js");


class Manager extends Employee {
    constructor(name, ID, email, officeNumber) {
      super(name, ID, email);
      this.officeNumber = officeNumber;
    }
    getRole(){
      return ("Manager");
    }

    getOfficeNumber(){
      return (0);
    }
};

  
module.exports = Manager;            