// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'none')
  {
    return ''
  }
  else {
    return `![Badge](https://img.shields.io/badge/License-${license}-green)`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'none')
  {
    return ''
  }
  return '- [License](#license)'
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'none')
  {
    return ''
  }
  return `## License
  ${license}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projecttitle}
${renderLicenseBadge(data.license)}
## Description
  ${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  ${data.installation}

## Usage
  ${data.usage}

${renderLicenseSection(data.license)}

## Contributing
  ${data.contribution}

## Tests
  ${data.testing}

## Questions
  Find me on GitHub at: ${data.github}
  Feel free to reach out with any additional questions at: ${data.email}

`;
}

module.exports = generateMarkdown;
