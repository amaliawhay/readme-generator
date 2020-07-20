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
      type: "checkbox",
      name: "license",
      message: "Choose your license",
      choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
      ],
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

    //holds user input
    const md = `
        
  # ${res.title}
  ## Description
  ${res.description}

  ## Table of Contents
  1. [Installation](##Installation) 
  1. [Usage](##Usage)
  1. [License](##License)
  1. [Contributing](##Contributing)
  1. [Tests](##Tests)
  1. [Questions](##Questions)
  
  ## Installation
  ${res.installation}

  ## Usage
  ${res.usage}

  ## License
  [![Generic badge](https://img.shields.io/badge/License-${res.license}-green.svg)](https://shields.io/)

  ## Contributing
  ${res.contributions}

  ## Tests
  ${res.test}

  ## Questions
  * Please email questions to ${res.email}

  * https://github.com/${res.userName}`;

    //writes user input to markdown file
    fs.writeFile("ReadMe.md", md, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("ReadMe.md successfully created!");
      }
    });
  });
