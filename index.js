// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is a description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'How does a user install your project?',
      name: 'installation',
    },
    {
        type: 'input',
        message: 'What is this project used for?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What are some contribution guidelines?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What are some test instructions?',
        name: 'tests',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
    type: 'input',
    message: 'What is you GitHub account name?',
    name: 'github',
    },
    {
      type: 'list',
      message: 'Choose license type',
      name: 'license',
      choices: [
        'Apache_2.0',
        'GNU_GPLv3',
        'No License',
      ]
  },
    ];

// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions)
    .then(responses => {

      const markdown = generateMarkdown(responses);

      fs.writeFile('generatedREADME.md', markdown, {flag: 'w'}, err => {
        if (err) throw err;
        console.log('README generated!');
      });

    });

}

  
  // Call init to start program
  init();

