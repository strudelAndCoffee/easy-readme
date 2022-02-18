const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err =>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "README created!"
            })
        })
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub username.")
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter your email.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "What is your project's name?",
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log("Please enter a name for your project.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please write a short description of your project:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please provide a description for your project.");
                    return false;
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "What kind of license should your project have?",
            choices: ["MIT", "ISC", "GNU GPLv3", "Apache License 2.0", "Mozilla Public License 2.0", "<no license>"]
        },
        {
            type: "input",
            name: "install",
            message: "What command should be run to install dependencies?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please provide a command for installation.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to run tests?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please provide a command for running tests.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "info",
            message: "What does the user need to know about using the repo?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please provide instructions for using repo.");
                    return false;
                }
            }
        }
    ]);
};

// Function call to initialize app
init()
.then(generateMarkdown)
.then(mdFile => {
    writeToFile("./dist/README.md", mdFile);
});