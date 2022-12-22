// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === data.choices[13])
  console.log("true");
  return '';
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

  ## Description
  ${data.description}

  ## Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributions](#contributions)
  [Tests](#tests)
  [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Use
  ${data.usage}

  ## License
  ${data.license}

  ## Contributions
  ${data.contribute}

  ## Tests
  ${data.tests}

  ## Questions
  For any questions or concerns, please refer to my github account: https://github.com/${data.username}
  Additionally, feel free to contact me via email: ${data.email}
`;
};

module.exports = {generateMarkdown, renderLicenseBadge};
