const licenses = {
  "Apache": {
    "link": "https://opensource.org/licenses/Apache-2.0",
    "badge": "![License: Apache](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)"
  },
  "Boost": {
    "link": "https://www.boost.org/LICENSE_1_0.txt",
    "badge": "![License: Boost](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)"
  },
  "BSD 3": {
    "link": "https://opensource.org/licenses/BSD-3-Clause",
    "badge": "![License: BSD 3](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)"
  },
  "EPL": {
    "link": "https://opensource.org/licenses/EPL-1.0",
    "badge": "![License: EPL](https://img.shields.io/badge/License-EPL_1.0-red.svg)"
  },
  "GPL v3": {
    "link": "https://www.gnu.org/licenses/gpl-3.0",
    "badge": "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)"
  },
  "AGPL v3": {
    "link": "https://www.gnu.org/licenses/agpl-3.0",
    "badge": "![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)"
  },
  "LGPL v3": {
    "link": "https://www.gnu.org/licenses/lgpl-3.0",
    "badge": "![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)"
  },
  "FDL 1.3": {
    "link": "https://www.gnu.org/licenses/fdl-1.3",
    "badge": "![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)"
  },
  "Hippocratic 2.1": {
    "link": "https://firstdonoharm.dev",
    "badge": "![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)"
  },
  "Hippocratic 3.0": {
    "link": "https://firstdonoharm.dev",
    "badge": "![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)"
  },
  "IPL 1.0": {
    "link": "https://opensource.org/licenses/IPL-1.0",
    "badge": "![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)"
  },
  "ICL": {
    "link": "https://opensource.org/licenses/ISC",
    "badge": "![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)"
  },
  "MIT": {
    "link": "https://opensource.org/licenses/MIT",
    "badge": "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
  },
  "MPL 2.0": {
    "link": "https://opensource.org/licenses/MPL-2.0",
    "badge": "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)"
  },
  "Open Data Commons Attribution": {
    "link": "https://opendatacommons.org/licenses/by/",
    "badge": "![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)"
  },
  "ODbL": {
    "link": "https://opendatacommons.org/licenses/odbl/",
    "badge": "![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)"
  },
  "Artistic-2.0": {
    "link": "https://opensource.org/licenses/Artistic-2.0",
    "badge": "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)"
  },
  "Open Font-1.1": {
    "link": "https://opensource.org/licenses/OFL-1.1",
    "badge": "![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)"
  },
  "Unlicense": {
    "link": "http://unlicense.org/",
    "badge": "![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)"
  },
  "WTFPL": {
    "link": "http://www.wtfpl.net/about/",
    "badge": "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)"
  },
  "Zlib": {
    "link": "https://opensource.org/licenses/Zlib",
    "badge": "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)"
  },
  "": {
    "link": "",
    "badge": ""
  }
}

function renderLicenseBadge(license) {
  return licenses[license].badge;
}

function renderLicenseLink(license) {
  return licenses[license].link;
}

function renderLicenseSection(license) {
  const licenseLink = renderLicenseLink(license);
  return `This is the [${license}](${licenseLink}) license`;
}

function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Badges](#badges)
- [How to Contribute](#how-to-contribute)
- [Tests](#test)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Badges

${renderLicenseBadge(data.license)}

## How to Contribute

${data.contributing}

## Tests

${data.tests}

## Questions

My GitHub profile is [github.com/${data.username}](https://github.com/${data.username})   
You can email me at [${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
