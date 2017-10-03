const fs = require('fs');
const inquirer = require('inquirer');
const ClozeCard = require('./CloseCard.js');
const BasicCard = require('./BasicCard.js');

// creates space for card objects to array
const basicFlashes = [];
const hotFlashes = [];

const questions = {
  type: "rawlist",
  name: "cardType",
  message: "Pick your variety flashcard, please.",
  choices: ["Basic Card", "Cloze Card"]
}

function start() {
  inquirer.prompt(questions).then(function(answer) {
      let fCard = answer.cardType;
      if (fCard === "Cloze Card") {
          hotFlashes(fCard)
      } else {
          basicFlashes(fCard)
      }
  });
};

// validates user entry
function validateInput(name) {
    if (name === "" || name === " ") {
      console.log('Please enter response')
    } else {
        return name !== '';
    }
} 

// records flash card entry
function writeRecord(cardType, question, solution) {
  console.log("front: ", question);
  console.log("back: ", solution);

  let fileName = cardType.split(' ').join("_");
  fs.appendFile(fileName + '.txt', '\n\n*******\n' + 'Question: ' + question + '\n\n' + 'Answer: ' + solution + '\n', function(err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Card logged.');
      }
  });
} // closes write to txt file function

// Cloze Card: prompts and action
function clozeCard(cardType) {
  inquirer.prompt([{
        type: "input",
        name: "clozeText",
        message: "Enter full text including fill-in-the-blank: ",
        validate: validateInput
    }, {
        type: "input",
        name: "clozeDelete",
        message: "Enter the text that will need to be filled-in to arrive at solution:  ",
        validate: validateInput
    }])
    .then(function(answer) {
        let text = answer.clozeText;
        let cloze = answer.clozeDelete;
        let newClozeCard = new ClozeCard(text, cloze); // gets new clozeCard object
        hotFlashes.push(newCloseCard); // stores growing collection of cards
        let question = newClozeCard.display;
        console.log("User input full text: ", newClozeCard.fullText);
        console.log("User input cloze: ", newClozeCard.cloze);
        console.log("Cloze card with deletion: ", newCloseCard.display);
        writeRecord(cardType, question, text); // write new instance of ClozeCard to .txt file
        start(); //starts card generator process after completing current card
  });




function basicFlash(cardType) {  
  inquirer.prompt([{
        type: "input",
        name: "basicText",
        message: "Enter full question for front of card: ",
        validate: validateInput
    }, {
        type: "input",
        name: "basicAnswer",
        message: "Enter answer for back of card: ",
        validate: validateInput
    }])
    .then(function(answer) {
        let front = answer.basicText;
        let back = answer.basicAnswer;
        let newBasicCard = new BasicCard(front, back) // new basic card object
        basicFlashes.push(newBasicCard);
        console.log('new Basic Card: ', newBasicCard)
        writeRecord(cardType, front, back);
        start();
    });
}

start()


