// Create the Word bank DONE
// Have a start game function DONE
// Inside game function, pull a word from the bank to transform into underscore DONE
// Once you have the word, display the underscores DONE
// Ask the user for a input

var inquirer = require("inquirer");
var Word = require("./Word.js");
var wordBank = ["Blue", "Green", "Red"];

function gameStart() {
  var randomWordfromBank =
    wordBank[Math.floor(Math.random() * wordBank.length)];
  var newWord = new Word(randomWordfromBank);
  console.log(newWord.underscores());

 givemealetter(newWord);
}

function givemealetter (input){

    inquirer.prompt([{type: "input", name: "letterInput", message: "Guess the letter!"}]).then(answers => { // In here: Have the inqurier or the prompt outside the game start to run over and over again, depending on the answer. If wrong answer, ask again, if it is the right answer the toggle the visibilty of letter.
        console.log(answers)
      // Have logic for answers.
      // if right answers, return letter.

    });
}

gameStart();
