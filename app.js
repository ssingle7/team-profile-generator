// ->CLASSES<-
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//->DEPENDENCIES<-
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//->VARIABLES<-
const employees = [];
//->PATH<-
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//->RENDER<-
const render = require("./lib/htmlRenderer");
// const { listenerCount } = require("process");
// const { allowedNodeEnvironmentFlags } = require("process");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
// var managerCounter = 0;

function createManager() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber",
      },
    ])
    .then((response) => {
      const manager = new Manager(
        response.name,
        response.id,
        response.email,
        response.officeNumber
      );

      employees.push(manager);

      anotherEmployee();
    });

    
}

function anotherEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Do you want to continue adding to the team?",
        name: "name",
        choices: ["Engineer", "Intern", "Complete"],
      },
    ])
    .then((response) => {
      if (response.name === "Engineer") {
        createEngineer();
      } else if (response.name === "Intern") {
        createIntern();
      } else {
        completedTeam();
      }
    });
}
function createEngineer() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the engineer's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the engineer's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the engineer's GitHub?",
        name: "github",
      },
    ])
    .then((response) => {
      const engineer = new Engineer(
        response.name,
        response.id,
        response.email,
        response.github
      );

      employees.push(engineer);

      anotherEmployee();
    });
}

function createIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the intern's id?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the intern's email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the intern's school?",
        name: "school",
      },
    ])
    .then((response) => {
      const intern = new Intern(
        response.name,
        response.id,
        response.email,
        response.school
      );

      employees.push(intern);

      anotherEmployee();
    });
}

function completedTeam() {
  console.log("Your team is complete!");
  fs.writeFileSync(outputPath, render(employees), "utf8");
}

// FUNCTION CALLS
createManager();
