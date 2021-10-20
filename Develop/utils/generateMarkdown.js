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
	* [Installation](#installation)
	* [Usage](#usage)
	* [Contributors](#contributors)
	* [Questions](#questions)

	## Install Instructions
	${data.installInstructions}

	## Usage 
	${data.usage}

	## Contributing
	${data.contributing}

	## Tests
	${data.tests}

	## Questions
	Contact me here:
	https://github.com/${data.gitHubName} or via email at ${data.email}

	## Website
	${data.url}
`;
}

module.exports = generateMarkdown;
