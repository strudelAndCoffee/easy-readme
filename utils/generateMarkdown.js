// returns a license badge based on which license is passed in
function renderLicenseBadge(license) {

  if (license == "<no license>") {
    return "";
  } else {
    return `<img src='https://img.shields.io/badge/License-${license}-green' />`;
  }
};

// returns the license link
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
    url = `https://choosealicense.com/licenses/${license}`;
  }

  return url;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if (license == "<no license>") {
    return "";
  }

  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);

  return `
  ## License

  <a href='${link}' style='text-decoration:none' >${badge}</a>


  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let licenseSection = renderLicenseSection(data.license);

  return `
  # ${data.title}

  ${licenseSection}

`;
}

module.exports = generateMarkdown;