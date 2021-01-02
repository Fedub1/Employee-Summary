const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const render = require("./htmlRenderer");

const teamRoster = []

function buildTeamRoster(){
            inquirer.prompt([
            {
                type: "list",
                message: "What is your role:",
                name: "staffRole",
                choices: [
                    "Manager",
                    "Engineer",
                    "Intern"
                    
                ]
            }
            
        ])
    
        .then(res => {
    switch (res.staffRole){
        case "Manager":
            managerInfo();
            break;

        case "Engineer":
            engineerInfo();
            break;

        case "Intern":
            internInfo();
            break
                
       
    }
})
    
function managerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter manager name:",
            name: "manager_name"
        },
        {
            type: "input",
            message: "Enter employee id:",
            name: "manager_id"
        },
        {
            type: "input",
            message: "Enter manager email address:",
            name: "manager_email"
        },
        {
            type: "input",
            message: "Enter manager office number:",
            name: "manager_office_no" 
        }
    ])

    .then(res => {

        const manager = new Manager(res.manager_name, res.manager_id, res.manager_email, res.manager_office_no)
teamRoster.push(manager)
buildTeamRoster();
    })

}
function engineerInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "Enter engineer first_name:",
            name: "engineer_name"
        },
        {
            type: "input",
            message: "Enter employee id:",
            name: "engineer_id"
        },
        {
            type: "input",
            message: "Enter engineer email:",
            name: "engineer_email"
        },
        {
            type: "input",
            message: "Enter engineer Github username:",
            name: "gitHub_username"
      }
    ])

    .then(res => {

        const engineer = new Engineer(res.engineer_name, res.engineer_id, res.engineer_email, res.gitHub_username)
teamRoster.push(engineer)
buildTeamRoster();
    })
}

        function internInfo() {
            inquirer.prompt([
                {
                    type: "input",
                    message: "Enter intern first_name:",
                    name: "intern_name"
                },
                {
                    type: "input",
                    message: "Enter employee id:",
                    name: "intern_id"
                },
                {
                    type: "input",
                    message: "Enter intern email:",
                    name: "intern_email"
                },
                {
                    type: "input",
                    message: "Enter intern school:",
                    name: "intern_school"
                    
                }
            ])
            .then(res => {

                const intern = new Intern(res.intern_name, res.intern_id, res.intern_email, res.intern_school)
        teamRoster.push(intern)
        buildTeamRoster();
            })
        }
     }
            module.exports = teamRoster
            buildTeamRoster();
               