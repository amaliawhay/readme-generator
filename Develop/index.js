var inquirer = require("inquirer");
var fs = require("fs");

// array of questions for user
inquirer
  .prompt([
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
      name: "tableOfContents",
      message:
        "What would you like in your table of contents?",
    },
    {
      type: "input",
      name: "installation",
      message: "How is your project installed?",
    },
    {
      type: "input",
      name: "usage",
      message: "Describe the ways to use your project",
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
    console.log(res);
    console.log(res.title);
    console.log(res.description);
    console.log(res.tableOfContents);
    console.log(res.installation);

    const md = `
        
  ## Title
  * ${res.title}
  ## Description
  * ${res.description}
  ## Table of Contents
  * ${res.tableOfContents}
  ## Installation
  * ${res.installation}
  ## Usage
  * 
  ## License
  * ${res.license}
  ## Contributing
  * ${res.contributions}
  ## Tests
  * ${res.test}
  ## Questions
  * `;

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
