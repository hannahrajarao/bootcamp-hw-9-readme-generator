const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        message: 'Title of project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Project description',
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
        name: 'contributing',
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
        choices: [
            'Apache',
            'Boost',
            'BSD 3',
            'EPL',
            'GPL v3',
            'AGPL v3',
            'LGPL v3',
            'FDL 1.3',
            'Hippocratic 2.1',
            'Hippocratic 3.0',
            'IPL 1.0',
            'ICL',
            'MIT',
            'MPL 2.0',
            'Open Data Commons Attribution',
            'ODbL',
            'Artistic-2.0',
            'Open Font-1.1',
            'Unlicense',
            'WTFPL',
            'Zlib',
            ''
          ],
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

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        err ? console.error(err) : console.log('Success!')
    })
}

function init() {
    inquirer.prompt(questions)
    .then(response => {
        writeToFile('README.md', response);
    });
}

init();
