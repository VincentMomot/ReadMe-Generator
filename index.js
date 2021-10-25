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
    // {
    //     type: "rawlist",
    //     message: "What license do you need?",
    //     name: "license"
    // },
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
        fs.writeFile('README.md', `# ${answers.title} \n ### Project Description \n ${answers.description}`, (err) => err ? console.error(err) : console.log("New ReadMe Created"))
    })

// TODO: Create a function to write README file


// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
