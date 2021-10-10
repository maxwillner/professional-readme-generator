const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');


// const pageHMTL = generatePage(name, github); 


// fs.writeFile('index.html', pageHTML, err => {
//     if (err) throw err;
  
//     console.log('ReadMe complete! Check out ReadMe.html to see the output!');
// });

const promptUser = readmeInputs => {
    if (!readmeInputs) {
        readmeInputs = [];
    }

    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your project title? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                console.log("Please enter a project title!");
                return false;
            }
        }
        },
        {
            type: "input",
            name: "description",
            message: "Please add a description of your project! (Required)",
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                console.log("Please enter a project description!");
                return false;
            }
        }
        },
        {
            type: "input",
            name: "installation_instructions",
            message: "What are the steps required to install your project? (Required)",
            validate: installation_instructionsInput => {
                if (installation_instructionsInput) {
                    return true;
                } else {
                console.log("Please describe how a user can install this project onto their local device!");
                return false;
            }
        }
        },
        {
            type: "input",
            name: "usage",
            message: "Provide instructions and examples for app use! (Required)",
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                console.log("Please describe how a user can make use of this application!");
                return false;
            }
        }
        },
        {
            type: "input",
            name: "contributors",
            message: "Please list your collaborators, if any, with links to their GitHub profiles"
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license(s) would you like to include with this project?",
            choices: ["Apache License 2.0", "GNU GPLv3", "MIT", "ISC"]
        },
        {
            type: "input",
            name: "Testing",
            message: "How can users test the application?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                console.log("Please enter your GitHub username!");
                return false;
            }
        }
        },
        {
            type: "input",
            name: "email",
            message: "What your email address?"
        }
    ]);
};

promptUser()
    .then(readmeInputs => console.log(readmeInputs));
