// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "No License") {
    return "";
  }

  return `![Github License](https://img.shields.io/badge/license-${license}-blue)`;
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string  
function renderLicenseLink(license) {

  if(license === "No License") {
    return ""; 
  }

  if(license === "Apache_2.0") {
    return `- [License](#license)`;
  }

  if(license === "GNU_GPLv3") {
    return `- [License](#license)`; 
  }

  // Add cases for other licenses

}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "No License") {
    return "";
  }

  return `## License

  This project is licensed under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage) 
- [Contributing](#contributing)
- [Tests](#tests)
- [Email](#email)
- [GitHub](#github)
${renderLicenseLink(data.license)}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing 

${data.contributing}

## Tests

${data.tests}

## Email

${data.email}

## GitHub

${data.github}

${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
