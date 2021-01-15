// ->CLASSES<-
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
//->DEPENDENCIES<-
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const jest = require("jest");
//->VARIABLES<-
let Team = [];
//->PATH<-
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
//->RENDER<-
const render = require("./lib/htmlRenderer");
const { allowedNodeEnvironmentFlags } = require("process");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
var managerCounter = 0;

const teamMembers = {
  Manager: [
    {
      type: "input",
      message: "What is the manager's name?",
      name: "managerName",
    },

    {
      type: "input",
      message: "What is the manager's id?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the manager's email?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "What is the manager's office number?",
      name: "officeNumber",
    },
  ],

  Engineer: [
    {
      type: "input",
      message: "What is the engineer's name?",
      name: "engineerName",
    },

    {
      type: "input",
      message: "What is the engineer's id?",
      name: "managerId",
    },
    {
      type: "input",
      message: "What is the engineer's email?",
      name: "engineerEmail",
    },
    {
      type: "input",
      message: "What is the engineer's Github username?",
      name: "Github",
    },
  ],

  Intern: [
    {
      type: "input",
      message: "What is the intern's name?",
      name: "internName",
    },

    {
      type: "input",
      message: "What is the intern's id?",
      name: "internId",
    },
    {
      type: "input",
      message: "What is the intern's email?",
      name: "internEmail",
    },
    {
      type: "input",
      message: "What is the intern's school?",
      name: "Github",
    },
  ],
};

//->RUN APP->
function start() {

    inquirer.prompt(addNew).then((answer) => {
        if (answer.addMember == "Yes") {
            addRole();
        }else {
            fs.writeFileSync(outputPath, render(Team), "utf-8");
            process.exit(0);
        }
    })
