// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

List your collaborators, if any, with links to their GitHub profiles.

If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.

If you followed tutorials, include links to those here as well.

## License

${renderLicenseSection(data.license)}

## Badges

${renderLicenseBadge(data.license)}

## Features

If your project has a lot of features, list them here.

## How to Contribute

${data.contributing}

## Tests

${data.tests}

## Questions

My GitHub profile is [https://github.com/${data.username}](https://github.com/${data.username})
You can email me at [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
