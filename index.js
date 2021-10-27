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
        '[MIT]',
        '[ISC]',
        '[GPLv3]'
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
       `![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-blue.svg)
# ${answers.title}\n 
## Project Description
${answers.description}\n

## Table of contents
* [Installation](#installation)
* [Usage](#usage)
* [Guidelines](#guidelines)
* [Instructions](#instructions)
* [Contact and GitHub Info](contact-and-github-info)



## Installation
<a name="i"></a>
${answers.install}\n
<a name="u"></a>
## Usage Information
${answers.usage}\n
<a name="g"></a>
## Guidelines
${answers.guidelines}\n
## Instructions
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
