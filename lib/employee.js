// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, role, ID, email) {
        this.name = name;
        this.role = role;
        this.ID = ID;
        this.email = email;
    }
    getRole(){
        return (this.role);
    }
    getName(){
        return (this.name);
    }
    getId(){
        return(this.ID);
    }
    getEmail(){
        return(this.email);
    }
}


module.exports = Employee;
