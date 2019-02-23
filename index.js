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

  inquirer.prompt(["Give me a letter"]).then(answers => {
    // Use user feedback for... whatever!!
  });
}
console.log(gameStart());
