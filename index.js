// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
        }
    ]);
};

// Function call to initialize app
init().then(data => {
    console.log(data);
});