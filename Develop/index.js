// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = () => {
     return inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "projectTitle"
    },
    {
        type: "input",
        message: "Provide a brief description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "What steps need to be taken for installing your project?",
        name: "installation"
    },
    {
        type: "input",
        message: "Provide instructions/ examples on how to use the project.",
        name: "usage"
    },
    {
        type: "input",
        message: "Which license is used for your project?",
        name: "license",
        choices:
        [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised' License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense",
            "none"
        ]
    },
    {
        type: "input",
        message: "Provide guidelines for contributing to this project.",
        name: "contribute"
    },
    {
        type: "input",
        message: "Provide info about tests for this project and how to run them.",
        name: "tests"
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    }
]
)};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    questions();
}

// Function call to initialize app
init();
