// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    // 'title?', 'description', 'installation instructions', 'usage information', 'contribution guidelines', 'test instructions', license username email
    {
        type: 'input',
        message: 'Title of project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your password?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage information',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution guidelines',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test instructions',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'Installation instructions',
        name: 'license',
        choices: ['Apache', 'MIT'],
    },
    {
        type: 'input',
        message: 'Enter your github username',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Enter your email',
        name: 'email',
    },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
