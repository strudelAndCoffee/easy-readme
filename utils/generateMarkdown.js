// returns a license badge
function renderLicenseBadge(license) {

  if (license == "<no license>") {
    return "";
  } else {
    return `[https://img.shields.io/badge/License-${license}-green]`;
  }
};

// returns the url for license link
function renderLicenseLink(license) {

  let url = "";

  if (license == "<no license>") {
    return "";
  } else if (license == "GNU GPLv3") {
    url = "https://choosealicense.com/licenses/gpl-3.0/";
  } else if (license == "Apache License 2.0") {
    url = "https://choosealicense.com/licenses/apache-2.0/";
  } else if (license == "Mozilla Public License 2.0") {
    url = "https://choosealicense.com/licenses/mpl-2.0/";
  } else {
    url = `https://choosealicense.com/licenses/${license.toLowerCase()}`;
  }

  return url;
}

// returns license section of readme, unless no license is selected
function renderLicenseSection(license) {

  if (license == "<no license>") {
    return "";
  }

  let link = renderLicenseLink(license);

  return `
  ## License

   Licensed under [${license}](${link})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  console.log(data);

  // function calls for license generation
  let getLicenseTab = () => {
    if (data.license == "<no license>") {
      return "";
    } else {
      return "* [License](#license)"
    }
  }
  let licenseTab = getLicenseTab();
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);

  // generated README markdown layout
  return `
  # ${data.title}

  ${licenseBadge}
  [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](code_of_conduct.md)
  
  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${licenseTab}

  ## Installation

  Run this command to install dependencies: ${data.install}

  ## Usage

  ## Contributing

  ## Tests

  ## Questions

  View my GitHub profile: [${data.github}](https://github.com/${data.github})
  Reach me via email: ${data.email} 

  ${licenseSection}

`;
}

module.exports = generateMarkdown;