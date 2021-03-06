// some code may be written without line tabbing to preserve markdown layout formatting

// returns a license badge
function renderLicenseBadge(license) {

  if (license == "<no license>") {
    return "";
  } else {
    let link = license.replace(/ /g, "%20");
    return `![License badge](https://img.shields.io/badge/License-${link}-green)`;
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
};

// returns license section of readme, unless no license selected
function renderLicenseSection(license) {

if (license == "<no license>") {
return "";
} else {

let link = renderLicenseLink(license);

return `
## License

This project is licensed under [${license}](${link})`;
}
};

// returns Contributer Covenant code of conduct badge
function renderContributeBadge(data) {
if (data.confirmContribute && !data.contribute) {
// link copied from: https://www.contributor-covenant.org/version/2/1/code_of_conduct/
return `![Code of Conduct badge](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)
`;
} else {
return "";
}
};

// returns contributing section of readme, unless no guidelines selected
function renderContributeSection(data) {

let guidelines = "";

if (data.confirmContribute) {
if (data.confirmCustom) {

guidelines = `
## Contributing

${data.contribute}`;
} else {

guidelines = `
## Contributing

Please review the Contributer Covenant [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt)`;
}
}
return guidelines;
};

// generates markdown file for README
function generateMarkdown(data) {

console.log(data);

// returns website link
const getSiteLink = () => {
let siteLink = "";
if (data.site) {
siteLink = `
Visit the deployed application's website at https://${data.site}
`;
}
return siteLink;
};

// returns license section in table of contents
const getLicenseTab = () => {
  if (data.license == "<no license>") {
    return "";
  } else {
    return "* [License](#license)"
  }
};

// returns contributing section in table of contents
const getContributionTab = () => {
  if (data.confirmContribute) {
    return `* [Contributing](#contributing)`;
  } else {
    return "";
  }
};

// variables for sections
let installCommand = "`" + data.install + "`";
let testCommand = "`" + data.test + "`";
let contributeSection = renderContributeSection(data);
let licenseSection = renderLicenseSection(data.license);

// variables for links
let website = getSiteLink();
let licenseTab = getLicenseTab();
let contributionTab = getContributionTab();

// variables for badges
let licenseBadge = renderLicenseBadge(data.license);
let contributeBadge = renderContributeBadge(data);

// README markdown layout
return `
# ${data.title}

${licenseBadge}
${contributeBadge}
## Description

${data.description}
${website}
## Table of Contents

* [Installation](#installation)
* [Tests](#tests)
* [Usage](#usage)
* [Questions](#questions)
${contributionTab}
${licenseTab}

## Installation

Enter this command to install dependencies: ${installCommand}

## Tests

Enter this command to run the application: ${testCommand}

## Usage

${data.info}

## Questions

For additional questions, you may reach me via email: ${data.email} 

View my GitHub profile: [GitHub profile](https://github.com/${data.github})
${contributeSection}
${licenseSection}
`;
};

module.exports = generateMarkdown;