const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a short description:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Write your installation instructions:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'State the technologies associated with this project'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please input the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select a license applicable to this project.',
        choices: ['MIT', 'MPL2.0', 'none']
    },
    {
        type: 'input',
        name: 'creator',
        link: `https://github.com/rhiannawilson`,
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        const markdownContent = generateMarkdown({ ...responses });
        writeToFile("README_Template.md", markdownContent);
        console.log("Successfully created a professional README.md file!");
    }).catch(error => {
        console.error("Error occurred during initialization:", error);
    });
}

init(); // Start the application
