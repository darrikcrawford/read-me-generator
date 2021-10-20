// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown')


// TODO: Create an array of questions for user input
const questions = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'title',
			message: 'What is the title of your project? (Required)',
			validate: titleInput => {
				if (titleInput) {
					return true;
				} else {
					console.log('What is the title of your project?');
					return false; 
				}
			}	
		},
		{
			type: 'input',
			name: 'description',
			message: 'Provide a description for project'
		},
		{
			type: 'input',
			name: 'installation',
			message: 'Please provide any installation steps that are required for your project'
		},
		{
			type: 'input',
			name: 'usage',
			message: 'Please provide examples of how your project can be used'
		},
		{
			type: 'input',
			name: 'contributors',
			message: 'Please list all project contributors'
		},
		{
			type: 'input',
			name: 'tests',
			message: 'Please list any tests instructions for your project'
		},
		{
			type: 'input',
			name: 'github',
			message: 'Please provide your GitHub username'
		}, 
		{
			type: 'input',
			name: 'email',
			message: 'Please provide your email address'
		}
	])
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
	return new Promise((resolve, reject) => {
		fs.writeFile(fileName, data, err => {
			if (err) {
				reject(err);
				return; 
			}
			resolve({
				ok:true, 
				message: 'ReadMe File created'
			});
		});
	});
};

// TODO: Create a function to initialize app
function init() {
	questions()
    .then(questionsData => {
			writeToFile('./README.md',generateMarkdown(questionsData))
    })
}

// Function call to initialize app
init();