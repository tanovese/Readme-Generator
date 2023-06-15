// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
  type: 'input',
  message: 'Please enter your project title',
  name: 'title',
},
{
  type: 'input',
  message: 'Please enter your project description',
  name: 'description',
},
{
  type: 'input',
  message: 'Please enter your project installation instructions',
  name: 'installation',
},
{
  type: 'input',
  message: 'Please enter your project usage information',
  name: 'usage'
},
{
  type: 'list',
  message: 'Please choose your project license',
  name: 'license',
  choices: ['Apache', 'Boost', 'GNU', 'MIT']
},
{
  type: 'input',
  message: 'Please enter your project contribution guidelines',
  name: 'contribution'
},
{
  type: 'input',
  message: 'Please enter your project test instructions',
  name: 'test',
},
{
  type: 'input',
  message: 'Please enter your Github username',
  name: 'github',
},
{
  type: 'input',
  message: 'Please enter your email address and instructions on how to reach you',
  name: 'email',
}]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!')
)};

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
console.log(response);
console.log(generateMarkdown(response));
// call the writeToFile function and give it the filename and generateMarkdown(response)
writeToFile(`project-readme.md`, generateMarkdown(response))
});
}

// Function call to initialize app
init();
