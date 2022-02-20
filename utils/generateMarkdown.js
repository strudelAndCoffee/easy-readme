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

// returns license section of readme, unless no license is selected
function renderLicenseSection(license) {

  if (license == "<no license>") {
    return "";
  }

  let link = renderLicenseLink(license);

  return `
  ## License

  [${license}](${link})
  `;
};

// generates markdown file for README
function generateMarkdown(data) {

  console.log(data);

  let installCommand = "`" + data.install + "`";
  let testCommand = "`" + data.test + "`";
  
  // returns website link
  const getSiteLink = () => {

    let siteLink = "";

    if (data.site) {
      siteLink = `Visit the deployed application's website at https://${data.site}`;
    }

    return siteLink;
  };
  let website = getSiteLink();

  // returns license section in table of contents
  const getLicenseTab = () => {
    if (data.license == "<no license>") {
      return "";
    } else {
      return "* [License](#license)"
    }
  };
  let licenseTab = getLicenseTab();
  let licenseBadge = renderLicenseBadge(data.license);
  let licenseSection = renderLicenseSection(data.license);

  // README markdown layout
  return `
  # ${data.title}

  ${licenseBadge}
  ![Code of Conduct badge](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)

  ## Description

  ${data.description}

  ${website}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  ${licenseTab}

  ## Installation

  Enter this command to install dependencies: ${installCommand}

  ## Tests

  Enter this command to run the application: ${testCommand}

  ## Usage

  ${data.info}

  ## Contributing

  Please review the Contributer Covenant [Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.txt)

  ## Questions

  For additional questions, you may reach me via email: ${data.email} 

  View my GitHub profile: [${data.github}](https://github.com/${data.github})

  ${licenseSection}

`;
}

module.exports = generateMarkdown;