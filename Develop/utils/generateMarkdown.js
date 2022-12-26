// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//this function takes the user's answer to licensure to create the badge and url needed in the readme file
function licenseURLs(data)  {

  if (data.license === 'none')
   {url = '', badge = ''}
  else if (data.license === 'Apache License 2.0'){
    url = 'apache-2.0', badge = 'Apache_License_2.0' }
  else if (data.license === 'GNU General Public License v3.0'){
    url = 'gpl-3.0', badge = 'GNU_General_Public_License_v3.0'}
  else if (data.license === 'MIT License'){
    url = 'mit', badge = 'MIT_License' }
  else if (data.license === "BSD 2-Clause 'Simplified' License"){
    url = 'bsd-2-clause', badge = "BSD_2--Clause_'Simplified'_License"}
  else if (data.license === "BSD 3-Clause 'New' or 'Revised' License"){
    url = 'bsd-3-clause', badge = 'BSD_3--Clause_"New"_or_"Revised"_License'}
  else if (data.license === 'Boost Software License 1.0') {
    url = 'bsl-1.0', badge = 'Boost_Software_License_1.0' }
  else if (data.license === 'Creative Commons Zero v1.0 Universal') {
    url = 'cc0-1.0', badge = 'Creative_Commons_Zero_v1.0_Universal' }
  else if (data.license === 'Eclipse Public License 2.0') {
    url = 'epl-2.0', badge = 'Eclipse_Public_License_2.0'}
  else if (data.license === 'GNU Affero General Public License v3.0') {
    url = 'agpl-3.0', badge = 'GNU_Affero_General_Public_License_v3.0'}
  else if (data.license === 'GNU General Public License v2.0') {
    url = 'gpl-2.0', badge = 'GNU_General_Public_License_v2.0'}
  else if (data.license === 'GNU Lesser General Public License v2.1') {
    url = 'lgpl-2.1', badge = 'GNU_Lesser_General_Public_License_v2.1'}
  else if (data.license === 'Mozilla Public License 2.0') {
    url = 'mpl-2.0', badge = 'Mozilla_Public_License_2.0'}
  else if (data.license === 'The Unlicense') {
    url = 'unlicense', badge = 'The_Unlicense'}

    return `${url} ${badge} `;
};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README

// TODO: Create a function to generate markdown for README
//this function generates what will be written to the readme file
//this styles the readme and pulls user input to customize the sections based off of the user input
function generateMarkdown(data) {
//if the user chose to not include a license this will be returned
//this excludes the license badge and explains no license was used for the project
if (data.license === 'none') {
 return  `# ${data.projectTitle}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributions](#contributions)
- [Tests](#tests)
- [Questions](#questions)
    
## Installation
${data.installation}
    
## Use
${data.usage}
    
## License
This project does not use a license.
      
    
## Contributions
${data.contribute}
    
## Tests
${data.tests}
    
## Questions
For any questions or concerns, please refer to my github account or contact me via email: 
- https://github.com/${data.username}
- email: ${data.email};`
  }

//if the user does use a license then this is returned and written to the readme file
//this includes the license badge under the project title
//provides a link and license info in readme's license section
else {
licenseURLs(data)
console.log(url)
console.log(badge)
  
return `# ${data.projectTitle}


![badge](https://img.shields.io/badge/license-${badge}-purple)


  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributions](#contributions)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
This project is licensed under the ${data.license}.
- For information about this license, please visit: https://choosealicense.com/licenses/${url}

## Contributions
  ${data.contribute}

## Tests
  ${data.tests}

  ## Questions
  For any questions or concerns, please refer to my github account or contact me via email:
- https://github.com/${data.username}
- ${data.email}
`;
} };

//these functions are the exports returned to the required files
module.exports = {generateMarkdown, licenseURLs};
