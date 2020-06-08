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

//Creates objects for each team member 
const Jared = new Manager("Jared", 1, "jared@fakemail.com", 1);
console.log(Jared);

const Alec = new Engineer("Alec", 2, "alec@fakemail.com", "ibealec");
console.log(Alec);

const Tammer = new Engineer("Tammer", 3, "tammer@fakemail.com", "tammerg");
console.log(Tammer);

const Christian = new Engineer("Christian", 4, "christian@fakemail.com", "ceckenrode");
console.log(Christian);

const John = new Intern("John", 5, "john@fakemail.com", "2University");
console.log(John);

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

render([Jared, Alec, Tammer, Christian, John]);

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```