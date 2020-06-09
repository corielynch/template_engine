const Employee = require("./lib/Employee.js")
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");


const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

inquirer.prompt([
    {
      type: "input",
      message: "What is the employee's name?",
      name: "name"
    },
    {
        type: "input",
        message: "What is the employee's role?",
        name: "role"
    },
    {
      type: "input",
      message: "What is the employee's ID number",
      name: "ID"
    },
    {
        type: "input",
        message: "What is the employee's email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the employee's office number?",
        name: "office"
    },
    {
        type: "input",
        message: "What is the employee's github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is the employee's school?",
        name: "school"
    },
]).then(function(data) {
    
//Creates objects for each team member 
// const Jared = new Manager("Jared", 1, "jared@fakemail.com", 1);
// console.log(Jared);

// const Alec = new Engineer("Alec", 2, "alec@fakemail.com", "ibealec");
// console.log(Alec);

// const Tammer = new Engineer("Tammer", 3, "tammer@fakemail.com", "tammerg");
// console.log(Tammer);

// const Christian = new Engineer("Christian", 4, "christian@fakemail.com", "ceckenrode");
// console.log(Christian);

// const John = new Intern("John", 5, "john@fakemail.com", "2University");
// console.log(John);
var employee;
if (data.role === "Manager"){
    employee = new Manager(data.name, data.role, data.ID, data.email, data.office);
}

else if(data.role === "Intern"){
    employee = new Intern(data.name, data.role, data.ID, data.email, data.school);
}

else if(data.role === "Engineer"){
    employee = new Engineer(data.name, data.role, data.ID, data.email, data.github);
}

else {
    employee = new Employee(data.name, data.role, data.ID, data.email, data.github);
}


const html = render([employee]);
fs.writeFile(outputPath, html, function(err) {
    
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  
  });
});
