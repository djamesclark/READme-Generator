// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Project Title:',
        name: 'projecttitle',
    },
    {
        type: 'input',
        message: 'Description of project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Installation Instructions:',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Usage Information: ',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Contribution Guidelines: ',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Test Instructions: ',
        name: 'testing',
    },
    {
        type: 'list',
        message: 'What license would you like to use?',
        name: 'license',
        choices: ['MIT', 'GNU', 'BSD', 'CCZ', 'none']
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
            
    err ? console.error(err) : console.log('README Created!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=> {
writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init();
