//function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return `![license_badge](https://img.shields.io/badge/MIT-license-blue.svg)`
  }
  return '';
}



//function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return `\n*[license](#license)\n`
  };
  return '';
}



//function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return `## License
    | Licensed under the MIT license.`;
  }
  return '';
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  by ${data.name}

  ${renderLicenseBadge(data.renderLicenseBadge)}

  ## Table of Contents 
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Test](#test)
  - [License](#license)
  - [GitHub](#github) 
  ${renderLicenseLink(data.license)}

  ## Description
  ${(data.description)}

  ## Installation
  ${(data.installation)}

  ## Usage
  ${(data.usage)}

  ## Test
  ${(data.test)}

  ## License
  ${renderLicenseSection(data.license)}

  ## GitHub
* GitHub - [${data.creator}](https://github.com/${data.creator})
`;
}

module.exports = generateMarkdown;


