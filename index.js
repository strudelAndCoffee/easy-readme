const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// creates finished README.md in dist directory
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err =>{
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: "README created! Check 'dist' folder."
            })
        })
    });
}

// prompts users to answer questions about readme content
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
                    console.log("<text missing>")
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
                    console.log("<text missing>");
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
                    console.log("<text missing>");
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
                    console.log("<text missing>");
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
                    console.log("<text missing>");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "What command should be run to test the application?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("<text missing>");
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
                    console.log("<text missing>");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmContribute",
            message: "Do you want to include contribution guidelines? (Default: Contributer Covenant Code of Conduct)",
            default: true,
        },
        {
            type: "confirm",
            name: "confirmCustom",
            message: "Do you want to provide custom guidelines?",
            default: false,
            when: ({ confirmContribute }) => {
                if (confirmContribute) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "contribute",
            message: "Please provide your contribution guidelines:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("<text missing>");
                    return false;
                }
            },
            when: ({ confirmCustom }) => {
                if (confirmCustom) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmSite",
            message: "Would you like to include a website link for the deployed application?",
            default: false
        },
        {
            type: "input",
            name: "site",
            message: "Please enter the website's URL: https://",
            when: ({ confirmSite }) => {
                if (confirmSite) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    ]);
};

init()
.then(generateMarkdown)
.then(mdFile => {
    return writeToFile("./dist/README.md", mdFile);
})
.then(response => {
    console.log("--------------");
    if (response.ok) {
        console.log(response.message);
    } else {
        console.log(response);
    }
})
.catch(err => {
    console.error(err);
});