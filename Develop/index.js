// array of questions for user
const questions = [
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
  { type: "input" },

  {
    type: "checkbox",
    name: "table of contents",
    message: "Select all that apply: ",
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
];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
init();
