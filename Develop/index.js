var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
inquirer
  .prompt([
    {
      type: "input",
      name: "userName",
      message: "What is your github user name?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is your project called?",
    },
    {
      type: "input",
      name: "description",
      message: "Enter a description of your project.",
    },
    {
      type: "checkbox",
      name: "tableOfContents",
      message:
        "Which of the following would you like in your table of contents? Check all that apply.",
      choices: [
        "Installation",
        "Usage",
        "License",
        "Contributing",
        "Tests",
        "Questions",
      ],
    },
    {
      type: "input",
      name: "installation",
      message: "How is your project installed?",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe how this project can be used",
    },
    {
      type: "input",
      name: "license",
      message: "Enter your license information here",
    },
    {
      type: "input",
      name: "contributions",
      message: "How can others contribute to your project?",
    },
    {
      type: "input",
      name: "test",
      message: "Describe how to test this project",
    },
  ])
  .then(function (res) {
    // console.log(res);
    // console.log(res.title);
    // console.log(res.description);
    // console.log(res.tableOfContents);
    // console.log(res.installation);

    const md = `
        
  # ${res.title}
  ## Description
  ${res.description}

  ## Table of Contents
  1. [${res.tableOfContents[0]}](## Installation) 
  1. [${res.tableOfContents[1]}](## Usage)
  1. [${res.tableOfContents[2]}](## License)
  1. [${res.tableOfContents[3]}](## Contributing)
  1. [${res.tableOfContents[4]}](## Tests)
  1. [${res.tableOfContents[5]}](## Questions)
  
  ## Installation
  ${res.installation}

  ## Usage
  * ${res.usage}

  ## License
  * ${res.license}

  ## Contributing
  * ${res.contributions}

  ## Tests
  * ${res.test}

  ## Questions
  * Please email questions to ${res.email}

  * https://github.com/${res.userName}`;

    fs.writeFile("ReadMe.md", md, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("ReadMe.md created!");
      }
    });
  });

// // function to write README file
// function writeToFile(fileName, data) {}

// // function to initialize program
// function init() {}

// // function call to initialize program
// init();
