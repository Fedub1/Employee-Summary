const inquirer = require("inquirer");
const fs =  require("fs");

const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

async function start(){
    console.log("Let's make your Team!");

    let teamHTML = "";

    let teamSize;
    
    await inquirer.prompt(
        {
            type: "number",
            message: "How many people are in your team?",
            name: "noOfTeamMem"
        }
    )
.then((data) => {
    teamSize = data.noOfTeamMem + 1;
});

if(teamSize ===0){
    console.log("I guess there is no one on your team...");
    return;
}
for(i = 1; i < teamSize; i++){

    let name;
    let id;
    let title;
    let email;

    await inquirer.prompt([
        {
            type: "input",
            message: `What is employee (${i})'s name?`,
            name: "name"
        },
        {
            type: "input",
            message: `What is employee (${i})'s id?`,
            name: "id"
        },
        {
            type: "input",
            message: `What is employee (${i})'s email?`,
            name: "email"
        },
        {
            type: "input",
            message: `What is employee (${i})'s title?`,
            name: "title",
            options: ["Engineer", "Intern", "Manager"]
        }
    ])

    .then((data) => {

name = data.name;
id = data.id;
title = data.title;
email = data.email;

    });

    switch (title){
        case "Manager":

        await inquirer.prompt ([
            {
                type: "input",
                message: "What is your Manager's Office Number?",
                name: "officeNo"
            }
        ])
.then((data) => {

    const manager = new Manager(name, id, email, data.officeNo);
    teamMember = fs.readFileSync("templates/manager.html");

    teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
});
break;

case "Intern":
    await inquirer.prompt([

           {
                type: "input",
                message: "What is school is your Intern attending?",
                name: "school"
            }
        ])
        .then((data) => {

            const intern = new Intern(name, id, email, data.school);
            teamMember = fs.readFileSync("templates/intern.html");
        
            teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
        });
        break;

        case "Engineer":
    await inquirer.prompt([

           {
                type: "input",
                message: "What is your Engineer's GitHub?",
                name: "github"
            }
        ])
        .then((data) => {

            const engineer = new Engineer(name, id, email, data.github);
            teamMember = fs.readFileSync("templates/engineer.html");
        
            teamHTML = teamHTML + "\n" + eval('`'+ teamMember +'`');
        });
        break;
    }
}
const mainHTML = fs.readFileSync ("templates/main.html");
teamHTML = eval('`'+ mainHTML + '`');
fs.writeFile("output/team.html", teamHTML, function(err){

    if(err) {
        return console.log(err);

    }
console.log("Success!");

});
}
start();
   