// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
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
    ])
function generateMarkdown(data) {

  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage) 
- [Contributing](#contributing)
- [Tests](#tests)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing 

${data.contributing}

## Tests

${data.tests}
`;

}

module.exports = generateMarkdown;





// TODO: Create a function to initialize app
function init() {

  inquirer.prompt(questions)
    .then(responses => {

      const markdown = generateMarkdown(responses);

      fs.writeFile('README.md', markdown, {flag: 'w'}, err => {
        if (err) throw err;
        console.log('README generated!');
      });

    });

}

  
  // Call init to start program
  init();

