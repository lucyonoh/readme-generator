// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if(license !=="NONE") {
        return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !=="NONE") {
        return `\n* [License](#license)\n`;
    }
    return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !=="NONE") {
        return `## License
       This project is licensed under the ${license} license.`;
    }
    return "";

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}
${renderLicenseBadge(data.license)}

## Description
${data.description}



## Table of contents
*[Installation](#installations)
*[Usasge](#usage)
${renderLicenseLink(data.license)}

*[Credits](#credits)

## Installation
Here are the installations being used

\`\`\`
${data.installations}
\`\`\`


## Usage
${data.usage}


${renderLicenseSection(data.license)}

## Credits
${data.credits}

## Contact me

if you have any questions please reach out, here is my github name ${data.github} and to message me here is my email ${data.email}


`;
}

module.exports = generateMarkdown;
