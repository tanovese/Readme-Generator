// The following are the packages needed for the application. Also, I am referencing the generateMarkdown function
// in the generateMarkdown const so that I can pass data below to the function
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');

// The following are the questions that the user will be promped to respond to in the terminal
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
// The writetoFile function takes in two parameters, fileName and data.
// the fs.writeFile then creates the file once we fill in those parameters in the
// init function below
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
  err ? console.log(err) : console.log('Success!')
)};

// The init function initializes the app using inquirer and .prompt
function init() {
  inquirer
  .prompt(questions)
  .then((response) => {
console.log(response);
console.log(generateMarkdown(response));
// writetoFile uses the given filename and the generateMarkdown function with the response
// which creates the md file.
writeToFile(`project-readme.md`, generateMarkdown(response))
});
}

// Function call to initialize app
init();
