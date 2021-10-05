// TODO: Include packages needed for this application

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input", 
        name:"github",
        message:"what is your github username?",
    },
    {
        type:"input",
        name:"email",
        message:"what is your github email address?",
    },

    {
        type:"input",
        name:"projectTitle",
        message:"what is your project name?",

    },
    {
        type:"input",
        name:"description",
        message:"what is your project about?",
    
},
{
    type:"input",
    name:"installations",
    message:"which dependences are being used for installation?",

},
{
   type:"input",
   name:"usage",
   message:"what was used to build the project?",

},
{
    type:"list",
    name:"license",
    message:"what kind of license does your project have?",
    choices: ["MIT", "APACHE2.0", "ACADEMIC FREE LICENSE V3.0",
"MOZILLA PUBLIC LICENSE 2.0", "NONE"]
},

{
    type:"input",
    name:"credits",
    message:"do you have any contributors?",
    
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        console.log("readMe on the way")
        writeToFile("README.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();

