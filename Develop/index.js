// TODO: Include packages needed for this application
//sets consts to require packages and files
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
//these are the questions that will be prompted in the terminal to collect user input
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
        type: "list",
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
//this is this function that writes the file 
//the user data and markdown template files are passed into this to create readme
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) { 
        if (err) {
            console.error(err);
            return ;
        }
    else console.log("success");
});
};

// TODO: Create a function to initialize app
//this function triggers the question prompt and writes the users answers to the readme file
function init() {
    questions()
    .then((data) => writeToFile("README.md", generateMarkdown.generateMarkdown(data)))
}

// Function call to initialize app
init();
