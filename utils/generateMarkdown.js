// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);

  if (license == "<no license>") {
    return "";
  } else {
    console.log("will write");
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  console.log(license);

  if (license == "<no license>") {
    return "";
  } else {
    console.log("will write");
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  console.log(license);

  if (license == "<no license>") {
    return "";
  } else {
    console.log("will write");
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  renderLicenseBadge(data.license)
  renderLicenseLink(data.license)
  renderLicenseSection(data.license)

  return `# ${data.title}

`;
}

module.exports = generateMarkdown;