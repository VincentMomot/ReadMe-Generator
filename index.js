// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Please provide a brief description of your project:",
        name: "description"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "install"
    },
    {
        type: "input",
        message: "What is the usage information of your project?",
        name: "usage"
    },
    {
        type: "input",
        message: "What are the guidelines of your project",
        name: "guidelines"
    },
    {
        type: "input",
        message: "What are the test instructions?",
        name: "instructions"
    },
    {
        type: "rawlist",
        message: "What license do you need?",
        name: "license",
        choices: [
        'MIT',
        'ISC',
        'GPL'
      ]
    },
    {
        type: "input",
        message: "What is your github username?",
        name: "github"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }


])
    .then(answers => {
        fs.writeFile('README.md',
       `
# ${answers.title}\n 
## Project Description
${answers.description}\n

## Table of contents
1. [Installation Instructions](#i)
2. [Project Usage](#u)
3. [Project Guidelines](#g)
4. [Test Instructions](#t)
5. [Contact and GitHub Info](#c)



## Installation Instructions
<a name="i"></a>
${answers.install}\n
<a name="u"></a>
## Usage Information
${answers.usage}\n
<a name="g"></a>
## Guidelines
${answers.guidelines}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
## Test Instructions
${answers.instructions}\n
<a name="c"></a>
## Contact and GitHub Info \n
Github Username: ${answers.github} \n 
email: ${answers.email}`
 ,

            (err) => err ? console.error(err) : console.log("New ReadMe Created"))
    })

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
