// renderLicenseBadge returns a license badge from the shields.io link.
function renderLicenseBadge(license) {
  return `https://img.shields.io/badge/license-${license}-blue.svg`;
}

// Function to generateMarkdown file.
function generateMarkdown(data) {
  return `# ${data.title}
  ![License:](${renderLicenseBadge(data.license)})
  ## Description
  ${data.description}
  ## Table of Contents
  1. [Title](#title)
  2. [Description](#description)
  3. [Installation](#installation)
  4. [Usage](#usage)
  5. [License](#license)
  6. [Contributing](#contributing)
  7. [Tests](#tests)
  8. [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  Notice: this application is covered under ${data.license}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  [Github](https://github.com/${data.github})
  Additional Questions: ${data.email}
`;
}

// Exports the generateMarkdown.js file
module.exports = generateMarkdown;
